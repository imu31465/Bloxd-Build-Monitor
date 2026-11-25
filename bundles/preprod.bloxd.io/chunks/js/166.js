export const id = 166;
export const ids = [166];
export const modules = {
  7221: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => QM
    });
    var OM = iM(3241);
    const SM = [1, 8, 9],
      jM = 5,
      aM = 200,
      PM = 150;

    function nM(MM, rM) {
      let iM = 0;
      MM("addEventListener", 2, ((MM, aM) => {
        if (!aM) return void console.warn("TCF CMP couldn't report a consent event, so our consent defaults stand");
        const PM = function(MM) {
          const rM = "useractioncomplete" === MM.eventStatus || "tcloaded" === MM.eventStatus && !!MM.tcString;
          return MM.gdprApplies && rM ? SM.every((rM => !0 === MM.purpose.consents[rM])) : null
        }(MM);
        if (null === PM) return;
        const nM = ++iM;
        if (!PM) return void(0, OM.updateAnalyticsConsent)(!1);
        if ("nitro" === rM) return void(0, OM.updateAnalyticsConsent)(!0);
        const QM = window.__tcfapi;
        QM ? QM("getNonIABVendorConsents", 2, ((MM, rM) => {
          var SM;
          nM === iM && (0, OM.updateAnalyticsConsent)(rM && !0 === (null === (SM = MM.nonIabVendorConsents) || void 0 === SM ? void 0 : SM[jM]))
        })) : console.warn("TCF CMP reported a choice but its __tcfapi is gone, so our consent defaults stand")
      }))
    }

    function QM(MM) {
      if (window.__tcfapi) return void nM(window.__tcfapi, MM);
      let rM = 0;
      const iM = window.setInterval((() => {
        rM++;
        const OM = window.__tcfapi;
        OM ? (window.clearInterval(iM), nM(OM, MM)) : rM >= PM && window.clearInterval(iM)
      }), aM)
    }
  },
  7238: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      NitroSdkAdaptor: () => nM
    });
    var OM = iM(1367),
      SM = iM(1177),
      jM = iM(7221),
      aM = iM(3241);
    const PM = "NitroOutstreamVideo";
    class nM extends OM.d {
      constructor() {
        super(), this.name = "nitro", this.bannerAutoRefresh = "alwaysOn", this.videoInFlight = !1
      }
      static async setup() {
        return window.nitroAds = window.nitroAds || {
          createAd: function() {
            for (var MM = arguments.length, rM = new Array(MM), iM = 0; iM < MM; iM++) rM[iM] = arguments[iM];
            return new Promise((MM => {
              window.nitroAds.queue.push(["createAd", rM, MM])
            }))
          },
          addUserToken: function() {
            for (var MM = arguments.length, rM = new Array(MM), iM = 0; iM < MM; iM++) rM[iM] = arguments[iM];
            window.nitroAds.queue.push(["addUserToken", rM])
          },
          queue: []
        }, document.addEventListener("nitroAds.rendered", (MM => {
          var rM, iM, OM;
          const SM = document.getElementById(null !== (rM = null === (iM = MM.detail) || void 0 === iM || null === (OM = iM.adInfo) || void 0 === OM ? void 0 : OM.adUnitCode) && void 0 !== rM ? rM : "");
          null !== SM && void 0 !== SM && SM.classList.contains("NitroBanner") && SM.classList.toggle("NitroBannerUnfilled", "blank" === MM.detail.type)
        })), (0, aM.setUpGtag)(), await (0, SM.d)("https://s.nitropay.com/ads-2842.js", {
          "data-cfasync": "false"
        }), (0, jM.e)("nitro"), new nM
      }
      playVideoAd(MM, rM) {
        this.showVideoAd(MM, MM)
      }
      playRewarded(MM, rM) {
        this.showVideoAd(MM, rM)
      }
      showVideoAd(MM, rM) {
        if (this.videoInFlight) return console.log("AD: Nitro video already playing"), void rM();
        const iM = document.getElementById("GenericVideoWrapper"),
          OM = document.getElementById("GenericVideoInner");
        if (null === iM || null === OM) return void rM();
        this.videoInFlight = !0;
        let SM = !1;
        const jM = document.createElement("div");
        jM.id = PM, jM.className = "NitroVideoPlacement";
        const aM = aM => {
          if (!SM) {
            SM = !0, clearTimeout(yM), clearInterval(dM), document.removeEventListener("nitroAds.adResult", zM), document.removeEventListener("nitroAds.rendered", LM), document.removeEventListener("nitroAds.complete", mM);
            try {
              HM.remove(), jM.querySelectorAll("video").forEach((MM => {
                MM.pause()
              })), jM.remove(), OM.classList.remove("NitroVideo"), iM.style.display = "none"
            } catch (PM) {
              console.error("AD: Error tearing down Nitro video", PM)
            } finally {
              this.videoInFlight = !1, window.adCompleteSoResume(), aM ? MM() : rM()
            }
          }
        };
        let nM = !1;
        const QM = (MM, rM) => {
            if (!nM) {
              if (!MM) return console.log(`AD: Nitro video not filled: ${rM}`), void aM(!1);
              nM = !0, clearTimeout(yM), yM = setTimeout((() => {
                console.log("AD: Nitro video never completed"), aM(!1)
              }), 12e4)
            }
          },
          zM = MM => {
            var rM;
            (null === (rM = MM.detail) || void 0 === rM ? void 0 : rM.id) === PM && QM("filled" === MM.detail.status, MM.detail.status)
          },
          LM = MM => {
            var rM, iM;
            (null === (rM = MM.detail) || void 0 === rM || null === (iM = rM.adInfo) || void 0 === iM ? void 0 : iM.adUnitCode) === PM && QM("blank" !== MM.detail.type, MM.detail.type)
          },
          mM = MM => {
            var rM;
            (null === (rM = MM.detail) || void 0 === rM ? void 0 : rM.adUnitCode) === PM && aM(!0)
          },
          HM = document.createElement("button");
        HM.className = "NitroVideoSkip", HM.disabled = !0, HM.addEventListener("click", (() => {
          console.log("AD: Nitro video skipped"), aM(!0)
        }));
        let hM = Math.ceil(15);
        const JM = () => {
          if (hM <= 0) return clearInterval(dM), HM.textContent = "Skip Ad", void(HM.disabled = !1);
          HM.textContent = `Skip ad in ${hM}s`, hM--
        };
        JM();
        const dM = setInterval(JM, 1e3);
        let yM = setTimeout((() => {
          console.log("AD: Nitro video got no result"), aM(!1)
        }), 1e4);
        document.addEventListener("nitroAds.adResult", zM), document.addEventListener("nitroAds.rendered", LM), document.addEventListener("nitroAds.complete", mM), OM.appendChild(jM), OM.classList.add("NitroVideo"), iM.appendChild(HM), iM.style.display = "flex", window.adStartSoPause(null, {
          preventMovement: !0
        }), Promise.resolve(window.nitroAds.createAd(PM, {
          format: "display",
          outstream: "only",
          resultTimeout: 8e3
        })).catch((MM => {
          console.error("AD: Nitro failed to create video", MM), aM(!1)
        })), console.log("AD: Requested Nitro video")
      }
      renderBanner(MM) {
        const {
          divId: rM,
          width: iM,
          height: OM
        } = MM, SM = `${rM}-nitro`;
        let jM = document.getElementById(SM);
        null === jM && (jM = document.createElement("div"), jM.id = SM, jM.className = "NitroBanner", jM.style.setProperty("--nitro-slot-width", `${iM}px`), jM.style.setProperty("--nitro-slot-height", `${OM}px`), document.getElementById(rM).appendChild(jM));
        const aM = [
          [String(iM), String(OM)]
        ];
        Promise.resolve(window.nitroAds.createAd(SM, {
          sizes: aM
        })).catch((MM => {
          console.error(`AD: Nitro failed to create banner ${SM}:`, MM)
        })), console.log(`AD: Requested Nitro banner ${SM}`)
      }
      displayConsentUI() {
        var MM, rM;
        null === (MM = (rM = window).__cmp) || void 0 === MM || MM.call(rM, "showModal")
      }
      addPrivacyLinks(MM) {
        var rM, iM, OM, SM;
        const jM = document.createElement("span");
        jM.dataset.ccpaLink = "1";
        const aM = document.createElement("div");
        aM.id = "ncmp-consent-link", MM.replaceChildren(jM, aM), null === (rM = (iM = window).__uspapi) || void 0 === rM || rM.call(iM, "addLink", 1), null === (OM = (SM = window).__cmp) || void 0 === OM || OM.call(SM, "addConsentLink")
      }
      newPageSession() {
        var MM, rM;
        null === (MM = (rM = window.nitroAds).navigate) || void 0 === MM || MM.call(rM)
      }
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);