export const id = 633;
export const ids = [633];
export const modules = {
  54040: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      ReadExrDataAsync: () => Zi,
      _ExrTextureLoader: () => ti
    });
    var mW = OW(39911),
      EW = OW(38285),
      NW = OW(41586);
    const PW = 4,
      LW = 4,
      cW = 1,
      wW = 2,
      tW = 8,
      ZW = 65536,
      xW = ZW >> 3,
      lW = 14,
      AW = 65537,
      bW = 1 << lW,
      jW = bW - 1,
      UW = 59,
      kW = 63,
      sW = 2 + kW - UW;
    var MW, KW;

    function SW(WW, iW) {
      const OW = new Uint8Array(WW);
      let mW = 0;
      for (; 0 != OW[iW.value + mW];) mW += 1;
      const EW = (new TextDecoder).decode(OW.slice(iW.value, iW.value + mW));
      return iW.value = iW.value + mW + 1, EW
    }

    function YW(WW, iW) {
      const OW = WW.getInt32(iW.value, !0);
      return iW.value += PW, OW
    }

    function yW(WW, iW) {
      const OW = WW.getUint32(iW.value, !0);
      return iW.value += PW, OW
    }

    function TW(WW, iW) {
      const OW = WW.getUint8(iW.value);
      return iW.value += cW, OW
    }

    function JW(WW, iW) {
      const OW = WW.getUint16(iW.value, !0);
      return iW.value += wW, OW
    }

    function hW(WW, iW) {
      const OW = WW[iW.value];
      return iW.value += cW, OW
    }

    function HW(WW, iW) {
      let OW;
      return OW = "getBigInt64" in DataView.prototype ? Number(WW.getBigInt64(iW.value, !0)) : WW.getUint32(iW.value + 4, !0) + Number(WW.getUint32(iW.value, !0) << 32), iW.value += tW, OW
    }

    function nW(WW, iW) {
      const OW = WW.getFloat32(iW.value, !0);
      return iW.value += LW, OW
    }

    function uW(WW, iW) {
      return (0, NW.d)(JW(WW, iW))
    }

    function oW(WW, iW) {
      return (0, NW.k)((0, EW.Clamp)(nW(WW, iW), -NW.h, NW.h))
    }

    function dW(WW, iW, OW, mW) {
      switch (OW) {
        case "string":
        case "stringvector":
        case "iccProfile":
          return function(WW, iW, OW) {
            const mW = (new TextDecoder).decode(new Uint8Array(WW).slice(iW.value, iW.value + OW));
            return iW.value = iW.value + OW, mW
          }(WW.buffer, iW, mW);
        case "chlist":
          return function(WW, iW, OW) {
            const mW = iW.value,
              EW = [];
            for (; iW.value < mW + OW - 1;) {
              const OW = SW(WW.buffer, iW),
                mW = YW(WW, iW),
                NW = TW(WW, iW);
              iW.value += 3;
              const PW = YW(WW, iW),
                LW = YW(WW, iW);
              EW.push({
                name: OW,
                pixelType: mW,
                pLinear: NW,
                xSampling: PW,
                ySampling: LW
              })
            }
            return iW.value += 1, EW
          }(WW, iW, mW);
        case "chromaticities":
          return function(WW, iW) {
            return {
              redX: nW(WW, iW),
              redY: nW(WW, iW),
              greenX: nW(WW, iW),
              greenY: nW(WW, iW),
              blueX: nW(WW, iW),
              blueY: nW(WW, iW),
              whiteX: nW(WW, iW),
              whiteY: nW(WW, iW)
            }
          }(WW, iW);
        case "compression":
          return function(WW, iW) {
            return TW(WW, iW)
          }(WW, iW);
        case "box2i":
          return function(WW, iW) {
            return {
              xMin: YW(WW, iW),
              yMin: YW(WW, iW),
              xMax: YW(WW, iW),
              yMax: YW(WW, iW)
            }
          }(WW, iW);
        case "lineOrder":
          return function(WW, iW) {
            const OW = TW(WW, iW);
            return KW[OW]
          }(WW, iW);
        case "float":
          return nW(WW, iW);
        case "v2f":
          return function(WW, iW) {
            return [nW(WW, iW), nW(WW, iW)]
          }(WW, iW);
        case "v3f":
          return function(WW, iW) {
            return [nW(WW, iW), nW(WW, iW), nW(WW, iW)]
          }(WW, iW);
        case "int":
          return YW(WW, iW);
        case "rational":
          return function(WW, iW) {
            return [YW(WW, iW), yW(WW, iW)]
          }(WW, iW);
        case "timecode":
          return function(WW, iW) {
            return [yW(WW, iW), yW(WW, iW)]
          }(WW, iW);
        case "preview":
          return iW.value += mW, "skipped";
        default:
          return void(iW.value += mW)
      }
    }

    function eW(WW) {
      for (let iW = 1; iW < WW.length; iW++) {
        const OW = WW[iW - 1] + WW[iW] - 128;
        WW[iW] = OW
      }
    }

    function vW(WW, iW) {
      let OW = 0,
        mW = Math.floor((WW.length + 1) / 2),
        EW = 0;
      const NW = WW.length - 1;
      for (; !(EW > NW) && (iW[EW++] = WW[OW++], !(EW > NW));) iW[EW++] = WW[mW++]
    }! function(WW) {
      WW[WW.NO_COMPRESSION = 0] = "NO_COMPRESSION", WW[WW.RLE_COMPRESSION = 1] = "RLE_COMPRESSION", WW[WW.ZIPS_COMPRESSION = 2] = "ZIPS_COMPRESSION", WW[WW.ZIP_COMPRESSION = 3] = "ZIP_COMPRESSION", WW[WW.PIZ_COMPRESSION = 4] = "PIZ_COMPRESSION", WW[WW.PXR24_COMPRESSION = 5] = "PXR24_COMPRESSION"
    }(MW || (MW = {})),
    function(WW) {
      WW[WW.INCREASING_Y = 0] = "INCREASING_Y", WW[WW.DECREASING_Y = 1] = "DECREASING_Y"
    }(KW || (KW = {}));
    const gW = 20000630;

    function DW(WW, iW) {
      if (WW.getUint32(0, !0) != gW) throw new Error("Incorrect OpenEXR format");
      const OW = WW.getUint8(4),
        EW = WW.getUint8(5),
        NW = {
          singleTile: !!(2 & EW),
          longName: !!(4 & EW),
          deepFormat: !!(8 & EW),
          multiPart: !!(16 & EW)
        };
      iW.value = 8;
      const PW = {};
      let LW = !0;
      for (; LW;) {
        const OW = SW(WW.buffer, iW);
        if (OW) {
          const EW = SW(WW.buffer, iW),
            NW = dW(WW, iW, EW, yW(WW, iW));
          void 0 === NW ? mW.b.Warn(`Unknown header attribute type ${EW}'.`) : PW[OW] = NW
        } else LW = !1
      }
      if (0 != (-5 & EW)) throw new Error("Unsupported file format");
      return {
        version: OW,
        spec: NW,
        ...PW
      }
    }
    const VW = 32768,
      pW = 65535;

    function fW(WW, iW, OW, mW, EW) {
      for (; OW < WW;) iW = iW << 8 | hW(mW, EW), OW += 8;
      return {
        l: iW >> (OW -= WW) & (1 << WW) - 1,
        c: iW,
        lc: OW
      }
    }

    function CW(WW, iW, OW, mW) {
      return {
        c: WW = WW << 8 | hW(OW, mW),
        lc: iW += 8
      }
    }

    function XW(WW, iW, OW, mW, EW, NW, PW, LW, cW) {
      if (WW == iW) {
        if (mW < 8) {
          const WW = CW(OW, mW, EW, NW);
          OW = WW.c, mW = WW.lc
        }
        let WW = OW >> (mW -= 8);
        if (WW = new Uint8Array([WW])[0], LW.value + WW > cW) return null;
        const iW = PW[LW.value - 1];
        for (; WW-- > 0;) PW[LW.value++] = iW
      } else {
        if (!(LW.value < cW)) return null;
        PW[LW.value++] = WW
      }
      return {
        c: OW,
        lc: mW
      }
    }
    const BW = new Array(59);

    function qW(WW, iW, OW, mW, EW, NW) {
      const PW = iW;
      let LW = 0,
        cW = 0;
      for (; mW <= EW; mW++) {
        if (PW.value - iW.value > OW) return;
        let wW = fW(6, LW, cW, WW, PW);
        const tW = wW.l;
        if (LW = wW.c, cW = wW.lc, NW[mW] = tW, tW == kW) {
          if (PW.value - iW.value > OW) throw new Error("Error in HufUnpackEncTable");
          wW = fW(8, LW, cW, WW, PW);
          let tW = wW.l + sW;
          if (LW = wW.c, cW = wW.lc, mW + tW > EW + 1) throw new Error("Error in HufUnpackEncTable");
          for (; tW--;) NW[mW++] = 0;
          mW--
        } else if (tW >= UW) {
          let WW = tW - UW + 2;
          if (mW + WW > EW + 1) throw new Error("Error in HufUnpackEncTable");
          for (; WW--;) NW[mW++] = 0;
          mW--
        }
      }! function(WW) {
        for (let OW = 0; OW <= 58; ++OW) BW[OW] = 0;
        for (let OW = 0; OW < AW; ++OW) BW[WW[OW]] += 1;
        let iW = 0;
        for (let OW = 58; OW > 0; --OW) {
          const WW = iW + BW[OW] >> 1;
          BW[OW] = iW, iW = WW
        }
        for (let OW = 0; OW < AW; ++OW) {
          const iW = WW[OW];
          iW > 0 && (WW[OW] = iW | BW[iW]++ << 6)
        }
      }(NW)
    }

    function RW(WW) {
      return 63 & WW
    }

    function GW(WW) {
      return WW >> 6
    }

    function IW(WW, iW, OW, mW, EW, NW) {
      const PW = OW.value,
        LW = yW(iW, OW),
        cW = yW(iW, OW);
      OW.value += 4;
      const wW = yW(iW, OW);
      if (OW.value += 4, LW < 0 || LW >= AW || cW < 0 || cW >= AW) throw new Error("Wrong HUF_ENCSIZE");
      const tW = new Array(AW),
        ZW = new Array(bW);
      ! function(WW) {
        for (let iW = 0; iW < bW; iW++) WW[iW] = {}, WW[iW].len = 0, WW[iW].lit = 0, WW[iW].p = null
      }(ZW);
      if (qW(WW, OW, mW - (OW.value - PW), LW, cW, tW), wW > 8 * (mW - (OW.value - PW))) throw new Error("Wrong hufUncompress");
      ! function(WW, iW, OW, mW) {
        for (; iW <= OW; iW++) {
          const OW = GW(WW[iW]),
            EW = RW(WW[iW]);
          if (OW >> EW) throw new Error("Invalid table entry");
          if (EW > lW) {
            const WW = mW[OW >> EW - lW];
            if (WW.len) throw new Error("Invalid table entry");
            if (WW.lit++, WW.p) {
              const iW = WW.p;
              WW.p = new Array(WW.lit);
              for (let OW = 0; OW < WW.lit - 1; ++OW) WW.p[OW] = iW[OW]
            } else WW.p = new Array(1);
            WW.p[WW.lit - 1] = iW
          } else if (EW) {
            let WW = 0;
            for (let NW = 1 << lW - EW; NW > 0; NW--) {
              const NW = mW[(OW << lW - EW) + WW];
              if (NW.len || NW.p) throw new Error("Invalid table entry");
              NW.len = EW, NW.lit = iW, WW++
            }
          }
        }
      }(tW, LW, cW, ZW),
      function(WW, iW, OW, mW, EW, NW, PW, LW, cW) {
        let wW = 0,
          tW = 0;
        const ZW = PW,
          xW = Math.trunc(mW.value + (EW + 7) / 8);
        for (; mW.value < xW;) {
          let EW = CW(wW, tW, OW, mW);
          for (wW = EW.c, tW = EW.lc; tW >= lW;) {
            const PW = iW[wW >> tW - lW & jW];
            if (PW.len) {
              tW -= PW.len;
              const WW = XW(PW.lit, NW, wW, tW, OW, mW, LW, cW, ZW);
              WW && (wW = WW.c, tW = WW.lc)
            } else {
              if (!PW.p) throw new Error("hufDecode issues");
              let iW;
              for (iW = 0; iW < PW.lit; iW++) {
                const lW = RW(WW[PW.p[iW]]);
                for (; tW < lW && mW.value < xW;) EW = CW(wW, tW, OW, mW), wW = EW.c, tW = EW.lc;
                if (tW >= lW && GW(WW[PW.p[iW]]) == (wW >> tW - lW & (1 << lW) - 1)) {
                  tW -= lW;
                  const WW = XW(PW.p[iW], NW, wW, tW, OW, mW, LW, cW, ZW);
                  WW && (wW = WW.c, tW = WW.lc);
                  break
                }
              }
              if (iW == PW.lit) throw new Error("HufDecode issues")
            }
          }
        }
        const AW = 8 - EW & 7;
        for (wW >>= AW, tW -= AW; tW > 0;) {
          const WW = iW[wW << lW - tW & jW];
          if (!WW.len) throw new Error("HufDecode issues");
          {
            tW -= WW.len;
            const iW = XW(WW.lit, NW, wW, tW, OW, mW, LW, cW, ZW);
            iW && (wW = iW.c, tW = iW.lc)
          }
        }
      }(tW, ZW, WW, OW, wW, cW, NW, EW, {
        value: 0
      })
    }

    function aW(WW) {
      return 65535 & WW
    }

    function rW(WW) {
      const iW = aW(WW);
      return iW > 32767 ? iW - 65536 : iW
    }

    function zW(WW, iW) {
      const OW = rW(WW),
        mW = rW(iW),
        EW = OW + (1 & mW) + (mW >> 1);
      return {
        a: EW,
        b: EW - mW
      }
    }

    function FW(WW, iW) {
      const OW = aW(WW),
        mW = aW(iW),
        EW = OW - (mW >> 1) & pW;
      return {
        a: mW + EW - VW & pW,
        b: EW
      }
    }

    function QW(WW, iW, OW, mW, EW, NW, PW) {
      const LW = PW < 16384,
        cW = OW > EW ? EW : OW;
      let wW, tW, ZW = 1;
      for (; ZW <= cW;) ZW <<= 1;
      for (ZW >>= 1, wW = ZW, ZW >>= 1; ZW >= 1;) {
        tW = 0;
        const PW = tW + NW * (EW - wW),
          cW = NW * ZW,
          xW = NW * wW,
          lW = mW * ZW,
          AW = mW * wW;
        let bW, jW, UW, kW;
        for (; tW <= PW; tW += xW) {
          let EW = tW;
          const NW = tW + mW * (OW - wW);
          for (; EW <= NW; EW += AW) {
            const OW = EW + lW,
              mW = EW + cW,
              NW = mW + lW;
            if (LW) {
              let PW = zW(WW[EW + iW], WW[mW + iW]);
              bW = PW.a, UW = PW.b, PW = zW(WW[OW + iW], WW[NW + iW]), jW = PW.a, kW = PW.b, PW = zW(bW, jW), WW[EW + iW] = PW.a, WW[OW + iW] = PW.b, PW = zW(UW, kW), WW[mW + iW] = PW.a, WW[NW + iW] = PW.b
            } else {
              let PW = FW(WW[EW + iW], WW[mW + iW]);
              bW = PW.a, UW = PW.b, PW = FW(WW[OW + iW], WW[NW + iW]), jW = PW.a, kW = PW.b, PW = FW(bW, jW), WW[EW + iW] = PW.a, WW[OW + iW] = PW.b, PW = FW(UW, kW), WW[mW + iW] = PW.a, WW[NW + iW] = PW.b
            }
          }
          if (OW & ZW) {
            const OW = EW + cW;
            let mW;
            mW = LW ? zW(WW[EW + iW], WW[OW + iW]) : FW(WW[EW + iW], WW[OW + iW]), bW = mW.a, WW[OW + iW] = mW.b, WW[EW + iW] = bW
          }
        }
        if (EW & ZW) {
          let EW = tW;
          const NW = tW + mW * (OW - wW);
          for (; EW <= NW; EW += AW) {
            const OW = EW + lW;
            let mW;
            mW = LW ? zW(WW[EW + iW], WW[OW + iW]) : FW(WW[EW + iW], WW[OW + iW]), bW = mW.a, WW[OW + iW] = mW.b, WW[EW + iW] = bW
          }
        }
        wW = ZW, ZW >>= 1
      }
      return tW
    }

    function Wi(WW) {
      return new DataView(WW.array.buffer, WW.offset.value, WW.size)
    }

    function ii(WW) {
      const iW = WW.viewer.buffer.slice(WW.offset.value, WW.offset.value + WW.size),
        OW = new Uint8Array(function(WW) {
          let iW = WW.byteLength;
          const OW = [];
          let mW = 0;
          const EW = new DataView(WW);
          for (; iW > 0;) {
            const WW = EW.getInt8(mW++);
            if (WW < 0) {
              const NW = -WW;
              iW -= NW + 1;
              for (let WW = 0; WW < NW; WW++) OW.push(EW.getUint8(mW++))
            } else {
              const NW = WW;
              iW -= 2;
              const PW = EW.getUint8(mW++);
              for (let WW = 0; WW < NW + 1; WW++) OW.push(PW)
            }
          }
          return OW
        }(iW)),
        mW = new Uint8Array(OW.length);
      return eW(OW), vW(OW, mW), new DataView(mW.buffer)
    }

    function Oi(WW) {
      const iW = WW.array.slice(WW.offset.value, WW.offset.value + WW.size),
        OW = fflate.unzlibSync(iW),
        mW = new Uint8Array(OW.length);
      return eW(OW), vW(OW, mW), new DataView(mW.buffer)
    }

    function mi(WW) {
      const iW = WW.array.slice(WW.offset.value, WW.offset.value + WW.size),
        OW = fflate.unzlibSync(iW),
        mW = WW.lines * WW.channels * WW.width,
        EW = 1 == WW.type ? new Uint16Array(mW) : new Uint32Array(mW);
      let NW = 0,
        PW = 0;
      const LW = new Array(4);
      for (let cW = 0; cW < WW.lines; cW++)
        for (let iW = 0; iW < WW.channels; iW++) {
          let iW = 0;
          switch (WW.type) {
            case 1:
              LW[0] = NW, LW[1] = LW[0] + WW.width, NW = LW[1] + WW.width;
              for (let mW = 0; mW < WW.width; ++mW) {
                iW += OW[LW[0]++] << 8 | OW[LW[1]++], EW[PW] = iW, PW++
              }
              break;
            case 2:
              LW[0] = NW, LW[1] = LW[0] + WW.width, LW[2] = LW[1] + WW.width, NW = LW[2] + WW.width;
              for (let mW = 0; mW < WW.width; ++mW) {
                iW += OW[LW[0]++] << 24 | OW[LW[1]++] << 16 | OW[LW[2]++] << 8, EW[PW] = iW, PW++
              }
          }
        }
      return new DataView(EW.buffer)
    }

    function Ei(WW) {
      const iW = WW.viewer,
        OW = {
          value: WW.offset.value
        },
        mW = new Uint16Array(WW.width * WW.scanlineBlockSize * (WW.channels * WW.type)),
        EW = new Uint8Array(xW);
      let NW = 0;
      const PW = new Array(WW.channels);
      for (let wW = 0; wW < WW.channels; wW++) PW[wW] = {}, PW[wW].start = NW, PW[wW].end = PW[wW].start, PW[wW].nx = WW.width, PW[wW].ny = WW.lines, PW[wW].size = WW.type, NW += PW[wW].nx * PW[wW].ny * PW[wW].size;
      const LW = JW(iW, OW),
        cW = JW(iW, OW);
      if (cW >= xW) throw new Error("Wrong PIZ_COMPRESSION BITMAP_SIZE");
      if (LW <= cW)
        for (let wW = 0; wW < cW - LW + 1; wW++) EW[wW + LW] = TW(iW, OW);
      const tW = new Uint16Array(ZW),
        lW = function(WW, iW) {
          let OW = 0;
          for (let EW = 0; EW < ZW; ++EW)(0 == EW || WW[EW >> 3] & 1 << (7 & EW)) && (iW[OW++] = EW);
          const mW = OW - 1;
          for (; OW < ZW;) iW[OW++] = 0;
          return mW
        }(EW, tW),
        AW = yW(iW, OW);
      IW(WW.array, iW, OW, AW, mW, NW);
      for (let wW = 0; wW < WW.channels; ++wW) {
        const WW = PW[wW];
        for (let iW = 0; iW < PW[wW].size; ++iW) QW(mW, WW.start + iW, WW.nx, WW.size, WW.ny, WW.nx * WW.size, lW)
      }! function(WW, iW, OW) {
        for (let mW = 0; mW < OW; ++mW) iW[mW] = WW[iW[mW]]
      }(tW, mW, NW);
      let bW = 0;
      const jW = new Uint8Array(mW.buffer.byteLength);
      for (let ZW = 0; ZW < WW.lines; ZW++)
        for (let iW = 0; iW < WW.channels; iW++) {
          const WW = PW[iW],
            OW = WW.nx * WW.size,
            EW = new Uint8Array(mW.buffer, WW.end * wW, OW * wW);
          jW.set(EW, bW), bW += OW * wW, WW.end += OW
        }
      return new DataView(jW.buffer)
    }
    var Ni, Pi = OW(41620);
    ! function(WW) {
      WW[WW.Float = 0] = "Float", WW[WW.HalfFloat = 1] = "HalfFloat"
    }(Ni || (Ni = {}));
    class Li {}
    async function ci(WW, iW, OW, mW) {
      const EW = {
        size: 0,
        viewer: iW,
        array: new Uint8Array(iW.buffer),
        offset: OW,
        width: WW.dataWindow.xMax - WW.dataWindow.xMin + 1,
        height: WW.dataWindow.yMax - WW.dataWindow.yMin + 1,
        channels: WW.channels.length,
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
      switch (WW.compression) {
        case MW.NO_COMPRESSION:
          EW.lines = 1, EW.uncompress = Wi;
          break;
        case MW.RLE_COMPRESSION:
          EW.lines = 1, EW.uncompress = ii;
          break;
        case MW.ZIPS_COMPRESSION:
          EW.lines = 1, EW.uncompress = Oi, await Pi.f.LoadScriptAsync(Li.FFLATEUrl);
          break;
        case MW.ZIP_COMPRESSION:
          EW.lines = 16, EW.uncompress = Oi, await Pi.f.LoadScriptAsync(Li.FFLATEUrl);
          break;
        case MW.PIZ_COMPRESSION:
          EW.lines = 32, EW.uncompress = Ei;
          break;
        case MW.PXR24_COMPRESSION:
          EW.lines = 16, EW.uncompress = mi, await Pi.f.LoadScriptAsync(Li.FFLATEUrl);
          break;
        default:
          throw new Error(MW[WW.compression] + " is unsupported")
      }
      EW.scanlineBlockSize = EW.lines;
      const NW = {};
      for (const LW of WW.channels) switch (LW.name) {
        case "R":
        case "G":
        case "B":
        case "A":
        case "Y":
          NW[LW.name] = !0, EW.type = LW.pixelType
      }
      let PW = !1;
      if (NW.R && NW.G && NW.B && NW.A) EW.outputChannels = 4, EW.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (NW.R && NW.G && NW.B) PW = !0, EW.outputChannels = 4, EW.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (NW.R && NW.G) EW.outputChannels = 2, EW.decodeChannels = {
        R: 0,
        G: 1
      };
      else if (NW.R) EW.outputChannels = 1, EW.decodeChannels = {
        R: 0
      };
      else {
        if (!NW.Y) throw new Error("EXRLoader.parse: file contains unsupported data channels.");
        EW.outputChannels = 1, EW.decodeChannels = {
          Y: 0
        }
      }
      if (1 === EW.type) switch (mW) {
        case Ni.Float:
          EW.getter = uW, EW.inputSize = wW;
          break;
        case Ni.HalfFloat:
          EW.getter = JW, EW.inputSize = wW
      } else {
        if (2 !== EW.type) throw new Error("Unsupported pixelType " + EW.type + " for " + WW.compression);
        switch (mW) {
          case Ni.Float:
            EW.getter = nW, EW.inputSize = LW;
            break;
          case Ni.HalfFloat:
            EW.getter = oW, EW.inputSize = LW
        }
      }
      EW.blockCount = EW.height / EW.scanlineBlockSize;
      for (let LW = 0; LW < EW.blockCount; LW++) HW(iW, OW);
      const cW = EW.width * EW.height * EW.outputChannels;
      switch (mW) {
        case Ni.Float:
          EW.byteArray = new Float32Array(cW), EW.textureType = 1, PW && EW.byteArray.fill(1, 0, cW);
          break;
        case Ni.HalfFloat:
          EW.byteArray = new Uint16Array(cW), EW.textureType = 2, PW && EW.byteArray.fill(15360, 0, cW);
          break;
        default:
          throw new Error("Unsupported type: " + mW)
      }
      let tW = 0;
      for (const LW of WW.channels) void 0 !== EW.decodeChannels[LW.name] && (EW.channelLineOffsets[LW.name] = tW * EW.width), tW += 2 * LW.pixelType;
      return EW.bytesPerLine = EW.width * tW, EW.outLineWidth = EW.width * EW.outputChannels, "INCREASING_Y" === WW.lineOrder ? EW.scanOrder = WW => WW : EW.scanOrder = WW => EW.height - 1 - WW, 4 == EW.outputChannels ? (EW.format = 5, EW.linearSpace = !0) : (EW.format = 6, EW.linearSpace = !1), EW
    }

    function wi(WW, iW, OW, mW) {
      const EW = {
        value: 0
      };
      for (let NW = 0; NW < WW.height / WW.scanlineBlockSize; NW++) {
        const PW = YW(OW, mW) - iW.dataWindow.yMin;
        WW.size = yW(OW, mW), WW.lines = PW + WW.scanlineBlockSize > WW.height ? WW.height - PW : WW.scanlineBlockSize;
        const LW = WW.size < WW.lines * WW.bytesPerLine && WW.uncompress ? WW.uncompress(WW) : Wi(WW);
        mW.value += WW.size;
        for (let OW = 0; OW < WW.scanlineBlockSize; OW++) {
          const mW = NW * WW.scanlineBlockSize,
            PW = OW + WW.scanOrder(mW);
          if (PW >= WW.height) continue;
          const cW = OW * WW.bytesPerLine,
            wW = (WW.height - 1 - PW) * WW.outLineWidth;
          for (let OW = 0; OW < WW.channels; OW++) {
            const mW = iW.channels[OW].name,
              NW = WW.channelLineOffsets[mW],
              PW = WW.decodeChannels[mW];
            if (void 0 !== PW) {
              EW.value = cW + NW;
              for (let iW = 0; iW < WW.width; iW++) {
                const OW = wW + iW * WW.outputChannels + PW;
                WW.byteArray && (WW.byteArray[OW] = WW.getter(LW, EW))
              }
            }
          }
        }
      }
    }
    Li.DefaultOutputType = Ni.HalfFloat, Li.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class ti {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(WW, iW, OW, mW, EW) {
        throw ".exr not supported in Cube."
      }
      loadData(WW, iW, OW) {
        const EW = new DataView(WW.buffer),
          NW = {
            value: 0
          },
          PW = DW(EW, NW);
        ci(PW, EW, NW, Li.DefaultOutputType).then((WW => {
          wi(WW, PW, EW, NW);
          const mW = PW.dataWindow.xMax - PW.dataWindow.xMin + 1,
            LW = PW.dataWindow.yMax - PW.dataWindow.yMin + 1;
          OW(mW, LW, iW.generateMipMaps, !1, (() => {
            const OW = iW.VA();
            iW.format = PW.format, iW.type = WW.textureType, iW.invertY = !1, iW._gammaSpace = !PW.linearSpace, WW.byteArray && OW._uploadDataToTextureDirectly(iW, WW.byteArray, 0, 0, void 0, !0)
          }))
        })).catch((WW => {
          mW.b.Error("Failed to load EXR texture: ", WW)
        }))
      }
    }
    async function Zi(WW) {
      const iW = new DataView(WW),
        OW = {
          value: 0
        },
        EW = DW(iW, OW);
      try {
        const WW = await ci(EW, iW, OW, Ni.Float);
        return wi(WW, EW, iW, OW), WW.byteArray ? {
          width: EW.dataWindow.xMax - EW.dataWindow.xMin + 1,
          height: EW.dataWindow.yMax - EW.dataWindow.yMin + 1,
          data: new Float32Array(WW.byteArray)
        } : (mW.b.Error("Failed to decode EXR data: No byte array available."), {
          width: 0,
          height: 0,
          data: null
        })
      } catch (NW) {
        mW.b.Error("Failed to load EXR data: ", NW)
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
for (const WW in modules) Object.freeze(modules[WW]);