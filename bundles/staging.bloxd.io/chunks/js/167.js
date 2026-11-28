export const id = 167;
export const ids = [167];
export const modules = {
  7902: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      BloxdDiscordActivitySdk: () => mb
    });
    var eb = Mb(7909),
      Hb = Mb(1304),
      pb = Mb(1259),
      Vb = Mb(661),
      gb = Mb(1321),
      lb = Mb(1965),
      Lb = Mb(1447),
      Ib = Mb(867),
      Ob = Mb(26),
      Ub = Mb(1277),
      tb = Mb(3394),
      Cb = function(bb) {
        return bb.APPLICATION_COMMANDS = "applications.commands", bb.IDENTIFY = "identify", bb.EMAIL = "email", bb.GUILDS = "guilds", bb.READ_DM_CHANNELS = "dm_channels.read", bb.WRITE_ACTIVITIES = "rpc.activities.write", bb
      }(Cb || {}),
      Eb = function(bb) {
        return bb[bb.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", bb[bb.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", bb[bb.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", bb[bb.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", bb[bb.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", bb[bb.RATELIMITED = 4002] = "RATELIMITED", bb[bb.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", bb[bb.INVALID_VERSION = 4004] = "INVALID_VERSION", bb[bb.INVALID_ENCODING = 4005] = "INVALID_ENCODING", bb
      }(Eb || {}),
      Fb = function(bb) {
        return bb[bb.PLAYING = 0] = "PLAYING", bb[bb.STREAMING = 1] = "STREAMING", bb[bb.LISTENING = 2] = "LISTENING", bb[bb.WATCHING = 3] = "WATCHING", bb[bb.CUSTOM = 4] = "CUSTOM", bb[bb.COMPETING = 5] = "COMPETING", bb
      }(Fb || {});
    const Bb = {
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
      sb = {
        goalRush: "Playing",
        heroesvbrainrots: "Battling",
        hideseek: "Playing",
        bingo: "Playing"
      };
    class mb {
      constructor(bb) {
        this.discordSdk = bb, this.guildNameCache = {}, this.startTime = Date.now(), this.cachedAccessToken = null, this.activityUpdateId = 0
      }
      static async setup() {
        console.log("Setting up Discord SDK with client id", Ub.c.discordClientID);
        const bb = new eb.e(Ub.c.discordClientID);
        let wb = !1;
        setTimeout((() => {
          wb || (console.warn("Discord SDK took too long to initialize"), (0, lb.reloadBloxd)())
        }), 15e3), await bb.ready(), wb = !0;
        try {
          const {
            enabled: wb
          } = await bb.commands.encourageHardwareAcceleration();
          wb || console.warn("Hardware acceleration not enabled in the Discord client")
        } catch (Hb) {
          console.error("Failed to encourage hardware acceleration in the Discord client", Hb)
        }
        const Mb = new mb(bb);
        return Mb.isMobilePlatform() && (Mb.applyDiscordSafeAreaNotch(), window.addEventListener("resize", (() => {
          Mb.applyDiscordSafeAreaNotch()
        }))), Mb
      }
      async updateActivityDescription(bb) {
        const wb = ++this.activityUpdateId;
        let Mb, eb;
        switch (bb) {
          case "homePage":
            Mb = "Chilling in the Main Menu";
            break;
          case "inGame": {
            const bb = await this.getInGameDescriptions();
            Mb = bb.primary, eb = bb.secondary;
            break
          }
        }
        wb === this.activityUpdateId && await this.discordSdk.commands.setActivity({
          activity: {
            type: Fb.PLAYING,
            details: Mb,
            state: eb,
            assets: {
              large_image: "icon",
              large_text: Mb
            },
            timestamps: {
              start: this.startTime
            }
          }
        }).catch((bb => {
          console.error(`Failed to update Discord activity rich presence with description="${Mb}":`, bb)
        }))
      }
      async getInGameDescriptions() {
        const bb = (0, Lb.e)(),
          {
            verb: wb,
            title: Mb
          } = await this.getGameVerbAndTitle(bb.requestedGameNameWithVariation);
        if ((0, Lb.h)(bb)) return {
          primary: `${wb} in a Discord World`
        };
        const eb = `${wb} in ${Mb}`;
        return (0, Vb.K)(bb.lobbyName) ? {
          primary: eb
        } : {
          primary: eb,
          secondary: `Lobby ${bb.lobbyName}`
        }
      }
      async getGameVerbAndTitle(bb) {
        var wb;
        const Mb = "Playing";
        if ((0, Vb.K)(bb)) return {
          verb: Mb,
          title: "Bloxd"
        };
        const eb = (0, Ib.i)(bb);
        var Hb;
        if (null !== eb) return {
          verb: null !== (Hb = sb[bb]) && void 0 !== Hb ? Hb : Bb[eb.type],
          title: await (0, pb.B)(gb.e.ENGLISH, eb.title)
        };
        const lb = await (0, tb.b)(bb);
        return {
          verb: null !== (wb = lb && Bb[lb.gameCategory]) && void 0 !== wb ? wb : Mb,
          title: (null === lb || void 0 === lb ? void 0 : lb.name) || "a Custom World"
        }
      }
      getCurrentChannelType() {
        const {
          channelId: bb,
          guildId: wb
        } = this.getCurrentChannelAndGuild();
        return null !== wb ? Hb.d.GUILD : null !== bb ? Hb.d.DM : null
      }
      getRequiredScopeForCurrentChannel() {
        const bb = this.getCurrentChannelType(),
          wb = [Cb.APPLICATION_COMMANDS, Cb.IDENTIFY, Cb.EMAIL, Cb.GUILDS, Cb.WRITE_ACTIVITIES];
        switch (bb) {
          case Hb.d.DM:
          case Hb.d.GUILD:
            return [...wb];
          default:
            throw new Error(`Unknown Discord channel type: ${bb}`)
        }
      }
      getCurrentChannelAndGuild() {
        const {
          channelId: bb,
          guildId: wb
        } = this.discordSdk;
        return {
          channelId: null !== bb && void 0 !== bb ? bb : null,
          guildId: null !== wb && void 0 !== wb ? wb : null
        }
      }
      getInstanceId() {
        return this.discordSdk.instanceId
      }
      async askDiscordUserForAuthorization() {
        const bb = this.getRequiredScopeForCurrentChannel(),
          {
            code: wb
          } = await this.discordSdk.commands.authorize({
            client_id: Ub.c.discordClientID,
            response_type: "code",
            state: "",
            prompt: "none",
            scope: bb
          });
        return wb
      }
      getCachedAccessToken() {
        return this.cachedAccessToken
      }
      setCachedAccessToken(bb) {
        this.cachedAccessToken = bb
      }
      registerGuild(bb, wb) {
        this.guildNameCache[bb] = wb
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
        const wb = await this.getChannelName(bb);
        return Hb.i.from({
          type: Hb.d.DM,
          channelId: bb,
          channelName: wb
        })
      }
      getDiscordContextFromGuildId(bb) {
        const wb = this.guildNameCache[bb];
        return (0, Vb.K)(wb) ? null : Hb.f.from({
          type: Hb.d.GUILD,
          guildId: bb,
          guildName: wb
        })
      }
      async getCurrentDiscordContext() {
        const {
          channelId: bb,
          guildId: wb
        } = this.getCurrentChannelAndGuild();
        return null !== wb ? this.getDiscordContextFromGuildId(wb) : null !== bb ? this.getDiscordContextFromChannelId(bb) : null
      }
      exit(bb) {
        console.log("Exiting Discord Activity:", bb), this.discordSdk.close(Eb.CLOSE_NORMAL, bb)
      }
      isMobilePlatform() {
        return this.discordSdk.platform === eb.g.MOBILE
      }
      applyDiscordSafeAreaNotch() {
        const bb = getComputedStyle(document.documentElement),
          wb = (wb, Mb) => {
            const eb = parseFloat(bb.getPropertyValue(`--discord-safe-area-inset-${wb}`));
            return isNaN(eb) || 0 === Mb ? 0 : eb / Mb * 100
          };
        Ob.c.set({
          notchSize: {
            top: wb("top", window.innerHeight),
            right: Math.max(wb("right", window.innerWidth), 7),
            bottom: 0,
            left: wb("left", window.innerWidth)
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);