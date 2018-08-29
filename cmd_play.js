// WORK IN PROGRESS (PROBABLY NOT CURRENTLY WORKING CAUSE FIREC IS AN IDIOT)
const {
  google
} = require('googleapis');
const key = 'AIzaSyBXcfJ5kwQ9t8xvppno8yjkJZkc9PwreXs'
const ytdl = require("ytdl-core");
const ytcache = './youtube-cache/' //where the files will be temporearly downloaded to!
const fs = require("fs");
var queue = new Array();
var isplaying = true;
const youtube = google.youtube({
  version: 'v3',
  auth: key
});
//oh yeah get the latest ffmpeg binary before you run this
module.exports = function(msg, bot, args) { 
	async function search(q) {
		var res = await youtube.search.list({
		part: 'id, snippet',
		q: q
		});
		console.log(q);
		var video = res.data.items[0];
		if(typeof(video.id.videoId) === "undefined"){
			video = res.data.items[1];
		}
		bot.joinVoiceChannel(msg.member.voiceState.channelID).catch((err) => {// tottaly not skidded from eris examples
		bot.createMessage(msg.channel.id, "Error joining voice channel: " + err.message);
		console.log(err);
		}).then((connection) => {
		if (connection.playing) { // Stop playing if the connection is playing something
			connection.stopPlaying();
		}
		var url = "https://www.youtube.com/watch?v="+video.id.videoId
		var stream = ytdl(url, { filter: 'audioonly' });
		isplaying = true;
		msg.channel.createMessage("Playing **" + video.snippet.title+"**")
		connection.play(stream); // Play the file and notify the user
		connection.once("end", () => {
			bot.createMessage(msg.channel.id, "Finished **" + video.snippet.title+"**");
			bot.leaveVoiceChannel(msg.member.voiceState.channelID);
			isplaying = false;
		});
		});
	}
	function manageYoutuDotBe(){
		var sfido = "https://www.youtube.com/watch?v="+args.split('.be/')[1];
		console.log(sfido);
		const stream = ytdl(sfido, { filter: 'audioonly' });
		//that much pain for a fucking title
		const res = youtube.search.list({
				part: 'id, snippet',
				q: args.split('.be/')[1]
		}, (err,response) => {
			 bot.joinVoiceChannel(msg.member.voiceState.channelID).catch((err) => {// tottaly not skidded from eris examples
				bot.createMessage(msg.channel.id, "Error joining voice channel: " + err.message);
				console.log(err);
			}).then((connection) => {
				isplaying = true;
				msg.channel.createMessage("Playing **" + response.data.items[0].snippet.title +"**")
				connection.play(stream); // Play the file and notify the user
				connection.once("end", () => {
					isplaying = false;
					bot.createMessage(msg.channel.id, "Finished **" + response.data.items[0].snippet.title+"**");
					bot.leaveVoiceChannel(msg.member.voiceState.channelID);
				});
		});
		});
	}
	
	function manageYoutubeLink() {
				const stream = ytdl(args, { filter: 'audioonly' });
				//that much pain for a fucking title
				const res = youtube.search.list({
					part: 'id, snippet',
					q: args.split('v=')[1]
					}, (err,response) => {
				bot.joinVoiceChannel(msg.member.voiceState.channelID).catch((err) => {// tottaly not skidded from eris examples
				bot.createMessage(msg.channel.id, "Error joining voice channel: " + err.message);
				console.log(err);
			}).then((connection) => {
				isplaying = true;
				msg.channel.createMessage("Playing **" + response.data.items[0].snippet.title +"**")
				connection.play(stream); // Play the file and notify the user
				connection.once("end", () => {
					isplaying = false;
					bot.createMessage(msg.channel.id, "Finished **" + response.data.items[0].snippet.title+"**");
					bot.leaveVoiceChannel(msg.member.voiceState.channelID);
				});
		});
		});
	}
	if (args.length > 1) {
		if (!msg.member.voiceState.channelID) {
			msg.channel.createMessage('You have to be in a voice channel!');
		} else {
			console.log(args);
			if (isplaying) {
				bot.createMessage(msg.channel.id, "adding to queue");
				queue.push(args);
			} else { 
				if(args.includes("://www.youtube.com")) {
					manageYoutubeLink()
				} else if(args.includes("://youtu.be")) {
					manageYoutuDotBe();
				} else {
					search(args);
				}
			}
			
		}
  } else {
	msg.channel.createMessage('You have to specify a song!');
	return;
  }
};
