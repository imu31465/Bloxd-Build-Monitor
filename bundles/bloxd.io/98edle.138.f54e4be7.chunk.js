export const id = 138;
export const ids = [138];
export const modules = {
  7066: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      NitroSdkAdaptor: () => AW
    });
    var wW = MW(1144),
      CW = MW(1020);
    const zR = "NitroOutstreamVideo";
    class AW extends wW.d {
      constructor() {
        super(), this.name = "nitro", this.bannerAutoRefresh = "alwaysOn", this.videoInFlight = !1
      }
      static async setup() {
        return window.nitroAds = window.nitroAds || {
          createAd: function() {
            for (var WW = arguments.length, RW = new Array(WW), MW = 0; MW < WW; MW++) RW[MW] = arguments[MW];
            return new Promise((WW => {
              window.nitroAds.queue.push(["createAd", RW, WW])
            }))
          },
          addUserToken: function() {
            for (var WW = arguments.length, RW = new Array(WW), MW = 0; MW < WW; MW++) RW[MW] = arguments[MW];
            window.nitroAds.queue.push(["addUserToken", RW])
          },
          queue: []
        }, document.addEventListener("nitroAds.rendered", (WW => {
          var RW, MW, wW;
          const CW = document.getElementById(null !== (RW = null === (MW = WW.detail) || void 0 === MW || null === (wW = MW.adInfo) || void 0 === wW ? void 0 : wW.adUnitCode) && void 0 !== RW ? RW : "");
          null !== CW && void 0 !== CW && CW.classList.contains("NitroBanner") && CW.classList.toggle("NitroBannerUnfilled", "blank" === WW.detail.type)
        })), await (0, CW.d)("https://s.nitropay.com/ads-2842.js", {
          "data-cfasync": "false"
        }), new AW
      }
      playVideoAd(WW, RW) {
        this.showVideoAd(WW, WW)
      }
      playRewarded(WW, RW) {
        this.showVideoAd(WW, RW)
      }
      showVideoAd(WW, RW) {
        if (this.videoInFlight) return console.log("AD: Nitro video already playing"), void RW();
        const MW = document.getElementById("GenericVideoWrapper"),
          wW = document.getElementById("GenericVideoInner");
        if (null === MW || null === wW) return void RW();
        this.videoInFlight = !0;
        let CW = !1;
        const AW = document.createElement("div");
        AW.id = zR, AW.className = "NitroVideoPlacement";
        const bR = zR => {
          if (!CW) {
            CW = !0, clearTimeout(JW), clearInterval(YW), document.removeEventListener("nitroAds.adResult", eW), document.removeEventListener("nitroAds.rendered", BW), document.removeEventListener("nitroAds.complete", tR);
            try {
              TW.remove(), AW.querySelectorAll("video").forEach((WW => {
                WW.pause()
              })), AW.remove(), wW.classList.remove("NitroVideo"), MW.style.display = "none"
            } catch (bR) {
              console.error("AD: Error tearing down Nitro video", bR)
            } finally {
              this.videoInFlight = !1, window.adCompleteSoResume(), zR ? WW() : RW()
            }
          }
        };
        let yR = !1;
        const NW = (WW, RW) => {
            if (!yR) {
              if (!WW) return console.log(`AD: Nitro video not filled: ${RW}`), void bR(!1);
              yR = !0, clearTimeout(JW), JW = setTimeout((() => {
                console.log("AD: Nitro video never completed"), bR(!1)
              }), 12e4)
            }
          },
          eW = WW => {
            var RW;
            (null === (RW = WW.detail) || void 0 === RW ? void 0 : RW.id) === zR && NW("filled" === WW.detail.status, WW.detail.status)
          },
          BW = WW => {
            var RW, MW;
            (null === (RW = WW.detail) || void 0 === RW || null === (MW = RW.adInfo) || void 0 === MW ? void 0 : MW.adUnitCode) === zR && NW("blank" !== WW.detail.type, WW.detail.type)
          },
          tR = WW => {
            var RW;
            (null === (RW = WW.detail) || void 0 === RW ? void 0 : RW.adUnitCode) === zR && bR(!0)
          },
          TW = document.createElement("button");
        TW.className = "NitroVideoSkip", TW.disabled = !0, TW.addEventListener("click", (() => {
          console.log("AD: Nitro video skipped"), bR(!0)
        }));
        let gR = Math.ceil(15);
        const iR = () => {
          if (gR <= 0) return clearInterval(YW), TW.textContent = "Skip Ad", void(TW.disabled = !1);
          TW.textContent = `Skip ad in ${gR}s`, gR--
        };
        iR();
        const YW = setInterval(iR, 1e3);
        let JW = setTimeout((() => {
          console.log("AD: Nitro video got no result"), bR(!1)
        }), 1e4);
        document.addEventListener("nitroAds.adResult", eW), document.addEventListener("nitroAds.rendered", BW), document.addEventListener("nitroAds.complete", tR), wW.appendChild(AW), wW.classList.add("NitroVideo"), MW.appendChild(TW), MW.style.display = "flex", window.adStartSoPause(null, {
          preventMovement: !0
        }), Promise.resolve(window.nitroAds.createAd(zR, {
          format: "display",
          outstream: "only",
          resultTimeout: 8e3
        })).catch((WW => {
          console.error("AD: Nitro failed to create video", WW), bR(!1)
        })), console.log("AD: Requested Nitro video")
      }
      renderBanner(WW) {
        const {
          divId: RW,
          width: MW,
          height: wW
        } = WW, CW = `${RW}-nitro`;
        let zR = document.getElementById(CW);
        null === zR && (zR = document.createElement("div"), zR.id = CW, zR.className = "NitroBanner", zR.style.setProperty("--nitro-slot-width", `${MW}px`), zR.style.setProperty("--nitro-slot-height", `${wW}px`), document.getElementById(RW).appendChild(zR));
        const AW = [
          [String(MW), String(wW)]
        ];
        Promise.resolve(window.nitroAds.createAd(CW, {
          sizes: AW
        })).catch((WW => {
          console.error(`AD: Nitro failed to create banner ${CW}:`, WW)
        })), console.log(`AD: Requested Nitro banner ${CW}`)
      }
      displayConsentUI() {
        var WW, RW;
        null === (WW = (RW = window).__cmp) || void 0 === WW || WW.call(RW, "showModal")
      }
      addPrivacyLinks(WW) {
        var RW, MW, wW, CW;
        const zR = document.createElement("span");
        zR.dataset.ccpaLink = "1";
        const AW = document.createElement("div");
        AW.id = "ncmp-consent-link", WW.replaceChildren(zR, AW), null === (RW = (MW = window).__uspapi) || void 0 === RW || RW.call(MW, "addLink", 1), null === (wW = (CW = window).__cmp) || void 0 === wW || wW.call(CW, "addConsentLink")
      }
      newPageSession() {
        var WW, RW;
        null === (WW = (RW = window.nitroAds).navigate) || void 0 === WW || WW.call(RW)
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);