export const id = 130;
export const ids = [130];
export const modules = {
  6211: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      loadShaderPackTextures: () => Oz,
      shaderPackTextures: () => oz
    });
    var Fz = sz(6161);
    let Wz = null,
      Xz = null;

    function Oz() {
      return Xz ??= Promise.all([sz.e(69), sz.e(198)]).then((() => sz(39630))).then((zz => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: tz,
          textureNameToIndex: sz,
          textureAnimationData: Xz
        } = zz;
        return Wz ??= (0, Fz.i)(sz, Xz, tz), Wz
      })), Xz
    }

    function oz() {
      if (null === Wz) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return Wz
    }
  },
  6161: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Oz,
      d: () => Xz,
      h: () => Fz,
      i: () => wz,
      l: () => Kz,
      p: () => Wz,
      s: () => vz,
      u: () => Uz,
      y: () => uz
    });
    const Fz = 5;

    function Wz(zz) {
      return zz === Fz
    }
    const Xz = 262144,
      Oz = 256,
      oz = 256;

    function vz(zz) {
      if ("object" !== typeof zz || null === zz || Array.isArray(zz)) return "The pack has no files.";
      const tz = [];
      for (const [sz, Fz] of Object.entries(zz)) {
        if ("string" !== typeof Fz) return `${sz} isn't text.`;
        tz.push({
          path: sz,
          source: Fz
        })
      }
      return tz.sort(((zz, tz) => Kz(zz.path, tz.path))),
        function(zz) {
          if (0 === zz.length) return "The pack has no .wgsl files.";
          if (zz.length > Oz) return `The pack has more than ${Oz} .wgsl files.`;
          const tz = new Set;
          for (const {
              path: sz
            }
            of zz) {
            const zz = Nz(sz);
            if (null !== zz) return zz;
            if (tz.has(sz)) return `The pack has two files at ${sz}.`;
            tz.add(sz)
          }
          return uz(zz) > Xz ? `The pack's .wgsl files are over ${Xz/1024} KB in total.` : null
        }(tz) ?? tz
    }

    function Uz(zz) {
      const tz = {};
      for (const sz of zz) tz[sz.path] = sz.source;
      return tz
    }

    function Kz(zz, tz) {
      return zz < tz ? -1 : zz > tz ? 1 : 0
    }

    function uz(zz) {
      const tz = new TextEncoder;
      let sz = 0;
      for (const {
          source: Fz
        }
        of zz) sz += tz.encode(Fz).byteLength;
      return sz
    }

    function Nz(zz) {
      if (!zz.toLowerCase().endsWith(".wgsl")) return `${zz} isn't a .wgsl file.`;
      if (zz.length > oz) return `A file path is over ${oz} characters.`;
      if (zz.includes("\\") || /[\u0000-\u001f]/.test(zz)) return `${zz} isn't a valid file path.`;
      return zz.split("/").some((zz => "" === zz || "." === zz || ".." === zz)) ? `${zz} isn't a valid file path.` : null
    }
    const bz = /^(.*)\[rot\[([1-4])$/;

    function wz(zz, tz) {
      let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const Fz = new Map;
      tz.forEach(((zz, tz) => {
        let {
          numAnimStates: sz,
          animStartIdx: Wz
        } = zz;
        for (let Xz = 1; Xz < sz; Xz++) Fz.set(Wz + Xz - 1, tz)
      }));
      const Wz = Object.entries(zz),
        Xz = new Map;
      for (const [Dz, gz] of Wz) {
        const zz = bz.exec(Dz);
        "1" === zz?.[2] && Xz.set(zz[1], gz + 1)
      }
      const Oz = zz => {
          const tz = bz.exec(zz);
          return tz && Xz.has(tz[1]) ? {
            root: tz[1],
            rotation: Number(tz[2]) - 1
          } : null
        },
        oz = new Set(Wz.map((zz => {
          let [tz] = zz;
          return Oz(tz)?.root ?? tz
        }))),
        vz = (zz, sz) => {
          const Fz = zz.replace(/_?0$/, "");
          return (tz[sz]?.numAnimStates ?? 0) > 1 && !oz.has(Fz) ? Fz : zz
        },
        Uz = new Map;
      for (const [bz, Dz] of Wz) Uz.set(Dz, vz(Oz(bz)?.root ?? bz, Dz));
      const Kz = Wz.reduce(((zz, tz) => {
          let [, sz] = tz;
          return Math.max(zz, sz + 1)
        }), 0),
        uz = Array.from({
          length: Kz
        }, ((zz, tz) => ({
          id: tz + 1,
          rotation: 0
        }))),
        Nz = new Map,
        wz = new Map;
      for (const [bz, Dz] of Wz) {
        const zz = Oz(bz),
          tz = Fz.get(Dz);
        if (void 0 !== tz) {
          const sz = Uz.get(tz);
          wz.set(bz, {
            name: bz,
            texture: sz,
            kind: "frame"
          }), zz && !wz.has(zz.root) && wz.set(zz.root, {
            name: zz.root,
            texture: sz,
            kind: "frame"
          });
          continue
        }
        const sz = Uz.get(Dz),
          Wz = zz?.root ?? bz;
        if (sz !== Wz && wz.set(Wz, {
            name: Wz,
            texture: sz,
            kind: "frame"
          }), zz) {
          const tz = Xz.get(zz.root);
          uz[Dz] = {
            id: tz,
            rotation: zz.rotation
          }, Nz.set(sz, tz), wz.set(bz, {
            name: bz,
            texture: sz,
            kind: "rotation"
          })
        } else Nz.set(sz, Dz + 1)
      }
      for (const bz of Nz.keys()) wz.delete(bz);
      for (const [bz, Dz] of sz) {
        const zz = Nz.get(Dz);
        void 0 === zz || Nz.has(bz) || (Nz.set(bz, zz), wz.delete(bz))
      }
      return {
        named: [...Nz].sort(((zz, tz) => {
          let [sz] = zz, [Fz] = tz;
          return sz < Fz ? -1 : sz > Fz ? 1 : 0
        })).map((zz => {
          let [tz, sz] = zz;
          return {
            name: tz,
            id: sz
          }
        })),
        aliases: [...wz.values()],
        layers: uz
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);