export const id = 11;
export const ids = [11];
export const modules = {
  36132: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => wv,
      g: () => av,
      i: () => Wv,
      m: () => Tv
    });
    var hv = Pv(8997),
      Sv = Pv(36137),
      ev = Pv(36139),
      gv = Pv(8413),
      pv = Pv(1439),
      dv = Pv(52),
      Nv = Pv(62),
      lv = Pv(1082);

    function Tv() {
      var vv;
      return (0, pv.j)(Sv.d, (0, Sv.q)()), (0, lv.jsx)(lv.Fragment, {
        children: null === (vv = (0, Sv.q)()) || void 0 === vv ? void 0 : vv.content
      })
    }

    function Wv(vv) {
      var zv;
      let {
        show: Pv
      } = vv;
      (0, pv.j)(Sv.d, (0, Sv.q)());
      const Nv = null === (zv = (0, Sv.q)()) || void 0 === zv ? void 0 : zv.menu;
      return (0, dv.useEffect)((() => {
        var vv;
        Pv || (null === Nv || void 0 === Nv || null === (vv = Nv.onClose) || void 0 === vv || vv.call(Nv), (0, ev.o)())
      }), [Pv, Nv]), (0, dv.useEffect)((() => Pv ? (0, gv.f)(ev.y, ev.c) : void 0), [Pv]), (0, lv.jsx)(hv.d, {
        showing: Pv,
        globallyUniqueKey: "clientGameMenu",
        children: null === Nv || void 0 === Nv ? void 0 : Nv.content
      })
    }

    function wv(vv) {
      let {
        placement: zv = "bottom"
      } = vv;
      return (0, lv.jsx)("div", {
        id: `clientGameHud-${zv}`,
        style: {
          display: "contents"
        }
      })
    }

    function av(vv) {
      let {
        children: zv,
        placement: Pv = "bottom"
      } = vv;
      const [hv, Sv] = (0, dv.useState)(null);
      return (0, dv.useEffect)((() => {
        Sv(document.getElementById(`clientGameHud-${Pv}`))
      }), [Pv]), hv ? (0, Nv.createPortal)(zv, hv) : null
    }
  },
  8997: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => ev
    });
    var hv = Pv(4287),
      Sv = Pv(4292);

    function ev(vv) {
      let {
        children: zv,
        showing: Pv,
        globallyUniqueKey: ev,
        alwaysMountChildren: gv = !1,
        doGameplayStartStopOnShow: pv = !0,
        keepsMovement: dv = !1
      } = vv;
      return (0, Sv.e)(!0, Pv, ev, dv), (0, hv.b)(pv, Pv), Pv || gv ? zv : null
    }
  },
  4765: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => gv
    });
    var hv = Pv(1035),
      Sv = Pv.n(hv),
      ev = Pv(1082);

    function gv(vv) {
      let {
        options: zv,
        value: Pv,
        onChange: hv,
        ariaLabel: gv,
        className: pv,
        reselectable: dv = !1,
        keepsFocus: Nv = !1,
        padTabs: lv
      } = vv;
      const Tv = void 0 !== lv;
      return (0, ev.jsx)("div", {
        className: Sv()("SegmentedToggle", pv),
        role: "group",
        "aria-label": gv,
        "data-pad-tabs": lv,
        children: zv.map((vv => {
          const zv = vv.value === Pv;
          return (0, ev.jsx)("button", {
            type: "button",
            "aria-pressed": zv,
            "data-pad-tab": Tv || void 0,
            "data-pad-selected": Tv && zv ? "true" : void 0,
            "data-pad-default-focus": Tv && zv || void 0,
            "aria-label": vv.ariaLabel,
            title: vv.ariaLabel,
            className: Sv()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: zv
            }),
            onMouseDown: Nv ? vv => {
              vv.preventDefault()
            } : void 0,
            onClick: () => {
              zv && !dv || hv(vv.value)
            },
            children: vv.label
          }, vv.value)
        }))
      })
    }
  },
  8413: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => ev,
      f: () => Sv
    });
    let hv = null;
    const Sv = function(vv) {
        const zv = {
          cycle: vv,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return hv = zv, () => {
          hv === zv && (hv = null)
        }
      },
      ev = () => {
        var vv;
        return null !== (vv = hv) && void 0 !== vv && vv.canCycle() ? hv.cycle : null
      }
  },
  36342: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => Sv,
      h: () => ev
    });
    const hv = new Map;

    function Sv(vv) {
      var zv;
      return null === vv ? null : null !== (zv = hv.get(vv)) && void 0 !== zv ? zv : null
    }

    function ev(vv, zv) {
      return hv.set(vv, zv), () => {
        hv.get(vv) === zv && hv.delete(vv)
      }
    }
  },
  36139: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => ev,
      c: () => sv,
      e: () => Cv,
      i: () => pv,
      k: () => Wv,
      o: () => iv,
      r: () => Tv,
      u: () => Gv,
      y: () => av,
      z: () => cv
    });
    var hv = Pv(22),
      Sv = Pv(26);
    const ev = "clientGameInventoryButtonsChanged",
      gv = new Map;

    function pv() {
      return [...gv.values()].sort(((vv, zv) => {
        var Pv, hv;
        return (null !== (Pv = vv.order) && void 0 !== Pv ? Pv : 0) - (null !== (hv = zv.order) && void 0 !== hv ? hv : 0)
      }))
    }
    let dv = null;

    function Nv(vv) {
      dv = vv
    }
    let lv = !1;

    function Tv(vv) {
      lv = !0;
      try {
        vv.onClick()
      } finally {
        lv = !1
      }
      vv.panel && "clientGame" === hv.c.get("openInGameMenuName") && Nv(vv.id)
    }

    function Wv() {
      return lv
    }

    function wv() {
      return pv().filter((vv => vv.panel && !vv.disabled))
    }

    function av(vv) {
      const zv = wv(),
        Pv = zv.findIndex((vv => vv.id === dv));
      return !(Pv < 0 || zv.length < 2) && (Tv(zv[(Pv + vv + zv.length) % zv.length]), !0)
    }

    function sv() {
      return null !== dv && wv().length > 1
    }

    function Cv() {
      Nv(null)
    }

    function iv() {
      "inventory" !== hv.c.get("openInGameMenuName") && Nv(null)
    }

    function cv() {
      const vv = dv;
      return Nv(null), vv
    }

    function Gv(vv) {
      return gv.set(vv.id, vv), Sv.j.zC(ev, pv(), !0), () => {
        gv.get(vv.id) === vv && (gv.delete(vv.id), Sv.j.zC(ev, pv()))
      }
    }
  },
  36137: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => pv,
      g: () => Cv,
      j: () => iv,
      m: () => Wv,
      q: () => Nv,
      r: () => sv,
      u: () => wv,
      w: () => lv
    });
    var hv = Pv(22),
      Sv = Pv(26),
      ev = Pv(1272),
      gv = Pv(36139);
    const pv = "clientGameUiChanged";
    let dv = null;

    function Nv() {
      return dv
    }

    function lv(vv, zv) {
      const Pv = {
        content: vv,
        menu: zv
      };
      return dv = Pv, Sv.j.zC(pv, dv, !0), () => {
        dv === Pv && (dv = null, av = !1, Cv(), Sv.j.zC(pv, null))
      }
    }
    let Tv = null;

    function Wv() {
      return Tv
    }

    function wv(vv) {
      return Tv = vv, () => {
        Tv === vv && (Tv = null)
      }
    }
    let av = !1;

    function sv() {
      const vv = hv.c.get("openInGameMenuName");
      "clientGame" !== vv && (av = "inventory" === vv), (0, gv.k)() || (0, gv.e)(), (0, ev.r)(ev.e), hv.c.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function Cv() {
      cv(!1)
    }

    function iv() {
      cv(av)
    }

    function cv(vv) {
      "clientGame" === hv.c.get("openInGameMenuName") && hv.c.set({
        openInGameMenuName: vv ? "inventory" : null
      }), vv || (0, gv.e)(), av = !1
    }
  },
  37946: (vv, zv, Pv) => {
    Pv.d(zv, {
      C: () => Wv,
      G: () => sv,
      J: () => iv,
      N: () => Sv,
      c: () => lv,
      g: () => dv,
      h: () => Gv,
      i: () => Nv,
      l: () => pv,
      m: () => gv,
      o: () => ev,
      p: () => Fv,
      q: () => wv,
      r: () => fv,
      t: () => Yv,
      x: () => jv,
      z: () => mv
    });
    var hv = Pv(9181);

    function Sv(vv) {
      return Math.floor(vv).toLocaleString("en-US")
    }
    const ev = 2e3,
      gv = .005,
      pv = .001,
      dv = 2,
      Nv = "Fluid Tank",
      lv = "Coolant Mixer",
      Tv = 144;

    function Wv(vv) {
      const zv = vv.split("|")[0];
      return (0, hv.m)(zv) ? zv === hv.e ? "cryo" : "water" : null
    }
    const wv = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ],
      av = 63;

    function sv(vv) {
      let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const Pv = zv ? function(vv, zv, Pv) {
        const hv = wv.findIndex((hv => {
          let [Sv, ev, gv] = hv;
          return Sv === vv && ev === zv && gv === Pv
        }));
        return hv < 0 ? 0 : 1 << hv
      }(zv[0], zv[1], zv[2]) : 0;
      return "maker" === vv ? {
        kind: vv,
        faces: Pv
      } : "user" === vv ? {
        kind: vv,
        faces: av & ~Pv
      } : {
        kind: vv,
        faces: av
      }
    }

    function Cv(vv) {
      return "pipe" === vv || "tank" === vv || "maker" === vv
    }

    function iv(vv, zv, Pv) {
      return 0 !== (vv.faces & 1 << Pv) && 0 !== (zv.faces & 1 << (1 ^ Pv)) && (Cv(vv.kind) || Cv(zv.kind))
    }
    const cv = (vv, zv, Pv, hv) => ({
        input: vv,
        inputAmount: hv,
        output: zv,
        outputAmount: Pv
      }),
      Gv = {
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
          recipes: [cv("Uranium Grit", "Uranium Pellet", 1, 12), cv("Spent Pellet", "Plutonium Pellet", 1, 4)],
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
          recipes: [cv("Biomass", "", 0, 1)],
          powerPerOp: 720,
          waterPerOp: 144,
          cryoMade: Tv,
          couplable: !0,
          couplerSlot: 1
        }
      };

    function mv(vv, zv) {
      return 1e3 * (null !== zv && void 0 !== zv ? zv : 0) / vv.opMs
    }

    function jv(vv) {
      let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const Pv = mv(Gv["Coolant Mixer"], Tv) * zv;
      return vv <= 0 ? 0 : Math.ceil(vv / Pv - 1e-9)
    }
    const fv = "baf2Water",
      Fv = "baf2waterclose",
      Yv = "baf2wateropen"
  },
  37943: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => nv,
      h: () => mv,
      i: () => Gv
    });
    var hv = Pv(9101),
      Sv = Pv(9122),
      ev = Pv(9181),
      gv = Pv(37946),
      pv = Pv(9176);
    const dv = (0, gv.G)("pipe"),
      Nv = (0, gv.G)("tank"),
      lv = (0, gv.G)("port"),
      Tv = "Reactor Port";

    function Wv(vv, zv, Pv) {
      const hv = new Set([ev.f, ev.e, Tv, ...zv, ...Pv, ...vv ? [gv.i] : []]);
      return {
        makers: new Set(zv),
        roots: hv
      }
    }
    const wv = {
        water: Wv(!0, ["Condenser"], ["Centrifuge", "Synthesizer", gv.c]),
        cryo: Wv(!1, [gv.c], [])
      },
      av = new Set([...wv.water.roots, ...wv.cryo.roots]),
      sv = {
        nx: [-1, 0, 0],
        ny: [0, -1, 0],
        nz: [0, 0, -1],
        px: [1, 0, 0],
        py: [0, 1, 0],
        pz: [0, 0, 1]
      },
      Cv = Sv.h.map((vv => sv[vv])),
      iv = Cv.map((vv => {
        let [zv, Pv, hv] = vv;
        return gv.q.findIndex((vv => {
          let [Sv, ev, gv] = vv;
          return Sv === zv && ev === Pv && gv === hv
        }))
      }));

    function cv(vv) {
      let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
      const Pv = hv.g[vv],
        Sv = null === Pv || void 0 === Pv ? void 0 : Pv.meta.rootName,
        Wv = wv[zv];
      if (!Sv || !Wv.roots.has(Sv)) return null;
      if ((0, ev.m)(Sv)) return (0, gv.C)(Pv.name) === zv ? dv : null;
      if (Sv === gv.i) return Nv;
      if (Sv === Tv) return Pv.name.endsWith("|Water") ? lv : null;
      const [av, sv] = pv.h[(Pv.meta.rot || 1) - 1];
      return (0, gv.G)(Wv.makers.has(Sv) ? "maker" : "user", [-av, 0, -sv])
    }

    function Gv(vv, zv, Pv, Sv) {
      let ev = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
      const {
        makers: pv
      } = wv[ev];
      return Cv.some(((Nv, lv) => {
        var Tv, Wv;
        let [wv, av, sv] = Nv;
        const Cv = vv(zv + wv, Pv + av, Sv + sv),
          Gv = cv(Cv, ev);
        return null !== Gv && pv.has(null !== (Tv = null === (Wv = hv.g[Cv]) || void 0 === Wv ? void 0 : Wv.meta.rootName) && void 0 !== Tv ? Tv : "") && !(0, gv.J)(dv, Gv, iv[lv])
      }))
    }

    function mv(vv) {
      const zv = hv.g[vv];
      return zv ? (0, gv.C)(zv.name) : null
    }
    let jv = null;

    function fv(vv) {
      if (!jv) {
        jv = new Map;
        for (const vv of ["water", "cryo"])
          for (let zv = 0; zv < 64; zv++)
            for (const Pv of [!1, !0]) jv.set((0, ev.q)(vv, zv, Pv), {
              zw: vv,
              mask: zv,
              full: Pv
            })
      }
      return jv.get(vv)
    }
    const Fv = new Map(Array.from({
      length: ev.j + 1
    }, ((vv, zv) => [(0, ev.t)(zv), zv])));

    function Yv(vv, zv, Pv, Sv, ev, gv) {
      return Cv.some(((pv, dv) => {
        var Nv, lv, Tv;
        let [Wv, wv, av] = pv;
        if (0 === (gv >> dv & 1)) return !1;
        const sv = null !== (Nv = null === (lv = hv.g[vv(zv + Wv, Pv + wv, Sv + av)]) || void 0 === lv ? void 0 : lv.name) && void 0 !== Nv ? Nv : "",
          Cv = fv(sv);
        return Cv ? Cv.zw === ev && Cv.full : (null !== (Tv = function(vv) {
          var zv;
          return null !== (zv = Fv.get(vv)) && void 0 !== zv ? zv : null
        }(sv)) && void 0 !== Tv ? Tv : 0) > 0
      }))
    }
    class nv {
      constructor() {
        this.reshapeOffsets = Cv
      }
      handles(vv) {
        return null !== mv(vv)
      }
      affects(vv) {
        var zv, Pv;
        return av.has(null !== (zv = null === (Pv = hv.g[vv]) || void 0 === Pv ? void 0 : Pv.meta.rootName) && void 0 !== zv ? zv : "")
      }
      placedBy(vv) {
        var zv;
        return (null === (zv = hv.g[vv]) || void 0 === zv ? void 0 : zv.meta.rootName) === ev.e ? ev.f : null
      }
      shape(vv, zv, Pv, Sv, pv, Nv) {
        var lv, Tv, Wv;
        const wv = null !== (lv = null === (Tv = hv.g[pv]) || void 0 === Tv ? void 0 : Tv.name) && void 0 !== lv ? lv : "",
          av = Nv || wv !== ev.f ? null !== (Wv = (0, gv.C)(wv)) && void 0 !== Wv ? Wv : "water" : function(vv, zv, Pv, hv) {
            return Cv.some(((Sv, ev) => {
              let [pv, Nv, lv] = Sv;
              const Tv = cv(vv(zv + pv, Pv + Nv, hv + lv), "cryo");
              return null !== Tv && "port" !== Tv.kind && (0, gv.J)(dv, Tv, iv[ev])
            })) ? "cryo" : "water"
          }(vv, zv, Pv, Sv),
          sv = function(vv, zv, Pv, hv) {
            let Sv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water",
              ev = 0;
            return Cv.forEach(((pv, Nv) => {
              let [lv, Tv, Wv] = pv;
              const wv = cv(vv(zv + lv, Pv + Tv, hv + Wv), Sv);
              wv && (0, gv.J)(dv, wv, iv[Nv]) && (ev |= 1 << Nv)
            })), ev
          }(vv, zv, Pv, Sv, av),
          Gv = Nv ? function(vv) {
            var zv;
            return !0 === (null === (zv = fv(vv)) || void 0 === zv ? void 0 : zv.full)
          }(wv) : Yv(vv, zv, Pv, Sv, av, sv);
        return (0, hv.i)((0, ev.q)(av, sv, Gv))
      }
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);