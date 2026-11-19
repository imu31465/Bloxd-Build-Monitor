export const id = 140;
export const ids = [140];
export const modules = {
  7787: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      BloxdDiscordActivitySdk: () => ND
    });
    var ID = cD(7793),
      pD = cD(1227),
      iD = cD(1192),
      fD = cD(624),
      bD = cD(1250),
      QD = cD(1701),
      wD = cD(1317),
      SD = cD(767),
      BD = cD(16),
      yD = cD(1202),
      MD = function(DD) {
        return DD.APPLICATION_COMMANDS = "applications.commands", DD.IDENTIFY = "identify", DD.EMAIL = "email", DD.GUILDS = "guilds", DD.READ_DM_CHANNELS = "dm_channels.read", DD.WRITE_ACTIVITIES = "rpc.activities.write", DD
      }(MD || {}),
      tD = function(DD) {
        return DD[DD.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", DD[DD.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", DD[DD.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", DD[DD.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", DD[DD.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", DD[DD.RATELIMITED = 4002] = "RATELIMITED", DD[DD.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", DD[DD.INVALID_VERSION = 4004] = "INVALID_VERSION", DD[DD.INVALID_ENCODING = 4005] = "INVALID_ENCODING", DD
      }(tD || {}),
      ZD = function(DD) {
        return DD[DD.PLAYING = 0] = "PLAYING", DD[DD.STREAMING = 1] = "STREAMING", DD[DD.LISTENING = 2] = "LISTENING", DD[DD.WATCHING = 3] = "WATCHING", DD[DD.CUSTOM = 4] = "CUSTOM", DD[DD.COMPETING = 5] = "COMPETING", DD
      }(ZD || {});
    const oD = {
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
      vD = {
        goalRush: "Playing",
        heroesvbrainrots: "Battling",
        hideseek: "Playing",
        bingo: "Playing"
      };
    class ND {
      constructor(DD) {
        this.discordSdk = DD, this.guildNameCache = {}, this.startTime = Date.now(), this.cachedAccessToken = null
      }
      static async setup() {
        console.log("Setting up Discord SDK with client id", yD.d.discordClientID);
        const DD = new ID.d(yD.d.discordClientID);
        let CD = !1;
        setTimeout((() => {
          CD || (console.warn("Discord SDK took too long to initialize"), (0, QD.reloadBloxd)())
        }), 15e3), await DD.ready(), CD = !0;
        try {
          const {
            enabled: CD
          } = await DD.commands.encourageHardwareAcceleration();
          CD || console.warn("Hardware acceleration not enabled in the Discord client")
        } catch (pD) {
          console.error("Failed to encourage hardware acceleration in the Discord client", pD)
        }
        const cD = new ND(DD);
        return cD.isMobilePlatform() && (cD.applyDiscordSafeAreaNotch(), window.addEventListener("resize", (() => {
          cD.applyDiscordSafeAreaNotch()
        }))), cD
      }
      async updateActivityDescription(DD) {
        let CD, cD;
        switch (DD) {
          case "homePage":
            CD = "Chilling in the Main Menu";
            break;
          case "inGame": {
            const DD = await this.getInGameDescriptions();
            CD = DD.primary, cD = DD.secondary;
            break
          }
        }
        await this.discordSdk.commands.setActivity({
          activity: {
            type: ZD.PLAYING,
            details: CD,
            state: cD,
            assets: {
              large_image: "icon",
              large_text: CD
            },
            timestamps: {
              start: this.startTime
            }
          }
        }).catch((DD => {
          console.error(`Failed to update Discord activity rich presence with description="${CD}":`, DD)
        }))
      }
      async getInGameDescriptions() {
        var DD;
        const {
          requestedGameNameWithVariation: CD
        } = (0, wD.b)(), cD = (0, SD.h)(CD), ID = null !== (DD = vD[CD]) && void 0 !== DD ? DD : oD[cD.type], pD = await (0, iD.C)(bD.c.ENGLISH, cD.title), QD = (0, wD.b)();
        if ((0, wD.g)(QD)) return {
          primary: `${ID} in a Discord World`
        };
        const BD = `${ID} in ${pD}`;
        return (0, fD.C)(QD.lobbyName) ? {
          primary: BD
        } : {
          primary: BD,
          secondary: `Lobby ${QD.lobbyName}`
        }
      }
      getCurrentChannelType() {
        const {
          channelId: DD,
          guildId: CD
        } = this.getCurrentChannelAndGuild();
        return null !== CD ? pD.d.GUILD : null !== DD ? pD.d.DM : null
      }
      getRequiredScopeForCurrentChannel() {
        const DD = this.getCurrentChannelType(),
          CD = [MD.APPLICATION_COMMANDS, MD.IDENTIFY, MD.EMAIL, MD.GUILDS, MD.WRITE_ACTIVITIES];
        switch (DD) {
          case pD.d.DM:
          case pD.d.GUILD:
            return [...CD];
          default:
            throw new Error(`Unknown Discord channel type: ${DD}`)
        }
      }
      getCurrentChannelAndGuild() {
        const {
          channelId: DD,
          guildId: CD
        } = this.discordSdk;
        return {
          channelId: null !== DD && void 0 !== DD ? DD : null,
          guildId: null !== CD && void 0 !== CD ? CD : null
        }
      }
      getInstanceId() {
        return this.discordSdk.instanceId
      }
      async askDiscordUserForAuthorization() {
        const DD = this.getRequiredScopeForCurrentChannel(),
          {
            code: CD
          } = await this.discordSdk.commands.authorize({
            client_id: yD.d.discordClientID,
            response_type: "code",
            state: "",
            prompt: "none",
            scope: DD
          });
        return CD
      }
      getCachedAccessToken() {
        return this.cachedAccessToken
      }
      setCachedAccessToken(DD) {
        this.cachedAccessToken = DD
      }
      registerGuild(DD, CD) {
        this.guildNameCache[DD] = CD
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
        const CD = await this.getChannelName(DD);
        return pD.h.from({
          type: pD.d.DM,
          channelId: DD,
          channelName: CD
        })
      }
      getDiscordContextFromGuildId(DD) {
        const CD = this.guildNameCache[DD];
        return (0, fD.C)(CD) ? null : pD.e.from({
          type: pD.d.GUILD,
          guildId: DD,
          guildName: CD
        })
      }
      async getCurrentDiscordContext() {
        const {
          channelId: DD,
          guildId: CD
        } = this.getCurrentChannelAndGuild();
        return null !== CD ? this.getDiscordContextFromGuildId(CD) : null !== DD ? this.getDiscordContextFromChannelId(DD) : null
      }
      exit(DD) {
        console.log("Exiting Discord Activity:", DD), this.discordSdk.close(tD.CLOSE_NORMAL, DD)
      }
      isMobilePlatform() {
        return this.discordSdk.platform === ID.h.MOBILE
      }
      applyDiscordSafeAreaNotch() {
        const DD = getComputedStyle(document.documentElement),
          CD = (CD, cD) => {
            const ID = parseFloat(DD.getPropertyValue(`--discord-safe-area-inset-${CD}`));
            return isNaN(ID) || 0 === cD ? 0 : ID / cD * 100
          };
        BD.d.set({
          notchSize: {
            top: CD("top", window.innerHeight),
            right: Math.max(CD("right", window.innerWidth), 7),
            bottom: 0,
            left: CD("left", window.innerWidth)
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);