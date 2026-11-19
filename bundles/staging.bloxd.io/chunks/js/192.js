export const id = 192;
export const ids = [192];
export const modules = {
  36674: (TT, oT, IT) => {
    var iT = IT(36678);

    function zT(TT) {
      for (var oT, IT, zT = 0, kT = TT.length, WT = 0; WT < TT.length;) {
        for (oT = TT[WT], IT = 0; WT < kT && TT[WT] === oT;) ++WT, ++IT;
        zT += iT.log2(IT) / 7 | 0, zT += iT.log2(oT >>> 0) / 7 | 0, zT += 2
      }
      return zT
    }
    oT.size = zT, oT.encode = function(TT, oT) {
      oT || (oT = new Uint8Array(zT(TT)));
      for (var IT, iT, kT = 0, WT = oT.length, XT = 0; XT < TT.length;) {
        for (IT = TT[XT], iT = 0; XT < TT.length && TT[XT] === IT;) ++XT, ++iT;
        for (; kT < WT && iT >= 128;) oT[kT++] = 128 + (127 & iT), iT >>>= 7;
        if (kT >= WT) throw new Error("RLE buffer overflow");
        for (oT[kT++] = iT, IT >>>= 0; kT < WT && IT >= 128;) oT[kT++] = 128 + (127 & IT), IT >>>= 7;
        if (kT >= WT) throw new Error("RLE buffer overflow");
        oT[kT++] = IT
      }
      return oT
    }, oT.decode = function(TT, oT) {
      for (var IT, iT, zT, kT, WT = oT.length, XT = TT.length, BT = 0, FT = 0; FT < XT;) {
        for (IT = 0, iT = 0; FT < XT && TT[FT] >= 128;) IT += (127 & TT[FT++]) << iT, iT += 7;
        if (IT += TT[FT++] << iT, FT >= XT) throw new Error("RLE buffer underrun");
        if (BT + IT > WT) throw new Error("Chunk buffer overflow");
        for (zT = 0, iT = 0; FT < XT && TT[FT] >= 128;) zT += (127 & TT[FT++]) << iT, iT += 7;
        if (FT >= XT) throw new Error("RLE buffer underrun");
        for (zT += TT[FT++] << iT, kT = 0; kT < IT; ++kT) oT[BT++] = zT
      }
      return oT
    }
  },
  36678: (TT, oT) => {
    function IT(TT) {
      var oT = 32;
      return (TT &= -TT) && oT--, 65535 & TT && (oT -= 16), 16711935 & TT && (oT -= 8), 252645135 & TT && (oT -= 4), 858993459 & TT && (oT -= 2), 1431655765 & TT && (oT -= 1), oT
    }
    oT.INT_BITS = 32, oT.INT_MAX = 2147483647, oT.INT_MIN = -1 << 31, oT.sign = function(TT) {
      return (TT > 0) - (TT < 0)
    }, oT.abs = function(TT) {
      var oT = TT >> 31;
      return (TT ^ oT) - oT
    }, oT.min = function(TT, oT) {
      return oT ^ (TT ^ oT) & -(TT < oT)
    }, oT.max = function(TT, oT) {
      return TT ^ (TT ^ oT) & -(TT < oT)
    }, oT.isPow2 = function(TT) {
      return !(TT & TT - 1) && !!TT
    }, oT.log2 = function(TT) {
      var oT, IT;
      return oT = (TT > 65535) << 4, oT |= IT = ((TT >>>= oT) > 255) << 3, oT |= IT = ((TT >>>= IT) > 15) << 2, (oT |= IT = ((TT >>>= IT) > 3) << 1) | (TT >>>= IT) >> 1
    }, oT.log10 = function(TT) {
      return TT >= 1e9 ? 9 : TT >= 1e8 ? 8 : TT >= 1e7 ? 7 : TT >= 1e6 ? 6 : TT >= 1e5 ? 5 : TT >= 1e4 ? 4 : TT >= 1e3 ? 3 : TT >= 100 ? 2 : TT >= 10 ? 1 : 0
    }, oT.popCount = function(TT) {
      return 16843009 * ((TT = (858993459 & (TT -= TT >>> 1 & 1431655765)) + (TT >>> 2 & 858993459)) + (TT >>> 4) & 252645135) >>> 24
    }, oT.countTrailingZeros = IT, oT.nextPow2 = function(TT) {
      return TT += 0 === TT, --TT, TT |= TT >>> 1, TT |= TT >>> 2, TT |= TT >>> 4, TT |= TT >>> 8, (TT |= TT >>> 16) + 1
    }, oT.prevPow2 = function(TT) {
      return TT |= TT >>> 1, TT |= TT >>> 2, TT |= TT >>> 4, TT |= TT >>> 8, (TT |= TT >>> 16) - (TT >>> 1)
    }, oT.parity = function(TT) {
      return TT ^= TT >>> 16, TT ^= TT >>> 8, TT ^= TT >>> 4, 27030 >>> (TT &= 15) & 1
    };
    var iT = new Array(256);
    ! function(TT) {
      for (var oT = 0; oT < 256; ++oT) {
        var IT = oT,
          iT = oT,
          zT = 7;
        for (IT >>>= 1; IT; IT >>>= 1) iT <<= 1, iT |= 1 & IT, --zT;
        TT[oT] = iT << zT & 255
      }
    }(iT), oT.reverse = function(TT) {
      return iT[255 & TT] << 24 | iT[TT >>> 8 & 255] << 16 | iT[TT >>> 16 & 255] << 8 | iT[TT >>> 24 & 255]
    }, oT.interleave2 = function(TT, oT) {
      return (TT = 1431655765 & ((TT = 858993459 & ((TT = 252645135 & ((TT = 16711935 & ((TT &= 65535) | TT << 8)) | TT << 4)) | TT << 2)) | TT << 1)) | (oT = 1431655765 & ((oT = 858993459 & ((oT = 252645135 & ((oT = 16711935 & ((oT &= 65535) | oT << 8)) | oT << 4)) | oT << 2)) | oT << 1)) << 1
    }, oT.deinterleave2 = function(TT, oT) {
      return (TT = 65535 & ((TT = 16711935 & ((TT = 252645135 & ((TT = 858993459 & ((TT = TT >>> oT & 1431655765) | TT >>> 1)) | TT >>> 2)) | TT >>> 4)) | TT >>> 16)) << 16 >> 16
    }, oT.interleave3 = function(TT, oT, IT) {
      return TT = 1227133513 & ((TT = 3272356035 & ((TT = 251719695 & ((TT = 4278190335 & ((TT &= 1023) | TT << 16)) | TT << 8)) | TT << 4)) | TT << 2), (TT |= (oT = 1227133513 & ((oT = 3272356035 & ((oT = 251719695 & ((oT = 4278190335 & ((oT &= 1023) | oT << 16)) | oT << 8)) | oT << 4)) | oT << 2)) << 1) | (IT = 1227133513 & ((IT = 3272356035 & ((IT = 251719695 & ((IT = 4278190335 & ((IT &= 1023) | IT << 16)) | IT << 8)) | IT << 4)) | IT << 2)) << 2
    }, oT.deinterleave3 = function(TT, oT) {
      return (TT = 1023 & ((TT = 4278190335 & ((TT = 251719695 & ((TT = 3272356035 & ((TT = TT >>> oT & 1227133513) | TT >>> 2)) | TT >>> 4)) | TT >>> 8)) | TT >>> 16)) << 22 >> 22
    }, oT.nextCombination = function(TT) {
      var oT = TT | TT - 1;
      return oT + 1 | (~oT & -~oT) - 1 >>> IT(TT) + 1
    }
  },
  38579: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      emptyColumnHeight: () => hT,
      loadHeatmapSchematic: () => wT,
      readSchematicBlocks: () => mT
    });
    var iT = IT(3336),
      zT = IT.n(iT),
      kT = IT(3316),
      WT = IT(36674),
      XT = IT(193),
      BT = IT(8829);
    const FT = [{
        name: "x",
        type: "int"
      }, {
        name: "y",
        type: "int"
      }, {
        name: "z",
        type: "int"
      }],
      ST = [{
        name: "name",
        type: "string"
      }, {
        name: "startOffset",
        type: {
          type: "record",
          fields: FT
        }
      }, {
        name: "dimensions",
        type: {
          type: "record",
          fields: FT
        }
      }, {
        name: "chunkData",
        type: {
          type: "array",
          items: {
            type: "record",
            fields: [...FT, {
              name: "rle",
              type: "bytes"
            }]
          }
        }
      }],
      DT = zT().Type.forSchema({
        type: "record",
        fields: ST
      }),
      LT = zT().Type.forSchema({
        type: "record",
        fields: [...ST, {
          name: "blockData",
          type: {
            type: "array",
            items: {
              type: "record",
              fields: [...FT, {
                name: "data",
                type: "bytes"
              }]
            }
          }
        }, {
          name: "pasteOffset",
          type: {
            type: "record",
            fields: FT
          }
        }]
      }),
      xT = 2,
      cT = 6,
      KT = {
        Water: [63, 118, 228],
        Lava: [232, 110, 30]
      },
      MT = [150, 150, 150],
      rT = 16,
      AT = 4096,
      gT = XT.c.Yc,
      hT = -2147483648;
    async function wT(TT) {
      const oT = await mT(new Uint8Array(await TT.arrayBuffer()), await async function() {
        const {
          averageColors: TT
        } = await IT.e(196).then((() => IT(33287))), oT = new Map;
        return IT => {
          var iT, zT, kT, WT, XT;
          const FT = oT.get(IT);
          if (void 0 !== FT) return FT;
          const ST = null !== (iT = null === (zT = BT.j[IT]) || void 0 === zT ? void 0 : zT.name) && void 0 !== iT ? iT : "",
            DT = null !== (kT = TT[ST]) && void 0 !== kT ? kT : TT[ST.split("|")[0]],
            LT = KT[ST.split("|")[0]],
            xT = null !== (WT = null !== (XT = null === DT || void 0 === DT ? void 0 : DT[0]) && void 0 !== XT ? XT : LT) && void 0 !== WT ? WT : 0 === (null === DT || void 0 === DT ? void 0 : DT.length) ? null : MT;
          return oT.set(IT, xT), xT
        }
      }());
      return {
        surface: oT.surface,
        topDown: RT(oT.columnTops)
      }
    }
    async function mT(TT, oT) {
      var IT;
      if (TT.byteLength < 4) throw new Error("The file is too short to be a schematic.");
      const iT = new DataView(TT.buffer, TT.byteOffset, TT.byteLength).getUint32(0, !0);
      if (iT > cT) throw new Error("The file isn't a schematic this version of Bloxd can read.");
      const zT = (iT >= xT ? LT : DT).decode(kT.vc.from(TT.subarray(4)), 0).value;
      if (!zT) throw new Error("The file isn't a schematic.");
      if (0 === zT.chunkData.length) throw new Error("The schematic has no blocks in it.");
      const XT = null !== (IT = zT.pasteOffset) && void 0 !== IT ? IT : {
          x: 0,
          y: 0,
          z: 0
        },
        BT = [XT.x, XT.y, XT.z].map((TT => Math.floor(TT / gT))),
        FT = zT.chunkData.map((TT => ({
          x: TT.x + BT[0],
          y: TT.y + BT[1],
          z: TT.z + BT[2],
          rle: TT.rle
        }))),
        ST = new Map;
      for (const [kT, DT] of FT.entries()) {
        const TT = new Uint16Array(gT ** 3);
        WT.decode(DT.rle, TT), ST.set(`${DT.x},${DT.y},${DT.z}`, TT), kT % rT === rT - 1 && await uT()
      }
      const KT = (TT, oT, IT) => TT * gT * gT + oT * gT + IT,
        MT = (TT, oT, IT) => {
          var iT, zT;
          const kT = Math.floor(TT / gT),
            WT = Math.floor(oT / gT),
            XT = Math.floor(IT / gT);
          return null !== (iT = null === (zT = ST.get(`${kT},${WT},${XT}`)) || void 0 === zT ? void 0 : zT[KT(TT - kT * gT, oT - WT * gT, IT - XT * gT)]) && void 0 !== iT ? iT : 0
        },
        AT = new Map,
        wT = [],
        mT = [];
      for (const [kT, WT] of FT.entries()) {
        const TT = ST.get(`${WT.x},${WT.y},${WT.z}`),
          IT = [WT.x * gT, WT.y * gT, WT.z * gT],
          iT = (oT, iT, zT) => oT < 0 || iT < 0 || zT < 0 || oT >= gT || iT >= gT || zT >= gT ? MT(IT[0] + oT, IT[1] + iT, IT[2] + zT) : TT[KT(oT, iT, zT)],
          zT = `${WT.x},${WT.z}`;
        let XT = AT.get(zT);
        void 0 === XT && (XT = {
          chunkX: WT.x,
          chunkZ: WT.z,
          heights: new Int32Array(gT * gT).fill(hT),
          colours: new Uint8Array(gT * gT * 3)
        }, AT.set(zT, XT));
        for (let kT = 0; kT < gT; kT++)
          for (let zT = 0; zT < gT; zT++)
            for (let WT = 0; WT < gT; WT++) {
              const BT = TT[KT(kT, zT, WT)];
              if (0 === BT) continue;
              const FT = IT[0] + kT,
                ST = IT[1] + zT,
                DT = IT[2] + WT,
                LT = oT(BT);
              if (null === LT) continue;
              const xT = WT * gT + kT;
              ST > XT.heights[xT] && (XT.heights[xT] = ST, XT.colours.set(LT, 3 * xT));
              !eT(BT) && (eT(iT(kT + 1, zT, WT)) || eT(iT(kT - 1, zT, WT)) || eT(iT(kT, zT + 1, WT)) || eT(iT(kT, zT - 1, WT)) || eT(iT(kT, zT, WT + 1)) || eT(iT(kT, zT, WT - 1))) && (wT.push(FT, ST, DT), mT.push(LT[0], LT[1], LT[2]))
            }
        kT % rT === rT - 1 && await uT()
      }
      if (0 === wT.length) throw new Error("The schematic has no blocks in it.");
      return {
        name: zT.name,
        surface: {
          positions: Int32Array.from(wT),
          colours: Uint8Array.from(mT),
          count: wT.length / 3
        },
        columnTops: [...AT.values()]
      }
    }

    function eT(TT) {
      if (0 === TT) return !0;
      const oT = BT.j[TT];
      return void 0 === oT || oT.Sx || oT.transTex || !1 === oT.solid
    }

    function RT(TT) {
      let oT = 1 / 0,
        IT = -1 / 0,
        iT = 1 / 0,
        zT = -1 / 0;
      for (const {
          chunkX: cT,
          chunkZ: KT,
          heights: MT
        }
        of TT) MT.forEach(((TT, kT) => {
        if (TT === hT) return;
        const WT = cT * gT + kT % gT,
          XT = KT * gT + Math.floor(kT / gT);
        oT = Math.min(oT, WT), IT = Math.max(IT, WT), iT = Math.min(iT, XT), zT = Math.max(zT, XT)
      }));
      const kT = IT - oT + 1,
        WT = zT - iT + 1,
        XT = Math.max(1, Math.ceil(kT / AT), Math.ceil(WT / AT)),
        BT = Math.ceil(kT / XT),
        FT = Math.ceil(WT / XT),
        ST = document.createElement("canvas");
      ST.width = BT, ST.height = FT;
      const DT = ST.getContext("2d");
      if (!DT) throw new Error("Couldn't draw the schematic from above.");
      const LT = DT.createImageData(BT, FT),
        xT = new Int32Array(BT * FT).fill(hT);
      for (const {
          chunkX: cT,
          chunkZ: KT,
          heights: MT,
          colours: rT
        }
        of TT) MT.forEach(((TT, oT) => {
        const zT = cT * gT + oT % gT,
          kT = KT * gT + Math.floor(oT / gT),
          WT = Math.floor((kT - iT) / XT) * BT + Math.floor((IT - zT) / XT);
        TT === hT || TT <= xT[WT] || (xT[WT] = TT, LT.data.set(rT.subarray(3 * oT, 3 * oT + 3), 4 * WT), LT.data[4 * WT + 3] = 255)
      }));
      return DT.putImageData(LT, 0, 0), {
        maxX: IT,
        minZ: iT,
        width: BT * XT,
        depth: FT * XT,
        canvas: ST
      }
    }

    function uT() {
      return new Promise((TT => {
        setTimeout(TT, 0)
      }))
    }
  },
  8914: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => zT,
      d: () => kT
    });
    var iT = IT(8869);
    const zT = "Air",
      kT = Object.freeze(new iT.f(zT, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);