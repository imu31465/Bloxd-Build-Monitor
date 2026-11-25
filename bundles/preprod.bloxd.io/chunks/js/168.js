export const id = 168;
export const ids = [168];
export const modules = {
  7230: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      AditudeSdkAdaptor: () => aM
    });
    var OM = iM(1367),
      SM = iM(1177);
    const jM = {
      video: "pb-slot-interstitial-video",
      rewarded: "pb-slot-rewarded-video"
    };
    class aM extends OM.d {
      constructor() {
        super(), this.name = "aditude"
      }
      static async setup() {
        return window.tude = window.tude || {
          cmd: []
        }, await (0, SM.d)("https://edge.aditude.io/site/bloxd-Jf9xJheMSn/bloxd-longform/bloxd.io/prod/load.js"), new aM
      }
      playVideoAd(MM, rM) {
        this.playVideoOrRewarded("video", MM, MM)
      }
      playRewarded(MM, rM) {
        this.playVideoOrRewarded("rewarded", MM, rM)
      }
      renderBanner(MM) {
        const rM = this.getBaseDivId(MM.adId, MM.width, MM.height);
        window.tude.cmd.push((function() {
          window.tude.refreshAdsViaDivMappings([{
            divId: MM.divId,
            baseDivId: rM
          }])
        }))
      }
      getBaseDivId(MM, rM, iM) {
        return `pb-slot-bloxdio-${rM}-${iM}${MM>1?`-${MM}`:""}`
      }
      playVideoOrRewarded(MM, rM, iM) {
        var OM;
        let SM = !1;
        const aM = () => {
            document.getElementById("GenericVideoWrapper").style.display = "none", SM = !0
          },
          PM = (MM, rM) => {
            console.error(`AD: Error while playing Aditude video ad: ${MM}:`, rM), aM(), iM()
          };
        if (console.log(`AD: Requesting Aditude ${MM} ad`), void 0 === (null === (OM = window.tude) || void 0 === OM ? void 0 : OM.requestInstreamPlayer)) return console.log(`AD: Aditude ad lib not loaded, no ${MM} ad playing`), void PM("Aditude ad lib not loaded", null);
        document.getElementById("GenericVideoWrapper").style.display = "flex", document.getElementById("GenericVideoInner").classList.add("AditudeVideo"), window.tude.cmd.push((function() {
          console.log("AD: Inside Aditude window.tude.cmd.push");
          try {
            window.tude.requestInstreamPlayer({
              code: jM[MM],
              divId: "GenericVideoInner",
              mode: "adOnly"
            }).then((iM => {
              console.log("AD: Inside Aditude window.tude.requestInstreamPlayer.then"), iM.on("playerClose", ((iM, OM) => {
                console.log("AD: Inside Aditude player.on playerClose"), console.log(`AD: Successfully finished Aditude ${MM} ad`), aM(), rM()
              })).on("adPrefetchError", ((MM, rM) => {
                console.log("AD: Inside Aditude player.on adPrefetchError"), PM("Prefetch error", rM)
              })).on("adError", ((MM, rM) => {
                console.log("AD: Inside Aditude player.on adError"), PM("Generic error", rM)
              }));
              const OM = MM => {
                setTimeout((() => {
                  SM || iM.setVideoVolume(.5)
                }), MM)
              };
              OM(500), OM(1e3), OM(1500), OM(2e3)
            })).catch((MM => {
              PM("Error occurred while requesting instream player", MM)
            }))
          } catch (iM) {
            PM("Failed to request instream player", iM)
          }
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);