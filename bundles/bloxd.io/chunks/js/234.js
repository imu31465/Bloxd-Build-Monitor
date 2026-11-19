export const id = 234;
export const ids = [234];
export const modules = {
  37480: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => Hz,
      i: () => Ez,
      j: () => Mz,
      k: () => nz,
      n: () => lz,
      q: () => iz
    });
    const Ez = 1.001,
      nz = .501,
      iz = .025,
      lz = .75,
      Mz = .08,
      tz = 4;

    function Hz() {
      const zz = nz,
        uz = iz,
        bz = zz - uz / 2,
        Ez = (2 * zz - 2 * uz) / (2 * tz - 1),
        lz = [];
      for (const nz of [-bz, bz])
        for (const iz of [-bz, bz])
          for (let bz = 0; bz < tz; bz++) {
            const Mz = -zz + uz + Ez * (2 * bz + .5);
            lz.push([Ez, uz, uz, Mz, nz, iz]), lz.push([uz, Ez, uz, nz, Mz, iz]), lz.push([uz, uz, Ez, nz, iz, Mz])
          }
      for (const nz of [-bz, bz])
        for (const zz of [-bz, bz])
          for (const Ez of [-bz, bz]) lz.push([uz, uz, uz, nz, zz, Ez]);
      return lz
    }
  },
  37819: (zz, uz, bz) => {
    bz.d(uz, {
      A: () => rz,
      B: () => sz,
      D: () => dz,
      F: () => Rz,
      G: () => wz,
      I: () => nz,
      e: () => Oz,
      h: () => tz,
      l: () => fz,
      m: () => Hz,
      n: () => Mz,
      q: () => lz,
      s: () => iz,
      t: () => Nz,
      v: () => Fz,
      w: () => oz,
      x: () => vz
    });
    var Ez = bz(9160);

    function nz(zz) {
      return Math.floor(zz).toLocaleString("en-US")
    }
    const iz = 2e3,
      lz = .005,
      Mz = .001,
      tz = 2,
      Hz = "Fluid Tank",
      Oz = "Coolant Mixer",
      pz = 144;

    function dz(zz) {
      const uz = zz.split("|")[0];
      return (0, Ez.k)(uz) ? uz === Ez.b ? "cryo" : "water" : null
    }
    const Fz = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ],
      Zz = 63;

    function Rz(zz) {
      let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const bz = uz ? function(zz, uz, bz) {
        const Ez = Fz.findIndex((Ez => {
          let [nz, iz, lz] = Ez;
          return nz === zz && iz === uz && lz === bz
        }));
        return Ez < 0 ? 0 : 1 << Ez
      }(uz[0], uz[1], uz[2]) : 0;
      return "maker" === zz ? {
        kind: zz,
        faces: bz
      } : "user" === zz ? {
        kind: zz,
        faces: Zz & ~bz
      } : {
        kind: zz,
        faces: Zz
      }
    }

    function Kz(zz) {
      return "pipe" === zz || "tank" === zz || "maker" === zz
    }

    function wz(zz, uz, bz) {
      return 0 !== (zz.faces & 1 << bz) && 0 !== (uz.faces & 1 << (1 ^ bz)) && (Kz(zz.kind) || Kz(uz.kind))
    }
    const Xz = (zz, uz, bz, Ez) => ({
        input: zz,
        inputAmount: Ez,
        output: uz,
        outputAmount: bz
      }),
      fz = {
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
          recipes: [Xz("Uranium Grit", "Uranium Pellet", 1, 12), Xz("Spent Pellet", "Plutonium Pellet", 1, 4)],
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
          recipes: [Xz("Biomass", "", 0, 1)],
          powerPerOp: 720,
          waterPerOp: 144,
          cryoMade: pz,
          couplable: !0,
          couplerSlot: 1
        }
      };

    function sz(zz, uz) {
      return 1e3 * (null !== uz && void 0 !== uz ? uz : 0) / zz.opMs
    }

    function rz(zz) {
      let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const bz = sz(fz["Coolant Mixer"], pz) * uz;
      return zz <= 0 ? 0 : Math.ceil(zz / bz - 1e-9)
    }
    const oz = "baf2Water",
      Nz = "baf2waterclose",
      vz = "baf2wateropen"
  },
  37814: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => az,
      e: () => Vz
    });
    var Ez = bz(9078),
      nz = bz(9114);
    const iz = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0],
      [0, -1, 0]
    ];
    var lz = bz(9130),
      Mz = bz(37634),
      tz = bz(9125);
    const Hz = {
      1: [0, -1],
      2: [-1, 0],
      3: [0, 1],
      4: [1, 0]
    };

    function Oz(zz) {
      let [uz, bz] = zz;
      return [-bz, uz]
    }

    function pz(zz, uz) {
      return zz[0] === uz[0] && zz[1] === uz[1]
    }

    function dz(zz, uz) {
      return zz[0] * uz[0] + zz[1] * uz[1] === 0
    }
    const Fz = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];
    var Zz = bz(9155);

    function Rz(zz, uz, bz, Ez, nz) {
      return uz < Zz.s || uz >= Zz.s + Zz.t || Math.floor(zz / Zz.y) === Math.floor(Ez / Zz.y) && Math.floor(bz / Zz.y) === Math.floor(nz / Zz.y)
    }
    const Kz = "Splitter",
      wz = "Sorting Gate",
      Xz = new Set(Zz.M),
      fz = new Set([...Zz.M, "Belt Loader", "Fast Loader", wz]),
      sz = new Set(Zz.u),
      rz = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 0, 1],
        [0, 0, -1],
        [0, 1, 0],
        [0, -1, 0]
      ];

    function oz(zz) {
      var uz, bz;
      return null !== (uz = null === (bz = Ez.k[zz]) || void 0 === bz ? void 0 : bz.meta.rootName) && void 0 !== uz ? uz : ""
    }

    function Nz(zz) {
      return oz(zz) === Zz.k && (0, Zz.W)(Ez.k[zz].name)
    }
    var vz = bz(9117),
      xz = bz(9137);
    const Jz = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function Az(zz) {
      var uz, bz;
      const nz = null === (uz = Ez.k[zz]) || void 0 === uz ? void 0 : uz.meta;
      return (null === nz || void 0 === nz ? void 0 : nz.rootName) !== xz.m ? null : {
        rot: null !== (bz = nz.rot) && void 0 !== bz ? bz : 1,
        half: (0, xz.g)(nz.rootName, nz.metaStr)
      }
    }

    function Tz(zz, uz, bz, Ez) {
      return Az(zz(uz, bz, Ez))
    }

    function Lz(zz, uz, bz, Ez, nz) {
      let {
        rot: iz,
        half: lz
      } = nz;
      const [Mz, tz] = (0, xz.j)(iz, lz), Hz = Tz(zz, uz + Mz, bz, Ez + tz);
      return null !== Hz && Hz.rot === iz && Hz.half === xz.n[lz]
    }
    var Pz = bz(37817);
    const Gz = [new class {
      constructor() {
        this.reshapeOffsets = Fz
      }
      handles(zz) {
        var uz;
        return "Stairs" === (null === (uz = Ez.k[zz]) || void 0 === uz ? void 0 : uz.model)
      }
      affects(zz) {
        return this.handles(zz)
      }
      shape(zz, uz, bz, nz, iz) {
        const lz = this.stairsOf(iz),
          Mz = this.cornerAt(zz, uz, bz, nz, lz),
          Hz = lz.half === tz.b.top ? "top" : "bot";
        return (0, Ez.l)(`${Ez.k[iz].meta.rootName}|meta|rot${lz.rot}|${Hz}${null===Mz?"":`|${Mz}`}`)
      }
      stairsOf(zz) {
        const {
          rot: uz,
          halfblockPlacement: bz
        } = Ez.k[zz].meta;
        return {
          rot: uz,
          half: bz
        }
      }
      stairsAt(zz, uz, bz, Ez) {
        const nz = zz(uz, bz, Ez);
        return this.handles(nz) ? this.stairsOf(nz) : null
      }
      cornerAt(zz, uz, bz, Ez, nz) {
        let {
          rot: iz,
          half: lz
        } = nz;
        const Mz = Hz[iz],
          tz = nz => {
            let [Mz, tz] = nz;
            const Hz = this.stairsAt(zz, uz + Mz, bz, Ez + tz);
            return null !== Hz && Hz.rot === iz && Hz.half === lz
          },
          Fz = this.stairsAt(zz, uz + Mz[0], bz, Ez + Mz[1]);
        if (null !== Fz && Fz.half === lz) {
          const zz = Hz[Fz.rot];
          if (dz(Mz, zz) && !tz([-zz[0], -zz[1]])) return pz(zz, Oz(Mz)) ? "outerLeft" : "outerRight"
        }
        const Zz = this.stairsAt(zz, uz - Mz[0], bz, Ez - Mz[1]);
        if (null !== Zz && Zz.half === lz) {
          const zz = Hz[Zz.rot];
          if (dz(Mz, zz) && !tz(zz)) return pz(zz, Oz(Mz)) ? "innerLeft" : "innerRight"
        }
        return null
      }
    }, new class {
      constructor() {
        this.reshapeOffsets = iz, this.rootIds = new Set(nz.g.map((zz => (0, Ez.l)(zz))))
      }
      handles(zz) {
        var uz;
        const bz = null === (uz = Ez.k[zz]) || void 0 === uz ? void 0 : uz.meta;
        return void 0 !== bz && this.rootIds.has(bz.rootId)
      }
      affects(zz) {
        return this.handles(zz)
      }
      placedBy(zz) {
        return Ez.k[zz].meta.rootName === nz.j ? null : nz.j
      }
      shape(zz, uz, bz, iz, lz) {
        const {
          rootId: Mz,
          rootName: tz,
          rot: Hz
        } = Ez.k[lz].meta;
        let Oz = 0;
        return nz.r[Hz].forEach(((nz, lz) => {
          var tz;
          let [pz, dz, Fz] = nz;
          const Zz = null === (tz = Ez.k[zz(uz + pz, bz + dz, iz + Fz)]) || void 0 === tz ? void 0 : tz.meta;
          (null === Zz || void 0 === Zz ? void 0 : Zz.rootId) === Mz && Zz.rot === Hz && (Oz |= 1 << lz)
        })), (0, Ez.l)((0, nz.e)(tz, Hz, Oz))
      }
    }, ...lz.c.map((zz => new Mz.e(zz))), new class {
      constructor() {
        this.reshapeOffsets = rz
      }
      handles(zz) {
        const uz = oz(zz);
        return Xz.has(uz) || uz === Zz.k
      }
      affects(zz) {
        const uz = oz(zz);
        return fz.has(uz) || sz.has(uz) || uz === Kz || uz === Zz.k || void 0 !== Zz.d[uz]
      }
      shape(zz, uz, bz, nz, iz, lz) {
        const {
          rootName: Mz,
          rot: tz
        } = Ez.k[iz].meta;
        return Mz === Zz.k ? lz ? iz : function(zz, uz, bz, nz, iz) {
          const [lz, Mz] = Zz.g[iz - 1];
          for (let tz = 1; tz <= Zz.J; tz++) {
            const [Hz, Oz] = [uz - lz * tz, nz - Mz * tz], pz = zz(Hz, bz, Oz);
            if (oz(pz) === Zz.k && Ez.k[pz].meta.rot === iz && Rz(uz, bz, nz, Hz, Oz)) return (0, Ez.l)((0, Zz.cb)(iz, !Nz(pz)))
          }
          return (0, Ez.l)((0, Zz.cb)(iz, !1))
        }(zz, uz, bz, nz, tz) : (0, Ez.l)((0, Zz.Q)(Mz, tz, function(zz, uz, bz, nz, iz) {
          const [lz, Mz] = Zz.g[iz - 1], tz = (iz, tz) => function(zz, uz, bz, nz, iz) {
            var lz;
            const Mz = null === (lz = Ez.k[zz]) || void 0 === lz ? void 0 : lz.meta;
            if (!Mz) return !1;
            const tz = Mz.rootName,
              Hz = fz.has(tz) || Nz(zz);
            if (!Hz && !sz.has(tz) && tz !== Kz) return !1;
            const [Oz, pz] = Zz.g[Mz.rot - 1];
            return Hz ? Oz === -uz && pz === -bz : sz.has(tz) ? Oz === uz && pz === bz : (0, Zz.$)(Ez.k[zz].name, Oz, pz).some((zz => {
              let [Ez, nz] = zz;
              return Ez === -uz && nz === -bz
            })) && !(nz === uz && iz === bz)
          }(zz(uz + iz, bz, nz + tz), iz, tz, lz, Mz), Hz = zz(uz - lz, bz, nz - Mz), Oz = oz(Hz) === Kz && Ez.k[Hz].meta.rot === iz, pz = 1 === Zz.d[oz(zz(uz, bz - 1, nz))] || -1 === Zz.d[oz(zz(uz, bz + 1, nz))];
          if (pz || Oz || function(zz, uz, bz) {
              if (oz(zz) !== wz) return !1;
              const [nz, iz] = Zz.g[Ez.k[zz].meta.rot - 1], [lz, Mz] = (0, Zz.R)(Ez.k[zz].name, nz, iz);
              return uz === lz && bz === Mz
            }(Hz, lz, Mz) || tz(-lz, -Mz)) return null;
          const dz = tz(-Mz, lz),
            Fz = tz(Mz, -lz);
          if (dz === Fz) return null;
          return dz ? "turnLeft" : "turnRight"
        }(zz, uz, bz, nz, tz)))
      }
    }, new class {
      constructor() {
        this.reshapeOffsets = Jz, this.rootId = (0, Ez.l)(xz.m)
      }
      handles(zz) {
        var uz;
        return (null === (uz = Ez.k[zz]) || void 0 === uz ? void 0 : uz.meta.rootId) === this.rootId
      }
      affects(zz) {
        return this.handles(zz)
      }
      shape(zz, uz, bz, nz, iz, lz) {
        const Mz = Az(iz);
        return (0, Ez.l)((tz = Mz.rot, null !== (Hz = lz ? this.reshapedHalf(zz, uz, bz, nz, Mz) : this.placedHalf(zz, uz, bz, nz, Mz.rot)) ? (0, xz.e)(xz.m, tz, Hz) : 1 === tz ? xz.m : `${xz.m}|meta|rot${tz}`));
        var tz, Hz
      }
      placedHalf(zz, uz, bz, Ez, nz) {
        const [iz, lz] = vz.e[nz];
        for (const [Mz, tz] of [
            ["right", 1],
            ["left", -1]
          ]) {
          const Hz = uz + tz * iz,
            Oz = Ez + tz * lz,
            pz = Tz(zz, Hz, bz, Oz);
          if (null !== pz && pz.rot === nz && (null === pz.half || !Lz(zz, Hz, bz, Oz, pz))) return Mz
        }
        return null
      }
      reshapedHalf(zz, uz, bz, Ez, nz) {
        if (null !== nz.half && Lz(zz, uz, bz, Ez, nz)) return nz.half;
        for (const iz of ["right", "left"]) {
          const [lz, Mz] = (0, xz.j)(nz.rot, iz), tz = Tz(zz, uz + lz, bz, Ez + Mz);
          if (null !== tz && tz.rot === nz.rot && tz.half === xz.n[iz]) return iz
        }
        return null
      }
    }, new Pz.d];

    function az(zz, uz, bz, Ez, nz) {
      let iz = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      for (const lz of Gz)
        if (lz.handles(nz)) return lz.shape(zz, uz, bz, Ez, nz, iz);
      return nz
    }

    function Vz(zz) {
      for (const Ez of Gz) {
        var uz, bz;
        if (Ez.handles(zz)) return null !== (uz = null === (bz = Ez.placedBy) || void 0 === bz ? void 0 : bz.call(Ez, zz)) && void 0 !== uz ? uz : null
      }
      return null
    }
  },
  37817: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => xz,
      e: () => sz,
      g: () => fz
    });
    var Ez = bz(9078),
      nz = bz(9104),
      iz = bz(9160),
      lz = bz(37819),
      Mz = bz(9155);
    const tz = (0, lz.F)("pipe"),
      Hz = (0, lz.F)("tank"),
      Oz = (0, lz.F)("port"),
      pz = "Reactor Port";

    function dz(zz, uz, bz) {
      const Ez = new Set([iz.e, iz.b, pz, ...uz, ...bz, ...zz ? [lz.m] : []]);
      return {
        makers: new Set(uz),
        roots: Ez
      }
    }
    const Fz = {
        water: dz(!0, ["Condenser"], ["Centrifuge", "Synthesizer", lz.e]),
        cryo: dz(!1, [lz.e], [])
      },
      Zz = new Set([...Fz.water.roots, ...Fz.cryo.roots]),
      Rz = {
        nx: [-1, 0, 0],
        ny: [0, -1, 0],
        nz: [0, 0, -1],
        px: [1, 0, 0],
        py: [0, 1, 0],
        pz: [0, 0, 1]
      },
      Kz = nz.h.map((zz => Rz[zz])),
      wz = Kz.map((zz => {
        let [uz, bz, Ez] = zz;
        return lz.v.findIndex((zz => {
          let [nz, iz, lz] = zz;
          return nz === uz && iz === bz && lz === Ez
        }))
      }));

    function Xz(zz) {
      let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
      const bz = Ez.k[zz],
        nz = null === bz || void 0 === bz ? void 0 : bz.meta.rootName,
        dz = Fz[uz];
      if (!nz || !dz.roots.has(nz)) return null;
      if ((0, iz.k)(nz)) return (0, lz.D)(bz.name) === uz ? tz : null;
      if (nz === lz.m) return Hz;
      if (nz === pz) return bz.name.endsWith("|Water") ? Oz : null;
      const [Zz, Rz] = Mz.g[(bz.meta.rot || 1) - 1];
      return (0, lz.F)(dz.makers.has(nz) ? "maker" : "user", [-Zz, 0, -Rz])
    }

    function fz(zz, uz, bz, nz) {
      let iz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
      const {
        makers: Mz
      } = Fz[iz];
      return Kz.some(((Hz, Oz) => {
        var pz, dz;
        let [Fz, Zz, Rz] = Hz;
        const Kz = zz(uz + Fz, bz + Zz, nz + Rz),
          fz = Xz(Kz, iz);
        return null !== fz && Mz.has(null !== (pz = null === (dz = Ez.k[Kz]) || void 0 === dz ? void 0 : dz.meta.rootName) && void 0 !== pz ? pz : "") && !(0, lz.G)(tz, fz, wz[Oz])
      }))
    }

    function sz(zz) {
      const uz = Ez.k[zz];
      return uz ? (0, lz.D)(uz.name) : null
    }
    let rz = null;

    function oz(zz) {
      if (!rz) {
        rz = new Map;
        for (const zz of ["water", "cryo"])
          for (let uz = 0; uz < 64; uz++)
            for (const bz of [!1, !0]) rz.set((0, iz.l)(zz, uz, bz), {
              hF: zz,
              mask: uz,
              full: bz
            })
      }
      return rz.get(zz)
    }
    const Nz = new Map(Array.from({
      length: iz.h + 1
    }, ((zz, uz) => [(0, iz.p)(uz), uz])));

    function vz(zz, uz, bz, nz, iz, lz) {
      return Kz.some(((Mz, tz) => {
        var Hz, Oz, pz;
        let [dz, Fz, Zz] = Mz;
        if (0 === (lz >> tz & 1)) return !1;
        const Rz = null !== (Hz = null === (Oz = Ez.k[zz(uz + dz, bz + Fz, nz + Zz)]) || void 0 === Oz ? void 0 : Oz.name) && void 0 !== Hz ? Hz : "",
          Kz = oz(Rz);
        return Kz ? Kz.hF === iz && Kz.full : (null !== (pz = function(zz) {
          var uz;
          return null !== (uz = Nz.get(zz)) && void 0 !== uz ? uz : null
        }(Rz)) && void 0 !== pz ? pz : 0) > 0
      }))
    }
    class xz {
      constructor() {
        this.reshapeOffsets = Kz
      }
      handles(zz) {
        return null !== sz(zz)
      }
      affects(zz) {
        var uz, bz;
        return Zz.has(null !== (uz = null === (bz = Ez.k[zz]) || void 0 === bz ? void 0 : bz.meta.rootName) && void 0 !== uz ? uz : "")
      }
      placedBy(zz) {
        var uz;
        return (null === (uz = Ez.k[zz]) || void 0 === uz ? void 0 : uz.meta.rootName) === iz.b ? iz.e : null
      }
      shape(zz, uz, bz, nz, Mz, Hz) {
        var Oz, pz, dz;
        const Fz = null !== (Oz = null === (pz = Ez.k[Mz]) || void 0 === pz ? void 0 : pz.name) && void 0 !== Oz ? Oz : "",
          Zz = Hz || Fz !== iz.e ? null !== (dz = (0, lz.D)(Fz)) && void 0 !== dz ? dz : "water" : function(zz, uz, bz, Ez) {
            return Kz.some(((nz, iz) => {
              let [Mz, Hz, Oz] = nz;
              const pz = Xz(zz(uz + Mz, bz + Hz, Ez + Oz), "cryo");
              return null !== pz && "port" !== pz.kind && (0, lz.G)(tz, pz, wz[iz])
            })) ? "cryo" : "water"
          }(zz, uz, bz, nz),
          Rz = function(zz, uz, bz, Ez) {
            let nz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water",
              iz = 0;
            return Kz.forEach(((Mz, Hz) => {
              let [Oz, pz, dz] = Mz;
              const Fz = Xz(zz(uz + Oz, bz + pz, Ez + dz), nz);
              Fz && (0, lz.G)(tz, Fz, wz[Hz]) && (iz |= 1 << Hz)
            })), iz
          }(zz, uz, bz, nz, Zz),
          fz = Hz ? function(zz) {
            var uz;
            return !0 === (null === (uz = oz(zz)) || void 0 === uz ? void 0 : uz.full)
          }(Fz) : vz(zz, uz, bz, nz, Zz, Rz);
        return (0, Ez.l)((0, iz.l)(Zz, Rz, fz))
      }
    }
  },
  37593: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => Ez,
      g: () => iz
    });
    const Ez = ["Chest", "Loot Chest", "Moonstone Chest"],
      nz = [{
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

    function iz(zz) {
      return nz.find((uz => uz.exactMatch ? zz === uz.name : zz.includes(uz.name)))
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);