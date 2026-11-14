export const id = 285;
export const ids = [285];
export const modules = {
  39321: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      ReadExrDataAsync: () => BR,
      _ExrTextureLoader: () => eR
    });
    var wW = MW(36721),
      CW = MW(35353),
      zR = MW(37659);
    const AW = 4,
      bR = 4,
      yR = 1,
      NW = 2,
      eW = 8,
      BW = 65536,
      tR = BW >> 3,
      TW = 14,
      gR = 65537,
      iR = 1 << TW,
      YW = iR - 1,
      JW = 59,
      PW = 63,
      IW = 2 + PW - JW;
    var oW, lW;

    function FW(WW, RW) {
      const MW = new Uint8Array(WW);
      let wW = 0;
      for (; 0 != MW[RW.value + wW];) wW += 1;
      const CW = (new TextDecoder).decode(MW.slice(RW.value, RW.value + wW));
      return RW.value = RW.value + wW + 1, CW
    }

    function fW(WW, RW) {
      const MW = WW.getInt32(RW.value, !0);
      return RW.value += AW, MW
    }

    function QW(WW, RW) {
      const MW = WW.getUint32(RW.value, !0);
      return RW.value += AW, MW
    }

    function rR(WW, RW) {
      const MW = WW.getUint8(RW.value);
      return RW.value += yR, MW
    }

    function cR(WW, RW) {
      const MW = WW.getUint16(RW.value, !0);
      return RW.value += NW, MW
    }

    function XW(WW, RW) {
      const MW = WW[RW.value];
      return RW.value += yR, MW
    }

    function jR(WW, RW) {
      let MW;
      return MW = "getBigInt64" in DataView.prototype ? Number(WW.getBigInt64(RW.value, !0)) : WW.getUint32(RW.value + 4, !0) + Number(WW.getUint32(RW.value, !0) << 32), RW.value += eW, MW
    }

    function kR(WW, RW) {
      const MW = WW.getFloat32(RW.value, !0);
      return RW.value += bR, MW
    }

    function aR(WW, RW) {
      return (0, zR.e)(cR(WW, RW))
    }

    function sW(WW, RW) {
      return (0, zR.j)((0, CW.Clamp)(kR(WW, RW), -zR.i, zR.i))
    }

    function dW(WW, RW, MW, wW) {
      switch (MW) {
        case "string":
        case "stringvector":
        case "iccProfile":
          return function(WW, RW, MW) {
            const wW = (new TextDecoder).decode(new Uint8Array(WW).slice(RW.value, RW.value + MW));
            return RW.value = RW.value + MW, wW
          }(WW.buffer, RW, wW);
        case "chlist":
          return function(WW, RW, MW) {
            const wW = RW.value,
              CW = [];
            for (; RW.value < wW + MW - 1;) {
              const MW = FW(WW.buffer, RW),
                wW = fW(WW, RW),
                zR = rR(WW, RW);
              RW.value += 3;
              const AW = fW(WW, RW),
                bR = fW(WW, RW);
              CW.push({
                name: MW,
                pixelType: wW,
                pLinear: zR,
                xSampling: AW,
                ySampling: bR
              })
            }
            return RW.value += 1, CW
          }(WW, RW, wW);
        case "chromaticities":
          return function(WW, RW) {
            return {
              redX: kR(WW, RW),
              redY: kR(WW, RW),
              greenX: kR(WW, RW),
              greenY: kR(WW, RW),
              blueX: kR(WW, RW),
              blueY: kR(WW, RW),
              whiteX: kR(WW, RW),
              whiteY: kR(WW, RW)
            }
          }(WW, RW);
        case "compression":
          return function(WW, RW) {
            return rR(WW, RW)
          }(WW, RW);
        case "box2i":
          return function(WW, RW) {
            return {
              xMin: fW(WW, RW),
              yMin: fW(WW, RW),
              xMax: fW(WW, RW),
              yMax: fW(WW, RW)
            }
          }(WW, RW);
        case "lineOrder":
          return function(WW, RW) {
            const MW = rR(WW, RW);
            return lW[MW]
          }(WW, RW);
        case "float":
          return kR(WW, RW);
        case "v2f":
          return function(WW, RW) {
            return [kR(WW, RW), kR(WW, RW)]
          }(WW, RW);
        case "v3f":
          return function(WW, RW) {
            return [kR(WW, RW), kR(WW, RW), kR(WW, RW)]
          }(WW, RW);
        case "int":
          return fW(WW, RW);
        case "rational":
          return function(WW, RW) {
            return [fW(WW, RW), QW(WW, RW)]
          }(WW, RW);
        case "timecode":
          return function(WW, RW) {
            return [QW(WW, RW), QW(WW, RW)]
          }(WW, RW);
        case "preview":
          return RW.value += wW, "skipped";
        default:
          return void(RW.value += wW)
      }
    }

    function pW(WW) {
      for (let RW = 1; RW < WW.length; RW++) {
        const MW = WW[RW - 1] + WW[RW] - 128;
        WW[RW] = MW
      }
    }

    function hW(WW, RW) {
      let MW = 0,
        wW = Math.floor((WW.length + 1) / 2),
        CW = 0;
      const zR = WW.length - 1;
      for (; !(CW > zR) && (RW[CW++] = WW[MW++], !(CW > zR));) RW[CW++] = WW[wW++]
    }! function(WW) {
      WW[WW.NO_COMPRESSION = 0] = "NO_COMPRESSION", WW[WW.RLE_COMPRESSION = 1] = "RLE_COMPRESSION", WW[WW.ZIPS_COMPRESSION = 2] = "ZIPS_COMPRESSION", WW[WW.ZIP_COMPRESSION = 3] = "ZIP_COMPRESSION", WW[WW.PIZ_COMPRESSION = 4] = "PIZ_COMPRESSION", WW[WW.PXR24_COMPRESSION = 5] = "PXR24_COMPRESSION"
    }(oW || (oW = {})),
    function(WW) {
      WW[WW.INCREASING_Y = 0] = "INCREASING_Y", WW[WW.DECREASING_Y = 1] = "DECREASING_Y"
    }(lW || (lW = {}));
    const UW = 20000630;

    function EW(WW, RW) {
      if (WW.getUint32(0, !0) != UW) throw new Error("Incorrect OpenEXR format");
      const MW = WW.getUint8(4),
        CW = WW.getUint8(5),
        zR = {
          singleTile: !!(2 & CW),
          longName: !!(4 & CW),
          deepFormat: !!(8 & CW),
          multiPart: !!(16 & CW)
        };
      RW.value = 8;
      const AW = {};
      let bR = !0;
      for (; bR;) {
        const MW = FW(WW.buffer, RW);
        if (MW) {
          const CW = FW(WW.buffer, RW),
            zR = dW(WW, RW, CW, QW(WW, RW));
          void 0 === zR ? wW.b.Warn(`Unknown header attribute type ${CW}'.`) : AW[MW] = zR
        } else bR = !1
      }
      if (0 != (-5 & CW)) throw new Error("Unsupported file format");
      return {
        version: MW,
        spec: zR,
        ...AW
      }
    }
    const VW = 32768,
      mR = 65535;

    function xR(WW, RW, MW, wW, CW) {
      for (; MW < WW;) RW = RW << 8 | XW(wW, CW), MW += 8;
      return {
        l: RW >> (MW -= WW) & (1 << WW) - 1,
        c: RW,
        lc: MW
      }
    }

    function vR(WW, RW, MW, wW) {
      return {
        c: WW = WW << 8 | XW(MW, wW),
        lc: RW += 8
      }
    }

    function KW(WW, RW, MW, wW, CW, zR, AW, bR, yR) {
      if (WW == RW) {
        if (wW < 8) {
          const WW = vR(MW, wW, CW, zR);
          MW = WW.c, wW = WW.lc
        }
        let WW = MW >> (wW -= 8);
        if (WW = new Uint8Array([WW])[0], bR.value + WW > yR) return null;
        const RW = AW[bR.value - 1];
        for (; WW-- > 0;) AW[bR.value++] = RW
      } else {
        if (!(bR.value < yR)) return null;
        AW[bR.value++] = WW
      }
      return {
        c: MW,
        lc: wW
      }
    }
    const uW = new Array(59);

    function OW(WW, RW, MW, wW, CW, zR) {
      const AW = RW;
      let bR = 0,
        yR = 0;
      for (; wW <= CW; wW++) {
        if (AW.value - RW.value > MW) return;
        let NW = xR(6, bR, yR, WW, AW);
        const eW = NW.l;
        if (bR = NW.c, yR = NW.lc, zR[wW] = eW, eW == PW) {
          if (AW.value - RW.value > MW) throw new Error("Error in HufUnpackEncTable");
          NW = xR(8, bR, yR, WW, AW);
          let eW = NW.l + IW;
          if (bR = NW.c, yR = NW.lc, wW + eW > CW + 1) throw new Error("Error in HufUnpackEncTable");
          for (; eW--;) zR[wW++] = 0;
          wW--
        } else if (eW >= JW) {
          let WW = eW - JW + 2;
          if (wW + WW > CW + 1) throw new Error("Error in HufUnpackEncTable");
          for (; WW--;) zR[wW++] = 0;
          wW--
        }
      }! function(WW) {
        for (let MW = 0; MW <= 58; ++MW) uW[MW] = 0;
        for (let MW = 0; MW < gR; ++MW) uW[WW[MW]] += 1;
        let RW = 0;
        for (let MW = 58; MW > 0; --MW) {
          const WW = RW + uW[MW] >> 1;
          uW[MW] = RW, RW = WW
        }
        for (let MW = 0; MW < gR; ++MW) {
          const RW = WW[MW];
          RW > 0 && (WW[MW] = RW | uW[RW]++ << 6)
        }
      }(zR)
    }

    function nW(WW) {
      return 63 & WW
    }

    function GW(WW) {
      return WW >> 6
    }

    function LW(WW, RW, MW, wW, CW, zR) {
      const AW = MW.value,
        bR = QW(RW, MW),
        yR = QW(RW, MW);
      MW.value += 4;
      const NW = QW(RW, MW);
      if (MW.value += 4, bR < 0 || bR >= gR || yR < 0 || yR >= gR) throw new Error("Wrong HUF_ENCSIZE");
      const eW = new Array(gR),
        BW = new Array(iR);
      ! function(WW) {
        for (let RW = 0; RW < iR; RW++) WW[RW] = {}, WW[RW].len = 0, WW[RW].lit = 0, WW[RW].p = null
      }(BW);
      if (OW(WW, MW, wW - (MW.value - AW), bR, yR, eW), NW > 8 * (wW - (MW.value - AW))) throw new Error("Wrong hufUncompress");
      ! function(WW, RW, MW, wW) {
        for (; RW <= MW; RW++) {
          const MW = GW(WW[RW]),
            CW = nW(WW[RW]);
          if (MW >> CW) throw new Error("Invalid table entry");
          if (CW > TW) {
            const WW = wW[MW >> CW - TW];
            if (WW.len) throw new Error("Invalid table entry");
            if (WW.lit++, WW.p) {
              const RW = WW.p;
              WW.p = new Array(WW.lit);
              for (let MW = 0; MW < WW.lit - 1; ++MW) WW.p[MW] = RW[MW]
            } else WW.p = new Array(1);
            WW.p[WW.lit - 1] = RW
          } else if (CW) {
            let WW = 0;
            for (let zR = 1 << TW - CW; zR > 0; zR--) {
              const zR = wW[(MW << TW - CW) + WW];
              if (zR.len || zR.p) throw new Error("Invalid table entry");
              zR.len = CW, zR.lit = RW, WW++
            }
          }
        }
      }(eW, bR, yR, BW),
      function(WW, RW, MW, wW, CW, zR, AW, bR, yR) {
        let NW = 0,
          eW = 0;
        const BW = AW,
          tR = Math.trunc(wW.value + (CW + 7) / 8);
        for (; wW.value < tR;) {
          let CW = vR(NW, eW, MW, wW);
          for (NW = CW.c, eW = CW.lc; eW >= TW;) {
            const AW = RW[NW >> eW - TW & YW];
            if (AW.len) {
              eW -= AW.len;
              const WW = KW(AW.lit, zR, NW, eW, MW, wW, bR, yR, BW);
              WW && (NW = WW.c, eW = WW.lc)
            } else {
              if (!AW.p) throw new Error("hufDecode issues");
              let RW;
              for (RW = 0; RW < AW.lit; RW++) {
                const TW = nW(WW[AW.p[RW]]);
                for (; eW < TW && wW.value < tR;) CW = vR(NW, eW, MW, wW), NW = CW.c, eW = CW.lc;
                if (eW >= TW && GW(WW[AW.p[RW]]) == (NW >> eW - TW & (1 << TW) - 1)) {
                  eW -= TW;
                  const WW = KW(AW.p[RW], zR, NW, eW, MW, wW, bR, yR, BW);
                  WW && (NW = WW.c, eW = WW.lc);
                  break
                }
              }
              if (RW == AW.lit) throw new Error("HufDecode issues")
            }
          }
        }
        const gR = 8 - CW & 7;
        for (NW >>= gR, eW -= gR; eW > 0;) {
          const WW = RW[NW << TW - eW & YW];
          if (!WW.len) throw new Error("HufDecode issues");
          {
            eW -= WW.len;
            const RW = KW(WW.lit, zR, NW, eW, MW, wW, bR, yR, BW);
            RW && (NW = RW.c, eW = RW.lc)
          }
        }
      }(eW, BW, WW, MW, NW, yR, zR, CW, {
        value: 0
      })
    }

    function HW(WW) {
      return 65535 & WW
    }

    function DW(WW) {
      const RW = HW(WW);
      return RW > 32767 ? RW - 65536 : RW
    }

    function qR(WW, RW) {
      const MW = DW(WW),
        wW = DW(RW),
        CW = MW + (1 & wW) + (wW >> 1);
      return {
        a: CW,
        b: CW - wW
      }
    }

    function ZW(WW, RW) {
      const MW = HW(WW),
        wW = HW(RW),
        CW = MW - (wW >> 1) & mR;
      return {
        a: wW + CW - VW & mR,
        b: CW
      }
    }

    function SW(WW, RW, MW, wW, CW, zR, AW) {
      const bR = AW < 16384,
        yR = MW > CW ? CW : MW;
      let NW, eW, BW = 1;
      for (; BW <= yR;) BW <<= 1;
      for (BW >>= 1, NW = BW, BW >>= 1; BW >= 1;) {
        eW = 0;
        const AW = eW + zR * (CW - NW),
          yR = zR * BW,
          tR = zR * NW,
          TW = wW * BW,
          gR = wW * NW;
        let iR, YW, JW, PW;
        for (; eW <= AW; eW += tR) {
          let CW = eW;
          const zR = eW + wW * (MW - NW);
          for (; CW <= zR; CW += gR) {
            const MW = CW + TW,
              wW = CW + yR,
              zR = wW + TW;
            if (bR) {
              let AW = qR(WW[CW + RW], WW[wW + RW]);
              iR = AW.a, JW = AW.b, AW = qR(WW[MW + RW], WW[zR + RW]), YW = AW.a, PW = AW.b, AW = qR(iR, YW), WW[CW + RW] = AW.a, WW[MW + RW] = AW.b, AW = qR(JW, PW), WW[wW + RW] = AW.a, WW[zR + RW] = AW.b
            } else {
              let AW = ZW(WW[CW + RW], WW[wW + RW]);
              iR = AW.a, JW = AW.b, AW = ZW(WW[MW + RW], WW[zR + RW]), YW = AW.a, PW = AW.b, AW = ZW(iR, YW), WW[CW + RW] = AW.a, WW[MW + RW] = AW.b, AW = ZW(JW, PW), WW[wW + RW] = AW.a, WW[zR + RW] = AW.b
            }
          }
          if (MW & BW) {
            const MW = CW + yR;
            let wW;
            wW = bR ? qR(WW[CW + RW], WW[MW + RW]) : ZW(WW[CW + RW], WW[MW + RW]), iR = wW.a, WW[MW + RW] = wW.b, WW[CW + RW] = iR
          }
        }
        if (CW & BW) {
          let CW = eW;
          const zR = eW + wW * (MW - NW);
          for (; CW <= zR; CW += gR) {
            const MW = CW + TW;
            let wW;
            wW = bR ? qR(WW[CW + RW], WW[MW + RW]) : ZW(WW[CW + RW], WW[MW + RW]), iR = wW.a, WW[MW + RW] = wW.b, WW[CW + RW] = iR
          }
        }
        NW = BW, BW >>= 1
      }
      return eW
    }

    function WR(WW) {
      return new DataView(WW.array.buffer, WW.offset.value, WW.size)
    }

    function RR(WW) {
      const RW = WW.viewer.buffer.slice(WW.offset.value, WW.offset.value + WW.size),
        MW = new Uint8Array(function(WW) {
          let RW = WW.byteLength;
          const MW = [];
          let wW = 0;
          const CW = new DataView(WW);
          for (; RW > 0;) {
            const WW = CW.getInt8(wW++);
            if (WW < 0) {
              const zR = -WW;
              RW -= zR + 1;
              for (let WW = 0; WW < zR; WW++) MW.push(CW.getUint8(wW++))
            } else {
              const zR = WW;
              RW -= 2;
              const AW = CW.getUint8(wW++);
              for (let WW = 0; WW < zR + 1; WW++) MW.push(AW)
            }
          }
          return MW
        }(RW)),
        wW = new Uint8Array(MW.length);
      return pW(MW), hW(MW, wW), new DataView(wW.buffer)
    }

    function MR(WW) {
      const RW = WW.array.slice(WW.offset.value, WW.offset.value + WW.size),
        MW = fflate.unzlibSync(RW),
        wW = new Uint8Array(MW.length);
      return pW(MW), hW(MW, wW), new DataView(wW.buffer)
    }

    function wR(WW) {
      const RW = WW.array.slice(WW.offset.value, WW.offset.value + WW.size),
        MW = fflate.unzlibSync(RW),
        wW = WW.lines * WW.channels * WW.width,
        CW = 1 == WW.type ? new Uint16Array(wW) : new Uint32Array(wW);
      let zR = 0,
        AW = 0;
      const bR = new Array(4);
      for (let yR = 0; yR < WW.lines; yR++)
        for (let RW = 0; RW < WW.channels; RW++) {
          let RW = 0;
          switch (WW.type) {
            case 1:
              bR[0] = zR, bR[1] = bR[0] + WW.width, zR = bR[1] + WW.width;
              for (let wW = 0; wW < WW.width; ++wW) {
                RW += MW[bR[0]++] << 8 | MW[bR[1]++], CW[AW] = RW, AW++
              }
              break;
            case 2:
              bR[0] = zR, bR[1] = bR[0] + WW.width, bR[2] = bR[1] + WW.width, zR = bR[2] + WW.width;
              for (let wW = 0; wW < WW.width; ++wW) {
                RW += MW[bR[0]++] << 24 | MW[bR[1]++] << 16 | MW[bR[2]++] << 8, CW[AW] = RW, AW++
              }
          }
        }
      return new DataView(CW.buffer)
    }

    function CR(WW) {
      const RW = WW.viewer,
        MW = {
          value: WW.offset.value
        },
        wW = new Uint16Array(WW.width * WW.scanlineBlockSize * (WW.channels * WW.type)),
        CW = new Uint8Array(tR);
      let zR = 0;
      const AW = new Array(WW.channels);
      for (let NW = 0; NW < WW.channels; NW++) AW[NW] = {}, AW[NW].start = zR, AW[NW].end = AW[NW].start, AW[NW].nx = WW.width, AW[NW].ny = WW.lines, AW[NW].size = WW.type, zR += AW[NW].nx * AW[NW].ny * AW[NW].size;
      const bR = cR(RW, MW),
        yR = cR(RW, MW);
      if (yR >= tR) throw new Error("Wrong PIZ_COMPRESSION BITMAP_SIZE");
      if (bR <= yR)
        for (let NW = 0; NW < yR - bR + 1; NW++) CW[NW + bR] = rR(RW, MW);
      const eW = new Uint16Array(BW),
        TW = function(WW, RW) {
          let MW = 0;
          for (let CW = 0; CW < BW; ++CW)(0 == CW || WW[CW >> 3] & 1 << (7 & CW)) && (RW[MW++] = CW);
          const wW = MW - 1;
          for (; MW < BW;) RW[MW++] = 0;
          return wW
        }(CW, eW),
        gR = QW(RW, MW);
      LW(WW.array, RW, MW, gR, wW, zR);
      for (let NW = 0; NW < WW.channels; ++NW) {
        const WW = AW[NW];
        for (let RW = 0; RW < AW[NW].size; ++RW) SW(wW, WW.start + RW, WW.nx, WW.size, WW.ny, WW.nx * WW.size, TW)
      }! function(WW, RW, MW) {
        for (let wW = 0; wW < MW; ++wW) RW[wW] = WW[RW[wW]]
      }(eW, wW, zR);
      let iR = 0;
      const YW = new Uint8Array(wW.buffer.byteLength);
      for (let BW = 0; BW < WW.lines; BW++)
        for (let RW = 0; RW < WW.channels; RW++) {
          const WW = AW[RW],
            MW = WW.nx * WW.size,
            CW = new Uint8Array(wW.buffer, WW.end * NW, MW * NW);
          YW.set(CW, iR), iR += MW * NW, WW.end += MW
        }
      return new DataView(YW.buffer)
    }
    var zM, AR = MW(37685);
    ! function(WW) {
      WW[WW.Float = 0] = "Float", WW[WW.HalfFloat = 1] = "HalfFloat"
    }(zM || (zM = {}));
    class bM {}
    async function yM(WW, RW, MW, wW) {
      const CW = {
        size: 0,
        viewer: RW,
        array: new Uint8Array(RW.buffer),
        offset: MW,
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
        case oW.NO_COMPRESSION:
          CW.lines = 1, CW.uncompress = WR;
          break;
        case oW.RLE_COMPRESSION:
          CW.lines = 1, CW.uncompress = RR;
          break;
        case oW.ZIPS_COMPRESSION:
          CW.lines = 1, CW.uncompress = MR, await AR.j.LoadScriptAsync(bM.FFLATEUrl);
          break;
        case oW.ZIP_COMPRESSION:
          CW.lines = 16, CW.uncompress = MR, await AR.j.LoadScriptAsync(bM.FFLATEUrl);
          break;
        case oW.PIZ_COMPRESSION:
          CW.lines = 32, CW.uncompress = CR;
          break;
        case oW.PXR24_COMPRESSION:
          CW.lines = 16, CW.uncompress = wR, await AR.j.LoadScriptAsync(bM.FFLATEUrl);
          break;
        default:
          throw new Error(oW[WW.compression] + " is unsupported")
      }
      CW.scanlineBlockSize = CW.lines;
      const zR = {};
      for (const bR of WW.channels) switch (bR.name) {
        case "R":
        case "G":
        case "B":
        case "A":
        case "Y":
          zR[bR.name] = !0, CW.type = bR.pixelType
      }
      let AW = !1;
      if (zR.R && zR.G && zR.B && zR.A) CW.outputChannels = 4, CW.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (zR.R && zR.G && zR.B) AW = !0, CW.outputChannels = 4, CW.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (zR.R && zR.G) CW.outputChannels = 2, CW.decodeChannels = {
        R: 0,
        G: 1
      };
      else if (zR.R) CW.outputChannels = 1, CW.decodeChannels = {
        R: 0
      };
      else {
        if (!zR.Y) throw new Error("EXRLoader.parse: file contains unsupported data channels.");
        CW.outputChannels = 1, CW.decodeChannels = {
          Y: 0
        }
      }
      if (1 === CW.type) switch (wW) {
        case zM.Float:
          CW.getter = aR, CW.inputSize = NW;
          break;
        case zM.HalfFloat:
          CW.getter = cR, CW.inputSize = NW
      } else {
        if (2 !== CW.type) throw new Error("Unsupported pixelType " + CW.type + " for " + WW.compression);
        switch (wW) {
          case zM.Float:
            CW.getter = kR, CW.inputSize = bR;
            break;
          case zM.HalfFloat:
            CW.getter = sW, CW.inputSize = bR
        }
      }
      CW.blockCount = CW.height / CW.scanlineBlockSize;
      for (let bR = 0; bR < CW.blockCount; bR++) jR(RW, MW);
      const yR = CW.width * CW.height * CW.outputChannels;
      switch (wW) {
        case zM.Float:
          CW.byteArray = new Float32Array(yR), CW.textureType = 1, AW && CW.byteArray.fill(1, 0, yR);
          break;
        case zM.HalfFloat:
          CW.byteArray = new Uint16Array(yR), CW.textureType = 2, AW && CW.byteArray.fill(15360, 0, yR);
          break;
        default:
          throw new Error("Unsupported type: " + wW)
      }
      let eW = 0;
      for (const bR of WW.channels) void 0 !== CW.decodeChannels[bR.name] && (CW.channelLineOffsets[bR.name] = eW * CW.width), eW += 2 * bR.pixelType;
      return CW.bytesPerLine = CW.width * eW, CW.outLineWidth = CW.width * CW.outputChannels, "INCREASING_Y" === WW.lineOrder ? CW.scanOrder = WW => WW : CW.scanOrder = WW => CW.height - 1 - WW, 4 == CW.outputChannels ? (CW.format = 5, CW.linearSpace = !0) : (CW.format = 6, CW.linearSpace = !1), CW
    }

    function NR(WW, RW, MW, wW) {
      const CW = {
        value: 0
      };
      for (let zR = 0; zR < WW.height / WW.scanlineBlockSize; zR++) {
        const AW = fW(MW, wW) - RW.dataWindow.yMin;
        WW.size = QW(MW, wW), WW.lines = AW + WW.scanlineBlockSize > WW.height ? WW.height - AW : WW.scanlineBlockSize;
        const bR = WW.size < WW.lines * WW.bytesPerLine && WW.uncompress ? WW.uncompress(WW) : WR(WW);
        wW.value += WW.size;
        for (let MW = 0; MW < WW.scanlineBlockSize; MW++) {
          const wW = zR * WW.scanlineBlockSize,
            AW = MW + WW.scanOrder(wW);
          if (AW >= WW.height) continue;
          const yR = MW * WW.bytesPerLine,
            NW = (WW.height - 1 - AW) * WW.outLineWidth;
          for (let MW = 0; MW < WW.channels; MW++) {
            const wW = RW.channels[MW].name,
              zR = WW.channelLineOffsets[wW],
              AW = WW.decodeChannels[wW];
            if (void 0 !== AW) {
              CW.value = yR + zR;
              for (let RW = 0; RW < WW.width; RW++) {
                const MW = NW + RW * WW.outputChannels + AW;
                WW.byteArray && (WW.byteArray[MW] = WW.getter(bR, CW))
              }
            }
          }
        }
      }
    }
    bM.DefaultOutputType = zM.HalfFloat, bM.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class eR {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(WW, RW, MW, wW, CW) {
        throw ".exr not supported in Cube."
      }
      loadData(WW, RW, MW) {
        const CW = new DataView(WW.buffer),
          zR = {
            value: 0
          },
          AW = EW(CW, zR);
        yM(AW, CW, zR, bM.DefaultOutputType).then((WW => {
          NR(WW, AW, CW, zR);
          const wW = AW.dataWindow.xMax - AW.dataWindow.xMin + 1,
            bR = AW.dataWindow.yMax - AW.dataWindow.yMin + 1;
          MW(wW, bR, RW.generateMipMaps, !1, (() => {
            const MW = RW.mC();
            RW.format = AW.format, RW.type = WW.textureType, RW.invertY = !1, RW._gammaSpace = !AW.linearSpace, WW.byteArray && MW._uploadDataToTextureDirectly(RW, WW.byteArray, 0, 0, void 0, !0)
          }))
        })).catch((WW => {
          wW.b.Error("Failed to load EXR texture: ", WW)
        }))
      }
    }
    async function BR(WW) {
      const RW = new DataView(WW),
        MW = {
          value: 0
        },
        CW = EW(RW, MW);
      try {
        const WW = await yM(CW, RW, MW, zM.Float);
        return NR(WW, CW, RW, MW), WW.byteArray ? {
          width: CW.dataWindow.xMax - CW.dataWindow.xMin + 1,
          height: CW.dataWindow.yMax - CW.dataWindow.yMin + 1,
          data: new Float32Array(WW.byteArray)
        } : (wW.b.Error("Failed to decode EXR data: No byte array available."), {
          width: 0,
          height: 0,
          data: null
        })
      } catch (zR) {
        wW.b.Error("Failed to load EXR data: ", zR)
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