export const id = 633;
export const ids = [633];
export const modules = {
  53897: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      ReadExrDataAsync: () => KJ,
      _ExrTextureLoader: () => VJ
    });
    var yR = GR(39914),
      tR = GR(38239),
      uR = GR(41594);
    const ZR = 4,
      qR = 4,
      iR = 1,
      fR = 2,
      VR = 8,
      KR = 65536,
      wR = KR >> 3,
      rR = 14,
      eR = 65537,
      aR = 1 << rR,
      LR = aR - 1,
      nR = 59,
      UR = 63,
      WR = 2 + UR - nR;
    var AR, CR;

    function XR(RR, JR) {
      const GR = new Uint8Array(RR);
      let yR = 0;
      for (; 0 != GR[JR.value + yR];) yR += 1;
      const tR = (new TextDecoder).decode(GR.slice(JR.value, JR.value + yR));
      return JR.value = JR.value + yR + 1, tR
    }

    function MR(RR, JR) {
      const GR = RR.getInt32(JR.value, !0);
      return JR.value += ZR, GR
    }

    function BR(RR, JR) {
      const GR = RR.getUint32(JR.value, !0);
      return JR.value += ZR, GR
    }

    function lR(RR, JR) {
      const GR = RR.getUint8(JR.value);
      return JR.value += iR, GR
    }

    function pR(RR, JR) {
      const GR = RR.getUint16(JR.value, !0);
      return JR.value += fR, GR
    }

    function gR(RR, JR) {
      const GR = RR[JR.value];
      return JR.value += iR, GR
    }

    function bR(RR, JR) {
      let GR;
      return GR = "getBigInt64" in DataView.prototype ? Number(RR.getBigInt64(JR.value, !0)) : RR.getUint32(JR.value + 4, !0) + Number(RR.getUint32(JR.value, !0) << 32), JR.value += VR, GR
    }

    function vR(RR, JR) {
      const GR = RR.getFloat32(JR.value, !0);
      return JR.value += qR, GR
    }

    function OR(RR, JR) {
      return (0, uR.e)(pR(RR, JR))
    }

    function xR(RR, JR) {
      return (0, uR.i)((0, tR.Clamp)(vR(RR, JR), -uR.g, uR.g))
    }

    function NR(RR, JR, GR, yR) {
      switch (GR) {
        case "string":
        case "stringvector":
        case "iccProfile":
          return function(RR, JR, GR) {
            const yR = (new TextDecoder).decode(new Uint8Array(RR).slice(JR.value, JR.value + GR));
            return JR.value = JR.value + GR, yR
          }(RR.buffer, JR, yR);
        case "chlist":
          return function(RR, JR, GR) {
            const yR = JR.value,
              tR = [];
            for (; JR.value < yR + GR - 1;) {
              const GR = XR(RR.buffer, JR),
                yR = MR(RR, JR),
                uR = lR(RR, JR);
              JR.value += 3;
              const ZR = MR(RR, JR),
                qR = MR(RR, JR);
              tR.push({
                name: GR,
                pixelType: yR,
                pLinear: uR,
                xSampling: ZR,
                ySampling: qR
              })
            }
            return JR.value += 1, tR
          }(RR, JR, yR);
        case "chromaticities":
          return function(RR, JR) {
            return {
              redX: vR(RR, JR),
              redY: vR(RR, JR),
              greenX: vR(RR, JR),
              greenY: vR(RR, JR),
              blueX: vR(RR, JR),
              blueY: vR(RR, JR),
              whiteX: vR(RR, JR),
              whiteY: vR(RR, JR)
            }
          }(RR, JR);
        case "compression":
          return function(RR, JR) {
            return lR(RR, JR)
          }(RR, JR);
        case "box2i":
          return function(RR, JR) {
            return {
              xMin: MR(RR, JR),
              yMin: MR(RR, JR),
              xMax: MR(RR, JR),
              yMax: MR(RR, JR)
            }
          }(RR, JR);
        case "lineOrder":
          return function(RR, JR) {
            const GR = lR(RR, JR);
            return CR[GR]
          }(RR, JR);
        case "float":
          return vR(RR, JR);
        case "v2f":
          return function(RR, JR) {
            return [vR(RR, JR), vR(RR, JR)]
          }(RR, JR);
        case "v3f":
          return function(RR, JR) {
            return [vR(RR, JR), vR(RR, JR), vR(RR, JR)]
          }(RR, JR);
        case "int":
          return MR(RR, JR);
        case "rational":
          return function(RR, JR) {
            return [MR(RR, JR), BR(RR, JR)]
          }(RR, JR);
        case "timecode":
          return function(RR, JR) {
            return [BR(RR, JR), BR(RR, JR)]
          }(RR, JR);
        case "preview":
          return JR.value += yR, "skipped";
        default:
          return void(JR.value += yR)
      }
    }

    function DR(RR) {
      for (let JR = 1; JR < RR.length; JR++) {
        const GR = RR[JR - 1] + RR[JR] - 128;
        RR[JR] = GR
      }
    }

    function HR(RR, JR) {
      let GR = 0,
        yR = Math.floor((RR.length + 1) / 2),
        tR = 0;
      const uR = RR.length - 1;
      for (; !(tR > uR) && (JR[tR++] = RR[GR++], !(tR > uR));) JR[tR++] = RR[yR++]
    }! function(RR) {
      RR[RR.NO_COMPRESSION = 0] = "NO_COMPRESSION", RR[RR.RLE_COMPRESSION = 1] = "RLE_COMPRESSION", RR[RR.ZIPS_COMPRESSION = 2] = "ZIPS_COMPRESSION", RR[RR.ZIP_COMPRESSION = 3] = "ZIP_COMPRESSION", RR[RR.PIZ_COMPRESSION = 4] = "PIZ_COMPRESSION", RR[RR.PXR24_COMPRESSION = 5] = "PXR24_COMPRESSION"
    }(AR || (AR = {})),
    function(RR) {
      RR[RR.INCREASING_Y = 0] = "INCREASING_Y", RR[RR.DECREASING_Y = 1] = "DECREASING_Y"
    }(CR || (CR = {}));
    const oR = 20000630;

    function cR(RR, JR) {
      if (RR.getUint32(0, !0) != oR) throw new Error("Incorrect OpenEXR format");
      const GR = RR.getUint8(4),
        tR = RR.getUint8(5),
        uR = {
          singleTile: !!(2 & tR),
          longName: !!(4 & tR),
          deepFormat: !!(8 & tR),
          multiPart: !!(16 & tR)
        };
      JR.value = 8;
      const ZR = {};
      let qR = !0;
      for (; qR;) {
        const GR = XR(RR.buffer, JR);
        if (GR) {
          const tR = XR(RR.buffer, JR),
            uR = NR(RR, JR, tR, BR(RR, JR));
          void 0 === uR ? yR.c.Warn(`Unknown header attribute type ${tR}'.`) : ZR[GR] = uR
        } else qR = !1
      }
      if (0 != (-5 & tR)) throw new Error("Unsupported file format");
      return {
        version: GR,
        spec: uR,
        ...ZR
      }
    }
    const PR = 32768,
      IR = 65535;

    function mR(RR, JR, GR, yR, tR) {
      for (; GR < RR;) JR = JR << 8 | gR(yR, tR), GR += 8;
      return {
        l: JR >> (GR -= RR) & (1 << RR) - 1,
        c: JR,
        lc: GR
      }
    }

    function zR(RR, JR, GR, yR) {
      return {
        c: RR = RR << 8 | gR(GR, yR),
        lc: JR += 8
      }
    }

    function SR(RR, JR, GR, yR, tR, uR, ZR, qR, iR) {
      if (RR == JR) {
        if (yR < 8) {
          const RR = zR(GR, yR, tR, uR);
          GR = RR.c, yR = RR.lc
        }
        let RR = GR >> (yR -= 8);
        if (RR = new Uint8Array([RR])[0], qR.value + RR > iR) return null;
        const JR = ZR[qR.value - 1];
        for (; RR-- > 0;) ZR[qR.value++] = JR
      } else {
        if (!(qR.value < iR)) return null;
        ZR[qR.value++] = RR
      }
      return {
        c: GR,
        lc: yR
      }
    }
    const jR = new Array(59);

    function dR(RR, JR, GR, yR, tR, uR) {
      const ZR = JR;
      let qR = 0,
        iR = 0;
      for (; yR <= tR; yR++) {
        if (ZR.value - JR.value > GR) return;
        let fR = mR(6, qR, iR, RR, ZR);
        const VR = fR.l;
        if (qR = fR.c, iR = fR.lc, uR[yR] = VR, VR == UR) {
          if (ZR.value - JR.value > GR) throw new Error("Error in HufUnpackEncTable");
          fR = mR(8, qR, iR, RR, ZR);
          let VR = fR.l + WR;
          if (qR = fR.c, iR = fR.lc, yR + VR > tR + 1) throw new Error("Error in HufUnpackEncTable");
          for (; VR--;) uR[yR++] = 0;
          yR--
        } else if (VR >= nR) {
          let RR = VR - nR + 2;
          if (yR + RR > tR + 1) throw new Error("Error in HufUnpackEncTable");
          for (; RR--;) uR[yR++] = 0;
          yR--
        }
      }! function(RR) {
        for (let GR = 0; GR <= 58; ++GR) jR[GR] = 0;
        for (let GR = 0; GR < eR; ++GR) jR[RR[GR]] += 1;
        let JR = 0;
        for (let GR = 58; GR > 0; --GR) {
          const RR = JR + jR[GR] >> 1;
          jR[GR] = JR, JR = RR
        }
        for (let GR = 0; GR < eR; ++GR) {
          const JR = RR[GR];
          JR > 0 && (RR[GR] = JR | jR[JR]++ << 6)
        }
      }(uR)
    }

    function ER(RR) {
      return 63 & RR
    }

    function YR(RR) {
      return RR >> 6
    }

    function kR(RR, JR, GR, yR, tR, uR) {
      const ZR = GR.value,
        qR = BR(JR, GR),
        iR = BR(JR, GR);
      GR.value += 4;
      const fR = BR(JR, GR);
      if (GR.value += 4, qR < 0 || qR >= eR || iR < 0 || iR >= eR) throw new Error("Wrong HUF_ENCSIZE");
      const VR = new Array(eR),
        KR = new Array(aR);
      ! function(RR) {
        for (let JR = 0; JR < aR; JR++) RR[JR] = {}, RR[JR].len = 0, RR[JR].lit = 0, RR[JR].p = null
      }(KR);
      if (dR(RR, GR, yR - (GR.value - ZR), qR, iR, VR), fR > 8 * (yR - (GR.value - ZR))) throw new Error("Wrong hufUncompress");
      ! function(RR, JR, GR, yR) {
        for (; JR <= GR; JR++) {
          const GR = YR(RR[JR]),
            tR = ER(RR[JR]);
          if (GR >> tR) throw new Error("Invalid table entry");
          if (tR > rR) {
            const RR = yR[GR >> tR - rR];
            if (RR.len) throw new Error("Invalid table entry");
            if (RR.lit++, RR.p) {
              const JR = RR.p;
              RR.p = new Array(RR.lit);
              for (let GR = 0; GR < RR.lit - 1; ++GR) RR.p[GR] = JR[GR]
            } else RR.p = new Array(1);
            RR.p[RR.lit - 1] = JR
          } else if (tR) {
            let RR = 0;
            for (let uR = 1 << rR - tR; uR > 0; uR--) {
              const uR = yR[(GR << rR - tR) + RR];
              if (uR.len || uR.p) throw new Error("Invalid table entry");
              uR.len = tR, uR.lit = JR, RR++
            }
          }
        }
      }(VR, qR, iR, KR),
      function(RR, JR, GR, yR, tR, uR, ZR, qR, iR) {
        let fR = 0,
          VR = 0;
        const KR = ZR,
          wR = Math.trunc(yR.value + (tR + 7) / 8);
        for (; yR.value < wR;) {
          let tR = zR(fR, VR, GR, yR);
          for (fR = tR.c, VR = tR.lc; VR >= rR;) {
            const ZR = JR[fR >> VR - rR & LR];
            if (ZR.len) {
              VR -= ZR.len;
              const RR = SR(ZR.lit, uR, fR, VR, GR, yR, qR, iR, KR);
              RR && (fR = RR.c, VR = RR.lc)
            } else {
              if (!ZR.p) throw new Error("hufDecode issues");
              let JR;
              for (JR = 0; JR < ZR.lit; JR++) {
                const rR = ER(RR[ZR.p[JR]]);
                for (; VR < rR && yR.value < wR;) tR = zR(fR, VR, GR, yR), fR = tR.c, VR = tR.lc;
                if (VR >= rR && YR(RR[ZR.p[JR]]) == (fR >> VR - rR & (1 << rR) - 1)) {
                  VR -= rR;
                  const RR = SR(ZR.p[JR], uR, fR, VR, GR, yR, qR, iR, KR);
                  RR && (fR = RR.c, VR = RR.lc);
                  break
                }
              }
              if (JR == ZR.lit) throw new Error("HufDecode issues")
            }
          }
        }
        const eR = 8 - tR & 7;
        for (fR >>= eR, VR -= eR; VR > 0;) {
          const RR = JR[fR << rR - VR & LR];
          if (!RR.len) throw new Error("HufDecode issues");
          {
            VR -= RR.len;
            const JR = SR(RR.lit, uR, fR, VR, GR, yR, qR, iR, KR);
            JR && (fR = JR.c, VR = JR.lc)
          }
        }
      }(VR, KR, RR, GR, fR, iR, uR, tR, {
        value: 0
      })
    }

    function QR(RR) {
      return 65535 & RR
    }

    function FR(RR) {
      const JR = QR(RR);
      return JR > 32767 ? JR - 65536 : JR
    }

    function TR(RR, JR) {
      const GR = FR(RR),
        yR = FR(JR),
        tR = GR + (1 & yR) + (yR >> 1);
      return {
        a: tR,
        b: tR - yR
      }
    }

    function sR(RR, JR) {
      const GR = QR(RR),
        yR = QR(JR),
        tR = GR - (yR >> 1) & IR;
      return {
        a: yR + tR - PR & IR,
        b: tR
      }
    }

    function hR(RR, JR, GR, yR, tR, uR, ZR) {
      const qR = ZR < 16384,
        iR = GR > tR ? tR : GR;
      let fR, VR, KR = 1;
      for (; KR <= iR;) KR <<= 1;
      for (KR >>= 1, fR = KR, KR >>= 1; KR >= 1;) {
        VR = 0;
        const ZR = VR + uR * (tR - fR),
          iR = uR * KR,
          wR = uR * fR,
          rR = yR * KR,
          eR = yR * fR;
        let aR, LR, nR, UR;
        for (; VR <= ZR; VR += wR) {
          let tR = VR;
          const uR = VR + yR * (GR - fR);
          for (; tR <= uR; tR += eR) {
            const GR = tR + rR,
              yR = tR + iR,
              uR = yR + rR;
            if (qR) {
              let ZR = TR(RR[tR + JR], RR[yR + JR]);
              aR = ZR.a, nR = ZR.b, ZR = TR(RR[GR + JR], RR[uR + JR]), LR = ZR.a, UR = ZR.b, ZR = TR(aR, LR), RR[tR + JR] = ZR.a, RR[GR + JR] = ZR.b, ZR = TR(nR, UR), RR[yR + JR] = ZR.a, RR[uR + JR] = ZR.b
            } else {
              let ZR = sR(RR[tR + JR], RR[yR + JR]);
              aR = ZR.a, nR = ZR.b, ZR = sR(RR[GR + JR], RR[uR + JR]), LR = ZR.a, UR = ZR.b, ZR = sR(aR, LR), RR[tR + JR] = ZR.a, RR[GR + JR] = ZR.b, ZR = sR(nR, UR), RR[yR + JR] = ZR.a, RR[uR + JR] = ZR.b
            }
          }
          if (GR & KR) {
            const GR = tR + iR;
            let yR;
            yR = qR ? TR(RR[tR + JR], RR[GR + JR]) : sR(RR[tR + JR], RR[GR + JR]), aR = yR.a, RR[GR + JR] = yR.b, RR[tR + JR] = aR
          }
        }
        if (tR & KR) {
          let tR = VR;
          const uR = VR + yR * (GR - fR);
          for (; tR <= uR; tR += eR) {
            const GR = tR + rR;
            let yR;
            yR = qR ? TR(RR[tR + JR], RR[GR + JR]) : sR(RR[tR + JR], RR[GR + JR]), aR = yR.a, RR[GR + JR] = yR.b, RR[tR + JR] = aR
          }
        }
        fR = KR, KR >>= 1
      }
      return VR
    }

    function RJ(RR) {
      return new DataView(RR.array.buffer, RR.offset.value, RR.size)
    }

    function JJ(RR) {
      const JR = RR.viewer.buffer.slice(RR.offset.value, RR.offset.value + RR.size),
        GR = new Uint8Array(function(RR) {
          let JR = RR.byteLength;
          const GR = [];
          let yR = 0;
          const tR = new DataView(RR);
          for (; JR > 0;) {
            const RR = tR.getInt8(yR++);
            if (RR < 0) {
              const uR = -RR;
              JR -= uR + 1;
              for (let RR = 0; RR < uR; RR++) GR.push(tR.getUint8(yR++))
            } else {
              const uR = RR;
              JR -= 2;
              const ZR = tR.getUint8(yR++);
              for (let RR = 0; RR < uR + 1; RR++) GR.push(ZR)
            }
          }
          return GR
        }(JR)),
        yR = new Uint8Array(GR.length);
      return DR(GR), HR(GR, yR), new DataView(yR.buffer)
    }

    function GJ(RR) {
      const JR = RR.array.slice(RR.offset.value, RR.offset.value + RR.size),
        GR = fflate.unzlibSync(JR),
        yR = new Uint8Array(GR.length);
      return DR(GR), HR(GR, yR), new DataView(yR.buffer)
    }

    function yJ(RR) {
      const JR = RR.array.slice(RR.offset.value, RR.offset.value + RR.size),
        GR = fflate.unzlibSync(JR),
        yR = RR.lines * RR.channels * RR.width,
        tR = 1 == RR.type ? new Uint16Array(yR) : new Uint32Array(yR);
      let uR = 0,
        ZR = 0;
      const qR = new Array(4);
      for (let iR = 0; iR < RR.lines; iR++)
        for (let JR = 0; JR < RR.channels; JR++) {
          let JR = 0;
          switch (RR.type) {
            case 1:
              qR[0] = uR, qR[1] = qR[0] + RR.width, uR = qR[1] + RR.width;
              for (let yR = 0; yR < RR.width; ++yR) {
                JR += GR[qR[0]++] << 8 | GR[qR[1]++], tR[ZR] = JR, ZR++
              }
              break;
            case 2:
              qR[0] = uR, qR[1] = qR[0] + RR.width, qR[2] = qR[1] + RR.width, uR = qR[2] + RR.width;
              for (let yR = 0; yR < RR.width; ++yR) {
                JR += GR[qR[0]++] << 24 | GR[qR[1]++] << 16 | GR[qR[2]++] << 8, tR[ZR] = JR, ZR++
              }
          }
        }
      return new DataView(tR.buffer)
    }

    function tJ(RR) {
      const JR = RR.viewer,
        GR = {
          value: RR.offset.value
        },
        yR = new Uint16Array(RR.width * RR.scanlineBlockSize * (RR.channels * RR.type)),
        tR = new Uint8Array(wR);
      let uR = 0;
      const ZR = new Array(RR.channels);
      for (let fR = 0; fR < RR.channels; fR++) ZR[fR] = {}, ZR[fR].start = uR, ZR[fR].end = ZR[fR].start, ZR[fR].nx = RR.width, ZR[fR].ny = RR.lines, ZR[fR].size = RR.type, uR += ZR[fR].nx * ZR[fR].ny * ZR[fR].size;
      const qR = pR(JR, GR),
        iR = pR(JR, GR);
      if (iR >= wR) throw new Error("Wrong PIZ_COMPRESSION BITMAP_SIZE");
      if (qR <= iR)
        for (let fR = 0; fR < iR - qR + 1; fR++) tR[fR + qR] = lR(JR, GR);
      const VR = new Uint16Array(KR),
        rR = function(RR, JR) {
          let GR = 0;
          for (let tR = 0; tR < KR; ++tR)(0 == tR || RR[tR >> 3] & 1 << (7 & tR)) && (JR[GR++] = tR);
          const yR = GR - 1;
          for (; GR < KR;) JR[GR++] = 0;
          return yR
        }(tR, VR),
        eR = BR(JR, GR);
      kR(RR.array, JR, GR, eR, yR, uR);
      for (let fR = 0; fR < RR.channels; ++fR) {
        const RR = ZR[fR];
        for (let JR = 0; JR < ZR[fR].size; ++JR) hR(yR, RR.start + JR, RR.nx, RR.size, RR.ny, RR.nx * RR.size, rR)
      }! function(RR, JR, GR) {
        for (let yR = 0; yR < GR; ++yR) JR[yR] = RR[JR[yR]]
      }(VR, yR, uR);
      let aR = 0;
      const LR = new Uint8Array(yR.buffer.byteLength);
      for (let KR = 0; KR < RR.lines; KR++)
        for (let JR = 0; JR < RR.channels; JR++) {
          const RR = ZR[JR],
            GR = RR.nx * RR.size,
            tR = new Uint8Array(yR.buffer, RR.end * fR, GR * fR);
          LR.set(tR, aR), aR += GR * fR, RR.end += GR
        }
      return new DataView(LR.buffer)
    }
    var uJ, ZJ = GR(41616);
    ! function(RR) {
      RR[RR.Float = 0] = "Float", RR[RR.HalfFloat = 1] = "HalfFloat"
    }(uJ || (uJ = {}));
    class qJ {}
    async function iJ(RR, JR, GR, yR) {
      const tR = {
        size: 0,
        viewer: JR,
        array: new Uint8Array(JR.buffer),
        offset: GR,
        width: RR.dataWindow.xMax - RR.dataWindow.xMin + 1,
        height: RR.dataWindow.yMax - RR.dataWindow.yMin + 1,
        channels: RR.channels.length,
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
      switch (RR.compression) {
        case AR.NO_COMPRESSION:
          tR.lines = 1, tR.uncompress = RJ;
          break;
        case AR.RLE_COMPRESSION:
          tR.lines = 1, tR.uncompress = JJ;
          break;
        case AR.ZIPS_COMPRESSION:
          tR.lines = 1, tR.uncompress = GJ, await ZJ.h.LoadScriptAsync(qJ.FFLATEUrl);
          break;
        case AR.ZIP_COMPRESSION:
          tR.lines = 16, tR.uncompress = GJ, await ZJ.h.LoadScriptAsync(qJ.FFLATEUrl);
          break;
        case AR.PIZ_COMPRESSION:
          tR.lines = 32, tR.uncompress = tJ;
          break;
        case AR.PXR24_COMPRESSION:
          tR.lines = 16, tR.uncompress = yJ, await ZJ.h.LoadScriptAsync(qJ.FFLATEUrl);
          break;
        default:
          throw new Error(AR[RR.compression] + " is unsupported")
      }
      tR.scanlineBlockSize = tR.lines;
      const uR = {};
      for (const qR of RR.channels) switch (qR.name) {
        case "R":
        case "G":
        case "B":
        case "A":
        case "Y":
          uR[qR.name] = !0, tR.type = qR.pixelType
      }
      let ZR = !1;
      if (uR.R && uR.G && uR.B && uR.A) tR.outputChannels = 4, tR.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (uR.R && uR.G && uR.B) ZR = !0, tR.outputChannels = 4, tR.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (uR.R && uR.G) tR.outputChannels = 2, tR.decodeChannels = {
        R: 0,
        G: 1
      };
      else if (uR.R) tR.outputChannels = 1, tR.decodeChannels = {
        R: 0
      };
      else {
        if (!uR.Y) throw new Error("EXRLoader.parse: file contains unsupported data channels.");
        tR.outputChannels = 1, tR.decodeChannels = {
          Y: 0
        }
      }
      if (1 === tR.type) switch (yR) {
        case uJ.Float:
          tR.getter = OR, tR.inputSize = fR;
          break;
        case uJ.HalfFloat:
          tR.getter = pR, tR.inputSize = fR
      } else {
        if (2 !== tR.type) throw new Error("Unsupported pixelType " + tR.type + " for " + RR.compression);
        switch (yR) {
          case uJ.Float:
            tR.getter = vR, tR.inputSize = qR;
            break;
          case uJ.HalfFloat:
            tR.getter = xR, tR.inputSize = qR
        }
      }
      tR.blockCount = tR.height / tR.scanlineBlockSize;
      for (let qR = 0; qR < tR.blockCount; qR++) bR(JR, GR);
      const iR = tR.width * tR.height * tR.outputChannels;
      switch (yR) {
        case uJ.Float:
          tR.byteArray = new Float32Array(iR), tR.textureType = 1, ZR && tR.byteArray.fill(1, 0, iR);
          break;
        case uJ.HalfFloat:
          tR.byteArray = new Uint16Array(iR), tR.textureType = 2, ZR && tR.byteArray.fill(15360, 0, iR);
          break;
        default:
          throw new Error("Unsupported type: " + yR)
      }
      let VR = 0;
      for (const qR of RR.channels) void 0 !== tR.decodeChannels[qR.name] && (tR.channelLineOffsets[qR.name] = VR * tR.width), VR += 2 * qR.pixelType;
      return tR.bytesPerLine = tR.width * VR, tR.outLineWidth = tR.width * tR.outputChannels, "INCREASING_Y" === RR.lineOrder ? tR.scanOrder = RR => RR : tR.scanOrder = RR => tR.height - 1 - RR, 4 == tR.outputChannels ? (tR.format = 5, tR.linearSpace = !0) : (tR.format = 6, tR.linearSpace = !1), tR
    }

    function fJ(RR, JR, GR, yR) {
      const tR = {
        value: 0
      };
      for (let uR = 0; uR < RR.height / RR.scanlineBlockSize; uR++) {
        const ZR = MR(GR, yR) - JR.dataWindow.yMin;
        RR.size = BR(GR, yR), RR.lines = ZR + RR.scanlineBlockSize > RR.height ? RR.height - ZR : RR.scanlineBlockSize;
        const qR = RR.size < RR.lines * RR.bytesPerLine && RR.uncompress ? RR.uncompress(RR) : RJ(RR);
        yR.value += RR.size;
        for (let GR = 0; GR < RR.scanlineBlockSize; GR++) {
          const yR = uR * RR.scanlineBlockSize,
            ZR = GR + RR.scanOrder(yR);
          if (ZR >= RR.height) continue;
          const iR = GR * RR.bytesPerLine,
            fR = (RR.height - 1 - ZR) * RR.outLineWidth;
          for (let GR = 0; GR < RR.channels; GR++) {
            const yR = JR.channels[GR].name,
              uR = RR.channelLineOffsets[yR],
              ZR = RR.decodeChannels[yR];
            if (void 0 !== ZR) {
              tR.value = iR + uR;
              for (let JR = 0; JR < RR.width; JR++) {
                const GR = fR + JR * RR.outputChannels + ZR;
                RR.byteArray && (RR.byteArray[GR] = RR.getter(qR, tR))
              }
            }
          }
        }
      }
    }
    qJ.DefaultOutputType = uJ.HalfFloat, qJ.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class VJ {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(RR, JR, GR, yR, tR) {
        throw ".exr not supported in Cube."
      }
      loadData(RR, JR, GR) {
        const tR = new DataView(RR.buffer),
          uR = {
            value: 0
          },
          ZR = cR(tR, uR);
        iJ(ZR, tR, uR, qJ.DefaultOutputType).then((RR => {
          fJ(RR, ZR, tR, uR);
          const yR = ZR.dataWindow.xMax - ZR.dataWindow.xMin + 1,
            qR = ZR.dataWindow.yMax - ZR.dataWindow.yMin + 1;
          GR(yR, qR, JR.generateMipMaps, !1, (() => {
            const GR = JR.ke();
            JR.format = ZR.format, JR.type = RR.textureType, JR.invertY = !1, JR._gammaSpace = !ZR.linearSpace, RR.byteArray && GR._uploadDataToTextureDirectly(JR, RR.byteArray, 0, 0, void 0, !0)
          }))
        })).catch((RR => {
          yR.c.Error("Failed to load EXR texture: ", RR)
        }))
      }
    }
    async function KJ(RR) {
      const JR = new DataView(RR),
        GR = {
          value: 0
        },
        tR = cR(JR, GR);
      try {
        const RR = await iJ(tR, JR, GR, uJ.Float);
        return fJ(RR, tR, JR, GR), RR.byteArray ? {
          width: tR.dataWindow.xMax - tR.dataWindow.xMin + 1,
          height: tR.dataWindow.yMax - tR.dataWindow.yMin + 1,
          data: new Float32Array(RR.byteArray)
        } : (yR.c.Error("Failed to decode EXR data: No byte array available."), {
          width: 0,
          height: 0,
          data: null
        })
      } catch (uR) {
        yR.c.Error("Failed to load EXR data: ", uR)
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
for (const RR in modules) Object.freeze(modules[RR]);