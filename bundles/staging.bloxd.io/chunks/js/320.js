export const id = 320;
export const ids = [320];
export const modules = {
  41891: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      ReadExrDataAsync: () => hI,
      _ExrTextureLoader: () => nI
    });
    var TB = ZB(38718),
      JB = ZB(37158),
      oB = ZB(40134);
    const GB = 4,
      vB = 4,
      kB = 1,
      cB = 2,
      nB = 8,
      hB = 65536,
      zB = hB >> 3,
      FB = 14,
      NB = 65537,
      gB = 1 << FB,
      qB = gB - 1,
      yB = 59,
      UB = 63,
      WB = 2 + UB - yB;
    var dB, CB;

    function QB(BB, IB) {
      const ZB = new Uint8Array(BB);
      let TB = 0;
      for (; 0 != ZB[IB.value + TB];) TB += 1;
      const JB = (new TextDecoder).decode(ZB.slice(IB.value, IB.value + TB));
      return IB.value = IB.value + TB + 1, JB
    }

    function sB(BB, IB) {
      const ZB = BB.getInt32(IB.value, !0);
      return IB.value += GB, ZB
    }

    function wB(BB, IB) {
      const ZB = BB.getUint32(IB.value, !0);
      return IB.value += GB, ZB
    }

    function OB(BB, IB) {
      const ZB = BB.getUint8(IB.value);
      return IB.value += kB, ZB
    }

    function YB(BB, IB) {
      const ZB = BB.getUint16(IB.value, !0);
      return IB.value += cB, ZB
    }

    function iB(BB, IB) {
      const ZB = BB[IB.value];
      return IB.value += kB, ZB
    }

    function pB(BB, IB) {
      let ZB;
      return ZB = "getBigInt64" in DataView.prototype ? Number(BB.getBigInt64(IB.value, !0)) : BB.getUint32(IB.value + 4, !0) + Number(BB.getUint32(IB.value, !0) << 32), IB.value += nB, ZB
    }

    function aB(BB, IB) {
      const ZB = BB.getFloat32(IB.value, !0);
      return IB.value += vB, ZB
    }

    function HB(BB, IB) {
      return (0, oB.c)(YB(BB, IB))
    }

    function MB(BB, IB) {
      return (0, oB.h)((0, JB.Clamp)(aB(BB, IB), -oB.e, oB.e))
    }

    function jB(BB, IB, ZB, TB) {
      switch (ZB) {
        case "string":
        case "stringvector":
        case "iccProfile":
          return function(BB, IB, ZB) {
            const TB = (new TextDecoder).decode(new Uint8Array(BB).slice(IB.value, IB.value + ZB));
            return IB.value = IB.value + ZB, TB
          }(BB.buffer, IB, TB);
        case "chlist":
          return function(BB, IB, ZB) {
            const TB = IB.value,
              JB = [];
            for (; IB.value < TB + ZB - 1;) {
              const ZB = QB(BB.buffer, IB),
                TB = sB(BB, IB),
                oB = OB(BB, IB);
              IB.value += 3;
              const GB = sB(BB, IB),
                vB = sB(BB, IB);
              JB.push({
                name: ZB,
                pixelType: TB,
                pLinear: oB,
                xSampling: GB,
                ySampling: vB
              })
            }
            return IB.value += 1, JB
          }(BB, IB, TB);
        case "chromaticities":
          return function(BB, IB) {
            return {
              redX: aB(BB, IB),
              redY: aB(BB, IB),
              greenX: aB(BB, IB),
              greenY: aB(BB, IB),
              blueX: aB(BB, IB),
              blueY: aB(BB, IB),
              whiteX: aB(BB, IB),
              whiteY: aB(BB, IB)
            }
          }(BB, IB);
        case "compression":
          return function(BB, IB) {
            return OB(BB, IB)
          }(BB, IB);
        case "box2i":
          return function(BB, IB) {
            return {
              xMin: sB(BB, IB),
              yMin: sB(BB, IB),
              xMax: sB(BB, IB),
              yMax: sB(BB, IB)
            }
          }(BB, IB);
        case "lineOrder":
          return function(BB, IB) {
            const ZB = OB(BB, IB);
            return CB[ZB]
          }(BB, IB);
        case "float":
          return aB(BB, IB);
        case "v2f":
          return function(BB, IB) {
            return [aB(BB, IB), aB(BB, IB)]
          }(BB, IB);
        case "v3f":
          return function(BB, IB) {
            return [aB(BB, IB), aB(BB, IB), aB(BB, IB)]
          }(BB, IB);
        case "int":
          return sB(BB, IB);
        case "rational":
          return function(BB, IB) {
            return [sB(BB, IB), wB(BB, IB)]
          }(BB, IB);
        case "timecode":
          return function(BB, IB) {
            return [wB(BB, IB), wB(BB, IB)]
          }(BB, IB);
        case "preview":
          return IB.value += TB, "skipped";
        default:
          return void(IB.value += TB)
      }
    }

    function PB(BB) {
      for (let IB = 1; IB < BB.length; IB++) {
        const ZB = BB[IB - 1] + BB[IB] - 128;
        BB[IB] = ZB
      }
    }

    function RB(BB, IB) {
      let ZB = 0,
        TB = Math.floor((BB.length + 1) / 2),
        JB = 0;
      const oB = BB.length - 1;
      for (; !(JB > oB) && (IB[JB++] = BB[ZB++], !(JB > oB));) IB[JB++] = BB[TB++]
    }! function(BB) {
      BB[BB.NO_COMPRESSION = 0] = "NO_COMPRESSION", BB[BB.RLE_COMPRESSION = 1] = "RLE_COMPRESSION", BB[BB.ZIPS_COMPRESSION = 2] = "ZIPS_COMPRESSION", BB[BB.ZIP_COMPRESSION = 3] = "ZIP_COMPRESSION", BB[BB.PIZ_COMPRESSION = 4] = "PIZ_COMPRESSION", BB[BB.PXR24_COMPRESSION = 5] = "PXR24_COMPRESSION"
    }(dB || (dB = {})),
    function(BB) {
      BB[BB.INCREASING_Y = 0] = "INCREASING_Y", BB[BB.DECREASING_Y = 1] = "DECREASING_Y"
    }(CB || (CB = {}));
    const rB = 20000630;

    function mB(BB, IB) {
      if (BB.getUint32(0, !0) != rB) throw new Error("Incorrect OpenEXR format");
      const ZB = BB.getUint8(4),
        JB = BB.getUint8(5),
        oB = {
          singleTile: !!(2 & JB),
          longName: !!(4 & JB),
          deepFormat: !!(8 & JB),
          multiPart: !!(16 & JB)
        };
      IB.value = 8;
      const GB = {};
      let vB = !0;
      for (; vB;) {
        const ZB = QB(BB.buffer, IB);
        if (ZB) {
          const JB = QB(BB.buffer, IB),
            oB = jB(BB, IB, JB, wB(BB, IB));
          void 0 === oB ? TB.d.Warn(`Unknown header attribute type ${JB}'.`) : GB[ZB] = oB
        } else vB = !1
      }
      if (0 != (-5 & JB)) throw new Error("Unsupported file format");
      return {
        version: ZB,
        spec: oB,
        ...GB
      }
    }
    const XB = 32768,
      LB = 65535;

    function eB(BB, IB, ZB, TB, JB) {
      for (; ZB < BB;) IB = IB << 8 | iB(TB, JB), ZB += 8;
      return {
        l: IB >> (ZB -= BB) & (1 << BB) - 1,
        c: IB,
        lc: ZB
      }
    }

    function uB(BB, IB, ZB, TB) {
      return {
        c: BB = BB << 8 | iB(ZB, TB),
        lc: IB += 8
      }
    }

    function fB(BB, IB, ZB, TB, JB, oB, GB, vB, kB) {
      if (BB == IB) {
        if (TB < 8) {
          const BB = uB(ZB, TB, JB, oB);
          ZB = BB.c, TB = BB.lc
        }
        let BB = ZB >> (TB -= 8);
        if (BB = new Uint8Array([BB])[0], vB.value + BB > kB) return null;
        const IB = GB[vB.value - 1];
        for (; BB-- > 0;) GB[vB.value++] = IB
      } else {
        if (!(vB.value < kB)) return null;
        GB[vB.value++] = BB
      }
      return {
        c: ZB,
        lc: TB
      }
    }
    const lB = new Array(59);

    function AB(BB, IB, ZB, TB, JB, oB) {
      const GB = IB;
      let vB = 0,
        kB = 0;
      for (; TB <= JB; TB++) {
        if (GB.value - IB.value > ZB) return;
        let cB = eB(6, vB, kB, BB, GB);
        const nB = cB.l;
        if (vB = cB.c, kB = cB.lc, oB[TB] = nB, nB == UB) {
          if (GB.value - IB.value > ZB) throw new Error("Error in HufUnpackEncTable");
          cB = eB(8, vB, kB, BB, GB);
          let nB = cB.l + WB;
          if (vB = cB.c, kB = cB.lc, TB + nB > JB + 1) throw new Error("Error in HufUnpackEncTable");
          for (; nB--;) oB[TB++] = 0;
          TB--
        } else if (nB >= yB) {
          let BB = nB - yB + 2;
          if (TB + BB > JB + 1) throw new Error("Error in HufUnpackEncTable");
          for (; BB--;) oB[TB++] = 0;
          TB--
        }
      }! function(BB) {
        for (let ZB = 0; ZB <= 58; ++ZB) lB[ZB] = 0;
        for (let ZB = 0; ZB < NB; ++ZB) lB[BB[ZB]] += 1;
        let IB = 0;
        for (let ZB = 58; ZB > 0; --ZB) {
          const BB = IB + lB[ZB] >> 1;
          lB[ZB] = IB, IB = BB
        }
        for (let ZB = 0; ZB < NB; ++ZB) {
          const IB = BB[ZB];
          IB > 0 && (BB[ZB] = IB | lB[IB]++ << 6)
        }
      }(oB)
    }

    function tB(BB) {
      return 63 & BB
    }

    function bB(BB) {
      return BB >> 6
    }

    function xB(BB, IB, ZB, TB, JB, oB) {
      const GB = ZB.value,
        vB = wB(IB, ZB),
        kB = wB(IB, ZB);
      ZB.value += 4;
      const cB = wB(IB, ZB);
      if (ZB.value += 4, vB < 0 || vB >= NB || kB < 0 || kB >= NB) throw new Error("Wrong HUF_ENCSIZE");
      const nB = new Array(NB),
        hB = new Array(gB);
      ! function(BB) {
        for (let IB = 0; IB < gB; IB++) BB[IB] = {}, BB[IB].len = 0, BB[IB].lit = 0, BB[IB].p = null
      }(hB);
      if (AB(BB, ZB, TB - (ZB.value - GB), vB, kB, nB), cB > 8 * (TB - (ZB.value - GB))) throw new Error("Wrong hufUncompress");
      ! function(BB, IB, ZB, TB) {
        for (; IB <= ZB; IB++) {
          const ZB = bB(BB[IB]),
            JB = tB(BB[IB]);
          if (ZB >> JB) throw new Error("Invalid table entry");
          if (JB > FB) {
            const BB = TB[ZB >> JB - FB];
            if (BB.len) throw new Error("Invalid table entry");
            if (BB.lit++, BB.p) {
              const IB = BB.p;
              BB.p = new Array(BB.lit);
              for (let ZB = 0; ZB < BB.lit - 1; ++ZB) BB.p[ZB] = IB[ZB]
            } else BB.p = new Array(1);
            BB.p[BB.lit - 1] = IB
          } else if (JB) {
            let BB = 0;
            for (let oB = 1 << FB - JB; oB > 0; oB--) {
              const oB = TB[(ZB << FB - JB) + BB];
              if (oB.len || oB.p) throw new Error("Invalid table entry");
              oB.len = JB, oB.lit = IB, BB++
            }
          }
        }
      }(nB, vB, kB, hB),
      function(BB, IB, ZB, TB, JB, oB, GB, vB, kB) {
        let cB = 0,
          nB = 0;
        const hB = GB,
          zB = Math.trunc(TB.value + (JB + 7) / 8);
        for (; TB.value < zB;) {
          let JB = uB(cB, nB, ZB, TB);
          for (cB = JB.c, nB = JB.lc; nB >= FB;) {
            const GB = IB[cB >> nB - FB & qB];
            if (GB.len) {
              nB -= GB.len;
              const BB = fB(GB.lit, oB, cB, nB, ZB, TB, vB, kB, hB);
              BB && (cB = BB.c, nB = BB.lc)
            } else {
              if (!GB.p) throw new Error("hufDecode issues");
              let IB;
              for (IB = 0; IB < GB.lit; IB++) {
                const FB = tB(BB[GB.p[IB]]);
                for (; nB < FB && TB.value < zB;) JB = uB(cB, nB, ZB, TB), cB = JB.c, nB = JB.lc;
                if (nB >= FB && bB(BB[GB.p[IB]]) == (cB >> nB - FB & (1 << FB) - 1)) {
                  nB -= FB;
                  const BB = fB(GB.p[IB], oB, cB, nB, ZB, TB, vB, kB, hB);
                  BB && (cB = BB.c, nB = BB.lc);
                  break
                }
              }
              if (IB == GB.lit) throw new Error("HufDecode issues")
            }
          }
        }
        const NB = 8 - JB & 7;
        for (cB >>= NB, nB -= NB; nB > 0;) {
          const BB = IB[cB << FB - nB & qB];
          if (!BB.len) throw new Error("HufDecode issues");
          {
            nB -= BB.len;
            const IB = fB(BB.lit, oB, cB, nB, ZB, TB, vB, kB, hB);
            IB && (cB = IB.c, nB = IB.lc)
          }
        }
      }(nB, hB, BB, ZB, cB, kB, oB, JB, {
        value: 0
      })
    }

    function EB(BB) {
      return 65535 & BB
    }

    function DB(BB) {
      const IB = EB(BB);
      return IB > 32767 ? IB - 65536 : IB
    }

    function KB(BB, IB) {
      const ZB = DB(BB),
        TB = DB(IB),
        JB = ZB + (1 & TB) + (TB >> 1);
      return {
        a: JB,
        b: JB - TB
      }
    }

    function VB(BB, IB) {
      const ZB = EB(BB),
        TB = EB(IB),
        JB = ZB - (TB >> 1) & LB;
      return {
        a: TB + JB - XB & LB,
        b: JB
      }
    }

    function SB(BB, IB, ZB, TB, JB, oB, GB) {
      const vB = GB < 16384,
        kB = ZB > JB ? JB : ZB;
      let cB, nB, hB = 1;
      for (; hB <= kB;) hB <<= 1;
      for (hB >>= 1, cB = hB, hB >>= 1; hB >= 1;) {
        nB = 0;
        const GB = nB + oB * (JB - cB),
          kB = oB * hB,
          zB = oB * cB,
          FB = TB * hB,
          NB = TB * cB;
        let gB, qB, yB, UB;
        for (; nB <= GB; nB += zB) {
          let JB = nB;
          const oB = nB + TB * (ZB - cB);
          for (; JB <= oB; JB += NB) {
            const ZB = JB + FB,
              TB = JB + kB,
              oB = TB + FB;
            if (vB) {
              let GB = KB(BB[JB + IB], BB[TB + IB]);
              gB = GB.a, yB = GB.b, GB = KB(BB[ZB + IB], BB[oB + IB]), qB = GB.a, UB = GB.b, GB = KB(gB, qB), BB[JB + IB] = GB.a, BB[ZB + IB] = GB.b, GB = KB(yB, UB), BB[TB + IB] = GB.a, BB[oB + IB] = GB.b
            } else {
              let GB = VB(BB[JB + IB], BB[TB + IB]);
              gB = GB.a, yB = GB.b, GB = VB(BB[ZB + IB], BB[oB + IB]), qB = GB.a, UB = GB.b, GB = VB(gB, qB), BB[JB + IB] = GB.a, BB[ZB + IB] = GB.b, GB = VB(yB, UB), BB[TB + IB] = GB.a, BB[oB + IB] = GB.b
            }
          }
          if (ZB & hB) {
            const ZB = JB + kB;
            let TB;
            TB = vB ? KB(BB[JB + IB], BB[ZB + IB]) : VB(BB[JB + IB], BB[ZB + IB]), gB = TB.a, BB[ZB + IB] = TB.b, BB[JB + IB] = gB
          }
        }
        if (JB & hB) {
          let JB = nB;
          const oB = nB + TB * (ZB - cB);
          for (; JB <= oB; JB += NB) {
            const ZB = JB + FB;
            let TB;
            TB = vB ? KB(BB[JB + IB], BB[ZB + IB]) : VB(BB[JB + IB], BB[ZB + IB]), gB = TB.a, BB[ZB + IB] = TB.b, BB[JB + IB] = gB
          }
        }
        cB = hB, hB >>= 1
      }
      return nB
    }

    function BI(BB) {
      return new DataView(BB.array.buffer, BB.offset.value, BB.size)
    }

    function II(BB) {
      const IB = BB.viewer.buffer.slice(BB.offset.value, BB.offset.value + BB.size),
        ZB = new Uint8Array(function(BB) {
          let IB = BB.byteLength;
          const ZB = [];
          let TB = 0;
          const JB = new DataView(BB);
          for (; IB > 0;) {
            const BB = JB.getInt8(TB++);
            if (BB < 0) {
              const oB = -BB;
              IB -= oB + 1;
              for (let BB = 0; BB < oB; BB++) ZB.push(JB.getUint8(TB++))
            } else {
              const oB = BB;
              IB -= 2;
              const GB = JB.getUint8(TB++);
              for (let BB = 0; BB < oB + 1; BB++) ZB.push(GB)
            }
          }
          return ZB
        }(IB)),
        TB = new Uint8Array(ZB.length);
      return PB(ZB), RB(ZB, TB), new DataView(TB.buffer)
    }

    function ZI(BB) {
      const IB = BB.array.slice(BB.offset.value, BB.offset.value + BB.size),
        ZB = fflate.unzlibSync(IB),
        TB = new Uint8Array(ZB.length);
      return PB(ZB), RB(ZB, TB), new DataView(TB.buffer)
    }

    function TI(BB) {
      const IB = BB.array.slice(BB.offset.value, BB.offset.value + BB.size),
        ZB = fflate.unzlibSync(IB),
        TB = BB.lines * BB.channels * BB.width,
        JB = 1 == BB.type ? new Uint16Array(TB) : new Uint32Array(TB);
      let oB = 0,
        GB = 0;
      const vB = new Array(4);
      for (let kB = 0; kB < BB.lines; kB++)
        for (let IB = 0; IB < BB.channels; IB++) {
          let IB = 0;
          switch (BB.type) {
            case 1:
              vB[0] = oB, vB[1] = vB[0] + BB.width, oB = vB[1] + BB.width;
              for (let TB = 0; TB < BB.width; ++TB) {
                IB += ZB[vB[0]++] << 8 | ZB[vB[1]++], JB[GB] = IB, GB++
              }
              break;
            case 2:
              vB[0] = oB, vB[1] = vB[0] + BB.width, vB[2] = vB[1] + BB.width, oB = vB[2] + BB.width;
              for (let TB = 0; TB < BB.width; ++TB) {
                IB += ZB[vB[0]++] << 24 | ZB[vB[1]++] << 16 | ZB[vB[2]++] << 8, JB[GB] = IB, GB++
              }
          }
        }
      return new DataView(JB.buffer)
    }

    function JI(BB) {
      const IB = BB.viewer,
        ZB = {
          value: BB.offset.value
        },
        TB = new Uint16Array(BB.width * BB.scanlineBlockSize * (BB.channels * BB.type)),
        JB = new Uint8Array(zB);
      let oB = 0;
      const GB = new Array(BB.channels);
      for (let cB = 0; cB < BB.channels; cB++) GB[cB] = {}, GB[cB].start = oB, GB[cB].end = GB[cB].start, GB[cB].nx = BB.width, GB[cB].ny = BB.lines, GB[cB].size = BB.type, oB += GB[cB].nx * GB[cB].ny * GB[cB].size;
      const vB = YB(IB, ZB),
        kB = YB(IB, ZB);
      if (kB >= zB) throw new Error("Wrong PIZ_COMPRESSION BITMAP_SIZE");
      if (vB <= kB)
        for (let cB = 0; cB < kB - vB + 1; cB++) JB[cB + vB] = OB(IB, ZB);
      const nB = new Uint16Array(hB),
        FB = function(BB, IB) {
          let ZB = 0;
          for (let JB = 0; JB < hB; ++JB)(0 == JB || BB[JB >> 3] & 1 << (7 & JB)) && (IB[ZB++] = JB);
          const TB = ZB - 1;
          for (; ZB < hB;) IB[ZB++] = 0;
          return TB
        }(JB, nB),
        NB = wB(IB, ZB);
      xB(BB.array, IB, ZB, NB, TB, oB);
      for (let cB = 0; cB < BB.channels; ++cB) {
        const BB = GB[cB];
        for (let IB = 0; IB < GB[cB].size; ++IB) SB(TB, BB.start + IB, BB.nx, BB.size, BB.ny, BB.nx * BB.size, FB)
      }! function(BB, IB, ZB) {
        for (let TB = 0; TB < ZB; ++TB) IB[TB] = BB[IB[TB]]
      }(nB, TB, oB);
      let gB = 0;
      const qB = new Uint8Array(TB.buffer.byteLength);
      for (let hB = 0; hB < BB.lines; hB++)
        for (let IB = 0; IB < BB.channels; IB++) {
          const BB = GB[IB],
            ZB = BB.nx * BB.size,
            JB = new Uint8Array(TB.buffer, BB.end * cB, ZB * cB);
          qB.set(JB, gB), gB += ZB * cB, BB.end += ZB
        }
      return new DataView(qB.buffer)
    }
    var oI, GI = ZB(40152);
    ! function(BB) {
      BB[BB.Float = 0] = "Float", BB[BB.HalfFloat = 1] = "HalfFloat"
    }(oI || (oI = {}));
    class vI {}
    async function kI(BB, IB, ZB, TB) {
      const JB = {
        size: 0,
        viewer: IB,
        array: new Uint8Array(IB.buffer),
        offset: ZB,
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
        case dB.NO_COMPRESSION:
          JB.lines = 1, JB.uncompress = BI;
          break;
        case dB.RLE_COMPRESSION:
          JB.lines = 1, JB.uncompress = II;
          break;
        case dB.ZIPS_COMPRESSION:
          JB.lines = 1, JB.uncompress = ZI, await GI.j.LoadScriptAsync(vI.FFLATEUrl);
          break;
        case dB.ZIP_COMPRESSION:
          JB.lines = 16, JB.uncompress = ZI, await GI.j.LoadScriptAsync(vI.FFLATEUrl);
          break;
        case dB.PIZ_COMPRESSION:
          JB.lines = 32, JB.uncompress = JI;
          break;
        case dB.PXR24_COMPRESSION:
          JB.lines = 16, JB.uncompress = TI, await GI.j.LoadScriptAsync(vI.FFLATEUrl);
          break;
        default:
          throw new Error(dB[BB.compression] + " is unsupported")
      }
      JB.scanlineBlockSize = JB.lines;
      const oB = {};
      for (const vB of BB.channels) switch (vB.name) {
        case "R":
        case "G":
        case "B":
        case "A":
        case "Y":
          oB[vB.name] = !0, JB.type = vB.pixelType
      }
      let GB = !1;
      if (oB.R && oB.G && oB.B && oB.A) JB.outputChannels = 4, JB.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (oB.R && oB.G && oB.B) GB = !0, JB.outputChannels = 4, JB.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (oB.R && oB.G) JB.outputChannels = 2, JB.decodeChannels = {
        R: 0,
        G: 1
      };
      else if (oB.R) JB.outputChannels = 1, JB.decodeChannels = {
        R: 0
      };
      else {
        if (!oB.Y) throw new Error("EXRLoader.parse: file contains unsupported data channels.");
        JB.outputChannels = 1, JB.decodeChannels = {
          Y: 0
        }
      }
      if (1 === JB.type) switch (TB) {
        case oI.Float:
          JB.getter = HB, JB.inputSize = cB;
          break;
        case oI.HalfFloat:
          JB.getter = YB, JB.inputSize = cB
      } else {
        if (2 !== JB.type) throw new Error("Unsupported pixelType " + JB.type + " for " + BB.compression);
        switch (TB) {
          case oI.Float:
            JB.getter = aB, JB.inputSize = vB;
            break;
          case oI.HalfFloat:
            JB.getter = MB, JB.inputSize = vB
        }
      }
      JB.blockCount = JB.height / JB.scanlineBlockSize;
      for (let vB = 0; vB < JB.blockCount; vB++) pB(IB, ZB);
      const kB = JB.width * JB.height * JB.outputChannels;
      switch (TB) {
        case oI.Float:
          JB.byteArray = new Float32Array(kB), JB.textureType = 1, GB && JB.byteArray.fill(1, 0, kB);
          break;
        case oI.HalfFloat:
          JB.byteArray = new Uint16Array(kB), JB.textureType = 2, GB && JB.byteArray.fill(15360, 0, kB);
          break;
        default:
          throw new Error("Unsupported type: " + TB)
      }
      let nB = 0;
      for (const vB of BB.channels) void 0 !== JB.decodeChannels[vB.name] && (JB.channelLineOffsets[vB.name] = nB * JB.width), nB += 2 * vB.pixelType;
      return JB.bytesPerLine = JB.width * nB, JB.outLineWidth = JB.width * JB.outputChannels, "INCREASING_Y" === BB.lineOrder ? JB.scanOrder = BB => BB : JB.scanOrder = BB => JB.height - 1 - BB, 4 == JB.outputChannels ? (JB.format = 5, JB.linearSpace = !0) : (JB.format = 6, JB.linearSpace = !1), JB
    }

    function cI(BB, IB, ZB, TB) {
      const JB = {
        value: 0
      };
      for (let oB = 0; oB < BB.height / BB.scanlineBlockSize; oB++) {
        const GB = sB(ZB, TB) - IB.dataWindow.yMin;
        BB.size = wB(ZB, TB), BB.lines = GB + BB.scanlineBlockSize > BB.height ? BB.height - GB : BB.scanlineBlockSize;
        const vB = BB.size < BB.lines * BB.bytesPerLine && BB.uncompress ? BB.uncompress(BB) : BI(BB);
        TB.value += BB.size;
        for (let ZB = 0; ZB < BB.scanlineBlockSize; ZB++) {
          const TB = oB * BB.scanlineBlockSize,
            GB = ZB + BB.scanOrder(TB);
          if (GB >= BB.height) continue;
          const kB = ZB * BB.bytesPerLine,
            cB = (BB.height - 1 - GB) * BB.outLineWidth;
          for (let ZB = 0; ZB < BB.channels; ZB++) {
            const TB = IB.channels[ZB].name,
              oB = BB.channelLineOffsets[TB],
              GB = BB.decodeChannels[TB];
            if (void 0 !== GB) {
              JB.value = kB + oB;
              for (let IB = 0; IB < BB.width; IB++) {
                const ZB = cB + IB * BB.outputChannels + GB;
                BB.byteArray && (BB.byteArray[ZB] = BB.getter(vB, JB))
              }
            }
          }
        }
      }
    }
    vI.DefaultOutputType = oI.HalfFloat, vI.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class nI {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(BB, IB, ZB, TB, JB) {
        throw ".exr not supported in Cube."
      }
      loadData(BB, IB, ZB) {
        const JB = new DataView(BB.buffer),
          oB = {
            value: 0
          },
          GB = mB(JB, oB);
        kI(GB, JB, oB, vI.DefaultOutputType).then((BB => {
          cI(BB, GB, JB, oB);
          const TB = GB.dataWindow.xMax - GB.dataWindow.xMin + 1,
            vB = GB.dataWindow.yMax - GB.dataWindow.yMin + 1;
          ZB(TB, vB, IB.generateMipMaps, !1, (() => {
            const ZB = IB.PN();
            IB.format = GB.format, IB.type = BB.textureType, IB.invertY = !1, IB._gammaSpace = !GB.linearSpace, BB.byteArray && ZB._uploadDataToTextureDirectly(IB, BB.byteArray, 0, 0, void 0, !0)
          }))
        })).catch((BB => {
          TB.d.Error("Failed to load EXR texture: ", BB)
        }))
      }
    }
    async function hI(BB) {
      const IB = new DataView(BB),
        ZB = {
          value: 0
        },
        JB = mB(IB, ZB);
      try {
        const BB = await kI(JB, IB, ZB, oI.Float);
        return cI(BB, JB, IB, ZB), BB.byteArray ? {
          width: JB.dataWindow.xMax - JB.dataWindow.xMin + 1,
          height: JB.dataWindow.yMax - JB.dataWindow.yMin + 1,
          data: new Float32Array(BB.byteArray)
        } : (TB.d.Error("Failed to decode EXR data: No byte array available."), {
          width: 0,
          height: 0,
          data: null
        })
      } catch (oB) {
        TB.d.Error("Failed to load EXR data: ", oB)
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