 const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db')



exports.run = (client, message, args) => {
const db = require('quick.db');
if(db.fetch(`bakim`)) {
  if(message.author.id !== "605476396441272385") {return message.channel.send('Şuanda Bakım Modu Açıktır.')}
}
if(db.fetch(`bakim`)) return message.channel.send('Botu Bakıma Aldık.Daha Yeni Özellikler İle Karşınıza Çıkmak İçin Sabırsızlanıyoruz.')
  const embed = new Discord.RichEmbed()
       .addField("Yapımcım ", " <@605476396441272385> ")
        .setDescription(`***GR3AT BOT EĞLENCE KOMUTLARI***
------------------------
 **GR3AT BOT EĞLENCE KOMUTLARI** 
g!davet = Botun Davet Linkini Ve Destek Sunucusu Linkini Verir


g!afk = Afk Olursunuz


g!wasted = Profil Fotoğrafınıza Wasted Efekti Eklersiniz[Y!]


g!duello = Etiketlediğiniz Kişiyle Duello Yaprasınız (Kendiniz Ve Botlar Hariç Duello Yapamazsınız)


g!espri = Espiri Yapar


g!yazı-tura = Yazımı Turamı Oynarsınız [Y!]


*Eğlence Komutlarım   *`)  

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
  name: 'eğlence',
  description: 'GAME OF COOKİE Davet Sistemi',
  usage: 'eğlence'
}; 