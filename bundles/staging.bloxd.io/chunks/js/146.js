export const id = 146;
export const ids = [146];
export const modules = {
  8120: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      BloxdDiscordActivitySdk: () => nD
    });
    var pD = wD(8124),
      sD = wD(1234),
      KD = wD(1200),
      rD = wD(619),
      LD = wD(1260),
      cD = wD(1737),
      gD = wD(1332),
      RD = wD(760),
      AD = wD(20),
      UD = wD(1084),
      fD = function(DD) {
        return DD.APPLICATION_COMMANDS = "applications.commands", DD.IDENTIFY = "identify", DD.EMAIL = "email", DD.GUILDS = "guilds", DD.READ_DM_CHANNELS = "dm_channels.read", DD.WRITE_ACTIVITIES = "rpc.activities.write", DD
      }(fD || {}),
      ID = function(DD) {
        return DD[DD.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", DD[DD.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", DD[DD.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", DD[DD.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", DD[DD.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", DD[DD.RATELIMITED = 4002] = "RATELIMITED", DD[DD.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", DD[DD.INVALID_VERSION = 4004] = "INVALID_VERSION", DD[DD.INVALID_ENCODING = 4005] = "INVALID_ENCODING", DD
      }(ID || {}),
      BD = function(DD) {
        return DD[DD.PLAYING = 0] = "PLAYING", DD[DD.STREAMING = 1] = "STREAMING", DD[DD.LISTENING = 2] = "LISTENING", DD[DD.WATCHING = 3] = "WATCHING", DD[DD.CUSTOM = 4] = "CUSTOM", DD[DD.COMPETING = 5] = "COMPETING", DD
      }(BD || {});
    const GD = {
        Minigames: "Playing",
        Puzzle: "Solving",
        Escape: "Escaping",
        Parkour: "Parkouring",
        "Cool Parkour": "Parkouring",
        "Two Player Parkour": "Parkouring",
        "Clutch Parkour": "Parkouring",
        "Challenging Parkour": "Parkouring",
        "Progressive Parkour": "Parkouring",
        "Themed Parkour": "Parkouring",
        Obby: "Parkouring",
        Tower: "Climbing",
        Roleplay: "Roleplaying",
        Arena: "Battling",
        Duels: "Duelling",
        Shooting: "Shooting",
        Survival: "Surviving",
        Simulator: "Grinding",
        Tycoon: "Building",
        Clicker: "Clicking",
        PvE: "Battling",
        Building: "Building",
        Horror: "Surviving",
        "Lucky Block": "Battling",
        Racing: "Racing",
        Driving: "Driving",
        "Cool Build": "Building",
        Adventure: "Adventuring",
        Other: "Being mischievous"
      },
      hD = {
        goalRush: "Playing",
        heroesvbrainrots: "Battling",
        hideseek: "Playing",
        bingo: "Playing"
      };
    class nD {
      constructor(DD) {
        this.discordSdk = DD, this.guildNameCache = {}, this.startTime = Date.now(), this.cachedAccessToken = null
      }
      static async setup() {
        console.log("Setting up Discord SDK with client id", UD.b.discordClientID);
        const DD = new pD.d(UD.b.discordClientID);
        let zD = !1;
        setTimeout((() => {
          zD || (console.warn("Discord SDK took too long to initialize"), (0, cD.reloadBloxd)())
        }), 15e3), await DD.ready(), zD = !0;
        try {
          const {
            enabled: zD
          } = await DD.commands.encourageHardwareAcceleration();
          zD || console.warn("Hardware acceleration not enabled in the Discord client")
        } catch (sD) {
          console.error("Failed to encourage hardware acceleration in the Discord client", sD)
        }
        const wD = new nD(DD);
        return wD.isMobilePlatform() && (wD.applyDiscordSafeAreaNotch(), window.addEventListener("resize", (() => {
          wD.applyDiscordSafeAreaNotch()
        }))), wD
      }
      async updateActivityDescription(DD) {
        let zD, wD;
        switch (DD) {
          case "homePage":
            zD = "Chilling in the Main Menu";
            break;
          case "inGame": {
            const DD = await this.getInGameDescriptions();
            zD = DD.primary, wD = DD.secondary;
            break
          }
        }
        await this.discordSdk.commands.setActivity({
          activity: {
            type: BD.PLAYING,
            details: zD,
            state: wD,
            assets: {
              large_image: "icon",
              large_text: zD
            },
            timestamps: {
              start: this.startTime
            }
          }
        }).catch((DD => {
          console.error(`Failed to update Discord activity rich presence with description="${zD}":`, DD)
        }))
      }
      async getInGameDescriptions() {
        var DD;
        const {
          requestedGameNameWithVariation: zD
        } = (0, gD.c)(), wD = (0, RD.m)(zD), pD = null !== (DD = hD[zD]) && void 0 !== DD ? DD : GD[wD.type], sD = await (0, KD.D)(LD.c.ENGLISH, wD.title), cD = (0, gD.c)();
        if ((0, gD.j)(cD)) return {
          primary: `${pD} in a Discord World`
        };
        const AD = `${pD} in ${sD}`;
        return (0, rD.B)(cD.lobbyName) ? {
          primary: AD
        } : {
          primary: AD,
          secondary: `Lobby ${cD.lobbyName}`
        }
      }
      getCurrentChannelType() {
        const {
          channelId: DD,
          guildId: zD
        } = this.getCurrentChannelAndGuild();
        return null !== zD ? sD.b.GUILD : null !== DD ? sD.b.DM : null
      }
      getRequiredScopeForCurrentChannel() {
        const DD = this.getCurrentChannelType(),
          zD = [fD.APPLICATION_COMMANDS, fD.IDENTIFY, fD.EMAIL, fD.GUILDS, fD.WRITE_ACTIVITIES];
        switch (DD) {
          case sD.b.DM:
          case sD.b.GUILD:
            return [...zD];
          default:
            throw new Error(`Unknown Discord channel type: ${DD}`)
        }
      }
      getCurrentChannelAndGuild() {
        const {
          channelId: DD,
          guildId: zD
        } = this.discordSdk;
        return {
          channelId: null !== DD && void 0 !== DD ? DD : null,
          guildId: null !== zD && void 0 !== zD ? zD : null
        }
      }
      getInstanceId() {
        return this.discordSdk.instanceId
      }
      async askDiscordUserForAuthorization() {
        const DD = this.getRequiredScopeForCurrentChannel(),
          {
            code: zD
          } = await this.discordSdk.commands.authorize({
            client_id: UD.b.discordClientID,
            response_type: "code",
            state: "",
            prompt: "none",
            scope: DD
          });
        return zD
      }
      getCachedAccessToken() {
        return this.cachedAccessToken
      }
      setCachedAccessToken(DD) {
        this.cachedAccessToken = DD
      }
      registerGuild(DD, zD) {
        this.guildNameCache[DD] = zD
      }
      async authenticate(DD) {
        return this.discordSdk.commands.authenticate({
          access_token: DD
        }).then((DD => null !== DD))
      }
      async getUserLocale() {
        try {
          const {
            locale: DD
          } = await this.discordSdk.commands.userSettingsGetLocale();
          return DD
        } catch (DD) {
          return console.error("Failed to get user locale from Discord:", DD.stack), null
        }
      }
      async getChannelName(DD) {
        return this.discordSdk.commands.getChannel({
          channel_id: DD
        }).then((DD => DD.name)).catch((DD => "Your Current Discord Chat"))
      }
      async getDiscordContextFromChannelId(DD) {
        const zD = await this.getChannelName(DD);
        return sD.h.from({
          type: sD.b.DM,
          channelId: DD,
          channelName: zD
        })
      }
      getDiscordContextFromGuildId(DD) {
        const zD = this.guildNameCache[DD];
        return (0, rD.B)(zD) ? null : sD.f.from({
          type: sD.b.GUILD,
          guildId: DD,
          guildName: zD
        })
      }
      async getCurrentDiscordContext() {
        const {
          channelId: DD,
          guildId: zD
        } = this.getCurrentChannelAndGuild();
        return null !== zD ? this.getDiscordContextFromGuildId(zD) : null !== DD ? this.getDiscordContextFromChannelId(DD) : null
      }
      exit(DD) {
        console.log("Exiting Discord Activity:", DD), this.discordSdk.close(ID.CLOSE_NORMAL, DD)
      }
      isMobilePlatform() {
        return this.discordSdk.platform === pD.g.MOBILE
      }
      applyDiscordSafeAreaNotch() {
        const DD = getComputedStyle(document.documentElement),
          zD = (zD, wD) => {
            const pD = parseFloat(DD.getPropertyValue(`--discord-safe-area-inset-${zD}`));
            return isNaN(pD) || 0 === wD ? 0 : pD / wD * 100
          };
        AD.e.set({
          notchSize: {
            top: zD("top", window.innerHeight),
            right: Math.max(zD("right", window.innerWidth), 7),
            bottom: 0,
            left: zD("left", window.innerWidth)
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);