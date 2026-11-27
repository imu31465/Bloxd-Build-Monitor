export const id = 45;
export const ids = [45];
export const modules = {
  5166: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      LEAVE_POINTER_MARGIN_PX: () => Ke,
      RECHECK_MS: () => Me,
      iframeHost: () => oe,
      isNear: () => Te,
      leaveCoverLine: () => ke,
      overlaps: () => fe,
      resetLeaveCoverDebugForTest: () => ze,
      startLeaveCoverDebug: () => Ee,
      startLeaveCoverProbe: () => Be,
      whereIs: () => Re
    });
    var ye = He(5175),
      be = He(3037);
    const Me = 2e3,
      Ke = 32,
      Ue = 80,
      Fe = ".EverythingMenuBannerDiv";

    function Je(ee) {
      const ie = ee.trim().replace(/[\s=]+/g, ".").slice(0, Ue);
      return "" === ie ? "-" : ie
    }

    function oe(ee, ie) {
      const He = ee.getAttribute("src");
      if (null === He || "" === He.trim()) return "none";
      try {
        const ee = new URL(He, ie);
        return "http:" === ee.protocol || "https:" === ee.protocol ? ee.hostname : ee.protocol.replace(":", "")
      } catch {
        return "invalid"
      }
    }

    function Re(ee, ie) {
      return null !== ee.closest(Fe) ? "banner" : null !== ie && ie.contains(ee) ? "app" : "body"
    }

    function ke(ee, ie, He, ye) {
      var be, Me, Ke, Ue;
      if (null === ee || ee === ie || ie.contains(ee)) return null;
      const Fe = null === (be = ee.ownerDocument.defaultView) || void 0 === be ? void 0 : be.getComputedStyle(ee),
        ke = ee.getBoundingClientRect();
      return `leave covered ${[["trigger",ye],["where",Re(ee,He)],["tag",ee.tagName.toLowerCase()],["id",Je(ee.id)],["class",Je(null!==(Me=ee.getAttribute("class"))&&void 0!==Me?Me:"")],["z",Je(null!==(Ke=null===Fe||void 0===Fe?void 0:Fe.zIndex)&&void 0!==Ke?Ke:"")],["position",Je(null!==(Ue=null===Fe||void 0===Fe?void 0:Fe.position)&&void 0!==Ue?Ue:"")],["size",`${Math.round(ke.width)}x${Math.round(ke.height)}`],["iframe","IFRAME"===ee.tagName?Je(oe(ee,ee.ownerDocument.baseURI)):"-"]].map((ee=>{let[ie,He]=ee;return`${ie}=${He}`})).join(" ")}`
    }

    function qe(ee) {
      const ie = ee.getBoundingClientRect();
      return 0 === ie.width || 0 === ie.height ? null : {
        x: ie.left + ie.width / 2,
        y: ie.top + ie.height / 2
      }
    }

    function fe(ee, ie) {
      const He = ee.getBoundingClientRect(),
        ye = ie.getBoundingClientRect();
      return Math.max(He.left, ye.left) < Math.min(He.right, ye.right) && Math.max(He.top, ye.top) < Math.min(He.bottom, ye.bottom)
    }

    function Te(ee, ie, He, ye) {
      const be = ee.getBoundingClientRect();
      return ie >= be.left - ye && ie <= be.right + ye && He >= be.top - ye && He <= be.bottom + ye
    }

    function pe(ee) {
      (0, be.m)("leavecover", ee)
    }
    const Xe = new Set;

    function ze() {
      Xe.clear()
    }

    function Be(ee) {
      let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pe;
      const He = ee.ownerDocument,
        ye = He.defaultView;
      if (null === ye) return () => {};
      const be = (ee, He) => {
          null === ee || Xe.has(He) || (Xe.add(He), ie(ee))
        },
        Ue = ie => {
          const ye = ee.isConnected ? qe(ee) : null;
          if (null === ye) return;
          const Me = He.elementFromPoint(ye.x, ye.y);
          if (null !== Me) {
            const ye = He.getElementById("root");
            be(ke(Me, ee, ye, ie), Re(Me, ye))
          }
        };
      let Fe = null;
      const Je = ee => {
        Fe = {
          x: ee.clientX,
          y: ee.clientY
        }
      };
      let oe = null;
      const ze = () => {
          oe = setTimeout((() => {
            oe = null;
            const ie = He.activeElement;
            if ("IFRAME" !== (null === ie || void 0 === ie ? void 0 : ie.tagName) || !ee.isConnected) return;
            const ye = qe(ee),
              Me = null !== ye && Te(ie, ye.x, ye.y, 0),
              Ue = Fe,
              Je = null !== Ue && Te(ee, Ue.x, Ue.y, Ke);
            if (fe(ie, ee) && (Me || Je)) {
              const ye = He.getElementById("root");
              be(ke(ie, ee, ye, "blurIframe"), Re(ie, ye))
            }
          }), 0)
        },
        Be = ye.requestAnimationFrame((() => {
          Ue("open")
        })),
        Ee = setTimeout((() => {
          Ue("recheck")
        }), Me);
      return ye.addEventListener("pointermove", Je, {
        capture: !0,
        passive: !0
      }), ye.addEventListener("pointerdown", Je, {
        capture: !0,
        passive: !0
      }), ye.addEventListener("blur", ze), () => {
        ye.cancelAnimationFrame(Be), clearTimeout(Ee), null !== oe && clearTimeout(oe), ye.removeEventListener("pointermove", Je, {
          capture: !0
        }), ye.removeEventListener("pointerdown", Je, {
          capture: !0
        }), ye.removeEventListener("blur", ze)
      }
    }

    function Ee() {
      (0, ye.i)(Be)
    }
  },
  5175: (ee, ie, He) => {
    He.d(ie, {
      c: () => Ke,
      e: () => Me,
      i: () => be
    });
    let ye = null;

    function be(ee) {
      ye = ee
    }

    function Me() {
      return ye
    }

    function Ke(ee) {
      return "bloxd" === ee.site && !ee.isMobileApp && !ee.isTouchScreen
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);