const Handler = require("../cores/Handler");
const fs = require("fs");
module.exports = class extends Handler {
  constructor(client) {
    super(client, {
      name: "MatchHandler",
      enabled: true,
    });
  }
  async init() {
    const MATCHES = fs.readdirSync("matches");
    for (let MATCH of MATCHES) {
      const FILE = new (require("../../matches/" + MATCH))(this.client);
      this.client.matches[FILE.match] = FILE;
    }
  }
};
