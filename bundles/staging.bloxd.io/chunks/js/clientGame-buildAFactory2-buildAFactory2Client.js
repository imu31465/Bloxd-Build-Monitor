export const id = 11;
export const ids = [11];
export const modules = {
  36772: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Qd,
      g: () => Ld,
      h: () => ld,
      j: () => od
    });
    var pd = kd(9234),
      Nd = kd(36779),
      Wd = kd(36783),
      Pd = kd(8620),
      Zd = kd(1459),
      gd = kd(56),
      Cd = kd(72),
      Kd = kd(1103);

    function od() {
      var dd;
      return (0, Zd.i)(Nd.e, (0, Nd.o)()), (0, Kd.jsx)(Kd.Fragment, {
        children: null === (dd = (0, Nd.o)()) || void 0 === dd ? void 0 : dd.content
      })
    }

    function ld(dd) {
      var Jd;
      let {
        show: kd
      } = dd;
      (0, Zd.i)(Nd.e, (0, Nd.o)());
      const Cd = null === (Jd = (0, Nd.o)()) || void 0 === Jd ? void 0 : Jd.menu;
      return (0, gd.useEffect)((() => {
        var dd;
        kd || (null === Cd || void 0 === Cd || null === (dd = Cd.onClose) || void 0 === dd || dd.call(Cd), (0, Wd.s)())
      }), [kd, Cd]), (0, gd.useEffect)((() => kd ? (0, Pd.g)(Wd.B, Wd.h) : void 0), [kd]), (0, Kd.jsx)(pd.b, {
        showing: kd,
        globallyUniqueKey: "clientGameMenu",
        children: null === Cd || void 0 === Cd ? void 0 : Cd.content
      })
    }

    function Qd(dd) {
      let {
        placement: Jd = "bottom"
      } = dd;
      return (0, Kd.jsx)("div", {
        id: `clientGameHud-${Jd}`,
        style: {
          display: "contents"
        }
      })
    }

    function Ld(dd) {
      let {
        children: Jd,
        placement: kd = "bottom"
      } = dd;
      const [pd, Nd] = (0, gd.useState)(null);
      return (0, gd.useEffect)((() => {
        Nd(document.getElementById(`clientGameHud-${kd}`))
      }), [kd]), pd ? (0, Cd.createPortal)(Jd, pd) : null
    }
  },
  9234: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Wd
    });
    var pd = kd(4393),
      Nd = kd(4397);

    function Wd(dd) {
      let {
        children: Jd,
        showing: kd,
        globallyUniqueKey: Wd,
        alwaysMountChildren: Pd = !1,
        doGameplayStartStopOnShow: Zd = !0,
        keepsMovement: gd = !1
      } = dd;
      return (0, Nd.d)(!0, kd, Wd, gd), (0, pd.c)(Zd, kd), kd || Pd ? Jd : null
    }
  },
  4904: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Pd
    });
    var pd = kd(1044),
      Nd = kd.n(pd),
      Wd = kd(1103);

    function Pd(dd) {
      let {
        options: Jd,
        value: kd,
        onChange: pd,
        ariaLabel: Pd,
        className: Zd,
        reselectable: gd = !1,
        keepsFocus: Cd = !1,
        padTabs: Kd
      } = dd;
      const od = void 0 !== Kd;
      return (0, Wd.jsx)("div", {
        className: Nd()("SegmentedToggle", Zd),
        role: "group",
        "aria-label": Pd,
        "data-pad-tabs": Kd,
        children: Jd.map((dd => {
          const Jd = dd.value === kd;
          return (0, Wd.jsx)("button", {
            type: "button",
            "aria-pressed": Jd,
            "data-pad-tab": od || void 0,
            "data-pad-selected": od && Jd ? "true" : void 0,
            "data-pad-default-focus": od && Jd || void 0,
            "aria-label": dd.ariaLabel,
            title: dd.ariaLabel,
            className: Nd()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: Jd
            }),
            onMouseDown: Cd ? dd => {
              dd.preventDefault()
            } : void 0,
            onClick: () => {
              Jd && !gd || pd(dd.value)
            },
            children: dd.label
          }, dd.value)
        }))
      })
    }
  },
  8620: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Wd,
      g: () => Nd
    });
    let pd = null;
    const Nd = function(dd) {
        const Jd = {
          cycle: dd,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return pd = Jd, () => {
          pd === Jd && (pd = null)
        }
      },
      Wd = () => {
        var dd;
        return null !== (dd = pd) && void 0 !== dd && dd.canCycle() ? pd.cycle : null
      }
  },
  37009: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Nd,
      e: () => Wd
    });
    const pd = new Map;

    function Nd(dd) {
      var Jd;
      return null === dd ? null : null !== (Jd = pd.get(dd)) && void 0 !== Jd ? Jd : null
    }

    function Wd(dd, Jd) {
      return pd.set(dd, Jd), () => {
        pd.get(dd) === Jd && pd.delete(dd)
      }
    }
  },
  36783: (dd, Jd, kd) => {
    kd.d(Jd, {
      B: () => Ld,
      D: () => Id,
      e: () => Wd,
      h: () => Od,
      i: () => ed,
      m: () => Zd,
      o: () => ld,
      s: () => Rd,
      w: () => od,
      x: () => Gd
    });
    var pd = kd(22),
      Nd = kd(29);
    const Wd = "clientGameInventoryButtonsChanged",
      Pd = new Map;

    function Zd() {
      return [...Pd.values()].sort(((dd, Jd) => {
        var kd, pd;
        return (null !== (kd = dd.order) && void 0 !== kd ? kd : 0) - (null !== (pd = Jd.order) && void 0 !== pd ? pd : 0)
      }))
    }
    let gd = null;

    function Cd(dd) {
      gd = dd
    }
    let Kd = !1;

    function od(dd) {
      Kd = !0;
      try {
        dd.onClick()
      } finally {
        Kd = !1
      }
      dd.panel && "clientGame" === pd.d.get("openInGameMenuName") && Cd(dd.id)
    }

    function ld() {
      return Kd
    }

    function Qd() {
      return Zd().filter((dd => dd.panel && !dd.disabled))
    }

    function Ld(dd) {
      const Jd = Qd(),
        kd = Jd.findIndex((dd => dd.id === gd));
      return !(kd < 0 || Jd.length < 2) && (od(Jd[(kd + dd + Jd.length) % Jd.length]), !0)
    }

    function Od() {
      return null !== gd && Qd().length > 1
    }

    function ed() {
      Cd(null)
    }

    function Rd() {
      "inventory" !== pd.d.get("openInGameMenuName") && Cd(null)
    }

    function Id() {
      const dd = gd;
      return Cd(null), dd
    }

    function Gd(dd) {
      return Pd.set(dd.id, dd), Nd.j.nO(Wd, Zd(), !0), () => {
        Pd.get(dd.id) === dd && (Pd.delete(dd.id), Nd.j.nO(Wd, Zd()))
      }
    }
  },
  36779: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Zd,
      g: () => ed,
      j: () => Rd,
      m: () => ld,
      o: () => Cd,
      p: () => Od,
      t: () => Qd,
      w: () => Kd
    });
    var pd = kd(22),
      Nd = kd(29),
      Wd = kd(1307),
      Pd = kd(36783);
    const Zd = "clientGameUiChanged";
    let gd = null;

    function Cd() {
      return gd
    }

    function Kd(dd, Jd) {
      const kd = {
        content: dd,
        menu: Jd
      };
      return gd = kd, Nd.j.nO(Zd, gd, !0), () => {
        gd === kd && (gd = null, Ld = !1, ed(), Nd.j.nO(Zd, null))
      }
    }
    let od = null;

    function ld() {
      return od
    }

    function Qd(dd) {
      return od = dd, () => {
        od === dd && (od = null)
      }
    }
    let Ld = !1;

    function Od() {
      const dd = pd.d.get("openInGameMenuName");
      "clientGame" !== dd && (Ld = "inventory" === dd), (0, Pd.o)() || (0, Pd.i)(), (0, Wd.p)(Wd.d), pd.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function ed() {
      Id(!1)
    }

    function Rd() {
      Id(Ld)
    }

    function Id(dd) {
      "clientGame" === pd.d.get("openInGameMenuName") && pd.d.set({
        openInGameMenuName: dd ? "inventory" : null
      }), dd || (0, Pd.i)(), Ld = !1
    }
  },
  38571: (dd, Jd, kd) => {
    kd.d(Jd, {
      D: () => qd,
      G: () => sd,
      H: () => xd,
      L: () => vd,
      M: () => ld,
      P: () => Od,
      Q: () => Rd,
      S: () => Nd,
      d: () => Kd,
      g: () => gd,
      j: () => Gd,
      n: () => Cd,
      r: () => Zd,
      t: () => Pd,
      v: () => Wd,
      w: () => Bd,
      z: () => Qd
    });
    var pd = kd(9417);

    function Nd(dd) {
      return Math.floor(dd).toLocaleString("en-US")
    }
    const Wd = 2e3,
      Pd = .005,
      Zd = .001,
      gd = 2,
      Cd = "Fluid Tank",
      Kd = "Coolant Mixer",
      od = 144;

    function ld(dd) {
      const Jd = dd.split("|")[0];
      return (0, pd.l)(Jd) ? Jd === pd.e ? "cryo" : "water" : null
    }
    const Qd = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ],
      Ld = 63;

    function Od(dd) {
      let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const kd = Jd ? function(dd, Jd, kd) {
        const pd = Qd.findIndex((pd => {
          let [Nd, Wd, Pd] = pd;
          return Nd === dd && Wd === Jd && Pd === kd
        }));
        return pd < 0 ? 0 : 1 << pd
      }(Jd[0], Jd[1], Jd[2]) : 0;
      return "maker" === dd ? {
        kind: dd,
        faces: kd
      } : "user" === dd ? {
        kind: dd,
        faces: Ld & ~kd
      } : {
        kind: dd,
        faces: Ld
      }
    }

    function ed(dd) {
      return "pipe" === dd || "tank" === dd || "maker" === dd
    }

    function Rd(dd, Jd, kd) {
      return 0 !== (dd.faces & 1 << kd) && 0 !== (Jd.faces & 1 << (1 ^ kd)) && (ed(dd.kind) || ed(Jd.kind))
    }
    const Id = (dd, Jd, kd, pd) => ({
        input: dd,
        inputAmount: pd,
        output: Jd,
        outputAmount: kd
      }),
      Gd = {
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
          recipes: [Id("Uranium Grit", "Uranium Pellet", 1, 12), Id("Spent Pellet", "Plutonium Pellet", 1, 4)],
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
          recipes: [Id("Biomass", "", 0, 1)],
          powerPerOp: 720,
          waterPerOp: 144,
          cryoMade: od,
          couplable: !0,
          couplerSlot: 1
        }
      };

    function vd(dd, Jd) {
      return 1e3 * (null !== Jd && void 0 !== Jd ? Jd : 0) / dd.opMs
    }

    function xd(dd) {
      let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const kd = vd(Gd["Coolant Mixer"], od) * Jd;
      return dd <= 0 ? 0 : Math.ceil(dd / kd - 1e-9)
    }
    const qd = "baf2Water",
      Bd = "baf2waterclose",
      sd = "baf2wateropen"
  },
  38562: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => ad,
      h: () => vd,
      j: () => Gd
    });
    var pd = kd(9331),
      Nd = kd(9361),
      Wd = kd(9417),
      Pd = kd(38571),
      Zd = kd(9413);
    const gd = (0, Pd.P)("pipe"),
      Cd = (0, Pd.P)("tank"),
      Kd = (0, Pd.P)("port"),
      od = "Reactor Port";

    function ld(dd, Jd, kd) {
      const pd = new Set([Wd.g, Wd.e, od, ...Jd, ...kd, ...dd ? [Pd.n] : []]);
      return {
        makers: new Set(Jd),
        roots: pd
      }
    }
    const Qd = {
        water: ld(!0, ["Condenser"], ["Centrifuge", "Synthesizer", Pd.d]),
        cryo: ld(!1, [Pd.d], [])
      },
      Ld = new Set([...Qd.water.roots, ...Qd.cryo.roots]),
      Od = {
        nx: [-1, 0, 0],
        ny: [0, -1, 0],
        nz: [0, 0, -1],
        px: [1, 0, 0],
        py: [0, 1, 0],
        pz: [0, 0, 1]
      },
      ed = Nd.e.map((dd => Od[dd])),
      Rd = ed.map((dd => {
        let [Jd, kd, pd] = dd;
        return Pd.z.findIndex((dd => {
          let [Nd, Wd, Pd] = dd;
          return Nd === Jd && Wd === kd && Pd === pd
        }))
      }));

    function Id(dd) {
      let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
      const kd = pd.g[dd],
        Nd = null === kd || void 0 === kd ? void 0 : kd.meta.rootName,
        ld = Qd[Jd];
      if (!Nd || !ld.roots.has(Nd)) return null;
      if ((0, Wd.l)(Nd)) return (0, Pd.M)(kd.name) === Jd ? gd : null;
      if (Nd === Pd.n) return Cd;
      if (Nd === od) return kd.name.endsWith("|Water") ? Kd : null;
      const [Ld, Od] = Zd.h[(kd.meta.rot || 1) - 1];
      return (0, Pd.P)(ld.makers.has(Nd) ? "maker" : "user", [-Ld, 0, -Od])
    }

    function Gd(dd, Jd, kd, Nd) {
      let Wd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
      const {
        makers: Zd
      } = Qd[Wd];
      return ed.some(((Cd, Kd) => {
        var od, ld;
        let [Qd, Ld, Od] = Cd;
        const ed = dd(Jd + Qd, kd + Ld, Nd + Od),
          Gd = Id(ed, Wd);
        return null !== Gd && Zd.has(null !== (od = null === (ld = pd.g[ed]) || void 0 === ld ? void 0 : ld.meta.rootName) && void 0 !== od ? od : "") && !(0, Pd.Q)(gd, Gd, Rd[Kd])
      }))
    }

    function vd(dd) {
      const Jd = pd.g[dd];
      return Jd ? (0, Pd.M)(Jd.name) : null
    }
    let xd = null;

    function qd(dd) {
      if (!xd) {
        xd = new Map;
        for (const dd of ["water", "cryo"])
          for (let Jd = 0; Jd < 64; Jd++)
            for (const kd of [!1, !0]) xd.set((0, Wd.o)(dd, Jd, kd), {
              dQ: dd,
              mask: Jd,
              full: kd
            })
      }
      return xd.get(dd)
    }
    const Bd = new Map(Array.from({
      length: Wd.i + 1
    }, ((dd, Jd) => [(0, Wd.s)(Jd), Jd])));

    function sd(dd, Jd, kd, Nd, Wd, Pd) {
      return ed.some(((Zd, gd) => {
        var Cd, Kd, od;
        let [ld, Qd, Ld] = Zd;
        if (0 === (Pd >> gd & 1)) return !1;
        const Od = null !== (Cd = null === (Kd = pd.g[dd(Jd + ld, kd + Qd, Nd + Ld)]) || void 0 === Kd ? void 0 : Kd.name) && void 0 !== Cd ? Cd : "",
          ed = qd(Od);
        return ed ? ed.dQ === Wd && ed.full : (null !== (od = function(dd) {
          var Jd;
          return null !== (Jd = Bd.get(dd)) && void 0 !== Jd ? Jd : null
        }(Od)) && void 0 !== od ? od : 0) > 0
      }))
    }
    class ad {
      constructor() {
        this.reshapeOffsets = ed
      }
      handles(dd) {
        return null !== vd(dd)
      }
      affects(dd) {
        var Jd, kd;
        return Ld.has(null !== (Jd = null === (kd = pd.g[dd]) || void 0 === kd ? void 0 : kd.meta.rootName) && void 0 !== Jd ? Jd : "")
      }
      placedBy(dd) {
        var Jd;
        return (null === (Jd = pd.g[dd]) || void 0 === Jd ? void 0 : Jd.meta.rootName) === Wd.e ? Wd.g : null
      }
      shape(dd, Jd, kd, Nd, Zd, Cd) {
        var Kd, od, ld;
        const Qd = null !== (Kd = null === (od = pd.g[Zd]) || void 0 === od ? void 0 : od.name) && void 0 !== Kd ? Kd : "",
          Ld = Cd || Qd !== Wd.g ? null !== (ld = (0, Pd.M)(Qd)) && void 0 !== ld ? ld : "water" : function(dd, Jd, kd, pd) {
            return ed.some(((Nd, Wd) => {
              let [Zd, Cd, Kd] = Nd;
              const od = Id(dd(Jd + Zd, kd + Cd, pd + Kd), "cryo");
              return null !== od && "port" !== od.kind && (0, Pd.Q)(gd, od, Rd[Wd])
            })) ? "cryo" : "water"
          }(dd, Jd, kd, Nd),
          Od = function(dd, Jd, kd, pd) {
            let Nd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water",
              Wd = 0;
            return ed.forEach(((Zd, Cd) => {
              let [Kd, od, ld] = Zd;
              const Qd = Id(dd(Jd + Kd, kd + od, pd + ld), Nd);
              Qd && (0, Pd.Q)(gd, Qd, Rd[Cd]) && (Wd |= 1 << Cd)
            })), Wd
          }(dd, Jd, kd, Nd, Ld),
          Gd = Cd ? function(dd) {
            var Jd;
            return !0 === (null === (Jd = qd(dd)) || void 0 === Jd ? void 0 : Jd.full)
          }(Qd) : sd(dd, Jd, kd, Nd, Ld, Od);
        return (0, pd.j)((0, Wd.o)(Ld, Od, Gd))
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);