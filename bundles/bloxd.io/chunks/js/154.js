export const id = 154;
export const ids = [154];
export const modules = {
  8144: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      AdsenseForGamesSdkAdaptor: () => bC
    });
    var QC = ZC(1269),
      wC = ZC(1127);
    class bC extends QC.c {
      constructor() {
        super(), this.name = "adsense"
      }
      static async setup() {
        return window.adsbygoogle = window.adsbygoogle || [], window.adBreak = window.adConfig = function(CC) {
          window.adsbygoogle.push(CC)
        }, window.adConfig({
          preloadAdBreaks: "on",
          sound: "on",
          onReady: () => {
            console.log("adsense for games ready")
          }
        }), await (0, wC.e)("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", {
          "data-ad-client": "ca-pub-5991928098122027",
          "data-ad-frequency-hint": "120s",
          type: "text/javascript"
        }), console.log("Loaded adsense for games"), new bC
      }
      playVideoAd(CC, zC) {
        console.log("playPreroll requested");
        let ZC = !1;
        const QC = setTimeout((() => {
          console.log("Calling onEnd from timeout - window.adBreak did not respond after 3 seconds"), ZC = !0, CC()
        }), 3e3);
        window.adBreak({
          type: "video_start" === zC ? "start" : "next",
          name: zC,
          beforeAd: () => {
            console.log("beforeAd called"), clearTimeout(QC), window.adStartSoPause(null, {
              preventMovement: !0
            })
          },
          afterAd: () => {
            console.log("afterAd called"), window.adCompleteSoResume()
          },
          adBreakDone: zC => {
            console.log("adBreakDone called", zC), clearTimeout(QC), ZC || (console.log("Haven't called onEnd yet, calling it from adBreakDone."), CC())
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);