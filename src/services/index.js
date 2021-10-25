const lastBlock = require('./last-block/last-block.service.js');
const blockHashByNumber = require('./block-hash-by-number/block-hash-by-number.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(lastBlock);
  app.configure(blockHashByNumber);
};
