export const id = 147;
export const ids = [147];
export const modules = {
  7787: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      AdsenseForGamesSdkAdaptor: () => ak
    });
    var Rk = Bk(1262),
      tk = Bk(1139);
    class ak extends Rk.d {
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
        }), await (0, tk.b)("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", {
          "data-ad-client": "ca-pub-5991928098122027",
          "data-ad-frequency-hint": "120s",
          type: "text/javascript"
        }), console.log("Loaded adsense for games"), new ak
      }
      playVideoAd(kk, Fk) {
        console.log("playPreroll requested");
        let Bk = !1;
        const Rk = setTimeout((() => {
          console.log("Calling onEnd from timeout - window.adBreak did not respond after 3 seconds"), Bk = !0, kk()
        }), 3e3);
        window.adBreak({
          type: "video_start" === Fk ? "start" : "next",
          name: Fk,
          beforeAd: () => {
            console.log("beforeAd called"), clearTimeout(Rk), window.adStartSoPause(null, {
              preventMovement: !0
            })
          },
          afterAd: () => {
            console.log("afterAd called"), window.adCompleteSoResume()
          },
          adBreakDone: Fk => {
            console.log("adBreakDone called", Fk), clearTimeout(Rk), Bk || (console.log("Haven't called onEnd yet, calling it from adBreakDone."), kk())
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);