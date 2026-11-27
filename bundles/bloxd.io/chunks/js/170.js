export const id = 170;
export const ids = [170];
export const modules = {
  7671: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      GameDistributionSdkAdaptor: () => ar
    });
    var Zr = Qr(1418),
      Wr = Qr(1240);
    class ar extends Zr.d {
      constructor(rr) {
        super(), this.setOnEndCb = rr, this.name = "gamedistribution"
      }
      static async setup() {
        let rr;
        let Sr;
        return window.GD_OPTIONS = {
          gameId: "b35b336d21654aa5a378480d13ed7225",
          onEvent: Qr => {
            const Zr = () => {
              Sr && (window.adCompleteSoResume(), Sr = !1), rr && (rr(), rr = null)
            };
            switch (Qr.name) {
              case "SDK_GAME_START":
                console.log("Gamedis SDK_GAME_START"), Sr = !1, rr ? (rr(), rr = null, window.adCompleteSoResume()) : console.error("onEndCb is not defined during SDK_GAME_START for gamedis sdk. Probably means error happened before.");
                break;
              case "SDK_GAME_PAUSE":
                console.log("Gamedis SDK_GAME_PAUSE"), window.adStartSoPause(null, {
                  preventMovement: !0
                }), Sr = !0;
                break;
              case "SDK_ERROR":
                console.error("Gamedis SDK_ERROR fired"), Zr();
                break;
              case "SDK_GDPR_TRACKING":
              case "SDK_GDPR_TARGETING":
              default:
                break;
              case "AD_ERROR":
                console.error("Gamedis AD_ERROR fired"), Zr();
                break;
              case "AD_IS_ALREADY_RUNNING":
                console.error("Gamedis AD_IS_ALREADY_RUNNING fired"), Zr();
                break;
              case "DISPLAYAD_ERROR":
                console.error("Gamedis DISPLAYAD_ERROR fired"), console.error(Qr)
            }
          }
        }, await (0, Wr.e)("https://html5.api.gamedistribution.com/main.min.js", {
          id: "gamedistribution-jssdk"
        }), new ar((Sr => {
          rr = Sr
        }))
      }
      playVideoAd(rr, Sr) {
        this.setOnEndCb(rr), console.log("Requesting gamedis preroll"), window.gdsdk.showAd()
      }
      willRequestBanner() {
        return void 0 !== window.gdsdk.AdType.Display
      }
      renderBanner(rr) {
        console.log("Getting new gamedis banners"), this.willRequestBanner() ? (console.log("requesting gamedis banner into", document.getElementById(rr.divId)), console.log("Params to window.gdsdk.showAd", window.gdsdk.AdType.Display, rr.divId), window.gdsdk.showAd(window.gdsdk.AdType.Display, {
          containerId: rr.divId
        }).then((() => console.info("showAd(window.gdsdk.AdType.Display) resolved."))).catch((rr => console.info(rr)))) : console.error("window.gdsdk.AdType.Display is undefined")
      }
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);