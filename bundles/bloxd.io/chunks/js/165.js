export const id = 165;
export const ids = [165];
export const modules = {
  7221: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => QM
    });
    var OM = iM(3241);
    const SM = [1, 8, 9],
      jM = 5,
      aM = 200,
      PM = 150;

    function nM(MM, rM) {
      let iM = 0;
      MM("addEventListener", 2, ((MM, aM) => {
        if (!aM) return void console.warn("TCF CMP couldn't report a consent event, so our consent defaults stand");
        const PM = function(MM) {
          const rM = "useractioncomplete" === MM.eventStatus || "tcloaded" === MM.eventStatus && !!MM.tcString;
          return MM.gdprApplies && rM ? SM.every((rM => !0 === MM.purpose.consents[rM])) : null
        }(MM);
        if (null === PM) return;
        const nM = ++iM;
        if (!PM) return void(0, OM.updateAnalyticsConsent)(!1);
        if ("nitro" === rM) return void(0, OM.updateAnalyticsConsent)(!0);
        const QM = window.__tcfapi;
        QM ? QM("getNonIABVendorConsents", 2, ((MM, rM) => {
          var SM;
          nM === iM && (0, OM.updateAnalyticsConsent)(rM && !0 === (null === (SM = MM.nonIabVendorConsents) || void 0 === SM ? void 0 : SM[jM]))
        })) : console.warn("TCF CMP reported a choice but its __tcfapi is gone, so our consent defaults stand")
      }))
    }

    function QM(MM) {
      if (window.__tcfapi) return void nM(window.__tcfapi, MM);
      let rM = 0;
      const iM = window.setInterval((() => {
        rM++;
        const OM = window.__tcfapi;
        OM ? (window.clearInterval(iM), nM(OM, MM)) : rM >= PM && window.clearInterval(iM)
      }), aM)
    }
  },
  7215: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      AdinPlaySdkAdaptor: () => QM
    });
    var OM = iM(1367),
      SM = iM(1177),
      jM = iM(212),
      aM = iM(7221),
      PM = iM(3241);
    const nM = ["CN", "VN", "IN", "PK", "ID", "EG", "BD", "SV", "DZ", "EC", "VE", "UA", "MA", "LK", "NG", "BO", "KE", "TN", "RU", "NP", "IQ", "MM", "HN", "UY", "JO", "PY", "PS", "ET", "GH", "JM", "CM", "AS", "SY", "BY", "AO", "MN", "GY", "LB", "MV", "BW", "UG"];
    class QM extends OM.d {
      constructor() {
        super(), this.name = "adinplay", this.bannerAutoRefresh = "disableable", this.noAdCountries = nM
      }
      static async setup() {
        return (0, jM.canonicaliseZonesWhenIdle)(nM), (0, PM.setUpGtag)(), await (0, SM.d)("https://api.adinplay.com/libs/aiptag/pub/RBN/bloxd.io/tag.min.js"), (0, aM.e)("inMobi"), new QM
      }
      playRewarded(MM, rM) {
        if ("undefined" !== typeof window.aiptag.adplayer) {
          console.log("AD: Requesting AdInPlay preroll ad for rewarded placement");
          const iM = "video_reward";
          window.aiptag.cmd.player.push((function() {
            window.aiptag.adplayer.startPreRoll({
              alias: iM
            })
          })), window.adStartSoPause(MM, {
            onFailCb: rM
          })
        } else console.log("AD: AIP ad lib not loaded, no rewarded ad playing"), rM()
      }
      playVideoAd(MM, rM) {
        "undefined" !== typeof window.aiptag.adplayer ? (console.log("AD: Requesting AdInPlay video ad" + (rM ? ` (alias: ${rM})` : "")), window.aiptag.cmd.player.push((function() {
          window.aiptag.adplayer.startPreRoll({
            alias: rM
          })
        })), window.adStartSoPause(MM)) : (MM(), console.error("AIP ad lib not loaded, no ad playing"))
      }
      renderBanner(MM) {
        if ("undefined" === typeof window.aiptag.adplayer) return void console.log("AD: User has adblock, not requesting new banners");
        const {
          divId: rM,
          alias: iM
        } = MM;
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.display({
            adUnitName: rM,
            alias: iM
          })
        })), console.log("AD: Requested aip banner", document.getElementById(MM.divId), iM ? `(alias: ${iM})` : "")
      }
      clearBanner(MM) {
        "undefined" !== typeof window.aiptag.adplayer ? (window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.destroy(MM.divId)
        })), console.log(`AD: Clearing aip banner ad ${MM.divId}`)) : console.log("AD: User has adblock, not requesting new banners")
      }
      setBannerAutoRefreshEnabled(MM, rM) {
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.setAutoRefresh(MM.divId, rM)
        }))
      }
      newPageSession() {
        console.log("AD: Requesting new page session"), window.aiptag.cmd.display.push((function() {
          window.__VM.push((function(MM, rM) {
            rM.Instances.pageManager.newPageSession(!1)
          }))
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);