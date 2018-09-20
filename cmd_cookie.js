module.exports = function(msg, bot, args) { // it sends cats
    if (msg.mentions[0] != undefined) {
        msg.channel.createMessage(":cookie: **" + msg.author.username + " gave " + msg.mentions[0].username + " a cookie OwO** :cookie:")
    } else if (msg.channel.guild.members.find(owo => owo.username.toLowerCase() == args.toLowerCase()) != undefined) {
        var user = msg.channel.guild.members.find(owo => owo.username.toLowerCase() == args.toLowerCase())
        msg.channel.createMessage(":cookie: **" + msg.author.username + " gave " + user.username + " a cookie OwO** :cookie:")
    } else if (msg.channel.guild.members.find(owo => owo.id == args) != undefined) {
        var user = msg.channel.guild.members.find(owo => owo.id == args)
        msg.channel.createMessage(":cookie: **" + msg.author.username + " gave " + user.username + " a cookie OwO** :cookie:")
    }
};