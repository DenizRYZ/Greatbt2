 const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db')



exports.run = (client, message, args) => {
if(db.fetch(`bakim`)) {
  if(message.author.id !== "605476396441272385") {return message.channel.send('Şuanda Bakım Modu Açıktır.')}
}
if(db.fetch(`bakim`)) return message.channel.send('Botu Bakıma Aldık.Daha Yeni Özellikler İle Karşınıza Çıkmak İçin Sabırsızlanıyoruz.')
  const embed = new Discord.RichEmbed()
       .addField("Yapımcım ", " <@605476396441272385> ")
        .setDescription(`***GR3AT BOT KOMUTLAR***
------------------------
 **GR3AT BOT  KOMUTLARI** 
g!kullanıcı1 = Kullanıcı Komudunun 1.Sayfasını Atar
g!kullanıcı2 = Kullanıcı Komudunun 2.Sayfasını Atar

g!yetkili1 = Yetkili Komudunun 1.Sayfasını Atar
g!yetkili2 = Yetkili Komudunun 2.Sayfasını Atar

g!eğlence = Eğlence Komutlarını Gösterir

g!yenilikler = Botun Yeniliklerini Gösterir

*`) 
        .setThumbnail(client.user.avatarURL)
        .setFooter(`${message.author.username} Başarıyla ${ayarlar.prefix}yardım Sistemini Kullandı!`, message.author.avatarURL)
    .setColor(`GREEN`)
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['y'],
  permLevel: 0,
};

exports.help = {
  name: 'yardım',
  description: 'Oyun Elitleri Davet Sistemi',
  usage: 'yardım'
}; 