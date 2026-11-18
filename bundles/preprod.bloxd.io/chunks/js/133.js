export const id = 133;
export const ids = [133];
export const modules = {
  7250: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      BloxdDiscordActivitySdk: () => mb
    });
    var Uy = Wy(7253),
      hy = Wy(1086),
      fy = Wy(1042),
      Zy = Wy(547),
      cb = Wy(1115),
      Py = Wy(1496),
      oy = Wy(1177),
      By = Wy(615),
      Ky = Wy(19),
      ey = Wy(1057),
      qb = function(yb) {
        return yb.APPLICATION_COMMANDS = "applications.commands", yb.IDENTIFY = "identify", yb.EMAIL = "email", yb.GUILDS = "guilds", yb.READ_DM_CHANNELS = "dm_channels.read", yb.WRITE_ACTIVITIES = "rpc.activities.write", yb
      }(qb || {}),
      sy = function(yb) {
        return yb[yb.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", yb[yb.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", yb[yb.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", yb[yb.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", yb[yb.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", yb[yb.RATELIMITED = 4002] = "RATELIMITED", yb[yb.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", yb[yb.INVALID_VERSION = 4004] = "INVALID_VERSION", yb[yb.INVALID_ENCODING = 4005] = "INVALID_ENCODING", yb
      }(sy || {}),
      Sy = function(yb) {
        return yb[yb.PLAYING = 0] = "PLAYING", yb[yb.STREAMING = 1] = "STREAMING", yb[yb.LISTENING = 2] = "LISTENING", yb[yb.WATCHING = 3] = "WATCHING", yb[yb.CUSTOM = 4] = "CUSTOM", yb[yb.COMPETING = 5] = "COMPETING", yb
      }(Sy || {});
    const Ey = {
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
      ly = {
        goalRush: "Playing",
        heroesvbrainrots: "Battling",
        hideseek: "Playing",
        bingo: "Playing"
      };
    class mb {
      constructor(yb) {
        this.discordSdk = yb, this.guildNameCache = {}, this.startTime = Date.now(), this.cachedAccessToken = null
      }
      static async setup() {
        console.log("Setting up Discord SDK with client id", ey.b.discordClientID);
        const yb = new Uy.c(ey.b.discordClientID);
        let bb = !1;
        setTimeout((() => {
          bb || (console.warn("Discord SDK took too long to initialize"), (0, Py.reloadBloxd)())
        }), 15e3), await yb.ready(), bb = !0;
        try {
          const {
            enabled: bb
          } = await yb.commands.encourageHardwareAcceleration();
          bb || console.warn("Hardware acceleration not enabled in the Discord client")
        } catch (hy) {
          console.error("Failed to encourage hardware acceleration in the Discord client", hy)
        }
        const Wy = new mb(yb);
        return Wy.isMobilePlatform() && (Wy.applyDiscordSafeAreaNotch(), window.addEventListener("resize", (() => {
          Wy.applyDiscordSafeAreaNotch()
        }))), Wy
      }
      async updateActivityDescription(yb) {
        let bb, Wy;
        switch (yb) {
          case "homePage":
            bb = "Chilling in the Main Menu";
            break;
          case "inGame": {
            const yb = await this.getInGameDescriptions();
            bb = yb.primary, Wy = yb.secondary;
            break
          }
        }
        await this.discordSdk.commands.setActivity({
          activity: {
            type: Sy.PLAYING,
            details: bb,
            state: Wy,
            assets: {
              large_image: "icon",
              large_text: bb
            },
            timestamps: {
              start: this.startTime
            }
          }
        }).catch((yb => {
          console.error(`Failed to update Discord activity rich presence with description="${bb}":`, yb)
        }))
      }
      async getInGameDescriptions() {
        var yb;
        const {
          requestedGameNameWithVariation: bb
        } = (0, oy.e)(), Wy = (0, By.j)(bb), Uy = null !== (yb = ly[bb]) && void 0 !== yb ? yb : Ey[Wy.type], hy = await (0, fy.C)(cb.e.ENGLISH, Wy.title), Py = (0, oy.e)();
        if ((0, oy.h)(Py)) return {
          primary: `${Uy} in a Discord World`
        };
        const Ky = `${Uy} in ${hy}`;
        return (0, Zy.D)(Py.lobbyName) ? {
          primary: Ky
        } : {
          primary: Ky,
          secondary: `Lobby ${Py.lobbyName}`
        }
      }
      getCurrentChannelType() {
        const {
          channelId: yb,
          guildId: bb
        } = this.getCurrentChannelAndGuild();
        return null !== bb ? hy.c.GUILD : null !== yb ? hy.c.DM : null
      }
      getRequiredScopeForCurrentChannel() {
        const yb = this.getCurrentChannelType(),
          bb = [qb.APPLICATION_COMMANDS, qb.IDENTIFY, qb.EMAIL, qb.GUILDS, qb.WRITE_ACTIVITIES];
        switch (yb) {
          case hy.c.DM:
          case hy.c.GUILD:
            return [...bb];
          default:
            throw new Error(`Unknown Discord channel type: ${yb}`)
        }
      }
      getCurrentChannelAndGuild() {
        const {
          channelId: yb,
          guildId: bb
        } = this.discordSdk;
        return {
          channelId: null !== yb && void 0 !== yb ? yb : null,
          guildId: null !== bb && void 0 !== bb ? bb : null
        }
      }
      getInstanceId() {
        return this.discordSdk.instanceId
      }
      async askDiscordUserForAuthorization() {
        const yb = this.getRequiredScopeForCurrentChannel(),
          {
            code: bb
          } = await this.discordSdk.commands.authorize({
            client_id: ey.b.discordClientID,
            response_type: "code",
            state: "",
            prompt: "none",
            scope: yb
          });
        return bb
      }
      getCachedAccessToken() {
        return this.cachedAccessToken
      }
      setCachedAccessToken(yb) {
        this.cachedAccessToken = yb
      }
      registerGuild(yb, bb) {
        this.guildNameCache[yb] = bb
      }
      async authenticate(yb) {
        return this.discordSdk.commands.authenticate({
          access_token: yb
        }).then((yb => null !== yb))
      }
      async getUserLocale() {
        try {
          const {
            locale: yb
          } = await this.discordSdk.commands.userSettingsGetLocale();
          return yb
        } catch (yb) {
          return console.error("Failed to get user locale from Discord:", yb.stack), null
        }
      }
      async getChannelName(yb) {
        return this.discordSdk.commands.getChannel({
          channel_id: yb
        }).then((yb => yb.name)).catch((yb => "Your Current Discord Chat"))
      }
      async getDiscordContextFromChannelId(yb) {
        const bb = await this.getChannelName(yb);
        return hy.j.from({
          type: hy.c.DM,
          channelId: yb,
          channelName: bb
        })
      }
      getDiscordContextFromGuildId(yb) {
        const bb = this.guildNameCache[yb];
        return (0, Zy.D)(bb) ? null : hy.g.from({
          type: hy.c.GUILD,
          guildId: yb,
          guildName: bb
        })
      }
      async getCurrentDiscordContext() {
        const {
          channelId: yb,
          guildId: bb
        } = this.getCurrentChannelAndGuild();
        return null !== bb ? this.getDiscordContextFromGuildId(bb) : null !== yb ? this.getDiscordContextFromChannelId(yb) : null
      }
      exit(yb) {
        console.log("Exiting Discord Activity:", yb), this.discordSdk.close(sy.CLOSE_NORMAL, yb)
      }
      isMobilePlatform() {
        return this.discordSdk.platform === Uy.f.MOBILE
      }
      applyDiscordSafeAreaNotch() {
        const yb = getComputedStyle(document.documentElement),
          bb = (bb, Wy) => {
            const Uy = parseFloat(yb.getPropertyValue(`--discord-safe-area-inset-${bb}`));
            return isNaN(Uy) || 0 === Wy ? 0 : Uy / Wy * 100
          };
        Ky.d.set({
          notchSize: {
            top: bb("top", window.innerHeight),
            right: Math.max(bb("right", window.innerWidth), 7),
            bottom: 0,
            left: bb("left", window.innerWidth)
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);