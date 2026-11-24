export const id = 189;
export const ids = [189];
export const modules = {
  37857: (TT, UT, mT) => {
    var WT = mT(37866);

    function zT(TT) {
      for (var UT, mT, zT = 0, MT = TT.length, gT = 0; gT < TT.length;) {
        for (UT = TT[gT], mT = 0; gT < MT && TT[gT] === UT;) ++gT, ++mT;
        zT += WT.log2(mT) / 7 | 0, zT += WT.log2(UT >>> 0) / 7 | 0, zT += 2
      }
      return zT
    }
    UT.size = zT, UT.encode = function(TT, UT) {
      UT || (UT = new Uint8Array(zT(TT)));
      for (var mT, WT, MT = 0, gT = UT.length, nT = 0; nT < TT.length;) {
        for (mT = TT[nT], WT = 0; nT < TT.length && TT[nT] === mT;) ++nT, ++WT;
        for (; MT < gT && WT >= 128;) UT[MT++] = 128 + (127 & WT), WT >>>= 7;
        if (MT >= gT) throw new Error("RLE buffer overflow");
        for (UT[MT++] = WT, mT >>>= 0; MT < gT && mT >= 128;) UT[MT++] = 128 + (127 & mT), mT >>>= 7;
        if (MT >= gT) throw new Error("RLE buffer overflow");
        UT[MT++] = mT
      }
      return UT
    }, UT.decode = function(TT, UT) {
      for (var mT, WT, zT, MT, gT = UT.length, nT = TT.length, HT = 0, kT = 0; kT < nT;) {
        for (mT = 0, WT = 0; kT < nT && TT[kT] >= 128;) mT += (127 & TT[kT++]) << WT, WT += 7;
        if (mT += TT[kT++] << WT, kT >= nT) throw new Error("RLE buffer underrun");
        if (HT + mT > gT) throw new Error("Chunk buffer overflow");
        for (zT = 0, WT = 0; kT < nT && TT[kT] >= 128;) zT += (127 & TT[kT++]) << WT, WT += 7;
        if (kT >= nT) throw new Error("RLE buffer underrun");
        for (zT += TT[kT++] << WT, MT = 0; MT < mT; ++MT) UT[HT++] = zT
      }
      return UT
    }
  },
  37866: (TT, UT) => {
    function mT(TT) {
      var UT = 32;
      return (TT &= -TT) && UT--, 65535 & TT && (UT -= 16), 16711935 & TT && (UT -= 8), 252645135 & TT && (UT -= 4), 858993459 & TT && (UT -= 2), 1431655765 & TT && (UT -= 1), UT
    }
    UT.INT_BITS = 32, UT.INT_MAX = 2147483647, UT.INT_MIN = -1 << 31, UT.sign = function(TT) {
      return (TT > 0) - (TT < 0)
    }, UT.abs = function(TT) {
      var UT = TT >> 31;
      return (TT ^ UT) - UT
    }, UT.min = function(TT, UT) {
      return UT ^ (TT ^ UT) & -(TT < UT)
    }, UT.max = function(TT, UT) {
      return TT ^ (TT ^ UT) & -(TT < UT)
    }, UT.isPow2 = function(TT) {
      return !(TT & TT - 1) && !!TT
    }, UT.log2 = function(TT) {
      var UT, mT;
      return UT = (TT > 65535) << 4, UT |= mT = ((TT >>>= UT) > 255) << 3, UT |= mT = ((TT >>>= mT) > 15) << 2, (UT |= mT = ((TT >>>= mT) > 3) << 1) | (TT >>>= mT) >> 1
    }, UT.log10 = function(TT) {
      return TT >= 1e9 ? 9 : TT >= 1e8 ? 8 : TT >= 1e7 ? 7 : TT >= 1e6 ? 6 : TT >= 1e5 ? 5 : TT >= 1e4 ? 4 : TT >= 1e3 ? 3 : TT >= 100 ? 2 : TT >= 10 ? 1 : 0
    }, UT.popCount = function(TT) {
      return 16843009 * ((TT = (858993459 & (TT -= TT >>> 1 & 1431655765)) + (TT >>> 2 & 858993459)) + (TT >>> 4) & 252645135) >>> 24
    }, UT.countTrailingZeros = mT, UT.nextPow2 = function(TT) {
      return TT += 0 === TT, --TT, TT |= TT >>> 1, TT |= TT >>> 2, TT |= TT >>> 4, TT |= TT >>> 8, (TT |= TT >>> 16) + 1
    }, UT.prevPow2 = function(TT) {
      return TT |= TT >>> 1, TT |= TT >>> 2, TT |= TT >>> 4, TT |= TT >>> 8, (TT |= TT >>> 16) - (TT >>> 1)
    }, UT.parity = function(TT) {
      return TT ^= TT >>> 16, TT ^= TT >>> 8, TT ^= TT >>> 4, 27030 >>> (TT &= 15) & 1
    };
    var WT = new Array(256);
    ! function(TT) {
      for (var UT = 0; UT < 256; ++UT) {
        var mT = UT,
          WT = UT,
          zT = 7;
        for (mT >>>= 1; mT; mT >>>= 1) WT <<= 1, WT |= 1 & mT, --zT;
        TT[UT] = WT << zT & 255
      }
    }(WT), UT.reverse = function(TT) {
      return WT[255 & TT] << 24 | WT[TT >>> 8 & 255] << 16 | WT[TT >>> 16 & 255] << 8 | WT[TT >>> 24 & 255]
    }, UT.interleave2 = function(TT, UT) {
      return (TT = 1431655765 & ((TT = 858993459 & ((TT = 252645135 & ((TT = 16711935 & ((TT &= 65535) | TT << 8)) | TT << 4)) | TT << 2)) | TT << 1)) | (UT = 1431655765 & ((UT = 858993459 & ((UT = 252645135 & ((UT = 16711935 & ((UT &= 65535) | UT << 8)) | UT << 4)) | UT << 2)) | UT << 1)) << 1
    }, UT.deinterleave2 = function(TT, UT) {
      return (TT = 65535 & ((TT = 16711935 & ((TT = 252645135 & ((TT = 858993459 & ((TT = TT >>> UT & 1431655765) | TT >>> 1)) | TT >>> 2)) | TT >>> 4)) | TT >>> 16)) << 16 >> 16
    }, UT.interleave3 = function(TT, UT, mT) {
      return TT = 1227133513 & ((TT = 3272356035 & ((TT = 251719695 & ((TT = 4278190335 & ((TT &= 1023) | TT << 16)) | TT << 8)) | TT << 4)) | TT << 2), (TT |= (UT = 1227133513 & ((UT = 3272356035 & ((UT = 251719695 & ((UT = 4278190335 & ((UT &= 1023) | UT << 16)) | UT << 8)) | UT << 4)) | UT << 2)) << 1) | (mT = 1227133513 & ((mT = 3272356035 & ((mT = 251719695 & ((mT = 4278190335 & ((mT &= 1023) | mT << 16)) | mT << 8)) | mT << 4)) | mT << 2)) << 2
    }, UT.deinterleave3 = function(TT, UT) {
      return (TT = 1023 & ((TT = 4278190335 & ((TT = 251719695 & ((TT = 3272356035 & ((TT = TT >>> UT & 1227133513) | TT >>> 2)) | TT >>> 4)) | TT >>> 8)) | TT >>> 16)) << 22 >> 22
    }, UT.nextCombination = function(TT) {
      var UT = TT | TT - 1;
      return UT + 1 | (~UT & -~UT) - 1 >>> mT(TT) + 1
    }
  },
  39898: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      emptyColumnHeight: () => iT,
      loadHeatmapSchematic: () => bT,
      readSchematicBlocks: () => OT
    });
    var WT = mT(3850),
      zT = mT.n(WT),
      MT = mT(3823),
      gT = mT(37857),
      nT = mT(208),
      HT = mT(9330);
    const kT = [{
        name: "x",
        type: "int"
      }, {
        name: "y",
        type: "int"
      }, {
        name: "z",
        type: "int"
      }],
      jT = [{
        name: "name",
        type: "string"
      }, {
        name: "startOffset",
        type: {
          type: "record",
          fields: kT
        }
      }, {
        name: "dimensions",
        type: {
          type: "record",
          fields: kT
        }
      }, {
        name: "chunkData",
        type: {
          type: "array",
          items: {
            type: "record",
            fields: [...kT, {
              name: "rle",
              type: "bytes"
            }]
          }
        }
      }],
      lT = zT().Type.forSchema({
        type: "record",
        fields: jT
      }),
      LT = zT().Type.forSchema({
        type: "record",
        fields: [...jT, {
          name: "blockData",
          type: {
            type: "array",
            items: {
              type: "record",
              fields: [...kT, {
                name: "data",
                type: "bytes"
              }]
            }
          }
        }, {
          name: "pasteOffset",
          type: {
            type: "record",
            fields: kT
          }
        }]
      }),
      pT = 2,
      BT = 6,
      ZT = {
        Water: [63, 118, 228],
        Lava: [232, 110, 30]
      },
      cT = [150, 150, 150],
      vT = 16,
      fT = 4096,
      qT = nT.f.cB,
      iT = -2147483648;
    async function bT(TT) {
      const UT = await OT(new Uint8Array(await TT.arrayBuffer()), await async function() {
        const {
          averageColors: TT
        } = await mT.e(207).then((() => mT(34366))), UT = new Map;
        return mT => {
          var WT, zT, MT, gT, nT;
          const kT = UT.get(mT);
          if (void 0 !== kT) return kT;
          const jT = null !== (WT = null === (zT = HT.g[mT]) || void 0 === zT ? void 0 : zT.name) && void 0 !== WT ? WT : "",
            lT = null !== (MT = TT[jT]) && void 0 !== MT ? MT : TT[jT.split("|")[0]],
            LT = ZT[jT.split("|")[0]],
            pT = null !== (gT = null !== (nT = null === lT || void 0 === lT ? void 0 : lT[0]) && void 0 !== nT ? nT : LT) && void 0 !== gT ? gT : 0 === (null === lT || void 0 === lT ? void 0 : lT.length) ? null : cT;
          return UT.set(mT, pT), pT
        }
      }());
      return {
        surface: UT.surface,
        topDown: YT(UT.columnTops)
      }
    }
    async function OT(TT, UT) {
      var mT;
      if (TT.byteLength < 4) throw new Error("The file is too short to be a schematic.");
      const WT = new DataView(TT.buffer, TT.byteOffset, TT.byteLength).getUint32(0, !0);
      if (WT > BT) throw new Error("The file isn't a schematic this version of Bloxd can read.");
      const zT = (WT >= pT ? LT : lT).decode(MT.HB.from(TT.subarray(4)), 0).value;
      if (!zT) throw new Error("The file isn't a schematic.");
      if (0 === zT.chunkData.length) throw new Error("The schematic has no blocks in it.");
      const nT = null !== (mT = zT.pasteOffset) && void 0 !== mT ? mT : {
          x: 0,
          y: 0,
          z: 0
        },
        HT = [nT.x, nT.y, nT.z].map((TT => Math.floor(TT / qT))),
        kT = zT.chunkData.map((TT => ({
          x: TT.x + HT[0],
          y: TT.y + HT[1],
          z: TT.z + HT[2],
          rle: TT.rle
        }))),
        jT = new Map;
      for (const [MT, lT] of kT.entries()) {
        const TT = new Uint16Array(qT ** 3);
        gT.decode(lT.rle, TT), jT.set(`${lT.x},${lT.y},${lT.z}`, TT), MT % vT === vT - 1 && await JT()
      }
      const ZT = (TT, UT, mT) => TT * qT * qT + UT * qT + mT,
        cT = (TT, UT, mT) => {
          var WT, zT;
          const MT = Math.floor(TT / qT),
            gT = Math.floor(UT / qT),
            nT = Math.floor(mT / qT);
          return null !== (WT = null === (zT = jT.get(`${MT},${gT},${nT}`)) || void 0 === zT ? void 0 : zT[ZT(TT - MT * qT, UT - gT * qT, mT - nT * qT)]) && void 0 !== WT ? WT : 0
        },
        fT = new Map,
        bT = [],
        OT = [];
      for (const [MT, gT] of kT.entries()) {
        const TT = jT.get(`${gT.x},${gT.y},${gT.z}`),
          mT = [gT.x * qT, gT.y * qT, gT.z * qT],
          WT = (UT, WT, zT) => UT < 0 || WT < 0 || zT < 0 || UT >= qT || WT >= qT || zT >= qT ? cT(mT[0] + UT, mT[1] + WT, mT[2] + zT) : TT[ZT(UT, WT, zT)],
          zT = `${gT.x},${gT.z}`;
        let nT = fT.get(zT);
        void 0 === nT && (nT = {
          chunkX: gT.x,
          chunkZ: gT.z,
          heights: new Int32Array(qT * qT).fill(iT),
          colours: new Uint8Array(qT * qT * 3)
        }, fT.set(zT, nT));
        for (let MT = 0; MT < qT; MT++)
          for (let zT = 0; zT < qT; zT++)
            for (let gT = 0; gT < qT; gT++) {
              const HT = TT[ZT(MT, zT, gT)];
              if (0 === HT) continue;
              const kT = mT[0] + MT,
                jT = mT[1] + zT,
                lT = mT[2] + gT,
                LT = UT(HT);
              if (null === LT) continue;
              const pT = gT * qT + MT;
              jT > nT.heights[pT] && (nT.heights[pT] = jT, nT.colours.set(LT, 3 * pT));
              !eT(HT) && (eT(WT(MT + 1, zT, gT)) || eT(WT(MT - 1, zT, gT)) || eT(WT(MT, zT + 1, gT)) || eT(WT(MT, zT - 1, gT)) || eT(WT(MT, zT, gT + 1)) || eT(WT(MT, zT, gT - 1))) && (bT.push(kT, jT, lT), OT.push(LT[0], LT[1], LT[2]))
            }
        MT % vT === vT - 1 && await JT()
      }
      if (0 === bT.length) throw new Error("The schematic has no blocks in it.");
      return {
        name: zT.name,
        surface: {
          positions: Int32Array.from(bT),
          colours: Uint8Array.from(OT),
          count: bT.length / 3
        },
        columnTops: [...fT.values()]
      }
    }

    function eT(TT) {
      if (0 === TT) return !0;
      const UT = HT.g[TT];
      return void 0 === UT || UT.RL || UT.transTex || !1 === UT.solid
    }

    function YT(TT) {
      let UT = 1 / 0,
        mT = -1 / 0,
        WT = 1 / 0,
        zT = -1 / 0;
      for (const {
          chunkX: BT,
          chunkZ: ZT,
          heights: cT
        }
        of TT) cT.forEach(((TT, MT) => {
        if (TT === iT) return;
        const gT = BT * qT + MT % qT,
          nT = ZT * qT + Math.floor(MT / qT);
        UT = Math.min(UT, gT), mT = Math.max(mT, gT), WT = Math.min(WT, nT), zT = Math.max(zT, nT)
      }));
      const MT = mT - UT + 1,
        gT = zT - WT + 1,
        nT = Math.max(1, Math.ceil(MT / fT), Math.ceil(gT / fT)),
        HT = Math.ceil(MT / nT),
        kT = Math.ceil(gT / nT),
        jT = document.createElement("canvas");
      jT.width = HT, jT.height = kT;
      const lT = jT.getContext("2d");
      if (!lT) throw new Error("Couldn't draw the schematic from above.");
      const LT = lT.createImageData(HT, kT),
        pT = new Int32Array(HT * kT).fill(iT);
      for (const {
          chunkX: BT,
          chunkZ: ZT,
          heights: cT,
          colours: vT
        }
        of TT) cT.forEach(((TT, UT) => {
        const zT = BT * qT + UT % qT,
          MT = ZT * qT + Math.floor(UT / qT),
          gT = Math.floor((MT - WT) / nT) * HT + Math.floor((mT - zT) / nT);
        TT === iT || TT <= pT[gT] || (pT[gT] = TT, LT.data.set(vT.subarray(3 * UT, 3 * UT + 3), 4 * gT), LT.data[4 * gT + 3] = 255)
      }));
      return lT.putImageData(LT, 0, 0), {
        maxX: mT,
        minZ: WT,
        width: HT * nT,
        depth: kT * nT,
        canvas: jT
      }
    }

    function JT() {
      return new Promise((TT => {
        setTimeout(TT, 0)
      }))
    }
  },
  9411: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => zT,
      i: () => MT
    });
    var WT = mT(9369);
    const zT = "Air",
      MT = Object.freeze(new WT.g(zT, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);