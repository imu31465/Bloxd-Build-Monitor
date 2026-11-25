export const id = 44;
export const ids = [44];
export const modules = {
  5087: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      LEAVE_POINTER_MARGIN_PX: () => aM,
      RECHECK_MS: () => jM,
      iframeHost: () => zM,
      isNear: () => JM,
      leaveCoverLine: () => mM,
      overlaps: () => hM,
      resetLeaveCoverDebugForTest: () => lM,
      startLeaveCoverDebug: () => UM,
      startLeaveCoverProbe: () => EM,
      whereIs: () => LM
    });
    var OM = iM(5096),
      SM = iM(3122);
    const jM = 2e3,
      aM = 32,
      PM = 80,
      nM = ".EverythingMenuBannerDiv";

    function QM(MM) {
      const rM = MM.trim().replace(/[\s=]+/g, ".").slice(0, PM);
      return "" === rM ? "-" : rM
    }

    function zM(MM, rM) {
      const iM = MM.getAttribute("src");
      if (null === iM || "" === iM.trim()) return "none";
      try {
        const MM = new URL(iM, rM);
        return "http:" === MM.protocol || "https:" === MM.protocol ? MM.hostname : MM.protocol.replace(":", "")
      } catch {
        return "invalid"
      }
    }

    function LM(MM, rM) {
      return null !== MM.closest(nM) ? "banner" : null !== rM && rM.contains(MM) ? "app" : "body"
    }

    function mM(MM, rM, iM, OM) {
      var SM, jM, aM, PM;
      if (null === MM || MM === rM || rM.contains(MM)) return null;
      const nM = null === (SM = MM.ownerDocument.defaultView) || void 0 === SM ? void 0 : SM.getComputedStyle(MM),
        mM = MM.getBoundingClientRect();
      return `leave covered ${[["trigger",OM],["where",LM(MM,iM)],["tag",MM.tagName.toLowerCase()],["id",QM(MM.id)],["class",QM(null!==(jM=MM.getAttribute("class"))&&void 0!==jM?jM:"")],["z",QM(null!==(aM=null===nM||void 0===nM?void 0:nM.zIndex)&&void 0!==aM?aM:"")],["position",QM(null!==(PM=null===nM||void 0===nM?void 0:nM.position)&&void 0!==PM?PM:"")],["size",`${Math.round(mM.width)}x${Math.round(mM.height)}`],["iframe","IFRAME"===MM.tagName?QM(zM(MM,MM.ownerDocument.baseURI)):"-"]].map((MM=>{let[rM,iM]=MM;return`${rM}=${iM}`})).join(" ")}`
    }

    function HM(MM) {
      const rM = MM.getBoundingClientRect();
      return 0 === rM.width || 0 === rM.height ? null : {
        x: rM.left + rM.width / 2,
        y: rM.top + rM.height / 2
      }
    }

    function hM(MM, rM) {
      const iM = MM.getBoundingClientRect(),
        OM = rM.getBoundingClientRect();
      return Math.max(iM.left, OM.left) < Math.min(iM.right, OM.right) && Math.max(iM.top, OM.top) < Math.min(iM.bottom, OM.bottom)
    }

    function JM(MM, rM, iM, OM) {
      const SM = MM.getBoundingClientRect();
      return rM >= SM.left - OM && rM <= SM.right + OM && iM >= SM.top - OM && iM <= SM.bottom + OM
    }

    function dM(MM) {
      (0, SM.k)("leavecover", MM)
    }
    const yM = new Set;

    function lM() {
      yM.clear()
    }

    function EM(MM) {
      let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : dM;
      const iM = MM.ownerDocument,
        OM = iM.defaultView;
      if (null === OM) return () => {};
      const SM = (MM, iM) => {
          null === MM || yM.has(iM) || (yM.add(iM), rM(MM))
        },
        PM = rM => {
          const OM = MM.isConnected ? HM(MM) : null;
          if (null === OM) return;
          const jM = iM.elementFromPoint(OM.x, OM.y);
          if (null !== jM) {
            const OM = iM.getElementById("root");
            SM(mM(jM, MM, OM, rM), LM(jM, OM))
          }
        };
      let nM = null;
      const QM = MM => {
        nM = {
          x: MM.clientX,
          y: MM.clientY
        }
      };
      let zM = null;
      const lM = () => {
          zM = setTimeout((() => {
            zM = null;
            const rM = iM.activeElement;
            if ("IFRAME" !== (null === rM || void 0 === rM ? void 0 : rM.tagName) || !MM.isConnected) return;
            const OM = HM(MM),
              jM = null !== OM && JM(rM, OM.x, OM.y, 0),
              PM = nM,
              QM = null !== PM && JM(MM, PM.x, PM.y, aM);
            if (hM(rM, MM) && (jM || QM)) {
              const OM = iM.getElementById("root");
              SM(mM(rM, MM, OM, "blurIframe"), LM(rM, OM))
            }
          }), 0)
        },
        EM = OM.requestAnimationFrame((() => {
          PM("open")
        })),
        UM = setTimeout((() => {
          PM("recheck")
        }), jM);
      return OM.addEventListener("pointermove", QM, {
        capture: !0,
        passive: !0
      }), OM.addEventListener("pointerdown", QM, {
        capture: !0,
        passive: !0
      }), OM.addEventListener("blur", lM), () => {
        OM.cancelAnimationFrame(EM), clearTimeout(UM), null !== zM && clearTimeout(zM), OM.removeEventListener("pointermove", QM, {
          capture: !0
        }), OM.removeEventListener("pointerdown", QM, {
          capture: !0
        }), OM.removeEventListener("blur", lM)
      }
    }

    function UM() {
      (0, OM.i)(EM)
    }
  },
  5096: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => aM,
      e: () => jM,
      i: () => SM
    });
    let OM = null;

    function SM(MM) {
      OM = MM
    }

    function jM() {
      return OM
    }

    function aM(MM) {
      return "bloxd" === MM.site && !MM.isMobileApp && !MM.isTouchScreen
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);