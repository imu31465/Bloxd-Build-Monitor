export const id = 138;
export const ids = [138];
export const modules = {
  7015: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      AdinPlaySdkAdaptor: () => uc
    });
    var Vc = nc(1168),
      Ic = nc(1040);
    const rB = ["CN", "VN", "IN", "PK", "ID", "EG", "BD", "SV", "DZ", "EC", "VE", "UA", "MA", "LK", "NG", "BO", "KE", "TN", "RU", "NP", "IQ", "MM", "HN", "UY", "JO", "PY", "PS", "ET", "GH", "JM", "CM", "AS", "SY", "BY", "AO", "MN", "GY", "LB", "MV", "BW", "UG"];
    class uc extends Vc.e {
      constructor() {
        super(), this.name = "adinplay", this.bannerAutoRefresh = "disableable", this.noAdCountries = rB
      }
      static async setup() {
        return await (0, Ic.b)("https://api.adinplay.com/libs/aiptag/pub/RBN/bloxd.io/tag.min.js"), new uc
      }
      playRewarded(cB, Bc) {
        if ("undefined" !== typeof window.aiptag.adplayer) {
          console.log("AD: Requesting AdInPlay preroll ad for rewarded placement");
          const nc = "video_reward";
          window.aiptag.cmd.player.push((function() {
            window.aiptag.adplayer.startPreRoll({
              alias: nc
            })
          })), window.adStartSoPause(cB, {
            onFailCb: Bc
          })
        } else console.log("AD: AIP ad lib not loaded, no rewarded ad playing"), Bc()
      }
      playVideoAd(cB, Bc) {
        "undefined" !== typeof window.aiptag.adplayer ? (console.log("AD: Requesting AdInPlay video ad" + (Bc ? ` (alias: ${Bc})` : "")), window.aiptag.cmd.player.push((function() {
          window.aiptag.adplayer.startPreRoll({
            alias: Bc
          })
        })), window.adStartSoPause(cB)) : (cB(), console.error("AIP ad lib not loaded, no ad playing"))
      }
      renderBanner(cB) {
        if ("undefined" === typeof window.aiptag.adplayer) return void console.log("AD: User has adblock, not requesting new banners");
        const {
          divId: Bc,
          alias: nc
        } = cB;
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.display({
            adUnitName: Bc,
            alias: nc
          })
        })), console.log("AD: Requested aip banner", document.getElementById(cB.divId), nc ? `(alias: ${nc})` : "")
      }
      clearBanner(cB) {
        "undefined" !== typeof window.aiptag.adplayer ? (window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.destroy(cB.divId)
        })), console.log(`AD: Clearing aip banner ad ${cB.divId}`)) : console.log("AD: User has adblock, not requesting new banners")
      }
      setBannerAutoRefreshEnabled(cB, Bc) {
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.setAutoRefresh(cB.divId, Bc)
        }))
      }
      newPageSession() {
        console.log("AD: Requesting new page session"), window.aiptag.cmd.display.push((function() {
          window.__VM.push((function(cB, Bc) {
            Bc.Instances.pageManager.newPageSession(!1)
          }))
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);