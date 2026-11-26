export const id = 160;
export const ids = [160];
export const modules = {
  7250: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      BloxdDiscordActivitySdk: () => WB
    });
    var YB = GB(7258),
      DB = GB(1225),
      QB = GB(1175),
      oB = GB(641),
      jB = GB(1253),
      yB = GB(1822),
      JB = GB(1350),
      MB = GB(791),
      PB = GB(16),
      zB = GB(1195),
      lB = GB(2549),
      pB = function(BB) {
        return BB.APPLICATION_COMMANDS = "applications.commands", BB.IDENTIFY = "identify", BB.EMAIL = "email", BB.GUILDS = "guilds", BB.READ_DM_CHANNELS = "dm_channels.read", BB.WRITE_ACTIVITIES = "rpc.activities.write", BB
      }(pB || {}),
      qB = function(BB) {
        return BB[BB.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", BB[BB.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", BB[BB.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", BB[BB.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", BB[BB.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", BB[BB.RATELIMITED = 4002] = "RATELIMITED", BB[BB.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", BB[BB.INVALID_VERSION = 4004] = "INVALID_VERSION", BB[BB.INVALID_ENCODING = 4005] = "INVALID_ENCODING", BB
      }(qB || {}),
      ZB = function(BB) {
        return BB[BB.PLAYING = 0] = "PLAYING", BB[BB.STREAMING = 1] = "STREAMING", BB[BB.LISTENING = 2] = "LISTENING", BB[BB.WATCHING = 3] = "WATCHING", BB[BB.CUSTOM = 4] = "CUSTOM", BB[BB.COMPETING = 5] = "COMPETING", BB
      }(ZB || {});
    const NB = {
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
      RB = {
        goalRush: "Playing",
        heroesvbrainrots: "Battling",
        hideseek: "Playing",
        bingo: "Playing"
      };
    class WB {
      constructor(BB) {
        this.discordSdk = BB, this.guildNameCache = {}, this.startTime = Date.now(), this.cachedAccessToken = null, this.activityUpdateId = 0
      }
      static async setup() {
        console.log("Setting up Discord SDK with client id", zB.e.discordClientID);
        const BB = new YB.e(zB.e.discordClientID);
        let OB = !1;
        setTimeout((() => {
          OB || (console.warn("Discord SDK took too long to initialize"), (0, yB.reloadBloxd)())
        }), 15e3), await BB.ready(), OB = !0;
        try {
          const {
            enabled: OB
          } = await BB.commands.encourageHardwareAcceleration();
          OB || console.warn("Hardware acceleration not enabled in the Discord client")
        } catch (DB) {
          console.error("Failed to encourage hardware acceleration in the Discord client", DB)
        }
        const GB = new WB(BB);
        return GB.isMobilePlatform() && (GB.applyDiscordSafeAreaNotch(), window.addEventListener("resize", (() => {
          GB.applyDiscordSafeAreaNotch()
        }))), GB
      }
      async updateActivityDescription(BB) {
        const OB = ++this.activityUpdateId;
        let GB, YB;
        switch (BB) {
          case "homePage":
            GB = "Chilling in the Main Menu";
            break;
          case "inGame": {
            const BB = await this.getInGameDescriptions();
            GB = BB.primary, YB = BB.secondary;
            break
          }
        }
        OB === this.activityUpdateId && await this.discordSdk.commands.setActivity({
          activity: {
            type: ZB.PLAYING,
            details: GB,
            state: YB,
            assets: {
              large_image: "icon",
              large_text: GB
            },
            timestamps: {
              start: this.startTime
            }
          }
        }).catch((BB => {
          console.error(`Failed to update Discord activity rich presence with description="${GB}":`, BB)
        }))
      }
      async getInGameDescriptions() {
        const BB = (0, JB.c)(),
          {
            verb: OB,
            title: GB
          } = await this.getGameVerbAndTitle(BB.requestedGameNameWithVariation);
        if ((0, JB.j)(BB)) return {
          primary: `${OB} in a Discord World`
        };
        const YB = `${OB} in ${GB}`;
        return (0, oB.Q)(BB.lobbyName) ? {
          primary: YB
        } : {
          primary: YB,
          secondary: `Lobby ${BB.lobbyName}`
        }
      }
      async getGameVerbAndTitle(BB) {
        var OB;
        const GB = "Playing";
        if ((0, oB.Q)(BB)) return {
          verb: GB,
          title: "Bloxd"
        };
        const YB = (0, MB.j)(BB);
        var DB;
        if (null !== YB) return {
          verb: null !== (DB = RB[BB]) && void 0 !== DB ? DB : NB[YB.type],
          title: await (0, QB.G)(jB.c.ENGLISH, YB.title)
        };
        const yB = await (0, lB.b)(BB);
        return {
          verb: null !== (OB = yB && NB[yB.gameCategory]) && void 0 !== OB ? OB : GB,
          title: (null === yB || void 0 === yB ? void 0 : yB.name) || "a Custom World"
        }
      }
      getCurrentChannelType() {
        const {
          channelId: BB,
          guildId: OB
        } = this.getCurrentChannelAndGuild();
        return null !== OB ? DB.b.GUILD : null !== BB ? DB.b.DM : null
      }
      getRequiredScopeForCurrentChannel() {
        const BB = this.getCurrentChannelType(),
          OB = [pB.APPLICATION_COMMANDS, pB.IDENTIFY, pB.EMAIL, pB.GUILDS, pB.WRITE_ACTIVITIES];
        switch (BB) {
          case DB.b.DM:
          case DB.b.GUILD:
            return [...OB];
          default:
            throw new Error(`Unknown Discord channel type: ${BB}`)
        }
      }
      getCurrentChannelAndGuild() {
        const {
          channelId: BB,
          guildId: OB
        } = this.discordSdk;
        return {
          channelId: null !== BB && void 0 !== BB ? BB : null,
          guildId: null !== OB && void 0 !== OB ? OB : null
        }
      }
      getInstanceId() {
        return this.discordSdk.instanceId
      }
      async askDiscordUserForAuthorization() {
        const BB = this.getRequiredScopeForCurrentChannel(),
          {
            code: OB
          } = await this.discordSdk.commands.authorize({
            client_id: zB.e.discordClientID,
            response_type: "code",
            state: "",
            prompt: "none",
            scope: BB
          });
        return OB
      }
      getCachedAccessToken() {
        return this.cachedAccessToken
      }
      setCachedAccessToken(BB) {
        this.cachedAccessToken = BB
      }
      registerGuild(BB, OB) {
        this.guildNameCache[BB] = OB
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
        const OB = await this.getChannelName(BB);
        return DB.f.from({
          type: DB.b.DM,
          channelId: BB,
          channelName: OB
        })
      }
      getDiscordContextFromGuildId(BB) {
        const OB = this.guildNameCache[BB];
        return (0, oB.Q)(OB) ? null : DB.e.from({
          type: DB.b.GUILD,
          guildId: BB,
          guildName: OB
        })
      }
      async getCurrentDiscordContext() {
        const {
          channelId: BB,
          guildId: OB
        } = this.getCurrentChannelAndGuild();
        return null !== OB ? this.getDiscordContextFromGuildId(OB) : null !== BB ? this.getDiscordContextFromChannelId(BB) : null
      }
      exit(BB) {
        console.log("Exiting Discord Activity:", BB), this.discordSdk.close(qB.CLOSE_NORMAL, BB)
      }
      isMobilePlatform() {
        return this.discordSdk.platform === YB.h.MOBILE
      }
      applyDiscordSafeAreaNotch() {
        const BB = getComputedStyle(document.documentElement),
          OB = (OB, GB) => {
            const YB = parseFloat(BB.getPropertyValue(`--discord-safe-area-inset-${OB}`));
            return isNaN(YB) || 0 === GB ? 0 : YB / GB * 100
          };
        PB.c.set({
          notchSize: {
            top: OB("top", window.innerHeight),
            right: Math.max(OB("right", window.innerWidth), 7),
            bottom: 0,
            left: OB("left", window.innerWidth)
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);