export const id = 148;
export const ids = [148];
export const modules = {
  8036: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      AdsenseForGamesSdkAdaptor: () => Oq
    });
    var Yq = gq(1304),
      lq = gq(1171);
    class Oq extends Yq.e {
      constructor() {
        super(), this.name = "adsense"
      }
      static async setup() {
        return window.adsbygoogle = window.adsbygoogle || [], window.adBreak = window.adConfig = function(qq) {
          window.adsbygoogle.push(qq)
        }, window.adConfig({
          preloadAdBreaks: "on",
          sound: "on",
          onReady: () => {
            console.log("adsense for games ready")
          }
        }), await (0, lq.b)("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", {
          "data-ad-client": "ca-pub-5991928098122027",
          "data-ad-frequency-hint": "120s",
          type: "text/javascript"
        }), console.log("Loaded adsense for games"), new Oq
      }
      playVideoAd(qq, Eq) {
        console.log("playPreroll requested");
        let gq = !1;
        const Yq = setTimeout((() => {
          console.log("Calling onEnd from timeout - window.adBreak did not respond after 3 seconds"), gq = !0, qq()
        }), 3e3);
        window.adBreak({
          type: "video_start" === Eq ? "start" : "next",
          name: Eq,
          beforeAd: () => {
            console.log("beforeAd called"), clearTimeout(Yq), window.adStartSoPause(null, {
              preventMovement: !0
            })
          },
          afterAd: () => {
            console.log("afterAd called"), window.adCompleteSoResume()
          },
          adBreakDone: Eq => {
            console.log("adBreakDone called", Eq), clearTimeout(Yq), gq || (console.log("Haven't called onEnd yet, calling it from adBreakDone."), qq())
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);