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
                            name: "megu!help",
                            value: "Sends this message."
                        },{
                            name: "megu!ping",
                            value: "Pong."
                        },{
                            name: "megu!cat",
                            value: "Nep sends a random cat image! *MEOW ^^*"
                        },
			{
                            name: "megu!urbandict <input>",
                            value: "Pull info from the urban dictionary!"
                        },{
                            name: "megu!garfield",
                            value: "Random garfield comic"
                        },{
                            name: "megu!r34 <input>",
                            value: "Pull images from rule34, how lewd! ^^"
                        },{
                            name: "nep!cowsay <input>",
                            value: ":cow: <( Moo!)"
                        },{
                            name: "nep!uptime",
                            value: ":clock1030: Tell you how long the bot has been running for!"
                        },{
                            name: "nep!8ball",
                            value: ":8ball: Nep will read your future! ^^"
                        }],
                        color: 0xa71bba,
                        footer: {
                            text: `nep!help`
                        }
                    }
                });
            });
}
