export const id = 155;
export const ids = [155];
export const modules = {
  8357: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => fu
    });
    var su = ju(3074);
    const Uu = [1, 8, 9],
      Zu = 5,
      Xu = 200,
      lu = 150;

    function qu(uu, Eu) {
      let ju = 0;
      uu("addEventListener", 2, ((uu, Xu) => {
        if (!Xu) return void console.warn("TCF CMP couldn't report a consent event, so our consent defaults stand");
        const lu = function(uu) {
          const Eu = "useractioncomplete" === uu.eventStatus || "tcloaded" === uu.eventStatus && !!uu.tcString;
          return uu.gdprApplies && Eu ? Uu.every((Eu => !0 === uu.purpose.consents[Eu])) : null
        }(uu);
        if (null === lu) return;
        const qu = ++ju;
        if (!lu) return void(0, su.updateAnalyticsConsent)(!1);
        if ("nitro" === Eu) return void(0, su.updateAnalyticsConsent)(!0);
        const fu = window.__tcfapi;
        fu ? fu("getNonIABVendorConsents", 2, ((uu, Eu) => {
          var Uu;
          qu === ju && (0, su.updateAnalyticsConsent)(Eu && !0 === (null === (Uu = uu.nonIabVendorConsents) || void 0 === Uu ? void 0 : Uu[Zu]))
        })) : console.warn("TCF CMP reported a choice but its __tcfapi is gone, so our consent defaults stand")
      }))
    }

    function fu(uu) {
      if (window.__tcfapi) return void qu(window.__tcfapi, uu);
      let Eu = 0;
      const ju = window.setInterval((() => {
        Eu++;
        const su = window.__tcfapi;
        su ? (window.clearInterval(ju), qu(su, uu)) : Eu >= lu && window.clearInterval(ju)
      }), Xu)
    }
  },
  8374: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      NitroSdkAdaptor: () => qu
    });
    var su = ju(1364),
      Uu = ju(1227),
      Zu = ju(8357),
      Xu = ju(3074);
    const lu = "NitroOutstreamVideo";
    class qu extends su.b {
      constructor() {
        super(), this.name = "nitro", this.bannerAutoRefresh = "alwaysOn", this.videoInFlight = !1
      }
      static async setup() {
        return window.nitroAds = window.nitroAds || {
          createAd: function() {
            for (var uu = arguments.length, Eu = new Array(uu), ju = 0; ju < uu; ju++) Eu[ju] = arguments[ju];
            return new Promise((uu => {
              window.nitroAds.queue.push(["createAd", Eu, uu])
            }))
          },
          addUserToken: function() {
            for (var uu = arguments.length, Eu = new Array(uu), ju = 0; ju < uu; ju++) Eu[ju] = arguments[ju];
            window.nitroAds.queue.push(["addUserToken", Eu])
          },
          queue: []
        }, document.addEventListener("nitroAds.rendered", (uu => {
          var Eu, ju, su;
          const Uu = document.getElementById(null !== (Eu = null === (ju = uu.detail) || void 0 === ju || null === (su = ju.adInfo) || void 0 === su ? void 0 : su.adUnitCode) && void 0 !== Eu ? Eu : "");
          null !== Uu && void 0 !== Uu && Uu.classList.contains("NitroBanner") && Uu.classList.toggle("NitroBannerUnfilled", "blank" === uu.detail.type)
        })), (0, Xu.setUpGtag)(), await (0, Uu.e)("https://s.nitropay.com/ads-2842.js", {
          "data-cfasync": "false"
        }), (0, Zu.d)("nitro"), new qu
      }
      playVideoAd(uu, Eu) {
        this.showVideoAd(uu, uu)
      }
      playRewarded(uu, Eu) {
        this.showVideoAd(uu, Eu)
      }
      showVideoAd(uu, Eu) {
        if (this.videoInFlight) return console.log("AD: Nitro video already playing"), void Eu();
        const ju = document.getElementById("GenericVideoWrapper"),
          su = document.getElementById("GenericVideoInner");
        if (null === ju || null === su) return void Eu();
        this.videoInFlight = !0;
        let Uu = !1;
        const Zu = document.createElement("div");
        Zu.id = lu, Zu.className = "NitroVideoPlacement";
        const Xu = Xu => {
          if (!Uu) {
            Uu = !0, clearTimeout(Du), clearInterval(hu), document.removeEventListener("nitroAds.adResult", Cu), document.removeEventListener("nitroAds.rendered", bu), document.removeEventListener("nitroAds.complete", cu);
            try {
              Nu.remove(), Zu.querySelectorAll("video").forEach((uu => {
                uu.pause()
              })), Zu.remove(), su.classList.remove("NitroVideo"), ju.style.display = "none"
            } catch (lu) {
              console.error("AD: Error tearing down Nitro video", lu)
            } finally {
              this.videoInFlight = !1, window.adCompleteSoResume(), Xu ? uu() : Eu()
            }
          }
        };
        let qu = !1;
        const fu = (uu, Eu) => {
            if (!qu) {
              if (!uu) return console.log(`AD: Nitro video not filled: ${Eu}`), void Xu(!1);
              qu = !0, clearTimeout(Du), Du = setTimeout((() => {
                console.log("AD: Nitro video never completed"), Xu(!1)
              }), 12e4)
            }
          },
          Cu = uu => {
            var Eu;
            (null === (Eu = uu.detail) || void 0 === Eu ? void 0 : Eu.id) === lu && fu("filled" === uu.detail.status, uu.detail.status)
          },
          bu = uu => {
            var Eu, ju;
            (null === (Eu = uu.detail) || void 0 === Eu || null === (ju = Eu.adInfo) || void 0 === ju ? void 0 : ju.adUnitCode) === lu && fu("blank" !== uu.detail.type, uu.detail.type)
          },
          cu = uu => {
            var Eu;
            (null === (Eu = uu.detail) || void 0 === Eu ? void 0 : Eu.adUnitCode) === lu && Xu(!0)
          },
          Nu = document.createElement("button");
        Nu.className = "NitroVideoSkip", Nu.disabled = !0, Nu.addEventListener("click", (() => {
          console.log("AD: Nitro video skipped"), Xu(!0)
        }));
        let Ou = Math.ceil(15);
        const Yu = () => {
          if (Ou <= 0) return clearInterval(hu), Nu.textContent = "Skip Ad", void(Nu.disabled = !1);
          Nu.textContent = `Skip ad in ${Ou}s`, Ou--
        };
        Yu();
        const hu = setInterval(Yu, 1e3);
        let Du = setTimeout((() => {
          console.log("AD: Nitro video got no result"), Xu(!1)
        }), 1e4);
        document.addEventListener("nitroAds.adResult", Cu), document.addEventListener("nitroAds.rendered", bu), document.addEventListener("nitroAds.complete", cu), su.appendChild(Zu), su.classList.add("NitroVideo"), ju.appendChild(Nu), ju.style.display = "flex", window.adStartSoPause(null, {
          preventMovement: !0
        }), Promise.resolve(window.nitroAds.createAd(lu, {
          format: "display",
          outstream: "only",
          resultTimeout: 8e3
        })).catch((uu => {
          console.error("AD: Nitro failed to create video", uu), Xu(!1)
        })), console.log("AD: Requested Nitro video")
      }
      renderBanner(uu) {
        const {
          divId: Eu,
          width: ju,
          height: su
        } = uu, Uu = `${Eu}-nitro`;
        let Zu = document.getElementById(Uu);
        null === Zu && (Zu = document.createElement("div"), Zu.id = Uu, Zu.className = "NitroBanner", Zu.style.setProperty("--nitro-slot-width", `${ju}px`), Zu.style.setProperty("--nitro-slot-height", `${su}px`), document.getElementById(Eu).appendChild(Zu));
        const Xu = [
          [String(ju), String(su)]
        ];
        Promise.resolve(window.nitroAds.createAd(Uu, {
          sizes: Xu
        })).catch((uu => {
          console.error(`AD: Nitro failed to create banner ${Uu}:`, uu)
        })), console.log(`AD: Requested Nitro banner ${Uu}`)
      }
      displayConsentUI() {
        var uu, Eu;
        null === (uu = (Eu = window).__cmp) || void 0 === uu || uu.call(Eu, "showModal")
      }
      addPrivacyLinks(uu) {
        var Eu, ju, su, Uu;
        const Zu = document.createElement("span");
        Zu.dataset.ccpaLink = "1";
        const Xu = document.createElement("div");
        Xu.id = "ncmp-consent-link", uu.replaceChildren(Zu, Xu), null === (Eu = (ju = window).__uspapi) || void 0 === Eu || Eu.call(ju, "addLink", 1), null === (su = (Uu = window).__cmp) || void 0 === su || su.call(Uu, "addConsentLink")
      }
      newPageSession() {
        var uu, Eu;
        null === (uu = (Eu = window.nitroAds).navigate) || void 0 === uu || uu.call(Eu)
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);