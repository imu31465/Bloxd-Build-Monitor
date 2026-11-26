export const id = 205;
export const ids = [205];
export const modules = {
  38573: (HH, BH, LH) => {
    var AH = LH(38577);

    function rH(HH) {
      for (var BH, LH, rH = 0, SH = HH.length, hH = 0; hH < HH.length;) {
        for (BH = HH[hH], LH = 0; hH < SH && HH[hH] === BH;) ++hH, ++LH;
        rH += AH.log2(LH) / 7 | 0, rH += AH.log2(BH >>> 0) / 7 | 0, rH += 2
      }
      return rH
    }
    BH.size = rH, BH.encode = function(HH, BH) {
      BH || (BH = new Uint8Array(rH(HH)));
      for (var LH, AH, SH = 0, hH = BH.length, tH = 0; tH < HH.length;) {
        for (LH = HH[tH], AH = 0; tH < HH.length && HH[tH] === LH;) ++tH, ++AH;
        for (; SH < hH && AH >= 128;) BH[SH++] = 128 + (127 & AH), AH >>>= 7;
        if (SH >= hH) throw new Error("RLE buffer overflow");
        for (BH[SH++] = AH, LH >>>= 0; SH < hH && LH >= 128;) BH[SH++] = 128 + (127 & LH), LH >>>= 7;
        if (SH >= hH) throw new Error("RLE buffer overflow");
        BH[SH++] = LH
      }
      return BH
    }, BH.decode = function(HH, BH) {
      for (var LH, AH, rH, SH, hH = BH.length, tH = HH.length, zH = 0, CH = 0; CH < tH;) {
        for (LH = 0, AH = 0; CH < tH && HH[CH] >= 128;) LH += (127 & HH[CH++]) << AH, AH += 7;
        if (LH += HH[CH++] << AH, CH >= tH) throw new Error("RLE buffer underrun");
        if (zH + LH > hH) throw new Error("Chunk buffer overflow");
        for (rH = 0, AH = 0; CH < tH && HH[CH] >= 128;) rH += (127 & HH[CH++]) << AH, AH += 7;
        if (CH >= tH) throw new Error("RLE buffer underrun");
        for (rH += HH[CH++] << AH, SH = 0; SH < LH; ++SH) BH[zH++] = rH
      }
      return BH
    }
  },
  38577: (HH, BH) => {
    function LH(HH) {
      var BH = 32;
      return (HH &= -HH) && BH--, 65535 & HH && (BH -= 16), 16711935 & HH && (BH -= 8), 252645135 & HH && (BH -= 4), 858993459 & HH && (BH -= 2), 1431655765 & HH && (BH -= 1), BH
    }
    BH.INT_BITS = 32, BH.INT_MAX = 2147483647, BH.INT_MIN = -1 << 31, BH.sign = function(HH) {
      return (HH > 0) - (HH < 0)
    }, BH.abs = function(HH) {
      var BH = HH >> 31;
      return (HH ^ BH) - BH
    }, BH.min = function(HH, BH) {
      return BH ^ (HH ^ BH) & -(HH < BH)
    }, BH.max = function(HH, BH) {
      return HH ^ (HH ^ BH) & -(HH < BH)
    }, BH.isPow2 = function(HH) {
      return !(HH & HH - 1) && !!HH
    }, BH.log2 = function(HH) {
      var BH, LH;
      return BH = (HH > 65535) << 4, BH |= LH = ((HH >>>= BH) > 255) << 3, BH |= LH = ((HH >>>= LH) > 15) << 2, (BH |= LH = ((HH >>>= LH) > 3) << 1) | (HH >>>= LH) >> 1
    }, BH.log10 = function(HH) {
      return HH >= 1e9 ? 9 : HH >= 1e8 ? 8 : HH >= 1e7 ? 7 : HH >= 1e6 ? 6 : HH >= 1e5 ? 5 : HH >= 1e4 ? 4 : HH >= 1e3 ? 3 : HH >= 100 ? 2 : HH >= 10 ? 1 : 0
    }, BH.popCount = function(HH) {
      return 16843009 * ((HH = (858993459 & (HH -= HH >>> 1 & 1431655765)) + (HH >>> 2 & 858993459)) + (HH >>> 4) & 252645135) >>> 24
    }, BH.countTrailingZeros = LH, BH.nextPow2 = function(HH) {
      return HH += 0 === HH, --HH, HH |= HH >>> 1, HH |= HH >>> 2, HH |= HH >>> 4, HH |= HH >>> 8, (HH |= HH >>> 16) + 1
    }, BH.prevPow2 = function(HH) {
      return HH |= HH >>> 1, HH |= HH >>> 2, HH |= HH >>> 4, HH |= HH >>> 8, (HH |= HH >>> 16) - (HH >>> 1)
    }, BH.parity = function(HH) {
      return HH ^= HH >>> 16, HH ^= HH >>> 8, HH ^= HH >>> 4, 27030 >>> (HH &= 15) & 1
    };
    var AH = new Array(256);
    ! function(HH) {
      for (var BH = 0; BH < 256; ++BH) {
        var LH = BH,
          AH = BH,
          rH = 7;
        for (LH >>>= 1; LH; LH >>>= 1) AH <<= 1, AH |= 1 & LH, --rH;
        HH[BH] = AH << rH & 255
      }
    }(AH), BH.reverse = function(HH) {
      return AH[255 & HH] << 24 | AH[HH >>> 8 & 255] << 16 | AH[HH >>> 16 & 255] << 8 | AH[HH >>> 24 & 255]
    }, BH.interleave2 = function(HH, BH) {
      return (HH = 1431655765 & ((HH = 858993459 & ((HH = 252645135 & ((HH = 16711935 & ((HH &= 65535) | HH << 8)) | HH << 4)) | HH << 2)) | HH << 1)) | (BH = 1431655765 & ((BH = 858993459 & ((BH = 252645135 & ((BH = 16711935 & ((BH &= 65535) | BH << 8)) | BH << 4)) | BH << 2)) | BH << 1)) << 1
    }, BH.deinterleave2 = function(HH, BH) {
      return (HH = 65535 & ((HH = 16711935 & ((HH = 252645135 & ((HH = 858993459 & ((HH = HH >>> BH & 1431655765) | HH >>> 1)) | HH >>> 2)) | HH >>> 4)) | HH >>> 16)) << 16 >> 16
    }, BH.interleave3 = function(HH, BH, LH) {
      return HH = 1227133513 & ((HH = 3272356035 & ((HH = 251719695 & ((HH = 4278190335 & ((HH &= 1023) | HH << 16)) | HH << 8)) | HH << 4)) | HH << 2), (HH |= (BH = 1227133513 & ((BH = 3272356035 & ((BH = 251719695 & ((BH = 4278190335 & ((BH &= 1023) | BH << 16)) | BH << 8)) | BH << 4)) | BH << 2)) << 1) | (LH = 1227133513 & ((LH = 3272356035 & ((LH = 251719695 & ((LH = 4278190335 & ((LH &= 1023) | LH << 16)) | LH << 8)) | LH << 4)) | LH << 2)) << 2
    }, BH.deinterleave3 = function(HH, BH) {
      return (HH = 1023 & ((HH = 4278190335 & ((HH = 251719695 & ((HH = 3272356035 & ((HH = HH >>> BH & 1227133513) | HH >>> 2)) | HH >>> 4)) | HH >>> 8)) | HH >>> 16)) << 22 >> 22
    }, BH.nextCombination = function(HH) {
      var BH = HH | HH - 1;
      return BH + 1 | (~BH & -~BH) - 1 >>> LH(HH) + 1
    }
  },
  41088: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      emptyColumnHeight: () => vH,
      loadHeatmapSchematic: () => PH,
      readSchematicBlocks: () => TH
    });
    var AH = LH(4121),
      rH = LH.n(AH),
      SH = LH(4099),
      hH = LH(38573),
      tH = LH(176),
      zH = LH(9940),
      CH = LH(40433);
    const EH = [{
        name: "x",
        type: "int"
      }, {
        name: "y",
        type: "int"
      }, {
        name: "z",
        type: "int"
      }],
      XH = [{
        name: "name",
        type: "string"
      }, {
        name: "startOffset",
        type: {
          type: "record",
          fields: EH
        }
      }, {
        name: "dimensions",
        type: {
          type: "record",
          fields: EH
        }
      }, {
        name: "chunkData",
        type: {
          type: "array",
          items: {
            type: "record",
            fields: [...EH, {
              name: "rle",
              type: "bytes"
            }]
          }
        }
      }],
      GH = rH().Type.forSchema({
        type: "record",
        fields: XH
      }),
      YH = rH().Type.forSchema({
        type: "record",
        fields: [...XH, {
          name: "blockData",
          type: {
            type: "array",
            items: {
              type: "record",
              fields: [...EH, {
                name: "data",
                type: "bytes"
              }]
            }
          }
        }, {
          name: "pasteOffset",
          type: {
            type: "record",
            fields: EH
          }
        }]
      }),
      uH = 2,
      QH = 6,
      WH = 16,
      MH = 4096,
      xH = tH.g.xX,
      vH = -2147483648;
    async function PH(HH) {
      const BH = await (0, CH.c)(),
        LH = await TH(new Uint8Array(await HH.arrayBuffer()), (HH => BH.get(HH)));
      return {
        surface: LH.surface,
        topDown: VH(LH.columnTops)
      }
    }
    async function TH(HH, BH) {
      var LH;
      if (HH.byteLength < 4) throw new Error("The file is too short to be a schematic.");
      const AH = new DataView(HH.buffer, HH.byteOffset, HH.byteLength).getUint32(0, !0);
      if (AH > QH) throw new Error("The file isn't a schematic this version of Bloxd can read.");
      const rH = (AH >= uH ? YH : GH).decode(SH.rX.from(HH.subarray(4)), 0).value;
      if (!rH) throw new Error("The file isn't a schematic.");
      if (0 === rH.chunkData.length) throw new Error("The schematic has no blocks in it.");
      const tH = null !== (LH = rH.pasteOffset) && void 0 !== LH ? LH : {
          x: 0,
          y: 0,
          z: 0
        },
        zH = [tH.x, tH.y, tH.z].map((HH => Math.floor(HH / xH))),
        CH = rH.chunkData.map((HH => ({
          x: HH.x + zH[0],
          y: HH.y + zH[1],
          z: HH.z + zH[2],
          rle: HH.rle
        }))),
        EH = new Map;
      for (const [SH, GH] of CH.entries()) {
        const HH = new Uint16Array(xH ** 3);
        hH.decode(GH.rle, HH), EH.set(`${GH.x},${GH.y},${GH.z}`, HH), SH % WH === WH - 1 && await OH()
      }
      const XH = (HH, BH, LH) => HH * xH * xH + BH * xH + LH,
        MH = (HH, BH, LH) => {
          var AH, rH;
          const SH = Math.floor(HH / xH),
            hH = Math.floor(BH / xH),
            tH = Math.floor(LH / xH);
          return null !== (AH = null === (rH = EH.get(`${SH},${hH},${tH}`)) || void 0 === rH ? void 0 : rH[XH(HH - SH * xH, BH - hH * xH, LH - tH * xH)]) && void 0 !== AH ? AH : 0
        },
        PH = new Map,
        TH = [],
        VH = [];
      for (const [SH, hH] of CH.entries()) {
        const HH = EH.get(`${hH.x},${hH.y},${hH.z}`),
          LH = [hH.x * xH, hH.y * xH, hH.z * xH],
          AH = (BH, AH, rH) => BH < 0 || AH < 0 || rH < 0 || BH >= xH || AH >= xH || rH >= xH ? MH(LH[0] + BH, LH[1] + AH, LH[2] + rH) : HH[XH(BH, AH, rH)],
          rH = `${hH.x},${hH.z}`;
        let tH = PH.get(rH);
        void 0 === tH && (tH = {
          chunkX: hH.x,
          chunkZ: hH.z,
          heights: new Int32Array(xH * xH).fill(vH),
          colours: new Uint8Array(xH * xH * 3)
        }, PH.set(rH, tH));
        for (let SH = 0; SH < xH; SH++)
          for (let rH = 0; rH < xH; rH++)
            for (let hH = 0; hH < xH; hH++) {
              const zH = HH[XH(SH, rH, hH)];
              if (0 === zH) continue;
              const CH = LH[0] + SH,
                EH = LH[1] + rH,
                GH = LH[2] + hH,
                YH = BH(zH);
              if (null === YH) continue;
              const uH = hH * xH + SH;
              EH > tH.heights[uH] && (tH.heights[uH] = EH, tH.colours.set(YH, 3 * uH));
              !UH(zH) && (UH(AH(SH + 1, rH, hH)) || UH(AH(SH - 1, rH, hH)) || UH(AH(SH, rH + 1, hH)) || UH(AH(SH, rH - 1, hH)) || UH(AH(SH, rH, hH + 1)) || UH(AH(SH, rH, hH - 1))) && (TH.push(CH, EH, GH), VH.push(YH[0], YH[1], YH[2]))
            }
        SH % WH === WH - 1 && await OH()
      }
      if (0 === TH.length) throw new Error("The schematic has no blocks in it.");
      return {
        name: rH.name,
        surface: {
          positions: Int32Array.from(TH),
          colours: Uint8Array.from(VH),
          count: TH.length / 3
        },
        columnTops: [...PH.values()]
      }
    }

    function UH(HH) {
      if (0 === HH) return !0;
      const BH = zH.g[HH];
      return void 0 === BH || BH.UY || BH.transTex || !1 === BH.solid
    }

    function VH(HH) {
      let BH = 1 / 0,
        LH = -1 / 0,
        AH = 1 / 0,
        rH = -1 / 0;
      for (const {
          chunkX: uH,
          chunkZ: QH,
          heights: WH
        }
        of HH) WH.forEach(((HH, SH) => {
        if (HH === vH) return;
        const hH = uH * xH + SH % xH,
          tH = QH * xH + Math.floor(SH / xH);
        BH = Math.min(BH, hH), LH = Math.max(LH, hH), AH = Math.min(AH, tH), rH = Math.max(rH, tH)
      }));
      const SH = LH - BH + 1,
        hH = rH - AH + 1,
        tH = Math.max(1, Math.ceil(SH / MH), Math.ceil(hH / MH)),
        zH = Math.ceil(SH / tH),
        CH = Math.ceil(hH / tH),
        EH = document.createElement("canvas");
      EH.width = zH, EH.height = CH;
      const XH = EH.getContext("2d");
      if (!XH) throw new Error("Couldn't draw the schematic from above.");
      const GH = XH.createImageData(zH, CH),
        YH = new Int32Array(zH * CH).fill(vH);
      for (const {
          chunkX: uH,
          chunkZ: QH,
          heights: WH,
          colours: MH
        }
        of HH) WH.forEach(((HH, BH) => {
        const rH = uH * xH + BH % xH,
          SH = QH * xH + Math.floor(BH / xH),
          hH = Math.floor((SH - AH) / tH) * zH + Math.floor((LH - rH) / tH);
        HH === vH || HH <= YH[hH] || (YH[hH] = HH, GH.data.set(MH.subarray(3 * BH, 3 * BH + 3), 4 * hH), GH.data[4 * hH + 3] = 255)
      }));
      return XH.putImageData(GH, 0, 0), {
        maxX: LH,
        minZ: AH,
        width: zH * tH,
        depth: CH * tH,
        canvas: EH
      }
    }

    function OH() {
      return new Promise((HH => {
        setTimeout(HH, 0)
      }))
    }
  },
  40433: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => rH
    });
    var AH = LH(40437);
    async function rH() {
      const {
        averageColors: HH
      } = await LH.e(228).then((() => LH(35079)));
      return new AH.c(HH)
    }
  },
  40437: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => tH,
      f: () => hH
    });
    var AH = LH(9940);
    const rH = {
        Water: [63, 118, 228],
        Lava: [232, 110, 30]
      },
      SH = [150, 150, 150],
      hH = -2147483648;
    class tH {
      constructor(HH) {
        this.averages = HH, this.byId = new Map
      }
      get(HH) {
        var BH, LH, hH, tH, zH;
        const CH = this.byId.get(HH);
        if (void 0 !== CH) return CH;
        const EH = null !== (BH = null === (LH = AH.g[HH]) || void 0 === LH ? void 0 : LH.name) && void 0 !== BH ? BH : "",
          XH = EH.split("|")[0],
          GH = null !== (hH = this.averages[EH]) && void 0 !== hH ? hH : this.averages[XH],
          YH = null !== (tH = null !== (zH = null === GH || void 0 === GH ? void 0 : GH[0]) && void 0 !== zH ? zH : rH[XH]) && void 0 !== tH ? tH : 0 === (null === GH || void 0 === GH ? void 0 : GH.length) ? null : SH;
        return this.byId.set(HH, YH), YH
      }
      getDrawnIds() {
        const HH = new Uint8Array(65536);
        for (let BH = 1; BH < 65536; BH++) void 0 !== AH.g[BH] && null !== this.get(BH) && (HH[BH] = 1);
        return HH
      }
      drawPixel(HH, BH, LH, AH, rH, SH) {
        const tH = function(HH, BH, LH) {
            const AH = HH - BH + (HH - LH);
            return Math.max(.65, Math.min(1.2, .97 + .055 * AH))
          }(AH, rH === hH ? AH : rH, SH === hH ? AH : SH),
          zH = this.get(LH);
        HH[BH] = zH[0] * tH, HH[BH + 1] = zH[1] * tH, HH[BH + 2] = zH[2] * tH, HH[BH + 3] = 255
      }
    }
  },
  10030: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => rH,
      f: () => SH
    });
    var AH = LH(9979);
    const rH = "Air",
      SH = Object.freeze(new AH.f(rH, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);