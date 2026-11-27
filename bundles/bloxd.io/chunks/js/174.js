export const id = 174;
export const ids = [174];
export const modules = {
  7753: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      AdsenseForGamesSdkAdaptor: () => NW
    });
    var mW = OW(1343),
      EW = OW(1162);
    class NW extends mW.c {
      constructor() {
        super(), this.name = "adsense"
      }
      static async setup() {
        return window.adsbygoogle = window.adsbygoogle || [], window.adBreak = window.adConfig = function(WW) {
          window.adsbygoogle.push(WW)
        }, window.adConfig({
          preloadAdBreaks: "on",
          sound: "on",
          onReady: () => {
            console.log("adsense for games ready")
          }
        }), await (0, EW.d)("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", {
          "data-ad-client": "ca-pub-5991928098122027",
          "data-ad-frequency-hint": "120s",
          type: "text/javascript"
        }), console.log("Loaded adsense for games"), new NW
      }
      playVideoAd(WW, iW) {
        console.log("playPreroll requested");
        let OW = !1;
        const mW = setTimeout((() => {
          console.log("Calling onEnd from timeout - window.adBreak did not respond after 3 seconds"), OW = !0, WW()
        }), 3e3);
        window.adBreak({
          type: "video_start" === iW ? "start" : "next",
          name: iW,
          beforeAd: () => {
            console.log("beforeAd called"), clearTimeout(mW), window.adStartSoPause(null, {
              preventMovement: !0
            })
          },
          afterAd: () => {
            console.log("afterAd called"), window.adCompleteSoResume()
          },
          adBreakDone: iW => {
            console.log("adBreakDone called", iW), clearTimeout(mW), OW || (console.log("Haven't called onEnd yet, calling it from adBreakDone."), WW())
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);