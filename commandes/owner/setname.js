var fs = require("fs"),
getNow = () => { return { time: new Date().toLocaleString("en-GB", { timeZone: "Europe/Paris", hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" }), }; };

module.exports.run = (client, message, args) => {
    if(!message.guild) return;
    var config = require("../../config.json"),
    db = JSON.parse(fs.readFileSync(`./serveur/${message.guild.id}.json`, "utf8"));
    if(message.author.id !== config.bot.owner) return;

       if (args.length) {
        let str_content = args.join(" ")
        client.user.setUsername(str_content)
        .then(u => message.channel.send(`\`${getNow().time}\` :white_check_mark: ${message.author}, Vous venez de changer le pseudon du bot.`))
        .catch(e => { return message.channel.send(`\`${getNow().time}\` :x: ${message.author}, Une erreur est survenue. \n **Plus d'informations:** \`🔻\` \`\`\`${e}\`\`\``); });
    } else {
        message.channel.send(`\`${getNow().time}\` :x: ${message.author}, Vous n'avez fourni aucune valeur, veuillez mettre comment vous souhaitez nommer le bot`);
    }
};


module.exports.help = {
    name: "setname",
    aliases: ['botname'],
    category: 'Administration',
    description: "Permet de changer le pseudonyme du Bot",
  };