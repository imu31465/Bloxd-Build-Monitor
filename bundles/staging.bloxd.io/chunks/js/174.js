export const id = 174;
export const ids = [174];
export const modules = {
  7896: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      AdsenseForGamesSdkAdaptor: () => uR
    });
    var yR = GR(1447),
      tR = GR(1258);
    class uR extends yR.d {
      constructor() {
        super(), this.name = "adsense"
      }
      static async setup() {
        return window.adsbygoogle = window.adsbygoogle || [], window.adBreak = window.adConfig = function(RR) {
          window.adsbygoogle.push(RR)
        }, window.adConfig({
          preloadAdBreaks: "on",
          sound: "on",
          onReady: () => {
            console.log("adsense for games ready")
          }
        }), await (0, tR.c)("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", {
          "data-ad-client": "ca-pub-5991928098122027",
          "data-ad-frequency-hint": "120s",
          type: "text/javascript"
        }), console.log("Loaded adsense for games"), new uR
      }
      playVideoAd(RR, JR) {
        console.log("playPreroll requested");
        let GR = !1;
        const yR = setTimeout((() => {
          console.log("Calling onEnd from timeout - window.adBreak did not respond after 3 seconds"), GR = !0, RR()
        }), 3e3);
        window.adBreak({
          type: "video_start" === JR ? "start" : "next",
          name: JR,
          beforeAd: () => {
            console.log("beforeAd called"), clearTimeout(yR), window.adStartSoPause(null, {
              preventMovement: !0
            })
          },
          afterAd: () => {
            console.log("afterAd called"), window.adCompleteSoResume()
          },
          adBreakDone: JR => {
            console.log("adBreakDone called", JR), clearTimeout(yR), GR || (console.log("Haven't called onEnd yet, calling it from adBreakDone."), RR())
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);