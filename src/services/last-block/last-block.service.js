// Initializes the `LastBlock` service on path `/api/node/blocks`
const { LastBlock } = require('./last-block.class');
const hooks = require('./last-block.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/api/node/blocks', new LastBlock(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('api/node/blocks');

  service.hooks(hooks);

  
};
