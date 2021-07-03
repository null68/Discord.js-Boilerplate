const fs = require("fs");

module.exports = class {
  constructor(client) {
    this.client = client;
  }
  async init() {
    const FILES = fs.readdirSync("structures/handlers");
    for (const FILE of FILES) {
      const HANDLER = new (require("../handlers/" + FILE))(this.client);
      if (!HANDLER.enabled) continue;
      HANDLER.init();
    }
  }
};
