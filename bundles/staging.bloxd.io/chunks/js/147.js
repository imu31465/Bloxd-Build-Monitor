export const id = 147;
export const ids = [147];
export const modules = {
  8027: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      AdinPlaySdkAdaptor: () => xq
    });
    var Yq = gq(1304),
      lq = gq(1171),
      Oq = gq(218);
    const mq = ["CN", "VN", "IN", "PK", "ID", "EG", "BD", "SV", "DZ", "EC", "VE", "UA", "MA", "LK", "NG", "BO", "KE", "TN", "RU", "NP", "IQ", "MM", "HN", "UY", "JO", "PY", "PS", "ET", "GH", "JM", "CM", "AS", "SY", "BY", "AO", "MN", "GY", "LB", "MV", "BW", "UG"];
    class xq extends Yq.e {
      constructor() {
        super(), this.name = "adinplay", this.bannerAutoRefresh = "disableable", this.noAdCountries = mq
      }
      static async setup() {
        return (0, Oq.canonicaliseZonesWhenIdle)(mq), await (0, lq.b)("https://api.adinplay.com/libs/aiptag/pub/RBN/bloxd.io/tag.min.js"), new xq
      }
      playRewarded(qq, Eq) {
        if ("undefined" !== typeof window.aiptag.adplayer) {
          console.log("AD: Requesting AdInPlay preroll ad for rewarded placement");
          const gq = "video_reward";
          window.aiptag.cmd.player.push((function() {
            window.aiptag.adplayer.startPreRoll({
              alias: gq
            })
          })), window.adStartSoPause(qq, {
            onFailCb: Eq
          })
        } else console.log("AD: AIP ad lib not loaded, no rewarded ad playing"), Eq()
      }
      playVideoAd(qq, Eq) {
        "undefined" !== typeof window.aiptag.adplayer ? (console.log("AD: Requesting AdInPlay video ad" + (Eq ? ` (alias: ${Eq})` : "")), window.aiptag.cmd.player.push((function() {
          window.aiptag.adplayer.startPreRoll({
            alias: Eq
          })
        })), window.adStartSoPause(qq)) : (qq(), console.error("AIP ad lib not loaded, no ad playing"))
      }
      renderBanner(qq) {
        if ("undefined" === typeof window.aiptag.adplayer) return void console.log("AD: User has adblock, not requesting new banners");
        const {
          divId: Eq,
          alias: gq
        } = qq;
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.display({
            adUnitName: Eq,
            alias: gq
          })
        })), console.log("AD: Requested aip banner", document.getElementById(qq.divId), gq ? `(alias: ${gq})` : "")
      }
      clearBanner(qq) {
        "undefined" !== typeof window.aiptag.adplayer ? (window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.destroy(qq.divId)
        })), console.log(`AD: Clearing aip banner ad ${qq.divId}`)) : console.log("AD: User has adblock, not requesting new banners")
      }
      setBannerAutoRefreshEnabled(qq, Eq) {
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.setAutoRefresh(qq.divId, Eq)
        }))
      }
      newPageSession() {
        console.log("AD: Requesting new page session"), window.aiptag.cmd.display.push((function() {
          window.__VM.push((function(qq, Eq) {
            Eq.Instances.pageManager.newPageSession(!1)
          }))
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);