export const id = 141;
export const ids = [141];
export const modules = {
  7892: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      BloxdDiscordActivitySdk: () => MQ
    });
    var LQ = wQ(7896),
      qQ = wQ(1243),
      oQ = wQ(1207),
      DQ = wQ(619),
      kQ = wQ(1265),
      vQ = wQ(1725),
      mQ = wQ(1339),
      uQ = wQ(745),
      HQ = wQ(17),
      bQ = wQ(1221),
      YQ = function(QQ) {
        return QQ.APPLICATION_COMMANDS = "applications.commands", QQ.IDENTIFY = "identify", QQ.EMAIL = "email", QQ.GUILDS = "guilds", QQ.READ_DM_CHANNELS = "dm_channels.read", QQ.WRITE_ACTIVITIES = "rpc.activities.write", QQ
      }(YQ || {}),
      xQ = function(QQ) {
        return QQ[QQ.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", QQ[QQ.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", QQ[QQ.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", QQ[QQ.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", QQ[QQ.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", QQ[QQ.RATELIMITED = 4002] = "RATELIMITED", QQ[QQ.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", QQ[QQ.INVALID_VERSION = 4004] = "INVALID_VERSION", QQ[QQ.INVALID_ENCODING = 4005] = "INVALID_ENCODING", QQ
      }(xQ || {}),
      AQ = function(QQ) {
        return QQ[QQ.PLAYING = 0] = "PLAYING", QQ[QQ.STREAMING = 1] = "STREAMING", QQ[QQ.LISTENING = 2] = "LISTENING", QQ[QQ.WATCHING = 3] = "WATCHING", QQ[QQ.CUSTOM = 4] = "CUSTOM", QQ[QQ.COMPETING = 5] = "COMPETING", QQ
      }(AQ || {});
    const tQ = {
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
      eQ = {
        goalRush: "Playing",
        heroesvbrainrots: "Battling",
        hideseek: "Playing",
        bingo: "Playing"
      };
    class MQ {
      constructor(QQ) {
        this.discordSdk = QQ, this.guildNameCache = {}, this.startTime = Date.now(), this.cachedAccessToken = null
      }
      static async setup() {
        console.log("Setting up Discord SDK with client id", bQ.d.discordClientID);
        const QQ = new LQ.c(bQ.d.discordClientID);
        let FQ = !1;
        setTimeout((() => {
          FQ || (console.warn("Discord SDK took too long to initialize"), (0, vQ.reloadBloxd)())
        }), 15e3), await QQ.ready(), FQ = !0;
        try {
          const {
            enabled: FQ
          } = await QQ.commands.encourageHardwareAcceleration();
          FQ || console.warn("Hardware acceleration not enabled in the Discord client")
        } catch (qQ) {
          console.error("Failed to encourage hardware acceleration in the Discord client", qQ)
        }
        const wQ = new MQ(QQ);
        return wQ.isMobilePlatform() && (wQ.applyDiscordSafeAreaNotch(), window.addEventListener("resize", (() => {
          wQ.applyDiscordSafeAreaNotch()
        }))), wQ
      }
      async updateActivityDescription(QQ) {
        let FQ, wQ;
        switch (QQ) {
          case "homePage":
            FQ = "Chilling in the Main Menu";
            break;
          case "inGame": {
            const QQ = await this.getInGameDescriptions();
            FQ = QQ.primary, wQ = QQ.secondary;
            break
          }
        }
        await this.discordSdk.commands.setActivity({
          activity: {
            type: AQ.PLAYING,
            details: FQ,
            state: wQ,
            assets: {
              large_image: "icon",
              large_text: FQ
            },
            timestamps: {
              start: this.startTime
            }
          }
        }).catch((QQ => {
          console.error(`Failed to update Discord activity rich presence with description="${FQ}":`, QQ)
        }))
      }
      async getInGameDescriptions() {
        var QQ;
        const {
          requestedGameNameWithVariation: FQ
        } = (0, mQ.c)(), wQ = (0, uQ.l)(FQ), LQ = null !== (QQ = eQ[FQ]) && void 0 !== QQ ? QQ : tQ[wQ.type], qQ = await (0, oQ.x)(kQ.c.ENGLISH, wQ.title), vQ = (0, mQ.c)();
        if ((0, mQ.i)(vQ)) return {
          primary: `${LQ} in a Discord World`
        };
        const HQ = `${LQ} in ${qQ}`;
        return (0, DQ.F)(vQ.lobbyName) ? {
          primary: HQ
        } : {
          primary: HQ,
          secondary: `Lobby ${vQ.lobbyName}`
        }
      }
      getCurrentChannelType() {
        const {
          channelId: QQ,
          guildId: FQ
        } = this.getCurrentChannelAndGuild();
        return null !== FQ ? qQ.d.GUILD : null !== QQ ? qQ.d.DM : null
      }
      getRequiredScopeForCurrentChannel() {
        const QQ = this.getCurrentChannelType(),
          FQ = [YQ.APPLICATION_COMMANDS, YQ.IDENTIFY, YQ.EMAIL, YQ.GUILDS, YQ.WRITE_ACTIVITIES];
        switch (QQ) {
          case qQ.d.DM:
          case qQ.d.GUILD:
            return [...FQ];
          default:
            throw new Error(`Unknown Discord channel type: ${QQ}`)
        }
      }
      getCurrentChannelAndGuild() {
        const {
          channelId: QQ,
          guildId: FQ
        } = this.discordSdk;
        return {
          channelId: null !== QQ && void 0 !== QQ ? QQ : null,
          guildId: null !== FQ && void 0 !== FQ ? FQ : null
        }
      }
      getInstanceId() {
        return this.discordSdk.instanceId
      }
      async askDiscordUserForAuthorization() {
        const QQ = this.getRequiredScopeForCurrentChannel(),
          {
            code: FQ
          } = await this.discordSdk.commands.authorize({
            client_id: bQ.d.discordClientID,
            response_type: "code",
            state: "",
            prompt: "none",
            scope: QQ
          });
        return FQ
      }
      getCachedAccessToken() {
        return this.cachedAccessToken
      }
      setCachedAccessToken(QQ) {
        this.cachedAccessToken = QQ
      }
      registerGuild(QQ, FQ) {
        this.guildNameCache[QQ] = FQ
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
        const FQ = await this.getChannelName(QQ);
        return qQ.k.from({
          type: qQ.d.DM,
          channelId: QQ,
          channelName: FQ
        })
      }
      getDiscordContextFromGuildId(QQ) {
        const FQ = this.guildNameCache[QQ];
        return (0, DQ.F)(FQ) ? null : qQ.h.from({
          type: qQ.d.GUILD,
          guildId: QQ,
          guildName: FQ
        })
      }
      async getCurrentDiscordContext() {
        const {
          channelId: QQ,
          guildId: FQ
        } = this.getCurrentChannelAndGuild();
        return null !== FQ ? this.getDiscordContextFromGuildId(FQ) : null !== QQ ? this.getDiscordContextFromChannelId(QQ) : null
      }
      exit(QQ) {
        console.log("Exiting Discord Activity:", QQ), this.discordSdk.close(xQ.CLOSE_NORMAL, QQ)
      }
      isMobilePlatform() {
        return this.discordSdk.platform === LQ.g.MOBILE
      }
      applyDiscordSafeAreaNotch() {
        const QQ = getComputedStyle(document.documentElement),
          FQ = (FQ, wQ) => {
            const LQ = parseFloat(QQ.getPropertyValue(`--discord-safe-area-inset-${FQ}`));
            return isNaN(LQ) || 0 === wQ ? 0 : LQ / wQ * 100
          };
        HQ.c.set({
          notchSize: {
            top: FQ("top", window.innerHeight),
            right: Math.max(FQ("right", window.innerWidth), 7),
            bottom: 0,
            left: FQ("left", window.innerWidth)
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);