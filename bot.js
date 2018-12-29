const Discord = require("discord.js");
const client = new Discord.Client()

client.on('message', message => {
    if (message.author.bot) return;
    if(message.content == '$mb') {
    const embed = new Discord.RichEmbed()
    .addField(`حالة الأعضاء 🔋`,'-',   true)
.addField(`💚 اونلاين :   ${message.guild.members.filter(m=>m.presence.status == 'online').size}`,'-',   true)
.addField(`❤ مشغول :     ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}`,'-',   true)
.addField(`💛 خامل :      ${message.guild.members.filter(m=>m.presence.status == 'idle').size}`,'-',   true)
.addField(`🖤 اوفلاين :   ${message.guild.members.filter(m=>m.presence.status == 'offline').size}`,'-',  true)
.addField(`💙   الكل :  ${message.guild.memberCount}`,'-',   true)
         message.channel.send({embed})

    }
  })



  
client.login('NNTI2OTcyNzA3NDAxNzYwNzc4.Dwi_9w.B45OIoNbOxFbnEyGCPB2lYYNlMET')
