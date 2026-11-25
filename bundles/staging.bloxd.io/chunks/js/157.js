export const id = 157;
export const ids = [157];
export const modules = {
  8369: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      AditudeSdkAdaptor: () => Xu
    });
    var su = ju(1364),
      Uu = ju(1227);
    const Zu = {
      video: "pb-slot-interstitial-video",
      rewarded: "pb-slot-rewarded-video"
    };
    class Xu extends su.b {
      constructor() {
        super(), this.name = "aditude"
      }
      static async setup() {
        return window.tude = window.tude || {
          cmd: []
        }, await (0, Uu.e)("https://edge.aditude.io/site/bloxd-Jf9xJheMSn/bloxd-longform/bloxd.io/prod/load.js"), new Xu
      }
      playVideoAd(uu, Eu) {
        this.playVideoOrRewarded("video", uu, uu)
      }
      playRewarded(uu, Eu) {
        this.playVideoOrRewarded("rewarded", uu, Eu)
      }
      renderBanner(uu) {
        const Eu = this.getBaseDivId(uu.adId, uu.width, uu.height);
        window.tude.cmd.push((function() {
          window.tude.refreshAdsViaDivMappings([{
            divId: uu.divId,
            baseDivId: Eu
          }])
        }))
      }
      getBaseDivId(uu, Eu, ju) {
        return `pb-slot-bloxdio-${Eu}-${ju}${uu>1?`-${uu}`:""}`
      }
      playVideoOrRewarded(uu, Eu, ju) {
        var su;
        let Uu = !1;
        const Xu = () => {
            document.getElementById("GenericVideoWrapper").style.display = "none", Uu = !0
          },
          lu = (uu, Eu) => {
            console.error(`AD: Error while playing Aditude video ad: ${uu}:`, Eu), Xu(), ju()
          };
        if (console.log(`AD: Requesting Aditude ${uu} ad`), void 0 === (null === (su = window.tude) || void 0 === su ? void 0 : su.requestInstreamPlayer)) return console.log(`AD: Aditude ad lib not loaded, no ${uu} ad playing`), void lu("Aditude ad lib not loaded", null);
        document.getElementById("GenericVideoWrapper").style.display = "flex", document.getElementById("GenericVideoInner").classList.add("AditudeVideo"), window.tude.cmd.push((function() {
          console.log("AD: Inside Aditude window.tude.cmd.push");
          try {
            window.tude.requestInstreamPlayer({
              code: Zu[uu],
              divId: "GenericVideoInner",
              mode: "adOnly"
            }).then((ju => {
              console.log("AD: Inside Aditude window.tude.requestInstreamPlayer.then"), ju.on("playerClose", ((ju, su) => {
                console.log("AD: Inside Aditude player.on playerClose"), console.log(`AD: Successfully finished Aditude ${uu} ad`), Xu(), Eu()
              })).on("adPrefetchError", ((uu, Eu) => {
                console.log("AD: Inside Aditude player.on adPrefetchError"), lu("Prefetch error", Eu)
              })).on("adError", ((uu, Eu) => {
                console.log("AD: Inside Aditude player.on adError"), lu("Generic error", Eu)
              }));
              const su = uu => {
                setTimeout((() => {
                  Uu || ju.setVideoVolume(.5)
                }), uu)
              };
              su(500), su(1e3), su(1500), su(2e3)
            })).catch((uu => {
              lu("Error occurred while requesting instream player", uu)
            }))
          } catch (ju) {
            lu("Failed to request instream player", ju)
          }
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);