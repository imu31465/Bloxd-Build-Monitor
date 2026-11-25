export const id = 159;
export const ids = [159];
export const modules = {
  7180: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      BloxdDiscordActivitySdk: () => EM
    });
    var OM = iM(7185),
      SM = iM(1232),
      jM = iM(1188),
      aM = iM(625),
      PM = iM(1258),
      nM = iM(1830),
      QM = iM(1373),
      zM = iM(821),
      LM = iM(19),
      mM = iM(1211),
      HM = iM(2482),
      hM = function(MM) {
        return MM.APPLICATION_COMMANDS = "applications.commands", MM.IDENTIFY = "identify", MM.EMAIL = "email", MM.GUILDS = "guilds", MM.READ_DM_CHANNELS = "dm_channels.read", MM.WRITE_ACTIVITIES = "rpc.activities.write", MM
      }(hM || {}),
      JM = function(MM) {
        return MM[MM.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", MM[MM.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", MM[MM.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", MM[MM.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", MM[MM.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", MM[MM.RATELIMITED = 4002] = "RATELIMITED", MM[MM.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", MM[MM.INVALID_VERSION = 4004] = "INVALID_VERSION", MM[MM.INVALID_ENCODING = 4005] = "INVALID_ENCODING", MM
      }(JM || {}),
      dM = function(MM) {
        return MM[MM.PLAYING = 0] = "PLAYING", MM[MM.STREAMING = 1] = "STREAMING", MM[MM.LISTENING = 2] = "LISTENING", MM[MM.WATCHING = 3] = "WATCHING", MM[MM.CUSTOM = 4] = "CUSTOM", MM[MM.COMPETING = 5] = "COMPETING", MM
      }(dM || {});
    const yM = {
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
      lM = {
        goalRush: "Playing",
        heroesvbrainrots: "Battling",
        hideseek: "Playing",
        bingo: "Playing"
      };
    class EM {
      constructor(MM) {
        this.discordSdk = MM, this.guildNameCache = {}, this.startTime = Date.now(), this.cachedAccessToken = null, this.activityUpdateId = 0
      }
      static async setup() {
        console.log("Setting up Discord SDK with client id", mM.e.discordClientID);
        const MM = new OM.b(mM.e.discordClientID);
        let rM = !1;
        setTimeout((() => {
          rM || (console.warn("Discord SDK took too long to initialize"), (0, nM.reloadBloxd)())
        }), 15e3), await MM.ready(), rM = !0;
        try {
          const {
            enabled: rM
          } = await MM.commands.encourageHardwareAcceleration();
          rM || console.warn("Hardware acceleration not enabled in the Discord client")
        } catch (SM) {
          console.error("Failed to encourage hardware acceleration in the Discord client", SM)
        }
        const iM = new EM(MM);
        return iM.isMobilePlatform() && (iM.applyDiscordSafeAreaNotch(), window.addEventListener("resize", (() => {
          iM.applyDiscordSafeAreaNotch()
        }))), iM
      }
      async updateActivityDescription(MM) {
        const rM = ++this.activityUpdateId;
        let iM, OM;
        switch (MM) {
          case "homePage":
            iM = "Chilling in the Main Menu";
            break;
          case "inGame": {
            const MM = await this.getInGameDescriptions();
            iM = MM.primary, OM = MM.secondary;
            break
          }
        }
        rM === this.activityUpdateId && await this.discordSdk.commands.setActivity({
          activity: {
            type: dM.PLAYING,
            details: iM,
            state: OM,
            assets: {
              large_image: "icon",
              large_text: iM
            },
            timestamps: {
              start: this.startTime
            }
          }
        }).catch((MM => {
          console.error(`Failed to update Discord activity rich presence with description="${iM}":`, MM)
        }))
      }
      async getInGameDescriptions() {
        const MM = (0, QM.e)(),
          {
            verb: rM,
            title: iM
          } = await this.getGameVerbAndTitle(MM.requestedGameNameWithVariation);
        if ((0, QM.k)(MM)) return {
          primary: `${rM} in a Discord World`
        };
        const OM = `${rM} in ${iM}`;
        return (0, aM.J)(MM.lobbyName) ? {
          primary: OM
        } : {
          primary: OM,
          secondary: `Lobby ${MM.lobbyName}`
        }
      }
      async getGameVerbAndTitle(MM) {
        var rM;
        const iM = "Playing";
        if ((0, aM.J)(MM)) return {
          verb: iM,
          title: "Bloxd"
        };
        const OM = (0, zM.m)(MM);
        var SM;
        if (null !== OM) return {
          verb: null !== (SM = lM[MM]) && void 0 !== SM ? SM : yM[OM.type],
          title: await (0, jM.y)(PM.c.ENGLISH, OM.title)
        };
        const nM = await (0, HM.d)(MM);
        return {
          verb: null !== (rM = nM && yM[nM.gameCategory]) && void 0 !== rM ? rM : iM,
          title: (null === nM || void 0 === nM ? void 0 : nM.name) || "a Custom World"
        }
      }
      getCurrentChannelType() {
        const {
          channelId: MM,
          guildId: rM
        } = this.getCurrentChannelAndGuild();
        return null !== rM ? SM.c.GUILD : null !== MM ? SM.c.DM : null
      }
      getRequiredScopeForCurrentChannel() {
        const MM = this.getCurrentChannelType(),
          rM = [hM.APPLICATION_COMMANDS, hM.IDENTIFY, hM.EMAIL, hM.GUILDS, hM.WRITE_ACTIVITIES];
        switch (MM) {
          case SM.c.DM:
          case SM.c.GUILD:
            return [...rM];
          default:
            throw new Error(`Unknown Discord channel type: ${MM}`)
        }
      }
      getCurrentChannelAndGuild() {
        const {
          channelId: MM,
          guildId: rM
        } = this.discordSdk;
        return {
          channelId: null !== MM && void 0 !== MM ? MM : null,
          guildId: null !== rM && void 0 !== rM ? rM : null
        }
      }
      getInstanceId() {
        return this.discordSdk.instanceId
      }
      async askDiscordUserForAuthorization() {
        const MM = this.getRequiredScopeForCurrentChannel(),
          {
            code: rM
          } = await this.discordSdk.commands.authorize({
            client_id: mM.e.discordClientID,
            response_type: "code",
            state: "",
            prompt: "none",
            scope: MM
          });
        return rM
      }
      getCachedAccessToken() {
        return this.cachedAccessToken
      }
      setCachedAccessToken(MM) {
        this.cachedAccessToken = MM
      }
      registerGuild(MM, rM) {
        this.guildNameCache[MM] = rM
      }
      async authenticate(MM) {
        return this.discordSdk.commands.authenticate({
          access_token: MM
        }).then((MM => null !== MM))
      }
      async getUserLocale() {
        try {
          const {
            locale: MM
          } = await this.discordSdk.commands.userSettingsGetLocale();
          return MM
        } catch (MM) {
          return console.error("Failed to get user locale from Discord:", MM.stack), null
        }
      }
      async getChannelName(MM) {
        return this.discordSdk.commands.getChannel({
          channel_id: MM
        }).then((MM => MM.name)).catch((MM => "Your Current Discord Chat"))
      }
      async getDiscordContextFromChannelId(MM) {
        const rM = await this.getChannelName(MM);
        return SM.i.from({
          type: SM.c.DM,
          channelId: MM,
          channelName: rM
        })
      }
      getDiscordContextFromGuildId(MM) {
        const rM = this.guildNameCache[MM];
        return (0, aM.J)(rM) ? null : SM.e.from({
          type: SM.c.GUILD,
          guildId: MM,
          guildName: rM
        })
      }
      async getCurrentDiscordContext() {
        const {
          channelId: MM,
          guildId: rM
        } = this.getCurrentChannelAndGuild();
        return null !== rM ? this.getDiscordContextFromGuildId(rM) : null !== MM ? this.getDiscordContextFromChannelId(MM) : null
      }
      exit(MM) {
        console.log("Exiting Discord Activity:", MM), this.discordSdk.close(JM.CLOSE_NORMAL, MM)
      }
      isMobilePlatform() {
        return this.discordSdk.platform === OM.e.MOBILE
      }
      applyDiscordSafeAreaNotch() {
        const MM = getComputedStyle(document.documentElement),
          rM = (rM, iM) => {
            const OM = parseFloat(MM.getPropertyValue(`--discord-safe-area-inset-${rM}`));
            return isNaN(OM) || 0 === iM ? 0 : OM / iM * 100
          };
        LM.d.set({
          notchSize: {
            top: rM("top", window.innerHeight),
            right: Math.max(rM("right", window.innerWidth), 7),
            bottom: 0,
            left: rM("left", window.innerWidth)
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);