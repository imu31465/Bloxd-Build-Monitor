export const id = 151;
export const ids = [151];
export const modules = {
  8221: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      GameDistributionSdkAdaptor: () => MT
    });
    var WT = mT(1423),
      zT = mT(1277);
    class MT extends WT.d {
      constructor(TT) {
        super(), this.setOnEndCb = TT, this.name = "gamedistribution"
      }
      static async setup() {
        let TT;
        let UT;
        return window.GD_OPTIONS = {
          gameId: "b35b336d21654aa5a378480d13ed7225",
          onEvent: mT => {
            const WT = () => {
              UT && (window.adCompleteSoResume(), UT = !1), TT && (TT(), TT = null)
            };
            switch (mT.name) {
              case "SDK_GAME_START":
                console.log("Gamedis SDK_GAME_START"), UT = !1, TT ? (TT(), TT = null, window.adCompleteSoResume()) : console.error("onEndCb is not defined during SDK_GAME_START for gamedis sdk. Probably means error happened before.");
                break;
              case "SDK_GAME_PAUSE":
                console.log("Gamedis SDK_GAME_PAUSE"), window.adStartSoPause(null, {
                  preventMovement: !0
                }), UT = !0;
                break;
              case "SDK_ERROR":
                console.error("Gamedis SDK_ERROR fired"), WT();
                break;
              case "SDK_GDPR_TRACKING":
              case "SDK_GDPR_TARGETING":
              default:
                break;
              case "AD_ERROR":
                console.error("Gamedis AD_ERROR fired"), WT();
                break;
              case "AD_IS_ALREADY_RUNNING":
                console.error("Gamedis AD_IS_ALREADY_RUNNING fired"), WT();
                break;
              case "DISPLAYAD_ERROR":
                console.error("Gamedis DISPLAYAD_ERROR fired"), console.error(mT)
            }
          }
        }, await (0, zT.d)("https://html5.api.gamedistribution.com/main.min.js", {
          id: "gamedistribution-jssdk"
        }), new MT((UT => {
          TT = UT
        }))
      }
      playVideoAd(TT, UT) {
        this.setOnEndCb(TT), console.log("Requesting gamedis preroll"), window.gdsdk.showAd()
      }
      renderBanner(TT) {
        console.log("Getting new gamedis banners"), void 0 !== window.gdsdk.AdType.Display ? (console.log("requesting gamedis banner into", document.getElementById(TT.divId)), console.log("Params to window.gdsdk.showAd", window.gdsdk.AdType.Display, TT.divId), window.gdsdk.showAd(window.gdsdk.AdType.Display, {
          containerId: TT.divId
        }).then((() => console.info("showAd(window.gdsdk.AdType.Display) resolved."))).catch((TT => console.info(TT)))) : console.error("window.gdsdk.AdType.Display is undefined")
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);