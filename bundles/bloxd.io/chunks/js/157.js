export const id = 157;
export const ids = [157];
export const modules = {
  8253: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      AditudeSdkAdaptor: () => gT
    });
    var WT = mT(1423),
      zT = mT(1277);
    const MT = {
      video: "pb-slot-interstitial-video",
      rewarded: "pb-slot-rewarded-video"
    };
    class gT extends WT.d {
      constructor() {
        super(), this.name = "aditude"
      }
      static async setup() {
        return window.tude = window.tude || {
          cmd: []
        }, await (0, zT.d)("https://edge.aditude.io/site/bloxd-Jf9xJheMSn/bloxd-longform/bloxd.io/prod/load.js"), new gT
      }
      playVideoAd(TT, UT) {
        this.playVideoOrRewarded("video", TT, TT)
      }
      playRewarded(TT, UT) {
        this.playVideoOrRewarded("rewarded", TT, UT)
      }
      renderBanner(TT) {
        const UT = this.getBaseDivId(TT.adId, TT.width, TT.height);
        window.tude.cmd.push((function() {
          window.tude.refreshAdsViaDivMappings([{
            divId: TT.divId,
            baseDivId: UT
          }])
        }))
      }
      getBaseDivId(TT, UT, mT) {
        return `pb-slot-bloxdio-${UT}-${mT}${TT>1?`-${TT}`:""}`
      }
      playVideoOrRewarded(TT, UT, mT) {
        var WT;
        let zT = !1;
        const gT = () => {
            document.getElementById("GenericVideoWrapper").style.display = "none", zT = !0
          },
          nT = (TT, UT) => {
            console.error(`AD: Error while playing Aditude video ad: ${TT}:`, UT), gT(), mT()
          };
        if (console.log(`AD: Requesting Aditude ${TT} ad`), void 0 === (null === (WT = window.tude) || void 0 === WT ? void 0 : WT.requestInstreamPlayer)) return console.log(`AD: Aditude ad lib not loaded, no ${TT} ad playing`), void nT("Aditude ad lib not loaded", null);
        document.getElementById("GenericVideoWrapper").style.display = "flex", document.getElementById("GenericVideoInner").classList.add("AditudeVideo"), window.tude.cmd.push((function() {
          console.log("AD: Inside Aditude window.tude.cmd.push");
          try {
            window.tude.requestInstreamPlayer({
              code: MT[TT],
              divId: "GenericVideoInner",
              mode: "adOnly"
            }).then((mT => {
              console.log("AD: Inside Aditude window.tude.requestInstreamPlayer.then"), mT.on("playerClose", ((mT, WT) => {
                console.log("AD: Inside Aditude player.on playerClose"), console.log(`AD: Successfully finished Aditude ${TT} ad`), gT(), UT()
              })).on("adPrefetchError", ((TT, UT) => {
                console.log("AD: Inside Aditude player.on adPrefetchError"), nT("Prefetch error", UT)
              })).on("adError", ((TT, UT) => {
                console.log("AD: Inside Aditude player.on adError"), nT("Generic error", UT)
              }));
              const WT = TT => {
                setTimeout((() => {
                  zT || mT.setVideoVolume(.5)
                }), TT)
              };
              WT(500), WT(1e3), WT(1500), WT(2e3)
            })).catch((TT => {
              nT("Error occurred while requesting instream player", TT)
            }))
          } catch (mT) {
            nT("Failed to request instream player", mT)
          }
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);