export const id = 167;
export const ids = [167];
export const modules = {
  7717: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      BloxdDiscordActivitySdk: () => sW
    });
    var mW = OW(7720),
      EW = OW(1220),
      NW = OW(1172),
      PW = OW(643),
      LW = OW(1244),
      cW = OW(1856),
      wW = OW(1351),
      tW = OW(805),
      ZW = OW(25),
      xW = OW(1189),
      lW = OW(3245),
      AW = function(WW) {
        return WW.APPLICATION_COMMANDS = "applications.commands", WW.IDENTIFY = "identify", WW.EMAIL = "email", WW.GUILDS = "guilds", WW.READ_DM_CHANNELS = "dm_channels.read", WW.WRITE_ACTIVITIES = "rpc.activities.write", WW
      }(AW || {}),
      bW = function(WW) {
        return WW[WW.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", WW[WW.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", WW[WW.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", WW[WW.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", WW[WW.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", WW[WW.RATELIMITED = 4002] = "RATELIMITED", WW[WW.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", WW[WW.INVALID_VERSION = 4004] = "INVALID_VERSION", WW[WW.INVALID_ENCODING = 4005] = "INVALID_ENCODING", WW
      }(bW || {}),
      jW = function(WW) {
        return WW[WW.PLAYING = 0] = "PLAYING", WW[WW.STREAMING = 1] = "STREAMING", WW[WW.LISTENING = 2] = "LISTENING", WW[WW.WATCHING = 3] = "WATCHING", WW[WW.CUSTOM = 4] = "CUSTOM", WW[WW.COMPETING = 5] = "COMPETING", WW
      }(jW || {});
    const UW = {
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
      kW = {
        goalRush: "Playing",
        heroesvbrainrots: "Battling",
        hideseek: "Playing",
        bingo: "Playing"
      };
    class sW {
      constructor(WW) {
        this.discordSdk = WW, this.guildNameCache = {}, this.startTime = Date.now(), this.cachedAccessToken = null, this.activityUpdateId = 0
      }
      static async setup() {
        console.log("Setting up Discord SDK with client id", xW.d.discordClientID);
        const WW = new mW.e(xW.d.discordClientID);
        let iW = !1;
        setTimeout((() => {
          iW || (console.warn("Discord SDK took too long to initialize"), (0, cW.reloadBloxd)())
        }), 15e3), await WW.ready(), iW = !0;
        try {
          const {
            enabled: iW
          } = await WW.commands.encourageHardwareAcceleration();
          iW || console.warn("Hardware acceleration not enabled in the Discord client")
        } catch (EW) {
          console.error("Failed to encourage hardware acceleration in the Discord client", EW)
        }
        const OW = new sW(WW);
        return OW.isMobilePlatform() && (OW.applyDiscordSafeAreaNotch(), window.addEventListener("resize", (() => {
          OW.applyDiscordSafeAreaNotch()
        }))), OW
      }
      async updateActivityDescription(WW) {
        const iW = ++this.activityUpdateId;
        let OW, mW;
        switch (WW) {
          case "homePage":
            OW = "Chilling in the Main Menu";
            break;
          case "inGame": {
            const WW = await this.getInGameDescriptions();
            OW = WW.primary, mW = WW.secondary;
            break
          }
        }
        iW === this.activityUpdateId && await this.discordSdk.commands.setActivity({
          activity: {
            type: jW.PLAYING,
            details: OW,
            state: mW,
            assets: {
              large_image: "icon",
              large_text: OW
            },
            timestamps: {
              start: this.startTime
            }
          }
        }).catch((WW => {
          console.error(`Failed to update Discord activity rich presence with description="${OW}":`, WW)
        }))
      }
      async getInGameDescriptions() {
        const WW = (0, wW.d)(),
          {
            verb: iW,
            title: OW
          } = await this.getGameVerbAndTitle(WW.requestedGameNameWithVariation);
        if ((0, wW.g)(WW)) return {
          primary: `${iW} in a Discord World`
        };
        const mW = `${iW} in ${OW}`;
        return (0, PW.K)(WW.lobbyName) ? {
          primary: mW
        } : {
          primary: mW,
          secondary: `Lobby ${WW.lobbyName}`
        }
      }
      async getGameVerbAndTitle(WW) {
        var iW;
        const OW = "Playing";
        if ((0, PW.K)(WW)) return {
          verb: OW,
          title: "Bloxd"
        };
        const mW = (0, tW.o)(WW);
        var EW;
        if (null !== mW) return {
          verb: null !== (EW = kW[WW]) && void 0 !== EW ? EW : UW[mW.type],
          title: await (0, NW.y)(LW.b.ENGLISH, mW.title)
        };
        const cW = await (0, lW.e)(WW);
        return {
          verb: null !== (iW = cW && UW[cW.gameCategory]) && void 0 !== iW ? iW : OW,
          title: (null === cW || void 0 === cW ? void 0 : cW.name) || "a Custom World"
        }
      }
      getCurrentChannelType() {
        const {
          channelId: WW,
          guildId: iW
        } = this.getCurrentChannelAndGuild();
        return null !== iW ? EW.d.GUILD : null !== WW ? EW.d.DM : null
      }
      getRequiredScopeForCurrentChannel() {
        const WW = this.getCurrentChannelType(),
          iW = [AW.APPLICATION_COMMANDS, AW.IDENTIFY, AW.EMAIL, AW.GUILDS, AW.WRITE_ACTIVITIES];
        switch (WW) {
          case EW.d.DM:
          case EW.d.GUILD:
            return [...iW];
          default:
            throw new Error(`Unknown Discord channel type: ${WW}`)
        }
      }
      getCurrentChannelAndGuild() {
        const {
          channelId: WW,
          guildId: iW
        } = this.discordSdk;
        return {
          channelId: null !== WW && void 0 !== WW ? WW : null,
          guildId: null !== iW && void 0 !== iW ? iW : null
        }
      }
      getInstanceId() {
        return this.discordSdk.instanceId
      }
      async askDiscordUserForAuthorization() {
        const WW = this.getRequiredScopeForCurrentChannel(),
          {
            code: iW
          } = await this.discordSdk.commands.authorize({
            client_id: xW.d.discordClientID,
            response_type: "code",
            state: "",
            prompt: "none",
            scope: WW
          });
        return iW
      }
      getCachedAccessToken() {
        return this.cachedAccessToken
      }
      setCachedAccessToken(WW) {
        this.cachedAccessToken = WW
      }
      registerGuild(WW, iW) {
        this.guildNameCache[WW] = iW
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
        const iW = await this.getChannelName(WW);
        return EW.j.from({
          type: EW.d.DM,
          channelId: WW,
          channelName: iW
        })
      }
      getDiscordContextFromGuildId(WW) {
        const iW = this.guildNameCache[WW];
        return (0, PW.K)(iW) ? null : EW.g.from({
          type: EW.d.GUILD,
          guildId: WW,
          guildName: iW
        })
      }
      async getCurrentDiscordContext() {
        const {
          channelId: WW,
          guildId: iW
        } = this.getCurrentChannelAndGuild();
        return null !== iW ? this.getDiscordContextFromGuildId(iW) : null !== WW ? this.getDiscordContextFromChannelId(WW) : null
      }
      exit(WW) {
        console.log("Exiting Discord Activity:", WW), this.discordSdk.close(bW.CLOSE_NORMAL, WW)
      }
      isMobilePlatform() {
        return this.discordSdk.platform === mW.i.MOBILE
      }
      applyDiscordSafeAreaNotch() {
        const WW = getComputedStyle(document.documentElement),
          iW = (iW, OW) => {
            const mW = parseFloat(WW.getPropertyValue(`--discord-safe-area-inset-${iW}`));
            return isNaN(mW) || 0 === OW ? 0 : mW / OW * 100
          };
        ZW.d.set({
          notchSize: {
            top: iW("top", window.innerHeight),
            right: Math.max(iW("right", window.innerWidth), 7),
            bottom: 0,
            left: iW("left", window.innerWidth)
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);