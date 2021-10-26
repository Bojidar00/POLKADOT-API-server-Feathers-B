const app = require('../../src/app');

describe('\'TransactionsCount\' service', () => {
  it('registered the service', () => {
    const service = app.service('api/node/transactions/count');
    expect(service).toBeTruthy();
  });
});
