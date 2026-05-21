import { Client, Events, GatewayIntentBits, Message, messageLink } from 'discord.js';

import dotenv from 'dotenv';
dotenv.config()

const client = new Client({ intents: [GatewayIntentBits.Guilds,GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessages] });

client.on('messageCreate',(message)=>{
    console.log(message.author.username)
    if(message.author.bot) return;
    if(message.content.startsWith("create ")){
        const url = message.content.split("create")[1]
        return message.reply({
            content:"Generating short url for "+url
        })
    }
    message.reply({content:`Hey @${message.author.username} \nWelcome to our server.`})
}
)
client.on("interactionCreate",interaction=>{
    console.log(interaction);
    interaction.reply("Pong!!")
})

client.login(process.env.BOT_API_KEY)