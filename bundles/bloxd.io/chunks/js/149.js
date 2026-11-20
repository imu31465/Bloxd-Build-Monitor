export const id = 149;
export const ids = [149];
export const modules = {
  7839: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      NitroSdkAdaptor: () => gv
    });
    var hv = Pv(1299),
      Sv = Pv(1164);
    const ev = "NitroOutstreamVideo";
    class gv extends hv.c {
      constructor() {
        super(), this.name = "nitro", this.bannerAutoRefresh = "alwaysOn", this.videoInFlight = !1
      }
      static async setup() {
        return window.nitroAds = window.nitroAds || {
          createAd: function() {
            for (var vv = arguments.length, zv = new Array(vv), Pv = 0; Pv < vv; Pv++) zv[Pv] = arguments[Pv];
            return new Promise((vv => {
              window.nitroAds.queue.push(["createAd", zv, vv])
            }))
          },
          addUserToken: function() {
            for (var vv = arguments.length, zv = new Array(vv), Pv = 0; Pv < vv; Pv++) zv[Pv] = arguments[Pv];
            window.nitroAds.queue.push(["addUserToken", zv])
          },
          queue: []
        }, document.addEventListener("nitroAds.rendered", (vv => {
          var zv, Pv, hv;
          const Sv = document.getElementById(null !== (zv = null === (Pv = vv.detail) || void 0 === Pv || null === (hv = Pv.adInfo) || void 0 === hv ? void 0 : hv.adUnitCode) && void 0 !== zv ? zv : "");
          null !== Sv && void 0 !== Sv && Sv.classList.contains("NitroBanner") && Sv.classList.toggle("NitroBannerUnfilled", "blank" === vv.detail.type)
        })), await (0, Sv.d)("https://s.nitropay.com/ads-2842.js", {
          "data-cfasync": "false"
        }), new gv
      }
      playVideoAd(vv, zv) {
        this.showVideoAd(vv, vv)
      }
      playRewarded(vv, zv) {
        this.showVideoAd(vv, zv)
      }
      showVideoAd(vv, zv) {
        if (this.videoInFlight) return console.log("AD: Nitro video already playing"), void zv();
        const Pv = document.getElementById("GenericVideoWrapper"),
          hv = document.getElementById("GenericVideoInner");
        if (null === Pv || null === hv) return void zv();
        this.videoInFlight = !0;
        let Sv = !1;
        const gv = document.createElement("div");
        gv.id = ev, gv.className = "NitroVideoPlacement";
        const pv = ev => {
          if (!Sv) {
            Sv = !0, clearTimeout(iv), clearInterval(Cv), document.removeEventListener("nitroAds.adResult", lv), document.removeEventListener("nitroAds.rendered", Tv), document.removeEventListener("nitroAds.complete", Wv);
            try {
              wv.remove(), gv.querySelectorAll("video").forEach((vv => {
                vv.pause()
              })), gv.remove(), hv.classList.remove("NitroVideo"), Pv.style.display = "none"
            } catch (pv) {
              console.error("AD: Error tearing down Nitro video", pv)
            } finally {
              this.videoInFlight = !1, window.adCompleteSoResume(), ev ? vv() : zv()
            }
          }
        };
        let dv = !1;
        const Nv = (vv, zv) => {
            if (!dv) {
              if (!vv) return console.log(`AD: Nitro video not filled: ${zv}`), void pv(!1);
              dv = !0, clearTimeout(iv), iv = setTimeout((() => {
                console.log("AD: Nitro video never completed"), pv(!1)
              }), 12e4)
            }
          },
          lv = vv => {
            var zv;
            (null === (zv = vv.detail) || void 0 === zv ? void 0 : zv.id) === ev && Nv("filled" === vv.detail.status, vv.detail.status)
          },
          Tv = vv => {
            var zv, Pv;
            (null === (zv = vv.detail) || void 0 === zv || null === (Pv = zv.adInfo) || void 0 === Pv ? void 0 : Pv.adUnitCode) === ev && Nv("blank" !== vv.detail.type, vv.detail.type)
          },
          Wv = vv => {
            var zv;
            (null === (zv = vv.detail) || void 0 === zv ? void 0 : zv.adUnitCode) === ev && pv(!0)
          },
          wv = document.createElement("button");
        wv.className = "NitroVideoSkip", wv.disabled = !0, wv.addEventListener("click", (() => {
          console.log("AD: Nitro video skipped"), pv(!0)
        }));
        let av = Math.ceil(15);
        const sv = () => {
          if (av <= 0) return clearInterval(Cv), wv.textContent = "Skip Ad", void(wv.disabled = !1);
          wv.textContent = `Skip ad in ${av}s`, av--
        };
        sv();
        const Cv = setInterval(sv, 1e3);
        let iv = setTimeout((() => {
          console.log("AD: Nitro video got no result"), pv(!1)
        }), 1e4);
        document.addEventListener("nitroAds.adResult", lv), document.addEventListener("nitroAds.rendered", Tv), document.addEventListener("nitroAds.complete", Wv), hv.appendChild(gv), hv.classList.add("NitroVideo"), Pv.appendChild(wv), Pv.style.display = "flex", window.adStartSoPause(null, {
          preventMovement: !0
        }), Promise.resolve(window.nitroAds.createAd(ev, {
          format: "display",
          outstream: "only",
          resultTimeout: 8e3
        })).catch((vv => {
          console.error("AD: Nitro failed to create video", vv), pv(!1)
        })), console.log("AD: Requested Nitro video")
      }
      renderBanner(vv) {
        const {
          divId: zv,
          width: Pv,
          height: hv
        } = vv, Sv = `${zv}-nitro`;
        let ev = document.getElementById(Sv);
        null === ev && (ev = document.createElement("div"), ev.id = Sv, ev.className = "NitroBanner", ev.style.setProperty("--nitro-slot-width", `${Pv}px`), ev.style.setProperty("--nitro-slot-height", `${hv}px`), document.getElementById(zv).appendChild(ev));
        const gv = [
          [String(Pv), String(hv)]
        ];
        Promise.resolve(window.nitroAds.createAd(Sv, {
          sizes: gv
        })).catch((vv => {
          console.error(`AD: Nitro failed to create banner ${Sv}:`, vv)
        })), console.log(`AD: Requested Nitro banner ${Sv}`)
      }
      displayConsentUI() {
        var vv, zv;
        null === (vv = (zv = window).__cmp) || void 0 === vv || vv.call(zv, "showModal")
      }
      addPrivacyLinks(vv) {
        var zv, Pv, hv, Sv;
        const ev = document.createElement("span");
        ev.dataset.ccpaLink = "1";
        const gv = document.createElement("div");
        gv.id = "ncmp-consent-link", vv.replaceChildren(ev, gv), null === (zv = (Pv = window).__uspapi) || void 0 === zv || zv.call(Pv, "addLink", 1), null === (hv = (Sv = window).__cmp) || void 0 === hv || hv.call(Sv, "addConsentLink")
      }
      newPageSession() {
        var vv, zv;
        null === (vv = (zv = window.nitroAds).navigate) || void 0 === vv || vv.call(zv)
      }
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);