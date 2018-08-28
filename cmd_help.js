module.exports = function(param,clientArg, args) { // it sends help
    clientArg.getDMChannel(param.author.id).then(dm => {
                param.channel.createMessage(param.author.mention + ", Sliding into your dms! :wink:\n**<input>** - Required input\n");
                return clientArg.createMessage(dm.id, {
                    embed: {
                        author: {
                            name: "Megumin. \nCoded by FireC, TTtie, Cth103."
                        },
			description: "Commands:",
                        fields: [{
                            name: "~help",
                            value: "Sends this message."
                        },{
                            name: "~ping",
                            value: "Pong."
                        },{
                            name: "~cat",
                            value: "Megumin sends a random cat image! *MEOW ^^*"
                        },
			{
                            name: "~urbandict <input>",
                            value: "Pull info from the urban dictionary!"
                        },{
                            name: "~garfield",
                            value: "Random garfield comic"
                        },{
                            name: "~r34 <input>",
                            value: "Pull images from rule34, how lewd! ^^"
                        },{
                            name: "~cowsay <input>",
                            value: ":cow: <( Moo!)"
                        },{
                            name: "~uptime",
                            value: ":clock1030: Tell you how long the bot has been running for!"
                        },{
                            name: "~8ball",
                            value: ":8ball: Megumin will read your future! ^^"
                        }],
                        color: 0xa71bba,
                        footer: {
                            text: `~help`
                        }
                    }
                });
            });
}
