
const { MessageEmbed } = require("discord.js")
const fs = require("fs");
const pagination = require('discord.js-pagination');

module.exports.run = async (client, message, args) => {
    let db = JSON.parse(fs.readFileSync(`./serveur/${message.guild.id}.json`, "utf8"));
    let config = require("./../../config.json")


    let bicon = client.user.displayAvatarURL;

    if(message.author.id !== config.bot.owner) return;

    const pageu = new MessageEmbed()
    .setTitle(`Informations du bot`)
    .setColor(`${db.color}`)
    .setFooter(config.bot.fhouther , config.bot.image)
    .setDescription(`> ${client.guilds.cache.size} serveurs\n> ${client.users.cache.size} membres\n> ${client.channels.cache.size} channels`)
    .setThumbnail(bicon)


    message.channel.send(pageu);
};


module.exports.help = {
    name: "server-list",
    category: 'Fun',
    description: ".",
    aliases: ['slt'],

  };