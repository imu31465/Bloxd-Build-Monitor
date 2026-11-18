export const id = 11;
export const ids = [11];
export const modules = {
  35479: yb => {
    yb.exports = function yb(bb, Wy) {
      if (bb === Wy) return !0;
      if (bb && Wy && "object" == typeof bb && "object" == typeof Wy) {
        if (bb.constructor !== Wy.constructor) return !1;
        var Uy, hy, fy;
        if (Array.isArray(bb)) {
          if ((Uy = bb.length) != Wy.length) return !1;
          for (hy = Uy; 0 !== hy--;)
            if (!yb(bb[hy], Wy[hy])) return !1;
          return !0
        }
        if (bb.constructor === RegExp) return bb.source === Wy.source && bb.flags === Wy.flags;
        if (bb.valueOf !== Object.prototype.valueOf) return bb.valueOf() === Wy.valueOf();
        if (bb.toString !== Object.prototype.toString) return bb.toString() === Wy.toString();
        if ((Uy = (fy = Object.keys(bb)).length) !== Object.keys(Wy).length) return !1;
        for (hy = Uy; 0 !== hy--;)
          if (!Object.prototype.hasOwnProperty.call(Wy, fy[hy])) return !1;
        for (hy = Uy; 0 !== hy--;) {
          var Zy = fy[hy];
          if (!yb(bb[Zy], Wy[Zy])) return !1
        }
        return !0
      }
      return bb !== bb && Wy !== Wy
    }
  },
  35370: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => qb,
      f: () => sy,
      g: () => ey,
      k: () => Ky
    });
    var Uy = Wy(8408),
      hy = Wy(35379),
      fy = Wy(35383),
      Zy = Wy(7911),
      cb = Wy(1268),
      Py = Wy(55),
      oy = Wy(70),
      By = Wy(952);

    function Ky() {
      var yb;
      return (0, cb.m)(hy.e, (0, hy.s)()), (0, By.jsx)(By.Fragment, {
        children: null === (yb = (0, hy.s)()) || void 0 === yb ? void 0 : yb.content
      })
    }

    function ey(yb) {
      var bb;
      let {
        show: Wy
      } = yb;
      (0, cb.m)(hy.e, (0, hy.s)());
      const oy = null === (bb = (0, hy.s)()) || void 0 === bb ? void 0 : bb.menu;
      return (0, Py.useEffect)((() => {
        var yb;
        Wy || (null === oy || void 0 === oy || null === (yb = oy.onClose) || void 0 === yb || yb.call(oy), (0, fy.l)())
      }), [Wy, oy]), (0, Py.useEffect)((() => Wy ? (0, Zy.f)(fy.t, fy.e) : void 0), [Wy]), (0, By.jsx)(Uy.b, {
        showing: Wy,
        globallyUniqueKey: "clientGameMenu",
        children: null === oy || void 0 === oy ? void 0 : oy.content
      })
    }

    function qb(yb) {
      let {
        placement: bb = "bottom"
      } = yb;
      return (0, By.jsx)("div", {
        id: `clientGameHud-${bb}`,
        style: {
          display: "contents"
        }
      })
    }

    function sy(yb) {
      let {
        children: bb,
        placement: Wy = "bottom"
      } = yb;
      const [Uy, hy] = (0, Py.useState)(null);
      return (0, Py.useEffect)((() => {
        hy(document.getElementById(`clientGameHud-${Wy}`))
      }), [Wy]), Uy ? (0, oy.createPortal)(bb, Uy) : null
    }
  },
  8408: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => fy
    });
    var Uy = Wy(3739),
      hy = Wy(3742);

    function fy(yb) {
      let {
        children: bb,
        showing: Wy,
        globallyUniqueKey: fy,
        alwaysMountChildren: Zy = !1,
        doGameplayStartStopOnShow: cb = !0,
        keepsMovement: Py = !1
      } = yb;
      return (0, hy.b)(!0, Wy, fy, Py), (0, Uy.b)(cb, Wy), Wy || Zy ? bb : null
    }
  },
  7911: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => fy,
      f: () => hy
    });
    let Uy = null;
    const hy = function(yb) {
        const bb = {
          cycle: yb,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Uy = bb, () => {
          Uy === bb && (Uy = null)
        }
      },
      fy = () => {
        var yb;
        return null !== (yb = Uy) && void 0 !== yb && yb.canCycle() ? Uy.cycle : null
      }
  },
  35569: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => hy,
      d: () => fy
    });
    const Uy = new Map;

    function hy(yb) {
      var bb;
      return null === yb ? null : null !== (bb = Uy.get(yb)) && void 0 !== bb ? bb : null
    }

    function fy(yb, bb) {
      return Uy.set(yb, bb), () => {
        Uy.get(yb) === bb && Uy.delete(yb)
      }
    }
  },
  35383: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => fy,
      e: () => Sy,
      g: () => Ey,
      j: () => cb,
      k: () => ey,
      l: () => ly,
      p: () => Ky,
      s: () => Cy,
      t: () => sy,
      w: () => mb
    });
    var Uy = Wy(19),
      hy = Wy(23);
    const fy = "clientGameInventoryButtonsChanged",
      Zy = new Map;

    function cb() {
      return [...Zy.values()].sort(((yb, bb) => {
        var Wy, Uy;
        return (null !== (Wy = yb.order) && void 0 !== Wy ? Wy : 0) - (null !== (Uy = bb.order) && void 0 !== Uy ? Uy : 0)
      }))
    }
    let Py = null;

    function oy(yb) {
      Py = yb
    }
    let By = !1;

    function Ky(yb) {
      By = !0;
      try {
        yb.onClick()
      } finally {
        By = !1
      }
      yb.panel && "clientGame" === Uy.d.get("openInGameMenuName") && oy(yb.id)
    }

    function ey() {
      return By
    }

    function qb() {
      return cb().filter((yb => yb.panel && !yb.disabled))
    }

    function sy(yb) {
      const bb = qb(),
        Wy = bb.findIndex((yb => yb.id === Py));
      return !(Wy < 0 || bb.length < 2) && (Ky(bb[(Wy + yb + bb.length) % bb.length]), !0)
    }

    function Sy() {
      return null !== Py && qb().length > 1
    }

    function Ey() {
      oy(null)
    }

    function ly() {
      "inventory" !== Uy.d.get("openInGameMenuName") && oy(null)
    }

    function mb() {
      const yb = Py;
      return oy(null), yb
    }

    function Cy(yb) {
      return Zy.set(yb.id, yb), hy.g.EZ(fy, cb(), !0), () => {
        Zy.get(yb.id) === yb && (Zy.delete(yb.id), hy.g.EZ(fy, cb()))
      }
    }
  },
  35379: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => cb,
      h: () => Ey,
      k: () => ly,
      o: () => ey,
      s: () => oy,
      t: () => Sy,
      v: () => qb,
      z: () => By
    });
    var Uy = Wy(19),
      hy = Wy(23),
      fy = Wy(1145),
      Zy = Wy(35383);
    const cb = "clientGameUiChanged";
    let Py = null;

    function oy() {
      return Py
    }

    function By(yb, bb) {
      const Wy = {
        content: yb,
        menu: bb
      };
      return Py = Wy, hy.g.EZ(cb, Py, !0), () => {
        Py === Wy && (Py = null, sy = !1, Ey(), hy.g.EZ(cb, null))
      }
    }
    let Ky = null;

    function ey() {
      return Ky
    }

    function qb(yb) {
      return Ky = yb, () => {
        Ky === yb && (Ky = null)
      }
    }
    let sy = !1;

    function Sy() {
      const yb = Uy.d.get("openInGameMenuName");
      "clientGame" !== yb && (sy = "inventory" === yb), (0, Zy.k)() || (0, Zy.g)(), (0, fy.h)("InGameMenu"), Uy.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function Ey() {
      mb(!1)
    }

    function ly() {
      mb(sy)
    }

    function mb(yb) {
      "clientGame" === Uy.d.get("openInGameMenuName") && Uy.d.set({
        openInGameMenuName: yb ? "inventory" : null
      }), yb || (0, Zy.g)(), sy = !1
    }
  },
  37116: (yb, bb, Wy) => {
    Wy.d(bb, {
      B: () => Vy,
      C: () => Ty,
      E: () => ey,
      F: () => Sy,
      G: () => ly,
      J: () => hy,
      e: () => By,
      f: () => Py,
      i: () => Cy,
      m: () => oy,
      o: () => cb,
      q: () => Zy,
      s: () => fy,
      u: () => gb,
      v: () => qb,
      w: () => Jy,
      x: () => Gy
    });
    var Uy = Wy(8551);

    function hy(yb) {
      return Math.floor(yb).toLocaleString("en-US")
    }
    const fy = 2e3,
      Zy = .005,
      cb = .001,
      Py = 2,
      oy = "Fluid Tank",
      By = "Coolant Mixer",
      Ky = 144;

    function ey(yb) {
      const bb = yb.split("|")[0];
      return (0, Uy.l)(bb) ? bb === Uy.d ? "cryo" : "water" : null
    }
    const qb = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ],
      sy = 63;

    function Sy(yb) {
      let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const Wy = bb ? function(yb, bb, Wy) {
        const Uy = qb.findIndex((Uy => {
          let [hy, fy, Zy] = Uy;
          return hy === yb && fy === bb && Zy === Wy
        }));
        return Uy < 0 ? 0 : 1 << Uy
      }(bb[0], bb[1], bb[2]) : 0;
      return "maker" === yb ? {
        kind: yb,
        faces: Wy
      } : "user" === yb ? {
        kind: yb,
        faces: sy & ~Wy
      } : {
        kind: yb,
        faces: sy
      }
    }

    function Ey(yb) {
      return "pipe" === yb || "tank" === yb || "maker" === yb
    }

    function ly(yb, bb, Wy) {
      return 0 !== (yb.faces & 1 << Wy) && 0 !== (bb.faces & 1 << (1 ^ Wy)) && (Ey(yb.kind) || Ey(bb.kind))
    }
    const mb = (yb, bb, Wy, Uy) => ({
        input: yb,
        inputAmount: Uy,
        output: bb,
        outputAmount: Wy
      }),
      Cy = {
        Condenser: {
          kind: "Condenser",
          opMs: 2e3,
          inputSlot: null,
          fuelSlot: null,
          outputSlots: [],
          recipes: [],
          powerPerOp: 60,
          fluidMade: 12,
          couplable: !0,
          couplerSlot: 0
        },
        Centrifuge: {
          kind: "Centrifuge",
          opMs: 12e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [mb("Uranium Grit", "Uranium Pellet", 1, 12), mb("Spent Pellet", "Plutonium Pellet", 1, 4)],
          powerPerOp: 600,
          waterPerOp: 24
        },
        Synthesizer: {
          kind: "Synthesizer",
          opMs: 6e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [],
          powerPerOp: 120,
          waterPerOp: 12,
          synth: !0
        },
        "Coolant Mixer": {
          kind: "Coolant Mixer",
          opMs: 12e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [],
          recipes: [mb("Biomass", "", 0, 1)],
          powerPerOp: 720,
          waterPerOp: 144,
          cryoMade: Ky,
          couplable: !0,
          couplerSlot: 1
        }
      };

    function Ty(yb, bb) {
      return 1e3 * (null !== bb && void 0 !== bb ? bb : 0) / yb.opMs
    }

    function Vy(yb) {
      let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const Wy = Ty(Cy["Coolant Mixer"], Ky) * bb;
      return yb <= 0 ? 0 : Math.ceil(yb / Wy - 1e-9)
    }
    const Jy = "baf2Water",
      gb = "baf2waterclose",
      Gy = "baf2wateropen"
  },
  37114: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => Oy,
      d: () => Ty,
      e: () => Cy
    });
    var Uy = Wy(8459),
      hy = Wy(8488),
      fy = Wy(8551),
      Zy = Wy(37116),
      cb = Wy(8543);
    const Py = (0, Zy.F)("pipe"),
      oy = (0, Zy.F)("tank"),
      By = (0, Zy.F)("port"),
      Ky = "Reactor Port";

    function ey(yb, bb, Wy) {
      const Uy = new Set([fy.f, fy.d, Ky, ...bb, ...Wy, ...yb ? [Zy.m] : []]);
      return {
        makers: new Set(bb),
        roots: Uy
      }
    }
    const qb = {
        water: ey(!0, ["Condenser"], ["Centrifuge", "Synthesizer", Zy.e]),
        cryo: ey(!1, [Zy.e], [])
      },
      sy = new Set([...qb.water.roots, ...qb.cryo.roots]),
      Sy = {
        nx: [-1, 0, 0],
        ny: [0, -1, 0],
        nz: [0, 0, -1],
        px: [1, 0, 0],
        py: [0, 1, 0],
        pz: [0, 0, 1]
      },
      Ey = hy.g.map((yb => Sy[yb])),
      ly = Ey.map((yb => {
        let [bb, Wy, Uy] = yb;
        return Zy.v.findIndex((yb => {
          let [hy, fy, Zy] = yb;
          return hy === bb && fy === Wy && Zy === Uy
        }))
      }));

    function mb(yb) {
      let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
      const Wy = Uy.h[yb],
        hy = null === Wy || void 0 === Wy ? void 0 : Wy.meta.rootName,
        ey = qb[bb];
      if (!hy || !ey.roots.has(hy)) return null;
      if ((0, fy.l)(hy)) return (0, Zy.E)(Wy.name) === bb ? Py : null;
      if (hy === Zy.m) return oy;
      if (hy === Ky) return Wy.name.endsWith("|Water") ? By : null;
      const [sy, Sy] = cb.e[(Wy.meta.rot || 1) - 1];
      return (0, Zy.F)(ey.makers.has(hy) ? "maker" : "user", [-sy, 0, -Sy])
    }

    function Cy(yb, bb, Wy, hy) {
      let fy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
      const {
        makers: cb
      } = qb[fy];
      return Ey.some(((oy, By) => {
        var Ky, ey;
        let [qb, sy, Sy] = oy;
        const Ey = yb(bb + qb, Wy + sy, hy + Sy),
          Cy = mb(Ey, fy);
        return null !== Cy && cb.has(null !== (Ky = null === (ey = Uy.h[Ey]) || void 0 === ey ? void 0 : ey.meta.rootName) && void 0 !== Ky ? Ky : "") && !(0, Zy.G)(Py, Cy, ly[By])
      }))
    }

    function Ty(yb) {
      const bb = Uy.h[yb];
      return bb ? (0, Zy.E)(bb.name) : null
    }
    let Vy = null;

    function Jy(yb) {
      if (!Vy) {
        Vy = new Map;
        for (const yb of ["water", "cryo"])
          for (let bb = 0; bb < 64; bb++)
            for (const Wy of [!1, !0]) Vy.set((0, fy.n)(yb, bb, Wy), {
              TW: yb,
              mask: bb,
              full: Wy
            })
      }
      return Vy.get(yb)
    }
    const gb = new Map(Array.from({
      length: fy.j + 1
    }, ((yb, bb) => [(0, fy.p)(bb), bb])));

    function Gy(yb, bb, Wy, hy, fy, Zy) {
      return Ey.some(((cb, Py) => {
        var oy, By, Ky;
        let [ey, qb, sy] = cb;
        if (0 === (Zy >> Py & 1)) return !1;
        const Sy = null !== (oy = null === (By = Uy.h[yb(bb + ey, Wy + qb, hy + sy)]) || void 0 === By ? void 0 : By.name) && void 0 !== oy ? oy : "",
          Ey = Jy(Sy);
        return Ey ? Ey.TW === fy && Ey.full : (null !== (Ky = function(yb) {
          var bb;
          return null !== (bb = gb.get(yb)) && void 0 !== bb ? bb : null
        }(Sy)) && void 0 !== Ky ? Ky : 0) > 0
      }))
    }
    class Oy {
      constructor() {
        this.reshapeOffsets = Ey
      }
      handles(yb) {
        return null !== Ty(yb)
      }
      affects(yb) {
        var bb, Wy;
        return sy.has(null !== (bb = null === (Wy = Uy.h[yb]) || void 0 === Wy ? void 0 : Wy.meta.rootName) && void 0 !== bb ? bb : "")
      }
      placedBy(yb) {
        var bb;
        return (null === (bb = Uy.h[yb]) || void 0 === bb ? void 0 : bb.meta.rootName) === fy.d ? fy.f : null
      }
      shape(yb, bb, Wy, hy, cb, oy) {
        var By, Ky, ey;
        const qb = null !== (By = null === (Ky = Uy.h[cb]) || void 0 === Ky ? void 0 : Ky.name) && void 0 !== By ? By : "",
          sy = oy || qb !== fy.f ? null !== (ey = (0, Zy.E)(qb)) && void 0 !== ey ? ey : "water" : function(yb, bb, Wy, Uy) {
            return Ey.some(((hy, fy) => {
              let [cb, oy, By] = hy;
              const Ky = mb(yb(bb + cb, Wy + oy, Uy + By), "cryo");
              return null !== Ky && "port" !== Ky.kind && (0, Zy.G)(Py, Ky, ly[fy])
            })) ? "cryo" : "water"
          }(yb, bb, Wy, hy),
          Sy = function(yb, bb, Wy, Uy) {
            let hy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water",
              fy = 0;
            return Ey.forEach(((cb, oy) => {
              let [By, Ky, ey] = cb;
              const qb = mb(yb(bb + By, Wy + Ky, Uy + ey), hy);
              qb && (0, Zy.G)(Py, qb, ly[oy]) && (fy |= 1 << oy)
            })), fy
          }(yb, bb, Wy, hy, sy),
          Cy = oy ? function(yb) {
            var bb;
            return !0 === (null === (bb = Jy(yb)) || void 0 === bb ? void 0 : bb.full)
          }(qb) : Gy(yb, bb, Wy, hy, sy, Sy);
        return (0, Uy.l)((0, fy.n)(sy, Sy, Cy))
      }
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);