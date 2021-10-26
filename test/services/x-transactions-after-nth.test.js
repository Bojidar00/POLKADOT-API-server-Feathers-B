const app = require('../../src/app');

describe('\'XTransactionsAfterNth\' service', () => {
  it('registered the service', () => {
    const service = app.service('api/node/transactions/:x/:n');
    expect(service).toBeTruthy();
  });
});
