const app = require('../../src/app');

describe('\'TransactionByHash\' service', () => {
  it('registered the service', () => {
    const service = app.service('api/node/transactions/hash');
    expect(service).toBeTruthy();
  });
});
