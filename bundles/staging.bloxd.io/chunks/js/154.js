export const id = 154;
export const ids = [154];
export const modules = {
  8300: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      AdsenseForGamesSdkAdaptor: () => XS
    });
    var tS = gS(1397),
      bS = gS(1267);
    class XS extends tS.c {
      constructor() {
        super(), this.name = "adsense"
      }
      static async setup() {
        return window.adsbygoogle = window.adsbygoogle || [], window.adBreak = window.adConfig = function(SS) {
          window.adsbygoogle.push(SS)
        }, window.adConfig({
          preloadAdBreaks: "on",
          sound: "on",
          onReady: () => {
            console.log("adsense for games ready")
          }
        }), await (0, bS.c)("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", {
          "data-ad-client": "ca-pub-5991928098122027",
          "data-ad-frequency-hint": "120s",
          type: "text/javascript"
        }), console.log("Loaded adsense for games"), new XS
      }
      playVideoAd(SS, HS) {
        console.log("playPreroll requested");
        let gS = !1;
        const tS = setTimeout((() => {
          console.log("Calling onEnd from timeout - window.adBreak did not respond after 3 seconds"), gS = !0, SS()
        }), 3e3);
        window.adBreak({
          type: "video_start" === HS ? "start" : "next",
          name: HS,
          beforeAd: () => {
            console.log("beforeAd called"), clearTimeout(tS), window.adStartSoPause(null, {
              preventMovement: !0
            })
          },
          afterAd: () => {
            console.log("afterAd called"), window.adCompleteSoResume()
          },
          adBreakDone: HS => {
            console.log("adBreakDone called", HS), clearTimeout(tS), gS || (console.log("Haven't called onEnd yet, calling it from adBreakDone."), SS())
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);