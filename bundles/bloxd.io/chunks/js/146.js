export const id = 146;
export const ids = [146];
export const modules = {
  7708: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      AdinPlaySdkAdaptor: () => Yb
    });
    var Ab = Ub(1240),
      Mb = Ub(1118),
      Tb = Ub(236);
    const Eb = ["CN", "VN", "IN", "PK", "ID", "EG", "BD", "SV", "DZ", "EC", "VE", "UA", "MA", "LK", "NG", "BO", "KE", "TN", "RU", "NP", "IQ", "MM", "HN", "UY", "JO", "PY", "PS", "ET", "GH", "JM", "CM", "AS", "SY", "BY", "AO", "MN", "GY", "LB", "MV", "BW", "UG"];
    class Yb extends Ab.d {
      constructor() {
        super(), this.name = "adinplay", this.bannerAutoRefresh = "disableable", this.noAdCountries = Eb
      }
      static async setup() {
        return (0, Tb.canonicaliseZonesWhenIdle)(Eb), await (0, Mb.b)("https://api.adinplay.com/libs/aiptag/pub/RBN/bloxd.io/tag.min.js"), new Yb
      }
      playRewarded(bb, ab) {
        if ("undefined" !== typeof window.aiptag.adplayer) {
          console.log("AD: Requesting AdInPlay preroll ad for rewarded placement");
          const Ub = "video_reward";
          window.aiptag.cmd.player.push((function() {
            window.aiptag.adplayer.startPreRoll({
              alias: Ub
            })
          })), window.adStartSoPause(bb, {
            onFailCb: ab
          })
        } else console.log("AD: AIP ad lib not loaded, no rewarded ad playing"), ab()
      }
      playVideoAd(bb, ab) {
        "undefined" !== typeof window.aiptag.adplayer ? (console.log("AD: Requesting AdInPlay video ad" + (ab ? ` (alias: ${ab})` : "")), window.aiptag.cmd.player.push((function() {
          window.aiptag.adplayer.startPreRoll({
            alias: ab
          })
        })), window.adStartSoPause(bb)) : (bb(), console.error("AIP ad lib not loaded, no ad playing"))
      }
      renderBanner(bb) {
        if ("undefined" === typeof window.aiptag.adplayer) return void console.log("AD: User has adblock, not requesting new banners");
        const {
          divId: ab,
          alias: Ub
        } = bb;
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.display({
            adUnitName: ab,
            alias: Ub
          })
        })), console.log("AD: Requested aip banner", document.getElementById(bb.divId), Ub ? `(alias: ${Ub})` : "")
      }
      clearBanner(bb) {
        "undefined" !== typeof window.aiptag.adplayer ? (window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.destroy(bb.divId)
        })), console.log(`AD: Clearing aip banner ad ${bb.divId}`)) : console.log("AD: User has adblock, not requesting new banners")
      }
      setBannerAutoRefreshEnabled(bb, ab) {
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.setAutoRefresh(bb.divId, ab)
        }))
      }
      newPageSession() {
        console.log("AD: Requesting new page session"), window.aiptag.cmd.display.push((function() {
          window.__VM.push((function(bb, ab) {
            ab.Instances.pageManager.newPageSession(!1)
          }))
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);