export const id = 156;
export const ids = [156];
export const modules = {
  8358: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      AdsenseForGamesSdkAdaptor: () => Dt
    });
    var Ot = Vt(1419),
      qt = Vt(1275);
    class Dt extends Ot.e {
      constructor() {
        super(), this.name = "adsense"
      }
      static async setup() {
        return window.adsbygoogle = window.adsbygoogle || [], window.adBreak = window.adConfig = function(tt) {
          window.adsbygoogle.push(tt)
        }, window.adConfig({
          preloadAdBreaks: "on",
          sound: "on",
          onReady: () => {
            console.log("adsense for games ready")
          }
        }), await (0, qt.d)("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", {
          "data-ad-client": "ca-pub-5991928098122027",
          "data-ad-frequency-hint": "120s",
          type: "text/javascript"
        }), console.log("Loaded adsense for games"), new Dt
      }
      playVideoAd(tt, et) {
        console.log("playPreroll requested");
        let Vt = !1;
        const Ot = setTimeout((() => {
          console.log("Calling onEnd from timeout - window.adBreak did not respond after 3 seconds"), Vt = !0, tt()
        }), 3e3);
        window.adBreak({
          type: "video_start" === et ? "start" : "next",
          name: et,
          beforeAd: () => {
            console.log("beforeAd called"), clearTimeout(Ot), window.adStartSoPause(null, {
              preventMovement: !0
            })
          },
          afterAd: () => {
            console.log("afterAd called"), window.adCompleteSoResume()
          },
          adBreakDone: et => {
            console.log("adBreakDone called", et), clearTimeout(Ot), Vt || (console.log("Haven't called onEnd yet, calling it from adBreakDone."), tt())
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);