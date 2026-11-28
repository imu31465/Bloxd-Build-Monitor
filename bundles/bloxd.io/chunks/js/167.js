export const id = 167;
export const ids = [167];
export const modules = {
  7645: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      BloxdDiscordActivitySdk: () => pd
    });
    var Wd = md(7653),
      Fd = md(1289),
      Rd = md(1238),
      Xd = md(701),
      Kd = md(1306),
      hd = md(1890),
      vd = md(1415),
      Qd = md(870),
      td = md(29),
      od = md(1262),
      Nd = md(3301),
      qd = function(dd) {
        return dd.APPLICATION_COMMANDS = "applications.commands", dd.IDENTIFY = "identify", dd.EMAIL = "email", dd.GUILDS = "guilds", dd.READ_DM_CHANNELS = "dm_channels.read", dd.WRITE_ACTIVITIES = "rpc.activities.write", dd
      }(qd || {}),
      Hd = function(dd) {
        return dd[dd.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", dd[dd.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", dd[dd.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", dd[dd.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", dd[dd.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", dd[dd.RATELIMITED = 4002] = "RATELIMITED", dd[dd.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", dd[dd.INVALID_VERSION = 4004] = "INVALID_VERSION", dd[dd.INVALID_ENCODING = 4005] = "INVALID_ENCODING", dd
      }(Hd || {}),
      yd = function(dd) {
        return dd[dd.PLAYING = 0] = "PLAYING", dd[dd.STREAMING = 1] = "STREAMING", dd[dd.LISTENING = 2] = "LISTENING", dd[dd.WATCHING = 3] = "WATCHING", dd[dd.CUSTOM = 4] = "CUSTOM", dd[dd.COMPETING = 5] = "COMPETING", dd
      }(yd || {});
    const bd = {
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
      Td = {
        goalRush: "Playing",
        heroesvbrainrots: "Battling",
        hideseek: "Playing",
        bingo: "Playing"
      };
    class pd {
      constructor(dd) {
        this.discordSdk = dd, this.guildNameCache = {}, this.startTime = Date.now(), this.cachedAccessToken = null, this.activityUpdateId = 0
      }
      static async setup() {
        console.log("Setting up Discord SDK with client id", od.b.discordClientID);
        const dd = new Wd.e(od.b.discordClientID);
        let Od = !1;
        setTimeout((() => {
          Od || (console.warn("Discord SDK took too long to initialize"), (0, hd.reloadBloxd)())
        }), 15e3), await dd.ready(), Od = !0;
        try {
          const {
            enabled: Od
          } = await dd.commands.encourageHardwareAcceleration();
          Od || console.warn("Hardware acceleration not enabled in the Discord client")
        } catch (Fd) {
          console.error("Failed to encourage hardware acceleration in the Discord client", Fd)
        }
        const md = new pd(dd);
        return md.isMobilePlatform() && (md.applyDiscordSafeAreaNotch(), window.addEventListener("resize", (() => {
          md.applyDiscordSafeAreaNotch()
        }))), md
      }
      async updateActivityDescription(dd) {
        const Od = ++this.activityUpdateId;
        let md, Wd;
        switch (dd) {
          case "homePage":
            md = "Chilling in the Main Menu";
            break;
          case "inGame": {
            const dd = await this.getInGameDescriptions();
            md = dd.primary, Wd = dd.secondary;
            break
          }
        }
        Od === this.activityUpdateId && await this.discordSdk.commands.setActivity({
          activity: {
            type: yd.PLAYING,
            details: md,
            state: Wd,
            assets: {
              large_image: "icon",
              large_text: md
            },
            timestamps: {
              start: this.startTime
            }
          }
        }).catch((dd => {
          console.error(`Failed to update Discord activity rich presence with description="${md}":`, dd)
        }))
      }
      async getInGameDescriptions() {
        const dd = (0, vd.b)(),
          {
            verb: Od,
            title: md
          } = await this.getGameVerbAndTitle(dd.requestedGameNameWithVariation);
        if ((0, vd.e)(dd)) return {
          primary: `${Od} in a Discord World`
        };
        const Wd = `${Od} in ${md}`;
        return (0, Xd.O)(dd.lobbyName) ? {
          primary: Wd
        } : {
          primary: Wd,
          secondary: `Lobby ${dd.lobbyName}`
        }
      }
      async getGameVerbAndTitle(dd) {
        var Od;
        const md = "Playing";
        if ((0, Xd.O)(dd)) return {
          verb: md,
          title: "Bloxd"
        };
        const Wd = (0, Qd.j)(dd);
        var Fd;
        if (null !== Wd) return {
          verb: null !== (Fd = Td[dd]) && void 0 !== Fd ? Fd : bd[Wd.type],
          title: await (0, Rd.D)(Kd.c.ENGLISH, Wd.title)
        };
        const hd = await (0, Nd.d)(dd);
        return {
          verb: null !== (Od = hd && bd[hd.gameCategory]) && void 0 !== Od ? Od : md,
          title: (null === hd || void 0 === hd ? void 0 : hd.name) || "a Custom World"
        }
      }
      getCurrentChannelType() {
        const {
          channelId: dd,
          guildId: Od
        } = this.getCurrentChannelAndGuild();
        return null !== Od ? Fd.d.GUILD : null !== dd ? Fd.d.DM : null
      }
      getRequiredScopeForCurrentChannel() {
        const dd = this.getCurrentChannelType(),
          Od = [qd.APPLICATION_COMMANDS, qd.IDENTIFY, qd.EMAIL, qd.GUILDS, qd.WRITE_ACTIVITIES];
        switch (dd) {
          case Fd.d.DM:
          case Fd.d.GUILD:
            return [...Od];
          default:
            throw new Error(`Unknown Discord channel type: ${dd}`)
        }
      }
      getCurrentChannelAndGuild() {
        const {
          channelId: dd,
          guildId: Od
        } = this.discordSdk;
        return {
          channelId: null !== dd && void 0 !== dd ? dd : null,
          guildId: null !== Od && void 0 !== Od ? Od : null
        }
      }
      getInstanceId() {
        return this.discordSdk.instanceId
      }
      async askDiscordUserForAuthorization() {
        const dd = this.getRequiredScopeForCurrentChannel(),
          {
            code: Od
          } = await this.discordSdk.commands.authorize({
            client_id: od.b.discordClientID,
            response_type: "code",
            state: "",
            prompt: "none",
            scope: dd
          });
        return Od
      }
      getCachedAccessToken() {
        return this.cachedAccessToken
      }
      setCachedAccessToken(dd) {
        this.cachedAccessToken = dd
      }
      registerGuild(dd, Od) {
        this.guildNameCache[dd] = Od
      }
      async authenticate(dd) {
        return this.discordSdk.commands.authenticate({
          access_token: dd
        }).then((dd => null !== dd))
      }
      async getUserLocale() {
        try {
          const {
            locale: dd
          } = await this.discordSdk.commands.userSettingsGetLocale();
          return dd
        } catch (dd) {
          return console.error("Failed to get user locale from Discord:", dd.stack), null
        }
      }
      async getChannelName(dd) {
        return this.discordSdk.commands.getChannel({
          channel_id: dd
        }).then((dd => dd.name)).catch((dd => "Your Current Discord Chat"))
      }
      async getDiscordContextFromChannelId(dd) {
        const Od = await this.getChannelName(dd);
        return Fd.l.from({
          type: Fd.d.DM,
          channelId: dd,
          channelName: Od
        })
      }
      getDiscordContextFromGuildId(dd) {
        const Od = this.guildNameCache[dd];
        return (0, Xd.O)(Od) ? null : Fd.h.from({
          type: Fd.d.GUILD,
          guildId: dd,
          guildName: Od
        })
      }
      async getCurrentDiscordContext() {
        const {
          channelId: dd,
          guildId: Od
        } = this.getCurrentChannelAndGuild();
        return null !== Od ? this.getDiscordContextFromGuildId(Od) : null !== dd ? this.getDiscordContextFromChannelId(dd) : null
      }
      exit(dd) {
        console.log("Exiting Discord Activity:", dd), this.discordSdk.close(Hd.CLOSE_NORMAL, dd)
      }
      isMobilePlatform() {
        return this.discordSdk.platform === Wd.i.MOBILE
      }
      applyDiscordSafeAreaNotch() {
        const dd = getComputedStyle(document.documentElement),
          Od = (Od, md) => {
            const Wd = parseFloat(dd.getPropertyValue(`--discord-safe-area-inset-${Od}`));
            return isNaN(Wd) || 0 === md ? 0 : Wd / md * 100
          };
        td.e.set({
          notchSize: {
            top: Od("top", window.innerHeight),
            right: Math.max(Od("right", window.innerWidth), 7),
            bottom: 0,
            left: Od("left", window.innerWidth)
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);