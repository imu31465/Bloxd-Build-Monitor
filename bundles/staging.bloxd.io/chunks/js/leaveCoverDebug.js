export const id = 46;
export const ids = [46];
export const modules = {
  5446: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      LEAVE_POINTER_MARGIN_PX: () => Xd,
      RECHECK_MS: () => Rd,
      iframeHost: () => Qd,
      isNear: () => Hd,
      leaveCoverLine: () => od,
      overlaps: () => qd,
      resetLeaveCoverDebugForTest: () => Td,
      startLeaveCoverDebug: () => Yd,
      startLeaveCoverProbe: () => pd,
      whereIs: () => td
    });
    var Wd = md(5455),
      Fd = md(3903);
    const Rd = 2e3,
      Xd = 32,
      Kd = 80,
      hd = ".EverythingMenuBannerDiv";

    function vd(dd) {
      const Od = dd.trim().replace(/[\s=]+/g, ".").slice(0, Kd);
      return "" === Od ? "-" : Od
    }

    function Qd(dd, Od) {
      const md = dd.getAttribute("src");
      if (null === md || "" === md.trim()) return "none";
      try {
        const dd = new URL(md, Od);
        return "http:" === dd.protocol || "https:" === dd.protocol ? dd.hostname : dd.protocol.replace(":", "")
      } catch {
        return "invalid"
      }
    }

    function td(dd, Od) {
      return null !== dd.closest(hd) ? "banner" : null !== Od && Od.contains(dd) ? "app" : "body"
    }

    function od(dd, Od, md, Wd) {
      var Fd, Rd, Xd, Kd;
      if (null === dd || dd === Od || Od.contains(dd)) return null;
      const hd = null === (Fd = dd.ownerDocument.defaultView) || void 0 === Fd ? void 0 : Fd.getComputedStyle(dd),
        od = dd.getBoundingClientRect();
      return `leave covered ${[["trigger",Wd],["where",td(dd,md)],["tag",dd.tagName.toLowerCase()],["id",vd(dd.id)],["class",vd(null!==(Rd=dd.getAttribute("class"))&&void 0!==Rd?Rd:"")],["z",vd(null!==(Xd=null===hd||void 0===hd?void 0:hd.zIndex)&&void 0!==Xd?Xd:"")],["position",vd(null!==(Kd=null===hd||void 0===hd?void 0:hd.position)&&void 0!==Kd?Kd:"")],["size",`${Math.round(od.width)}x${Math.round(od.height)}`],["iframe","IFRAME"===dd.tagName?vd(Qd(dd,dd.ownerDocument.baseURI)):"-"]].map((dd=>{let[Od,md]=dd;return`${Od}=${md}`})).join(" ")}`
    }

    function Nd(dd) {
      const Od = dd.getBoundingClientRect();
      return 0 === Od.width || 0 === Od.height ? null : {
        x: Od.left + Od.width / 2,
        y: Od.top + Od.height / 2
      }
    }

    function qd(dd, Od) {
      const md = dd.getBoundingClientRect(),
        Wd = Od.getBoundingClientRect();
      return Math.max(md.left, Wd.left) < Math.min(md.right, Wd.right) && Math.max(md.top, Wd.top) < Math.min(md.bottom, Wd.bottom)
    }

    function Hd(dd, Od, md, Wd) {
      const Fd = dd.getBoundingClientRect();
      return Od >= Fd.left - Wd && Od <= Fd.right + Wd && md >= Fd.top - Wd && md <= Fd.bottom + Wd
    }

    function yd(dd) {
      (0, Fd.k)("leavecover", dd)
    }
    const bd = new Set;

    function Td() {
      bd.clear()
    }

    function pd(dd) {
      let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yd;
      const md = dd.ownerDocument,
        Wd = md.defaultView;
      if (null === Wd) return () => {};
      const Fd = (dd, md) => {
          null === dd || bd.has(md) || (bd.add(md), Od(dd))
        },
        Kd = Od => {
          const Wd = dd.isConnected ? Nd(dd) : null;
          if (null === Wd) return;
          const Rd = md.elementFromPoint(Wd.x, Wd.y);
          if (null !== Rd) {
            const Wd = md.getElementById("root");
            Fd(od(Rd, dd, Wd, Od), td(Rd, Wd))
          }
        };
      let hd = null;
      const vd = dd => {
        hd = {
          x: dd.clientX,
          y: dd.clientY
        }
      };
      let Qd = null;
      const Td = () => {
          Qd = setTimeout((() => {
            Qd = null;
            const Od = md.activeElement;
            if ("IFRAME" !== (null === Od || void 0 === Od ? void 0 : Od.tagName) || !dd.isConnected) return;
            const Wd = Nd(dd),
              Rd = null !== Wd && Hd(Od, Wd.x, Wd.y, 0),
              Kd = hd,
              vd = null !== Kd && Hd(dd, Kd.x, Kd.y, Xd);
            if (qd(Od, dd) && (Rd || vd)) {
              const Wd = md.getElementById("root");
              Fd(od(Od, dd, Wd, "blurIframe"), td(Od, Wd))
            }
          }), 0)
        },
        pd = Wd.requestAnimationFrame((() => {
          Kd("open")
        })),
        Yd = setTimeout((() => {
          Kd("recheck")
        }), Rd);
      return Wd.addEventListener("pointermove", vd, {
        capture: !0,
        passive: !0
      }), Wd.addEventListener("pointerdown", vd, {
        capture: !0,
        passive: !0
      }), Wd.addEventListener("blur", Td), () => {
        Wd.cancelAnimationFrame(pd), clearTimeout(Yd), null !== Qd && clearTimeout(Qd), Wd.removeEventListener("pointermove", vd, {
          capture: !0
        }), Wd.removeEventListener("pointerdown", vd, {
          capture: !0
        }), Wd.removeEventListener("blur", Td)
      }
    }

    function Yd() {
      (0, Wd.j)(pd)
    }
  },
  5455: (dd, Od, md) => {
    md.d(Od, {
      d: () => Xd,
      f: () => Rd,
      j: () => Fd
    });
    let Wd = null;

    function Fd(dd) {
      Wd = dd
    }

    function Rd() {
      return Wd
    }

    function Xd(dd) {
      return "bloxd" === dd.site && !dd.isMobileApp && !dd.isTouchScreen
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);