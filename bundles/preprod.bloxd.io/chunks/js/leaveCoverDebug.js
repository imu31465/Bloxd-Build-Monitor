export const id = 45;
export const ids = [45];
export const modules = {
  5177: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      LEAVE_POINTER_MARGIN_PX: () => oB,
      RECHECK_MS: () => QB,
      iframeHost: () => MB,
      isNear: () => qB,
      leaveCoverLine: () => zB,
      overlaps: () => pB,
      resetLeaveCoverDebugForTest: () => RB,
      startLeaveCoverDebug: () => AB,
      startLeaveCoverProbe: () => WB,
      whereIs: () => PB
    });
    var YB = GB(5181),
      DB = GB(3136);
    const QB = 2e3,
      oB = 32,
      jB = 80,
      yB = ".EverythingMenuBannerDiv";

    function JB(BB) {
      const OB = BB.trim().replace(/[\s=]+/g, ".").slice(0, jB);
      return "" === OB ? "-" : OB
    }

    function MB(BB, OB) {
      const GB = BB.getAttribute("src");
      if (null === GB || "" === GB.trim()) return "none";
      try {
        const BB = new URL(GB, OB);
        return "http:" === BB.protocol || "https:" === BB.protocol ? BB.hostname : BB.protocol.replace(":", "")
      } catch {
        return "invalid"
      }
    }

    function PB(BB, OB) {
      return null !== BB.closest(yB) ? "banner" : null !== OB && OB.contains(BB) ? "app" : "body"
    }

    function zB(BB, OB, GB, YB) {
      var DB, QB, oB, jB;
      if (null === BB || BB === OB || OB.contains(BB)) return null;
      const yB = null === (DB = BB.ownerDocument.defaultView) || void 0 === DB ? void 0 : DB.getComputedStyle(BB),
        zB = BB.getBoundingClientRect();
      return `leave covered ${[["trigger",YB],["where",PB(BB,GB)],["tag",BB.tagName.toLowerCase()],["id",JB(BB.id)],["class",JB(null!==(QB=BB.getAttribute("class"))&&void 0!==QB?QB:"")],["z",JB(null!==(oB=null===yB||void 0===yB?void 0:yB.zIndex)&&void 0!==oB?oB:"")],["position",JB(null!==(jB=null===yB||void 0===yB?void 0:yB.position)&&void 0!==jB?jB:"")],["size",`${Math.round(zB.width)}x${Math.round(zB.height)}`],["iframe","IFRAME"===BB.tagName?JB(MB(BB,BB.ownerDocument.baseURI)):"-"]].map((BB=>{let[OB,GB]=BB;return`${OB}=${GB}`})).join(" ")}`
    }

    function lB(BB) {
      const OB = BB.getBoundingClientRect();
      return 0 === OB.width || 0 === OB.height ? null : {
        x: OB.left + OB.width / 2,
        y: OB.top + OB.height / 2
      }
    }

    function pB(BB, OB) {
      const GB = BB.getBoundingClientRect(),
        YB = OB.getBoundingClientRect();
      return Math.max(GB.left, YB.left) < Math.min(GB.right, YB.right) && Math.max(GB.top, YB.top) < Math.min(GB.bottom, YB.bottom)
    }

    function qB(BB, OB, GB, YB) {
      const DB = BB.getBoundingClientRect();
      return OB >= DB.left - YB && OB <= DB.right + YB && GB >= DB.top - YB && GB <= DB.bottom + YB
    }

    function ZB(BB) {
      (0, DB.m)("leavecover", BB)
    }
    const NB = new Set;

    function RB() {
      NB.clear()
    }

    function WB(BB) {
      let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ZB;
      const GB = BB.ownerDocument,
        YB = GB.defaultView;
      if (null === YB) return () => {};
      const DB = (BB, GB) => {
          null === BB || NB.has(GB) || (NB.add(GB), OB(BB))
        },
        jB = OB => {
          const YB = BB.isConnected ? lB(BB) : null;
          if (null === YB) return;
          const QB = GB.elementFromPoint(YB.x, YB.y);
          if (null !== QB) {
            const YB = GB.getElementById("root");
            DB(zB(QB, BB, YB, OB), PB(QB, YB))
          }
        };
      let yB = null;
      const JB = BB => {
        yB = {
          x: BB.clientX,
          y: BB.clientY
        }
      };
      let MB = null;
      const RB = () => {
          MB = setTimeout((() => {
            MB = null;
            const OB = GB.activeElement;
            if ("IFRAME" !== (null === OB || void 0 === OB ? void 0 : OB.tagName) || !BB.isConnected) return;
            const YB = lB(BB),
              QB = null !== YB && qB(OB, YB.x, YB.y, 0),
              jB = yB,
              JB = null !== jB && qB(BB, jB.x, jB.y, oB);
            if (pB(OB, BB) && (QB || JB)) {
              const YB = GB.getElementById("root");
              DB(zB(OB, BB, YB, "blurIframe"), PB(OB, YB))
            }
          }), 0)
        },
        WB = YB.requestAnimationFrame((() => {
          jB("open")
        })),
        AB = setTimeout((() => {
          jB("recheck")
        }), QB);
      return YB.addEventListener("pointermove", JB, {
        capture: !0,
        passive: !0
      }), YB.addEventListener("pointerdown", JB, {
        capture: !0,
        passive: !0
      }), YB.addEventListener("blur", RB), () => {
        YB.cancelAnimationFrame(WB), clearTimeout(AB), null !== MB && clearTimeout(MB), YB.removeEventListener("pointermove", JB, {
          capture: !0
        }), YB.removeEventListener("pointerdown", JB, {
          capture: !0
        }), YB.removeEventListener("blur", RB)
      }
    }

    function AB() {
      (0, YB.k)(WB)
    }
  },
  5181: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => oB,
      g: () => QB,
      k: () => DB
    });
    let YB = null;

    function DB(BB) {
      YB = BB
    }

    function QB() {
      return YB
    }

    function oB(BB) {
      return "bloxd" === BB.site && !BB.isMobileApp && !BB.isTouchScreen
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);