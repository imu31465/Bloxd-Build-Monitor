export const id = 151;
export const ids = [151];
export const modules = {
  8338: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      GameDistributionSdkAdaptor: () => Dt
    });
    var Ot = Vt(1419),
      qt = Vt(1275);
    class Dt extends Ot.e {
      constructor(tt) {
        super(), this.setOnEndCb = tt, this.name = "gamedistribution"
      }
      static async setup() {
        let tt;
        let et;
        return window.GD_OPTIONS = {
          gameId: "b35b336d21654aa5a378480d13ed7225",
          onEvent: Vt => {
            const Ot = () => {
              et && (window.adCompleteSoResume(), et = !1), tt && (tt(), tt = null)
            };
            switch (Vt.name) {
              case "SDK_GAME_START":
                console.log("Gamedis SDK_GAME_START"), et = !1, tt ? (tt(), tt = null, window.adCompleteSoResume()) : console.error("onEndCb is not defined during SDK_GAME_START for gamedis sdk. Probably means error happened before.");
                break;
              case "SDK_GAME_PAUSE":
                console.log("Gamedis SDK_GAME_PAUSE"), window.adStartSoPause(null, {
                  preventMovement: !0
                }), et = !0;
                break;
              case "SDK_ERROR":
                console.error("Gamedis SDK_ERROR fired"), Ot();
                break;
              case "SDK_GDPR_TRACKING":
              case "SDK_GDPR_TARGETING":
              default:
                break;
              case "AD_ERROR":
                console.error("Gamedis AD_ERROR fired"), Ot();
                break;
              case "AD_IS_ALREADY_RUNNING":
                console.error("Gamedis AD_IS_ALREADY_RUNNING fired"), Ot();
                break;
              case "DISPLAYAD_ERROR":
                console.error("Gamedis DISPLAYAD_ERROR fired"), console.error(Vt)
            }
          }
        }, await (0, qt.d)("https://html5.api.gamedistribution.com/main.min.js", {
          id: "gamedistribution-jssdk"
        }), new Dt((et => {
          tt = et
        }))
      }
      playVideoAd(tt, et) {
        this.setOnEndCb(tt), console.log("Requesting gamedis preroll"), window.gdsdk.showAd()
      }
      renderBanner(tt) {
        console.log("Getting new gamedis banners"), void 0 !== window.gdsdk.AdType.Display ? (console.log("requesting gamedis banner into", document.getElementById(tt.divId)), console.log("Params to window.gdsdk.showAd", window.gdsdk.AdType.Display, tt.divId), window.gdsdk.showAd(window.gdsdk.AdType.Display, {
          containerId: tt.divId
        }).then((() => console.info("showAd(window.gdsdk.AdType.Display) resolved."))).catch((tt => console.info(tt)))) : console.error("window.gdsdk.AdType.Display is undefined")
      }
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);