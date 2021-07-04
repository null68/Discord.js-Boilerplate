const Argument = require("../structures/cores/Argument");
module.exports = class extends Argument {
  constructor(client) {
    super(client, {
      type: "string",
    });
  }
  init(_, phrase) {
    if (phrase) {
      return phrase;
    } else {
      return null;
    }
  }
};
