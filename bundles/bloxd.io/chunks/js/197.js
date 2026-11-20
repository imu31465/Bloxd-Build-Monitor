export const id = 197;
export const ids = [197];
export const modules = {
  37158: (zz, tz, sz) => {
    var Fz = sz(37166);

    function Wz(zz) {
      for (var tz, sz, Wz = 0, Xz = zz.length, Oz = 0; Oz < zz.length;) {
        for (tz = zz[Oz], sz = 0; Oz < Xz && zz[Oz] === tz;) ++Oz, ++sz;
        Wz += Fz.log2(sz) / 7 | 0, Wz += Fz.log2(tz >>> 0) / 7 | 0, Wz += 2
      }
      return Wz
    }
    tz.size = Wz, tz.encode = function(zz, tz) {
      tz || (tz = new Uint8Array(Wz(zz)));
      for (var sz, Fz, Xz = 0, Oz = tz.length, oz = 0; oz < zz.length;) {
        for (sz = zz[oz], Fz = 0; oz < zz.length && zz[oz] === sz;) ++oz, ++Fz;
        for (; Xz < Oz && Fz >= 128;) tz[Xz++] = 128 + (127 & Fz), Fz >>>= 7;
        if (Xz >= Oz) throw new Error("RLE buffer overflow");
        for (tz[Xz++] = Fz, sz >>>= 0; Xz < Oz && sz >= 128;) tz[Xz++] = 128 + (127 & sz), sz >>>= 7;
        if (Xz >= Oz) throw new Error("RLE buffer overflow");
        tz[Xz++] = sz
      }
      return tz
    }, tz.decode = function(zz, tz) {
      for (var sz, Fz, Wz, Xz, Oz = tz.length, oz = zz.length, vz = 0, Uz = 0; Uz < oz;) {
        for (sz = 0, Fz = 0; Uz < oz && zz[Uz] >= 128;) sz += (127 & zz[Uz++]) << Fz, Fz += 7;
        if (sz += zz[Uz++] << Fz, Uz >= oz) throw new Error("RLE buffer underrun");
        if (vz + sz > Oz) throw new Error("Chunk buffer overflow");
        for (Wz = 0, Fz = 0; Uz < oz && zz[Uz] >= 128;) Wz += (127 & zz[Uz++]) << Fz, Fz += 7;
        if (Uz >= oz) throw new Error("RLE buffer underrun");
        for (Wz += zz[Uz++] << Fz, Xz = 0; Xz < sz; ++Xz) tz[vz++] = Wz
      }
      return tz
    }
  },
  37166: (zz, tz) => {
    function sz(zz) {
      var tz = 32;
      return (zz &= -zz) && tz--, 65535 & zz && (tz -= 16), 16711935 & zz && (tz -= 8), 252645135 & zz && (tz -= 4), 858993459 & zz && (tz -= 2), 1431655765 & zz && (tz -= 1), tz
    }
    tz.INT_BITS = 32, tz.INT_MAX = 2147483647, tz.INT_MIN = -1 << 31, tz.sign = function(zz) {
      return (zz > 0) - (zz < 0)
    }, tz.abs = function(zz) {
      var tz = zz >> 31;
      return (zz ^ tz) - tz
    }, tz.min = function(zz, tz) {
      return tz ^ (zz ^ tz) & -(zz < tz)
    }, tz.max = function(zz, tz) {
      return zz ^ (zz ^ tz) & -(zz < tz)
    }, tz.isPow2 = function(zz) {
      return !(zz & zz - 1) && !!zz
    }, tz.log2 = function(zz) {
      var tz, sz;
      return tz = (zz > 65535) << 4, tz |= sz = ((zz >>>= tz) > 255) << 3, tz |= sz = ((zz >>>= sz) > 15) << 2, (tz |= sz = ((zz >>>= sz) > 3) << 1) | (zz >>>= sz) >> 1
    }, tz.log10 = function(zz) {
      return zz >= 1e9 ? 9 : zz >= 1e8 ? 8 : zz >= 1e7 ? 7 : zz >= 1e6 ? 6 : zz >= 1e5 ? 5 : zz >= 1e4 ? 4 : zz >= 1e3 ? 3 : zz >= 100 ? 2 : zz >= 10 ? 1 : 0
    }, tz.popCount = function(zz) {
      return 16843009 * ((zz = (858993459 & (zz -= zz >>> 1 & 1431655765)) + (zz >>> 2 & 858993459)) + (zz >>> 4) & 252645135) >>> 24
    }, tz.countTrailingZeros = sz, tz.nextPow2 = function(zz) {
      return zz += 0 === zz, --zz, zz |= zz >>> 1, zz |= zz >>> 2, zz |= zz >>> 4, zz |= zz >>> 8, (zz |= zz >>> 16) + 1
    }, tz.prevPow2 = function(zz) {
      return zz |= zz >>> 1, zz |= zz >>> 2, zz |= zz >>> 4, zz |= zz >>> 8, (zz |= zz >>> 16) - (zz >>> 1)
    }, tz.parity = function(zz) {
      return zz ^= zz >>> 16, zz ^= zz >>> 8, zz ^= zz >>> 4, 27030 >>> (zz &= 15) & 1
    };
    var Fz = new Array(256);
    ! function(zz) {
      for (var tz = 0; tz < 256; ++tz) {
        var sz = tz,
          Fz = tz,
          Wz = 7;
        for (sz >>>= 1; sz; sz >>>= 1) Fz <<= 1, Fz |= 1 & sz, --Wz;
        zz[tz] = Fz << Wz & 255
      }
    }(Fz), tz.reverse = function(zz) {
      return Fz[255 & zz] << 24 | Fz[zz >>> 8 & 255] << 16 | Fz[zz >>> 16 & 255] << 8 | Fz[zz >>> 24 & 255]
    }, tz.interleave2 = function(zz, tz) {
      return (zz = 1431655765 & ((zz = 858993459 & ((zz = 252645135 & ((zz = 16711935 & ((zz &= 65535) | zz << 8)) | zz << 4)) | zz << 2)) | zz << 1)) | (tz = 1431655765 & ((tz = 858993459 & ((tz = 252645135 & ((tz = 16711935 & ((tz &= 65535) | tz << 8)) | tz << 4)) | tz << 2)) | tz << 1)) << 1
    }, tz.deinterleave2 = function(zz, tz) {
      return (zz = 65535 & ((zz = 16711935 & ((zz = 252645135 & ((zz = 858993459 & ((zz = zz >>> tz & 1431655765) | zz >>> 1)) | zz >>> 2)) | zz >>> 4)) | zz >>> 16)) << 16 >> 16
    }, tz.interleave3 = function(zz, tz, sz) {
      return zz = 1227133513 & ((zz = 3272356035 & ((zz = 251719695 & ((zz = 4278190335 & ((zz &= 1023) | zz << 16)) | zz << 8)) | zz << 4)) | zz << 2), (zz |= (tz = 1227133513 & ((tz = 3272356035 & ((tz = 251719695 & ((tz = 4278190335 & ((tz &= 1023) | tz << 16)) | tz << 8)) | tz << 4)) | tz << 2)) << 1) | (sz = 1227133513 & ((sz = 3272356035 & ((sz = 251719695 & ((sz = 4278190335 & ((sz &= 1023) | sz << 16)) | sz << 8)) | sz << 4)) | sz << 2)) << 2
    }, tz.deinterleave3 = function(zz, tz) {
      return (zz = 1023 & ((zz = 4278190335 & ((zz = 251719695 & ((zz = 3272356035 & ((zz = zz >>> tz & 1227133513) | zz >>> 2)) | zz >>> 4)) | zz >>> 8)) | zz >>> 16)) << 22 >> 22
    }, tz.nextCombination = function(zz) {
      var tz = zz | zz - 1;
      return tz + 1 | (~tz & -~tz) - 1 >>> sz(zz) + 1
    }
  },
  38999: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      emptyColumnHeight: () => rz,
      loadHeatmapSchematic: () => Yz,
      readSchematicBlocks: () => xz
    });
    var Fz = sz(3437),
      Wz = sz.n(Fz),
      Xz = sz(3417),
      Oz = sz(37158),
      oz = sz(201),
      vz = sz(8940);
    const Uz = [{
        name: "x",
        type: "int"
      }, {
        name: "y",
        type: "int"
      }, {
        name: "z",
        type: "int"
      }],
      Kz = [{
        name: "name",
        type: "string"
      }, {
        name: "startOffset",
        type: {
          type: "record",
          fields: Uz
        }
      }, {
        name: "dimensions",
        type: {
          type: "record",
          fields: Uz
        }
      }, {
        name: "chunkData",
        type: {
          type: "array",
          items: {
            type: "record",
            fields: [...Uz, {
              name: "rle",
              type: "bytes"
            }]
          }
        }
      }],
      uz = Wz().Type.forSchema({
        type: "record",
        fields: Kz
      }),
      Nz = Wz().Type.forSchema({
        type: "record",
        fields: [...Kz, {
          name: "blockData",
          type: {
            type: "array",
            items: {
              type: "record",
              fields: [...Uz, {
                name: "data",
                type: "bytes"
              }]
            }
          }
        }, {
          name: "pasteOffset",
          type: {
            type: "record",
            fields: Uz
          }
        }]
      }),
      bz = 2,
      wz = 6,
      Dz = {
        Water: [63, 118, 228],
        Lava: [232, 110, 30]
      },
      gz = [150, 150, 150],
      Hz = 16,
      Bz = 4096,
      Pz = oz.d.pw,
      rz = -2147483648;
    async function Yz(zz) {
      const tz = await xz(new Uint8Array(await zz.arrayBuffer()), await async function() {
        const {
          averageColors: zz
        } = await sz.e(201).then((() => sz(33845))), tz = new Map;
        return sz => {
          var Fz, Wz, Xz, Oz, oz;
          const Uz = tz.get(sz);
          if (void 0 !== Uz) return Uz;
          const Kz = null !== (Fz = null === (Wz = vz.j[sz]) || void 0 === Wz ? void 0 : Wz.name) && void 0 !== Fz ? Fz : "",
            uz = null !== (Xz = zz[Kz]) && void 0 !== Xz ? Xz : zz[Kz.split("|")[0]],
            Nz = Dz[Kz.split("|")[0]],
            bz = null !== (Oz = null !== (oz = null === uz || void 0 === uz ? void 0 : uz[0]) && void 0 !== oz ? oz : Nz) && void 0 !== Oz ? Oz : 0 === (null === uz || void 0 === uz ? void 0 : uz.length) ? null : gz;
          return tz.set(sz, bz), bz
        }
      }());
      return {
        surface: tz.surface,
        topDown: Jz(tz.columnTops)
      }
    }
    async function xz(zz, tz) {
      var sz;
      if (zz.byteLength < 4) throw new Error("The file is too short to be a schematic.");
      const Fz = new DataView(zz.buffer, zz.byteOffset, zz.byteLength).getUint32(0, !0);
      if (Fz > wz) throw new Error("The file isn't a schematic this version of Bloxd can read.");
      const Wz = (Fz >= bz ? Nz : uz).decode(Xz.Lw.from(zz.subarray(4)), 0).value;
      if (!Wz) throw new Error("The file isn't a schematic.");
      if (0 === Wz.chunkData.length) throw new Error("The schematic has no blocks in it.");
      const oz = null !== (sz = Wz.pasteOffset) && void 0 !== sz ? sz : {
          x: 0,
          y: 0,
          z: 0
        },
        vz = [oz.x, oz.y, oz.z].map((zz => Math.floor(zz / Pz))),
        Uz = Wz.chunkData.map((zz => ({
          x: zz.x + vz[0],
          y: zz.y + vz[1],
          z: zz.z + vz[2],
          rle: zz.rle
        }))),
        Kz = new Map;
      for (const [Xz, uz] of Uz.entries()) {
        const zz = new Uint16Array(Pz ** 3);
        Oz.decode(uz.rle, zz), Kz.set(`${uz.x},${uz.y},${uz.z}`, zz), Xz % Hz === Hz - 1 && await Iz()
      }
      const Dz = (zz, tz, sz) => zz * Pz * Pz + tz * Pz + sz,
        gz = (zz, tz, sz) => {
          var Fz, Wz;
          const Xz = Math.floor(zz / Pz),
            Oz = Math.floor(tz / Pz),
            oz = Math.floor(sz / Pz);
          return null !== (Fz = null === (Wz = Kz.get(`${Xz},${Oz},${oz}`)) || void 0 === Wz ? void 0 : Wz[Dz(zz - Xz * Pz, tz - Oz * Pz, sz - oz * Pz)]) && void 0 !== Fz ? Fz : 0
        },
        Bz = new Map,
        Yz = [],
        xz = [];
      for (const [Xz, Oz] of Uz.entries()) {
        const zz = Kz.get(`${Oz.x},${Oz.y},${Oz.z}`),
          sz = [Oz.x * Pz, Oz.y * Pz, Oz.z * Pz],
          Fz = (tz, Fz, Wz) => tz < 0 || Fz < 0 || Wz < 0 || tz >= Pz || Fz >= Pz || Wz >= Pz ? gz(sz[0] + tz, sz[1] + Fz, sz[2] + Wz) : zz[Dz(tz, Fz, Wz)],
          Wz = `${Oz.x},${Oz.z}`;
        let oz = Bz.get(Wz);
        void 0 === oz && (oz = {
          chunkX: Oz.x,
          chunkZ: Oz.z,
          heights: new Int32Array(Pz * Pz).fill(rz),
          colours: new Uint8Array(Pz * Pz * 3)
        }, Bz.set(Wz, oz));
        for (let Xz = 0; Xz < Pz; Xz++)
          for (let Wz = 0; Wz < Pz; Wz++)
            for (let Oz = 0; Oz < Pz; Oz++) {
              const vz = zz[Dz(Xz, Wz, Oz)];
              if (0 === vz) continue;
              const Uz = sz[0] + Xz,
                Kz = sz[1] + Wz,
                uz = sz[2] + Oz,
                Nz = tz(vz);
              if (null === Nz) continue;
              const bz = Oz * Pz + Xz;
              Kz > oz.heights[bz] && (oz.heights[bz] = Kz, oz.colours.set(Nz, 3 * bz));
              !mz(vz) && (mz(Fz(Xz + 1, Wz, Oz)) || mz(Fz(Xz - 1, Wz, Oz)) || mz(Fz(Xz, Wz + 1, Oz)) || mz(Fz(Xz, Wz - 1, Oz)) || mz(Fz(Xz, Wz, Oz + 1)) || mz(Fz(Xz, Wz, Oz - 1))) && (Yz.push(Uz, Kz, uz), xz.push(Nz[0], Nz[1], Nz[2]))
            }
        Xz % Hz === Hz - 1 && await Iz()
      }
      if (0 === Yz.length) throw new Error("The schematic has no blocks in it.");
      return {
        name: Wz.name,
        surface: {
          positions: Int32Array.from(Yz),
          colours: Uint8Array.from(xz),
          count: Yz.length / 3
        },
        columnTops: [...Bz.values()]
      }
    }

    function mz(zz) {
      if (0 === zz) return !0;
      const tz = vz.j[zz];
      return void 0 === tz || tz.cb || tz.transTex || !1 === tz.solid
    }

    function Jz(zz) {
      let tz = 1 / 0,
        sz = -1 / 0,
        Fz = 1 / 0,
        Wz = -1 / 0;
      for (const {
          chunkX: wz,
          chunkZ: Dz,
          heights: gz
        }
        of zz) gz.forEach(((zz, Xz) => {
        if (zz === rz) return;
        const Oz = wz * Pz + Xz % Pz,
          oz = Dz * Pz + Math.floor(Xz / Pz);
        tz = Math.min(tz, Oz), sz = Math.max(sz, Oz), Fz = Math.min(Fz, oz), Wz = Math.max(Wz, oz)
      }));
      const Xz = sz - tz + 1,
        Oz = Wz - Fz + 1,
        oz = Math.max(1, Math.ceil(Xz / Bz), Math.ceil(Oz / Bz)),
        vz = Math.ceil(Xz / oz),
        Uz = Math.ceil(Oz / oz),
        Kz = document.createElement("canvas");
      Kz.width = vz, Kz.height = Uz;
      const uz = Kz.getContext("2d");
      if (!uz) throw new Error("Couldn't draw the schematic from above.");
      const Nz = uz.createImageData(vz, Uz),
        bz = new Int32Array(vz * Uz).fill(rz);
      for (const {
          chunkX: wz,
          chunkZ: Dz,
          heights: gz,
          colours: Hz
        }
        of zz) gz.forEach(((zz, tz) => {
        const Wz = wz * Pz + tz % Pz,
          Xz = Dz * Pz + Math.floor(tz / Pz),
          Oz = Math.floor((Xz - Fz) / oz) * vz + Math.floor((sz - Wz) / oz);
        zz === rz || zz <= bz[Oz] || (bz[Oz] = zz, Nz.data.set(Hz.subarray(3 * tz, 3 * tz + 3), 4 * Oz), Nz.data[4 * Oz + 3] = 255)
      }));
      return uz.putImageData(Nz, 0, 0), {
        maxX: sz,
        minZ: Fz,
        width: vz * oz,
        depth: Uz * oz,
        canvas: Kz
      }
    }

    function Iz() {
      return new Promise((zz => {
        setTimeout(zz, 0)
      }))
    }
  },
  9023: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Wz,
      g: () => Xz
    });
    var Fz = sz(8976);
    const Wz = "Air",
      Xz = Object.freeze(new Fz.f(Wz, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);