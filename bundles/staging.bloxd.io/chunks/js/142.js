export const id = 142;
export const ids = [142];
export const modules = {
  7456: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      NitroSdkAdaptor: () => XJ
    });
    var FJ = ZJ(1205),
      UJ = ZJ(1075);
    const eJ = "NitroOutstreamVideo";
    class XJ extends FJ.b {
      constructor() {
        super(), this.name = "nitro", this.bannerAutoRefresh = "alwaysOn", this.videoInFlight = !1
      }
      static async setup() {
        return window.nitroAds = window.nitroAds || {
          createAd: function() {
            for (var JJ = arguments.length, cJ = new Array(JJ), ZJ = 0; ZJ < JJ; ZJ++) cJ[ZJ] = arguments[ZJ];
            return new Promise((JJ => {
              window.nitroAds.queue.push(["createAd", cJ, JJ])
            }))
          },
          addUserToken: function() {
            for (var JJ = arguments.length, cJ = new Array(JJ), ZJ = 0; ZJ < JJ; ZJ++) cJ[ZJ] = arguments[ZJ];
            window.nitroAds.queue.push(["addUserToken", cJ])
          },
          queue: []
        }, document.addEventListener("nitroAds.rendered", (JJ => {
          var cJ, ZJ, FJ;
          const UJ = document.getElementById(null !== (cJ = null === (ZJ = JJ.detail) || void 0 === ZJ || null === (FJ = ZJ.adInfo) || void 0 === FJ ? void 0 : FJ.adUnitCode) && void 0 !== cJ ? cJ : "");
          null !== UJ && void 0 !== UJ && UJ.classList.contains("NitroBanner") && UJ.classList.toggle("NitroBannerUnfilled", "blank" === JJ.detail.type)
        })), await (0, UJ.e)("https://s.nitropay.com/ads-2842.js", {
          "data-cfasync": "false"
        }), new XJ
      }
      playVideoAd(JJ, cJ) {
        this.showVideoAd(JJ, JJ)
      }
      playRewarded(JJ, cJ) {
        this.showVideoAd(JJ, cJ)
      }
      showVideoAd(JJ, cJ) {
        if (this.videoInFlight) return console.log("AD: Nitro video already playing"), void cJ();
        const ZJ = document.getElementById("GenericVideoWrapper"),
          FJ = document.getElementById("GenericVideoInner");
        if (null === ZJ || null === FJ) return void cJ();
        this.videoInFlight = !0;
        let UJ = !1;
        const XJ = document.createElement("div");
        XJ.id = eJ, XJ.className = "NitroVideoPlacement";
        const AJ = eJ => {
          if (!UJ) {
            UJ = !0, clearTimeout(xJ), clearInterval(fJ), document.removeEventListener("nitroAds.adResult", YJ), document.removeEventListener("nitroAds.rendered", hJ), document.removeEventListener("nitroAds.complete", DJ);
            try {
              sJ.remove(), XJ.querySelectorAll("video").forEach((JJ => {
                JJ.pause()
              })), XJ.remove(), FJ.classList.remove("NitroVideo"), ZJ.style.display = "none"
            } catch (AJ) {
              console.error("AD: Error tearing down Nitro video", AJ)
            } finally {
              this.videoInFlight = !1, window.adCompleteSoResume(), eJ ? JJ() : cJ()
            }
          }
        };
        let qJ = !1;
        const jJ = (JJ, cJ) => {
            if (!qJ) {
              if (!JJ) return console.log(`AD: Nitro video not filled: ${cJ}`), void AJ(!1);
              qJ = !0, clearTimeout(xJ), xJ = setTimeout((() => {
                console.log("AD: Nitro video never completed"), AJ(!1)
              }), 12e4)
            }
          },
          YJ = JJ => {
            var cJ;
            (null === (cJ = JJ.detail) || void 0 === cJ ? void 0 : cJ.id) === eJ && jJ("filled" === JJ.detail.status, JJ.detail.status)
          },
          hJ = JJ => {
            var cJ, ZJ;
            (null === (cJ = JJ.detail) || void 0 === cJ || null === (ZJ = cJ.adInfo) || void 0 === ZJ ? void 0 : ZJ.adUnitCode) === eJ && jJ("blank" !== JJ.detail.type, JJ.detail.type)
          },
          DJ = JJ => {
            var cJ;
            (null === (cJ = JJ.detail) || void 0 === cJ ? void 0 : cJ.adUnitCode) === eJ && AJ(!0)
          },
          sJ = document.createElement("button");
        sJ.className = "NitroVideoSkip", sJ.disabled = !0, sJ.addEventListener("click", (() => {
          console.log("AD: Nitro video skipped"), AJ(!0)
        }));
        let nJ = Math.ceil(15);
        const GJ = () => {
          if (nJ <= 0) return clearInterval(fJ), sJ.textContent = "Skip Ad", void(sJ.disabled = !1);
          sJ.textContent = `Skip ad in ${nJ}s`, nJ--
        };
        GJ();
        const fJ = setInterval(GJ, 1e3);
        let xJ = setTimeout((() => {
          console.log("AD: Nitro video got no result"), AJ(!1)
        }), 1e4);
        document.addEventListener("nitroAds.adResult", YJ), document.addEventListener("nitroAds.rendered", hJ), document.addEventListener("nitroAds.complete", DJ), FJ.appendChild(XJ), FJ.classList.add("NitroVideo"), ZJ.appendChild(sJ), ZJ.style.display = "flex", window.adStartSoPause(null, {
          preventMovement: !0
        }), Promise.resolve(window.nitroAds.createAd(eJ, {
          format: "display",
          outstream: "only",
          resultTimeout: 8e3
        })).catch((JJ => {
          console.error("AD: Nitro failed to create video", JJ), AJ(!1)
        })), console.log("AD: Requested Nitro video")
      }
      renderBanner(JJ) {
        const {
          divId: cJ,
          width: ZJ,
          height: FJ
        } = JJ, UJ = `${cJ}-nitro`;
        let eJ = document.getElementById(UJ);
        null === eJ && (eJ = document.createElement("div"), eJ.id = UJ, eJ.className = "NitroBanner", eJ.style.setProperty("--nitro-slot-width", `${ZJ}px`), eJ.style.setProperty("--nitro-slot-height", `${FJ}px`), document.getElementById(cJ).appendChild(eJ));
        const XJ = [
          [String(ZJ), String(FJ)]
        ];
        Promise.resolve(window.nitroAds.createAd(UJ, {
          sizes: XJ
        })).catch((JJ => {
          console.error(`AD: Nitro failed to create banner ${UJ}:`, JJ)
        })), console.log(`AD: Requested Nitro banner ${UJ}`)
      }
      displayConsentUI() {
        var JJ, cJ;
        null === (JJ = (cJ = window).__cmp) || void 0 === JJ || JJ.call(cJ, "showModal")
      }
      addPrivacyLinks(JJ) {
        var cJ, ZJ, FJ, UJ;
        const eJ = document.createElement("span");
        eJ.dataset.ccpaLink = "1";
        const XJ = document.createElement("div");
        XJ.id = "ncmp-consent-link", JJ.replaceChildren(eJ, XJ), null === (cJ = (ZJ = window).__uspapi) || void 0 === cJ || cJ.call(ZJ, "addLink", 1), null === (FJ = (UJ = window).__cmp) || void 0 === FJ || FJ.call(UJ, "addConsentLink")
      }
      newPageSession() {
        var JJ, cJ;
        null === (JJ = (cJ = window.nitroAds).navigate) || void 0 === JJ || JJ.call(cJ)
      }
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);