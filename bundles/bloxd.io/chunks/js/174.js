export const id = 174;
export const ids = [174];
export const modules = {
  7686: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      AdsenseForGamesSdkAdaptor: () => Rd
    });
    var Wd = md(1410),
      Fd = md(1229);
    class Rd extends Wd.b {
      constructor() {
        super(), this.name = "adsense"
      }
      static async setup() {
        return window.adsbygoogle = window.adsbygoogle || [], window.adBreak = window.adConfig = function(dd) {
          window.adsbygoogle.push(dd)
        }, window.adConfig({
          preloadAdBreaks: "on",
          sound: "on",
          onReady: () => {
            console.log("adsense for games ready")
          }
        }), await (0, Fd.d)("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", {
          "data-ad-client": "ca-pub-5991928098122027",
          "data-ad-frequency-hint": "120s",
          type: "text/javascript"
        }), console.log("Loaded adsense for games"), new Rd
      }
      playVideoAd(dd, Od) {
        console.log("playPreroll requested");
        let md = !1;
        const Wd = setTimeout((() => {
          console.log("Calling onEnd from timeout - window.adBreak did not respond after 3 seconds"), md = !0, dd()
        }), 3e3);
        window.adBreak({
          type: "video_start" === Od ? "start" : "next",
          name: Od,
          beforeAd: () => {
            console.log("beforeAd called"), clearTimeout(Wd), window.adStartSoPause(null, {
              preventMovement: !0
            })
          },
          afterAd: () => {
            console.log("afterAd called"), window.adCompleteSoResume()
          },
          adBreakDone: Od => {
            console.log("adBreakDone called", Od), clearTimeout(Wd), md || (console.log("Haven't called onEnd yet, calling it from adBreakDone."), dd())
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);