export const id = 166;
export const ids = [166];
export const modules = {
  7348: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      AditudeSdkAdaptor: () => AU
    });
    var cU = zU(1351),
      yU = zU(1184);
    const QU = {
      video: "pb-slot-interstitial-video",
      rewarded: "pb-slot-rewarded-video"
    };
    class AU extends cU.d {
      constructor() {
        super(), this.name = "aditude"
      }
      static async setup() {
        return window.tude = window.tude || {
          cmd: []
        }, await (0, yU.c)("https://edge.aditude.io/site/bloxd-Jf9xJheMSn/bloxd-longform/bloxd.io/prod/load.js"), new AU
      }
      playVideoAd(UU, XU) {
        this.playVideoOrRewarded("video", UU, UU)
      }
      playRewarded(UU, XU) {
        this.playVideoOrRewarded("rewarded", UU, XU)
      }
      renderBanner(UU) {
        const XU = this.getBaseDivId(UU.adId, UU.width, UU.height);
        window.tude.cmd.push((function() {
          window.tude.refreshAdsViaDivMappings([{
            divId: UU.divId,
            baseDivId: XU
          }])
        }))
      }
      getBaseDivId(UU, XU, zU) {
        return `pb-slot-bloxdio-${XU}-${zU}${UU>1?`-${UU}`:""}`
      }
      playVideoOrRewarded(UU, XU, zU) {
        var cU;
        let yU = !1;
        const AU = () => {
            document.getElementById("GenericVideoWrapper").style.display = "none", yU = !0
          },
          FU = (UU, XU) => {
            console.error(`AD: Error while playing Aditude video ad: ${UU}:`, XU), AU(), zU()
          };
        if (console.log(`AD: Requesting Aditude ${UU} ad`), void 0 === (null === (cU = window.tude) || void 0 === cU ? void 0 : cU.requestInstreamPlayer)) return console.log(`AD: Aditude ad lib not loaded, no ${UU} ad playing`), void FU("Aditude ad lib not loaded", null);
        document.getElementById("GenericVideoWrapper").style.display = "flex", document.getElementById("GenericVideoInner").classList.add("AditudeVideo"), window.tude.cmd.push((function() {
          console.log("AD: Inside Aditude window.tude.cmd.push");
          try {
            window.tude.requestInstreamPlayer({
              code: QU[UU],
              divId: "GenericVideoInner",
              mode: "adOnly"
            }).then((zU => {
              console.log("AD: Inside Aditude window.tude.requestInstreamPlayer.then"), zU.on("playerClose", ((zU, cU) => {
                console.log("AD: Inside Aditude player.on playerClose"), console.log(`AD: Successfully finished Aditude ${UU} ad`), AU(), XU()
              })).on("adPrefetchError", ((UU, XU) => {
                console.log("AD: Inside Aditude player.on adPrefetchError"), FU("Prefetch error", XU)
              })).on("adError", ((UU, XU) => {
                console.log("AD: Inside Aditude player.on adError"), FU("Generic error", XU)
              }));
              const cU = UU => {
                setTimeout((() => {
                  yU || zU.setVideoVolume(.5)
                }), UU)
              };
              cU(500), cU(1e3), cU(1500), cU(2e3)
            })).catch((UU => {
              FU("Error occurred while requesting instream player", UU)
            }))
          } catch (zU) {
            FU("Failed to request instream player", zU)
          }
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);