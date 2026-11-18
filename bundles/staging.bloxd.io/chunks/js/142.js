export const id = 142;
export const ids = [142];
export const modules = {
  7481: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      NitroSdkAdaptor: () => lB
    });
    var VB = dB(1204),
      yB = dB(1068);
    const pB = "NitroOutstreamVideo";
    class lB extends VB.e {
      constructor() {
        super(), this.name = "nitro", this.bannerAutoRefresh = "alwaysOn", this.videoInFlight = !1
      }
      static async setup() {
        return window.nitroAds = window.nitroAds || {
          createAd: function() {
            for (var BB = arguments.length, TB = new Array(BB), dB = 0; dB < BB; dB++) TB[dB] = arguments[dB];
            return new Promise((BB => {
              window.nitroAds.queue.push(["createAd", TB, BB])
            }))
          },
          addUserToken: function() {
            for (var BB = arguments.length, TB = new Array(BB), dB = 0; dB < BB; dB++) TB[dB] = arguments[dB];
            window.nitroAds.queue.push(["addUserToken", TB])
          },
          queue: []
        }, document.addEventListener("nitroAds.rendered", (BB => {
          var TB, dB, VB;
          const yB = document.getElementById(null !== (TB = null === (dB = BB.detail) || void 0 === dB || null === (VB = dB.adInfo) || void 0 === VB ? void 0 : VB.adUnitCode) && void 0 !== TB ? TB : "");
          null !== yB && void 0 !== yB && yB.classList.contains("NitroBanner") && yB.classList.toggle("NitroBannerUnfilled", "blank" === BB.detail.type)
        })), await (0, yB.c)("https://s.nitropay.com/ads-2842.js", {
          "data-cfasync": "false"
        }), new lB
      }
      playVideoAd(BB, TB) {
        this.showVideoAd(BB, BB)
      }
      playRewarded(BB, TB) {
        this.showVideoAd(BB, TB)
      }
      showVideoAd(BB, TB) {
        if (this.videoInFlight) return console.log("AD: Nitro video already playing"), void TB();
        const dB = document.getElementById("GenericVideoWrapper"),
          VB = document.getElementById("GenericVideoInner");
        if (null === dB || null === VB) return void TB();
        this.videoInFlight = !0;
        let yB = !1;
        const lB = document.createElement("div");
        lB.id = pB, lB.className = "NitroVideoPlacement";
        const JB = pB => {
          if (!yB) {
            yB = !0, clearTimeout(EB), clearInterval(HB), document.removeEventListener("nitroAds.adResult", oB), document.removeEventListener("nitroAds.rendered", kB), document.removeEventListener("nitroAds.complete", LB);
            try {
              OB.remove(), lB.querySelectorAll("video").forEach((BB => {
                BB.pause()
              })), lB.remove(), VB.classList.remove("NitroVideo"), dB.style.display = "none"
            } catch (JB) {
              console.error("AD: Error tearing down Nitro video", JB)
            } finally {
              this.videoInFlight = !1, window.adCompleteSoResume(), pB ? BB() : TB()
            }
          }
        };
        let YB = !1;
        const gB = (BB, TB) => {
            if (!YB) {
              if (!BB) return console.log(`AD: Nitro video not filled: ${TB}`), void JB(!1);
              YB = !0, clearTimeout(EB), EB = setTimeout((() => {
                console.log("AD: Nitro video never completed"), JB(!1)
              }), 12e4)
            }
          },
          oB = BB => {
            var TB;
            (null === (TB = BB.detail) || void 0 === TB ? void 0 : TB.id) === pB && gB("filled" === BB.detail.status, BB.detail.status)
          },
          kB = BB => {
            var TB, dB;
            (null === (TB = BB.detail) || void 0 === TB || null === (dB = TB.adInfo) || void 0 === dB ? void 0 : dB.adUnitCode) === pB && gB("blank" !== BB.detail.type, BB.detail.type)
          },
          LB = BB => {
            var TB;
            (null === (TB = BB.detail) || void 0 === TB ? void 0 : TB.adUnitCode) === pB && JB(!0)
          },
          OB = document.createElement("button");
        OB.className = "NitroVideoSkip", OB.disabled = !0, OB.addEventListener("click", (() => {
          console.log("AD: Nitro video skipped"), JB(!0)
        }));
        let DB = Math.ceil(15);
        const uB = () => {
          if (DB <= 0) return clearInterval(HB), OB.textContent = "Skip Ad", void(OB.disabled = !1);
          OB.textContent = `Skip ad in ${DB}s`, DB--
        };
        uB();
        const HB = setInterval(uB, 1e3);
        let EB = setTimeout((() => {
          console.log("AD: Nitro video got no result"), JB(!1)
        }), 1e4);
        document.addEventListener("nitroAds.adResult", oB), document.addEventListener("nitroAds.rendered", kB), document.addEventListener("nitroAds.complete", LB), VB.appendChild(lB), VB.classList.add("NitroVideo"), dB.appendChild(OB), dB.style.display = "flex", window.adStartSoPause(null, {
          preventMovement: !0
        }), Promise.resolve(window.nitroAds.createAd(pB, {
          format: "display",
          outstream: "only",
          resultTimeout: 8e3
        })).catch((BB => {
          console.error("AD: Nitro failed to create video", BB), JB(!1)
        })), console.log("AD: Requested Nitro video")
      }
      renderBanner(BB) {
        const {
          divId: TB,
          width: dB,
          height: VB
        } = BB, yB = `${TB}-nitro`;
        let pB = document.getElementById(yB);
        null === pB && (pB = document.createElement("div"), pB.id = yB, pB.className = "NitroBanner", pB.style.setProperty("--nitro-slot-width", `${dB}px`), pB.style.setProperty("--nitro-slot-height", `${VB}px`), document.getElementById(TB).appendChild(pB));
        const lB = [
          [String(dB), String(VB)]
        ];
        Promise.resolve(window.nitroAds.createAd(yB, {
          sizes: lB
        })).catch((BB => {
          console.error(`AD: Nitro failed to create banner ${yB}:`, BB)
        })), console.log(`AD: Requested Nitro banner ${yB}`)
      }
      displayConsentUI() {
        var BB, TB;
        null === (BB = (TB = window).__cmp) || void 0 === BB || BB.call(TB, "showModal")
      }
      addPrivacyLinks(BB) {
        var TB, dB, VB, yB;
        const pB = document.createElement("span");
        pB.dataset.ccpaLink = "1";
        const lB = document.createElement("div");
        lB.id = "ncmp-consent-link", BB.replaceChildren(pB, lB), null === (TB = (dB = window).__uspapi) || void 0 === TB || TB.call(dB, "addLink", 1), null === (VB = (yB = window).__cmp) || void 0 === VB || VB.call(yB, "addConsentLink")
      }
      newPageSession() {
        var BB, TB;
        null === (BB = (TB = window.nitroAds).navigate) || void 0 === BB || BB.call(TB)
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);