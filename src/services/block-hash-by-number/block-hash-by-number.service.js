// Initializes the `BlockHashByNumber` service on path `/api/node/blocks/num/:num`
const { BlockHashByNumber } = require('./block-hash-by-number.class');
const hooks = require('./block-hash-by-number.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/api/node/blocks/num/:num', new BlockHashByNumber(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('api/node/blocks/num/:num');

  service.hooks(hooks);
};
