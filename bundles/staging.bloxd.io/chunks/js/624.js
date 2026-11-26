export const id = 624;
export const ids = [624];
export const modules = {
  45326: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      ReadExrDataAsync: () => XB,
      _ExrTextureLoader: () => EB
    });
    var AH = LH(39595),
      rH = LH(38002),
      SH = LH(41364);
    const hH = 4,
      tH = 4,
      zH = 1,
      CH = 2,
      EH = 8,
      XH = 65536,
      GH = XH >> 3,
      YH = 14,
      uH = 65537,
      QH = 1 << YH,
      WH = QH - 1,
      MH = 59,
      xH = 63,
      vH = 2 + xH - MH;
    var PH, TH;

    function UH(HH, BH) {
      const LH = new Uint8Array(HH);
      let AH = 0;
      for (; 0 != LH[BH.value + AH];) AH += 1;
      const rH = (new TextDecoder).decode(LH.slice(BH.value, BH.value + AH));
      return BH.value = BH.value + AH + 1, rH
    }

    function VH(HH, BH) {
      const LH = HH.getInt32(BH.value, !0);
      return BH.value += hH, LH
    }

    function OH(HH, BH) {
      const LH = HH.getUint32(BH.value, !0);
      return BH.value += hH, LH
    }

    function bH(HH, BH) {
      const LH = HH.getUint8(BH.value);
      return BH.value += zH, LH
    }

    function kH(HH, BH) {
      const LH = HH.getUint16(BH.value, !0);
      return BH.value += CH, LH
    }

    function mH(HH, BH) {
      const LH = HH[BH.value];
      return BH.value += zH, LH
    }

    function oH(HH, BH) {
      let LH;
      return LH = "getBigInt64" in DataView.prototype ? Number(HH.getBigInt64(BH.value, !0)) : HH.getUint32(BH.value + 4, !0) + Number(HH.getUint32(BH.value, !0) << 32), BH.value += EH, LH
    }

    function IH(HH, BH) {
      const LH = HH.getFloat32(BH.value, !0);
      return BH.value += tH, LH
    }

    function fH(HH, BH) {
      return (0, SH.d)(kH(HH, BH))
    }

    function lH(HH, BH) {
      return (0, SH.f)((0, rH.Clamp)(IH(HH, BH), -SH.e, SH.e))
    }

    function KH(HH, BH, LH, AH) {
      switch (LH) {
        case "string":
        case "stringvector":
        case "iccProfile":
          return function(HH, BH, LH) {
            const AH = (new TextDecoder).decode(new Uint8Array(HH).slice(BH.value, BH.value + LH));
            return BH.value = BH.value + LH, AH
          }(HH.buffer, BH, AH);
        case "chlist":
          return function(HH, BH, LH) {
            const AH = BH.value,
              rH = [];
            for (; BH.value < AH + LH - 1;) {
              const LH = UH(HH.buffer, BH),
                AH = VH(HH, BH),
                SH = bH(HH, BH);
              BH.value += 3;
              const hH = VH(HH, BH),
                tH = VH(HH, BH);
              rH.push({
                name: LH,
                pixelType: AH,
                pLinear: SH,
                xSampling: hH,
                ySampling: tH
              })
            }
            return BH.value += 1, rH
          }(HH, BH, AH);
        case "chromaticities":
          return function(HH, BH) {
            return {
              redX: IH(HH, BH),
              redY: IH(HH, BH),
              greenX: IH(HH, BH),
              greenY: IH(HH, BH),
              blueX: IH(HH, BH),
              blueY: IH(HH, BH),
              whiteX: IH(HH, BH),
              whiteY: IH(HH, BH)
            }
          }(HH, BH);
        case "compression":
          return function(HH, BH) {
            return bH(HH, BH)
          }(HH, BH);
        case "box2i":
          return function(HH, BH) {
            return {
              xMin: VH(HH, BH),
              yMin: VH(HH, BH),
              xMax: VH(HH, BH),
              yMax: VH(HH, BH)
            }
          }(HH, BH);
        case "lineOrder":
          return function(HH, BH) {
            const LH = bH(HH, BH);
            return TH[LH]
          }(HH, BH);
        case "float":
          return IH(HH, BH);
        case "v2f":
          return function(HH, BH) {
            return [IH(HH, BH), IH(HH, BH)]
          }(HH, BH);
        case "v3f":
          return function(HH, BH) {
            return [IH(HH, BH), IH(HH, BH), IH(HH, BH)]
          }(HH, BH);
        case "int":
          return VH(HH, BH);
        case "rational":
          return function(HH, BH) {
            return [VH(HH, BH), OH(HH, BH)]
          }(HH, BH);
        case "timecode":
          return function(HH, BH) {
            return [OH(HH, BH), OH(HH, BH)]
          }(HH, BH);
        case "preview":
          return BH.value += AH, "skipped";
        default:
          return void(BH.value += AH)
      }
    }

    function cH(HH) {
      for (let BH = 1; BH < HH.length; BH++) {
        const LH = HH[BH - 1] + HH[BH] - 128;
        HH[BH] = LH
      }
    }

    function eH(HH, BH) {
      let LH = 0,
        AH = Math.floor((HH.length + 1) / 2),
        rH = 0;
      const SH = HH.length - 1;
      for (; !(rH > SH) && (BH[rH++] = HH[LH++], !(rH > SH));) BH[rH++] = HH[AH++]
    }! function(HH) {
      HH[HH.NO_COMPRESSION = 0] = "NO_COMPRESSION", HH[HH.RLE_COMPRESSION = 1] = "RLE_COMPRESSION", HH[HH.ZIPS_COMPRESSION = 2] = "ZIPS_COMPRESSION", HH[HH.ZIP_COMPRESSION = 3] = "ZIP_COMPRESSION", HH[HH.PIZ_COMPRESSION = 4] = "PIZ_COMPRESSION", HH[HH.PXR24_COMPRESSION = 5] = "PXR24_COMPRESSION"
    }(PH || (PH = {})),
    function(HH) {
      HH[HH.INCREASING_Y = 0] = "INCREASING_Y", HH[HH.DECREASING_Y = 1] = "DECREASING_Y"
    }(TH || (TH = {}));
    const qH = 20000630;

    function gH(HH, BH) {
      if (HH.getUint32(0, !0) != qH) throw new Error("Incorrect OpenEXR format");
      const LH = HH.getUint8(4),
        rH = HH.getUint8(5),
        SH = {
          singleTile: !!(2 & rH),
          longName: !!(4 & rH),
          deepFormat: !!(8 & rH),
          multiPart: !!(16 & rH)
        };
      BH.value = 8;
      const hH = {};
      let tH = !0;
      for (; tH;) {
        const LH = UH(HH.buffer, BH);
        if (LH) {
          const rH = UH(HH.buffer, BH),
            SH = KH(HH, BH, rH, OH(HH, BH));
          void 0 === SH ? AH.e.Warn(`Unknown header attribute type ${rH}'.`) : hH[LH] = SH
        } else tH = !1
      }
      if (0 != (-5 & rH)) throw new Error("Unsupported file format");
      return {
        version: LH,
        spec: SH,
        ...hH
      }
    }
    const NH = 32768,
      RH = 65535;

    function jH(HH, BH, LH, AH, rH) {
      for (; LH < HH;) BH = BH << 8 | mH(AH, rH), LH += 8;
      return {
        l: BH >> (LH -= HH) & (1 << HH) - 1,
        c: BH,
        lc: LH
      }
    }

    function nH(HH, BH, LH, AH) {
      return {
        c: HH = HH << 8 | mH(LH, AH),
        lc: BH += 8
      }
    }

    function FH(HH, BH, LH, AH, rH, SH, hH, tH, zH) {
      if (HH == BH) {
        if (AH < 8) {
          const HH = nH(LH, AH, rH, SH);
          LH = HH.c, AH = HH.lc
        }
        let HH = LH >> (AH -= 8);
        if (HH = new Uint8Array([HH])[0], tH.value + HH > zH) return null;
        const BH = hH[tH.value - 1];
        for (; HH-- > 0;) hH[tH.value++] = BH
      } else {
        if (!(tH.value < zH)) return null;
        hH[tH.value++] = HH
      }
      return {
        c: LH,
        lc: AH
      }
    }
    const DH = new Array(59);

    function wH(HH, BH, LH, AH, rH, SH) {
      const hH = BH;
      let tH = 0,
        zH = 0;
      for (; AH <= rH; AH++) {
        if (hH.value - BH.value > LH) return;
        let CH = jH(6, tH, zH, HH, hH);
        const EH = CH.l;
        if (tH = CH.c, zH = CH.lc, SH[AH] = EH, EH == xH) {
          if (hH.value - BH.value > LH) throw new Error("Error in HufUnpackEncTable");
          CH = jH(8, tH, zH, HH, hH);
          let EH = CH.l + vH;
          if (tH = CH.c, zH = CH.lc, AH + EH > rH + 1) throw new Error("Error in HufUnpackEncTable");
          for (; EH--;) SH[AH++] = 0;
          AH--
        } else if (EH >= MH) {
          let HH = EH - MH + 2;
          if (AH + HH > rH + 1) throw new Error("Error in HufUnpackEncTable");
          for (; HH--;) SH[AH++] = 0;
          AH--
        }
      }! function(HH) {
        for (let LH = 0; LH <= 58; ++LH) DH[LH] = 0;
        for (let LH = 0; LH < uH; ++LH) DH[HH[LH]] += 1;
        let BH = 0;
        for (let LH = 58; LH > 0; --LH) {
          const HH = BH + DH[LH] >> 1;
          DH[LH] = BH, BH = HH
        }
        for (let LH = 0; LH < uH; ++LH) {
          const BH = HH[LH];
          BH > 0 && (HH[LH] = BH | DH[BH]++ << 6)
        }
      }(SH)
    }

    function ZH(HH) {
      return 63 & HH
    }

    function dH(HH) {
      return HH >> 6
    }

    function aH(HH, BH, LH, AH, rH, SH) {
      const hH = LH.value,
        tH = OH(BH, LH),
        zH = OH(BH, LH);
      LH.value += 4;
      const CH = OH(BH, LH);
      if (LH.value += 4, tH < 0 || tH >= uH || zH < 0 || zH >= uH) throw new Error("Wrong HUF_ENCSIZE");
      const EH = new Array(uH),
        XH = new Array(QH);
      ! function(HH) {
        for (let BH = 0; BH < QH; BH++) HH[BH] = {}, HH[BH].len = 0, HH[BH].lit = 0, HH[BH].p = null
      }(XH);
      if (wH(HH, LH, AH - (LH.value - hH), tH, zH, EH), CH > 8 * (AH - (LH.value - hH))) throw new Error("Wrong hufUncompress");
      ! function(HH, BH, LH, AH) {
        for (; BH <= LH; BH++) {
          const LH = dH(HH[BH]),
            rH = ZH(HH[BH]);
          if (LH >> rH) throw new Error("Invalid table entry");
          if (rH > YH) {
            const HH = AH[LH >> rH - YH];
            if (HH.len) throw new Error("Invalid table entry");
            if (HH.lit++, HH.p) {
              const BH = HH.p;
              HH.p = new Array(HH.lit);
              for (let LH = 0; LH < HH.lit - 1; ++LH) HH.p[LH] = BH[LH]
            } else HH.p = new Array(1);
            HH.p[HH.lit - 1] = BH
          } else if (rH) {
            let HH = 0;
            for (let SH = 1 << YH - rH; SH > 0; SH--) {
              const SH = AH[(LH << YH - rH) + HH];
              if (SH.len || SH.p) throw new Error("Invalid table entry");
              SH.len = rH, SH.lit = BH, HH++
            }
          }
        }
      }(EH, tH, zH, XH),
      function(HH, BH, LH, AH, rH, SH, hH, tH, zH) {
        let CH = 0,
          EH = 0;
        const XH = hH,
          GH = Math.trunc(AH.value + (rH + 7) / 8);
        for (; AH.value < GH;) {
          let rH = nH(CH, EH, LH, AH);
          for (CH = rH.c, EH = rH.lc; EH >= YH;) {
            const hH = BH[CH >> EH - YH & WH];
            if (hH.len) {
              EH -= hH.len;
              const HH = FH(hH.lit, SH, CH, EH, LH, AH, tH, zH, XH);
              HH && (CH = HH.c, EH = HH.lc)
            } else {
              if (!hH.p) throw new Error("hufDecode issues");
              let BH;
              for (BH = 0; BH < hH.lit; BH++) {
                const YH = ZH(HH[hH.p[BH]]);
                for (; EH < YH && AH.value < GH;) rH = nH(CH, EH, LH, AH), CH = rH.c, EH = rH.lc;
                if (EH >= YH && dH(HH[hH.p[BH]]) == (CH >> EH - YH & (1 << YH) - 1)) {
                  EH -= YH;
                  const HH = FH(hH.p[BH], SH, CH, EH, LH, AH, tH, zH, XH);
                  HH && (CH = HH.c, EH = HH.lc);
                  break
                }
              }
              if (BH == hH.lit) throw new Error("HufDecode issues")
            }
          }
        }
        const uH = 8 - rH & 7;
        for (CH >>= uH, EH -= uH; EH > 0;) {
          const HH = BH[CH << YH - EH & WH];
          if (!HH.len) throw new Error("HufDecode issues");
          {
            EH -= HH.len;
            const BH = FH(HH.lit, SH, CH, EH, LH, AH, tH, zH, XH);
            BH && (CH = BH.c, EH = BH.lc)
          }
        }
      }(EH, XH, HH, LH, CH, zH, SH, rH, {
        value: 0
      })
    }

    function sH(HH) {
      return 65535 & HH
    }

    function JH(HH) {
      const BH = sH(HH);
      return BH > 32767 ? BH - 65536 : BH
    }

    function iH(HH, BH) {
      const LH = JH(HH),
        AH = JH(BH),
        rH = LH + (1 & AH) + (AH >> 1);
      return {
        a: rH,
        b: rH - AH
      }
    }

    function pH(HH, BH) {
      const LH = sH(HH),
        AH = sH(BH),
        rH = LH - (AH >> 1) & RH;
      return {
        a: AH + rH - NH & RH,
        b: rH
      }
    }

    function yH(HH, BH, LH, AH, rH, SH, hH) {
      const tH = hH < 16384,
        zH = LH > rH ? rH : LH;
      let CH, EH, XH = 1;
      for (; XH <= zH;) XH <<= 1;
      for (XH >>= 1, CH = XH, XH >>= 1; XH >= 1;) {
        EH = 0;
        const hH = EH + SH * (rH - CH),
          zH = SH * XH,
          GH = SH * CH,
          YH = AH * XH,
          uH = AH * CH;
        let QH, WH, MH, xH;
        for (; EH <= hH; EH += GH) {
          let rH = EH;
          const SH = EH + AH * (LH - CH);
          for (; rH <= SH; rH += uH) {
            const LH = rH + YH,
              AH = rH + zH,
              SH = AH + YH;
            if (tH) {
              let hH = iH(HH[rH + BH], HH[AH + BH]);
              QH = hH.a, MH = hH.b, hH = iH(HH[LH + BH], HH[SH + BH]), WH = hH.a, xH = hH.b, hH = iH(QH, WH), HH[rH + BH] = hH.a, HH[LH + BH] = hH.b, hH = iH(MH, xH), HH[AH + BH] = hH.a, HH[SH + BH] = hH.b
            } else {
              let hH = pH(HH[rH + BH], HH[AH + BH]);
              QH = hH.a, MH = hH.b, hH = pH(HH[LH + BH], HH[SH + BH]), WH = hH.a, xH = hH.b, hH = pH(QH, WH), HH[rH + BH] = hH.a, HH[LH + BH] = hH.b, hH = pH(MH, xH), HH[AH + BH] = hH.a, HH[SH + BH] = hH.b
            }
          }
          if (LH & XH) {
            const LH = rH + zH;
            let AH;
            AH = tH ? iH(HH[rH + BH], HH[LH + BH]) : pH(HH[rH + BH], HH[LH + BH]), QH = AH.a, HH[LH + BH] = AH.b, HH[rH + BH] = QH
          }
        }
        if (rH & XH) {
          let rH = EH;
          const SH = EH + AH * (LH - CH);
          for (; rH <= SH; rH += uH) {
            const LH = rH + YH;
            let AH;
            AH = tH ? iH(HH[rH + BH], HH[LH + BH]) : pH(HH[rH + BH], HH[LH + BH]), QH = AH.a, HH[LH + BH] = AH.b, HH[rH + BH] = QH
          }
        }
        CH = XH, XH >>= 1
      }
      return EH
    }

    function HB(HH) {
      return new DataView(HH.array.buffer, HH.offset.value, HH.size)
    }

    function BB(HH) {
      const BH = HH.viewer.buffer.slice(HH.offset.value, HH.offset.value + HH.size),
        LH = new Uint8Array(function(HH) {
          let BH = HH.byteLength;
          const LH = [];
          let AH = 0;
          const rH = new DataView(HH);
          for (; BH > 0;) {
            const HH = rH.getInt8(AH++);
            if (HH < 0) {
              const SH = -HH;
              BH -= SH + 1;
              for (let HH = 0; HH < SH; HH++) LH.push(rH.getUint8(AH++))
            } else {
              const SH = HH;
              BH -= 2;
              const hH = rH.getUint8(AH++);
              for (let HH = 0; HH < SH + 1; HH++) LH.push(hH)
            }
          }
          return LH
        }(BH)),
        AH = new Uint8Array(LH.length);
      return cH(LH), eH(LH, AH), new DataView(AH.buffer)
    }

    function LB(HH) {
      const BH = HH.array.slice(HH.offset.value, HH.offset.value + HH.size),
        LH = fflate.unzlibSync(BH),
        AH = new Uint8Array(LH.length);
      return cH(LH), eH(LH, AH), new DataView(AH.buffer)
    }

    function AB(HH) {
      const BH = HH.array.slice(HH.offset.value, HH.offset.value + HH.size),
        LH = fflate.unzlibSync(BH),
        AH = HH.lines * HH.channels * HH.width,
        rH = 1 == HH.type ? new Uint16Array(AH) : new Uint32Array(AH);
      let SH = 0,
        hH = 0;
      const tH = new Array(4);
      for (let zH = 0; zH < HH.lines; zH++)
        for (let BH = 0; BH < HH.channels; BH++) {
          let BH = 0;
          switch (HH.type) {
            case 1:
              tH[0] = SH, tH[1] = tH[0] + HH.width, SH = tH[1] + HH.width;
              for (let AH = 0; AH < HH.width; ++AH) {
                BH += LH[tH[0]++] << 8 | LH[tH[1]++], rH[hH] = BH, hH++
              }
              break;
            case 2:
              tH[0] = SH, tH[1] = tH[0] + HH.width, tH[2] = tH[1] + HH.width, SH = tH[2] + HH.width;
              for (let AH = 0; AH < HH.width; ++AH) {
                BH += LH[tH[0]++] << 24 | LH[tH[1]++] << 16 | LH[tH[2]++] << 8, rH[hH] = BH, hH++
              }
          }
        }
      return new DataView(rH.buffer)
    }

    function rB(HH) {
      const BH = HH.viewer,
        LH = {
          value: HH.offset.value
        },
        AH = new Uint16Array(HH.width * HH.scanlineBlockSize * (HH.channels * HH.type)),
        rH = new Uint8Array(GH);
      let SH = 0;
      const hH = new Array(HH.channels);
      for (let CH = 0; CH < HH.channels; CH++) hH[CH] = {}, hH[CH].start = SH, hH[CH].end = hH[CH].start, hH[CH].nx = HH.width, hH[CH].ny = HH.lines, hH[CH].size = HH.type, SH += hH[CH].nx * hH[CH].ny * hH[CH].size;
      const tH = kH(BH, LH),
        zH = kH(BH, LH);
      if (zH >= GH) throw new Error("Wrong PIZ_COMPRESSION BITMAP_SIZE");
      if (tH <= zH)
        for (let CH = 0; CH < zH - tH + 1; CH++) rH[CH + tH] = bH(BH, LH);
      const EH = new Uint16Array(XH),
        YH = function(HH, BH) {
          let LH = 0;
          for (let rH = 0; rH < XH; ++rH)(0 == rH || HH[rH >> 3] & 1 << (7 & rH)) && (BH[LH++] = rH);
          const AH = LH - 1;
          for (; LH < XH;) BH[LH++] = 0;
          return AH
        }(rH, EH),
        uH = OH(BH, LH);
      aH(HH.array, BH, LH, uH, AH, SH);
      for (let CH = 0; CH < HH.channels; ++CH) {
        const HH = hH[CH];
        for (let BH = 0; BH < hH[CH].size; ++BH) yH(AH, HH.start + BH, HH.nx, HH.size, HH.ny, HH.nx * HH.size, YH)
      }! function(HH, BH, LH) {
        for (let AH = 0; AH < LH; ++AH) BH[AH] = HH[BH[AH]]
      }(EH, AH, SH);
      let QH = 0;
      const WH = new Uint8Array(AH.buffer.byteLength);
      for (let XH = 0; XH < HH.lines; XH++)
        for (let BH = 0; BH < HH.channels; BH++) {
          const HH = hH[BH],
            LH = HH.nx * HH.size,
            rH = new Uint8Array(AH.buffer, HH.end * CH, LH * CH);
          WH.set(rH, QH), QH += LH * CH, HH.end += LH
        }
      return new DataView(WH.buffer)
    }
    var SB, hB = LH(41387);
    ! function(HH) {
      HH[HH.Float = 0] = "Float", HH[HH.HalfFloat = 1] = "HalfFloat"
    }(SB || (SB = {}));
    class tB {}
    async function zB(HH, BH, LH, AH) {
      const rH = {
        size: 0,
        viewer: BH,
        array: new Uint8Array(BH.buffer),
        offset: LH,
        width: HH.dataWindow.xMax - HH.dataWindow.xMin + 1,
        height: HH.dataWindow.yMax - HH.dataWindow.yMin + 1,
        channels: HH.channels.length,
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
      switch (HH.compression) {
        case PH.NO_COMPRESSION:
          rH.lines = 1, rH.uncompress = HB;
          break;
        case PH.RLE_COMPRESSION:
          rH.lines = 1, rH.uncompress = BB;
          break;
        case PH.ZIPS_COMPRESSION:
          rH.lines = 1, rH.uncompress = LB, await hB.i.LoadScriptAsync(tB.FFLATEUrl);
          break;
        case PH.ZIP_COMPRESSION:
          rH.lines = 16, rH.uncompress = LB, await hB.i.LoadScriptAsync(tB.FFLATEUrl);
          break;
        case PH.PIZ_COMPRESSION:
          rH.lines = 32, rH.uncompress = rB;
          break;
        case PH.PXR24_COMPRESSION:
          rH.lines = 16, rH.uncompress = AB, await hB.i.LoadScriptAsync(tB.FFLATEUrl);
          break;
        default:
          throw new Error(PH[HH.compression] + " is unsupported")
      }
      rH.scanlineBlockSize = rH.lines;
      const SH = {};
      for (const tH of HH.channels) switch (tH.name) {
        case "R":
        case "G":
        case "B":
        case "A":
        case "Y":
          SH[tH.name] = !0, rH.type = tH.pixelType
      }
      let hH = !1;
      if (SH.R && SH.G && SH.B && SH.A) rH.outputChannels = 4, rH.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (SH.R && SH.G && SH.B) hH = !0, rH.outputChannels = 4, rH.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (SH.R && SH.G) rH.outputChannels = 2, rH.decodeChannels = {
        R: 0,
        G: 1
      };
      else if (SH.R) rH.outputChannels = 1, rH.decodeChannels = {
        R: 0
      };
      else {
        if (!SH.Y) throw new Error("EXRLoader.parse: file contains unsupported data channels.");
        rH.outputChannels = 1, rH.decodeChannels = {
          Y: 0
        }
      }
      if (1 === rH.type) switch (AH) {
        case SB.Float:
          rH.getter = fH, rH.inputSize = CH;
          break;
        case SB.HalfFloat:
          rH.getter = kH, rH.inputSize = CH
      } else {
        if (2 !== rH.type) throw new Error("Unsupported pixelType " + rH.type + " for " + HH.compression);
        switch (AH) {
          case SB.Float:
            rH.getter = IH, rH.inputSize = tH;
            break;
          case SB.HalfFloat:
            rH.getter = lH, rH.inputSize = tH
        }
      }
      rH.blockCount = rH.height / rH.scanlineBlockSize;
      for (let tH = 0; tH < rH.blockCount; tH++) oH(BH, LH);
      const zH = rH.width * rH.height * rH.outputChannels;
      switch (AH) {
        case SB.Float:
          rH.byteArray = new Float32Array(zH), rH.textureType = 1, hH && rH.byteArray.fill(1, 0, zH);
          break;
        case SB.HalfFloat:
          rH.byteArray = new Uint16Array(zH), rH.textureType = 2, hH && rH.byteArray.fill(15360, 0, zH);
          break;
        default:
          throw new Error("Unsupported type: " + AH)
      }
      let EH = 0;
      for (const tH of HH.channels) void 0 !== rH.decodeChannels[tH.name] && (rH.channelLineOffsets[tH.name] = EH * rH.width), EH += 2 * tH.pixelType;
      return rH.bytesPerLine = rH.width * EH, rH.outLineWidth = rH.width * rH.outputChannels, "INCREASING_Y" === HH.lineOrder ? rH.scanOrder = HH => HH : rH.scanOrder = HH => rH.height - 1 - HH, 4 == rH.outputChannels ? (rH.format = 5, rH.linearSpace = !0) : (rH.format = 6, rH.linearSpace = !1), rH
    }

    function CB(HH, BH, LH, AH) {
      const rH = {
        value: 0
      };
      for (let SH = 0; SH < HH.height / HH.scanlineBlockSize; SH++) {
        const hH = VH(LH, AH) - BH.dataWindow.yMin;
        HH.size = OH(LH, AH), HH.lines = hH + HH.scanlineBlockSize > HH.height ? HH.height - hH : HH.scanlineBlockSize;
        const tH = HH.size < HH.lines * HH.bytesPerLine && HH.uncompress ? HH.uncompress(HH) : HB(HH);
        AH.value += HH.size;
        for (let LH = 0; LH < HH.scanlineBlockSize; LH++) {
          const AH = SH * HH.scanlineBlockSize,
            hH = LH + HH.scanOrder(AH);
          if (hH >= HH.height) continue;
          const zH = LH * HH.bytesPerLine,
            CH = (HH.height - 1 - hH) * HH.outLineWidth;
          for (let LH = 0; LH < HH.channels; LH++) {
            const AH = BH.channels[LH].name,
              SH = HH.channelLineOffsets[AH],
              hH = HH.decodeChannels[AH];
            if (void 0 !== hH) {
              rH.value = zH + SH;
              for (let BH = 0; BH < HH.width; BH++) {
                const LH = CH + BH * HH.outputChannels + hH;
                HH.byteArray && (HH.byteArray[LH] = HH.getter(tH, rH))
              }
            }
          }
        }
      }
    }
    tB.DefaultOutputType = SB.HalfFloat, tB.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class EB {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(HH, BH, LH, AH, rH) {
        throw ".exr not supported in Cube."
      }
      loadData(HH, BH, LH) {
        const rH = new DataView(HH.buffer),
          SH = {
            value: 0
          },
          hH = gH(rH, SH);
        zB(hH, rH, SH, tB.DefaultOutputType).then((HH => {
          CB(HH, hH, rH, SH);
          const AH = hH.dataWindow.xMax - hH.dataWindow.xMin + 1,
            tH = hH.dataWindow.yMax - hH.dataWindow.yMin + 1;
          LH(AH, tH, BH.generateMipMaps, !1, (() => {
            const LH = BH.Iu();
            BH.format = hH.format, BH.type = HH.textureType, BH.invertY = !1, BH._gammaSpace = !hH.linearSpace, HH.byteArray && LH._uploadDataToTextureDirectly(BH, HH.byteArray, 0, 0, void 0, !0)
          }))
        })).catch((HH => {
          AH.e.Error("Failed to load EXR texture: ", HH)
        }))
      }
    }
    async function XB(HH) {
      const BH = new DataView(HH),
        LH = {
          value: 0
        },
        rH = gH(BH, LH);
      try {
        const HH = await zB(rH, BH, LH, SB.Float);
        return CB(HH, rH, BH, LH), HH.byteArray ? {
          width: rH.dataWindow.xMax - rH.dataWindow.xMin + 1,
          height: rH.dataWindow.yMax - rH.dataWindow.yMin + 1,
          data: new Float32Array(HH.byteArray)
        } : (AH.e.Error("Failed to decode EXR data: No byte array available."), {
          width: 0,
          height: 0,
          data: null
        })
      } catch (SH) {
        AH.e.Error("Failed to load EXR data: ", SH)
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
for (const HH in modules) Object.freeze(modules[HH]);