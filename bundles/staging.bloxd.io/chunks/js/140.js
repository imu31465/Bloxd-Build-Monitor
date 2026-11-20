export const id = 140;
export const ids = [140];
export const modules = {
  7744: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      BloxdDiscordActivitySdk: () => Wk
    });
    var Rk = Bk(7751),
      tk = Bk(1175),
      ak = Bk(1149),
      Xk = Bk(606),
      bk = Bk(1203),
      wk = Bk(1650),
      dk = Bk(1267),
      sk = Bk(729),
      Vk = Bk(22),
      Jk = Bk(1157),
      Ak = function(kk) {
        return kk.APPLICATION_COMMANDS = "applications.commands", kk.IDENTIFY = "identify", kk.EMAIL = "email", kk.GUILDS = "guilds", kk.READ_DM_CHANNELS = "dm_channels.read", kk.WRITE_ACTIVITIES = "rpc.activities.write", kk
      }(Ak || {}),
      ek = function(kk) {
        return kk[kk.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", kk[kk.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", kk[kk.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", kk[kk.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", kk[kk.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", kk[kk.RATELIMITED = 4002] = "RATELIMITED", kk[kk.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", kk[kk.INVALID_VERSION = 4004] = "INVALID_VERSION", kk[kk.INVALID_ENCODING = 4005] = "INVALID_ENCODING", kk
      }(ek || {}),
      yk = function(kk) {
        return kk[kk.PLAYING = 0] = "PLAYING", kk[kk.STREAMING = 1] = "STREAMING", kk[kk.LISTENING = 2] = "LISTENING", kk[kk.WATCHING = 3] = "WATCHING", kk[kk.CUSTOM = 4] = "CUSTOM", kk[kk.COMPETING = 5] = "COMPETING", kk
      }(yk || {});
    const fk = {
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
      mk = {
        goalRush: "Playing",
        heroesvbrainrots: "Battling",
        hideseek: "Playing",
        bingo: "Playing"
      };
    class Wk {
      constructor(kk) {
        this.discordSdk = kk, this.guildNameCache = {}, this.startTime = Date.now(), this.cachedAccessToken = null
      }
      static async setup() {
        console.log("Setting up Discord SDK with client id", Jk.b.discordClientID);
        const kk = new Rk.c(Jk.b.discordClientID);
        let Fk = !1;
        setTimeout((() => {
          Fk || (console.warn("Discord SDK took too long to initialize"), (0, wk.reloadBloxd)())
        }), 15e3), await kk.ready(), Fk = !0;
        try {
          const {
            enabled: Fk
          } = await kk.commands.encourageHardwareAcceleration();
          Fk || console.warn("Hardware acceleration not enabled in the Discord client")
        } catch (tk) {
          console.error("Failed to encourage hardware acceleration in the Discord client", tk)
        }
        const Bk = new Wk(kk);
        return Bk.isMobilePlatform() && (Bk.applyDiscordSafeAreaNotch(), window.addEventListener("resize", (() => {
          Bk.applyDiscordSafeAreaNotch()
        }))), Bk
      }
      async updateActivityDescription(kk) {
        let Fk, Bk;
        switch (kk) {
          case "homePage":
            Fk = "Chilling in the Main Menu";
            break;
          case "inGame": {
            const kk = await this.getInGameDescriptions();
            Fk = kk.primary, Bk = kk.secondary;
            break
          }
        }
        await this.discordSdk.commands.setActivity({
          activity: {
            type: yk.PLAYING,
            details: Fk,
            state: Bk,
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
        } = (0, dk.e)(), Bk = (0, sk.m)(Fk), Rk = null !== (kk = mk[Fk]) && void 0 !== kk ? kk : fk[Bk.type], tk = await (0, ak.t)(bk.b.ENGLISH, Bk.title), wk = (0, dk.e)();
        if ((0, dk.l)(wk)) return {
          primary: `${Rk} in a Discord World`
        };
        const Vk = `${Rk} in ${tk}`;
        return (0, Xk.F)(wk.lobbyName) ? {
          primary: Vk
        } : {
          primary: Vk,
          secondary: `Lobby ${wk.lobbyName}`
        }
      }
      getCurrentChannelType() {
        const {
          channelId: kk,
          guildId: Fk
        } = this.getCurrentChannelAndGuild();
        return null !== Fk ? tk.b.GUILD : null !== kk ? tk.b.DM : null
      }
      getRequiredScopeForCurrentChannel() {
        const kk = this.getCurrentChannelType(),
          Fk = [Ak.APPLICATION_COMMANDS, Ak.IDENTIFY, Ak.EMAIL, Ak.GUILDS, Ak.WRITE_ACTIVITIES];
        switch (kk) {
          case tk.b.DM:
          case tk.b.GUILD:
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
            client_id: Jk.b.discordClientID,
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
        return tk.j.from({
          type: tk.b.DM,
          channelId: kk,
          channelName: Fk
        })
      }
      getDiscordContextFromGuildId(kk) {
        const Fk = this.guildNameCache[kk];
        return (0, Xk.F)(Fk) ? null : tk.f.from({
          type: tk.b.GUILD,
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
        return this.discordSdk.platform === Rk.f.MOBILE
      }
      applyDiscordSafeAreaNotch() {
        const kk = getComputedStyle(document.documentElement),
          Fk = (Fk, Bk) => {
            const Rk = parseFloat(kk.getPropertyValue(`--discord-safe-area-inset-${Fk}`));
            return isNaN(Rk) || 0 === Bk ? 0 : Rk / Bk * 100
          };
        Vk.c.set({
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