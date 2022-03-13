const { MessageEmbed } = require("discord.js")
const fs = require("fs");
module.exports.run = async (client, message, args) => {
  if (!arguments) {
    message.channel.send('Vous n\'avez pas spécifié pour quelle personne vous voulez voter.')
    return;
} else {
    message.delete()
message.channel.send(`**${message.author.tag}** Question: ${arguments.join(" ")}`).then(sentMessage => {
    sentMessage.react('👍').then(() => {
        sentMessage.react('👎')
    })
})
}}



module.exports.help = {
    name: "poll",
    category: 'Fun',
    description: ".",
    aliases: ['sondage'],

  };
