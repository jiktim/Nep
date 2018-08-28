var request = require('request');
var booru = require('booru');
// beta
var argument = new Array();
var common;
module.exports = function(param, clientArg, args) { // it sends help
  argument[0] = clientArg;
  booru.search('r34', [args], {
      limit: 1,
      random: true
    })
    .then(booru.commonfy)
    .then(images => {
      if (param.channel.nsfw) {
        for (let image of images) {
          const data = {
            "embed": {
              "title": "Here is your image!",
              "color": 16711680,
              "timestamp": "2018-08-28T13:52:19.234Z",
              "footer": {
                "icon_url": "https://cdn.discordapp.com/avatars/255397678492418048/a8e516d198c913fb897aa592ce21e260.png",
                "text": "~urbandict"
              },
              "image": {
                "url": image.common.file_url
              },
              "author": {
                "name": "Megumin!",
                "url": "https://discordapp.com",
                "icon_url": "https://cdn.discordapp.com/avatars/255397678492418048/a8e516d198c913fb897aa592ce21e260.png"
              },
              "fields": [{
                "name": "​",
                "value": "​"
              }]
            }
          };
          param.channel.createMessage(data);
        }

      } else {
        param.channel.createMessage('This is not an NSFW channel :smiley:');
      }
    })
    .catch(err => {
      if (err.name == 'BooruError') {
        param.channel.createMessage("I couldnt find an image... sorry! 😞");
      }
    })
}
