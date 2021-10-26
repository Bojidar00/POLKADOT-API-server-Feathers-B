// Initializes the `AccountTransactions` service on path `/api/node/address/transactions/:address`
const { AccountTransactions } = require('./account-transactions.class');
const hooks = require('./account-transactions.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/api/node/address/transactions/:address', new AccountTransactions(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('api/node/address/transactions/:address');

  service.hooks(hooks);
};
