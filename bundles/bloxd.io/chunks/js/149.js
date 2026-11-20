export const id = 149;
export const ids = [149];
export const modules = {
  7796: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      NitroSdkAdaptor: () => PU
    });
    var tU = gU(1312),
      pU = gU(1174);
    const EU = "NitroOutstreamVideo";
    class PU extends tU.b {
      constructor() {
        super(), this.name = "nitro", this.bannerAutoRefresh = "alwaysOn", this.videoInFlight = !1
      }
      static async setup() {
        return window.nitroAds = window.nitroAds || {
          createAd: function() {
            for (var UU = arguments.length, RU = new Array(UU), gU = 0; gU < UU; gU++) RU[gU] = arguments[gU];
            return new Promise((UU => {
              window.nitroAds.queue.push(["createAd", RU, UU])
            }))
          },
          addUserToken: function() {
            for (var UU = arguments.length, RU = new Array(UU), gU = 0; gU < UU; gU++) RU[gU] = arguments[gU];
            window.nitroAds.queue.push(["addUserToken", RU])
          },
          queue: []
        }, document.addEventListener("nitroAds.rendered", (UU => {
          var RU, gU, tU;
          const pU = document.getElementById(null !== (RU = null === (gU = UU.detail) || void 0 === gU || null === (tU = gU.adInfo) || void 0 === tU ? void 0 : tU.adUnitCode) && void 0 !== RU ? RU : "");
          null !== pU && void 0 !== pU && pU.classList.contains("NitroBanner") && pU.classList.toggle("NitroBannerUnfilled", "blank" === UU.detail.type)
        })), await (0, pU.e)("https://s.nitropay.com/ads-2842.js", {
          "data-cfasync": "false"
        }), new PU
      }
      playVideoAd(UU, RU) {
        this.showVideoAd(UU, UU)
      }
      playRewarded(UU, RU) {
        this.showVideoAd(UU, RU)
      }
      showVideoAd(UU, RU) {
        if (this.videoInFlight) return console.log("AD: Nitro video already playing"), void RU();
        const gU = document.getElementById("GenericVideoWrapper"),
          tU = document.getElementById("GenericVideoInner");
        if (null === gU || null === tU) return void RU();
        this.videoInFlight = !0;
        let pU = !1;
        const PU = document.createElement("div");
        PU.id = EU, PU.className = "NitroVideoPlacement";
        const TU = EU => {
          if (!pU) {
            pU = !0, clearTimeout(eU), clearInterval(QU), document.removeEventListener("nitroAds.adResult", cU), document.removeEventListener("nitroAds.rendered", GU), document.removeEventListener("nitroAds.complete", jU);
            try {
              uU.remove(), PU.querySelectorAll("video").forEach((UU => {
                UU.pause()
              })), PU.remove(), tU.classList.remove("NitroVideo"), gU.style.display = "none"
            } catch (TU) {
              console.error("AD: Error tearing down Nitro video", TU)
            } finally {
              this.videoInFlight = !1, window.adCompleteSoResume(), EU ? UU() : RU()
            }
          }
        };
        let qU = !1;
        const KU = (UU, RU) => {
            if (!qU) {
              if (!UU) return console.log(`AD: Nitro video not filled: ${RU}`), void TU(!1);
              qU = !0, clearTimeout(eU), eU = setTimeout((() => {
                console.log("AD: Nitro video never completed"), TU(!1)
              }), 12e4)
            }
          },
          cU = UU => {
            var RU;
            (null === (RU = UU.detail) || void 0 === RU ? void 0 : RU.id) === EU && KU("filled" === UU.detail.status, UU.detail.status)
          },
          GU = UU => {
            var RU, gU;
            (null === (RU = UU.detail) || void 0 === RU || null === (gU = RU.adInfo) || void 0 === gU ? void 0 : gU.adUnitCode) === EU && KU("blank" !== UU.detail.type, UU.detail.type)
          },
          jU = UU => {
            var RU;
            (null === (RU = UU.detail) || void 0 === RU ? void 0 : RU.adUnitCode) === EU && TU(!0)
          },
          uU = document.createElement("button");
        uU.className = "NitroVideoSkip", uU.disabled = !0, uU.addEventListener("click", (() => {
          console.log("AD: Nitro video skipped"), TU(!0)
        }));
        let CU = Math.ceil(15);
        const hU = () => {
          if (CU <= 0) return clearInterval(QU), uU.textContent = "Skip Ad", void(uU.disabled = !1);
          uU.textContent = `Skip ad in ${CU}s`, CU--
        };
        hU();
        const QU = setInterval(hU, 1e3);
        let eU = setTimeout((() => {
          console.log("AD: Nitro video got no result"), TU(!1)
        }), 1e4);
        document.addEventListener("nitroAds.adResult", cU), document.addEventListener("nitroAds.rendered", GU), document.addEventListener("nitroAds.complete", jU), tU.appendChild(PU), tU.classList.add("NitroVideo"), gU.appendChild(uU), gU.style.display = "flex", window.adStartSoPause(null, {
          preventMovement: !0
        }), Promise.resolve(window.nitroAds.createAd(EU, {
          format: "display",
          outstream: "only",
          resultTimeout: 8e3
        })).catch((UU => {
          console.error("AD: Nitro failed to create video", UU), TU(!1)
        })), console.log("AD: Requested Nitro video")
      }
      renderBanner(UU) {
        const {
          divId: RU,
          width: gU,
          height: tU
        } = UU, pU = `${RU}-nitro`;
        let EU = document.getElementById(pU);
        null === EU && (EU = document.createElement("div"), EU.id = pU, EU.className = "NitroBanner", EU.style.setProperty("--nitro-slot-width", `${gU}px`), EU.style.setProperty("--nitro-slot-height", `${tU}px`), document.getElementById(RU).appendChild(EU));
        const PU = [
          [String(gU), String(tU)]
        ];
        Promise.resolve(window.nitroAds.createAd(pU, {
          sizes: PU
        })).catch((UU => {
          console.error(`AD: Nitro failed to create banner ${pU}:`, UU)
        })), console.log(`AD: Requested Nitro banner ${pU}`)
      }
      displayConsentUI() {
        var UU, RU;
        null === (UU = (RU = window).__cmp) || void 0 === UU || UU.call(RU, "showModal")
      }
      addPrivacyLinks(UU) {
        var RU, gU, tU, pU;
        const EU = document.createElement("span");
        EU.dataset.ccpaLink = "1";
        const PU = document.createElement("div");
        PU.id = "ncmp-consent-link", UU.replaceChildren(EU, PU), null === (RU = (gU = window).__uspapi) || void 0 === RU || RU.call(gU, "addLink", 1), null === (tU = (pU = window).__cmp) || void 0 === tU || tU.call(pU, "addConsentLink")
      }
      newPageSession() {
        var UU, RU;
        null === (UU = (RU = window.nitroAds).navigate) || void 0 === UU || UU.call(RU)
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);