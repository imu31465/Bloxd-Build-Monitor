export const id = 151;
export const ids = [151];
export const modules = {
  8155: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      GameDistributionSdkAdaptor: () => LG
    });
    var wG = ZG(1280),
      SG = ZG(1143);
    class LG extends wG.e {
      constructor(GG) {
        super(), this.setOnEndCb = GG, this.name = "gamedistribution"
      }
      static async setup() {
        let GG;
        let bG;
        return window.GD_OPTIONS = {
          gameId: "b35b336d21654aa5a378480d13ed7225",
          onEvent: ZG => {
            const wG = () => {
              bG && (window.adCompleteSoResume(), bG = !1), GG && (GG(), GG = null)
            };
            switch (ZG.name) {
              case "SDK_GAME_START":
                console.log("Gamedis SDK_GAME_START"), bG = !1, GG ? (GG(), GG = null, window.adCompleteSoResume()) : console.error("onEndCb is not defined during SDK_GAME_START for gamedis sdk. Probably means error happened before.");
                break;
              case "SDK_GAME_PAUSE":
                console.log("Gamedis SDK_GAME_PAUSE"), window.adStartSoPause(null, {
                  preventMovement: !0
                }), bG = !0;
                break;
              case "SDK_ERROR":
                console.error("Gamedis SDK_ERROR fired"), wG();
                break;
              case "SDK_GDPR_TRACKING":
              case "SDK_GDPR_TARGETING":
              default:
                break;
              case "AD_ERROR":
                console.error("Gamedis AD_ERROR fired"), wG();
                break;
              case "AD_IS_ALREADY_RUNNING":
                console.error("Gamedis AD_IS_ALREADY_RUNNING fired"), wG();
                break;
              case "DISPLAYAD_ERROR":
                console.error("Gamedis DISPLAYAD_ERROR fired"), console.error(ZG)
            }
          }
        }, await (0, SG.b)("https://html5.api.gamedistribution.com/main.min.js", {
          id: "gamedistribution-jssdk"
        }), new LG((bG => {
          GG = bG
        }))
      }
      playVideoAd(GG, bG) {
        this.setOnEndCb(GG), console.log("Requesting gamedis preroll"), window.gdsdk.showAd()
      }
      renderBanner(GG) {
        console.log("Getting new gamedis banners"), void 0 !== window.gdsdk.AdType.Display ? (console.log("requesting gamedis banner into", document.getElementById(GG.divId)), console.log("Params to window.gdsdk.showAd", window.gdsdk.AdType.Display, GG.divId), window.gdsdk.showAd(window.gdsdk.AdType.Display, {
          containerId: GG.divId
        }).then((() => console.info("showAd(window.gdsdk.AdType.Display) resolved."))).catch((GG => console.info(GG)))) : console.error("window.gdsdk.AdType.Display is undefined")
      }
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);