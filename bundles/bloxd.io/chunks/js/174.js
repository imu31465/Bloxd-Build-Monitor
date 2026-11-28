export const id = 174;
export const ids = [174];
export const modules = {
  7947: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      AdsenseForGamesSdkAdaptor: () => pb
    });
    var eb = Mb(1440),
      Hb = Mb(1250);
    class pb extends eb.b {
      constructor() {
        super(), this.name = "adsense"
      }
      static async setup() {
        return window.adsbygoogle = window.adsbygoogle || [], window.adBreak = window.adConfig = function(bb) {
          window.adsbygoogle.push(bb)
        }, window.adConfig({
          preloadAdBreaks: "on",
          sound: "on",
          onReady: () => {
            console.log("adsense for games ready")
          }
        }), await (0, Hb.c)("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", {
          "data-ad-client": "ca-pub-5991928098122027",
          "data-ad-frequency-hint": "120s",
          type: "text/javascript"
        }), console.log("Loaded adsense for games"), new pb
      }
      playVideoAd(bb, wb) {
        console.log("playPreroll requested");
        let Mb = !1;
        const eb = setTimeout((() => {
          console.log("Calling onEnd from timeout - window.adBreak did not respond after 3 seconds"), Mb = !0, bb()
        }), 3e3);
        window.adBreak({
          type: "video_start" === wb ? "start" : "next",
          name: wb,
          beforeAd: () => {
            console.log("beforeAd called"), clearTimeout(eb), window.adStartSoPause(null, {
              preventMovement: !0
            })
          },
          afterAd: () => {
            console.log("afterAd called"), window.adCompleteSoResume()
          },
          adBreakDone: wb => {
            console.log("adBreakDone called", wb), clearTimeout(eb), Mb || (console.log("Haven't called onEnd yet, calling it from adBreakDone."), bb())
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);