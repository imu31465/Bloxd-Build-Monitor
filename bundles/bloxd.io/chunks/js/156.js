export const id = 156;
export const ids = [156];
export const modules = {
  8278: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      AdsenseForGamesSdkAdaptor: () => Ip
    });
    var Op = cp(1341),
      op = cp(1194);
    class Ip extends Op.b {
      constructor() {
        super(), this.name = "adsense"
      }
      static async setup() {
        return window.adsbygoogle = window.adsbygoogle || [], window.adBreak = window.adConfig = function(pp) {
          window.adsbygoogle.push(pp)
        }, window.adConfig({
          preloadAdBreaks: "on",
          sound: "on",
          onReady: () => {
            console.log("adsense for games ready")
          }
        }), await (0, op.b)("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", {
          "data-ad-client": "ca-pub-5991928098122027",
          "data-ad-frequency-hint": "120s",
          type: "text/javascript"
        }), console.log("Loaded adsense for games"), new Ip
      }
      playVideoAd(pp, ip) {
        console.log("playPreroll requested");
        let cp = !1;
        const Op = setTimeout((() => {
          console.log("Calling onEnd from timeout - window.adBreak did not respond after 3 seconds"), cp = !0, pp()
        }), 3e3);
        window.adBreak({
          type: "video_start" === ip ? "start" : "next",
          name: ip,
          beforeAd: () => {
            console.log("beforeAd called"), clearTimeout(Op), window.adStartSoPause(null, {
              preventMovement: !0
            })
          },
          afterAd: () => {
            console.log("afterAd called"), window.adCompleteSoResume()
          },
          adBreakDone: ip => {
            console.log("adBreakDone called", ip), clearTimeout(Op), cp || (console.log("Haven't called onEnd yet, calling it from adBreakDone."), pp())
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);