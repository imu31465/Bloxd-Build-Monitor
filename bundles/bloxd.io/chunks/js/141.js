export const id = 141;
export const ids = [141];
export const modules = {
  7476: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      AditudeSdkAdaptor: () => lB
    });
    var VB = dB(1204),
      yB = dB(1068);
    const pB = {
      video: "pb-slot-interstitial-video",
      rewarded: "pb-slot-rewarded-video"
    };
    class lB extends VB.e {
      constructor() {
        super(), this.name = "aditude"
      }
      static async setup() {
        return window.tude = window.tude || {
          cmd: []
        }, await (0, yB.c)("https://edge.aditude.io/site/bloxd-Jf9xJheMSn/bloxd-longform/bloxd.io/prod/load.js"), new lB
      }
      playVideoAd(BB, TB) {
        this.playVideoOrRewarded("video", BB, BB)
      }
      playRewarded(BB, TB) {
        this.playVideoOrRewarded("rewarded", BB, TB)
      }
      renderBanner(BB) {
        const TB = this.getBaseDivId(BB.adId, BB.width, BB.height);
        window.tude.cmd.push((function() {
          window.tude.refreshAdsViaDivMappings([{
            divId: BB.divId,
            baseDivId: TB
          }])
        }))
      }
      getBaseDivId(BB, TB, dB) {
        return `pb-slot-bloxdio-${TB}-${dB}${BB>1?`-${BB}`:""}`
      }
      playVideoOrRewarded(BB, TB, dB) {
        var VB;
        let yB = !1;
        const lB = () => {
            document.getElementById("GenericVideoWrapper").style.display = "none", yB = !0
          },
          JB = (BB, TB) => {
            console.error(`AD: Error while playing Aditude video ad: ${BB}:`, TB), lB(), dB()
          };
        if (console.log(`AD: Requesting Aditude ${BB} ad`), void 0 === (null === (VB = window.tude) || void 0 === VB ? void 0 : VB.requestInstreamPlayer)) return console.log(`AD: Aditude ad lib not loaded, no ${BB} ad playing`), void JB("Aditude ad lib not loaded", null);
        document.getElementById("GenericVideoWrapper").style.display = "flex", document.getElementById("GenericVideoInner").classList.add("AditudeVideo"), window.tude.cmd.push((function() {
          console.log("AD: Inside Aditude window.tude.cmd.push");
          try {
            window.tude.requestInstreamPlayer({
              code: pB[BB],
              divId: "GenericVideoInner",
              mode: "adOnly"
            }).then((dB => {
              console.log("AD: Inside Aditude window.tude.requestInstreamPlayer.then"), dB.on("playerClose", ((dB, VB) => {
                console.log("AD: Inside Aditude player.on playerClose"), console.log(`AD: Successfully finished Aditude ${BB} ad`), lB(), TB()
              })).on("adPrefetchError", ((BB, TB) => {
                console.log("AD: Inside Aditude player.on adPrefetchError"), JB("Prefetch error", TB)
              })).on("adError", ((BB, TB) => {
                console.log("AD: Inside Aditude player.on adError"), JB("Generic error", TB)
              }));
              const VB = BB => {
                setTimeout((() => {
                  yB || dB.setVideoVolume(.5)
                }), BB)
              };
              VB(500), VB(1e3), VB(1500), VB(2e3)
            })).catch((BB => {
              JB("Error occurred while requesting instream player", BB)
            }))
          } catch (dB) {
            JB("Failed to request instream player", dB)
          }
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);