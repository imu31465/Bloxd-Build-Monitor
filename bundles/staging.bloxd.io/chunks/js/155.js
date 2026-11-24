export const id = 155;
export const ids = [155];
export const modules = {
  8162: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      AditudeSdkAdaptor: () => rD
    });
    var pD = wD(1326),
      sD = wD(1186);
    const KD = {
      video: "pb-slot-interstitial-video",
      rewarded: "pb-slot-rewarded-video"
    };
    class rD extends pD.b {
      constructor() {
        super(), this.name = "aditude"
      }
      static async setup() {
        return window.tude = window.tude || {
          cmd: []
        }, await (0, sD.b)("https://edge.aditude.io/site/bloxd-Jf9xJheMSn/bloxd-longform/bloxd.io/prod/load.js"), new rD
      }
      playVideoAd(DD, zD) {
        this.playVideoOrRewarded("video", DD, DD)
      }
      playRewarded(DD, zD) {
        this.playVideoOrRewarded("rewarded", DD, zD)
      }
      renderBanner(DD) {
        const zD = this.getBaseDivId(DD.adId, DD.width, DD.height);
        window.tude.cmd.push((function() {
          window.tude.refreshAdsViaDivMappings([{
            divId: DD.divId,
            baseDivId: zD
          }])
        }))
      }
      getBaseDivId(DD, zD, wD) {
        return `pb-slot-bloxdio-${zD}-${wD}${DD>1?`-${DD}`:""}`
      }
      playVideoOrRewarded(DD, zD, wD) {
        var pD;
        let sD = !1;
        const rD = () => {
            document.getElementById("GenericVideoWrapper").style.display = "none", sD = !0
          },
          LD = (DD, zD) => {
            console.error(`AD: Error while playing Aditude video ad: ${DD}:`, zD), rD(), wD()
          };
        if (console.log(`AD: Requesting Aditude ${DD} ad`), void 0 === (null === (pD = window.tude) || void 0 === pD ? void 0 : pD.requestInstreamPlayer)) return console.log(`AD: Aditude ad lib not loaded, no ${DD} ad playing`), void LD("Aditude ad lib not loaded", null);
        document.getElementById("GenericVideoWrapper").style.display = "flex", document.getElementById("GenericVideoInner").classList.add("AditudeVideo"), window.tude.cmd.push((function() {
          console.log("AD: Inside Aditude window.tude.cmd.push");
          try {
            window.tude.requestInstreamPlayer({
              code: KD[DD],
              divId: "GenericVideoInner",
              mode: "adOnly"
            }).then((wD => {
              console.log("AD: Inside Aditude window.tude.requestInstreamPlayer.then"), wD.on("playerClose", ((wD, pD) => {
                console.log("AD: Inside Aditude player.on playerClose"), console.log(`AD: Successfully finished Aditude ${DD} ad`), rD(), zD()
              })).on("adPrefetchError", ((DD, zD) => {
                console.log("AD: Inside Aditude player.on adPrefetchError"), LD("Prefetch error", zD)
              })).on("adError", ((DD, zD) => {
                console.log("AD: Inside Aditude player.on adError"), LD("Generic error", zD)
              }));
              const pD = DD => {
                setTimeout((() => {
                  sD || wD.setVideoVolume(.5)
                }), DD)
              };
              pD(500), pD(1e3), pD(1500), pD(2e3)
            })).catch((DD => {
              LD("Error occurred while requesting instream player", DD)
            }))
          } catch (wD) {
            LD("Failed to request instream player", wD)
          }
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);