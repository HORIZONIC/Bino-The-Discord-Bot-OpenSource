const Discord = require("discord.js")

exports.run = async (bot,message,args) => {
    
    let infoembed = new Discord.MessageEmbed()
    .setTitle('Moderation Related Commands')
    .setDescription('prefix "<"\n\n ***Commands***\n\n  **Ban user = "<ban @users reason**"\n\n **Kick user = "<kick @users reason**"\n\n **Mute user = "<mute @users<no space>time in seconds(ex:60s)**"\n\n **Clear messages = "<clear(space) number of messages to be deleted!(ex:99)" **\n\n**Warn = "<warn @user(no space)Reason"**')
    .setColor('#a903fc')
    

    let helped = new Discord.MessageEmbed()
    .setTitle('Fun Related Commands')
    .setDescription('prefix "<"\n\n ***Commands***\n\n **Memes = "<meme"** \n\n **Hug = "<hug @user" **\n\n**Slap = "<slap @users"**\n\n**Kill = "<kill @users"**\n\n**Punch = "<punch @users"**\n\n**Create a Poll = "<poll #channelname reson for poll"**\n\n**Yeet = "<yeet @users" **\n\n**Avatar = "<avt @user or <avt"**')
    .setColor('#a903fc')
    

    let lvluprl = new Discord.MessageEmbed()
    .setTitle('Leveling Related Commands')
    .setDescription('prefix "<"\n\n ***Commands*** \n\n **Check rank = "<rank" ** \n\n **check leaderBoard = "<lb"**')
    .setColor('#a903fc')
    .setFooter(``)

    let support = new Discord.MessageEmbed()
    .setTitle('Support')
    .setDescription('**Have any issue or problem Lets us know => "https://discord.gg/XthPHDExjc"**\n\n **For bots version info use cmd ="<vinfo" \n\n More commands soon! **')
    .setColor('#a903fc')
    .setFooter(`Developed by HORIZON`)



    message.channel.send(infoembed)
    message.channel.send(helped)
    message.channel.send(lvluprl)
    message.channel.send(support)

    


}
exports.help = {
name: 'help'
}