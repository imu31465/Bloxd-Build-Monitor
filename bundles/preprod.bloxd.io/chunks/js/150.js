export const id = 150;
export const ids = [150];
export const modules = {
  8045: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      NitroSdkAdaptor: () => mq
    });
    var Yq = gq(1304),
      lq = gq(1171);
    const Oq = "NitroOutstreamVideo";
    class mq extends Yq.e {
      constructor() {
        super(), this.name = "nitro", this.bannerAutoRefresh = "alwaysOn", this.videoInFlight = !1
      }
      static async setup() {
        return window.nitroAds = window.nitroAds || {
          createAd: function() {
            for (var qq = arguments.length, Eq = new Array(qq), gq = 0; gq < qq; gq++) Eq[gq] = arguments[gq];
            return new Promise((qq => {
              window.nitroAds.queue.push(["createAd", Eq, qq])
            }))
          },
          addUserToken: function() {
            for (var qq = arguments.length, Eq = new Array(qq), gq = 0; gq < qq; gq++) Eq[gq] = arguments[gq];
            window.nitroAds.queue.push(["addUserToken", Eq])
          },
          queue: []
        }, document.addEventListener("nitroAds.rendered", (qq => {
          var Eq, gq, Yq;
          const lq = document.getElementById(null !== (Eq = null === (gq = qq.detail) || void 0 === gq || null === (Yq = gq.adInfo) || void 0 === Yq ? void 0 : Yq.adUnitCode) && void 0 !== Eq ? Eq : "");
          null !== lq && void 0 !== lq && lq.classList.contains("NitroBanner") && lq.classList.toggle("NitroBannerUnfilled", "blank" === qq.detail.type)
        })), await (0, lq.b)("https://s.nitropay.com/ads-2842.js", {
          "data-cfasync": "false"
        }), new mq
      }
      playVideoAd(qq, Eq) {
        this.showVideoAd(qq, qq)
      }
      playRewarded(qq, Eq) {
        this.showVideoAd(qq, Eq)
      }
      showVideoAd(qq, Eq) {
        if (this.videoInFlight) return console.log("AD: Nitro video already playing"), void Eq();
        const gq = document.getElementById("GenericVideoWrapper"),
          Yq = document.getElementById("GenericVideoInner");
        if (null === gq || null === Yq) return void Eq();
        this.videoInFlight = !0;
        let lq = !1;
        const mq = document.createElement("div");
        mq.id = Oq, mq.className = "NitroVideoPlacement";
        const xq = Oq => {
          if (!lq) {
            lq = !0, clearTimeout(jq), clearInterval(dq), document.removeEventListener("nitroAds.adResult", uq), document.removeEventListener("nitroAds.rendered", Bq), document.removeEventListener("nitroAds.complete", Wq);
            try {
              Nq.remove(), mq.querySelectorAll("video").forEach((qq => {
                qq.pause()
              })), mq.remove(), Yq.classList.remove("NitroVideo"), gq.style.display = "none"
            } catch (xq) {
              console.error("AD: Error tearing down Nitro video", xq)
            } finally {
              this.videoInFlight = !1, window.adCompleteSoResume(), Oq ? qq() : Eq()
            }
          }
        };
        let Aq = !1;
        const cq = (qq, Eq) => {
            if (!Aq) {
              if (!qq) return console.log(`AD: Nitro video not filled: ${Eq}`), void xq(!1);
              Aq = !0, clearTimeout(jq), jq = setTimeout((() => {
                console.log("AD: Nitro video never completed"), xq(!1)
              }), 12e4)
            }
          },
          uq = qq => {
            var Eq;
            (null === (Eq = qq.detail) || void 0 === Eq ? void 0 : Eq.id) === Oq && cq("filled" === qq.detail.status, qq.detail.status)
          },
          Bq = qq => {
            var Eq, gq;
            (null === (Eq = qq.detail) || void 0 === Eq || null === (gq = Eq.adInfo) || void 0 === gq ? void 0 : gq.adUnitCode) === Oq && cq("blank" !== qq.detail.type, qq.detail.type)
          },
          Wq = qq => {
            var Eq;
            (null === (Eq = qq.detail) || void 0 === Eq ? void 0 : Eq.adUnitCode) === Oq && xq(!0)
          },
          Nq = document.createElement("button");
        Nq.className = "NitroVideoSkip", Nq.disabled = !0, Nq.addEventListener("click", (() => {
          console.log("AD: Nitro video skipped"), xq(!0)
        }));
        let aq = Math.ceil(15);
        const Vq = () => {
          if (aq <= 0) return clearInterval(dq), Nq.textContent = "Skip Ad", void(Nq.disabled = !1);
          Nq.textContent = `Skip ad in ${aq}s`, aq--
        };
        Vq();
        const dq = setInterval(Vq, 1e3);
        let jq = setTimeout((() => {
          console.log("AD: Nitro video got no result"), xq(!1)
        }), 1e4);
        document.addEventListener("nitroAds.adResult", uq), document.addEventListener("nitroAds.rendered", Bq), document.addEventListener("nitroAds.complete", Wq), Yq.appendChild(mq), Yq.classList.add("NitroVideo"), gq.appendChild(Nq), gq.style.display = "flex", window.adStartSoPause(null, {
          preventMovement: !0
        }), Promise.resolve(window.nitroAds.createAd(Oq, {
          format: "display",
          outstream: "only",
          resultTimeout: 8e3
        })).catch((qq => {
          console.error("AD: Nitro failed to create video", qq), xq(!1)
        })), console.log("AD: Requested Nitro video")
      }
      renderBanner(qq) {
        const {
          divId: Eq,
          width: gq,
          height: Yq
        } = qq, lq = `${Eq}-nitro`;
        let Oq = document.getElementById(lq);
        null === Oq && (Oq = document.createElement("div"), Oq.id = lq, Oq.className = "NitroBanner", Oq.style.setProperty("--nitro-slot-width", `${gq}px`), Oq.style.setProperty("--nitro-slot-height", `${Yq}px`), document.getElementById(Eq).appendChild(Oq));
        const mq = [
          [String(gq), String(Yq)]
        ];
        Promise.resolve(window.nitroAds.createAd(lq, {
          sizes: mq
        })).catch((qq => {
          console.error(`AD: Nitro failed to create banner ${lq}:`, qq)
        })), console.log(`AD: Requested Nitro banner ${lq}`)
      }
      displayConsentUI() {
        var qq, Eq;
        null === (qq = (Eq = window).__cmp) || void 0 === qq || qq.call(Eq, "showModal")
      }
      addPrivacyLinks(qq) {
        var Eq, gq, Yq, lq;
        const Oq = document.createElement("span");
        Oq.dataset.ccpaLink = "1";
        const mq = document.createElement("div");
        mq.id = "ncmp-consent-link", qq.replaceChildren(Oq, mq), null === (Eq = (gq = window).__uspapi) || void 0 === Eq || Eq.call(gq, "addLink", 1), null === (Yq = (lq = window).__cmp) || void 0 === Yq || Yq.call(lq, "addConsentLink")
      }
      newPageSession() {
        var qq, Eq;
        null === (qq = (Eq = window.nitroAds).navigate) || void 0 === qq || qq.call(Eq)
      }
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);