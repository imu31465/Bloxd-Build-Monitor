export const id = 150;
export const ids = [150];
export const modules = {
  7583: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      NitroSdkAdaptor: () => RY
    });
    var FY = DY(1318),
      AY = DY(1204);
    const IY = "NitroOutstreamVideo";
    class RY extends FY.c {
      constructor() {
        super(), this.name = "nitro", this.bannerAutoRefresh = "alwaysOn", this.videoInFlight = !1
      }
      static async setup() {
        return window.nitroAds = window.nitroAds || {
          createAd: function() {
            for (var YY = arguments.length, rY = new Array(YY), DY = 0; DY < YY; DY++) rY[DY] = arguments[DY];
            return new Promise((YY => {
              window.nitroAds.queue.push(["createAd", rY, YY])
            }))
          },
          addUserToken: function() {
            for (var YY = arguments.length, rY = new Array(YY), DY = 0; DY < YY; DY++) rY[DY] = arguments[DY];
            window.nitroAds.queue.push(["addUserToken", rY])
          },
          queue: []
        }, document.addEventListener("nitroAds.rendered", (YY => {
          var rY, DY, FY;
          const AY = document.getElementById(null !== (rY = null === (DY = YY.detail) || void 0 === DY || null === (FY = DY.adInfo) || void 0 === FY ? void 0 : FY.adUnitCode) && void 0 !== rY ? rY : "");
          null !== AY && void 0 !== AY && AY.classList.contains("NitroBanner") && AY.classList.toggle("NitroBannerUnfilled", "blank" === YY.detail.type)
        })), await (0, AY.d)("https://s.nitropay.com/ads-2842.js", {
          "data-cfasync": "false"
        }), new RY
      }
      playVideoAd(YY, rY) {
        this.showVideoAd(YY, YY)
      }
      playRewarded(YY, rY) {
        this.showVideoAd(YY, rY)
      }
      showVideoAd(YY, rY) {
        if (this.videoInFlight) return console.log("AD: Nitro video already playing"), void rY();
        const DY = document.getElementById("GenericVideoWrapper"),
          FY = document.getElementById("GenericVideoInner");
        if (null === DY || null === FY) return void rY();
        this.videoInFlight = !0;
        let AY = !1;
        const RY = document.createElement("div");
        RY.id = IY, RY.className = "NitroVideoPlacement";
        const OY = IY => {
          if (!AY) {
            AY = !0, clearTimeout(WY), clearInterval(oY), document.removeEventListener("nitroAds.adResult", vY), document.removeEventListener("nitroAds.rendered", uY), document.removeEventListener("nitroAds.complete", sY);
            try {
              iY.remove(), RY.querySelectorAll("video").forEach((YY => {
                YY.pause()
              })), RY.remove(), FY.classList.remove("NitroVideo"), DY.style.display = "none"
            } catch (OY) {
              console.error("AD: Error tearing down Nitro video", OY)
            } finally {
              this.videoInFlight = !1, window.adCompleteSoResume(), IY ? YY() : rY()
            }
          }
        };
        let gY = !1;
        const aY = (YY, rY) => {
            if (!gY) {
              if (!YY) return console.log(`AD: Nitro video not filled: ${rY}`), void OY(!1);
              gY = !0, clearTimeout(WY), WY = setTimeout((() => {
                console.log("AD: Nitro video never completed"), OY(!1)
              }), 12e4)
            }
          },
          vY = YY => {
            var rY;
            (null === (rY = YY.detail) || void 0 === rY ? void 0 : rY.id) === IY && aY("filled" === YY.detail.status, YY.detail.status)
          },
          uY = YY => {
            var rY, DY;
            (null === (rY = YY.detail) || void 0 === rY || null === (DY = rY.adInfo) || void 0 === DY ? void 0 : DY.adUnitCode) === IY && aY("blank" !== YY.detail.type, YY.detail.type)
          },
          sY = YY => {
            var rY;
            (null === (rY = YY.detail) || void 0 === rY ? void 0 : rY.adUnitCode) === IY && OY(!0)
          },
          iY = document.createElement("button");
        iY.className = "NitroVideoSkip", iY.disabled = !0, iY.addEventListener("click", (() => {
          console.log("AD: Nitro video skipped"), OY(!0)
        }));
        let yY = Math.ceil(15);
        const QY = () => {
          if (yY <= 0) return clearInterval(oY), iY.textContent = "Skip Ad", void(iY.disabled = !1);
          iY.textContent = `Skip ad in ${yY}s`, yY--
        };
        QY();
        const oY = setInterval(QY, 1e3);
        let WY = setTimeout((() => {
          console.log("AD: Nitro video got no result"), OY(!1)
        }), 1e4);
        document.addEventListener("nitroAds.adResult", vY), document.addEventListener("nitroAds.rendered", uY), document.addEventListener("nitroAds.complete", sY), FY.appendChild(RY), FY.classList.add("NitroVideo"), DY.appendChild(iY), DY.style.display = "flex", window.adStartSoPause(null, {
          preventMovement: !0
        }), Promise.resolve(window.nitroAds.createAd(IY, {
          format: "display",
          outstream: "only",
          resultTimeout: 8e3
        })).catch((YY => {
          console.error("AD: Nitro failed to create video", YY), OY(!1)
        })), console.log("AD: Requested Nitro video")
      }
      renderBanner(YY) {
        const {
          divId: rY,
          width: DY,
          height: FY
        } = YY, AY = `${rY}-nitro`;
        let IY = document.getElementById(AY);
        null === IY && (IY = document.createElement("div"), IY.id = AY, IY.className = "NitroBanner", IY.style.setProperty("--nitro-slot-width", `${DY}px`), IY.style.setProperty("--nitro-slot-height", `${FY}px`), document.getElementById(rY).appendChild(IY));
        const RY = [
          [String(DY), String(FY)]
        ];
        Promise.resolve(window.nitroAds.createAd(AY, {
          sizes: RY
        })).catch((YY => {
          console.error(`AD: Nitro failed to create banner ${AY}:`, YY)
        })), console.log(`AD: Requested Nitro banner ${AY}`)
      }
      displayConsentUI() {
        var YY, rY;
        null === (YY = (rY = window).__cmp) || void 0 === YY || YY.call(rY, "showModal")
      }
      addPrivacyLinks(YY) {
        var rY, DY, FY, AY;
        const IY = document.createElement("span");
        IY.dataset.ccpaLink = "1";
        const RY = document.createElement("div");
        RY.id = "ncmp-consent-link", YY.replaceChildren(IY, RY), null === (rY = (DY = window).__uspapi) || void 0 === rY || rY.call(DY, "addLink", 1), null === (FY = (AY = window).__cmp) || void 0 === FY || FY.call(AY, "addConsentLink")
      }
      newPageSession() {
        var YY, rY;
        null === (YY = (rY = window.nitroAds).navigate) || void 0 === YY || YY.call(rY)
      }
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);