const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission('KICK_MEMBERS'))
        message.channel.reply(":x:**nincs elég jogogsultságod**:x:")
    else{
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice[0]);
        if(member) {
        try{
            await member.kick();
            console.log('kicked');
            message.channel.send(`:white_check_mark: ${member}ki lett rúgva!!:white_check_mark:`)
        }
            catch(err) {
            console.log(err);
        }
    }
}
}

module.exports.config = {
    name: "kick",
    description: "kick members",
    usage: "!kick",
    accessableby: "Moderátorok",
    aliases: ['k']
} 