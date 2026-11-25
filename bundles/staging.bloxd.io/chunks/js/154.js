export const id = 154;
export const ids = [154];
export const modules = {
  8357: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => fu
    });
    var su = ju(3074);
    const Uu = [1, 8, 9],
      Zu = 5,
      Xu = 200,
      lu = 150;

    function qu(uu, Eu) {
      let ju = 0;
      uu("addEventListener", 2, ((uu, Xu) => {
        if (!Xu) return void console.warn("TCF CMP couldn't report a consent event, so our consent defaults stand");
        const lu = function(uu) {
          const Eu = "useractioncomplete" === uu.eventStatus || "tcloaded" === uu.eventStatus && !!uu.tcString;
          return uu.gdprApplies && Eu ? Uu.every((Eu => !0 === uu.purpose.consents[Eu])) : null
        }(uu);
        if (null === lu) return;
        const qu = ++ju;
        if (!lu) return void(0, su.updateAnalyticsConsent)(!1);
        if ("nitro" === Eu) return void(0, su.updateAnalyticsConsent)(!0);
        const fu = window.__tcfapi;
        fu ? fu("getNonIABVendorConsents", 2, ((uu, Eu) => {
          var Uu;
          qu === ju && (0, su.updateAnalyticsConsent)(Eu && !0 === (null === (Uu = uu.nonIabVendorConsents) || void 0 === Uu ? void 0 : Uu[Zu]))
        })) : console.warn("TCF CMP reported a choice but its __tcfapi is gone, so our consent defaults stand")
      }))
    }

    function fu(uu) {
      if (window.__tcfapi) return void qu(window.__tcfapi, uu);
      let Eu = 0;
      const ju = window.setInterval((() => {
        Eu++;
        const su = window.__tcfapi;
        su ? (window.clearInterval(ju), qu(su, uu)) : Eu >= lu && window.clearInterval(ju)
      }), Xu)
    }
  },
  8351: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      AdinPlaySdkAdaptor: () => fu
    });
    var su = ju(1364),
      Uu = ju(1227),
      Zu = ju(236),
      Xu = ju(8357),
      lu = ju(3074);
    const qu = ["CN", "VN", "IN", "PK", "ID", "EG", "BD", "SV", "DZ", "EC", "VE", "UA", "MA", "LK", "NG", "BO", "KE", "TN", "RU", "NP", "IQ", "MM", "HN", "UY", "JO", "PY", "PS", "ET", "GH", "JM", "CM", "AS", "SY", "BY", "AO", "MN", "GY", "LB", "MV", "BW", "UG"];
    class fu extends su.b {
      constructor() {
        super(), this.name = "adinplay", this.bannerAutoRefresh = "disableable", this.noAdCountries = qu
      }
      static async setup() {
        return (0, Zu.canonicaliseZonesWhenIdle)(qu), (0, lu.setUpGtag)(), await (0, Uu.e)("https://api.adinplay.com/libs/aiptag/pub/RBN/bloxd.io/tag.min.js"), (0, Xu.d)("inMobi"), new fu
      }
      playRewarded(uu, Eu) {
        if ("undefined" !== typeof window.aiptag.adplayer) {
          console.log("AD: Requesting AdInPlay preroll ad for rewarded placement");
          const ju = "video_reward";
          window.aiptag.cmd.player.push((function() {
            window.aiptag.adplayer.startPreRoll({
              alias: ju
            })
          })), window.adStartSoPause(uu, {
            onFailCb: Eu
          })
        } else console.log("AD: AIP ad lib not loaded, no rewarded ad playing"), Eu()
      }
      playVideoAd(uu, Eu) {
        "undefined" !== typeof window.aiptag.adplayer ? (console.log("AD: Requesting AdInPlay video ad" + (Eu ? ` (alias: ${Eu})` : "")), window.aiptag.cmd.player.push((function() {
          window.aiptag.adplayer.startPreRoll({
            alias: Eu
          })
        })), window.adStartSoPause(uu)) : (uu(), console.error("AIP ad lib not loaded, no ad playing"))
      }
      renderBanner(uu) {
        if ("undefined" === typeof window.aiptag.adplayer) return void console.log("AD: User has adblock, not requesting new banners");
        const {
          divId: Eu,
          alias: ju
        } = uu;
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.display({
            adUnitName: Eu,
            alias: ju
          })
        })), console.log("AD: Requested aip banner", document.getElementById(uu.divId), ju ? `(alias: ${ju})` : "")
      }
      clearBanner(uu) {
        "undefined" !== typeof window.aiptag.adplayer ? (window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.destroy(uu.divId)
        })), console.log(`AD: Clearing aip banner ad ${uu.divId}`)) : console.log("AD: User has adblock, not requesting new banners")
      }
      setBannerAutoRefreshEnabled(uu, Eu) {
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.setAutoRefresh(uu.divId, Eu)
        }))
      }
      newPageSession() {
        console.log("AD: Requesting new page session"), window.aiptag.cmd.display.push((function() {
          window.__VM.push((function(uu, Eu) {
            Eu.Instances.pageManager.newPageSession(!1)
          }))
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);