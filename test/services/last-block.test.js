const app = require('../../src/app');

describe('\'LastBlock\' service', () => {
  it('registered the service', () => {
    const service = app.service('api/node/blocks');
    expect(service).toBeTruthy();
  });
});
