export const id = 305;
export const ids = [305];
export const modules = {
  41214: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      ReadExrDataAsync: () => GR,
      _ExrTextureLoader: () => cR
    });
    var tU = gU(38236),
      pU = gU(36626),
      EU = gU(39442);
    const PU = 4,
      TU = 4,
      qU = 1,
      KU = 2,
      cU = 8,
      GU = 65536,
      jU = GU >> 3,
      uU = 14,
      CU = 65537,
      hU = 1 << uU,
      QU = hU - 1,
      eU = 59,
      WU = 63,
      fU = 2 + WU - eU;
    var xU, mU;

    function IU(UU, RU) {
      const gU = new Uint8Array(UU);
      let tU = 0;
      for (; 0 != gU[RU.value + tU];) tU += 1;
      const pU = (new TextDecoder).decode(gU.slice(RU.value, RU.value + tU));
      return RU.value = RU.value + tU + 1, pU
    }

    function JU(UU, RU) {
      const gU = UU.getInt32(RU.value, !0);
      return RU.value += PU, gU
    }

    function wU(UU, RU) {
      const gU = UU.getUint32(RU.value, !0);
      return RU.value += PU, gU
    }

    function nU(UU, RU) {
      const gU = UU.getUint8(RU.value);
      return RU.value += qU, gU
    }

    function bU(UU, RU) {
      const gU = UU.getUint16(RU.value, !0);
      return RU.value += KU, gU
    }

    function oU(UU, RU) {
      const gU = UU[RU.value];
      return RU.value += qU, gU
    }

    function ZU(UU, RU) {
      let gU;
      return gU = "getBigInt64" in DataView.prototype ? Number(UU.getBigInt64(RU.value, !0)) : UU.getUint32(RU.value + 4, !0) + Number(UU.getUint32(RU.value, !0) << 32), RU.value += cU, gU
    }

    function aU(UU, RU) {
      const gU = UU.getFloat32(RU.value, !0);
      return RU.value += TU, gU
    }

    function YU(UU, RU) {
      return (0, EU.c)(bU(UU, RU))
    }

    function BU(UU, RU) {
      return (0, EU.f)((0, pU.Clamp)(aU(UU, RU), -EU.d, EU.d))
    }

    function VU(UU, RU, gU, tU) {
      switch (gU) {
        case "string":
        case "stringvector":
        case "iccProfile":
          return function(UU, RU, gU) {
            const tU = (new TextDecoder).decode(new Uint8Array(UU).slice(RU.value, RU.value + gU));
            return RU.value = RU.value + gU, tU
          }(UU.buffer, RU, tU);
        case "chlist":
          return function(UU, RU, gU) {
            const tU = RU.value,
              pU = [];
            for (; RU.value < tU + gU - 1;) {
              const gU = IU(UU.buffer, RU),
                tU = JU(UU, RU),
                EU = nU(UU, RU);
              RU.value += 3;
              const PU = JU(UU, RU),
                TU = JU(UU, RU);
              pU.push({
                name: gU,
                pixelType: tU,
                pLinear: EU,
                xSampling: PU,
                ySampling: TU
              })
            }
            return RU.value += 1, pU
          }(UU, RU, tU);
        case "chromaticities":
          return function(UU, RU) {
            return {
              redX: aU(UU, RU),
              redY: aU(UU, RU),
              greenX: aU(UU, RU),
              greenY: aU(UU, RU),
              blueX: aU(UU, RU),
              blueY: aU(UU, RU),
              whiteX: aU(UU, RU),
              whiteY: aU(UU, RU)
            }
          }(UU, RU);
        case "compression":
          return function(UU, RU) {
            return nU(UU, RU)
          }(UU, RU);
        case "box2i":
          return function(UU, RU) {
            return {
              xMin: JU(UU, RU),
              yMin: JU(UU, RU),
              xMax: JU(UU, RU),
              yMax: JU(UU, RU)
            }
          }(UU, RU);
        case "lineOrder":
          return function(UU, RU) {
            const gU = nU(UU, RU);
            return mU[gU]
          }(UU, RU);
        case "float":
          return aU(UU, RU);
        case "v2f":
          return function(UU, RU) {
            return [aU(UU, RU), aU(UU, RU)]
          }(UU, RU);
        case "v3f":
          return function(UU, RU) {
            return [aU(UU, RU), aU(UU, RU), aU(UU, RU)]
          }(UU, RU);
        case "int":
          return JU(UU, RU);
        case "rational":
          return function(UU, RU) {
            return [JU(UU, RU), wU(UU, RU)]
          }(UU, RU);
        case "timecode":
          return function(UU, RU) {
            return [wU(UU, RU), wU(UU, RU)]
          }(UU, RU);
        case "preview":
          return RU.value += tU, "skipped";
        default:
          return void(RU.value += tU)
      }
    }

    function rU(UU) {
      for (let RU = 1; RU < UU.length; RU++) {
        const gU = UU[RU - 1] + UU[RU] - 128;
        UU[RU] = gU
      }
    }

    function XU(UU, RU) {
      let gU = 0,
        tU = Math.floor((UU.length + 1) / 2),
        pU = 0;
      const EU = UU.length - 1;
      for (; !(pU > EU) && (RU[pU++] = UU[gU++], !(pU > EU));) RU[pU++] = UU[tU++]
    }! function(UU) {
      UU[UU.NO_COMPRESSION = 0] = "NO_COMPRESSION", UU[UU.RLE_COMPRESSION = 1] = "RLE_COMPRESSION", UU[UU.ZIPS_COMPRESSION = 2] = "ZIPS_COMPRESSION", UU[UU.ZIP_COMPRESSION = 3] = "ZIP_COMPRESSION", UU[UU.PIZ_COMPRESSION = 4] = "PIZ_COMPRESSION", UU[UU.PXR24_COMPRESSION = 5] = "PXR24_COMPRESSION"
    }(xU || (xU = {})),
    function(UU) {
      UU[UU.INCREASING_Y = 0] = "INCREASING_Y", UU[UU.DECREASING_Y = 1] = "DECREASING_Y"
    }(mU || (mU = {}));
    const vU = 20000630;

    function dU(UU, RU) {
      if (UU.getUint32(0, !0) != vU) throw new Error("Incorrect OpenEXR format");
      const gU = UU.getUint8(4),
        pU = UU.getUint8(5),
        EU = {
          singleTile: !!(2 & pU),
          longName: !!(4 & pU),
          deepFormat: !!(8 & pU),
          multiPart: !!(16 & pU)
        };
      RU.value = 8;
      const PU = {};
      let TU = !0;
      for (; TU;) {
        const gU = IU(UU.buffer, RU);
        if (gU) {
          const pU = IU(UU.buffer, RU),
            EU = VU(UU, RU, pU, wU(UU, RU));
          void 0 === EU ? tU.e.Warn(`Unknown header attribute type ${pU}'.`) : PU[gU] = EU
        } else TU = !1
      }
      if (0 != (-5 & pU)) throw new Error("Unsupported file format");
      return {
        version: gU,
        spec: EU,
        ...PU
      }
    }
    const HU = 32768,
      SU = 65535;

    function sU(UU, RU, gU, tU, pU) {
      for (; gU < UU;) RU = RU << 8 | oU(tU, pU), gU += 8;
      return {
        l: RU >> (gU -= UU) & (1 << UU) - 1,
        c: RU,
        lc: gU
      }
    }

    function yU(UU, RU, gU, tU) {
      return {
        c: UU = UU << 8 | oU(gU, tU),
        lc: RU += 8
      }
    }

    function kU(UU, RU, gU, tU, pU, EU, PU, TU, qU) {
      if (UU == RU) {
        if (tU < 8) {
          const UU = yU(gU, tU, pU, EU);
          gU = UU.c, tU = UU.lc
        }
        let UU = gU >> (tU -= 8);
        if (UU = new Uint8Array([UU])[0], TU.value + UU > qU) return null;
        const RU = PU[TU.value - 1];
        for (; UU-- > 0;) PU[TU.value++] = RU
      } else {
        if (!(TU.value < qU)) return null;
        PU[TU.value++] = UU
      }
      return {
        c: gU,
        lc: tU
      }
    }
    const FU = new Array(59);

    function iU(UU, RU, gU, tU, pU, EU) {
      const PU = RU;
      let TU = 0,
        qU = 0;
      for (; tU <= pU; tU++) {
        if (PU.value - RU.value > gU) return;
        let KU = sU(6, TU, qU, UU, PU);
        const cU = KU.l;
        if (TU = KU.c, qU = KU.lc, EU[tU] = cU, cU == WU) {
          if (PU.value - RU.value > gU) throw new Error("Error in HufUnpackEncTable");
          KU = sU(8, TU, qU, UU, PU);
          let cU = KU.l + fU;
          if (TU = KU.c, qU = KU.lc, tU + cU > pU + 1) throw new Error("Error in HufUnpackEncTable");
          for (; cU--;) EU[tU++] = 0;
          tU--
        } else if (cU >= eU) {
          let UU = cU - eU + 2;
          if (tU + UU > pU + 1) throw new Error("Error in HufUnpackEncTable");
          for (; UU--;) EU[tU++] = 0;
          tU--
        }
      }! function(UU) {
        for (let gU = 0; gU <= 58; ++gU) FU[gU] = 0;
        for (let gU = 0; gU < CU; ++gU) FU[UU[gU]] += 1;
        let RU = 0;
        for (let gU = 58; gU > 0; --gU) {
          const UU = RU + FU[gU] >> 1;
          FU[gU] = RU, RU = UU
        }
        for (let gU = 0; gU < CU; ++gU) {
          const RU = UU[gU];
          RU > 0 && (UU[gU] = RU | FU[RU]++ << 6)
        }
      }(EU)
    }

    function AU(UU) {
      return 63 & UU
    }

    function zU(UU) {
      return UU >> 6
    }

    function MU(UU, RU, gU, tU, pU, EU) {
      const PU = gU.value,
        TU = wU(RU, gU),
        qU = wU(RU, gU);
      gU.value += 4;
      const KU = wU(RU, gU);
      if (gU.value += 4, TU < 0 || TU >= CU || qU < 0 || qU >= CU) throw new Error("Wrong HUF_ENCSIZE");
      const cU = new Array(CU),
        GU = new Array(hU);
      ! function(UU) {
        for (let RU = 0; RU < hU; RU++) UU[RU] = {}, UU[RU].len = 0, UU[RU].lit = 0, UU[RU].p = null
      }(GU);
      if (iU(UU, gU, tU - (gU.value - PU), TU, qU, cU), KU > 8 * (tU - (gU.value - PU))) throw new Error("Wrong hufUncompress");
      ! function(UU, RU, gU, tU) {
        for (; RU <= gU; RU++) {
          const gU = zU(UU[RU]),
            pU = AU(UU[RU]);
          if (gU >> pU) throw new Error("Invalid table entry");
          if (pU > uU) {
            const UU = tU[gU >> pU - uU];
            if (UU.len) throw new Error("Invalid table entry");
            if (UU.lit++, UU.p) {
              const RU = UU.p;
              UU.p = new Array(UU.lit);
              for (let gU = 0; gU < UU.lit - 1; ++gU) UU.p[gU] = RU[gU]
            } else UU.p = new Array(1);
            UU.p[UU.lit - 1] = RU
          } else if (pU) {
            let UU = 0;
            for (let EU = 1 << uU - pU; EU > 0; EU--) {
              const EU = tU[(gU << uU - pU) + UU];
              if (EU.len || EU.p) throw new Error("Invalid table entry");
              EU.len = pU, EU.lit = RU, UU++
            }
          }
        }
      }(cU, TU, qU, GU),
      function(UU, RU, gU, tU, pU, EU, PU, TU, qU) {
        let KU = 0,
          cU = 0;
        const GU = PU,
          jU = Math.trunc(tU.value + (pU + 7) / 8);
        for (; tU.value < jU;) {
          let pU = yU(KU, cU, gU, tU);
          for (KU = pU.c, cU = pU.lc; cU >= uU;) {
            const PU = RU[KU >> cU - uU & QU];
            if (PU.len) {
              cU -= PU.len;
              const UU = kU(PU.lit, EU, KU, cU, gU, tU, TU, qU, GU);
              UU && (KU = UU.c, cU = UU.lc)
            } else {
              if (!PU.p) throw new Error("hufDecode issues");
              let RU;
              for (RU = 0; RU < PU.lit; RU++) {
                const uU = AU(UU[PU.p[RU]]);
                for (; cU < uU && tU.value < jU;) pU = yU(KU, cU, gU, tU), KU = pU.c, cU = pU.lc;
                if (cU >= uU && zU(UU[PU.p[RU]]) == (KU >> cU - uU & (1 << uU) - 1)) {
                  cU -= uU;
                  const UU = kU(PU.p[RU], EU, KU, cU, gU, tU, TU, qU, GU);
                  UU && (KU = UU.c, cU = UU.lc);
                  break
                }
              }
              if (RU == PU.lit) throw new Error("HufDecode issues")
            }
          }
        }
        const CU = 8 - pU & 7;
        for (KU >>= CU, cU -= CU; cU > 0;) {
          const UU = RU[KU << uU - cU & QU];
          if (!UU.len) throw new Error("HufDecode issues");
          {
            cU -= UU.len;
            const RU = kU(UU.lit, EU, KU, cU, gU, tU, TU, qU, GU);
            RU && (KU = RU.c, cU = RU.lc)
          }
        }
      }(cU, GU, UU, gU, KU, qU, EU, pU, {
        value: 0
      })
    }

    function DU(UU) {
      return 65535 & UU
    }

    function LU(UU) {
      const RU = DU(UU);
      return RU > 32767 ? RU - 65536 : RU
    }

    function NU(UU, RU) {
      const gU = LU(UU),
        tU = LU(RU),
        pU = gU + (1 & tU) + (tU >> 1);
      return {
        a: pU,
        b: pU - tU
      }
    }

    function lU(UU, RU) {
      const gU = DU(UU),
        tU = DU(RU),
        pU = gU - (tU >> 1) & SU;
      return {
        a: tU + pU - HU & SU,
        b: pU
      }
    }

    function OU(UU, RU, gU, tU, pU, EU, PU) {
      const TU = PU < 16384,
        qU = gU > pU ? pU : gU;
      let KU, cU, GU = 1;
      for (; GU <= qU;) GU <<= 1;
      for (GU >>= 1, KU = GU, GU >>= 1; GU >= 1;) {
        cU = 0;
        const PU = cU + EU * (pU - KU),
          qU = EU * GU,
          jU = EU * KU,
          uU = tU * GU,
          CU = tU * KU;
        let hU, QU, eU, WU;
        for (; cU <= PU; cU += jU) {
          let pU = cU;
          const EU = cU + tU * (gU - KU);
          for (; pU <= EU; pU += CU) {
            const gU = pU + uU,
              tU = pU + qU,
              EU = tU + uU;
            if (TU) {
              let PU = NU(UU[pU + RU], UU[tU + RU]);
              hU = PU.a, eU = PU.b, PU = NU(UU[gU + RU], UU[EU + RU]), QU = PU.a, WU = PU.b, PU = NU(hU, QU), UU[pU + RU] = PU.a, UU[gU + RU] = PU.b, PU = NU(eU, WU), UU[tU + RU] = PU.a, UU[EU + RU] = PU.b
            } else {
              let PU = lU(UU[pU + RU], UU[tU + RU]);
              hU = PU.a, eU = PU.b, PU = lU(UU[gU + RU], UU[EU + RU]), QU = PU.a, WU = PU.b, PU = lU(hU, QU), UU[pU + RU] = PU.a, UU[gU + RU] = PU.b, PU = lU(eU, WU), UU[tU + RU] = PU.a, UU[EU + RU] = PU.b
            }
          }
          if (gU & GU) {
            const gU = pU + qU;
            let tU;
            tU = TU ? NU(UU[pU + RU], UU[gU + RU]) : lU(UU[pU + RU], UU[gU + RU]), hU = tU.a, UU[gU + RU] = tU.b, UU[pU + RU] = hU
          }
        }
        if (pU & GU) {
          let pU = cU;
          const EU = cU + tU * (gU - KU);
          for (; pU <= EU; pU += CU) {
            const gU = pU + uU;
            let tU;
            tU = TU ? NU(UU[pU + RU], UU[gU + RU]) : lU(UU[pU + RU], UU[gU + RU]), hU = tU.a, UU[gU + RU] = tU.b, UU[pU + RU] = hU
          }
        }
        KU = GU, GU >>= 1
      }
      return cU
    }

    function UR(UU) {
      return new DataView(UU.array.buffer, UU.offset.value, UU.size)
    }

    function RR(UU) {
      const RU = UU.viewer.buffer.slice(UU.offset.value, UU.offset.value + UU.size),
        gU = new Uint8Array(function(UU) {
          let RU = UU.byteLength;
          const gU = [];
          let tU = 0;
          const pU = new DataView(UU);
          for (; RU > 0;) {
            const UU = pU.getInt8(tU++);
            if (UU < 0) {
              const EU = -UU;
              RU -= EU + 1;
              for (let UU = 0; UU < EU; UU++) gU.push(pU.getUint8(tU++))
            } else {
              const EU = UU;
              RU -= 2;
              const PU = pU.getUint8(tU++);
              for (let UU = 0; UU < EU + 1; UU++) gU.push(PU)
            }
          }
          return gU
        }(RU)),
        tU = new Uint8Array(gU.length);
      return rU(gU), XU(gU, tU), new DataView(tU.buffer)
    }

    function gR(UU) {
      const RU = UU.array.slice(UU.offset.value, UU.offset.value + UU.size),
        gU = fflate.unzlibSync(RU),
        tU = new Uint8Array(gU.length);
      return rU(gU), XU(gU, tU), new DataView(tU.buffer)
    }

    function tR(UU) {
      const RU = UU.array.slice(UU.offset.value, UU.offset.value + UU.size),
        gU = fflate.unzlibSync(RU),
        tU = UU.lines * UU.channels * UU.width,
        pU = 1 == UU.type ? new Uint16Array(tU) : new Uint32Array(tU);
      let EU = 0,
        PU = 0;
      const TU = new Array(4);
      for (let qU = 0; qU < UU.lines; qU++)
        for (let RU = 0; RU < UU.channels; RU++) {
          let RU = 0;
          switch (UU.type) {
            case 1:
              TU[0] = EU, TU[1] = TU[0] + UU.width, EU = TU[1] + UU.width;
              for (let tU = 0; tU < UU.width; ++tU) {
                RU += gU[TU[0]++] << 8 | gU[TU[1]++], pU[PU] = RU, PU++
              }
              break;
            case 2:
              TU[0] = EU, TU[1] = TU[0] + UU.width, TU[2] = TU[1] + UU.width, EU = TU[2] + UU.width;
              for (let tU = 0; tU < UU.width; ++tU) {
                RU += gU[TU[0]++] << 24 | gU[TU[1]++] << 16 | gU[TU[2]++] << 8, pU[PU] = RU, PU++
              }
          }
        }
      return new DataView(pU.buffer)
    }

    function pR(UU) {
      const RU = UU.viewer,
        gU = {
          value: UU.offset.value
        },
        tU = new Uint16Array(UU.width * UU.scanlineBlockSize * (UU.channels * UU.type)),
        pU = new Uint8Array(jU);
      let EU = 0;
      const PU = new Array(UU.channels);
      for (let KU = 0; KU < UU.channels; KU++) PU[KU] = {}, PU[KU].start = EU, PU[KU].end = PU[KU].start, PU[KU].nx = UU.width, PU[KU].ny = UU.lines, PU[KU].size = UU.type, EU += PU[KU].nx * PU[KU].ny * PU[KU].size;
      const TU = bU(RU, gU),
        qU = bU(RU, gU);
      if (qU >= jU) throw new Error("Wrong PIZ_COMPRESSION BITMAP_SIZE");
      if (TU <= qU)
        for (let KU = 0; KU < qU - TU + 1; KU++) pU[KU + TU] = nU(RU, gU);
      const cU = new Uint16Array(GU),
        uU = function(UU, RU) {
          let gU = 0;
          for (let pU = 0; pU < GU; ++pU)(0 == pU || UU[pU >> 3] & 1 << (7 & pU)) && (RU[gU++] = pU);
          const tU = gU - 1;
          for (; gU < GU;) RU[gU++] = 0;
          return tU
        }(pU, cU),
        CU = wU(RU, gU);
      MU(UU.array, RU, gU, CU, tU, EU);
      for (let KU = 0; KU < UU.channels; ++KU) {
        const UU = PU[KU];
        for (let RU = 0; RU < PU[KU].size; ++RU) OU(tU, UU.start + RU, UU.nx, UU.size, UU.ny, UU.nx * UU.size, uU)
      }! function(UU, RU, gU) {
        for (let tU = 0; tU < gU; ++tU) RU[tU] = UU[RU[tU]]
      }(cU, tU, EU);
      let hU = 0;
      const QU = new Uint8Array(tU.buffer.byteLength);
      for (let GU = 0; GU < UU.lines; GU++)
        for (let RU = 0; RU < UU.channels; RU++) {
          const UU = PU[RU],
            gU = UU.nx * UU.size,
            pU = new Uint8Array(tU.buffer, UU.end * KU, gU * KU);
          QU.set(pU, hU), hU += gU * KU, UU.end += gU
        }
      return new DataView(QU.buffer)
    }
    var ER, PR = gU(39473);
    ! function(UU) {
      UU[UU.Float = 0] = "Float", UU[UU.HalfFloat = 1] = "HalfFloat"
    }(ER || (ER = {}));
    class TR {}
    async function qR(UU, RU, gU, tU) {
      const pU = {
        size: 0,
        viewer: RU,
        array: new Uint8Array(RU.buffer),
        offset: gU,
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
        case xU.NO_COMPRESSION:
          pU.lines = 1, pU.uncompress = UR;
          break;
        case xU.RLE_COMPRESSION:
          pU.lines = 1, pU.uncompress = RR;
          break;
        case xU.ZIPS_COMPRESSION:
          pU.lines = 1, pU.uncompress = gR, await PR.g.LoadScriptAsync(TR.FFLATEUrl);
          break;
        case xU.ZIP_COMPRESSION:
          pU.lines = 16, pU.uncompress = gR, await PR.g.LoadScriptAsync(TR.FFLATEUrl);
          break;
        case xU.PIZ_COMPRESSION:
          pU.lines = 32, pU.uncompress = pR;
          break;
        case xU.PXR24_COMPRESSION:
          pU.lines = 16, pU.uncompress = tR, await PR.g.LoadScriptAsync(TR.FFLATEUrl);
          break;
        default:
          throw new Error(xU[UU.compression] + " is unsupported")
      }
      pU.scanlineBlockSize = pU.lines;
      const EU = {};
      for (const TU of UU.channels) switch (TU.name) {
        case "R":
        case "G":
        case "B":
        case "A":
        case "Y":
          EU[TU.name] = !0, pU.type = TU.pixelType
      }
      let PU = !1;
      if (EU.R && EU.G && EU.B && EU.A) pU.outputChannels = 4, pU.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (EU.R && EU.G && EU.B) PU = !0, pU.outputChannels = 4, pU.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (EU.R && EU.G) pU.outputChannels = 2, pU.decodeChannels = {
        R: 0,
        G: 1
      };
      else if (EU.R) pU.outputChannels = 1, pU.decodeChannels = {
        R: 0
      };
      else {
        if (!EU.Y) throw new Error("EXRLoader.parse: file contains unsupported data channels.");
        pU.outputChannels = 1, pU.decodeChannels = {
          Y: 0
        }
      }
      if (1 === pU.type) switch (tU) {
        case ER.Float:
          pU.getter = YU, pU.inputSize = KU;
          break;
        case ER.HalfFloat:
          pU.getter = bU, pU.inputSize = KU
      } else {
        if (2 !== pU.type) throw new Error("Unsupported pixelType " + pU.type + " for " + UU.compression);
        switch (tU) {
          case ER.Float:
            pU.getter = aU, pU.inputSize = TU;
            break;
          case ER.HalfFloat:
            pU.getter = BU, pU.inputSize = TU
        }
      }
      pU.blockCount = pU.height / pU.scanlineBlockSize;
      for (let TU = 0; TU < pU.blockCount; TU++) ZU(RU, gU);
      const qU = pU.width * pU.height * pU.outputChannels;
      switch (tU) {
        case ER.Float:
          pU.byteArray = new Float32Array(qU), pU.textureType = 1, PU && pU.byteArray.fill(1, 0, qU);
          break;
        case ER.HalfFloat:
          pU.byteArray = new Uint16Array(qU), pU.textureType = 2, PU && pU.byteArray.fill(15360, 0, qU);
          break;
        default:
          throw new Error("Unsupported type: " + tU)
      }
      let cU = 0;
      for (const TU of UU.channels) void 0 !== pU.decodeChannels[TU.name] && (pU.channelLineOffsets[TU.name] = cU * pU.width), cU += 2 * TU.pixelType;
      return pU.bytesPerLine = pU.width * cU, pU.outLineWidth = pU.width * pU.outputChannels, "INCREASING_Y" === UU.lineOrder ? pU.scanOrder = UU => UU : pU.scanOrder = UU => pU.height - 1 - UU, 4 == pU.outputChannels ? (pU.format = 5, pU.linearSpace = !0) : (pU.format = 6, pU.linearSpace = !1), pU
    }

    function KR(UU, RU, gU, tU) {
      const pU = {
        value: 0
      };
      for (let EU = 0; EU < UU.height / UU.scanlineBlockSize; EU++) {
        const PU = JU(gU, tU) - RU.dataWindow.yMin;
        UU.size = wU(gU, tU), UU.lines = PU + UU.scanlineBlockSize > UU.height ? UU.height - PU : UU.scanlineBlockSize;
        const TU = UU.size < UU.lines * UU.bytesPerLine && UU.uncompress ? UU.uncompress(UU) : UR(UU);
        tU.value += UU.size;
        for (let gU = 0; gU < UU.scanlineBlockSize; gU++) {
          const tU = EU * UU.scanlineBlockSize,
            PU = gU + UU.scanOrder(tU);
          if (PU >= UU.height) continue;
          const qU = gU * UU.bytesPerLine,
            KU = (UU.height - 1 - PU) * UU.outLineWidth;
          for (let gU = 0; gU < UU.channels; gU++) {
            const tU = RU.channels[gU].name,
              EU = UU.channelLineOffsets[tU],
              PU = UU.decodeChannels[tU];
            if (void 0 !== PU) {
              pU.value = qU + EU;
              for (let RU = 0; RU < UU.width; RU++) {
                const gU = KU + RU * UU.outputChannels + PU;
                UU.byteArray && (UU.byteArray[gU] = UU.getter(TU, pU))
              }
            }
          }
        }
      }
    }
    TR.DefaultOutputType = ER.HalfFloat, TR.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class cR {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(UU, RU, gU, tU, pU) {
        throw ".exr not supported in Cube."
      }
      loadData(UU, RU, gU) {
        const pU = new DataView(UU.buffer),
          EU = {
            value: 0
          },
          PU = dU(pU, EU);
        qR(PU, pU, EU, TR.DefaultOutputType).then((UU => {
          KR(UU, PU, pU, EU);
          const tU = PU.dataWindow.xMax - PU.dataWindow.xMin + 1,
            TU = PU.dataWindow.yMax - PU.dataWindow.yMin + 1;
          gU(tU, TU, RU.generateMipMaps, !1, (() => {
            const gU = RU.WC();
            RU.format = PU.format, RU.type = UU.textureType, RU.invertY = !1, RU._gammaSpace = !PU.linearSpace, UU.byteArray && gU._uploadDataToTextureDirectly(RU, UU.byteArray, 0, 0, void 0, !0)
          }))
        })).catch((UU => {
          tU.e.Error("Failed to load EXR texture: ", UU)
        }))
      }
    }
    async function GR(UU) {
      const RU = new DataView(UU),
        gU = {
          value: 0
        },
        pU = dU(RU, gU);
      try {
        const UU = await qR(pU, RU, gU, ER.Float);
        return KR(UU, pU, RU, gU), UU.byteArray ? {
          width: pU.dataWindow.xMax - pU.dataWindow.xMin + 1,
          height: pU.dataWindow.yMax - pU.dataWindow.yMin + 1,
          data: new Float32Array(UU.byteArray)
        } : (tU.e.Error("Failed to decode EXR data: No byte array available."), {
          width: 0,
          height: 0,
          data: null
        })
      } catch (EU) {
        tU.e.Error("Failed to load EXR data: ", EU)
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