var request = require('request');
var booru = require('booru');
// beta
var argument = new Array();
module.exports = function(param, clientArg, args) { // it sends help
	argument[0] = clientArg;
	const search = booru.search('r34', argument, {
          limit: 1,
          random: true
        }),
        var common = booru.commonfy(search);
	      
	if(param.channel.nsfw) {
		param.channel.createMessage(':weary: :ok_hand: ' + common[0].common.file_url);
	} else {
		param.channel.createMessage('This is not an NSFW channel :smiley:');
	}
};
