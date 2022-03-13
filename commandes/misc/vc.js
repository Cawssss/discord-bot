module.exports.run = (client, message, args) => {
    message.channel.send(`Membres en vocale: **${message.guild.members.cache.filter(m => m.voice.channel).size}** (**${message.guild.memberCount}** membres)`)
};


module.exports.help = {
    name: "vc",
    aliases: ['vc','vocalmembers'],
    category: 'utilitaires',
    description: "Compteur des membres en vocale en direct.",
  };