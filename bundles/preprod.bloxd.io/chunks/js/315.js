export const id = 315;
export const ids = [315];
export const modules = {
  41687: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      ReadExrDataAsync: () => Wz,
      _ExrTextureLoader: () => Fz
    });
    var QC = ZC(38507),
      wC = ZC(36991),
      bC = ZC(39889);
    const nC = 4,
      fC = 4,
      oC = 1,
      qC = 2,
      FC = 8,
      WC = 65536,
      NC = WC >> 3,
      MC = 14,
      gC = 65537,
      SC = 1 << MC,
      pC = SC - 1,
      PC = 59,
      GC = 63,
      RC = 2 + GC - PC;
    var AC, xC;

    function JC(CC, zC) {
      const ZC = new Uint8Array(CC);
      let QC = 0;
      for (; 0 != ZC[zC.value + QC];) QC += 1;
      const wC = (new TextDecoder).decode(ZC.slice(zC.value, zC.value + QC));
      return zC.value = zC.value + QC + 1, wC
    }

    function IC(CC, zC) {
      const ZC = CC.getInt32(zC.value, !0);
      return zC.value += nC, ZC
    }

    function iC(CC, zC) {
      const ZC = CC.getUint32(zC.value, !0);
      return zC.value += nC, ZC
    }

    function vC(CC, zC) {
      const ZC = CC.getUint8(zC.value);
      return zC.value += oC, ZC
    }

    function eC(CC, zC) {
      const ZC = CC.getUint16(zC.value, !0);
      return zC.value += qC, ZC
    }

    function hC(CC, zC) {
      const ZC = CC[zC.value];
      return zC.value += oC, ZC
    }

    function KC(CC, zC) {
      let ZC;
      return ZC = "getBigInt64" in DataView.prototype ? Number(CC.getBigInt64(zC.value, !0)) : CC.getUint32(zC.value + 4, !0) + Number(CC.getUint32(zC.value, !0) << 32), zC.value += FC, ZC
    }

    function YC(CC, zC) {
      const ZC = CC.getFloat32(zC.value, !0);
      return zC.value += fC, ZC
    }

    function dC(CC, zC) {
      return (0, bC.e)(eC(CC, zC))
    }

    function mC(CC, zC) {
      return (0, bC.k)((0, wC.Clamp)(YC(CC, zC), -bC.h, bC.h))
    }

    function HC(CC, zC, ZC, QC) {
      switch (ZC) {
        case "string":
        case "stringvector":
        case "iccProfile":
          return function(CC, zC, ZC) {
            const QC = (new TextDecoder).decode(new Uint8Array(CC).slice(zC.value, zC.value + ZC));
            return zC.value = zC.value + ZC, QC
          }(CC.buffer, zC, QC);
        case "chlist":
          return function(CC, zC, ZC) {
            const QC = zC.value,
              wC = [];
            for (; zC.value < QC + ZC - 1;) {
              const ZC = JC(CC.buffer, zC),
                QC = IC(CC, zC),
                bC = vC(CC, zC);
              zC.value += 3;
              const nC = IC(CC, zC),
                fC = IC(CC, zC);
              wC.push({
                name: ZC,
                pixelType: QC,
                pLinear: bC,
                xSampling: nC,
                ySampling: fC
              })
            }
            return zC.value += 1, wC
          }(CC, zC, QC);
        case "chromaticities":
          return function(CC, zC) {
            return {
              redX: YC(CC, zC),
              redY: YC(CC, zC),
              greenX: YC(CC, zC),
              greenY: YC(CC, zC),
              blueX: YC(CC, zC),
              blueY: YC(CC, zC),
              whiteX: YC(CC, zC),
              whiteY: YC(CC, zC)
            }
          }(CC, zC);
        case "compression":
          return function(CC, zC) {
            return vC(CC, zC)
          }(CC, zC);
        case "box2i":
          return function(CC, zC) {
            return {
              xMin: IC(CC, zC),
              yMin: IC(CC, zC),
              xMax: IC(CC, zC),
              yMax: IC(CC, zC)
            }
          }(CC, zC);
        case "lineOrder":
          return function(CC, zC) {
            const ZC = vC(CC, zC);
            return xC[ZC]
          }(CC, zC);
        case "float":
          return YC(CC, zC);
        case "v2f":
          return function(CC, zC) {
            return [YC(CC, zC), YC(CC, zC)]
          }(CC, zC);
        case "v3f":
          return function(CC, zC) {
            return [YC(CC, zC), YC(CC, zC), YC(CC, zC)]
          }(CC, zC);
        case "int":
          return IC(CC, zC);
        case "rational":
          return function(CC, zC) {
            return [IC(CC, zC), iC(CC, zC)]
          }(CC, zC);
        case "timecode":
          return function(CC, zC) {
            return [iC(CC, zC), iC(CC, zC)]
          }(CC, zC);
        case "preview":
          return zC.value += QC, "skipped";
        default:
          return void(zC.value += QC)
      }
    }

    function EC(CC) {
      for (let zC = 1; zC < CC.length; zC++) {
        const ZC = CC[zC - 1] + CC[zC] - 128;
        CC[zC] = ZC
      }
    }

    function lC(CC, zC) {
      let ZC = 0,
        QC = Math.floor((CC.length + 1) / 2),
        wC = 0;
      const bC = CC.length - 1;
      for (; !(wC > bC) && (zC[wC++] = CC[ZC++], !(wC > bC));) zC[wC++] = CC[QC++]
    }! function(CC) {
      CC[CC.NO_COMPRESSION = 0] = "NO_COMPRESSION", CC[CC.RLE_COMPRESSION = 1] = "RLE_COMPRESSION", CC[CC.ZIPS_COMPRESSION = 2] = "ZIPS_COMPRESSION", CC[CC.ZIP_COMPRESSION = 3] = "ZIP_COMPRESSION", CC[CC.PIZ_COMPRESSION = 4] = "PIZ_COMPRESSION", CC[CC.PXR24_COMPRESSION = 5] = "PXR24_COMPRESSION"
    }(AC || (AC = {})),
    function(CC) {
      CC[CC.INCREASING_Y = 0] = "INCREASING_Y", CC[CC.DECREASING_Y = 1] = "DECREASING_Y"
    }(xC || (xC = {}));
    const XC = 20000630;

    function cC(CC, zC) {
      if (CC.getUint32(0, !0) != XC) throw new Error("Incorrect OpenEXR format");
      const ZC = CC.getUint8(4),
        wC = CC.getUint8(5),
        bC = {
          singleTile: !!(2 & wC),
          longName: !!(4 & wC),
          deepFormat: !!(8 & wC),
          multiPart: !!(16 & wC)
        };
      zC.value = 8;
      const nC = {};
      let fC = !0;
      for (; fC;) {
        const ZC = JC(CC.buffer, zC);
        if (ZC) {
          const wC = JC(CC.buffer, zC),
            bC = HC(CC, zC, wC, iC(CC, zC));
          void 0 === bC ? QC.c.Warn(`Unknown header attribute type ${wC}'.`) : nC[ZC] = bC
        } else fC = !1
      }
      if (0 != (-5 & wC)) throw new Error("Unsupported file format");
      return {
        version: ZC,
        spec: bC,
        ...nC
      }
    }
    const uC = 32768,
      rC = 65535;

    function sC(CC, zC, ZC, QC, wC) {
      for (; ZC < CC;) zC = zC << 8 | hC(QC, wC), ZC += 8;
      return {
        l: zC >> (ZC -= CC) & (1 << CC) - 1,
        c: zC,
        lc: ZC
      }
    }

    function TC(CC, zC, ZC, QC) {
      return {
        c: CC = CC << 8 | hC(ZC, QC),
        lc: zC += 8
      }
    }

    function aC(CC, zC, ZC, QC, wC, bC, nC, fC, oC) {
      if (CC == zC) {
        if (QC < 8) {
          const CC = TC(ZC, QC, wC, bC);
          ZC = CC.c, QC = CC.lc
        }
        let CC = ZC >> (QC -= 8);
        if (CC = new Uint8Array([CC])[0], fC.value + CC > oC) return null;
        const zC = nC[fC.value - 1];
        for (; CC-- > 0;) nC[fC.value++] = zC
      } else {
        if (!(fC.value < oC)) return null;
        nC[fC.value++] = CC
      }
      return {
        c: ZC,
        lc: QC
      }
    }
    const tC = new Array(59);

    function DC(CC, zC, ZC, QC, wC, bC) {
      const nC = zC;
      let fC = 0,
        oC = 0;
      for (; QC <= wC; QC++) {
        if (nC.value - zC.value > ZC) return;
        let qC = sC(6, fC, oC, CC, nC);
        const FC = qC.l;
        if (fC = qC.c, oC = qC.lc, bC[QC] = FC, FC == GC) {
          if (nC.value - zC.value > ZC) throw new Error("Error in HufUnpackEncTable");
          qC = sC(8, fC, oC, CC, nC);
          let FC = qC.l + RC;
          if (fC = qC.c, oC = qC.lc, QC + FC > wC + 1) throw new Error("Error in HufUnpackEncTable");
          for (; FC--;) bC[QC++] = 0;
          QC--
        } else if (FC >= PC) {
          let CC = FC - PC + 2;
          if (QC + CC > wC + 1) throw new Error("Error in HufUnpackEncTable");
          for (; CC--;) bC[QC++] = 0;
          QC--
        }
      }! function(CC) {
        for (let ZC = 0; ZC <= 58; ++ZC) tC[ZC] = 0;
        for (let ZC = 0; ZC < gC; ++ZC) tC[CC[ZC]] += 1;
        let zC = 0;
        for (let ZC = 58; ZC > 0; --ZC) {
          const CC = zC + tC[ZC] >> 1;
          tC[ZC] = zC, zC = CC
        }
        for (let ZC = 0; ZC < gC; ++ZC) {
          const zC = CC[ZC];
          zC > 0 && (CC[ZC] = zC | tC[zC]++ << 6)
        }
      }(bC)
    }

    function jC(CC) {
      return 63 & CC
    }

    function yC(CC) {
      return CC >> 6
    }

    function LC(CC, zC, ZC, QC, wC, bC) {
      const nC = ZC.value,
        fC = iC(zC, ZC),
        oC = iC(zC, ZC);
      ZC.value += 4;
      const qC = iC(zC, ZC);
      if (ZC.value += 4, fC < 0 || fC >= gC || oC < 0 || oC >= gC) throw new Error("Wrong HUF_ENCSIZE");
      const FC = new Array(gC),
        WC = new Array(SC);
      ! function(CC) {
        for (let zC = 0; zC < SC; zC++) CC[zC] = {}, CC[zC].len = 0, CC[zC].lit = 0, CC[zC].p = null
      }(WC);
      if (DC(CC, ZC, QC - (ZC.value - nC), fC, oC, FC), qC > 8 * (QC - (ZC.value - nC))) throw new Error("Wrong hufUncompress");
      ! function(CC, zC, ZC, QC) {
        for (; zC <= ZC; zC++) {
          const ZC = yC(CC[zC]),
            wC = jC(CC[zC]);
          if (ZC >> wC) throw new Error("Invalid table entry");
          if (wC > MC) {
            const CC = QC[ZC >> wC - MC];
            if (CC.len) throw new Error("Invalid table entry");
            if (CC.lit++, CC.p) {
              const zC = CC.p;
              CC.p = new Array(CC.lit);
              for (let ZC = 0; ZC < CC.lit - 1; ++ZC) CC.p[ZC] = zC[ZC]
            } else CC.p = new Array(1);
            CC.p[CC.lit - 1] = zC
          } else if (wC) {
            let CC = 0;
            for (let bC = 1 << MC - wC; bC > 0; bC--) {
              const bC = QC[(ZC << MC - wC) + CC];
              if (bC.len || bC.p) throw new Error("Invalid table entry");
              bC.len = wC, bC.lit = zC, CC++
            }
          }
        }
      }(FC, fC, oC, WC),
      function(CC, zC, ZC, QC, wC, bC, nC, fC, oC) {
        let qC = 0,
          FC = 0;
        const WC = nC,
          NC = Math.trunc(QC.value + (wC + 7) / 8);
        for (; QC.value < NC;) {
          let wC = TC(qC, FC, ZC, QC);
          for (qC = wC.c, FC = wC.lc; FC >= MC;) {
            const nC = zC[qC >> FC - MC & pC];
            if (nC.len) {
              FC -= nC.len;
              const CC = aC(nC.lit, bC, qC, FC, ZC, QC, fC, oC, WC);
              CC && (qC = CC.c, FC = CC.lc)
            } else {
              if (!nC.p) throw new Error("hufDecode issues");
              let zC;
              for (zC = 0; zC < nC.lit; zC++) {
                const MC = jC(CC[nC.p[zC]]);
                for (; FC < MC && QC.value < NC;) wC = TC(qC, FC, ZC, QC), qC = wC.c, FC = wC.lc;
                if (FC >= MC && yC(CC[nC.p[zC]]) == (qC >> FC - MC & (1 << MC) - 1)) {
                  FC -= MC;
                  const CC = aC(nC.p[zC], bC, qC, FC, ZC, QC, fC, oC, WC);
                  CC && (qC = CC.c, FC = CC.lc);
                  break
                }
              }
              if (zC == nC.lit) throw new Error("HufDecode issues")
            }
          }
        }
        const gC = 8 - wC & 7;
        for (qC >>= gC, FC -= gC; FC > 0;) {
          const CC = zC[qC << MC - FC & pC];
          if (!CC.len) throw new Error("HufDecode issues");
          {
            FC -= CC.len;
            const zC = aC(CC.lit, bC, qC, FC, ZC, QC, fC, oC, WC);
            zC && (qC = zC.c, FC = zC.lc)
          }
        }
      }(FC, WC, CC, ZC, qC, oC, bC, wC, {
        value: 0
      })
    }

    function UC(CC) {
      return 65535 & CC
    }

    function BC(CC) {
      const zC = UC(CC);
      return zC > 32767 ? zC - 65536 : zC
    }

    function OC(CC, zC) {
      const ZC = BC(CC),
        QC = BC(zC),
        wC = ZC + (1 & QC) + (QC >> 1);
      return {
        a: wC,
        b: wC - QC
      }
    }

    function kC(CC, zC) {
      const ZC = UC(CC),
        QC = UC(zC),
        wC = ZC - (QC >> 1) & rC;
      return {
        a: QC + wC - uC & rC,
        b: wC
      }
    }

    function VC(CC, zC, ZC, QC, wC, bC, nC) {
      const fC = nC < 16384,
        oC = ZC > wC ? wC : ZC;
      let qC, FC, WC = 1;
      for (; WC <= oC;) WC <<= 1;
      for (WC >>= 1, qC = WC, WC >>= 1; WC >= 1;) {
        FC = 0;
        const nC = FC + bC * (wC - qC),
          oC = bC * WC,
          NC = bC * qC,
          MC = QC * WC,
          gC = QC * qC;
        let SC, pC, PC, GC;
        for (; FC <= nC; FC += NC) {
          let wC = FC;
          const bC = FC + QC * (ZC - qC);
          for (; wC <= bC; wC += gC) {
            const ZC = wC + MC,
              QC = wC + oC,
              bC = QC + MC;
            if (fC) {
              let nC = OC(CC[wC + zC], CC[QC + zC]);
              SC = nC.a, PC = nC.b, nC = OC(CC[ZC + zC], CC[bC + zC]), pC = nC.a, GC = nC.b, nC = OC(SC, pC), CC[wC + zC] = nC.a, CC[ZC + zC] = nC.b, nC = OC(PC, GC), CC[QC + zC] = nC.a, CC[bC + zC] = nC.b
            } else {
              let nC = kC(CC[wC + zC], CC[QC + zC]);
              SC = nC.a, PC = nC.b, nC = kC(CC[ZC + zC], CC[bC + zC]), pC = nC.a, GC = nC.b, nC = kC(SC, pC), CC[wC + zC] = nC.a, CC[ZC + zC] = nC.b, nC = kC(PC, GC), CC[QC + zC] = nC.a, CC[bC + zC] = nC.b
            }
          }
          if (ZC & WC) {
            const ZC = wC + oC;
            let QC;
            QC = fC ? OC(CC[wC + zC], CC[ZC + zC]) : kC(CC[wC + zC], CC[ZC + zC]), SC = QC.a, CC[ZC + zC] = QC.b, CC[wC + zC] = SC
          }
        }
        if (wC & WC) {
          let wC = FC;
          const bC = FC + QC * (ZC - qC);
          for (; wC <= bC; wC += gC) {
            const ZC = wC + MC;
            let QC;
            QC = fC ? OC(CC[wC + zC], CC[ZC + zC]) : kC(CC[wC + zC], CC[ZC + zC]), SC = QC.a, CC[ZC + zC] = QC.b, CC[wC + zC] = SC
          }
        }
        qC = WC, WC >>= 1
      }
      return FC
    }

    function Cz(CC) {
      return new DataView(CC.array.buffer, CC.offset.value, CC.size)
    }

    function zz(CC) {
      const zC = CC.viewer.buffer.slice(CC.offset.value, CC.offset.value + CC.size),
        ZC = new Uint8Array(function(CC) {
          let zC = CC.byteLength;
          const ZC = [];
          let QC = 0;
          const wC = new DataView(CC);
          for (; zC > 0;) {
            const CC = wC.getInt8(QC++);
            if (CC < 0) {
              const bC = -CC;
              zC -= bC + 1;
              for (let CC = 0; CC < bC; CC++) ZC.push(wC.getUint8(QC++))
            } else {
              const bC = CC;
              zC -= 2;
              const nC = wC.getUint8(QC++);
              for (let CC = 0; CC < bC + 1; CC++) ZC.push(nC)
            }
          }
          return ZC
        }(zC)),
        QC = new Uint8Array(ZC.length);
      return EC(ZC), lC(ZC, QC), new DataView(QC.buffer)
    }

    function Zz(CC) {
      const zC = CC.array.slice(CC.offset.value, CC.offset.value + CC.size),
        ZC = fflate.unzlibSync(zC),
        QC = new Uint8Array(ZC.length);
      return EC(ZC), lC(ZC, QC), new DataView(QC.buffer)
    }

    function Qz(CC) {
      const zC = CC.array.slice(CC.offset.value, CC.offset.value + CC.size),
        ZC = fflate.unzlibSync(zC),
        QC = CC.lines * CC.channels * CC.width,
        wC = 1 == CC.type ? new Uint16Array(QC) : new Uint32Array(QC);
      let bC = 0,
        nC = 0;
      const fC = new Array(4);
      for (let oC = 0; oC < CC.lines; oC++)
        for (let zC = 0; zC < CC.channels; zC++) {
          let zC = 0;
          switch (CC.type) {
            case 1:
              fC[0] = bC, fC[1] = fC[0] + CC.width, bC = fC[1] + CC.width;
              for (let QC = 0; QC < CC.width; ++QC) {
                zC += ZC[fC[0]++] << 8 | ZC[fC[1]++], wC[nC] = zC, nC++
              }
              break;
            case 2:
              fC[0] = bC, fC[1] = fC[0] + CC.width, fC[2] = fC[1] + CC.width, bC = fC[2] + CC.width;
              for (let QC = 0; QC < CC.width; ++QC) {
                zC += ZC[fC[0]++] << 24 | ZC[fC[1]++] << 16 | ZC[fC[2]++] << 8, wC[nC] = zC, nC++
              }
          }
        }
      return new DataView(wC.buffer)
    }

    function wz(CC) {
      const zC = CC.viewer,
        ZC = {
          value: CC.offset.value
        },
        QC = new Uint16Array(CC.width * CC.scanlineBlockSize * (CC.channels * CC.type)),
        wC = new Uint8Array(NC);
      let bC = 0;
      const nC = new Array(CC.channels);
      for (let qC = 0; qC < CC.channels; qC++) nC[qC] = {}, nC[qC].start = bC, nC[qC].end = nC[qC].start, nC[qC].nx = CC.width, nC[qC].ny = CC.lines, nC[qC].size = CC.type, bC += nC[qC].nx * nC[qC].ny * nC[qC].size;
      const fC = eC(zC, ZC),
        oC = eC(zC, ZC);
      if (oC >= NC) throw new Error("Wrong PIZ_COMPRESSION BITMAP_SIZE");
      if (fC <= oC)
        for (let qC = 0; qC < oC - fC + 1; qC++) wC[qC + fC] = vC(zC, ZC);
      const FC = new Uint16Array(WC),
        MC = function(CC, zC) {
          let ZC = 0;
          for (let wC = 0; wC < WC; ++wC)(0 == wC || CC[wC >> 3] & 1 << (7 & wC)) && (zC[ZC++] = wC);
          const QC = ZC - 1;
          for (; ZC < WC;) zC[ZC++] = 0;
          return QC
        }(wC, FC),
        gC = iC(zC, ZC);
      LC(CC.array, zC, ZC, gC, QC, bC);
      for (let qC = 0; qC < CC.channels; ++qC) {
        const CC = nC[qC];
        for (let zC = 0; zC < nC[qC].size; ++zC) VC(QC, CC.start + zC, CC.nx, CC.size, CC.ny, CC.nx * CC.size, MC)
      }! function(CC, zC, ZC) {
        for (let QC = 0; QC < ZC; ++QC) zC[QC] = CC[zC[QC]]
      }(FC, QC, bC);
      let SC = 0;
      const pC = new Uint8Array(QC.buffer.byteLength);
      for (let WC = 0; WC < CC.lines; WC++)
        for (let zC = 0; zC < CC.channels; zC++) {
          const CC = nC[zC],
            ZC = CC.nx * CC.size,
            wC = new Uint8Array(QC.buffer, CC.end * qC, ZC * qC);
          pC.set(wC, SC), SC += ZC * qC, CC.end += ZC
        }
      return new DataView(pC.buffer)
    }
    var bz, nz = ZC(39913);
    ! function(CC) {
      CC[CC.Float = 0] = "Float", CC[CC.HalfFloat = 1] = "HalfFloat"
    }(bz || (bz = {}));
    class fz {}
    async function oz(CC, zC, ZC, QC) {
      const wC = {
        size: 0,
        viewer: zC,
        array: new Uint8Array(zC.buffer),
        offset: ZC,
        width: CC.dataWindow.xMax - CC.dataWindow.xMin + 1,
        height: CC.dataWindow.yMax - CC.dataWindow.yMin + 1,
        channels: CC.channels.length,
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
      switch (CC.compression) {
        case AC.NO_COMPRESSION:
          wC.lines = 1, wC.uncompress = Cz;
          break;
        case AC.RLE_COMPRESSION:
          wC.lines = 1, wC.uncompress = zz;
          break;
        case AC.ZIPS_COMPRESSION:
          wC.lines = 1, wC.uncompress = Zz, await nz.g.LoadScriptAsync(fz.FFLATEUrl);
          break;
        case AC.ZIP_COMPRESSION:
          wC.lines = 16, wC.uncompress = Zz, await nz.g.LoadScriptAsync(fz.FFLATEUrl);
          break;
        case AC.PIZ_COMPRESSION:
          wC.lines = 32, wC.uncompress = wz;
          break;
        case AC.PXR24_COMPRESSION:
          wC.lines = 16, wC.uncompress = Qz, await nz.g.LoadScriptAsync(fz.FFLATEUrl);
          break;
        default:
          throw new Error(AC[CC.compression] + " is unsupported")
      }
      wC.scanlineBlockSize = wC.lines;
      const bC = {};
      for (const fC of CC.channels) switch (fC.name) {
        case "R":
        case "G":
        case "B":
        case "A":
        case "Y":
          bC[fC.name] = !0, wC.type = fC.pixelType
      }
      let nC = !1;
      if (bC.R && bC.G && bC.B && bC.A) wC.outputChannels = 4, wC.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (bC.R && bC.G && bC.B) nC = !0, wC.outputChannels = 4, wC.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (bC.R && bC.G) wC.outputChannels = 2, wC.decodeChannels = {
        R: 0,
        G: 1
      };
      else if (bC.R) wC.outputChannels = 1, wC.decodeChannels = {
        R: 0
      };
      else {
        if (!bC.Y) throw new Error("EXRLoader.parse: file contains unsupported data channels.");
        wC.outputChannels = 1, wC.decodeChannels = {
          Y: 0
        }
      }
      if (1 === wC.type) switch (QC) {
        case bz.Float:
          wC.getter = dC, wC.inputSize = qC;
          break;
        case bz.HalfFloat:
          wC.getter = eC, wC.inputSize = qC
      } else {
        if (2 !== wC.type) throw new Error("Unsupported pixelType " + wC.type + " for " + CC.compression);
        switch (QC) {
          case bz.Float:
            wC.getter = YC, wC.inputSize = fC;
            break;
          case bz.HalfFloat:
            wC.getter = mC, wC.inputSize = fC
        }
      }
      wC.blockCount = wC.height / wC.scanlineBlockSize;
      for (let fC = 0; fC < wC.blockCount; fC++) KC(zC, ZC);
      const oC = wC.width * wC.height * wC.outputChannels;
      switch (QC) {
        case bz.Float:
          wC.byteArray = new Float32Array(oC), wC.textureType = 1, nC && wC.byteArray.fill(1, 0, oC);
          break;
        case bz.HalfFloat:
          wC.byteArray = new Uint16Array(oC), wC.textureType = 2, nC && wC.byteArray.fill(15360, 0, oC);
          break;
        default:
          throw new Error("Unsupported type: " + QC)
      }
      let FC = 0;
      for (const fC of CC.channels) void 0 !== wC.decodeChannels[fC.name] && (wC.channelLineOffsets[fC.name] = FC * wC.width), FC += 2 * fC.pixelType;
      return wC.bytesPerLine = wC.width * FC, wC.outLineWidth = wC.width * wC.outputChannels, "INCREASING_Y" === CC.lineOrder ? wC.scanOrder = CC => CC : wC.scanOrder = CC => wC.height - 1 - CC, 4 == wC.outputChannels ? (wC.format = 5, wC.linearSpace = !0) : (wC.format = 6, wC.linearSpace = !1), wC
    }

    function qz(CC, zC, ZC, QC) {
      const wC = {
        value: 0
      };
      for (let bC = 0; bC < CC.height / CC.scanlineBlockSize; bC++) {
        const nC = IC(ZC, QC) - zC.dataWindow.yMin;
        CC.size = iC(ZC, QC), CC.lines = nC + CC.scanlineBlockSize > CC.height ? CC.height - nC : CC.scanlineBlockSize;
        const fC = CC.size < CC.lines * CC.bytesPerLine && CC.uncompress ? CC.uncompress(CC) : Cz(CC);
        QC.value += CC.size;
        for (let ZC = 0; ZC < CC.scanlineBlockSize; ZC++) {
          const QC = bC * CC.scanlineBlockSize,
            nC = ZC + CC.scanOrder(QC);
          if (nC >= CC.height) continue;
          const oC = ZC * CC.bytesPerLine,
            qC = (CC.height - 1 - nC) * CC.outLineWidth;
          for (let ZC = 0; ZC < CC.channels; ZC++) {
            const QC = zC.channels[ZC].name,
              bC = CC.channelLineOffsets[QC],
              nC = CC.decodeChannels[QC];
            if (void 0 !== nC) {
              wC.value = oC + bC;
              for (let zC = 0; zC < CC.width; zC++) {
                const ZC = qC + zC * CC.outputChannels + nC;
                CC.byteArray && (CC.byteArray[ZC] = CC.getter(fC, wC))
              }
            }
          }
        }
      }
    }
    fz.DefaultOutputType = bz.HalfFloat, fz.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class Fz {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(CC, zC, ZC, QC, wC) {
        throw ".exr not supported in Cube."
      }
      loadData(CC, zC, ZC) {
        const wC = new DataView(CC.buffer),
          bC = {
            value: 0
          },
          nC = cC(wC, bC);
        oz(nC, wC, bC, fz.DefaultOutputType).then((CC => {
          qz(CC, nC, wC, bC);
          const QC = nC.dataWindow.xMax - nC.dataWindow.xMin + 1,
            fC = nC.dataWindow.yMax - nC.dataWindow.yMin + 1;
          ZC(QC, fC, zC.generateMipMaps, !1, (() => {
            const ZC = zC.mg();
            zC.format = nC.format, zC.type = CC.textureType, zC.invertY = !1, zC._gammaSpace = !nC.linearSpace, CC.byteArray && ZC._uploadDataToTextureDirectly(zC, CC.byteArray, 0, 0, void 0, !0)
          }))
        })).catch((CC => {
          QC.c.Error("Failed to load EXR texture: ", CC)
        }))
      }
    }
    async function Wz(CC) {
      const zC = new DataView(CC),
        ZC = {
          value: 0
        },
        wC = cC(zC, ZC);
      try {
        const CC = await oz(wC, zC, ZC, bz.Float);
        return qz(CC, wC, zC, ZC), CC.byteArray ? {
          width: wC.dataWindow.xMax - wC.dataWindow.xMin + 1,
          height: wC.dataWindow.yMax - wC.dataWindow.yMin + 1,
          data: new Float32Array(CC.byteArray)
        } : (QC.c.Error("Failed to decode EXR data: No byte array available."), {
          width: 0,
          height: 0,
          data: null
        })
      } catch (bC) {
        QC.c.Error("Failed to load EXR data: ", bC)
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
for (const CC in modules) Object.freeze(modules[CC]);