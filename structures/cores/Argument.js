module.exports = class {
  constructor(client, options) {
    this.client = client;
    this.type = options.type;
  }
  async init() {
    return null;
  }
};
