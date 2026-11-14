export const id = 135;
export const ids = [135];
export const modules = {
  7051: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      AdinPlaySdkAdaptor: () => AW
    });
    var wW = MW(1144),
      CW = MW(1020);
    const zR = ["CN", "VN", "IN", "PK", "ID", "EG", "BD", "SV", "DZ", "EC", "VE", "UA", "MA", "LK", "NG", "BO", "KE", "TN", "RU", "NP", "IQ", "MM", "HN", "UY", "JO", "PY", "PS", "ET", "GH", "JM", "CM", "AS", "SY", "BY", "AO", "MN", "GY", "LB", "MV", "BW", "UG"];
    class AW extends wW.d {
      constructor() {
        super(), this.name = "adinplay", this.bannerAutoRefresh = "disableable", this.noAdCountries = zR
      }
      static async setup() {
        return await (0, CW.d)("https://api.adinplay.com/libs/aiptag/pub/RBN/bloxd.io/tag.min.js"), new AW
      }
      playRewarded(WW, RW) {
        if ("undefined" !== typeof window.aiptag.adplayer) {
          console.log("AD: Requesting AdInPlay preroll ad for rewarded placement");
          const MW = "video_reward";
          window.aiptag.cmd.player.push((function() {
            window.aiptag.adplayer.startPreRoll({
              alias: MW
            })
          })), window.adStartSoPause(WW, {
            onFailCb: RW
          })
        } else console.log("AD: AIP ad lib not loaded, no rewarded ad playing"), RW()
      }
      playVideoAd(WW, RW) {
        "undefined" !== typeof window.aiptag.adplayer ? (console.log("AD: Requesting AdInPlay video ad" + (RW ? ` (alias: ${RW})` : "")), window.aiptag.cmd.player.push((function() {
          window.aiptag.adplayer.startPreRoll({
            alias: RW
          })
        })), window.adStartSoPause(WW)) : (WW(), console.error("AIP ad lib not loaded, no ad playing"))
      }
      renderBanner(WW) {
        if ("undefined" === typeof window.aiptag.adplayer) return void console.log("AD: User has adblock, not requesting new banners");
        const {
          divId: RW,
          alias: MW
        } = WW;
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.display({
            adUnitName: RW,
            alias: MW
          })
        })), console.log("AD: Requested aip banner", document.getElementById(WW.divId), MW ? `(alias: ${MW})` : "")
      }
      clearBanner(WW) {
        "undefined" !== typeof window.aiptag.adplayer ? (window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.destroy(WW.divId)
        })), console.log(`AD: Clearing aip banner ad ${WW.divId}`)) : console.log("AD: User has adblock, not requesting new banners")
      }
      setBannerAutoRefreshEnabled(WW, RW) {
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.setAutoRefresh(WW.divId, RW)
        }))
      }
      newPageSession() {
        console.log("AD: Requesting new page session"), window.aiptag.cmd.display.push((function() {
          window.__VM.push((function(WW, RW) {
            RW.Instances.pageManager.newPageSession(!1)
          }))
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);