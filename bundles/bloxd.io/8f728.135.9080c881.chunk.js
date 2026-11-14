export const id = 135;
export const ids = [135];
export const modules = {
  6992: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      GameDistributionSdkAdaptor: () => rB
    });
    var Vc = nc(1168),
      Ic = nc(1040);
    class rB extends Vc.e {
      constructor(cB) {
        super(), this.setOnEndCb = cB, this.name = "gamedistribution"
      }
      static async setup() {
        let cB;
        let Bc;
        return window.GD_OPTIONS = {
          gameId: "b35b336d21654aa5a378480d13ed7225",
          onEvent: nc => {
            const Vc = () => {
              Bc && (window.adCompleteSoResume(), Bc = !1), cB && (cB(), cB = null)
            };
            switch (nc.name) {
              case "SDK_GAME_START":
                console.log("Gamedis SDK_GAME_START"), Bc = !1, cB ? (cB(), cB = null, window.adCompleteSoResume()) : console.error("onEndCb is not defined during SDK_GAME_START for gamedis sdk. Probably means error happened before.");
                break;
              case "SDK_GAME_PAUSE":
                console.log("Gamedis SDK_GAME_PAUSE"), window.adStartSoPause(null, {
                  preventMovement: !0
                }), Bc = !0;
                break;
              case "SDK_ERROR":
                console.error("Gamedis SDK_ERROR fired"), Vc();
                break;
              case "SDK_GDPR_TRACKING":
              case "SDK_GDPR_TARGETING":
              default:
                break;
              case "AD_ERROR":
                console.error("Gamedis AD_ERROR fired"), Vc();
                break;
              case "AD_IS_ALREADY_RUNNING":
                console.error("Gamedis AD_IS_ALREADY_RUNNING fired"), Vc();
                break;
              case "DISPLAYAD_ERROR":
                console.error("Gamedis DISPLAYAD_ERROR fired"), console.error(nc)
            }
          }
        }, await (0, Ic.b)("https://html5.api.gamedistribution.com/main.min.js", {
          id: "gamedistribution-jssdk"
        }), new rB((Bc => {
          cB = Bc
        }))
      }
      playVideoAd(cB, Bc) {
        this.setOnEndCb(cB), console.log("Requesting gamedis preroll"), window.gdsdk.showAd()
      }
      renderBanner(cB) {
        console.log("Getting new gamedis banners"), void 0 !== window.gdsdk.AdType.Display ? (console.log("requesting gamedis banner into", document.getElementById(cB.divId)), console.log("Params to window.gdsdk.showAd", window.gdsdk.AdType.Display, cB.divId), window.gdsdk.showAd(window.gdsdk.AdType.Display, {
          containerId: cB.divId
        }).then((() => console.info("showAd(window.gdsdk.AdType.Display) resolved."))).catch((cB => console.info(cB)))) : console.error("window.gdsdk.AdType.Display is undefined")
      }
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);