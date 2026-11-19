export const id = 144;
export const ids = [144];
export const modules = {
  7547: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      GameDistributionSdkAdaptor: () => IY
    });
    var FY = DY(1318),
      AY = DY(1204);
    class IY extends FY.c {
      constructor(YY) {
        super(), this.setOnEndCb = YY, this.name = "gamedistribution"
      }
      static async setup() {
        let YY;
        let rY;
        return window.GD_OPTIONS = {
          gameId: "b35b336d21654aa5a378480d13ed7225",
          onEvent: DY => {
            const FY = () => {
              rY && (window.adCompleteSoResume(), rY = !1), YY && (YY(), YY = null)
            };
            switch (DY.name) {
              case "SDK_GAME_START":
                console.log("Gamedis SDK_GAME_START"), rY = !1, YY ? (YY(), YY = null, window.adCompleteSoResume()) : console.error("onEndCb is not defined during SDK_GAME_START for gamedis sdk. Probably means error happened before.");
                break;
              case "SDK_GAME_PAUSE":
                console.log("Gamedis SDK_GAME_PAUSE"), window.adStartSoPause(null, {
                  preventMovement: !0
                }), rY = !0;
                break;
              case "SDK_ERROR":
                console.error("Gamedis SDK_ERROR fired"), FY();
                break;
              case "SDK_GDPR_TRACKING":
              case "SDK_GDPR_TARGETING":
              default:
                break;
              case "AD_ERROR":
                console.error("Gamedis AD_ERROR fired"), FY();
                break;
              case "AD_IS_ALREADY_RUNNING":
                console.error("Gamedis AD_IS_ALREADY_RUNNING fired"), FY();
                break;
              case "DISPLAYAD_ERROR":
                console.error("Gamedis DISPLAYAD_ERROR fired"), console.error(DY)
            }
          }
        }, await (0, AY.d)("https://html5.api.gamedistribution.com/main.min.js", {
          id: "gamedistribution-jssdk"
        }), new IY((rY => {
          YY = rY
        }))
      }
      playVideoAd(YY, rY) {
        this.setOnEndCb(YY), console.log("Requesting gamedis preroll"), window.gdsdk.showAd()
      }
      renderBanner(YY) {
        console.log("Getting new gamedis banners"), void 0 !== window.gdsdk.AdType.Display ? (console.log("requesting gamedis banner into", document.getElementById(YY.divId)), console.log("Params to window.gdsdk.showAd", window.gdsdk.AdType.Display, YY.divId), window.gdsdk.showAd(window.gdsdk.AdType.Display, {
          containerId: YY.divId
        }).then((() => console.info("showAd(window.gdsdk.AdType.Display) resolved."))).catch((YY => console.info(YY)))) : console.error("window.gdsdk.AdType.Display is undefined")
      }
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);