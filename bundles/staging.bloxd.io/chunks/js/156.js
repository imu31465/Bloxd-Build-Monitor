export const id = 156;
export const ids = [156];
export const modules = {
  8187: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      AdsenseForGamesSdkAdaptor: () => LG
    });
    var wG = ZG(1280),
      SG = ZG(1143);
    class LG extends wG.e {
      constructor() {
        super(), this.name = "adsense"
      }
      static async setup() {
        return window.adsbygoogle = window.adsbygoogle || [], window.adBreak = window.adConfig = function(GG) {
          window.adsbygoogle.push(GG)
        }, window.adConfig({
          preloadAdBreaks: "on",
          sound: "on",
          onReady: () => {
            console.log("adsense for games ready")
          }
        }), await (0, SG.b)("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", {
          "data-ad-client": "ca-pub-5991928098122027",
          "data-ad-frequency-hint": "120s",
          type: "text/javascript"
        }), console.log("Loaded adsense for games"), new LG
      }
      playVideoAd(GG, bG) {
        console.log("playPreroll requested");
        let ZG = !1;
        const wG = setTimeout((() => {
          console.log("Calling onEnd from timeout - window.adBreak did not respond after 3 seconds"), ZG = !0, GG()
        }), 3e3);
        window.adBreak({
          type: "video_start" === bG ? "start" : "next",
          name: bG,
          beforeAd: () => {
            console.log("beforeAd called"), clearTimeout(wG), window.adStartSoPause(null, {
              preventMovement: !0
            })
          },
          afterAd: () => {
            console.log("afterAd called"), window.adCompleteSoResume()
          },
          adBreakDone: bG => {
            console.log("adBreakDone called", bG), clearTimeout(wG), ZG || (console.log("Haven't called onEnd yet, calling it from adBreakDone."), GG())
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);