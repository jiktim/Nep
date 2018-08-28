var request = require('request');
var libxmljs = require('libxmljs');
// beta

module.exports = function(param, clientArg, args) { // it sends help
    request('http://rule34.xxx/index.php?page=dapi&s=post&q=index&tags='+encodeURI(args), function(error, response, body) {
	let xmlDoc = libxmljs.parseXml(body);
	let children = xmlDoc.root().childNodes();
	let child = children[Math.floor(children.length * Math.random())];
	try {
		if(param.channel.nsfw) {
    			param.channel.createMessage(':weary: :ok_hand: http:' + child.attr('file_url').value());
		} else {
			param.channel.createMessage('This is not an NSFW channel :smiley:');
		}
	} catch (e) {
		console.log(e);
		param.channel.createMessage(':rage: :ok_hand: There isn\'t porn out of it! How? :thinking:');
	}
    });
};
