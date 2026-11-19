export const id = 194;
export const ids = [194];
export const modules = {
  9052: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      packDisplayName: () => Zz,
      packModelMessage: () => Rz,
      packModelSummary: () => wz,
      refusedPackModels: () => Kz
    });
    var Ez = bz(9058),
      nz = bz(9063);
    const iz = "DRACO",
      lz = 0,
      Mz = 1,
      tz = 0,
      Hz = 1,
      Oz = 32768;

    function pz(zz) {
      const uz = new DataView(zz.buffer, zz.byteOffset, zz.byteLength);
      let bz = 0;
      const Ez = () => {
          if (bz >= zz.byteLength) throw new RangeError("past the stream");
          return zz[bz++]
        },
        nz = () => {
          if (bz + 4 > zz.byteLength) throw new RangeError("past the stream");
          const Ez = uz.getUint32(bz, !0);
          return bz += 4, Ez
        },
        pz = () => {
          let zz = 0;
          for (let uz = 0; uz < 35; uz += 7) {
            const bz = Ez();
            if (zz += (127 & bz) * 2 ** uz, 0 === (128 & bz)) return zz
          }
          throw new RangeError("varint too long")
        };
      try {
        for (let zz = 0; zz < iz.length; zz++)
          if (Ez() !== iz.charCodeAt(zz)) return null;
        const uz = Ez(),
          dz = Ez(),
          Fz = Ez(),
          Zz = Ez(),
          Rz = Ez() | Ez() << 8;
        if (2 !== uz) return null;
        0 !== (Rz & Oz) && function(zz, uz, bz) {
          const Ez = () => {
              uz(bz())
            },
            nz = () => {
              let bz = 1,
                nz = !0;
              for (; bz > 0;) {
                bz--, nz || Ez(), nz = !1;
                const iz = zz();
                for (let bz = 0; bz < iz; bz++) Ez(), uz(zz());
                bz += zz()
              }
            },
            iz = zz();
          for (let lz = 0; lz < iz; lz++) zz(), nz();
          nz()
        }(pz, (uz => {
          if (bz + uz > zz.byteLength) throw new RangeError("past the stream");
          bz += uz
        }), Ez);
        const Kz = dz < 2 ? nz : pz;
        if (Fz === lz) return {
          faces: 0,
          vertices: nz()
        };
        if (Fz !== Mz) return null;
        if (Zz === tz) {
          return {
            faces: Kz(),
            vertices: Kz()
          }
        }
        if (Zz !== Hz) return null;
        Ez(), dz < 2 && pz();
        const wz = pz();
        return {
          faces: pz(),
          vertices: wz
        }
      } catch {
        return null
      }
    }

    function dz(zz, uz, bz) {
      var Ez, nz;
      if (null === (Ez = null === (nz = zz.extensionsUsed) || void 0 === nz ? void 0 : nz.includes("KHR_draco_mesh_compression")) || void 0 === Ez || !Ez) return null;
      for (const Zz of null !== (iz = zz.meshes) && void 0 !== iz ? iz : []) {
        var iz;
        for (const Ez of Zz.primitives) {
          var lz, Mz, tz, Hz, Oz, dz;
          const nz = null === (lz = Ez.extensions) || void 0 === lz ? void 0 : lz.KHR_draco_mesh_compression;
          if ("object" !== typeof nz || null === nz) continue;
          const iz = null === (Mz = zz.bufferViews) || void 0 === Mz ? void 0 : Mz[nz.bufferView];
          if (null === uz || void 0 === iz) return Fz;
          const Zz = null !== (tz = iz.byteOffset) && void 0 !== tz ? tz : 0,
            Rz = pz(uz.subarray(Zz, Zz + iz.byteLength));
          if (null === Rz && !bz) continue;
          const Kz = null !== (Hz = zz.accessors) && void 0 !== Hz ? Hz : [],
            wz = null === (Oz = Kz[Ez.attributes.POSITION]) || void 0 === Oz ? void 0 : Oz.count,
            Xz = void 0 === Ez.indices ? 0 : null === (dz = Kz[Ez.indices]) || void 0 === dz ? void 0 : dz.count;
          if (null === Rz || void 0 === wz || void 0 === Xz || 3 * Rz.faces !== Xz || Rz.vertices > wz) return Fz
        }
      }
      return null
    }
    const Fz = "has a Draco stream whose counts don't match its accessors";

    function Zz(zz) {
      var uz;
      return null !== (uz = zz.name) && void 0 !== uz ? uz : zz.fromFolderName || zz.id
    }

    function Rz(zz, uz, bz) {
      return `Texture pack "${zz}": model "${uz}" was not loaded because it ${bz}. The default model is used instead.`
    }

    function Kz(zz, uz, bz) {
      let {
        strictDraco: iz = !1
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const lz = {};
      for (const [Mz, tz] of Object.entries(uz)) {
        let uz;
        if (tz.startsWith("data:")) try {
          const zz = new Uint8Array((0, nz.q)(tz));
          if (uz = (0, Ez.b)(zz), null === uz) {
            const {
              json: bz,
              bin: Ez
            } = (0, nz.z)(zz);
            uz = dz(bz, Ez, iz)
          }
        } catch {
          uz = "is not a binary glTF 2.0 file"
        } else uz = "loads data from outside the file";
        uz && (lz[Mz] = uz, bz && console.warn(Rz(zz, Mz, uz)))
      }
      return lz
    }

    function wz(zz, uz) {
      const bz = Object.keys(uz);
      if (0 === bz.length) return null;
      if (1 === bz.length) return Rz(zz, bz[0], uz[bz[0]]);
      const Ez = bz.map((zz => `"${zz}" ${uz[zz]}`)).join("; ");
      return `Texture pack "${zz}": ${bz.length} models were not loaded (${Ez}). The default models are used instead.`
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);