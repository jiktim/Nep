var request = require('request');
module.exports = function(param, clientArg, args) { // it sends cats
    request('https://api.yomomma.info/', function(error, response, body) {
    let json = JSON.parse(body); // parsing
    let result = json.joke; // defining the cat
    param.channel.createMessage("``"+result+"``");
    });
};