export const id = 153;
export const ids = [153];
export const modules = {
  8142: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => qC
    });
    var QC = ZC(2909);
    const wC = [1, 8, 9],
      bC = 5,
      nC = 200,
      fC = 150;

    function oC(CC, zC) {
      let ZC = 0;
      CC("addEventListener", 2, ((CC, nC) => {
        if (!nC) return void console.warn("TCF CMP couldn't report a consent event, so our consent defaults stand");
        const fC = function(CC) {
          const zC = "useractioncomplete" === CC.eventStatus || "tcloaded" === CC.eventStatus && !!CC.tcString;
          return CC.gdprApplies && zC ? wC.every((zC => !0 === CC.purpose.consents[zC])) : null
        }(CC);
        if (null === fC) return;
        const oC = ++ZC;
        if (!fC) return void(0, QC.I)(!1);
        if ("nitro" === zC) return void(0, QC.I)(!0);
        const qC = window.__tcfapi;
        qC ? qC("getNonIABVendorConsents", 2, ((CC, zC) => {
          var wC;
          oC === ZC && (0, QC.I)(zC && !0 === (null === (wC = CC.nonIabVendorConsents) || void 0 === wC ? void 0 : wC[bC]))
        })) : console.warn("TCF CMP reported a choice but its __tcfapi is gone, so our consent defaults stand")
      }))
    }

    function qC(CC) {
      if (window.__tcfapi) return void oC(window.__tcfapi, CC);
      let zC = 0;
      const ZC = window.setInterval((() => {
        zC++;
        const QC = window.__tcfapi;
        QC ? (window.clearInterval(ZC), oC(QC, CC)) : zC >= fC && window.clearInterval(ZC)
      }), nC)
    }
  },
  8152: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      NitroSdkAdaptor: () => oC
    });
    var QC = ZC(1269),
      wC = ZC(1127),
      bC = ZC(8142),
      nC = ZC(2909);
    const fC = "NitroOutstreamVideo";
    class oC extends QC.c {
      constructor() {
        super(), this.name = "nitro", this.bannerAutoRefresh = "alwaysOn", this.videoInFlight = !1
      }
      static async setup() {
        return window.nitroAds = window.nitroAds || {
          createAd: function() {
            for (var CC = arguments.length, zC = new Array(CC), ZC = 0; ZC < CC; ZC++) zC[ZC] = arguments[ZC];
            return new Promise((CC => {
              window.nitroAds.queue.push(["createAd", zC, CC])
            }))
          },
          addUserToken: function() {
            for (var CC = arguments.length, zC = new Array(CC), ZC = 0; ZC < CC; ZC++) zC[ZC] = arguments[ZC];
            window.nitroAds.queue.push(["addUserToken", zC])
          },
          queue: []
        }, document.addEventListener("nitroAds.rendered", (CC => {
          var zC, ZC, QC;
          const wC = document.getElementById(null !== (zC = null === (ZC = CC.detail) || void 0 === ZC || null === (QC = ZC.adInfo) || void 0 === QC ? void 0 : QC.adUnitCode) && void 0 !== zC ? zC : "");
          null !== wC && void 0 !== wC && wC.classList.contains("NitroBanner") && wC.classList.toggle("NitroBannerUnfilled", "blank" === CC.detail.type)
        })), (0, nC.F)(), await (0, wC.e)("https://s.nitropay.com/ads-2842.js", {
          "data-cfasync": "false"
        }), (0, bC.b)("nitro"), new oC
      }
      playVideoAd(CC, zC) {
        this.showVideoAd(CC, CC)
      }
      playRewarded(CC, zC) {
        this.showVideoAd(CC, zC)
      }
      showVideoAd(CC, zC) {
        if (this.videoInFlight) return console.log("AD: Nitro video already playing"), void zC();
        const ZC = document.getElementById("GenericVideoWrapper"),
          QC = document.getElementById("GenericVideoInner");
        if (null === ZC || null === QC) return void zC();
        this.videoInFlight = !0;
        let wC = !1;
        const bC = document.createElement("div");
        bC.id = fC, bC.className = "NitroVideoPlacement";
        const nC = nC => {
          if (!wC) {
            wC = !0, clearTimeout(PC), clearInterval(pC), document.removeEventListener("nitroAds.adResult", FC), document.removeEventListener("nitroAds.rendered", WC), document.removeEventListener("nitroAds.complete", NC);
            try {
              MC.remove(), bC.querySelectorAll("video").forEach((CC => {
                CC.pause()
              })), bC.remove(), QC.classList.remove("NitroVideo"), ZC.style.display = "none"
            } catch (fC) {
              console.error("AD: Error tearing down Nitro video", fC)
            } finally {
              this.videoInFlight = !1, window.adCompleteSoResume(), nC ? CC() : zC()
            }
          }
        };
        let oC = !1;
        const qC = (CC, zC) => {
            if (!oC) {
              if (!CC) return console.log(`AD: Nitro video not filled: ${zC}`), void nC(!1);
              oC = !0, clearTimeout(PC), PC = setTimeout((() => {
                console.log("AD: Nitro video never completed"), nC(!1)
              }), 12e4)
            }
          },
          FC = CC => {
            var zC;
            (null === (zC = CC.detail) || void 0 === zC ? void 0 : zC.id) === fC && qC("filled" === CC.detail.status, CC.detail.status)
          },
          WC = CC => {
            var zC, ZC;
            (null === (zC = CC.detail) || void 0 === zC || null === (ZC = zC.adInfo) || void 0 === ZC ? void 0 : ZC.adUnitCode) === fC && qC("blank" !== CC.detail.type, CC.detail.type)
          },
          NC = CC => {
            var zC;
            (null === (zC = CC.detail) || void 0 === zC ? void 0 : zC.adUnitCode) === fC && nC(!0)
          },
          MC = document.createElement("button");
        MC.className = "NitroVideoSkip", MC.disabled = !0, MC.addEventListener("click", (() => {
          console.log("AD: Nitro video skipped"), nC(!0)
        }));
        let gC = Math.ceil(15);
        const SC = () => {
          if (gC <= 0) return clearInterval(pC), MC.textContent = "Skip Ad", void(MC.disabled = !1);
          MC.textContent = `Skip ad in ${gC}s`, gC--
        };
        SC();
        const pC = setInterval(SC, 1e3);
        let PC = setTimeout((() => {
          console.log("AD: Nitro video got no result"), nC(!1)
        }), 1e4);
        document.addEventListener("nitroAds.adResult", FC), document.addEventListener("nitroAds.rendered", WC), document.addEventListener("nitroAds.complete", NC), QC.appendChild(bC), QC.classList.add("NitroVideo"), ZC.appendChild(MC), ZC.style.display = "flex", window.adStartSoPause(null, {
          preventMovement: !0
        }), Promise.resolve(window.nitroAds.createAd(fC, {
          format: "display",
          outstream: "only",
          resultTimeout: 8e3
        })).catch((CC => {
          console.error("AD: Nitro failed to create video", CC), nC(!1)
        })), console.log("AD: Requested Nitro video")
      }
      renderBanner(CC) {
        const {
          divId: zC,
          width: ZC,
          height: QC
        } = CC, wC = `${zC}-nitro`;
        let bC = document.getElementById(wC);
        null === bC && (bC = document.createElement("div"), bC.id = wC, bC.className = "NitroBanner", bC.style.setProperty("--nitro-slot-width", `${ZC}px`), bC.style.setProperty("--nitro-slot-height", `${QC}px`), document.getElementById(zC).appendChild(bC));
        const nC = [
          [String(ZC), String(QC)]
        ];
        Promise.resolve(window.nitroAds.createAd(wC, {
          sizes: nC
        })).catch((CC => {
          console.error(`AD: Nitro failed to create banner ${wC}:`, CC)
        })), console.log(`AD: Requested Nitro banner ${wC}`)
      }
      displayConsentUI() {
        var CC, zC;
        null === (CC = (zC = window).__cmp) || void 0 === CC || CC.call(zC, "showModal")
      }
      addPrivacyLinks(CC) {
        var zC, ZC, QC, wC;
        const bC = document.createElement("span");
        bC.dataset.ccpaLink = "1";
        const nC = document.createElement("div");
        nC.id = "ncmp-consent-link", CC.replaceChildren(bC, nC), null === (zC = (ZC = window).__uspapi) || void 0 === zC || zC.call(ZC, "addLink", 1), null === (QC = (wC = window).__cmp) || void 0 === QC || QC.call(wC, "addConsentLink")
      }
      newPageSession() {
        var CC, zC;
        null === (CC = (zC = window.nitroAds).navigate) || void 0 === CC || CC.call(zC)
      }
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);