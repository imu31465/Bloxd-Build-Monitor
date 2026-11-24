export const id = 155;
export const ids = [155];
export const modules = {
  8243: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => kT
    });
    var WT = mT(3047);
    const zT = [1, 8, 9],
      MT = 5,
      gT = 200,
      nT = 150;

    function HT(TT, UT) {
      let mT = 0;
      TT("addEventListener", 2, ((TT, gT) => {
        if (!gT) return void console.warn("TCF CMP couldn't report a consent event, so our consent defaults stand");
        const nT = function(TT) {
          const UT = "useractioncomplete" === TT.eventStatus || "tcloaded" === TT.eventStatus && !!TT.tcString;
          return TT.gdprApplies && UT ? zT.every((UT => !0 === TT.purpose.consents[UT])) : null
        }(TT);
        if (null === nT) return;
        const HT = ++mT;
        if (!nT) return void(0, WT.updateAnalyticsConsent)(!1);
        if ("nitro" === UT) return void(0, WT.updateAnalyticsConsent)(!0);
        const kT = window.__tcfapi;
        kT ? kT("getNonIABVendorConsents", 2, ((TT, UT) => {
          var zT;
          HT === mT && (0, WT.updateAnalyticsConsent)(UT && !0 === (null === (zT = TT.nonIabVendorConsents) || void 0 === zT ? void 0 : zT[MT]))
        })) : console.warn("TCF CMP reported a choice but its __tcfapi is gone, so our consent defaults stand")
      }))
    }

    function kT(TT) {
      if (window.__tcfapi) return void HT(window.__tcfapi, TT);
      let UT = 0;
      const mT = window.setInterval((() => {
        UT++;
        const WT = window.__tcfapi;
        WT ? (window.clearInterval(mT), HT(WT, TT)) : UT >= nT && window.clearInterval(mT)
      }), gT)
    }
  },
  8260: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      NitroSdkAdaptor: () => HT
    });
    var WT = mT(1423),
      zT = mT(1277),
      MT = mT(8243),
      gT = mT(3047);
    const nT = "NitroOutstreamVideo";
    class HT extends WT.d {
      constructor() {
        super(), this.name = "nitro", this.bannerAutoRefresh = "alwaysOn", this.videoInFlight = !1
      }
      static async setup() {
        return window.nitroAds = window.nitroAds || {
          createAd: function() {
            for (var TT = arguments.length, UT = new Array(TT), mT = 0; mT < TT; mT++) UT[mT] = arguments[mT];
            return new Promise((TT => {
              window.nitroAds.queue.push(["createAd", UT, TT])
            }))
          },
          addUserToken: function() {
            for (var TT = arguments.length, UT = new Array(TT), mT = 0; mT < TT; mT++) UT[mT] = arguments[mT];
            window.nitroAds.queue.push(["addUserToken", UT])
          },
          queue: []
        }, document.addEventListener("nitroAds.rendered", (TT => {
          var UT, mT, WT;
          const zT = document.getElementById(null !== (UT = null === (mT = TT.detail) || void 0 === mT || null === (WT = mT.adInfo) || void 0 === WT ? void 0 : WT.adUnitCode) && void 0 !== UT ? UT : "");
          null !== zT && void 0 !== zT && zT.classList.contains("NitroBanner") && zT.classList.toggle("NitroBannerUnfilled", "blank" === TT.detail.type)
        })), (0, gT.setUpGtag)(), await (0, zT.d)("https://s.nitropay.com/ads-2842.js", {
          "data-cfasync": "false"
        }), (0, MT.b)("nitro"), new HT
      }
      playVideoAd(TT, UT) {
        this.showVideoAd(TT, TT)
      }
      playRewarded(TT, UT) {
        this.showVideoAd(TT, UT)
      }
      showVideoAd(TT, UT) {
        if (this.videoInFlight) return console.log("AD: Nitro video already playing"), void UT();
        const mT = document.getElementById("GenericVideoWrapper"),
          WT = document.getElementById("GenericVideoInner");
        if (null === mT || null === WT) return void UT();
        this.videoInFlight = !0;
        let zT = !1;
        const MT = document.createElement("div");
        MT.id = nT, MT.className = "NitroVideoPlacement";
        const gT = gT => {
          if (!zT) {
            zT = !0, clearTimeout(vT), clearInterval(cT), document.removeEventListener("nitroAds.adResult", jT), document.removeEventListener("nitroAds.rendered", lT), document.removeEventListener("nitroAds.complete", LT);
            try {
              pT.remove(), MT.querySelectorAll("video").forEach((TT => {
                TT.pause()
              })), MT.remove(), WT.classList.remove("NitroVideo"), mT.style.display = "none"
            } catch (nT) {
              console.error("AD: Error tearing down Nitro video", nT)
            } finally {
              this.videoInFlight = !1, window.adCompleteSoResume(), gT ? TT() : UT()
            }
          }
        };
        let HT = !1;
        const kT = (TT, UT) => {
            if (!HT) {
              if (!TT) return console.log(`AD: Nitro video not filled: ${UT}`), void gT(!1);
              HT = !0, clearTimeout(vT), vT = setTimeout((() => {
                console.log("AD: Nitro video never completed"), gT(!1)
              }), 12e4)
            }
          },
          jT = TT => {
            var UT;
            (null === (UT = TT.detail) || void 0 === UT ? void 0 : UT.id) === nT && kT("filled" === TT.detail.status, TT.detail.status)
          },
          lT = TT => {
            var UT, mT;
            (null === (UT = TT.detail) || void 0 === UT || null === (mT = UT.adInfo) || void 0 === mT ? void 0 : mT.adUnitCode) === nT && kT("blank" !== TT.detail.type, TT.detail.type)
          },
          LT = TT => {
            var UT;
            (null === (UT = TT.detail) || void 0 === UT ? void 0 : UT.adUnitCode) === nT && gT(!0)
          },
          pT = document.createElement("button");
        pT.className = "NitroVideoSkip", pT.disabled = !0, pT.addEventListener("click", (() => {
          console.log("AD: Nitro video skipped"), gT(!0)
        }));
        let BT = Math.ceil(15);
        const ZT = () => {
          if (BT <= 0) return clearInterval(cT), pT.textContent = "Skip Ad", void(pT.disabled = !1);
          pT.textContent = `Skip ad in ${BT}s`, BT--
        };
        ZT();
        const cT = setInterval(ZT, 1e3);
        let vT = setTimeout((() => {
          console.log("AD: Nitro video got no result"), gT(!1)
        }), 1e4);
        document.addEventListener("nitroAds.adResult", jT), document.addEventListener("nitroAds.rendered", lT), document.addEventListener("nitroAds.complete", LT), WT.appendChild(MT), WT.classList.add("NitroVideo"), mT.appendChild(pT), mT.style.display = "flex", window.adStartSoPause(null, {
          preventMovement: !0
        }), Promise.resolve(window.nitroAds.createAd(nT, {
          format: "display",
          outstream: "only",
          resultTimeout: 8e3
        })).catch((TT => {
          console.error("AD: Nitro failed to create video", TT), gT(!1)
        })), console.log("AD: Requested Nitro video")
      }
      renderBanner(TT) {
        const {
          divId: UT,
          width: mT,
          height: WT
        } = TT, zT = `${UT}-nitro`;
        let MT = document.getElementById(zT);
        null === MT && (MT = document.createElement("div"), MT.id = zT, MT.className = "NitroBanner", MT.style.setProperty("--nitro-slot-width", `${mT}px`), MT.style.setProperty("--nitro-slot-height", `${WT}px`), document.getElementById(UT).appendChild(MT));
        const gT = [
          [String(mT), String(WT)]
        ];
        Promise.resolve(window.nitroAds.createAd(zT, {
          sizes: gT
        })).catch((TT => {
          console.error(`AD: Nitro failed to create banner ${zT}:`, TT)
        })), console.log(`AD: Requested Nitro banner ${zT}`)
      }
      displayConsentUI() {
        var TT, UT;
        null === (TT = (UT = window).__cmp) || void 0 === TT || TT.call(UT, "showModal")
      }
      addPrivacyLinks(TT) {
        var UT, mT, WT, zT;
        const MT = document.createElement("span");
        MT.dataset.ccpaLink = "1";
        const gT = document.createElement("div");
        gT.id = "ncmp-consent-link", TT.replaceChildren(MT, gT), null === (UT = (mT = window).__uspapi) || void 0 === UT || UT.call(mT, "addLink", 1), null === (WT = (zT = window).__cmp) || void 0 === WT || WT.call(zT, "addConsentLink")
      }
      newPageSession() {
        var TT, UT;
        null === (TT = (UT = window.nitroAds).navigate) || void 0 === TT || TT.call(UT)
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);