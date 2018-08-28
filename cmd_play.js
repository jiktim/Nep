// WORK IN PROGRESS (PROBABLY NOT CURRENTLY WORKING CAUSE FIREC IS AN IDIOT)

module.exports = function(param, clientArg, args) { // it sends help
if (args.length > 1) {
param.channel.createMessage('its 4 am i will do this tommrow'); // https://github.com/abalabahaha/eris/blob/master/examples/playFile.js
} else {
param.channel.createMessage('You have to specify a song!');
}
};
