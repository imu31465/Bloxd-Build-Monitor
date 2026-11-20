export const id = 147;
export const ids = [147];
export const modules = {
  7756: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      AdsenseForGamesSdkAdaptor: () => ab
    });
    var kb = sb(1307),
      Wb = sb(1185);
    class ab extends kb.c {
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
        }), await (0, Wb.d)("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", {
          "data-ad-client": "ca-pub-5991928098122027",
          "data-ad-frequency-hint": "120s",
          type: "text/javascript"
        }), console.log("Loaded adsense for games"), new ab
      }
      playVideoAd(bb, cb) {
        console.log("playPreroll requested");
        let sb = !1;
        const kb = setTimeout((() => {
          console.log("Calling onEnd from timeout - window.adBreak did not respond after 3 seconds"), sb = !0, bb()
        }), 3e3);
        window.adBreak({
          type: "video_start" === cb ? "start" : "next",
          name: cb,
          beforeAd: () => {
            console.log("beforeAd called"), clearTimeout(kb), window.adStartSoPause(null, {
              preventMovement: !0
            })
          },
          afterAd: () => {
            console.log("afterAd called"), window.adCompleteSoResume()
          },
          adBreakDone: cb => {
            console.log("adBreakDone called", cb), clearTimeout(kb), sb || (console.log("Haven't called onEnd yet, calling it from adBreakDone."), bb())
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);