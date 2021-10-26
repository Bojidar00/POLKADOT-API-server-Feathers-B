// Initializes the `TransactionByHash` service on path `/api/node/transactions/hash`
const { TransactionByHash } = require('./transaction-by-hash.class');
const hooks = require('./transaction-by-hash.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/api/node/transactions/hash', new TransactionByHash(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('api/node/transactions/hash');

  service.hooks(hooks);
};
