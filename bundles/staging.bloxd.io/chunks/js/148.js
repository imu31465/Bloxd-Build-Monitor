export const id = 148;
export const ids = [148];
export const modules = {
  7788: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      AditudeSdkAdaptor: () => PU
    });
    var tU = gU(1312),
      pU = gU(1174);
    const EU = {
      video: "pb-slot-interstitial-video",
      rewarded: "pb-slot-rewarded-video"
    };
    class PU extends tU.b {
      constructor() {
        super(), this.name = "aditude"
      }
      static async setup() {
        return window.tude = window.tude || {
          cmd: []
        }, await (0, pU.e)("https://edge.aditude.io/site/bloxd-Jf9xJheMSn/bloxd-longform/bloxd.io/prod/load.js"), new PU
      }
      playVideoAd(UU, RU) {
        this.playVideoOrRewarded("video", UU, UU)
      }
      playRewarded(UU, RU) {
        this.playVideoOrRewarded("rewarded", UU, RU)
      }
      renderBanner(UU) {
        const RU = this.getBaseDivId(UU.adId, UU.width, UU.height);
        window.tude.cmd.push((function() {
          window.tude.refreshAdsViaDivMappings([{
            divId: UU.divId,
            baseDivId: RU
          }])
        }))
      }
      getBaseDivId(UU, RU, gU) {
        return `pb-slot-bloxdio-${RU}-${gU}${UU>1?`-${UU}`:""}`
      }
      playVideoOrRewarded(UU, RU, gU) {
        var tU;
        let pU = !1;
        const PU = () => {
            document.getElementById("GenericVideoWrapper").style.display = "none", pU = !0
          },
          TU = (UU, RU) => {
            console.error(`AD: Error while playing Aditude video ad: ${UU}:`, RU), PU(), gU()
          };
        if (console.log(`AD: Requesting Aditude ${UU} ad`), void 0 === (null === (tU = window.tude) || void 0 === tU ? void 0 : tU.requestInstreamPlayer)) return console.log(`AD: Aditude ad lib not loaded, no ${UU} ad playing`), void TU("Aditude ad lib not loaded", null);
        document.getElementById("GenericVideoWrapper").style.display = "flex", document.getElementById("GenericVideoInner").classList.add("AditudeVideo"), window.tude.cmd.push((function() {
          console.log("AD: Inside Aditude window.tude.cmd.push");
          try {
            window.tude.requestInstreamPlayer({
              code: EU[UU],
              divId: "GenericVideoInner",
              mode: "adOnly"
            }).then((gU => {
              console.log("AD: Inside Aditude window.tude.requestInstreamPlayer.then"), gU.on("playerClose", ((gU, tU) => {
                console.log("AD: Inside Aditude player.on playerClose"), console.log(`AD: Successfully finished Aditude ${UU} ad`), PU(), RU()
              })).on("adPrefetchError", ((UU, RU) => {
                console.log("AD: Inside Aditude player.on adPrefetchError"), TU("Prefetch error", RU)
              })).on("adError", ((UU, RU) => {
                console.log("AD: Inside Aditude player.on adError"), TU("Generic error", RU)
              }));
              const tU = UU => {
                setTimeout((() => {
                  pU || gU.setVideoVolume(.5)
                }), UU)
              };
              tU(500), tU(1e3), tU(1500), tU(2e3)
            })).catch((UU => {
              TU("Error occurred while requesting instream player", UU)
            }))
          } catch (gU) {
            TU("Failed to request instream player", gU)
          }
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);