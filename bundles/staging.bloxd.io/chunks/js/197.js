export const id = 197;
export const ids = [197];
export const modules = {
  37119: (DD, CD, cD) => {
    var ID = cD(37127);

    function pD(DD) {
      for (var CD, cD, pD = 0, iD = DD.length, fD = 0; fD < DD.length;) {
        for (CD = DD[fD], cD = 0; fD < iD && DD[fD] === CD;) ++fD, ++cD;
        pD += ID.log2(cD) / 7 | 0, pD += ID.log2(CD >>> 0) / 7 | 0, pD += 2
      }
      return pD
    }
    CD.size = pD, CD.encode = function(DD, CD) {
      CD || (CD = new Uint8Array(pD(DD)));
      for (var cD, ID, iD = 0, fD = CD.length, bD = 0; bD < DD.length;) {
        for (cD = DD[bD], ID = 0; bD < DD.length && DD[bD] === cD;) ++bD, ++ID;
        for (; iD < fD && ID >= 128;) CD[iD++] = 128 + (127 & ID), ID >>>= 7;
        if (iD >= fD) throw new Error("RLE buffer overflow");
        for (CD[iD++] = ID, cD >>>= 0; iD < fD && cD >= 128;) CD[iD++] = 128 + (127 & cD), cD >>>= 7;
        if (iD >= fD) throw new Error("RLE buffer overflow");
        CD[iD++] = cD
      }
      return CD
    }, CD.decode = function(DD, CD) {
      for (var cD, ID, pD, iD, fD = CD.length, bD = DD.length, QD = 0, wD = 0; wD < bD;) {
        for (cD = 0, ID = 0; wD < bD && DD[wD] >= 128;) cD += (127 & DD[wD++]) << ID, ID += 7;
        if (cD += DD[wD++] << ID, wD >= bD) throw new Error("RLE buffer underrun");
        if (QD + cD > fD) throw new Error("Chunk buffer overflow");
        for (pD = 0, ID = 0; wD < bD && DD[wD] >= 128;) pD += (127 & DD[wD++]) << ID, ID += 7;
        if (wD >= bD) throw new Error("RLE buffer underrun");
        for (pD += DD[wD++] << ID, iD = 0; iD < cD; ++iD) CD[QD++] = pD
      }
      return CD
    }
  },
  37127: (DD, CD) => {
    function cD(DD) {
      var CD = 32;
      return (DD &= -DD) && CD--, 65535 & DD && (CD -= 16), 16711935 & DD && (CD -= 8), 252645135 & DD && (CD -= 4), 858993459 & DD && (CD -= 2), 1431655765 & DD && (CD -= 1), CD
    }
    CD.INT_BITS = 32, CD.INT_MAX = 2147483647, CD.INT_MIN = -1 << 31, CD.sign = function(DD) {
      return (DD > 0) - (DD < 0)
    }, CD.abs = function(DD) {
      var CD = DD >> 31;
      return (DD ^ CD) - CD
    }, CD.min = function(DD, CD) {
      return CD ^ (DD ^ CD) & -(DD < CD)
    }, CD.max = function(DD, CD) {
      return DD ^ (DD ^ CD) & -(DD < CD)
    }, CD.isPow2 = function(DD) {
      return !(DD & DD - 1) && !!DD
    }, CD.log2 = function(DD) {
      var CD, cD;
      return CD = (DD > 65535) << 4, CD |= cD = ((DD >>>= CD) > 255) << 3, CD |= cD = ((DD >>>= cD) > 15) << 2, (CD |= cD = ((DD >>>= cD) > 3) << 1) | (DD >>>= cD) >> 1
    }, CD.log10 = function(DD) {
      return DD >= 1e9 ? 9 : DD >= 1e8 ? 8 : DD >= 1e7 ? 7 : DD >= 1e6 ? 6 : DD >= 1e5 ? 5 : DD >= 1e4 ? 4 : DD >= 1e3 ? 3 : DD >= 100 ? 2 : DD >= 10 ? 1 : 0
    }, CD.popCount = function(DD) {
      return 16843009 * ((DD = (858993459 & (DD -= DD >>> 1 & 1431655765)) + (DD >>> 2 & 858993459)) + (DD >>> 4) & 252645135) >>> 24
    }, CD.countTrailingZeros = cD, CD.nextPow2 = function(DD) {
      return DD += 0 === DD, --DD, DD |= DD >>> 1, DD |= DD >>> 2, DD |= DD >>> 4, DD |= DD >>> 8, (DD |= DD >>> 16) + 1
    }, CD.prevPow2 = function(DD) {
      return DD |= DD >>> 1, DD |= DD >>> 2, DD |= DD >>> 4, DD |= DD >>> 8, (DD |= DD >>> 16) - (DD >>> 1)
    }, CD.parity = function(DD) {
      return DD ^= DD >>> 16, DD ^= DD >>> 8, DD ^= DD >>> 4, 27030 >>> (DD &= 15) & 1
    };
    var ID = new Array(256);
    ! function(DD) {
      for (var CD = 0; CD < 256; ++CD) {
        var cD = CD,
          ID = CD,
          pD = 7;
        for (cD >>>= 1; cD; cD >>>= 1) ID <<= 1, ID |= 1 & cD, --pD;
        DD[CD] = ID << pD & 255
      }
    }(ID), CD.reverse = function(DD) {
      return ID[255 & DD] << 24 | ID[DD >>> 8 & 255] << 16 | ID[DD >>> 16 & 255] << 8 | ID[DD >>> 24 & 255]
    }, CD.interleave2 = function(DD, CD) {
      return (DD = 1431655765 & ((DD = 858993459 & ((DD = 252645135 & ((DD = 16711935 & ((DD &= 65535) | DD << 8)) | DD << 4)) | DD << 2)) | DD << 1)) | (CD = 1431655765 & ((CD = 858993459 & ((CD = 252645135 & ((CD = 16711935 & ((CD &= 65535) | CD << 8)) | CD << 4)) | CD << 2)) | CD << 1)) << 1
    }, CD.deinterleave2 = function(DD, CD) {
      return (DD = 65535 & ((DD = 16711935 & ((DD = 252645135 & ((DD = 858993459 & ((DD = DD >>> CD & 1431655765) | DD >>> 1)) | DD >>> 2)) | DD >>> 4)) | DD >>> 16)) << 16 >> 16
    }, CD.interleave3 = function(DD, CD, cD) {
      return DD = 1227133513 & ((DD = 3272356035 & ((DD = 251719695 & ((DD = 4278190335 & ((DD &= 1023) | DD << 16)) | DD << 8)) | DD << 4)) | DD << 2), (DD |= (CD = 1227133513 & ((CD = 3272356035 & ((CD = 251719695 & ((CD = 4278190335 & ((CD &= 1023) | CD << 16)) | CD << 8)) | CD << 4)) | CD << 2)) << 1) | (cD = 1227133513 & ((cD = 3272356035 & ((cD = 251719695 & ((cD = 4278190335 & ((cD &= 1023) | cD << 16)) | cD << 8)) | cD << 4)) | cD << 2)) << 2
    }, CD.deinterleave3 = function(DD, CD) {
      return (DD = 1023 & ((DD = 4278190335 & ((DD = 251719695 & ((DD = 3272356035 & ((DD = DD >>> CD & 1227133513) | DD >>> 2)) | DD >>> 4)) | DD >>> 8)) | DD >>> 16)) << 22 >> 22
    }, CD.nextCombination = function(DD) {
      var CD = DD | DD - 1;
      return CD + 1 | (~CD & -~CD) - 1 >>> cD(DD) + 1
    }
  },
  38954: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      emptyColumnHeight: () => XD,
      loadHeatmapSchematic: () => mD,
      readSchematicBlocks: () => nD
    });
    var ID = cD(3591),
      pD = cD.n(ID),
      iD = cD(3563),
      fD = cD(37119),
      bD = cD(194),
      QD = cD(9141);
    const wD = [{
        name: "x",
        type: "int"
      }, {
        name: "y",
        type: "int"
      }, {
        name: "z",
        type: "int"
      }],
      SD = [{
        name: "name",
        type: "string"
      }, {
        name: "startOffset",
        type: {
          type: "record",
          fields: wD
        }
      }, {
        name: "dimensions",
        type: {
          type: "record",
          fields: wD
        }
      }, {
        name: "chunkData",
        type: {
          type: "array",
          items: {
            type: "record",
            fields: [...wD, {
              name: "rle",
              type: "bytes"
            }]
          }
        }
      }],
      BD = pD().Type.forSchema({
        type: "record",
        fields: SD
      }),
      yD = pD().Type.forSchema({
        type: "record",
        fields: [...SD, {
          name: "blockData",
          type: {
            type: "array",
            items: {
              type: "record",
              fields: [...wD, {
                name: "data",
                type: "bytes"
              }]
            }
          }
        }, {
          name: "pasteOffset",
          type: {
            type: "record",
            fields: wD
          }
        }]
      }),
      MD = 2,
      tD = 6,
      ZD = {
        Water: [63, 118, 228],
        Lava: [232, 110, 30]
      },
      oD = [150, 150, 150],
      vD = 16,
      ND = 4096,
      gD = bD.h.Wt,
      XD = -2147483648;
    async function mD(DD) {
      const CD = await nD(new Uint8Array(await DD.arrayBuffer()), await async function() {
        const {
          averageColors: DD
        } = await cD.e(201).then((() => cD(33733))), CD = new Map;
        return cD => {
          var ID, pD, iD, fD, bD;
          const wD = CD.get(cD);
          if (void 0 !== wD) return wD;
          const SD = null !== (ID = null === (pD = QD.g[cD]) || void 0 === pD ? void 0 : pD.name) && void 0 !== ID ? ID : "",
            BD = null !== (iD = DD[SD]) && void 0 !== iD ? iD : DD[SD.split("|")[0]],
            yD = ZD[SD.split("|")[0]],
            MD = null !== (fD = null !== (bD = null === BD || void 0 === BD ? void 0 : BD[0]) && void 0 !== bD ? bD : yD) && void 0 !== fD ? fD : 0 === (null === BD || void 0 === BD ? void 0 : BD.length) ? null : oD;
          return CD.set(cD, MD), MD
        }
      }());
      return {
        surface: CD.surface,
        topDown: PD(CD.columnTops)
      }
    }
    async function nD(DD, CD) {
      var cD;
      if (DD.byteLength < 4) throw new Error("The file is too short to be a schematic.");
      const ID = new DataView(DD.buffer, DD.byteOffset, DD.byteLength).getUint32(0, !0);
      if (ID > tD) throw new Error("The file isn't a schematic this version of Bloxd can read.");
      const pD = (ID >= MD ? yD : BD).decode(iD.lt.from(DD.subarray(4)), 0).value;
      if (!pD) throw new Error("The file isn't a schematic.");
      if (0 === pD.chunkData.length) throw new Error("The schematic has no blocks in it.");
      const bD = null !== (cD = pD.pasteOffset) && void 0 !== cD ? cD : {
          x: 0,
          y: 0,
          z: 0
        },
        QD = [bD.x, bD.y, bD.z].map((DD => Math.floor(DD / gD))),
        wD = pD.chunkData.map((DD => ({
          x: DD.x + QD[0],
          y: DD.y + QD[1],
          z: DD.z + QD[2],
          rle: DD.rle
        }))),
        SD = new Map;
      for (const [iD, BD] of wD.entries()) {
        const DD = new Uint16Array(gD ** 3);
        fD.decode(BD.rle, DD), SD.set(`${BD.x},${BD.y},${BD.z}`, DD), iD % vD === vD - 1 && await HD()
      }
      const ZD = (DD, CD, cD) => DD * gD * gD + CD * gD + cD,
        oD = (DD, CD, cD) => {
          var ID, pD;
          const iD = Math.floor(DD / gD),
            fD = Math.floor(CD / gD),
            bD = Math.floor(cD / gD);
          return null !== (ID = null === (pD = SD.get(`${iD},${fD},${bD}`)) || void 0 === pD ? void 0 : pD[ZD(DD - iD * gD, CD - fD * gD, cD - bD * gD)]) && void 0 !== ID ? ID : 0
        },
        ND = new Map,
        mD = [],
        nD = [];
      for (const [iD, fD] of wD.entries()) {
        const DD = SD.get(`${fD.x},${fD.y},${fD.z}`),
          cD = [fD.x * gD, fD.y * gD, fD.z * gD],
          ID = (CD, ID, pD) => CD < 0 || ID < 0 || pD < 0 || CD >= gD || ID >= gD || pD >= gD ? oD(cD[0] + CD, cD[1] + ID, cD[2] + pD) : DD[ZD(CD, ID, pD)],
          pD = `${fD.x},${fD.z}`;
        let bD = ND.get(pD);
        void 0 === bD && (bD = {
          chunkX: fD.x,
          chunkZ: fD.z,
          heights: new Int32Array(gD * gD).fill(XD),
          colours: new Uint8Array(gD * gD * 3)
        }, ND.set(pD, bD));
        for (let iD = 0; iD < gD; iD++)
          for (let pD = 0; pD < gD; pD++)
            for (let fD = 0; fD < gD; fD++) {
              const QD = DD[ZD(iD, pD, fD)];
              if (0 === QD) continue;
              const wD = cD[0] + iD,
                SD = cD[1] + pD,
                BD = cD[2] + fD,
                yD = CD(QD);
              if (null === yD) continue;
              const MD = fD * gD + iD;
              SD > bD.heights[MD] && (bD.heights[MD] = SD, bD.colours.set(yD, 3 * MD));
              !OD(QD) && (OD(ID(iD + 1, pD, fD)) || OD(ID(iD - 1, pD, fD)) || OD(ID(iD, pD + 1, fD)) || OD(ID(iD, pD - 1, fD)) || OD(ID(iD, pD, fD + 1)) || OD(ID(iD, pD, fD - 1))) && (mD.push(wD, SD, BD), nD.push(yD[0], yD[1], yD[2]))
            }
        iD % vD === vD - 1 && await HD()
      }
      if (0 === mD.length) throw new Error("The schematic has no blocks in it.");
      return {
        name: pD.name,
        surface: {
          positions: Int32Array.from(mD),
          colours: Uint8Array.from(nD),
          count: mD.length / 3
        },
        columnTops: [...ND.values()]
      }
    }

    function OD(DD) {
      if (0 === DD) return !0;
      const CD = QD.g[DD];
      return void 0 === CD || CD.HM || CD.transTex || !1 === CD.solid
    }

    function PD(DD) {
      let CD = 1 / 0,
        cD = -1 / 0,
        ID = 1 / 0,
        pD = -1 / 0;
      for (const {
          chunkX: tD,
          chunkZ: ZD,
          heights: oD
        }
        of DD) oD.forEach(((DD, iD) => {
        if (DD === XD) return;
        const fD = tD * gD + iD % gD,
          bD = ZD * gD + Math.floor(iD / gD);
        CD = Math.min(CD, fD), cD = Math.max(cD, fD), ID = Math.min(ID, bD), pD = Math.max(pD, bD)
      }));
      const iD = cD - CD + 1,
        fD = pD - ID + 1,
        bD = Math.max(1, Math.ceil(iD / ND), Math.ceil(fD / ND)),
        QD = Math.ceil(iD / bD),
        wD = Math.ceil(fD / bD),
        SD = document.createElement("canvas");
      SD.width = QD, SD.height = wD;
      const BD = SD.getContext("2d");
      if (!BD) throw new Error("Couldn't draw the schematic from above.");
      const yD = BD.createImageData(QD, wD),
        MD = new Int32Array(QD * wD).fill(XD);
      for (const {
          chunkX: tD,
          chunkZ: ZD,
          heights: oD,
          colours: vD
        }
        of DD) oD.forEach(((DD, CD) => {
        const pD = tD * gD + CD % gD,
          iD = ZD * gD + Math.floor(CD / gD),
          fD = Math.floor((iD - ID) / bD) * QD + Math.floor((cD - pD) / bD);
        DD === XD || DD <= MD[fD] || (MD[fD] = DD, yD.data.set(vD.subarray(3 * CD, 3 * CD + 3), 4 * fD), yD.data[4 * fD + 3] = 255)
      }));
      return BD.putImageData(yD, 0, 0), {
        maxX: cD,
        minZ: ID,
        width: QD * bD,
        depth: wD * bD,
        canvas: SD
      }
    }

    function HD() {
      return new Promise((DD => {
        setTimeout(DD, 0)
      }))
    }
  },
  9237: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => pD,
      g: () => iD
    });
    var ID = cD(9189);
    const pD = "Air",
      iD = Object.freeze(new ID.d(pD, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);