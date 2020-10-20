const Discord = require('discord.js');
var request = require('request');

exports.run = (client, message, args) => {
const db = require('quick.db');
if(db.fetch(`bakim`)) {
  if(message.author.id !== "605476396441272385") {return message.channel.send('Şuanda Bakım Modu Açıktır.')}
}
    request('https://yusuf-api.glitch.me/api/fbi', function (error, response, body) {
    if (error) return console.log('Hata:', error);
    else if (!error) {
        var info = JSON.parse(body);
      const embedasd = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle(`FBİ!`)
      .setImage(info.fotograf)
      message.channel.send(embedasd);
    }
})};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["fbigif", "fbi-gif", "fbi"],
  permLevel: 0
};

exports.help = {
  name: "fbi-gif",
  description: "Rastgele fbi gifleri atar!",
  usage: "fbi-gif"
};