export const id = 149;
export const ids = [149];
export const modules = {
  8096: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      GameDistributionSdkAdaptor: () => ik
    });
    var Xk = Ik(1295),
      Tk = Ik(1173);
    class ik extends Xk.d {
      constructor(kk) {
        super(), this.setOnEndCb = kk, this.name = "gamedistribution"
      }
      static async setup() {
        let kk;
        let Fk;
        return window.GD_OPTIONS = {
          gameId: "b35b336d21654aa5a378480d13ed7225",
          onEvent: Ik => {
            const Xk = () => {
              Fk && (window.adCompleteSoResume(), Fk = !1), kk && (kk(), kk = null)
            };
            switch (Ik.name) {
              case "SDK_GAME_START":
                console.log("Gamedis SDK_GAME_START"), Fk = !1, kk ? (kk(), kk = null, window.adCompleteSoResume()) : console.error("onEndCb is not defined during SDK_GAME_START for gamedis sdk. Probably means error happened before.");
                break;
              case "SDK_GAME_PAUSE":
                console.log("Gamedis SDK_GAME_PAUSE"), window.adStartSoPause(null, {
                  preventMovement: !0
                }), Fk = !0;
                break;
              case "SDK_ERROR":
                console.error("Gamedis SDK_ERROR fired"), Xk();
                break;
              case "SDK_GDPR_TRACKING":
              case "SDK_GDPR_TARGETING":
              default:
                break;
              case "AD_ERROR":
                console.error("Gamedis AD_ERROR fired"), Xk();
                break;
              case "AD_IS_ALREADY_RUNNING":
                console.error("Gamedis AD_IS_ALREADY_RUNNING fired"), Xk();
                break;
              case "DISPLAYAD_ERROR":
                console.error("Gamedis DISPLAYAD_ERROR fired"), console.error(Ik)
            }
          }
        }, await (0, Tk.d)("https://html5.api.gamedistribution.com/main.min.js", {
          id: "gamedistribution-jssdk"
        }), new ik((Fk => {
          kk = Fk
        }))
      }
      playVideoAd(kk, Fk) {
        this.setOnEndCb(kk), console.log("Requesting gamedis preroll"), window.gdsdk.showAd()
      }
      renderBanner(kk) {
        console.log("Getting new gamedis banners"), void 0 !== window.gdsdk.AdType.Display ? (console.log("requesting gamedis banner into", document.getElementById(kk.divId)), console.log("Params to window.gdsdk.showAd", window.gdsdk.AdType.Display, kk.divId), window.gdsdk.showAd(window.gdsdk.AdType.Display, {
          containerId: kk.divId
        }).then((() => console.info("showAd(window.gdsdk.AdType.Display) resolved."))).catch((kk => console.info(kk)))) : console.error("window.gdsdk.AdType.Display is undefined")
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);