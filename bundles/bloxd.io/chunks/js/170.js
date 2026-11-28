export const id = 170;
export const ids = [170];
export const modules = {
  7662: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      GameDistributionSdkAdaptor: () => Rd
    });
    var Wd = md(1410),
      Fd = md(1229);
    class Rd extends Wd.b {
      constructor(dd) {
        super(), this.setOnEndCb = dd, this.name = "gamedistribution"
      }
      static async setup() {
        let dd;
        let Od;
        return window.GD_OPTIONS = {
          gameId: "b35b336d21654aa5a378480d13ed7225",
          onEvent: md => {
            const Wd = () => {
              Od && (window.adCompleteSoResume(), Od = !1), dd && (dd(), dd = null)
            };
            switch (md.name) {
              case "SDK_GAME_START":
                console.log("Gamedis SDK_GAME_START"), Od = !1, dd ? (dd(), dd = null, window.adCompleteSoResume()) : console.error("onEndCb is not defined during SDK_GAME_START for gamedis sdk. Probably means error happened before.");
                break;
              case "SDK_GAME_PAUSE":
                console.log("Gamedis SDK_GAME_PAUSE"), window.adStartSoPause(null, {
                  preventMovement: !0
                }), Od = !0;
                break;
              case "SDK_ERROR":
                console.error("Gamedis SDK_ERROR fired"), Wd();
                break;
              case "SDK_GDPR_TRACKING":
              case "SDK_GDPR_TARGETING":
              default:
                break;
              case "AD_ERROR":
                console.error("Gamedis AD_ERROR fired"), Wd();
                break;
              case "AD_IS_ALREADY_RUNNING":
                console.error("Gamedis AD_IS_ALREADY_RUNNING fired"), Wd();
                break;
              case "DISPLAYAD_ERROR":
                console.error("Gamedis DISPLAYAD_ERROR fired"), console.error(md)
            }
          }
        }, await (0, Fd.d)("https://html5.api.gamedistribution.com/main.min.js", {
          id: "gamedistribution-jssdk"
        }), new Rd((Od => {
          dd = Od
        }))
      }
      playVideoAd(dd, Od) {
        this.setOnEndCb(dd), console.log("Requesting gamedis preroll"), window.gdsdk.showAd()
      }
      willRequestBanner() {
        return void 0 !== window.gdsdk.AdType.Display
      }
      renderBanner(dd) {
        console.log("Getting new gamedis banners"), this.willRequestBanner() ? (console.log("requesting gamedis banner into", document.getElementById(dd.divId)), console.log("Params to window.gdsdk.showAd", window.gdsdk.AdType.Display, dd.divId), window.gdsdk.showAd(window.gdsdk.AdType.Display, {
          containerId: dd.divId
        }).then((() => console.info("showAd(window.gdsdk.AdType.Display) resolved."))).catch((dd => console.info(dd)))) : console.error("window.gdsdk.AdType.Display is undefined")
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);