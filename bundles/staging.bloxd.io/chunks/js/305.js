export const id = 305;
export const ids = [305];
export const modules = {
  40976: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      ReadExrDataAsync: () => BC,
      _ExrTextureLoader: () => SC
    });
    var ID = cD(38048),
      pD = cD(36479),
      iD = cD(39215);
    const fD = 4,
      bD = 4,
      QD = 1,
      wD = 2,
      SD = 8,
      BD = 65536,
      yD = BD >> 3,
      MD = 14,
      tD = 65537,
      ZD = 1 << MD,
      oD = ZD - 1,
      vD = 59,
      ND = 63,
      gD = 2 + ND - vD;
    var XD, mD;

    function nD(DD, CD) {
      const cD = new Uint8Array(DD);
      let ID = 0;
      for (; 0 != cD[CD.value + ID];) ID += 1;
      const pD = (new TextDecoder).decode(cD.slice(CD.value, CD.value + ID));
      return CD.value = CD.value + ID + 1, pD
    }

    function OD(DD, CD) {
      const cD = DD.getInt32(CD.value, !0);
      return CD.value += fD, cD
    }

    function PD(DD, CD) {
      const cD = DD.getUint32(CD.value, !0);
      return CD.value += fD, cD
    }

    function HD(DD, CD) {
      const cD = DD.getUint8(CD.value);
      return CD.value += QD, cD
    }

    function UD(DD, CD) {
      const cD = DD.getUint16(CD.value, !0);
      return CD.value += wD, cD
    }

    function xD(DD, CD) {
      const cD = DD[CD.value];
      return CD.value += QD, cD
    }

    function qD(DD, CD) {
      let cD;
      return cD = "getBigInt64" in DataView.prototype ? Number(DD.getBigInt64(CD.value, !0)) : DD.getUint32(CD.value + 4, !0) + Number(DD.getUint32(CD.value, !0) << 32), CD.value += SD, cD
    }

    function JD(DD, CD) {
      const cD = DD.getFloat32(CD.value, !0);
      return CD.value += bD, cD
    }

    function KD(DD, CD) {
      return (0, iD.c)(UD(DD, CD))
    }

    function aD(DD, CD) {
      return (0, iD.i)((0, pD.Clamp)(JD(DD, CD), -iD.f, iD.f))
    }

    function VD(DD, CD, cD, ID) {
      switch (cD) {
        case "string":
        case "stringvector":
        case "iccProfile":
          return function(DD, CD, cD) {
            const ID = (new TextDecoder).decode(new Uint8Array(DD).slice(CD.value, CD.value + cD));
            return CD.value = CD.value + cD, ID
          }(DD.buffer, CD, ID);
        case "chlist":
          return function(DD, CD, cD) {
            const ID = CD.value,
              pD = [];
            for (; CD.value < ID + cD - 1;) {
              const cD = nD(DD.buffer, CD),
                ID = OD(DD, CD),
                iD = HD(DD, CD);
              CD.value += 3;
              const fD = OD(DD, CD),
                bD = OD(DD, CD);
              pD.push({
                name: cD,
                pixelType: ID,
                pLinear: iD,
                xSampling: fD,
                ySampling: bD
              })
            }
            return CD.value += 1, pD
          }(DD, CD, ID);
        case "chromaticities":
          return function(DD, CD) {
            return {
              redX: JD(DD, CD),
              redY: JD(DD, CD),
              greenX: JD(DD, CD),
              greenY: JD(DD, CD),
              blueX: JD(DD, CD),
              blueY: JD(DD, CD),
              whiteX: JD(DD, CD),
              whiteY: JD(DD, CD)
            }
          }(DD, CD);
        case "compression":
          return function(DD, CD) {
            return HD(DD, CD)
          }(DD, CD);
        case "box2i":
          return function(DD, CD) {
            return {
              xMin: OD(DD, CD),
              yMin: OD(DD, CD),
              xMax: OD(DD, CD),
              yMax: OD(DD, CD)
            }
          }(DD, CD);
        case "lineOrder":
          return function(DD, CD) {
            const cD = HD(DD, CD);
            return mD[cD]
          }(DD, CD);
        case "float":
          return JD(DD, CD);
        case "v2f":
          return function(DD, CD) {
            return [JD(DD, CD), JD(DD, CD)]
          }(DD, CD);
        case "v3f":
          return function(DD, CD) {
            return [JD(DD, CD), JD(DD, CD), JD(DD, CD)]
          }(DD, CD);
        case "int":
          return OD(DD, CD);
        case "rational":
          return function(DD, CD) {
            return [OD(DD, CD), PD(DD, CD)]
          }(DD, CD);
        case "timecode":
          return function(DD, CD) {
            return [PD(DD, CD), PD(DD, CD)]
          }(DD, CD);
        case "preview":
          return CD.value += ID, "skipped";
        default:
          return void(CD.value += ID)
      }
    }

    function zD(DD) {
      for (let CD = 1; CD < DD.length; CD++) {
        const cD = DD[CD - 1] + DD[CD] - 128;
        DD[CD] = cD
      }
    }

    function jD(DD, CD) {
      let cD = 0,
        ID = Math.floor((DD.length + 1) / 2),
        pD = 0;
      const iD = DD.length - 1;
      for (; !(pD > iD) && (CD[pD++] = DD[cD++], !(pD > iD));) CD[pD++] = DD[ID++]
    }! function(DD) {
      DD[DD.NO_COMPRESSION = 0] = "NO_COMPRESSION", DD[DD.RLE_COMPRESSION = 1] = "RLE_COMPRESSION", DD[DD.ZIPS_COMPRESSION = 2] = "ZIPS_COMPRESSION", DD[DD.ZIP_COMPRESSION = 3] = "ZIP_COMPRESSION", DD[DD.PIZ_COMPRESSION = 4] = "PIZ_COMPRESSION", DD[DD.PXR24_COMPRESSION = 5] = "PXR24_COMPRESSION"
    }(XD || (XD = {})),
    function(DD) {
      DD[DD.INCREASING_Y = 0] = "INCREASING_Y", DD[DD.DECREASING_Y = 1] = "DECREASING_Y"
    }(mD || (mD = {}));
    const lD = 20000630;

    function LD(DD, CD) {
      if (DD.getUint32(0, !0) != lD) throw new Error("Incorrect OpenEXR format");
      const cD = DD.getUint8(4),
        pD = DD.getUint8(5),
        iD = {
          singleTile: !!(2 & pD),
          longName: !!(4 & pD),
          deepFormat: !!(8 & pD),
          multiPart: !!(16 & pD)
        };
      CD.value = 8;
      const fD = {};
      let bD = !0;
      for (; bD;) {
        const cD = nD(DD.buffer, CD);
        if (cD) {
          const pD = nD(DD.buffer, CD),
            iD = VD(DD, CD, pD, PD(DD, CD));
          void 0 === iD ? ID.e.Warn(`Unknown header attribute type ${pD}'.`) : fD[cD] = iD
        } else bD = !1
      }
      if (0 != (-5 & pD)) throw new Error("Unsupported file format");
      return {
        version: cD,
        spec: iD,
        ...fD
      }
    }
    const TD = 32768,
      GD = 65535;

    function RD(DD, CD, cD, ID, pD) {
      for (; cD < DD;) CD = CD << 8 | xD(ID, pD), cD += 8;
      return {
        l: CD >> (cD -= DD) & (1 << DD) - 1,
        c: CD,
        lc: cD
      }
    }

    function kD(DD, CD, cD, ID) {
      return {
        c: DD = DD << 8 | xD(cD, ID),
        lc: CD += 8
      }
    }

    function dD(DD, CD, cD, ID, pD, iD, fD, bD, QD) {
      if (DD == CD) {
        if (ID < 8) {
          const DD = kD(cD, ID, pD, iD);
          cD = DD.c, ID = DD.lc
        }
        let DD = cD >> (ID -= 8);
        if (DD = new Uint8Array([DD])[0], bD.value + DD > QD) return null;
        const CD = fD[bD.value - 1];
        for (; DD-- > 0;) fD[bD.value++] = CD
      } else {
        if (!(bD.value < QD)) return null;
        fD[bD.value++] = DD
      }
      return {
        c: cD,
        lc: ID
      }
    }
    const YD = new Array(59);

    function WD(DD, CD, cD, ID, pD, iD) {
      const fD = CD;
      let bD = 0,
        QD = 0;
      for (; ID <= pD; ID++) {
        if (fD.value - CD.value > cD) return;
        let wD = RD(6, bD, QD, DD, fD);
        const SD = wD.l;
        if (bD = wD.c, QD = wD.lc, iD[ID] = SD, SD == ND) {
          if (fD.value - CD.value > cD) throw new Error("Error in HufUnpackEncTable");
          wD = RD(8, bD, QD, DD, fD);
          let SD = wD.l + gD;
          if (bD = wD.c, QD = wD.lc, ID + SD > pD + 1) throw new Error("Error in HufUnpackEncTable");
          for (; SD--;) iD[ID++] = 0;
          ID--
        } else if (SD >= vD) {
          let DD = SD - vD + 2;
          if (ID + DD > pD + 1) throw new Error("Error in HufUnpackEncTable");
          for (; DD--;) iD[ID++] = 0;
          ID--
        }
      }! function(DD) {
        for (let cD = 0; cD <= 58; ++cD) YD[cD] = 0;
        for (let cD = 0; cD < tD; ++cD) YD[DD[cD]] += 1;
        let CD = 0;
        for (let cD = 58; cD > 0; --cD) {
          const DD = CD + YD[cD] >> 1;
          YD[cD] = CD, CD = DD
        }
        for (let cD = 0; cD < tD; ++cD) {
          const CD = DD[cD];
          CD > 0 && (DD[cD] = CD | YD[CD]++ << 6)
        }
      }(iD)
    }

    function sD(DD) {
      return 63 & DD
    }

    function ED(DD) {
      return DD >> 6
    }

    function eD(DD, CD, cD, ID, pD, iD) {
      const fD = cD.value,
        bD = PD(CD, cD),
        QD = PD(CD, cD);
      cD.value += 4;
      const wD = PD(CD, cD);
      if (cD.value += 4, bD < 0 || bD >= tD || QD < 0 || QD >= tD) throw new Error("Wrong HUF_ENCSIZE");
      const SD = new Array(tD),
        BD = new Array(ZD);
      ! function(DD) {
        for (let CD = 0; CD < ZD; CD++) DD[CD] = {}, DD[CD].len = 0, DD[CD].lit = 0, DD[CD].p = null
      }(BD);
      if (WD(DD, cD, ID - (cD.value - fD), bD, QD, SD), wD > 8 * (ID - (cD.value - fD))) throw new Error("Wrong hufUncompress");
      ! function(DD, CD, cD, ID) {
        for (; CD <= cD; CD++) {
          const cD = ED(DD[CD]),
            pD = sD(DD[CD]);
          if (cD >> pD) throw new Error("Invalid table entry");
          if (pD > MD) {
            const DD = ID[cD >> pD - MD];
            if (DD.len) throw new Error("Invalid table entry");
            if (DD.lit++, DD.p) {
              const CD = DD.p;
              DD.p = new Array(DD.lit);
              for (let cD = 0; cD < DD.lit - 1; ++cD) DD.p[cD] = CD[cD]
            } else DD.p = new Array(1);
            DD.p[DD.lit - 1] = CD
          } else if (pD) {
            let DD = 0;
            for (let iD = 1 << MD - pD; iD > 0; iD--) {
              const iD = ID[(cD << MD - pD) + DD];
              if (iD.len || iD.p) throw new Error("Invalid table entry");
              iD.len = pD, iD.lit = CD, DD++
            }
          }
        }
      }(SD, bD, QD, BD),
      function(DD, CD, cD, ID, pD, iD, fD, bD, QD) {
        let wD = 0,
          SD = 0;
        const BD = fD,
          yD = Math.trunc(ID.value + (pD + 7) / 8);
        for (; ID.value < yD;) {
          let pD = kD(wD, SD, cD, ID);
          for (wD = pD.c, SD = pD.lc; SD >= MD;) {
            const fD = CD[wD >> SD - MD & oD];
            if (fD.len) {
              SD -= fD.len;
              const DD = dD(fD.lit, iD, wD, SD, cD, ID, bD, QD, BD);
              DD && (wD = DD.c, SD = DD.lc)
            } else {
              if (!fD.p) throw new Error("hufDecode issues");
              let CD;
              for (CD = 0; CD < fD.lit; CD++) {
                const MD = sD(DD[fD.p[CD]]);
                for (; SD < MD && ID.value < yD;) pD = kD(wD, SD, cD, ID), wD = pD.c, SD = pD.lc;
                if (SD >= MD && ED(DD[fD.p[CD]]) == (wD >> SD - MD & (1 << MD) - 1)) {
                  SD -= MD;
                  const DD = dD(fD.p[CD], iD, wD, SD, cD, ID, bD, QD, BD);
                  DD && (wD = DD.c, SD = DD.lc);
                  break
                }
              }
              if (CD == fD.lit) throw new Error("HufDecode issues")
            }
          }
        }
        const tD = 8 - pD & 7;
        for (wD >>= tD, SD -= tD; SD > 0;) {
          const DD = CD[wD << MD - SD & oD];
          if (!DD.len) throw new Error("HufDecode issues");
          {
            SD -= DD.len;
            const CD = dD(DD.lit, iD, wD, SD, cD, ID, bD, QD, BD);
            CD && (wD = CD.c, SD = CD.lc)
          }
        }
      }(SD, BD, DD, cD, wD, QD, iD, pD, {
        value: 0
      })
    }

    function uD(DD) {
      return 65535 & DD
    }

    function hD(DD) {
      const CD = uD(DD);
      return CD > 32767 ? CD - 65536 : CD
    }

    function rD(DD, CD) {
      const cD = hD(DD),
        ID = hD(CD),
        pD = cD + (1 & ID) + (ID >> 1);
      return {
        a: pD,
        b: pD - ID
      }
    }

    function AD(DD, CD) {
      const cD = uD(DD),
        ID = uD(CD),
        pD = cD - (ID >> 1) & GD;
      return {
        a: ID + pD - TD & GD,
        b: pD
      }
    }

    function FD(DD, CD, cD, ID, pD, iD, fD) {
      const bD = fD < 16384,
        QD = cD > pD ? pD : cD;
      let wD, SD, BD = 1;
      for (; BD <= QD;) BD <<= 1;
      for (BD >>= 1, wD = BD, BD >>= 1; BD >= 1;) {
        SD = 0;
        const fD = SD + iD * (pD - wD),
          QD = iD * BD,
          yD = iD * wD,
          MD = ID * BD,
          tD = ID * wD;
        let ZD, oD, vD, ND;
        for (; SD <= fD; SD += yD) {
          let pD = SD;
          const iD = SD + ID * (cD - wD);
          for (; pD <= iD; pD += tD) {
            const cD = pD + MD,
              ID = pD + QD,
              iD = ID + MD;
            if (bD) {
              let fD = rD(DD[pD + CD], DD[ID + CD]);
              ZD = fD.a, vD = fD.b, fD = rD(DD[cD + CD], DD[iD + CD]), oD = fD.a, ND = fD.b, fD = rD(ZD, oD), DD[pD + CD] = fD.a, DD[cD + CD] = fD.b, fD = rD(vD, ND), DD[ID + CD] = fD.a, DD[iD + CD] = fD.b
            } else {
              let fD = AD(DD[pD + CD], DD[ID + CD]);
              ZD = fD.a, vD = fD.b, fD = AD(DD[cD + CD], DD[iD + CD]), oD = fD.a, ND = fD.b, fD = AD(ZD, oD), DD[pD + CD] = fD.a, DD[cD + CD] = fD.b, fD = AD(vD, ND), DD[ID + CD] = fD.a, DD[iD + CD] = fD.b
            }
          }
          if (cD & BD) {
            const cD = pD + QD;
            let ID;
            ID = bD ? rD(DD[pD + CD], DD[cD + CD]) : AD(DD[pD + CD], DD[cD + CD]), ZD = ID.a, DD[cD + CD] = ID.b, DD[pD + CD] = ZD
          }
        }
        if (pD & BD) {
          let pD = SD;
          const iD = SD + ID * (cD - wD);
          for (; pD <= iD; pD += tD) {
            const cD = pD + MD;
            let ID;
            ID = bD ? rD(DD[pD + CD], DD[cD + CD]) : AD(DD[pD + CD], DD[cD + CD]), ZD = ID.a, DD[cD + CD] = ID.b, DD[pD + CD] = ZD
          }
        }
        wD = BD, BD >>= 1
      }
      return SD
    }

    function DC(DD) {
      return new DataView(DD.array.buffer, DD.offset.value, DD.size)
    }

    function CC(DD) {
      const CD = DD.viewer.buffer.slice(DD.offset.value, DD.offset.value + DD.size),
        cD = new Uint8Array(function(DD) {
          let CD = DD.byteLength;
          const cD = [];
          let ID = 0;
          const pD = new DataView(DD);
          for (; CD > 0;) {
            const DD = pD.getInt8(ID++);
            if (DD < 0) {
              const iD = -DD;
              CD -= iD + 1;
              for (let DD = 0; DD < iD; DD++) cD.push(pD.getUint8(ID++))
            } else {
              const iD = DD;
              CD -= 2;
              const fD = pD.getUint8(ID++);
              for (let DD = 0; DD < iD + 1; DD++) cD.push(fD)
            }
          }
          return cD
        }(CD)),
        ID = new Uint8Array(cD.length);
      return zD(cD), jD(cD, ID), new DataView(ID.buffer)
    }

    function cC(DD) {
      const CD = DD.array.slice(DD.offset.value, DD.offset.value + DD.size),
        cD = fflate.unzlibSync(CD),
        ID = new Uint8Array(cD.length);
      return zD(cD), jD(cD, ID), new DataView(ID.buffer)
    }

    function IC(DD) {
      const CD = DD.array.slice(DD.offset.value, DD.offset.value + DD.size),
        cD = fflate.unzlibSync(CD),
        ID = DD.lines * DD.channels * DD.width,
        pD = 1 == DD.type ? new Uint16Array(ID) : new Uint32Array(ID);
      let iD = 0,
        fD = 0;
      const bD = new Array(4);
      for (let QD = 0; QD < DD.lines; QD++)
        for (let CD = 0; CD < DD.channels; CD++) {
          let CD = 0;
          switch (DD.type) {
            case 1:
              bD[0] = iD, bD[1] = bD[0] + DD.width, iD = bD[1] + DD.width;
              for (let ID = 0; ID < DD.width; ++ID) {
                CD += cD[bD[0]++] << 8 | cD[bD[1]++], pD[fD] = CD, fD++
              }
              break;
            case 2:
              bD[0] = iD, bD[1] = bD[0] + DD.width, bD[2] = bD[1] + DD.width, iD = bD[2] + DD.width;
              for (let ID = 0; ID < DD.width; ++ID) {
                CD += cD[bD[0]++] << 24 | cD[bD[1]++] << 16 | cD[bD[2]++] << 8, pD[fD] = CD, fD++
              }
          }
        }
      return new DataView(pD.buffer)
    }

    function pC(DD) {
      const CD = DD.viewer,
        cD = {
          value: DD.offset.value
        },
        ID = new Uint16Array(DD.width * DD.scanlineBlockSize * (DD.channels * DD.type)),
        pD = new Uint8Array(yD);
      let iD = 0;
      const fD = new Array(DD.channels);
      for (let wD = 0; wD < DD.channels; wD++) fD[wD] = {}, fD[wD].start = iD, fD[wD].end = fD[wD].start, fD[wD].nx = DD.width, fD[wD].ny = DD.lines, fD[wD].size = DD.type, iD += fD[wD].nx * fD[wD].ny * fD[wD].size;
      const bD = UD(CD, cD),
        QD = UD(CD, cD);
      if (QD >= yD) throw new Error("Wrong PIZ_COMPRESSION BITMAP_SIZE");
      if (bD <= QD)
        for (let wD = 0; wD < QD - bD + 1; wD++) pD[wD + bD] = HD(CD, cD);
      const SD = new Uint16Array(BD),
        MD = function(DD, CD) {
          let cD = 0;
          for (let pD = 0; pD < BD; ++pD)(0 == pD || DD[pD >> 3] & 1 << (7 & pD)) && (CD[cD++] = pD);
          const ID = cD - 1;
          for (; cD < BD;) CD[cD++] = 0;
          return ID
        }(pD, SD),
        tD = PD(CD, cD);
      eD(DD.array, CD, cD, tD, ID, iD);
      for (let wD = 0; wD < DD.channels; ++wD) {
        const DD = fD[wD];
        for (let CD = 0; CD < fD[wD].size; ++CD) FD(ID, DD.start + CD, DD.nx, DD.size, DD.ny, DD.nx * DD.size, MD)
      }! function(DD, CD, cD) {
        for (let ID = 0; ID < cD; ++ID) CD[ID] = DD[CD[ID]]
      }(SD, ID, iD);
      let ZD = 0;
      const oD = new Uint8Array(ID.buffer.byteLength);
      for (let BD = 0; BD < DD.lines; BD++)
        for (let CD = 0; CD < DD.channels; CD++) {
          const DD = fD[CD],
            cD = DD.nx * DD.size,
            pD = new Uint8Array(ID.buffer, DD.end * wD, cD * wD);
          oD.set(pD, ZD), ZD += cD * wD, DD.end += cD
        }
      return new DataView(oD.buffer)
    }
    var iC, fC = cD(39245);
    ! function(DD) {
      DD[DD.Float = 0] = "Float", DD[DD.HalfFloat = 1] = "HalfFloat"
    }(iC || (iC = {}));
    class bC {}
    async function QC(DD, CD, cD, ID) {
      const pD = {
        size: 0,
        viewer: CD,
        array: new Uint8Array(CD.buffer),
        offset: cD,
        width: DD.dataWindow.xMax - DD.dataWindow.xMin + 1,
        height: DD.dataWindow.yMax - DD.dataWindow.yMin + 1,
        channels: DD.channels.length,
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
      switch (DD.compression) {
        case XD.NO_COMPRESSION:
          pD.lines = 1, pD.uncompress = DC;
          break;
        case XD.RLE_COMPRESSION:
          pD.lines = 1, pD.uncompress = CC;
          break;
        case XD.ZIPS_COMPRESSION:
          pD.lines = 1, pD.uncompress = cC, await fC.g.LoadScriptAsync(bC.FFLATEUrl);
          break;
        case XD.ZIP_COMPRESSION:
          pD.lines = 16, pD.uncompress = cC, await fC.g.LoadScriptAsync(bC.FFLATEUrl);
          break;
        case XD.PIZ_COMPRESSION:
          pD.lines = 32, pD.uncompress = pC;
          break;
        case XD.PXR24_COMPRESSION:
          pD.lines = 16, pD.uncompress = IC, await fC.g.LoadScriptAsync(bC.FFLATEUrl);
          break;
        default:
          throw new Error(XD[DD.compression] + " is unsupported")
      }
      pD.scanlineBlockSize = pD.lines;
      const iD = {};
      for (const bD of DD.channels) switch (bD.name) {
        case "R":
        case "G":
        case "B":
        case "A":
        case "Y":
          iD[bD.name] = !0, pD.type = bD.pixelType
      }
      let fD = !1;
      if (iD.R && iD.G && iD.B && iD.A) pD.outputChannels = 4, pD.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (iD.R && iD.G && iD.B) fD = !0, pD.outputChannels = 4, pD.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (iD.R && iD.G) pD.outputChannels = 2, pD.decodeChannels = {
        R: 0,
        G: 1
      };
      else if (iD.R) pD.outputChannels = 1, pD.decodeChannels = {
        R: 0
      };
      else {
        if (!iD.Y) throw new Error("EXRLoader.parse: file contains unsupported data channels.");
        pD.outputChannels = 1, pD.decodeChannels = {
          Y: 0
        }
      }
      if (1 === pD.type) switch (ID) {
        case iC.Float:
          pD.getter = KD, pD.inputSize = wD;
          break;
        case iC.HalfFloat:
          pD.getter = UD, pD.inputSize = wD
      } else {
        if (2 !== pD.type) throw new Error("Unsupported pixelType " + pD.type + " for " + DD.compression);
        switch (ID) {
          case iC.Float:
            pD.getter = JD, pD.inputSize = bD;
            break;
          case iC.HalfFloat:
            pD.getter = aD, pD.inputSize = bD
        }
      }
      pD.blockCount = pD.height / pD.scanlineBlockSize;
      for (let bD = 0; bD < pD.blockCount; bD++) qD(CD, cD);
      const QD = pD.width * pD.height * pD.outputChannels;
      switch (ID) {
        case iC.Float:
          pD.byteArray = new Float32Array(QD), pD.textureType = 1, fD && pD.byteArray.fill(1, 0, QD);
          break;
        case iC.HalfFloat:
          pD.byteArray = new Uint16Array(QD), pD.textureType = 2, fD && pD.byteArray.fill(15360, 0, QD);
          break;
        default:
          throw new Error("Unsupported type: " + ID)
      }
      let SD = 0;
      for (const bD of DD.channels) void 0 !== pD.decodeChannels[bD.name] && (pD.channelLineOffsets[bD.name] = SD * pD.width), SD += 2 * bD.pixelType;
      return pD.bytesPerLine = pD.width * SD, pD.outLineWidth = pD.width * pD.outputChannels, "INCREASING_Y" === DD.lineOrder ? pD.scanOrder = DD => DD : pD.scanOrder = DD => pD.height - 1 - DD, 4 == pD.outputChannels ? (pD.format = 5, pD.linearSpace = !0) : (pD.format = 6, pD.linearSpace = !1), pD
    }

    function wC(DD, CD, cD, ID) {
      const pD = {
        value: 0
      };
      for (let iD = 0; iD < DD.height / DD.scanlineBlockSize; iD++) {
        const fD = OD(cD, ID) - CD.dataWindow.yMin;
        DD.size = PD(cD, ID), DD.lines = fD + DD.scanlineBlockSize > DD.height ? DD.height - fD : DD.scanlineBlockSize;
        const bD = DD.size < DD.lines * DD.bytesPerLine && DD.uncompress ? DD.uncompress(DD) : DC(DD);
        ID.value += DD.size;
        for (let cD = 0; cD < DD.scanlineBlockSize; cD++) {
          const ID = iD * DD.scanlineBlockSize,
            fD = cD + DD.scanOrder(ID);
          if (fD >= DD.height) continue;
          const QD = cD * DD.bytesPerLine,
            wD = (DD.height - 1 - fD) * DD.outLineWidth;
          for (let cD = 0; cD < DD.channels; cD++) {
            const ID = CD.channels[cD].name,
              iD = DD.channelLineOffsets[ID],
              fD = DD.decodeChannels[ID];
            if (void 0 !== fD) {
              pD.value = QD + iD;
              for (let CD = 0; CD < DD.width; CD++) {
                const cD = wD + CD * DD.outputChannels + fD;
                DD.byteArray && (DD.byteArray[cD] = DD.getter(bD, pD))
              }
            }
          }
        }
      }
    }
    bC.DefaultOutputType = iC.HalfFloat, bC.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class SC {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(DD, CD, cD, ID, pD) {
        throw ".exr not supported in Cube."
      }
      loadData(DD, CD, cD) {
        const pD = new DataView(DD.buffer),
          iD = {
            value: 0
          },
          fD = LD(pD, iD);
        QC(fD, pD, iD, bC.DefaultOutputType).then((DD => {
          wC(DD, fD, pD, iD);
          const ID = fD.dataWindow.xMax - fD.dataWindow.xMin + 1,
            bD = fD.dataWindow.yMax - fD.dataWindow.yMin + 1;
          cD(ID, bD, CD.generateMipMaps, !1, (() => {
            const cD = CD.DZ();
            CD.format = fD.format, CD.type = DD.textureType, CD.invertY = !1, CD._gammaSpace = !fD.linearSpace, DD.byteArray && cD._uploadDataToTextureDirectly(CD, DD.byteArray, 0, 0, void 0, !0)
          }))
        })).catch((DD => {
          ID.e.Error("Failed to load EXR texture: ", DD)
        }))
      }
    }
    async function BC(DD) {
      const CD = new DataView(DD),
        cD = {
          value: 0
        },
        pD = LD(CD, cD);
      try {
        const DD = await QC(pD, CD, cD, iC.Float);
        return wC(DD, pD, CD, cD), DD.byteArray ? {
          width: pD.dataWindow.xMax - pD.dataWindow.xMin + 1,
          height: pD.dataWindow.yMax - pD.dataWindow.yMin + 1,
          data: new Float32Array(DD.byteArray)
        } : (ID.e.Error("Failed to decode EXR data: No byte array available."), {
          width: 0,
          height: 0,
          data: null
        })
      } catch (iD) {
        ID.e.Error("Failed to load EXR data: ", iD)
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
for (const DD in modules) Object.freeze(modules[DD]);