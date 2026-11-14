export const id = 129;
export const ids = [129];
export const modules = {
  7045: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      BloxdDiscordActivitySdk: () => TF
    });
    var CF = SF(7054),
      AF = SF(1090),
      uF = SF(1046),
      hF = SF(568),
      bW = SF(1115),
      dF = SF(1510),
      PF = SF(1175),
      RF = SF(612),
      iW = SF(11),
      eF = SF(1065),
      EF = function(FF) {
        return FF.APPLICATION_COMMANDS = "applications.commands", FF.IDENTIFY = "identify", FF.EMAIL = "email", FF.GUILDS = "guilds", FF.READ_DM_CHANNELS = "dm_channels.read", FF.WRITE_ACTIVITIES = "rpc.activities.write", FF
      }(EF || {}),
      QF = function(FF) {
        return FF[FF.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", FF[FF.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", FF[FF.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", FF[FF.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", FF[FF.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", FF[FF.RATELIMITED = 4002] = "RATELIMITED", FF[FF.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", FF[FF.INVALID_VERSION = 4004] = "INVALID_VERSION", FF[FF.INVALID_ENCODING = 4005] = "INVALID_ENCODING", FF
      }(QF || {}),
      rW = function(FF) {
        return FF[FF.PLAYING = 0] = "PLAYING", FF[FF.STREAMING = 1] = "STREAMING", FF[FF.LISTENING = 2] = "LISTENING", FF[FF.WATCHING = 3] = "WATCHING", FF[FF.CUSTOM = 4] = "CUSTOM", FF[FF.COMPETING = 5] = "COMPETING", FF
      }(rW || {});
    const gW = {
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
      tW = {
        goalRush: "Playing",
        heroesvbrainrots: "Battling",
        hideseek: "Playing",
        bingo: "Playing"
      };
    class TF {
      constructor(FF) {
        this.discordSdk = FF, this.guildNameCache = {}, this.startTime = Date.now(), this.cachedAccessToken = null
      }
      static async setup() {
        console.log("Setting up Discord SDK with client id", eF.b.discordClientID);
        const FF = new CF.d(eF.b.discordClientID);
        let WF = !1;
        setTimeout((() => {
          WF || (console.warn("Discord SDK took too long to initialize"), (0, dF.reloadBloxd)())
        }), 15e3), await FF.ready(), WF = !0;
        try {
          const {
            enabled: WF
          } = await FF.commands.encourageHardwareAcceleration();
          WF || console.warn("Hardware acceleration not enabled in the Discord client")
        } catch (AF) {
          console.error("Failed to encourage hardware acceleration in the Discord client", AF)
        }
        const SF = new TF(FF);
        return SF.applyDiscordSafeAreaNotch(), SF
      }
      async updateActivityDescription(FF) {
        let WF, SF;
        switch (FF) {
          case "homePage":
            WF = "Chilling in the Main Menu";
            break;
          case "inGame": {
            const FF = await this.getInGameDescriptions();
            WF = FF.primary, SF = FF.secondary;
            break
          }
        }
        await this.discordSdk.commands.setActivity({
          activity: {
            type: rW.PLAYING,
            details: WF,
            state: SF,
            assets: {
              large_image: "icon",
              large_text: WF
            },
            timestamps: {
              start: this.startTime
            }
          }
        }).catch((FF => {
          console.error(`Failed to update Discord activity rich presence with description="${WF}":`, FF)
        }))
      }
      async getInGameDescriptions() {
        var FF;
        const {
          requestedGameNameWithVariation: WF
        } = (0, PF.e)(), SF = (0, RF.m)(WF), CF = null !== (FF = tW[WF]) && void 0 !== FF ? FF : gW[SF.type], AF = await (0, uF.x)(bW.e.ENGLISH, SF.title), dF = (0, PF.e)();
        if ((0, PF.m)(dF)) return {
          primary: `${CF} in a Discord World`
        };
        const iW = `${CF} in ${AF}`;
        return (0, hF.Q)(dF.lobbyName) ? {
          primary: iW
        } : {
          primary: iW,
          secondary: `Lobby ${dF.lobbyName}`
        }
      }
      getCurrentChannelType() {
        const {
          channelId: FF,
          guildId: WF
        } = this.getCurrentChannelAndGuild();
        return null !== WF ? AF.b.GUILD : null !== FF ? AF.b.DM : null
      }
      getRequiredScopeForCurrentChannel() {
        const FF = this.getCurrentChannelType(),
          WF = [EF.APPLICATION_COMMANDS, EF.IDENTIFY, EF.EMAIL, EF.GUILDS, EF.WRITE_ACTIVITIES];
        switch (FF) {
          case AF.b.DM:
          case AF.b.GUILD:
            return [...WF];
          default:
            throw new Error(`Unknown Discord channel type: ${FF}`)
        }
      }
      getCurrentChannelAndGuild() {
        const {
          channelId: FF,
          guildId: WF
        } = this.discordSdk;
        return {
          channelId: null !== FF && void 0 !== FF ? FF : null,
          guildId: null !== WF && void 0 !== WF ? WF : null
        }
      }
      getInstanceId() {
        return this.discordSdk.instanceId
      }
      async askDiscordUserForAuthorization() {
        const FF = this.getRequiredScopeForCurrentChannel(),
          {
            code: WF
          } = await this.discordSdk.commands.authorize({
            client_id: eF.b.discordClientID,
            response_type: "code",
            state: "",
            prompt: "none",
            scope: FF
          });
        return WF
      }
      getCachedAccessToken() {
        return this.cachedAccessToken
      }
      setCachedAccessToken(FF) {
        this.cachedAccessToken = FF
      }
      registerGuild(FF, WF) {
        this.guildNameCache[FF] = WF
      }
      async authenticate(FF) {
        return this.discordSdk.commands.authenticate({
          access_token: FF
        }).then((FF => null !== FF))
      }
      async getUserLocale() {
        try {
          const {
            locale: FF
          } = await this.discordSdk.commands.userSettingsGetLocale();
          return FF
        } catch (FF) {
          return console.error("Failed to get user locale from Discord:", FF.stack), null
        }
      }
      async getChannelName(FF) {
        return this.discordSdk.commands.getChannel({
          channel_id: FF
        }).then((FF => FF.name)).catch((FF => "Your Current Discord Chat"))
      }
      async getDiscordContextFromChannelId(FF) {
        const WF = await this.getChannelName(FF);
        return AF.j.from({
          type: AF.b.DM,
          channelId: FF,
          channelName: WF
        })
      }
      getDiscordContextFromGuildId(FF) {
        const WF = this.guildNameCache[FF];
        return (0, hF.Q)(WF) ? null : AF.f.from({
          type: AF.b.GUILD,
          guildId: FF,
          guildName: WF
        })
      }
      async getCurrentDiscordContext() {
        const {
          channelId: FF,
          guildId: WF
        } = this.getCurrentChannelAndGuild();
        return null !== WF ? this.getDiscordContextFromGuildId(WF) : null !== FF ? this.getDiscordContextFromChannelId(FF) : null
      }
      exit(FF) {
        console.log("Exiting Discord Activity:", FF), this.discordSdk.close(QF.CLOSE_NORMAL, FF)
      }
      isMobilePlatform() {
        return this.discordSdk.platform === CF.e.MOBILE
      }
      applyDiscordSafeAreaNotch() {
        if (!this.isMobilePlatform() || this.getCurrentChannelType() !== AF.b.DM) return;
        const FF = FF => {
            const WF = getComputedStyle(document.documentElement).getPropertyValue(`--discord-safe-area-inset-${FF}`).trim(),
              SF = parseFloat(WF);
            return isNaN(SF) ? 0 : SF
          },
          WF = FF => 0 === window.innerWidth ? 0 : FF / window.innerWidth * 100,
          SF = WF(FF("top")),
          CF = WF(FF("right")),
          uF = WF(FF("left"));
        iW.b.set({
          notchSize: {
            top: SF,
            right: Math.max(CF, 7),
            bottom: 0,
            left: uF
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);