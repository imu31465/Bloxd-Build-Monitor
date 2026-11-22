export const id = 148;
export const ids = [148];
export const modules = {
  7926: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      GameDistributionSdkAdaptor: () => Sk
    });
    var Dk = ik(1298),
      fk = ik(1163);
    class Sk extends Dk.e {
      constructor(kk) {
        super(), this.setOnEndCb = kk, this.name = "gamedistribution"
      }
      static async setup() {
        let kk;
        let ek;
        return window.GD_OPTIONS = {
          gameId: "b35b336d21654aa5a378480d13ed7225",
          onEvent: ik => {
            const Dk = () => {
              ek && (window.adCompleteSoResume(), ek = !1), kk && (kk(), kk = null)
            };
            switch (ik.name) {
              case "SDK_GAME_START":
                console.log("Gamedis SDK_GAME_START"), ek = !1, kk ? (kk(), kk = null, window.adCompleteSoResume()) : console.error("onEndCb is not defined during SDK_GAME_START for gamedis sdk. Probably means error happened before.");
                break;
              case "SDK_GAME_PAUSE":
                console.log("Gamedis SDK_GAME_PAUSE"), window.adStartSoPause(null, {
                  preventMovement: !0
                }), ek = !0;
                break;
              case "SDK_ERROR":
                console.error("Gamedis SDK_ERROR fired"), Dk();
                break;
              case "SDK_GDPR_TRACKING":
              case "SDK_GDPR_TARGETING":
              default:
                break;
              case "AD_ERROR":
                console.error("Gamedis AD_ERROR fired"), Dk();
                break;
              case "AD_IS_ALREADY_RUNNING":
                console.error("Gamedis AD_IS_ALREADY_RUNNING fired"), Dk();
                break;
              case "DISPLAYAD_ERROR":
                console.error("Gamedis DISPLAYAD_ERROR fired"), console.error(ik)
            }
          }
        }, await (0, fk.d)("https://html5.api.gamedistribution.com/main.min.js", {
          id: "gamedistribution-jssdk"
        }), new Sk((ek => {
          kk = ek
        }))
      }
      playVideoAd(kk, ek) {
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