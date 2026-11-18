export const id = 140;
export const ids = [140];
export const modules = {
  7292: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      AdsenseForGamesSdkAdaptor: () => fy
    });
    var Uy = Wy(1169),
      hy = Wy(1029);
    class fy extends Uy.b {
      constructor() {
        super(), this.name = "adsense"
      }
      static async setup() {
        return window.adsbygoogle = window.adsbygoogle || [], window.adBreak = window.adConfig = function(yb) {
          window.adsbygoogle.push(yb)
        }, window.adConfig({
          preloadAdBreaks: "on",
          sound: "on",
          onReady: () => {
            console.log("adsense for games ready")
          }
        }), await (0, hy.b)("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", {
          "data-ad-client": "ca-pub-5991928098122027",
          "data-ad-frequency-hint": "120s",
          type: "text/javascript"
        }), console.log("Loaded adsense for games"), new fy
      }
      playVideoAd(yb, bb) {
        console.log("playPreroll requested");
        let Wy = !1;
        const Uy = setTimeout((() => {
          console.log("Calling onEnd from timeout - window.adBreak did not respond after 3 seconds"), Wy = !0, yb()
        }), 3e3);
        window.adBreak({
          type: "video_start" === bb ? "start" : "next",
          name: bb,
          beforeAd: () => {
            console.log("beforeAd called"), clearTimeout(Uy), window.adStartSoPause(null, {
              preventMovement: !0
            })
          },
          afterAd: () => {
            console.log("afterAd called"), window.adCompleteSoResume()
          },
          adBreakDone: bb => {
            console.log("adBreakDone called", bb), clearTimeout(Uy), Wy || (console.log("Haven't called onEnd yet, calling it from adBreakDone."), yb())
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);