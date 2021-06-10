const Discord = require('discord.js');

exports.run = async (bot,message,args) => {
    
    let pollChannel = message.mentions.channels.first();
    let pollDescription = args.slice(1).join(' ');

    let embedPoll = new Discord.MessageEmbed()
    .setTitle('A new Poll has been created.Vote now!')
    .setDescription(pollDescription)
    .setColor('#a903fc')
    let msgEmbed = await pollChannel.send(embedPoll);
    await msgEmbed.react('👍')
    await msgEmbed.react('👎')

}
exports.help = {
name: 'poll'
}