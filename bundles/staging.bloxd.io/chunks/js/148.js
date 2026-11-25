export const id = 148;
export const ids = [148];
export const modules = {
  8309: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      BloxdDiscordActivitySdk: () => Mu
    });
    var su = ju(8311),
      Uu = ju(1285),
      Zu = ju(1244),
      Xu = ju(649),
      lu = ju(1303),
      qu = ju(1779),
      fu = ju(1369),
      Cu = ju(822),
      bu = ju(22),
      cu = ju(1135),
      Nu = ju(2474),
      Ou = function(uu) {
        return uu.APPLICATION_COMMANDS = "applications.commands", uu.IDENTIFY = "identify", uu.EMAIL = "email", uu.GUILDS = "guilds", uu.READ_DM_CHANNELS = "dm_channels.read", uu.WRITE_ACTIVITIES = "rpc.activities.write", uu
      }(Ou || {}),
      Yu = function(uu) {
        return uu[uu.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", uu[uu.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", uu[uu.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", uu[uu.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", uu[uu.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", uu[uu.RATELIMITED = 4002] = "RATELIMITED", uu[uu.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", uu[uu.INVALID_VERSION = 4004] = "INVALID_VERSION", uu[uu.INVALID_ENCODING = 4005] = "INVALID_ENCODING", uu
      }(Yu || {}),
      hu = function(uu) {
        return uu[uu.PLAYING = 0] = "PLAYING", uu[uu.STREAMING = 1] = "STREAMING", uu[uu.LISTENING = 2] = "LISTENING", uu[uu.WATCHING = 3] = "WATCHING", uu[uu.CUSTOM = 4] = "CUSTOM", uu[uu.COMPETING = 5] = "COMPETING", uu
      }(hu || {});
    const Du = {
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
      gu = {
        goalRush: "Playing",
        heroesvbrainrots: "Battling",
        hideseek: "Playing",
        bingo: "Playing"
      };
    class Mu {
      constructor(uu) {
        this.discordSdk = uu, this.guildNameCache = {}, this.startTime = Date.now(), this.cachedAccessToken = null, this.activityUpdateId = 0
      }
      static async setup() {
        console.log("Setting up Discord SDK with client id", cu.e.discordClientID);
        const uu = new su.e(cu.e.discordClientID);
        let Eu = !1;
        setTimeout((() => {
          Eu || (console.warn("Discord SDK took too long to initialize"), (0, qu.reloadBloxd)())
        }), 15e3), await uu.ready(), Eu = !0;
        try {
          const {
            enabled: Eu
          } = await uu.commands.encourageHardwareAcceleration();
          Eu || console.warn("Hardware acceleration not enabled in the Discord client")
        } catch (Uu) {
          console.error("Failed to encourage hardware acceleration in the Discord client", Uu)
        }
        const ju = new Mu(uu);
        return ju.isMobilePlatform() && (ju.applyDiscordSafeAreaNotch(), window.addEventListener("resize", (() => {
          ju.applyDiscordSafeAreaNotch()
        }))), ju
      }
      async updateActivityDescription(uu) {
        const Eu = ++this.activityUpdateId;
        let ju, su;
        switch (uu) {
          case "homePage":
            ju = "Chilling in the Main Menu";
            break;
          case "inGame": {
            const uu = await this.getInGameDescriptions();
            ju = uu.primary, su = uu.secondary;
            break
          }
        }
        Eu === this.activityUpdateId && await this.discordSdk.commands.setActivity({
          activity: {
            type: hu.PLAYING,
            details: ju,
            state: su,
            assets: {
              large_image: "icon",
              large_text: ju
            },
            timestamps: {
              start: this.startTime
            }
          }
        }).catch((uu => {
          console.error(`Failed to update Discord activity rich presence with description="${ju}":`, uu)
        }))
      }
      async getInGameDescriptions() {
        const uu = (0, fu.b)(),
          {
            verb: Eu,
            title: ju
          } = await this.getGameVerbAndTitle(uu.requestedGameNameWithVariation);
        if ((0, fu.g)(uu)) return {
          primary: `${Eu} in a Discord World`
        };
        const su = `${Eu} in ${ju}`;
        return (0, Xu.H)(uu.lobbyName) ? {
          primary: su
        } : {
          primary: su,
          secondary: `Lobby ${uu.lobbyName}`
        }
      }
      async getGameVerbAndTitle(uu) {
        var Eu;
        const ju = "Playing";
        if ((0, Xu.H)(uu)) return {
          verb: ju,
          title: "Bloxd"
        };
        const su = (0, Cu.j)(uu);
        var Uu;
        if (null !== su) return {
          verb: null !== (Uu = gu[uu]) && void 0 !== Uu ? Uu : Du[su.type],
          title: await (0, Zu.z)(lu.e.ENGLISH, su.title)
        };
        const qu = await (0, Nu.e)(uu);
        return {
          verb: null !== (Eu = qu && Du[qu.gameCategory]) && void 0 !== Eu ? Eu : ju,
          title: (null === qu || void 0 === qu ? void 0 : qu.name) || "a Custom World"
        }
      }
      getCurrentChannelType() {
        const {
          channelId: uu,
          guildId: Eu
        } = this.getCurrentChannelAndGuild();
        return null !== Eu ? Uu.d.GUILD : null !== uu ? Uu.d.DM : null
      }
      getRequiredScopeForCurrentChannel() {
        const uu = this.getCurrentChannelType(),
          Eu = [Ou.APPLICATION_COMMANDS, Ou.IDENTIFY, Ou.EMAIL, Ou.GUILDS, Ou.WRITE_ACTIVITIES];
        switch (uu) {
          case Uu.d.DM:
          case Uu.d.GUILD:
            return [...Eu];
          default:
            throw new Error(`Unknown Discord channel type: ${uu}`)
        }
      }
      getCurrentChannelAndGuild() {
        const {
          channelId: uu,
          guildId: Eu
        } = this.discordSdk;
        return {
          channelId: null !== uu && void 0 !== uu ? uu : null,
          guildId: null !== Eu && void 0 !== Eu ? Eu : null
        }
      }
      getInstanceId() {
        return this.discordSdk.instanceId
      }
      async askDiscordUserForAuthorization() {
        const uu = this.getRequiredScopeForCurrentChannel(),
          {
            code: Eu
          } = await this.discordSdk.commands.authorize({
            client_id: cu.e.discordClientID,
            response_type: "code",
            state: "",
            prompt: "none",
            scope: uu
          });
        return Eu
      }
      getCachedAccessToken() {
        return this.cachedAccessToken
      }
      setCachedAccessToken(uu) {
        this.cachedAccessToken = uu
      }
      registerGuild(uu, Eu) {
        this.guildNameCache[uu] = Eu
      }
      async authenticate(uu) {
        return this.discordSdk.commands.authenticate({
          access_token: uu
        }).then((uu => null !== uu))
      }
      async getUserLocale() {
        try {
          const {
            locale: uu
          } = await this.discordSdk.commands.userSettingsGetLocale();
          return uu
        } catch (uu) {
          return console.error("Failed to get user locale from Discord:", uu.stack), null
        }
      }
      async getChannelName(uu) {
        return this.discordSdk.commands.getChannel({
          channel_id: uu
        }).then((uu => uu.name)).catch((uu => "Your Current Discord Chat"))
      }
      async getDiscordContextFromChannelId(uu) {
        const Eu = await this.getChannelName(uu);
        return Uu.h.from({
          type: Uu.d.DM,
          channelId: uu,
          channelName: Eu
        })
      }
      getDiscordContextFromGuildId(uu) {
        const Eu = this.guildNameCache[uu];
        return (0, Xu.H)(Eu) ? null : Uu.f.from({
          type: Uu.d.GUILD,
          guildId: uu,
          guildName: Eu
        })
      }
      async getCurrentDiscordContext() {
        const {
          channelId: uu,
          guildId: Eu
        } = this.getCurrentChannelAndGuild();
        return null !== Eu ? this.getDiscordContextFromGuildId(Eu) : null !== uu ? this.getDiscordContextFromChannelId(uu) : null
      }
      exit(uu) {
        console.log("Exiting Discord Activity:", uu), this.discordSdk.close(Yu.CLOSE_NORMAL, uu)
      }
      isMobilePlatform() {
        return this.discordSdk.platform === su.f.MOBILE
      }
      applyDiscordSafeAreaNotch() {
        const uu = getComputedStyle(document.documentElement),
          Eu = (Eu, ju) => {
            const su = parseFloat(uu.getPropertyValue(`--discord-safe-area-inset-${Eu}`));
            return isNaN(su) || 0 === ju ? 0 : su / ju * 100
          };
        bu.d.set({
          notchSize: {
            top: Eu("top", window.innerHeight),
            right: Math.max(Eu("right", window.innerWidth), 7),
            bottom: 0,
            left: Eu("left", window.innerWidth)
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);