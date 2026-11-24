export const id = 157;
export const ids = [157];
export const modules = {
  8108: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      AditudeSdkAdaptor: () => IB
    });
    var QB = zB(1351),
      nB = zB(1230);
    const dB = {
      video: "pb-slot-interstitial-video",
      rewarded: "pb-slot-rewarded-video"
    };
    class IB extends QB.c {
      constructor() {
        super(), this.name = "aditude"
      }
      static async setup() {
        return window.tude = window.tude || {
          cmd: []
        }, await (0, nB.c)("https://edge.aditude.io/site/bloxd-Jf9xJheMSn/bloxd-longform/bloxd.io/prod/load.js"), new IB
      }
      playVideoAd(BB, jB) {
        this.playVideoOrRewarded("video", BB, BB)
      }
      playRewarded(BB, jB) {
        this.playVideoOrRewarded("rewarded", BB, jB)
      }
      renderBanner(BB) {
        const jB = this.getBaseDivId(BB.adId, BB.width, BB.height);
        window.tude.cmd.push((function() {
          window.tude.refreshAdsViaDivMappings([{
            divId: BB.divId,
            baseDivId: jB
          }])
        }))
      }
      getBaseDivId(BB, jB, zB) {
        return `pb-slot-bloxdio-${jB}-${zB}${BB>1?`-${BB}`:""}`
      }
      playVideoOrRewarded(BB, jB, zB) {
        var QB;
        let nB = !1;
        const IB = () => {
            document.getElementById("GenericVideoWrapper").style.display = "none", nB = !0
          },
          NB = (BB, jB) => {
            console.error(`AD: Error while playing Aditude video ad: ${BB}:`, jB), IB(), zB()
          };
        if (console.log(`AD: Requesting Aditude ${BB} ad`), void 0 === (null === (QB = window.tude) || void 0 === QB ? void 0 : QB.requestInstreamPlayer)) return console.log(`AD: Aditude ad lib not loaded, no ${BB} ad playing`), void NB("Aditude ad lib not loaded", null);
        document.getElementById("GenericVideoWrapper").style.display = "flex", document.getElementById("GenericVideoInner").classList.add("AditudeVideo"), window.tude.cmd.push((function() {
          console.log("AD: Inside Aditude window.tude.cmd.push");
          try {
            window.tude.requestInstreamPlayer({
              code: dB[BB],
              divId: "GenericVideoInner",
              mode: "adOnly"
            }).then((zB => {
              console.log("AD: Inside Aditude window.tude.requestInstreamPlayer.then"), zB.on("playerClose", ((zB, QB) => {
                console.log("AD: Inside Aditude player.on playerClose"), console.log(`AD: Successfully finished Aditude ${BB} ad`), IB(), jB()
              })).on("adPrefetchError", ((BB, jB) => {
                console.log("AD: Inside Aditude player.on adPrefetchError"), NB("Prefetch error", jB)
              })).on("adError", ((BB, jB) => {
                console.log("AD: Inside Aditude player.on adError"), NB("Generic error", jB)
              }));
              const QB = BB => {
                setTimeout((() => {
                  nB || zB.setVideoVolume(.5)
                }), BB)
              };
              QB(500), QB(1e3), QB(1500), QB(2e3)
            })).catch((BB => {
              NB("Error occurred while requesting instream player", BB)
            }))
          } catch (zB) {
            NB("Failed to request instream player", zB)
          }
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);