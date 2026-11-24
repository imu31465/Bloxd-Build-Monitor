export const id = 149;
export const ids = [149];
export const modules = {
  8273: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      GameDistributionSdkAdaptor: () => XS
    });
    var tS = gS(1397),
      bS = gS(1267);
    class XS extends tS.c {
      constructor(SS) {
        super(), this.setOnEndCb = SS, this.name = "gamedistribution"
      }
      static async setup() {
        let SS;
        let HS;
        return window.GD_OPTIONS = {
          gameId: "b35b336d21654aa5a378480d13ed7225",
          onEvent: gS => {
            const tS = () => {
              HS && (window.adCompleteSoResume(), HS = !1), SS && (SS(), SS = null)
            };
            switch (gS.name) {
              case "SDK_GAME_START":
                console.log("Gamedis SDK_GAME_START"), HS = !1, SS ? (SS(), SS = null, window.adCompleteSoResume()) : console.error("onEndCb is not defined during SDK_GAME_START for gamedis sdk. Probably means error happened before.");
                break;
              case "SDK_GAME_PAUSE":
                console.log("Gamedis SDK_GAME_PAUSE"), window.adStartSoPause(null, {
                  preventMovement: !0
                }), HS = !0;
                break;
              case "SDK_ERROR":
                console.error("Gamedis SDK_ERROR fired"), tS();
                break;
              case "SDK_GDPR_TRACKING":
              case "SDK_GDPR_TARGETING":
              default:
                break;
              case "AD_ERROR":
                console.error("Gamedis AD_ERROR fired"), tS();
                break;
              case "AD_IS_ALREADY_RUNNING":
                console.error("Gamedis AD_IS_ALREADY_RUNNING fired"), tS();
                break;
              case "DISPLAYAD_ERROR":
                console.error("Gamedis DISPLAYAD_ERROR fired"), console.error(gS)
            }
          }
        }, await (0, bS.c)("https://html5.api.gamedistribution.com/main.min.js", {
          id: "gamedistribution-jssdk"
        }), new XS((HS => {
          SS = HS
        }))
      }
      playVideoAd(SS, HS) {
        this.setOnEndCb(SS), console.log("Requesting gamedis preroll"), window.gdsdk.showAd()
      }
      renderBanner(SS) {
        console.log("Getting new gamedis banners"), void 0 !== window.gdsdk.AdType.Display ? (console.log("requesting gamedis banner into", document.getElementById(SS.divId)), console.log("Params to window.gdsdk.showAd", window.gdsdk.AdType.Display, SS.divId), window.gdsdk.showAd(window.gdsdk.AdType.Display, {
          containerId: SS.divId
        }).then((() => console.info("showAd(window.gdsdk.AdType.Display) resolved."))).catch((SS => console.info(SS)))) : console.error("window.gdsdk.AdType.Display is undefined")
      }
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);