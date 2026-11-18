export const id = 136;
export const ids = [136];
export const modules = {
  7260: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      GameDistributionSdkAdaptor: () => fy
    });
    var Uy = Wy(1169),
      hy = Wy(1029);
    class fy extends Uy.b {
      constructor(yb) {
        super(), this.setOnEndCb = yb, this.name = "gamedistribution"
      }
      static async setup() {
        let yb;
        let bb;
        return window.GD_OPTIONS = {
          gameId: "b35b336d21654aa5a378480d13ed7225",
          onEvent: Wy => {
            const Uy = () => {
              bb && (window.adCompleteSoResume(), bb = !1), yb && (yb(), yb = null)
            };
            switch (Wy.name) {
              case "SDK_GAME_START":
                console.log("Gamedis SDK_GAME_START"), bb = !1, yb ? (yb(), yb = null, window.adCompleteSoResume()) : console.error("onEndCb is not defined during SDK_GAME_START for gamedis sdk. Probably means error happened before.");
                break;
              case "SDK_GAME_PAUSE":
                console.log("Gamedis SDK_GAME_PAUSE"), window.adStartSoPause(null, {
                  preventMovement: !0
                }), bb = !0;
                break;
              case "SDK_ERROR":
                console.error("Gamedis SDK_ERROR fired"), Uy();
                break;
              case "SDK_GDPR_TRACKING":
              case "SDK_GDPR_TARGETING":
              default:
                break;
              case "AD_ERROR":
                console.error("Gamedis AD_ERROR fired"), Uy();
                break;
              case "AD_IS_ALREADY_RUNNING":
                console.error("Gamedis AD_IS_ALREADY_RUNNING fired"), Uy();
                break;
              case "DISPLAYAD_ERROR":
                console.error("Gamedis DISPLAYAD_ERROR fired"), console.error(Wy)
            }
          }
        }, await (0, hy.b)("https://html5.api.gamedistribution.com/main.min.js", {
          id: "gamedistribution-jssdk"
        }), new fy((bb => {
          yb = bb
        }))
      }
      playVideoAd(yb, bb) {
        this.setOnEndCb(yb), console.log("Requesting gamedis preroll"), window.gdsdk.showAd()
      }
      renderBanner(yb) {
        console.log("Getting new gamedis banners"), void 0 !== window.gdsdk.AdType.Display ? (console.log("requesting gamedis banner into", document.getElementById(yb.divId)), console.log("Params to window.gdsdk.showAd", window.gdsdk.AdType.Display, yb.divId), window.gdsdk.showAd(window.gdsdk.AdType.Display, {
          containerId: yb.divId
        }).then((() => console.info("showAd(window.gdsdk.AdType.Display) resolved."))).catch((yb => console.info(yb)))) : console.error("window.gdsdk.AdType.Display is undefined")
      }
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);