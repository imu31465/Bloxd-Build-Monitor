export const id = 137;
export const ids = [137];
export const modules = {
  7059: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      AditudeSdkAdaptor: () => AW
    });
    var wW = MW(1144),
      CW = MW(1020);
    const zR = {
      video: "pb-slot-interstitial-video",
      rewarded: "pb-slot-rewarded-video"
    };
    class AW extends wW.d {
      constructor() {
        super(), this.name = "aditude"
      }
      static async setup() {
        return window.tude = window.tude || {
          cmd: []
        }, await (0, CW.d)("https://edge.aditude.io/site/bloxd-Jf9xJheMSn/bloxd-longform/bloxd.io/prod/load.js"), new AW
      }
      playVideoAd(WW, RW) {
        this.playVideoOrRewarded("video", WW, WW)
      }
      playRewarded(WW, RW) {
        this.playVideoOrRewarded("rewarded", WW, RW)
      }
      renderBanner(WW) {
        const RW = this.getBaseDivId(WW.adId, WW.width, WW.height);
        window.tude.cmd.push((function() {
          window.tude.refreshAdsViaDivMappings([{
            divId: WW.divId,
            baseDivId: RW
          }])
        }))
      }
      getBaseDivId(WW, RW, MW) {
        return `pb-slot-bloxdio-${RW}-${MW}${WW>1?`-${WW}`:""}`
      }
      playVideoOrRewarded(WW, RW, MW) {
        var wW;
        let CW = !1;
        const AW = () => {
            document.getElementById("GenericVideoWrapper").style.display = "none", CW = !0
          },
          bR = (WW, RW) => {
            console.error(`AD: Error while playing Aditude video ad: ${WW}:`, RW), AW(), MW()
          };
        if (console.log(`AD: Requesting Aditude ${WW} ad`), void 0 === (null === (wW = window.tude) || void 0 === wW ? void 0 : wW.requestInstreamPlayer)) return console.log(`AD: Aditude ad lib not loaded, no ${WW} ad playing`), void bR("Aditude ad lib not loaded", null);
        document.getElementById("GenericVideoWrapper").style.display = "flex", document.getElementById("GenericVideoInner").classList.add("AditudeVideo"), window.tude.cmd.push((function() {
          console.log("AD: Inside Aditude window.tude.cmd.push");
          try {
            window.tude.requestInstreamPlayer({
              code: zR[WW],
              divId: "GenericVideoInner",
              mode: "adOnly"
            }).then((MW => {
              console.log("AD: Inside Aditude window.tude.requestInstreamPlayer.then"), MW.on("playerClose", ((MW, wW) => {
                console.log("AD: Inside Aditude player.on playerClose"), console.log(`AD: Successfully finished Aditude ${WW} ad`), AW(), RW()
              })).on("adPrefetchError", ((WW, RW) => {
                console.log("AD: Inside Aditude player.on adPrefetchError"), bR("Prefetch error", RW)
              })).on("adError", ((WW, RW) => {
                console.log("AD: Inside Aditude player.on adError"), bR("Generic error", RW)
              }));
              const wW = WW => {
                setTimeout((() => {
                  CW || MW.setVideoVolume(.5)
                }), WW)
              };
              wW(500), wW(1e3), wW(1500), wW(2e3)
            })).catch((WW => {
              bR("Error occurred while requesting instream player", WW)
            }))
          } catch (MW) {
            bR("Failed to request instream player", MW)
          }
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);