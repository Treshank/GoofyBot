const pack = require('./package.json')
const constants = require('./constants')
const discord = require('discord.js')
const LandO = require('./LawandOrder')
const YT_Search = require('./ytSearch')
module.exports = {
    commands : async function (message) {
        let args = message.content.substring(constants.UPREFIX.length).split(" ")
        switch (args[0]) {
            case 'ping':
                message.channel.send(`Latency is ${new Date().getTime() - message.createdTimestamp} ms`)
                break
            case 'info':
                switch (args[1]) {
                    case undefined:
                        message.channel.send(`What do you want to know about?\n Format:  !info {param}`)
                        break
                    case 'version':
                        message.channel.send(pack.version)
                        break
                    case 'author':
                        message.channel.send(pack.author)
                        break
                    case 'description':
                        message.channel.send(pack.description)
                        break
                    case 'contact':
                        message.channel.send('Contact me @ : treshank.prasad@gmail.com')
                        break
                    default :
                        message.channel.send('Sorry i dont have information on that.\nAvailable:  version, author, description, contact.')
                        break
                }
                break
            case 'search':
                if (args[1] === undefined)
                    message.reply("Enter the type: video(or v), playlist (or p), channel (or c).")
                else
                    var type =args[1]
                var arg=args[2]
                if (args[3] === undefined)
                    var i = 2
                else {
                        for (var i = 3; i < args.length; i++) {
                            arg=arg.concat(' ', args[i])
                        }
                }
                await YT_Search.yt_Search(arg, type, message)
                break
            case 'sue':
                let defendant = message.mentions.members.first()
                let plaintiff = message.guild.member(message.author);
                LandO.sue(plaintiff, defendant, message)
                break
        }

    }
}