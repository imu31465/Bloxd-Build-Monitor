export const id = 155;
export const ids = [155];
export const modules = {
  8256: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => cB
    });
    var TB = ZB(3088);
    const JB = [1, 8, 9],
      oB = 5,
      GB = 200,
      vB = 150;

    function kB(BB, IB) {
      let ZB = 0;
      BB("addEventListener", 2, ((BB, GB) => {
        if (!GB) return void console.warn("TCF CMP couldn't report a consent event, so our consent defaults stand");
        const vB = function(BB) {
          const IB = "useractioncomplete" === BB.eventStatus || "tcloaded" === BB.eventStatus && !!BB.tcString;
          return BB.gdprApplies && IB ? JB.every((IB => !0 === BB.purpose.consents[IB])) : null
        }(BB);
        if (null === vB) return;
        const kB = ++ZB;
        if (!vB) return void(0, TB.updateAnalyticsConsent)(!1);
        if ("nitro" === IB) return void(0, TB.updateAnalyticsConsent)(!0);
        const cB = window.__tcfapi;
        cB ? cB("getNonIABVendorConsents", 2, ((BB, IB) => {
          var JB;
          kB === ZB && (0, TB.updateAnalyticsConsent)(IB && !0 === (null === (JB = BB.nonIabVendorConsents) || void 0 === JB ? void 0 : JB[oB]))
        })) : console.warn("TCF CMP reported a choice but its __tcfapi is gone, so our consent defaults stand")
      }))
    }

    function cB(BB) {
      if (window.__tcfapi) return void kB(window.__tcfapi, BB);
      let IB = 0;
      const ZB = window.setInterval((() => {
        IB++;
        const TB = window.__tcfapi;
        TB ? (window.clearInterval(ZB), kB(TB, BB)) : IB >= vB && window.clearInterval(ZB)
      }), GB)
    }
  },
  8272: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      NitroSdkAdaptor: () => kB
    });
    var TB = ZB(1379),
      JB = ZB(1241),
      oB = ZB(8256),
      GB = ZB(3088);
    const vB = "NitroOutstreamVideo";
    class kB extends TB.d {
      constructor() {
        super(), this.name = "nitro", this.bannerAutoRefresh = "alwaysOn", this.videoInFlight = !1
      }
      static async setup() {
        return window.nitroAds = window.nitroAds || {
          createAd: function() {
            for (var BB = arguments.length, IB = new Array(BB), ZB = 0; ZB < BB; ZB++) IB[ZB] = arguments[ZB];
            return new Promise((BB => {
              window.nitroAds.queue.push(["createAd", IB, BB])
            }))
          },
          addUserToken: function() {
            for (var BB = arguments.length, IB = new Array(BB), ZB = 0; ZB < BB; ZB++) IB[ZB] = arguments[ZB];
            window.nitroAds.queue.push(["addUserToken", IB])
          },
          queue: []
        }, document.addEventListener("nitroAds.rendered", (BB => {
          var IB, ZB, TB;
          const JB = document.getElementById(null !== (IB = null === (ZB = BB.detail) || void 0 === ZB || null === (TB = ZB.adInfo) || void 0 === TB ? void 0 : TB.adUnitCode) && void 0 !== IB ? IB : "");
          null !== JB && void 0 !== JB && JB.classList.contains("NitroBanner") && JB.classList.toggle("NitroBannerUnfilled", "blank" === BB.detail.type)
        })), (0, GB.setUpGtag)(), await (0, JB.c)("https://s.nitropay.com/ads-2842.js", {
          "data-cfasync": "false"
        }), (0, oB.c)("nitro"), new kB
      }
      playVideoAd(BB, IB) {
        this.showVideoAd(BB, BB)
      }
      playRewarded(BB, IB) {
        this.showVideoAd(BB, IB)
      }
      showVideoAd(BB, IB) {
        if (this.videoInFlight) return console.log("AD: Nitro video already playing"), void IB();
        const ZB = document.getElementById("GenericVideoWrapper"),
          TB = document.getElementById("GenericVideoInner");
        if (null === ZB || null === TB) return void IB();
        this.videoInFlight = !0;
        let JB = !1;
        const oB = document.createElement("div");
        oB.id = vB, oB.className = "NitroVideoPlacement";
        const GB = GB => {
          if (!JB) {
            JB = !0, clearTimeout(yB), clearInterval(qB), document.removeEventListener("nitroAds.adResult", nB), document.removeEventListener("nitroAds.rendered", hB), document.removeEventListener("nitroAds.complete", zB);
            try {
              FB.remove(), oB.querySelectorAll("video").forEach((BB => {
                BB.pause()
              })), oB.remove(), TB.classList.remove("NitroVideo"), ZB.style.display = "none"
            } catch (vB) {
              console.error("AD: Error tearing down Nitro video", vB)
            } finally {
              this.videoInFlight = !1, window.adCompleteSoResume(), GB ? BB() : IB()
            }
          }
        };
        let kB = !1;
        const cB = (BB, IB) => {
            if (!kB) {
              if (!BB) return console.log(`AD: Nitro video not filled: ${IB}`), void GB(!1);
              kB = !0, clearTimeout(yB), yB = setTimeout((() => {
                console.log("AD: Nitro video never completed"), GB(!1)
              }), 12e4)
            }
          },
          nB = BB => {
            var IB;
            (null === (IB = BB.detail) || void 0 === IB ? void 0 : IB.id) === vB && cB("filled" === BB.detail.status, BB.detail.status)
          },
          hB = BB => {
            var IB, ZB;
            (null === (IB = BB.detail) || void 0 === IB || null === (ZB = IB.adInfo) || void 0 === ZB ? void 0 : ZB.adUnitCode) === vB && cB("blank" !== BB.detail.type, BB.detail.type)
          },
          zB = BB => {
            var IB;
            (null === (IB = BB.detail) || void 0 === IB ? void 0 : IB.adUnitCode) === vB && GB(!0)
          },
          FB = document.createElement("button");
        FB.className = "NitroVideoSkip", FB.disabled = !0, FB.addEventListener("click", (() => {
          console.log("AD: Nitro video skipped"), GB(!0)
        }));
        let NB = Math.ceil(15);
        const gB = () => {
          if (NB <= 0) return clearInterval(qB), FB.textContent = "Skip Ad", void(FB.disabled = !1);
          FB.textContent = `Skip ad in ${NB}s`, NB--
        };
        gB();
        const qB = setInterval(gB, 1e3);
        let yB = setTimeout((() => {
          console.log("AD: Nitro video got no result"), GB(!1)
        }), 1e4);
        document.addEventListener("nitroAds.adResult", nB), document.addEventListener("nitroAds.rendered", hB), document.addEventListener("nitroAds.complete", zB), TB.appendChild(oB), TB.classList.add("NitroVideo"), ZB.appendChild(FB), ZB.style.display = "flex", window.adStartSoPause(null, {
          preventMovement: !0
        }), Promise.resolve(window.nitroAds.createAd(vB, {
          format: "display",
          outstream: "only",
          resultTimeout: 8e3
        })).catch((BB => {
          console.error("AD: Nitro failed to create video", BB), GB(!1)
        })), console.log("AD: Requested Nitro video")
      }
      renderBanner(BB) {
        const {
          divId: IB,
          width: ZB,
          height: TB
        } = BB, JB = `${IB}-nitro`;
        let oB = document.getElementById(JB);
        null === oB && (oB = document.createElement("div"), oB.id = JB, oB.className = "NitroBanner", oB.style.setProperty("--nitro-slot-width", `${ZB}px`), oB.style.setProperty("--nitro-slot-height", `${TB}px`), document.getElementById(IB).appendChild(oB));
        const GB = [
          [String(ZB), String(TB)]
        ];
        Promise.resolve(window.nitroAds.createAd(JB, {
          sizes: GB
        })).catch((BB => {
          console.error(`AD: Nitro failed to create banner ${JB}:`, BB)
        })), console.log(`AD: Requested Nitro banner ${JB}`)
      }
      displayConsentUI() {
        var BB, IB;
        null === (BB = (IB = window).__cmp) || void 0 === BB || BB.call(IB, "showModal")
      }
      addPrivacyLinks(BB) {
        var IB, ZB, TB, JB;
        const oB = document.createElement("span");
        oB.dataset.ccpaLink = "1";
        const GB = document.createElement("div");
        GB.id = "ncmp-consent-link", BB.replaceChildren(oB, GB), null === (IB = (ZB = window).__uspapi) || void 0 === IB || IB.call(ZB, "addLink", 1), null === (TB = (JB = window).__cmp) || void 0 === TB || TB.call(JB, "addConsentLink")
      }
      newPageSession() {
        var BB, IB;
        null === (BB = (IB = window.nitroAds).navigate) || void 0 === BB || BB.call(IB)
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);