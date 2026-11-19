export const id = 149;
export const ids = [149];
export const modules = {
  7579: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      AditudeSdkAdaptor: () => RY
    });
    var FY = DY(1318),
      AY = DY(1204);
    const IY = {
      video: "pb-slot-interstitial-video",
      rewarded: "pb-slot-rewarded-video"
    };
    class RY extends FY.c {
      constructor() {
        super(), this.name = "aditude"
      }
      static async setup() {
        return window.tude = window.tude || {
          cmd: []
        }, await (0, AY.d)("https://edge.aditude.io/site/bloxd-Jf9xJheMSn/bloxd-longform/bloxd.io/prod/load.js"), new RY
      }
      playVideoAd(YY, rY) {
        this.playVideoOrRewarded("video", YY, YY)
      }
      playRewarded(YY, rY) {
        this.playVideoOrRewarded("rewarded", YY, rY)
      }
      renderBanner(YY) {
        const rY = this.getBaseDivId(YY.adId, YY.width, YY.height);
        window.tude.cmd.push((function() {
          window.tude.refreshAdsViaDivMappings([{
            divId: YY.divId,
            baseDivId: rY
          }])
        }))
      }
      getBaseDivId(YY, rY, DY) {
        return `pb-slot-bloxdio-${rY}-${DY}${YY>1?`-${YY}`:""}`
      }
      playVideoOrRewarded(YY, rY, DY) {
        var FY;
        let AY = !1;
        const RY = () => {
            document.getElementById("GenericVideoWrapper").style.display = "none", AY = !0
          },
          OY = (YY, rY) => {
            console.error(`AD: Error while playing Aditude video ad: ${YY}:`, rY), RY(), DY()
          };
        if (console.log(`AD: Requesting Aditude ${YY} ad`), void 0 === (null === (FY = window.tude) || void 0 === FY ? void 0 : FY.requestInstreamPlayer)) return console.log(`AD: Aditude ad lib not loaded, no ${YY} ad playing`), void OY("Aditude ad lib not loaded", null);
        document.getElementById("GenericVideoWrapper").style.display = "flex", document.getElementById("GenericVideoInner").classList.add("AditudeVideo"), window.tude.cmd.push((function() {
          console.log("AD: Inside Aditude window.tude.cmd.push");
          try {
            window.tude.requestInstreamPlayer({
              code: IY[YY],
              divId: "GenericVideoInner",
              mode: "adOnly"
            }).then((DY => {
              console.log("AD: Inside Aditude window.tude.requestInstreamPlayer.then"), DY.on("playerClose", ((DY, FY) => {
                console.log("AD: Inside Aditude player.on playerClose"), console.log(`AD: Successfully finished Aditude ${YY} ad`), RY(), rY()
              })).on("adPrefetchError", ((YY, rY) => {
                console.log("AD: Inside Aditude player.on adPrefetchError"), OY("Prefetch error", rY)
              })).on("adError", ((YY, rY) => {
                console.log("AD: Inside Aditude player.on adError"), OY("Generic error", rY)
              }));
              const FY = YY => {
                setTimeout((() => {
                  AY || DY.setVideoVolume(.5)
                }), YY)
              };
              FY(500), FY(1e3), FY(1500), FY(2e3)
            })).catch((YY => {
              OY("Error occurred while requesting instream player", YY)
            }))
          } catch (DY) {
            OY("Failed to request instream player", DY)
          }
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);