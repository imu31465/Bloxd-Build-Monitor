export const id = 154;
export const ids = [154];
export const modules = {
  8256: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => cB
    });
    var TB = ZB(3088);
    const JB = [1, 8, 9],
      oB = 5,
      GB = 200,
      vB = 150;

    function kB(BB, IB) {
      let ZB = 0;
      BB("addEventListener", 2, ((BB, GB) => {
        if (!GB) return void console.warn("TCF CMP couldn't report a consent event, so our consent defaults stand");
        const vB = function(BB) {
          const IB = "useractioncomplete" === BB.eventStatus || "tcloaded" === BB.eventStatus && !!BB.tcString;
          return BB.gdprApplies && IB ? JB.every((IB => !0 === BB.purpose.consents[IB])) : null
        }(BB);
        if (null === vB) return;
        const kB = ++ZB;
        if (!vB) return void(0, TB.updateAnalyticsConsent)(!1);
        if ("nitro" === IB) return void(0, TB.updateAnalyticsConsent)(!0);
        const cB = window.__tcfapi;
        cB ? cB("getNonIABVendorConsents", 2, ((BB, IB) => {
          var JB;
          kB === ZB && (0, TB.updateAnalyticsConsent)(IB && !0 === (null === (JB = BB.nonIabVendorConsents) || void 0 === JB ? void 0 : JB[oB]))
        })) : console.warn("TCF CMP reported a choice but its __tcfapi is gone, so our consent defaults stand")
      }))
    }

    function cB(BB) {
      if (window.__tcfapi) return void kB(window.__tcfapi, BB);
      let IB = 0;
      const ZB = window.setInterval((() => {
        IB++;
        const TB = window.__tcfapi;
        TB ? (window.clearInterval(ZB), kB(TB, BB)) : IB >= vB && window.clearInterval(ZB)
      }), GB)
    }
  },
  8251: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      AdinPlaySdkAdaptor: () => cB
    });
    var TB = ZB(1379),
      JB = ZB(1241),
      oB = ZB(233),
      GB = ZB(8256),
      vB = ZB(3088);
    const kB = ["CN", "VN", "IN", "PK", "ID", "EG", "BD", "SV", "DZ", "EC", "VE", "UA", "MA", "LK", "NG", "BO", "KE", "TN", "RU", "NP", "IQ", "MM", "HN", "UY", "JO", "PY", "PS", "ET", "GH", "JM", "CM", "AS", "SY", "BY", "AO", "MN", "GY", "LB", "MV", "BW", "UG"];
    class cB extends TB.d {
      constructor() {
        super(), this.name = "adinplay", this.bannerAutoRefresh = "disableable", this.noAdCountries = kB
      }
      static async setup() {
        return (0, oB.canonicaliseZonesWhenIdle)(kB), (0, vB.setUpGtag)(), await (0, JB.c)("https://api.adinplay.com/libs/aiptag/pub/RBN/bloxd.io/tag.min.js"), (0, GB.c)("inMobi"), new cB
      }
      playRewarded(BB, IB) {
        if ("undefined" !== typeof window.aiptag.adplayer) {
          console.log("AD: Requesting AdInPlay preroll ad for rewarded placement");
          const ZB = "video_reward";
          window.aiptag.cmd.player.push((function() {
            window.aiptag.adplayer.startPreRoll({
              alias: ZB
            })
          })), window.adStartSoPause(BB, {
            onFailCb: IB
          })
        } else console.log("AD: AIP ad lib not loaded, no rewarded ad playing"), IB()
      }
      playVideoAd(BB, IB) {
        "undefined" !== typeof window.aiptag.adplayer ? (console.log("AD: Requesting AdInPlay video ad" + (IB ? ` (alias: ${IB})` : "")), window.aiptag.cmd.player.push((function() {
          window.aiptag.adplayer.startPreRoll({
            alias: IB
          })
        })), window.adStartSoPause(BB)) : (BB(), console.error("AIP ad lib not loaded, no ad playing"))
      }
      renderBanner(BB) {
        if ("undefined" === typeof window.aiptag.adplayer) return void console.log("AD: User has adblock, not requesting new banners");
        const {
          divId: IB,
          alias: ZB
        } = BB;
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.display({
            adUnitName: IB,
            alias: ZB
          })
        })), console.log("AD: Requested aip banner", document.getElementById(BB.divId), ZB ? `(alias: ${ZB})` : "")
      }
      clearBanner(BB) {
        "undefined" !== typeof window.aiptag.adplayer ? (window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.destroy(BB.divId)
        })), console.log(`AD: Clearing aip banner ad ${BB.divId}`)) : console.log("AD: User has adblock, not requesting new banners")
      }
      setBannerAutoRefreshEnabled(BB, IB) {
        window.aiptag.cmd.display.push((function() {
          window.aipDisplayTag.setAutoRefresh(BB.divId, IB)
        }))
      }
      newPageSession() {
        console.log("AD: Requesting new page session"), window.aiptag.cmd.display.push((function() {
          window.__VM.push((function(BB, IB) {
            IB.Instances.pageManager.newPageSession(!1)
          }))
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);