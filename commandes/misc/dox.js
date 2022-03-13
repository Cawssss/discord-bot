const { MessageEmbed } = require("discord.js"), 
fs = require("fs");
const pagination = require('discord.js-pagination');

module.exports.run = async (client, message, args) => {
    if(!message.guild) return;
    let db = JSON.parse(fs.readFileSync(`./serveur/${message.guild.id}.json`, "utf8"));
    let config = require("../../config.json")

    const help = new MessageEmbed()
    .setAuthor(`💻 ・ DOX PANEL`)
    .setDescription(`• Bienvenue dans le Panel Dox  ** ${message.author}**`)
    .setImage('https://cdn.discordapp.com/attachments/894298374986162227/894543412878000168/Garmin-hacker-social.png')
    .setColor(db.color)

  
const util = new MessageEmbed()
.setAuthor(`🔹 Liste des doxs disponible `)
.setColor(db.color)
.setDescription( `Voici la liste des doxs disponible, pour voir un dox, faites : \`${dbb.prefix}dox (Nom de la victime)\``)
.addField("Liste Dox",)
.setFooter(config.bot.fhouther , config.bot.image)
    const pages = [
        help,
      util
]

const emojiList = ["⏪", "⏩"];

const timeout = '120000';

pagination(message, pages, emojiList, timeout)
};


module.exports.help = {
    name: "dox",
    aliases: ['doxlist'],
    category: 'misc',
    description: "⚡・Avoir La liste des dox", 
  };