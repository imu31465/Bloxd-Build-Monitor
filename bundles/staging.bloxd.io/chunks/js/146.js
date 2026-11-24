export const id = 146;
export const ids = [146];
export const modules = {
  8077: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      BloxdDiscordActivitySdk: () => xk
    });
    var Xk = Ik(8085),
      Tk = Ik(1220),
      ik = Ik(1179),
      yk = Ik(628),
      lk = Ik(1241),
      ak = Ik(1665),
      qk = Ik(1301),
      Lk = Ik(768),
      tk = Ik(25),
      Zk = Ik(1078),
      jk = function(kk) {
        return kk.APPLICATION_COMMANDS = "applications.commands", kk.IDENTIFY = "identify", kk.EMAIL = "email", kk.GUILDS = "guilds", kk.READ_DM_CHANNELS = "dm_channels.read", kk.WRITE_ACTIVITIES = "rpc.activities.write", kk
      }(jk || {}),
      ek = function(kk) {
        return kk[kk.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", kk[kk.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", kk[kk.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", kk[kk.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", kk[kk.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", kk[kk.RATELIMITED = 4002] = "RATELIMITED", kk[kk.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", kk[kk.INVALID_VERSION = 4004] = "INVALID_VERSION", kk[kk.INVALID_ENCODING = 4005] = "INVALID_ENCODING", kk
      }(ek || {}),
      wk = function(kk) {
        return kk[kk.PLAYING = 0] = "PLAYING", kk[kk.STREAMING = 1] = "STREAMING", kk[kk.LISTENING = 2] = "LISTENING", kk[kk.WATCHING = 3] = "WATCHING", kk[kk.CUSTOM = 4] = "CUSTOM", kk[kk.COMPETING = 5] = "COMPETING", kk
      }(wk || {});
    const Hk = {
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
      Jk = {
        goalRush: "Playing",
        heroesvbrainrots: "Battling",
        hideseek: "Playing",
        bingo: "Playing"
      };
    class xk {
      constructor(kk) {
        this.discordSdk = kk, this.guildNameCache = {}, this.startTime = Date.now(), this.cachedAccessToken = null
      }
      static async setup() {
        console.log("Setting up Discord SDK with client id", Zk.e.discordClientID);
        const kk = new Xk.e(Zk.e.discordClientID);
        let Fk = !1;
        setTimeout((() => {
          Fk || (console.warn("Discord SDK took too long to initialize"), (0, ak.reloadBloxd)())
        }), 15e3), await kk.ready(), Fk = !0;
        try {
          const {
            enabled: Fk
          } = await kk.commands.encourageHardwareAcceleration();
          Fk || console.warn("Hardware acceleration not enabled in the Discord client")
        } catch (Tk) {
          console.error("Failed to encourage hardware acceleration in the Discord client", Tk)
        }
        const Ik = new xk(kk);
        return Ik.isMobilePlatform() && (Ik.applyDiscordSafeAreaNotch(), window.addEventListener("resize", (() => {
          Ik.applyDiscordSafeAreaNotch()
        }))), Ik
      }
      async updateActivityDescription(kk) {
        let Fk, Ik;
        switch (kk) {
          case "homePage":
            Fk = "Chilling in the Main Menu";
            break;
          case "inGame": {
            const kk = await this.getInGameDescriptions();
            Fk = kk.primary, Ik = kk.secondary;
            break
          }
        }
        await this.discordSdk.commands.setActivity({
          activity: {
            type: wk.PLAYING,
            details: Fk,
            state: Ik,
            assets: {
              large_image: "icon",
              large_text: Fk
            },
            timestamps: {
              start: this.startTime
            }
          }
        }).catch((kk => {
          console.error(`Failed to update Discord activity rich presence with description="${Fk}":`, kk)
        }))
      }
      async getInGameDescriptions() {
        var kk;
        const {
          requestedGameNameWithVariation: Fk
        } = (0, qk.d)(), Ik = (0, Lk.m)(Fk), Xk = null !== (kk = Jk[Fk]) && void 0 !== kk ? kk : Hk[Ik.type], Tk = await (0, ik.x)(lk.c.ENGLISH, Ik.title), ak = (0, qk.d)();
        if ((0, qk.l)(ak)) return {
          primary: `${Xk} in a Discord World`
        };
        const tk = `${Xk} in ${Tk}`;
        return (0, yk.Q)(ak.lobbyName) ? {
          primary: tk
        } : {
          primary: tk,
          secondary: `Lobby ${ak.lobbyName}`
        }
      }
      getCurrentChannelType() {
        const {
          channelId: kk,
          guildId: Fk
        } = this.getCurrentChannelAndGuild();
        return null !== Fk ? Tk.b.GUILD : null !== kk ? Tk.b.DM : null
      }
      getRequiredScopeForCurrentChannel() {
        const kk = this.getCurrentChannelType(),
          Fk = [jk.APPLICATION_COMMANDS, jk.IDENTIFY, jk.EMAIL, jk.GUILDS, jk.WRITE_ACTIVITIES];
        switch (kk) {
          case Tk.b.DM:
          case Tk.b.GUILD:
            return [...Fk];
          default:
            throw new Error(`Unknown Discord channel type: ${kk}`)
        }
      }
      getCurrentChannelAndGuild() {
        const {
          channelId: kk,
          guildId: Fk
        } = this.discordSdk;
        return {
          channelId: null !== kk && void 0 !== kk ? kk : null,
          guildId: null !== Fk && void 0 !== Fk ? Fk : null
        }
      }
      getInstanceId() {
        return this.discordSdk.instanceId
      }
      async askDiscordUserForAuthorization() {
        const kk = this.getRequiredScopeForCurrentChannel(),
          {
            code: Fk
          } = await this.discordSdk.commands.authorize({
            client_id: Zk.e.discordClientID,
            response_type: "code",
            state: "",
            prompt: "none",
            scope: kk
          });
        return Fk
      }
      getCachedAccessToken() {
        return this.cachedAccessToken
      }
      setCachedAccessToken(kk) {
        this.cachedAccessToken = kk
      }
      registerGuild(kk, Fk) {
        this.guildNameCache[kk] = Fk
      }
      async authenticate(kk) {
        return this.discordSdk.commands.authenticate({
          access_token: kk
        }).then((kk => null !== kk))
      }
      async getUserLocale() {
        try {
          const {
            locale: kk
          } = await this.discordSdk.commands.userSettingsGetLocale();
          return kk
        } catch (kk) {
          return console.error("Failed to get user locale from Discord:", kk.stack), null
        }
      }
      async getChannelName(kk) {
        return this.discordSdk.commands.getChannel({
          channel_id: kk
        }).then((kk => kk.name)).catch((kk => "Your Current Discord Chat"))
      }
      async getDiscordContextFromChannelId(kk) {
        const Fk = await this.getChannelName(kk);
        return Tk.g.from({
          type: Tk.b.DM,
          channelId: kk,
          channelName: Fk
        })
      }
      getDiscordContextFromGuildId(kk) {
        const Fk = this.guildNameCache[kk];
        return (0, yk.Q)(Fk) ? null : Tk.e.from({
          type: Tk.b.GUILD,
          guildId: kk,
          guildName: Fk
        })
      }
      async getCurrentDiscordContext() {
        const {
          channelId: kk,
          guildId: Fk
        } = this.getCurrentChannelAndGuild();
        return null !== Fk ? this.getDiscordContextFromGuildId(Fk) : null !== kk ? this.getDiscordContextFromChannelId(kk) : null
      }
      exit(kk) {
        console.log("Exiting Discord Activity:", kk), this.discordSdk.close(ek.CLOSE_NORMAL, kk)
      }
      isMobilePlatform() {
        return this.discordSdk.platform === Xk.h.MOBILE
      }
      applyDiscordSafeAreaNotch() {
        const kk = getComputedStyle(document.documentElement),
          Fk = (Fk, Ik) => {
            const Xk = parseFloat(kk.getPropertyValue(`--discord-safe-area-inset-${Fk}`));
            return isNaN(Xk) || 0 === Ik ? 0 : Xk / Ik * 100
          };
        tk.d.set({
          notchSize: {
            top: Fk("top", window.innerHeight),
            right: Math.max(Fk("right", window.innerWidth), 7),
            bottom: 0,
            left: Fk("left", window.innerWidth)
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);