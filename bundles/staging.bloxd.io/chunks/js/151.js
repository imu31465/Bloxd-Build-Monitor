export const id = 151;
export const ids = [151];
export const modules = {
  7950: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => mk
    });
    var Dk = ik(2849);
    const fk = [1, 8, 9],
      Sk = 5,
      bk = 200,
      rk = 150;

    function Pk(kk, ek) {
      let ik = 0;
      kk("addEventListener", 2, ((kk, bk) => {
        if (!bk) return void console.warn("TCF CMP couldn't report a consent event, so our consent defaults stand");
        const rk = function(kk) {
          const ek = "useractioncomplete" === kk.eventStatus || "tcloaded" === kk.eventStatus && !!kk.tcString;
          return kk.gdprApplies && ek ? fk.every((ek => !0 === kk.purpose.consents[ek])) : null
        }(kk);
        if (null === rk) return;
        const Pk = ++ik;
        if (!rk) return void(0, Dk.B)(!1);
        if ("nitro" === ek) return void(0, Dk.B)(!0);
        const mk = window.__tcfapi;
        mk ? mk("getNonIABVendorConsents", 2, ((kk, ek) => {
          var fk;
          Pk === ik && (0, Dk.B)(ek && !0 === (null === (fk = kk.nonIabVendorConsents) || void 0 === fk ? void 0 : fk[Sk]))
        })) : console.warn("TCF CMP reported a choice but its __tcfapi is gone, so our consent defaults stand")
      }))
    }

    function mk(kk) {
      if (window.__tcfapi) return void Pk(window.__tcfapi, kk);
      let ek = 0;
      const ik = window.setInterval((() => {
        ek++;
        const Dk = window.__tcfapi;
        Dk ? (window.clearInterval(ik), Pk(Dk, kk)) : ek >= rk && window.clearInterval(ik)
      }), bk)
    }
  },
  7943: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      AdinPlaySdkAdaptor: () => mk
    });
    var Dk = ik(1298),
      fk = ik(1163),
      Sk = ik(224),
      bk = ik(7950),
      rk = ik(2849);
    const Pk = ["CN", "VN", "IN", "PK", "ID", "EG", "BD", "SV", "DZ", "EC", "VE", "UA", "MA", "LK", "NG", "BO", "KE", "TN", "RU", "NP", "IQ", "MM", "HN", "UY", "JO", "PY", "PS", "ET", "GH", "JM", "CM", "AS", "SY", "BY", "AO", "MN", "GY", "LB", "MV", "BW", "UG"];
    class mk extends Dk.e {
      constructor() {
        super(), this.name = "adinplay", this.bannerAutoRefresh = "disableable", this.noAdCountries = Pk
      }
      static async setup() {
        return (0, Sk.canonicaliseZonesWhenIdle)(Pk), (0, rk.A)(), await (0, fk.d)("https://api.adinplay.com/libs/aiptag/pub/RBN/bloxd.io/tag.min.js"), (0, bk.e)("inMobi"), new mk
      }
      playRewarded(kk, ek) {
        if ("undefined" !== typeof window.aiptag.adplayer) {
          console.log("AD: Requesting AdInPlay preroll ad for rewarded placement");
          const ik = "video_reward";
          window.aiptag.cmd.player.push((function() {
            window.aiptag.adplayer.startPreRoll({
              alias: ik
            })
          })), window.adStartSoPause(kk, {
            onFailCb: ek
          })
        } else console.log("AD: AIP ad lib not loaded, no rewarded ad playing"), ek()
      }
      playVideoAd(kk, ek) {
        "undefined" !== typeof window.aiptag.adplayer ? (console.log("AD: Requesting AdInPlay video ad" + (ek ? ` (alias: ${ek})` : "")), window.aiptag.cmd.player.push((function() {
          window.aiptag.adplayer.startPreRoll({
            alias: ek
          })
        })), window.adStartSoPause(kk)) : (kk(), console.error("AIP ad lib not loaded, no ad playing"))
      }
      renderBanner(kk) {
        if ("undefined" === typeof window.aiptag.adplayer) return void console.log("AD: User has adblock, not requesting new banners");
        const {
          divId: ek,
          alias: ik
        } = kk;
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.display({
            adUnitName: ek,
            alias: ik
          })
        })), console.log("AD: Requested aip banner", document.getElementById(kk.divId), ik ? `(alias: ${ik})` : "")
      }
      clearBanner(kk) {
        "undefined" !== typeof window.aiptag.adplayer ? (window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.destroy(kk.divId)
        })), console.log(`AD: Clearing aip banner ad ${kk.divId}`)) : console.log("AD: User has adblock, not requesting new banners")
      }
      setBannerAutoRefreshEnabled(kk, ek) {
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.setAutoRefresh(kk.divId, ek)
        }))
      }
      newPageSession() {
        console.log("AD: Requesting new page session"), window.aiptag.cmd.display.push((function() {
          window.__VM.push((function(kk, ek) {
            ek.Instances.pageManager.newPageSession(!1)
          }))
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);