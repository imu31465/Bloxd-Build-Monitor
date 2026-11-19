export const id = 150;
export const ids = [150];
export const modules = {
  7588: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      NitroSdkAdaptor: () => WT
    });
    var iT = IT(1286),
      zT = IT(1160);
    const kT = "NitroOutstreamVideo";
    class WT extends iT.d {
      constructor() {
        super(), this.name = "nitro", this.bannerAutoRefresh = "alwaysOn", this.videoInFlight = !1
      }
      static async setup() {
        return window.nitroAds = window.nitroAds || {
          createAd: function() {
            for (var TT = arguments.length, oT = new Array(TT), IT = 0; IT < TT; IT++) oT[IT] = arguments[IT];
            return new Promise((TT => {
              window.nitroAds.queue.push(["createAd", oT, TT])
            }))
          },
          addUserToken: function() {
            for (var TT = arguments.length, oT = new Array(TT), IT = 0; IT < TT; IT++) oT[IT] = arguments[IT];
            window.nitroAds.queue.push(["addUserToken", oT])
          },
          queue: []
        }, document.addEventListener("nitroAds.rendered", (TT => {
          var oT, IT, iT;
          const zT = document.getElementById(null !== (oT = null === (IT = TT.detail) || void 0 === IT || null === (iT = IT.adInfo) || void 0 === iT ? void 0 : iT.adUnitCode) && void 0 !== oT ? oT : "");
          null !== zT && void 0 !== zT && zT.classList.contains("NitroBanner") && zT.classList.toggle("NitroBannerUnfilled", "blank" === TT.detail.type)
        })), await (0, zT.b)("https://s.nitropay.com/ads-2842.js", {
          "data-cfasync": "false"
        }), new WT
      }
      playVideoAd(TT, oT) {
        this.showVideoAd(TT, TT)
      }
      playRewarded(TT, oT) {
        this.showVideoAd(TT, oT)
      }
      showVideoAd(TT, oT) {
        if (this.videoInFlight) return console.log("AD: Nitro video already playing"), void oT();
        const IT = document.getElementById("GenericVideoWrapper"),
          iT = document.getElementById("GenericVideoInner");
        if (null === IT || null === iT) return void oT();
        this.videoInFlight = !0;
        let zT = !1;
        const WT = document.createElement("div");
        WT.id = kT, WT.className = "NitroVideoPlacement";
        const XT = kT => {
          if (!zT) {
            zT = !0, clearTimeout(rT), clearInterval(MT), document.removeEventListener("nitroAds.adResult", ST), document.removeEventListener("nitroAds.rendered", DT), document.removeEventListener("nitroAds.complete", LT);
            try {
              xT.remove(), WT.querySelectorAll("video").forEach((TT => {
                TT.pause()
              })), WT.remove(), iT.classList.remove("NitroVideo"), IT.style.display = "none"
            } catch (XT) {
              console.error("AD: Error tearing down Nitro video", XT)
            } finally {
              this.videoInFlight = !1, window.adCompleteSoResume(), kT ? TT() : oT()
            }
          }
        };
        let BT = !1;
        const FT = (TT, oT) => {
            if (!BT) {
              if (!TT) return console.log(`AD: Nitro video not filled: ${oT}`), void XT(!1);
              BT = !0, clearTimeout(rT), rT = setTimeout((() => {
                console.log("AD: Nitro video never completed"), XT(!1)
              }), 12e4)
            }
          },
          ST = TT => {
            var oT;
            (null === (oT = TT.detail) || void 0 === oT ? void 0 : oT.id) === kT && FT("filled" === TT.detail.status, TT.detail.status)
          },
          DT = TT => {
            var oT, IT;
            (null === (oT = TT.detail) || void 0 === oT || null === (IT = oT.adInfo) || void 0 === IT ? void 0 : IT.adUnitCode) === kT && FT("blank" !== TT.detail.type, TT.detail.type)
          },
          LT = TT => {
            var oT;
            (null === (oT = TT.detail) || void 0 === oT ? void 0 : oT.adUnitCode) === kT && XT(!0)
          },
          xT = document.createElement("button");
        xT.className = "NitroVideoSkip", xT.disabled = !0, xT.addEventListener("click", (() => {
          console.log("AD: Nitro video skipped"), XT(!0)
        }));
        let cT = Math.ceil(15);
        const KT = () => {
          if (cT <= 0) return clearInterval(MT), xT.textContent = "Skip Ad", void(xT.disabled = !1);
          xT.textContent = `Skip ad in ${cT}s`, cT--
        };
        KT();
        const MT = setInterval(KT, 1e3);
        let rT = setTimeout((() => {
          console.log("AD: Nitro video got no result"), XT(!1)
        }), 1e4);
        document.addEventListener("nitroAds.adResult", ST), document.addEventListener("nitroAds.rendered", DT), document.addEventListener("nitroAds.complete", LT), iT.appendChild(WT), iT.classList.add("NitroVideo"), IT.appendChild(xT), IT.style.display = "flex", window.adStartSoPause(null, {
          preventMovement: !0
        }), Promise.resolve(window.nitroAds.createAd(kT, {
          format: "display",
          outstream: "only",
          resultTimeout: 8e3
        })).catch((TT => {
          console.error("AD: Nitro failed to create video", TT), XT(!1)
        })), console.log("AD: Requested Nitro video")
      }
      renderBanner(TT) {
        const {
          divId: oT,
          width: IT,
          height: iT
        } = TT, zT = `${oT}-nitro`;
        let kT = document.getElementById(zT);
        null === kT && (kT = document.createElement("div"), kT.id = zT, kT.className = "NitroBanner", kT.style.setProperty("--nitro-slot-width", `${IT}px`), kT.style.setProperty("--nitro-slot-height", `${iT}px`), document.getElementById(oT).appendChild(kT));
        const WT = [
          [String(IT), String(iT)]
        ];
        Promise.resolve(window.nitroAds.createAd(zT, {
          sizes: WT
        })).catch((TT => {
          console.error(`AD: Nitro failed to create banner ${zT}:`, TT)
        })), console.log(`AD: Requested Nitro banner ${zT}`)
      }
      displayConsentUI() {
        var TT, oT;
        null === (TT = (oT = window).__cmp) || void 0 === TT || TT.call(oT, "showModal")
      }
      addPrivacyLinks(TT) {
        var oT, IT, iT, zT;
        const kT = document.createElement("span");
        kT.dataset.ccpaLink = "1";
        const WT = document.createElement("div");
        WT.id = "ncmp-consent-link", TT.replaceChildren(kT, WT), null === (oT = (IT = window).__uspapi) || void 0 === oT || oT.call(IT, "addLink", 1), null === (iT = (zT = window).__cmp) || void 0 === iT || iT.call(zT, "addConsentLink")
      }
      newPageSession() {
        var TT, oT;
        null === (TT = (oT = window.nitroAds).navigate) || void 0 === TT || TT.call(oT)
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);