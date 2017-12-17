var fs = require('fs');
module.exports = function(param, clientArg, args) { 
	param.channel.createMessage("**DIALING "+args+" :telephone_receiver:**");
  const names = clientArg.guilds.map(guildthing => guildthing.name);
  const guilds = clientArg.guilds;
  for (var i = 0; i < names.length; i++) {
    if(names[i]===args){
    //it's a match!!!
    param.channel.createMessage("**DIALING "+args+" :telephone_receiver:**");
    fs.writeFile(param.guild.id, clientArg.guilds[i].systemChannelID, function(err) {
    if(err) {
        return console.log(err);
    }
		}); 
    clientArg.guilds[i].systemChannelID.createMessage("**"+param.channel.name+" IS RINGING YOU! :telephone_receiver:**");
    }
  }
}
