const app = require('../../src/app');

describe('\'AccountTransactions\' service', () => {
  it('registered the service', () => {
    const service = app.service('api/node/address/transactions/:address');
    expect(service).toBeTruthy();
  });
});
