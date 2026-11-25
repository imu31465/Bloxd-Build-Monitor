export const id = 320;
export const ids = [320];
export const modules = {
  42317: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      ReadExrDataAsync: () => pb,
      _ExrTextureLoader: () => Vb
    });
    var wG = ZG(39093),
      SG = ZG(37471),
      LG = ZG(40451);
    const yG = 4,
      kG = 4,
      UG = 1,
      YG = 2,
      VG = 8,
      pG = 65536,
      fG = pG >> 3,
      QG = 14,
      KG = 65537,
      hG = 1 << QG,
      dG = hG - 1,
      JG = 59,
      rG = 63,
      zG = 2 + rG - JG;
    var EG, oG;

    function XG(GG, bG) {
      const ZG = new Uint8Array(GG);
      let wG = 0;
      for (; 0 != ZG[bG.value + wG];) wG += 1;
      const SG = (new TextDecoder).decode(ZG.slice(bG.value, bG.value + wG));
      return bG.value = bG.value + wG + 1, SG
    }

    function uG(GG, bG) {
      const ZG = GG.getInt32(bG.value, !0);
      return bG.value += yG, ZG
    }

    function iG(GG, bG) {
      const ZG = GG.getUint32(bG.value, !0);
      return bG.value += yG, ZG
    }

    function CG(GG, bG) {
      const ZG = GG.getUint8(bG.value);
      return bG.value += UG, ZG
    }

    function WG(GG, bG) {
      const ZG = GG.getUint16(bG.value, !0);
      return bG.value += YG, ZG
    }

    function mG(GG, bG) {
      const ZG = GG[bG.value];
      return bG.value += UG, ZG
    }

    function IG(GG, bG) {
      let ZG;
      return ZG = "getBigInt64" in DataView.prototype ? Number(GG.getBigInt64(bG.value, !0)) : GG.getUint32(bG.value + 4, !0) + Number(GG.getUint32(bG.value, !0) << 32), bG.value += VG, ZG
    }

    function FG(GG, bG) {
      const ZG = GG.getFloat32(bG.value, !0);
      return bG.value += kG, ZG
    }

    function vG(GG, bG) {
      return (0, LG.c)(WG(GG, bG))
    }

    function aG(GG, bG) {
      return (0, LG.h)((0, SG.Clamp)(FG(GG, bG), -LG.f, LG.f))
    }

    function cG(GG, bG, ZG, wG) {
      switch (ZG) {
        case "string":
        case "stringvector":
        case "iccProfile":
          return function(GG, bG, ZG) {
            const wG = (new TextDecoder).decode(new Uint8Array(GG).slice(bG.value, bG.value + ZG));
            return bG.value = bG.value + ZG, wG
          }(GG.buffer, bG, wG);
        case "chlist":
          return function(GG, bG, ZG) {
            const wG = bG.value,
              SG = [];
            for (; bG.value < wG + ZG - 1;) {
              const ZG = XG(GG.buffer, bG),
                wG = uG(GG, bG),
                LG = CG(GG, bG);
              bG.value += 3;
              const yG = uG(GG, bG),
                kG = uG(GG, bG);
              SG.push({
                name: ZG,
                pixelType: wG,
                pLinear: LG,
                xSampling: yG,
                ySampling: kG
              })
            }
            return bG.value += 1, SG
          }(GG, bG, wG);
        case "chromaticities":
          return function(GG, bG) {
            return {
              redX: FG(GG, bG),
              redY: FG(GG, bG),
              greenX: FG(GG, bG),
              greenY: FG(GG, bG),
              blueX: FG(GG, bG),
              blueY: FG(GG, bG),
              whiteX: FG(GG, bG),
              whiteY: FG(GG, bG)
            }
          }(GG, bG);
        case "compression":
          return function(GG, bG) {
            return CG(GG, bG)
          }(GG, bG);
        case "box2i":
          return function(GG, bG) {
            return {
              xMin: uG(GG, bG),
              yMin: uG(GG, bG),
              xMax: uG(GG, bG),
              yMax: uG(GG, bG)
            }
          }(GG, bG);
        case "lineOrder":
          return function(GG, bG) {
            const ZG = CG(GG, bG);
            return oG[ZG]
          }(GG, bG);
        case "float":
          return FG(GG, bG);
        case "v2f":
          return function(GG, bG) {
            return [FG(GG, bG), FG(GG, bG)]
          }(GG, bG);
        case "v3f":
          return function(GG, bG) {
            return [FG(GG, bG), FG(GG, bG), FG(GG, bG)]
          }(GG, bG);
        case "int":
          return uG(GG, bG);
        case "rational":
          return function(GG, bG) {
            return [uG(GG, bG), iG(GG, bG)]
          }(GG, bG);
        case "timecode":
          return function(GG, bG) {
            return [iG(GG, bG), iG(GG, bG)]
          }(GG, bG);
        case "preview":
          return bG.value += wG, "skipped";
        default:
          return void(bG.value += wG)
      }
    }

    function lG(GG) {
      for (let bG = 1; bG < GG.length; bG++) {
        const ZG = GG[bG - 1] + GG[bG] - 128;
        GG[bG] = ZG
      }
    }

    function jG(GG, bG) {
      let ZG = 0,
        wG = Math.floor((GG.length + 1) / 2),
        SG = 0;
      const LG = GG.length - 1;
      for (; !(SG > LG) && (bG[SG++] = GG[ZG++], !(SG > LG));) bG[SG++] = GG[wG++]
    }! function(GG) {
      GG[GG.NO_COMPRESSION = 0] = "NO_COMPRESSION", GG[GG.RLE_COMPRESSION = 1] = "RLE_COMPRESSION", GG[GG.ZIPS_COMPRESSION = 2] = "ZIPS_COMPRESSION", GG[GG.ZIP_COMPRESSION = 3] = "ZIP_COMPRESSION", GG[GG.PIZ_COMPRESSION = 4] = "PIZ_COMPRESSION", GG[GG.PXR24_COMPRESSION = 5] = "PXR24_COMPRESSION"
    }(EG || (EG = {})),
    function(GG) {
      GG[GG.INCREASING_Y = 0] = "INCREASING_Y", GG[GG.DECREASING_Y = 1] = "DECREASING_Y"
    }(oG || (oG = {}));
    const PG = 20000630;

    function MG(GG, bG) {
      if (GG.getUint32(0, !0) != PG) throw new Error("Incorrect OpenEXR format");
      const ZG = GG.getUint8(4),
        SG = GG.getUint8(5),
        LG = {
          singleTile: !!(2 & SG),
          longName: !!(4 & SG),
          deepFormat: !!(8 & SG),
          multiPart: !!(16 & SG)
        };
      bG.value = 8;
      const yG = {};
      let kG = !0;
      for (; kG;) {
        const ZG = XG(GG.buffer, bG);
        if (ZG) {
          const SG = XG(GG.buffer, bG),
            LG = cG(GG, bG, SG, iG(GG, bG));
          void 0 === LG ? wG.c.Warn(`Unknown header attribute type ${SG}'.`) : yG[ZG] = LG
        } else kG = !1
      }
      if (0 != (-5 & SG)) throw new Error("Unsupported file format");
      return {
        version: ZG,
        spec: LG,
        ...yG
      }
    }
    const AG = 32768,
      sG = 65535;

    function qG(GG, bG, ZG, wG, SG) {
      for (; ZG < GG;) bG = bG << 8 | mG(wG, SG), ZG += 8;
      return {
        l: bG >> (ZG -= GG) & (1 << GG) - 1,
        c: bG,
        lc: ZG
      }
    }

    function nG(GG, bG, ZG, wG) {
      return {
        c: GG = GG << 8 | mG(ZG, wG),
        lc: bG += 8
      }
    }

    function gG(GG, bG, ZG, wG, SG, LG, yG, kG, UG) {
      if (GG == bG) {
        if (wG < 8) {
          const GG = nG(ZG, wG, SG, LG);
          ZG = GG.c, wG = GG.lc
        }
        let GG = ZG >> (wG -= 8);
        if (GG = new Uint8Array([GG])[0], kG.value + GG > UG) return null;
        const bG = yG[kG.value - 1];
        for (; GG-- > 0;) yG[kG.value++] = bG
      } else {
        if (!(kG.value < UG)) return null;
        yG[kG.value++] = GG
      }
      return {
        c: ZG,
        lc: wG
      }
    }
    const eG = new Array(59);

    function RG(GG, bG, ZG, wG, SG, LG) {
      const yG = bG;
      let kG = 0,
        UG = 0;
      for (; wG <= SG; wG++) {
        if (yG.value - bG.value > ZG) return;
        let YG = qG(6, kG, UG, GG, yG);
        const VG = YG.l;
        if (kG = YG.c, UG = YG.lc, LG[wG] = VG, VG == rG) {
          if (yG.value - bG.value > ZG) throw new Error("Error in HufUnpackEncTable");
          YG = qG(8, kG, UG, GG, yG);
          let VG = YG.l + zG;
          if (kG = YG.c, UG = YG.lc, wG + VG > SG + 1) throw new Error("Error in HufUnpackEncTable");
          for (; VG--;) LG[wG++] = 0;
          wG--
        } else if (VG >= JG) {
          let GG = VG - JG + 2;
          if (wG + GG > SG + 1) throw new Error("Error in HufUnpackEncTable");
          for (; GG--;) LG[wG++] = 0;
          wG--
        }
      }! function(GG) {
        for (let ZG = 0; ZG <= 58; ++ZG) eG[ZG] = 0;
        for (let ZG = 0; ZG < KG; ++ZG) eG[GG[ZG]] += 1;
        let bG = 0;
        for (let ZG = 58; ZG > 0; --ZG) {
          const GG = bG + eG[ZG] >> 1;
          eG[ZG] = bG, bG = GG
        }
        for (let ZG = 0; ZG < KG; ++ZG) {
          const bG = GG[ZG];
          bG > 0 && (GG[ZG] = bG | eG[bG]++ << 6)
        }
      }(LG)
    }

    function TG(GG) {
      return 63 & GG
    }

    function HG(GG) {
      return GG >> 6
    }

    function tG(GG, bG, ZG, wG, SG, LG) {
      const yG = ZG.value,
        kG = iG(bG, ZG),
        UG = iG(bG, ZG);
      ZG.value += 4;
      const YG = iG(bG, ZG);
      if (ZG.value += 4, kG < 0 || kG >= KG || UG < 0 || UG >= KG) throw new Error("Wrong HUF_ENCSIZE");
      const VG = new Array(KG),
        pG = new Array(hG);
      ! function(GG) {
        for (let bG = 0; bG < hG; bG++) GG[bG] = {}, GG[bG].len = 0, GG[bG].lit = 0, GG[bG].p = null
      }(pG);
      if (RG(GG, ZG, wG - (ZG.value - yG), kG, UG, VG), YG > 8 * (wG - (ZG.value - yG))) throw new Error("Wrong hufUncompress");
      ! function(GG, bG, ZG, wG) {
        for (; bG <= ZG; bG++) {
          const ZG = HG(GG[bG]),
            SG = TG(GG[bG]);
          if (ZG >> SG) throw new Error("Invalid table entry");
          if (SG > QG) {
            const GG = wG[ZG >> SG - QG];
            if (GG.len) throw new Error("Invalid table entry");
            if (GG.lit++, GG.p) {
              const bG = GG.p;
              GG.p = new Array(GG.lit);
              for (let ZG = 0; ZG < GG.lit - 1; ++ZG) GG.p[ZG] = bG[ZG]
            } else GG.p = new Array(1);
            GG.p[GG.lit - 1] = bG
          } else if (SG) {
            let GG = 0;
            for (let LG = 1 << QG - SG; LG > 0; LG--) {
              const LG = wG[(ZG << QG - SG) + GG];
              if (LG.len || LG.p) throw new Error("Invalid table entry");
              LG.len = SG, LG.lit = bG, GG++
            }
          }
        }
      }(VG, kG, UG, pG),
      function(GG, bG, ZG, wG, SG, LG, yG, kG, UG) {
        let YG = 0,
          VG = 0;
        const pG = yG,
          fG = Math.trunc(wG.value + (SG + 7) / 8);
        for (; wG.value < fG;) {
          let SG = nG(YG, VG, ZG, wG);
          for (YG = SG.c, VG = SG.lc; VG >= QG;) {
            const yG = bG[YG >> VG - QG & dG];
            if (yG.len) {
              VG -= yG.len;
              const GG = gG(yG.lit, LG, YG, VG, ZG, wG, kG, UG, pG);
              GG && (YG = GG.c, VG = GG.lc)
            } else {
              if (!yG.p) throw new Error("hufDecode issues");
              let bG;
              for (bG = 0; bG < yG.lit; bG++) {
                const QG = TG(GG[yG.p[bG]]);
                for (; VG < QG && wG.value < fG;) SG = nG(YG, VG, ZG, wG), YG = SG.c, VG = SG.lc;
                if (VG >= QG && HG(GG[yG.p[bG]]) == (YG >> VG - QG & (1 << QG) - 1)) {
                  VG -= QG;
                  const GG = gG(yG.p[bG], LG, YG, VG, ZG, wG, kG, UG, pG);
                  GG && (YG = GG.c, VG = GG.lc);
                  break
                }
              }
              if (bG == yG.lit) throw new Error("HufDecode issues")
            }
          }
        }
        const KG = 8 - SG & 7;
        for (YG >>= KG, VG -= KG; VG > 0;) {
          const GG = bG[YG << QG - VG & dG];
          if (!GG.len) throw new Error("HufDecode issues");
          {
            VG -= GG.len;
            const bG = gG(GG.lit, LG, YG, VG, ZG, wG, kG, UG, pG);
            bG && (YG = bG.c, VG = bG.lc)
          }
        }
      }(VG, pG, GG, ZG, YG, UG, LG, SG, {
        value: 0
      })
    }

    function DG(GG) {
      return 65535 & GG
    }

    function NG(GG) {
      const bG = DG(GG);
      return bG > 32767 ? bG - 65536 : bG
    }

    function OG(GG, bG) {
      const ZG = NG(GG),
        wG = NG(bG),
        SG = ZG + (1 & wG) + (wG >> 1);
      return {
        a: SG,
        b: SG - wG
      }
    }

    function xG(GG, bG) {
      const ZG = DG(GG),
        wG = DG(bG),
        SG = ZG - (wG >> 1) & sG;
      return {
        a: wG + SG - AG & sG,
        b: SG
      }
    }

    function BG(GG, bG, ZG, wG, SG, LG, yG) {
      const kG = yG < 16384,
        UG = ZG > SG ? SG : ZG;
      let YG, VG, pG = 1;
      for (; pG <= UG;) pG <<= 1;
      for (pG >>= 1, YG = pG, pG >>= 1; pG >= 1;) {
        VG = 0;
        const yG = VG + LG * (SG - YG),
          UG = LG * pG,
          fG = LG * YG,
          QG = wG * pG,
          KG = wG * YG;
        let hG, dG, JG, rG;
        for (; VG <= yG; VG += fG) {
          let SG = VG;
          const LG = VG + wG * (ZG - YG);
          for (; SG <= LG; SG += KG) {
            const ZG = SG + QG,
              wG = SG + UG,
              LG = wG + QG;
            if (kG) {
              let yG = OG(GG[SG + bG], GG[wG + bG]);
              hG = yG.a, JG = yG.b, yG = OG(GG[ZG + bG], GG[LG + bG]), dG = yG.a, rG = yG.b, yG = OG(hG, dG), GG[SG + bG] = yG.a, GG[ZG + bG] = yG.b, yG = OG(JG, rG), GG[wG + bG] = yG.a, GG[LG + bG] = yG.b
            } else {
              let yG = xG(GG[SG + bG], GG[wG + bG]);
              hG = yG.a, JG = yG.b, yG = xG(GG[ZG + bG], GG[LG + bG]), dG = yG.a, rG = yG.b, yG = xG(hG, dG), GG[SG + bG] = yG.a, GG[ZG + bG] = yG.b, yG = xG(JG, rG), GG[wG + bG] = yG.a, GG[LG + bG] = yG.b
            }
          }
          if (ZG & pG) {
            const ZG = SG + UG;
            let wG;
            wG = kG ? OG(GG[SG + bG], GG[ZG + bG]) : xG(GG[SG + bG], GG[ZG + bG]), hG = wG.a, GG[ZG + bG] = wG.b, GG[SG + bG] = hG
          }
        }
        if (SG & pG) {
          let SG = VG;
          const LG = VG + wG * (ZG - YG);
          for (; SG <= LG; SG += KG) {
            const ZG = SG + QG;
            let wG;
            wG = kG ? OG(GG[SG + bG], GG[ZG + bG]) : xG(GG[SG + bG], GG[ZG + bG]), hG = wG.a, GG[ZG + bG] = wG.b, GG[SG + bG] = hG
          }
        }
        YG = pG, pG >>= 1
      }
      return VG
    }

    function Gb(GG) {
      return new DataView(GG.array.buffer, GG.offset.value, GG.size)
    }

    function bb(GG) {
      const bG = GG.viewer.buffer.slice(GG.offset.value, GG.offset.value + GG.size),
        ZG = new Uint8Array(function(GG) {
          let bG = GG.byteLength;
          const ZG = [];
          let wG = 0;
          const SG = new DataView(GG);
          for (; bG > 0;) {
            const GG = SG.getInt8(wG++);
            if (GG < 0) {
              const LG = -GG;
              bG -= LG + 1;
              for (let GG = 0; GG < LG; GG++) ZG.push(SG.getUint8(wG++))
            } else {
              const LG = GG;
              bG -= 2;
              const yG = SG.getUint8(wG++);
              for (let GG = 0; GG < LG + 1; GG++) ZG.push(yG)
            }
          }
          return ZG
        }(bG)),
        wG = new Uint8Array(ZG.length);
      return lG(ZG), jG(ZG, wG), new DataView(wG.buffer)
    }

    function Zb(GG) {
      const bG = GG.array.slice(GG.offset.value, GG.offset.value + GG.size),
        ZG = fflate.unzlibSync(bG),
        wG = new Uint8Array(ZG.length);
      return lG(ZG), jG(ZG, wG), new DataView(wG.buffer)
    }

    function wb(GG) {
      const bG = GG.array.slice(GG.offset.value, GG.offset.value + GG.size),
        ZG = fflate.unzlibSync(bG),
        wG = GG.lines * GG.channels * GG.width,
        SG = 1 == GG.type ? new Uint16Array(wG) : new Uint32Array(wG);
      let LG = 0,
        yG = 0;
      const kG = new Array(4);
      for (let UG = 0; UG < GG.lines; UG++)
        for (let bG = 0; bG < GG.channels; bG++) {
          let bG = 0;
          switch (GG.type) {
            case 1:
              kG[0] = LG, kG[1] = kG[0] + GG.width, LG = kG[1] + GG.width;
              for (let wG = 0; wG < GG.width; ++wG) {
                bG += ZG[kG[0]++] << 8 | ZG[kG[1]++], SG[yG] = bG, yG++
              }
              break;
            case 2:
              kG[0] = LG, kG[1] = kG[0] + GG.width, kG[2] = kG[1] + GG.width, LG = kG[2] + GG.width;
              for (let wG = 0; wG < GG.width; ++wG) {
                bG += ZG[kG[0]++] << 24 | ZG[kG[1]++] << 16 | ZG[kG[2]++] << 8, SG[yG] = bG, yG++
              }
          }
        }
      return new DataView(SG.buffer)
    }

    function Sb(GG) {
      const bG = GG.viewer,
        ZG = {
          value: GG.offset.value
        },
        wG = new Uint16Array(GG.width * GG.scanlineBlockSize * (GG.channels * GG.type)),
        SG = new Uint8Array(fG);
      let LG = 0;
      const yG = new Array(GG.channels);
      for (let YG = 0; YG < GG.channels; YG++) yG[YG] = {}, yG[YG].start = LG, yG[YG].end = yG[YG].start, yG[YG].nx = GG.width, yG[YG].ny = GG.lines, yG[YG].size = GG.type, LG += yG[YG].nx * yG[YG].ny * yG[YG].size;
      const kG = WG(bG, ZG),
        UG = WG(bG, ZG);
      if (UG >= fG) throw new Error("Wrong PIZ_COMPRESSION BITMAP_SIZE");
      if (kG <= UG)
        for (let YG = 0; YG < UG - kG + 1; YG++) SG[YG + kG] = CG(bG, ZG);
      const VG = new Uint16Array(pG),
        QG = function(GG, bG) {
          let ZG = 0;
          for (let SG = 0; SG < pG; ++SG)(0 == SG || GG[SG >> 3] & 1 << (7 & SG)) && (bG[ZG++] = SG);
          const wG = ZG - 1;
          for (; ZG < pG;) bG[ZG++] = 0;
          return wG
        }(SG, VG),
        KG = iG(bG, ZG);
      tG(GG.array, bG, ZG, KG, wG, LG);
      for (let YG = 0; YG < GG.channels; ++YG) {
        const GG = yG[YG];
        for (let bG = 0; bG < yG[YG].size; ++bG) BG(wG, GG.start + bG, GG.nx, GG.size, GG.ny, GG.nx * GG.size, QG)
      }! function(GG, bG, ZG) {
        for (let wG = 0; wG < ZG; ++wG) bG[wG] = GG[bG[wG]]
      }(VG, wG, LG);
      let hG = 0;
      const dG = new Uint8Array(wG.buffer.byteLength);
      for (let pG = 0; pG < GG.lines; pG++)
        for (let bG = 0; bG < GG.channels; bG++) {
          const GG = yG[bG],
            ZG = GG.nx * GG.size,
            SG = new Uint8Array(wG.buffer, GG.end * YG, ZG * YG);
          dG.set(SG, hG), hG += ZG * YG, GG.end += ZG
        }
      return new DataView(dG.buffer)
    }
    var Lb, yb = ZG(40477);
    ! function(GG) {
      GG[GG.Float = 0] = "Float", GG[GG.HalfFloat = 1] = "HalfFloat"
    }(Lb || (Lb = {}));
    class kb {}
    async function Ub(GG, bG, ZG, wG) {
      const SG = {
        size: 0,
        viewer: bG,
        array: new Uint8Array(bG.buffer),
        offset: ZG,
        width: GG.dataWindow.xMax - GG.dataWindow.xMin + 1,
        height: GG.dataWindow.yMax - GG.dataWindow.yMin + 1,
        channels: GG.channels.length,
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
      switch (GG.compression) {
        case EG.NO_COMPRESSION:
          SG.lines = 1, SG.uncompress = Gb;
          break;
        case EG.RLE_COMPRESSION:
          SG.lines = 1, SG.uncompress = bb;
          break;
        case EG.ZIPS_COMPRESSION:
          SG.lines = 1, SG.uncompress = Zb, await yb.f.LoadScriptAsync(kb.FFLATEUrl);
          break;
        case EG.ZIP_COMPRESSION:
          SG.lines = 16, SG.uncompress = Zb, await yb.f.LoadScriptAsync(kb.FFLATEUrl);
          break;
        case EG.PIZ_COMPRESSION:
          SG.lines = 32, SG.uncompress = Sb;
          break;
        case EG.PXR24_COMPRESSION:
          SG.lines = 16, SG.uncompress = wb, await yb.f.LoadScriptAsync(kb.FFLATEUrl);
          break;
        default:
          throw new Error(EG[GG.compression] + " is unsupported")
      }
      SG.scanlineBlockSize = SG.lines;
      const LG = {};
      for (const kG of GG.channels) switch (kG.name) {
        case "R":
        case "G":
        case "B":
        case "A":
        case "Y":
          LG[kG.name] = !0, SG.type = kG.pixelType
      }
      let yG = !1;
      if (LG.R && LG.G && LG.B && LG.A) SG.outputChannels = 4, SG.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (LG.R && LG.G && LG.B) yG = !0, SG.outputChannels = 4, SG.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (LG.R && LG.G) SG.outputChannels = 2, SG.decodeChannels = {
        R: 0,
        G: 1
      };
      else if (LG.R) SG.outputChannels = 1, SG.decodeChannels = {
        R: 0
      };
      else {
        if (!LG.Y) throw new Error("EXRLoader.parse: file contains unsupported data channels.");
        SG.outputChannels = 1, SG.decodeChannels = {
          Y: 0
        }
      }
      if (1 === SG.type) switch (wG) {
        case Lb.Float:
          SG.getter = vG, SG.inputSize = YG;
          break;
        case Lb.HalfFloat:
          SG.getter = WG, SG.inputSize = YG
      } else {
        if (2 !== SG.type) throw new Error("Unsupported pixelType " + SG.type + " for " + GG.compression);
        switch (wG) {
          case Lb.Float:
            SG.getter = FG, SG.inputSize = kG;
            break;
          case Lb.HalfFloat:
            SG.getter = aG, SG.inputSize = kG
        }
      }
      SG.blockCount = SG.height / SG.scanlineBlockSize;
      for (let kG = 0; kG < SG.blockCount; kG++) IG(bG, ZG);
      const UG = SG.width * SG.height * SG.outputChannels;
      switch (wG) {
        case Lb.Float:
          SG.byteArray = new Float32Array(UG), SG.textureType = 1, yG && SG.byteArray.fill(1, 0, UG);
          break;
        case Lb.HalfFloat:
          SG.byteArray = new Uint16Array(UG), SG.textureType = 2, yG && SG.byteArray.fill(15360, 0, UG);
          break;
        default:
          throw new Error("Unsupported type: " + wG)
      }
      let VG = 0;
      for (const kG of GG.channels) void 0 !== SG.decodeChannels[kG.name] && (SG.channelLineOffsets[kG.name] = VG * SG.width), VG += 2 * kG.pixelType;
      return SG.bytesPerLine = SG.width * VG, SG.outLineWidth = SG.width * SG.outputChannels, "INCREASING_Y" === GG.lineOrder ? SG.scanOrder = GG => GG : SG.scanOrder = GG => SG.height - 1 - GG, 4 == SG.outputChannels ? (SG.format = 5, SG.linearSpace = !0) : (SG.format = 6, SG.linearSpace = !1), SG
    }

    function Yb(GG, bG, ZG, wG) {
      const SG = {
        value: 0
      };
      for (let LG = 0; LG < GG.height / GG.scanlineBlockSize; LG++) {
        const yG = uG(ZG, wG) - bG.dataWindow.yMin;
        GG.size = iG(ZG, wG), GG.lines = yG + GG.scanlineBlockSize > GG.height ? GG.height - yG : GG.scanlineBlockSize;
        const kG = GG.size < GG.lines * GG.bytesPerLine && GG.uncompress ? GG.uncompress(GG) : Gb(GG);
        wG.value += GG.size;
        for (let ZG = 0; ZG < GG.scanlineBlockSize; ZG++) {
          const wG = LG * GG.scanlineBlockSize,
            yG = ZG + GG.scanOrder(wG);
          if (yG >= GG.height) continue;
          const UG = ZG * GG.bytesPerLine,
            YG = (GG.height - 1 - yG) * GG.outLineWidth;
          for (let ZG = 0; ZG < GG.channels; ZG++) {
            const wG = bG.channels[ZG].name,
              LG = GG.channelLineOffsets[wG],
              yG = GG.decodeChannels[wG];
            if (void 0 !== yG) {
              SG.value = UG + LG;
              for (let bG = 0; bG < GG.width; bG++) {
                const ZG = YG + bG * GG.outputChannels + yG;
                GG.byteArray && (GG.byteArray[ZG] = GG.getter(kG, SG))
              }
            }
          }
        }
      }
    }
    kb.DefaultOutputType = Lb.HalfFloat, kb.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class Vb {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(GG, bG, ZG, wG, SG) {
        throw ".exr not supported in Cube."
      }
      loadData(GG, bG, ZG) {
        const SG = new DataView(GG.buffer),
          LG = {
            value: 0
          },
          yG = MG(SG, LG);
        Ub(yG, SG, LG, kb.DefaultOutputType).then((GG => {
          Yb(GG, yG, SG, LG);
          const wG = yG.dataWindow.xMax - yG.dataWindow.xMin + 1,
            kG = yG.dataWindow.yMax - yG.dataWindow.yMin + 1;
          ZG(wG, kG, bG.generateMipMaps, !1, (() => {
            const ZG = bG.CK();
            bG.format = yG.format, bG.type = GG.textureType, bG.invertY = !1, bG._gammaSpace = !yG.linearSpace, GG.byteArray && ZG._uploadDataToTextureDirectly(bG, GG.byteArray, 0, 0, void 0, !0)
          }))
        })).catch((GG => {
          wG.c.Error("Failed to load EXR texture: ", GG)
        }))
      }
    }
    async function pb(GG) {
      const bG = new DataView(GG),
        ZG = {
          value: 0
        },
        SG = MG(bG, ZG);
      try {
        const GG = await Ub(SG, bG, ZG, Lb.Float);
        return Yb(GG, SG, bG, ZG), GG.byteArray ? {
          width: SG.dataWindow.xMax - SG.dataWindow.xMin + 1,
          height: SG.dataWindow.yMax - SG.dataWindow.yMin + 1,
          data: new Float32Array(GG.byteArray)
        } : (wG.c.Error("Failed to decode EXR data: No byte array available."), {
          width: 0,
          height: 0,
          data: null
        })
      } catch (LG) {
        wG.c.Error("Failed to load EXR data: ", LG)
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
for (const GG in modules) Object.freeze(modules[GG]);