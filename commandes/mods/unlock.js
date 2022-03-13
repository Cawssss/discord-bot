const { MessageEmbed } = require("discord.js")
const fs = require("fs");
module.exports.run = async (client, message, args) => {
  let db = JSON.parse(fs.readFileSync(`./serveur/${message.guild.id}.json`, "utf8"));

  let validLocks = ["unlock"];
      
  const Lockembed = new MessageEmbed()
    .setColor(db.color)
    .setTimestamp()
    .setTitle("🔒 LOCK [UNLOCK] 🔒")
    .setDescription(`Ce channel a été unlock par ${message.author.tag}`);
     
    if (!message.member.permissions.has("MANAGE_MESSAGES")) //-- Permissions nécéssaires
    return message.channel.send(
        `:x: Vous ne disposez pas des autorisations appropriées pour effectuer cette action, ${message.author.username}` //-- Mettre ce message à celui qui n'a pas les perms
    );
  if (validLocks) {
    message.channel.updateOverwrite(message.guild.roles.everyone, { SEND_MESSAGES: null }).then(() => {
      message.channel.send({embed: Lockembed});
    }).catch(error => { console.log(error); 
    });
  }

};

module.exports.help = {
    name: "unlock",
    category: 'Moderation',
    description: ".",
    aliases: ['unl'],
  };
