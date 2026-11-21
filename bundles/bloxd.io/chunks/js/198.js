export const id = 198;
export const ids = [198];
export const modules = {
  37286: (QQ, FQ, wQ) => {
    var LQ = wQ(37294);

    function qQ(QQ) {
      for (var FQ, wQ, qQ = 0, oQ = QQ.length, DQ = 0; DQ < QQ.length;) {
        for (FQ = QQ[DQ], wQ = 0; DQ < oQ && QQ[DQ] === FQ;) ++DQ, ++wQ;
        qQ += LQ.log2(wQ) / 7 | 0, qQ += LQ.log2(FQ >>> 0) / 7 | 0, qQ += 2
      }
      return qQ
    }
    FQ.size = qQ, FQ.encode = function(QQ, FQ) {
      FQ || (FQ = new Uint8Array(qQ(QQ)));
      for (var wQ, LQ, oQ = 0, DQ = FQ.length, kQ = 0; kQ < QQ.length;) {
        for (wQ = QQ[kQ], LQ = 0; kQ < QQ.length && QQ[kQ] === wQ;) ++kQ, ++LQ;
        for (; oQ < DQ && LQ >= 128;) FQ[oQ++] = 128 + (127 & LQ), LQ >>>= 7;
        if (oQ >= DQ) throw new Error("RLE buffer overflow");
        for (FQ[oQ++] = LQ, wQ >>>= 0; oQ < DQ && wQ >= 128;) FQ[oQ++] = 128 + (127 & wQ), wQ >>>= 7;
        if (oQ >= DQ) throw new Error("RLE buffer overflow");
        FQ[oQ++] = wQ
      }
      return FQ
    }, FQ.decode = function(QQ, FQ) {
      for (var wQ, LQ, qQ, oQ, DQ = FQ.length, kQ = QQ.length, vQ = 0, mQ = 0; mQ < kQ;) {
        for (wQ = 0, LQ = 0; mQ < kQ && QQ[mQ] >= 128;) wQ += (127 & QQ[mQ++]) << LQ, LQ += 7;
        if (wQ += QQ[mQ++] << LQ, mQ >= kQ) throw new Error("RLE buffer underrun");
        if (vQ + wQ > DQ) throw new Error("Chunk buffer overflow");
        for (qQ = 0, LQ = 0; mQ < kQ && QQ[mQ] >= 128;) qQ += (127 & QQ[mQ++]) << LQ, LQ += 7;
        if (mQ >= kQ) throw new Error("RLE buffer underrun");
        for (qQ += QQ[mQ++] << LQ, oQ = 0; oQ < wQ; ++oQ) FQ[vQ++] = qQ
      }
      return FQ
    }
  },
  37294: (QQ, FQ) => {
    function wQ(QQ) {
      var FQ = 32;
      return (QQ &= -QQ) && FQ--, 65535 & QQ && (FQ -= 16), 16711935 & QQ && (FQ -= 8), 252645135 & QQ && (FQ -= 4), 858993459 & QQ && (FQ -= 2), 1431655765 & QQ && (FQ -= 1), FQ
    }
    FQ.INT_BITS = 32, FQ.INT_MAX = 2147483647, FQ.INT_MIN = -1 << 31, FQ.sign = function(QQ) {
      return (QQ > 0) - (QQ < 0)
    }, FQ.abs = function(QQ) {
      var FQ = QQ >> 31;
      return (QQ ^ FQ) - FQ
    }, FQ.min = function(QQ, FQ) {
      return FQ ^ (QQ ^ FQ) & -(QQ < FQ)
    }, FQ.max = function(QQ, FQ) {
      return QQ ^ (QQ ^ FQ) & -(QQ < FQ)
    }, FQ.isPow2 = function(QQ) {
      return !(QQ & QQ - 1) && !!QQ
    }, FQ.log2 = function(QQ) {
      var FQ, wQ;
      return FQ = (QQ > 65535) << 4, FQ |= wQ = ((QQ >>>= FQ) > 255) << 3, FQ |= wQ = ((QQ >>>= wQ) > 15) << 2, (FQ |= wQ = ((QQ >>>= wQ) > 3) << 1) | (QQ >>>= wQ) >> 1
    }, FQ.log10 = function(QQ) {
      return QQ >= 1e9 ? 9 : QQ >= 1e8 ? 8 : QQ >= 1e7 ? 7 : QQ >= 1e6 ? 6 : QQ >= 1e5 ? 5 : QQ >= 1e4 ? 4 : QQ >= 1e3 ? 3 : QQ >= 100 ? 2 : QQ >= 10 ? 1 : 0
    }, FQ.popCount = function(QQ) {
      return 16843009 * ((QQ = (858993459 & (QQ -= QQ >>> 1 & 1431655765)) + (QQ >>> 2 & 858993459)) + (QQ >>> 4) & 252645135) >>> 24
    }, FQ.countTrailingZeros = wQ, FQ.nextPow2 = function(QQ) {
      return QQ += 0 === QQ, --QQ, QQ |= QQ >>> 1, QQ |= QQ >>> 2, QQ |= QQ >>> 4, QQ |= QQ >>> 8, (QQ |= QQ >>> 16) + 1
    }, FQ.prevPow2 = function(QQ) {
      return QQ |= QQ >>> 1, QQ |= QQ >>> 2, QQ |= QQ >>> 4, QQ |= QQ >>> 8, (QQ |= QQ >>> 16) - (QQ >>> 1)
    }, FQ.parity = function(QQ) {
      return QQ ^= QQ >>> 16, QQ ^= QQ >>> 8, QQ ^= QQ >>> 4, 27030 >>> (QQ &= 15) & 1
    };
    var LQ = new Array(256);
    ! function(QQ) {
      for (var FQ = 0; FQ < 256; ++FQ) {
        var wQ = FQ,
          LQ = FQ,
          qQ = 7;
        for (wQ >>>= 1; wQ; wQ >>>= 1) LQ <<= 1, LQ |= 1 & wQ, --qQ;
        QQ[FQ] = LQ << qQ & 255
      }
    }(LQ), FQ.reverse = function(QQ) {
      return LQ[255 & QQ] << 24 | LQ[QQ >>> 8 & 255] << 16 | LQ[QQ >>> 16 & 255] << 8 | LQ[QQ >>> 24 & 255]
    }, FQ.interleave2 = function(QQ, FQ) {
      return (QQ = 1431655765 & ((QQ = 858993459 & ((QQ = 252645135 & ((QQ = 16711935 & ((QQ &= 65535) | QQ << 8)) | QQ << 4)) | QQ << 2)) | QQ << 1)) | (FQ = 1431655765 & ((FQ = 858993459 & ((FQ = 252645135 & ((FQ = 16711935 & ((FQ &= 65535) | FQ << 8)) | FQ << 4)) | FQ << 2)) | FQ << 1)) << 1
    }, FQ.deinterleave2 = function(QQ, FQ) {
      return (QQ = 65535 & ((QQ = 16711935 & ((QQ = 252645135 & ((QQ = 858993459 & ((QQ = QQ >>> FQ & 1431655765) | QQ >>> 1)) | QQ >>> 2)) | QQ >>> 4)) | QQ >>> 16)) << 16 >> 16
    }, FQ.interleave3 = function(QQ, FQ, wQ) {
      return QQ = 1227133513 & ((QQ = 3272356035 & ((QQ = 251719695 & ((QQ = 4278190335 & ((QQ &= 1023) | QQ << 16)) | QQ << 8)) | QQ << 4)) | QQ << 2), (QQ |= (FQ = 1227133513 & ((FQ = 3272356035 & ((FQ = 251719695 & ((FQ = 4278190335 & ((FQ &= 1023) | FQ << 16)) | FQ << 8)) | FQ << 4)) | FQ << 2)) << 1) | (wQ = 1227133513 & ((wQ = 3272356035 & ((wQ = 251719695 & ((wQ = 4278190335 & ((wQ &= 1023) | wQ << 16)) | wQ << 8)) | wQ << 4)) | wQ << 2)) << 2
    }, FQ.deinterleave3 = function(QQ, FQ) {
      return (QQ = 1023 & ((QQ = 4278190335 & ((QQ = 251719695 & ((QQ = 3272356035 & ((QQ = QQ >>> FQ & 1227133513) | QQ >>> 2)) | QQ >>> 4)) | QQ >>> 8)) | QQ >>> 16)) << 22 >> 22
    }, FQ.nextCombination = function(QQ) {
      var FQ = QQ | QQ - 1;
      return FQ + 1 | (~FQ & -~FQ) - 1 >>> wQ(QQ) + 1
    }
  },
  39199: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      emptyColumnHeight: () => pQ,
      loadHeatmapSchematic: () => cQ,
      readSchematicBlocks: () => CQ
    });
    var LQ = wQ(3627),
      qQ = wQ.n(LQ),
      oQ = wQ(3605),
      DQ = wQ(37286),
      kQ = wQ(201),
      vQ = wQ(9195);
    const mQ = [{
        name: "x",
        type: "int"
      }, {
        name: "y",
        type: "int"
      }, {
        name: "z",
        type: "int"
      }],
      uQ = [{
        name: "name",
        type: "string"
      }, {
        name: "startOffset",
        type: {
          type: "record",
          fields: mQ
        }
      }, {
        name: "dimensions",
        type: {
          type: "record",
          fields: mQ
        }
      }, {
        name: "chunkData",
        type: {
          type: "array",
          items: {
            type: "record",
            fields: [...mQ, {
              name: "rle",
              type: "bytes"
            }]
          }
        }
      }],
      HQ = qQ().Type.forSchema({
        type: "record",
        fields: uQ
      }),
      bQ = qQ().Type.forSchema({
        type: "record",
        fields: [...uQ, {
          name: "blockData",
          type: {
            type: "array",
            items: {
              type: "record",
              fields: [...mQ, {
                name: "data",
                type: "bytes"
              }]
            }
          }
        }, {
          name: "pasteOffset",
          type: {
            type: "record",
            fields: mQ
          }
        }]
      }),
      YQ = 2,
      xQ = 6,
      AQ = {
        Water: [63, 118, 228],
        Lava: [232, 110, 30]
      },
      tQ = [150, 150, 150],
      eQ = 16,
      MQ = 4096,
      GQ = kQ.e.tx,
      pQ = -2147483648;
    async function cQ(QQ) {
      const FQ = await CQ(new Uint8Array(await QQ.arrayBuffer()), await async function() {
        const {
          averageColors: QQ
        } = await wQ.e(202).then((() => wQ(33928))), FQ = new Map;
        return wQ => {
          var LQ, qQ, oQ, DQ, kQ;
          const mQ = FQ.get(wQ);
          if (void 0 !== mQ) return mQ;
          const uQ = null !== (LQ = null === (qQ = vQ.h[wQ]) || void 0 === qQ ? void 0 : qQ.name) && void 0 !== LQ ? LQ : "",
            HQ = null !== (oQ = QQ[uQ]) && void 0 !== oQ ? oQ : QQ[uQ.split("|")[0]],
            bQ = AQ[uQ.split("|")[0]],
            YQ = null !== (DQ = null !== (kQ = null === HQ || void 0 === HQ ? void 0 : HQ[0]) && void 0 !== kQ ? kQ : bQ) && void 0 !== DQ ? DQ : 0 === (null === HQ || void 0 === HQ ? void 0 : HQ.length) ? null : tQ;
          return FQ.set(wQ, YQ), YQ
        }
      }());
      return {
        surface: FQ.surface,
        topDown: iQ(FQ.columnTops)
      }
    }
    async function CQ(QQ, FQ) {
      var wQ;
      if (QQ.byteLength < 4) throw new Error("The file is too short to be a schematic.");
      const LQ = new DataView(QQ.buffer, QQ.byteOffset, QQ.byteLength).getUint32(0, !0);
      if (LQ > xQ) throw new Error("The file isn't a schematic this version of Bloxd can read.");
      const qQ = (LQ >= YQ ? bQ : HQ).decode(oQ.Dx.from(QQ.subarray(4)), 0).value;
      if (!qQ) throw new Error("The file isn't a schematic.");
      if (0 === qQ.chunkData.length) throw new Error("The schematic has no blocks in it.");
      const kQ = null !== (wQ = qQ.pasteOffset) && void 0 !== wQ ? wQ : {
          x: 0,
          y: 0,
          z: 0
        },
        vQ = [kQ.x, kQ.y, kQ.z].map((QQ => Math.floor(QQ / GQ))),
        mQ = qQ.chunkData.map((QQ => ({
          x: QQ.x + vQ[0],
          y: QQ.y + vQ[1],
          z: QQ.z + vQ[2],
          rle: QQ.rle
        }))),
        uQ = new Map;
      for (const [oQ, HQ] of mQ.entries()) {
        const QQ = new Uint16Array(GQ ** 3);
        DQ.decode(HQ.rle, QQ), uQ.set(`${HQ.x},${HQ.y},${HQ.z}`, QQ), oQ % eQ === eQ - 1 && await WQ()
      }
      const AQ = (QQ, FQ, wQ) => QQ * GQ * GQ + FQ * GQ + wQ,
        tQ = (QQ, FQ, wQ) => {
          var LQ, qQ;
          const oQ = Math.floor(QQ / GQ),
            DQ = Math.floor(FQ / GQ),
            kQ = Math.floor(wQ / GQ);
          return null !== (LQ = null === (qQ = uQ.get(`${oQ},${DQ},${kQ}`)) || void 0 === qQ ? void 0 : qQ[AQ(QQ - oQ * GQ, FQ - DQ * GQ, wQ - kQ * GQ)]) && void 0 !== LQ ? LQ : 0
        },
        MQ = new Map,
        cQ = [],
        CQ = [];
      for (const [oQ, DQ] of mQ.entries()) {
        const QQ = uQ.get(`${DQ.x},${DQ.y},${DQ.z}`),
          wQ = [DQ.x * GQ, DQ.y * GQ, DQ.z * GQ],
          LQ = (FQ, LQ, qQ) => FQ < 0 || LQ < 0 || qQ < 0 || FQ >= GQ || LQ >= GQ || qQ >= GQ ? tQ(wQ[0] + FQ, wQ[1] + LQ, wQ[2] + qQ) : QQ[AQ(FQ, LQ, qQ)],
          qQ = `${DQ.x},${DQ.z}`;
        let kQ = MQ.get(qQ);
        void 0 === kQ && (kQ = {
          chunkX: DQ.x,
          chunkZ: DQ.z,
          heights: new Int32Array(GQ * GQ).fill(pQ),
          colours: new Uint8Array(GQ * GQ * 3)
        }, MQ.set(qQ, kQ));
        for (let oQ = 0; oQ < GQ; oQ++)
          for (let qQ = 0; qQ < GQ; qQ++)
            for (let DQ = 0; DQ < GQ; DQ++) {
              const vQ = QQ[AQ(oQ, qQ, DQ)];
              if (0 === vQ) continue;
              const mQ = wQ[0] + oQ,
                uQ = wQ[1] + qQ,
                HQ = wQ[2] + DQ,
                bQ = FQ(vQ);
              if (null === bQ) continue;
              const YQ = DQ * GQ + oQ;
              uQ > kQ.heights[YQ] && (kQ.heights[YQ] = uQ, kQ.colours.set(bQ, 3 * YQ));
              !SQ(vQ) && (SQ(LQ(oQ + 1, qQ, DQ)) || SQ(LQ(oQ - 1, qQ, DQ)) || SQ(LQ(oQ, qQ + 1, DQ)) || SQ(LQ(oQ, qQ - 1, DQ)) || SQ(LQ(oQ, qQ, DQ + 1)) || SQ(LQ(oQ, qQ, DQ - 1))) && (cQ.push(mQ, uQ, HQ), CQ.push(bQ[0], bQ[1], bQ[2]))
            }
        oQ % eQ === eQ - 1 && await WQ()
      }
      if (0 === cQ.length) throw new Error("The schematic has no blocks in it.");
      return {
        name: qQ.name,
        surface: {
          positions: Int32Array.from(cQ),
          colours: Uint8Array.from(CQ),
          count: cQ.length / 3
        },
        columnTops: [...MQ.values()]
      }
    }

    function SQ(QQ) {
      if (0 === QQ) return !0;
      const FQ = vQ.h[QQ];
      return void 0 === FQ || FQ.wY || FQ.transTex || !1 === FQ.solid
    }

    function iQ(QQ) {
      let FQ = 1 / 0,
        wQ = -1 / 0,
        LQ = 1 / 0,
        qQ = -1 / 0;
      for (const {
          chunkX: xQ,
          chunkZ: AQ,
          heights: tQ
        }
        of QQ) tQ.forEach(((QQ, oQ) => {
        if (QQ === pQ) return;
        const DQ = xQ * GQ + oQ % GQ,
          kQ = AQ * GQ + Math.floor(oQ / GQ);
        FQ = Math.min(FQ, DQ), wQ = Math.max(wQ, DQ), LQ = Math.min(LQ, kQ), qQ = Math.max(qQ, kQ)
      }));
      const oQ = wQ - FQ + 1,
        DQ = qQ - LQ + 1,
        kQ = Math.max(1, Math.ceil(oQ / MQ), Math.ceil(DQ / MQ)),
        vQ = Math.ceil(oQ / kQ),
        mQ = Math.ceil(DQ / kQ),
        uQ = document.createElement("canvas");
      uQ.width = vQ, uQ.height = mQ;
      const HQ = uQ.getContext("2d");
      if (!HQ) throw new Error("Couldn't draw the schematic from above.");
      const bQ = HQ.createImageData(vQ, mQ),
        YQ = new Int32Array(vQ * mQ).fill(pQ);
      for (const {
          chunkX: xQ,
          chunkZ: AQ,
          heights: tQ,
          colours: eQ
        }
        of QQ) tQ.forEach(((QQ, FQ) => {
        const qQ = xQ * GQ + FQ % GQ,
          oQ = AQ * GQ + Math.floor(FQ / GQ),
          DQ = Math.floor((oQ - LQ) / kQ) * vQ + Math.floor((wQ - qQ) / kQ);
        QQ === pQ || QQ <= YQ[DQ] || (YQ[DQ] = QQ, bQ.data.set(eQ.subarray(3 * FQ, 3 * FQ + 3), 4 * DQ), bQ.data[4 * DQ + 3] = 255)
      }));
      return HQ.putImageData(bQ, 0, 0), {
        maxX: wQ,
        minZ: LQ,
        width: vQ * kQ,
        depth: mQ * kQ,
        canvas: uQ
      }
    }

    function WQ() {
      return new Promise((QQ => {
        setTimeout(QQ, 0)
      }))
    }
  },
  9289: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => qQ,
      i: () => oQ
    });
    var LQ = wQ(9252);
    const qQ = "Air",
      oQ = Object.freeze(new LQ.g(qQ, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);