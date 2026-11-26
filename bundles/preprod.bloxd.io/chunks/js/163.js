export const id = 163;
export const ids = [163];
export const modules = {
  7271: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      GameDistributionSdkAdaptor: () => SH
    });
    var AH = LH(1289),
      rH = LH(1110);
    class SH extends AH.b {
      constructor(HH) {
        super(), this.setOnEndCb = HH, this.name = "gamedistribution"
      }
      static async setup() {
        let HH;
        let BH;
        return window.GD_OPTIONS = {
          gameId: "b35b336d21654aa5a378480d13ed7225",
          onEvent: LH => {
            const AH = () => {
              BH && (window.adCompleteSoResume(), BH = !1), HH && (HH(), HH = null)
            };
            switch (LH.name) {
              case "SDK_GAME_START":
                console.log("Gamedis SDK_GAME_START"), BH = !1, HH ? (HH(), HH = null, window.adCompleteSoResume()) : console.error("onEndCb is not defined during SDK_GAME_START for gamedis sdk. Probably means error happened before.");
                break;
              case "SDK_GAME_PAUSE":
                console.log("Gamedis SDK_GAME_PAUSE"), window.adStartSoPause(null, {
                  preventMovement: !0
                }), BH = !0;
                break;
              case "SDK_ERROR":
                console.error("Gamedis SDK_ERROR fired"), AH();
                break;
              case "SDK_GDPR_TRACKING":
              case "SDK_GDPR_TARGETING":
              default:
                break;
              case "AD_ERROR":
                console.error("Gamedis AD_ERROR fired"), AH();
                break;
              case "AD_IS_ALREADY_RUNNING":
                console.error("Gamedis AD_IS_ALREADY_RUNNING fired"), AH();
                break;
              case "DISPLAYAD_ERROR":
                console.error("Gamedis DISPLAYAD_ERROR fired"), console.error(LH)
            }
          }
        }, await (0, rH.e)("https://html5.api.gamedistribution.com/main.min.js", {
          id: "gamedistribution-jssdk"
        }), new SH((BH => {
          HH = BH
        }))
      }
      playVideoAd(HH, BH) {
        this.setOnEndCb(HH), console.log("Requesting gamedis preroll"), window.gdsdk.showAd()
      }
      willRequestBanner() {
        return void 0 !== window.gdsdk.AdType.Display
      }
      renderBanner(HH) {
        console.log("Getting new gamedis banners"), this.willRequestBanner() ? (console.log("requesting gamedis banner into", document.getElementById(HH.divId)), console.log("Params to window.gdsdk.showAd", window.gdsdk.AdType.Display, HH.divId), window.gdsdk.showAd(window.gdsdk.AdType.Display, {
          containerId: HH.divId
        }).then((() => console.info("showAd(window.gdsdk.AdType.Display) resolved."))).catch((HH => console.info(HH)))) : console.error("window.gdsdk.AdType.Display is undefined")
      }
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);