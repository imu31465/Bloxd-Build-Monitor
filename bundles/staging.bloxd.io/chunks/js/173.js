export const id = 173;
export const ids = [173];
export const modules = {
  7888: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      AdinPlaySdkAdaptor: () => VR
    });
    var yR = GR(1447),
      tR = GR(1258),
      uR = GR(244),
      ZR = GR(4053),
      qR = GR(4056);

    function iR(RR) {
      let JR = 0;
      RR("addEventListener", 2, ((RR, GR) => {
        if (!GR) return void console.warn("TCF CMP couldn't report a consent event, so our consent defaults stand");
        !1 === RR.gdprApplies && (0, ZR.noteNoGdprChoiceComing)();
        const yR = function(RR) {
          const JR = "useractioncomplete" === RR.eventStatus || "tcloaded" === RR.eventStatus && !!RR.tcString;
          return RR.gdprApplies && JR ? qR.d.every((JR => !0 === RR.purpose.consents[JR])) : null
        }(RR);
        if (null === yR) return;
        const tR = ++JR;
        if (!yR) return void(0, ZR.updateAnalyticsConsent)(!1);
        const uR = window.__tcfapi;
        uR ? uR("getNonIABVendorConsents", 2, ((RR, GR) => {
          var yR;
          tR === JR && (0, ZR.updateAnalyticsConsent)(GR && !0 === (null === (yR = RR.nonIabVendorConsents) || void 0 === yR ? void 0 : yR[5]))
        })) : console.warn("TCF CMP reported a choice but its __tcfapi is gone, so our consent defaults stand")
      }))
    }
    const fR = ["CN", "VN", "IN", "PK", "ID", "EG", "BD", "SV", "DZ", "EC", "VE", "UA", "MA", "LK", "NG", "BO", "KE", "TN", "RU", "NP", "IQ", "MM", "HN", "UY", "JO", "PY", "PS", "ET", "GH", "JM", "CM", "AS", "SY", "BY", "AO", "MN", "GY", "LB", "MV", "BW", "UG"];
    class VR extends yR.d {
      constructor() {
        super(), this.name = "adinplay", this.bannerAutoRefresh = "disableable", this.noAdCountries = fR
      }
      static async setup() {
        return (0, uR.canonicaliseZonesWhenIdle)(fR), (0, ZR.setUpGtag)({
            tcfCmp: !0
          }), await (0, tR.c)("https://api.adinplay.com/libs/aiptag/pub/RBN/bloxd.io/tag.min.js"),
          function() {
            if (window.__tcfapi) return void iR(window.__tcfapi);
            let RR = 0;
            const JR = window.setInterval((() => {
              RR++;
              const GR = window.__tcfapi;
              GR ? (window.clearInterval(JR), iR(GR)) : RR >= 150 && window.clearInterval(JR)
            }), 200)
          }(), new VR
      }
      playRewarded(RR, JR) {
        if ("undefined" !== typeof window.aiptag.adplayer) {
          console.log("AD: Requesting AdInPlay preroll ad for rewarded placement");
          const GR = "video_reward";
          window.aiptag.cmd.player.push((function() {
            window.aiptag.adplayer.startPreRoll({
              alias: GR
            })
          })), window.adStartSoPause(RR, {
            onFailCb: JR
          })
        } else console.log("AD: AIP ad lib not loaded, no rewarded ad playing"), JR()
      }
      playVideoAd(RR, JR) {
        "undefined" !== typeof window.aiptag.adplayer ? (console.log("AD: Requesting AdInPlay video ad" + (JR ? ` (alias: ${JR})` : "")), window.aiptag.cmd.player.push((function() {
          window.aiptag.adplayer.startPreRoll({
            alias: JR
          })
        })), window.adStartSoPause(RR)) : (RR(), console.error("AIP ad lib not loaded, no ad playing"))
      }
      willRequestBanner() {
        return "undefined" !== typeof window.aiptag.adplayer
      }
      renderBanner(RR) {
        if (!this.willRequestBanner()) return void console.log("AD: User has adblock, not requesting new banners");
        const {
          divId: JR,
          alias: GR
        } = RR;
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.display({
            adUnitName: JR,
            alias: GR
          })
        })), console.log("AD: Requested aip banner", document.getElementById(RR.divId), GR ? `(alias: ${GR})` : "")
      }
      clearBanner(RR) {
        "undefined" !== typeof window.aiptag.adplayer ? (window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.destroy(RR.divId)
        })), console.log(`AD: Clearing aip banner ad ${RR.divId}`)) : console.log("AD: User has adblock, not requesting new banners")
      }
      setBannerAutoRefreshEnabled(RR, JR) {
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.setAutoRefresh(RR.divId, JR)
        }))
      }
      newPageSession() {
        console.log("AD: Requesting new page session"), window.aiptag.cmd.display.push((function() {
          window.__VM.push((function(RR, JR) {
            JR.Instances.pageManager.newPageSession(!1)
          }))
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);