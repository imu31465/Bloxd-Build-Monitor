export const id = 170;
export const ids = [170];
export const modules = {
  7730: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      GameDistributionSdkAdaptor: () => NW
    });
    var mW = OW(1343),
      EW = OW(1162);
    class NW extends mW.c {
      constructor(WW) {
        super(), this.setOnEndCb = WW, this.name = "gamedistribution"
      }
      static async setup() {
        let WW;
        let iW;
        return window.GD_OPTIONS = {
          gameId: "b35b336d21654aa5a378480d13ed7225",
          onEvent: OW => {
            const mW = () => {
              iW && (window.adCompleteSoResume(), iW = !1), WW && (WW(), WW = null)
            };
            switch (OW.name) {
              case "SDK_GAME_START":
                console.log("Gamedis SDK_GAME_START"), iW = !1, WW ? (WW(), WW = null, window.adCompleteSoResume()) : console.error("onEndCb is not defined during SDK_GAME_START for gamedis sdk. Probably means error happened before.");
                break;
              case "SDK_GAME_PAUSE":
                console.log("Gamedis SDK_GAME_PAUSE"), window.adStartSoPause(null, {
                  preventMovement: !0
                }), iW = !0;
                break;
              case "SDK_ERROR":
                console.error("Gamedis SDK_ERROR fired"), mW();
                break;
              case "SDK_GDPR_TRACKING":
              case "SDK_GDPR_TARGETING":
              default:
                break;
              case "AD_ERROR":
                console.error("Gamedis AD_ERROR fired"), mW();
                break;
              case "AD_IS_ALREADY_RUNNING":
                console.error("Gamedis AD_IS_ALREADY_RUNNING fired"), mW();
                break;
              case "DISPLAYAD_ERROR":
                console.error("Gamedis DISPLAYAD_ERROR fired"), console.error(OW)
            }
          }
        }, await (0, EW.d)("https://html5.api.gamedistribution.com/main.min.js", {
          id: "gamedistribution-jssdk"
        }), new NW((iW => {
          WW = iW
        }))
      }
      playVideoAd(WW, iW) {
        this.setOnEndCb(WW), console.log("Requesting gamedis preroll"), window.gdsdk.showAd()
      }
      willRequestBanner() {
        return void 0 !== window.gdsdk.AdType.Display
      }
      renderBanner(WW) {
        console.log("Getting new gamedis banners"), this.willRequestBanner() ? (console.log("requesting gamedis banner into", document.getElementById(WW.divId)), console.log("Params to window.gdsdk.showAd", window.gdsdk.AdType.Display, WW.divId), window.gdsdk.showAd(window.gdsdk.AdType.Display, {
          containerId: WW.divId
        }).then((() => console.info("showAd(window.gdsdk.AdType.Display) resolved."))).catch((WW => console.info(WW)))) : console.error("window.gdsdk.AdType.Display is undefined")
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);