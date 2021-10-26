const app = require('../../src/app');

describe('\'AccountsCount\' service', () => {
  it('registered the service', () => {
    const service = app.service('api/node/accounts/count');
    expect(service).toBeTruthy();
  });
});
