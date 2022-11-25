module.exports = {
    app: {
        token: 'NDE5NjAxNjY0MTExMTQ5MDc3.Git7Sd.i81rX5vcTRCKPZbT8SrSXENR0j7EzRl1cOvX-Q',
        playing: 'O Miranha Bot',
        global: true,
        guild: 'XXX'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        maxVol: 100,
        leaveOnEnd: true,
        loopMessage: false,
        spotifyBridge: true,
        defaultvolume: 75,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
