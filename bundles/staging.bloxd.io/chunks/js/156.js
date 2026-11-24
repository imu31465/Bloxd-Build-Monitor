export const id = 156;
export const ids = [156];
export const modules = {
  8246: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      AdsenseForGamesSdkAdaptor: () => MT
    });
    var WT = mT(1423),
      zT = mT(1277);
    class MT extends WT.d {
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
        }), await (0, zT.d)("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", {
          "data-ad-client": "ca-pub-5991928098122027",
          "data-ad-frequency-hint": "120s",
          type: "text/javascript"
        }), console.log("Loaded adsense for games"), new MT
      }
      playVideoAd(TT, UT) {
        console.log("playPreroll requested");
        let mT = !1;
        const WT = setTimeout((() => {
          console.log("Calling onEnd from timeout - window.adBreak did not respond after 3 seconds"), mT = !0, TT()
        }), 3e3);
        window.adBreak({
          type: "video_start" === UT ? "start" : "next",
          name: UT,
          beforeAd: () => {
            console.log("beforeAd called"), clearTimeout(WT), window.adStartSoPause(null, {
              preventMovement: !0
            })
          },
          afterAd: () => {
            console.log("afterAd called"), window.adCompleteSoResume()
          },
          adBreakDone: UT => {
            console.log("adBreakDone called", UT), clearTimeout(WT), mT || (console.log("Haven't called onEnd yet, calling it from adBreakDone."), TT())
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);