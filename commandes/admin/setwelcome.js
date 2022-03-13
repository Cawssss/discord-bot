const { MessageEmbed } = require("discord.js");

module.exports.run = (client, message, args) => {

    const low = require('lowdb');
    const FileSync = require('lowdb/adapters/FileSync');
    const adapter = new FileSync('./db.json');
    const db = low(adapter);
    
    let ch = message.mentions.channels.first()
    if (!ch) return message.channel.send('Veuillez mentionner un channel !')

    let channel = new MessageEmbed()
      .setAuthor('MISE A JOUR DU CHANNEL DE BIENVENUE')
      .setThumbnail(message.guild.iconURL({ dynamic: true }))
      .addField("Channel de bienvenue mis à jour :", ch)
    message.channel.send(channel)
    return db.set(`channel-${message.guild.id}`, ch.id)
      .write()
}

module.exports.help = {
  name: "setwelcome",
  aliases: ['welcome'],
  category: 'Administration',
  description: "⚡・Permet de changer le message/channel de bienvenue.",
};
