export const id = 11;
export const ids = [11];
export const modules = {
  36597: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => jk,
      f: () => ek,
      g: () => Zk,
      j: () => tk
    });
    var Xk = Ik(34164),
      Tk = Ik(36600),
      ik = Ik(36607),
      yk = Ik(8691),
      lk = Ik(1402),
      ak = Ik(58),
      qk = Ik(74),
      Lk = Ik(1096);

    function tk() {
      var kk;
      return (0, lk.f)(Tk.c, (0, Tk.m)()), (0, Lk.jsx)(Lk.Fragment, {
        children: null === (kk = (0, Tk.m)()) || void 0 === kk ? void 0 : kk.content
      })
    }

    function Zk(kk) {
      var Fk;
      let {
        show: Ik
      } = kk;
      (0, lk.f)(Tk.c, (0, Tk.m)());
      const qk = null === (Fk = (0, Tk.m)()) || void 0 === Fk ? void 0 : Fk.menu;
      return (0, ak.useEffect)((() => {
        var kk;
        Ik || (null === qk || void 0 === qk || null === (kk = qk.onClose) || void 0 === kk || kk.call(qk), (0, ik.r)())
      }), [Ik, qk]), (0, ak.useEffect)((() => Ik ? (0, yk.f)(ik.y, ik.i) : void 0), [Ik]), (0, Lk.jsx)(Xk.e, {
        showing: Ik,
        globallyUniqueKey: "clientGameMenu",
        children: null === qk || void 0 === qk ? void 0 : qk.content
      })
    }

    function jk(kk) {
      let {
        placement: Fk = "bottom"
      } = kk;
      return (0, Lk.jsx)("div", {
        id: `clientGameHud-${Fk}`,
        style: {
          display: "contents"
        }
      })
    }

    function ek(kk) {
      let {
        children: Fk,
        placement: Ik = "bottom"
      } = kk;
      const [Xk, Tk] = (0, ak.useState)(null);
      return (0, ak.useEffect)((() => {
        Tk(document.getElementById(`clientGameHud-${Ik}`))
      }), [Ik]), Xk ? (0, qk.createPortal)(Fk, Xk) : null
    }
  },
  34164: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => ik
    });
    var Xk = Ik(4525),
      Tk = Ik(4529);

    function ik(kk) {
      let {
        children: Fk,
        showing: Ik,
        globallyUniqueKey: ik,
        alwaysMountChildren: yk = !1,
        doGameplayStartStopOnShow: lk = !0,
        keepsMovement: ak = !1
      } = kk;
      return (0, Tk.e)(!0, Ik, ik, ak), (0, Xk.b)(lk, Ik), Ik || yk ? Fk : null
    }
  },
  5016: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => yk
    });
    var Xk = Ik(1055),
      Tk = Ik.n(Xk),
      ik = Ik(1096);

    function yk(kk) {
      let {
        options: Fk,
        value: Ik,
        onChange: Xk,
        ariaLabel: yk,
        className: lk,
        reselectable: ak = !1,
        keepsFocus: qk = !1,
        padTabs: Lk
      } = kk;
      const tk = void 0 !== Lk;
      return (0, ik.jsx)("div", {
        className: Tk()("SegmentedToggle", lk),
        role: "group",
        "aria-label": yk,
        "data-pad-tabs": Lk,
        children: Fk.map((kk => {
          const Fk = kk.value === Ik;
          return (0, ik.jsx)("button", {
            type: "button",
            "aria-pressed": Fk,
            "data-pad-tab": tk || void 0,
            "data-pad-selected": tk && Fk ? "true" : void 0,
            "data-pad-default-focus": tk && Fk || void 0,
            "aria-label": kk.ariaLabel,
            title: kk.ariaLabel,
            className: Tk()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: Fk
            }),
            onMouseDown: qk ? kk => {
              kk.preventDefault()
            } : void 0,
            onClick: () => {
              Fk && !ak || Xk(kk.value)
            },
            children: kk.label
          }, kk.value)
        }))
      })
    }
  },
  8691: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => ik,
      f: () => Tk
    });
    let Xk = null;
    const Tk = function(kk) {
        const Fk = {
          cycle: kk,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Xk = Fk, () => {
          Xk === Fk && (Xk = null)
        }
      },
      ik = () => {
        var kk;
        return null !== (kk = Xk) && void 0 !== kk && kk.canCycle() ? Xk.cycle : null
      }
  },
  36867: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => Tk,
      f: () => ik
    });
    const Xk = new Map;

    function Tk(kk) {
      var Fk;
      return null === kk ? null : null !== (Fk = Xk.get(kk)) && void 0 !== Fk ? Fk : null
    }

    function ik(kk, Fk) {
      return Xk.set(kk, Fk), () => {
        Xk.get(kk) === Fk && Xk.delete(kk)
      }
    }
  },
  36607: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      C: () => xk,
      e: () => ik,
      i: () => wk,
      k: () => Hk,
      o: () => lk,
      q: () => Zk,
      r: () => Jk,
      v: () => tk,
      x: () => Pk,
      y: () => ek
    });
    var Xk = Ik(25),
      Tk = Ik(34);
    const ik = "clientGameInventoryButtonsChanged",
      yk = new Map;

    function lk() {
      return [...yk.values()].sort(((kk, Fk) => {
        var Ik, Xk;
        return (null !== (Ik = kk.order) && void 0 !== Ik ? Ik : 0) - (null !== (Xk = Fk.order) && void 0 !== Xk ? Xk : 0)
      }))
    }
    let ak = null;

    function qk(kk) {
      ak = kk
    }
    let Lk = !1;

    function tk(kk) {
      Lk = !0;
      try {
        kk.onClick()
      } finally {
        Lk = !1
      }
      kk.panel && "clientGame" === Xk.d.get("openInGameMenuName") && qk(kk.id)
    }

    function Zk() {
      return Lk
    }

    function jk() {
      return lk().filter((kk => kk.panel && !kk.disabled))
    }

    function ek(kk) {
      const Fk = jk(),
        Ik = Fk.findIndex((kk => kk.id === ak));
      return !(Ik < 0 || Fk.length < 2) && (tk(Fk[(Ik + kk + Fk.length) % Fk.length]), !0)
    }

    function wk() {
      return null !== ak && jk().length > 1
    }

    function Hk() {
      qk(null)
    }

    function Jk() {
      "inventory" !== Xk.d.get("openInGameMenuName") && qk(null)
    }

    function xk() {
      const kk = ak;
      return qk(null), kk
    }

    function Pk(kk) {
      return yk.set(kk.id, kk), Tk.g.GL(ik, lk(), !0), () => {
        yk.get(kk.id) === kk && (yk.delete(kk.id), Tk.g.GL(ik, lk()))
      }
    }
  },
  36600: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => lk,
      e: () => Hk,
      f: () => Jk,
      j: () => Zk,
      m: () => qk,
      p: () => wk,
      r: () => jk,
      v: () => Lk
    });
    var Xk = Ik(25),
      Tk = Ik(34),
      ik = Ik(1270),
      yk = Ik(36607);
    const lk = "clientGameUiChanged";
    let ak = null;

    function qk() {
      return ak
    }

    function Lk(kk, Fk) {
      const Ik = {
        content: kk,
        menu: Fk
      };
      return ak = Ik, Tk.g.GL(lk, ak, !0), () => {
        ak === Ik && (ak = null, ek = !1, Hk(), Tk.g.GL(lk, null))
      }
    }
    let tk = null;

    function Zk() {
      return tk
    }

    function jk(kk) {
      return tk = kk, () => {
        tk === kk && (tk = null)
      }
    }
    let ek = !1;

    function wk() {
      const kk = Xk.d.get("openInGameMenuName");
      "clientGame" !== kk && (ek = "inventory" === kk), (0, yk.q)() || (0, yk.k)(), (0, ik.m)(ik.c), Xk.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function Hk() {
      xk(!1)
    }

    function Jk() {
      xk(ek)
    }

    function xk(kk) {
      "clientGame" === Xk.d.get("openInGameMenuName") && Xk.d.set({
        openInGameMenuName: kk ? "inventory" : null
      }), kk || (0, yk.k)(), ek = !1
    }
  },
  38414: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      D: () => sk,
      G: () => zk,
      K: () => Qk,
      O: () => Kk,
      Q: () => Zk,
      T: () => wk,
      V: () => Jk,
      Y: () => Tk,
      c: () => Lk,
      e: () => ak,
      h: () => Pk,
      j: () => qk,
      n: () => lk,
      p: () => yk,
      t: () => ik,
      x: () => Vk,
      z: () => jk
    });
    var Xk = Ik(9267);

    function Tk(kk) {
      return Math.floor(kk).toLocaleString("en-US")
    }
    const ik = 2e3,
      yk = .005,
      lk = .001,
      ak = 2,
      qk = "Fluid Tank",
      Lk = "Coolant Mixer",
      tk = 144;

    function Zk(kk) {
      const Fk = kk.split("|")[0];
      return (0, Xk.i)(Fk) ? Fk === Xk.d ? "cryo" : "water" : null
    }
    const jk = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ],
      ek = 63;

    function wk(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const Ik = Fk ? function(kk, Fk, Ik) {
        const Xk = jk.findIndex((Xk => {
          let [Tk, ik, yk] = Xk;
          return Tk === kk && ik === Fk && yk === Ik
        }));
        return Xk < 0 ? 0 : 1 << Xk
      }(Fk[0], Fk[1], Fk[2]) : 0;
      return "maker" === kk ? {
        kind: kk,
        faces: Ik
      } : "user" === kk ? {
        kind: kk,
        faces: ek & ~Ik
      } : {
        kind: kk,
        faces: ek
      }
    }

    function Hk(kk) {
      return "pipe" === kk || "tank" === kk || "maker" === kk
    }

    function Jk(kk, Fk, Ik) {
      return 0 !== (kk.faces & 1 << Ik) && 0 !== (Fk.faces & 1 << (1 ^ Ik)) && (Hk(kk.kind) || Hk(Fk.kind))
    }
    const xk = (kk, Fk, Ik, Xk) => ({
        input: kk,
        inputAmount: Xk,
        output: Fk,
        outputAmount: Ik
      }),
      Pk = {
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
          recipes: [xk("Uranium Grit", "Uranium Pellet", 1, 12), xk("Spent Pellet", "Plutonium Pellet", 1, 4)],
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
          recipes: [xk("Biomass", "", 0, 1)],
          powerPerOp: 720,
          waterPerOp: 144,
          cryoMade: tk,
          couplable: !0,
          couplerSlot: 1
        }
      };

    function Kk(kk, Fk) {
      return 1e3 * (null !== Fk && void 0 !== Fk ? Fk : 0) / kk.opMs
    }

    function Qk(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const Ik = Kk(Pk["Coolant Mixer"], tk) * Fk;
      return kk <= 0 ? 0 : Math.ceil(kk / Ik - 1e-9)
    }
    const sk = "baf2Water",
      Vk = "baf2waterclose",
      zk = "baf2wateropen"
  },
  38405: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => Sk,
      g: () => Kk,
      h: () => Pk
    });
    var Xk = Ik(9183),
      Tk = Ik(9210),
      ik = Ik(9267),
      yk = Ik(38414),
      lk = Ik(9264);
    const ak = (0, yk.T)("pipe"),
      qk = (0, yk.T)("tank"),
      Lk = (0, yk.T)("port"),
      tk = "Reactor Port";

    function Zk(kk, Fk, Ik) {
      const Xk = new Set([ik.f, ik.d, tk, ...Fk, ...Ik, ...kk ? [yk.j] : []]);
      return {
        makers: new Set(Fk),
        roots: Xk
      }
    }
    const jk = {
        water: Zk(!0, ["Condenser"], ["Centrifuge", "Synthesizer", yk.c]),
        cryo: Zk(!1, [yk.c], [])
      },
      ek = new Set([...jk.water.roots, ...jk.cryo.roots]),
      wk = {
        nx: [-1, 0, 0],
        ny: [0, -1, 0],
        nz: [0, 0, -1],
        px: [1, 0, 0],
        py: [0, 1, 0],
        pz: [0, 0, 1]
      },
      Hk = Tk.d.map((kk => wk[kk])),
      Jk = Hk.map((kk => {
        let [Fk, Ik, Xk] = kk;
        return yk.z.findIndex((kk => {
          let [Tk, ik, yk] = kk;
          return Tk === Fk && ik === Ik && yk === Xk
        }))
      }));

    function xk(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
      const Ik = Xk.g[kk],
        Tk = null === Ik || void 0 === Ik ? void 0 : Ik.meta.rootName,
        Zk = jk[Fk];
      if (!Tk || !Zk.roots.has(Tk)) return null;
      if ((0, ik.i)(Tk)) return (0, yk.Q)(Ik.name) === Fk ? ak : null;
      if (Tk === yk.j) return qk;
      if (Tk === tk) return Ik.name.endsWith("|Water") ? Lk : null;
      const [ek, wk] = lk.d[(Ik.meta.rot || 1) - 1];
      return (0, yk.T)(Zk.makers.has(Tk) ? "maker" : "user", [-ek, 0, -wk])
    }

    function Pk(kk, Fk, Ik, Tk) {
      let ik = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
      const {
        makers: lk
      } = jk[ik];
      return Hk.some(((qk, Lk) => {
        var tk, Zk;
        let [jk, ek, wk] = qk;
        const Hk = kk(Fk + jk, Ik + ek, Tk + wk),
          Pk = xk(Hk, ik);
        return null !== Pk && lk.has(null !== (tk = null === (Zk = Xk.g[Hk]) || void 0 === Zk ? void 0 : Zk.meta.rootName) && void 0 !== tk ? tk : "") && !(0, yk.V)(ak, Pk, Jk[Lk])
      }))
    }

    function Kk(kk) {
      const Fk = Xk.g[kk];
      return Fk ? (0, yk.Q)(Fk.name) : null
    }
    let Qk = null;

    function sk(kk) {
      if (!Qk) {
        Qk = new Map;
        for (const kk of ["water", "cryo"])
          for (let Fk = 0; Fk < 64; Fk++)
            for (const Ik of [!1, !0]) Qk.set((0, ik.j)(kk, Fk, Ik), {
              qj: kk,
              mask: Fk,
              full: Ik
            })
      }
      return Qk.get(kk)
    }
    const Vk = new Map(Array.from({
      length: ik.g + 1
    }, ((kk, Fk) => [(0, ik.m)(Fk), Fk])));

    function zk(kk, Fk, Ik, Tk, ik, yk) {
      return Hk.some(((lk, ak) => {
        var qk, Lk, tk;
        let [Zk, jk, ek] = lk;
        if (0 === (yk >> ak & 1)) return !1;
        const wk = null !== (qk = null === (Lk = Xk.g[kk(Fk + Zk, Ik + jk, Tk + ek)]) || void 0 === Lk ? void 0 : Lk.name) && void 0 !== qk ? qk : "",
          Hk = sk(wk);
        return Hk ? Hk.qj === ik && Hk.full : (null !== (tk = function(kk) {
          var Fk;
          return null !== (Fk = Vk.get(kk)) && void 0 !== Fk ? Fk : null
        }(wk)) && void 0 !== tk ? tk : 0) > 0
      }))
    }
    class Sk {
      constructor() {
        this.reshapeOffsets = Hk
      }
      handles(kk) {
        return null !== Kk(kk)
      }
      affects(kk) {
        var Fk, Ik;
        return ek.has(null !== (Fk = null === (Ik = Xk.g[kk]) || void 0 === Ik ? void 0 : Ik.meta.rootName) && void 0 !== Fk ? Fk : "")
      }
      placedBy(kk) {
        var Fk;
        return (null === (Fk = Xk.g[kk]) || void 0 === Fk ? void 0 : Fk.meta.rootName) === ik.d ? ik.f : null
      }
      shape(kk, Fk, Ik, Tk, lk, qk) {
        var Lk, tk, Zk;
        const jk = null !== (Lk = null === (tk = Xk.g[lk]) || void 0 === tk ? void 0 : tk.name) && void 0 !== Lk ? Lk : "",
          ek = qk || jk !== ik.f ? null !== (Zk = (0, yk.Q)(jk)) && void 0 !== Zk ? Zk : "water" : function(kk, Fk, Ik, Xk) {
            return Hk.some(((Tk, ik) => {
              let [lk, qk, Lk] = Tk;
              const tk = xk(kk(Fk + lk, Ik + qk, Xk + Lk), "cryo");
              return null !== tk && "port" !== tk.kind && (0, yk.V)(ak, tk, Jk[ik])
            })) ? "cryo" : "water"
          }(kk, Fk, Ik, Tk),
          wk = function(kk, Fk, Ik, Xk) {
            let Tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water",
              ik = 0;
            return Hk.forEach(((lk, qk) => {
              let [Lk, tk, Zk] = lk;
              const jk = xk(kk(Fk + Lk, Ik + tk, Xk + Zk), Tk);
              jk && (0, yk.V)(ak, jk, Jk[qk]) && (ik |= 1 << qk)
            })), ik
          }(kk, Fk, Ik, Tk, ek),
          Pk = qk ? function(kk) {
            var Fk;
            return !0 === (null === (Fk = sk(kk)) || void 0 === Fk ? void 0 : Fk.full)
          }(jk) : zk(kk, Fk, Ik, Tk, ek, wk);
        return (0, Xk.j)((0, ik.j)(ek, wk, Pk))
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);