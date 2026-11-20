export const id = 146;
export const ids = [146];
export const modules = {
  7750: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      AdinPlaySdkAdaptor: () => Ub
    });
    var kb = sb(1307),
      Wb = sb(1185),
      ab = sb(264);
    const Tb = ["CN", "VN", "IN", "PK", "ID", "EG", "BD", "SV", "DZ", "EC", "VE", "UA", "MA", "LK", "NG", "BO", "KE", "TN", "RU", "NP", "IQ", "MM", "HN", "UY", "JO", "PY", "PS", "ET", "GH", "JM", "CM", "AS", "SY", "BY", "AO", "MN", "GY", "LB", "MV", "BW", "UG"];
    class Ub extends kb.c {
      constructor() {
        super(), this.name = "adinplay", this.bannerAutoRefresh = "disableable", this.noAdCountries = Tb
      }
      static async setup() {
        return (0, ab.canonicaliseZonesWhenIdle)(Tb), await (0, Wb.d)("https://api.adinplay.com/libs/aiptag/pub/RBN/bloxd.io/tag.min.js"), new Ub
      }
      playRewarded(bb, cb) {
        if ("undefined" !== typeof window.aiptag.adplayer) {
          console.log("AD: Requesting AdInPlay preroll ad for rewarded placement");
          const sb = "video_reward";
          window.aiptag.cmd.player.push((function() {
            window.aiptag.adplayer.startPreRoll({
              alias: sb
            })
          })), window.adStartSoPause(bb, {
            onFailCb: cb
          })
        } else console.log("AD: AIP ad lib not loaded, no rewarded ad playing"), cb()
      }
      playVideoAd(bb, cb) {
        "undefined" !== typeof window.aiptag.adplayer ? (console.log("AD: Requesting AdInPlay video ad" + (cb ? ` (alias: ${cb})` : "")), window.aiptag.cmd.player.push((function() {
          window.aiptag.adplayer.startPreRoll({
            alias: cb
          })
        })), window.adStartSoPause(bb)) : (bb(), console.error("AIP ad lib not loaded, no ad playing"))
      }
      renderBanner(bb) {
        if ("undefined" === typeof window.aiptag.adplayer) return void console.log("AD: User has adblock, not requesting new banners");
        const {
          divId: cb,
          alias: sb
        } = bb;
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.display({
            adUnitName: cb,
            alias: sb
          })
        })), console.log("AD: Requested aip banner", document.getElementById(bb.divId), sb ? `(alias: ${sb})` : "")
      }
      clearBanner(bb) {
        "undefined" !== typeof window.aiptag.adplayer ? (window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.destroy(bb.divId)
        })), console.log(`AD: Clearing aip banner ad ${bb.divId}`)) : console.log("AD: User has adblock, not requesting new banners")
      }
      setBannerAutoRefreshEnabled(bb, cb) {
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.setAutoRefresh(bb.divId, cb)
        }))
      }
      newPageSession() {
        console.log("AD: Requesting new page session"), window.aiptag.cmd.display.push((function() {
          window.__VM.push((function(bb, cb) {
            cb.Instances.pageManager.newPageSession(!1)
          }))
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);