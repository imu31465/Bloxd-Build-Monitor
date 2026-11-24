export const id = 11;
export const ids = [11];
export const modules = {
  36791: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Wp,
      h: () => yp,
      i: () => Pp,
      k: () => Ap
    });
    var Op = cp(34430),
      op = cp(36799),
      Ip = cp(36804),
      Sp = cp(8852),
      xp = cp(1476),
      Lp = cp(62),
      Yp = cp(82),
      Dp = cp(1112);

    function Ap() {
      var pp;
      return (0, xp.i)(op.d, (0, op.s)()), (0, Dp.jsx)(Dp.Fragment, {
        children: null === (pp = (0, op.s)()) || void 0 === pp ? void 0 : pp.content
      })
    }

    function Pp(pp) {
      var ip;
      let {
        show: cp
      } = pp;
      (0, xp.i)(op.d, (0, op.s)());
      const Yp = null === (ip = (0, op.s)()) || void 0 === ip ? void 0 : ip.menu;
      return (0, Lp.useEffect)((() => {
        var pp;
        cp || (null === Yp || void 0 === Yp || null === (pp = Yp.onClose) || void 0 === pp || pp.call(Yp), (0, Ip.q)())
      }), [cp, Yp]), (0, Lp.useEffect)((() => cp ? (0, Sp.e)(Ip.A, Ip.d) : void 0), [cp]), (0, Dp.jsx)(Op.b, {
        showing: cp,
        globallyUniqueKey: "clientGameMenu",
        children: null === Yp || void 0 === Yp ? void 0 : Yp.content
      })
    }

    function Wp(pp) {
      let {
        placement: ip = "bottom"
      } = pp;
      return (0, Dp.jsx)("div", {
        id: `clientGameHud-${ip}`,
        style: {
          display: "contents"
        }
      })
    }

    function yp(pp) {
      let {
        children: ip,
        placement: cp = "bottom"
      } = pp;
      const [Op, op] = (0, Lp.useState)(null);
      return (0, Lp.useEffect)((() => {
        op(document.getElementById(`clientGameHud-${cp}`))
      }), [cp]), Op ? (0, Yp.createPortal)(ip, Op) : null
    }
  },
  34430: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Ip
    });
    var Op = cp(4628),
      op = cp(4635);

    function Ip(pp) {
      let {
        children: ip,
        showing: cp,
        globallyUniqueKey: Ip,
        alwaysMountChildren: Sp = !1,
        doGameplayStartStopOnShow: xp = !0,
        keepsMovement: Lp = !1
      } = pp;
      return (0, op.e)(!0, cp, Ip, Lp), (0, Op.d)(xp, cp), cp || Sp ? ip : null
    }
  },
  5146: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Sp
    });
    var Op = cp(1049),
      op = cp.n(Op),
      Ip = cp(1112);

    function Sp(pp) {
      let {
        options: ip,
        value: cp,
        onChange: Op,
        ariaLabel: Sp,
        className: xp,
        reselectable: Lp = !1,
        keepsFocus: Yp = !1,
        padTabs: Dp
      } = pp;
      const Ap = void 0 !== Dp;
      return (0, Ip.jsx)("div", {
        className: op()("SegmentedToggle", xp),
        role: "group",
        "aria-label": Sp,
        "data-pad-tabs": Dp,
        children: ip.map((pp => {
          const ip = pp.value === cp;
          return (0, Ip.jsx)("button", {
            type: "button",
            "aria-pressed": ip,
            "data-pad-tab": Ap || void 0,
            "data-pad-selected": Ap && ip ? "true" : void 0,
            "data-pad-default-focus": Ap && ip || void 0,
            "aria-label": pp.ariaLabel,
            title: pp.ariaLabel,
            className: op()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: ip
            }),
            onMouseDown: Yp ? pp => {
              pp.preventDefault()
            } : void 0,
            onClick: () => {
              ip && !Lp || Op(pp.value)
            },
            children: pp.label
          }, pp.value)
        }))
      })
    }
  },
  8852: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Ip,
      e: () => op
    });
    let Op = null;
    const op = function(pp) {
        const ip = {
          cycle: pp,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Op = ip, () => {
          Op === ip && (Op = null)
        }
      },
      Ip = () => {
        var pp;
        return null !== (pp = Op) && void 0 !== pp && pp.canCycle() ? Op.cycle : null
      }
  },
  37032: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => op,
      g: () => Ip
    });
    const Op = new Map;

    function op(pp) {
      var ip;
      return null === pp ? null : null !== (ip = Op.get(pp)) && void 0 !== ip ? ip : null
    }

    function Ip(pp, ip) {
      return Op.set(pp, ip), () => {
        Op.get(pp) === ip && Op.delete(pp)
      }
    }
  },
  38636: (pp, ip, cp) => {
    cp.d(ip, {
      B: () => Pp,
      D: () => Up,
      G: () => vp,
      J: () => op,
      b: () => Dp,
      e: () => Lp,
      h: () => Hp,
      i: () => Yp,
      k: () => xp,
      m: () => Sp,
      o: () => Ip,
      p: () => kp,
      s: () => Wp,
      t: () => jp,
      x: () => mp,
      y: () => ep,
      z: () => dp
    });
    var Op = cp(9427);

    function op(pp) {
      return Math.floor(pp).toLocaleString("en-US")
    }
    const Ip = 2e3,
      Sp = .005,
      xp = .001,
      Lp = 2,
      Yp = "Fluid Tank",
      Dp = "Coolant Mixer",
      Ap = 144;

    function Pp(pp) {
      const ip = pp.split("|")[0];
      return (0, Op.i)(ip) ? ip === Op.c ? "cryo" : "water" : null
    }
    const Wp = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ],
      yp = 63;

    function Up(pp) {
      let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const cp = ip ? function(pp, ip, cp) {
        const Op = Wp.findIndex((Op => {
          let [op, Ip, Sp] = Op;
          return op === pp && Ip === ip && Sp === cp
        }));
        return Op < 0 ? 0 : 1 << Op
      }(ip[0], ip[1], ip[2]) : 0;
      return "maker" === pp ? {
        kind: pp,
        faces: cp
      } : "user" === pp ? {
        kind: pp,
        faces: yp & ~cp
      } : {
        kind: pp,
        faces: yp
      }
    }

    function wp(pp) {
      return "pipe" === pp || "tank" === pp || "maker" === pp
    }

    function vp(pp, ip, cp) {
      return 0 !== (pp.faces & 1 << cp) && 0 !== (ip.faces & 1 << (1 ^ cp)) && (wp(pp.kind) || wp(ip.kind))
    }
    const tp = (pp, ip, cp, Op) => ({
        input: pp,
        inputAmount: Op,
        output: ip,
        outputAmount: cp
      }),
      Hp = {
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
          recipes: [tp("Uranium Grit", "Uranium Pellet", 1, 12), tp("Spent Pellet", "Plutonium Pellet", 1, 4)],
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
          recipes: [tp("Biomass", "", 0, 1)],
          powerPerOp: 720,
          waterPerOp: 144,
          cryoMade: Ap,
          couplable: !0,
          couplerSlot: 1
        }
      };

    function dp(pp, ip) {
      return 1e3 * (null !== ip && void 0 !== ip ? ip : 0) / pp.opMs
    }

    function ep(pp) {
      let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const cp = dp(Hp["Coolant Mixer"], Ap) * ip;
      return pp <= 0 ? 0 : Math.ceil(pp / cp - 1e-9)
    }
    const jp = "baf2Water",
      kp = "baf2waterclose",
      mp = "baf2wateropen"
  },
  38633: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Rp,
      e: () => dp,
      h: () => Hp
    });
    var Op = cp(9338),
      op = cp(9359),
      Ip = cp(9427),
      Sp = cp(38636),
      xp = cp(9422);
    const Lp = (0, Sp.D)("pipe"),
      Yp = (0, Sp.D)("tank"),
      Dp = (0, Sp.D)("port"),
      Ap = "Reactor Port";

    function Pp(pp, ip, cp) {
      const Op = new Set([Ip.d, Ip.c, Ap, ...ip, ...cp, ...pp ? [Sp.i] : []]);
      return {
        makers: new Set(ip),
        roots: Op
      }
    }
    const Wp = {
        water: Pp(!0, ["Condenser"], ["Centrifuge", "Synthesizer", Sp.b]),
        cryo: Pp(!1, [Sp.b], [])
      },
      yp = new Set([...Wp.water.roots, ...Wp.cryo.roots]),
      Up = {
        nx: [-1, 0, 0],
        ny: [0, -1, 0],
        nz: [0, 0, -1],
        px: [1, 0, 0],
        py: [0, 1, 0],
        pz: [0, 0, 1]
      },
      wp = op.g.map((pp => Up[pp])),
      vp = wp.map((pp => {
        let [ip, cp, Op] = pp;
        return Sp.s.findIndex((pp => {
          let [op, Ip, Sp] = pp;
          return op === ip && Ip === cp && Sp === Op
        }))
      }));

    function tp(pp) {
      let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
      const cp = Op.e[pp],
        op = null === cp || void 0 === cp ? void 0 : cp.meta.rootName,
        Pp = Wp[ip];
      if (!op || !Pp.roots.has(op)) return null;
      if ((0, Ip.i)(op)) return (0, Sp.B)(cp.name) === ip ? Lp : null;
      if (op === Sp.i) return Yp;
      if (op === Ap) return cp.name.endsWith("|Water") ? Dp : null;
      const [yp, Up] = xp.h[(cp.meta.rot || 1) - 1];
      return (0, Sp.D)(Pp.makers.has(op) ? "maker" : "user", [-yp, 0, -Up])
    }

    function Hp(pp, ip, cp, op) {
      let Ip = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
      const {
        makers: xp
      } = Wp[Ip];
      return wp.some(((Yp, Dp) => {
        var Ap, Pp;
        let [Wp, yp, Up] = Yp;
        const wp = pp(ip + Wp, cp + yp, op + Up),
          Hp = tp(wp, Ip);
        return null !== Hp && xp.has(null !== (Ap = null === (Pp = Op.e[wp]) || void 0 === Pp ? void 0 : Pp.meta.rootName) && void 0 !== Ap ? Ap : "") && !(0, Sp.G)(Lp, Hp, vp[Dp])
      }))
    }

    function dp(pp) {
      const ip = Op.e[pp];
      return ip ? (0, Sp.B)(ip.name) : null
    }
    let ep = null;

    function jp(pp) {
      if (!ep) {
        ep = new Map;
        for (const pp of ["water", "cryo"])
          for (let ip = 0; ip < 64; ip++)
            for (const cp of [!1, !0]) ep.set((0, Ip.j)(pp, ip, cp), {
              tW: pp,
              mask: ip,
              full: cp
            })
      }
      return ep.get(pp)
    }
    const kp = new Map(Array.from({
      length: Ip.h + 1
    }, ((pp, ip) => [(0, Ip.m)(ip), ip])));

    function mp(pp, ip, cp, op, Ip, Sp) {
      return wp.some(((xp, Lp) => {
        var Yp, Dp, Ap;
        let [Pp, Wp, yp] = xp;
        if (0 === (Sp >> Lp & 1)) return !1;
        const Up = null !== (Yp = null === (Dp = Op.e[pp(ip + Pp, cp + Wp, op + yp)]) || void 0 === Dp ? void 0 : Dp.name) && void 0 !== Yp ? Yp : "",
          wp = jp(Up);
        return wp ? wp.tW === Ip && wp.full : (null !== (Ap = function(pp) {
          var ip;
          return null !== (ip = kp.get(pp)) && void 0 !== ip ? ip : null
        }(Up)) && void 0 !== Ap ? Ap : 0) > 0
      }))
    }
    class Rp {
      constructor() {
        this.reshapeOffsets = wp
      }
      handles(pp) {
        return null !== dp(pp)
      }
      affects(pp) {
        var ip, cp;
        return yp.has(null !== (ip = null === (cp = Op.e[pp]) || void 0 === cp ? void 0 : cp.meta.rootName) && void 0 !== ip ? ip : "")
      }
      placedBy(pp) {
        var ip;
        return (null === (ip = Op.e[pp]) || void 0 === ip ? void 0 : ip.meta.rootName) === Ip.c ? Ip.d : null
      }
      shape(pp, ip, cp, op, xp, Yp) {
        var Dp, Ap, Pp;
        const Wp = null !== (Dp = null === (Ap = Op.e[xp]) || void 0 === Ap ? void 0 : Ap.name) && void 0 !== Dp ? Dp : "",
          yp = Yp || Wp !== Ip.d ? null !== (Pp = (0, Sp.B)(Wp)) && void 0 !== Pp ? Pp : "water" : function(pp, ip, cp, Op) {
            return wp.some(((op, Ip) => {
              let [xp, Yp, Dp] = op;
              const Ap = tp(pp(ip + xp, cp + Yp, Op + Dp), "cryo");
              return null !== Ap && "port" !== Ap.kind && (0, Sp.G)(Lp, Ap, vp[Ip])
            })) ? "cryo" : "water"
          }(pp, ip, cp, op),
          Up = function(pp, ip, cp, Op) {
            let op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water",
              Ip = 0;
            return wp.forEach(((xp, Yp) => {
              let [Dp, Ap, Pp] = xp;
              const Wp = tp(pp(ip + Dp, cp + Ap, Op + Pp), op);
              Wp && (0, Sp.G)(Lp, Wp, vp[Yp]) && (Ip |= 1 << Yp)
            })), Ip
          }(pp, ip, cp, op, yp),
          Hp = Yp ? function(pp) {
            var ip;
            return !0 === (null === (ip = jp(pp)) || void 0 === ip ? void 0 : ip.full)
          }(Wp) : mp(pp, ip, cp, op, yp, Up);
        return (0, Op.f)((0, Ip.j)(yp, Up, Hp))
      }
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);