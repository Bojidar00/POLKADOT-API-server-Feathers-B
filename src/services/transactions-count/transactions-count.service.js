// Initializes the `TransactionsCount` service on path `/api/node/transactions/count`
const { TransactionsCount } = require('./transactions-count.class');
const hooks = require('./transactions-count.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/api/node/transactions/count', new TransactionsCount(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('api/node/transactions/count');

  service.hooks(hooks);
};
