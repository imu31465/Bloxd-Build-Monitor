export const id = 166;
export const ids = [166];
export const modules = {
  7369: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      AdinPlaySdkAdaptor: () => oe
    });
    var ye = He(1300),
      be = He(1119),
      Me = He(225),
      Ke = He(3142),
      Ue = He(3148);

    function Fe(ee) {
      let ie = 0;
      ee("addEventListener", 2, ((ee, He) => {
        if (!He) return void console.warn("TCF CMP couldn't report a consent event, so our consent defaults stand");
        !1 === ee.gdprApplies && (0, Ke.noteNoGdprChoiceComing)();
        const ye = function(ee) {
          const ie = "useractioncomplete" === ee.eventStatus || "tcloaded" === ee.eventStatus && !!ee.tcString;
          return ee.gdprApplies && ie ? Ue.c.every((ie => !0 === ee.purpose.consents[ie])) : null
        }(ee);
        if (null === ye) return;
        const be = ++ie;
        if (!ye) return void(0, Ke.updateAnalyticsConsent)(!1);
        const Me = window.__tcfapi;
        Me ? Me("getNonIABVendorConsents", 2, ((ee, He) => {
          var ye;
          be === ie && (0, Ke.updateAnalyticsConsent)(He && !0 === (null === (ye = ee.nonIabVendorConsents) || void 0 === ye ? void 0 : ye[5]))
        })) : console.warn("TCF CMP reported a choice but its __tcfapi is gone, so our consent defaults stand")
      }))
    }
    const Je = ["CN", "VN", "IN", "PK", "ID", "EG", "BD", "SV", "DZ", "EC", "VE", "UA", "MA", "LK", "NG", "BO", "KE", "TN", "RU", "NP", "IQ", "MM", "HN", "UY", "JO", "PY", "PS", "ET", "GH", "JM", "CM", "AS", "SY", "BY", "AO", "MN", "GY", "LB", "MV", "BW", "UG"];
    class oe extends ye.d {
      constructor() {
        super(), this.name = "adinplay", this.bannerAutoRefresh = "disableable", this.noAdCountries = Je
      }
      static async setup() {
        return (0, Me.canonicaliseZonesWhenIdle)(Je), (0, Ke.setUpGtag)({
            tcfCmp: !0
          }), await (0, be.b)("https://api.adinplay.com/libs/aiptag/pub/RBN/bloxd.io/tag.min.js"),
          function() {
            if (window.__tcfapi) return void Fe(window.__tcfapi);
            let ee = 0;
            const ie = window.setInterval((() => {
              ee++;
              const He = window.__tcfapi;
              He ? (window.clearInterval(ie), Fe(He)) : ee >= 150 && window.clearInterval(ie)
            }), 200)
          }(), new oe
      }
      playRewarded(ee, ie) {
        if ("undefined" !== typeof window.aiptag.adplayer) {
          console.log("AD: Requesting AdInPlay preroll ad for rewarded placement");
          const He = "video_reward";
          window.aiptag.cmd.player.push((function() {
            window.aiptag.adplayer.startPreRoll({
              alias: He
            })
          })), window.adStartSoPause(ee, {
            onFailCb: ie
          })
        } else console.log("AD: AIP ad lib not loaded, no rewarded ad playing"), ie()
      }
      playVideoAd(ee, ie) {
        "undefined" !== typeof window.aiptag.adplayer ? (console.log("AD: Requesting AdInPlay video ad" + (ie ? ` (alias: ${ie})` : "")), window.aiptag.cmd.player.push((function() {
          window.aiptag.adplayer.startPreRoll({
            alias: ie
          })
        })), window.adStartSoPause(ee)) : (ee(), console.error("AIP ad lib not loaded, no ad playing"))
      }
      willRequestBanner() {
        return "undefined" !== typeof window.aiptag.adplayer
      }
      renderBanner(ee) {
        if (!this.willRequestBanner()) return void console.log("AD: User has adblock, not requesting new banners");
        const {
          divId: ie,
          alias: He
        } = ee;
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.display({
            adUnitName: ie,
            alias: He
          })
        })), console.log("AD: Requested aip banner", document.getElementById(ee.divId), He ? `(alias: ${He})` : "")
      }
      clearBanner(ee) {
        "undefined" !== typeof window.aiptag.adplayer ? (window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.destroy(ee.divId)
        })), console.log(`AD: Clearing aip banner ad ${ee.divId}`)) : console.log("AD: User has adblock, not requesting new banners")
      }
      setBannerAutoRefreshEnabled(ee, ie) {
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.setAutoRefresh(ee.divId, ie)
        }))
      }
      newPageSession() {
        console.log("AD: Requesting new page session"), window.aiptag.cmd.display.push((function() {
          window.__VM.push((function(ee, ie) {
            ie.Instances.pageManager.newPageSession(!1)
          }))
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);