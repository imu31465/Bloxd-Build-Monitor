export const id = 162;
export const ids = [162];
export const modules = {
  7282: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      GameDistributionSdkAdaptor: () => UV
    });
    var JV = xV(1389),
      YV = xV(1213);
    class UV extends JV.b {
      constructor(VV) {
        super(), this.setOnEndCb = VV, this.name = "gamedistribution"
      }
      static async setup() {
        let VV;
        let eV;
        return window.GD_OPTIONS = {
          gameId: "b35b336d21654aa5a378480d13ed7225",
          onEvent: xV => {
            const JV = () => {
              eV && (window.adCompleteSoResume(), eV = !1), VV && (VV(), VV = null)
            };
            switch (xV.name) {
              case "SDK_GAME_START":
                console.log("Gamedis SDK_GAME_START"), eV = !1, VV ? (VV(), VV = null, window.adCompleteSoResume()) : console.error("onEndCb is not defined during SDK_GAME_START for gamedis sdk. Probably means error happened before.");
                break;
              case "SDK_GAME_PAUSE":
                console.log("Gamedis SDK_GAME_PAUSE"), window.adStartSoPause(null, {
                  preventMovement: !0
                }), eV = !0;
                break;
              case "SDK_ERROR":
                console.error("Gamedis SDK_ERROR fired"), JV();
                break;
              case "SDK_GDPR_TRACKING":
              case "SDK_GDPR_TARGETING":
              default:
                break;
              case "AD_ERROR":
                console.error("Gamedis AD_ERROR fired"), JV();
                break;
              case "AD_IS_ALREADY_RUNNING":
                console.error("Gamedis AD_IS_ALREADY_RUNNING fired"), JV();
                break;
              case "DISPLAYAD_ERROR":
                console.error("Gamedis DISPLAYAD_ERROR fired"), console.error(xV)
            }
          }
        }, await (0, YV.d)("https://html5.api.gamedistribution.com/main.min.js", {
          id: "gamedistribution-jssdk"
        }), new UV((eV => {
          VV = eV
        }))
      }
      playVideoAd(VV, eV) {
        this.setOnEndCb(VV), console.log("Requesting gamedis preroll"), window.gdsdk.showAd()
      }
      renderBanner(VV) {
        console.log("Getting new gamedis banners"), void 0 !== window.gdsdk.AdType.Display ? (console.log("requesting gamedis banner into", document.getElementById(VV.divId)), console.log("Params to window.gdsdk.showAd", window.gdsdk.AdType.Display, VV.divId), window.gdsdk.showAd(window.gdsdk.AdType.Display, {
          containerId: VV.divId
        }).then((() => console.info("showAd(window.gdsdk.AdType.Display) resolved."))).catch((VV => console.info(VV)))) : console.error("window.gdsdk.AdType.Display is undefined")
      }
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);