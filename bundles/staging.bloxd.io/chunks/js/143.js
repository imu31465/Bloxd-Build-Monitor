export const id = 143;
export const ids = [143];
export const modules = {
  7807: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      GameDistributionSdkAdaptor: () => ev
    });
    var hv = Pv(1299),
      Sv = Pv(1164);
    class ev extends hv.c {
      constructor(vv) {
        super(), this.setOnEndCb = vv, this.name = "gamedistribution"
      }
      static async setup() {
        let vv;
        let zv;
        return window.GD_OPTIONS = {
          gameId: "b35b336d21654aa5a378480d13ed7225",
          onEvent: Pv => {
            const hv = () => {
              zv && (window.adCompleteSoResume(), zv = !1), vv && (vv(), vv = null)
            };
            switch (Pv.name) {
              case "SDK_GAME_START":
                console.log("Gamedis SDK_GAME_START"), zv = !1, vv ? (vv(), vv = null, window.adCompleteSoResume()) : console.error("onEndCb is not defined during SDK_GAME_START for gamedis sdk. Probably means error happened before.");
                break;
              case "SDK_GAME_PAUSE":
                console.log("Gamedis SDK_GAME_PAUSE"), window.adStartSoPause(null, {
                  preventMovement: !0
                }), zv = !0;
                break;
              case "SDK_ERROR":
                console.error("Gamedis SDK_ERROR fired"), hv();
                break;
              case "SDK_GDPR_TRACKING":
              case "SDK_GDPR_TARGETING":
              default:
                break;
              case "AD_ERROR":
                console.error("Gamedis AD_ERROR fired"), hv();
                break;
              case "AD_IS_ALREADY_RUNNING":
                console.error("Gamedis AD_IS_ALREADY_RUNNING fired"), hv();
                break;
              case "DISPLAYAD_ERROR":
                console.error("Gamedis DISPLAYAD_ERROR fired"), console.error(Pv)
            }
          }
        }, await (0, Sv.d)("https://html5.api.gamedistribution.com/main.min.js", {
          id: "gamedistribution-jssdk"
        }), new ev((zv => {
          vv = zv
        }))
      }
      playVideoAd(vv, zv) {
        this.setOnEndCb(vv), console.log("Requesting gamedis preroll"), window.gdsdk.showAd()
      }
      renderBanner(vv) {
        console.log("Getting new gamedis banners"), void 0 !== window.gdsdk.AdType.Display ? (console.log("requesting gamedis banner into", document.getElementById(vv.divId)), console.log("Params to window.gdsdk.showAd", window.gdsdk.AdType.Display, vv.divId), window.gdsdk.showAd(window.gdsdk.AdType.Display, {
          containerId: vv.divId
        }).then((() => console.info("showAd(window.gdsdk.AdType.Display) resolved."))).catch((vv => console.info(vv)))) : console.error("window.gdsdk.AdType.Display is undefined")
      }
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);