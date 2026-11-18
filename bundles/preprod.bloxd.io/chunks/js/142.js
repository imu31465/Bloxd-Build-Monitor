export const id = 142;
export const ids = [142];
export const modules = {
  7304: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      NitroSdkAdaptor: () => Zy
    });
    var Uy = Wy(1169),
      hy = Wy(1029);
    const fy = "NitroOutstreamVideo";
    class Zy extends Uy.b {
      constructor() {
        super(), this.name = "nitro", this.bannerAutoRefresh = "alwaysOn", this.videoInFlight = !1
      }
      static async setup() {
        return window.nitroAds = window.nitroAds || {
          createAd: function() {
            for (var yb = arguments.length, bb = new Array(yb), Wy = 0; Wy < yb; Wy++) bb[Wy] = arguments[Wy];
            return new Promise((yb => {
              window.nitroAds.queue.push(["createAd", bb, yb])
            }))
          },
          addUserToken: function() {
            for (var yb = arguments.length, bb = new Array(yb), Wy = 0; Wy < yb; Wy++) bb[Wy] = arguments[Wy];
            window.nitroAds.queue.push(["addUserToken", bb])
          },
          queue: []
        }, document.addEventListener("nitroAds.rendered", (yb => {
          var bb, Wy, Uy;
          const hy = document.getElementById(null !== (bb = null === (Wy = yb.detail) || void 0 === Wy || null === (Uy = Wy.adInfo) || void 0 === Uy ? void 0 : Uy.adUnitCode) && void 0 !== bb ? bb : "");
          null !== hy && void 0 !== hy && hy.classList.contains("NitroBanner") && hy.classList.toggle("NitroBannerUnfilled", "blank" === yb.detail.type)
        })), await (0, hy.b)("https://s.nitropay.com/ads-2842.js", {
          "data-cfasync": "false"
        }), new Zy
      }
      playVideoAd(yb, bb) {
        this.showVideoAd(yb, yb)
      }
      playRewarded(yb, bb) {
        this.showVideoAd(yb, bb)
      }
      showVideoAd(yb, bb) {
        if (this.videoInFlight) return console.log("AD: Nitro video already playing"), void bb();
        const Wy = document.getElementById("GenericVideoWrapper"),
          Uy = document.getElementById("GenericVideoInner");
        if (null === Wy || null === Uy) return void bb();
        this.videoInFlight = !0;
        let hy = !1;
        const Zy = document.createElement("div");
        Zy.id = fy, Zy.className = "NitroVideoPlacement";
        const cb = fy => {
          if (!hy) {
            hy = !0, clearTimeout(ly), clearInterval(Ey), document.removeEventListener("nitroAds.adResult", By), document.removeEventListener("nitroAds.rendered", Ky), document.removeEventListener("nitroAds.complete", ey);
            try {
              qb.remove(), Zy.querySelectorAll("video").forEach((yb => {
                yb.pause()
              })), Zy.remove(), Uy.classList.remove("NitroVideo"), Wy.style.display = "none"
            } catch (cb) {
              console.error("AD: Error tearing down Nitro video", cb)
            } finally {
              this.videoInFlight = !1, window.adCompleteSoResume(), fy ? yb() : bb()
            }
          }
        };
        let Py = !1;
        const oy = (yb, bb) => {
            if (!Py) {
              if (!yb) return console.log(`AD: Nitro video not filled: ${bb}`), void cb(!1);
              Py = !0, clearTimeout(ly), ly = setTimeout((() => {
                console.log("AD: Nitro video never completed"), cb(!1)
              }), 12e4)
            }
          },
          By = yb => {
            var bb;
            (null === (bb = yb.detail) || void 0 === bb ? void 0 : bb.id) === fy && oy("filled" === yb.detail.status, yb.detail.status)
          },
          Ky = yb => {
            var bb, Wy;
            (null === (bb = yb.detail) || void 0 === bb || null === (Wy = bb.adInfo) || void 0 === Wy ? void 0 : Wy.adUnitCode) === fy && oy("blank" !== yb.detail.type, yb.detail.type)
          },
          ey = yb => {
            var bb;
            (null === (bb = yb.detail) || void 0 === bb ? void 0 : bb.adUnitCode) === fy && cb(!0)
          },
          qb = document.createElement("button");
        qb.className = "NitroVideoSkip", qb.disabled = !0, qb.addEventListener("click", (() => {
          console.log("AD: Nitro video skipped"), cb(!0)
        }));
        let sy = Math.ceil(15);
        const Sy = () => {
          if (sy <= 0) return clearInterval(Ey), qb.textContent = "Skip Ad", void(qb.disabled = !1);
          qb.textContent = `Skip ad in ${sy}s`, sy--
        };
        Sy();
        const Ey = setInterval(Sy, 1e3);
        let ly = setTimeout((() => {
          console.log("AD: Nitro video got no result"), cb(!1)
        }), 1e4);
        document.addEventListener("nitroAds.adResult", By), document.addEventListener("nitroAds.rendered", Ky), document.addEventListener("nitroAds.complete", ey), Uy.appendChild(Zy), Uy.classList.add("NitroVideo"), Wy.appendChild(qb), Wy.style.display = "flex", window.adStartSoPause(null, {
          preventMovement: !0
        }), Promise.resolve(window.nitroAds.createAd(fy, {
          format: "display",
          outstream: "only",
          resultTimeout: 8e3
        })).catch((yb => {
          console.error("AD: Nitro failed to create video", yb), cb(!1)
        })), console.log("AD: Requested Nitro video")
      }
      renderBanner(yb) {
        const {
          divId: bb,
          width: Wy,
          height: Uy
        } = yb, hy = `${bb}-nitro`;
        let fy = document.getElementById(hy);
        null === fy && (fy = document.createElement("div"), fy.id = hy, fy.className = "NitroBanner", fy.style.setProperty("--nitro-slot-width", `${Wy}px`), fy.style.setProperty("--nitro-slot-height", `${Uy}px`), document.getElementById(bb).appendChild(fy));
        const Zy = [
          [String(Wy), String(Uy)]
        ];
        Promise.resolve(window.nitroAds.createAd(hy, {
          sizes: Zy
        })).catch((yb => {
          console.error(`AD: Nitro failed to create banner ${hy}:`, yb)
        })), console.log(`AD: Requested Nitro banner ${hy}`)
      }
      displayConsentUI() {
        var yb, bb;
        null === (yb = (bb = window).__cmp) || void 0 === yb || yb.call(bb, "showModal")
      }
      addPrivacyLinks(yb) {
        var bb, Wy, Uy, hy;
        const fy = document.createElement("span");
        fy.dataset.ccpaLink = "1";
        const Zy = document.createElement("div");
        Zy.id = "ncmp-consent-link", yb.replaceChildren(fy, Zy), null === (bb = (Wy = window).__uspapi) || void 0 === bb || bb.call(Wy, "addLink", 1), null === (Uy = (hy = window).__cmp) || void 0 === Uy || Uy.call(hy, "addConsentLink")
      }
      newPageSession() {
        var yb, bb;
        null === (yb = (bb = window.nitroAds).navigate) || void 0 === yb || yb.call(bb)
      }
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);