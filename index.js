const Discord = require('discord.js');
require('dotenv').config()
const user = require('./user')
const admin = require('./admin')
const constants = require('./constants')
const client = new Discord.Client();


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
    if(message.author.bot)
        return
    else if(message.content[0] === constants.UPREFIX)
    {
        user.commands(message)
    }
    else if(message.content[0] === constants.APREFIX)
    {
        if(message.member.hasPermission("ADMINISTRATOR"))
        {
            admin.commands(message)
        }
        else{
            message.reply("Umm.. You aren't an admin..\nUsers.. :unamused: Typical of them..")
        }
    }
    else if(message.mentions.has(client.user))
    {
        let mess = message.content.toLowerCase()
        let mes = mess.split(' ')
        mes.forEach(m => {
            if (m === 'thanks' || m === 'thank'|| m === 'danke' || m === 'gracias' || m === 'merci'){
                message.reply("Anytime")
            }
            else if(m === 'nice'){
                message.reply('IKRR!!')
            }
        })

    }
});

client.login(constants.TOKEN);