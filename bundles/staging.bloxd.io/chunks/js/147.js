export const id = 147;
export const ids = [147];
export const modules = {
  8163: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      AdsenseForGamesSdkAdaptor: () => KT
    });
    var lT = cT(1321),
      MT = cT(1190);
    class KT extends lT.b {
      constructor() {
        super(), this.name = "adsense"
      }
      static async setup() {
        return window.adsbygoogle = window.adsbygoogle || [], window.adBreak = window.adConfig = function(TT) {
          window.adsbygoogle.push(TT)
        }, window.adConfig({
          preloadAdBreaks: "on",
          sound: "on",
          onReady: () => {
            console.log("adsense for games ready")
          }
        }), await (0, MT.e)("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", {
          "data-ad-client": "ca-pub-5991928098122027",
          "data-ad-frequency-hint": "120s",
          type: "text/javascript"
        }), console.log("Loaded adsense for games"), new KT
      }
      playVideoAd(TT, kT) {
        console.log("playPreroll requested");
        let cT = !1;
        const lT = setTimeout((() => {
          console.log("Calling onEnd from timeout - window.adBreak did not respond after 3 seconds"), cT = !0, TT()
        }), 3e3);
        window.adBreak({
          type: "video_start" === kT ? "start" : "next",
          name: kT,
          beforeAd: () => {
            console.log("beforeAd called"), clearTimeout(lT), window.adStartSoPause(null, {
              preventMovement: !0
            })
          },
          afterAd: () => {
            console.log("afterAd called"), window.adCompleteSoResume()
          },
          adBreakDone: kT => {
            console.log("adBreakDone called", kT), clearTimeout(lT), cT || (console.log("Haven't called onEnd yet, calling it from adBreakDone."), TT())
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);