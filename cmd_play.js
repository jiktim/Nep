// WORK IN PROGRESS (PROBABLY NOT CURRENTLY WORKING CAUSE FIREC IS AN IDIOT)
const {
  google
} = require('googleapis');
const key = 'AIzaSyBXcfJ5kwQ9t8xvppno8yjkJZkc9PwreXs'
const ytdl = require("ytdl-core");
const ytcache = './youtube-cache/' //where the files will be temporearly downloaded to!
const fs = require("fs");
const youtube = google.youtube({
  version: 'v3',
  auth: key
});
//oh yeah get the latest ffmpeg binary before you run this
module.exports = function(msg, bot, args) { // it sends help
  if (args.length > 1) {
    if (!msg.member.voiceState.channelID) {
      msg.channel.createMessage('You have to be in a voice channel!');
    } else {
      async function search(q) {
        const res = await youtube.search.list({
          part: 'id, snippet',
          q: q
        });
        var video = res.data.items[1];
        bot.joinVoiceChannel(msg.member.voiceState.channelID).catch((err) => {// tottaly not skidded from eris examples
          bot.createMessage(msg.channel.id, "Error joining voice channel: " + err.message);
          console.log(err);
        }).then((connection) => {
          if (connection.playing) { // Stop playing if the connection is playing something
            connection.stopPlaying();
          }
          var url = "https://www.youtube.com/watch?v="+video.id.videoId
          const stream = ytdl(url, { filter: 'audioonly' });
          msg.channel.createMessage("Playing **" + video.snippet.title+"**")
          connection.play(stream); // Play the file and notify the user
          connection.once("end", () => {
            bot.createMessage(msg.channel.id, `Finished **${filename}**`); // Say when the file has finished playing
          });
        });
      }
      search(args);


    }
  } else {
    msg.channel.createMessage('You have to specify a song!');
    return;
  }
};
