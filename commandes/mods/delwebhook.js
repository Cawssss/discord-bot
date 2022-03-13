module.exports.run = async (client, message, args) => {
  
    if (!message.member.permissions.has("MANAGE_MESSAGES")) //-- Permissions nécéssaires
    return message.channel.send(
        `:x: Vous ne disposez pas des autorisations appropriées pour effectuer cette action, ${message.author.username}` //-- Mettre ce message à celui qui n'a pas les perms
    );
    message.channel.send("Tous les webhooks du serveur ont été supprimés !")
    message.guild.fetchWebhooks().then((webhooks) => {
    webhooks.forEach((wh) => wh.delete());
}); 
  
};

module.exports.help = {
    name: "delwebhook",
    category: 'Moderation',
    description: ".",
    aliases: ['dwebhook'],
  };
  