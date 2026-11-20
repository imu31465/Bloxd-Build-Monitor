export const id = 147;
export const ids = [147];
export const modules = {
  7716: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      AdsenseForGamesSdkAdaptor: () => Tb
    });
    var Ab = Ub(1240),
      Mb = Ub(1118);
    class Tb extends Ab.d {
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
        }), await (0, Mb.b)("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", {
          "data-ad-client": "ca-pub-5991928098122027",
          "data-ad-frequency-hint": "120s",
          type: "text/javascript"
        }), console.log("Loaded adsense for games"), new Tb
      }
      playVideoAd(bb, ab) {
        console.log("playPreroll requested");
        let Ub = !1;
        const Ab = setTimeout((() => {
          console.log("Calling onEnd from timeout - window.adBreak did not respond after 3 seconds"), Ub = !0, bb()
        }), 3e3);
        window.adBreak({
          type: "video_start" === ab ? "start" : "next",
          name: ab,
          beforeAd: () => {
            console.log("beforeAd called"), clearTimeout(Ab), window.adStartSoPause(null, {
              preventMovement: !0
            })
          },
          afterAd: () => {
            console.log("afterAd called"), window.adCompleteSoResume()
          },
          adBreakDone: ab => {
            console.log("adBreakDone called", ab), clearTimeout(Ab), Ub || (console.log("Haven't called onEnd yet, calling it from adBreakDone."), bb())
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);