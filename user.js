const package = require('./package.json')
const constants = require('./constants')

module.exports = {
    commands : function (message) {
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
                        message.channel.send(package.version)
                        break
                    case 'author':
                        message.channel.send(package.author)
                        break
                    case 'description':
                        message.channel.send(package.description)
                        break
                    case 'contact':
                        message.channel.send('Contact me @ : treshank.prasad@gmail.com')
                        break
                    default :
                        message.channel.send('Sorry i dont have information on that.\nAvailable:  version, author, description, contact.')
                        break
                }
                break
        }

    }
}