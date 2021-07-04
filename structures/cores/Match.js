module.exports = class {
  constructor(client, options) {
    this.client = client;
    this.match = options.match;
  }
  async init() {
    return null;
  }
};
