export const id = 148;
export const ids = [148];
export const modules = {
  7886: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      AditudeSdkAdaptor: () => mu
    });
    var Eu = yu(1277),
      Ku = yu(1153);
    const Qu = {
      video: "pb-slot-interstitial-video",
      rewarded: "pb-slot-rewarded-video"
    };
    class mu extends Eu.b {
      constructor() {
        super(), this.name = "aditude"
      }
      static async setup() {
        return window.tude = window.tude || {
          cmd: []
        }, await (0, Ku.b)("https://edge.aditude.io/site/bloxd-Jf9xJheMSn/bloxd-longform/bloxd.io/prod/load.js"), new mu
      }
      playVideoAd(uu, Ru) {
        this.playVideoOrRewarded("video", uu, uu)
      }
      playRewarded(uu, Ru) {
        this.playVideoOrRewarded("rewarded", uu, Ru)
      }
      renderBanner(uu) {
        const Ru = this.getBaseDivId(uu.adId, uu.width, uu.height);
        window.tude.cmd.push((function() {
          window.tude.refreshAdsViaDivMappings([{
            divId: uu.divId,
            baseDivId: Ru
          }])
        }))
      }
      getBaseDivId(uu, Ru, yu) {
        return `pb-slot-bloxdio-${Ru}-${yu}${uu>1?`-${uu}`:""}`
      }
      playVideoOrRewarded(uu, Ru, yu) {
        var Eu;
        let Ku = !1;
        const mu = () => {
            document.getElementById("GenericVideoWrapper").style.display = "none", Ku = !0
          },
          Ju = (uu, Ru) => {
            console.error(`AD: Error while playing Aditude video ad: ${uu}:`, Ru), mu(), yu()
          };
        if (console.log(`AD: Requesting Aditude ${uu} ad`), void 0 === (null === (Eu = window.tude) || void 0 === Eu ? void 0 : Eu.requestInstreamPlayer)) return console.log(`AD: Aditude ad lib not loaded, no ${uu} ad playing`), void Ju("Aditude ad lib not loaded", null);
        document.getElementById("GenericVideoWrapper").style.display = "flex", document.getElementById("GenericVideoInner").classList.add("AditudeVideo"), window.tude.cmd.push((function() {
          console.log("AD: Inside Aditude window.tude.cmd.push");
          try {
            window.tude.requestInstreamPlayer({
              code: Qu[uu],
              divId: "GenericVideoInner",
              mode: "adOnly"
            }).then((yu => {
              console.log("AD: Inside Aditude window.tude.requestInstreamPlayer.then"), yu.on("playerClose", ((yu, Eu) => {
                console.log("AD: Inside Aditude player.on playerClose"), console.log(`AD: Successfully finished Aditude ${uu} ad`), mu(), Ru()
              })).on("adPrefetchError", ((uu, Ru) => {
                console.log("AD: Inside Aditude player.on adPrefetchError"), Ju("Prefetch error", Ru)
              })).on("adError", ((uu, Ru) => {
                console.log("AD: Inside Aditude player.on adError"), Ju("Generic error", Ru)
              }));
              const Eu = uu => {
                setTimeout((() => {
                  Ku || yu.setVideoVolume(.5)
                }), uu)
              };
              Eu(500), Eu(1e3), Eu(1500), Eu(2e3)
            })).catch((uu => {
              Ju("Error occurred while requesting instream player", uu)
            }))
          } catch (yu) {
            Ju("Failed to request instream player", yu)
          }
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);