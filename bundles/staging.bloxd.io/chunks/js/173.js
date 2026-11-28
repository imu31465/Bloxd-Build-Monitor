export const id = 173;
export const ids = [173];
export const modules = {
  7678: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      AdinPlaySdkAdaptor: () => Qd
    });
    var Wd = md(1410),
      Fd = md(1229),
      Rd = md(259),
      Xd = md(3986),
      Kd = md(3988);

    function hd(dd) {
      let Od = 0;
      dd("addEventListener", 2, ((dd, md) => {
        if (!md) return void console.warn("TCF CMP couldn't report a consent event, so our consent defaults stand");
        !1 === dd.gdprApplies && (0, Xd.noteNoGdprChoiceComing)();
        const Wd = function(dd) {
          const Od = "useractioncomplete" === dd.eventStatus || "tcloaded" === dd.eventStatus && !!dd.tcString;
          return dd.gdprApplies && Od ? Kd.d.every((Od => !0 === dd.purpose.consents[Od])) : null
        }(dd);
        if (null === Wd) return;
        const Fd = ++Od;
        if (!Wd) return void(0, Xd.updateAnalyticsConsent)(!1);
        const Rd = window.__tcfapi;
        Rd ? Rd("getNonIABVendorConsents", 2, ((dd, md) => {
          var Wd;
          Fd === Od && (0, Xd.updateAnalyticsConsent)(md && !0 === (null === (Wd = dd.nonIabVendorConsents) || void 0 === Wd ? void 0 : Wd[5]))
        })) : console.warn("TCF CMP reported a choice but its __tcfapi is gone, so our consent defaults stand")
      }))
    }
    const vd = ["CN", "VN", "IN", "PK", "ID", "EG", "BD", "SV", "DZ", "EC", "VE", "UA", "MA", "LK", "NG", "BO", "KE", "TN", "RU", "NP", "IQ", "MM", "HN", "UY", "JO", "PY", "PS", "ET", "GH", "JM", "CM", "AS", "SY", "BY", "AO", "MN", "GY", "LB", "MV", "BW", "UG"];
    class Qd extends Wd.b {
      constructor() {
        super(), this.name = "adinplay", this.bannerAutoRefresh = "disableable", this.noAdCountries = vd
      }
      static async setup() {
        return (0, Rd.canonicaliseZonesWhenIdle)(vd), (0, Xd.setUpGtag)({
            tcfCmp: !0
          }), await (0, Fd.d)("https://api.adinplay.com/libs/aiptag/pub/RBN/bloxd.io/tag.min.js"),
          function() {
            if (window.__tcfapi) return void hd(window.__tcfapi);
            let dd = 0;
            const Od = window.setInterval((() => {
              dd++;
              const md = window.__tcfapi;
              md ? (window.clearInterval(Od), hd(md)) : dd >= 150 && window.clearInterval(Od)
            }), 200)
          }(), new Qd
      }
      playRewarded(dd, Od) {
        if ("undefined" !== typeof window.aiptag.adplayer) {
          console.log("AD: Requesting AdInPlay preroll ad for rewarded placement");
          const md = "video_reward";
          window.aiptag.cmd.player.push((function() {
            window.aiptag.adplayer.startPreRoll({
              alias: md
            })
          })), window.adStartSoPause(dd, {
            onFailCb: Od
          })
        } else console.log("AD: AIP ad lib not loaded, no rewarded ad playing"), Od()
      }
      playVideoAd(dd, Od) {
        "undefined" !== typeof window.aiptag.adplayer ? (console.log("AD: Requesting AdInPlay video ad" + (Od ? ` (alias: ${Od})` : "")), window.aiptag.cmd.player.push((function() {
          window.aiptag.adplayer.startPreRoll({
            alias: Od
          })
        })), window.adStartSoPause(dd)) : (dd(), console.error("AIP ad lib not loaded, no ad playing"))
      }
      willRequestBanner() {
        return "undefined" !== typeof window.aiptag.adplayer
      }
      renderBanner(dd) {
        if (!this.willRequestBanner()) return void console.log("AD: User has adblock, not requesting new banners");
        const {
          divId: Od,
          alias: md
        } = dd;
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.display({
            adUnitName: Od,
            alias: md
          })
        })), console.log("AD: Requested aip banner", document.getElementById(dd.divId), md ? `(alias: ${md})` : "")
      }
      clearBanner(dd) {
        "undefined" !== typeof window.aiptag.adplayer ? (window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.destroy(dd.divId)
        })), console.log(`AD: Clearing aip banner ad ${dd.divId}`)) : console.log("AD: User has adblock, not requesting new banners")
      }
      setBannerAutoRefreshEnabled(dd, Od) {
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.setAutoRefresh(dd.divId, Od)
        }))
      }
      newPageSession() {
        console.log("AD: Requesting new page session"), window.aiptag.cmd.display.push((function() {
          window.__VM.push((function(dd, Od) {
            Od.Instances.pageManager.newPageSession(!1)
          }))
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);