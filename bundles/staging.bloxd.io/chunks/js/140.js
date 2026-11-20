export const id = 140;
export const ids = [140];
export const modules = {
  8120: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      BloxdDiscordActivitySdk: () => QT
    });
    var lT = cT(8129),
      MT = cT(1235),
      KT = cT(1195),
      OT = cT(617),
      yT = cT(1261),
      fT = cT(1741),
      xT = cT(1327),
      IT = cT(761),
      AT = cT(31),
      CT = cT(1210),
      jT = function(TT) {
        return TT.APPLICATION_COMMANDS = "applications.commands", TT.IDENTIFY = "identify", TT.EMAIL = "email", TT.GUILDS = "guilds", TT.READ_DM_CHANNELS = "dm_channels.read", TT.WRITE_ACTIVITIES = "rpc.activities.write", TT
      }(jT || {}),
      vT = function(TT) {
        return TT[TT.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", TT[TT.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", TT[TT.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", TT[TT.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", TT[TT.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", TT[TT.RATELIMITED = 4002] = "RATELIMITED", TT[TT.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", TT[TT.INVALID_VERSION = 4004] = "INVALID_VERSION", TT[TT.INVALID_ENCODING = 4005] = "INVALID_ENCODING", TT
      }(vT || {}),
      tT = function(TT) {
        return TT[TT.PLAYING = 0] = "PLAYING", TT[TT.STREAMING = 1] = "STREAMING", TT[TT.LISTENING = 2] = "LISTENING", TT[TT.WATCHING = 3] = "WATCHING", TT[TT.CUSTOM = 4] = "CUSTOM", TT[TT.COMPETING = 5] = "COMPETING", TT
      }(tT || {});
    const hT = {
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
      NT = {
        goalRush: "Playing",
        heroesvbrainrots: "Battling",
        hideseek: "Playing",
        bingo: "Playing"
      };
    class QT {
      constructor(TT) {
        this.discordSdk = TT, this.guildNameCache = {}, this.startTime = Date.now(), this.cachedAccessToken = null
      }
      static async setup() {
        console.log("Setting up Discord SDK with client id", CT.c.discordClientID);
        const TT = new lT.d(CT.c.discordClientID);
        let kT = !1;
        setTimeout((() => {
          kT || (console.warn("Discord SDK took too long to initialize"), (0, fT.reloadBloxd)())
        }), 15e3), await TT.ready(), kT = !0;
        try {
          const {
            enabled: kT
          } = await TT.commands.encourageHardwareAcceleration();
          kT || console.warn("Hardware acceleration not enabled in the Discord client")
        } catch (MT) {
          console.error("Failed to encourage hardware acceleration in the Discord client", MT)
        }
        const cT = new QT(TT);
        return cT.isMobilePlatform() && (cT.applyDiscordSafeAreaNotch(), window.addEventListener("resize", (() => {
          cT.applyDiscordSafeAreaNotch()
        }))), cT
      }
      async updateActivityDescription(TT) {
        let kT, cT;
        switch (TT) {
          case "homePage":
            kT = "Chilling in the Main Menu";
            break;
          case "inGame": {
            const TT = await this.getInGameDescriptions();
            kT = TT.primary, cT = TT.secondary;
            break
          }
        }
        await this.discordSdk.commands.setActivity({
          activity: {
            type: tT.PLAYING,
            details: kT,
            state: cT,
            assets: {
              large_image: "icon",
              large_text: kT
            },
            timestamps: {
              start: this.startTime
            }
          }
        }).catch((TT => {
          console.error(`Failed to update Discord activity rich presence with description="${kT}":`, TT)
        }))
      }
      async getInGameDescriptions() {
        var TT;
        const {
          requestedGameNameWithVariation: kT
        } = (0, xT.b)(), cT = (0, IT.n)(kT), lT = null !== (TT = NT[kT]) && void 0 !== TT ? TT : hT[cT.type], MT = await (0, KT.x)(yT.d.ENGLISH, cT.title), fT = (0, xT.b)();
        if ((0, xT.f)(fT)) return {
          primary: `${lT} in a Discord World`
        };
        const AT = `${lT} in ${MT}`;
        return (0, OT.R)(fT.lobbyName) ? {
          primary: AT
        } : {
          primary: AT,
          secondary: `Lobby ${fT.lobbyName}`
        }
      }
      getCurrentChannelType() {
        const {
          channelId: TT,
          guildId: kT
        } = this.getCurrentChannelAndGuild();
        return null !== kT ? MT.d.GUILD : null !== TT ? MT.d.DM : null
      }
      getRequiredScopeForCurrentChannel() {
        const TT = this.getCurrentChannelType(),
          kT = [jT.APPLICATION_COMMANDS, jT.IDENTIFY, jT.EMAIL, jT.GUILDS, jT.WRITE_ACTIVITIES];
        switch (TT) {
          case MT.d.DM:
          case MT.d.GUILD:
            return [...kT];
          default:
            throw new Error(`Unknown Discord channel type: ${TT}`)
        }
      }
      getCurrentChannelAndGuild() {
        const {
          channelId: TT,
          guildId: kT
        } = this.discordSdk;
        return {
          channelId: null !== TT && void 0 !== TT ? TT : null,
          guildId: null !== kT && void 0 !== kT ? kT : null
        }
      }
      getInstanceId() {
        return this.discordSdk.instanceId
      }
      async askDiscordUserForAuthorization() {
        const TT = this.getRequiredScopeForCurrentChannel(),
          {
            code: kT
          } = await this.discordSdk.commands.authorize({
            client_id: CT.c.discordClientID,
            response_type: "code",
            state: "",
            prompt: "none",
            scope: TT
          });
        return kT
      }
      getCachedAccessToken() {
        return this.cachedAccessToken
      }
      setCachedAccessToken(TT) {
        this.cachedAccessToken = TT
      }
      registerGuild(TT, kT) {
        this.guildNameCache[TT] = kT
      }
      async authenticate(TT) {
        return this.discordSdk.commands.authenticate({
          access_token: TT
        }).then((TT => null !== TT))
      }
      async getUserLocale() {
        try {
          const {
            locale: TT
          } = await this.discordSdk.commands.userSettingsGetLocale();
          return TT
        } catch (TT) {
          return console.error("Failed to get user locale from Discord:", TT.stack), null
        }
      }
      async getChannelName(TT) {
        return this.discordSdk.commands.getChannel({
          channel_id: TT
        }).then((TT => TT.name)).catch((TT => "Your Current Discord Chat"))
      }
      async getDiscordContextFromChannelId(TT) {
        const kT = await this.getChannelName(TT);
        return MT.g.from({
          type: MT.d.DM,
          channelId: TT,
          channelName: kT
        })
      }
      getDiscordContextFromGuildId(TT) {
        const kT = this.guildNameCache[TT];
        return (0, OT.R)(kT) ? null : MT.e.from({
          type: MT.d.GUILD,
          guildId: TT,
          guildName: kT
        })
      }
      async getCurrentDiscordContext() {
        const {
          channelId: TT,
          guildId: kT
        } = this.getCurrentChannelAndGuild();
        return null !== kT ? this.getDiscordContextFromGuildId(kT) : null !== TT ? this.getDiscordContextFromChannelId(TT) : null
      }
      exit(TT) {
        console.log("Exiting Discord Activity:", TT), this.discordSdk.close(vT.CLOSE_NORMAL, TT)
      }
      isMobilePlatform() {
        return this.discordSdk.platform === lT.f.MOBILE
      }
      applyDiscordSafeAreaNotch() {
        const TT = getComputedStyle(document.documentElement),
          kT = (kT, cT) => {
            const lT = parseFloat(TT.getPropertyValue(`--discord-safe-area-inset-${kT}`));
            return isNaN(lT) || 0 === cT ? 0 : lT / cT * 100
          };
        AT.e.set({
          notchSize: {
            top: kT("top", window.innerHeight),
            right: Math.max(kT("right", window.innerWidth), 7),
            bottom: 0,
            left: kT("left", window.innerWidth)
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);