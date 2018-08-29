module.exports = function(msg, bot, args) {
	var inches = 479379600351166478/100000000000000000*16
	var dick = "8"+"=".repeat(inches/2)+"D";
	msg.channel.createMessage(dick + " ("+inches.toString()+" inches)")
}
