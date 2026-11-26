export const id = 164;
export const ids = [164];
export const modules = {
  7342: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      AdinPlaySdkAdaptor: () => EU
    });
    var cU = zU(1351),
      yU = zU(1184),
      QU = zU(241),
      AU = zU(3221),
      FU = zU(3229);

    function oU(UU) {
      let XU = 0;
      UU("addEventListener", 2, ((UU, zU) => {
        if (!zU) return void console.warn("TCF CMP couldn't report a consent event, so our consent defaults stand");
        !1 === UU.gdprApplies && (0, AU.noteNoGdprChoiceComing)();
        const cU = function(UU) {
          const XU = "useractioncomplete" === UU.eventStatus || "tcloaded" === UU.eventStatus && !!UU.tcString;
          return UU.gdprApplies && XU ? FU.d.every((XU => !0 === UU.purpose.consents[XU])) : null
        }(UU);
        if (null === cU) return;
        const yU = ++XU;
        if (!cU) return void(0, AU.updateAnalyticsConsent)(!1);
        const QU = window.__tcfapi;
        QU ? QU("getNonIABVendorConsents", 2, ((UU, zU) => {
          var cU;
          yU === XU && (0, AU.updateAnalyticsConsent)(zU && !0 === (null === (cU = UU.nonIabVendorConsents) || void 0 === cU ? void 0 : cU[5]))
        })) : console.warn("TCF CMP reported a choice but its __tcfapi is gone, so our consent defaults stand")
      }))
    }
    const DU = ["CN", "VN", "IN", "PK", "ID", "EG", "BD", "SV", "DZ", "EC", "VE", "UA", "MA", "LK", "NG", "BO", "KE", "TN", "RU", "NP", "IQ", "MM", "HN", "UY", "JO", "PY", "PS", "ET", "GH", "JM", "CM", "AS", "SY", "BY", "AO", "MN", "GY", "LB", "MV", "BW", "UG"];
    class EU extends cU.d {
      constructor() {
        super(), this.name = "adinplay", this.bannerAutoRefresh = "disableable", this.noAdCountries = DU
      }
      static async setup() {
        return (0, QU.canonicaliseZonesWhenIdle)(DU), (0, AU.setUpGtag)({
            tcfCmp: !0
          }), await (0, yU.c)("https://api.adinplay.com/libs/aiptag/pub/RBN/bloxd.io/tag.min.js"),
          function() {
            if (window.__tcfapi) return void oU(window.__tcfapi);
            let UU = 0;
            const XU = window.setInterval((() => {
              UU++;
              const zU = window.__tcfapi;
              zU ? (window.clearInterval(XU), oU(zU)) : UU >= 150 && window.clearInterval(XU)
            }), 200)
          }(), new EU
      }
      playRewarded(UU, XU) {
        if ("undefined" !== typeof window.aiptag.adplayer) {
          console.log("AD: Requesting AdInPlay preroll ad for rewarded placement");
          const zU = "video_reward";
          window.aiptag.cmd.player.push((function() {
            window.aiptag.adplayer.startPreRoll({
              alias: zU
            })
          })), window.adStartSoPause(UU, {
            onFailCb: XU
          })
        } else console.log("AD: AIP ad lib not loaded, no rewarded ad playing"), XU()
      }
      playVideoAd(UU, XU) {
        "undefined" !== typeof window.aiptag.adplayer ? (console.log("AD: Requesting AdInPlay video ad" + (XU ? ` (alias: ${XU})` : "")), window.aiptag.cmd.player.push((function() {
          window.aiptag.adplayer.startPreRoll({
            alias: XU
          })
        })), window.adStartSoPause(UU)) : (UU(), console.error("AIP ad lib not loaded, no ad playing"))
      }
      willRequestBanner() {
        return "undefined" !== typeof window.aiptag.adplayer
      }
      renderBanner(UU) {
        if (!this.willRequestBanner()) return void console.log("AD: User has adblock, not requesting new banners");
        const {
          divId: XU,
          alias: zU
        } = UU;
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.display({
            adUnitName: XU,
            alias: zU
          })
        })), console.log("AD: Requested aip banner", document.getElementById(UU.divId), zU ? `(alias: ${zU})` : "")
      }
      clearBanner(UU) {
        "undefined" !== typeof window.aiptag.adplayer ? (window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.destroy(UU.divId)
        })), console.log(`AD: Clearing aip banner ad ${UU.divId}`)) : console.log("AD: User has adblock, not requesting new banners")
      }
      setBannerAutoRefreshEnabled(UU, XU) {
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.setAutoRefresh(UU.divId, XU)
        }))
      }
      newPageSession() {
        console.log("AD: Requesting new page session"), window.aiptag.cmd.display.push((function() {
          window.__VM.push((function(UU, XU) {
            XU.Instances.pageManager.newPageSession(!1)
          }))
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);