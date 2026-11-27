export const id = 270;
export const ids = [270];
export const modules = {
  38900: (WW, iW, OW) => {
    var mW = OW(38905);

    function EW(WW) {
      for (var iW, OW, EW = 0, NW = WW.length, PW = 0; PW < WW.length;) {
        for (iW = WW[PW], OW = 0; PW < NW && WW[PW] === iW;) ++PW, ++OW;
        EW += mW.log2(OW) / 7 | 0, EW += mW.log2(iW >>> 0) / 7 | 0, EW += 2
      }
      return EW
    }
    iW.size = EW, iW.encode = function(WW, iW) {
      iW || (iW = new Uint8Array(EW(WW)));
      for (var OW, mW, NW = 0, PW = iW.length, LW = 0; LW < WW.length;) {
        for (OW = WW[LW], mW = 0; LW < WW.length && WW[LW] === OW;) ++LW, ++mW;
        for (; NW < PW && mW >= 128;) iW[NW++] = 128 + (127 & mW), mW >>>= 7;
        if (NW >= PW) throw new Error("RLE buffer overflow");
        for (iW[NW++] = mW, OW >>>= 0; NW < PW && OW >= 128;) iW[NW++] = 128 + (127 & OW), OW >>>= 7;
        if (NW >= PW) throw new Error("RLE buffer overflow");
        iW[NW++] = OW
      }
      return iW
    }, iW.decode = function(WW, iW) {
      for (var OW, mW, EW, NW, PW = iW.length, LW = WW.length, cW = 0, wW = 0; wW < LW;) {
        for (OW = 0, mW = 0; wW < LW && WW[wW] >= 128;) OW += (127 & WW[wW++]) << mW, mW += 7;
        if (OW += WW[wW++] << mW, wW >= LW) throw new Error("RLE buffer underrun");
        if (cW + OW > PW) throw new Error("Chunk buffer overflow");
        for (EW = 0, mW = 0; wW < LW && WW[wW] >= 128;) EW += (127 & WW[wW++]) << mW, mW += 7;
        if (wW >= LW) throw new Error("RLE buffer underrun");
        for (EW += WW[wW++] << mW, NW = 0; NW < OW; ++NW) iW[cW++] = EW
      }
      return iW
    }
  },
  38905: (WW, iW) => {
    function OW(WW) {
      var iW = 32;
      return (WW &= -WW) && iW--, 65535 & WW && (iW -= 16), 16711935 & WW && (iW -= 8), 252645135 & WW && (iW -= 4), 858993459 & WW && (iW -= 2), 1431655765 & WW && (iW -= 1), iW
    }
    iW.INT_BITS = 32, iW.INT_MAX = 2147483647, iW.INT_MIN = -1 << 31, iW.sign = function(WW) {
      return (WW > 0) - (WW < 0)
    }, iW.abs = function(WW) {
      var iW = WW >> 31;
      return (WW ^ iW) - iW
    }, iW.min = function(WW, iW) {
      return iW ^ (WW ^ iW) & -(WW < iW)
    }, iW.max = function(WW, iW) {
      return WW ^ (WW ^ iW) & -(WW < iW)
    }, iW.isPow2 = function(WW) {
      return !(WW & WW - 1) && !!WW
    }, iW.log2 = function(WW) {
      var iW, OW;
      return iW = (WW > 65535) << 4, iW |= OW = ((WW >>>= iW) > 255) << 3, iW |= OW = ((WW >>>= OW) > 15) << 2, (iW |= OW = ((WW >>>= OW) > 3) << 1) | (WW >>>= OW) >> 1
    }, iW.log10 = function(WW) {
      return WW >= 1e9 ? 9 : WW >= 1e8 ? 8 : WW >= 1e7 ? 7 : WW >= 1e6 ? 6 : WW >= 1e5 ? 5 : WW >= 1e4 ? 4 : WW >= 1e3 ? 3 : WW >= 100 ? 2 : WW >= 10 ? 1 : 0
    }, iW.popCount = function(WW) {
      return 16843009 * ((WW = (858993459 & (WW -= WW >>> 1 & 1431655765)) + (WW >>> 2 & 858993459)) + (WW >>> 4) & 252645135) >>> 24
    }, iW.countTrailingZeros = OW, iW.nextPow2 = function(WW) {
      return WW += 0 === WW, --WW, WW |= WW >>> 1, WW |= WW >>> 2, WW |= WW >>> 4, WW |= WW >>> 8, (WW |= WW >>> 16) + 1
    }, iW.prevPow2 = function(WW) {
      return WW |= WW >>> 1, WW |= WW >>> 2, WW |= WW >>> 4, WW |= WW >>> 8, (WW |= WW >>> 16) - (WW >>> 1)
    }, iW.parity = function(WW) {
      return WW ^= WW >>> 16, WW ^= WW >>> 8, WW ^= WW >>> 4, 27030 >>> (WW &= 15) & 1
    };
    var mW = new Array(256);
    ! function(WW) {
      for (var iW = 0; iW < 256; ++iW) {
        var OW = iW,
          mW = iW,
          EW = 7;
        for (OW >>>= 1; OW; OW >>>= 1) mW <<= 1, mW |= 1 & OW, --EW;
        WW[iW] = mW << EW & 255
      }
    }(mW), iW.reverse = function(WW) {
      return mW[255 & WW] << 24 | mW[WW >>> 8 & 255] << 16 | mW[WW >>> 16 & 255] << 8 | mW[WW >>> 24 & 255]
    }, iW.interleave2 = function(WW, iW) {
      return (WW = 1431655765 & ((WW = 858993459 & ((WW = 252645135 & ((WW = 16711935 & ((WW &= 65535) | WW << 8)) | WW << 4)) | WW << 2)) | WW << 1)) | (iW = 1431655765 & ((iW = 858993459 & ((iW = 252645135 & ((iW = 16711935 & ((iW &= 65535) | iW << 8)) | iW << 4)) | iW << 2)) | iW << 1)) << 1
    }, iW.deinterleave2 = function(WW, iW) {
      return (WW = 65535 & ((WW = 16711935 & ((WW = 252645135 & ((WW = 858993459 & ((WW = WW >>> iW & 1431655765) | WW >>> 1)) | WW >>> 2)) | WW >>> 4)) | WW >>> 16)) << 16 >> 16
    }, iW.interleave3 = function(WW, iW, OW) {
      return WW = 1227133513 & ((WW = 3272356035 & ((WW = 251719695 & ((WW = 4278190335 & ((WW &= 1023) | WW << 16)) | WW << 8)) | WW << 4)) | WW << 2), (WW |= (iW = 1227133513 & ((iW = 3272356035 & ((iW = 251719695 & ((iW = 4278190335 & ((iW &= 1023) | iW << 16)) | iW << 8)) | iW << 4)) | iW << 2)) << 1) | (OW = 1227133513 & ((OW = 3272356035 & ((OW = 251719695 & ((OW = 4278190335 & ((OW &= 1023) | OW << 16)) | OW << 8)) | OW << 4)) | OW << 2)) << 2
    }, iW.deinterleave3 = function(WW, iW) {
      return (WW = 1023 & ((WW = 4278190335 & ((WW = 251719695 & ((WW = 3272356035 & ((WW = WW >>> iW & 1227133513) | WW >>> 2)) | WW >>> 4)) | WW >>> 8)) | WW >>> 16)) << 22 >> 22
    }, iW.nextCombination = function(WW) {
      var iW = WW | WW - 1;
      return iW + 1 | (~iW & -~iW) - 1 >>> OW(WW) + 1
    }
  },
  41343: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      emptyColumnHeight: () => sW,
      loadHeatmapSchematic: () => MW,
      readSchematicBlocks: () => KW
    });
    var mW = OW(2484),
      EW = OW.n(mW),
      NW = OW(2437),
      PW = OW(38900),
      LW = OW(182),
      cW = OW(5725),
      wW = OW(40748);
    const tW = [{
        name: "x",
        type: "int"
      }, {
        name: "y",
        type: "int"
      }, {
        name: "z",
        type: "int"
      }],
      ZW = [{
        name: "name",
        type: "string"
      }, {
        name: "startOffset",
        type: {
          type: "record",
          fields: tW
        }
      }, {
        name: "dimensions",
        type: {
          type: "record",
          fields: tW
        }
      }, {
        name: "chunkData",
        type: {
          type: "array",
          items: {
            type: "record",
            fields: [...tW, {
              name: "rle",
              type: "bytes"
            }]
          }
        }
      }],
      xW = EW().Type.forSchema({
        type: "record",
        fields: ZW
      }),
      lW = EW().Type.forSchema({
        type: "record",
        fields: [...ZW, {
          name: "blockData",
          type: {
            type: "array",
            items: {
              type: "record",
              fields: [...tW, {
                name: "data",
                type: "bytes"
              }]
            }
          }
        }, {
          name: "pasteOffset",
          type: {
            type: "record",
            fields: tW
          }
        }]
      }),
      AW = 2,
      bW = 6,
      jW = 16,
      UW = 4096,
      kW = LW.f.jZ,
      sW = -2147483648;
    async function MW(WW) {
      const iW = await (0, wW.e)(),
        OW = await KW(new Uint8Array(await WW.arrayBuffer()), (WW => iW.get(WW)));
      return {
        surface: OW.surface,
        topDown: YW(OW.columnTops)
      }
    }
    async function KW(WW, iW) {
      var OW;
      if (WW.byteLength < 4) throw new Error("The file is too short to be a schematic.");
      const mW = new DataView(WW.buffer, WW.byteOffset, WW.byteLength).getUint32(0, !0);
      if (mW > bW) throw new Error("The file isn't a schematic this version of Bloxd can read.");
      const EW = (mW >= AW ? lW : xW).decode(NW.OZ.from(WW.subarray(4)), 0).value;
      if (!EW) throw new Error("The file isn't a schematic.");
      if (0 === EW.chunkData.length) throw new Error("The schematic has no blocks in it.");
      const LW = null !== (OW = EW.pasteOffset) && void 0 !== OW ? OW : {
          x: 0,
          y: 0,
          z: 0
        },
        cW = [LW.x, LW.y, LW.z].map((WW => Math.floor(WW / kW))),
        wW = EW.chunkData.map((WW => ({
          x: WW.x + cW[0],
          y: WW.y + cW[1],
          z: WW.z + cW[2],
          rle: WW.rle
        }))),
        tW = new Map;
      for (const [NW, xW] of wW.entries()) {
        const WW = new Uint16Array(kW ** 3);
        PW.decode(xW.rle, WW), tW.set(`${xW.x},${xW.y},${xW.z}`, WW), NW % jW === jW - 1 && await yW()
      }
      const ZW = (WW, iW, OW) => WW * kW * kW + iW * kW + OW,
        UW = (WW, iW, OW) => {
          var mW, EW;
          const NW = Math.floor(WW / kW),
            PW = Math.floor(iW / kW),
            LW = Math.floor(OW / kW);
          return null !== (mW = null === (EW = tW.get(`${NW},${PW},${LW}`)) || void 0 === EW ? void 0 : EW[ZW(WW - NW * kW, iW - PW * kW, OW - LW * kW)]) && void 0 !== mW ? mW : 0
        },
        MW = new Map,
        KW = [],
        YW = [];
      for (const [NW, PW] of wW.entries()) {
        const WW = tW.get(`${PW.x},${PW.y},${PW.z}`),
          OW = [PW.x * kW, PW.y * kW, PW.z * kW],
          mW = (iW, mW, EW) => iW < 0 || mW < 0 || EW < 0 || iW >= kW || mW >= kW || EW >= kW ? UW(OW[0] + iW, OW[1] + mW, OW[2] + EW) : WW[ZW(iW, mW, EW)],
          EW = `${PW.x},${PW.z}`;
        let LW = MW.get(EW);
        void 0 === LW && (LW = {
          chunkX: PW.x,
          chunkZ: PW.z,
          heights: new Int32Array(kW * kW).fill(sW),
          colours: new Uint8Array(kW * kW * 3)
        }, MW.set(EW, LW));
        for (let NW = 0; NW < kW; NW++)
          for (let EW = 0; EW < kW; EW++)
            for (let PW = 0; PW < kW; PW++) {
              const cW = WW[ZW(NW, EW, PW)];
              if (0 === cW) continue;
              const wW = OW[0] + NW,
                tW = OW[1] + EW,
                xW = OW[2] + PW,
                lW = iW(cW);
              if (null === lW) continue;
              const AW = PW * kW + NW;
              tW > LW.heights[AW] && (LW.heights[AW] = tW, LW.colours.set(lW, 3 * AW));
              !SW(cW) && (SW(mW(NW + 1, EW, PW)) || SW(mW(NW - 1, EW, PW)) || SW(mW(NW, EW + 1, PW)) || SW(mW(NW, EW - 1, PW)) || SW(mW(NW, EW, PW + 1)) || SW(mW(NW, EW, PW - 1))) && (KW.push(wW, tW, xW), YW.push(lW[0], lW[1], lW[2]))
            }
        NW % jW === jW - 1 && await yW()
      }
      if (0 === KW.length) throw new Error("The schematic has no blocks in it.");
      return {
        name: EW.name,
        surface: {
          positions: Int32Array.from(KW),
          colours: Uint8Array.from(YW),
          count: KW.length / 3
        },
        columnTops: [...MW.values()]
      }
    }

    function SW(WW) {
      if (0 === WW) return !0;
      const iW = cW.j[WW];
      return void 0 === iW || iW.dl || iW.transTex || !1 === iW.solid
    }

    function YW(WW) {
      let iW = 1 / 0,
        OW = -1 / 0,
        mW = 1 / 0,
        EW = -1 / 0;
      for (const {
          chunkX: AW,
          chunkZ: bW,
          heights: jW
        }
        of WW) jW.forEach(((WW, NW) => {
        if (WW === sW) return;
        const PW = AW * kW + NW % kW,
          LW = bW * kW + Math.floor(NW / kW);
        iW = Math.min(iW, PW), OW = Math.max(OW, PW), mW = Math.min(mW, LW), EW = Math.max(EW, LW)
      }));
      const NW = OW - iW + 1,
        PW = EW - mW + 1,
        LW = Math.max(1, Math.ceil(NW / UW), Math.ceil(PW / UW)),
        cW = Math.ceil(NW / LW),
        wW = Math.ceil(PW / LW),
        tW = document.createElement("canvas");
      tW.width = cW, tW.height = wW;
      const ZW = tW.getContext("2d");
      if (!ZW) throw new Error("Couldn't draw the schematic from above.");
      const xW = ZW.createImageData(cW, wW),
        lW = new Int32Array(cW * wW).fill(sW);
      for (const {
          chunkX: AW,
          chunkZ: bW,
          heights: jW,
          colours: UW
        }
        of WW) jW.forEach(((WW, iW) => {
        const EW = AW * kW + iW % kW,
          NW = bW * kW + Math.floor(iW / kW),
          PW = Math.floor((NW - mW) / LW) * cW + Math.floor((OW - EW) / LW);
        WW === sW || WW <= lW[PW] || (lW[PW] = WW, xW.data.set(UW.subarray(3 * iW, 3 * iW + 3), 4 * PW), xW.data[4 * PW + 3] = 255)
      }));
      return ZW.putImageData(xW, 0, 0), {
        maxX: OW,
        minZ: mW,
        width: cW * LW,
        depth: wW * LW,
        canvas: tW
      }
    }

    function yW() {
      return new Promise((WW => {
        setTimeout(WW, 0)
      }))
    }
  },
  40748: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => EW
    });
    var mW = OW(40751);
    async function EW() {
      const {
        averageColors: WW
      } = await OW.e(234).then((() => OW(35332)));
      return new mW.d(WW)
    }
  },
  40751: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => LW,
      e: () => PW
    });
    var mW = OW(5725);
    const EW = {
        Water: [63, 118, 228],
        Lava: [232, 110, 30]
      },
      NW = [150, 150, 150],
      PW = -2147483648;
    class LW {
      constructor(WW) {
        this.averages = WW, this.byId = new Map
      }
      get(WW) {
        var iW, OW, PW, LW, cW;
        const wW = this.byId.get(WW);
        if (void 0 !== wW) return wW;
        const tW = null !== (iW = null === (OW = mW.j[WW]) || void 0 === OW ? void 0 : OW.name) && void 0 !== iW ? iW : "",
          ZW = tW.split("|")[0],
          xW = null !== (PW = this.averages[tW]) && void 0 !== PW ? PW : this.averages[ZW],
          lW = null !== (LW = null !== (cW = null === xW || void 0 === xW ? void 0 : xW[0]) && void 0 !== cW ? cW : EW[ZW]) && void 0 !== LW ? LW : 0 === (null === xW || void 0 === xW ? void 0 : xW.length) ? null : NW;
        return this.byId.set(WW, lW), lW
      }
      getDrawnIds() {
        const WW = new Uint8Array(65536);
        for (let iW = 1; iW < 65536; iW++) void 0 !== mW.j[iW] && null !== this.get(iW) && (WW[iW] = 1);
        return WW
      }
      drawPixel(WW, iW, OW, mW, EW, NW) {
        const LW = function(WW, iW, OW) {
            const mW = WW - iW + (WW - OW);
            return Math.max(.65, Math.min(1.2, .97 + .055 * mW))
          }(mW, EW === PW ? mW : EW, NW === PW ? mW : NW),
          cW = this.get(OW);
        WW[iW] = cW[0] * LW, WW[iW + 1] = cW[1] * LW, WW[iW + 2] = cW[2] * LW, WW[iW + 3] = 255
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);