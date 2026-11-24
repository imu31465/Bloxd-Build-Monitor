export const id = 189;
export const ids = [189];
export const modules = {
  37821: (BB, jB, zB) => {
    var QB = zB(37826);

    function nB(BB) {
      for (var jB, zB, nB = 0, dB = BB.length, IB = 0; IB < BB.length;) {
        for (jB = BB[IB], zB = 0; IB < dB && BB[IB] === jB;) ++IB, ++zB;
        nB += QB.log2(zB) / 7 | 0, nB += QB.log2(jB >>> 0) / 7 | 0, nB += 2
      }
      return nB
    }
    jB.size = nB, jB.encode = function(BB, jB) {
      jB || (jB = new Uint8Array(nB(BB)));
      for (var zB, QB, dB = 0, IB = jB.length, NB = 0; NB < BB.length;) {
        for (zB = BB[NB], QB = 0; NB < BB.length && BB[NB] === zB;) ++NB, ++QB;
        for (; dB < IB && QB >= 128;) jB[dB++] = 128 + (127 & QB), QB >>>= 7;
        if (dB >= IB) throw new Error("RLE buffer overflow");
        for (jB[dB++] = QB, zB >>>= 0; dB < IB && zB >= 128;) jB[dB++] = 128 + (127 & zB), zB >>>= 7;
        if (dB >= IB) throw new Error("RLE buffer overflow");
        jB[dB++] = zB
      }
      return jB
    }, jB.decode = function(BB, jB) {
      for (var zB, QB, nB, dB, IB = jB.length, NB = BB.length, uB = 0, UB = 0; UB < NB;) {
        for (zB = 0, QB = 0; UB < NB && BB[UB] >= 128;) zB += (127 & BB[UB++]) << QB, QB += 7;
        if (zB += BB[UB++] << QB, UB >= NB) throw new Error("RLE buffer underrun");
        if (uB + zB > IB) throw new Error("Chunk buffer overflow");
        for (nB = 0, QB = 0; UB < NB && BB[UB] >= 128;) nB += (127 & BB[UB++]) << QB, QB += 7;
        if (UB >= NB) throw new Error("RLE buffer underrun");
        for (nB += BB[UB++] << QB, dB = 0; dB < zB; ++dB) jB[uB++] = nB
      }
      return jB
    }
  },
  37826: (BB, jB) => {
    function zB(BB) {
      var jB = 32;
      return (BB &= -BB) && jB--, 65535 & BB && (jB -= 16), 16711935 & BB && (jB -= 8), 252645135 & BB && (jB -= 4), 858993459 & BB && (jB -= 2), 1431655765 & BB && (jB -= 1), jB
    }
    jB.INT_BITS = 32, jB.INT_MAX = 2147483647, jB.INT_MIN = -1 << 31, jB.sign = function(BB) {
      return (BB > 0) - (BB < 0)
    }, jB.abs = function(BB) {
      var jB = BB >> 31;
      return (BB ^ jB) - jB
    }, jB.min = function(BB, jB) {
      return jB ^ (BB ^ jB) & -(BB < jB)
    }, jB.max = function(BB, jB) {
      return BB ^ (BB ^ jB) & -(BB < jB)
    }, jB.isPow2 = function(BB) {
      return !(BB & BB - 1) && !!BB
    }, jB.log2 = function(BB) {
      var jB, zB;
      return jB = (BB > 65535) << 4, jB |= zB = ((BB >>>= jB) > 255) << 3, jB |= zB = ((BB >>>= zB) > 15) << 2, (jB |= zB = ((BB >>>= zB) > 3) << 1) | (BB >>>= zB) >> 1
    }, jB.log10 = function(BB) {
      return BB >= 1e9 ? 9 : BB >= 1e8 ? 8 : BB >= 1e7 ? 7 : BB >= 1e6 ? 6 : BB >= 1e5 ? 5 : BB >= 1e4 ? 4 : BB >= 1e3 ? 3 : BB >= 100 ? 2 : BB >= 10 ? 1 : 0
    }, jB.popCount = function(BB) {
      return 16843009 * ((BB = (858993459 & (BB -= BB >>> 1 & 1431655765)) + (BB >>> 2 & 858993459)) + (BB >>> 4) & 252645135) >>> 24
    }, jB.countTrailingZeros = zB, jB.nextPow2 = function(BB) {
      return BB += 0 === BB, --BB, BB |= BB >>> 1, BB |= BB >>> 2, BB |= BB >>> 4, BB |= BB >>> 8, (BB |= BB >>> 16) + 1
    }, jB.prevPow2 = function(BB) {
      return BB |= BB >>> 1, BB |= BB >>> 2, BB |= BB >>> 4, BB |= BB >>> 8, (BB |= BB >>> 16) - (BB >>> 1)
    }, jB.parity = function(BB) {
      return BB ^= BB >>> 16, BB ^= BB >>> 8, BB ^= BB >>> 4, 27030 >>> (BB &= 15) & 1
    };
    var QB = new Array(256);
    ! function(BB) {
      for (var jB = 0; jB < 256; ++jB) {
        var zB = jB,
          QB = jB,
          nB = 7;
        for (zB >>>= 1; zB; zB >>>= 1) QB <<= 1, QB |= 1 & zB, --nB;
        BB[jB] = QB << nB & 255
      }
    }(QB), jB.reverse = function(BB) {
      return QB[255 & BB] << 24 | QB[BB >>> 8 & 255] << 16 | QB[BB >>> 16 & 255] << 8 | QB[BB >>> 24 & 255]
    }, jB.interleave2 = function(BB, jB) {
      return (BB = 1431655765 & ((BB = 858993459 & ((BB = 252645135 & ((BB = 16711935 & ((BB &= 65535) | BB << 8)) | BB << 4)) | BB << 2)) | BB << 1)) | (jB = 1431655765 & ((jB = 858993459 & ((jB = 252645135 & ((jB = 16711935 & ((jB &= 65535) | jB << 8)) | jB << 4)) | jB << 2)) | jB << 1)) << 1
    }, jB.deinterleave2 = function(BB, jB) {
      return (BB = 65535 & ((BB = 16711935 & ((BB = 252645135 & ((BB = 858993459 & ((BB = BB >>> jB & 1431655765) | BB >>> 1)) | BB >>> 2)) | BB >>> 4)) | BB >>> 16)) << 16 >> 16
    }, jB.interleave3 = function(BB, jB, zB) {
      return BB = 1227133513 & ((BB = 3272356035 & ((BB = 251719695 & ((BB = 4278190335 & ((BB &= 1023) | BB << 16)) | BB << 8)) | BB << 4)) | BB << 2), (BB |= (jB = 1227133513 & ((jB = 3272356035 & ((jB = 251719695 & ((jB = 4278190335 & ((jB &= 1023) | jB << 16)) | jB << 8)) | jB << 4)) | jB << 2)) << 1) | (zB = 1227133513 & ((zB = 3272356035 & ((zB = 251719695 & ((zB = 4278190335 & ((zB &= 1023) | zB << 16)) | zB << 8)) | zB << 4)) | zB << 2)) << 2
    }, jB.deinterleave3 = function(BB, jB) {
      return (BB = 1023 & ((BB = 4278190335 & ((BB = 251719695 & ((BB = 3272356035 & ((BB = BB >>> jB & 1227133513) | BB >>> 2)) | BB >>> 4)) | BB >>> 8)) | BB >>> 16)) << 22 >> 22
    }, jB.nextCombination = function(BB) {
      var jB = BB | BB - 1;
      return jB + 1 | (~jB & -~jB) - 1 >>> zB(BB) + 1
    }
  },
  39885: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      emptyColumnHeight: () => gB,
      loadHeatmapSchematic: () => tB,
      readSchematicBlocks: () => SB
    });
    var QB = zB(3855),
      nB = zB.n(QB),
      dB = zB(3836),
      IB = zB(37821),
      NB = zB(214),
      uB = zB(9266);
    const UB = [{
        name: "x",
        type: "int"
      }, {
        name: "y",
        type: "int"
      }, {
        name: "z",
        type: "int"
      }],
      aB = [{
        name: "name",
        type: "string"
      }, {
        name: "startOffset",
        type: {
          type: "record",
          fields: UB
        }
      }, {
        name: "dimensions",
        type: {
          type: "record",
          fields: UB
        }
      }, {
        name: "chunkData",
        type: {
          type: "array",
          items: {
            type: "record",
            fields: [...UB, {
              name: "rle",
              type: "bytes"
            }]
          }
        }
      }],
      pB = nB().Type.forSchema({
        type: "record",
        fields: aB
      }),
      rB = nB().Type.forSchema({
        type: "record",
        fields: [...aB, {
          name: "blockData",
          type: {
            type: "array",
            items: {
              type: "record",
              fields: [...UB, {
                name: "data",
                type: "bytes"
              }]
            }
          }
        }, {
          name: "pasteOffset",
          type: {
            type: "record",
            fields: UB
          }
        }]
      }),
      sB = 2,
      JB = 6,
      mB = {
        Water: [63, 118, 228],
        Lava: [232, 110, 30]
      },
      yB = [150, 150, 150],
      kB = 16,
      GB = 4096,
      LB = NB.e.ZJ,
      gB = -2147483648;
    async function tB(BB) {
      const jB = await SB(new Uint8Array(await BB.arrayBuffer()), await async function() {
        const {
          averageColors: BB
        } = await zB.e(207).then((() => zB(34335))), jB = new Map;
        return zB => {
          var QB, nB, dB, IB, NB;
          const UB = jB.get(zB);
          if (void 0 !== UB) return UB;
          const aB = null !== (QB = null === (nB = uB.i[zB]) || void 0 === nB ? void 0 : nB.name) && void 0 !== QB ? QB : "",
            pB = null !== (dB = BB[aB]) && void 0 !== dB ? dB : BB[aB.split("|")[0]],
            rB = mB[aB.split("|")[0]],
            sB = null !== (IB = null !== (NB = null === pB || void 0 === pB ? void 0 : pB[0]) && void 0 !== NB ? NB : rB) && void 0 !== IB ? IB : 0 === (null === pB || void 0 === pB ? void 0 : pB.length) ? null : yB;
          return jB.set(zB, sB), sB
        }
      }());
      return {
        surface: jB.surface,
        topDown: EB(jB.columnTops)
      }
    }
    async function SB(BB, jB) {
      var zB;
      if (BB.byteLength < 4) throw new Error("The file is too short to be a schematic.");
      const QB = new DataView(BB.buffer, BB.byteOffset, BB.byteLength).getUint32(0, !0);
      if (QB > JB) throw new Error("The file isn't a schematic this version of Bloxd can read.");
      const nB = (QB >= sB ? rB : pB).decode(dB.oJ.from(BB.subarray(4)), 0).value;
      if (!nB) throw new Error("The file isn't a schematic.");
      if (0 === nB.chunkData.length) throw new Error("The schematic has no blocks in it.");
      const NB = null !== (zB = nB.pasteOffset) && void 0 !== zB ? zB : {
          x: 0,
          y: 0,
          z: 0
        },
        uB = [NB.x, NB.y, NB.z].map((BB => Math.floor(BB / LB))),
        UB = nB.chunkData.map((BB => ({
          x: BB.x + uB[0],
          y: BB.y + uB[1],
          z: BB.z + uB[2],
          rle: BB.rle
        }))),
        aB = new Map;
      for (const [dB, pB] of UB.entries()) {
        const BB = new Uint16Array(LB ** 3);
        IB.decode(pB.rle, BB), aB.set(`${pB.x},${pB.y},${pB.z}`, BB), dB % kB === kB - 1 && await iB()
      }
      const mB = (BB, jB, zB) => BB * LB * LB + jB * LB + zB,
        yB = (BB, jB, zB) => {
          var QB, nB;
          const dB = Math.floor(BB / LB),
            IB = Math.floor(jB / LB),
            NB = Math.floor(zB / LB);
          return null !== (QB = null === (nB = aB.get(`${dB},${IB},${NB}`)) || void 0 === nB ? void 0 : nB[mB(BB - dB * LB, jB - IB * LB, zB - NB * LB)]) && void 0 !== QB ? QB : 0
        },
        GB = new Map,
        tB = [],
        SB = [];
      for (const [dB, IB] of UB.entries()) {
        const BB = aB.get(`${IB.x},${IB.y},${IB.z}`),
          zB = [IB.x * LB, IB.y * LB, IB.z * LB],
          QB = (jB, QB, nB) => jB < 0 || QB < 0 || nB < 0 || jB >= LB || QB >= LB || nB >= LB ? yB(zB[0] + jB, zB[1] + QB, zB[2] + nB) : BB[mB(jB, QB, nB)],
          nB = `${IB.x},${IB.z}`;
        let NB = GB.get(nB);
        void 0 === NB && (NB = {
          chunkX: IB.x,
          chunkZ: IB.z,
          heights: new Int32Array(LB * LB).fill(gB),
          colours: new Uint8Array(LB * LB * 3)
        }, GB.set(nB, NB));
        for (let dB = 0; dB < LB; dB++)
          for (let nB = 0; nB < LB; nB++)
            for (let IB = 0; IB < LB; IB++) {
              const uB = BB[mB(dB, nB, IB)];
              if (0 === uB) continue;
              const UB = zB[0] + dB,
                aB = zB[1] + nB,
                pB = zB[2] + IB,
                rB = jB(uB);
              if (null === rB) continue;
              const sB = IB * LB + dB;
              aB > NB.heights[sB] && (NB.heights[sB] = aB, NB.colours.set(rB, 3 * sB));
              !MB(uB) && (MB(QB(dB + 1, nB, IB)) || MB(QB(dB - 1, nB, IB)) || MB(QB(dB, nB + 1, IB)) || MB(QB(dB, nB - 1, IB)) || MB(QB(dB, nB, IB + 1)) || MB(QB(dB, nB, IB - 1))) && (tB.push(UB, aB, pB), SB.push(rB[0], rB[1], rB[2]))
            }
        dB % kB === kB - 1 && await iB()
      }
      if (0 === tB.length) throw new Error("The schematic has no blocks in it.");
      return {
        name: nB.name,
        surface: {
          positions: Int32Array.from(tB),
          colours: Uint8Array.from(SB),
          count: tB.length / 3
        },
        columnTops: [...GB.values()]
      }
    }

    function MB(BB) {
      if (0 === BB) return !0;
      const jB = uB.i[BB];
      return void 0 === jB || jB.Ss || jB.transTex || !1 === jB.solid
    }

    function EB(BB) {
      let jB = 1 / 0,
        zB = -1 / 0,
        QB = 1 / 0,
        nB = -1 / 0;
      for (const {
          chunkX: JB,
          chunkZ: mB,
          heights: yB
        }
        of BB) yB.forEach(((BB, dB) => {
        if (BB === gB) return;
        const IB = JB * LB + dB % LB,
          NB = mB * LB + Math.floor(dB / LB);
        jB = Math.min(jB, IB), zB = Math.max(zB, IB), QB = Math.min(QB, NB), nB = Math.max(nB, NB)
      }));
      const dB = zB - jB + 1,
        IB = nB - QB + 1,
        NB = Math.max(1, Math.ceil(dB / GB), Math.ceil(IB / GB)),
        uB = Math.ceil(dB / NB),
        UB = Math.ceil(IB / NB),
        aB = document.createElement("canvas");
      aB.width = uB, aB.height = UB;
      const pB = aB.getContext("2d");
      if (!pB) throw new Error("Couldn't draw the schematic from above.");
      const rB = pB.createImageData(uB, UB),
        sB = new Int32Array(uB * UB).fill(gB);
      for (const {
          chunkX: JB,
          chunkZ: mB,
          heights: yB,
          colours: kB
        }
        of BB) yB.forEach(((BB, jB) => {
        const nB = JB * LB + jB % LB,
          dB = mB * LB + Math.floor(jB / LB),
          IB = Math.floor((dB - QB) / NB) * uB + Math.floor((zB - nB) / NB);
        BB === gB || BB <= sB[IB] || (sB[IB] = BB, rB.data.set(kB.subarray(3 * jB, 3 * jB + 3), 4 * IB), rB.data[4 * IB + 3] = 255)
      }));
      return pB.putImageData(rB, 0, 0), {
        maxX: zB,
        minZ: QB,
        width: uB * NB,
        depth: UB * NB,
        canvas: aB
      }
    }

    function iB() {
      return new Promise((BB => {
        setTimeout(BB, 0)
      }))
    }
  },
  9366: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => nB,
      e: () => dB
    });
    var QB = zB(9311);
    const nB = "Air",
      dB = Object.freeze(new QB.h(nB, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);