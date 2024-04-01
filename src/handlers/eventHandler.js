const path = require('path');
const getAllFiles = require('../utils/getAllFiles');

module.exports = (fordClient) => {
    const eventFolders = getAllFiles(path.join(__dirname, '..', 'events'), true);
    
    for (const eventFolder of eventFolders) {
        const eventFiles = getAllFiles(eventFolder);
        eventFiles.sort((a,b) => a > b);
        const eventName = eventFolder.replace(/\\/g, '/').split('/').pop();
        fordClient.on(eventName, async (args) => {
            for (const eventFile of eventFiles) {
                const eventFunction = require(eventFile);
                await eventFunction(fordClient, args);
            }
        });
        
    
    }
    
};