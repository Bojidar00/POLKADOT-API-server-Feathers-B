const lastBlock = require('./last-block/last-block.service.js');
const blockHashByNumber = require('./block-hash-by-number/block-hash-by-number.service.js');
const blockByHash = require('./block-by-hash/block-by-hash.service.js');
const xBlocksAfterN = require('./x-blocks-after-n/x-blocks-after-n.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(lastBlock);
  app.configure(blockHashByNumber);
  app.configure(blockByHash);
  app.configure(xBlocksAfterN);
};
