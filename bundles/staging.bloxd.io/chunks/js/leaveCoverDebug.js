export const id = 46;
export const ids = [46];
export const modules = {
  5596: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      LEAVE_POINTER_MARGIN_PX: () => Vb,
      RECHECK_MS: () => pb,
      iframeHost: () => Ib,
      isNear: () => Eb,
      leaveCoverLine: () => Ub,
      overlaps: () => Cb,
      resetLeaveCoverDebugForTest: () => sb,
      startLeaveCoverDebug: () => hb,
      startLeaveCoverProbe: () => mb,
      whereIs: () => Ob
    });
    var eb = Mb(5601),
      Hb = Mb(4060);
    const pb = 2e3,
      Vb = 32,
      gb = 80,
      lb = ".EverythingMenuBannerDiv";

    function Lb(bb) {
      const wb = bb.trim().replace(/[\s=]+/g, ".").slice(0, gb);
      return "" === wb ? "-" : wb
    }

    function Ib(bb, wb) {
      const Mb = bb.getAttribute("src");
      if (null === Mb || "" === Mb.trim()) return "none";
      try {
        const bb = new URL(Mb, wb);
        return "http:" === bb.protocol || "https:" === bb.protocol ? bb.hostname : bb.protocol.replace(":", "")
      } catch {
        return "invalid"
      }
    }

    function Ob(bb, wb) {
      return null !== bb.closest(lb) ? "banner" : null !== wb && wb.contains(bb) ? "app" : "body"
    }

    function Ub(bb, wb, Mb, eb) {
      var Hb, pb, Vb, gb;
      if (null === bb || bb === wb || wb.contains(bb)) return null;
      const lb = null === (Hb = bb.ownerDocument.defaultView) || void 0 === Hb ? void 0 : Hb.getComputedStyle(bb),
        Ub = bb.getBoundingClientRect();
      return `leave covered ${[["trigger",eb],["where",Ob(bb,Mb)],["tag",bb.tagName.toLowerCase()],["id",Lb(bb.id)],["class",Lb(null!==(pb=bb.getAttribute("class"))&&void 0!==pb?pb:"")],["z",Lb(null!==(Vb=null===lb||void 0===lb?void 0:lb.zIndex)&&void 0!==Vb?Vb:"")],["position",Lb(null!==(gb=null===lb||void 0===lb?void 0:lb.position)&&void 0!==gb?gb:"")],["size",`${Math.round(Ub.width)}x${Math.round(Ub.height)}`],["iframe","IFRAME"===bb.tagName?Lb(Ib(bb,bb.ownerDocument.baseURI)):"-"]].map((bb=>{let[wb,Mb]=bb;return`${wb}=${Mb}`})).join(" ")}`
    }

    function tb(bb) {
      const wb = bb.getBoundingClientRect();
      return 0 === wb.width || 0 === wb.height ? null : {
        x: wb.left + wb.width / 2,
        y: wb.top + wb.height / 2
      }
    }

    function Cb(bb, wb) {
      const Mb = bb.getBoundingClientRect(),
        eb = wb.getBoundingClientRect();
      return Math.max(Mb.left, eb.left) < Math.min(Mb.right, eb.right) && Math.max(Mb.top, eb.top) < Math.min(Mb.bottom, eb.bottom)
    }

    function Eb(bb, wb, Mb, eb) {
      const Hb = bb.getBoundingClientRect();
      return wb >= Hb.left - eb && wb <= Hb.right + eb && Mb >= Hb.top - eb && Mb <= Hb.bottom + eb
    }

    function Fb(bb) {
      (0, Hb.j)("leavecover", bb)
    }
    const Bb = new Set;

    function sb() {
      Bb.clear()
    }

    function mb(bb) {
      let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Fb;
      const Mb = bb.ownerDocument,
        eb = Mb.defaultView;
      if (null === eb) return () => {};
      const Hb = (bb, Mb) => {
          null === bb || Bb.has(Mb) || (Bb.add(Mb), wb(bb))
        },
        gb = wb => {
          const eb = bb.isConnected ? tb(bb) : null;
          if (null === eb) return;
          const pb = Mb.elementFromPoint(eb.x, eb.y);
          if (null !== pb) {
            const eb = Mb.getElementById("root");
            Hb(Ub(pb, bb, eb, wb), Ob(pb, eb))
          }
        };
      let lb = null;
      const Lb = bb => {
        lb = {
          x: bb.clientX,
          y: bb.clientY
        }
      };
      let Ib = null;
      const sb = () => {
          Ib = setTimeout((() => {
            Ib = null;
            const wb = Mb.activeElement;
            if ("IFRAME" !== (null === wb || void 0 === wb ? void 0 : wb.tagName) || !bb.isConnected) return;
            const eb = tb(bb),
              pb = null !== eb && Eb(wb, eb.x, eb.y, 0),
              gb = lb,
              Lb = null !== gb && Eb(bb, gb.x, gb.y, Vb);
            if (Cb(wb, bb) && (pb || Lb)) {
              const eb = Mb.getElementById("root");
              Hb(Ub(wb, bb, eb, "blurIframe"), Ob(wb, eb))
            }
          }), 0)
        },
        mb = eb.requestAnimationFrame((() => {
          gb("open")
        })),
        hb = setTimeout((() => {
          gb("recheck")
        }), pb);
      return eb.addEventListener("pointermove", Lb, {
        capture: !0,
        passive: !0
      }), eb.addEventListener("pointerdown", Lb, {
        capture: !0,
        passive: !0
      }), eb.addEventListener("blur", sb), () => {
        eb.cancelAnimationFrame(mb), clearTimeout(hb), null !== Ib && clearTimeout(Ib), eb.removeEventListener("pointermove", Lb, {
          capture: !0
        }), eb.removeEventListener("pointerdown", Lb, {
          capture: !0
        }), eb.removeEventListener("blur", sb)
      }
    }

    function hb() {
      (0, eb.k)(mb)
    }
  },
  5601: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Vb,
      g: () => pb,
      k: () => Hb
    });
    let eb = null;

    function Hb(bb) {
      eb = bb
    }

    function pb() {
      return eb
    }

    function Vb(bb) {
      return "bloxd" === bb.site && !bb.isMobileApp && !bb.isTouchScreen
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);