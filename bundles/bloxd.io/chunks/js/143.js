export const id = 143;
export const ids = [143];
export const modules = {
  7628: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      GameDistributionSdkAdaptor: () => Xz
    });
    var Fz = sz(1291),
      Wz = sz(1167);
    class Xz extends Fz.d {
      constructor(zz) {
        super(), this.setOnEndCb = zz, this.name = "gamedistribution"
      }
      static async setup() {
        let zz;
        let tz;
        return window.GD_OPTIONS = {
          gameId: "b35b336d21654aa5a378480d13ed7225",
          onEvent: sz => {
            const Fz = () => {
              tz && (window.adCompleteSoResume(), tz = !1), zz && (zz(), zz = null)
            };
            switch (sz.name) {
              case "SDK_GAME_START":
                console.log("Gamedis SDK_GAME_START"), tz = !1, zz ? (zz(), zz = null, window.adCompleteSoResume()) : console.error("onEndCb is not defined during SDK_GAME_START for gamedis sdk. Probably means error happened before.");
                break;
              case "SDK_GAME_PAUSE":
                console.log("Gamedis SDK_GAME_PAUSE"), window.adStartSoPause(null, {
                  preventMovement: !0
                }), tz = !0;
                break;
              case "SDK_ERROR":
                console.error("Gamedis SDK_ERROR fired"), Fz();
                break;
              case "SDK_GDPR_TRACKING":
              case "SDK_GDPR_TARGETING":
              default:
                break;
              case "AD_ERROR":
                console.error("Gamedis AD_ERROR fired"), Fz();
                break;
              case "AD_IS_ALREADY_RUNNING":
                console.error("Gamedis AD_IS_ALREADY_RUNNING fired"), Fz();
                break;
              case "DISPLAYAD_ERROR":
                console.error("Gamedis DISPLAYAD_ERROR fired"), console.error(sz)
            }
          }
        }, await (0, Wz.c)("https://html5.api.gamedistribution.com/main.min.js", {
          id: "gamedistribution-jssdk"
        }), new Xz((tz => {
          zz = tz
        }))
      }
      playVideoAd(zz, tz) {
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