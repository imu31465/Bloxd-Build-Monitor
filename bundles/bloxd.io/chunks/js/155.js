export const id = 155;
export const ids = [155];
export const modules = {
  8178: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => YG
    });
    var wG = ZG(2897);
    const SG = [1, 8, 9],
      LG = 5,
      yG = 200,
      kG = 150;

    function UG(GG, bG) {
      let ZG = 0;
      GG("addEventListener", 2, ((GG, yG) => {
        if (!yG) return void console.warn("TCF CMP couldn't report a consent event, so our consent defaults stand");
        const kG = function(GG) {
          const bG = "useractioncomplete" === GG.eventStatus || "tcloaded" === GG.eventStatus && !!GG.tcString;
          return GG.gdprApplies && bG ? SG.every((bG => !0 === GG.purpose.consents[bG])) : null
        }(GG);
        if (null === kG) return;
        const UG = ++ZG;
        if (!kG) return void(0, wG.updateAnalyticsConsent)(!1);
        if ("nitro" === bG) return void(0, wG.updateAnalyticsConsent)(!0);
        const YG = window.__tcfapi;
        YG ? YG("getNonIABVendorConsents", 2, ((GG, bG) => {
          var SG;
          UG === ZG && (0, wG.updateAnalyticsConsent)(bG && !0 === (null === (SG = GG.nonIabVendorConsents) || void 0 === SG ? void 0 : SG[LG]))
        })) : console.warn("TCF CMP reported a choice but its __tcfapi is gone, so our consent defaults stand")
      }))
    }

    function YG(GG) {
      if (window.__tcfapi) return void UG(window.__tcfapi, GG);
      let bG = 0;
      const ZG = window.setInterval((() => {
        bG++;
        const wG = window.__tcfapi;
        wG ? (window.clearInterval(ZG), UG(wG, GG)) : bG >= kG && window.clearInterval(ZG)
      }), yG)
    }
  },
  8196: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      NitroSdkAdaptor: () => UG
    });
    var wG = ZG(1280),
      SG = ZG(1143),
      LG = ZG(8178),
      yG = ZG(2897);
    const kG = "NitroOutstreamVideo";
    class UG extends wG.e {
      constructor() {
        super(), this.name = "nitro", this.bannerAutoRefresh = "alwaysOn", this.videoInFlight = !1
      }
      static async setup() {
        return window.nitroAds = window.nitroAds || {
          createAd: function() {
            for (var GG = arguments.length, bG = new Array(GG), ZG = 0; ZG < GG; ZG++) bG[ZG] = arguments[ZG];
            return new Promise((GG => {
              window.nitroAds.queue.push(["createAd", bG, GG])
            }))
          },
          addUserToken: function() {
            for (var GG = arguments.length, bG = new Array(GG), ZG = 0; ZG < GG; ZG++) bG[ZG] = arguments[ZG];
            window.nitroAds.queue.push(["addUserToken", bG])
          },
          queue: []
        }, document.addEventListener("nitroAds.rendered", (GG => {
          var bG, ZG, wG;
          const SG = document.getElementById(null !== (bG = null === (ZG = GG.detail) || void 0 === ZG || null === (wG = ZG.adInfo) || void 0 === wG ? void 0 : wG.adUnitCode) && void 0 !== bG ? bG : "");
          null !== SG && void 0 !== SG && SG.classList.contains("NitroBanner") && SG.classList.toggle("NitroBannerUnfilled", "blank" === GG.detail.type)
        })), (0, yG.setUpGtag)(), await (0, SG.b)("https://s.nitropay.com/ads-2842.js", {
          "data-cfasync": "false"
        }), (0, LG.b)("nitro"), new UG
      }
      playVideoAd(GG, bG) {
        this.showVideoAd(GG, GG)
      }
      playRewarded(GG, bG) {
        this.showVideoAd(GG, bG)
      }
      showVideoAd(GG, bG) {
        if (this.videoInFlight) return console.log("AD: Nitro video already playing"), void bG();
        const ZG = document.getElementById("GenericVideoWrapper"),
          wG = document.getElementById("GenericVideoInner");
        if (null === ZG || null === wG) return void bG();
        this.videoInFlight = !0;
        let SG = !1;
        const LG = document.createElement("div");
        LG.id = kG, LG.className = "NitroVideoPlacement";
        const yG = yG => {
          if (!SG) {
            SG = !0, clearTimeout(JG), clearInterval(dG), document.removeEventListener("nitroAds.adResult", VG), document.removeEventListener("nitroAds.rendered", pG), document.removeEventListener("nitroAds.complete", fG);
            try {
              QG.remove(), LG.querySelectorAll("video").forEach((GG => {
                GG.pause()
              })), LG.remove(), wG.classList.remove("NitroVideo"), ZG.style.display = "none"
            } catch (kG) {
              console.error("AD: Error tearing down Nitro video", kG)
            } finally {
              this.videoInFlight = !1, window.adCompleteSoResume(), yG ? GG() : bG()
            }
          }
        };
        let UG = !1;
        const YG = (GG, bG) => {
            if (!UG) {
              if (!GG) return console.log(`AD: Nitro video not filled: ${bG}`), void yG(!1);
              UG = !0, clearTimeout(JG), JG = setTimeout((() => {
                console.log("AD: Nitro video never completed"), yG(!1)
              }), 12e4)
            }
          },
          VG = GG => {
            var bG;
            (null === (bG = GG.detail) || void 0 === bG ? void 0 : bG.id) === kG && YG("filled" === GG.detail.status, GG.detail.status)
          },
          pG = GG => {
            var bG, ZG;
            (null === (bG = GG.detail) || void 0 === bG || null === (ZG = bG.adInfo) || void 0 === ZG ? void 0 : ZG.adUnitCode) === kG && YG("blank" !== GG.detail.type, GG.detail.type)
          },
          fG = GG => {
            var bG;
            (null === (bG = GG.detail) || void 0 === bG ? void 0 : bG.adUnitCode) === kG && yG(!0)
          },
          QG = document.createElement("button");
        QG.className = "NitroVideoSkip", QG.disabled = !0, QG.addEventListener("click", (() => {
          console.log("AD: Nitro video skipped"), yG(!0)
        }));
        let KG = Math.ceil(15);
        const hG = () => {
          if (KG <= 0) return clearInterval(dG), QG.textContent = "Skip Ad", void(QG.disabled = !1);
          QG.textContent = `Skip ad in ${KG}s`, KG--
        };
        hG();
        const dG = setInterval(hG, 1e3);
        let JG = setTimeout((() => {
          console.log("AD: Nitro video got no result"), yG(!1)
        }), 1e4);
        document.addEventListener("nitroAds.adResult", VG), document.addEventListener("nitroAds.rendered", pG), document.addEventListener("nitroAds.complete", fG), wG.appendChild(LG), wG.classList.add("NitroVideo"), ZG.appendChild(QG), ZG.style.display = "flex", window.adStartSoPause(null, {
          preventMovement: !0
        }), Promise.resolve(window.nitroAds.createAd(kG, {
          format: "display",
          outstream: "only",
          resultTimeout: 8e3
        })).catch((GG => {
          console.error("AD: Nitro failed to create video", GG), yG(!1)
        })), console.log("AD: Requested Nitro video")
      }
      renderBanner(GG) {
        const {
          divId: bG,
          width: ZG,
          height: wG
        } = GG, SG = `${bG}-nitro`;
        let LG = document.getElementById(SG);
        null === LG && (LG = document.createElement("div"), LG.id = SG, LG.className = "NitroBanner", LG.style.setProperty("--nitro-slot-width", `${ZG}px`), LG.style.setProperty("--nitro-slot-height", `${wG}px`), document.getElementById(bG).appendChild(LG));
        const yG = [
          [String(ZG), String(wG)]
        ];
        Promise.resolve(window.nitroAds.createAd(SG, {
          sizes: yG
        })).catch((GG => {
          console.error(`AD: Nitro failed to create banner ${SG}:`, GG)
        })), console.log(`AD: Requested Nitro banner ${SG}`)
      }
      displayConsentUI() {
        var GG, bG;
        null === (GG = (bG = window).__cmp) || void 0 === GG || GG.call(bG, "showModal")
      }
      addPrivacyLinks(GG) {
        var bG, ZG, wG, SG;
        const LG = document.createElement("span");
        LG.dataset.ccpaLink = "1";
        const yG = document.createElement("div");
        yG.id = "ncmp-consent-link", GG.replaceChildren(LG, yG), null === (bG = (ZG = window).__uspapi) || void 0 === bG || bG.call(ZG, "addLink", 1), null === (wG = (SG = window).__cmp) || void 0 === wG || wG.call(SG, "addConsentLink")
      }
      newPageSession() {
        var GG, bG;
        null === (GG = (bG = window.nitroAds).navigate) || void 0 === GG || GG.call(bG)
      }
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);