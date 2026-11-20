export const id = 149;
export const ids = [149];
export const modules = {
  7761: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      NitroSdkAdaptor: () => Tb
    });
    var kb = sb(1307),
      Wb = sb(1185);
    const ab = "NitroOutstreamVideo";
    class Tb extends kb.c {
      constructor() {
        super(), this.name = "nitro", this.bannerAutoRefresh = "alwaysOn", this.videoInFlight = !1
      }
      static async setup() {
        return window.nitroAds = window.nitroAds || {
          createAd: function() {
            for (var bb = arguments.length, cb = new Array(bb), sb = 0; sb < bb; sb++) cb[sb] = arguments[sb];
            return new Promise((bb => {
              window.nitroAds.queue.push(["createAd", cb, bb])
            }))
          },
          addUserToken: function() {
            for (var bb = arguments.length, cb = new Array(bb), sb = 0; sb < bb; sb++) cb[sb] = arguments[sb];
            window.nitroAds.queue.push(["addUserToken", cb])
          },
          queue: []
        }, document.addEventListener("nitroAds.rendered", (bb => {
          var cb, sb, kb;
          const Wb = document.getElementById(null !== (cb = null === (sb = bb.detail) || void 0 === sb || null === (kb = sb.adInfo) || void 0 === kb ? void 0 : kb.adUnitCode) && void 0 !== cb ? cb : "");
          null !== Wb && void 0 !== Wb && Wb.classList.contains("NitroBanner") && Wb.classList.toggle("NitroBannerUnfilled", "blank" === bb.detail.type)
        })), await (0, Wb.d)("https://s.nitropay.com/ads-2842.js", {
          "data-cfasync": "false"
        }), new Tb
      }
      playVideoAd(bb, cb) {
        this.showVideoAd(bb, bb)
      }
      playRewarded(bb, cb) {
        this.showVideoAd(bb, cb)
      }
      showVideoAd(bb, cb) {
        if (this.videoInFlight) return console.log("AD: Nitro video already playing"), void cb();
        const sb = document.getElementById("GenericVideoWrapper"),
          kb = document.getElementById("GenericVideoInner");
        if (null === sb || null === kb) return void cb();
        this.videoInFlight = !0;
        let Wb = !1;
        const Tb = document.createElement("div");
        Tb.id = ab, Tb.className = "NitroVideoPlacement";
        const Ub = ab => {
          if (!Wb) {
            Wb = !0, clearTimeout(eb), clearInterval(Qb), document.removeEventListener("nitroAds.adResult", fb), document.removeEventListener("nitroAds.rendered", Mb), document.removeEventListener("nitroAds.complete", Xb);
            try {
              nb.remove(), Tb.querySelectorAll("video").forEach((bb => {
                bb.pause()
              })), Tb.remove(), kb.classList.remove("NitroVideo"), sb.style.display = "none"
            } catch (Ub) {
              console.error("AD: Error tearing down Nitro video", Ub)
            } finally {
              this.videoInFlight = !1, window.adCompleteSoResume(), ab ? bb() : cb()
            }
          }
        };
        let Ib = !1;
        const Hb = (bb, cb) => {
            if (!Ib) {
              if (!bb) return console.log(`AD: Nitro video not filled: ${cb}`), void Ub(!1);
              Ib = !0, clearTimeout(eb), eb = setTimeout((() => {
                console.log("AD: Nitro video never completed"), Ub(!1)
              }), 12e4)
            }
          },
          fb = bb => {
            var cb;
            (null === (cb = bb.detail) || void 0 === cb ? void 0 : cb.id) === ab && Hb("filled" === bb.detail.status, bb.detail.status)
          },
          Mb = bb => {
            var cb, sb;
            (null === (cb = bb.detail) || void 0 === cb || null === (sb = cb.adInfo) || void 0 === sb ? void 0 : sb.adUnitCode) === ab && Hb("blank" !== bb.detail.type, bb.detail.type)
          },
          Xb = bb => {
            var cb;
            (null === (cb = bb.detail) || void 0 === cb ? void 0 : cb.adUnitCode) === ab && Ub(!0)
          },
          nb = document.createElement("button");
        nb.className = "NitroVideoSkip", nb.disabled = !0, nb.addEventListener("click", (() => {
          console.log("AD: Nitro video skipped"), Ub(!0)
        }));
        let mb = Math.ceil(15);
        const lb = () => {
          if (mb <= 0) return clearInterval(Qb), nb.textContent = "Skip Ad", void(nb.disabled = !1);
          nb.textContent = `Skip ad in ${mb}s`, mb--
        };
        lb();
        const Qb = setInterval(lb, 1e3);
        let eb = setTimeout((() => {
          console.log("AD: Nitro video got no result"), Ub(!1)
        }), 1e4);
        document.addEventListener("nitroAds.adResult", fb), document.addEventListener("nitroAds.rendered", Mb), document.addEventListener("nitroAds.complete", Xb), kb.appendChild(Tb), kb.classList.add("NitroVideo"), sb.appendChild(nb), sb.style.display = "flex", window.adStartSoPause(null, {
          preventMovement: !0
        }), Promise.resolve(window.nitroAds.createAd(ab, {
          format: "display",
          outstream: "only",
          resultTimeout: 8e3
        })).catch((bb => {
          console.error("AD: Nitro failed to create video", bb), Ub(!1)
        })), console.log("AD: Requested Nitro video")
      }
      renderBanner(bb) {
        const {
          divId: cb,
          width: sb,
          height: kb
        } = bb, Wb = `${cb}-nitro`;
        let ab = document.getElementById(Wb);
        null === ab && (ab = document.createElement("div"), ab.id = Wb, ab.className = "NitroBanner", ab.style.setProperty("--nitro-slot-width", `${sb}px`), ab.style.setProperty("--nitro-slot-height", `${kb}px`), document.getElementById(cb).appendChild(ab));
        const Tb = [
          [String(sb), String(kb)]
        ];
        Promise.resolve(window.nitroAds.createAd(Wb, {
          sizes: Tb
        })).catch((bb => {
          console.error(`AD: Nitro failed to create banner ${Wb}:`, bb)
        })), console.log(`AD: Requested Nitro banner ${Wb}`)
      }
      displayConsentUI() {
        var bb, cb;
        null === (bb = (cb = window).__cmp) || void 0 === bb || bb.call(cb, "showModal")
      }
      addPrivacyLinks(bb) {
        var cb, sb, kb, Wb;
        const ab = document.createElement("span");
        ab.dataset.ccpaLink = "1";
        const Tb = document.createElement("div");
        Tb.id = "ncmp-consent-link", bb.replaceChildren(ab, Tb), null === (cb = (sb = window).__uspapi) || void 0 === cb || cb.call(sb, "addLink", 1), null === (kb = (Wb = window).__cmp) || void 0 === kb || kb.call(Wb, "addConsentLink")
      }
      newPageSession() {
        var bb, cb;
        null === (bb = (cb = window.nitroAds).navigate) || void 0 === bb || bb.call(cb)
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);