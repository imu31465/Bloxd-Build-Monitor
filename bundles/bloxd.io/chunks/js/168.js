export const id = 168;
export const ids = [168];
export const modules = {
  7386: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      AditudeSdkAdaptor: () => Ke
    });
    var ye = He(1300),
      be = He(1119);
    const Me = {
      video: "pb-slot-interstitial-video",
      rewarded: "pb-slot-rewarded-video"
    };
    class Ke extends ye.d {
      constructor() {
        super(), this.name = "aditude"
      }
      static async setup() {
        return window.tude = window.tude || {
          cmd: []
        }, await (0, be.b)("https://edge.aditude.io/site/bloxd-Jf9xJheMSn/bloxd-longform/bloxd.io/prod/load.js"), new Ke
      }
      playVideoAd(ee, ie) {
        this.playVideoOrRewarded("video", ee, ee)
      }
      playRewarded(ee, ie) {
        this.playVideoOrRewarded("rewarded", ee, ie)
      }
      renderBanner(ee) {
        const ie = this.getBaseDivId(ee.adId, ee.width, ee.height);
        window.tude.cmd.push((function() {
          window.tude.refreshAdsViaDivMappings([{
            divId: ee.divId,
            baseDivId: ie
          }])
        }))
      }
      getBaseDivId(ee, ie, He) {
        return `pb-slot-bloxdio-${ie}-${He}${ee>1?`-${ee}`:""}`
      }
      playVideoOrRewarded(ee, ie, He) {
        var ye;
        let be = !1;
        const Ke = () => {
            document.getElementById("GenericVideoWrapper").style.display = "none", be = !0
          },
          Ue = (ee, ie) => {
            console.error(`AD: Error while playing Aditude video ad: ${ee}:`, ie), Ke(), He()
          };
        if (console.log(`AD: Requesting Aditude ${ee} ad`), void 0 === (null === (ye = window.tude) || void 0 === ye ? void 0 : ye.requestInstreamPlayer)) return console.log(`AD: Aditude ad lib not loaded, no ${ee} ad playing`), void Ue("Aditude ad lib not loaded", null);
        document.getElementById("GenericVideoWrapper").style.display = "flex", document.getElementById("GenericVideoInner").classList.add("AditudeVideo"), window.tude.cmd.push((function() {
          console.log("AD: Inside Aditude window.tude.cmd.push");
          try {
            window.tude.requestInstreamPlayer({
              code: Me[ee],
              divId: "GenericVideoInner",
              mode: "adOnly"
            }).then((He => {
              console.log("AD: Inside Aditude window.tude.requestInstreamPlayer.then"), He.on("playerClose", ((He, ye) => {
                console.log("AD: Inside Aditude player.on playerClose"), console.log(`AD: Successfully finished Aditude ${ee} ad`), Ke(), ie()
              })).on("adPrefetchError", ((ee, ie) => {
                console.log("AD: Inside Aditude player.on adPrefetchError"), Ue("Prefetch error", ie)
              })).on("adError", ((ee, ie) => {
                console.log("AD: Inside Aditude player.on adError"), Ue("Generic error", ie)
              }));
              const ye = ee => {
                setTimeout((() => {
                  be || He.setVideoVolume(.5)
                }), ee)
              };
              ye(500), ye(1e3), ye(1500), ye(2e3)
            })).catch((ee => {
              Ue("Error occurred while requesting instream player", ee)
            }))
          } catch (He) {
            Ue("Failed to request instream player", He)
          }
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);