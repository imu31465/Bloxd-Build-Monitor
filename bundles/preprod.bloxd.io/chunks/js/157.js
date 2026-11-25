export const id = 157;
export const ids = [157];
export const modules = {
  8504: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => PQ
    });
    var wQ = XQ(3158);
    const qQ = [1, 8, 9],
      TQ = 5,
      zQ = 200,
      sQ = 150;

    function FQ(QQ, WQ) {
      let XQ = 0;
      QQ("addEventListener", 2, ((QQ, zQ) => {
        if (!zQ) return void console.warn("TCF CMP couldn't report a consent event, so our consent defaults stand");
        const sQ = function(QQ) {
          const WQ = "useractioncomplete" === QQ.eventStatus || "tcloaded" === QQ.eventStatus && !!QQ.tcString;
          return QQ.gdprApplies && WQ ? qQ.every((WQ => !0 === QQ.purpose.consents[WQ])) : null
        }(QQ);
        if (null === sQ) return;
        const FQ = ++XQ;
        if (!sQ) return void(0, wQ.updateAnalyticsConsent)(!1);
        if ("nitro" === WQ) return void(0, wQ.updateAnalyticsConsent)(!0);
        const PQ = window.__tcfapi;
        PQ ? PQ("getNonIABVendorConsents", 2, ((QQ, WQ) => {
          var qQ;
          FQ === XQ && (0, wQ.updateAnalyticsConsent)(WQ && !0 === (null === (qQ = QQ.nonIabVendorConsents) || void 0 === qQ ? void 0 : qQ[TQ]))
        })) : console.warn("TCF CMP reported a choice but its __tcfapi is gone, so our consent defaults stand")
      }))
    }

    function PQ(QQ) {
      if (window.__tcfapi) return void FQ(window.__tcfapi, QQ);
      let WQ = 0;
      const XQ = window.setInterval((() => {
        WQ++;
        const wQ = window.__tcfapi;
        wQ ? (window.clearInterval(XQ), FQ(wQ, QQ)) : WQ >= sQ && window.clearInterval(XQ)
      }), zQ)
    }
  },
  8524: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      NitroSdkAdaptor: () => FQ
    });
    var wQ = XQ(1368),
      qQ = XQ(1216),
      TQ = XQ(8504),
      zQ = XQ(3158);
    const sQ = "NitroOutstreamVideo";
    class FQ extends wQ.c {
      constructor() {
        super(), this.name = "nitro", this.bannerAutoRefresh = "alwaysOn", this.videoInFlight = !1
      }
      static async setup() {
        return window.nitroAds = window.nitroAds || {
          createAd: function() {
            for (var QQ = arguments.length, WQ = new Array(QQ), XQ = 0; XQ < QQ; XQ++) WQ[XQ] = arguments[XQ];
            return new Promise((QQ => {
              window.nitroAds.queue.push(["createAd", WQ, QQ])
            }))
          },
          addUserToken: function() {
            for (var QQ = arguments.length, WQ = new Array(QQ), XQ = 0; XQ < QQ; XQ++) WQ[XQ] = arguments[XQ];
            window.nitroAds.queue.push(["addUserToken", WQ])
          },
          queue: []
        }, document.addEventListener("nitroAds.rendered", (QQ => {
          var WQ, XQ, wQ;
          const qQ = document.getElementById(null !== (WQ = null === (XQ = QQ.detail) || void 0 === XQ || null === (wQ = XQ.adInfo) || void 0 === wQ ? void 0 : wQ.adUnitCode) && void 0 !== WQ ? WQ : "");
          null !== qQ && void 0 !== qQ && qQ.classList.contains("NitroBanner") && qQ.classList.toggle("NitroBannerUnfilled", "blank" === QQ.detail.type)
        })), (0, zQ.setUpGtag)(), await (0, qQ.d)("https://s.nitropay.com/ads-2842.js", {
          "data-cfasync": "false"
        }), (0, TQ.e)("nitro"), new FQ
      }
      playVideoAd(QQ, WQ) {
        this.showVideoAd(QQ, QQ)
      }
      playRewarded(QQ, WQ) {
        this.showVideoAd(QQ, WQ)
      }
      showVideoAd(QQ, WQ) {
        if (this.videoInFlight) return console.log("AD: Nitro video already playing"), void WQ();
        const XQ = document.getElementById("GenericVideoWrapper"),
          wQ = document.getElementById("GenericVideoInner");
        if (null === XQ || null === wQ) return void WQ();
        this.videoInFlight = !0;
        let qQ = !1;
        const TQ = document.createElement("div");
        TQ.id = sQ, TQ.className = "NitroVideoPlacement";
        const zQ = zQ => {
          if (!qQ) {
            qQ = !0, clearTimeout(VQ), clearInterval(yQ), document.removeEventListener("nitroAds.adResult", gQ), document.removeEventListener("nitroAds.rendered", JQ), document.removeEventListener("nitroAds.complete", rQ);
            try {
              IQ.remove(), TQ.querySelectorAll("video").forEach((QQ => {
                QQ.pause()
              })), TQ.remove(), wQ.classList.remove("NitroVideo"), XQ.style.display = "none"
            } catch (sQ) {
              console.error("AD: Error tearing down Nitro video", sQ)
            } finally {
              this.videoInFlight = !1, window.adCompleteSoResume(), zQ ? QQ() : WQ()
            }
          }
        };
        let FQ = !1;
        const PQ = (QQ, WQ) => {
            if (!FQ) {
              if (!QQ) return console.log(`AD: Nitro video not filled: ${WQ}`), void zQ(!1);
              FQ = !0, clearTimeout(VQ), VQ = setTimeout((() => {
                console.log("AD: Nitro video never completed"), zQ(!1)
              }), 12e4)
            }
          },
          gQ = QQ => {
            var WQ;
            (null === (WQ = QQ.detail) || void 0 === WQ ? void 0 : WQ.id) === sQ && PQ("filled" === QQ.detail.status, QQ.detail.status)
          },
          JQ = QQ => {
            var WQ, XQ;
            (null === (WQ = QQ.detail) || void 0 === WQ || null === (XQ = WQ.adInfo) || void 0 === XQ ? void 0 : XQ.adUnitCode) === sQ && PQ("blank" !== QQ.detail.type, QQ.detail.type)
          },
          rQ = QQ => {
            var WQ;
            (null === (WQ = QQ.detail) || void 0 === WQ ? void 0 : WQ.adUnitCode) === sQ && zQ(!0)
          },
          IQ = document.createElement("button");
        IQ.className = "NitroVideoSkip", IQ.disabled = !0, IQ.addEventListener("click", (() => {
          console.log("AD: Nitro video skipped"), zQ(!0)
        }));
        let jQ = Math.ceil(15);
        const BQ = () => {
          if (jQ <= 0) return clearInterval(yQ), IQ.textContent = "Skip Ad", void(IQ.disabled = !1);
          IQ.textContent = `Skip ad in ${jQ}s`, jQ--
        };
        BQ();
        const yQ = setInterval(BQ, 1e3);
        let VQ = setTimeout((() => {
          console.log("AD: Nitro video got no result"), zQ(!1)
        }), 1e4);
        document.addEventListener("nitroAds.adResult", gQ), document.addEventListener("nitroAds.rendered", JQ), document.addEventListener("nitroAds.complete", rQ), wQ.appendChild(TQ), wQ.classList.add("NitroVideo"), XQ.appendChild(IQ), XQ.style.display = "flex", window.adStartSoPause(null, {
          preventMovement: !0
        }), Promise.resolve(window.nitroAds.createAd(sQ, {
          format: "display",
          outstream: "only",
          resultTimeout: 8e3
        })).catch((QQ => {
          console.error("AD: Nitro failed to create video", QQ), zQ(!1)
        })), console.log("AD: Requested Nitro video")
      }
      renderBanner(QQ) {
        const {
          divId: WQ,
          width: XQ,
          height: wQ
        } = QQ, qQ = `${WQ}-nitro`;
        let TQ = document.getElementById(qQ);
        null === TQ && (TQ = document.createElement("div"), TQ.id = qQ, TQ.className = "NitroBanner", TQ.style.setProperty("--nitro-slot-width", `${XQ}px`), TQ.style.setProperty("--nitro-slot-height", `${wQ}px`), document.getElementById(WQ).appendChild(TQ));
        const zQ = [
          [String(XQ), String(wQ)]
        ];
        Promise.resolve(window.nitroAds.createAd(qQ, {
          sizes: zQ
        })).catch((QQ => {
          console.error(`AD: Nitro failed to create banner ${qQ}:`, QQ)
        })), console.log(`AD: Requested Nitro banner ${qQ}`)
      }
      displayConsentUI() {
        var QQ, WQ;
        null === (QQ = (WQ = window).__cmp) || void 0 === QQ || QQ.call(WQ, "showModal")
      }
      addPrivacyLinks(QQ) {
        var WQ, XQ, wQ, qQ;
        const TQ = document.createElement("span");
        TQ.dataset.ccpaLink = "1";
        const zQ = document.createElement("div");
        zQ.id = "ncmp-consent-link", QQ.replaceChildren(TQ, zQ), null === (WQ = (XQ = window).__uspapi) || void 0 === WQ || WQ.call(XQ, "addLink", 1), null === (wQ = (qQ = window).__cmp) || void 0 === wQ || wQ.call(qQ, "addConsentLink")
      }
      newPageSession() {
        var QQ, WQ;
        null === (QQ = (WQ = window.nitroAds).navigate) || void 0 === QQ || QQ.call(WQ)
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);