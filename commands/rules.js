const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    return message.channel.send(':exclamation: <#800418367802179594> ezt kérlek alaposan olvasd át!!:exclamation: ').then(m => m.delete({timeout:"20000"}));
}

module.exports.config = {
    name: "rules",
    description: "help in rules",
    usage: "!rules",
    accessableby: "Members",
    aliases: []
} 