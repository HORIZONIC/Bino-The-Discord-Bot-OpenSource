const Discord = require('discord.js');


exports.run = async (bot,message,args) => {
    let gifs = [
        "https://media1.tenor.com/images/453792000046f8476d0173080a8df665/tenor.gif",
        "https://media1.tenor.com/images/79e1737ddf487836c6720eb49550eabd/tenor.gif",
        "https://media.tenor.com/images/6b63fc0f5a1571b0085b533d47c44978/tenor.gif",
        "https://thumbs.gfycat.com/WarmFarflungArkshell-max-1mb.gif"
    ];

    

    let pick = gifs[Math.floor(Math.random() * gifs.length)];
    let gifed = new Discord.MessageEmbed();
    gifed.setColor('#a903fc');
    gifed.setImage(pick);

    if(args[0]){
        let member = message.mentions.members.first();
        gifed.setTitle(`${message.author.username} Yeets ${member.user.username}!`);
    } else{
        gifed.setTitle(`${message.author.username} gets yeeted!`);
    }
    message.channel.send(gifed);

}
exports.help = {
name: 'yeet'
}