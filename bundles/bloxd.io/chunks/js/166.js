export const id = 166;
export const ids = [166];
export const modules = {
  7280: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      AdinPlaySdkAdaptor: () => MB
    });
    var YB = GB(1341),
      DB = GB(1168),
      QB = GB(224),
      oB = GB(3262),
      jB = GB(3268);

    function yB(BB) {
      let OB = 0;
      BB("addEventListener", 2, ((BB, GB) => {
        if (!GB) return void console.warn("TCF CMP couldn't report a consent event, so our consent defaults stand");
        !1 === BB.gdprApplies && (0, oB.noteNoGdprChoiceComing)();
        const YB = function(BB) {
          const OB = "useractioncomplete" === BB.eventStatus || "tcloaded" === BB.eventStatus && !!BB.tcString;
          return BB.gdprApplies && OB ? jB.d.every((OB => !0 === BB.purpose.consents[OB])) : null
        }(BB);
        if (null === YB) return;
        const DB = ++OB;
        if (!YB) return void(0, oB.updateAnalyticsConsent)(!1);
        const QB = window.__tcfapi;
        QB ? QB("getNonIABVendorConsents", 2, ((BB, GB) => {
          var YB;
          DB === OB && (0, oB.updateAnalyticsConsent)(GB && !0 === (null === (YB = BB.nonIabVendorConsents) || void 0 === YB ? void 0 : YB[5]))
        })) : console.warn("TCF CMP reported a choice but its __tcfapi is gone, so our consent defaults stand")
      }))
    }
    const JB = ["CN", "VN", "IN", "PK", "ID", "EG", "BD", "SV", "DZ", "EC", "VE", "UA", "MA", "LK", "NG", "BO", "KE", "TN", "RU", "NP", "IQ", "MM", "HN", "UY", "JO", "PY", "PS", "ET", "GH", "JM", "CM", "AS", "SY", "BY", "AO", "MN", "GY", "LB", "MV", "BW", "UG"];
    class MB extends YB.c {
      constructor() {
        super(), this.name = "adinplay", this.bannerAutoRefresh = "disableable", this.noAdCountries = JB
      }
      static async setup() {
        return (0, QB.canonicaliseZonesWhenIdle)(JB), (0, oB.setUpGtag)({
            tcfCmp: !0
          }), await (0, DB.b)("https://api.adinplay.com/libs/aiptag/pub/RBN/bloxd.io/tag.min.js"),
          function() {
            if (window.__tcfapi) return void yB(window.__tcfapi);
            let BB = 0;
            const OB = window.setInterval((() => {
              BB++;
              const GB = window.__tcfapi;
              GB ? (window.clearInterval(OB), yB(GB)) : BB >= 150 && window.clearInterval(OB)
            }), 200)
          }(), new MB
      }
      playRewarded(BB, OB) {
        if ("undefined" !== typeof window.aiptag.adplayer) {
          console.log("AD: Requesting AdInPlay preroll ad for rewarded placement");
          const GB = "video_reward";
          window.aiptag.cmd.player.push((function() {
            window.aiptag.adplayer.startPreRoll({
              alias: GB
            })
          })), window.adStartSoPause(BB, {
            onFailCb: OB
          })
        } else console.log("AD: AIP ad lib not loaded, no rewarded ad playing"), OB()
      }
      playVideoAd(BB, OB) {
        "undefined" !== typeof window.aiptag.adplayer ? (console.log("AD: Requesting AdInPlay video ad" + (OB ? ` (alias: ${OB})` : "")), window.aiptag.cmd.player.push((function() {
          window.aiptag.adplayer.startPreRoll({
            alias: OB
          })
        })), window.adStartSoPause(BB)) : (BB(), console.error("AIP ad lib not loaded, no ad playing"))
      }
      willRequestBanner() {
        return "undefined" !== typeof window.aiptag.adplayer
      }
      renderBanner(BB) {
        if (!this.willRequestBanner()) return void console.log("AD: User has adblock, not requesting new banners");
        const {
          divId: OB,
          alias: GB
        } = BB;
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.display({
            adUnitName: OB,
            alias: GB
          })
        })), console.log("AD: Requested aip banner", document.getElementById(BB.divId), GB ? `(alias: ${GB})` : "")
      }
      clearBanner(BB) {
        "undefined" !== typeof window.aiptag.adplayer ? (window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.destroy(BB.divId)
        })), console.log(`AD: Clearing aip banner ad ${BB.divId}`)) : console.log("AD: User has adblock, not requesting new banners")
      }
      setBannerAutoRefreshEnabled(BB, OB) {
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.setAutoRefresh(BB.divId, OB)
        }))
      }
      newPageSession() {
        console.log("AD: Requesting new page session"), window.aiptag.cmd.display.push((function() {
          window.__VM.push((function(BB, OB) {
            OB.Instances.pageManager.newPageSession(!1)
          }))
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);