export const id = 166;
export const ids = [166];
export const modules = {
  7282: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      AdinPlaySdkAdaptor: () => EH
    });
    var AH = LH(1289),
      rH = LH(1110),
      SH = LH(202),
      hH = LH(3209),
      tH = LH(3218);

    function zH(HH) {
      let BH = 0;
      HH("addEventListener", 2, ((HH, LH) => {
        if (!LH) return void console.warn("TCF CMP couldn't report a consent event, so our consent defaults stand");
        !1 === HH.gdprApplies && (0, hH.noteNoGdprChoiceComing)();
        const AH = function(HH) {
          const BH = "useractioncomplete" === HH.eventStatus || "tcloaded" === HH.eventStatus && !!HH.tcString;
          return HH.gdprApplies && BH ? tH.e.every((BH => !0 === HH.purpose.consents[BH])) : null
        }(HH);
        if (null === AH) return;
        const rH = ++BH;
        if (!AH) return void(0, hH.updateAnalyticsConsent)(!1);
        const SH = window.__tcfapi;
        SH ? SH("getNonIABVendorConsents", 2, ((HH, LH) => {
          var AH;
          rH === BH && (0, hH.updateAnalyticsConsent)(LH && !0 === (null === (AH = HH.nonIabVendorConsents) || void 0 === AH ? void 0 : AH[5]))
        })) : console.warn("TCF CMP reported a choice but its __tcfapi is gone, so our consent defaults stand")
      }))
    }
    const CH = ["CN", "VN", "IN", "PK", "ID", "EG", "BD", "SV", "DZ", "EC", "VE", "UA", "MA", "LK", "NG", "BO", "KE", "TN", "RU", "NP", "IQ", "MM", "HN", "UY", "JO", "PY", "PS", "ET", "GH", "JM", "CM", "AS", "SY", "BY", "AO", "MN", "GY", "LB", "MV", "BW", "UG"];
    class EH extends AH.b {
      constructor() {
        super(), this.name = "adinplay", this.bannerAutoRefresh = "disableable", this.noAdCountries = CH
      }
      static async setup() {
        return (0, SH.canonicaliseZonesWhenIdle)(CH), (0, hH.setUpGtag)({
            tcfCmp: !0
          }), await (0, rH.e)("https://api.adinplay.com/libs/aiptag/pub/RBN/bloxd.io/tag.min.js"),
          function() {
            if (window.__tcfapi) return void zH(window.__tcfapi);
            let HH = 0;
            const BH = window.setInterval((() => {
              HH++;
              const LH = window.__tcfapi;
              LH ? (window.clearInterval(BH), zH(LH)) : HH >= 150 && window.clearInterval(BH)
            }), 200)
          }(), new EH
      }
      playRewarded(HH, BH) {
        if ("undefined" !== typeof window.aiptag.adplayer) {
          console.log("AD: Requesting AdInPlay preroll ad for rewarded placement");
          const LH = "video_reward";
          window.aiptag.cmd.player.push((function() {
            window.aiptag.adplayer.startPreRoll({
              alias: LH
            })
          })), window.adStartSoPause(HH, {
            onFailCb: BH
          })
        } else console.log("AD: AIP ad lib not loaded, no rewarded ad playing"), BH()
      }
      playVideoAd(HH, BH) {
        "undefined" !== typeof window.aiptag.adplayer ? (console.log("AD: Requesting AdInPlay video ad" + (BH ? ` (alias: ${BH})` : "")), window.aiptag.cmd.player.push((function() {
          window.aiptag.adplayer.startPreRoll({
            alias: BH
          })
        })), window.adStartSoPause(HH)) : (HH(), console.error("AIP ad lib not loaded, no ad playing"))
      }
      willRequestBanner() {
        return "undefined" !== typeof window.aiptag.adplayer
      }
      renderBanner(HH) {
        if (!this.willRequestBanner()) return void console.log("AD: User has adblock, not requesting new banners");
        const {
          divId: BH,
          alias: LH
        } = HH;
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.display({
            adUnitName: BH,
            alias: LH
          })
        })), console.log("AD: Requested aip banner", document.getElementById(HH.divId), LH ? `(alias: ${LH})` : "")
      }
      clearBanner(HH) {
        "undefined" !== typeof window.aiptag.adplayer ? (window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.destroy(HH.divId)
        })), console.log(`AD: Clearing aip banner ad ${HH.divId}`)) : console.log("AD: User has adblock, not requesting new banners")
      }
      setBannerAutoRefreshEnabled(HH, BH) {
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.setAutoRefresh(HH.divId, BH)
        }))
      }
      newPageSession() {
        console.log("AD: Requesting new page session"), window.aiptag.cmd.display.push((function() {
          window.__VM.push((function(HH, BH) {
            BH.Instances.pageManager.newPageSession(!1)
          }))
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);