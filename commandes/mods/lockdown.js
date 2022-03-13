
const { MessageEmbed } = require("discord.js")
const fs = require("fs");
module.exports.run = async (client, message, args) => {
    let db = JSON.parse(fs.readFileSync(`./serveur/${message.guild.id}.json`, "utf8"));
    let config = require("../../config.json")
    logsmod = message.guild.channels.cache.find(c => c.id === db.mods.logs);

    if (!message.member.permissions.has("MANAGE_MESSAGES")) //-- Permissions nécéssaires
    return message.channel.send(
        `:x: Vous ne disposez pas des autorisations appropriées pour effectuer cette action, ${message.author.username}` //-- Mettre ce message à celui qui n'a pas les perms
    );
   const channels = message.guild.channels.cache.filter(ch => ch.type !== 'category');
        if (args[0] === 'on') {
            
            channels.forEach(channel => {
                channel.updateOverwrite(message.guild.roles.everyone, {
                    SEND_MESSAGES: false
                }).then(() => {
                    channel.setName(channel.name += `🔒`)
                })
            })
            return message.channel.send('Verrouillage de tous les salons ');
        } else if (args[0] === 'off') {
            channels.forEach(channel => {
                channel.updateOverwrite(message.guild.roles.everyone, {
                    SEND_MESSAGES: null
                }).then(() => {
                        channel.setName(channel.name.replace('🔒', ''))
                    }
                )
            })
            return message.channel.send('Déverrouillage de tous les salon')
        }
 

};


module.exports.help = {
    name: "lockdown",
    category: 'Moderation',
    description: ".",
    aliases: ['lkall'],

  };
