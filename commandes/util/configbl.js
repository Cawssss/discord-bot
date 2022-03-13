const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "blacklist",
  category: "config",
  description: "Permet de configurer l'autogban",
  usage: "autogban on/off",
  run: async (client, message, args) => {
    let serveurid = message.guild.id;
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      return 
    }
        if (args[0] === 'on') {
          db.set(`config_blacklist_${serveurid}`, 'on')
          return message.channel.send(`La blacklist est maintenant activé`)
        } else if (args[0] === 'off') {
        db.set(`config_blacklist_${serveurid}`, 'off')
        return message.channel.send(`La blacklist est maintenant désactivé`)
        }
    }
}

module.exports.help = {
  name: "blacklistpanel",
  aliases: ['bpanel','blacklistpanel'],
  category: 'Gestion de serveur',
  description: "- Permet d'afficher le panel de configuration de blacklist.",
};