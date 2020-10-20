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
        .setDescription(`***GR3AT BOT YETKİLİ KOMUTLARI 2***
------------------------
 **GR3AT BOT YETKİLİ  KOMUTLARI** 

g!ban = Etiketlediğiniz Kişiyi Banlar


g!temizle = Mesajları Siler 


g!forceban = Sunucuda Olan Olmayan Kişileri Zorla Yasaklar


g!bakım-modu = Bakım Modunu Açar Kapanana Kadar Komutlar Kullanılamaz Hale Gelir

g!Kullanıcı-doğrula = Kullanıcı Doğrularsınız [Yeni!] [ŞB!]

SAYFA 2/2*`) 
        .setThumbnail(client.user.avatarURL)
        .setFooter(`${message.author.username} Başarıyla ${ayarlar.prefix}yetkili2 Sistemini Kullandı!`, message.author.avatarURL)
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
  name: 'yetkili2',
  description: 'Oyun Elitleri Davet Sistemi',
  usage: 'yetkili2'
}; 