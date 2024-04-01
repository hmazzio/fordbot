module.exports = async (fordClient, GUILD_ID) => {
    let applicationCommands;

    if(GUILD_ID) {
        const guild = await fordClient.guilds.fetch(GUILD_ID);
        applicationCommands = guild.commands;
    } else {
        applicationCommands = await fordClient.application.commands;
    }

    await applicationCommands.fetch();
    return applicationCommands;
}