export const id = 183;
export const ids = [183];
export const modules = {
  36649: (BB, TB, dB) => {
    var VB = dB(36656);

    function yB(BB) {
      for (var TB, dB, yB = 0, pB = BB.length, lB = 0; lB < BB.length;) {
        for (TB = BB[lB], dB = 0; lB < pB && BB[lB] === TB;) ++lB, ++dB;
        yB += VB.log2(dB) / 7 | 0, yB += VB.log2(TB >>> 0) / 7 | 0, yB += 2
      }
      return yB
    }
    TB.size = yB, TB.encode = function(BB, TB) {
      TB || (TB = new Uint8Array(yB(BB)));
      for (var dB, VB, pB = 0, lB = TB.length, JB = 0; JB < BB.length;) {
        for (dB = BB[JB], VB = 0; JB < BB.length && BB[JB] === dB;) ++JB, ++VB;
        for (; pB < lB && VB >= 128;) TB[pB++] = 128 + (127 & VB), VB >>>= 7;
        if (pB >= lB) throw new Error("RLE buffer overflow");
        for (TB[pB++] = VB, dB >>>= 0; pB < lB && dB >= 128;) TB[pB++] = 128 + (127 & dB), dB >>>= 7;
        if (pB >= lB) throw new Error("RLE buffer overflow");
        TB[pB++] = dB
      }
      return TB
    }, TB.decode = function(BB, TB) {
      for (var dB, VB, yB, pB, lB = TB.length, JB = BB.length, YB = 0, gB = 0; gB < JB;) {
        for (dB = 0, VB = 0; gB < JB && BB[gB] >= 128;) dB += (127 & BB[gB++]) << VB, VB += 7;
        if (dB += BB[gB++] << VB, gB >= JB) throw new Error("RLE buffer underrun");
        if (YB + dB > lB) throw new Error("Chunk buffer overflow");
        for (yB = 0, VB = 0; gB < JB && BB[gB] >= 128;) yB += (127 & BB[gB++]) << VB, VB += 7;
        if (gB >= JB) throw new Error("RLE buffer underrun");
        for (yB += BB[gB++] << VB, pB = 0; pB < dB; ++pB) TB[YB++] = yB
      }
      return TB
    }
  },
  36656: (BB, TB) => {
    function dB(BB) {
      var TB = 32;
      return (BB &= -BB) && TB--, 65535 & BB && (TB -= 16), 16711935 & BB && (TB -= 8), 252645135 & BB && (TB -= 4), 858993459 & BB && (TB -= 2), 1431655765 & BB && (TB -= 1), TB
    }
    TB.INT_BITS = 32, TB.INT_MAX = 2147483647, TB.INT_MIN = -1 << 31, TB.sign = function(BB) {
      return (BB > 0) - (BB < 0)
    }, TB.abs = function(BB) {
      var TB = BB >> 31;
      return (BB ^ TB) - TB
    }, TB.min = function(BB, TB) {
      return TB ^ (BB ^ TB) & -(BB < TB)
    }, TB.max = function(BB, TB) {
      return BB ^ (BB ^ TB) & -(BB < TB)
    }, TB.isPow2 = function(BB) {
      return !(BB & BB - 1) && !!BB
    }, TB.log2 = function(BB) {
      var TB, dB;
      return TB = (BB > 65535) << 4, TB |= dB = ((BB >>>= TB) > 255) << 3, TB |= dB = ((BB >>>= dB) > 15) << 2, (TB |= dB = ((BB >>>= dB) > 3) << 1) | (BB >>>= dB) >> 1
    }, TB.log10 = function(BB) {
      return BB >= 1e9 ? 9 : BB >= 1e8 ? 8 : BB >= 1e7 ? 7 : BB >= 1e6 ? 6 : BB >= 1e5 ? 5 : BB >= 1e4 ? 4 : BB >= 1e3 ? 3 : BB >= 100 ? 2 : BB >= 10 ? 1 : 0
    }, TB.popCount = function(BB) {
      return 16843009 * ((BB = (858993459 & (BB -= BB >>> 1 & 1431655765)) + (BB >>> 2 & 858993459)) + (BB >>> 4) & 252645135) >>> 24
    }, TB.countTrailingZeros = dB, TB.nextPow2 = function(BB) {
      return BB += 0 === BB, --BB, BB |= BB >>> 1, BB |= BB >>> 2, BB |= BB >>> 4, BB |= BB >>> 8, (BB |= BB >>> 16) + 1
    }, TB.prevPow2 = function(BB) {
      return BB |= BB >>> 1, BB |= BB >>> 2, BB |= BB >>> 4, BB |= BB >>> 8, (BB |= BB >>> 16) - (BB >>> 1)
    }, TB.parity = function(BB) {
      return BB ^= BB >>> 16, BB ^= BB >>> 8, BB ^= BB >>> 4, 27030 >>> (BB &= 15) & 1
    };
    var VB = new Array(256);
    ! function(BB) {
      for (var TB = 0; TB < 256; ++TB) {
        var dB = TB,
          VB = TB,
          yB = 7;
        for (dB >>>= 1; dB; dB >>>= 1) VB <<= 1, VB |= 1 & dB, --yB;
        BB[TB] = VB << yB & 255
      }
    }(VB), TB.reverse = function(BB) {
      return VB[255 & BB] << 24 | VB[BB >>> 8 & 255] << 16 | VB[BB >>> 16 & 255] << 8 | VB[BB >>> 24 & 255]
    }, TB.interleave2 = function(BB, TB) {
      return (BB = 1431655765 & ((BB = 858993459 & ((BB = 252645135 & ((BB = 16711935 & ((BB &= 65535) | BB << 8)) | BB << 4)) | BB << 2)) | BB << 1)) | (TB = 1431655765 & ((TB = 858993459 & ((TB = 252645135 & ((TB = 16711935 & ((TB &= 65535) | TB << 8)) | TB << 4)) | TB << 2)) | TB << 1)) << 1
    }, TB.deinterleave2 = function(BB, TB) {
      return (BB = 65535 & ((BB = 16711935 & ((BB = 252645135 & ((BB = 858993459 & ((BB = BB >>> TB & 1431655765) | BB >>> 1)) | BB >>> 2)) | BB >>> 4)) | BB >>> 16)) << 16 >> 16
    }, TB.interleave3 = function(BB, TB, dB) {
      return BB = 1227133513 & ((BB = 3272356035 & ((BB = 251719695 & ((BB = 4278190335 & ((BB &= 1023) | BB << 16)) | BB << 8)) | BB << 4)) | BB << 2), (BB |= (TB = 1227133513 & ((TB = 3272356035 & ((TB = 251719695 & ((TB = 4278190335 & ((TB &= 1023) | TB << 16)) | TB << 8)) | TB << 4)) | TB << 2)) << 1) | (dB = 1227133513 & ((dB = 3272356035 & ((dB = 251719695 & ((dB = 4278190335 & ((dB &= 1023) | dB << 16)) | dB << 8)) | dB << 4)) | dB << 2)) << 2
    }, TB.deinterleave3 = function(BB, TB) {
      return (BB = 1023 & ((BB = 4278190335 & ((BB = 251719695 & ((BB = 3272356035 & ((BB = BB >>> TB & 1227133513) | BB >>> 2)) | BB >>> 4)) | BB >>> 8)) | BB >>> 16)) << 22 >> 22
    }, TB.nextCombination = function(BB) {
      var TB = BB | BB - 1;
      return TB + 1 | (~TB & -~TB) - 1 >>> dB(BB) + 1
    }
  },
  38549: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      emptyColumnHeight: () => iB,
      loadHeatmapSchematic: () => NB,
      readSchematicBlocks: () => tB
    });
    var VB = dB(3257),
      yB = dB.n(VB),
      pB = dB(3239),
      lB = dB(36649),
      JB = dB(184),
      YB = dB(8653);
    const gB = [{
        name: "x",
        type: "int"
      }, {
        name: "y",
        type: "int"
      }, {
        name: "z",
        type: "int"
      }],
      oB = [{
        name: "name",
        type: "string"
      }, {
        name: "startOffset",
        type: {
          type: "record",
          fields: gB
        }
      }, {
        name: "dimensions",
        type: {
          type: "record",
          fields: gB
        }
      }, {
        name: "chunkData",
        type: {
          type: "array",
          items: {
            type: "record",
            fields: [...gB, {
              name: "rle",
              type: "bytes"
            }]
          }
        }
      }],
      kB = yB().Type.forSchema({
        type: "record",
        fields: oB
      }),
      LB = yB().Type.forSchema({
        type: "record",
        fields: [...oB, {
          name: "blockData",
          type: {
            type: "array",
            items: {
              type: "record",
              fields: [...gB, {
                name: "data",
                type: "bytes"
              }]
            }
          }
        }, {
          name: "pasteOffset",
          type: {
            type: "record",
            fields: gB
          }
        }]
      }),
      OB = 2,
      DB = 6,
      uB = {
        Water: [63, 118, 228],
        Lava: [232, 110, 30]
      },
      HB = [150, 150, 150],
      EB = 16,
      vB = 4096,
      mB = JB.c.UD,
      iB = -2147483648;
    async function NB(BB) {
      const TB = await tB(new Uint8Array(await BB.arrayBuffer()), await async function() {
        const {
          averageColors: BB
        } = await dB.e(187).then((() => dB(33444))), TB = new Map;
        return dB => {
          var VB, yB, pB, lB, JB;
          const gB = TB.get(dB);
          if (void 0 !== gB) return gB;
          const oB = null !== (VB = null === (yB = YB.h[dB]) || void 0 === yB ? void 0 : yB.name) && void 0 !== VB ? VB : "",
            kB = null !== (pB = BB[oB]) && void 0 !== pB ? pB : BB[oB.split("|")[0]],
            LB = uB[oB.split("|")[0]],
            OB = null !== (lB = null !== (JB = null === kB || void 0 === kB ? void 0 : kB[0]) && void 0 !== JB ? JB : LB) && void 0 !== lB ? lB : 0 === (null === kB || void 0 === kB ? void 0 : kB.length) ? null : HB;
          return TB.set(dB, OB), OB
        }
      }());
      return {
        surface: TB.surface,
        topDown: sB(TB.columnTops)
      }
    }
    async function tB(BB, TB) {
      var dB;
      if (BB.byteLength < 4) throw new Error("The file is too short to be a schematic.");
      const VB = new DataView(BB.buffer, BB.byteOffset, BB.byteLength).getUint32(0, !0);
      if (VB > DB) throw new Error("The file isn't a schematic this version of Bloxd can read.");
      const yB = (VB >= OB ? LB : kB).decode(pB.iD.from(BB.subarray(4)), 0).value;
      if (!yB) throw new Error("The file isn't a schematic.");
      if (0 === yB.chunkData.length) throw new Error("The schematic has no blocks in it.");
      const JB = null !== (dB = yB.pasteOffset) && void 0 !== dB ? dB : {
          x: 0,
          y: 0,
          z: 0
        },
        YB = [JB.x, JB.y, JB.z].map((BB => Math.floor(BB / mB))),
        gB = yB.chunkData.map((BB => ({
          x: BB.x + YB[0],
          y: BB.y + YB[1],
          z: BB.z + YB[2],
          rle: BB.rle
        }))),
        oB = new Map;
      for (const [pB, kB] of gB.entries()) {
        const BB = new Uint16Array(mB ** 3);
        lB.decode(kB.rle, BB), oB.set(`${kB.x},${kB.y},${kB.z}`, BB), pB % EB === EB - 1 && await MB()
      }
      const uB = (BB, TB, dB) => BB * mB * mB + TB * mB + dB,
        HB = (BB, TB, dB) => {
          var VB, yB;
          const pB = Math.floor(BB / mB),
            lB = Math.floor(TB / mB),
            JB = Math.floor(dB / mB);
          return null !== (VB = null === (yB = oB.get(`${pB},${lB},${JB}`)) || void 0 === yB ? void 0 : yB[uB(BB - pB * mB, TB - lB * mB, dB - JB * mB)]) && void 0 !== VB ? VB : 0
        },
        vB = new Map,
        NB = [],
        tB = [];
      for (const [pB, lB] of gB.entries()) {
        const BB = oB.get(`${lB.x},${lB.y},${lB.z}`),
          dB = [lB.x * mB, lB.y * mB, lB.z * mB],
          VB = (TB, VB, yB) => TB < 0 || VB < 0 || yB < 0 || TB >= mB || VB >= mB || yB >= mB ? HB(dB[0] + TB, dB[1] + VB, dB[2] + yB) : BB[uB(TB, VB, yB)],
          yB = `${lB.x},${lB.z}`;
        let JB = vB.get(yB);
        void 0 === JB && (JB = {
          chunkX: lB.x,
          chunkZ: lB.z,
          heights: new Int32Array(mB * mB).fill(iB),
          colours: new Uint8Array(mB * mB * 3)
        }, vB.set(yB, JB));
        for (let pB = 0; pB < mB; pB++)
          for (let yB = 0; yB < mB; yB++)
            for (let lB = 0; lB < mB; lB++) {
              const YB = BB[uB(pB, yB, lB)];
              if (0 === YB) continue;
              const gB = dB[0] + pB,
                oB = dB[1] + yB,
                kB = dB[2] + lB,
                LB = TB(YB);
              if (null === LB) continue;
              const OB = lB * mB + pB;
              oB > JB.heights[OB] && (JB.heights[OB] = oB, JB.colours.set(LB, 3 * OB));
              !fB(YB) && (fB(VB(pB + 1, yB, lB)) || fB(VB(pB - 1, yB, lB)) || fB(VB(pB, yB + 1, lB)) || fB(VB(pB, yB - 1, lB)) || fB(VB(pB, yB, lB + 1)) || fB(VB(pB, yB, lB - 1))) && (NB.push(gB, oB, kB), tB.push(LB[0], LB[1], LB[2]))
            }
        pB % EB === EB - 1 && await MB()
      }
      if (0 === NB.length) throw new Error("The schematic has no blocks in it.");
      return {
        name: yB.name,
        surface: {
          positions: Int32Array.from(NB),
          colours: Uint8Array.from(tB),
          count: NB.length / 3
        },
        columnTops: [...vB.values()]
      }
    }

    function fB(BB) {
      if (0 === BB) return !0;
      const TB = YB.h[BB];
      return void 0 === TB || TB.DO || TB.transTex || !1 === TB.solid
    }

    function sB(BB) {
      let TB = 1 / 0,
        dB = -1 / 0,
        VB = 1 / 0,
        yB = -1 / 0;
      for (const {
          chunkX: DB,
          chunkZ: uB,
          heights: HB
        }
        of BB) HB.forEach(((BB, pB) => {
        if (BB === iB) return;
        const lB = DB * mB + pB % mB,
          JB = uB * mB + Math.floor(pB / mB);
        TB = Math.min(TB, lB), dB = Math.max(dB, lB), VB = Math.min(VB, JB), yB = Math.max(yB, JB)
      }));
      const pB = dB - TB + 1,
        lB = yB - VB + 1,
        JB = Math.max(1, Math.ceil(pB / vB), Math.ceil(lB / vB)),
        YB = Math.ceil(pB / JB),
        gB = Math.ceil(lB / JB),
        oB = document.createElement("canvas");
      oB.width = YB, oB.height = gB;
      const kB = oB.getContext("2d");
      if (!kB) throw new Error("Couldn't draw the schematic from above.");
      const LB = kB.createImageData(YB, gB),
        OB = new Int32Array(YB * gB).fill(iB);
      for (const {
          chunkX: DB,
          chunkZ: uB,
          heights: HB,
          colours: EB
        }
        of BB) HB.forEach(((BB, TB) => {
        const yB = DB * mB + TB % mB,
          pB = uB * mB + Math.floor(TB / mB),
          lB = Math.floor((pB - VB) / JB) * YB + Math.floor((dB - yB) / JB);
        BB === iB || BB <= OB[lB] || (OB[lB] = BB, LB.data.set(EB.subarray(3 * TB, 3 * TB + 3), 4 * lB), LB.data[4 * lB + 3] = 255)
      }));
      return kB.putImageData(LB, 0, 0), {
        maxX: dB,
        minZ: VB,
        width: YB * JB,
        depth: gB * JB,
        canvas: oB
      }
    }

    function MB() {
      return new Promise((BB => {
        setTimeout(BB, 0)
      }))
    }
  },
  8746: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => yB,
      d: () => pB
    });
    var VB = dB(8698);
    const yB = "Air",
      pB = Object.freeze(new VB.h(yB, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);