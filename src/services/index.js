const lastBlock = require('./last-block/last-block.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(lastBlock);
};
