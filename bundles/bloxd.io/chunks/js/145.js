export const id = 145;
export const ids = [145];
export const modules = {
  7913: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      BloxdDiscordActivitySdk: () => pk
    });
    var Dk = ik(7919),
      fk = ik(1212),
      Sk = ik(1172),
      bk = ik(594),
      rk = ik(1223),
      Pk = ik(1688),
      mk = ik(1302),
      Mk = ik(741),
      Kk = ik(22),
      xk = ik(1181),
      nk = function(kk) {
        return kk.APPLICATION_COMMANDS = "applications.commands", kk.IDENTIFY = "identify", kk.EMAIL = "email", kk.GUILDS = "guilds", kk.READ_DM_CHANNELS = "dm_channels.read", kk.WRITE_ACTIVITIES = "rpc.activities.write", kk
      }(nk || {}),
      Uk = function(kk) {
        return kk[kk.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", kk[kk.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", kk[kk.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", kk[kk.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", kk[kk.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", kk[kk.RATELIMITED = 4002] = "RATELIMITED", kk[kk.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", kk[kk.INVALID_VERSION = 4004] = "INVALID_VERSION", kk[kk.INVALID_ENCODING = 4005] = "INVALID_ENCODING", kk
      }(Uk || {}),
      Hk = function(kk) {
        return kk[kk.PLAYING = 0] = "PLAYING", kk[kk.STREAMING = 1] = "STREAMING", kk[kk.LISTENING = 2] = "LISTENING", kk[kk.WATCHING = 3] = "WATCHING", kk[kk.CUSTOM = 4] = "CUSTOM", kk[kk.COMPETING = 5] = "COMPETING", kk
      }(Hk || {});
    const wk = {
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
      lk = {
        goalRush: "Playing",
        heroesvbrainrots: "Battling",
        hideseek: "Playing",
        bingo: "Playing"
      };
    class pk {
      constructor(kk) {
        this.discordSdk = kk, this.guildNameCache = {}, this.startTime = Date.now(), this.cachedAccessToken = null
      }
      static async setup() {
        console.log("Setting up Discord SDK with client id", xk.e.discordClientID);
        const kk = new Dk.b(xk.e.discordClientID);
        let ek = !1;
        setTimeout((() => {
          ek || (console.warn("Discord SDK took too long to initialize"), (0, Pk.reloadBloxd)())
        }), 15e3), await kk.ready(), ek = !0;
        try {
          const {
            enabled: ek
          } = await kk.commands.encourageHardwareAcceleration();
          ek || console.warn("Hardware acceleration not enabled in the Discord client")
        } catch (fk) {
          console.error("Failed to encourage hardware acceleration in the Discord client", fk)
        }
        const ik = new pk(kk);
        return ik.isMobilePlatform() && (ik.applyDiscordSafeAreaNotch(), window.addEventListener("resize", (() => {
          ik.applyDiscordSafeAreaNotch()
        }))), ik
      }
      async updateActivityDescription(kk) {
        let ek, ik;
        switch (kk) {
          case "homePage":
            ek = "Chilling in the Main Menu";
            break;
          case "inGame": {
            const kk = await this.getInGameDescriptions();
            ek = kk.primary, ik = kk.secondary;
            break
          }
        }
        await this.discordSdk.commands.setActivity({
          activity: {
            type: Hk.PLAYING,
            details: ek,
            state: ik,
            assets: {
              large_image: "icon",
              large_text: ek
            },
            timestamps: {
              start: this.startTime
            }
          }
        }).catch((kk => {
          console.error(`Failed to update Discord activity rich presence with description="${ek}":`, kk)
        }))
      }
      async getInGameDescriptions() {
        var kk;
        const {
          requestedGameNameWithVariation: ek
        } = (0, mk.c)(), ik = (0, Mk.l)(ek), Dk = null !== (kk = lk[ek]) && void 0 !== kk ? kk : wk[ik.type], fk = await (0, Sk.A)(rk.b.ENGLISH, ik.title), Pk = (0, mk.c)();
        if ((0, mk.i)(Pk)) return {
          primary: `${Dk} in a Discord World`
        };
        const Kk = `${Dk} in ${fk}`;
        return (0, bk.F)(Pk.lobbyName) ? {
          primary: Kk
        } : {
          primary: Kk,
          secondary: `Lobby ${Pk.lobbyName}`
        }
      }
      getCurrentChannelType() {
        const {
          channelId: kk,
          guildId: ek
        } = this.getCurrentChannelAndGuild();
        return null !== ek ? fk.b.GUILD : null !== kk ? fk.b.DM : null
      }
      getRequiredScopeForCurrentChannel() {
        const kk = this.getCurrentChannelType(),
          ek = [nk.APPLICATION_COMMANDS, nk.IDENTIFY, nk.EMAIL, nk.GUILDS, nk.WRITE_ACTIVITIES];
        switch (kk) {
          case fk.b.DM:
          case fk.b.GUILD:
            return [...ek];
          default:
            throw new Error(`Unknown Discord channel type: ${kk}`)
        }
      }
      getCurrentChannelAndGuild() {
        const {
          channelId: kk,
          guildId: ek
        } = this.discordSdk;
        return {
          channelId: null !== kk && void 0 !== kk ? kk : null,
          guildId: null !== ek && void 0 !== ek ? ek : null
        }
      }
      getInstanceId() {
        return this.discordSdk.instanceId
      }
      async askDiscordUserForAuthorization() {
        const kk = this.getRequiredScopeForCurrentChannel(),
          {
            code: ek
          } = await this.discordSdk.commands.authorize({
            client_id: xk.e.discordClientID,
            response_type: "code",
            state: "",
            prompt: "none",
            scope: kk
          });
        return ek
      }
      getCachedAccessToken() {
        return this.cachedAccessToken
      }
      setCachedAccessToken(kk) {
        this.cachedAccessToken = kk
      }
      registerGuild(kk, ek) {
        this.guildNameCache[kk] = ek
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
        const ek = await this.getChannelName(kk);
        return fk.g.from({
          type: fk.b.DM,
          channelId: kk,
          channelName: ek
        })
      }
      getDiscordContextFromGuildId(kk) {
        const ek = this.guildNameCache[kk];
        return (0, bk.F)(ek) ? null : fk.c.from({
          type: fk.b.GUILD,
          guildId: kk,
          guildName: ek
        })
      }
      async getCurrentDiscordContext() {
        const {
          channelId: kk,
          guildId: ek
        } = this.getCurrentChannelAndGuild();
        return null !== ek ? this.getDiscordContextFromGuildId(ek) : null !== kk ? this.getDiscordContextFromChannelId(kk) : null
      }
      exit(kk) {
        console.log("Exiting Discord Activity:", kk), this.discordSdk.close(Uk.CLOSE_NORMAL, kk)
      }
      isMobilePlatform() {
        return this.discordSdk.platform === Dk.f.MOBILE
      }
      applyDiscordSafeAreaNotch() {
        const kk = getComputedStyle(document.documentElement),
          ek = (ek, ik) => {
            const Dk = parseFloat(kk.getPropertyValue(`--discord-safe-area-inset-${ek}`));
            return isNaN(Dk) || 0 === ik ? 0 : Dk / ik * 100
          };
        Kk.b.set({
          notchSize: {
            top: ek("top", window.innerHeight),
            right: Math.max(ek("right", window.innerWidth), 7),
            bottom: 0,
            left: ek("left", window.innerWidth)
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);