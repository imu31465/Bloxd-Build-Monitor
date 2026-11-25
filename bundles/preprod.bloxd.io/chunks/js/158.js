export const id = 158;
export const ids = [158];
export const modules = {
  8513: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      AdsenseForGamesSdkAdaptor: () => TQ
    });
    var wQ = XQ(1368),
      qQ = XQ(1216);
    class TQ extends wQ.c {
      constructor() {
        super(), this.name = "adsense"
      }
      static async setup() {
        return window.adsbygoogle = window.adsbygoogle || [], window.adBreak = window.adConfig = function(QQ) {
          window.adsbygoogle.push(QQ)
        }, window.adConfig({
          preloadAdBreaks: "on",
          sound: "on",
          onReady: () => {
            console.log("adsense for games ready")
          }
        }), await (0, qQ.d)("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", {
          "data-ad-client": "ca-pub-5991928098122027",
          "data-ad-frequency-hint": "120s",
          type: "text/javascript"
        }), console.log("Loaded adsense for games"), new TQ
      }
      playVideoAd(QQ, WQ) {
        console.log("playPreroll requested");
        let XQ = !1;
        const wQ = setTimeout((() => {
          console.log("Calling onEnd from timeout - window.adBreak did not respond after 3 seconds"), XQ = !0, QQ()
        }), 3e3);
        window.adBreak({
          type: "video_start" === WQ ? "start" : "next",
          name: WQ,
          beforeAd: () => {
            console.log("beforeAd called"), clearTimeout(wQ), window.adStartSoPause(null, {
              preventMovement: !0
            })
          },
          afterAd: () => {
            console.log("afterAd called"), window.adCompleteSoResume()
          },
          adBreakDone: WQ => {
            console.log("adBreakDone called", WQ), clearTimeout(wQ), XQ || (console.log("Haven't called onEnd yet, calling it from adBreakDone."), QQ())
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);