const { MessageEmbed } = require("discord.js"), 
fs = require("fs");
const pagination = require('discord.js-pagination');

module.exports.run = async (client, message, args) => {
    if(!message.guild) return;
    let db = JSON.parse(fs.readFileSync(`./serveur/${message.guild.id}.json`, "utf8"));
    let config = require("./../../config.json")

    const help = new MessageEmbed()
    .setAuthor(`🔹・Settings`)
    .setDescription(`${message.author} • **Voici les paramètres de bot du serveur**`)
    .setImage(config.bot.image)
    .setColor(db.color)

  
const util = new MessageEmbed()
.setAuthor(`🔹 Settings`)
.setColor(db.color)
.setDescription(`⚡・ Préfixe du bot du serveur ${message.guild} : \`${db.prefix}\`\n• Commandes : \`${client.commands.size}\`\nVersion : \`${config.bot.version}\`\nCouleur des embeds : \`${db.color}\`\nNombre de serveur où est le bot : \`${client.guilds.cache.size}\`\n Owner : **<@${config.bot.owner}>**\n Developpeur : **<@${config.bot.dev}>**\n Support : <${config.bot.support}> `)

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
    name: "settings",
    aliases: ['config'],
    category: 'Administration',
    description: "⚡・Avoir quelques infos sur le bot", 
  };