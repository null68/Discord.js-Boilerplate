const Handler = require("../cores/Handler");
const fs = require("fs");
module.exports = class extends Handler {
  constructor(client) {
    super(client, {
      name: "EventHandler",
      enabled: true,
    });
  }
  async init() {
    const EVENTS = fs.readdirSync("events");
    for (const EVENT of EVENTS) {
      const FILE = new (require("../../events/" + EVENT))(this.client);
      if (!FILE.enabled) continue;
      this.client.on(FILE.name, (...args) => FILE.init(...args));
    }
  }
};
