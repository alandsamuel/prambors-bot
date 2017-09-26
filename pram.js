const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

bot.on("disconnected", function () {
    console.log("Disconnected from Discord");
    process.exit(1);
});

client.on('message', message => {
  if (message.content === 'ping') {
    message.reply('pong');
  }
});

client.login('MzYxOTI2ODMxMDU1NTY4ODk2.DKrSKw.QuM_JImKTtk3Mh7oIrfirvpIxY8');