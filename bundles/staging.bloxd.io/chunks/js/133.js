export const id = 133;
export const ids = [133];
export const modules = {
  7420: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      BloxdDiscordActivitySdk: () => rJ
    });
    var FJ = ZJ(7424),
      UJ = ZJ(1126),
      eJ = ZJ(1086),
      XJ = ZJ(535),
      AJ = ZJ(1151),
      qJ = ZJ(1599),
      jJ = ZJ(1213),
      YJ = ZJ(622),
      hJ = ZJ(13),
      DJ = ZJ(1106),
      sJ = function(JJ) {
        return JJ.APPLICATION_COMMANDS = "applications.commands", JJ.IDENTIFY = "identify", JJ.EMAIL = "email", JJ.GUILDS = "guilds", JJ.READ_DM_CHANNELS = "dm_channels.read", JJ.WRITE_ACTIVITIES = "rpc.activities.write", JJ
      }(sJ || {}),
      nJ = function(JJ) {
        return JJ[JJ.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", JJ[JJ.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", JJ[JJ.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", JJ[JJ.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", JJ[JJ.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", JJ[JJ.RATELIMITED = 4002] = "RATELIMITED", JJ[JJ.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", JJ[JJ.INVALID_VERSION = 4004] = "INVALID_VERSION", JJ[JJ.INVALID_ENCODING = 4005] = "INVALID_ENCODING", JJ
      }(nJ || {}),
      GJ = function(JJ) {
        return JJ[JJ.PLAYING = 0] = "PLAYING", JJ[JJ.STREAMING = 1] = "STREAMING", JJ[JJ.LISTENING = 2] = "LISTENING", JJ[JJ.WATCHING = 3] = "WATCHING", JJ[JJ.CUSTOM = 4] = "CUSTOM", JJ[JJ.COMPETING = 5] = "COMPETING", JJ
      }(GJ || {});
    const fJ = {
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
      xJ = {
        goalRush: "Playing",
        heroesvbrainrots: "Battling",
        hideseek: "Playing",
        bingo: "Playing"
      };
    class rJ {
      constructor(JJ) {
        this.discordSdk = JJ, this.guildNameCache = {}, this.startTime = Date.now(), this.cachedAccessToken = null
      }
      static async setup() {
        console.log("Setting up Discord SDK with client id", DJ.c.discordClientID);
        const JJ = new FJ.b(DJ.c.discordClientID);
        let cJ = !1;
        setTimeout((() => {
          cJ || (console.warn("Discord SDK took too long to initialize"), (0, qJ.reloadBloxd)())
        }), 15e3), await JJ.ready(), cJ = !0;
        try {
          const {
            enabled: cJ
          } = await JJ.commands.encourageHardwareAcceleration();
          cJ || console.warn("Hardware acceleration not enabled in the Discord client")
        } catch (UJ) {
          console.error("Failed to encourage hardware acceleration in the Discord client", UJ)
        }
        const ZJ = new rJ(JJ);
        return ZJ.isMobilePlatform() && (ZJ.applyDiscordSafeAreaNotch(), window.addEventListener("resize", (() => {
          ZJ.applyDiscordSafeAreaNotch()
        }))), ZJ
      }
      async updateActivityDescription(JJ) {
        let cJ, ZJ;
        switch (JJ) {
          case "homePage":
            cJ = "Chilling in the Main Menu";
            break;
          case "inGame": {
            const JJ = await this.getInGameDescriptions();
            cJ = JJ.primary, ZJ = JJ.secondary;
            break
          }
        }
        await this.discordSdk.commands.setActivity({
          activity: {
            type: GJ.PLAYING,
            details: cJ,
            state: ZJ,
            assets: {
              large_image: "icon",
              large_text: cJ
            },
            timestamps: {
              start: this.startTime
            }
          }
        }).catch((JJ => {
          console.error(`Failed to update Discord activity rich presence with description="${cJ}":`, JJ)
        }))
      }
      async getInGameDescriptions() {
        var JJ;
        const {
          requestedGameNameWithVariation: cJ
        } = (0, jJ.e)(), ZJ = (0, YJ.n)(cJ), FJ = null !== (JJ = xJ[cJ]) && void 0 !== JJ ? JJ : fJ[ZJ.type], UJ = await (0, eJ.C)(AJ.c.ENGLISH, ZJ.title), qJ = (0, jJ.e)();
        if ((0, jJ.i)(qJ)) return {
          primary: `${FJ} in a Discord World`
        };
        const hJ = `${FJ} in ${UJ}`;
        return (0, XJ.P)(qJ.lobbyName) ? {
          primary: hJ
        } : {
          primary: hJ,
          secondary: `Lobby ${qJ.lobbyName}`
        }
      }
      getCurrentChannelType() {
        const {
          channelId: JJ,
          guildId: cJ
        } = this.getCurrentChannelAndGuild();
        return null !== cJ ? UJ.d.GUILD : null !== JJ ? UJ.d.DM : null
      }
      getRequiredScopeForCurrentChannel() {
        const JJ = this.getCurrentChannelType(),
          cJ = [sJ.APPLICATION_COMMANDS, sJ.IDENTIFY, sJ.EMAIL, sJ.GUILDS, sJ.WRITE_ACTIVITIES];
        switch (JJ) {
          case UJ.d.DM:
          case UJ.d.GUILD:
            return [...cJ];
          default:
            throw new Error(`Unknown Discord channel type: ${JJ}`)
        }
      }
      getCurrentChannelAndGuild() {
        const {
          channelId: JJ,
          guildId: cJ
        } = this.discordSdk;
        return {
          channelId: null !== JJ && void 0 !== JJ ? JJ : null,
          guildId: null !== cJ && void 0 !== cJ ? cJ : null
        }
      }
      getInstanceId() {
        return this.discordSdk.instanceId
      }
      async askDiscordUserForAuthorization() {
        const JJ = this.getRequiredScopeForCurrentChannel(),
          {
            code: cJ
          } = await this.discordSdk.commands.authorize({
            client_id: DJ.c.discordClientID,
            response_type: "code",
            state: "",
            prompt: "none",
            scope: JJ
          });
        return cJ
      }
      getCachedAccessToken() {
        return this.cachedAccessToken
      }
      setCachedAccessToken(JJ) {
        this.cachedAccessToken = JJ
      }
      registerGuild(JJ, cJ) {
        this.guildNameCache[JJ] = cJ
      }
      async authenticate(JJ) {
        return this.discordSdk.commands.authenticate({
          access_token: JJ
        }).then((JJ => null !== JJ))
      }
      async getUserLocale() {
        try {
          const {
            locale: JJ
          } = await this.discordSdk.commands.userSettingsGetLocale();
          return JJ
        } catch (JJ) {
          return console.error("Failed to get user locale from Discord:", JJ.stack), null
        }
      }
      async getChannelName(JJ) {
        return this.discordSdk.commands.getChannel({
          channel_id: JJ
        }).then((JJ => JJ.name)).catch((JJ => "Your Current Discord Chat"))
      }
      async getDiscordContextFromChannelId(JJ) {
        const cJ = await this.getChannelName(JJ);
        return UJ.i.from({
          type: UJ.d.DM,
          channelId: JJ,
          channelName: cJ
        })
      }
      getDiscordContextFromGuildId(JJ) {
        const cJ = this.guildNameCache[JJ];
        return (0, XJ.P)(cJ) ? null : UJ.f.from({
          type: UJ.d.GUILD,
          guildId: JJ,
          guildName: cJ
        })
      }
      async getCurrentDiscordContext() {
        const {
          channelId: JJ,
          guildId: cJ
        } = this.getCurrentChannelAndGuild();
        return null !== cJ ? this.getDiscordContextFromGuildId(cJ) : null !== JJ ? this.getDiscordContextFromChannelId(JJ) : null
      }
      exit(JJ) {
        console.log("Exiting Discord Activity:", JJ), this.discordSdk.close(nJ.CLOSE_NORMAL, JJ)
      }
      isMobilePlatform() {
        return this.discordSdk.platform === FJ.e.MOBILE
      }
      applyDiscordSafeAreaNotch() {
        const JJ = getComputedStyle(document.documentElement),
          cJ = (cJ, ZJ) => {
            const FJ = parseFloat(JJ.getPropertyValue(`--discord-safe-area-inset-${cJ}`));
            return isNaN(FJ) || 0 === ZJ ? 0 : FJ / ZJ * 100
          };
        hJ.d.set({
          notchSize: {
            top: cJ("top", window.innerHeight),
            right: Math.max(cJ("right", window.innerWidth), 7),
            bottom: 0,
            left: cJ("left", window.innerWidth)
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);