const { MessageEmbed } = require("discord.js"), 
fs = require("fs"), 
getNow = () => { return { time: new Date().toLocaleString("en-GB", { timeZone: "Europe/Paris", hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" }), }; };


module.exports.run = async (client, message, args) => {
    if(!message.guild) return;
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`:x: Vous ne disposez pas des autorisations appropriées pour effectuer cette action, ${message.author.username}` //-- Mettre ce message à celui qui n'a pas les perms
    );
    message.channel.clone({reason: `Purge réclamée par ${message.author.tag} (${message.author.id})`}).then(c => c.setPosition(message.channel.position) && c.send(`:umbrella: Le renew réclamé par ${message.author} a été éffectué.`))
    message.channel.delete() 

    };
    
module.exports.help = {
    name: "nuke",
    aliases: ['duplicate','boom'],
    category: 'Gestion de serveur',
    description: "- Duplique le salon et supprime l'ancien",
  };