export const id = 163;
export const ids = [163];
export const modules = {
  7355: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      GameDistributionSdkAdaptor: () => Me
    });
    var ye = He(1300),
      be = He(1119);
    class Me extends ye.d {
      constructor(ee) {
        super(), this.setOnEndCb = ee, this.name = "gamedistribution"
      }
      static async setup() {
        let ee;
        let ie;
        return window.GD_OPTIONS = {
          gameId: "b35b336d21654aa5a378480d13ed7225",
          onEvent: He => {
            const ye = () => {
              ie && (window.adCompleteSoResume(), ie = !1), ee && (ee(), ee = null)
            };
            switch (He.name) {
              case "SDK_GAME_START":
                console.log("Gamedis SDK_GAME_START"), ie = !1, ee ? (ee(), ee = null, window.adCompleteSoResume()) : console.error("onEndCb is not defined during SDK_GAME_START for gamedis sdk. Probably means error happened before.");
                break;
              case "SDK_GAME_PAUSE":
                console.log("Gamedis SDK_GAME_PAUSE"), window.adStartSoPause(null, {
                  preventMovement: !0
                }), ie = !0;
                break;
              case "SDK_ERROR":
                console.error("Gamedis SDK_ERROR fired"), ye();
                break;
              case "SDK_GDPR_TRACKING":
              case "SDK_GDPR_TARGETING":
              default:
                break;
              case "AD_ERROR":
                console.error("Gamedis AD_ERROR fired"), ye();
                break;
              case "AD_IS_ALREADY_RUNNING":
                console.error("Gamedis AD_IS_ALREADY_RUNNING fired"), ye();
                break;
              case "DISPLAYAD_ERROR":
                console.error("Gamedis DISPLAYAD_ERROR fired"), console.error(He)
            }
          }
        }, await (0, be.b)("https://html5.api.gamedistribution.com/main.min.js", {
          id: "gamedistribution-jssdk"
        }), new Me((ie => {
          ee = ie
        }))
      }
      playVideoAd(ee, ie) {
        this.setOnEndCb(ee), console.log("Requesting gamedis preroll"), window.gdsdk.showAd()
      }
      willRequestBanner() {
        return void 0 !== window.gdsdk.AdType.Display
      }
      renderBanner(ee) {
        console.log("Getting new gamedis banners"), this.willRequestBanner() ? (console.log("requesting gamedis banner into", document.getElementById(ee.divId)), console.log("Params to window.gdsdk.showAd", window.gdsdk.AdType.Display, ee.divId), window.gdsdk.showAd(window.gdsdk.AdType.Display, {
          containerId: ee.divId
        }).then((() => console.info("showAd(window.gdsdk.AdType.Display) resolved."))).catch((ee => console.info(ee)))) : console.error("window.gdsdk.AdType.Display is undefined")
      }
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);