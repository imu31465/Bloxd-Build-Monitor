export const id = 148;
export const ids = [148];
export const modules = {
  7792: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      AditudeSdkAdaptor: () => Xk
    });
    var Rk = Bk(1262),
      tk = Bk(1139);
    const ak = {
      video: "pb-slot-interstitial-video",
      rewarded: "pb-slot-rewarded-video"
    };
    class Xk extends Rk.d {
      constructor() {
        super(), this.name = "aditude"
      }
      static async setup() {
        return window.tude = window.tude || {
          cmd: []
        }, await (0, tk.b)("https://edge.aditude.io/site/bloxd-Jf9xJheMSn/bloxd-longform/bloxd.io/prod/load.js"), new Xk
      }
      playVideoAd(kk, Fk) {
        this.playVideoOrRewarded("video", kk, kk)
      }
      playRewarded(kk, Fk) {
        this.playVideoOrRewarded("rewarded", kk, Fk)
      }
      renderBanner(kk) {
        const Fk = this.getBaseDivId(kk.adId, kk.width, kk.height);
        window.tude.cmd.push((function() {
          window.tude.refreshAdsViaDivMappings([{
            divId: kk.divId,
            baseDivId: Fk
          }])
        }))
      }
      getBaseDivId(kk, Fk, Bk) {
        return `pb-slot-bloxdio-${Fk}-${Bk}${kk>1?`-${kk}`:""}`
      }
      playVideoOrRewarded(kk, Fk, Bk) {
        var Rk;
        let tk = !1;
        const Xk = () => {
            document.getElementById("GenericVideoWrapper").style.display = "none", tk = !0
          },
          bk = (kk, Fk) => {
            console.error(`AD: Error while playing Aditude video ad: ${kk}:`, Fk), Xk(), Bk()
          };
        if (console.log(`AD: Requesting Aditude ${kk} ad`), void 0 === (null === (Rk = window.tude) || void 0 === Rk ? void 0 : Rk.requestInstreamPlayer)) return console.log(`AD: Aditude ad lib not loaded, no ${kk} ad playing`), void bk("Aditude ad lib not loaded", null);
        document.getElementById("GenericVideoWrapper").style.display = "flex", document.getElementById("GenericVideoInner").classList.add("AditudeVideo"), window.tude.cmd.push((function() {
          console.log("AD: Inside Aditude window.tude.cmd.push");
          try {
            window.tude.requestInstreamPlayer({
              code: ak[kk],
              divId: "GenericVideoInner",
              mode: "adOnly"
            }).then((Bk => {
              console.log("AD: Inside Aditude window.tude.requestInstreamPlayer.then"), Bk.on("playerClose", ((Bk, Rk) => {
                console.log("AD: Inside Aditude player.on playerClose"), console.log(`AD: Successfully finished Aditude ${kk} ad`), Xk(), Fk()
              })).on("adPrefetchError", ((kk, Fk) => {
                console.log("AD: Inside Aditude player.on adPrefetchError"), bk("Prefetch error", Fk)
              })).on("adError", ((kk, Fk) => {
                console.log("AD: Inside Aditude player.on adError"), bk("Generic error", Fk)
              }));
              const Rk = kk => {
                setTimeout((() => {
                  tk || Bk.setVideoVolume(.5)
                }), kk)
              };
              Rk(500), Rk(1e3), Rk(1500), Rk(2e3)
            })).catch((kk => {
              bk("Error occurred while requesting instream player", kk)
            }))
          } catch (Bk) {
            bk("Failed to request instream player", Bk)
          }
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);