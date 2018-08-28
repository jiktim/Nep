//coded by firec, tttie, a jew (jeuxjeux20) and cth103
'use strict';
var fs = require("fs")
const Eris = require("eris");
var bot = new Eris("lul no");
var prefix = "~";
//anyone can set the custom prefix, isnt that right.
var customprefix = "meg!";
var ah = "";
exports.customprefix = customprefix;
//jew shit
var AllGames = ["With Aqua 💙", "With Darkness 💛", "With Kazuma 💚", "With Wiz 💜", "With Yunyun ❤️", "With Komekko ❤️", "With code!", "With Fire 🔥"];
try {
let cmds = {};
//load
let loadAll = function() {
    let fa = fs.readdirSync("./");
    for (let i = 0; i < fa.length; i++) {
        let cmF = fa[i];
        if (/.+\.js$/.test(cmF)) {
            let cmN = cmF.match(/(.+)\.js$/)[1]
            try {
                let cmFL = require("./" + cmN + ".js")
                cmFL.id = cmN;
                if (cmFL.isCmd) {
                    console.log(`${__filename}      | Loading ${cmN} command, file ${cmF}`)
                }
                else console.log(__filename + "    | Skipping non-command " + cmF)
            } catch (err) {
                console.error(`Error while loading command ${cmN}: ${err}`)
                console.error(err)
            }

        } else {
            console.log(__filename + "     | Skipping non-JS " + cmF)
        }
    }
}
Object.defineProperty(Eris.Message.prototype, "guild", {
    get: function () {
        return this.channel.guild;
    }
})
bot.on("ready", () => {
    console.log("Megumin, The discord bot Copyright (C) 2018 Jiktim (Jimmy Team)");
    console.log("This program comes with ABSOLUTELY NO WARRANTY");
    console.log("This is free software, and you are welcome to redistribute it under certain conditions.");
    console.log("loading...");
    loadAll();
    console.log("I am ready, BEEP BOOP."); // log when the bot is ready
    setGame(AllGames[Math.floor(Math.random()*AllGames.length)] +" | ~help"); //set the game
});
bot.on("guildCreate", svr => {
    console.log("New Server : " + svr.name || " vietnam war "); //log when the bot gets added to a new guild
});
bot.on("guildDelete", (svr, unavailable) => {
    console.log("I was deleted in  " + svr.name || " vietnam war " + ". Fuck those dudes."); //log when the bot gets kicked/banned or the guild gets deleted
});

bot.on("channelDelete", (ch, svr) => {
    console.log("Channel " + ch.name || " lol " + " was deleted in the server" + svr.name);
});

bot.on("guildMemberRemove", (svr, member) => {
    console.log("This nigga " + member.name || "anon" + " was banned in " + svr.name);
});

bot.on("guildBanAdd", (svr, usr) => {
    console.log("On the chaos named " + svr.name || " vietnam war " + " an person named " + usr.name || "anon." + " was banned.");
});

bot.on("guildBanRemove", (svr, usr) => {
    console.log("Oh well guess what in " + svr.name || "vietnam war" + " they unbanned " + usr.name || "anon.");
});
bot.on("messageDelete", msg => {
    console.log("Message deleted, contents: " + msg.content || "Cannot get the contents");
});
bot.on("messageCreate", msg => {
    if (msg.content.startsWith(prefix)) {
        var command = msg.content.slice(prefix.length)
        var commandName = command.split(" ")[0];
        var args = command.slice((commandName.length + 1))
        if (cmds[commandName]) {
            try {
                cmds[commandName](msg, bot, args, cmds)
            } catch (e) {
                console.error(e)
            }
        }
    }
});
    }catch(err){
      console.log("ERROR: "+err);
    }

function setGame(ok) {
    var game = { name: ok };
    bot.editStatus("online", game);
}
bot.connect();
