export const id = 149;
export const ids = [149];
export const modules = {
  7825: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      NitroSdkAdaptor: () => lz
    });
    var Ez = bz(1288),
      nz = bz(1171);
    const iz = "NitroOutstreamVideo";
    class lz extends Ez.b {
      constructor() {
        super(), this.name = "nitro", this.bannerAutoRefresh = "alwaysOn", this.videoInFlight = !1
      }
      static async setup() {
        return window.nitroAds = window.nitroAds || {
          createAd: function() {
            for (var zz = arguments.length, uz = new Array(zz), bz = 0; bz < zz; bz++) uz[bz] = arguments[bz];
            return new Promise((zz => {
              window.nitroAds.queue.push(["createAd", uz, zz])
            }))
          },
          addUserToken: function() {
            for (var zz = arguments.length, uz = new Array(zz), bz = 0; bz < zz; bz++) uz[bz] = arguments[bz];
            window.nitroAds.queue.push(["addUserToken", uz])
          },
          queue: []
        }, document.addEventListener("nitroAds.rendered", (zz => {
          var uz, bz, Ez;
          const nz = document.getElementById(null !== (uz = null === (bz = zz.detail) || void 0 === bz || null === (Ez = bz.adInfo) || void 0 === Ez ? void 0 : Ez.adUnitCode) && void 0 !== uz ? uz : "");
          null !== nz && void 0 !== nz && nz.classList.contains("NitroBanner") && nz.classList.toggle("NitroBannerUnfilled", "blank" === zz.detail.type)
        })), await (0, nz.e)("https://s.nitropay.com/ads-2842.js", {
          "data-cfasync": "false"
        }), new lz
      }
      playVideoAd(zz, uz) {
        this.showVideoAd(zz, zz)
      }
      playRewarded(zz, uz) {
        this.showVideoAd(zz, uz)
      }
      showVideoAd(zz, uz) {
        if (this.videoInFlight) return console.log("AD: Nitro video already playing"), void uz();
        const bz = document.getElementById("GenericVideoWrapper"),
          Ez = document.getElementById("GenericVideoInner");
        if (null === bz || null === Ez) return void uz();
        this.videoInFlight = !0;
        let nz = !1;
        const lz = document.createElement("div");
        lz.id = iz, lz.className = "NitroVideoPlacement";
        const Mz = iz => {
          if (!nz) {
            nz = !0, clearTimeout(wz), clearInterval(Kz), document.removeEventListener("nitroAds.adResult", Oz), document.removeEventListener("nitroAds.rendered", pz), document.removeEventListener("nitroAds.complete", dz);
            try {
              Fz.remove(), lz.querySelectorAll("video").forEach((zz => {
                zz.pause()
              })), lz.remove(), Ez.classList.remove("NitroVideo"), bz.style.display = "none"
            } catch (Mz) {
              console.error("AD: Error tearing down Nitro video", Mz)
            } finally {
              this.videoInFlight = !1, window.adCompleteSoResume(), iz ? zz() : uz()
            }
          }
        };
        let tz = !1;
        const Hz = (zz, uz) => {
            if (!tz) {
              if (!zz) return console.log(`AD: Nitro video not filled: ${uz}`), void Mz(!1);
              tz = !0, clearTimeout(wz), wz = setTimeout((() => {
                console.log("AD: Nitro video never completed"), Mz(!1)
              }), 12e4)
            }
          },
          Oz = zz => {
            var uz;
            (null === (uz = zz.detail) || void 0 === uz ? void 0 : uz.id) === iz && Hz("filled" === zz.detail.status, zz.detail.status)
          },
          pz = zz => {
            var uz, bz;
            (null === (uz = zz.detail) || void 0 === uz || null === (bz = uz.adInfo) || void 0 === bz ? void 0 : bz.adUnitCode) === iz && Hz("blank" !== zz.detail.type, zz.detail.type)
          },
          dz = zz => {
            var uz;
            (null === (uz = zz.detail) || void 0 === uz ? void 0 : uz.adUnitCode) === iz && Mz(!0)
          },
          Fz = document.createElement("button");
        Fz.className = "NitroVideoSkip", Fz.disabled = !0, Fz.addEventListener("click", (() => {
          console.log("AD: Nitro video skipped"), Mz(!0)
        }));
        let Zz = Math.ceil(15);
        const Rz = () => {
          if (Zz <= 0) return clearInterval(Kz), Fz.textContent = "Skip Ad", void(Fz.disabled = !1);
          Fz.textContent = `Skip ad in ${Zz}s`, Zz--
        };
        Rz();
        const Kz = setInterval(Rz, 1e3);
        let wz = setTimeout((() => {
          console.log("AD: Nitro video got no result"), Mz(!1)
        }), 1e4);
        document.addEventListener("nitroAds.adResult", Oz), document.addEventListener("nitroAds.rendered", pz), document.addEventListener("nitroAds.complete", dz), Ez.appendChild(lz), Ez.classList.add("NitroVideo"), bz.appendChild(Fz), bz.style.display = "flex", window.adStartSoPause(null, {
          preventMovement: !0
        }), Promise.resolve(window.nitroAds.createAd(iz, {
          format: "display",
          outstream: "only",
          resultTimeout: 8e3
        })).catch((zz => {
          console.error("AD: Nitro failed to create video", zz), Mz(!1)
        })), console.log("AD: Requested Nitro video")
      }
      renderBanner(zz) {
        const {
          divId: uz,
          width: bz,
          height: Ez
        } = zz, nz = `${uz}-nitro`;
        let iz = document.getElementById(nz);
        null === iz && (iz = document.createElement("div"), iz.id = nz, iz.className = "NitroBanner", iz.style.setProperty("--nitro-slot-width", `${bz}px`), iz.style.setProperty("--nitro-slot-height", `${Ez}px`), document.getElementById(uz).appendChild(iz));
        const lz = [
          [String(bz), String(Ez)]
        ];
        Promise.resolve(window.nitroAds.createAd(nz, {
          sizes: lz
        })).catch((zz => {
          console.error(`AD: Nitro failed to create banner ${nz}:`, zz)
        })), console.log(`AD: Requested Nitro banner ${nz}`)
      }
      displayConsentUI() {
        var zz, uz;
        null === (zz = (uz = window).__cmp) || void 0 === zz || zz.call(uz, "showModal")
      }
      addPrivacyLinks(zz) {
        var uz, bz, Ez, nz;
        const iz = document.createElement("span");
        iz.dataset.ccpaLink = "1";
        const lz = document.createElement("div");
        lz.id = "ncmp-consent-link", zz.replaceChildren(iz, lz), null === (uz = (bz = window).__uspapi) || void 0 === uz || uz.call(bz, "addLink", 1), null === (Ez = (nz = window).__cmp) || void 0 === Ez || Ez.call(nz, "addConsentLink")
      }
      newPageSession() {
        var zz, uz;
        null === (zz = (uz = window.nitroAds).navigate) || void 0 === zz || zz.call(uz)
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);