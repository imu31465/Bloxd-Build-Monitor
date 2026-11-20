export const id = 149;
export const ids = [149];
export const modules = {
  7817: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      AditudeSdkAdaptor: () => Ub
    });
    var Bb = hb(1211),
      Ob = hb(1077);
    const Gb = {
      video: "pb-slot-interstitial-video",
      rewarded: "pb-slot-rewarded-video"
    };
    class Ub extends Bb.b {
      constructor() {
        super(), this.name = "aditude"
      }
      static async setup() {
        return window.tude = window.tude || {
          cmd: []
        }, await (0, Ob.d)("https://edge.aditude.io/site/bloxd-Jf9xJheMSn/bloxd-longform/bloxd.io/prod/load.js"), new Ub
      }
      playVideoAd(bb, ub) {
        this.playVideoOrRewarded("video", bb, bb)
      }
      playRewarded(bb, ub) {
        this.playVideoOrRewarded("rewarded", bb, ub)
      }
      renderBanner(bb) {
        const ub = this.getBaseDivId(bb.adId, bb.width, bb.height);
        window.tude.cmd.push((function() {
          window.tude.refreshAdsViaDivMappings([{
            divId: bb.divId,
            baseDivId: ub
          }])
        }))
      }
      getBaseDivId(bb, ub, hb) {
        return `pb-slot-bloxdio-${ub}-${hb}${bb>1?`-${bb}`:""}`
      }
      playVideoOrRewarded(bb, ub, hb) {
        var Bb;
        let Ob = !1;
        const Ub = () => {
            document.getElementById("GenericVideoWrapper").style.display = "none", Ob = !0
          },
          Lb = (bb, ub) => {
            console.error(`AD: Error while playing Aditude video ad: ${bb}:`, ub), Ub(), hb()
          };
        if (console.log(`AD: Requesting Aditude ${bb} ad`), void 0 === (null === (Bb = window.tude) || void 0 === Bb ? void 0 : Bb.requestInstreamPlayer)) return console.log(`AD: Aditude ad lib not loaded, no ${bb} ad playing`), void Lb("Aditude ad lib not loaded", null);
        document.getElementById("GenericVideoWrapper").style.display = "flex", document.getElementById("GenericVideoInner").classList.add("AditudeVideo"), window.tude.cmd.push((function() {
          console.log("AD: Inside Aditude window.tude.cmd.push");
          try {
            window.tude.requestInstreamPlayer({
              code: Gb[bb],
              divId: "GenericVideoInner",
              mode: "adOnly"
            }).then((hb => {
              console.log("AD: Inside Aditude window.tude.requestInstreamPlayer.then"), hb.on("playerClose", ((hb, Bb) => {
                console.log("AD: Inside Aditude player.on playerClose"), console.log(`AD: Successfully finished Aditude ${bb} ad`), Ub(), ub()
              })).on("adPrefetchError", ((bb, ub) => {
                console.log("AD: Inside Aditude player.on adPrefetchError"), Lb("Prefetch error", ub)
              })).on("adError", ((bb, ub) => {
                console.log("AD: Inside Aditude player.on adError"), Lb("Generic error", ub)
              }));
              const Bb = bb => {
                setTimeout((() => {
                  Ob || hb.setVideoVolume(.5)
                }), bb)
              };
              Bb(500), Bb(1e3), Bb(1500), Bb(2e3)
            })).catch((bb => {
              Lb("Error occurred while requesting instream player", bb)
            }))
          } catch (hb) {
            Lb("Failed to request instream player", hb)
          }
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);