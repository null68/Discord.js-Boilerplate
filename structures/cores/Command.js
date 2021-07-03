module.exports = class {
  constructor(client, options) {
    this.client = client;
    // Non-objects
    this.name = options.name || null;
    this.description = options.description || "Nema deskripciju";
    this.category = options.category || "In development";
    // Arrays
    this.args = options.args || null;
    this.permissions = options.permissions || new Array();
    this.aliases = options.aliases || new Array();
  }
  async init(message) {
    this.client.logger.error(this.name + ", nema init() funkciju!");
    message.channel.send("Komanda nema init() funkciju!");
  }
};
