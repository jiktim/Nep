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
          param.channel.createMessage(':weary: :ok_hand: ' + image.common.file_url);
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
