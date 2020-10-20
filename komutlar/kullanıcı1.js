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
        .setDescription(`***GR3AT BOT KULLANICI KOMUTLARI***
------------------------
 **GR3AT BOT KULLANICI KOMUTLARI** 

g!afk = Afk Olursunuz

g!istatistik = Botun İstatistiklerini Atar

g!çeviri = Yazdığınız Kelimeyi Çevirir

g!tavsiye = Bize Tavsiyenizi İletirsiniz [Y!]

Sayfa 1/3*`) 
        .setThumbnail(client.user.avatarURL)
        .setFooter(`${message.author.username} Başarıyla ${ayarlar.prefix}kullanıcı1 Sistemini Kullandı!`, message.author.avatarURL)
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
  name: 'kullanıcı1',
  description: 'Kullancı Komutlarını Gösterir ',
  usage: 'kullanıcı1'
}; 