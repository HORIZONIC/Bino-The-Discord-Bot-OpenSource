const Discord = require('discord.js');


exports.run = async (bot,message,args) => {
    let gifs = [
        "https://media1.tenor.com/images/b6d8a83eb652a30b95e87cf96a21e007/tenor.gif",
        "http://i1280.photobucket.com/albums/a489/Lilyfied/Anime%20Gif/slapgif_zps5164a18e.gif",
        "https://i.gifer.com/WpWp.gif"
    ];
    let pick = gifs[Math.floor(Math.random() * gifs.length)];

    let gifed = new Discord.MessageEmbed();
    gifed.setColor('#a903fc');
    gifed.setImage(pick);

    if(args[0]){
        let member = message.mentions.members.first();
        gifed.setTitle(`${message.author.username} Slaps ${member.user.username}!`);
    } else{
        gifed.setTitle(`${message.author.username} got slapped from Bino`);
    }
    message.channel.send(gifed);

}
exports.help = {
name: 'slap'
}