export const id = 11;
export const ids = [11];
export const modules = {
  36329: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Ak,
      g: () => ek,
      j: () => Jk,
      n: () => Vk
    });
    var Rk = Bk(9004),
      tk = Bk(36332),
      ak = Bk(36340),
      Xk = Bk(8372),
      bk = Bk(1387),
      wk = Bk(61),
      dk = Bk(67),
      sk = Bk(1069);

    function Vk() {
      var kk;
      return (0, bk.g)(tk.c, (0, tk.o)()), (0, sk.jsx)(sk.Fragment, {
        children: null === (kk = (0, tk.o)()) || void 0 === kk ? void 0 : kk.content
      })
    }

    function Jk(kk) {
      var Fk;
      let {
        show: Bk
      } = kk;
      (0, bk.g)(tk.c, (0, tk.o)());
      const dk = null === (Fk = (0, tk.o)()) || void 0 === Fk ? void 0 : Fk.menu;
      return (0, wk.useEffect)((() => {
        var kk;
        Bk || (null === dk || void 0 === dk || null === (kk = dk.onClose) || void 0 === kk || kk.call(dk), (0, ak.u)())
      }), [Bk, dk]), (0, wk.useEffect)((() => Bk ? (0, Xk.h)(ak.C, ak.h) : void 0), [Bk]), (0, sk.jsx)(Rk.d, {
        showing: Bk,
        globallyUniqueKey: "clientGameMenu",
        children: null === dk || void 0 === dk ? void 0 : dk.content
      })
    }

    function Ak(kk) {
      let {
        placement: Fk = "bottom"
      } = kk;
      return (0, sk.jsx)("div", {
        id: `clientGameHud-${Fk}`,
        style: {
          display: "contents"
        }
      })
    }

    function ek(kk) {
      let {
        children: Fk,
        placement: Bk = "bottom"
      } = kk;
      const [Rk, tk] = (0, wk.useState)(null);
      return (0, wk.useEffect)((() => {
        tk(document.getElementById(`clientGameHud-${Bk}`))
      }), [Bk]), Rk ? (0, dk.createPortal)(Fk, Rk) : null
    }
  },
  9004: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => ak
    });
    var Rk = Bk(4277),
      tk = Bk(4283);

    function ak(kk) {
      let {
        children: Fk,
        showing: Bk,
        globallyUniqueKey: ak,
        alwaysMountChildren: Xk = !1,
        doGameplayStartStopOnShow: bk = !0,
        keepsMovement: wk = !1
      } = kk;
      return (0, tk.d)(!0, Bk, ak, wk), (0, Rk.e)(bk, Bk), Bk || Xk ? Fk : null
    }
  },
  4712: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => Xk
    });
    var Rk = Bk(1020),
      tk = Bk.n(Rk),
      ak = Bk(1069);

    function Xk(kk) {
      let {
        options: Fk,
        value: Bk,
        onChange: Rk,
        ariaLabel: Xk,
        className: bk,
        reselectable: wk = !1,
        keepsFocus: dk = !1
      } = kk;
      return (0, ak.jsx)("div", {
        className: tk()("SegmentedToggle", bk),
        role: "group",
        "aria-label": Xk,
        children: Fk.map((kk => {
          const Fk = kk.value === Bk;
          return (0, ak.jsx)("button", {
            type: "button",
            "aria-pressed": Fk,
            "aria-label": kk.ariaLabel,
            title: kk.ariaLabel,
            className: tk()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: Fk
            }),
            onMouseDown: dk ? kk => {
              kk.preventDefault()
            } : void 0,
            onClick: () => {
              Fk && !wk || Rk(kk.value)
            },
            children: kk.label
          }, kk.value)
        }))
      })
    }
  },
  8372: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => ak,
      h: () => tk
    });
    let Rk = null;
    const tk = function(kk) {
        const Fk = {
          cycle: kk,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Rk = Fk, () => {
          Rk === Fk && (Rk = null)
        }
      },
      ak = () => {
        var kk;
        return null !== (kk = Rk) && void 0 !== kk && kk.canCycle() ? Rk.cycle : null
      }
  },
  36505: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => tk,
      e: () => ak
    });
    const Rk = new Map;

    function tk(kk) {
      var Fk;
      return null === kk ? null : null !== (Fk = Rk.get(kk)) && void 0 !== Fk ? Fk : null
    }

    function ak(kk, Fk) {
      return Rk.set(kk, Fk), () => {
        Rk.get(kk) === Fk && Rk.delete(kk)
      }
    }
  },
  36340: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      C: () => ek,
      G: () => Wk,
      d: () => ak,
      h: () => yk,
      l: () => fk,
      p: () => bk,
      s: () => Jk,
      u: () => mk,
      w: () => Vk,
      z: () => vk
    });
    var Rk = Bk(22),
      tk = Bk(29);
    const ak = "clientGameInventoryButtonsChanged",
      Xk = new Map;

    function bk() {
      return [...Xk.values()].sort(((kk, Fk) => {
        var Bk, Rk;
        return (null !== (Bk = kk.order) && void 0 !== Bk ? Bk : 0) - (null !== (Rk = Fk.order) && void 0 !== Rk ? Rk : 0)
      }))
    }
    let wk = null;

    function dk(kk) {
      wk = kk
    }
    let sk = !1;

    function Vk(kk) {
      sk = !0;
      try {
        kk.onClick()
      } finally {
        sk = !1
      }
      kk.panel && "clientGame" === Rk.c.get("openInGameMenuName") && dk(kk.id)
    }

    function Jk() {
      return sk
    }

    function Ak() {
      return bk().filter((kk => kk.panel && !kk.disabled))
    }

    function ek(kk) {
      const Fk = Ak(),
        Bk = Fk.findIndex((kk => kk.id === wk));
      return !(Bk < 0 || Fk.length < 2) && (Vk(Fk[(Bk + kk + Fk.length) % Fk.length]), !0)
    }

    function yk() {
      return null !== wk && Ak().length > 1
    }

    function fk() {
      dk(null)
    }

    function mk() {
      "inventory" !== Rk.c.get("openInGameMenuName") && dk(null)
    }

    function Wk() {
      const kk = wk;
      return dk(null), kk
    }

    function vk(kk) {
      return Xk.set(kk.id, kk), tk.o.Hf(ak, bk(), !0), () => {
        Xk.get(kk.id) === kk && (Xk.delete(kk.id), tk.o.Hf(ak, bk()))
      }
    }
  },
  36332: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => bk,
      f: () => fk,
      i: () => mk,
      l: () => Jk,
      o: () => dk,
      q: () => yk,
      s: () => Ak,
      w: () => sk
    });
    var Rk = Bk(22),
      tk = Bk(29),
      ak = Bk(1239),
      Xk = Bk(36340);
    const bk = "clientGameUiChanged";
    let wk = null;

    function dk() {
      return wk
    }

    function sk(kk, Fk) {
      const Bk = {
        content: kk,
        menu: Fk
      };
      return wk = Bk, tk.o.Hf(bk, wk, !0), () => {
        wk === Bk && (wk = null, ek = !1, fk(), tk.o.Hf(bk, null))
      }
    }
    let Vk = null;

    function Jk() {
      return Vk
    }

    function Ak(kk) {
      return Vk = kk, () => {
        Vk === kk && (Vk = null)
      }
    }
    let ek = !1;

    function yk() {
      const kk = Rk.c.get("openInGameMenuName");
      "clientGame" !== kk && (ek = "inventory" === kk), (0, Xk.s)() || (0, Xk.l)(), (0, ak.m)(ak.e), Rk.c.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function fk() {
      Wk(!1)
    }

    function mk() {
      Wk(ek)
    }

    function Wk(kk) {
      "clientGame" === Rk.c.get("openInGameMenuName") && Rk.c.set({
        openInGameMenuName: kk ? "inventory" : null
      }), kk || (0, Xk.l)(), ek = !1
    }
  },
  38074: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      C: () => Yk,
      G: () => ik,
      J: () => Jk,
      M: () => yk,
      O: () => mk,
      S: () => tk,
      d: () => sk,
      f: () => wk,
      g: () => vk,
      i: () => dk,
      k: () => bk,
      n: () => Xk,
      o: () => ak,
      s: () => Ok,
      t: () => Ak,
      v: () => Lk,
      z: () => Ek
    });
    var Rk = Bk(9164);

    function tk(kk) {
      return Math.floor(kk).toLocaleString("en-US")
    }
    const ak = 2e3,
      Xk = .005,
      bk = .001,
      wk = 2,
      dk = "Fluid Tank",
      sk = "Coolant Mixer",
      Vk = 144;

    function Jk(kk) {
      const Fk = kk.split("|")[0];
      return (0, Rk.j)(Fk) ? Fk === Rk.b ? "cryo" : "water" : null
    }
    const Ak = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ],
      ek = 63;

    function yk(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const Bk = Fk ? function(kk, Fk, Bk) {
        const Rk = Ak.findIndex((Rk => {
          let [tk, ak, Xk] = Rk;
          return tk === kk && ak === Fk && Xk === Bk
        }));
        return Rk < 0 ? 0 : 1 << Rk
      }(Fk[0], Fk[1], Fk[2]) : 0;
      return "maker" === kk ? {
        kind: kk,
        faces: Bk
      } : "user" === kk ? {
        kind: kk,
        faces: ek & ~Bk
      } : {
        kind: kk,
        faces: ek
      }
    }

    function fk(kk) {
      return "pipe" === kk || "tank" === kk || "maker" === kk
    }

    function mk(kk, Fk, Bk) {
      return 0 !== (kk.faces & 1 << Bk) && 0 !== (Fk.faces & 1 << (1 ^ Bk)) && (fk(kk.kind) || fk(Fk.kind))
    }
    const Wk = (kk, Fk, Bk, Rk) => ({
        input: kk,
        inputAmount: Rk,
        output: Fk,
        outputAmount: Bk
      }),
      vk = {
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
          recipes: [Wk("Uranium Grit", "Uranium Pellet", 1, 12), Wk("Spent Pellet", "Plutonium Pellet", 1, 4)],
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
          recipes: [Wk("Biomass", "", 0, 1)],
          powerPerOp: 720,
          waterPerOp: 144,
          cryoMade: Vk,
          couplable: !0,
          couplerSlot: 1
        }
      };

    function ik(kk, Fk) {
      return 1e3 * (null !== Fk && void 0 !== Fk ? Fk : 0) / kk.opMs
    }

    function Yk(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const Bk = ik(vk["Coolant Mixer"], Vk) * Fk;
      return kk <= 0 ? 0 : Math.ceil(kk / Bk - 1e-9)
    }
    const Lk = "baf2Water",
      Ok = "baf2waterclose",
      Ek = "baf2wateropen"
  },
  38067: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => Sk,
      e: () => ik,
      h: () => vk
    });
    var Rk = Bk(9095),
      tk = Bk(9109),
      ak = Bk(9164),
      Xk = Bk(38074),
      bk = Bk(9156);
    const wk = (0, Xk.M)("pipe"),
      dk = (0, Xk.M)("tank"),
      sk = (0, Xk.M)("port"),
      Vk = "Reactor Port";

    function Jk(kk, Fk, Bk) {
      const Rk = new Set([ak.c, ak.b, Vk, ...Fk, ...Bk, ...kk ? [Xk.i] : []]);
      return {
        makers: new Set(Fk),
        roots: Rk
      }
    }
    const Ak = {
        water: Jk(!0, ["Condenser"], ["Centrifuge", "Synthesizer", Xk.d]),
        cryo: Jk(!1, [Xk.d], [])
      },
      ek = new Set([...Ak.water.roots, ...Ak.cryo.roots]),
      yk = {
        nx: [-1, 0, 0],
        ny: [0, -1, 0],
        nz: [0, 0, -1],
        px: [1, 0, 0],
        py: [0, 1, 0],
        pz: [0, 0, 1]
      },
      fk = tk.e.map((kk => yk[kk])),
      mk = fk.map((kk => {
        let [Fk, Bk, Rk] = kk;
        return Xk.t.findIndex((kk => {
          let [tk, ak, Xk] = kk;
          return tk === Fk && ak === Bk && Xk === Rk
        }))
      }));

    function Wk(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
      const Bk = Rk.j[kk],
        tk = null === Bk || void 0 === Bk ? void 0 : Bk.meta.rootName,
        Jk = Ak[Fk];
      if (!tk || !Jk.roots.has(tk)) return null;
      if ((0, ak.j)(tk)) return (0, Xk.J)(Bk.name) === Fk ? wk : null;
      if (tk === Xk.i) return dk;
      if (tk === Vk) return Bk.name.endsWith("|Water") ? sk : null;
      const [ek, yk] = bk.d[(Bk.meta.rot || 1) - 1];
      return (0, Xk.M)(Jk.makers.has(tk) ? "maker" : "user", [-ek, 0, -yk])
    }

    function vk(kk, Fk, Bk, tk) {
      let ak = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
      const {
        makers: bk
      } = Ak[ak];
      return fk.some(((dk, sk) => {
        var Vk, Jk;
        let [Ak, ek, yk] = dk;
        const fk = kk(Fk + Ak, Bk + ek, tk + yk),
          vk = Wk(fk, ak);
        return null !== vk && bk.has(null !== (Vk = null === (Jk = Rk.j[fk]) || void 0 === Jk ? void 0 : Jk.meta.rootName) && void 0 !== Vk ? Vk : "") && !(0, Xk.O)(wk, vk, mk[sk])
      }))
    }

    function ik(kk) {
      const Fk = Rk.j[kk];
      return Fk ? (0, Xk.J)(Fk.name) : null
    }
    let Yk = null;

    function Lk(kk) {
      if (!Yk) {
        Yk = new Map;
        for (const kk of ["water", "cryo"])
          for (let Fk = 0; Fk < 64; Fk++)
            for (const Bk of [!1, !0]) Yk.set((0, ak.k)(kk, Fk, Bk), {
              EA: kk,
              mask: Fk,
              full: Bk
            })
      }
      return Yk.get(kk)
    }
    const Ok = new Map(Array.from({
      length: ak.f + 1
    }, ((kk, Fk) => [(0, ak.l)(Fk), Fk])));

    function Ek(kk, Fk, Bk, tk, ak, Xk) {
      return fk.some(((bk, wk) => {
        var dk, sk, Vk;
        let [Jk, Ak, ek] = bk;
        if (0 === (Xk >> wk & 1)) return !1;
        const yk = null !== (dk = null === (sk = Rk.j[kk(Fk + Jk, Bk + Ak, tk + ek)]) || void 0 === sk ? void 0 : sk.name) && void 0 !== dk ? dk : "",
          fk = Lk(yk);
        return fk ? fk.EA === ak && fk.full : (null !== (Vk = function(kk) {
          var Fk;
          return null !== (Fk = Ok.get(kk)) && void 0 !== Fk ? Fk : null
        }(yk)) && void 0 !== Vk ? Vk : 0) > 0
      }))
    }
    class Sk {
      constructor() {
        this.reshapeOffsets = fk
      }
      handles(kk) {
        return null !== ik(kk)
      }
      affects(kk) {
        var Fk, Bk;
        return ek.has(null !== (Fk = null === (Bk = Rk.j[kk]) || void 0 === Bk ? void 0 : Bk.meta.rootName) && void 0 !== Fk ? Fk : "")
      }
      placedBy(kk) {
        var Fk;
        return (null === (Fk = Rk.j[kk]) || void 0 === Fk ? void 0 : Fk.meta.rootName) === ak.b ? ak.c : null
      }
      shape(kk, Fk, Bk, tk, bk, dk) {
        var sk, Vk, Jk;
        const Ak = null !== (sk = null === (Vk = Rk.j[bk]) || void 0 === Vk ? void 0 : Vk.name) && void 0 !== sk ? sk : "",
          ek = dk || Ak !== ak.c ? null !== (Jk = (0, Xk.J)(Ak)) && void 0 !== Jk ? Jk : "water" : function(kk, Fk, Bk, Rk) {
            return fk.some(((tk, ak) => {
              let [bk, dk, sk] = tk;
              const Vk = Wk(kk(Fk + bk, Bk + dk, Rk + sk), "cryo");
              return null !== Vk && "port" !== Vk.kind && (0, Xk.O)(wk, Vk, mk[ak])
            })) ? "cryo" : "water"
          }(kk, Fk, Bk, tk),
          yk = function(kk, Fk, Bk, Rk) {
            let tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water",
              ak = 0;
            return fk.forEach(((bk, dk) => {
              let [sk, Vk, Jk] = bk;
              const Ak = Wk(kk(Fk + sk, Bk + Vk, Rk + Jk), tk);
              Ak && (0, Xk.O)(wk, Ak, mk[dk]) && (ak |= 1 << dk)
            })), ak
          }(kk, Fk, Bk, tk, ek),
          vk = dk ? function(kk) {
            var Fk;
            return !0 === (null === (Fk = Lk(kk)) || void 0 === Fk ? void 0 : Fk.full)
          }(Ak) : Ek(kk, Fk, Bk, tk, ek, yk);
        return (0, Rk.m)((0, ak.k)(ek, yk, vk))
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);