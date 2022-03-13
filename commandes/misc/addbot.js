
const { MessageEmbed } = require("discord.js")
const fs = require("fs");
module.exports.run = async (client, message, args) => {
    let db = JSON.parse(fs.readFileSync(`./serveur/${message.guild.id}.json`, "utf8"));
    let config = require("./../../config.json")

message.channel.send(`Voici le lien pour m'ajouter : https://discord.com/oauth2/authorize?client_id=${config.bot.clientid}&scope=bot&permissions=8`)


};


module.exports.help = {
    name: "addbot",
    category: 'Fun',
    description: ".",
    aliases: ['invite'],

  };