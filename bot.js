const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('presenceUpdate', (oldPresence, newPresence) => {
  const user = newPresence.user;

    // Check if the user is the one we want to ping
    if (user.id === '256213318060998666') {

//old status online

        if (oldPresence.status != 'online' && newPresence.status === 'online') {
            // Get the channel to send the message in
            const channel = client.channels.cache.get('913633377448509481');
        
            // Send the message
            channel.send(`https://imgur.com/a/wlmieyo`);
        }

//old status idle

        else if (oldPresence.status != 'idle' && newPresence.status === 'idle') {
            // Get the channel to send the message in
            const channel = client.channels.cache.get('913633377448509481');
        
            // Send the message
            channel.send(`https://tenor.com/view/stormidle-gif-27216955`);
        }

//old status dnd

        else if (oldPresence.status != 'dnd' && newPresence.status === 'dnd') {
            // Get the channel to send the message in
            const channel = client.channels.cache.get('913633377448509481');
        
            // Send the message
            channel.send(`https://imgur.com/a/Bp6FLPA`);
        }

//old status online

        else if (oldPresence.status != 'offline' && newPresence.status === 'offline') {
            // Get the channel to send the message in
            const channel = client.channels.cache.get('913633377448509481');
        
            // Send the message
            channel.send(`https://tenor.com/view/stormwavz-omniversal-discord-gif-22696441`);
        }
    }
});

require('dotenv').config()
client.login(process.env.DISCORD_TOKEN);
