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
    let ARGS = message.content
      .slice(this.client.prefix.length)
      .trim()
      .split(/ +/);
    let COMMAND = ARGS.shift().toLowerCase();
    let COMMAND_ARGS = {};

    if (this.client.commands.has(COMMAND)) {
      let i = 0;
      if (this.client.commands.get(COMMAND).args) {
        for (let ARG of this.client.commands.get(COMMAND).args) {
          if (ARG.hasOwnProperty("type")) {
            COMMAND_ARGS[ARG.name] = this.client.args[ARG.type].init(
              message,
              ARGS[i]
            );
          } else if (ARG.hasOwnProperty("match")) {
            COMMAND_ARGS[ARG.name] = this.client.matches[ARG.match].init(
              message,
              ARGS
            );
          }
          i++;
        }
        this.client.commands.get(COMMAND).init(message, COMMAND_ARGS);
      } else {
        this.client.commands.get(COMMAND).init(message);
      }
    }
  }
};
