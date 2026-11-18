export const id = 295;
export const ids = [295];
export const modules = {
  40560: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      ReadExrDataAsync: () => kT,
      _ExrTextureLoader: () => oT
    });
    var VB = dB(37651),
      yB = dB(36157),
      pB = dB(38825);
    const lB = 4,
      JB = 4,
      YB = 1,
      gB = 2,
      oB = 8,
      kB = 65536,
      LB = kB >> 3,
      OB = 14,
      DB = 65537,
      uB = 1 << OB,
      HB = uB - 1,
      EB = 59,
      vB = 63,
      mB = 2 + vB - EB;
    var iB, NB;

    function tB(BB, TB) {
      const dB = new Uint8Array(BB);
      let VB = 0;
      for (; 0 != dB[TB.value + VB];) VB += 1;
      const yB = (new TextDecoder).decode(dB.slice(TB.value, TB.value + VB));
      return TB.value = TB.value + VB + 1, yB
    }

    function fB(BB, TB) {
      const dB = BB.getInt32(TB.value, !0);
      return TB.value += lB, dB
    }

    function sB(BB, TB) {
      const dB = BB.getUint32(TB.value, !0);
      return TB.value += lB, dB
    }

    function MB(BB, TB) {
      const dB = BB.getUint8(TB.value);
      return TB.value += YB, dB
    }

    function zB(BB, TB) {
      const dB = BB.getUint16(TB.value, !0);
      return TB.value += gB, dB
    }

    function wB(BB, TB) {
      const dB = BB[TB.value];
      return TB.value += YB, dB
    }

    function UB(BB, TB) {
      let dB;
      return dB = "getBigInt64" in DataView.prototype ? Number(BB.getBigInt64(TB.value, !0)) : BB.getUint32(TB.value + 4, !0) + Number(BB.getUint32(TB.value, !0) << 32), TB.value += oB, dB
    }

    function FB(BB, TB) {
      const dB = BB.getFloat32(TB.value, !0);
      return TB.value += JB, dB
    }

    function KB(BB, TB) {
      return (0, pB.d)(zB(BB, TB))
    }

    function rB(BB, TB) {
      return (0, pB.i)((0, yB.Clamp)(FB(BB, TB), -pB.g, pB.g))
    }

    function IB(BB, TB, dB, VB) {
      switch (dB) {
        case "string":
        case "stringvector":
        case "iccProfile":
          return function(BB, TB, dB) {
            const VB = (new TextDecoder).decode(new Uint8Array(BB).slice(TB.value, TB.value + dB));
            return TB.value = TB.value + dB, VB
          }(BB.buffer, TB, VB);
        case "chlist":
          return function(BB, TB, dB) {
            const VB = TB.value,
              yB = [];
            for (; TB.value < VB + dB - 1;) {
              const dB = tB(BB.buffer, TB),
                VB = fB(BB, TB),
                pB = MB(BB, TB);
              TB.value += 3;
              const lB = fB(BB, TB),
                JB = fB(BB, TB);
              yB.push({
                name: dB,
                pixelType: VB,
                pLinear: pB,
                xSampling: lB,
                ySampling: JB
              })
            }
            return TB.value += 1, yB
          }(BB, TB, VB);
        case "chromaticities":
          return function(BB, TB) {
            return {
              redX: FB(BB, TB),
              redY: FB(BB, TB),
              greenX: FB(BB, TB),
              greenY: FB(BB, TB),
              blueX: FB(BB, TB),
              blueY: FB(BB, TB),
              whiteX: FB(BB, TB),
              whiteY: FB(BB, TB)
            }
          }(BB, TB);
        case "compression":
          return function(BB, TB) {
            return MB(BB, TB)
          }(BB, TB);
        case "box2i":
          return function(BB, TB) {
            return {
              xMin: fB(BB, TB),
              yMin: fB(BB, TB),
              xMax: fB(BB, TB),
              yMax: fB(BB, TB)
            }
          }(BB, TB);
        case "lineOrder":
          return function(BB, TB) {
            const dB = MB(BB, TB);
            return NB[dB]
          }(BB, TB);
        case "float":
          return FB(BB, TB);
        case "v2f":
          return function(BB, TB) {
            return [FB(BB, TB), FB(BB, TB)]
          }(BB, TB);
        case "v3f":
          return function(BB, TB) {
            return [FB(BB, TB), FB(BB, TB), FB(BB, TB)]
          }(BB, TB);
        case "int":
          return fB(BB, TB);
        case "rational":
          return function(BB, TB) {
            return [fB(BB, TB), sB(BB, TB)]
          }(BB, TB);
        case "timecode":
          return function(BB, TB) {
            return [sB(BB, TB), sB(BB, TB)]
          }(BB, TB);
        case "preview":
          return TB.value += VB, "skipped";
        default:
          return void(TB.value += VB)
      }
    }

    function cB(BB) {
      for (let TB = 1; TB < BB.length; TB++) {
        const dB = BB[TB - 1] + BB[TB] - 128;
        BB[TB] = dB
      }
    }

    function SB(BB, TB) {
      let dB = 0,
        VB = Math.floor((BB.length + 1) / 2),
        yB = 0;
      const pB = BB.length - 1;
      for (; !(yB > pB) && (TB[yB++] = BB[dB++], !(yB > pB));) TB[yB++] = BB[VB++]
    }! function(BB) {
      BB[BB.NO_COMPRESSION = 0] = "NO_COMPRESSION", BB[BB.RLE_COMPRESSION = 1] = "RLE_COMPRESSION", BB[BB.ZIPS_COMPRESSION = 2] = "ZIPS_COMPRESSION", BB[BB.ZIP_COMPRESSION = 3] = "ZIP_COMPRESSION", BB[BB.PIZ_COMPRESSION = 4] = "PIZ_COMPRESSION", BB[BB.PXR24_COMPRESSION = 5] = "PXR24_COMPRESSION"
    }(iB || (iB = {})),
    function(BB) {
      BB[BB.INCREASING_Y = 0] = "INCREASING_Y", BB[BB.DECREASING_Y = 1] = "DECREASING_Y"
    }(NB || (NB = {}));
    const PB = 20000630;

    function QB(BB, TB) {
      if (BB.getUint32(0, !0) != PB) throw new Error("Incorrect OpenEXR format");
      const dB = BB.getUint8(4),
        yB = BB.getUint8(5),
        pB = {
          singleTile: !!(2 & yB),
          longName: !!(4 & yB),
          deepFormat: !!(8 & yB),
          multiPart: !!(16 & yB)
        };
      TB.value = 8;
      const lB = {};
      let JB = !0;
      for (; JB;) {
        const dB = tB(BB.buffer, TB);
        if (dB) {
          const yB = tB(BB.buffer, TB),
            pB = IB(BB, TB, yB, sB(BB, TB));
          void 0 === pB ? VB.b.Warn(`Unknown header attribute type ${yB}'.`) : lB[dB] = pB
        } else JB = !1
      }
      if (0 != (-5 & yB)) throw new Error("Unsupported file format");
      return {
        version: dB,
        spec: pB,
        ...lB
      }
    }
    const RB = 32768,
      aB = 65535;

    function ZB(BB, TB, dB, VB, yB) {
      for (; dB < BB;) TB = TB << 8 | wB(VB, yB), dB += 8;
      return {
        l: TB >> (dB -= BB) & (1 << BB) - 1,
        c: TB,
        lc: dB
      }
    }

    function XB(BB, TB, dB, VB) {
      return {
        c: BB = BB << 8 | wB(dB, VB),
        lc: TB += 8
      }
    }

    function WB(BB, TB, dB, VB, yB, pB, lB, JB, YB) {
      if (BB == TB) {
        if (VB < 8) {
          const BB = XB(dB, VB, yB, pB);
          dB = BB.c, VB = BB.lc
        }
        let BB = dB >> (VB -= 8);
        if (BB = new Uint8Array([BB])[0], JB.value + BB > YB) return null;
        const TB = lB[JB.value - 1];
        for (; BB-- > 0;) lB[JB.value++] = TB
      } else {
        if (!(JB.value < YB)) return null;
        lB[JB.value++] = BB
      }
      return {
        c: dB,
        lc: VB
      }
    }
    const hB = new Array(59);

    function CB(BB, TB, dB, VB, yB, pB) {
      const lB = TB;
      let JB = 0,
        YB = 0;
      for (; VB <= yB; VB++) {
        if (lB.value - TB.value > dB) return;
        let gB = ZB(6, JB, YB, BB, lB);
        const oB = gB.l;
        if (JB = gB.c, YB = gB.lc, pB[VB] = oB, oB == vB) {
          if (lB.value - TB.value > dB) throw new Error("Error in HufUnpackEncTable");
          gB = ZB(8, JB, YB, BB, lB);
          let oB = gB.l + mB;
          if (JB = gB.c, YB = gB.lc, VB + oB > yB + 1) throw new Error("Error in HufUnpackEncTable");
          for (; oB--;) pB[VB++] = 0;
          VB--
        } else if (oB >= EB) {
          let BB = oB - EB + 2;
          if (VB + BB > yB + 1) throw new Error("Error in HufUnpackEncTable");
          for (; BB--;) pB[VB++] = 0;
          VB--
        }
      }! function(BB) {
        for (let dB = 0; dB <= 58; ++dB) hB[dB] = 0;
        for (let dB = 0; dB < DB; ++dB) hB[BB[dB]] += 1;
        let TB = 0;
        for (let dB = 58; dB > 0; --dB) {
          const BB = TB + hB[dB] >> 1;
          hB[dB] = TB, TB = BB
        }
        for (let dB = 0; dB < DB; ++dB) {
          const TB = BB[dB];
          TB > 0 && (BB[dB] = TB | hB[TB]++ << 6)
        }
      }(pB)
    }

    function GB(BB) {
      return 63 & BB
    }

    function qB(BB) {
      return BB >> 6
    }

    function xB(BB, TB, dB, VB, yB, pB) {
      const lB = dB.value,
        JB = sB(TB, dB),
        YB = sB(TB, dB);
      dB.value += 4;
      const gB = sB(TB, dB);
      if (dB.value += 4, JB < 0 || JB >= DB || YB < 0 || YB >= DB) throw new Error("Wrong HUF_ENCSIZE");
      const oB = new Array(DB),
        kB = new Array(uB);
      ! function(BB) {
        for (let TB = 0; TB < uB; TB++) BB[TB] = {}, BB[TB].len = 0, BB[TB].lit = 0, BB[TB].p = null
      }(kB);
      if (CB(BB, dB, VB - (dB.value - lB), JB, YB, oB), gB > 8 * (VB - (dB.value - lB))) throw new Error("Wrong hufUncompress");
      ! function(BB, TB, dB, VB) {
        for (; TB <= dB; TB++) {
          const dB = qB(BB[TB]),
            yB = GB(BB[TB]);
          if (dB >> yB) throw new Error("Invalid table entry");
          if (yB > OB) {
            const BB = VB[dB >> yB - OB];
            if (BB.len) throw new Error("Invalid table entry");
            if (BB.lit++, BB.p) {
              const TB = BB.p;
              BB.p = new Array(BB.lit);
              for (let dB = 0; dB < BB.lit - 1; ++dB) BB.p[dB] = TB[dB]
            } else BB.p = new Array(1);
            BB.p[BB.lit - 1] = TB
          } else if (yB) {
            let BB = 0;
            for (let pB = 1 << OB - yB; pB > 0; pB--) {
              const pB = VB[(dB << OB - yB) + BB];
              if (pB.len || pB.p) throw new Error("Invalid table entry");
              pB.len = yB, pB.lit = TB, BB++
            }
          }
        }
      }(oB, JB, YB, kB),
      function(BB, TB, dB, VB, yB, pB, lB, JB, YB) {
        let gB = 0,
          oB = 0;
        const kB = lB,
          LB = Math.trunc(VB.value + (yB + 7) / 8);
        for (; VB.value < LB;) {
          let yB = XB(gB, oB, dB, VB);
          for (gB = yB.c, oB = yB.lc; oB >= OB;) {
            const lB = TB[gB >> oB - OB & HB];
            if (lB.len) {
              oB -= lB.len;
              const BB = WB(lB.lit, pB, gB, oB, dB, VB, JB, YB, kB);
              BB && (gB = BB.c, oB = BB.lc)
            } else {
              if (!lB.p) throw new Error("hufDecode issues");
              let TB;
              for (TB = 0; TB < lB.lit; TB++) {
                const OB = GB(BB[lB.p[TB]]);
                for (; oB < OB && VB.value < LB;) yB = XB(gB, oB, dB, VB), gB = yB.c, oB = yB.lc;
                if (oB >= OB && qB(BB[lB.p[TB]]) == (gB >> oB - OB & (1 << OB) - 1)) {
                  oB -= OB;
                  const BB = WB(lB.p[TB], pB, gB, oB, dB, VB, JB, YB, kB);
                  BB && (gB = BB.c, oB = BB.lc);
                  break
                }
              }
              if (TB == lB.lit) throw new Error("HufDecode issues")
            }
          }
        }
        const DB = 8 - yB & 7;
        for (gB >>= DB, oB -= DB; oB > 0;) {
          const BB = TB[gB << OB - oB & HB];
          if (!BB.len) throw new Error("HufDecode issues");
          {
            oB -= BB.len;
            const TB = WB(BB.lit, pB, gB, oB, dB, VB, JB, YB, kB);
            TB && (gB = TB.c, oB = TB.lc)
          }
        }
      }(oB, kB, BB, dB, gB, YB, pB, yB, {
        value: 0
      })
    }

    function jB(BB) {
      return 65535 & BB
    }

    function AB(BB) {
      const TB = jB(BB);
      return TB > 32767 ? TB - 65536 : TB
    }

    function bB(BB, TB) {
      const dB = AB(BB),
        VB = AB(TB),
        yB = dB + (1 & VB) + (VB >> 1);
      return {
        a: yB,
        b: yB - VB
      }
    }

    function nB(BB, TB) {
      const dB = jB(BB),
        VB = jB(TB),
        yB = dB - (VB >> 1) & aB;
      return {
        a: VB + yB - RB & aB,
        b: yB
      }
    }

    function eB(BB, TB, dB, VB, yB, pB, lB) {
      const JB = lB < 16384,
        YB = dB > yB ? yB : dB;
      let gB, oB, kB = 1;
      for (; kB <= YB;) kB <<= 1;
      for (kB >>= 1, gB = kB, kB >>= 1; kB >= 1;) {
        oB = 0;
        const lB = oB + pB * (yB - gB),
          YB = pB * kB,
          LB = pB * gB,
          OB = VB * kB,
          DB = VB * gB;
        let uB, HB, EB, vB;
        for (; oB <= lB; oB += LB) {
          let yB = oB;
          const pB = oB + VB * (dB - gB);
          for (; yB <= pB; yB += DB) {
            const dB = yB + OB,
              VB = yB + YB,
              pB = VB + OB;
            if (JB) {
              let lB = bB(BB[yB + TB], BB[VB + TB]);
              uB = lB.a, EB = lB.b, lB = bB(BB[dB + TB], BB[pB + TB]), HB = lB.a, vB = lB.b, lB = bB(uB, HB), BB[yB + TB] = lB.a, BB[dB + TB] = lB.b, lB = bB(EB, vB), BB[VB + TB] = lB.a, BB[pB + TB] = lB.b
            } else {
              let lB = nB(BB[yB + TB], BB[VB + TB]);
              uB = lB.a, EB = lB.b, lB = nB(BB[dB + TB], BB[pB + TB]), HB = lB.a, vB = lB.b, lB = nB(uB, HB), BB[yB + TB] = lB.a, BB[dB + TB] = lB.b, lB = nB(EB, vB), BB[VB + TB] = lB.a, BB[pB + TB] = lB.b
            }
          }
          if (dB & kB) {
            const dB = yB + YB;
            let VB;
            VB = JB ? bB(BB[yB + TB], BB[dB + TB]) : nB(BB[yB + TB], BB[dB + TB]), uB = VB.a, BB[dB + TB] = VB.b, BB[yB + TB] = uB
          }
        }
        if (yB & kB) {
          let yB = oB;
          const pB = oB + VB * (dB - gB);
          for (; yB <= pB; yB += DB) {
            const dB = yB + OB;
            let VB;
            VB = JB ? bB(BB[yB + TB], BB[dB + TB]) : nB(BB[yB + TB], BB[dB + TB]), uB = VB.a, BB[dB + TB] = VB.b, BB[yB + TB] = uB
          }
        }
        gB = kB, kB >>= 1
      }
      return oB
    }

    function BT(BB) {
      return new DataView(BB.array.buffer, BB.offset.value, BB.size)
    }

    function TT(BB) {
      const TB = BB.viewer.buffer.slice(BB.offset.value, BB.offset.value + BB.size),
        dB = new Uint8Array(function(BB) {
          let TB = BB.byteLength;
          const dB = [];
          let VB = 0;
          const yB = new DataView(BB);
          for (; TB > 0;) {
            const BB = yB.getInt8(VB++);
            if (BB < 0) {
              const pB = -BB;
              TB -= pB + 1;
              for (let BB = 0; BB < pB; BB++) dB.push(yB.getUint8(VB++))
            } else {
              const pB = BB;
              TB -= 2;
              const lB = yB.getUint8(VB++);
              for (let BB = 0; BB < pB + 1; BB++) dB.push(lB)
            }
          }
          return dB
        }(TB)),
        VB = new Uint8Array(dB.length);
      return cB(dB), SB(dB, VB), new DataView(VB.buffer)
    }

    function dT(BB) {
      const TB = BB.array.slice(BB.offset.value, BB.offset.value + BB.size),
        dB = fflate.unzlibSync(TB),
        VB = new Uint8Array(dB.length);
      return cB(dB), SB(dB, VB), new DataView(VB.buffer)
    }

    function VT(BB) {
      const TB = BB.array.slice(BB.offset.value, BB.offset.value + BB.size),
        dB = fflate.unzlibSync(TB),
        VB = BB.lines * BB.channels * BB.width,
        yB = 1 == BB.type ? new Uint16Array(VB) : new Uint32Array(VB);
      let pB = 0,
        lB = 0;
      const JB = new Array(4);
      for (let YB = 0; YB < BB.lines; YB++)
        for (let TB = 0; TB < BB.channels; TB++) {
          let TB = 0;
          switch (BB.type) {
            case 1:
              JB[0] = pB, JB[1] = JB[0] + BB.width, pB = JB[1] + BB.width;
              for (let VB = 0; VB < BB.width; ++VB) {
                TB += dB[JB[0]++] << 8 | dB[JB[1]++], yB[lB] = TB, lB++
              }
              break;
            case 2:
              JB[0] = pB, JB[1] = JB[0] + BB.width, JB[2] = JB[1] + BB.width, pB = JB[2] + BB.width;
              for (let VB = 0; VB < BB.width; ++VB) {
                TB += dB[JB[0]++] << 24 | dB[JB[1]++] << 16 | dB[JB[2]++] << 8, yB[lB] = TB, lB++
              }
          }
        }
      return new DataView(yB.buffer)
    }

    function yT(BB) {
      const TB = BB.viewer,
        dB = {
          value: BB.offset.value
        },
        VB = new Uint16Array(BB.width * BB.scanlineBlockSize * (BB.channels * BB.type)),
        yB = new Uint8Array(LB);
      let pB = 0;
      const lB = new Array(BB.channels);
      for (let gB = 0; gB < BB.channels; gB++) lB[gB] = {}, lB[gB].start = pB, lB[gB].end = lB[gB].start, lB[gB].nx = BB.width, lB[gB].ny = BB.lines, lB[gB].size = BB.type, pB += lB[gB].nx * lB[gB].ny * lB[gB].size;
      const JB = zB(TB, dB),
        YB = zB(TB, dB);
      if (YB >= LB) throw new Error("Wrong PIZ_COMPRESSION BITMAP_SIZE");
      if (JB <= YB)
        for (let gB = 0; gB < YB - JB + 1; gB++) yB[gB + JB] = MB(TB, dB);
      const oB = new Uint16Array(kB),
        OB = function(BB, TB) {
          let dB = 0;
          for (let yB = 0; yB < kB; ++yB)(0 == yB || BB[yB >> 3] & 1 << (7 & yB)) && (TB[dB++] = yB);
          const VB = dB - 1;
          for (; dB < kB;) TB[dB++] = 0;
          return VB
        }(yB, oB),
        DB = sB(TB, dB);
      xB(BB.array, TB, dB, DB, VB, pB);
      for (let gB = 0; gB < BB.channels; ++gB) {
        const BB = lB[gB];
        for (let TB = 0; TB < lB[gB].size; ++TB) eB(VB, BB.start + TB, BB.nx, BB.size, BB.ny, BB.nx * BB.size, OB)
      }! function(BB, TB, dB) {
        for (let VB = 0; VB < dB; ++VB) TB[VB] = BB[TB[VB]]
      }(oB, VB, pB);
      let uB = 0;
      const HB = new Uint8Array(VB.buffer.byteLength);
      for (let kB = 0; kB < BB.lines; kB++)
        for (let TB = 0; TB < BB.channels; TB++) {
          const BB = lB[TB],
            dB = BB.nx * BB.size,
            yB = new Uint8Array(VB.buffer, BB.end * gB, dB * gB);
          HB.set(yB, uB), uB += dB * gB, BB.end += dB
        }
      return new DataView(HB.buffer)
    }
    var pT, lT = dB(38848);
    ! function(BB) {
      BB[BB.Float = 0] = "Float", BB[BB.HalfFloat = 1] = "HalfFloat"
    }(pT || (pT = {}));
    class JT {}
    async function YT(BB, TB, dB, VB) {
      const yB = {
        size: 0,
        viewer: TB,
        array: new Uint8Array(TB.buffer),
        offset: dB,
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
        case iB.NO_COMPRESSION:
          yB.lines = 1, yB.uncompress = BT;
          break;
        case iB.RLE_COMPRESSION:
          yB.lines = 1, yB.uncompress = TT;
          break;
        case iB.ZIPS_COMPRESSION:
          yB.lines = 1, yB.uncompress = dT, await lT.h.LoadScriptAsync(JT.FFLATEUrl);
          break;
        case iB.ZIP_COMPRESSION:
          yB.lines = 16, yB.uncompress = dT, await lT.h.LoadScriptAsync(JT.FFLATEUrl);
          break;
        case iB.PIZ_COMPRESSION:
          yB.lines = 32, yB.uncompress = yT;
          break;
        case iB.PXR24_COMPRESSION:
          yB.lines = 16, yB.uncompress = VT, await lT.h.LoadScriptAsync(JT.FFLATEUrl);
          break;
        default:
          throw new Error(iB[BB.compression] + " is unsupported")
      }
      yB.scanlineBlockSize = yB.lines;
      const pB = {};
      for (const JB of BB.channels) switch (JB.name) {
        case "R":
        case "G":
        case "B":
        case "A":
        case "Y":
          pB[JB.name] = !0, yB.type = JB.pixelType
      }
      let lB = !1;
      if (pB.R && pB.G && pB.B && pB.A) yB.outputChannels = 4, yB.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (pB.R && pB.G && pB.B) lB = !0, yB.outputChannels = 4, yB.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (pB.R && pB.G) yB.outputChannels = 2, yB.decodeChannels = {
        R: 0,
        G: 1
      };
      else if (pB.R) yB.outputChannels = 1, yB.decodeChannels = {
        R: 0
      };
      else {
        if (!pB.Y) throw new Error("EXRLoader.parse: file contains unsupported data channels.");
        yB.outputChannels = 1, yB.decodeChannels = {
          Y: 0
        }
      }
      if (1 === yB.type) switch (VB) {
        case pT.Float:
          yB.getter = KB, yB.inputSize = gB;
          break;
        case pT.HalfFloat:
          yB.getter = zB, yB.inputSize = gB
      } else {
        if (2 !== yB.type) throw new Error("Unsupported pixelType " + yB.type + " for " + BB.compression);
        switch (VB) {
          case pT.Float:
            yB.getter = FB, yB.inputSize = JB;
            break;
          case pT.HalfFloat:
            yB.getter = rB, yB.inputSize = JB
        }
      }
      yB.blockCount = yB.height / yB.scanlineBlockSize;
      for (let JB = 0; JB < yB.blockCount; JB++) UB(TB, dB);
      const YB = yB.width * yB.height * yB.outputChannels;
      switch (VB) {
        case pT.Float:
          yB.byteArray = new Float32Array(YB), yB.textureType = 1, lB && yB.byteArray.fill(1, 0, YB);
          break;
        case pT.HalfFloat:
          yB.byteArray = new Uint16Array(YB), yB.textureType = 2, lB && yB.byteArray.fill(15360, 0, YB);
          break;
        default:
          throw new Error("Unsupported type: " + VB)
      }
      let oB = 0;
      for (const JB of BB.channels) void 0 !== yB.decodeChannels[JB.name] && (yB.channelLineOffsets[JB.name] = oB * yB.width), oB += 2 * JB.pixelType;
      return yB.bytesPerLine = yB.width * oB, yB.outLineWidth = yB.width * yB.outputChannels, "INCREASING_Y" === BB.lineOrder ? yB.scanOrder = BB => BB : yB.scanOrder = BB => yB.height - 1 - BB, 4 == yB.outputChannels ? (yB.format = 5, yB.linearSpace = !0) : (yB.format = 6, yB.linearSpace = !1), yB
    }

    function gT(BB, TB, dB, VB) {
      const yB = {
        value: 0
      };
      for (let pB = 0; pB < BB.height / BB.scanlineBlockSize; pB++) {
        const lB = fB(dB, VB) - TB.dataWindow.yMin;
        BB.size = sB(dB, VB), BB.lines = lB + BB.scanlineBlockSize > BB.height ? BB.height - lB : BB.scanlineBlockSize;
        const JB = BB.size < BB.lines * BB.bytesPerLine && BB.uncompress ? BB.uncompress(BB) : BT(BB);
        VB.value += BB.size;
        for (let dB = 0; dB < BB.scanlineBlockSize; dB++) {
          const VB = pB * BB.scanlineBlockSize,
            lB = dB + BB.scanOrder(VB);
          if (lB >= BB.height) continue;
          const YB = dB * BB.bytesPerLine,
            gB = (BB.height - 1 - lB) * BB.outLineWidth;
          for (let dB = 0; dB < BB.channels; dB++) {
            const VB = TB.channels[dB].name,
              pB = BB.channelLineOffsets[VB],
              lB = BB.decodeChannels[VB];
            if (void 0 !== lB) {
              yB.value = YB + pB;
              for (let TB = 0; TB < BB.width; TB++) {
                const dB = gB + TB * BB.outputChannels + lB;
                BB.byteArray && (BB.byteArray[dB] = BB.getter(JB, yB))
              }
            }
          }
        }
      }
    }
    JT.DefaultOutputType = pT.HalfFloat, JT.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class oT {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(BB, TB, dB, VB, yB) {
        throw ".exr not supported in Cube."
      }
      loadData(BB, TB, dB) {
        const yB = new DataView(BB.buffer),
          pB = {
            value: 0
          },
          lB = QB(yB, pB);
        YT(lB, yB, pB, JT.DefaultOutputType).then((BB => {
          gT(BB, lB, yB, pB);
          const VB = lB.dataWindow.xMax - lB.dataWindow.xMin + 1,
            JB = lB.dataWindow.yMax - lB.dataWindow.yMin + 1;
          dB(VB, JB, TB.generateMipMaps, !1, (() => {
            const dB = TB.PD();
            TB.format = lB.format, TB.type = BB.textureType, TB.invertY = !1, TB._gammaSpace = !lB.linearSpace, BB.byteArray && dB._uploadDataToTextureDirectly(TB, BB.byteArray, 0, 0, void 0, !0)
          }))
        })).catch((BB => {
          VB.b.Error("Failed to load EXR texture: ", BB)
        }))
      }
    }
    async function kT(BB) {
      const TB = new DataView(BB),
        dB = {
          value: 0
        },
        yB = QB(TB, dB);
      try {
        const BB = await YT(yB, TB, dB, pT.Float);
        return gT(BB, yB, TB, dB), BB.byteArray ? {
          width: yB.dataWindow.xMax - yB.dataWindow.xMin + 1,
          height: yB.dataWindow.yMax - yB.dataWindow.yMin + 1,
          data: new Float32Array(BB.byteArray)
        } : (VB.b.Error("Failed to decode EXR data: No byte array available."), {
          width: 0,
          height: 0,
          data: null
        })
      } catch (pB) {
        VB.b.Error("Failed to load EXR data: ", pB)
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