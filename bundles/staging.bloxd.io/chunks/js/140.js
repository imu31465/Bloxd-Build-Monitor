export const id = 140;
export const ids = [140];
export const modules = {
  7843: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      BloxdDiscordActivitySdk: () => ju
    });
    var Eu = yu(7847),
      Ku = yu(1207),
      Qu = yu(1170),
      mu = yu(610),
      Ju = yu(1224),
      Nu = yu(1661),
      Xu = yu(1280),
      Vu = yu(753),
      ru = yu(27),
      Bu = yu(1183),
      xu = function(uu) {
        return uu.APPLICATION_COMMANDS = "applications.commands", uu.IDENTIFY = "identify", uu.EMAIL = "email", uu.GUILDS = "guilds", uu.READ_DM_CHANNELS = "dm_channels.read", uu.WRITE_ACTIVITIES = "rpc.activities.write", uu
      }(xu || {}),
      Su = function(uu) {
        return uu[uu.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", uu[uu.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", uu[uu.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", uu[uu.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", uu[uu.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", uu[uu.RATELIMITED = 4002] = "RATELIMITED", uu[uu.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", uu[uu.INVALID_VERSION = 4004] = "INVALID_VERSION", uu[uu.INVALID_ENCODING = 4005] = "INVALID_ENCODING", uu
      }(Su || {}),
      pu = function(uu) {
        return uu[uu.PLAYING = 0] = "PLAYING", uu[uu.STREAMING = 1] = "STREAMING", uu[uu.LISTENING = 2] = "LISTENING", uu[uu.WATCHING = 3] = "WATCHING", uu[uu.CUSTOM = 4] = "CUSTOM", uu[uu.COMPETING = 5] = "COMPETING", uu
      }(pu || {});
    const Tu = {
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
      Wu = {
        goalRush: "Playing",
        heroesvbrainrots: "Battling",
        hideseek: "Playing",
        bingo: "Playing"
      };
    class ju {
      constructor(uu) {
        this.discordSdk = uu, this.guildNameCache = {}, this.startTime = Date.now(), this.cachedAccessToken = null
      }
      static async setup() {
        console.log("Setting up Discord SDK with client id", Bu.c.discordClientID);
        const uu = new Eu.b(Bu.c.discordClientID);
        let Ru = !1;
        setTimeout((() => {
          Ru || (console.warn("Discord SDK took too long to initialize"), (0, Nu.reloadBloxd)())
        }), 15e3), await uu.ready(), Ru = !0;
        try {
          const {
            enabled: Ru
          } = await uu.commands.encourageHardwareAcceleration();
          Ru || console.warn("Hardware acceleration not enabled in the Discord client")
        } catch (Ku) {
          console.error("Failed to encourage hardware acceleration in the Discord client", Ku)
        }
        const yu = new ju(uu);
        return yu.isMobilePlatform() && (yu.applyDiscordSafeAreaNotch(), window.addEventListener("resize", (() => {
          yu.applyDiscordSafeAreaNotch()
        }))), yu
      }
      async updateActivityDescription(uu) {
        let Ru, yu;
        switch (uu) {
          case "homePage":
            Ru = "Chilling in the Main Menu";
            break;
          case "inGame": {
            const uu = await this.getInGameDescriptions();
            Ru = uu.primary, yu = uu.secondary;
            break
          }
        }
        await this.discordSdk.commands.setActivity({
          activity: {
            type: pu.PLAYING,
            details: Ru,
            state: yu,
            assets: {
              large_image: "icon",
              large_text: Ru
            },
            timestamps: {
              start: this.startTime
            }
          }
        }).catch((uu => {
          console.error(`Failed to update Discord activity rich presence with description="${Ru}":`, uu)
        }))
      }
      async getInGameDescriptions() {
        var uu;
        const {
          requestedGameNameWithVariation: Ru
        } = (0, Xu.c)(), yu = (0, Vu.j)(Ru), Eu = null !== (uu = Wu[Ru]) && void 0 !== uu ? uu : Tu[yu.type], Ku = await (0, Qu.A)(Ju.e.ENGLISH, yu.title), Nu = (0, Xu.c)();
        if ((0, Xu.f)(Nu)) return {
          primary: `${Eu} in a Discord World`
        };
        const ru = `${Eu} in ${Ku}`;
        return (0, mu.E)(Nu.lobbyName) ? {
          primary: ru
        } : {
          primary: ru,
          secondary: `Lobby ${Nu.lobbyName}`
        }
      }
      getCurrentChannelType() {
        const {
          channelId: uu,
          guildId: Ru
        } = this.getCurrentChannelAndGuild();
        return null !== Ru ? Ku.c.GUILD : null !== uu ? Ku.c.DM : null
      }
      getRequiredScopeForCurrentChannel() {
        const uu = this.getCurrentChannelType(),
          Ru = [xu.APPLICATION_COMMANDS, xu.IDENTIFY, xu.EMAIL, xu.GUILDS, xu.WRITE_ACTIVITIES];
        switch (uu) {
          case Ku.c.DM:
          case Ku.c.GUILD:
            return [...Ru];
          default:
            throw new Error(`Unknown Discord channel type: ${uu}`)
        }
      }
      getCurrentChannelAndGuild() {
        const {
          channelId: uu,
          guildId: Ru
        } = this.discordSdk;
        return {
          channelId: null !== uu && void 0 !== uu ? uu : null,
          guildId: null !== Ru && void 0 !== Ru ? Ru : null
        }
      }
      getInstanceId() {
        return this.discordSdk.instanceId
      }
      async askDiscordUserForAuthorization() {
        const uu = this.getRequiredScopeForCurrentChannel(),
          {
            code: Ru
          } = await this.discordSdk.commands.authorize({
            client_id: Bu.c.discordClientID,
            response_type: "code",
            state: "",
            prompt: "none",
            scope: uu
          });
        return Ru
      }
      getCachedAccessToken() {
        return this.cachedAccessToken
      }
      setCachedAccessToken(uu) {
        this.cachedAccessToken = uu
      }
      registerGuild(uu, Ru) {
        this.guildNameCache[uu] = Ru
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
        const Ru = await this.getChannelName(uu);
        return Ku.h.from({
          type: Ku.c.DM,
          channelId: uu,
          channelName: Ru
        })
      }
      getDiscordContextFromGuildId(uu) {
        const Ru = this.guildNameCache[uu];
        return (0, mu.E)(Ru) ? null : Ku.e.from({
          type: Ku.c.GUILD,
          guildId: uu,
          guildName: Ru
        })
      }
      async getCurrentDiscordContext() {
        const {
          channelId: uu,
          guildId: Ru
        } = this.getCurrentChannelAndGuild();
        return null !== Ru ? this.getDiscordContextFromGuildId(Ru) : null !== uu ? this.getDiscordContextFromChannelId(uu) : null
      }
      exit(uu) {
        console.log("Exiting Discord Activity:", uu), this.discordSdk.close(Su.CLOSE_NORMAL, uu)
      }
      isMobilePlatform() {
        return this.discordSdk.platform === Eu.f.MOBILE
      }
      applyDiscordSafeAreaNotch() {
        const uu = getComputedStyle(document.documentElement),
          Ru = (Ru, yu) => {
            const Eu = parseFloat(uu.getPropertyValue(`--discord-safe-area-inset-${Ru}`));
            return isNaN(Eu) || 0 === yu ? 0 : Eu / yu * 100
          };
        ru.d.set({
          notchSize: {
            top: Ru("top", window.innerHeight),
            right: Math.max(Ru("right", window.innerWidth), 7),
            bottom: 0,
            left: Ru("left", window.innerWidth)
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);