const Discord = require('discord.js');
const db = require('quick.db');

var hd = [
    "Tura",
    "Yazı"
];

module.exports.run = async (bot, message, args) => {
if(db.fetch(`bakim`)) {
  if(message.author.id !== "605476396441272385") {return message.channel.send('Şuanda Bakım Modu Açıktır.')}
}


  message.channel.send(message.author.toString() + " Yazı mı Tura mı : " + (hd[Math.floor(Math.random() * hd.length)]));
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yazıtura','turayazı','paraçevir','paradöndür'],
  permLevel: 0
};

exports.help = {
  name: 'yazı-tura',
  description: 'Yazı Tura Oynamanıza Yarar.',
  usage: 'yazı-tura'
};