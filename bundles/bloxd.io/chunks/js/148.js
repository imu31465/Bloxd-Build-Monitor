export const id = 148;
export const ids = [148];
export const modules = {
  7654: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      AditudeSdkAdaptor: () => Oz
    });
    var Fz = sz(1291),
      Wz = sz(1167);
    const Xz = {
      video: "pb-slot-interstitial-video",
      rewarded: "pb-slot-rewarded-video"
    };
    class Oz extends Fz.d {
      constructor() {
        super(), this.name = "aditude"
      }
      static async setup() {
        return window.tude = window.tude || {
          cmd: []
        }, await (0, Wz.c)("https://edge.aditude.io/site/bloxd-Jf9xJheMSn/bloxd-longform/bloxd.io/prod/load.js"), new Oz
      }
      playVideoAd(zz, tz) {
        this.playVideoOrRewarded("video", zz, zz)
      }
      playRewarded(zz, tz) {
        this.playVideoOrRewarded("rewarded", zz, tz)
      }
      renderBanner(zz) {
        const tz = this.getBaseDivId(zz.adId, zz.width, zz.height);
        window.tude.cmd.push((function() {
          window.tude.refreshAdsViaDivMappings([{
            divId: zz.divId,
            baseDivId: tz
          }])
        }))
      }
      getBaseDivId(zz, tz, sz) {
        return `pb-slot-bloxdio-${tz}-${sz}${zz>1?`-${zz}`:""}`
      }
      playVideoOrRewarded(zz, tz, sz) {
        var Fz;
        let Wz = !1;
        const Oz = () => {
            document.getElementById("GenericVideoWrapper").style.display = "none", Wz = !0
          },
          oz = (zz, tz) => {
            console.error(`AD: Error while playing Aditude video ad: ${zz}:`, tz), Oz(), sz()
          };
        if (console.log(`AD: Requesting Aditude ${zz} ad`), void 0 === (null === (Fz = window.tude) || void 0 === Fz ? void 0 : Fz.requestInstreamPlayer)) return console.log(`AD: Aditude ad lib not loaded, no ${zz} ad playing`), void oz("Aditude ad lib not loaded", null);
        document.getElementById("GenericVideoWrapper").style.display = "flex", document.getElementById("GenericVideoInner").classList.add("AditudeVideo"), window.tude.cmd.push((function() {
          console.log("AD: Inside Aditude window.tude.cmd.push");
          try {
            window.tude.requestInstreamPlayer({
              code: Xz[zz],
              divId: "GenericVideoInner",
              mode: "adOnly"
            }).then((sz => {
              console.log("AD: Inside Aditude window.tude.requestInstreamPlayer.then"), sz.on("playerClose", ((sz, Fz) => {
                console.log("AD: Inside Aditude player.on playerClose"), console.log(`AD: Successfully finished Aditude ${zz} ad`), Oz(), tz()
              })).on("adPrefetchError", ((zz, tz) => {
                console.log("AD: Inside Aditude player.on adPrefetchError"), oz("Prefetch error", tz)
              })).on("adError", ((zz, tz) => {
                console.log("AD: Inside Aditude player.on adError"), oz("Generic error", tz)
              }));
              const Fz = zz => {
                setTimeout((() => {
                  Wz || sz.setVideoVolume(.5)
                }), zz)
              };
              Fz(500), Fz(1e3), Fz(1500), Fz(2e3)
            })).catch((zz => {
              oz("Error occurred while requesting instream player", zz)
            }))
          } catch (sz) {
            oz("Failed to request instream player", sz)
          }
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);