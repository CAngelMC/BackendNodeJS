const assert = require('assert');
const proxyquire = require('proxyquire');

const { MongoLibMock, getAllStub } = require('../utils/mocks/mongoLib');

// const { moviesMock } = require('../utils/mocks/movies');

describe('services -movies', function () {
  const MoviesService = proxyquire('../services/movies', {
    '../lib/mongo': MongoLibMock,
  });

//   const moviesService = new MoviesService();

  describe('when getMovies method is called', async function () {
    it('should call the getAll MongoLib method', async function () {
      await MoviesService.getMovies({});
      assert.strictEqual(getAllStub.called, true);
    });
  });
});
