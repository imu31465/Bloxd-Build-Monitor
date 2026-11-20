export const id = 141;
export const ids = [141];
export const modules = {
  7772: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      BloxdDiscordActivitySdk: () => lb
    });
    var Bb = hb(7776),
      Ob = hb(1127),
      Gb = hb(1095),
      Ub = hb(588),
      Lb = hb(1144),
      Yb = hb(1622),
      Sb = hb(1218),
      ab = hb(701),
      Hb = hb(13),
      wb = hb(1108),
      Zb = function(bb) {
        return bb.APPLICATION_COMMANDS = "applications.commands", bb.IDENTIFY = "identify", bb.EMAIL = "email", bb.GUILDS = "guilds", bb.READ_DM_CHANNELS = "dm_channels.read", bb.WRITE_ACTIVITIES = "rpc.activities.write", bb
      }(Zb || {}),
      Xb = function(bb) {
        return bb[bb.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", bb[bb.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", bb[bb.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", bb[bb.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", bb[bb.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", bb[bb.RATELIMITED = 4002] = "RATELIMITED", bb[bb.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", bb[bb.INVALID_VERSION = 4004] = "INVALID_VERSION", bb[bb.INVALID_ENCODING = 4005] = "INVALID_ENCODING", bb
      }(Xb || {}),
      pb = function(bb) {
        return bb[bb.PLAYING = 0] = "PLAYING", bb[bb.STREAMING = 1] = "STREAMING", bb[bb.LISTENING = 2] = "LISTENING", bb[bb.WATCHING = 3] = "WATCHING", bb[bb.CUSTOM = 4] = "CUSTOM", bb[bb.COMPETING = 5] = "COMPETING", bb
      }(pb || {});
    const ob = {
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
      Ab = {
        goalRush: "Playing",
        heroesvbrainrots: "Battling",
        hideseek: "Playing",
        bingo: "Playing"
      };
    class lb {
      constructor(bb) {
        this.discordSdk = bb, this.guildNameCache = {}, this.startTime = Date.now(), this.cachedAccessToken = null
      }
      static async setup() {
        console.log("Setting up Discord SDK with client id", wb.b.discordClientID);
        const bb = new Bb.b(wb.b.discordClientID);
        let ub = !1;
        setTimeout((() => {
          ub || (console.warn("Discord SDK took too long to initialize"), (0, Yb.reloadBloxd)())
        }), 15e3), await bb.ready(), ub = !0;
        try {
          const {
            enabled: ub
          } = await bb.commands.encourageHardwareAcceleration();
          ub || console.warn("Hardware acceleration not enabled in the Discord client")
        } catch (Ob) {
          console.error("Failed to encourage hardware acceleration in the Discord client", Ob)
        }
        const hb = new lb(bb);
        return hb.isMobilePlatform() && (hb.applyDiscordSafeAreaNotch(), window.addEventListener("resize", (() => {
          hb.applyDiscordSafeAreaNotch()
        }))), hb
      }
      async updateActivityDescription(bb) {
        let ub, hb;
        switch (bb) {
          case "homePage":
            ub = "Chilling in the Main Menu";
            break;
          case "inGame": {
            const bb = await this.getInGameDescriptions();
            ub = bb.primary, hb = bb.secondary;
            break
          }
        }
        await this.discordSdk.commands.setActivity({
          activity: {
            type: pb.PLAYING,
            details: ub,
            state: hb,
            assets: {
              large_image: "icon",
              large_text: ub
            },
            timestamps: {
              start: this.startTime
            }
          }
        }).catch((bb => {
          console.error(`Failed to update Discord activity rich presence with description="${ub}":`, bb)
        }))
      }
      async getInGameDescriptions() {
        var bb;
        const {
          requestedGameNameWithVariation: ub
        } = (0, Sb.b)(), hb = (0, ab.q)(ub), Bb = null !== (bb = Ab[ub]) && void 0 !== bb ? bb : ob[hb.type], Ob = await (0, Gb.H)(Lb.d.ENGLISH, hb.title), Yb = (0, Sb.b)();
        if ((0, Sb.g)(Yb)) return {
          primary: `${Bb} in a Discord World`
        };
        const Hb = `${Bb} in ${Ob}`;
        return (0, Ub.J)(Yb.lobbyName) ? {
          primary: Hb
        } : {
          primary: Hb,
          secondary: `Lobby ${Yb.lobbyName}`
        }
      }
      getCurrentChannelType() {
        const {
          channelId: bb,
          guildId: ub
        } = this.getCurrentChannelAndGuild();
        return null !== ub ? Ob.c.GUILD : null !== bb ? Ob.c.DM : null
      }
      getRequiredScopeForCurrentChannel() {
        const bb = this.getCurrentChannelType(),
          ub = [Zb.APPLICATION_COMMANDS, Zb.IDENTIFY, Zb.EMAIL, Zb.GUILDS, Zb.WRITE_ACTIVITIES];
        switch (bb) {
          case Ob.c.DM:
          case Ob.c.GUILD:
            return [...ub];
          default:
            throw new Error(`Unknown Discord channel type: ${bb}`)
        }
      }
      getCurrentChannelAndGuild() {
        const {
          channelId: bb,
          guildId: ub
        } = this.discordSdk;
        return {
          channelId: null !== bb && void 0 !== bb ? bb : null,
          guildId: null !== ub && void 0 !== ub ? ub : null
        }
      }
      getInstanceId() {
        return this.discordSdk.instanceId
      }
      async askDiscordUserForAuthorization() {
        const bb = this.getRequiredScopeForCurrentChannel(),
          {
            code: ub
          } = await this.discordSdk.commands.authorize({
            client_id: wb.b.discordClientID,
            response_type: "code",
            state: "",
            prompt: "none",
            scope: bb
          });
        return ub
      }
      getCachedAccessToken() {
        return this.cachedAccessToken
      }
      setCachedAccessToken(bb) {
        this.cachedAccessToken = bb
      }
      registerGuild(bb, ub) {
        this.guildNameCache[bb] = ub
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
        const ub = await this.getChannelName(bb);
        return Ob.h.from({
          type: Ob.c.DM,
          channelId: bb,
          channelName: ub
        })
      }
      getDiscordContextFromGuildId(bb) {
        const ub = this.guildNameCache[bb];
        return (0, Ub.J)(ub) ? null : Ob.f.from({
          type: Ob.c.GUILD,
          guildId: bb,
          guildName: ub
        })
      }
      async getCurrentDiscordContext() {
        const {
          channelId: bb,
          guildId: ub
        } = this.getCurrentChannelAndGuild();
        return null !== ub ? this.getDiscordContextFromGuildId(ub) : null !== bb ? this.getDiscordContextFromChannelId(bb) : null
      }
      exit(bb) {
        console.log("Exiting Discord Activity:", bb), this.discordSdk.close(Xb.CLOSE_NORMAL, bb)
      }
      isMobilePlatform() {
        return this.discordSdk.platform === Bb.c.MOBILE
      }
      applyDiscordSafeAreaNotch() {
        const bb = getComputedStyle(document.documentElement),
          ub = (ub, hb) => {
            const Bb = parseFloat(bb.getPropertyValue(`--discord-safe-area-inset-${ub}`));
            return isNaN(Bb) || 0 === hb ? 0 : Bb / hb * 100
          };
        Hb.d.set({
          notchSize: {
            top: ub("top", window.innerHeight),
            right: Math.max(ub("right", window.innerWidth), 7),
            bottom: 0,
            left: ub("left", window.innerWidth)
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);