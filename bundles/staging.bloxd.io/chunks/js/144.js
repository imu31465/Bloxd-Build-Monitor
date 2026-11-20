export const id = 144;
export const ids = [144];
export const modules = {
  7784: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      GameDistributionSdkAdaptor: () => Gb
    });
    var Bb = hb(1211),
      Ob = hb(1077);
    class Gb extends Bb.b {
      constructor(bb) {
        super(), this.setOnEndCb = bb, this.name = "gamedistribution"
      }
      static async setup() {
        let bb;
        let ub;
        return window.GD_OPTIONS = {
          gameId: "b35b336d21654aa5a378480d13ed7225",
          onEvent: hb => {
            const Bb = () => {
              ub && (window.adCompleteSoResume(), ub = !1), bb && (bb(), bb = null)
            };
            switch (hb.name) {
              case "SDK_GAME_START":
                console.log("Gamedis SDK_GAME_START"), ub = !1, bb ? (bb(), bb = null, window.adCompleteSoResume()) : console.error("onEndCb is not defined during SDK_GAME_START for gamedis sdk. Probably means error happened before.");
                break;
              case "SDK_GAME_PAUSE":
                console.log("Gamedis SDK_GAME_PAUSE"), window.adStartSoPause(null, {
                  preventMovement: !0
                }), ub = !0;
                break;
              case "SDK_ERROR":
                console.error("Gamedis SDK_ERROR fired"), Bb();
                break;
              case "SDK_GDPR_TRACKING":
              case "SDK_GDPR_TARGETING":
              default:
                break;
              case "AD_ERROR":
                console.error("Gamedis AD_ERROR fired"), Bb();
                break;
              case "AD_IS_ALREADY_RUNNING":
                console.error("Gamedis AD_IS_ALREADY_RUNNING fired"), Bb();
                break;
              case "DISPLAYAD_ERROR":
                console.error("Gamedis DISPLAYAD_ERROR fired"), console.error(hb)
            }
          }
        }, await (0, Ob.d)("https://html5.api.gamedistribution.com/main.min.js", {
          id: "gamedistribution-jssdk"
        }), new Gb((ub => {
          bb = ub
        }))
      }
      playVideoAd(bb, ub) {
        this.setOnEndCb(bb), console.log("Requesting gamedis preroll"), window.gdsdk.showAd()
      }
      renderBanner(bb) {
        console.log("Getting new gamedis banners"), void 0 !== window.gdsdk.AdType.Display ? (console.log("requesting gamedis banner into", document.getElementById(bb.divId)), console.log("Params to window.gdsdk.showAd", window.gdsdk.AdType.Display, bb.divId), window.gdsdk.showAd(window.gdsdk.AdType.Display, {
          containerId: bb.divId
        }).then((() => console.info("showAd(window.gdsdk.AdType.Display) resolved."))).catch((bb => console.info(bb)))) : console.error("window.gdsdk.AdType.Display is undefined")
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);