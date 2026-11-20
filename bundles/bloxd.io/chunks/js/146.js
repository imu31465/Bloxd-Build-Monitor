export const id = 146;
export const ids = [146];
export const modules = {
  7641: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      AdinPlaySdkAdaptor: () => oz
    });
    var Fz = sz(1291),
      Wz = sz(1167),
      Xz = sz(240);
    const Oz = ["CN", "VN", "IN", "PK", "ID", "EG", "BD", "SV", "DZ", "EC", "VE", "UA", "MA", "LK", "NG", "BO", "KE", "TN", "RU", "NP", "IQ", "MM", "HN", "UY", "JO", "PY", "PS", "ET", "GH", "JM", "CM", "AS", "SY", "BY", "AO", "MN", "GY", "LB", "MV", "BW", "UG"];
    class oz extends Fz.d {
      constructor() {
        super(), this.name = "adinplay", this.bannerAutoRefresh = "disableable", this.noAdCountries = Oz
      }
      static async setup() {
        return (0, Xz.canonicaliseZonesWhenIdle)(Oz), await (0, Wz.c)("https://api.adinplay.com/libs/aiptag/pub/RBN/bloxd.io/tag.min.js"), new oz
      }
      playRewarded(zz, tz) {
        if ("undefined" !== typeof window.aiptag.adplayer) {
          console.log("AD: Requesting AdInPlay preroll ad for rewarded placement");
          const sz = "video_reward";
          window.aiptag.cmd.player.push((function() {
            window.aiptag.adplayer.startPreRoll({
              alias: sz
            })
          })), window.adStartSoPause(zz, {
            onFailCb: tz
          })
        } else console.log("AD: AIP ad lib not loaded, no rewarded ad playing"), tz()
      }
      playVideoAd(zz, tz) {
        "undefined" !== typeof window.aiptag.adplayer ? (console.log("AD: Requesting AdInPlay video ad" + (tz ? ` (alias: ${tz})` : "")), window.aiptag.cmd.player.push((function() {
          window.aiptag.adplayer.startPreRoll({
            alias: tz
          })
        })), window.adStartSoPause(zz)) : (zz(), console.error("AIP ad lib not loaded, no ad playing"))
      }
      renderBanner(zz) {
        if ("undefined" === typeof window.aiptag.adplayer) return void console.log("AD: User has adblock, not requesting new banners");
        const {
          divId: tz,
          alias: sz
        } = zz;
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.display({
            adUnitName: tz,
            alias: sz
          })
        })), console.log("AD: Requested aip banner", document.getElementById(zz.divId), sz ? `(alias: ${sz})` : "")
      }
      clearBanner(zz) {
        "undefined" !== typeof window.aiptag.adplayer ? (window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.destroy(zz.divId)
        })), console.log(`AD: Clearing aip banner ad ${zz.divId}`)) : console.log("AD: User has adblock, not requesting new banners")
      }
      setBannerAutoRefreshEnabled(zz, tz) {
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.setAutoRefresh(zz.divId, tz)
        }))
      }
      newPageSession() {
        console.log("AD: Requesting new page session"), window.aiptag.cmd.display.push((function() {
          window.__VM.push((function(zz, tz) {
            tz.Instances.pageManager.newPageSession(!1)
          }))
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);