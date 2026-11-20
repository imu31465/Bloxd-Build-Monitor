export const id = 144;
export const ids = [144];
export const modules = {
  8014: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      GameDistributionSdkAdaptor: () => Oq
    });
    var Yq = gq(1304),
      lq = gq(1171);
    class Oq extends Yq.e {
      constructor(qq) {
        super(), this.setOnEndCb = qq, this.name = "gamedistribution"
      }
      static async setup() {
        let qq;
        let Eq;
        return window.GD_OPTIONS = {
          gameId: "b35b336d21654aa5a378480d13ed7225",
          onEvent: gq => {
            const Yq = () => {
              Eq && (window.adCompleteSoResume(), Eq = !1), qq && (qq(), qq = null)
            };
            switch (gq.name) {
              case "SDK_GAME_START":
                console.log("Gamedis SDK_GAME_START"), Eq = !1, qq ? (qq(), qq = null, window.adCompleteSoResume()) : console.error("onEndCb is not defined during SDK_GAME_START for gamedis sdk. Probably means error happened before.");
                break;
              case "SDK_GAME_PAUSE":
                console.log("Gamedis SDK_GAME_PAUSE"), window.adStartSoPause(null, {
                  preventMovement: !0
                }), Eq = !0;
                break;
              case "SDK_ERROR":
                console.error("Gamedis SDK_ERROR fired"), Yq();
                break;
              case "SDK_GDPR_TRACKING":
              case "SDK_GDPR_TARGETING":
              default:
                break;
              case "AD_ERROR":
                console.error("Gamedis AD_ERROR fired"), Yq();
                break;
              case "AD_IS_ALREADY_RUNNING":
                console.error("Gamedis AD_IS_ALREADY_RUNNING fired"), Yq();
                break;
              case "DISPLAYAD_ERROR":
                console.error("Gamedis DISPLAYAD_ERROR fired"), console.error(gq)
            }
          }
        }, await (0, lq.b)("https://html5.api.gamedistribution.com/main.min.js", {
          id: "gamedistribution-jssdk"
        }), new Oq((Eq => {
          qq = Eq
        }))
      }
      playVideoAd(qq, Eq) {
        this.setOnEndCb(qq), console.log("Requesting gamedis preroll"), window.gdsdk.showAd()
      }
      renderBanner(qq) {
        console.log("Getting new gamedis banners"), void 0 !== window.gdsdk.AdType.Display ? (console.log("requesting gamedis banner into", document.getElementById(qq.divId)), console.log("Params to window.gdsdk.showAd", window.gdsdk.AdType.Display, qq.divId), window.gdsdk.showAd(window.gdsdk.AdType.Display, {
          containerId: qq.divId
        }).then((() => console.info("showAd(window.gdsdk.AdType.Display) resolved."))).catch((qq => console.info(qq)))) : console.error("window.gdsdk.AdType.Display is undefined")
      }
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);