export const id = 146;
export const ids = [146];
export const modules = {
  8156: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      AdinPlaySdkAdaptor: () => yT
    });
    var lT = cT(1321),
      MT = cT(1190),
      KT = cT(260);
    const OT = ["CN", "VN", "IN", "PK", "ID", "EG", "BD", "SV", "DZ", "EC", "VE", "UA", "MA", "LK", "NG", "BO", "KE", "TN", "RU", "NP", "IQ", "MM", "HN", "UY", "JO", "PY", "PS", "ET", "GH", "JM", "CM", "AS", "SY", "BY", "AO", "MN", "GY", "LB", "MV", "BW", "UG"];
    class yT extends lT.b {
      constructor() {
        super(), this.name = "adinplay", this.bannerAutoRefresh = "disableable", this.noAdCountries = OT
      }
      static async setup() {
        return (0, KT.canonicaliseZonesWhenIdle)(OT), await (0, MT.e)("https://api.adinplay.com/libs/aiptag/pub/RBN/bloxd.io/tag.min.js"), new yT
      }
      playRewarded(TT, kT) {
        if ("undefined" !== typeof window.aiptag.adplayer) {
          console.log("AD: Requesting AdInPlay preroll ad for rewarded placement");
          const cT = "video_reward";
          window.aiptag.cmd.player.push((function() {
            window.aiptag.adplayer.startPreRoll({
              alias: cT
            })
          })), window.adStartSoPause(TT, {
            onFailCb: kT
          })
        } else console.log("AD: AIP ad lib not loaded, no rewarded ad playing"), kT()
      }
      playVideoAd(TT, kT) {
        "undefined" !== typeof window.aiptag.adplayer ? (console.log("AD: Requesting AdInPlay video ad" + (kT ? ` (alias: ${kT})` : "")), window.aiptag.cmd.player.push((function() {
          window.aiptag.adplayer.startPreRoll({
            alias: kT
          })
        })), window.adStartSoPause(TT)) : (TT(), console.error("AIP ad lib not loaded, no ad playing"))
      }
      renderBanner(TT) {
        if ("undefined" === typeof window.aiptag.adplayer) return void console.log("AD: User has adblock, not requesting new banners");
        const {
          divId: kT,
          alias: cT
        } = TT;
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.display({
            adUnitName: kT,
            alias: cT
          })
        })), console.log("AD: Requested aip banner", document.getElementById(TT.divId), cT ? `(alias: ${cT})` : "")
      }
      clearBanner(TT) {
        "undefined" !== typeof window.aiptag.adplayer ? (window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.destroy(TT.divId)
        })), console.log(`AD: Clearing aip banner ad ${TT.divId}`)) : console.log("AD: User has adblock, not requesting new banners")
      }
      setBannerAutoRefreshEnabled(TT, kT) {
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.setAutoRefresh(TT.divId, kT)
        }))
      }
      newPageSession() {
        console.log("AD: Requesting new page session"), window.aiptag.cmd.display.push((function() {
          window.__VM.push((function(TT, kT) {
            kT.Instances.pageManager.newPageSession(!1)
          }))
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);