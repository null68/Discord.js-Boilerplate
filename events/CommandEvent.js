const Event = require("../structures/cores/Event");
module.exports = class extends Event {
  constructor(client) {
    super(client, {
      name: "message",
      enabled: true,
    });
  }
  async init(message) {
    if (!message.content.startsWith(this.client.prefix) || message.author.bot)
      return;

    let ARGS = message.content.slice(this.client.prefix).trim().split("/ +/");
    let COMMAND = ARGS.shift().toLowerCase();
    let COMMAND_ARGS;
    if (this.client.commands.has(COMMAND)) {
      if (this.client.args.has(COMMAND)) {
        for (let ARG of this.client.args.get(COMMAND)) {
          if (this.client.args.has(ARG.name)) {
            COMMAND_ARGS[ARG.name] = this.client.args[ARG.name];
          } else {
            COMMAND_ARGS[ARG.name] = null;
          }
        }
        this.client.commands.get(COMMAND).init(message, COMMAND_ARGS);
      }
      this.client.commands.get(COMMAND).init(message);
    }
  }
};
