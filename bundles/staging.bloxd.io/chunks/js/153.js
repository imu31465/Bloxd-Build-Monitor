export const id = 153;
export const ids = [153];
export const modules = {
  7957: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      AdsenseForGamesSdkAdaptor: () => Sk
    });
    var Dk = ik(1298),
      fk = ik(1163);
    class Sk extends Dk.e {
      constructor() {
        super(), this.name = "adsense"
      }
      static async setup() {
        return window.adsbygoogle = window.adsbygoogle || [], window.adBreak = window.adConfig = function(kk) {
          window.adsbygoogle.push(kk)
        }, window.adConfig({
          preloadAdBreaks: "on",
          sound: "on",
          onReady: () => {
            console.log("adsense for games ready")
          }
        }), await (0, fk.d)("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", {
          "data-ad-client": "ca-pub-5991928098122027",
          "data-ad-frequency-hint": "120s",
          type: "text/javascript"
        }), console.log("Loaded adsense for games"), new Sk
      }
      playVideoAd(kk, ek) {
        console.log("playPreroll requested");
        let ik = !1;
        const Dk = setTimeout((() => {
          console.log("Calling onEnd from timeout - window.adBreak did not respond after 3 seconds"), ik = !0, kk()
        }), 3e3);
        window.adBreak({
          type: "video_start" === ek ? "start" : "next",
          name: ek,
          beforeAd: () => {
            console.log("beforeAd called"), clearTimeout(Dk), window.adStartSoPause(null, {
              preventMovement: !0
            })
          },
          afterAd: () => {
            console.log("afterAd called"), window.adCompleteSoResume()
          },
          adBreakDone: ek => {
            console.log("adBreakDone called", ek), clearTimeout(Dk), ik || (console.log("Haven't called onEnd yet, calling it from adBreakDone."), kk())
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);