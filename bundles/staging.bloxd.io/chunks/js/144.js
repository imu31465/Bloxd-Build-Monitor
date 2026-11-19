export const id = 144;
export const ids = [144];
export const modules = {
  7553: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      GameDistributionSdkAdaptor: () => kT
    });
    var iT = IT(1286),
      zT = IT(1160);
    class kT extends iT.d {
      constructor(TT) {
        super(), this.setOnEndCb = TT, this.name = "gamedistribution"
      }
      static async setup() {
        let TT;
        let oT;
        return window.GD_OPTIONS = {
          gameId: "b35b336d21654aa5a378480d13ed7225",
          onEvent: IT => {
            const iT = () => {
              oT && (window.adCompleteSoResume(), oT = !1), TT && (TT(), TT = null)
            };
            switch (IT.name) {
              case "SDK_GAME_START":
                console.log("Gamedis SDK_GAME_START"), oT = !1, TT ? (TT(), TT = null, window.adCompleteSoResume()) : console.error("onEndCb is not defined during SDK_GAME_START for gamedis sdk. Probably means error happened before.");
                break;
              case "SDK_GAME_PAUSE":
                console.log("Gamedis SDK_GAME_PAUSE"), window.adStartSoPause(null, {
                  preventMovement: !0
                }), oT = !0;
                break;
              case "SDK_ERROR":
                console.error("Gamedis SDK_ERROR fired"), iT();
                break;
              case "SDK_GDPR_TRACKING":
              case "SDK_GDPR_TARGETING":
              default:
                break;
              case "AD_ERROR":
                console.error("Gamedis AD_ERROR fired"), iT();
                break;
              case "AD_IS_ALREADY_RUNNING":
                console.error("Gamedis AD_IS_ALREADY_RUNNING fired"), iT();
                break;
              case "DISPLAYAD_ERROR":
                console.error("Gamedis DISPLAYAD_ERROR fired"), console.error(IT)
            }
          }
        }, await (0, zT.b)("https://html5.api.gamedistribution.com/main.min.js", {
          id: "gamedistribution-jssdk"
        }), new kT((oT => {
          TT = oT
        }))
      }
      playVideoAd(TT, oT) {
        this.setOnEndCb(TT), console.log("Requesting gamedis preroll"), window.gdsdk.showAd()
      }
      renderBanner(TT) {
        console.log("Getting new gamedis banners"), void 0 !== window.gdsdk.AdType.Display ? (console.log("requesting gamedis banner into", document.getElementById(TT.divId)), console.log("Params to window.gdsdk.showAd", window.gdsdk.AdType.Display, TT.divId), window.gdsdk.showAd(window.gdsdk.AdType.Display, {
          containerId: TT.divId
        }).then((() => console.info("showAd(window.gdsdk.AdType.Display) resolved."))).catch((TT => console.info(TT)))) : console.error("window.gdsdk.AdType.Display is undefined")
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);