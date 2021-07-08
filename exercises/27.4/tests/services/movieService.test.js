const { expect } = require('chai');
const sinon = require('sinon');
const { MongoMemoryServer } = require('mongodb-memory-server');
const { MongoClient, ObjectId } = require('mongodb');

const MovieService = require('../../services/movieService');

describe('Busca um filme por ID', () => {
  const payloadId = '604cb554311d68f491ba5781';
  const DBServer = new MongoMemoryServer();
  let connectionMock = null;

  before(async () => {
    const URLMock = await DBServer.getUri();
    connectionMock = await MongoClient.connect(URLMock, {useNewUrlParser: true, useUnifiedTopology: true});
    sinon.stub(MongoClient, 'connect').resolves(connectionMock);
  });

  after(async () => {
    MongoClient.connect.restore();
    await DBServer.stop();
  });

  describe('quando não é encontrado o filme pelo ID', async () => {
    it('retorna null', async () => {
      const response = await MovieService.findById(payloadId);
      expect(response).to.be.equal(null);
    });
  });
  describe('quando o filme é encontrado', async () => {
    before(async () => {
      await connectionMock.db('model_example').collection('movies')
      .insertOne({
        _id: ObjectId(payloadId),
        title: 'Example Movie',
        directedBy: 'Jane Dow',
        releaseYear: 1999,
      });
    })
    it('retorna objeto', async () => {
      const response = await MovieService.findById(payloadId);
      expect(response).to.be.an('object');
    });
    it('objeto contém os detalhes do filme', async () => {
      const response = await MovieService.findById(payloadId);
      expect(response).to.have.all.keys('id', 'title', 'directedBy', 'releaseYear');
    });
  });
});