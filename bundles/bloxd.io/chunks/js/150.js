export const id = 150;
export const ids = [150];
export const modules = {
  7820: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      NitroSdkAdaptor: () => Ub
    });
    var Bb = hb(1211),
      Ob = hb(1077);
    const Gb = "NitroOutstreamVideo";
    class Ub extends Bb.b {
      constructor() {
        super(), this.name = "nitro", this.bannerAutoRefresh = "alwaysOn", this.videoInFlight = !1
      }
      static async setup() {
        return window.nitroAds = window.nitroAds || {
          createAd: function() {
            for (var bb = arguments.length, ub = new Array(bb), hb = 0; hb < bb; hb++) ub[hb] = arguments[hb];
            return new Promise((bb => {
              window.nitroAds.queue.push(["createAd", ub, bb])
            }))
          },
          addUserToken: function() {
            for (var bb = arguments.length, ub = new Array(bb), hb = 0; hb < bb; hb++) ub[hb] = arguments[hb];
            window.nitroAds.queue.push(["addUserToken", ub])
          },
          queue: []
        }, document.addEventListener("nitroAds.rendered", (bb => {
          var ub, hb, Bb;
          const Ob = document.getElementById(null !== (ub = null === (hb = bb.detail) || void 0 === hb || null === (Bb = hb.adInfo) || void 0 === Bb ? void 0 : Bb.adUnitCode) && void 0 !== ub ? ub : "");
          null !== Ob && void 0 !== Ob && Ob.classList.contains("NitroBanner") && Ob.classList.toggle("NitroBannerUnfilled", "blank" === bb.detail.type)
        })), await (0, Ob.d)("https://s.nitropay.com/ads-2842.js", {
          "data-cfasync": "false"
        }), new Ub
      }
      playVideoAd(bb, ub) {
        this.showVideoAd(bb, bb)
      }
      playRewarded(bb, ub) {
        this.showVideoAd(bb, ub)
      }
      showVideoAd(bb, ub) {
        if (this.videoInFlight) return console.log("AD: Nitro video already playing"), void ub();
        const hb = document.getElementById("GenericVideoWrapper"),
          Bb = document.getElementById("GenericVideoInner");
        if (null === hb || null === Bb) return void ub();
        this.videoInFlight = !0;
        let Ob = !1;
        const Ub = document.createElement("div");
        Ub.id = Gb, Ub.className = "NitroVideoPlacement";
        const Lb = Gb => {
          if (!Ob) {
            Ob = !0, clearTimeout(Ab), clearInterval(ob), document.removeEventListener("nitroAds.adResult", ab), document.removeEventListener("nitroAds.rendered", Hb), document.removeEventListener("nitroAds.complete", wb);
            try {
              Zb.remove(), Ub.querySelectorAll("video").forEach((bb => {
                bb.pause()
              })), Ub.remove(), Bb.classList.remove("NitroVideo"), hb.style.display = "none"
            } catch (Lb) {
              console.error("AD: Error tearing down Nitro video", Lb)
            } finally {
              this.videoInFlight = !1, window.adCompleteSoResume(), Gb ? bb() : ub()
            }
          }
        };
        let Yb = !1;
        const Sb = (bb, ub) => {
            if (!Yb) {
              if (!bb) return console.log(`AD: Nitro video not filled: ${ub}`), void Lb(!1);
              Yb = !0, clearTimeout(Ab), Ab = setTimeout((() => {
                console.log("AD: Nitro video never completed"), Lb(!1)
              }), 12e4)
            }
          },
          ab = bb => {
            var ub;
            (null === (ub = bb.detail) || void 0 === ub ? void 0 : ub.id) === Gb && Sb("filled" === bb.detail.status, bb.detail.status)
          },
          Hb = bb => {
            var ub, hb;
            (null === (ub = bb.detail) || void 0 === ub || null === (hb = ub.adInfo) || void 0 === hb ? void 0 : hb.adUnitCode) === Gb && Sb("blank" !== bb.detail.type, bb.detail.type)
          },
          wb = bb => {
            var ub;
            (null === (ub = bb.detail) || void 0 === ub ? void 0 : ub.adUnitCode) === Gb && Lb(!0)
          },
          Zb = document.createElement("button");
        Zb.className = "NitroVideoSkip", Zb.disabled = !0, Zb.addEventListener("click", (() => {
          console.log("AD: Nitro video skipped"), Lb(!0)
        }));
        let Xb = Math.ceil(15);
        const pb = () => {
          if (Xb <= 0) return clearInterval(ob), Zb.textContent = "Skip Ad", void(Zb.disabled = !1);
          Zb.textContent = `Skip ad in ${Xb}s`, Xb--
        };
        pb();
        const ob = setInterval(pb, 1e3);
        let Ab = setTimeout((() => {
          console.log("AD: Nitro video got no result"), Lb(!1)
        }), 1e4);
        document.addEventListener("nitroAds.adResult", ab), document.addEventListener("nitroAds.rendered", Hb), document.addEventListener("nitroAds.complete", wb), Bb.appendChild(Ub), Bb.classList.add("NitroVideo"), hb.appendChild(Zb), hb.style.display = "flex", window.adStartSoPause(null, {
          preventMovement: !0
        }), Promise.resolve(window.nitroAds.createAd(Gb, {
          format: "display",
          outstream: "only",
          resultTimeout: 8e3
        })).catch((bb => {
          console.error("AD: Nitro failed to create video", bb), Lb(!1)
        })), console.log("AD: Requested Nitro video")
      }
      renderBanner(bb) {
        const {
          divId: ub,
          width: hb,
          height: Bb
        } = bb, Ob = `${ub}-nitro`;
        let Gb = document.getElementById(Ob);
        null === Gb && (Gb = document.createElement("div"), Gb.id = Ob, Gb.className = "NitroBanner", Gb.style.setProperty("--nitro-slot-width", `${hb}px`), Gb.style.setProperty("--nitro-slot-height", `${Bb}px`), document.getElementById(ub).appendChild(Gb));
        const Ub = [
          [String(hb), String(Bb)]
        ];
        Promise.resolve(window.nitroAds.createAd(Ob, {
          sizes: Ub
        })).catch((bb => {
          console.error(`AD: Nitro failed to create banner ${Ob}:`, bb)
        })), console.log(`AD: Requested Nitro banner ${Ob}`)
      }
      displayConsentUI() {
        var bb, ub;
        null === (bb = (ub = window).__cmp) || void 0 === bb || bb.call(ub, "showModal")
      }
      addPrivacyLinks(bb) {
        var ub, hb, Bb, Ob;
        const Gb = document.createElement("span");
        Gb.dataset.ccpaLink = "1";
        const Ub = document.createElement("div");
        Ub.id = "ncmp-consent-link", bb.replaceChildren(Gb, Ub), null === (ub = (hb = window).__uspapi) || void 0 === ub || ub.call(hb, "addLink", 1), null === (Bb = (Ob = window).__cmp) || void 0 === Bb || Bb.call(Ob, "addConsentLink")
      }
      newPageSession() {
        var bb, ub;
        null === (bb = (ub = window.nitroAds).navigate) || void 0 === bb || bb.call(ub)
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);