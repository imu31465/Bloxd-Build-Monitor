export const id = 151;
export const ids = [151];
export const modules = {
  8235: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      GameDistributionSdkAdaptor: () => oB
    });
    var TB = ZB(1379),
      JB = ZB(1241);
    class oB extends TB.d {
      constructor(BB) {
        super(), this.setOnEndCb = BB, this.name = "gamedistribution"
      }
      static async setup() {
        let BB;
        let IB;
        return window.GD_OPTIONS = {
          gameId: "b35b336d21654aa5a378480d13ed7225",
          onEvent: ZB => {
            const TB = () => {
              IB && (window.adCompleteSoResume(), IB = !1), BB && (BB(), BB = null)
            };
            switch (ZB.name) {
              case "SDK_GAME_START":
                console.log("Gamedis SDK_GAME_START"), IB = !1, BB ? (BB(), BB = null, window.adCompleteSoResume()) : console.error("onEndCb is not defined during SDK_GAME_START for gamedis sdk. Probably means error happened before.");
                break;
              case "SDK_GAME_PAUSE":
                console.log("Gamedis SDK_GAME_PAUSE"), window.adStartSoPause(null, {
                  preventMovement: !0
                }), IB = !0;
                break;
              case "SDK_ERROR":
                console.error("Gamedis SDK_ERROR fired"), TB();
                break;
              case "SDK_GDPR_TRACKING":
              case "SDK_GDPR_TARGETING":
              default:
                break;
              case "AD_ERROR":
                console.error("Gamedis AD_ERROR fired"), TB();
                break;
              case "AD_IS_ALREADY_RUNNING":
                console.error("Gamedis AD_IS_ALREADY_RUNNING fired"), TB();
                break;
              case "DISPLAYAD_ERROR":
                console.error("Gamedis DISPLAYAD_ERROR fired"), console.error(ZB)
            }
          }
        }, await (0, JB.c)("https://html5.api.gamedistribution.com/main.min.js", {
          id: "gamedistribution-jssdk"
        }), new oB((IB => {
          BB = IB
        }))
      }
      playVideoAd(BB, IB) {
        this.setOnEndCb(BB), console.log("Requesting gamedis preroll"), window.gdsdk.showAd()
      }
      renderBanner(BB) {
        console.log("Getting new gamedis banners"), void 0 !== window.gdsdk.AdType.Display ? (console.log("requesting gamedis banner into", document.getElementById(BB.divId)), console.log("Params to window.gdsdk.showAd", window.gdsdk.AdType.Display, BB.divId), window.gdsdk.showAd(window.gdsdk.AdType.Display, {
          containerId: BB.divId
        }).then((() => console.info("showAd(window.gdsdk.AdType.Display) resolved."))).catch((BB => console.info(BB)))) : console.error("window.gdsdk.AdType.Display is undefined")
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);