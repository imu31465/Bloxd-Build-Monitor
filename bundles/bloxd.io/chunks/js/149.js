export const id = 149;
export const ids = [149];
export const modules = {
  7801: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      NitroSdkAdaptor: () => Xk
    });
    var Rk = Bk(1262),
      tk = Bk(1139);
    const ak = "NitroOutstreamVideo";
    class Xk extends Rk.d {
      constructor() {
        super(), this.name = "nitro", this.bannerAutoRefresh = "alwaysOn", this.videoInFlight = !1
      }
      static async setup() {
        return window.nitroAds = window.nitroAds || {
          createAd: function() {
            for (var kk = arguments.length, Fk = new Array(kk), Bk = 0; Bk < kk; Bk++) Fk[Bk] = arguments[Bk];
            return new Promise((kk => {
              window.nitroAds.queue.push(["createAd", Fk, kk])
            }))
          },
          addUserToken: function() {
            for (var kk = arguments.length, Fk = new Array(kk), Bk = 0; Bk < kk; Bk++) Fk[Bk] = arguments[Bk];
            window.nitroAds.queue.push(["addUserToken", Fk])
          },
          queue: []
        }, document.addEventListener("nitroAds.rendered", (kk => {
          var Fk, Bk, Rk;
          const tk = document.getElementById(null !== (Fk = null === (Bk = kk.detail) || void 0 === Bk || null === (Rk = Bk.adInfo) || void 0 === Rk ? void 0 : Rk.adUnitCode) && void 0 !== Fk ? Fk : "");
          null !== tk && void 0 !== tk && tk.classList.contains("NitroBanner") && tk.classList.toggle("NitroBannerUnfilled", "blank" === kk.detail.type)
        })), await (0, tk.b)("https://s.nitropay.com/ads-2842.js", {
          "data-cfasync": "false"
        }), new Xk
      }
      playVideoAd(kk, Fk) {
        this.showVideoAd(kk, kk)
      }
      playRewarded(kk, Fk) {
        this.showVideoAd(kk, Fk)
      }
      showVideoAd(kk, Fk) {
        if (this.videoInFlight) return console.log("AD: Nitro video already playing"), void Fk();
        const Bk = document.getElementById("GenericVideoWrapper"),
          Rk = document.getElementById("GenericVideoInner");
        if (null === Bk || null === Rk) return void Fk();
        this.videoInFlight = !0;
        let tk = !1;
        const Xk = document.createElement("div");
        Xk.id = ak, Xk.className = "NitroVideoPlacement";
        const bk = ak => {
          if (!tk) {
            tk = !0, clearTimeout(mk), clearInterval(fk), document.removeEventListener("nitroAds.adResult", sk), document.removeEventListener("nitroAds.rendered", Vk), document.removeEventListener("nitroAds.complete", Jk);
            try {
              Ak.remove(), Xk.querySelectorAll("video").forEach((kk => {
                kk.pause()
              })), Xk.remove(), Rk.classList.remove("NitroVideo"), Bk.style.display = "none"
            } catch (bk) {
              console.error("AD: Error tearing down Nitro video", bk)
            } finally {
              this.videoInFlight = !1, window.adCompleteSoResume(), ak ? kk() : Fk()
            }
          }
        };
        let wk = !1;
        const dk = (kk, Fk) => {
            if (!wk) {
              if (!kk) return console.log(`AD: Nitro video not filled: ${Fk}`), void bk(!1);
              wk = !0, clearTimeout(mk), mk = setTimeout((() => {
                console.log("AD: Nitro video never completed"), bk(!1)
              }), 12e4)
            }
          },
          sk = kk => {
            var Fk;
            (null === (Fk = kk.detail) || void 0 === Fk ? void 0 : Fk.id) === ak && dk("filled" === kk.detail.status, kk.detail.status)
          },
          Vk = kk => {
            var Fk, Bk;
            (null === (Fk = kk.detail) || void 0 === Fk || null === (Bk = Fk.adInfo) || void 0 === Bk ? void 0 : Bk.adUnitCode) === ak && dk("blank" !== kk.detail.type, kk.detail.type)
          },
          Jk = kk => {
            var Fk;
            (null === (Fk = kk.detail) || void 0 === Fk ? void 0 : Fk.adUnitCode) === ak && bk(!0)
          },
          Ak = document.createElement("button");
        Ak.className = "NitroVideoSkip", Ak.disabled = !0, Ak.addEventListener("click", (() => {
          console.log("AD: Nitro video skipped"), bk(!0)
        }));
        let ek = Math.ceil(15);
        const yk = () => {
          if (ek <= 0) return clearInterval(fk), Ak.textContent = "Skip Ad", void(Ak.disabled = !1);
          Ak.textContent = `Skip ad in ${ek}s`, ek--
        };
        yk();
        const fk = setInterval(yk, 1e3);
        let mk = setTimeout((() => {
          console.log("AD: Nitro video got no result"), bk(!1)
        }), 1e4);
        document.addEventListener("nitroAds.adResult", sk), document.addEventListener("nitroAds.rendered", Vk), document.addEventListener("nitroAds.complete", Jk), Rk.appendChild(Xk), Rk.classList.add("NitroVideo"), Bk.appendChild(Ak), Bk.style.display = "flex", window.adStartSoPause(null, {
          preventMovement: !0
        }), Promise.resolve(window.nitroAds.createAd(ak, {
          format: "display",
          outstream: "only",
          resultTimeout: 8e3
        })).catch((kk => {
          console.error("AD: Nitro failed to create video", kk), bk(!1)
        })), console.log("AD: Requested Nitro video")
      }
      renderBanner(kk) {
        const {
          divId: Fk,
          width: Bk,
          height: Rk
        } = kk, tk = `${Fk}-nitro`;
        let ak = document.getElementById(tk);
        null === ak && (ak = document.createElement("div"), ak.id = tk, ak.className = "NitroBanner", ak.style.setProperty("--nitro-slot-width", `${Bk}px`), ak.style.setProperty("--nitro-slot-height", `${Rk}px`), document.getElementById(Fk).appendChild(ak));
        const Xk = [
          [String(Bk), String(Rk)]
        ];
        Promise.resolve(window.nitroAds.createAd(tk, {
          sizes: Xk
        })).catch((kk => {
          console.error(`AD: Nitro failed to create banner ${tk}:`, kk)
        })), console.log(`AD: Requested Nitro banner ${tk}`)
      }
      displayConsentUI() {
        var kk, Fk;
        null === (kk = (Fk = window).__cmp) || void 0 === kk || kk.call(Fk, "showModal")
      }
      addPrivacyLinks(kk) {
        var Fk, Bk, Rk, tk;
        const ak = document.createElement("span");
        ak.dataset.ccpaLink = "1";
        const Xk = document.createElement("div");
        Xk.id = "ncmp-consent-link", kk.replaceChildren(ak, Xk), null === (Fk = (Bk = window).__uspapi) || void 0 === Fk || Fk.call(Bk, "addLink", 1), null === (Rk = (tk = window).__cmp) || void 0 === Rk || Rk.call(tk, "addConsentLink")
      }
      newPageSession() {
        var kk, Fk;
        null === (kk = (Fk = window.nitroAds).navigate) || void 0 === kk || kk.call(Fk)
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);