export const id = 152;
export const ids = [152];
export const modules = {
  8116: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => qk
    });
    var Xk = Ik(2837);
    const Tk = [1, 8, 9],
      ik = 5,
      yk = 200,
      lk = 150;

    function ak(kk, Fk) {
      let Ik = 0;
      kk("addEventListener", 2, ((kk, yk) => {
        if (!yk) return void console.warn("TCF CMP couldn't report a consent event, so our consent defaults stand");
        const lk = function(kk) {
          const Fk = "useractioncomplete" === kk.eventStatus || "tcloaded" === kk.eventStatus && !!kk.tcString;
          return kk.gdprApplies && Fk ? Tk.every((Fk => !0 === kk.purpose.consents[Fk])) : null
        }(kk);
        if (null === lk) return;
        const ak = ++Ik;
        if (!lk) return void(0, Xk.F)(!1);
        if ("nitro" === Fk) return void(0, Xk.F)(!0);
        const qk = window.__tcfapi;
        qk ? qk("getNonIABVendorConsents", 2, ((kk, Fk) => {
          var Tk;
          ak === Ik && (0, Xk.F)(Fk && !0 === (null === (Tk = kk.nonIabVendorConsents) || void 0 === Tk ? void 0 : Tk[ik]))
        })) : console.warn("TCF CMP reported a choice but its __tcfapi is gone, so our consent defaults stand")
      }))
    }

    function qk(kk) {
      if (window.__tcfapi) return void ak(window.__tcfapi, kk);
      let Fk = 0;
      const Ik = window.setInterval((() => {
        Fk++;
        const Xk = window.__tcfapi;
        Xk ? (window.clearInterval(Ik), ak(Xk, kk)) : Fk >= lk && window.clearInterval(Ik)
      }), yk)
    }
  },
  8113: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      AdinPlaySdkAdaptor: () => qk
    });
    var Xk = Ik(1295),
      Tk = Ik(1173),
      ik = Ik(231),
      yk = Ik(8116),
      lk = Ik(2837);
    const ak = ["CN", "VN", "IN", "PK", "ID", "EG", "BD", "SV", "DZ", "EC", "VE", "UA", "MA", "LK", "NG", "BO", "KE", "TN", "RU", "NP", "IQ", "MM", "HN", "UY", "JO", "PY", "PS", "ET", "GH", "JM", "CM", "AS", "SY", "BY", "AO", "MN", "GY", "LB", "MV", "BW", "UG"];
    class qk extends Xk.d {
      constructor() {
        super(), this.name = "adinplay", this.bannerAutoRefresh = "disableable", this.noAdCountries = ak
      }
      static async setup() {
        return (0, ik.canonicaliseZonesWhenIdle)(ak), (0, lk.E)(), await (0, Tk.d)("https://api.adinplay.com/libs/aiptag/pub/RBN/bloxd.io/tag.min.js"), (0, yk.e)("inMobi"), new qk
      }
      playRewarded(kk, Fk) {
        if ("undefined" !== typeof window.aiptag.adplayer) {
          console.log("AD: Requesting AdInPlay preroll ad for rewarded placement");
          const Ik = "video_reward";
          window.aiptag.cmd.player.push((function() {
            window.aiptag.adplayer.startPreRoll({
              alias: Ik
            })
          })), window.adStartSoPause(kk, {
            onFailCb: Fk
          })
        } else console.log("AD: AIP ad lib not loaded, no rewarded ad playing"), Fk()
      }
      playVideoAd(kk, Fk) {
        "undefined" !== typeof window.aiptag.adplayer ? (console.log("AD: Requesting AdInPlay video ad" + (Fk ? ` (alias: ${Fk})` : "")), window.aiptag.cmd.player.push((function() {
          window.aiptag.adplayer.startPreRoll({
            alias: Fk
          })
        })), window.adStartSoPause(kk)) : (kk(), console.error("AIP ad lib not loaded, no ad playing"))
      }
      renderBanner(kk) {
        if ("undefined" === typeof window.aiptag.adplayer) return void console.log("AD: User has adblock, not requesting new banners");
        const {
          divId: Fk,
          alias: Ik
        } = kk;
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.display({
            adUnitName: Fk,
            alias: Ik
          })
        })), console.log("AD: Requested aip banner", document.getElementById(kk.divId), Ik ? `(alias: ${Ik})` : "")
      }
      clearBanner(kk) {
        "undefined" !== typeof window.aiptag.adplayer ? (window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.destroy(kk.divId)
        })), console.log(`AD: Clearing aip banner ad ${kk.divId}`)) : console.log("AD: User has adblock, not requesting new banners")
      }
      setBannerAutoRefreshEnabled(kk, Fk) {
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.setAutoRefresh(kk.divId, Fk)
        }))
      }
      newPageSession() {
        console.log("AD: Requesting new page session"), window.aiptag.cmd.display.push((function() {
          window.__VM.push((function(kk, Fk) {
            Fk.Instances.pageManager.newPageSession(!1)
          }))
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);