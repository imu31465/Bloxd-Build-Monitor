export const id = 140;
export const ids = [140];
export const modules = {
  7467: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      AdsenseForGamesSdkAdaptor: () => pB
    });
    var VB = dB(1204),
      yB = dB(1068);
    class pB extends VB.e {
      constructor() {
        super(), this.name = "adsense"
      }
      static async setup() {
        return window.adsbygoogle = window.adsbygoogle || [], window.adBreak = window.adConfig = function(BB) {
          window.adsbygoogle.push(BB)
        }, window.adConfig({
          preloadAdBreaks: "on",
          sound: "on",
          onReady: () => {
            console.log("adsense for games ready")
          }
        }), await (0, yB.c)("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", {
          "data-ad-client": "ca-pub-5991928098122027",
          "data-ad-frequency-hint": "120s",
          type: "text/javascript"
        }), console.log("Loaded adsense for games"), new pB
      }
      playVideoAd(BB, TB) {
        console.log("playPreroll requested");
        let dB = !1;
        const VB = setTimeout((() => {
          console.log("Calling onEnd from timeout - window.adBreak did not respond after 3 seconds"), dB = !0, BB()
        }), 3e3);
        window.adBreak({
          type: "video_start" === TB ? "start" : "next",
          name: TB,
          beforeAd: () => {
            console.log("beforeAd called"), clearTimeout(VB), window.adStartSoPause(null, {
              preventMovement: !0
            })
          },
          afterAd: () => {
            console.log("afterAd called"), window.adCompleteSoResume()
          },
          adBreakDone: TB => {
            console.log("adBreakDone called", TB), clearTimeout(VB), dB || (console.log("Haven't called onEnd yet, calling it from adBreakDone."), BB())
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);