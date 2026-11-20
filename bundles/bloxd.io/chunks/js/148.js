export const id = 148;
export const ids = [148];
export const modules = {
  7810: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      AdsenseForGamesSdkAdaptor: () => Gb
    });
    var Bb = hb(1211),
      Ob = hb(1077);
    class Gb extends Bb.b {
      constructor() {
        super(), this.name = "adsense"
      }
      static async setup() {
        return window.adsbygoogle = window.adsbygoogle || [], window.adBreak = window.adConfig = function(bb) {
          window.adsbygoogle.push(bb)
        }, window.adConfig({
          preloadAdBreaks: "on",
          sound: "on",
          onReady: () => {
            console.log("adsense for games ready")
          }
        }), await (0, Ob.d)("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", {
          "data-ad-client": "ca-pub-5991928098122027",
          "data-ad-frequency-hint": "120s",
          type: "text/javascript"
        }), console.log("Loaded adsense for games"), new Gb
      }
      playVideoAd(bb, ub) {
        console.log("playPreroll requested");
        let hb = !1;
        const Bb = setTimeout((() => {
          console.log("Calling onEnd from timeout - window.adBreak did not respond after 3 seconds"), hb = !0, bb()
        }), 3e3);
        window.adBreak({
          type: "video_start" === ub ? "start" : "next",
          name: ub,
          beforeAd: () => {
            console.log("beforeAd called"), clearTimeout(Bb), window.adStartSoPause(null, {
              preventMovement: !0
            })
          },
          afterAd: () => {
            console.log("afterAd called"), window.adCompleteSoResume()
          },
          adBreakDone: ub => {
            console.log("adBreakDone called", ub), clearTimeout(Bb), hb || (console.log("Haven't called onEnd yet, calling it from adBreakDone."), bb())
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);