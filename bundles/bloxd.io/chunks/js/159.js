export const id = 159;
export const ids = [159];
export const modules = {
  7259: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      BloxdDiscordActivitySdk: () => qV
    });
    var JV = xV(7266),
      YV = xV(1260),
      UV = xV(1220),
      yV = xV(657),
      pV = xV(1279),
      QV = xV(1838),
      nV = xV(1391),
      wV = xV(812),
      ZV = xV(27),
      vV = xV(1238),
      rV = xV(2517),
      kV = function(VV) {
        return VV.APPLICATION_COMMANDS = "applications.commands", VV.IDENTIFY = "identify", VV.EMAIL = "email", VV.GUILDS = "guilds", VV.READ_DM_CHANNELS = "dm_channels.read", VV.WRITE_ACTIVITIES = "rpc.activities.write", VV
      }(kV || {}),
      bV = function(VV) {
        return VV[VV.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", VV[VV.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", VV[VV.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", VV[VV.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", VV[VV.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", VV[VV.RATELIMITED = 4002] = "RATELIMITED", VV[VV.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", VV[VV.INVALID_VERSION = 4004] = "INVALID_VERSION", VV[VV.INVALID_ENCODING = 4005] = "INVALID_ENCODING", VV
      }(bV || {}),
      EV = function(VV) {
        return VV[VV.PLAYING = 0] = "PLAYING", VV[VV.STREAMING = 1] = "STREAMING", VV[VV.LISTENING = 2] = "LISTENING", VV[VV.WATCHING = 3] = "WATCHING", VV[VV.CUSTOM = 4] = "CUSTOM", VV[VV.COMPETING = 5] = "COMPETING", VV
      }(EV || {});
    const BV = {
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
      jV = {
        goalRush: "Playing",
        heroesvbrainrots: "Battling",
        hideseek: "Playing",
        bingo: "Playing"
      };
    class qV {
      constructor(VV) {
        this.discordSdk = VV, this.guildNameCache = {}, this.startTime = Date.now(), this.cachedAccessToken = null, this.activityUpdateId = 0
      }
      static async setup() {
        console.log("Setting up Discord SDK with client id", vV.e.discordClientID);
        const VV = new JV.b(vV.e.discordClientID);
        let eV = !1;
        setTimeout((() => {
          eV || (console.warn("Discord SDK took too long to initialize"), (0, QV.reloadBloxd)())
        }), 15e3), await VV.ready(), eV = !0;
        try {
          const {
            enabled: eV
          } = await VV.commands.encourageHardwareAcceleration();
          eV || console.warn("Hardware acceleration not enabled in the Discord client")
        } catch (YV) {
          console.error("Failed to encourage hardware acceleration in the Discord client", YV)
        }
        const xV = new qV(VV);
        return xV.isMobilePlatform() && (xV.applyDiscordSafeAreaNotch(), window.addEventListener("resize", (() => {
          xV.applyDiscordSafeAreaNotch()
        }))), xV
      }
      async updateActivityDescription(VV) {
        const eV = ++this.activityUpdateId;
        let xV, JV;
        switch (VV) {
          case "homePage":
            xV = "Chilling in the Main Menu";
            break;
          case "inGame": {
            const VV = await this.getInGameDescriptions();
            xV = VV.primary, JV = VV.secondary;
            break
          }
        }
        eV === this.activityUpdateId && await this.discordSdk.commands.setActivity({
          activity: {
            type: EV.PLAYING,
            details: xV,
            state: JV,
            assets: {
              large_image: "icon",
              large_text: xV
            },
            timestamps: {
              start: this.startTime
            }
          }
        }).catch((VV => {
          console.error(`Failed to update Discord activity rich presence with description="${xV}":`, VV)
        }))
      }
      async getInGameDescriptions() {
        const VV = (0, nV.e)(),
          {
            verb: eV,
            title: xV
          } = await this.getGameVerbAndTitle(VV.requestedGameNameWithVariation);
        if ((0, nV.j)(VV)) return {
          primary: `${eV} in a Discord World`
        };
        const JV = `${eV} in ${xV}`;
        return (0, yV.J)(VV.lobbyName) ? {
          primary: JV
        } : {
          primary: JV,
          secondary: `Lobby ${VV.lobbyName}`
        }
      }
      async getGameVerbAndTitle(VV) {
        var eV;
        const xV = "Playing";
        if ((0, yV.J)(VV)) return {
          verb: xV,
          title: "Bloxd"
        };
        const JV = (0, wV.l)(VV);
        var YV;
        if (null !== JV) return {
          verb: null !== (YV = jV[VV]) && void 0 !== YV ? YV : BV[JV.type],
          title: await (0, UV.y)(pV.b.ENGLISH, JV.title)
        };
        const QV = await (0, rV.d)(VV);
        return {
          verb: null !== (eV = QV && BV[QV.gameCategory]) && void 0 !== eV ? eV : xV,
          title: (null === QV || void 0 === QV ? void 0 : QV.name) || "a Custom World"
        }
      }
      getCurrentChannelType() {
        const {
          channelId: VV,
          guildId: eV
        } = this.getCurrentChannelAndGuild();
        return null !== eV ? YV.e.GUILD : null !== VV ? YV.e.DM : null
      }
      getRequiredScopeForCurrentChannel() {
        const VV = this.getCurrentChannelType(),
          eV = [kV.APPLICATION_COMMANDS, kV.IDENTIFY, kV.EMAIL, kV.GUILDS, kV.WRITE_ACTIVITIES];
        switch (VV) {
          case YV.e.DM:
          case YV.e.GUILD:
            return [...eV];
          default:
            throw new Error(`Unknown Discord channel type: ${VV}`)
        }
      }
      getCurrentChannelAndGuild() {
        const {
          channelId: VV,
          guildId: eV
        } = this.discordSdk;
        return {
          channelId: null !== VV && void 0 !== VV ? VV : null,
          guildId: null !== eV && void 0 !== eV ? eV : null
        }
      }
      getInstanceId() {
        return this.discordSdk.instanceId
      }
      async askDiscordUserForAuthorization() {
        const VV = this.getRequiredScopeForCurrentChannel(),
          {
            code: eV
          } = await this.discordSdk.commands.authorize({
            client_id: vV.e.discordClientID,
            response_type: "code",
            state: "",
            prompt: "none",
            scope: VV
          });
        return eV
      }
      getCachedAccessToken() {
        return this.cachedAccessToken
      }
      setCachedAccessToken(VV) {
        this.cachedAccessToken = VV
      }
      registerGuild(VV, eV) {
        this.guildNameCache[VV] = eV
      }
      async authenticate(VV) {
        return this.discordSdk.commands.authenticate({
          access_token: VV
        }).then((VV => null !== VV))
      }
      async getUserLocale() {
        try {
          const {
            locale: VV
          } = await this.discordSdk.commands.userSettingsGetLocale();
          return VV
        } catch (VV) {
          return console.error("Failed to get user locale from Discord:", VV.stack), null
        }
      }
      async getChannelName(VV) {
        return this.discordSdk.commands.getChannel({
          channel_id: VV
        }).then((VV => VV.name)).catch((VV => "Your Current Discord Chat"))
      }
      async getDiscordContextFromChannelId(VV) {
        const eV = await this.getChannelName(VV);
        return YV.l.from({
          type: YV.e.DM,
          channelId: VV,
          channelName: eV
        })
      }
      getDiscordContextFromGuildId(VV) {
        const eV = this.guildNameCache[VV];
        return (0, yV.J)(eV) ? null : YV.i.from({
          type: YV.e.GUILD,
          guildId: VV,
          guildName: eV
        })
      }
      async getCurrentDiscordContext() {
        const {
          channelId: VV,
          guildId: eV
        } = this.getCurrentChannelAndGuild();
        return null !== eV ? this.getDiscordContextFromGuildId(eV) : null !== VV ? this.getDiscordContextFromChannelId(VV) : null
      }
      exit(VV) {
        console.log("Exiting Discord Activity:", VV), this.discordSdk.close(bV.CLOSE_NORMAL, VV)
      }
      isMobilePlatform() {
        return this.discordSdk.platform === JV.c.MOBILE
      }
      applyDiscordSafeAreaNotch() {
        const VV = getComputedStyle(document.documentElement),
          eV = (eV, xV) => {
            const JV = parseFloat(VV.getPropertyValue(`--discord-safe-area-inset-${eV}`));
            return isNaN(JV) || 0 === xV ? 0 : JV / xV * 100
          };
        ZV.b.set({
          notchSize: {
            top: eV("top", window.innerHeight),
            right: Math.max(eV("right", window.innerWidth), 7),
            bottom: 0,
            left: eV("left", window.innerWidth)
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);