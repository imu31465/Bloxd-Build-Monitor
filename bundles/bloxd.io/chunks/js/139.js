export const id = 139;
export const ids = [139];
export const modules = {
  7463: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      AdinPlaySdkAdaptor: () => JB
    });
    var VB = dB(1204),
      yB = dB(1068),
      pB = dB(212);
    const lB = ["CN", "VN", "IN", "PK", "ID", "EG", "BD", "SV", "DZ", "EC", "VE", "UA", "MA", "LK", "NG", "BO", "KE", "TN", "RU", "NP", "IQ", "MM", "HN", "UY", "JO", "PY", "PS", "ET", "GH", "JM", "CM", "AS", "SY", "BY", "AO", "MN", "GY", "LB", "MV", "BW", "UG"];
    class JB extends VB.e {
      constructor() {
        super(), this.name = "adinplay", this.bannerAutoRefresh = "disableable", this.noAdCountries = lB
      }
      static async setup() {
        return (0, pB.canonicaliseZonesWhenIdle)(lB), await (0, yB.c)("https://api.adinplay.com/libs/aiptag/pub/RBN/bloxd.io/tag.min.js"), new JB
      }
      playRewarded(BB, TB) {
        if ("undefined" !== typeof window.aiptag.adplayer) {
          console.log("AD: Requesting AdInPlay preroll ad for rewarded placement");
          const dB = "video_reward";
          window.aiptag.cmd.player.push((function() {
            window.aiptag.adplayer.startPreRoll({
              alias: dB
            })
          })), window.adStartSoPause(BB, {
            onFailCb: TB
          })
        } else console.log("AD: AIP ad lib not loaded, no rewarded ad playing"), TB()
      }
      playVideoAd(BB, TB) {
        "undefined" !== typeof window.aiptag.adplayer ? (console.log("AD: Requesting AdInPlay video ad" + (TB ? ` (alias: ${TB})` : "")), window.aiptag.cmd.player.push((function() {
          window.aiptag.adplayer.startPreRoll({
            alias: TB
          })
        })), window.adStartSoPause(BB)) : (BB(), console.error("AIP ad lib not loaded, no ad playing"))
      }
      renderBanner(BB) {
        if ("undefined" === typeof window.aiptag.adplayer) return void console.log("AD: User has adblock, not requesting new banners");
        const {
          divId: TB,
          alias: dB
        } = BB;
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.display({
            adUnitName: TB,
            alias: dB
          })
        })), console.log("AD: Requested aip banner", document.getElementById(BB.divId), dB ? `(alias: ${dB})` : "")
      }
      clearBanner(BB) {
        "undefined" !== typeof window.aiptag.adplayer ? (window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.destroy(BB.divId)
        })), console.log(`AD: Clearing aip banner ad ${BB.divId}`)) : console.log("AD: User has adblock, not requesting new banners")
      }
      setBannerAutoRefreshEnabled(BB, TB) {
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.setAutoRefresh(BB.divId, TB)
        }))
      }
      newPageSession() {
        console.log("AD: Requesting new page session"), window.aiptag.cmd.display.push((function() {
          window.__VM.push((function(BB, TB) {
            TB.Instances.pageManager.newPageSession(!1)
          }))
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);