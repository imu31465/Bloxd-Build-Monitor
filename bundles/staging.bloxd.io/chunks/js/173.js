export const id = 173;
export const ids = [173];
export const modules = {
  7940: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      AdinPlaySdkAdaptor: () => Ib
    });
    var eb = Mb(1440),
      Hb = Mb(1250),
      pb = Mb(270),
      Vb = Mb(4155),
      gb = Mb(4162);

    function lb(bb) {
      let wb = 0;
      bb("addEventListener", 2, ((bb, Mb) => {
        if (!Mb) return void console.warn("TCF CMP couldn't report a consent event, so our consent defaults stand");
        !1 === bb.gdprApplies && (0, Vb.noteNoGdprChoiceComing)();
        const eb = function(bb) {
          const wb = "useractioncomplete" === bb.eventStatus || "tcloaded" === bb.eventStatus && !!bb.tcString;
          return bb.gdprApplies && wb ? gb.e.every((wb => !0 === bb.purpose.consents[wb])) : null
        }(bb);
        if (null === eb) return;
        const Hb = ++wb;
        if (!eb) return void(0, Vb.updateAnalyticsConsent)(!1);
        const pb = window.__tcfapi;
        pb ? pb("getNonIABVendorConsents", 2, ((bb, Mb) => {
          var eb;
          Hb === wb && (0, Vb.updateAnalyticsConsent)(Mb && !0 === (null === (eb = bb.nonIabVendorConsents) || void 0 === eb ? void 0 : eb[5]))
        })) : console.warn("TCF CMP reported a choice but its __tcfapi is gone, so our consent defaults stand")
      }))
    }
    const Lb = ["CN", "VN", "IN", "PK", "ID", "EG", "BD", "SV", "DZ", "EC", "VE", "UA", "MA", "LK", "NG", "BO", "KE", "TN", "RU", "NP", "IQ", "MM", "HN", "UY", "JO", "PY", "PS", "ET", "GH", "JM", "CM", "AS", "SY", "BY", "AO", "MN", "GY", "LB", "MV", "BW", "UG"];
    class Ib extends eb.b {
      constructor() {
        super(), this.name = "adinplay", this.bannerAutoRefresh = "disableable", this.noAdCountries = Lb
      }
      static async setup() {
        return (0, pb.canonicaliseZonesWhenIdle)(Lb), (0, Vb.setUpGtag)({
            tcfCmp: !0
          }), await (0, Hb.c)("https://api.adinplay.com/libs/aiptag/pub/RBN/bloxd.io/tag.min.js"),
          function() {
            if (window.__tcfapi) return void lb(window.__tcfapi);
            let bb = 0;
            const wb = window.setInterval((() => {
              bb++;
              const Mb = window.__tcfapi;
              Mb ? (window.clearInterval(wb), lb(Mb)) : bb >= 150 && window.clearInterval(wb)
            }), 200)
          }(), new Ib
      }
      playRewarded(bb, wb) {
        if ("undefined" !== typeof window.aiptag.adplayer) {
          console.log("AD: Requesting AdInPlay preroll ad for rewarded placement");
          const Mb = "video_reward";
          window.aiptag.cmd.player.push((function() {
            window.aiptag.adplayer.startPreRoll({
              alias: Mb
            })
          })), window.adStartSoPause(bb, {
            onFailCb: wb
          })
        } else console.log("AD: AIP ad lib not loaded, no rewarded ad playing"), wb()
      }
      playVideoAd(bb, wb) {
        "undefined" !== typeof window.aiptag.adplayer ? (console.log("AD: Requesting AdInPlay video ad" + (wb ? ` (alias: ${wb})` : "")), window.aiptag.cmd.player.push((function() {
          window.aiptag.adplayer.startPreRoll({
            alias: wb
          })
        })), window.adStartSoPause(bb)) : (bb(), console.error("AIP ad lib not loaded, no ad playing"))
      }
      willRequestBanner() {
        return "undefined" !== typeof window.aiptag.adplayer
      }
      renderBanner(bb) {
        if (!this.willRequestBanner()) return void console.log("AD: User has adblock, not requesting new banners");
        const {
          divId: wb,
          alias: Mb
        } = bb;
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.display({
            adUnitName: wb,
            alias: Mb
          })
        })), console.log("AD: Requested aip banner", document.getElementById(bb.divId), Mb ? `(alias: ${Mb})` : "")
      }
      clearBanner(bb) {
        "undefined" !== typeof window.aiptag.adplayer ? (window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.destroy(bb.divId)
        })), console.log(`AD: Clearing aip banner ad ${bb.divId}`)) : console.log("AD: User has adblock, not requesting new banners")
      }
      setBannerAutoRefreshEnabled(bb, wb) {
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.setAutoRefresh(bb.divId, wb)
        }))
      }
      newPageSession() {
        console.log("AD: Requesting new page session"), window.aiptag.cmd.display.push((function() {
          window.__VM.push((function(bb, wb) {
            wb.Instances.pageManager.newPageSession(!1)
          }))
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);