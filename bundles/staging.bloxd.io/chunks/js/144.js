export const id = 144;
export const ids = [144];
export const modules = {
  7967: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      GameDistributionSdkAdaptor: () => Wd
    });
    var pd = kd(1341),
      Nd = kd(1195);
    class Wd extends pd.d {
      constructor(dd) {
        super(), this.setOnEndCb = dd, this.name = "gamedistribution"
      }
      static async setup() {
        let dd;
        let Jd;
        return window.GD_OPTIONS = {
          gameId: "b35b336d21654aa5a378480d13ed7225",
          onEvent: kd => {
            const pd = () => {
              Jd && (window.adCompleteSoResume(), Jd = !1), dd && (dd(), dd = null)
            };
            switch (kd.name) {
              case "SDK_GAME_START":
                console.log("Gamedis SDK_GAME_START"), Jd = !1, dd ? (dd(), dd = null, window.adCompleteSoResume()) : console.error("onEndCb is not defined during SDK_GAME_START for gamedis sdk. Probably means error happened before.");
                break;
              case "SDK_GAME_PAUSE":
                console.log("Gamedis SDK_GAME_PAUSE"), window.adStartSoPause(null, {
                  preventMovement: !0
                }), Jd = !0;
                break;
              case "SDK_ERROR":
                console.error("Gamedis SDK_ERROR fired"), pd();
                break;
              case "SDK_GDPR_TRACKING":
              case "SDK_GDPR_TARGETING":
              default:
                break;
              case "AD_ERROR":
                console.error("Gamedis AD_ERROR fired"), pd();
                break;
              case "AD_IS_ALREADY_RUNNING":
                console.error("Gamedis AD_IS_ALREADY_RUNNING fired"), pd();
                break;
              case "DISPLAYAD_ERROR":
                console.error("Gamedis DISPLAYAD_ERROR fired"), console.error(kd)
            }
          }
        }, await (0, Nd.c)("https://html5.api.gamedistribution.com/main.min.js", {
          id: "gamedistribution-jssdk"
        }), new Wd((Jd => {
          dd = Jd
        }))
      }
      playVideoAd(dd, Jd) {
        this.setOnEndCb(dd), console.log("Requesting gamedis preroll"), window.gdsdk.showAd()
      }
      renderBanner(dd) {
        console.log("Getting new gamedis banners"), void 0 !== window.gdsdk.AdType.Display ? (console.log("requesting gamedis banner into", document.getElementById(dd.divId)), console.log("Params to window.gdsdk.showAd", window.gdsdk.AdType.Display, dd.divId), window.gdsdk.showAd(window.gdsdk.AdType.Display, {
          containerId: dd.divId
        }).then((() => console.info("showAd(window.gdsdk.AdType.Display) resolved."))).catch((dd => console.info(dd)))) : console.error("window.gdsdk.AdType.Display is undefined")
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);