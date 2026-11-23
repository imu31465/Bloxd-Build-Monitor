export const id = 152;
export const ids = [152];
export const modules = {
  8142: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => qC
    });
    var QC = ZC(2909);
    const wC = [1, 8, 9],
      bC = 5,
      nC = 200,
      fC = 150;

    function oC(CC, zC) {
      let ZC = 0;
      CC("addEventListener", 2, ((CC, nC) => {
        if (!nC) return void console.warn("TCF CMP couldn't report a consent event, so our consent defaults stand");
        const fC = function(CC) {
          const zC = "useractioncomplete" === CC.eventStatus || "tcloaded" === CC.eventStatus && !!CC.tcString;
          return CC.gdprApplies && zC ? wC.every((zC => !0 === CC.purpose.consents[zC])) : null
        }(CC);
        if (null === fC) return;
        const oC = ++ZC;
        if (!fC) return void(0, QC.I)(!1);
        if ("nitro" === zC) return void(0, QC.I)(!0);
        const qC = window.__tcfapi;
        qC ? qC("getNonIABVendorConsents", 2, ((CC, zC) => {
          var wC;
          oC === ZC && (0, QC.I)(zC && !0 === (null === (wC = CC.nonIabVendorConsents) || void 0 === wC ? void 0 : wC[bC]))
        })) : console.warn("TCF CMP reported a choice but its __tcfapi is gone, so our consent defaults stand")
      }))
    }

    function qC(CC) {
      if (window.__tcfapi) return void oC(window.__tcfapi, CC);
      let zC = 0;
      const ZC = window.setInterval((() => {
        zC++;
        const QC = window.__tcfapi;
        QC ? (window.clearInterval(ZC), oC(QC, CC)) : zC >= fC && window.clearInterval(ZC)
      }), nC)
    }
  },
  8135: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      AdinPlaySdkAdaptor: () => qC
    });
    var QC = ZC(1269),
      wC = ZC(1127),
      bC = ZC(216),
      nC = ZC(8142),
      fC = ZC(2909);
    const oC = ["CN", "VN", "IN", "PK", "ID", "EG", "BD", "SV", "DZ", "EC", "VE", "UA", "MA", "LK", "NG", "BO", "KE", "TN", "RU", "NP", "IQ", "MM", "HN", "UY", "JO", "PY", "PS", "ET", "GH", "JM", "CM", "AS", "SY", "BY", "AO", "MN", "GY", "LB", "MV", "BW", "UG"];
    class qC extends QC.c {
      constructor() {
        super(), this.name = "adinplay", this.bannerAutoRefresh = "disableable", this.noAdCountries = oC
      }
      static async setup() {
        return (0, bC.canonicaliseZonesWhenIdle)(oC), (0, fC.F)(), await (0, wC.e)("https://api.adinplay.com/libs/aiptag/pub/RBN/bloxd.io/tag.min.js"), (0, nC.b)("inMobi"), new qC
      }
      playRewarded(CC, zC) {
        if ("undefined" !== typeof window.aiptag.adplayer) {
          console.log("AD: Requesting AdInPlay preroll ad for rewarded placement");
          const ZC = "video_reward";
          window.aiptag.cmd.player.push((function() {
            window.aiptag.adplayer.startPreRoll({
              alias: ZC
            })
          })), window.adStartSoPause(CC, {
            onFailCb: zC
          })
        } else console.log("AD: AIP ad lib not loaded, no rewarded ad playing"), zC()
      }
      playVideoAd(CC, zC) {
        "undefined" !== typeof window.aiptag.adplayer ? (console.log("AD: Requesting AdInPlay video ad" + (zC ? ` (alias: ${zC})` : "")), window.aiptag.cmd.player.push((function() {
          window.aiptag.adplayer.startPreRoll({
            alias: zC
          })
        })), window.adStartSoPause(CC)) : (CC(), console.error("AIP ad lib not loaded, no ad playing"))
      }
      renderBanner(CC) {
        if ("undefined" === typeof window.aiptag.adplayer) return void console.log("AD: User has adblock, not requesting new banners");
        const {
          divId: zC,
          alias: ZC
        } = CC;
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.display({
            adUnitName: zC,
            alias: ZC
          })
        })), console.log("AD: Requested aip banner", document.getElementById(CC.divId), ZC ? `(alias: ${ZC})` : "")
      }
      clearBanner(CC) {
        "undefined" !== typeof window.aiptag.adplayer ? (window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.destroy(CC.divId)
        })), console.log(`AD: Clearing aip banner ad ${CC.divId}`)) : console.log("AD: User has adblock, not requesting new banners")
      }
      setBannerAutoRefreshEnabled(CC, zC) {
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.setAutoRefresh(CC.divId, zC)
        }))
      }
      newPageSession() {
        console.log("AD: Requesting new page session"), window.aiptag.cmd.display.push((function() {
          window.__VM.push((function(CC, zC) {
            zC.Instances.pageManager.newPageSession(!1)
          }))
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);