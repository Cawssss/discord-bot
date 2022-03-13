const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
    console.log(` [+] Suggestion utilisé sur le serveur :  ${message.guild.name} `)

    message.delete();


    if (!args.join(" ")) return message.reply("**Rentrez votre suggestion .**")

    let firstPollEmbed = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({ dynamic: true }))
        .setDescription("```\n⌛ Préparation de la suggestions ...\n```")
    let secondPollEmbed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.tag}`, message.author.avatarURL({ dynamic: true }))
        .setColor("RED")
        .setDescription(`**📥 Suggestions de ${message.author} :** \n \`\`\`\n${args.join(" ")}\n\`\`\``)
    message.channel.send(firstPollEmbed).then((message) => {
        setTimeout(function() {
            message.edit(secondPollEmbed).then(sentMessage => {
                sentMessage.react('✅')
                sentMessage.react('❌')
            }).catch(error => {
                message.channel.send(`:x: **| Une erreur s'est produite lors de l'exécution de votre commande:**\n\`${error}\``)
            })
        }, 2000)
    }).catch(error => {
        message.channel.send(`:x: **| Une erreur s'est produite lors de l'exécution de votre commande:**\n\`${error}\``)
    })
}



module.exports.help = {
    name: "suggestion",
    category: 'utilitaires',
    description: ".",
  };