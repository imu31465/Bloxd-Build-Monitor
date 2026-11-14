export const id = 136;
export const ids = [136];
export const modules = {
  7056: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      AdsenseForGamesSdkAdaptor: () => zR
    });
    var wW = MW(1144),
      CW = MW(1020);
    class zR extends wW.d {
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
        }), await (0, CW.d)("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", {
          "data-ad-client": "ca-pub-5991928098122027",
          "data-ad-frequency-hint": "120s",
          type: "text/javascript"
        }), console.log("Loaded adsense for games"), new zR
      }
      playVideoAd(WW, RW) {
        console.log("playPreroll requested");
        let MW = !1;
        const wW = setTimeout((() => {
          console.log("Calling onEnd from timeout - window.adBreak did not respond after 3 seconds"), MW = !0, WW()
        }), 3e3);
        window.adBreak({
          type: "video_start" === RW ? "start" : "next",
          name: RW,
          beforeAd: () => {
            console.log("beforeAd called"), clearTimeout(wW), window.adStartSoPause(null, {
              preventMovement: !0
            })
          },
          afterAd: () => {
            console.log("afterAd called"), window.adCompleteSoResume()
          },
          adBreakDone: RW => {
            console.log("adBreakDone called", RW), clearTimeout(wW), MW || (console.log("Haven't called onEnd yet, calling it from adBreakDone."), WW())
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);