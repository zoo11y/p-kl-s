const Discord = require("discord.js");
const ms = require("ms");
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {

if(message.member.hasPermission('MANAGE_MESSAGES')) {
    var member = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
    if(!member) return message.reply('Említs meg valakit!').then(m => m.delete({timeout:"20000"}));

    let mutedRole = message.guild.roles.cache.find(role => role.name === "muted");

    let time = args[1];
    if (!time) {
        return message.reply("Írd bele az ídőt is!").then(m => m.delete({timeout:"20000"}));
        }

        const trEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`@${member.user.tag}-t lenémítottam ${ms(ms(time))}-re`)
        .setAuthor("Control clan mod system", 'https://cdn.discordapp.com/attachments/873529771869487124/875122474243727391/1628670500150.png')
    if(mutedRole) {
        member.roles.add(mutedRole);
        member.roles.add('875004728839381013');
        message.channel.send(trEmbed);
        }

            const utrEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`@${member.user.tag} most már nyugodtan beszélhetsz`)
            .setAuthor("Control clan mod system", 'https://cdn.discordapp.com/attachments/873529771869487124/875122474243727391/1628670500150.png')

        

            setTimeout( function () {
                member.roles.remove('875004728839381013');
                message.channel.send(utrEmbed)
            }, (ms(time)));

    } else {
        return message.channel.send('Nincs elég jogosultságod!')
    }
}

module.exports.config = {
    name: "tempmute",
    description: "Feloldja a némítást!",
    usage: "!tempmute",
    accessableby: "Moderátorok",
    aliases: ['tm']
}