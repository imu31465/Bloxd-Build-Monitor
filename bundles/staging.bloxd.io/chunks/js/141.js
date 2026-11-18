export const id = 141;
export const ids = [141];
export const modules = {
  7452: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      AditudeSdkAdaptor: () => XJ
    });
    var FJ = ZJ(1205),
      UJ = ZJ(1075);
    const eJ = {
      video: "pb-slot-interstitial-video",
      rewarded: "pb-slot-rewarded-video"
    };
    class XJ extends FJ.b {
      constructor() {
        super(), this.name = "aditude"
      }
      static async setup() {
        return window.tude = window.tude || {
          cmd: []
        }, await (0, UJ.e)("https://edge.aditude.io/site/bloxd-Jf9xJheMSn/bloxd-longform/bloxd.io/prod/load.js"), new XJ
      }
      playVideoAd(JJ, cJ) {
        this.playVideoOrRewarded("video", JJ, JJ)
      }
      playRewarded(JJ, cJ) {
        this.playVideoOrRewarded("rewarded", JJ, cJ)
      }
      renderBanner(JJ) {
        const cJ = this.getBaseDivId(JJ.adId, JJ.width, JJ.height);
        window.tude.cmd.push((function() {
          window.tude.refreshAdsViaDivMappings([{
            divId: JJ.divId,
            baseDivId: cJ
          }])
        }))
      }
      getBaseDivId(JJ, cJ, ZJ) {
        return `pb-slot-bloxdio-${cJ}-${ZJ}${JJ>1?`-${JJ}`:""}`
      }
      playVideoOrRewarded(JJ, cJ, ZJ) {
        var FJ;
        let UJ = !1;
        const XJ = () => {
            document.getElementById("GenericVideoWrapper").style.display = "none", UJ = !0
          },
          AJ = (JJ, cJ) => {
            console.error(`AD: Error while playing Aditude video ad: ${JJ}:`, cJ), XJ(), ZJ()
          };
        if (console.log(`AD: Requesting Aditude ${JJ} ad`), void 0 === (null === (FJ = window.tude) || void 0 === FJ ? void 0 : FJ.requestInstreamPlayer)) return console.log(`AD: Aditude ad lib not loaded, no ${JJ} ad playing`), void AJ("Aditude ad lib not loaded", null);
        document.getElementById("GenericVideoWrapper").style.display = "flex", document.getElementById("GenericVideoInner").classList.add("AditudeVideo"), window.tude.cmd.push((function() {
          console.log("AD: Inside Aditude window.tude.cmd.push");
          try {
            window.tude.requestInstreamPlayer({
              code: eJ[JJ],
              divId: "GenericVideoInner",
              mode: "adOnly"
            }).then((ZJ => {
              console.log("AD: Inside Aditude window.tude.requestInstreamPlayer.then"), ZJ.on("playerClose", ((ZJ, FJ) => {
                console.log("AD: Inside Aditude player.on playerClose"), console.log(`AD: Successfully finished Aditude ${JJ} ad`), XJ(), cJ()
              })).on("adPrefetchError", ((JJ, cJ) => {
                console.log("AD: Inside Aditude player.on adPrefetchError"), AJ("Prefetch error", cJ)
              })).on("adError", ((JJ, cJ) => {
                console.log("AD: Inside Aditude player.on adError"), AJ("Generic error", cJ)
              }));
              const FJ = JJ => {
                setTimeout((() => {
                  UJ || ZJ.setVideoVolume(.5)
                }), JJ)
              };
              FJ(500), FJ(1e3), FJ(1500), FJ(2e3)
            })).catch((JJ => {
              AJ("Error occurred while requesting instream player", JJ)
            }))
          } catch (ZJ) {
            AJ("Failed to request instream player", ZJ)
          }
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);