export const id = 130;
export const ids = [130];
export const modules = {
  6352: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      loadShaderPackTextures: () => lz,
      shaderPackTextures: () => Mz
    });
    var Ez = bz(6307);
    let nz = null,
      iz = null;

    function lz() {
      return iz ??= Promise.all([bz.e(69), bz.e(198)]).then((() => bz(39645))).then((zz => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: uz,
          textureNameToIndex: bz,
          textureAnimationData: iz
        } = zz;
        return nz ??= (0, Ez.m)(bz, iz, uz), nz
      })), iz
    }

    function Mz() {
      if (null === nz) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return nz
    }
  },
  6307: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => lz,
      e: () => iz,
      i: () => Ez,
      m: () => Zz,
      n: () => Oz,
      q: () => nz,
      r: () => tz,
      s: () => Hz,
      u: () => pz
    });
    const Ez = 5;

    function nz(zz) {
      return zz === Ez
    }
    const iz = 262144,
      lz = 256,
      Mz = 256;

    function tz(zz) {
      if ("object" !== typeof zz || null === zz || Array.isArray(zz)) return "The pack has no files.";
      const uz = [];
      for (const [bz, Ez] of Object.entries(zz)) {
        if ("string" !== typeof Ez) return `${bz} isn't text.`;
        uz.push({
          path: bz,
          source: Ez
        })
      }
      return uz.sort(((zz, uz) => Oz(zz.path, uz.path))),
        function(zz) {
          if (0 === zz.length) return "The pack has no .wgsl files.";
          if (zz.length > lz) return `The pack has more than ${lz} .wgsl files.`;
          const uz = new Set;
          for (const {
              path: bz
            }
            of zz) {
            const zz = dz(bz);
            if (null !== zz) return zz;
            if (uz.has(bz)) return `The pack has two files at ${bz}.`;
            uz.add(bz)
          }
          return pz(zz) > iz ? `The pack's .wgsl files are over ${iz/1024} KB in total.` : null
        }(uz) ?? uz
    }

    function Hz(zz) {
      const uz = {};
      for (const bz of zz) uz[bz.path] = bz.source;
      return uz
    }

    function Oz(zz, uz) {
      return zz < uz ? -1 : zz > uz ? 1 : 0
    }

    function pz(zz) {
      const uz = new TextEncoder;
      let bz = 0;
      for (const {
          source: Ez
        }
        of zz) bz += uz.encode(Ez).byteLength;
      return bz
    }

    function dz(zz) {
      if (!zz.toLowerCase().endsWith(".wgsl")) return `${zz} isn't a .wgsl file.`;
      if (zz.length > Mz) return `A file path is over ${Mz} characters.`;
      if (zz.includes("\\") || /[\u0000-\u001f]/.test(zz)) return `${zz} isn't a valid file path.`;
      return zz.split("/").some((zz => "" === zz || "." === zz || ".." === zz)) ? `${zz} isn't a valid file path.` : null
    }
    const Fz = /^(.*)\[rot\[([1-4])$/;

    function Zz(zz, uz) {
      let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const Ez = new Map;
      uz.forEach(((zz, uz) => {
        let {
          numAnimStates: bz,
          animStartIdx: nz
        } = zz;
        for (let iz = 1; iz < bz; iz++) Ez.set(nz + iz - 1, uz)
      }));
      const nz = Object.entries(zz),
        iz = new Map;
      for (const [Rz, Kz] of nz) {
        const zz = Fz.exec(Rz);
        "1" === zz?.[2] && iz.set(zz[1], Kz + 1)
      }
      const lz = zz => {
          const uz = Fz.exec(zz);
          return uz && iz.has(uz[1]) ? {
            root: uz[1],
            rotation: Number(uz[2]) - 1
          } : null
        },
        Mz = new Set(nz.map((zz => {
          let [uz] = zz;
          return lz(uz)?.root ?? uz
        }))),
        tz = (zz, bz) => {
          const Ez = zz.replace(/_?0$/, "");
          return (uz[bz]?.numAnimStates ?? 0) > 1 && !Mz.has(Ez) ? Ez : zz
        },
        Hz = new Map;
      for (const [Fz, Rz] of nz) Hz.set(Rz, tz(lz(Fz)?.root ?? Fz, Rz));
      const Oz = nz.reduce(((zz, uz) => {
          let [, bz] = uz;
          return Math.max(zz, bz + 1)
        }), 0),
        pz = Array.from({
          length: Oz
        }, ((zz, uz) => ({
          id: uz + 1,
          rotation: 0
        }))),
        dz = new Map,
        Zz = new Map;
      for (const [Fz, Rz] of nz) {
        const zz = lz(Fz),
          uz = Ez.get(Rz);
        if (void 0 !== uz) {
          const bz = Hz.get(uz);
          Zz.set(Fz, {
            name: Fz,
            texture: bz,
            kind: "frame"
          }), zz && !Zz.has(zz.root) && Zz.set(zz.root, {
            name: zz.root,
            texture: bz,
            kind: "frame"
          });
          continue
        }
        const bz = Hz.get(Rz),
          nz = zz?.root ?? Fz;
        if (bz !== nz && Zz.set(nz, {
            name: nz,
            texture: bz,
            kind: "frame"
          }), zz) {
          const uz = iz.get(zz.root);
          pz[Rz] = {
            id: uz,
            rotation: zz.rotation
          }, dz.set(bz, uz), Zz.set(Fz, {
            name: Fz,
            texture: bz,
            kind: "rotation"
          })
        } else dz.set(bz, Rz + 1)
      }
      for (const Fz of dz.keys()) Zz.delete(Fz);
      for (const [Fz, Rz] of bz) {
        const zz = dz.get(Rz);
        void 0 === zz || dz.has(Fz) || (dz.set(Fz, zz), Zz.delete(Fz))
      }
      return {
        named: [...dz].sort(((zz, uz) => {
          let [bz] = zz, [Ez] = uz;
          return bz < Ez ? -1 : bz > Ez ? 1 : 0
        })).map((zz => {
          let [uz, bz] = zz;
          return {
            name: uz,
            id: bz
          }
        })),
        aliases: [...Zz.values()],
        layers: pz
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);