export const id = 148;
export const ids = [148];
export const modules = {
  8057: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      BloxdDiscordActivitySdk: () => GB
    });
    var QB = zB(8066),
      nB = zB(1265),
      dB = zB(1240),
      IB = zB(658),
      NB = zB(1284),
      uB = zB(1778),
      UB = zB(1357),
      aB = zB(814),
      pB = zB(28),
      rB = zB(1126),
      sB = function(BB) {
        return BB.APPLICATION_COMMANDS = "applications.commands", BB.IDENTIFY = "identify", BB.EMAIL = "email", BB.GUILDS = "guilds", BB.READ_DM_CHANNELS = "dm_channels.read", BB.WRITE_ACTIVITIES = "rpc.activities.write", BB
      }(sB || {}),
      JB = function(BB) {
        return BB[BB.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", BB[BB.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", BB[BB.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", BB[BB.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", BB[BB.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", BB[BB.RATELIMITED = 4002] = "RATELIMITED", BB[BB.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", BB[BB.INVALID_VERSION = 4004] = "INVALID_VERSION", BB[BB.INVALID_ENCODING = 4005] = "INVALID_ENCODING", BB
      }(JB || {}),
      mB = function(BB) {
        return BB[BB.PLAYING = 0] = "PLAYING", BB[BB.STREAMING = 1] = "STREAMING", BB[BB.LISTENING = 2] = "LISTENING", BB[BB.WATCHING = 3] = "WATCHING", BB[BB.CUSTOM = 4] = "CUSTOM", BB[BB.COMPETING = 5] = "COMPETING", BB
      }(mB || {});
    const yB = {
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
      kB = {
        goalRush: "Playing",
        heroesvbrainrots: "Battling",
        hideseek: "Playing",
        bingo: "Playing"
      };
    class GB {
      constructor(BB) {
        this.discordSdk = BB, this.guildNameCache = {}, this.startTime = Date.now(), this.cachedAccessToken = null
      }
      static async setup() {
        console.log("Setting up Discord SDK with client id", rB.e.discordClientID);
        const BB = new QB.d(rB.e.discordClientID);
        let jB = !1;
        setTimeout((() => {
          jB || (console.warn("Discord SDK took too long to initialize"), (0, uB.reloadBloxd)())
        }), 15e3), await BB.ready(), jB = !0;
        try {
          const {
            enabled: jB
          } = await BB.commands.encourageHardwareAcceleration();
          jB || console.warn("Hardware acceleration not enabled in the Discord client")
        } catch (nB) {
          console.error("Failed to encourage hardware acceleration in the Discord client", nB)
        }
        const zB = new GB(BB);
        return zB.isMobilePlatform() && (zB.applyDiscordSafeAreaNotch(), window.addEventListener("resize", (() => {
          zB.applyDiscordSafeAreaNotch()
        }))), zB
      }
      async updateActivityDescription(BB) {
        let jB, zB;
        switch (BB) {
          case "homePage":
            jB = "Chilling in the Main Menu";
            break;
          case "inGame": {
            const BB = await this.getInGameDescriptions();
            jB = BB.primary, zB = BB.secondary;
            break
          }
        }
        await this.discordSdk.commands.setActivity({
          activity: {
            type: mB.PLAYING,
            details: jB,
            state: zB,
            assets: {
              large_image: "icon",
              large_text: jB
            },
            timestamps: {
              start: this.startTime
            }
          }
        }).catch((BB => {
          console.error(`Failed to update Discord activity rich presence with description="${jB}":`, BB)
        }))
      }
      async getInGameDescriptions() {
        var BB;
        const {
          requestedGameNameWithVariation: jB
        } = (0, UB.d)(), zB = (0, aB.g)(jB), QB = null !== (BB = kB[jB]) && void 0 !== BB ? BB : yB[zB.type], nB = await (0, dB.B)(NB.b.ENGLISH, zB.title), uB = (0, UB.d)();
        if ((0, UB.i)(uB)) return {
          primary: `${QB} in a Discord World`
        };
        const pB = `${QB} in ${nB}`;
        return (0, IB.I)(uB.lobbyName) ? {
          primary: pB
        } : {
          primary: pB,
          secondary: `Lobby ${uB.lobbyName}`
        }
      }
      getCurrentChannelType() {
        const {
          channelId: BB,
          guildId: jB
        } = this.getCurrentChannelAndGuild();
        return null !== jB ? nB.e.GUILD : null !== BB ? nB.e.DM : null
      }
      getRequiredScopeForCurrentChannel() {
        const BB = this.getCurrentChannelType(),
          jB = [sB.APPLICATION_COMMANDS, sB.IDENTIFY, sB.EMAIL, sB.GUILDS, sB.WRITE_ACTIVITIES];
        switch (BB) {
          case nB.e.DM:
          case nB.e.GUILD:
            return [...jB];
          default:
            throw new Error(`Unknown Discord channel type: ${BB}`)
        }
      }
      getCurrentChannelAndGuild() {
        const {
          channelId: BB,
          guildId: jB
        } = this.discordSdk;
        return {
          channelId: null !== BB && void 0 !== BB ? BB : null,
          guildId: null !== jB && void 0 !== jB ? jB : null
        }
      }
      getInstanceId() {
        return this.discordSdk.instanceId
      }
      async askDiscordUserForAuthorization() {
        const BB = this.getRequiredScopeForCurrentChannel(),
          {
            code: jB
          } = await this.discordSdk.commands.authorize({
            client_id: rB.e.discordClientID,
            response_type: "code",
            state: "",
            prompt: "none",
            scope: BB
          });
        return jB
      }
      getCachedAccessToken() {
        return this.cachedAccessToken
      }
      setCachedAccessToken(BB) {
        this.cachedAccessToken = BB
      }
      registerGuild(BB, jB) {
        this.guildNameCache[BB] = jB
      }
      async authenticate(BB) {
        return this.discordSdk.commands.authenticate({
          access_token: BB
        }).then((BB => null !== BB))
      }
      async getUserLocale() {
        try {
          const {
            locale: BB
          } = await this.discordSdk.commands.userSettingsGetLocale();
          return BB
        } catch (BB) {
          return console.error("Failed to get user locale from Discord:", BB.stack), null
        }
      }
      async getChannelName(BB) {
        return this.discordSdk.commands.getChannel({
          channel_id: BB
        }).then((BB => BB.name)).catch((BB => "Your Current Discord Chat"))
      }
      async getDiscordContextFromChannelId(BB) {
        const jB = await this.getChannelName(BB);
        return nB.j.from({
          type: nB.e.DM,
          channelId: BB,
          channelName: jB
        })
      }
      getDiscordContextFromGuildId(BB) {
        const jB = this.guildNameCache[BB];
        return (0, IB.I)(jB) ? null : nB.g.from({
          type: nB.e.GUILD,
          guildId: BB,
          guildName: jB
        })
      }
      async getCurrentDiscordContext() {
        const {
          channelId: BB,
          guildId: jB
        } = this.getCurrentChannelAndGuild();
        return null !== jB ? this.getDiscordContextFromGuildId(jB) : null !== BB ? this.getDiscordContextFromChannelId(BB) : null
      }
      exit(BB) {
        console.log("Exiting Discord Activity:", BB), this.discordSdk.close(JB.CLOSE_NORMAL, BB)
      }
      isMobilePlatform() {
        return this.discordSdk.platform === QB.g.MOBILE
      }
      applyDiscordSafeAreaNotch() {
        const BB = getComputedStyle(document.documentElement),
          jB = (jB, zB) => {
            const QB = parseFloat(BB.getPropertyValue(`--discord-safe-area-inset-${jB}`));
            return isNaN(QB) || 0 === zB ? 0 : QB / zB * 100
          };
        pB.c.set({
          notchSize: {
            top: jB("top", window.innerHeight),
            right: Math.max(jB("right", window.innerWidth), 7),
            bottom: 0,
            left: jB("left", window.innerWidth)
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);