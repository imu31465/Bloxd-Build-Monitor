export const id = 155;
export const ids = [155];
export const modules = {
  8352: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Ht
    });
    var Ot = Vt(2990);
    const qt = [1, 8, 9],
      Dt = 5,
      mt = 200,
      dt = 150;

    function jt(tt, et) {
      let Vt = 0;
      tt("addEventListener", 2, ((tt, mt) => {
        if (!mt) return void console.warn("TCF CMP couldn't report a consent event, so our consent defaults stand");
        const dt = function(tt) {
          const et = "useractioncomplete" === tt.eventStatus || "tcloaded" === tt.eventStatus && !!tt.tcString;
          return tt.gdprApplies && et ? qt.every((et => !0 === tt.purpose.consents[et])) : null
        }(tt);
        if (null === dt) return;
        const jt = ++Vt;
        if (!dt) return void(0, Ot.updateAnalyticsConsent)(!1);
        if ("nitro" === et) return void(0, Ot.updateAnalyticsConsent)(!0);
        const Ht = window.__tcfapi;
        Ht ? Ht("getNonIABVendorConsents", 2, ((tt, et) => {
          var qt;
          jt === Vt && (0, Ot.updateAnalyticsConsent)(et && !0 === (null === (qt = tt.nonIabVendorConsents) || void 0 === qt ? void 0 : qt[Dt]))
        })) : console.warn("TCF CMP reported a choice but its __tcfapi is gone, so our consent defaults stand")
      }))
    }

    function Ht(tt) {
      if (window.__tcfapi) return void jt(window.__tcfapi, tt);
      let et = 0;
      const Vt = window.setInterval((() => {
        et++;
        const Ot = window.__tcfapi;
        Ot ? (window.clearInterval(Vt), jt(Ot, tt)) : et >= dt && window.clearInterval(Vt)
      }), mt)
    }
  },
  8364: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      NitroSdkAdaptor: () => jt
    });
    var Ot = Vt(1419),
      qt = Vt(1275),
      Dt = Vt(8352),
      mt = Vt(2990);
    const dt = "NitroOutstreamVideo";
    class jt extends Ot.e {
      constructor() {
        super(), this.name = "nitro", this.bannerAutoRefresh = "alwaysOn", this.videoInFlight = !1
      }
      static async setup() {
        return window.nitroAds = window.nitroAds || {
          createAd: function() {
            for (var tt = arguments.length, et = new Array(tt), Vt = 0; Vt < tt; Vt++) et[Vt] = arguments[Vt];
            return new Promise((tt => {
              window.nitroAds.queue.push(["createAd", et, tt])
            }))
          },
          addUserToken: function() {
            for (var tt = arguments.length, et = new Array(tt), Vt = 0; Vt < tt; Vt++) et[Vt] = arguments[Vt];
            window.nitroAds.queue.push(["addUserToken", et])
          },
          queue: []
        }, document.addEventListener("nitroAds.rendered", (tt => {
          var et, Vt, Ot;
          const qt = document.getElementById(null !== (et = null === (Vt = tt.detail) || void 0 === Vt || null === (Ot = Vt.adInfo) || void 0 === Ot ? void 0 : Ot.adUnitCode) && void 0 !== et ? et : "");
          null !== qt && void 0 !== qt && qt.classList.contains("NitroBanner") && qt.classList.toggle("NitroBannerUnfilled", "blank" === tt.detail.type)
        })), (0, mt.setUpGtag)(), await (0, qt.d)("https://s.nitropay.com/ads-2842.js", {
          "data-cfasync": "false"
        }), (0, Dt.e)("nitro"), new jt
      }
      playVideoAd(tt, et) {
        this.showVideoAd(tt, tt)
      }
      playRewarded(tt, et) {
        this.showVideoAd(tt, et)
      }
      showVideoAd(tt, et) {
        if (this.videoInFlight) return console.log("AD: Nitro video already playing"), void et();
        const Vt = document.getElementById("GenericVideoWrapper"),
          Ot = document.getElementById("GenericVideoInner");
        if (null === Vt || null === Ot) return void et();
        this.videoInFlight = !0;
        let qt = !1;
        const Dt = document.createElement("div");
        Dt.id = dt, Dt.className = "NitroVideoPlacement";
        const mt = mt => {
          if (!qt) {
            qt = !0, clearTimeout(Nt), clearInterval(yt), document.removeEventListener("nitroAds.adResult", Xt), document.removeEventListener("nitroAds.rendered", Qt), document.removeEventListener("nitroAds.complete", lt);
            try {
              Et.remove(), Dt.querySelectorAll("video").forEach((tt => {
                tt.pause()
              })), Dt.remove(), Ot.classList.remove("NitroVideo"), Vt.style.display = "none"
            } catch (dt) {
              console.error("AD: Error tearing down Nitro video", dt)
            } finally {
              this.videoInFlight = !1, window.adCompleteSoResume(), mt ? tt() : et()
            }
          }
        };
        let jt = !1;
        const Ht = (tt, et) => {
            if (!jt) {
              if (!tt) return console.log(`AD: Nitro video not filled: ${et}`), void mt(!1);
              jt = !0, clearTimeout(Nt), Nt = setTimeout((() => {
                console.log("AD: Nitro video never completed"), mt(!1)
              }), 12e4)
            }
          },
          Xt = tt => {
            var et;
            (null === (et = tt.detail) || void 0 === et ? void 0 : et.id) === dt && Ht("filled" === tt.detail.status, tt.detail.status)
          },
          Qt = tt => {
            var et, Vt;
            (null === (et = tt.detail) || void 0 === et || null === (Vt = et.adInfo) || void 0 === Vt ? void 0 : Vt.adUnitCode) === dt && Ht("blank" !== tt.detail.type, tt.detail.type)
          },
          lt = tt => {
            var et;
            (null === (et = tt.detail) || void 0 === et ? void 0 : et.adUnitCode) === dt && mt(!0)
          },
          Et = document.createElement("button");
        Et.className = "NitroVideoSkip", Et.disabled = !0, Et.addEventListener("click", (() => {
          console.log("AD: Nitro video skipped"), mt(!0)
        }));
        let ft = Math.ceil(15);
        const wt = () => {
          if (ft <= 0) return clearInterval(yt), Et.textContent = "Skip Ad", void(Et.disabled = !1);
          Et.textContent = `Skip ad in ${ft}s`, ft--
        };
        wt();
        const yt = setInterval(wt, 1e3);
        let Nt = setTimeout((() => {
          console.log("AD: Nitro video got no result"), mt(!1)
        }), 1e4);
        document.addEventListener("nitroAds.adResult", Xt), document.addEventListener("nitroAds.rendered", Qt), document.addEventListener("nitroAds.complete", lt), Ot.appendChild(Dt), Ot.classList.add("NitroVideo"), Vt.appendChild(Et), Vt.style.display = "flex", window.adStartSoPause(null, {
          preventMovement: !0
        }), Promise.resolve(window.nitroAds.createAd(dt, {
          format: "display",
          outstream: "only",
          resultTimeout: 8e3
        })).catch((tt => {
          console.error("AD: Nitro failed to create video", tt), mt(!1)
        })), console.log("AD: Requested Nitro video")
      }
      renderBanner(tt) {
        const {
          divId: et,
          width: Vt,
          height: Ot
        } = tt, qt = `${et}-nitro`;
        let Dt = document.getElementById(qt);
        null === Dt && (Dt = document.createElement("div"), Dt.id = qt, Dt.className = "NitroBanner", Dt.style.setProperty("--nitro-slot-width", `${Vt}px`), Dt.style.setProperty("--nitro-slot-height", `${Ot}px`), document.getElementById(et).appendChild(Dt));
        const mt = [
          [String(Vt), String(Ot)]
        ];
        Promise.resolve(window.nitroAds.createAd(qt, {
          sizes: mt
        })).catch((tt => {
          console.error(`AD: Nitro failed to create banner ${qt}:`, tt)
        })), console.log(`AD: Requested Nitro banner ${qt}`)
      }
      displayConsentUI() {
        var tt, et;
        null === (tt = (et = window).__cmp) || void 0 === tt || tt.call(et, "showModal")
      }
      addPrivacyLinks(tt) {
        var et, Vt, Ot, qt;
        const Dt = document.createElement("span");
        Dt.dataset.ccpaLink = "1";
        const mt = document.createElement("div");
        mt.id = "ncmp-consent-link", tt.replaceChildren(Dt, mt), null === (et = (Vt = window).__uspapi) || void 0 === et || et.call(Vt, "addLink", 1), null === (Ot = (qt = window).__cmp) || void 0 === Ot || Ot.call(qt, "addConsentLink")
      }
      newPageSession() {
        var tt, et;
        null === (tt = (et = window.nitroAds).navigate) || void 0 === tt || tt.call(et)
      }
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);