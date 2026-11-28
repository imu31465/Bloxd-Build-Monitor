export const id = 175;
export const ids = [175];
export const modules = {
  7952: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      AditudeSdkAdaptor: () => Vb
    });
    var eb = Mb(1440),
      Hb = Mb(1250);
    const pb = {
      video: "pb-slot-interstitial-video",
      rewarded: "pb-slot-rewarded-video"
    };
    class Vb extends eb.b {
      constructor() {
        super(), this.name = "aditude"
      }
      static async setup() {
        return window.tude = window.tude || {
          cmd: []
        }, await (0, Hb.c)("https://edge.aditude.io/site/bloxd-Jf9xJheMSn/bloxd-longform/bloxd.io/prod/load.js"), new Vb
      }
      playVideoAd(bb, wb) {
        this.playVideoOrRewarded("video", bb, bb)
      }
      playRewarded(bb, wb) {
        this.playVideoOrRewarded("rewarded", bb, wb)
      }
      renderBanner(bb) {
        const wb = this.getBaseDivId(bb.adId, bb.width, bb.height);
        window.tude.cmd.push((function() {
          window.tude.refreshAdsViaDivMappings([{
            divId: bb.divId,
            baseDivId: wb
          }])
        }))
      }
      getBaseDivId(bb, wb, Mb) {
        return `pb-slot-bloxdio-${wb}-${Mb}${bb>1?`-${bb}`:""}`
      }
      playVideoOrRewarded(bb, wb, Mb) {
        var eb;
        let Hb = !1;
        const Vb = () => {
            document.getElementById("GenericVideoWrapper").style.display = "none", Hb = !0
          },
          gb = (bb, wb) => {
            console.error(`AD: Error while playing Aditude video ad: ${bb}:`, wb), Vb(), Mb()
          };
        if (console.log(`AD: Requesting Aditude ${bb} ad`), void 0 === (null === (eb = window.tude) || void 0 === eb ? void 0 : eb.requestInstreamPlayer)) return console.log(`AD: Aditude ad lib not loaded, no ${bb} ad playing`), void gb("Aditude ad lib not loaded", null);
        document.getElementById("GenericVideoWrapper").style.display = "flex", document.getElementById("GenericVideoInner").classList.add("AditudeVideo"), window.tude.cmd.push((function() {
          console.log("AD: Inside Aditude window.tude.cmd.push");
          try {
            window.tude.requestInstreamPlayer({
              code: pb[bb],
              divId: "GenericVideoInner",
              mode: "adOnly"
            }).then((Mb => {
              console.log("AD: Inside Aditude window.tude.requestInstreamPlayer.then"), Mb.on("playerClose", ((Mb, eb) => {
                console.log("AD: Inside Aditude player.on playerClose"), console.log(`AD: Successfully finished Aditude ${bb} ad`), Vb(), wb()
              })).on("adPrefetchError", ((bb, wb) => {
                console.log("AD: Inside Aditude player.on adPrefetchError"), gb("Prefetch error", wb)
              })).on("adError", ((bb, wb) => {
                console.log("AD: Inside Aditude player.on adError"), gb("Generic error", wb)
              }));
              const eb = bb => {
                setTimeout((() => {
                  Hb || Mb.setVideoVolume(.5)
                }), bb)
              };
              eb(500), eb(1e3), eb(1500), eb(2e3)
            })).catch((bb => {
              gb("Error occurred while requesting instream player", bb)
            }))
          } catch (Mb) {
            gb("Failed to request instream player", Mb)
          }
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);