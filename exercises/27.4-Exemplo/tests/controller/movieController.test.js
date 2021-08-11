const sinon = require('sinon');
const { expect } = require('chai');

const MoviesController = require('../../controllers/movieController');
const MoviesService = require('../../services/movieService');

describe('Ao chamar o controller de create', () => {
  describe('quando o payload informado não é válido', async () => {
    const request = {};
    const response= {};

    before(() => {
      request.body = {};

      response.status = sinon.stub().returns(response);
      response.send = sinon.stub().returns();
    });

    it('é chamado o status com código 400', async () => {
      await MoviesController.create(request, response);
      expect(response.status.calledWith(400)).to.be.equal(true);
    });
    it('é chamado o send com a mensagem "Dados inválidos"', async () => {
      await MoviesController.create(request, response);
      expect(response.send.calledWith('Dados inválidos')).to.be.equal(true);
    });
  });

  describe('quando é inserido com sucesso', async () => {
    const request = {};
    const response = {};

    before(() => {
      request.body = {
        title: 'Example Movie',
        directedBy: 'Jane Dow',
        releaseYear: 1999,
      };

      response.status = sinon.stub().returns(response);
      response.send =  sinon.stub().returns();
    })

    it('é chamado o status com código 201', async () => {
      await MoviesController.create(request, response);
      expect(response.status.calledWith(201)).to.be.equal(true);
    });
    it('é chamado o send com a mensagem "Filme criado com sucesso!"', async () => {
      await MoviesController.create(request, response);
      expect(response.send.calledWith('Filme criado com sucesso!')).to.be.equal(true);
    });
  });


});