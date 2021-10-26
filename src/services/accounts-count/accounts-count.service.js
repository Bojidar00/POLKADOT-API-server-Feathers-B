// Initializes the `AccountsCount` service on path `/api/node/accounts/count`
const { AccountsCount } = require('./accounts-count.class');
const hooks = require('./accounts-count.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/api/node/accounts/count', new AccountsCount(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('api/node/accounts/count');

  service.hooks(hooks);
};
