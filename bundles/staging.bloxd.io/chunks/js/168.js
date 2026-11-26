export const id = 168;
export const ids = [168];
export const modules = {
  7295: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      AditudeSdkAdaptor: () => oB
    });
    var YB = GB(1341),
      DB = GB(1168);
    const QB = {
      video: "pb-slot-interstitial-video",
      rewarded: "pb-slot-rewarded-video"
    };
    class oB extends YB.c {
      constructor() {
        super(), this.name = "aditude"
      }
      static async setup() {
        return window.tude = window.tude || {
          cmd: []
        }, await (0, DB.b)("https://edge.aditude.io/site/bloxd-Jf9xJheMSn/bloxd-longform/bloxd.io/prod/load.js"), new oB
      }
      playVideoAd(BB, OB) {
        this.playVideoOrRewarded("video", BB, BB)
      }
      playRewarded(BB, OB) {
        this.playVideoOrRewarded("rewarded", BB, OB)
      }
      renderBanner(BB) {
        const OB = this.getBaseDivId(BB.adId, BB.width, BB.height);
        window.tude.cmd.push((function() {
          window.tude.refreshAdsViaDivMappings([{
            divId: BB.divId,
            baseDivId: OB
          }])
        }))
      }
      getBaseDivId(BB, OB, GB) {
        return `pb-slot-bloxdio-${OB}-${GB}${BB>1?`-${BB}`:""}`
      }
      playVideoOrRewarded(BB, OB, GB) {
        var YB;
        let DB = !1;
        const oB = () => {
            document.getElementById("GenericVideoWrapper").style.display = "none", DB = !0
          },
          jB = (BB, OB) => {
            console.error(`AD: Error while playing Aditude video ad: ${BB}:`, OB), oB(), GB()
          };
        if (console.log(`AD: Requesting Aditude ${BB} ad`), void 0 === (null === (YB = window.tude) || void 0 === YB ? void 0 : YB.requestInstreamPlayer)) return console.log(`AD: Aditude ad lib not loaded, no ${BB} ad playing`), void jB("Aditude ad lib not loaded", null);
        document.getElementById("GenericVideoWrapper").style.display = "flex", document.getElementById("GenericVideoInner").classList.add("AditudeVideo"), window.tude.cmd.push((function() {
          console.log("AD: Inside Aditude window.tude.cmd.push");
          try {
            window.tude.requestInstreamPlayer({
              code: QB[BB],
              divId: "GenericVideoInner",
              mode: "adOnly"
            }).then((GB => {
              console.log("AD: Inside Aditude window.tude.requestInstreamPlayer.then"), GB.on("playerClose", ((GB, YB) => {
                console.log("AD: Inside Aditude player.on playerClose"), console.log(`AD: Successfully finished Aditude ${BB} ad`), oB(), OB()
              })).on("adPrefetchError", ((BB, OB) => {
                console.log("AD: Inside Aditude player.on adPrefetchError"), jB("Prefetch error", OB)
              })).on("adError", ((BB, OB) => {
                console.log("AD: Inside Aditude player.on adError"), jB("Generic error", OB)
              }));
              const YB = BB => {
                setTimeout((() => {
                  DB || GB.setVideoVolume(.5)
                }), BB)
              };
              YB(500), YB(1e3), YB(1500), YB(2e3)
            })).catch((BB => {
              jB("Error occurred while requesting instream player", BB)
            }))
          } catch (GB) {
            jB("Failed to request instream player", GB)
          }
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);