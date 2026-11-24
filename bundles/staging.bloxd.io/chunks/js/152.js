export const id = 152;
export const ids = [152];
export const modules = {
  8151: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => gD
    });
    var pD = wD(2901);
    const sD = [1, 8, 9],
      KD = 5,
      rD = 200,
      LD = 150;

    function cD(DD, zD) {
      let wD = 0;
      DD("addEventListener", 2, ((DD, rD) => {
        if (!rD) return void console.warn("TCF CMP couldn't report a consent event, so our consent defaults stand");
        const LD = function(DD) {
          const zD = "useractioncomplete" === DD.eventStatus || "tcloaded" === DD.eventStatus && !!DD.tcString;
          return DD.gdprApplies && zD ? sD.every((zD => !0 === DD.purpose.consents[zD])) : null
        }(DD);
        if (null === LD) return;
        const cD = ++wD;
        if (!LD) return void(0, pD.H)(!1);
        if ("nitro" === zD) return void(0, pD.H)(!0);
        const gD = window.__tcfapi;
        gD ? gD("getNonIABVendorConsents", 2, ((DD, zD) => {
          var sD;
          cD === wD && (0, pD.H)(zD && !0 === (null === (sD = DD.nonIabVendorConsents) || void 0 === sD ? void 0 : sD[KD]))
        })) : console.warn("TCF CMP reported a choice but its __tcfapi is gone, so our consent defaults stand")
      }))
    }

    function gD(DD) {
      if (window.__tcfapi) return void cD(window.__tcfapi, DD);
      let zD = 0;
      const wD = window.setInterval((() => {
        zD++;
        const pD = window.__tcfapi;
        pD ? (window.clearInterval(wD), cD(pD, DD)) : zD >= LD && window.clearInterval(wD)
      }), rD)
    }
  },
  8144: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      AdinPlaySdkAdaptor: () => gD
    });
    var pD = wD(1326),
      sD = wD(1186),
      KD = wD(236),
      rD = wD(8151),
      LD = wD(2901);
    const cD = ["CN", "VN", "IN", "PK", "ID", "EG", "BD", "SV", "DZ", "EC", "VE", "UA", "MA", "LK", "NG", "BO", "KE", "TN", "RU", "NP", "IQ", "MM", "HN", "UY", "JO", "PY", "PS", "ET", "GH", "JM", "CM", "AS", "SY", "BY", "AO", "MN", "GY", "LB", "MV", "BW", "UG"];
    class gD extends pD.b {
      constructor() {
        super(), this.name = "adinplay", this.bannerAutoRefresh = "disableable", this.noAdCountries = cD
      }
      static async setup() {
        return (0, KD.canonicaliseZonesWhenIdle)(cD), (0, LD.E)(), await (0, sD.b)("https://api.adinplay.com/libs/aiptag/pub/RBN/bloxd.io/tag.min.js"), (0, rD.e)("inMobi"), new gD
      }
      playRewarded(DD, zD) {
        if ("undefined" !== typeof window.aiptag.adplayer) {
          console.log("AD: Requesting AdInPlay preroll ad for rewarded placement");
          const wD = "video_reward";
          window.aiptag.cmd.player.push((function() {
            window.aiptag.adplayer.startPreRoll({
              alias: wD
            })
          })), window.adStartSoPause(DD, {
            onFailCb: zD
          })
        } else console.log("AD: AIP ad lib not loaded, no rewarded ad playing"), zD()
      }
      playVideoAd(DD, zD) {
        "undefined" !== typeof window.aiptag.adplayer ? (console.log("AD: Requesting AdInPlay video ad" + (zD ? ` (alias: ${zD})` : "")), window.aiptag.cmd.player.push((function() {
          window.aiptag.adplayer.startPreRoll({
            alias: zD
          })
        })), window.adStartSoPause(DD)) : (DD(), console.error("AIP ad lib not loaded, no ad playing"))
      }
      renderBanner(DD) {
        if ("undefined" === typeof window.aiptag.adplayer) return void console.log("AD: User has adblock, not requesting new banners");
        const {
          divId: zD,
          alias: wD
        } = DD;
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.display({
            adUnitName: zD,
            alias: wD
          })
        })), console.log("AD: Requested aip banner", document.getElementById(DD.divId), wD ? `(alias: ${wD})` : "")
      }
      clearBanner(DD) {
        "undefined" !== typeof window.aiptag.adplayer ? (window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.destroy(DD.divId)
        })), console.log(`AD: Clearing aip banner ad ${DD.divId}`)) : console.log("AD: User has adblock, not requesting new banners")
      }
      setBannerAutoRefreshEnabled(DD, zD) {
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.setAutoRefresh(DD.divId, zD)
        }))
      }
      newPageSession() {
        console.log("AD: Requesting new page session"), window.aiptag.cmd.display.push((function() {
          window.__VM.push((function(DD, zD) {
            zD.Instances.pageManager.newPageSession(!1)
          }))
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);