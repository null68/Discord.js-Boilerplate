const Handler = require("../cores/Handler");
const fs = require("fs");
module.exports = class extends Handler {
  constructor(client) {
    super(client, {
      name: "CommandHandler",
      enabled: true,
    });
  }
  async init() {
    const CATEGORIES = fs.readdirSync("commands");
    for (const CATEGORY of CATEGORIES) {
      let EACH_CATEGORY = fs.readdirSync("commands/" + category);
      for (const COMMAND of EACH_CATEGORY) {
        const COMMAND_CLASS = new (require("../../commands/" +
          EACH_CATEGORY +
          "/" +
          COMMAND))(this.client);
        this.client.commands.set(COMMAND_CLASS.name, COMMAND_CLASS);
        if (COMMAND_CLASS.args) {
          for (const arg of args) {
            this.client.args.set(arg, COMMAND_CLASS.name);
          }
        }
        for (const ALIAS of COMMAND_CLASS.aliases) {
          this.client.aliases.set(ALIAS, COMMAND_CLASS.name);
        }
      }
    }
  }
};
