export const id = 148;
export const ids = [148];
export const modules = {
  8134: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      BloxdDiscordActivitySdk: () => zG
    });
    var wG = ZG(8142),
      SG = ZG(1185),
      LG = ZG(1151),
      yG = ZG(604),
      kG = ZG(1204),
      UG = ZG(1702),
      YG = ZG(1287),
      VG = ZG(751),
      pG = ZG(17),
      fG = ZG(1036),
      QG = ZG(2351),
      KG = function(GG) {
        return GG.APPLICATION_COMMANDS = "applications.commands", GG.IDENTIFY = "identify", GG.EMAIL = "email", GG.GUILDS = "guilds", GG.READ_DM_CHANNELS = "dm_channels.read", GG.WRITE_ACTIVITIES = "rpc.activities.write", GG
      }(KG || {}),
      hG = function(GG) {
        return GG[GG.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", GG[GG.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", GG[GG.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", GG[GG.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", GG[GG.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", GG[GG.RATELIMITED = 4002] = "RATELIMITED", GG[GG.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", GG[GG.INVALID_VERSION = 4004] = "INVALID_VERSION", GG[GG.INVALID_ENCODING = 4005] = "INVALID_ENCODING", GG
      }(hG || {}),
      dG = function(GG) {
        return GG[GG.PLAYING = 0] = "PLAYING", GG[GG.STREAMING = 1] = "STREAMING", GG[GG.LISTENING = 2] = "LISTENING", GG[GG.WATCHING = 3] = "WATCHING", GG[GG.CUSTOM = 4] = "CUSTOM", GG[GG.COMPETING = 5] = "COMPETING", GG
      }(dG || {});
    const JG = {
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
      rG = {
        goalRush: "Playing",
        heroesvbrainrots: "Battling",
        hideseek: "Playing",
        bingo: "Playing"
      };
    class zG {
      constructor(GG) {
        this.discordSdk = GG, this.guildNameCache = {}, this.startTime = Date.now(), this.cachedAccessToken = null, this.activityUpdateId = 0
      }
      static async setup() {
        console.log("Setting up Discord SDK with client id", fG.c.discordClientID);
        const GG = new wG.d(fG.c.discordClientID);
        let bG = !1;
        setTimeout((() => {
          bG || (console.warn("Discord SDK took too long to initialize"), (0, UG.reloadBloxd)())
        }), 15e3), await GG.ready(), bG = !0;
        try {
          const {
            enabled: bG
          } = await GG.commands.encourageHardwareAcceleration();
          bG || console.warn("Hardware acceleration not enabled in the Discord client")
        } catch (SG) {
          console.error("Failed to encourage hardware acceleration in the Discord client", SG)
        }
        const ZG = new zG(GG);
        return ZG.isMobilePlatform() && (ZG.applyDiscordSafeAreaNotch(), window.addEventListener("resize", (() => {
          ZG.applyDiscordSafeAreaNotch()
        }))), ZG
      }
      async updateActivityDescription(GG) {
        const bG = ++this.activityUpdateId;
        let ZG, wG;
        switch (GG) {
          case "homePage":
            ZG = "Chilling in the Main Menu";
            break;
          case "inGame": {
            const GG = await this.getInGameDescriptions();
            ZG = GG.primary, wG = GG.secondary;
            break
          }
        }
        bG === this.activityUpdateId && await this.discordSdk.commands.setActivity({
          activity: {
            type: dG.PLAYING,
            details: ZG,
            state: wG,
            assets: {
              large_image: "icon",
              large_text: ZG
            },
            timestamps: {
              start: this.startTime
            }
          }
        }).catch((GG => {
          console.error(`Failed to update Discord activity rich presence with description="${ZG}":`, GG)
        }))
      }
      async getInGameDescriptions() {
        const GG = (0, YG.d)(),
          {
            verb: bG,
            title: ZG
          } = await this.getGameVerbAndTitle(GG.requestedGameNameWithVariation);
        if ((0, YG.i)(GG)) return {
          primary: `${bG} in a Discord World`
        };
        const wG = `${bG} in ${ZG}`;
        return (0, yG.L)(GG.lobbyName) ? {
          primary: wG
        } : {
          primary: wG,
          secondary: `Lobby ${GG.lobbyName}`
        }
      }
      async getGameVerbAndTitle(GG) {
        var bG;
        const ZG = "Playing";
        if ((0, yG.L)(GG)) return {
          verb: ZG,
          title: "Bloxd"
        };
        const wG = (0, VG.p)(GG);
        var SG;
        if (null !== wG) return {
          verb: null !== (SG = rG[GG]) && void 0 !== SG ? SG : JG[wG.type],
          title: await (0, LG.u)(kG.b.ENGLISH, wG.title)
        };
        const UG = await (0, QG.e)(GG);
        return {
          verb: null !== (bG = UG && JG[UG.gameCategory]) && void 0 !== bG ? bG : ZG,
          title: (null === UG || void 0 === UG ? void 0 : UG.name) || "a Custom World"
        }
      }
      getCurrentChannelType() {
        const {
          channelId: GG,
          guildId: bG
        } = this.getCurrentChannelAndGuild();
        return null !== bG ? SG.b.GUILD : null !== GG ? SG.b.DM : null
      }
      getRequiredScopeForCurrentChannel() {
        const GG = this.getCurrentChannelType(),
          bG = [KG.APPLICATION_COMMANDS, KG.IDENTIFY, KG.EMAIL, KG.GUILDS, KG.WRITE_ACTIVITIES];
        switch (GG) {
          case SG.b.DM:
          case SG.b.GUILD:
            return [...bG];
          default:
            throw new Error(`Unknown Discord channel type: ${GG}`)
        }
      }
      getCurrentChannelAndGuild() {
        const {
          channelId: GG,
          guildId: bG
        } = this.discordSdk;
        return {
          channelId: null !== GG && void 0 !== GG ? GG : null,
          guildId: null !== bG && void 0 !== bG ? bG : null
        }
      }
      getInstanceId() {
        return this.discordSdk.instanceId
      }
      async askDiscordUserForAuthorization() {
        const GG = this.getRequiredScopeForCurrentChannel(),
          {
            code: bG
          } = await this.discordSdk.commands.authorize({
            client_id: fG.c.discordClientID,
            response_type: "code",
            state: "",
            prompt: "none",
            scope: GG
          });
        return bG
      }
      getCachedAccessToken() {
        return this.cachedAccessToken
      }
      setCachedAccessToken(GG) {
        this.cachedAccessToken = GG
      }
      registerGuild(GG, bG) {
        this.guildNameCache[GG] = bG
      }
      async authenticate(GG) {
        return this.discordSdk.commands.authenticate({
          access_token: GG
        }).then((GG => null !== GG))
      }
      async getUserLocale() {
        try {
          const {
            locale: GG
          } = await this.discordSdk.commands.userSettingsGetLocale();
          return GG
        } catch (GG) {
          return console.error("Failed to get user locale from Discord:", GG.stack), null
        }
      }
      async getChannelName(GG) {
        return this.discordSdk.commands.getChannel({
          channel_id: GG
        }).then((GG => GG.name)).catch((GG => "Your Current Discord Chat"))
      }
      async getDiscordContextFromChannelId(GG) {
        const bG = await this.getChannelName(GG);
        return SG.f.from({
          type: SG.b.DM,
          channelId: GG,
          channelName: bG
        })
      }
      getDiscordContextFromGuildId(GG) {
        const bG = this.guildNameCache[GG];
        return (0, yG.L)(bG) ? null : SG.e.from({
          type: SG.b.GUILD,
          guildId: GG,
          guildName: bG
        })
      }
      async getCurrentDiscordContext() {
        const {
          channelId: GG,
          guildId: bG
        } = this.getCurrentChannelAndGuild();
        return null !== bG ? this.getDiscordContextFromGuildId(bG) : null !== GG ? this.getDiscordContextFromChannelId(GG) : null
      }
      exit(GG) {
        console.log("Exiting Discord Activity:", GG), this.discordSdk.close(hG.CLOSE_NORMAL, GG)
      }
      isMobilePlatform() {
        return this.discordSdk.platform === wG.e.MOBILE
      }
      applyDiscordSafeAreaNotch() {
        const GG = getComputedStyle(document.documentElement),
          bG = (bG, ZG) => {
            const wG = parseFloat(GG.getPropertyValue(`--discord-safe-area-inset-${bG}`));
            return isNaN(wG) || 0 === ZG ? 0 : wG / ZG * 100
          };
        pG.e.set({
          notchSize: {
            top: bG("top", window.innerHeight),
            right: Math.max(bG("right", window.innerWidth), 7),
            bottom: 0,
            left: bG("left", window.innerWidth)
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);