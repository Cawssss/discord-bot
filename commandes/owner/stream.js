var fs = require("fs"),
getNow = () => { return { time: new Date().toLocaleString("en-GB", { timeZone: "Europe/Paris", hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" }), }; };

module.exports.run = (client, message, args) => {
    if(!message.guild) return;
    var config = require("../../config.json"),
    db = JSON.parse(fs.readFileSync(`./serveur/${message.guild.id}.json`, "utf8"));
    if(message.author.id !== config.bot.owner) return;

       if (args.length) {
        let str_content = args.join(" ")
client.user.setPresence({ activity: { name: str_content, type: 1, url: "https://www.twitch.tv/cawsbot"}})
.then(p => message.channel.send(`\`${getNow().time}\` :white_check_mark: ${message.author}, Vous n'avez défini le statut de votre bot en \`${str_content}\`.`))
.catch(e => { return message.channel.send(`\`${getNow().time}\` :x: ${message.author}, Une erreur a été rencontrée. \n **Plus d'informations:** \`🔻\` \`\`\`${e}\`\`\``); });
    } else {
        message.channel.send(`\`${getNow().time}\` :x: ${message.author}, Vous n'avez fourni aucune valeur, veuillez refaire la commande en ajoutant ce que vous souhaitez que votre bot ait comme status`);
    }
};


module.exports.help = {
    name: "stream",
    aliases: ['setstream','activity'],
    category: 'Administration',
    description: "Permet de changer le statut du Bot",
  };