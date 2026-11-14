export const id = 132;
export const ids = [132];
export const modules = {
  7033: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      GameDistributionSdkAdaptor: () => zR
    });
    var wW = MW(1144),
      CW = MW(1020);
    class zR extends wW.d {
      constructor(WW) {
        super(), this.setOnEndCb = WW, this.name = "gamedistribution"
      }
      static async setup() {
        let WW;
        let RW;
        return window.GD_OPTIONS = {
          gameId: "b35b336d21654aa5a378480d13ed7225",
          onEvent: MW => {
            const wW = () => {
              RW && (window.adCompleteSoResume(), RW = !1), WW && (WW(), WW = null)
            };
            switch (MW.name) {
              case "SDK_GAME_START":
                console.log("Gamedis SDK_GAME_START"), RW = !1, WW ? (WW(), WW = null, window.adCompleteSoResume()) : console.error("onEndCb is not defined during SDK_GAME_START for gamedis sdk. Probably means error happened before.");
                break;
              case "SDK_GAME_PAUSE":
                console.log("Gamedis SDK_GAME_PAUSE"), window.adStartSoPause(null, {
                  preventMovement: !0
                }), RW = !0;
                break;
              case "SDK_ERROR":
                console.error("Gamedis SDK_ERROR fired"), wW();
                break;
              case "SDK_GDPR_TRACKING":
              case "SDK_GDPR_TARGETING":
              default:
                break;
              case "AD_ERROR":
                console.error("Gamedis AD_ERROR fired"), wW();
                break;
              case "AD_IS_ALREADY_RUNNING":
                console.error("Gamedis AD_IS_ALREADY_RUNNING fired"), wW();
                break;
              case "DISPLAYAD_ERROR":
                console.error("Gamedis DISPLAYAD_ERROR fired"), console.error(MW)
            }
          }
        }, await (0, CW.d)("https://html5.api.gamedistribution.com/main.min.js", {
          id: "gamedistribution-jssdk"
        }), new zR((RW => {
          WW = RW
        }))
      }
      playVideoAd(WW, RW) {
        this.setOnEndCb(WW), console.log("Requesting gamedis preroll"), window.gdsdk.showAd()
      }
      renderBanner(WW) {
        console.log("Getting new gamedis banners"), void 0 !== window.gdsdk.AdType.Display ? (console.log("requesting gamedis banner into", document.getElementById(WW.divId)), console.log("Params to window.gdsdk.showAd", window.gdsdk.AdType.Display, WW.divId), window.gdsdk.showAd(window.gdsdk.AdType.Display, {
          containerId: WW.divId
        }).then((() => console.info("showAd(window.gdsdk.AdType.Display) resolved."))).catch((WW => console.info(WW)))) : console.error("window.gdsdk.AdType.Display is undefined")
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);