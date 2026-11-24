export const id = 320;
export const ids = [320];
export const modules = {
  41950: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      ReadExrDataAsync: () => pj,
      _ExrTextureLoader: () => aj
    });
    var QB = zB(38783),
      nB = zB(37208),
      dB = zB(40130);
    const IB = 4,
      NB = 4,
      uB = 1,
      UB = 2,
      aB = 8,
      pB = 65536,
      rB = pB >> 3,
      sB = 14,
      JB = 65537,
      mB = 1 << sB,
      yB = mB - 1,
      kB = 59,
      GB = 63,
      LB = 2 + GB - kB;
    var gB, tB;

    function SB(BB, jB) {
      const zB = new Uint8Array(BB);
      let QB = 0;
      for (; 0 != zB[jB.value + QB];) QB += 1;
      const nB = (new TextDecoder).decode(zB.slice(jB.value, jB.value + QB));
      return jB.value = jB.value + QB + 1, nB
    }

    function MB(BB, jB) {
      const zB = BB.getInt32(jB.value, !0);
      return jB.value += IB, zB
    }

    function EB(BB, jB) {
      const zB = BB.getUint32(jB.value, !0);
      return jB.value += IB, zB
    }

    function iB(BB, jB) {
      const zB = BB.getUint8(jB.value);
      return jB.value += uB, zB
    }

    function qB(BB, jB) {
      const zB = BB.getUint16(jB.value, !0);
      return jB.value += UB, zB
    }

    function fB(BB, jB) {
      const zB = BB[jB.value];
      return jB.value += uB, zB
    }

    function oB(BB, jB) {
      let zB;
      return zB = "getBigInt64" in DataView.prototype ? Number(BB.getBigInt64(jB.value, !0)) : BB.getUint32(jB.value + 4, !0) + Number(BB.getUint32(jB.value, !0) << 32), jB.value += aB, zB
    }

    function HB(BB, jB) {
      const zB = BB.getFloat32(jB.value, !0);
      return jB.value += NB, zB
    }

    function DB(BB, jB) {
      return (0, dB.c)(qB(BB, jB))
    }

    function FB(BB, jB) {
      return (0, dB.f)((0, nB.Clamp)(HB(BB, jB), -dB.e, dB.e))
    }

    function YB(BB, jB, zB, QB) {
      switch (zB) {
        case "string":
        case "stringvector":
        case "iccProfile":
          return function(BB, jB, zB) {
            const QB = (new TextDecoder).decode(new Uint8Array(BB).slice(jB.value, jB.value + zB));
            return jB.value = jB.value + zB, QB
          }(BB.buffer, jB, QB);
        case "chlist":
          return function(BB, jB, zB) {
            const QB = jB.value,
              nB = [];
            for (; jB.value < QB + zB - 1;) {
              const zB = SB(BB.buffer, jB),
                QB = MB(BB, jB),
                dB = iB(BB, jB);
              jB.value += 3;
              const IB = MB(BB, jB),
                NB = MB(BB, jB);
              nB.push({
                name: zB,
                pixelType: QB,
                pLinear: dB,
                xSampling: IB,
                ySampling: NB
              })
            }
            return jB.value += 1, nB
          }(BB, jB, QB);
        case "chromaticities":
          return function(BB, jB) {
            return {
              redX: HB(BB, jB),
              redY: HB(BB, jB),
              greenX: HB(BB, jB),
              greenY: HB(BB, jB),
              blueX: HB(BB, jB),
              blueY: HB(BB, jB),
              whiteX: HB(BB, jB),
              whiteY: HB(BB, jB)
            }
          }(BB, jB);
        case "compression":
          return function(BB, jB) {
            return iB(BB, jB)
          }(BB, jB);
        case "box2i":
          return function(BB, jB) {
            return {
              xMin: MB(BB, jB),
              yMin: MB(BB, jB),
              xMax: MB(BB, jB),
              yMax: MB(BB, jB)
            }
          }(BB, jB);
        case "lineOrder":
          return function(BB, jB) {
            const zB = iB(BB, jB);
            return tB[zB]
          }(BB, jB);
        case "float":
          return HB(BB, jB);
        case "v2f":
          return function(BB, jB) {
            return [HB(BB, jB), HB(BB, jB)]
          }(BB, jB);
        case "v3f":
          return function(BB, jB) {
            return [HB(BB, jB), HB(BB, jB), HB(BB, jB)]
          }(BB, jB);
        case "int":
          return MB(BB, jB);
        case "rational":
          return function(BB, jB) {
            return [MB(BB, jB), EB(BB, jB)]
          }(BB, jB);
        case "timecode":
          return function(BB, jB) {
            return [EB(BB, jB), EB(BB, jB)]
          }(BB, jB);
        case "preview":
          return jB.value += QB, "skipped";
        default:
          return void(jB.value += QB)
      }
    }

    function VB(BB) {
      for (let jB = 1; jB < BB.length; jB++) {
        const zB = BB[jB - 1] + BB[jB] - 128;
        BB[jB] = zB
      }
    }

    function hB(BB, jB) {
      let zB = 0,
        QB = Math.floor((BB.length + 1) / 2),
        nB = 0;
      const dB = BB.length - 1;
      for (; !(nB > dB) && (jB[nB++] = BB[zB++], !(nB > dB));) jB[nB++] = BB[QB++]
    }! function(BB) {
      BB[BB.NO_COMPRESSION = 0] = "NO_COMPRESSION", BB[BB.RLE_COMPRESSION = 1] = "RLE_COMPRESSION", BB[BB.ZIPS_COMPRESSION = 2] = "ZIPS_COMPRESSION", BB[BB.ZIP_COMPRESSION = 3] = "ZIP_COMPRESSION", BB[BB.PIZ_COMPRESSION = 4] = "PIZ_COMPRESSION", BB[BB.PXR24_COMPRESSION = 5] = "PXR24_COMPRESSION"
    }(gB || (gB = {})),
    function(BB) {
      BB[BB.INCREASING_Y = 0] = "INCREASING_Y", BB[BB.DECREASING_Y = 1] = "DECREASING_Y"
    }(tB || (tB = {}));
    const XB = 20000630;

    function ZB(BB, jB) {
      if (BB.getUint32(0, !0) != XB) throw new Error("Incorrect OpenEXR format");
      const zB = BB.getUint8(4),
        nB = BB.getUint8(5),
        dB = {
          singleTile: !!(2 & nB),
          longName: !!(4 & nB),
          deepFormat: !!(8 & nB),
          multiPart: !!(16 & nB)
        };
      jB.value = 8;
      const IB = {};
      let NB = !0;
      for (; NB;) {
        const zB = SB(BB.buffer, jB);
        if (zB) {
          const nB = SB(BB.buffer, jB),
            dB = YB(BB, jB, nB, EB(BB, jB));
          void 0 === dB ? QB.c.Warn(`Unknown header attribute type ${nB}'.`) : IB[zB] = dB
        } else NB = !1
      }
      if (0 != (-5 & nB)) throw new Error("Unsupported file format");
      return {
        version: zB,
        spec: dB,
        ...IB
      }
    }
    const AB = 32768,
      TB = 65535;

    function PB(BB, jB, zB, QB, nB) {
      for (; zB < BB;) jB = jB << 8 | fB(QB, nB), zB += 8;
      return {
        l: jB >> (zB -= BB) & (1 << BB) - 1,
        c: jB,
        lc: zB
      }
    }

    function WB(BB, jB, zB, QB) {
      return {
        c: BB = BB << 8 | fB(zB, QB),
        lc: jB += 8
      }
    }

    function eB(BB, jB, zB, QB, nB, dB, IB, NB, uB) {
      if (BB == jB) {
        if (QB < 8) {
          const BB = WB(zB, QB, nB, dB);
          zB = BB.c, QB = BB.lc
        }
        let BB = zB >> (QB -= 8);
        if (BB = new Uint8Array([BB])[0], NB.value + BB > uB) return null;
        const jB = IB[NB.value - 1];
        for (; BB-- > 0;) IB[NB.value++] = jB
      } else {
        if (!(NB.value < uB)) return null;
        IB[NB.value++] = BB
      }
      return {
        c: zB,
        lc: QB
      }
    }
    const lB = new Array(59);

    function wB(BB, jB, zB, QB, nB, dB) {
      const IB = jB;
      let NB = 0,
        uB = 0;
      for (; QB <= nB; QB++) {
        if (IB.value - jB.value > zB) return;
        let UB = PB(6, NB, uB, BB, IB);
        const aB = UB.l;
        if (NB = UB.c, uB = UB.lc, dB[QB] = aB, aB == GB) {
          if (IB.value - jB.value > zB) throw new Error("Error in HufUnpackEncTable");
          UB = PB(8, NB, uB, BB, IB);
          let aB = UB.l + LB;
          if (NB = UB.c, uB = UB.lc, QB + aB > nB + 1) throw new Error("Error in HufUnpackEncTable");
          for (; aB--;) dB[QB++] = 0;
          QB--
        } else if (aB >= kB) {
          let BB = aB - kB + 2;
          if (QB + BB > nB + 1) throw new Error("Error in HufUnpackEncTable");
          for (; BB--;) dB[QB++] = 0;
          QB--
        }
      }! function(BB) {
        for (let zB = 0; zB <= 58; ++zB) lB[zB] = 0;
        for (let zB = 0; zB < JB; ++zB) lB[BB[zB]] += 1;
        let jB = 0;
        for (let zB = 58; zB > 0; --zB) {
          const BB = jB + lB[zB] >> 1;
          lB[zB] = jB, jB = BB
        }
        for (let zB = 0; zB < JB; ++zB) {
          const jB = BB[zB];
          jB > 0 && (BB[zB] = jB | lB[jB]++ << 6)
        }
      }(dB)
    }

    function xB(BB) {
      return 63 & BB
    }

    function KB(BB) {
      return BB >> 6
    }

    function CB(BB, jB, zB, QB, nB, dB) {
      const IB = zB.value,
        NB = EB(jB, zB),
        uB = EB(jB, zB);
      zB.value += 4;
      const UB = EB(jB, zB);
      if (zB.value += 4, NB < 0 || NB >= JB || uB < 0 || uB >= JB) throw new Error("Wrong HUF_ENCSIZE");
      const aB = new Array(JB),
        pB = new Array(mB);
      ! function(BB) {
        for (let jB = 0; jB < mB; jB++) BB[jB] = {}, BB[jB].len = 0, BB[jB].lit = 0, BB[jB].p = null
      }(pB);
      if (wB(BB, zB, QB - (zB.value - IB), NB, uB, aB), UB > 8 * (QB - (zB.value - IB))) throw new Error("Wrong hufUncompress");
      ! function(BB, jB, zB, QB) {
        for (; jB <= zB; jB++) {
          const zB = KB(BB[jB]),
            nB = xB(BB[jB]);
          if (zB >> nB) throw new Error("Invalid table entry");
          if (nB > sB) {
            const BB = QB[zB >> nB - sB];
            if (BB.len) throw new Error("Invalid table entry");
            if (BB.lit++, BB.p) {
              const jB = BB.p;
              BB.p = new Array(BB.lit);
              for (let zB = 0; zB < BB.lit - 1; ++zB) BB.p[zB] = jB[zB]
            } else BB.p = new Array(1);
            BB.p[BB.lit - 1] = jB
          } else if (nB) {
            let BB = 0;
            for (let dB = 1 << sB - nB; dB > 0; dB--) {
              const dB = QB[(zB << sB - nB) + BB];
              if (dB.len || dB.p) throw new Error("Invalid table entry");
              dB.len = nB, dB.lit = jB, BB++
            }
          }
        }
      }(aB, NB, uB, pB),
      function(BB, jB, zB, QB, nB, dB, IB, NB, uB) {
        let UB = 0,
          aB = 0;
        const pB = IB,
          rB = Math.trunc(QB.value + (nB + 7) / 8);
        for (; QB.value < rB;) {
          let nB = WB(UB, aB, zB, QB);
          for (UB = nB.c, aB = nB.lc; aB >= sB;) {
            const IB = jB[UB >> aB - sB & yB];
            if (IB.len) {
              aB -= IB.len;
              const BB = eB(IB.lit, dB, UB, aB, zB, QB, NB, uB, pB);
              BB && (UB = BB.c, aB = BB.lc)
            } else {
              if (!IB.p) throw new Error("hufDecode issues");
              let jB;
              for (jB = 0; jB < IB.lit; jB++) {
                const sB = xB(BB[IB.p[jB]]);
                for (; aB < sB && QB.value < rB;) nB = WB(UB, aB, zB, QB), UB = nB.c, aB = nB.lc;
                if (aB >= sB && KB(BB[IB.p[jB]]) == (UB >> aB - sB & (1 << sB) - 1)) {
                  aB -= sB;
                  const BB = eB(IB.p[jB], dB, UB, aB, zB, QB, NB, uB, pB);
                  BB && (UB = BB.c, aB = BB.lc);
                  break
                }
              }
              if (jB == IB.lit) throw new Error("HufDecode issues")
            }
          }
        }
        const JB = 8 - nB & 7;
        for (UB >>= JB, aB -= JB; aB > 0;) {
          const BB = jB[UB << sB - aB & yB];
          if (!BB.len) throw new Error("HufDecode issues");
          {
            aB -= BB.len;
            const jB = eB(BB.lit, dB, UB, aB, zB, QB, NB, uB, pB);
            jB && (UB = jB.c, aB = jB.lc)
          }
        }
      }(aB, pB, BB, zB, UB, uB, dB, nB, {
        value: 0
      })
    }

    function cB(BB) {
      return 65535 & BB
    }

    function bB(BB) {
      const jB = cB(BB);
      return jB > 32767 ? jB - 65536 : jB
    }

    function vB(BB, jB) {
      const zB = bB(BB),
        QB = bB(jB),
        nB = zB + (1 & QB) + (QB >> 1);
      return {
        a: nB,
        b: nB - QB
      }
    }

    function RB(BB, jB) {
      const zB = cB(BB),
        QB = cB(jB),
        nB = zB - (QB >> 1) & TB;
      return {
        a: QB + nB - AB & TB,
        b: nB
      }
    }

    function OB(BB, jB, zB, QB, nB, dB, IB) {
      const NB = IB < 16384,
        uB = zB > nB ? nB : zB;
      let UB, aB, pB = 1;
      for (; pB <= uB;) pB <<= 1;
      for (pB >>= 1, UB = pB, pB >>= 1; pB >= 1;) {
        aB = 0;
        const IB = aB + dB * (nB - UB),
          uB = dB * pB,
          rB = dB * UB,
          sB = QB * pB,
          JB = QB * UB;
        let mB, yB, kB, GB;
        for (; aB <= IB; aB += rB) {
          let nB = aB;
          const dB = aB + QB * (zB - UB);
          for (; nB <= dB; nB += JB) {
            const zB = nB + sB,
              QB = nB + uB,
              dB = QB + sB;
            if (NB) {
              let IB = vB(BB[nB + jB], BB[QB + jB]);
              mB = IB.a, kB = IB.b, IB = vB(BB[zB + jB], BB[dB + jB]), yB = IB.a, GB = IB.b, IB = vB(mB, yB), BB[nB + jB] = IB.a, BB[zB + jB] = IB.b, IB = vB(kB, GB), BB[QB + jB] = IB.a, BB[dB + jB] = IB.b
            } else {
              let IB = RB(BB[nB + jB], BB[QB + jB]);
              mB = IB.a, kB = IB.b, IB = RB(BB[zB + jB], BB[dB + jB]), yB = IB.a, GB = IB.b, IB = RB(mB, yB), BB[nB + jB] = IB.a, BB[zB + jB] = IB.b, IB = RB(kB, GB), BB[QB + jB] = IB.a, BB[dB + jB] = IB.b
            }
          }
          if (zB & pB) {
            const zB = nB + uB;
            let QB;
            QB = NB ? vB(BB[nB + jB], BB[zB + jB]) : RB(BB[nB + jB], BB[zB + jB]), mB = QB.a, BB[zB + jB] = QB.b, BB[nB + jB] = mB
          }
        }
        if (nB & pB) {
          let nB = aB;
          const dB = aB + QB * (zB - UB);
          for (; nB <= dB; nB += JB) {
            const zB = nB + sB;
            let QB;
            QB = NB ? vB(BB[nB + jB], BB[zB + jB]) : RB(BB[nB + jB], BB[zB + jB]), mB = QB.a, BB[zB + jB] = QB.b, BB[nB + jB] = mB
          }
        }
        UB = pB, pB >>= 1
      }
      return aB
    }

    function Bj(BB) {
      return new DataView(BB.array.buffer, BB.offset.value, BB.size)
    }

    function jj(BB) {
      const jB = BB.viewer.buffer.slice(BB.offset.value, BB.offset.value + BB.size),
        zB = new Uint8Array(function(BB) {
          let jB = BB.byteLength;
          const zB = [];
          let QB = 0;
          const nB = new DataView(BB);
          for (; jB > 0;) {
            const BB = nB.getInt8(QB++);
            if (BB < 0) {
              const dB = -BB;
              jB -= dB + 1;
              for (let BB = 0; BB < dB; BB++) zB.push(nB.getUint8(QB++))
            } else {
              const dB = BB;
              jB -= 2;
              const IB = nB.getUint8(QB++);
              for (let BB = 0; BB < dB + 1; BB++) zB.push(IB)
            }
          }
          return zB
        }(jB)),
        QB = new Uint8Array(zB.length);
      return VB(zB), hB(zB, QB), new DataView(QB.buffer)
    }

    function zj(BB) {
      const jB = BB.array.slice(BB.offset.value, BB.offset.value + BB.size),
        zB = fflate.unzlibSync(jB),
        QB = new Uint8Array(zB.length);
      return VB(zB), hB(zB, QB), new DataView(QB.buffer)
    }

    function Qj(BB) {
      const jB = BB.array.slice(BB.offset.value, BB.offset.value + BB.size),
        zB = fflate.unzlibSync(jB),
        QB = BB.lines * BB.channels * BB.width,
        nB = 1 == BB.type ? new Uint16Array(QB) : new Uint32Array(QB);
      let dB = 0,
        IB = 0;
      const NB = new Array(4);
      for (let uB = 0; uB < BB.lines; uB++)
        for (let jB = 0; jB < BB.channels; jB++) {
          let jB = 0;
          switch (BB.type) {
            case 1:
              NB[0] = dB, NB[1] = NB[0] + BB.width, dB = NB[1] + BB.width;
              for (let QB = 0; QB < BB.width; ++QB) {
                jB += zB[NB[0]++] << 8 | zB[NB[1]++], nB[IB] = jB, IB++
              }
              break;
            case 2:
              NB[0] = dB, NB[1] = NB[0] + BB.width, NB[2] = NB[1] + BB.width, dB = NB[2] + BB.width;
              for (let QB = 0; QB < BB.width; ++QB) {
                jB += zB[NB[0]++] << 24 | zB[NB[1]++] << 16 | zB[NB[2]++] << 8, nB[IB] = jB, IB++
              }
          }
        }
      return new DataView(nB.buffer)
    }

    function nj(BB) {
      const jB = BB.viewer,
        zB = {
          value: BB.offset.value
        },
        QB = new Uint16Array(BB.width * BB.scanlineBlockSize * (BB.channels * BB.type)),
        nB = new Uint8Array(rB);
      let dB = 0;
      const IB = new Array(BB.channels);
      for (let UB = 0; UB < BB.channels; UB++) IB[UB] = {}, IB[UB].start = dB, IB[UB].end = IB[UB].start, IB[UB].nx = BB.width, IB[UB].ny = BB.lines, IB[UB].size = BB.type, dB += IB[UB].nx * IB[UB].ny * IB[UB].size;
      const NB = qB(jB, zB),
        uB = qB(jB, zB);
      if (uB >= rB) throw new Error("Wrong PIZ_COMPRESSION BITMAP_SIZE");
      if (NB <= uB)
        for (let UB = 0; UB < uB - NB + 1; UB++) nB[UB + NB] = iB(jB, zB);
      const aB = new Uint16Array(pB),
        sB = function(BB, jB) {
          let zB = 0;
          for (let nB = 0; nB < pB; ++nB)(0 == nB || BB[nB >> 3] & 1 << (7 & nB)) && (jB[zB++] = nB);
          const QB = zB - 1;
          for (; zB < pB;) jB[zB++] = 0;
          return QB
        }(nB, aB),
        JB = EB(jB, zB);
      CB(BB.array, jB, zB, JB, QB, dB);
      for (let UB = 0; UB < BB.channels; ++UB) {
        const BB = IB[UB];
        for (let jB = 0; jB < IB[UB].size; ++jB) OB(QB, BB.start + jB, BB.nx, BB.size, BB.ny, BB.nx * BB.size, sB)
      }! function(BB, jB, zB) {
        for (let QB = 0; QB < zB; ++QB) jB[QB] = BB[jB[QB]]
      }(aB, QB, dB);
      let mB = 0;
      const yB = new Uint8Array(QB.buffer.byteLength);
      for (let pB = 0; pB < BB.lines; pB++)
        for (let jB = 0; jB < BB.channels; jB++) {
          const BB = IB[jB],
            zB = BB.nx * BB.size,
            nB = new Uint8Array(QB.buffer, BB.end * UB, zB * UB);
          yB.set(nB, mB), mB += zB * UB, BB.end += zB
        }
      return new DataView(yB.buffer)
    }
    var dj, Ij = zB(40164);
    ! function(BB) {
      BB[BB.Float = 0] = "Float", BB[BB.HalfFloat = 1] = "HalfFloat"
    }(dj || (dj = {}));
    class Nj {}
    async function uj(BB, jB, zB, QB) {
      const nB = {
        size: 0,
        viewer: jB,
        array: new Uint8Array(jB.buffer),
        offset: zB,
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
        case gB.NO_COMPRESSION:
          nB.lines = 1, nB.uncompress = Bj;
          break;
        case gB.RLE_COMPRESSION:
          nB.lines = 1, nB.uncompress = jj;
          break;
        case gB.ZIPS_COMPRESSION:
          nB.lines = 1, nB.uncompress = zj, await Ij.i.LoadScriptAsync(Nj.FFLATEUrl);
          break;
        case gB.ZIP_COMPRESSION:
          nB.lines = 16, nB.uncompress = zj, await Ij.i.LoadScriptAsync(Nj.FFLATEUrl);
          break;
        case gB.PIZ_COMPRESSION:
          nB.lines = 32, nB.uncompress = nj;
          break;
        case gB.PXR24_COMPRESSION:
          nB.lines = 16, nB.uncompress = Qj, await Ij.i.LoadScriptAsync(Nj.FFLATEUrl);
          break;
        default:
          throw new Error(gB[BB.compression] + " is unsupported")
      }
      nB.scanlineBlockSize = nB.lines;
      const dB = {};
      for (const NB of BB.channels) switch (NB.name) {
        case "R":
        case "G":
        case "B":
        case "A":
        case "Y":
          dB[NB.name] = !0, nB.type = NB.pixelType
      }
      let IB = !1;
      if (dB.R && dB.G && dB.B && dB.A) nB.outputChannels = 4, nB.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (dB.R && dB.G && dB.B) IB = !0, nB.outputChannels = 4, nB.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (dB.R && dB.G) nB.outputChannels = 2, nB.decodeChannels = {
        R: 0,
        G: 1
      };
      else if (dB.R) nB.outputChannels = 1, nB.decodeChannels = {
        R: 0
      };
      else {
        if (!dB.Y) throw new Error("EXRLoader.parse: file contains unsupported data channels.");
        nB.outputChannels = 1, nB.decodeChannels = {
          Y: 0
        }
      }
      if (1 === nB.type) switch (QB) {
        case dj.Float:
          nB.getter = DB, nB.inputSize = UB;
          break;
        case dj.HalfFloat:
          nB.getter = qB, nB.inputSize = UB
      } else {
        if (2 !== nB.type) throw new Error("Unsupported pixelType " + nB.type + " for " + BB.compression);
        switch (QB) {
          case dj.Float:
            nB.getter = HB, nB.inputSize = NB;
            break;
          case dj.HalfFloat:
            nB.getter = FB, nB.inputSize = NB
        }
      }
      nB.blockCount = nB.height / nB.scanlineBlockSize;
      for (let NB = 0; NB < nB.blockCount; NB++) oB(jB, zB);
      const uB = nB.width * nB.height * nB.outputChannels;
      switch (QB) {
        case dj.Float:
          nB.byteArray = new Float32Array(uB), nB.textureType = 1, IB && nB.byteArray.fill(1, 0, uB);
          break;
        case dj.HalfFloat:
          nB.byteArray = new Uint16Array(uB), nB.textureType = 2, IB && nB.byteArray.fill(15360, 0, uB);
          break;
        default:
          throw new Error("Unsupported type: " + QB)
      }
      let aB = 0;
      for (const NB of BB.channels) void 0 !== nB.decodeChannels[NB.name] && (nB.channelLineOffsets[NB.name] = aB * nB.width), aB += 2 * NB.pixelType;
      return nB.bytesPerLine = nB.width * aB, nB.outLineWidth = nB.width * nB.outputChannels, "INCREASING_Y" === BB.lineOrder ? nB.scanOrder = BB => BB : nB.scanOrder = BB => nB.height - 1 - BB, 4 == nB.outputChannels ? (nB.format = 5, nB.linearSpace = !0) : (nB.format = 6, nB.linearSpace = !1), nB
    }

    function Uj(BB, jB, zB, QB) {
      const nB = {
        value: 0
      };
      for (let dB = 0; dB < BB.height / BB.scanlineBlockSize; dB++) {
        const IB = MB(zB, QB) - jB.dataWindow.yMin;
        BB.size = EB(zB, QB), BB.lines = IB + BB.scanlineBlockSize > BB.height ? BB.height - IB : BB.scanlineBlockSize;
        const NB = BB.size < BB.lines * BB.bytesPerLine && BB.uncompress ? BB.uncompress(BB) : Bj(BB);
        QB.value += BB.size;
        for (let zB = 0; zB < BB.scanlineBlockSize; zB++) {
          const QB = dB * BB.scanlineBlockSize,
            IB = zB + BB.scanOrder(QB);
          if (IB >= BB.height) continue;
          const uB = zB * BB.bytesPerLine,
            UB = (BB.height - 1 - IB) * BB.outLineWidth;
          for (let zB = 0; zB < BB.channels; zB++) {
            const QB = jB.channels[zB].name,
              dB = BB.channelLineOffsets[QB],
              IB = BB.decodeChannels[QB];
            if (void 0 !== IB) {
              nB.value = uB + dB;
              for (let jB = 0; jB < BB.width; jB++) {
                const zB = UB + jB * BB.outputChannels + IB;
                BB.byteArray && (BB.byteArray[zB] = BB.getter(NB, nB))
              }
            }
          }
        }
      }
    }
    Nj.DefaultOutputType = dj.HalfFloat, Nj.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class aj {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(BB, jB, zB, QB, nB) {
        throw ".exr not supported in Cube."
      }
      loadData(BB, jB, zB) {
        const nB = new DataView(BB.buffer),
          dB = {
            value: 0
          },
          IB = ZB(nB, dB);
        uj(IB, nB, dB, Nj.DefaultOutputType).then((BB => {
          Uj(BB, IB, nB, dB);
          const QB = IB.dataWindow.xMax - IB.dataWindow.xMin + 1,
            NB = IB.dataWindow.yMax - IB.dataWindow.yMin + 1;
          zB(QB, NB, jB.generateMipMaps, !1, (() => {
            const zB = jB.wJ();
            jB.format = IB.format, jB.type = BB.textureType, jB.invertY = !1, jB._gammaSpace = !IB.linearSpace, BB.byteArray && zB._uploadDataToTextureDirectly(jB, BB.byteArray, 0, 0, void 0, !0)
          }))
        })).catch((BB => {
          QB.c.Error("Failed to load EXR texture: ", BB)
        }))
      }
    }
    async function pj(BB) {
      const jB = new DataView(BB),
        zB = {
          value: 0
        },
        nB = ZB(jB, zB);
      try {
        const BB = await uj(nB, jB, zB, dj.Float);
        return Uj(BB, nB, jB, zB), BB.byteArray ? {
          width: nB.dataWindow.xMax - nB.dataWindow.xMin + 1,
          height: nB.dataWindow.yMax - nB.dataWindow.yMin + 1,
          data: new Float32Array(BB.byteArray)
        } : (QB.c.Error("Failed to decode EXR data: No byte array available."), {
          width: 0,
          height: 0,
          data: null
        })
      } catch (dB) {
        QB.c.Error("Failed to load EXR data: ", dB)
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