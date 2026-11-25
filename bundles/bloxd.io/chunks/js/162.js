export const id = 162;
export const ids = [162];
export const modules = {
  7195: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      GameDistributionSdkAdaptor: () => jM
    });
    var OM = iM(1367),
      SM = iM(1177);
    class jM extends OM.d {
      constructor(MM) {
        super(), this.setOnEndCb = MM, this.name = "gamedistribution"
      }
      static async setup() {
        let MM;
        let rM;
        return window.GD_OPTIONS = {
          gameId: "b35b336d21654aa5a378480d13ed7225",
          onEvent: iM => {
            const OM = () => {
              rM && (window.adCompleteSoResume(), rM = !1), MM && (MM(), MM = null)
            };
            switch (iM.name) {
              case "SDK_GAME_START":
                console.log("Gamedis SDK_GAME_START"), rM = !1, MM ? (MM(), MM = null, window.adCompleteSoResume()) : console.error("onEndCb is not defined during SDK_GAME_START for gamedis sdk. Probably means error happened before.");
                break;
              case "SDK_GAME_PAUSE":
                console.log("Gamedis SDK_GAME_PAUSE"), window.adStartSoPause(null, {
                  preventMovement: !0
                }), rM = !0;
                break;
              case "SDK_ERROR":
                console.error("Gamedis SDK_ERROR fired"), OM();
                break;
              case "SDK_GDPR_TRACKING":
              case "SDK_GDPR_TARGETING":
              default:
                break;
              case "AD_ERROR":
                console.error("Gamedis AD_ERROR fired"), OM();
                break;
              case "AD_IS_ALREADY_RUNNING":
                console.error("Gamedis AD_IS_ALREADY_RUNNING fired"), OM();
                break;
              case "DISPLAYAD_ERROR":
                console.error("Gamedis DISPLAYAD_ERROR fired"), console.error(iM)
            }
          }
        }, await (0, SM.d)("https://html5.api.gamedistribution.com/main.min.js", {
          id: "gamedistribution-jssdk"
        }), new jM((rM => {
          MM = rM
        }))
      }
      playVideoAd(MM, rM) {
        this.setOnEndCb(MM), console.log("Requesting gamedis preroll"), window.gdsdk.showAd()
      }
      renderBanner(MM) {
        console.log("Getting new gamedis banners"), void 0 !== window.gdsdk.AdType.Display ? (console.log("requesting gamedis banner into", document.getElementById(MM.divId)), console.log("Params to window.gdsdk.showAd", window.gdsdk.AdType.Display, MM.divId), window.gdsdk.showAd(window.gdsdk.AdType.Display, {
          containerId: MM.divId
        }).then((() => console.info("showAd(window.gdsdk.AdType.Display) resolved."))).catch((MM => console.info(MM)))) : console.error("window.gdsdk.AdType.Display is undefined")
      }
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);