export const id = 149;
export const ids = [149];
export const modules = {
  8002: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      AditudeSdkAdaptor: () => Pd
    });
    var pd = kd(1341),
      Nd = kd(1195);
    const Wd = {
      video: "pb-slot-interstitial-video",
      rewarded: "pb-slot-rewarded-video"
    };
    class Pd extends pd.d {
      constructor() {
        super(), this.name = "aditude"
      }
      static async setup() {
        return window.tude = window.tude || {
          cmd: []
        }, await (0, Nd.c)("https://edge.aditude.io/site/bloxd-Jf9xJheMSn/bloxd-longform/bloxd.io/prod/load.js"), new Pd
      }
      playVideoAd(dd, Jd) {
        this.playVideoOrRewarded("video", dd, dd)
      }
      playRewarded(dd, Jd) {
        this.playVideoOrRewarded("rewarded", dd, Jd)
      }
      renderBanner(dd) {
        const Jd = this.getBaseDivId(dd.adId, dd.width, dd.height);
        window.tude.cmd.push((function() {
          window.tude.refreshAdsViaDivMappings([{
            divId: dd.divId,
            baseDivId: Jd
          }])
        }))
      }
      getBaseDivId(dd, Jd, kd) {
        return `pb-slot-bloxdio-${Jd}-${kd}${dd>1?`-${dd}`:""}`
      }
      playVideoOrRewarded(dd, Jd, kd) {
        var pd;
        let Nd = !1;
        const Pd = () => {
            document.getElementById("GenericVideoWrapper").style.display = "none", Nd = !0
          },
          Zd = (dd, Jd) => {
            console.error(`AD: Error while playing Aditude video ad: ${dd}:`, Jd), Pd(), kd()
          };
        if (console.log(`AD: Requesting Aditude ${dd} ad`), void 0 === (null === (pd = window.tude) || void 0 === pd ? void 0 : pd.requestInstreamPlayer)) return console.log(`AD: Aditude ad lib not loaded, no ${dd} ad playing`), void Zd("Aditude ad lib not loaded", null);
        document.getElementById("GenericVideoWrapper").style.display = "flex", document.getElementById("GenericVideoInner").classList.add("AditudeVideo"), window.tude.cmd.push((function() {
          console.log("AD: Inside Aditude window.tude.cmd.push");
          try {
            window.tude.requestInstreamPlayer({
              code: Wd[dd],
              divId: "GenericVideoInner",
              mode: "adOnly"
            }).then((kd => {
              console.log("AD: Inside Aditude window.tude.requestInstreamPlayer.then"), kd.on("playerClose", ((kd, pd) => {
                console.log("AD: Inside Aditude player.on playerClose"), console.log(`AD: Successfully finished Aditude ${dd} ad`), Pd(), Jd()
              })).on("adPrefetchError", ((dd, Jd) => {
                console.log("AD: Inside Aditude player.on adPrefetchError"), Zd("Prefetch error", Jd)
              })).on("adError", ((dd, Jd) => {
                console.log("AD: Inside Aditude player.on adError"), Zd("Generic error", Jd)
              }));
              const pd = dd => {
                setTimeout((() => {
                  Nd || kd.setVideoVolume(.5)
                }), dd)
              };
              pd(500), pd(1e3), pd(1500), pd(2e3)
            })).catch((dd => {
              Zd("Error occurred while requesting instream player", dd)
            }))
          } catch (kd) {
            Zd("Failed to request instream player", kd)
          }
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);