export const id = 167;
export const ids = [167];
export const modules = {
  7378: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      AdsenseForGamesSdkAdaptor: () => Me
    });
    var ye = He(1300),
      be = He(1119);
    class Me extends ye.d {
      constructor() {
        super(), this.name = "adsense"
      }
      static async setup() {
        return window.adsbygoogle = window.adsbygoogle || [], window.adBreak = window.adConfig = function(ee) {
          window.adsbygoogle.push(ee)
        }, window.adConfig({
          preloadAdBreaks: "on",
          sound: "on",
          onReady: () => {
            console.log("adsense for games ready")
          }
        }), await (0, be.b)("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", {
          "data-ad-client": "ca-pub-5991928098122027",
          "data-ad-frequency-hint": "120s",
          type: "text/javascript"
        }), console.log("Loaded adsense for games"), new Me
      }
      playVideoAd(ee, ie) {
        console.log("playPreroll requested");
        let He = !1;
        const ye = setTimeout((() => {
          console.log("Calling onEnd from timeout - window.adBreak did not respond after 3 seconds"), He = !0, ee()
        }), 3e3);
        window.adBreak({
          type: "video_start" === ie ? "start" : "next",
          name: ie,
          beforeAd: () => {
            console.log("beforeAd called"), clearTimeout(ye), window.adStartSoPause(null, {
              preventMovement: !0
            })
          },
          afterAd: () => {
            console.log("afterAd called"), window.adCompleteSoResume()
          },
          adBreakDone: ie => {
            console.log("adBreakDone called", ie), clearTimeout(ye), He || (console.log("Haven't called onEnd yet, calling it from adBreakDone."), ee())
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);