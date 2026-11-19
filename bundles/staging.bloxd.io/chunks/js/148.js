export const id = 148;
export const ids = [148];
export const modules = {
  7817: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      AditudeSdkAdaptor: () => lz
    });
    var Ez = bz(1288),
      nz = bz(1171);
    const iz = {
      video: "pb-slot-interstitial-video",
      rewarded: "pb-slot-rewarded-video"
    };
    class lz extends Ez.b {
      constructor() {
        super(), this.name = "aditude"
      }
      static async setup() {
        return window.tude = window.tude || {
          cmd: []
        }, await (0, nz.e)("https://edge.aditude.io/site/bloxd-Jf9xJheMSn/bloxd-longform/bloxd.io/prod/load.js"), new lz
      }
      playVideoAd(zz, uz) {
        this.playVideoOrRewarded("video", zz, zz)
      }
      playRewarded(zz, uz) {
        this.playVideoOrRewarded("rewarded", zz, uz)
      }
      renderBanner(zz) {
        const uz = this.getBaseDivId(zz.adId, zz.width, zz.height);
        window.tude.cmd.push((function() {
          window.tude.refreshAdsViaDivMappings([{
            divId: zz.divId,
            baseDivId: uz
          }])
        }))
      }
      getBaseDivId(zz, uz, bz) {
        return `pb-slot-bloxdio-${uz}-${bz}${zz>1?`-${zz}`:""}`
      }
      playVideoOrRewarded(zz, uz, bz) {
        var Ez;
        let nz = !1;
        const lz = () => {
            document.getElementById("GenericVideoWrapper").style.display = "none", nz = !0
          },
          Mz = (zz, uz) => {
            console.error(`AD: Error while playing Aditude video ad: ${zz}:`, uz), lz(), bz()
          };
        if (console.log(`AD: Requesting Aditude ${zz} ad`), void 0 === (null === (Ez = window.tude) || void 0 === Ez ? void 0 : Ez.requestInstreamPlayer)) return console.log(`AD: Aditude ad lib not loaded, no ${zz} ad playing`), void Mz("Aditude ad lib not loaded", null);
        document.getElementById("GenericVideoWrapper").style.display = "flex", document.getElementById("GenericVideoInner").classList.add("AditudeVideo"), window.tude.cmd.push((function() {
          console.log("AD: Inside Aditude window.tude.cmd.push");
          try {
            window.tude.requestInstreamPlayer({
              code: iz[zz],
              divId: "GenericVideoInner",
              mode: "adOnly"
            }).then((bz => {
              console.log("AD: Inside Aditude window.tude.requestInstreamPlayer.then"), bz.on("playerClose", ((bz, Ez) => {
                console.log("AD: Inside Aditude player.on playerClose"), console.log(`AD: Successfully finished Aditude ${zz} ad`), lz(), uz()
              })).on("adPrefetchError", ((zz, uz) => {
                console.log("AD: Inside Aditude player.on adPrefetchError"), Mz("Prefetch error", uz)
              })).on("adError", ((zz, uz) => {
                console.log("AD: Inside Aditude player.on adError"), Mz("Generic error", uz)
              }));
              const Ez = zz => {
                setTimeout((() => {
                  nz || bz.setVideoVolume(.5)
                }), zz)
              };
              Ez(500), Ez(1e3), Ez(1500), Ez(2e3)
            })).catch((zz => {
              Mz("Error occurred while requesting instream player", zz)
            }))
          } catch (bz) {
            Mz("Failed to request instream player", bz)
          }
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);