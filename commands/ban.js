const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    let toBan = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice[0]);
                  
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(":x:nincs elég jogosultságod!!:x:")

        const reason = args[1] || "No reason!";

        toBan.ban({
            reason: reason
        })

        const banEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Banned')
        .setAuthor("Control clan mod system", 'https://cdn.discordapp.com/attachments/873529771869487124/875122474243727391/1628670500150.png')
        .setFooter('Mod system', 'https://cdn.discordapp.com/attachments/873529771869487124/875122474243727391/1628670500150.png')
        .addFields(
            {name: 'Bannolt tag:', value: `**${toBan}**`},
            {name: 'Oka', value: `**${reason}**`}
        );
        message.channel.send(banEmbed);
        message.channel.send("lol")
        
        };
module.exports.config = {
    name: "ban",
    description: "ban members",
    usage: "!ban",
    accessableby: "Moderátorok",
    aliases: ['k']
} 