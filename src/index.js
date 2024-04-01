require('dotenv').config();
const {Client, IntentsBitField, EmbedBuilder} = require ('discord.js');
const eventHandler = require('./handlers/eventHandler');

const fordClient = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

eventHandler(fordClient);

fordClient.login(process.env.TOKEN);