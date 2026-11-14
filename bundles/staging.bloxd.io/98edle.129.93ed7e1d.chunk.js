export const id = 129;
export const ids = [129];
export const modules = {
  7019: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      BloxdDiscordActivitySdk: () => PW
    });
    var wW = MW(7025),
      CW = MW(1057),
      zR = MW(1027),
      AW = MW(564),
      bR = MW(1080),
      yR = MW(1495),
      NW = MW(1148),
      eW = MW(607),
      BW = MW(27),
      tR = MW(1041),
      TW = function(WW) {
        return WW.APPLICATION_COMMANDS = "applications.commands", WW.IDENTIFY = "identify", WW.EMAIL = "email", WW.GUILDS = "guilds", WW.READ_DM_CHANNELS = "dm_channels.read", WW.WRITE_ACTIVITIES = "rpc.activities.write", WW
      }(TW || {}),
      gR = function(WW) {
        return WW[WW.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", WW[WW.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", WW[WW.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", WW[WW.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", WW[WW.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", WW[WW.RATELIMITED = 4002] = "RATELIMITED", WW[WW.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", WW[WW.INVALID_VERSION = 4004] = "INVALID_VERSION", WW[WW.INVALID_ENCODING = 4005] = "INVALID_ENCODING", WW
      }(gR || {}),
      iR = function(WW) {
        return WW[WW.PLAYING = 0] = "PLAYING", WW[WW.STREAMING = 1] = "STREAMING", WW[WW.LISTENING = 2] = "LISTENING", WW[WW.WATCHING = 3] = "WATCHING", WW[WW.CUSTOM = 4] = "CUSTOM", WW[WW.COMPETING = 5] = "COMPETING", WW
      }(iR || {});
    const YW = {
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
      JW = {
        goalRush: "Playing",
        heroesvbrainrots: "Battling",
        hideseek: "Playing",
        bingo: "Playing"
      };
    class PW {
      constructor(WW) {
        this.discordSdk = WW, this.guildNameCache = {}, this.startTime = Date.now(), this.cachedAccessToken = null
      }
      static async setup() {
        console.log("Setting up Discord SDK with client id", tR.c.discordClientID);
        const WW = new wW.e(tR.c.discordClientID);
        let RW = !1;
        setTimeout((() => {
          RW || (console.warn("Discord SDK took too long to initialize"), (0, yR.reloadBloxd)())
        }), 15e3), await WW.ready(), RW = !0;
        try {
          const {
            enabled: RW
          } = await WW.commands.encourageHardwareAcceleration();
          RW || console.warn("Hardware acceleration not enabled in the Discord client")
        } catch (CW) {
          console.error("Failed to encourage hardware acceleration in the Discord client", CW)
        }
        const MW = new PW(WW);
        return MW.applyDiscordSafeAreaNotch(), MW
      }
      async updateActivityDescription(WW) {
        let RW, MW;
        switch (WW) {
          case "homePage":
            RW = "Chilling in the Main Menu";
            break;
          case "inGame": {
            const WW = await this.getInGameDescriptions();
            RW = WW.primary, MW = WW.secondary;
            break
          }
        }
        await this.discordSdk.commands.setActivity({
          activity: {
            type: iR.PLAYING,
            details: RW,
            state: MW,
            assets: {
              large_image: "icon",
              large_text: RW
            },
            timestamps: {
              start: this.startTime
            }
          }
        }).catch((WW => {
          console.error(`Failed to update Discord activity rich presence with description="${RW}":`, WW)
        }))
      }
      async getInGameDescriptions() {
        var WW;
        const {
          requestedGameNameWithVariation: RW
        } = (0, NW.b)(), MW = (0, eW.l)(RW), wW = null !== (WW = JW[RW]) && void 0 !== WW ? WW : YW[MW.type], CW = await (0, zR.A)(bR.b.ENGLISH, MW.title), yR = (0, NW.b)();
        if ((0, NW.i)(yR)) return {
          primary: `${wW} in a Discord World`
        };
        const BW = `${wW} in ${CW}`;
        return (0, AW.S)(yR.lobbyName) ? {
          primary: BW
        } : {
          primary: BW,
          secondary: `Lobby ${yR.lobbyName}`
        }
      }
      getCurrentChannelType() {
        const {
          channelId: WW,
          guildId: RW
        } = this.getCurrentChannelAndGuild();
        return null !== RW ? CW.b.GUILD : null !== WW ? CW.b.DM : null
      }
      getRequiredScopeForCurrentChannel() {
        const WW = this.getCurrentChannelType(),
          RW = [TW.APPLICATION_COMMANDS, TW.IDENTIFY, TW.EMAIL, TW.GUILDS, TW.WRITE_ACTIVITIES];
        switch (WW) {
          case CW.b.DM:
          case CW.b.GUILD:
            return [...RW];
          default:
            throw new Error(`Unknown Discord channel type: ${WW}`)
        }
      }
      getCurrentChannelAndGuild() {
        const {
          channelId: WW,
          guildId: RW
        } = this.discordSdk;
        return {
          channelId: null !== WW && void 0 !== WW ? WW : null,
          guildId: null !== RW && void 0 !== RW ? RW : null
        }
      }
      getInstanceId() {
        return this.discordSdk.instanceId
      }
      async askDiscordUserForAuthorization() {
        const WW = this.getRequiredScopeForCurrentChannel(),
          {
            code: RW
          } = await this.discordSdk.commands.authorize({
            client_id: tR.c.discordClientID,
            response_type: "code",
            state: "",
            prompt: "none",
            scope: WW
          });
        return RW
      }
      getCachedAccessToken() {
        return this.cachedAccessToken
      }
      setCachedAccessToken(WW) {
        this.cachedAccessToken = WW
      }
      registerGuild(WW, RW) {
        this.guildNameCache[WW] = RW
      }
      async authenticate(WW) {
        return this.discordSdk.commands.authenticate({
          access_token: WW
        }).then((WW => null !== WW))
      }
      async getUserLocale() {
        try {
          const {
            locale: WW
          } = await this.discordSdk.commands.userSettingsGetLocale();
          return WW
        } catch (WW) {
          return console.error("Failed to get user locale from Discord:", WW.stack), null
        }
      }
      async getChannelName(WW) {
        return this.discordSdk.commands.getChannel({
          channel_id: WW
        }).then((WW => WW.name)).catch((WW => "Your Current Discord Chat"))
      }
      async getDiscordContextFromChannelId(WW) {
        const RW = await this.getChannelName(WW);
        return CW.d.from({
          type: CW.b.DM,
          channelId: WW,
          channelName: RW
        })
      }
      getDiscordContextFromGuildId(WW) {
        const RW = this.guildNameCache[WW];
        return (0, AW.S)(RW) ? null : CW.c.from({
          type: CW.b.GUILD,
          guildId: WW,
          guildName: RW
        })
      }
      async getCurrentDiscordContext() {
        const {
          channelId: WW,
          guildId: RW
        } = this.getCurrentChannelAndGuild();
        return null !== RW ? this.getDiscordContextFromGuildId(RW) : null !== WW ? this.getDiscordContextFromChannelId(WW) : null
      }
      exit(WW) {
        console.log("Exiting Discord Activity:", WW), this.discordSdk.close(gR.CLOSE_NORMAL, WW)
      }
      isMobilePlatform() {
        return this.discordSdk.platform === wW.f.MOBILE
      }
      applyDiscordSafeAreaNotch() {
        if (!this.isMobilePlatform() || this.getCurrentChannelType() !== CW.b.DM) return;
        const WW = WW => {
            const RW = getComputedStyle(document.documentElement).getPropertyValue(`--discord-safe-area-inset-${WW}`).trim(),
              MW = parseFloat(RW);
            return isNaN(MW) ? 0 : MW
          },
          RW = WW => 0 === window.innerWidth ? 0 : WW / window.innerWidth * 100,
          MW = RW(WW("top")),
          wW = RW(WW("right")),
          zR = RW(WW("left"));
        BW.b.set({
          notchSize: {
            top: MW,
            right: Math.max(wW, 7),
            bottom: 0,
            left: zR
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);