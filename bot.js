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

        if (oldPresence.status === 'offline' && newPresence.status === 'online') {
            // Get the channel to send the message in
            const channel = client.channels.cache.get('349096556818857995');
        
            // Send the message
            channel.send(`https://tenor.com/view/stormwavz-omniversal-discord-gif-22696440`);
        }
        else if (oldPresence.status === 'offline' && newPresence.status === 'dnd') {
            // Get the channel to send the message in
            const channel = client.channels.cache.get('349096556818857995');
        
            // Send the message
            channel.send(`https://media.discordapp.net/attachments/1050233928423833640/1050604801077022800/caption.gif`);
        }
        else if (oldPresence.status === 'offline' && newPresence.status === 'idle') {
            // Get the channel to send the message in
            const channel = client.channels.cache.get('349096556818857995');
        
            // Send the message
            channel.send(`https://tenor.com/view/stormidle-gif-27216955`);
        }

//old status idle

        else if (oldPresence.status === 'idle' && newPresence.status === 'online') {
            // Get the channel to send the message in
            const channel = client.channels.cache.get('349096556818857995');
        
            // Send the message
            channel.send(`https://tenor.com/view/stormwavz-omniversal-discord-gif-22696440`);
        }
        else if (oldPresence.status === 'idle' && newPresence.status === 'dnd') {
            // Get the channel to send the message in
            const channel = client.channels.cache.get('349096556818857995');
        
            // Send the message
            channel.send(`https://media.discordapp.net/attachments/1050233928423833640/1050604801077022800/caption.gif`);
        }
        else if (oldPresence.status === 'idle' && newPresence.status === 'offline') {
            // Get the channel to send the message in
            const channel = client.channels.cache.get('349096556818857995');
        
            // Send the message
            channel.send(`https://tenor.com/view/stormwavz-omniversal-discord-gif-22696441`);
        }

//old status dnd

        else if (oldPresence.status === 'dnd' && newPresence.status === 'online') {
            // Get the channel to send the message in
            const channel = client.channels.cache.get('349096556818857995');
        
            // Send the message
            channel.send(`https://tenor.com/view/stormwavz-omniversal-discord-gif-22696440`);
        }
        else if (oldPresence.status === 'dnd' && newPresence.status === 'idle') {
            // Get the channel to send the message in
            const channel = client.channels.cache.get('349096556818857995');
        
            // Send the message
            channel.send(`https://tenor.com/view/stormidle-gif-27216955`);
        }
        else if (oldPresence.status === 'dnd' && newPresence.status === 'offline') {
            // Get the channel to send the message in
            const channel = client.channels.cache.get('349096556818857995');
        
            // Send the message
            channel.send(`https://tenor.com/view/stormwavz-omniversal-discord-gif-22696441`);
        }

//old status online

        else if (oldPresence.status === 'online' && newPresence.status === 'idle') {
            // Get the channel to send the message in
            const channel = client.channels.cache.get('349096556818857995');
        
            // Send the message
            channel.send(`https://tenor.com/view/stormidle-gif-27216955`);
        }
        else if (oldPresence.status === 'online' && newPresence.status === 'dnd') {
            // Get the channel to send the message in
            const channel = client.channels.cache.get('349096556818857995');
        
            // Send the message
            channel.send(`https://media.discordapp.net/attachments/1050233928423833640/1050604801077022800/caption.gif`);
        }
        else if (oldPresence.status === 'online' && newPresence.status === 'offline') {
            // Get the channel to send the message in
            const channel = client.channels.cache.get('349096556818857995');
        
            // Send the message
            channel.send(`https://tenor.com/view/stormwavz-omniversal-discord-gif-22696441`);
        }
    }
});

require('dotenv').config()
client.login(process.env.DISCORD_TOKEN);
