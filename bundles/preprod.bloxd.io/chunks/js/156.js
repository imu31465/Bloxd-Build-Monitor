export const id = 156;
export const ids = [156];
export const modules = {
  8504: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => PQ
    });
    var wQ = XQ(3158);
    const qQ = [1, 8, 9],
      TQ = 5,
      zQ = 200,
      sQ = 150;

    function FQ(QQ, WQ) {
      let XQ = 0;
      QQ("addEventListener", 2, ((QQ, zQ) => {
        if (!zQ) return void console.warn("TCF CMP couldn't report a consent event, so our consent defaults stand");
        const sQ = function(QQ) {
          const WQ = "useractioncomplete" === QQ.eventStatus || "tcloaded" === QQ.eventStatus && !!QQ.tcString;
          return QQ.gdprApplies && WQ ? qQ.every((WQ => !0 === QQ.purpose.consents[WQ])) : null
        }(QQ);
        if (null === sQ) return;
        const FQ = ++XQ;
        if (!sQ) return void(0, wQ.updateAnalyticsConsent)(!1);
        if ("nitro" === WQ) return void(0, wQ.updateAnalyticsConsent)(!0);
        const PQ = window.__tcfapi;
        PQ ? PQ("getNonIABVendorConsents", 2, ((QQ, WQ) => {
          var qQ;
          FQ === XQ && (0, wQ.updateAnalyticsConsent)(WQ && !0 === (null === (qQ = QQ.nonIabVendorConsents) || void 0 === qQ ? void 0 : qQ[TQ]))
        })) : console.warn("TCF CMP reported a choice but its __tcfapi is gone, so our consent defaults stand")
      }))
    }

    function PQ(QQ) {
      if (window.__tcfapi) return void FQ(window.__tcfapi, QQ);
      let WQ = 0;
      const XQ = window.setInterval((() => {
        WQ++;
        const wQ = window.__tcfapi;
        wQ ? (window.clearInterval(XQ), FQ(wQ, QQ)) : WQ >= sQ && window.clearInterval(XQ)
      }), zQ)
    }
  },
  8498: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      AdinPlaySdkAdaptor: () => PQ
    });
    var wQ = XQ(1368),
      qQ = XQ(1216),
      TQ = XQ(260),
      zQ = XQ(8504),
      sQ = XQ(3158);
    const FQ = ["CN", "VN", "IN", "PK", "ID", "EG", "BD", "SV", "DZ", "EC", "VE", "UA", "MA", "LK", "NG", "BO", "KE", "TN", "RU", "NP", "IQ", "MM", "HN", "UY", "JO", "PY", "PS", "ET", "GH", "JM", "CM", "AS", "SY", "BY", "AO", "MN", "GY", "LB", "MV", "BW", "UG"];
    class PQ extends wQ.c {
      constructor() {
        super(), this.name = "adinplay", this.bannerAutoRefresh = "disableable", this.noAdCountries = FQ
      }
      static async setup() {
        return (0, TQ.canonicaliseZonesWhenIdle)(FQ), (0, sQ.setUpGtag)(), await (0, qQ.d)("https://api.adinplay.com/libs/aiptag/pub/RBN/bloxd.io/tag.min.js"), (0, zQ.e)("inMobi"), new PQ
      }
      playRewarded(QQ, WQ) {
        if ("undefined" !== typeof window.aiptag.adplayer) {
          console.log("AD: Requesting AdInPlay preroll ad for rewarded placement");
          const XQ = "video_reward";
          window.aiptag.cmd.player.push((function() {
            window.aiptag.adplayer.startPreRoll({
              alias: XQ
            })
          })), window.adStartSoPause(QQ, {
            onFailCb: WQ
          })
        } else console.log("AD: AIP ad lib not loaded, no rewarded ad playing"), WQ()
      }
      playVideoAd(QQ, WQ) {
        "undefined" !== typeof window.aiptag.adplayer ? (console.log("AD: Requesting AdInPlay video ad" + (WQ ? ` (alias: ${WQ})` : "")), window.aiptag.cmd.player.push((function() {
          window.aiptag.adplayer.startPreRoll({
            alias: WQ
          })
        })), window.adStartSoPause(QQ)) : (QQ(), console.error("AIP ad lib not loaded, no ad playing"))
      }
      renderBanner(QQ) {
        if ("undefined" === typeof window.aiptag.adplayer) return void console.log("AD: User has adblock, not requesting new banners");
        const {
          divId: WQ,
          alias: XQ
        } = QQ;
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.display({
            adUnitName: WQ,
            alias: XQ
          })
        })), console.log("AD: Requested aip banner", document.getElementById(QQ.divId), XQ ? `(alias: ${XQ})` : "")
      }
      clearBanner(QQ) {
        "undefined" !== typeof window.aiptag.adplayer ? (window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.destroy(QQ.divId)
        })), console.log(`AD: Clearing aip banner ad ${QQ.divId}`)) : console.log("AD: User has adblock, not requesting new banners")
      }
      setBannerAutoRefreshEnabled(QQ, WQ) {
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.setAutoRefresh(QQ.divId, WQ)
        }))
      }
      newPageSession() {
        console.log("AD: Requesting new page session"), window.aiptag.cmd.display.push((function() {
          window.__VM.push((function(QQ, WQ) {
            WQ.Instances.pageManager.newPageSession(!1)
          }))
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);