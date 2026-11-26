export const id = 160;
export const ids = [160];
export const modules = {
  7259: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      BloxdDiscordActivitySdk: () => vH
    });
    var AH = LH(7262),
      rH = LH(1177),
      SH = LH(1123),
      hH = LH(619),
      tH = LH(1194),
      zH = LH(1789),
      CH = LH(1297),
      EH = LH(761),
      XH = LH(15),
      GH = LH(1139),
      YH = LH(2523),
      uH = function(HH) {
        return HH.APPLICATION_COMMANDS = "applications.commands", HH.IDENTIFY = "identify", HH.EMAIL = "email", HH.GUILDS = "guilds", HH.READ_DM_CHANNELS = "dm_channels.read", HH.WRITE_ACTIVITIES = "rpc.activities.write", HH
      }(uH || {}),
      QH = function(HH) {
        return HH[HH.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", HH[HH.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", HH[HH.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", HH[HH.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", HH[HH.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", HH[HH.RATELIMITED = 4002] = "RATELIMITED", HH[HH.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", HH[HH.INVALID_VERSION = 4004] = "INVALID_VERSION", HH[HH.INVALID_ENCODING = 4005] = "INVALID_ENCODING", HH
      }(QH || {}),
      WH = function(HH) {
        return HH[HH.PLAYING = 0] = "PLAYING", HH[HH.STREAMING = 1] = "STREAMING", HH[HH.LISTENING = 2] = "LISTENING", HH[HH.WATCHING = 3] = "WATCHING", HH[HH.CUSTOM = 4] = "CUSTOM", HH[HH.COMPETING = 5] = "COMPETING", HH
      }(WH || {});
    const MH = {
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
      xH = {
        goalRush: "Playing",
        heroesvbrainrots: "Battling",
        hideseek: "Playing",
        bingo: "Playing"
      };
    class vH {
      constructor(HH) {
        this.discordSdk = HH, this.guildNameCache = {}, this.startTime = Date.now(), this.cachedAccessToken = null, this.activityUpdateId = 0
      }
      static async setup() {
        console.log("Setting up Discord SDK with client id", GH.e.discordClientID);
        const HH = new AH.b(GH.e.discordClientID);
        let BH = !1;
        setTimeout((() => {
          BH || (console.warn("Discord SDK took too long to initialize"), (0, zH.reloadBloxd)())
        }), 15e3), await HH.ready(), BH = !0;
        try {
          const {
            enabled: BH
          } = await HH.commands.encourageHardwareAcceleration();
          BH || console.warn("Hardware acceleration not enabled in the Discord client")
        } catch (rH) {
          console.error("Failed to encourage hardware acceleration in the Discord client", rH)
        }
        const LH = new vH(HH);
        return LH.isMobilePlatform() && (LH.applyDiscordSafeAreaNotch(), window.addEventListener("resize", (() => {
          LH.applyDiscordSafeAreaNotch()
        }))), LH
      }
      async updateActivityDescription(HH) {
        const BH = ++this.activityUpdateId;
        let LH, AH;
        switch (HH) {
          case "homePage":
            LH = "Chilling in the Main Menu";
            break;
          case "inGame": {
            const HH = await this.getInGameDescriptions();
            LH = HH.primary, AH = HH.secondary;
            break
          }
        }
        BH === this.activityUpdateId && await this.discordSdk.commands.setActivity({
          activity: {
            type: WH.PLAYING,
            details: LH,
            state: AH,
            assets: {
              large_image: "icon",
              large_text: LH
            },
            timestamps: {
              start: this.startTime
            }
          }
        }).catch((HH => {
          console.error(`Failed to update Discord activity rich presence with description="${LH}":`, HH)
        }))
      }
      async getInGameDescriptions() {
        const HH = (0, CH.c)(),
          {
            verb: BH,
            title: LH
          } = await this.getGameVerbAndTitle(HH.requestedGameNameWithVariation);
        if ((0, CH.g)(HH)) return {
          primary: `${BH} in a Discord World`
        };
        const AH = `${BH} in ${LH}`;
        return (0, hH.M)(HH.lobbyName) ? {
          primary: AH
        } : {
          primary: AH,
          secondary: `Lobby ${HH.lobbyName}`
        }
      }
      async getGameVerbAndTitle(HH) {
        var BH;
        const LH = "Playing";
        if ((0, hH.M)(HH)) return {
          verb: LH,
          title: "Bloxd"
        };
        const AH = (0, EH.h)(HH);
        var rH;
        if (null !== AH) return {
          verb: null !== (rH = xH[HH]) && void 0 !== rH ? rH : MH[AH.type],
          title: await (0, SH.y)(tH.d.ENGLISH, AH.title)
        };
        const zH = await (0, YH.e)(HH);
        return {
          verb: null !== (BH = zH && MH[zH.gameCategory]) && void 0 !== BH ? BH : LH,
          title: (null === zH || void 0 === zH ? void 0 : zH.name) || "a Custom World"
        }
      }
      getCurrentChannelType() {
        const {
          channelId: HH,
          guildId: BH
        } = this.getCurrentChannelAndGuild();
        return null !== BH ? rH.d.GUILD : null !== HH ? rH.d.DM : null
      }
      getRequiredScopeForCurrentChannel() {
        const HH = this.getCurrentChannelType(),
          BH = [uH.APPLICATION_COMMANDS, uH.IDENTIFY, uH.EMAIL, uH.GUILDS, uH.WRITE_ACTIVITIES];
        switch (HH) {
          case rH.d.DM:
          case rH.d.GUILD:
            return [...BH];
          default:
            throw new Error(`Unknown Discord channel type: ${HH}`)
        }
      }
      getCurrentChannelAndGuild() {
        const {
          channelId: HH,
          guildId: BH
        } = this.discordSdk;
        return {
          channelId: null !== HH && void 0 !== HH ? HH : null,
          guildId: null !== BH && void 0 !== BH ? BH : null
        }
      }
      getInstanceId() {
        return this.discordSdk.instanceId
      }
      async askDiscordUserForAuthorization() {
        const HH = this.getRequiredScopeForCurrentChannel(),
          {
            code: BH
          } = await this.discordSdk.commands.authorize({
            client_id: GH.e.discordClientID,
            response_type: "code",
            state: "",
            prompt: "none",
            scope: HH
          });
        return BH
      }
      getCachedAccessToken() {
        return this.cachedAccessToken
      }
      setCachedAccessToken(HH) {
        this.cachedAccessToken = HH
      }
      registerGuild(HH, BH) {
        this.guildNameCache[HH] = BH
      }
      async authenticate(HH) {
        return this.discordSdk.commands.authenticate({
          access_token: HH
        }).then((HH => null !== HH))
      }
      async getUserLocale() {
        try {
          const {
            locale: HH
          } = await this.discordSdk.commands.userSettingsGetLocale();
          return HH
        } catch (HH) {
          return console.error("Failed to get user locale from Discord:", HH.stack), null
        }
      }
      async getChannelName(HH) {
        return this.discordSdk.commands.getChannel({
          channel_id: HH
        }).then((HH => HH.name)).catch((HH => "Your Current Discord Chat"))
      }
      async getDiscordContextFromChannelId(HH) {
        const BH = await this.getChannelName(HH);
        return rH.g.from({
          type: rH.d.DM,
          channelId: HH,
          channelName: BH
        })
      }
      getDiscordContextFromGuildId(HH) {
        const BH = this.guildNameCache[HH];
        return (0, hH.M)(BH) ? null : rH.f.from({
          type: rH.d.GUILD,
          guildId: HH,
          guildName: BH
        })
      }
      async getCurrentDiscordContext() {
        const {
          channelId: HH,
          guildId: BH
        } = this.getCurrentChannelAndGuild();
        return null !== BH ? this.getDiscordContextFromGuildId(BH) : null !== HH ? this.getDiscordContextFromChannelId(HH) : null
      }
      exit(HH) {
        console.log("Exiting Discord Activity:", HH), this.discordSdk.close(QH.CLOSE_NORMAL, HH)
      }
      isMobilePlatform() {
        return this.discordSdk.platform === AH.d.MOBILE
      }
      applyDiscordSafeAreaNotch() {
        const HH = getComputedStyle(document.documentElement),
          BH = (BH, LH) => {
            const AH = parseFloat(HH.getPropertyValue(`--discord-safe-area-inset-${BH}`));
            return isNaN(AH) || 0 === LH ? 0 : AH / LH * 100
          };
        XH.c.set({
          notchSize: {
            top: BH("top", window.innerHeight),
            right: Math.max(BH("right", window.innerWidth), 7),
            bottom: 0,
            left: BH("left", window.innerWidth)
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);