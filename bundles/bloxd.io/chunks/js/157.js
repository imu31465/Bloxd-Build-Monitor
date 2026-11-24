export const id = 157;
export const ids = [157];
export const modules = {
  8362: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      AditudeSdkAdaptor: () => mt
    });
    var Ot = Vt(1419),
      qt = Vt(1275);
    const Dt = {
      video: "pb-slot-interstitial-video",
      rewarded: "pb-slot-rewarded-video"
    };
    class mt extends Ot.e {
      constructor() {
        super(), this.name = "aditude"
      }
      static async setup() {
        return window.tude = window.tude || {
          cmd: []
        }, await (0, qt.d)("https://edge.aditude.io/site/bloxd-Jf9xJheMSn/bloxd-longform/bloxd.io/prod/load.js"), new mt
      }
      playVideoAd(tt, et) {
        this.playVideoOrRewarded("video", tt, tt)
      }
      playRewarded(tt, et) {
        this.playVideoOrRewarded("rewarded", tt, et)
      }
      renderBanner(tt) {
        const et = this.getBaseDivId(tt.adId, tt.width, tt.height);
        window.tude.cmd.push((function() {
          window.tude.refreshAdsViaDivMappings([{
            divId: tt.divId,
            baseDivId: et
          }])
        }))
      }
      getBaseDivId(tt, et, Vt) {
        return `pb-slot-bloxdio-${et}-${Vt}${tt>1?`-${tt}`:""}`
      }
      playVideoOrRewarded(tt, et, Vt) {
        var Ot;
        let qt = !1;
        const mt = () => {
            document.getElementById("GenericVideoWrapper").style.display = "none", qt = !0
          },
          dt = (tt, et) => {
            console.error(`AD: Error while playing Aditude video ad: ${tt}:`, et), mt(), Vt()
          };
        if (console.log(`AD: Requesting Aditude ${tt} ad`), void 0 === (null === (Ot = window.tude) || void 0 === Ot ? void 0 : Ot.requestInstreamPlayer)) return console.log(`AD: Aditude ad lib not loaded, no ${tt} ad playing`), void dt("Aditude ad lib not loaded", null);
        document.getElementById("GenericVideoWrapper").style.display = "flex", document.getElementById("GenericVideoInner").classList.add("AditudeVideo"), window.tude.cmd.push((function() {
          console.log("AD: Inside Aditude window.tude.cmd.push");
          try {
            window.tude.requestInstreamPlayer({
              code: Dt[tt],
              divId: "GenericVideoInner",
              mode: "adOnly"
            }).then((Vt => {
              console.log("AD: Inside Aditude window.tude.requestInstreamPlayer.then"), Vt.on("playerClose", ((Vt, Ot) => {
                console.log("AD: Inside Aditude player.on playerClose"), console.log(`AD: Successfully finished Aditude ${tt} ad`), mt(), et()
              })).on("adPrefetchError", ((tt, et) => {
                console.log("AD: Inside Aditude player.on adPrefetchError"), dt("Prefetch error", et)
              })).on("adError", ((tt, et) => {
                console.log("AD: Inside Aditude player.on adError"), dt("Generic error", et)
              }));
              const Ot = tt => {
                setTimeout((() => {
                  qt || Vt.setVideoVolume(.5)
                }), tt)
              };
              Ot(500), Ot(1e3), Ot(1500), Ot(2e3)
            })).catch((tt => {
              dt("Error occurred while requesting instream player", tt)
            }))
          } catch (Vt) {
            dt("Failed to request instream player", Vt)
          }
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);