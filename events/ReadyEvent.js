const Event = require("../structures/cores/Event");
module.exports = class extends Event {
  constructor(client) {
    super(client, {
      name: "ready",
      enabled: true,
    });
  }
  async init() {
    this.client.logger.info("Online");
  }
};
