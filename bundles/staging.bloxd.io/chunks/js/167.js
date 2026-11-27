export const id = 167;
export const ids = [167];
export const modules = {
  7658: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      BloxdDiscordActivitySdk: () => nr
    });
    var Zr = Qr(7662),
      Wr = Qr(1281),
      ar = Qr(1251),
      jr = Qr(688),
      Ir = Qr(1304),
      fr = Qr(1885),
      Er = Qr(1422),
      pr = Qr(868),
      xr = Qr(26),
      mr = Qr(1264),
      Nr = Qr(3312),
      Ur = function(rr) {
        return rr.APPLICATION_COMMANDS = "applications.commands", rr.IDENTIFY = "identify", rr.EMAIL = "email", rr.GUILDS = "guilds", rr.READ_DM_CHANNELS = "dm_channels.read", rr.WRITE_ACTIVITIES = "rpc.activities.write", rr
      }(Ur || {}),
      tr = function(rr) {
        return rr[rr.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", rr[rr.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", rr[rr.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", rr[rr.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", rr[rr.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", rr[rr.RATELIMITED = 4002] = "RATELIMITED", rr[rr.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", rr[rr.INVALID_VERSION = 4004] = "INVALID_VERSION", rr[rr.INVALID_ENCODING = 4005] = "INVALID_ENCODING", rr
      }(tr || {}),
      hr = function(rr) {
        return rr[rr.PLAYING = 0] = "PLAYING", rr[rr.STREAMING = 1] = "STREAMING", rr[rr.LISTENING = 2] = "LISTENING", rr[rr.WATCHING = 3] = "WATCHING", rr[rr.CUSTOM = 4] = "CUSTOM", rr[rr.COMPETING = 5] = "COMPETING", rr
      }(hr || {});
    const zr = {
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
      Yr = {
        goalRush: "Playing",
        heroesvbrainrots: "Battling",
        hideseek: "Playing",
        bingo: "Playing"
      };
    class nr {
      constructor(rr) {
        this.discordSdk = rr, this.guildNameCache = {}, this.startTime = Date.now(), this.cachedAccessToken = null, this.activityUpdateId = 0
      }
      static async setup() {
        console.log("Setting up Discord SDK with client id", mr.c.discordClientID);
        const rr = new Zr.e(mr.c.discordClientID);
        let Sr = !1;
        setTimeout((() => {
          Sr || (console.warn("Discord SDK took too long to initialize"), (0, fr.reloadBloxd)())
        }), 15e3), await rr.ready(), Sr = !0;
        try {
          const {
            enabled: Sr
          } = await rr.commands.encourageHardwareAcceleration();
          Sr || console.warn("Hardware acceleration not enabled in the Discord client")
        } catch (Wr) {
          console.error("Failed to encourage hardware acceleration in the Discord client", Wr)
        }
        const Qr = new nr(rr);
        return Qr.isMobilePlatform() && (Qr.applyDiscordSafeAreaNotch(), window.addEventListener("resize", (() => {
          Qr.applyDiscordSafeAreaNotch()
        }))), Qr
      }
      async updateActivityDescription(rr) {
        const Sr = ++this.activityUpdateId;
        let Qr, Zr;
        switch (rr) {
          case "homePage":
            Qr = "Chilling in the Main Menu";
            break;
          case "inGame": {
            const rr = await this.getInGameDescriptions();
            Qr = rr.primary, Zr = rr.secondary;
            break
          }
        }
        Sr === this.activityUpdateId && await this.discordSdk.commands.setActivity({
          activity: {
            type: hr.PLAYING,
            details: Qr,
            state: Zr,
            assets: {
              large_image: "icon",
              large_text: Qr
            },
            timestamps: {
              start: this.startTime
            }
          }
        }).catch((rr => {
          console.error(`Failed to update Discord activity rich presence with description="${Qr}":`, rr)
        }))
      }
      async getInGameDescriptions() {
        const rr = (0, Er.b)(),
          {
            verb: Sr,
            title: Qr
          } = await this.getGameVerbAndTitle(rr.requestedGameNameWithVariation);
        if ((0, Er.i)(rr)) return {
          primary: `${Sr} in a Discord World`
        };
        const Zr = `${Sr} in ${Qr}`;
        return (0, jr.L)(rr.lobbyName) ? {
          primary: Zr
        } : {
          primary: Zr,
          secondary: `Lobby ${rr.lobbyName}`
        }
      }
      async getGameVerbAndTitle(rr) {
        var Sr;
        const Qr = "Playing";
        if ((0, jr.L)(rr)) return {
          verb: Qr,
          title: "Bloxd"
        };
        const Zr = (0, pr.k)(rr);
        var Wr;
        if (null !== Zr) return {
          verb: null !== (Wr = Yr[rr]) && void 0 !== Wr ? Wr : zr[Zr.type],
          title: await (0, ar.B)(Ir.b.ENGLISH, Zr.title)
        };
        const fr = await (0, Nr.c)(rr);
        return {
          verb: null !== (Sr = fr && zr[fr.gameCategory]) && void 0 !== Sr ? Sr : Qr,
          title: (null === fr || void 0 === fr ? void 0 : fr.name) || "a Custom World"
        }
      }
      getCurrentChannelType() {
        const {
          channelId: rr,
          guildId: Sr
        } = this.getCurrentChannelAndGuild();
        return null !== Sr ? Wr.e.GUILD : null !== rr ? Wr.e.DM : null
      }
      getRequiredScopeForCurrentChannel() {
        const rr = this.getCurrentChannelType(),
          Sr = [Ur.APPLICATION_COMMANDS, Ur.IDENTIFY, Ur.EMAIL, Ur.GUILDS, Ur.WRITE_ACTIVITIES];
        switch (rr) {
          case Wr.e.DM:
          case Wr.e.GUILD:
            return [...Sr];
          default:
            throw new Error(`Unknown Discord channel type: ${rr}`)
        }
      }
      getCurrentChannelAndGuild() {
        const {
          channelId: rr,
          guildId: Sr
        } = this.discordSdk;
        return {
          channelId: null !== rr && void 0 !== rr ? rr : null,
          guildId: null !== Sr && void 0 !== Sr ? Sr : null
        }
      }
      getInstanceId() {
        return this.discordSdk.instanceId
      }
      async askDiscordUserForAuthorization() {
        const rr = this.getRequiredScopeForCurrentChannel(),
          {
            code: Sr
          } = await this.discordSdk.commands.authorize({
            client_id: mr.c.discordClientID,
            response_type: "code",
            state: "",
            prompt: "none",
            scope: rr
          });
        return Sr
      }
      getCachedAccessToken() {
        return this.cachedAccessToken
      }
      setCachedAccessToken(rr) {
        this.cachedAccessToken = rr
      }
      registerGuild(rr, Sr) {
        this.guildNameCache[rr] = Sr
      }
      async authenticate(rr) {
        return this.discordSdk.commands.authenticate({
          access_token: rr
        }).then((rr => null !== rr))
      }
      async getUserLocale() {
        try {
          const {
            locale: rr
          } = await this.discordSdk.commands.userSettingsGetLocale();
          return rr
        } catch (rr) {
          return console.error("Failed to get user locale from Discord:", rr.stack), null
        }
      }
      async getChannelName(rr) {
        return this.discordSdk.commands.getChannel({
          channel_id: rr
        }).then((rr => rr.name)).catch((rr => "Your Current Discord Chat"))
      }
      async getDiscordContextFromChannelId(rr) {
        const Sr = await this.getChannelName(rr);
        return Wr.m.from({
          type: Wr.e.DM,
          channelId: rr,
          channelName: Sr
        })
      }
      getDiscordContextFromGuildId(rr) {
        const Sr = this.guildNameCache[rr];
        return (0, jr.L)(Sr) ? null : Wr.i.from({
          type: Wr.e.GUILD,
          guildId: rr,
          guildName: Sr
        })
      }
      async getCurrentDiscordContext() {
        const {
          channelId: rr,
          guildId: Sr
        } = this.getCurrentChannelAndGuild();
        return null !== Sr ? this.getDiscordContextFromGuildId(Sr) : null !== rr ? this.getDiscordContextFromChannelId(rr) : null
      }
      exit(rr) {
        console.log("Exiting Discord Activity:", rr), this.discordSdk.close(tr.CLOSE_NORMAL, rr)
      }
      isMobilePlatform() {
        return this.discordSdk.platform === Zr.h.MOBILE
      }
      applyDiscordSafeAreaNotch() {
        const rr = getComputedStyle(document.documentElement),
          Sr = (Sr, Qr) => {
            const Zr = parseFloat(rr.getPropertyValue(`--discord-safe-area-inset-${Sr}`));
            return isNaN(Zr) || 0 === Qr ? 0 : Zr / Qr * 100
          };
        xr.c.set({
          notchSize: {
            top: Sr("top", window.innerHeight),
            right: Math.max(Sr("right", window.innerWidth), 7),
            bottom: 0,
            left: Sr("left", window.innerWidth)
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);