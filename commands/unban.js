const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    let toBan = await bot.users.fetch(args[0])
        
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(":x:nincs elég jogosultságod!!:x:")

        const reason = args[1] || "";

        message.guild.members.unban(toBan, reason)
        
        
    const banEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Banned')
        .setAuthor("Control clan mod system", 'https://cdn.discordapp.com/attachments/873529771869487124/875122474243727391/1628670500150.png')
        .setFooter('Mod system', 'https://cdn.discordapp.com/attachments/873529771869487124/875122474243727391/1628670500150.png')
        .addFields(
            {name: 'Sikeres unban', value: `**${toBan}**`}
        
        );
        message.channel.send(banEmbed);
        message.channel.send("lol")
        
        };
    

module.exports.config = {
    name: "unban",
    description: "unban members",
    usage: "!unban",
    accessableby: "Moderátorok",
    aliases: ['ub']
} 