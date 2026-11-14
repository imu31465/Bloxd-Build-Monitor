export const id = 176;
export const ids = [176];
export const modules = {
  37404: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      emptyColumnHeight: () => oW,
      loadHeatmapSchematic: () => lW,
      readSchematicBlocks: () => FW
    });
    var wW = MW(2828),
      CW = MW.n(wW),
      zR = MW(2846),
      AW = MW(35816),
      bR = MW(173),
      yR = MW(8180);
    const NW = [{
        name: "x",
        type: "int"
      }, {
        name: "y",
        type: "int"
      }, {
        name: "z",
        type: "int"
      }],
      eW = [{
        name: "name",
        type: "string"
      }, {
        name: "startOffset",
        type: {
          type: "record",
          fields: NW
        }
      }, {
        name: "dimensions",
        type: {
          type: "record",
          fields: NW
        }
      }, {
        name: "chunkData",
        type: {
          type: "array",
          items: {
            type: "record",
            fields: [...NW, {
              name: "rle",
              type: "bytes"
            }]
          }
        }
      }],
      BW = CW().Type.forSchema({
        type: "record",
        fields: eW
      }),
      tR = CW().Type.forSchema({
        type: "record",
        fields: [...eW, {
          name: "blockData",
          type: {
            type: "array",
            items: {
              type: "record",
              fields: [...NW, {
                name: "data",
                type: "bytes"
              }]
            }
          }
        }, {
          name: "pasteOffset",
          type: {
            type: "record",
            fields: NW
          }
        }]
      }),
      TW = 2,
      gR = 6,
      iR = {
        Water: [63, 118, 228],
        Lava: [232, 110, 30]
      },
      YW = [150, 150, 150],
      JW = 16,
      PW = 4096,
      IW = bR.c.dw,
      oW = -2147483648;
    async function lW(WW) {
      const RW = await FW(new Uint8Array(await WW.arrayBuffer()), await async function() {
        const {
          averageColors: WW
        } = await MW.e(182).then((() => MW(32670))), RW = new Map;
        return MW => {
          var wW, CW, zR, AW, bR;
          const NW = RW.get(MW);
          if (void 0 !== NW) return NW;
          const eW = null !== (wW = null === (CW = yR.g[MW]) || void 0 === CW ? void 0 : CW.name) && void 0 !== wW ? wW : "",
            BW = null !== (zR = WW[eW]) && void 0 !== zR ? zR : WW[eW.split("|")[0]],
            tR = iR[eW.split("|")[0]],
            TW = null !== (AW = null !== (bR = null === BW || void 0 === BW ? void 0 : BW[0]) && void 0 !== bR ? bR : tR) && void 0 !== AW ? AW : 0 === (null === BW || void 0 === BW ? void 0 : BW.length) ? null : YW;
          return RW.set(MW, TW), TW
        }
      }());
      return {
        surface: RW.surface,
        topDown: QW(RW.columnTops)
      }
    }
    async function FW(WW, RW) {
      var MW;
      if (WW.byteLength < 4) throw new Error("The file is too short to be a schematic.");
      const wW = new DataView(WW.buffer, WW.byteOffset, WW.byteLength).getUint32(0, !0);
      if (wW > gR) throw new Error("The file isn't a schematic this version of Bloxd can read.");
      const CW = (wW >= TW ? tR : BW).decode(zR.fw.from(WW.subarray(4)), 0).value;
      if (!CW) throw new Error("The file isn't a schematic.");
      if (0 === CW.chunkData.length) throw new Error("The schematic has no blocks in it.");
      const bR = null !== (MW = CW.pasteOffset) && void 0 !== MW ? MW : {
          x: 0,
          y: 0,
          z: 0
        },
        yR = [bR.x, bR.y, bR.z].map((WW => Math.floor(WW / IW))),
        NW = CW.chunkData.map((WW => ({
          x: WW.x + yR[0],
          y: WW.y + yR[1],
          z: WW.z + yR[2],
          rle: WW.rle
        }))),
        eW = new Map;
      for (const [zR, BW] of NW.entries()) {
        const WW = new Uint16Array(IW ** 3);
        AW.decode(BW.rle, WW), eW.set(`${BW.x},${BW.y},${BW.z}`, WW), zR % JW === JW - 1 && await rR()
      }
      const iR = (WW, RW, MW) => WW * IW * IW + RW * IW + MW,
        YW = (WW, RW, MW) => {
          var wW, CW;
          const zR = Math.floor(WW / IW),
            AW = Math.floor(RW / IW),
            bR = Math.floor(MW / IW);
          return null !== (wW = null === (CW = eW.get(`${zR},${AW},${bR}`)) || void 0 === CW ? void 0 : CW[iR(WW - zR * IW, RW - AW * IW, MW - bR * IW)]) && void 0 !== wW ? wW : 0
        },
        PW = new Map,
        lW = [],
        FW = [];
      for (const [zR, AW] of NW.entries()) {
        const WW = eW.get(`${AW.x},${AW.y},${AW.z}`),
          MW = [AW.x * IW, AW.y * IW, AW.z * IW],
          wW = (RW, wW, CW) => RW < 0 || wW < 0 || CW < 0 || RW >= IW || wW >= IW || CW >= IW ? YW(MW[0] + RW, MW[1] + wW, MW[2] + CW) : WW[iR(RW, wW, CW)],
          CW = `${AW.x},${AW.z}`;
        let bR = PW.get(CW);
        void 0 === bR && (bR = {
          chunkX: AW.x,
          chunkZ: AW.z,
          heights: new Int32Array(IW * IW).fill(oW),
          colours: new Uint8Array(IW * IW * 3)
        }, PW.set(CW, bR));
        for (let zR = 0; zR < IW; zR++)
          for (let CW = 0; CW < IW; CW++)
            for (let AW = 0; AW < IW; AW++) {
              const yR = WW[iR(zR, CW, AW)];
              if (0 === yR) continue;
              const NW = MW[0] + zR,
                eW = MW[1] + CW,
                BW = MW[2] + AW,
                tR = RW(yR);
              if (null === tR) continue;
              const TW = AW * IW + zR;
              eW > bR.heights[TW] && (bR.heights[TW] = eW, bR.colours.set(tR, 3 * TW));
              !fW(yR) && (fW(wW(zR + 1, CW, AW)) || fW(wW(zR - 1, CW, AW)) || fW(wW(zR, CW + 1, AW)) || fW(wW(zR, CW - 1, AW)) || fW(wW(zR, CW, AW + 1)) || fW(wW(zR, CW, AW - 1))) && (lW.push(NW, eW, BW), FW.push(tR[0], tR[1], tR[2]))
            }
        zR % JW === JW - 1 && await rR()
      }
      if (0 === lW.length) throw new Error("The schematic has no blocks in it.");
      return {
        name: CW.name,
        surface: {
          positions: Int32Array.from(lW),
          colours: Uint8Array.from(FW),
          count: lW.length / 3
        },
        columnTops: [...PW.values()]
      }
    }

    function fW(WW) {
      if (0 === WW) return !0;
      const RW = yR.g[WW];
      return void 0 === RW || RW.tw || RW.transTex || !1 === RW.solid
    }

    function QW(WW) {
      let RW = 1 / 0,
        MW = -1 / 0,
        wW = 1 / 0,
        CW = -1 / 0;
      for (const {
          chunkX: gR,
          chunkZ: iR,
          heights: YW
        }
        of WW) YW.forEach(((WW, zR) => {
        if (WW === oW) return;
        const AW = gR * IW + zR % IW,
          bR = iR * IW + Math.floor(zR / IW);
        RW = Math.min(RW, AW), MW = Math.max(MW, AW), wW = Math.min(wW, bR), CW = Math.max(CW, bR)
      }));
      const zR = MW - RW + 1,
        AW = CW - wW + 1,
        bR = Math.max(1, Math.ceil(zR / PW), Math.ceil(AW / PW)),
        yR = Math.ceil(zR / bR),
        NW = Math.ceil(AW / bR),
        eW = document.createElement("canvas");
      eW.width = yR, eW.height = NW;
      const BW = eW.getContext("2d");
      if (!BW) throw new Error("Couldn't draw the schematic from above.");
      const tR = BW.createImageData(yR, NW),
        TW = new Int32Array(yR * NW).fill(oW);
      for (const {
          chunkX: gR,
          chunkZ: iR,
          heights: YW,
          colours: JW
        }
        of WW) YW.forEach(((WW, RW) => {
        const CW = gR * IW + RW % IW,
          zR = iR * IW + Math.floor(RW / IW),
          AW = Math.floor((zR - wW) / bR) * yR + Math.floor((MW - CW) / bR);
        WW === oW || WW <= TW[AW] || (TW[AW] = WW, tR.data.set(JW.subarray(3 * RW, 3 * RW + 3), 4 * AW), tR.data[4 * AW + 3] = 255)
      }));
      return BW.putImageData(tR, 0, 0), {
        maxX: MW,
        minZ: wW,
        width: yR * bR,
        depth: NW * bR,
        canvas: eW
      }
    }

    function rR() {
      return new Promise((WW => {
        setTimeout(WW, 0)
      }))
    }
  },
  8262: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => CW,
      e: () => zR
    });
    var wW = MW(8220);
    const CW = "Air",
      zR = Object.freeze(new wW.e(CW, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  35816: (WW, RW, MW) => {
    var wW = MW(35824);

    function CW(WW) {
      for (var RW, MW, CW = 0, zR = WW.length, AW = 0; AW < WW.length;) {
        for (RW = WW[AW], MW = 0; AW < zR && WW[AW] === RW;) ++AW, ++MW;
        CW += wW.log2(MW) / 7 | 0, CW += wW.log2(RW >>> 0) / 7 | 0, CW += 2
      }
      return CW
    }
    RW.size = CW, RW.encode = function(WW, RW) {
      RW || (RW = new Uint8Array(CW(WW)));
      for (var MW, wW, zR = 0, AW = RW.length, bR = 0; bR < WW.length;) {
        for (MW = WW[bR], wW = 0; bR < WW.length && WW[bR] === MW;) ++bR, ++wW;
        for (; zR < AW && wW >= 128;) RW[zR++] = 128 + (127 & wW), wW >>>= 7;
        if (zR >= AW) throw new Error("RLE buffer overflow");
        for (RW[zR++] = wW, MW >>>= 0; zR < AW && MW >= 128;) RW[zR++] = 128 + (127 & MW), MW >>>= 7;
        if (zR >= AW) throw new Error("RLE buffer overflow");
        RW[zR++] = MW
      }
      return RW
    }, RW.decode = function(WW, RW) {
      for (var MW, wW, CW, zR, AW = RW.length, bR = WW.length, yR = 0, NW = 0; NW < bR;) {
        for (MW = 0, wW = 0; NW < bR && WW[NW] >= 128;) MW += (127 & WW[NW++]) << wW, wW += 7;
        if (MW += WW[NW++] << wW, NW >= bR) throw new Error("RLE buffer underrun");
        if (yR + MW > AW) throw new Error("Chunk buffer overflow");
        for (CW = 0, wW = 0; NW < bR && WW[NW] >= 128;) CW += (127 & WW[NW++]) << wW, wW += 7;
        if (NW >= bR) throw new Error("RLE buffer underrun");
        for (CW += WW[NW++] << wW, zR = 0; zR < MW; ++zR) RW[yR++] = CW
      }
      return RW
    }
  },
  35824: (WW, RW) => {
    function MW(WW) {
      var RW = 32;
      return (WW &= -WW) && RW--, 65535 & WW && (RW -= 16), 16711935 & WW && (RW -= 8), 252645135 & WW && (RW -= 4), 858993459 & WW && (RW -= 2), 1431655765 & WW && (RW -= 1), RW
    }
    RW.INT_BITS = 32, RW.INT_MAX = 2147483647, RW.INT_MIN = -1 << 31, RW.sign = function(WW) {
      return (WW > 0) - (WW < 0)
    }, RW.abs = function(WW) {
      var RW = WW >> 31;
      return (WW ^ RW) - RW
    }, RW.min = function(WW, RW) {
      return RW ^ (WW ^ RW) & -(WW < RW)
    }, RW.max = function(WW, RW) {
      return WW ^ (WW ^ RW) & -(WW < RW)
    }, RW.isPow2 = function(WW) {
      return !(WW & WW - 1) && !!WW
    }, RW.log2 = function(WW) {
      var RW, MW;
      return RW = (WW > 65535) << 4, RW |= MW = ((WW >>>= RW) > 255) << 3, RW |= MW = ((WW >>>= MW) > 15) << 2, (RW |= MW = ((WW >>>= MW) > 3) << 1) | (WW >>>= MW) >> 1
    }, RW.log10 = function(WW) {
      return WW >= 1e9 ? 9 : WW >= 1e8 ? 8 : WW >= 1e7 ? 7 : WW >= 1e6 ? 6 : WW >= 1e5 ? 5 : WW >= 1e4 ? 4 : WW >= 1e3 ? 3 : WW >= 100 ? 2 : WW >= 10 ? 1 : 0
    }, RW.popCount = function(WW) {
      return 16843009 * ((WW = (858993459 & (WW -= WW >>> 1 & 1431655765)) + (WW >>> 2 & 858993459)) + (WW >>> 4) & 252645135) >>> 24
    }, RW.countTrailingZeros = MW, RW.nextPow2 = function(WW) {
      return WW += 0 === WW, --WW, WW |= WW >>> 1, WW |= WW >>> 2, WW |= WW >>> 4, WW |= WW >>> 8, (WW |= WW >>> 16) + 1
    }, RW.prevPow2 = function(WW) {
      return WW |= WW >>> 1, WW |= WW >>> 2, WW |= WW >>> 4, WW |= WW >>> 8, (WW |= WW >>> 16) - (WW >>> 1)
    }, RW.parity = function(WW) {
      return WW ^= WW >>> 16, WW ^= WW >>> 8, WW ^= WW >>> 4, 27030 >>> (WW &= 15) & 1
    };
    var wW = new Array(256);
    ! function(WW) {
      for (var RW = 0; RW < 256; ++RW) {
        var MW = RW,
          wW = RW,
          CW = 7;
        for (MW >>>= 1; MW; MW >>>= 1) wW <<= 1, wW |= 1 & MW, --CW;
        WW[RW] = wW << CW & 255
      }
    }(wW), RW.reverse = function(WW) {
      return wW[255 & WW] << 24 | wW[WW >>> 8 & 255] << 16 | wW[WW >>> 16 & 255] << 8 | wW[WW >>> 24 & 255]
    }, RW.interleave2 = function(WW, RW) {
      return (WW = 1431655765 & ((WW = 858993459 & ((WW = 252645135 & ((WW = 16711935 & ((WW &= 65535) | WW << 8)) | WW << 4)) | WW << 2)) | WW << 1)) | (RW = 1431655765 & ((RW = 858993459 & ((RW = 252645135 & ((RW = 16711935 & ((RW &= 65535) | RW << 8)) | RW << 4)) | RW << 2)) | RW << 1)) << 1
    }, RW.deinterleave2 = function(WW, RW) {
      return (WW = 65535 & ((WW = 16711935 & ((WW = 252645135 & ((WW = 858993459 & ((WW = WW >>> RW & 1431655765) | WW >>> 1)) | WW >>> 2)) | WW >>> 4)) | WW >>> 16)) << 16 >> 16
    }, RW.interleave3 = function(WW, RW, MW) {
      return WW = 1227133513 & ((WW = 3272356035 & ((WW = 251719695 & ((WW = 4278190335 & ((WW &= 1023) | WW << 16)) | WW << 8)) | WW << 4)) | WW << 2), (WW |= (RW = 1227133513 & ((RW = 3272356035 & ((RW = 251719695 & ((RW = 4278190335 & ((RW &= 1023) | RW << 16)) | RW << 8)) | RW << 4)) | RW << 2)) << 1) | (MW = 1227133513 & ((MW = 3272356035 & ((MW = 251719695 & ((MW = 4278190335 & ((MW &= 1023) | MW << 16)) | MW << 8)) | MW << 4)) | MW << 2)) << 2
    }, RW.deinterleave3 = function(WW, RW) {
      return (WW = 1023 & ((WW = 4278190335 & ((WW = 251719695 & ((WW = 3272356035 & ((WW = WW >>> RW & 1227133513) | WW >>> 2)) | WW >>> 4)) | WW >>> 8)) | WW >>> 16)) << 22 >> 22
    }, RW.nextCombination = function(WW) {
      var RW = WW | WW - 1;
      return RW + 1 | (~RW & -~RW) - 1 >>> MW(WW) + 1
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);