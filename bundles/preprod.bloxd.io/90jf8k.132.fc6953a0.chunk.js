export const id = 132;
export const ids = [132];
export const modules = {
  7069: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      GameDistributionSdkAdaptor: () => uF
    });
    var CF = SF(1171),
      AF = SF(1036);
    class uF extends CF.b {
      constructor(FF) {
        super(), this.setOnEndCb = FF, this.name = "gamedistribution"
      }
      static async setup() {
        let FF;
        let WF;
        return window.GD_OPTIONS = {
          gameId: "b35b336d21654aa5a378480d13ed7225",
          onEvent: SF => {
            const CF = () => {
              WF && (window.adCompleteSoResume(), WF = !1), FF && (FF(), FF = null)
            };
            switch (SF.name) {
              case "SDK_GAME_START":
                console.log("Gamedis SDK_GAME_START"), WF = !1, FF ? (FF(), FF = null, window.adCompleteSoResume()) : console.error("onEndCb is not defined during SDK_GAME_START for gamedis sdk. Probably means error happened before.");
                break;
              case "SDK_GAME_PAUSE":
                console.log("Gamedis SDK_GAME_PAUSE"), window.adStartSoPause(null, {
                  preventMovement: !0
                }), WF = !0;
                break;
              case "SDK_ERROR":
                console.error("Gamedis SDK_ERROR fired"), CF();
                break;
              case "SDK_GDPR_TRACKING":
              case "SDK_GDPR_TARGETING":
              default:
                break;
              case "AD_ERROR":
                console.error("Gamedis AD_ERROR fired"), CF();
                break;
              case "AD_IS_ALREADY_RUNNING":
                console.error("Gamedis AD_IS_ALREADY_RUNNING fired"), CF();
                break;
              case "DISPLAYAD_ERROR":
                console.error("Gamedis DISPLAYAD_ERROR fired"), console.error(SF)
            }
          }
        }, await (0, AF.e)("https://html5.api.gamedistribution.com/main.min.js", {
          id: "gamedistribution-jssdk"
        }), new uF((WF => {
          FF = WF
        }))
      }
      playVideoAd(FF, WF) {
        this.setOnEndCb(FF), console.log("Requesting gamedis preroll"), window.gdsdk.showAd()
      }
      renderBanner(FF) {
        console.log("Getting new gamedis banners"), void 0 !== window.gdsdk.AdType.Display ? (console.log("requesting gamedis banner into", document.getElementById(FF.divId)), console.log("Params to window.gdsdk.showAd", window.gdsdk.AdType.Display, FF.divId), window.gdsdk.showAd(window.gdsdk.AdType.Display, {
          containerId: FF.divId
        }).then((() => console.info("showAd(window.gdsdk.AdType.Display) resolved."))).catch((FF => console.info(FF)))) : console.error("window.gdsdk.AdType.Display is undefined")
      }
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);