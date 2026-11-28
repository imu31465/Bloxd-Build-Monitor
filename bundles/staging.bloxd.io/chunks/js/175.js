export const id = 175;
export const ids = [175];
export const modules = {
  7693: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      AditudeSdkAdaptor: () => Xd
    });
    var Wd = md(1410),
      Fd = md(1229);
    const Rd = {
      video: "pb-slot-interstitial-video",
      rewarded: "pb-slot-rewarded-video"
    };
    class Xd extends Wd.b {
      constructor() {
        super(), this.name = "aditude"
      }
      static async setup() {
        return window.tude = window.tude || {
          cmd: []
        }, await (0, Fd.d)("https://edge.aditude.io/site/bloxd-Jf9xJheMSn/bloxd-longform/bloxd.io/prod/load.js"), new Xd
      }
      playVideoAd(dd, Od) {
        this.playVideoOrRewarded("video", dd, dd)
      }
      playRewarded(dd, Od) {
        this.playVideoOrRewarded("rewarded", dd, Od)
      }
      renderBanner(dd) {
        const Od = this.getBaseDivId(dd.adId, dd.width, dd.height);
        window.tude.cmd.push((function() {
          window.tude.refreshAdsViaDivMappings([{
            divId: dd.divId,
            baseDivId: Od
          }])
        }))
      }
      getBaseDivId(dd, Od, md) {
        return `pb-slot-bloxdio-${Od}-${md}${dd>1?`-${dd}`:""}`
      }
      playVideoOrRewarded(dd, Od, md) {
        var Wd;
        let Fd = !1;
        const Xd = () => {
            document.getElementById("GenericVideoWrapper").style.display = "none", Fd = !0
          },
          Kd = (dd, Od) => {
            console.error(`AD: Error while playing Aditude video ad: ${dd}:`, Od), Xd(), md()
          };
        if (console.log(`AD: Requesting Aditude ${dd} ad`), void 0 === (null === (Wd = window.tude) || void 0 === Wd ? void 0 : Wd.requestInstreamPlayer)) return console.log(`AD: Aditude ad lib not loaded, no ${dd} ad playing`), void Kd("Aditude ad lib not loaded", null);
        document.getElementById("GenericVideoWrapper").style.display = "flex", document.getElementById("GenericVideoInner").classList.add("AditudeVideo"), window.tude.cmd.push((function() {
          console.log("AD: Inside Aditude window.tude.cmd.push");
          try {
            window.tude.requestInstreamPlayer({
              code: Rd[dd],
              divId: "GenericVideoInner",
              mode: "adOnly"
            }).then((md => {
              console.log("AD: Inside Aditude window.tude.requestInstreamPlayer.then"), md.on("playerClose", ((md, Wd) => {
                console.log("AD: Inside Aditude player.on playerClose"), console.log(`AD: Successfully finished Aditude ${dd} ad`), Xd(), Od()
              })).on("adPrefetchError", ((dd, Od) => {
                console.log("AD: Inside Aditude player.on adPrefetchError"), Kd("Prefetch error", Od)
              })).on("adError", ((dd, Od) => {
                console.log("AD: Inside Aditude player.on adError"), Kd("Generic error", Od)
              }));
              const Wd = dd => {
                setTimeout((() => {
                  Fd || md.setVideoVolume(.5)
                }), dd)
              };
              Wd(500), Wd(1e3), Wd(1500), Wd(2e3)
            })).catch((dd => {
              Kd("Error occurred while requesting instream player", dd)
            }))
          } catch (md) {
            Kd("Failed to request instream player", md)
          }
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);