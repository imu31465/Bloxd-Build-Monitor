export const id = 141;
export const ids = [141];
export const modules = {
  7301: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      AditudeSdkAdaptor: () => Zy
    });
    var Uy = Wy(1169),
      hy = Wy(1029);
    const fy = {
      video: "pb-slot-interstitial-video",
      rewarded: "pb-slot-rewarded-video"
    };
    class Zy extends Uy.b {
      constructor() {
        super(), this.name = "aditude"
      }
      static async setup() {
        return window.tude = window.tude || {
          cmd: []
        }, await (0, hy.b)("https://edge.aditude.io/site/bloxd-Jf9xJheMSn/bloxd-longform/bloxd.io/prod/load.js"), new Zy
      }
      playVideoAd(yb, bb) {
        this.playVideoOrRewarded("video", yb, yb)
      }
      playRewarded(yb, bb) {
        this.playVideoOrRewarded("rewarded", yb, bb)
      }
      renderBanner(yb) {
        const bb = this.getBaseDivId(yb.adId, yb.width, yb.height);
        window.tude.cmd.push((function() {
          window.tude.refreshAdsViaDivMappings([{
            divId: yb.divId,
            baseDivId: bb
          }])
        }))
      }
      getBaseDivId(yb, bb, Wy) {
        return `pb-slot-bloxdio-${bb}-${Wy}${yb>1?`-${yb}`:""}`
      }
      playVideoOrRewarded(yb, bb, Wy) {
        var Uy;
        let hy = !1;
        const Zy = () => {
            document.getElementById("GenericVideoWrapper").style.display = "none", hy = !0
          },
          cb = (yb, bb) => {
            console.error(`AD: Error while playing Aditude video ad: ${yb}:`, bb), Zy(), Wy()
          };
        if (console.log(`AD: Requesting Aditude ${yb} ad`), void 0 === (null === (Uy = window.tude) || void 0 === Uy ? void 0 : Uy.requestInstreamPlayer)) return console.log(`AD: Aditude ad lib not loaded, no ${yb} ad playing`), void cb("Aditude ad lib not loaded", null);
        document.getElementById("GenericVideoWrapper").style.display = "flex", document.getElementById("GenericVideoInner").classList.add("AditudeVideo"), window.tude.cmd.push((function() {
          console.log("AD: Inside Aditude window.tude.cmd.push");
          try {
            window.tude.requestInstreamPlayer({
              code: fy[yb],
              divId: "GenericVideoInner",
              mode: "adOnly"
            }).then((Wy => {
              console.log("AD: Inside Aditude window.tude.requestInstreamPlayer.then"), Wy.on("playerClose", ((Wy, Uy) => {
                console.log("AD: Inside Aditude player.on playerClose"), console.log(`AD: Successfully finished Aditude ${yb} ad`), Zy(), bb()
              })).on("adPrefetchError", ((yb, bb) => {
                console.log("AD: Inside Aditude player.on adPrefetchError"), cb("Prefetch error", bb)
              })).on("adError", ((yb, bb) => {
                console.log("AD: Inside Aditude player.on adError"), cb("Generic error", bb)
              }));
              const Uy = yb => {
                setTimeout((() => {
                  hy || Wy.setVideoVolume(.5)
                }), yb)
              };
              Uy(500), Uy(1e3), Uy(1500), Uy(2e3)
            })).catch((yb => {
              cb("Error occurred while requesting instream player", yb)
            }))
          } catch (Wy) {
            cb("Failed to request instream player", Wy)
          }
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);