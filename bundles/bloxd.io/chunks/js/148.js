export const id = 148;
export const ids = [148];
export const modules = {
  8166: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      AditudeSdkAdaptor: () => OT
    });
    var lT = cT(1321),
      MT = cT(1190);
    const KT = {
      video: "pb-slot-interstitial-video",
      rewarded: "pb-slot-rewarded-video"
    };
    class OT extends lT.b {
      constructor() {
        super(), this.name = "aditude"
      }
      static async setup() {
        return window.tude = window.tude || {
          cmd: []
        }, await (0, MT.e)("https://edge.aditude.io/site/bloxd-Jf9xJheMSn/bloxd-longform/bloxd.io/prod/load.js"), new OT
      }
      playVideoAd(TT, kT) {
        this.playVideoOrRewarded("video", TT, TT)
      }
      playRewarded(TT, kT) {
        this.playVideoOrRewarded("rewarded", TT, kT)
      }
      renderBanner(TT) {
        const kT = this.getBaseDivId(TT.adId, TT.width, TT.height);
        window.tude.cmd.push((function() {
          window.tude.refreshAdsViaDivMappings([{
            divId: TT.divId,
            baseDivId: kT
          }])
        }))
      }
      getBaseDivId(TT, kT, cT) {
        return `pb-slot-bloxdio-${kT}-${cT}${TT>1?`-${TT}`:""}`
      }
      playVideoOrRewarded(TT, kT, cT) {
        var lT;
        let MT = !1;
        const OT = () => {
            document.getElementById("GenericVideoWrapper").style.display = "none", MT = !0
          },
          yT = (TT, kT) => {
            console.error(`AD: Error while playing Aditude video ad: ${TT}:`, kT), OT(), cT()
          };
        if (console.log(`AD: Requesting Aditude ${TT} ad`), void 0 === (null === (lT = window.tude) || void 0 === lT ? void 0 : lT.requestInstreamPlayer)) return console.log(`AD: Aditude ad lib not loaded, no ${TT} ad playing`), void yT("Aditude ad lib not loaded", null);
        document.getElementById("GenericVideoWrapper").style.display = "flex", document.getElementById("GenericVideoInner").classList.add("AditudeVideo"), window.tude.cmd.push((function() {
          console.log("AD: Inside Aditude window.tude.cmd.push");
          try {
            window.tude.requestInstreamPlayer({
              code: KT[TT],
              divId: "GenericVideoInner",
              mode: "adOnly"
            }).then((cT => {
              console.log("AD: Inside Aditude window.tude.requestInstreamPlayer.then"), cT.on("playerClose", ((cT, lT) => {
                console.log("AD: Inside Aditude player.on playerClose"), console.log(`AD: Successfully finished Aditude ${TT} ad`), OT(), kT()
              })).on("adPrefetchError", ((TT, kT) => {
                console.log("AD: Inside Aditude player.on adPrefetchError"), yT("Prefetch error", kT)
              })).on("adError", ((TT, kT) => {
                console.log("AD: Inside Aditude player.on adError"), yT("Generic error", kT)
              }));
              const lT = TT => {
                setTimeout((() => {
                  MT || cT.setVideoVolume(.5)
                }), TT)
              };
              lT(500), lT(1e3), lT(1500), lT(2e3)
            })).catch((TT => {
              yT("Error occurred while requesting instream player", TT)
            }))
          } catch (cT) {
            yT("Failed to request instream player", cT)
          }
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);