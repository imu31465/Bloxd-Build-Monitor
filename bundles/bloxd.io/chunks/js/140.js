export const id = 140;
export const ids = [140];
export const modules = {
  7443: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      AdsenseForGamesSdkAdaptor: () => eJ
    });
    var FJ = ZJ(1205),
      UJ = ZJ(1075);
    class eJ extends FJ.b {
      constructor() {
        super(), this.name = "adsense"
      }
      static async setup() {
        return window.adsbygoogle = window.adsbygoogle || [], window.adBreak = window.adConfig = function(JJ) {
          window.adsbygoogle.push(JJ)
        }, window.adConfig({
          preloadAdBreaks: "on",
          sound: "on",
          onReady: () => {
            console.log("adsense for games ready")
          }
        }), await (0, UJ.e)("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", {
          "data-ad-client": "ca-pub-5991928098122027",
          "data-ad-frequency-hint": "120s",
          type: "text/javascript"
        }), console.log("Loaded adsense for games"), new eJ
      }
      playVideoAd(JJ, cJ) {
        console.log("playPreroll requested");
        let ZJ = !1;
        const FJ = setTimeout((() => {
          console.log("Calling onEnd from timeout - window.adBreak did not respond after 3 seconds"), ZJ = !0, JJ()
        }), 3e3);
        window.adBreak({
          type: "video_start" === cJ ? "start" : "next",
          name: cJ,
          beforeAd: () => {
            console.log("beforeAd called"), clearTimeout(FJ), window.adStartSoPause(null, {
              preventMovement: !0
            })
          },
          afterAd: () => {
            console.log("afterAd called"), window.adCompleteSoResume()
          },
          adBreakDone: cJ => {
            console.log("adBreakDone called", cJ), clearTimeout(FJ), ZJ || (console.log("Haven't called onEnd yet, calling it from adBreakDone."), JJ())
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);