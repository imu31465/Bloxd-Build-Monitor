export const id = 143;
export const ids = [143];
export const modules = {
  7762: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      GameDistributionSdkAdaptor: () => EU
    });
    var tU = gU(1312),
      pU = gU(1174);
    class EU extends tU.b {
      constructor(UU) {
        super(), this.setOnEndCb = UU, this.name = "gamedistribution"
      }
      static async setup() {
        let UU;
        let RU;
        return window.GD_OPTIONS = {
          gameId: "b35b336d21654aa5a378480d13ed7225",
          onEvent: gU => {
            const tU = () => {
              RU && (window.adCompleteSoResume(), RU = !1), UU && (UU(), UU = null)
            };
            switch (gU.name) {
              case "SDK_GAME_START":
                console.log("Gamedis SDK_GAME_START"), RU = !1, UU ? (UU(), UU = null, window.adCompleteSoResume()) : console.error("onEndCb is not defined during SDK_GAME_START for gamedis sdk. Probably means error happened before.");
                break;
              case "SDK_GAME_PAUSE":
                console.log("Gamedis SDK_GAME_PAUSE"), window.adStartSoPause(null, {
                  preventMovement: !0
                }), RU = !0;
                break;
              case "SDK_ERROR":
                console.error("Gamedis SDK_ERROR fired"), tU();
                break;
              case "SDK_GDPR_TRACKING":
              case "SDK_GDPR_TARGETING":
              default:
                break;
              case "AD_ERROR":
                console.error("Gamedis AD_ERROR fired"), tU();
                break;
              case "AD_IS_ALREADY_RUNNING":
                console.error("Gamedis AD_IS_ALREADY_RUNNING fired"), tU();
                break;
              case "DISPLAYAD_ERROR":
                console.error("Gamedis DISPLAYAD_ERROR fired"), console.error(gU)
            }
          }
        }, await (0, pU.e)("https://html5.api.gamedistribution.com/main.min.js", {
          id: "gamedistribution-jssdk"
        }), new EU((RU => {
          UU = RU
        }))
      }
      playVideoAd(UU, RU) {
        this.setOnEndCb(UU), console.log("Requesting gamedis preroll"), window.gdsdk.showAd()
      }
      renderBanner(UU) {
        console.log("Getting new gamedis banners"), void 0 !== window.gdsdk.AdType.Display ? (console.log("requesting gamedis banner into", document.getElementById(UU.divId)), console.log("Params to window.gdsdk.showAd", window.gdsdk.AdType.Display, UU.divId), window.gdsdk.showAd(window.gdsdk.AdType.Display, {
          containerId: UU.divId
        }).then((() => console.info("showAd(window.gdsdk.AdType.Display) resolved."))).catch((UU => console.info(UU)))) : console.error("window.gdsdk.AdType.Display is undefined")
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);