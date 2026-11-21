export const id = 306;
export const ids = [306];
export const modules = {
  41265: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      ReadExrDataAsync: () => HF,
      _ExrTextureLoader: () => uF
    });
    var LQ = wQ(38203),
      qQ = wQ(36729),
      oQ = wQ(39475);
    const DQ = 4,
      kQ = 4,
      vQ = 1,
      mQ = 2,
      uQ = 8,
      HQ = 65536,
      bQ = HQ >> 3,
      YQ = 14,
      xQ = 65537,
      AQ = 1 << YQ,
      tQ = AQ - 1,
      eQ = 59,
      MQ = 63,
      GQ = 2 + MQ - eQ;
    var pQ, cQ;

    function CQ(QQ, FQ) {
      const wQ = new Uint8Array(QQ);
      let LQ = 0;
      for (; 0 != wQ[FQ.value + LQ];) LQ += 1;
      const qQ = (new TextDecoder).decode(wQ.slice(FQ.value, FQ.value + LQ));
      return FQ.value = FQ.value + LQ + 1, qQ
    }

    function SQ(QQ, FQ) {
      const wQ = QQ.getInt32(FQ.value, !0);
      return FQ.value += DQ, wQ
    }

    function iQ(QQ, FQ) {
      const wQ = QQ.getUint32(FQ.value, !0);
      return FQ.value += DQ, wQ
    }

    function WQ(QQ, FQ) {
      const wQ = QQ.getUint8(FQ.value);
      return FQ.value += vQ, wQ
    }

    function RQ(QQ, FQ) {
      const wQ = QQ.getUint16(FQ.value, !0);
      return FQ.value += mQ, wQ
    }

    function OQ(QQ, FQ) {
      const wQ = QQ[FQ.value];
      return FQ.value += vQ, wQ
    }

    function sQ(QQ, FQ) {
      let wQ;
      return wQ = "getBigInt64" in DataView.prototype ? Number(QQ.getBigInt64(FQ.value, !0)) : QQ.getUint32(FQ.value + 4, !0) + Number(QQ.getUint32(FQ.value, !0) << 32), FQ.value += uQ, wQ
    }

    function rQ(QQ, FQ) {
      const wQ = QQ.getFloat32(FQ.value, !0);
      return FQ.value += kQ, wQ
    }

    function IQ(QQ, FQ) {
      return (0, oQ.d)(RQ(QQ, FQ))
    }

    function UQ(QQ, FQ) {
      return (0, oQ.j)((0, qQ.Clamp)(rQ(QQ, FQ), -oQ.g, oQ.g))
    }

    function NQ(QQ, FQ, wQ, LQ) {
      switch (wQ) {
        case "string":
        case "stringvector":
        case "iccProfile":
          return function(QQ, FQ, wQ) {
            const LQ = (new TextDecoder).decode(new Uint8Array(QQ).slice(FQ.value, FQ.value + wQ));
            return FQ.value = FQ.value + wQ, LQ
          }(QQ.buffer, FQ, LQ);
        case "chlist":
          return function(QQ, FQ, wQ) {
            const LQ = FQ.value,
              qQ = [];
            for (; FQ.value < LQ + wQ - 1;) {
              const wQ = CQ(QQ.buffer, FQ),
                LQ = SQ(QQ, FQ),
                oQ = WQ(QQ, FQ);
              FQ.value += 3;
              const DQ = SQ(QQ, FQ),
                kQ = SQ(QQ, FQ);
              qQ.push({
                name: wQ,
                pixelType: LQ,
                pLinear: oQ,
                xSampling: DQ,
                ySampling: kQ
              })
            }
            return FQ.value += 1, qQ
          }(QQ, FQ, LQ);
        case "chromaticities":
          return function(QQ, FQ) {
            return {
              redX: rQ(QQ, FQ),
              redY: rQ(QQ, FQ),
              greenX: rQ(QQ, FQ),
              greenY: rQ(QQ, FQ),
              blueX: rQ(QQ, FQ),
              blueY: rQ(QQ, FQ),
              whiteX: rQ(QQ, FQ),
              whiteY: rQ(QQ, FQ)
            }
          }(QQ, FQ);
        case "compression":
          return function(QQ, FQ) {
            return WQ(QQ, FQ)
          }(QQ, FQ);
        case "box2i":
          return function(QQ, FQ) {
            return {
              xMin: SQ(QQ, FQ),
              yMin: SQ(QQ, FQ),
              xMax: SQ(QQ, FQ),
              yMax: SQ(QQ, FQ)
            }
          }(QQ, FQ);
        case "lineOrder":
          return function(QQ, FQ) {
            const wQ = WQ(QQ, FQ);
            return cQ[wQ]
          }(QQ, FQ);
        case "float":
          return rQ(QQ, FQ);
        case "v2f":
          return function(QQ, FQ) {
            return [rQ(QQ, FQ), rQ(QQ, FQ)]
          }(QQ, FQ);
        case "v3f":
          return function(QQ, FQ) {
            return [rQ(QQ, FQ), rQ(QQ, FQ), rQ(QQ, FQ)]
          }(QQ, FQ);
        case "int":
          return SQ(QQ, FQ);
        case "rational":
          return function(QQ, FQ) {
            return [SQ(QQ, FQ), iQ(QQ, FQ)]
          }(QQ, FQ);
        case "timecode":
          return function(QQ, FQ) {
            return [iQ(QQ, FQ), iQ(QQ, FQ)]
          }(QQ, FQ);
        case "preview":
          return FQ.value += LQ, "skipped";
        default:
          return void(FQ.value += LQ)
      }
    }

    function TQ(QQ) {
      for (let FQ = 1; FQ < QQ.length; FQ++) {
        const wQ = QQ[FQ - 1] + QQ[FQ] - 128;
        QQ[FQ] = wQ
      }
    }

    function KQ(QQ, FQ) {
      let wQ = 0,
        LQ = Math.floor((QQ.length + 1) / 2),
        qQ = 0;
      const oQ = QQ.length - 1;
      for (; !(qQ > oQ) && (FQ[qQ++] = QQ[wQ++], !(qQ > oQ));) FQ[qQ++] = QQ[LQ++]
    }! function(QQ) {
      QQ[QQ.NO_COMPRESSION = 0] = "NO_COMPRESSION", QQ[QQ.RLE_COMPRESSION = 1] = "RLE_COMPRESSION", QQ[QQ.ZIPS_COMPRESSION = 2] = "ZIPS_COMPRESSION", QQ[QQ.ZIP_COMPRESSION = 3] = "ZIP_COMPRESSION", QQ[QQ.PIZ_COMPRESSION = 4] = "PIZ_COMPRESSION", QQ[QQ.PXR24_COMPRESSION = 5] = "PXR24_COMPRESSION"
    }(pQ || (pQ = {})),
    function(QQ) {
      QQ[QQ.INCREASING_Y = 0] = "INCREASING_Y", QQ[QQ.DECREASING_Y = 1] = "DECREASING_Y"
    }(cQ || (cQ = {}));
    const zQ = 20000630;

    function lQ(QQ, FQ) {
      if (QQ.getUint32(0, !0) != zQ) throw new Error("Incorrect OpenEXR format");
      const wQ = QQ.getUint8(4),
        qQ = QQ.getUint8(5),
        oQ = {
          singleTile: !!(2 & qQ),
          longName: !!(4 & qQ),
          deepFormat: !!(8 & qQ),
          multiPart: !!(16 & qQ)
        };
      FQ.value = 8;
      const DQ = {};
      let kQ = !0;
      for (; kQ;) {
        const wQ = CQ(QQ.buffer, FQ);
        if (wQ) {
          const qQ = CQ(QQ.buffer, FQ),
            oQ = NQ(QQ, FQ, qQ, iQ(QQ, FQ));
          void 0 === oQ ? LQ.c.Warn(`Unknown header attribute type ${qQ}'.`) : DQ[wQ] = oQ
        } else kQ = !1
      }
      if (0 != (-5 & qQ)) throw new Error("Unsupported file format");
      return {
        version: wQ,
        spec: oQ,
        ...DQ
      }
    }
    const jQ = 32768,
      aQ = 65535;

    function XQ(QQ, FQ, wQ, LQ, qQ) {
      for (; wQ < QQ;) FQ = FQ << 8 | OQ(LQ, qQ), wQ += 8;
      return {
        l: FQ >> (wQ -= QQ) & (1 << QQ) - 1,
        c: FQ,
        lc: wQ
      }
    }

    function fQ(QQ, FQ, wQ, LQ) {
      return {
        c: QQ = QQ << 8 | OQ(wQ, LQ),
        lc: FQ += 8
      }
    }

    function VQ(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ) {
      if (QQ == FQ) {
        if (LQ < 8) {
          const QQ = fQ(wQ, LQ, qQ, oQ);
          wQ = QQ.c, LQ = QQ.lc
        }
        let QQ = wQ >> (LQ -= 8);
        if (QQ = new Uint8Array([QQ])[0], kQ.value + QQ > vQ) return null;
        const FQ = DQ[kQ.value - 1];
        for (; QQ-- > 0;) DQ[kQ.value++] = FQ
      } else {
        if (!(kQ.value < vQ)) return null;
        DQ[kQ.value++] = QQ
      }
      return {
        c: wQ,
        lc: LQ
      }
    }
    const hQ = new Array(59);

    function JQ(QQ, FQ, wQ, LQ, qQ, oQ) {
      const DQ = FQ;
      let kQ = 0,
        vQ = 0;
      for (; LQ <= qQ; LQ++) {
        if (DQ.value - FQ.value > wQ) return;
        let mQ = XQ(6, kQ, vQ, QQ, DQ);
        const uQ = mQ.l;
        if (kQ = mQ.c, vQ = mQ.lc, oQ[LQ] = uQ, uQ == MQ) {
          if (DQ.value - FQ.value > wQ) throw new Error("Error in HufUnpackEncTable");
          mQ = XQ(8, kQ, vQ, QQ, DQ);
          let uQ = mQ.l + GQ;
          if (kQ = mQ.c, vQ = mQ.lc, LQ + uQ > qQ + 1) throw new Error("Error in HufUnpackEncTable");
          for (; uQ--;) oQ[LQ++] = 0;
          LQ--
        } else if (uQ >= eQ) {
          let QQ = uQ - eQ + 2;
          if (LQ + QQ > qQ + 1) throw new Error("Error in HufUnpackEncTable");
          for (; QQ--;) oQ[LQ++] = 0;
          LQ--
        }
      }! function(QQ) {
        for (let wQ = 0; wQ <= 58; ++wQ) hQ[wQ] = 0;
        for (let wQ = 0; wQ < xQ; ++wQ) hQ[QQ[wQ]] += 1;
        let FQ = 0;
        for (let wQ = 58; wQ > 0; --wQ) {
          const QQ = FQ + hQ[wQ] >> 1;
          hQ[wQ] = FQ, FQ = QQ
        }
        for (let wQ = 0; wQ < xQ; ++wQ) {
          const FQ = QQ[wQ];
          FQ > 0 && (QQ[wQ] = FQ | hQ[FQ]++ << 6)
        }
      }(oQ)
    }

    function EQ(QQ) {
      return 63 & QQ
    }

    function nQ(QQ) {
      return QQ >> 6
    }

    function gQ(QQ, FQ, wQ, LQ, qQ, oQ) {
      const DQ = wQ.value,
        kQ = iQ(FQ, wQ),
        vQ = iQ(FQ, wQ);
      wQ.value += 4;
      const mQ = iQ(FQ, wQ);
      if (wQ.value += 4, kQ < 0 || kQ >= xQ || vQ < 0 || vQ >= xQ) throw new Error("Wrong HUF_ENCSIZE");
      const uQ = new Array(xQ),
        HQ = new Array(AQ);
      ! function(QQ) {
        for (let FQ = 0; FQ < AQ; FQ++) QQ[FQ] = {}, QQ[FQ].len = 0, QQ[FQ].lit = 0, QQ[FQ].p = null
      }(HQ);
      if (JQ(QQ, wQ, LQ - (wQ.value - DQ), kQ, vQ, uQ), mQ > 8 * (LQ - (wQ.value - DQ))) throw new Error("Wrong hufUncompress");
      ! function(QQ, FQ, wQ, LQ) {
        for (; FQ <= wQ; FQ++) {
          const wQ = nQ(QQ[FQ]),
            qQ = EQ(QQ[FQ]);
          if (wQ >> qQ) throw new Error("Invalid table entry");
          if (qQ > YQ) {
            const QQ = LQ[wQ >> qQ - YQ];
            if (QQ.len) throw new Error("Invalid table entry");
            if (QQ.lit++, QQ.p) {
              const FQ = QQ.p;
              QQ.p = new Array(QQ.lit);
              for (let wQ = 0; wQ < QQ.lit - 1; ++wQ) QQ.p[wQ] = FQ[wQ]
            } else QQ.p = new Array(1);
            QQ.p[QQ.lit - 1] = FQ
          } else if (qQ) {
            let QQ = 0;
            for (let oQ = 1 << YQ - qQ; oQ > 0; oQ--) {
              const oQ = LQ[(wQ << YQ - qQ) + QQ];
              if (oQ.len || oQ.p) throw new Error("Invalid table entry");
              oQ.len = qQ, oQ.lit = FQ, QQ++
            }
          }
        }
      }(uQ, kQ, vQ, HQ),
      function(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ) {
        let mQ = 0,
          uQ = 0;
        const HQ = DQ,
          bQ = Math.trunc(LQ.value + (qQ + 7) / 8);
        for (; LQ.value < bQ;) {
          let qQ = fQ(mQ, uQ, wQ, LQ);
          for (mQ = qQ.c, uQ = qQ.lc; uQ >= YQ;) {
            const DQ = FQ[mQ >> uQ - YQ & tQ];
            if (DQ.len) {
              uQ -= DQ.len;
              const QQ = VQ(DQ.lit, oQ, mQ, uQ, wQ, LQ, kQ, vQ, HQ);
              QQ && (mQ = QQ.c, uQ = QQ.lc)
            } else {
              if (!DQ.p) throw new Error("hufDecode issues");
              let FQ;
              for (FQ = 0; FQ < DQ.lit; FQ++) {
                const YQ = EQ(QQ[DQ.p[FQ]]);
                for (; uQ < YQ && LQ.value < bQ;) qQ = fQ(mQ, uQ, wQ, LQ), mQ = qQ.c, uQ = qQ.lc;
                if (uQ >= YQ && nQ(QQ[DQ.p[FQ]]) == (mQ >> uQ - YQ & (1 << YQ) - 1)) {
                  uQ -= YQ;
                  const QQ = VQ(DQ.p[FQ], oQ, mQ, uQ, wQ, LQ, kQ, vQ, HQ);
                  QQ && (mQ = QQ.c, uQ = QQ.lc);
                  break
                }
              }
              if (FQ == DQ.lit) throw new Error("HufDecode issues")
            }
          }
        }
        const xQ = 8 - qQ & 7;
        for (mQ >>= xQ, uQ -= xQ; uQ > 0;) {
          const QQ = FQ[mQ << YQ - uQ & tQ];
          if (!QQ.len) throw new Error("HufDecode issues");
          {
            uQ -= QQ.len;
            const FQ = VQ(QQ.lit, oQ, mQ, uQ, wQ, LQ, kQ, vQ, HQ);
            FQ && (mQ = FQ.c, uQ = FQ.lc)
          }
        }
      }(uQ, HQ, QQ, wQ, mQ, vQ, oQ, qQ, {
        value: 0
      })
    }

    function PQ(QQ) {
      return 65535 & QQ
    }

    function ZQ(QQ) {
      const FQ = PQ(QQ);
      return FQ > 32767 ? FQ - 65536 : FQ
    }

    function yQ(QQ, FQ) {
      const wQ = ZQ(QQ),
        LQ = ZQ(FQ),
        qQ = wQ + (1 & LQ) + (LQ >> 1);
      return {
        a: qQ,
        b: qQ - LQ
      }
    }

    function BQ(QQ, FQ) {
      const wQ = PQ(QQ),
        LQ = PQ(FQ),
        qQ = wQ - (LQ >> 1) & aQ;
      return {
        a: LQ + qQ - jQ & aQ,
        b: qQ
      }
    }

    function dQ(QQ, FQ, wQ, LQ, qQ, oQ, DQ) {
      const kQ = DQ < 16384,
        vQ = wQ > qQ ? qQ : wQ;
      let mQ, uQ, HQ = 1;
      for (; HQ <= vQ;) HQ <<= 1;
      for (HQ >>= 1, mQ = HQ, HQ >>= 1; HQ >= 1;) {
        uQ = 0;
        const DQ = uQ + oQ * (qQ - mQ),
          vQ = oQ * HQ,
          bQ = oQ * mQ,
          YQ = LQ * HQ,
          xQ = LQ * mQ;
        let AQ, tQ, eQ, MQ;
        for (; uQ <= DQ; uQ += bQ) {
          let qQ = uQ;
          const oQ = uQ + LQ * (wQ - mQ);
          for (; qQ <= oQ; qQ += xQ) {
            const wQ = qQ + YQ,
              LQ = qQ + vQ,
              oQ = LQ + YQ;
            if (kQ) {
              let DQ = yQ(QQ[qQ + FQ], QQ[LQ + FQ]);
              AQ = DQ.a, eQ = DQ.b, DQ = yQ(QQ[wQ + FQ], QQ[oQ + FQ]), tQ = DQ.a, MQ = DQ.b, DQ = yQ(AQ, tQ), QQ[qQ + FQ] = DQ.a, QQ[wQ + FQ] = DQ.b, DQ = yQ(eQ, MQ), QQ[LQ + FQ] = DQ.a, QQ[oQ + FQ] = DQ.b
            } else {
              let DQ = BQ(QQ[qQ + FQ], QQ[LQ + FQ]);
              AQ = DQ.a, eQ = DQ.b, DQ = BQ(QQ[wQ + FQ], QQ[oQ + FQ]), tQ = DQ.a, MQ = DQ.b, DQ = BQ(AQ, tQ), QQ[qQ + FQ] = DQ.a, QQ[wQ + FQ] = DQ.b, DQ = BQ(eQ, MQ), QQ[LQ + FQ] = DQ.a, QQ[oQ + FQ] = DQ.b
            }
          }
          if (wQ & HQ) {
            const wQ = qQ + vQ;
            let LQ;
            LQ = kQ ? yQ(QQ[qQ + FQ], QQ[wQ + FQ]) : BQ(QQ[qQ + FQ], QQ[wQ + FQ]), AQ = LQ.a, QQ[wQ + FQ] = LQ.b, QQ[qQ + FQ] = AQ
          }
        }
        if (qQ & HQ) {
          let qQ = uQ;
          const oQ = uQ + LQ * (wQ - mQ);
          for (; qQ <= oQ; qQ += xQ) {
            const wQ = qQ + YQ;
            let LQ;
            LQ = kQ ? yQ(QQ[qQ + FQ], QQ[wQ + FQ]) : BQ(QQ[qQ + FQ], QQ[wQ + FQ]), AQ = LQ.a, QQ[wQ + FQ] = LQ.b, QQ[qQ + FQ] = AQ
          }
        }
        mQ = HQ, HQ >>= 1
      }
      return uQ
    }

    function QF(QQ) {
      return new DataView(QQ.array.buffer, QQ.offset.value, QQ.size)
    }

    function FF(QQ) {
      const FQ = QQ.viewer.buffer.slice(QQ.offset.value, QQ.offset.value + QQ.size),
        wQ = new Uint8Array(function(QQ) {
          let FQ = QQ.byteLength;
          const wQ = [];
          let LQ = 0;
          const qQ = new DataView(QQ);
          for (; FQ > 0;) {
            const QQ = qQ.getInt8(LQ++);
            if (QQ < 0) {
              const oQ = -QQ;
              FQ -= oQ + 1;
              for (let QQ = 0; QQ < oQ; QQ++) wQ.push(qQ.getUint8(LQ++))
            } else {
              const oQ = QQ;
              FQ -= 2;
              const DQ = qQ.getUint8(LQ++);
              for (let QQ = 0; QQ < oQ + 1; QQ++) wQ.push(DQ)
            }
          }
          return wQ
        }(FQ)),
        LQ = new Uint8Array(wQ.length);
      return TQ(wQ), KQ(wQ, LQ), new DataView(LQ.buffer)
    }

    function wF(QQ) {
      const FQ = QQ.array.slice(QQ.offset.value, QQ.offset.value + QQ.size),
        wQ = fflate.unzlibSync(FQ),
        LQ = new Uint8Array(wQ.length);
      return TQ(wQ), KQ(wQ, LQ), new DataView(LQ.buffer)
    }

    function LF(QQ) {
      const FQ = QQ.array.slice(QQ.offset.value, QQ.offset.value + QQ.size),
        wQ = fflate.unzlibSync(FQ),
        LQ = QQ.lines * QQ.channels * QQ.width,
        qQ = 1 == QQ.type ? new Uint16Array(LQ) : new Uint32Array(LQ);
      let oQ = 0,
        DQ = 0;
      const kQ = new Array(4);
      for (let vQ = 0; vQ < QQ.lines; vQ++)
        for (let FQ = 0; FQ < QQ.channels; FQ++) {
          let FQ = 0;
          switch (QQ.type) {
            case 1:
              kQ[0] = oQ, kQ[1] = kQ[0] + QQ.width, oQ = kQ[1] + QQ.width;
              for (let LQ = 0; LQ < QQ.width; ++LQ) {
                FQ += wQ[kQ[0]++] << 8 | wQ[kQ[1]++], qQ[DQ] = FQ, DQ++
              }
              break;
            case 2:
              kQ[0] = oQ, kQ[1] = kQ[0] + QQ.width, kQ[2] = kQ[1] + QQ.width, oQ = kQ[2] + QQ.width;
              for (let LQ = 0; LQ < QQ.width; ++LQ) {
                FQ += wQ[kQ[0]++] << 24 | wQ[kQ[1]++] << 16 | wQ[kQ[2]++] << 8, qQ[DQ] = FQ, DQ++
              }
          }
        }
      return new DataView(qQ.buffer)
    }

    function qF(QQ) {
      const FQ = QQ.viewer,
        wQ = {
          value: QQ.offset.value
        },
        LQ = new Uint16Array(QQ.width * QQ.scanlineBlockSize * (QQ.channels * QQ.type)),
        qQ = new Uint8Array(bQ);
      let oQ = 0;
      const DQ = new Array(QQ.channels);
      for (let mQ = 0; mQ < QQ.channels; mQ++) DQ[mQ] = {}, DQ[mQ].start = oQ, DQ[mQ].end = DQ[mQ].start, DQ[mQ].nx = QQ.width, DQ[mQ].ny = QQ.lines, DQ[mQ].size = QQ.type, oQ += DQ[mQ].nx * DQ[mQ].ny * DQ[mQ].size;
      const kQ = RQ(FQ, wQ),
        vQ = RQ(FQ, wQ);
      if (vQ >= bQ) throw new Error("Wrong PIZ_COMPRESSION BITMAP_SIZE");
      if (kQ <= vQ)
        for (let mQ = 0; mQ < vQ - kQ + 1; mQ++) qQ[mQ + kQ] = WQ(FQ, wQ);
      const uQ = new Uint16Array(HQ),
        YQ = function(QQ, FQ) {
          let wQ = 0;
          for (let qQ = 0; qQ < HQ; ++qQ)(0 == qQ || QQ[qQ >> 3] & 1 << (7 & qQ)) && (FQ[wQ++] = qQ);
          const LQ = wQ - 1;
          for (; wQ < HQ;) FQ[wQ++] = 0;
          return LQ
        }(qQ, uQ),
        xQ = iQ(FQ, wQ);
      gQ(QQ.array, FQ, wQ, xQ, LQ, oQ);
      for (let mQ = 0; mQ < QQ.channels; ++mQ) {
        const QQ = DQ[mQ];
        for (let FQ = 0; FQ < DQ[mQ].size; ++FQ) dQ(LQ, QQ.start + FQ, QQ.nx, QQ.size, QQ.ny, QQ.nx * QQ.size, YQ)
      }! function(QQ, FQ, wQ) {
        for (let LQ = 0; LQ < wQ; ++LQ) FQ[LQ] = QQ[FQ[LQ]]
      }(uQ, LQ, oQ);
      let AQ = 0;
      const tQ = new Uint8Array(LQ.buffer.byteLength);
      for (let HQ = 0; HQ < QQ.lines; HQ++)
        for (let FQ = 0; FQ < QQ.channels; FQ++) {
          const QQ = DQ[FQ],
            wQ = QQ.nx * QQ.size,
            qQ = new Uint8Array(LQ.buffer, QQ.end * mQ, wQ * mQ);
          tQ.set(qQ, AQ), AQ += wQ * mQ, QQ.end += wQ
        }
      return new DataView(tQ.buffer)
    }
    var oF, DF = wQ(39505);
    ! function(QQ) {
      QQ[QQ.Float = 0] = "Float", QQ[QQ.HalfFloat = 1] = "HalfFloat"
    }(oF || (oF = {}));
    class kF {}
    async function vF(QQ, FQ, wQ, LQ) {
      const qQ = {
        size: 0,
        viewer: FQ,
        array: new Uint8Array(FQ.buffer),
        offset: wQ,
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
        case pQ.NO_COMPRESSION:
          qQ.lines = 1, qQ.uncompress = QF;
          break;
        case pQ.RLE_COMPRESSION:
          qQ.lines = 1, qQ.uncompress = FF;
          break;
        case pQ.ZIPS_COMPRESSION:
          qQ.lines = 1, qQ.uncompress = wF, await DF.g.LoadScriptAsync(kF.FFLATEUrl);
          break;
        case pQ.ZIP_COMPRESSION:
          qQ.lines = 16, qQ.uncompress = wF, await DF.g.LoadScriptAsync(kF.FFLATEUrl);
          break;
        case pQ.PIZ_COMPRESSION:
          qQ.lines = 32, qQ.uncompress = qF;
          break;
        case pQ.PXR24_COMPRESSION:
          qQ.lines = 16, qQ.uncompress = LF, await DF.g.LoadScriptAsync(kF.FFLATEUrl);
          break;
        default:
          throw new Error(pQ[QQ.compression] + " is unsupported")
      }
      qQ.scanlineBlockSize = qQ.lines;
      const oQ = {};
      for (const kQ of QQ.channels) switch (kQ.name) {
        case "R":
        case "G":
        case "B":
        case "A":
        case "Y":
          oQ[kQ.name] = !0, qQ.type = kQ.pixelType
      }
      let DQ = !1;
      if (oQ.R && oQ.G && oQ.B && oQ.A) qQ.outputChannels = 4, qQ.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (oQ.R && oQ.G && oQ.B) DQ = !0, qQ.outputChannels = 4, qQ.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (oQ.R && oQ.G) qQ.outputChannels = 2, qQ.decodeChannels = {
        R: 0,
        G: 1
      };
      else if (oQ.R) qQ.outputChannels = 1, qQ.decodeChannels = {
        R: 0
      };
      else {
        if (!oQ.Y) throw new Error("EXRLoader.parse: file contains unsupported data channels.");
        qQ.outputChannels = 1, qQ.decodeChannels = {
          Y: 0
        }
      }
      if (1 === qQ.type) switch (LQ) {
        case oF.Float:
          qQ.getter = IQ, qQ.inputSize = mQ;
          break;
        case oF.HalfFloat:
          qQ.getter = RQ, qQ.inputSize = mQ
      } else {
        if (2 !== qQ.type) throw new Error("Unsupported pixelType " + qQ.type + " for " + QQ.compression);
        switch (LQ) {
          case oF.Float:
            qQ.getter = rQ, qQ.inputSize = kQ;
            break;
          case oF.HalfFloat:
            qQ.getter = UQ, qQ.inputSize = kQ
        }
      }
      qQ.blockCount = qQ.height / qQ.scanlineBlockSize;
      for (let kQ = 0; kQ < qQ.blockCount; kQ++) sQ(FQ, wQ);
      const vQ = qQ.width * qQ.height * qQ.outputChannels;
      switch (LQ) {
        case oF.Float:
          qQ.byteArray = new Float32Array(vQ), qQ.textureType = 1, DQ && qQ.byteArray.fill(1, 0, vQ);
          break;
        case oF.HalfFloat:
          qQ.byteArray = new Uint16Array(vQ), qQ.textureType = 2, DQ && qQ.byteArray.fill(15360, 0, vQ);
          break;
        default:
          throw new Error("Unsupported type: " + LQ)
      }
      let uQ = 0;
      for (const kQ of QQ.channels) void 0 !== qQ.decodeChannels[kQ.name] && (qQ.channelLineOffsets[kQ.name] = uQ * qQ.width), uQ += 2 * kQ.pixelType;
      return qQ.bytesPerLine = qQ.width * uQ, qQ.outLineWidth = qQ.width * qQ.outputChannels, "INCREASING_Y" === QQ.lineOrder ? qQ.scanOrder = QQ => QQ : qQ.scanOrder = QQ => qQ.height - 1 - QQ, 4 == qQ.outputChannels ? (qQ.format = 5, qQ.linearSpace = !0) : (qQ.format = 6, qQ.linearSpace = !1), qQ
    }

    function mF(QQ, FQ, wQ, LQ) {
      const qQ = {
        value: 0
      };
      for (let oQ = 0; oQ < QQ.height / QQ.scanlineBlockSize; oQ++) {
        const DQ = SQ(wQ, LQ) - FQ.dataWindow.yMin;
        QQ.size = iQ(wQ, LQ), QQ.lines = DQ + QQ.scanlineBlockSize > QQ.height ? QQ.height - DQ : QQ.scanlineBlockSize;
        const kQ = QQ.size < QQ.lines * QQ.bytesPerLine && QQ.uncompress ? QQ.uncompress(QQ) : QF(QQ);
        LQ.value += QQ.size;
        for (let wQ = 0; wQ < QQ.scanlineBlockSize; wQ++) {
          const LQ = oQ * QQ.scanlineBlockSize,
            DQ = wQ + QQ.scanOrder(LQ);
          if (DQ >= QQ.height) continue;
          const vQ = wQ * QQ.bytesPerLine,
            mQ = (QQ.height - 1 - DQ) * QQ.outLineWidth;
          for (let wQ = 0; wQ < QQ.channels; wQ++) {
            const LQ = FQ.channels[wQ].name,
              oQ = QQ.channelLineOffsets[LQ],
              DQ = QQ.decodeChannels[LQ];
            if (void 0 !== DQ) {
              qQ.value = vQ + oQ;
              for (let FQ = 0; FQ < QQ.width; FQ++) {
                const wQ = mQ + FQ * QQ.outputChannels + DQ;
                QQ.byteArray && (QQ.byteArray[wQ] = QQ.getter(kQ, qQ))
              }
            }
          }
        }
      }
    }
    kF.DefaultOutputType = oF.HalfFloat, kF.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class uF {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(QQ, FQ, wQ, LQ, qQ) {
        throw ".exr not supported in Cube."
      }
      loadData(QQ, FQ, wQ) {
        const qQ = new DataView(QQ.buffer),
          oQ = {
            value: 0
          },
          DQ = lQ(qQ, oQ);
        vF(DQ, qQ, oQ, kF.DefaultOutputType).then((QQ => {
          mF(QQ, DQ, qQ, oQ);
          const LQ = DQ.dataWindow.xMax - DQ.dataWindow.xMin + 1,
            kQ = DQ.dataWindow.yMax - DQ.dataWindow.yMin + 1;
          wQ(LQ, kQ, FQ.generateMipMaps, !1, (() => {
            const wQ = FQ.Wx();
            FQ.format = DQ.format, FQ.type = QQ.textureType, FQ.invertY = !1, FQ._gammaSpace = !DQ.linearSpace, QQ.byteArray && wQ._uploadDataToTextureDirectly(FQ, QQ.byteArray, 0, 0, void 0, !0)
          }))
        })).catch((QQ => {
          LQ.c.Error("Failed to load EXR texture: ", QQ)
        }))
      }
    }
    async function HF(QQ) {
      const FQ = new DataView(QQ),
        wQ = {
          value: 0
        },
        qQ = lQ(FQ, wQ);
      try {
        const QQ = await vF(qQ, FQ, wQ, oF.Float);
        return mF(QQ, qQ, FQ, wQ), QQ.byteArray ? {
          width: qQ.dataWindow.xMax - qQ.dataWindow.xMin + 1,
          height: qQ.dataWindow.yMax - qQ.dataWindow.yMin + 1,
          data: new Float32Array(QQ.byteArray)
        } : (LQ.c.Error("Failed to decode EXR data: No byte array available."), {
          width: 0,
          height: 0,
          data: null
        })
      } catch (oQ) {
        LQ.c.Error("Failed to load EXR data: ", oQ)
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