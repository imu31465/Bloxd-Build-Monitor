export const id = 149;
export const ids = [149];
export const modules = {
  8024: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      GameDistributionSdkAdaptor: () => am
    });
    var hm = fm(1318),
      Am = fm(1198);
    class am extends hm.c {
      constructor(mm) {
        super(), this.setOnEndCb = mm, this.name = "gamedistribution"
      }
      static async setup() {
        let mm;
        let Tm;
        return window.GD_OPTIONS = {
          gameId: "b35b336d21654aa5a378480d13ed7225",
          onEvent: fm => {
            const hm = () => {
              Tm && (window.adCompleteSoResume(), Tm = !1), mm && (mm(), mm = null)
            };
            switch (fm.name) {
              case "SDK_GAME_START":
                console.log("Gamedis SDK_GAME_START"), Tm = !1, mm ? (mm(), mm = null, window.adCompleteSoResume()) : console.error("onEndCb is not defined during SDK_GAME_START for gamedis sdk. Probably means error happened before.");
                break;
              case "SDK_GAME_PAUSE":
                console.log("Gamedis SDK_GAME_PAUSE"), window.adStartSoPause(null, {
                  preventMovement: !0
                }), Tm = !0;
                break;
              case "SDK_ERROR":
                console.error("Gamedis SDK_ERROR fired"), hm();
                break;
              case "SDK_GDPR_TRACKING":
              case "SDK_GDPR_TARGETING":
              default:
                break;
              case "AD_ERROR":
                console.error("Gamedis AD_ERROR fired"), hm();
                break;
              case "AD_IS_ALREADY_RUNNING":
                console.error("Gamedis AD_IS_ALREADY_RUNNING fired"), hm();
                break;
              case "DISPLAYAD_ERROR":
                console.error("Gamedis DISPLAYAD_ERROR fired"), console.error(fm)
            }
          }
        }, await (0, Am.c)("https://html5.api.gamedistribution.com/main.min.js", {
          id: "gamedistribution-jssdk"
        }), new am((Tm => {
          mm = Tm
        }))
      }
      playVideoAd(mm, Tm) {
        this.setOnEndCb(mm), console.log("Requesting gamedis preroll"), window.gdsdk.showAd()
      }
      renderBanner(mm) {
        console.log("Getting new gamedis banners"), void 0 !== window.gdsdk.AdType.Display ? (console.log("requesting gamedis banner into", document.getElementById(mm.divId)), console.log("Params to window.gdsdk.showAd", window.gdsdk.AdType.Display, mm.divId), window.gdsdk.showAd(window.gdsdk.AdType.Display, {
          containerId: mm.divId
        }).then((() => console.info("showAd(window.gdsdk.AdType.Display) resolved."))).catch((mm => console.info(mm)))) : console.error("window.gdsdk.AdType.Display is undefined")
      }
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);