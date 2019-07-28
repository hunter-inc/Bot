const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'NjA0OTA1MDcwNjM0NTk4NDQw.XT1w0A.JK4Domtu6hDChdUceuH-RsJMnTU';
bot.on('ready',()=>{
    console.log('This Bot is Online!');
})
bot.on('message',msg=>{
    if(msg.content === "Hello"){
        msg.reply('Hello Nibbas How are you!')
    }
})
bot.on('message',msg=>{
    if(msg.content === "how are you"){
        msg.reply('I am fine bro how are you?')
    }
})
bot.on('message',msg=>{
    if(msg.content === "wanna play game"){
        msg.reply('sorry i am not that advanced So Sorry!')
    }
})
bot.login(process.env.token);
