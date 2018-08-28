var request = require('request');
var booru = require('booru');
// beta

module.exports = function(param, clientArg, args) { // it sends help
	booru.search(site, [clientArg], {limit: 1, random: true}).then(booru.commonfy).then(images => {
		if(param.channel.nsfw) {
			for (let image of images) {
				param.channel.createMessage(':weary: :ok_hand: ' + image.common.file_url);
			}
		} else {
			param.channel.createMessage('This is not an NSFW channel :smiley:');
		}
	}).catch(e) {
		console.log(e);
		param.channel.createMessage(':rage: :ok_hand: There isn\'t porn out of it! How? :thinking:');
	}
    });
};
