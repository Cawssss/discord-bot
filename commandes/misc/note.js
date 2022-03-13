const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

module.exports.run = async(bot, message, args) => {
    console.log(`[+] Commande note utilisée sur le serveur :  ${message.guild.name} `)

    const adapter = new FileSync('./data.json')
    const db = low(adapter)
    const get_notes = db.get("note").find({ auteur: message.author.id }).value()
    let note = ''
    if (!get_notes) note = "<:enveloppe:800390849320976425>  **Aucune note n'est enregistrée pour le moment.** +addnote"
    else {
        let note_msg = Object.values(get_notes)
        note = note_msg[1]
    }
    message.author.send("📜 **Voici vos notes** : \n ```" + note + "```")
    message.channel.send("<:enveloppe:800390849320976425>   **Vos notes vous ont été envoyées en message privé.**")
}

module.exports.help = {
    name: "note",
    aliases: ['noteadd','not'],
    category: 'utilitaires',
    description: ".",
  };