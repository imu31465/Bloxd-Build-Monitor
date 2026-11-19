export const id = 148;
export const ids = [148];
export const modules = {
  7570: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      AdsenseForGamesSdkAdaptor: () => IY
    });
    var FY = DY(1318),
      AY = DY(1204);
    class IY extends FY.c {
      constructor() {
        super(), this.name = "adsense"
      }
      static async setup() {
        return window.adsbygoogle = window.adsbygoogle || [], window.adBreak = window.adConfig = function(YY) {
          window.adsbygoogle.push(YY)
        }, window.adConfig({
          preloadAdBreaks: "on",
          sound: "on",
          onReady: () => {
            console.log("adsense for games ready")
          }
        }), await (0, AY.d)("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", {
          "data-ad-client": "ca-pub-5991928098122027",
          "data-ad-frequency-hint": "120s",
          type: "text/javascript"
        }), console.log("Loaded adsense for games"), new IY
      }
      playVideoAd(YY, rY) {
        console.log("playPreroll requested");
        let DY = !1;
        const FY = setTimeout((() => {
          console.log("Calling onEnd from timeout - window.adBreak did not respond after 3 seconds"), DY = !0, YY()
        }), 3e3);
        window.adBreak({
          type: "video_start" === rY ? "start" : "next",
          name: rY,
          beforeAd: () => {
            console.log("beforeAd called"), clearTimeout(FY), window.adStartSoPause(null, {
              preventMovement: !0
            })
          },
          afterAd: () => {
            console.log("afterAd called"), window.adCompleteSoResume()
          },
          adBreakDone: rY => {
            console.log("adBreakDone called", rY), clearTimeout(FY), DY || (console.log("Haven't called onEnd yet, calling it from adBreakDone."), YY())
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);