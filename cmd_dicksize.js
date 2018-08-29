Math.seed = function(s) {
    return function() {
        s = Math.sin(s) * 10000; return s - Math.floor(s);
    };
};
module.exports = function(msg, bot, args) {
  if(!args) {
 	var inches = Math.floor(Math.seed(msg.member.id)() * 30) + 1  * 2
	var dick = "8"+"=".repeat(inches/2)+"D";
	msg.channel.createMessage(dick + " ("+inches.toString()+" inches)")
} else {
  var inches = Math.floor(Math.seed(msg.mentions[0].id)() * 30) + 1  * 2
  var dick = "8"+"=".repeat(inches/2)+"D";
  msg.channel.createMessage(dick + " ("+inches.toString()+" inches)")
}
}
