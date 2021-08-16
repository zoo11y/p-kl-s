const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    return message.channel.send(":star: <#783365396211695636> ez segíthet a tgfben!!:star:  ").then(m => m.delete({timeout:"20000"}));
}

module.exports.config = {
    name: "tgf",
    description: "helps in tgf",
    usage: "!tgf",
    accessableby: "Members",
    aliases: ['']
} 