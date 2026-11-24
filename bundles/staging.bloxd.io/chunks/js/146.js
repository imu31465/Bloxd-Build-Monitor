export const id = 146;
export const ids = [146];
export const modules = {
  8004: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      BloxdDiscordActivitySdk: () => Vm
    });
    var hm = fm(8010),
      Am = fm(1238),
      am = fm(1208),
      xm = fm(653),
      wm = fm(1259),
      Dm = fm(1713),
      im = fm(1321),
      Rm = fm(800),
      pm = fm(23),
      Em = fm(1105),
      om = function(mm) {
        return mm.APPLICATION_COMMANDS = "applications.commands", mm.IDENTIFY = "identify", mm.EMAIL = "email", mm.GUILDS = "guilds", mm.READ_DM_CHANNELS = "dm_channels.read", mm.WRITE_ACTIVITIES = "rpc.activities.write", mm
      }(om || {}),
      Om = function(mm) {
        return mm[mm.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", mm[mm.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", mm[mm.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", mm[mm.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", mm[mm.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", mm[mm.RATELIMITED = 4002] = "RATELIMITED", mm[mm.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", mm[mm.INVALID_VERSION = 4004] = "INVALID_VERSION", mm[mm.INVALID_ENCODING = 4005] = "INVALID_ENCODING", mm
      }(Om || {}),
      Ym = function(mm) {
        return mm[mm.PLAYING = 0] = "PLAYING", mm[mm.STREAMING = 1] = "STREAMING", mm[mm.LISTENING = 2] = "LISTENING", mm[mm.WATCHING = 3] = "WATCHING", mm[mm.CUSTOM = 4] = "CUSTOM", mm[mm.COMPETING = 5] = "COMPETING", mm
      }(Ym || {});
    const qm = {
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
      jm = {
        goalRush: "Playing",
        heroesvbrainrots: "Battling",
        hideseek: "Playing",
        bingo: "Playing"
      };
    class Vm {
      constructor(mm) {
        this.discordSdk = mm, this.guildNameCache = {}, this.startTime = Date.now(), this.cachedAccessToken = null
      }
      static async setup() {
        console.log("Setting up Discord SDK with client id", Em.d.discordClientID);
        const mm = new hm.e(Em.d.discordClientID);
        let Tm = !1;
        setTimeout((() => {
          Tm || (console.warn("Discord SDK took too long to initialize"), (0, Dm.reloadBloxd)())
        }), 15e3), await mm.ready(), Tm = !0;
        try {
          const {
            enabled: Tm
          } = await mm.commands.encourageHardwareAcceleration();
          Tm || console.warn("Hardware acceleration not enabled in the Discord client")
        } catch (Am) {
          console.error("Failed to encourage hardware acceleration in the Discord client", Am)
        }
        const fm = new Vm(mm);
        return fm.isMobilePlatform() && (fm.applyDiscordSafeAreaNotch(), window.addEventListener("resize", (() => {
          fm.applyDiscordSafeAreaNotch()
        }))), fm
      }
      async updateActivityDescription(mm) {
        let Tm, fm;
        switch (mm) {
          case "homePage":
            Tm = "Chilling in the Main Menu";
            break;
          case "inGame": {
            const mm = await this.getInGameDescriptions();
            Tm = mm.primary, fm = mm.secondary;
            break
          }
        }
        await this.discordSdk.commands.setActivity({
          activity: {
            type: Ym.PLAYING,
            details: Tm,
            state: fm,
            assets: {
              large_image: "icon",
              large_text: Tm
            },
            timestamps: {
              start: this.startTime
            }
          }
        }).catch((mm => {
          console.error(`Failed to update Discord activity rich presence with description="${Tm}":`, mm)
        }))
      }
      async getInGameDescriptions() {
        var mm;
        const {
          requestedGameNameWithVariation: Tm
        } = (0, im.d)(), fm = (0, Rm.o)(Tm), hm = null !== (mm = jm[Tm]) && void 0 !== mm ? mm : qm[fm.type], Am = await (0, am.y)(wm.d.ENGLISH, fm.title), Dm = (0, im.d)();
        if ((0, im.j)(Dm)) return {
          primary: `${hm} in a Discord World`
        };
        const pm = `${hm} in ${Am}`;
        return (0, xm.H)(Dm.lobbyName) ? {
          primary: pm
        } : {
          primary: pm,
          secondary: `Lobby ${Dm.lobbyName}`
        }
      }
      getCurrentChannelType() {
        const {
          channelId: mm,
          guildId: Tm
        } = this.getCurrentChannelAndGuild();
        return null !== Tm ? Am.c.GUILD : null !== mm ? Am.c.DM : null
      }
      getRequiredScopeForCurrentChannel() {
        const mm = this.getCurrentChannelType(),
          Tm = [om.APPLICATION_COMMANDS, om.IDENTIFY, om.EMAIL, om.GUILDS, om.WRITE_ACTIVITIES];
        switch (mm) {
          case Am.c.DM:
          case Am.c.GUILD:
            return [...Tm];
          default:
            throw new Error(`Unknown Discord channel type: ${mm}`)
        }
      }
      getCurrentChannelAndGuild() {
        const {
          channelId: mm,
          guildId: Tm
        } = this.discordSdk;
        return {
          channelId: null !== mm && void 0 !== mm ? mm : null,
          guildId: null !== Tm && void 0 !== Tm ? Tm : null
        }
      }
      getInstanceId() {
        return this.discordSdk.instanceId
      }
      async askDiscordUserForAuthorization() {
        const mm = this.getRequiredScopeForCurrentChannel(),
          {
            code: Tm
          } = await this.discordSdk.commands.authorize({
            client_id: Em.d.discordClientID,
            response_type: "code",
            state: "",
            prompt: "none",
            scope: mm
          });
        return Tm
      }
      getCachedAccessToken() {
        return this.cachedAccessToken
      }
      setCachedAccessToken(mm) {
        this.cachedAccessToken = mm
      }
      registerGuild(mm, Tm) {
        this.guildNameCache[mm] = Tm
      }
      async authenticate(mm) {
        return this.discordSdk.commands.authenticate({
          access_token: mm
        }).then((mm => null !== mm))
      }
      async getUserLocale() {
        try {
          const {
            locale: mm
          } = await this.discordSdk.commands.userSettingsGetLocale();
          return mm
        } catch (mm) {
          return console.error("Failed to get user locale from Discord:", mm.stack), null
        }
      }
      async getChannelName(mm) {
        return this.discordSdk.commands.getChannel({
          channel_id: mm
        }).then((mm => mm.name)).catch((mm => "Your Current Discord Chat"))
      }
      async getDiscordContextFromChannelId(mm) {
        const Tm = await this.getChannelName(mm);
        return Am.g.from({
          type: Am.c.DM,
          channelId: mm,
          channelName: Tm
        })
      }
      getDiscordContextFromGuildId(mm) {
        const Tm = this.guildNameCache[mm];
        return (0, xm.H)(Tm) ? null : Am.e.from({
          type: Am.c.GUILD,
          guildId: mm,
          guildName: Tm
        })
      }
      async getCurrentDiscordContext() {
        const {
          channelId: mm,
          guildId: Tm
        } = this.getCurrentChannelAndGuild();
        return null !== Tm ? this.getDiscordContextFromGuildId(Tm) : null !== mm ? this.getDiscordContextFromChannelId(mm) : null
      }
      exit(mm) {
        console.log("Exiting Discord Activity:", mm), this.discordSdk.close(Om.CLOSE_NORMAL, mm)
      }
      isMobilePlatform() {
        return this.discordSdk.platform === hm.i.MOBILE
      }
      applyDiscordSafeAreaNotch() {
        const mm = getComputedStyle(document.documentElement),
          Tm = (Tm, fm) => {
            const hm = parseFloat(mm.getPropertyValue(`--discord-safe-area-inset-${Tm}`));
            return isNaN(hm) || 0 === fm ? 0 : hm / fm * 100
          };
        pm.c.set({
          notchSize: {
            top: Tm("top", window.innerHeight),
            right: Math.max(Tm("right", window.innerWidth), 7),
            bottom: 0,
            left: Tm("left", window.innerWidth)
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);