const Command = require("../../structures/cores/Command");

module.exports = class extends Command {
  constructor(client) {
    super(client, {
      name: "say",
      aliases: [],
      description: "Salje odredjenu poruku",
      category: "🛠️ Moderacija",
      usage: "<tekst>",
      args: [
        {
          name: "tekst",
          match: "content",
        },
      ],
    });
  }
  async init(message, { tekst }) {
    if (!tekst) {
      return message.channel.send("Trebas upisati tekst!");
    } else {
      message.delete();
      return message.channel.send(tekst);
    }
  }
};
