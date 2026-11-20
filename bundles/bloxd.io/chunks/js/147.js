export const id = 147;
export const ids = [147];
export const modules = {
  7881: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      AdsenseForGamesSdkAdaptor: () => Qu
    });
    var Eu = yu(1277),
      Ku = yu(1153);
    class Qu extends Eu.b {
      constructor() {
        super(), this.name = "adsense"
      }
      static async setup() {
        return window.adsbygoogle = window.adsbygoogle || [], window.adBreak = window.adConfig = function(uu) {
          window.adsbygoogle.push(uu)
        }, window.adConfig({
          preloadAdBreaks: "on",
          sound: "on",
          onReady: () => {
            console.log("adsense for games ready")
          }
        }), await (0, Ku.b)("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", {
          "data-ad-client": "ca-pub-5991928098122027",
          "data-ad-frequency-hint": "120s",
          type: "text/javascript"
        }), console.log("Loaded adsense for games"), new Qu
      }
      playVideoAd(uu, Ru) {
        console.log("playPreroll requested");
        let yu = !1;
        const Eu = setTimeout((() => {
          console.log("Calling onEnd from timeout - window.adBreak did not respond after 3 seconds"), yu = !0, uu()
        }), 3e3);
        window.adBreak({
          type: "video_start" === Ru ? "start" : "next",
          name: Ru,
          beforeAd: () => {
            console.log("beforeAd called"), clearTimeout(Eu), window.adStartSoPause(null, {
              preventMovement: !0
            })
          },
          afterAd: () => {
            console.log("afterAd called"), window.adCompleteSoResume()
          },
          adBreakDone: Ru => {
            console.log("adBreakDone called", Ru), clearTimeout(Eu), yu || (console.log("Haven't called onEnd yet, calling it from adBreakDone."), uu())
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);