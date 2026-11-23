export const id = 146;
export const ids = [146];
export const modules = {
  8104: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      BloxdDiscordActivitySdk: () => GC
    });
    var QC = ZC(8113),
      wC = ZC(1171),
      bC = ZC(1143),
      nC = ZC(600),
      fC = ZC(1192),
      oC = ZC(1645),
      qC = ZC(1275),
      FC = ZC(728),
      WC = ZC(20),
      NC = ZC(1032),
      MC = function(CC) {
        return CC.APPLICATION_COMMANDS = "applications.commands", CC.IDENTIFY = "identify", CC.EMAIL = "email", CC.GUILDS = "guilds", CC.READ_DM_CHANNELS = "dm_channels.read", CC.WRITE_ACTIVITIES = "rpc.activities.write", CC
      }(MC || {}),
      gC = function(CC) {
        return CC[CC.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", CC[CC.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", CC[CC.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", CC[CC.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", CC[CC.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", CC[CC.RATELIMITED = 4002] = "RATELIMITED", CC[CC.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", CC[CC.INVALID_VERSION = 4004] = "INVALID_VERSION", CC[CC.INVALID_ENCODING = 4005] = "INVALID_ENCODING", CC
      }(gC || {}),
      SC = function(CC) {
        return CC[CC.PLAYING = 0] = "PLAYING", CC[CC.STREAMING = 1] = "STREAMING", CC[CC.LISTENING = 2] = "LISTENING", CC[CC.WATCHING = 3] = "WATCHING", CC[CC.CUSTOM = 4] = "CUSTOM", CC[CC.COMPETING = 5] = "COMPETING", CC
      }(SC || {});
    const pC = {
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
      PC = {
        goalRush: "Playing",
        heroesvbrainrots: "Battling",
        hideseek: "Playing",
        bingo: "Playing"
      };
    class GC {
      constructor(CC) {
        this.discordSdk = CC, this.guildNameCache = {}, this.startTime = Date.now(), this.cachedAccessToken = null
      }
      static async setup() {
        console.log("Setting up Discord SDK with client id", NC.c.discordClientID);
        const CC = new QC.d(NC.c.discordClientID);
        let zC = !1;
        setTimeout((() => {
          zC || (console.warn("Discord SDK took too long to initialize"), (0, oC.reloadBloxd)())
        }), 15e3), await CC.ready(), zC = !0;
        try {
          const {
            enabled: zC
          } = await CC.commands.encourageHardwareAcceleration();
          zC || console.warn("Hardware acceleration not enabled in the Discord client")
        } catch (wC) {
          console.error("Failed to encourage hardware acceleration in the Discord client", wC)
        }
        const ZC = new GC(CC);
        return ZC.isMobilePlatform() && (ZC.applyDiscordSafeAreaNotch(), window.addEventListener("resize", (() => {
          ZC.applyDiscordSafeAreaNotch()
        }))), ZC
      }
      async updateActivityDescription(CC) {
        let zC, ZC;
        switch (CC) {
          case "homePage":
            zC = "Chilling in the Main Menu";
            break;
          case "inGame": {
            const CC = await this.getInGameDescriptions();
            zC = CC.primary, ZC = CC.secondary;
            break
          }
        }
        await this.discordSdk.commands.setActivity({
          activity: {
            type: SC.PLAYING,
            details: zC,
            state: ZC,
            assets: {
              large_image: "icon",
              large_text: zC
            },
            timestamps: {
              start: this.startTime
            }
          }
        }).catch((CC => {
          console.error(`Failed to update Discord activity rich presence with description="${zC}":`, CC)
        }))
      }
      async getInGameDescriptions() {
        var CC;
        const {
          requestedGameNameWithVariation: zC
        } = (0, qC.d)(), ZC = (0, FC.k)(zC), QC = null !== (CC = PC[zC]) && void 0 !== CC ? CC : pC[ZC.type], wC = await (0, bC.v)(fC.e.ENGLISH, ZC.title), oC = (0, qC.d)();
        if ((0, qC.h)(oC)) return {
          primary: `${QC} in a Discord World`
        };
        const WC = `${QC} in ${wC}`;
        return (0, nC.H)(oC.lobbyName) ? {
          primary: WC
        } : {
          primary: WC,
          secondary: `Lobby ${oC.lobbyName}`
        }
      }
      getCurrentChannelType() {
        const {
          channelId: CC,
          guildId: zC
        } = this.getCurrentChannelAndGuild();
        return null !== zC ? wC.b.GUILD : null !== CC ? wC.b.DM : null
      }
      getRequiredScopeForCurrentChannel() {
        const CC = this.getCurrentChannelType(),
          zC = [MC.APPLICATION_COMMANDS, MC.IDENTIFY, MC.EMAIL, MC.GUILDS, MC.WRITE_ACTIVITIES];
        switch (CC) {
          case wC.b.DM:
          case wC.b.GUILD:
            return [...zC];
          default:
            throw new Error(`Unknown Discord channel type: ${CC}`)
        }
      }
      getCurrentChannelAndGuild() {
        const {
          channelId: CC,
          guildId: zC
        } = this.discordSdk;
        return {
          channelId: null !== CC && void 0 !== CC ? CC : null,
          guildId: null !== zC && void 0 !== zC ? zC : null
        }
      }
      getInstanceId() {
        return this.discordSdk.instanceId
      }
      async askDiscordUserForAuthorization() {
        const CC = this.getRequiredScopeForCurrentChannel(),
          {
            code: zC
          } = await this.discordSdk.commands.authorize({
            client_id: NC.c.discordClientID,
            response_type: "code",
            state: "",
            prompt: "none",
            scope: CC
          });
        return zC
      }
      getCachedAccessToken() {
        return this.cachedAccessToken
      }
      setCachedAccessToken(CC) {
        this.cachedAccessToken = CC
      }
      registerGuild(CC, zC) {
        this.guildNameCache[CC] = zC
      }
      async authenticate(CC) {
        return this.discordSdk.commands.authenticate({
          access_token: CC
        }).then((CC => null !== CC))
      }
      async getUserLocale() {
        try {
          const {
            locale: CC
          } = await this.discordSdk.commands.userSettingsGetLocale();
          return CC
        } catch (CC) {
          return console.error("Failed to get user locale from Discord:", CC.stack), null
        }
      }
      async getChannelName(CC) {
        return this.discordSdk.commands.getChannel({
          channel_id: CC
        }).then((CC => CC.name)).catch((CC => "Your Current Discord Chat"))
      }
      async getDiscordContextFromChannelId(CC) {
        const zC = await this.getChannelName(CC);
        return wC.f.from({
          type: wC.b.DM,
          channelId: CC,
          channelName: zC
        })
      }
      getDiscordContextFromGuildId(CC) {
        const zC = this.guildNameCache[CC];
        return (0, nC.H)(zC) ? null : wC.d.from({
          type: wC.b.GUILD,
          guildId: CC,
          guildName: zC
        })
      }
      async getCurrentDiscordContext() {
        const {
          channelId: CC,
          guildId: zC
        } = this.getCurrentChannelAndGuild();
        return null !== zC ? this.getDiscordContextFromGuildId(zC) : null !== CC ? this.getDiscordContextFromChannelId(CC) : null
      }
      exit(CC) {
        console.log("Exiting Discord Activity:", CC), this.discordSdk.close(gC.CLOSE_NORMAL, CC)
      }
      isMobilePlatform() {
        return this.discordSdk.platform === QC.g.MOBILE
      }
      applyDiscordSafeAreaNotch() {
        const CC = getComputedStyle(document.documentElement),
          zC = (zC, ZC) => {
            const QC = parseFloat(CC.getPropertyValue(`--discord-safe-area-inset-${zC}`));
            return isNaN(QC) || 0 === ZC ? 0 : QC / ZC * 100
          };
        WC.b.set({
          notchSize: {
            top: zC("top", window.innerHeight),
            right: Math.max(zC("right", window.innerWidth), 7),
            bottom: 0,
            left: zC("left", window.innerWidth)
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);