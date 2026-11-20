export const id = 147;
export const ids = [147];
export const modules = {
  7649: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      AdsenseForGamesSdkAdaptor: () => Xz
    });
    var Fz = sz(1291),
      Wz = sz(1167);
    class Xz extends Fz.d {
      constructor() {
        super(), this.name = "adsense"
      }
      static async setup() {
        return window.adsbygoogle = window.adsbygoogle || [], window.adBreak = window.adConfig = function(zz) {
          window.adsbygoogle.push(zz)
        }, window.adConfig({
          preloadAdBreaks: "on",
          sound: "on",
          onReady: () => {
            console.log("adsense for games ready")
          }
        }), await (0, Wz.c)("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", {
          "data-ad-client": "ca-pub-5991928098122027",
          "data-ad-frequency-hint": "120s",
          type: "text/javascript"
        }), console.log("Loaded adsense for games"), new Xz
      }
      playVideoAd(zz, tz) {
        console.log("playPreroll requested");
        let sz = !1;
        const Fz = setTimeout((() => {
          console.log("Calling onEnd from timeout - window.adBreak did not respond after 3 seconds"), sz = !0, zz()
        }), 3e3);
        window.adBreak({
          type: "video_start" === tz ? "start" : "next",
          name: tz,
          beforeAd: () => {
            console.log("beforeAd called"), clearTimeout(Fz), window.adStartSoPause(null, {
              preventMovement: !0
            })
          },
          afterAd: () => {
            console.log("afterAd called"), window.adCompleteSoResume()
          },
          adBreakDone: tz => {
            console.log("adBreakDone called", tz), clearTimeout(Fz), sz || (console.log("Haven't called onEnd yet, calling it from adBreakDone."), zz())
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);