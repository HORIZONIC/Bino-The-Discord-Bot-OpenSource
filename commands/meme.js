const fetch = require("node-fetch")
const Discord = require("discord.js")
const link = 'https://www.reddit.com/r/dankmemes.json?sort=top&t=week'

exports.run = async (bot,message,args) => {
    let fetchMemes = await fetch(link).then(m => m.json())
    const getMemes = fetchMemes.data.children;
    let randomMeme = getMemes[Math.floor(Math.random() * getMemes.length)]
    let memeEmbed = new Discord.MessageEmbed()
    .setTitle(randomMeme.data.title)
    .setImage(randomMeme.data.url)
    .setColor("#ff0000");

    let msgEmbed = await message.channel.send(memeEmbed);
    await msgEmbed.react('<:upvote:852425292218761216>')
    await msgEmbed.react('<:downvote:852425292177080320>')

}

exports.help = {
name: 'meme'
}