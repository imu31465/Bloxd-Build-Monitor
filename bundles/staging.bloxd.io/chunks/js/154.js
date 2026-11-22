export const id = 154;
export const ids = [154];
export const modules = {
  7961: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      AditudeSdkAdaptor: () => bk
    });
    var Dk = ik(1298),
      fk = ik(1163);
    const Sk = {
      video: "pb-slot-interstitial-video",
      rewarded: "pb-slot-rewarded-video"
    };
    class bk extends Dk.e {
      constructor() {
        super(), this.name = "aditude"
      }
      static async setup() {
        return window.tude = window.tude || {
          cmd: []
        }, await (0, fk.d)("https://edge.aditude.io/site/bloxd-Jf9xJheMSn/bloxd-longform/bloxd.io/prod/load.js"), new bk
      }
      playVideoAd(kk, ek) {
        this.playVideoOrRewarded("video", kk, kk)
      }
      playRewarded(kk, ek) {
        this.playVideoOrRewarded("rewarded", kk, ek)
      }
      renderBanner(kk) {
        const ek = this.getBaseDivId(kk.adId, kk.width, kk.height);
        window.tude.cmd.push((function() {
          window.tude.refreshAdsViaDivMappings([{
            divId: kk.divId,
            baseDivId: ek
          }])
        }))
      }
      getBaseDivId(kk, ek, ik) {
        return `pb-slot-bloxdio-${ek}-${ik}${kk>1?`-${kk}`:""}`
      }
      playVideoOrRewarded(kk, ek, ik) {
        var Dk;
        let fk = !1;
        const bk = () => {
            document.getElementById("GenericVideoWrapper").style.display = "none", fk = !0
          },
          rk = (kk, ek) => {
            console.error(`AD: Error while playing Aditude video ad: ${kk}:`, ek), bk(), ik()
          };
        if (console.log(`AD: Requesting Aditude ${kk} ad`), void 0 === (null === (Dk = window.tude) || void 0 === Dk ? void 0 : Dk.requestInstreamPlayer)) return console.log(`AD: Aditude ad lib not loaded, no ${kk} ad playing`), void rk("Aditude ad lib not loaded", null);
        document.getElementById("GenericVideoWrapper").style.display = "flex", document.getElementById("GenericVideoInner").classList.add("AditudeVideo"), window.tude.cmd.push((function() {
          console.log("AD: Inside Aditude window.tude.cmd.push");
          try {
            window.tude.requestInstreamPlayer({
              code: Sk[kk],
              divId: "GenericVideoInner",
              mode: "adOnly"
            }).then((ik => {
              console.log("AD: Inside Aditude window.tude.requestInstreamPlayer.then"), ik.on("playerClose", ((ik, Dk) => {
                console.log("AD: Inside Aditude player.on playerClose"), console.log(`AD: Successfully finished Aditude ${kk} ad`), bk(), ek()
              })).on("adPrefetchError", ((kk, ek) => {
                console.log("AD: Inside Aditude player.on adPrefetchError"), rk("Prefetch error", ek)
              })).on("adError", ((kk, ek) => {
                console.log("AD: Inside Aditude player.on adError"), rk("Generic error", ek)
              }));
              const Dk = kk => {
                setTimeout((() => {
                  fk || ik.setVideoVolume(.5)
                }), kk)
              };
              Dk(500), Dk(1e3), Dk(1500), Dk(2e3)
            })).catch((kk => {
              rk("Error occurred while requesting instream player", kk)
            }))
          } catch (ik) {
            rk("Failed to request instream player", ik)
          }
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);