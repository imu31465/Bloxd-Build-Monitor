export const id = 152;
export const ids = [152];
export const modules = {
  7950: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => mk
    });
    var Dk = ik(2849);
    const fk = [1, 8, 9],
      Sk = 5,
      bk = 200,
      rk = 150;

    function Pk(kk, ek) {
      let ik = 0;
      kk("addEventListener", 2, ((kk, bk) => {
        if (!bk) return void console.warn("TCF CMP couldn't report a consent event, so our consent defaults stand");
        const rk = function(kk) {
          const ek = "useractioncomplete" === kk.eventStatus || "tcloaded" === kk.eventStatus && !!kk.tcString;
          return kk.gdprApplies && ek ? fk.every((ek => !0 === kk.purpose.consents[ek])) : null
        }(kk);
        if (null === rk) return;
        const Pk = ++ik;
        if (!rk) return void(0, Dk.B)(!1);
        if ("nitro" === ek) return void(0, Dk.B)(!0);
        const mk = window.__tcfapi;
        mk ? mk("getNonIABVendorConsents", 2, ((kk, ek) => {
          var fk;
          Pk === ik && (0, Dk.B)(ek && !0 === (null === (fk = kk.nonIabVendorConsents) || void 0 === fk ? void 0 : fk[Sk]))
        })) : console.warn("TCF CMP reported a choice but its __tcfapi is gone, so our consent defaults stand")
      }))
    }

    function mk(kk) {
      if (window.__tcfapi) return void Pk(window.__tcfapi, kk);
      let ek = 0;
      const ik = window.setInterval((() => {
        ek++;
        const Dk = window.__tcfapi;
        Dk ? (window.clearInterval(ik), Pk(Dk, kk)) : ek >= rk && window.clearInterval(ik)
      }), bk)
    }
  },
  7966: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      NitroSdkAdaptor: () => Pk
    });
    var Dk = ik(1298),
      fk = ik(1163),
      Sk = ik(7950),
      bk = ik(2849);
    const rk = "NitroOutstreamVideo";
    class Pk extends Dk.e {
      constructor() {
        super(), this.name = "nitro", this.bannerAutoRefresh = "alwaysOn", this.videoInFlight = !1
      }
      static async setup() {
        return window.nitroAds = window.nitroAds || {
          createAd: function() {
            for (var kk = arguments.length, ek = new Array(kk), ik = 0; ik < kk; ik++) ek[ik] = arguments[ik];
            return new Promise((kk => {
              window.nitroAds.queue.push(["createAd", ek, kk])
            }))
          },
          addUserToken: function() {
            for (var kk = arguments.length, ek = new Array(kk), ik = 0; ik < kk; ik++) ek[ik] = arguments[ik];
            window.nitroAds.queue.push(["addUserToken", ek])
          },
          queue: []
        }, document.addEventListener("nitroAds.rendered", (kk => {
          var ek, ik, Dk;
          const fk = document.getElementById(null !== (ek = null === (ik = kk.detail) || void 0 === ik || null === (Dk = ik.adInfo) || void 0 === Dk ? void 0 : Dk.adUnitCode) && void 0 !== ek ? ek : "");
          null !== fk && void 0 !== fk && fk.classList.contains("NitroBanner") && fk.classList.toggle("NitroBannerUnfilled", "blank" === kk.detail.type)
        })), (0, bk.A)(), await (0, fk.d)("https://s.nitropay.com/ads-2842.js", {
          "data-cfasync": "false"
        }), (0, Sk.e)("nitro"), new Pk
      }
      playVideoAd(kk, ek) {
        this.showVideoAd(kk, kk)
      }
      playRewarded(kk, ek) {
        this.showVideoAd(kk, ek)
      }
      showVideoAd(kk, ek) {
        if (this.videoInFlight) return console.log("AD: Nitro video already playing"), void ek();
        const ik = document.getElementById("GenericVideoWrapper"),
          Dk = document.getElementById("GenericVideoInner");
        if (null === ik || null === Dk) return void ek();
        this.videoInFlight = !0;
        let fk = !1;
        const Sk = document.createElement("div");
        Sk.id = rk, Sk.className = "NitroVideoPlacement";
        const bk = bk => {
          if (!fk) {
            fk = !0, clearTimeout(lk), clearInterval(wk), document.removeEventListener("nitroAds.adResult", Mk), document.removeEventListener("nitroAds.rendered", Kk), document.removeEventListener("nitroAds.complete", xk);
            try {
              nk.remove(), Sk.querySelectorAll("video").forEach((kk => {
                kk.pause()
              })), Sk.remove(), Dk.classList.remove("NitroVideo"), ik.style.display = "none"
            } catch (rk) {
              console.error("AD: Error tearing down Nitro video", rk)
            } finally {
              this.videoInFlight = !1, window.adCompleteSoResume(), bk ? kk() : ek()
            }
          }
        };
        let Pk = !1;
        const mk = (kk, ek) => {
            if (!Pk) {
              if (!kk) return console.log(`AD: Nitro video not filled: ${ek}`), void bk(!1);
              Pk = !0, clearTimeout(lk), lk = setTimeout((() => {
                console.log("AD: Nitro video never completed"), bk(!1)
              }), 12e4)
            }
          },
          Mk = kk => {
            var ek;
            (null === (ek = kk.detail) || void 0 === ek ? void 0 : ek.id) === rk && mk("filled" === kk.detail.status, kk.detail.status)
          },
          Kk = kk => {
            var ek, ik;
            (null === (ek = kk.detail) || void 0 === ek || null === (ik = ek.adInfo) || void 0 === ik ? void 0 : ik.adUnitCode) === rk && mk("blank" !== kk.detail.type, kk.detail.type)
          },
          xk = kk => {
            var ek;
            (null === (ek = kk.detail) || void 0 === ek ? void 0 : ek.adUnitCode) === rk && bk(!0)
          },
          nk = document.createElement("button");
        nk.className = "NitroVideoSkip", nk.disabled = !0, nk.addEventListener("click", (() => {
          console.log("AD: Nitro video skipped"), bk(!0)
        }));
        let Uk = Math.ceil(15);
        const Hk = () => {
          if (Uk <= 0) return clearInterval(wk), nk.textContent = "Skip Ad", void(nk.disabled = !1);
          nk.textContent = `Skip ad in ${Uk}s`, Uk--
        };
        Hk();
        const wk = setInterval(Hk, 1e3);
        let lk = setTimeout((() => {
          console.log("AD: Nitro video got no result"), bk(!1)
        }), 1e4);
        document.addEventListener("nitroAds.adResult", Mk), document.addEventListener("nitroAds.rendered", Kk), document.addEventListener("nitroAds.complete", xk), Dk.appendChild(Sk), Dk.classList.add("NitroVideo"), ik.appendChild(nk), ik.style.display = "flex", window.adStartSoPause(null, {
          preventMovement: !0
        }), Promise.resolve(window.nitroAds.createAd(rk, {
          format: "display",
          outstream: "only",
          resultTimeout: 8e3
        })).catch((kk => {
          console.error("AD: Nitro failed to create video", kk), bk(!1)
        })), console.log("AD: Requested Nitro video")
      }
      renderBanner(kk) {
        const {
          divId: ek,
          width: ik,
          height: Dk
        } = kk, fk = `${ek}-nitro`;
        let Sk = document.getElementById(fk);
        null === Sk && (Sk = document.createElement("div"), Sk.id = fk, Sk.className = "NitroBanner", Sk.style.setProperty("--nitro-slot-width", `${ik}px`), Sk.style.setProperty("--nitro-slot-height", `${Dk}px`), document.getElementById(ek).appendChild(Sk));
        const bk = [
          [String(ik), String(Dk)]
        ];
        Promise.resolve(window.nitroAds.createAd(fk, {
          sizes: bk
        })).catch((kk => {
          console.error(`AD: Nitro failed to create banner ${fk}:`, kk)
        })), console.log(`AD: Requested Nitro banner ${fk}`)
      }
      displayConsentUI() {
        var kk, ek;
        null === (kk = (ek = window).__cmp) || void 0 === kk || kk.call(ek, "showModal")
      }
      addPrivacyLinks(kk) {
        var ek, ik, Dk, fk;
        const Sk = document.createElement("span");
        Sk.dataset.ccpaLink = "1";
        const bk = document.createElement("div");
        bk.id = "ncmp-consent-link", kk.replaceChildren(Sk, bk), null === (ek = (ik = window).__uspapi) || void 0 === ek || ek.call(ik, "addLink", 1), null === (Dk = (fk = window).__cmp) || void 0 === Dk || Dk.call(fk, "addConsentLink")
      }
      newPageSession() {
        var kk, ek;
        null === (kk = (ek = window.nitroAds).navigate) || void 0 === kk || kk.call(ek)
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);