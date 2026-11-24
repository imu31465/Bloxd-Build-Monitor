export const id = 155;
export const ids = [155];
export const modules = {
  8302: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      AditudeSdkAdaptor: () => xS
    });
    var tS = gS(1397),
      bS = gS(1267);
    const XS = {
      video: "pb-slot-interstitial-video",
      rewarded: "pb-slot-rewarded-video"
    };
    class xS extends tS.c {
      constructor() {
        super(), this.name = "aditude"
      }
      static async setup() {
        return window.tude = window.tude || {
          cmd: []
        }, await (0, bS.c)("https://edge.aditude.io/site/bloxd-Jf9xJheMSn/bloxd-longform/bloxd.io/prod/load.js"), new xS
      }
      playVideoAd(SS, HS) {
        this.playVideoOrRewarded("video", SS, SS)
      }
      playRewarded(SS, HS) {
        this.playVideoOrRewarded("rewarded", SS, HS)
      }
      renderBanner(SS) {
        const HS = this.getBaseDivId(SS.adId, SS.width, SS.height);
        window.tude.cmd.push((function() {
          window.tude.refreshAdsViaDivMappings([{
            divId: SS.divId,
            baseDivId: HS
          }])
        }))
      }
      getBaseDivId(SS, HS, gS) {
        return `pb-slot-bloxdio-${HS}-${gS}${SS>1?`-${SS}`:""}`
      }
      playVideoOrRewarded(SS, HS, gS) {
        var tS;
        let bS = !1;
        const xS = () => {
            document.getElementById("GenericVideoWrapper").style.display = "none", bS = !0
          },
          NS = (SS, HS) => {
            console.error(`AD: Error while playing Aditude video ad: ${SS}:`, HS), xS(), gS()
          };
        if (console.log(`AD: Requesting Aditude ${SS} ad`), void 0 === (null === (tS = window.tude) || void 0 === tS ? void 0 : tS.requestInstreamPlayer)) return console.log(`AD: Aditude ad lib not loaded, no ${SS} ad playing`), void NS("Aditude ad lib not loaded", null);
        document.getElementById("GenericVideoWrapper").style.display = "flex", document.getElementById("GenericVideoInner").classList.add("AditudeVideo"), window.tude.cmd.push((function() {
          console.log("AD: Inside Aditude window.tude.cmd.push");
          try {
            window.tude.requestInstreamPlayer({
              code: XS[SS],
              divId: "GenericVideoInner",
              mode: "adOnly"
            }).then((gS => {
              console.log("AD: Inside Aditude window.tude.requestInstreamPlayer.then"), gS.on("playerClose", ((gS, tS) => {
                console.log("AD: Inside Aditude player.on playerClose"), console.log(`AD: Successfully finished Aditude ${SS} ad`), xS(), HS()
              })).on("adPrefetchError", ((SS, HS) => {
                console.log("AD: Inside Aditude player.on adPrefetchError"), NS("Prefetch error", HS)
              })).on("adError", ((SS, HS) => {
                console.log("AD: Inside Aditude player.on adError"), NS("Generic error", HS)
              }));
              const tS = SS => {
                setTimeout((() => {
                  bS || gS.setVideoVolume(.5)
                }), SS)
              };
              tS(500), tS(1e3), tS(1500), tS(2e3)
            })).catch((SS => {
              NS("Error occurred while requesting instream player", SS)
            }))
          } catch (gS) {
            NS("Failed to request instream player", gS)
          }
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);