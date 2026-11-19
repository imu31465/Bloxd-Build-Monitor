export const id = 149;
export const ids = [149];
export const modules = {
  7827: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      NitroSdkAdaptor: () => fD
    });
    var ID = cD(1308),
      pD = cD(1181);
    const iD = "NitroOutstreamVideo";
    class fD extends ID.e {
      constructor() {
        super(), this.name = "nitro", this.bannerAutoRefresh = "alwaysOn", this.videoInFlight = !1
      }
      static async setup() {
        return window.nitroAds = window.nitroAds || {
          createAd: function() {
            for (var DD = arguments.length, CD = new Array(DD), cD = 0; cD < DD; cD++) CD[cD] = arguments[cD];
            return new Promise((DD => {
              window.nitroAds.queue.push(["createAd", CD, DD])
            }))
          },
          addUserToken: function() {
            for (var DD = arguments.length, CD = new Array(DD), cD = 0; cD < DD; cD++) CD[cD] = arguments[cD];
            window.nitroAds.queue.push(["addUserToken", CD])
          },
          queue: []
        }, document.addEventListener("nitroAds.rendered", (DD => {
          var CD, cD, ID;
          const pD = document.getElementById(null !== (CD = null === (cD = DD.detail) || void 0 === cD || null === (ID = cD.adInfo) || void 0 === ID ? void 0 : ID.adUnitCode) && void 0 !== CD ? CD : "");
          null !== pD && void 0 !== pD && pD.classList.contains("NitroBanner") && pD.classList.toggle("NitroBannerUnfilled", "blank" === DD.detail.type)
        })), await (0, pD.e)("https://s.nitropay.com/ads-2842.js", {
          "data-cfasync": "false"
        }), new fD
      }
      playVideoAd(DD, CD) {
        this.showVideoAd(DD, DD)
      }
      playRewarded(DD, CD) {
        this.showVideoAd(DD, CD)
      }
      showVideoAd(DD, CD) {
        if (this.videoInFlight) return console.log("AD: Nitro video already playing"), void CD();
        const cD = document.getElementById("GenericVideoWrapper"),
          ID = document.getElementById("GenericVideoInner");
        if (null === cD || null === ID) return void CD();
        this.videoInFlight = !0;
        let pD = !1;
        const fD = document.createElement("div");
        fD.id = iD, fD.className = "NitroVideoPlacement";
        const bD = iD => {
          if (!pD) {
            pD = !0, clearTimeout(vD), clearInterval(oD), document.removeEventListener("nitroAds.adResult", SD), document.removeEventListener("nitroAds.rendered", BD), document.removeEventListener("nitroAds.complete", yD);
            try {
              MD.remove(), fD.querySelectorAll("video").forEach((DD => {
                DD.pause()
              })), fD.remove(), ID.classList.remove("NitroVideo"), cD.style.display = "none"
            } catch (bD) {
              console.error("AD: Error tearing down Nitro video", bD)
            } finally {
              this.videoInFlight = !1, window.adCompleteSoResume(), iD ? DD() : CD()
            }
          }
        };
        let QD = !1;
        const wD = (DD, CD) => {
            if (!QD) {
              if (!DD) return console.log(`AD: Nitro video not filled: ${CD}`), void bD(!1);
              QD = !0, clearTimeout(vD), vD = setTimeout((() => {
                console.log("AD: Nitro video never completed"), bD(!1)
              }), 12e4)
            }
          },
          SD = DD => {
            var CD;
            (null === (CD = DD.detail) || void 0 === CD ? void 0 : CD.id) === iD && wD("filled" === DD.detail.status, DD.detail.status)
          },
          BD = DD => {
            var CD, cD;
            (null === (CD = DD.detail) || void 0 === CD || null === (cD = CD.adInfo) || void 0 === cD ? void 0 : cD.adUnitCode) === iD && wD("blank" !== DD.detail.type, DD.detail.type)
          },
          yD = DD => {
            var CD;
            (null === (CD = DD.detail) || void 0 === CD ? void 0 : CD.adUnitCode) === iD && bD(!0)
          },
          MD = document.createElement("button");
        MD.className = "NitroVideoSkip", MD.disabled = !0, MD.addEventListener("click", (() => {
          console.log("AD: Nitro video skipped"), bD(!0)
        }));
        let tD = Math.ceil(15);
        const ZD = () => {
          if (tD <= 0) return clearInterval(oD), MD.textContent = "Skip Ad", void(MD.disabled = !1);
          MD.textContent = `Skip ad in ${tD}s`, tD--
        };
        ZD();
        const oD = setInterval(ZD, 1e3);
        let vD = setTimeout((() => {
          console.log("AD: Nitro video got no result"), bD(!1)
        }), 1e4);
        document.addEventListener("nitroAds.adResult", SD), document.addEventListener("nitroAds.rendered", BD), document.addEventListener("nitroAds.complete", yD), ID.appendChild(fD), ID.classList.add("NitroVideo"), cD.appendChild(MD), cD.style.display = "flex", window.adStartSoPause(null, {
          preventMovement: !0
        }), Promise.resolve(window.nitroAds.createAd(iD, {
          format: "display",
          outstream: "only",
          resultTimeout: 8e3
        })).catch((DD => {
          console.error("AD: Nitro failed to create video", DD), bD(!1)
        })), console.log("AD: Requested Nitro video")
      }
      renderBanner(DD) {
        const {
          divId: CD,
          width: cD,
          height: ID
        } = DD, pD = `${CD}-nitro`;
        let iD = document.getElementById(pD);
        null === iD && (iD = document.createElement("div"), iD.id = pD, iD.className = "NitroBanner", iD.style.setProperty("--nitro-slot-width", `${cD}px`), iD.style.setProperty("--nitro-slot-height", `${ID}px`), document.getElementById(CD).appendChild(iD));
        const fD = [
          [String(cD), String(ID)]
        ];
        Promise.resolve(window.nitroAds.createAd(pD, {
          sizes: fD
        })).catch((DD => {
          console.error(`AD: Nitro failed to create banner ${pD}:`, DD)
        })), console.log(`AD: Requested Nitro banner ${pD}`)
      }
      displayConsentUI() {
        var DD, CD;
        null === (DD = (CD = window).__cmp) || void 0 === DD || DD.call(CD, "showModal")
      }
      addPrivacyLinks(DD) {
        var CD, cD, ID, pD;
        const iD = document.createElement("span");
        iD.dataset.ccpaLink = "1";
        const fD = document.createElement("div");
        fD.id = "ncmp-consent-link", DD.replaceChildren(iD, fD), null === (CD = (cD = window).__uspapi) || void 0 === CD || CD.call(cD, "addLink", 1), null === (ID = (pD = window).__cmp) || void 0 === ID || ID.call(pD, "addConsentLink")
      }
      newPageSession() {
        var DD, CD;
        null === (DD = (CD = window.nitroAds).navigate) || void 0 === DD || DD.call(CD)
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);