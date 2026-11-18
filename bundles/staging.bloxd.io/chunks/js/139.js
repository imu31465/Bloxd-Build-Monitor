export const id = 139;
export const ids = [139];
export const modules = {
  7441: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      AdinPlaySdkAdaptor: () => XJ
    });
    var FJ = ZJ(1205),
      UJ = ZJ(1075);
    const eJ = ["CN", "VN", "IN", "PK", "ID", "EG", "BD", "SV", "DZ", "EC", "VE", "UA", "MA", "LK", "NG", "BO", "KE", "TN", "RU", "NP", "IQ", "MM", "HN", "UY", "JO", "PY", "PS", "ET", "GH", "JM", "CM", "AS", "SY", "BY", "AO", "MN", "GY", "LB", "MV", "BW", "UG"];
    class XJ extends FJ.b {
      constructor() {
        super(), this.name = "adinplay", this.bannerAutoRefresh = "disableable", this.noAdCountries = eJ
      }
      static async setup() {
        return await (0, UJ.e)("https://api.adinplay.com/libs/aiptag/pub/RBN/bloxd.io/tag.min.js"), new XJ
      }
      playRewarded(JJ, cJ) {
        if ("undefined" !== typeof window.aiptag.adplayer) {
          console.log("AD: Requesting AdInPlay preroll ad for rewarded placement");
          const ZJ = "video_reward";
          window.aiptag.cmd.player.push((function() {
            window.aiptag.adplayer.startPreRoll({
              alias: ZJ
            })
          })), window.adStartSoPause(JJ, {
            onFailCb: cJ
          })
        } else console.log("AD: AIP ad lib not loaded, no rewarded ad playing"), cJ()
      }
      playVideoAd(JJ, cJ) {
        "undefined" !== typeof window.aiptag.adplayer ? (console.log("AD: Requesting AdInPlay video ad" + (cJ ? ` (alias: ${cJ})` : "")), window.aiptag.cmd.player.push((function() {
          window.aiptag.adplayer.startPreRoll({
            alias: cJ
          })
        })), window.adStartSoPause(JJ)) : (JJ(), console.error("AIP ad lib not loaded, no ad playing"))
      }
      renderBanner(JJ) {
        if ("undefined" === typeof window.aiptag.adplayer) return void console.log("AD: User has adblock, not requesting new banners");
        const {
          divId: cJ,
          alias: ZJ
        } = JJ;
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.display({
            adUnitName: cJ,
            alias: ZJ
          })
        })), console.log("AD: Requested aip banner", document.getElementById(JJ.divId), ZJ ? `(alias: ${ZJ})` : "")
      }
      clearBanner(JJ) {
        "undefined" !== typeof window.aiptag.adplayer ? (window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.destroy(JJ.divId)
        })), console.log(`AD: Clearing aip banner ad ${JJ.divId}`)) : console.log("AD: User has adblock, not requesting new banners")
      }
      setBannerAutoRefreshEnabled(JJ, cJ) {
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.setAutoRefresh(JJ.divId, cJ)
        }))
      }
      newPageSession() {
        console.log("AD: Requesting new page session"), window.aiptag.cmd.display.push((function() {
          window.__VM.push((function(JJ, cJ) {
            cJ.Instances.pageManager.newPageSession(!1)
          }))
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);