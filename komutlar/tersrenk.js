const Discord = require('discord.js');
const Jimp = require('jimp');
 
exports.run = (client, message, params) => {
const db = require('quick.db');
if(db.fetch(`bakim`)) {
  if(message.author.id !== "605476396441272385") {return message.channel.send('Şuanda Bakım Modu Açıktır.')}
}
  if(params[0]) if(params[0] === 'sunucu-ikon'){
    if(!message.guild) return message.channel.send('Bu sadece sunucularda kullanılabilir.');
    if(!message.guild.iconURL) return message.channel.send('Bu sunucunun ikonu yok.');
    Jimp.read(message.guild.iconURL, function (err, image){
        if(err) return message.channel.send('Bir hata oluştu: ``'+err+'``\n Lütfen yapımcıya bildirin.');
        image.invert().write('image.png');
        setTimeout(() => {
          message.channel.sendFile('image.png');
        }, 500);
    });
    return;
    //GreatXartz
  }
  if(message.mentions.users.first()) {
      Jimp.read(message.mentions.users.first().avatarURL, function (err, image){
          if(err) return message.channel.send('Bir hata oluştu: ``'+err+'``\n Lütfen yapımcıya bildirin.');
          image.invert().write('image.png');
          setTimeout(() => {
            message.channel.sendFile('image.png');
          }, 500);
      });
  } else{
    Jimp.read(message.author.avatarURL, function (err, image){
        if(err) return message.channel.send('Bir hata oluştu: ``'+err+'``\n Lütfen Yapımcıya Bildirin.');
        image.invert().write('image.png');
        message.channel.sendFile('image.png');
    });
  }
};
//GreatXartz
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['tersrenk'],
  permLevel: 0
};
 
exports.help = {
  name: 'renk',
  description: 'Avatarın renklerini ters çevirir.',
  usage: 'renk [@<kişi ismi>]'
};
   