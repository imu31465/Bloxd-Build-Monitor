export const id = 46;
export const ids = [46];
export const modules = {
  5442: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      LEAVE_POINTER_MARGIN_PX: () => PW,
      RECHECK_MS: () => NW,
      iframeHost: () => tW,
      isNear: () => bW,
      leaveCoverLine: () => xW,
      overlaps: () => AW,
      resetLeaveCoverDebugForTest: () => kW,
      startLeaveCoverDebug: () => MW,
      startLeaveCoverProbe: () => sW,
      whereIs: () => ZW
    });
    var mW = OW(5445),
      EW = OW(3866);
    const NW = 2e3,
      PW = 32,
      LW = 80,
      cW = ".EverythingMenuBannerDiv";

    function wW(WW) {
      const iW = WW.trim().replace(/[\s=]+/g, ".").slice(0, LW);
      return "" === iW ? "-" : iW
    }

    function tW(WW, iW) {
      const OW = WW.getAttribute("src");
      if (null === OW || "" === OW.trim()) return "none";
      try {
        const WW = new URL(OW, iW);
        return "http:" === WW.protocol || "https:" === WW.protocol ? WW.hostname : WW.protocol.replace(":", "")
      } catch {
        return "invalid"
      }
    }

    function ZW(WW, iW) {
      return null !== WW.closest(cW) ? "banner" : null !== iW && iW.contains(WW) ? "app" : "body"
    }

    function xW(WW, iW, OW, mW) {
      var EW, NW, PW, LW;
      if (null === WW || WW === iW || iW.contains(WW)) return null;
      const cW = null === (EW = WW.ownerDocument.defaultView) || void 0 === EW ? void 0 : EW.getComputedStyle(WW),
        xW = WW.getBoundingClientRect();
      return `leave covered ${[["trigger",mW],["where",ZW(WW,OW)],["tag",WW.tagName.toLowerCase()],["id",wW(WW.id)],["class",wW(null!==(NW=WW.getAttribute("class"))&&void 0!==NW?NW:"")],["z",wW(null!==(PW=null===cW||void 0===cW?void 0:cW.zIndex)&&void 0!==PW?PW:"")],["position",wW(null!==(LW=null===cW||void 0===cW?void 0:cW.position)&&void 0!==LW?LW:"")],["size",`${Math.round(xW.width)}x${Math.round(xW.height)}`],["iframe","IFRAME"===WW.tagName?wW(tW(WW,WW.ownerDocument.baseURI)):"-"]].map((WW=>{let[iW,OW]=WW;return`${iW}=${OW}`})).join(" ")}`
    }

    function lW(WW) {
      const iW = WW.getBoundingClientRect();
      return 0 === iW.width || 0 === iW.height ? null : {
        x: iW.left + iW.width / 2,
        y: iW.top + iW.height / 2
      }
    }

    function AW(WW, iW) {
      const OW = WW.getBoundingClientRect(),
        mW = iW.getBoundingClientRect();
      return Math.max(OW.left, mW.left) < Math.min(OW.right, mW.right) && Math.max(OW.top, mW.top) < Math.min(OW.bottom, mW.bottom)
    }

    function bW(WW, iW, OW, mW) {
      const EW = WW.getBoundingClientRect();
      return iW >= EW.left - mW && iW <= EW.right + mW && OW >= EW.top - mW && OW <= EW.bottom + mW
    }

    function jW(WW) {
      (0, EW.m)("leavecover", WW)
    }
    const UW = new Set;

    function kW() {
      UW.clear()
    }

    function sW(WW) {
      let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : jW;
      const OW = WW.ownerDocument,
        mW = OW.defaultView;
      if (null === mW) return () => {};
      const EW = (WW, OW) => {
          null === WW || UW.has(OW) || (UW.add(OW), iW(WW))
        },
        LW = iW => {
          const mW = WW.isConnected ? lW(WW) : null;
          if (null === mW) return;
          const NW = OW.elementFromPoint(mW.x, mW.y);
          if (null !== NW) {
            const mW = OW.getElementById("root");
            EW(xW(NW, WW, mW, iW), ZW(NW, mW))
          }
        };
      let cW = null;
      const wW = WW => {
        cW = {
          x: WW.clientX,
          y: WW.clientY
        }
      };
      let tW = null;
      const kW = () => {
          tW = setTimeout((() => {
            tW = null;
            const iW = OW.activeElement;
            if ("IFRAME" !== (null === iW || void 0 === iW ? void 0 : iW.tagName) || !WW.isConnected) return;
            const mW = lW(WW),
              NW = null !== mW && bW(iW, mW.x, mW.y, 0),
              LW = cW,
              wW = null !== LW && bW(WW, LW.x, LW.y, PW);
            if (AW(iW, WW) && (NW || wW)) {
              const mW = OW.getElementById("root");
              EW(xW(iW, WW, mW, "blurIframe"), ZW(iW, mW))
            }
          }), 0)
        },
        sW = mW.requestAnimationFrame((() => {
          LW("open")
        })),
        MW = setTimeout((() => {
          LW("recheck")
        }), NW);
      return mW.addEventListener("pointermove", wW, {
        capture: !0,
        passive: !0
      }), mW.addEventListener("pointerdown", wW, {
        capture: !0,
        passive: !0
      }), mW.addEventListener("blur", kW), () => {
        mW.cancelAnimationFrame(sW), clearTimeout(MW), null !== tW && clearTimeout(tW), mW.removeEventListener("pointermove", wW, {
          capture: !0
        }), mW.removeEventListener("pointerdown", wW, {
          capture: !0
        }), mW.removeEventListener("blur", kW)
      }
    }

    function MW() {
      (0, mW.k)(sW)
    }
  },
  5445: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => PW,
      g: () => NW,
      k: () => EW
    });
    let mW = null;

    function EW(WW) {
      mW = WW
    }

    function NW() {
      return mW
    }

    function PW(WW) {
      return "bloxd" === WW.site && !WW.isMobileApp && !WW.isTouchScreen
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);