const Match = require("../structures/cores/Match");

module.exports = class extends Match {
  constructor(client) {
    super(client, {
      match: "content",
    });
  }
  init(_, phrase) {
    if (phrase) {
      return phrase.join(" ");
    } else {
      return null;
    }
  }
};
