export const id = 147;
export const ids = [147];
export const modules = {
  7803: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      AdinPlaySdkAdaptor: () => Lb
    });
    var Bb = hb(1211),
      Ob = hb(1077),
      Gb = hb(224);
    const Ub = ["CN", "VN", "IN", "PK", "ID", "EG", "BD", "SV", "DZ", "EC", "VE", "UA", "MA", "LK", "NG", "BO", "KE", "TN", "RU", "NP", "IQ", "MM", "HN", "UY", "JO", "PY", "PS", "ET", "GH", "JM", "CM", "AS", "SY", "BY", "AO", "MN", "GY", "LB", "MV", "BW", "UG"];
    class Lb extends Bb.b {
      constructor() {
        super(), this.name = "adinplay", this.bannerAutoRefresh = "disableable", this.noAdCountries = Ub
      }
      static async setup() {
        return (0, Gb.canonicaliseZonesWhenIdle)(Ub), await (0, Ob.d)("https://api.adinplay.com/libs/aiptag/pub/RBN/bloxd.io/tag.min.js"), new Lb
      }
      playRewarded(bb, ub) {
        if ("undefined" !== typeof window.aiptag.adplayer) {
          console.log("AD: Requesting AdInPlay preroll ad for rewarded placement");
          const hb = "video_reward";
          window.aiptag.cmd.player.push((function() {
            window.aiptag.adplayer.startPreRoll({
              alias: hb
            })
          })), window.adStartSoPause(bb, {
            onFailCb: ub
          })
        } else console.log("AD: AIP ad lib not loaded, no rewarded ad playing"), ub()
      }
      playVideoAd(bb, ub) {
        "undefined" !== typeof window.aiptag.adplayer ? (console.log("AD: Requesting AdInPlay video ad" + (ub ? ` (alias: ${ub})` : "")), window.aiptag.cmd.player.push((function() {
          window.aiptag.adplayer.startPreRoll({
            alias: ub
          })
        })), window.adStartSoPause(bb)) : (bb(), console.error("AIP ad lib not loaded, no ad playing"))
      }
      renderBanner(bb) {
        if ("undefined" === typeof window.aiptag.adplayer) return void console.log("AD: User has adblock, not requesting new banners");
        const {
          divId: ub,
          alias: hb
        } = bb;
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.display({
            adUnitName: ub,
            alias: hb
          })
        })), console.log("AD: Requested aip banner", document.getElementById(bb.divId), hb ? `(alias: ${hb})` : "")
      }
      clearBanner(bb) {
        "undefined" !== typeof window.aiptag.adplayer ? (window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.destroy(bb.divId)
        })), console.log(`AD: Clearing aip banner ad ${bb.divId}`)) : console.log("AD: User has adblock, not requesting new banners")
      }
      setBannerAutoRefreshEnabled(bb, ub) {
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.setAutoRefresh(bb.divId, ub)
        }))
      }
      newPageSession() {
        console.log("AD: Requesting new page session"), window.aiptag.cmd.display.push((function() {
          window.__VM.push((function(bb, ub) {
            ub.Instances.pageManager.newPageSession(!1)
          }))
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);