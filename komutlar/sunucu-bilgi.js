const Discord = require('discord.js');
 const ayarlar = require('../ayarlar.json');
const moment = require('moment')
exports.run = (bot, message, params) => {
  const filterLevels = ['Yok', 'Rolü Olmayanlar İçin', 'Herkes İçin']
       const tarih =  message.guild.createdAt

let kur = {
			"01": "Ocak",
			"02": "Şubat",
			"03": "Mart",
			"04": "Nisan",
			"05": "Mayıs",
			"06": "Haziran",
			"07": "Temmuz",
			"08": "Ağustos",
			"09": "Eylül",
			"10": "Ekim",
			"11": "Kasım",
			"12": "Aralık"
    }

   const embed = new Discord.RichEmbed()
   .setColor("#D2EE07")
   .setAuthor(message.guild.name, message.guild.userURL)
   .setThumbnail(message.guild.iconURL,)
      .addField('<a:okk:707243711842746420>  Ad ve ID', `📝 ${message.guild.name + ', '+ message.guild.id}`, false)
   		.addField('<a:okk:707243711842746420>  Kanallar', `:small_orange_diamond:Toplam: ${message.guild.channels.size} | :keyboard: Yazı: ${message.guild.channels.filter(c => c.type === "text").size} | :microphone2: Sesli: ${message.guild.channels.filter(c => c.type === "voice").size}`, false)
      .addField('<a:okk:707243711842746420>  Üyeler', `:bust_in_silhouette: Üye: ${message.guild.memberCount} | <:online:703614552050237522> Çevrimiçi: ${message.guild.members.filter(m => m.user.presence.status != "offline").size}`, true)
			.addField('<a:okk:707243711842746420>  Roller', `:lock: ${message.guild.roles.size}`,false)
   			.addField('<a:okk:707243711842746420>  Rol Listesi', message.guild.roles.map(roles => `\`${roles.name}\``).join(' '))
			.addField('<a:okk:707243711842746420> Sakıncalı içerik filtresi', `:underage: ${filterLevels[message.guild.explicitContentFilter]}`,false)
      .addField('<a:okk:707243711842746420>  Bölge', message.guild.region.replace('europe',':map: Avrupa'),false)
      .addField('<a:okk:707243711842746420>  Oluşturulma Tarihi', `:calendar_spiral: ${moment(message.guild.createdAt).format('DD')} ${kur[moment(message.guild.createdAt).format('MM')]} ${moment(message.guild.createdAt).format('YYYY h:mm:ss')}`)
      .addField('<a:okk:707243711842746420>  Sunucu Sahibi', `<a:kingg:707243585916895313> ${message.guild.owner.user+''}`,false)
   .setTimestamp()
   message.channel.send({embed});
   message.react('✓');
 };
 exports.conf = {
   enabled: true,
   guildOnly: false,
   aliases: [],
   permLevel: 0
 };

 exports.help = {
   name: 'sunucu-bilgi',
   description: 'Kullanılan Yerdeki Sunucu Bilgilerini Gösterir.',
   usage: 'sunucu-bilgi'
 };