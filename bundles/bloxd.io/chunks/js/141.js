export const id = 141;
export const ids = [141];
export const modules = {
  7947: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      BloxdDiscordActivitySdk: () => Id
    });
    var pd = kd(7955),
      Nd = kd(1250),
      Wd = kd(1211),
      Pd = kd(610),
      Zd = kd(1273),
      gd = kd(1753),
      Cd = kd(1348),
      Kd = kd(756),
      od = kd(22),
      ld = kd(1227),
      Qd = function(dd) {
        return dd.APPLICATION_COMMANDS = "applications.commands", dd.IDENTIFY = "identify", dd.EMAIL = "email", dd.GUILDS = "guilds", dd.READ_DM_CHANNELS = "dm_channels.read", dd.WRITE_ACTIVITIES = "rpc.activities.write", dd
      }(Qd || {}),
      Ld = function(dd) {
        return dd[dd.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", dd[dd.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", dd[dd.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", dd[dd.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", dd[dd.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", dd[dd.RATELIMITED = 4002] = "RATELIMITED", dd[dd.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", dd[dd.INVALID_VERSION = 4004] = "INVALID_VERSION", dd[dd.INVALID_ENCODING = 4005] = "INVALID_ENCODING", dd
      }(Ld || {}),
      Od = function(dd) {
        return dd[dd.PLAYING = 0] = "PLAYING", dd[dd.STREAMING = 1] = "STREAMING", dd[dd.LISTENING = 2] = "LISTENING", dd[dd.WATCHING = 3] = "WATCHING", dd[dd.CUSTOM = 4] = "CUSTOM", dd[dd.COMPETING = 5] = "COMPETING", dd
      }(Od || {});
    const ed = {
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
      Rd = {
        goalRush: "Playing",
        heroesvbrainrots: "Battling",
        hideseek: "Playing",
        bingo: "Playing"
      };
    class Id {
      constructor(dd) {
        this.discordSdk = dd, this.guildNameCache = {}, this.startTime = Date.now(), this.cachedAccessToken = null
      }
      static async setup() {
        console.log("Setting up Discord SDK with client id", ld.b.discordClientID);
        const dd = new pd.d(ld.b.discordClientID);
        let Jd = !1;
        setTimeout((() => {
          Jd || (console.warn("Discord SDK took too long to initialize"), (0, gd.reloadBloxd)())
        }), 15e3), await dd.ready(), Jd = !0;
        try {
          const {
            enabled: Jd
          } = await dd.commands.encourageHardwareAcceleration();
          Jd || console.warn("Hardware acceleration not enabled in the Discord client")
        } catch (Nd) {
          console.error("Failed to encourage hardware acceleration in the Discord client", Nd)
        }
        const kd = new Id(dd);
        return kd.isMobilePlatform() && (kd.applyDiscordSafeAreaNotch(), window.addEventListener("resize", (() => {
          kd.applyDiscordSafeAreaNotch()
        }))), kd
      }
      async updateActivityDescription(dd) {
        let Jd, kd;
        switch (dd) {
          case "homePage":
            Jd = "Chilling in the Main Menu";
            break;
          case "inGame": {
            const dd = await this.getInGameDescriptions();
            Jd = dd.primary, kd = dd.secondary;
            break
          }
        }
        await this.discordSdk.commands.setActivity({
          activity: {
            type: Od.PLAYING,
            details: Jd,
            state: kd,
            assets: {
              large_image: "icon",
              large_text: Jd
            },
            timestamps: {
              start: this.startTime
            }
          }
        }).catch((dd => {
          console.error(`Failed to update Discord activity rich presence with description="${Jd}":`, dd)
        }))
      }
      async getInGameDescriptions() {
        var dd;
        const {
          requestedGameNameWithVariation: Jd
        } = (0, Cd.d)(), kd = (0, Kd.o)(Jd), pd = null !== (dd = Rd[Jd]) && void 0 !== dd ? dd : ed[kd.type], Nd = await (0, Wd.z)(Zd.b.ENGLISH, kd.title), gd = (0, Cd.d)();
        if ((0, Cd.k)(gd)) return {
          primary: `${pd} in a Discord World`
        };
        const od = `${pd} in ${Nd}`;
        return (0, Pd.I)(gd.lobbyName) ? {
          primary: od
        } : {
          primary: od,
          secondary: `Lobby ${gd.lobbyName}`
        }
      }
      getCurrentChannelType() {
        const {
          channelId: dd,
          guildId: Jd
        } = this.getCurrentChannelAndGuild();
        return null !== Jd ? Nd.e.GUILD : null !== dd ? Nd.e.DM : null
      }
      getRequiredScopeForCurrentChannel() {
        const dd = this.getCurrentChannelType(),
          Jd = [Qd.APPLICATION_COMMANDS, Qd.IDENTIFY, Qd.EMAIL, Qd.GUILDS, Qd.WRITE_ACTIVITIES];
        switch (dd) {
          case Nd.e.DM:
          case Nd.e.GUILD:
            return [...Jd];
          default:
            throw new Error(`Unknown Discord channel type: ${dd}`)
        }
      }
      getCurrentChannelAndGuild() {
        const {
          channelId: dd,
          guildId: Jd
        } = this.discordSdk;
        return {
          channelId: null !== dd && void 0 !== dd ? dd : null,
          guildId: null !== Jd && void 0 !== Jd ? Jd : null
        }
      }
      getInstanceId() {
        return this.discordSdk.instanceId
      }
      async askDiscordUserForAuthorization() {
        const dd = this.getRequiredScopeForCurrentChannel(),
          {
            code: Jd
          } = await this.discordSdk.commands.authorize({
            client_id: ld.b.discordClientID,
            response_type: "code",
            state: "",
            prompt: "none",
            scope: dd
          });
        return Jd
      }
      getCachedAccessToken() {
        return this.cachedAccessToken
      }
      setCachedAccessToken(dd) {
        this.cachedAccessToken = dd
      }
      registerGuild(dd, Jd) {
        this.guildNameCache[dd] = Jd
      }
      async authenticate(dd) {
        return this.discordSdk.commands.authenticate({
          access_token: dd
        }).then((dd => null !== dd))
      }
      async getUserLocale() {
        try {
          const {
            locale: dd
          } = await this.discordSdk.commands.userSettingsGetLocale();
          return dd
        } catch (dd) {
          return console.error("Failed to get user locale from Discord:", dd.stack), null
        }
      }
      async getChannelName(dd) {
        return this.discordSdk.commands.getChannel({
          channel_id: dd
        }).then((dd => dd.name)).catch((dd => "Your Current Discord Chat"))
      }
      async getDiscordContextFromChannelId(dd) {
        const Jd = await this.getChannelName(dd);
        return Nd.k.from({
          type: Nd.e.DM,
          channelId: dd,
          channelName: Jd
        })
      }
      getDiscordContextFromGuildId(dd) {
        const Jd = this.guildNameCache[dd];
        return (0, Pd.I)(Jd) ? null : Nd.g.from({
          type: Nd.e.GUILD,
          guildId: dd,
          guildName: Jd
        })
      }
      async getCurrentDiscordContext() {
        const {
          channelId: dd,
          guildId: Jd
        } = this.getCurrentChannelAndGuild();
        return null !== Jd ? this.getDiscordContextFromGuildId(Jd) : null !== dd ? this.getDiscordContextFromChannelId(dd) : null
      }
      exit(dd) {
        console.log("Exiting Discord Activity:", dd), this.discordSdk.close(Ld.CLOSE_NORMAL, dd)
      }
      isMobilePlatform() {
        return this.discordSdk.platform === pd.e.MOBILE
      }
      applyDiscordSafeAreaNotch() {
        const dd = getComputedStyle(document.documentElement),
          Jd = (Jd, kd) => {
            const pd = parseFloat(dd.getPropertyValue(`--discord-safe-area-inset-${Jd}`));
            return isNaN(pd) || 0 === kd ? 0 : pd / kd * 100
          };
        od.d.set({
          notchSize: {
            top: Jd("top", window.innerHeight),
            right: Math.max(Jd("right", window.innerWidth), 7),
            bottom: 0,
            left: Jd("left", window.innerWidth)
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);