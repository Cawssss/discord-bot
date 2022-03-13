const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args) => {

        const low = require('lowdb');
        const FileSync = require('lowdb/adapters/FileSync');
        const adapter = new FileSync('./db.json');
        const db = low(adapter);

        dbb = JSON.parse(fs.readFileSync(`./serveur/${message.guild.id}.json`, "utf8"));

    if(message.author.bot) return;
    
    let channel = message.mentions.channels.first();
    if(!channel) return message.reply(`Usage: \`${dbb.prefix}ticket setup #channel\``);

let sent = await channel.send(new MessageEmbed()
    .setTitle(":package: Système de Ticket")
    .setDescription("Veuiller cliquer sur la réaction en dessous pour ouvrir un ticket.")
    .setFooter("Ticket System")
    .setColor("BLACK")
);

    sent.react('🎫');
    db.set(`${message.guild.id}-ticket`, sent.id)
    .write()

    message.channel.send("Système de ticket mis à jour sur le salon.")

    /*if(args.shift().toLowerCase() === "close") {
    if(!message.channel.name.includes("ticket-")) return message.channel.send("Vous ne pouvez pas utiliser ça ici !")
    message.channel.delete();
    }*/

client.on('messageReactionAdd', async (reaction, user) => {

const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('./db.json');
const db = low(adapter);



if(user.partial) await user.fetch();
if(reaction.partial) await reaction.fetch();
if(reaction.message.partial) await reaction.message.fetch();

if(user.bot) return;

let ticketid = await db.get(`${reaction.message.guild.id}-ticket`);

if(!ticketid) return;

if(reaction.message.id == ticketid && reaction.emoji.name == '🎫') {
reaction.users.remove(user);

    reaction.message.guild.channels.create(`ticket-${user.username}`, {
        permissionOverwrites: [
            {
                id: user.id,
                allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
            },
            {
                id: reaction.message.guild.roles.everyone,
                deny: ["VIEW_CHANNEL"]
            }
        ],
        type: 'text'
    }).then(async channel => {
        channel.send(`<@${user.id}>`, new MessageEmbed().setTitle("Bienvenue sur votre ticket !").setDescription(`Nous nous occuperons de vous le plus rapidement possible \n \`${dbb.prefix}close\` *pour* **fermer** *le ticket** !`).setColor("BLACK"))
    })
    }
})
}

module.exports.help = {
    name: "ticket-setup",
    aliases: ['ticketsetup'],
    category: 'Administration',
    description: "⚡・Permet de mettre en place le système de ticket.",
  };
  