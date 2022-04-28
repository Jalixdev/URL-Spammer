const spmc = require("./Client");
const fetch = require("node-fetch");
const { TOKEN, SERVER_ID, VANITY_URL, INVITE_CODE } = require("./configurations.json").DEFAULTS;
const spammerClient = new spmc(TOKEN);
    
    spammerClient.on("ready", async () => {
        const spammerGuild = spammerClient.guilds.cache.get(SERVER_ID);
        const targetGuild = await spammerClient.fetchInvite(INVITE_CODE).then(async x => {
        spammerClient.user.setPresence({ activity: { name: "Created By Jalix.", type: "PLAYING" }, status: "dnd" });

        setInterval(async () => {
            if (x.guild.vanityURLCode) return;
            if (spammerGuild.vanityURLCode === VANITY_URL) return console.log("URL GİTTİ KNK");
            await fetch(`https://discord.com/api/guilds/${SERVER_ID}/vanity-url`,{

                method: "PATCH",
                headers: { 'Authorization': 'Bot ' + spammerClient.token, 'Content-Type': 'application/json'},
                body: JSON.stringify({code: VANITY_URL})
        
            }).then(res => res.json())
             .then(json => { console.log(json)})
             .catch(err => console.log(err))

        }, 0.01);
    });
    });

    spammerClient.login(TOKEN).then(console.log(`Client is successfully connected.`)).catch(e => console.error(e));
