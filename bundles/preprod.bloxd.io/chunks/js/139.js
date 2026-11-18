export const id = 139;
export const ids = [139];
export const modules = {
  7286: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      AdinPlaySdkAdaptor: () => Zy
    });
    var Uy = Wy(1169),
      hy = Wy(1029);
    const fy = ["CN", "VN", "IN", "PK", "ID", "EG", "BD", "SV", "DZ", "EC", "VE", "UA", "MA", "LK", "NG", "BO", "KE", "TN", "RU", "NP", "IQ", "MM", "HN", "UY", "JO", "PY", "PS", "ET", "GH", "JM", "CM", "AS", "SY", "BY", "AO", "MN", "GY", "LB", "MV", "BW", "UG"];
    class Zy extends Uy.b {
      constructor() {
        super(), this.name = "adinplay", this.bannerAutoRefresh = "disableable", this.noAdCountries = fy
      }
      static async setup() {
        return await (0, hy.b)("https://api.adinplay.com/libs/aiptag/pub/RBN/bloxd.io/tag.min.js"), new Zy
      }
      playRewarded(yb, bb) {
        if ("undefined" !== typeof window.aiptag.adplayer) {
          console.log("AD: Requesting AdInPlay preroll ad for rewarded placement");
          const Wy = "video_reward";
          window.aiptag.cmd.player.push((function() {
            window.aiptag.adplayer.startPreRoll({
              alias: Wy
            })
          })), window.adStartSoPause(yb, {
            onFailCb: bb
          })
        } else console.log("AD: AIP ad lib not loaded, no rewarded ad playing"), bb()
      }
      playVideoAd(yb, bb) {
        "undefined" !== typeof window.aiptag.adplayer ? (console.log("AD: Requesting AdInPlay video ad" + (bb ? ` (alias: ${bb})` : "")), window.aiptag.cmd.player.push((function() {
          window.aiptag.adplayer.startPreRoll({
            alias: bb
          })
        })), window.adStartSoPause(yb)) : (yb(), console.error("AIP ad lib not loaded, no ad playing"))
      }
      renderBanner(yb) {
        if ("undefined" === typeof window.aiptag.adplayer) return void console.log("AD: User has adblock, not requesting new banners");
        const {
          divId: bb,
          alias: Wy
        } = yb;
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.display({
            adUnitName: bb,
            alias: Wy
          })
        })), console.log("AD: Requested aip banner", document.getElementById(yb.divId), Wy ? `(alias: ${Wy})` : "")
      }
      clearBanner(yb) {
        "undefined" !== typeof window.aiptag.adplayer ? (window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.destroy(yb.divId)
        })), console.log(`AD: Clearing aip banner ad ${yb.divId}`)) : console.log("AD: User has adblock, not requesting new banners")
      }
      setBannerAutoRefreshEnabled(yb, bb) {
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.setAutoRefresh(yb.divId, bb)
        }))
      }
      newPageSession() {
        console.log("AD: Requesting new page session"), window.aiptag.cmd.display.push((function() {
          window.__VM.push((function(yb, bb) {
            bb.Instances.pageManager.newPageSession(!1)
          }))
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);