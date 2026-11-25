export const id = 153;
export const ids = [153];
export const modules = {
  8482: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      GameDistributionSdkAdaptor: () => TQ
    });
    var wQ = XQ(1368),
      qQ = XQ(1216);
    class TQ extends wQ.c {
      constructor(QQ) {
        super(), this.setOnEndCb = QQ, this.name = "gamedistribution"
      }
      static async setup() {
        let QQ;
        let WQ;
        return window.GD_OPTIONS = {
          gameId: "b35b336d21654aa5a378480d13ed7225",
          onEvent: XQ => {
            const wQ = () => {
              WQ && (window.adCompleteSoResume(), WQ = !1), QQ && (QQ(), QQ = null)
            };
            switch (XQ.name) {
              case "SDK_GAME_START":
                console.log("Gamedis SDK_GAME_START"), WQ = !1, QQ ? (QQ(), QQ = null, window.adCompleteSoResume()) : console.error("onEndCb is not defined during SDK_GAME_START for gamedis sdk. Probably means error happened before.");
                break;
              case "SDK_GAME_PAUSE":
                console.log("Gamedis SDK_GAME_PAUSE"), window.adStartSoPause(null, {
                  preventMovement: !0
                }), WQ = !0;
                break;
              case "SDK_ERROR":
                console.error("Gamedis SDK_ERROR fired"), wQ();
                break;
              case "SDK_GDPR_TRACKING":
              case "SDK_GDPR_TARGETING":
              default:
                break;
              case "AD_ERROR":
                console.error("Gamedis AD_ERROR fired"), wQ();
                break;
              case "AD_IS_ALREADY_RUNNING":
                console.error("Gamedis AD_IS_ALREADY_RUNNING fired"), wQ();
                break;
              case "DISPLAYAD_ERROR":
                console.error("Gamedis DISPLAYAD_ERROR fired"), console.error(XQ)
            }
          }
        }, await (0, qQ.d)("https://html5.api.gamedistribution.com/main.min.js", {
          id: "gamedistribution-jssdk"
        }), new TQ((WQ => {
          QQ = WQ
        }))
      }
      playVideoAd(QQ, WQ) {
        this.setOnEndCb(QQ), console.log("Requesting gamedis preroll"), window.gdsdk.showAd()
      }
      renderBanner(QQ) {
        console.log("Getting new gamedis banners"), void 0 !== window.gdsdk.AdType.Display ? (console.log("requesting gamedis banner into", document.getElementById(QQ.divId)), console.log("Params to window.gdsdk.showAd", window.gdsdk.AdType.Display, QQ.divId), window.gdsdk.showAd(window.gdsdk.AdType.Display, {
          containerId: QQ.divId
        }).then((() => console.info("showAd(window.gdsdk.AdType.Display) resolved."))).catch((QQ => console.info(QQ)))) : console.error("window.gdsdk.AdType.Display is undefined")
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);