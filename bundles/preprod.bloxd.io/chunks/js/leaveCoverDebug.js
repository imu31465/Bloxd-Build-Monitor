export const id = 45;
export const ids = [45];
export const modules = {
  5160: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      LEAVE_POINTER_MARGIN_PX: () => hH,
      RECHECK_MS: () => SH,
      iframeHost: () => EH,
      isNear: () => QH,
      leaveCoverLine: () => GH,
      overlaps: () => uH,
      resetLeaveCoverDebugForTest: () => xH,
      startLeaveCoverDebug: () => PH,
      startLeaveCoverProbe: () => vH,
      whereIs: () => XH
    });
    var AH = LH(5165),
      rH = LH(3105);
    const SH = 2e3,
      hH = 32,
      tH = 80,
      zH = ".EverythingMenuBannerDiv";

    function CH(HH) {
      const BH = HH.trim().replace(/[\s=]+/g, ".").slice(0, tH);
      return "" === BH ? "-" : BH
    }

    function EH(HH, BH) {
      const LH = HH.getAttribute("src");
      if (null === LH || "" === LH.trim()) return "none";
      try {
        const HH = new URL(LH, BH);
        return "http:" === HH.protocol || "https:" === HH.protocol ? HH.hostname : HH.protocol.replace(":", "")
      } catch {
        return "invalid"
      }
    }

    function XH(HH, BH) {
      return null !== HH.closest(zH) ? "banner" : null !== BH && BH.contains(HH) ? "app" : "body"
    }

    function GH(HH, BH, LH, AH) {
      var rH, SH, hH, tH;
      if (null === HH || HH === BH || BH.contains(HH)) return null;
      const zH = null === (rH = HH.ownerDocument.defaultView) || void 0 === rH ? void 0 : rH.getComputedStyle(HH),
        GH = HH.getBoundingClientRect();
      return `leave covered ${[["trigger",AH],["where",XH(HH,LH)],["tag",HH.tagName.toLowerCase()],["id",CH(HH.id)],["class",CH(null!==(SH=HH.getAttribute("class"))&&void 0!==SH?SH:"")],["z",CH(null!==(hH=null===zH||void 0===zH?void 0:zH.zIndex)&&void 0!==hH?hH:"")],["position",CH(null!==(tH=null===zH||void 0===zH?void 0:zH.position)&&void 0!==tH?tH:"")],["size",`${Math.round(GH.width)}x${Math.round(GH.height)}`],["iframe","IFRAME"===HH.tagName?CH(EH(HH,HH.ownerDocument.baseURI)):"-"]].map((HH=>{let[BH,LH]=HH;return`${BH}=${LH}`})).join(" ")}`
    }

    function YH(HH) {
      const BH = HH.getBoundingClientRect();
      return 0 === BH.width || 0 === BH.height ? null : {
        x: BH.left + BH.width / 2,
        y: BH.top + BH.height / 2
      }
    }

    function uH(HH, BH) {
      const LH = HH.getBoundingClientRect(),
        AH = BH.getBoundingClientRect();
      return Math.max(LH.left, AH.left) < Math.min(LH.right, AH.right) && Math.max(LH.top, AH.top) < Math.min(LH.bottom, AH.bottom)
    }

    function QH(HH, BH, LH, AH) {
      const rH = HH.getBoundingClientRect();
      return BH >= rH.left - AH && BH <= rH.right + AH && LH >= rH.top - AH && LH <= rH.bottom + AH
    }

    function WH(HH) {
      (0, rH.j)("leavecover", HH)
    }
    const MH = new Set;

    function xH() {
      MH.clear()
    }

    function vH(HH) {
      let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : WH;
      const LH = HH.ownerDocument,
        AH = LH.defaultView;
      if (null === AH) return () => {};
      const rH = (HH, LH) => {
          null === HH || MH.has(LH) || (MH.add(LH), BH(HH))
        },
        tH = BH => {
          const AH = HH.isConnected ? YH(HH) : null;
          if (null === AH) return;
          const SH = LH.elementFromPoint(AH.x, AH.y);
          if (null !== SH) {
            const AH = LH.getElementById("root");
            rH(GH(SH, HH, AH, BH), XH(SH, AH))
          }
        };
      let zH = null;
      const CH = HH => {
        zH = {
          x: HH.clientX,
          y: HH.clientY
        }
      };
      let EH = null;
      const xH = () => {
          EH = setTimeout((() => {
            EH = null;
            const BH = LH.activeElement;
            if ("IFRAME" !== (null === BH || void 0 === BH ? void 0 : BH.tagName) || !HH.isConnected) return;
            const AH = YH(HH),
              SH = null !== AH && QH(BH, AH.x, AH.y, 0),
              tH = zH,
              CH = null !== tH && QH(HH, tH.x, tH.y, hH);
            if (uH(BH, HH) && (SH || CH)) {
              const AH = LH.getElementById("root");
              rH(GH(BH, HH, AH, "blurIframe"), XH(BH, AH))
            }
          }), 0)
        },
        vH = AH.requestAnimationFrame((() => {
          tH("open")
        })),
        PH = setTimeout((() => {
          tH("recheck")
        }), SH);
      return AH.addEventListener("pointermove", CH, {
        capture: !0,
        passive: !0
      }), AH.addEventListener("pointerdown", CH, {
        capture: !0,
        passive: !0
      }), AH.addEventListener("blur", xH), () => {
        AH.cancelAnimationFrame(vH), clearTimeout(PH), null !== EH && clearTimeout(EH), AH.removeEventListener("pointermove", CH, {
          capture: !0
        }), AH.removeEventListener("pointerdown", CH, {
          capture: !0
        }), AH.removeEventListener("blur", xH)
      }
    }

    function PH() {
      (0, AH.f)(vH)
    }
  },
  5165: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => hH,
      e: () => SH,
      f: () => rH
    });
    let AH = null;

    function rH(HH) {
      AH = HH
    }

    function SH() {
      return AH
    }

    function hH(HH) {
      return "bloxd" === HH.site && !HH.isMobileApp && !HH.isTouchScreen
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);