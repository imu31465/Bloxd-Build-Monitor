export const id = 140;
export const ids = [140];
export const modules = {
  7609: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      BloxdDiscordActivitySdk: () => Bz
    });
    var Fz = sz(7617),
      Wz = sz(1215),
      Xz = sz(1173),
      Oz = sz(580),
      oz = sz(1237),
      vz = sz(1664),
      Uz = sz(1293),
      Kz = sz(725),
      uz = sz(30),
      Nz = sz(1198),
      bz = function(zz) {
        return zz.APPLICATION_COMMANDS = "applications.commands", zz.IDENTIFY = "identify", zz.EMAIL = "email", zz.GUILDS = "guilds", zz.READ_DM_CHANNELS = "dm_channels.read", zz.WRITE_ACTIVITIES = "rpc.activities.write", zz
      }(bz || {}),
      wz = function(zz) {
        return zz[zz.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", zz[zz.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", zz[zz.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", zz[zz.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", zz[zz.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", zz[zz.RATELIMITED = 4002] = "RATELIMITED", zz[zz.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", zz[zz.INVALID_VERSION = 4004] = "INVALID_VERSION", zz[zz.INVALID_ENCODING = 4005] = "INVALID_ENCODING", zz
      }(wz || {}),
      Dz = function(zz) {
        return zz[zz.PLAYING = 0] = "PLAYING", zz[zz.STREAMING = 1] = "STREAMING", zz[zz.LISTENING = 2] = "LISTENING", zz[zz.WATCHING = 3] = "WATCHING", zz[zz.CUSTOM = 4] = "CUSTOM", zz[zz.COMPETING = 5] = "COMPETING", zz
      }(Dz || {});
    const gz = {
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
      Hz = {
        goalRush: "Playing",
        heroesvbrainrots: "Battling",
        hideseek: "Playing",
        bingo: "Playing"
      };
    class Bz {
      constructor(zz) {
        this.discordSdk = zz, this.guildNameCache = {}, this.startTime = Date.now(), this.cachedAccessToken = null
      }
      static async setup() {
        console.log("Setting up Discord SDK with client id", Nz.c.discordClientID);
        const zz = new Fz.b(Nz.c.discordClientID);
        let tz = !1;
        setTimeout((() => {
          tz || (console.warn("Discord SDK took too long to initialize"), (0, vz.reloadBloxd)())
        }), 15e3), await zz.ready(), tz = !0;
        try {
          const {
            enabled: tz
          } = await zz.commands.encourageHardwareAcceleration();
          tz || console.warn("Hardware acceleration not enabled in the Discord client")
        } catch (Wz) {
          console.error("Failed to encourage hardware acceleration in the Discord client", Wz)
        }
        const sz = new Bz(zz);
        return sz.isMobilePlatform() && (sz.applyDiscordSafeAreaNotch(), window.addEventListener("resize", (() => {
          sz.applyDiscordSafeAreaNotch()
        }))), sz
      }
      async updateActivityDescription(zz) {
        let tz, sz;
        switch (zz) {
          case "homePage":
            tz = "Chilling in the Main Menu";
            break;
          case "inGame": {
            const zz = await this.getInGameDescriptions();
            tz = zz.primary, sz = zz.secondary;
            break
          }
        }
        await this.discordSdk.commands.setActivity({
          activity: {
            type: Dz.PLAYING,
            details: tz,
            state: sz,
            assets: {
              large_image: "icon",
              large_text: tz
            },
            timestamps: {
              start: this.startTime
            }
          }
        }).catch((zz => {
          console.error(`Failed to update Discord activity rich presence with description="${tz}":`, zz)
        }))
      }
      async getInGameDescriptions() {
        var zz;
        const {
          requestedGameNameWithVariation: tz
        } = (0, Uz.d)(), sz = (0, Kz.l)(tz), Fz = null !== (zz = Hz[tz]) && void 0 !== zz ? zz : gz[sz.type], Wz = await (0, Xz.x)(oz.e.ENGLISH, sz.title), vz = (0, Uz.d)();
        if ((0, Uz.h)(vz)) return {
          primary: `${Fz} in a Discord World`
        };
        const uz = `${Fz} in ${Wz}`;
        return (0, Oz.G)(vz.lobbyName) ? {
          primary: uz
        } : {
          primary: uz,
          secondary: `Lobby ${vz.lobbyName}`
        }
      }
      getCurrentChannelType() {
        const {
          channelId: zz,
          guildId: tz
        } = this.getCurrentChannelAndGuild();
        return null !== tz ? Wz.e.GUILD : null !== zz ? Wz.e.DM : null
      }
      getRequiredScopeForCurrentChannel() {
        const zz = this.getCurrentChannelType(),
          tz = [bz.APPLICATION_COMMANDS, bz.IDENTIFY, bz.EMAIL, bz.GUILDS, bz.WRITE_ACTIVITIES];
        switch (zz) {
          case Wz.e.DM:
          case Wz.e.GUILD:
            return [...tz];
          default:
            throw new Error(`Unknown Discord channel type: ${zz}`)
        }
      }
      getCurrentChannelAndGuild() {
        const {
          channelId: zz,
          guildId: tz
        } = this.discordSdk;
        return {
          channelId: null !== zz && void 0 !== zz ? zz : null,
          guildId: null !== tz && void 0 !== tz ? tz : null
        }
      }
      getInstanceId() {
        return this.discordSdk.instanceId
      }
      async askDiscordUserForAuthorization() {
        const zz = this.getRequiredScopeForCurrentChannel(),
          {
            code: tz
          } = await this.discordSdk.commands.authorize({
            client_id: Nz.c.discordClientID,
            response_type: "code",
            state: "",
            prompt: "none",
            scope: zz
          });
        return tz
      }
      getCachedAccessToken() {
        return this.cachedAccessToken
      }
      setCachedAccessToken(zz) {
        this.cachedAccessToken = zz
      }
      registerGuild(zz, tz) {
        this.guildNameCache[zz] = tz
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
        const tz = await this.getChannelName(zz);
        return Wz.l.from({
          type: Wz.e.DM,
          channelId: zz,
          channelName: tz
        })
      }
      getDiscordContextFromGuildId(zz) {
        const tz = this.guildNameCache[zz];
        return (0, Oz.G)(tz) ? null : Wz.h.from({
          type: Wz.e.GUILD,
          guildId: zz,
          guildName: tz
        })
      }
      async getCurrentDiscordContext() {
        const {
          channelId: zz,
          guildId: tz
        } = this.getCurrentChannelAndGuild();
        return null !== tz ? this.getDiscordContextFromGuildId(tz) : null !== zz ? this.getDiscordContextFromChannelId(zz) : null
      }
      exit(zz) {
        console.log("Exiting Discord Activity:", zz), this.discordSdk.close(wz.CLOSE_NORMAL, zz)
      }
      isMobilePlatform() {
        return this.discordSdk.platform === Fz.f.MOBILE
      }
      applyDiscordSafeAreaNotch() {
        const zz = getComputedStyle(document.documentElement),
          tz = (tz, sz) => {
            const Fz = parseFloat(zz.getPropertyValue(`--discord-safe-area-inset-${tz}`));
            return isNaN(Fz) || 0 === sz ? 0 : Fz / sz * 100
          };
        uz.b.set({
          notchSize: {
            top: tz("top", window.innerHeight),
            right: Math.max(tz("right", window.innerWidth), 7),
            bottom: 0,
            left: tz("left", window.innerWidth)
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);