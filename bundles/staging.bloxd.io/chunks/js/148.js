export const id = 148;
export const ids = [148];
export const modules = {
  7758: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      AditudeSdkAdaptor: () => Tb
    });
    var kb = sb(1307),
      Wb = sb(1185);
    const ab = {
      video: "pb-slot-interstitial-video",
      rewarded: "pb-slot-rewarded-video"
    };
    class Tb extends kb.c {
      constructor() {
        super(), this.name = "aditude"
      }
      static async setup() {
        return window.tude = window.tude || {
          cmd: []
        }, await (0, Wb.d)("https://edge.aditude.io/site/bloxd-Jf9xJheMSn/bloxd-longform/bloxd.io/prod/load.js"), new Tb
      }
      playVideoAd(bb, cb) {
        this.playVideoOrRewarded("video", bb, bb)
      }
      playRewarded(bb, cb) {
        this.playVideoOrRewarded("rewarded", bb, cb)
      }
      renderBanner(bb) {
        const cb = this.getBaseDivId(bb.adId, bb.width, bb.height);
        window.tude.cmd.push((function() {
          window.tude.refreshAdsViaDivMappings([{
            divId: bb.divId,
            baseDivId: cb
          }])
        }))
      }
      getBaseDivId(bb, cb, sb) {
        return `pb-slot-bloxdio-${cb}-${sb}${bb>1?`-${bb}`:""}`
      }
      playVideoOrRewarded(bb, cb, sb) {
        var kb;
        let Wb = !1;
        const Tb = () => {
            document.getElementById("GenericVideoWrapper").style.display = "none", Wb = !0
          },
          Ub = (bb, cb) => {
            console.error(`AD: Error while playing Aditude video ad: ${bb}:`, cb), Tb(), sb()
          };
        if (console.log(`AD: Requesting Aditude ${bb} ad`), void 0 === (null === (kb = window.tude) || void 0 === kb ? void 0 : kb.requestInstreamPlayer)) return console.log(`AD: Aditude ad lib not loaded, no ${bb} ad playing`), void Ub("Aditude ad lib not loaded", null);
        document.getElementById("GenericVideoWrapper").style.display = "flex", document.getElementById("GenericVideoInner").classList.add("AditudeVideo"), window.tude.cmd.push((function() {
          console.log("AD: Inside Aditude window.tude.cmd.push");
          try {
            window.tude.requestInstreamPlayer({
              code: ab[bb],
              divId: "GenericVideoInner",
              mode: "adOnly"
            }).then((sb => {
              console.log("AD: Inside Aditude window.tude.requestInstreamPlayer.then"), sb.on("playerClose", ((sb, kb) => {
                console.log("AD: Inside Aditude player.on playerClose"), console.log(`AD: Successfully finished Aditude ${bb} ad`), Tb(), cb()
              })).on("adPrefetchError", ((bb, cb) => {
                console.log("AD: Inside Aditude player.on adPrefetchError"), Ub("Prefetch error", cb)
              })).on("adError", ((bb, cb) => {
                console.log("AD: Inside Aditude player.on adError"), Ub("Generic error", cb)
              }));
              const kb = bb => {
                setTimeout((() => {
                  Wb || sb.setVideoVolume(.5)
                }), bb)
              };
              kb(500), kb(1e3), kb(1500), kb(2e3)
            })).catch((bb => {
              Ub("Error occurred while requesting instream player", bb)
            }))
          } catch (sb) {
            Ub("Failed to request instream player", sb)
          }
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);