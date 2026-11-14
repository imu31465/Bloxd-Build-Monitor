export const id = 140;
export const ids = [140];
export const modules = {
  7024: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      AditudeSdkAdaptor: () => uc
    });
    var Vc = nc(1168),
      Ic = nc(1040);
    const rB = {
      video: "pb-slot-interstitial-video",
      rewarded: "pb-slot-rewarded-video"
    };
    class uc extends Vc.e {
      constructor() {
        super(), this.name = "aditude"
      }
      static async setup() {
        return window.tude = window.tude || {
          cmd: []
        }, await (0, Ic.b)("https://edge.aditude.io/site/bloxd-Jf9xJheMSn/bloxd-longform/bloxd.io/prod/load.js"), new uc
      }
      playVideoAd(cB, Bc) {
        this.playVideoOrRewarded("video", cB, cB)
      }
      playRewarded(cB, Bc) {
        this.playVideoOrRewarded("rewarded", cB, Bc)
      }
      renderBanner(cB) {
        const Bc = this.getBaseDivId(cB.adId, cB.width, cB.height);
        window.tude.cmd.push((function() {
          window.tude.refreshAdsViaDivMappings([{
            divId: cB.divId,
            baseDivId: Bc
          }])
        }))
      }
      getBaseDivId(cB, Bc, nc) {
        return `pb-slot-bloxdio-${Bc}-${nc}${cB>1?`-${cB}`:""}`
      }
      playVideoOrRewarded(cB, Bc, nc) {
        var Vc;
        let Ic = !1;
        const uc = () => {
            document.getElementById("GenericVideoWrapper").style.display = "none", Ic = !0
          },
          sc = (cB, Bc) => {
            console.error(`AD: Error while playing Aditude video ad: ${cB}:`, Bc), uc(), nc()
          };
        if (console.log(`AD: Requesting Aditude ${cB} ad`), void 0 === (null === (Vc = window.tude) || void 0 === Vc ? void 0 : Vc.requestInstreamPlayer)) return console.log(`AD: Aditude ad lib not loaded, no ${cB} ad playing`), void sc("Aditude ad lib not loaded", null);
        document.getElementById("GenericVideoWrapper").style.display = "flex", document.getElementById("GenericVideoInner").classList.add("AditudeVideo"), window.tude.cmd.push((function() {
          console.log("AD: Inside Aditude window.tude.cmd.push");
          try {
            window.tude.requestInstreamPlayer({
              code: rB[cB],
              divId: "GenericVideoInner",
              mode: "adOnly"
            }).then((nc => {
              console.log("AD: Inside Aditude window.tude.requestInstreamPlayer.then"), nc.on("playerClose", ((nc, Vc) => {
                console.log("AD: Inside Aditude player.on playerClose"), console.log(`AD: Successfully finished Aditude ${cB} ad`), uc(), Bc()
              })).on("adPrefetchError", ((cB, Bc) => {
                console.log("AD: Inside Aditude player.on adPrefetchError"), sc("Prefetch error", Bc)
              })).on("adError", ((cB, Bc) => {
                console.log("AD: Inside Aditude player.on adError"), sc("Generic error", Bc)
              }));
              const Vc = cB => {
                setTimeout((() => {
                  Ic || nc.setVideoVolume(.5)
                }), cB)
              };
              Vc(500), Vc(1e3), Vc(1500), Vc(2e3)
            })).catch((cB => {
              sc("Error occurred while requesting instream player", cB)
            }))
          } catch (nc) {
            sc("Failed to request instream player", nc)
          }
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);