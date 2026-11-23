export const id = 155;
export const ids = [155];
export const modules = {
  8150: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      AditudeSdkAdaptor: () => nC
    });
    var QC = ZC(1269),
      wC = ZC(1127);
    const bC = {
      video: "pb-slot-interstitial-video",
      rewarded: "pb-slot-rewarded-video"
    };
    class nC extends QC.c {
      constructor() {
        super(), this.name = "aditude"
      }
      static async setup() {
        return window.tude = window.tude || {
          cmd: []
        }, await (0, wC.e)("https://edge.aditude.io/site/bloxd-Jf9xJheMSn/bloxd-longform/bloxd.io/prod/load.js"), new nC
      }
      playVideoAd(CC, zC) {
        this.playVideoOrRewarded("video", CC, CC)
      }
      playRewarded(CC, zC) {
        this.playVideoOrRewarded("rewarded", CC, zC)
      }
      renderBanner(CC) {
        const zC = this.getBaseDivId(CC.adId, CC.width, CC.height);
        window.tude.cmd.push((function() {
          window.tude.refreshAdsViaDivMappings([{
            divId: CC.divId,
            baseDivId: zC
          }])
        }))
      }
      getBaseDivId(CC, zC, ZC) {
        return `pb-slot-bloxdio-${zC}-${ZC}${CC>1?`-${CC}`:""}`
      }
      playVideoOrRewarded(CC, zC, ZC) {
        var QC;
        let wC = !1;
        const nC = () => {
            document.getElementById("GenericVideoWrapper").style.display = "none", wC = !0
          },
          fC = (CC, zC) => {
            console.error(`AD: Error while playing Aditude video ad: ${CC}:`, zC), nC(), ZC()
          };
        if (console.log(`AD: Requesting Aditude ${CC} ad`), void 0 === (null === (QC = window.tude) || void 0 === QC ? void 0 : QC.requestInstreamPlayer)) return console.log(`AD: Aditude ad lib not loaded, no ${CC} ad playing`), void fC("Aditude ad lib not loaded", null);
        document.getElementById("GenericVideoWrapper").style.display = "flex", document.getElementById("GenericVideoInner").classList.add("AditudeVideo"), window.tude.cmd.push((function() {
          console.log("AD: Inside Aditude window.tude.cmd.push");
          try {
            window.tude.requestInstreamPlayer({
              code: bC[CC],
              divId: "GenericVideoInner",
              mode: "adOnly"
            }).then((ZC => {
              console.log("AD: Inside Aditude window.tude.requestInstreamPlayer.then"), ZC.on("playerClose", ((ZC, QC) => {
                console.log("AD: Inside Aditude player.on playerClose"), console.log(`AD: Successfully finished Aditude ${CC} ad`), nC(), zC()
              })).on("adPrefetchError", ((CC, zC) => {
                console.log("AD: Inside Aditude player.on adPrefetchError"), fC("Prefetch error", zC)
              })).on("adError", ((CC, zC) => {
                console.log("AD: Inside Aditude player.on adError"), fC("Generic error", zC)
              }));
              const QC = CC => {
                setTimeout((() => {
                  wC || ZC.setVideoVolume(.5)
                }), CC)
              };
              QC(500), QC(1e3), QC(1500), QC(2e3)
            })).catch((CC => {
              fC("Error occurred while requesting instream player", CC)
            }))
          } catch (ZC) {
            fC("Failed to request instream player", ZC)
          }
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);