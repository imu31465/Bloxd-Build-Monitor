export const id = 176;
export const ids = [176];
export const modules = {
  37771: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      emptyColumnHeight: () => kW,
      loadHeatmapSchematic: () => qW,
      readSchematicBlocks: () => VF
    });
    var CF = SF(2947),
      AF = SF.n(CF),
      uF = SF(2978),
      hF = SF(36132),
      bW = SF(161),
      dF = SF(8242);
    const PF = [{
        name: "x",
        type: "int"
      }, {
        name: "y",
        type: "int"
      }, {
        name: "z",
        type: "int"
      }],
      RF = [{
        name: "name",
        type: "string"
      }, {
        name: "startOffset",
        type: {
          type: "record",
          fields: PF
        }
      }, {
        name: "dimensions",
        type: {
          type: "record",
          fields: PF
        }
      }, {
        name: "chunkData",
        type: {
          type: "array",
          items: {
            type: "record",
            fields: [...PF, {
              name: "rle",
              type: "bytes"
            }]
          }
        }
      }],
      iW = AF().Type.forSchema({
        type: "record",
        fields: RF
      }),
      eF = AF().Type.forSchema({
        type: "record",
        fields: [...RF, {
          name: "blockData",
          type: {
            type: "array",
            items: {
              type: "record",
              fields: [...PF, {
                name: "data",
                type: "bytes"
              }]
            }
          }
        }, {
          name: "pasteOffset",
          type: {
            type: "record",
            fields: PF
          }
        }]
      }),
      EF = 2,
      QF = 6,
      rW = {
        Water: [63, 118, 228],
        Lava: [232, 110, 30]
      },
      gW = [150, 150, 150],
      tW = 16,
      TF = 4096,
      aW = bW.h.MC,
      kW = -2147483648;
    async function qW(FF) {
      const WF = await VF(new Uint8Array(await FF.arrayBuffer()), await async function() {
        const {
          averageColors: FF
        } = await SF.e(182).then((() => SF(32982))), WF = new Map;
        return SF => {
          var CF, AF, uF, hF, bW;
          const PF = WF.get(SF);
          if (void 0 !== PF) return PF;
          const RF = null !== (CF = null === (AF = dF.i[SF]) || void 0 === AF ? void 0 : AF.name) && void 0 !== CF ? CF : "",
            iW = null !== (uF = FF[RF]) && void 0 !== uF ? uF : FF[RF.split("|")[0]],
            eF = rW[RF.split("|")[0]],
            EF = null !== (hF = null !== (bW = null === iW || void 0 === iW ? void 0 : iW[0]) && void 0 !== bW ? bW : eF) && void 0 !== hF ? hF : 0 === (null === iW || void 0 === iW ? void 0 : iW.length) ? null : gW;
          return WF.set(SF, EF), EF
        }
      }());
      return {
        surface: WF.surface,
        topDown: DF(WF.columnTops)
      }
    }
    async function VF(FF, WF) {
      var SF;
      if (FF.byteLength < 4) throw new Error("The file is too short to be a schematic.");
      const CF = new DataView(FF.buffer, FF.byteOffset, FF.byteLength).getUint32(0, !0);
      if (CF > QF) throw new Error("The file isn't a schematic this version of Bloxd can read.");
      const AF = (CF >= EF ? eF : iW).decode(uF.NC.from(FF.subarray(4)), 0).value;
      if (!AF) throw new Error("The file isn't a schematic.");
      if (0 === AF.chunkData.length) throw new Error("The schematic has no blocks in it.");
      const bW = null !== (SF = AF.pasteOffset) && void 0 !== SF ? SF : {
          x: 0,
          y: 0,
          z: 0
        },
        dF = [bW.x, bW.y, bW.z].map((FF => Math.floor(FF / aW))),
        PF = AF.chunkData.map((FF => ({
          x: FF.x + dF[0],
          y: FF.y + dF[1],
          z: FF.z + dF[2],
          rle: FF.rle
        }))),
        RF = new Map;
      for (const [uF, iW] of PF.entries()) {
        const FF = new Uint16Array(aW ** 3);
        hF.decode(iW.rle, FF), RF.set(`${iW.x},${iW.y},${iW.z}`, FF), uF % tW === tW - 1 && await LF()
      }
      const rW = (FF, WF, SF) => FF * aW * aW + WF * aW + SF,
        gW = (FF, WF, SF) => {
          var CF, AF;
          const uF = Math.floor(FF / aW),
            hF = Math.floor(WF / aW),
            bW = Math.floor(SF / aW);
          return null !== (CF = null === (AF = RF.get(`${uF},${hF},${bW}`)) || void 0 === AF ? void 0 : AF[rW(FF - uF * aW, WF - hF * aW, SF - bW * aW)]) && void 0 !== CF ? CF : 0
        },
        TF = new Map,
        qW = [],
        VF = [];
      for (const [uF, hF] of PF.entries()) {
        const FF = RF.get(`${hF.x},${hF.y},${hF.z}`),
          SF = [hF.x * aW, hF.y * aW, hF.z * aW],
          CF = (WF, CF, AF) => WF < 0 || CF < 0 || AF < 0 || WF >= aW || CF >= aW || AF >= aW ? gW(SF[0] + WF, SF[1] + CF, SF[2] + AF) : FF[rW(WF, CF, AF)],
          AF = `${hF.x},${hF.z}`;
        let bW = TF.get(AF);
        void 0 === bW && (bW = {
          chunkX: hF.x,
          chunkZ: hF.z,
          heights: new Int32Array(aW * aW).fill(kW),
          colours: new Uint8Array(aW * aW * 3)
        }, TF.set(AF, bW));
        for (let uF = 0; uF < aW; uF++)
          for (let AF = 0; AF < aW; AF++)
            for (let hF = 0; hF < aW; hF++) {
              const dF = FF[rW(uF, AF, hF)];
              if (0 === dF) continue;
              const PF = SF[0] + uF,
                RF = SF[1] + AF,
                iW = SF[2] + hF,
                eF = WF(dF);
              if (null === eF) continue;
              const EF = hF * aW + uF;
              RF > bW.heights[EF] && (bW.heights[EF] = RF, bW.colours.set(eF, 3 * EF));
              !NF(dF) && (NF(CF(uF + 1, AF, hF)) || NF(CF(uF - 1, AF, hF)) || NF(CF(uF, AF + 1, hF)) || NF(CF(uF, AF - 1, hF)) || NF(CF(uF, AF, hF + 1)) || NF(CF(uF, AF, hF - 1))) && (qW.push(PF, RF, iW), VF.push(eF[0], eF[1], eF[2]))
            }
        uF % tW === tW - 1 && await LF()
      }
      if (0 === qW.length) throw new Error("The schematic has no blocks in it.");
      return {
        name: AF.name,
        surface: {
          positions: Int32Array.from(qW),
          colours: Uint8Array.from(VF),
          count: qW.length / 3
        },
        columnTops: [...TF.values()]
      }
    }

    function NF(FF) {
      if (0 === FF) return !0;
      const WF = dF.i[FF];
      return void 0 === WF || WF.iC || WF.transTex || !1 === WF.solid
    }

    function DF(FF) {
      let WF = 1 / 0,
        SF = -1 / 0,
        CF = 1 / 0,
        AF = -1 / 0;
      for (const {
          chunkX: QF,
          chunkZ: rW,
          heights: gW
        }
        of FF) gW.forEach(((FF, uF) => {
        if (FF === kW) return;
        const hF = QF * aW + uF % aW,
          bW = rW * aW + Math.floor(uF / aW);
        WF = Math.min(WF, hF), SF = Math.max(SF, hF), CF = Math.min(CF, bW), AF = Math.max(AF, bW)
      }));
      const uF = SF - WF + 1,
        hF = AF - CF + 1,
        bW = Math.max(1, Math.ceil(uF / TF), Math.ceil(hF / TF)),
        dF = Math.ceil(uF / bW),
        PF = Math.ceil(hF / bW),
        RF = document.createElement("canvas");
      RF.width = dF, RF.height = PF;
      const iW = RF.getContext("2d");
      if (!iW) throw new Error("Couldn't draw the schematic from above.");
      const eF = iW.createImageData(dF, PF),
        EF = new Int32Array(dF * PF).fill(kW);
      for (const {
          chunkX: QF,
          chunkZ: rW,
          heights: gW,
          colours: tW
        }
        of FF) gW.forEach(((FF, WF) => {
        const AF = QF * aW + WF % aW,
          uF = rW * aW + Math.floor(WF / aW),
          hF = Math.floor((uF - CF) / bW) * dF + Math.floor((SF - AF) / bW);
        FF === kW || FF <= EF[hF] || (EF[hF] = FF, eF.data.set(tW.subarray(3 * WF, 3 * WF + 3), 4 * hF), eF.data[4 * hF + 3] = 255)
      }));
      return iW.putImageData(eF, 0, 0), {
        maxX: SF,
        minZ: CF,
        width: dF * bW,
        depth: PF * bW,
        canvas: RF
      }
    }

    function LF() {
      return new Promise((FF => {
        setTimeout(FF, 0)
      }))
    }
  },
  8331: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => AF,
      i: () => uF
    });
    var CF = SF(8286);
    const AF = "Air",
      uF = Object.freeze(new CF.d(AF, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  36132: (FF, WF, SF) => {
    var CF = SF(36141);

    function AF(FF) {
      for (var WF, SF, AF = 0, uF = FF.length, hF = 0; hF < FF.length;) {
        for (WF = FF[hF], SF = 0; hF < uF && FF[hF] === WF;) ++hF, ++SF;
        AF += CF.log2(SF) / 7 | 0, AF += CF.log2(WF >>> 0) / 7 | 0, AF += 2
      }
      return AF
    }
    WF.size = AF, WF.encode = function(FF, WF) {
      WF || (WF = new Uint8Array(AF(FF)));
      for (var SF, CF, uF = 0, hF = WF.length, bW = 0; bW < FF.length;) {
        for (SF = FF[bW], CF = 0; bW < FF.length && FF[bW] === SF;) ++bW, ++CF;
        for (; uF < hF && CF >= 128;) WF[uF++] = 128 + (127 & CF), CF >>>= 7;
        if (uF >= hF) throw new Error("RLE buffer overflow");
        for (WF[uF++] = CF, SF >>>= 0; uF < hF && SF >= 128;) WF[uF++] = 128 + (127 & SF), SF >>>= 7;
        if (uF >= hF) throw new Error("RLE buffer overflow");
        WF[uF++] = SF
      }
      return WF
    }, WF.decode = function(FF, WF) {
      for (var SF, CF, AF, uF, hF = WF.length, bW = FF.length, dF = 0, PF = 0; PF < bW;) {
        for (SF = 0, CF = 0; PF < bW && FF[PF] >= 128;) SF += (127 & FF[PF++]) << CF, CF += 7;
        if (SF += FF[PF++] << CF, PF >= bW) throw new Error("RLE buffer underrun");
        if (dF + SF > hF) throw new Error("Chunk buffer overflow");
        for (AF = 0, CF = 0; PF < bW && FF[PF] >= 128;) AF += (127 & FF[PF++]) << CF, CF += 7;
        if (PF >= bW) throw new Error("RLE buffer underrun");
        for (AF += FF[PF++] << CF, uF = 0; uF < SF; ++uF) WF[dF++] = AF
      }
      return WF
    }
  },
  36141: (FF, WF) => {
    function SF(FF) {
      var WF = 32;
      return (FF &= -FF) && WF--, 65535 & FF && (WF -= 16), 16711935 & FF && (WF -= 8), 252645135 & FF && (WF -= 4), 858993459 & FF && (WF -= 2), 1431655765 & FF && (WF -= 1), WF
    }
    WF.INT_BITS = 32, WF.INT_MAX = 2147483647, WF.INT_MIN = -1 << 31, WF.sign = function(FF) {
      return (FF > 0) - (FF < 0)
    }, WF.abs = function(FF) {
      var WF = FF >> 31;
      return (FF ^ WF) - WF
    }, WF.min = function(FF, WF) {
      return WF ^ (FF ^ WF) & -(FF < WF)
    }, WF.max = function(FF, WF) {
      return FF ^ (FF ^ WF) & -(FF < WF)
    }, WF.isPow2 = function(FF) {
      return !(FF & FF - 1) && !!FF
    }, WF.log2 = function(FF) {
      var WF, SF;
      return WF = (FF > 65535) << 4, WF |= SF = ((FF >>>= WF) > 255) << 3, WF |= SF = ((FF >>>= SF) > 15) << 2, (WF |= SF = ((FF >>>= SF) > 3) << 1) | (FF >>>= SF) >> 1
    }, WF.log10 = function(FF) {
      return FF >= 1e9 ? 9 : FF >= 1e8 ? 8 : FF >= 1e7 ? 7 : FF >= 1e6 ? 6 : FF >= 1e5 ? 5 : FF >= 1e4 ? 4 : FF >= 1e3 ? 3 : FF >= 100 ? 2 : FF >= 10 ? 1 : 0
    }, WF.popCount = function(FF) {
      return 16843009 * ((FF = (858993459 & (FF -= FF >>> 1 & 1431655765)) + (FF >>> 2 & 858993459)) + (FF >>> 4) & 252645135) >>> 24
    }, WF.countTrailingZeros = SF, WF.nextPow2 = function(FF) {
      return FF += 0 === FF, --FF, FF |= FF >>> 1, FF |= FF >>> 2, FF |= FF >>> 4, FF |= FF >>> 8, (FF |= FF >>> 16) + 1
    }, WF.prevPow2 = function(FF) {
      return FF |= FF >>> 1, FF |= FF >>> 2, FF |= FF >>> 4, FF |= FF >>> 8, (FF |= FF >>> 16) - (FF >>> 1)
    }, WF.parity = function(FF) {
      return FF ^= FF >>> 16, FF ^= FF >>> 8, FF ^= FF >>> 4, 27030 >>> (FF &= 15) & 1
    };
    var CF = new Array(256);
    ! function(FF) {
      for (var WF = 0; WF < 256; ++WF) {
        var SF = WF,
          CF = WF,
          AF = 7;
        for (SF >>>= 1; SF; SF >>>= 1) CF <<= 1, CF |= 1 & SF, --AF;
        FF[WF] = CF << AF & 255
      }
    }(CF), WF.reverse = function(FF) {
      return CF[255 & FF] << 24 | CF[FF >>> 8 & 255] << 16 | CF[FF >>> 16 & 255] << 8 | CF[FF >>> 24 & 255]
    }, WF.interleave2 = function(FF, WF) {
      return (FF = 1431655765 & ((FF = 858993459 & ((FF = 252645135 & ((FF = 16711935 & ((FF &= 65535) | FF << 8)) | FF << 4)) | FF << 2)) | FF << 1)) | (WF = 1431655765 & ((WF = 858993459 & ((WF = 252645135 & ((WF = 16711935 & ((WF &= 65535) | WF << 8)) | WF << 4)) | WF << 2)) | WF << 1)) << 1
    }, WF.deinterleave2 = function(FF, WF) {
      return (FF = 65535 & ((FF = 16711935 & ((FF = 252645135 & ((FF = 858993459 & ((FF = FF >>> WF & 1431655765) | FF >>> 1)) | FF >>> 2)) | FF >>> 4)) | FF >>> 16)) << 16 >> 16
    }, WF.interleave3 = function(FF, WF, SF) {
      return FF = 1227133513 & ((FF = 3272356035 & ((FF = 251719695 & ((FF = 4278190335 & ((FF &= 1023) | FF << 16)) | FF << 8)) | FF << 4)) | FF << 2), (FF |= (WF = 1227133513 & ((WF = 3272356035 & ((WF = 251719695 & ((WF = 4278190335 & ((WF &= 1023) | WF << 16)) | WF << 8)) | WF << 4)) | WF << 2)) << 1) | (SF = 1227133513 & ((SF = 3272356035 & ((SF = 251719695 & ((SF = 4278190335 & ((SF &= 1023) | SF << 16)) | SF << 8)) | SF << 4)) | SF << 2)) << 2
    }, WF.deinterleave3 = function(FF, WF) {
      return (FF = 1023 & ((FF = 4278190335 & ((FF = 251719695 & ((FF = 3272356035 & ((FF = FF >>> WF & 1227133513) | FF >>> 2)) | FF >>> 4)) | FF >>> 8)) | FF >>> 16)) << 22 >> 22
    }, WF.nextCombination = function(FF) {
      var WF = FF | FF - 1;
      return WF + 1 | (~WF & -~WF) - 1 >>> SF(FF) + 1
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);