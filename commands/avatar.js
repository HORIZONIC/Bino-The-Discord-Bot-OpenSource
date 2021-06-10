const Discord = require("discord.js")
exports.run = async (bot,message,args) => {

    let gifed = new Discord.MessageEmbed();
    let gifs = [
        "https://i.imgur.com/4EM2D8h.gif"
        
    ];
    gifed.setColor('#a903fc');
    

    if(args[0]){
        let member = message.mentions.members.first();
        gifed.setTitle(`${member.user.username}'s avatar <a:dancingblob:851098525311959080>`)
        gifed.setImage(member.user.displayAvatarURL({ dynamic: true, size: 2048}))
        
        

        
    } else{
        gifed.setTitle(`${message.author.username}'s avatar <a:dancingblob:851098525311959080>`)
        gifed.setImage(message.author.displayAvatarURL({ dynamic: true, size: 2048}));
        
        

    }
    let msgEmbed = await message.channel.send(gifed);
    await msgEmbed.react('👍')
    await msgEmbed.react('👎')
}
exports.help = {
name: 'avt'
}