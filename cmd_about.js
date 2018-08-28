module.exports = function(param, clientArg, args) {
  const toHHMMSS = seconds => { //convert to HH:MM:SS
    var secNum = parseInt(seconds, 10); // don't forget the second param
    var hours = Math.floor(secNum / 3600);
    var minutes = Math.floor((secNum - (hours * 3600)) / 60);
    seconds = secNum - (hours * 3600) - (minutes * 60);

    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    return hours + ":" + minutes + ":" + seconds;
  };
  var time = toHHMMSS(process.uptime());

    param.channel.createMessage(""); // send embed
}
