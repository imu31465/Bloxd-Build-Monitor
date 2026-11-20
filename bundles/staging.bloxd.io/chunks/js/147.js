export const id = 147;
export const ids = [147];
export const modules = {
  7833: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      AdsenseForGamesSdkAdaptor: () => ev
    });
    var hv = Pv(1299),
      Sv = Pv(1164);
    class ev extends hv.c {
      constructor() {
        super(), this.name = "adsense"
      }
      static async setup() {
        return window.adsbygoogle = window.adsbygoogle || [], window.adBreak = window.adConfig = function(vv) {
          window.adsbygoogle.push(vv)
        }, window.adConfig({
          preloadAdBreaks: "on",
          sound: "on",
          onReady: () => {
            console.log("adsense for games ready")
          }
        }), await (0, Sv.d)("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", {
          "data-ad-client": "ca-pub-5991928098122027",
          "data-ad-frequency-hint": "120s",
          type: "text/javascript"
        }), console.log("Loaded adsense for games"), new ev
      }
      playVideoAd(vv, zv) {
        console.log("playPreroll requested");
        let Pv = !1;
        const hv = setTimeout((() => {
          console.log("Calling onEnd from timeout - window.adBreak did not respond after 3 seconds"), Pv = !0, vv()
        }), 3e3);
        window.adBreak({
          type: "video_start" === zv ? "start" : "next",
          name: zv,
          beforeAd: () => {
            console.log("beforeAd called"), clearTimeout(hv), window.adStartSoPause(null, {
              preventMovement: !0
            })
          },
          afterAd: () => {
            console.log("afterAd called"), window.adCompleteSoResume()
          },
          adBreakDone: zv => {
            console.log("adBreakDone called", zv), clearTimeout(hv), Pv || (console.log("Haven't called onEnd yet, calling it from adBreakDone."), vv())
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);