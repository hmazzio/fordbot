require('dotenv').config();
const {Client, IntentsBitField,} = require ('discord.js');
const eventHandler = require('./handlers/eventHandler');
const mongoose = require('mongoose');

const fordClient = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

(async () => {
    try{
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to MongoDB.");

     eventHandler(fordClient);
     fordClient.login(process.env.TOKEN);
    }catch (error) {
        console.log(`Error: ${error}`);

    }
})();