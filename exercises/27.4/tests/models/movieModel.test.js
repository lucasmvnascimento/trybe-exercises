const { expect } = require('chai');
const sinon = require('sinon');
const { MongoClient, ObjectId } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');

const MovieModel = require('../../models/movieModel');

describe('Valida o endpoint de encontrar filme por ID', () => {
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

  describe('quando o id não existe', async () => {
    it('deve retornar "falso"', async () => {
      const response = await MovieModel.findById(payloadId);
      expect(response).to.be.equal(null);
    });
  });

  describe('quando o id existe e o filme é encontrado', async () => {
    before(async () => {
      await connectionMock.db('model_example').collection('movies')
      .insertOne({
        _id: ObjectId(payloadId),
        title: 'Example Movie',
        directedBy: 'Jane Dow',
        releaseYear: 1999,
      });
    })
    it('deve retornar um objeto', async () => {
      const response = await MovieModel.findById(payloadId);
      expect(response).to.be.a('object');
    });
    it('o objeto deve conter os detalhes do filme', async () => {
      const response = await MovieModel.findById(payloadId);
      expect(response).to.include.all.keys('id', 'title', 'releaseYear', 'directedBy');
    });
  });
});