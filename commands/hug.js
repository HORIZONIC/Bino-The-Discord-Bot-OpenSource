const Discord = require('discord.js');


exports.run = async (bot,message,args) => {
    let gifs = [
        "https://i.pinimg.com/originals/f2/80/5f/f2805f274471676c96aff2bc9fbedd70.gif",
        "https://media.tenor.com/images/eed8d1a51f647b4be696879a0ad6f1f1/tenor.gif",
        "https://pa1.narvii.com/6801/811306aa37e7cfd33bbd7ea00ef15723906647c9_hq.gif"
    ];
    let pick = gifs[Math.floor(Math.random() * gifs.length)];

    let gifed = new Discord.MessageEmbed();
    gifed.setColor('#a903fc');
    gifed.setImage(pick);

    if(args[0]){
        let member = message.mentions.members.first();
        gifed.setTitle(`${message.author.username} hugs ${member.user.username}!`);
    } else{
        gifed.setTitle(`${message.author.username} got a hug from bino`);
    }
    message.channel.send(gifed);

}
exports.help = {
name: 'hug'
}