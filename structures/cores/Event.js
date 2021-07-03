module.exports = class {
  constructor(client, options) {
    this.client = client;
    this.name = options.name;
    this.enabled = options.enabled;
  }
  async init() {
    this.client.logger.error(this.name + ", nema init() funkciju.");
  }
};
