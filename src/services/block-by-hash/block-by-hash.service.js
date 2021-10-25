// Initializes the `BlockByHash` service on path `/api/node/blocks/hash`
const { BlockByHash } = require('./block-by-hash.class');
const hooks = require('./block-by-hash.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/api/node/blocks/hash', new BlockByHash(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('api/node/blocks/hash');

  service.hooks(hooks);
};
