
const { MessageEmbed } = require("discord.js")
const fs = require("fs");
module.exports.run = async (bot, message, args) => {

    if (!message.member.permissions.has("ADMINISTRATOR"))
    return message.channel.send("⚡・`Vous devez être **ADMINISTRATEUR** pour faire cette commande, ${message.author.username}`");

  if (!args.length) return message.channel.send(`⚡・Vous n'avez pas spécifié de message à envoyer`);
  message.channel.send(args.join(' '));
  message.delete();

};


module.exports.help = {
    name: "say",
    category: 'Fun',
    description: ".",
    aliases: [''],

  };
