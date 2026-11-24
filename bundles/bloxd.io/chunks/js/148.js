export const id = 148;
export const ids = [148];
export const modules = {
  8205: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      BloxdDiscordActivitySdk: () => fT
    });
    var WT = mT(8214),
      zT = mT(1324),
      MT = mT(1288),
      gT = mT(653),
      nT = mT(1345),
      HT = mT(1863),
      kT = mT(1429),
      jT = mT(825),
      lT = mT(25),
      LT = mT(1160),
      pT = function(TT) {
        return TT.APPLICATION_COMMANDS = "applications.commands", TT.IDENTIFY = "identify", TT.EMAIL = "email", TT.GUILDS = "guilds", TT.READ_DM_CHANNELS = "dm_channels.read", TT.WRITE_ACTIVITIES = "rpc.activities.write", TT
      }(pT || {}),
      BT = function(TT) {
        return TT[TT.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", TT[TT.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", TT[TT.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", TT[TT.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", TT[TT.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", TT[TT.RATELIMITED = 4002] = "RATELIMITED", TT[TT.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", TT[TT.INVALID_VERSION = 4004] = "INVALID_VERSION", TT[TT.INVALID_ENCODING = 4005] = "INVALID_ENCODING", TT
      }(BT || {}),
      ZT = function(TT) {
        return TT[TT.PLAYING = 0] = "PLAYING", TT[TT.STREAMING = 1] = "STREAMING", TT[TT.LISTENING = 2] = "LISTENING", TT[TT.WATCHING = 3] = "WATCHING", TT[TT.CUSTOM = 4] = "CUSTOM", TT[TT.COMPETING = 5] = "COMPETING", TT
      }(ZT || {});
    const cT = {
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
      vT = {
        goalRush: "Playing",
        heroesvbrainrots: "Battling",
        hideseek: "Playing",
        bingo: "Playing"
      };
    class fT {
      constructor(TT) {
        this.discordSdk = TT, this.guildNameCache = {}, this.startTime = Date.now(), this.cachedAccessToken = null
      }
      static async setup() {
        console.log("Setting up Discord SDK with client id", LT.b.discordClientID);
        const TT = new WT.b(LT.b.discordClientID);
        let UT = !1;
        setTimeout((() => {
          UT || (console.warn("Discord SDK took too long to initialize"), (0, HT.reloadBloxd)())
        }), 15e3), await TT.ready(), UT = !0;
        try {
          const {
            enabled: UT
          } = await TT.commands.encourageHardwareAcceleration();
          UT || console.warn("Hardware acceleration not enabled in the Discord client")
        } catch (zT) {
          console.error("Failed to encourage hardware acceleration in the Discord client", zT)
        }
        const mT = new fT(TT);
        return mT.isMobilePlatform() && (mT.applyDiscordSafeAreaNotch(), window.addEventListener("resize", (() => {
          mT.applyDiscordSafeAreaNotch()
        }))), mT
      }
      async updateActivityDescription(TT) {
        let UT, mT;
        switch (TT) {
          case "homePage":
            UT = "Chilling in the Main Menu";
            break;
          case "inGame": {
            const TT = await this.getInGameDescriptions();
            UT = TT.primary, mT = TT.secondary;
            break
          }
        }
        await this.discordSdk.commands.setActivity({
          activity: {
            type: ZT.PLAYING,
            details: UT,
            state: mT,
            assets: {
              large_image: "icon",
              large_text: UT
            },
            timestamps: {
              start: this.startTime
            }
          }
        }).catch((TT => {
          console.error(`Failed to update Discord activity rich presence with description="${UT}":`, TT)
        }))
      }
      async getInGameDescriptions() {
        var TT;
        const {
          requestedGameNameWithVariation: UT
        } = (0, kT.c)(), mT = (0, jT.l)(UT), WT = null !== (TT = vT[UT]) && void 0 !== TT ? TT : cT[mT.type], zT = await (0, MT.w)(nT.d.ENGLISH, mT.title), HT = (0, kT.c)();
        if ((0, kT.g)(HT)) return {
          primary: `${WT} in a Discord World`
        };
        const lT = `${WT} in ${zT}`;
        return (0, gT.E)(HT.lobbyName) ? {
          primary: lT
        } : {
          primary: lT,
          secondary: `Lobby ${HT.lobbyName}`
        }
      }
      getCurrentChannelType() {
        const {
          channelId: TT,
          guildId: UT
        } = this.getCurrentChannelAndGuild();
        return null !== UT ? zT.c.GUILD : null !== TT ? zT.c.DM : null
      }
      getRequiredScopeForCurrentChannel() {
        const TT = this.getCurrentChannelType(),
          UT = [pT.APPLICATION_COMMANDS, pT.IDENTIFY, pT.EMAIL, pT.GUILDS, pT.WRITE_ACTIVITIES];
        switch (TT) {
          case zT.c.DM:
          case zT.c.GUILD:
            return [...UT];
          default:
            throw new Error(`Unknown Discord channel type: ${TT}`)
        }
      }
      getCurrentChannelAndGuild() {
        const {
          channelId: TT,
          guildId: UT
        } = this.discordSdk;
        return {
          channelId: null !== TT && void 0 !== TT ? TT : null,
          guildId: null !== UT && void 0 !== UT ? UT : null
        }
      }
      getInstanceId() {
        return this.discordSdk.instanceId
      }
      async askDiscordUserForAuthorization() {
        const TT = this.getRequiredScopeForCurrentChannel(),
          {
            code: UT
          } = await this.discordSdk.commands.authorize({
            client_id: LT.b.discordClientID,
            response_type: "code",
            state: "",
            prompt: "none",
            scope: TT
          });
        return UT
      }
      getCachedAccessToken() {
        return this.cachedAccessToken
      }
      setCachedAccessToken(TT) {
        this.cachedAccessToken = TT
      }
      registerGuild(TT, UT) {
        this.guildNameCache[TT] = UT
      }
      async authenticate(TT) {
        return this.discordSdk.commands.authenticate({
          access_token: TT
        }).then((TT => null !== TT))
      }
      async getUserLocale() {
        try {
          const {
            locale: TT
          } = await this.discordSdk.commands.userSettingsGetLocale();
          return TT
        } catch (TT) {
          return console.error("Failed to get user locale from Discord:", TT.stack), null
        }
      }
      async getChannelName(TT) {
        return this.discordSdk.commands.getChannel({
          channel_id: TT
        }).then((TT => TT.name)).catch((TT => "Your Current Discord Chat"))
      }
      async getDiscordContextFromChannelId(TT) {
        const UT = await this.getChannelName(TT);
        return zT.g.from({
          type: zT.c.DM,
          channelId: TT,
          channelName: UT
        })
      }
      getDiscordContextFromGuildId(TT) {
        const UT = this.guildNameCache[TT];
        return (0, gT.E)(UT) ? null : zT.e.from({
          type: zT.c.GUILD,
          guildId: TT,
          guildName: UT
        })
      }
      async getCurrentDiscordContext() {
        const {
          channelId: TT,
          guildId: UT
        } = this.getCurrentChannelAndGuild();
        return null !== UT ? this.getDiscordContextFromGuildId(UT) : null !== TT ? this.getDiscordContextFromChannelId(TT) : null
      }
      exit(TT) {
        console.log("Exiting Discord Activity:", TT), this.discordSdk.close(BT.CLOSE_NORMAL, TT)
      }
      isMobilePlatform() {
        return this.discordSdk.platform === WT.d.MOBILE
      }
      applyDiscordSafeAreaNotch() {
        const TT = getComputedStyle(document.documentElement),
          UT = (UT, mT) => {
            const WT = parseFloat(TT.getPropertyValue(`--discord-safe-area-inset-${UT}`));
            return isNaN(WT) || 0 === mT ? 0 : WT / mT * 100
          };
        lT.b.set({
          notchSize: {
            top: UT("top", window.innerHeight),
            right: Math.max(UT("right", window.innerWidth), 7),
            bottom: 0,
            left: UT("left", window.innerWidth)
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);