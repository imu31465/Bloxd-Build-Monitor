export const id = 149;
export const ids = [149];
export const modules = {
  8038: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      AditudeSdkAdaptor: () => mq
    });
    var Yq = gq(1304),
      lq = gq(1171);
    const Oq = {
      video: "pb-slot-interstitial-video",
      rewarded: "pb-slot-rewarded-video"
    };
    class mq extends Yq.e {
      constructor() {
        super(), this.name = "aditude"
      }
      static async setup() {
        return window.tude = window.tude || {
          cmd: []
        }, await (0, lq.b)("https://edge.aditude.io/site/bloxd-Jf9xJheMSn/bloxd-longform/bloxd.io/prod/load.js"), new mq
      }
      playVideoAd(qq, Eq) {
        this.playVideoOrRewarded("video", qq, qq)
      }
      playRewarded(qq, Eq) {
        this.playVideoOrRewarded("rewarded", qq, Eq)
      }
      renderBanner(qq) {
        const Eq = this.getBaseDivId(qq.adId, qq.width, qq.height);
        window.tude.cmd.push((function() {
          window.tude.refreshAdsViaDivMappings([{
            divId: qq.divId,
            baseDivId: Eq
          }])
        }))
      }
      getBaseDivId(qq, Eq, gq) {
        return `pb-slot-bloxdio-${Eq}-${gq}${qq>1?`-${qq}`:""}`
      }
      playVideoOrRewarded(qq, Eq, gq) {
        var Yq;
        let lq = !1;
        const mq = () => {
            document.getElementById("GenericVideoWrapper").style.display = "none", lq = !0
          },
          xq = (qq, Eq) => {
            console.error(`AD: Error while playing Aditude video ad: ${qq}:`, Eq), mq(), gq()
          };
        if (console.log(`AD: Requesting Aditude ${qq} ad`), void 0 === (null === (Yq = window.tude) || void 0 === Yq ? void 0 : Yq.requestInstreamPlayer)) return console.log(`AD: Aditude ad lib not loaded, no ${qq} ad playing`), void xq("Aditude ad lib not loaded", null);
        document.getElementById("GenericVideoWrapper").style.display = "flex", document.getElementById("GenericVideoInner").classList.add("AditudeVideo"), window.tude.cmd.push((function() {
          console.log("AD: Inside Aditude window.tude.cmd.push");
          try {
            window.tude.requestInstreamPlayer({
              code: Oq[qq],
              divId: "GenericVideoInner",
              mode: "adOnly"
            }).then((gq => {
              console.log("AD: Inside Aditude window.tude.requestInstreamPlayer.then"), gq.on("playerClose", ((gq, Yq) => {
                console.log("AD: Inside Aditude player.on playerClose"), console.log(`AD: Successfully finished Aditude ${qq} ad`), mq(), Eq()
              })).on("adPrefetchError", ((qq, Eq) => {
                console.log("AD: Inside Aditude player.on adPrefetchError"), xq("Prefetch error", Eq)
              })).on("adError", ((qq, Eq) => {
                console.log("AD: Inside Aditude player.on adError"), xq("Generic error", Eq)
              }));
              const Yq = qq => {
                setTimeout((() => {
                  lq || gq.setVideoVolume(.5)
                }), qq)
              };
              Yq(500), Yq(1e3), Yq(1500), Yq(2e3)
            })).catch((qq => {
              xq("Error occurred while requesting instream player", qq)
            }))
          } catch (gq) {
            xq("Failed to request instream player", gq)
          }
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);