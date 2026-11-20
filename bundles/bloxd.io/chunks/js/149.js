export const id = 149;
export const ids = [149];
export const modules = {
  7729: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      NitroSdkAdaptor: () => Eb
    });
    var Ab = Ub(1240),
      Mb = Ub(1118);
    const Tb = "NitroOutstreamVideo";
    class Eb extends Ab.d {
      constructor() {
        super(), this.name = "nitro", this.bannerAutoRefresh = "alwaysOn", this.videoInFlight = !1
      }
      static async setup() {
        return window.nitroAds = window.nitroAds || {
          createAd: function() {
            for (var bb = arguments.length, ab = new Array(bb), Ub = 0; Ub < bb; Ub++) ab[Ub] = arguments[Ub];
            return new Promise((bb => {
              window.nitroAds.queue.push(["createAd", ab, bb])
            }))
          },
          addUserToken: function() {
            for (var bb = arguments.length, ab = new Array(bb), Ub = 0; Ub < bb; Ub++) ab[Ub] = arguments[Ub];
            window.nitroAds.queue.push(["addUserToken", ab])
          },
          queue: []
        }, document.addEventListener("nitroAds.rendered", (bb => {
          var ab, Ub, Ab;
          const Mb = document.getElementById(null !== (ab = null === (Ub = bb.detail) || void 0 === Ub || null === (Ab = Ub.adInfo) || void 0 === Ab ? void 0 : Ab.adUnitCode) && void 0 !== ab ? ab : "");
          null !== Mb && void 0 !== Mb && Mb.classList.contains("NitroBanner") && Mb.classList.toggle("NitroBannerUnfilled", "blank" === bb.detail.type)
        })), await (0, Mb.b)("https://s.nitropay.com/ads-2842.js", {
          "data-cfasync": "false"
        }), new Eb
      }
      playVideoAd(bb, ab) {
        this.showVideoAd(bb, bb)
      }
      playRewarded(bb, ab) {
        this.showVideoAd(bb, ab)
      }
      showVideoAd(bb, ab) {
        if (this.videoInFlight) return console.log("AD: Nitro video already playing"), void ab();
        const Ub = document.getElementById("GenericVideoWrapper"),
          Ab = document.getElementById("GenericVideoInner");
        if (null === Ub || null === Ab) return void ab();
        this.videoInFlight = !0;
        let Mb = !1;
        const Eb = document.createElement("div");
        Eb.id = Tb, Eb.className = "NitroVideoPlacement";
        const Yb = Tb => {
          if (!Mb) {
            Mb = !0, clearTimeout(yb), clearInterval(kb), document.removeEventListener("nitroAds.adResult", vb), document.removeEventListener("nitroAds.rendered", Lb), document.removeEventListener("nitroAds.complete", Pb);
            try {
              Xb.remove(), Eb.querySelectorAll("video").forEach((bb => {
                bb.pause()
              })), Eb.remove(), Ab.classList.remove("NitroVideo"), Ub.style.display = "none"
            } catch (Yb) {
              console.error("AD: Error tearing down Nitro video", Yb)
            } finally {
              this.videoInFlight = !1, window.adCompleteSoResume(), Tb ? bb() : ab()
            }
          }
        };
        let Bb = !1;
        const eb = (bb, ab) => {
            if (!Bb) {
              if (!bb) return console.log(`AD: Nitro video not filled: ${ab}`), void Yb(!1);
              Bb = !0, clearTimeout(yb), yb = setTimeout((() => {
                console.log("AD: Nitro video never completed"), Yb(!1)
              }), 12e4)
            }
          },
          vb = bb => {
            var ab;
            (null === (ab = bb.detail) || void 0 === ab ? void 0 : ab.id) === Tb && eb("filled" === bb.detail.status, bb.detail.status)
          },
          Lb = bb => {
            var ab, Ub;
            (null === (ab = bb.detail) || void 0 === ab || null === (Ub = ab.adInfo) || void 0 === Ub ? void 0 : Ub.adUnitCode) === Tb && eb("blank" !== bb.detail.type, bb.detail.type)
          },
          Pb = bb => {
            var ab;
            (null === (ab = bb.detail) || void 0 === ab ? void 0 : ab.adUnitCode) === Tb && Yb(!0)
          },
          Xb = document.createElement("button");
        Xb.className = "NitroVideoSkip", Xb.disabled = !0, Xb.addEventListener("click", (() => {
          console.log("AD: Nitro video skipped"), Yb(!0)
        }));
        let jb = Math.ceil(15);
        const Rb = () => {
          if (jb <= 0) return clearInterval(kb), Xb.textContent = "Skip Ad", void(Xb.disabled = !1);
          Xb.textContent = `Skip ad in ${jb}s`, jb--
        };
        Rb();
        const kb = setInterval(Rb, 1e3);
        let yb = setTimeout((() => {
          console.log("AD: Nitro video got no result"), Yb(!1)
        }), 1e4);
        document.addEventListener("nitroAds.adResult", vb), document.addEventListener("nitroAds.rendered", Lb), document.addEventListener("nitroAds.complete", Pb), Ab.appendChild(Eb), Ab.classList.add("NitroVideo"), Ub.appendChild(Xb), Ub.style.display = "flex", window.adStartSoPause(null, {
          preventMovement: !0
        }), Promise.resolve(window.nitroAds.createAd(Tb, {
          format: "display",
          outstream: "only",
          resultTimeout: 8e3
        })).catch((bb => {
          console.error("AD: Nitro failed to create video", bb), Yb(!1)
        })), console.log("AD: Requested Nitro video")
      }
      renderBanner(bb) {
        const {
          divId: ab,
          width: Ub,
          height: Ab
        } = bb, Mb = `${ab}-nitro`;
        let Tb = document.getElementById(Mb);
        null === Tb && (Tb = document.createElement("div"), Tb.id = Mb, Tb.className = "NitroBanner", Tb.style.setProperty("--nitro-slot-width", `${Ub}px`), Tb.style.setProperty("--nitro-slot-height", `${Ab}px`), document.getElementById(ab).appendChild(Tb));
        const Eb = [
          [String(Ub), String(Ab)]
        ];
        Promise.resolve(window.nitroAds.createAd(Mb, {
          sizes: Eb
        })).catch((bb => {
          console.error(`AD: Nitro failed to create banner ${Mb}:`, bb)
        })), console.log(`AD: Requested Nitro banner ${Mb}`)
      }
      displayConsentUI() {
        var bb, ab;
        null === (bb = (ab = window).__cmp) || void 0 === bb || bb.call(ab, "showModal")
      }
      addPrivacyLinks(bb) {
        var ab, Ub, Ab, Mb;
        const Tb = document.createElement("span");
        Tb.dataset.ccpaLink = "1";
        const Eb = document.createElement("div");
        Eb.id = "ncmp-consent-link", bb.replaceChildren(Tb, Eb), null === (ab = (Ub = window).__uspapi) || void 0 === ab || ab.call(Ub, "addLink", 1), null === (Ab = (Mb = window).__cmp) || void 0 === Ab || Ab.call(Mb, "addConsentLink")
      }
      newPageSession() {
        var bb, ab;
        null === (bb = (ab = window.nitroAds).navigate) || void 0 === bb || bb.call(ab)
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);