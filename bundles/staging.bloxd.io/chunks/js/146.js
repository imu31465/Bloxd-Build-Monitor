export const id = 146;
export const ids = [146];
export const modules = {
  7808: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      AdinPlaySdkAdaptor: () => Mz
    });
    var Ez = bz(1288),
      nz = bz(1171),
      iz = bz(235);
    const lz = ["CN", "VN", "IN", "PK", "ID", "EG", "BD", "SV", "DZ", "EC", "VE", "UA", "MA", "LK", "NG", "BO", "KE", "TN", "RU", "NP", "IQ", "MM", "HN", "UY", "JO", "PY", "PS", "ET", "GH", "JM", "CM", "AS", "SY", "BY", "AO", "MN", "GY", "LB", "MV", "BW", "UG"];
    class Mz extends Ez.b {
      constructor() {
        super(), this.name = "adinplay", this.bannerAutoRefresh = "disableable", this.noAdCountries = lz
      }
      static async setup() {
        return (0, iz.canonicaliseZonesWhenIdle)(lz), await (0, nz.e)("https://api.adinplay.com/libs/aiptag/pub/RBN/bloxd.io/tag.min.js"), new Mz
      }
      playRewarded(zz, uz) {
        if ("undefined" !== typeof window.aiptag.adplayer) {
          console.log("AD: Requesting AdInPlay preroll ad for rewarded placement");
          const bz = "video_reward";
          window.aiptag.cmd.player.push((function() {
            window.aiptag.adplayer.startPreRoll({
              alias: bz
            })
          })), window.adStartSoPause(zz, {
            onFailCb: uz
          })
        } else console.log("AD: AIP ad lib not loaded, no rewarded ad playing"), uz()
      }
      playVideoAd(zz, uz) {
        "undefined" !== typeof window.aiptag.adplayer ? (console.log("AD: Requesting AdInPlay video ad" + (uz ? ` (alias: ${uz})` : "")), window.aiptag.cmd.player.push((function() {
          window.aiptag.adplayer.startPreRoll({
            alias: uz
          })
        })), window.adStartSoPause(zz)) : (zz(), console.error("AIP ad lib not loaded, no ad playing"))
      }
      renderBanner(zz) {
        if ("undefined" === typeof window.aiptag.adplayer) return void console.log("AD: User has adblock, not requesting new banners");
        const {
          divId: uz,
          alias: bz
        } = zz;
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.display({
            adUnitName: uz,
            alias: bz
          })
        })), console.log("AD: Requested aip banner", document.getElementById(zz.divId), bz ? `(alias: ${bz})` : "")
      }
      clearBanner(zz) {
        "undefined" !== typeof window.aiptag.adplayer ? (window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.destroy(zz.divId)
        })), console.log(`AD: Clearing aip banner ad ${zz.divId}`)) : console.log("AD: User has adblock, not requesting new banners")
      }
      setBannerAutoRefreshEnabled(zz, uz) {
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.setAutoRefresh(zz.divId, uz)
        }))
      }
      newPageSession() {
        console.log("AD: Requesting new page session"), window.aiptag.cmd.display.push((function() {
          window.__VM.push((function(zz, uz) {
            uz.Instances.pageManager.newPageSession(!1)
          }))
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);