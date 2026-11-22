export const id = 239;
export const ids = [239];
export const modules = {
  37649: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => mk,
      e: () => Dk,
      h: () => rk,
      k: () => fk,
      o: () => bk,
      r: () => Sk
    });
    const Dk = 1.001,
      fk = .501,
      Sk = .025,
      bk = .75,
      rk = .08,
      Pk = 4;

    function mk() {
      const kk = fk,
        ek = Sk,
        ik = kk - ek / 2,
        Dk = (2 * kk - 2 * ek) / (2 * Pk - 1),
        bk = [];
      for (const fk of [-ik, ik])
        for (const Sk of [-ik, ik])
          for (let ik = 0; ik < Pk; ik++) {
            const rk = -kk + ek + Dk * (2 * ik + .5);
            bk.push([Dk, ek, ek, rk, fk, Sk]), bk.push([ek, Dk, ek, fk, rk, Sk]), bk.push([ek, ek, Dk, fk, Sk, rk])
          }
      for (const fk of [-ik, ik])
        for (const kk of [-ik, ik])
          for (const Dk of [-ik, ik]) bk.push([ek, ek, ek, fk, kk, Dk]);
      return bk
    }
  },
  38017: (kk, ek, ik) => {
    ik.d(ek, {
      B: () => Hk,
      E: () => lk,
      G: () => fk,
      c: () => Mk,
      e: () => Pk,
      h: () => yk,
      j: () => mk,
      k: () => rk,
      m: () => bk,
      n: () => Sk,
      o: () => Ak,
      p: () => nk,
      q: () => Ck,
      r: () => jk,
      t: () => Lk,
      v: () => Yk,
      x: () => xk
    });
    var Dk = ik(9097);

    function fk(kk) {
      return Math.floor(kk).toLocaleString("en-US")
    }
    const Sk = 2e3,
      bk = .005,
      rk = .001,
      Pk = 2,
      mk = "Fluid Tank",
      Mk = "Coolant Mixer",
      Kk = 144;

    function xk(kk) {
      const ek = kk.split("|")[0];
      return (0, Dk.m)(ek) ? ek === Dk.e ? "cryo" : "water" : null
    }
    const nk = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ],
      Uk = 63;

    function Hk(kk) {
      let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const ik = ek ? function(kk, ek, ik) {
        const Dk = nk.findIndex((Dk => {
          let [fk, Sk, bk] = Dk;
          return fk === kk && Sk === ek && bk === ik
        }));
        return Dk < 0 ? 0 : 1 << Dk
      }(ek[0], ek[1], ek[2]) : 0;
      return "maker" === kk ? {
        kind: kk,
        faces: ik
      } : "user" === kk ? {
        kind: kk,
        faces: Uk & ~ik
      } : {
        kind: kk,
        faces: Uk
      }
    }

    function wk(kk) {
      return "pipe" === kk || "tank" === kk || "maker" === kk
    }

    function lk(kk, ek, ik) {
      return 0 !== (kk.faces & 1 << ik) && 0 !== (ek.faces & 1 << (1 ^ ik)) && (wk(kk.kind) || wk(ek.kind))
    }
    const pk = (kk, ek, ik, Dk) => ({
        input: kk,
        inputAmount: Dk,
        output: ek,
        outputAmount: ik
      }),
      yk = {
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
          recipes: [pk("Uranium Grit", "Uranium Pellet", 1, 12), pk("Spent Pellet", "Plutonium Pellet", 1, 4)],
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
          recipes: [pk("Biomass", "", 0, 1)],
          powerPerOp: 720,
          waterPerOp: 144,
          cryoMade: Kk,
          couplable: !0,
          couplerSlot: 1
        }
      };

    function Yk(kk, ek) {
      return 1e3 * (null !== ek && void 0 !== ek ? ek : 0) / kk.opMs
    }

    function Lk(kk) {
      let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const ik = Yk(yk["Coolant Mixer"], Kk) * ek;
      return kk <= 0 ? 0 : Math.ceil(kk / ik - 1e-9)
    }
    const Ck = "baf2Water",
      Ak = "baf2waterclose",
      jk = "baf2wateropen"
  },
  38003: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => zk,
      h: () => Qk
    });
    var Dk = ik(9020),
      fk = ik(9057);
    const Sk = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0],
      [0, -1, 0]
    ];
    var bk = ik(9069),
      rk = ik(37809),
      Pk = ik(9063);
    const mk = {
      1: [0, -1],
      2: [-1, 0],
      3: [0, 1],
      4: [1, 0]
    };

    function Mk(kk) {
      let [ek, ik] = kk;
      return [-ik, ek]
    }

    function Kk(kk, ek) {
      return kk[0] === ek[0] && kk[1] === ek[1]
    }

    function xk(kk, ek) {
      return kk[0] * ek[0] + kk[1] * ek[1] === 0
    }
    const nk = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];
    var Uk = ik(9092);

    function Hk(kk, ek, ik, Dk, fk) {
      return ek < Uk.n || ek >= Uk.n + Uk.o || Math.floor(kk / Uk.v) === Math.floor(Dk / Uk.v) && Math.floor(ik / Uk.v) === Math.floor(fk / Uk.v)
    }
    const wk = "Splitter",
      lk = "Sorting Gate",
      pk = new Set(Uk.D),
      yk = new Set([...Uk.D, "Belt Loader", "Fast Loader", lk]),
      Yk = new Set(Uk.s),
      Lk = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 0, 1],
        [0, 0, -1],
        [0, 1, 0],
        [0, -1, 0]
      ];

    function Ck(kk) {
      var ek, ik;
      return null !== (ek = null === (ik = Dk.g[kk]) || void 0 === ik ? void 0 : ik.meta.rootName) && void 0 !== ek ? ek : ""
    }

    function Ak(kk) {
      return Ck(kk) === Uk.f && (0, Uk.N)(Dk.g[kk].name)
    }
    var jk = ik(9059),
      sk = ik(9081);
    const dk = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function Vk(kk) {
      var ek, ik;
      const fk = null === (ek = Dk.g[kk]) || void 0 === ek ? void 0 : ek.meta;
      return (null === fk || void 0 === fk ? void 0 : fk.rootName) !== sk.p ? null : {
        rot: null !== (ik = fk.rot) && void 0 !== ik ? ik : 1,
        half: (0, sk.f)(fk.rootName, fk.metaStr)
      }
    }

    function Fk(kk, ek, ik, Dk) {
      return Vk(kk(ek, ik, Dk))
    }

    function uk(kk, ek, ik, Dk, fk) {
      let {
        rot: Sk,
        half: bk
      } = fk;
      const [rk, Pk] = (0, sk.m)(Sk, bk), mk = Fk(kk, ek + rk, ik, Dk + Pk);
      return null !== mk && mk.rot === Sk && mk.half === sk.r[bk]
    }
    var qk = ik(38010);
    const Ik = [new class {
      constructor() {
        this.reshapeOffsets = nk
      }
      handles(kk) {
        var ek;
        return "Stairs" === (null === (ek = Dk.g[kk]) || void 0 === ek ? void 0 : ek.model)
      }
      affects(kk) {
        return this.handles(kk)
      }
      shape(kk, ek, ik, fk, Sk) {
        const bk = this.stairsOf(Sk),
          rk = this.cornerAt(kk, ek, ik, fk, bk),
          mk = bk.half === Pk.b.top ? "top" : "bot";
        return (0, Dk.h)(`${Dk.g[Sk].meta.rootName}|meta|rot${bk.rot}|${mk}${null===rk?"":`|${rk}`}`)
      }
      stairsOf(kk) {
        const {
          rot: ek,
          halfblockPlacement: ik
        } = Dk.g[kk].meta;
        return {
          rot: ek,
          half: ik
        }
      }
      stairsAt(kk, ek, ik, Dk) {
        const fk = kk(ek, ik, Dk);
        return this.handles(fk) ? this.stairsOf(fk) : null
      }
      cornerAt(kk, ek, ik, Dk, fk) {
        let {
          rot: Sk,
          half: bk
        } = fk;
        const rk = mk[Sk],
          Pk = fk => {
            let [rk, Pk] = fk;
            const mk = this.stairsAt(kk, ek + rk, ik, Dk + Pk);
            return null !== mk && mk.rot === Sk && mk.half === bk
          },
          nk = this.stairsAt(kk, ek + rk[0], ik, Dk + rk[1]);
        if (null !== nk && nk.half === bk) {
          const kk = mk[nk.rot];
          if (xk(rk, kk) && !Pk([-kk[0], -kk[1]])) return Kk(kk, Mk(rk)) ? "outerLeft" : "outerRight"
        }
        const Uk = this.stairsAt(kk, ek - rk[0], ik, Dk - rk[1]);
        if (null !== Uk && Uk.half === bk) {
          const kk = mk[Uk.rot];
          if (xk(rk, kk) && !Pk(kk)) return Kk(kk, Mk(rk)) ? "innerLeft" : "innerRight"
        }
        return null
      }
    }, new class {
      constructor() {
        this.reshapeOffsets = Sk, this.rootIds = new Set(fk.g.map((kk => (0, Dk.h)(kk))))
      }
      handles(kk) {
        var ek;
        const ik = null === (ek = Dk.g[kk]) || void 0 === ek ? void 0 : ek.meta;
        return void 0 !== ik && this.rootIds.has(ik.rootId)
      }
      affects(kk) {
        return this.handles(kk)
      }
      placedBy(kk) {
        return Dk.g[kk].meta.rootName === fk.k ? null : fk.k
      }
      shape(kk, ek, ik, Sk, bk) {
        const {
          rootId: rk,
          rootName: Pk,
          rot: mk
        } = Dk.g[bk].meta;
        let Mk = 0;
        return fk.q[mk].forEach(((fk, bk) => {
          var Pk;
          let [Kk, xk, nk] = fk;
          const Uk = null === (Pk = Dk.g[kk(ek + Kk, ik + xk, Sk + nk)]) || void 0 === Pk ? void 0 : Pk.meta;
          (null === Uk || void 0 === Uk ? void 0 : Uk.rootId) === rk && Uk.rot === mk && (Mk |= 1 << bk)
        })), (0, Dk.h)((0, fk.e)(Pk, mk, Mk))
      }
    }, ...bk.d.map((kk => new rk.c(kk))), new class {
      constructor() {
        this.reshapeOffsets = Lk
      }
      handles(kk) {
        const ek = Ck(kk);
        return pk.has(ek) || ek === Uk.f
      }
      affects(kk) {
        const ek = Ck(kk);
        return yk.has(ek) || Yk.has(ek) || ek === wk || ek === Uk.f || void 0 !== Uk.c[ek]
      }
      shape(kk, ek, ik, fk, Sk, bk) {
        const {
          rootName: rk,
          rot: Pk
        } = Dk.g[Sk].meta;
        return rk === Uk.f ? bk ? Sk : function(kk, ek, ik, fk, Sk) {
          const [bk, rk] = Uk.e[Sk - 1];
          for (let Pk = 1; Pk <= Uk.C; Pk++) {
            const [mk, Mk] = [ek - bk * Pk, fk - rk * Pk], Kk = kk(mk, ik, Mk);
            if (Ck(Kk) === Uk.f && Dk.g[Kk].meta.rot === Sk && Hk(ek, ik, fk, mk, Mk)) return (0, Dk.h)((0, Uk.V)(Sk, !Ak(Kk)))
          }
          return (0, Dk.h)((0, Uk.V)(Sk, !1))
        }(kk, ek, ik, fk, Pk) : (0, Dk.h)((0, Uk.G)(rk, Pk, function(kk, ek, ik, fk, Sk) {
          const [bk, rk] = Uk.e[Sk - 1], Pk = (Sk, Pk) => function(kk, ek, ik, fk, Sk) {
            var bk;
            const rk = null === (bk = Dk.g[kk]) || void 0 === bk ? void 0 : bk.meta;
            if (!rk) return !1;
            const Pk = rk.rootName,
              mk = yk.has(Pk) || Ak(kk);
            if (!mk && !Yk.has(Pk) && Pk !== wk) return !1;
            const [Mk, Kk] = Uk.e[rk.rot - 1];
            return mk ? Mk === -ek && Kk === -ik : Yk.has(Pk) ? Mk === ek && Kk === ik : (0, Uk.R)(Dk.g[kk].name, Mk, Kk).some((kk => {
              let [Dk, fk] = kk;
              return Dk === -ek && fk === -ik
            })) && !(fk === ek && Sk === ik)
          }(kk(ek + Sk, ik, fk + Pk), Sk, Pk, bk, rk), mk = kk(ek - bk, ik, fk - rk), Mk = Ck(mk) === wk && Dk.g[mk].meta.rot === Sk, Kk = 1 === Uk.c[Ck(kk(ek, ik - 1, fk))] || -1 === Uk.c[Ck(kk(ek, ik + 1, fk))];
          if (Kk || Mk || function(kk, ek, ik) {
              if (Ck(kk) !== lk) return !1;
              const [fk, Sk] = Uk.e[Dk.g[kk].meta.rot - 1], [bk, rk] = (0, Uk.I)(Dk.g[kk].name, fk, Sk);
              return ek === bk && ik === rk
            }(mk, bk, rk) || Pk(-bk, -rk)) return null;
          const xk = Pk(-rk, bk),
            nk = Pk(rk, -bk);
          if (xk === nk) return null;
          return xk ? "turnLeft" : "turnRight"
        }(kk, ek, ik, fk, Pk)))
      }
    }, new class {
      constructor() {
        this.reshapeOffsets = dk, this.rootId = (0, Dk.h)(sk.p)
      }
      handles(kk) {
        var ek;
        return (null === (ek = Dk.g[kk]) || void 0 === ek ? void 0 : ek.meta.rootId) === this.rootId
      }
      affects(kk) {
        return this.handles(kk)
      }
      shape(kk, ek, ik, fk, Sk, bk) {
        const rk = Vk(Sk);
        return (0, Dk.h)((Pk = rk.rot, null !== (mk = bk ? this.reshapedHalf(kk, ek, ik, fk, rk) : this.placedHalf(kk, ek, ik, fk, rk.rot)) ? (0, sk.c)(sk.p, Pk, mk) : 1 === Pk ? sk.p : `${sk.p}|meta|rot${Pk}`));
        var Pk, mk
      }
      placedHalf(kk, ek, ik, Dk, fk) {
        const [Sk, bk] = jk.d[fk];
        for (const [rk, Pk] of [
            ["right", 1],
            ["left", -1]
          ]) {
          const mk = ek + Pk * Sk,
            Mk = Dk + Pk * bk,
            Kk = Fk(kk, mk, ik, Mk);
          if (null !== Kk && Kk.rot === fk && (null === Kk.half || !uk(kk, mk, ik, Mk, Kk))) return rk
        }
        return null
      }
      reshapedHalf(kk, ek, ik, Dk, fk) {
        if (null !== fk.half && uk(kk, ek, ik, Dk, fk)) return fk.half;
        for (const Sk of ["right", "left"]) {
          const [bk, rk] = (0, sk.m)(fk.rot, Sk), Pk = Fk(kk, ek + bk, ik, Dk + rk);
          if (null !== Pk && Pk.rot === fk.rot && Pk.half === sk.r[Sk]) return Sk
        }
        return null
      }
    }, new qk.e];

    function zk(kk, ek, ik, Dk, fk) {
      let Sk = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      for (const bk of Ik)
        if (bk.handles(fk)) return bk.shape(kk, ek, ik, Dk, fk, Sk);
      return fk
    }

    function Qk(kk) {
      for (const Dk of Ik) {
        var ek, ik;
        if (Dk.handles(kk)) return null !== (ek = null === (ik = Dk.placedBy) || void 0 === ik ? void 0 : ik.call(Dk, kk)) && void 0 !== ek ? ek : null
      }
      return null
    }
  },
  38010: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => sk,
      f: () => Yk,
      i: () => yk
    });
    var Dk = ik(9020),
      fk = ik(9044),
      Sk = ik(9097),
      bk = ik(38017),
      rk = ik(9092);
    const Pk = (0, bk.B)("pipe"),
      mk = (0, bk.B)("tank"),
      Mk = (0, bk.B)("port"),
      Kk = "Reactor Port";

    function xk(kk, ek, ik) {
      const Dk = new Set([Sk.f, Sk.e, Kk, ...ek, ...ik, ...kk ? [bk.j] : []]);
      return {
        makers: new Set(ek),
        roots: Dk
      }
    }
    const nk = {
        water: xk(!0, ["Condenser"], ["Centrifuge", "Synthesizer", bk.c]),
        cryo: xk(!1, [bk.c], [])
      },
      Uk = new Set([...nk.water.roots, ...nk.cryo.roots]),
      Hk = {
        nx: [-1, 0, 0],
        ny: [0, -1, 0],
        nz: [0, 0, -1],
        px: [1, 0, 0],
        py: [0, 1, 0],
        pz: [0, 0, 1]
      },
      wk = fk.e.map((kk => Hk[kk])),
      lk = wk.map((kk => {
        let [ek, ik, Dk] = kk;
        return bk.p.findIndex((kk => {
          let [fk, Sk, bk] = kk;
          return fk === ek && Sk === ik && bk === Dk
        }))
      }));

    function pk(kk) {
      let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
      const ik = Dk.g[kk],
        fk = null === ik || void 0 === ik ? void 0 : ik.meta.rootName,
        xk = nk[ek];
      if (!fk || !xk.roots.has(fk)) return null;
      if ((0, Sk.m)(fk)) return (0, bk.x)(ik.name) === ek ? Pk : null;
      if (fk === bk.j) return mk;
      if (fk === Kk) return ik.name.endsWith("|Water") ? Mk : null;
      const [Uk, Hk] = rk.e[(ik.meta.rot || 1) - 1];
      return (0, bk.B)(xk.makers.has(fk) ? "maker" : "user", [-Uk, 0, -Hk])
    }

    function yk(kk, ek, ik, fk) {
      let Sk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
      const {
        makers: rk
      } = nk[Sk];
      return wk.some(((mk, Mk) => {
        var Kk, xk;
        let [nk, Uk, Hk] = mk;
        const wk = kk(ek + nk, ik + Uk, fk + Hk),
          yk = pk(wk, Sk);
        return null !== yk && rk.has(null !== (Kk = null === (xk = Dk.g[wk]) || void 0 === xk ? void 0 : xk.meta.rootName) && void 0 !== Kk ? Kk : "") && !(0, bk.E)(Pk, yk, lk[Mk])
      }))
    }

    function Yk(kk) {
      const ek = Dk.g[kk];
      return ek ? (0, bk.x)(ek.name) : null
    }
    let Lk = null;

    function Ck(kk) {
      if (!Lk) {
        Lk = new Map;
        for (const kk of ["water", "cryo"])
          for (let ek = 0; ek < 64; ek++)
            for (const ik of [!1, !0]) Lk.set((0, Sk.o)(kk, ek, ik), {
              qn: kk,
              mask: ek,
              full: ik
            })
      }
      return Lk.get(kk)
    }
    const Ak = new Map(Array.from({
      length: Sk.i + 1
    }, ((kk, ek) => [(0, Sk.p)(ek), ek])));

    function jk(kk, ek, ik, fk, Sk, bk) {
      return wk.some(((rk, Pk) => {
        var mk, Mk, Kk;
        let [xk, nk, Uk] = rk;
        if (0 === (bk >> Pk & 1)) return !1;
        const Hk = null !== (mk = null === (Mk = Dk.g[kk(ek + xk, ik + nk, fk + Uk)]) || void 0 === Mk ? void 0 : Mk.name) && void 0 !== mk ? mk : "",
          wk = Ck(Hk);
        return wk ? wk.qn === Sk && wk.full : (null !== (Kk = function(kk) {
          var ek;
          return null !== (ek = Ak.get(kk)) && void 0 !== ek ? ek : null
        }(Hk)) && void 0 !== Kk ? Kk : 0) > 0
      }))
    }
    class sk {
      constructor() {
        this.reshapeOffsets = wk
      }
      handles(kk) {
        return null !== Yk(kk)
      }
      affects(kk) {
        var ek, ik;
        return Uk.has(null !== (ek = null === (ik = Dk.g[kk]) || void 0 === ik ? void 0 : ik.meta.rootName) && void 0 !== ek ? ek : "")
      }
      placedBy(kk) {
        var ek;
        return (null === (ek = Dk.g[kk]) || void 0 === ek ? void 0 : ek.meta.rootName) === Sk.e ? Sk.f : null
      }
      shape(kk, ek, ik, fk, rk, mk) {
        var Mk, Kk, xk;
        const nk = null !== (Mk = null === (Kk = Dk.g[rk]) || void 0 === Kk ? void 0 : Kk.name) && void 0 !== Mk ? Mk : "",
          Uk = mk || nk !== Sk.f ? null !== (xk = (0, bk.x)(nk)) && void 0 !== xk ? xk : "water" : function(kk, ek, ik, Dk) {
            return wk.some(((fk, Sk) => {
              let [rk, mk, Mk] = fk;
              const Kk = pk(kk(ek + rk, ik + mk, Dk + Mk), "cryo");
              return null !== Kk && "port" !== Kk.kind && (0, bk.E)(Pk, Kk, lk[Sk])
            })) ? "cryo" : "water"
          }(kk, ek, ik, fk),
          Hk = function(kk, ek, ik, Dk) {
            let fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water",
              Sk = 0;
            return wk.forEach(((rk, mk) => {
              let [Mk, Kk, xk] = rk;
              const nk = pk(kk(ek + Mk, ik + Kk, Dk + xk), fk);
              nk && (0, bk.E)(Pk, nk, lk[mk]) && (Sk |= 1 << mk)
            })), Sk
          }(kk, ek, ik, fk, Uk),
          yk = mk ? function(kk) {
            var ek;
            return !0 === (null === (ek = Ck(kk)) || void 0 === ek ? void 0 : ek.full)
          }(nk) : jk(kk, ek, ik, fk, Uk, Hk);
        return (0, Dk.h)((0, Sk.o)(Uk, Hk, yk))
      }
    }
  },
  37770: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Dk,
      f: () => Sk
    });
    const Dk = ["Chest", "Loot Chest", "Moonstone Chest"],
      fk = [{
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

    function Sk(kk) {
      return fk.find((ek => ek.exactMatch ? kk === ek.name : kk.includes(ek.name)))
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);