export const id = 305;
export const ids = [305];
export const modules = {
  40926: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      ReadExrDataAsync: () => ur,
      _ExrTextureLoader: () => vr
    });
    var FY = DY(38040),
      AY = DY(36559),
      IY = DY(39184);
    const RY = 4,
      OY = 4,
      gY = 1,
      aY = 2,
      vY = 8,
      uY = 65536,
      sY = uY >> 3,
      iY = 14,
      yY = 65537,
      QY = 1 << iY,
      oY = QY - 1,
      WY = 59,
      EY = 63,
      mY = 2 + EY - WY;
    var VY, SY;

    function lY(YY, rY) {
      const DY = new Uint8Array(YY);
      let FY = 0;
      for (; 0 != DY[rY.value + FY];) FY += 1;
      const AY = (new TextDecoder).decode(DY.slice(rY.value, rY.value + FY));
      return rY.value = rY.value + FY + 1, AY
    }

    function TY(YY, rY) {
      const DY = YY.getInt32(rY.value, !0);
      return rY.value += RY, DY
    }

    function eY(YY, rY) {
      const DY = YY.getUint32(rY.value, !0);
      return rY.value += RY, DY
    }

    function NY(YY, rY) {
      const DY = YY.getUint8(rY.value);
      return rY.value += gY, DY
    }

    function BY(YY, rY) {
      const DY = YY.getUint16(rY.value, !0);
      return rY.value += aY, DY
    }

    function cY(YY, rY) {
      const DY = YY[rY.value];
      return rY.value += gY, DY
    }

    function KY(YY, rY) {
      let DY;
      return DY = "getBigInt64" in DataView.prototype ? Number(YY.getBigInt64(rY.value, !0)) : YY.getUint32(rY.value + 4, !0) + Number(YY.getUint32(rY.value, !0) << 32), rY.value += vY, DY
    }

    function HY(YY, rY) {
      const DY = YY.getFloat32(rY.value, !0);
      return rY.value += OY, DY
    }

    function zY(YY, rY) {
      return (0, IY.c)(BY(YY, rY))
    }

    function ZY(YY, rY) {
      return (0, IY.k)((0, AY.Clamp)(HY(YY, rY), -IY.g, IY.g))
    }

    function CY(YY, rY, DY, FY) {
      switch (DY) {
        case "string":
        case "stringvector":
        case "iccProfile":
          return function(YY, rY, DY) {
            const FY = (new TextDecoder).decode(new Uint8Array(YY).slice(rY.value, rY.value + DY));
            return rY.value = rY.value + DY, FY
          }(YY.buffer, rY, FY);
        case "chlist":
          return function(YY, rY, DY) {
            const FY = rY.value,
              AY = [];
            for (; rY.value < FY + DY - 1;) {
              const DY = lY(YY.buffer, rY),
                FY = TY(YY, rY),
                IY = NY(YY, rY);
              rY.value += 3;
              const RY = TY(YY, rY),
                OY = TY(YY, rY);
              AY.push({
                name: DY,
                pixelType: FY,
                pLinear: IY,
                xSampling: RY,
                ySampling: OY
              })
            }
            return rY.value += 1, AY
          }(YY, rY, FY);
        case "chromaticities":
          return function(YY, rY) {
            return {
              redX: HY(YY, rY),
              redY: HY(YY, rY),
              greenX: HY(YY, rY),
              greenY: HY(YY, rY),
              blueX: HY(YY, rY),
              blueY: HY(YY, rY),
              whiteX: HY(YY, rY),
              whiteY: HY(YY, rY)
            }
          }(YY, rY);
        case "compression":
          return function(YY, rY) {
            return NY(YY, rY)
          }(YY, rY);
        case "box2i":
          return function(YY, rY) {
            return {
              xMin: TY(YY, rY),
              yMin: TY(YY, rY),
              xMax: TY(YY, rY),
              yMax: TY(YY, rY)
            }
          }(YY, rY);
        case "lineOrder":
          return function(YY, rY) {
            const DY = NY(YY, rY);
            return SY[DY]
          }(YY, rY);
        case "float":
          return HY(YY, rY);
        case "v2f":
          return function(YY, rY) {
            return [HY(YY, rY), HY(YY, rY)]
          }(YY, rY);
        case "v3f":
          return function(YY, rY) {
            return [HY(YY, rY), HY(YY, rY), HY(YY, rY)]
          }(YY, rY);
        case "int":
          return TY(YY, rY);
        case "rational":
          return function(YY, rY) {
            return [TY(YY, rY), eY(YY, rY)]
          }(YY, rY);
        case "timecode":
          return function(YY, rY) {
            return [eY(YY, rY), eY(YY, rY)]
          }(YY, rY);
        case "preview":
          return rY.value += FY, "skipped";
        default:
          return void(rY.value += FY)
      }
    }

    function fY(YY) {
      for (let rY = 1; rY < YY.length; rY++) {
        const DY = YY[rY - 1] + YY[rY] - 128;
        YY[rY] = DY
      }
    }

    function jY(YY, rY) {
      let DY = 0,
        FY = Math.floor((YY.length + 1) / 2),
        AY = 0;
      const IY = YY.length - 1;
      for (; !(AY > IY) && (rY[AY++] = YY[DY++], !(AY > IY));) rY[AY++] = YY[FY++]
    }! function(YY) {
      YY[YY.NO_COMPRESSION = 0] = "NO_COMPRESSION", YY[YY.RLE_COMPRESSION = 1] = "RLE_COMPRESSION", YY[YY.ZIPS_COMPRESSION = 2] = "ZIPS_COMPRESSION", YY[YY.ZIP_COMPRESSION = 3] = "ZIP_COMPRESSION", YY[YY.PIZ_COMPRESSION = 4] = "PIZ_COMPRESSION", YY[YY.PXR24_COMPRESSION = 5] = "PXR24_COMPRESSION"
    }(VY || (VY = {})),
    function(YY) {
      YY[YY.INCREASING_Y = 0] = "INCREASING_Y", YY[YY.DECREASING_Y = 1] = "DECREASING_Y"
    }(SY || (SY = {}));
    const hY = 20000630;

    function dY(YY, rY) {
      if (YY.getUint32(0, !0) != hY) throw new Error("Incorrect OpenEXR format");
      const DY = YY.getUint8(4),
        AY = YY.getUint8(5),
        IY = {
          singleTile: !!(2 & AY),
          longName: !!(4 & AY),
          deepFormat: !!(8 & AY),
          multiPart: !!(16 & AY)
        };
      rY.value = 8;
      const RY = {};
      let OY = !0;
      for (; OY;) {
        const DY = lY(YY.buffer, rY);
        if (DY) {
          const AY = lY(YY.buffer, rY),
            IY = CY(YY, rY, AY, eY(YY, rY));
          void 0 === IY ? FY.d.Warn(`Unknown header attribute type ${AY}'.`) : RY[DY] = IY
        } else OY = !1
      }
      if (0 != (-5 & AY)) throw new Error("Unsupported file format");
      return {
        version: DY,
        spec: IY,
        ...RY
      }
    }
    const JY = 32768,
      MY = 65535;

    function wY(YY, rY, DY, FY, AY) {
      for (; DY < YY;) rY = rY << 8 | cY(FY, AY), DY += 8;
      return {
        l: rY >> (DY -= YY) & (1 << YY) - 1,
        c: rY,
        lc: DY
      }
    }

    function bY(YY, rY, DY, FY) {
      return {
        c: YY = YY << 8 | cY(DY, FY),
        lc: rY += 8
      }
    }

    function XY(YY, rY, DY, FY, AY, IY, RY, OY, gY) {
      if (YY == rY) {
        if (FY < 8) {
          const YY = bY(DY, FY, AY, IY);
          DY = YY.c, FY = YY.lc
        }
        let YY = DY >> (FY -= 8);
        if (YY = new Uint8Array([YY])[0], OY.value + YY > gY) return null;
        const rY = RY[OY.value - 1];
        for (; YY-- > 0;) RY[OY.value++] = rY
      } else {
        if (!(OY.value < gY)) return null;
        RY[OY.value++] = YY
      }
      return {
        c: DY,
        lc: FY
      }
    }
    const qY = new Array(59);

    function pY(YY, rY, DY, FY, AY, IY) {
      const RY = rY;
      let OY = 0,
        gY = 0;
      for (; FY <= AY; FY++) {
        if (RY.value - rY.value > DY) return;
        let aY = wY(6, OY, gY, YY, RY);
        const vY = aY.l;
        if (OY = aY.c, gY = aY.lc, IY[FY] = vY, vY == EY) {
          if (RY.value - rY.value > DY) throw new Error("Error in HufUnpackEncTable");
          aY = wY(8, OY, gY, YY, RY);
          let vY = aY.l + mY;
          if (OY = aY.c, gY = aY.lc, FY + vY > AY + 1) throw new Error("Error in HufUnpackEncTable");
          for (; vY--;) IY[FY++] = 0;
          FY--
        } else if (vY >= WY) {
          let YY = vY - WY + 2;
          if (FY + YY > AY + 1) throw new Error("Error in HufUnpackEncTable");
          for (; YY--;) IY[FY++] = 0;
          FY--
        }
      }! function(YY) {
        for (let DY = 0; DY <= 58; ++DY) qY[DY] = 0;
        for (let DY = 0; DY < yY; ++DY) qY[YY[DY]] += 1;
        let rY = 0;
        for (let DY = 58; DY > 0; --DY) {
          const YY = rY + qY[DY] >> 1;
          qY[DY] = rY, rY = YY
        }
        for (let DY = 0; DY < yY; ++DY) {
          const rY = YY[DY];
          rY > 0 && (YY[DY] = rY | qY[rY]++ << 6)
        }
      }(IY)
    }

    function kY(YY) {
      return 63 & YY
    }

    function GY(YY) {
      return YY >> 6
    }

    function xY(YY, rY, DY, FY, AY, IY) {
      const RY = DY.value,
        OY = eY(rY, DY),
        gY = eY(rY, DY);
      DY.value += 4;
      const aY = eY(rY, DY);
      if (DY.value += 4, OY < 0 || OY >= yY || gY < 0 || gY >= yY) throw new Error("Wrong HUF_ENCSIZE");
      const vY = new Array(yY),
        uY = new Array(QY);
      ! function(YY) {
        for (let rY = 0; rY < QY; rY++) YY[rY] = {}, YY[rY].len = 0, YY[rY].lit = 0, YY[rY].p = null
      }(uY);
      if (pY(YY, DY, FY - (DY.value - RY), OY, gY, vY), aY > 8 * (FY - (DY.value - RY))) throw new Error("Wrong hufUncompress");
      ! function(YY, rY, DY, FY) {
        for (; rY <= DY; rY++) {
          const DY = GY(YY[rY]),
            AY = kY(YY[rY]);
          if (DY >> AY) throw new Error("Invalid table entry");
          if (AY > iY) {
            const YY = FY[DY >> AY - iY];
            if (YY.len) throw new Error("Invalid table entry");
            if (YY.lit++, YY.p) {
              const rY = YY.p;
              YY.p = new Array(YY.lit);
              for (let DY = 0; DY < YY.lit - 1; ++DY) YY.p[DY] = rY[DY]
            } else YY.p = new Array(1);
            YY.p[YY.lit - 1] = rY
          } else if (AY) {
            let YY = 0;
            for (let IY = 1 << iY - AY; IY > 0; IY--) {
              const IY = FY[(DY << iY - AY) + YY];
              if (IY.len || IY.p) throw new Error("Invalid table entry");
              IY.len = AY, IY.lit = rY, YY++
            }
          }
        }
      }(vY, OY, gY, uY),
      function(YY, rY, DY, FY, AY, IY, RY, OY, gY) {
        let aY = 0,
          vY = 0;
        const uY = RY,
          sY = Math.trunc(FY.value + (AY + 7) / 8);
        for (; FY.value < sY;) {
          let AY = bY(aY, vY, DY, FY);
          for (aY = AY.c, vY = AY.lc; vY >= iY;) {
            const RY = rY[aY >> vY - iY & oY];
            if (RY.len) {
              vY -= RY.len;
              const YY = XY(RY.lit, IY, aY, vY, DY, FY, OY, gY, uY);
              YY && (aY = YY.c, vY = YY.lc)
            } else {
              if (!RY.p) throw new Error("hufDecode issues");
              let rY;
              for (rY = 0; rY < RY.lit; rY++) {
                const iY = kY(YY[RY.p[rY]]);
                for (; vY < iY && FY.value < sY;) AY = bY(aY, vY, DY, FY), aY = AY.c, vY = AY.lc;
                if (vY >= iY && GY(YY[RY.p[rY]]) == (aY >> vY - iY & (1 << iY) - 1)) {
                  vY -= iY;
                  const YY = XY(RY.p[rY], IY, aY, vY, DY, FY, OY, gY, uY);
                  YY && (aY = YY.c, vY = YY.lc);
                  break
                }
              }
              if (rY == RY.lit) throw new Error("HufDecode issues")
            }
          }
        }
        const yY = 8 - AY & 7;
        for (aY >>= yY, vY -= yY; vY > 0;) {
          const YY = rY[aY << iY - vY & oY];
          if (!YY.len) throw new Error("HufDecode issues");
          {
            vY -= YY.len;
            const rY = XY(YY.lit, IY, aY, vY, DY, FY, OY, gY, uY);
            rY && (aY = rY.c, vY = rY.lc)
          }
        }
      }(vY, uY, YY, DY, aY, gY, IY, AY, {
        value: 0
      })
    }

    function nY(YY) {
      return 65535 & YY
    }

    function PY(YY) {
      const rY = nY(YY);
      return rY > 32767 ? rY - 65536 : rY
    }

    function UY(YY, rY) {
      const DY = PY(YY),
        FY = PY(rY),
        AY = DY + (1 & FY) + (FY >> 1);
      return {
        a: AY,
        b: AY - FY
      }
    }

    function LY(YY, rY) {
      const DY = nY(YY),
        FY = nY(rY),
        AY = DY - (FY >> 1) & MY;
      return {
        a: FY + AY - JY & MY,
        b: AY
      }
    }

    function tY(YY, rY, DY, FY, AY, IY, RY) {
      const OY = RY < 16384,
        gY = DY > AY ? AY : DY;
      let aY, vY, uY = 1;
      for (; uY <= gY;) uY <<= 1;
      for (uY >>= 1, aY = uY, uY >>= 1; uY >= 1;) {
        vY = 0;
        const RY = vY + IY * (AY - aY),
          gY = IY * uY,
          sY = IY * aY,
          iY = FY * uY,
          yY = FY * aY;
        let QY, oY, WY, EY;
        for (; vY <= RY; vY += sY) {
          let AY = vY;
          const IY = vY + FY * (DY - aY);
          for (; AY <= IY; AY += yY) {
            const DY = AY + iY,
              FY = AY + gY,
              IY = FY + iY;
            if (OY) {
              let RY = UY(YY[AY + rY], YY[FY + rY]);
              QY = RY.a, WY = RY.b, RY = UY(YY[DY + rY], YY[IY + rY]), oY = RY.a, EY = RY.b, RY = UY(QY, oY), YY[AY + rY] = RY.a, YY[DY + rY] = RY.b, RY = UY(WY, EY), YY[FY + rY] = RY.a, YY[IY + rY] = RY.b
            } else {
              let RY = LY(YY[AY + rY], YY[FY + rY]);
              QY = RY.a, WY = RY.b, RY = LY(YY[DY + rY], YY[IY + rY]), oY = RY.a, EY = RY.b, RY = LY(QY, oY), YY[AY + rY] = RY.a, YY[DY + rY] = RY.b, RY = LY(WY, EY), YY[FY + rY] = RY.a, YY[IY + rY] = RY.b
            }
          }
          if (DY & uY) {
            const DY = AY + gY;
            let FY;
            FY = OY ? UY(YY[AY + rY], YY[DY + rY]) : LY(YY[AY + rY], YY[DY + rY]), QY = FY.a, YY[DY + rY] = FY.b, YY[AY + rY] = QY
          }
        }
        if (AY & uY) {
          let AY = vY;
          const IY = vY + FY * (DY - aY);
          for (; AY <= IY; AY += yY) {
            const DY = AY + iY;
            let FY;
            FY = OY ? UY(YY[AY + rY], YY[DY + rY]) : LY(YY[AY + rY], YY[DY + rY]), QY = FY.a, YY[DY + rY] = FY.b, YY[AY + rY] = QY
          }
        }
        aY = uY, uY >>= 1
      }
      return vY
    }

    function Yr(YY) {
      return new DataView(YY.array.buffer, YY.offset.value, YY.size)
    }

    function rr(YY) {
      const rY = YY.viewer.buffer.slice(YY.offset.value, YY.offset.value + YY.size),
        DY = new Uint8Array(function(YY) {
          let rY = YY.byteLength;
          const DY = [];
          let FY = 0;
          const AY = new DataView(YY);
          for (; rY > 0;) {
            const YY = AY.getInt8(FY++);
            if (YY < 0) {
              const IY = -YY;
              rY -= IY + 1;
              for (let YY = 0; YY < IY; YY++) DY.push(AY.getUint8(FY++))
            } else {
              const IY = YY;
              rY -= 2;
              const RY = AY.getUint8(FY++);
              for (let YY = 0; YY < IY + 1; YY++) DY.push(RY)
            }
          }
          return DY
        }(rY)),
        FY = new Uint8Array(DY.length);
      return fY(DY), jY(DY, FY), new DataView(FY.buffer)
    }

    function Dr(YY) {
      const rY = YY.array.slice(YY.offset.value, YY.offset.value + YY.size),
        DY = fflate.unzlibSync(rY),
        FY = new Uint8Array(DY.length);
      return fY(DY), jY(DY, FY), new DataView(FY.buffer)
    }

    function Fr(YY) {
      const rY = YY.array.slice(YY.offset.value, YY.offset.value + YY.size),
        DY = fflate.unzlibSync(rY),
        FY = YY.lines * YY.channels * YY.width,
        AY = 1 == YY.type ? new Uint16Array(FY) : new Uint32Array(FY);
      let IY = 0,
        RY = 0;
      const OY = new Array(4);
      for (let gY = 0; gY < YY.lines; gY++)
        for (let rY = 0; rY < YY.channels; rY++) {
          let rY = 0;
          switch (YY.type) {
            case 1:
              OY[0] = IY, OY[1] = OY[0] + YY.width, IY = OY[1] + YY.width;
              for (let FY = 0; FY < YY.width; ++FY) {
                rY += DY[OY[0]++] << 8 | DY[OY[1]++], AY[RY] = rY, RY++
              }
              break;
            case 2:
              OY[0] = IY, OY[1] = OY[0] + YY.width, OY[2] = OY[1] + YY.width, IY = OY[2] + YY.width;
              for (let FY = 0; FY < YY.width; ++FY) {
                rY += DY[OY[0]++] << 24 | DY[OY[1]++] << 16 | DY[OY[2]++] << 8, AY[RY] = rY, RY++
              }
          }
        }
      return new DataView(AY.buffer)
    }

    function Ar(YY) {
      const rY = YY.viewer,
        DY = {
          value: YY.offset.value
        },
        FY = new Uint16Array(YY.width * YY.scanlineBlockSize * (YY.channels * YY.type)),
        AY = new Uint8Array(sY);
      let IY = 0;
      const RY = new Array(YY.channels);
      for (let aY = 0; aY < YY.channels; aY++) RY[aY] = {}, RY[aY].start = IY, RY[aY].end = RY[aY].start, RY[aY].nx = YY.width, RY[aY].ny = YY.lines, RY[aY].size = YY.type, IY += RY[aY].nx * RY[aY].ny * RY[aY].size;
      const OY = BY(rY, DY),
        gY = BY(rY, DY);
      if (gY >= sY) throw new Error("Wrong PIZ_COMPRESSION BITMAP_SIZE");
      if (OY <= gY)
        for (let aY = 0; aY < gY - OY + 1; aY++) AY[aY + OY] = NY(rY, DY);
      const vY = new Uint16Array(uY),
        iY = function(YY, rY) {
          let DY = 0;
          for (let AY = 0; AY < uY; ++AY)(0 == AY || YY[AY >> 3] & 1 << (7 & AY)) && (rY[DY++] = AY);
          const FY = DY - 1;
          for (; DY < uY;) rY[DY++] = 0;
          return FY
        }(AY, vY),
        yY = eY(rY, DY);
      xY(YY.array, rY, DY, yY, FY, IY);
      for (let aY = 0; aY < YY.channels; ++aY) {
        const YY = RY[aY];
        for (let rY = 0; rY < RY[aY].size; ++rY) tY(FY, YY.start + rY, YY.nx, YY.size, YY.ny, YY.nx * YY.size, iY)
      }! function(YY, rY, DY) {
        for (let FY = 0; FY < DY; ++FY) rY[FY] = YY[rY[FY]]
      }(vY, FY, IY);
      let QY = 0;
      const oY = new Uint8Array(FY.buffer.byteLength);
      for (let uY = 0; uY < YY.lines; uY++)
        for (let rY = 0; rY < YY.channels; rY++) {
          const YY = RY[rY],
            DY = YY.nx * YY.size,
            AY = new Uint8Array(FY.buffer, YY.end * aY, DY * aY);
          oY.set(AY, QY), QY += DY * aY, YY.end += DY
        }
      return new DataView(oY.buffer)
    }
    var Ir, Rr = DY(39219);
    ! function(YY) {
      YY[YY.Float = 0] = "Float", YY[YY.HalfFloat = 1] = "HalfFloat"
    }(Ir || (Ir = {}));
    class Or {}
    async function gr(YY, rY, DY, FY) {
      const AY = {
        size: 0,
        viewer: rY,
        array: new Uint8Array(rY.buffer),
        offset: DY,
        width: YY.dataWindow.xMax - YY.dataWindow.xMin + 1,
        height: YY.dataWindow.yMax - YY.dataWindow.yMin + 1,
        channels: YY.channels.length,
        channelLineOffsets: {},
        scanOrder: () => 0,
        bytesPerLine: 0,
        outLineWidth: 0,
        lines: 0,
        scanlineBlockSize: 0,
        inputSize: null,
        type: 0,
        uncompress: null,
        getter: () => 0,
        format: 5,
        outputChannels: 0,
        decodeChannels: {},
        blockCount: null,
        byteArray: null,
        linearSpace: !1,
        textureType: 0
      };
      switch (YY.compression) {
        case VY.NO_COMPRESSION:
          AY.lines = 1, AY.uncompress = Yr;
          break;
        case VY.RLE_COMPRESSION:
          AY.lines = 1, AY.uncompress = rr;
          break;
        case VY.ZIPS_COMPRESSION:
          AY.lines = 1, AY.uncompress = Dr, await Rr.i.LoadScriptAsync(Or.FFLATEUrl);
          break;
        case VY.ZIP_COMPRESSION:
          AY.lines = 16, AY.uncompress = Dr, await Rr.i.LoadScriptAsync(Or.FFLATEUrl);
          break;
        case VY.PIZ_COMPRESSION:
          AY.lines = 32, AY.uncompress = Ar;
          break;
        case VY.PXR24_COMPRESSION:
          AY.lines = 16, AY.uncompress = Fr, await Rr.i.LoadScriptAsync(Or.FFLATEUrl);
          break;
        default:
          throw new Error(VY[YY.compression] + " is unsupported")
      }
      AY.scanlineBlockSize = AY.lines;
      const IY = {};
      for (const OY of YY.channels) switch (OY.name) {
        case "R":
        case "G":
        case "B":
        case "A":
        case "Y":
          IY[OY.name] = !0, AY.type = OY.pixelType
      }
      let RY = !1;
      if (IY.R && IY.G && IY.B && IY.A) AY.outputChannels = 4, AY.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (IY.R && IY.G && IY.B) RY = !0, AY.outputChannels = 4, AY.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (IY.R && IY.G) AY.outputChannels = 2, AY.decodeChannels = {
        R: 0,
        G: 1
      };
      else if (IY.R) AY.outputChannels = 1, AY.decodeChannels = {
        R: 0
      };
      else {
        if (!IY.Y) throw new Error("EXRLoader.parse: file contains unsupported data channels.");
        AY.outputChannels = 1, AY.decodeChannels = {
          Y: 0
        }
      }
      if (1 === AY.type) switch (FY) {
        case Ir.Float:
          AY.getter = zY, AY.inputSize = aY;
          break;
        case Ir.HalfFloat:
          AY.getter = BY, AY.inputSize = aY
      } else {
        if (2 !== AY.type) throw new Error("Unsupported pixelType " + AY.type + " for " + YY.compression);
        switch (FY) {
          case Ir.Float:
            AY.getter = HY, AY.inputSize = OY;
            break;
          case Ir.HalfFloat:
            AY.getter = ZY, AY.inputSize = OY
        }
      }
      AY.blockCount = AY.height / AY.scanlineBlockSize;
      for (let OY = 0; OY < AY.blockCount; OY++) KY(rY, DY);
      const gY = AY.width * AY.height * AY.outputChannels;
      switch (FY) {
        case Ir.Float:
          AY.byteArray = new Float32Array(gY), AY.textureType = 1, RY && AY.byteArray.fill(1, 0, gY);
          break;
        case Ir.HalfFloat:
          AY.byteArray = new Uint16Array(gY), AY.textureType = 2, RY && AY.byteArray.fill(15360, 0, gY);
          break;
        default:
          throw new Error("Unsupported type: " + FY)
      }
      let vY = 0;
      for (const OY of YY.channels) void 0 !== AY.decodeChannels[OY.name] && (AY.channelLineOffsets[OY.name] = vY * AY.width), vY += 2 * OY.pixelType;
      return AY.bytesPerLine = AY.width * vY, AY.outLineWidth = AY.width * AY.outputChannels, "INCREASING_Y" === YY.lineOrder ? AY.scanOrder = YY => YY : AY.scanOrder = YY => AY.height - 1 - YY, 4 == AY.outputChannels ? (AY.format = 5, AY.linearSpace = !0) : (AY.format = 6, AY.linearSpace = !1), AY
    }

    function ar(YY, rY, DY, FY) {
      const AY = {
        value: 0
      };
      for (let IY = 0; IY < YY.height / YY.scanlineBlockSize; IY++) {
        const RY = TY(DY, FY) - rY.dataWindow.yMin;
        YY.size = eY(DY, FY), YY.lines = RY + YY.scanlineBlockSize > YY.height ? YY.height - RY : YY.scanlineBlockSize;
        const OY = YY.size < YY.lines * YY.bytesPerLine && YY.uncompress ? YY.uncompress(YY) : Yr(YY);
        FY.value += YY.size;
        for (let DY = 0; DY < YY.scanlineBlockSize; DY++) {
          const FY = IY * YY.scanlineBlockSize,
            RY = DY + YY.scanOrder(FY);
          if (RY >= YY.height) continue;
          const gY = DY * YY.bytesPerLine,
            aY = (YY.height - 1 - RY) * YY.outLineWidth;
          for (let DY = 0; DY < YY.channels; DY++) {
            const FY = rY.channels[DY].name,
              IY = YY.channelLineOffsets[FY],
              RY = YY.decodeChannels[FY];
            if (void 0 !== RY) {
              AY.value = gY + IY;
              for (let rY = 0; rY < YY.width; rY++) {
                const DY = aY + rY * YY.outputChannels + RY;
                YY.byteArray && (YY.byteArray[DY] = YY.getter(OY, AY))
              }
            }
          }
        }
      }
    }
    Or.DefaultOutputType = Ir.HalfFloat, Or.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class vr {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(YY, rY, DY, FY, AY) {
        throw ".exr not supported in Cube."
      }
      loadData(YY, rY, DY) {
        const AY = new DataView(YY.buffer),
          IY = {
            value: 0
          },
          RY = dY(AY, IY);
        gr(RY, AY, IY, Or.DefaultOutputType).then((YY => {
          ar(YY, RY, AY, IY);
          const FY = RY.dataWindow.xMax - RY.dataWindow.xMin + 1,
            OY = RY.dataWindow.yMax - RY.dataWindow.yMin + 1;
          DY(FY, OY, rY.generateMipMaps, !1, (() => {
            const DY = rY.ky();
            rY.format = RY.format, rY.type = YY.textureType, rY.invertY = !1, rY._gammaSpace = !RY.linearSpace, YY.byteArray && DY._uploadDataToTextureDirectly(rY, YY.byteArray, 0, 0, void 0, !0)
          }))
        })).catch((YY => {
          FY.d.Error("Failed to load EXR texture: ", YY)
        }))
      }
    }
    async function ur(YY) {
      const rY = new DataView(YY),
        DY = {
          value: 0
        },
        AY = dY(rY, DY);
      try {
        const YY = await gr(AY, rY, DY, Ir.Float);
        return ar(YY, AY, rY, DY), YY.byteArray ? {
          width: AY.dataWindow.xMax - AY.dataWindow.xMin + 1,
          height: AY.dataWindow.yMax - AY.dataWindow.yMin + 1,
          data: new Float32Array(YY.byteArray)
        } : (FY.d.Error("Failed to decode EXR data: No byte array available."), {
          width: 0,
          height: 0,
          data: null
        })
      } catch (IY) {
        FY.d.Error("Failed to load EXR data: ", IY)
      }
      return {
        width: 0,
        height: 0,
        data: null
      }
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);