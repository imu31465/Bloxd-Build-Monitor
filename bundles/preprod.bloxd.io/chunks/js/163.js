export const id = 163;
export const ids = [163];
export const modules = {
  7266: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      GameDistributionSdkAdaptor: () => QB
    });
    var YB = GB(1341),
      DB = GB(1168);
    class QB extends YB.c {
      constructor(BB) {
        super(), this.setOnEndCb = BB, this.name = "gamedistribution"
      }
      static async setup() {
        let BB;
        let OB;
        return window.GD_OPTIONS = {
          gameId: "b35b336d21654aa5a378480d13ed7225",
          onEvent: GB => {
            const YB = () => {
              OB && (window.adCompleteSoResume(), OB = !1), BB && (BB(), BB = null)
            };
            switch (GB.name) {
              case "SDK_GAME_START":
                console.log("Gamedis SDK_GAME_START"), OB = !1, BB ? (BB(), BB = null, window.adCompleteSoResume()) : console.error("onEndCb is not defined during SDK_GAME_START for gamedis sdk. Probably means error happened before.");
                break;
              case "SDK_GAME_PAUSE":
                console.log("Gamedis SDK_GAME_PAUSE"), window.adStartSoPause(null, {
                  preventMovement: !0
                }), OB = !0;
                break;
              case "SDK_ERROR":
                console.error("Gamedis SDK_ERROR fired"), YB();
                break;
              case "SDK_GDPR_TRACKING":
              case "SDK_GDPR_TARGETING":
              default:
                break;
              case "AD_ERROR":
                console.error("Gamedis AD_ERROR fired"), YB();
                break;
              case "AD_IS_ALREADY_RUNNING":
                console.error("Gamedis AD_IS_ALREADY_RUNNING fired"), YB();
                break;
              case "DISPLAYAD_ERROR":
                console.error("Gamedis DISPLAYAD_ERROR fired"), console.error(GB)
            }
          }
        }, await (0, DB.b)("https://html5.api.gamedistribution.com/main.min.js", {
          id: "gamedistribution-jssdk"
        }), new QB((OB => {
          BB = OB
        }))
      }
      playVideoAd(BB, OB) {
        this.setOnEndCb(BB), console.log("Requesting gamedis preroll"), window.gdsdk.showAd()
      }
      willRequestBanner() {
        return void 0 !== window.gdsdk.AdType.Display
      }
      renderBanner(BB) {
        console.log("Getting new gamedis banners"), this.willRequestBanner() ? (console.log("requesting gamedis banner into", document.getElementById(BB.divId)), console.log("Params to window.gdsdk.showAd", window.gdsdk.AdType.Display, BB.divId), window.gdsdk.showAd(window.gdsdk.AdType.Display, {
          containerId: BB.divId
        }).then((() => console.info("showAd(window.gdsdk.AdType.Display) resolved."))).catch((BB => console.info(BB)))) : console.error("window.gdsdk.AdType.Display is undefined")
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);