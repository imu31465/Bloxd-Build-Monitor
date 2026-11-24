export const id = 315;
export const ids = [315];
export const modules = {
  41898: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      ReadExrDataAsync: () => fH,
      _ExrTextureLoader: () => IH
    });
    var tS = gS(38687),
      bS = gS(37149),
      XS = gS(40115);
    const xS = 4,
      NS = 4,
      qS = 1,
      uS = 2,
      IS = 8,
      fS = 65536,
      kS = fS >> 3,
      aS = 14,
      KS = 65537,
      jS = 1 << aS,
      GS = jS - 1,
      CS = 59,
      nS = 63,
      PS = 2 + nS - CS;
    var QS, DS;

    function wS(SS, HS) {
      const gS = new Uint8Array(SS);
      let tS = 0;
      for (; 0 != gS[HS.value + tS];) tS += 1;
      const bS = (new TextDecoder).decode(gS.slice(HS.value, HS.value + tS));
      return HS.value = HS.value + tS + 1, bS
    }

    function hS(SS, HS) {
      const gS = SS.getInt32(HS.value, !0);
      return HS.value += xS, gS
    }

    function ZS(SS, HS) {
      const gS = SS.getUint32(HS.value, !0);
      return HS.value += xS, gS
    }

    function JS(SS, HS) {
      const gS = SS.getUint8(HS.value);
      return HS.value += qS, gS
    }

    function OS(SS, HS) {
      const gS = SS.getUint16(HS.value, !0);
      return HS.value += uS, gS
    }

    function dS(SS, HS) {
      const gS = SS[HS.value];
      return HS.value += qS, gS
    }

    function cS(SS, HS) {
      let gS;
      return gS = "getBigInt64" in DataView.prototype ? Number(SS.getBigInt64(HS.value, !0)) : SS.getUint32(HS.value + 4, !0) + Number(SS.getUint32(HS.value, !0) << 32), HS.value += IS, gS
    }

    function vS(SS, HS) {
      const gS = SS.getFloat32(HS.value, !0);
      return HS.value += NS, gS
    }

    function ES(SS, HS) {
      return (0, XS.b)(OS(SS, HS))
    }

    function LS(SS, HS) {
      return (0, XS.f)((0, bS.Clamp)(vS(SS, HS), -XS.d, XS.d))
    }

    function YS(SS, HS, gS, tS) {
      switch (gS) {
        case "string":
        case "stringvector":
        case "iccProfile":
          return function(SS, HS, gS) {
            const tS = (new TextDecoder).decode(new Uint8Array(SS).slice(HS.value, HS.value + gS));
            return HS.value = HS.value + gS, tS
          }(SS.buffer, HS, tS);
        case "chlist":
          return function(SS, HS, gS) {
            const tS = HS.value,
              bS = [];
            for (; HS.value < tS + gS - 1;) {
              const gS = wS(SS.buffer, HS),
                tS = hS(SS, HS),
                XS = JS(SS, HS);
              HS.value += 3;
              const xS = hS(SS, HS),
                NS = hS(SS, HS);
              bS.push({
                name: gS,
                pixelType: tS,
                pLinear: XS,
                xSampling: xS,
                ySampling: NS
              })
            }
            return HS.value += 1, bS
          }(SS, HS, tS);
        case "chromaticities":
          return function(SS, HS) {
            return {
              redX: vS(SS, HS),
              redY: vS(SS, HS),
              greenX: vS(SS, HS),
              greenY: vS(SS, HS),
              blueX: vS(SS, HS),
              blueY: vS(SS, HS),
              whiteX: vS(SS, HS),
              whiteY: vS(SS, HS)
            }
          }(SS, HS);
        case "compression":
          return function(SS, HS) {
            return JS(SS, HS)
          }(SS, HS);
        case "box2i":
          return function(SS, HS) {
            return {
              xMin: hS(SS, HS),
              yMin: hS(SS, HS),
              xMax: hS(SS, HS),
              yMax: hS(SS, HS)
            }
          }(SS, HS);
        case "lineOrder":
          return function(SS, HS) {
            const gS = JS(SS, HS);
            return DS[gS]
          }(SS, HS);
        case "float":
          return vS(SS, HS);
        case "v2f":
          return function(SS, HS) {
            return [vS(SS, HS), vS(SS, HS)]
          }(SS, HS);
        case "v3f":
          return function(SS, HS) {
            return [vS(SS, HS), vS(SS, HS), vS(SS, HS)]
          }(SS, HS);
        case "int":
          return hS(SS, HS);
        case "rational":
          return function(SS, HS) {
            return [hS(SS, HS), ZS(SS, HS)]
          }(SS, HS);
        case "timecode":
          return function(SS, HS) {
            return [ZS(SS, HS), ZS(SS, HS)]
          }(SS, HS);
        case "preview":
          return HS.value += tS, "skipped";
        default:
          return void(HS.value += tS)
      }
    }

    function AS(SS) {
      for (let HS = 1; HS < SS.length; HS++) {
        const gS = SS[HS - 1] + SS[HS] - 128;
        SS[HS] = gS
      }
    }

    function yS(SS, HS) {
      let gS = 0,
        tS = Math.floor((SS.length + 1) / 2),
        bS = 0;
      const XS = SS.length - 1;
      for (; !(bS > XS) && (HS[bS++] = SS[gS++], !(bS > XS));) HS[bS++] = SS[tS++]
    }! function(SS) {
      SS[SS.NO_COMPRESSION = 0] = "NO_COMPRESSION", SS[SS.RLE_COMPRESSION = 1] = "RLE_COMPRESSION", SS[SS.ZIPS_COMPRESSION = 2] = "ZIPS_COMPRESSION", SS[SS.ZIP_COMPRESSION = 3] = "ZIP_COMPRESSION", SS[SS.PIZ_COMPRESSION = 4] = "PIZ_COMPRESSION", SS[SS.PXR24_COMPRESSION = 5] = "PXR24_COMPRESSION"
    }(QS || (QS = {})),
    function(SS) {
      SS[SS.INCREASING_Y = 0] = "INCREASING_Y", SS[SS.DECREASING_Y = 1] = "DECREASING_Y"
    }(DS || (DS = {}));
    const VS = 20000630;

    function iS(SS, HS) {
      if (SS.getUint32(0, !0) != VS) throw new Error("Incorrect OpenEXR format");
      const gS = SS.getUint8(4),
        bS = SS.getUint8(5),
        XS = {
          singleTile: !!(2 & bS),
          longName: !!(4 & bS),
          deepFormat: !!(8 & bS),
          multiPart: !!(16 & bS)
        };
      HS.value = 8;
      const xS = {};
      let NS = !0;
      for (; NS;) {
        const gS = wS(SS.buffer, HS);
        if (gS) {
          const bS = wS(SS.buffer, HS),
            XS = YS(SS, HS, bS, ZS(SS, HS));
          void 0 === XS ? tS.b.Warn(`Unknown header attribute type ${bS}'.`) : xS[gS] = XS
        } else NS = !1
      }
      if (0 != (-5 & bS)) throw new Error("Unsupported file format");
      return {
        version: gS,
        spec: XS,
        ...xS
      }
    }
    const WS = 32768,
      zS = 65535;

    function US(SS, HS, gS, tS, bS) {
      for (; gS < SS;) HS = HS << 8 | dS(tS, bS), gS += 8;
      return {
        l: HS >> (gS -= SS) & (1 << SS) - 1,
        c: HS,
        lc: gS
      }
    }

    function pS(SS, HS, gS, tS) {
      return {
        c: SS = SS << 8 | dS(gS, tS),
        lc: HS += 8
      }
    }

    function sS(SS, HS, gS, tS, bS, XS, xS, NS, qS) {
      if (SS == HS) {
        if (tS < 8) {
          const SS = pS(gS, tS, bS, XS);
          gS = SS.c, tS = SS.lc
        }
        let SS = gS >> (tS -= 8);
        if (SS = new Uint8Array([SS])[0], NS.value + SS > qS) return null;
        const HS = xS[NS.value - 1];
        for (; SS-- > 0;) xS[NS.value++] = HS
      } else {
        if (!(NS.value < qS)) return null;
        xS[NS.value++] = SS
      }
      return {
        c: gS,
        lc: tS
      }
    }
    const BS = new Array(59);

    function MS(SS, HS, gS, tS, bS, XS) {
      const xS = HS;
      let NS = 0,
        qS = 0;
      for (; tS <= bS; tS++) {
        if (xS.value - HS.value > gS) return;
        let uS = US(6, NS, qS, SS, xS);
        const IS = uS.l;
        if (NS = uS.c, qS = uS.lc, XS[tS] = IS, IS == nS) {
          if (xS.value - HS.value > gS) throw new Error("Error in HufUnpackEncTable");
          uS = US(8, NS, qS, SS, xS);
          let IS = uS.l + PS;
          if (NS = uS.c, qS = uS.lc, tS + IS > bS + 1) throw new Error("Error in HufUnpackEncTable");
          for (; IS--;) XS[tS++] = 0;
          tS--
        } else if (IS >= CS) {
          let SS = IS - CS + 2;
          if (tS + SS > bS + 1) throw new Error("Error in HufUnpackEncTable");
          for (; SS--;) XS[tS++] = 0;
          tS--
        }
      }! function(SS) {
        for (let gS = 0; gS <= 58; ++gS) BS[gS] = 0;
        for (let gS = 0; gS < KS; ++gS) BS[SS[gS]] += 1;
        let HS = 0;
        for (let gS = 58; gS > 0; --gS) {
          const SS = HS + BS[gS] >> 1;
          BS[gS] = HS, HS = SS
        }
        for (let gS = 0; gS < KS; ++gS) {
          const HS = SS[gS];
          HS > 0 && (SS[gS] = HS | BS[HS]++ << 6)
        }
      }(XS)
    }

    function FS(SS) {
      return 63 & SS
    }

    function RS(SS) {
      return SS >> 6
    }

    function TS(SS, HS, gS, tS, bS, XS) {
      const xS = gS.value,
        NS = ZS(HS, gS),
        qS = ZS(HS, gS);
      gS.value += 4;
      const uS = ZS(HS, gS);
      if (gS.value += 4, NS < 0 || NS >= KS || qS < 0 || qS >= KS) throw new Error("Wrong HUF_ENCSIZE");
      const IS = new Array(KS),
        fS = new Array(jS);
      ! function(SS) {
        for (let HS = 0; HS < jS; HS++) SS[HS] = {}, SS[HS].len = 0, SS[HS].lit = 0, SS[HS].p = null
      }(fS);
      if (MS(SS, gS, tS - (gS.value - xS), NS, qS, IS), uS > 8 * (tS - (gS.value - xS))) throw new Error("Wrong hufUncompress");
      ! function(SS, HS, gS, tS) {
        for (; HS <= gS; HS++) {
          const gS = RS(SS[HS]),
            bS = FS(SS[HS]);
          if (gS >> bS) throw new Error("Invalid table entry");
          if (bS > aS) {
            const SS = tS[gS >> bS - aS];
            if (SS.len) throw new Error("Invalid table entry");
            if (SS.lit++, SS.p) {
              const HS = SS.p;
              SS.p = new Array(SS.lit);
              for (let gS = 0; gS < SS.lit - 1; ++gS) SS.p[gS] = HS[gS]
            } else SS.p = new Array(1);
            SS.p[SS.lit - 1] = HS
          } else if (bS) {
            let SS = 0;
            for (let XS = 1 << aS - bS; XS > 0; XS--) {
              const XS = tS[(gS << aS - bS) + SS];
              if (XS.len || XS.p) throw new Error("Invalid table entry");
              XS.len = bS, XS.lit = HS, SS++
            }
          }
        }
      }(IS, NS, qS, fS),
      function(SS, HS, gS, tS, bS, XS, xS, NS, qS) {
        let uS = 0,
          IS = 0;
        const fS = xS,
          kS = Math.trunc(tS.value + (bS + 7) / 8);
        for (; tS.value < kS;) {
          let bS = pS(uS, IS, gS, tS);
          for (uS = bS.c, IS = bS.lc; IS >= aS;) {
            const xS = HS[uS >> IS - aS & GS];
            if (xS.len) {
              IS -= xS.len;
              const SS = sS(xS.lit, XS, uS, IS, gS, tS, NS, qS, fS);
              SS && (uS = SS.c, IS = SS.lc)
            } else {
              if (!xS.p) throw new Error("hufDecode issues");
              let HS;
              for (HS = 0; HS < xS.lit; HS++) {
                const aS = FS(SS[xS.p[HS]]);
                for (; IS < aS && tS.value < kS;) bS = pS(uS, IS, gS, tS), uS = bS.c, IS = bS.lc;
                if (IS >= aS && RS(SS[xS.p[HS]]) == (uS >> IS - aS & (1 << aS) - 1)) {
                  IS -= aS;
                  const SS = sS(xS.p[HS], XS, uS, IS, gS, tS, NS, qS, fS);
                  SS && (uS = SS.c, IS = SS.lc);
                  break
                }
              }
              if (HS == xS.lit) throw new Error("HufDecode issues")
            }
          }
        }
        const KS = 8 - bS & 7;
        for (uS >>= KS, IS -= KS; IS > 0;) {
          const SS = HS[uS << aS - IS & GS];
          if (!SS.len) throw new Error("HufDecode issues");
          {
            IS -= SS.len;
            const HS = sS(SS.lit, XS, uS, IS, gS, tS, NS, qS, fS);
            HS && (uS = HS.c, IS = HS.lc)
          }
        }
      }(IS, fS, SS, gS, uS, qS, XS, bS, {
        value: 0
      })
    }

    function oS(SS) {
      return 65535 & SS
    }

    function lS(SS) {
      const HS = oS(SS);
      return HS > 32767 ? HS - 65536 : HS
    }

    function mS(SS, HS) {
      const gS = lS(SS),
        tS = lS(HS),
        bS = gS + (1 & tS) + (tS >> 1);
      return {
        a: bS,
        b: bS - tS
      }
    }

    function eS(SS, HS) {
      const gS = oS(SS),
        tS = oS(HS),
        bS = gS - (tS >> 1) & zS;
      return {
        a: tS + bS - WS & zS,
        b: bS
      }
    }

    function rS(SS, HS, gS, tS, bS, XS, xS) {
      const NS = xS < 16384,
        qS = gS > bS ? bS : gS;
      let uS, IS, fS = 1;
      for (; fS <= qS;) fS <<= 1;
      for (fS >>= 1, uS = fS, fS >>= 1; fS >= 1;) {
        IS = 0;
        const xS = IS + XS * (bS - uS),
          qS = XS * fS,
          kS = XS * uS,
          aS = tS * fS,
          KS = tS * uS;
        let jS, GS, CS, nS;
        for (; IS <= xS; IS += kS) {
          let bS = IS;
          const XS = IS + tS * (gS - uS);
          for (; bS <= XS; bS += KS) {
            const gS = bS + aS,
              tS = bS + qS,
              XS = tS + aS;
            if (NS) {
              let xS = mS(SS[bS + HS], SS[tS + HS]);
              jS = xS.a, CS = xS.b, xS = mS(SS[gS + HS], SS[XS + HS]), GS = xS.a, nS = xS.b, xS = mS(jS, GS), SS[bS + HS] = xS.a, SS[gS + HS] = xS.b, xS = mS(CS, nS), SS[tS + HS] = xS.a, SS[XS + HS] = xS.b
            } else {
              let xS = eS(SS[bS + HS], SS[tS + HS]);
              jS = xS.a, CS = xS.b, xS = eS(SS[gS + HS], SS[XS + HS]), GS = xS.a, nS = xS.b, xS = eS(jS, GS), SS[bS + HS] = xS.a, SS[gS + HS] = xS.b, xS = eS(CS, nS), SS[tS + HS] = xS.a, SS[XS + HS] = xS.b
            }
          }
          if (gS & fS) {
            const gS = bS + qS;
            let tS;
            tS = NS ? mS(SS[bS + HS], SS[gS + HS]) : eS(SS[bS + HS], SS[gS + HS]), jS = tS.a, SS[gS + HS] = tS.b, SS[bS + HS] = jS
          }
        }
        if (bS & fS) {
          let bS = IS;
          const XS = IS + tS * (gS - uS);
          for (; bS <= XS; bS += KS) {
            const gS = bS + aS;
            let tS;
            tS = NS ? mS(SS[bS + HS], SS[gS + HS]) : eS(SS[bS + HS], SS[gS + HS]), jS = tS.a, SS[gS + HS] = tS.b, SS[bS + HS] = jS
          }
        }
        uS = fS, fS >>= 1
      }
      return IS
    }

    function SH(SS) {
      return new DataView(SS.array.buffer, SS.offset.value, SS.size)
    }

    function HH(SS) {
      const HS = SS.viewer.buffer.slice(SS.offset.value, SS.offset.value + SS.size),
        gS = new Uint8Array(function(SS) {
          let HS = SS.byteLength;
          const gS = [];
          let tS = 0;
          const bS = new DataView(SS);
          for (; HS > 0;) {
            const SS = bS.getInt8(tS++);
            if (SS < 0) {
              const XS = -SS;
              HS -= XS + 1;
              for (let SS = 0; SS < XS; SS++) gS.push(bS.getUint8(tS++))
            } else {
              const XS = SS;
              HS -= 2;
              const xS = bS.getUint8(tS++);
              for (let SS = 0; SS < XS + 1; SS++) gS.push(xS)
            }
          }
          return gS
        }(HS)),
        tS = new Uint8Array(gS.length);
      return AS(gS), yS(gS, tS), new DataView(tS.buffer)
    }

    function gH(SS) {
      const HS = SS.array.slice(SS.offset.value, SS.offset.value + SS.size),
        gS = fflate.unzlibSync(HS),
        tS = new Uint8Array(gS.length);
      return AS(gS), yS(gS, tS), new DataView(tS.buffer)
    }

    function tH(SS) {
      const HS = SS.array.slice(SS.offset.value, SS.offset.value + SS.size),
        gS = fflate.unzlibSync(HS),
        tS = SS.lines * SS.channels * SS.width,
        bS = 1 == SS.type ? new Uint16Array(tS) : new Uint32Array(tS);
      let XS = 0,
        xS = 0;
      const NS = new Array(4);
      for (let qS = 0; qS < SS.lines; qS++)
        for (let HS = 0; HS < SS.channels; HS++) {
          let HS = 0;
          switch (SS.type) {
            case 1:
              NS[0] = XS, NS[1] = NS[0] + SS.width, XS = NS[1] + SS.width;
              for (let tS = 0; tS < SS.width; ++tS) {
                HS += gS[NS[0]++] << 8 | gS[NS[1]++], bS[xS] = HS, xS++
              }
              break;
            case 2:
              NS[0] = XS, NS[1] = NS[0] + SS.width, NS[2] = NS[1] + SS.width, XS = NS[2] + SS.width;
              for (let tS = 0; tS < SS.width; ++tS) {
                HS += gS[NS[0]++] << 24 | gS[NS[1]++] << 16 | gS[NS[2]++] << 8, bS[xS] = HS, xS++
              }
          }
        }
      return new DataView(bS.buffer)
    }

    function bH(SS) {
      const HS = SS.viewer,
        gS = {
          value: SS.offset.value
        },
        tS = new Uint16Array(SS.width * SS.scanlineBlockSize * (SS.channels * SS.type)),
        bS = new Uint8Array(kS);
      let XS = 0;
      const xS = new Array(SS.channels);
      for (let uS = 0; uS < SS.channels; uS++) xS[uS] = {}, xS[uS].start = XS, xS[uS].end = xS[uS].start, xS[uS].nx = SS.width, xS[uS].ny = SS.lines, xS[uS].size = SS.type, XS += xS[uS].nx * xS[uS].ny * xS[uS].size;
      const NS = OS(HS, gS),
        qS = OS(HS, gS);
      if (qS >= kS) throw new Error("Wrong PIZ_COMPRESSION BITMAP_SIZE");
      if (NS <= qS)
        for (let uS = 0; uS < qS - NS + 1; uS++) bS[uS + NS] = JS(HS, gS);
      const IS = new Uint16Array(fS),
        aS = function(SS, HS) {
          let gS = 0;
          for (let bS = 0; bS < fS; ++bS)(0 == bS || SS[bS >> 3] & 1 << (7 & bS)) && (HS[gS++] = bS);
          const tS = gS - 1;
          for (; gS < fS;) HS[gS++] = 0;
          return tS
        }(bS, IS),
        KS = ZS(HS, gS);
      TS(SS.array, HS, gS, KS, tS, XS);
      for (let uS = 0; uS < SS.channels; ++uS) {
        const SS = xS[uS];
        for (let HS = 0; HS < xS[uS].size; ++HS) rS(tS, SS.start + HS, SS.nx, SS.size, SS.ny, SS.nx * SS.size, aS)
      }! function(SS, HS, gS) {
        for (let tS = 0; tS < gS; ++tS) HS[tS] = SS[HS[tS]]
      }(IS, tS, XS);
      let jS = 0;
      const GS = new Uint8Array(tS.buffer.byteLength);
      for (let fS = 0; fS < SS.lines; fS++)
        for (let HS = 0; HS < SS.channels; HS++) {
          const SS = xS[HS],
            gS = SS.nx * SS.size,
            bS = new Uint8Array(tS.buffer, SS.end * uS, gS * uS);
          GS.set(bS, jS), jS += gS * uS, SS.end += gS
        }
      return new DataView(GS.buffer)
    }
    var XH, xH = gS(40133);
    ! function(SS) {
      SS[SS.Float = 0] = "Float", SS[SS.HalfFloat = 1] = "HalfFloat"
    }(XH || (XH = {}));
    class NH {}
    async function qH(SS, HS, gS, tS) {
      const bS = {
        size: 0,
        viewer: HS,
        array: new Uint8Array(HS.buffer),
        offset: gS,
        width: SS.dataWindow.xMax - SS.dataWindow.xMin + 1,
        height: SS.dataWindow.yMax - SS.dataWindow.yMin + 1,
        channels: SS.channels.length,
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
      switch (SS.compression) {
        case QS.NO_COMPRESSION:
          bS.lines = 1, bS.uncompress = SH;
          break;
        case QS.RLE_COMPRESSION:
          bS.lines = 1, bS.uncompress = HH;
          break;
        case QS.ZIPS_COMPRESSION:
          bS.lines = 1, bS.uncompress = gH, await xH.k.LoadScriptAsync(NH.FFLATEUrl);
          break;
        case QS.ZIP_COMPRESSION:
          bS.lines = 16, bS.uncompress = gH, await xH.k.LoadScriptAsync(NH.FFLATEUrl);
          break;
        case QS.PIZ_COMPRESSION:
          bS.lines = 32, bS.uncompress = bH;
          break;
        case QS.PXR24_COMPRESSION:
          bS.lines = 16, bS.uncompress = tH, await xH.k.LoadScriptAsync(NH.FFLATEUrl);
          break;
        default:
          throw new Error(QS[SS.compression] + " is unsupported")
      }
      bS.scanlineBlockSize = bS.lines;
      const XS = {};
      for (const NS of SS.channels) switch (NS.name) {
        case "R":
        case "G":
        case "B":
        case "A":
        case "Y":
          XS[NS.name] = !0, bS.type = NS.pixelType
      }
      let xS = !1;
      if (XS.R && XS.G && XS.B && XS.A) bS.outputChannels = 4, bS.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (XS.R && XS.G && XS.B) xS = !0, bS.outputChannels = 4, bS.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (XS.R && XS.G) bS.outputChannels = 2, bS.decodeChannels = {
        R: 0,
        G: 1
      };
      else if (XS.R) bS.outputChannels = 1, bS.decodeChannels = {
        R: 0
      };
      else {
        if (!XS.Y) throw new Error("EXRLoader.parse: file contains unsupported data channels.");
        bS.outputChannels = 1, bS.decodeChannels = {
          Y: 0
        }
      }
      if (1 === bS.type) switch (tS) {
        case XH.Float:
          bS.getter = ES, bS.inputSize = uS;
          break;
        case XH.HalfFloat:
          bS.getter = OS, bS.inputSize = uS
      } else {
        if (2 !== bS.type) throw new Error("Unsupported pixelType " + bS.type + " for " + SS.compression);
        switch (tS) {
          case XH.Float:
            bS.getter = vS, bS.inputSize = NS;
            break;
          case XH.HalfFloat:
            bS.getter = LS, bS.inputSize = NS
        }
      }
      bS.blockCount = bS.height / bS.scanlineBlockSize;
      for (let NS = 0; NS < bS.blockCount; NS++) cS(HS, gS);
      const qS = bS.width * bS.height * bS.outputChannels;
      switch (tS) {
        case XH.Float:
          bS.byteArray = new Float32Array(qS), bS.textureType = 1, xS && bS.byteArray.fill(1, 0, qS);
          break;
        case XH.HalfFloat:
          bS.byteArray = new Uint16Array(qS), bS.textureType = 2, xS && bS.byteArray.fill(15360, 0, qS);
          break;
        default:
          throw new Error("Unsupported type: " + tS)
      }
      let IS = 0;
      for (const NS of SS.channels) void 0 !== bS.decodeChannels[NS.name] && (bS.channelLineOffsets[NS.name] = IS * bS.width), IS += 2 * NS.pixelType;
      return bS.bytesPerLine = bS.width * IS, bS.outLineWidth = bS.width * bS.outputChannels, "INCREASING_Y" === SS.lineOrder ? bS.scanOrder = SS => SS : bS.scanOrder = SS => bS.height - 1 - SS, 4 == bS.outputChannels ? (bS.format = 5, bS.linearSpace = !0) : (bS.format = 6, bS.linearSpace = !1), bS
    }

    function uH(SS, HS, gS, tS) {
      const bS = {
        value: 0
      };
      for (let XS = 0; XS < SS.height / SS.scanlineBlockSize; XS++) {
        const xS = hS(gS, tS) - HS.dataWindow.yMin;
        SS.size = ZS(gS, tS), SS.lines = xS + SS.scanlineBlockSize > SS.height ? SS.height - xS : SS.scanlineBlockSize;
        const NS = SS.size < SS.lines * SS.bytesPerLine && SS.uncompress ? SS.uncompress(SS) : SH(SS);
        tS.value += SS.size;
        for (let gS = 0; gS < SS.scanlineBlockSize; gS++) {
          const tS = XS * SS.scanlineBlockSize,
            xS = gS + SS.scanOrder(tS);
          if (xS >= SS.height) continue;
          const qS = gS * SS.bytesPerLine,
            uS = (SS.height - 1 - xS) * SS.outLineWidth;
          for (let gS = 0; gS < SS.channels; gS++) {
            const tS = HS.channels[gS].name,
              XS = SS.channelLineOffsets[tS],
              xS = SS.decodeChannels[tS];
            if (void 0 !== xS) {
              bS.value = qS + XS;
              for (let HS = 0; HS < SS.width; HS++) {
                const gS = uS + HS * SS.outputChannels + xS;
                SS.byteArray && (SS.byteArray[gS] = SS.getter(NS, bS))
              }
            }
          }
        }
      }
    }
    NH.DefaultOutputType = XH.HalfFloat, NH.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class IH {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(SS, HS, gS, tS, bS) {
        throw ".exr not supported in Cube."
      }
      loadData(SS, HS, gS) {
        const bS = new DataView(SS.buffer),
          XS = {
            value: 0
          },
          xS = iS(bS, XS);
        qH(xS, bS, XS, NH.DefaultOutputType).then((SS => {
          uH(SS, xS, bS, XS);
          const tS = xS.dataWindow.xMax - xS.dataWindow.xMin + 1,
            NS = xS.dataWindow.yMax - xS.dataWindow.yMin + 1;
          gS(tS, NS, HS.generateMipMaps, !1, (() => {
            const gS = HS.AK();
            HS.format = xS.format, HS.type = SS.textureType, HS.invertY = !1, HS._gammaSpace = !xS.linearSpace, SS.byteArray && gS._uploadDataToTextureDirectly(HS, SS.byteArray, 0, 0, void 0, !0)
          }))
        })).catch((SS => {
          tS.b.Error("Failed to load EXR texture: ", SS)
        }))
      }
    }
    async function fH(SS) {
      const HS = new DataView(SS),
        gS = {
          value: 0
        },
        bS = iS(HS, gS);
      try {
        const SS = await qH(bS, HS, gS, XH.Float);
        return uH(SS, bS, HS, gS), SS.byteArray ? {
          width: bS.dataWindow.xMax - bS.dataWindow.xMin + 1,
          height: bS.dataWindow.yMax - bS.dataWindow.yMin + 1,
          data: new Float32Array(SS.byteArray)
        } : (tS.b.Error("Failed to decode EXR data: No byte array available."), {
          width: 0,
          height: 0,
          data: null
        })
      } catch (XS) {
        tS.b.Error("Failed to load EXR data: ", XS)
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
for (const SS in modules) Object.freeze(modules[SS]);