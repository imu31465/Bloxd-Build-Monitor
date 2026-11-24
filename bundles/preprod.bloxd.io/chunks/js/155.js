export const id = 155;
export const ids = [155];
export const modules = {
  8269: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Yp
    });
    var Op = cp(3003);
    const op = [1, 8, 9],
      Ip = 5,
      Sp = 200,
      xp = 150;

    function Lp(pp, ip) {
      let cp = 0;
      pp("addEventListener", 2, ((pp, Sp) => {
        if (!Sp) return void console.warn("TCF CMP couldn't report a consent event, so our consent defaults stand");
        const xp = function(pp) {
          const ip = "useractioncomplete" === pp.eventStatus || "tcloaded" === pp.eventStatus && !!pp.tcString;
          return pp.gdprApplies && ip ? op.every((ip => !0 === pp.purpose.consents[ip])) : null
        }(pp);
        if (null === xp) return;
        const Lp = ++cp;
        if (!xp) return void(0, Op.updateAnalyticsConsent)(!1);
        if ("nitro" === ip) return void(0, Op.updateAnalyticsConsent)(!0);
        const Yp = window.__tcfapi;
        Yp ? Yp("getNonIABVendorConsents", 2, ((pp, ip) => {
          var op;
          Lp === cp && (0, Op.updateAnalyticsConsent)(ip && !0 === (null === (op = pp.nonIabVendorConsents) || void 0 === op ? void 0 : op[Ip]))
        })) : console.warn("TCF CMP reported a choice but its __tcfapi is gone, so our consent defaults stand")
      }))
    }

    function Yp(pp) {
      if (window.__tcfapi) return void Lp(window.__tcfapi, pp);
      let ip = 0;
      const cp = window.setInterval((() => {
        ip++;
        const Op = window.__tcfapi;
        Op ? (window.clearInterval(cp), Lp(Op, pp)) : ip >= xp && window.clearInterval(cp)
      }), Sp)
    }
  },
  8283: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      NitroSdkAdaptor: () => Lp
    });
    var Op = cp(1341),
      op = cp(1194),
      Ip = cp(8269),
      Sp = cp(3003);
    const xp = "NitroOutstreamVideo";
    class Lp extends Op.b {
      constructor() {
        super(), this.name = "nitro", this.bannerAutoRefresh = "alwaysOn", this.videoInFlight = !1
      }
      static async setup() {
        return window.nitroAds = window.nitroAds || {
          createAd: function() {
            for (var pp = arguments.length, ip = new Array(pp), cp = 0; cp < pp; cp++) ip[cp] = arguments[cp];
            return new Promise((pp => {
              window.nitroAds.queue.push(["createAd", ip, pp])
            }))
          },
          addUserToken: function() {
            for (var pp = arguments.length, ip = new Array(pp), cp = 0; cp < pp; cp++) ip[cp] = arguments[cp];
            window.nitroAds.queue.push(["addUserToken", ip])
          },
          queue: []
        }, document.addEventListener("nitroAds.rendered", (pp => {
          var ip, cp, Op;
          const op = document.getElementById(null !== (ip = null === (cp = pp.detail) || void 0 === cp || null === (Op = cp.adInfo) || void 0 === Op ? void 0 : Op.adUnitCode) && void 0 !== ip ? ip : "");
          null !== op && void 0 !== op && op.classList.contains("NitroBanner") && op.classList.toggle("NitroBannerUnfilled", "blank" === pp.detail.type)
        })), (0, Sp.setUpGtag)(), await (0, op.b)("https://s.nitropay.com/ads-2842.js", {
          "data-cfasync": "false"
        }), (0, Ip.b)("nitro"), new Lp
      }
      playVideoAd(pp, ip) {
        this.showVideoAd(pp, pp)
      }
      playRewarded(pp, ip) {
        this.showVideoAd(pp, ip)
      }
      showVideoAd(pp, ip) {
        if (this.videoInFlight) return console.log("AD: Nitro video already playing"), void ip();
        const cp = document.getElementById("GenericVideoWrapper"),
          Op = document.getElementById("GenericVideoInner");
        if (null === cp || null === Op) return void ip();
        this.videoInFlight = !0;
        let op = !1;
        const Ip = document.createElement("div");
        Ip.id = xp, Ip.className = "NitroVideoPlacement";
        const Sp = Sp => {
          if (!op) {
            op = !0, clearTimeout(vp), clearInterval(wp), document.removeEventListener("nitroAds.adResult", Dp), document.removeEventListener("nitroAds.rendered", Ap), document.removeEventListener("nitroAds.complete", Pp);
            try {
              Wp.remove(), Ip.querySelectorAll("video").forEach((pp => {
                pp.pause()
              })), Ip.remove(), Op.classList.remove("NitroVideo"), cp.style.display = "none"
            } catch (xp) {
              console.error("AD: Error tearing down Nitro video", xp)
            } finally {
              this.videoInFlight = !1, window.adCompleteSoResume(), Sp ? pp() : ip()
            }
          }
        };
        let Lp = !1;
        const Yp = (pp, ip) => {
            if (!Lp) {
              if (!pp) return console.log(`AD: Nitro video not filled: ${ip}`), void Sp(!1);
              Lp = !0, clearTimeout(vp), vp = setTimeout((() => {
                console.log("AD: Nitro video never completed"), Sp(!1)
              }), 12e4)
            }
          },
          Dp = pp => {
            var ip;
            (null === (ip = pp.detail) || void 0 === ip ? void 0 : ip.id) === xp && Yp("filled" === pp.detail.status, pp.detail.status)
          },
          Ap = pp => {
            var ip, cp;
            (null === (ip = pp.detail) || void 0 === ip || null === (cp = ip.adInfo) || void 0 === cp ? void 0 : cp.adUnitCode) === xp && Yp("blank" !== pp.detail.type, pp.detail.type)
          },
          Pp = pp => {
            var ip;
            (null === (ip = pp.detail) || void 0 === ip ? void 0 : ip.adUnitCode) === xp && Sp(!0)
          },
          Wp = document.createElement("button");
        Wp.className = "NitroVideoSkip", Wp.disabled = !0, Wp.addEventListener("click", (() => {
          console.log("AD: Nitro video skipped"), Sp(!0)
        }));
        let yp = Math.ceil(15);
        const Up = () => {
          if (yp <= 0) return clearInterval(wp), Wp.textContent = "Skip Ad", void(Wp.disabled = !1);
          Wp.textContent = `Skip ad in ${yp}s`, yp--
        };
        Up();
        const wp = setInterval(Up, 1e3);
        let vp = setTimeout((() => {
          console.log("AD: Nitro video got no result"), Sp(!1)
        }), 1e4);
        document.addEventListener("nitroAds.adResult", Dp), document.addEventListener("nitroAds.rendered", Ap), document.addEventListener("nitroAds.complete", Pp), Op.appendChild(Ip), Op.classList.add("NitroVideo"), cp.appendChild(Wp), cp.style.display = "flex", window.adStartSoPause(null, {
          preventMovement: !0
        }), Promise.resolve(window.nitroAds.createAd(xp, {
          format: "display",
          outstream: "only",
          resultTimeout: 8e3
        })).catch((pp => {
          console.error("AD: Nitro failed to create video", pp), Sp(!1)
        })), console.log("AD: Requested Nitro video")
      }
      renderBanner(pp) {
        const {
          divId: ip,
          width: cp,
          height: Op
        } = pp, op = `${ip}-nitro`;
        let Ip = document.getElementById(op);
        null === Ip && (Ip = document.createElement("div"), Ip.id = op, Ip.className = "NitroBanner", Ip.style.setProperty("--nitro-slot-width", `${cp}px`), Ip.style.setProperty("--nitro-slot-height", `${Op}px`), document.getElementById(ip).appendChild(Ip));
        const Sp = [
          [String(cp), String(Op)]
        ];
        Promise.resolve(window.nitroAds.createAd(op, {
          sizes: Sp
        })).catch((pp => {
          console.error(`AD: Nitro failed to create banner ${op}:`, pp)
        })), console.log(`AD: Requested Nitro banner ${op}`)
      }
      displayConsentUI() {
        var pp, ip;
        null === (pp = (ip = window).__cmp) || void 0 === pp || pp.call(ip, "showModal")
      }
      addPrivacyLinks(pp) {
        var ip, cp, Op, op;
        const Ip = document.createElement("span");
        Ip.dataset.ccpaLink = "1";
        const Sp = document.createElement("div");
        Sp.id = "ncmp-consent-link", pp.replaceChildren(Ip, Sp), null === (ip = (cp = window).__uspapi) || void 0 === ip || ip.call(cp, "addLink", 1), null === (Op = (op = window).__cmp) || void 0 === Op || Op.call(op, "addConsentLink")
      }
      newPageSession() {
        var pp, ip;
        null === (pp = (ip = window.nitroAds).navigate) || void 0 === pp || pp.call(ip)
      }
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);