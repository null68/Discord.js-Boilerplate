const Argument = require("../structures/cores/Argument");
module.exports = class extends Argument {
  constructor(client) {
    super(client, {
      name: "text",
    });
  }
  async init() {}
};
