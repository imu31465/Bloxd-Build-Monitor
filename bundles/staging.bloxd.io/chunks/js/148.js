export const id = 148;
export const ids = [148];
export const modules = {
  7581: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      AdsenseForGamesSdkAdaptor: () => kT
    });
    var iT = IT(1286),
      zT = IT(1160);
    class kT extends iT.d {
      constructor() {
        super(), this.name = "adsense"
      }
      static async setup() {
        return window.adsbygoogle = window.adsbygoogle || [], window.adBreak = window.adConfig = function(TT) {
          window.adsbygoogle.push(TT)
        }, window.adConfig({
          preloadAdBreaks: "on",
          sound: "on",
          onReady: () => {
            console.log("adsense for games ready")
          }
        }), await (0, zT.b)("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", {
          "data-ad-client": "ca-pub-5991928098122027",
          "data-ad-frequency-hint": "120s",
          type: "text/javascript"
        }), console.log("Loaded adsense for games"), new kT
      }
      playVideoAd(TT, oT) {
        console.log("playPreroll requested");
        let IT = !1;
        const iT = setTimeout((() => {
          console.log("Calling onEnd from timeout - window.adBreak did not respond after 3 seconds"), IT = !0, TT()
        }), 3e3);
        window.adBreak({
          type: "video_start" === oT ? "start" : "next",
          name: oT,
          beforeAd: () => {
            console.log("beforeAd called"), clearTimeout(iT), window.adStartSoPause(null, {
              preventMovement: !0
            })
          },
          afterAd: () => {
            console.log("afterAd called"), window.adCompleteSoResume()
          },
          adBreakDone: oT => {
            console.log("adBreakDone called", oT), clearTimeout(iT), IT || (console.log("Haven't called onEnd yet, calling it from adBreakDone."), TT())
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);