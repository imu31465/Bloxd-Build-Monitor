export const id = 187;
export const ids = [187];
export const modules = {
  37555: (CC, zC, ZC) => {
    var QC = ZC(37560);

    function wC(CC) {
      for (var zC, ZC, wC = 0, bC = CC.length, nC = 0; nC < CC.length;) {
        for (zC = CC[nC], ZC = 0; nC < bC && CC[nC] === zC;) ++nC, ++ZC;
        wC += QC.log2(ZC) / 7 | 0, wC += QC.log2(zC >>> 0) / 7 | 0, wC += 2
      }
      return wC
    }
    zC.size = wC, zC.encode = function(CC, zC) {
      zC || (zC = new Uint8Array(wC(CC)));
      for (var ZC, QC, bC = 0, nC = zC.length, fC = 0; fC < CC.length;) {
        for (ZC = CC[fC], QC = 0; fC < CC.length && CC[fC] === ZC;) ++fC, ++QC;
        for (; bC < nC && QC >= 128;) zC[bC++] = 128 + (127 & QC), QC >>>= 7;
        if (bC >= nC) throw new Error("RLE buffer overflow");
        for (zC[bC++] = QC, ZC >>>= 0; bC < nC && ZC >= 128;) zC[bC++] = 128 + (127 & ZC), ZC >>>= 7;
        if (bC >= nC) throw new Error("RLE buffer overflow");
        zC[bC++] = ZC
      }
      return zC
    }, zC.decode = function(CC, zC) {
      for (var ZC, QC, wC, bC, nC = zC.length, fC = CC.length, oC = 0, qC = 0; qC < fC;) {
        for (ZC = 0, QC = 0; qC < fC && CC[qC] >= 128;) ZC += (127 & CC[qC++]) << QC, QC += 7;
        if (ZC += CC[qC++] << QC, qC >= fC) throw new Error("RLE buffer underrun");
        if (oC + ZC > nC) throw new Error("Chunk buffer overflow");
        for (wC = 0, QC = 0; qC < fC && CC[qC] >= 128;) wC += (127 & CC[qC++]) << QC, QC += 7;
        if (qC >= fC) throw new Error("RLE buffer underrun");
        for (wC += CC[qC++] << QC, bC = 0; bC < ZC; ++bC) zC[oC++] = wC
      }
      return zC
    }
  },
  37560: (CC, zC) => {
    function ZC(CC) {
      var zC = 32;
      return (CC &= -CC) && zC--, 65535 & CC && (zC -= 16), 16711935 & CC && (zC -= 8), 252645135 & CC && (zC -= 4), 858993459 & CC && (zC -= 2), 1431655765 & CC && (zC -= 1), zC
    }
    zC.INT_BITS = 32, zC.INT_MAX = 2147483647, zC.INT_MIN = -1 << 31, zC.sign = function(CC) {
      return (CC > 0) - (CC < 0)
    }, zC.abs = function(CC) {
      var zC = CC >> 31;
      return (CC ^ zC) - zC
    }, zC.min = function(CC, zC) {
      return zC ^ (CC ^ zC) & -(CC < zC)
    }, zC.max = function(CC, zC) {
      return CC ^ (CC ^ zC) & -(CC < zC)
    }, zC.isPow2 = function(CC) {
      return !(CC & CC - 1) && !!CC
    }, zC.log2 = function(CC) {
      var zC, ZC;
      return zC = (CC > 65535) << 4, zC |= ZC = ((CC >>>= zC) > 255) << 3, zC |= ZC = ((CC >>>= ZC) > 15) << 2, (zC |= ZC = ((CC >>>= ZC) > 3) << 1) | (CC >>>= ZC) >> 1
    }, zC.log10 = function(CC) {
      return CC >= 1e9 ? 9 : CC >= 1e8 ? 8 : CC >= 1e7 ? 7 : CC >= 1e6 ? 6 : CC >= 1e5 ? 5 : CC >= 1e4 ? 4 : CC >= 1e3 ? 3 : CC >= 100 ? 2 : CC >= 10 ? 1 : 0
    }, zC.popCount = function(CC) {
      return 16843009 * ((CC = (858993459 & (CC -= CC >>> 1 & 1431655765)) + (CC >>> 2 & 858993459)) + (CC >>> 4) & 252645135) >>> 24
    }, zC.countTrailingZeros = ZC, zC.nextPow2 = function(CC) {
      return CC += 0 === CC, --CC, CC |= CC >>> 1, CC |= CC >>> 2, CC |= CC >>> 4, CC |= CC >>> 8, (CC |= CC >>> 16) + 1
    }, zC.prevPow2 = function(CC) {
      return CC |= CC >>> 1, CC |= CC >>> 2, CC |= CC >>> 4, CC |= CC >>> 8, (CC |= CC >>> 16) - (CC >>> 1)
    }, zC.parity = function(CC) {
      return CC ^= CC >>> 16, CC ^= CC >>> 8, CC ^= CC >>> 4, 27030 >>> (CC &= 15) & 1
    };
    var QC = new Array(256);
    ! function(CC) {
      for (var zC = 0; zC < 256; ++zC) {
        var ZC = zC,
          QC = zC,
          wC = 7;
        for (ZC >>>= 1; ZC; ZC >>>= 1) QC <<= 1, QC |= 1 & ZC, --wC;
        CC[zC] = QC << wC & 255
      }
    }(QC), zC.reverse = function(CC) {
      return QC[255 & CC] << 24 | QC[CC >>> 8 & 255] << 16 | QC[CC >>> 16 & 255] << 8 | QC[CC >>> 24 & 255]
    }, zC.interleave2 = function(CC, zC) {
      return (CC = 1431655765 & ((CC = 858993459 & ((CC = 252645135 & ((CC = 16711935 & ((CC &= 65535) | CC << 8)) | CC << 4)) | CC << 2)) | CC << 1)) | (zC = 1431655765 & ((zC = 858993459 & ((zC = 252645135 & ((zC = 16711935 & ((zC &= 65535) | zC << 8)) | zC << 4)) | zC << 2)) | zC << 1)) << 1
    }, zC.deinterleave2 = function(CC, zC) {
      return (CC = 65535 & ((CC = 16711935 & ((CC = 252645135 & ((CC = 858993459 & ((CC = CC >>> zC & 1431655765) | CC >>> 1)) | CC >>> 2)) | CC >>> 4)) | CC >>> 16)) << 16 >> 16
    }, zC.interleave3 = function(CC, zC, ZC) {
      return CC = 1227133513 & ((CC = 3272356035 & ((CC = 251719695 & ((CC = 4278190335 & ((CC &= 1023) | CC << 16)) | CC << 8)) | CC << 4)) | CC << 2), (CC |= (zC = 1227133513 & ((zC = 3272356035 & ((zC = 251719695 & ((zC = 4278190335 & ((zC &= 1023) | zC << 16)) | zC << 8)) | zC << 4)) | zC << 2)) << 1) | (ZC = 1227133513 & ((ZC = 3272356035 & ((ZC = 251719695 & ((ZC = 4278190335 & ((ZC &= 1023) | ZC << 16)) | ZC << 8)) | ZC << 4)) | ZC << 2)) << 2
    }, zC.deinterleave3 = function(CC, zC) {
      return (CC = 1023 & ((CC = 4278190335 & ((CC = 251719695 & ((CC = 3272356035 & ((CC = CC >>> zC & 1227133513) | CC >>> 2)) | CC >>> 4)) | CC >>> 8)) | CC >>> 16)) << 22 >> 22
    }, zC.nextCombination = function(CC) {
      var zC = CC | CC - 1;
      return zC + 1 | (~zC & -~zC) - 1 >>> ZC(CC) + 1
    }
  },
  39623: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      emptyColumnHeight: () => AC,
      loadHeatmapSchematic: () => xC,
      readSchematicBlocks: () => JC
    });
    var QC = ZC(3681),
      wC = ZC.n(QC),
      bC = ZC(3661),
      nC = ZC(37555),
      fC = ZC(184),
      oC = ZC(9194);
    const qC = [{
        name: "x",
        type: "int"
      }, {
        name: "y",
        type: "int"
      }, {
        name: "z",
        type: "int"
      }],
      FC = [{
        name: "name",
        type: "string"
      }, {
        name: "startOffset",
        type: {
          type: "record",
          fields: qC
        }
      }, {
        name: "dimensions",
        type: {
          type: "record",
          fields: qC
        }
      }, {
        name: "chunkData",
        type: {
          type: "array",
          items: {
            type: "record",
            fields: [...qC, {
              name: "rle",
              type: "bytes"
            }]
          }
        }
      }],
      WC = wC().Type.forSchema({
        type: "record",
        fields: FC
      }),
      NC = wC().Type.forSchema({
        type: "record",
        fields: [...FC, {
          name: "blockData",
          type: {
            type: "array",
            items: {
              type: "record",
              fields: [...qC, {
                name: "data",
                type: "bytes"
              }]
            }
          }
        }, {
          name: "pasteOffset",
          type: {
            type: "record",
            fields: qC
          }
        }]
      }),
      MC = 2,
      gC = 6,
      SC = {
        Water: [63, 118, 228],
        Lava: [232, 110, 30]
      },
      pC = [150, 150, 150],
      PC = 16,
      GC = 4096,
      RC = fC.f.Ig,
      AC = -2147483648;
    async function xC(CC) {
      const zC = await JC(new Uint8Array(await CC.arrayBuffer()), await async function() {
        const {
          averageColors: CC
        } = await ZC.e(204).then((() => ZC(34243))), zC = new Map;
        return ZC => {
          var QC, wC, bC, nC, fC;
          const qC = zC.get(ZC);
          if (void 0 !== qC) return qC;
          const FC = null !== (QC = null === (wC = oC.g[ZC]) || void 0 === wC ? void 0 : wC.name) && void 0 !== QC ? QC : "",
            WC = null !== (bC = CC[FC]) && void 0 !== bC ? bC : CC[FC.split("|")[0]],
            NC = SC[FC.split("|")[0]],
            MC = null !== (nC = null !== (fC = null === WC || void 0 === WC ? void 0 : WC[0]) && void 0 !== fC ? fC : NC) && void 0 !== nC ? nC : 0 === (null === WC || void 0 === WC ? void 0 : WC.length) ? null : pC;
          return zC.set(ZC, MC), MC
        }
      }());
      return {
        surface: zC.surface,
        topDown: iC(zC.columnTops)
      }
    }
    async function JC(CC, zC) {
      var ZC;
      if (CC.byteLength < 4) throw new Error("The file is too short to be a schematic.");
      const QC = new DataView(CC.buffer, CC.byteOffset, CC.byteLength).getUint32(0, !0);
      if (QC > gC) throw new Error("The file isn't a schematic this version of Bloxd can read.");
      const wC = (QC >= MC ? NC : WC).decode(bC.gg.from(CC.subarray(4)), 0).value;
      if (!wC) throw new Error("The file isn't a schematic.");
      if (0 === wC.chunkData.length) throw new Error("The schematic has no blocks in it.");
      const fC = null !== (ZC = wC.pasteOffset) && void 0 !== ZC ? ZC : {
          x: 0,
          y: 0,
          z: 0
        },
        oC = [fC.x, fC.y, fC.z].map((CC => Math.floor(CC / RC))),
        qC = wC.chunkData.map((CC => ({
          x: CC.x + oC[0],
          y: CC.y + oC[1],
          z: CC.z + oC[2],
          rle: CC.rle
        }))),
        FC = new Map;
      for (const [bC, WC] of qC.entries()) {
        const CC = new Uint16Array(RC ** 3);
        nC.decode(WC.rle, CC), FC.set(`${WC.x},${WC.y},${WC.z}`, CC), bC % PC === PC - 1 && await vC()
      }
      const SC = (CC, zC, ZC) => CC * RC * RC + zC * RC + ZC,
        pC = (CC, zC, ZC) => {
          var QC, wC;
          const bC = Math.floor(CC / RC),
            nC = Math.floor(zC / RC),
            fC = Math.floor(ZC / RC);
          return null !== (QC = null === (wC = FC.get(`${bC},${nC},${fC}`)) || void 0 === wC ? void 0 : wC[SC(CC - bC * RC, zC - nC * RC, ZC - fC * RC)]) && void 0 !== QC ? QC : 0
        },
        GC = new Map,
        xC = [],
        JC = [];
      for (const [bC, nC] of qC.entries()) {
        const CC = FC.get(`${nC.x},${nC.y},${nC.z}`),
          ZC = [nC.x * RC, nC.y * RC, nC.z * RC],
          QC = (zC, QC, wC) => zC < 0 || QC < 0 || wC < 0 || zC >= RC || QC >= RC || wC >= RC ? pC(ZC[0] + zC, ZC[1] + QC, ZC[2] + wC) : CC[SC(zC, QC, wC)],
          wC = `${nC.x},${nC.z}`;
        let fC = GC.get(wC);
        void 0 === fC && (fC = {
          chunkX: nC.x,
          chunkZ: nC.z,
          heights: new Int32Array(RC * RC).fill(AC),
          colours: new Uint8Array(RC * RC * 3)
        }, GC.set(wC, fC));
        for (let bC = 0; bC < RC; bC++)
          for (let wC = 0; wC < RC; wC++)
            for (let nC = 0; nC < RC; nC++) {
              const oC = CC[SC(bC, wC, nC)];
              if (0 === oC) continue;
              const qC = ZC[0] + bC,
                FC = ZC[1] + wC,
                WC = ZC[2] + nC,
                NC = zC(oC);
              if (null === NC) continue;
              const MC = nC * RC + bC;
              FC > fC.heights[MC] && (fC.heights[MC] = FC, fC.colours.set(NC, 3 * MC));
              !IC(oC) && (IC(QC(bC + 1, wC, nC)) || IC(QC(bC - 1, wC, nC)) || IC(QC(bC, wC + 1, nC)) || IC(QC(bC, wC - 1, nC)) || IC(QC(bC, wC, nC + 1)) || IC(QC(bC, wC, nC - 1))) && (xC.push(qC, FC, WC), JC.push(NC[0], NC[1], NC[2]))
            }
        bC % PC === PC - 1 && await vC()
      }
      if (0 === xC.length) throw new Error("The schematic has no blocks in it.");
      return {
        name: wC.name,
        surface: {
          positions: Int32Array.from(xC),
          colours: Uint8Array.from(JC),
          count: xC.length / 3
        },
        columnTops: [...GC.values()]
      }
    }

    function IC(CC) {
      if (0 === CC) return !0;
      const zC = oC.g[CC];
      return void 0 === zC || zC.NM || zC.transTex || !1 === zC.solid
    }

    function iC(CC) {
      let zC = 1 / 0,
        ZC = -1 / 0,
        QC = 1 / 0,
        wC = -1 / 0;
      for (const {
          chunkX: gC,
          chunkZ: SC,
          heights: pC
        }
        of CC) pC.forEach(((CC, bC) => {
        if (CC === AC) return;
        const nC = gC * RC + bC % RC,
          fC = SC * RC + Math.floor(bC / RC);
        zC = Math.min(zC, nC), ZC = Math.max(ZC, nC), QC = Math.min(QC, fC), wC = Math.max(wC, fC)
      }));
      const bC = ZC - zC + 1,
        nC = wC - QC + 1,
        fC = Math.max(1, Math.ceil(bC / GC), Math.ceil(nC / GC)),
        oC = Math.ceil(bC / fC),
        qC = Math.ceil(nC / fC),
        FC = document.createElement("canvas");
      FC.width = oC, FC.height = qC;
      const WC = FC.getContext("2d");
      if (!WC) throw new Error("Couldn't draw the schematic from above.");
      const NC = WC.createImageData(oC, qC),
        MC = new Int32Array(oC * qC).fill(AC);
      for (const {
          chunkX: gC,
          chunkZ: SC,
          heights: pC,
          colours: PC
        }
        of CC) pC.forEach(((CC, zC) => {
        const wC = gC * RC + zC % RC,
          bC = SC * RC + Math.floor(zC / RC),
          nC = Math.floor((bC - QC) / fC) * oC + Math.floor((ZC - wC) / fC);
        CC === AC || CC <= MC[nC] || (MC[nC] = CC, NC.data.set(PC.subarray(3 * zC, 3 * zC + 3), 4 * nC), NC.data[4 * nC + 3] = 255)
      }));
      return WC.putImageData(NC, 0, 0), {
        maxX: ZC,
        minZ: QC,
        width: oC * fC,
        depth: qC * fC,
        canvas: FC
      }
    }

    function vC() {
      return new Promise((CC => {
        setTimeout(CC, 0)
      }))
    }
  },
  9299: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => wC,
      d: () => bC
    });
    var QC = ZC(9239);
    const wC = "Air",
      bC = Object.freeze(new QC.e(wC, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);