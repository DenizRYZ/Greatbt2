const Discord = require('discord.js');

exports.run = (client, message, args) => {
const db = require('quick.db');
if(db.fetch(`bakim`)) {
  if(message.author.id !== "605476396441272385") {return message.channel.send('Şuanda Bakım Modu Açıktır.')}
}

    if(message.author.id !== '605476396441272385') return;
    let ayarlanan = args[0]
    client.user.setAvatar(ayarlanan)   
  };

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['pp', 'pp-ayarla'],
  permLevel: 2
};

exports.help = {
  name: 'pp',
  description: 'Botun avatarını ayarlar. Sen yapamazsın :D',
  usage: 'pp <URL>'
};