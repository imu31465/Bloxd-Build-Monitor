export const id = 203;
export const ids = [203];
export const modules = {
  38710: (MM, rM, iM) => {
    var OM = iM(38716);

    function SM(MM) {
      for (var rM, iM, SM = 0, jM = MM.length, aM = 0; aM < MM.length;) {
        for (rM = MM[aM], iM = 0; aM < jM && MM[aM] === rM;) ++aM, ++iM;
        SM += OM.log2(iM) / 7 | 0, SM += OM.log2(rM >>> 0) / 7 | 0, SM += 2
      }
      return SM
    }
    rM.size = SM, rM.encode = function(MM, rM) {
      rM || (rM = new Uint8Array(SM(MM)));
      for (var iM, OM, jM = 0, aM = rM.length, PM = 0; PM < MM.length;) {
        for (iM = MM[PM], OM = 0; PM < MM.length && MM[PM] === iM;) ++PM, ++OM;
        for (; jM < aM && OM >= 128;) rM[jM++] = 128 + (127 & OM), OM >>>= 7;
        if (jM >= aM) throw new Error("RLE buffer overflow");
        for (rM[jM++] = OM, iM >>>= 0; jM < aM && iM >= 128;) rM[jM++] = 128 + (127 & iM), iM >>>= 7;
        if (jM >= aM) throw new Error("RLE buffer overflow");
        rM[jM++] = iM
      }
      return rM
    }, rM.decode = function(MM, rM) {
      for (var iM, OM, SM, jM, aM = rM.length, PM = MM.length, nM = 0, QM = 0; QM < PM;) {
        for (iM = 0, OM = 0; QM < PM && MM[QM] >= 128;) iM += (127 & MM[QM++]) << OM, OM += 7;
        if (iM += MM[QM++] << OM, QM >= PM) throw new Error("RLE buffer underrun");
        if (nM + iM > aM) throw new Error("Chunk buffer overflow");
        for (SM = 0, OM = 0; QM < PM && MM[QM] >= 128;) SM += (127 & MM[QM++]) << OM, OM += 7;
        if (QM >= PM) throw new Error("RLE buffer underrun");
        for (SM += MM[QM++] << OM, jM = 0; jM < iM; ++jM) rM[nM++] = SM
      }
      return rM
    }
  },
  38716: (MM, rM) => {
    function iM(MM) {
      var rM = 32;
      return (MM &= -MM) && rM--, 65535 & MM && (rM -= 16), 16711935 & MM && (rM -= 8), 252645135 & MM && (rM -= 4), 858993459 & MM && (rM -= 2), 1431655765 & MM && (rM -= 1), rM
    }
    rM.INT_BITS = 32, rM.INT_MAX = 2147483647, rM.INT_MIN = -1 << 31, rM.sign = function(MM) {
      return (MM > 0) - (MM < 0)
    }, rM.abs = function(MM) {
      var rM = MM >> 31;
      return (MM ^ rM) - rM
    }, rM.min = function(MM, rM) {
      return rM ^ (MM ^ rM) & -(MM < rM)
    }, rM.max = function(MM, rM) {
      return MM ^ (MM ^ rM) & -(MM < rM)
    }, rM.isPow2 = function(MM) {
      return !(MM & MM - 1) && !!MM
    }, rM.log2 = function(MM) {
      var rM, iM;
      return rM = (MM > 65535) << 4, rM |= iM = ((MM >>>= rM) > 255) << 3, rM |= iM = ((MM >>>= iM) > 15) << 2, (rM |= iM = ((MM >>>= iM) > 3) << 1) | (MM >>>= iM) >> 1
    }, rM.log10 = function(MM) {
      return MM >= 1e9 ? 9 : MM >= 1e8 ? 8 : MM >= 1e7 ? 7 : MM >= 1e6 ? 6 : MM >= 1e5 ? 5 : MM >= 1e4 ? 4 : MM >= 1e3 ? 3 : MM >= 100 ? 2 : MM >= 10 ? 1 : 0
    }, rM.popCount = function(MM) {
      return 16843009 * ((MM = (858993459 & (MM -= MM >>> 1 & 1431655765)) + (MM >>> 2 & 858993459)) + (MM >>> 4) & 252645135) >>> 24
    }, rM.countTrailingZeros = iM, rM.nextPow2 = function(MM) {
      return MM += 0 === MM, --MM, MM |= MM >>> 1, MM |= MM >>> 2, MM |= MM >>> 4, MM |= MM >>> 8, (MM |= MM >>> 16) + 1
    }, rM.prevPow2 = function(MM) {
      return MM |= MM >>> 1, MM |= MM >>> 2, MM |= MM >>> 4, MM |= MM >>> 8, (MM |= MM >>> 16) - (MM >>> 1)
    }, rM.parity = function(MM) {
      return MM ^= MM >>> 16, MM ^= MM >>> 8, MM ^= MM >>> 4, 27030 >>> (MM &= 15) & 1
    };
    var OM = new Array(256);
    ! function(MM) {
      for (var rM = 0; rM < 256; ++rM) {
        var iM = rM,
          OM = rM,
          SM = 7;
        for (iM >>>= 1; iM; iM >>>= 1) OM <<= 1, OM |= 1 & iM, --SM;
        MM[rM] = OM << SM & 255
      }
    }(OM), rM.reverse = function(MM) {
      return OM[255 & MM] << 24 | OM[MM >>> 8 & 255] << 16 | OM[MM >>> 16 & 255] << 8 | OM[MM >>> 24 & 255]
    }, rM.interleave2 = function(MM, rM) {
      return (MM = 1431655765 & ((MM = 858993459 & ((MM = 252645135 & ((MM = 16711935 & ((MM &= 65535) | MM << 8)) | MM << 4)) | MM << 2)) | MM << 1)) | (rM = 1431655765 & ((rM = 858993459 & ((rM = 252645135 & ((rM = 16711935 & ((rM &= 65535) | rM << 8)) | rM << 4)) | rM << 2)) | rM << 1)) << 1
    }, rM.deinterleave2 = function(MM, rM) {
      return (MM = 65535 & ((MM = 16711935 & ((MM = 252645135 & ((MM = 858993459 & ((MM = MM >>> rM & 1431655765) | MM >>> 1)) | MM >>> 2)) | MM >>> 4)) | MM >>> 16)) << 16 >> 16
    }, rM.interleave3 = function(MM, rM, iM) {
      return MM = 1227133513 & ((MM = 3272356035 & ((MM = 251719695 & ((MM = 4278190335 & ((MM &= 1023) | MM << 16)) | MM << 8)) | MM << 4)) | MM << 2), (MM |= (rM = 1227133513 & ((rM = 3272356035 & ((rM = 251719695 & ((rM = 4278190335 & ((rM &= 1023) | rM << 16)) | rM << 8)) | rM << 4)) | rM << 2)) << 1) | (iM = 1227133513 & ((iM = 3272356035 & ((iM = 251719695 & ((iM = 4278190335 & ((iM &= 1023) | iM << 16)) | iM << 8)) | iM << 4)) | iM << 2)) << 2
    }, rM.deinterleave3 = function(MM, rM) {
      return (MM = 1023 & ((MM = 4278190335 & ((MM = 251719695 & ((MM = 3272356035 & ((MM = MM >>> rM & 1227133513) | MM >>> 2)) | MM >>> 4)) | MM >>> 8)) | MM >>> 16)) << 22 >> 22
    }, rM.nextCombination = function(MM) {
      var rM = MM | MM - 1;
      return rM + 1 | (~rM & -~rM) - 1 >>> iM(MM) + 1
    }
  },
  40924: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      emptyColumnHeight: () => EM,
      loadHeatmapSchematic: () => UM,
      readSchematicBlocks: () => GM
    });
    var OM = iM(4136),
      SM = iM.n(OM),
      jM = iM(4118),
      aM = iM(38710),
      PM = iM(181),
      nM = iM(9816),
      QM = iM(40543);
    const zM = [{
        name: "x",
        type: "int"
      }, {
        name: "y",
        type: "int"
      }, {
        name: "z",
        type: "int"
      }],
      LM = [{
        name: "name",
        type: "string"
      }, {
        name: "startOffset",
        type: {
          type: "record",
          fields: zM
        }
      }, {
        name: "dimensions",
        type: {
          type: "record",
          fields: zM
        }
      }, {
        name: "chunkData",
        type: {
          type: "array",
          items: {
            type: "record",
            fields: [...zM, {
              name: "rle",
              type: "bytes"
            }]
          }
        }
      }],
      mM = SM().Type.forSchema({
        type: "record",
        fields: LM
      }),
      HM = SM().Type.forSchema({
        type: "record",
        fields: [...LM, {
          name: "blockData",
          type: {
            type: "array",
            items: {
              type: "record",
              fields: [...zM, {
                name: "data",
                type: "bytes"
              }]
            }
          }
        }, {
          name: "pasteOffset",
          type: {
            type: "record",
            fields: zM
          }
        }]
      }),
      hM = 2,
      JM = 6,
      dM = 16,
      yM = 4096,
      lM = PM.f.HL,
      EM = -2147483648;
    async function UM(MM) {
      const rM = await (0, QM.b)(),
        iM = await GM(new Uint8Array(await MM.arrayBuffer()), (MM => rM.get(MM)));
      return {
        surface: iM.surface,
        topDown: eM(iM.columnTops)
      }
    }
    async function GM(MM, rM) {
      var iM;
      if (MM.byteLength < 4) throw new Error("The file is too short to be a schematic.");
      const OM = new DataView(MM.buffer, MM.byteOffset, MM.byteLength).getUint32(0, !0);
      if (OM > JM) throw new Error("The file isn't a schematic this version of Bloxd can read.");
      const SM = (OM >= hM ? HM : mM).decode(jM.Vz.from(MM.subarray(4)), 0).value;
      if (!SM) throw new Error("The file isn't a schematic.");
      if (0 === SM.chunkData.length) throw new Error("The schematic has no blocks in it.");
      const PM = null !== (iM = SM.pasteOffset) && void 0 !== iM ? iM : {
          x: 0,
          y: 0,
          z: 0
        },
        nM = [PM.x, PM.y, PM.z].map((MM => Math.floor(MM / lM))),
        QM = SM.chunkData.map((MM => ({
          x: MM.x + nM[0],
          y: MM.y + nM[1],
          z: MM.z + nM[2],
          rle: MM.rle
        }))),
        zM = new Map;
      for (const [jM, mM] of QM.entries()) {
        const MM = new Uint16Array(lM ** 3);
        aM.decode(mM.rle, MM), zM.set(`${mM.x},${mM.y},${mM.z}`, MM), jM % dM === dM - 1 && await bM()
      }
      const LM = (MM, rM, iM) => MM * lM * lM + rM * lM + iM,
        yM = (MM, rM, iM) => {
          var OM, SM;
          const jM = Math.floor(MM / lM),
            aM = Math.floor(rM / lM),
            PM = Math.floor(iM / lM);
          return null !== (OM = null === (SM = zM.get(`${jM},${aM},${PM}`)) || void 0 === SM ? void 0 : SM[LM(MM - jM * lM, rM - aM * lM, iM - PM * lM)]) && void 0 !== OM ? OM : 0
        },
        UM = new Map,
        GM = [],
        eM = [];
      for (const [jM, aM] of QM.entries()) {
        const MM = zM.get(`${aM.x},${aM.y},${aM.z}`),
          iM = [aM.x * lM, aM.y * lM, aM.z * lM],
          OM = (rM, OM, SM) => rM < 0 || OM < 0 || SM < 0 || rM >= lM || OM >= lM || SM >= lM ? yM(iM[0] + rM, iM[1] + OM, iM[2] + SM) : MM[LM(rM, OM, SM)],
          SM = `${aM.x},${aM.z}`;
        let PM = UM.get(SM);
        void 0 === PM && (PM = {
          chunkX: aM.x,
          chunkZ: aM.z,
          heights: new Int32Array(lM * lM).fill(EM),
          colours: new Uint8Array(lM * lM * 3)
        }, UM.set(SM, PM));
        for (let jM = 0; jM < lM; jM++)
          for (let SM = 0; SM < lM; SM++)
            for (let aM = 0; aM < lM; aM++) {
              const nM = MM[LM(jM, SM, aM)];
              if (0 === nM) continue;
              const QM = iM[0] + jM,
                zM = iM[1] + SM,
                mM = iM[2] + aM,
                HM = rM(nM);
              if (null === HM) continue;
              const hM = aM * lM + jM;
              zM > PM.heights[hM] && (PM.heights[hM] = zM, PM.colours.set(HM, 3 * hM));
              !CM(nM) && (CM(OM(jM + 1, SM, aM)) || CM(OM(jM - 1, SM, aM)) || CM(OM(jM, SM + 1, aM)) || CM(OM(jM, SM - 1, aM)) || CM(OM(jM, SM, aM + 1)) || CM(OM(jM, SM, aM - 1))) && (GM.push(QM, zM, mM), eM.push(HM[0], HM[1], HM[2]))
            }
        jM % dM === dM - 1 && await bM()
      }
      if (0 === GM.length) throw new Error("The schematic has no blocks in it.");
      return {
        name: SM.name,
        surface: {
          positions: Int32Array.from(GM),
          colours: Uint8Array.from(eM),
          count: GM.length / 3
        },
        columnTops: [...UM.values()]
      }
    }

    function CM(MM) {
      if (0 === MM) return !0;
      const rM = nM.k[MM];
      return void 0 === rM || rM.CH || rM.transTex || !1 === rM.solid
    }

    function eM(MM) {
      let rM = 1 / 0,
        iM = -1 / 0,
        OM = 1 / 0,
        SM = -1 / 0;
      for (const {
          chunkX: hM,
          chunkZ: JM,
          heights: dM
        }
        of MM) dM.forEach(((MM, jM) => {
        if (MM === EM) return;
        const aM = hM * lM + jM % lM,
          PM = JM * lM + Math.floor(jM / lM);
        rM = Math.min(rM, aM), iM = Math.max(iM, aM), OM = Math.min(OM, PM), SM = Math.max(SM, PM)
      }));
      const jM = iM - rM + 1,
        aM = SM - OM + 1,
        PM = Math.max(1, Math.ceil(jM / yM), Math.ceil(aM / yM)),
        nM = Math.ceil(jM / PM),
        QM = Math.ceil(aM / PM),
        zM = document.createElement("canvas");
      zM.width = nM, zM.height = QM;
      const LM = zM.getContext("2d");
      if (!LM) throw new Error("Couldn't draw the schematic from above.");
      const mM = LM.createImageData(nM, QM),
        HM = new Int32Array(nM * QM).fill(EM);
      for (const {
          chunkX: hM,
          chunkZ: JM,
          heights: dM,
          colours: yM
        }
        of MM) dM.forEach(((MM, rM) => {
        const SM = hM * lM + rM % lM,
          jM = JM * lM + Math.floor(rM / lM),
          aM = Math.floor((jM - OM) / PM) * nM + Math.floor((iM - SM) / PM);
        MM === EM || MM <= HM[aM] || (HM[aM] = MM, mM.data.set(yM.subarray(3 * rM, 3 * rM + 3), 4 * aM), mM.data[4 * aM + 3] = 255)
      }));
      return LM.putImageData(mM, 0, 0), {
        maxX: iM,
        minZ: OM,
        width: nM * PM,
        depth: QM * PM,
        canvas: zM
      }
    }

    function bM() {
      return new Promise((MM => {
        setTimeout(MM, 0)
      }))
    }
  },
  40543: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => SM
    });
    var OM = iM(40551);
    async function SM() {
      const {
        averageColors: MM
      } = await iM.e(231).then((() => iM(35131)));
      return new OM.c(MM)
    }
  },
  40551: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => PM,
      g: () => aM
    });
    var OM = iM(9816);
    const SM = {
        Water: [63, 118, 228],
        Lava: [232, 110, 30]
      },
      jM = [150, 150, 150],
      aM = -2147483648;
    class PM {
      constructor(MM) {
        this.averages = MM, this.byId = new Map
      }
      get(MM) {
        var rM, iM, aM, PM, nM;
        const QM = this.byId.get(MM);
        if (void 0 !== QM) return QM;
        const zM = null !== (rM = null === (iM = OM.k[MM]) || void 0 === iM ? void 0 : iM.name) && void 0 !== rM ? rM : "",
          LM = zM.split("|")[0],
          mM = null !== (aM = this.averages[zM]) && void 0 !== aM ? aM : this.averages[LM],
          HM = null !== (PM = null !== (nM = null === mM || void 0 === mM ? void 0 : mM[0]) && void 0 !== nM ? nM : SM[LM]) && void 0 !== PM ? PM : 0 === (null === mM || void 0 === mM ? void 0 : mM.length) ? null : jM;
        return this.byId.set(MM, HM), HM
      }
      getDrawnIds() {
        const MM = new Uint8Array(65536);
        for (let rM = 1; rM < 65536; rM++) void 0 !== OM.k[rM] && null !== this.get(rM) && (MM[rM] = 1);
        return MM
      }
      drawPixel(MM, rM, iM, OM, SM, jM) {
        const PM = function(MM, rM, iM) {
            const OM = MM - rM + (MM - iM);
            return Math.max(.65, Math.min(1.2, .97 + .055 * OM))
          }(OM, SM === aM ? OM : SM, jM === aM ? OM : jM),
          nM = this.get(iM);
        MM[rM] = nM[0] * PM, MM[rM + 1] = nM[1] * PM, MM[rM + 2] = nM[2] * PM, MM[rM + 3] = 255
      }
    }
  },
  9918: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => SM,
      e: () => jM
    });
    var OM = iM(9863);
    const SM = "Air",
      jM = Object.freeze(new OM.c(SM, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);