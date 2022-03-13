const { MessageEmbed } = require("discord.js"), 
fs = require("fs");
const pagination = require('discord.js-pagination');

module.exports.run = async (client, message, args) => {
    if(!message.guild) return;
    let db = JSON.parse(fs.readFileSync(`./serveur/${message.guild.id}.json`, "utf8"));
    let config = require("./../../config.json")
   
 const help = new MessageEmbed()
    .setAuthor(`🎓・MENU HELP`)
    .setImage(config.bot.image)
    .setDescription(`Bienvenue dans le Menu de la **Version Finale** du bot, pour naviguer les pages clique sur une des réactions ci-dessous`)
    .setColor(db.color)
   
 const administratif = new MessageEmbed()
    .setDescription(`🛡️・Administration`)
    .setColor(db.color)

.addField("`prefix`", `__Alias__ : \`setprefix\`\n - Permet de changer le préfixe du bot`)
.addField("`settings`" , `__Alias__ :  \`config\`\n - Permet d'avoir quelques informations sur le bot`)
.addField("`lockdown on/off`", `__Alias__ : \`lkall\`\n - Ferme tous les salons du serveur`)
.addField("`dm`" , `__Alias__ :  \`mp\`\n - Permet d'envoyer des mp avec le bot`)
.addField("`say`" , `__Alias__ :   Faire répéter au bot un message donné`)
.addField("`poll`" , `__Alias__ :  \`sondage\`\n - Faire un sondage`)
.addField("`giveaway`", `__Alias__ : \`gstart\`,\`giveawaystart\` \n - Permet d'afficher le panel de configuration des giveaways`)
.addField("`reroll`", `__Alias__ : \`greroll\`,\`giveawayreroll\`\n - Re-sélectionne un gagnant du dernier giveaway`)
.addField("`ticket-setup`", `__Alias__ : \`ticketsetup\`\n - Permet de mettre en place le système de tickets`)
.setTimestamp(Date.now())

const cfg = new MessageEmbed()
.setAuthor(`⚙️・Configuration`)
.setColor(db.color)
.addField("`statut`", `__Alias__ : \`spanel\`,\`statutpanel\`\n - Permet d'afficher le panel de configuration des Custom Status`)
.addField("`tempchannel`", `__Alias__ : \`tpanel\`,\`configtempo\`,\`tempo\`\n - Permet d'afficher le panel de configuration des salons temporaires`)
.addField("`membercount`", `__Alias__ : \`cpanel\`,\`mbpanel\`,\`membercounterpanel\`\n - Permet d'afficher le panel de configuration des salons temporaires`)
.addField("`logs`", `__Alias__ : \`lpanel\`,\`logspanel\`\n - Permet d'afficher le panel de configuration des logs`)
.addField("`autorole`", `__Alias__ : \`apanel\`,\`autorolepanel\`\n - Permet d'afficher le panel de configuration de l'autorole`)
.addField("`wpanel`", `__Alias__ : \`whpanel\`\n - Permet d'afficher le panel de configuration de l'anti-webhook`)
.addField("`mpanel`", `__Alias__ : \`mods\`,\`modspanel\` \n - Permet d'afficher le panel de configuration des modérateurs`)
.addField("`setwelcome`", `__Alias__ : \`welcome\`\n - Permet de changer le message/channel de bienvenue`)
.addField("`setgoodbye`", `__Alias__ : \`goodbye\`\n - Permet de changer le message/channel d'aurevoir`)
.setTimestamp(Date.now())

const moderation = new MessageEmbed()
.setAuthor(`🤖・Modération`)
.setColor(db.color)

.addField("`mute`", `__Alias__ : \`m\`,\n - Retirer la permission de parler dans tous les salons textuels`)
.addField("`unmute`", `__Alias__ : \`um\`\n - Redonne la permission de parler dans tous les salons textuels`)
.addField("`ban`", `__Alias__ : \`b\` \n - Banni la personne donnée`)
.addField("`unban`", `__Alias__ : \`ub\`\n - Débannir une personne`)
.addField("`nuke`", `__Alias__ : \`purge\`,\`boom\`\n - Permet de supprimer et recrée le salon ou est écris la commande`)
.addField("`voicemove`", `__Alias__ : \`vm\`,\`voicem\`\n - Déplace toutes les personnes du salon vers un autre salon`)
.addField("`clear`", `__Alias__ : \`purge\`\n - Supprime le nombre de messages voulu`)
.addField("`slowmode`", `__Alias__ : \`slow\`\n - Active le slow mode dans le salon`)
.addField("`lock`", `__Alias__ : \`close\`\n - Ferme un salon`)
.addField("`unlock`", `__Alias__ : \`ul\`\n - Deverouille un salon`)
.addField("`warn`", `__Alias__ : \`wrn\`\n - Warn un membre`)
.addField("`delwebhook`", `__Alias__ : \`dwebhook\`\n - Permet de supprimer tous les webhook du serveur`)
.setTimestamp(Date.now())

const fun = new MessageEmbed()
.setAuthor(`💬・Fun`)
.setColor(db.color)

.addField("`kiss`", `__Alias__ :  Fais un bisous`)
.addField("`fight`", `__Alias__ :  Combat une personne`)
.addField("`hug`", `__Alias__ :  Fais un calin a une personne`)
.addField("`8ball`", `__Alias__ :  Il y a de grandes chances que j'insulte ta mère`)
.addField("`pic`" , `__Alias__ : \`pp\`, \`avatar\` \n - Obtenez votre propre avatar ou celui de quelqu'un d'autre`)
.addField("`calc`" , `__Alias__ : \`calcule\`, \`math\` \n - Resoudre des calculs simples`)
.addField("`love`" , `__Alias__ : \`lc\` \n - Affiche le pourcentage d'amour entre deux utilisateurs`)
.addField("`gif`" , `__Alias__ : \`tenor\` \n - Fournissez une requête et je trouverai un gif correspondant a la demande`)
.addField("`cat`" , `__Alias__ :  Donne une image random de chat`)
.addField("`dog`" , `__Alias__ :  Donne une image random de chien`)
.addField("`koala`" , `__Alias__ :  Donne une image random de koala`)
.addField("`trivia`" , `__Alias__ : \`trv\` \n - Quiz pour un developpeur`)
.addField("`panda`" , `__Alias__ :   Donne une image random de panda`)
.addField("`punsh`" , `__Alias__ :  Frapper un membre`)
.addField("`flip`" , `__Alias__ : \`coin\` \n - Jouer à Pile ou Face`)
.setTimestamp(Date.now())

const util = new MessageEmbed()
.setAuthor(`✨・Misc`)
.setColor(db.color)

.addField("`vc`", `__Alias__ : \`vocalmembers\`,\`voicemember\` \n - Obtenez le nombre de personne en vocal ainsi que le nombre de personne sur le serveur`)
.addField("`la`", `__Alias__ : \`listeadmin\` \n - Liste de toutes les personnes ayant la permissions administrateur sur le serveur`)
.addField("`lrm`", `__Alias__ : \`listerolemembers\` \n - Obtenez la liste de personne dans un rôle`)
.addField("`help`", `__Alias__ : \`aide\` \n - Affiche la liste des commandes`)
.addField("`ping`" , `__Alias__ :  Affiche le ping du bot et de l'api discord`)
.addField("`embed`" , `__Alias__ :  Ecrire en embed`)
.addField("`server-pic`" , `__Alias__ : \`sp\` \n - Donne la pdp du server`)
.addField("`server-info`" , `__Alias__ : \`si\` \n - Donne des infos sur le serveur`)
.addField("`user-info`" , `__Alias__ : \`info\`, \`ui\` \n - Donne des infos sur une personne`)
.addField("`ancien`" , `__Alias__ : \`oldest\` \n - Donne la personne la plus ancienne du serveur`)
.addField("`recent`" , `__Alias__ : \`yougest\` \n - Donne la perssonne la plus jeune du serveur`)
.addField("`addbot`" , `__Alias__ : \`invite\` \n - Donne l'invitation du bot`)
.addField("`total-ban`" , `__Alias__ : \`bans\` \n - Liste des membres / bot ban du serveur`)
.addField("`dox`" , `__Alias__ : \`doxlist\` \n - Liste des doxs faits sur des utilisateurs de discord`)

const nsfw = new MessageEmbed()
.setAuthor(`🔞・Nsfw`)
.setColor(db.color)
.addField("`4k`" , `__Alias__ :  4k`)
.addField("`anal`" , `__Alias__ :  anal`)
.addField("`ass`" , `__Alias__ :  ass`)
.addField("`boobs`" , `__Alias__ :  boobs`)
.addField("`hentai`" , `__Alias__ :  hentai`)
.addField("`porngif`" , `__Alias__ : \`pgif\` \n - prongif`)
.addField("`pussy`" , `__Alias__ :  pussy`)
.setTimestamp(Date.now())

/*const music = new MessageEmbed()

.setAuthor(`🎵・Musique`)
.setColor(db.color)
.addField("`playmusic`" , `__Alias__ :  Joue de la musique !`)
.addField("`clearqueue`" , `__Alias__ :  Clear la file d\'attente de musique !`)
.addField("`queue`" , `__Alias__ :  Voir la file d\'attente des musiques en cours !`)
.addField("`loop`" , `__Alias__ :  Permet de mettre en boucle la musique !`)
.addField("`nowplaying`" , `__Alias__ :  Permet de voir la musique en cours !`)
.addField("`pause`" , `__Alias__ : \`pgif\` \n - Permet de mettre en pause la musique en cours !`)
.addField("`volume`" , `__Alias__ :  Permet de changer le volume la musique en cours !`)
.addField("`resume`" , `__Alias__ :  Permet de reprendre la musique en cours !`)
.addField("`shuffle`" , `__Alias__ : \`pgif\` \n - Permet de mélanger les musiques en cours !`)
.addField("`skip`" , `__Alias__ :  Permet de skip la musique en cours !`)
.addField("`stop`" , `__Alias__ :  Permet de stopper la musique en cours !`)*/


const owner = new MessageEmbed()
.setAuthor(`💎・Owner`)
.setColor(db.color)

.addField("`server-list`" , `__Alias__ : \`slt\` \n - Donne les serveurs où se trouve le bot`)
.addField("`setavatar`", `__Alias__ : \`botavatar\`\n - Permet de changer la photo de profil du bot`)
.addField("`setname`", `__Alias__ : \`botname\`\n - Permet de changer le pseudo du bot`)
.addField("`stream`", `__Alias__ : \`play\`,\`watch\`,\`listen\`,\`setstream\`,\`activity\`\n - Permet de changer l'activité du bot`)
.addField("`color`", `__Alias__ : \`colorembed\`,\`theme\`\n - Permet de définir une couleur au embed du bot`)
.addField("`eval`", `__Alias__ :  Faire evaluer une commande en js`)
.addField("`reload`" , `__Alias__ : \`redem\` \n - Redémarrer le bot`)
.setTimestamp(Date.now())

const pages = [
    help,
    administratif,
    cfg,
    moderation,
    fun,
    util,
    nsfw,
    owner
]


const emojiList = ["⏪", "⏩"];

const timeout = '120000';

pagination(message, pages, emojiList, timeout)
};


module.exports.help = {
    name: "help",
    __Alias__es: ['aide','commands'],
    category: 'Administration',
    description: "Obtenez les informations de votre abonnement ",
  };
