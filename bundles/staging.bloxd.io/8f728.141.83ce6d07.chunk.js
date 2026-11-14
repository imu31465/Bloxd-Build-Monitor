export const id = 141;
export const ids = [141];
export const modules = {
  7026: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      NitroSdkAdaptor: () => uc
    });
    var Vc = nc(1168),
      Ic = nc(1040);
    const rB = "NitroOutstreamVideo";
    class uc extends Vc.e {
      constructor() {
        super(), this.name = "nitro", this.bannerAutoRefresh = "alwaysOn", this.videoInFlight = !1
      }
      static async setup() {
        return window.nitroAds = window.nitroAds || {
          createAd: function() {
            for (var cB = arguments.length, Bc = new Array(cB), nc = 0; nc < cB; nc++) Bc[nc] = arguments[nc];
            return new Promise((cB => {
              window.nitroAds.queue.push(["createAd", Bc, cB])
            }))
          },
          addUserToken: function() {
            for (var cB = arguments.length, Bc = new Array(cB), nc = 0; nc < cB; nc++) Bc[nc] = arguments[nc];
            window.nitroAds.queue.push(["addUserToken", Bc])
          },
          queue: []
        }, document.addEventListener("nitroAds.rendered", (cB => {
          var Bc, nc, Vc;
          const Ic = document.getElementById(null !== (Bc = null === (nc = cB.detail) || void 0 === nc || null === (Vc = nc.adInfo) || void 0 === Vc ? void 0 : Vc.adUnitCode) && void 0 !== Bc ? Bc : "");
          null !== Ic && void 0 !== Ic && Ic.classList.contains("NitroBanner") && Ic.classList.toggle("NitroBannerUnfilled", "blank" === cB.detail.type)
        })), await (0, Ic.b)("https://s.nitropay.com/ads-2842.js", {
          "data-cfasync": "false"
        }), new uc
      }
      playVideoAd(cB, Bc) {
        this.showVideoAd(cB, cB)
      }
      playRewarded(cB, Bc) {
        this.showVideoAd(cB, Bc)
      }
      showVideoAd(cB, Bc) {
        if (this.videoInFlight) return console.log("AD: Nitro video already playing"), void Bc();
        const nc = document.getElementById("GenericVideoWrapper"),
          Vc = document.getElementById("GenericVideoInner");
        if (null === nc || null === Vc) return void Bc();
        this.videoInFlight = !0;
        let Ic = !1;
        const uc = document.createElement("div");
        uc.id = rB, uc.className = "NitroVideoPlacement";
        const sc = rB => {
          if (!Ic) {
            Ic = !0, clearTimeout(Sc), clearInterval(tB), document.removeEventListener("nitroAds.adResult", qB), document.removeEventListener("nitroAds.rendered", Oc), document.removeEventListener("nitroAds.complete", Tc);
            try {
              fc.remove(), uc.querySelectorAll("video").forEach((cB => {
                cB.pause()
              })), uc.remove(), Vc.classList.remove("NitroVideo"), nc.style.display = "none"
            } catch (sc) {
              console.error("AD: Error tearing down Nitro video", sc)
            } finally {
              this.videoInFlight = !1, window.adCompleteSoResume(), rB ? cB() : Bc()
            }
          }
        };
        let Mc = !1;
        const Pc = (cB, Bc) => {
            if (!Mc) {
              if (!cB) return console.log(`AD: Nitro video not filled: ${Bc}`), void sc(!1);
              Mc = !0, clearTimeout(Sc), Sc = setTimeout((() => {
                console.log("AD: Nitro video never completed"), sc(!1)
              }), 12e4)
            }
          },
          qB = cB => {
            var Bc;
            (null === (Bc = cB.detail) || void 0 === Bc ? void 0 : Bc.id) === rB && Pc("filled" === cB.detail.status, cB.detail.status)
          },
          Oc = cB => {
            var Bc, nc;
            (null === (Bc = cB.detail) || void 0 === Bc || null === (nc = Bc.adInfo) || void 0 === nc ? void 0 : nc.adUnitCode) === rB && Pc("blank" !== cB.detail.type, cB.detail.type)
          },
          Tc = cB => {
            var Bc;
            (null === (Bc = cB.detail) || void 0 === Bc ? void 0 : Bc.adUnitCode) === rB && sc(!0)
          },
          fc = document.createElement("button");
        fc.className = "NitroVideoSkip", fc.disabled = !0, fc.addEventListener("click", (() => {
          console.log("AD: Nitro video skipped"), sc(!0)
        }));
        let mB = Math.ceil(15);
        const ec = () => {
          if (mB <= 0) return clearInterval(tB), fc.textContent = "Skip Ad", void(fc.disabled = !1);
          fc.textContent = `Skip ad in ${mB}s`, mB--
        };
        ec();
        const tB = setInterval(ec, 1e3);
        let Sc = setTimeout((() => {
          console.log("AD: Nitro video got no result"), sc(!1)
        }), 1e4);
        document.addEventListener("nitroAds.adResult", qB), document.addEventListener("nitroAds.rendered", Oc), document.addEventListener("nitroAds.complete", Tc), Vc.appendChild(uc), Vc.classList.add("NitroVideo"), nc.appendChild(fc), nc.style.display = "flex", window.adStartSoPause(null, {
          preventMovement: !0
        }), Promise.resolve(window.nitroAds.createAd(rB, {
          format: "display",
          outstream: "only",
          resultTimeout: 8e3
        })).catch((cB => {
          console.error("AD: Nitro failed to create video", cB), sc(!1)
        })), console.log("AD: Requested Nitro video")
      }
      renderBanner(cB) {
        const {
          divId: Bc,
          width: nc,
          height: Vc
        } = cB, Ic = `${Bc}-nitro`;
        let rB = document.getElementById(Ic);
        null === rB && (rB = document.createElement("div"), rB.id = Ic, rB.className = "NitroBanner", rB.style.setProperty("--nitro-slot-width", `${nc}px`), rB.style.setProperty("--nitro-slot-height", `${Vc}px`), document.getElementById(Bc).appendChild(rB));
        const uc = [
          [String(nc), String(Vc)]
        ];
        Promise.resolve(window.nitroAds.createAd(Ic, {
          sizes: uc
        })).catch((cB => {
          console.error(`AD: Nitro failed to create banner ${Ic}:`, cB)
        })), console.log(`AD: Requested Nitro banner ${Ic}`)
      }
      displayConsentUI() {
        var cB, Bc;
        null === (cB = (Bc = window).__cmp) || void 0 === cB || cB.call(Bc, "showModal")
      }
      addPrivacyLinks(cB) {
        var Bc, nc, Vc, Ic;
        const rB = document.createElement("span");
        rB.dataset.ccpaLink = "1";
        const uc = document.createElement("div");
        uc.id = "ncmp-consent-link", cB.replaceChildren(rB, uc), null === (Bc = (nc = window).__uspapi) || void 0 === Bc || Bc.call(nc, "addLink", 1), null === (Vc = (Ic = window).__cmp) || void 0 === Vc || Vc.call(Ic, "addConsentLink")
      }
      newPageSession() {
        var cB, Bc;
        null === (cB = (Bc = window.nitroAds).navigate) || void 0 === cB || cB.call(Bc)
      }
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);