const { Client } = require("discord.js");
module.exports = class AetherClient extends Client {
    constructor(token) {
        super();
        this.token = token;
    };
};