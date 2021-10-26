const app = require('../../src/app');

describe('\'XBlocksAfterN\' service', () => {
  it('registered the service', () => {
    const service = app.service('api/node/blocks/:x/:n');
    expect(service).toBeTruthy();
  });
});
