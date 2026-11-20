export const id = 146;
export const ids = [146];
export const modules = {
  7825: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      AdinPlaySdkAdaptor: () => pv
    });
    var hv = Pv(1299),
      Sv = Pv(1164),
      ev = Pv(229);
    const gv = ["CN", "VN", "IN", "PK", "ID", "EG", "BD", "SV", "DZ", "EC", "VE", "UA", "MA", "LK", "NG", "BO", "KE", "TN", "RU", "NP", "IQ", "MM", "HN", "UY", "JO", "PY", "PS", "ET", "GH", "JM", "CM", "AS", "SY", "BY", "AO", "MN", "GY", "LB", "MV", "BW", "UG"];
    class pv extends hv.c {
      constructor() {
        super(), this.name = "adinplay", this.bannerAutoRefresh = "disableable", this.noAdCountries = gv
      }
      static async setup() {
        return (0, ev.canonicaliseZonesWhenIdle)(gv), await (0, Sv.d)("https://api.adinplay.com/libs/aiptag/pub/RBN/bloxd.io/tag.min.js"), new pv
      }
      playRewarded(vv, zv) {
        if ("undefined" !== typeof window.aiptag.adplayer) {
          console.log("AD: Requesting AdInPlay preroll ad for rewarded placement");
          const Pv = "video_reward";
          window.aiptag.cmd.player.push((function() {
            window.aiptag.adplayer.startPreRoll({
              alias: Pv
            })
          })), window.adStartSoPause(vv, {
            onFailCb: zv
          })
        } else console.log("AD: AIP ad lib not loaded, no rewarded ad playing"), zv()
      }
      playVideoAd(vv, zv) {
        "undefined" !== typeof window.aiptag.adplayer ? (console.log("AD: Requesting AdInPlay video ad" + (zv ? ` (alias: ${zv})` : "")), window.aiptag.cmd.player.push((function() {
          window.aiptag.adplayer.startPreRoll({
            alias: zv
          })
        })), window.adStartSoPause(vv)) : (vv(), console.error("AIP ad lib not loaded, no ad playing"))
      }
      renderBanner(vv) {
        if ("undefined" === typeof window.aiptag.adplayer) return void console.log("AD: User has adblock, not requesting new banners");
        const {
          divId: zv,
          alias: Pv
        } = vv;
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.display({
            adUnitName: zv,
            alias: Pv
          })
        })), console.log("AD: Requested aip banner", document.getElementById(vv.divId), Pv ? `(alias: ${Pv})` : "")
      }
      clearBanner(vv) {
        "undefined" !== typeof window.aiptag.adplayer ? (window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.destroy(vv.divId)
        })), console.log(`AD: Clearing aip banner ad ${vv.divId}`)) : console.log("AD: User has adblock, not requesting new banners")
      }
      setBannerAutoRefreshEnabled(vv, zv) {
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.setAutoRefresh(vv.divId, zv)
        }))
      }
      newPageSession() {
        console.log("AD: Requesting new page session"), window.aiptag.cmd.display.push((function() {
          window.__VM.push((function(vv, zv) {
            zv.Instances.pageManager.newPageSession(!1)
          }))
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);