export const id = 295;
export const ids = [295];
export const modules = {
  40572: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      ReadExrDataAsync: () => hc,
      _ExrTextureLoader: () => Yc
    });
    var FJ = ZJ(37660),
      UJ = ZJ(36207),
      eJ = ZJ(38862);
    const XJ = 4,
      AJ = 4,
      qJ = 1,
      jJ = 2,
      YJ = 8,
      hJ = 65536,
      DJ = hJ >> 3,
      sJ = 14,
      nJ = 65537,
      GJ = 1 << sJ,
      fJ = GJ - 1,
      xJ = 59,
      rJ = 63,
      vJ = 2 + rJ - xJ;
    var mJ, QJ;

    function EJ(JJ, cJ) {
      const ZJ = new Uint8Array(JJ);
      let FJ = 0;
      for (; 0 != ZJ[cJ.value + FJ];) FJ += 1;
      const UJ = (new TextDecoder).decode(ZJ.slice(cJ.value, cJ.value + FJ));
      return cJ.value = cJ.value + FJ + 1, UJ
    }

    function VJ(JJ, cJ) {
      const ZJ = JJ.getInt32(cJ.value, !0);
      return cJ.value += XJ, ZJ
    }

    function KJ(JJ, cJ) {
      const ZJ = JJ.getUint32(cJ.value, !0);
      return cJ.value += XJ, ZJ
    }

    function yJ(JJ, cJ) {
      const ZJ = JJ.getUint8(cJ.value);
      return cJ.value += qJ, ZJ
    }

    function SJ(JJ, cJ) {
      const ZJ = JJ.getUint16(cJ.value, !0);
      return cJ.value += jJ, ZJ
    }

    function IJ(JJ, cJ) {
      const ZJ = JJ[cJ.value];
      return cJ.value += qJ, ZJ
    }

    function MJ(JJ, cJ) {
      let ZJ;
      return ZJ = "getBigInt64" in DataView.prototype ? Number(JJ.getBigInt64(cJ.value, !0)) : JJ.getUint32(cJ.value + 4, !0) + Number(JJ.getUint32(cJ.value, !0) << 32), cJ.value += YJ, ZJ
    }

    function bJ(JJ, cJ) {
      const ZJ = JJ.getFloat32(cJ.value, !0);
      return cJ.value += AJ, ZJ
    }

    function wJ(JJ, cJ) {
      return (0, eJ.d)(SJ(JJ, cJ))
    }

    function WJ(JJ, cJ) {
      return (0, eJ.j)((0, UJ.Clamp)(bJ(JJ, cJ), -eJ.f, eJ.f))
    }

    function gJ(JJ, cJ, ZJ, FJ) {
      switch (ZJ) {
        case "string":
        case "stringvector":
        case "iccProfile":
          return function(JJ, cJ, ZJ) {
            const FJ = (new TextDecoder).decode(new Uint8Array(JJ).slice(cJ.value, cJ.value + ZJ));
            return cJ.value = cJ.value + ZJ, FJ
          }(JJ.buffer, cJ, FJ);
        case "chlist":
          return function(JJ, cJ, ZJ) {
            const FJ = cJ.value,
              UJ = [];
            for (; cJ.value < FJ + ZJ - 1;) {
              const ZJ = EJ(JJ.buffer, cJ),
                FJ = VJ(JJ, cJ),
                eJ = yJ(JJ, cJ);
              cJ.value += 3;
              const XJ = VJ(JJ, cJ),
                AJ = VJ(JJ, cJ);
              UJ.push({
                name: ZJ,
                pixelType: FJ,
                pLinear: eJ,
                xSampling: XJ,
                ySampling: AJ
              })
            }
            return cJ.value += 1, UJ
          }(JJ, cJ, FJ);
        case "chromaticities":
          return function(JJ, cJ) {
            return {
              redX: bJ(JJ, cJ),
              redY: bJ(JJ, cJ),
              greenX: bJ(JJ, cJ),
              greenY: bJ(JJ, cJ),
              blueX: bJ(JJ, cJ),
              blueY: bJ(JJ, cJ),
              whiteX: bJ(JJ, cJ),
              whiteY: bJ(JJ, cJ)
            }
          }(JJ, cJ);
        case "compression":
          return function(JJ, cJ) {
            return yJ(JJ, cJ)
          }(JJ, cJ);
        case "box2i":
          return function(JJ, cJ) {
            return {
              xMin: VJ(JJ, cJ),
              yMin: VJ(JJ, cJ),
              xMax: VJ(JJ, cJ),
              yMax: VJ(JJ, cJ)
            }
          }(JJ, cJ);
        case "lineOrder":
          return function(JJ, cJ) {
            const ZJ = yJ(JJ, cJ);
            return QJ[ZJ]
          }(JJ, cJ);
        case "float":
          return bJ(JJ, cJ);
        case "v2f":
          return function(JJ, cJ) {
            return [bJ(JJ, cJ), bJ(JJ, cJ)]
          }(JJ, cJ);
        case "v3f":
          return function(JJ, cJ) {
            return [bJ(JJ, cJ), bJ(JJ, cJ), bJ(JJ, cJ)]
          }(JJ, cJ);
        case "int":
          return VJ(JJ, cJ);
        case "rational":
          return function(JJ, cJ) {
            return [VJ(JJ, cJ), KJ(JJ, cJ)]
          }(JJ, cJ);
        case "timecode":
          return function(JJ, cJ) {
            return [KJ(JJ, cJ), KJ(JJ, cJ)]
          }(JJ, cJ);
        case "preview":
          return cJ.value += FJ, "skipped";
        default:
          return void(cJ.value += FJ)
      }
    }

    function HJ(JJ) {
      for (let cJ = 1; cJ < JJ.length; cJ++) {
        const ZJ = JJ[cJ - 1] + JJ[cJ] - 128;
        JJ[cJ] = ZJ
      }
    }

    function PJ(JJ, cJ) {
      let ZJ = 0,
        FJ = Math.floor((JJ.length + 1) / 2),
        UJ = 0;
      const eJ = JJ.length - 1;
      for (; !(UJ > eJ) && (cJ[UJ++] = JJ[ZJ++], !(UJ > eJ));) cJ[UJ++] = JJ[FJ++]
    }! function(JJ) {
      JJ[JJ.NO_COMPRESSION = 0] = "NO_COMPRESSION", JJ[JJ.RLE_COMPRESSION = 1] = "RLE_COMPRESSION", JJ[JJ.ZIPS_COMPRESSION = 2] = "ZIPS_COMPRESSION", JJ[JJ.ZIP_COMPRESSION = 3] = "ZIP_COMPRESSION", JJ[JJ.PIZ_COMPRESSION = 4] = "PIZ_COMPRESSION", JJ[JJ.PXR24_COMPRESSION = 5] = "PXR24_COMPRESSION"
    }(mJ || (mJ = {})),
    function(JJ) {
      JJ[JJ.INCREASING_Y = 0] = "INCREASING_Y", JJ[JJ.DECREASING_Y = 1] = "DECREASING_Y"
    }(QJ || (QJ = {}));
    const kJ = 20000630;

    function pJ(JJ, cJ) {
      if (JJ.getUint32(0, !0) != kJ) throw new Error("Incorrect OpenEXR format");
      const ZJ = JJ.getUint8(4),
        UJ = JJ.getUint8(5),
        eJ = {
          singleTile: !!(2 & UJ),
          longName: !!(4 & UJ),
          deepFormat: !!(8 & UJ),
          multiPart: !!(16 & UJ)
        };
      cJ.value = 8;
      const XJ = {};
      let AJ = !0;
      for (; AJ;) {
        const ZJ = EJ(JJ.buffer, cJ);
        if (ZJ) {
          const UJ = EJ(JJ.buffer, cJ),
            eJ = gJ(JJ, cJ, UJ, KJ(JJ, cJ));
          void 0 === eJ ? FJ.c.Warn(`Unknown header attribute type ${UJ}'.`) : XJ[ZJ] = eJ
        } else AJ = !1
      }
      if (0 != (-5 & UJ)) throw new Error("Unsupported file format");
      return {
        version: ZJ,
        spec: eJ,
        ...XJ
      }
    }
    const dJ = 32768,
      zJ = 65535;

    function NJ(JJ, cJ, ZJ, FJ, UJ) {
      for (; ZJ < JJ;) cJ = cJ << 8 | IJ(FJ, UJ), ZJ += 8;
      return {
        l: cJ >> (ZJ -= JJ) & (1 << JJ) - 1,
        c: cJ,
        lc: ZJ
      }
    }

    function OJ(JJ, cJ, ZJ, FJ) {
      return {
        c: JJ = JJ << 8 | IJ(ZJ, FJ),
        lc: cJ += 8
      }
    }

    function TJ(JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ, qJ) {
      if (JJ == cJ) {
        if (FJ < 8) {
          const JJ = OJ(ZJ, FJ, UJ, eJ);
          ZJ = JJ.c, FJ = JJ.lc
        }
        let JJ = ZJ >> (FJ -= 8);
        if (JJ = new Uint8Array([JJ])[0], AJ.value + JJ > qJ) return null;
        const cJ = XJ[AJ.value - 1];
        for (; JJ-- > 0;) XJ[AJ.value++] = cJ
      } else {
        if (!(AJ.value < qJ)) return null;
        XJ[AJ.value++] = JJ
      }
      return {
        c: ZJ,
        lc: FJ
      }
    }
    const CJ = new Array(59);

    function uJ(JJ, cJ, ZJ, FJ, UJ, eJ) {
      const XJ = cJ;
      let AJ = 0,
        qJ = 0;
      for (; FJ <= UJ; FJ++) {
        if (XJ.value - cJ.value > ZJ) return;
        let jJ = NJ(6, AJ, qJ, JJ, XJ);
        const YJ = jJ.l;
        if (AJ = jJ.c, qJ = jJ.lc, eJ[FJ] = YJ, YJ == rJ) {
          if (XJ.value - cJ.value > ZJ) throw new Error("Error in HufUnpackEncTable");
          jJ = NJ(8, AJ, qJ, JJ, XJ);
          let YJ = jJ.l + vJ;
          if (AJ = jJ.c, qJ = jJ.lc, FJ + YJ > UJ + 1) throw new Error("Error in HufUnpackEncTable");
          for (; YJ--;) eJ[FJ++] = 0;
          FJ--
        } else if (YJ >= xJ) {
          let JJ = YJ - xJ + 2;
          if (FJ + JJ > UJ + 1) throw new Error("Error in HufUnpackEncTable");
          for (; JJ--;) eJ[FJ++] = 0;
          FJ--
        }
      }! function(JJ) {
        for (let ZJ = 0; ZJ <= 58; ++ZJ) CJ[ZJ] = 0;
        for (let ZJ = 0; ZJ < nJ; ++ZJ) CJ[JJ[ZJ]] += 1;
        let cJ = 0;
        for (let ZJ = 58; ZJ > 0; --ZJ) {
          const JJ = cJ + CJ[ZJ] >> 1;
          CJ[ZJ] = cJ, cJ = JJ
        }
        for (let ZJ = 0; ZJ < nJ; ++ZJ) {
          const cJ = JJ[ZJ];
          cJ > 0 && (JJ[ZJ] = cJ | CJ[cJ]++ << 6)
        }
      }(eJ)
    }

    function iJ(JJ) {
      return 63 & JJ
    }

    function RJ(JJ) {
      return JJ >> 6
    }

    function LJ(JJ, cJ, ZJ, FJ, UJ, eJ) {
      const XJ = ZJ.value,
        AJ = KJ(cJ, ZJ),
        qJ = KJ(cJ, ZJ);
      ZJ.value += 4;
      const jJ = KJ(cJ, ZJ);
      if (ZJ.value += 4, AJ < 0 || AJ >= nJ || qJ < 0 || qJ >= nJ) throw new Error("Wrong HUF_ENCSIZE");
      const YJ = new Array(nJ),
        hJ = new Array(GJ);
      ! function(JJ) {
        for (let cJ = 0; cJ < GJ; cJ++) JJ[cJ] = {}, JJ[cJ].len = 0, JJ[cJ].lit = 0, JJ[cJ].p = null
      }(hJ);
      if (uJ(JJ, ZJ, FJ - (ZJ.value - XJ), AJ, qJ, YJ), jJ > 8 * (FJ - (ZJ.value - XJ))) throw new Error("Wrong hufUncompress");
      ! function(JJ, cJ, ZJ, FJ) {
        for (; cJ <= ZJ; cJ++) {
          const ZJ = RJ(JJ[cJ]),
            UJ = iJ(JJ[cJ]);
          if (ZJ >> UJ) throw new Error("Invalid table entry");
          if (UJ > sJ) {
            const JJ = FJ[ZJ >> UJ - sJ];
            if (JJ.len) throw new Error("Invalid table entry");
            if (JJ.lit++, JJ.p) {
              const cJ = JJ.p;
              JJ.p = new Array(JJ.lit);
              for (let ZJ = 0; ZJ < JJ.lit - 1; ++ZJ) JJ.p[ZJ] = cJ[ZJ]
            } else JJ.p = new Array(1);
            JJ.p[JJ.lit - 1] = cJ
          } else if (UJ) {
            let JJ = 0;
            for (let eJ = 1 << sJ - UJ; eJ > 0; eJ--) {
              const eJ = FJ[(ZJ << sJ - UJ) + JJ];
              if (eJ.len || eJ.p) throw new Error("Invalid table entry");
              eJ.len = UJ, eJ.lit = cJ, JJ++
            }
          }
        }
      }(YJ, AJ, qJ, hJ),
      function(JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ, qJ) {
        let jJ = 0,
          YJ = 0;
        const hJ = XJ,
          DJ = Math.trunc(FJ.value + (UJ + 7) / 8);
        for (; FJ.value < DJ;) {
          let UJ = OJ(jJ, YJ, ZJ, FJ);
          for (jJ = UJ.c, YJ = UJ.lc; YJ >= sJ;) {
            const XJ = cJ[jJ >> YJ - sJ & fJ];
            if (XJ.len) {
              YJ -= XJ.len;
              const JJ = TJ(XJ.lit, eJ, jJ, YJ, ZJ, FJ, AJ, qJ, hJ);
              JJ && (jJ = JJ.c, YJ = JJ.lc)
            } else {
              if (!XJ.p) throw new Error("hufDecode issues");
              let cJ;
              for (cJ = 0; cJ < XJ.lit; cJ++) {
                const sJ = iJ(JJ[XJ.p[cJ]]);
                for (; YJ < sJ && FJ.value < DJ;) UJ = OJ(jJ, YJ, ZJ, FJ), jJ = UJ.c, YJ = UJ.lc;
                if (YJ >= sJ && RJ(JJ[XJ.p[cJ]]) == (jJ >> YJ - sJ & (1 << sJ) - 1)) {
                  YJ -= sJ;
                  const JJ = TJ(XJ.p[cJ], eJ, jJ, YJ, ZJ, FJ, AJ, qJ, hJ);
                  JJ && (jJ = JJ.c, YJ = JJ.lc);
                  break
                }
              }
              if (cJ == XJ.lit) throw new Error("HufDecode issues")
            }
          }
        }
        const nJ = 8 - UJ & 7;
        for (jJ >>= nJ, YJ -= nJ; YJ > 0;) {
          const JJ = cJ[jJ << sJ - YJ & fJ];
          if (!JJ.len) throw new Error("HufDecode issues");
          {
            YJ -= JJ.len;
            const cJ = TJ(JJ.lit, eJ, jJ, YJ, ZJ, FJ, AJ, qJ, hJ);
            cJ && (jJ = cJ.c, YJ = cJ.lc)
          }
        }
      }(YJ, hJ, JJ, ZJ, jJ, qJ, eJ, UJ, {
        value: 0
      })
    }

    function aJ(JJ) {
      return 65535 & JJ
    }

    function BJ(JJ) {
      const cJ = aJ(JJ);
      return cJ > 32767 ? cJ - 65536 : cJ
    }

    function tJ(JJ, cJ) {
      const ZJ = BJ(JJ),
        FJ = BJ(cJ),
        UJ = ZJ + (1 & FJ) + (FJ >> 1);
      return {
        a: UJ,
        b: UJ - FJ
      }
    }

    function oJ(JJ, cJ) {
      const ZJ = aJ(JJ),
        FJ = aJ(cJ),
        UJ = ZJ - (FJ >> 1) & zJ;
      return {
        a: FJ + UJ - dJ & zJ,
        b: UJ
      }
    }

    function lJ(JJ, cJ, ZJ, FJ, UJ, eJ, XJ) {
      const AJ = XJ < 16384,
        qJ = ZJ > UJ ? UJ : ZJ;
      let jJ, YJ, hJ = 1;
      for (; hJ <= qJ;) hJ <<= 1;
      for (hJ >>= 1, jJ = hJ, hJ >>= 1; hJ >= 1;) {
        YJ = 0;
        const XJ = YJ + eJ * (UJ - jJ),
          qJ = eJ * hJ,
          DJ = eJ * jJ,
          sJ = FJ * hJ,
          nJ = FJ * jJ;
        let GJ, fJ, xJ, rJ;
        for (; YJ <= XJ; YJ += DJ) {
          let UJ = YJ;
          const eJ = YJ + FJ * (ZJ - jJ);
          for (; UJ <= eJ; UJ += nJ) {
            const ZJ = UJ + sJ,
              FJ = UJ + qJ,
              eJ = FJ + sJ;
            if (AJ) {
              let XJ = tJ(JJ[UJ + cJ], JJ[FJ + cJ]);
              GJ = XJ.a, xJ = XJ.b, XJ = tJ(JJ[ZJ + cJ], JJ[eJ + cJ]), fJ = XJ.a, rJ = XJ.b, XJ = tJ(GJ, fJ), JJ[UJ + cJ] = XJ.a, JJ[ZJ + cJ] = XJ.b, XJ = tJ(xJ, rJ), JJ[FJ + cJ] = XJ.a, JJ[eJ + cJ] = XJ.b
            } else {
              let XJ = oJ(JJ[UJ + cJ], JJ[FJ + cJ]);
              GJ = XJ.a, xJ = XJ.b, XJ = oJ(JJ[ZJ + cJ], JJ[eJ + cJ]), fJ = XJ.a, rJ = XJ.b, XJ = oJ(GJ, fJ), JJ[UJ + cJ] = XJ.a, JJ[ZJ + cJ] = XJ.b, XJ = oJ(xJ, rJ), JJ[FJ + cJ] = XJ.a, JJ[eJ + cJ] = XJ.b
            }
          }
          if (ZJ & hJ) {
            const ZJ = UJ + qJ;
            let FJ;
            FJ = AJ ? tJ(JJ[UJ + cJ], JJ[ZJ + cJ]) : oJ(JJ[UJ + cJ], JJ[ZJ + cJ]), GJ = FJ.a, JJ[ZJ + cJ] = FJ.b, JJ[UJ + cJ] = GJ
          }
        }
        if (UJ & hJ) {
          let UJ = YJ;
          const eJ = YJ + FJ * (ZJ - jJ);
          for (; UJ <= eJ; UJ += nJ) {
            const ZJ = UJ + sJ;
            let FJ;
            FJ = AJ ? tJ(JJ[UJ + cJ], JJ[ZJ + cJ]) : oJ(JJ[UJ + cJ], JJ[ZJ + cJ]), GJ = FJ.a, JJ[ZJ + cJ] = FJ.b, JJ[UJ + cJ] = GJ
          }
        }
        jJ = hJ, hJ >>= 1
      }
      return YJ
    }

    function Jc(JJ) {
      return new DataView(JJ.array.buffer, JJ.offset.value, JJ.size)
    }

    function cc(JJ) {
      const cJ = JJ.viewer.buffer.slice(JJ.offset.value, JJ.offset.value + JJ.size),
        ZJ = new Uint8Array(function(JJ) {
          let cJ = JJ.byteLength;
          const ZJ = [];
          let FJ = 0;
          const UJ = new DataView(JJ);
          for (; cJ > 0;) {
            const JJ = UJ.getInt8(FJ++);
            if (JJ < 0) {
              const eJ = -JJ;
              cJ -= eJ + 1;
              for (let JJ = 0; JJ < eJ; JJ++) ZJ.push(UJ.getUint8(FJ++))
            } else {
              const eJ = JJ;
              cJ -= 2;
              const XJ = UJ.getUint8(FJ++);
              for (let JJ = 0; JJ < eJ + 1; JJ++) ZJ.push(XJ)
            }
          }
          return ZJ
        }(cJ)),
        FJ = new Uint8Array(ZJ.length);
      return HJ(ZJ), PJ(ZJ, FJ), new DataView(FJ.buffer)
    }

    function Zc(JJ) {
      const cJ = JJ.array.slice(JJ.offset.value, JJ.offset.value + JJ.size),
        ZJ = fflate.unzlibSync(cJ),
        FJ = new Uint8Array(ZJ.length);
      return HJ(ZJ), PJ(ZJ, FJ), new DataView(FJ.buffer)
    }

    function Fc(JJ) {
      const cJ = JJ.array.slice(JJ.offset.value, JJ.offset.value + JJ.size),
        ZJ = fflate.unzlibSync(cJ),
        FJ = JJ.lines * JJ.channels * JJ.width,
        UJ = 1 == JJ.type ? new Uint16Array(FJ) : new Uint32Array(FJ);
      let eJ = 0,
        XJ = 0;
      const AJ = new Array(4);
      for (let qJ = 0; qJ < JJ.lines; qJ++)
        for (let cJ = 0; cJ < JJ.channels; cJ++) {
          let cJ = 0;
          switch (JJ.type) {
            case 1:
              AJ[0] = eJ, AJ[1] = AJ[0] + JJ.width, eJ = AJ[1] + JJ.width;
              for (let FJ = 0; FJ < JJ.width; ++FJ) {
                cJ += ZJ[AJ[0]++] << 8 | ZJ[AJ[1]++], UJ[XJ] = cJ, XJ++
              }
              break;
            case 2:
              AJ[0] = eJ, AJ[1] = AJ[0] + JJ.width, AJ[2] = AJ[1] + JJ.width, eJ = AJ[2] + JJ.width;
              for (let FJ = 0; FJ < JJ.width; ++FJ) {
                cJ += ZJ[AJ[0]++] << 24 | ZJ[AJ[1]++] << 16 | ZJ[AJ[2]++] << 8, UJ[XJ] = cJ, XJ++
              }
          }
        }
      return new DataView(UJ.buffer)
    }

    function Uc(JJ) {
      const cJ = JJ.viewer,
        ZJ = {
          value: JJ.offset.value
        },
        FJ = new Uint16Array(JJ.width * JJ.scanlineBlockSize * (JJ.channels * JJ.type)),
        UJ = new Uint8Array(DJ);
      let eJ = 0;
      const XJ = new Array(JJ.channels);
      for (let jJ = 0; jJ < JJ.channels; jJ++) XJ[jJ] = {}, XJ[jJ].start = eJ, XJ[jJ].end = XJ[jJ].start, XJ[jJ].nx = JJ.width, XJ[jJ].ny = JJ.lines, XJ[jJ].size = JJ.type, eJ += XJ[jJ].nx * XJ[jJ].ny * XJ[jJ].size;
      const AJ = SJ(cJ, ZJ),
        qJ = SJ(cJ, ZJ);
      if (qJ >= DJ) throw new Error("Wrong PIZ_COMPRESSION BITMAP_SIZE");
      if (AJ <= qJ)
        for (let jJ = 0; jJ < qJ - AJ + 1; jJ++) UJ[jJ + AJ] = yJ(cJ, ZJ);
      const YJ = new Uint16Array(hJ),
        sJ = function(JJ, cJ) {
          let ZJ = 0;
          for (let UJ = 0; UJ < hJ; ++UJ)(0 == UJ || JJ[UJ >> 3] & 1 << (7 & UJ)) && (cJ[ZJ++] = UJ);
          const FJ = ZJ - 1;
          for (; ZJ < hJ;) cJ[ZJ++] = 0;
          return FJ
        }(UJ, YJ),
        nJ = KJ(cJ, ZJ);
      LJ(JJ.array, cJ, ZJ, nJ, FJ, eJ);
      for (let jJ = 0; jJ < JJ.channels; ++jJ) {
        const JJ = XJ[jJ];
        for (let cJ = 0; cJ < XJ[jJ].size; ++cJ) lJ(FJ, JJ.start + cJ, JJ.nx, JJ.size, JJ.ny, JJ.nx * JJ.size, sJ)
      }! function(JJ, cJ, ZJ) {
        for (let FJ = 0; FJ < ZJ; ++FJ) cJ[FJ] = JJ[cJ[FJ]]
      }(YJ, FJ, eJ);
      let GJ = 0;
      const fJ = new Uint8Array(FJ.buffer.byteLength);
      for (let hJ = 0; hJ < JJ.lines; hJ++)
        for (let cJ = 0; cJ < JJ.channels; cJ++) {
          const JJ = XJ[cJ],
            ZJ = JJ.nx * JJ.size,
            UJ = new Uint8Array(FJ.buffer, JJ.end * jJ, ZJ * jJ);
          fJ.set(UJ, GJ), GJ += ZJ * jJ, JJ.end += ZJ
        }
      return new DataView(fJ.buffer)
    }
    var ec, Xc = ZJ(38879);
    ! function(JJ) {
      JJ[JJ.Float = 0] = "Float", JJ[JJ.HalfFloat = 1] = "HalfFloat"
    }(ec || (ec = {}));
    class Ac {}
    async function qc(JJ, cJ, ZJ, FJ) {
      const UJ = {
        size: 0,
        viewer: cJ,
        array: new Uint8Array(cJ.buffer),
        offset: ZJ,
        width: JJ.dataWindow.xMax - JJ.dataWindow.xMin + 1,
        height: JJ.dataWindow.yMax - JJ.dataWindow.yMin + 1,
        channels: JJ.channels.length,
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
      switch (JJ.compression) {
        case mJ.NO_COMPRESSION:
          UJ.lines = 1, UJ.uncompress = Jc;
          break;
        case mJ.RLE_COMPRESSION:
          UJ.lines = 1, UJ.uncompress = cc;
          break;
        case mJ.ZIPS_COMPRESSION:
          UJ.lines = 1, UJ.uncompress = Zc, await Xc.j.LoadScriptAsync(Ac.FFLATEUrl);
          break;
        case mJ.ZIP_COMPRESSION:
          UJ.lines = 16, UJ.uncompress = Zc, await Xc.j.LoadScriptAsync(Ac.FFLATEUrl);
          break;
        case mJ.PIZ_COMPRESSION:
          UJ.lines = 32, UJ.uncompress = Uc;
          break;
        case mJ.PXR24_COMPRESSION:
          UJ.lines = 16, UJ.uncompress = Fc, await Xc.j.LoadScriptAsync(Ac.FFLATEUrl);
          break;
        default:
          throw new Error(mJ[JJ.compression] + " is unsupported")
      }
      UJ.scanlineBlockSize = UJ.lines;
      const eJ = {};
      for (const AJ of JJ.channels) switch (AJ.name) {
        case "R":
        case "G":
        case "B":
        case "A":
        case "Y":
          eJ[AJ.name] = !0, UJ.type = AJ.pixelType
      }
      let XJ = !1;
      if (eJ.R && eJ.G && eJ.B && eJ.A) UJ.outputChannels = 4, UJ.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (eJ.R && eJ.G && eJ.B) XJ = !0, UJ.outputChannels = 4, UJ.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (eJ.R && eJ.G) UJ.outputChannels = 2, UJ.decodeChannels = {
        R: 0,
        G: 1
      };
      else if (eJ.R) UJ.outputChannels = 1, UJ.decodeChannels = {
        R: 0
      };
      else {
        if (!eJ.Y) throw new Error("EXRLoader.parse: file contains unsupported data channels.");
        UJ.outputChannels = 1, UJ.decodeChannels = {
          Y: 0
        }
      }
      if (1 === UJ.type) switch (FJ) {
        case ec.Float:
          UJ.getter = wJ, UJ.inputSize = jJ;
          break;
        case ec.HalfFloat:
          UJ.getter = SJ, UJ.inputSize = jJ
      } else {
        if (2 !== UJ.type) throw new Error("Unsupported pixelType " + UJ.type + " for " + JJ.compression);
        switch (FJ) {
          case ec.Float:
            UJ.getter = bJ, UJ.inputSize = AJ;
            break;
          case ec.HalfFloat:
            UJ.getter = WJ, UJ.inputSize = AJ
        }
      }
      UJ.blockCount = UJ.height / UJ.scanlineBlockSize;
      for (let AJ = 0; AJ < UJ.blockCount; AJ++) MJ(cJ, ZJ);
      const qJ = UJ.width * UJ.height * UJ.outputChannels;
      switch (FJ) {
        case ec.Float:
          UJ.byteArray = new Float32Array(qJ), UJ.textureType = 1, XJ && UJ.byteArray.fill(1, 0, qJ);
          break;
        case ec.HalfFloat:
          UJ.byteArray = new Uint16Array(qJ), UJ.textureType = 2, XJ && UJ.byteArray.fill(15360, 0, qJ);
          break;
        default:
          throw new Error("Unsupported type: " + FJ)
      }
      let YJ = 0;
      for (const AJ of JJ.channels) void 0 !== UJ.decodeChannels[AJ.name] && (UJ.channelLineOffsets[AJ.name] = YJ * UJ.width), YJ += 2 * AJ.pixelType;
      return UJ.bytesPerLine = UJ.width * YJ, UJ.outLineWidth = UJ.width * UJ.outputChannels, "INCREASING_Y" === JJ.lineOrder ? UJ.scanOrder = JJ => JJ : UJ.scanOrder = JJ => UJ.height - 1 - JJ, 4 == UJ.outputChannels ? (UJ.format = 5, UJ.linearSpace = !0) : (UJ.format = 6, UJ.linearSpace = !1), UJ
    }

    function jc(JJ, cJ, ZJ, FJ) {
      const UJ = {
        value: 0
      };
      for (let eJ = 0; eJ < JJ.height / JJ.scanlineBlockSize; eJ++) {
        const XJ = VJ(ZJ, FJ) - cJ.dataWindow.yMin;
        JJ.size = KJ(ZJ, FJ), JJ.lines = XJ + JJ.scanlineBlockSize > JJ.height ? JJ.height - XJ : JJ.scanlineBlockSize;
        const AJ = JJ.size < JJ.lines * JJ.bytesPerLine && JJ.uncompress ? JJ.uncompress(JJ) : Jc(JJ);
        FJ.value += JJ.size;
        for (let ZJ = 0; ZJ < JJ.scanlineBlockSize; ZJ++) {
          const FJ = eJ * JJ.scanlineBlockSize,
            XJ = ZJ + JJ.scanOrder(FJ);
          if (XJ >= JJ.height) continue;
          const qJ = ZJ * JJ.bytesPerLine,
            jJ = (JJ.height - 1 - XJ) * JJ.outLineWidth;
          for (let ZJ = 0; ZJ < JJ.channels; ZJ++) {
            const FJ = cJ.channels[ZJ].name,
              eJ = JJ.channelLineOffsets[FJ],
              XJ = JJ.decodeChannels[FJ];
            if (void 0 !== XJ) {
              UJ.value = qJ + eJ;
              for (let cJ = 0; cJ < JJ.width; cJ++) {
                const ZJ = jJ + cJ * JJ.outputChannels + XJ;
                JJ.byteArray && (JJ.byteArray[ZJ] = JJ.getter(AJ, UJ))
              }
            }
          }
        }
      }
    }
    Ac.DefaultOutputType = ec.HalfFloat, Ac.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class Yc {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(JJ, cJ, ZJ, FJ, UJ) {
        throw ".exr not supported in Cube."
      }
      loadData(JJ, cJ, ZJ) {
        const UJ = new DataView(JJ.buffer),
          eJ = {
            value: 0
          },
          XJ = pJ(UJ, eJ);
        qc(XJ, UJ, eJ, Ac.DefaultOutputType).then((JJ => {
          jc(JJ, XJ, UJ, eJ);
          const FJ = XJ.dataWindow.xMax - XJ.dataWindow.xMin + 1,
            AJ = XJ.dataWindow.yMax - XJ.dataWindow.yMin + 1;
          ZJ(FJ, AJ, cJ.generateMipMaps, !1, (() => {
            const ZJ = cJ.gn();
            cJ.format = XJ.format, cJ.type = JJ.textureType, cJ.invertY = !1, cJ._gammaSpace = !XJ.linearSpace, JJ.byteArray && ZJ._uploadDataToTextureDirectly(cJ, JJ.byteArray, 0, 0, void 0, !0)
          }))
        })).catch((JJ => {
          FJ.c.Error("Failed to load EXR texture: ", JJ)
        }))
      }
    }
    async function hc(JJ) {
      const cJ = new DataView(JJ),
        ZJ = {
          value: 0
        },
        UJ = pJ(cJ, ZJ);
      try {
        const JJ = await qc(UJ, cJ, ZJ, ec.Float);
        return jc(JJ, UJ, cJ, ZJ), JJ.byteArray ? {
          width: UJ.dataWindow.xMax - UJ.dataWindow.xMin + 1,
          height: UJ.dataWindow.yMax - UJ.dataWindow.yMin + 1,
          data: new Float32Array(JJ.byteArray)
        } : (FJ.c.Error("Failed to decode EXR data: No byte array available."), {
          width: 0,
          height: 0,
          data: null
        })
      } catch (eJ) {
        FJ.c.Error("Failed to load EXR data: ", eJ)
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
for (const JJ in modules) Object.freeze(modules[JJ]);