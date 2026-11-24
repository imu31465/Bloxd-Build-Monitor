export const id = 148;
export const ids = [148];
export const modules = {
  8224: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      BloxdDiscordActivitySdk: () => WB
    });
    var TB = ZB(8228),
      JB = ZB(1290),
      oB = ZB(1248),
      GB = ZB(665),
      vB = ZB(1310),
      kB = ZB(1805),
      cB = ZB(1382),
      nB = ZB(810),
      hB = ZB(20),
      zB = ZB(1131),
      FB = ZB(2458),
      NB = function(BB) {
        return BB.APPLICATION_COMMANDS = "applications.commands", BB.IDENTIFY = "identify", BB.EMAIL = "email", BB.GUILDS = "guilds", BB.READ_DM_CHANNELS = "dm_channels.read", BB.WRITE_ACTIVITIES = "rpc.activities.write", BB
      }(NB || {}),
      gB = function(BB) {
        return BB[BB.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", BB[BB.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", BB[BB.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", BB[BB.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", BB[BB.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", BB[BB.RATELIMITED = 4002] = "RATELIMITED", BB[BB.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", BB[BB.INVALID_VERSION = 4004] = "INVALID_VERSION", BB[BB.INVALID_ENCODING = 4005] = "INVALID_ENCODING", BB
      }(gB || {}),
      qB = function(BB) {
        return BB[BB.PLAYING = 0] = "PLAYING", BB[BB.STREAMING = 1] = "STREAMING", BB[BB.LISTENING = 2] = "LISTENING", BB[BB.WATCHING = 3] = "WATCHING", BB[BB.CUSTOM = 4] = "CUSTOM", BB[BB.COMPETING = 5] = "COMPETING", BB
      }(qB || {});
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
      UB = {
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
        const BB = new TB.e(zB.e.discordClientID);
        let IB = !1;
        setTimeout((() => {
          IB || (console.warn("Discord SDK took too long to initialize"), (0, kB.reloadBloxd)())
        }), 15e3), await BB.ready(), IB = !0;
        try {
          const {
            enabled: IB
          } = await BB.commands.encourageHardwareAcceleration();
          IB || console.warn("Hardware acceleration not enabled in the Discord client")
        } catch (JB) {
          console.error("Failed to encourage hardware acceleration in the Discord client", JB)
        }
        const ZB = new WB(BB);
        return ZB.isMobilePlatform() && (ZB.applyDiscordSafeAreaNotch(), window.addEventListener("resize", (() => {
          ZB.applyDiscordSafeAreaNotch()
        }))), ZB
      }
      async updateActivityDescription(BB) {
        const IB = ++this.activityUpdateId;
        let ZB, TB;
        switch (BB) {
          case "homePage":
            ZB = "Chilling in the Main Menu";
            break;
          case "inGame": {
            const BB = await this.getInGameDescriptions();
            ZB = BB.primary, TB = BB.secondary;
            break
          }
        }
        IB === this.activityUpdateId && await this.discordSdk.commands.setActivity({
          activity: {
            type: qB.PLAYING,
            details: ZB,
            state: TB,
            assets: {
              large_image: "icon",
              large_text: ZB
            },
            timestamps: {
              start: this.startTime
            }
          }
        }).catch((BB => {
          console.error(`Failed to update Discord activity rich presence with description="${ZB}":`, BB)
        }))
      }
      async getInGameDescriptions() {
        const BB = (0, cB.c)(),
          {
            verb: IB,
            title: ZB
          } = await this.getGameVerbAndTitle(BB.requestedGameNameWithVariation);
        if ((0, cB.g)(BB)) return {
          primary: `${IB} in a Discord World`
        };
        const TB = `${IB} in ${ZB}`;
        return (0, GB.L)(BB.lobbyName) ? {
          primary: TB
        } : {
          primary: TB,
          secondary: `Lobby ${BB.lobbyName}`
        }
      }
      async getGameVerbAndTitle(BB) {
        var IB;
        const ZB = "Playing";
        if ((0, GB.L)(BB)) return {
          verb: ZB,
          title: "Bloxd"
        };
        const TB = (0, nB.m)(BB);
        var JB;
        if (null !== TB) return {
          verb: null !== (JB = UB[BB]) && void 0 !== JB ? JB : yB[TB.type],
          title: await (0, oB.D)(vB.e.ENGLISH, TB.title)
        };
        const kB = await (0, FB.c)(BB);
        return {
          verb: null !== (IB = kB && yB[kB.gameCategory]) && void 0 !== IB ? IB : ZB,
          title: (null === kB || void 0 === kB ? void 0 : kB.name) || "a Custom World"
        }
      }
      getCurrentChannelType() {
        const {
          channelId: BB,
          guildId: IB
        } = this.getCurrentChannelAndGuild();
        return null !== IB ? JB.b.GUILD : null !== BB ? JB.b.DM : null
      }
      getRequiredScopeForCurrentChannel() {
        const BB = this.getCurrentChannelType(),
          IB = [NB.APPLICATION_COMMANDS, NB.IDENTIFY, NB.EMAIL, NB.GUILDS, NB.WRITE_ACTIVITIES];
        switch (BB) {
          case JB.b.DM:
          case JB.b.GUILD:
            return [...IB];
          default:
            throw new Error(`Unknown Discord channel type: ${BB}`)
        }
      }
      getCurrentChannelAndGuild() {
        const {
          channelId: BB,
          guildId: IB
        } = this.discordSdk;
        return {
          channelId: null !== BB && void 0 !== BB ? BB : null,
          guildId: null !== IB && void 0 !== IB ? IB : null
        }
      }
      getInstanceId() {
        return this.discordSdk.instanceId
      }
      async askDiscordUserForAuthorization() {
        const BB = this.getRequiredScopeForCurrentChannel(),
          {
            code: IB
          } = await this.discordSdk.commands.authorize({
            client_id: zB.e.discordClientID,
            response_type: "code",
            state: "",
            prompt: "none",
            scope: BB
          });
        return IB
      }
      getCachedAccessToken() {
        return this.cachedAccessToken
      }
      setCachedAccessToken(BB) {
        this.cachedAccessToken = BB
      }
      registerGuild(BB, IB) {
        this.guildNameCache[BB] = IB
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
        const IB = await this.getChannelName(BB);
        return JB.f.from({
          type: JB.b.DM,
          channelId: BB,
          channelName: IB
        })
      }
      getDiscordContextFromGuildId(BB) {
        const IB = this.guildNameCache[BB];
        return (0, GB.L)(IB) ? null : JB.c.from({
          type: JB.b.GUILD,
          guildId: BB,
          guildName: IB
        })
      }
      async getCurrentDiscordContext() {
        const {
          channelId: BB,
          guildId: IB
        } = this.getCurrentChannelAndGuild();
        return null !== IB ? this.getDiscordContextFromGuildId(IB) : null !== BB ? this.getDiscordContextFromChannelId(BB) : null
      }
      exit(BB) {
        console.log("Exiting Discord Activity:", BB), this.discordSdk.close(gB.CLOSE_NORMAL, BB)
      }
      isMobilePlatform() {
        return this.discordSdk.platform === TB.h.MOBILE
      }
      applyDiscordSafeAreaNotch() {
        const BB = getComputedStyle(document.documentElement),
          IB = (IB, ZB) => {
            const TB = parseFloat(BB.getPropertyValue(`--discord-safe-area-inset-${IB}`));
            return isNaN(TB) || 0 === ZB ? 0 : TB / ZB * 100
          };
        hB.d.set({
          notchSize: {
            top: IB("top", window.innerHeight),
            right: Math.max(IB("right", window.innerWidth), 7),
            bottom: 0,
            left: IB("left", window.innerWidth)
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);