export const id = 151;
export const ids = [151];
export const modules = {
  8248: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      GameDistributionSdkAdaptor: () => Ip
    });
    var Op = cp(1341),
      op = cp(1194);
    class Ip extends Op.b {
      constructor(pp) {
        super(), this.setOnEndCb = pp, this.name = "gamedistribution"
      }
      static async setup() {
        let pp;
        let ip;
        return window.GD_OPTIONS = {
          gameId: "b35b336d21654aa5a378480d13ed7225",
          onEvent: cp => {
            const Op = () => {
              ip && (window.adCompleteSoResume(), ip = !1), pp && (pp(), pp = null)
            };
            switch (cp.name) {
              case "SDK_GAME_START":
                console.log("Gamedis SDK_GAME_START"), ip = !1, pp ? (pp(), pp = null, window.adCompleteSoResume()) : console.error("onEndCb is not defined during SDK_GAME_START for gamedis sdk. Probably means error happened before.");
                break;
              case "SDK_GAME_PAUSE":
                console.log("Gamedis SDK_GAME_PAUSE"), window.adStartSoPause(null, {
                  preventMovement: !0
                }), ip = !0;
                break;
              case "SDK_ERROR":
                console.error("Gamedis SDK_ERROR fired"), Op();
                break;
              case "SDK_GDPR_TRACKING":
              case "SDK_GDPR_TARGETING":
              default:
                break;
              case "AD_ERROR":
                console.error("Gamedis AD_ERROR fired"), Op();
                break;
              case "AD_IS_ALREADY_RUNNING":
                console.error("Gamedis AD_IS_ALREADY_RUNNING fired"), Op();
                break;
              case "DISPLAYAD_ERROR":
                console.error("Gamedis DISPLAYAD_ERROR fired"), console.error(cp)
            }
          }
        }, await (0, op.b)("https://html5.api.gamedistribution.com/main.min.js", {
          id: "gamedistribution-jssdk"
        }), new Ip((ip => {
          pp = ip
        }))
      }
      playVideoAd(pp, ip) {
        this.setOnEndCb(pp), console.log("Requesting gamedis preroll"), window.gdsdk.showAd()
      }
      renderBanner(pp) {
        console.log("Getting new gamedis banners"), void 0 !== window.gdsdk.AdType.Display ? (console.log("requesting gamedis banner into", document.getElementById(pp.divId)), console.log("Params to window.gdsdk.showAd", window.gdsdk.AdType.Display, pp.divId), window.gdsdk.showAd(window.gdsdk.AdType.Display, {
          containerId: pp.divId
        }).then((() => console.info("showAd(window.gdsdk.AdType.Display) resolved."))).catch((pp => console.info(pp)))) : console.error("window.gdsdk.AdType.Display is undefined")
      }
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);