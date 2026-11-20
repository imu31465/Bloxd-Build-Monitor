export const id = 149;
export const ids = [149];
export const modules = {
  7656: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      NitroSdkAdaptor: () => Oz
    });
    var Fz = sz(1291),
      Wz = sz(1167);
    const Xz = "NitroOutstreamVideo";
    class Oz extends Fz.d {
      constructor() {
        super(), this.name = "nitro", this.bannerAutoRefresh = "alwaysOn", this.videoInFlight = !1
      }
      static async setup() {
        return window.nitroAds = window.nitroAds || {
          createAd: function() {
            for (var zz = arguments.length, tz = new Array(zz), sz = 0; sz < zz; sz++) tz[sz] = arguments[sz];
            return new Promise((zz => {
              window.nitroAds.queue.push(["createAd", tz, zz])
            }))
          },
          addUserToken: function() {
            for (var zz = arguments.length, tz = new Array(zz), sz = 0; sz < zz; sz++) tz[sz] = arguments[sz];
            window.nitroAds.queue.push(["addUserToken", tz])
          },
          queue: []
        }, document.addEventListener("nitroAds.rendered", (zz => {
          var tz, sz, Fz;
          const Wz = document.getElementById(null !== (tz = null === (sz = zz.detail) || void 0 === sz || null === (Fz = sz.adInfo) || void 0 === Fz ? void 0 : Fz.adUnitCode) && void 0 !== tz ? tz : "");
          null !== Wz && void 0 !== Wz && Wz.classList.contains("NitroBanner") && Wz.classList.toggle("NitroBannerUnfilled", "blank" === zz.detail.type)
        })), await (0, Wz.c)("https://s.nitropay.com/ads-2842.js", {
          "data-cfasync": "false"
        }), new Oz
      }
      playVideoAd(zz, tz) {
        this.showVideoAd(zz, zz)
      }
      playRewarded(zz, tz) {
        this.showVideoAd(zz, tz)
      }
      showVideoAd(zz, tz) {
        if (this.videoInFlight) return console.log("AD: Nitro video already playing"), void tz();
        const sz = document.getElementById("GenericVideoWrapper"),
          Fz = document.getElementById("GenericVideoInner");
        if (null === sz || null === Fz) return void tz();
        this.videoInFlight = !0;
        let Wz = !1;
        const Oz = document.createElement("div");
        Oz.id = Xz, Oz.className = "NitroVideoPlacement";
        const oz = Xz => {
          if (!Wz) {
            Wz = !0, clearTimeout(Hz), clearInterval(gz), document.removeEventListener("nitroAds.adResult", Kz), document.removeEventListener("nitroAds.rendered", uz), document.removeEventListener("nitroAds.complete", Nz);
            try {
              bz.remove(), Oz.querySelectorAll("video").forEach((zz => {
                zz.pause()
              })), Oz.remove(), Fz.classList.remove("NitroVideo"), sz.style.display = "none"
            } catch (oz) {
              console.error("AD: Error tearing down Nitro video", oz)
            } finally {
              this.videoInFlight = !1, window.adCompleteSoResume(), Xz ? zz() : tz()
            }
          }
        };
        let vz = !1;
        const Uz = (zz, tz) => {
            if (!vz) {
              if (!zz) return console.log(`AD: Nitro video not filled: ${tz}`), void oz(!1);
              vz = !0, clearTimeout(Hz), Hz = setTimeout((() => {
                console.log("AD: Nitro video never completed"), oz(!1)
              }), 12e4)
            }
          },
          Kz = zz => {
            var tz;
            (null === (tz = zz.detail) || void 0 === tz ? void 0 : tz.id) === Xz && Uz("filled" === zz.detail.status, zz.detail.status)
          },
          uz = zz => {
            var tz, sz;
            (null === (tz = zz.detail) || void 0 === tz || null === (sz = tz.adInfo) || void 0 === sz ? void 0 : sz.adUnitCode) === Xz && Uz("blank" !== zz.detail.type, zz.detail.type)
          },
          Nz = zz => {
            var tz;
            (null === (tz = zz.detail) || void 0 === tz ? void 0 : tz.adUnitCode) === Xz && oz(!0)
          },
          bz = document.createElement("button");
        bz.className = "NitroVideoSkip", bz.disabled = !0, bz.addEventListener("click", (() => {
          console.log("AD: Nitro video skipped"), oz(!0)
        }));
        let wz = Math.ceil(15);
        const Dz = () => {
          if (wz <= 0) return clearInterval(gz), bz.textContent = "Skip Ad", void(bz.disabled = !1);
          bz.textContent = `Skip ad in ${wz}s`, wz--
        };
        Dz();
        const gz = setInterval(Dz, 1e3);
        let Hz = setTimeout((() => {
          console.log("AD: Nitro video got no result"), oz(!1)
        }), 1e4);
        document.addEventListener("nitroAds.adResult", Kz), document.addEventListener("nitroAds.rendered", uz), document.addEventListener("nitroAds.complete", Nz), Fz.appendChild(Oz), Fz.classList.add("NitroVideo"), sz.appendChild(bz), sz.style.display = "flex", window.adStartSoPause(null, {
          preventMovement: !0
        }), Promise.resolve(window.nitroAds.createAd(Xz, {
          format: "display",
          outstream: "only",
          resultTimeout: 8e3
        })).catch((zz => {
          console.error("AD: Nitro failed to create video", zz), oz(!1)
        })), console.log("AD: Requested Nitro video")
      }
      renderBanner(zz) {
        const {
          divId: tz,
          width: sz,
          height: Fz
        } = zz, Wz = `${tz}-nitro`;
        let Xz = document.getElementById(Wz);
        null === Xz && (Xz = document.createElement("div"), Xz.id = Wz, Xz.className = "NitroBanner", Xz.style.setProperty("--nitro-slot-width", `${sz}px`), Xz.style.setProperty("--nitro-slot-height", `${Fz}px`), document.getElementById(tz).appendChild(Xz));
        const Oz = [
          [String(sz), String(Fz)]
        ];
        Promise.resolve(window.nitroAds.createAd(Wz, {
          sizes: Oz
        })).catch((zz => {
          console.error(`AD: Nitro failed to create banner ${Wz}:`, zz)
        })), console.log(`AD: Requested Nitro banner ${Wz}`)
      }
      displayConsentUI() {
        var zz, tz;
        null === (zz = (tz = window).__cmp) || void 0 === zz || zz.call(tz, "showModal")
      }
      addPrivacyLinks(zz) {
        var tz, sz, Fz, Wz;
        const Xz = document.createElement("span");
        Xz.dataset.ccpaLink = "1";
        const Oz = document.createElement("div");
        Oz.id = "ncmp-consent-link", zz.replaceChildren(Xz, Oz), null === (tz = (sz = window).__uspapi) || void 0 === tz || tz.call(sz, "addLink", 1), null === (Fz = (Wz = window).__cmp) || void 0 === Fz || Fz.call(Wz, "addConsentLink")
      }
      newPageSession() {
        var zz, tz;
        null === (zz = (tz = window.nitroAds).navigate) || void 0 === zz || zz.call(tz)
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);