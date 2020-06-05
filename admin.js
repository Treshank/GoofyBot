const constants = require('./constants')


module.exports = {
    commands : function (message) {
        let args = message.content.substring(constants.APREFIX.length).split(" ")
        switch (args[0]) {
            case 'kick':
                if (args[1] === undefined)
                    message.reply(`Can't read your mind yet..`)
                else
                {
                    let reason = args[2]
                    let mem = message.mentions.members.first()
                    console.log(mem)
                        try{
                            mem.kick(reason)
                                .then(console.log)
                                .catch(console.error)
                            message.reply(`${mem} has been kicked`)
                        }
                        catch {
                            message.reply(`Hmmm..\nSo... ${mem} can't be kicked`)
                        }
                }
                break
            case 'ban':
                if(args[1] === undefined)
                    message.reply(`Can't read your mind yet...`)
                else{
                    let day = args[2]
                    let reas = args[3]
                    let mem = message.mentions.members.first()
                    try {
                        mem.ban({days: Number(day), reason: reas})
                            .then(console.log)
                            .catch(console.error);
                        message.reply("BANNED...")
                    }
                    catch {
                        message.reply(`Hmmm..\nSo... ${mem} can't be banned`)
                    }
                }
                break
        }
    }
}