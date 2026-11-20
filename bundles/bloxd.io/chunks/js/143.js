export const id = 143;
export const ids = [143];
export const modules = {
  7693: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      GameDistributionSdkAdaptor: () => Tb
    });
    var Ab = Ub(1240),
      Mb = Ub(1118);
    class Tb extends Ab.d {
      constructor(bb) {
        super(), this.setOnEndCb = bb, this.name = "gamedistribution"
      }
      static async setup() {
        let bb;
        let ab;
        return window.GD_OPTIONS = {
          gameId: "b35b336d21654aa5a378480d13ed7225",
          onEvent: Ub => {
            const Ab = () => {
              ab && (window.adCompleteSoResume(), ab = !1), bb && (bb(), bb = null)
            };
            switch (Ub.name) {
              case "SDK_GAME_START":
                console.log("Gamedis SDK_GAME_START"), ab = !1, bb ? (bb(), bb = null, window.adCompleteSoResume()) : console.error("onEndCb is not defined during SDK_GAME_START for gamedis sdk. Probably means error happened before.");
                break;
              case "SDK_GAME_PAUSE":
                console.log("Gamedis SDK_GAME_PAUSE"), window.adStartSoPause(null, {
                  preventMovement: !0
                }), ab = !0;
                break;
              case "SDK_ERROR":
                console.error("Gamedis SDK_ERROR fired"), Ab();
                break;
              case "SDK_GDPR_TRACKING":
              case "SDK_GDPR_TARGETING":
              default:
                break;
              case "AD_ERROR":
                console.error("Gamedis AD_ERROR fired"), Ab();
                break;
              case "AD_IS_ALREADY_RUNNING":
                console.error("Gamedis AD_IS_ALREADY_RUNNING fired"), Ab();
                break;
              case "DISPLAYAD_ERROR":
                console.error("Gamedis DISPLAYAD_ERROR fired"), console.error(Ub)
            }
          }
        }, await (0, Mb.b)("https://html5.api.gamedistribution.com/main.min.js", {
          id: "gamedistribution-jssdk"
        }), new Tb((ab => {
          bb = ab
        }))
      }
      playVideoAd(bb, ab) {
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