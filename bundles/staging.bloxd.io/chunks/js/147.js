export const id = 147;
export const ids = [147];
export const modules = {
  7810: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      AdsenseForGamesSdkAdaptor: () => iz
    });
    var Ez = bz(1288),
      nz = bz(1171);
    class iz extends Ez.b {
      constructor() {
        super(), this.name = "adsense"
      }
      static async setup() {
        return window.adsbygoogle = window.adsbygoogle || [], window.adBreak = window.adConfig = function(zz) {
          window.adsbygoogle.push(zz)
        }, window.adConfig({
          preloadAdBreaks: "on",
          sound: "on",
          onReady: () => {
            console.log("adsense for games ready")
          }
        }), await (0, nz.e)("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", {
          "data-ad-client": "ca-pub-5991928098122027",
          "data-ad-frequency-hint": "120s",
          type: "text/javascript"
        }), console.log("Loaded adsense for games"), new iz
      }
      playVideoAd(zz, uz) {
        console.log("playPreroll requested");
        let bz = !1;
        const Ez = setTimeout((() => {
          console.log("Calling onEnd from timeout - window.adBreak did not respond after 3 seconds"), bz = !0, zz()
        }), 3e3);
        window.adBreak({
          type: "video_start" === uz ? "start" : "next",
          name: uz,
          beforeAd: () => {
            console.log("beforeAd called"), clearTimeout(Ez), window.adStartSoPause(null, {
              preventMovement: !0
            })
          },
          afterAd: () => {
            console.log("afterAd called"), window.adCompleteSoResume()
          },
          adBreakDone: uz => {
            console.log("adBreakDone called", uz), clearTimeout(Ez), bz || (console.log("Haven't called onEnd yet, calling it from adBreakDone."), zz())
          }
        })
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);