/* eslint-disable no-unused-vars */
const apiConnection = require('../../nodeConnection')
const connectApi = apiConnection.getNodeConnection().then((api) => {
  return api;
});

exports.BlockHashByNumber = class BlockHashByNumber {
  constructor (options) {
    this.options = options || {};
  }

  async find (params) {
    return [];
  }

  async get (id, params) {
    console.log(params);
    console.log(params.num);
    return connectApi.then(api => api.rpc.chain.getBlockHash(params));
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
