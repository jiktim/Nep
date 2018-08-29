module.exports = function(msg, bot, args) {
	if (!msg.member.voiceState.channelID) {
			msg.channel.createMessage('You have to be in a voice channel!');
	} else {
    	bot.leaveVoiceChannel(msg.member.voiceState.channelID);
		msg.channel.createMessage("ok lol")
	}
}
