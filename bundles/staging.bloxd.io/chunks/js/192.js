export const id = 192;
export const ids = [192];
export const modules = {
  37066: (YY, rY, DY) => {
    var FY = DY(37072);

    function AY(YY) {
      for (var rY, DY, AY = 0, IY = YY.length, RY = 0; RY < YY.length;) {
        for (rY = YY[RY], DY = 0; RY < IY && YY[RY] === rY;) ++RY, ++DY;
        AY += FY.log2(DY) / 7 | 0, AY += FY.log2(rY >>> 0) / 7 | 0, AY += 2
      }
      return AY
    }
    rY.size = AY, rY.encode = function(YY, rY) {
      rY || (rY = new Uint8Array(AY(YY)));
      for (var DY, FY, IY = 0, RY = rY.length, OY = 0; OY < YY.length;) {
        for (DY = YY[OY], FY = 0; OY < YY.length && YY[OY] === DY;) ++OY, ++FY;
        for (; IY < RY && FY >= 128;) rY[IY++] = 128 + (127 & FY), FY >>>= 7;
        if (IY >= RY) throw new Error("RLE buffer overflow");
        for (rY[IY++] = FY, DY >>>= 0; IY < RY && DY >= 128;) rY[IY++] = 128 + (127 & DY), DY >>>= 7;
        if (IY >= RY) throw new Error("RLE buffer overflow");
        rY[IY++] = DY
      }
      return rY
    }, rY.decode = function(YY, rY) {
      for (var DY, FY, AY, IY, RY = rY.length, OY = YY.length, gY = 0, aY = 0; aY < OY;) {
        for (DY = 0, FY = 0; aY < OY && YY[aY] >= 128;) DY += (127 & YY[aY++]) << FY, FY += 7;
        if (DY += YY[aY++] << FY, aY >= OY) throw new Error("RLE buffer underrun");
        if (gY + DY > RY) throw new Error("Chunk buffer overflow");
        for (AY = 0, FY = 0; aY < OY && YY[aY] >= 128;) AY += (127 & YY[aY++]) << FY, FY += 7;
        if (aY >= OY) throw new Error("RLE buffer underrun");
        for (AY += YY[aY++] << FY, IY = 0; IY < DY; ++IY) rY[gY++] = AY
      }
      return rY
    }
  },
  37072: (YY, rY) => {
    function DY(YY) {
      var rY = 32;
      return (YY &= -YY) && rY--, 65535 & YY && (rY -= 16), 16711935 & YY && (rY -= 8), 252645135 & YY && (rY -= 4), 858993459 & YY && (rY -= 2), 1431655765 & YY && (rY -= 1), rY
    }
    rY.INT_BITS = 32, rY.INT_MAX = 2147483647, rY.INT_MIN = -1 << 31, rY.sign = function(YY) {
      return (YY > 0) - (YY < 0)
    }, rY.abs = function(YY) {
      var rY = YY >> 31;
      return (YY ^ rY) - rY
    }, rY.min = function(YY, rY) {
      return rY ^ (YY ^ rY) & -(YY < rY)
    }, rY.max = function(YY, rY) {
      return YY ^ (YY ^ rY) & -(YY < rY)
    }, rY.isPow2 = function(YY) {
      return !(YY & YY - 1) && !!YY
    }, rY.log2 = function(YY) {
      var rY, DY;
      return rY = (YY > 65535) << 4, rY |= DY = ((YY >>>= rY) > 255) << 3, rY |= DY = ((YY >>>= DY) > 15) << 2, (rY |= DY = ((YY >>>= DY) > 3) << 1) | (YY >>>= DY) >> 1
    }, rY.log10 = function(YY) {
      return YY >= 1e9 ? 9 : YY >= 1e8 ? 8 : YY >= 1e7 ? 7 : YY >= 1e6 ? 6 : YY >= 1e5 ? 5 : YY >= 1e4 ? 4 : YY >= 1e3 ? 3 : YY >= 100 ? 2 : YY >= 10 ? 1 : 0
    }, rY.popCount = function(YY) {
      return 16843009 * ((YY = (858993459 & (YY -= YY >>> 1 & 1431655765)) + (YY >>> 2 & 858993459)) + (YY >>> 4) & 252645135) >>> 24
    }, rY.countTrailingZeros = DY, rY.nextPow2 = function(YY) {
      return YY += 0 === YY, --YY, YY |= YY >>> 1, YY |= YY >>> 2, YY |= YY >>> 4, YY |= YY >>> 8, (YY |= YY >>> 16) + 1
    }, rY.prevPow2 = function(YY) {
      return YY |= YY >>> 1, YY |= YY >>> 2, YY |= YY >>> 4, YY |= YY >>> 8, (YY |= YY >>> 16) - (YY >>> 1)
    }, rY.parity = function(YY) {
      return YY ^= YY >>> 16, YY ^= YY >>> 8, YY ^= YY >>> 4, 27030 >>> (YY &= 15) & 1
    };
    var FY = new Array(256);
    ! function(YY) {
      for (var rY = 0; rY < 256; ++rY) {
        var DY = rY,
          FY = rY,
          AY = 7;
        for (DY >>>= 1; DY; DY >>>= 1) FY <<= 1, FY |= 1 & DY, --AY;
        YY[rY] = FY << AY & 255
      }
    }(FY), rY.reverse = function(YY) {
      return FY[255 & YY] << 24 | FY[YY >>> 8 & 255] << 16 | FY[YY >>> 16 & 255] << 8 | FY[YY >>> 24 & 255]
    }, rY.interleave2 = function(YY, rY) {
      return (YY = 1431655765 & ((YY = 858993459 & ((YY = 252645135 & ((YY = 16711935 & ((YY &= 65535) | YY << 8)) | YY << 4)) | YY << 2)) | YY << 1)) | (rY = 1431655765 & ((rY = 858993459 & ((rY = 252645135 & ((rY = 16711935 & ((rY &= 65535) | rY << 8)) | rY << 4)) | rY << 2)) | rY << 1)) << 1
    }, rY.deinterleave2 = function(YY, rY) {
      return (YY = 65535 & ((YY = 16711935 & ((YY = 252645135 & ((YY = 858993459 & ((YY = YY >>> rY & 1431655765) | YY >>> 1)) | YY >>> 2)) | YY >>> 4)) | YY >>> 16)) << 16 >> 16
    }, rY.interleave3 = function(YY, rY, DY) {
      return YY = 1227133513 & ((YY = 3272356035 & ((YY = 251719695 & ((YY = 4278190335 & ((YY &= 1023) | YY << 16)) | YY << 8)) | YY << 4)) | YY << 2), (YY |= (rY = 1227133513 & ((rY = 3272356035 & ((rY = 251719695 & ((rY = 4278190335 & ((rY &= 1023) | rY << 16)) | rY << 8)) | rY << 4)) | rY << 2)) << 1) | (DY = 1227133513 & ((DY = 3272356035 & ((DY = 251719695 & ((DY = 4278190335 & ((DY &= 1023) | DY << 16)) | DY << 8)) | DY << 4)) | DY << 2)) << 2
    }, rY.deinterleave3 = function(YY, rY) {
      return (YY = 1023 & ((YY = 4278190335 & ((YY = 251719695 & ((YY = 3272356035 & ((YY = YY >>> rY & 1227133513) | YY >>> 2)) | YY >>> 4)) | YY >>> 8)) | YY >>> 16)) << 22 >> 22
    }, rY.nextCombination = function(YY) {
      var rY = YY | YY - 1;
      return rY + 1 | (~rY & -~rY) - 1 >>> DY(YY) + 1
    }
  },
  38953: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      emptyColumnHeight: () => VY,
      loadHeatmapSchematic: () => SY,
      readSchematicBlocks: () => lY
    });
    var FY = DY(3371),
      AY = DY.n(FY),
      IY = DY(3353),
      RY = DY(37066),
      OY = DY(213),
      gY = DY(8830);
    const aY = [{
        name: "x",
        type: "int"
      }, {
        name: "y",
        type: "int"
      }, {
        name: "z",
        type: "int"
      }],
      vY = [{
        name: "name",
        type: "string"
      }, {
        name: "startOffset",
        type: {
          type: "record",
          fields: aY
        }
      }, {
        name: "dimensions",
        type: {
          type: "record",
          fields: aY
        }
      }, {
        name: "chunkData",
        type: {
          type: "array",
          items: {
            type: "record",
            fields: [...aY, {
              name: "rle",
              type: "bytes"
            }]
          }
        }
      }],
      uY = AY().Type.forSchema({
        type: "record",
        fields: vY
      }),
      sY = AY().Type.forSchema({
        type: "record",
        fields: [...vY, {
          name: "blockData",
          type: {
            type: "array",
            items: {
              type: "record",
              fields: [...aY, {
                name: "data",
                type: "bytes"
              }]
            }
          }
        }, {
          name: "pasteOffset",
          type: {
            type: "record",
            fields: aY
          }
        }]
      }),
      iY = 2,
      yY = 6,
      QY = {
        Water: [63, 118, 228],
        Lava: [232, 110, 30]
      },
      oY = [150, 150, 150],
      WY = 16,
      EY = 4096,
      mY = OY.d.Jy,
      VY = -2147483648;
    async function SY(YY) {
      const rY = await lY(new Uint8Array(await YY.arrayBuffer()), await async function() {
        const {
          averageColors: YY
        } = await DY.e(196).then((() => DY(33702))), rY = new Map;
        return DY => {
          var FY, AY, IY, RY, OY;
          const aY = rY.get(DY);
          if (void 0 !== aY) return aY;
          const vY = null !== (FY = null === (AY = gY.h[DY]) || void 0 === AY ? void 0 : AY.name) && void 0 !== FY ? FY : "",
            uY = null !== (IY = YY[vY]) && void 0 !== IY ? IY : YY[vY.split("|")[0]],
            sY = QY[vY.split("|")[0]],
            iY = null !== (RY = null !== (OY = null === uY || void 0 === uY ? void 0 : uY[0]) && void 0 !== OY ? OY : sY) && void 0 !== RY ? RY : 0 === (null === uY || void 0 === uY ? void 0 : uY.length) ? null : oY;
          return rY.set(DY, iY), iY
        }
      }());
      return {
        surface: rY.surface,
        topDown: eY(rY.columnTops)
      }
    }
    async function lY(YY, rY) {
      var DY;
      if (YY.byteLength < 4) throw new Error("The file is too short to be a schematic.");
      const FY = new DataView(YY.buffer, YY.byteOffset, YY.byteLength).getUint32(0, !0);
      if (FY > yY) throw new Error("The file isn't a schematic this version of Bloxd can read.");
      const AY = (FY >= iY ? sY : uY).decode(IY.Ny.from(YY.subarray(4)), 0).value;
      if (!AY) throw new Error("The file isn't a schematic.");
      if (0 === AY.chunkData.length) throw new Error("The schematic has no blocks in it.");
      const OY = null !== (DY = AY.pasteOffset) && void 0 !== DY ? DY : {
          x: 0,
          y: 0,
          z: 0
        },
        gY = [OY.x, OY.y, OY.z].map((YY => Math.floor(YY / mY))),
        aY = AY.chunkData.map((YY => ({
          x: YY.x + gY[0],
          y: YY.y + gY[1],
          z: YY.z + gY[2],
          rle: YY.rle
        }))),
        vY = new Map;
      for (const [IY, uY] of aY.entries()) {
        const YY = new Uint16Array(mY ** 3);
        RY.decode(uY.rle, YY), vY.set(`${uY.x},${uY.y},${uY.z}`, YY), IY % WY === WY - 1 && await NY()
      }
      const QY = (YY, rY, DY) => YY * mY * mY + rY * mY + DY,
        oY = (YY, rY, DY) => {
          var FY, AY;
          const IY = Math.floor(YY / mY),
            RY = Math.floor(rY / mY),
            OY = Math.floor(DY / mY);
          return null !== (FY = null === (AY = vY.get(`${IY},${RY},${OY}`)) || void 0 === AY ? void 0 : AY[QY(YY - IY * mY, rY - RY * mY, DY - OY * mY)]) && void 0 !== FY ? FY : 0
        },
        EY = new Map,
        SY = [],
        lY = [];
      for (const [IY, RY] of aY.entries()) {
        const YY = vY.get(`${RY.x},${RY.y},${RY.z}`),
          DY = [RY.x * mY, RY.y * mY, RY.z * mY],
          FY = (rY, FY, AY) => rY < 0 || FY < 0 || AY < 0 || rY >= mY || FY >= mY || AY >= mY ? oY(DY[0] + rY, DY[1] + FY, DY[2] + AY) : YY[QY(rY, FY, AY)],
          AY = `${RY.x},${RY.z}`;
        let OY = EY.get(AY);
        void 0 === OY && (OY = {
          chunkX: RY.x,
          chunkZ: RY.z,
          heights: new Int32Array(mY * mY).fill(VY),
          colours: new Uint8Array(mY * mY * 3)
        }, EY.set(AY, OY));
        for (let IY = 0; IY < mY; IY++)
          for (let AY = 0; AY < mY; AY++)
            for (let RY = 0; RY < mY; RY++) {
              const gY = YY[QY(IY, AY, RY)];
              if (0 === gY) continue;
              const aY = DY[0] + IY,
                vY = DY[1] + AY,
                uY = DY[2] + RY,
                sY = rY(gY);
              if (null === sY) continue;
              const iY = RY * mY + IY;
              vY > OY.heights[iY] && (OY.heights[iY] = vY, OY.colours.set(sY, 3 * iY));
              !TY(gY) && (TY(FY(IY + 1, AY, RY)) || TY(FY(IY - 1, AY, RY)) || TY(FY(IY, AY + 1, RY)) || TY(FY(IY, AY - 1, RY)) || TY(FY(IY, AY, RY + 1)) || TY(FY(IY, AY, RY - 1))) && (SY.push(aY, vY, uY), lY.push(sY[0], sY[1], sY[2]))
            }
        IY % WY === WY - 1 && await NY()
      }
      if (0 === SY.length) throw new Error("The schematic has no blocks in it.");
      return {
        name: AY.name,
        surface: {
          positions: Int32Array.from(SY),
          colours: Uint8Array.from(lY),
          count: SY.length / 3
        },
        columnTops: [...EY.values()]
      }
    }

    function TY(YY) {
      if (0 === YY) return !0;
      const rY = gY.h[YY];
      return void 0 === rY || rY.ui || rY.transTex || !1 === rY.solid
    }

    function eY(YY) {
      let rY = 1 / 0,
        DY = -1 / 0,
        FY = 1 / 0,
        AY = -1 / 0;
      for (const {
          chunkX: yY,
          chunkZ: QY,
          heights: oY
        }
        of YY) oY.forEach(((YY, IY) => {
        if (YY === VY) return;
        const RY = yY * mY + IY % mY,
          OY = QY * mY + Math.floor(IY / mY);
        rY = Math.min(rY, RY), DY = Math.max(DY, RY), FY = Math.min(FY, OY), AY = Math.max(AY, OY)
      }));
      const IY = DY - rY + 1,
        RY = AY - FY + 1,
        OY = Math.max(1, Math.ceil(IY / EY), Math.ceil(RY / EY)),
        gY = Math.ceil(IY / OY),
        aY = Math.ceil(RY / OY),
        vY = document.createElement("canvas");
      vY.width = gY, vY.height = aY;
      const uY = vY.getContext("2d");
      if (!uY) throw new Error("Couldn't draw the schematic from above.");
      const sY = uY.createImageData(gY, aY),
        iY = new Int32Array(gY * aY).fill(VY);
      for (const {
          chunkX: yY,
          chunkZ: QY,
          heights: oY,
          colours: WY
        }
        of YY) oY.forEach(((YY, rY) => {
        const AY = yY * mY + rY % mY,
          IY = QY * mY + Math.floor(rY / mY),
          RY = Math.floor((IY - FY) / OY) * gY + Math.floor((DY - AY) / OY);
        YY === VY || YY <= iY[RY] || (iY[RY] = YY, sY.data.set(WY.subarray(3 * rY, 3 * rY + 3), 4 * RY), sY.data[4 * RY + 3] = 255)
      }));
      return uY.putImageData(sY, 0, 0), {
        maxX: DY,
        minZ: FY,
        width: gY * OY,
        depth: aY * OY,
        canvas: vY
      }
    }

    function NY() {
      return new Promise((YY => {
        setTimeout(YY, 0)
      }))
    }
  },
  8908: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => AY,
      g: () => IY
    });
    var FY = DY(8870);
    const AY = "Air",
      IY = Object.freeze(new FY.h(AY, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);