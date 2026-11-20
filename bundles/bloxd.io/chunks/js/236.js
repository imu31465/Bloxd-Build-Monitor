export const id = 236;
export const ids = [236];
export const modules = {
  37599: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => Nv,
      f: () => hv,
      h: () => pv,
      k: () => Sv,
      l: () => gv,
      n: () => ev
    });
    const hv = 1.001,
      Sv = .501,
      ev = .025,
      gv = .75,
      pv = .08,
      dv = 4;

    function Nv() {
      const vv = Sv,
        zv = ev,
        Pv = vv - zv / 2,
        hv = (2 * vv - 2 * zv) / (2 * dv - 1),
        gv = [];
      for (const Sv of [-Pv, Pv])
        for (const ev of [-Pv, Pv])
          for (let Pv = 0; Pv < dv; Pv++) {
            const pv = -vv + zv + hv * (2 * Pv + .5);
            gv.push([hv, zv, zv, pv, Sv, ev]), gv.push([zv, hv, zv, Sv, pv, ev]), gv.push([zv, zv, hv, Sv, ev, pv])
          }
      for (const Sv of [-Pv, Pv])
        for (const vv of [-Pv, Pv])
          for (const hv of [-Pv, Pv]) gv.push([zv, zv, zv, Sv, vv, hv]);
      return gv
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
  37941: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => xv,
      e: () => tv
    });
    var hv = Pv(9101),
      Sv = Pv(9136);
    const ev = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0],
      [0, -1, 0]
    ];
    var gv = Pv(9153),
      pv = Pv(37757),
      dv = Pv(9144);
    const Nv = {
      1: [0, -1],
      2: [-1, 0],
      3: [0, 1],
      4: [1, 0]
    };

    function lv(vv) {
      let [zv, Pv] = vv;
      return [-Pv, zv]
    }

    function Tv(vv, zv) {
      return vv[0] === zv[0] && vv[1] === zv[1]
    }

    function Wv(vv, zv) {
      return vv[0] * zv[0] + vv[1] * zv[1] === 0
    }
    const wv = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];
    var av = Pv(9176);

    function sv(vv, zv, Pv, hv, Sv) {
      return zv < av.l || zv >= av.l + av.m || Math.floor(vv / av.s) === Math.floor(hv / av.s) && Math.floor(Pv / av.s) === Math.floor(Sv / av.s)
    }
    const Cv = "Splitter",
      iv = "Sorting Gate",
      cv = new Set(av.G),
      Gv = new Set([...av.G, "Belt Loader", "Fast Loader", iv]),
      mv = new Set(av.p),
      jv = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 0, 1],
        [0, 0, -1],
        [0, 1, 0],
        [0, -1, 0]
      ];

    function fv(vv) {
      var zv, Pv;
      return null !== (zv = null === (Pv = hv.g[vv]) || void 0 === Pv ? void 0 : Pv.meta.rootName) && void 0 !== zv ? zv : ""
    }

    function Fv(vv) {
      return fv(vv) === av.i && (0, av.T)(hv.g[vv].name)
    }
    var Yv = Pv(9141),
      nv = Pv(9163);
    const Ov = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function Dv(vv) {
      var zv, Pv;
      const Sv = null === (zv = hv.g[vv]) || void 0 === zv ? void 0 : zv.meta;
      return (null === Sv || void 0 === Sv ? void 0 : Sv.rootName) !== nv.m ? null : {
        rot: null !== (Pv = Sv.rot) && void 0 !== Pv ? Pv : 1,
        half: (0, nv.e)(Sv.rootName, Sv.metaStr)
      }
    }

    function Kv(vv, zv, Pv, hv) {
      return Dv(vv(zv, Pv, hv))
    }

    function Vv(vv, zv, Pv, hv, Sv) {
      let {
        rot: ev,
        half: gv
      } = Sv;
      const [pv, dv] = (0, nv.k)(ev, gv), Nv = Kv(vv, zv + pv, Pv, hv + dv);
      return null !== Nv && Nv.rot === ev && Nv.half === nv.n[gv]
    }
    var Uv = Pv(37943);
    const Rv = [new class {
      constructor() {
        this.reshapeOffsets = wv
      }
      handles(vv) {
        var zv;
        return "Stairs" === (null === (zv = hv.g[vv]) || void 0 === zv ? void 0 : zv.model)
      }
      affects(vv) {
        return this.handles(vv)
      }
      shape(vv, zv, Pv, Sv, ev) {
        const gv = this.stairsOf(ev),
          pv = this.cornerAt(vv, zv, Pv, Sv, gv),
          Nv = gv.half === dv.e.top ? "top" : "bot";
        return (0, hv.i)(`${hv.g[ev].meta.rootName}|meta|rot${gv.rot}|${Nv}${null===pv?"":`|${pv}`}`)
      }
      stairsOf(vv) {
        const {
          rot: zv,
          halfblockPlacement: Pv
        } = hv.g[vv].meta;
        return {
          rot: zv,
          half: Pv
        }
      }
      stairsAt(vv, zv, Pv, hv) {
        const Sv = vv(zv, Pv, hv);
        return this.handles(Sv) ? this.stairsOf(Sv) : null
      }
      cornerAt(vv, zv, Pv, hv, Sv) {
        let {
          rot: ev,
          half: gv
        } = Sv;
        const pv = Nv[ev],
          dv = Sv => {
            let [pv, dv] = Sv;
            const Nv = this.stairsAt(vv, zv + pv, Pv, hv + dv);
            return null !== Nv && Nv.rot === ev && Nv.half === gv
          },
          wv = this.stairsAt(vv, zv + pv[0], Pv, hv + pv[1]);
        if (null !== wv && wv.half === gv) {
          const vv = Nv[wv.rot];
          if (Wv(pv, vv) && !dv([-vv[0], -vv[1]])) return Tv(vv, lv(pv)) ? "outerLeft" : "outerRight"
        }
        const av = this.stairsAt(vv, zv - pv[0], Pv, hv - pv[1]);
        if (null !== av && av.half === gv) {
          const vv = Nv[av.rot];
          if (Wv(pv, vv) && !dv(vv)) return Tv(vv, lv(pv)) ? "innerLeft" : "innerRight"
        }
        return null
      }
    }, new class {
      constructor() {
        this.reshapeOffsets = ev, this.rootIds = new Set(Sv.g.map((vv => (0, hv.i)(vv))))
      }
      handles(vv) {
        var zv;
        const Pv = null === (zv = hv.g[vv]) || void 0 === zv ? void 0 : zv.meta;
        return void 0 !== Pv && this.rootIds.has(Pv.rootId)
      }
      affects(vv) {
        return this.handles(vv)
      }
      placedBy(vv) {
        return hv.g[vv].meta.rootName === Sv.k ? null : Sv.k
      }
      shape(vv, zv, Pv, ev, gv) {
        const {
          rootId: pv,
          rootName: dv,
          rot: Nv
        } = hv.g[gv].meta;
        let lv = 0;
        return Sv.u[Nv].forEach(((Sv, gv) => {
          var dv;
          let [Tv, Wv, wv] = Sv;
          const av = null === (dv = hv.g[vv(zv + Tv, Pv + Wv, ev + wv)]) || void 0 === dv ? void 0 : dv.meta;
          (null === av || void 0 === av ? void 0 : av.rootId) === pv && av.rot === Nv && (lv |= 1 << gv)
        })), (0, hv.i)((0, Sv.e)(dv, Nv, lv))
      }
    }, ...gv.e.map((vv => new pv.b(vv))), new class {
      constructor() {
        this.reshapeOffsets = jv
      }
      handles(vv) {
        const zv = fv(vv);
        return cv.has(zv) || zv === av.i
      }
      affects(vv) {
        const zv = fv(vv);
        return Gv.has(zv) || mv.has(zv) || zv === Cv || zv === av.i || void 0 !== av.e[zv]
      }
      shape(vv, zv, Pv, Sv, ev, gv) {
        const {
          rootName: pv,
          rot: dv
        } = hv.g[ev].meta;
        return pv === av.i ? gv ? ev : function(vv, zv, Pv, Sv, ev) {
          const [gv, pv] = av.h[ev - 1];
          for (let dv = 1; dv <= av.F; dv++) {
            const [Nv, lv] = [zv - gv * dv, Sv - pv * dv], Tv = vv(Nv, Pv, lv);
            if (fv(Tv) === av.i && hv.g[Tv].meta.rot === ev && sv(zv, Pv, Sv, Nv, lv)) return (0, hv.i)((0, av.Z)(ev, !Fv(Tv)))
          }
          return (0, hv.i)((0, av.Z)(ev, !1))
        }(vv, zv, Pv, Sv, dv) : (0, hv.i)((0, av.J)(pv, dv, function(vv, zv, Pv, Sv, ev) {
          const [gv, pv] = av.h[ev - 1], dv = (ev, dv) => function(vv, zv, Pv, Sv, ev) {
            var gv;
            const pv = null === (gv = hv.g[vv]) || void 0 === gv ? void 0 : gv.meta;
            if (!pv) return !1;
            const dv = pv.rootName,
              Nv = Gv.has(dv) || Fv(vv);
            if (!Nv && !mv.has(dv) && dv !== Cv) return !1;
            const [lv, Tv] = av.h[pv.rot - 1];
            return Nv ? lv === -zv && Tv === -Pv : mv.has(dv) ? lv === zv && Tv === Pv : (0, av.Y)(hv.g[vv].name, lv, Tv).some((vv => {
              let [hv, Sv] = vv;
              return hv === -zv && Sv === -Pv
            })) && !(Sv === zv && ev === Pv)
          }(vv(zv + ev, Pv, Sv + dv), ev, dv, gv, pv), Nv = vv(zv - gv, Pv, Sv - pv), lv = fv(Nv) === Cv && hv.g[Nv].meta.rot === ev, Tv = 1 === av.e[fv(vv(zv, Pv - 1, Sv))] || -1 === av.e[fv(vv(zv, Pv + 1, Sv))];
          if (Tv || lv || function(vv, zv, Pv) {
              if (fv(vv) !== iv) return !1;
              const [Sv, ev] = av.h[hv.g[vv].meta.rot - 1], [gv, pv] = (0, av.M)(hv.g[vv].name, Sv, ev);
              return zv === gv && Pv === pv
            }(Nv, gv, pv) || dv(-gv, -pv)) return null;
          const Wv = dv(-pv, gv),
            wv = dv(pv, -gv);
          if (Wv === wv) return null;
          return Wv ? "turnLeft" : "turnRight"
        }(vv, zv, Pv, Sv, dv)))
      }
    }, new class {
      constructor() {
        this.reshapeOffsets = Ov, this.rootId = (0, hv.i)(nv.m)
      }
      handles(vv) {
        var zv;
        return (null === (zv = hv.g[vv]) || void 0 === zv ? void 0 : zv.meta.rootId) === this.rootId
      }
      affects(vv) {
        return this.handles(vv)
      }
      shape(vv, zv, Pv, Sv, ev, gv) {
        const pv = Dv(ev);
        return (0, hv.i)((dv = pv.rot, null !== (Nv = gv ? this.reshapedHalf(vv, zv, Pv, Sv, pv) : this.placedHalf(vv, zv, Pv, Sv, pv.rot)) ? (0, nv.c)(nv.m, dv, Nv) : 1 === dv ? nv.m : `${nv.m}|meta|rot${dv}`));
        var dv, Nv
      }
      placedHalf(vv, zv, Pv, hv, Sv) {
        const [ev, gv] = Yv.d[Sv];
        for (const [pv, dv] of [
            ["right", 1],
            ["left", -1]
          ]) {
          const Nv = zv + dv * ev,
            lv = hv + dv * gv,
            Tv = Kv(vv, Nv, Pv, lv);
          if (null !== Tv && Tv.rot === Sv && (null === Tv.half || !Vv(vv, Nv, Pv, lv, Tv))) return pv
        }
        return null
      }
      reshapedHalf(vv, zv, Pv, hv, Sv) {
        if (null !== Sv.half && Vv(vv, zv, Pv, hv, Sv)) return Sv.half;
        for (const ev of ["right", "left"]) {
          const [gv, pv] = (0, nv.k)(Sv.rot, ev), dv = Kv(vv, zv + gv, Pv, hv + pv);
          if (null !== dv && dv.rot === Sv.rot && dv.half === nv.n[ev]) return ev
        }
        return null
      }
    }, new Uv.d];

    function xv(vv, zv, Pv, hv, Sv) {
      let ev = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      for (const gv of Rv)
        if (gv.handles(Sv)) return gv.shape(vv, zv, Pv, hv, Sv, ev);
      return Sv
    }

    function tv(vv) {
      for (const hv of Rv) {
        var zv, Pv;
        if (hv.handles(vv)) return null !== (zv = null === (Pv = hv.placedBy) || void 0 === Pv ? void 0 : Pv.call(hv, vv)) && void 0 !== zv ? zv : null
      }
      return null
    }
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
  },
  37712: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => hv,
      f: () => ev
    });
    const hv = ["Chest", "Loot Chest", "Moonstone Chest"],
      Sv = [{
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

    function ev(vv) {
      return Sv.find((zv => zv.exactMatch ? vv === zv.name : vv.includes(zv.name)))
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);