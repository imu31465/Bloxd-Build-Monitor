export const id = 324;
export const ids = [324];
export const modules = {
  42114: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      ReadExrDataAsync: () => JW,
      _ExrTextureLoader: () => gW
    });
    var wQ = XQ(38956),
      qQ = XQ(37404),
      TQ = XQ(40337);
    const zQ = 4,
      sQ = 4,
      FQ = 1,
      PQ = 2,
      gQ = 8,
      JQ = 65536,
      rQ = JQ >> 3,
      IQ = 14,
      jQ = 65537,
      BQ = 1 << IQ,
      yQ = BQ - 1,
      VQ = 59,
      DQ = 63,
      pQ = 2 + DQ - VQ;
    var GQ, UQ;

    function bQ(QQ, WQ) {
      const XQ = new Uint8Array(QQ);
      let wQ = 0;
      for (; 0 != XQ[WQ.value + wQ];) wQ += 1;
      const qQ = (new TextDecoder).decode(XQ.slice(WQ.value, WQ.value + wQ));
      return WQ.value = WQ.value + wQ + 1, qQ
    }

    function vQ(QQ, WQ) {
      const XQ = QQ.getInt32(WQ.value, !0);
      return WQ.value += zQ, XQ
    }

    function dQ(QQ, WQ) {
      const XQ = QQ.getUint32(WQ.value, !0);
      return WQ.value += zQ, XQ
    }

    function HQ(QQ, WQ) {
      const XQ = QQ.getUint8(WQ.value);
      return WQ.value += FQ, XQ
    }

    function aQ(QQ, WQ) {
      const XQ = QQ.getUint16(WQ.value, !0);
      return WQ.value += PQ, XQ
    }

    function lQ(QQ, WQ) {
      const XQ = QQ[WQ.value];
      return WQ.value += FQ, XQ
    }

    function hQ(QQ, WQ) {
      let XQ;
      return XQ = "getBigInt64" in DataView.prototype ? Number(QQ.getBigInt64(WQ.value, !0)) : QQ.getUint32(WQ.value + 4, !0) + Number(QQ.getUint32(WQ.value, !0) << 32), WQ.value += gQ, XQ
    }

    function iQ(QQ, WQ) {
      const XQ = QQ.getFloat32(WQ.value, !0);
      return WQ.value += sQ, XQ
    }

    function cQ(QQ, WQ) {
      return (0, TQ.d)(aQ(QQ, WQ))
    }

    function AQ(QQ, WQ) {
      return (0, TQ.i)((0, qQ.Clamp)(iQ(QQ, WQ), -TQ.f, TQ.f))
    }

    function RQ(QQ, WQ, XQ, wQ) {
      switch (XQ) {
        case "string":
        case "stringvector":
        case "iccProfile":
          return function(QQ, WQ, XQ) {
            const wQ = (new TextDecoder).decode(new Uint8Array(QQ).slice(WQ.value, WQ.value + XQ));
            return WQ.value = WQ.value + XQ, wQ
          }(QQ.buffer, WQ, wQ);
        case "chlist":
          return function(QQ, WQ, XQ) {
            const wQ = WQ.value,
              qQ = [];
            for (; WQ.value < wQ + XQ - 1;) {
              const XQ = bQ(QQ.buffer, WQ),
                wQ = vQ(QQ, WQ),
                TQ = HQ(QQ, WQ);
              WQ.value += 3;
              const zQ = vQ(QQ, WQ),
                sQ = vQ(QQ, WQ);
              qQ.push({
                name: XQ,
                pixelType: wQ,
                pLinear: TQ,
                xSampling: zQ,
                ySampling: sQ
              })
            }
            return WQ.value += 1, qQ
          }(QQ, WQ, wQ);
        case "chromaticities":
          return function(QQ, WQ) {
            return {
              redX: iQ(QQ, WQ),
              redY: iQ(QQ, WQ),
              greenX: iQ(QQ, WQ),
              greenY: iQ(QQ, WQ),
              blueX: iQ(QQ, WQ),
              blueY: iQ(QQ, WQ),
              whiteX: iQ(QQ, WQ),
              whiteY: iQ(QQ, WQ)
            }
          }(QQ, WQ);
        case "compression":
          return function(QQ, WQ) {
            return HQ(QQ, WQ)
          }(QQ, WQ);
        case "box2i":
          return function(QQ, WQ) {
            return {
              xMin: vQ(QQ, WQ),
              yMin: vQ(QQ, WQ),
              xMax: vQ(QQ, WQ),
              yMax: vQ(QQ, WQ)
            }
          }(QQ, WQ);
        case "lineOrder":
          return function(QQ, WQ) {
            const XQ = HQ(QQ, WQ);
            return UQ[XQ]
          }(QQ, WQ);
        case "float":
          return iQ(QQ, WQ);
        case "v2f":
          return function(QQ, WQ) {
            return [iQ(QQ, WQ), iQ(QQ, WQ)]
          }(QQ, WQ);
        case "v3f":
          return function(QQ, WQ) {
            return [iQ(QQ, WQ), iQ(QQ, WQ), iQ(QQ, WQ)]
          }(QQ, WQ);
        case "int":
          return vQ(QQ, WQ);
        case "rational":
          return function(QQ, WQ) {
            return [vQ(QQ, WQ), dQ(QQ, WQ)]
          }(QQ, WQ);
        case "timecode":
          return function(QQ, WQ) {
            return [dQ(QQ, WQ), dQ(QQ, WQ)]
          }(QQ, WQ);
        case "preview":
          return WQ.value += wQ, "skipped";
        default:
          return void(WQ.value += wQ)
      }
    }

    function EQ(QQ) {
      for (let WQ = 1; WQ < QQ.length; WQ++) {
        const XQ = QQ[WQ - 1] + QQ[WQ] - 128;
        QQ[WQ] = XQ
      }
    }

    function CQ(QQ, WQ) {
      let XQ = 0,
        wQ = Math.floor((QQ.length + 1) / 2),
        qQ = 0;
      const TQ = QQ.length - 1;
      for (; !(qQ > TQ) && (WQ[qQ++] = QQ[XQ++], !(qQ > TQ));) WQ[qQ++] = QQ[wQ++]
    }! function(QQ) {
      QQ[QQ.NO_COMPRESSION = 0] = "NO_COMPRESSION", QQ[QQ.RLE_COMPRESSION = 1] = "RLE_COMPRESSION", QQ[QQ.ZIPS_COMPRESSION = 2] = "ZIPS_COMPRESSION", QQ[QQ.ZIP_COMPRESSION = 3] = "ZIP_COMPRESSION", QQ[QQ.PIZ_COMPRESSION = 4] = "PIZ_COMPRESSION", QQ[QQ.PXR24_COMPRESSION = 5] = "PXR24_COMPRESSION"
    }(GQ || (GQ = {})),
    function(QQ) {
      QQ[QQ.INCREASING_Y = 0] = "INCREASING_Y", QQ[QQ.DECREASING_Y = 1] = "DECREASING_Y"
    }(UQ || (UQ = {}));
    const uQ = 20000630;

    function LQ(QQ, WQ) {
      if (QQ.getUint32(0, !0) != uQ) throw new Error("Incorrect OpenEXR format");
      const XQ = QQ.getUint8(4),
        qQ = QQ.getUint8(5),
        TQ = {
          singleTile: !!(2 & qQ),
          longName: !!(4 & qQ),
          deepFormat: !!(8 & qQ),
          multiPart: !!(16 & qQ)
        };
      WQ.value = 8;
      const zQ = {};
      let sQ = !0;
      for (; sQ;) {
        const XQ = bQ(QQ.buffer, WQ);
        if (XQ) {
          const qQ = bQ(QQ.buffer, WQ),
            TQ = RQ(QQ, WQ, qQ, dQ(QQ, WQ));
          void 0 === TQ ? wQ.b.Warn(`Unknown header attribute type ${qQ}'.`) : zQ[XQ] = TQ
        } else sQ = !1
      }
      if (0 != (-5 & qQ)) throw new Error("Unsupported file format");
      return {
        version: XQ,
        spec: TQ,
        ...zQ
      }
    }
    const kQ = 32768,
      fQ = 65535;

    function SQ(QQ, WQ, XQ, wQ, qQ) {
      for (; XQ < QQ;) WQ = WQ << 8 | lQ(wQ, qQ), XQ += 8;
      return {
        l: WQ >> (XQ -= QQ) & (1 << QQ) - 1,
        c: WQ,
        lc: XQ
      }
    }

    function tQ(QQ, WQ, XQ, wQ) {
      return {
        c: QQ = QQ << 8 | lQ(XQ, wQ),
        lc: WQ += 8
      }
    }

    function oQ(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ) {
      if (QQ == WQ) {
        if (wQ < 8) {
          const QQ = tQ(XQ, wQ, qQ, TQ);
          XQ = QQ.c, wQ = QQ.lc
        }
        let QQ = XQ >> (wQ -= 8);
        if (QQ = new Uint8Array([QQ])[0], sQ.value + QQ > FQ) return null;
        const WQ = zQ[sQ.value - 1];
        for (; QQ-- > 0;) zQ[sQ.value++] = WQ
      } else {
        if (!(sQ.value < FQ)) return null;
        zQ[sQ.value++] = QQ
      }
      return {
        c: XQ,
        lc: wQ
      }
    }
    const eQ = new Array(59);

    function nQ(QQ, WQ, XQ, wQ, qQ, TQ) {
      const zQ = WQ;
      let sQ = 0,
        FQ = 0;
      for (; wQ <= qQ; wQ++) {
        if (zQ.value - WQ.value > XQ) return;
        let PQ = SQ(6, sQ, FQ, QQ, zQ);
        const gQ = PQ.l;
        if (sQ = PQ.c, FQ = PQ.lc, TQ[wQ] = gQ, gQ == DQ) {
          if (zQ.value - WQ.value > XQ) throw new Error("Error in HufUnpackEncTable");
          PQ = SQ(8, sQ, FQ, QQ, zQ);
          let gQ = PQ.l + pQ;
          if (sQ = PQ.c, FQ = PQ.lc, wQ + gQ > qQ + 1) throw new Error("Error in HufUnpackEncTable");
          for (; gQ--;) TQ[wQ++] = 0;
          wQ--
        } else if (gQ >= VQ) {
          let QQ = gQ - VQ + 2;
          if (wQ + QQ > qQ + 1) throw new Error("Error in HufUnpackEncTable");
          for (; QQ--;) TQ[wQ++] = 0;
          wQ--
        }
      }! function(QQ) {
        for (let XQ = 0; XQ <= 58; ++XQ) eQ[XQ] = 0;
        for (let XQ = 0; XQ < jQ; ++XQ) eQ[QQ[XQ]] += 1;
        let WQ = 0;
        for (let XQ = 58; XQ > 0; --XQ) {
          const QQ = WQ + eQ[XQ] >> 1;
          eQ[XQ] = WQ, WQ = QQ
        }
        for (let XQ = 0; XQ < jQ; ++XQ) {
          const WQ = QQ[XQ];
          WQ > 0 && (QQ[XQ] = WQ | eQ[WQ]++ << 6)
        }
      }(TQ)
    }

    function xQ(QQ) {
      return 63 & QQ
    }

    function YQ(QQ) {
      return QQ >> 6
    }

    function NQ(QQ, WQ, XQ, wQ, qQ, TQ) {
      const zQ = XQ.value,
        sQ = dQ(WQ, XQ),
        FQ = dQ(WQ, XQ);
      XQ.value += 4;
      const PQ = dQ(WQ, XQ);
      if (XQ.value += 4, sQ < 0 || sQ >= jQ || FQ < 0 || FQ >= jQ) throw new Error("Wrong HUF_ENCSIZE");
      const gQ = new Array(jQ),
        JQ = new Array(BQ);
      ! function(QQ) {
        for (let WQ = 0; WQ < BQ; WQ++) QQ[WQ] = {}, QQ[WQ].len = 0, QQ[WQ].lit = 0, QQ[WQ].p = null
      }(JQ);
      if (nQ(QQ, XQ, wQ - (XQ.value - zQ), sQ, FQ, gQ), PQ > 8 * (wQ - (XQ.value - zQ))) throw new Error("Wrong hufUncompress");
      ! function(QQ, WQ, XQ, wQ) {
        for (; WQ <= XQ; WQ++) {
          const XQ = YQ(QQ[WQ]),
            qQ = xQ(QQ[WQ]);
          if (XQ >> qQ) throw new Error("Invalid table entry");
          if (qQ > IQ) {
            const QQ = wQ[XQ >> qQ - IQ];
            if (QQ.len) throw new Error("Invalid table entry");
            if (QQ.lit++, QQ.p) {
              const WQ = QQ.p;
              QQ.p = new Array(QQ.lit);
              for (let XQ = 0; XQ < QQ.lit - 1; ++XQ) QQ.p[XQ] = WQ[XQ]
            } else QQ.p = new Array(1);
            QQ.p[QQ.lit - 1] = WQ
          } else if (qQ) {
            let QQ = 0;
            for (let TQ = 1 << IQ - qQ; TQ > 0; TQ--) {
              const TQ = wQ[(XQ << IQ - qQ) + QQ];
              if (TQ.len || TQ.p) throw new Error("Invalid table entry");
              TQ.len = qQ, TQ.lit = WQ, QQ++
            }
          }
        }
      }(gQ, sQ, FQ, JQ),
      function(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ) {
        let PQ = 0,
          gQ = 0;
        const JQ = zQ,
          rQ = Math.trunc(wQ.value + (qQ + 7) / 8);
        for (; wQ.value < rQ;) {
          let qQ = tQ(PQ, gQ, XQ, wQ);
          for (PQ = qQ.c, gQ = qQ.lc; gQ >= IQ;) {
            const zQ = WQ[PQ >> gQ - IQ & yQ];
            if (zQ.len) {
              gQ -= zQ.len;
              const QQ = oQ(zQ.lit, TQ, PQ, gQ, XQ, wQ, sQ, FQ, JQ);
              QQ && (PQ = QQ.c, gQ = QQ.lc)
            } else {
              if (!zQ.p) throw new Error("hufDecode issues");
              let WQ;
              for (WQ = 0; WQ < zQ.lit; WQ++) {
                const IQ = xQ(QQ[zQ.p[WQ]]);
                for (; gQ < IQ && wQ.value < rQ;) qQ = tQ(PQ, gQ, XQ, wQ), PQ = qQ.c, gQ = qQ.lc;
                if (gQ >= IQ && YQ(QQ[zQ.p[WQ]]) == (PQ >> gQ - IQ & (1 << IQ) - 1)) {
                  gQ -= IQ;
                  const QQ = oQ(zQ.p[WQ], TQ, PQ, gQ, XQ, wQ, sQ, FQ, JQ);
                  QQ && (PQ = QQ.c, gQ = QQ.lc);
                  break
                }
              }
              if (WQ == zQ.lit) throw new Error("HufDecode issues")
            }
          }
        }
        const jQ = 8 - qQ & 7;
        for (PQ >>= jQ, gQ -= jQ; gQ > 0;) {
          const QQ = WQ[PQ << IQ - gQ & yQ];
          if (!QQ.len) throw new Error("HufDecode issues");
          {
            gQ -= QQ.len;
            const WQ = oQ(QQ.lit, TQ, PQ, gQ, XQ, wQ, sQ, FQ, JQ);
            WQ && (PQ = WQ.c, gQ = WQ.lc)
          }
        }
      }(gQ, JQ, QQ, XQ, PQ, FQ, TQ, qQ, {
        value: 0
      })
    }

    function ZQ(QQ) {
      return 65535 & QQ
    }

    function OQ(QQ) {
      const WQ = ZQ(QQ);
      return WQ > 32767 ? WQ - 65536 : WQ
    }

    function KQ(QQ, WQ) {
      const XQ = OQ(QQ),
        wQ = OQ(WQ),
        qQ = XQ + (1 & wQ) + (wQ >> 1);
      return {
        a: qQ,
        b: qQ - wQ
      }
    }

    function mQ(QQ, WQ) {
      const XQ = ZQ(QQ),
        wQ = ZQ(WQ),
        qQ = XQ - (wQ >> 1) & fQ;
      return {
        a: wQ + qQ - kQ & fQ,
        b: qQ
      }
    }

    function MQ(QQ, WQ, XQ, wQ, qQ, TQ, zQ) {
      const sQ = zQ < 16384,
        FQ = XQ > qQ ? qQ : XQ;
      let PQ, gQ, JQ = 1;
      for (; JQ <= FQ;) JQ <<= 1;
      for (JQ >>= 1, PQ = JQ, JQ >>= 1; JQ >= 1;) {
        gQ = 0;
        const zQ = gQ + TQ * (qQ - PQ),
          FQ = TQ * JQ,
          rQ = TQ * PQ,
          IQ = wQ * JQ,
          jQ = wQ * PQ;
        let BQ, yQ, VQ, DQ;
        for (; gQ <= zQ; gQ += rQ) {
          let qQ = gQ;
          const TQ = gQ + wQ * (XQ - PQ);
          for (; qQ <= TQ; qQ += jQ) {
            const XQ = qQ + IQ,
              wQ = qQ + FQ,
              TQ = wQ + IQ;
            if (sQ) {
              let zQ = KQ(QQ[qQ + WQ], QQ[wQ + WQ]);
              BQ = zQ.a, VQ = zQ.b, zQ = KQ(QQ[XQ + WQ], QQ[TQ + WQ]), yQ = zQ.a, DQ = zQ.b, zQ = KQ(BQ, yQ), QQ[qQ + WQ] = zQ.a, QQ[XQ + WQ] = zQ.b, zQ = KQ(VQ, DQ), QQ[wQ + WQ] = zQ.a, QQ[TQ + WQ] = zQ.b
            } else {
              let zQ = mQ(QQ[qQ + WQ], QQ[wQ + WQ]);
              BQ = zQ.a, VQ = zQ.b, zQ = mQ(QQ[XQ + WQ], QQ[TQ + WQ]), yQ = zQ.a, DQ = zQ.b, zQ = mQ(BQ, yQ), QQ[qQ + WQ] = zQ.a, QQ[XQ + WQ] = zQ.b, zQ = mQ(VQ, DQ), QQ[wQ + WQ] = zQ.a, QQ[TQ + WQ] = zQ.b
            }
          }
          if (XQ & JQ) {
            const XQ = qQ + FQ;
            let wQ;
            wQ = sQ ? KQ(QQ[qQ + WQ], QQ[XQ + WQ]) : mQ(QQ[qQ + WQ], QQ[XQ + WQ]), BQ = wQ.a, QQ[XQ + WQ] = wQ.b, QQ[qQ + WQ] = BQ
          }
        }
        if (qQ & JQ) {
          let qQ = gQ;
          const TQ = gQ + wQ * (XQ - PQ);
          for (; qQ <= TQ; qQ += jQ) {
            const XQ = qQ + IQ;
            let wQ;
            wQ = sQ ? KQ(QQ[qQ + WQ], QQ[XQ + WQ]) : mQ(QQ[qQ + WQ], QQ[XQ + WQ]), BQ = wQ.a, QQ[XQ + WQ] = wQ.b, QQ[qQ + WQ] = BQ
          }
        }
        PQ = JQ, JQ >>= 1
      }
      return gQ
    }

    function QW(QQ) {
      return new DataView(QQ.array.buffer, QQ.offset.value, QQ.size)
    }

    function WW(QQ) {
      const WQ = QQ.viewer.buffer.slice(QQ.offset.value, QQ.offset.value + QQ.size),
        XQ = new Uint8Array(function(QQ) {
          let WQ = QQ.byteLength;
          const XQ = [];
          let wQ = 0;
          const qQ = new DataView(QQ);
          for (; WQ > 0;) {
            const QQ = qQ.getInt8(wQ++);
            if (QQ < 0) {
              const TQ = -QQ;
              WQ -= TQ + 1;
              for (let QQ = 0; QQ < TQ; QQ++) XQ.push(qQ.getUint8(wQ++))
            } else {
              const TQ = QQ;
              WQ -= 2;
              const zQ = qQ.getUint8(wQ++);
              for (let QQ = 0; QQ < TQ + 1; QQ++) XQ.push(zQ)
            }
          }
          return XQ
        }(WQ)),
        wQ = new Uint8Array(XQ.length);
      return EQ(XQ), CQ(XQ, wQ), new DataView(wQ.buffer)
    }

    function XW(QQ) {
      const WQ = QQ.array.slice(QQ.offset.value, QQ.offset.value + QQ.size),
        XQ = fflate.unzlibSync(WQ),
        wQ = new Uint8Array(XQ.length);
      return EQ(XQ), CQ(XQ, wQ), new DataView(wQ.buffer)
    }

    function wW(QQ) {
      const WQ = QQ.array.slice(QQ.offset.value, QQ.offset.value + QQ.size),
        XQ = fflate.unzlibSync(WQ),
        wQ = QQ.lines * QQ.channels * QQ.width,
        qQ = 1 == QQ.type ? new Uint16Array(wQ) : new Uint32Array(wQ);
      let TQ = 0,
        zQ = 0;
      const sQ = new Array(4);
      for (let FQ = 0; FQ < QQ.lines; FQ++)
        for (let WQ = 0; WQ < QQ.channels; WQ++) {
          let WQ = 0;
          switch (QQ.type) {
            case 1:
              sQ[0] = TQ, sQ[1] = sQ[0] + QQ.width, TQ = sQ[1] + QQ.width;
              for (let wQ = 0; wQ < QQ.width; ++wQ) {
                WQ += XQ[sQ[0]++] << 8 | XQ[sQ[1]++], qQ[zQ] = WQ, zQ++
              }
              break;
            case 2:
              sQ[0] = TQ, sQ[1] = sQ[0] + QQ.width, sQ[2] = sQ[1] + QQ.width, TQ = sQ[2] + QQ.width;
              for (let wQ = 0; wQ < QQ.width; ++wQ) {
                WQ += XQ[sQ[0]++] << 24 | XQ[sQ[1]++] << 16 | XQ[sQ[2]++] << 8, qQ[zQ] = WQ, zQ++
              }
          }
        }
      return new DataView(qQ.buffer)
    }

    function qW(QQ) {
      const WQ = QQ.viewer,
        XQ = {
          value: QQ.offset.value
        },
        wQ = new Uint16Array(QQ.width * QQ.scanlineBlockSize * (QQ.channels * QQ.type)),
        qQ = new Uint8Array(rQ);
      let TQ = 0;
      const zQ = new Array(QQ.channels);
      for (let PQ = 0; PQ < QQ.channels; PQ++) zQ[PQ] = {}, zQ[PQ].start = TQ, zQ[PQ].end = zQ[PQ].start, zQ[PQ].nx = QQ.width, zQ[PQ].ny = QQ.lines, zQ[PQ].size = QQ.type, TQ += zQ[PQ].nx * zQ[PQ].ny * zQ[PQ].size;
      const sQ = aQ(WQ, XQ),
        FQ = aQ(WQ, XQ);
      if (FQ >= rQ) throw new Error("Wrong PIZ_COMPRESSION BITMAP_SIZE");
      if (sQ <= FQ)
        for (let PQ = 0; PQ < FQ - sQ + 1; PQ++) qQ[PQ + sQ] = HQ(WQ, XQ);
      const gQ = new Uint16Array(JQ),
        IQ = function(QQ, WQ) {
          let XQ = 0;
          for (let qQ = 0; qQ < JQ; ++qQ)(0 == qQ || QQ[qQ >> 3] & 1 << (7 & qQ)) && (WQ[XQ++] = qQ);
          const wQ = XQ - 1;
          for (; XQ < JQ;) WQ[XQ++] = 0;
          return wQ
        }(qQ, gQ),
        jQ = dQ(WQ, XQ);
      NQ(QQ.array, WQ, XQ, jQ, wQ, TQ);
      for (let PQ = 0; PQ < QQ.channels; ++PQ) {
        const QQ = zQ[PQ];
        for (let WQ = 0; WQ < zQ[PQ].size; ++WQ) MQ(wQ, QQ.start + WQ, QQ.nx, QQ.size, QQ.ny, QQ.nx * QQ.size, IQ)
      }! function(QQ, WQ, XQ) {
        for (let wQ = 0; wQ < XQ; ++wQ) WQ[wQ] = QQ[WQ[wQ]]
      }(gQ, wQ, TQ);
      let BQ = 0;
      const yQ = new Uint8Array(wQ.buffer.byteLength);
      for (let JQ = 0; JQ < QQ.lines; JQ++)
        for (let WQ = 0; WQ < QQ.channels; WQ++) {
          const QQ = zQ[WQ],
            XQ = QQ.nx * QQ.size,
            qQ = new Uint8Array(wQ.buffer, QQ.end * PQ, XQ * PQ);
          yQ.set(qQ, BQ), BQ += XQ * PQ, QQ.end += XQ
        }
      return new DataView(yQ.buffer)
    }
    var TW, zW = XQ(40357);
    ! function(QQ) {
      QQ[QQ.Float = 0] = "Float", QQ[QQ.HalfFloat = 1] = "HalfFloat"
    }(TW || (TW = {}));
    class sW {}
    async function FW(QQ, WQ, XQ, wQ) {
      const qQ = {
        size: 0,
        viewer: WQ,
        array: new Uint8Array(WQ.buffer),
        offset: XQ,
        width: QQ.dataWindow.xMax - QQ.dataWindow.xMin + 1,
        height: QQ.dataWindow.yMax - QQ.dataWindow.yMin + 1,
        channels: QQ.channels.length,
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
      switch (QQ.compression) {
        case GQ.NO_COMPRESSION:
          qQ.lines = 1, qQ.uncompress = QW;
          break;
        case GQ.RLE_COMPRESSION:
          qQ.lines = 1, qQ.uncompress = WW;
          break;
        case GQ.ZIPS_COMPRESSION:
          qQ.lines = 1, qQ.uncompress = XW, await zW.g.LoadScriptAsync(sW.FFLATEUrl);
          break;
        case GQ.ZIP_COMPRESSION:
          qQ.lines = 16, qQ.uncompress = XW, await zW.g.LoadScriptAsync(sW.FFLATEUrl);
          break;
        case GQ.PIZ_COMPRESSION:
          qQ.lines = 32, qQ.uncompress = qW;
          break;
        case GQ.PXR24_COMPRESSION:
          qQ.lines = 16, qQ.uncompress = wW, await zW.g.LoadScriptAsync(sW.FFLATEUrl);
          break;
        default:
          throw new Error(GQ[QQ.compression] + " is unsupported")
      }
      qQ.scanlineBlockSize = qQ.lines;
      const TQ = {};
      for (const sQ of QQ.channels) switch (sQ.name) {
        case "R":
        case "G":
        case "B":
        case "A":
        case "Y":
          TQ[sQ.name] = !0, qQ.type = sQ.pixelType
      }
      let zQ = !1;
      if (TQ.R && TQ.G && TQ.B && TQ.A) qQ.outputChannels = 4, qQ.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (TQ.R && TQ.G && TQ.B) zQ = !0, qQ.outputChannels = 4, qQ.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (TQ.R && TQ.G) qQ.outputChannels = 2, qQ.decodeChannels = {
        R: 0,
        G: 1
      };
      else if (TQ.R) qQ.outputChannels = 1, qQ.decodeChannels = {
        R: 0
      };
      else {
        if (!TQ.Y) throw new Error("EXRLoader.parse: file contains unsupported data channels.");
        qQ.outputChannels = 1, qQ.decodeChannels = {
          Y: 0
        }
      }
      if (1 === qQ.type) switch (wQ) {
        case TW.Float:
          qQ.getter = cQ, qQ.inputSize = PQ;
          break;
        case TW.HalfFloat:
          qQ.getter = aQ, qQ.inputSize = PQ
      } else {
        if (2 !== qQ.type) throw new Error("Unsupported pixelType " + qQ.type + " for " + QQ.compression);
        switch (wQ) {
          case TW.Float:
            qQ.getter = iQ, qQ.inputSize = sQ;
            break;
          case TW.HalfFloat:
            qQ.getter = AQ, qQ.inputSize = sQ
        }
      }
      qQ.blockCount = qQ.height / qQ.scanlineBlockSize;
      for (let sQ = 0; sQ < qQ.blockCount; sQ++) hQ(WQ, XQ);
      const FQ = qQ.width * qQ.height * qQ.outputChannels;
      switch (wQ) {
        case TW.Float:
          qQ.byteArray = new Float32Array(FQ), qQ.textureType = 1, zQ && qQ.byteArray.fill(1, 0, FQ);
          break;
        case TW.HalfFloat:
          qQ.byteArray = new Uint16Array(FQ), qQ.textureType = 2, zQ && qQ.byteArray.fill(15360, 0, FQ);
          break;
        default:
          throw new Error("Unsupported type: " + wQ)
      }
      let gQ = 0;
      for (const sQ of QQ.channels) void 0 !== qQ.decodeChannels[sQ.name] && (qQ.channelLineOffsets[sQ.name] = gQ * qQ.width), gQ += 2 * sQ.pixelType;
      return qQ.bytesPerLine = qQ.width * gQ, qQ.outLineWidth = qQ.width * qQ.outputChannels, "INCREASING_Y" === QQ.lineOrder ? qQ.scanOrder = QQ => QQ : qQ.scanOrder = QQ => qQ.height - 1 - QQ, 4 == qQ.outputChannels ? (qQ.format = 5, qQ.linearSpace = !0) : (qQ.format = 6, qQ.linearSpace = !1), qQ
    }

    function PW(QQ, WQ, XQ, wQ) {
      const qQ = {
        value: 0
      };
      for (let TQ = 0; TQ < QQ.height / QQ.scanlineBlockSize; TQ++) {
        const zQ = vQ(XQ, wQ) - WQ.dataWindow.yMin;
        QQ.size = dQ(XQ, wQ), QQ.lines = zQ + QQ.scanlineBlockSize > QQ.height ? QQ.height - zQ : QQ.scanlineBlockSize;
        const sQ = QQ.size < QQ.lines * QQ.bytesPerLine && QQ.uncompress ? QQ.uncompress(QQ) : QW(QQ);
        wQ.value += QQ.size;
        for (let XQ = 0; XQ < QQ.scanlineBlockSize; XQ++) {
          const wQ = TQ * QQ.scanlineBlockSize,
            zQ = XQ + QQ.scanOrder(wQ);
          if (zQ >= QQ.height) continue;
          const FQ = XQ * QQ.bytesPerLine,
            PQ = (QQ.height - 1 - zQ) * QQ.outLineWidth;
          for (let XQ = 0; XQ < QQ.channels; XQ++) {
            const wQ = WQ.channels[XQ].name,
              TQ = QQ.channelLineOffsets[wQ],
              zQ = QQ.decodeChannels[wQ];
            if (void 0 !== zQ) {
              qQ.value = FQ + TQ;
              for (let WQ = 0; WQ < QQ.width; WQ++) {
                const XQ = PQ + WQ * QQ.outputChannels + zQ;
                QQ.byteArray && (QQ.byteArray[XQ] = QQ.getter(sQ, qQ))
              }
            }
          }
        }
      }
    }
    sW.DefaultOutputType = TW.HalfFloat, sW.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class gW {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(QQ, WQ, XQ, wQ, qQ) {
        throw ".exr not supported in Cube."
      }
      loadData(QQ, WQ, XQ) {
        const qQ = new DataView(QQ.buffer),
          TQ = {
            value: 0
          },
          zQ = LQ(qQ, TQ);
        FW(zQ, qQ, TQ, sW.DefaultOutputType).then((QQ => {
          PW(QQ, zQ, qQ, TQ);
          const wQ = zQ.dataWindow.xMax - zQ.dataWindow.xMin + 1,
            sQ = zQ.dataWindow.yMax - zQ.dataWindow.yMin + 1;
          XQ(wQ, sQ, WQ.generateMipMaps, !1, (() => {
            const XQ = WQ.Uj();
            WQ.format = zQ.format, WQ.type = QQ.textureType, WQ.invertY = !1, WQ._gammaSpace = !zQ.linearSpace, QQ.byteArray && XQ._uploadDataToTextureDirectly(WQ, QQ.byteArray, 0, 0, void 0, !0)
          }))
        })).catch((QQ => {
          wQ.b.Error("Failed to load EXR texture: ", QQ)
        }))
      }
    }
    async function JW(QQ) {
      const WQ = new DataView(QQ),
        XQ = {
          value: 0
        },
        qQ = LQ(WQ, XQ);
      try {
        const QQ = await FW(qQ, WQ, XQ, TW.Float);
        return PW(QQ, qQ, WQ, XQ), QQ.byteArray ? {
          width: qQ.dataWindow.xMax - qQ.dataWindow.xMin + 1,
          height: qQ.dataWindow.yMax - qQ.dataWindow.yMin + 1,
          data: new Float32Array(QQ.byteArray)
        } : (wQ.b.Error("Failed to decode EXR data: No byte array available."), {
          width: 0,
          height: 0,
          data: null
        })
      } catch (TQ) {
        wQ.b.Error("Failed to load EXR data: ", TQ)
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
for (const QQ in modules) Object.freeze(modules[QQ]);