export const id = 151;
export const ids = [151];
export const modules = {
  8327: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      GameDistributionSdkAdaptor: () => Zu
    });
    var su = ju(1364),
      Uu = ju(1227);
    class Zu extends su.b {
      constructor(uu) {
        super(), this.setOnEndCb = uu, this.name = "gamedistribution"
      }
      static async setup() {
        let uu;
        let Eu;
        return window.GD_OPTIONS = {
          gameId: "b35b336d21654aa5a378480d13ed7225",
          onEvent: ju => {
            const su = () => {
              Eu && (window.adCompleteSoResume(), Eu = !1), uu && (uu(), uu = null)
            };
            switch (ju.name) {
              case "SDK_GAME_START":
                console.log("Gamedis SDK_GAME_START"), Eu = !1, uu ? (uu(), uu = null, window.adCompleteSoResume()) : console.error("onEndCb is not defined during SDK_GAME_START for gamedis sdk. Probably means error happened before.");
                break;
              case "SDK_GAME_PAUSE":
                console.log("Gamedis SDK_GAME_PAUSE"), window.adStartSoPause(null, {
                  preventMovement: !0
                }), Eu = !0;
                break;
              case "SDK_ERROR":
                console.error("Gamedis SDK_ERROR fired"), su();
                break;
              case "SDK_GDPR_TRACKING":
              case "SDK_GDPR_TARGETING":
              default:
                break;
              case "AD_ERROR":
                console.error("Gamedis AD_ERROR fired"), su();
                break;
              case "AD_IS_ALREADY_RUNNING":
                console.error("Gamedis AD_IS_ALREADY_RUNNING fired"), su();
                break;
              case "DISPLAYAD_ERROR":
                console.error("Gamedis DISPLAYAD_ERROR fired"), console.error(ju)
            }
          }
        }, await (0, Uu.e)("https://html5.api.gamedistribution.com/main.min.js", {
          id: "gamedistribution-jssdk"
        }), new Zu((Eu => {
          uu = Eu
        }))
      }
      playVideoAd(uu, Eu) {
        this.setOnEndCb(uu), console.log("Requesting gamedis preroll"), window.gdsdk.showAd()
      }
      renderBanner(uu) {
        console.log("Getting new gamedis banners"), void 0 !== window.gdsdk.AdType.Display ? (console.log("requesting gamedis banner into", document.getElementById(uu.divId)), console.log("Params to window.gdsdk.showAd", window.gdsdk.AdType.Display, uu.divId), window.gdsdk.showAd(window.gdsdk.AdType.Display, {
          containerId: uu.divId
        }).then((() => console.info("showAd(window.gdsdk.AdType.Display) resolved."))).catch((uu => console.info(uu)))) : console.error("window.gdsdk.AdType.Display is undefined")
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);