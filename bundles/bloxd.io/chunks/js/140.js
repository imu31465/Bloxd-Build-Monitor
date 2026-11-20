export const id = 140;
export const ids = [140];
export const modules = {
  7715: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      BloxdDiscordActivitySdk: () => Cb
    });
    var kb = sb(7720),
      Wb = sb(1241),
      ab = sb(1197),
      Tb = sb(628),
      Ub = sb(1258),
      Ib = sb(1704),
      Hb = sb(1312),
      fb = sb(760),
      Mb = sb(19),
      Xb = sb(1217),
      nb = function(bb) {
        return bb.APPLICATION_COMMANDS = "applications.commands", bb.IDENTIFY = "identify", bb.EMAIL = "email", bb.GUILDS = "guilds", bb.READ_DM_CHANNELS = "dm_channels.read", bb.WRITE_ACTIVITIES = "rpc.activities.write", bb
      }(nb || {}),
      mb = function(bb) {
        return bb[bb.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", bb[bb.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", bb[bb.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", bb[bb.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", bb[bb.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", bb[bb.RATELIMITED = 4002] = "RATELIMITED", bb[bb.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", bb[bb.INVALID_VERSION = 4004] = "INVALID_VERSION", bb[bb.INVALID_ENCODING = 4005] = "INVALID_ENCODING", bb
      }(mb || {}),
      lb = function(bb) {
        return bb[bb.PLAYING = 0] = "PLAYING", bb[bb.STREAMING = 1] = "STREAMING", bb[bb.LISTENING = 2] = "LISTENING", bb[bb.WATCHING = 3] = "WATCHING", bb[bb.CUSTOM = 4] = "CUSTOM", bb[bb.COMPETING = 5] = "COMPETING", bb
      }(lb || {});
    const Qb = {
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
      eb = {
        goalRush: "Playing",
        heroesvbrainrots: "Battling",
        hideseek: "Playing",
        bingo: "Playing"
      };
    class Cb {
      constructor(bb) {
        this.discordSdk = bb, this.guildNameCache = {}, this.startTime = Date.now(), this.cachedAccessToken = null
      }
      static async setup() {
        console.log("Setting up Discord SDK with client id", Xb.d.discordClientID);
        const bb = new kb.d(Xb.d.discordClientID);
        let cb = !1;
        setTimeout((() => {
          cb || (console.warn("Discord SDK took too long to initialize"), (0, Ib.reloadBloxd)())
        }), 15e3), await bb.ready(), cb = !0;
        try {
          const {
            enabled: cb
          } = await bb.commands.encourageHardwareAcceleration();
          cb || console.warn("Hardware acceleration not enabled in the Discord client")
        } catch (Wb) {
          console.error("Failed to encourage hardware acceleration in the Discord client", Wb)
        }
        const sb = new Cb(bb);
        return sb.isMobilePlatform() && (sb.applyDiscordSafeAreaNotch(), window.addEventListener("resize", (() => {
          sb.applyDiscordSafeAreaNotch()
        }))), sb
      }
      async updateActivityDescription(bb) {
        let cb, sb;
        switch (bb) {
          case "homePage":
            cb = "Chilling in the Main Menu";
            break;
          case "inGame": {
            const bb = await this.getInGameDescriptions();
            cb = bb.primary, sb = bb.secondary;
            break
          }
        }
        await this.discordSdk.commands.setActivity({
          activity: {
            type: lb.PLAYING,
            details: cb,
            state: sb,
            assets: {
              large_image: "icon",
              large_text: cb
            },
            timestamps: {
              start: this.startTime
            }
          }
        }).catch((bb => {
          console.error(`Failed to update Discord activity rich presence with description="${cb}":`, bb)
        }))
      }
      async getInGameDescriptions() {
        var bb;
        const {
          requestedGameNameWithVariation: cb
        } = (0, Hb.d)(), sb = (0, fb.h)(cb), kb = null !== (bb = eb[cb]) && void 0 !== bb ? bb : Qb[sb.type], Wb = await (0, ab.B)(Ub.b.ENGLISH, sb.title), Ib = (0, Hb.d)();
        if ((0, Hb.i)(Ib)) return {
          primary: `${kb} in a Discord World`
        };
        const Mb = `${kb} in ${Wb}`;
        return (0, Tb.L)(Ib.lobbyName) ? {
          primary: Mb
        } : {
          primary: Mb,
          secondary: `Lobby ${Ib.lobbyName}`
        }
      }
      getCurrentChannelType() {
        const {
          channelId: bb,
          guildId: cb
        } = this.getCurrentChannelAndGuild();
        return null !== cb ? Wb.e.GUILD : null !== bb ? Wb.e.DM : null
      }
      getRequiredScopeForCurrentChannel() {
        const bb = this.getCurrentChannelType(),
          cb = [nb.APPLICATION_COMMANDS, nb.IDENTIFY, nb.EMAIL, nb.GUILDS, nb.WRITE_ACTIVITIES];
        switch (bb) {
          case Wb.e.DM:
          case Wb.e.GUILD:
            return [...cb];
          default:
            throw new Error(`Unknown Discord channel type: ${bb}`)
        }
      }
      getCurrentChannelAndGuild() {
        const {
          channelId: bb,
          guildId: cb
        } = this.discordSdk;
        return {
          channelId: null !== bb && void 0 !== bb ? bb : null,
          guildId: null !== cb && void 0 !== cb ? cb : null
        }
      }
      getInstanceId() {
        return this.discordSdk.instanceId
      }
      async askDiscordUserForAuthorization() {
        const bb = this.getRequiredScopeForCurrentChannel(),
          {
            code: cb
          } = await this.discordSdk.commands.authorize({
            client_id: Xb.d.discordClientID,
            response_type: "code",
            state: "",
            prompt: "none",
            scope: bb
          });
        return cb
      }
      getCachedAccessToken() {
        return this.cachedAccessToken
      }
      setCachedAccessToken(bb) {
        this.cachedAccessToken = bb
      }
      registerGuild(bb, cb) {
        this.guildNameCache[bb] = cb
      }
      async authenticate(bb) {
        return this.discordSdk.commands.authenticate({
          access_token: bb
        }).then((bb => null !== bb))
      }
      async getUserLocale() {
        try {
          const {
            locale: bb
          } = await this.discordSdk.commands.userSettingsGetLocale();
          return bb
        } catch (bb) {
          return console.error("Failed to get user locale from Discord:", bb.stack), null
        }
      }
      async getChannelName(bb) {
        return this.discordSdk.commands.getChannel({
          channel_id: bb
        }).then((bb => bb.name)).catch((bb => "Your Current Discord Chat"))
      }
      async getDiscordContextFromChannelId(bb) {
        const cb = await this.getChannelName(bb);
        return Wb.k.from({
          type: Wb.e.DM,
          channelId: bb,
          channelName: cb
        })
      }
      getDiscordContextFromGuildId(bb) {
        const cb = this.guildNameCache[bb];
        return (0, Tb.L)(cb) ? null : Wb.h.from({
          type: Wb.e.GUILD,
          guildId: bb,
          guildName: cb
        })
      }
      async getCurrentDiscordContext() {
        const {
          channelId: bb,
          guildId: cb
        } = this.getCurrentChannelAndGuild();
        return null !== cb ? this.getDiscordContextFromGuildId(cb) : null !== bb ? this.getDiscordContextFromChannelId(bb) : null
      }
      exit(bb) {
        console.log("Exiting Discord Activity:", bb), this.discordSdk.close(mb.CLOSE_NORMAL, bb)
      }
      isMobilePlatform() {
        return this.discordSdk.platform === kb.e.MOBILE
      }
      applyDiscordSafeAreaNotch() {
        const bb = getComputedStyle(document.documentElement),
          cb = (cb, sb) => {
            const kb = parseFloat(bb.getPropertyValue(`--discord-safe-area-inset-${cb}`));
            return isNaN(kb) || 0 === sb ? 0 : kb / sb * 100
          };
        Mb.d.set({
          notchSize: {
            top: cb("top", window.innerHeight),
            right: Math.max(cb("right", window.innerWidth), 7),
            bottom: 0,
            left: cb("left", window.innerWidth)
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);