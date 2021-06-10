//ODUwNDI3MjAwMTU4MDQwMDc1.YLpkDA.f0SbHuHrezATypBm9TdYhWucI7A
//under construction
//HORIZON™#0001
//INSTRUCTIONS
//Add your own Bot token
//Add your own mongodb url
//please give credits(opttional)

const Discord = require('discord.js')
const bot = new Discord.Client({ws: {intents: Discord.Intents.ALL}, });
const fs = require("fs")
bot.commands = new Discord.Collection();
const Levels = require('discord-xp')
const canvacord = require('canvacord')
const canas = require('discord-canvas')
const bot2 = new Discord.Client({
	partials: ['MESSAGE', 'CHANNEL', 'REACTION']
});
const db = require('quick.db')
Levels.setURL("--YOUR MONGODB URL--")




bot.on('ready', () => {
    console.log('Yay Bot Is Rocking on Your Server Now')
    bot.user.setPresence({ activity: { name: '[<]help | Mr.Binoculars🔭' }, status: 'dnd' })
    
    

    fs.readdir('./commands', (err, files) => {
        if(err) return console.log(err);

        let jsfile = files.filter(f => f.split(".").pop() == 'js');


        if (jsfile.length <= 0) return console.log("Could not find commands!")

        jsfile.forEach(f => {
            let props = require(`./commands/${f}`);
            bot.commands.set(props.help.name, props)
        })
    })
})

bot.on('message', (message) => {
    if(message.author.bot)return;
    if(message.channel.type !== 'text')return;
    let prefix = '<';


    let MessageArray = message.content.split(' ')
    let cmd = MessageArray[0].slice(prefix.length)
    let args = MessageArray.slice(1)

    if(!message.content.startsWith(prefix)) return;


    let commandfile = bot.commands.get(cmd);
    if(commandfile) {commandfile.run(bot,message,args)}


})

bot.on('guildMemberUpdate', (oldMember, newMember) => {
    if(oldMember.nickname !== newMember.nickname) {
        newMember.send('you nick name was changed!')
    }
    let oldAvatar = oldMember.user.avatarURL() // https://link.com
    let newAvatar = newMember.user.avatarURL(); // https://link.com
    if(oldAvatar !== newAvatar) {
        newMember.send('It seems that you have changed you Profile pic.Cool!')
    }
    
    
})

bot.on('guildMemberAdd', (member) => {
   
  const wlcm = new canvacord.Welcomer()
  .setUsername(member.user.username)
  .setDiscriminator(member.user.discriminator)
  .setMemberCount(member.guild.memberCount)
  .setGuildName(member.guild.name)
  .setAvatar(member.user.displayAvatarURL({format: "png"}))
  .setBackground("https://static.vecteezy.com/system/resources/previews/000/676/995/large_2x/modern-abstract-background.jpg")
  wlcm.build()
  .then(data => {
      const attachment2 = new Discord.MessageAttachment(data, 'wlcm.png')
      member.send(attachment2);
  })
   

  
})

//rank
bot.on("message", async message => {
    if (!message.guild) return;
    if (message.author.bot) return;

    const prefix = '<';

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    const randomXp = Math.floor(Math.random() * 9) + 1; //Random amont of XP until the number you want + 1
    const hasLeveledUp = await Levels.appendXp(message.author.id, message.guild.id, randomXp);
    if (hasLeveledUp) {
        const user = await Levels.fetch(message.author.id, message.guild.id);
        message.channel.send(`You leveled up to  ${user.level}! Keep it going! `);
    }
    
    
    if(command === "rank") {
        const user = await Levels.fetch(message.author.id, message.guild.id);
        const rqxp = Levels.xpFor(parseInt(user.level)+1);
        const Rank = new canvacord.Rank()
        
        .setAvatar(message.author.displayAvatarURL({dynamic: true, format: 'png'}))
        .setLevel(user.level)
        .setLevelColor('#a903fc')
        .setCurrentXP(user.xp)
        .setRequiredXP(rqxp)
        .setStatus(message.member.presence.status)
        .setProgressBar('#a903fc', "COLOR")
        .setUsername(message.author.username)
        .setDiscriminator(message.author.discriminator)
        
        
        Rank.build()
        .then(data => {
            const attachment = new Discord.MessageAttachment(data, 'Funny.png')
            message.channel.send(attachment);
        })
    }
    
    //Leaderboard
    if(command === "leaderboard" || command === "lb") {
        const rawLeaderboard = await Levels.fetchLeaderboard(message.guild.id, 5);
        if (rawLeaderboard.length < 1) return reply("Nobody's in leaderboard yet.");

        const leaderboard = await Levels.computeLeaderboard(bot, rawLeaderboard, true); 

        const lb = leaderboard.map(e => `${e.position}. ${e.username}#${e.discriminator}\nLevel: ${e.level}\nXP: ${e.xp.toLocaleString()}`);

        message.channel.send(`${lb.join("\n\n")}}`)
    }

   
})




bot.login("--YOUR BOT TOKEN--")
//@Bino ©️ 6/5/2021
//can be used for development//
//Dont claim as yours!!!//
