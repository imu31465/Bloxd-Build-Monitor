export const id = 148;
export const ids = [148];
export const modules = {
  7929: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      AdsenseForGamesSdkAdaptor: () => oQ
    });
    var LQ = wQ(1335),
      qQ = wQ(1196);
    class oQ extends LQ.b {
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
        }), await (0, qQ.e)("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", {
          "data-ad-client": "ca-pub-5991928098122027",
          "data-ad-frequency-hint": "120s",
          type: "text/javascript"
        }), console.log("Loaded adsense for games"), new oQ
      }
      playVideoAd(QQ, FQ) {
        console.log("playPreroll requested");
        let wQ = !1;
        const LQ = setTimeout((() => {
          console.log("Calling onEnd from timeout - window.adBreak did not respond after 3 seconds"), wQ = !0, QQ()
        }), 3e3);
        window.adBreak({
          type: "video_start" === FQ ? "start" : "next",
          name: FQ,
          beforeAd: () => {
            console.log("beforeAd called"), clearTimeout(LQ), window.adStartSoPause(null, {
              preventMovement: !0
            })
          },
          afterAd: () => {
            console.log("afterAd called"), window.adCompleteSoResume()
          },
          adBreakDone: FQ => {
            console.log("adBreakDone called", FQ), clearTimeout(LQ), wQ || (console.log("Haven't called onEnd yet, calling it from adBreakDone."), QQ())
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);