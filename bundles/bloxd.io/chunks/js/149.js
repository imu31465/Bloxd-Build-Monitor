export const id = 149;
export const ids = [149];
export const modules = {
  7583: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      AditudeSdkAdaptor: () => WT
    });
    var iT = IT(1286),
      zT = IT(1160);
    const kT = {
      video: "pb-slot-interstitial-video",
      rewarded: "pb-slot-rewarded-video"
    };
    class WT extends iT.d {
      constructor() {
        super(), this.name = "aditude"
      }
      static async setup() {
        return window.tude = window.tude || {
          cmd: []
        }, await (0, zT.b)("https://edge.aditude.io/site/bloxd-Jf9xJheMSn/bloxd-longform/bloxd.io/prod/load.js"), new WT
      }
      playVideoAd(TT, oT) {
        this.playVideoOrRewarded("video", TT, TT)
      }
      playRewarded(TT, oT) {
        this.playVideoOrRewarded("rewarded", TT, oT)
      }
      renderBanner(TT) {
        const oT = this.getBaseDivId(TT.adId, TT.width, TT.height);
        window.tude.cmd.push((function() {
          window.tude.refreshAdsViaDivMappings([{
            divId: TT.divId,
            baseDivId: oT
          }])
        }))
      }
      getBaseDivId(TT, oT, IT) {
        return `pb-slot-bloxdio-${oT}-${IT}${TT>1?`-${TT}`:""}`
      }
      playVideoOrRewarded(TT, oT, IT) {
        var iT;
        let zT = !1;
        const WT = () => {
            document.getElementById("GenericVideoWrapper").style.display = "none", zT = !0
          },
          XT = (TT, oT) => {
            console.error(`AD: Error while playing Aditude video ad: ${TT}:`, oT), WT(), IT()
          };
        if (console.log(`AD: Requesting Aditude ${TT} ad`), void 0 === (null === (iT = window.tude) || void 0 === iT ? void 0 : iT.requestInstreamPlayer)) return console.log(`AD: Aditude ad lib not loaded, no ${TT} ad playing`), void XT("Aditude ad lib not loaded", null);
        document.getElementById("GenericVideoWrapper").style.display = "flex", document.getElementById("GenericVideoInner").classList.add("AditudeVideo"), window.tude.cmd.push((function() {
          console.log("AD: Inside Aditude window.tude.cmd.push");
          try {
            window.tude.requestInstreamPlayer({
              code: kT[TT],
              divId: "GenericVideoInner",
              mode: "adOnly"
            }).then((IT => {
              console.log("AD: Inside Aditude window.tude.requestInstreamPlayer.then"), IT.on("playerClose", ((IT, iT) => {
                console.log("AD: Inside Aditude player.on playerClose"), console.log(`AD: Successfully finished Aditude ${TT} ad`), WT(), oT()
              })).on("adPrefetchError", ((TT, oT) => {
                console.log("AD: Inside Aditude player.on adPrefetchError"), XT("Prefetch error", oT)
              })).on("adError", ((TT, oT) => {
                console.log("AD: Inside Aditude player.on adError"), XT("Generic error", oT)
              }));
              const iT = TT => {
                setTimeout((() => {
                  zT || IT.setVideoVolume(.5)
                }), TT)
              };
              iT(500), iT(1e3), iT(1500), iT(2e3)
            })).catch((TT => {
              XT("Error occurred while requesting instream player", TT)
            }))
          } catch (IT) {
            XT("Failed to request instream player", IT)
          }
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);