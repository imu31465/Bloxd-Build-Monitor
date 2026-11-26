export const id = 165;
export const ids = [165];
export const modules = {
  7301: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => nV
    });
    var JV = xV(3245);
    const YV = [1, 8, 9],
      UV = 5,
      yV = 200,
      pV = 150;

    function QV(VV, eV) {
      let xV = 0;
      VV("addEventListener", 2, ((VV, yV) => {
        if (!yV) return void console.warn("TCF CMP couldn't report a consent event, so our consent defaults stand");
        const pV = function(VV) {
          const eV = "useractioncomplete" === VV.eventStatus || "tcloaded" === VV.eventStatus && !!VV.tcString;
          return VV.gdprApplies && eV ? YV.every((eV => !0 === VV.purpose.consents[eV])) : null
        }(VV);
        if (null === pV) return;
        const QV = ++xV;
        if (!pV) return void(0, JV.updateAnalyticsConsent)(!1);
        if ("nitro" === eV) return void(0, JV.updateAnalyticsConsent)(!0);
        const nV = window.__tcfapi;
        nV ? nV("getNonIABVendorConsents", 2, ((VV, eV) => {
          var YV;
          QV === xV && (0, JV.updateAnalyticsConsent)(eV && !0 === (null === (YV = VV.nonIabVendorConsents) || void 0 === YV ? void 0 : YV[UV]))
        })) : console.warn("TCF CMP reported a choice but its __tcfapi is gone, so our consent defaults stand")
      }))
    }

    function nV(VV) {
      if (window.__tcfapi) return void QV(window.__tcfapi, VV);
      let eV = 0;
      const xV = window.setInterval((() => {
        eV++;
        const JV = window.__tcfapi;
        JV ? (window.clearInterval(xV), QV(JV, VV)) : eV >= pV && window.clearInterval(xV)
      }), yV)
    }
  },
  7299: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      AdinPlaySdkAdaptor: () => nV
    });
    var JV = xV(1389),
      YV = xV(1213),
      UV = xV(255),
      yV = xV(7301),
      pV = xV(3245);
    const QV = ["CN", "VN", "IN", "PK", "ID", "EG", "BD", "SV", "DZ", "EC", "VE", "UA", "MA", "LK", "NG", "BO", "KE", "TN", "RU", "NP", "IQ", "MM", "HN", "UY", "JO", "PY", "PS", "ET", "GH", "JM", "CM", "AS", "SY", "BY", "AO", "MN", "GY", "LB", "MV", "BW", "UG"];
    class nV extends JV.b {
      constructor() {
        super(), this.name = "adinplay", this.bannerAutoRefresh = "disableable", this.noAdCountries = QV
      }
      static async setup() {
        return (0, UV.canonicaliseZonesWhenIdle)(QV), (0, pV.setUpGtag)(), await (0, YV.d)("https://api.adinplay.com/libs/aiptag/pub/RBN/bloxd.io/tag.min.js"), (0, yV.e)("inMobi"), new nV
      }
      playRewarded(VV, eV) {
        if ("undefined" !== typeof window.aiptag.adplayer) {
          console.log("AD: Requesting AdInPlay preroll ad for rewarded placement");
          const xV = "video_reward";
          window.aiptag.cmd.player.push((function() {
            window.aiptag.adplayer.startPreRoll({
              alias: xV
            })
          })), window.adStartSoPause(VV, {
            onFailCb: eV
          })
        } else console.log("AD: AIP ad lib not loaded, no rewarded ad playing"), eV()
      }
      playVideoAd(VV, eV) {
        "undefined" !== typeof window.aiptag.adplayer ? (console.log("AD: Requesting AdInPlay video ad" + (eV ? ` (alias: ${eV})` : "")), window.aiptag.cmd.player.push((function() {
          window.aiptag.adplayer.startPreRoll({
            alias: eV
          })
        })), window.adStartSoPause(VV)) : (VV(), console.error("AIP ad lib not loaded, no ad playing"))
      }
      renderBanner(VV) {
        if ("undefined" === typeof window.aiptag.adplayer) return void console.log("AD: User has adblock, not requesting new banners");
        const {
          divId: eV,
          alias: xV
        } = VV;
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.display({
            adUnitName: eV,
            alias: xV
          })
        })), console.log("AD: Requested aip banner", document.getElementById(VV.divId), xV ? `(alias: ${xV})` : "")
      }
      clearBanner(VV) {
        "undefined" !== typeof window.aiptag.adplayer ? (window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.destroy(VV.divId)
        })), console.log(`AD: Clearing aip banner ad ${VV.divId}`)) : console.log("AD: User has adblock, not requesting new banners")
      }
      setBannerAutoRefreshEnabled(VV, eV) {
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.setAutoRefresh(VV.divId, eV)
        }))
      }
      newPageSession() {
        console.log("AD: Requesting new page session"), window.aiptag.cmd.display.push((function() {
          window.__VM.push((function(VV, eV) {
            eV.Instances.pageManager.newPageSession(!1)
          }))
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);