export const id = 155;
export const ids = [155];
export const modules = {
  8097: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => UB
    });
    var QB = zB(3015);
    const nB = [1, 8, 9],
      dB = 5,
      IB = 200,
      NB = 150;

    function uB(BB, jB) {
      let zB = 0;
      BB("addEventListener", 2, ((BB, IB) => {
        if (!IB) return void console.warn("TCF CMP couldn't report a consent event, so our consent defaults stand");
        const NB = function(BB) {
          const jB = "useractioncomplete" === BB.eventStatus || "tcloaded" === BB.eventStatus && !!BB.tcString;
          return BB.gdprApplies && jB ? nB.every((jB => !0 === BB.purpose.consents[jB])) : null
        }(BB);
        if (null === NB) return;
        const uB = ++zB;
        if (!NB) return void(0, QB.updateAnalyticsConsent)(!1);
        if ("nitro" === jB) return void(0, QB.updateAnalyticsConsent)(!0);
        const UB = window.__tcfapi;
        UB ? UB("getNonIABVendorConsents", 2, ((BB, jB) => {
          var nB;
          uB === zB && (0, QB.updateAnalyticsConsent)(jB && !0 === (null === (nB = BB.nonIabVendorConsents) || void 0 === nB ? void 0 : nB[dB]))
        })) : console.warn("TCF CMP reported a choice but its __tcfapi is gone, so our consent defaults stand")
      }))
    }

    function UB(BB) {
      if (window.__tcfapi) return void uB(window.__tcfapi, BB);
      let jB = 0;
      const zB = window.setInterval((() => {
        jB++;
        const QB = window.__tcfapi;
        QB ? (window.clearInterval(zB), uB(QB, BB)) : jB >= NB && window.clearInterval(zB)
      }), IB)
    }
  },
  8110: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      NitroSdkAdaptor: () => uB
    });
    var QB = zB(1351),
      nB = zB(1230),
      dB = zB(8097),
      IB = zB(3015);
    const NB = "NitroOutstreamVideo";
    class uB extends QB.c {
      constructor() {
        super(), this.name = "nitro", this.bannerAutoRefresh = "alwaysOn", this.videoInFlight = !1
      }
      static async setup() {
        return window.nitroAds = window.nitroAds || {
          createAd: function() {
            for (var BB = arguments.length, jB = new Array(BB), zB = 0; zB < BB; zB++) jB[zB] = arguments[zB];
            return new Promise((BB => {
              window.nitroAds.queue.push(["createAd", jB, BB])
            }))
          },
          addUserToken: function() {
            for (var BB = arguments.length, jB = new Array(BB), zB = 0; zB < BB; zB++) jB[zB] = arguments[zB];
            window.nitroAds.queue.push(["addUserToken", jB])
          },
          queue: []
        }, document.addEventListener("nitroAds.rendered", (BB => {
          var jB, zB, QB;
          const nB = document.getElementById(null !== (jB = null === (zB = BB.detail) || void 0 === zB || null === (QB = zB.adInfo) || void 0 === QB ? void 0 : QB.adUnitCode) && void 0 !== jB ? jB : "");
          null !== nB && void 0 !== nB && nB.classList.contains("NitroBanner") && nB.classList.toggle("NitroBannerUnfilled", "blank" === BB.detail.type)
        })), (0, IB.setUpGtag)(), await (0, nB.c)("https://s.nitropay.com/ads-2842.js", {
          "data-cfasync": "false"
        }), (0, dB.b)("nitro"), new uB
      }
      playVideoAd(BB, jB) {
        this.showVideoAd(BB, BB)
      }
      playRewarded(BB, jB) {
        this.showVideoAd(BB, jB)
      }
      showVideoAd(BB, jB) {
        if (this.videoInFlight) return console.log("AD: Nitro video already playing"), void jB();
        const zB = document.getElementById("GenericVideoWrapper"),
          QB = document.getElementById("GenericVideoInner");
        if (null === zB || null === QB) return void jB();
        this.videoInFlight = !0;
        let nB = !1;
        const dB = document.createElement("div");
        dB.id = NB, dB.className = "NitroVideoPlacement";
        const IB = IB => {
          if (!nB) {
            nB = !0, clearTimeout(kB), clearInterval(yB), document.removeEventListener("nitroAds.adResult", aB), document.removeEventListener("nitroAds.rendered", pB), document.removeEventListener("nitroAds.complete", rB);
            try {
              sB.remove(), dB.querySelectorAll("video").forEach((BB => {
                BB.pause()
              })), dB.remove(), QB.classList.remove("NitroVideo"), zB.style.display = "none"
            } catch (NB) {
              console.error("AD: Error tearing down Nitro video", NB)
            } finally {
              this.videoInFlight = !1, window.adCompleteSoResume(), IB ? BB() : jB()
            }
          }
        };
        let uB = !1;
        const UB = (BB, jB) => {
            if (!uB) {
              if (!BB) return console.log(`AD: Nitro video not filled: ${jB}`), void IB(!1);
              uB = !0, clearTimeout(kB), kB = setTimeout((() => {
                console.log("AD: Nitro video never completed"), IB(!1)
              }), 12e4)
            }
          },
          aB = BB => {
            var jB;
            (null === (jB = BB.detail) || void 0 === jB ? void 0 : jB.id) === NB && UB("filled" === BB.detail.status, BB.detail.status)
          },
          pB = BB => {
            var jB, zB;
            (null === (jB = BB.detail) || void 0 === jB || null === (zB = jB.adInfo) || void 0 === zB ? void 0 : zB.adUnitCode) === NB && UB("blank" !== BB.detail.type, BB.detail.type)
          },
          rB = BB => {
            var jB;
            (null === (jB = BB.detail) || void 0 === jB ? void 0 : jB.adUnitCode) === NB && IB(!0)
          },
          sB = document.createElement("button");
        sB.className = "NitroVideoSkip", sB.disabled = !0, sB.addEventListener("click", (() => {
          console.log("AD: Nitro video skipped"), IB(!0)
        }));
        let JB = Math.ceil(15);
        const mB = () => {
          if (JB <= 0) return clearInterval(yB), sB.textContent = "Skip Ad", void(sB.disabled = !1);
          sB.textContent = `Skip ad in ${JB}s`, JB--
        };
        mB();
        const yB = setInterval(mB, 1e3);
        let kB = setTimeout((() => {
          console.log("AD: Nitro video got no result"), IB(!1)
        }), 1e4);
        document.addEventListener("nitroAds.adResult", aB), document.addEventListener("nitroAds.rendered", pB), document.addEventListener("nitroAds.complete", rB), QB.appendChild(dB), QB.classList.add("NitroVideo"), zB.appendChild(sB), zB.style.display = "flex", window.adStartSoPause(null, {
          preventMovement: !0
        }), Promise.resolve(window.nitroAds.createAd(NB, {
          format: "display",
          outstream: "only",
          resultTimeout: 8e3
        })).catch((BB => {
          console.error("AD: Nitro failed to create video", BB), IB(!1)
        })), console.log("AD: Requested Nitro video")
      }
      renderBanner(BB) {
        const {
          divId: jB,
          width: zB,
          height: QB
        } = BB, nB = `${jB}-nitro`;
        let dB = document.getElementById(nB);
        null === dB && (dB = document.createElement("div"), dB.id = nB, dB.className = "NitroBanner", dB.style.setProperty("--nitro-slot-width", `${zB}px`), dB.style.setProperty("--nitro-slot-height", `${QB}px`), document.getElementById(jB).appendChild(dB));
        const IB = [
          [String(zB), String(QB)]
        ];
        Promise.resolve(window.nitroAds.createAd(nB, {
          sizes: IB
        })).catch((BB => {
          console.error(`AD: Nitro failed to create banner ${nB}:`, BB)
        })), console.log(`AD: Requested Nitro banner ${nB}`)
      }
      displayConsentUI() {
        var BB, jB;
        null === (BB = (jB = window).__cmp) || void 0 === BB || BB.call(jB, "showModal")
      }
      addPrivacyLinks(BB) {
        var jB, zB, QB, nB;
        const dB = document.createElement("span");
        dB.dataset.ccpaLink = "1";
        const IB = document.createElement("div");
        IB.id = "ncmp-consent-link", BB.replaceChildren(dB, IB), null === (jB = (zB = window).__uspapi) || void 0 === jB || jB.call(zB, "addLink", 1), null === (QB = (nB = window).__cmp) || void 0 === QB || QB.call(nB, "addConsentLink")
      }
      newPageSession() {
        var BB, jB;
        null === (BB = (jB = window.nitroAds).navigate) || void 0 === BB || BB.call(jB)
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);