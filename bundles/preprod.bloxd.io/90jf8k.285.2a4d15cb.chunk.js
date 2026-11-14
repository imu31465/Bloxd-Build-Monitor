export const id = 285;
export const ids = [285];
export const modules = {
  39707: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      ReadExrDataAsync: () => iS,
      _ExrTextureLoader: () => RW
    });
    var CF = SF(37076),
      AF = SF(35650),
      uF = SF(38034);
    const hF = 4,
      bW = 4,
      dF = 1,
      PF = 2,
      RF = 8,
      iW = 65536,
      eF = iW >> 3,
      EF = 14,
      QF = 65537,
      rW = 1 << EF,
      gW = rW - 1,
      tW = 59,
      TF = 63,
      aW = 2 + TF - tW;
    var kW, qW;

    function VF(FF, WF) {
      const SF = new Uint8Array(FF);
      let CF = 0;
      for (; 0 != SF[WF.value + CF];) CF += 1;
      const AF = (new TextDecoder).decode(SF.slice(WF.value, WF.value + CF));
      return WF.value = WF.value + CF + 1, AF
    }

    function NF(FF, WF) {
      const SF = FF.getInt32(WF.value, !0);
      return WF.value += hF, SF
    }

    function DF(FF, WF) {
      const SF = FF.getUint32(WF.value, !0);
      return WF.value += hF, SF
    }

    function LF(FF, WF) {
      const SF = FF.getUint8(WF.value);
      return WF.value += dF, SF
    }

    function mW(FF, WF) {
      const SF = FF.getUint16(WF.value, !0);
      return WF.value += PF, SF
    }

    function OF(FF, WF) {
      const SF = FF[WF.value];
      return WF.value += dF, SF
    }

    function xW(FF, WF) {
      let SF;
      return SF = "getBigInt64" in DataView.prototype ? Number(FF.getBigInt64(WF.value, !0)) : FF.getUint32(WF.value + 4, !0) + Number(FF.getUint32(WF.value, !0) << 32), WF.value += RF, SF
    }

    function ZF(FF, WF) {
      const SF = FF.getFloat32(WF.value, !0);
      return WF.value += bW, SF
    }

    function oF(FF, WF) {
      return (0, uF.e)(mW(FF, WF))
    }

    function YF(FF, WF) {
      return (0, uF.h)((0, AF.Clamp)(ZF(FF, WF), -uF.g, uF.g))
    }

    function MF(FF, WF, SF, CF) {
      switch (SF) {
        case "string":
        case "stringvector":
        case "iccProfile":
          return function(FF, WF, SF) {
            const CF = (new TextDecoder).decode(new Uint8Array(FF).slice(WF.value, WF.value + SF));
            return WF.value = WF.value + SF, CF
          }(FF.buffer, WF, CF);
        case "chlist":
          return function(FF, WF, SF) {
            const CF = WF.value,
              AF = [];
            for (; WF.value < CF + SF - 1;) {
              const SF = VF(FF.buffer, WF),
                CF = NF(FF, WF),
                uF = LF(FF, WF);
              WF.value += 3;
              const hF = NF(FF, WF),
                bW = NF(FF, WF);
              AF.push({
                name: SF,
                pixelType: CF,
                pLinear: uF,
                xSampling: hF,
                ySampling: bW
              })
            }
            return WF.value += 1, AF
          }(FF, WF, CF);
        case "chromaticities":
          return function(FF, WF) {
            return {
              redX: ZF(FF, WF),
              redY: ZF(FF, WF),
              greenX: ZF(FF, WF),
              greenY: ZF(FF, WF),
              blueX: ZF(FF, WF),
              blueY: ZF(FF, WF),
              whiteX: ZF(FF, WF),
              whiteY: ZF(FF, WF)
            }
          }(FF, WF);
        case "compression":
          return function(FF, WF) {
            return LF(FF, WF)
          }(FF, WF);
        case "box2i":
          return function(FF, WF) {
            return {
              xMin: NF(FF, WF),
              yMin: NF(FF, WF),
              xMax: NF(FF, WF),
              yMax: NF(FF, WF)
            }
          }(FF, WF);
        case "lineOrder":
          return function(FF, WF) {
            const SF = LF(FF, WF);
            return qW[SF]
          }(FF, WF);
        case "float":
          return ZF(FF, WF);
        case "v2f":
          return function(FF, WF) {
            return [ZF(FF, WF), ZF(FF, WF)]
          }(FF, WF);
        case "v3f":
          return function(FF, WF) {
            return [ZF(FF, WF), ZF(FF, WF), ZF(FF, WF)]
          }(FF, WF);
        case "int":
          return NF(FF, WF);
        case "rational":
          return function(FF, WF) {
            return [NF(FF, WF), DF(FF, WF)]
          }(FF, WF);
        case "timecode":
          return function(FF, WF) {
            return [DF(FF, WF), DF(FF, WF)]
          }(FF, WF);
        case "preview":
          return WF.value += CF, "skipped";
        default:
          return void(WF.value += CF)
      }
    }

    function cW(FF) {
      for (let WF = 1; WF < FF.length; WF++) {
        const SF = FF[WF - 1] + FF[WF] - 128;
        FF[WF] = SF
      }
    }

    function GF(FF, WF) {
      let SF = 0,
        CF = Math.floor((FF.length + 1) / 2),
        AF = 0;
      const uF = FF.length - 1;
      for (; !(AF > uF) && (WF[AF++] = FF[SF++], !(AF > uF));) WF[AF++] = FF[CF++]
    }! function(FF) {
      FF[FF.NO_COMPRESSION = 0] = "NO_COMPRESSION", FF[FF.RLE_COMPRESSION = 1] = "RLE_COMPRESSION", FF[FF.ZIPS_COMPRESSION = 2] = "ZIPS_COMPRESSION", FF[FF.ZIP_COMPRESSION = 3] = "ZIP_COMPRESSION", FF[FF.PIZ_COMPRESSION = 4] = "PIZ_COMPRESSION", FF[FF.PXR24_COMPRESSION = 5] = "PXR24_COMPRESSION"
    }(kW || (kW = {})),
    function(FF) {
      FF[FF.INCREASING_Y = 0] = "INCREASING_Y", FF[FF.DECREASING_Y = 1] = "DECREASING_Y"
    }(qW || (qW = {}));
    const zW = 20000630;

    function IF(FF, WF) {
      if (FF.getUint32(0, !0) != zW) throw new Error("Incorrect OpenEXR format");
      const SF = FF.getUint8(4),
        AF = FF.getUint8(5),
        uF = {
          singleTile: !!(2 & AF),
          longName: !!(4 & AF),
          deepFormat: !!(8 & AF),
          multiPart: !!(16 & AF)
        };
      WF.value = 8;
      const hF = {};
      let bW = !0;
      for (; bW;) {
        const SF = VF(FF.buffer, WF);
        if (SF) {
          const AF = VF(FF.buffer, WF),
            uF = MF(FF, WF, AF, DF(FF, WF));
          void 0 === uF ? CF.b.Warn(`Unknown header attribute type ${AF}'.`) : hF[SF] = uF
        } else bW = !1
      }
      if (0 != (-5 & AF)) throw new Error("Unsupported file format");
      return {
        version: SF,
        spec: uF,
        ...hF
      }
    }
    const fF = 32768,
      yW = 65535;

    function sF(FF, WF, SF, CF, AF) {
      for (; SF < FF;) WF = WF << 8 | OF(CF, AF), SF += 8;
      return {
        l: WF >> (SF -= FF) & (1 << FF) - 1,
        c: WF,
        lc: SF
      }
    }

    function nF(FF, WF, SF, CF) {
      return {
        c: FF = FF << 8 | OF(SF, CF),
        lc: WF += 8
      }
    }

    function HF(FF, WF, SF, CF, AF, uF, hF, bW, dF) {
      if (FF == WF) {
        if (CF < 8) {
          const FF = nF(SF, CF, AF, uF);
          SF = FF.c, CF = FF.lc
        }
        let FF = SF >> (CF -= 8);
        if (FF = new Uint8Array([FF])[0], bW.value + FF > dF) return null;
        const WF = hF[bW.value - 1];
        for (; FF-- > 0;) hF[bW.value++] = WF
      } else {
        if (!(bW.value < dF)) return null;
        hF[bW.value++] = FF
      }
      return {
        c: SF,
        lc: CF
      }
    }
    const KF = new Array(59);

    function wF(FF, WF, SF, CF, AF, uF) {
      const hF = WF;
      let bW = 0,
        dF = 0;
      for (; CF <= AF; CF++) {
        if (hF.value - WF.value > SF) return;
        let PF = sF(6, bW, dF, FF, hF);
        const RF = PF.l;
        if (bW = PF.c, dF = PF.lc, uF[CF] = RF, RF == TF) {
          if (hF.value - WF.value > SF) throw new Error("Error in HufUnpackEncTable");
          PF = sF(8, bW, dF, FF, hF);
          let RF = PF.l + aW;
          if (bW = PF.c, dF = PF.lc, CF + RF > AF + 1) throw new Error("Error in HufUnpackEncTable");
          for (; RF--;) uF[CF++] = 0;
          CF--
        } else if (RF >= tW) {
          let FF = RF - tW + 2;
          if (CF + FF > AF + 1) throw new Error("Error in HufUnpackEncTable");
          for (; FF--;) uF[CF++] = 0;
          CF--
        }
      }! function(FF) {
        for (let SF = 0; SF <= 58; ++SF) KF[SF] = 0;
        for (let SF = 0; SF < QF; ++SF) KF[FF[SF]] += 1;
        let WF = 0;
        for (let SF = 58; SF > 0; --SF) {
          const FF = WF + KF[SF] >> 1;
          KF[SF] = WF, WF = FF
        }
        for (let SF = 0; SF < QF; ++SF) {
          const WF = FF[SF];
          WF > 0 && (FF[SF] = WF | KF[WF]++ << 6)
        }
      }(uF)
    }

    function XF(FF) {
      return 63 & FF
    }

    function UF(FF) {
      return FF >> 6
    }

    function BF(FF, WF, SF, CF, AF, uF) {
      const hF = SF.value,
        bW = DF(WF, SF),
        dF = DF(WF, SF);
      SF.value += 4;
      const PF = DF(WF, SF);
      if (SF.value += 4, bW < 0 || bW >= QF || dF < 0 || dF >= QF) throw new Error("Wrong HUF_ENCSIZE");
      const RF = new Array(QF),
        iW = new Array(rW);
      ! function(FF) {
        for (let WF = 0; WF < rW; WF++) FF[WF] = {}, FF[WF].len = 0, FF[WF].lit = 0, FF[WF].p = null
      }(iW);
      if (wF(FF, SF, CF - (SF.value - hF), bW, dF, RF), PF > 8 * (CF - (SF.value - hF))) throw new Error("Wrong hufUncompress");
      ! function(FF, WF, SF, CF) {
        for (; WF <= SF; WF++) {
          const SF = UF(FF[WF]),
            AF = XF(FF[WF]);
          if (SF >> AF) throw new Error("Invalid table entry");
          if (AF > EF) {
            const FF = CF[SF >> AF - EF];
            if (FF.len) throw new Error("Invalid table entry");
            if (FF.lit++, FF.p) {
              const WF = FF.p;
              FF.p = new Array(FF.lit);
              for (let SF = 0; SF < FF.lit - 1; ++SF) FF.p[SF] = WF[SF]
            } else FF.p = new Array(1);
            FF.p[FF.lit - 1] = WF
          } else if (AF) {
            let FF = 0;
            for (let uF = 1 << EF - AF; uF > 0; uF--) {
              const uF = CF[(SF << EF - AF) + FF];
              if (uF.len || uF.p) throw new Error("Invalid table entry");
              uF.len = AF, uF.lit = WF, FF++
            }
          }
        }
      }(RF, bW, dF, iW),
      function(FF, WF, SF, CF, AF, uF, hF, bW, dF) {
        let PF = 0,
          RF = 0;
        const iW = hF,
          eF = Math.trunc(CF.value + (AF + 7) / 8);
        for (; CF.value < eF;) {
          let AF = nF(PF, RF, SF, CF);
          for (PF = AF.c, RF = AF.lc; RF >= EF;) {
            const hF = WF[PF >> RF - EF & gW];
            if (hF.len) {
              RF -= hF.len;
              const FF = HF(hF.lit, uF, PF, RF, SF, CF, bW, dF, iW);
              FF && (PF = FF.c, RF = FF.lc)
            } else {
              if (!hF.p) throw new Error("hufDecode issues");
              let WF;
              for (WF = 0; WF < hF.lit; WF++) {
                const EF = XF(FF[hF.p[WF]]);
                for (; RF < EF && CF.value < eF;) AF = nF(PF, RF, SF, CF), PF = AF.c, RF = AF.lc;
                if (RF >= EF && UF(FF[hF.p[WF]]) == (PF >> RF - EF & (1 << EF) - 1)) {
                  RF -= EF;
                  const FF = HF(hF.p[WF], uF, PF, RF, SF, CF, bW, dF, iW);
                  FF && (PF = FF.c, RF = FF.lc);
                  break
                }
              }
              if (WF == hF.lit) throw new Error("HufDecode issues")
            }
          }
        }
        const QF = 8 - AF & 7;
        for (PF >>= QF, RF -= QF; RF > 0;) {
          const FF = WF[PF << EF - RF & gW];
          if (!FF.len) throw new Error("HufDecode issues");
          {
            RF -= FF.len;
            const WF = HF(FF.lit, uF, PF, RF, SF, CF, bW, dF, iW);
            WF && (PF = WF.c, RF = WF.lc)
          }
        }
      }(RF, iW, FF, SF, PF, dF, uF, AF, {
        value: 0
      })
    }

    function jW(FF) {
      return 65535 & FF
    }

    function vW(FF) {
      const WF = jW(FF);
      return WF > 32767 ? WF - 65536 : WF
    }

    function JF(FF, WF) {
      const SF = vW(FF),
        CF = vW(WF),
        AF = SF + (1 & CF) + (CF >> 1);
      return {
        a: AF,
        b: AF - CF
      }
    }

    function pF(FF, WF) {
      const SF = jW(FF),
        CF = jW(WF),
        AF = SF - (CF >> 1) & yW;
      return {
        a: CF + AF - fF & yW,
        b: AF
      }
    }

    function lF(FF, WF, SF, CF, AF, uF, hF) {
      const bW = hF < 16384,
        dF = SF > AF ? AF : SF;
      let PF, RF, iW = 1;
      for (; iW <= dF;) iW <<= 1;
      for (iW >>= 1, PF = iW, iW >>= 1; iW >= 1;) {
        RF = 0;
        const hF = RF + uF * (AF - PF),
          dF = uF * iW,
          eF = uF * PF,
          EF = CF * iW,
          QF = CF * PF;
        let rW, gW, tW, TF;
        for (; RF <= hF; RF += eF) {
          let AF = RF;
          const uF = RF + CF * (SF - PF);
          for (; AF <= uF; AF += QF) {
            const SF = AF + EF,
              CF = AF + dF,
              uF = CF + EF;
            if (bW) {
              let hF = JF(FF[AF + WF], FF[CF + WF]);
              rW = hF.a, tW = hF.b, hF = JF(FF[SF + WF], FF[uF + WF]), gW = hF.a, TF = hF.b, hF = JF(rW, gW), FF[AF + WF] = hF.a, FF[SF + WF] = hF.b, hF = JF(tW, TF), FF[CF + WF] = hF.a, FF[uF + WF] = hF.b
            } else {
              let hF = pF(FF[AF + WF], FF[CF + WF]);
              rW = hF.a, tW = hF.b, hF = pF(FF[SF + WF], FF[uF + WF]), gW = hF.a, TF = hF.b, hF = pF(rW, gW), FF[AF + WF] = hF.a, FF[SF + WF] = hF.b, hF = pF(tW, TF), FF[CF + WF] = hF.a, FF[uF + WF] = hF.b
            }
          }
          if (SF & iW) {
            const SF = AF + dF;
            let CF;
            CF = bW ? JF(FF[AF + WF], FF[SF + WF]) : pF(FF[AF + WF], FF[SF + WF]), rW = CF.a, FF[SF + WF] = CF.b, FF[AF + WF] = rW
          }
        }
        if (AF & iW) {
          let AF = RF;
          const uF = RF + CF * (SF - PF);
          for (; AF <= uF; AF += QF) {
            const SF = AF + EF;
            let CF;
            CF = bW ? JF(FF[AF + WF], FF[SF + WF]) : pF(FF[AF + WF], FF[SF + WF]), rW = CF.a, FF[SF + WF] = CF.b, FF[AF + WF] = rW
          }
        }
        PF = iW, iW >>= 1
      }
      return RF
    }

    function FW(FF) {
      return new DataView(FF.array.buffer, FF.offset.value, FF.size)
    }

    function WW(FF) {
      const WF = FF.viewer.buffer.slice(FF.offset.value, FF.offset.value + FF.size),
        SF = new Uint8Array(function(FF) {
          let WF = FF.byteLength;
          const SF = [];
          let CF = 0;
          const AF = new DataView(FF);
          for (; WF > 0;) {
            const FF = AF.getInt8(CF++);
            if (FF < 0) {
              const uF = -FF;
              WF -= uF + 1;
              for (let FF = 0; FF < uF; FF++) SF.push(AF.getUint8(CF++))
            } else {
              const uF = FF;
              WF -= 2;
              const hF = AF.getUint8(CF++);
              for (let FF = 0; FF < uF + 1; FF++) SF.push(hF)
            }
          }
          return SF
        }(WF)),
        CF = new Uint8Array(SF.length);
      return cW(SF), GF(SF, CF), new DataView(CF.buffer)
    }

    function SW(FF) {
      const WF = FF.array.slice(FF.offset.value, FF.offset.value + FF.size),
        SF = fflate.unzlibSync(WF),
        CF = new Uint8Array(SF.length);
      return cW(SF), GF(SF, CF), new DataView(CF.buffer)
    }

    function CW(FF) {
      const WF = FF.array.slice(FF.offset.value, FF.offset.value + FF.size),
        SF = fflate.unzlibSync(WF),
        CF = FF.lines * FF.channels * FF.width,
        AF = 1 == FF.type ? new Uint16Array(CF) : new Uint32Array(CF);
      let uF = 0,
        hF = 0;
      const bW = new Array(4);
      for (let dF = 0; dF < FF.lines; dF++)
        for (let WF = 0; WF < FF.channels; WF++) {
          let WF = 0;
          switch (FF.type) {
            case 1:
              bW[0] = uF, bW[1] = bW[0] + FF.width, uF = bW[1] + FF.width;
              for (let CF = 0; CF < FF.width; ++CF) {
                WF += SF[bW[0]++] << 8 | SF[bW[1]++], AF[hF] = WF, hF++
              }
              break;
            case 2:
              bW[0] = uF, bW[1] = bW[0] + FF.width, bW[2] = bW[1] + FF.width, uF = bW[2] + FF.width;
              for (let CF = 0; CF < FF.width; ++CF) {
                WF += SF[bW[0]++] << 24 | SF[bW[1]++] << 16 | SF[bW[2]++] << 8, AF[hF] = WF, hF++
              }
          }
        }
      return new DataView(AF.buffer)
    }

    function AW(FF) {
      const WF = FF.viewer,
        SF = {
          value: FF.offset.value
        },
        CF = new Uint16Array(FF.width * FF.scanlineBlockSize * (FF.channels * FF.type)),
        AF = new Uint8Array(eF);
      let uF = 0;
      const hF = new Array(FF.channels);
      for (let PF = 0; PF < FF.channels; PF++) hF[PF] = {}, hF[PF].start = uF, hF[PF].end = hF[PF].start, hF[PF].nx = FF.width, hF[PF].ny = FF.lines, hF[PF].size = FF.type, uF += hF[PF].nx * hF[PF].ny * hF[PF].size;
      const bW = mW(WF, SF),
        dF = mW(WF, SF);
      if (dF >= eF) throw new Error("Wrong PIZ_COMPRESSION BITMAP_SIZE");
      if (bW <= dF)
        for (let PF = 0; PF < dF - bW + 1; PF++) AF[PF + bW] = LF(WF, SF);
      const RF = new Uint16Array(iW),
        EF = function(FF, WF) {
          let SF = 0;
          for (let AF = 0; AF < iW; ++AF)(0 == AF || FF[AF >> 3] & 1 << (7 & AF)) && (WF[SF++] = AF);
          const CF = SF - 1;
          for (; SF < iW;) WF[SF++] = 0;
          return CF
        }(AF, RF),
        QF = DF(WF, SF);
      BF(FF.array, WF, SF, QF, CF, uF);
      for (let PF = 0; PF < FF.channels; ++PF) {
        const FF = hF[PF];
        for (let WF = 0; WF < hF[PF].size; ++WF) lF(CF, FF.start + WF, FF.nx, FF.size, FF.ny, FF.nx * FF.size, EF)
      }! function(FF, WF, SF) {
        for (let CF = 0; CF < SF; ++CF) WF[CF] = FF[WF[CF]]
      }(RF, CF, uF);
      let rW = 0;
      const gW = new Uint8Array(CF.buffer.byteLength);
      for (let iW = 0; iW < FF.lines; iW++)
        for (let WF = 0; WF < FF.channels; WF++) {
          const FF = hF[WF],
            SF = FF.nx * FF.size,
            AF = new Uint8Array(CF.buffer, FF.end * PF, SF * PF);
          gW.set(AF, rW), rW += SF * PF, FF.end += SF
        }
      return new DataView(gW.buffer)
    }
    var uW, hW = SF(38065);
    ! function(FF) {
      FF[FF.Float = 0] = "Float", FF[FF.HalfFloat = 1] = "HalfFloat"
    }(uW || (uW = {}));
    class bS {}
    async function dW(FF, WF, SF, CF) {
      const AF = {
        size: 0,
        viewer: WF,
        array: new Uint8Array(WF.buffer),
        offset: SF,
        width: FF.dataWindow.xMax - FF.dataWindow.xMin + 1,
        height: FF.dataWindow.yMax - FF.dataWindow.yMin + 1,
        channels: FF.channels.length,
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
      switch (FF.compression) {
        case kW.NO_COMPRESSION:
          AF.lines = 1, AF.uncompress = FW;
          break;
        case kW.RLE_COMPRESSION:
          AF.lines = 1, AF.uncompress = WW;
          break;
        case kW.ZIPS_COMPRESSION:
          AF.lines = 1, AF.uncompress = SW, await hW.h.LoadScriptAsync(bS.FFLATEUrl);
          break;
        case kW.ZIP_COMPRESSION:
          AF.lines = 16, AF.uncompress = SW, await hW.h.LoadScriptAsync(bS.FFLATEUrl);
          break;
        case kW.PIZ_COMPRESSION:
          AF.lines = 32, AF.uncompress = AW;
          break;
        case kW.PXR24_COMPRESSION:
          AF.lines = 16, AF.uncompress = CW, await hW.h.LoadScriptAsync(bS.FFLATEUrl);
          break;
        default:
          throw new Error(kW[FF.compression] + " is unsupported")
      }
      AF.scanlineBlockSize = AF.lines;
      const uF = {};
      for (const bW of FF.channels) switch (bW.name) {
        case "R":
        case "G":
        case "B":
        case "A":
        case "Y":
          uF[bW.name] = !0, AF.type = bW.pixelType
      }
      let hF = !1;
      if (uF.R && uF.G && uF.B && uF.A) AF.outputChannels = 4, AF.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (uF.R && uF.G && uF.B) hF = !0, AF.outputChannels = 4, AF.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (uF.R && uF.G) AF.outputChannels = 2, AF.decodeChannels = {
        R: 0,
        G: 1
      };
      else if (uF.R) AF.outputChannels = 1, AF.decodeChannels = {
        R: 0
      };
      else {
        if (!uF.Y) throw new Error("EXRLoader.parse: file contains unsupported data channels.");
        AF.outputChannels = 1, AF.decodeChannels = {
          Y: 0
        }
      }
      if (1 === AF.type) switch (CF) {
        case uW.Float:
          AF.getter = oF, AF.inputSize = PF;
          break;
        case uW.HalfFloat:
          AF.getter = mW, AF.inputSize = PF
      } else {
        if (2 !== AF.type) throw new Error("Unsupported pixelType " + AF.type + " for " + FF.compression);
        switch (CF) {
          case uW.Float:
            AF.getter = ZF, AF.inputSize = bW;
            break;
          case uW.HalfFloat:
            AF.getter = YF, AF.inputSize = bW
        }
      }
      AF.blockCount = AF.height / AF.scanlineBlockSize;
      for (let bW = 0; bW < AF.blockCount; bW++) xW(WF, SF);
      const dF = AF.width * AF.height * AF.outputChannels;
      switch (CF) {
        case uW.Float:
          AF.byteArray = new Float32Array(dF), AF.textureType = 1, hF && AF.byteArray.fill(1, 0, dF);
          break;
        case uW.HalfFloat:
          AF.byteArray = new Uint16Array(dF), AF.textureType = 2, hF && AF.byteArray.fill(15360, 0, dF);
          break;
        default:
          throw new Error("Unsupported type: " + CF)
      }
      let RF = 0;
      for (const bW of FF.channels) void 0 !== AF.decodeChannels[bW.name] && (AF.channelLineOffsets[bW.name] = RF * AF.width), RF += 2 * bW.pixelType;
      return AF.bytesPerLine = AF.width * RF, AF.outLineWidth = AF.width * AF.outputChannels, "INCREASING_Y" === FF.lineOrder ? AF.scanOrder = FF => FF : AF.scanOrder = FF => AF.height - 1 - FF, 4 == AF.outputChannels ? (AF.format = 5, AF.linearSpace = !0) : (AF.format = 6, AF.linearSpace = !1), AF
    }

    function PW(FF, WF, SF, CF) {
      const AF = {
        value: 0
      };
      for (let uF = 0; uF < FF.height / FF.scanlineBlockSize; uF++) {
        const hF = NF(SF, CF) - WF.dataWindow.yMin;
        FF.size = DF(SF, CF), FF.lines = hF + FF.scanlineBlockSize > FF.height ? FF.height - hF : FF.scanlineBlockSize;
        const bW = FF.size < FF.lines * FF.bytesPerLine && FF.uncompress ? FF.uncompress(FF) : FW(FF);
        CF.value += FF.size;
        for (let SF = 0; SF < FF.scanlineBlockSize; SF++) {
          const CF = uF * FF.scanlineBlockSize,
            hF = SF + FF.scanOrder(CF);
          if (hF >= FF.height) continue;
          const dF = SF * FF.bytesPerLine,
            PF = (FF.height - 1 - hF) * FF.outLineWidth;
          for (let SF = 0; SF < FF.channels; SF++) {
            const CF = WF.channels[SF].name,
              uF = FF.channelLineOffsets[CF],
              hF = FF.decodeChannels[CF];
            if (void 0 !== hF) {
              AF.value = dF + uF;
              for (let WF = 0; WF < FF.width; WF++) {
                const SF = PF + WF * FF.outputChannels + hF;
                FF.byteArray && (FF.byteArray[SF] = FF.getter(bW, AF))
              }
            }
          }
        }
      }
    }
    bS.DefaultOutputType = uW.HalfFloat, bS.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class RW {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(FF, WF, SF, CF, AF) {
        throw ".exr not supported in Cube."
      }
      loadData(FF, WF, SF) {
        const AF = new DataView(FF.buffer),
          uF = {
            value: 0
          },
          hF = IF(AF, uF);
        dW(hF, AF, uF, bS.DefaultOutputType).then((FF => {
          PW(FF, hF, AF, uF);
          const CF = hF.dataWindow.xMax - hF.dataWindow.xMin + 1,
            bW = hF.dataWindow.yMax - hF.dataWindow.yMin + 1;
          SF(CF, bW, WF.generateMipMaps, !1, (() => {
            const SF = WF.sC();
            WF.format = hF.format, WF.type = FF.textureType, WF.invertY = !1, WF._gammaSpace = !hF.linearSpace, FF.byteArray && SF._uploadDataToTextureDirectly(WF, FF.byteArray, 0, 0, void 0, !0)
          }))
        })).catch((FF => {
          CF.b.Error("Failed to load EXR texture: ", FF)
        }))
      }
    }
    async function iS(FF) {
      const WF = new DataView(FF),
        SF = {
          value: 0
        },
        AF = IF(WF, SF);
      try {
        const FF = await dW(AF, WF, SF, uW.Float);
        return PW(FF, AF, WF, SF), FF.byteArray ? {
          width: AF.dataWindow.xMax - AF.dataWindow.xMin + 1,
          height: AF.dataWindow.yMax - AF.dataWindow.yMin + 1,
          data: new Float32Array(FF.byteArray)
        } : (CF.b.Error("Failed to decode EXR data: No byte array available."), {
          width: 0,
          height: 0,
          data: null
        })
      } catch (uF) {
        CF.b.Error("Failed to load EXR data: ", uF)
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
for (const FF in modules) Object.freeze(modules[FF]);