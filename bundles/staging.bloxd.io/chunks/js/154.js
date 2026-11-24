export const id = 154;
export const ids = [154];
export const modules = {
  8352: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Ht
    });
    var Ot = Vt(2990);
    const qt = [1, 8, 9],
      Dt = 5,
      mt = 200,
      dt = 150;

    function jt(tt, et) {
      let Vt = 0;
      tt("addEventListener", 2, ((tt, mt) => {
        if (!mt) return void console.warn("TCF CMP couldn't report a consent event, so our consent defaults stand");
        const dt = function(tt) {
          const et = "useractioncomplete" === tt.eventStatus || "tcloaded" === tt.eventStatus && !!tt.tcString;
          return tt.gdprApplies && et ? qt.every((et => !0 === tt.purpose.consents[et])) : null
        }(tt);
        if (null === dt) return;
        const jt = ++Vt;
        if (!dt) return void(0, Ot.updateAnalyticsConsent)(!1);
        if ("nitro" === et) return void(0, Ot.updateAnalyticsConsent)(!0);
        const Ht = window.__tcfapi;
        Ht ? Ht("getNonIABVendorConsents", 2, ((tt, et) => {
          var qt;
          jt === Vt && (0, Ot.updateAnalyticsConsent)(et && !0 === (null === (qt = tt.nonIabVendorConsents) || void 0 === qt ? void 0 : qt[Dt]))
        })) : console.warn("TCF CMP reported a choice but its __tcfapi is gone, so our consent defaults stand")
      }))
    }

    function Ht(tt) {
      if (window.__tcfapi) return void jt(window.__tcfapi, tt);
      let et = 0;
      const Vt = window.setInterval((() => {
        et++;
        const Ot = window.__tcfapi;
        Ot ? (window.clearInterval(Vt), jt(Ot, tt)) : et >= dt && window.clearInterval(Vt)
      }), mt)
    }
  },
  8350: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      AdinPlaySdkAdaptor: () => Ht
    });
    var Ot = Vt(1419),
      qt = Vt(1275),
      Dt = Vt(268),
      mt = Vt(8352),
      dt = Vt(2990);
    const jt = ["CN", "VN", "IN", "PK", "ID", "EG", "BD", "SV", "DZ", "EC", "VE", "UA", "MA", "LK", "NG", "BO", "KE", "TN", "RU", "NP", "IQ", "MM", "HN", "UY", "JO", "PY", "PS", "ET", "GH", "JM", "CM", "AS", "SY", "BY", "AO", "MN", "GY", "LB", "MV", "BW", "UG"];
    class Ht extends Ot.e {
      constructor() {
        super(), this.name = "adinplay", this.bannerAutoRefresh = "disableable", this.noAdCountries = jt
      }
      static async setup() {
        return (0, Dt.canonicaliseZonesWhenIdle)(jt), (0, dt.setUpGtag)(), await (0, qt.d)("https://api.adinplay.com/libs/aiptag/pub/RBN/bloxd.io/tag.min.js"), (0, mt.e)("inMobi"), new Ht
      }
      playRewarded(tt, et) {
        if ("undefined" !== typeof window.aiptag.adplayer) {
          console.log("AD: Requesting AdInPlay preroll ad for rewarded placement");
          const Vt = "video_reward";
          window.aiptag.cmd.player.push((function() {
            window.aiptag.adplayer.startPreRoll({
              alias: Vt
            })
          })), window.adStartSoPause(tt, {
            onFailCb: et
          })
        } else console.log("AD: AIP ad lib not loaded, no rewarded ad playing"), et()
      }
      playVideoAd(tt, et) {
        "undefined" !== typeof window.aiptag.adplayer ? (console.log("AD: Requesting AdInPlay video ad" + (et ? ` (alias: ${et})` : "")), window.aiptag.cmd.player.push((function() {
          window.aiptag.adplayer.startPreRoll({
            alias: et
          })
        })), window.adStartSoPause(tt)) : (tt(), console.error("AIP ad lib not loaded, no ad playing"))
      }
      renderBanner(tt) {
        if ("undefined" === typeof window.aiptag.adplayer) return void console.log("AD: User has adblock, not requesting new banners");
        const {
          divId: et,
          alias: Vt
        } = tt;
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.display({
            adUnitName: et,
            alias: Vt
          })
        })), console.log("AD: Requested aip banner", document.getElementById(tt.divId), Vt ? `(alias: ${Vt})` : "")
      }
      clearBanner(tt) {
        "undefined" !== typeof window.aiptag.adplayer ? (window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.destroy(tt.divId)
        })), console.log(`AD: Clearing aip banner ad ${tt.divId}`)) : console.log("AD: User has adblock, not requesting new banners")
      }
      setBannerAutoRefreshEnabled(tt, et) {
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.setAutoRefresh(tt.divId, et)
        }))
      }
      newPageSession() {
        console.log("AD: Requesting new page session"), window.aiptag.cmd.display.push((function() {
          window.__VM.push((function(tt, et) {
            et.Instances.pageManager.newPageSession(!1)
          }))
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);