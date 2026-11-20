export const id = 306;
export const ids = [306];
export const modules = {
  41421: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      ReadExrDataAsync: () => Ak,
      _ExrTextureLoader: () => Ik
    });
    var lT = cT(38512),
      MT = cT(36937),
      KT = cT(39694);
    const OT = 4,
      yT = 4,
      fT = 1,
      xT = 2,
      IT = 8,
      AT = 65536,
      CT = AT >> 3,
      jT = 14,
      vT = 65537,
      tT = 1 << jT,
      hT = tT - 1,
      NT = 59,
      QT = 63,
      ST = 2 + QT - NT;
    var DT, aT;

    function FT(TT, kT) {
      const cT = new Uint8Array(TT);
      let lT = 0;
      for (; 0 != cT[kT.value + lT];) lT += 1;
      const MT = (new TextDecoder).decode(cT.slice(kT.value, kT.value + lT));
      return kT.value = kT.value + lT + 1, MT
    }

    function rT(TT, kT) {
      const cT = TT.getInt32(kT.value, !0);
      return kT.value += OT, cT
    }

    function PT(TT, kT) {
      const cT = TT.getUint32(kT.value, !0);
      return kT.value += OT, cT
    }

    function wT(TT, kT) {
      const cT = TT.getUint8(kT.value);
      return kT.value += fT, cT
    }

    function mT(TT, kT) {
      const cT = TT.getUint16(kT.value, !0);
      return kT.value += xT, cT
    }

    function bT(TT, kT) {
      const cT = TT[kT.value];
      return kT.value += fT, cT
    }

    function zT(TT, kT) {
      let cT;
      return cT = "getBigInt64" in DataView.prototype ? Number(TT.getBigInt64(kT.value, !0)) : TT.getUint32(kT.value + 4, !0) + Number(TT.getUint32(kT.value, !0) << 32), kT.value += IT, cT
    }

    function JT(TT, kT) {
      const cT = TT.getFloat32(kT.value, !0);
      return kT.value += yT, cT
    }

    function oT(TT, kT) {
      return (0, KT.e)(mT(TT, kT))
    }

    function HT(TT, kT) {
      return (0, KT.i)((0, MT.Clamp)(JT(TT, kT), -KT.f, KT.f))
    }

    function eT(TT, kT, cT, lT) {
      switch (cT) {
        case "string":
        case "stringvector":
        case "iccProfile":
          return function(TT, kT, cT) {
            const lT = (new TextDecoder).decode(new Uint8Array(TT).slice(kT.value, kT.value + cT));
            return kT.value = kT.value + cT, lT
          }(TT.buffer, kT, lT);
        case "chlist":
          return function(TT, kT, cT) {
            const lT = kT.value,
              MT = [];
            for (; kT.value < lT + cT - 1;) {
              const cT = FT(TT.buffer, kT),
                lT = rT(TT, kT),
                KT = wT(TT, kT);
              kT.value += 3;
              const OT = rT(TT, kT),
                yT = rT(TT, kT);
              MT.push({
                name: cT,
                pixelType: lT,
                pLinear: KT,
                xSampling: OT,
                ySampling: yT
              })
            }
            return kT.value += 1, MT
          }(TT, kT, lT);
        case "chromaticities":
          return function(TT, kT) {
            return {
              redX: JT(TT, kT),
              redY: JT(TT, kT),
              greenX: JT(TT, kT),
              greenY: JT(TT, kT),
              blueX: JT(TT, kT),
              blueY: JT(TT, kT),
              whiteX: JT(TT, kT),
              whiteY: JT(TT, kT)
            }
          }(TT, kT);
        case "compression":
          return function(TT, kT) {
            return wT(TT, kT)
          }(TT, kT);
        case "box2i":
          return function(TT, kT) {
            return {
              xMin: rT(TT, kT),
              yMin: rT(TT, kT),
              xMax: rT(TT, kT),
              yMax: rT(TT, kT)
            }
          }(TT, kT);
        case "lineOrder":
          return function(TT, kT) {
            const cT = wT(TT, kT);
            return aT[cT]
          }(TT, kT);
        case "float":
          return JT(TT, kT);
        case "v2f":
          return function(TT, kT) {
            return [JT(TT, kT), JT(TT, kT)]
          }(TT, kT);
        case "v3f":
          return function(TT, kT) {
            return [JT(TT, kT), JT(TT, kT), JT(TT, kT)]
          }(TT, kT);
        case "int":
          return rT(TT, kT);
        case "rational":
          return function(TT, kT) {
            return [rT(TT, kT), PT(TT, kT)]
          }(TT, kT);
        case "timecode":
          return function(TT, kT) {
            return [PT(TT, kT), PT(TT, kT)]
          }(TT, kT);
        case "preview":
          return kT.value += lT, "skipped";
        default:
          return void(kT.value += lT)
      }
    }

    function GT(TT) {
      for (let kT = 1; kT < TT.length; kT++) {
        const cT = TT[kT - 1] + TT[kT] - 128;
        TT[kT] = cT
      }
    }

    function VT(TT, kT) {
      let cT = 0,
        lT = Math.floor((TT.length + 1) / 2),
        MT = 0;
      const KT = TT.length - 1;
      for (; !(MT > KT) && (kT[MT++] = TT[cT++], !(MT > KT));) kT[MT++] = TT[lT++]
    }! function(TT) {
      TT[TT.NO_COMPRESSION = 0] = "NO_COMPRESSION", TT[TT.RLE_COMPRESSION = 1] = "RLE_COMPRESSION", TT[TT.ZIPS_COMPRESSION = 2] = "ZIPS_COMPRESSION", TT[TT.ZIP_COMPRESSION = 3] = "ZIP_COMPRESSION", TT[TT.PIZ_COMPRESSION = 4] = "PIZ_COMPRESSION", TT[TT.PXR24_COMPRESSION = 5] = "PXR24_COMPRESSION"
    }(DT || (DT = {})),
    function(TT) {
      TT[TT.INCREASING_Y = 0] = "INCREASING_Y", TT[TT.DECREASING_Y = 1] = "DECREASING_Y"
    }(aT || (aT = {}));
    const ET = 20000630;

    function ZT(TT, kT) {
      if (TT.getUint32(0, !0) != ET) throw new Error("Incorrect OpenEXR format");
      const cT = TT.getUint8(4),
        MT = TT.getUint8(5),
        KT = {
          singleTile: !!(2 & MT),
          longName: !!(4 & MT),
          deepFormat: !!(8 & MT),
          multiPart: !!(16 & MT)
        };
      kT.value = 8;
      const OT = {};
      let yT = !0;
      for (; yT;) {
        const cT = FT(TT.buffer, kT);
        if (cT) {
          const MT = FT(TT.buffer, kT),
            KT = eT(TT, kT, MT, PT(TT, kT));
          void 0 === KT ? lT.e.Warn(`Unknown header attribute type ${MT}'.`) : OT[cT] = KT
        } else yT = !1
      }
      if (0 != (-5 & MT)) throw new Error("Unsupported file format");
      return {
        version: cT,
        spec: KT,
        ...OT
      }
    }
    const uT = 32768,
      XT = 65535;

    function dT(TT, kT, cT, lT, MT) {
      for (; cT < TT;) kT = kT << 8 | bT(lT, MT), cT += 8;
      return {
        l: kT >> (cT -= TT) & (1 << TT) - 1,
        c: kT,
        lc: cT
      }
    }

    function LT(TT, kT, cT, lT) {
      return {
        c: TT = TT << 8 | bT(cT, lT),
        lc: kT += 8
      }
    }

    function RT(TT, kT, cT, lT, MT, KT, OT, yT, fT) {
      if (TT == kT) {
        if (lT < 8) {
          const TT = LT(cT, lT, MT, KT);
          cT = TT.c, lT = TT.lc
        }
        let TT = cT >> (lT -= 8);
        if (TT = new Uint8Array([TT])[0], yT.value + TT > fT) return null;
        const kT = OT[yT.value - 1];
        for (; TT-- > 0;) OT[yT.value++] = kT
      } else {
        if (!(yT.value < fT)) return null;
        OT[yT.value++] = TT
      }
      return {
        c: cT,
        lc: lT
      }
    }
    const gT = new Array(59);

    function UT(TT, kT, cT, lT, MT, KT) {
      const OT = kT;
      let yT = 0,
        fT = 0;
      for (; lT <= MT; lT++) {
        if (OT.value - kT.value > cT) return;
        let xT = dT(6, yT, fT, TT, OT);
        const IT = xT.l;
        if (yT = xT.c, fT = xT.lc, KT[lT] = IT, IT == QT) {
          if (OT.value - kT.value > cT) throw new Error("Error in HufUnpackEncTable");
          xT = dT(8, yT, fT, TT, OT);
          let IT = xT.l + ST;
          if (yT = xT.c, fT = xT.lc, lT + IT > MT + 1) throw new Error("Error in HufUnpackEncTable");
          for (; IT--;) KT[lT++] = 0;
          lT--
        } else if (IT >= NT) {
          let TT = IT - NT + 2;
          if (lT + TT > MT + 1) throw new Error("Error in HufUnpackEncTable");
          for (; TT--;) KT[lT++] = 0;
          lT--
        }
      }! function(TT) {
        for (let cT = 0; cT <= 58; ++cT) gT[cT] = 0;
        for (let cT = 0; cT < vT; ++cT) gT[TT[cT]] += 1;
        let kT = 0;
        for (let cT = 58; cT > 0; --cT) {
          const TT = kT + gT[cT] >> 1;
          gT[cT] = kT, kT = TT
        }
        for (let cT = 0; cT < vT; ++cT) {
          const kT = TT[cT];
          kT > 0 && (TT[cT] = kT | gT[kT]++ << 6)
        }
      }(KT)
    }

    function YT(TT) {
      return 63 & TT
    }

    function BT(TT) {
      return TT >> 6
    }

    function WT(TT, kT, cT, lT, MT, KT) {
      const OT = cT.value,
        yT = PT(kT, cT),
        fT = PT(kT, cT);
      cT.value += 4;
      const xT = PT(kT, cT);
      if (cT.value += 4, yT < 0 || yT >= vT || fT < 0 || fT >= vT) throw new Error("Wrong HUF_ENCSIZE");
      const IT = new Array(vT),
        AT = new Array(tT);
      ! function(TT) {
        for (let kT = 0; kT < tT; kT++) TT[kT] = {}, TT[kT].len = 0, TT[kT].lit = 0, TT[kT].p = null
      }(AT);
      if (UT(TT, cT, lT - (cT.value - OT), yT, fT, IT), xT > 8 * (lT - (cT.value - OT))) throw new Error("Wrong hufUncompress");
      ! function(TT, kT, cT, lT) {
        for (; kT <= cT; kT++) {
          const cT = BT(TT[kT]),
            MT = YT(TT[kT]);
          if (cT >> MT) throw new Error("Invalid table entry");
          if (MT > jT) {
            const TT = lT[cT >> MT - jT];
            if (TT.len) throw new Error("Invalid table entry");
            if (TT.lit++, TT.p) {
              const kT = TT.p;
              TT.p = new Array(TT.lit);
              for (let cT = 0; cT < TT.lit - 1; ++cT) TT.p[cT] = kT[cT]
            } else TT.p = new Array(1);
            TT.p[TT.lit - 1] = kT
          } else if (MT) {
            let TT = 0;
            for (let KT = 1 << jT - MT; KT > 0; KT--) {
              const KT = lT[(cT << jT - MT) + TT];
              if (KT.len || KT.p) throw new Error("Invalid table entry");
              KT.len = MT, KT.lit = kT, TT++
            }
          }
        }
      }(IT, yT, fT, AT),
      function(TT, kT, cT, lT, MT, KT, OT, yT, fT) {
        let xT = 0,
          IT = 0;
        const AT = OT,
          CT = Math.trunc(lT.value + (MT + 7) / 8);
        for (; lT.value < CT;) {
          let MT = LT(xT, IT, cT, lT);
          for (xT = MT.c, IT = MT.lc; IT >= jT;) {
            const OT = kT[xT >> IT - jT & hT];
            if (OT.len) {
              IT -= OT.len;
              const TT = RT(OT.lit, KT, xT, IT, cT, lT, yT, fT, AT);
              TT && (xT = TT.c, IT = TT.lc)
            } else {
              if (!OT.p) throw new Error("hufDecode issues");
              let kT;
              for (kT = 0; kT < OT.lit; kT++) {
                const jT = YT(TT[OT.p[kT]]);
                for (; IT < jT && lT.value < CT;) MT = LT(xT, IT, cT, lT), xT = MT.c, IT = MT.lc;
                if (IT >= jT && BT(TT[OT.p[kT]]) == (xT >> IT - jT & (1 << jT) - 1)) {
                  IT -= jT;
                  const TT = RT(OT.p[kT], KT, xT, IT, cT, lT, yT, fT, AT);
                  TT && (xT = TT.c, IT = TT.lc);
                  break
                }
              }
              if (kT == OT.lit) throw new Error("HufDecode issues")
            }
          }
        }
        const vT = 8 - MT & 7;
        for (xT >>= vT, IT -= vT; IT > 0;) {
          const TT = kT[xT << jT - IT & hT];
          if (!TT.len) throw new Error("HufDecode issues");
          {
            IT -= TT.len;
            const kT = RT(TT.lit, KT, xT, IT, cT, lT, yT, fT, AT);
            kT && (xT = kT.c, IT = kT.lc)
          }
        }
      }(IT, AT, TT, cT, xT, fT, KT, MT, {
        value: 0
      })
    }

    function nT(TT) {
      return 65535 & TT
    }

    function pT(TT) {
      const kT = nT(TT);
      return kT > 32767 ? kT - 65536 : kT
    }

    function iT(TT, kT) {
      const cT = pT(TT),
        lT = pT(kT),
        MT = cT + (1 & lT) + (lT >> 1);
      return {
        a: MT,
        b: MT - lT
      }
    }

    function qT(TT, kT) {
      const cT = nT(TT),
        lT = nT(kT),
        MT = cT - (lT >> 1) & XT;
      return {
        a: lT + MT - uT & XT,
        b: MT
      }
    }

    function sT(TT, kT, cT, lT, MT, KT, OT) {
      const yT = OT < 16384,
        fT = cT > MT ? MT : cT;
      let xT, IT, AT = 1;
      for (; AT <= fT;) AT <<= 1;
      for (AT >>= 1, xT = AT, AT >>= 1; AT >= 1;) {
        IT = 0;
        const OT = IT + KT * (MT - xT),
          fT = KT * AT,
          CT = KT * xT,
          jT = lT * AT,
          vT = lT * xT;
        let tT, hT, NT, QT;
        for (; IT <= OT; IT += CT) {
          let MT = IT;
          const KT = IT + lT * (cT - xT);
          for (; MT <= KT; MT += vT) {
            const cT = MT + jT,
              lT = MT + fT,
              KT = lT + jT;
            if (yT) {
              let OT = iT(TT[MT + kT], TT[lT + kT]);
              tT = OT.a, NT = OT.b, OT = iT(TT[cT + kT], TT[KT + kT]), hT = OT.a, QT = OT.b, OT = iT(tT, hT), TT[MT + kT] = OT.a, TT[cT + kT] = OT.b, OT = iT(NT, QT), TT[lT + kT] = OT.a, TT[KT + kT] = OT.b
            } else {
              let OT = qT(TT[MT + kT], TT[lT + kT]);
              tT = OT.a, NT = OT.b, OT = qT(TT[cT + kT], TT[KT + kT]), hT = OT.a, QT = OT.b, OT = qT(tT, hT), TT[MT + kT] = OT.a, TT[cT + kT] = OT.b, OT = qT(NT, QT), TT[lT + kT] = OT.a, TT[KT + kT] = OT.b
            }
          }
          if (cT & AT) {
            const cT = MT + fT;
            let lT;
            lT = yT ? iT(TT[MT + kT], TT[cT + kT]) : qT(TT[MT + kT], TT[cT + kT]), tT = lT.a, TT[cT + kT] = lT.b, TT[MT + kT] = tT
          }
        }
        if (MT & AT) {
          let MT = IT;
          const KT = IT + lT * (cT - xT);
          for (; MT <= KT; MT += vT) {
            const cT = MT + jT;
            let lT;
            lT = yT ? iT(TT[MT + kT], TT[cT + kT]) : qT(TT[MT + kT], TT[cT + kT]), tT = lT.a, TT[cT + kT] = lT.b, TT[MT + kT] = tT
          }
        }
        xT = AT, AT >>= 1
      }
      return IT
    }

    function Tk(TT) {
      return new DataView(TT.array.buffer, TT.offset.value, TT.size)
    }

    function kk(TT) {
      const kT = TT.viewer.buffer.slice(TT.offset.value, TT.offset.value + TT.size),
        cT = new Uint8Array(function(TT) {
          let kT = TT.byteLength;
          const cT = [];
          let lT = 0;
          const MT = new DataView(TT);
          for (; kT > 0;) {
            const TT = MT.getInt8(lT++);
            if (TT < 0) {
              const KT = -TT;
              kT -= KT + 1;
              for (let TT = 0; TT < KT; TT++) cT.push(MT.getUint8(lT++))
            } else {
              const KT = TT;
              kT -= 2;
              const OT = MT.getUint8(lT++);
              for (let TT = 0; TT < KT + 1; TT++) cT.push(OT)
            }
          }
          return cT
        }(kT)),
        lT = new Uint8Array(cT.length);
      return GT(cT), VT(cT, lT), new DataView(lT.buffer)
    }

    function ck(TT) {
      const kT = TT.array.slice(TT.offset.value, TT.offset.value + TT.size),
        cT = fflate.unzlibSync(kT),
        lT = new Uint8Array(cT.length);
      return GT(cT), VT(cT, lT), new DataView(lT.buffer)
    }

    function lk(TT) {
      const kT = TT.array.slice(TT.offset.value, TT.offset.value + TT.size),
        cT = fflate.unzlibSync(kT),
        lT = TT.lines * TT.channels * TT.width,
        MT = 1 == TT.type ? new Uint16Array(lT) : new Uint32Array(lT);
      let KT = 0,
        OT = 0;
      const yT = new Array(4);
      for (let fT = 0; fT < TT.lines; fT++)
        for (let kT = 0; kT < TT.channels; kT++) {
          let kT = 0;
          switch (TT.type) {
            case 1:
              yT[0] = KT, yT[1] = yT[0] + TT.width, KT = yT[1] + TT.width;
              for (let lT = 0; lT < TT.width; ++lT) {
                kT += cT[yT[0]++] << 8 | cT[yT[1]++], MT[OT] = kT, OT++
              }
              break;
            case 2:
              yT[0] = KT, yT[1] = yT[0] + TT.width, yT[2] = yT[1] + TT.width, KT = yT[2] + TT.width;
              for (let lT = 0; lT < TT.width; ++lT) {
                kT += cT[yT[0]++] << 24 | cT[yT[1]++] << 16 | cT[yT[2]++] << 8, MT[OT] = kT, OT++
              }
          }
        }
      return new DataView(MT.buffer)
    }

    function Mk(TT) {
      const kT = TT.viewer,
        cT = {
          value: TT.offset.value
        },
        lT = new Uint16Array(TT.width * TT.scanlineBlockSize * (TT.channels * TT.type)),
        MT = new Uint8Array(CT);
      let KT = 0;
      const OT = new Array(TT.channels);
      for (let xT = 0; xT < TT.channels; xT++) OT[xT] = {}, OT[xT].start = KT, OT[xT].end = OT[xT].start, OT[xT].nx = TT.width, OT[xT].ny = TT.lines, OT[xT].size = TT.type, KT += OT[xT].nx * OT[xT].ny * OT[xT].size;
      const yT = mT(kT, cT),
        fT = mT(kT, cT);
      if (fT >= CT) throw new Error("Wrong PIZ_COMPRESSION BITMAP_SIZE");
      if (yT <= fT)
        for (let xT = 0; xT < fT - yT + 1; xT++) MT[xT + yT] = wT(kT, cT);
      const IT = new Uint16Array(AT),
        jT = function(TT, kT) {
          let cT = 0;
          for (let MT = 0; MT < AT; ++MT)(0 == MT || TT[MT >> 3] & 1 << (7 & MT)) && (kT[cT++] = MT);
          const lT = cT - 1;
          for (; cT < AT;) kT[cT++] = 0;
          return lT
        }(MT, IT),
        vT = PT(kT, cT);
      WT(TT.array, kT, cT, vT, lT, KT);
      for (let xT = 0; xT < TT.channels; ++xT) {
        const TT = OT[xT];
        for (let kT = 0; kT < OT[xT].size; ++kT) sT(lT, TT.start + kT, TT.nx, TT.size, TT.ny, TT.nx * TT.size, jT)
      }! function(TT, kT, cT) {
        for (let lT = 0; lT < cT; ++lT) kT[lT] = TT[kT[lT]]
      }(IT, lT, KT);
      let tT = 0;
      const hT = new Uint8Array(lT.buffer.byteLength);
      for (let AT = 0; AT < TT.lines; AT++)
        for (let kT = 0; kT < TT.channels; kT++) {
          const TT = OT[kT],
            cT = TT.nx * TT.size,
            MT = new Uint8Array(lT.buffer, TT.end * xT, cT * xT);
          hT.set(MT, tT), tT += cT * xT, TT.end += cT
        }
      return new DataView(hT.buffer)
    }
    var Kk, Ok = cT(39727);
    ! function(TT) {
      TT[TT.Float = 0] = "Float", TT[TT.HalfFloat = 1] = "HalfFloat"
    }(Kk || (Kk = {}));
    class yk {}
    async function fk(TT, kT, cT, lT) {
      const MT = {
        size: 0,
        viewer: kT,
        array: new Uint8Array(kT.buffer),
        offset: cT,
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
        case DT.NO_COMPRESSION:
          MT.lines = 1, MT.uncompress = Tk;
          break;
        case DT.RLE_COMPRESSION:
          MT.lines = 1, MT.uncompress = kk;
          break;
        case DT.ZIPS_COMPRESSION:
          MT.lines = 1, MT.uncompress = ck, await Ok.h.LoadScriptAsync(yk.FFLATEUrl);
          break;
        case DT.ZIP_COMPRESSION:
          MT.lines = 16, MT.uncompress = ck, await Ok.h.LoadScriptAsync(yk.FFLATEUrl);
          break;
        case DT.PIZ_COMPRESSION:
          MT.lines = 32, MT.uncompress = Mk;
          break;
        case DT.PXR24_COMPRESSION:
          MT.lines = 16, MT.uncompress = lk, await Ok.h.LoadScriptAsync(yk.FFLATEUrl);
          break;
        default:
          throw new Error(DT[TT.compression] + " is unsupported")
      }
      MT.scanlineBlockSize = MT.lines;
      const KT = {};
      for (const yT of TT.channels) switch (yT.name) {
        case "R":
        case "G":
        case "B":
        case "A":
        case "Y":
          KT[yT.name] = !0, MT.type = yT.pixelType
      }
      let OT = !1;
      if (KT.R && KT.G && KT.B && KT.A) MT.outputChannels = 4, MT.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (KT.R && KT.G && KT.B) OT = !0, MT.outputChannels = 4, MT.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (KT.R && KT.G) MT.outputChannels = 2, MT.decodeChannels = {
        R: 0,
        G: 1
      };
      else if (KT.R) MT.outputChannels = 1, MT.decodeChannels = {
        R: 0
      };
      else {
        if (!KT.Y) throw new Error("EXRLoader.parse: file contains unsupported data channels.");
        MT.outputChannels = 1, MT.decodeChannels = {
          Y: 0
        }
      }
      if (1 === MT.type) switch (lT) {
        case Kk.Float:
          MT.getter = oT, MT.inputSize = xT;
          break;
        case Kk.HalfFloat:
          MT.getter = mT, MT.inputSize = xT
      } else {
        if (2 !== MT.type) throw new Error("Unsupported pixelType " + MT.type + " for " + TT.compression);
        switch (lT) {
          case Kk.Float:
            MT.getter = JT, MT.inputSize = yT;
            break;
          case Kk.HalfFloat:
            MT.getter = HT, MT.inputSize = yT
        }
      }
      MT.blockCount = MT.height / MT.scanlineBlockSize;
      for (let yT = 0; yT < MT.blockCount; yT++) zT(kT, cT);
      const fT = MT.width * MT.height * MT.outputChannels;
      switch (lT) {
        case Kk.Float:
          MT.byteArray = new Float32Array(fT), MT.textureType = 1, OT && MT.byteArray.fill(1, 0, fT);
          break;
        case Kk.HalfFloat:
          MT.byteArray = new Uint16Array(fT), MT.textureType = 2, OT && MT.byteArray.fill(15360, 0, fT);
          break;
        default:
          throw new Error("Unsupported type: " + lT)
      }
      let IT = 0;
      for (const yT of TT.channels) void 0 !== MT.decodeChannels[yT.name] && (MT.channelLineOffsets[yT.name] = IT * MT.width), IT += 2 * yT.pixelType;
      return MT.bytesPerLine = MT.width * IT, MT.outLineWidth = MT.width * MT.outputChannels, "INCREASING_Y" === TT.lineOrder ? MT.scanOrder = TT => TT : MT.scanOrder = TT => MT.height - 1 - TT, 4 == MT.outputChannels ? (MT.format = 5, MT.linearSpace = !0) : (MT.format = 6, MT.linearSpace = !1), MT
    }

    function xk(TT, kT, cT, lT) {
      const MT = {
        value: 0
      };
      for (let KT = 0; KT < TT.height / TT.scanlineBlockSize; KT++) {
        const OT = rT(cT, lT) - kT.dataWindow.yMin;
        TT.size = PT(cT, lT), TT.lines = OT + TT.scanlineBlockSize > TT.height ? TT.height - OT : TT.scanlineBlockSize;
        const yT = TT.size < TT.lines * TT.bytesPerLine && TT.uncompress ? TT.uncompress(TT) : Tk(TT);
        lT.value += TT.size;
        for (let cT = 0; cT < TT.scanlineBlockSize; cT++) {
          const lT = KT * TT.scanlineBlockSize,
            OT = cT + TT.scanOrder(lT);
          if (OT >= TT.height) continue;
          const fT = cT * TT.bytesPerLine,
            xT = (TT.height - 1 - OT) * TT.outLineWidth;
          for (let cT = 0; cT < TT.channels; cT++) {
            const lT = kT.channels[cT].name,
              KT = TT.channelLineOffsets[lT],
              OT = TT.decodeChannels[lT];
            if (void 0 !== OT) {
              MT.value = fT + KT;
              for (let kT = 0; kT < TT.width; kT++) {
                const cT = xT + kT * TT.outputChannels + OT;
                TT.byteArray && (TT.byteArray[cT] = TT.getter(yT, MT))
              }
            }
          }
        }
      }
    }
    yk.DefaultOutputType = Kk.HalfFloat, yk.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class Ik {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(TT, kT, cT, lT, MT) {
        throw ".exr not supported in Cube."
      }
      loadData(TT, kT, cT) {
        const MT = new DataView(TT.buffer),
          KT = {
            value: 0
          },
          OT = ZT(MT, KT);
        fk(OT, MT, KT, yk.DefaultOutputType).then((TT => {
          xk(TT, OT, MT, KT);
          const lT = OT.dataWindow.xMax - OT.dataWindow.xMin + 1,
            yT = OT.dataWindow.yMax - OT.dataWindow.yMin + 1;
          cT(lT, yT, kT.generateMipMaps, !1, (() => {
            const cT = kT.Dv();
            kT.format = OT.format, kT.type = TT.textureType, kT.invertY = !1, kT._gammaSpace = !OT.linearSpace, TT.byteArray && cT._uploadDataToTextureDirectly(kT, TT.byteArray, 0, 0, void 0, !0)
          }))
        })).catch((TT => {
          lT.e.Error("Failed to load EXR texture: ", TT)
        }))
      }
    }
    async function Ak(TT) {
      const kT = new DataView(TT),
        cT = {
          value: 0
        },
        MT = ZT(kT, cT);
      try {
        const TT = await fk(MT, kT, cT, Kk.Float);
        return xk(TT, MT, kT, cT), TT.byteArray ? {
          width: MT.dataWindow.xMax - MT.dataWindow.xMin + 1,
          height: MT.dataWindow.yMax - MT.dataWindow.yMin + 1,
          data: new Float32Array(TT.byteArray)
        } : (lT.e.Error("Failed to decode EXR data: No byte array available."), {
          width: 0,
          height: 0,
          data: null
        })
      } catch (KT) {
        lT.e.Error("Failed to load EXR data: ", KT)
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