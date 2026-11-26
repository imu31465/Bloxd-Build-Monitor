export const id = 205;
export const ids = [205];
export const modules = {
  38383: (BB, OB, GB) => {
    var YB = GB(38392);

    function DB(BB) {
      for (var OB, GB, DB = 0, QB = BB.length, oB = 0; oB < BB.length;) {
        for (OB = BB[oB], GB = 0; oB < QB && BB[oB] === OB;) ++oB, ++GB;
        DB += YB.log2(GB) / 7 | 0, DB += YB.log2(OB >>> 0) / 7 | 0, DB += 2
      }
      return DB
    }
    OB.size = DB, OB.encode = function(BB, OB) {
      OB || (OB = new Uint8Array(DB(BB)));
      for (var GB, YB, QB = 0, oB = OB.length, jB = 0; jB < BB.length;) {
        for (GB = BB[jB], YB = 0; jB < BB.length && BB[jB] === GB;) ++jB, ++YB;
        for (; QB < oB && YB >= 128;) OB[QB++] = 128 + (127 & YB), YB >>>= 7;
        if (QB >= oB) throw new Error("RLE buffer overflow");
        for (OB[QB++] = YB, GB >>>= 0; QB < oB && GB >= 128;) OB[QB++] = 128 + (127 & GB), GB >>>= 7;
        if (QB >= oB) throw new Error("RLE buffer overflow");
        OB[QB++] = GB
      }
      return OB
    }, OB.decode = function(BB, OB) {
      for (var GB, YB, DB, QB, oB = OB.length, jB = BB.length, yB = 0, JB = 0; JB < jB;) {
        for (GB = 0, YB = 0; JB < jB && BB[JB] >= 128;) GB += (127 & BB[JB++]) << YB, YB += 7;
        if (GB += BB[JB++] << YB, JB >= jB) throw new Error("RLE buffer underrun");
        if (yB + GB > oB) throw new Error("Chunk buffer overflow");
        for (DB = 0, YB = 0; JB < jB && BB[JB] >= 128;) DB += (127 & BB[JB++]) << YB, YB += 7;
        if (JB >= jB) throw new Error("RLE buffer underrun");
        for (DB += BB[JB++] << YB, QB = 0; QB < GB; ++QB) OB[yB++] = DB
      }
      return OB
    }
  },
  38392: (BB, OB) => {
    function GB(BB) {
      var OB = 32;
      return (BB &= -BB) && OB--, 65535 & BB && (OB -= 16), 16711935 & BB && (OB -= 8), 252645135 & BB && (OB -= 4), 858993459 & BB && (OB -= 2), 1431655765 & BB && (OB -= 1), OB
    }
    OB.INT_BITS = 32, OB.INT_MAX = 2147483647, OB.INT_MIN = -1 << 31, OB.sign = function(BB) {
      return (BB > 0) - (BB < 0)
    }, OB.abs = function(BB) {
      var OB = BB >> 31;
      return (BB ^ OB) - OB
    }, OB.min = function(BB, OB) {
      return OB ^ (BB ^ OB) & -(BB < OB)
    }, OB.max = function(BB, OB) {
      return BB ^ (BB ^ OB) & -(BB < OB)
    }, OB.isPow2 = function(BB) {
      return !(BB & BB - 1) && !!BB
    }, OB.log2 = function(BB) {
      var OB, GB;
      return OB = (BB > 65535) << 4, OB |= GB = ((BB >>>= OB) > 255) << 3, OB |= GB = ((BB >>>= GB) > 15) << 2, (OB |= GB = ((BB >>>= GB) > 3) << 1) | (BB >>>= GB) >> 1
    }, OB.log10 = function(BB) {
      return BB >= 1e9 ? 9 : BB >= 1e8 ? 8 : BB >= 1e7 ? 7 : BB >= 1e6 ? 6 : BB >= 1e5 ? 5 : BB >= 1e4 ? 4 : BB >= 1e3 ? 3 : BB >= 100 ? 2 : BB >= 10 ? 1 : 0
    }, OB.popCount = function(BB) {
      return 16843009 * ((BB = (858993459 & (BB -= BB >>> 1 & 1431655765)) + (BB >>> 2 & 858993459)) + (BB >>> 4) & 252645135) >>> 24
    }, OB.countTrailingZeros = GB, OB.nextPow2 = function(BB) {
      return BB += 0 === BB, --BB, BB |= BB >>> 1, BB |= BB >>> 2, BB |= BB >>> 4, BB |= BB >>> 8, (BB |= BB >>> 16) + 1
    }, OB.prevPow2 = function(BB) {
      return BB |= BB >>> 1, BB |= BB >>> 2, BB |= BB >>> 4, BB |= BB >>> 8, (BB |= BB >>> 16) - (BB >>> 1)
    }, OB.parity = function(BB) {
      return BB ^= BB >>> 16, BB ^= BB >>> 8, BB ^= BB >>> 4, 27030 >>> (BB &= 15) & 1
    };
    var YB = new Array(256);
    ! function(BB) {
      for (var OB = 0; OB < 256; ++OB) {
        var GB = OB,
          YB = OB,
          DB = 7;
        for (GB >>>= 1; GB; GB >>>= 1) YB <<= 1, YB |= 1 & GB, --DB;
        BB[OB] = YB << DB & 255
      }
    }(YB), OB.reverse = function(BB) {
      return YB[255 & BB] << 24 | YB[BB >>> 8 & 255] << 16 | YB[BB >>> 16 & 255] << 8 | YB[BB >>> 24 & 255]
    }, OB.interleave2 = function(BB, OB) {
      return (BB = 1431655765 & ((BB = 858993459 & ((BB = 252645135 & ((BB = 16711935 & ((BB &= 65535) | BB << 8)) | BB << 4)) | BB << 2)) | BB << 1)) | (OB = 1431655765 & ((OB = 858993459 & ((OB = 252645135 & ((OB = 16711935 & ((OB &= 65535) | OB << 8)) | OB << 4)) | OB << 2)) | OB << 1)) << 1
    }, OB.deinterleave2 = function(BB, OB) {
      return (BB = 65535 & ((BB = 16711935 & ((BB = 252645135 & ((BB = 858993459 & ((BB = BB >>> OB & 1431655765) | BB >>> 1)) | BB >>> 2)) | BB >>> 4)) | BB >>> 16)) << 16 >> 16
    }, OB.interleave3 = function(BB, OB, GB) {
      return BB = 1227133513 & ((BB = 3272356035 & ((BB = 251719695 & ((BB = 4278190335 & ((BB &= 1023) | BB << 16)) | BB << 8)) | BB << 4)) | BB << 2), (BB |= (OB = 1227133513 & ((OB = 3272356035 & ((OB = 251719695 & ((OB = 4278190335 & ((OB &= 1023) | OB << 16)) | OB << 8)) | OB << 4)) | OB << 2)) << 1) | (GB = 1227133513 & ((GB = 3272356035 & ((GB = 251719695 & ((GB = 4278190335 & ((GB &= 1023) | GB << 16)) | GB << 8)) | GB << 4)) | GB << 2)) << 2
    }, OB.deinterleave3 = function(BB, OB) {
      return (BB = 1023 & ((BB = 4278190335 & ((BB = 251719695 & ((BB = 3272356035 & ((BB = BB >>> OB & 1227133513) | BB >>> 2)) | BB >>> 4)) | BB >>> 8)) | BB >>> 16)) << 22 >> 22
    }, OB.nextCombination = function(BB) {
      var OB = BB | BB - 1;
      return OB + 1 | (~OB & -~OB) - 1 >>> GB(BB) + 1
    }
  },
  40816: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      emptyColumnHeight: () => WB,
      loadHeatmapSchematic: () => AB,
      readSchematicBlocks: () => VB
    });
    var YB = GB(4174),
      DB = GB.n(YB),
      QB = GB(4150),
      oB = GB(38383),
      jB = GB(192),
      yB = GB(9927),
      JB = GB(40190);
    const MB = [{
        name: "x",
        type: "int"
      }, {
        name: "y",
        type: "int"
      }, {
        name: "z",
        type: "int"
      }],
      PB = [{
        name: "name",
        type: "string"
      }, {
        name: "startOffset",
        type: {
          type: "record",
          fields: MB
        }
      }, {
        name: "dimensions",
        type: {
          type: "record",
          fields: MB
        }
      }, {
        name: "chunkData",
        type: {
          type: "array",
          items: {
            type: "record",
            fields: [...MB, {
              name: "rle",
              type: "bytes"
            }]
          }
        }
      }],
      zB = DB().Type.forSchema({
        type: "record",
        fields: PB
      }),
      lB = DB().Type.forSchema({
        type: "record",
        fields: [...PB, {
          name: "blockData",
          type: {
            type: "array",
            items: {
              type: "record",
              fields: [...MB, {
                name: "data",
                type: "bytes"
              }]
            }
          }
        }, {
          name: "pasteOffset",
          type: {
            type: "record",
            fields: MB
          }
        }]
      }),
      pB = 2,
      qB = 6,
      ZB = 16,
      NB = 4096,
      RB = jB.f.pP,
      WB = -2147483648;
    async function AB(BB) {
      const OB = await (0, JB.e)(),
        GB = await VB(new Uint8Array(await BB.arrayBuffer()), (BB => OB.get(BB)));
      return {
        surface: GB.surface,
        topDown: nB(GB.columnTops)
      }
    }
    async function VB(BB, OB) {
      var GB;
      if (BB.byteLength < 4) throw new Error("The file is too short to be a schematic.");
      const YB = new DataView(BB.buffer, BB.byteOffset, BB.byteLength).getUint32(0, !0);
      if (YB > qB) throw new Error("The file isn't a schematic this version of Bloxd can read.");
      const DB = (YB >= pB ? lB : zB).decode(QB.BP.from(BB.subarray(4)), 0).value;
      if (!DB) throw new Error("The file isn't a schematic.");
      if (0 === DB.chunkData.length) throw new Error("The schematic has no blocks in it.");
      const jB = null !== (GB = DB.pasteOffset) && void 0 !== GB ? GB : {
          x: 0,
          y: 0,
          z: 0
        },
        yB = [jB.x, jB.y, jB.z].map((BB => Math.floor(BB / RB))),
        JB = DB.chunkData.map((BB => ({
          x: BB.x + yB[0],
          y: BB.y + yB[1],
          z: BB.z + yB[2],
          rle: BB.rle
        }))),
        MB = new Map;
      for (const [QB, zB] of JB.entries()) {
        const BB = new Uint16Array(RB ** 3);
        oB.decode(zB.rle, BB), MB.set(`${zB.x},${zB.y},${zB.z}`, BB), QB % ZB === ZB - 1 && await UB()
      }
      const PB = (BB, OB, GB) => BB * RB * RB + OB * RB + GB,
        NB = (BB, OB, GB) => {
          var YB, DB;
          const QB = Math.floor(BB / RB),
            oB = Math.floor(OB / RB),
            jB = Math.floor(GB / RB);
          return null !== (YB = null === (DB = MB.get(`${QB},${oB},${jB}`)) || void 0 === DB ? void 0 : DB[PB(BB - QB * RB, OB - oB * RB, GB - jB * RB)]) && void 0 !== YB ? YB : 0
        },
        AB = new Map,
        VB = [],
        nB = [];
      for (const [QB, oB] of JB.entries()) {
        const BB = MB.get(`${oB.x},${oB.y},${oB.z}`),
          GB = [oB.x * RB, oB.y * RB, oB.z * RB],
          YB = (OB, YB, DB) => OB < 0 || YB < 0 || DB < 0 || OB >= RB || YB >= RB || DB >= RB ? NB(GB[0] + OB, GB[1] + YB, GB[2] + DB) : BB[PB(OB, YB, DB)],
          DB = `${oB.x},${oB.z}`;
        let jB = AB.get(DB);
        void 0 === jB && (jB = {
          chunkX: oB.x,
          chunkZ: oB.z,
          heights: new Int32Array(RB * RB).fill(WB),
          colours: new Uint8Array(RB * RB * 3)
        }, AB.set(DB, jB));
        for (let QB = 0; QB < RB; QB++)
          for (let DB = 0; DB < RB; DB++)
            for (let oB = 0; oB < RB; oB++) {
              const yB = BB[PB(QB, DB, oB)];
              if (0 === yB) continue;
              const JB = GB[0] + QB,
                MB = GB[1] + DB,
                zB = GB[2] + oB,
                lB = OB(yB);
              if (null === lB) continue;
              const pB = oB * RB + QB;
              MB > jB.heights[pB] && (jB.heights[pB] = MB, jB.colours.set(lB, 3 * pB));
              !SB(yB) && (SB(YB(QB + 1, DB, oB)) || SB(YB(QB - 1, DB, oB)) || SB(YB(QB, DB + 1, oB)) || SB(YB(QB, DB - 1, oB)) || SB(YB(QB, DB, oB + 1)) || SB(YB(QB, DB, oB - 1))) && (VB.push(JB, MB, zB), nB.push(lB[0], lB[1], lB[2]))
            }
        QB % ZB === ZB - 1 && await UB()
      }
      if (0 === VB.length) throw new Error("The schematic has no blocks in it.");
      return {
        name: DB.name,
        surface: {
          positions: Int32Array.from(VB),
          colours: Uint8Array.from(nB),
          count: VB.length / 3
        },
        columnTops: [...AB.values()]
      }
    }

    function SB(BB) {
      if (0 === BB) return !0;
      const OB = yB.h[BB];
      return void 0 === OB || OB.fl || OB.transTex || !1 === OB.solid
    }

    function nB(BB) {
      let OB = 1 / 0,
        GB = -1 / 0,
        YB = 1 / 0,
        DB = -1 / 0;
      for (const {
          chunkX: pB,
          chunkZ: qB,
          heights: ZB
        }
        of BB) ZB.forEach(((BB, QB) => {
        if (BB === WB) return;
        const oB = pB * RB + QB % RB,
          jB = qB * RB + Math.floor(QB / RB);
        OB = Math.min(OB, oB), GB = Math.max(GB, oB), YB = Math.min(YB, jB), DB = Math.max(DB, jB)
      }));
      const QB = GB - OB + 1,
        oB = DB - YB + 1,
        jB = Math.max(1, Math.ceil(QB / NB), Math.ceil(oB / NB)),
        yB = Math.ceil(QB / jB),
        JB = Math.ceil(oB / jB),
        MB = document.createElement("canvas");
      MB.width = yB, MB.height = JB;
      const PB = MB.getContext("2d");
      if (!PB) throw new Error("Couldn't draw the schematic from above.");
      const zB = PB.createImageData(yB, JB),
        lB = new Int32Array(yB * JB).fill(WB);
      for (const {
          chunkX: pB,
          chunkZ: qB,
          heights: ZB,
          colours: NB
        }
        of BB) ZB.forEach(((BB, OB) => {
        const DB = pB * RB + OB % RB,
          QB = qB * RB + Math.floor(OB / RB),
          oB = Math.floor((QB - YB) / jB) * yB + Math.floor((GB - DB) / jB);
        BB === WB || BB <= lB[oB] || (lB[oB] = BB, zB.data.set(NB.subarray(3 * OB, 3 * OB + 3), 4 * oB), zB.data[4 * oB + 3] = 255)
      }));
      return PB.putImageData(zB, 0, 0), {
        maxX: GB,
        minZ: YB,
        width: yB * jB,
        depth: JB * jB,
        canvas: MB
      }
    }

    function UB() {
      return new Promise((BB => {
        setTimeout(BB, 0)
      }))
    }
  },
  40190: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => DB
    });
    var YB = GB(40197);
    async function DB() {
      const {
        averageColors: BB
      } = await GB.e(228).then((() => GB(34878)));
      return new YB.c(BB)
    }
  },
  40197: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => jB,
      e: () => oB
    });
    var YB = GB(9927);
    const DB = {
        Water: [63, 118, 228],
        Lava: [232, 110, 30]
      },
      QB = [150, 150, 150],
      oB = -2147483648;
    class jB {
      constructor(BB) {
        this.averages = BB, this.byId = new Map
      }
      get(BB) {
        var OB, GB, oB, jB, yB;
        const JB = this.byId.get(BB);
        if (void 0 !== JB) return JB;
        const MB = null !== (OB = null === (GB = YB.h[BB]) || void 0 === GB ? void 0 : GB.name) && void 0 !== OB ? OB : "",
          PB = MB.split("|")[0],
          zB = null !== (oB = this.averages[MB]) && void 0 !== oB ? oB : this.averages[PB],
          lB = null !== (jB = null !== (yB = null === zB || void 0 === zB ? void 0 : zB[0]) && void 0 !== yB ? yB : DB[PB]) && void 0 !== jB ? jB : 0 === (null === zB || void 0 === zB ? void 0 : zB.length) ? null : QB;
        return this.byId.set(BB, lB), lB
      }
      getDrawnIds() {
        const BB = new Uint8Array(65536);
        for (let OB = 1; OB < 65536; OB++) void 0 !== YB.h[OB] && null !== this.get(OB) && (BB[OB] = 1);
        return BB
      }
      drawPixel(BB, OB, GB, YB, DB, QB) {
        const jB = function(BB, OB, GB) {
            const YB = BB - OB + (BB - GB);
            return Math.max(.65, Math.min(1.2, .97 + .055 * YB))
          }(YB, DB === oB ? YB : DB, QB === oB ? YB : QB),
          yB = this.get(GB);
        BB[OB] = yB[0] * jB, BB[OB + 1] = yB[1] * jB, BB[OB + 2] = yB[2] * jB, BB[OB + 3] = 255
      }
    }
  },
  10027: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => DB,
      g: () => QB
    });
    var YB = GB(9974);
    const DB = "Air",
      QB = Object.freeze(new YB.g(DB, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);