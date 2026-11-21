export const id = 148;
export const ids = [148];
export const modules = {
  7996: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      AdsenseForGamesSdkAdaptor: () => Wd
    });
    var pd = kd(1341),
      Nd = kd(1195);
    class Wd extends pd.d {
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
        }), await (0, Nd.c)("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", {
          "data-ad-client": "ca-pub-5991928098122027",
          "data-ad-frequency-hint": "120s",
          type: "text/javascript"
        }), console.log("Loaded adsense for games"), new Wd
      }
      playVideoAd(dd, Jd) {
        console.log("playPreroll requested");
        let kd = !1;
        const pd = setTimeout((() => {
          console.log("Calling onEnd from timeout - window.adBreak did not respond after 3 seconds"), kd = !0, dd()
        }), 3e3);
        window.adBreak({
          type: "video_start" === Jd ? "start" : "next",
          name: Jd,
          beforeAd: () => {
            console.log("beforeAd called"), clearTimeout(pd), window.adStartSoPause(null, {
              preventMovement: !0
            })
          },
          afterAd: () => {
            console.log("afterAd called"), window.adCompleteSoResume()
          },
          adBreakDone: Jd => {
            console.log("adBreakDone called", Jd), clearTimeout(pd), kd || (console.log("Haven't called onEnd yet, calling it from adBreakDone."), dd())
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);