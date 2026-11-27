export const id = 11;
export const ids = [11];
export const modules = {
  38154: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => hr,
      d: () => zr,
      h: () => mr,
      l: () => xr
    });
    var Zr = Qr(35448),
      Wr = Qr(3425),
      ar = Qr(3429),
      jr = Qr(9818),
      Ir = Qr(1573),
      fr = Qr(72),
      Er = Qr(92),
      pr = Qr(1338);

    function xr() {
      var rr;
      return (0, Ir.g)(Wr.e, (0, Wr.w)()), (0, pr.jsx)(pr.Fragment, {
        children: null === (rr = (0, Wr.w)()) || void 0 === rr ? void 0 : rr.content
      })
    }

    function mr(rr) {
      var Sr;
      let {
        show: Qr
      } = rr;
      (0, Ir.g)(Wr.e, (0, Wr.w)());
      const Er = null === (Sr = (0, Wr.w)()) || void 0 === Sr ? void 0 : Sr.menu;
      return (0, fr.useEffect)((() => {
        var rr;
        Qr || (null === Er || void 0 === Er || null === (rr = Er.onClose) || void 0 === rr || rr.call(Er), (0, ar.o)())
      }), [Qr, Er]), (0, fr.useEffect)((() => Qr ? (0, jr.f)(ar.v, ar.e) : void 0), [Qr]), (0, pr.jsx)(Zr.c, {
        showing: Qr,
        globallyUniqueKey: "clientGameMenu",
        children: null === Er || void 0 === Er ? void 0 : Er.content
      })
    }
    const Nr = new Map,
      Ur = new Set;

    function tr(rr, Sr) {
      Sr ? Nr.set(rr, Sr) : Nr.delete(rr);
      for (const Qr of Ur) Qr()
    }

    function hr(rr) {
      let {
        placement: Sr = "bottom"
      } = rr;
      const Qr = (0, fr.useRef)(null);
      return (0, fr.useLayoutEffect)((() => {
        const rr = Qr.current;
        return tr(Sr, rr), () => {
          Nr.get(Sr) === rr && tr(Sr, null)
        }
      }), [Sr]), (0, pr.jsx)("div", {
        ref: Qr,
        id: `clientGameHud-${Sr}`,
        style: {
          display: "contents"
        }
      })
    }

    function zr(rr) {
      let {
        children: Sr,
        placement: Qr = "bottom"
      } = rr;
      const [Zr, Wr] = (0, fr.useState)((() => {
        var rr;
        return null !== (rr = Nr.get(Qr)) && void 0 !== rr ? rr : null
      }));
      return (0, fr.useEffect)((() => {
        const rr = () => {
          var rr;
          Wr(null !== (rr = Nr.get(Qr)) && void 0 !== rr ? rr : null)
        };
        return Ur.add(rr), rr(), () => {
          Ur.delete(rr)
        }
      }), [Qr]), Zr ? (0, Er.createPortal)(Sr, Zr) : null
    }
  },
  35448: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => ar
    });
    var Zr = Qr(5301),
      Wr = Qr(5308);

    function ar(rr) {
      let {
        children: Sr,
        showing: Qr,
        globallyUniqueKey: ar,
        alwaysMountChildren: jr = !1,
        doGameplayStartStopOnShow: Ir = !0,
        keepsMovement: fr = !1
      } = rr;
      return (0, Wr.b)(!0, Qr, ar, fr), (0, Zr.e)(Ir, Qr), Qr || jr ? Sr : null
    }
  },
  9818: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => ar,
      f: () => Wr
    });
    let Zr = null;
    const Wr = function(rr) {
        const Sr = {
          cycle: rr,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Zr = Sr, () => {
          Zr === Sr && (Zr = null)
        }
      },
      ar = () => {
        var rr;
        return null !== (rr = Zr) && void 0 !== rr && rr.canCycle() ? Zr.cycle : null
      }
  },
  38303: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Wr,
      f: () => ar
    });
    const Zr = new Map;

    function Wr(rr) {
      var Sr;
      return null === rr ? null : null !== (Sr = Zr.get(rr)) && void 0 !== Sr ? Sr : null
    }

    function ar(rr, Sr) {
      return Zr.set(rr, Sr), () => {
        Zr.get(rr) === Sr && Zr.delete(rr)
      }
    }
  },
  39920: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      C: () => yr,
      D: () => Tr,
      G: () => Kr,
      I: () => er,
      K: () => mr,
      N: () => tr,
      P: () => zr,
      S: () => Wr,
      b: () => pr,
      d: () => fr,
      e: () => nr,
      i: () => Er,
      m: () => Ir,
      q: () => jr,
      t: () => ar,
      w: () => Br,
      z: () => Nr
    });
    var Zr = Qr(5870);

    function Wr(rr) {
      return Math.floor(rr).toLocaleString("en-US")
    }
    const ar = 2e3,
      jr = .005,
      Ir = .001,
      fr = 2,
      Er = "Fluid Tank",
      pr = "Coolant Mixer",
      xr = 144;

    function mr(rr) {
      const Sr = rr.split("|")[0];
      return (0, Zr.k)(Sr) ? Sr === Zr.d ? "cryo" : "water" : null
    }
    const Nr = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ],
      Ur = 63;

    function tr(rr) {
      let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const Qr = Sr ? function(rr, Sr, Qr) {
        const Zr = Nr.findIndex((Zr => {
          let [Wr, ar, jr] = Zr;
          return Wr === rr && ar === Sr && jr === Qr
        }));
        return Zr < 0 ? 0 : 1 << Zr
      }(Sr[0], Sr[1], Sr[2]) : 0;
      return "maker" === rr ? {
        kind: rr,
        faces: Qr
      } : "user" === rr ? {
        kind: rr,
        faces: Ur & ~Qr
      } : {
        kind: rr,
        faces: Ur
      }
    }

    function hr(rr) {
      return "pipe" === rr || "tank" === rr || "maker" === rr
    }

    function zr(rr, Sr, Qr) {
      return 0 !== (rr.faces & 1 << Qr) && 0 !== (Sr.faces & 1 << (1 ^ Qr)) && (hr(rr.kind) || hr(Sr.kind))
    }
    const Yr = (rr, Sr, Qr, Zr) => ({
        input: rr,
        inputAmount: Zr,
        output: Sr,
        outputAmount: Qr
      }),
      nr = {
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
          recipes: [Yr("Uranium Grit", "Uranium Pellet", 1, 12), Yr("Spent Pellet", "Plutonium Pellet", 1, 4)],
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
          recipes: [Yr("Biomass", "", 0, 1)],
          powerPerOp: 720,
          waterPerOp: 144,
          cryoMade: xr,
          couplable: !0,
          couplerSlot: 1
        }
      };

    function er(rr, Sr) {
      return 1e3 * (null !== Sr && void 0 !== Sr ? Sr : 0) / rr.opMs
    }

    function Kr(rr) {
      let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const Qr = er(nr["Coolant Mixer"], xr) * Sr;
      return rr <= 0 ? 0 : Math.ceil(rr / Qr - 1e-9)
    }
    const yr = "baf2Water",
      Br = "baf2waterclose",
      Tr = "baf2wateropen"
  },
  39914: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => vr,
      f: () => er,
      h: () => nr
    });
    var Zr = Qr(5779),
      Wr = Qr(5806),
      ar = Qr(5870),
      jr = Qr(39920),
      Ir = Qr(5861);
    const fr = (0, jr.N)("pipe"),
      Er = (0, jr.N)("tank"),
      pr = (0, jr.N)("port"),
      xr = "Reactor Port";

    function mr(rr, Sr, Qr) {
      const Zr = new Set([ar.g, ar.d, xr, ...Sr, ...Qr, ...rr ? [jr.i] : []]);
      return {
        makers: new Set(Sr),
        roots: Zr
      }
    }
    const Nr = {
        water: mr(!0, ["Condenser"], ["Centrifuge", "Synthesizer", jr.b]),
        cryo: mr(!1, [jr.b], [])
      },
      Ur = new Set([...Nr.water.roots, ...Nr.cryo.roots]),
      tr = {
        nx: [-1, 0, 0],
        ny: [0, -1, 0],
        nz: [0, 0, -1],
        px: [1, 0, 0],
        py: [0, 1, 0],
        pz: [0, 0, 1]
      },
      hr = Wr.f.map((rr => tr[rr])),
      zr = hr.map((rr => {
        let [Sr, Qr, Zr] = rr;
        return jr.z.findIndex((rr => {
          let [Wr, ar, jr] = rr;
          return Wr === Sr && ar === Qr && jr === Zr
        }))
      }));

    function Yr(rr) {
      let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
      const Qr = Zr.j[rr],
        Wr = null === Qr || void 0 === Qr ? void 0 : Qr.meta.rootName,
        mr = Nr[Sr];
      if (!Wr || !mr.roots.has(Wr)) return null;
      if ((0, ar.k)(Wr)) return (0, jr.K)(Qr.name) === Sr ? fr : null;
      if (Wr === jr.i) return Er;
      if (Wr === xr) return Qr.name.endsWith("|Water") ? pr : null;
      const [Ur, tr] = Ir.d[(Qr.meta.rot || 1) - 1];
      return (0, jr.N)(mr.makers.has(Wr) ? "maker" : "user", [-Ur, 0, -tr])
    }

    function nr(rr, Sr, Qr, Wr) {
      let ar = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
      const {
        makers: Ir
      } = Nr[ar];
      return hr.some(((Er, pr) => {
        var xr, mr;
        let [Nr, Ur, tr] = Er;
        const hr = rr(Sr + Nr, Qr + Ur, Wr + tr),
          nr = Yr(hr, ar);
        return null !== nr && Ir.has(null !== (xr = null === (mr = Zr.j[hr]) || void 0 === mr ? void 0 : mr.meta.rootName) && void 0 !== xr ? xr : "") && !(0, jr.P)(fr, nr, zr[pr])
      }))
    }

    function er(rr) {
      const Sr = Zr.j[rr];
      return Sr ? (0, jr.K)(Sr.name) : null
    }
    let Kr = null;

    function yr(rr) {
      if (!Kr) {
        Kr = new Map;
        for (const rr of ["water", "cryo"])
          for (let Sr = 0; Sr < 64; Sr++)
            for (const Qr of [!1, !0]) Kr.set((0, ar.o)(rr, Sr, Qr), {
              HN: rr,
              mask: Sr,
              full: Qr
            })
      }
      return Kr.get(rr)
    }
    const Br = new Map(Array.from({
      length: ar.h + 1
    }, ((rr, Sr) => [(0, ar.p)(Sr), Sr])));

    function Tr(rr, Sr, Qr, Wr, ar, jr) {
      return hr.some(((Ir, fr) => {
        var Er, pr, xr;
        let [mr, Nr, Ur] = Ir;
        if (0 === (jr >> fr & 1)) return !1;
        const tr = null !== (Er = null === (pr = Zr.j[rr(Sr + mr, Qr + Nr, Wr + Ur)]) || void 0 === pr ? void 0 : pr.name) && void 0 !== Er ? Er : "",
          hr = yr(tr);
        return hr ? hr.HN === ar && hr.full : (null !== (xr = function(rr) {
          var Sr;
          return null !== (Sr = Br.get(rr)) && void 0 !== Sr ? Sr : null
        }(tr)) && void 0 !== xr ? xr : 0) > 0
      }))
    }
    class vr {
      constructor() {
        this.reshapeOffsets = hr
      }
      handles(rr) {
        return null !== er(rr)
      }
      affects(rr) {
        var Sr, Qr;
        return Ur.has(null !== (Sr = null === (Qr = Zr.j[rr]) || void 0 === Qr ? void 0 : Qr.meta.rootName) && void 0 !== Sr ? Sr : "")
      }
      placedBy(rr) {
        var Sr;
        return (null === (Sr = Zr.j[rr]) || void 0 === Sr ? void 0 : Sr.meta.rootName) === ar.d ? ar.g : null
      }
      shape(rr, Sr, Qr, Wr, Ir, Er) {
        var pr, xr, mr;
        const Nr = null !== (pr = null === (xr = Zr.j[Ir]) || void 0 === xr ? void 0 : xr.name) && void 0 !== pr ? pr : "",
          Ur = Er || Nr !== ar.g ? null !== (mr = (0, jr.K)(Nr)) && void 0 !== mr ? mr : "water" : function(rr, Sr, Qr, Zr) {
            return hr.some(((Wr, ar) => {
              let [Ir, Er, pr] = Wr;
              const xr = Yr(rr(Sr + Ir, Qr + Er, Zr + pr), "cryo");
              return null !== xr && "port" !== xr.kind && (0, jr.P)(fr, xr, zr[ar])
            })) ? "cryo" : "water"
          }(rr, Sr, Qr, Wr),
          tr = function(rr, Sr, Qr, Zr) {
            let Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water",
              ar = 0;
            return hr.forEach(((Ir, Er) => {
              let [pr, xr, mr] = Ir;
              const Nr = Yr(rr(Sr + pr, Qr + xr, Zr + mr), Wr);
              Nr && (0, jr.P)(fr, Nr, zr[Er]) && (ar |= 1 << Er)
            })), ar
          }(rr, Sr, Qr, Wr, Ur),
          nr = Er ? function(rr) {
            var Sr;
            return !0 === (null === (Sr = yr(rr)) || void 0 === Sr ? void 0 : Sr.full)
          }(Nr) : Tr(rr, Sr, Qr, Wr, Ur, tr);
        return (0, Zr.k)((0, ar.o)(Ur, tr, nr))
      }
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);