export const id = 161;
export const ids = [161];
export const modules = {
  7320: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      GameDistributionSdkAdaptor: () => QU
    });
    var cU = zU(1351),
      yU = zU(1184);
    class QU extends cU.d {
      constructor(UU) {
        super(), this.setOnEndCb = UU, this.name = "gamedistribution"
      }
      static async setup() {
        let UU;
        let XU;
        return window.GD_OPTIONS = {
          gameId: "b35b336d21654aa5a378480d13ed7225",
          onEvent: zU => {
            const cU = () => {
              XU && (window.adCompleteSoResume(), XU = !1), UU && (UU(), UU = null)
            };
            switch (zU.name) {
              case "SDK_GAME_START":
                console.log("Gamedis SDK_GAME_START"), XU = !1, UU ? (UU(), UU = null, window.adCompleteSoResume()) : console.error("onEndCb is not defined during SDK_GAME_START for gamedis sdk. Probably means error happened before.");
                break;
              case "SDK_GAME_PAUSE":
                console.log("Gamedis SDK_GAME_PAUSE"), window.adStartSoPause(null, {
                  preventMovement: !0
                }), XU = !0;
                break;
              case "SDK_ERROR":
                console.error("Gamedis SDK_ERROR fired"), cU();
                break;
              case "SDK_GDPR_TRACKING":
              case "SDK_GDPR_TARGETING":
              default:
                break;
              case "AD_ERROR":
                console.error("Gamedis AD_ERROR fired"), cU();
                break;
              case "AD_IS_ALREADY_RUNNING":
                console.error("Gamedis AD_IS_ALREADY_RUNNING fired"), cU();
                break;
              case "DISPLAYAD_ERROR":
                console.error("Gamedis DISPLAYAD_ERROR fired"), console.error(zU)
            }
          }
        }, await (0, yU.c)("https://html5.api.gamedistribution.com/main.min.js", {
          id: "gamedistribution-jssdk"
        }), new QU((XU => {
          UU = XU
        }))
      }
      playVideoAd(UU, XU) {
        this.setOnEndCb(UU), console.log("Requesting gamedis preroll"), window.gdsdk.showAd()
      }
      willRequestBanner() {
        return void 0 !== window.gdsdk.AdType.Display
      }
      renderBanner(UU) {
        console.log("Getting new gamedis banners"), this.willRequestBanner() ? (console.log("requesting gamedis banner into", document.getElementById(UU.divId)), console.log("Params to window.gdsdk.showAd", window.gdsdk.AdType.Display, UU.divId), window.gdsdk.showAd(window.gdsdk.AdType.Display, {
          containerId: UU.divId
        }).then((() => console.info("showAd(window.gdsdk.AdType.Display) resolved."))).catch((UU => console.info(UU)))) : console.error("window.gdsdk.AdType.Display is undefined")
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);