export const id = 143;
export const ids = [143];
export const modules = {
  7799: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      GameDistributionSdkAdaptor: () => iD
    });
    var ID = cD(1308),
      pD = cD(1181);
    class iD extends ID.e {
      constructor(DD) {
        super(), this.setOnEndCb = DD, this.name = "gamedistribution"
      }
      static async setup() {
        let DD;
        let CD;
        return window.GD_OPTIONS = {
          gameId: "b35b336d21654aa5a378480d13ed7225",
          onEvent: cD => {
            const ID = () => {
              CD && (window.adCompleteSoResume(), CD = !1), DD && (DD(), DD = null)
            };
            switch (cD.name) {
              case "SDK_GAME_START":
                console.log("Gamedis SDK_GAME_START"), CD = !1, DD ? (DD(), DD = null, window.adCompleteSoResume()) : console.error("onEndCb is not defined during SDK_GAME_START for gamedis sdk. Probably means error happened before.");
                break;
              case "SDK_GAME_PAUSE":
                console.log("Gamedis SDK_GAME_PAUSE"), window.adStartSoPause(null, {
                  preventMovement: !0
                }), CD = !0;
                break;
              case "SDK_ERROR":
                console.error("Gamedis SDK_ERROR fired"), ID();
                break;
              case "SDK_GDPR_TRACKING":
              case "SDK_GDPR_TARGETING":
              default:
                break;
              case "AD_ERROR":
                console.error("Gamedis AD_ERROR fired"), ID();
                break;
              case "AD_IS_ALREADY_RUNNING":
                console.error("Gamedis AD_IS_ALREADY_RUNNING fired"), ID();
                break;
              case "DISPLAYAD_ERROR":
                console.error("Gamedis DISPLAYAD_ERROR fired"), console.error(cD)
            }
          }
        }, await (0, pD.e)("https://html5.api.gamedistribution.com/main.min.js", {
          id: "gamedistribution-jssdk"
        }), new iD((CD => {
          DD = CD
        }))
      }
      playVideoAd(DD, CD) {
        this.setOnEndCb(DD), console.log("Requesting gamedis preroll"), window.gdsdk.showAd()
      }
      renderBanner(DD) {
        console.log("Getting new gamedis banners"), void 0 !== window.gdsdk.AdType.Display ? (console.log("requesting gamedis banner into", document.getElementById(DD.divId)), console.log("Params to window.gdsdk.showAd", window.gdsdk.AdType.Display, DD.divId), window.gdsdk.showAd(window.gdsdk.AdType.Display, {
          containerId: DD.divId
        }).then((() => console.info("showAd(window.gdsdk.AdType.Display) resolved."))).catch((DD => console.info(DD)))) : console.error("window.gdsdk.AdType.Display is undefined")
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);