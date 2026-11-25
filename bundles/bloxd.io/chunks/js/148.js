export const id = 148;
export const ids = [148];
export const modules = {
  8324: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      BloxdDiscordActivitySdk: () => bt
    });
    var Ot = Vt(8328),
      qt = Vt(1314),
      Dt = Vt(1286),
      mt = Vt(710),
      dt = Vt(1338),
      jt = Vt(1826),
      Ht = Vt(1423),
      Xt = Vt(839),
      Qt = Vt(26),
      lt = Vt(1169),
      Et = Vt(2427),
      ft = function(tt) {
        return tt.APPLICATION_COMMANDS = "applications.commands", tt.IDENTIFY = "identify", tt.EMAIL = "email", tt.GUILDS = "guilds", tt.READ_DM_CHANNELS = "dm_channels.read", tt.WRITE_ACTIVITIES = "rpc.activities.write", tt
      }(ft || {}),
      wt = function(tt) {
        return tt[tt.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", tt[tt.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", tt[tt.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", tt[tt.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", tt[tt.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", tt[tt.RATELIMITED = 4002] = "RATELIMITED", tt[tt.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", tt[tt.INVALID_VERSION = 4004] = "INVALID_VERSION", tt[tt.INVALID_ENCODING = 4005] = "INVALID_ENCODING", tt
      }(wt || {}),
      yt = function(tt) {
        return tt[tt.PLAYING = 0] = "PLAYING", tt[tt.STREAMING = 1] = "STREAMING", tt[tt.LISTENING = 2] = "LISTENING", tt[tt.WATCHING = 3] = "WATCHING", tt[tt.CUSTOM = 4] = "CUSTOM", tt[tt.COMPETING = 5] = "COMPETING", tt
      }(yt || {});
    const Nt = {
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
      Mt = {
        goalRush: "Playing",
        heroesvbrainrots: "Battling",
        hideseek: "Playing",
        bingo: "Playing"
      };
    class bt {
      constructor(tt) {
        this.discordSdk = tt, this.guildNameCache = {}, this.startTime = Date.now(), this.cachedAccessToken = null, this.activityUpdateId = 0
      }
      static async setup() {
        console.log("Setting up Discord SDK with client id", lt.e.discordClientID);
        const tt = new Ot.c(lt.e.discordClientID);
        let et = !1;
        setTimeout((() => {
          et || (console.warn("Discord SDK took too long to initialize"), (0, jt.reloadBloxd)())
        }), 15e3), await tt.ready(), et = !0;
        try {
          const {
            enabled: et
          } = await tt.commands.encourageHardwareAcceleration();
          et || console.warn("Hardware acceleration not enabled in the Discord client")
        } catch (qt) {
          console.error("Failed to encourage hardware acceleration in the Discord client", qt)
        }
        const Vt = new bt(tt);
        return Vt.isMobilePlatform() && (Vt.applyDiscordSafeAreaNotch(), window.addEventListener("resize", (() => {
          Vt.applyDiscordSafeAreaNotch()
        }))), Vt
      }
      async updateActivityDescription(tt) {
        const et = ++this.activityUpdateId;
        let Vt, Ot;
        switch (tt) {
          case "homePage":
            Vt = "Chilling in the Main Menu";
            break;
          case "inGame": {
            const tt = await this.getInGameDescriptions();
            Vt = tt.primary, Ot = tt.secondary;
            break
          }
        }
        et === this.activityUpdateId && await this.discordSdk.commands.setActivity({
          activity: {
            type: yt.PLAYING,
            details: Vt,
            state: Ot,
            assets: {
              large_image: "icon",
              large_text: Vt
            },
            timestamps: {
              start: this.startTime
            }
          }
        }).catch((tt => {
          console.error(`Failed to update Discord activity rich presence with description="${Vt}":`, tt)
        }))
      }
      async getInGameDescriptions() {
        const tt = (0, Ht.c)(),
          {
            verb: et,
            title: Vt
          } = await this.getGameVerbAndTitle(tt.requestedGameNameWithVariation);
        if ((0, Ht.f)(tt)) return {
          primary: `${et} in a Discord World`
        };
        const Ot = `${et} in ${Vt}`;
        return (0, mt.B)(tt.lobbyName) ? {
          primary: Ot
        } : {
          primary: Ot,
          secondary: `Lobby ${tt.lobbyName}`
        }
      }
      async getGameVerbAndTitle(tt) {
        var et;
        const Vt = "Playing";
        if ((0, mt.B)(tt)) return {
          verb: Vt,
          title: "Bloxd"
        };
        const Ot = (0, Xt.k)(tt);
        var qt;
        if (null !== Ot) return {
          verb: null !== (qt = Mt[tt]) && void 0 !== qt ? qt : Nt[Ot.type],
          title: await (0, Dt.D)(dt.c.ENGLISH, Ot.title)
        };
        const jt = await (0, Et.c)(tt);
        return {
          verb: null !== (et = jt && Nt[jt.gameCategory]) && void 0 !== et ? et : Vt,
          title: (null === jt || void 0 === jt ? void 0 : jt.name) || "a Custom World"
        }
      }
      getCurrentChannelType() {
        const {
          channelId: tt,
          guildId: et
        } = this.getCurrentChannelAndGuild();
        return null !== et ? qt.e.GUILD : null !== tt ? qt.e.DM : null
      }
      getRequiredScopeForCurrentChannel() {
        const tt = this.getCurrentChannelType(),
          et = [ft.APPLICATION_COMMANDS, ft.IDENTIFY, ft.EMAIL, ft.GUILDS, ft.WRITE_ACTIVITIES];
        switch (tt) {
          case qt.e.DM:
          case qt.e.GUILD:
            return [...et];
          default:
            throw new Error(`Unknown Discord channel type: ${tt}`)
        }
      }
      getCurrentChannelAndGuild() {
        const {
          channelId: tt,
          guildId: et
        } = this.discordSdk;
        return {
          channelId: null !== tt && void 0 !== tt ? tt : null,
          guildId: null !== et && void 0 !== et ? et : null
        }
      }
      getInstanceId() {
        return this.discordSdk.instanceId
      }
      async askDiscordUserForAuthorization() {
        const tt = this.getRequiredScopeForCurrentChannel(),
          {
            code: et
          } = await this.discordSdk.commands.authorize({
            client_id: lt.e.discordClientID,
            response_type: "code",
            state: "",
            prompt: "none",
            scope: tt
          });
        return et
      }
      getCachedAccessToken() {
        return this.cachedAccessToken
      }
      setCachedAccessToken(tt) {
        this.cachedAccessToken = tt
      }
      registerGuild(tt, et) {
        this.guildNameCache[tt] = et
      }
      async authenticate(tt) {
        return this.discordSdk.commands.authenticate({
          access_token: tt
        }).then((tt => null !== tt))
      }
      async getUserLocale() {
        try {
          const {
            locale: tt
          } = await this.discordSdk.commands.userSettingsGetLocale();
          return tt
        } catch (tt) {
          return console.error("Failed to get user locale from Discord:", tt.stack), null
        }
      }
      async getChannelName(tt) {
        return this.discordSdk.commands.getChannel({
          channel_id: tt
        }).then((tt => tt.name)).catch((tt => "Your Current Discord Chat"))
      }
      async getDiscordContextFromChannelId(tt) {
        const et = await this.getChannelName(tt);
        return qt.j.from({
          type: qt.e.DM,
          channelId: tt,
          channelName: et
        })
      }
      getDiscordContextFromGuildId(tt) {
        const et = this.guildNameCache[tt];
        return (0, mt.B)(et) ? null : qt.h.from({
          type: qt.e.GUILD,
          guildId: tt,
          guildName: et
        })
      }
      async getCurrentDiscordContext() {
        const {
          channelId: tt,
          guildId: et
        } = this.getCurrentChannelAndGuild();
        return null !== et ? this.getDiscordContextFromGuildId(et) : null !== tt ? this.getDiscordContextFromChannelId(tt) : null
      }
      exit(tt) {
        console.log("Exiting Discord Activity:", tt), this.discordSdk.close(wt.CLOSE_NORMAL, tt)
      }
      isMobilePlatform() {
        return this.discordSdk.platform === Ot.e.MOBILE
      }
      applyDiscordSafeAreaNotch() {
        const tt = getComputedStyle(document.documentElement),
          et = (et, Vt) => {
            const Ot = parseFloat(tt.getPropertyValue(`--discord-safe-area-inset-${et}`));
            return isNaN(Ot) || 0 === Vt ? 0 : Ot / Vt * 100
          };
        Qt.b.set({
          notchSize: {
            top: et("top", window.innerHeight),
            right: Math.max(et("right", window.innerWidth), 7),
            bottom: 0,
            left: et("left", window.innerWidth)
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);