export const id = 152;
export const ids = [152];
export const modules = {
  8295: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => uS
    });
    var tS = gS(3067);
    const bS = [1, 8, 9],
      XS = 5,
      xS = 200,
      NS = 150;

    function qS(SS, HS) {
      let gS = 0;
      SS("addEventListener", 2, ((SS, xS) => {
        if (!xS) return void console.warn("TCF CMP couldn't report a consent event, so our consent defaults stand");
        const NS = function(SS) {
          const HS = "useractioncomplete" === SS.eventStatus || "tcloaded" === SS.eventStatus && !!SS.tcString;
          return SS.gdprApplies && HS ? bS.every((HS => !0 === SS.purpose.consents[HS])) : null
        }(SS);
        if (null === NS) return;
        const qS = ++gS;
        if (!NS) return void(0, tS.y)(!1);
        if ("nitro" === HS) return void(0, tS.y)(!0);
        const uS = window.__tcfapi;
        uS ? uS("getNonIABVendorConsents", 2, ((SS, HS) => {
          var bS;
          qS === gS && (0, tS.y)(HS && !0 === (null === (bS = SS.nonIabVendorConsents) || void 0 === bS ? void 0 : bS[XS]))
        })) : console.warn("TCF CMP reported a choice but its __tcfapi is gone, so our consent defaults stand")
      }))
    }

    function uS(SS) {
      if (window.__tcfapi) return void qS(window.__tcfapi, SS);
      let HS = 0;
      const gS = window.setInterval((() => {
        HS++;
        const tS = window.__tcfapi;
        tS ? (window.clearInterval(gS), qS(tS, SS)) : HS >= NS && window.clearInterval(gS)
      }), xS)
    }
  },
  8288: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      AdinPlaySdkAdaptor: () => uS
    });
    var tS = gS(1397),
      bS = gS(1267),
      XS = gS(248),
      xS = gS(8295),
      NS = gS(3067);
    const qS = ["CN", "VN", "IN", "PK", "ID", "EG", "BD", "SV", "DZ", "EC", "VE", "UA", "MA", "LK", "NG", "BO", "KE", "TN", "RU", "NP", "IQ", "MM", "HN", "UY", "JO", "PY", "PS", "ET", "GH", "JM", "CM", "AS", "SY", "BY", "AO", "MN", "GY", "LB", "MV", "BW", "UG"];
    class uS extends tS.c {
      constructor() {
        super(), this.name = "adinplay", this.bannerAutoRefresh = "disableable", this.noAdCountries = qS
      }
      static async setup() {
        return (0, XS.canonicaliseZonesWhenIdle)(qS), (0, NS.w)(), await (0, bS.c)("https://api.adinplay.com/libs/aiptag/pub/RBN/bloxd.io/tag.min.js"), (0, xS.b)("inMobi"), new uS
      }
      playRewarded(SS, HS) {
        if ("undefined" !== typeof window.aiptag.adplayer) {
          console.log("AD: Requesting AdInPlay preroll ad for rewarded placement");
          const gS = "video_reward";
          window.aiptag.cmd.player.push((function() {
            window.aiptag.adplayer.startPreRoll({
              alias: gS
            })
          })), window.adStartSoPause(SS, {
            onFailCb: HS
          })
        } else console.log("AD: AIP ad lib not loaded, no rewarded ad playing"), HS()
      }
      playVideoAd(SS, HS) {
        "undefined" !== typeof window.aiptag.adplayer ? (console.log("AD: Requesting AdInPlay video ad" + (HS ? ` (alias: ${HS})` : "")), window.aiptag.cmd.player.push((function() {
          window.aiptag.adplayer.startPreRoll({
            alias: HS
          })
        })), window.adStartSoPause(SS)) : (SS(), console.error("AIP ad lib not loaded, no ad playing"))
      }
      renderBanner(SS) {
        if ("undefined" === typeof window.aiptag.adplayer) return void console.log("AD: User has adblock, not requesting new banners");
        const {
          divId: HS,
          alias: gS
        } = SS;
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.display({
            adUnitName: HS,
            alias: gS
          })
        })), console.log("AD: Requested aip banner", document.getElementById(SS.divId), gS ? `(alias: ${gS})` : "")
      }
      clearBanner(SS) {
        "undefined" !== typeof window.aiptag.adplayer ? (window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.destroy(SS.divId)
        })), console.log(`AD: Clearing aip banner ad ${SS.divId}`)) : console.log("AD: User has adblock, not requesting new banners")
      }
      setBannerAutoRefreshEnabled(SS, HS) {
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.setAutoRefresh(SS.divId, HS)
        }))
      }
      newPageSession() {
        console.log("AD: Requesting new page session"), window.aiptag.cmd.display.push((function() {
          window.__VM.push((function(SS, HS) {
            HS.Instances.pageManager.newPageSession(!1)
          }))
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);