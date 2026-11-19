export const id = 141;
export const ids = [141];
export const modules = {
  7536: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      BloxdDiscordActivitySdk: () => AT
    });
    var iT = IT(7542),
      zT = IT(1199),
      kT = IT(1171),
      WT = IT(618),
      XT = IT(1220),
      BT = IT(1665),
      FT = IT(1293),
      ST = IT(748),
      DT = IT(12),
      LT = IT(1185),
      xT = function(TT) {
        return TT.APPLICATION_COMMANDS = "applications.commands", TT.IDENTIFY = "identify", TT.EMAIL = "email", TT.GUILDS = "guilds", TT.READ_DM_CHANNELS = "dm_channels.read", TT.WRITE_ACTIVITIES = "rpc.activities.write", TT
      }(xT || {}),
      cT = function(TT) {
        return TT[TT.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", TT[TT.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", TT[TT.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", TT[TT.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", TT[TT.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", TT[TT.RATELIMITED = 4002] = "RATELIMITED", TT[TT.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", TT[TT.INVALID_VERSION = 4004] = "INVALID_VERSION", TT[TT.INVALID_ENCODING = 4005] = "INVALID_ENCODING", TT
      }(cT || {}),
      KT = function(TT) {
        return TT[TT.PLAYING = 0] = "PLAYING", TT[TT.STREAMING = 1] = "STREAMING", TT[TT.LISTENING = 2] = "LISTENING", TT[TT.WATCHING = 3] = "WATCHING", TT[TT.CUSTOM = 4] = "CUSTOM", TT[TT.COMPETING = 5] = "COMPETING", TT
      }(KT || {});
    const MT = {
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
      rT = {
        goalRush: "Playing",
        heroesvbrainrots: "Battling",
        hideseek: "Playing",
        bingo: "Playing"
      };
    class AT {
      constructor(TT) {
        this.discordSdk = TT, this.guildNameCache = {}, this.startTime = Date.now(), this.cachedAccessToken = null
      }
      static async setup() {
        console.log("Setting up Discord SDK with client id", LT.c.discordClientID);
        const TT = new iT.e(LT.c.discordClientID);
        let oT = !1;
        setTimeout((() => {
          oT || (console.warn("Discord SDK took too long to initialize"), (0, BT.reloadBloxd)())
        }), 15e3), await TT.ready(), oT = !0;
        try {
          const {
            enabled: oT
          } = await TT.commands.encourageHardwareAcceleration();
          oT || console.warn("Hardware acceleration not enabled in the Discord client")
        } catch (zT) {
          console.error("Failed to encourage hardware acceleration in the Discord client", zT)
        }
        const IT = new AT(TT);
        return IT.isMobilePlatform() && (IT.applyDiscordSafeAreaNotch(), window.addEventListener("resize", (() => {
          IT.applyDiscordSafeAreaNotch()
        }))), IT
      }
      async updateActivityDescription(TT) {
        let oT, IT;
        switch (TT) {
          case "homePage":
            oT = "Chilling in the Main Menu";
            break;
          case "inGame": {
            const TT = await this.getInGameDescriptions();
            oT = TT.primary, IT = TT.secondary;
            break
          }
        }
        await this.discordSdk.commands.setActivity({
          activity: {
            type: KT.PLAYING,
            details: oT,
            state: IT,
            assets: {
              large_image: "icon",
              large_text: oT
            },
            timestamps: {
              start: this.startTime
            }
          }
        }).catch((TT => {
          console.error(`Failed to update Discord activity rich presence with description="${oT}":`, TT)
        }))
      }
      async getInGameDescriptions() {
        var TT;
        const {
          requestedGameNameWithVariation: oT
        } = (0, FT.e)(), IT = (0, ST.j)(oT), iT = null !== (TT = rT[oT]) && void 0 !== TT ? TT : MT[IT.type], zT = await (0, kT.r)(XT.c.ENGLISH, IT.title), BT = (0, FT.e)();
        if ((0, FT.i)(BT)) return {
          primary: `${iT} in a Discord World`
        };
        const DT = `${iT} in ${zT}`;
        return (0, WT.K)(BT.lobbyName) ? {
          primary: DT
        } : {
          primary: DT,
          secondary: `Lobby ${BT.lobbyName}`
        }
      }
      getCurrentChannelType() {
        const {
          channelId: TT,
          guildId: oT
        } = this.getCurrentChannelAndGuild();
        return null !== oT ? zT.e.GUILD : null !== TT ? zT.e.DM : null
      }
      getRequiredScopeForCurrentChannel() {
        const TT = this.getCurrentChannelType(),
          oT = [xT.APPLICATION_COMMANDS, xT.IDENTIFY, xT.EMAIL, xT.GUILDS, xT.WRITE_ACTIVITIES];
        switch (TT) {
          case zT.e.DM:
          case zT.e.GUILD:
            return [...oT];
          default:
            throw new Error(`Unknown Discord channel type: ${TT}`)
        }
      }
      getCurrentChannelAndGuild() {
        const {
          channelId: TT,
          guildId: oT
        } = this.discordSdk;
        return {
          channelId: null !== TT && void 0 !== TT ? TT : null,
          guildId: null !== oT && void 0 !== oT ? oT : null
        }
      }
      getInstanceId() {
        return this.discordSdk.instanceId
      }
      async askDiscordUserForAuthorization() {
        const TT = this.getRequiredScopeForCurrentChannel(),
          {
            code: oT
          } = await this.discordSdk.commands.authorize({
            client_id: LT.c.discordClientID,
            response_type: "code",
            state: "",
            prompt: "none",
            scope: TT
          });
        return oT
      }
      getCachedAccessToken() {
        return this.cachedAccessToken
      }
      setCachedAccessToken(TT) {
        this.cachedAccessToken = TT
      }
      registerGuild(TT, oT) {
        this.guildNameCache[TT] = oT
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
        const oT = await this.getChannelName(TT);
        return zT.m.from({
          type: zT.e.DM,
          channelId: TT,
          channelName: oT
        })
      }
      getDiscordContextFromGuildId(TT) {
        const oT = this.guildNameCache[TT];
        return (0, WT.K)(oT) ? null : zT.i.from({
          type: zT.e.GUILD,
          guildId: TT,
          guildName: oT
        })
      }
      async getCurrentDiscordContext() {
        const {
          channelId: TT,
          guildId: oT
        } = this.getCurrentChannelAndGuild();
        return null !== oT ? this.getDiscordContextFromGuildId(oT) : null !== TT ? this.getDiscordContextFromChannelId(TT) : null
      }
      exit(TT) {
        console.log("Exiting Discord Activity:", TT), this.discordSdk.close(cT.CLOSE_NORMAL, TT)
      }
      isMobilePlatform() {
        return this.discordSdk.platform === iT.i.MOBILE
      }
      applyDiscordSafeAreaNotch() {
        const TT = getComputedStyle(document.documentElement),
          oT = (oT, IT) => {
            const iT = parseFloat(TT.getPropertyValue(`--discord-safe-area-inset-${oT}`));
            return isNaN(iT) || 0 === IT ? 0 : iT / IT * 100
          };
        DT.c.set({
          notchSize: {
            top: oT("top", window.innerHeight),
            right: Math.max(oT("right", window.innerWidth), 7),
            bottom: 0,
            left: oT("left", window.innerWidth)
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);