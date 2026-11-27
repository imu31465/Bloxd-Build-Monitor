export const id = 170;
export const ids = [170];
export const modules = {
  7869: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      GameDistributionSdkAdaptor: () => uR
    });
    var yR = GR(1447),
      tR = GR(1258);
    class uR extends yR.d {
      constructor(RR) {
        super(), this.setOnEndCb = RR, this.name = "gamedistribution"
      }
      static async setup() {
        let RR;
        let JR;
        return window.GD_OPTIONS = {
          gameId: "b35b336d21654aa5a378480d13ed7225",
          onEvent: GR => {
            const yR = () => {
              JR && (window.adCompleteSoResume(), JR = !1), RR && (RR(), RR = null)
            };
            switch (GR.name) {
              case "SDK_GAME_START":
                console.log("Gamedis SDK_GAME_START"), JR = !1, RR ? (RR(), RR = null, window.adCompleteSoResume()) : console.error("onEndCb is not defined during SDK_GAME_START for gamedis sdk. Probably means error happened before.");
                break;
              case "SDK_GAME_PAUSE":
                console.log("Gamedis SDK_GAME_PAUSE"), window.adStartSoPause(null, {
                  preventMovement: !0
                }), JR = !0;
                break;
              case "SDK_ERROR":
                console.error("Gamedis SDK_ERROR fired"), yR();
                break;
              case "SDK_GDPR_TRACKING":
              case "SDK_GDPR_TARGETING":
              default:
                break;
              case "AD_ERROR":
                console.error("Gamedis AD_ERROR fired"), yR();
                break;
              case "AD_IS_ALREADY_RUNNING":
                console.error("Gamedis AD_IS_ALREADY_RUNNING fired"), yR();
                break;
              case "DISPLAYAD_ERROR":
                console.error("Gamedis DISPLAYAD_ERROR fired"), console.error(GR)
            }
          }
        }, await (0, tR.c)("https://html5.api.gamedistribution.com/main.min.js", {
          id: "gamedistribution-jssdk"
        }), new uR((JR => {
          RR = JR
        }))
      }
      playVideoAd(RR, JR) {
        this.setOnEndCb(RR), console.log("Requesting gamedis preroll"), window.gdsdk.showAd()
      }
      willRequestBanner() {
        return void 0 !== window.gdsdk.AdType.Display
      }
      renderBanner(RR) {
        console.log("Getting new gamedis banners"), this.willRequestBanner() ? (console.log("requesting gamedis banner into", document.getElementById(RR.divId)), console.log("Params to window.gdsdk.showAd", window.gdsdk.AdType.Display, RR.divId), window.gdsdk.showAd(window.gdsdk.AdType.Display, {
          containerId: RR.divId
        }).then((() => console.info("showAd(window.gdsdk.AdType.Display) resolved."))).catch((RR => console.info(RR)))) : console.error("window.gdsdk.AdType.Display is undefined")
      }
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);