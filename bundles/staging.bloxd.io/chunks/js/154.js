export const id = 154;
export const ids = [154];
export const modules = {
  8157: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      AdsenseForGamesSdkAdaptor: () => KD
    });
    var pD = wD(1326),
      sD = wD(1186);
    class KD extends pD.b {
      constructor() {
        super(), this.name = "adsense"
      }
      static async setup() {
        return window.adsbygoogle = window.adsbygoogle || [], window.adBreak = window.adConfig = function(DD) {
          window.adsbygoogle.push(DD)
        }, window.adConfig({
          preloadAdBreaks: "on",
          sound: "on",
          onReady: () => {
            console.log("adsense for games ready")
          }
        }), await (0, sD.b)("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", {
          "data-ad-client": "ca-pub-5991928098122027",
          "data-ad-frequency-hint": "120s",
          type: "text/javascript"
        }), console.log("Loaded adsense for games"), new KD
      }
      playVideoAd(DD, zD) {
        console.log("playPreroll requested");
        let wD = !1;
        const pD = setTimeout((() => {
          console.log("Calling onEnd from timeout - window.adBreak did not respond after 3 seconds"), wD = !0, DD()
        }), 3e3);
        window.adBreak({
          type: "video_start" === zD ? "start" : "next",
          name: zD,
          beforeAd: () => {
            console.log("beforeAd called"), clearTimeout(pD), window.adStartSoPause(null, {
              preventMovement: !0
            })
          },
          afterAd: () => {
            console.log("afterAd called"), window.adCompleteSoResume()
          },
          adBreakDone: zD => {
            console.log("adBreakDone called", zD), clearTimeout(pD), wD || (console.log("Haven't called onEnd yet, calling it from adBreakDone."), DD())
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);