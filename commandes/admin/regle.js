const Discord = require('discord.js');

module.exports.run = async(bot, message, args) => {


    if (!message.member.hasPermission("ADMINISTRATOR"))
        return message.channel.send("Vous n'êtes pas autorisé à utiliser cette commande") //-- Checker les perms

    let channel = message.mentions.channels.first();
    if (!channel || channel.type !== "text")
        return message.reply(`**Veuillez spécifier un salon**`);

    let Embed = new Discord.MessageEmbed()
        .setTitle(`**・Règles du serveur**`)
        .setDescription(`Merci de bien vouloir respecter les ToS de Discord.`)
        .addField("➜ https://discord.com/terms")
        .addField("➜ https://discord.com/guidelines")
        .setFooter(`ζ͜͡Règlement 2022`)
        .setImage('https://media1.tenor.com/images/e325ed818954aa7369386f7a28347877/tenor.gif?itemid=17106671')

    channel.send(Embed);
}


module.exports.help = {
    name: "regle",
    category: 'Fun',
    description: "⚡・Permet de mettre des règles sur un salon précis.",
    aliases: ['règle', 'règlemment', 'reglemment']

  };