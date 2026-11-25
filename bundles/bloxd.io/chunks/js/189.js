export const id = 189;
export const ids = [189];
export const modules = {
  38135: (GG, bG, ZG) => {
    var wG = ZG(38141);

    function SG(GG) {
      for (var bG, ZG, SG = 0, LG = GG.length, yG = 0; yG < GG.length;) {
        for (bG = GG[yG], ZG = 0; yG < LG && GG[yG] === bG;) ++yG, ++ZG;
        SG += wG.log2(ZG) / 7 | 0, SG += wG.log2(bG >>> 0) / 7 | 0, SG += 2
      }
      return SG
    }
    bG.size = SG, bG.encode = function(GG, bG) {
      bG || (bG = new Uint8Array(SG(GG)));
      for (var ZG, wG, LG = 0, yG = bG.length, kG = 0; kG < GG.length;) {
        for (ZG = GG[kG], wG = 0; kG < GG.length && GG[kG] === ZG;) ++kG, ++wG;
        for (; LG < yG && wG >= 128;) bG[LG++] = 128 + (127 & wG), wG >>>= 7;
        if (LG >= yG) throw new Error("RLE buffer overflow");
        for (bG[LG++] = wG, ZG >>>= 0; LG < yG && ZG >= 128;) bG[LG++] = 128 + (127 & ZG), ZG >>>= 7;
        if (LG >= yG) throw new Error("RLE buffer overflow");
        bG[LG++] = ZG
      }
      return bG
    }, bG.decode = function(GG, bG) {
      for (var ZG, wG, SG, LG, yG = bG.length, kG = GG.length, UG = 0, YG = 0; YG < kG;) {
        for (ZG = 0, wG = 0; YG < kG && GG[YG] >= 128;) ZG += (127 & GG[YG++]) << wG, wG += 7;
        if (ZG += GG[YG++] << wG, YG >= kG) throw new Error("RLE buffer underrun");
        if (UG + ZG > yG) throw new Error("Chunk buffer overflow");
        for (SG = 0, wG = 0; YG < kG && GG[YG] >= 128;) SG += (127 & GG[YG++]) << wG, wG += 7;
        if (YG >= kG) throw new Error("RLE buffer underrun");
        for (SG += GG[YG++] << wG, LG = 0; LG < ZG; ++LG) bG[UG++] = SG
      }
      return bG
    }
  },
  38141: (GG, bG) => {
    function ZG(GG) {
      var bG = 32;
      return (GG &= -GG) && bG--, 65535 & GG && (bG -= 16), 16711935 & GG && (bG -= 8), 252645135 & GG && (bG -= 4), 858993459 & GG && (bG -= 2), 1431655765 & GG && (bG -= 1), bG
    }
    bG.INT_BITS = 32, bG.INT_MAX = 2147483647, bG.INT_MIN = -1 << 31, bG.sign = function(GG) {
      return (GG > 0) - (GG < 0)
    }, bG.abs = function(GG) {
      var bG = GG >> 31;
      return (GG ^ bG) - bG
    }, bG.min = function(GG, bG) {
      return bG ^ (GG ^ bG) & -(GG < bG)
    }, bG.max = function(GG, bG) {
      return GG ^ (GG ^ bG) & -(GG < bG)
    }, bG.isPow2 = function(GG) {
      return !(GG & GG - 1) && !!GG
    }, bG.log2 = function(GG) {
      var bG, ZG;
      return bG = (GG > 65535) << 4, bG |= ZG = ((GG >>>= bG) > 255) << 3, bG |= ZG = ((GG >>>= ZG) > 15) << 2, (bG |= ZG = ((GG >>>= ZG) > 3) << 1) | (GG >>>= ZG) >> 1
    }, bG.log10 = function(GG) {
      return GG >= 1e9 ? 9 : GG >= 1e8 ? 8 : GG >= 1e7 ? 7 : GG >= 1e6 ? 6 : GG >= 1e5 ? 5 : GG >= 1e4 ? 4 : GG >= 1e3 ? 3 : GG >= 100 ? 2 : GG >= 10 ? 1 : 0
    }, bG.popCount = function(GG) {
      return 16843009 * ((GG = (858993459 & (GG -= GG >>> 1 & 1431655765)) + (GG >>> 2 & 858993459)) + (GG >>> 4) & 252645135) >>> 24
    }, bG.countTrailingZeros = ZG, bG.nextPow2 = function(GG) {
      return GG += 0 === GG, --GG, GG |= GG >>> 1, GG |= GG >>> 2, GG |= GG >>> 4, GG |= GG >>> 8, (GG |= GG >>> 16) + 1
    }, bG.prevPow2 = function(GG) {
      return GG |= GG >>> 1, GG |= GG >>> 2, GG |= GG >>> 4, GG |= GG >>> 8, (GG |= GG >>> 16) - (GG >>> 1)
    }, bG.parity = function(GG) {
      return GG ^= GG >>> 16, GG ^= GG >>> 8, GG ^= GG >>> 4, 27030 >>> (GG &= 15) & 1
    };
    var wG = new Array(256);
    ! function(GG) {
      for (var bG = 0; bG < 256; ++bG) {
        var ZG = bG,
          wG = bG,
          SG = 7;
        for (ZG >>>= 1; ZG; ZG >>>= 1) wG <<= 1, wG |= 1 & ZG, --SG;
        GG[bG] = wG << SG & 255
      }
    }(wG), bG.reverse = function(GG) {
      return wG[255 & GG] << 24 | wG[GG >>> 8 & 255] << 16 | wG[GG >>> 16 & 255] << 8 | wG[GG >>> 24 & 255]
    }, bG.interleave2 = function(GG, bG) {
      return (GG = 1431655765 & ((GG = 858993459 & ((GG = 252645135 & ((GG = 16711935 & ((GG &= 65535) | GG << 8)) | GG << 4)) | GG << 2)) | GG << 1)) | (bG = 1431655765 & ((bG = 858993459 & ((bG = 252645135 & ((bG = 16711935 & ((bG &= 65535) | bG << 8)) | bG << 4)) | bG << 2)) | bG << 1)) << 1
    }, bG.deinterleave2 = function(GG, bG) {
      return (GG = 65535 & ((GG = 16711935 & ((GG = 252645135 & ((GG = 858993459 & ((GG = GG >>> bG & 1431655765) | GG >>> 1)) | GG >>> 2)) | GG >>> 4)) | GG >>> 16)) << 16 >> 16
    }, bG.interleave3 = function(GG, bG, ZG) {
      return GG = 1227133513 & ((GG = 3272356035 & ((GG = 251719695 & ((GG = 4278190335 & ((GG &= 1023) | GG << 16)) | GG << 8)) | GG << 4)) | GG << 2), (GG |= (bG = 1227133513 & ((bG = 3272356035 & ((bG = 251719695 & ((bG = 4278190335 & ((bG &= 1023) | bG << 16)) | bG << 8)) | bG << 4)) | bG << 2)) << 1) | (ZG = 1227133513 & ((ZG = 3272356035 & ((ZG = 251719695 & ((ZG = 4278190335 & ((ZG &= 1023) | ZG << 16)) | ZG << 8)) | ZG << 4)) | ZG << 2)) << 2
    }, bG.deinterleave3 = function(GG, bG) {
      return (GG = 1023 & ((GG = 4278190335 & ((GG = 251719695 & ((GG = 3272356035 & ((GG = GG >>> bG & 1227133513) | GG >>> 2)) | GG >>> 4)) | GG >>> 8)) | GG >>> 16)) << 22 >> 22
    }, bG.nextCombination = function(GG) {
      var bG = GG | GG - 1;
      return bG + 1 | (~bG & -~bG) - 1 >>> ZG(GG) + 1
    }
  },
  40191: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      emptyColumnHeight: () => EG,
      loadHeatmapSchematic: () => oG,
      readSchematicBlocks: () => XG
    });
    var wG = ZG(3768),
      SG = ZG.n(wG),
      LG = ZG(3746),
      yG = ZG(38135),
      kG = ZG(188),
      UG = ZG(9249);
    const YG = [{
        name: "x",
        type: "int"
      }, {
        name: "y",
        type: "int"
      }, {
        name: "z",
        type: "int"
      }],
      VG = [{
        name: "name",
        type: "string"
      }, {
        name: "startOffset",
        type: {
          type: "record",
          fields: YG
        }
      }, {
        name: "dimensions",
        type: {
          type: "record",
          fields: YG
        }
      }, {
        name: "chunkData",
        type: {
          type: "array",
          items: {
            type: "record",
            fields: [...YG, {
              name: "rle",
              type: "bytes"
            }]
          }
        }
      }],
      pG = SG().Type.forSchema({
        type: "record",
        fields: VG
      }),
      fG = SG().Type.forSchema({
        type: "record",
        fields: [...VG, {
          name: "blockData",
          type: {
            type: "array",
            items: {
              type: "record",
              fields: [...YG, {
                name: "data",
                type: "bytes"
              }]
            }
          }
        }, {
          name: "pasteOffset",
          type: {
            type: "record",
            fields: YG
          }
        }]
      }),
      QG = 2,
      KG = 6,
      hG = {
        Water: [63, 118, 228],
        Lava: [232, 110, 30]
      },
      dG = [150, 150, 150],
      JG = 16,
      rG = 4096,
      zG = kG.d.rK,
      EG = -2147483648;
    async function oG(GG) {
      const bG = await XG(new Uint8Array(await GG.arrayBuffer()), await async function() {
        const {
          averageColors: GG
        } = await ZG.e(207).then((() => ZG(34575))), bG = new Map;
        return ZG => {
          var wG, SG, LG, yG, kG;
          const YG = bG.get(ZG);
          if (void 0 !== YG) return YG;
          const VG = null !== (wG = null === (SG = UG.l[ZG]) || void 0 === SG ? void 0 : SG.name) && void 0 !== wG ? wG : "",
            pG = null !== (LG = GG[VG]) && void 0 !== LG ? LG : GG[VG.split("|")[0]],
            fG = hG[VG.split("|")[0]],
            QG = null !== (yG = null !== (kG = null === pG || void 0 === pG ? void 0 : pG[0]) && void 0 !== kG ? kG : fG) && void 0 !== yG ? yG : 0 === (null === pG || void 0 === pG ? void 0 : pG.length) ? null : dG;
          return bG.set(ZG, QG), QG
        }
      }());
      return {
        surface: bG.surface,
        topDown: iG(bG.columnTops)
      }
    }
    async function XG(GG, bG) {
      var ZG;
      if (GG.byteLength < 4) throw new Error("The file is too short to be a schematic.");
      const wG = new DataView(GG.buffer, GG.byteOffset, GG.byteLength).getUint32(0, !0);
      if (wG > KG) throw new Error("The file isn't a schematic this version of Bloxd can read.");
      const SG = (wG >= QG ? fG : pG).decode(LG.VK.from(GG.subarray(4)), 0).value;
      if (!SG) throw new Error("The file isn't a schematic.");
      if (0 === SG.chunkData.length) throw new Error("The schematic has no blocks in it.");
      const kG = null !== (ZG = SG.pasteOffset) && void 0 !== ZG ? ZG : {
          x: 0,
          y: 0,
          z: 0
        },
        UG = [kG.x, kG.y, kG.z].map((GG => Math.floor(GG / zG))),
        YG = SG.chunkData.map((GG => ({
          x: GG.x + UG[0],
          y: GG.y + UG[1],
          z: GG.z + UG[2],
          rle: GG.rle
        }))),
        VG = new Map;
      for (const [LG, pG] of YG.entries()) {
        const GG = new Uint16Array(zG ** 3);
        yG.decode(pG.rle, GG), VG.set(`${pG.x},${pG.y},${pG.z}`, GG), LG % JG === JG - 1 && await CG()
      }
      const hG = (GG, bG, ZG) => GG * zG * zG + bG * zG + ZG,
        dG = (GG, bG, ZG) => {
          var wG, SG;
          const LG = Math.floor(GG / zG),
            yG = Math.floor(bG / zG),
            kG = Math.floor(ZG / zG);
          return null !== (wG = null === (SG = VG.get(`${LG},${yG},${kG}`)) || void 0 === SG ? void 0 : SG[hG(GG - LG * zG, bG - yG * zG, ZG - kG * zG)]) && void 0 !== wG ? wG : 0
        },
        rG = new Map,
        oG = [],
        XG = [];
      for (const [LG, yG] of YG.entries()) {
        const GG = VG.get(`${yG.x},${yG.y},${yG.z}`),
          ZG = [yG.x * zG, yG.y * zG, yG.z * zG],
          wG = (bG, wG, SG) => bG < 0 || wG < 0 || SG < 0 || bG >= zG || wG >= zG || SG >= zG ? dG(ZG[0] + bG, ZG[1] + wG, ZG[2] + SG) : GG[hG(bG, wG, SG)],
          SG = `${yG.x},${yG.z}`;
        let kG = rG.get(SG);
        void 0 === kG && (kG = {
          chunkX: yG.x,
          chunkZ: yG.z,
          heights: new Int32Array(zG * zG).fill(EG),
          colours: new Uint8Array(zG * zG * 3)
        }, rG.set(SG, kG));
        for (let LG = 0; LG < zG; LG++)
          for (let SG = 0; SG < zG; SG++)
            for (let yG = 0; yG < zG; yG++) {
              const UG = GG[hG(LG, SG, yG)];
              if (0 === UG) continue;
              const YG = ZG[0] + LG,
                VG = ZG[1] + SG,
                pG = ZG[2] + yG,
                fG = bG(UG);
              if (null === fG) continue;
              const QG = yG * zG + LG;
              VG > kG.heights[QG] && (kG.heights[QG] = VG, kG.colours.set(fG, 3 * QG));
              !uG(UG) && (uG(wG(LG + 1, SG, yG)) || uG(wG(LG - 1, SG, yG)) || uG(wG(LG, SG + 1, yG)) || uG(wG(LG, SG - 1, yG)) || uG(wG(LG, SG, yG + 1)) || uG(wG(LG, SG, yG - 1))) && (oG.push(YG, VG, pG), XG.push(fG[0], fG[1], fG[2]))
            }
        LG % JG === JG - 1 && await CG()
      }
      if (0 === oG.length) throw new Error("The schematic has no blocks in it.");
      return {
        name: SG.name,
        surface: {
          positions: Int32Array.from(oG),
          colours: Uint8Array.from(XG),
          count: oG.length / 3
        },
        columnTops: [...rG.values()]
      }
    }

    function uG(GG) {
      if (0 === GG) return !0;
      const bG = UG.l[GG];
      return void 0 === bG || bG.UQ || bG.transTex || !1 === bG.solid
    }

    function iG(GG) {
      let bG = 1 / 0,
        ZG = -1 / 0,
        wG = 1 / 0,
        SG = -1 / 0;
      for (const {
          chunkX: KG,
          chunkZ: hG,
          heights: dG
        }
        of GG) dG.forEach(((GG, LG) => {
        if (GG === EG) return;
        const yG = KG * zG + LG % zG,
          kG = hG * zG + Math.floor(LG / zG);
        bG = Math.min(bG, yG), ZG = Math.max(ZG, yG), wG = Math.min(wG, kG), SG = Math.max(SG, kG)
      }));
      const LG = ZG - bG + 1,
        yG = SG - wG + 1,
        kG = Math.max(1, Math.ceil(LG / rG), Math.ceil(yG / rG)),
        UG = Math.ceil(LG / kG),
        YG = Math.ceil(yG / kG),
        VG = document.createElement("canvas");
      VG.width = UG, VG.height = YG;
      const pG = VG.getContext("2d");
      if (!pG) throw new Error("Couldn't draw the schematic from above.");
      const fG = pG.createImageData(UG, YG),
        QG = new Int32Array(UG * YG).fill(EG);
      for (const {
          chunkX: KG,
          chunkZ: hG,
          heights: dG,
          colours: JG
        }
        of GG) dG.forEach(((GG, bG) => {
        const SG = KG * zG + bG % zG,
          LG = hG * zG + Math.floor(bG / zG),
          yG = Math.floor((LG - wG) / kG) * UG + Math.floor((ZG - SG) / kG);
        GG === EG || GG <= QG[yG] || (QG[yG] = GG, fG.data.set(JG.subarray(3 * bG, 3 * bG + 3), 4 * yG), fG.data[4 * yG + 3] = 255)
      }));
      return pG.putImageData(fG, 0, 0), {
        maxX: ZG,
        minZ: wG,
        width: UG * kG,
        depth: YG * kG,
        canvas: VG
      }
    }

    function CG() {
      return new Promise((GG => {
        setTimeout(GG, 0)
      }))
    }
  },
  9356: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => SG,
      f: () => LG
    });
    var wG = ZG(9303);
    const SG = "Air",
      LG = Object.freeze(new wG.h(SG, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);