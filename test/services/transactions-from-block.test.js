const app = require('../../src/app');

describe('\'TransactionsFromBlock\' service', () => {
  it('registered the service', () => {
    const service = app.service('api/node/transactions/block');
    expect(service).toBeTruthy();
  });
});
