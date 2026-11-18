export const id = 136;
export const ids = [136];
export const modules = {
  7432: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      GameDistributionSdkAdaptor: () => eJ
    });
    var FJ = ZJ(1205),
      UJ = ZJ(1075);
    class eJ extends FJ.b {
      constructor(JJ) {
        super(), this.setOnEndCb = JJ, this.name = "gamedistribution"
      }
      static async setup() {
        let JJ;
        let cJ;
        return window.GD_OPTIONS = {
          gameId: "b35b336d21654aa5a378480d13ed7225",
          onEvent: ZJ => {
            const FJ = () => {
              cJ && (window.adCompleteSoResume(), cJ = !1), JJ && (JJ(), JJ = null)
            };
            switch (ZJ.name) {
              case "SDK_GAME_START":
                console.log("Gamedis SDK_GAME_START"), cJ = !1, JJ ? (JJ(), JJ = null, window.adCompleteSoResume()) : console.error("onEndCb is not defined during SDK_GAME_START for gamedis sdk. Probably means error happened before.");
                break;
              case "SDK_GAME_PAUSE":
                console.log("Gamedis SDK_GAME_PAUSE"), window.adStartSoPause(null, {
                  preventMovement: !0
                }), cJ = !0;
                break;
              case "SDK_ERROR":
                console.error("Gamedis SDK_ERROR fired"), FJ();
                break;
              case "SDK_GDPR_TRACKING":
              case "SDK_GDPR_TARGETING":
              default:
                break;
              case "AD_ERROR":
                console.error("Gamedis AD_ERROR fired"), FJ();
                break;
              case "AD_IS_ALREADY_RUNNING":
                console.error("Gamedis AD_IS_ALREADY_RUNNING fired"), FJ();
                break;
              case "DISPLAYAD_ERROR":
                console.error("Gamedis DISPLAYAD_ERROR fired"), console.error(ZJ)
            }
          }
        }, await (0, UJ.e)("https://html5.api.gamedistribution.com/main.min.js", {
          id: "gamedistribution-jssdk"
        }), new eJ((cJ => {
          JJ = cJ
        }))
      }
      playVideoAd(JJ, cJ) {
        this.setOnEndCb(JJ), console.log("Requesting gamedis preroll"), window.gdsdk.showAd()
      }
      renderBanner(JJ) {
        console.log("Getting new gamedis banners"), void 0 !== window.gdsdk.AdType.Display ? (console.log("requesting gamedis banner into", document.getElementById(JJ.divId)), console.log("Params to window.gdsdk.showAd", window.gdsdk.AdType.Display, JJ.divId), window.gdsdk.showAd(window.gdsdk.AdType.Display, {
          containerId: JJ.divId
        }).then((() => console.info("showAd(window.gdsdk.AdType.Display) resolved."))).catch((JJ => console.info(JJ)))) : console.error("window.gdsdk.AdType.Display is undefined")
      }
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);