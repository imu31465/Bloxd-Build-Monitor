export const id = 143;
export const ids = [143];
export const modules = {
  7795: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      GameDistributionSdkAdaptor: () => iz
    });
    var Ez = bz(1288),
      nz = bz(1171);
    class iz extends Ez.b {
      constructor(zz) {
        super(), this.setOnEndCb = zz, this.name = "gamedistribution"
      }
      static async setup() {
        let zz;
        let uz;
        return window.GD_OPTIONS = {
          gameId: "b35b336d21654aa5a378480d13ed7225",
          onEvent: bz => {
            const Ez = () => {
              uz && (window.adCompleteSoResume(), uz = !1), zz && (zz(), zz = null)
            };
            switch (bz.name) {
              case "SDK_GAME_START":
                console.log("Gamedis SDK_GAME_START"), uz = !1, zz ? (zz(), zz = null, window.adCompleteSoResume()) : console.error("onEndCb is not defined during SDK_GAME_START for gamedis sdk. Probably means error happened before.");
                break;
              case "SDK_GAME_PAUSE":
                console.log("Gamedis SDK_GAME_PAUSE"), window.adStartSoPause(null, {
                  preventMovement: !0
                }), uz = !0;
                break;
              case "SDK_ERROR":
                console.error("Gamedis SDK_ERROR fired"), Ez();
                break;
              case "SDK_GDPR_TRACKING":
              case "SDK_GDPR_TARGETING":
              default:
                break;
              case "AD_ERROR":
                console.error("Gamedis AD_ERROR fired"), Ez();
                break;
              case "AD_IS_ALREADY_RUNNING":
                console.error("Gamedis AD_IS_ALREADY_RUNNING fired"), Ez();
                break;
              case "DISPLAYAD_ERROR":
                console.error("Gamedis DISPLAYAD_ERROR fired"), console.error(bz)
            }
          }
        }, await (0, nz.e)("https://html5.api.gamedistribution.com/main.min.js", {
          id: "gamedistribution-jssdk"
        }), new iz((uz => {
          zz = uz
        }))
      }
      playVideoAd(zz, uz) {
        this.setOnEndCb(zz), console.log("Requesting gamedis preroll"), window.gdsdk.showAd()
      }
      renderBanner(zz) {
        console.log("Getting new gamedis banners"), void 0 !== window.gdsdk.AdType.Display ? (console.log("requesting gamedis banner into", document.getElementById(zz.divId)), console.log("Params to window.gdsdk.showAd", window.gdsdk.AdType.Display, zz.divId), window.gdsdk.showAd(window.gdsdk.AdType.Display, {
          containerId: zz.divId
        }).then((() => console.info("showAd(window.gdsdk.AdType.Display) resolved."))).catch((zz => console.info(zz)))) : console.error("window.gdsdk.AdType.Display is undefined")
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);