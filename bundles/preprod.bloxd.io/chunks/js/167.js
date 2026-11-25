export const id = 167;
export const ids = [167];
export const modules = {
  7228: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      AdsenseForGamesSdkAdaptor: () => jM
    });
    var OM = iM(1367),
      SM = iM(1177);
    class jM extends OM.d {
      constructor() {
        super(), this.name = "adsense"
      }
      static async setup() {
        return window.adsbygoogle = window.adsbygoogle || [], window.adBreak = window.adConfig = function(MM) {
          window.adsbygoogle.push(MM)
        }, window.adConfig({
          preloadAdBreaks: "on",
          sound: "on",
          onReady: () => {
            console.log("adsense for games ready")
          }
        }), await (0, SM.d)("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", {
          "data-ad-client": "ca-pub-5991928098122027",
          "data-ad-frequency-hint": "120s",
          type: "text/javascript"
        }), console.log("Loaded adsense for games"), new jM
      }
      playVideoAd(MM, rM) {
        console.log("playPreroll requested");
        let iM = !1;
        const OM = setTimeout((() => {
          console.log("Calling onEnd from timeout - window.adBreak did not respond after 3 seconds"), iM = !0, MM()
        }), 3e3);
        window.adBreak({
          type: "video_start" === rM ? "start" : "next",
          name: rM,
          beforeAd: () => {
            console.log("beforeAd called"), clearTimeout(OM), window.adStartSoPause(null, {
              preventMovement: !0
            })
          },
          afterAd: () => {
            console.log("afterAd called"), window.adCompleteSoResume()
          },
          adBreakDone: rM => {
            console.log("adBreakDone called", rM), clearTimeout(OM), iM || (console.log("Haven't called onEnd yet, calling it from adBreakDone."), MM())
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);