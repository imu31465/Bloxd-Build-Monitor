export const id = 167;
export const ids = [167];
export const modules = {
  7289: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      AdsenseForGamesSdkAdaptor: () => QB
    });
    var YB = GB(1341),
      DB = GB(1168);
    class QB extends YB.c {
      constructor() {
        super(), this.name = "adsense"
      }
      static async setup() {
        return window.adsbygoogle = window.adsbygoogle || [], window.adBreak = window.adConfig = function(BB) {
          window.adsbygoogle.push(BB)
        }, window.adConfig({
          preloadAdBreaks: "on",
          sound: "on",
          onReady: () => {
            console.log("adsense for games ready")
          }
        }), await (0, DB.b)("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", {
          "data-ad-client": "ca-pub-5991928098122027",
          "data-ad-frequency-hint": "120s",
          type: "text/javascript"
        }), console.log("Loaded adsense for games"), new QB
      }
      playVideoAd(BB, OB) {
        console.log("playPreroll requested");
        let GB = !1;
        const YB = setTimeout((() => {
          console.log("Calling onEnd from timeout - window.adBreak did not respond after 3 seconds"), GB = !0, BB()
        }), 3e3);
        window.adBreak({
          type: "video_start" === OB ? "start" : "next",
          name: OB,
          beforeAd: () => {
            console.log("beforeAd called"), clearTimeout(YB), window.adStartSoPause(null, {
              preventMovement: !0
            })
          },
          afterAd: () => {
            console.log("afterAd called"), window.adCompleteSoResume()
          },
          adBreakDone: OB => {
            console.log("adBreakDone called", OB), clearTimeout(YB), GB || (console.log("Haven't called onEnd yet, calling it from adBreakDone."), BB())
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);