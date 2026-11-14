export const id = 132;
export const ids = [132];
export const modules = {
  6978: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      BloxdDiscordActivitySdk: () => yB
    });
    var Vc = nc(6986),
      Ic = nc(1094),
      rB = nc(1051),
      uc = nc(569),
      sc = nc(1117),
      Mc = nc(1495),
      Pc = nc(1177),
      qB = nc(623),
      Oc = nc(27),
      Tc = nc(1070),
      fc = function(cB) {
        return cB.APPLICATION_COMMANDS = "applications.commands", cB.IDENTIFY = "identify", cB.EMAIL = "email", cB.GUILDS = "guilds", cB.READ_DM_CHANNELS = "dm_channels.read", cB.WRITE_ACTIVITIES = "rpc.activities.write", cB
      }(fc || {}),
      mB = function(cB) {
        return cB[cB.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", cB[cB.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", cB[cB.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", cB[cB.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", cB[cB.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", cB[cB.RATELIMITED = 4002] = "RATELIMITED", cB[cB.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", cB[cB.INVALID_VERSION = 4004] = "INVALID_VERSION", cB[cB.INVALID_ENCODING = 4005] = "INVALID_ENCODING", cB
      }(mB || {}),
      ec = function(cB) {
        return cB[cB.PLAYING = 0] = "PLAYING", cB[cB.STREAMING = 1] = "STREAMING", cB[cB.LISTENING = 2] = "LISTENING", cB[cB.WATCHING = 3] = "WATCHING", cB[cB.CUSTOM = 4] = "CUSTOM", cB[cB.COMPETING = 5] = "COMPETING", cB
      }(ec || {});
    const tB = {
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
      Sc = {
        goalRush: "Playing",
        heroesvbrainrots: "Battling",
        hideseek: "Playing",
        bingo: "Playing"
      };
    class yB {
      constructor(cB) {
        this.discordSdk = cB, this.guildNameCache = {}, this.startTime = Date.now(), this.cachedAccessToken = null
      }
      static async setup() {
        console.log("Setting up Discord SDK with client id", Tc.d.discordClientID);
        const cB = new Vc.d(Tc.d.discordClientID);
        let Bc = !1;
        setTimeout((() => {
          Bc || (console.warn("Discord SDK took too long to initialize"), (0, Mc.reloadBloxd)())
        }), 15e3), await cB.ready(), Bc = !0;
        try {
          const {
            enabled: Bc
          } = await cB.commands.encourageHardwareAcceleration();
          Bc || console.warn("Hardware acceleration not enabled in the Discord client")
        } catch (Ic) {
          console.error("Failed to encourage hardware acceleration in the Discord client", Ic)
        }
        const nc = new yB(cB);
        return nc.isMobilePlatform() && (nc.applyDiscordSafeAreaNotch(), window.addEventListener("resize", (() => {
          nc.applyDiscordSafeAreaNotch()
        }))), nc
      }
      async updateActivityDescription(cB) {
        let Bc, nc;
        switch (cB) {
          case "homePage":
            Bc = "Chilling in the Main Menu";
            break;
          case "inGame": {
            const cB = await this.getInGameDescriptions();
            Bc = cB.primary, nc = cB.secondary;
            break
          }
        }
        await this.discordSdk.commands.setActivity({
          activity: {
            type: ec.PLAYING,
            details: Bc,
            state: nc,
            assets: {
              large_image: "icon",
              large_text: Bc
            },
            timestamps: {
              start: this.startTime
            }
          }
        }).catch((cB => {
          console.error(`Failed to update Discord activity rich presence with description="${Bc}":`, cB)
        }))
      }
      async getInGameDescriptions() {
        var cB;
        const {
          requestedGameNameWithVariation: Bc
        } = (0, Pc.d)(), nc = (0, qB.m)(Bc), Vc = null !== (cB = Sc[Bc]) && void 0 !== cB ? cB : tB[nc.type], Ic = await (0, rB.u)(sc.d.ENGLISH, nc.title), Mc = (0, Pc.d)();
        if ((0, Pc.k)(Mc)) return {
          primary: `${Vc} in a Discord World`
        };
        const Oc = `${Vc} in ${Ic}`;
        return (0, uc.E)(Mc.lobbyName) ? {
          primary: Oc
        } : {
          primary: Oc,
          secondary: `Lobby ${Mc.lobbyName}`
        }
      }
      getCurrentChannelType() {
        const {
          channelId: cB,
          guildId: Bc
        } = this.getCurrentChannelAndGuild();
        return null !== Bc ? Ic.b.GUILD : null !== cB ? Ic.b.DM : null
      }
      getRequiredScopeForCurrentChannel() {
        const cB = this.getCurrentChannelType(),
          Bc = [fc.APPLICATION_COMMANDS, fc.IDENTIFY, fc.EMAIL, fc.GUILDS, fc.WRITE_ACTIVITIES];
        switch (cB) {
          case Ic.b.DM:
          case Ic.b.GUILD:
            return [...Bc];
          default:
            throw new Error(`Unknown Discord channel type: ${cB}`)
        }
      }
      getCurrentChannelAndGuild() {
        const {
          channelId: cB,
          guildId: Bc
        } = this.discordSdk;
        return {
          channelId: null !== cB && void 0 !== cB ? cB : null,
          guildId: null !== Bc && void 0 !== Bc ? Bc : null
        }
      }
      getInstanceId() {
        return this.discordSdk.instanceId
      }
      async askDiscordUserForAuthorization() {
        const cB = this.getRequiredScopeForCurrentChannel(),
          {
            code: Bc
          } = await this.discordSdk.commands.authorize({
            client_id: Tc.d.discordClientID,
            response_type: "code",
            state: "",
            prompt: "none",
            scope: cB
          });
        return Bc
      }
      getCachedAccessToken() {
        return this.cachedAccessToken
      }
      setCachedAccessToken(cB) {
        this.cachedAccessToken = cB
      }
      registerGuild(cB, Bc) {
        this.guildNameCache[cB] = Bc
      }
      async authenticate(cB) {
        return this.discordSdk.commands.authenticate({
          access_token: cB
        }).then((cB => null !== cB))
      }
      async getUserLocale() {
        try {
          const {
            locale: cB
          } = await this.discordSdk.commands.userSettingsGetLocale();
          return cB
        } catch (cB) {
          return console.error("Failed to get user locale from Discord:", cB.stack), null
        }
      }
      async getChannelName(cB) {
        return this.discordSdk.commands.getChannel({
          channel_id: cB
        }).then((cB => cB.name)).catch((cB => "Your Current Discord Chat"))
      }
      async getDiscordContextFromChannelId(cB) {
        const Bc = await this.getChannelName(cB);
        return Ic.i.from({
          type: Ic.b.DM,
          channelId: cB,
          channelName: Bc
        })
      }
      getDiscordContextFromGuildId(cB) {
        const Bc = this.guildNameCache[cB];
        return (0, uc.E)(Bc) ? null : Ic.f.from({
          type: Ic.b.GUILD,
          guildId: cB,
          guildName: Bc
        })
      }
      async getCurrentDiscordContext() {
        const {
          channelId: cB,
          guildId: Bc
        } = this.getCurrentChannelAndGuild();
        return null !== Bc ? this.getDiscordContextFromGuildId(Bc) : null !== cB ? this.getDiscordContextFromChannelId(cB) : null
      }
      exit(cB) {
        console.log("Exiting Discord Activity:", cB), this.discordSdk.close(mB.CLOSE_NORMAL, cB)
      }
      isMobilePlatform() {
        return this.discordSdk.platform === Vc.f.MOBILE
      }
      applyDiscordSafeAreaNotch() {
        const cB = getComputedStyle(document.documentElement),
          Bc = (Bc, nc) => {
            const Vc = parseFloat(cB.getPropertyValue(`--discord-safe-area-inset-${Bc}`));
            return isNaN(Vc) || 0 === nc ? 0 : Vc / nc * 100
          };
        Oc.d.set({
          notchSize: {
            top: Bc("top", window.innerHeight),
            right: Math.max(Bc("right", window.innerWidth), 7),
            bottom: 0,
            left: Bc("left", window.innerWidth)
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);