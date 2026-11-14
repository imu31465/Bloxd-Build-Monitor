export const id = 135;
export const ids = [135];
export const modules = {
  7084: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      AdinPlaySdkAdaptor: () => hF
    });
    var CF = SF(1171),
      AF = SF(1036);
    const uF = ["CN", "VN", "IN", "PK", "ID", "EG", "BD", "SV", "DZ", "EC", "VE", "UA", "MA", "LK", "NG", "BO", "KE", "TN", "RU", "NP", "IQ", "MM", "HN", "UY", "JO", "PY", "PS", "ET", "GH", "JM", "CM", "AS", "SY", "BY", "AO", "MN", "GY", "LB", "MV", "BW", "UG"];
    class hF extends CF.b {
      constructor() {
        super(), this.name = "adinplay", this.bannerAutoRefresh = "disableable", this.noAdCountries = uF
      }
      static async setup() {
        return await (0, AF.e)("https://api.adinplay.com/libs/aiptag/pub/RBN/bloxd.io/tag.min.js"), new hF
      }
      playRewarded(FF, WF) {
        if ("undefined" !== typeof window.aiptag.adplayer) {
          console.log("AD: Requesting AdInPlay preroll ad for rewarded placement");
          const SF = "video_reward";
          window.aiptag.cmd.player.push((function() {
            window.aiptag.adplayer.startPreRoll({
              alias: SF
            })
          })), window.adStartSoPause(FF, {
            onFailCb: WF
          })
        } else console.log("AD: AIP ad lib not loaded, no rewarded ad playing"), WF()
      }
      playVideoAd(FF, WF) {
        "undefined" !== typeof window.aiptag.adplayer ? (console.log("AD: Requesting AdInPlay video ad" + (WF ? ` (alias: ${WF})` : "")), window.aiptag.cmd.player.push((function() {
          window.aiptag.adplayer.startPreRoll({
            alias: WF
          })
        })), window.adStartSoPause(FF)) : (FF(), console.error("AIP ad lib not loaded, no ad playing"))
      }
      renderBanner(FF) {
        if ("undefined" === typeof window.aiptag.adplayer) return void console.log("AD: User has adblock, not requesting new banners");
        const {
          divId: WF,
          alias: SF
        } = FF;
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.display({
            adUnitName: WF,
            alias: SF
          })
        })), console.log("AD: Requested aip banner", document.getElementById(FF.divId), SF ? `(alias: ${SF})` : "")
      }
      clearBanner(FF) {
        "undefined" !== typeof window.aiptag.adplayer ? (window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.destroy(FF.divId)
        })), console.log(`AD: Clearing aip banner ad ${FF.divId}`)) : console.log("AD: User has adblock, not requesting new banners")
      }
      setBannerAutoRefreshEnabled(FF, WF) {
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.setAutoRefresh(FF.divId, WF)
        }))
      }
      newPageSession() {
        console.log("AD: Requesting new page session"), window.aiptag.cmd.display.push((function() {
          window.__VM.push((function(FF, WF) {
            WF.Instances.pageManager.newPageSession(!1)
          }))
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);