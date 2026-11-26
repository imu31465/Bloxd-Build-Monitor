export const id = 168;
export const ids = [168];
export const modules = {
  7296: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      AditudeSdkAdaptor: () => hH
    });
    var AH = LH(1289),
      rH = LH(1110);
    const SH = {
      video: "pb-slot-interstitial-video",
      rewarded: "pb-slot-rewarded-video"
    };
    class hH extends AH.b {
      constructor() {
        super(), this.name = "aditude"
      }
      static async setup() {
        return window.tude = window.tude || {
          cmd: []
        }, await (0, rH.e)("https://edge.aditude.io/site/bloxd-Jf9xJheMSn/bloxd-longform/bloxd.io/prod/load.js"), new hH
      }
      playVideoAd(HH, BH) {
        this.playVideoOrRewarded("video", HH, HH)
      }
      playRewarded(HH, BH) {
        this.playVideoOrRewarded("rewarded", HH, BH)
      }
      renderBanner(HH) {
        const BH = this.getBaseDivId(HH.adId, HH.width, HH.height);
        window.tude.cmd.push((function() {
          window.tude.refreshAdsViaDivMappings([{
            divId: HH.divId,
            baseDivId: BH
          }])
        }))
      }
      getBaseDivId(HH, BH, LH) {
        return `pb-slot-bloxdio-${BH}-${LH}${HH>1?`-${HH}`:""}`
      }
      playVideoOrRewarded(HH, BH, LH) {
        var AH;
        let rH = !1;
        const hH = () => {
            document.getElementById("GenericVideoWrapper").style.display = "none", rH = !0
          },
          tH = (HH, BH) => {
            console.error(`AD: Error while playing Aditude video ad: ${HH}:`, BH), hH(), LH()
          };
        if (console.log(`AD: Requesting Aditude ${HH} ad`), void 0 === (null === (AH = window.tude) || void 0 === AH ? void 0 : AH.requestInstreamPlayer)) return console.log(`AD: Aditude ad lib not loaded, no ${HH} ad playing`), void tH("Aditude ad lib not loaded", null);
        document.getElementById("GenericVideoWrapper").style.display = "flex", document.getElementById("GenericVideoInner").classList.add("AditudeVideo"), window.tude.cmd.push((function() {
          console.log("AD: Inside Aditude window.tude.cmd.push");
          try {
            window.tude.requestInstreamPlayer({
              code: SH[HH],
              divId: "GenericVideoInner",
              mode: "adOnly"
            }).then((LH => {
              console.log("AD: Inside Aditude window.tude.requestInstreamPlayer.then"), LH.on("playerClose", ((LH, AH) => {
                console.log("AD: Inside Aditude player.on playerClose"), console.log(`AD: Successfully finished Aditude ${HH} ad`), hH(), BH()
              })).on("adPrefetchError", ((HH, BH) => {
                console.log("AD: Inside Aditude player.on adPrefetchError"), tH("Prefetch error", BH)
              })).on("adError", ((HH, BH) => {
                console.log("AD: Inside Aditude player.on adError"), tH("Generic error", BH)
              }));
              const AH = HH => {
                setTimeout((() => {
                  rH || LH.setVideoVolume(.5)
                }), HH)
              };
              AH(500), AH(1e3), AH(1500), AH(2e3)
            })).catch((HH => {
              tH("Error occurred while requesting instream player", HH)
            }))
          } catch (LH) {
            tH("Failed to request instream player", LH)
          }
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);