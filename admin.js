const constants = require('./constants')


module.exports = {
    commands : function (message) {
        let args = message.content.substring(constants.APREFIX.length).split(" ")
        switch (args[0]) {
            case 'kick':
                if (args[1] == undefined)
                    message.reply(`Can't read your mind yet..`)
                else
                {
                    reason = args[2]
                    mem = message.mentions.members.first()
                    console.log(mem)
                        try{
                            mem.kick(reason)
                            message.reply(`${mem} has been kicked`)
                        }
                        catch {
                            message.reply(`Hmmm..\nSo... ${mem} can't be kicked`)
                        }
                }
                break
        }
    }
}