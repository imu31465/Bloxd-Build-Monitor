export const id = 175;
export const ids = [175];
export const modules = {
  7756: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      AditudeSdkAdaptor: () => PW
    });
    var mW = OW(1343),
      EW = OW(1162);
    const NW = {
      video: "pb-slot-interstitial-video",
      rewarded: "pb-slot-rewarded-video"
    };
    class PW extends mW.c {
      constructor() {
        super(), this.name = "aditude"
      }
      static async setup() {
        return window.tude = window.tude || {
          cmd: []
        }, await (0, EW.d)("https://edge.aditude.io/site/bloxd-Jf9xJheMSn/bloxd-longform/bloxd.io/prod/load.js"), new PW
      }
      playVideoAd(WW, iW) {
        this.playVideoOrRewarded("video", WW, WW)
      }
      playRewarded(WW, iW) {
        this.playVideoOrRewarded("rewarded", WW, iW)
      }
      renderBanner(WW) {
        const iW = this.getBaseDivId(WW.adId, WW.width, WW.height);
        window.tude.cmd.push((function() {
          window.tude.refreshAdsViaDivMappings([{
            divId: WW.divId,
            baseDivId: iW
          }])
        }))
      }
      getBaseDivId(WW, iW, OW) {
        return `pb-slot-bloxdio-${iW}-${OW}${WW>1?`-${WW}`:""}`
      }
      playVideoOrRewarded(WW, iW, OW) {
        var mW;
        let EW = !1;
        const PW = () => {
            document.getElementById("GenericVideoWrapper").style.display = "none", EW = !0
          },
          LW = (WW, iW) => {
            console.error(`AD: Error while playing Aditude video ad: ${WW}:`, iW), PW(), OW()
          };
        if (console.log(`AD: Requesting Aditude ${WW} ad`), void 0 === (null === (mW = window.tude) || void 0 === mW ? void 0 : mW.requestInstreamPlayer)) return console.log(`AD: Aditude ad lib not loaded, no ${WW} ad playing`), void LW("Aditude ad lib not loaded", null);
        document.getElementById("GenericVideoWrapper").style.display = "flex", document.getElementById("GenericVideoInner").classList.add("AditudeVideo"), window.tude.cmd.push((function() {
          console.log("AD: Inside Aditude window.tude.cmd.push");
          try {
            window.tude.requestInstreamPlayer({
              code: NW[WW],
              divId: "GenericVideoInner",
              mode: "adOnly"
            }).then((OW => {
              console.log("AD: Inside Aditude window.tude.requestInstreamPlayer.then"), OW.on("playerClose", ((OW, mW) => {
                console.log("AD: Inside Aditude player.on playerClose"), console.log(`AD: Successfully finished Aditude ${WW} ad`), PW(), iW()
              })).on("adPrefetchError", ((WW, iW) => {
                console.log("AD: Inside Aditude player.on adPrefetchError"), LW("Prefetch error", iW)
              })).on("adError", ((WW, iW) => {
                console.log("AD: Inside Aditude player.on adError"), LW("Generic error", iW)
              }));
              const mW = WW => {
                setTimeout((() => {
                  EW || OW.setVideoVolume(.5)
                }), WW)
              };
              mW(500), mW(1e3), mW(1500), mW(2e3)
            })).catch((WW => {
              LW("Error occurred while requesting instream player", WW)
            }))
          } catch (OW) {
            LW("Failed to request instream player", OW)
          }
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);