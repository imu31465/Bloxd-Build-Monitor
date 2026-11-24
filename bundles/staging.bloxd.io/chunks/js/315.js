export const id = 315;
export const ids = [315];
export const modules = {
  41777: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      ReadExrDataAsync: () => Az,
      _ExrTextureLoader: () => Rz
    });
    var pD = wD(38662),
      sD = wD(37125),
      KD = wD(39990);
    const rD = 4,
      LD = 4,
      cD = 1,
      gD = 2,
      RD = 8,
      AD = 65536,
      UD = AD >> 3,
      fD = 14,
      ID = 65537,
      BD = 1 << fD,
      GD = BD - 1,
      hD = 59,
      nD = 63,
      MD = 2 + nD - hD;
    var OD, JD;

    function ED(DD, zD) {
      const wD = new Uint8Array(DD);
      let pD = 0;
      for (; 0 != wD[zD.value + pD];) pD += 1;
      const sD = (new TextDecoder).decode(wD.slice(zD.value, zD.value + pD));
      return zD.value = zD.value + pD + 1, sD
    }

    function QD(DD, zD) {
      const wD = DD.getInt32(zD.value, !0);
      return zD.value += rD, wD
    }

    function XD(DD, zD) {
      const wD = DD.getUint32(zD.value, !0);
      return zD.value += rD, wD
    }

    function VD(DD, zD) {
      const wD = DD.getUint8(zD.value);
      return zD.value += cD, wD
    }

    function PD(DD, zD) {
      const wD = DD.getUint16(zD.value, !0);
      return zD.value += gD, wD
    }

    function CD(DD, zD) {
      const wD = DD[zD.value];
      return zD.value += cD, wD
    }

    function xD(DD, zD) {
      let wD;
      return wD = "getBigInt64" in DataView.prototype ? Number(DD.getBigInt64(zD.value, !0)) : DD.getUint32(zD.value + 4, !0) + Number(DD.getUint32(zD.value, !0) << 32), zD.value += RD, wD
    }

    function TD(DD, zD) {
      const wD = DD.getFloat32(zD.value, !0);
      return zD.value += LD, wD
    }

    function bD(DD, zD) {
      return (0, KD.c)(PD(DD, zD))
    }

    function jD(DD, zD) {
      return (0, KD.g)((0, sD.Clamp)(TD(DD, zD), -KD.f, KD.f))
    }

    function dD(DD, zD, wD, pD) {
      switch (wD) {
        case "string":
        case "stringvector":
        case "iccProfile":
          return function(DD, zD, wD) {
            const pD = (new TextDecoder).decode(new Uint8Array(DD).slice(zD.value, zD.value + wD));
            return zD.value = zD.value + wD, pD
          }(DD.buffer, zD, pD);
        case "chlist":
          return function(DD, zD, wD) {
            const pD = zD.value,
              sD = [];
            for (; zD.value < pD + wD - 1;) {
              const wD = ED(DD.buffer, zD),
                pD = QD(DD, zD),
                KD = VD(DD, zD);
              zD.value += 3;
              const rD = QD(DD, zD),
                LD = QD(DD, zD);
              sD.push({
                name: wD,
                pixelType: pD,
                pLinear: KD,
                xSampling: rD,
                ySampling: LD
              })
            }
            return zD.value += 1, sD
          }(DD, zD, pD);
        case "chromaticities":
          return function(DD, zD) {
            return {
              redX: TD(DD, zD),
              redY: TD(DD, zD),
              greenX: TD(DD, zD),
              greenY: TD(DD, zD),
              blueX: TD(DD, zD),
              blueY: TD(DD, zD),
              whiteX: TD(DD, zD),
              whiteY: TD(DD, zD)
            }
          }(DD, zD);
        case "compression":
          return function(DD, zD) {
            return VD(DD, zD)
          }(DD, zD);
        case "box2i":
          return function(DD, zD) {
            return {
              xMin: QD(DD, zD),
              yMin: QD(DD, zD),
              xMax: QD(DD, zD),
              yMax: QD(DD, zD)
            }
          }(DD, zD);
        case "lineOrder":
          return function(DD, zD) {
            const wD = VD(DD, zD);
            return JD[wD]
          }(DD, zD);
        case "float":
          return TD(DD, zD);
        case "v2f":
          return function(DD, zD) {
            return [TD(DD, zD), TD(DD, zD)]
          }(DD, zD);
        case "v3f":
          return function(DD, zD) {
            return [TD(DD, zD), TD(DD, zD), TD(DD, zD)]
          }(DD, zD);
        case "int":
          return QD(DD, zD);
        case "rational":
          return function(DD, zD) {
            return [QD(DD, zD), XD(DD, zD)]
          }(DD, zD);
        case "timecode":
          return function(DD, zD) {
            return [XD(DD, zD), XD(DD, zD)]
          }(DD, zD);
        case "preview":
          return zD.value += pD, "skipped";
        default:
          return void(zD.value += pD)
      }
    }

    function SD(DD) {
      for (let zD = 1; zD < DD.length; zD++) {
        const wD = DD[zD - 1] + DD[zD] - 128;
        DD[zD] = wD
      }
    }

    function iD(DD, zD) {
      let wD = 0,
        pD = Math.floor((DD.length + 1) / 2),
        sD = 0;
      const KD = DD.length - 1;
      for (; !(sD > KD) && (zD[sD++] = DD[wD++], !(sD > KD));) zD[sD++] = DD[pD++]
    }! function(DD) {
      DD[DD.NO_COMPRESSION = 0] = "NO_COMPRESSION", DD[DD.RLE_COMPRESSION = 1] = "RLE_COMPRESSION", DD[DD.ZIPS_COMPRESSION = 2] = "ZIPS_COMPRESSION", DD[DD.ZIP_COMPRESSION = 3] = "ZIP_COMPRESSION", DD[DD.PIZ_COMPRESSION = 4] = "PIZ_COMPRESSION", DD[DD.PXR24_COMPRESSION = 5] = "PXR24_COMPRESSION"
    }(OD || (OD = {})),
    function(DD) {
      DD[DD.INCREASING_Y = 0] = "INCREASING_Y", DD[DD.DECREASING_Y = 1] = "DECREASING_Y"
    }(JD || (JD = {}));
    const lD = 20000630;

    function WD(DD, zD) {
      if (DD.getUint32(0, !0) != lD) throw new Error("Incorrect OpenEXR format");
      const wD = DD.getUint8(4),
        sD = DD.getUint8(5),
        KD = {
          singleTile: !!(2 & sD),
          longName: !!(4 & sD),
          deepFormat: !!(8 & sD),
          multiPart: !!(16 & sD)
        };
      zD.value = 8;
      const rD = {};
      let LD = !0;
      for (; LD;) {
        const wD = ED(DD.buffer, zD);
        if (wD) {
          const sD = ED(DD.buffer, zD),
            KD = dD(DD, zD, sD, XD(DD, zD));
          void 0 === KD ? pD.d.Warn(`Unknown header attribute type ${sD}'.`) : rD[wD] = KD
        } else LD = !1
      }
      if (0 != (-5 & sD)) throw new Error("Unsupported file format");
      return {
        version: wD,
        spec: KD,
        ...rD
      }
    }
    const ND = 32768,
      ZD = 65535;

    function yD(DD, zD, wD, pD, sD) {
      for (; wD < DD;) zD = zD << 8 | CD(pD, sD), wD += 8;
      return {
        l: zD >> (wD -= DD) & (1 << DD) - 1,
        c: zD,
        lc: wD
      }
    }

    function kD(DD, zD, wD, pD) {
      return {
        c: DD = DD << 8 | CD(wD, pD),
        lc: zD += 8
      }
    }

    function mD(DD, zD, wD, pD, sD, KD, rD, LD, cD) {
      if (DD == zD) {
        if (pD < 8) {
          const DD = kD(wD, pD, sD, KD);
          wD = DD.c, pD = DD.lc
        }
        let DD = wD >> (pD -= 8);
        if (DD = new Uint8Array([DD])[0], LD.value + DD > cD) return null;
        const zD = rD[LD.value - 1];
        for (; DD-- > 0;) rD[LD.value++] = zD
      } else {
        if (!(LD.value < cD)) return null;
        rD[LD.value++] = DD
      }
      return {
        c: wD,
        lc: pD
      }
    }
    const eD = new Array(59);

    function oD(DD, zD, wD, pD, sD, KD) {
      const rD = zD;
      let LD = 0,
        cD = 0;
      for (; pD <= sD; pD++) {
        if (rD.value - zD.value > wD) return;
        let gD = yD(6, LD, cD, DD, rD);
        const RD = gD.l;
        if (LD = gD.c, cD = gD.lc, KD[pD] = RD, RD == nD) {
          if (rD.value - zD.value > wD) throw new Error("Error in HufUnpackEncTable");
          gD = yD(8, LD, cD, DD, rD);
          let RD = gD.l + MD;
          if (LD = gD.c, cD = gD.lc, pD + RD > sD + 1) throw new Error("Error in HufUnpackEncTable");
          for (; RD--;) KD[pD++] = 0;
          pD--
        } else if (RD >= hD) {
          let DD = RD - hD + 2;
          if (pD + DD > sD + 1) throw new Error("Error in HufUnpackEncTable");
          for (; DD--;) KD[pD++] = 0;
          pD--
        }
      }! function(DD) {
        for (let wD = 0; wD <= 58; ++wD) eD[wD] = 0;
        for (let wD = 0; wD < ID; ++wD) eD[DD[wD]] += 1;
        let zD = 0;
        for (let wD = 58; wD > 0; --wD) {
          const DD = zD + eD[wD] >> 1;
          eD[wD] = zD, zD = DD
        }
        for (let wD = 0; wD < ID; ++wD) {
          const zD = DD[wD];
          zD > 0 && (DD[wD] = zD | eD[zD]++ << 6)
        }
      }(KD)
    }

    function aD(DD) {
      return 63 & DD
    }

    function uD(DD) {
      return DD >> 6
    }

    function vD(DD, zD, wD, pD, sD, KD) {
      const rD = wD.value,
        LD = XD(zD, wD),
        cD = XD(zD, wD);
      wD.value += 4;
      const gD = XD(zD, wD);
      if (wD.value += 4, LD < 0 || LD >= ID || cD < 0 || cD >= ID) throw new Error("Wrong HUF_ENCSIZE");
      const RD = new Array(ID),
        AD = new Array(BD);
      ! function(DD) {
        for (let zD = 0; zD < BD; zD++) DD[zD] = {}, DD[zD].len = 0, DD[zD].lit = 0, DD[zD].p = null
      }(AD);
      if (oD(DD, wD, pD - (wD.value - rD), LD, cD, RD), gD > 8 * (pD - (wD.value - rD))) throw new Error("Wrong hufUncompress");
      ! function(DD, zD, wD, pD) {
        for (; zD <= wD; zD++) {
          const wD = uD(DD[zD]),
            sD = aD(DD[zD]);
          if (wD >> sD) throw new Error("Invalid table entry");
          if (sD > fD) {
            const DD = pD[wD >> sD - fD];
            if (DD.len) throw new Error("Invalid table entry");
            if (DD.lit++, DD.p) {
              const zD = DD.p;
              DD.p = new Array(DD.lit);
              for (let wD = 0; wD < DD.lit - 1; ++wD) DD.p[wD] = zD[wD]
            } else DD.p = new Array(1);
            DD.p[DD.lit - 1] = zD
          } else if (sD) {
            let DD = 0;
            for (let KD = 1 << fD - sD; KD > 0; KD--) {
              const KD = pD[(wD << fD - sD) + DD];
              if (KD.len || KD.p) throw new Error("Invalid table entry");
              KD.len = sD, KD.lit = zD, DD++
            }
          }
        }
      }(RD, LD, cD, AD),
      function(DD, zD, wD, pD, sD, KD, rD, LD, cD) {
        let gD = 0,
          RD = 0;
        const AD = rD,
          UD = Math.trunc(pD.value + (sD + 7) / 8);
        for (; pD.value < UD;) {
          let sD = kD(gD, RD, wD, pD);
          for (gD = sD.c, RD = sD.lc; RD >= fD;) {
            const rD = zD[gD >> RD - fD & GD];
            if (rD.len) {
              RD -= rD.len;
              const DD = mD(rD.lit, KD, gD, RD, wD, pD, LD, cD, AD);
              DD && (gD = DD.c, RD = DD.lc)
            } else {
              if (!rD.p) throw new Error("hufDecode issues");
              let zD;
              for (zD = 0; zD < rD.lit; zD++) {
                const fD = aD(DD[rD.p[zD]]);
                for (; RD < fD && pD.value < UD;) sD = kD(gD, RD, wD, pD), gD = sD.c, RD = sD.lc;
                if (RD >= fD && uD(DD[rD.p[zD]]) == (gD >> RD - fD & (1 << fD) - 1)) {
                  RD -= fD;
                  const DD = mD(rD.p[zD], KD, gD, RD, wD, pD, LD, cD, AD);
                  DD && (gD = DD.c, RD = DD.lc);
                  break
                }
              }
              if (zD == rD.lit) throw new Error("HufDecode issues")
            }
          }
        }
        const ID = 8 - sD & 7;
        for (gD >>= ID, RD -= ID; RD > 0;) {
          const DD = zD[gD << fD - RD & GD];
          if (!DD.len) throw new Error("HufDecode issues");
          {
            RD -= DD.len;
            const zD = mD(DD.lit, KD, gD, RD, wD, pD, LD, cD, AD);
            zD && (gD = zD.c, RD = zD.lc)
          }
        }
      }(RD, AD, DD, wD, gD, cD, KD, sD, {
        value: 0
      })
    }

    function tD(DD) {
      return 65535 & DD
    }

    function FD(DD) {
      const zD = tD(DD);
      return zD > 32767 ? zD - 65536 : zD
    }

    function YD(DD, zD) {
      const wD = FD(DD),
        pD = FD(zD),
        sD = wD + (1 & pD) + (pD >> 1);
      return {
        a: sD,
        b: sD - pD
      }
    }

    function HD(DD, zD) {
      const wD = tD(DD),
        pD = tD(zD),
        sD = wD - (pD >> 1) & ZD;
      return {
        a: pD + sD - ND & ZD,
        b: sD
      }
    }

    function qD(DD, zD, wD, pD, sD, KD, rD) {
      const LD = rD < 16384,
        cD = wD > sD ? sD : wD;
      let gD, RD, AD = 1;
      for (; AD <= cD;) AD <<= 1;
      for (AD >>= 1, gD = AD, AD >>= 1; AD >= 1;) {
        RD = 0;
        const rD = RD + KD * (sD - gD),
          cD = KD * AD,
          UD = KD * gD,
          fD = pD * AD,
          ID = pD * gD;
        let BD, GD, hD, nD;
        for (; RD <= rD; RD += UD) {
          let sD = RD;
          const KD = RD + pD * (wD - gD);
          for (; sD <= KD; sD += ID) {
            const wD = sD + fD,
              pD = sD + cD,
              KD = pD + fD;
            if (LD) {
              let rD = YD(DD[sD + zD], DD[pD + zD]);
              BD = rD.a, hD = rD.b, rD = YD(DD[wD + zD], DD[KD + zD]), GD = rD.a, nD = rD.b, rD = YD(BD, GD), DD[sD + zD] = rD.a, DD[wD + zD] = rD.b, rD = YD(hD, nD), DD[pD + zD] = rD.a, DD[KD + zD] = rD.b
            } else {
              let rD = HD(DD[sD + zD], DD[pD + zD]);
              BD = rD.a, hD = rD.b, rD = HD(DD[wD + zD], DD[KD + zD]), GD = rD.a, nD = rD.b, rD = HD(BD, GD), DD[sD + zD] = rD.a, DD[wD + zD] = rD.b, rD = HD(hD, nD), DD[pD + zD] = rD.a, DD[KD + zD] = rD.b
            }
          }
          if (wD & AD) {
            const wD = sD + cD;
            let pD;
            pD = LD ? YD(DD[sD + zD], DD[wD + zD]) : HD(DD[sD + zD], DD[wD + zD]), BD = pD.a, DD[wD + zD] = pD.b, DD[sD + zD] = BD
          }
        }
        if (sD & AD) {
          let sD = RD;
          const KD = RD + pD * (wD - gD);
          for (; sD <= KD; sD += ID) {
            const wD = sD + fD;
            let pD;
            pD = LD ? YD(DD[sD + zD], DD[wD + zD]) : HD(DD[sD + zD], DD[wD + zD]), BD = pD.a, DD[wD + zD] = pD.b, DD[sD + zD] = BD
          }
        }
        gD = AD, AD >>= 1
      }
      return RD
    }

    function Dz(DD) {
      return new DataView(DD.array.buffer, DD.offset.value, DD.size)
    }

    function zz(DD) {
      const zD = DD.viewer.buffer.slice(DD.offset.value, DD.offset.value + DD.size),
        wD = new Uint8Array(function(DD) {
          let zD = DD.byteLength;
          const wD = [];
          let pD = 0;
          const sD = new DataView(DD);
          for (; zD > 0;) {
            const DD = sD.getInt8(pD++);
            if (DD < 0) {
              const KD = -DD;
              zD -= KD + 1;
              for (let DD = 0; DD < KD; DD++) wD.push(sD.getUint8(pD++))
            } else {
              const KD = DD;
              zD -= 2;
              const rD = sD.getUint8(pD++);
              for (let DD = 0; DD < KD + 1; DD++) wD.push(rD)
            }
          }
          return wD
        }(zD)),
        pD = new Uint8Array(wD.length);
      return SD(wD), iD(wD, pD), new DataView(pD.buffer)
    }

    function wz(DD) {
      const zD = DD.array.slice(DD.offset.value, DD.offset.value + DD.size),
        wD = fflate.unzlibSync(zD),
        pD = new Uint8Array(wD.length);
      return SD(wD), iD(wD, pD), new DataView(pD.buffer)
    }

    function pz(DD) {
      const zD = DD.array.slice(DD.offset.value, DD.offset.value + DD.size),
        wD = fflate.unzlibSync(zD),
        pD = DD.lines * DD.channels * DD.width,
        sD = 1 == DD.type ? new Uint16Array(pD) : new Uint32Array(pD);
      let KD = 0,
        rD = 0;
      const LD = new Array(4);
      for (let cD = 0; cD < DD.lines; cD++)
        for (let zD = 0; zD < DD.channels; zD++) {
          let zD = 0;
          switch (DD.type) {
            case 1:
              LD[0] = KD, LD[1] = LD[0] + DD.width, KD = LD[1] + DD.width;
              for (let pD = 0; pD < DD.width; ++pD) {
                zD += wD[LD[0]++] << 8 | wD[LD[1]++], sD[rD] = zD, rD++
              }
              break;
            case 2:
              LD[0] = KD, LD[1] = LD[0] + DD.width, LD[2] = LD[1] + DD.width, KD = LD[2] + DD.width;
              for (let pD = 0; pD < DD.width; ++pD) {
                zD += wD[LD[0]++] << 24 | wD[LD[1]++] << 16 | wD[LD[2]++] << 8, sD[rD] = zD, rD++
              }
          }
        }
      return new DataView(sD.buffer)
    }

    function sz(DD) {
      const zD = DD.viewer,
        wD = {
          value: DD.offset.value
        },
        pD = new Uint16Array(DD.width * DD.scanlineBlockSize * (DD.channels * DD.type)),
        sD = new Uint8Array(UD);
      let KD = 0;
      const rD = new Array(DD.channels);
      for (let gD = 0; gD < DD.channels; gD++) rD[gD] = {}, rD[gD].start = KD, rD[gD].end = rD[gD].start, rD[gD].nx = DD.width, rD[gD].ny = DD.lines, rD[gD].size = DD.type, KD += rD[gD].nx * rD[gD].ny * rD[gD].size;
      const LD = PD(zD, wD),
        cD = PD(zD, wD);
      if (cD >= UD) throw new Error("Wrong PIZ_COMPRESSION BITMAP_SIZE");
      if (LD <= cD)
        for (let gD = 0; gD < cD - LD + 1; gD++) sD[gD + LD] = VD(zD, wD);
      const RD = new Uint16Array(AD),
        fD = function(DD, zD) {
          let wD = 0;
          for (let sD = 0; sD < AD; ++sD)(0 == sD || DD[sD >> 3] & 1 << (7 & sD)) && (zD[wD++] = sD);
          const pD = wD - 1;
          for (; wD < AD;) zD[wD++] = 0;
          return pD
        }(sD, RD),
        ID = XD(zD, wD);
      vD(DD.array, zD, wD, ID, pD, KD);
      for (let gD = 0; gD < DD.channels; ++gD) {
        const DD = rD[gD];
        for (let zD = 0; zD < rD[gD].size; ++zD) qD(pD, DD.start + zD, DD.nx, DD.size, DD.ny, DD.nx * DD.size, fD)
      }! function(DD, zD, wD) {
        for (let pD = 0; pD < wD; ++pD) zD[pD] = DD[zD[pD]]
      }(RD, pD, KD);
      let BD = 0;
      const GD = new Uint8Array(pD.buffer.byteLength);
      for (let AD = 0; AD < DD.lines; AD++)
        for (let zD = 0; zD < DD.channels; zD++) {
          const DD = rD[zD],
            wD = DD.nx * DD.size,
            sD = new Uint8Array(pD.buffer, DD.end * gD, wD * gD);
          GD.set(sD, BD), BD += wD * gD, DD.end += wD
        }
      return new DataView(GD.buffer)
    }
    var Kz, rz = wD(40027);
    ! function(DD) {
      DD[DD.Float = 0] = "Float", DD[DD.HalfFloat = 1] = "HalfFloat"
    }(Kz || (Kz = {}));
    class Lz {}
    async function cz(DD, zD, wD, pD) {
      const sD = {
        size: 0,
        viewer: zD,
        array: new Uint8Array(zD.buffer),
        offset: wD,
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
        case OD.NO_COMPRESSION:
          sD.lines = 1, sD.uncompress = Dz;
          break;
        case OD.RLE_COMPRESSION:
          sD.lines = 1, sD.uncompress = zz;
          break;
        case OD.ZIPS_COMPRESSION:
          sD.lines = 1, sD.uncompress = wz, await rz.h.LoadScriptAsync(Lz.FFLATEUrl);
          break;
        case OD.ZIP_COMPRESSION:
          sD.lines = 16, sD.uncompress = wz, await rz.h.LoadScriptAsync(Lz.FFLATEUrl);
          break;
        case OD.PIZ_COMPRESSION:
          sD.lines = 32, sD.uncompress = sz;
          break;
        case OD.PXR24_COMPRESSION:
          sD.lines = 16, sD.uncompress = pz, await rz.h.LoadScriptAsync(Lz.FFLATEUrl);
          break;
        default:
          throw new Error(OD[DD.compression] + " is unsupported")
      }
      sD.scanlineBlockSize = sD.lines;
      const KD = {};
      for (const LD of DD.channels) switch (LD.name) {
        case "R":
        case "G":
        case "B":
        case "A":
        case "Y":
          KD[LD.name] = !0, sD.type = LD.pixelType
      }
      let rD = !1;
      if (KD.R && KD.G && KD.B && KD.A) sD.outputChannels = 4, sD.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (KD.R && KD.G && KD.B) rD = !0, sD.outputChannels = 4, sD.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (KD.R && KD.G) sD.outputChannels = 2, sD.decodeChannels = {
        R: 0,
        G: 1
      };
      else if (KD.R) sD.outputChannels = 1, sD.decodeChannels = {
        R: 0
      };
      else {
        if (!KD.Y) throw new Error("EXRLoader.parse: file contains unsupported data channels.");
        sD.outputChannels = 1, sD.decodeChannels = {
          Y: 0
        }
      }
      if (1 === sD.type) switch (pD) {
        case Kz.Float:
          sD.getter = bD, sD.inputSize = gD;
          break;
        case Kz.HalfFloat:
          sD.getter = PD, sD.inputSize = gD
      } else {
        if (2 !== sD.type) throw new Error("Unsupported pixelType " + sD.type + " for " + DD.compression);
        switch (pD) {
          case Kz.Float:
            sD.getter = TD, sD.inputSize = LD;
            break;
          case Kz.HalfFloat:
            sD.getter = jD, sD.inputSize = LD
        }
      }
      sD.blockCount = sD.height / sD.scanlineBlockSize;
      for (let LD = 0; LD < sD.blockCount; LD++) xD(zD, wD);
      const cD = sD.width * sD.height * sD.outputChannels;
      switch (pD) {
        case Kz.Float:
          sD.byteArray = new Float32Array(cD), sD.textureType = 1, rD && sD.byteArray.fill(1, 0, cD);
          break;
        case Kz.HalfFloat:
          sD.byteArray = new Uint16Array(cD), sD.textureType = 2, rD && sD.byteArray.fill(15360, 0, cD);
          break;
        default:
          throw new Error("Unsupported type: " + pD)
      }
      let RD = 0;
      for (const LD of DD.channels) void 0 !== sD.decodeChannels[LD.name] && (sD.channelLineOffsets[LD.name] = RD * sD.width), RD += 2 * LD.pixelType;
      return sD.bytesPerLine = sD.width * RD, sD.outLineWidth = sD.width * sD.outputChannels, "INCREASING_Y" === DD.lineOrder ? sD.scanOrder = DD => DD : sD.scanOrder = DD => sD.height - 1 - DD, 4 == sD.outputChannels ? (sD.format = 5, sD.linearSpace = !0) : (sD.format = 6, sD.linearSpace = !1), sD
    }

    function gz(DD, zD, wD, pD) {
      const sD = {
        value: 0
      };
      for (let KD = 0; KD < DD.height / DD.scanlineBlockSize; KD++) {
        const rD = QD(wD, pD) - zD.dataWindow.yMin;
        DD.size = XD(wD, pD), DD.lines = rD + DD.scanlineBlockSize > DD.height ? DD.height - rD : DD.scanlineBlockSize;
        const LD = DD.size < DD.lines * DD.bytesPerLine && DD.uncompress ? DD.uncompress(DD) : Dz(DD);
        pD.value += DD.size;
        for (let wD = 0; wD < DD.scanlineBlockSize; wD++) {
          const pD = KD * DD.scanlineBlockSize,
            rD = wD + DD.scanOrder(pD);
          if (rD >= DD.height) continue;
          const cD = wD * DD.bytesPerLine,
            gD = (DD.height - 1 - rD) * DD.outLineWidth;
          for (let wD = 0; wD < DD.channels; wD++) {
            const pD = zD.channels[wD].name,
              KD = DD.channelLineOffsets[pD],
              rD = DD.decodeChannels[pD];
            if (void 0 !== rD) {
              sD.value = cD + KD;
              for (let zD = 0; zD < DD.width; zD++) {
                const wD = gD + zD * DD.outputChannels + rD;
                DD.byteArray && (DD.byteArray[wD] = DD.getter(LD, sD))
              }
            }
          }
        }
      }
    }
    Lz.DefaultOutputType = Kz.HalfFloat, Lz.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class Rz {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(DD, zD, wD, pD, sD) {
        throw ".exr not supported in Cube."
      }
      loadData(DD, zD, wD) {
        const sD = new DataView(DD.buffer),
          KD = {
            value: 0
          },
          rD = WD(sD, KD);
        cz(rD, sD, KD, Lz.DefaultOutputType).then((DD => {
          gz(DD, rD, sD, KD);
          const pD = rD.dataWindow.xMax - rD.dataWindow.xMin + 1,
            LD = rD.dataWindow.yMax - rD.dataWindow.yMin + 1;
          wD(pD, LD, zD.generateMipMaps, !1, (() => {
            const wD = zD.iI();
            zD.format = rD.format, zD.type = DD.textureType, zD.invertY = !1, zD._gammaSpace = !rD.linearSpace, DD.byteArray && wD._uploadDataToTextureDirectly(zD, DD.byteArray, 0, 0, void 0, !0)
          }))
        })).catch((DD => {
          pD.d.Error("Failed to load EXR texture: ", DD)
        }))
      }
    }
    async function Az(DD) {
      const zD = new DataView(DD),
        wD = {
          value: 0
        },
        sD = WD(zD, wD);
      try {
        const DD = await cz(sD, zD, wD, Kz.Float);
        return gz(DD, sD, zD, wD), DD.byteArray ? {
          width: sD.dataWindow.xMax - sD.dataWindow.xMin + 1,
          height: sD.dataWindow.yMax - sD.dataWindow.yMin + 1,
          data: new Float32Array(DD.byteArray)
        } : (pD.d.Error("Failed to decode EXR data: No byte array available."), {
          width: 0,
          height: 0,
          data: null
        })
      } catch (KD) {
        pD.d.Error("Failed to load EXR data: ", KD)
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