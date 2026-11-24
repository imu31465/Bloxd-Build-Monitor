export const id = 157;
export const ids = [157];
export const modules = {
  8281: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      AditudeSdkAdaptor: () => Sp
    });
    var Op = cp(1341),
      op = cp(1194);
    const Ip = {
      video: "pb-slot-interstitial-video",
      rewarded: "pb-slot-rewarded-video"
    };
    class Sp extends Op.b {
      constructor() {
        super(), this.name = "aditude"
      }
      static async setup() {
        return window.tude = window.tude || {
          cmd: []
        }, await (0, op.b)("https://edge.aditude.io/site/bloxd-Jf9xJheMSn/bloxd-longform/bloxd.io/prod/load.js"), new Sp
      }
      playVideoAd(pp, ip) {
        this.playVideoOrRewarded("video", pp, pp)
      }
      playRewarded(pp, ip) {
        this.playVideoOrRewarded("rewarded", pp, ip)
      }
      renderBanner(pp) {
        const ip = this.getBaseDivId(pp.adId, pp.width, pp.height);
        window.tude.cmd.push((function() {
          window.tude.refreshAdsViaDivMappings([{
            divId: pp.divId,
            baseDivId: ip
          }])
        }))
      }
      getBaseDivId(pp, ip, cp) {
        return `pb-slot-bloxdio-${ip}-${cp}${pp>1?`-${pp}`:""}`
      }
      playVideoOrRewarded(pp, ip, cp) {
        var Op;
        let op = !1;
        const Sp = () => {
            document.getElementById("GenericVideoWrapper").style.display = "none", op = !0
          },
          xp = (pp, ip) => {
            console.error(`AD: Error while playing Aditude video ad: ${pp}:`, ip), Sp(), cp()
          };
        if (console.log(`AD: Requesting Aditude ${pp} ad`), void 0 === (null === (Op = window.tude) || void 0 === Op ? void 0 : Op.requestInstreamPlayer)) return console.log(`AD: Aditude ad lib not loaded, no ${pp} ad playing`), void xp("Aditude ad lib not loaded", null);
        document.getElementById("GenericVideoWrapper").style.display = "flex", document.getElementById("GenericVideoInner").classList.add("AditudeVideo"), window.tude.cmd.push((function() {
          console.log("AD: Inside Aditude window.tude.cmd.push");
          try {
            window.tude.requestInstreamPlayer({
              code: Ip[pp],
              divId: "GenericVideoInner",
              mode: "adOnly"
            }).then((cp => {
              console.log("AD: Inside Aditude window.tude.requestInstreamPlayer.then"), cp.on("playerClose", ((cp, Op) => {
                console.log("AD: Inside Aditude player.on playerClose"), console.log(`AD: Successfully finished Aditude ${pp} ad`), Sp(), ip()
              })).on("adPrefetchError", ((pp, ip) => {
                console.log("AD: Inside Aditude player.on adPrefetchError"), xp("Prefetch error", ip)
              })).on("adError", ((pp, ip) => {
                console.log("AD: Inside Aditude player.on adError"), xp("Generic error", ip)
              }));
              const Op = pp => {
                setTimeout((() => {
                  op || cp.setVideoVolume(.5)
                }), pp)
              };
              Op(500), Op(1e3), Op(1500), Op(2e3)
            })).catch((pp => {
              xp("Error occurred while requesting instream player", pp)
            }))
          } catch (cp) {
            xp("Failed to request instream player", cp)
          }
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);