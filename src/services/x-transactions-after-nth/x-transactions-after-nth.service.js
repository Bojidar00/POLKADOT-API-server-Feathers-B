// Initializes the `XTransactionsAfterNth` service on path `/api/node/transactions/:x/:n`
const { XTransactionsAfterNth } = require('./x-transactions-after-nth.class');
const hooks = require('./x-transactions-after-nth.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/api/node/transactions/:x/:n', new XTransactionsAfterNth(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('api/node/transactions/:x/:n');

  service.hooks(hooks);
};
