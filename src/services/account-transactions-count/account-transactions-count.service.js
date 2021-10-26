// Initializes the `AccountTransactionsCount` service on path `/api/node/address/transactions/count/:address`
const { AccountTransactionsCount } = require('./account-transactions-count.class');
const hooks = require('./account-transactions-count.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/api/node/address/transactions/count/:address', new AccountTransactionsCount(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('api/node/address/transactions/count/:address');

  service.hooks(hooks);
};
