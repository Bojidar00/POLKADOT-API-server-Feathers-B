const lastBlock = require('./last-block/last-block.service.js');
const blockHashByNumber = require('./block-hash-by-number/block-hash-by-number.service.js');
const blockByHash = require('./block-by-hash/block-by-hash.service.js');
const xBlocksAfterN = require('./x-blocks-after-n/x-blocks-after-n.service.js');
const accountsCount = require('./accounts-count/accounts-count.service.js');
const accountTransactionsCount = require('./account-transactions-count/account-transactions-count.service.js');
const accountTransactions = require('./account-transactions/account-transactions.service.js');
const transactionsCount = require('./transactions-count/transactions-count.service.js');
const transactionsFromBlock = require('./transactions-from-block/transactions-from-block.service.js');
const transactionByHash = require('./transaction-by-hash/transaction-by-hash.service.js');
const xTransactionsAfterNth = require('./x-transactions-after-nth/x-transactions-after-nth.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(lastBlock);
  app.configure(blockHashByNumber);
  app.configure(blockByHash);
  app.configure(xBlocksAfterN);
  app.configure(accountsCount);
  app.configure(accountTransactionsCount);
  app.configure(accountTransactions);
  app.configure(transactionsCount);
  app.configure(transactionsFromBlock);
  app.configure(transactionByHash);
  app.configure(xTransactionsAfterNth);
};
