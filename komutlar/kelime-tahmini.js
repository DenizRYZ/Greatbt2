

const Discord = require('discord.js');
const { stripIndents } = require('common-tags');
const { randomRange, verify } = require('../util/Util.js');
const db = require('quick.db')
let oyndurum = new Set();

exports.run = async (client, message, args) => {

if(db.fetch(`bakim`)) {
  if(message.author.id !== "605476396441272385") {return message.channel.send('Şuanda Bakım Modu Açıktır.')}
}

db.set(`Klostrofobi`,`Kapalı alan fobisi.`)
db.set(`Türkçe`,`Türkiye Türklerinin ana dili.`)
db.set(`Domates`,`Kırmızı bir sebze.`)
db.set(`Otel`,`Tatillerde vb. durumlarda para karşılığı kalıncak yer.`)
db.set(`Söğüt`,`Asprinin ham maddesi.`)
db.set(`Veteriner`,`Hayvan doktoru.`)
db.set(`GR3AT BOT`,`Bu oyunu oynadığınız botun ismi.`)
db.set(`Rythm`,`En çok sunucuya sahip müzik botu.`)
db.set(`Magnum`,`2019 Yılında Maserati verecek olan dondurma markası.`)
db.set(`Lüksemburg`,`Avrupa'da adı ile başkenti aynı olan bir ülke`)
db.set(`Deve`,`Çöl yaşamına dayanıklı, sarı esmer renkte, yüksek boylu, uzun ve eğri boyunlu bir hayvan`)
//kelime haznesi (açıklamalar)

//Amil <3 ///////////////////
      var kelimeler = ['Klostrofobi','Türkçe','Domates','Otel','Söğüt','Veteriner','Airafe','Rythm','Magnum','Lüksemburg','Deve'];
      var kelime = kelimeler[Math.floor(Math.random() * kelimeler.length)]
      var açıklama = await db.fetch(`${kelime}`) 
      var ekpoint = Math.floor((Math.random() * 10) + 1);
      message.channel.send(`> Kelimeyi tahmin et bakalım! :tada: \n\n > **İpucu:** \`${açıklama}\`\n > **Doğru ise kazanılacak puan:** ` + ekpoint);
     

const collector = message.channel.createCollector(message => message.content.startsWith(''), {
      time: 10000,
})
/* Burayı silmeyin!! */
 collector.on('end', (collected, reason) => {
if (reason === 'GreatXartz') return oyndurum.delete(message.channel.id);
if (reason === 'GreatXartzdeil') return oyndurum.delete(message.channel.id);
oyndurum.delete(message.channel.id);
message.reply(`**10** Saniye süre sona erdi.`)
 })
/* \\====//=\\====//=\\====//=\\====// */                  // Sürüm v1.9.5

 collector.on('collect', message => {
if (!message.author.bot) { 
                  const balances = db.fetch(`ktbalance_${message.author.id}_d0ru`)
              console.log('GreatXartz.ƈα\'adamdır') //burayı silende ne bilim.
              console.log('Kelime tahmini Collectoru aktif')
            if (message.content.includes(kelime.toLowerCase()) || message.content.includes(kelime.toUpperCase()) || message.content.includes(kelime)) {
                const d0ruembed = new Discord.RichEmbed()
                .setTitle(`Tebrikler ${message.author.username} :tada:`)
                .setDescription(`Kelimeyi doğru bildin ve \` ${ekpoint} \` puan kazandın \n Mevcut Puan: **a!kt-puan**`)
        .setFooter(`${client.user.username} ` + 'Kelime tahmini sistemi', client.user.avatarURL )
                .setColor('0x36393E')  
                message.channel.send(d0ruembed)
               db.add(`ktbalance_${message.author.id}_d0ru`, ekpoint)
                collector.stop('GreatXartz')      

            } else if (message.content !== kelime) {
                  const balance = db.fetch(`ktbalance_${message.author.id}_d0ru`)
                  const kayip = balances - ekpoint
                  const d0rudeilembed = new Discord.RichEmbed()
                .setColor('0x36393E')
                .setTitle(`Oww... ${message.author.username}`)
                .setDescription(`Kelimeyi yanlış bildin ve \` ${ekpoint} \` puan kaybettin \n Mevcut Puan: **a!kt-puan**`)
        .setFooter(`${client.user.username} ` + 'Kelime tahmini sistemi', client.user.avatarURL )
                message.channel.send(d0rudeilembed)

               db.set(`ktbalance_${message.author.id}_d0ru`, balance - ekpoint)
                collector.stop('GreatXartzdeil')
             }}
        })    
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kt'],
  permLevel: 0
};

exports.help = {
  name: 'kelime-tahmini',
  description: 'GreatXartz a aittir aksini iddia edene hakkım haramdır.',
  usage: 'kelime-tahmini'
};

