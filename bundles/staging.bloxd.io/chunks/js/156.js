export const id = 156;
export const ids = [156];
export const modules = {
  8101: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      AdsenseForGamesSdkAdaptor: () => dB
    });
    var QB = zB(1351),
      nB = zB(1230);
    class dB extends QB.c {
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
        }), await (0, nB.c)("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", {
          "data-ad-client": "ca-pub-5991928098122027",
          "data-ad-frequency-hint": "120s",
          type: "text/javascript"
        }), console.log("Loaded adsense for games"), new dB
      }
      playVideoAd(BB, jB) {
        console.log("playPreroll requested");
        let zB = !1;
        const QB = setTimeout((() => {
          console.log("Calling onEnd from timeout - window.adBreak did not respond after 3 seconds"), zB = !0, BB()
        }), 3e3);
        window.adBreak({
          type: "video_start" === jB ? "start" : "next",
          name: jB,
          beforeAd: () => {
            console.log("beforeAd called"), clearTimeout(QB), window.adStartSoPause(null, {
              preventMovement: !0
            })
          },
          afterAd: () => {
            console.log("afterAd called"), window.adCompleteSoResume()
          },
          adBreakDone: jB => {
            console.log("adBreakDone called", jB), clearTimeout(QB), zB || (console.log("Haven't called onEnd yet, calling it from adBreakDone."), BB())
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);