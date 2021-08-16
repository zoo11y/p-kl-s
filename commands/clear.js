const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
            
    if (message.deletable) {
        message.delete();
    }

    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        return message.reply("Missing Permissions!").then(m => m.delete(5000));
    }

    if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
        return message.reply("This is not a number").then(m => m.delete(5000));
    }

    let deleteAmount;
    if (parseInt(args[0]) > 100) {
        deleteAmount = 100;
    } else {
        deleteAmount = parseInt(args[0]);
    }
    const clearEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`:no_entry: Kitöröltem ${deleteAmount} üzenetet:no_entry: ` )
        .setAuthor("Control clan mod system", 'https://cdn.discordapp.com/attachments/873529771869487124/875122474243727391/1628670500150.png')

    message.channel.bulkDelete(deleteAmount, true)
    message.channel.send(clearEmbed).then(m => m.delete({timeout:"20000"}));

}

module.exports.config = {
    name: "clear",
    description: "clears message",
    usage: "?clear",
    accessableby: "Moderátorok",
    aliases: ['c', 'purge']
}