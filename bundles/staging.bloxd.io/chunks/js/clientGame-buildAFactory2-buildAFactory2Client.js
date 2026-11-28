export const id = 11;
export const ids = [11];
export const modules = {
  38243: (dd, Od, md) => {
    md.d(Od, {
      e: () => yd,
      h: () => bd,
      i: () => od,
      k: () => td
    });
    var Wd = md(35535),
      Fd = md(3428),
      Rd = md(3432),
      Xd = md(9850),
      Kd = md(1566),
      hd = md(66),
      vd = md(86),
      Qd = md(1341);

    function td() {
      var dd;
      return (0, Kd.i)(Fd.d, (0, Fd.n)()), (0, Qd.jsx)(Qd.Fragment, {
        children: null === (dd = (0, Fd.n)()) || void 0 === dd ? void 0 : dd.content
      })
    }

    function od(dd) {
      var Od;
      let {
        show: md
      } = dd;
      (0, Kd.i)(Fd.d, (0, Fd.n)());
      const vd = null === (Od = (0, Fd.n)()) || void 0 === Od ? void 0 : Od.menu;
      return (0, hd.useEffect)((() => {
        var dd;
        md || (null === vd || void 0 === vd || null === (dd = vd.onClose) || void 0 === dd || dd.call(vd), (0, Rd.q)())
      }), [md, vd]), (0, hd.useEffect)((() => md ? (0, Xd.d)(Rd.y, Rd.h) : void 0), [md]), (0, Qd.jsx)(Wd.b, {
        showing: md,
        globallyUniqueKey: "clientGameMenu",
        children: null === vd || void 0 === vd ? void 0 : vd.content
      })
    }
    const Nd = new Map,
      qd = new Set;

    function Hd(dd, Od) {
      Od ? Nd.set(dd, Od) : Nd.delete(dd);
      for (const md of qd) md()
    }

    function yd(dd) {
      let {
        placement: Od = "bottom"
      } = dd;
      const md = (0, hd.useRef)(null);
      return (0, hd.useLayoutEffect)((() => {
        const dd = md.current;
        return Hd(Od, dd), () => {
          Nd.get(Od) === dd && Hd(Od, null)
        }
      }), [Od]), (0, Qd.jsx)("div", {
        ref: md,
        id: `clientGameHud-${Od}`,
        style: {
          display: "contents"
        }
      })
    }

    function bd(dd) {
      let {
        children: Od,
        placement: md = "bottom"
      } = dd;
      const [Wd, Fd] = (0, hd.useState)((() => {
        var dd;
        return null !== (dd = Nd.get(md)) && void 0 !== dd ? dd : null
      }));
      return (0, hd.useEffect)((() => {
        const dd = () => {
          var dd;
          Fd(null !== (dd = Nd.get(md)) && void 0 !== dd ? dd : null)
        };
        return qd.add(dd), dd(), () => {
          qd.delete(dd)
        }
      }), [md]), Wd ? (0, vd.createPortal)(Od, Wd) : null
    }
  },
  35535: (dd, Od, md) => {
    md.d(Od, {
      b: () => Rd
    });
    var Wd = md(5197),
      Fd = md(5206);

    function Rd(dd) {
      let {
        children: Od,
        showing: md,
        globallyUniqueKey: Rd,
        alwaysMountChildren: Xd = !1,
        doGameplayStartStopOnShow: Kd = !0,
        keepsMovement: hd = !1
      } = dd;
      return (0, Fd.e)(!0, md, Rd, hd), (0, Wd.b)(Kd, md), md || Xd ? Od : null
    }
  },
  9850: (dd, Od, md) => {
    md.d(Od, {
      b: () => Rd,
      d: () => Fd
    });
    let Wd = null;
    const Fd = function(dd) {
        const Od = {
          cycle: dd,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Wd = Od, () => {
          Wd === Od && (Wd = null)
        }
      },
      Rd = () => {
        var dd;
        return null !== (dd = Wd) && void 0 !== dd && dd.canCycle() ? Wd.cycle : null
      }
  },
  38382: (dd, Od, md) => {
    md.d(Od, {
      e: () => Fd,
      g: () => Rd
    });
    const Wd = new Map;

    function Fd(dd) {
      var Od;
      return null === dd ? null : null !== (Od = Wd.get(dd)) && void 0 !== Od ? Od : null
    }

    function Rd(dd, Od) {
      return Wd.set(dd, Od), () => {
        Wd.get(dd) === Od && Wd.delete(dd)
      }
    }
  },
  39958: (dd, Od, md) => {
    md.d(Od, {
      A: () => Jd,
      E: () => gd,
      F: () => Yd,
      G: () => od,
      K: () => Hd,
      L: () => bd,
      O: () => Fd,
      b: () => Qd,
      e: () => hd,
      i: () => pd,
      m: () => vd,
      o: () => Kd,
      q: () => Xd,
      t: () => Rd,
      w: () => Ed,
      x: () => Nd,
      y: () => wd
    });
    var Wd = md(5813);

    function Fd(dd) {
      return Math.floor(dd).toLocaleString("en-US")
    }
    const Rd = 2e3,
      Xd = .005,
      Kd = .001,
      hd = 2,
      vd = "Fluid Tank",
      Qd = "Coolant Mixer",
      td = 144;

    function od(dd) {
      const Od = dd.split("|")[0];
      return (0, Wd.n)(Od) ? Od === Wd.d ? "cryo" : "water" : null
    }
    const Nd = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ],
      qd = 63;

    function Hd(dd) {
      let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const md = Od ? function(dd, Od, md) {
        const Wd = Nd.findIndex((Wd => {
          let [Fd, Rd, Xd] = Wd;
          return Fd === dd && Rd === Od && Xd === md
        }));
        return Wd < 0 ? 0 : 1 << Wd
      }(Od[0], Od[1], Od[2]) : 0;
      return "maker" === dd ? {
        kind: dd,
        faces: md
      } : "user" === dd ? {
        kind: dd,
        faces: qd & ~md
      } : {
        kind: dd,
        faces: qd
      }
    }

    function yd(dd) {
      return "pipe" === dd || "tank" === dd || "maker" === dd
    }

    function bd(dd, Od, md) {
      return 0 !== (dd.faces & 1 << md) && 0 !== (Od.faces & 1 << (1 ^ md)) && (yd(dd.kind) || yd(Od.kind))
    }
    const Td = (dd, Od, md, Wd) => ({
        input: dd,
        inputAmount: Wd,
        output: Od,
        outputAmount: md
      }),
      pd = {
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
          recipes: [Td("Uranium Grit", "Uranium Pellet", 1, 12), Td("Spent Pellet", "Plutonium Pellet", 1, 4)],
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
          recipes: [Td("Biomass", "", 0, 1)],
          powerPerOp: 720,
          waterPerOp: 144,
          cryoMade: td,
          couplable: !0,
          couplerSlot: 1
        }
      };

    function Yd(dd, Od) {
      return 1e3 * (null !== Od && void 0 !== Od ? Od : 0) / dd.opMs
    }

    function gd(dd) {
      let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const md = Yd(pd["Coolant Mixer"], td) * Od;
      return dd <= 0 ? 0 : Math.ceil(dd / md - 1e-9)
    }
    const wd = "baf2Water",
      Ed = "baf2waterclose",
      Jd = "baf2wateropen"
  },
  39955: (dd, Od, md) => {
    md.d(Od, {
      e: () => Ud,
      h: () => Yd,
      l: () => pd
    });
    var Wd = md(5733),
      Fd = md(5752),
      Rd = md(5813),
      Xd = md(39958),
      Kd = md(5804);
    const hd = (0, Xd.K)("pipe"),
      vd = (0, Xd.K)("tank"),
      Qd = (0, Xd.K)("port"),
      td = "Reactor Port";

    function od(dd, Od, md) {
      const Wd = new Set([Rd.h, Rd.d, td, ...Od, ...md, ...dd ? [Xd.m] : []]);
      return {
        makers: new Set(Od),
        roots: Wd
      }
    }
    const Nd = {
        water: od(!0, ["Condenser"], ["Centrifuge", "Synthesizer", Xd.b]),
        cryo: od(!1, [Xd.b], [])
      },
      qd = new Set([...Nd.water.roots, ...Nd.cryo.roots]),
      Hd = {
        nx: [-1, 0, 0],
        ny: [0, -1, 0],
        nz: [0, 0, -1],
        px: [1, 0, 0],
        py: [0, 1, 0],
        pz: [0, 0, 1]
      },
      yd = Fd.c.map((dd => Hd[dd])),
      bd = yd.map((dd => {
        let [Od, md, Wd] = dd;
        return Xd.x.findIndex((dd => {
          let [Fd, Rd, Xd] = dd;
          return Fd === Od && Rd === md && Xd === Wd
        }))
      }));

    function Td(dd) {
      let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
      const md = Wd.i[dd],
        Fd = null === md || void 0 === md ? void 0 : md.meta.rootName,
        od = Nd[Od];
      if (!Fd || !od.roots.has(Fd)) return null;
      if ((0, Rd.n)(Fd)) return (0, Xd.G)(md.name) === Od ? hd : null;
      if (Fd === Xd.m) return vd;
      if (Fd === td) return md.name.endsWith("|Water") ? Qd : null;
      const [qd, Hd] = Kd.g[(md.meta.rot || 1) - 1];
      return (0, Xd.K)(od.makers.has(Fd) ? "maker" : "user", [-qd, 0, -Hd])
    }

    function pd(dd, Od, md, Fd) {
      let Rd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
      const {
        makers: Kd
      } = Nd[Rd];
      return yd.some(((vd, Qd) => {
        var td, od;
        let [Nd, qd, Hd] = vd;
        const yd = dd(Od + Nd, md + qd, Fd + Hd),
          pd = Td(yd, Rd);
        return null !== pd && Kd.has(null !== (td = null === (od = Wd.i[yd]) || void 0 === od ? void 0 : od.meta.rootName) && void 0 !== td ? td : "") && !(0, Xd.L)(hd, pd, bd[Qd])
      }))
    }

    function Yd(dd) {
      const Od = Wd.i[dd];
      return Od ? (0, Xd.G)(Od.name) : null
    }
    let gd = null;

    function wd(dd) {
      if (!gd) {
        gd = new Map;
        for (const dd of ["water", "cryo"])
          for (let Od = 0; Od < 64; Od++)
            for (const md of [!1, !0]) gd.set((0, Rd.o)(dd, Od, md), {
              LN: dd,
              mask: Od,
              full: md
            })
      }
      return gd.get(dd)
    }
    const Ed = new Map(Array.from({
      length: Rd.k + 1
    }, ((dd, Od) => [(0, Rd.s)(Od), Od])));

    function Jd(dd, Od, md, Fd, Rd, Xd) {
      return yd.some(((Kd, hd) => {
        var vd, Qd, td;
        let [od, Nd, qd] = Kd;
        if (0 === (Xd >> hd & 1)) return !1;
        const Hd = null !== (vd = null === (Qd = Wd.i[dd(Od + od, md + Nd, Fd + qd)]) || void 0 === Qd ? void 0 : Qd.name) && void 0 !== vd ? vd : "",
          yd = wd(Hd);
        return yd ? yd.LN === Rd && yd.full : (null !== (td = function(dd) {
          var Od;
          return null !== (Od = Ed.get(dd)) && void 0 !== Od ? Od : null
        }(Hd)) && void 0 !== td ? td : 0) > 0
      }))
    }
    class Ud {
      constructor() {
        this.reshapeOffsets = yd
      }
      handles(dd) {
        return null !== Yd(dd)
      }
      affects(dd) {
        var Od, md;
        return qd.has(null !== (Od = null === (md = Wd.i[dd]) || void 0 === md ? void 0 : md.meta.rootName) && void 0 !== Od ? Od : "")
      }
      placedBy(dd) {
        var Od;
        return (null === (Od = Wd.i[dd]) || void 0 === Od ? void 0 : Od.meta.rootName) === Rd.d ? Rd.h : null
      }
      shape(dd, Od, md, Fd, Kd, vd) {
        var Qd, td, od;
        const Nd = null !== (Qd = null === (td = Wd.i[Kd]) || void 0 === td ? void 0 : td.name) && void 0 !== Qd ? Qd : "",
          qd = vd || Nd !== Rd.h ? null !== (od = (0, Xd.G)(Nd)) && void 0 !== od ? od : "water" : function(dd, Od, md, Wd) {
            return yd.some(((Fd, Rd) => {
              let [Kd, vd, Qd] = Fd;
              const td = Td(dd(Od + Kd, md + vd, Wd + Qd), "cryo");
              return null !== td && "port" !== td.kind && (0, Xd.L)(hd, td, bd[Rd])
            })) ? "cryo" : "water"
          }(dd, Od, md, Fd),
          Hd = function(dd, Od, md, Wd) {
            let Fd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water",
              Rd = 0;
            return yd.forEach(((Kd, vd) => {
              let [Qd, td, od] = Kd;
              const Nd = Td(dd(Od + Qd, md + td, Wd + od), Fd);
              Nd && (0, Xd.L)(hd, Nd, bd[vd]) && (Rd |= 1 << vd)
            })), Rd
          }(dd, Od, md, Fd, qd),
          pd = vd ? function(dd) {
            var Od;
            return !0 === (null === (Od = wd(dd)) || void 0 === Od ? void 0 : Od.full)
          }(Nd) : Jd(dd, Od, md, Fd, qd, Hd);
        return (0, Wd.j)((0, Rd.o)(qd, Hd, pd))
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);