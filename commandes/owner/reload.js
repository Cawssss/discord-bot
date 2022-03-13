
const { MessageEmbed } = require("discord.js")
const fs = require("fs");
module.exports.run = async (client, message, args) => {
    let db = JSON.parse(fs.readFileSync(`./serveur/${message.guild.id}.json`, "utf8"));
    let config = require("./../../config.json")
    message.delete();

    if(message.author.id !== config.bot.owner) return;


    message.channel.send(`**[${client.user.tag}]** ・ Redémarrage du bot par ${message.author}`).then(() => {
        process.exit(0)
    })
},


module.exports.help = {
    name: "reload",
    category: 'Fun',
    description: ".",
    aliases: ['redem'],

  };