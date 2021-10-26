/* eslint-disable no-unused-vars */
const apiConnection = require('../../nodeConnection')
const connectApi = apiConnection.getNodeConnection().then((api) => {
  return api;
});
exports.XBlocksAfterN = class XBlocksAfterN {
  constructor (options) {
    this.options = options || {};
  }

  async find (params) {
    const x = params.x;
    const n = params.n;
        
            return connectApi.then( async api => {
                let i = 1;
                let blocks = [];
                
                while (i <= x)  {
                    let tempBlock = await api.rpc.chain.getBlockHash(n-i);
                    blocks.push(tempBlock);
                    i++;
                }
        
                return blocks;
            })
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
