export const id = 149;
export const ids = [149];
export const modules = {
  8119: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      GameDistributionSdkAdaptor: () => bC
    });
    var QC = ZC(1269),
      wC = ZC(1127);
    class bC extends QC.c {
      constructor(CC) {
        super(), this.setOnEndCb = CC, this.name = "gamedistribution"
      }
      static async setup() {
        let CC;
        let zC;
        return window.GD_OPTIONS = {
          gameId: "b35b336d21654aa5a378480d13ed7225",
          onEvent: ZC => {
            const QC = () => {
              zC && (window.adCompleteSoResume(), zC = !1), CC && (CC(), CC = null)
            };
            switch (ZC.name) {
              case "SDK_GAME_START":
                console.log("Gamedis SDK_GAME_START"), zC = !1, CC ? (CC(), CC = null, window.adCompleteSoResume()) : console.error("onEndCb is not defined during SDK_GAME_START for gamedis sdk. Probably means error happened before.");
                break;
              case "SDK_GAME_PAUSE":
                console.log("Gamedis SDK_GAME_PAUSE"), window.adStartSoPause(null, {
                  preventMovement: !0
                }), zC = !0;
                break;
              case "SDK_ERROR":
                console.error("Gamedis SDK_ERROR fired"), QC();
                break;
              case "SDK_GDPR_TRACKING":
              case "SDK_GDPR_TARGETING":
              default:
                break;
              case "AD_ERROR":
                console.error("Gamedis AD_ERROR fired"), QC();
                break;
              case "AD_IS_ALREADY_RUNNING":
                console.error("Gamedis AD_IS_ALREADY_RUNNING fired"), QC();
                break;
              case "DISPLAYAD_ERROR":
                console.error("Gamedis DISPLAYAD_ERROR fired"), console.error(ZC)
            }
          }
        }, await (0, wC.e)("https://html5.api.gamedistribution.com/main.min.js", {
          id: "gamedistribution-jssdk"
        }), new bC((zC => {
          CC = zC
        }))
      }
      playVideoAd(CC, zC) {
        this.setOnEndCb(CC), console.log("Requesting gamedis preroll"), window.gdsdk.showAd()
      }
      renderBanner(CC) {
        console.log("Getting new gamedis banners"), void 0 !== window.gdsdk.AdType.Display ? (console.log("requesting gamedis banner into", document.getElementById(CC.divId)), console.log("Params to window.gdsdk.showAd", window.gdsdk.AdType.Display, CC.divId), window.gdsdk.showAd(window.gdsdk.AdType.Display, {
          containerId: CC.divId
        }).then((() => console.info("showAd(window.gdsdk.AdType.Display) resolved."))).catch((CC => console.info(CC)))) : console.error("window.gdsdk.AdType.Display is undefined")
      }
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);