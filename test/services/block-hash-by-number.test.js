const app = require('../../src/app');

describe('\'BlockHashByNumber\' service', () => {
  it('registered the service', () => {
    const service = app.service('api/node/blocks/num/:num');
    expect(service).toBeTruthy();
  });
});
