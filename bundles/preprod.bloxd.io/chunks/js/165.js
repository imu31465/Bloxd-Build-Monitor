export const id = 165;
export const ids = [165];
export const modules = {
  7344: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      AdsenseForGamesSdkAdaptor: () => QU
    });
    var cU = zU(1351),
      yU = zU(1184);
    class QU extends cU.d {
      constructor() {
        super(), this.name = "adsense"
      }
      static async setup() {
        return window.adsbygoogle = window.adsbygoogle || [], window.adBreak = window.adConfig = function(UU) {
          window.adsbygoogle.push(UU)
        }, window.adConfig({
          preloadAdBreaks: "on",
          sound: "on",
          onReady: () => {
            console.log("adsense for games ready")
          }
        }), await (0, yU.c)("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", {
          "data-ad-client": "ca-pub-5991928098122027",
          "data-ad-frequency-hint": "120s",
          type: "text/javascript"
        }), console.log("Loaded adsense for games"), new QU
      }
      playVideoAd(UU, XU) {
        console.log("playPreroll requested");
        let zU = !1;
        const cU = setTimeout((() => {
          console.log("Calling onEnd from timeout - window.adBreak did not respond after 3 seconds"), zU = !0, UU()
        }), 3e3);
        window.adBreak({
          type: "video_start" === XU ? "start" : "next",
          name: XU,
          beforeAd: () => {
            console.log("beforeAd called"), clearTimeout(cU), window.adStartSoPause(null, {
              preventMovement: !0
            })
          },
          afterAd: () => {
            console.log("afterAd called"), window.adCompleteSoResume()
          },
          adBreakDone: XU => {
            console.log("adBreakDone called", XU), clearTimeout(cU), zU || (console.log("Haven't called onEnd yet, calling it from adBreakDone."), UU())
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);