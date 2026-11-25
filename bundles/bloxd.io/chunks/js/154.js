export const id = 154;
export const ids = [154];
export const modules = {
  8178: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => YG
    });
    var wG = ZG(2897);
    const SG = [1, 8, 9],
      LG = 5,
      yG = 200,
      kG = 150;

    function UG(GG, bG) {
      let ZG = 0;
      GG("addEventListener", 2, ((GG, yG) => {
        if (!yG) return void console.warn("TCF CMP couldn't report a consent event, so our consent defaults stand");
        const kG = function(GG) {
          const bG = "useractioncomplete" === GG.eventStatus || "tcloaded" === GG.eventStatus && !!GG.tcString;
          return GG.gdprApplies && bG ? SG.every((bG => !0 === GG.purpose.consents[bG])) : null
        }(GG);
        if (null === kG) return;
        const UG = ++ZG;
        if (!kG) return void(0, wG.updateAnalyticsConsent)(!1);
        if ("nitro" === bG) return void(0, wG.updateAnalyticsConsent)(!0);
        const YG = window.__tcfapi;
        YG ? YG("getNonIABVendorConsents", 2, ((GG, bG) => {
          var SG;
          UG === ZG && (0, wG.updateAnalyticsConsent)(bG && !0 === (null === (SG = GG.nonIabVendorConsents) || void 0 === SG ? void 0 : SG[LG]))
        })) : console.warn("TCF CMP reported a choice but its __tcfapi is gone, so our consent defaults stand")
      }))
    }

    function YG(GG) {
      if (window.__tcfapi) return void UG(window.__tcfapi, GG);
      let bG = 0;
      const ZG = window.setInterval((() => {
        bG++;
        const wG = window.__tcfapi;
        wG ? (window.clearInterval(ZG), UG(wG, GG)) : bG >= kG && window.clearInterval(ZG)
      }), yG)
    }
  },
  8172: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      AdinPlaySdkAdaptor: () => YG
    });
    var wG = ZG(1280),
      SG = ZG(1143),
      LG = ZG(233),
      yG = ZG(8178),
      kG = ZG(2897);
    const UG = ["CN", "VN", "IN", "PK", "ID", "EG", "BD", "SV", "DZ", "EC", "VE", "UA", "MA", "LK", "NG", "BO", "KE", "TN", "RU", "NP", "IQ", "MM", "HN", "UY", "JO", "PY", "PS", "ET", "GH", "JM", "CM", "AS", "SY", "BY", "AO", "MN", "GY", "LB", "MV", "BW", "UG"];
    class YG extends wG.e {
      constructor() {
        super(), this.name = "adinplay", this.bannerAutoRefresh = "disableable", this.noAdCountries = UG
      }
      static async setup() {
        return (0, LG.canonicaliseZonesWhenIdle)(UG), (0, kG.setUpGtag)(), await (0, SG.b)("https://api.adinplay.com/libs/aiptag/pub/RBN/bloxd.io/tag.min.js"), (0, yG.b)("inMobi"), new YG
      }
      playRewarded(GG, bG) {
        if ("undefined" !== typeof window.aiptag.adplayer) {
          console.log("AD: Requesting AdInPlay preroll ad for rewarded placement");
          const ZG = "video_reward";
          window.aiptag.cmd.player.push((function() {
            window.aiptag.adplayer.startPreRoll({
              alias: ZG
            })
          })), window.adStartSoPause(GG, {
            onFailCb: bG
          })
        } else console.log("AD: AIP ad lib not loaded, no rewarded ad playing"), bG()
      }
      playVideoAd(GG, bG) {
        "undefined" !== typeof window.aiptag.adplayer ? (console.log("AD: Requesting AdInPlay video ad" + (bG ? ` (alias: ${bG})` : "")), window.aiptag.cmd.player.push((function() {
          window.aiptag.adplayer.startPreRoll({
            alias: bG
          })
        })), window.adStartSoPause(GG)) : (GG(), console.error("AIP ad lib not loaded, no ad playing"))
      }
      renderBanner(GG) {
        if ("undefined" === typeof window.aiptag.adplayer) return void console.log("AD: User has adblock, not requesting new banners");
        const {
          divId: bG,
          alias: ZG
        } = GG;
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.display({
            adUnitName: bG,
            alias: ZG
          })
        })), console.log("AD: Requested aip banner", document.getElementById(GG.divId), ZG ? `(alias: ${ZG})` : "")
      }
      clearBanner(GG) {
        "undefined" !== typeof window.aiptag.adplayer ? (window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.destroy(GG.divId)
        })), console.log(`AD: Clearing aip banner ad ${GG.divId}`)) : console.log("AD: User has adblock, not requesting new banners")
      }
      setBannerAutoRefreshEnabled(GG, bG) {
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.setAutoRefresh(GG.divId, bG)
        }))
      }
      newPageSession() {
        console.log("AD: Requesting new page session"), window.aiptag.cmd.display.push((function() {
          window.__VM.push((function(GG, bG) {
            bG.Instances.pageManager.newPageSession(!1)
          }))
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);