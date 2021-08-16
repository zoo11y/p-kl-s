const Discord = require("discord.js")
const botconfig = require("../botsettings.json");


module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission(['ADMINISTRATOR'])) return;
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice[0]);
    if(member.hasPermission(['ADMINISTRATOR']) && !message.member.hasPermission('ADMINISTRATOR')) return;

        let mutedRole = message.guild.roles.cache.get('875004728839381013');
        const clearEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`:mute: @${member} sikeresen le lett némítva :mute:` )
        .setAuthor("Control clan mod system", 'https://cdn.discordapp.com/attachments/873529771869487124/875122474243727391/1628670500150.png')
        if(mutedRole) {
            member.roles.add(mutedRole);
            message.channel.send(clearEmbed);
        }
}

module.exports.config = {
    name: "mute",
    description: "Feloldja a námítást!",
    usage: "!mute",
    accessableby: "Moderátorok",
    aliases: ['m']
}