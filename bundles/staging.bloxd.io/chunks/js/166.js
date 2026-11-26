export const id = 166;
export const ids = [166];
export const modules = {
  7301: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => nV
    });
    var JV = xV(3245);
    const YV = [1, 8, 9],
      UV = 5,
      yV = 200,
      pV = 150;

    function QV(VV, eV) {
      let xV = 0;
      VV("addEventListener", 2, ((VV, yV) => {
        if (!yV) return void console.warn("TCF CMP couldn't report a consent event, so our consent defaults stand");
        const pV = function(VV) {
          const eV = "useractioncomplete" === VV.eventStatus || "tcloaded" === VV.eventStatus && !!VV.tcString;
          return VV.gdprApplies && eV ? YV.every((eV => !0 === VV.purpose.consents[eV])) : null
        }(VV);
        if (null === pV) return;
        const QV = ++xV;
        if (!pV) return void(0, JV.updateAnalyticsConsent)(!1);
        if ("nitro" === eV) return void(0, JV.updateAnalyticsConsent)(!0);
        const nV = window.__tcfapi;
        nV ? nV("getNonIABVendorConsents", 2, ((VV, eV) => {
          var YV;
          QV === xV && (0, JV.updateAnalyticsConsent)(eV && !0 === (null === (YV = VV.nonIabVendorConsents) || void 0 === YV ? void 0 : YV[UV]))
        })) : console.warn("TCF CMP reported a choice but its __tcfapi is gone, so our consent defaults stand")
      }))
    }

    function nV(VV) {
      if (window.__tcfapi) return void QV(window.__tcfapi, VV);
      let eV = 0;
      const xV = window.setInterval((() => {
        eV++;
        const JV = window.__tcfapi;
        JV ? (window.clearInterval(xV), QV(JV, VV)) : eV >= pV && window.clearInterval(xV)
      }), yV)
    }
  },
  7311: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      NitroSdkAdaptor: () => QV
    });
    var JV = xV(1389),
      YV = xV(1213),
      UV = xV(7301),
      yV = xV(3245);
    const pV = "NitroOutstreamVideo";
    class QV extends JV.b {
      constructor() {
        super(), this.name = "nitro", this.bannerAutoRefresh = "alwaysOn", this.videoInFlight = !1
      }
      static async setup() {
        return window.nitroAds = window.nitroAds || {
          createAd: function() {
            for (var VV = arguments.length, eV = new Array(VV), xV = 0; xV < VV; xV++) eV[xV] = arguments[xV];
            return new Promise((VV => {
              window.nitroAds.queue.push(["createAd", eV, VV])
            }))
          },
          addUserToken: function() {
            for (var VV = arguments.length, eV = new Array(VV), xV = 0; xV < VV; xV++) eV[xV] = arguments[xV];
            window.nitroAds.queue.push(["addUserToken", eV])
          },
          queue: []
        }, document.addEventListener("nitroAds.rendered", (VV => {
          var eV, xV, JV;
          const YV = document.getElementById(null !== (eV = null === (xV = VV.detail) || void 0 === xV || null === (JV = xV.adInfo) || void 0 === JV ? void 0 : JV.adUnitCode) && void 0 !== eV ? eV : "");
          null !== YV && void 0 !== YV && YV.classList.contains("NitroBanner") && YV.classList.toggle("NitroBannerUnfilled", "blank" === VV.detail.type)
        })), (0, yV.setUpGtag)(), await (0, YV.d)("https://s.nitropay.com/ads-2842.js", {
          "data-cfasync": "false"
        }), (0, UV.e)("nitro"), new QV
      }
      playVideoAd(VV, eV) {
        this.showVideoAd(VV, VV)
      }
      playRewarded(VV, eV) {
        this.showVideoAd(VV, eV)
      }
      showVideoAd(VV, eV) {
        if (this.videoInFlight) return console.log("AD: Nitro video already playing"), void eV();
        const xV = document.getElementById("GenericVideoWrapper"),
          JV = document.getElementById("GenericVideoInner");
        if (null === xV || null === JV) return void eV();
        this.videoInFlight = !0;
        let YV = !1;
        const UV = document.createElement("div");
        UV.id = pV, UV.className = "NitroVideoPlacement";
        const yV = yV => {
          if (!YV) {
            YV = !0, clearTimeout(BV), clearInterval(EV), document.removeEventListener("nitroAds.adResult", wV), document.removeEventListener("nitroAds.rendered", ZV), document.removeEventListener("nitroAds.complete", vV);
            try {
              rV.remove(), UV.querySelectorAll("video").forEach((VV => {
                VV.pause()
              })), UV.remove(), JV.classList.remove("NitroVideo"), xV.style.display = "none"
            } catch (pV) {
              console.error("AD: Error tearing down Nitro video", pV)
            } finally {
              this.videoInFlight = !1, window.adCompleteSoResume(), yV ? VV() : eV()
            }
          }
        };
        let QV = !1;
        const nV = (VV, eV) => {
            if (!QV) {
              if (!VV) return console.log(`AD: Nitro video not filled: ${eV}`), void yV(!1);
              QV = !0, clearTimeout(BV), BV = setTimeout((() => {
                console.log("AD: Nitro video never completed"), yV(!1)
              }), 12e4)
            }
          },
          wV = VV => {
            var eV;
            (null === (eV = VV.detail) || void 0 === eV ? void 0 : eV.id) === pV && nV("filled" === VV.detail.status, VV.detail.status)
          },
          ZV = VV => {
            var eV, xV;
            (null === (eV = VV.detail) || void 0 === eV || null === (xV = eV.adInfo) || void 0 === xV ? void 0 : xV.adUnitCode) === pV && nV("blank" !== VV.detail.type, VV.detail.type)
          },
          vV = VV => {
            var eV;
            (null === (eV = VV.detail) || void 0 === eV ? void 0 : eV.adUnitCode) === pV && yV(!0)
          },
          rV = document.createElement("button");
        rV.className = "NitroVideoSkip", rV.disabled = !0, rV.addEventListener("click", (() => {
          console.log("AD: Nitro video skipped"), yV(!0)
        }));
        let kV = Math.ceil(15);
        const bV = () => {
          if (kV <= 0) return clearInterval(EV), rV.textContent = "Skip Ad", void(rV.disabled = !1);
          rV.textContent = `Skip ad in ${kV}s`, kV--
        };
        bV();
        const EV = setInterval(bV, 1e3);
        let BV = setTimeout((() => {
          console.log("AD: Nitro video got no result"), yV(!1)
        }), 1e4);
        document.addEventListener("nitroAds.adResult", wV), document.addEventListener("nitroAds.rendered", ZV), document.addEventListener("nitroAds.complete", vV), JV.appendChild(UV), JV.classList.add("NitroVideo"), xV.appendChild(rV), xV.style.display = "flex", window.adStartSoPause(null, {
          preventMovement: !0
        }), Promise.resolve(window.nitroAds.createAd(pV, {
          format: "display",
          outstream: "only",
          resultTimeout: 8e3
        })).catch((VV => {
          console.error("AD: Nitro failed to create video", VV), yV(!1)
        })), console.log("AD: Requested Nitro video")
      }
      renderBanner(VV) {
        const {
          divId: eV,
          width: xV,
          height: JV
        } = VV, YV = `${eV}-nitro`;
        let UV = document.getElementById(YV);
        null === UV && (UV = document.createElement("div"), UV.id = YV, UV.className = "NitroBanner", UV.style.setProperty("--nitro-slot-width", `${xV}px`), UV.style.setProperty("--nitro-slot-height", `${JV}px`), document.getElementById(eV).appendChild(UV));
        const yV = [
          [String(xV), String(JV)]
        ];
        Promise.resolve(window.nitroAds.createAd(YV, {
          sizes: yV
        })).catch((VV => {
          console.error(`AD: Nitro failed to create banner ${YV}:`, VV)
        })), console.log(`AD: Requested Nitro banner ${YV}`)
      }
      displayConsentUI() {
        var VV, eV;
        null === (VV = (eV = window).__cmp) || void 0 === VV || VV.call(eV, "showModal")
      }
      addPrivacyLinks(VV) {
        var eV, xV, JV, YV;
        const UV = document.createElement("span");
        UV.dataset.ccpaLink = "1";
        const yV = document.createElement("div");
        yV.id = "ncmp-consent-link", VV.replaceChildren(UV, yV), null === (eV = (xV = window).__uspapi) || void 0 === eV || eV.call(xV, "addLink", 1), null === (JV = (YV = window).__cmp) || void 0 === JV || JV.call(YV, "addConsentLink")
      }
      newPageSession() {
        var VV, eV;
        null === (VV = (eV = window.nitroAds).navigate) || void 0 === VV || VV.call(eV)
      }
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);