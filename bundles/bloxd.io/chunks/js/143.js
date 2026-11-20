export const id = 143;
export const ids = [143];
export const modules = {
  7855: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      GameDistributionSdkAdaptor: () => Qu
    });
    var Eu = yu(1277),
      Ku = yu(1153);
    class Qu extends Eu.b {
      constructor(uu) {
        super(), this.setOnEndCb = uu, this.name = "gamedistribution"
      }
      static async setup() {
        let uu;
        let Ru;
        return window.GD_OPTIONS = {
          gameId: "b35b336d21654aa5a378480d13ed7225",
          onEvent: yu => {
            const Eu = () => {
              Ru && (window.adCompleteSoResume(), Ru = !1), uu && (uu(), uu = null)
            };
            switch (yu.name) {
              case "SDK_GAME_START":
                console.log("Gamedis SDK_GAME_START"), Ru = !1, uu ? (uu(), uu = null, window.adCompleteSoResume()) : console.error("onEndCb is not defined during SDK_GAME_START for gamedis sdk. Probably means error happened before.");
                break;
              case "SDK_GAME_PAUSE":
                console.log("Gamedis SDK_GAME_PAUSE"), window.adStartSoPause(null, {
                  preventMovement: !0
                }), Ru = !0;
                break;
              case "SDK_ERROR":
                console.error("Gamedis SDK_ERROR fired"), Eu();
                break;
              case "SDK_GDPR_TRACKING":
              case "SDK_GDPR_TARGETING":
              default:
                break;
              case "AD_ERROR":
                console.error("Gamedis AD_ERROR fired"), Eu();
                break;
              case "AD_IS_ALREADY_RUNNING":
                console.error("Gamedis AD_IS_ALREADY_RUNNING fired"), Eu();
                break;
              case "DISPLAYAD_ERROR":
                console.error("Gamedis DISPLAYAD_ERROR fired"), console.error(yu)
            }
          }
        }, await (0, Ku.b)("https://html5.api.gamedistribution.com/main.min.js", {
          id: "gamedistribution-jssdk"
        }), new Qu((Ru => {
          uu = Ru
        }))
      }
      playVideoAd(uu, Ru) {
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