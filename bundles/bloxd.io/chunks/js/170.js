export const id = 170;
export const ids = [170];
export const modules = {
  7919: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      GameDistributionSdkAdaptor: () => pb
    });
    var eb = Mb(1440),
      Hb = Mb(1250);
    class pb extends eb.b {
      constructor(bb) {
        super(), this.setOnEndCb = bb, this.name = "gamedistribution"
      }
      static async setup() {
        let bb;
        let wb;
        return window.GD_OPTIONS = {
          gameId: "b35b336d21654aa5a378480d13ed7225",
          onEvent: Mb => {
            const eb = () => {
              wb && (window.adCompleteSoResume(), wb = !1), bb && (bb(), bb = null)
            };
            switch (Mb.name) {
              case "SDK_GAME_START":
                console.log("Gamedis SDK_GAME_START"), wb = !1, bb ? (bb(), bb = null, window.adCompleteSoResume()) : console.error("onEndCb is not defined during SDK_GAME_START for gamedis sdk. Probably means error happened before.");
                break;
              case "SDK_GAME_PAUSE":
                console.log("Gamedis SDK_GAME_PAUSE"), window.adStartSoPause(null, {
                  preventMovement: !0
                }), wb = !0;
                break;
              case "SDK_ERROR":
                console.error("Gamedis SDK_ERROR fired"), eb();
                break;
              case "SDK_GDPR_TRACKING":
              case "SDK_GDPR_TARGETING":
              default:
                break;
              case "AD_ERROR":
                console.error("Gamedis AD_ERROR fired"), eb();
                break;
              case "AD_IS_ALREADY_RUNNING":
                console.error("Gamedis AD_IS_ALREADY_RUNNING fired"), eb();
                break;
              case "DISPLAYAD_ERROR":
                console.error("Gamedis DISPLAYAD_ERROR fired"), console.error(Mb)
            }
          }
        }, await (0, Hb.c)("https://html5.api.gamedistribution.com/main.min.js", {
          id: "gamedistribution-jssdk"
        }), new pb((wb => {
          bb = wb
        }))
      }
      playVideoAd(bb, wb) {
        this.setOnEndCb(bb), console.log("Requesting gamedis preroll"), window.gdsdk.showAd()
      }
      willRequestBanner() {
        return void 0 !== window.gdsdk.AdType.Display
      }
      renderBanner(bb) {
        console.log("Getting new gamedis banners"), this.willRequestBanner() ? (console.log("requesting gamedis banner into", document.getElementById(bb.divId)), console.log("Params to window.gdsdk.showAd", window.gdsdk.AdType.Display, bb.divId), window.gdsdk.showAd(window.gdsdk.AdType.Display, {
          containerId: bb.divId
        }).then((() => console.info("showAd(window.gdsdk.AdType.Display) resolved."))).catch((bb => console.info(bb)))) : console.error("window.gdsdk.AdType.Display is undefined")
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);