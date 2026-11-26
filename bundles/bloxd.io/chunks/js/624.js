export const id = 624;
export const ids = [624];
export const modules = {
  45008: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      ReadExrDataAsync: () => PO,
      _ExrTextureLoader: () => MO
    });
    var YB = GB(39366),
      DB = GB(37807),
      QB = GB(41071);
    const oB = 4,
      jB = 4,
      yB = 1,
      JB = 2,
      MB = 8,
      PB = 65536,
      zB = PB >> 3,
      lB = 14,
      pB = 65537,
      qB = 1 << lB,
      ZB = qB - 1,
      NB = 59,
      RB = 63,
      WB = 2 + RB - NB;
    var AB, VB;

    function SB(BB, OB) {
      const GB = new Uint8Array(BB);
      let YB = 0;
      for (; 0 != GB[OB.value + YB];) YB += 1;
      const DB = (new TextDecoder).decode(GB.slice(OB.value, OB.value + YB));
      return OB.value = OB.value + YB + 1, DB
    }

    function nB(BB, OB) {
      const GB = BB.getInt32(OB.value, !0);
      return OB.value += oB, GB
    }

    function UB(BB, OB) {
      const GB = BB.getUint32(OB.value, !0);
      return OB.value += oB, GB
    }

    function fB(BB, OB) {
      const GB = BB.getUint8(OB.value);
      return OB.value += yB, GB
    }

    function kB(BB, OB) {
      const GB = BB.getUint16(OB.value, !0);
      return OB.value += JB, GB
    }

    function dB(BB, OB) {
      const GB = BB[OB.value];
      return OB.value += yB, GB
    }

    function KB(BB, OB) {
      let GB;
      return GB = "getBigInt64" in DataView.prototype ? Number(BB.getBigInt64(OB.value, !0)) : BB.getUint32(OB.value + 4, !0) + Number(BB.getUint32(OB.value, !0) << 32), OB.value += MB, GB
    }

    function uB(BB, OB) {
      const GB = BB.getFloat32(OB.value, !0);
      return OB.value += jB, GB
    }

    function mB(BB, OB) {
      return (0, QB.e)(kB(BB, OB))
    }

    function IB(BB, OB) {
      return (0, QB.l)((0, DB.Clamp)(uB(BB, OB), -QB.h, QB.h))
    }

    function FB(BB, OB, GB, YB) {
      switch (GB) {
        case "string":
        case "stringvector":
        case "iccProfile":
          return function(BB, OB, GB) {
            const YB = (new TextDecoder).decode(new Uint8Array(BB).slice(OB.value, OB.value + GB));
            return OB.value = OB.value + GB, YB
          }(BB.buffer, OB, YB);
        case "chlist":
          return function(BB, OB, GB) {
            const YB = OB.value,
              DB = [];
            for (; OB.value < YB + GB - 1;) {
              const GB = SB(BB.buffer, OB),
                YB = nB(BB, OB),
                QB = fB(BB, OB);
              OB.value += 3;
              const oB = nB(BB, OB),
                jB = nB(BB, OB);
              DB.push({
                name: GB,
                pixelType: YB,
                pLinear: QB,
                xSampling: oB,
                ySampling: jB
              })
            }
            return OB.value += 1, DB
          }(BB, OB, YB);
        case "chromaticities":
          return function(BB, OB) {
            return {
              redX: uB(BB, OB),
              redY: uB(BB, OB),
              greenX: uB(BB, OB),
              greenY: uB(BB, OB),
              blueX: uB(BB, OB),
              blueY: uB(BB, OB),
              whiteX: uB(BB, OB),
              whiteY: uB(BB, OB)
            }
          }(BB, OB);
        case "compression":
          return function(BB, OB) {
            return fB(BB, OB)
          }(BB, OB);
        case "box2i":
          return function(BB, OB) {
            return {
              xMin: nB(BB, OB),
              yMin: nB(BB, OB),
              xMax: nB(BB, OB),
              yMax: nB(BB, OB)
            }
          }(BB, OB);
        case "lineOrder":
          return function(BB, OB) {
            const GB = fB(BB, OB);
            return VB[GB]
          }(BB, OB);
        case "float":
          return uB(BB, OB);
        case "v2f":
          return function(BB, OB) {
            return [uB(BB, OB), uB(BB, OB)]
          }(BB, OB);
        case "v3f":
          return function(BB, OB) {
            return [uB(BB, OB), uB(BB, OB), uB(BB, OB)]
          }(BB, OB);
        case "int":
          return nB(BB, OB);
        case "rational":
          return function(BB, OB) {
            return [nB(BB, OB), UB(BB, OB)]
          }(BB, OB);
        case "timecode":
          return function(BB, OB) {
            return [UB(BB, OB), UB(BB, OB)]
          }(BB, OB);
        case "preview":
          return OB.value += YB, "skipped";
        default:
          return void(OB.value += YB)
      }
    }

    function iB(BB) {
      for (let OB = 1; OB < BB.length; OB++) {
        const GB = BB[OB - 1] + BB[OB] - 128;
        BB[OB] = GB
      }
    }

    function LB(BB, OB) {
      let GB = 0,
        YB = Math.floor((BB.length + 1) / 2),
        DB = 0;
      const QB = BB.length - 1;
      for (; !(DB > QB) && (OB[DB++] = BB[GB++], !(DB > QB));) OB[DB++] = BB[YB++]
    }! function(BB) {
      BB[BB.NO_COMPRESSION = 0] = "NO_COMPRESSION", BB[BB.RLE_COMPRESSION = 1] = "RLE_COMPRESSION", BB[BB.ZIPS_COMPRESSION = 2] = "ZIPS_COMPRESSION", BB[BB.ZIP_COMPRESSION = 3] = "ZIP_COMPRESSION", BB[BB.PIZ_COMPRESSION = 4] = "PIZ_COMPRESSION", BB[BB.PXR24_COMPRESSION = 5] = "PXR24_COMPRESSION"
    }(AB || (AB = {})),
    function(BB) {
      BB[BB.INCREASING_Y = 0] = "INCREASING_Y", BB[BB.DECREASING_Y = 1] = "DECREASING_Y"
    }(VB || (VB = {}));
    const gB = 20000630;

    function rB(BB, OB) {
      if (BB.getUint32(0, !0) != gB) throw new Error("Incorrect OpenEXR format");
      const GB = BB.getUint8(4),
        DB = BB.getUint8(5),
        QB = {
          singleTile: !!(2 & DB),
          longName: !!(4 & DB),
          deepFormat: !!(8 & DB),
          multiPart: !!(16 & DB)
        };
      OB.value = 8;
      const oB = {};
      let jB = !0;
      for (; jB;) {
        const GB = SB(BB.buffer, OB);
        if (GB) {
          const DB = SB(BB.buffer, OB),
            QB = FB(BB, OB, DB, UB(BB, OB));
          void 0 === QB ? YB.b.Warn(`Unknown header attribute type ${DB}'.`) : oB[GB] = QB
        } else jB = !1
      }
      if (0 != (-5 & DB)) throw new Error("Unsupported file format");
      return {
        version: GB,
        spec: QB,
        ...oB
      }
    }
    const XB = 32768,
      wB = 65535;

    function EB(BB, OB, GB, YB, DB) {
      for (; GB < BB;) OB = OB << 8 | dB(YB, DB), GB += 8;
      return {
        l: OB >> (GB -= BB) & (1 << BB) - 1,
        c: OB,
        lc: GB
      }
    }

    function cB(BB, OB, GB, YB) {
      return {
        c: BB = BB << 8 | dB(GB, YB),
        lc: OB += 8
      }
    }

    function hB(BB, OB, GB, YB, DB, QB, oB, jB, yB) {
      if (BB == OB) {
        if (YB < 8) {
          const BB = cB(GB, YB, DB, QB);
          GB = BB.c, YB = BB.lc
        }
        let BB = GB >> (YB -= 8);
        if (BB = new Uint8Array([BB])[0], jB.value + BB > yB) return null;
        const OB = oB[jB.value - 1];
        for (; BB-- > 0;) oB[jB.value++] = OB
      } else {
        if (!(jB.value < yB)) return null;
        oB[jB.value++] = BB
      }
      return {
        c: GB,
        lc: YB
      }
    }
    const aB = new Array(59);

    function eB(BB, OB, GB, YB, DB, QB) {
      const oB = OB;
      let jB = 0,
        yB = 0;
      for (; YB <= DB; YB++) {
        if (oB.value - OB.value > GB) return;
        let JB = EB(6, jB, yB, BB, oB);
        const MB = JB.l;
        if (jB = JB.c, yB = JB.lc, QB[YB] = MB, MB == RB) {
          if (oB.value - OB.value > GB) throw new Error("Error in HufUnpackEncTable");
          JB = EB(8, jB, yB, BB, oB);
          let MB = JB.l + WB;
          if (jB = JB.c, yB = JB.lc, YB + MB > DB + 1) throw new Error("Error in HufUnpackEncTable");
          for (; MB--;) QB[YB++] = 0;
          YB--
        } else if (MB >= NB) {
          let BB = MB - NB + 2;
          if (YB + BB > DB + 1) throw new Error("Error in HufUnpackEncTable");
          for (; BB--;) QB[YB++] = 0;
          YB--
        }
      }! function(BB) {
        for (let GB = 0; GB <= 58; ++GB) aB[GB] = 0;
        for (let GB = 0; GB < pB; ++GB) aB[BB[GB]] += 1;
        let OB = 0;
        for (let GB = 58; GB > 0; --GB) {
          const BB = OB + aB[GB] >> 1;
          aB[GB] = OB, OB = BB
        }
        for (let GB = 0; GB < pB; ++GB) {
          const OB = BB[GB];
          OB > 0 && (BB[GB] = OB | aB[OB]++ << 6)
        }
      }(QB)
    }

    function TB(BB) {
      return 63 & BB
    }

    function bB(BB) {
      return BB >> 6
    }

    function CB(BB, OB, GB, YB, DB, QB) {
      const oB = GB.value,
        jB = UB(OB, GB),
        yB = UB(OB, GB);
      GB.value += 4;
      const JB = UB(OB, GB);
      if (GB.value += 4, jB < 0 || jB >= pB || yB < 0 || yB >= pB) throw new Error("Wrong HUF_ENCSIZE");
      const MB = new Array(pB),
        PB = new Array(qB);
      ! function(BB) {
        for (let OB = 0; OB < qB; OB++) BB[OB] = {}, BB[OB].len = 0, BB[OB].lit = 0, BB[OB].p = null
      }(PB);
      if (eB(BB, GB, YB - (GB.value - oB), jB, yB, MB), JB > 8 * (YB - (GB.value - oB))) throw new Error("Wrong hufUncompress");
      ! function(BB, OB, GB, YB) {
        for (; OB <= GB; OB++) {
          const GB = bB(BB[OB]),
            DB = TB(BB[OB]);
          if (GB >> DB) throw new Error("Invalid table entry");
          if (DB > lB) {
            const BB = YB[GB >> DB - lB];
            if (BB.len) throw new Error("Invalid table entry");
            if (BB.lit++, BB.p) {
              const OB = BB.p;
              BB.p = new Array(BB.lit);
              for (let GB = 0; GB < BB.lit - 1; ++GB) BB.p[GB] = OB[GB]
            } else BB.p = new Array(1);
            BB.p[BB.lit - 1] = OB
          } else if (DB) {
            let BB = 0;
            for (let QB = 1 << lB - DB; QB > 0; QB--) {
              const QB = YB[(GB << lB - DB) + BB];
              if (QB.len || QB.p) throw new Error("Invalid table entry");
              QB.len = DB, QB.lit = OB, BB++
            }
          }
        }
      }(MB, jB, yB, PB),
      function(BB, OB, GB, YB, DB, QB, oB, jB, yB) {
        let JB = 0,
          MB = 0;
        const PB = oB,
          zB = Math.trunc(YB.value + (DB + 7) / 8);
        for (; YB.value < zB;) {
          let DB = cB(JB, MB, GB, YB);
          for (JB = DB.c, MB = DB.lc; MB >= lB;) {
            const oB = OB[JB >> MB - lB & ZB];
            if (oB.len) {
              MB -= oB.len;
              const BB = hB(oB.lit, QB, JB, MB, GB, YB, jB, yB, PB);
              BB && (JB = BB.c, MB = BB.lc)
            } else {
              if (!oB.p) throw new Error("hufDecode issues");
              let OB;
              for (OB = 0; OB < oB.lit; OB++) {
                const lB = TB(BB[oB.p[OB]]);
                for (; MB < lB && YB.value < zB;) DB = cB(JB, MB, GB, YB), JB = DB.c, MB = DB.lc;
                if (MB >= lB && bB(BB[oB.p[OB]]) == (JB >> MB - lB & (1 << lB) - 1)) {
                  MB -= lB;
                  const BB = hB(oB.p[OB], QB, JB, MB, GB, YB, jB, yB, PB);
                  BB && (JB = BB.c, MB = BB.lc);
                  break
                }
              }
              if (OB == oB.lit) throw new Error("HufDecode issues")
            }
          }
        }
        const pB = 8 - DB & 7;
        for (JB >>= pB, MB -= pB; MB > 0;) {
          const BB = OB[JB << lB - MB & ZB];
          if (!BB.len) throw new Error("HufDecode issues");
          {
            MB -= BB.len;
            const OB = hB(BB.lit, QB, JB, MB, GB, YB, jB, yB, PB);
            OB && (JB = OB.c, MB = OB.lc)
          }
        }
      }(MB, PB, BB, GB, JB, yB, QB, DB, {
        value: 0
      })
    }

    function HB(BB) {
      return 65535 & BB
    }

    function vB(BB) {
      const OB = HB(BB);
      return OB > 32767 ? OB - 65536 : OB
    }

    function sB(BB, OB) {
      const GB = vB(BB),
        YB = vB(OB),
        DB = GB + (1 & YB) + (YB >> 1);
      return {
        a: DB,
        b: DB - YB
      }
    }

    function xB(BB, OB) {
      const GB = HB(BB),
        YB = HB(OB),
        DB = GB - (YB >> 1) & wB;
      return {
        a: YB + DB - XB & wB,
        b: DB
      }
    }

    function tB(BB, OB, GB, YB, DB, QB, oB) {
      const jB = oB < 16384,
        yB = GB > DB ? DB : GB;
      let JB, MB, PB = 1;
      for (; PB <= yB;) PB <<= 1;
      for (PB >>= 1, JB = PB, PB >>= 1; PB >= 1;) {
        MB = 0;
        const oB = MB + QB * (DB - JB),
          yB = QB * PB,
          zB = QB * JB,
          lB = YB * PB,
          pB = YB * JB;
        let qB, ZB, NB, RB;
        for (; MB <= oB; MB += zB) {
          let DB = MB;
          const QB = MB + YB * (GB - JB);
          for (; DB <= QB; DB += pB) {
            const GB = DB + lB,
              YB = DB + yB,
              QB = YB + lB;
            if (jB) {
              let oB = sB(BB[DB + OB], BB[YB + OB]);
              qB = oB.a, NB = oB.b, oB = sB(BB[GB + OB], BB[QB + OB]), ZB = oB.a, RB = oB.b, oB = sB(qB, ZB), BB[DB + OB] = oB.a, BB[GB + OB] = oB.b, oB = sB(NB, RB), BB[YB + OB] = oB.a, BB[QB + OB] = oB.b
            } else {
              let oB = xB(BB[DB + OB], BB[YB + OB]);
              qB = oB.a, NB = oB.b, oB = xB(BB[GB + OB], BB[QB + OB]), ZB = oB.a, RB = oB.b, oB = xB(qB, ZB), BB[DB + OB] = oB.a, BB[GB + OB] = oB.b, oB = xB(NB, RB), BB[YB + OB] = oB.a, BB[QB + OB] = oB.b
            }
          }
          if (GB & PB) {
            const GB = DB + yB;
            let YB;
            YB = jB ? sB(BB[DB + OB], BB[GB + OB]) : xB(BB[DB + OB], BB[GB + OB]), qB = YB.a, BB[GB + OB] = YB.b, BB[DB + OB] = qB
          }
        }
        if (DB & PB) {
          let DB = MB;
          const QB = MB + YB * (GB - JB);
          for (; DB <= QB; DB += pB) {
            const GB = DB + lB;
            let YB;
            YB = jB ? sB(BB[DB + OB], BB[GB + OB]) : xB(BB[DB + OB], BB[GB + OB]), qB = YB.a, BB[GB + OB] = YB.b, BB[DB + OB] = qB
          }
        }
        JB = PB, PB >>= 1
      }
      return MB
    }

    function BO(BB) {
      return new DataView(BB.array.buffer, BB.offset.value, BB.size)
    }

    function OO(BB) {
      const OB = BB.viewer.buffer.slice(BB.offset.value, BB.offset.value + BB.size),
        GB = new Uint8Array(function(BB) {
          let OB = BB.byteLength;
          const GB = [];
          let YB = 0;
          const DB = new DataView(BB);
          for (; OB > 0;) {
            const BB = DB.getInt8(YB++);
            if (BB < 0) {
              const QB = -BB;
              OB -= QB + 1;
              for (let BB = 0; BB < QB; BB++) GB.push(DB.getUint8(YB++))
            } else {
              const QB = BB;
              OB -= 2;
              const oB = DB.getUint8(YB++);
              for (let BB = 0; BB < QB + 1; BB++) GB.push(oB)
            }
          }
          return GB
        }(OB)),
        YB = new Uint8Array(GB.length);
      return iB(GB), LB(GB, YB), new DataView(YB.buffer)
    }

    function GO(BB) {
      const OB = BB.array.slice(BB.offset.value, BB.offset.value + BB.size),
        GB = fflate.unzlibSync(OB),
        YB = new Uint8Array(GB.length);
      return iB(GB), LB(GB, YB), new DataView(YB.buffer)
    }

    function YO(BB) {
      const OB = BB.array.slice(BB.offset.value, BB.offset.value + BB.size),
        GB = fflate.unzlibSync(OB),
        YB = BB.lines * BB.channels * BB.width,
        DB = 1 == BB.type ? new Uint16Array(YB) : new Uint32Array(YB);
      let QB = 0,
        oB = 0;
      const jB = new Array(4);
      for (let yB = 0; yB < BB.lines; yB++)
        for (let OB = 0; OB < BB.channels; OB++) {
          let OB = 0;
          switch (BB.type) {
            case 1:
              jB[0] = QB, jB[1] = jB[0] + BB.width, QB = jB[1] + BB.width;
              for (let YB = 0; YB < BB.width; ++YB) {
                OB += GB[jB[0]++] << 8 | GB[jB[1]++], DB[oB] = OB, oB++
              }
              break;
            case 2:
              jB[0] = QB, jB[1] = jB[0] + BB.width, jB[2] = jB[1] + BB.width, QB = jB[2] + BB.width;
              for (let YB = 0; YB < BB.width; ++YB) {
                OB += GB[jB[0]++] << 24 | GB[jB[1]++] << 16 | GB[jB[2]++] << 8, DB[oB] = OB, oB++
              }
          }
        }
      return new DataView(DB.buffer)
    }

    function DO(BB) {
      const OB = BB.viewer,
        GB = {
          value: BB.offset.value
        },
        YB = new Uint16Array(BB.width * BB.scanlineBlockSize * (BB.channels * BB.type)),
        DB = new Uint8Array(zB);
      let QB = 0;
      const oB = new Array(BB.channels);
      for (let JB = 0; JB < BB.channels; JB++) oB[JB] = {}, oB[JB].start = QB, oB[JB].end = oB[JB].start, oB[JB].nx = BB.width, oB[JB].ny = BB.lines, oB[JB].size = BB.type, QB += oB[JB].nx * oB[JB].ny * oB[JB].size;
      const jB = kB(OB, GB),
        yB = kB(OB, GB);
      if (yB >= zB) throw new Error("Wrong PIZ_COMPRESSION BITMAP_SIZE");
      if (jB <= yB)
        for (let JB = 0; JB < yB - jB + 1; JB++) DB[JB + jB] = fB(OB, GB);
      const MB = new Uint16Array(PB),
        lB = function(BB, OB) {
          let GB = 0;
          for (let DB = 0; DB < PB; ++DB)(0 == DB || BB[DB >> 3] & 1 << (7 & DB)) && (OB[GB++] = DB);
          const YB = GB - 1;
          for (; GB < PB;) OB[GB++] = 0;
          return YB
        }(DB, MB),
        pB = UB(OB, GB);
      CB(BB.array, OB, GB, pB, YB, QB);
      for (let JB = 0; JB < BB.channels; ++JB) {
        const BB = oB[JB];
        for (let OB = 0; OB < oB[JB].size; ++OB) tB(YB, BB.start + OB, BB.nx, BB.size, BB.ny, BB.nx * BB.size, lB)
      }! function(BB, OB, GB) {
        for (let YB = 0; YB < GB; ++YB) OB[YB] = BB[OB[YB]]
      }(MB, YB, QB);
      let qB = 0;
      const ZB = new Uint8Array(YB.buffer.byteLength);
      for (let PB = 0; PB < BB.lines; PB++)
        for (let OB = 0; OB < BB.channels; OB++) {
          const BB = oB[OB],
            GB = BB.nx * BB.size,
            DB = new Uint8Array(YB.buffer, BB.end * JB, GB * JB);
          ZB.set(DB, qB), qB += GB * JB, BB.end += GB
        }
      return new DataView(ZB.buffer)
    }
    var QO, oO = GB(41097);
    ! function(BB) {
      BB[BB.Float = 0] = "Float", BB[BB.HalfFloat = 1] = "HalfFloat"
    }(QO || (QO = {}));
    class jO {}
    async function yO(BB, OB, GB, YB) {
      const DB = {
        size: 0,
        viewer: OB,
        array: new Uint8Array(OB.buffer),
        offset: GB,
        width: BB.dataWindow.xMax - BB.dataWindow.xMin + 1,
        height: BB.dataWindow.yMax - BB.dataWindow.yMin + 1,
        channels: BB.channels.length,
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
      switch (BB.compression) {
        case AB.NO_COMPRESSION:
          DB.lines = 1, DB.uncompress = BO;
          break;
        case AB.RLE_COMPRESSION:
          DB.lines = 1, DB.uncompress = OO;
          break;
        case AB.ZIPS_COMPRESSION:
          DB.lines = 1, DB.uncompress = GO, await oO.j.LoadScriptAsync(jO.FFLATEUrl);
          break;
        case AB.ZIP_COMPRESSION:
          DB.lines = 16, DB.uncompress = GO, await oO.j.LoadScriptAsync(jO.FFLATEUrl);
          break;
        case AB.PIZ_COMPRESSION:
          DB.lines = 32, DB.uncompress = DO;
          break;
        case AB.PXR24_COMPRESSION:
          DB.lines = 16, DB.uncompress = YO, await oO.j.LoadScriptAsync(jO.FFLATEUrl);
          break;
        default:
          throw new Error(AB[BB.compression] + " is unsupported")
      }
      DB.scanlineBlockSize = DB.lines;
      const QB = {};
      for (const jB of BB.channels) switch (jB.name) {
        case "R":
        case "G":
        case "B":
        case "A":
        case "Y":
          QB[jB.name] = !0, DB.type = jB.pixelType
      }
      let oB = !1;
      if (QB.R && QB.G && QB.B && QB.A) DB.outputChannels = 4, DB.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (QB.R && QB.G && QB.B) oB = !0, DB.outputChannels = 4, DB.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (QB.R && QB.G) DB.outputChannels = 2, DB.decodeChannels = {
        R: 0,
        G: 1
      };
      else if (QB.R) DB.outputChannels = 1, DB.decodeChannels = {
        R: 0
      };
      else {
        if (!QB.Y) throw new Error("EXRLoader.parse: file contains unsupported data channels.");
        DB.outputChannels = 1, DB.decodeChannels = {
          Y: 0
        }
      }
      if (1 === DB.type) switch (YB) {
        case QO.Float:
          DB.getter = mB, DB.inputSize = JB;
          break;
        case QO.HalfFloat:
          DB.getter = kB, DB.inputSize = JB
      } else {
        if (2 !== DB.type) throw new Error("Unsupported pixelType " + DB.type + " for " + BB.compression);
        switch (YB) {
          case QO.Float:
            DB.getter = uB, DB.inputSize = jB;
            break;
          case QO.HalfFloat:
            DB.getter = IB, DB.inputSize = jB
        }
      }
      DB.blockCount = DB.height / DB.scanlineBlockSize;
      for (let jB = 0; jB < DB.blockCount; jB++) KB(OB, GB);
      const yB = DB.width * DB.height * DB.outputChannels;
      switch (YB) {
        case QO.Float:
          DB.byteArray = new Float32Array(yB), DB.textureType = 1, oB && DB.byteArray.fill(1, 0, yB);
          break;
        case QO.HalfFloat:
          DB.byteArray = new Uint16Array(yB), DB.textureType = 2, oB && DB.byteArray.fill(15360, 0, yB);
          break;
        default:
          throw new Error("Unsupported type: " + YB)
      }
      let MB = 0;
      for (const jB of BB.channels) void 0 !== DB.decodeChannels[jB.name] && (DB.channelLineOffsets[jB.name] = MB * DB.width), MB += 2 * jB.pixelType;
      return DB.bytesPerLine = DB.width * MB, DB.outLineWidth = DB.width * DB.outputChannels, "INCREASING_Y" === BB.lineOrder ? DB.scanOrder = BB => BB : DB.scanOrder = BB => DB.height - 1 - BB, 4 == DB.outputChannels ? (DB.format = 5, DB.linearSpace = !0) : (DB.format = 6, DB.linearSpace = !1), DB
    }

    function JO(BB, OB, GB, YB) {
      const DB = {
        value: 0
      };
      for (let QB = 0; QB < BB.height / BB.scanlineBlockSize; QB++) {
        const oB = nB(GB, YB) - OB.dataWindow.yMin;
        BB.size = UB(GB, YB), BB.lines = oB + BB.scanlineBlockSize > BB.height ? BB.height - oB : BB.scanlineBlockSize;
        const jB = BB.size < BB.lines * BB.bytesPerLine && BB.uncompress ? BB.uncompress(BB) : BO(BB);
        YB.value += BB.size;
        for (let GB = 0; GB < BB.scanlineBlockSize; GB++) {
          const YB = QB * BB.scanlineBlockSize,
            oB = GB + BB.scanOrder(YB);
          if (oB >= BB.height) continue;
          const yB = GB * BB.bytesPerLine,
            JB = (BB.height - 1 - oB) * BB.outLineWidth;
          for (let GB = 0; GB < BB.channels; GB++) {
            const YB = OB.channels[GB].name,
              QB = BB.channelLineOffsets[YB],
              oB = BB.decodeChannels[YB];
            if (void 0 !== oB) {
              DB.value = yB + QB;
              for (let OB = 0; OB < BB.width; OB++) {
                const GB = JB + OB * BB.outputChannels + oB;
                BB.byteArray && (BB.byteArray[GB] = BB.getter(jB, DB))
              }
            }
          }
        }
      }
    }
    jO.DefaultOutputType = QO.HalfFloat, jO.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class MO {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(BB, OB, GB, YB, DB) {
        throw ".exr not supported in Cube."
      }
      loadData(BB, OB, GB) {
        const DB = new DataView(BB.buffer),
          QB = {
            value: 0
          },
          oB = rB(DB, QB);
        yO(oB, DB, QB, jO.DefaultOutputType).then((BB => {
          JO(BB, oB, DB, QB);
          const YB = oB.dataWindow.xMax - oB.dataWindow.xMin + 1,
            jB = oB.dataWindow.yMax - oB.dataWindow.yMin + 1;
          GB(YB, jB, OB.generateMipMaps, !1, (() => {
            const GB = OB.Lp();
            OB.format = oB.format, OB.type = BB.textureType, OB.invertY = !1, OB._gammaSpace = !oB.linearSpace, BB.byteArray && GB._uploadDataToTextureDirectly(OB, BB.byteArray, 0, 0, void 0, !0)
          }))
        })).catch((BB => {
          YB.b.Error("Failed to load EXR texture: ", BB)
        }))
      }
    }
    async function PO(BB) {
      const OB = new DataView(BB),
        GB = {
          value: 0
        },
        DB = rB(OB, GB);
      try {
        const BB = await yO(DB, OB, GB, QO.Float);
        return JO(BB, DB, OB, GB), BB.byteArray ? {
          width: DB.dataWindow.xMax - DB.dataWindow.xMin + 1,
          height: DB.dataWindow.yMax - DB.dataWindow.yMin + 1,
          data: new Float32Array(BB.byteArray)
        } : (YB.b.Error("Failed to decode EXR data: No byte array available."), {
          width: 0,
          height: 0,
          data: null
        })
      } catch (QB) {
        YB.b.Error("Failed to load EXR data: ", QB)
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
for (const BB in modules) Object.freeze(modules[BB]);