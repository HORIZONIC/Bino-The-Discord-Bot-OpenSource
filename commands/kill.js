const Discord = require('discord.js');


exports.run = async (bot,message,args) => {
    

    let deathmsg = [
        "Gets kicked By Donkey And Dies",
        "Gets Banned From Internet And dies Due to Depresion",
        "Drowned in BathTub ",
        "Chokes To death",
        "Questions his existence and dies",
        "fell into the void as his mom pushed him from the edge",
        "Typed To His Death",
        "Was rejected from a dog and could not handle it",
        "Was defeated by an Cat resulting in fatal injuries causing Death",
        "Couldnt finish his homework. He was never seen again.Last time spotted with teacher",
        "Was hit by a Toy car and was mistaken for real car therefore he died due to heart attack",
        "Saw Indian Movies with no Logic.He could not handle the anger = Brain Hamarage ",
        "Was kicked from his own Discord Server.",
        "was reported dead due to the hard kick on the balls by the loved one"
    ];

    
    let deathreason = deathmsg[Math.floor(Math.random() * deathmsg.length)];

    let kill= new Discord.MessageEmbed();
    kill.setColor('#a903fc');

    if(args[0]){
        let member = message.mentions.members.first();
       kill.setTitle(` **${member.user.username} ${deathreason}**`);
       kill.setImage("https://media.tenor.com/images/969599887c08ded08cccb30e66ad71b2/tenor.gif")
    } else{
        kill.setTitle(`**${message.author.username} ${deathreason}**`);
        kill.setImage("https://media.tenor.com/images/969599887c08ded08cccb30e66ad71b2/tenor.gif")
    }
    message.channel.send(kill);

}
exports.help = {
name: 'kill'
}