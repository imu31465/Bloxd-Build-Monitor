export const id = 154;
export const ids = [154];
export const modules = {
  8269: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Yp
    });
    var Op = cp(3003);
    const op = [1, 8, 9],
      Ip = 5,
      Sp = 200,
      xp = 150;

    function Lp(pp, ip) {
      let cp = 0;
      pp("addEventListener", 2, ((pp, Sp) => {
        if (!Sp) return void console.warn("TCF CMP couldn't report a consent event, so our consent defaults stand");
        const xp = function(pp) {
          const ip = "useractioncomplete" === pp.eventStatus || "tcloaded" === pp.eventStatus && !!pp.tcString;
          return pp.gdprApplies && ip ? op.every((ip => !0 === pp.purpose.consents[ip])) : null
        }(pp);
        if (null === xp) return;
        const Lp = ++cp;
        if (!xp) return void(0, Op.updateAnalyticsConsent)(!1);
        if ("nitro" === ip) return void(0, Op.updateAnalyticsConsent)(!0);
        const Yp = window.__tcfapi;
        Yp ? Yp("getNonIABVendorConsents", 2, ((pp, ip) => {
          var op;
          Lp === cp && (0, Op.updateAnalyticsConsent)(ip && !0 === (null === (op = pp.nonIabVendorConsents) || void 0 === op ? void 0 : op[Ip]))
        })) : console.warn("TCF CMP reported a choice but its __tcfapi is gone, so our consent defaults stand")
      }))
    }

    function Yp(pp) {
      if (window.__tcfapi) return void Lp(window.__tcfapi, pp);
      let ip = 0;
      const cp = window.setInterval((() => {
        ip++;
        const Op = window.__tcfapi;
        Op ? (window.clearInterval(cp), Lp(Op, pp)) : ip >= xp && window.clearInterval(cp)
      }), Sp)
    }
  },
  8263: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      AdinPlaySdkAdaptor: () => Yp
    });
    var Op = cp(1341),
      op = cp(1194),
      Ip = cp(226),
      Sp = cp(8269),
      xp = cp(3003);
    const Lp = ["CN", "VN", "IN", "PK", "ID", "EG", "BD", "SV", "DZ", "EC", "VE", "UA", "MA", "LK", "NG", "BO", "KE", "TN", "RU", "NP", "IQ", "MM", "HN", "UY", "JO", "PY", "PS", "ET", "GH", "JM", "CM", "AS", "SY", "BY", "AO", "MN", "GY", "LB", "MV", "BW", "UG"];
    class Yp extends Op.b {
      constructor() {
        super(), this.name = "adinplay", this.bannerAutoRefresh = "disableable", this.noAdCountries = Lp
      }
      static async setup() {
        return (0, Ip.canonicaliseZonesWhenIdle)(Lp), (0, xp.setUpGtag)(), await (0, op.b)("https://api.adinplay.com/libs/aiptag/pub/RBN/bloxd.io/tag.min.js"), (0, Sp.b)("inMobi"), new Yp
      }
      playRewarded(pp, ip) {
        if ("undefined" !== typeof window.aiptag.adplayer) {
          console.log("AD: Requesting AdInPlay preroll ad for rewarded placement");
          const cp = "video_reward";
          window.aiptag.cmd.player.push((function() {
            window.aiptag.adplayer.startPreRoll({
              alias: cp
            })
          })), window.adStartSoPause(pp, {
            onFailCb: ip
          })
        } else console.log("AD: AIP ad lib not loaded, no rewarded ad playing"), ip()
      }
      playVideoAd(pp, ip) {
        "undefined" !== typeof window.aiptag.adplayer ? (console.log("AD: Requesting AdInPlay video ad" + (ip ? ` (alias: ${ip})` : "")), window.aiptag.cmd.player.push((function() {
          window.aiptag.adplayer.startPreRoll({
            alias: ip
          })
        })), window.adStartSoPause(pp)) : (pp(), console.error("AIP ad lib not loaded, no ad playing"))
      }
      renderBanner(pp) {
        if ("undefined" === typeof window.aiptag.adplayer) return void console.log("AD: User has adblock, not requesting new banners");
        const {
          divId: ip,
          alias: cp
        } = pp;
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.display({
            adUnitName: ip,
            alias: cp
          })
        })), console.log("AD: Requested aip banner", document.getElementById(pp.divId), cp ? `(alias: ${cp})` : "")
      }
      clearBanner(pp) {
        "undefined" !== typeof window.aiptag.adplayer ? (window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.destroy(pp.divId)
        })), console.log(`AD: Clearing aip banner ad ${pp.divId}`)) : console.log("AD: User has adblock, not requesting new banners")
      }
      setBannerAutoRefreshEnabled(pp, ip) {
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.setAutoRefresh(pp.divId, ip)
        }))
      }
      newPageSession() {
        console.log("AD: Requesting new page session"), window.aiptag.cmd.display.push((function() {
          window.__VM.push((function(pp, ip) {
            ip.Instances.pageManager.newPageSession(!1)
          }))
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);