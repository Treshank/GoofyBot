const search = require('yt-search')
const discord = require('discord.js')
const constants = require('./constants')
const key= constants.YT_TOKEN

module.exports= {
    yt_Search: async function (search_string,type ,message) {
        let embed = new discord.MessageEmbed()
            .setColor("#73ffdc")
            .setDescription("Please enter a search query. Remember to narrow down your search.")
            .setTitle("YouTube Search API");
        search( search_string, function ( err, r ) {
            var sel
            if(type === 'video' || type === 'videos' || type === 'v') {
                var videos = r.videos
                sel =videos[0]
            }
            else if(type === 'playlists' || type === 'playlist'|| type === 'p') {
                var playlists = r.playlists || r.lists
                sel = playlists[0]
            }
            else if(type === 'channels' || type === 'channel'|| type === 'c') {
                var channels = r.channels || r.accounts
                sel = channels[0]
            }
            else{
                message.reply("Invalid option")
                return
            }
            embed = new discord.MessageEmbed()
                .setTitle(`${sel.title}`)
                .setURL(`${sel.url}`)
                .setDescription(`${sel.description}`)
                .setThumbnail(`${sel.thumbnail}`);
            console.log(embed)
            message.channel.send(embed)
        } )
    }
}