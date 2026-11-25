export const id = 150;
export const ids = [150];
export const modules = {
  8463: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      BloxdDiscordActivitySdk: () => pQ
    });
    var wQ = XQ(8470),
      qQ = XQ(1263),
      TQ = XQ(1226),
      zQ = XQ(663),
      sQ = XQ(1285),
      FQ = XQ(1802),
      PQ = XQ(1376),
      gQ = XQ(814),
      JQ = XQ(26),
      rQ = XQ(1118),
      IQ = XQ(2447),
      jQ = function(QQ) {
        return QQ.APPLICATION_COMMANDS = "applications.commands", QQ.IDENTIFY = "identify", QQ.EMAIL = "email", QQ.GUILDS = "guilds", QQ.READ_DM_CHANNELS = "dm_channels.read", QQ.WRITE_ACTIVITIES = "rpc.activities.write", QQ
      }(jQ || {}),
      BQ = function(QQ) {
        return QQ[QQ.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", QQ[QQ.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", QQ[QQ.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", QQ[QQ.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", QQ[QQ.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", QQ[QQ.RATELIMITED = 4002] = "RATELIMITED", QQ[QQ.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", QQ[QQ.INVALID_VERSION = 4004] = "INVALID_VERSION", QQ[QQ.INVALID_ENCODING = 4005] = "INVALID_ENCODING", QQ
      }(BQ || {}),
      yQ = function(QQ) {
        return QQ[QQ.PLAYING = 0] = "PLAYING", QQ[QQ.STREAMING = 1] = "STREAMING", QQ[QQ.LISTENING = 2] = "LISTENING", QQ[QQ.WATCHING = 3] = "WATCHING", QQ[QQ.CUSTOM = 4] = "CUSTOM", QQ[QQ.COMPETING = 5] = "COMPETING", QQ
      }(yQ || {});
    const VQ = {
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
      DQ = {
        goalRush: "Playing",
        heroesvbrainrots: "Battling",
        hideseek: "Playing",
        bingo: "Playing"
      };
    class pQ {
      constructor(QQ) {
        this.discordSdk = QQ, this.guildNameCache = {}, this.startTime = Date.now(), this.cachedAccessToken = null, this.activityUpdateId = 0
      }
      static async setup() {
        console.log("Setting up Discord SDK with client id", rQ.d.discordClientID);
        const QQ = new wQ.b(rQ.d.discordClientID);
        let WQ = !1;
        setTimeout((() => {
          WQ || (console.warn("Discord SDK took too long to initialize"), (0, FQ.reloadBloxd)())
        }), 15e3), await QQ.ready(), WQ = !0;
        try {
          const {
            enabled: WQ
          } = await QQ.commands.encourageHardwareAcceleration();
          WQ || console.warn("Hardware acceleration not enabled in the Discord client")
        } catch (qQ) {
          console.error("Failed to encourage hardware acceleration in the Discord client", qQ)
        }
        const XQ = new pQ(QQ);
        return XQ.isMobilePlatform() && (XQ.applyDiscordSafeAreaNotch(), window.addEventListener("resize", (() => {
          XQ.applyDiscordSafeAreaNotch()
        }))), XQ
      }
      async updateActivityDescription(QQ) {
        const WQ = ++this.activityUpdateId;
        let XQ, wQ;
        switch (QQ) {
          case "homePage":
            XQ = "Chilling in the Main Menu";
            break;
          case "inGame": {
            const QQ = await this.getInGameDescriptions();
            XQ = QQ.primary, wQ = QQ.secondary;
            break
          }
        }
        WQ === this.activityUpdateId && await this.discordSdk.commands.setActivity({
          activity: {
            type: yQ.PLAYING,
            details: XQ,
            state: wQ,
            assets: {
              large_image: "icon",
              large_text: XQ
            },
            timestamps: {
              start: this.startTime
            }
          }
        }).catch((QQ => {
          console.error(`Failed to update Discord activity rich presence with description="${XQ}":`, QQ)
        }))
      }
      async getInGameDescriptions() {
        const QQ = (0, PQ.e)(),
          {
            verb: WQ,
            title: XQ
          } = await this.getGameVerbAndTitle(QQ.requestedGameNameWithVariation);
        if ((0, PQ.l)(QQ)) return {
          primary: `${WQ} in a Discord World`
        };
        const wQ = `${WQ} in ${XQ}`;
        return (0, zQ.G)(QQ.lobbyName) ? {
          primary: wQ
        } : {
          primary: wQ,
          secondary: `Lobby ${QQ.lobbyName}`
        }
      }
      async getGameVerbAndTitle(QQ) {
        var WQ;
        const XQ = "Playing";
        if ((0, zQ.G)(QQ)) return {
          verb: XQ,
          title: "Bloxd"
        };
        const wQ = (0, gQ.j)(QQ);
        var qQ;
        if (null !== wQ) return {
          verb: null !== (qQ = DQ[QQ]) && void 0 !== qQ ? qQ : VQ[wQ.type],
          title: await (0, TQ.A)(sQ.e.ENGLISH, wQ.title)
        };
        const FQ = await (0, IQ.b)(QQ);
        return {
          verb: null !== (WQ = FQ && VQ[FQ.gameCategory]) && void 0 !== WQ ? WQ : XQ,
          title: (null === FQ || void 0 === FQ ? void 0 : FQ.name) || "a Custom World"
        }
      }
      getCurrentChannelType() {
        const {
          channelId: QQ,
          guildId: WQ
        } = this.getCurrentChannelAndGuild();
        return null !== WQ ? qQ.d.GUILD : null !== QQ ? qQ.d.DM : null
      }
      getRequiredScopeForCurrentChannel() {
        const QQ = this.getCurrentChannelType(),
          WQ = [jQ.APPLICATION_COMMANDS, jQ.IDENTIFY, jQ.EMAIL, jQ.GUILDS, jQ.WRITE_ACTIVITIES];
        switch (QQ) {
          case qQ.d.DM:
          case qQ.d.GUILD:
            return [...WQ];
          default:
            throw new Error(`Unknown Discord channel type: ${QQ}`)
        }
      }
      getCurrentChannelAndGuild() {
        const {
          channelId: QQ,
          guildId: WQ
        } = this.discordSdk;
        return {
          channelId: null !== QQ && void 0 !== QQ ? QQ : null,
          guildId: null !== WQ && void 0 !== WQ ? WQ : null
        }
      }
      getInstanceId() {
        return this.discordSdk.instanceId
      }
      async askDiscordUserForAuthorization() {
        const QQ = this.getRequiredScopeForCurrentChannel(),
          {
            code: WQ
          } = await this.discordSdk.commands.authorize({
            client_id: rQ.d.discordClientID,
            response_type: "code",
            state: "",
            prompt: "none",
            scope: QQ
          });
        return WQ
      }
      getCachedAccessToken() {
        return this.cachedAccessToken
      }
      setCachedAccessToken(QQ) {
        this.cachedAccessToken = QQ
      }
      registerGuild(QQ, WQ) {
        this.guildNameCache[QQ] = WQ
      }
      async authenticate(QQ) {
        return this.discordSdk.commands.authenticate({
          access_token: QQ
        }).then((QQ => null !== QQ))
      }
      async getUserLocale() {
        try {
          const {
            locale: QQ
          } = await this.discordSdk.commands.userSettingsGetLocale();
          return QQ
        } catch (QQ) {
          return console.error("Failed to get user locale from Discord:", QQ.stack), null
        }
      }
      async getChannelName(QQ) {
        return this.discordSdk.commands.getChannel({
          channel_id: QQ
        }).then((QQ => QQ.name)).catch((QQ => "Your Current Discord Chat"))
      }
      async getDiscordContextFromChannelId(QQ) {
        const WQ = await this.getChannelName(QQ);
        return qQ.k.from({
          type: qQ.d.DM,
          channelId: QQ,
          channelName: WQ
        })
      }
      getDiscordContextFromGuildId(QQ) {
        const WQ = this.guildNameCache[QQ];
        return (0, zQ.G)(WQ) ? null : qQ.h.from({
          type: qQ.d.GUILD,
          guildId: QQ,
          guildName: WQ
        })
      }
      async getCurrentDiscordContext() {
        const {
          channelId: QQ,
          guildId: WQ
        } = this.getCurrentChannelAndGuild();
        return null !== WQ ? this.getDiscordContextFromGuildId(WQ) : null !== QQ ? this.getDiscordContextFromChannelId(QQ) : null
      }
      exit(QQ) {
        console.log("Exiting Discord Activity:", QQ), this.discordSdk.close(BQ.CLOSE_NORMAL, QQ)
      }
      isMobilePlatform() {
        return this.discordSdk.platform === wQ.e.MOBILE
      }
      applyDiscordSafeAreaNotch() {
        const QQ = getComputedStyle(document.documentElement),
          WQ = (WQ, XQ) => {
            const wQ = parseFloat(QQ.getPropertyValue(`--discord-safe-area-inset-${WQ}`));
            return isNaN(wQ) || 0 === XQ ? 0 : wQ / XQ * 100
          };
        JQ.b.set({
          notchSize: {
            top: WQ("top", window.innerHeight),
            right: Math.max(WQ("right", window.innerWidth), 7),
            bottom: 0,
            left: WQ("left", window.innerWidth)
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);