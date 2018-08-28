// WORK IN PROGRESS (PROBABLY NOT CURRENTLY WORKING CAUSE FIREC IS AN IDIOT)
var search = require('youtube-search');
const fs = require('fs');
var opts = {
  maxResults: 1,
  key: 'AIzaSyBXcfJ5kwQ9t8xvppno8yjkJZkc9PwreXs'
};
module.exports = function(param, clientArg, args) { // it sends help
if (args.length > 1) {
  search(args, opts, function(err, results) {
    if(err) {
      console.log(err);
    }
    console.log(results)
  });
} else {
param.channel.createMessage('You have to specify a song! (only works with youtube)');
}
};
