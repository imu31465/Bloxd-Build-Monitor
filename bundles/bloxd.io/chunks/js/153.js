export const id = 153;
export const ids = [153];
export const modules = {
  8151: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => gD
    });
    var pD = wD(2901);
    const sD = [1, 8, 9],
      KD = 5,
      rD = 200,
      LD = 150;

    function cD(DD, zD) {
      let wD = 0;
      DD("addEventListener", 2, ((DD, rD) => {
        if (!rD) return void console.warn("TCF CMP couldn't report a consent event, so our consent defaults stand");
        const LD = function(DD) {
          const zD = "useractioncomplete" === DD.eventStatus || "tcloaded" === DD.eventStatus && !!DD.tcString;
          return DD.gdprApplies && zD ? sD.every((zD => !0 === DD.purpose.consents[zD])) : null
        }(DD);
        if (null === LD) return;
        const cD = ++wD;
        if (!LD) return void(0, pD.H)(!1);
        if ("nitro" === zD) return void(0, pD.H)(!0);
        const gD = window.__tcfapi;
        gD ? gD("getNonIABVendorConsents", 2, ((DD, zD) => {
          var sD;
          cD === wD && (0, pD.H)(zD && !0 === (null === (sD = DD.nonIabVendorConsents) || void 0 === sD ? void 0 : sD[KD]))
        })) : console.warn("TCF CMP reported a choice but its __tcfapi is gone, so our consent defaults stand")
      }))
    }

    function gD(DD) {
      if (window.__tcfapi) return void cD(window.__tcfapi, DD);
      let zD = 0;
      const wD = window.setInterval((() => {
        zD++;
        const pD = window.__tcfapi;
        pD ? (window.clearInterval(wD), cD(pD, DD)) : zD >= LD && window.clearInterval(wD)
      }), rD)
    }
  },
  8165: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      NitroSdkAdaptor: () => cD
    });
    var pD = wD(1326),
      sD = wD(1186),
      KD = wD(8151),
      rD = wD(2901);
    const LD = "NitroOutstreamVideo";
    class cD extends pD.b {
      constructor() {
        super(), this.name = "nitro", this.bannerAutoRefresh = "alwaysOn", this.videoInFlight = !1
      }
      static async setup() {
        return window.nitroAds = window.nitroAds || {
          createAd: function() {
            for (var DD = arguments.length, zD = new Array(DD), wD = 0; wD < DD; wD++) zD[wD] = arguments[wD];
            return new Promise((DD => {
              window.nitroAds.queue.push(["createAd", zD, DD])
            }))
          },
          addUserToken: function() {
            for (var DD = arguments.length, zD = new Array(DD), wD = 0; wD < DD; wD++) zD[wD] = arguments[wD];
            window.nitroAds.queue.push(["addUserToken", zD])
          },
          queue: []
        }, document.addEventListener("nitroAds.rendered", (DD => {
          var zD, wD, pD;
          const sD = document.getElementById(null !== (zD = null === (wD = DD.detail) || void 0 === wD || null === (pD = wD.adInfo) || void 0 === pD ? void 0 : pD.adUnitCode) && void 0 !== zD ? zD : "");
          null !== sD && void 0 !== sD && sD.classList.contains("NitroBanner") && sD.classList.toggle("NitroBannerUnfilled", "blank" === DD.detail.type)
        })), (0, rD.E)(), await (0, sD.b)("https://s.nitropay.com/ads-2842.js", {
          "data-cfasync": "false"
        }), (0, KD.e)("nitro"), new cD
      }
      playVideoAd(DD, zD) {
        this.showVideoAd(DD, DD)
      }
      playRewarded(DD, zD) {
        this.showVideoAd(DD, zD)
      }
      showVideoAd(DD, zD) {
        if (this.videoInFlight) return console.log("AD: Nitro video already playing"), void zD();
        const wD = document.getElementById("GenericVideoWrapper"),
          pD = document.getElementById("GenericVideoInner");
        if (null === wD || null === pD) return void zD();
        this.videoInFlight = !0;
        let sD = !1;
        const KD = document.createElement("div");
        KD.id = LD, KD.className = "NitroVideoPlacement";
        const rD = rD => {
          if (!sD) {
            sD = !0, clearTimeout(hD), clearInterval(GD), document.removeEventListener("nitroAds.adResult", RD), document.removeEventListener("nitroAds.rendered", AD), document.removeEventListener("nitroAds.complete", UD);
            try {
              fD.remove(), KD.querySelectorAll("video").forEach((DD => {
                DD.pause()
              })), KD.remove(), pD.classList.remove("NitroVideo"), wD.style.display = "none"
            } catch (LD) {
              console.error("AD: Error tearing down Nitro video", LD)
            } finally {
              this.videoInFlight = !1, window.adCompleteSoResume(), rD ? DD() : zD()
            }
          }
        };
        let cD = !1;
        const gD = (DD, zD) => {
            if (!cD) {
              if (!DD) return console.log(`AD: Nitro video not filled: ${zD}`), void rD(!1);
              cD = !0, clearTimeout(hD), hD = setTimeout((() => {
                console.log("AD: Nitro video never completed"), rD(!1)
              }), 12e4)
            }
          },
          RD = DD => {
            var zD;
            (null === (zD = DD.detail) || void 0 === zD ? void 0 : zD.id) === LD && gD("filled" === DD.detail.status, DD.detail.status)
          },
          AD = DD => {
            var zD, wD;
            (null === (zD = DD.detail) || void 0 === zD || null === (wD = zD.adInfo) || void 0 === wD ? void 0 : wD.adUnitCode) === LD && gD("blank" !== DD.detail.type, DD.detail.type)
          },
          UD = DD => {
            var zD;
            (null === (zD = DD.detail) || void 0 === zD ? void 0 : zD.adUnitCode) === LD && rD(!0)
          },
          fD = document.createElement("button");
        fD.className = "NitroVideoSkip", fD.disabled = !0, fD.addEventListener("click", (() => {
          console.log("AD: Nitro video skipped"), rD(!0)
        }));
        let ID = Math.ceil(15);
        const BD = () => {
          if (ID <= 0) return clearInterval(GD), fD.textContent = "Skip Ad", void(fD.disabled = !1);
          fD.textContent = `Skip ad in ${ID}s`, ID--
        };
        BD();
        const GD = setInterval(BD, 1e3);
        let hD = setTimeout((() => {
          console.log("AD: Nitro video got no result"), rD(!1)
        }), 1e4);
        document.addEventListener("nitroAds.adResult", RD), document.addEventListener("nitroAds.rendered", AD), document.addEventListener("nitroAds.complete", UD), pD.appendChild(KD), pD.classList.add("NitroVideo"), wD.appendChild(fD), wD.style.display = "flex", window.adStartSoPause(null, {
          preventMovement: !0
        }), Promise.resolve(window.nitroAds.createAd(LD, {
          format: "display",
          outstream: "only",
          resultTimeout: 8e3
        })).catch((DD => {
          console.error("AD: Nitro failed to create video", DD), rD(!1)
        })), console.log("AD: Requested Nitro video")
      }
      renderBanner(DD) {
        const {
          divId: zD,
          width: wD,
          height: pD
        } = DD, sD = `${zD}-nitro`;
        let KD = document.getElementById(sD);
        null === KD && (KD = document.createElement("div"), KD.id = sD, KD.className = "NitroBanner", KD.style.setProperty("--nitro-slot-width", `${wD}px`), KD.style.setProperty("--nitro-slot-height", `${pD}px`), document.getElementById(zD).appendChild(KD));
        const rD = [
          [String(wD), String(pD)]
        ];
        Promise.resolve(window.nitroAds.createAd(sD, {
          sizes: rD
        })).catch((DD => {
          console.error(`AD: Nitro failed to create banner ${sD}:`, DD)
        })), console.log(`AD: Requested Nitro banner ${sD}`)
      }
      displayConsentUI() {
        var DD, zD;
        null === (DD = (zD = window).__cmp) || void 0 === DD || DD.call(zD, "showModal")
      }
      addPrivacyLinks(DD) {
        var zD, wD, pD, sD;
        const KD = document.createElement("span");
        KD.dataset.ccpaLink = "1";
        const rD = document.createElement("div");
        rD.id = "ncmp-consent-link", DD.replaceChildren(KD, rD), null === (zD = (wD = window).__uspapi) || void 0 === zD || zD.call(wD, "addLink", 1), null === (pD = (sD = window).__cmp) || void 0 === pD || pD.call(sD, "addConsentLink")
      }
      newPageSession() {
        var DD, zD;
        null === (DD = (zD = window.nitroAds).navigate) || void 0 === DD || DD.call(zD)
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);