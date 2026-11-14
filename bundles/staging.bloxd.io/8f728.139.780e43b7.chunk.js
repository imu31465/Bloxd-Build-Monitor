export const id = 139;
export const ids = [139];
export const modules = {
  7019: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      AdsenseForGamesSdkAdaptor: () => rB
    });
    var Vc = nc(1168),
      Ic = nc(1040);
    class rB extends Vc.e {
      constructor() {
        super(), this.name = "adsense"
      }
      static async setup() {
        return window.adsbygoogle = window.adsbygoogle || [], window.adBreak = window.adConfig = function(cB) {
          window.adsbygoogle.push(cB)
        }, window.adConfig({
          preloadAdBreaks: "on",
          sound: "on",
          onReady: () => {
            console.log("adsense for games ready")
          }
        }), await (0, Ic.b)("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", {
          "data-ad-client": "ca-pub-5991928098122027",
          "data-ad-frequency-hint": "120s",
          type: "text/javascript"
        }), console.log("Loaded adsense for games"), new rB
      }
      playVideoAd(cB, Bc) {
        console.log("playPreroll requested");
        let nc = !1;
        const Vc = setTimeout((() => {
          console.log("Calling onEnd from timeout - window.adBreak did not respond after 3 seconds"), nc = !0, cB()
        }), 3e3);
        window.adBreak({
          type: "video_start" === Bc ? "start" : "next",
          name: Bc,
          beforeAd: () => {
            console.log("beforeAd called"), clearTimeout(Vc), window.adStartSoPause(null, {
              preventMovement: !0
            })
          },
          afterAd: () => {
            console.log("afterAd called"), window.adCompleteSoResume()
          },
          adBreakDone: Bc => {
            console.log("adBreakDone called", Bc), clearTimeout(Vc), nc || (console.log("Haven't called onEnd yet, calling it from adBreakDone."), cB())
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);