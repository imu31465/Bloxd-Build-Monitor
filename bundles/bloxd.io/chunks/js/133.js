export const id = 133;
export const ids = [133];
export const modules = {
  7426: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      BloxdDiscordActivitySdk: () => vB
    });
    var VB = dB(7434),
      yB = dB(1109),
      pB = dB(1078),
      lB = dB(572),
      JB = dB(1133),
      YB = dB(1596),
      gB = dB(1209),
      oB = dB(663),
      kB = dB(21),
      LB = dB(1092),
      OB = function(BB) {
        return BB.APPLICATION_COMMANDS = "applications.commands", BB.IDENTIFY = "identify", BB.EMAIL = "email", BB.GUILDS = "guilds", BB.READ_DM_CHANNELS = "dm_channels.read", BB.WRITE_ACTIVITIES = "rpc.activities.write", BB
      }(OB || {}),
      DB = function(BB) {
        return BB[BB.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", BB[BB.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", BB[BB.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", BB[BB.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", BB[BB.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", BB[BB.RATELIMITED = 4002] = "RATELIMITED", BB[BB.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", BB[BB.INVALID_VERSION = 4004] = "INVALID_VERSION", BB[BB.INVALID_ENCODING = 4005] = "INVALID_ENCODING", BB
      }(DB || {}),
      uB = function(BB) {
        return BB[BB.PLAYING = 0] = "PLAYING", BB[BB.STREAMING = 1] = "STREAMING", BB[BB.LISTENING = 2] = "LISTENING", BB[BB.WATCHING = 3] = "WATCHING", BB[BB.CUSTOM = 4] = "CUSTOM", BB[BB.COMPETING = 5] = "COMPETING", BB
      }(uB || {});
    const HB = {
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
      EB = {
        goalRush: "Playing",
        heroesvbrainrots: "Battling",
        hideseek: "Playing",
        bingo: "Playing"
      };
    class vB {
      constructor(BB) {
        this.discordSdk = BB, this.guildNameCache = {}, this.startTime = Date.now(), this.cachedAccessToken = null
      }
      static async setup() {
        console.log("Setting up Discord SDK with client id", LB.e.discordClientID);
        const BB = new VB.e(LB.e.discordClientID);
        let TB = !1;
        setTimeout((() => {
          TB || (console.warn("Discord SDK took too long to initialize"), (0, YB.reloadBloxd)())
        }), 15e3), await BB.ready(), TB = !0;
        try {
          const {
            enabled: TB
          } = await BB.commands.encourageHardwareAcceleration();
          TB || console.warn("Hardware acceleration not enabled in the Discord client")
        } catch (yB) {
          console.error("Failed to encourage hardware acceleration in the Discord client", yB)
        }
        const dB = new vB(BB);
        return dB.isMobilePlatform() && (dB.applyDiscordSafeAreaNotch(), window.addEventListener("resize", (() => {
          dB.applyDiscordSafeAreaNotch()
        }))), dB
      }
      async updateActivityDescription(BB) {
        let TB, dB;
        switch (BB) {
          case "homePage":
            TB = "Chilling in the Main Menu";
            break;
          case "inGame": {
            const BB = await this.getInGameDescriptions();
            TB = BB.primary, dB = BB.secondary;
            break
          }
        }
        await this.discordSdk.commands.setActivity({
          activity: {
            type: uB.PLAYING,
            details: TB,
            state: dB,
            assets: {
              large_image: "icon",
              large_text: TB
            },
            timestamps: {
              start: this.startTime
            }
          }
        }).catch((BB => {
          console.error(`Failed to update Discord activity rich presence with description="${TB}":`, BB)
        }))
      }
      async getInGameDescriptions() {
        var BB;
        const {
          requestedGameNameWithVariation: TB
        } = (0, gB.e)(), dB = (0, oB.l)(TB), VB = null !== (BB = EB[TB]) && void 0 !== BB ? BB : HB[dB.type], yB = await (0, pB.y)(JB.e.ENGLISH, dB.title), YB = (0, gB.e)();
        if ((0, gB.k)(YB)) return {
          primary: `${VB} in a Discord World`
        };
        const kB = `${VB} in ${yB}`;
        return (0, lB.M)(YB.lobbyName) ? {
          primary: kB
        } : {
          primary: kB,
          secondary: `Lobby ${YB.lobbyName}`
        }
      }
      getCurrentChannelType() {
        const {
          channelId: BB,
          guildId: TB
        } = this.getCurrentChannelAndGuild();
        return null !== TB ? yB.e.GUILD : null !== BB ? yB.e.DM : null
      }
      getRequiredScopeForCurrentChannel() {
        const BB = this.getCurrentChannelType(),
          TB = [OB.APPLICATION_COMMANDS, OB.IDENTIFY, OB.EMAIL, OB.GUILDS, OB.WRITE_ACTIVITIES];
        switch (BB) {
          case yB.e.DM:
          case yB.e.GUILD:
            return [...TB];
          default:
            throw new Error(`Unknown Discord channel type: ${BB}`)
        }
      }
      getCurrentChannelAndGuild() {
        const {
          channelId: BB,
          guildId: TB
        } = this.discordSdk;
        return {
          channelId: null !== BB && void 0 !== BB ? BB : null,
          guildId: null !== TB && void 0 !== TB ? TB : null
        }
      }
      getInstanceId() {
        return this.discordSdk.instanceId
      }
      async askDiscordUserForAuthorization() {
        const BB = this.getRequiredScopeForCurrentChannel(),
          {
            code: TB
          } = await this.discordSdk.commands.authorize({
            client_id: LB.e.discordClientID,
            response_type: "code",
            state: "",
            prompt: "none",
            scope: BB
          });
        return TB
      }
      getCachedAccessToken() {
        return this.cachedAccessToken
      }
      setCachedAccessToken(BB) {
        this.cachedAccessToken = BB
      }
      registerGuild(BB, TB) {
        this.guildNameCache[BB] = TB
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
        const TB = await this.getChannelName(BB);
        return yB.k.from({
          type: yB.e.DM,
          channelId: BB,
          channelName: TB
        })
      }
      getDiscordContextFromGuildId(BB) {
        const TB = this.guildNameCache[BB];
        return (0, lB.M)(TB) ? null : yB.i.from({
          type: yB.e.GUILD,
          guildId: BB,
          guildName: TB
        })
      }
      async getCurrentDiscordContext() {
        const {
          channelId: BB,
          guildId: TB
        } = this.getCurrentChannelAndGuild();
        return null !== TB ? this.getDiscordContextFromGuildId(TB) : null !== BB ? this.getDiscordContextFromChannelId(BB) : null
      }
      exit(BB) {
        console.log("Exiting Discord Activity:", BB), this.discordSdk.close(DB.CLOSE_NORMAL, BB)
      }
      isMobilePlatform() {
        return this.discordSdk.platform === VB.h.MOBILE
      }
      applyDiscordSafeAreaNotch() {
        const BB = getComputedStyle(document.documentElement),
          TB = (TB, dB) => {
            const VB = parseFloat(BB.getPropertyValue(`--discord-safe-area-inset-${TB}`));
            return isNaN(VB) || 0 === dB ? 0 : VB / dB * 100
          };
        kB.d.set({
          notchSize: {
            top: TB("top", window.innerHeight),
            right: Math.max(TB("right", window.innerWidth), 7),
            bottom: 0,
            left: TB("left", window.innerWidth)
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);