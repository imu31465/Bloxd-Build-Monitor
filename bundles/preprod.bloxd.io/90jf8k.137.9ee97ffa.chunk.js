export const id = 137;
export const ids = [137];
export const modules = {
  7095: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      AditudeSdkAdaptor: () => hF
    });
    var CF = SF(1171),
      AF = SF(1036);
    const uF = {
      video: "pb-slot-interstitial-video",
      rewarded: "pb-slot-rewarded-video"
    };
    class hF extends CF.b {
      constructor() {
        super(), this.name = "aditude"
      }
      static async setup() {
        return window.tude = window.tude || {
          cmd: []
        }, await (0, AF.e)("https://edge.aditude.io/site/bloxd-Jf9xJheMSn/bloxd-longform/bloxd.io/prod/load.js"), new hF
      }
      playVideoAd(FF, WF) {
        this.playVideoOrRewarded("video", FF, FF)
      }
      playRewarded(FF, WF) {
        this.playVideoOrRewarded("rewarded", FF, WF)
      }
      renderBanner(FF) {
        const WF = this.getBaseDivId(FF.adId, FF.width, FF.height);
        window.tude.cmd.push((function() {
          window.tude.refreshAdsViaDivMappings([{
            divId: FF.divId,
            baseDivId: WF
          }])
        }))
      }
      getBaseDivId(FF, WF, SF) {
        return `pb-slot-bloxdio-${WF}-${SF}${FF>1?`-${FF}`:""}`
      }
      playVideoOrRewarded(FF, WF, SF) {
        var CF;
        let AF = !1;
        const hF = () => {
            document.getElementById("GenericVideoWrapper").style.display = "none", AF = !0
          },
          bW = (FF, WF) => {
            console.error(`AD: Error while playing Aditude video ad: ${FF}:`, WF), hF(), SF()
          };
        if (console.log(`AD: Requesting Aditude ${FF} ad`), void 0 === (null === (CF = window.tude) || void 0 === CF ? void 0 : CF.requestInstreamPlayer)) return console.log(`AD: Aditude ad lib not loaded, no ${FF} ad playing`), void bW("Aditude ad lib not loaded", null);
        document.getElementById("GenericVideoWrapper").style.display = "flex", document.getElementById("GenericVideoInner").classList.add("AditudeVideo"), window.tude.cmd.push((function() {
          console.log("AD: Inside Aditude window.tude.cmd.push");
          try {
            window.tude.requestInstreamPlayer({
              code: uF[FF],
              divId: "GenericVideoInner",
              mode: "adOnly"
            }).then((SF => {
              console.log("AD: Inside Aditude window.tude.requestInstreamPlayer.then"), SF.on("playerClose", ((SF, CF) => {
                console.log("AD: Inside Aditude player.on playerClose"), console.log(`AD: Successfully finished Aditude ${FF} ad`), hF(), WF()
              })).on("adPrefetchError", ((FF, WF) => {
                console.log("AD: Inside Aditude player.on adPrefetchError"), bW("Prefetch error", WF)
              })).on("adError", ((FF, WF) => {
                console.log("AD: Inside Aditude player.on adError"), bW("Generic error", WF)
              }));
              const CF = FF => {
                setTimeout((() => {
                  AF || SF.setVideoVolume(.5)
                }), FF)
              };
              CF(500), CF(1e3), CF(1500), CF(2e3)
            })).catch((FF => {
              bW("Error occurred while requesting instream player", FF)
            }))
          } catch (SF) {
            bW("Failed to request instream player", SF)
          }
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);