export const id = 157;
export const ids = [157];
export const modules = {
  8267: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      AditudeSdkAdaptor: () => GB
    });
    var TB = ZB(1379),
      JB = ZB(1241);
    const oB = {
      video: "pb-slot-interstitial-video",
      rewarded: "pb-slot-rewarded-video"
    };
    class GB extends TB.d {
      constructor() {
        super(), this.name = "aditude"
      }
      static async setup() {
        return window.tude = window.tude || {
          cmd: []
        }, await (0, JB.c)("https://edge.aditude.io/site/bloxd-Jf9xJheMSn/bloxd-longform/bloxd.io/prod/load.js"), new GB
      }
      playVideoAd(BB, IB) {
        this.playVideoOrRewarded("video", BB, BB)
      }
      playRewarded(BB, IB) {
        this.playVideoOrRewarded("rewarded", BB, IB)
      }
      renderBanner(BB) {
        const IB = this.getBaseDivId(BB.adId, BB.width, BB.height);
        window.tude.cmd.push((function() {
          window.tude.refreshAdsViaDivMappings([{
            divId: BB.divId,
            baseDivId: IB
          }])
        }))
      }
      getBaseDivId(BB, IB, ZB) {
        return `pb-slot-bloxdio-${IB}-${ZB}${BB>1?`-${BB}`:""}`
      }
      playVideoOrRewarded(BB, IB, ZB) {
        var TB;
        let JB = !1;
        const GB = () => {
            document.getElementById("GenericVideoWrapper").style.display = "none", JB = !0
          },
          vB = (BB, IB) => {
            console.error(`AD: Error while playing Aditude video ad: ${BB}:`, IB), GB(), ZB()
          };
        if (console.log(`AD: Requesting Aditude ${BB} ad`), void 0 === (null === (TB = window.tude) || void 0 === TB ? void 0 : TB.requestInstreamPlayer)) return console.log(`AD: Aditude ad lib not loaded, no ${BB} ad playing`), void vB("Aditude ad lib not loaded", null);
        document.getElementById("GenericVideoWrapper").style.display = "flex", document.getElementById("GenericVideoInner").classList.add("AditudeVideo"), window.tude.cmd.push((function() {
          console.log("AD: Inside Aditude window.tude.cmd.push");
          try {
            window.tude.requestInstreamPlayer({
              code: oB[BB],
              divId: "GenericVideoInner",
              mode: "adOnly"
            }).then((ZB => {
              console.log("AD: Inside Aditude window.tude.requestInstreamPlayer.then"), ZB.on("playerClose", ((ZB, TB) => {
                console.log("AD: Inside Aditude player.on playerClose"), console.log(`AD: Successfully finished Aditude ${BB} ad`), GB(), IB()
              })).on("adPrefetchError", ((BB, IB) => {
                console.log("AD: Inside Aditude player.on adPrefetchError"), vB("Prefetch error", IB)
              })).on("adError", ((BB, IB) => {
                console.log("AD: Inside Aditude player.on adError"), vB("Generic error", IB)
              }));
              const TB = BB => {
                setTimeout((() => {
                  JB || ZB.setVideoVolume(.5)
                }), BB)
              };
              TB(500), TB(1e3), TB(1500), TB(2e3)
            })).catch((BB => {
              vB("Error occurred while requesting instream player", BB)
            }))
          } catch (ZB) {
            vB("Failed to request instream player", ZB)
          }
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);