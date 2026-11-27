export const id = 175;
export const ids = [175];
export const modules = {
  7898: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      AditudeSdkAdaptor: () => ZR
    });
    var yR = GR(1447),
      tR = GR(1258);
    const uR = {
      video: "pb-slot-interstitial-video",
      rewarded: "pb-slot-rewarded-video"
    };
    class ZR extends yR.d {
      constructor() {
        super(), this.name = "aditude"
      }
      static async setup() {
        return window.tude = window.tude || {
          cmd: []
        }, await (0, tR.c)("https://edge.aditude.io/site/bloxd-Jf9xJheMSn/bloxd-longform/bloxd.io/prod/load.js"), new ZR
      }
      playVideoAd(RR, JR) {
        this.playVideoOrRewarded("video", RR, RR)
      }
      playRewarded(RR, JR) {
        this.playVideoOrRewarded("rewarded", RR, JR)
      }
      renderBanner(RR) {
        const JR = this.getBaseDivId(RR.adId, RR.width, RR.height);
        window.tude.cmd.push((function() {
          window.tude.refreshAdsViaDivMappings([{
            divId: RR.divId,
            baseDivId: JR
          }])
        }))
      }
      getBaseDivId(RR, JR, GR) {
        return `pb-slot-bloxdio-${JR}-${GR}${RR>1?`-${RR}`:""}`
      }
      playVideoOrRewarded(RR, JR, GR) {
        var yR;
        let tR = !1;
        const ZR = () => {
            document.getElementById("GenericVideoWrapper").style.display = "none", tR = !0
          },
          qR = (RR, JR) => {
            console.error(`AD: Error while playing Aditude video ad: ${RR}:`, JR), ZR(), GR()
          };
        if (console.log(`AD: Requesting Aditude ${RR} ad`), void 0 === (null === (yR = window.tude) || void 0 === yR ? void 0 : yR.requestInstreamPlayer)) return console.log(`AD: Aditude ad lib not loaded, no ${RR} ad playing`), void qR("Aditude ad lib not loaded", null);
        document.getElementById("GenericVideoWrapper").style.display = "flex", document.getElementById("GenericVideoInner").classList.add("AditudeVideo"), window.tude.cmd.push((function() {
          console.log("AD: Inside Aditude window.tude.cmd.push");
          try {
            window.tude.requestInstreamPlayer({
              code: uR[RR],
              divId: "GenericVideoInner",
              mode: "adOnly"
            }).then((GR => {
              console.log("AD: Inside Aditude window.tude.requestInstreamPlayer.then"), GR.on("playerClose", ((GR, yR) => {
                console.log("AD: Inside Aditude player.on playerClose"), console.log(`AD: Successfully finished Aditude ${RR} ad`), ZR(), JR()
              })).on("adPrefetchError", ((RR, JR) => {
                console.log("AD: Inside Aditude player.on adPrefetchError"), qR("Prefetch error", JR)
              })).on("adError", ((RR, JR) => {
                console.log("AD: Inside Aditude player.on adError"), qR("Generic error", JR)
              }));
              const yR = RR => {
                setTimeout((() => {
                  tR || GR.setVideoVolume(.5)
                }), RR)
              };
              yR(500), yR(1e3), yR(1500), yR(2e3)
            })).catch((RR => {
              qR("Error occurred while requesting instream player", RR)
            }))
          } catch (GR) {
            qR("Failed to request instream player", GR)
          }
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);