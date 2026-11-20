export const id = 146;
export const ids = [146];
export const modules = {
  7875: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      AdinPlaySdkAdaptor: () => Ju
    });
    var Eu = yu(1277),
      Ku = yu(1153),
      Qu = yu(252);
    const mu = ["CN", "VN", "IN", "PK", "ID", "EG", "BD", "SV", "DZ", "EC", "VE", "UA", "MA", "LK", "NG", "BO", "KE", "TN", "RU", "NP", "IQ", "MM", "HN", "UY", "JO", "PY", "PS", "ET", "GH", "JM", "CM", "AS", "SY", "BY", "AO", "MN", "GY", "LB", "MV", "BW", "UG"];
    class Ju extends Eu.b {
      constructor() {
        super(), this.name = "adinplay", this.bannerAutoRefresh = "disableable", this.noAdCountries = mu
      }
      static async setup() {
        return (0, Qu.canonicaliseZonesWhenIdle)(mu), await (0, Ku.b)("https://api.adinplay.com/libs/aiptag/pub/RBN/bloxd.io/tag.min.js"), new Ju
      }
      playRewarded(uu, Ru) {
        if ("undefined" !== typeof window.aiptag.adplayer) {
          console.log("AD: Requesting AdInPlay preroll ad for rewarded placement");
          const yu = "video_reward";
          window.aiptag.cmd.player.push((function() {
            window.aiptag.adplayer.startPreRoll({
              alias: yu
            })
          })), window.adStartSoPause(uu, {
            onFailCb: Ru
          })
        } else console.log("AD: AIP ad lib not loaded, no rewarded ad playing"), Ru()
      }
      playVideoAd(uu, Ru) {
        "undefined" !== typeof window.aiptag.adplayer ? (console.log("AD: Requesting AdInPlay video ad" + (Ru ? ` (alias: ${Ru})` : "")), window.aiptag.cmd.player.push((function() {
          window.aiptag.adplayer.startPreRoll({
            alias: Ru
          })
        })), window.adStartSoPause(uu)) : (uu(), console.error("AIP ad lib not loaded, no ad playing"))
      }
      renderBanner(uu) {
        if ("undefined" === typeof window.aiptag.adplayer) return void console.log("AD: User has adblock, not requesting new banners");
        const {
          divId: Ru,
          alias: yu
        } = uu;
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.display({
            adUnitName: Ru,
            alias: yu
          })
        })), console.log("AD: Requested aip banner", document.getElementById(uu.divId), yu ? `(alias: ${yu})` : "")
      }
      clearBanner(uu) {
        "undefined" !== typeof window.aiptag.adplayer ? (window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.destroy(uu.divId)
        })), console.log(`AD: Clearing aip banner ad ${uu.divId}`)) : console.log("AD: User has adblock, not requesting new banners")
      }
      setBannerAutoRefreshEnabled(uu, Ru) {
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.setAutoRefresh(uu.divId, Ru)
        }))
      }
      newPageSession() {
        console.log("AD: Requesting new page session"), window.aiptag.cmd.display.push((function() {
          window.__VM.push((function(uu, Ru) {
            Ru.Instances.pageManager.newPageSession(!1)
          }))
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);