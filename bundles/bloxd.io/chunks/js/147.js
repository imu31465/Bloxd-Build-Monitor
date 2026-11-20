export const id = 147;
export const ids = [147];
export const modules = {
  7780: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      AdsenseForGamesSdkAdaptor: () => EU
    });
    var tU = gU(1312),
      pU = gU(1174);
    class EU extends tU.b {
      constructor() {
        super(), this.name = "adsense"
      }
      static async setup() {
        return window.adsbygoogle = window.adsbygoogle || [], window.adBreak = window.adConfig = function(UU) {
          window.adsbygoogle.push(UU)
        }, window.adConfig({
          preloadAdBreaks: "on",
          sound: "on",
          onReady: () => {
            console.log("adsense for games ready")
          }
        }), await (0, pU.e)("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", {
          "data-ad-client": "ca-pub-5991928098122027",
          "data-ad-frequency-hint": "120s",
          type: "text/javascript"
        }), console.log("Loaded adsense for games"), new EU
      }
      playVideoAd(UU, RU) {
        console.log("playPreroll requested");
        let gU = !1;
        const tU = setTimeout((() => {
          console.log("Calling onEnd from timeout - window.adBreak did not respond after 3 seconds"), gU = !0, UU()
        }), 3e3);
        window.adBreak({
          type: "video_start" === RU ? "start" : "next",
          name: RU,
          beforeAd: () => {
            console.log("beforeAd called"), clearTimeout(tU), window.adStartSoPause(null, {
              preventMovement: !0
            })
          },
          afterAd: () => {
            console.log("afterAd called"), window.adCompleteSoResume()
          },
          adBreakDone: RU => {
            console.log("adBreakDone called", RU), clearTimeout(tU), gU || (console.log("Haven't called onEnd yet, calling it from adBreakDone."), UU())
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);