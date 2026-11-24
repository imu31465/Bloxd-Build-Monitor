export const id = 153;
export const ids = [153];
export const modules = {
  8036: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => im
    });
    var hm = fm(2903);
    const Am = [1, 8, 9],
      am = 5,
      xm = 200,
      wm = 150;

    function Dm(mm, Tm) {
      let fm = 0;
      mm("addEventListener", 2, ((mm, xm) => {
        if (!xm) return void console.warn("TCF CMP couldn't report a consent event, so our consent defaults stand");
        const wm = function(mm) {
          const Tm = "useractioncomplete" === mm.eventStatus || "tcloaded" === mm.eventStatus && !!mm.tcString;
          return mm.gdprApplies && Tm ? Am.every((Tm => !0 === mm.purpose.consents[Tm])) : null
        }(mm);
        if (null === wm) return;
        const Dm = ++fm;
        if (!wm) return void(0, hm.M)(!1);
        if ("nitro" === Tm) return void(0, hm.M)(!0);
        const im = window.__tcfapi;
        im ? im("getNonIABVendorConsents", 2, ((mm, Tm) => {
          var Am;
          Dm === fm && (0, hm.M)(Tm && !0 === (null === (Am = mm.nonIabVendorConsents) || void 0 === Am ? void 0 : Am[am]))
        })) : console.warn("TCF CMP reported a choice but its __tcfapi is gone, so our consent defaults stand")
      }))
    }

    function im(mm) {
      if (window.__tcfapi) return void Dm(window.__tcfapi, mm);
      let Tm = 0;
      const fm = window.setInterval((() => {
        Tm++;
        const hm = window.__tcfapi;
        hm ? (window.clearInterval(fm), Dm(hm, mm)) : Tm >= wm && window.clearInterval(fm)
      }), xm)
    }
  },
  8049: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      NitroSdkAdaptor: () => Dm
    });
    var hm = fm(1318),
      Am = fm(1198),
      am = fm(8036),
      xm = fm(2903);
    const wm = "NitroOutstreamVideo";
    class Dm extends hm.c {
      constructor() {
        super(), this.name = "nitro", this.bannerAutoRefresh = "alwaysOn", this.videoInFlight = !1
      }
      static async setup() {
        return window.nitroAds = window.nitroAds || {
          createAd: function() {
            for (var mm = arguments.length, Tm = new Array(mm), fm = 0; fm < mm; fm++) Tm[fm] = arguments[fm];
            return new Promise((mm => {
              window.nitroAds.queue.push(["createAd", Tm, mm])
            }))
          },
          addUserToken: function() {
            for (var mm = arguments.length, Tm = new Array(mm), fm = 0; fm < mm; fm++) Tm[fm] = arguments[fm];
            window.nitroAds.queue.push(["addUserToken", Tm])
          },
          queue: []
        }, document.addEventListener("nitroAds.rendered", (mm => {
          var Tm, fm, hm;
          const Am = document.getElementById(null !== (Tm = null === (fm = mm.detail) || void 0 === fm || null === (hm = fm.adInfo) || void 0 === hm ? void 0 : hm.adUnitCode) && void 0 !== Tm ? Tm : "");
          null !== Am && void 0 !== Am && Am.classList.contains("NitroBanner") && Am.classList.toggle("NitroBannerUnfilled", "blank" === mm.detail.type)
        })), (0, xm.L)(), await (0, Am.c)("https://s.nitropay.com/ads-2842.js", {
          "data-cfasync": "false"
        }), (0, am.e)("nitro"), new Dm
      }
      playVideoAd(mm, Tm) {
        this.showVideoAd(mm, mm)
      }
      playRewarded(mm, Tm) {
        this.showVideoAd(mm, Tm)
      }
      showVideoAd(mm, Tm) {
        if (this.videoInFlight) return console.log("AD: Nitro video already playing"), void Tm();
        const fm = document.getElementById("GenericVideoWrapper"),
          hm = document.getElementById("GenericVideoInner");
        if (null === fm || null === hm) return void Tm();
        this.videoInFlight = !0;
        let Am = !1;
        const am = document.createElement("div");
        am.id = wm, am.className = "NitroVideoPlacement";
        const xm = xm => {
          if (!Am) {
            Am = !0, clearTimeout(jm), clearInterval(qm), document.removeEventListener("nitroAds.adResult", Rm), document.removeEventListener("nitroAds.rendered", pm), document.removeEventListener("nitroAds.complete", Em);
            try {
              om.remove(), am.querySelectorAll("video").forEach((mm => {
                mm.pause()
              })), am.remove(), hm.classList.remove("NitroVideo"), fm.style.display = "none"
            } catch (wm) {
              console.error("AD: Error tearing down Nitro video", wm)
            } finally {
              this.videoInFlight = !1, window.adCompleteSoResume(), xm ? mm() : Tm()
            }
          }
        };
        let Dm = !1;
        const im = (mm, Tm) => {
            if (!Dm) {
              if (!mm) return console.log(`AD: Nitro video not filled: ${Tm}`), void xm(!1);
              Dm = !0, clearTimeout(jm), jm = setTimeout((() => {
                console.log("AD: Nitro video never completed"), xm(!1)
              }), 12e4)
            }
          },
          Rm = mm => {
            var Tm;
            (null === (Tm = mm.detail) || void 0 === Tm ? void 0 : Tm.id) === wm && im("filled" === mm.detail.status, mm.detail.status)
          },
          pm = mm => {
            var Tm, fm;
            (null === (Tm = mm.detail) || void 0 === Tm || null === (fm = Tm.adInfo) || void 0 === fm ? void 0 : fm.adUnitCode) === wm && im("blank" !== mm.detail.type, mm.detail.type)
          },
          Em = mm => {
            var Tm;
            (null === (Tm = mm.detail) || void 0 === Tm ? void 0 : Tm.adUnitCode) === wm && xm(!0)
          },
          om = document.createElement("button");
        om.className = "NitroVideoSkip", om.disabled = !0, om.addEventListener("click", (() => {
          console.log("AD: Nitro video skipped"), xm(!0)
        }));
        let Om = Math.ceil(15);
        const Ym = () => {
          if (Om <= 0) return clearInterval(qm), om.textContent = "Skip Ad", void(om.disabled = !1);
          om.textContent = `Skip ad in ${Om}s`, Om--
        };
        Ym();
        const qm = setInterval(Ym, 1e3);
        let jm = setTimeout((() => {
          console.log("AD: Nitro video got no result"), xm(!1)
        }), 1e4);
        document.addEventListener("nitroAds.adResult", Rm), document.addEventListener("nitroAds.rendered", pm), document.addEventListener("nitroAds.complete", Em), hm.appendChild(am), hm.classList.add("NitroVideo"), fm.appendChild(om), fm.style.display = "flex", window.adStartSoPause(null, {
          preventMovement: !0
        }), Promise.resolve(window.nitroAds.createAd(wm, {
          format: "display",
          outstream: "only",
          resultTimeout: 8e3
        })).catch((mm => {
          console.error("AD: Nitro failed to create video", mm), xm(!1)
        })), console.log("AD: Requested Nitro video")
      }
      renderBanner(mm) {
        const {
          divId: Tm,
          width: fm,
          height: hm
        } = mm, Am = `${Tm}-nitro`;
        let am = document.getElementById(Am);
        null === am && (am = document.createElement("div"), am.id = Am, am.className = "NitroBanner", am.style.setProperty("--nitro-slot-width", `${fm}px`), am.style.setProperty("--nitro-slot-height", `${hm}px`), document.getElementById(Tm).appendChild(am));
        const xm = [
          [String(fm), String(hm)]
        ];
        Promise.resolve(window.nitroAds.createAd(Am, {
          sizes: xm
        })).catch((mm => {
          console.error(`AD: Nitro failed to create banner ${Am}:`, mm)
        })), console.log(`AD: Requested Nitro banner ${Am}`)
      }
      displayConsentUI() {
        var mm, Tm;
        null === (mm = (Tm = window).__cmp) || void 0 === mm || mm.call(Tm, "showModal")
      }
      addPrivacyLinks(mm) {
        var Tm, fm, hm, Am;
        const am = document.createElement("span");
        am.dataset.ccpaLink = "1";
        const xm = document.createElement("div");
        xm.id = "ncmp-consent-link", mm.replaceChildren(am, xm), null === (Tm = (fm = window).__uspapi) || void 0 === Tm || Tm.call(fm, "addLink", 1), null === (hm = (Am = window).__cmp) || void 0 === hm || hm.call(Am, "addConsentLink")
      }
      newPageSession() {
        var mm, Tm;
        null === (mm = (Tm = window.nitroAds).navigate) || void 0 === mm || mm.call(Tm)
      }
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);