export const id = 156;
export const ids = [156];
export const modules = {
  8363: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      AdsenseForGamesSdkAdaptor: () => Zu
    });
    var su = ju(1364),
      Uu = ju(1227);
    class Zu extends su.b {
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
        }), await (0, Uu.e)("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", {
          "data-ad-client": "ca-pub-5991928098122027",
          "data-ad-frequency-hint": "120s",
          type: "text/javascript"
        }), console.log("Loaded adsense for games"), new Zu
      }
      playVideoAd(uu, Eu) {
        console.log("playPreroll requested");
        let ju = !1;
        const su = setTimeout((() => {
          console.log("Calling onEnd from timeout - window.adBreak did not respond after 3 seconds"), ju = !0, uu()
        }), 3e3);
        window.adBreak({
          type: "video_start" === Eu ? "start" : "next",
          name: Eu,
          beforeAd: () => {
            console.log("beforeAd called"), clearTimeout(su), window.adStartSoPause(null, {
              preventMovement: !0
            })
          },
          afterAd: () => {
            console.log("afterAd called"), window.adCompleteSoResume()
          },
          adBreakDone: Eu => {
            console.log("adBreakDone called", Eu), clearTimeout(su), ju || (console.log("Haven't called onEnd yet, calling it from adBreakDone."), uu())
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);