export const id = 158;
export const ids = [158];
export const modules = {
  7307: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      BloxdDiscordActivitySdk: () => GU
    });
    var cU = zU(7310),
      yU = zU(1241),
      QU = zU(1193),
      AU = zU(646),
      FU = zU(1266),
      oU = zU(1800),
      DU = zU(1360),
      EU = zU(825),
      YU = zU(27),
      NU = zU(1211),
      IU = zU(2494),
      pU = function(UU) {
        return UU.APPLICATION_COMMANDS = "applications.commands", UU.IDENTIFY = "identify", UU.EMAIL = "email", UU.GUILDS = "guilds", UU.READ_DM_CHANNELS = "dm_channels.read", UU.WRITE_ACTIVITIES = "rpc.activities.write", UU
      }(pU || {}),
      aU = function(UU) {
        return UU[UU.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", UU[UU.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", UU[UU.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", UU[UU.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", UU[UU.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", UU[UU.RATELIMITED = 4002] = "RATELIMITED", UU[UU.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", UU[UU.INVALID_VERSION = 4004] = "INVALID_VERSION", UU[UU.INVALID_ENCODING = 4005] = "INVALID_ENCODING", UU
      }(aU || {}),
      tU = function(UU) {
        return UU[UU.PLAYING = 0] = "PLAYING", UU[UU.STREAMING = 1] = "STREAMING", UU[UU.LISTENING = 2] = "LISTENING", UU[UU.WATCHING = 3] = "WATCHING", UU[UU.CUSTOM = 4] = "CUSTOM", UU[UU.COMPETING = 5] = "COMPETING", UU
      }(tU || {});
    const gU = {
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
      kU = {
        goalRush: "Playing",
        heroesvbrainrots: "Battling",
        hideseek: "Playing",
        bingo: "Playing"
      };
    class GU {
      constructor(UU) {
        this.discordSdk = UU, this.guildNameCache = {}, this.startTime = Date.now(), this.cachedAccessToken = null, this.activityUpdateId = 0
      }
      static async setup() {
        console.log("Setting up Discord SDK with client id", NU.d.discordClientID);
        const UU = new cU.e(NU.d.discordClientID);
        let XU = !1;
        setTimeout((() => {
          XU || (console.warn("Discord SDK took too long to initialize"), (0, oU.reloadBloxd)())
        }), 15e3), await UU.ready(), XU = !0;
        try {
          const {
            enabled: XU
          } = await UU.commands.encourageHardwareAcceleration();
          XU || console.warn("Hardware acceleration not enabled in the Discord client")
        } catch (yU) {
          console.error("Failed to encourage hardware acceleration in the Discord client", yU)
        }
        const zU = new GU(UU);
        return zU.isMobilePlatform() && (zU.applyDiscordSafeAreaNotch(), window.addEventListener("resize", (() => {
          zU.applyDiscordSafeAreaNotch()
        }))), zU
      }
      async updateActivityDescription(UU) {
        const XU = ++this.activityUpdateId;
        let zU, cU;
        switch (UU) {
          case "homePage":
            zU = "Chilling in the Main Menu";
            break;
          case "inGame": {
            const UU = await this.getInGameDescriptions();
            zU = UU.primary, cU = UU.secondary;
            break
          }
        }
        XU === this.activityUpdateId && await this.discordSdk.commands.setActivity({
          activity: {
            type: tU.PLAYING,
            details: zU,
            state: cU,
            assets: {
              large_image: "icon",
              large_text: zU
            },
            timestamps: {
              start: this.startTime
            }
          }
        }).catch((UU => {
          console.error(`Failed to update Discord activity rich presence with description="${zU}":`, UU)
        }))
      }
      async getInGameDescriptions() {
        const UU = (0, DU.b)(),
          {
            verb: XU,
            title: zU
          } = await this.getGameVerbAndTitle(UU.requestedGameNameWithVariation);
        if ((0, DU.f)(UU)) return {
          primary: `${XU} in a Discord World`
        };
        const cU = `${XU} in ${zU}`;
        return (0, AU.P)(UU.lobbyName) ? {
          primary: cU
        } : {
          primary: cU,
          secondary: `Lobby ${UU.lobbyName}`
        }
      }
      async getGameVerbAndTitle(UU) {
        var XU;
        const zU = "Playing";
        if ((0, AU.P)(UU)) return {
          verb: zU,
          title: "Bloxd"
        };
        const cU = (0, EU.m)(UU);
        var yU;
        if (null !== cU) return {
          verb: null !== (yU = kU[UU]) && void 0 !== yU ? yU : gU[cU.type],
          title: await (0, QU.E)(FU.d.ENGLISH, cU.title)
        };
        const oU = await (0, IU.c)(UU);
        return {
          verb: null !== (XU = oU && gU[oU.gameCategory]) && void 0 !== XU ? XU : zU,
          title: (null === oU || void 0 === oU ? void 0 : oU.name) || "a Custom World"
        }
      }
      getCurrentChannelType() {
        const {
          channelId: UU,
          guildId: XU
        } = this.getCurrentChannelAndGuild();
        return null !== XU ? yU.d.GUILD : null !== UU ? yU.d.DM : null
      }
      getRequiredScopeForCurrentChannel() {
        const UU = this.getCurrentChannelType(),
          XU = [pU.APPLICATION_COMMANDS, pU.IDENTIFY, pU.EMAIL, pU.GUILDS, pU.WRITE_ACTIVITIES];
        switch (UU) {
          case yU.d.DM:
          case yU.d.GUILD:
            return [...XU];
          default:
            throw new Error(`Unknown Discord channel type: ${UU}`)
        }
      }
      getCurrentChannelAndGuild() {
        const {
          channelId: UU,
          guildId: XU
        } = this.discordSdk;
        return {
          channelId: null !== UU && void 0 !== UU ? UU : null,
          guildId: null !== XU && void 0 !== XU ? XU : null
        }
      }
      getInstanceId() {
        return this.discordSdk.instanceId
      }
      async askDiscordUserForAuthorization() {
        const UU = this.getRequiredScopeForCurrentChannel(),
          {
            code: XU
          } = await this.discordSdk.commands.authorize({
            client_id: NU.d.discordClientID,
            response_type: "code",
            state: "",
            prompt: "none",
            scope: UU
          });
        return XU
      }
      getCachedAccessToken() {
        return this.cachedAccessToken
      }
      setCachedAccessToken(UU) {
        this.cachedAccessToken = UU
      }
      registerGuild(UU, XU) {
        this.guildNameCache[UU] = XU
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
        const XU = await this.getChannelName(UU);
        return yU.i.from({
          type: yU.d.DM,
          channelId: UU,
          channelName: XU
        })
      }
      getDiscordContextFromGuildId(UU) {
        const XU = this.guildNameCache[UU];
        return (0, AU.P)(XU) ? null : yU.f.from({
          type: yU.d.GUILD,
          guildId: UU,
          guildName: XU
        })
      }
      async getCurrentDiscordContext() {
        const {
          channelId: UU,
          guildId: XU
        } = this.getCurrentChannelAndGuild();
        return null !== XU ? this.getDiscordContextFromGuildId(XU) : null !== UU ? this.getDiscordContextFromChannelId(UU) : null
      }
      exit(UU) {
        console.log("Exiting Discord Activity:", UU), this.discordSdk.close(aU.CLOSE_NORMAL, UU)
      }
      isMobilePlatform() {
        return this.discordSdk.platform === cU.i.MOBILE
      }
      applyDiscordSafeAreaNotch() {
        const UU = getComputedStyle(document.documentElement),
          XU = (XU, zU) => {
            const cU = parseFloat(UU.getPropertyValue(`--discord-safe-area-inset-${XU}`));
            return isNaN(cU) || 0 === zU ? 0 : cU / zU * 100
          };
        YU.e.set({
          notchSize: {
            top: XU("top", window.innerHeight),
            right: Math.max(XU("right", window.innerWidth), 7),
            bottom: 0,
            left: XU("left", window.innerWidth)
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);