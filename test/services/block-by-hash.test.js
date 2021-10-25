const app = require('../../src/app');

describe('\'BlockByHash\' service', () => {
  it('registered the service', () => {
    const service = app.service('api/node/blocks/hash');
    expect(service).toBeTruthy();
  });
});
