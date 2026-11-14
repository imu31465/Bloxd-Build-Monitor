export const id = 136;
export const ids = [136];
export const modules = {
  7090: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      AdsenseForGamesSdkAdaptor: () => uF
    });
    var CF = SF(1171),
      AF = SF(1036);
    class uF extends CF.b {
      constructor() {
        super(), this.name = "adsense"
      }
      static async setup() {
        return window.adsbygoogle = window.adsbygoogle || [], window.adBreak = window.adConfig = function(FF) {
          window.adsbygoogle.push(FF)
        }, window.adConfig({
          preloadAdBreaks: "on",
          sound: "on",
          onReady: () => {
            console.log("adsense for games ready")
          }
        }), await (0, AF.e)("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", {
          "data-ad-client": "ca-pub-5991928098122027",
          "data-ad-frequency-hint": "120s",
          type: "text/javascript"
        }), console.log("Loaded adsense for games"), new uF
      }
      playVideoAd(FF, WF) {
        console.log("playPreroll requested");
        let SF = !1;
        const CF = setTimeout((() => {
          console.log("Calling onEnd from timeout - window.adBreak did not respond after 3 seconds"), SF = !0, FF()
        }), 3e3);
        window.adBreak({
          type: "video_start" === WF ? "start" : "next",
          name: WF,
          beforeAd: () => {
            console.log("beforeAd called"), clearTimeout(CF), window.adStartSoPause(null, {
              preventMovement: !0
            })
          },
          afterAd: () => {
            console.log("afterAd called"), window.adCompleteSoResume()
          },
          adBreakDone: WF => {
            console.log("adBreakDone called", WF), clearTimeout(CF), SF || (console.log("Haven't called onEnd yet, calling it from adBreakDone."), FF())
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);