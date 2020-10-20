const Discord = require('discord.js');
exports.run = (client, message) => {
const db = require('quick.db');
if(db.fetch(`bakim`)) {
  if(message.author.id !== "605476396441272385") {return message.channel.send('Şuanda Bakım Modu Açıktır.')}
}
      const random = Math.floor(Math.random() * 100) + 1
      message.channel.send(`Efkarınız %${random} Efkar `)
   } 
 
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0
}
exports.help = {
 name: 'efkar',
 description: 'efkar',
 usage: 'efkar'
};