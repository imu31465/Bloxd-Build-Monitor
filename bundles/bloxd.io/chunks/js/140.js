export const id = 140;
export const ids = [140];
export const modules = {
  7673: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      BloxdDiscordActivitySdk: () => Zb
    });
    var Ab = Ub(7681),
      Mb = Ub(1171),
      Tb = Ub(1134),
      Eb = Ub(591),
      Yb = Ub(1198),
      Bb = Ub(1639),
      eb = Ub(1242),
      vb = Ub(714),
      Lb = Ub(19),
      Pb = Ub(1145),
      Xb = function(bb) {
        return bb.APPLICATION_COMMANDS = "applications.commands", bb.IDENTIFY = "identify", bb.EMAIL = "email", bb.GUILDS = "guilds", bb.READ_DM_CHANNELS = "dm_channels.read", bb.WRITE_ACTIVITIES = "rpc.activities.write", bb
      }(Xb || {}),
      jb = function(bb) {
        return bb[bb.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", bb[bb.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", bb[bb.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", bb[bb.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", bb[bb.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", bb[bb.RATELIMITED = 4002] = "RATELIMITED", bb[bb.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", bb[bb.INVALID_VERSION = 4004] = "INVALID_VERSION", bb[bb.INVALID_ENCODING = 4005] = "INVALID_ENCODING", bb
      }(jb || {}),
      Rb = function(bb) {
        return bb[bb.PLAYING = 0] = "PLAYING", bb[bb.STREAMING = 1] = "STREAMING", bb[bb.LISTENING = 2] = "LISTENING", bb[bb.WATCHING = 3] = "WATCHING", bb[bb.CUSTOM = 4] = "CUSTOM", bb[bb.COMPETING = 5] = "COMPETING", bb
      }(Rb || {});
    const kb = {
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
      yb = {
        goalRush: "Playing",
        heroesvbrainrots: "Battling",
        hideseek: "Playing",
        bingo: "Playing"
      };
    class Zb {
      constructor(bb) {
        this.discordSdk = bb, this.guildNameCache = {}, this.startTime = Date.now(), this.cachedAccessToken = null
      }
      static async setup() {
        console.log("Setting up Discord SDK with client id", Pb.c.discordClientID);
        const bb = new Ab.d(Pb.c.discordClientID);
        let ab = !1;
        setTimeout((() => {
          ab || (console.warn("Discord SDK took too long to initialize"), (0, Bb.reloadBloxd)())
        }), 15e3), await bb.ready(), ab = !0;
        try {
          const {
            enabled: ab
          } = await bb.commands.encourageHardwareAcceleration();
          ab || console.warn("Hardware acceleration not enabled in the Discord client")
        } catch (Mb) {
          console.error("Failed to encourage hardware acceleration in the Discord client", Mb)
        }
        const Ub = new Zb(bb);
        return Ub.isMobilePlatform() && (Ub.applyDiscordSafeAreaNotch(), window.addEventListener("resize", (() => {
          Ub.applyDiscordSafeAreaNotch()
        }))), Ub
      }
      async updateActivityDescription(bb) {
        let ab, Ub;
        switch (bb) {
          case "homePage":
            ab = "Chilling in the Main Menu";
            break;
          case "inGame": {
            const bb = await this.getInGameDescriptions();
            ab = bb.primary, Ub = bb.secondary;
            break
          }
        }
        await this.discordSdk.commands.setActivity({
          activity: {
            type: Rb.PLAYING,
            details: ab,
            state: Ub,
            assets: {
              large_image: "icon",
              large_text: ab
            },
            timestamps: {
              start: this.startTime
            }
          }
        }).catch((bb => {
          console.error(`Failed to update Discord activity rich presence with description="${ab}":`, bb)
        }))
      }
      async getInGameDescriptions() {
        var bb;
        const {
          requestedGameNameWithVariation: ab
        } = (0, eb.e)(), Ub = (0, vb.o)(ab), Ab = null !== (bb = yb[ab]) && void 0 !== bb ? bb : kb[Ub.type], Mb = await (0, Tb.y)(Yb.e.ENGLISH, Ub.title), Bb = (0, eb.e)();
        if ((0, eb.j)(Bb)) return {
          primary: `${Ab} in a Discord World`
        };
        const Lb = `${Ab} in ${Mb}`;
        return (0, Eb.I)(Bb.lobbyName) ? {
          primary: Lb
        } : {
          primary: Lb,
          secondary: `Lobby ${Bb.lobbyName}`
        }
      }
      getCurrentChannelType() {
        const {
          channelId: bb,
          guildId: ab
        } = this.getCurrentChannelAndGuild();
        return null !== ab ? Mb.d.GUILD : null !== bb ? Mb.d.DM : null
      }
      getRequiredScopeForCurrentChannel() {
        const bb = this.getCurrentChannelType(),
          ab = [Xb.APPLICATION_COMMANDS, Xb.IDENTIFY, Xb.EMAIL, Xb.GUILDS, Xb.WRITE_ACTIVITIES];
        switch (bb) {
          case Mb.d.DM:
          case Mb.d.GUILD:
            return [...ab];
          default:
            throw new Error(`Unknown Discord channel type: ${bb}`)
        }
      }
      getCurrentChannelAndGuild() {
        const {
          channelId: bb,
          guildId: ab
        } = this.discordSdk;
        return {
          channelId: null !== bb && void 0 !== bb ? bb : null,
          guildId: null !== ab && void 0 !== ab ? ab : null
        }
      }
      getInstanceId() {
        return this.discordSdk.instanceId
      }
      async askDiscordUserForAuthorization() {
        const bb = this.getRequiredScopeForCurrentChannel(),
          {
            code: ab
          } = await this.discordSdk.commands.authorize({
            client_id: Pb.c.discordClientID,
            response_type: "code",
            state: "",
            prompt: "none",
            scope: bb
          });
        return ab
      }
      getCachedAccessToken() {
        return this.cachedAccessToken
      }
      setCachedAccessToken(bb) {
        this.cachedAccessToken = bb
      }
      registerGuild(bb, ab) {
        this.guildNameCache[bb] = ab
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
        const ab = await this.getChannelName(bb);
        return Mb.i.from({
          type: Mb.d.DM,
          channelId: bb,
          channelName: ab
        })
      }
      getDiscordContextFromGuildId(bb) {
        const ab = this.guildNameCache[bb];
        return (0, Eb.I)(ab) ? null : Mb.g.from({
          type: Mb.d.GUILD,
          guildId: bb,
          guildName: ab
        })
      }
      async getCurrentDiscordContext() {
        const {
          channelId: bb,
          guildId: ab
        } = this.getCurrentChannelAndGuild();
        return null !== ab ? this.getDiscordContextFromGuildId(ab) : null !== bb ? this.getDiscordContextFromChannelId(bb) : null
      }
      exit(bb) {
        console.log("Exiting Discord Activity:", bb), this.discordSdk.close(jb.CLOSE_NORMAL, bb)
      }
      isMobilePlatform() {
        return this.discordSdk.platform === Ab.h.MOBILE
      }
      applyDiscordSafeAreaNotch() {
        const bb = getComputedStyle(document.documentElement),
          ab = (ab, Ub) => {
            const Ab = parseFloat(bb.getPropertyValue(`--discord-safe-area-inset-${ab}`));
            return isNaN(Ab) || 0 === Ub ? 0 : Ab / Ub * 100
          };
        Lb.c.set({
          notchSize: {
            top: ab("top", window.innerHeight),
            right: Math.max(ab("right", window.innerWidth), 7),
            bottom: 0,
            left: ab("left", window.innerWidth)
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);