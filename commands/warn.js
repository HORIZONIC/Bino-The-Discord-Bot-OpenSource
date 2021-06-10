const Discord = require('discord.js')

exports.run = async (bot,message,args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You do not have permission to execute this command!")
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if(!member) return message.channel.send("Invalid Member Given!");
    if(member.roles.highest.position > message.member.roles.highest.position) return message.channel.send("You cannot warn someone with more power than you or has same power!")
    let reason = args.slice(1).join(' ');
    if(!reason) {reason = 'No reason provided'}
    member.send(`${member.user.tag} you got a warning from server ${member.guild.name} for ${reason}`)
    message.channel.send(`**${member.user.tag}** has been warned for ${reason}`)
}

exports.help = {
name: 'warn'
}