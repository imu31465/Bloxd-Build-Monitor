export const id = 153;
export const ids = [153];
export const modules = {
  8116: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => qk
    });
    var Xk = Ik(2837);
    const Tk = [1, 8, 9],
      ik = 5,
      yk = 200,
      lk = 150;

    function ak(kk, Fk) {
      let Ik = 0;
      kk("addEventListener", 2, ((kk, yk) => {
        if (!yk) return void console.warn("TCF CMP couldn't report a consent event, so our consent defaults stand");
        const lk = function(kk) {
          const Fk = "useractioncomplete" === kk.eventStatus || "tcloaded" === kk.eventStatus && !!kk.tcString;
          return kk.gdprApplies && Fk ? Tk.every((Fk => !0 === kk.purpose.consents[Fk])) : null
        }(kk);
        if (null === lk) return;
        const ak = ++Ik;
        if (!lk) return void(0, Xk.F)(!1);
        if ("nitro" === Fk) return void(0, Xk.F)(!0);
        const qk = window.__tcfapi;
        qk ? qk("getNonIABVendorConsents", 2, ((kk, Fk) => {
          var Tk;
          ak === Ik && (0, Xk.F)(Fk && !0 === (null === (Tk = kk.nonIabVendorConsents) || void 0 === Tk ? void 0 : Tk[ik]))
        })) : console.warn("TCF CMP reported a choice but its __tcfapi is gone, so our consent defaults stand")
      }))
    }

    function qk(kk) {
      if (window.__tcfapi) return void ak(window.__tcfapi, kk);
      let Fk = 0;
      const Ik = window.setInterval((() => {
        Fk++;
        const Xk = window.__tcfapi;
        Xk ? (window.clearInterval(Ik), ak(Xk, kk)) : Fk >= lk && window.clearInterval(Ik)
      }), yk)
    }
  },
  8126: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      NitroSdkAdaptor: () => ak
    });
    var Xk = Ik(1295),
      Tk = Ik(1173),
      ik = Ik(8116),
      yk = Ik(2837);
    const lk = "NitroOutstreamVideo";
    class ak extends Xk.d {
      constructor() {
        super(), this.name = "nitro", this.bannerAutoRefresh = "alwaysOn", this.videoInFlight = !1
      }
      static async setup() {
        return window.nitroAds = window.nitroAds || {
          createAd: function() {
            for (var kk = arguments.length, Fk = new Array(kk), Ik = 0; Ik < kk; Ik++) Fk[Ik] = arguments[Ik];
            return new Promise((kk => {
              window.nitroAds.queue.push(["createAd", Fk, kk])
            }))
          },
          addUserToken: function() {
            for (var kk = arguments.length, Fk = new Array(kk), Ik = 0; Ik < kk; Ik++) Fk[Ik] = arguments[Ik];
            window.nitroAds.queue.push(["addUserToken", Fk])
          },
          queue: []
        }, document.addEventListener("nitroAds.rendered", (kk => {
          var Fk, Ik, Xk;
          const Tk = document.getElementById(null !== (Fk = null === (Ik = kk.detail) || void 0 === Ik || null === (Xk = Ik.adInfo) || void 0 === Xk ? void 0 : Xk.adUnitCode) && void 0 !== Fk ? Fk : "");
          null !== Tk && void 0 !== Tk && Tk.classList.contains("NitroBanner") && Tk.classList.toggle("NitroBannerUnfilled", "blank" === kk.detail.type)
        })), (0, yk.E)(), await (0, Tk.d)("https://s.nitropay.com/ads-2842.js", {
          "data-cfasync": "false"
        }), (0, ik.e)("nitro"), new ak
      }
      playVideoAd(kk, Fk) {
        this.showVideoAd(kk, kk)
      }
      playRewarded(kk, Fk) {
        this.showVideoAd(kk, Fk)
      }
      showVideoAd(kk, Fk) {
        if (this.videoInFlight) return console.log("AD: Nitro video already playing"), void Fk();
        const Ik = document.getElementById("GenericVideoWrapper"),
          Xk = document.getElementById("GenericVideoInner");
        if (null === Ik || null === Xk) return void Fk();
        this.videoInFlight = !0;
        let Tk = !1;
        const ik = document.createElement("div");
        ik.id = lk, ik.className = "NitroVideoPlacement";
        const yk = yk => {
          if (!Tk) {
            Tk = !0, clearTimeout(Jk), clearInterval(Hk), document.removeEventListener("nitroAds.adResult", Lk), document.removeEventListener("nitroAds.rendered", tk), document.removeEventListener("nitroAds.complete", Zk);
            try {
              jk.remove(), ik.querySelectorAll("video").forEach((kk => {
                kk.pause()
              })), ik.remove(), Xk.classList.remove("NitroVideo"), Ik.style.display = "none"
            } catch (lk) {
              console.error("AD: Error tearing down Nitro video", lk)
            } finally {
              this.videoInFlight = !1, window.adCompleteSoResume(), yk ? kk() : Fk()
            }
          }
        };
        let ak = !1;
        const qk = (kk, Fk) => {
            if (!ak) {
              if (!kk) return console.log(`AD: Nitro video not filled: ${Fk}`), void yk(!1);
              ak = !0, clearTimeout(Jk), Jk = setTimeout((() => {
                console.log("AD: Nitro video never completed"), yk(!1)
              }), 12e4)
            }
          },
          Lk = kk => {
            var Fk;
            (null === (Fk = kk.detail) || void 0 === Fk ? void 0 : Fk.id) === lk && qk("filled" === kk.detail.status, kk.detail.status)
          },
          tk = kk => {
            var Fk, Ik;
            (null === (Fk = kk.detail) || void 0 === Fk || null === (Ik = Fk.adInfo) || void 0 === Ik ? void 0 : Ik.adUnitCode) === lk && qk("blank" !== kk.detail.type, kk.detail.type)
          },
          Zk = kk => {
            var Fk;
            (null === (Fk = kk.detail) || void 0 === Fk ? void 0 : Fk.adUnitCode) === lk && yk(!0)
          },
          jk = document.createElement("button");
        jk.className = "NitroVideoSkip", jk.disabled = !0, jk.addEventListener("click", (() => {
          console.log("AD: Nitro video skipped"), yk(!0)
        }));
        let ek = Math.ceil(15);
        const wk = () => {
          if (ek <= 0) return clearInterval(Hk), jk.textContent = "Skip Ad", void(jk.disabled = !1);
          jk.textContent = `Skip ad in ${ek}s`, ek--
        };
        wk();
        const Hk = setInterval(wk, 1e3);
        let Jk = setTimeout((() => {
          console.log("AD: Nitro video got no result"), yk(!1)
        }), 1e4);
        document.addEventListener("nitroAds.adResult", Lk), document.addEventListener("nitroAds.rendered", tk), document.addEventListener("nitroAds.complete", Zk), Xk.appendChild(ik), Xk.classList.add("NitroVideo"), Ik.appendChild(jk), Ik.style.display = "flex", window.adStartSoPause(null, {
          preventMovement: !0
        }), Promise.resolve(window.nitroAds.createAd(lk, {
          format: "display",
          outstream: "only",
          resultTimeout: 8e3
        })).catch((kk => {
          console.error("AD: Nitro failed to create video", kk), yk(!1)
        })), console.log("AD: Requested Nitro video")
      }
      renderBanner(kk) {
        const {
          divId: Fk,
          width: Ik,
          height: Xk
        } = kk, Tk = `${Fk}-nitro`;
        let ik = document.getElementById(Tk);
        null === ik && (ik = document.createElement("div"), ik.id = Tk, ik.className = "NitroBanner", ik.style.setProperty("--nitro-slot-width", `${Ik}px`), ik.style.setProperty("--nitro-slot-height", `${Xk}px`), document.getElementById(Fk).appendChild(ik));
        const yk = [
          [String(Ik), String(Xk)]
        ];
        Promise.resolve(window.nitroAds.createAd(Tk, {
          sizes: yk
        })).catch((kk => {
          console.error(`AD: Nitro failed to create banner ${Tk}:`, kk)
        })), console.log(`AD: Requested Nitro banner ${Tk}`)
      }
      displayConsentUI() {
        var kk, Fk;
        null === (kk = (Fk = window).__cmp) || void 0 === kk || kk.call(Fk, "showModal")
      }
      addPrivacyLinks(kk) {
        var Fk, Ik, Xk, Tk;
        const ik = document.createElement("span");
        ik.dataset.ccpaLink = "1";
        const yk = document.createElement("div");
        yk.id = "ncmp-consent-link", kk.replaceChildren(ik, yk), null === (Fk = (Ik = window).__uspapi) || void 0 === Fk || Fk.call(Ik, "addLink", 1), null === (Xk = (Tk = window).__cmp) || void 0 === Xk || Xk.call(Tk, "addConsentLink")
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