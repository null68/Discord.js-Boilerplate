new (require("./structures/Client"))({
  token: require("./store/index").main.token,
  prefix: require("./store/index").main.prefix,
  owners: require("./store/index").main.owners,
}).init();
