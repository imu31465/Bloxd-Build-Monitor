export const id = 168;
export const ids = [168];
export const modules = {
  7308: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      AditudeSdkAdaptor: () => yV
    });
    var JV = xV(1389),
      YV = xV(1213);
    const UV = {
      video: "pb-slot-interstitial-video",
      rewarded: "pb-slot-rewarded-video"
    };
    class yV extends JV.b {
      constructor() {
        super(), this.name = "aditude"
      }
      static async setup() {
        return window.tude = window.tude || {
          cmd: []
        }, await (0, YV.d)("https://edge.aditude.io/site/bloxd-Jf9xJheMSn/bloxd-longform/bloxd.io/prod/load.js"), new yV
      }
      playVideoAd(VV, eV) {
        this.playVideoOrRewarded("video", VV, VV)
      }
      playRewarded(VV, eV) {
        this.playVideoOrRewarded("rewarded", VV, eV)
      }
      renderBanner(VV) {
        const eV = this.getBaseDivId(VV.adId, VV.width, VV.height);
        window.tude.cmd.push((function() {
          window.tude.refreshAdsViaDivMappings([{
            divId: VV.divId,
            baseDivId: eV
          }])
        }))
      }
      getBaseDivId(VV, eV, xV) {
        return `pb-slot-bloxdio-${eV}-${xV}${VV>1?`-${VV}`:""}`
      }
      playVideoOrRewarded(VV, eV, xV) {
        var JV;
        let YV = !1;
        const yV = () => {
            document.getElementById("GenericVideoWrapper").style.display = "none", YV = !0
          },
          pV = (VV, eV) => {
            console.error(`AD: Error while playing Aditude video ad: ${VV}:`, eV), yV(), xV()
          };
        if (console.log(`AD: Requesting Aditude ${VV} ad`), void 0 === (null === (JV = window.tude) || void 0 === JV ? void 0 : JV.requestInstreamPlayer)) return console.log(`AD: Aditude ad lib not loaded, no ${VV} ad playing`), void pV("Aditude ad lib not loaded", null);
        document.getElementById("GenericVideoWrapper").style.display = "flex", document.getElementById("GenericVideoInner").classList.add("AditudeVideo"), window.tude.cmd.push((function() {
          console.log("AD: Inside Aditude window.tude.cmd.push");
          try {
            window.tude.requestInstreamPlayer({
              code: UV[VV],
              divId: "GenericVideoInner",
              mode: "adOnly"
            }).then((xV => {
              console.log("AD: Inside Aditude window.tude.requestInstreamPlayer.then"), xV.on("playerClose", ((xV, JV) => {
                console.log("AD: Inside Aditude player.on playerClose"), console.log(`AD: Successfully finished Aditude ${VV} ad`), yV(), eV()
              })).on("adPrefetchError", ((VV, eV) => {
                console.log("AD: Inside Aditude player.on adPrefetchError"), pV("Prefetch error", eV)
              })).on("adError", ((VV, eV) => {
                console.log("AD: Inside Aditude player.on adError"), pV("Generic error", eV)
              }));
              const JV = VV => {
                setTimeout((() => {
                  YV || xV.setVideoVolume(.5)
                }), VV)
              };
              JV(500), JV(1e3), JV(1500), JV(2e3)
            })).catch((VV => {
              pV("Error occurred while requesting instream player", VV)
            }))
          } catch (xV) {
            pV("Failed to request instream player", xV)
          }
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);