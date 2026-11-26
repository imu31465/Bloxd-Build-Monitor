export const id = 167;
export const ids = [167];
export const modules = {
  7306: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      AdsenseForGamesSdkAdaptor: () => UV
    });
    var JV = xV(1389),
      YV = xV(1213);
    class UV extends JV.b {
      constructor() {
        super(), this.name = "adsense"
      }
      static async setup() {
        return window.adsbygoogle = window.adsbygoogle || [], window.adBreak = window.adConfig = function(VV) {
          window.adsbygoogle.push(VV)
        }, window.adConfig({
          preloadAdBreaks: "on",
          sound: "on",
          onReady: () => {
            console.log("adsense for games ready")
          }
        }), await (0, YV.d)("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", {
          "data-ad-client": "ca-pub-5991928098122027",
          "data-ad-frequency-hint": "120s",
          type: "text/javascript"
        }), console.log("Loaded adsense for games"), new UV
      }
      playVideoAd(VV, eV) {
        console.log("playPreroll requested");
        let xV = !1;
        const JV = setTimeout((() => {
          console.log("Calling onEnd from timeout - window.adBreak did not respond after 3 seconds"), xV = !0, VV()
        }), 3e3);
        window.adBreak({
          type: "video_start" === eV ? "start" : "next",
          name: eV,
          beforeAd: () => {
            console.log("beforeAd called"), clearTimeout(JV), window.adStartSoPause(null, {
              preventMovement: !0
            })
          },
          afterAd: () => {
            console.log("afterAd called"), window.adCompleteSoResume()
          },
          adBreakDone: eV => {
            console.log("adBreakDone called", eV), clearTimeout(JV), xV || (console.log("Haven't called onEnd yet, calling it from adBreakDone."), VV())
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);