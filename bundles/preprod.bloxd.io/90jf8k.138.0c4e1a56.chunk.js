export const id = 138;
export const ids = [138];
export const modules = {
  7104: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      NitroSdkAdaptor: () => hF
    });
    var CF = SF(1171),
      AF = SF(1036);
    const uF = "NitroOutstreamVideo";
    class hF extends CF.b {
      constructor() {
        super(), this.name = "nitro", this.bannerAutoRefresh = "alwaysOn", this.videoInFlight = !1
      }
      static async setup() {
        return window.nitroAds = window.nitroAds || {
          createAd: function() {
            for (var FF = arguments.length, WF = new Array(FF), SF = 0; SF < FF; SF++) WF[SF] = arguments[SF];
            return new Promise((FF => {
              window.nitroAds.queue.push(["createAd", WF, FF])
            }))
          },
          addUserToken: function() {
            for (var FF = arguments.length, WF = new Array(FF), SF = 0; SF < FF; SF++) WF[SF] = arguments[SF];
            window.nitroAds.queue.push(["addUserToken", WF])
          },
          queue: []
        }, document.addEventListener("nitroAds.rendered", (FF => {
          var WF, SF, CF;
          const AF = document.getElementById(null !== (WF = null === (SF = FF.detail) || void 0 === SF || null === (CF = SF.adInfo) || void 0 === CF ? void 0 : CF.adUnitCode) && void 0 !== WF ? WF : "");
          null !== AF && void 0 !== AF && AF.classList.contains("NitroBanner") && AF.classList.toggle("NitroBannerUnfilled", "blank" === FF.detail.type)
        })), await (0, AF.e)("https://s.nitropay.com/ads-2842.js", {
          "data-cfasync": "false"
        }), new hF
      }
      playVideoAd(FF, WF) {
        this.showVideoAd(FF, FF)
      }
      playRewarded(FF, WF) {
        this.showVideoAd(FF, WF)
      }
      showVideoAd(FF, WF) {
        if (this.videoInFlight) return console.log("AD: Nitro video already playing"), void WF();
        const SF = document.getElementById("GenericVideoWrapper"),
          CF = document.getElementById("GenericVideoInner");
        if (null === SF || null === CF) return void WF();
        this.videoInFlight = !0;
        let AF = !1;
        const hF = document.createElement("div");
        hF.id = uF, hF.className = "NitroVideoPlacement";
        const bW = uF => {
          if (!AF) {
            AF = !0, clearTimeout(tW), clearInterval(gW), document.removeEventListener("nitroAds.adResult", RF), document.removeEventListener("nitroAds.rendered", iW), document.removeEventListener("nitroAds.complete", eF);
            try {
              EF.remove(), hF.querySelectorAll("video").forEach((FF => {
                FF.pause()
              })), hF.remove(), CF.classList.remove("NitroVideo"), SF.style.display = "none"
            } catch (bW) {
              console.error("AD: Error tearing down Nitro video", bW)
            } finally {
              this.videoInFlight = !1, window.adCompleteSoResume(), uF ? FF() : WF()
            }
          }
        };
        let dF = !1;
        const PF = (FF, WF) => {
            if (!dF) {
              if (!FF) return console.log(`AD: Nitro video not filled: ${WF}`), void bW(!1);
              dF = !0, clearTimeout(tW), tW = setTimeout((() => {
                console.log("AD: Nitro video never completed"), bW(!1)
              }), 12e4)
            }
          },
          RF = FF => {
            var WF;
            (null === (WF = FF.detail) || void 0 === WF ? void 0 : WF.id) === uF && PF("filled" === FF.detail.status, FF.detail.status)
          },
          iW = FF => {
            var WF, SF;
            (null === (WF = FF.detail) || void 0 === WF || null === (SF = WF.adInfo) || void 0 === SF ? void 0 : SF.adUnitCode) === uF && PF("blank" !== FF.detail.type, FF.detail.type)
          },
          eF = FF => {
            var WF;
            (null === (WF = FF.detail) || void 0 === WF ? void 0 : WF.adUnitCode) === uF && bW(!0)
          },
          EF = document.createElement("button");
        EF.className = "NitroVideoSkip", EF.disabled = !0, EF.addEventListener("click", (() => {
          console.log("AD: Nitro video skipped"), bW(!0)
        }));
        let QF = Math.ceil(15);
        const rW = () => {
          if (QF <= 0) return clearInterval(gW), EF.textContent = "Skip Ad", void(EF.disabled = !1);
          EF.textContent = `Skip ad in ${QF}s`, QF--
        };
        rW();
        const gW = setInterval(rW, 1e3);
        let tW = setTimeout((() => {
          console.log("AD: Nitro video got no result"), bW(!1)
        }), 1e4);
        document.addEventListener("nitroAds.adResult", RF), document.addEventListener("nitroAds.rendered", iW), document.addEventListener("nitroAds.complete", eF), CF.appendChild(hF), CF.classList.add("NitroVideo"), SF.appendChild(EF), SF.style.display = "flex", window.adStartSoPause(null, {
          preventMovement: !0
        }), Promise.resolve(window.nitroAds.createAd(uF, {
          format: "display",
          outstream: "only",
          resultTimeout: 8e3
        })).catch((FF => {
          console.error("AD: Nitro failed to create video", FF), bW(!1)
        })), console.log("AD: Requested Nitro video")
      }
      renderBanner(FF) {
        const {
          divId: WF,
          width: SF,
          height: CF
        } = FF, AF = `${WF}-nitro`;
        let uF = document.getElementById(AF);
        null === uF && (uF = document.createElement("div"), uF.id = AF, uF.className = "NitroBanner", uF.style.setProperty("--nitro-slot-width", `${SF}px`), uF.style.setProperty("--nitro-slot-height", `${CF}px`), document.getElementById(WF).appendChild(uF));
        const hF = [
          [String(SF), String(CF)]
        ];
        Promise.resolve(window.nitroAds.createAd(AF, {
          sizes: hF
        })).catch((FF => {
          console.error(`AD: Nitro failed to create banner ${AF}:`, FF)
        })), console.log(`AD: Requested Nitro banner ${AF}`)
      }
      displayConsentUI() {
        var FF, WF;
        null === (FF = (WF = window).__cmp) || void 0 === FF || FF.call(WF, "showModal")
      }
      addPrivacyLinks(FF) {
        var WF, SF, CF, AF;
        const uF = document.createElement("span");
        uF.dataset.ccpaLink = "1";
        const hF = document.createElement("div");
        hF.id = "ncmp-consent-link", FF.replaceChildren(uF, hF), null === (WF = (SF = window).__uspapi) || void 0 === WF || WF.call(SF, "addLink", 1), null === (CF = (AF = window).__cmp) || void 0 === CF || CF.call(AF, "addConsentLink")
      }
      newPageSession() {
        var FF, WF;
        null === (FF = (WF = window.nitroAds).navigate) || void 0 === FF || FF.call(WF)
      }
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);