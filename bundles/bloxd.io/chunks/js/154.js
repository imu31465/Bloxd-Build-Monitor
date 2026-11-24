export const id = 154;
export const ids = [154];
export const modules = {
  8043: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      AdsenseForGamesSdkAdaptor: () => am
    });
    var hm = fm(1318),
      Am = fm(1198);
    class am extends hm.c {
      constructor() {
        super(), this.name = "adsense"
      }
      static async setup() {
        return window.adsbygoogle = window.adsbygoogle || [], window.adBreak = window.adConfig = function(mm) {
          window.adsbygoogle.push(mm)
        }, window.adConfig({
          preloadAdBreaks: "on",
          sound: "on",
          onReady: () => {
            console.log("adsense for games ready")
          }
        }), await (0, Am.c)("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", {
          "data-ad-client": "ca-pub-5991928098122027",
          "data-ad-frequency-hint": "120s",
          type: "text/javascript"
        }), console.log("Loaded adsense for games"), new am
      }
      playVideoAd(mm, Tm) {
        console.log("playPreroll requested");
        let fm = !1;
        const hm = setTimeout((() => {
          console.log("Calling onEnd from timeout - window.adBreak did not respond after 3 seconds"), fm = !0, mm()
        }), 3e3);
        window.adBreak({
          type: "video_start" === Tm ? "start" : "next",
          name: Tm,
          beforeAd: () => {
            console.log("beforeAd called"), clearTimeout(hm), window.adStartSoPause(null, {
              preventMovement: !0
            })
          },
          afterAd: () => {
            console.log("afterAd called"), window.adCompleteSoResume()
          },
          adBreakDone: Tm => {
            console.log("adBreakDone called", Tm), clearTimeout(hm), fm || (console.log("Haven't called onEnd yet, calling it from adBreakDone."), mm())
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);