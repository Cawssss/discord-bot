const { MessageEmbed } = require("discord.js");

module.exports.run = (client, message, args) => {

    const low = require('lowdb');
    const FileSync = require('lowdb/adapters/FileSync');
    const adapter = new FileSync('./db.json');
    const db = low(adapter);
    
    let ch = message.mentions.channels.first()
    if (!ch) return message.channel.send('Veuillez mentionner un salon')

    let channel = new MessageEmbed()
      .setAuthor('MISE A JOUR DU CHANNEL D\'AUREVOIR')
      .setThumbnail(message.guild.iconURL({ dynamic: true }))
      .addField("Channel d\'aurevoir mis à jour :", ch)
    message.channel.send(channel)
    return db.set(`channelremove-${message.guild.id}`, ch.id)
      .write()
}

module.exports.help = {
  name: "setgoodbye",
  aliases: ['goodbye'],
  category: 'Administration',
  description: "⚡・Permet de changer le message/channel d'aurevoir.",
};
