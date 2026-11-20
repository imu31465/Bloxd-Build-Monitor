export const id = 149;
export const ids = [149];
export const modules = {
  7889: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      NitroSdkAdaptor: () => mu
    });
    var Eu = yu(1277),
      Ku = yu(1153);
    const Qu = "NitroOutstreamVideo";
    class mu extends Eu.b {
      constructor() {
        super(), this.name = "nitro", this.bannerAutoRefresh = "alwaysOn", this.videoInFlight = !1
      }
      static async setup() {
        return window.nitroAds = window.nitroAds || {
          createAd: function() {
            for (var uu = arguments.length, Ru = new Array(uu), yu = 0; yu < uu; yu++) Ru[yu] = arguments[yu];
            return new Promise((uu => {
              window.nitroAds.queue.push(["createAd", Ru, uu])
            }))
          },
          addUserToken: function() {
            for (var uu = arguments.length, Ru = new Array(uu), yu = 0; yu < uu; yu++) Ru[yu] = arguments[yu];
            window.nitroAds.queue.push(["addUserToken", Ru])
          },
          queue: []
        }, document.addEventListener("nitroAds.rendered", (uu => {
          var Ru, yu, Eu;
          const Ku = document.getElementById(null !== (Ru = null === (yu = uu.detail) || void 0 === yu || null === (Eu = yu.adInfo) || void 0 === Eu ? void 0 : Eu.adUnitCode) && void 0 !== Ru ? Ru : "");
          null !== Ku && void 0 !== Ku && Ku.classList.contains("NitroBanner") && Ku.classList.toggle("NitroBannerUnfilled", "blank" === uu.detail.type)
        })), await (0, Ku.b)("https://s.nitropay.com/ads-2842.js", {
          "data-cfasync": "false"
        }), new mu
      }
      playVideoAd(uu, Ru) {
        this.showVideoAd(uu, uu)
      }
      playRewarded(uu, Ru) {
        this.showVideoAd(uu, Ru)
      }
      showVideoAd(uu, Ru) {
        if (this.videoInFlight) return console.log("AD: Nitro video already playing"), void Ru();
        const yu = document.getElementById("GenericVideoWrapper"),
          Eu = document.getElementById("GenericVideoInner");
        if (null === yu || null === Eu) return void Ru();
        this.videoInFlight = !0;
        let Ku = !1;
        const mu = document.createElement("div");
        mu.id = Qu, mu.className = "NitroVideoPlacement";
        const Ju = Qu => {
          if (!Ku) {
            Ku = !0, clearTimeout(Wu), clearInterval(Tu), document.removeEventListener("nitroAds.adResult", Vu), document.removeEventListener("nitroAds.rendered", ru), document.removeEventListener("nitroAds.complete", Bu);
            try {
              xu.remove(), mu.querySelectorAll("video").forEach((uu => {
                uu.pause()
              })), mu.remove(), Eu.classList.remove("NitroVideo"), yu.style.display = "none"
            } catch (Ju) {
              console.error("AD: Error tearing down Nitro video", Ju)
            } finally {
              this.videoInFlight = !1, window.adCompleteSoResume(), Qu ? uu() : Ru()
            }
          }
        };
        let Nu = !1;
        const Xu = (uu, Ru) => {
            if (!Nu) {
              if (!uu) return console.log(`AD: Nitro video not filled: ${Ru}`), void Ju(!1);
              Nu = !0, clearTimeout(Wu), Wu = setTimeout((() => {
                console.log("AD: Nitro video never completed"), Ju(!1)
              }), 12e4)
            }
          },
          Vu = uu => {
            var Ru;
            (null === (Ru = uu.detail) || void 0 === Ru ? void 0 : Ru.id) === Qu && Xu("filled" === uu.detail.status, uu.detail.status)
          },
          ru = uu => {
            var Ru, yu;
            (null === (Ru = uu.detail) || void 0 === Ru || null === (yu = Ru.adInfo) || void 0 === yu ? void 0 : yu.adUnitCode) === Qu && Xu("blank" !== uu.detail.type, uu.detail.type)
          },
          Bu = uu => {
            var Ru;
            (null === (Ru = uu.detail) || void 0 === Ru ? void 0 : Ru.adUnitCode) === Qu && Ju(!0)
          },
          xu = document.createElement("button");
        xu.className = "NitroVideoSkip", xu.disabled = !0, xu.addEventListener("click", (() => {
          console.log("AD: Nitro video skipped"), Ju(!0)
        }));
        let Su = Math.ceil(15);
        const pu = () => {
          if (Su <= 0) return clearInterval(Tu), xu.textContent = "Skip Ad", void(xu.disabled = !1);
          xu.textContent = `Skip ad in ${Su}s`, Su--
        };
        pu();
        const Tu = setInterval(pu, 1e3);
        let Wu = setTimeout((() => {
          console.log("AD: Nitro video got no result"), Ju(!1)
        }), 1e4);
        document.addEventListener("nitroAds.adResult", Vu), document.addEventListener("nitroAds.rendered", ru), document.addEventListener("nitroAds.complete", Bu), Eu.appendChild(mu), Eu.classList.add("NitroVideo"), yu.appendChild(xu), yu.style.display = "flex", window.adStartSoPause(null, {
          preventMovement: !0
        }), Promise.resolve(window.nitroAds.createAd(Qu, {
          format: "display",
          outstream: "only",
          resultTimeout: 8e3
        })).catch((uu => {
          console.error("AD: Nitro failed to create video", uu), Ju(!1)
        })), console.log("AD: Requested Nitro video")
      }
      renderBanner(uu) {
        const {
          divId: Ru,
          width: yu,
          height: Eu
        } = uu, Ku = `${Ru}-nitro`;
        let Qu = document.getElementById(Ku);
        null === Qu && (Qu = document.createElement("div"), Qu.id = Ku, Qu.className = "NitroBanner", Qu.style.setProperty("--nitro-slot-width", `${yu}px`), Qu.style.setProperty("--nitro-slot-height", `${Eu}px`), document.getElementById(Ru).appendChild(Qu));
        const mu = [
          [String(yu), String(Eu)]
        ];
        Promise.resolve(window.nitroAds.createAd(Ku, {
          sizes: mu
        })).catch((uu => {
          console.error(`AD: Nitro failed to create banner ${Ku}:`, uu)
        })), console.log(`AD: Requested Nitro banner ${Ku}`)
      }
      displayConsentUI() {
        var uu, Ru;
        null === (uu = (Ru = window).__cmp) || void 0 === uu || uu.call(Ru, "showModal")
      }
      addPrivacyLinks(uu) {
        var Ru, yu, Eu, Ku;
        const Qu = document.createElement("span");
        Qu.dataset.ccpaLink = "1";
        const mu = document.createElement("div");
        mu.id = "ncmp-consent-link", uu.replaceChildren(Qu, mu), null === (Ru = (yu = window).__uspapi) || void 0 === Ru || Ru.call(yu, "addLink", 1), null === (Eu = (Ku = window).__cmp) || void 0 === Eu || Eu.call(Ku, "addConsentLink")
      }
      newPageSession() {
        var uu, Ru;
        null === (uu = (Ru = window.nitroAds).navigate) || void 0 === uu || uu.call(Ru)
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);