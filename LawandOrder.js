const discord = require('discord.js')

function cansue(plaintiff, defendant){
    if(defendant.hasPermission("ADMINISTRATOR") && plaintiff.hasPermission('ADMINISTRATOR'))
        return 1
    else if(defendant.hasPermission("ADMINISTRATOR"))
        return 0
    else
        return 2
}

module.exports = {
    sue : function (plaintiff, defendant, message){
        let sueable = cansue(plaintiff, defendant)
        let embed = new discord.MessageEmbed()
            .setColor("#ff3d3d")
            .setDescription("This is a courtroom")
            .setTitle("Sueee!!!");
        if (sueable === 1) {
            embed = new discord.MessageEmbed()
                .setTitle(`THE COURTROOM`)
                .setThumbnail('https://cdn0.iconfinder.com/data/icons/octicons/1024/law-512.png')
                .setImage('https://i.imgflip.com/30ogqt.jpg')
                .setDescription(`The ADMIN ${plaintiff} is suing ADMIN${defendant}`);
            message.channel.send(embed)

        }
        else if (sueable === 2){
            embed = new discord.MessageEmbed()
                .setTitle(`THE COURTROOM`)
                .setThumbnail('https://cdn0.iconfinder.com/data/icons/octicons/1024/law-512.png')
                .setDescription(`${plaintiff} is suing ${defendant}`);
            message.channel.send(embed)
        }
        else {
            message.reply(`You can't sue this person`)
        }
        if (sueable>0)
        {
            let role = message.guild.roles.cache.find(role => role.name === 'court attendees');
            defendant.roles.add(role, `You are being sued by ${plaintiff}`)
            plaintiff.roles.add(role, `You are suing ${defendant}`)
        }

    }

}