export const id = 45;
export const ids = [45];
export const modules = {
  5196: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      LEAVE_POINTER_MARGIN_PX: () => AU,
      RECHECK_MS: () => QU,
      iframeHost: () => EU,
      isNear: () => aU,
      leaveCoverLine: () => NU,
      overlaps: () => pU,
      resetLeaveCoverDebugForTest: () => kU,
      startLeaveCoverDebug: () => BU,
      startLeaveCoverProbe: () => GU,
      whereIs: () => YU
    });
    var cU = zU(5204),
      yU = zU(3099);
    const QU = 2e3,
      AU = 32,
      FU = 80,
      oU = ".EverythingMenuBannerDiv";

    function DU(UU) {
      const XU = UU.trim().replace(/[\s=]+/g, ".").slice(0, FU);
      return "" === XU ? "-" : XU
    }

    function EU(UU, XU) {
      const zU = UU.getAttribute("src");
      if (null === zU || "" === zU.trim()) return "none";
      try {
        const UU = new URL(zU, XU);
        return "http:" === UU.protocol || "https:" === UU.protocol ? UU.hostname : UU.protocol.replace(":", "")
      } catch {
        return "invalid"
      }
    }

    function YU(UU, XU) {
      return null !== UU.closest(oU) ? "banner" : null !== XU && XU.contains(UU) ? "app" : "body"
    }

    function NU(UU, XU, zU, cU) {
      var yU, QU, AU, FU;
      if (null === UU || UU === XU || XU.contains(UU)) return null;
      const oU = null === (yU = UU.ownerDocument.defaultView) || void 0 === yU ? void 0 : yU.getComputedStyle(UU),
        NU = UU.getBoundingClientRect();
      return `leave covered ${[["trigger",cU],["where",YU(UU,zU)],["tag",UU.tagName.toLowerCase()],["id",DU(UU.id)],["class",DU(null!==(QU=UU.getAttribute("class"))&&void 0!==QU?QU:"")],["z",DU(null!==(AU=null===oU||void 0===oU?void 0:oU.zIndex)&&void 0!==AU?AU:"")],["position",DU(null!==(FU=null===oU||void 0===oU?void 0:oU.position)&&void 0!==FU?FU:"")],["size",`${Math.round(NU.width)}x${Math.round(NU.height)}`],["iframe","IFRAME"===UU.tagName?DU(EU(UU,UU.ownerDocument.baseURI)):"-"]].map((UU=>{let[XU,zU]=UU;return`${XU}=${zU}`})).join(" ")}`
    }

    function IU(UU) {
      const XU = UU.getBoundingClientRect();
      return 0 === XU.width || 0 === XU.height ? null : {
        x: XU.left + XU.width / 2,
        y: XU.top + XU.height / 2
      }
    }

    function pU(UU, XU) {
      const zU = UU.getBoundingClientRect(),
        cU = XU.getBoundingClientRect();
      return Math.max(zU.left, cU.left) < Math.min(zU.right, cU.right) && Math.max(zU.top, cU.top) < Math.min(zU.bottom, cU.bottom)
    }

    function aU(UU, XU, zU, cU) {
      const yU = UU.getBoundingClientRect();
      return XU >= yU.left - cU && XU <= yU.right + cU && zU >= yU.top - cU && zU <= yU.bottom + cU
    }

    function tU(UU) {
      (0, yU.l)("leavecover", UU)
    }
    const gU = new Set;

    function kU() {
      gU.clear()
    }

    function GU(UU) {
      let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tU;
      const zU = UU.ownerDocument,
        cU = zU.defaultView;
      if (null === cU) return () => {};
      const yU = (UU, zU) => {
          null === UU || gU.has(zU) || (gU.add(zU), XU(UU))
        },
        FU = XU => {
          const cU = UU.isConnected ? IU(UU) : null;
          if (null === cU) return;
          const QU = zU.elementFromPoint(cU.x, cU.y);
          if (null !== QU) {
            const cU = zU.getElementById("root");
            yU(NU(QU, UU, cU, XU), YU(QU, cU))
          }
        };
      let oU = null;
      const DU = UU => {
        oU = {
          x: UU.clientX,
          y: UU.clientY
        }
      };
      let EU = null;
      const kU = () => {
          EU = setTimeout((() => {
            EU = null;
            const XU = zU.activeElement;
            if ("IFRAME" !== (null === XU || void 0 === XU ? void 0 : XU.tagName) || !UU.isConnected) return;
            const cU = IU(UU),
              QU = null !== cU && aU(XU, cU.x, cU.y, 0),
              FU = oU,
              DU = null !== FU && aU(UU, FU.x, FU.y, AU);
            if (pU(XU, UU) && (QU || DU)) {
              const cU = zU.getElementById("root");
              yU(NU(XU, UU, cU, "blurIframe"), YU(XU, cU))
            }
          }), 0)
        },
        GU = cU.requestAnimationFrame((() => {
          FU("open")
        })),
        BU = setTimeout((() => {
          FU("recheck")
        }), QU);
      return cU.addEventListener("pointermove", DU, {
        capture: !0,
        passive: !0
      }), cU.addEventListener("pointerdown", DU, {
        capture: !0,
        passive: !0
      }), cU.addEventListener("blur", kU), () => {
        cU.cancelAnimationFrame(GU), clearTimeout(BU), null !== EU && clearTimeout(EU), cU.removeEventListener("pointermove", DU, {
          capture: !0
        }), cU.removeEventListener("pointerdown", DU, {
          capture: !0
        }), cU.removeEventListener("blur", kU)
      }
    }

    function BU() {
      (0, cU.h)(GU)
    }
  },
  5204: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => AU,
      e: () => QU,
      h: () => yU
    });
    let cU = null;

    function yU(UU) {
      cU = UU
    }

    function QU() {
      return cU
    }

    function AU(UU) {
      return "bloxd" === UU.site && !UU.isMobileApp && !UU.isTouchScreen
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);