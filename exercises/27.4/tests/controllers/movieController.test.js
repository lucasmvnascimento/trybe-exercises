const { expect } = require('chai');
const sinon = require('sinon');
const { MongoClient, ObjectId } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');

const MovieController = require('../../controllers/movieController');

describe('Validar requisições do controller dos filmes', () => {

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

  describe('ao chamar a busca do controller por Id de filmes', async () => {
    const request = {};
    const response = {};

    before(() => {
      request.params = {};
      response.status = sinon.stub().returns(response);
      response.send = sinon.stub().returns();
    });

    it('quando o payload não é válido', async () => {
      await MovieController.findById(request,response);
      expect(response.status.calledWith(404)).to.be.equal(true);
      expect(response.send.calledWith('Filme não encontrado')).to.be.equal(true);
    });
  });

  describe('ao chamar a busca do controller por Id de filmes', async () => {
    const request = {};
    const response = {};

    const payloadMovie = {
        id: '604cb554311d68f491ba5781',
        title: 'Example Movie',
        directedBy: 'Jane Dow',
        releaseYear: 1999,
    }

    before(async () => {
      await connectionMock.db('model_example').collection('movies')
      .insertOne({
        _id: ObjectId('604cb554311d68f491ba5781'),
        title: 'Example Movie',
        directedBy: 'Jane Dow',
        releaseYear: 1999,
      });

      request.params = { id: '604cb554311d68f491ba5781' };

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
    });

    it('quando o filme é encontrado', async () => {
      await MovieController.findById(request, response);
      expect(response.status.calledWith(200)).to.be.equal(true);
      expect(response.json.calledWith(payloadMovie)).to.be.equal(true);
    });
 
  });
});

