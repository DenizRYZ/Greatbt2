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
        .setDescription(`***GR3AT BOT YENİLİKLERİ***
------------------------
 **GR3AT BOT  YENİLİKLERİ** 
GR3AT BOT
v1.0 YARDIM MENÜSÜ GÜNCELLEŞTİRMESİ
+Yardım menüsü artık daha kullanışlı.
+Botumuz Yayımlanmıştır
+Botumuz yeniden 7/24!
v5.0 EĞLENCE GÜNCELLEŞTİRMESİ
+Eğlence komutları eklendi(g!eğlence yazarak görebilirsin.)
+Hata düzeltmesi.
+Botun Altyapısı Yenilendi


VERSİYON v1.0*`) 
        .setThumbnail(client.user.avatarURL)
        .setFooter(`${message.author.username} Başarıyla ${ayarlar.prefix}yenilikler Sistemini Kullandı!`, message.author.avatarURL)
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
  name: 'yenilikler',
  description: 'Oyun Elitleri Davet Sistemi',
  usage: 'yenilikler'
}; 