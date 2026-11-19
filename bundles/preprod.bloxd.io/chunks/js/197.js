export const id = 197;
export const ids = [197];
export const modules = {
  37204: (zz, uz, bz) => {
    var Ez = bz(37213);

    function nz(zz) {
      for (var uz, bz, nz = 0, iz = zz.length, lz = 0; lz < zz.length;) {
        for (uz = zz[lz], bz = 0; lz < iz && zz[lz] === uz;) ++lz, ++bz;
        nz += Ez.log2(bz) / 7 | 0, nz += Ez.log2(uz >>> 0) / 7 | 0, nz += 2
      }
      return nz
    }
    uz.size = nz, uz.encode = function(zz, uz) {
      uz || (uz = new Uint8Array(nz(zz)));
      for (var bz, Ez, iz = 0, lz = uz.length, Mz = 0; Mz < zz.length;) {
        for (bz = zz[Mz], Ez = 0; Mz < zz.length && zz[Mz] === bz;) ++Mz, ++Ez;
        for (; iz < lz && Ez >= 128;) uz[iz++] = 128 + (127 & Ez), Ez >>>= 7;
        if (iz >= lz) throw new Error("RLE buffer overflow");
        for (uz[iz++] = Ez, bz >>>= 0; iz < lz && bz >= 128;) uz[iz++] = 128 + (127 & bz), bz >>>= 7;
        if (iz >= lz) throw new Error("RLE buffer overflow");
        uz[iz++] = bz
      }
      return uz
    }, uz.decode = function(zz, uz) {
      for (var bz, Ez, nz, iz, lz = uz.length, Mz = zz.length, tz = 0, Hz = 0; Hz < Mz;) {
        for (bz = 0, Ez = 0; Hz < Mz && zz[Hz] >= 128;) bz += (127 & zz[Hz++]) << Ez, Ez += 7;
        if (bz += zz[Hz++] << Ez, Hz >= Mz) throw new Error("RLE buffer underrun");
        if (tz + bz > lz) throw new Error("Chunk buffer overflow");
        for (nz = 0, Ez = 0; Hz < Mz && zz[Hz] >= 128;) nz += (127 & zz[Hz++]) << Ez, Ez += 7;
        if (Hz >= Mz) throw new Error("RLE buffer underrun");
        for (nz += zz[Hz++] << Ez, iz = 0; iz < bz; ++iz) uz[tz++] = nz
      }
      return uz
    }
  },
  37213: (zz, uz) => {
    function bz(zz) {
      var uz = 32;
      return (zz &= -zz) && uz--, 65535 & zz && (uz -= 16), 16711935 & zz && (uz -= 8), 252645135 & zz && (uz -= 4), 858993459 & zz && (uz -= 2), 1431655765 & zz && (uz -= 1), uz
    }
    uz.INT_BITS = 32, uz.INT_MAX = 2147483647, uz.INT_MIN = -1 << 31, uz.sign = function(zz) {
      return (zz > 0) - (zz < 0)
    }, uz.abs = function(zz) {
      var uz = zz >> 31;
      return (zz ^ uz) - uz
    }, uz.min = function(zz, uz) {
      return uz ^ (zz ^ uz) & -(zz < uz)
    }, uz.max = function(zz, uz) {
      return zz ^ (zz ^ uz) & -(zz < uz)
    }, uz.isPow2 = function(zz) {
      return !(zz & zz - 1) && !!zz
    }, uz.log2 = function(zz) {
      var uz, bz;
      return uz = (zz > 65535) << 4, uz |= bz = ((zz >>>= uz) > 255) << 3, uz |= bz = ((zz >>>= bz) > 15) << 2, (uz |= bz = ((zz >>>= bz) > 3) << 1) | (zz >>>= bz) >> 1
    }, uz.log10 = function(zz) {
      return zz >= 1e9 ? 9 : zz >= 1e8 ? 8 : zz >= 1e7 ? 7 : zz >= 1e6 ? 6 : zz >= 1e5 ? 5 : zz >= 1e4 ? 4 : zz >= 1e3 ? 3 : zz >= 100 ? 2 : zz >= 10 ? 1 : 0
    }, uz.popCount = function(zz) {
      return 16843009 * ((zz = (858993459 & (zz -= zz >>> 1 & 1431655765)) + (zz >>> 2 & 858993459)) + (zz >>> 4) & 252645135) >>> 24
    }, uz.countTrailingZeros = bz, uz.nextPow2 = function(zz) {
      return zz += 0 === zz, --zz, zz |= zz >>> 1, zz |= zz >>> 2, zz |= zz >>> 4, zz |= zz >>> 8, (zz |= zz >>> 16) + 1
    }, uz.prevPow2 = function(zz) {
      return zz |= zz >>> 1, zz |= zz >>> 2, zz |= zz >>> 4, zz |= zz >>> 8, (zz |= zz >>> 16) - (zz >>> 1)
    }, uz.parity = function(zz) {
      return zz ^= zz >>> 16, zz ^= zz >>> 8, zz ^= zz >>> 4, 27030 >>> (zz &= 15) & 1
    };
    var Ez = new Array(256);
    ! function(zz) {
      for (var uz = 0; uz < 256; ++uz) {
        var bz = uz,
          Ez = uz,
          nz = 7;
        for (bz >>>= 1; bz; bz >>>= 1) Ez <<= 1, Ez |= 1 & bz, --nz;
        zz[uz] = Ez << nz & 255
      }
    }(Ez), uz.reverse = function(zz) {
      return Ez[255 & zz] << 24 | Ez[zz >>> 8 & 255] << 16 | Ez[zz >>> 16 & 255] << 8 | Ez[zz >>> 24 & 255]
    }, uz.interleave2 = function(zz, uz) {
      return (zz = 1431655765 & ((zz = 858993459 & ((zz = 252645135 & ((zz = 16711935 & ((zz &= 65535) | zz << 8)) | zz << 4)) | zz << 2)) | zz << 1)) | (uz = 1431655765 & ((uz = 858993459 & ((uz = 252645135 & ((uz = 16711935 & ((uz &= 65535) | uz << 8)) | uz << 4)) | uz << 2)) | uz << 1)) << 1
    }, uz.deinterleave2 = function(zz, uz) {
      return (zz = 65535 & ((zz = 16711935 & ((zz = 252645135 & ((zz = 858993459 & ((zz = zz >>> uz & 1431655765) | zz >>> 1)) | zz >>> 2)) | zz >>> 4)) | zz >>> 16)) << 16 >> 16
    }, uz.interleave3 = function(zz, uz, bz) {
      return zz = 1227133513 & ((zz = 3272356035 & ((zz = 251719695 & ((zz = 4278190335 & ((zz &= 1023) | zz << 16)) | zz << 8)) | zz << 4)) | zz << 2), (zz |= (uz = 1227133513 & ((uz = 3272356035 & ((uz = 251719695 & ((uz = 4278190335 & ((uz &= 1023) | uz << 16)) | uz << 8)) | uz << 4)) | uz << 2)) << 1) | (bz = 1227133513 & ((bz = 3272356035 & ((bz = 251719695 & ((bz = 4278190335 & ((bz &= 1023) | bz << 16)) | bz << 8)) | bz << 4)) | bz << 2)) << 2
    }, uz.deinterleave3 = function(zz, uz) {
      return (zz = 1023 & ((zz = 4278190335 & ((zz = 251719695 & ((zz = 3272356035 & ((zz = zz >>> uz & 1227133513) | zz >>> 2)) | zz >>> 4)) | zz >>> 8)) | zz >>> 16)) << 22 >> 22
    }, uz.nextCombination = function(zz) {
      var uz = zz | zz - 1;
      return uz + 1 | (~uz & -~uz) - 1 >>> bz(zz) + 1
    }
  },
  38989: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      emptyColumnHeight: () => sz,
      loadHeatmapSchematic: () => rz,
      readSchematicBlocks: () => oz
    });
    var Ez = bz(3527),
      nz = bz.n(Ez),
      iz = bz(3509),
      lz = bz(37204),
      Mz = bz(195),
      tz = bz(9078);
    const Hz = [{
        name: "x",
        type: "int"
      }, {
        name: "y",
        type: "int"
      }, {
        name: "z",
        type: "int"
      }],
      Oz = [{
        name: "name",
        type: "string"
      }, {
        name: "startOffset",
        type: {
          type: "record",
          fields: Hz
        }
      }, {
        name: "dimensions",
        type: {
          type: "record",
          fields: Hz
        }
      }, {
        name: "chunkData",
        type: {
          type: "array",
          items: {
            type: "record",
            fields: [...Hz, {
              name: "rle",
              type: "bytes"
            }]
          }
        }
      }],
      pz = nz().Type.forSchema({
        type: "record",
        fields: Oz
      }),
      dz = nz().Type.forSchema({
        type: "record",
        fields: [...Oz, {
          name: "blockData",
          type: {
            type: "array",
            items: {
              type: "record",
              fields: [...Hz, {
                name: "data",
                type: "bytes"
              }]
            }
          }
        }, {
          name: "pasteOffset",
          type: {
            type: "record",
            fields: Hz
          }
        }]
      }),
      Fz = 2,
      Zz = 6,
      Rz = {
        Water: [63, 118, 228],
        Lava: [232, 110, 30]
      },
      Kz = [150, 150, 150],
      wz = 16,
      Xz = 4096,
      fz = Mz.e.IZ,
      sz = -2147483648;
    async function rz(zz) {
      const uz = await oz(new Uint8Array(await zz.arrayBuffer()), await async function() {
        const {
          averageColors: zz
        } = await bz.e(201).then((() => bz(33750))), uz = new Map;
        return bz => {
          var Ez, nz, iz, lz, Mz;
          const Hz = uz.get(bz);
          if (void 0 !== Hz) return Hz;
          const Oz = null !== (Ez = null === (nz = tz.k[bz]) || void 0 === nz ? void 0 : nz.name) && void 0 !== Ez ? Ez : "",
            pz = null !== (iz = zz[Oz]) && void 0 !== iz ? iz : zz[Oz.split("|")[0]],
            dz = Rz[Oz.split("|")[0]],
            Fz = null !== (lz = null !== (Mz = null === pz || void 0 === pz ? void 0 : pz[0]) && void 0 !== Mz ? Mz : dz) && void 0 !== lz ? lz : 0 === (null === pz || void 0 === pz ? void 0 : pz.length) ? null : Kz;
          return uz.set(bz, Fz), Fz
        }
      }());
      return {
        surface: uz.surface,
        topDown: vz(uz.columnTops)
      }
    }
    async function oz(zz, uz) {
      var bz;
      if (zz.byteLength < 4) throw new Error("The file is too short to be a schematic.");
      const Ez = new DataView(zz.buffer, zz.byteOffset, zz.byteLength).getUint32(0, !0);
      if (Ez > Zz) throw new Error("The file isn't a schematic this version of Bloxd can read.");
      const nz = (Ez >= Fz ? dz : pz).decode(iz.gZ.from(zz.subarray(4)), 0).value;
      if (!nz) throw new Error("The file isn't a schematic.");
      if (0 === nz.chunkData.length) throw new Error("The schematic has no blocks in it.");
      const Mz = null !== (bz = nz.pasteOffset) && void 0 !== bz ? bz : {
          x: 0,
          y: 0,
          z: 0
        },
        tz = [Mz.x, Mz.y, Mz.z].map((zz => Math.floor(zz / fz))),
        Hz = nz.chunkData.map((zz => ({
          x: zz.x + tz[0],
          y: zz.y + tz[1],
          z: zz.z + tz[2],
          rle: zz.rle
        }))),
        Oz = new Map;
      for (const [iz, pz] of Hz.entries()) {
        const zz = new Uint16Array(fz ** 3);
        lz.decode(pz.rle, zz), Oz.set(`${pz.x},${pz.y},${pz.z}`, zz), iz % wz === wz - 1 && await xz()
      }
      const Rz = (zz, uz, bz) => zz * fz * fz + uz * fz + bz,
        Kz = (zz, uz, bz) => {
          var Ez, nz;
          const iz = Math.floor(zz / fz),
            lz = Math.floor(uz / fz),
            Mz = Math.floor(bz / fz);
          return null !== (Ez = null === (nz = Oz.get(`${iz},${lz},${Mz}`)) || void 0 === nz ? void 0 : nz[Rz(zz - iz * fz, uz - lz * fz, bz - Mz * fz)]) && void 0 !== Ez ? Ez : 0
        },
        Xz = new Map,
        rz = [],
        oz = [];
      for (const [iz, lz] of Hz.entries()) {
        const zz = Oz.get(`${lz.x},${lz.y},${lz.z}`),
          bz = [lz.x * fz, lz.y * fz, lz.z * fz],
          Ez = (uz, Ez, nz) => uz < 0 || Ez < 0 || nz < 0 || uz >= fz || Ez >= fz || nz >= fz ? Kz(bz[0] + uz, bz[1] + Ez, bz[2] + nz) : zz[Rz(uz, Ez, nz)],
          nz = `${lz.x},${lz.z}`;
        let Mz = Xz.get(nz);
        void 0 === Mz && (Mz = {
          chunkX: lz.x,
          chunkZ: lz.z,
          heights: new Int32Array(fz * fz).fill(sz),
          colours: new Uint8Array(fz * fz * 3)
        }, Xz.set(nz, Mz));
        for (let iz = 0; iz < fz; iz++)
          for (let nz = 0; nz < fz; nz++)
            for (let lz = 0; lz < fz; lz++) {
              const tz = zz[Rz(iz, nz, lz)];
              if (0 === tz) continue;
              const Hz = bz[0] + iz,
                Oz = bz[1] + nz,
                pz = bz[2] + lz,
                dz = uz(tz);
              if (null === dz) continue;
              const Fz = lz * fz + iz;
              Oz > Mz.heights[Fz] && (Mz.heights[Fz] = Oz, Mz.colours.set(dz, 3 * Fz));
              !Nz(tz) && (Nz(Ez(iz + 1, nz, lz)) || Nz(Ez(iz - 1, nz, lz)) || Nz(Ez(iz, nz + 1, lz)) || Nz(Ez(iz, nz - 1, lz)) || Nz(Ez(iz, nz, lz + 1)) || Nz(Ez(iz, nz, lz - 1))) && (rz.push(Hz, Oz, pz), oz.push(dz[0], dz[1], dz[2]))
            }
        iz % wz === wz - 1 && await xz()
      }
      if (0 === rz.length) throw new Error("The schematic has no blocks in it.");
      return {
        name: nz.name,
        surface: {
          positions: Int32Array.from(rz),
          colours: Uint8Array.from(oz),
          count: rz.length / 3
        },
        columnTops: [...Xz.values()]
      }
    }

    function Nz(zz) {
      if (0 === zz) return !0;
      const uz = tz.k[zz];
      return void 0 === uz || uz.hF || uz.transTex || !1 === uz.solid
    }

    function vz(zz) {
      let uz = 1 / 0,
        bz = -1 / 0,
        Ez = 1 / 0,
        nz = -1 / 0;
      for (const {
          chunkX: Zz,
          chunkZ: Rz,
          heights: Kz
        }
        of zz) Kz.forEach(((zz, iz) => {
        if (zz === sz) return;
        const lz = Zz * fz + iz % fz,
          Mz = Rz * fz + Math.floor(iz / fz);
        uz = Math.min(uz, lz), bz = Math.max(bz, lz), Ez = Math.min(Ez, Mz), nz = Math.max(nz, Mz)
      }));
      const iz = bz - uz + 1,
        lz = nz - Ez + 1,
        Mz = Math.max(1, Math.ceil(iz / Xz), Math.ceil(lz / Xz)),
        tz = Math.ceil(iz / Mz),
        Hz = Math.ceil(lz / Mz),
        Oz = document.createElement("canvas");
      Oz.width = tz, Oz.height = Hz;
      const pz = Oz.getContext("2d");
      if (!pz) throw new Error("Couldn't draw the schematic from above.");
      const dz = pz.createImageData(tz, Hz),
        Fz = new Int32Array(tz * Hz).fill(sz);
      for (const {
          chunkX: Zz,
          chunkZ: Rz,
          heights: Kz,
          colours: wz
        }
        of zz) Kz.forEach(((zz, uz) => {
        const nz = Zz * fz + uz % fz,
          iz = Rz * fz + Math.floor(uz / fz),
          lz = Math.floor((iz - Ez) / Mz) * tz + Math.floor((bz - nz) / Mz);
        zz === sz || zz <= Fz[lz] || (Fz[lz] = zz, dz.data.set(wz.subarray(3 * uz, 3 * uz + 3), 4 * lz), dz.data[4 * lz + 3] = 255)
      }));
      return pz.putImageData(dz, 0, 0), {
        maxX: bz,
        minZ: Ez,
        width: tz * Mz,
        depth: Hz * Mz,
        canvas: Oz
      }
    }

    function xz() {
      return new Promise((zz => {
        setTimeout(zz, 0)
      }))
    }
  },
  9165: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => nz,
      c: () => iz
    });
    var Ez = bz(9125);
    const nz = "Air",
      iz = Object.freeze(new Ez.f(nz, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);