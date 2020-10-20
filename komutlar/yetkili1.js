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
        .setDescription(`***GR3AT BOT YETKİLİ KOMUTLARI 1***
------------------------
 **GR3AT BOT YETKİLİ  KOMUTLARI** 

g!ban = Etiketlediğiniz Kişiyi Banlar

g!soft-ban = Önce Mesajları Siler Sonra Banlar

g!banlananlar = Banlılar Listesini Gösterir

g!unban = Banlanan Kişiinin Banını Kaldırır

g!avatardeğiştirme = Botun Avatarını Değiştirir

g!isim-değiştir = Etiketlediğiniz Kullanıcının İsmini Değiştirir

g!uyar = Etiketlediğiniz Kullanıcıyı Uyarır

SAYFA 1/2*`) 
        .setThumbnail(client.user.avatarURL)
        .setFooter(`${message.author.username} Başarıyla ${ayarlar.prefix}yetkili1 Sistemini Kullandı!`, message.author.avatarURL)
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
  name: 'yetkili1',
  description: 'Oyun Elitleri Davet Sistemi',
  usage: 'yetkili1'
}; 