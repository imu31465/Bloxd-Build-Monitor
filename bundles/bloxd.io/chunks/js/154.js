export const id = 154;
export const ids = [154];
export const modules = {
  8243: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => kT
    });
    var WT = mT(3047);
    const zT = [1, 8, 9],
      MT = 5,
      gT = 200,
      nT = 150;

    function HT(TT, UT) {
      let mT = 0;
      TT("addEventListener", 2, ((TT, gT) => {
        if (!gT) return void console.warn("TCF CMP couldn't report a consent event, so our consent defaults stand");
        const nT = function(TT) {
          const UT = "useractioncomplete" === TT.eventStatus || "tcloaded" === TT.eventStatus && !!TT.tcString;
          return TT.gdprApplies && UT ? zT.every((UT => !0 === TT.purpose.consents[UT])) : null
        }(TT);
        if (null === nT) return;
        const HT = ++mT;
        if (!nT) return void(0, WT.updateAnalyticsConsent)(!1);
        if ("nitro" === UT) return void(0, WT.updateAnalyticsConsent)(!0);
        const kT = window.__tcfapi;
        kT ? kT("getNonIABVendorConsents", 2, ((TT, UT) => {
          var zT;
          HT === mT && (0, WT.updateAnalyticsConsent)(UT && !0 === (null === (zT = TT.nonIabVendorConsents) || void 0 === zT ? void 0 : zT[MT]))
        })) : console.warn("TCF CMP reported a choice but its __tcfapi is gone, so our consent defaults stand")
      }))
    }

    function kT(TT) {
      if (window.__tcfapi) return void HT(window.__tcfapi, TT);
      let UT = 0;
      const mT = window.setInterval((() => {
        UT++;
        const WT = window.__tcfapi;
        WT ? (window.clearInterval(mT), HT(WT, TT)) : UT >= nT && window.clearInterval(mT)
      }), gT)
    }
  },
  8235: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      AdinPlaySdkAdaptor: () => kT
    });
    var WT = mT(1423),
      zT = mT(1277),
      MT = mT(244),
      gT = mT(8243),
      nT = mT(3047);
    const HT = ["CN", "VN", "IN", "PK", "ID", "EG", "BD", "SV", "DZ", "EC", "VE", "UA", "MA", "LK", "NG", "BO", "KE", "TN", "RU", "NP", "IQ", "MM", "HN", "UY", "JO", "PY", "PS", "ET", "GH", "JM", "CM", "AS", "SY", "BY", "AO", "MN", "GY", "LB", "MV", "BW", "UG"];
    class kT extends WT.d {
      constructor() {
        super(), this.name = "adinplay", this.bannerAutoRefresh = "disableable", this.noAdCountries = HT
      }
      static async setup() {
        return (0, MT.canonicaliseZonesWhenIdle)(HT), (0, nT.setUpGtag)(), await (0, zT.d)("https://api.adinplay.com/libs/aiptag/pub/RBN/bloxd.io/tag.min.js"), (0, gT.b)("inMobi"), new kT
      }
      playRewarded(TT, UT) {
        if ("undefined" !== typeof window.aiptag.adplayer) {
          console.log("AD: Requesting AdInPlay preroll ad for rewarded placement");
          const mT = "video_reward";
          window.aiptag.cmd.player.push((function() {
            window.aiptag.adplayer.startPreRoll({
              alias: mT
            })
          })), window.adStartSoPause(TT, {
            onFailCb: UT
          })
        } else console.log("AD: AIP ad lib not loaded, no rewarded ad playing"), UT()
      }
      playVideoAd(TT, UT) {
        "undefined" !== typeof window.aiptag.adplayer ? (console.log("AD: Requesting AdInPlay video ad" + (UT ? ` (alias: ${UT})` : "")), window.aiptag.cmd.player.push((function() {
          window.aiptag.adplayer.startPreRoll({
            alias: UT
          })
        })), window.adStartSoPause(TT)) : (TT(), console.error("AIP ad lib not loaded, no ad playing"))
      }
      renderBanner(TT) {
        if ("undefined" === typeof window.aiptag.adplayer) return void console.log("AD: User has adblock, not requesting new banners");
        const {
          divId: UT,
          alias: mT
        } = TT;
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.display({
            adUnitName: UT,
            alias: mT
          })
        })), console.log("AD: Requested aip banner", document.getElementById(TT.divId), mT ? `(alias: ${mT})` : "")
      }
      clearBanner(TT) {
        "undefined" !== typeof window.aiptag.adplayer ? (window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.destroy(TT.divId)
        })), console.log(`AD: Clearing aip banner ad ${TT.divId}`)) : console.log("AD: User has adblock, not requesting new banners")
      }
      setBannerAutoRefreshEnabled(TT, UT) {
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.setAutoRefresh(TT.divId, UT)
        }))
      }
      newPageSession() {
        console.log("AD: Requesting new page session"), window.aiptag.cmd.display.push((function() {
          window.__VM.push((function(TT, UT) {
            UT.Instances.pageManager.newPageSession(!1)
          }))
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);