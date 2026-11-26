export const id = 624;
export const ids = [624];
export const modules = {
  44744: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      ReadExrDataAsync: () => Ze,
      _ExrTextureLoader: () => we
    });
    var JV = xV(39870),
      YV = xV(38303),
      UV = xV(41323);
    const yV = 4,
      pV = 4,
      QV = 1,
      nV = 2,
      wV = 8,
      ZV = 65536,
      vV = ZV >> 3,
      rV = 14,
      kV = 65537,
      bV = 1 << rV,
      EV = bV - 1,
      BV = 59,
      jV = 63,
      qV = 2 + jV - BV;
    var tV, FV;

    function TV(VV, eV) {
      const xV = new Uint8Array(VV);
      let JV = 0;
      for (; 0 != xV[eV.value + JV];) JV += 1;
      const YV = (new TextDecoder).decode(xV.slice(eV.value, eV.value + JV));
      return eV.value = eV.value + JV + 1, YV
    }

    function PV(VV, eV) {
      const xV = VV.getInt32(eV.value, !0);
      return eV.value += yV, xV
    }

    function AV(VV, eV) {
      const xV = VV.getUint32(eV.value, !0);
      return eV.value += yV, xV
    }

    function NV(VV, eV) {
      const xV = VV.getUint8(eV.value);
      return eV.value += QV, xV
    }

    function XV(VV, eV) {
      const xV = VV.getUint16(eV.value, !0);
      return eV.value += nV, xV
    }

    function MV(VV, eV) {
      const xV = VV[eV.value];
      return eV.value += QV, xV
    }

    function zV(VV, eV) {
      let xV;
      return xV = "getBigInt64" in DataView.prototype ? Number(VV.getBigInt64(eV.value, !0)) : VV.getUint32(eV.value + 4, !0) + Number(VV.getUint32(eV.value, !0) << 32), eV.value += wV, xV
    }

    function GV(VV, eV) {
      const xV = VV.getFloat32(eV.value, !0);
      return eV.value += pV, xV
    }

    function WV(VV, eV) {
      return (0, UV.c)(XV(VV, eV))
    }

    function RV(VV, eV) {
      return (0, UV.j)((0, YV.Clamp)(GV(VV, eV), -UV.f, UV.f))
    }

    function gV(VV, eV, xV, JV) {
      switch (xV) {
        case "string":
        case "stringvector":
        case "iccProfile":
          return function(VV, eV, xV) {
            const JV = (new TextDecoder).decode(new Uint8Array(VV).slice(eV.value, eV.value + xV));
            return eV.value = eV.value + xV, JV
          }(VV.buffer, eV, JV);
        case "chlist":
          return function(VV, eV, xV) {
            const JV = eV.value,
              YV = [];
            for (; eV.value < JV + xV - 1;) {
              const xV = TV(VV.buffer, eV),
                JV = PV(VV, eV),
                UV = NV(VV, eV);
              eV.value += 3;
              const yV = PV(VV, eV),
                pV = PV(VV, eV);
              YV.push({
                name: xV,
                pixelType: JV,
                pLinear: UV,
                xSampling: yV,
                ySampling: pV
              })
            }
            return eV.value += 1, YV
          }(VV, eV, JV);
        case "chromaticities":
          return function(VV, eV) {
            return {
              redX: GV(VV, eV),
              redY: GV(VV, eV),
              greenX: GV(VV, eV),
              greenY: GV(VV, eV),
              blueX: GV(VV, eV),
              blueY: GV(VV, eV),
              whiteX: GV(VV, eV),
              whiteY: GV(VV, eV)
            }
          }(VV, eV);
        case "compression":
          return function(VV, eV) {
            return NV(VV, eV)
          }(VV, eV);
        case "box2i":
          return function(VV, eV) {
            return {
              xMin: PV(VV, eV),
              yMin: PV(VV, eV),
              xMax: PV(VV, eV),
              yMax: PV(VV, eV)
            }
          }(VV, eV);
        case "lineOrder":
          return function(VV, eV) {
            const xV = NV(VV, eV);
            return FV[xV]
          }(VV, eV);
        case "float":
          return GV(VV, eV);
        case "v2f":
          return function(VV, eV) {
            return [GV(VV, eV), GV(VV, eV)]
          }(VV, eV);
        case "v3f":
          return function(VV, eV) {
            return [GV(VV, eV), GV(VV, eV), GV(VV, eV)]
          }(VV, eV);
        case "int":
          return PV(VV, eV);
        case "rational":
          return function(VV, eV) {
            return [PV(VV, eV), AV(VV, eV)]
          }(VV, eV);
        case "timecode":
          return function(VV, eV) {
            return [AV(VV, eV), AV(VV, eV)]
          }(VV, eV);
        case "preview":
          return eV.value += JV, "skipped";
        default:
          return void(eV.value += JV)
      }
    }

    function DV(VV) {
      for (let eV = 1; eV < VV.length; eV++) {
        const xV = VV[eV - 1] + VV[eV] - 128;
        VV[eV] = xV
      }
    }

    function iV(VV, eV) {
      let xV = 0,
        JV = Math.floor((VV.length + 1) / 2),
        YV = 0;
      const UV = VV.length - 1;
      for (; !(YV > UV) && (eV[YV++] = VV[xV++], !(YV > UV));) eV[YV++] = VV[JV++]
    }! function(VV) {
      VV[VV.NO_COMPRESSION = 0] = "NO_COMPRESSION", VV[VV.RLE_COMPRESSION = 1] = "RLE_COMPRESSION", VV[VV.ZIPS_COMPRESSION = 2] = "ZIPS_COMPRESSION", VV[VV.ZIP_COMPRESSION = 3] = "ZIP_COMPRESSION", VV[VV.PIZ_COMPRESSION = 4] = "PIZ_COMPRESSION", VV[VV.PXR24_COMPRESSION = 5] = "PXR24_COMPRESSION"
    }(tV || (tV = {})),
    function(VV) {
      VV[VV.INCREASING_Y = 0] = "INCREASING_Y", VV[VV.DECREASING_Y = 1] = "DECREASING_Y"
    }(FV || (FV = {}));
    const CV = 20000630;

    function aV(VV, eV) {
      if (VV.getUint32(0, !0) != CV) throw new Error("Incorrect OpenEXR format");
      const xV = VV.getUint8(4),
        YV = VV.getUint8(5),
        UV = {
          singleTile: !!(2 & YV),
          longName: !!(4 & YV),
          deepFormat: !!(8 & YV),
          multiPart: !!(16 & YV)
        };
      eV.value = 8;
      const yV = {};
      let pV = !0;
      for (; pV;) {
        const xV = TV(VV.buffer, eV);
        if (xV) {
          const YV = TV(VV.buffer, eV),
            UV = gV(VV, eV, YV, AV(VV, eV));
          void 0 === UV ? JV.b.Warn(`Unknown header attribute type ${YV}'.`) : yV[xV] = UV
        } else pV = !1
      }
      if (0 != (-5 & YV)) throw new Error("Unsupported file format");
      return {
        version: xV,
        spec: UV,
        ...yV
      }
    }
    const oV = 32768,
      cV = 65535;

    function hV(VV, eV, xV, JV, YV) {
      for (; xV < VV;) eV = eV << 8 | MV(JV, YV), xV += 8;
      return {
        l: eV >> (xV -= VV) & (1 << VV) - 1,
        c: eV,
        lc: xV
      }
    }

    function lV(VV, eV, xV, JV) {
      return {
        c: VV = VV << 8 | MV(xV, JV),
        lc: eV += 8
      }
    }

    function LV(VV, eV, xV, JV, YV, UV, yV, pV, QV) {
      if (VV == eV) {
        if (JV < 8) {
          const VV = lV(xV, JV, YV, UV);
          xV = VV.c, JV = VV.lc
        }
        let VV = xV >> (JV -= 8);
        if (VV = new Uint8Array([VV])[0], pV.value + VV > QV) return null;
        const eV = yV[pV.value - 1];
        for (; VV-- > 0;) yV[pV.value++] = eV
      } else {
        if (!(pV.value < QV)) return null;
        yV[pV.value++] = VV
      }
      return {
        c: xV,
        lc: JV
      }
    }
    const fV = new Array(59);

    function mV(VV, eV, xV, JV, YV, UV) {
      const yV = eV;
      let pV = 0,
        QV = 0;
      for (; JV <= YV; JV++) {
        if (yV.value - eV.value > xV) return;
        let nV = hV(6, pV, QV, VV, yV);
        const wV = nV.l;
        if (pV = nV.c, QV = nV.lc, UV[JV] = wV, wV == jV) {
          if (yV.value - eV.value > xV) throw new Error("Error in HufUnpackEncTable");
          nV = hV(8, pV, QV, VV, yV);
          let wV = nV.l + qV;
          if (pV = nV.c, QV = nV.lc, JV + wV > YV + 1) throw new Error("Error in HufUnpackEncTable");
          for (; wV--;) UV[JV++] = 0;
          JV--
        } else if (wV >= BV) {
          let VV = wV - BV + 2;
          if (JV + VV > YV + 1) throw new Error("Error in HufUnpackEncTable");
          for (; VV--;) UV[JV++] = 0;
          JV--
        }
      }! function(VV) {
        for (let xV = 0; xV <= 58; ++xV) fV[xV] = 0;
        for (let xV = 0; xV < kV; ++xV) fV[VV[xV]] += 1;
        let eV = 0;
        for (let xV = 58; xV > 0; --xV) {
          const VV = eV + fV[xV] >> 1;
          fV[xV] = eV, eV = VV
        }
        for (let xV = 0; xV < kV; ++xV) {
          const eV = VV[xV];
          eV > 0 && (VV[xV] = eV | fV[eV]++ << 6)
        }
      }(UV)
    }

    function KV(VV) {
      return 63 & VV
    }

    function HV(VV) {
      return VV >> 6
    }

    function uV(VV, eV, xV, JV, YV, UV) {
      const yV = xV.value,
        pV = AV(eV, xV),
        QV = AV(eV, xV);
      xV.value += 4;
      const nV = AV(eV, xV);
      if (xV.value += 4, pV < 0 || pV >= kV || QV < 0 || QV >= kV) throw new Error("Wrong HUF_ENCSIZE");
      const wV = new Array(kV),
        ZV = new Array(bV);
      ! function(VV) {
        for (let eV = 0; eV < bV; eV++) VV[eV] = {}, VV[eV].len = 0, VV[eV].lit = 0, VV[eV].p = null
      }(ZV);
      if (mV(VV, xV, JV - (xV.value - yV), pV, QV, wV), nV > 8 * (JV - (xV.value - yV))) throw new Error("Wrong hufUncompress");
      ! function(VV, eV, xV, JV) {
        for (; eV <= xV; eV++) {
          const xV = HV(VV[eV]),
            YV = KV(VV[eV]);
          if (xV >> YV) throw new Error("Invalid table entry");
          if (YV > rV) {
            const VV = JV[xV >> YV - rV];
            if (VV.len) throw new Error("Invalid table entry");
            if (VV.lit++, VV.p) {
              const eV = VV.p;
              VV.p = new Array(VV.lit);
              for (let xV = 0; xV < VV.lit - 1; ++xV) VV.p[xV] = eV[xV]
            } else VV.p = new Array(1);
            VV.p[VV.lit - 1] = eV
          } else if (YV) {
            let VV = 0;
            for (let UV = 1 << rV - YV; UV > 0; UV--) {
              const UV = JV[(xV << rV - YV) + VV];
              if (UV.len || UV.p) throw new Error("Invalid table entry");
              UV.len = YV, UV.lit = eV, VV++
            }
          }
        }
      }(wV, pV, QV, ZV),
      function(VV, eV, xV, JV, YV, UV, yV, pV, QV) {
        let nV = 0,
          wV = 0;
        const ZV = yV,
          vV = Math.trunc(JV.value + (YV + 7) / 8);
        for (; JV.value < vV;) {
          let YV = lV(nV, wV, xV, JV);
          for (nV = YV.c, wV = YV.lc; wV >= rV;) {
            const yV = eV[nV >> wV - rV & EV];
            if (yV.len) {
              wV -= yV.len;
              const VV = LV(yV.lit, UV, nV, wV, xV, JV, pV, QV, ZV);
              VV && (nV = VV.c, wV = VV.lc)
            } else {
              if (!yV.p) throw new Error("hufDecode issues");
              let eV;
              for (eV = 0; eV < yV.lit; eV++) {
                const rV = KV(VV[yV.p[eV]]);
                for (; wV < rV && JV.value < vV;) YV = lV(nV, wV, xV, JV), nV = YV.c, wV = YV.lc;
                if (wV >= rV && HV(VV[yV.p[eV]]) == (nV >> wV - rV & (1 << rV) - 1)) {
                  wV -= rV;
                  const VV = LV(yV.p[eV], UV, nV, wV, xV, JV, pV, QV, ZV);
                  VV && (nV = VV.c, wV = VV.lc);
                  break
                }
              }
              if (eV == yV.lit) throw new Error("HufDecode issues")
            }
          }
        }
        const kV = 8 - YV & 7;
        for (nV >>= kV, wV -= kV; wV > 0;) {
          const VV = eV[nV << rV - wV & EV];
          if (!VV.len) throw new Error("HufDecode issues");
          {
            wV -= VV.len;
            const eV = LV(VV.lit, UV, nV, wV, xV, JV, pV, QV, ZV);
            eV && (nV = eV.c, wV = eV.lc)
          }
        }
      }(wV, ZV, VV, xV, nV, QV, UV, YV, {
        value: 0
      })
    }

    function sV(VV) {
      return 65535 & VV
    }

    function SV(VV) {
      const eV = sV(VV);
      return eV > 32767 ? eV - 65536 : eV
    }

    function IV(VV, eV) {
      const xV = SV(VV),
        JV = SV(eV),
        YV = xV + (1 & JV) + (JV >> 1);
      return {
        a: YV,
        b: YV - JV
      }
    }

    function dV(VV, eV) {
      const xV = sV(VV),
        JV = sV(eV),
        YV = xV - (JV >> 1) & cV;
      return {
        a: JV + YV - oV & cV,
        b: YV
      }
    }

    function OV(VV, eV, xV, JV, YV, UV, yV) {
      const pV = yV < 16384,
        QV = xV > YV ? YV : xV;
      let nV, wV, ZV = 1;
      for (; ZV <= QV;) ZV <<= 1;
      for (ZV >>= 1, nV = ZV, ZV >>= 1; ZV >= 1;) {
        wV = 0;
        const yV = wV + UV * (YV - nV),
          QV = UV * ZV,
          vV = UV * nV,
          rV = JV * ZV,
          kV = JV * nV;
        let bV, EV, BV, jV;
        for (; wV <= yV; wV += vV) {
          let YV = wV;
          const UV = wV + JV * (xV - nV);
          for (; YV <= UV; YV += kV) {
            const xV = YV + rV,
              JV = YV + QV,
              UV = JV + rV;
            if (pV) {
              let yV = IV(VV[YV + eV], VV[JV + eV]);
              bV = yV.a, BV = yV.b, yV = IV(VV[xV + eV], VV[UV + eV]), EV = yV.a, jV = yV.b, yV = IV(bV, EV), VV[YV + eV] = yV.a, VV[xV + eV] = yV.b, yV = IV(BV, jV), VV[JV + eV] = yV.a, VV[UV + eV] = yV.b
            } else {
              let yV = dV(VV[YV + eV], VV[JV + eV]);
              bV = yV.a, BV = yV.b, yV = dV(VV[xV + eV], VV[UV + eV]), EV = yV.a, jV = yV.b, yV = dV(bV, EV), VV[YV + eV] = yV.a, VV[xV + eV] = yV.b, yV = dV(BV, jV), VV[JV + eV] = yV.a, VV[UV + eV] = yV.b
            }
          }
          if (xV & ZV) {
            const xV = YV + QV;
            let JV;
            JV = pV ? IV(VV[YV + eV], VV[xV + eV]) : dV(VV[YV + eV], VV[xV + eV]), bV = JV.a, VV[xV + eV] = JV.b, VV[YV + eV] = bV
          }
        }
        if (YV & ZV) {
          let YV = wV;
          const UV = wV + JV * (xV - nV);
          for (; YV <= UV; YV += kV) {
            const xV = YV + rV;
            let JV;
            JV = pV ? IV(VV[YV + eV], VV[xV + eV]) : dV(VV[YV + eV], VV[xV + eV]), bV = JV.a, VV[xV + eV] = JV.b, VV[YV + eV] = bV
          }
        }
        nV = ZV, ZV >>= 1
      }
      return wV
    }

    function Ve(VV) {
      return new DataView(VV.array.buffer, VV.offset.value, VV.size)
    }

    function ee(VV) {
      const eV = VV.viewer.buffer.slice(VV.offset.value, VV.offset.value + VV.size),
        xV = new Uint8Array(function(VV) {
          let eV = VV.byteLength;
          const xV = [];
          let JV = 0;
          const YV = new DataView(VV);
          for (; eV > 0;) {
            const VV = YV.getInt8(JV++);
            if (VV < 0) {
              const UV = -VV;
              eV -= UV + 1;
              for (let VV = 0; VV < UV; VV++) xV.push(YV.getUint8(JV++))
            } else {
              const UV = VV;
              eV -= 2;
              const yV = YV.getUint8(JV++);
              for (let VV = 0; VV < UV + 1; VV++) xV.push(yV)
            }
          }
          return xV
        }(eV)),
        JV = new Uint8Array(xV.length);
      return DV(xV), iV(xV, JV), new DataView(JV.buffer)
    }

    function xe(VV) {
      const eV = VV.array.slice(VV.offset.value, VV.offset.value + VV.size),
        xV = fflate.unzlibSync(eV),
        JV = new Uint8Array(xV.length);
      return DV(xV), iV(xV, JV), new DataView(JV.buffer)
    }

    function Je(VV) {
      const eV = VV.array.slice(VV.offset.value, VV.offset.value + VV.size),
        xV = fflate.unzlibSync(eV),
        JV = VV.lines * VV.channels * VV.width,
        YV = 1 == VV.type ? new Uint16Array(JV) : new Uint32Array(JV);
      let UV = 0,
        yV = 0;
      const pV = new Array(4);
      for (let QV = 0; QV < VV.lines; QV++)
        for (let eV = 0; eV < VV.channels; eV++) {
          let eV = 0;
          switch (VV.type) {
            case 1:
              pV[0] = UV, pV[1] = pV[0] + VV.width, UV = pV[1] + VV.width;
              for (let JV = 0; JV < VV.width; ++JV) {
                eV += xV[pV[0]++] << 8 | xV[pV[1]++], YV[yV] = eV, yV++
              }
              break;
            case 2:
              pV[0] = UV, pV[1] = pV[0] + VV.width, pV[2] = pV[1] + VV.width, UV = pV[2] + VV.width;
              for (let JV = 0; JV < VV.width; ++JV) {
                eV += xV[pV[0]++] << 24 | xV[pV[1]++] << 16 | xV[pV[2]++] << 8, YV[yV] = eV, yV++
              }
          }
        }
      return new DataView(YV.buffer)
    }

    function Ye(VV) {
      const eV = VV.viewer,
        xV = {
          value: VV.offset.value
        },
        JV = new Uint16Array(VV.width * VV.scanlineBlockSize * (VV.channels * VV.type)),
        YV = new Uint8Array(vV);
      let UV = 0;
      const yV = new Array(VV.channels);
      for (let nV = 0; nV < VV.channels; nV++) yV[nV] = {}, yV[nV].start = UV, yV[nV].end = yV[nV].start, yV[nV].nx = VV.width, yV[nV].ny = VV.lines, yV[nV].size = VV.type, UV += yV[nV].nx * yV[nV].ny * yV[nV].size;
      const pV = XV(eV, xV),
        QV = XV(eV, xV);
      if (QV >= vV) throw new Error("Wrong PIZ_COMPRESSION BITMAP_SIZE");
      if (pV <= QV)
        for (let nV = 0; nV < QV - pV + 1; nV++) YV[nV + pV] = NV(eV, xV);
      const wV = new Uint16Array(ZV),
        rV = function(VV, eV) {
          let xV = 0;
          for (let YV = 0; YV < ZV; ++YV)(0 == YV || VV[YV >> 3] & 1 << (7 & YV)) && (eV[xV++] = YV);
          const JV = xV - 1;
          for (; xV < ZV;) eV[xV++] = 0;
          return JV
        }(YV, wV),
        kV = AV(eV, xV);
      uV(VV.array, eV, xV, kV, JV, UV);
      for (let nV = 0; nV < VV.channels; ++nV) {
        const VV = yV[nV];
        for (let eV = 0; eV < yV[nV].size; ++eV) OV(JV, VV.start + eV, VV.nx, VV.size, VV.ny, VV.nx * VV.size, rV)
      }! function(VV, eV, xV) {
        for (let JV = 0; JV < xV; ++JV) eV[JV] = VV[eV[JV]]
      }(wV, JV, UV);
      let bV = 0;
      const EV = new Uint8Array(JV.buffer.byteLength);
      for (let ZV = 0; ZV < VV.lines; ZV++)
        for (let eV = 0; eV < VV.channels; eV++) {
          const VV = yV[eV],
            xV = VV.nx * VV.size,
            YV = new Uint8Array(JV.buffer, VV.end * nV, xV * nV);
          EV.set(YV, bV), bV += xV * nV, VV.end += xV
        }
      return new DataView(EV.buffer)
    }
    var Ue, ye = xV(41341);
    ! function(VV) {
      VV[VV.Float = 0] = "Float", VV[VV.HalfFloat = 1] = "HalfFloat"
    }(Ue || (Ue = {}));
    class pe {}
    async function Qe(VV, eV, xV, JV) {
      const YV = {
        size: 0,
        viewer: eV,
        array: new Uint8Array(eV.buffer),
        offset: xV,
        width: VV.dataWindow.xMax - VV.dataWindow.xMin + 1,
        height: VV.dataWindow.yMax - VV.dataWindow.yMin + 1,
        channels: VV.channels.length,
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
      switch (VV.compression) {
        case tV.NO_COMPRESSION:
          YV.lines = 1, YV.uncompress = Ve;
          break;
        case tV.RLE_COMPRESSION:
          YV.lines = 1, YV.uncompress = ee;
          break;
        case tV.ZIPS_COMPRESSION:
          YV.lines = 1, YV.uncompress = xe, await ye.j.LoadScriptAsync(pe.FFLATEUrl);
          break;
        case tV.ZIP_COMPRESSION:
          YV.lines = 16, YV.uncompress = xe, await ye.j.LoadScriptAsync(pe.FFLATEUrl);
          break;
        case tV.PIZ_COMPRESSION:
          YV.lines = 32, YV.uncompress = Ye;
          break;
        case tV.PXR24_COMPRESSION:
          YV.lines = 16, YV.uncompress = Je, await ye.j.LoadScriptAsync(pe.FFLATEUrl);
          break;
        default:
          throw new Error(tV[VV.compression] + " is unsupported")
      }
      YV.scanlineBlockSize = YV.lines;
      const UV = {};
      for (const pV of VV.channels) switch (pV.name) {
        case "R":
        case "G":
        case "B":
        case "A":
        case "Y":
          UV[pV.name] = !0, YV.type = pV.pixelType
      }
      let yV = !1;
      if (UV.R && UV.G && UV.B && UV.A) YV.outputChannels = 4, YV.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (UV.R && UV.G && UV.B) yV = !0, YV.outputChannels = 4, YV.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (UV.R && UV.G) YV.outputChannels = 2, YV.decodeChannels = {
        R: 0,
        G: 1
      };
      else if (UV.R) YV.outputChannels = 1, YV.decodeChannels = {
        R: 0
      };
      else {
        if (!UV.Y) throw new Error("EXRLoader.parse: file contains unsupported data channels.");
        YV.outputChannels = 1, YV.decodeChannels = {
          Y: 0
        }
      }
      if (1 === YV.type) switch (JV) {
        case Ue.Float:
          YV.getter = WV, YV.inputSize = nV;
          break;
        case Ue.HalfFloat:
          YV.getter = XV, YV.inputSize = nV
      } else {
        if (2 !== YV.type) throw new Error("Unsupported pixelType " + YV.type + " for " + VV.compression);
        switch (JV) {
          case Ue.Float:
            YV.getter = GV, YV.inputSize = pV;
            break;
          case Ue.HalfFloat:
            YV.getter = RV, YV.inputSize = pV
        }
      }
      YV.blockCount = YV.height / YV.scanlineBlockSize;
      for (let pV = 0; pV < YV.blockCount; pV++) zV(eV, xV);
      const QV = YV.width * YV.height * YV.outputChannels;
      switch (JV) {
        case Ue.Float:
          YV.byteArray = new Float32Array(QV), YV.textureType = 1, yV && YV.byteArray.fill(1, 0, QV);
          break;
        case Ue.HalfFloat:
          YV.byteArray = new Uint16Array(QV), YV.textureType = 2, yV && YV.byteArray.fill(15360, 0, QV);
          break;
        default:
          throw new Error("Unsupported type: " + JV)
      }
      let wV = 0;
      for (const pV of VV.channels) void 0 !== YV.decodeChannels[pV.name] && (YV.channelLineOffsets[pV.name] = wV * YV.width), wV += 2 * pV.pixelType;
      return YV.bytesPerLine = YV.width * wV, YV.outLineWidth = YV.width * YV.outputChannels, "INCREASING_Y" === VV.lineOrder ? YV.scanOrder = VV => VV : YV.scanOrder = VV => YV.height - 1 - VV, 4 == YV.outputChannels ? (YV.format = 5, YV.linearSpace = !0) : (YV.format = 6, YV.linearSpace = !1), YV
    }

    function ne(VV, eV, xV, JV) {
      const YV = {
        value: 0
      };
      for (let UV = 0; UV < VV.height / VV.scanlineBlockSize; UV++) {
        const yV = PV(xV, JV) - eV.dataWindow.yMin;
        VV.size = AV(xV, JV), VV.lines = yV + VV.scanlineBlockSize > VV.height ? VV.height - yV : VV.scanlineBlockSize;
        const pV = VV.size < VV.lines * VV.bytesPerLine && VV.uncompress ? VV.uncompress(VV) : Ve(VV);
        JV.value += VV.size;
        for (let xV = 0; xV < VV.scanlineBlockSize; xV++) {
          const JV = UV * VV.scanlineBlockSize,
            yV = xV + VV.scanOrder(JV);
          if (yV >= VV.height) continue;
          const QV = xV * VV.bytesPerLine,
            nV = (VV.height - 1 - yV) * VV.outLineWidth;
          for (let xV = 0; xV < VV.channels; xV++) {
            const JV = eV.channels[xV].name,
              UV = VV.channelLineOffsets[JV],
              yV = VV.decodeChannels[JV];
            if (void 0 !== yV) {
              YV.value = QV + UV;
              for (let eV = 0; eV < VV.width; eV++) {
                const xV = nV + eV * VV.outputChannels + yV;
                VV.byteArray && (VV.byteArray[xV] = VV.getter(pV, YV))
              }
            }
          }
        }
      }
    }
    pe.DefaultOutputType = Ue.HalfFloat, pe.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class we {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(VV, eV, xV, JV, YV) {
        throw ".exr not supported in Cube."
      }
      loadData(VV, eV, xV) {
        const YV = new DataView(VV.buffer),
          UV = {
            value: 0
          },
          yV = aV(YV, UV);
        Qe(yV, YV, UV, pe.DefaultOutputType).then((VV => {
          ne(VV, yV, YV, UV);
          const JV = yV.dataWindow.xMax - yV.dataWindow.xMin + 1,
            pV = yV.dataWindow.yMax - yV.dataWindow.yMin + 1;
          xV(JV, pV, eV.generateMipMaps, !1, (() => {
            const xV = eV.sk();
            eV.format = yV.format, eV.type = VV.textureType, eV.invertY = !1, eV._gammaSpace = !yV.linearSpace, VV.byteArray && xV._uploadDataToTextureDirectly(eV, VV.byteArray, 0, 0, void 0, !0)
          }))
        })).catch((VV => {
          JV.b.Error("Failed to load EXR texture: ", VV)
        }))
      }
    }
    async function Ze(VV) {
      const eV = new DataView(VV),
        xV = {
          value: 0
        },
        YV = aV(eV, xV);
      try {
        const VV = await Qe(YV, eV, xV, Ue.Float);
        return ne(VV, YV, eV, xV), VV.byteArray ? {
          width: YV.dataWindow.xMax - YV.dataWindow.xMin + 1,
          height: YV.dataWindow.yMax - YV.dataWindow.yMin + 1,
          data: new Float32Array(VV.byteArray)
        } : (JV.b.Error("Failed to decode EXR data: No byte array available."), {
          width: 0,
          height: 0,
          data: null
        })
      } catch (UV) {
        JV.b.Error("Failed to load EXR data: ", UV)
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
for (const VV in modules) Object.freeze(modules[VV]);