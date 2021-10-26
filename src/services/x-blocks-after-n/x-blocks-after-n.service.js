// Initializes the `XBlocksAfterN` service on path `/api/node/blocks/:x/:n`
const { XBlocksAfterN } = require('./x-blocks-after-n.class');
const hooks = require('./x-blocks-after-n.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/api/node/blocks/:x/:n', new XBlocksAfterN(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('api/node/blocks/:x/:n');

  service.hooks(hooks);
};
