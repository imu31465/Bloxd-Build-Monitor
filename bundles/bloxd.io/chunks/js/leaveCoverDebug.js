export const id = 46;
export const ids = [46];
export const modules = {
  5579: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      LEAVE_POINTER_MARGIN_PX: () => ZR,
      RECHECK_MS: () => uR,
      iframeHost: () => VR,
      isNear: () => aR,
      leaveCoverLine: () => wR,
      overlaps: () => eR,
      resetLeaveCoverDebugForTest: () => UR,
      startLeaveCoverDebug: () => AR,
      startLeaveCoverProbe: () => WR,
      whereIs: () => KR
    });
    var yR = GR(5581),
      tR = GR(3960);
    const uR = 2e3,
      ZR = 32,
      qR = 80,
      iR = ".EverythingMenuBannerDiv";

    function fR(RR) {
      const JR = RR.trim().replace(/[\s=]+/g, ".").slice(0, qR);
      return "" === JR ? "-" : JR
    }

    function VR(RR, JR) {
      const GR = RR.getAttribute("src");
      if (null === GR || "" === GR.trim()) return "none";
      try {
        const RR = new URL(GR, JR);
        return "http:" === RR.protocol || "https:" === RR.protocol ? RR.hostname : RR.protocol.replace(":", "")
      } catch {
        return "invalid"
      }
    }

    function KR(RR, JR) {
      return null !== RR.closest(iR) ? "banner" : null !== JR && JR.contains(RR) ? "app" : "body"
    }

    function wR(RR, JR, GR, yR) {
      var tR, uR, ZR, qR;
      if (null === RR || RR === JR || JR.contains(RR)) return null;
      const iR = null === (tR = RR.ownerDocument.defaultView) || void 0 === tR ? void 0 : tR.getComputedStyle(RR),
        wR = RR.getBoundingClientRect();
      return `leave covered ${[["trigger",yR],["where",KR(RR,GR)],["tag",RR.tagName.toLowerCase()],["id",fR(RR.id)],["class",fR(null!==(uR=RR.getAttribute("class"))&&void 0!==uR?uR:"")],["z",fR(null!==(ZR=null===iR||void 0===iR?void 0:iR.zIndex)&&void 0!==ZR?ZR:"")],["position",fR(null!==(qR=null===iR||void 0===iR?void 0:iR.position)&&void 0!==qR?qR:"")],["size",`${Math.round(wR.width)}x${Math.round(wR.height)}`],["iframe","IFRAME"===RR.tagName?fR(VR(RR,RR.ownerDocument.baseURI)):"-"]].map((RR=>{let[JR,GR]=RR;return`${JR}=${GR}`})).join(" ")}`
    }

    function rR(RR) {
      const JR = RR.getBoundingClientRect();
      return 0 === JR.width || 0 === JR.height ? null : {
        x: JR.left + JR.width / 2,
        y: JR.top + JR.height / 2
      }
    }

    function eR(RR, JR) {
      const GR = RR.getBoundingClientRect(),
        yR = JR.getBoundingClientRect();
      return Math.max(GR.left, yR.left) < Math.min(GR.right, yR.right) && Math.max(GR.top, yR.top) < Math.min(GR.bottom, yR.bottom)
    }

    function aR(RR, JR, GR, yR) {
      const tR = RR.getBoundingClientRect();
      return JR >= tR.left - yR && JR <= tR.right + yR && GR >= tR.top - yR && GR <= tR.bottom + yR
    }

    function LR(RR) {
      (0, tR.k)("leavecover", RR)
    }
    const nR = new Set;

    function UR() {
      nR.clear()
    }

    function WR(RR) {
      let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : LR;
      const GR = RR.ownerDocument,
        yR = GR.defaultView;
      if (null === yR) return () => {};
      const tR = (RR, GR) => {
          null === RR || nR.has(GR) || (nR.add(GR), JR(RR))
        },
        qR = JR => {
          const yR = RR.isConnected ? rR(RR) : null;
          if (null === yR) return;
          const uR = GR.elementFromPoint(yR.x, yR.y);
          if (null !== uR) {
            const yR = GR.getElementById("root");
            tR(wR(uR, RR, yR, JR), KR(uR, yR))
          }
        };
      let iR = null;
      const fR = RR => {
        iR = {
          x: RR.clientX,
          y: RR.clientY
        }
      };
      let VR = null;
      const UR = () => {
          VR = setTimeout((() => {
            VR = null;
            const JR = GR.activeElement;
            if ("IFRAME" !== (null === JR || void 0 === JR ? void 0 : JR.tagName) || !RR.isConnected) return;
            const yR = rR(RR),
              uR = null !== yR && aR(JR, yR.x, yR.y, 0),
              qR = iR,
              fR = null !== qR && aR(RR, qR.x, qR.y, ZR);
            if (eR(JR, RR) && (uR || fR)) {
              const yR = GR.getElementById("root");
              tR(wR(JR, RR, yR, "blurIframe"), KR(JR, yR))
            }
          }), 0)
        },
        WR = yR.requestAnimationFrame((() => {
          qR("open")
        })),
        AR = setTimeout((() => {
          qR("recheck")
        }), uR);
      return yR.addEventListener("pointermove", fR, {
        capture: !0,
        passive: !0
      }), yR.addEventListener("pointerdown", fR, {
        capture: !0,
        passive: !0
      }), yR.addEventListener("blur", UR), () => {
        yR.cancelAnimationFrame(WR), clearTimeout(AR), null !== VR && clearTimeout(VR), yR.removeEventListener("pointermove", fR, {
          capture: !0
        }), yR.removeEventListener("pointerdown", fR, {
          capture: !0
        }), yR.removeEventListener("blur", UR)
      }
    }

    function AR() {
      (0, yR.e)(WR)
    }
  },
  5581: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => ZR,
      c: () => uR,
      e: () => tR
    });
    let yR = null;

    function tR(RR) {
      yR = RR
    }

    function uR() {
      return yR
    }

    function ZR(RR) {
      return "bloxd" === RR.site && !RR.isMobileApp && !RR.isTouchScreen
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);