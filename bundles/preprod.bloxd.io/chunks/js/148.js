export const id = 148;
export const ids = [148];
export const modules = {
  8224: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      BloxdDiscordActivitySdk: () => tp
    });
    var Op = cp(8232),
      op = cp(1236),
      Ip = cp(1201),
      Sp = cp(640),
      xp = cp(1260),
      Lp = cp(1765),
      Yp = cp(1349),
      Dp = cp(768),
      Ap = cp(25),
      Pp = cp(1087),
      Wp = function(pp) {
        return pp.APPLICATION_COMMANDS = "applications.commands", pp.IDENTIFY = "identify", pp.EMAIL = "email", pp.GUILDS = "guilds", pp.READ_DM_CHANNELS = "dm_channels.read", pp.WRITE_ACTIVITIES = "rpc.activities.write", pp
      }(Wp || {}),
      yp = function(pp) {
        return pp[pp.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", pp[pp.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", pp[pp.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", pp[pp.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", pp[pp.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", pp[pp.RATELIMITED = 4002] = "RATELIMITED", pp[pp.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", pp[pp.INVALID_VERSION = 4004] = "INVALID_VERSION", pp[pp.INVALID_ENCODING = 4005] = "INVALID_ENCODING", pp
      }(yp || {}),
      Up = function(pp) {
        return pp[pp.PLAYING = 0] = "PLAYING", pp[pp.STREAMING = 1] = "STREAMING", pp[pp.LISTENING = 2] = "LISTENING", pp[pp.WATCHING = 3] = "WATCHING", pp[pp.CUSTOM = 4] = "CUSTOM", pp[pp.COMPETING = 5] = "COMPETING", pp
      }(Up || {});
    const wp = {
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
      vp = {
        goalRush: "Playing",
        heroesvbrainrots: "Battling",
        hideseek: "Playing",
        bingo: "Playing"
      };
    class tp {
      constructor(pp) {
        this.discordSdk = pp, this.guildNameCache = {}, this.startTime = Date.now(), this.cachedAccessToken = null
      }
      static async setup() {
        console.log("Setting up Discord SDK with client id", Pp.c.discordClientID);
        const pp = new Op.c(Pp.c.discordClientID);
        let ip = !1;
        setTimeout((() => {
          ip || (console.warn("Discord SDK took too long to initialize"), (0, Lp.reloadBloxd)())
        }), 15e3), await pp.ready(), ip = !0;
        try {
          const {
            enabled: ip
          } = await pp.commands.encourageHardwareAcceleration();
          ip || console.warn("Hardware acceleration not enabled in the Discord client")
        } catch (op) {
          console.error("Failed to encourage hardware acceleration in the Discord client", op)
        }
        const cp = new tp(pp);
        return cp.isMobilePlatform() && (cp.applyDiscordSafeAreaNotch(), window.addEventListener("resize", (() => {
          cp.applyDiscordSafeAreaNotch()
        }))), cp
      }
      async updateActivityDescription(pp) {
        let ip, cp;
        switch (pp) {
          case "homePage":
            ip = "Chilling in the Main Menu";
            break;
          case "inGame": {
            const pp = await this.getInGameDescriptions();
            ip = pp.primary, cp = pp.secondary;
            break
          }
        }
        await this.discordSdk.commands.setActivity({
          activity: {
            type: Up.PLAYING,
            details: ip,
            state: cp,
            assets: {
              large_image: "icon",
              large_text: ip
            },
            timestamps: {
              start: this.startTime
            }
          }
        }).catch((pp => {
          console.error(`Failed to update Discord activity rich presence with description="${ip}":`, pp)
        }))
      }
      async getInGameDescriptions() {
        var pp;
        const {
          requestedGameNameWithVariation: ip
        } = (0, Yp.d)(), cp = (0, Dp.i)(ip), Op = null !== (pp = vp[ip]) && void 0 !== pp ? pp : wp[cp.type], op = await (0, Ip.D)(xp.c.ENGLISH, cp.title), Lp = (0, Yp.d)();
        if ((0, Yp.i)(Lp)) return {
          primary: `${Op} in a Discord World`
        };
        const Ap = `${Op} in ${op}`;
        return (0, Sp.G)(Lp.lobbyName) ? {
          primary: Ap
        } : {
          primary: Ap,
          secondary: `Lobby ${Lp.lobbyName}`
        }
      }
      getCurrentChannelType() {
        const {
          channelId: pp,
          guildId: ip
        } = this.getCurrentChannelAndGuild();
        return null !== ip ? op.c.GUILD : null !== pp ? op.c.DM : null
      }
      getRequiredScopeForCurrentChannel() {
        const pp = this.getCurrentChannelType(),
          ip = [Wp.APPLICATION_COMMANDS, Wp.IDENTIFY, Wp.EMAIL, Wp.GUILDS, Wp.WRITE_ACTIVITIES];
        switch (pp) {
          case op.c.DM:
          case op.c.GUILD:
            return [...ip];
          default:
            throw new Error(`Unknown Discord channel type: ${pp}`)
        }
      }
      getCurrentChannelAndGuild() {
        const {
          channelId: pp,
          guildId: ip
        } = this.discordSdk;
        return {
          channelId: null !== pp && void 0 !== pp ? pp : null,
          guildId: null !== ip && void 0 !== ip ? ip : null
        }
      }
      getInstanceId() {
        return this.discordSdk.instanceId
      }
      async askDiscordUserForAuthorization() {
        const pp = this.getRequiredScopeForCurrentChannel(),
          {
            code: ip
          } = await this.discordSdk.commands.authorize({
            client_id: Pp.c.discordClientID,
            response_type: "code",
            state: "",
            prompt: "none",
            scope: pp
          });
        return ip
      }
      getCachedAccessToken() {
        return this.cachedAccessToken
      }
      setCachedAccessToken(pp) {
        this.cachedAccessToken = pp
      }
      registerGuild(pp, ip) {
        this.guildNameCache[pp] = ip
      }
      async authenticate(pp) {
        return this.discordSdk.commands.authenticate({
          access_token: pp
        }).then((pp => null !== pp))
      }
      async getUserLocale() {
        try {
          const {
            locale: pp
          } = await this.discordSdk.commands.userSettingsGetLocale();
          return pp
        } catch (pp) {
          return console.error("Failed to get user locale from Discord:", pp.stack), null
        }
      }
      async getChannelName(pp) {
        return this.discordSdk.commands.getChannel({
          channel_id: pp
        }).then((pp => pp.name)).catch((pp => "Your Current Discord Chat"))
      }
      async getDiscordContextFromChannelId(pp) {
        const ip = await this.getChannelName(pp);
        return op.g.from({
          type: op.c.DM,
          channelId: pp,
          channelName: ip
        })
      }
      getDiscordContextFromGuildId(pp) {
        const ip = this.guildNameCache[pp];
        return (0, Sp.G)(ip) ? null : op.e.from({
          type: op.c.GUILD,
          guildId: pp,
          guildName: ip
        })
      }
      async getCurrentDiscordContext() {
        const {
          channelId: pp,
          guildId: ip
        } = this.getCurrentChannelAndGuild();
        return null !== ip ? this.getDiscordContextFromGuildId(ip) : null !== pp ? this.getDiscordContextFromChannelId(pp) : null
      }
      exit(pp) {
        console.log("Exiting Discord Activity:", pp), this.discordSdk.close(yp.CLOSE_NORMAL, pp)
      }
      isMobilePlatform() {
        return this.discordSdk.platform === Op.g.MOBILE
      }
      applyDiscordSafeAreaNotch() {
        const pp = getComputedStyle(document.documentElement),
          ip = (ip, cp) => {
            const Op = parseFloat(pp.getPropertyValue(`--discord-safe-area-inset-${ip}`));
            return isNaN(Op) || 0 === cp ? 0 : Op / cp * 100
          };
        Ap.c.set({
          notchSize: {
            top: ip("top", window.innerHeight),
            right: Math.max(ip("right", window.innerWidth), 7),
            bottom: 0,
            left: ip("left", window.innerWidth)
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);