export const id = 146;
export const ids = [146];
export const modules = {
  8256: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      BloxdDiscordActivitySdk: () => nS
    });
    var tS = gS(8262),
      bS = gS(1312),
      XS = gS(1281),
      xS = gS(680),
      NS = gS(1334),
      qS = gS(1844),
      uS = gS(1400),
      IS = gS(830),
      fS = gS(24),
      kS = gS(1158),
      aS = function(SS) {
        return SS.APPLICATION_COMMANDS = "applications.commands", SS.IDENTIFY = "identify", SS.EMAIL = "email", SS.GUILDS = "guilds", SS.READ_DM_CHANNELS = "dm_channels.read", SS.WRITE_ACTIVITIES = "rpc.activities.write", SS
      }(aS || {}),
      KS = function(SS) {
        return SS[SS.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", SS[SS.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", SS[SS.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", SS[SS.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", SS[SS.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", SS[SS.RATELIMITED = 4002] = "RATELIMITED", SS[SS.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", SS[SS.INVALID_VERSION = 4004] = "INVALID_VERSION", SS[SS.INVALID_ENCODING = 4005] = "INVALID_ENCODING", SS
      }(KS || {}),
      jS = function(SS) {
        return SS[SS.PLAYING = 0] = "PLAYING", SS[SS.STREAMING = 1] = "STREAMING", SS[SS.LISTENING = 2] = "LISTENING", SS[SS.WATCHING = 3] = "WATCHING", SS[SS.CUSTOM = 4] = "CUSTOM", SS[SS.COMPETING = 5] = "COMPETING", SS
      }(jS || {});
    const GS = {
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
      CS = {
        goalRush: "Playing",
        heroesvbrainrots: "Battling",
        hideseek: "Playing",
        bingo: "Playing"
      };
    class nS {
      constructor(SS) {
        this.discordSdk = SS, this.guildNameCache = {}, this.startTime = Date.now(), this.cachedAccessToken = null
      }
      static async setup() {
        console.log("Setting up Discord SDK with client id", kS.b.discordClientID);
        const SS = new tS.d(kS.b.discordClientID);
        let HS = !1;
        setTimeout((() => {
          HS || (console.warn("Discord SDK took too long to initialize"), (0, qS.reloadBloxd)())
        }), 15e3), await SS.ready(), HS = !0;
        try {
          const {
            enabled: HS
          } = await SS.commands.encourageHardwareAcceleration();
          HS || console.warn("Hardware acceleration not enabled in the Discord client")
        } catch (bS) {
          console.error("Failed to encourage hardware acceleration in the Discord client", bS)
        }
        const gS = new nS(SS);
        return gS.isMobilePlatform() && (gS.applyDiscordSafeAreaNotch(), window.addEventListener("resize", (() => {
          gS.applyDiscordSafeAreaNotch()
        }))), gS
      }
      async updateActivityDescription(SS) {
        let HS, gS;
        switch (SS) {
          case "homePage":
            HS = "Chilling in the Main Menu";
            break;
          case "inGame": {
            const SS = await this.getInGameDescriptions();
            HS = SS.primary, gS = SS.secondary;
            break
          }
        }
        await this.discordSdk.commands.setActivity({
          activity: {
            type: jS.PLAYING,
            details: HS,
            state: gS,
            assets: {
              large_image: "icon",
              large_text: HS
            },
            timestamps: {
              start: this.startTime
            }
          }
        }).catch((SS => {
          console.error(`Failed to update Discord activity rich presence with description="${HS}":`, SS)
        }))
      }
      async getInGameDescriptions() {
        var SS;
        const {
          requestedGameNameWithVariation: HS
        } = (0, uS.e)(), gS = (0, IS.i)(HS), tS = null !== (SS = CS[HS]) && void 0 !== SS ? SS : GS[gS.type], bS = await (0, XS.E)(NS.d.ENGLISH, gS.title), qS = (0, uS.e)();
        if ((0, uS.i)(qS)) return {
          primary: `${tS} in a Discord World`
        };
        const fS = `${tS} in ${bS}`;
        return (0, xS.K)(qS.lobbyName) ? {
          primary: fS
        } : {
          primary: fS,
          secondary: `Lobby ${qS.lobbyName}`
        }
      }
      getCurrentChannelType() {
        const {
          channelId: SS,
          guildId: HS
        } = this.getCurrentChannelAndGuild();
        return null !== HS ? bS.e.GUILD : null !== SS ? bS.e.DM : null
      }
      getRequiredScopeForCurrentChannel() {
        const SS = this.getCurrentChannelType(),
          HS = [aS.APPLICATION_COMMANDS, aS.IDENTIFY, aS.EMAIL, aS.GUILDS, aS.WRITE_ACTIVITIES];
        switch (SS) {
          case bS.e.DM:
          case bS.e.GUILD:
            return [...HS];
          default:
            throw new Error(`Unknown Discord channel type: ${SS}`)
        }
      }
      getCurrentChannelAndGuild() {
        const {
          channelId: SS,
          guildId: HS
        } = this.discordSdk;
        return {
          channelId: null !== SS && void 0 !== SS ? SS : null,
          guildId: null !== HS && void 0 !== HS ? HS : null
        }
      }
      getInstanceId() {
        return this.discordSdk.instanceId
      }
      async askDiscordUserForAuthorization() {
        const SS = this.getRequiredScopeForCurrentChannel(),
          {
            code: HS
          } = await this.discordSdk.commands.authorize({
            client_id: kS.b.discordClientID,
            response_type: "code",
            state: "",
            prompt: "none",
            scope: SS
          });
        return HS
      }
      getCachedAccessToken() {
        return this.cachedAccessToken
      }
      setCachedAccessToken(SS) {
        this.cachedAccessToken = SS
      }
      registerGuild(SS, HS) {
        this.guildNameCache[SS] = HS
      }
      async authenticate(SS) {
        return this.discordSdk.commands.authenticate({
          access_token: SS
        }).then((SS => null !== SS))
      }
      async getUserLocale() {
        try {
          const {
            locale: SS
          } = await this.discordSdk.commands.userSettingsGetLocale();
          return SS
        } catch (SS) {
          return console.error("Failed to get user locale from Discord:", SS.stack), null
        }
      }
      async getChannelName(SS) {
        return this.discordSdk.commands.getChannel({
          channel_id: SS
        }).then((SS => SS.name)).catch((SS => "Your Current Discord Chat"))
      }
      async getDiscordContextFromChannelId(SS) {
        const HS = await this.getChannelName(SS);
        return bS.h.from({
          type: bS.e.DM,
          channelId: SS,
          channelName: HS
        })
      }
      getDiscordContextFromGuildId(SS) {
        const HS = this.guildNameCache[SS];
        return (0, xS.K)(HS) ? null : bS.g.from({
          type: bS.e.GUILD,
          guildId: SS,
          guildName: HS
        })
      }
      async getCurrentDiscordContext() {
        const {
          channelId: SS,
          guildId: HS
        } = this.getCurrentChannelAndGuild();
        return null !== HS ? this.getDiscordContextFromGuildId(HS) : null !== SS ? this.getDiscordContextFromChannelId(SS) : null
      }
      exit(SS) {
        console.log("Exiting Discord Activity:", SS), this.discordSdk.close(KS.CLOSE_NORMAL, SS)
      }
      isMobilePlatform() {
        return this.discordSdk.platform === tS.h.MOBILE
      }
      applyDiscordSafeAreaNotch() {
        const SS = getComputedStyle(document.documentElement),
          HS = (HS, gS) => {
            const tS = parseFloat(SS.getPropertyValue(`--discord-safe-area-inset-${HS}`));
            return isNaN(tS) || 0 === gS ? 0 : tS / gS * 100
          };
        fS.b.set({
          notchSize: {
            top: HS("top", window.innerHeight),
            right: Math.max(HS("right", window.innerWidth), 7),
            bottom: 0,
            left: HS("left", window.innerWidth)
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);