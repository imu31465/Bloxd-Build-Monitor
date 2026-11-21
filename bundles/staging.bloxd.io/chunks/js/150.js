export const id = 150;
export const ids = [150];
export const modules = {
  7936: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      NitroSdkAdaptor: () => DQ
    });
    var LQ = wQ(1335),
      qQ = wQ(1196);
    const oQ = "NitroOutstreamVideo";
    class DQ extends LQ.b {
      constructor() {
        super(), this.name = "nitro", this.bannerAutoRefresh = "alwaysOn", this.videoInFlight = !1
      }
      static async setup() {
        return window.nitroAds = window.nitroAds || {
          createAd: function() {
            for (var QQ = arguments.length, FQ = new Array(QQ), wQ = 0; wQ < QQ; wQ++) FQ[wQ] = arguments[wQ];
            return new Promise((QQ => {
              window.nitroAds.queue.push(["createAd", FQ, QQ])
            }))
          },
          addUserToken: function() {
            for (var QQ = arguments.length, FQ = new Array(QQ), wQ = 0; wQ < QQ; wQ++) FQ[wQ] = arguments[wQ];
            window.nitroAds.queue.push(["addUserToken", FQ])
          },
          queue: []
        }, document.addEventListener("nitroAds.rendered", (QQ => {
          var FQ, wQ, LQ;
          const qQ = document.getElementById(null !== (FQ = null === (wQ = QQ.detail) || void 0 === wQ || null === (LQ = wQ.adInfo) || void 0 === LQ ? void 0 : LQ.adUnitCode) && void 0 !== FQ ? FQ : "");
          null !== qQ && void 0 !== qQ && qQ.classList.contains("NitroBanner") && qQ.classList.toggle("NitroBannerUnfilled", "blank" === QQ.detail.type)
        })), await (0, qQ.e)("https://s.nitropay.com/ads-2842.js", {
          "data-cfasync": "false"
        }), new DQ
      }
      playVideoAd(QQ, FQ) {
        this.showVideoAd(QQ, QQ)
      }
      playRewarded(QQ, FQ) {
        this.showVideoAd(QQ, FQ)
      }
      showVideoAd(QQ, FQ) {
        if (this.videoInFlight) return console.log("AD: Nitro video already playing"), void FQ();
        const wQ = document.getElementById("GenericVideoWrapper"),
          LQ = document.getElementById("GenericVideoInner");
        if (null === wQ || null === LQ) return void FQ();
        this.videoInFlight = !0;
        let qQ = !1;
        const DQ = document.createElement("div");
        DQ.id = oQ, DQ.className = "NitroVideoPlacement";
        const kQ = oQ => {
          if (!qQ) {
            qQ = !0, clearTimeout(eQ), clearInterval(tQ), document.removeEventListener("nitroAds.adResult", uQ), document.removeEventListener("nitroAds.rendered", HQ), document.removeEventListener("nitroAds.complete", bQ);
            try {
              YQ.remove(), DQ.querySelectorAll("video").forEach((QQ => {
                QQ.pause()
              })), DQ.remove(), LQ.classList.remove("NitroVideo"), wQ.style.display = "none"
            } catch (kQ) {
              console.error("AD: Error tearing down Nitro video", kQ)
            } finally {
              this.videoInFlight = !1, window.adCompleteSoResume(), oQ ? QQ() : FQ()
            }
          }
        };
        let vQ = !1;
        const mQ = (QQ, FQ) => {
            if (!vQ) {
              if (!QQ) return console.log(`AD: Nitro video not filled: ${FQ}`), void kQ(!1);
              vQ = !0, clearTimeout(eQ), eQ = setTimeout((() => {
                console.log("AD: Nitro video never completed"), kQ(!1)
              }), 12e4)
            }
          },
          uQ = QQ => {
            var FQ;
            (null === (FQ = QQ.detail) || void 0 === FQ ? void 0 : FQ.id) === oQ && mQ("filled" === QQ.detail.status, QQ.detail.status)
          },
          HQ = QQ => {
            var FQ, wQ;
            (null === (FQ = QQ.detail) || void 0 === FQ || null === (wQ = FQ.adInfo) || void 0 === wQ ? void 0 : wQ.adUnitCode) === oQ && mQ("blank" !== QQ.detail.type, QQ.detail.type)
          },
          bQ = QQ => {
            var FQ;
            (null === (FQ = QQ.detail) || void 0 === FQ ? void 0 : FQ.adUnitCode) === oQ && kQ(!0)
          },
          YQ = document.createElement("button");
        YQ.className = "NitroVideoSkip", YQ.disabled = !0, YQ.addEventListener("click", (() => {
          console.log("AD: Nitro video skipped"), kQ(!0)
        }));
        let xQ = Math.ceil(15);
        const AQ = () => {
          if (xQ <= 0) return clearInterval(tQ), YQ.textContent = "Skip Ad", void(YQ.disabled = !1);
          YQ.textContent = `Skip ad in ${xQ}s`, xQ--
        };
        AQ();
        const tQ = setInterval(AQ, 1e3);
        let eQ = setTimeout((() => {
          console.log("AD: Nitro video got no result"), kQ(!1)
        }), 1e4);
        document.addEventListener("nitroAds.adResult", uQ), document.addEventListener("nitroAds.rendered", HQ), document.addEventListener("nitroAds.complete", bQ), LQ.appendChild(DQ), LQ.classList.add("NitroVideo"), wQ.appendChild(YQ), wQ.style.display = "flex", window.adStartSoPause(null, {
          preventMovement: !0
        }), Promise.resolve(window.nitroAds.createAd(oQ, {
          format: "display",
          outstream: "only",
          resultTimeout: 8e3
        })).catch((QQ => {
          console.error("AD: Nitro failed to create video", QQ), kQ(!1)
        })), console.log("AD: Requested Nitro video")
      }
      renderBanner(QQ) {
        const {
          divId: FQ,
          width: wQ,
          height: LQ
        } = QQ, qQ = `${FQ}-nitro`;
        let oQ = document.getElementById(qQ);
        null === oQ && (oQ = document.createElement("div"), oQ.id = qQ, oQ.className = "NitroBanner", oQ.style.setProperty("--nitro-slot-width", `${wQ}px`), oQ.style.setProperty("--nitro-slot-height", `${LQ}px`), document.getElementById(FQ).appendChild(oQ));
        const DQ = [
          [String(wQ), String(LQ)]
        ];
        Promise.resolve(window.nitroAds.createAd(qQ, {
          sizes: DQ
        })).catch((QQ => {
          console.error(`AD: Nitro failed to create banner ${qQ}:`, QQ)
        })), console.log(`AD: Requested Nitro banner ${qQ}`)
      }
      displayConsentUI() {
        var QQ, FQ;
        null === (QQ = (FQ = window).__cmp) || void 0 === QQ || QQ.call(FQ, "showModal")
      }
      addPrivacyLinks(QQ) {
        var FQ, wQ, LQ, qQ;
        const oQ = document.createElement("span");
        oQ.dataset.ccpaLink = "1";
        const DQ = document.createElement("div");
        DQ.id = "ncmp-consent-link", QQ.replaceChildren(oQ, DQ), null === (FQ = (wQ = window).__uspapi) || void 0 === FQ || FQ.call(wQ, "addLink", 1), null === (LQ = (qQ = window).__cmp) || void 0 === LQ || LQ.call(qQ, "addConsentLink")
      }
      newPageSession() {
        var QQ, FQ;
        null === (QQ = (FQ = window.nitroAds).navigate) || void 0 === QQ || QQ.call(FQ)
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);