export const id = 194;
export const ids = [194];
export const modules = {
  8916: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      packDisplayName: () => wz,
      packModelMessage: () => Dz,
      packModelSummary: () => Hz,
      refusedPackModels: () => gz
    });
    var Fz = sz(8924),
      Wz = sz(8930);
    const Xz = "DRACO",
      Oz = 0,
      oz = 1,
      vz = 0,
      Uz = 1,
      Kz = 32768;

    function uz(zz) {
      const tz = new DataView(zz.buffer, zz.byteOffset, zz.byteLength);
      let sz = 0;
      const Fz = () => {
          if (sz >= zz.byteLength) throw new RangeError("past the stream");
          return zz[sz++]
        },
        Wz = () => {
          if (sz + 4 > zz.byteLength) throw new RangeError("past the stream");
          const Fz = tz.getUint32(sz, !0);
          return sz += 4, Fz
        },
        uz = () => {
          let zz = 0;
          for (let tz = 0; tz < 35; tz += 7) {
            const sz = Fz();
            if (zz += (127 & sz) * 2 ** tz, 0 === (128 & sz)) return zz
          }
          throw new RangeError("varint too long")
        };
      try {
        for (let zz = 0; zz < Xz.length; zz++)
          if (Fz() !== Xz.charCodeAt(zz)) return null;
        const tz = Fz(),
          Nz = Fz(),
          bz = Fz(),
          wz = Fz(),
          Dz = Fz() | Fz() << 8;
        if (2 !== tz) return null;
        0 !== (Dz & Kz) && function(zz, tz, sz) {
          const Fz = () => {
              tz(sz())
            },
            Wz = () => {
              let sz = 1,
                Wz = !0;
              for (; sz > 0;) {
                sz--, Wz || Fz(), Wz = !1;
                const Xz = zz();
                for (let sz = 0; sz < Xz; sz++) Fz(), tz(zz());
                sz += zz()
              }
            },
            Xz = zz();
          for (let Oz = 0; Oz < Xz; Oz++) zz(), Wz();
          Wz()
        }(uz, (tz => {
          if (sz + tz > zz.byteLength) throw new RangeError("past the stream");
          sz += tz
        }), Fz);
        const gz = Nz < 2 ? Wz : uz;
        if (bz === Oz) return {
          faces: 0,
          vertices: Wz()
        };
        if (bz !== oz) return null;
        if (wz === vz) {
          return {
            faces: gz(),
            vertices: gz()
          }
        }
        if (wz !== Uz) return null;
        Fz(), Nz < 2 && uz();
        const Hz = uz();
        return {
          faces: uz(),
          vertices: Hz
        }
      } catch {
        return null
      }
    }

    function Nz(zz, tz, sz) {
      var Fz, Wz;
      if (null === (Fz = null === (Wz = zz.extensionsUsed) || void 0 === Wz ? void 0 : Wz.includes("KHR_draco_mesh_compression")) || void 0 === Fz || !Fz) return null;
      for (const wz of null !== (Xz = zz.meshes) && void 0 !== Xz ? Xz : []) {
        var Xz;
        for (const Fz of wz.primitives) {
          var Oz, oz, vz, Uz, Kz, Nz;
          const Wz = null === (Oz = Fz.extensions) || void 0 === Oz ? void 0 : Oz.KHR_draco_mesh_compression;
          if ("object" !== typeof Wz || null === Wz) continue;
          const Xz = null === (oz = zz.bufferViews) || void 0 === oz ? void 0 : oz[Wz.bufferView];
          if (null === tz || void 0 === Xz) return bz;
          const wz = null !== (vz = Xz.byteOffset) && void 0 !== vz ? vz : 0,
            Dz = uz(tz.subarray(wz, wz + Xz.byteLength));
          if (null === Dz && !sz) continue;
          const gz = null !== (Uz = zz.accessors) && void 0 !== Uz ? Uz : [],
            Hz = null === (Kz = gz[Fz.attributes.POSITION]) || void 0 === Kz ? void 0 : Kz.count,
            Bz = void 0 === Fz.indices ? 0 : null === (Nz = gz[Fz.indices]) || void 0 === Nz ? void 0 : Nz.count;
          if (null === Dz || void 0 === Hz || void 0 === Bz || 3 * Dz.faces !== Bz || Dz.vertices > Hz) return bz
        }
      }
      return null
    }
    const bz = "has a Draco stream whose counts don't match its accessors";

    function wz(zz) {
      var tz;
      return null !== (tz = zz.name) && void 0 !== tz ? tz : zz.fromFolderName || zz.id
    }

    function Dz(zz, tz, sz) {
      return `Texture pack "${zz}": model "${tz}" was not loaded because it ${sz}. The default model is used instead.`
    }

    function gz(zz, tz, sz) {
      let {
        strictDraco: Xz = !1
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const Oz = {};
      for (const [oz, vz] of Object.entries(tz)) {
        let tz;
        if (vz.startsWith("data:")) try {
          const zz = new Uint8Array((0, Wz.o)(vz));
          if (tz = (0, Fz.c)(zz), null === tz) {
            const {
              json: sz,
              bin: Fz
            } = (0, Wz.y)(zz);
            tz = Nz(sz, Fz, Xz)
          }
        } catch {
          tz = "is not a binary glTF 2.0 file"
        } else tz = "loads data from outside the file";
        tz && (Oz[oz] = tz, sz && console.warn(Dz(zz, oz, tz)))
      }
      return Oz
    }

    function Hz(zz, tz) {
      const sz = Object.keys(tz);
      if (0 === sz.length) return null;
      if (1 === sz.length) return Dz(zz, sz[0], tz[sz[0]]);
      const Fz = sz.map((zz => `"${zz}" ${tz[zz]}`)).join("; ");
      return `Texture pack "${zz}": ${sz.length} models were not loaded (${Fz}). The default models are used instead.`
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);