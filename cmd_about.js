module.exports = function(param, clientArg, args, bot) {
  const toHHMMSS = seconds => { //convert to HH:MM:SS
    var secNum = parseInt(seconds, 10); // don't forget the second param
    var hours = Math.floor(secNum / 3600);
    var minutes = Math.floor((secNum - (hours * 3600)) / 60);
    seconds = secNum - (hours * 3600) - (minutes * 60);

    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    return hours + ":" + minutes + ":" + seconds;
  };
  var time = toHHMMSS(process.uptime());
  const data = {
    "embed": {
      "title": "About the bot",
      "color": 16711680,
      "timestamp": new Date(),
      "footer": {
        "icon_url": "https://cdn.discordapp.com/avatars/255397678492418048/a8e516d198c913fb897aa592ce21e260.png",
        "text": "~urbandict"
      },
      "author": {
        "name": "Megumin!",
        "url": "https://discordapp.com",
        "icon_url": "https://cdn.discordapp.com/avatars/255397678492418048/a8e516d198c913fb897aa592ce21e260.png"
      },
      "fields": [
        {
          "name": "Servers",
          "value": bot.guilds.size
        },
        {
          "name": "Users",
          "value": bot.users.size
        },
        {
          "name": "Uptime",
          "value": time
        }
      ]
    }
  };
    param.channel.createMessage(data); // send embed
}
