export const id = 157;
export const ids = [157];
export const modules = {
  8191: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      AditudeSdkAdaptor: () => yG
    });
    var wG = ZG(1280),
      SG = ZG(1143);
    const LG = {
      video: "pb-slot-interstitial-video",
      rewarded: "pb-slot-rewarded-video"
    };
    class yG extends wG.e {
      constructor() {
        super(), this.name = "aditude"
      }
      static async setup() {
        return window.tude = window.tude || {
          cmd: []
        }, await (0, SG.b)("https://edge.aditude.io/site/bloxd-Jf9xJheMSn/bloxd-longform/bloxd.io/prod/load.js"), new yG
      }
      playVideoAd(GG, bG) {
        this.playVideoOrRewarded("video", GG, GG)
      }
      playRewarded(GG, bG) {
        this.playVideoOrRewarded("rewarded", GG, bG)
      }
      renderBanner(GG) {
        const bG = this.getBaseDivId(GG.adId, GG.width, GG.height);
        window.tude.cmd.push((function() {
          window.tude.refreshAdsViaDivMappings([{
            divId: GG.divId,
            baseDivId: bG
          }])
        }))
      }
      getBaseDivId(GG, bG, ZG) {
        return `pb-slot-bloxdio-${bG}-${ZG}${GG>1?`-${GG}`:""}`
      }
      playVideoOrRewarded(GG, bG, ZG) {
        var wG;
        let SG = !1;
        const yG = () => {
            document.getElementById("GenericVideoWrapper").style.display = "none", SG = !0
          },
          kG = (GG, bG) => {
            console.error(`AD: Error while playing Aditude video ad: ${GG}:`, bG), yG(), ZG()
          };
        if (console.log(`AD: Requesting Aditude ${GG} ad`), void 0 === (null === (wG = window.tude) || void 0 === wG ? void 0 : wG.requestInstreamPlayer)) return console.log(`AD: Aditude ad lib not loaded, no ${GG} ad playing`), void kG("Aditude ad lib not loaded", null);
        document.getElementById("GenericVideoWrapper").style.display = "flex", document.getElementById("GenericVideoInner").classList.add("AditudeVideo"), window.tude.cmd.push((function() {
          console.log("AD: Inside Aditude window.tude.cmd.push");
          try {
            window.tude.requestInstreamPlayer({
              code: LG[GG],
              divId: "GenericVideoInner",
              mode: "adOnly"
            }).then((ZG => {
              console.log("AD: Inside Aditude window.tude.requestInstreamPlayer.then"), ZG.on("playerClose", ((ZG, wG) => {
                console.log("AD: Inside Aditude player.on playerClose"), console.log(`AD: Successfully finished Aditude ${GG} ad`), yG(), bG()
              })).on("adPrefetchError", ((GG, bG) => {
                console.log("AD: Inside Aditude player.on adPrefetchError"), kG("Prefetch error", bG)
              })).on("adError", ((GG, bG) => {
                console.log("AD: Inside Aditude player.on adError"), kG("Generic error", bG)
              }));
              const wG = GG => {
                setTimeout((() => {
                  SG || ZG.setVideoVolume(.5)
                }), GG)
              };
              wG(500), wG(1e3), wG(1500), wG(2e3)
            })).catch((GG => {
              kG("Error occurred while requesting instream player", GG)
            }))
          } catch (ZG) {
            kG("Failed to request instream player", ZG)
          }
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);