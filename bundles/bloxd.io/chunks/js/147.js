export const id = 147;
export const ids = [147];
export const modules = {
  7927: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      AdinPlaySdkAdaptor: () => kQ
    });
    var LQ = wQ(1335),
      qQ = wQ(1196),
      oQ = wQ(239);
    const DQ = ["CN", "VN", "IN", "PK", "ID", "EG", "BD", "SV", "DZ", "EC", "VE", "UA", "MA", "LK", "NG", "BO", "KE", "TN", "RU", "NP", "IQ", "MM", "HN", "UY", "JO", "PY", "PS", "ET", "GH", "JM", "CM", "AS", "SY", "BY", "AO", "MN", "GY", "LB", "MV", "BW", "UG"];
    class kQ extends LQ.b {
      constructor() {
        super(), this.name = "adinplay", this.bannerAutoRefresh = "disableable", this.noAdCountries = DQ
      }
      static async setup() {
        return (0, oQ.canonicaliseZonesWhenIdle)(DQ), await (0, qQ.e)("https://api.adinplay.com/libs/aiptag/pub/RBN/bloxd.io/tag.min.js"), new kQ
      }
      playRewarded(QQ, FQ) {
        if ("undefined" !== typeof window.aiptag.adplayer) {
          console.log("AD: Requesting AdInPlay preroll ad for rewarded placement");
          const wQ = "video_reward";
          window.aiptag.cmd.player.push((function() {
            window.aiptag.adplayer.startPreRoll({
              alias: wQ
            })
          })), window.adStartSoPause(QQ, {
            onFailCb: FQ
          })
        } else console.log("AD: AIP ad lib not loaded, no rewarded ad playing"), FQ()
      }
      playVideoAd(QQ, FQ) {
        "undefined" !== typeof window.aiptag.adplayer ? (console.log("AD: Requesting AdInPlay video ad" + (FQ ? ` (alias: ${FQ})` : "")), window.aiptag.cmd.player.push((function() {
          window.aiptag.adplayer.startPreRoll({
            alias: FQ
          })
        })), window.adStartSoPause(QQ)) : (QQ(), console.error("AIP ad lib not loaded, no ad playing"))
      }
      renderBanner(QQ) {
        if ("undefined" === typeof window.aiptag.adplayer) return void console.log("AD: User has adblock, not requesting new banners");
        const {
          divId: FQ,
          alias: wQ
        } = QQ;
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.display({
            adUnitName: FQ,
            alias: wQ
          })
        })), console.log("AD: Requested aip banner", document.getElementById(QQ.divId), wQ ? `(alias: ${wQ})` : "")
      }
      clearBanner(QQ) {
        "undefined" !== typeof window.aiptag.adplayer ? (window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.destroy(QQ.divId)
        })), console.log(`AD: Clearing aip banner ad ${QQ.divId}`)) : console.log("AD: User has adblock, not requesting new banners")
      }
      setBannerAutoRefreshEnabled(QQ, FQ) {
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.setAutoRefresh(QQ.divId, FQ)
        }))
      }
      newPageSession() {
        console.log("AD: Requesting new page session"), window.aiptag.cmd.display.push((function() {
          window.__VM.push((function(QQ, FQ) {
            FQ.Instances.pageManager.newPageSession(!1)
          }))
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);