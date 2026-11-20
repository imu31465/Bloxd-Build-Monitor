export const id = 140;
export const ids = [140];
export const modules = {
  7786: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      BloxdDiscordActivitySdk: () => cv
    });
    var hv = Pv(7795),
      Sv = Pv(1212),
      ev = Pv(1175),
      gv = Pv(626),
      pv = Pv(1234),
      dv = Pv(1692),
      Nv = Pv(1306),
      lv = Pv(763),
      Tv = Pv(22),
      Wv = Pv(1192),
      wv = function(vv) {
        return vv.APPLICATION_COMMANDS = "applications.commands", vv.IDENTIFY = "identify", vv.EMAIL = "email", vv.GUILDS = "guilds", vv.READ_DM_CHANNELS = "dm_channels.read", vv.WRITE_ACTIVITIES = "rpc.activities.write", vv
      }(wv || {}),
      av = function(vv) {
        return vv[vv.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", vv[vv.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", vv[vv.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", vv[vv.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", vv[vv.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", vv[vv.RATELIMITED = 4002] = "RATELIMITED", vv[vv.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", vv[vv.INVALID_VERSION = 4004] = "INVALID_VERSION", vv[vv.INVALID_ENCODING = 4005] = "INVALID_ENCODING", vv
      }(av || {}),
      sv = function(vv) {
        return vv[vv.PLAYING = 0] = "PLAYING", vv[vv.STREAMING = 1] = "STREAMING", vv[vv.LISTENING = 2] = "LISTENING", vv[vv.WATCHING = 3] = "WATCHING", vv[vv.CUSTOM = 4] = "CUSTOM", vv[vv.COMPETING = 5] = "COMPETING", vv
      }(sv || {});
    const Cv = {
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
      iv = {
        goalRush: "Playing",
        heroesvbrainrots: "Battling",
        hideseek: "Playing",
        bingo: "Playing"
      };
    class cv {
      constructor(vv) {
        this.discordSdk = vv, this.guildNameCache = {}, this.startTime = Date.now(), this.cachedAccessToken = null
      }
      static async setup() {
        console.log("Setting up Discord SDK with client id", Wv.b.discordClientID);
        const vv = new hv.c(Wv.b.discordClientID);
        let zv = !1;
        setTimeout((() => {
          zv || (console.warn("Discord SDK took too long to initialize"), (0, dv.reloadBloxd)())
        }), 15e3), await vv.ready(), zv = !0;
        try {
          const {
            enabled: zv
          } = await vv.commands.encourageHardwareAcceleration();
          zv || console.warn("Hardware acceleration not enabled in the Discord client")
        } catch (Sv) {
          console.error("Failed to encourage hardware acceleration in the Discord client", Sv)
        }
        const Pv = new cv(vv);
        return Pv.isMobilePlatform() && (Pv.applyDiscordSafeAreaNotch(), window.addEventListener("resize", (() => {
          Pv.applyDiscordSafeAreaNotch()
        }))), Pv
      }
      async updateActivityDescription(vv) {
        let zv, Pv;
        switch (vv) {
          case "homePage":
            zv = "Chilling in the Main Menu";
            break;
          case "inGame": {
            const vv = await this.getInGameDescriptions();
            zv = vv.primary, Pv = vv.secondary;
            break
          }
        }
        await this.discordSdk.commands.setActivity({
          activity: {
            type: sv.PLAYING,
            details: zv,
            state: Pv,
            assets: {
              large_image: "icon",
              large_text: zv
            },
            timestamps: {
              start: this.startTime
            }
          }
        }).catch((vv => {
          console.error(`Failed to update Discord activity rich presence with description="${zv}":`, vv)
        }))
      }
      async getInGameDescriptions() {
        var vv;
        const {
          requestedGameNameWithVariation: zv
        } = (0, Nv.c)(), Pv = (0, lv.n)(zv), hv = null !== (vv = iv[zv]) && void 0 !== vv ? vv : Cv[Pv.type], Sv = await (0, ev.u)(pv.b.ENGLISH, Pv.title), dv = (0, Nv.c)();
        if ((0, Nv.h)(dv)) return {
          primary: `${hv} in a Discord World`
        };
        const Tv = `${hv} in ${Sv}`;
        return (0, gv.N)(dv.lobbyName) ? {
          primary: Tv
        } : {
          primary: Tv,
          secondary: `Lobby ${dv.lobbyName}`
        }
      }
      getCurrentChannelType() {
        const {
          channelId: vv,
          guildId: zv
        } = this.getCurrentChannelAndGuild();
        return null !== zv ? Sv.c.GUILD : null !== vv ? Sv.c.DM : null
      }
      getRequiredScopeForCurrentChannel() {
        const vv = this.getCurrentChannelType(),
          zv = [wv.APPLICATION_COMMANDS, wv.IDENTIFY, wv.EMAIL, wv.GUILDS, wv.WRITE_ACTIVITIES];
        switch (vv) {
          case Sv.c.DM:
          case Sv.c.GUILD:
            return [...zv];
          default:
            throw new Error(`Unknown Discord channel type: ${vv}`)
        }
      }
      getCurrentChannelAndGuild() {
        const {
          channelId: vv,
          guildId: zv
        } = this.discordSdk;
        return {
          channelId: null !== vv && void 0 !== vv ? vv : null,
          guildId: null !== zv && void 0 !== zv ? zv : null
        }
      }
      getInstanceId() {
        return this.discordSdk.instanceId
      }
      async askDiscordUserForAuthorization() {
        const vv = this.getRequiredScopeForCurrentChannel(),
          {
            code: zv
          } = await this.discordSdk.commands.authorize({
            client_id: Wv.b.discordClientID,
            response_type: "code",
            state: "",
            prompt: "none",
            scope: vv
          });
        return zv
      }
      getCachedAccessToken() {
        return this.cachedAccessToken
      }
      setCachedAccessToken(vv) {
        this.cachedAccessToken = vv
      }
      registerGuild(vv, zv) {
        this.guildNameCache[vv] = zv
      }
      async authenticate(vv) {
        return this.discordSdk.commands.authenticate({
          access_token: vv
        }).then((vv => null !== vv))
      }
      async getUserLocale() {
        try {
          const {
            locale: vv
          } = await this.discordSdk.commands.userSettingsGetLocale();
          return vv
        } catch (vv) {
          return console.error("Failed to get user locale from Discord:", vv.stack), null
        }
      }
      async getChannelName(vv) {
        return this.discordSdk.commands.getChannel({
          channel_id: vv
        }).then((vv => vv.name)).catch((vv => "Your Current Discord Chat"))
      }
      async getDiscordContextFromChannelId(vv) {
        const zv = await this.getChannelName(vv);
        return Sv.i.from({
          type: Sv.c.DM,
          channelId: vv,
          channelName: zv
        })
      }
      getDiscordContextFromGuildId(vv) {
        const zv = this.guildNameCache[vv];
        return (0, gv.N)(zv) ? null : Sv.e.from({
          type: Sv.c.GUILD,
          guildId: vv,
          guildName: zv
        })
      }
      async getCurrentDiscordContext() {
        const {
          channelId: vv,
          guildId: zv
        } = this.getCurrentChannelAndGuild();
        return null !== zv ? this.getDiscordContextFromGuildId(zv) : null !== vv ? this.getDiscordContextFromChannelId(vv) : null
      }
      exit(vv) {
        console.log("Exiting Discord Activity:", vv), this.discordSdk.close(av.CLOSE_NORMAL, vv)
      }
      isMobilePlatform() {
        return this.discordSdk.platform === hv.f.MOBILE
      }
      applyDiscordSafeAreaNotch() {
        const vv = getComputedStyle(document.documentElement),
          zv = (zv, Pv) => {
            const hv = parseFloat(vv.getPropertyValue(`--discord-safe-area-inset-${zv}`));
            return isNaN(hv) || 0 === Pv ? 0 : hv / Pv * 100
          };
        Tv.c.set({
          notchSize: {
            top: zv("top", window.innerHeight),
            right: Math.max(zv("right", window.innerWidth), 7),
            bottom: 0,
            left: zv("left", window.innerWidth)
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);