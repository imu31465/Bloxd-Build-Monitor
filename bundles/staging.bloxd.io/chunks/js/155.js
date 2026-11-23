export const id = 155;
export const ids = [155];
export const modules = {
  8124: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      AditudeSdkAdaptor: () => yk
    });
    var Xk = Ik(1295),
      Tk = Ik(1173);
    const ik = {
      video: "pb-slot-interstitial-video",
      rewarded: "pb-slot-rewarded-video"
    };
    class yk extends Xk.d {
      constructor() {
        super(), this.name = "aditude"
      }
      static async setup() {
        return window.tude = window.tude || {
          cmd: []
        }, await (0, Tk.d)("https://edge.aditude.io/site/bloxd-Jf9xJheMSn/bloxd-longform/bloxd.io/prod/load.js"), new yk
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
      getBaseDivId(kk, Fk, Ik) {
        return `pb-slot-bloxdio-${Fk}-${Ik}${kk>1?`-${kk}`:""}`
      }
      playVideoOrRewarded(kk, Fk, Ik) {
        var Xk;
        let Tk = !1;
        const yk = () => {
            document.getElementById("GenericVideoWrapper").style.display = "none", Tk = !0
          },
          lk = (kk, Fk) => {
            console.error(`AD: Error while playing Aditude video ad: ${kk}:`, Fk), yk(), Ik()
          };
        if (console.log(`AD: Requesting Aditude ${kk} ad`), void 0 === (null === (Xk = window.tude) || void 0 === Xk ? void 0 : Xk.requestInstreamPlayer)) return console.log(`AD: Aditude ad lib not loaded, no ${kk} ad playing`), void lk("Aditude ad lib not loaded", null);
        document.getElementById("GenericVideoWrapper").style.display = "flex", document.getElementById("GenericVideoInner").classList.add("AditudeVideo"), window.tude.cmd.push((function() {
          console.log("AD: Inside Aditude window.tude.cmd.push");
          try {
            window.tude.requestInstreamPlayer({
              code: ik[kk],
              divId: "GenericVideoInner",
              mode: "adOnly"
            }).then((Ik => {
              console.log("AD: Inside Aditude window.tude.requestInstreamPlayer.then"), Ik.on("playerClose", ((Ik, Xk) => {
                console.log("AD: Inside Aditude player.on playerClose"), console.log(`AD: Successfully finished Aditude ${kk} ad`), yk(), Fk()
              })).on("adPrefetchError", ((kk, Fk) => {
                console.log("AD: Inside Aditude player.on adPrefetchError"), lk("Prefetch error", Fk)
              })).on("adError", ((kk, Fk) => {
                console.log("AD: Inside Aditude player.on adError"), lk("Generic error", Fk)
              }));
              const Xk = kk => {
                setTimeout((() => {
                  Tk || Ik.setVideoVolume(.5)
                }), kk)
              };
              Xk(500), Xk(1e3), Xk(1500), Xk(2e3)
            })).catch((kk => {
              lk("Error occurred while requesting instream player", kk)
            }))
          } catch (Ik) {
            lk("Failed to request instream player", Ik)
          }
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);