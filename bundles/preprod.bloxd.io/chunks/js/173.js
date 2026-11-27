export const id = 173;
export const ids = [173];
export const modules = {
  7751: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      AdinPlaySdkAdaptor: () => tW
    });
    var mW = OW(1343),
      EW = OW(1162),
      NW = OW(212),
      PW = OW(3960),
      LW = OW(3966);

    function cW(WW) {
      let iW = 0;
      WW("addEventListener", 2, ((WW, OW) => {
        if (!OW) return void console.warn("TCF CMP couldn't report a consent event, so our consent defaults stand");
        !1 === WW.gdprApplies && (0, PW.noteNoGdprChoiceComing)();
        const mW = function(WW) {
          const iW = "useractioncomplete" === WW.eventStatus || "tcloaded" === WW.eventStatus && !!WW.tcString;
          return WW.gdprApplies && iW ? LW.b.every((iW => !0 === WW.purpose.consents[iW])) : null
        }(WW);
        if (null === mW) return;
        const EW = ++iW;
        if (!mW) return void(0, PW.updateAnalyticsConsent)(!1);
        const NW = window.__tcfapi;
        NW ? NW("getNonIABVendorConsents", 2, ((WW, OW) => {
          var mW;
          EW === iW && (0, PW.updateAnalyticsConsent)(OW && !0 === (null === (mW = WW.nonIabVendorConsents) || void 0 === mW ? void 0 : mW[5]))
        })) : console.warn("TCF CMP reported a choice but its __tcfapi is gone, so our consent defaults stand")
      }))
    }
    const wW = ["CN", "VN", "IN", "PK", "ID", "EG", "BD", "SV", "DZ", "EC", "VE", "UA", "MA", "LK", "NG", "BO", "KE", "TN", "RU", "NP", "IQ", "MM", "HN", "UY", "JO", "PY", "PS", "ET", "GH", "JM", "CM", "AS", "SY", "BY", "AO", "MN", "GY", "LB", "MV", "BW", "UG"];
    class tW extends mW.c {
      constructor() {
        super(), this.name = "adinplay", this.bannerAutoRefresh = "disableable", this.noAdCountries = wW
      }
      static async setup() {
        return (0, NW.canonicaliseZonesWhenIdle)(wW), (0, PW.setUpGtag)({
            tcfCmp: !0
          }), await (0, EW.d)("https://api.adinplay.com/libs/aiptag/pub/RBN/bloxd.io/tag.min.js"),
          function() {
            if (window.__tcfapi) return void cW(window.__tcfapi);
            let WW = 0;
            const iW = window.setInterval((() => {
              WW++;
              const OW = window.__tcfapi;
              OW ? (window.clearInterval(iW), cW(OW)) : WW >= 150 && window.clearInterval(iW)
            }), 200)
          }(), new tW
      }
      playRewarded(WW, iW) {
        if ("undefined" !== typeof window.aiptag.adplayer) {
          console.log("AD: Requesting AdInPlay preroll ad for rewarded placement");
          const OW = "video_reward";
          window.aiptag.cmd.player.push((function() {
            window.aiptag.adplayer.startPreRoll({
              alias: OW
            })
          })), window.adStartSoPause(WW, {
            onFailCb: iW
          })
        } else console.log("AD: AIP ad lib not loaded, no rewarded ad playing"), iW()
      }
      playVideoAd(WW, iW) {
        "undefined" !== typeof window.aiptag.adplayer ? (console.log("AD: Requesting AdInPlay video ad" + (iW ? ` (alias: ${iW})` : "")), window.aiptag.cmd.player.push((function() {
          window.aiptag.adplayer.startPreRoll({
            alias: iW
          })
        })), window.adStartSoPause(WW)) : (WW(), console.error("AIP ad lib not loaded, no ad playing"))
      }
      willRequestBanner() {
        return "undefined" !== typeof window.aiptag.adplayer
      }
      renderBanner(WW) {
        if (!this.willRequestBanner()) return void console.log("AD: User has adblock, not requesting new banners");
        const {
          divId: iW,
          alias: OW
        } = WW;
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.display({
            adUnitName: iW,
            alias: OW
          })
        })), console.log("AD: Requested aip banner", document.getElementById(WW.divId), OW ? `(alias: ${OW})` : "")
      }
      clearBanner(WW) {
        "undefined" !== typeof window.aiptag.adplayer ? (window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.destroy(WW.divId)
        })), console.log(`AD: Clearing aip banner ad ${WW.divId}`)) : console.log("AD: User has adblock, not requesting new banners")
      }
      setBannerAutoRefreshEnabled(WW, iW) {
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.setAutoRefresh(WW.divId, iW)
        }))
      }
      newPageSession() {
        console.log("AD: Requesting new page session"), window.aiptag.cmd.display.push((function() {
          window.__VM.push((function(WW, iW) {
            iW.Instances.pageManager.newPageSession(!1)
          }))
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);