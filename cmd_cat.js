var request = require('request');
module.exports = function(param, clientArg, args) { // it sends cats
    request('http://random.cat/meow', function(error, response, body) {
    let json = JSON.parse(body); // parsing
    let result = json.file; // defining the gay ass cat
    param.channel.createMessage(':cat: ', {
      'embed': {
        'image': {
          'url': result,
        },
      },
    }); // cute
    });
};
