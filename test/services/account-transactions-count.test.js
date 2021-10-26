const app = require('../../src/app');

describe('\'AccountTransactionsCount\' service', () => {
  it('registered the service', () => {
    const service = app.service('api/node/address/transactions/count/:address');
    expect(service).toBeTruthy();
  });
});
