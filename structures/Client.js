const { Client, Collection } = require("discord.js");

module.exports = class OnyxClient extends Client {
  constructor(options) {
    super({
      disableMentions: "everyone",
    });
    // Options
    this.token = options.token;
    this.prefix = options.prefix;
    this.owner = options.owners;
    // Objects
    this.args = {};
    this.matches = {};
    // Collections
    this.commands = new Collection();
    this.aliases = new Collection();
    
    this.logger = new (require("../structures/managers/LogsManager"))(this);
  }

  async init() {
    new (require("../structures/managers/HandlerManager"))(this).init();
    return this.login();
  }
};
