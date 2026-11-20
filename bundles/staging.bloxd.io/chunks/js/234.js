export const id = 234;
export const ids = [234];
export const modules = {
  37497: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Uz,
      h: () => Fz,
      i: () => oz,
      j: () => Wz,
      l: () => Oz,
      p: () => Xz
    });
    const Fz = 1.001,
      Wz = .501,
      Xz = .025,
      Oz = .75,
      oz = .08,
      vz = 4;

    function Uz() {
      const zz = Wz,
        tz = Xz,
        sz = zz - tz / 2,
        Fz = (2 * zz - 2 * tz) / (2 * vz - 1),
        Oz = [];
      for (const Wz of [-sz, sz])
        for (const Xz of [-sz, sz])
          for (let sz = 0; sz < vz; sz++) {
            const oz = -zz + tz + Fz * (2 * sz + .5);
            Oz.push([Fz, tz, tz, oz, Wz, Xz]), Oz.push([tz, Fz, tz, Wz, oz, Xz]), Oz.push([tz, tz, Fz, Wz, Xz, oz])
          }
      for (const Wz of [-sz, sz])
        for (const zz of [-sz, sz])
          for (const Fz of [-sz, sz]) Oz.push([tz, tz, tz, Wz, zz, Fz]);
      return Oz
    }
  },
  37849: (zz, tz, sz) => {
    sz.d(tz, {
      B: () => Jz,
      D: () => Yz,
      E: () => rz,
      I: () => Nz,
      J: () => Dz,
      M: () => Hz,
      N: () => Wz,
      c: () => Kz,
      g: () => vz,
      i: () => Pz,
      k: () => Uz,
      m: () => oz,
      n: () => Oz,
      q: () => Xz,
      u: () => mz,
      w: () => bz,
      z: () => xz
    });
    var Fz = sz(9014);

    function Wz(zz) {
      return Math.floor(zz).toLocaleString("en-US")
    }
    const Xz = 2e3,
      Oz = .005,
      oz = .001,
      vz = 2,
      Uz = "Fluid Tank",
      Kz = "Coolant Mixer",
      uz = 144;

    function Nz(zz) {
      const tz = zz.split("|")[0];
      return (0, Fz.k)(tz) ? tz === Fz.c ? "cryo" : "water" : null
    }
    const bz = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ],
      wz = 63;

    function Dz(zz) {
      let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const sz = tz ? function(zz, tz, sz) {
        const Fz = bz.findIndex((Fz => {
          let [Wz, Xz, Oz] = Fz;
          return Wz === zz && Xz === tz && Oz === sz
        }));
        return Fz < 0 ? 0 : 1 << Fz
      }(tz[0], tz[1], tz[2]) : 0;
      return "maker" === zz ? {
        kind: zz,
        faces: sz
      } : "user" === zz ? {
        kind: zz,
        faces: wz & ~sz
      } : {
        kind: zz,
        faces: wz
      }
    }

    function gz(zz) {
      return "pipe" === zz || "tank" === zz || "maker" === zz
    }

    function Hz(zz, tz, sz) {
      return 0 !== (zz.faces & 1 << sz) && 0 !== (tz.faces & 1 << (1 ^ sz)) && (gz(zz.kind) || gz(tz.kind))
    }
    const Bz = (zz, tz, sz, Fz) => ({
        input: zz,
        inputAmount: Fz,
        output: tz,
        outputAmount: sz
      }),
      Pz = {
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
          recipes: [Bz("Uranium Grit", "Uranium Pellet", 1, 12), Bz("Spent Pellet", "Plutonium Pellet", 1, 4)],
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
          recipes: [Bz("Biomass", "", 0, 1)],
          powerPerOp: 720,
          waterPerOp: 144,
          cryoMade: uz,
          couplable: !0,
          couplerSlot: 1
        }
      };

    function rz(zz, tz) {
      return 1e3 * (null !== tz && void 0 !== tz ? tz : 0) / zz.opMs
    }

    function Yz(zz) {
      let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const sz = rz(Pz["Coolant Mixer"], uz) * tz;
      return zz <= 0 ? 0 : Math.ceil(zz / sz - 1e-9)
    }
    const xz = "baf2Water",
      mz = "baf2waterclose",
      Jz = "baf2wateropen"
  },
  37834: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => jz,
      e: () => Az
    });
    var Fz = sz(8940),
      Wz = sz(8970);
    const Xz = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0],
      [0, -1, 0]
    ];
    var Oz = sz(8982),
      oz = sz(37664),
      vz = sz(8976);
    const Uz = {
      1: [0, -1],
      2: [-1, 0],
      3: [0, 1],
      4: [1, 0]
    };

    function Kz(zz) {
      let [tz, sz] = zz;
      return [-sz, tz]
    }

    function uz(zz, tz) {
      return zz[0] === tz[0] && zz[1] === tz[1]
    }

    function Nz(zz, tz) {
      return zz[0] * tz[0] + zz[1] * tz[1] === 0
    }
    const bz = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];
    var wz = sz(9009);

    function Dz(zz, tz, sz, Fz, Wz) {
      return tz < wz.k || tz >= wz.k + wz.m || Math.floor(zz / wz.t) === Math.floor(Fz / wz.t) && Math.floor(sz / wz.t) === Math.floor(Wz / wz.t)
    }
    const gz = "Splitter",
      Hz = "Sorting Gate",
      Bz = new Set(wz.F),
      Pz = new Set([...wz.F, "Belt Loader", "Fast Loader", Hz]),
      rz = new Set(wz.q),
      Yz = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 0, 1],
        [0, 0, -1],
        [0, 1, 0],
        [0, -1, 0]
      ];

    function xz(zz) {
      var tz, sz;
      return null !== (tz = null === (sz = Fz.j[zz]) || void 0 === sz ? void 0 : sz.meta.rootName) && void 0 !== tz ? tz : ""
    }

    function mz(zz) {
      return xz(zz) === wz.g && (0, wz.R)(Fz.j[zz].name)
    }
    var Jz = sz(8973),
      Iz = sz(8996);
    const Cz = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function ez(zz) {
      var tz, sz;
      const Wz = null === (tz = Fz.j[zz]) || void 0 === tz ? void 0 : tz.meta;
      return (null === Wz || void 0 === Wz ? void 0 : Wz.rootName) !== Iz.k ? null : {
        rot: null !== (sz = Wz.rot) && void 0 !== sz ? sz : 1,
        half: (0, Iz.e)(Wz.rootName, Wz.metaStr)
      }
    }

    function Zz(zz, tz, sz, Fz) {
      return ez(zz(tz, sz, Fz))
    }

    function Gz(zz, tz, sz, Fz, Wz) {
      let {
        rot: Xz,
        half: Oz
      } = Wz;
      const [oz, vz] = (0, Iz.j)(Xz, Oz), Uz = Zz(zz, tz + oz, sz, Fz + vz);
      return null !== Uz && Uz.rot === Xz && Uz.half === Iz.l[Oz]
    }
    var Tz = sz(37840);
    const cz = [new class {
      constructor() {
        this.reshapeOffsets = bz
      }
      handles(zz) {
        var tz;
        return "Stairs" === (null === (tz = Fz.j[zz]) || void 0 === tz ? void 0 : tz.model)
      }
      affects(zz) {
        return this.handles(zz)
      }
      shape(zz, tz, sz, Wz, Xz) {
        const Oz = this.stairsOf(Xz),
          oz = this.cornerAt(zz, tz, sz, Wz, Oz),
          Uz = Oz.half === vz.c.top ? "top" : "bot";
        return (0, Fz.k)(`${Fz.j[Xz].meta.rootName}|meta|rot${Oz.rot}|${Uz}${null===oz?"":`|${oz}`}`)
      }
      stairsOf(zz) {
        const {
          rot: tz,
          halfblockPlacement: sz
        } = Fz.j[zz].meta;
        return {
          rot: tz,
          half: sz
        }
      }
      stairsAt(zz, tz, sz, Fz) {
        const Wz = zz(tz, sz, Fz);
        return this.handles(Wz) ? this.stairsOf(Wz) : null
      }
      cornerAt(zz, tz, sz, Fz, Wz) {
        let {
          rot: Xz,
          half: Oz
        } = Wz;
        const oz = Uz[Xz],
          vz = Wz => {
            let [oz, vz] = Wz;
            const Uz = this.stairsAt(zz, tz + oz, sz, Fz + vz);
            return null !== Uz && Uz.rot === Xz && Uz.half === Oz
          },
          bz = this.stairsAt(zz, tz + oz[0], sz, Fz + oz[1]);
        if (null !== bz && bz.half === Oz) {
          const zz = Uz[bz.rot];
          if (Nz(oz, zz) && !vz([-zz[0], -zz[1]])) return uz(zz, Kz(oz)) ? "outerLeft" : "outerRight"
        }
        const wz = this.stairsAt(zz, tz - oz[0], sz, Fz - oz[1]);
        if (null !== wz && wz.half === Oz) {
          const zz = Uz[wz.rot];
          if (Nz(oz, zz) && !vz(zz)) return uz(zz, Kz(oz)) ? "innerLeft" : "innerRight"
        }
        return null
      }
    }, new class {
      constructor() {
        this.reshapeOffsets = Xz, this.rootIds = new Set(Wz.g.map((zz => (0, Fz.k)(zz))))
      }
      handles(zz) {
        var tz;
        const sz = null === (tz = Fz.j[zz]) || void 0 === tz ? void 0 : tz.meta;
        return void 0 !== sz && this.rootIds.has(sz.rootId)
      }
      affects(zz) {
        return this.handles(zz)
      }
      placedBy(zz) {
        return Fz.j[zz].meta.rootName === Wz.m ? null : Wz.m
      }
      shape(zz, tz, sz, Xz, Oz) {
        const {
          rootId: oz,
          rootName: vz,
          rot: Uz
        } = Fz.j[Oz].meta;
        let Kz = 0;
        return Wz.r[Uz].forEach(((Wz, Oz) => {
          var vz;
          let [uz, Nz, bz] = Wz;
          const wz = null === (vz = Fz.j[zz(tz + uz, sz + Nz, Xz + bz)]) || void 0 === vz ? void 0 : vz.meta;
          (null === wz || void 0 === wz ? void 0 : wz.rootId) === oz && wz.rot === Uz && (Kz |= 1 << Oz)
        })), (0, Fz.k)((0, Wz.d)(vz, Uz, Kz))
      }
    }, ...Oz.e.map((zz => new oz.e(zz))), new class {
      constructor() {
        this.reshapeOffsets = Yz
      }
      handles(zz) {
        const tz = xz(zz);
        return Bz.has(tz) || tz === wz.g
      }
      affects(zz) {
        const tz = xz(zz);
        return Pz.has(tz) || rz.has(tz) || tz === gz || tz === wz.g || void 0 !== wz.b[tz]
      }
      shape(zz, tz, sz, Wz, Xz, Oz) {
        const {
          rootName: oz,
          rot: vz
        } = Fz.j[Xz].meta;
        return oz === wz.g ? Oz ? Xz : function(zz, tz, sz, Wz, Xz) {
          const [Oz, oz] = wz.f[Xz - 1];
          for (let vz = 1; vz <= wz.C; vz++) {
            const [Uz, Kz] = [tz - Oz * vz, Wz - oz * vz], uz = zz(Uz, sz, Kz);
            if (xz(uz) === wz.g && Fz.j[uz].meta.rot === Xz && Dz(tz, sz, Wz, Uz, Kz)) return (0, Fz.k)((0, wz.X)(Xz, !mz(uz)))
          }
          return (0, Fz.k)((0, wz.X)(Xz, !1))
        }(zz, tz, sz, Wz, vz) : (0, Fz.k)((0, wz.J)(oz, vz, function(zz, tz, sz, Wz, Xz) {
          const [Oz, oz] = wz.f[Xz - 1], vz = (Xz, vz) => function(zz, tz, sz, Wz, Xz) {
            var Oz;
            const oz = null === (Oz = Fz.j[zz]) || void 0 === Oz ? void 0 : Oz.meta;
            if (!oz) return !1;
            const vz = oz.rootName,
              Uz = Pz.has(vz) || mz(zz);
            if (!Uz && !rz.has(vz) && vz !== gz) return !1;
            const [Kz, uz] = wz.f[oz.rot - 1];
            return Uz ? Kz === -tz && uz === -sz : rz.has(vz) ? Kz === tz && uz === sz : (0, wz.W)(Fz.j[zz].name, Kz, uz).some((zz => {
              let [Fz, Wz] = zz;
              return Fz === -tz && Wz === -sz
            })) && !(Wz === tz && Xz === sz)
          }(zz(tz + Xz, sz, Wz + vz), Xz, vz, Oz, oz), Uz = zz(tz - Oz, sz, Wz - oz), Kz = xz(Uz) === gz && Fz.j[Uz].meta.rot === Xz, uz = 1 === wz.b[xz(zz(tz, sz - 1, Wz))] || -1 === wz.b[xz(zz(tz, sz + 1, Wz))];
          if (uz || Kz || function(zz, tz, sz) {
              if (xz(zz) !== Hz) return !1;
              const [Wz, Xz] = wz.f[Fz.j[zz].meta.rot - 1], [Oz, oz] = (0, wz.M)(Fz.j[zz].name, Wz, Xz);
              return tz === Oz && sz === oz
            }(Uz, Oz, oz) || vz(-Oz, -oz)) return null;
          const Nz = vz(-oz, Oz),
            bz = vz(oz, -Oz);
          if (Nz === bz) return null;
          return Nz ? "turnLeft" : "turnRight"
        }(zz, tz, sz, Wz, vz)))
      }
    }, new class {
      constructor() {
        this.reshapeOffsets = Cz, this.rootId = (0, Fz.k)(Iz.k)
      }
      handles(zz) {
        var tz;
        return (null === (tz = Fz.j[zz]) || void 0 === tz ? void 0 : tz.meta.rootId) === this.rootId
      }
      affects(zz) {
        return this.handles(zz)
      }
      shape(zz, tz, sz, Wz, Xz, Oz) {
        const oz = ez(Xz);
        return (0, Fz.k)((vz = oz.rot, null !== (Uz = Oz ? this.reshapedHalf(zz, tz, sz, Wz, oz) : this.placedHalf(zz, tz, sz, Wz, oz.rot)) ? (0, Iz.d)(Iz.k, vz, Uz) : 1 === vz ? Iz.k : `${Iz.k}|meta|rot${vz}`));
        var vz, Uz
      }
      placedHalf(zz, tz, sz, Fz, Wz) {
        const [Xz, Oz] = Jz.d[Wz];
        for (const [oz, vz] of [
            ["right", 1],
            ["left", -1]
          ]) {
          const Uz = tz + vz * Xz,
            Kz = Fz + vz * Oz,
            uz = Zz(zz, Uz, sz, Kz);
          if (null !== uz && uz.rot === Wz && (null === uz.half || !Gz(zz, Uz, sz, Kz, uz))) return oz
        }
        return null
      }
      reshapedHalf(zz, tz, sz, Fz, Wz) {
        if (null !== Wz.half && Gz(zz, tz, sz, Fz, Wz)) return Wz.half;
        for (const Xz of ["right", "left"]) {
          const [Oz, oz] = (0, Iz.j)(Wz.rot, Xz), vz = Zz(zz, tz + Oz, sz, Fz + oz);
          if (null !== vz && vz.rot === Wz.rot && vz.half === Iz.l[Xz]) return Xz
        }
        return null
      }
    }, new Tz.c];

    function jz(zz, tz, sz, Fz, Wz) {
      let Xz = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      for (const Oz of cz)
        if (Oz.handles(Wz)) return Oz.shape(zz, tz, sz, Fz, Wz, Xz);
      return Wz
    }

    function Az(zz) {
      for (const Fz of cz) {
        var tz, sz;
        if (Fz.handles(zz)) return null !== (tz = null === (sz = Fz.placedBy) || void 0 === sz ? void 0 : sz.call(Fz, zz)) && void 0 !== tz ? tz : null
      }
      return null
    }
  },
  37840: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Iz,
      d: () => rz,
      g: () => Pz
    });
    var Fz = sz(8940),
      Wz = sz(8960),
      Xz = sz(9014),
      Oz = sz(37849),
      oz = sz(9009);
    const vz = (0, Oz.J)("pipe"),
      Uz = (0, Oz.J)("tank"),
      Kz = (0, Oz.J)("port"),
      uz = "Reactor Port";

    function Nz(zz, tz, sz) {
      const Fz = new Set([Xz.d, Xz.c, uz, ...tz, ...sz, ...zz ? [Oz.k] : []]);
      return {
        makers: new Set(tz),
        roots: Fz
      }
    }
    const bz = {
        water: Nz(!0, ["Condenser"], ["Centrifuge", "Synthesizer", Oz.c]),
        cryo: Nz(!1, [Oz.c], [])
      },
      wz = new Set([...bz.water.roots, ...bz.cryo.roots]),
      Dz = {
        nx: [-1, 0, 0],
        ny: [0, -1, 0],
        nz: [0, 0, -1],
        px: [1, 0, 0],
        py: [0, 1, 0],
        pz: [0, 0, 1]
      },
      gz = Wz.f.map((zz => Dz[zz])),
      Hz = gz.map((zz => {
        let [tz, sz, Fz] = zz;
        return Oz.w.findIndex((zz => {
          let [Wz, Xz, Oz] = zz;
          return Wz === tz && Xz === sz && Oz === Fz
        }))
      }));

    function Bz(zz) {
      let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
      const sz = Fz.j[zz],
        Wz = null === sz || void 0 === sz ? void 0 : sz.meta.rootName,
        Nz = bz[tz];
      if (!Wz || !Nz.roots.has(Wz)) return null;
      if ((0, Xz.k)(Wz)) return (0, Oz.I)(sz.name) === tz ? vz : null;
      if (Wz === Oz.k) return Uz;
      if (Wz === uz) return sz.name.endsWith("|Water") ? Kz : null;
      const [wz, Dz] = oz.f[(sz.meta.rot || 1) - 1];
      return (0, Oz.J)(Nz.makers.has(Wz) ? "maker" : "user", [-wz, 0, -Dz])
    }

    function Pz(zz, tz, sz, Wz) {
      let Xz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
      const {
        makers: oz
      } = bz[Xz];
      return gz.some(((Uz, Kz) => {
        var uz, Nz;
        let [bz, wz, Dz] = Uz;
        const gz = zz(tz + bz, sz + wz, Wz + Dz),
          Pz = Bz(gz, Xz);
        return null !== Pz && oz.has(null !== (uz = null === (Nz = Fz.j[gz]) || void 0 === Nz ? void 0 : Nz.meta.rootName) && void 0 !== uz ? uz : "") && !(0, Oz.M)(vz, Pz, Hz[Kz])
      }))
    }

    function rz(zz) {
      const tz = Fz.j[zz];
      return tz ? (0, Oz.I)(tz.name) : null
    }
    let Yz = null;

    function xz(zz) {
      if (!Yz) {
        Yz = new Map;
        for (const zz of ["water", "cryo"])
          for (let tz = 0; tz < 64; tz++)
            for (const sz of [!1, !0]) Yz.set((0, Xz.m)(zz, tz, sz), {
              cb: zz,
              mask: tz,
              full: sz
            })
      }
      return Yz.get(zz)
    }
    const mz = new Map(Array.from({
      length: Xz.h + 1
    }, ((zz, tz) => [(0, Xz.p)(tz), tz])));

    function Jz(zz, tz, sz, Wz, Xz, Oz) {
      return gz.some(((oz, vz) => {
        var Uz, Kz, uz;
        let [Nz, bz, wz] = oz;
        if (0 === (Oz >> vz & 1)) return !1;
        const Dz = null !== (Uz = null === (Kz = Fz.j[zz(tz + Nz, sz + bz, Wz + wz)]) || void 0 === Kz ? void 0 : Kz.name) && void 0 !== Uz ? Uz : "",
          gz = xz(Dz);
        return gz ? gz.cb === Xz && gz.full : (null !== (uz = function(zz) {
          var tz;
          return null !== (tz = mz.get(zz)) && void 0 !== tz ? tz : null
        }(Dz)) && void 0 !== uz ? uz : 0) > 0
      }))
    }
    class Iz {
      constructor() {
        this.reshapeOffsets = gz
      }
      handles(zz) {
        return null !== rz(zz)
      }
      affects(zz) {
        var tz, sz;
        return wz.has(null !== (tz = null === (sz = Fz.j[zz]) || void 0 === sz ? void 0 : sz.meta.rootName) && void 0 !== tz ? tz : "")
      }
      placedBy(zz) {
        var tz;
        return (null === (tz = Fz.j[zz]) || void 0 === tz ? void 0 : tz.meta.rootName) === Xz.c ? Xz.d : null
      }
      shape(zz, tz, sz, Wz, oz, Uz) {
        var Kz, uz, Nz;
        const bz = null !== (Kz = null === (uz = Fz.j[oz]) || void 0 === uz ? void 0 : uz.name) && void 0 !== Kz ? Kz : "",
          wz = Uz || bz !== Xz.d ? null !== (Nz = (0, Oz.I)(bz)) && void 0 !== Nz ? Nz : "water" : function(zz, tz, sz, Fz) {
            return gz.some(((Wz, Xz) => {
              let [oz, Uz, Kz] = Wz;
              const uz = Bz(zz(tz + oz, sz + Uz, Fz + Kz), "cryo");
              return null !== uz && "port" !== uz.kind && (0, Oz.M)(vz, uz, Hz[Xz])
            })) ? "cryo" : "water"
          }(zz, tz, sz, Wz),
          Dz = function(zz, tz, sz, Fz) {
            let Wz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water",
              Xz = 0;
            return gz.forEach(((oz, Uz) => {
              let [Kz, uz, Nz] = oz;
              const bz = Bz(zz(tz + Kz, sz + uz, Fz + Nz), Wz);
              bz && (0, Oz.M)(vz, bz, Hz[Uz]) && (Xz |= 1 << Uz)
            })), Xz
          }(zz, tz, sz, Wz, wz),
          Pz = Uz ? function(zz) {
            var tz;
            return !0 === (null === (tz = xz(zz)) || void 0 === tz ? void 0 : tz.full)
          }(bz) : Jz(zz, tz, sz, Wz, wz, Dz);
        return (0, Fz.k)((0, Xz.m)(wz, Dz, Pz))
      }
    }
  },
  37627: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Fz,
      d: () => Xz
    });
    const Fz = ["Chest", "Loot Chest", "Moonstone Chest"],
      Wz = [{
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

    function Xz(zz) {
      return Wz.find((tz => tz.exactMatch ? zz === tz.name : zz.includes(tz.name)))
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);