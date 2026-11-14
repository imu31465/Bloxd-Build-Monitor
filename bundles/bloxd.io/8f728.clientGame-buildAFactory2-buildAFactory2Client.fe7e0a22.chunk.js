export const id = 11;
export const ids = [11];
export const modules = {
  35245: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => fc,
      f: () => mB,
      i: () => Tc,
      j: () => Oc
    });
    var Vc = nc(8187),
      Ic = nc(35247),
      rB = nc(35253),
      uc = nc(7684),
      sc = nc(1252),
      Mc = nc(73),
      Pc = nc(83),
      qB = nc(957);

    function Oc() {
      var cB;
      return (0, sc.g)(Ic.d, (0, Ic.o)()), (0, qB.jsx)(qB.Fragment, {
        children: null === (cB = (0, Ic.o)()) || void 0 === cB ? void 0 : cB.content
      })
    }

    function Tc(cB) {
      var Bc;
      let {
        show: nc
      } = cB;
      (0, sc.g)(Ic.d, (0, Ic.o)());
      const Pc = null === (Bc = (0, Ic.o)()) || void 0 === Bc ? void 0 : Bc.menu;
      return (0, Mc.useEffect)((() => {
        nc || (null === Pc || void 0 === Pc || Pc.onClose(), (0, rB.q)())
      }), [nc, Pc]), (0, Mc.useEffect)((() => nc ? (0, uc.f)(rB.x, rB.h) : void 0), [nc]), (0, qB.jsx)(Vc.d, {
        showing: nc,
        globallyUniqueKey: "clientGameMenu",
        children: null === Pc || void 0 === Pc ? void 0 : Pc.content
      })
    }

    function fc(cB) {
      let {
        placement: Bc = "bottom"
      } = cB;
      return (0, qB.jsx)("div", {
        id: `clientGameHud-${Bc}`,
        style: {
          display: "contents"
        }
      })
    }

    function mB(cB) {
      let {
        children: Bc,
        placement: nc = "bottom"
      } = cB;
      const [Vc, Ic] = (0, Mc.useState)(null);
      return (0, Mc.useEffect)((() => {
        Ic(document.getElementById(`clientGameHud-${nc}`))
      }), [nc]), Vc ? (0, Pc.createPortal)(Bc, Vc) : null
    }
  },
  35175: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => qB,
      f: () => Tc,
      i: () => Oc,
      m: () => fc,
      q: () => Pc
    });
    var Vc = nc(73),
      Ic = nc(912),
      rB = nc.n(Ic),
      uc = nc(35184),
      sc = nc(35),
      Mc = nc(957);

    function Pc(cB, Bc) {
      const nc = (0, Vc.useRef)(null);
      return (0, Vc.useLayoutEffect)((() => (uc.e.set(cB, nc.current, Bc), () => {
        uc.e.set(cB, null)
      })), [cB, Bc]), nc
    }
    const qB = "touchKeysChanged",
      Oc = {
        Crouch: "C",
        Jump: "J",
        Use: "U",
        Primary: "P",
        Attack: "A",
        Game: "G",
        Context: "X"
      },
      Tc = (0, Vc.forwardRef)((function(cB, Bc) {
        let {
          slot: nc,
          canvasZone: Ic = !1,
          lit: uc = !1,
          label: Pc,
          className: Oc,
          children: Tc,
          ...fc
        } = cB;
        return (0, Vc.useEffect)((() => (sc.i.Vu(qB), () => {
          sc.i.Vu(qB)
        })), []), (0, Mc.jsx)("div", {
          ref: Bc,
          className: rB()("TouchKeyHit", `TouchSlot${nc}`, Oc, {
            CanvasZone: Ic
          }),
          ...fc,
          children: (0, Mc.jsxs)("div", {
            className: rB()("TouchKey", {
              Lit: uc,
              Labelled: void 0 !== Pc
            }),
            children: [Tc, void 0 !== Pc && (0, Mc.jsx)("span", {
              className: "TouchKeyLabel",
              children: Pc
            })]
          })
        })
      }));

    function fc(cB, Bc) {
      const nc = Bc ? [Oc.Context] : [Oc.Primary, Oc.Context];
      return cB.filter((cB => null !== cB)).slice(0, nc.length).map(((cB, Bc) => {
        const Ic = nc[Bc];
        return (0, Mc.jsx)(Vc.Fragment, {
          children: cB.render(Ic)
        }, `${cB.id}:${Ic}`)
      }))
    }
  },
  8187: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => rB
    });
    var Vc = nc(3648),
      Ic = nc(3652);

    function rB(cB) {
      let {
        children: Bc,
        showing: nc,
        globallyUniqueKey: rB,
        alwaysMountChildren: uc = !1,
        doGameplayStartStopOnShow: sc = !0,
        keepsMovement: Mc = !1
      } = cB;
      return (0, Ic.c)(!0, nc, rB, Mc), (0, Vc.c)(sc, nc), nc || uc ? Bc : null
    }
  },
  35345: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => sc,
      d: () => Mc
    });
    var Vc = nc(73),
      Ic = nc(27),
      rB = nc(1252),
      uc = nc(35175);

    function sc(cB, Bc, nc) {
      let Vc = null;
      for (const rB of document.querySelectorAll(".TouchComponentsButtons .TouchKeyHit")) {
        const uc = rB.getBoundingClientRect();
        var Ic;
        if (uc.height > 0 && uc.top > nc && uc.left < Bc && uc.right > cB) Vc = Math.min(null !== (Ic = Vc) && void 0 !== Ic ? Ic : uc.top, uc.top)
      }
      return Vc
    }

    function Mc(cB, Bc) {
      const {
        isTouchScreen: nc
      } = (0, Ic.j)(["isTouchScreen"]), Mc = (0, Vc.useRef)(null);
      (0, rB.f)(uc.b, (() => {
        var cB;
        null === (cB = Mc.current) || void 0 === cB || cB.call(Mc)
      })), (0, Vc.useEffect)((() => {
        const Vc = null === cB || void 0 === cB ? void 0 : cB.closest(Bc),
          Ic = document.querySelector(".BottomRightElements");
        if (!nc || !cB || !Vc || !Ic) return;
        const rB = () => {
          ! function(cB, Bc) {
            const nc = cB.getBoundingClientRect(),
              Vc = sc(nc.left, nc.right, -1 / 0),
              Ic = Bc.getBoundingClientRect().bottom + parseFloat(getComputedStyle(Bc).bottom),
              rB = null === Vc ? "0px" : `${Math.ceil(Ic-Vc+4)}px`;
            Bc.style.getPropertyValue("--touch-keys-reach") !== rB && Bc.style.setProperty("--touch-keys-reach", rB)
          }(cB, Vc)
        };
        Mc.current = rB;
        const uc = new ResizeObserver(rB);
        return uc.observe(cB), uc.observe(Ic), window.addEventListener("resize", rB), () => {
          Mc.current = null, uc.disconnect(), window.removeEventListener("resize", rB), Vc.style.setProperty("--touch-keys-reach", "0px")
        }
      }), [nc, cB, Bc])
    }
  },
  7684: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => rB,
      f: () => Ic
    });
    let Vc = null;
    const Ic = function(cB) {
        const Bc = {
          cycle: cB,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Vc = Bc, () => {
          Vc === Bc && (Vc = null)
        }
      },
      rB = () => {
        var cB;
        return null !== (cB = Vc) && void 0 !== cB && cB.canCycle() ? Vc.cycle : null
      }
  },
  35437: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => Ic,
      e: () => rB
    });
    const Vc = new Map;

    function Ic(cB) {
      var Bc;
      return null === cB ? null : null !== (Bc = Vc.get(cB)) && void 0 !== Bc ? Bc : null
    }

    function rB(cB, Bc) {
      return Vc.set(cB, Bc), () => {
        Vc.get(cB) === Bc && Vc.delete(cB)
      }
    }
  },
  35253: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => rB,
      h: () => ec,
      i: () => tB,
      m: () => sc,
      p: () => Tc,
      q: () => Sc,
      t: () => Oc,
      w: () => zB,
      x: () => mB,
      y: () => yB
    });
    var Vc = nc(27),
      Ic = nc(35);
    const rB = "clientGameInventoryButtonsChanged",
      uc = new Map;

    function sc() {
      return [...uc.values()].sort(((cB, Bc) => {
        var nc, Vc;
        return (null !== (nc = cB.order) && void 0 !== nc ? nc : 0) - (null !== (Vc = Bc.order) && void 0 !== Vc ? Vc : 0)
      }))
    }
    let Mc = null;

    function Pc(cB) {
      Mc = cB
    }
    let qB = !1;

    function Oc(cB) {
      qB = !0;
      try {
        cB.onClick()
      } finally {
        qB = !1
      }
      cB.panel && "clientGame" === Vc.d.get("openInGameMenuName") && Pc(cB.id)
    }

    function Tc() {
      return qB
    }

    function fc() {
      return sc().filter((cB => cB.panel && !cB.disabled))
    }

    function mB(cB) {
      const Bc = fc(),
        nc = Bc.findIndex((cB => cB.id === Mc));
      return !(nc < 0 || Bc.length < 2) && (Oc(Bc[(nc + cB + Bc.length) % Bc.length]), !0)
    }

    function ec() {
      return null !== Mc && fc().length > 1
    }

    function tB() {
      Pc(null)
    }

    function Sc() {
      "inventory" !== Vc.d.get("openInGameMenuName") && Pc(null)
    }

    function yB() {
      const cB = Mc;
      return Pc(null), cB
    }

    function zB(cB) {
      return uc.set(cB.id, cB), Ic.i.Vu(rB, sc(), !0), () => {
        uc.get(cB.id) === cB && (uc.delete(cB.id), Ic.i.Vu(rB, sc()))
      }
    }
  },
  35247: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => sc,
      f: () => tB,
      j: () => Sc,
      m: () => Tc,
      o: () => Pc,
      s: () => ec,
      w: () => fc,
      x: () => qB
    });
    var Vc = nc(27),
      Ic = nc(35),
      rB = nc(1142),
      uc = nc(35253);
    const sc = "clientGameUiChanged";
    let Mc = null;

    function Pc() {
      return Mc
    }

    function qB(cB, Bc) {
      const nc = {
        content: cB,
        menu: Bc
      };
      return Mc = nc, Ic.i.Vu(sc, Mc, !0), () => {
        Mc === nc && (Mc = null, mB = !1, tB(), Ic.i.Vu(sc, null))
      }
    }
    let Oc = null;

    function Tc() {
      return Oc
    }

    function fc(cB) {
      return Oc = cB, () => {
        Oc === cB && (Oc = null)
      }
    }
    let mB = !1;

    function ec() {
      const cB = Vc.d.get("openInGameMenuName");
      "clientGame" !== cB && (mB = "inventory" === cB), (0, uc.p)() || (0, uc.i)(), (0, rB.o)("InGameMenu"), Vc.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function tB() {
      yB(!1)
    }

    function Sc() {
      yB(mB)
    }

    function yB(cB) {
      "clientGame" === Vc.d.get("openInGameMenuName") && Vc.d.set({
        openInGameMenuName: cB ? "inventory" : null
      }), cB || (0, uc.i)(), mB = !1
    }
  },
  35184: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Mc,
      e: () => qB,
      f: () => sc
    });
    var Vc = nc(1927),
      Ic = nc(1934),
      rB = nc(1940),
      uc = nc(263);

    function sc(cB, Bc) {
      return (!(0, rB.c)() || 0 === cB && 0 === Bc) && (0, Ic.v)(Vc.f.Joystick, 0, cB, Bc, 0)
    }
    const Mc = {
      Action1: 1,
      Action2: 2,
      Action3: 3,
      Attack: 4,
      Use: 5,
      Interact: 6,
      Boost: 7
    };

    function Pc(cB) {
      return {
        x: cB.left + cB.width / 2,
        y: cB.top + cB.height / 2,
        radius: Math.min(cB.width, cB.height) / 2
      }
    }
    const qB = new class {
      constructor(cB, Bc) {
        this.write = cB, this.keysHit = Bc, this.elements = new Map
      }
      set(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        Bc ? this.elements.set(cB, {
          element: Bc,
          hidden: nc
        }) : this.elements.delete(cB), this.measureOne(cB)
      }
      measure() {
        for (const cB of this.elements.keys()) this.measureOne(cB)
      }
      hitZone(cB, Bc) {
        let nc = null,
          Vc = 1;
        for (const [Ic, {
            element: rB
          }] of this.elements) {
          const uc = this.shownRect(Ic);
          if (!uc) continue;
          const sc = Pc(uc),
            Mc = Math.max(0, uc.width / 2 - sc.radius),
            qB = Math.max(0, uc.height / 2 - sc.radius),
            Oc = Math.max(0, Math.abs(cB - sc.x) - Mc),
            Tc = Math.max(0, Math.abs(Bc - sc.y) - qB),
            fc = rB.firstElementChild;
          let mB = Math.hypot(Oc, Tc) / sc.radius;
          this.keysHit && (mB = Math.min(mB, Math.max(Math.abs(cB - sc.x) / (fc.offsetWidth / 2), Math.abs(Bc - sc.y) / (fc.offsetHeight / 2)))), mB < Vc && (nc = {
            code: Ic,
            element: rB,
            key: fc,
            ...sc
          }, Vc = mB)
        }
        return nc
      }
      measureOne(cB) {
        const Bc = this.shownRect(cB);
        if (!Bc) return void this.write(Vc.f.TouchZone, cB, 0, 0, 0);
        const nc = Pc(Bc);
        this.write(Vc.f.TouchZone, cB, nc.x, nc.y, (0, Ic.i)(nc.radius))
      }
      shownRect(cB) {
        const Bc = this.elements.get(cB),
          nc = Bc && !Bc.hidden ? Bc.element.getBoundingClientRect() : null;
        return !nc || nc.width <= 0 || nc.height <= 0 ? null : nc
      }
    }(Ic.v, !uc.l)
  },
  35333: cB => {
    cB.exports = function cB(Bc, nc) {
      if (Bc === nc) return !0;
      if (Bc && nc && "object" == typeof Bc && "object" == typeof nc) {
        if (Bc.constructor !== nc.constructor) return !1;
        var Vc, Ic, rB;
        if (Array.isArray(Bc)) {
          if ((Vc = Bc.length) != nc.length) return !1;
          for (Ic = Vc; 0 !== Ic--;)
            if (!cB(Bc[Ic], nc[Ic])) return !1;
          return !0
        }
        if (Bc.constructor === RegExp) return Bc.source === nc.source && Bc.flags === nc.flags;
        if (Bc.valueOf !== Object.prototype.valueOf) return Bc.valueOf() === nc.valueOf();
        if (Bc.toString !== Object.prototype.toString) return Bc.toString() === nc.toString();
        if ((Vc = (rB = Object.keys(Bc)).length) !== Object.keys(nc).length) return !1;
        for (Ic = Vc; 0 !== Ic--;)
          if (!Object.prototype.hasOwnProperty.call(nc, rB[Ic])) return !1;
        for (Ic = Vc; 0 !== Ic--;) {
          var uc = rB[Ic];
          if (!cB(Bc[uc], nc[uc])) return !1
        }
        return !0
      }
      return Bc !== Bc && nc !== nc
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);