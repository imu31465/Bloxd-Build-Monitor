export const id = 175;
export const ids = [175];
export const modules = {
  7698: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      AditudeSdkAdaptor: () => jr
    });
    var Zr = Qr(1418),
      Wr = Qr(1240);
    const ar = {
      video: "pb-slot-interstitial-video",
      rewarded: "pb-slot-rewarded-video"
    };
    class jr extends Zr.d {
      constructor() {
        super(), this.name = "aditude"
      }
      static async setup() {
        return window.tude = window.tude || {
          cmd: []
        }, await (0, Wr.e)("https://edge.aditude.io/site/bloxd-Jf9xJheMSn/bloxd-longform/bloxd.io/prod/load.js"), new jr
      }
      playVideoAd(rr, Sr) {
        this.playVideoOrRewarded("video", rr, rr)
      }
      playRewarded(rr, Sr) {
        this.playVideoOrRewarded("rewarded", rr, Sr)
      }
      renderBanner(rr) {
        const Sr = this.getBaseDivId(rr.adId, rr.width, rr.height);
        window.tude.cmd.push((function() {
          window.tude.refreshAdsViaDivMappings([{
            divId: rr.divId,
            baseDivId: Sr
          }])
        }))
      }
      getBaseDivId(rr, Sr, Qr) {
        return `pb-slot-bloxdio-${Sr}-${Qr}${rr>1?`-${rr}`:""}`
      }
      playVideoOrRewarded(rr, Sr, Qr) {
        var Zr;
        let Wr = !1;
        const jr = () => {
            document.getElementById("GenericVideoWrapper").style.display = "none", Wr = !0
          },
          Ir = (rr, Sr) => {
            console.error(`AD: Error while playing Aditude video ad: ${rr}:`, Sr), jr(), Qr()
          };
        if (console.log(`AD: Requesting Aditude ${rr} ad`), void 0 === (null === (Zr = window.tude) || void 0 === Zr ? void 0 : Zr.requestInstreamPlayer)) return console.log(`AD: Aditude ad lib not loaded, no ${rr} ad playing`), void Ir("Aditude ad lib not loaded", null);
        document.getElementById("GenericVideoWrapper").style.display = "flex", document.getElementById("GenericVideoInner").classList.add("AditudeVideo"), window.tude.cmd.push((function() {
          console.log("AD: Inside Aditude window.tude.cmd.push");
          try {
            window.tude.requestInstreamPlayer({
              code: ar[rr],
              divId: "GenericVideoInner",
              mode: "adOnly"
            }).then((Qr => {
              console.log("AD: Inside Aditude window.tude.requestInstreamPlayer.then"), Qr.on("playerClose", ((Qr, Zr) => {
                console.log("AD: Inside Aditude player.on playerClose"), console.log(`AD: Successfully finished Aditude ${rr} ad`), jr(), Sr()
              })).on("adPrefetchError", ((rr, Sr) => {
                console.log("AD: Inside Aditude player.on adPrefetchError"), Ir("Prefetch error", Sr)
              })).on("adError", ((rr, Sr) => {
                console.log("AD: Inside Aditude player.on adError"), Ir("Generic error", Sr)
              }));
              const Zr = rr => {
                setTimeout((() => {
                  Wr || Qr.setVideoVolume(.5)
                }), rr)
              };
              Zr(500), Zr(1e3), Zr(1500), Zr(2e3)
            })).catch((rr => {
              Ir("Error occurred while requesting instream player", rr)
            }))
          } catch (Qr) {
            Ir("Failed to request instream player", Qr)
          }
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);