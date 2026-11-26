export const id = 621;
export const ids = [621];
export const modules = {
  44555: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      ReadExrDataAsync: () => YX,
      _ExrTextureLoader: () => EX
    });
    var cU = zU(39493),
      yU = zU(37855),
      QU = zU(41179);
    const AU = 4,
      FU = 4,
      oU = 1,
      DU = 2,
      EU = 8,
      YU = 65536,
      NU = YU >> 3,
      IU = 14,
      pU = 65537,
      aU = 1 << IU,
      tU = aU - 1,
      gU = 59,
      kU = 63,
      GU = 2 + kU - gU;
    var BU, ZU;

    function RU(UU, XU) {
      const zU = new Uint8Array(UU);
      let cU = 0;
      for (; 0 != zU[XU.value + cU];) cU += 1;
      const yU = (new TextDecoder).decode(zU.slice(XU.value, XU.value + cU));
      return XU.value = XU.value + cU + 1, yU
    }

    function PU(UU, XU) {
      const zU = UU.getInt32(XU.value, !0);
      return XU.value += AU, zU
    }

    function WU(UU, XU) {
      const zU = UU.getUint32(XU.value, !0);
      return XU.value += AU, zU
    }

    function dU(UU, XU) {
      const zU = UU.getUint8(XU.value);
      return XU.value += oU, zU
    }

    function LU(UU, XU) {
      const zU = UU.getUint16(XU.value, !0);
      return XU.value += DU, zU
    }

    function eU(UU, XU) {
      const zU = UU[XU.value];
      return XU.value += oU, zU
    }

    function CU(UU, XU) {
      let zU;
      return zU = "getBigInt64" in DataView.prototype ? Number(UU.getBigInt64(XU.value, !0)) : UU.getUint32(XU.value + 4, !0) + Number(UU.getUint32(XU.value, !0) << 32), XU.value += EU, zU
    }

    function wU(UU, XU) {
      const zU = UU.getFloat32(XU.value, !0);
      return XU.value += FU, zU
    }

    function qU(UU, XU) {
      return (0, QU.e)(LU(UU, XU))
    }

    function OU(UU, XU) {
      return (0, QU.h)((0, yU.Clamp)(wU(UU, XU), -QU.f, QU.f))
    }

    function SU(UU, XU, zU, cU) {
      switch (zU) {
        case "string":
        case "stringvector":
        case "iccProfile":
          return function(UU, XU, zU) {
            const cU = (new TextDecoder).decode(new Uint8Array(UU).slice(XU.value, XU.value + zU));
            return XU.value = XU.value + zU, cU
          }(UU.buffer, XU, cU);
        case "chlist":
          return function(UU, XU, zU) {
            const cU = XU.value,
              yU = [];
            for (; XU.value < cU + zU - 1;) {
              const zU = RU(UU.buffer, XU),
                cU = PU(UU, XU),
                QU = dU(UU, XU);
              XU.value += 3;
              const AU = PU(UU, XU),
                FU = PU(UU, XU);
              yU.push({
                name: zU,
                pixelType: cU,
                pLinear: QU,
                xSampling: AU,
                ySampling: FU
              })
            }
            return XU.value += 1, yU
          }(UU, XU, cU);
        case "chromaticities":
          return function(UU, XU) {
            return {
              redX: wU(UU, XU),
              redY: wU(UU, XU),
              greenX: wU(UU, XU),
              greenY: wU(UU, XU),
              blueX: wU(UU, XU),
              blueY: wU(UU, XU),
              whiteX: wU(UU, XU),
              whiteY: wU(UU, XU)
            }
          }(UU, XU);
        case "compression":
          return function(UU, XU) {
            return dU(UU, XU)
          }(UU, XU);
        case "box2i":
          return function(UU, XU) {
            return {
              xMin: PU(UU, XU),
              yMin: PU(UU, XU),
              xMax: PU(UU, XU),
              yMax: PU(UU, XU)
            }
          }(UU, XU);
        case "lineOrder":
          return function(UU, XU) {
            const zU = dU(UU, XU);
            return ZU[zU]
          }(UU, XU);
        case "float":
          return wU(UU, XU);
        case "v2f":
          return function(UU, XU) {
            return [wU(UU, XU), wU(UU, XU)]
          }(UU, XU);
        case "v3f":
          return function(UU, XU) {
            return [wU(UU, XU), wU(UU, XU), wU(UU, XU)]
          }(UU, XU);
        case "int":
          return PU(UU, XU);
        case "rational":
          return function(UU, XU) {
            return [PU(UU, XU), WU(UU, XU)]
          }(UU, XU);
        case "timecode":
          return function(UU, XU) {
            return [WU(UU, XU), WU(UU, XU)]
          }(UU, XU);
        case "preview":
          return XU.value += cU, "skipped";
        default:
          return void(XU.value += cU)
      }
    }

    function rU(UU) {
      for (let XU = 1; XU < UU.length; XU++) {
        const zU = UU[XU - 1] + UU[XU] - 128;
        UU[XU] = zU
      }
    }

    function uU(UU, XU) {
      let zU = 0,
        cU = Math.floor((UU.length + 1) / 2),
        yU = 0;
      const QU = UU.length - 1;
      for (; !(yU > QU) && (XU[yU++] = UU[zU++], !(yU > QU));) XU[yU++] = UU[cU++]
    }! function(UU) {
      UU[UU.NO_COMPRESSION = 0] = "NO_COMPRESSION", UU[UU.RLE_COMPRESSION = 1] = "RLE_COMPRESSION", UU[UU.ZIPS_COMPRESSION = 2] = "ZIPS_COMPRESSION", UU[UU.ZIP_COMPRESSION = 3] = "ZIP_COMPRESSION", UU[UU.PIZ_COMPRESSION = 4] = "PIZ_COMPRESSION", UU[UU.PXR24_COMPRESSION = 5] = "PXR24_COMPRESSION"
    }(BU || (BU = {})),
    function(UU) {
      UU[UU.INCREASING_Y = 0] = "INCREASING_Y", UU[UU.DECREASING_Y = 1] = "DECREASING_Y"
    }(ZU || (ZU = {}));
    const fU = 20000630;

    function iU(UU, XU) {
      if (UU.getUint32(0, !0) != fU) throw new Error("Incorrect OpenEXR format");
      const zU = UU.getUint8(4),
        yU = UU.getUint8(5),
        QU = {
          singleTile: !!(2 & yU),
          longName: !!(4 & yU),
          deepFormat: !!(8 & yU),
          multiPart: !!(16 & yU)
        };
      XU.value = 8;
      const AU = {};
      let FU = !0;
      for (; FU;) {
        const zU = RU(UU.buffer, XU);
        if (zU) {
          const yU = RU(UU.buffer, XU),
            QU = SU(UU, XU, yU, WU(UU, XU));
          void 0 === QU ? cU.b.Warn(`Unknown header attribute type ${yU}'.`) : AU[zU] = QU
        } else FU = !1
      }
      if (0 != (-5 & yU)) throw new Error("Unsupported file format");
      return {
        version: zU,
        spec: QU,
        ...AU
      }
    }
    const HU = 32768,
      MU = 65535;

    function vU(UU, XU, zU, cU, yU) {
      for (; zU < UU;) XU = XU << 8 | eU(cU, yU), zU += 8;
      return {
        l: XU >> (zU -= UU) & (1 << UU) - 1,
        c: XU,
        lc: zU
      }
    }

    function VU(UU, XU, zU, cU) {
      return {
        c: UU = UU << 8 | eU(zU, cU),
        lc: XU += 8
      }
    }

    function sU(UU, XU, zU, cU, yU, QU, AU, FU, oU) {
      if (UU == XU) {
        if (cU < 8) {
          const UU = VU(zU, cU, yU, QU);
          zU = UU.c, cU = UU.lc
        }
        let UU = zU >> (cU -= 8);
        if (UU = new Uint8Array([UU])[0], FU.value + UU > oU) return null;
        const XU = AU[FU.value - 1];
        for (; UU-- > 0;) AU[FU.value++] = XU
      } else {
        if (!(FU.value < oU)) return null;
        AU[FU.value++] = UU
      }
      return {
        c: zU,
        lc: cU
      }
    }
    const nU = new Array(59);

    function mU(UU, XU, zU, cU, yU, QU) {
      const AU = XU;
      let FU = 0,
        oU = 0;
      for (; cU <= yU; cU++) {
        if (AU.value - XU.value > zU) return;
        let DU = vU(6, FU, oU, UU, AU);
        const EU = DU.l;
        if (FU = DU.c, oU = DU.lc, QU[cU] = EU, EU == kU) {
          if (AU.value - XU.value > zU) throw new Error("Error in HufUnpackEncTable");
          DU = vU(8, FU, oU, UU, AU);
          let EU = DU.l + GU;
          if (FU = DU.c, oU = DU.lc, cU + EU > yU + 1) throw new Error("Error in HufUnpackEncTable");
          for (; EU--;) QU[cU++] = 0;
          cU--
        } else if (EU >= gU) {
          let UU = EU - gU + 2;
          if (cU + UU > yU + 1) throw new Error("Error in HufUnpackEncTable");
          for (; UU--;) QU[cU++] = 0;
          cU--
        }
      }! function(UU) {
        for (let zU = 0; zU <= 58; ++zU) nU[zU] = 0;
        for (let zU = 0; zU < pU; ++zU) nU[UU[zU]] += 1;
        let XU = 0;
        for (let zU = 58; zU > 0; --zU) {
          const UU = XU + nU[zU] >> 1;
          nU[zU] = XU, XU = UU
        }
        for (let zU = 0; zU < pU; ++zU) {
          const XU = UU[zU];
          XU > 0 && (UU[zU] = XU | nU[XU]++ << 6)
        }
      }(QU)
    }

    function lU(UU) {
      return 63 & UU
    }

    function xU(UU) {
      return UU >> 6
    }

    function JU(UU, XU, zU, cU, yU, QU) {
      const AU = zU.value,
        FU = WU(XU, zU),
        oU = WU(XU, zU);
      zU.value += 4;
      const DU = WU(XU, zU);
      if (zU.value += 4, FU < 0 || FU >= pU || oU < 0 || oU >= pU) throw new Error("Wrong HUF_ENCSIZE");
      const EU = new Array(pU),
        YU = new Array(aU);
      ! function(UU) {
        for (let XU = 0; XU < aU; XU++) UU[XU] = {}, UU[XU].len = 0, UU[XU].lit = 0, UU[XU].p = null
      }(YU);
      if (mU(UU, zU, cU - (zU.value - AU), FU, oU, EU), DU > 8 * (cU - (zU.value - AU))) throw new Error("Wrong hufUncompress");
      ! function(UU, XU, zU, cU) {
        for (; XU <= zU; XU++) {
          const zU = xU(UU[XU]),
            yU = lU(UU[XU]);
          if (zU >> yU) throw new Error("Invalid table entry");
          if (yU > IU) {
            const UU = cU[zU >> yU - IU];
            if (UU.len) throw new Error("Invalid table entry");
            if (UU.lit++, UU.p) {
              const XU = UU.p;
              UU.p = new Array(UU.lit);
              for (let zU = 0; zU < UU.lit - 1; ++zU) UU.p[zU] = XU[zU]
            } else UU.p = new Array(1);
            UU.p[UU.lit - 1] = XU
          } else if (yU) {
            let UU = 0;
            for (let QU = 1 << IU - yU; QU > 0; QU--) {
              const QU = cU[(zU << IU - yU) + UU];
              if (QU.len || QU.p) throw new Error("Invalid table entry");
              QU.len = yU, QU.lit = XU, UU++
            }
          }
        }
      }(EU, FU, oU, YU),
      function(UU, XU, zU, cU, yU, QU, AU, FU, oU) {
        let DU = 0,
          EU = 0;
        const YU = AU,
          NU = Math.trunc(cU.value + (yU + 7) / 8);
        for (; cU.value < NU;) {
          let yU = VU(DU, EU, zU, cU);
          for (DU = yU.c, EU = yU.lc; EU >= IU;) {
            const AU = XU[DU >> EU - IU & tU];
            if (AU.len) {
              EU -= AU.len;
              const UU = sU(AU.lit, QU, DU, EU, zU, cU, FU, oU, YU);
              UU && (DU = UU.c, EU = UU.lc)
            } else {
              if (!AU.p) throw new Error("hufDecode issues");
              let XU;
              for (XU = 0; XU < AU.lit; XU++) {
                const IU = lU(UU[AU.p[XU]]);
                for (; EU < IU && cU.value < NU;) yU = VU(DU, EU, zU, cU), DU = yU.c, EU = yU.lc;
                if (EU >= IU && xU(UU[AU.p[XU]]) == (DU >> EU - IU & (1 << IU) - 1)) {
                  EU -= IU;
                  const UU = sU(AU.p[XU], QU, DU, EU, zU, cU, FU, oU, YU);
                  UU && (DU = UU.c, EU = UU.lc);
                  break
                }
              }
              if (XU == AU.lit) throw new Error("HufDecode issues")
            }
          }
        }
        const pU = 8 - yU & 7;
        for (DU >>= pU, EU -= pU; EU > 0;) {
          const UU = XU[DU << IU - EU & tU];
          if (!UU.len) throw new Error("HufDecode issues");
          {
            EU -= UU.len;
            const XU = sU(UU.lit, QU, DU, EU, zU, cU, FU, oU, YU);
            XU && (DU = XU.c, EU = XU.lc)
          }
        }
      }(EU, YU, UU, zU, DU, oU, QU, yU, {
        value: 0
      })
    }

    function jU(UU) {
      return 65535 & UU
    }

    function KU(UU) {
      const XU = jU(UU);
      return XU > 32767 ? XU - 65536 : XU
    }

    function bU(UU, XU) {
      const zU = KU(UU),
        cU = KU(XU),
        yU = zU + (1 & cU) + (cU >> 1);
      return {
        a: yU,
        b: yU - cU
      }
    }

    function TU(UU, XU) {
      const zU = jU(UU),
        cU = jU(XU),
        yU = zU - (cU >> 1) & MU;
      return {
        a: cU + yU - HU & MU,
        b: yU
      }
    }

    function hU(UU, XU, zU, cU, yU, QU, AU) {
      const FU = AU < 16384,
        oU = zU > yU ? yU : zU;
      let DU, EU, YU = 1;
      for (; YU <= oU;) YU <<= 1;
      for (YU >>= 1, DU = YU, YU >>= 1; YU >= 1;) {
        EU = 0;
        const AU = EU + QU * (yU - DU),
          oU = QU * YU,
          NU = QU * DU,
          IU = cU * YU,
          pU = cU * DU;
        let aU, tU, gU, kU;
        for (; EU <= AU; EU += NU) {
          let yU = EU;
          const QU = EU + cU * (zU - DU);
          for (; yU <= QU; yU += pU) {
            const zU = yU + IU,
              cU = yU + oU,
              QU = cU + IU;
            if (FU) {
              let AU = bU(UU[yU + XU], UU[cU + XU]);
              aU = AU.a, gU = AU.b, AU = bU(UU[zU + XU], UU[QU + XU]), tU = AU.a, kU = AU.b, AU = bU(aU, tU), UU[yU + XU] = AU.a, UU[zU + XU] = AU.b, AU = bU(gU, kU), UU[cU + XU] = AU.a, UU[QU + XU] = AU.b
            } else {
              let AU = TU(UU[yU + XU], UU[cU + XU]);
              aU = AU.a, gU = AU.b, AU = TU(UU[zU + XU], UU[QU + XU]), tU = AU.a, kU = AU.b, AU = TU(aU, tU), UU[yU + XU] = AU.a, UU[zU + XU] = AU.b, AU = TU(gU, kU), UU[cU + XU] = AU.a, UU[QU + XU] = AU.b
            }
          }
          if (zU & YU) {
            const zU = yU + oU;
            let cU;
            cU = FU ? bU(UU[yU + XU], UU[zU + XU]) : TU(UU[yU + XU], UU[zU + XU]), aU = cU.a, UU[zU + XU] = cU.b, UU[yU + XU] = aU
          }
        }
        if (yU & YU) {
          let yU = EU;
          const QU = EU + cU * (zU - DU);
          for (; yU <= QU; yU += pU) {
            const zU = yU + IU;
            let cU;
            cU = FU ? bU(UU[yU + XU], UU[zU + XU]) : TU(UU[yU + XU], UU[zU + XU]), aU = cU.a, UU[zU + XU] = cU.b, UU[yU + XU] = aU
          }
        }
        DU = YU, YU >>= 1
      }
      return EU
    }

    function UX(UU) {
      return new DataView(UU.array.buffer, UU.offset.value, UU.size)
    }

    function XX(UU) {
      const XU = UU.viewer.buffer.slice(UU.offset.value, UU.offset.value + UU.size),
        zU = new Uint8Array(function(UU) {
          let XU = UU.byteLength;
          const zU = [];
          let cU = 0;
          const yU = new DataView(UU);
          for (; XU > 0;) {
            const UU = yU.getInt8(cU++);
            if (UU < 0) {
              const QU = -UU;
              XU -= QU + 1;
              for (let UU = 0; UU < QU; UU++) zU.push(yU.getUint8(cU++))
            } else {
              const QU = UU;
              XU -= 2;
              const AU = yU.getUint8(cU++);
              for (let UU = 0; UU < QU + 1; UU++) zU.push(AU)
            }
          }
          return zU
        }(XU)),
        cU = new Uint8Array(zU.length);
      return rU(zU), uU(zU, cU), new DataView(cU.buffer)
    }

    function zX(UU) {
      const XU = UU.array.slice(UU.offset.value, UU.offset.value + UU.size),
        zU = fflate.unzlibSync(XU),
        cU = new Uint8Array(zU.length);
      return rU(zU), uU(zU, cU), new DataView(cU.buffer)
    }

    function cX(UU) {
      const XU = UU.array.slice(UU.offset.value, UU.offset.value + UU.size),
        zU = fflate.unzlibSync(XU),
        cU = UU.lines * UU.channels * UU.width,
        yU = 1 == UU.type ? new Uint16Array(cU) : new Uint32Array(cU);
      let QU = 0,
        AU = 0;
      const FU = new Array(4);
      for (let oU = 0; oU < UU.lines; oU++)
        for (let XU = 0; XU < UU.channels; XU++) {
          let XU = 0;
          switch (UU.type) {
            case 1:
              FU[0] = QU, FU[1] = FU[0] + UU.width, QU = FU[1] + UU.width;
              for (let cU = 0; cU < UU.width; ++cU) {
                XU += zU[FU[0]++] << 8 | zU[FU[1]++], yU[AU] = XU, AU++
              }
              break;
            case 2:
              FU[0] = QU, FU[1] = FU[0] + UU.width, FU[2] = FU[1] + UU.width, QU = FU[2] + UU.width;
              for (let cU = 0; cU < UU.width; ++cU) {
                XU += zU[FU[0]++] << 24 | zU[FU[1]++] << 16 | zU[FU[2]++] << 8, yU[AU] = XU, AU++
              }
          }
        }
      return new DataView(yU.buffer)
    }

    function yX(UU) {
      const XU = UU.viewer,
        zU = {
          value: UU.offset.value
        },
        cU = new Uint16Array(UU.width * UU.scanlineBlockSize * (UU.channels * UU.type)),
        yU = new Uint8Array(NU);
      let QU = 0;
      const AU = new Array(UU.channels);
      for (let DU = 0; DU < UU.channels; DU++) AU[DU] = {}, AU[DU].start = QU, AU[DU].end = AU[DU].start, AU[DU].nx = UU.width, AU[DU].ny = UU.lines, AU[DU].size = UU.type, QU += AU[DU].nx * AU[DU].ny * AU[DU].size;
      const FU = LU(XU, zU),
        oU = LU(XU, zU);
      if (oU >= NU) throw new Error("Wrong PIZ_COMPRESSION BITMAP_SIZE");
      if (FU <= oU)
        for (let DU = 0; DU < oU - FU + 1; DU++) yU[DU + FU] = dU(XU, zU);
      const EU = new Uint16Array(YU),
        IU = function(UU, XU) {
          let zU = 0;
          for (let yU = 0; yU < YU; ++yU)(0 == yU || UU[yU >> 3] & 1 << (7 & yU)) && (XU[zU++] = yU);
          const cU = zU - 1;
          for (; zU < YU;) XU[zU++] = 0;
          return cU
        }(yU, EU),
        pU = WU(XU, zU);
      JU(UU.array, XU, zU, pU, cU, QU);
      for (let DU = 0; DU < UU.channels; ++DU) {
        const UU = AU[DU];
        for (let XU = 0; XU < AU[DU].size; ++XU) hU(cU, UU.start + XU, UU.nx, UU.size, UU.ny, UU.nx * UU.size, IU)
      }! function(UU, XU, zU) {
        for (let cU = 0; cU < zU; ++cU) XU[cU] = UU[XU[cU]]
      }(EU, cU, QU);
      let aU = 0;
      const tU = new Uint8Array(cU.buffer.byteLength);
      for (let YU = 0; YU < UU.lines; YU++)
        for (let XU = 0; XU < UU.channels; XU++) {
          const UU = AU[XU],
            zU = UU.nx * UU.size,
            yU = new Uint8Array(cU.buffer, UU.end * DU, zU * DU);
          tU.set(yU, aU), aU += zU * DU, UU.end += zU
        }
      return new DataView(tU.buffer)
    }
    var QX, AX = zU(41205);
    ! function(UU) {
      UU[UU.Float = 0] = "Float", UU[UU.HalfFloat = 1] = "HalfFloat"
    }(QX || (QX = {}));
    class FX {}
    async function oX(UU, XU, zU, cU) {
      const yU = {
        size: 0,
        viewer: XU,
        array: new Uint8Array(XU.buffer),
        offset: zU,
        width: UU.dataWindow.xMax - UU.dataWindow.xMin + 1,
        height: UU.dataWindow.yMax - UU.dataWindow.yMin + 1,
        channels: UU.channels.length,
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
      switch (UU.compression) {
        case BU.NO_COMPRESSION:
          yU.lines = 1, yU.uncompress = UX;
          break;
        case BU.RLE_COMPRESSION:
          yU.lines = 1, yU.uncompress = XX;
          break;
        case BU.ZIPS_COMPRESSION:
          yU.lines = 1, yU.uncompress = zX, await AX.j.LoadScriptAsync(FX.FFLATEUrl);
          break;
        case BU.ZIP_COMPRESSION:
          yU.lines = 16, yU.uncompress = zX, await AX.j.LoadScriptAsync(FX.FFLATEUrl);
          break;
        case BU.PIZ_COMPRESSION:
          yU.lines = 32, yU.uncompress = yX;
          break;
        case BU.PXR24_COMPRESSION:
          yU.lines = 16, yU.uncompress = cX, await AX.j.LoadScriptAsync(FX.FFLATEUrl);
          break;
        default:
          throw new Error(BU[UU.compression] + " is unsupported")
      }
      yU.scanlineBlockSize = yU.lines;
      const QU = {};
      for (const FU of UU.channels) switch (FU.name) {
        case "R":
        case "G":
        case "B":
        case "A":
        case "Y":
          QU[FU.name] = !0, yU.type = FU.pixelType
      }
      let AU = !1;
      if (QU.R && QU.G && QU.B && QU.A) yU.outputChannels = 4, yU.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (QU.R && QU.G && QU.B) AU = !0, yU.outputChannels = 4, yU.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (QU.R && QU.G) yU.outputChannels = 2, yU.decodeChannels = {
        R: 0,
        G: 1
      };
      else if (QU.R) yU.outputChannels = 1, yU.decodeChannels = {
        R: 0
      };
      else {
        if (!QU.Y) throw new Error("EXRLoader.parse: file contains unsupported data channels.");
        yU.outputChannels = 1, yU.decodeChannels = {
          Y: 0
        }
      }
      if (1 === yU.type) switch (cU) {
        case QX.Float:
          yU.getter = qU, yU.inputSize = DU;
          break;
        case QX.HalfFloat:
          yU.getter = LU, yU.inputSize = DU
      } else {
        if (2 !== yU.type) throw new Error("Unsupported pixelType " + yU.type + " for " + UU.compression);
        switch (cU) {
          case QX.Float:
            yU.getter = wU, yU.inputSize = FU;
            break;
          case QX.HalfFloat:
            yU.getter = OU, yU.inputSize = FU
        }
      }
      yU.blockCount = yU.height / yU.scanlineBlockSize;
      for (let FU = 0; FU < yU.blockCount; FU++) CU(XU, zU);
      const oU = yU.width * yU.height * yU.outputChannels;
      switch (cU) {
        case QX.Float:
          yU.byteArray = new Float32Array(oU), yU.textureType = 1, AU && yU.byteArray.fill(1, 0, oU);
          break;
        case QX.HalfFloat:
          yU.byteArray = new Uint16Array(oU), yU.textureType = 2, AU && yU.byteArray.fill(15360, 0, oU);
          break;
        default:
          throw new Error("Unsupported type: " + cU)
      }
      let EU = 0;
      for (const FU of UU.channels) void 0 !== yU.decodeChannels[FU.name] && (yU.channelLineOffsets[FU.name] = EU * yU.width), EU += 2 * FU.pixelType;
      return yU.bytesPerLine = yU.width * EU, yU.outLineWidth = yU.width * yU.outputChannels, "INCREASING_Y" === UU.lineOrder ? yU.scanOrder = UU => UU : yU.scanOrder = UU => yU.height - 1 - UU, 4 == yU.outputChannels ? (yU.format = 5, yU.linearSpace = !0) : (yU.format = 6, yU.linearSpace = !1), yU
    }

    function DX(UU, XU, zU, cU) {
      const yU = {
        value: 0
      };
      for (let QU = 0; QU < UU.height / UU.scanlineBlockSize; QU++) {
        const AU = PU(zU, cU) - XU.dataWindow.yMin;
        UU.size = WU(zU, cU), UU.lines = AU + UU.scanlineBlockSize > UU.height ? UU.height - AU : UU.scanlineBlockSize;
        const FU = UU.size < UU.lines * UU.bytesPerLine && UU.uncompress ? UU.uncompress(UU) : UX(UU);
        cU.value += UU.size;
        for (let zU = 0; zU < UU.scanlineBlockSize; zU++) {
          const cU = QU * UU.scanlineBlockSize,
            AU = zU + UU.scanOrder(cU);
          if (AU >= UU.height) continue;
          const oU = zU * UU.bytesPerLine,
            DU = (UU.height - 1 - AU) * UU.outLineWidth;
          for (let zU = 0; zU < UU.channels; zU++) {
            const cU = XU.channels[zU].name,
              QU = UU.channelLineOffsets[cU],
              AU = UU.decodeChannels[cU];
            if (void 0 !== AU) {
              yU.value = oU + QU;
              for (let XU = 0; XU < UU.width; XU++) {
                const zU = DU + XU * UU.outputChannels + AU;
                UU.byteArray && (UU.byteArray[zU] = UU.getter(FU, yU))
              }
            }
          }
        }
      }
    }
    FX.DefaultOutputType = QX.HalfFloat, FX.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class EX {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(UU, XU, zU, cU, yU) {
        throw ".exr not supported in Cube."
      }
      loadData(UU, XU, zU) {
        const yU = new DataView(UU.buffer),
          QU = {
            value: 0
          },
          AU = iU(yU, QU);
        oX(AU, yU, QU, FX.DefaultOutputType).then((UU => {
          DX(UU, AU, yU, QU);
          const cU = AU.dataWindow.xMax - AU.dataWindow.xMin + 1,
            FU = AU.dataWindow.yMax - AU.dataWindow.yMin + 1;
          zU(cU, FU, XU.generateMipMaps, !1, (() => {
            const zU = XU.qp();
            XU.format = AU.format, XU.type = UU.textureType, XU.invertY = !1, XU._gammaSpace = !AU.linearSpace, UU.byteArray && zU._uploadDataToTextureDirectly(XU, UU.byteArray, 0, 0, void 0, !0)
          }))
        })).catch((UU => {
          cU.b.Error("Failed to load EXR texture: ", UU)
        }))
      }
    }
    async function YX(UU) {
      const XU = new DataView(UU),
        zU = {
          value: 0
        },
        yU = iU(XU, zU);
      try {
        const UU = await oX(yU, XU, zU, QX.Float);
        return DX(UU, yU, XU, zU), UU.byteArray ? {
          width: yU.dataWindow.xMax - yU.dataWindow.xMin + 1,
          height: yU.dataWindow.yMax - yU.dataWindow.yMin + 1,
          data: new Float32Array(UU.byteArray)
        } : (cU.b.Error("Failed to decode EXR data: No byte array available."), {
          width: 0,
          height: 0,
          data: null
        })
      } catch (QU) {
        cU.b.Error("Failed to load EXR data: ", QU)
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
for (const UU in modules) Object.freeze(modules[UU]);