export const id = 624;
export const ids = [624];
export const modules = {
  44511: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      ReadExrDataAsync: () => Lr,
      _ExrTextureLoader: () => zr
    });
    var OM = iM(39711),
      SM = iM(38074),
      jM = iM(41176);
    const aM = 4,
      PM = 4,
      nM = 1,
      QM = 2,
      zM = 8,
      LM = 65536,
      mM = LM >> 3,
      HM = 14,
      hM = 65537,
      JM = 1 << HM,
      dM = JM - 1,
      yM = 59,
      lM = 63,
      EM = 2 + lM - yM;
    var UM, GM;

    function CM(MM, rM) {
      const iM = new Uint8Array(MM);
      let OM = 0;
      for (; 0 != iM[rM.value + OM];) OM += 1;
      const SM = (new TextDecoder).decode(iM.slice(rM.value, rM.value + OM));
      return rM.value = rM.value + OM + 1, SM
    }

    function eM(MM, rM) {
      const iM = MM.getInt32(rM.value, !0);
      return rM.value += aM, iM
    }

    function bM(MM, rM) {
      const iM = MM.getUint32(rM.value, !0);
      return rM.value += aM, iM
    }

    function wM(MM, rM) {
      const iM = MM.getUint8(rM.value);
      return rM.value += nM, iM
    }

    function tM(MM, rM) {
      const iM = MM.getUint16(rM.value, !0);
      return rM.value += QM, iM
    }

    function gM(MM, rM) {
      const iM = MM[rM.value];
      return rM.value += nM, iM
    }

    function uM(MM, rM) {
      let iM;
      return iM = "getBigInt64" in DataView.prototype ? Number(MM.getBigInt64(rM.value, !0)) : MM.getUint32(rM.value + 4, !0) + Number(MM.getUint32(rM.value, !0) << 32), rM.value += zM, iM
    }

    function RM(MM, rM) {
      const iM = MM.getFloat32(rM.value, !0);
      return rM.value += PM, iM
    }

    function pM(MM, rM) {
      return (0, jM.c)(tM(MM, rM))
    }

    function WM(MM, rM) {
      return (0, jM.g)((0, SM.Clamp)(RM(MM, rM), -jM.e, jM.e))
    }

    function sM(MM, rM, iM, OM) {
      switch (iM) {
        case "string":
        case "stringvector":
        case "iccProfile":
          return function(MM, rM, iM) {
            const OM = (new TextDecoder).decode(new Uint8Array(MM).slice(rM.value, rM.value + iM));
            return rM.value = rM.value + iM, OM
          }(MM.buffer, rM, OM);
        case "chlist":
          return function(MM, rM, iM) {
            const OM = rM.value,
              SM = [];
            for (; rM.value < OM + iM - 1;) {
              const iM = CM(MM.buffer, rM),
                OM = eM(MM, rM),
                jM = wM(MM, rM);
              rM.value += 3;
              const aM = eM(MM, rM),
                PM = eM(MM, rM);
              SM.push({
                name: iM,
                pixelType: OM,
                pLinear: jM,
                xSampling: aM,
                ySampling: PM
              })
            }
            return rM.value += 1, SM
          }(MM, rM, OM);
        case "chromaticities":
          return function(MM, rM) {
            return {
              redX: RM(MM, rM),
              redY: RM(MM, rM),
              greenX: RM(MM, rM),
              greenY: RM(MM, rM),
              blueX: RM(MM, rM),
              blueY: RM(MM, rM),
              whiteX: RM(MM, rM),
              whiteY: RM(MM, rM)
            }
          }(MM, rM);
        case "compression":
          return function(MM, rM) {
            return wM(MM, rM)
          }(MM, rM);
        case "box2i":
          return function(MM, rM) {
            return {
              xMin: eM(MM, rM),
              yMin: eM(MM, rM),
              xMax: eM(MM, rM),
              yMax: eM(MM, rM)
            }
          }(MM, rM);
        case "lineOrder":
          return function(MM, rM) {
            const iM = wM(MM, rM);
            return GM[iM]
          }(MM, rM);
        case "float":
          return RM(MM, rM);
        case "v2f":
          return function(MM, rM) {
            return [RM(MM, rM), RM(MM, rM)]
          }(MM, rM);
        case "v3f":
          return function(MM, rM) {
            return [RM(MM, rM), RM(MM, rM), RM(MM, rM)]
          }(MM, rM);
        case "int":
          return eM(MM, rM);
        case "rational":
          return function(MM, rM) {
            return [eM(MM, rM), bM(MM, rM)]
          }(MM, rM);
        case "timecode":
          return function(MM, rM) {
            return [bM(MM, rM), bM(MM, rM)]
          }(MM, rM);
        case "preview":
          return rM.value += OM, "skipped";
        default:
          return void(rM.value += OM)
      }
    }

    function DM(MM) {
      for (let rM = 1; rM < MM.length; rM++) {
        const iM = MM[rM - 1] + MM[rM] - 128;
        MM[rM] = iM
      }
    }

    function kM(MM, rM) {
      let iM = 0,
        OM = Math.floor((MM.length + 1) / 2),
        SM = 0;
      const jM = MM.length - 1;
      for (; !(SM > jM) && (rM[SM++] = MM[iM++], !(SM > jM));) rM[SM++] = MM[OM++]
    }! function(MM) {
      MM[MM.NO_COMPRESSION = 0] = "NO_COMPRESSION", MM[MM.RLE_COMPRESSION = 1] = "RLE_COMPRESSION", MM[MM.ZIPS_COMPRESSION = 2] = "ZIPS_COMPRESSION", MM[MM.ZIP_COMPRESSION = 3] = "ZIP_COMPRESSION", MM[MM.PIZ_COMPRESSION = 4] = "PIZ_COMPRESSION", MM[MM.PXR24_COMPRESSION = 5] = "PXR24_COMPRESSION"
    }(UM || (UM = {})),
    function(MM) {
      MM[MM.INCREASING_Y = 0] = "INCREASING_Y", MM[MM.DECREASING_Y = 1] = "DECREASING_Y"
    }(GM || (GM = {}));
    const ZM = 20000630;

    function oM(MM, rM) {
      if (MM.getUint32(0, !0) != ZM) throw new Error("Incorrect OpenEXR format");
      const iM = MM.getUint8(4),
        SM = MM.getUint8(5),
        jM = {
          singleTile: !!(2 & SM),
          longName: !!(4 & SM),
          deepFormat: !!(8 & SM),
          multiPart: !!(16 & SM)
        };
      rM.value = 8;
      const aM = {};
      let PM = !0;
      for (; PM;) {
        const iM = CM(MM.buffer, rM);
        if (iM) {
          const SM = CM(MM.buffer, rM),
            jM = sM(MM, rM, SM, bM(MM, rM));
          void 0 === jM ? OM.e.Warn(`Unknown header attribute type ${SM}'.`) : aM[iM] = jM
        } else PM = !1
      }
      if (0 != (-5 & SM)) throw new Error("Unsupported file format");
      return {
        version: iM,
        spec: jM,
        ...aM
      }
    }
    const fM = 32768,
      YM = 65535;

    function NM(MM, rM, iM, OM, SM) {
      for (; iM < MM;) rM = rM << 8 | gM(OM, SM), iM += 8;
      return {
        l: rM >> (iM -= MM) & (1 << MM) - 1,
        c: rM,
        lc: iM
      }
    }

    function AM(MM, rM, iM, OM) {
      return {
        c: MM = MM << 8 | gM(iM, OM),
        lc: rM += 8
      }
    }

    function xM(MM, rM, iM, OM, SM, jM, aM, PM, nM) {
      if (MM == rM) {
        if (OM < 8) {
          const MM = AM(iM, OM, SM, jM);
          iM = MM.c, OM = MM.lc
        }
        let MM = iM >> (OM -= 8);
        if (MM = new Uint8Array([MM])[0], PM.value + MM > nM) return null;
        const rM = aM[PM.value - 1];
        for (; MM-- > 0;) aM[PM.value++] = rM
      } else {
        if (!(PM.value < nM)) return null;
        aM[PM.value++] = MM
      }
      return {
        c: iM,
        lc: OM
      }
    }
    const vM = new Array(59);

    function FM(MM, rM, iM, OM, SM, jM) {
      const aM = rM;
      let PM = 0,
        nM = 0;
      for (; OM <= SM; OM++) {
        if (aM.value - rM.value > iM) return;
        let QM = NM(6, PM, nM, MM, aM);
        const zM = QM.l;
        if (PM = QM.c, nM = QM.lc, jM[OM] = zM, zM == lM) {
          if (aM.value - rM.value > iM) throw new Error("Error in HufUnpackEncTable");
          QM = NM(8, PM, nM, MM, aM);
          let zM = QM.l + EM;
          if (PM = QM.c, nM = QM.lc, OM + zM > SM + 1) throw new Error("Error in HufUnpackEncTable");
          for (; zM--;) jM[OM++] = 0;
          OM--
        } else if (zM >= yM) {
          let MM = zM - yM + 2;
          if (OM + MM > SM + 1) throw new Error("Error in HufUnpackEncTable");
          for (; MM--;) jM[OM++] = 0;
          OM--
        }
      }! function(MM) {
        for (let iM = 0; iM <= 58; ++iM) vM[iM] = 0;
        for (let iM = 0; iM < hM; ++iM) vM[MM[iM]] += 1;
        let rM = 0;
        for (let iM = 58; iM > 0; --iM) {
          const MM = rM + vM[iM] >> 1;
          vM[iM] = rM, rM = MM
        }
        for (let iM = 0; iM < hM; ++iM) {
          const rM = MM[iM];
          rM > 0 && (MM[iM] = rM | vM[rM]++ << 6)
        }
      }(jM)
    }

    function BM(MM) {
      return 63 & MM
    }

    function XM(MM) {
      return MM >> 6
    }

    function IM(MM, rM, iM, OM, SM, jM) {
      const aM = iM.value,
        PM = bM(rM, iM),
        nM = bM(rM, iM);
      iM.value += 4;
      const QM = bM(rM, iM);
      if (iM.value += 4, PM < 0 || PM >= hM || nM < 0 || nM >= hM) throw new Error("Wrong HUF_ENCSIZE");
      const zM = new Array(hM),
        LM = new Array(JM);
      ! function(MM) {
        for (let rM = 0; rM < JM; rM++) MM[rM] = {}, MM[rM].len = 0, MM[rM].lit = 0, MM[rM].p = null
      }(LM);
      if (FM(MM, iM, OM - (iM.value - aM), PM, nM, zM), QM > 8 * (OM - (iM.value - aM))) throw new Error("Wrong hufUncompress");
      ! function(MM, rM, iM, OM) {
        for (; rM <= iM; rM++) {
          const iM = XM(MM[rM]),
            SM = BM(MM[rM]);
          if (iM >> SM) throw new Error("Invalid table entry");
          if (SM > HM) {
            const MM = OM[iM >> SM - HM];
            if (MM.len) throw new Error("Invalid table entry");
            if (MM.lit++, MM.p) {
              const rM = MM.p;
              MM.p = new Array(MM.lit);
              for (let iM = 0; iM < MM.lit - 1; ++iM) MM.p[iM] = rM[iM]
            } else MM.p = new Array(1);
            MM.p[MM.lit - 1] = rM
          } else if (SM) {
            let MM = 0;
            for (let jM = 1 << HM - SM; jM > 0; jM--) {
              const jM = OM[(iM << HM - SM) + MM];
              if (jM.len || jM.p) throw new Error("Invalid table entry");
              jM.len = SM, jM.lit = rM, MM++
            }
          }
        }
      }(zM, PM, nM, LM),
      function(MM, rM, iM, OM, SM, jM, aM, PM, nM) {
        let QM = 0,
          zM = 0;
        const LM = aM,
          mM = Math.trunc(OM.value + (SM + 7) / 8);
        for (; OM.value < mM;) {
          let SM = AM(QM, zM, iM, OM);
          for (QM = SM.c, zM = SM.lc; zM >= HM;) {
            const aM = rM[QM >> zM - HM & dM];
            if (aM.len) {
              zM -= aM.len;
              const MM = xM(aM.lit, jM, QM, zM, iM, OM, PM, nM, LM);
              MM && (QM = MM.c, zM = MM.lc)
            } else {
              if (!aM.p) throw new Error("hufDecode issues");
              let rM;
              for (rM = 0; rM < aM.lit; rM++) {
                const HM = BM(MM[aM.p[rM]]);
                for (; zM < HM && OM.value < mM;) SM = AM(QM, zM, iM, OM), QM = SM.c, zM = SM.lc;
                if (zM >= HM && XM(MM[aM.p[rM]]) == (QM >> zM - HM & (1 << HM) - 1)) {
                  zM -= HM;
                  const MM = xM(aM.p[rM], jM, QM, zM, iM, OM, PM, nM, LM);
                  MM && (QM = MM.c, zM = MM.lc);
                  break
                }
              }
              if (rM == aM.lit) throw new Error("HufDecode issues")
            }
          }
        }
        const hM = 8 - SM & 7;
        for (QM >>= hM, zM -= hM; zM > 0;) {
          const MM = rM[QM << HM - zM & dM];
          if (!MM.len) throw new Error("HufDecode issues");
          {
            zM -= MM.len;
            const rM = xM(MM.lit, jM, QM, zM, iM, OM, PM, nM, LM);
            rM && (QM = rM.c, zM = rM.lc)
          }
        }
      }(zM, LM, MM, iM, QM, nM, jM, SM, {
        value: 0
      })
    }

    function KM(MM) {
      return 65535 & MM
    }

    function qM(MM) {
      const rM = KM(MM);
      return rM > 32767 ? rM - 65536 : rM
    }

    function TM(MM, rM) {
      const iM = qM(MM),
        OM = qM(rM),
        SM = iM + (1 & OM) + (OM >> 1);
      return {
        a: SM,
        b: SM - OM
      }
    }

    function VM(MM, rM) {
      const iM = KM(MM),
        OM = KM(rM),
        SM = iM - (OM >> 1) & YM;
      return {
        a: OM + SM - fM & YM,
        b: SM
      }
    }

    function cM(MM, rM, iM, OM, SM, jM, aM) {
      const PM = aM < 16384,
        nM = iM > SM ? SM : iM;
      let QM, zM, LM = 1;
      for (; LM <= nM;) LM <<= 1;
      for (LM >>= 1, QM = LM, LM >>= 1; LM >= 1;) {
        zM = 0;
        const aM = zM + jM * (SM - QM),
          nM = jM * LM,
          mM = jM * QM,
          HM = OM * LM,
          hM = OM * QM;
        let JM, dM, yM, lM;
        for (; zM <= aM; zM += mM) {
          let SM = zM;
          const jM = zM + OM * (iM - QM);
          for (; SM <= jM; SM += hM) {
            const iM = SM + HM,
              OM = SM + nM,
              jM = OM + HM;
            if (PM) {
              let aM = TM(MM[SM + rM], MM[OM + rM]);
              JM = aM.a, yM = aM.b, aM = TM(MM[iM + rM], MM[jM + rM]), dM = aM.a, lM = aM.b, aM = TM(JM, dM), MM[SM + rM] = aM.a, MM[iM + rM] = aM.b, aM = TM(yM, lM), MM[OM + rM] = aM.a, MM[jM + rM] = aM.b
            } else {
              let aM = VM(MM[SM + rM], MM[OM + rM]);
              JM = aM.a, yM = aM.b, aM = VM(MM[iM + rM], MM[jM + rM]), dM = aM.a, lM = aM.b, aM = VM(JM, dM), MM[SM + rM] = aM.a, MM[iM + rM] = aM.b, aM = VM(yM, lM), MM[OM + rM] = aM.a, MM[jM + rM] = aM.b
            }
          }
          if (iM & LM) {
            const iM = SM + nM;
            let OM;
            OM = PM ? TM(MM[SM + rM], MM[iM + rM]) : VM(MM[SM + rM], MM[iM + rM]), JM = OM.a, MM[iM + rM] = OM.b, MM[SM + rM] = JM
          }
        }
        if (SM & LM) {
          let SM = zM;
          const jM = zM + OM * (iM - QM);
          for (; SM <= jM; SM += hM) {
            const iM = SM + HM;
            let OM;
            OM = PM ? TM(MM[SM + rM], MM[iM + rM]) : VM(MM[SM + rM], MM[iM + rM]), JM = OM.a, MM[iM + rM] = OM.b, MM[SM + rM] = JM
          }
        }
        QM = LM, LM >>= 1
      }
      return zM
    }

    function Mr(MM) {
      return new DataView(MM.array.buffer, MM.offset.value, MM.size)
    }

    function rr(MM) {
      const rM = MM.viewer.buffer.slice(MM.offset.value, MM.offset.value + MM.size),
        iM = new Uint8Array(function(MM) {
          let rM = MM.byteLength;
          const iM = [];
          let OM = 0;
          const SM = new DataView(MM);
          for (; rM > 0;) {
            const MM = SM.getInt8(OM++);
            if (MM < 0) {
              const jM = -MM;
              rM -= jM + 1;
              for (let MM = 0; MM < jM; MM++) iM.push(SM.getUint8(OM++))
            } else {
              const jM = MM;
              rM -= 2;
              const aM = SM.getUint8(OM++);
              for (let MM = 0; MM < jM + 1; MM++) iM.push(aM)
            }
          }
          return iM
        }(rM)),
        OM = new Uint8Array(iM.length);
      return DM(iM), kM(iM, OM), new DataView(OM.buffer)
    }

    function ir(MM) {
      const rM = MM.array.slice(MM.offset.value, MM.offset.value + MM.size),
        iM = fflate.unzlibSync(rM),
        OM = new Uint8Array(iM.length);
      return DM(iM), kM(iM, OM), new DataView(OM.buffer)
    }

    function Or(MM) {
      const rM = MM.array.slice(MM.offset.value, MM.offset.value + MM.size),
        iM = fflate.unzlibSync(rM),
        OM = MM.lines * MM.channels * MM.width,
        SM = 1 == MM.type ? new Uint16Array(OM) : new Uint32Array(OM);
      let jM = 0,
        aM = 0;
      const PM = new Array(4);
      for (let nM = 0; nM < MM.lines; nM++)
        for (let rM = 0; rM < MM.channels; rM++) {
          let rM = 0;
          switch (MM.type) {
            case 1:
              PM[0] = jM, PM[1] = PM[0] + MM.width, jM = PM[1] + MM.width;
              for (let OM = 0; OM < MM.width; ++OM) {
                rM += iM[PM[0]++] << 8 | iM[PM[1]++], SM[aM] = rM, aM++
              }
              break;
            case 2:
              PM[0] = jM, PM[1] = PM[0] + MM.width, PM[2] = PM[1] + MM.width, jM = PM[2] + MM.width;
              for (let OM = 0; OM < MM.width; ++OM) {
                rM += iM[PM[0]++] << 24 | iM[PM[1]++] << 16 | iM[PM[2]++] << 8, SM[aM] = rM, aM++
              }
          }
        }
      return new DataView(SM.buffer)
    }

    function Sr(MM) {
      const rM = MM.viewer,
        iM = {
          value: MM.offset.value
        },
        OM = new Uint16Array(MM.width * MM.scanlineBlockSize * (MM.channels * MM.type)),
        SM = new Uint8Array(mM);
      let jM = 0;
      const aM = new Array(MM.channels);
      for (let QM = 0; QM < MM.channels; QM++) aM[QM] = {}, aM[QM].start = jM, aM[QM].end = aM[QM].start, aM[QM].nx = MM.width, aM[QM].ny = MM.lines, aM[QM].size = MM.type, jM += aM[QM].nx * aM[QM].ny * aM[QM].size;
      const PM = tM(rM, iM),
        nM = tM(rM, iM);
      if (nM >= mM) throw new Error("Wrong PIZ_COMPRESSION BITMAP_SIZE");
      if (PM <= nM)
        for (let QM = 0; QM < nM - PM + 1; QM++) SM[QM + PM] = wM(rM, iM);
      const zM = new Uint16Array(LM),
        HM = function(MM, rM) {
          let iM = 0;
          for (let SM = 0; SM < LM; ++SM)(0 == SM || MM[SM >> 3] & 1 << (7 & SM)) && (rM[iM++] = SM);
          const OM = iM - 1;
          for (; iM < LM;) rM[iM++] = 0;
          return OM
        }(SM, zM),
        hM = bM(rM, iM);
      IM(MM.array, rM, iM, hM, OM, jM);
      for (let QM = 0; QM < MM.channels; ++QM) {
        const MM = aM[QM];
        for (let rM = 0; rM < aM[QM].size; ++rM) cM(OM, MM.start + rM, MM.nx, MM.size, MM.ny, MM.nx * MM.size, HM)
      }! function(MM, rM, iM) {
        for (let OM = 0; OM < iM; ++OM) rM[OM] = MM[rM[OM]]
      }(zM, OM, jM);
      let JM = 0;
      const dM = new Uint8Array(OM.buffer.byteLength);
      for (let LM = 0; LM < MM.lines; LM++)
        for (let rM = 0; rM < MM.channels; rM++) {
          const MM = aM[rM],
            iM = MM.nx * MM.size,
            SM = new Uint8Array(OM.buffer, MM.end * QM, iM * QM);
          dM.set(SM, JM), JM += iM * QM, MM.end += iM
        }
      return new DataView(dM.buffer)
    }
    var jr, ar = iM(41205);
    ! function(MM) {
      MM[MM.Float = 0] = "Float", MM[MM.HalfFloat = 1] = "HalfFloat"
    }(jr || (jr = {}));
    class Pr {}
    async function nr(MM, rM, iM, OM) {
      const SM = {
        size: 0,
        viewer: rM,
        array: new Uint8Array(rM.buffer),
        offset: iM,
        width: MM.dataWindow.xMax - MM.dataWindow.xMin + 1,
        height: MM.dataWindow.yMax - MM.dataWindow.yMin + 1,
        channels: MM.channels.length,
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
      switch (MM.compression) {
        case UM.NO_COMPRESSION:
          SM.lines = 1, SM.uncompress = Mr;
          break;
        case UM.RLE_COMPRESSION:
          SM.lines = 1, SM.uncompress = rr;
          break;
        case UM.ZIPS_COMPRESSION:
          SM.lines = 1, SM.uncompress = ir, await ar.e.LoadScriptAsync(Pr.FFLATEUrl);
          break;
        case UM.ZIP_COMPRESSION:
          SM.lines = 16, SM.uncompress = ir, await ar.e.LoadScriptAsync(Pr.FFLATEUrl);
          break;
        case UM.PIZ_COMPRESSION:
          SM.lines = 32, SM.uncompress = Sr;
          break;
        case UM.PXR24_COMPRESSION:
          SM.lines = 16, SM.uncompress = Or, await ar.e.LoadScriptAsync(Pr.FFLATEUrl);
          break;
        default:
          throw new Error(UM[MM.compression] + " is unsupported")
      }
      SM.scanlineBlockSize = SM.lines;
      const jM = {};
      for (const PM of MM.channels) switch (PM.name) {
        case "R":
        case "G":
        case "B":
        case "A":
        case "Y":
          jM[PM.name] = !0, SM.type = PM.pixelType
      }
      let aM = !1;
      if (jM.R && jM.G && jM.B && jM.A) SM.outputChannels = 4, SM.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (jM.R && jM.G && jM.B) aM = !0, SM.outputChannels = 4, SM.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (jM.R && jM.G) SM.outputChannels = 2, SM.decodeChannels = {
        R: 0,
        G: 1
      };
      else if (jM.R) SM.outputChannels = 1, SM.decodeChannels = {
        R: 0
      };
      else {
        if (!jM.Y) throw new Error("EXRLoader.parse: file contains unsupported data channels.");
        SM.outputChannels = 1, SM.decodeChannels = {
          Y: 0
        }
      }
      if (1 === SM.type) switch (OM) {
        case jr.Float:
          SM.getter = pM, SM.inputSize = QM;
          break;
        case jr.HalfFloat:
          SM.getter = tM, SM.inputSize = QM
      } else {
        if (2 !== SM.type) throw new Error("Unsupported pixelType " + SM.type + " for " + MM.compression);
        switch (OM) {
          case jr.Float:
            SM.getter = RM, SM.inputSize = PM;
            break;
          case jr.HalfFloat:
            SM.getter = WM, SM.inputSize = PM
        }
      }
      SM.blockCount = SM.height / SM.scanlineBlockSize;
      for (let PM = 0; PM < SM.blockCount; PM++) uM(rM, iM);
      const nM = SM.width * SM.height * SM.outputChannels;
      switch (OM) {
        case jr.Float:
          SM.byteArray = new Float32Array(nM), SM.textureType = 1, aM && SM.byteArray.fill(1, 0, nM);
          break;
        case jr.HalfFloat:
          SM.byteArray = new Uint16Array(nM), SM.textureType = 2, aM && SM.byteArray.fill(15360, 0, nM);
          break;
        default:
          throw new Error("Unsupported type: " + OM)
      }
      let zM = 0;
      for (const PM of MM.channels) void 0 !== SM.decodeChannels[PM.name] && (SM.channelLineOffsets[PM.name] = zM * SM.width), zM += 2 * PM.pixelType;
      return SM.bytesPerLine = SM.width * zM, SM.outLineWidth = SM.width * SM.outputChannels, "INCREASING_Y" === MM.lineOrder ? SM.scanOrder = MM => MM : SM.scanOrder = MM => SM.height - 1 - MM, 4 == SM.outputChannels ? (SM.format = 5, SM.linearSpace = !0) : (SM.format = 6, SM.linearSpace = !1), SM
    }

    function Qr(MM, rM, iM, OM) {
      const SM = {
        value: 0
      };
      for (let jM = 0; jM < MM.height / MM.scanlineBlockSize; jM++) {
        const aM = eM(iM, OM) - rM.dataWindow.yMin;
        MM.size = bM(iM, OM), MM.lines = aM + MM.scanlineBlockSize > MM.height ? MM.height - aM : MM.scanlineBlockSize;
        const PM = MM.size < MM.lines * MM.bytesPerLine && MM.uncompress ? MM.uncompress(MM) : Mr(MM);
        OM.value += MM.size;
        for (let iM = 0; iM < MM.scanlineBlockSize; iM++) {
          const OM = jM * MM.scanlineBlockSize,
            aM = iM + MM.scanOrder(OM);
          if (aM >= MM.height) continue;
          const nM = iM * MM.bytesPerLine,
            QM = (MM.height - 1 - aM) * MM.outLineWidth;
          for (let iM = 0; iM < MM.channels; iM++) {
            const OM = rM.channels[iM].name,
              jM = MM.channelLineOffsets[OM],
              aM = MM.decodeChannels[OM];
            if (void 0 !== aM) {
              SM.value = nM + jM;
              for (let rM = 0; rM < MM.width; rM++) {
                const iM = QM + rM * MM.outputChannels + aM;
                MM.byteArray && (MM.byteArray[iM] = MM.getter(PM, SM))
              }
            }
          }
        }
      }
    }
    Pr.DefaultOutputType = jr.HalfFloat, Pr.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class zr {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(MM, rM, iM, OM, SM) {
        throw ".exr not supported in Cube."
      }
      loadData(MM, rM, iM) {
        const SM = new DataView(MM.buffer),
          jM = {
            value: 0
          },
          aM = oM(SM, jM);
        nr(aM, SM, jM, Pr.DefaultOutputType).then((MM => {
          Qr(MM, aM, SM, jM);
          const OM = aM.dataWindow.xMax - aM.dataWindow.xMin + 1,
            PM = aM.dataWindow.yMax - aM.dataWindow.yMin + 1;
          iM(OM, PM, rM.generateMipMaps, !1, (() => {
            const iM = rM.ph();
            rM.format = aM.format, rM.type = MM.textureType, rM.invertY = !1, rM._gammaSpace = !aM.linearSpace, MM.byteArray && iM._uploadDataToTextureDirectly(rM, MM.byteArray, 0, 0, void 0, !0)
          }))
        })).catch((MM => {
          OM.e.Error("Failed to load EXR texture: ", MM)
        }))
      }
    }
    async function Lr(MM) {
      const rM = new DataView(MM),
        iM = {
          value: 0
        },
        SM = oM(rM, iM);
      try {
        const MM = await nr(SM, rM, iM, jr.Float);
        return Qr(MM, SM, rM, iM), MM.byteArray ? {
          width: SM.dataWindow.xMax - SM.dataWindow.xMin + 1,
          height: SM.dataWindow.yMax - SM.dataWindow.yMin + 1,
          data: new Float32Array(MM.byteArray)
        } : (OM.e.Error("Failed to decode EXR data: No byte array available."), {
          width: 0,
          height: 0,
          data: null
        })
      } catch (jM) {
        OM.e.Error("Failed to load EXR data: ", jM)
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
for (const MM in modules) Object.freeze(modules[MM]);