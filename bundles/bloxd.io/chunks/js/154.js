export const id = 154;
export const ids = [154];
export const modules = {
  8118: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      AdsenseForGamesSdkAdaptor: () => ik
    });
    var Xk = Ik(1295),
      Tk = Ik(1173);
    class ik extends Xk.d {
      constructor() {
        super(), this.name = "adsense"
      }
      static async setup() {
        return window.adsbygoogle = window.adsbygoogle || [], window.adBreak = window.adConfig = function(kk) {
          window.adsbygoogle.push(kk)
        }, window.adConfig({
          preloadAdBreaks: "on",
          sound: "on",
          onReady: () => {
            console.log("adsense for games ready")
          }
        }), await (0, Tk.d)("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", {
          "data-ad-client": "ca-pub-5991928098122027",
          "data-ad-frequency-hint": "120s",
          type: "text/javascript"
        }), console.log("Loaded adsense for games"), new ik
      }
      playVideoAd(kk, Fk) {
        console.log("playPreroll requested");
        let Ik = !1;
        const Xk = setTimeout((() => {
          console.log("Calling onEnd from timeout - window.adBreak did not respond after 3 seconds"), Ik = !0, kk()
        }), 3e3);
        window.adBreak({
          type: "video_start" === Fk ? "start" : "next",
          name: Fk,
          beforeAd: () => {
            console.log("beforeAd called"), clearTimeout(Xk), window.adStartSoPause(null, {
              preventMovement: !0
            })
          },
          afterAd: () => {
            console.log("afterAd called"), window.adCompleteSoResume()
          },
          adBreakDone: Fk => {
            console.log("adBreakDone called", Fk), clearTimeout(Xk), Ik || (console.log("Haven't called onEnd yet, calling it from adBreakDone."), kk())
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);