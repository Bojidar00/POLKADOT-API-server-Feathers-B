/* eslint-disable no-unused-vars */
const apiConnection = require('../../nodeConnection');
const connectApi = apiConnection.getNodeConnection().then((api) => {
  return api;
});
exports.BlockByHash = class BlockByHash {
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
    return connectApi.then(api => api.rpc.chain.getBlock(data.hash));
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
