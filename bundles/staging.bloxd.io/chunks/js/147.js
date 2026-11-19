export const id = 147;
export const ids = [147];
export const modules = {
  7814: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      AdsenseForGamesSdkAdaptor: () => iD
    });
    var ID = cD(1308),
      pD = cD(1181);
    class iD extends ID.e {
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
        }), await (0, pD.e)("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", {
          "data-ad-client": "ca-pub-5991928098122027",
          "data-ad-frequency-hint": "120s",
          type: "text/javascript"
        }), console.log("Loaded adsense for games"), new iD
      }
      playVideoAd(DD, CD) {
        console.log("playPreroll requested");
        let cD = !1;
        const ID = setTimeout((() => {
          console.log("Calling onEnd from timeout - window.adBreak did not respond after 3 seconds"), cD = !0, DD()
        }), 3e3);
        window.adBreak({
          type: "video_start" === CD ? "start" : "next",
          name: CD,
          beforeAd: () => {
            console.log("beforeAd called"), clearTimeout(ID), window.adStartSoPause(null, {
              preventMovement: !0
            })
          },
          afterAd: () => {
            console.log("afterAd called"), window.adCompleteSoResume()
          },
          adBreakDone: CD => {
            console.log("adBreakDone called", CD), clearTimeout(ID), cD || (console.log("Haven't called onEnd yet, calling it from adBreakDone."), DD())
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);