export const id = 155;
export const ids = [155];
export const modules = {
  8045: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      AditudeSdkAdaptor: () => xm
    });
    var hm = fm(1318),
      Am = fm(1198);
    const am = {
      video: "pb-slot-interstitial-video",
      rewarded: "pb-slot-rewarded-video"
    };
    class xm extends hm.c {
      constructor() {
        super(), this.name = "aditude"
      }
      static async setup() {
        return window.tude = window.tude || {
          cmd: []
        }, await (0, Am.c)("https://edge.aditude.io/site/bloxd-Jf9xJheMSn/bloxd-longform/bloxd.io/prod/load.js"), new xm
      }
      playVideoAd(mm, Tm) {
        this.playVideoOrRewarded("video", mm, mm)
      }
      playRewarded(mm, Tm) {
        this.playVideoOrRewarded("rewarded", mm, Tm)
      }
      renderBanner(mm) {
        const Tm = this.getBaseDivId(mm.adId, mm.width, mm.height);
        window.tude.cmd.push((function() {
          window.tude.refreshAdsViaDivMappings([{
            divId: mm.divId,
            baseDivId: Tm
          }])
        }))
      }
      getBaseDivId(mm, Tm, fm) {
        return `pb-slot-bloxdio-${Tm}-${fm}${mm>1?`-${mm}`:""}`
      }
      playVideoOrRewarded(mm, Tm, fm) {
        var hm;
        let Am = !1;
        const xm = () => {
            document.getElementById("GenericVideoWrapper").style.display = "none", Am = !0
          },
          wm = (mm, Tm) => {
            console.error(`AD: Error while playing Aditude video ad: ${mm}:`, Tm), xm(), fm()
          };
        if (console.log(`AD: Requesting Aditude ${mm} ad`), void 0 === (null === (hm = window.tude) || void 0 === hm ? void 0 : hm.requestInstreamPlayer)) return console.log(`AD: Aditude ad lib not loaded, no ${mm} ad playing`), void wm("Aditude ad lib not loaded", null);
        document.getElementById("GenericVideoWrapper").style.display = "flex", document.getElementById("GenericVideoInner").classList.add("AditudeVideo"), window.tude.cmd.push((function() {
          console.log("AD: Inside Aditude window.tude.cmd.push");
          try {
            window.tude.requestInstreamPlayer({
              code: am[mm],
              divId: "GenericVideoInner",
              mode: "adOnly"
            }).then((fm => {
              console.log("AD: Inside Aditude window.tude.requestInstreamPlayer.then"), fm.on("playerClose", ((fm, hm) => {
                console.log("AD: Inside Aditude player.on playerClose"), console.log(`AD: Successfully finished Aditude ${mm} ad`), xm(), Tm()
              })).on("adPrefetchError", ((mm, Tm) => {
                console.log("AD: Inside Aditude player.on adPrefetchError"), wm("Prefetch error", Tm)
              })).on("adError", ((mm, Tm) => {
                console.log("AD: Inside Aditude player.on adError"), wm("Generic error", Tm)
              }));
              const hm = mm => {
                setTimeout((() => {
                  Am || fm.setVideoVolume(.5)
                }), mm)
              };
              hm(500), hm(1e3), hm(1500), hm(2e3)
            })).catch((mm => {
              wm("Error occurred while requesting instream player", mm)
            }))
          } catch (fm) {
            wm("Failed to request instream player", fm)
          }
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);