Math.seed = function(s) {
    return function() {
        s = Math.sin(s) * 10000; return s - Math.floor(s);
    };
};
module.exports = function(msg, bot, args) {
  const owners = ["244509121838186497", "457250790751600652", "284432595905675264", "150628341316059136", "134348241700388864"]
  if(!args) {
            if (owners.indexOf(msg.author.id) != -1) {
              msg.channel.createMessage("Not autistic at all")
            } else {
 	var inches = Math.floor(Math.seed(msg.member.id)() * 30) + 1
	var dick = "["+"=".repeat(inches/2)+"]";
	msg.channel.createMessage(dick + " ("+inches.toString()+"/10)")
            }
} else {
  var inches = Math.floor(Math.seed(msg.mentions[0].id)() * 30) + 1  * 2
  var dick = "["+"=".repeat(inches/2)+"]";
  msg.channel.createMessage(dick + " ("+inches.toString()+"/10)")
}
if (inches > 14) {
    msg.channel.createMessage("Result: Severly Autistic")
  } else if (inches > 10) {
    msg.channel.createMessage("Result: Autistic")
  } else {
    msg.channel.createMessage("Result: Not Autistic")
  }
}