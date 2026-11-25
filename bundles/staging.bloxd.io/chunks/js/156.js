export const id = 156;
export const ids = [156];
export const modules = {
  8258: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      AdsenseForGamesSdkAdaptor: () => oB
    });
    var TB = ZB(1379),
      JB = ZB(1241);
    class oB extends TB.d {
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
        }), await (0, JB.c)("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", {
          "data-ad-client": "ca-pub-5991928098122027",
          "data-ad-frequency-hint": "120s",
          type: "text/javascript"
        }), console.log("Loaded adsense for games"), new oB
      }
      playVideoAd(BB, IB) {
        console.log("playPreroll requested");
        let ZB = !1;
        const TB = setTimeout((() => {
          console.log("Calling onEnd from timeout - window.adBreak did not respond after 3 seconds"), ZB = !0, BB()
        }), 3e3);
        window.adBreak({
          type: "video_start" === IB ? "start" : "next",
          name: IB,
          beforeAd: () => {
            console.log("beforeAd called"), clearTimeout(TB), window.adStartSoPause(null, {
              preventMovement: !0
            })
          },
          afterAd: () => {
            console.log("afterAd called"), window.adCompleteSoResume()
          },
          adBreakDone: IB => {
            console.log("adBreakDone called", IB), clearTimeout(TB), ZB || (console.log("Haven't called onEnd yet, calling it from adBreakDone."), BB())
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);