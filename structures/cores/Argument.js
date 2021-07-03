module.exports = class {
  constructor(client, options) {
    this.client = client;
    this.name = options.name;
  }
  async init() {
    return null;
  }
};
