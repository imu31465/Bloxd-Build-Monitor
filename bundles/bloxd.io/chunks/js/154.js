export const id = 154;
export const ids = [154];
export const modules = {
  8097: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => UB
    });
    var QB = zB(3015);
    const nB = [1, 8, 9],
      dB = 5,
      IB = 200,
      NB = 150;

    function uB(BB, jB) {
      let zB = 0;
      BB("addEventListener", 2, ((BB, IB) => {
        if (!IB) return void console.warn("TCF CMP couldn't report a consent event, so our consent defaults stand");
        const NB = function(BB) {
          const jB = "useractioncomplete" === BB.eventStatus || "tcloaded" === BB.eventStatus && !!BB.tcString;
          return BB.gdprApplies && jB ? nB.every((jB => !0 === BB.purpose.consents[jB])) : null
        }(BB);
        if (null === NB) return;
        const uB = ++zB;
        if (!NB) return void(0, QB.updateAnalyticsConsent)(!1);
        if ("nitro" === jB) return void(0, QB.updateAnalyticsConsent)(!0);
        const UB = window.__tcfapi;
        UB ? UB("getNonIABVendorConsents", 2, ((BB, jB) => {
          var nB;
          uB === zB && (0, QB.updateAnalyticsConsent)(jB && !0 === (null === (nB = BB.nonIabVendorConsents) || void 0 === nB ? void 0 : nB[dB]))
        })) : console.warn("TCF CMP reported a choice but its __tcfapi is gone, so our consent defaults stand")
      }))
    }

    function UB(BB) {
      if (window.__tcfapi) return void uB(window.__tcfapi, BB);
      let jB = 0;
      const zB = window.setInterval((() => {
        jB++;
        const QB = window.__tcfapi;
        QB ? (window.clearInterval(zB), uB(QB, BB)) : jB >= NB && window.clearInterval(zB)
      }), IB)
    }
  },
  8094: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      AdinPlaySdkAdaptor: () => UB
    });
    var QB = zB(1351),
      nB = zB(1230),
      dB = zB(250),
      IB = zB(8097),
      NB = zB(3015);
    const uB = ["CN", "VN", "IN", "PK", "ID", "EG", "BD", "SV", "DZ", "EC", "VE", "UA", "MA", "LK", "NG", "BO", "KE", "TN", "RU", "NP", "IQ", "MM", "HN", "UY", "JO", "PY", "PS", "ET", "GH", "JM", "CM", "AS", "SY", "BY", "AO", "MN", "GY", "LB", "MV", "BW", "UG"];
    class UB extends QB.c {
      constructor() {
        super(), this.name = "adinplay", this.bannerAutoRefresh = "disableable", this.noAdCountries = uB
      }
      static async setup() {
        return (0, dB.canonicaliseZonesWhenIdle)(uB), (0, NB.setUpGtag)(), await (0, nB.c)("https://api.adinplay.com/libs/aiptag/pub/RBN/bloxd.io/tag.min.js"), (0, IB.b)("inMobi"), new UB
      }
      playRewarded(BB, jB) {
        if ("undefined" !== typeof window.aiptag.adplayer) {
          console.log("AD: Requesting AdInPlay preroll ad for rewarded placement");
          const zB = "video_reward";
          window.aiptag.cmd.player.push((function() {
            window.aiptag.adplayer.startPreRoll({
              alias: zB
            })
          })), window.adStartSoPause(BB, {
            onFailCb: jB
          })
        } else console.log("AD: AIP ad lib not loaded, no rewarded ad playing"), jB()
      }
      playVideoAd(BB, jB) {
        "undefined" !== typeof window.aiptag.adplayer ? (console.log("AD: Requesting AdInPlay video ad" + (jB ? ` (alias: ${jB})` : "")), window.aiptag.cmd.player.push((function() {
          window.aiptag.adplayer.startPreRoll({
            alias: jB
          })
        })), window.adStartSoPause(BB)) : (BB(), console.error("AIP ad lib not loaded, no ad playing"))
      }
      renderBanner(BB) {
        if ("undefined" === typeof window.aiptag.adplayer) return void console.log("AD: User has adblock, not requesting new banners");
        const {
          divId: jB,
          alias: zB
        } = BB;
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.display({
            adUnitName: jB,
            alias: zB
          })
        })), console.log("AD: Requested aip banner", document.getElementById(BB.divId), zB ? `(alias: ${zB})` : "")
      }
      clearBanner(BB) {
        "undefined" !== typeof window.aiptag.adplayer ? (window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.destroy(BB.divId)
        })), console.log(`AD: Clearing aip banner ad ${BB.divId}`)) : console.log("AD: User has adblock, not requesting new banners")
      }
      setBannerAutoRefreshEnabled(BB, jB) {
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.setAutoRefresh(BB.divId, jB)
        }))
      }
      newPageSession() {
        console.log("AD: Requesting new page session"), window.aiptag.cmd.display.push((function() {
          window.__VM.push((function(BB, jB) {
            jB.Instances.pageManager.newPageSession(!1)
          }))
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);