const cfg = [];

// Discord config, see the README for help
cfg.discord = {
    token: 'BotTokenHere',
    prefix: '!',
    admins: [
        'YOUR ID HERE' // Your ID Here
    ]
};

// General options, see the README for help
cfg.options = {
    defaultVolume: 100 // Sets the default volume percent on join
};

// YouTube API Key, see the README for help
cfg.api = {
    youtube: 'API KEY HERE'
};

// Lavalink config, see the README for help
cfg.lavalink = {
    node: {
        host: '127.0.0.1',
        port: 987,
        password: 'ReadTheREADMEForMoreInformation'
    },
    rest: {
        host: '127.0.0.1',
        port: 2333,
        password: 'ReadTheREADMEForMoreInformation'
    }
};

module.exports = cfg;
