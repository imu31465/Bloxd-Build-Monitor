export const id = 146;
export const ids = [146];
export const modules = {
  7812: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      AdinPlaySdkAdaptor: () => bD
    });
    var ID = cD(1308),
      pD = cD(1181),
      iD = cD(245);
    const fD = ["CN", "VN", "IN", "PK", "ID", "EG", "BD", "SV", "DZ", "EC", "VE", "UA", "MA", "LK", "NG", "BO", "KE", "TN", "RU", "NP", "IQ", "MM", "HN", "UY", "JO", "PY", "PS", "ET", "GH", "JM", "CM", "AS", "SY", "BY", "AO", "MN", "GY", "LB", "MV", "BW", "UG"];
    class bD extends ID.e {
      constructor() {
        super(), this.name = "adinplay", this.bannerAutoRefresh = "disableable", this.noAdCountries = fD
      }
      static async setup() {
        return (0, iD.canonicaliseZonesWhenIdle)(fD), await (0, pD.e)("https://api.adinplay.com/libs/aiptag/pub/RBN/bloxd.io/tag.min.js"), new bD
      }
      playRewarded(DD, CD) {
        if ("undefined" !== typeof window.aiptag.adplayer) {
          console.log("AD: Requesting AdInPlay preroll ad for rewarded placement");
          const cD = "video_reward";
          window.aiptag.cmd.player.push((function() {
            window.aiptag.adplayer.startPreRoll({
              alias: cD
            })
          })), window.adStartSoPause(DD, {
            onFailCb: CD
          })
        } else console.log("AD: AIP ad lib not loaded, no rewarded ad playing"), CD()
      }
      playVideoAd(DD, CD) {
        "undefined" !== typeof window.aiptag.adplayer ? (console.log("AD: Requesting AdInPlay video ad" + (CD ? ` (alias: ${CD})` : "")), window.aiptag.cmd.player.push((function() {
          window.aiptag.adplayer.startPreRoll({
            alias: CD
          })
        })), window.adStartSoPause(DD)) : (DD(), console.error("AIP ad lib not loaded, no ad playing"))
      }
      renderBanner(DD) {
        if ("undefined" === typeof window.aiptag.adplayer) return void console.log("AD: User has adblock, not requesting new banners");
        const {
          divId: CD,
          alias: cD
        } = DD;
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.display({
            adUnitName: CD,
            alias: cD
          })
        })), console.log("AD: Requested aip banner", document.getElementById(DD.divId), cD ? `(alias: ${cD})` : "")
      }
      clearBanner(DD) {
        "undefined" !== typeof window.aiptag.adplayer ? (window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.destroy(DD.divId)
        })), console.log(`AD: Clearing aip banner ad ${DD.divId}`)) : console.log("AD: User has adblock, not requesting new banners")
      }
      setBannerAutoRefreshEnabled(DD, CD) {
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.setAutoRefresh(DD.divId, CD)
        }))
      }
      newPageSession() {
        console.log("AD: Requesting new page session"), window.aiptag.cmd.display.push((function() {
          window.__VM.push((function(DD, CD) {
            CD.Instances.pageManager.newPageSession(!1)
          }))
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);