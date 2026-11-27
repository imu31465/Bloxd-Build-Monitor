export const id = 160;
export const ids = [160];
export const modules = {
  7335: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      BloxdDiscordActivitySdk: () => Be
    });
    var ye = He(7342),
      be = He(1178),
      Me = He(1127),
      Ke = He(610),
      Ue = He(1196),
      Fe = He(1768),
      Je = He(1305),
      oe = He(780),
      Re = He(18),
      ke = He(1150),
      qe = He(2418),
      fe = function(ee) {
        return ee.APPLICATION_COMMANDS = "applications.commands", ee.IDENTIFY = "identify", ee.EMAIL = "email", ee.GUILDS = "guilds", ee.READ_DM_CHANNELS = "dm_channels.read", ee.WRITE_ACTIVITIES = "rpc.activities.write", ee
      }(fe || {}),
      Te = function(ee) {
        return ee[ee.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", ee[ee.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", ee[ee.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", ee[ee.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", ee[ee.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", ee[ee.RATELIMITED = 4002] = "RATELIMITED", ee[ee.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", ee[ee.INVALID_VERSION = 4004] = "INVALID_VERSION", ee[ee.INVALID_ENCODING = 4005] = "INVALID_ENCODING", ee
      }(Te || {}),
      pe = function(ee) {
        return ee[ee.PLAYING = 0] = "PLAYING", ee[ee.STREAMING = 1] = "STREAMING", ee[ee.LISTENING = 2] = "LISTENING", ee[ee.WATCHING = 3] = "WATCHING", ee[ee.CUSTOM = 4] = "CUSTOM", ee[ee.COMPETING = 5] = "COMPETING", ee
      }(pe || {});
    const Xe = {
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
      ze = {
        goalRush: "Playing",
        heroesvbrainrots: "Battling",
        hideseek: "Playing",
        bingo: "Playing"
      };
    class Be {
      constructor(ee) {
        this.discordSdk = ee, this.guildNameCache = {}, this.startTime = Date.now(), this.cachedAccessToken = null, this.activityUpdateId = 0
      }
      static async setup() {
        console.log("Setting up Discord SDK with client id", ke.d.discordClientID);
        const ee = new ye.b(ke.d.discordClientID);
        let ie = !1;
        setTimeout((() => {
          ie || (console.warn("Discord SDK took too long to initialize"), (0, Fe.reloadBloxd)())
        }), 15e3), await ee.ready(), ie = !0;
        try {
          const {
            enabled: ie
          } = await ee.commands.encourageHardwareAcceleration();
          ie || console.warn("Hardware acceleration not enabled in the Discord client")
        } catch (be) {
          console.error("Failed to encourage hardware acceleration in the Discord client", be)
        }
        const He = new Be(ee);
        return He.isMobilePlatform() && (He.applyDiscordSafeAreaNotch(), window.addEventListener("resize", (() => {
          He.applyDiscordSafeAreaNotch()
        }))), He
      }
      async updateActivityDescription(ee) {
        const ie = ++this.activityUpdateId;
        let He, ye;
        switch (ee) {
          case "homePage":
            He = "Chilling in the Main Menu";
            break;
          case "inGame": {
            const ee = await this.getInGameDescriptions();
            He = ee.primary, ye = ee.secondary;
            break
          }
        }
        ie === this.activityUpdateId && await this.discordSdk.commands.setActivity({
          activity: {
            type: pe.PLAYING,
            details: He,
            state: ye,
            assets: {
              large_image: "icon",
              large_text: He
            },
            timestamps: {
              start: this.startTime
            }
          }
        }).catch((ee => {
          console.error(`Failed to update Discord activity rich presence with description="${He}":`, ee)
        }))
      }
      async getInGameDescriptions() {
        const ee = (0, Je.e)(),
          {
            verb: ie,
            title: He
          } = await this.getGameVerbAndTitle(ee.requestedGameNameWithVariation);
        if ((0, Je.k)(ee)) return {
          primary: `${ie} in a Discord World`
        };
        const ye = `${ie} in ${He}`;
        return (0, Ke.P)(ee.lobbyName) ? {
          primary: ye
        } : {
          primary: ye,
          secondary: `Lobby ${ee.lobbyName}`
        }
      }
      async getGameVerbAndTitle(ee) {
        var ie;
        const He = "Playing";
        if ((0, Ke.P)(ee)) return {
          verb: He,
          title: "Bloxd"
        };
        const ye = (0, oe.k)(ee);
        var be;
        if (null !== ye) return {
          verb: null !== (be = ze[ee]) && void 0 !== be ? be : Xe[ye.type],
          title: await (0, Me.t)(Ue.c.ENGLISH, ye.title)
        };
        const Fe = await (0, qe.e)(ee);
        return {
          verb: null !== (ie = Fe && Xe[Fe.gameCategory]) && void 0 !== ie ? ie : He,
          title: (null === Fe || void 0 === Fe ? void 0 : Fe.name) || "a Custom World"
        }
      }
      getCurrentChannelType() {
        const {
          channelId: ee,
          guildId: ie
        } = this.getCurrentChannelAndGuild();
        return null !== ie ? be.b.GUILD : null !== ee ? be.b.DM : null
      }
      getRequiredScopeForCurrentChannel() {
        const ee = this.getCurrentChannelType(),
          ie = [fe.APPLICATION_COMMANDS, fe.IDENTIFY, fe.EMAIL, fe.GUILDS, fe.WRITE_ACTIVITIES];
        switch (ee) {
          case be.b.DM:
          case be.b.GUILD:
            return [...ie];
          default:
            throw new Error(`Unknown Discord channel type: ${ee}`)
        }
      }
      getCurrentChannelAndGuild() {
        const {
          channelId: ee,
          guildId: ie
        } = this.discordSdk;
        return {
          channelId: null !== ee && void 0 !== ee ? ee : null,
          guildId: null !== ie && void 0 !== ie ? ie : null
        }
      }
      getInstanceId() {
        return this.discordSdk.instanceId
      }
      async askDiscordUserForAuthorization() {
        const ee = this.getRequiredScopeForCurrentChannel(),
          {
            code: ie
          } = await this.discordSdk.commands.authorize({
            client_id: ke.d.discordClientID,
            response_type: "code",
            state: "",
            prompt: "none",
            scope: ee
          });
        return ie
      }
      getCachedAccessToken() {
        return this.cachedAccessToken
      }
      setCachedAccessToken(ee) {
        this.cachedAccessToken = ee
      }
      registerGuild(ee, ie) {
        this.guildNameCache[ee] = ie
      }
      async authenticate(ee) {
        return this.discordSdk.commands.authenticate({
          access_token: ee
        }).then((ee => null !== ee))
      }
      async getUserLocale() {
        try {
          const {
            locale: ee
          } = await this.discordSdk.commands.userSettingsGetLocale();
          return ee
        } catch (ee) {
          return console.error("Failed to get user locale from Discord:", ee.stack), null
        }
      }
      async getChannelName(ee) {
        return this.discordSdk.commands.getChannel({
          channel_id: ee
        }).then((ee => ee.name)).catch((ee => "Your Current Discord Chat"))
      }
      async getDiscordContextFromChannelId(ee) {
        const ie = await this.getChannelName(ee);
        return be.h.from({
          type: be.b.DM,
          channelId: ee,
          channelName: ie
        })
      }
      getDiscordContextFromGuildId(ee) {
        const ie = this.guildNameCache[ee];
        return (0, Ke.P)(ie) ? null : be.f.from({
          type: be.b.GUILD,
          guildId: ee,
          guildName: ie
        })
      }
      async getCurrentDiscordContext() {
        const {
          channelId: ee,
          guildId: ie
        } = this.getCurrentChannelAndGuild();
        return null !== ie ? this.getDiscordContextFromGuildId(ie) : null !== ee ? this.getDiscordContextFromChannelId(ee) : null
      }
      exit(ee) {
        console.log("Exiting Discord Activity:", ee), this.discordSdk.close(Te.CLOSE_NORMAL, ee)
      }
      isMobilePlatform() {
        return this.discordSdk.platform === ye.d.MOBILE
      }
      applyDiscordSafeAreaNotch() {
        const ee = getComputedStyle(document.documentElement),
          ie = (ie, He) => {
            const ye = parseFloat(ee.getPropertyValue(`--discord-safe-area-inset-${ie}`));
            return isNaN(ye) || 0 === He ? 0 : ye / He * 100
          };
        Re.e.set({
          notchSize: {
            top: ie("top", window.innerHeight),
            right: Math.max(ie("right", window.innerWidth), 7),
            bottom: 0,
            left: ie("left", window.innerWidth)
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);