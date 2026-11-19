export const id = 141;
export const ids = [141];
export const modules = {
  7539: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      BloxdDiscordActivitySdk: () => EY
    });
    var FY = DY(7541),
      AY = DY(1233),
      IY = DY(1211),
      RY = DY(625),
      OY = DY(1256),
      gY = DY(1699),
      aY = DY(1322),
      vY = DY(778),
      uY = DY(19),
      sY = DY(1224),
      iY = function(YY) {
        return YY.APPLICATION_COMMANDS = "applications.commands", YY.IDENTIFY = "identify", YY.EMAIL = "email", YY.GUILDS = "guilds", YY.READ_DM_CHANNELS = "dm_channels.read", YY.WRITE_ACTIVITIES = "rpc.activities.write", YY
      }(iY || {}),
      yY = function(YY) {
        return YY[YY.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", YY[YY.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", YY[YY.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", YY[YY.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", YY[YY.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", YY[YY.RATELIMITED = 4002] = "RATELIMITED", YY[YY.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", YY[YY.INVALID_VERSION = 4004] = "INVALID_VERSION", YY[YY.INVALID_ENCODING = 4005] = "INVALID_ENCODING", YY
      }(yY || {}),
      QY = function(YY) {
        return YY[YY.PLAYING = 0] = "PLAYING", YY[YY.STREAMING = 1] = "STREAMING", YY[YY.LISTENING = 2] = "LISTENING", YY[YY.WATCHING = 3] = "WATCHING", YY[YY.CUSTOM = 4] = "CUSTOM", YY[YY.COMPETING = 5] = "COMPETING", YY
      }(QY || {});
    const oY = {
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
      WY = {
        goalRush: "Playing",
        heroesvbrainrots: "Battling",
        hideseek: "Playing",
        bingo: "Playing"
      };
    class EY {
      constructor(YY) {
        this.discordSdk = YY, this.guildNameCache = {}, this.startTime = Date.now(), this.cachedAccessToken = null
      }
      static async setup() {
        console.log("Setting up Discord SDK with client id", sY.e.discordClientID);
        const YY = new FY.d(sY.e.discordClientID);
        let rY = !1;
        setTimeout((() => {
          rY || (console.warn("Discord SDK took too long to initialize"), (0, gY.reloadBloxd)())
        }), 15e3), await YY.ready(), rY = !0;
        try {
          const {
            enabled: rY
          } = await YY.commands.encourageHardwareAcceleration();
          rY || console.warn("Hardware acceleration not enabled in the Discord client")
        } catch (AY) {
          console.error("Failed to encourage hardware acceleration in the Discord client", AY)
        }
        const DY = new EY(YY);
        return DY.isMobilePlatform() && (DY.applyDiscordSafeAreaNotch(), window.addEventListener("resize", (() => {
          DY.applyDiscordSafeAreaNotch()
        }))), DY
      }
      async updateActivityDescription(YY) {
        let rY, DY;
        switch (YY) {
          case "homePage":
            rY = "Chilling in the Main Menu";
            break;
          case "inGame": {
            const YY = await this.getInGameDescriptions();
            rY = YY.primary, DY = YY.secondary;
            break
          }
        }
        await this.discordSdk.commands.setActivity({
          activity: {
            type: QY.PLAYING,
            details: rY,
            state: DY,
            assets: {
              large_image: "icon",
              large_text: rY
            },
            timestamps: {
              start: this.startTime
            }
          }
        }).catch((YY => {
          console.error(`Failed to update Discord activity rich presence with description="${rY}":`, YY)
        }))
      }
      async getInGameDescriptions() {
        var YY;
        const {
          requestedGameNameWithVariation: rY
        } = (0, aY.b)(), DY = (0, vY.n)(rY), FY = null !== (YY = WY[rY]) && void 0 !== YY ? YY : oY[DY.type], AY = await (0, IY.B)(OY.d.ENGLISH, DY.title), gY = (0, aY.b)();
        if ((0, aY.h)(gY)) return {
          primary: `${FY} in a Discord World`
        };
        const uY = `${FY} in ${AY}`;
        return (0, RY.H)(gY.lobbyName) ? {
          primary: uY
        } : {
          primary: uY,
          secondary: `Lobby ${gY.lobbyName}`
        }
      }
      getCurrentChannelType() {
        const {
          channelId: YY,
          guildId: rY
        } = this.getCurrentChannelAndGuild();
        return null !== rY ? AY.e.GUILD : null !== YY ? AY.e.DM : null
      }
      getRequiredScopeForCurrentChannel() {
        const YY = this.getCurrentChannelType(),
          rY = [iY.APPLICATION_COMMANDS, iY.IDENTIFY, iY.EMAIL, iY.GUILDS, iY.WRITE_ACTIVITIES];
        switch (YY) {
          case AY.e.DM:
          case AY.e.GUILD:
            return [...rY];
          default:
            throw new Error(`Unknown Discord channel type: ${YY}`)
        }
      }
      getCurrentChannelAndGuild() {
        const {
          channelId: YY,
          guildId: rY
        } = this.discordSdk;
        return {
          channelId: null !== YY && void 0 !== YY ? YY : null,
          guildId: null !== rY && void 0 !== rY ? rY : null
        }
      }
      getInstanceId() {
        return this.discordSdk.instanceId
      }
      async askDiscordUserForAuthorization() {
        const YY = this.getRequiredScopeForCurrentChannel(),
          {
            code: rY
          } = await this.discordSdk.commands.authorize({
            client_id: sY.e.discordClientID,
            response_type: "code",
            state: "",
            prompt: "none",
            scope: YY
          });
        return rY
      }
      getCachedAccessToken() {
        return this.cachedAccessToken
      }
      setCachedAccessToken(YY) {
        this.cachedAccessToken = YY
      }
      registerGuild(YY, rY) {
        this.guildNameCache[YY] = rY
      }
      async authenticate(YY) {
        return this.discordSdk.commands.authenticate({
          access_token: YY
        }).then((YY => null !== YY))
      }
      async getUserLocale() {
        try {
          const {
            locale: YY
          } = await this.discordSdk.commands.userSettingsGetLocale();
          return YY
        } catch (YY) {
          return console.error("Failed to get user locale from Discord:", YY.stack), null
        }
      }
      async getChannelName(YY) {
        return this.discordSdk.commands.getChannel({
          channel_id: YY
        }).then((YY => YY.name)).catch((YY => "Your Current Discord Chat"))
      }
      async getDiscordContextFromChannelId(YY) {
        const rY = await this.getChannelName(YY);
        return AY.h.from({
          type: AY.e.DM,
          channelId: YY,
          channelName: rY
        })
      }
      getDiscordContextFromGuildId(YY) {
        const rY = this.guildNameCache[YY];
        return (0, RY.H)(rY) ? null : AY.g.from({
          type: AY.e.GUILD,
          guildId: YY,
          guildName: rY
        })
      }
      async getCurrentDiscordContext() {
        const {
          channelId: YY,
          guildId: rY
        } = this.getCurrentChannelAndGuild();
        return null !== rY ? this.getDiscordContextFromGuildId(rY) : null !== YY ? this.getDiscordContextFromChannelId(YY) : null
      }
      exit(YY) {
        console.log("Exiting Discord Activity:", YY), this.discordSdk.close(yY.CLOSE_NORMAL, YY)
      }
      isMobilePlatform() {
        return this.discordSdk.platform === FY.g.MOBILE
      }
      applyDiscordSafeAreaNotch() {
        const YY = getComputedStyle(document.documentElement),
          rY = (rY, DY) => {
            const FY = parseFloat(YY.getPropertyValue(`--discord-safe-area-inset-${rY}`));
            return isNaN(FY) || 0 === DY ? 0 : FY / DY * 100
          };
        uY.b.set({
          notchSize: {
            top: rY("top", window.innerHeight),
            right: Math.max(rY("right", window.innerWidth), 7),
            bottom: 0,
            left: rY("left", window.innerWidth)
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);