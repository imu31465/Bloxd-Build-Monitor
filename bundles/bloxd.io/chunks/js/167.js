export const id = 167;
export const ids = [167];
export const modules = {
  7287: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      AdsenseForGamesSdkAdaptor: () => SH
    });
    var AH = LH(1289),
      rH = LH(1110);
    class SH extends AH.b {
      constructor() {
        super(), this.name = "adsense"
      }
      static async setup() {
        return window.adsbygoogle = window.adsbygoogle || [], window.adBreak = window.adConfig = function(HH) {
          window.adsbygoogle.push(HH)
        }, window.adConfig({
          preloadAdBreaks: "on",
          sound: "on",
          onReady: () => {
            console.log("adsense for games ready")
          }
        }), await (0, rH.e)("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", {
          "data-ad-client": "ca-pub-5991928098122027",
          "data-ad-frequency-hint": "120s",
          type: "text/javascript"
        }), console.log("Loaded adsense for games"), new SH
      }
      playVideoAd(HH, BH) {
        console.log("playPreroll requested");
        let LH = !1;
        const AH = setTimeout((() => {
          console.log("Calling onEnd from timeout - window.adBreak did not respond after 3 seconds"), LH = !0, HH()
        }), 3e3);
        window.adBreak({
          type: "video_start" === BH ? "start" : "next",
          name: BH,
          beforeAd: () => {
            console.log("beforeAd called"), clearTimeout(AH), window.adStartSoPause(null, {
              preventMovement: !0
            })
          },
          afterAd: () => {
            console.log("afterAd called"), window.adCompleteSoResume()
          },
          adBreakDone: BH => {
            console.log("adBreakDone called", BH), clearTimeout(AH), LH || (console.log("Haven't called onEnd yet, calling it from adBreakDone."), HH())
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);