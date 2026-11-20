export const id = 148;
export const ids = [148];
export const modules = {
  7722: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      AditudeSdkAdaptor: () => Eb
    });
    var Ab = Ub(1240),
      Mb = Ub(1118);
    const Tb = {
      video: "pb-slot-interstitial-video",
      rewarded: "pb-slot-rewarded-video"
    };
    class Eb extends Ab.d {
      constructor() {
        super(), this.name = "aditude"
      }
      static async setup() {
        return window.tude = window.tude || {
          cmd: []
        }, await (0, Mb.b)("https://edge.aditude.io/site/bloxd-Jf9xJheMSn/bloxd-longform/bloxd.io/prod/load.js"), new Eb
      }
      playVideoAd(bb, ab) {
        this.playVideoOrRewarded("video", bb, bb)
      }
      playRewarded(bb, ab) {
        this.playVideoOrRewarded("rewarded", bb, ab)
      }
      renderBanner(bb) {
        const ab = this.getBaseDivId(bb.adId, bb.width, bb.height);
        window.tude.cmd.push((function() {
          window.tude.refreshAdsViaDivMappings([{
            divId: bb.divId,
            baseDivId: ab
          }])
        }))
      }
      getBaseDivId(bb, ab, Ub) {
        return `pb-slot-bloxdio-${ab}-${Ub}${bb>1?`-${bb}`:""}`
      }
      playVideoOrRewarded(bb, ab, Ub) {
        var Ab;
        let Mb = !1;
        const Eb = () => {
            document.getElementById("GenericVideoWrapper").style.display = "none", Mb = !0
          },
          Yb = (bb, ab) => {
            console.error(`AD: Error while playing Aditude video ad: ${bb}:`, ab), Eb(), Ub()
          };
        if (console.log(`AD: Requesting Aditude ${bb} ad`), void 0 === (null === (Ab = window.tude) || void 0 === Ab ? void 0 : Ab.requestInstreamPlayer)) return console.log(`AD: Aditude ad lib not loaded, no ${bb} ad playing`), void Yb("Aditude ad lib not loaded", null);
        document.getElementById("GenericVideoWrapper").style.display = "flex", document.getElementById("GenericVideoInner").classList.add("AditudeVideo"), window.tude.cmd.push((function() {
          console.log("AD: Inside Aditude window.tude.cmd.push");
          try {
            window.tude.requestInstreamPlayer({
              code: Tb[bb],
              divId: "GenericVideoInner",
              mode: "adOnly"
            }).then((Ub => {
              console.log("AD: Inside Aditude window.tude.requestInstreamPlayer.then"), Ub.on("playerClose", ((Ub, Ab) => {
                console.log("AD: Inside Aditude player.on playerClose"), console.log(`AD: Successfully finished Aditude ${bb} ad`), Eb(), ab()
              })).on("adPrefetchError", ((bb, ab) => {
                console.log("AD: Inside Aditude player.on adPrefetchError"), Yb("Prefetch error", ab)
              })).on("adError", ((bb, ab) => {
                console.log("AD: Inside Aditude player.on adError"), Yb("Generic error", ab)
              }));
              const Ab = bb => {
                setTimeout((() => {
                  Mb || Ub.setVideoVolume(.5)
                }), bb)
              };
              Ab(500), Ab(1e3), Ab(1500), Ab(2e3)
            })).catch((bb => {
              Yb("Error occurred while requesting instream player", bb)
            }))
          } catch (Ub) {
            Yb("Failed to request instream player", Ub)
          }
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);