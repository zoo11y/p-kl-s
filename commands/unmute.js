const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission(['ADMINISTRATOR'])) return;
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username === args.slice(0).join(" ") || x.user.username === args[0])
    if(member.hasPermission(['ADMINISTRATOR']) && !message.member.hasPermission('ADMINISTRATOR')) return;

        let mutedRole = message.guild.roles.cache.get('875004728839381013');
        const umEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`:speaker:sikeresen feloldottam a némítást!!:speaker:` )
        .setAuthor("Control clan mod system", 'https://cdn.discordapp.com/attachments/873529771869487124/875122474243727391/1628670500150.png')
        if(mutedRole) {
            member.roles.remove(mutedRole);
            message.channel.send(umEmbed);
        }
}

module.exports.config = {
    name: "unmute",
    description: "Feloldja a námítást!",
    usage: "!unmute",
    accessableby: "Members",
    aliases: ['um']
}