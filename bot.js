const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("528319778213986304")
setInterval(function() {
channel.send(`اني فقيررر`);
}, 30)
})

client.login('NTI4NTAzNzMwMjM3MzQxNzAy.DwjRCw.jWj9qsr7y-h6GuqAz9Mh1kLcabw');
