export const id = 152;
export const ids = [152];
export const modules = {
  8036: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => im
    });
    var hm = fm(2903);
    const Am = [1, 8, 9],
      am = 5,
      xm = 200,
      wm = 150;

    function Dm(mm, Tm) {
      let fm = 0;
      mm("addEventListener", 2, ((mm, xm) => {
        if (!xm) return void console.warn("TCF CMP couldn't report a consent event, so our consent defaults stand");
        const wm = function(mm) {
          const Tm = "useractioncomplete" === mm.eventStatus || "tcloaded" === mm.eventStatus && !!mm.tcString;
          return mm.gdprApplies && Tm ? Am.every((Tm => !0 === mm.purpose.consents[Tm])) : null
        }(mm);
        if (null === wm) return;
        const Dm = ++fm;
        if (!wm) return void(0, hm.M)(!1);
        if ("nitro" === Tm) return void(0, hm.M)(!0);
        const im = window.__tcfapi;
        im ? im("getNonIABVendorConsents", 2, ((mm, Tm) => {
          var Am;
          Dm === fm && (0, hm.M)(Tm && !0 === (null === (Am = mm.nonIabVendorConsents) || void 0 === Am ? void 0 : Am[am]))
        })) : console.warn("TCF CMP reported a choice but its __tcfapi is gone, so our consent defaults stand")
      }))
    }

    function im(mm) {
      if (window.__tcfapi) return void Dm(window.__tcfapi, mm);
      let Tm = 0;
      const fm = window.setInterval((() => {
        Tm++;
        const hm = window.__tcfapi;
        hm ? (window.clearInterval(fm), Dm(hm, mm)) : Tm >= wm && window.clearInterval(fm)
      }), xm)
    }
  },
  8034: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      AdinPlaySdkAdaptor: () => im
    });
    var hm = fm(1318),
      Am = fm(1198),
      am = fm(242),
      xm = fm(8036),
      wm = fm(2903);
    const Dm = ["CN", "VN", "IN", "PK", "ID", "EG", "BD", "SV", "DZ", "EC", "VE", "UA", "MA", "LK", "NG", "BO", "KE", "TN", "RU", "NP", "IQ", "MM", "HN", "UY", "JO", "PY", "PS", "ET", "GH", "JM", "CM", "AS", "SY", "BY", "AO", "MN", "GY", "LB", "MV", "BW", "UG"];
    class im extends hm.c {
      constructor() {
        super(), this.name = "adinplay", this.bannerAutoRefresh = "disableable", this.noAdCountries = Dm
      }
      static async setup() {
        return (0, am.canonicaliseZonesWhenIdle)(Dm), (0, wm.L)(), await (0, Am.c)("https://api.adinplay.com/libs/aiptag/pub/RBN/bloxd.io/tag.min.js"), (0, xm.e)("inMobi"), new im
      }
      playRewarded(mm, Tm) {
        if ("undefined" !== typeof window.aiptag.adplayer) {
          console.log("AD: Requesting AdInPlay preroll ad for rewarded placement");
          const fm = "video_reward";
          window.aiptag.cmd.player.push((function() {
            window.aiptag.adplayer.startPreRoll({
              alias: fm
            })
          })), window.adStartSoPause(mm, {
            onFailCb: Tm
          })
        } else console.log("AD: AIP ad lib not loaded, no rewarded ad playing"), Tm()
      }
      playVideoAd(mm, Tm) {
        "undefined" !== typeof window.aiptag.adplayer ? (console.log("AD: Requesting AdInPlay video ad" + (Tm ? ` (alias: ${Tm})` : "")), window.aiptag.cmd.player.push((function() {
          window.aiptag.adplayer.startPreRoll({
            alias: Tm
          })
        })), window.adStartSoPause(mm)) : (mm(), console.error("AIP ad lib not loaded, no ad playing"))
      }
      renderBanner(mm) {
        if ("undefined" === typeof window.aiptag.adplayer) return void console.log("AD: User has adblock, not requesting new banners");
        const {
          divId: Tm,
          alias: fm
        } = mm;
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.display({
            adUnitName: Tm,
            alias: fm
          })
        })), console.log("AD: Requested aip banner", document.getElementById(mm.divId), fm ? `(alias: ${fm})` : "")
      }
      clearBanner(mm) {
        "undefined" !== typeof window.aiptag.adplayer ? (window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.destroy(mm.divId)
        })), console.log(`AD: Clearing aip banner ad ${mm.divId}`)) : console.log("AD: User has adblock, not requesting new banners")
      }
      setBannerAutoRefreshEnabled(mm, Tm) {
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.setAutoRefresh(mm.divId, Tm)
        }))
      }
      newPageSession() {
        console.log("AD: Requesting new page session"), window.aiptag.cmd.display.push((function() {
          window.__VM.push((function(mm, Tm) {
            Tm.Instances.pageManager.newPageSession(!1)
          }))
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);