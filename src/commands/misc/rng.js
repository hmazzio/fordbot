const { ApplicationCommandOptionType } = require("discord.js");

module.exports = {
    
    name: 'rng',
    description: 'Random Number Generator',
    options: [
        {
            name: 'min',
            description: 'The minimum number.',
            type: ApplicationCommandOptionType.Number,
            required: true,
        },
        {
            name: 'max',
            description: 'The maximum number.',
            type: ApplicationCommandOptionType.Number,
            required: true,
        },
    ],
    callback: (fordClient, interaction) => {
        // Retrieve the min and max values from the interaction options
        const min = interaction.options.getNumber('min');
        const max = interaction.options.getNumber('max');

        // Validate that min is less than max
        if (min >= max) {
            interaction.reply({ content: 'The minimum number must be less than the maximum number.', ephemeral: true });
            return;
        }

        // Generate a random number between min and max
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

        // Reply with the generated random number
        interaction.reply({ content: `${randomNumber}` });
    }
};