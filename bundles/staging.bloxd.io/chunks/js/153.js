export const id = 153;
export const ids = [153];
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
  8306: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      NitroSdkAdaptor: () => qS
    });
    var tS = gS(1397),
      bS = gS(1267),
      XS = gS(8295),
      xS = gS(3067);
    const NS = "NitroOutstreamVideo";
    class qS extends tS.c {
      constructor() {
        super(), this.name = "nitro", this.bannerAutoRefresh = "alwaysOn", this.videoInFlight = !1
      }
      static async setup() {
        return window.nitroAds = window.nitroAds || {
          createAd: function() {
            for (var SS = arguments.length, HS = new Array(SS), gS = 0; gS < SS; gS++) HS[gS] = arguments[gS];
            return new Promise((SS => {
              window.nitroAds.queue.push(["createAd", HS, SS])
            }))
          },
          addUserToken: function() {
            for (var SS = arguments.length, HS = new Array(SS), gS = 0; gS < SS; gS++) HS[gS] = arguments[gS];
            window.nitroAds.queue.push(["addUserToken", HS])
          },
          queue: []
        }, document.addEventListener("nitroAds.rendered", (SS => {
          var HS, gS, tS;
          const bS = document.getElementById(null !== (HS = null === (gS = SS.detail) || void 0 === gS || null === (tS = gS.adInfo) || void 0 === tS ? void 0 : tS.adUnitCode) && void 0 !== HS ? HS : "");
          null !== bS && void 0 !== bS && bS.classList.contains("NitroBanner") && bS.classList.toggle("NitroBannerUnfilled", "blank" === SS.detail.type)
        })), (0, xS.w)(), await (0, bS.c)("https://s.nitropay.com/ads-2842.js", {
          "data-cfasync": "false"
        }), (0, XS.b)("nitro"), new qS
      }
      playVideoAd(SS, HS) {
        this.showVideoAd(SS, SS)
      }
      playRewarded(SS, HS) {
        this.showVideoAd(SS, HS)
      }
      showVideoAd(SS, HS) {
        if (this.videoInFlight) return console.log("AD: Nitro video already playing"), void HS();
        const gS = document.getElementById("GenericVideoWrapper"),
          tS = document.getElementById("GenericVideoInner");
        if (null === gS || null === tS) return void HS();
        this.videoInFlight = !0;
        let bS = !1;
        const XS = document.createElement("div");
        XS.id = NS, XS.className = "NitroVideoPlacement";
        const xS = xS => {
          if (!bS) {
            bS = !0, clearTimeout(CS), clearInterval(GS), document.removeEventListener("nitroAds.adResult", IS), document.removeEventListener("nitroAds.rendered", fS), document.removeEventListener("nitroAds.complete", kS);
            try {
              aS.remove(), XS.querySelectorAll("video").forEach((SS => {
                SS.pause()
              })), XS.remove(), tS.classList.remove("NitroVideo"), gS.style.display = "none"
            } catch (NS) {
              console.error("AD: Error tearing down Nitro video", NS)
            } finally {
              this.videoInFlight = !1, window.adCompleteSoResume(), xS ? SS() : HS()
            }
          }
        };
        let qS = !1;
        const uS = (SS, HS) => {
            if (!qS) {
              if (!SS) return console.log(`AD: Nitro video not filled: ${HS}`), void xS(!1);
              qS = !0, clearTimeout(CS), CS = setTimeout((() => {
                console.log("AD: Nitro video never completed"), xS(!1)
              }), 12e4)
            }
          },
          IS = SS => {
            var HS;
            (null === (HS = SS.detail) || void 0 === HS ? void 0 : HS.id) === NS && uS("filled" === SS.detail.status, SS.detail.status)
          },
          fS = SS => {
            var HS, gS;
            (null === (HS = SS.detail) || void 0 === HS || null === (gS = HS.adInfo) || void 0 === gS ? void 0 : gS.adUnitCode) === NS && uS("blank" !== SS.detail.type, SS.detail.type)
          },
          kS = SS => {
            var HS;
            (null === (HS = SS.detail) || void 0 === HS ? void 0 : HS.adUnitCode) === NS && xS(!0)
          },
          aS = document.createElement("button");
        aS.className = "NitroVideoSkip", aS.disabled = !0, aS.addEventListener("click", (() => {
          console.log("AD: Nitro video skipped"), xS(!0)
        }));
        let KS = Math.ceil(15);
        const jS = () => {
          if (KS <= 0) return clearInterval(GS), aS.textContent = "Skip Ad", void(aS.disabled = !1);
          aS.textContent = `Skip ad in ${KS}s`, KS--
        };
        jS();
        const GS = setInterval(jS, 1e3);
        let CS = setTimeout((() => {
          console.log("AD: Nitro video got no result"), xS(!1)
        }), 1e4);
        document.addEventListener("nitroAds.adResult", IS), document.addEventListener("nitroAds.rendered", fS), document.addEventListener("nitroAds.complete", kS), tS.appendChild(XS), tS.classList.add("NitroVideo"), gS.appendChild(aS), gS.style.display = "flex", window.adStartSoPause(null, {
          preventMovement: !0
        }), Promise.resolve(window.nitroAds.createAd(NS, {
          format: "display",
          outstream: "only",
          resultTimeout: 8e3
        })).catch((SS => {
          console.error("AD: Nitro failed to create video", SS), xS(!1)
        })), console.log("AD: Requested Nitro video")
      }
      renderBanner(SS) {
        const {
          divId: HS,
          width: gS,
          height: tS
        } = SS, bS = `${HS}-nitro`;
        let XS = document.getElementById(bS);
        null === XS && (XS = document.createElement("div"), XS.id = bS, XS.className = "NitroBanner", XS.style.setProperty("--nitro-slot-width", `${gS}px`), XS.style.setProperty("--nitro-slot-height", `${tS}px`), document.getElementById(HS).appendChild(XS));
        const xS = [
          [String(gS), String(tS)]
        ];
        Promise.resolve(window.nitroAds.createAd(bS, {
          sizes: xS
        })).catch((SS => {
          console.error(`AD: Nitro failed to create banner ${bS}:`, SS)
        })), console.log(`AD: Requested Nitro banner ${bS}`)
      }
      displayConsentUI() {
        var SS, HS;
        null === (SS = (HS = window).__cmp) || void 0 === SS || SS.call(HS, "showModal")
      }
      addPrivacyLinks(SS) {
        var HS, gS, tS, bS;
        const XS = document.createElement("span");
        XS.dataset.ccpaLink = "1";
        const xS = document.createElement("div");
        xS.id = "ncmp-consent-link", SS.replaceChildren(XS, xS), null === (HS = (gS = window).__uspapi) || void 0 === HS || HS.call(gS, "addLink", 1), null === (tS = (bS = window).__cmp) || void 0 === tS || tS.call(bS, "addConsentLink")
      }
      newPageSession() {
        var SS, HS;
        null === (SS = (HS = window.nitroAds).navigate) || void 0 === SS || SS.call(HS)
      }
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);