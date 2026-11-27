export const id = 46;
export const ids = [46];
export const modules = {
  5510: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      LEAVE_POINTER_MARGIN_PX: () => jr,
      RECHECK_MS: () => ar,
      iframeHost: () => pr,
      isNear: () => tr,
      leaveCoverLine: () => mr,
      overlaps: () => Ur,
      resetLeaveCoverDebugForTest: () => Yr,
      startLeaveCoverDebug: () => er,
      startLeaveCoverProbe: () => nr,
      whereIs: () => xr
    });
    var Zr = Qr(5517),
      Wr = Qr(3909);
    const ar = 2e3,
      jr = 32,
      Ir = 80,
      fr = ".EverythingMenuBannerDiv";

    function Er(rr) {
      const Sr = rr.trim().replace(/[\s=]+/g, ".").slice(0, Ir);
      return "" === Sr ? "-" : Sr
    }

    function pr(rr, Sr) {
      const Qr = rr.getAttribute("src");
      if (null === Qr || "" === Qr.trim()) return "none";
      try {
        const rr = new URL(Qr, Sr);
        return "http:" === rr.protocol || "https:" === rr.protocol ? rr.hostname : rr.protocol.replace(":", "")
      } catch {
        return "invalid"
      }
    }

    function xr(rr, Sr) {
      return null !== rr.closest(fr) ? "banner" : null !== Sr && Sr.contains(rr) ? "app" : "body"
    }

    function mr(rr, Sr, Qr, Zr) {
      var Wr, ar, jr, Ir;
      if (null === rr || rr === Sr || Sr.contains(rr)) return null;
      const fr = null === (Wr = rr.ownerDocument.defaultView) || void 0 === Wr ? void 0 : Wr.getComputedStyle(rr),
        mr = rr.getBoundingClientRect();
      return `leave covered ${[["trigger",Zr],["where",xr(rr,Qr)],["tag",rr.tagName.toLowerCase()],["id",Er(rr.id)],["class",Er(null!==(ar=rr.getAttribute("class"))&&void 0!==ar?ar:"")],["z",Er(null!==(jr=null===fr||void 0===fr?void 0:fr.zIndex)&&void 0!==jr?jr:"")],["position",Er(null!==(Ir=null===fr||void 0===fr?void 0:fr.position)&&void 0!==Ir?Ir:"")],["size",`${Math.round(mr.width)}x${Math.round(mr.height)}`],["iframe","IFRAME"===rr.tagName?Er(pr(rr,rr.ownerDocument.baseURI)):"-"]].map((rr=>{let[Sr,Qr]=rr;return`${Sr}=${Qr}`})).join(" ")}`
    }

    function Nr(rr) {
      const Sr = rr.getBoundingClientRect();
      return 0 === Sr.width || 0 === Sr.height ? null : {
        x: Sr.left + Sr.width / 2,
        y: Sr.top + Sr.height / 2
      }
    }

    function Ur(rr, Sr) {
      const Qr = rr.getBoundingClientRect(),
        Zr = Sr.getBoundingClientRect();
      return Math.max(Qr.left, Zr.left) < Math.min(Qr.right, Zr.right) && Math.max(Qr.top, Zr.top) < Math.min(Qr.bottom, Zr.bottom)
    }

    function tr(rr, Sr, Qr, Zr) {
      const Wr = rr.getBoundingClientRect();
      return Sr >= Wr.left - Zr && Sr <= Wr.right + Zr && Qr >= Wr.top - Zr && Qr <= Wr.bottom + Zr
    }

    function hr(rr) {
      (0, Wr.l)("leavecover", rr)
    }
    const zr = new Set;

    function Yr() {
      zr.clear()
    }

    function nr(rr) {
      let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : hr;
      const Qr = rr.ownerDocument,
        Zr = Qr.defaultView;
      if (null === Zr) return () => {};
      const Wr = (rr, Qr) => {
          null === rr || zr.has(Qr) || (zr.add(Qr), Sr(rr))
        },
        Ir = Sr => {
          const Zr = rr.isConnected ? Nr(rr) : null;
          if (null === Zr) return;
          const ar = Qr.elementFromPoint(Zr.x, Zr.y);
          if (null !== ar) {
            const Zr = Qr.getElementById("root");
            Wr(mr(ar, rr, Zr, Sr), xr(ar, Zr))
          }
        };
      let fr = null;
      const Er = rr => {
        fr = {
          x: rr.clientX,
          y: rr.clientY
        }
      };
      let pr = null;
      const Yr = () => {
          pr = setTimeout((() => {
            pr = null;
            const Sr = Qr.activeElement;
            if ("IFRAME" !== (null === Sr || void 0 === Sr ? void 0 : Sr.tagName) || !rr.isConnected) return;
            const Zr = Nr(rr),
              ar = null !== Zr && tr(Sr, Zr.x, Zr.y, 0),
              Ir = fr,
              Er = null !== Ir && tr(rr, Ir.x, Ir.y, jr);
            if (Ur(Sr, rr) && (ar || Er)) {
              const Zr = Qr.getElementById("root");
              Wr(mr(Sr, rr, Zr, "blurIframe"), xr(Sr, Zr))
            }
          }), 0)
        },
        nr = Zr.requestAnimationFrame((() => {
          Ir("open")
        })),
        er = setTimeout((() => {
          Ir("recheck")
        }), ar);
      return Zr.addEventListener("pointermove", Er, {
        capture: !0,
        passive: !0
      }), Zr.addEventListener("pointerdown", Er, {
        capture: !0,
        passive: !0
      }), Zr.addEventListener("blur", Yr), () => {
        Zr.cancelAnimationFrame(nr), clearTimeout(er), null !== pr && clearTimeout(pr), Zr.removeEventListener("pointermove", Er, {
          capture: !0
        }), Zr.removeEventListener("pointerdown", Er, {
          capture: !0
        }), Zr.removeEventListener("blur", Yr)
      }
    }

    function er() {
      (0, Zr.j)(nr)
    }
  },
  5517: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => jr,
      f: () => ar,
      j: () => Wr
    });
    let Zr = null;

    function Wr(rr) {
      Zr = rr
    }

    function ar() {
      return Zr
    }

    function jr(rr) {
      return "bloxd" === rr.site && !rr.isMobileApp && !rr.isTouchScreen
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);