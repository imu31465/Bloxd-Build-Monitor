export const id = 148;
export const ids = [148];
export const modules = {
  7835: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      AditudeSdkAdaptor: () => gv
    });
    var hv = Pv(1299),
      Sv = Pv(1164);
    const ev = {
      video: "pb-slot-interstitial-video",
      rewarded: "pb-slot-rewarded-video"
    };
    class gv extends hv.c {
      constructor() {
        super(), this.name = "aditude"
      }
      static async setup() {
        return window.tude = window.tude || {
          cmd: []
        }, await (0, Sv.d)("https://edge.aditude.io/site/bloxd-Jf9xJheMSn/bloxd-longform/bloxd.io/prod/load.js"), new gv
      }
      playVideoAd(vv, zv) {
        this.playVideoOrRewarded("video", vv, vv)
      }
      playRewarded(vv, zv) {
        this.playVideoOrRewarded("rewarded", vv, zv)
      }
      renderBanner(vv) {
        const zv = this.getBaseDivId(vv.adId, vv.width, vv.height);
        window.tude.cmd.push((function() {
          window.tude.refreshAdsViaDivMappings([{
            divId: vv.divId,
            baseDivId: zv
          }])
        }))
      }
      getBaseDivId(vv, zv, Pv) {
        return `pb-slot-bloxdio-${zv}-${Pv}${vv>1?`-${vv}`:""}`
      }
      playVideoOrRewarded(vv, zv, Pv) {
        var hv;
        let Sv = !1;
        const gv = () => {
            document.getElementById("GenericVideoWrapper").style.display = "none", Sv = !0
          },
          pv = (vv, zv) => {
            console.error(`AD: Error while playing Aditude video ad: ${vv}:`, zv), gv(), Pv()
          };
        if (console.log(`AD: Requesting Aditude ${vv} ad`), void 0 === (null === (hv = window.tude) || void 0 === hv ? void 0 : hv.requestInstreamPlayer)) return console.log(`AD: Aditude ad lib not loaded, no ${vv} ad playing`), void pv("Aditude ad lib not loaded", null);
        document.getElementById("GenericVideoWrapper").style.display = "flex", document.getElementById("GenericVideoInner").classList.add("AditudeVideo"), window.tude.cmd.push((function() {
          console.log("AD: Inside Aditude window.tude.cmd.push");
          try {
            window.tude.requestInstreamPlayer({
              code: ev[vv],
              divId: "GenericVideoInner",
              mode: "adOnly"
            }).then((Pv => {
              console.log("AD: Inside Aditude window.tude.requestInstreamPlayer.then"), Pv.on("playerClose", ((Pv, hv) => {
                console.log("AD: Inside Aditude player.on playerClose"), console.log(`AD: Successfully finished Aditude ${vv} ad`), gv(), zv()
              })).on("adPrefetchError", ((vv, zv) => {
                console.log("AD: Inside Aditude player.on adPrefetchError"), pv("Prefetch error", zv)
              })).on("adError", ((vv, zv) => {
                console.log("AD: Inside Aditude player.on adError"), pv("Generic error", zv)
              }));
              const hv = vv => {
                setTimeout((() => {
                  Sv || Pv.setVideoVolume(.5)
                }), vv)
              };
              hv(500), hv(1e3), hv(1500), hv(2e3)
            })).catch((vv => {
              pv("Error occurred while requesting instream player", vv)
            }))
          } catch (Pv) {
            pv("Failed to request instream player", Pv)
          }
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);