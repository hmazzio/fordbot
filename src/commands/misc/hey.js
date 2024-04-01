module.exports = {
    name: 'hey',
    description: 'Replies with Hey!',
    //devOnly: Boolean,
    //testOnly: Boolean,
    //options: Object[],
    //deleted: Boolean,

    callback: (fordClient, interaction) => {
        interaction.reply(`Hey!`);
    }
};