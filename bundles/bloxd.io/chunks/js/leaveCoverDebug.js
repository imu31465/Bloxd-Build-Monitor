export const id = 44;
export const ids = [44];
export const modules = {
  5200: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      LEAVE_POINTER_MARGIN_PX: () => yV,
      RECHECK_MS: () => UV,
      iframeHost: () => wV,
      isNear: () => bV,
      leaveCoverLine: () => vV,
      overlaps: () => kV,
      resetLeaveCoverDebugForTest: () => jV,
      startLeaveCoverDebug: () => tV,
      startLeaveCoverProbe: () => qV,
      whereIs: () => ZV
    });
    var JV = xV(5204),
      YV = xV(3142);
    const UV = 2e3,
      yV = 32,
      pV = 80,
      QV = ".EverythingMenuBannerDiv";

    function nV(VV) {
      const eV = VV.trim().replace(/[\s=]+/g, ".").slice(0, pV);
      return "" === eV ? "-" : eV
    }

    function wV(VV, eV) {
      const xV = VV.getAttribute("src");
      if (null === xV || "" === xV.trim()) return "none";
      try {
        const VV = new URL(xV, eV);
        return "http:" === VV.protocol || "https:" === VV.protocol ? VV.hostname : VV.protocol.replace(":", "")
      } catch {
        return "invalid"
      }
    }

    function ZV(VV, eV) {
      return null !== VV.closest(QV) ? "banner" : null !== eV && eV.contains(VV) ? "app" : "body"
    }

    function vV(VV, eV, xV, JV) {
      var YV, UV, yV, pV;
      if (null === VV || VV === eV || eV.contains(VV)) return null;
      const QV = null === (YV = VV.ownerDocument.defaultView) || void 0 === YV ? void 0 : YV.getComputedStyle(VV),
        vV = VV.getBoundingClientRect();
      return `leave covered ${[["trigger",JV],["where",ZV(VV,xV)],["tag",VV.tagName.toLowerCase()],["id",nV(VV.id)],["class",nV(null!==(UV=VV.getAttribute("class"))&&void 0!==UV?UV:"")],["z",nV(null!==(yV=null===QV||void 0===QV?void 0:QV.zIndex)&&void 0!==yV?yV:"")],["position",nV(null!==(pV=null===QV||void 0===QV?void 0:QV.position)&&void 0!==pV?pV:"")],["size",`${Math.round(vV.width)}x${Math.round(vV.height)}`],["iframe","IFRAME"===VV.tagName?nV(wV(VV,VV.ownerDocument.baseURI)):"-"]].map((VV=>{let[eV,xV]=VV;return`${eV}=${xV}`})).join(" ")}`
    }

    function rV(VV) {
      const eV = VV.getBoundingClientRect();
      return 0 === eV.width || 0 === eV.height ? null : {
        x: eV.left + eV.width / 2,
        y: eV.top + eV.height / 2
      }
    }

    function kV(VV, eV) {
      const xV = VV.getBoundingClientRect(),
        JV = eV.getBoundingClientRect();
      return Math.max(xV.left, JV.left) < Math.min(xV.right, JV.right) && Math.max(xV.top, JV.top) < Math.min(xV.bottom, JV.bottom)
    }

    function bV(VV, eV, xV, JV) {
      const YV = VV.getBoundingClientRect();
      return eV >= YV.left - JV && eV <= YV.right + JV && xV >= YV.top - JV && xV <= YV.bottom + JV
    }

    function EV(VV) {
      (0, YV.i)("leavecover", VV)
    }
    const BV = new Set;

    function jV() {
      BV.clear()
    }

    function qV(VV) {
      let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : EV;
      const xV = VV.ownerDocument,
        JV = xV.defaultView;
      if (null === JV) return () => {};
      const YV = (VV, xV) => {
          null === VV || BV.has(xV) || (BV.add(xV), eV(VV))
        },
        pV = eV => {
          const JV = VV.isConnected ? rV(VV) : null;
          if (null === JV) return;
          const UV = xV.elementFromPoint(JV.x, JV.y);
          if (null !== UV) {
            const JV = xV.getElementById("root");
            YV(vV(UV, VV, JV, eV), ZV(UV, JV))
          }
        };
      let QV = null;
      const nV = VV => {
        QV = {
          x: VV.clientX,
          y: VV.clientY
        }
      };
      let wV = null;
      const jV = () => {
          wV = setTimeout((() => {
            wV = null;
            const eV = xV.activeElement;
            if ("IFRAME" !== (null === eV || void 0 === eV ? void 0 : eV.tagName) || !VV.isConnected) return;
            const JV = rV(VV),
              UV = null !== JV && bV(eV, JV.x, JV.y, 0),
              pV = QV,
              nV = null !== pV && bV(VV, pV.x, pV.y, yV);
            if (kV(eV, VV) && (UV || nV)) {
              const JV = xV.getElementById("root");
              YV(vV(eV, VV, JV, "blurIframe"), ZV(eV, JV))
            }
          }), 0)
        },
        qV = JV.requestAnimationFrame((() => {
          pV("open")
        })),
        tV = setTimeout((() => {
          pV("recheck")
        }), UV);
      return JV.addEventListener("pointermove", nV, {
        capture: !0,
        passive: !0
      }), JV.addEventListener("pointerdown", nV, {
        capture: !0,
        passive: !0
      }), JV.addEventListener("blur", jV), () => {
        JV.cancelAnimationFrame(qV), clearTimeout(tV), null !== wV && clearTimeout(wV), JV.removeEventListener("pointermove", nV, {
          capture: !0
        }), JV.removeEventListener("pointerdown", nV, {
          capture: !0
        }), JV.removeEventListener("blur", jV)
      }
    }

    function tV() {
      (0, JV.j)(qV)
    }
  },
  5204: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => yV,
      f: () => UV,
      j: () => YV
    });
    let JV = null;

    function YV(VV) {
      JV = VV
    }

    function UV() {
      return JV
    }

    function yV(VV) {
      return "bloxd" === VV.site && !VV.isMobileApp && !VV.isTouchScreen
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);