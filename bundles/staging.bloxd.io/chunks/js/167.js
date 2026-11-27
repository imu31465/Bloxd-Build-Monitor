export const id = 167;
export const ids = [167];
export const modules = {
  7846: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      BloxdDiscordActivitySdk: () => WR
    });
    var yR = GR(7853),
      tR = GR(1322),
      uR = GR(1270),
      ZR = GR(679),
      qR = GR(1343),
      iR = GR(1943),
      fR = GR(1449),
      VR = GR(858),
      KR = GR(25),
      wR = GR(1287),
      rR = GR(3357),
      eR = function(RR) {
        return RR.APPLICATION_COMMANDS = "applications.commands", RR.IDENTIFY = "identify", RR.EMAIL = "email", RR.GUILDS = "guilds", RR.READ_DM_CHANNELS = "dm_channels.read", RR.WRITE_ACTIVITIES = "rpc.activities.write", RR
      }(eR || {}),
      aR = function(RR) {
        return RR[RR.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", RR[RR.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", RR[RR.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", RR[RR.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", RR[RR.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", RR[RR.RATELIMITED = 4002] = "RATELIMITED", RR[RR.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", RR[RR.INVALID_VERSION = 4004] = "INVALID_VERSION", RR[RR.INVALID_ENCODING = 4005] = "INVALID_ENCODING", RR
      }(aR || {}),
      LR = function(RR) {
        return RR[RR.PLAYING = 0] = "PLAYING", RR[RR.STREAMING = 1] = "STREAMING", RR[RR.LISTENING = 2] = "LISTENING", RR[RR.WATCHING = 3] = "WATCHING", RR[RR.CUSTOM = 4] = "CUSTOM", RR[RR.COMPETING = 5] = "COMPETING", RR
      }(LR || {});
    const nR = {
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
      UR = {
        goalRush: "Playing",
        heroesvbrainrots: "Battling",
        hideseek: "Playing",
        bingo: "Playing"
      };
    class WR {
      constructor(RR) {
        this.discordSdk = RR, this.guildNameCache = {}, this.startTime = Date.now(), this.cachedAccessToken = null, this.activityUpdateId = 0
      }
      static async setup() {
        console.log("Setting up Discord SDK with client id", wR.e.discordClientID);
        const RR = new yR.e(wR.e.discordClientID);
        let JR = !1;
        setTimeout((() => {
          JR || (console.warn("Discord SDK took too long to initialize"), (0, iR.reloadBloxd)())
        }), 15e3), await RR.ready(), JR = !0;
        try {
          const {
            enabled: JR
          } = await RR.commands.encourageHardwareAcceleration();
          JR || console.warn("Hardware acceleration not enabled in the Discord client")
        } catch (tR) {
          console.error("Failed to encourage hardware acceleration in the Discord client", tR)
        }
        const GR = new WR(RR);
        return GR.isMobilePlatform() && (GR.applyDiscordSafeAreaNotch(), window.addEventListener("resize", (() => {
          GR.applyDiscordSafeAreaNotch()
        }))), GR
      }
      async updateActivityDescription(RR) {
        const JR = ++this.activityUpdateId;
        let GR, yR;
        switch (RR) {
          case "homePage":
            GR = "Chilling in the Main Menu";
            break;
          case "inGame": {
            const RR = await this.getInGameDescriptions();
            GR = RR.primary, yR = RR.secondary;
            break
          }
        }
        JR === this.activityUpdateId && await this.discordSdk.commands.setActivity({
          activity: {
            type: LR.PLAYING,
            details: GR,
            state: yR,
            assets: {
              large_image: "icon",
              large_text: GR
            },
            timestamps: {
              start: this.startTime
            }
          }
        }).catch((RR => {
          console.error(`Failed to update Discord activity rich presence with description="${GR}":`, RR)
        }))
      }
      async getInGameDescriptions() {
        const RR = (0, fR.d)(),
          {
            verb: JR,
            title: GR
          } = await this.getGameVerbAndTitle(RR.requestedGameNameWithVariation);
        if ((0, fR.j)(RR)) return {
          primary: `${JR} in a Discord World`
        };
        const yR = `${JR} in ${GR}`;
        return (0, ZR.I)(RR.lobbyName) ? {
          primary: yR
        } : {
          primary: yR,
          secondary: `Lobby ${RR.lobbyName}`
        }
      }
      async getGameVerbAndTitle(RR) {
        var JR;
        const GR = "Playing";
        if ((0, ZR.I)(RR)) return {
          verb: GR,
          title: "Bloxd"
        };
        const yR = (0, VR.k)(RR);
        var tR;
        if (null !== yR) return {
          verb: null !== (tR = UR[RR]) && void 0 !== tR ? tR : nR[yR.type],
          title: await (0, uR.x)(qR.c.ENGLISH, yR.title)
        };
        const iR = await (0, rR.b)(RR);
        return {
          verb: null !== (JR = iR && nR[iR.gameCategory]) && void 0 !== JR ? JR : GR,
          title: (null === iR || void 0 === iR ? void 0 : iR.name) || "a Custom World"
        }
      }
      getCurrentChannelType() {
        const {
          channelId: RR,
          guildId: JR
        } = this.getCurrentChannelAndGuild();
        return null !== JR ? tR.e.GUILD : null !== RR ? tR.e.DM : null
      }
      getRequiredScopeForCurrentChannel() {
        const RR = this.getCurrentChannelType(),
          JR = [eR.APPLICATION_COMMANDS, eR.IDENTIFY, eR.EMAIL, eR.GUILDS, eR.WRITE_ACTIVITIES];
        switch (RR) {
          case tR.e.DM:
          case tR.e.GUILD:
            return [...JR];
          default:
            throw new Error(`Unknown Discord channel type: ${RR}`)
        }
      }
      getCurrentChannelAndGuild() {
        const {
          channelId: RR,
          guildId: JR
        } = this.discordSdk;
        return {
          channelId: null !== RR && void 0 !== RR ? RR : null,
          guildId: null !== JR && void 0 !== JR ? JR : null
        }
      }
      getInstanceId() {
        return this.discordSdk.instanceId
      }
      async askDiscordUserForAuthorization() {
        const RR = this.getRequiredScopeForCurrentChannel(),
          {
            code: JR
          } = await this.discordSdk.commands.authorize({
            client_id: wR.e.discordClientID,
            response_type: "code",
            state: "",
            prompt: "none",
            scope: RR
          });
        return JR
      }
      getCachedAccessToken() {
        return this.cachedAccessToken
      }
      setCachedAccessToken(RR) {
        this.cachedAccessToken = RR
      }
      registerGuild(RR, JR) {
        this.guildNameCache[RR] = JR
      }
      async authenticate(RR) {
        return this.discordSdk.commands.authenticate({
          access_token: RR
        }).then((RR => null !== RR))
      }
      async getUserLocale() {
        try {
          const {
            locale: RR
          } = await this.discordSdk.commands.userSettingsGetLocale();
          return RR
        } catch (RR) {
          return console.error("Failed to get user locale from Discord:", RR.stack), null
        }
      }
      async getChannelName(RR) {
        return this.discordSdk.commands.getChannel({
          channel_id: RR
        }).then((RR => RR.name)).catch((RR => "Your Current Discord Chat"))
      }
      async getDiscordContextFromChannelId(RR) {
        const JR = await this.getChannelName(RR);
        return tR.j.from({
          type: tR.e.DM,
          channelId: RR,
          channelName: JR
        })
      }
      getDiscordContextFromGuildId(RR) {
        const JR = this.guildNameCache[RR];
        return (0, ZR.I)(JR) ? null : tR.h.from({
          type: tR.e.GUILD,
          guildId: RR,
          guildName: JR
        })
      }
      async getCurrentDiscordContext() {
        const {
          channelId: RR,
          guildId: JR
        } = this.getCurrentChannelAndGuild();
        return null !== JR ? this.getDiscordContextFromGuildId(JR) : null !== RR ? this.getDiscordContextFromChannelId(RR) : null
      }
      exit(RR) {
        console.log("Exiting Discord Activity:", RR), this.discordSdk.close(aR.CLOSE_NORMAL, RR)
      }
      isMobilePlatform() {
        return this.discordSdk.platform === yR.f.MOBILE
      }
      applyDiscordSafeAreaNotch() {
        const RR = getComputedStyle(document.documentElement),
          JR = (JR, GR) => {
            const yR = parseFloat(RR.getPropertyValue(`--discord-safe-area-inset-${JR}`));
            return isNaN(yR) || 0 === GR ? 0 : yR / GR * 100
          };
        KR.d.set({
          notchSize: {
            top: JR("top", window.innerHeight),
            right: Math.max(JR("right", window.innerWidth), 7),
            bottom: 0,
            left: JR("left", window.innerWidth)
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);