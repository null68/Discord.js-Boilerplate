const Handler = require("../cores/Handler");
const fs = require("fs");
module.exports = class extends Handler {
  constructor(client) {
    super(client, {
      name: "ArgumentHandler",
      enabled: true,
    });
  }
  async init() {
    const ARGUMENTS = fs.readFileSync("arguments");
    for (let ARGUMENT of ARGUMENTS) {
      const FILE = new (require("../../arguments/" + ARGUMENT))(this.client);
      if (!FILE.enabled) return;
      this.client.args[FILE.name] = FILE.init()
    }
  }
};
