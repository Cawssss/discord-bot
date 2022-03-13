module.exports.run = async(bot, message, args) => {

    message.delete();

    if (message.author.id !== "749415485971497071")
        return message.channel.send(`Vous n'avez pas les permissions nécéssaires.`);
    if (!message.member.voice.channel)
        return message.channel.send(":x: ``Vous n'ètes pas connecté à un vocal.``");
    message.member.voice.channel.join();
    message.channel.send(":white_check_mark: ``Connecté au Vocal !``")
}

module.exports.help = {
    name: "join",
    category: 'Fun',
    description: ".",

  };