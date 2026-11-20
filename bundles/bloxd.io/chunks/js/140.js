export const id = 140;
export const ids = [140];
export const modules = {
  7740: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      BloxdDiscordActivitySdk: () => WU
    });
    var tU = gU(7745),
      pU = gU(1223),
      EU = gU(1181),
      PU = gU(581),
      TU = gU(1249),
      qU = gU(1637),
      KU = gU(1316),
      cU = gU(731),
      GU = gU(21),
      jU = gU(1203),
      uU = function(UU) {
        return UU.APPLICATION_COMMANDS = "applications.commands", UU.IDENTIFY = "identify", UU.EMAIL = "email", UU.GUILDS = "guilds", UU.READ_DM_CHANNELS = "dm_channels.read", UU.WRITE_ACTIVITIES = "rpc.activities.write", UU
      }(uU || {}),
      CU = function(UU) {
        return UU[UU.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", UU[UU.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", UU[UU.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", UU[UU.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", UU[UU.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", UU[UU.RATELIMITED = 4002] = "RATELIMITED", UU[UU.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", UU[UU.INVALID_VERSION = 4004] = "INVALID_VERSION", UU[UU.INVALID_ENCODING = 4005] = "INVALID_ENCODING", UU
      }(CU || {}),
      hU = function(UU) {
        return UU[UU.PLAYING = 0] = "PLAYING", UU[UU.STREAMING = 1] = "STREAMING", UU[UU.LISTENING = 2] = "LISTENING", UU[UU.WATCHING = 3] = "WATCHING", UU[UU.CUSTOM = 4] = "CUSTOM", UU[UU.COMPETING = 5] = "COMPETING", UU
      }(hU || {});
    const QU = {
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
      eU = {
        goalRush: "Playing",
        heroesvbrainrots: "Battling",
        hideseek: "Playing",
        bingo: "Playing"
      };
    class WU {
      constructor(UU) {
        this.discordSdk = UU, this.guildNameCache = {}, this.startTime = Date.now(), this.cachedAccessToken = null
      }
      static async setup() {
        console.log("Setting up Discord SDK with client id", jU.e.discordClientID);
        const UU = new tU.e(jU.e.discordClientID);
        let RU = !1;
        setTimeout((() => {
          RU || (console.warn("Discord SDK took too long to initialize"), (0, qU.reloadBloxd)())
        }), 15e3), await UU.ready(), RU = !0;
        try {
          const {
            enabled: RU
          } = await UU.commands.encourageHardwareAcceleration();
          RU || console.warn("Hardware acceleration not enabled in the Discord client")
        } catch (pU) {
          console.error("Failed to encourage hardware acceleration in the Discord client", pU)
        }
        const gU = new WU(UU);
        return gU.isMobilePlatform() && (gU.applyDiscordSafeAreaNotch(), window.addEventListener("resize", (() => {
          gU.applyDiscordSafeAreaNotch()
        }))), gU
      }
      async updateActivityDescription(UU) {
        let RU, gU;
        switch (UU) {
          case "homePage":
            RU = "Chilling in the Main Menu";
            break;
          case "inGame": {
            const UU = await this.getInGameDescriptions();
            RU = UU.primary, gU = UU.secondary;
            break
          }
        }
        await this.discordSdk.commands.setActivity({
          activity: {
            type: hU.PLAYING,
            details: RU,
            state: gU,
            assets: {
              large_image: "icon",
              large_text: RU
            },
            timestamps: {
              start: this.startTime
            }
          }
        }).catch((UU => {
          console.error(`Failed to update Discord activity rich presence with description="${RU}":`, UU)
        }))
      }
      async getInGameDescriptions() {
        var UU;
        const {
          requestedGameNameWithVariation: RU
        } = (0, KU.d)(), gU = (0, cU.l)(RU), tU = null !== (UU = eU[RU]) && void 0 !== UU ? UU : QU[gU.type], pU = await (0, EU.A)(TU.c.ENGLISH, gU.title), qU = (0, KU.d)();
        if ((0, KU.i)(qU)) return {
          primary: `${tU} in a Discord World`
        };
        const GU = `${tU} in ${pU}`;
        return (0, PU.E)(qU.lobbyName) ? {
          primary: GU
        } : {
          primary: GU,
          secondary: `Lobby ${qU.lobbyName}`
        }
      }
      getCurrentChannelType() {
        const {
          channelId: UU,
          guildId: RU
        } = this.getCurrentChannelAndGuild();
        return null !== RU ? pU.d.GUILD : null !== UU ? pU.d.DM : null
      }
      getRequiredScopeForCurrentChannel() {
        const UU = this.getCurrentChannelType(),
          RU = [uU.APPLICATION_COMMANDS, uU.IDENTIFY, uU.EMAIL, uU.GUILDS, uU.WRITE_ACTIVITIES];
        switch (UU) {
          case pU.d.DM:
          case pU.d.GUILD:
            return [...RU];
          default:
            throw new Error(`Unknown Discord channel type: ${UU}`)
        }
      }
      getCurrentChannelAndGuild() {
        const {
          channelId: UU,
          guildId: RU
        } = this.discordSdk;
        return {
          channelId: null !== UU && void 0 !== UU ? UU : null,
          guildId: null !== RU && void 0 !== RU ? RU : null
        }
      }
      getInstanceId() {
        return this.discordSdk.instanceId
      }
      async askDiscordUserForAuthorization() {
        const UU = this.getRequiredScopeForCurrentChannel(),
          {
            code: RU
          } = await this.discordSdk.commands.authorize({
            client_id: jU.e.discordClientID,
            response_type: "code",
            state: "",
            prompt: "none",
            scope: UU
          });
        return RU
      }
      getCachedAccessToken() {
        return this.cachedAccessToken
      }
      setCachedAccessToken(UU) {
        this.cachedAccessToken = UU
      }
      registerGuild(UU, RU) {
        this.guildNameCache[UU] = RU
      }
      async authenticate(UU) {
        return this.discordSdk.commands.authenticate({
          access_token: UU
        }).then((UU => null !== UU))
      }
      async getUserLocale() {
        try {
          const {
            locale: UU
          } = await this.discordSdk.commands.userSettingsGetLocale();
          return UU
        } catch (UU) {
          return console.error("Failed to get user locale from Discord:", UU.stack), null
        }
      }
      async getChannelName(UU) {
        return this.discordSdk.commands.getChannel({
          channel_id: UU
        }).then((UU => UU.name)).catch((UU => "Your Current Discord Chat"))
      }
      async getDiscordContextFromChannelId(UU) {
        const RU = await this.getChannelName(UU);
        return pU.i.from({
          type: pU.d.DM,
          channelId: UU,
          channelName: RU
        })
      }
      getDiscordContextFromGuildId(UU) {
        const RU = this.guildNameCache[UU];
        return (0, PU.E)(RU) ? null : pU.e.from({
          type: pU.d.GUILD,
          guildId: UU,
          guildName: RU
        })
      }
      async getCurrentDiscordContext() {
        const {
          channelId: UU,
          guildId: RU
        } = this.getCurrentChannelAndGuild();
        return null !== RU ? this.getDiscordContextFromGuildId(RU) : null !== UU ? this.getDiscordContextFromChannelId(UU) : null
      }
      exit(UU) {
        console.log("Exiting Discord Activity:", UU), this.discordSdk.close(CU.CLOSE_NORMAL, UU)
      }
      isMobilePlatform() {
        return this.discordSdk.platform === tU.g.MOBILE
      }
      applyDiscordSafeAreaNotch() {
        const UU = getComputedStyle(document.documentElement),
          RU = (RU, gU) => {
            const tU = parseFloat(UU.getPropertyValue(`--discord-safe-area-inset-${RU}`));
            return isNaN(tU) || 0 === gU ? 0 : tU / gU * 100
          };
        GU.b.set({
          notchSize: {
            top: RU("top", window.innerHeight),
            right: Math.max(RU("right", window.innerWidth), 7),
            bottom: 0,
            left: RU("left", window.innerWidth)
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);