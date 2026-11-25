export const id = 191;
export const ids = [191];
export const modules = {
  38002: (QQ, WQ, XQ) => {
    var wQ = XQ(38010);

    function qQ(QQ) {
      for (var WQ, XQ, qQ = 0, TQ = QQ.length, zQ = 0; zQ < QQ.length;) {
        for (WQ = QQ[zQ], XQ = 0; zQ < TQ && QQ[zQ] === WQ;) ++zQ, ++XQ;
        qQ += wQ.log2(XQ) / 7 | 0, qQ += wQ.log2(WQ >>> 0) / 7 | 0, qQ += 2
      }
      return qQ
    }
    WQ.size = qQ, WQ.encode = function(QQ, WQ) {
      WQ || (WQ = new Uint8Array(qQ(QQ)));
      for (var XQ, wQ, TQ = 0, zQ = WQ.length, sQ = 0; sQ < QQ.length;) {
        for (XQ = QQ[sQ], wQ = 0; sQ < QQ.length && QQ[sQ] === XQ;) ++sQ, ++wQ;
        for (; TQ < zQ && wQ >= 128;) WQ[TQ++] = 128 + (127 & wQ), wQ >>>= 7;
        if (TQ >= zQ) throw new Error("RLE buffer overflow");
        for (WQ[TQ++] = wQ, XQ >>>= 0; TQ < zQ && XQ >= 128;) WQ[TQ++] = 128 + (127 & XQ), XQ >>>= 7;
        if (TQ >= zQ) throw new Error("RLE buffer overflow");
        WQ[TQ++] = XQ
      }
      return WQ
    }, WQ.decode = function(QQ, WQ) {
      for (var XQ, wQ, qQ, TQ, zQ = WQ.length, sQ = QQ.length, FQ = 0, PQ = 0; PQ < sQ;) {
        for (XQ = 0, wQ = 0; PQ < sQ && QQ[PQ] >= 128;) XQ += (127 & QQ[PQ++]) << wQ, wQ += 7;
        if (XQ += QQ[PQ++] << wQ, PQ >= sQ) throw new Error("RLE buffer underrun");
        if (FQ + XQ > zQ) throw new Error("Chunk buffer overflow");
        for (qQ = 0, wQ = 0; PQ < sQ && QQ[PQ] >= 128;) qQ += (127 & QQ[PQ++]) << wQ, wQ += 7;
        if (PQ >= sQ) throw new Error("RLE buffer underrun");
        for (qQ += QQ[PQ++] << wQ, TQ = 0; TQ < XQ; ++TQ) WQ[FQ++] = qQ
      }
      return WQ
    }
  },
  38010: (QQ, WQ) => {
    function XQ(QQ) {
      var WQ = 32;
      return (QQ &= -QQ) && WQ--, 65535 & QQ && (WQ -= 16), 16711935 & QQ && (WQ -= 8), 252645135 & QQ && (WQ -= 4), 858993459 & QQ && (WQ -= 2), 1431655765 & QQ && (WQ -= 1), WQ
    }
    WQ.INT_BITS = 32, WQ.INT_MAX = 2147483647, WQ.INT_MIN = -1 << 31, WQ.sign = function(QQ) {
      return (QQ > 0) - (QQ < 0)
    }, WQ.abs = function(QQ) {
      var WQ = QQ >> 31;
      return (QQ ^ WQ) - WQ
    }, WQ.min = function(QQ, WQ) {
      return WQ ^ (QQ ^ WQ) & -(QQ < WQ)
    }, WQ.max = function(QQ, WQ) {
      return QQ ^ (QQ ^ WQ) & -(QQ < WQ)
    }, WQ.isPow2 = function(QQ) {
      return !(QQ & QQ - 1) && !!QQ
    }, WQ.log2 = function(QQ) {
      var WQ, XQ;
      return WQ = (QQ > 65535) << 4, WQ |= XQ = ((QQ >>>= WQ) > 255) << 3, WQ |= XQ = ((QQ >>>= XQ) > 15) << 2, (WQ |= XQ = ((QQ >>>= XQ) > 3) << 1) | (QQ >>>= XQ) >> 1
    }, WQ.log10 = function(QQ) {
      return QQ >= 1e9 ? 9 : QQ >= 1e8 ? 8 : QQ >= 1e7 ? 7 : QQ >= 1e6 ? 6 : QQ >= 1e5 ? 5 : QQ >= 1e4 ? 4 : QQ >= 1e3 ? 3 : QQ >= 100 ? 2 : QQ >= 10 ? 1 : 0
    }, WQ.popCount = function(QQ) {
      return 16843009 * ((QQ = (858993459 & (QQ -= QQ >>> 1 & 1431655765)) + (QQ >>> 2 & 858993459)) + (QQ >>> 4) & 252645135) >>> 24
    }, WQ.countTrailingZeros = XQ, WQ.nextPow2 = function(QQ) {
      return QQ += 0 === QQ, --QQ, QQ |= QQ >>> 1, QQ |= QQ >>> 2, QQ |= QQ >>> 4, QQ |= QQ >>> 8, (QQ |= QQ >>> 16) + 1
    }, WQ.prevPow2 = function(QQ) {
      return QQ |= QQ >>> 1, QQ |= QQ >>> 2, QQ |= QQ >>> 4, QQ |= QQ >>> 8, (QQ |= QQ >>> 16) - (QQ >>> 1)
    }, WQ.parity = function(QQ) {
      return QQ ^= QQ >>> 16, QQ ^= QQ >>> 8, QQ ^= QQ >>> 4, 27030 >>> (QQ &= 15) & 1
    };
    var wQ = new Array(256);
    ! function(QQ) {
      for (var WQ = 0; WQ < 256; ++WQ) {
        var XQ = WQ,
          wQ = WQ,
          qQ = 7;
        for (XQ >>>= 1; XQ; XQ >>>= 1) wQ <<= 1, wQ |= 1 & XQ, --qQ;
        QQ[WQ] = wQ << qQ & 255
      }
    }(wQ), WQ.reverse = function(QQ) {
      return wQ[255 & QQ] << 24 | wQ[QQ >>> 8 & 255] << 16 | wQ[QQ >>> 16 & 255] << 8 | wQ[QQ >>> 24 & 255]
    }, WQ.interleave2 = function(QQ, WQ) {
      return (QQ = 1431655765 & ((QQ = 858993459 & ((QQ = 252645135 & ((QQ = 16711935 & ((QQ &= 65535) | QQ << 8)) | QQ << 4)) | QQ << 2)) | QQ << 1)) | (WQ = 1431655765 & ((WQ = 858993459 & ((WQ = 252645135 & ((WQ = 16711935 & ((WQ &= 65535) | WQ << 8)) | WQ << 4)) | WQ << 2)) | WQ << 1)) << 1
    }, WQ.deinterleave2 = function(QQ, WQ) {
      return (QQ = 65535 & ((QQ = 16711935 & ((QQ = 252645135 & ((QQ = 858993459 & ((QQ = QQ >>> WQ & 1431655765) | QQ >>> 1)) | QQ >>> 2)) | QQ >>> 4)) | QQ >>> 16)) << 16 >> 16
    }, WQ.interleave3 = function(QQ, WQ, XQ) {
      return QQ = 1227133513 & ((QQ = 3272356035 & ((QQ = 251719695 & ((QQ = 4278190335 & ((QQ &= 1023) | QQ << 16)) | QQ << 8)) | QQ << 4)) | QQ << 2), (QQ |= (WQ = 1227133513 & ((WQ = 3272356035 & ((WQ = 251719695 & ((WQ = 4278190335 & ((WQ &= 1023) | WQ << 16)) | WQ << 8)) | WQ << 4)) | WQ << 2)) << 1) | (XQ = 1227133513 & ((XQ = 3272356035 & ((XQ = 251719695 & ((XQ = 4278190335 & ((XQ &= 1023) | XQ << 16)) | XQ << 8)) | XQ << 4)) | XQ << 2)) << 2
    }, WQ.deinterleave3 = function(QQ, WQ) {
      return (QQ = 1023 & ((QQ = 4278190335 & ((QQ = 251719695 & ((QQ = 3272356035 & ((QQ = QQ >>> WQ & 1227133513) | QQ >>> 2)) | QQ >>> 4)) | QQ >>> 8)) | QQ >>> 16)) << 22 >> 22
    }, WQ.nextCombination = function(QQ) {
      var WQ = QQ | QQ - 1;
      return WQ + 1 | (~WQ & -~WQ) - 1 >>> XQ(QQ) + 1
    }
  },
  40080: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      emptyColumnHeight: () => GQ,
      loadHeatmapSchematic: () => UQ,
      readSchematicBlocks: () => bQ
    });
    var wQ = XQ(3989),
      qQ = XQ.n(wQ),
      TQ = XQ(3963),
      zQ = XQ(38002),
      sQ = XQ(231),
      FQ = XQ(9580);
    const PQ = [{
        name: "x",
        type: "int"
      }, {
        name: "y",
        type: "int"
      }, {
        name: "z",
        type: "int"
      }],
      gQ = [{
        name: "name",
        type: "string"
      }, {
        name: "startOffset",
        type: {
          type: "record",
          fields: PQ
        }
      }, {
        name: "dimensions",
        type: {
          type: "record",
          fields: PQ
        }
      }, {
        name: "chunkData",
        type: {
          type: "array",
          items: {
            type: "record",
            fields: [...PQ, {
              name: "rle",
              type: "bytes"
            }]
          }
        }
      }],
      JQ = qQ().Type.forSchema({
        type: "record",
        fields: gQ
      }),
      rQ = qQ().Type.forSchema({
        type: "record",
        fields: [...gQ, {
          name: "blockData",
          type: {
            type: "array",
            items: {
              type: "record",
              fields: [...PQ, {
                name: "data",
                type: "bytes"
              }]
            }
          }
        }, {
          name: "pasteOffset",
          type: {
            type: "record",
            fields: PQ
          }
        }]
      }),
      IQ = 2,
      jQ = 6,
      BQ = {
        Water: [63, 118, 228],
        Lava: [232, 110, 30]
      },
      yQ = [150, 150, 150],
      VQ = 16,
      DQ = 4096,
      pQ = sQ.h.Ij,
      GQ = -2147483648;
    async function UQ(QQ) {
      const WQ = await bQ(new Uint8Array(await QQ.arrayBuffer()), await async function() {
        const {
          averageColors: QQ
        } = await XQ.e(213).then((() => XQ(34609))), WQ = new Map;
        return XQ => {
          var wQ, qQ, TQ, zQ, sQ;
          const PQ = WQ.get(XQ);
          if (void 0 !== PQ) return PQ;
          const gQ = null !== (wQ = null === (qQ = FQ.h[XQ]) || void 0 === qQ ? void 0 : qQ.name) && void 0 !== wQ ? wQ : "",
            JQ = null !== (TQ = QQ[gQ]) && void 0 !== TQ ? TQ : QQ[gQ.split("|")[0]],
            rQ = BQ[gQ.split("|")[0]],
            IQ = null !== (zQ = null !== (sQ = null === JQ || void 0 === JQ ? void 0 : JQ[0]) && void 0 !== sQ ? sQ : rQ) && void 0 !== zQ ? zQ : 0 === (null === JQ || void 0 === JQ ? void 0 : JQ.length) ? null : yQ;
          return WQ.set(XQ, IQ), IQ
        }
      }());
      return {
        surface: WQ.surface,
        topDown: dQ(WQ.columnTops)
      }
    }
    async function bQ(QQ, WQ) {
      var XQ;
      if (QQ.byteLength < 4) throw new Error("The file is too short to be a schematic.");
      const wQ = new DataView(QQ.buffer, QQ.byteOffset, QQ.byteLength).getUint32(0, !0);
      if (wQ > jQ) throw new Error("The file isn't a schematic this version of Bloxd can read.");
      const qQ = (wQ >= IQ ? rQ : JQ).decode(TQ.Tj.from(QQ.subarray(4)), 0).value;
      if (!qQ) throw new Error("The file isn't a schematic.");
      if (0 === qQ.chunkData.length) throw new Error("The schematic has no blocks in it.");
      const sQ = null !== (XQ = qQ.pasteOffset) && void 0 !== XQ ? XQ : {
          x: 0,
          y: 0,
          z: 0
        },
        FQ = [sQ.x, sQ.y, sQ.z].map((QQ => Math.floor(QQ / pQ))),
        PQ = qQ.chunkData.map((QQ => ({
          x: QQ.x + FQ[0],
          y: QQ.y + FQ[1],
          z: QQ.z + FQ[2],
          rle: QQ.rle
        }))),
        gQ = new Map;
      for (const [TQ, JQ] of PQ.entries()) {
        const QQ = new Uint16Array(pQ ** 3);
        zQ.decode(JQ.rle, QQ), gQ.set(`${JQ.x},${JQ.y},${JQ.z}`, QQ), TQ % VQ === VQ - 1 && await HQ()
      }
      const BQ = (QQ, WQ, XQ) => QQ * pQ * pQ + WQ * pQ + XQ,
        yQ = (QQ, WQ, XQ) => {
          var wQ, qQ;
          const TQ = Math.floor(QQ / pQ),
            zQ = Math.floor(WQ / pQ),
            sQ = Math.floor(XQ / pQ);
          return null !== (wQ = null === (qQ = gQ.get(`${TQ},${zQ},${sQ}`)) || void 0 === qQ ? void 0 : qQ[BQ(QQ - TQ * pQ, WQ - zQ * pQ, XQ - sQ * pQ)]) && void 0 !== wQ ? wQ : 0
        },
        DQ = new Map,
        UQ = [],
        bQ = [];
      for (const [TQ, zQ] of PQ.entries()) {
        const QQ = gQ.get(`${zQ.x},${zQ.y},${zQ.z}`),
          XQ = [zQ.x * pQ, zQ.y * pQ, zQ.z * pQ],
          wQ = (WQ, wQ, qQ) => WQ < 0 || wQ < 0 || qQ < 0 || WQ >= pQ || wQ >= pQ || qQ >= pQ ? yQ(XQ[0] + WQ, XQ[1] + wQ, XQ[2] + qQ) : QQ[BQ(WQ, wQ, qQ)],
          qQ = `${zQ.x},${zQ.z}`;
        let sQ = DQ.get(qQ);
        void 0 === sQ && (sQ = {
          chunkX: zQ.x,
          chunkZ: zQ.z,
          heights: new Int32Array(pQ * pQ).fill(GQ),
          colours: new Uint8Array(pQ * pQ * 3)
        }, DQ.set(qQ, sQ));
        for (let TQ = 0; TQ < pQ; TQ++)
          for (let qQ = 0; qQ < pQ; qQ++)
            for (let zQ = 0; zQ < pQ; zQ++) {
              const FQ = QQ[BQ(TQ, qQ, zQ)];
              if (0 === FQ) continue;
              const PQ = XQ[0] + TQ,
                gQ = XQ[1] + qQ,
                JQ = XQ[2] + zQ,
                rQ = WQ(FQ);
              if (null === rQ) continue;
              const IQ = zQ * pQ + TQ;
              gQ > sQ.heights[IQ] && (sQ.heights[IQ] = gQ, sQ.colours.set(rQ, 3 * IQ));
              !vQ(FQ) && (vQ(wQ(TQ + 1, qQ, zQ)) || vQ(wQ(TQ - 1, qQ, zQ)) || vQ(wQ(TQ, qQ + 1, zQ)) || vQ(wQ(TQ, qQ - 1, zQ)) || vQ(wQ(TQ, qQ, zQ + 1)) || vQ(wQ(TQ, qQ, zQ - 1))) && (UQ.push(PQ, gQ, JQ), bQ.push(rQ[0], rQ[1], rQ[2]))
            }
        TQ % VQ === VQ - 1 && await HQ()
      }
      if (0 === UQ.length) throw new Error("The schematic has no blocks in it.");
      return {
        name: qQ.name,
        surface: {
          positions: Int32Array.from(UQ),
          colours: Uint8Array.from(bQ),
          count: UQ.length / 3
        },
        columnTops: [...DQ.values()]
      }
    }

    function vQ(QQ) {
      if (0 === QQ) return !0;
      const WQ = FQ.h[QQ];
      return void 0 === WQ || WQ.XI || WQ.transTex || !1 === WQ.solid
    }

    function dQ(QQ) {
      let WQ = 1 / 0,
        XQ = -1 / 0,
        wQ = 1 / 0,
        qQ = -1 / 0;
      for (const {
          chunkX: jQ,
          chunkZ: BQ,
          heights: yQ
        }
        of QQ) yQ.forEach(((QQ, TQ) => {
        if (QQ === GQ) return;
        const zQ = jQ * pQ + TQ % pQ,
          sQ = BQ * pQ + Math.floor(TQ / pQ);
        WQ = Math.min(WQ, zQ), XQ = Math.max(XQ, zQ), wQ = Math.min(wQ, sQ), qQ = Math.max(qQ, sQ)
      }));
      const TQ = XQ - WQ + 1,
        zQ = qQ - wQ + 1,
        sQ = Math.max(1, Math.ceil(TQ / DQ), Math.ceil(zQ / DQ)),
        FQ = Math.ceil(TQ / sQ),
        PQ = Math.ceil(zQ / sQ),
        gQ = document.createElement("canvas");
      gQ.width = FQ, gQ.height = PQ;
      const JQ = gQ.getContext("2d");
      if (!JQ) throw new Error("Couldn't draw the schematic from above.");
      const rQ = JQ.createImageData(FQ, PQ),
        IQ = new Int32Array(FQ * PQ).fill(GQ);
      for (const {
          chunkX: jQ,
          chunkZ: BQ,
          heights: yQ,
          colours: VQ
        }
        of QQ) yQ.forEach(((QQ, WQ) => {
        const qQ = jQ * pQ + WQ % pQ,
          TQ = BQ * pQ + Math.floor(WQ / pQ),
          zQ = Math.floor((TQ - wQ) / sQ) * FQ + Math.floor((XQ - qQ) / sQ);
        QQ === GQ || QQ <= IQ[zQ] || (IQ[zQ] = QQ, rQ.data.set(VQ.subarray(3 * WQ, 3 * WQ + 3), 4 * zQ), rQ.data[4 * zQ + 3] = 255)
      }));
      return JQ.putImageData(rQ, 0, 0), {
        maxX: XQ,
        minZ: wQ,
        width: FQ * sQ,
        depth: PQ * sQ,
        canvas: gQ
      }
    }

    function HQ() {
      return new Promise((QQ => {
        setTimeout(QQ, 0)
      }))
    }
  },
  9679: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => qQ,
      c: () => TQ
    });
    var wQ = XQ(9634);
    const qQ = "Air",
      TQ = Object.freeze(new wQ.d(qQ, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);