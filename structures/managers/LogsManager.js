const chalk = require("chalk");

module.exports = class {
  constructor(client) {
    this.client = client;
  }
  async error(text) {
    console.log(
      `${chalk.gray("[")}${chalk.red("ERROR")}${chalk.gray("] - ")}${text}`
    );
  }
  async info(text) {
    console.log(
      `${chalk.gray("[")}${chalk.green("INFO")}${chalk.gray("] - ")}${text}`
    );
  }
};
