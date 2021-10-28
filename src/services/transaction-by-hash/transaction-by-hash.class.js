/* eslint-disable no-unused-vars */
const dbConnection = require('../../dbConnection')
const connectDb = dbConnection.getDbConnection().then((db) => {
  db.connect().then(console.log("Connected to PostgreSQL from Server"));
  return db;
});  
exports.TransactionByHash = class TransactionByHash {
  constructor (options) {
    this.options = options || {};
  }

  async find (params) {
    return [];
  }

  async get (id, params) {
    return {
      id, text: `A new message with ID: ${id}!`
    };
  }

  async create (data, params) {
    try{
    const hash = data.hash;
          
    const result = await connectDb.query(`SELECT * FROM transactions WHERE hash='${hash}'`);
    return result?.rows;
  } catch (error) {
    return"Some error occurred!";}
  }

  async update (id, data, params) {
    return data;
  }

  async patch (id, data, params) {
    return data;
  }

  async remove (id, params) {
    return { id };
  }
};
