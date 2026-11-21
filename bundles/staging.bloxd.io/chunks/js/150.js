export const id = 150;
export const ids = [150];
export const modules = {
  8005: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      NitroSdkAdaptor: () => Pd
    });
    var pd = kd(1341),
      Nd = kd(1195);
    const Wd = "NitroOutstreamVideo";
    class Pd extends pd.d {
      constructor() {
        super(), this.name = "nitro", this.bannerAutoRefresh = "alwaysOn", this.videoInFlight = !1
      }
      static async setup() {
        return window.nitroAds = window.nitroAds || {
          createAd: function() {
            for (var dd = arguments.length, Jd = new Array(dd), kd = 0; kd < dd; kd++) Jd[kd] = arguments[kd];
            return new Promise((dd => {
              window.nitroAds.queue.push(["createAd", Jd, dd])
            }))
          },
          addUserToken: function() {
            for (var dd = arguments.length, Jd = new Array(dd), kd = 0; kd < dd; kd++) Jd[kd] = arguments[kd];
            window.nitroAds.queue.push(["addUserToken", Jd])
          },
          queue: []
        }, document.addEventListener("nitroAds.rendered", (dd => {
          var Jd, kd, pd;
          const Nd = document.getElementById(null !== (Jd = null === (kd = dd.detail) || void 0 === kd || null === (pd = kd.adInfo) || void 0 === pd ? void 0 : pd.adUnitCode) && void 0 !== Jd ? Jd : "");
          null !== Nd && void 0 !== Nd && Nd.classList.contains("NitroBanner") && Nd.classList.toggle("NitroBannerUnfilled", "blank" === dd.detail.type)
        })), await (0, Nd.c)("https://s.nitropay.com/ads-2842.js", {
          "data-cfasync": "false"
        }), new Pd
      }
      playVideoAd(dd, Jd) {
        this.showVideoAd(dd, dd)
      }
      playRewarded(dd, Jd) {
        this.showVideoAd(dd, Jd)
      }
      showVideoAd(dd, Jd) {
        if (this.videoInFlight) return console.log("AD: Nitro video already playing"), void Jd();
        const kd = document.getElementById("GenericVideoWrapper"),
          pd = document.getElementById("GenericVideoInner");
        if (null === kd || null === pd) return void Jd();
        this.videoInFlight = !0;
        let Nd = !1;
        const Pd = document.createElement("div");
        Pd.id = Wd, Pd.className = "NitroVideoPlacement";
        const Zd = Wd => {
          if (!Nd) {
            Nd = !0, clearTimeout(Rd), clearInterval(ed), document.removeEventListener("nitroAds.adResult", Kd), document.removeEventListener("nitroAds.rendered", od), document.removeEventListener("nitroAds.complete", ld);
            try {
              Qd.remove(), Pd.querySelectorAll("video").forEach((dd => {
                dd.pause()
              })), Pd.remove(), pd.classList.remove("NitroVideo"), kd.style.display = "none"
            } catch (Zd) {
              console.error("AD: Error tearing down Nitro video", Zd)
            } finally {
              this.videoInFlight = !1, window.adCompleteSoResume(), Wd ? dd() : Jd()
            }
          }
        };
        let gd = !1;
        const Cd = (dd, Jd) => {
            if (!gd) {
              if (!dd) return console.log(`AD: Nitro video not filled: ${Jd}`), void Zd(!1);
              gd = !0, clearTimeout(Rd), Rd = setTimeout((() => {
                console.log("AD: Nitro video never completed"), Zd(!1)
              }), 12e4)
            }
          },
          Kd = dd => {
            var Jd;
            (null === (Jd = dd.detail) || void 0 === Jd ? void 0 : Jd.id) === Wd && Cd("filled" === dd.detail.status, dd.detail.status)
          },
          od = dd => {
            var Jd, kd;
            (null === (Jd = dd.detail) || void 0 === Jd || null === (kd = Jd.adInfo) || void 0 === kd ? void 0 : kd.adUnitCode) === Wd && Cd("blank" !== dd.detail.type, dd.detail.type)
          },
          ld = dd => {
            var Jd;
            (null === (Jd = dd.detail) || void 0 === Jd ? void 0 : Jd.adUnitCode) === Wd && Zd(!0)
          },
          Qd = document.createElement("button");
        Qd.className = "NitroVideoSkip", Qd.disabled = !0, Qd.addEventListener("click", (() => {
          console.log("AD: Nitro video skipped"), Zd(!0)
        }));
        let Ld = Math.ceil(15);
        const Od = () => {
          if (Ld <= 0) return clearInterval(ed), Qd.textContent = "Skip Ad", void(Qd.disabled = !1);
          Qd.textContent = `Skip ad in ${Ld}s`, Ld--
        };
        Od();
        const ed = setInterval(Od, 1e3);
        let Rd = setTimeout((() => {
          console.log("AD: Nitro video got no result"), Zd(!1)
        }), 1e4);
        document.addEventListener("nitroAds.adResult", Kd), document.addEventListener("nitroAds.rendered", od), document.addEventListener("nitroAds.complete", ld), pd.appendChild(Pd), pd.classList.add("NitroVideo"), kd.appendChild(Qd), kd.style.display = "flex", window.adStartSoPause(null, {
          preventMovement: !0
        }), Promise.resolve(window.nitroAds.createAd(Wd, {
          format: "display",
          outstream: "only",
          resultTimeout: 8e3
        })).catch((dd => {
          console.error("AD: Nitro failed to create video", dd), Zd(!1)
        })), console.log("AD: Requested Nitro video")
      }
      renderBanner(dd) {
        const {
          divId: Jd,
          width: kd,
          height: pd
        } = dd, Nd = `${Jd}-nitro`;
        let Wd = document.getElementById(Nd);
        null === Wd && (Wd = document.createElement("div"), Wd.id = Nd, Wd.className = "NitroBanner", Wd.style.setProperty("--nitro-slot-width", `${kd}px`), Wd.style.setProperty("--nitro-slot-height", `${pd}px`), document.getElementById(Jd).appendChild(Wd));
        const Pd = [
          [String(kd), String(pd)]
        ];
        Promise.resolve(window.nitroAds.createAd(Nd, {
          sizes: Pd
        })).catch((dd => {
          console.error(`AD: Nitro failed to create banner ${Nd}:`, dd)
        })), console.log(`AD: Requested Nitro banner ${Nd}`)
      }
      displayConsentUI() {
        var dd, Jd;
        null === (dd = (Jd = window).__cmp) || void 0 === dd || dd.call(Jd, "showModal")
      }
      addPrivacyLinks(dd) {
        var Jd, kd, pd, Nd;
        const Wd = document.createElement("span");
        Wd.dataset.ccpaLink = "1";
        const Pd = document.createElement("div");
        Pd.id = "ncmp-consent-link", dd.replaceChildren(Wd, Pd), null === (Jd = (kd = window).__uspapi) || void 0 === Jd || Jd.call(kd, "addLink", 1), null === (pd = (Nd = window).__cmp) || void 0 === pd || pd.call(Nd, "addConsentLink")
      }
      newPageSession() {
        var dd, Jd;
        null === (dd = (Jd = window.nitroAds).navigate) || void 0 === dd || dd.call(Jd)
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);