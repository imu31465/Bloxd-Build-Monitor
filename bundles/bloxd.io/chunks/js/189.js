export const id = 189;
export const ids = [189];
export const modules = {
  37794: (BB, IB, ZB) => {
    var TB = ZB(37800);

    function JB(BB) {
      for (var IB, ZB, JB = 0, oB = BB.length, GB = 0; GB < BB.length;) {
        for (IB = BB[GB], ZB = 0; GB < oB && BB[GB] === IB;) ++GB, ++ZB;
        JB += TB.log2(ZB) / 7 | 0, JB += TB.log2(IB >>> 0) / 7 | 0, JB += 2
      }
      return JB
    }
    IB.size = JB, IB.encode = function(BB, IB) {
      IB || (IB = new Uint8Array(JB(BB)));
      for (var ZB, TB, oB = 0, GB = IB.length, vB = 0; vB < BB.length;) {
        for (ZB = BB[vB], TB = 0; vB < BB.length && BB[vB] === ZB;) ++vB, ++TB;
        for (; oB < GB && TB >= 128;) IB[oB++] = 128 + (127 & TB), TB >>>= 7;
        if (oB >= GB) throw new Error("RLE buffer overflow");
        for (IB[oB++] = TB, ZB >>>= 0; oB < GB && ZB >= 128;) IB[oB++] = 128 + (127 & ZB), ZB >>>= 7;
        if (oB >= GB) throw new Error("RLE buffer overflow");
        IB[oB++] = ZB
      }
      return IB
    }, IB.decode = function(BB, IB) {
      for (var ZB, TB, JB, oB, GB = IB.length, vB = BB.length, kB = 0, cB = 0; cB < vB;) {
        for (ZB = 0, TB = 0; cB < vB && BB[cB] >= 128;) ZB += (127 & BB[cB++]) << TB, TB += 7;
        if (ZB += BB[cB++] << TB, cB >= vB) throw new Error("RLE buffer underrun");
        if (kB + ZB > GB) throw new Error("Chunk buffer overflow");
        for (JB = 0, TB = 0; cB < vB && BB[cB] >= 128;) JB += (127 & BB[cB++]) << TB, TB += 7;
        if (cB >= vB) throw new Error("RLE buffer underrun");
        for (JB += BB[cB++] << TB, oB = 0; oB < ZB; ++oB) IB[kB++] = JB
      }
      return IB
    }
  },
  37800: (BB, IB) => {
    function ZB(BB) {
      var IB = 32;
      return (BB &= -BB) && IB--, 65535 & BB && (IB -= 16), 16711935 & BB && (IB -= 8), 252645135 & BB && (IB -= 4), 858993459 & BB && (IB -= 2), 1431655765 & BB && (IB -= 1), IB
    }
    IB.INT_BITS = 32, IB.INT_MAX = 2147483647, IB.INT_MIN = -1 << 31, IB.sign = function(BB) {
      return (BB > 0) - (BB < 0)
    }, IB.abs = function(BB) {
      var IB = BB >> 31;
      return (BB ^ IB) - IB
    }, IB.min = function(BB, IB) {
      return IB ^ (BB ^ IB) & -(BB < IB)
    }, IB.max = function(BB, IB) {
      return BB ^ (BB ^ IB) & -(BB < IB)
    }, IB.isPow2 = function(BB) {
      return !(BB & BB - 1) && !!BB
    }, IB.log2 = function(BB) {
      var IB, ZB;
      return IB = (BB > 65535) << 4, IB |= ZB = ((BB >>>= IB) > 255) << 3, IB |= ZB = ((BB >>>= ZB) > 15) << 2, (IB |= ZB = ((BB >>>= ZB) > 3) << 1) | (BB >>>= ZB) >> 1
    }, IB.log10 = function(BB) {
      return BB >= 1e9 ? 9 : BB >= 1e8 ? 8 : BB >= 1e7 ? 7 : BB >= 1e6 ? 6 : BB >= 1e5 ? 5 : BB >= 1e4 ? 4 : BB >= 1e3 ? 3 : BB >= 100 ? 2 : BB >= 10 ? 1 : 0
    }, IB.popCount = function(BB) {
      return 16843009 * ((BB = (858993459 & (BB -= BB >>> 1 & 1431655765)) + (BB >>> 2 & 858993459)) + (BB >>> 4) & 252645135) >>> 24
    }, IB.countTrailingZeros = ZB, IB.nextPow2 = function(BB) {
      return BB += 0 === BB, --BB, BB |= BB >>> 1, BB |= BB >>> 2, BB |= BB >>> 4, BB |= BB >>> 8, (BB |= BB >>> 16) + 1
    }, IB.prevPow2 = function(BB) {
      return BB |= BB >>> 1, BB |= BB >>> 2, BB |= BB >>> 4, BB |= BB >>> 8, (BB |= BB >>> 16) - (BB >>> 1)
    }, IB.parity = function(BB) {
      return BB ^= BB >>> 16, BB ^= BB >>> 8, BB ^= BB >>> 4, 27030 >>> (BB &= 15) & 1
    };
    var TB = new Array(256);
    ! function(BB) {
      for (var IB = 0; IB < 256; ++IB) {
        var ZB = IB,
          TB = IB,
          JB = 7;
        for (ZB >>>= 1; ZB; ZB >>>= 1) TB <<= 1, TB |= 1 & ZB, --JB;
        BB[IB] = TB << JB & 255
      }
    }(TB), IB.reverse = function(BB) {
      return TB[255 & BB] << 24 | TB[BB >>> 8 & 255] << 16 | TB[BB >>> 16 & 255] << 8 | TB[BB >>> 24 & 255]
    }, IB.interleave2 = function(BB, IB) {
      return (BB = 1431655765 & ((BB = 858993459 & ((BB = 252645135 & ((BB = 16711935 & ((BB &= 65535) | BB << 8)) | BB << 4)) | BB << 2)) | BB << 1)) | (IB = 1431655765 & ((IB = 858993459 & ((IB = 252645135 & ((IB = 16711935 & ((IB &= 65535) | IB << 8)) | IB << 4)) | IB << 2)) | IB << 1)) << 1
    }, IB.deinterleave2 = function(BB, IB) {
      return (BB = 65535 & ((BB = 16711935 & ((BB = 252645135 & ((BB = 858993459 & ((BB = BB >>> IB & 1431655765) | BB >>> 1)) | BB >>> 2)) | BB >>> 4)) | BB >>> 16)) << 16 >> 16
    }, IB.interleave3 = function(BB, IB, ZB) {
      return BB = 1227133513 & ((BB = 3272356035 & ((BB = 251719695 & ((BB = 4278190335 & ((BB &= 1023) | BB << 16)) | BB << 8)) | BB << 4)) | BB << 2), (BB |= (IB = 1227133513 & ((IB = 3272356035 & ((IB = 251719695 & ((IB = 4278190335 & ((IB &= 1023) | IB << 16)) | IB << 8)) | IB << 4)) | IB << 2)) << 1) | (ZB = 1227133513 & ((ZB = 3272356035 & ((ZB = 251719695 & ((ZB = 4278190335 & ((ZB &= 1023) | ZB << 16)) | ZB << 8)) | ZB << 4)) | ZB << 2)) << 2
    }, IB.deinterleave3 = function(BB, IB) {
      return (BB = 1023 & ((BB = 4278190335 & ((BB = 251719695 & ((BB = 3272356035 & ((BB = BB >>> IB & 1227133513) | BB >>> 2)) | BB >>> 4)) | BB >>> 8)) | BB >>> 16)) << 22 >> 22
    }, IB.nextCombination = function(BB) {
      var IB = BB | BB - 1;
      return IB + 1 | (~IB & -~IB) - 1 >>> ZB(BB) + 1
    }
  },
  39868: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      emptyColumnHeight: () => dB,
      loadHeatmapSchematic: () => CB,
      readSchematicBlocks: () => QB
    });
    var TB = ZB(3916),
      JB = ZB.n(TB),
      oB = ZB(3896),
      GB = ZB(37794),
      vB = ZB(201),
      kB = ZB(9296);
    const cB = [{
        name: "x",
        type: "int"
      }, {
        name: "y",
        type: "int"
      }, {
        name: "z",
        type: "int"
      }],
      nB = [{
        name: "name",
        type: "string"
      }, {
        name: "startOffset",
        type: {
          type: "record",
          fields: cB
        }
      }, {
        name: "dimensions",
        type: {
          type: "record",
          fields: cB
        }
      }, {
        name: "chunkData",
        type: {
          type: "array",
          items: {
            type: "record",
            fields: [...cB, {
              name: "rle",
              type: "bytes"
            }]
          }
        }
      }],
      hB = JB().Type.forSchema({
        type: "record",
        fields: nB
      }),
      zB = JB().Type.forSchema({
        type: "record",
        fields: [...nB, {
          name: "blockData",
          type: {
            type: "array",
            items: {
              type: "record",
              fields: [...cB, {
                name: "data",
                type: "bytes"
              }]
            }
          }
        }, {
          name: "pasteOffset",
          type: {
            type: "record",
            fields: cB
          }
        }]
      }),
      FB = 2,
      NB = 6,
      gB = {
        Water: [63, 118, 228],
        Lava: [232, 110, 30]
      },
      qB = [150, 150, 150],
      yB = 16,
      UB = 4096,
      WB = vB.f.YN,
      dB = -2147483648;
    async function CB(BB) {
      const IB = await QB(new Uint8Array(await BB.arrayBuffer()), await async function() {
        const {
          averageColors: BB
        } = await ZB.e(207).then((() => ZB(34276))), IB = new Map;
        return ZB => {
          var TB, JB, oB, GB, vB;
          const cB = IB.get(ZB);
          if (void 0 !== cB) return cB;
          const nB = null !== (TB = null === (JB = kB.f[ZB]) || void 0 === JB ? void 0 : JB.name) && void 0 !== TB ? TB : "",
            hB = null !== (oB = BB[nB]) && void 0 !== oB ? oB : BB[nB.split("|")[0]],
            zB = gB[nB.split("|")[0]],
            FB = null !== (GB = null !== (vB = null === hB || void 0 === hB ? void 0 : hB[0]) && void 0 !== vB ? vB : zB) && void 0 !== GB ? GB : 0 === (null === hB || void 0 === hB ? void 0 : hB.length) ? null : qB;
          return IB.set(ZB, FB), FB
        }
      }());
      return {
        surface: IB.surface,
        topDown: wB(IB.columnTops)
      }
    }
    async function QB(BB, IB) {
      var ZB;
      if (BB.byteLength < 4) throw new Error("The file is too short to be a schematic.");
      const TB = new DataView(BB.buffer, BB.byteOffset, BB.byteLength).getUint32(0, !0);
      if (TB > NB) throw new Error("The file isn't a schematic this version of Bloxd can read.");
      const JB = (TB >= FB ? zB : hB).decode(oB.UN.from(BB.subarray(4)), 0).value;
      if (!JB) throw new Error("The file isn't a schematic.");
      if (0 === JB.chunkData.length) throw new Error("The schematic has no blocks in it.");
      const vB = null !== (ZB = JB.pasteOffset) && void 0 !== ZB ? ZB : {
          x: 0,
          y: 0,
          z: 0
        },
        kB = [vB.x, vB.y, vB.z].map((BB => Math.floor(BB / WB))),
        cB = JB.chunkData.map((BB => ({
          x: BB.x + kB[0],
          y: BB.y + kB[1],
          z: BB.z + kB[2],
          rle: BB.rle
        }))),
        nB = new Map;
      for (const [oB, hB] of cB.entries()) {
        const BB = new Uint16Array(WB ** 3);
        GB.decode(hB.rle, BB), nB.set(`${hB.x},${hB.y},${hB.z}`, BB), oB % yB === yB - 1 && await OB()
      }
      const gB = (BB, IB, ZB) => BB * WB * WB + IB * WB + ZB,
        qB = (BB, IB, ZB) => {
          var TB, JB;
          const oB = Math.floor(BB / WB),
            GB = Math.floor(IB / WB),
            vB = Math.floor(ZB / WB);
          return null !== (TB = null === (JB = nB.get(`${oB},${GB},${vB}`)) || void 0 === JB ? void 0 : JB[gB(BB - oB * WB, IB - GB * WB, ZB - vB * WB)]) && void 0 !== TB ? TB : 0
        },
        UB = new Map,
        CB = [],
        QB = [];
      for (const [oB, GB] of cB.entries()) {
        const BB = nB.get(`${GB.x},${GB.y},${GB.z}`),
          ZB = [GB.x * WB, GB.y * WB, GB.z * WB],
          TB = (IB, TB, JB) => IB < 0 || TB < 0 || JB < 0 || IB >= WB || TB >= WB || JB >= WB ? qB(ZB[0] + IB, ZB[1] + TB, ZB[2] + JB) : BB[gB(IB, TB, JB)],
          JB = `${GB.x},${GB.z}`;
        let vB = UB.get(JB);
        void 0 === vB && (vB = {
          chunkX: GB.x,
          chunkZ: GB.z,
          heights: new Int32Array(WB * WB).fill(dB),
          colours: new Uint8Array(WB * WB * 3)
        }, UB.set(JB, vB));
        for (let oB = 0; oB < WB; oB++)
          for (let JB = 0; JB < WB; JB++)
            for (let GB = 0; GB < WB; GB++) {
              const kB = BB[gB(oB, JB, GB)];
              if (0 === kB) continue;
              const cB = ZB[0] + oB,
                nB = ZB[1] + JB,
                hB = ZB[2] + GB,
                zB = IB(kB);
              if (null === zB) continue;
              const FB = GB * WB + oB;
              nB > vB.heights[FB] && (vB.heights[FB] = nB, vB.colours.set(zB, 3 * FB));
              !sB(kB) && (sB(TB(oB + 1, JB, GB)) || sB(TB(oB - 1, JB, GB)) || sB(TB(oB, JB + 1, GB)) || sB(TB(oB, JB - 1, GB)) || sB(TB(oB, JB, GB + 1)) || sB(TB(oB, JB, GB - 1))) && (CB.push(cB, nB, hB), QB.push(zB[0], zB[1], zB[2]))
            }
        oB % yB === yB - 1 && await OB()
      }
      if (0 === CB.length) throw new Error("The schematic has no blocks in it.");
      return {
        name: JB.name,
        surface: {
          positions: Int32Array.from(CB),
          colours: Uint8Array.from(QB),
          count: CB.length / 3
        },
        columnTops: [...UB.values()]
      }
    }

    function sB(BB) {
      if (0 === BB) return !0;
      const IB = kB.f[BB];
      return void 0 === IB || IB.gF || IB.transTex || !1 === IB.solid
    }

    function wB(BB) {
      let IB = 1 / 0,
        ZB = -1 / 0,
        TB = 1 / 0,
        JB = -1 / 0;
      for (const {
          chunkX: NB,
          chunkZ: gB,
          heights: qB
        }
        of BB) qB.forEach(((BB, oB) => {
        if (BB === dB) return;
        const GB = NB * WB + oB % WB,
          vB = gB * WB + Math.floor(oB / WB);
        IB = Math.min(IB, GB), ZB = Math.max(ZB, GB), TB = Math.min(TB, vB), JB = Math.max(JB, vB)
      }));
      const oB = ZB - IB + 1,
        GB = JB - TB + 1,
        vB = Math.max(1, Math.ceil(oB / UB), Math.ceil(GB / UB)),
        kB = Math.ceil(oB / vB),
        cB = Math.ceil(GB / vB),
        nB = document.createElement("canvas");
      nB.width = kB, nB.height = cB;
      const hB = nB.getContext("2d");
      if (!hB) throw new Error("Couldn't draw the schematic from above.");
      const zB = hB.createImageData(kB, cB),
        FB = new Int32Array(kB * cB).fill(dB);
      for (const {
          chunkX: NB,
          chunkZ: gB,
          heights: qB,
          colours: yB
        }
        of BB) qB.forEach(((BB, IB) => {
        const JB = NB * WB + IB % WB,
          oB = gB * WB + Math.floor(IB / WB),
          GB = Math.floor((oB - TB) / vB) * kB + Math.floor((ZB - JB) / vB);
        BB === dB || BB <= FB[GB] || (FB[GB] = BB, zB.data.set(yB.subarray(3 * IB, 3 * IB + 3), 4 * GB), zB.data[4 * GB + 3] = 255)
      }));
      return hB.putImageData(zB, 0, 0), {
        maxX: ZB,
        minZ: TB,
        width: kB * vB,
        depth: cB * vB,
        canvas: nB
      }
    }

    function OB() {
      return new Promise((BB => {
        setTimeout(BB, 0)
      }))
    }
  },
  9388: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => JB,
      d: () => oB
    });
    var TB = ZB(9340);
    const JB = "Air",
      oB = Object.freeze(new TB.i(JB, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);