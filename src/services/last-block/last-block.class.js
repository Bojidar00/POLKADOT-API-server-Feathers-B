/* eslint-disable no-unused-vars */
const apiConnection = require('../../nodeConnection')
const connectApi = apiConnection.getNodeConnection().then((api) => {
  return api;
});

exports.LastBlock = class LastBlock {
  constructor (options) {
    this.options = options || {};
  }

  async find (params) {
    return await connectApi.then(api => api.rpc.chain.getBlock());
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
