export const id = 241;
export const ids = [241];
export const modules = {
  38073: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => qk,
      c: () => Xk,
      g: () => lk,
      k: () => Tk,
      o: () => yk,
      s: () => ik
    });
    const Xk = 1.001,
      Tk = .501,
      ik = .025,
      yk = .75,
      lk = .08,
      ak = 4;

    function qk() {
      const kk = Tk,
        Fk = ik,
        Ik = kk - Fk / 2,
        Xk = (2 * kk - 2 * Fk) / (2 * ak - 1),
        yk = [];
      for (const Tk of [-Ik, Ik])
        for (const ik of [-Ik, Ik])
          for (let Ik = 0; Ik < ak; Ik++) {
            const lk = -kk + Fk + Xk * (2 * Ik + .5);
            yk.push([Xk, Fk, Fk, lk, Tk, ik]), yk.push([Fk, Xk, Fk, Tk, lk, ik]), yk.push([Fk, Fk, Xk, Tk, ik, lk])
          }
      for (const Tk of [-Ik, Ik])
        for (const kk of [-Ik, Ik])
          for (const Xk of [-Ik, Ik]) yk.push([Fk, Fk, Fk, Tk, kk, Xk]);
      return yk
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
  38399: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => uk,
      g: () => bk
    });
    var Xk = Ik(9183),
      Tk = Ik(9223);
    const ik = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0],
      [0, -1, 0]
    ];
    var yk = Ik(9241),
      lk = Ik(38209),
      ak = Ik(9237);
    const qk = {
      1: [0, -1],
      2: [-1, 0],
      3: [0, 1],
      4: [1, 0]
    };

    function Lk(kk) {
      let [Fk, Ik] = kk;
      return [-Ik, Fk]
    }

    function tk(kk, Fk) {
      return kk[0] === Fk[0] && kk[1] === Fk[1]
    }

    function Zk(kk, Fk) {
      return kk[0] * Fk[0] + kk[1] * Fk[1] === 0
    }
    const jk = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];
    var ek = Ik(9264);

    function wk(kk, Fk, Ik, Xk, Tk) {
      return Fk < ek.n || Fk >= ek.n + ek.r || Math.floor(kk / ek.w) === Math.floor(Xk / ek.w) && Math.floor(Ik / ek.w) === Math.floor(Tk / ek.w)
    }
    const Hk = "Splitter",
      Jk = "Sorting Gate",
      xk = new Set(ek.I),
      Pk = new Set([...ek.I, "Belt Loader", "Fast Loader", Jk]),
      Kk = new Set(ek.t),
      Qk = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 0, 1],
        [0, 0, -1],
        [0, 1, 0],
        [0, -1, 0]
      ];

    function sk(kk) {
      var Fk, Ik;
      return null !== (Fk = null === (Ik = Xk.g[kk]) || void 0 === Ik ? void 0 : Ik.meta.rootName) && void 0 !== Fk ? Fk : ""
    }

    function Vk(kk) {
      return sk(kk) === ek.e && (0, ek.O)(Xk.g[kk].name)
    }
    var zk = Ik(9230),
      Sk = Ik(9250);
    const vk = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function Ek(kk) {
      var Fk, Ik;
      const Tk = null === (Fk = Xk.g[kk]) || void 0 === Fk ? void 0 : Fk.meta;
      return (null === Tk || void 0 === Tk ? void 0 : Tk.rootName) !== Sk.l ? null : {
        rot: null !== (Ik = Tk.rot) && void 0 !== Ik ? Ik : 1,
        half: (0, Sk.e)(Tk.rootName, Tk.metaStr)
      }
    }

    function Ok(kk, Fk, Ik, Xk) {
      return Ek(kk(Fk, Ik, Xk))
    }

    function nk(kk, Fk, Ik, Xk, Tk) {
      let {
        rot: ik,
        half: yk
      } = Tk;
      const [lk, ak] = (0, Sk.j)(ik, yk), qk = Ok(kk, Fk + lk, Ik, Xk + ak);
      return null !== qk && qk.rot === ik && qk.half === Sk.p[yk]
    }
    var Gk = Ik(38405);
    const pk = [new class {
      constructor() {
        this.reshapeOffsets = jk
      }
      handles(kk) {
        var Fk;
        return "Stairs" === (null === (Fk = Xk.g[kk]) || void 0 === Fk ? void 0 : Fk.model)
      }
      affects(kk) {
        return this.handles(kk)
      }
      shape(kk, Fk, Ik, Tk, ik) {
        const yk = this.stairsOf(ik),
          lk = this.cornerAt(kk, Fk, Ik, Tk, yk),
          qk = yk.half === ak.d.top ? "top" : "bot";
        return (0, Xk.j)(`${Xk.g[ik].meta.rootName}|meta|rot${yk.rot}|${qk}${null===lk?"":`|${lk}`}`)
      }
      stairsOf(kk) {
        const {
          rot: Fk,
          halfblockPlacement: Ik
        } = Xk.g[kk].meta;
        return {
          rot: Fk,
          half: Ik
        }
      }
      stairsAt(kk, Fk, Ik, Xk) {
        const Tk = kk(Fk, Ik, Xk);
        return this.handles(Tk) ? this.stairsOf(Tk) : null
      }
      cornerAt(kk, Fk, Ik, Xk, Tk) {
        let {
          rot: ik,
          half: yk
        } = Tk;
        const lk = qk[ik],
          ak = Tk => {
            let [lk, ak] = Tk;
            const qk = this.stairsAt(kk, Fk + lk, Ik, Xk + ak);
            return null !== qk && qk.rot === ik && qk.half === yk
          },
          jk = this.stairsAt(kk, Fk + lk[0], Ik, Xk + lk[1]);
        if (null !== jk && jk.half === yk) {
          const kk = qk[jk.rot];
          if (Zk(lk, kk) && !ak([-kk[0], -kk[1]])) return tk(kk, Lk(lk)) ? "outerLeft" : "outerRight"
        }
        const ek = this.stairsAt(kk, Fk - lk[0], Ik, Xk - lk[1]);
        if (null !== ek && ek.half === yk) {
          const kk = qk[ek.rot];
          if (Zk(lk, kk) && !ak(kk)) return tk(kk, Lk(lk)) ? "innerLeft" : "innerRight"
        }
        return null
      }
    }, new class {
      constructor() {
        this.reshapeOffsets = ik, this.rootIds = new Set(Tk.h.map((kk => (0, Xk.j)(kk))))
      }
      handles(kk) {
        var Fk;
        const Ik = null === (Fk = Xk.g[kk]) || void 0 === Fk ? void 0 : Fk.meta;
        return void 0 !== Ik && this.rootIds.has(Ik.rootId)
      }
      affects(kk) {
        return this.handles(kk)
      }
      placedBy(kk) {
        return Xk.g[kk].meta.rootName === Tk.q ? null : Tk.q
      }
      shape(kk, Fk, Ik, ik, yk) {
        const {
          rootId: lk,
          rootName: ak,
          rot: qk
        } = Xk.g[yk].meta;
        let Lk = 0;
        return Tk.z[qk].forEach(((Tk, yk) => {
          var ak;
          let [tk, Zk, jk] = Tk;
          const ek = null === (ak = Xk.g[kk(Fk + tk, Ik + Zk, ik + jk)]) || void 0 === ak ? void 0 : ak.meta;
          (null === ek || void 0 === ek ? void 0 : ek.rootId) === lk && ek.rot === qk && (Lk |= 1 << yk)
        })), (0, Xk.j)((0, Tk.d)(ak, qk, Lk))
      }
    }, ...yk.c.map((kk => new lk.e(kk))), new class {
      constructor() {
        this.reshapeOffsets = Qk
      }
      handles(kk) {
        const Fk = sk(kk);
        return xk.has(Fk) || Fk === ek.e
      }
      affects(kk) {
        const Fk = sk(kk);
        return Pk.has(Fk) || Kk.has(Fk) || Fk === Hk || Fk === ek.e || void 0 !== ek.b[Fk]
      }
      shape(kk, Fk, Ik, Tk, ik, yk) {
        const {
          rootName: lk,
          rot: ak
        } = Xk.g[ik].meta;
        return lk === ek.e ? yk ? ik : function(kk, Fk, Ik, Tk, ik) {
          const [yk, lk] = ek.d[ik - 1];
          for (let ak = 1; ak <= ek.G; ak++) {
            const [qk, Lk] = [Fk - yk * ak, Tk - lk * ak], tk = kk(qk, Ik, Lk);
            if (sk(tk) === ek.e && Xk.g[tk].meta.rot === ik && wk(Fk, Ik, Tk, qk, Lk)) return (0, Xk.j)((0, ek.V)(ik, !Vk(tk)))
          }
          return (0, Xk.j)((0, ek.V)(ik, !1))
        }(kk, Fk, Ik, Tk, ak) : (0, Xk.j)((0, ek.K)(lk, ak, function(kk, Fk, Ik, Tk, ik) {
          const [yk, lk] = ek.d[ik - 1], ak = (ik, yk) => function(kk, Fk, Ik) {
            var Tk;
            const ik = null === (Tk = Xk.g[kk]) || void 0 === Tk ? void 0 : Tk.meta;
            if (!ik) return !1;
            const yk = ik.rootName,
              lk = Pk.has(yk) || Vk(kk);
            if (!lk && !Kk.has(yk) && yk !== Hk) return !1;
            const [ak, qk] = ek.d[ik.rot - 1];
            if (lk && ak === -Fk && qk === -Ik) return !0;
            if (Kk.has(yk)) return ak === Fk && qk === Ik;
            const Lk = Xk.g[kk].name;
            return (yk === Hk ? (0, ek.U)(Lk, ak, qk) : yk === Jk ? [(0, ek.L)(Lk, ak, qk)] : []).some((kk => {
              let [Xk, Tk] = kk;
              return Xk === -Fk && Tk === -Ik
            }))
          }(kk(Fk + ik, Ik, Tk + yk), ik, yk), qk = kk(Fk - yk, Ik, Tk - lk), Lk = sk(qk) === Hk && Xk.g[qk].meta.rot === ik, tk = 1 === ek.b[sk(kk(Fk, Ik - 1, Tk))] || -1 === ek.b[sk(kk(Fk, Ik + 1, Tk))];
          if (tk || Lk || ak(-yk, -lk)) return null;
          const Zk = ak(-lk, yk),
            jk = ak(lk, -yk);
          if (Zk === jk) return null;
          return Zk ? "turnLeft" : "turnRight"
        }(kk, Fk, Ik, Tk, ak)))
      }
    }, new class {
      constructor() {
        this.reshapeOffsets = vk, this.rootId = (0, Xk.j)(Sk.l)
      }
      handles(kk) {
        var Fk;
        return (null === (Fk = Xk.g[kk]) || void 0 === Fk ? void 0 : Fk.meta.rootId) === this.rootId
      }
      affects(kk) {
        return this.handles(kk)
      }
      shape(kk, Fk, Ik, Tk, ik, yk) {
        const lk = Ek(ik);
        return (0, Xk.j)((ak = lk.rot, null !== (qk = yk ? this.reshapedHalf(kk, Fk, Ik, Tk, lk) : this.placedHalf(kk, Fk, Ik, Tk, lk.rot)) ? (0, Sk.c)(Sk.l, ak, qk) : 1 === ak ? Sk.l : `${Sk.l}|meta|rot${ak}`));
        var ak, qk
      }
      placedHalf(kk, Fk, Ik, Xk, Tk) {
        const [ik, yk] = zk.c[Tk];
        for (const [lk, ak] of [
            ["right", 1],
            ["left", -1]
          ]) {
          const qk = Fk + ak * ik,
            Lk = Xk + ak * yk,
            tk = Ok(kk, qk, Ik, Lk);
          if (null !== tk && tk.rot === Tk && (null === tk.half || !nk(kk, qk, Ik, Lk, tk))) return lk
        }
        return null
      }
      reshapedHalf(kk, Fk, Ik, Xk, Tk) {
        if (null !== Tk.half && nk(kk, Fk, Ik, Xk, Tk)) return Tk.half;
        for (const ik of ["right", "left"]) {
          const [yk, lk] = (0, Sk.j)(Tk.rot, ik), ak = Ok(kk, Fk + yk, Ik, Xk + lk);
          if (null !== ak && ak.rot === Tk.rot && ak.half === Sk.p[ik]) return ik
        }
        return null
      }
    }, new Gk.c];

    function uk(kk, Fk, Ik, Xk, Tk) {
      let ik = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      for (const yk of pk)
        if (yk.handles(Tk)) return yk.shape(kk, Fk, Ik, Xk, Tk, ik);
      return Tk
    }

    function bk(kk) {
      for (const Xk of pk) {
        var Fk, Ik;
        if (Xk.handles(kk)) return null !== (Fk = null === (Ik = Xk.placedBy) || void 0 === Ik ? void 0 : Ik.call(Xk, kk)) && void 0 !== Fk ? Fk : null
      }
      return null
    }
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
  },
  38169: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => Xk,
      f: () => ik
    });
    const Xk = ["Chest", "Loot Chest", "Moonstone Chest"],
      Tk = [{
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

    function ik(kk) {
      return Tk.find((Fk => Fk.exactMatch ? kk === Fk.name : kk.includes(Fk.name)))
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);