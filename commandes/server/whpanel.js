const { MessageEmbed } = require("discord.js"), 
fs = require("fs"), 
ms = require("ms"),
getNow = () => { return { time: new Date().toLocaleString("en-GB", { timeZone: "Europe/Paris", hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" }), }; };

function update(message, db) {
    fs.writeFile(`./serveur/${message.guild.id}.json`, JSON.stringify(db), (x) => {
        if (x) console.error(x)
      });
};

module.exports.run = async (client, message, args) => {
    if(!message.guild) return;
    if(!message.member.hasPermission("ADMINISTRATOR")) return;
   let db = JSON.parse(fs.readFileSync(`./serveur/${message.guild.id}.json`, "utf8")),
   filter = (reaction, user) => ['✅','❌'].includes(reaction.emoji.name) && user.id === message.author.id,
   dureefiltrer = response => { return response.author.id === message.author.id };

   const msgembed = new MessageEmbed()
   .setAuthor(`🛡️ Modification des paramètres de l'anti-webhook de ${message.guild.name}`)
   .setColor(db.color)
   .setDescription("`✅` Activer le module d'anti-webhook\n`❌` Désactiver le module d'anti-webhook")

    message.channel.send(msgembed)
    .then(async m => { 
const collector = m.createReactionCollector(filter, { time: 900000 });
collector.on('collect', async r => { 
 if(r.emoji.name === '✅') {
        if(db.webhook.module === true) { return message.channel.send(`\`${getNow().time}\` ✅ Le module est déjà activé.`); }
        db.webhook.module = true
        update(message, db)
        message.channel.send(`\`${getNow().time}\` ✅ Vous avez activé le module d'anti-webhook !`)
    } else if(r.emoji.name === '❌') {
            if(db.webhook.module === false) return message.channel.send(`\`${getNow().time}\` ❌ Le module est déjà désactivé.`);
            db.webhook.module = false
            update(message, db)
            message.channel.send(`\`${getNow().time}\` ❌ Vous avez désactivé le module d'anti-webhook !`)
    } 
});
await m.react("✅")
await m.react("❌")

    });
};


module.exports.help = {
    name: "wpanel",
    aliases: ['whpanel'],
    category: 'Gestion de serveur',
    description: "- Permet d'afficher le panel de configuration de l'anti-webhook.",
  };