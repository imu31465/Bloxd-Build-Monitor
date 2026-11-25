export const id = 40;
export const ids = [40];
export const modules = {
  5018: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      LEAVE_POINTER_MARGIN_PX: () => zQ,
      RECHECK_MS: () => TQ,
      iframeHost: () => gQ,
      isNear: () => BQ,
      leaveCoverLine: () => rQ,
      overlaps: () => jQ,
      resetLeaveCoverDebugForTest: () => DQ,
      startLeaveCoverDebug: () => GQ,
      startLeaveCoverProbe: () => pQ,
      whereIs: () => JQ
    });
    var wQ = XQ(5025),
      qQ = XQ(3045);
    const TQ = 2e3,
      zQ = 32,
      sQ = 80,
      FQ = ".EverythingMenuBannerDiv";

    function PQ(QQ) {
      const WQ = QQ.trim().replace(/[\s=]+/g, ".").slice(0, sQ);
      return "" === WQ ? "-" : WQ
    }

    function gQ(QQ, WQ) {
      const XQ = QQ.getAttribute("src");
      if (null === XQ || "" === XQ.trim()) return "none";
      try {
        const QQ = new URL(XQ, WQ);
        return "http:" === QQ.protocol || "https:" === QQ.protocol ? QQ.hostname : QQ.protocol.replace(":", "")
      } catch {
        return "invalid"
      }
    }

    function JQ(QQ, WQ) {
      return null !== QQ.closest(FQ) ? "banner" : null !== WQ && WQ.contains(QQ) ? "app" : "body"
    }

    function rQ(QQ, WQ, XQ, wQ) {
      var qQ, TQ, zQ, sQ;
      if (null === QQ || QQ === WQ || WQ.contains(QQ)) return null;
      const FQ = null === (qQ = QQ.ownerDocument.defaultView) || void 0 === qQ ? void 0 : qQ.getComputedStyle(QQ),
        rQ = QQ.getBoundingClientRect();
      return `leave covered ${[["trigger",wQ],["where",JQ(QQ,XQ)],["tag",QQ.tagName.toLowerCase()],["id",PQ(QQ.id)],["class",PQ(null!==(TQ=QQ.getAttribute("class"))&&void 0!==TQ?TQ:"")],["z",PQ(null!==(zQ=null===FQ||void 0===FQ?void 0:FQ.zIndex)&&void 0!==zQ?zQ:"")],["position",PQ(null!==(sQ=null===FQ||void 0===FQ?void 0:FQ.position)&&void 0!==sQ?sQ:"")],["size",`${Math.round(rQ.width)}x${Math.round(rQ.height)}`],["iframe","IFRAME"===QQ.tagName?PQ(gQ(QQ,QQ.ownerDocument.baseURI)):"-"]].map((QQ=>{let[WQ,XQ]=QQ;return`${WQ}=${XQ}`})).join(" ")}`
    }

    function IQ(QQ) {
      const WQ = QQ.getBoundingClientRect();
      return 0 === WQ.width || 0 === WQ.height ? null : {
        x: WQ.left + WQ.width / 2,
        y: WQ.top + WQ.height / 2
      }
    }

    function jQ(QQ, WQ) {
      const XQ = QQ.getBoundingClientRect(),
        wQ = WQ.getBoundingClientRect();
      return Math.max(XQ.left, wQ.left) < Math.min(XQ.right, wQ.right) && Math.max(XQ.top, wQ.top) < Math.min(XQ.bottom, wQ.bottom)
    }

    function BQ(QQ, WQ, XQ, wQ) {
      const qQ = QQ.getBoundingClientRect();
      return WQ >= qQ.left - wQ && WQ <= qQ.right + wQ && XQ >= qQ.top - wQ && XQ <= qQ.bottom + wQ
    }

    function yQ(QQ) {
      (0, qQ.j)("leavecover", QQ)
    }
    const VQ = new Set;

    function DQ() {
      VQ.clear()
    }

    function pQ(QQ) {
      let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yQ;
      const XQ = QQ.ownerDocument,
        wQ = XQ.defaultView;
      if (null === wQ) return () => {};
      const qQ = (QQ, XQ) => {
          null === QQ || VQ.has(XQ) || (VQ.add(XQ), WQ(QQ))
        },
        sQ = WQ => {
          const wQ = QQ.isConnected ? IQ(QQ) : null;
          if (null === wQ) return;
          const TQ = XQ.elementFromPoint(wQ.x, wQ.y);
          if (null !== TQ) {
            const wQ = XQ.getElementById("root");
            qQ(rQ(TQ, QQ, wQ, WQ), JQ(TQ, wQ))
          }
        };
      let FQ = null;
      const PQ = QQ => {
        FQ = {
          x: QQ.clientX,
          y: QQ.clientY
        }
      };
      let gQ = null;
      const DQ = () => {
          gQ = setTimeout((() => {
            gQ = null;
            const WQ = XQ.activeElement;
            if ("IFRAME" !== (null === WQ || void 0 === WQ ? void 0 : WQ.tagName) || !QQ.isConnected) return;
            const wQ = IQ(QQ),
              TQ = null !== wQ && BQ(WQ, wQ.x, wQ.y, 0),
              sQ = FQ,
              PQ = null !== sQ && BQ(QQ, sQ.x, sQ.y, zQ);
            if (jQ(WQ, QQ) && (TQ || PQ)) {
              const wQ = XQ.getElementById("root");
              qQ(rQ(WQ, QQ, wQ, "blurIframe"), JQ(WQ, wQ))
            }
          }), 0)
        },
        pQ = wQ.requestAnimationFrame((() => {
          sQ("open")
        })),
        GQ = setTimeout((() => {
          sQ("recheck")
        }), TQ);
      return wQ.addEventListener("pointermove", PQ, {
        capture: !0,
        passive: !0
      }), wQ.addEventListener("pointerdown", PQ, {
        capture: !0,
        passive: !0
      }), wQ.addEventListener("blur", DQ), () => {
        wQ.cancelAnimationFrame(pQ), clearTimeout(GQ), null !== gQ && clearTimeout(gQ), wQ.removeEventListener("pointermove", PQ, {
          capture: !0
        }), wQ.removeEventListener("pointerdown", PQ, {
          capture: !0
        }), wQ.removeEventListener("blur", DQ)
      }
    }

    function GQ() {
      (0, wQ.f)(pQ)
    }
  },
  5025: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => zQ,
      d: () => TQ,
      f: () => qQ
    });
    let wQ = null;

    function qQ(QQ) {
      wQ = QQ
    }

    function TQ() {
      return wQ
    }

    function zQ(QQ) {
      return "bloxd" === QQ.site && !QQ.isMobileApp && !QQ.isTouchScreen
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);