export const id = 197;
export const ids = [197];
export const modules = {
  37597: (TT, kT, cT) => {
    var lT = cT(37603);

    function MT(TT) {
      for (var kT, cT, MT = 0, KT = TT.length, OT = 0; OT < TT.length;) {
        for (kT = TT[OT], cT = 0; OT < KT && TT[OT] === kT;) ++OT, ++cT;
        MT += lT.log2(cT) / 7 | 0, MT += lT.log2(kT >>> 0) / 7 | 0, MT += 2
      }
      return MT
    }
    kT.size = MT, kT.encode = function(TT, kT) {
      kT || (kT = new Uint8Array(MT(TT)));
      for (var cT, lT, KT = 0, OT = kT.length, yT = 0; yT < TT.length;) {
        for (cT = TT[yT], lT = 0; yT < TT.length && TT[yT] === cT;) ++yT, ++lT;
        for (; KT < OT && lT >= 128;) kT[KT++] = 128 + (127 & lT), lT >>>= 7;
        if (KT >= OT) throw new Error("RLE buffer overflow");
        for (kT[KT++] = lT, cT >>>= 0; KT < OT && cT >= 128;) kT[KT++] = 128 + (127 & cT), cT >>>= 7;
        if (KT >= OT) throw new Error("RLE buffer overflow");
        kT[KT++] = cT
      }
      return kT
    }, kT.decode = function(TT, kT) {
      for (var cT, lT, MT, KT, OT = kT.length, yT = TT.length, fT = 0, xT = 0; xT < yT;) {
        for (cT = 0, lT = 0; xT < yT && TT[xT] >= 128;) cT += (127 & TT[xT++]) << lT, lT += 7;
        if (cT += TT[xT++] << lT, xT >= yT) throw new Error("RLE buffer underrun");
        if (fT + cT > OT) throw new Error("Chunk buffer overflow");
        for (MT = 0, lT = 0; xT < yT && TT[xT] >= 128;) MT += (127 & TT[xT++]) << lT, lT += 7;
        if (xT >= yT) throw new Error("RLE buffer underrun");
        for (MT += TT[xT++] << lT, KT = 0; KT < cT; ++KT) kT[fT++] = MT
      }
      return kT
    }
  },
  37603: (TT, kT) => {
    function cT(TT) {
      var kT = 32;
      return (TT &= -TT) && kT--, 65535 & TT && (kT -= 16), 16711935 & TT && (kT -= 8), 252645135 & TT && (kT -= 4), 858993459 & TT && (kT -= 2), 1431655765 & TT && (kT -= 1), kT
    }
    kT.INT_BITS = 32, kT.INT_MAX = 2147483647, kT.INT_MIN = -1 << 31, kT.sign = function(TT) {
      return (TT > 0) - (TT < 0)
    }, kT.abs = function(TT) {
      var kT = TT >> 31;
      return (TT ^ kT) - kT
    }, kT.min = function(TT, kT) {
      return kT ^ (TT ^ kT) & -(TT < kT)
    }, kT.max = function(TT, kT) {
      return TT ^ (TT ^ kT) & -(TT < kT)
    }, kT.isPow2 = function(TT) {
      return !(TT & TT - 1) && !!TT
    }, kT.log2 = function(TT) {
      var kT, cT;
      return kT = (TT > 65535) << 4, kT |= cT = ((TT >>>= kT) > 255) << 3, kT |= cT = ((TT >>>= cT) > 15) << 2, (kT |= cT = ((TT >>>= cT) > 3) << 1) | (TT >>>= cT) >> 1
    }, kT.log10 = function(TT) {
      return TT >= 1e9 ? 9 : TT >= 1e8 ? 8 : TT >= 1e7 ? 7 : TT >= 1e6 ? 6 : TT >= 1e5 ? 5 : TT >= 1e4 ? 4 : TT >= 1e3 ? 3 : TT >= 100 ? 2 : TT >= 10 ? 1 : 0
    }, kT.popCount = function(TT) {
      return 16843009 * ((TT = (858993459 & (TT -= TT >>> 1 & 1431655765)) + (TT >>> 2 & 858993459)) + (TT >>> 4) & 252645135) >>> 24
    }, kT.countTrailingZeros = cT, kT.nextPow2 = function(TT) {
      return TT += 0 === TT, --TT, TT |= TT >>> 1, TT |= TT >>> 2, TT |= TT >>> 4, TT |= TT >>> 8, (TT |= TT >>> 16) + 1
    }, kT.prevPow2 = function(TT) {
      return TT |= TT >>> 1, TT |= TT >>> 2, TT |= TT >>> 4, TT |= TT >>> 8, (TT |= TT >>> 16) - (TT >>> 1)
    }, kT.parity = function(TT) {
      return TT ^= TT >>> 16, TT ^= TT >>> 8, TT ^= TT >>> 4, 27030 >>> (TT &= 15) & 1
    };
    var lT = new Array(256);
    ! function(TT) {
      for (var kT = 0; kT < 256; ++kT) {
        var cT = kT,
          lT = kT,
          MT = 7;
        for (cT >>>= 1; cT; cT >>>= 1) lT <<= 1, lT |= 1 & cT, --MT;
        TT[kT] = lT << MT & 255
      }
    }(lT), kT.reverse = function(TT) {
      return lT[255 & TT] << 24 | lT[TT >>> 8 & 255] << 16 | lT[TT >>> 16 & 255] << 8 | lT[TT >>> 24 & 255]
    }, kT.interleave2 = function(TT, kT) {
      return (TT = 1431655765 & ((TT = 858993459 & ((TT = 252645135 & ((TT = 16711935 & ((TT &= 65535) | TT << 8)) | TT << 4)) | TT << 2)) | TT << 1)) | (kT = 1431655765 & ((kT = 858993459 & ((kT = 252645135 & ((kT = 16711935 & ((kT &= 65535) | kT << 8)) | kT << 4)) | kT << 2)) | kT << 1)) << 1
    }, kT.deinterleave2 = function(TT, kT) {
      return (TT = 65535 & ((TT = 16711935 & ((TT = 252645135 & ((TT = 858993459 & ((TT = TT >>> kT & 1431655765) | TT >>> 1)) | TT >>> 2)) | TT >>> 4)) | TT >>> 16)) << 16 >> 16
    }, kT.interleave3 = function(TT, kT, cT) {
      return TT = 1227133513 & ((TT = 3272356035 & ((TT = 251719695 & ((TT = 4278190335 & ((TT &= 1023) | TT << 16)) | TT << 8)) | TT << 4)) | TT << 2), (TT |= (kT = 1227133513 & ((kT = 3272356035 & ((kT = 251719695 & ((kT = 4278190335 & ((kT &= 1023) | kT << 16)) | kT << 8)) | kT << 4)) | kT << 2)) << 1) | (cT = 1227133513 & ((cT = 3272356035 & ((cT = 251719695 & ((cT = 4278190335 & ((cT &= 1023) | cT << 16)) | cT << 8)) | cT << 4)) | cT << 2)) << 2
    }, kT.deinterleave3 = function(TT, kT) {
      return (TT = 1023 & ((TT = 4278190335 & ((TT = 251719695 & ((TT = 3272356035 & ((TT = TT >>> kT & 1227133513) | TT >>> 2)) | TT >>> 4)) | TT >>> 8)) | TT >>> 16)) << 22 >> 22
    }, kT.nextCombination = function(TT) {
      var kT = TT | TT - 1;
      return kT + 1 | (~kT & -~kT) - 1 >>> cT(TT) + 1
    }
  },
  39438: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      emptyColumnHeight: () => DT,
      loadHeatmapSchematic: () => aT,
      readSchematicBlocks: () => FT
    });
    var lT = cT(3734),
      MT = cT.n(lT),
      KT = cT(3719),
      OT = cT(37597),
      yT = cT(218),
      fT = cT(9447);
    const xT = [{
        name: "x",
        type: "int"
      }, {
        name: "y",
        type: "int"
      }, {
        name: "z",
        type: "int"
      }],
      IT = [{
        name: "name",
        type: "string"
      }, {
        name: "startOffset",
        type: {
          type: "record",
          fields: xT
        }
      }, {
        name: "dimensions",
        type: {
          type: "record",
          fields: xT
        }
      }, {
        name: "chunkData",
        type: {
          type: "array",
          items: {
            type: "record",
            fields: [...xT, {
              name: "rle",
              type: "bytes"
            }]
          }
        }
      }],
      AT = MT().Type.forSchema({
        type: "record",
        fields: IT
      }),
      CT = MT().Type.forSchema({
        type: "record",
        fields: [...IT, {
          name: "blockData",
          type: {
            type: "array",
            items: {
              type: "record",
              fields: [...xT, {
                name: "data",
                type: "bytes"
              }]
            }
          }
        }, {
          name: "pasteOffset",
          type: {
            type: "record",
            fields: xT
          }
        }]
      }),
      jT = 2,
      vT = 6,
      tT = {
        Water: [63, 118, 228],
        Lava: [232, 110, 30]
      },
      hT = [150, 150, 150],
      NT = 16,
      QT = 4096,
      ST = yT.f.vv,
      DT = -2147483648;
    async function aT(TT) {
      const kT = await FT(new Uint8Array(await TT.arrayBuffer()), await async function() {
        const {
          averageColors: TT
        } = await cT.e(201).then((() => cT(34029))), kT = new Map;
        return cT => {
          var lT, MT, KT, OT, yT;
          const xT = kT.get(cT);
          if (void 0 !== xT) return xT;
          const IT = null !== (lT = null === (MT = fT.i[cT]) || void 0 === MT ? void 0 : MT.name) && void 0 !== lT ? lT : "",
            AT = null !== (KT = TT[IT]) && void 0 !== KT ? KT : TT[IT.split("|")[0]],
            CT = tT[IT.split("|")[0]],
            jT = null !== (OT = null !== (yT = null === AT || void 0 === AT ? void 0 : AT[0]) && void 0 !== yT ? yT : CT) && void 0 !== OT ? OT : 0 === (null === AT || void 0 === AT ? void 0 : AT.length) ? null : hT;
          return kT.set(cT, jT), jT
        }
      }());
      return {
        surface: kT.surface,
        topDown: PT(kT.columnTops)
      }
    }
    async function FT(TT, kT) {
      var cT;
      if (TT.byteLength < 4) throw new Error("The file is too short to be a schematic.");
      const lT = new DataView(TT.buffer, TT.byteOffset, TT.byteLength).getUint32(0, !0);
      if (lT > vT) throw new Error("The file isn't a schematic this version of Bloxd can read.");
      const MT = (lT >= jT ? CT : AT).decode(KT.Ov.from(TT.subarray(4)), 0).value;
      if (!MT) throw new Error("The file isn't a schematic.");
      if (0 === MT.chunkData.length) throw new Error("The schematic has no blocks in it.");
      const yT = null !== (cT = MT.pasteOffset) && void 0 !== cT ? cT : {
          x: 0,
          y: 0,
          z: 0
        },
        fT = [yT.x, yT.y, yT.z].map((TT => Math.floor(TT / ST))),
        xT = MT.chunkData.map((TT => ({
          x: TT.x + fT[0],
          y: TT.y + fT[1],
          z: TT.z + fT[2],
          rle: TT.rle
        }))),
        IT = new Map;
      for (const [KT, AT] of xT.entries()) {
        const TT = new Uint16Array(ST ** 3);
        OT.decode(AT.rle, TT), IT.set(`${AT.x},${AT.y},${AT.z}`, TT), KT % NT === NT - 1 && await wT()
      }
      const tT = (TT, kT, cT) => TT * ST * ST + kT * ST + cT,
        hT = (TT, kT, cT) => {
          var lT, MT;
          const KT = Math.floor(TT / ST),
            OT = Math.floor(kT / ST),
            yT = Math.floor(cT / ST);
          return null !== (lT = null === (MT = IT.get(`${KT},${OT},${yT}`)) || void 0 === MT ? void 0 : MT[tT(TT - KT * ST, kT - OT * ST, cT - yT * ST)]) && void 0 !== lT ? lT : 0
        },
        QT = new Map,
        aT = [],
        FT = [];
      for (const [KT, OT] of xT.entries()) {
        const TT = IT.get(`${OT.x},${OT.y},${OT.z}`),
          cT = [OT.x * ST, OT.y * ST, OT.z * ST],
          lT = (kT, lT, MT) => kT < 0 || lT < 0 || MT < 0 || kT >= ST || lT >= ST || MT >= ST ? hT(cT[0] + kT, cT[1] + lT, cT[2] + MT) : TT[tT(kT, lT, MT)],
          MT = `${OT.x},${OT.z}`;
        let yT = QT.get(MT);
        void 0 === yT && (yT = {
          chunkX: OT.x,
          chunkZ: OT.z,
          heights: new Int32Array(ST * ST).fill(DT),
          colours: new Uint8Array(ST * ST * 3)
        }, QT.set(MT, yT));
        for (let KT = 0; KT < ST; KT++)
          for (let MT = 0; MT < ST; MT++)
            for (let OT = 0; OT < ST; OT++) {
              const fT = TT[tT(KT, MT, OT)];
              if (0 === fT) continue;
              const xT = cT[0] + KT,
                IT = cT[1] + MT,
                AT = cT[2] + OT,
                CT = kT(fT);
              if (null === CT) continue;
              const jT = OT * ST + KT;
              IT > yT.heights[jT] && (yT.heights[jT] = IT, yT.colours.set(CT, 3 * jT));
              !rT(fT) && (rT(lT(KT + 1, MT, OT)) || rT(lT(KT - 1, MT, OT)) || rT(lT(KT, MT + 1, OT)) || rT(lT(KT, MT - 1, OT)) || rT(lT(KT, MT, OT + 1)) || rT(lT(KT, MT, OT - 1))) && (aT.push(xT, IT, AT), FT.push(CT[0], CT[1], CT[2]))
            }
        KT % NT === NT - 1 && await wT()
      }
      if (0 === aT.length) throw new Error("The schematic has no blocks in it.");
      return {
        name: MT.name,
        surface: {
          positions: Int32Array.from(aT),
          colours: Uint8Array.from(FT),
          count: aT.length / 3
        },
        columnTops: [...QT.values()]
      }
    }

    function rT(TT) {
      if (0 === TT) return !0;
      const kT = fT.i[TT];
      return void 0 === kT || kT.lj || kT.transTex || !1 === kT.solid
    }

    function PT(TT) {
      let kT = 1 / 0,
        cT = -1 / 0,
        lT = 1 / 0,
        MT = -1 / 0;
      for (const {
          chunkX: vT,
          chunkZ: tT,
          heights: hT
        }
        of TT) hT.forEach(((TT, KT) => {
        if (TT === DT) return;
        const OT = vT * ST + KT % ST,
          yT = tT * ST + Math.floor(KT / ST);
        kT = Math.min(kT, OT), cT = Math.max(cT, OT), lT = Math.min(lT, yT), MT = Math.max(MT, yT)
      }));
      const KT = cT - kT + 1,
        OT = MT - lT + 1,
        yT = Math.max(1, Math.ceil(KT / QT), Math.ceil(OT / QT)),
        fT = Math.ceil(KT / yT),
        xT = Math.ceil(OT / yT),
        IT = document.createElement("canvas");
      IT.width = fT, IT.height = xT;
      const AT = IT.getContext("2d");
      if (!AT) throw new Error("Couldn't draw the schematic from above.");
      const CT = AT.createImageData(fT, xT),
        jT = new Int32Array(fT * xT).fill(DT);
      for (const {
          chunkX: vT,
          chunkZ: tT,
          heights: hT,
          colours: NT
        }
        of TT) hT.forEach(((TT, kT) => {
        const MT = vT * ST + kT % ST,
          KT = tT * ST + Math.floor(kT / ST),
          OT = Math.floor((KT - lT) / yT) * fT + Math.floor((cT - MT) / yT);
        TT === DT || TT <= jT[OT] || (jT[OT] = TT, CT.data.set(NT.subarray(3 * kT, 3 * kT + 3), 4 * OT), CT.data[4 * OT + 3] = 255)
      }));
      return AT.putImageData(CT, 0, 0), {
        maxX: cT,
        minZ: lT,
        width: fT * yT,
        depth: xT * yT,
        canvas: IT
      }
    }

    function wT() {
      return new Promise((TT => {
        setTimeout(TT, 0)
      }))
    }
  },
  9542: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => MT,
      e: () => KT
    });
    var lT = cT(9495);
    const MT = "Air",
      KT = Object.freeze(new lT.d(MT, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);