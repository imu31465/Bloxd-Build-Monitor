export const id = 149;
export const ids = [149];
export const modules = {
  8172: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      NitroSdkAdaptor: () => OT
    });
    var lT = cT(1321),
      MT = cT(1190);
    const KT = "NitroOutstreamVideo";
    class OT extends lT.b {
      constructor() {
        super(), this.name = "nitro", this.bannerAutoRefresh = "alwaysOn", this.videoInFlight = !1
      }
      static async setup() {
        return window.nitroAds = window.nitroAds || {
          createAd: function() {
            for (var TT = arguments.length, kT = new Array(TT), cT = 0; cT < TT; cT++) kT[cT] = arguments[cT];
            return new Promise((TT => {
              window.nitroAds.queue.push(["createAd", kT, TT])
            }))
          },
          addUserToken: function() {
            for (var TT = arguments.length, kT = new Array(TT), cT = 0; cT < TT; cT++) kT[cT] = arguments[cT];
            window.nitroAds.queue.push(["addUserToken", kT])
          },
          queue: []
        }, document.addEventListener("nitroAds.rendered", (TT => {
          var kT, cT, lT;
          const MT = document.getElementById(null !== (kT = null === (cT = TT.detail) || void 0 === cT || null === (lT = cT.adInfo) || void 0 === lT ? void 0 : lT.adUnitCode) && void 0 !== kT ? kT : "");
          null !== MT && void 0 !== MT && MT.classList.contains("NitroBanner") && MT.classList.toggle("NitroBannerUnfilled", "blank" === TT.detail.type)
        })), await (0, MT.e)("https://s.nitropay.com/ads-2842.js", {
          "data-cfasync": "false"
        }), new OT
      }
      playVideoAd(TT, kT) {
        this.showVideoAd(TT, TT)
      }
      playRewarded(TT, kT) {
        this.showVideoAd(TT, kT)
      }
      showVideoAd(TT, kT) {
        if (this.videoInFlight) return console.log("AD: Nitro video already playing"), void kT();
        const cT = document.getElementById("GenericVideoWrapper"),
          lT = document.getElementById("GenericVideoInner");
        if (null === cT || null === lT) return void kT();
        this.videoInFlight = !0;
        let MT = !1;
        const OT = document.createElement("div");
        OT.id = KT, OT.className = "NitroVideoPlacement";
        const yT = KT => {
          if (!MT) {
            MT = !0, clearTimeout(NT), clearInterval(hT), document.removeEventListener("nitroAds.adResult", IT), document.removeEventListener("nitroAds.rendered", AT), document.removeEventListener("nitroAds.complete", CT);
            try {
              jT.remove(), OT.querySelectorAll("video").forEach((TT => {
                TT.pause()
              })), OT.remove(), lT.classList.remove("NitroVideo"), cT.style.display = "none"
            } catch (yT) {
              console.error("AD: Error tearing down Nitro video", yT)
            } finally {
              this.videoInFlight = !1, window.adCompleteSoResume(), KT ? TT() : kT()
            }
          }
        };
        let fT = !1;
        const xT = (TT, kT) => {
            if (!fT) {
              if (!TT) return console.log(`AD: Nitro video not filled: ${kT}`), void yT(!1);
              fT = !0, clearTimeout(NT), NT = setTimeout((() => {
                console.log("AD: Nitro video never completed"), yT(!1)
              }), 12e4)
            }
          },
          IT = TT => {
            var kT;
            (null === (kT = TT.detail) || void 0 === kT ? void 0 : kT.id) === KT && xT("filled" === TT.detail.status, TT.detail.status)
          },
          AT = TT => {
            var kT, cT;
            (null === (kT = TT.detail) || void 0 === kT || null === (cT = kT.adInfo) || void 0 === cT ? void 0 : cT.adUnitCode) === KT && xT("blank" !== TT.detail.type, TT.detail.type)
          },
          CT = TT => {
            var kT;
            (null === (kT = TT.detail) || void 0 === kT ? void 0 : kT.adUnitCode) === KT && yT(!0)
          },
          jT = document.createElement("button");
        jT.className = "NitroVideoSkip", jT.disabled = !0, jT.addEventListener("click", (() => {
          console.log("AD: Nitro video skipped"), yT(!0)
        }));
        let vT = Math.ceil(15);
        const tT = () => {
          if (vT <= 0) return clearInterval(hT), jT.textContent = "Skip Ad", void(jT.disabled = !1);
          jT.textContent = `Skip ad in ${vT}s`, vT--
        };
        tT();
        const hT = setInterval(tT, 1e3);
        let NT = setTimeout((() => {
          console.log("AD: Nitro video got no result"), yT(!1)
        }), 1e4);
        document.addEventListener("nitroAds.adResult", IT), document.addEventListener("nitroAds.rendered", AT), document.addEventListener("nitroAds.complete", CT), lT.appendChild(OT), lT.classList.add("NitroVideo"), cT.appendChild(jT), cT.style.display = "flex", window.adStartSoPause(null, {
          preventMovement: !0
        }), Promise.resolve(window.nitroAds.createAd(KT, {
          format: "display",
          outstream: "only",
          resultTimeout: 8e3
        })).catch((TT => {
          console.error("AD: Nitro failed to create video", TT), yT(!1)
        })), console.log("AD: Requested Nitro video")
      }
      renderBanner(TT) {
        const {
          divId: kT,
          width: cT,
          height: lT
        } = TT, MT = `${kT}-nitro`;
        let KT = document.getElementById(MT);
        null === KT && (KT = document.createElement("div"), KT.id = MT, KT.className = "NitroBanner", KT.style.setProperty("--nitro-slot-width", `${cT}px`), KT.style.setProperty("--nitro-slot-height", `${lT}px`), document.getElementById(kT).appendChild(KT));
        const OT = [
          [String(cT), String(lT)]
        ];
        Promise.resolve(window.nitroAds.createAd(MT, {
          sizes: OT
        })).catch((TT => {
          console.error(`AD: Nitro failed to create banner ${MT}:`, TT)
        })), console.log(`AD: Requested Nitro banner ${MT}`)
      }
      displayConsentUI() {
        var TT, kT;
        null === (TT = (kT = window).__cmp) || void 0 === TT || TT.call(kT, "showModal")
      }
      addPrivacyLinks(TT) {
        var kT, cT, lT, MT;
        const KT = document.createElement("span");
        KT.dataset.ccpaLink = "1";
        const OT = document.createElement("div");
        OT.id = "ncmp-consent-link", TT.replaceChildren(KT, OT), null === (kT = (cT = window).__uspapi) || void 0 === kT || kT.call(cT, "addLink", 1), null === (lT = (MT = window).__cmp) || void 0 === lT || lT.call(MT, "addConsentLink")
      }
      newPageSession() {
        var TT, kT;
        null === (TT = (kT = window.nitroAds).navigate) || void 0 === TT || TT.call(kT)
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);