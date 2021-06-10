const Discord = require('discord.js');


exports.run = async (bot,message,args) => {
    let gifs = [
        "https://i.imgur.com/f2kkp3L.gif",
        "https://i.pinimg.com/originals/8d/50/60/8d50607e59db86b5afcc21304194ba57.gif",
        "https://i.kym-cdn.com/photos/images/newsfeed/001/856/131/1af.gif"
    ];
    let pick = gifs[Math.floor(Math.random() * gifs.length)];

    let gifed = new Discord.MessageEmbed();
    gifed.setColor('#a903fc');
    gifed.setImage(pick);

    if(args[0]){
        let member = message.mentions.members.first();
        gifed.setTitle(`${message.author.username} Punches ${member.user.username}!`);
    } else{
        gifed.setTitle(`${message.author.username} gets puched on the face by bino`);
    }
    message.channel.send(gifed);

}
exports.help = {
name: 'punch'
}