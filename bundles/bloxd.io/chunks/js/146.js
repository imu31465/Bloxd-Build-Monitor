export const id = 146;
export const ids = [146];
export const modules = {
  7775: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      AdinPlaySdkAdaptor: () => TU
    });
    var tU = gU(1312),
      pU = gU(1174),
      EU = gU(225);
    const PU = ["CN", "VN", "IN", "PK", "ID", "EG", "BD", "SV", "DZ", "EC", "VE", "UA", "MA", "LK", "NG", "BO", "KE", "TN", "RU", "NP", "IQ", "MM", "HN", "UY", "JO", "PY", "PS", "ET", "GH", "JM", "CM", "AS", "SY", "BY", "AO", "MN", "GY", "LB", "MV", "BW", "UG"];
    class TU extends tU.b {
      constructor() {
        super(), this.name = "adinplay", this.bannerAutoRefresh = "disableable", this.noAdCountries = PU
      }
      static async setup() {
        return (0, EU.canonicaliseZonesWhenIdle)(PU), await (0, pU.e)("https://api.adinplay.com/libs/aiptag/pub/RBN/bloxd.io/tag.min.js"), new TU
      }
      playRewarded(UU, RU) {
        if ("undefined" !== typeof window.aiptag.adplayer) {
          console.log("AD: Requesting AdInPlay preroll ad for rewarded placement");
          const gU = "video_reward";
          window.aiptag.cmd.player.push((function() {
            window.aiptag.adplayer.startPreRoll({
              alias: gU
            })
          })), window.adStartSoPause(UU, {
            onFailCb: RU
          })
        } else console.log("AD: AIP ad lib not loaded, no rewarded ad playing"), RU()
      }
      playVideoAd(UU, RU) {
        "undefined" !== typeof window.aiptag.adplayer ? (console.log("AD: Requesting AdInPlay video ad" + (RU ? ` (alias: ${RU})` : "")), window.aiptag.cmd.player.push((function() {
          window.aiptag.adplayer.startPreRoll({
            alias: RU
          })
        })), window.adStartSoPause(UU)) : (UU(), console.error("AIP ad lib not loaded, no ad playing"))
      }
      renderBanner(UU) {
        if ("undefined" === typeof window.aiptag.adplayer) return void console.log("AD: User has adblock, not requesting new banners");
        const {
          divId: RU,
          alias: gU
        } = UU;
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.display({
            adUnitName: RU,
            alias: gU
          })
        })), console.log("AD: Requested aip banner", document.getElementById(UU.divId), gU ? `(alias: ${gU})` : "")
      }
      clearBanner(UU) {
        "undefined" !== typeof window.aiptag.adplayer ? (window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.destroy(UU.divId)
        })), console.log(`AD: Clearing aip banner ad ${UU.divId}`)) : console.log("AD: User has adblock, not requesting new banners")
      }
      setBannerAutoRefreshEnabled(UU, RU) {
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.setAutoRefresh(UU.divId, RU)
        }))
      }
      newPageSession() {
        console.log("AD: Requesting new page session"), window.aiptag.cmd.display.push((function() {
          window.__VM.push((function(UU, RU) {
            RU.Instances.pageManager.newPageSession(!1)
          }))
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);