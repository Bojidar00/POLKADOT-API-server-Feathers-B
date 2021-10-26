// Initializes the `TransactionsFromBlock` service on path `/api/node/transactions/block`
const { TransactionsFromBlock } = require('./transactions-from-block.class');
const hooks = require('./transactions-from-block.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/api/node/transactions/block', new TransactionsFromBlock(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('api/node/transactions/block');

  service.hooks(hooks);
};
