/* eslint-disable no-unused-vars */
const dbConnection = require('../../dbConnection')
const connectDb = dbConnection.getDbConnection().then((db) => {
  db.connect().then(console.log("Connected to PostgreSQL from Server"));
  return db;
});  
exports.TransactionsCount = class TransactionsCount {
  constructor (options) {
    this.options = options || {};
  }

  async find (params) {
    try{
    result = await connectDb.query(`SELECT COUNT(*) AS count FROM transactions`);
            return  result?.rows;
          } catch (error) {
            return"Some error occurred!";}
  }

  async get (id, params) {
    return {
      id, text: `A new message with ID: ${id}!`
    };
  }

  async create (data, params) {
    if (Array.isArray(data)) {
      return Promise.all(data.map(current => this.create(current, params)));
    }

    return data;
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
