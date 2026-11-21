export const id = 147;
export const ids = [147];
export const modules = {
  7991: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      AdinPlaySdkAdaptor: () => Zd
    });
    var pd = kd(1341),
      Nd = kd(1195),
      Wd = kd(237);
    const Pd = ["CN", "VN", "IN", "PK", "ID", "EG", "BD", "SV", "DZ", "EC", "VE", "UA", "MA", "LK", "NG", "BO", "KE", "TN", "RU", "NP", "IQ", "MM", "HN", "UY", "JO", "PY", "PS", "ET", "GH", "JM", "CM", "AS", "SY", "BY", "AO", "MN", "GY", "LB", "MV", "BW", "UG"];
    class Zd extends pd.d {
      constructor() {
        super(), this.name = "adinplay", this.bannerAutoRefresh = "disableable", this.noAdCountries = Pd
      }
      static async setup() {
        return (0, Wd.canonicaliseZonesWhenIdle)(Pd), await (0, Nd.c)("https://api.adinplay.com/libs/aiptag/pub/RBN/bloxd.io/tag.min.js"), new Zd
      }
      playRewarded(dd, Jd) {
        if ("undefined" !== typeof window.aiptag.adplayer) {
          console.log("AD: Requesting AdInPlay preroll ad for rewarded placement");
          const kd = "video_reward";
          window.aiptag.cmd.player.push((function() {
            window.aiptag.adplayer.startPreRoll({
              alias: kd
            })
          })), window.adStartSoPause(dd, {
            onFailCb: Jd
          })
        } else console.log("AD: AIP ad lib not loaded, no rewarded ad playing"), Jd()
      }
      playVideoAd(dd, Jd) {
        "undefined" !== typeof window.aiptag.adplayer ? (console.log("AD: Requesting AdInPlay video ad" + (Jd ? ` (alias: ${Jd})` : "")), window.aiptag.cmd.player.push((function() {
          window.aiptag.adplayer.startPreRoll({
            alias: Jd
          })
        })), window.adStartSoPause(dd)) : (dd(), console.error("AIP ad lib not loaded, no ad playing"))
      }
      renderBanner(dd) {
        if ("undefined" === typeof window.aiptag.adplayer) return void console.log("AD: User has adblock, not requesting new banners");
        const {
          divId: Jd,
          alias: kd
        } = dd;
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.display({
            adUnitName: Jd,
            alias: kd
          })
        })), console.log("AD: Requested aip banner", document.getElementById(dd.divId), kd ? `(alias: ${kd})` : "")
      }
      clearBanner(dd) {
        "undefined" !== typeof window.aiptag.adplayer ? (window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.destroy(dd.divId)
        })), console.log(`AD: Clearing aip banner ad ${dd.divId}`)) : console.log("AD: User has adblock, not requesting new banners")
      }
      setBannerAutoRefreshEnabled(dd, Jd) {
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.setAutoRefresh(dd.divId, Jd)
        }))
      }
      newPageSession() {
        console.log("AD: Requesting new page session"), window.aiptag.cmd.display.push((function() {
          window.__VM.push((function(dd, Jd) {
            Jd.Instances.pageManager.newPageSession(!1)
          }))
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);