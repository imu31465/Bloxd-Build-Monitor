export const id = 146;
export const ids = [146];
export const modules = {
  7782: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      AdinPlaySdkAdaptor: () => bk
    });
    var Rk = Bk(1262),
      tk = Bk(1139),
      ak = Bk(215);
    const Xk = ["CN", "VN", "IN", "PK", "ID", "EG", "BD", "SV", "DZ", "EC", "VE", "UA", "MA", "LK", "NG", "BO", "KE", "TN", "RU", "NP", "IQ", "MM", "HN", "UY", "JO", "PY", "PS", "ET", "GH", "JM", "CM", "AS", "SY", "BY", "AO", "MN", "GY", "LB", "MV", "BW", "UG"];
    class bk extends Rk.d {
      constructor() {
        super(), this.name = "adinplay", this.bannerAutoRefresh = "disableable", this.noAdCountries = Xk
      }
      static async setup() {
        return (0, ak.canonicaliseZonesWhenIdle)(Xk), await (0, tk.b)("https://api.adinplay.com/libs/aiptag/pub/RBN/bloxd.io/tag.min.js"), new bk
      }
      playRewarded(kk, Fk) {
        if ("undefined" !== typeof window.aiptag.adplayer) {
          console.log("AD: Requesting AdInPlay preroll ad for rewarded placement");
          const Bk = "video_reward";
          window.aiptag.cmd.player.push((function() {
            window.aiptag.adplayer.startPreRoll({
              alias: Bk
            })
          })), window.adStartSoPause(kk, {
            onFailCb: Fk
          })
        } else console.log("AD: AIP ad lib not loaded, no rewarded ad playing"), Fk()
      }
      playVideoAd(kk, Fk) {
        "undefined" !== typeof window.aiptag.adplayer ? (console.log("AD: Requesting AdInPlay video ad" + (Fk ? ` (alias: ${Fk})` : "")), window.aiptag.cmd.player.push((function() {
          window.aiptag.adplayer.startPreRoll({
            alias: Fk
          })
        })), window.adStartSoPause(kk)) : (kk(), console.error("AIP ad lib not loaded, no ad playing"))
      }
      renderBanner(kk) {
        if ("undefined" === typeof window.aiptag.adplayer) return void console.log("AD: User has adblock, not requesting new banners");
        const {
          divId: Fk,
          alias: Bk
        } = kk;
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.display({
            adUnitName: Fk,
            alias: Bk
          })
        })), console.log("AD: Requested aip banner", document.getElementById(kk.divId), Bk ? `(alias: ${Bk})` : "")
      }
      clearBanner(kk) {
        "undefined" !== typeof window.aiptag.adplayer ? (window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.destroy(kk.divId)
        })), console.log(`AD: Clearing aip banner ad ${kk.divId}`)) : console.log("AD: User has adblock, not requesting new banners")
      }
      setBannerAutoRefreshEnabled(kk, Fk) {
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.setAutoRefresh(kk.divId, Fk)
        }))
      }
      newPageSession() {
        console.log("AD: Requesting new page session"), window.aiptag.cmd.display.push((function() {
          window.__VM.push((function(kk, Fk) {
            Fk.Instances.pageManager.newPageSession(!1)
          }))
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);