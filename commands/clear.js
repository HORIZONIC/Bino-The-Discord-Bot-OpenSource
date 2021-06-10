const Discord = require("discord.js")

exports.run = async (bot,message,args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("you cannot perform this task")
    if(!args[0]) return message.reply("Instructions unclear how many to delete?")
    if(parseInt(args[0])> 99) return message.reply("way to much to handel can delete only 99 msg!!")

    message.channel.bulkDelete(parseInt(args[0])+ 1).then(() => {

        let clearbed = new Discord.MessageEmbed()
        .setTitle('ALL CLEAR! 🗑️')
        .setDescription(`Servers all clear now! Deleted ${args[0]} messages!`)
        .setColor('#a903fc')
        .setFooter(`wow you have got a neat & clean server!`)
        message.channel.send(clearbed)
        
        

    }).catch((err) => {
        return message.reply("Failed To clear.");


    })

    

}
exports.help = {
name: 'clear'
}