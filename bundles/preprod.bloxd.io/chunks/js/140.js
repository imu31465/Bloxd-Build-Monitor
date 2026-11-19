export const id = 140;
export const ids = [140];
export const modules = {
  7781: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      BloxdDiscordActivitySdk: () => Xz
    });
    var Ez = bz(7787),
      nz = bz(1219),
      iz = bz(1181),
      lz = bz(588),
      Mz = bz(1241),
      tz = bz(1673),
      Hz = bz(1296),
      Oz = bz(738),
      pz = bz(20),
      dz = bz(1197),
      Fz = function(zz) {
        return zz.APPLICATION_COMMANDS = "applications.commands", zz.IDENTIFY = "identify", zz.EMAIL = "email", zz.GUILDS = "guilds", zz.READ_DM_CHANNELS = "dm_channels.read", zz.WRITE_ACTIVITIES = "rpc.activities.write", zz
      }(Fz || {}),
      Zz = function(zz) {
        return zz[zz.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", zz[zz.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", zz[zz.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", zz[zz.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", zz[zz.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", zz[zz.RATELIMITED = 4002] = "RATELIMITED", zz[zz.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", zz[zz.INVALID_VERSION = 4004] = "INVALID_VERSION", zz[zz.INVALID_ENCODING = 4005] = "INVALID_ENCODING", zz
      }(Zz || {}),
      Rz = function(zz) {
        return zz[zz.PLAYING = 0] = "PLAYING", zz[zz.STREAMING = 1] = "STREAMING", zz[zz.LISTENING = 2] = "LISTENING", zz[zz.WATCHING = 3] = "WATCHING", zz[zz.CUSTOM = 4] = "CUSTOM", zz[zz.COMPETING = 5] = "COMPETING", zz
      }(Rz || {});
    const Kz = {
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
      wz = {
        goalRush: "Playing",
        heroesvbrainrots: "Battling",
        hideseek: "Playing",
        bingo: "Playing"
      };
    class Xz {
      constructor(zz) {
        this.discordSdk = zz, this.guildNameCache = {}, this.startTime = Date.now(), this.cachedAccessToken = null
      }
      static async setup() {
        console.log("Setting up Discord SDK with client id", dz.c.discordClientID);
        const zz = new Ez.c(dz.c.discordClientID);
        let uz = !1;
        setTimeout((() => {
          uz || (console.warn("Discord SDK took too long to initialize"), (0, tz.reloadBloxd)())
        }), 15e3), await zz.ready(), uz = !0;
        try {
          const {
            enabled: uz
          } = await zz.commands.encourageHardwareAcceleration();
          uz || console.warn("Hardware acceleration not enabled in the Discord client")
        } catch (nz) {
          console.error("Failed to encourage hardware acceleration in the Discord client", nz)
        }
        const bz = new Xz(zz);
        return bz.isMobilePlatform() && (bz.applyDiscordSafeAreaNotch(), window.addEventListener("resize", (() => {
          bz.applyDiscordSafeAreaNotch()
        }))), bz
      }
      async updateActivityDescription(zz) {
        let uz, bz;
        switch (zz) {
          case "homePage":
            uz = "Chilling in the Main Menu";
            break;
          case "inGame": {
            const zz = await this.getInGameDescriptions();
            uz = zz.primary, bz = zz.secondary;
            break
          }
        }
        await this.discordSdk.commands.setActivity({
          activity: {
            type: Rz.PLAYING,
            details: uz,
            state: bz,
            assets: {
              large_image: "icon",
              large_text: uz
            },
            timestamps: {
              start: this.startTime
            }
          }
        }).catch((zz => {
          console.error(`Failed to update Discord activity rich presence with description="${uz}":`, zz)
        }))
      }
      async getInGameDescriptions() {
        var zz;
        const {
          requestedGameNameWithVariation: uz
        } = (0, Hz.b)(), bz = (0, Oz.i)(uz), Ez = null !== (zz = wz[uz]) && void 0 !== zz ? zz : Kz[bz.type], nz = await (0, iz.B)(Mz.d.ENGLISH, bz.title), tz = (0, Hz.b)();
        if ((0, Hz.g)(tz)) return {
          primary: `${Ez} in a Discord World`
        };
        const pz = `${Ez} in ${nz}`;
        return (0, lz.F)(tz.lobbyName) ? {
          primary: pz
        } : {
          primary: pz,
          secondary: `Lobby ${tz.lobbyName}`
        }
      }
      getCurrentChannelType() {
        const {
          channelId: zz,
          guildId: uz
        } = this.getCurrentChannelAndGuild();
        return null !== uz ? nz.d.GUILD : null !== zz ? nz.d.DM : null
      }
      getRequiredScopeForCurrentChannel() {
        const zz = this.getCurrentChannelType(),
          uz = [Fz.APPLICATION_COMMANDS, Fz.IDENTIFY, Fz.EMAIL, Fz.GUILDS, Fz.WRITE_ACTIVITIES];
        switch (zz) {
          case nz.d.DM:
          case nz.d.GUILD:
            return [...uz];
          default:
            throw new Error(`Unknown Discord channel type: ${zz}`)
        }
      }
      getCurrentChannelAndGuild() {
        const {
          channelId: zz,
          guildId: uz
        } = this.discordSdk;
        return {
          channelId: null !== zz && void 0 !== zz ? zz : null,
          guildId: null !== uz && void 0 !== uz ? uz : null
        }
      }
      getInstanceId() {
        return this.discordSdk.instanceId
      }
      async askDiscordUserForAuthorization() {
        const zz = this.getRequiredScopeForCurrentChannel(),
          {
            code: uz
          } = await this.discordSdk.commands.authorize({
            client_id: dz.c.discordClientID,
            response_type: "code",
            state: "",
            prompt: "none",
            scope: zz
          });
        return uz
      }
      getCachedAccessToken() {
        return this.cachedAccessToken
      }
      setCachedAccessToken(zz) {
        this.cachedAccessToken = zz
      }
      registerGuild(zz, uz) {
        this.guildNameCache[zz] = uz
      }
      async authenticate(zz) {
        return this.discordSdk.commands.authenticate({
          access_token: zz
        }).then((zz => null !== zz))
      }
      async getUserLocale() {
        try {
          const {
            locale: zz
          } = await this.discordSdk.commands.userSettingsGetLocale();
          return zz
        } catch (zz) {
          return console.error("Failed to get user locale from Discord:", zz.stack), null
        }
      }
      async getChannelName(zz) {
        return this.discordSdk.commands.getChannel({
          channel_id: zz
        }).then((zz => zz.name)).catch((zz => "Your Current Discord Chat"))
      }
      async getDiscordContextFromChannelId(zz) {
        const uz = await this.getChannelName(zz);
        return nz.i.from({
          type: nz.d.DM,
          channelId: zz,
          channelName: uz
        })
      }
      getDiscordContextFromGuildId(zz) {
        const uz = this.guildNameCache[zz];
        return (0, lz.F)(uz) ? null : nz.h.from({
          type: nz.d.GUILD,
          guildId: zz,
          guildName: uz
        })
      }
      async getCurrentDiscordContext() {
        const {
          channelId: zz,
          guildId: uz
        } = this.getCurrentChannelAndGuild();
        return null !== uz ? this.getDiscordContextFromGuildId(uz) : null !== zz ? this.getDiscordContextFromChannelId(zz) : null
      }
      exit(zz) {
        console.log("Exiting Discord Activity:", zz), this.discordSdk.close(Zz.CLOSE_NORMAL, zz)
      }
      isMobilePlatform() {
        return this.discordSdk.platform === Ez.d.MOBILE
      }
      applyDiscordSafeAreaNotch() {
        const zz = getComputedStyle(document.documentElement),
          uz = (uz, bz) => {
            const Ez = parseFloat(zz.getPropertyValue(`--discord-safe-area-inset-${uz}`));
            return isNaN(Ez) || 0 === bz ? 0 : Ez / bz * 100
          };
        pz.e.set({
          notchSize: {
            top: uz("top", window.innerHeight),
            right: Math.max(uz("right", window.innerWidth), 7),
            bottom: 0,
            left: uz("left", window.innerWidth)
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);