export const id = 148;
export const ids = [148];
export const modules = {
  7822: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      AditudeSdkAdaptor: () => fD
    });
    var ID = cD(1308),
      pD = cD(1181);
    const iD = {
      video: "pb-slot-interstitial-video",
      rewarded: "pb-slot-rewarded-video"
    };
    class fD extends ID.e {
      constructor() {
        super(), this.name = "aditude"
      }
      static async setup() {
        return window.tude = window.tude || {
          cmd: []
        }, await (0, pD.e)("https://edge.aditude.io/site/bloxd-Jf9xJheMSn/bloxd-longform/bloxd.io/prod/load.js"), new fD
      }
      playVideoAd(DD, CD) {
        this.playVideoOrRewarded("video", DD, DD)
      }
      playRewarded(DD, CD) {
        this.playVideoOrRewarded("rewarded", DD, CD)
      }
      renderBanner(DD) {
        const CD = this.getBaseDivId(DD.adId, DD.width, DD.height);
        window.tude.cmd.push((function() {
          window.tude.refreshAdsViaDivMappings([{
            divId: DD.divId,
            baseDivId: CD
          }])
        }))
      }
      getBaseDivId(DD, CD, cD) {
        return `pb-slot-bloxdio-${CD}-${cD}${DD>1?`-${DD}`:""}`
      }
      playVideoOrRewarded(DD, CD, cD) {
        var ID;
        let pD = !1;
        const fD = () => {
            document.getElementById("GenericVideoWrapper").style.display = "none", pD = !0
          },
          bD = (DD, CD) => {
            console.error(`AD: Error while playing Aditude video ad: ${DD}:`, CD), fD(), cD()
          };
        if (console.log(`AD: Requesting Aditude ${DD} ad`), void 0 === (null === (ID = window.tude) || void 0 === ID ? void 0 : ID.requestInstreamPlayer)) return console.log(`AD: Aditude ad lib not loaded, no ${DD} ad playing`), void bD("Aditude ad lib not loaded", null);
        document.getElementById("GenericVideoWrapper").style.display = "flex", document.getElementById("GenericVideoInner").classList.add("AditudeVideo"), window.tude.cmd.push((function() {
          console.log("AD: Inside Aditude window.tude.cmd.push");
          try {
            window.tude.requestInstreamPlayer({
              code: iD[DD],
              divId: "GenericVideoInner",
              mode: "adOnly"
            }).then((cD => {
              console.log("AD: Inside Aditude window.tude.requestInstreamPlayer.then"), cD.on("playerClose", ((cD, ID) => {
                console.log("AD: Inside Aditude player.on playerClose"), console.log(`AD: Successfully finished Aditude ${DD} ad`), fD(), CD()
              })).on("adPrefetchError", ((DD, CD) => {
                console.log("AD: Inside Aditude player.on adPrefetchError"), bD("Prefetch error", CD)
              })).on("adError", ((DD, CD) => {
                console.log("AD: Inside Aditude player.on adError"), bD("Generic error", CD)
              }));
              const ID = DD => {
                setTimeout((() => {
                  pD || cD.setVideoVolume(.5)
                }), DD)
              };
              ID(500), ID(1e3), ID(1500), ID(2e3)
            })).catch((DD => {
              bD("Error occurred while requesting instream player", DD)
            }))
          } catch (cD) {
            bD("Failed to request instream player", cD)
          }
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);