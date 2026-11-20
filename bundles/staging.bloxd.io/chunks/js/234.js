export const id = 234;
export const ids = [234];
export const modules = {
  37728: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => dk,
      i: () => Rk,
      k: () => bk,
      n: () => tk,
      r: () => Xk,
      s: () => ak
    });
    const Rk = 1.001,
      tk = .501,
      ak = .025,
      Xk = .75,
      bk = .08,
      wk = 4;

    function dk() {
      const kk = tk,
        Fk = ak,
        Bk = kk - Fk / 2,
        Rk = (2 * kk - 2 * Fk) / (2 * wk - 1),
        Xk = [];
      for (const tk of [-Bk, Bk])
        for (const ak of [-Bk, Bk])
          for (let Bk = 0; Bk < wk; Bk++) {
            const bk = -kk + Fk + Rk * (2 * Bk + .5);
            Xk.push([Rk, Fk, Fk, bk, tk, ak]), Xk.push([Fk, Rk, Fk, tk, bk, ak]), Xk.push([Fk, Fk, Rk, tk, ak, bk])
          }
      for (const tk of [-Bk, Bk])
        for (const kk of [-Bk, Bk])
          for (const Rk of [-Bk, Bk]) Xk.push([Fk, Fk, Fk, tk, kk, Rk]);
      return Xk
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
  38064: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => ck,
      d: () => Gk
    });
    var Rk = Bk(9095),
      tk = Bk(9114);
    const ak = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0],
      [0, -1, 0]
    ];
    var Xk = Bk(9132),
      bk = Bk(37872),
      wk = Bk(9127);
    const dk = {
      1: [0, -1],
      2: [-1, 0],
      3: [0, 1],
      4: [1, 0]
    };

    function sk(kk) {
      let [Fk, Bk] = kk;
      return [-Bk, Fk]
    }

    function Vk(kk, Fk) {
      return kk[0] === Fk[0] && kk[1] === Fk[1]
    }

    function Jk(kk, Fk) {
      return kk[0] * Fk[0] + kk[1] * Fk[1] === 0
    }
    const Ak = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];
    var ek = Bk(9156);

    function yk(kk, Fk, Bk, Rk, tk) {
      return Fk < ek.t || Fk >= ek.t + ek.v || Math.floor(kk / ek.x) === Math.floor(Rk / ek.x) && Math.floor(Bk / ek.x) === Math.floor(tk / ek.x)
    }
    const fk = "Splitter",
      mk = "Sorting Gate",
      Wk = new Set(ek.K),
      vk = new Set([...ek.K, "Belt Loader", "Fast Loader", mk]),
      ik = new Set(ek.w),
      Yk = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 0, 1],
        [0, 0, -1],
        [0, 1, 0],
        [0, -1, 0]
      ];

    function Lk(kk) {
      var Fk, Bk;
      return null !== (Fk = null === (Bk = Rk.j[kk]) || void 0 === Bk ? void 0 : Bk.meta.rootName) && void 0 !== Fk ? Fk : ""
    }

    function Ok(kk) {
      return Lk(kk) === ek.h && (0, ek.S)(Rk.j[kk].name)
    }
    var Ek = Bk(9118),
      Sk = Bk(9143);
    const Nk = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function Hk(kk) {
      var Fk, Bk;
      const tk = null === (Fk = Rk.j[kk]) || void 0 === Fk ? void 0 : Fk.meta;
      return (null === tk || void 0 === tk ? void 0 : tk.rootName) !== Sk.o ? null : {
        rot: null !== (Bk = tk.rot) && void 0 !== Bk ? Bk : 1,
        half: (0, Sk.d)(tk.rootName, tk.metaStr)
      }
    }

    function uk(kk, Fk, Bk, Rk) {
      return Hk(kk(Fk, Bk, Rk))
    }

    function Mk(kk, Fk, Bk, Rk, tk) {
      let {
        rot: ak,
        half: Xk
      } = tk;
      const [bk, wk] = (0, Sk.k)(ak, Xk), dk = uk(kk, Fk + bk, Bk, Rk + wk);
      return null !== dk && dk.rot === ak && dk.half === Sk.q[Xk]
    }
    var gk = Bk(38067);
    const Uk = [new class {
      constructor() {
        this.reshapeOffsets = Ak
      }
      handles(kk) {
        var Fk;
        return "Stairs" === (null === (Fk = Rk.j[kk]) || void 0 === Fk ? void 0 : Fk.model)
      }
      affects(kk) {
        return this.handles(kk)
      }
      shape(kk, Fk, Bk, tk, ak) {
        const Xk = this.stairsOf(ak),
          bk = this.cornerAt(kk, Fk, Bk, tk, Xk),
          dk = Xk.half === wk.e.top ? "top" : "bot";
        return (0, Rk.m)(`${Rk.j[ak].meta.rootName}|meta|rot${Xk.rot}|${dk}${null===bk?"":`|${bk}`}`)
      }
      stairsOf(kk) {
        const {
          rot: Fk,
          halfblockPlacement: Bk
        } = Rk.j[kk].meta;
        return {
          rot: Fk,
          half: Bk
        }
      }
      stairsAt(kk, Fk, Bk, Rk) {
        const tk = kk(Fk, Bk, Rk);
        return this.handles(tk) ? this.stairsOf(tk) : null
      }
      cornerAt(kk, Fk, Bk, Rk, tk) {
        let {
          rot: ak,
          half: Xk
        } = tk;
        const bk = dk[ak],
          wk = tk => {
            let [bk, wk] = tk;
            const dk = this.stairsAt(kk, Fk + bk, Bk, Rk + wk);
            return null !== dk && dk.rot === ak && dk.half === Xk
          },
          Ak = this.stairsAt(kk, Fk + bk[0], Bk, Rk + bk[1]);
        if (null !== Ak && Ak.half === Xk) {
          const kk = dk[Ak.rot];
          if (Jk(bk, kk) && !wk([-kk[0], -kk[1]])) return Vk(kk, sk(bk)) ? "outerLeft" : "outerRight"
        }
        const ek = this.stairsAt(kk, Fk - bk[0], Bk, Rk - bk[1]);
        if (null !== ek && ek.half === Xk) {
          const kk = dk[ek.rot];
          if (Jk(bk, kk) && !wk(kk)) return Vk(kk, sk(bk)) ? "innerLeft" : "innerRight"
        }
        return null
      }
    }, new class {
      constructor() {
        this.reshapeOffsets = ak, this.rootIds = new Set(tk.g.map((kk => (0, Rk.m)(kk))))
      }
      handles(kk) {
        var Fk;
        const Bk = null === (Fk = Rk.j[kk]) || void 0 === Fk ? void 0 : Fk.meta;
        return void 0 !== Bk && this.rootIds.has(Bk.rootId)
      }
      affects(kk) {
        return this.handles(kk)
      }
      placedBy(kk) {
        return Rk.j[kk].meta.rootName === tk.n ? null : tk.n
      }
      shape(kk, Fk, Bk, ak, Xk) {
        const {
          rootId: bk,
          rootName: wk,
          rot: dk
        } = Rk.j[Xk].meta;
        let sk = 0;
        return tk.t[dk].forEach(((tk, Xk) => {
          var wk;
          let [Vk, Jk, Ak] = tk;
          const ek = null === (wk = Rk.j[kk(Fk + Vk, Bk + Jk, ak + Ak)]) || void 0 === wk ? void 0 : wk.meta;
          (null === ek || void 0 === ek ? void 0 : ek.rootId) === bk && ek.rot === dk && (sk |= 1 << Xk)
        })), (0, Rk.m)((0, tk.f)(wk, dk, sk))
      }
    }, ...Xk.d.map((kk => new bk.d(kk))), new class {
      constructor() {
        this.reshapeOffsets = Yk
      }
      handles(kk) {
        const Fk = Lk(kk);
        return Wk.has(Fk) || Fk === ek.h
      }
      affects(kk) {
        const Fk = Lk(kk);
        return vk.has(Fk) || ik.has(Fk) || Fk === fk || Fk === ek.h || void 0 !== ek.c[Fk]
      }
      shape(kk, Fk, Bk, tk, ak, Xk) {
        const {
          rootName: bk,
          rot: wk
        } = Rk.j[ak].meta;
        return bk === ek.h ? Xk ? ak : function(kk, Fk, Bk, tk, ak) {
          const [Xk, bk] = ek.d[ak - 1];
          for (let wk = 1; wk <= ek.H; wk++) {
            const [dk, sk] = [Fk - Xk * wk, tk - bk * wk], Vk = kk(dk, Bk, sk);
            if (Lk(Vk) === ek.h && Rk.j[Vk].meta.rot === ak && yk(Fk, Bk, tk, dk, sk)) return (0, Rk.m)((0, ek._)(ak, !Ok(Vk)))
          }
          return (0, Rk.m)((0, ek._)(ak, !1))
        }(kk, Fk, Bk, tk, wk) : (0, Rk.m)((0, ek.L)(bk, wk, function(kk, Fk, Bk, tk, ak) {
          const [Xk, bk] = ek.d[ak - 1], wk = (ak, wk) => function(kk, Fk, Bk, tk, ak) {
            var Xk;
            const bk = null === (Xk = Rk.j[kk]) || void 0 === Xk ? void 0 : Xk.meta;
            if (!bk) return !1;
            const wk = bk.rootName,
              dk = vk.has(wk) || Ok(kk);
            if (!dk && !ik.has(wk) && wk !== fk) return !1;
            const [sk, Vk] = ek.d[bk.rot - 1];
            return dk ? sk === -Fk && Vk === -Bk : ik.has(wk) ? sk === Fk && Vk === Bk : (0, ek.Z)(Rk.j[kk].name, sk, Vk).some((kk => {
              let [Rk, tk] = kk;
              return Rk === -Fk && tk === -Bk
            })) && !(tk === Fk && ak === Bk)
          }(kk(Fk + ak, Bk, tk + wk), ak, wk, Xk, bk), dk = kk(Fk - Xk, Bk, tk - bk), sk = Lk(dk) === fk && Rk.j[dk].meta.rot === ak, Vk = 1 === ek.c[Lk(kk(Fk, Bk - 1, tk))] || -1 === ek.c[Lk(kk(Fk, Bk + 1, tk))];
          if (Vk || sk || function(kk, Fk, Bk) {
              if (Lk(kk) !== mk) return !1;
              const [tk, ak] = ek.d[Rk.j[kk].meta.rot - 1], [Xk, bk] = (0, ek.N)(Rk.j[kk].name, tk, ak);
              return Fk === Xk && Bk === bk
            }(dk, Xk, bk) || wk(-Xk, -bk)) return null;
          const Jk = wk(-bk, Xk),
            Ak = wk(bk, -Xk);
          if (Jk === Ak) return null;
          return Jk ? "turnLeft" : "turnRight"
        }(kk, Fk, Bk, tk, wk)))
      }
    }, new class {
      constructor() {
        this.reshapeOffsets = Nk, this.rootId = (0, Rk.m)(Sk.o)
      }
      handles(kk) {
        var Fk;
        return (null === (Fk = Rk.j[kk]) || void 0 === Fk ? void 0 : Fk.meta.rootId) === this.rootId
      }
      affects(kk) {
        return this.handles(kk)
      }
      shape(kk, Fk, Bk, tk, ak, Xk) {
        const bk = Hk(ak);
        return (0, Rk.m)((wk = bk.rot, null !== (dk = Xk ? this.reshapedHalf(kk, Fk, Bk, tk, bk) : this.placedHalf(kk, Fk, Bk, tk, bk.rot)) ? (0, Sk.c)(Sk.o, wk, dk) : 1 === wk ? Sk.o : `${Sk.o}|meta|rot${wk}`));
        var wk, dk
      }
      placedHalf(kk, Fk, Bk, Rk, tk) {
        const [ak, Xk] = Ek.c[tk];
        for (const [bk, wk] of [
            ["right", 1],
            ["left", -1]
          ]) {
          const dk = Fk + wk * ak,
            sk = Rk + wk * Xk,
            Vk = uk(kk, dk, Bk, sk);
          if (null !== Vk && Vk.rot === tk && (null === Vk.half || !Mk(kk, dk, Bk, sk, Vk))) return bk
        }
        return null
      }
      reshapedHalf(kk, Fk, Bk, Rk, tk) {
        if (null !== tk.half && Mk(kk, Fk, Bk, Rk, tk)) return tk.half;
        for (const ak of ["right", "left"]) {
          const [Xk, bk] = (0, Sk.k)(tk.rot, ak), wk = uk(kk, Fk + Xk, Bk, Rk + bk);
          if (null !== wk && wk.rot === tk.rot && wk.half === Sk.q[ak]) return ak
        }
        return null
      }
    }, new gk.b];

    function ck(kk, Fk, Bk, Rk, tk) {
      let ak = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      for (const Xk of Uk)
        if (Xk.handles(tk)) return Xk.shape(kk, Fk, Bk, Rk, tk, ak);
      return tk
    }

    function Gk(kk) {
      for (const Rk of Uk) {
        var Fk, Bk;
        if (Rk.handles(kk)) return null !== (Fk = null === (Bk = Rk.placedBy) || void 0 === Bk ? void 0 : Bk.call(Rk, kk)) && void 0 !== Fk ? Fk : null
      }
      return null
    }
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
  },
  37830: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => Rk,
      e: () => ak
    });
    const Rk = ["Chest", "Loot Chest", "Moonstone Chest"],
      tk = [{
        name: "Workbench",
        exactMatch: !0
      }, {
        name: "Furnace",
        exactMatch: !0
      }, {
        name: "Artisan Bench",
        exactMatch: !0
      }, {
        name: "Potion Table",
        exactMatch: !0
      }, {
        name: "Salvaging Table",
        exactMatch: !0
      }, {
        name: "Enchanting Table",
        exactMatch: !1
      }];

    function ak(kk) {
      return tk.find((Fk => Fk.exactMatch ? kk === Fk.name : kk.includes(Fk.name)))
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);