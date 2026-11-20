export const id = 141;
export const ids = [141];
export const modules = {
  7998: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      BloxdDiscordActivitySdk: () => Hq
    });
    var Yq = gq(8004),
      lq = gq(1216),
      Oq = gq(1183),
      mq = gq(598),
      xq = gq(1241),
      Aq = gq(1710),
      cq = gq(1308),
      uq = gq(729),
      Bq = gq(24),
      Wq = gq(1201),
      Nq = function(qq) {
        return qq.APPLICATION_COMMANDS = "applications.commands", qq.IDENTIFY = "identify", qq.EMAIL = "email", qq.GUILDS = "guilds", qq.READ_DM_CHANNELS = "dm_channels.read", qq.WRITE_ACTIVITIES = "rpc.activities.write", qq
      }(Nq || {}),
      aq = function(qq) {
        return qq[qq.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", qq[qq.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", qq[qq.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", qq[qq.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", qq[qq.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", qq[qq.RATELIMITED = 4002] = "RATELIMITED", qq[qq.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", qq[qq.INVALID_VERSION = 4004] = "INVALID_VERSION", qq[qq.INVALID_ENCODING = 4005] = "INVALID_ENCODING", qq
      }(aq || {}),
      Vq = function(qq) {
        return qq[qq.PLAYING = 0] = "PLAYING", qq[qq.STREAMING = 1] = "STREAMING", qq[qq.LISTENING = 2] = "LISTENING", qq[qq.WATCHING = 3] = "WATCHING", qq[qq.CUSTOM = 4] = "CUSTOM", qq[qq.COMPETING = 5] = "COMPETING", qq
      }(Vq || {});
    const dq = {
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
      jq = {
        goalRush: "Playing",
        heroesvbrainrots: "Battling",
        hideseek: "Playing",
        bingo: "Playing"
      };
    class Hq {
      constructor(qq) {
        this.discordSdk = qq, this.guildNameCache = {}, this.startTime = Date.now(), this.cachedAccessToken = null
      }
      static async setup() {
        console.log("Setting up Discord SDK with client id", Wq.d.discordClientID);
        const qq = new Yq.d(Wq.d.discordClientID);
        let Eq = !1;
        setTimeout((() => {
          Eq || (console.warn("Discord SDK took too long to initialize"), (0, Aq.reloadBloxd)())
        }), 15e3), await qq.ready(), Eq = !0;
        try {
          const {
            enabled: Eq
          } = await qq.commands.encourageHardwareAcceleration();
          Eq || console.warn("Hardware acceleration not enabled in the Discord client")
        } catch (lq) {
          console.error("Failed to encourage hardware acceleration in the Discord client", lq)
        }
        const gq = new Hq(qq);
        return gq.isMobilePlatform() && (gq.applyDiscordSafeAreaNotch(), window.addEventListener("resize", (() => {
          gq.applyDiscordSafeAreaNotch()
        }))), gq
      }
      async updateActivityDescription(qq) {
        let Eq, gq;
        switch (qq) {
          case "homePage":
            Eq = "Chilling in the Main Menu";
            break;
          case "inGame": {
            const qq = await this.getInGameDescriptions();
            Eq = qq.primary, gq = qq.secondary;
            break
          }
        }
        await this.discordSdk.commands.setActivity({
          activity: {
            type: Vq.PLAYING,
            details: Eq,
            state: gq,
            assets: {
              large_image: "icon",
              large_text: Eq
            },
            timestamps: {
              start: this.startTime
            }
          }
        }).catch((qq => {
          console.error(`Failed to update Discord activity rich presence with description="${Eq}":`, qq)
        }))
      }
      async getInGameDescriptions() {
        var qq;
        const {
          requestedGameNameWithVariation: Eq
        } = (0, cq.e)(), gq = (0, uq.m)(Eq), Yq = null !== (qq = jq[Eq]) && void 0 !== qq ? qq : dq[gq.type], lq = await (0, Oq.u)(xq.d.ENGLISH, gq.title), Aq = (0, cq.e)();
        if ((0, cq.k)(Aq)) return {
          primary: `${Yq} in a Discord World`
        };
        const Bq = `${Yq} in ${lq}`;
        return (0, mq.H)(Aq.lobbyName) ? {
          primary: Bq
        } : {
          primary: Bq,
          secondary: `Lobby ${Aq.lobbyName}`
        }
      }
      getCurrentChannelType() {
        const {
          channelId: qq,
          guildId: Eq
        } = this.getCurrentChannelAndGuild();
        return null !== Eq ? lq.c.GUILD : null !== qq ? lq.c.DM : null
      }
      getRequiredScopeForCurrentChannel() {
        const qq = this.getCurrentChannelType(),
          Eq = [Nq.APPLICATION_COMMANDS, Nq.IDENTIFY, Nq.EMAIL, Nq.GUILDS, Nq.WRITE_ACTIVITIES];
        switch (qq) {
          case lq.c.DM:
          case lq.c.GUILD:
            return [...Eq];
          default:
            throw new Error(`Unknown Discord channel type: ${qq}`)
        }
      }
      getCurrentChannelAndGuild() {
        const {
          channelId: qq,
          guildId: Eq
        } = this.discordSdk;
        return {
          channelId: null !== qq && void 0 !== qq ? qq : null,
          guildId: null !== Eq && void 0 !== Eq ? Eq : null
        }
      }
      getInstanceId() {
        return this.discordSdk.instanceId
      }
      async askDiscordUserForAuthorization() {
        const qq = this.getRequiredScopeForCurrentChannel(),
          {
            code: Eq
          } = await this.discordSdk.commands.authorize({
            client_id: Wq.d.discordClientID,
            response_type: "code",
            state: "",
            prompt: "none",
            scope: qq
          });
        return Eq
      }
      getCachedAccessToken() {
        return this.cachedAccessToken
      }
      setCachedAccessToken(qq) {
        this.cachedAccessToken = qq
      }
      registerGuild(qq, Eq) {
        this.guildNameCache[qq] = Eq
      }
      async authenticate(qq) {
        return this.discordSdk.commands.authenticate({
          access_token: qq
        }).then((qq => null !== qq))
      }
      async getUserLocale() {
        try {
          const {
            locale: qq
          } = await this.discordSdk.commands.userSettingsGetLocale();
          return qq
        } catch (qq) {
          return console.error("Failed to get user locale from Discord:", qq.stack), null
        }
      }
      async getChannelName(qq) {
        return this.discordSdk.commands.getChannel({
          channel_id: qq
        }).then((qq => qq.name)).catch((qq => "Your Current Discord Chat"))
      }
      async getDiscordContextFromChannelId(qq) {
        const Eq = await this.getChannelName(qq);
        return lq.h.from({
          type: lq.c.DM,
          channelId: qq,
          channelName: Eq
        })
      }
      getDiscordContextFromGuildId(qq) {
        const Eq = this.guildNameCache[qq];
        return (0, mq.H)(Eq) ? null : lq.f.from({
          type: lq.c.GUILD,
          guildId: qq,
          guildName: Eq
        })
      }
      async getCurrentDiscordContext() {
        const {
          channelId: qq,
          guildId: Eq
        } = this.getCurrentChannelAndGuild();
        return null !== Eq ? this.getDiscordContextFromGuildId(Eq) : null !== qq ? this.getDiscordContextFromChannelId(qq) : null
      }
      exit(qq) {
        console.log("Exiting Discord Activity:", qq), this.discordSdk.close(aq.CLOSE_NORMAL, qq)
      }
      isMobilePlatform() {
        return this.discordSdk.platform === Yq.h.MOBILE
      }
      applyDiscordSafeAreaNotch() {
        const qq = getComputedStyle(document.documentElement),
          Eq = (Eq, gq) => {
            const Yq = parseFloat(qq.getPropertyValue(`--discord-safe-area-inset-${Eq}`));
            return isNaN(Yq) || 0 === gq ? 0 : Yq / gq * 100
          };
        Bq.b.set({
          notchSize: {
            top: Eq("top", window.innerHeight),
            right: Math.max(Eq("right", window.innerWidth), 7),
            bottom: 0,
            left: Eq("left", window.innerWidth)
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);