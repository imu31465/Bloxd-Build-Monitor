export const id = 147;
export const ids = [147];
export const modules = {
  7572: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      AdinPlaySdkAdaptor: () => XT
    });
    var iT = IT(1286),
      zT = IT(1160),
      kT = IT(231);
    const WT = ["CN", "VN", "IN", "PK", "ID", "EG", "BD", "SV", "DZ", "EC", "VE", "UA", "MA", "LK", "NG", "BO", "KE", "TN", "RU", "NP", "IQ", "MM", "HN", "UY", "JO", "PY", "PS", "ET", "GH", "JM", "CM", "AS", "SY", "BY", "AO", "MN", "GY", "LB", "MV", "BW", "UG"];
    class XT extends iT.d {
      constructor() {
        super(), this.name = "adinplay", this.bannerAutoRefresh = "disableable", this.noAdCountries = WT
      }
      static async setup() {
        return (0, kT.canonicaliseZonesWhenIdle)(WT), await (0, zT.b)("https://api.adinplay.com/libs/aiptag/pub/RBN/bloxd.io/tag.min.js"), new XT
      }
      playRewarded(TT, oT) {
        if ("undefined" !== typeof window.aiptag.adplayer) {
          console.log("AD: Requesting AdInPlay preroll ad for rewarded placement");
          const IT = "video_reward";
          window.aiptag.cmd.player.push((function() {
            window.aiptag.adplayer.startPreRoll({
              alias: IT
            })
          })), window.adStartSoPause(TT, {
            onFailCb: oT
          })
        } else console.log("AD: AIP ad lib not loaded, no rewarded ad playing"), oT()
      }
      playVideoAd(TT, oT) {
        "undefined" !== typeof window.aiptag.adplayer ? (console.log("AD: Requesting AdInPlay video ad" + (oT ? ` (alias: ${oT})` : "")), window.aiptag.cmd.player.push((function() {
          window.aiptag.adplayer.startPreRoll({
            alias: oT
          })
        })), window.adStartSoPause(TT)) : (TT(), console.error("AIP ad lib not loaded, no ad playing"))
      }
      renderBanner(TT) {
        if ("undefined" === typeof window.aiptag.adplayer) return void console.log("AD: User has adblock, not requesting new banners");
        const {
          divId: oT,
          alias: IT
        } = TT;
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.display({
            adUnitName: oT,
            alias: IT
          })
        })), console.log("AD: Requested aip banner", document.getElementById(TT.divId), IT ? `(alias: ${IT})` : "")
      }
      clearBanner(TT) {
        "undefined" !== typeof window.aiptag.adplayer ? (window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.destroy(TT.divId)
        })), console.log(`AD: Clearing aip banner ad ${TT.divId}`)) : console.log("AD: User has adblock, not requesting new banners")
      }
      setBannerAutoRefreshEnabled(TT, oT) {
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.setAutoRefresh(TT.divId, oT)
        }))
      }
      newPageSession() {
        console.log("AD: Requesting new page session"), window.aiptag.cmd.display.push((function() {
          window.__VM.push((function(TT, oT) {
            oT.Instances.pageManager.newPageSession(!1)
          }))
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);