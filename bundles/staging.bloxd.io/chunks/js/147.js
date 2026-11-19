export const id = 147;
export const ids = [147];
export const modules = {
  7568: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      AdinPlaySdkAdaptor: () => OY
    });
    var FY = DY(1318),
      AY = DY(1204),
      IY = DY(250);
    const RY = ["CN", "VN", "IN", "PK", "ID", "EG", "BD", "SV", "DZ", "EC", "VE", "UA", "MA", "LK", "NG", "BO", "KE", "TN", "RU", "NP", "IQ", "MM", "HN", "UY", "JO", "PY", "PS", "ET", "GH", "JM", "CM", "AS", "SY", "BY", "AO", "MN", "GY", "LB", "MV", "BW", "UG"];
    class OY extends FY.c {
      constructor() {
        super(), this.name = "adinplay", this.bannerAutoRefresh = "disableable", this.noAdCountries = RY
      }
      static async setup() {
        return (0, IY.canonicaliseZonesWhenIdle)(RY), await (0, AY.d)("https://api.adinplay.com/libs/aiptag/pub/RBN/bloxd.io/tag.min.js"), new OY
      }
      playRewarded(YY, rY) {
        if ("undefined" !== typeof window.aiptag.adplayer) {
          console.log("AD: Requesting AdInPlay preroll ad for rewarded placement");
          const DY = "video_reward";
          window.aiptag.cmd.player.push((function() {
            window.aiptag.adplayer.startPreRoll({
              alias: DY
            })
          })), window.adStartSoPause(YY, {
            onFailCb: rY
          })
        } else console.log("AD: AIP ad lib not loaded, no rewarded ad playing"), rY()
      }
      playVideoAd(YY, rY) {
        "undefined" !== typeof window.aiptag.adplayer ? (console.log("AD: Requesting AdInPlay video ad" + (rY ? ` (alias: ${rY})` : "")), window.aiptag.cmd.player.push((function() {
          window.aiptag.adplayer.startPreRoll({
            alias: rY
          })
        })), window.adStartSoPause(YY)) : (YY(), console.error("AIP ad lib not loaded, no ad playing"))
      }
      renderBanner(YY) {
        if ("undefined" === typeof window.aiptag.adplayer) return void console.log("AD: User has adblock, not requesting new banners");
        const {
          divId: rY,
          alias: DY
        } = YY;
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.display({
            adUnitName: rY,
            alias: DY
          })
        })), console.log("AD: Requested aip banner", document.getElementById(YY.divId), DY ? `(alias: ${DY})` : "")
      }
      clearBanner(YY) {
        "undefined" !== typeof window.aiptag.adplayer ? (window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.destroy(YY.divId)
        })), console.log(`AD: Clearing aip banner ad ${YY.divId}`)) : console.log("AD: User has adblock, not requesting new banners")
      }
      setBannerAutoRefreshEnabled(YY, rY) {
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.setAutoRefresh(YY.divId, rY)
        }))
      }
      newPageSession() {
        console.log("AD: Requesting new page session"), window.aiptag.cmd.display.push((function() {
          window.__VM.push((function(YY, rY) {
            rY.Instances.pageManager.newPageSession(!1)
          }))
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);