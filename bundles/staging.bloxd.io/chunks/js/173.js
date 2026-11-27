export const id = 173;
export const ids = [173];
export const modules = {
  7689: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      AdinPlaySdkAdaptor: () => pr
    });
    var Zr = Qr(1418),
      Wr = Qr(1240),
      ar = Qr(246),
      jr = Qr(4010),
      Ir = Qr(4013);

    function fr(rr) {
      let Sr = 0;
      rr("addEventListener", 2, ((rr, Qr) => {
        if (!Qr) return void console.warn("TCF CMP couldn't report a consent event, so our consent defaults stand");
        !1 === rr.gdprApplies && (0, jr.noteNoGdprChoiceComing)();
        const Zr = function(rr) {
          const Sr = "useractioncomplete" === rr.eventStatus || "tcloaded" === rr.eventStatus && !!rr.tcString;
          return rr.gdprApplies && Sr ? Ir.b.every((Sr => !0 === rr.purpose.consents[Sr])) : null
        }(rr);
        if (null === Zr) return;
        const Wr = ++Sr;
        if (!Zr) return void(0, jr.updateAnalyticsConsent)(!1);
        const ar = window.__tcfapi;
        ar ? ar("getNonIABVendorConsents", 2, ((rr, Qr) => {
          var Zr;
          Wr === Sr && (0, jr.updateAnalyticsConsent)(Qr && !0 === (null === (Zr = rr.nonIabVendorConsents) || void 0 === Zr ? void 0 : Zr[5]))
        })) : console.warn("TCF CMP reported a choice but its __tcfapi is gone, so our consent defaults stand")
      }))
    }
    const Er = ["CN", "VN", "IN", "PK", "ID", "EG", "BD", "SV", "DZ", "EC", "VE", "UA", "MA", "LK", "NG", "BO", "KE", "TN", "RU", "NP", "IQ", "MM", "HN", "UY", "JO", "PY", "PS", "ET", "GH", "JM", "CM", "AS", "SY", "BY", "AO", "MN", "GY", "LB", "MV", "BW", "UG"];
    class pr extends Zr.d {
      constructor() {
        super(), this.name = "adinplay", this.bannerAutoRefresh = "disableable", this.noAdCountries = Er
      }
      static async setup() {
        return (0, ar.canonicaliseZonesWhenIdle)(Er), (0, jr.setUpGtag)({
            tcfCmp: !0
          }), await (0, Wr.e)("https://api.adinplay.com/libs/aiptag/pub/RBN/bloxd.io/tag.min.js"),
          function() {
            if (window.__tcfapi) return void fr(window.__tcfapi);
            let rr = 0;
            const Sr = window.setInterval((() => {
              rr++;
              const Qr = window.__tcfapi;
              Qr ? (window.clearInterval(Sr), fr(Qr)) : rr >= 150 && window.clearInterval(Sr)
            }), 200)
          }(), new pr
      }
      playRewarded(rr, Sr) {
        if ("undefined" !== typeof window.aiptag.adplayer) {
          console.log("AD: Requesting AdInPlay preroll ad for rewarded placement");
          const Qr = "video_reward";
          window.aiptag.cmd.player.push((function() {
            window.aiptag.adplayer.startPreRoll({
              alias: Qr
            })
          })), window.adStartSoPause(rr, {
            onFailCb: Sr
          })
        } else console.log("AD: AIP ad lib not loaded, no rewarded ad playing"), Sr()
      }
      playVideoAd(rr, Sr) {
        "undefined" !== typeof window.aiptag.adplayer ? (console.log("AD: Requesting AdInPlay video ad" + (Sr ? ` (alias: ${Sr})` : "")), window.aiptag.cmd.player.push((function() {
          window.aiptag.adplayer.startPreRoll({
            alias: Sr
          })
        })), window.adStartSoPause(rr)) : (rr(), console.error("AIP ad lib not loaded, no ad playing"))
      }
      willRequestBanner() {
        return "undefined" !== typeof window.aiptag.adplayer
      }
      renderBanner(rr) {
        if (!this.willRequestBanner()) return void console.log("AD: User has adblock, not requesting new banners");
        const {
          divId: Sr,
          alias: Qr
        } = rr;
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.display({
            adUnitName: Sr,
            alias: Qr
          })
        })), console.log("AD: Requested aip banner", document.getElementById(rr.divId), Qr ? `(alias: ${Qr})` : "")
      }
      clearBanner(rr) {
        "undefined" !== typeof window.aiptag.adplayer ? (window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.destroy(rr.divId)
        })), console.log(`AD: Clearing aip banner ad ${rr.divId}`)) : console.log("AD: User has adblock, not requesting new banners")
      }
      setBannerAutoRefreshEnabled(rr, Sr) {
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.setAutoRefresh(rr.divId, Sr)
        }))
      }
      newPageSession() {
        console.log("AD: Requesting new page session"), window.aiptag.cmd.display.push((function() {
          window.__VM.push((function(rr, Sr) {
            Sr.Instances.pageManager.newPageSession(!1)
          }))
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);