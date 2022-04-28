const { Client } = require("discord.js");
module.exports = class JalixClient extends Client {
    constructor(token) {
        super();
        this.token = token;
    };
};
