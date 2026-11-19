export const id = 305;
export const ids = [305];
export const modules = {
  40672: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      ReadExrDataAsync: () => Do,
      _ExrTextureLoader: () => So
    });
    var iT = IT(37660),
      zT = IT(36156),
      kT = IT(38853);
    const WT = 4,
      XT = 4,
      BT = 1,
      FT = 2,
      ST = 8,
      DT = 65536,
      LT = DT >> 3,
      xT = 14,
      cT = 65537,
      KT = 1 << xT,
      MT = KT - 1,
      rT = 59,
      AT = 63,
      gT = 2 + AT - rT;
    var hT, wT;

    function mT(TT, oT) {
      const IT = new Uint8Array(TT);
      let iT = 0;
      for (; 0 != IT[oT.value + iT];) iT += 1;
      const zT = (new TextDecoder).decode(IT.slice(oT.value, oT.value + iT));
      return oT.value = oT.value + iT + 1, zT
    }

    function eT(TT, oT) {
      const IT = TT.getInt32(oT.value, !0);
      return oT.value += WT, IT
    }

    function RT(TT, oT) {
      const IT = TT.getUint32(oT.value, !0);
      return oT.value += WT, IT
    }

    function uT(TT, oT) {
      const IT = TT.getUint8(oT.value);
      return oT.value += BT, IT
    }

    function vT(TT, oT) {
      const IT = TT.getUint16(oT.value, !0);
      return oT.value += FT, IT
    }

    function ET(TT, oT) {
      const IT = TT[oT.value];
      return oT.value += BT, IT
    }

    function fT(TT, oT) {
      let IT;
      return IT = "getBigInt64" in DataView.prototype ? Number(TT.getBigInt64(oT.value, !0)) : TT.getUint32(oT.value + 4, !0) + Number(TT.getUint32(oT.value, !0) << 32), oT.value += ST, IT
    }

    function CT(TT, oT) {
      const IT = TT.getFloat32(oT.value, !0);
      return oT.value += XT, IT
    }

    function jT(TT, oT) {
      return (0, kT.b)(vT(TT, oT))
    }

    function JT(TT, oT) {
      return (0, kT.i)((0, zT.Clamp)(CT(TT, oT), -kT.e, kT.e))
    }

    function UT(TT, oT, IT, iT) {
      switch (IT) {
        case "string":
        case "stringvector":
        case "iccProfile":
          return function(TT, oT, IT) {
            const iT = (new TextDecoder).decode(new Uint8Array(TT).slice(oT.value, oT.value + IT));
            return oT.value = oT.value + IT, iT
          }(TT.buffer, oT, iT);
        case "chlist":
          return function(TT, oT, IT) {
            const iT = oT.value,
              zT = [];
            for (; oT.value < iT + IT - 1;) {
              const IT = mT(TT.buffer, oT),
                iT = eT(TT, oT),
                kT = uT(TT, oT);
              oT.value += 3;
              const WT = eT(TT, oT),
                XT = eT(TT, oT);
              zT.push({
                name: IT,
                pixelType: iT,
                pLinear: kT,
                xSampling: WT,
                ySampling: XT
              })
            }
            return oT.value += 1, zT
          }(TT, oT, iT);
        case "chromaticities":
          return function(TT, oT) {
            return {
              redX: CT(TT, oT),
              redY: CT(TT, oT),
              greenX: CT(TT, oT),
              greenY: CT(TT, oT),
              blueX: CT(TT, oT),
              blueY: CT(TT, oT),
              whiteX: CT(TT, oT),
              whiteY: CT(TT, oT)
            }
          }(TT, oT);
        case "compression":
          return function(TT, oT) {
            return uT(TT, oT)
          }(TT, oT);
        case "box2i":
          return function(TT, oT) {
            return {
              xMin: eT(TT, oT),
              yMin: eT(TT, oT),
              xMax: eT(TT, oT),
              yMax: eT(TT, oT)
            }
          }(TT, oT);
        case "lineOrder":
          return function(TT, oT) {
            const IT = uT(TT, oT);
            return wT[IT]
          }(TT, oT);
        case "float":
          return CT(TT, oT);
        case "v2f":
          return function(TT, oT) {
            return [CT(TT, oT), CT(TT, oT)]
          }(TT, oT);
        case "v3f":
          return function(TT, oT) {
            return [CT(TT, oT), CT(TT, oT), CT(TT, oT)]
          }(TT, oT);
        case "int":
          return eT(TT, oT);
        case "rational":
          return function(TT, oT) {
            return [eT(TT, oT), RT(TT, oT)]
          }(TT, oT);
        case "timecode":
          return function(TT, oT) {
            return [RT(TT, oT), RT(TT, oT)]
          }(TT, oT);
        case "preview":
          return oT.value += iT, "skipped";
        default:
          return void(oT.value += iT)
      }
    }

    function aT(TT) {
      for (let oT = 1; oT < TT.length; oT++) {
        const IT = TT[oT - 1] + TT[oT] - 128;
        TT[oT] = IT
      }
    }

    function YT(TT, oT) {
      let IT = 0,
        iT = Math.floor((TT.length + 1) / 2),
        zT = 0;
      const kT = TT.length - 1;
      for (; !(zT > kT) && (oT[zT++] = TT[IT++], !(zT > kT));) oT[zT++] = TT[iT++]
    }! function(TT) {
      TT[TT.NO_COMPRESSION = 0] = "NO_COMPRESSION", TT[TT.RLE_COMPRESSION = 1] = "RLE_COMPRESSION", TT[TT.ZIPS_COMPRESSION = 2] = "ZIPS_COMPRESSION", TT[TT.ZIP_COMPRESSION = 3] = "ZIP_COMPRESSION", TT[TT.PIZ_COMPRESSION = 4] = "PIZ_COMPRESSION", TT[TT.PXR24_COMPRESSION = 5] = "PXR24_COMPRESSION"
    }(hT || (hT = {})),
    function(TT) {
      TT[TT.INCREASING_Y = 0] = "INCREASING_Y", TT[TT.DECREASING_Y = 1] = "DECREASING_Y"
    }(wT || (wT = {}));
    const QT = 20000630;

    function OT(TT, oT) {
      if (TT.getUint32(0, !0) != QT) throw new Error("Incorrect OpenEXR format");
      const IT = TT.getUint8(4),
        zT = TT.getUint8(5),
        kT = {
          singleTile: !!(2 & zT),
          longName: !!(4 & zT),
          deepFormat: !!(8 & zT),
          multiPart: !!(16 & zT)
        };
      oT.value = 8;
      const WT = {};
      let XT = !0;
      for (; XT;) {
        const IT = mT(TT.buffer, oT);
        if (IT) {
          const zT = mT(TT.buffer, oT),
            kT = UT(TT, oT, zT, RT(TT, oT));
          void 0 === kT ? iT.d.Warn(`Unknown header attribute type ${zT}'.`) : WT[IT] = kT
        } else XT = !1
      }
      if (0 != (-5 & zT)) throw new Error("Unsupported file format");
      return {
        version: IT,
        spec: kT,
        ...WT
      }
    }
    const HT = 32768,
      nT = 65535;

    function qT(TT, oT, IT, iT, zT) {
      for (; IT < TT;) oT = oT << 8 | ET(iT, zT), IT += 8;
      return {
        l: oT >> (IT -= TT) & (1 << TT) - 1,
        c: oT,
        lc: IT
      }
    }

    function ZT(TT, oT, IT, iT) {
      return {
        c: TT = TT << 8 | ET(IT, iT),
        lc: oT += 8
      }
    }

    function lT(TT, oT, IT, iT, zT, kT, WT, XT, BT) {
      if (TT == oT) {
        if (iT < 8) {
          const TT = ZT(IT, iT, zT, kT);
          IT = TT.c, iT = TT.lc
        }
        let TT = IT >> (iT -= 8);
        if (TT = new Uint8Array([TT])[0], XT.value + TT > BT) return null;
        const oT = WT[XT.value - 1];
        for (; TT-- > 0;) WT[XT.value++] = oT
      } else {
        if (!(XT.value < BT)) return null;
        WT[XT.value++] = TT
      }
      return {
        c: IT,
        lc: iT
      }
    }
    const sT = new Array(59);

    function tT(TT, oT, IT, iT, zT, kT) {
      const WT = oT;
      let XT = 0,
        BT = 0;
      for (; iT <= zT; iT++) {
        if (WT.value - oT.value > IT) return;
        let FT = qT(6, XT, BT, TT, WT);
        const ST = FT.l;
        if (XT = FT.c, BT = FT.lc, kT[iT] = ST, ST == AT) {
          if (WT.value - oT.value > IT) throw new Error("Error in HufUnpackEncTable");
          FT = qT(8, XT, BT, TT, WT);
          let ST = FT.l + gT;
          if (XT = FT.c, BT = FT.lc, iT + ST > zT + 1) throw new Error("Error in HufUnpackEncTable");
          for (; ST--;) kT[iT++] = 0;
          iT--
        } else if (ST >= rT) {
          let TT = ST - rT + 2;
          if (iT + TT > zT + 1) throw new Error("Error in HufUnpackEncTable");
          for (; TT--;) kT[iT++] = 0;
          iT--
        }
      }! function(TT) {
        for (let IT = 0; IT <= 58; ++IT) sT[IT] = 0;
        for (let IT = 0; IT < cT; ++IT) sT[TT[IT]] += 1;
        let oT = 0;
        for (let IT = 58; IT > 0; --IT) {
          const TT = oT + sT[IT] >> 1;
          sT[IT] = oT, oT = TT
        }
        for (let IT = 0; IT < cT; ++IT) {
          const oT = TT[IT];
          oT > 0 && (TT[IT] = oT | sT[oT]++ << 6)
        }
      }(kT)
    }

    function GT(TT) {
      return 63 & TT
    }

    function pT(TT) {
      return TT >> 6
    }

    function bT(TT, oT, IT, iT, zT, kT) {
      const WT = IT.value,
        XT = RT(oT, IT),
        BT = RT(oT, IT);
      IT.value += 4;
      const FT = RT(oT, IT);
      if (IT.value += 4, XT < 0 || XT >= cT || BT < 0 || BT >= cT) throw new Error("Wrong HUF_ENCSIZE");
      const ST = new Array(cT),
        DT = new Array(KT);
      ! function(TT) {
        for (let oT = 0; oT < KT; oT++) TT[oT] = {}, TT[oT].len = 0, TT[oT].lit = 0, TT[oT].p = null
      }(DT);
      if (tT(TT, IT, iT - (IT.value - WT), XT, BT, ST), FT > 8 * (iT - (IT.value - WT))) throw new Error("Wrong hufUncompress");
      ! function(TT, oT, IT, iT) {
        for (; oT <= IT; oT++) {
          const IT = pT(TT[oT]),
            zT = GT(TT[oT]);
          if (IT >> zT) throw new Error("Invalid table entry");
          if (zT > xT) {
            const TT = iT[IT >> zT - xT];
            if (TT.len) throw new Error("Invalid table entry");
            if (TT.lit++, TT.p) {
              const oT = TT.p;
              TT.p = new Array(TT.lit);
              for (let IT = 0; IT < TT.lit - 1; ++IT) TT.p[IT] = oT[IT]
            } else TT.p = new Array(1);
            TT.p[TT.lit - 1] = oT
          } else if (zT) {
            let TT = 0;
            for (let kT = 1 << xT - zT; kT > 0; kT--) {
              const kT = iT[(IT << xT - zT) + TT];
              if (kT.len || kT.p) throw new Error("Invalid table entry");
              kT.len = zT, kT.lit = oT, TT++
            }
          }
        }
      }(ST, XT, BT, DT),
      function(TT, oT, IT, iT, zT, kT, WT, XT, BT) {
        let FT = 0,
          ST = 0;
        const DT = WT,
          LT = Math.trunc(iT.value + (zT + 7) / 8);
        for (; iT.value < LT;) {
          let zT = ZT(FT, ST, IT, iT);
          for (FT = zT.c, ST = zT.lc; ST >= xT;) {
            const WT = oT[FT >> ST - xT & MT];
            if (WT.len) {
              ST -= WT.len;
              const TT = lT(WT.lit, kT, FT, ST, IT, iT, XT, BT, DT);
              TT && (FT = TT.c, ST = TT.lc)
            } else {
              if (!WT.p) throw new Error("hufDecode issues");
              let oT;
              for (oT = 0; oT < WT.lit; oT++) {
                const xT = GT(TT[WT.p[oT]]);
                for (; ST < xT && iT.value < LT;) zT = ZT(FT, ST, IT, iT), FT = zT.c, ST = zT.lc;
                if (ST >= xT && pT(TT[WT.p[oT]]) == (FT >> ST - xT & (1 << xT) - 1)) {
                  ST -= xT;
                  const TT = lT(WT.p[oT], kT, FT, ST, IT, iT, XT, BT, DT);
                  TT && (FT = TT.c, ST = TT.lc);
                  break
                }
              }
              if (oT == WT.lit) throw new Error("HufDecode issues")
            }
          }
        }
        const cT = 8 - zT & 7;
        for (FT >>= cT, ST -= cT; ST > 0;) {
          const TT = oT[FT << xT - ST & MT];
          if (!TT.len) throw new Error("HufDecode issues");
          {
            ST -= TT.len;
            const oT = lT(TT.lit, kT, FT, ST, IT, iT, XT, BT, DT);
            oT && (FT = oT.c, ST = oT.lc)
          }
        }
      }(ST, DT, TT, IT, FT, BT, kT, zT, {
        value: 0
      })
    }

    function yT(TT) {
      return 65535 & TT
    }

    function NT(TT) {
      const oT = yT(TT);
      return oT > 32767 ? oT - 65536 : oT
    }

    function PT(TT, oT) {
      const IT = NT(TT),
        iT = NT(oT),
        zT = IT + (1 & iT) + (iT >> 1);
      return {
        a: zT,
        b: zT - iT
      }
    }

    function dT(TT, oT) {
      const IT = yT(TT),
        iT = yT(oT),
        zT = IT - (iT >> 1) & nT;
      return {
        a: iT + zT - HT & nT,
        b: zT
      }
    }

    function VT(TT, oT, IT, iT, zT, kT, WT) {
      const XT = WT < 16384,
        BT = IT > zT ? zT : IT;
      let FT, ST, DT = 1;
      for (; DT <= BT;) DT <<= 1;
      for (DT >>= 1, FT = DT, DT >>= 1; DT >= 1;) {
        ST = 0;
        const WT = ST + kT * (zT - FT),
          BT = kT * DT,
          LT = kT * FT,
          xT = iT * DT,
          cT = iT * FT;
        let KT, MT, rT, AT;
        for (; ST <= WT; ST += LT) {
          let zT = ST;
          const kT = ST + iT * (IT - FT);
          for (; zT <= kT; zT += cT) {
            const IT = zT + xT,
              iT = zT + BT,
              kT = iT + xT;
            if (XT) {
              let WT = PT(TT[zT + oT], TT[iT + oT]);
              KT = WT.a, rT = WT.b, WT = PT(TT[IT + oT], TT[kT + oT]), MT = WT.a, AT = WT.b, WT = PT(KT, MT), TT[zT + oT] = WT.a, TT[IT + oT] = WT.b, WT = PT(rT, AT), TT[iT + oT] = WT.a, TT[kT + oT] = WT.b
            } else {
              let WT = dT(TT[zT + oT], TT[iT + oT]);
              KT = WT.a, rT = WT.b, WT = dT(TT[IT + oT], TT[kT + oT]), MT = WT.a, AT = WT.b, WT = dT(KT, MT), TT[zT + oT] = WT.a, TT[IT + oT] = WT.b, WT = dT(rT, AT), TT[iT + oT] = WT.a, TT[kT + oT] = WT.b
            }
          }
          if (IT & DT) {
            const IT = zT + BT;
            let iT;
            iT = XT ? PT(TT[zT + oT], TT[IT + oT]) : dT(TT[zT + oT], TT[IT + oT]), KT = iT.a, TT[IT + oT] = iT.b, TT[zT + oT] = KT
          }
        }
        if (zT & DT) {
          let zT = ST;
          const kT = ST + iT * (IT - FT);
          for (; zT <= kT; zT += cT) {
            const IT = zT + xT;
            let iT;
            iT = XT ? PT(TT[zT + oT], TT[IT + oT]) : dT(TT[zT + oT], TT[IT + oT]), KT = iT.a, TT[IT + oT] = iT.b, TT[zT + oT] = KT
          }
        }
        FT = DT, DT >>= 1
      }
      return ST
    }

    function To(TT) {
      return new DataView(TT.array.buffer, TT.offset.value, TT.size)
    }

    function oo(TT) {
      const oT = TT.viewer.buffer.slice(TT.offset.value, TT.offset.value + TT.size),
        IT = new Uint8Array(function(TT) {
          let oT = TT.byteLength;
          const IT = [];
          let iT = 0;
          const zT = new DataView(TT);
          for (; oT > 0;) {
            const TT = zT.getInt8(iT++);
            if (TT < 0) {
              const kT = -TT;
              oT -= kT + 1;
              for (let TT = 0; TT < kT; TT++) IT.push(zT.getUint8(iT++))
            } else {
              const kT = TT;
              oT -= 2;
              const WT = zT.getUint8(iT++);
              for (let TT = 0; TT < kT + 1; TT++) IT.push(WT)
            }
          }
          return IT
        }(oT)),
        iT = new Uint8Array(IT.length);
      return aT(IT), YT(IT, iT), new DataView(iT.buffer)
    }

    function Io(TT) {
      const oT = TT.array.slice(TT.offset.value, TT.offset.value + TT.size),
        IT = fflate.unzlibSync(oT),
        iT = new Uint8Array(IT.length);
      return aT(IT), YT(IT, iT), new DataView(iT.buffer)
    }

    function io(TT) {
      const oT = TT.array.slice(TT.offset.value, TT.offset.value + TT.size),
        IT = fflate.unzlibSync(oT),
        iT = TT.lines * TT.channels * TT.width,
        zT = 1 == TT.type ? new Uint16Array(iT) : new Uint32Array(iT);
      let kT = 0,
        WT = 0;
      const XT = new Array(4);
      for (let BT = 0; BT < TT.lines; BT++)
        for (let oT = 0; oT < TT.channels; oT++) {
          let oT = 0;
          switch (TT.type) {
            case 1:
              XT[0] = kT, XT[1] = XT[0] + TT.width, kT = XT[1] + TT.width;
              for (let iT = 0; iT < TT.width; ++iT) {
                oT += IT[XT[0]++] << 8 | IT[XT[1]++], zT[WT] = oT, WT++
              }
              break;
            case 2:
              XT[0] = kT, XT[1] = XT[0] + TT.width, XT[2] = XT[1] + TT.width, kT = XT[2] + TT.width;
              for (let iT = 0; iT < TT.width; ++iT) {
                oT += IT[XT[0]++] << 24 | IT[XT[1]++] << 16 | IT[XT[2]++] << 8, zT[WT] = oT, WT++
              }
          }
        }
      return new DataView(zT.buffer)
    }

    function zo(TT) {
      const oT = TT.viewer,
        IT = {
          value: TT.offset.value
        },
        iT = new Uint16Array(TT.width * TT.scanlineBlockSize * (TT.channels * TT.type)),
        zT = new Uint8Array(LT);
      let kT = 0;
      const WT = new Array(TT.channels);
      for (let FT = 0; FT < TT.channels; FT++) WT[FT] = {}, WT[FT].start = kT, WT[FT].end = WT[FT].start, WT[FT].nx = TT.width, WT[FT].ny = TT.lines, WT[FT].size = TT.type, kT += WT[FT].nx * WT[FT].ny * WT[FT].size;
      const XT = vT(oT, IT),
        BT = vT(oT, IT);
      if (BT >= LT) throw new Error("Wrong PIZ_COMPRESSION BITMAP_SIZE");
      if (XT <= BT)
        for (let FT = 0; FT < BT - XT + 1; FT++) zT[FT + XT] = uT(oT, IT);
      const ST = new Uint16Array(DT),
        xT = function(TT, oT) {
          let IT = 0;
          for (let zT = 0; zT < DT; ++zT)(0 == zT || TT[zT >> 3] & 1 << (7 & zT)) && (oT[IT++] = zT);
          const iT = IT - 1;
          for (; IT < DT;) oT[IT++] = 0;
          return iT
        }(zT, ST),
        cT = RT(oT, IT);
      bT(TT.array, oT, IT, cT, iT, kT);
      for (let FT = 0; FT < TT.channels; ++FT) {
        const TT = WT[FT];
        for (let oT = 0; oT < WT[FT].size; ++oT) VT(iT, TT.start + oT, TT.nx, TT.size, TT.ny, TT.nx * TT.size, xT)
      }! function(TT, oT, IT) {
        for (let iT = 0; iT < IT; ++iT) oT[iT] = TT[oT[iT]]
      }(ST, iT, kT);
      let KT = 0;
      const MT = new Uint8Array(iT.buffer.byteLength);
      for (let DT = 0; DT < TT.lines; DT++)
        for (let oT = 0; oT < TT.channels; oT++) {
          const TT = WT[oT],
            IT = TT.nx * TT.size,
            zT = new Uint8Array(iT.buffer, TT.end * FT, IT * FT);
          MT.set(zT, KT), KT += IT * FT, TT.end += IT
        }
      return new DataView(MT.buffer)
    }
    var ko, Wo = IT(38886);
    ! function(TT) {
      TT[TT.Float = 0] = "Float", TT[TT.HalfFloat = 1] = "HalfFloat"
    }(ko || (ko = {}));
    class Xo {}
    async function Bo(TT, oT, IT, iT) {
      const zT = {
        size: 0,
        viewer: oT,
        array: new Uint8Array(oT.buffer),
        offset: IT,
        width: TT.dataWindow.xMax - TT.dataWindow.xMin + 1,
        height: TT.dataWindow.yMax - TT.dataWindow.yMin + 1,
        channels: TT.channels.length,
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
      switch (TT.compression) {
        case hT.NO_COMPRESSION:
          zT.lines = 1, zT.uncompress = To;
          break;
        case hT.RLE_COMPRESSION:
          zT.lines = 1, zT.uncompress = oo;
          break;
        case hT.ZIPS_COMPRESSION:
          zT.lines = 1, zT.uncompress = Io, await Wo.i.LoadScriptAsync(Xo.FFLATEUrl);
          break;
        case hT.ZIP_COMPRESSION:
          zT.lines = 16, zT.uncompress = Io, await Wo.i.LoadScriptAsync(Xo.FFLATEUrl);
          break;
        case hT.PIZ_COMPRESSION:
          zT.lines = 32, zT.uncompress = zo;
          break;
        case hT.PXR24_COMPRESSION:
          zT.lines = 16, zT.uncompress = io, await Wo.i.LoadScriptAsync(Xo.FFLATEUrl);
          break;
        default:
          throw new Error(hT[TT.compression] + " is unsupported")
      }
      zT.scanlineBlockSize = zT.lines;
      const kT = {};
      for (const XT of TT.channels) switch (XT.name) {
        case "R":
        case "G":
        case "B":
        case "A":
        case "Y":
          kT[XT.name] = !0, zT.type = XT.pixelType
      }
      let WT = !1;
      if (kT.R && kT.G && kT.B && kT.A) zT.outputChannels = 4, zT.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (kT.R && kT.G && kT.B) WT = !0, zT.outputChannels = 4, zT.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (kT.R && kT.G) zT.outputChannels = 2, zT.decodeChannels = {
        R: 0,
        G: 1
      };
      else if (kT.R) zT.outputChannels = 1, zT.decodeChannels = {
        R: 0
      };
      else {
        if (!kT.Y) throw new Error("EXRLoader.parse: file contains unsupported data channels.");
        zT.outputChannels = 1, zT.decodeChannels = {
          Y: 0
        }
      }
      if (1 === zT.type) switch (iT) {
        case ko.Float:
          zT.getter = jT, zT.inputSize = FT;
          break;
        case ko.HalfFloat:
          zT.getter = vT, zT.inputSize = FT
      } else {
        if (2 !== zT.type) throw new Error("Unsupported pixelType " + zT.type + " for " + TT.compression);
        switch (iT) {
          case ko.Float:
            zT.getter = CT, zT.inputSize = XT;
            break;
          case ko.HalfFloat:
            zT.getter = JT, zT.inputSize = XT
        }
      }
      zT.blockCount = zT.height / zT.scanlineBlockSize;
      for (let XT = 0; XT < zT.blockCount; XT++) fT(oT, IT);
      const BT = zT.width * zT.height * zT.outputChannels;
      switch (iT) {
        case ko.Float:
          zT.byteArray = new Float32Array(BT), zT.textureType = 1, WT && zT.byteArray.fill(1, 0, BT);
          break;
        case ko.HalfFloat:
          zT.byteArray = new Uint16Array(BT), zT.textureType = 2, WT && zT.byteArray.fill(15360, 0, BT);
          break;
        default:
          throw new Error("Unsupported type: " + iT)
      }
      let ST = 0;
      for (const XT of TT.channels) void 0 !== zT.decodeChannels[XT.name] && (zT.channelLineOffsets[XT.name] = ST * zT.width), ST += 2 * XT.pixelType;
      return zT.bytesPerLine = zT.width * ST, zT.outLineWidth = zT.width * zT.outputChannels, "INCREASING_Y" === TT.lineOrder ? zT.scanOrder = TT => TT : zT.scanOrder = TT => zT.height - 1 - TT, 4 == zT.outputChannels ? (zT.format = 5, zT.linearSpace = !0) : (zT.format = 6, zT.linearSpace = !1), zT
    }

    function Fo(TT, oT, IT, iT) {
      const zT = {
        value: 0
      };
      for (let kT = 0; kT < TT.height / TT.scanlineBlockSize; kT++) {
        const WT = eT(IT, iT) - oT.dataWindow.yMin;
        TT.size = RT(IT, iT), TT.lines = WT + TT.scanlineBlockSize > TT.height ? TT.height - WT : TT.scanlineBlockSize;
        const XT = TT.size < TT.lines * TT.bytesPerLine && TT.uncompress ? TT.uncompress(TT) : To(TT);
        iT.value += TT.size;
        for (let IT = 0; IT < TT.scanlineBlockSize; IT++) {
          const iT = kT * TT.scanlineBlockSize,
            WT = IT + TT.scanOrder(iT);
          if (WT >= TT.height) continue;
          const BT = IT * TT.bytesPerLine,
            FT = (TT.height - 1 - WT) * TT.outLineWidth;
          for (let IT = 0; IT < TT.channels; IT++) {
            const iT = oT.channels[IT].name,
              kT = TT.channelLineOffsets[iT],
              WT = TT.decodeChannels[iT];
            if (void 0 !== WT) {
              zT.value = BT + kT;
              for (let oT = 0; oT < TT.width; oT++) {
                const IT = FT + oT * TT.outputChannels + WT;
                TT.byteArray && (TT.byteArray[IT] = TT.getter(XT, zT))
              }
            }
          }
        }
      }
    }
    Xo.DefaultOutputType = ko.HalfFloat, Xo.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class So {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(TT, oT, IT, iT, zT) {
        throw ".exr not supported in Cube."
      }
      loadData(TT, oT, IT) {
        const zT = new DataView(TT.buffer),
          kT = {
            value: 0
          },
          WT = OT(zT, kT);
        Bo(WT, zT, kT, Xo.DefaultOutputType).then((TT => {
          Fo(TT, WT, zT, kT);
          const iT = WT.dataWindow.xMax - WT.dataWindow.xMin + 1,
            XT = WT.dataWindow.yMax - WT.dataWindow.yMin + 1;
          IT(iT, XT, oT.generateMipMaps, !1, (() => {
            const IT = oT.Zc();
            oT.format = WT.format, oT.type = TT.textureType, oT.invertY = !1, oT._gammaSpace = !WT.linearSpace, TT.byteArray && IT._uploadDataToTextureDirectly(oT, TT.byteArray, 0, 0, void 0, !0)
          }))
        })).catch((TT => {
          iT.d.Error("Failed to load EXR texture: ", TT)
        }))
      }
    }
    async function Do(TT) {
      const oT = new DataView(TT),
        IT = {
          value: 0
        },
        zT = OT(oT, IT);
      try {
        const TT = await Bo(zT, oT, IT, ko.Float);
        return Fo(TT, zT, oT, IT), TT.byteArray ? {
          width: zT.dataWindow.xMax - zT.dataWindow.xMin + 1,
          height: zT.dataWindow.yMax - zT.dataWindow.yMin + 1,
          data: new Float32Array(TT.byteArray)
        } : (iT.d.Error("Failed to decode EXR data: No byte array available."), {
          width: 0,
          height: 0,
          data: null
        })
      } catch (kT) {
        iT.d.Error("Failed to load EXR data: ", kT)
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
for (const TT in modules) Object.freeze(modules[TT]);