/*! For license information please see bqoxjr.223.2a6bdb70.chunk.js.LICENSE.txt */
export const id = 223;
export const ids = [223, 230];
export const modules = {
  37846: QQ => {
    QQ.exports = function(QQ) {
      return null != QQ && null != QQ.constructor && "function" === typeof QQ.constructor.isBuffer && QQ.constructor.isBuffer(QQ)
    }
  },
  37824: (QQ, FQ, wQ) => {
    var LQ = wQ(37832),
      qQ = wQ(37838),
      oQ = wQ(37846);
    wQ.g.__TYPEDARRAY_POOL || (wQ.g.__TYPEDARRAY_POOL = {
      UINT8: qQ([32, 0]),
      UINT16: qQ([32, 0]),
      UINT32: qQ([32, 0]),
      INT8: qQ([32, 0]),
      INT16: qQ([32, 0]),
      INT32: qQ([32, 0]),
      FLOAT: qQ([32, 0]),
      DOUBLE: qQ([32, 0]),
      DATA: qQ([32, 0]),
      UINT8C: qQ([32, 0]),
      BUFFER: qQ([32, 0])
    });
    var DQ = "undefined" !== typeof Uint8ClampedArray,
      kQ = wQ.g.__TYPEDARRAY_POOL;
    kQ.UINT8C || (kQ.UINT8C = qQ([32, 0])), kQ.BUFFER || (kQ.BUFFER = qQ([32, 0]));
    var vQ = kQ.DATA,
      mQ = kQ.BUFFER;

    function uQ(QQ) {
      if (QQ) {
        var FQ = QQ.length || QQ.byteLength,
          wQ = LQ.log2(FQ);
        vQ[wQ].push(QQ)
      }
    }

    function HQ(QQ) {
      QQ = LQ.nextPow2(QQ);
      var FQ = LQ.log2(QQ),
        wQ = vQ[FQ];
      return wQ.length > 0 ? wQ.pop() : new ArrayBuffer(QQ)
    }

    function bQ(QQ) {
      return new Uint8Array(HQ(QQ), 0, QQ)
    }

    function YQ(QQ) {
      return new Uint16Array(HQ(2 * QQ), 0, QQ)
    }

    function xQ(QQ) {
      return new Uint32Array(HQ(4 * QQ), 0, QQ)
    }

    function AQ(QQ) {
      return new Int8Array(HQ(QQ), 0, QQ)
    }

    function tQ(QQ) {
      return new Int16Array(HQ(2 * QQ), 0, QQ)
    }

    function eQ(QQ) {
      return new Int32Array(HQ(4 * QQ), 0, QQ)
    }

    function MQ(QQ) {
      return new Float32Array(HQ(4 * QQ), 0, QQ)
    }

    function GQ(QQ) {
      return new Float64Array(HQ(8 * QQ), 0, QQ)
    }

    function pQ(QQ) {
      return DQ ? new Uint8ClampedArray(HQ(QQ), 0, QQ) : bQ(QQ)
    }

    function cQ(QQ) {
      return new DataView(HQ(QQ), 0, QQ)
    }
    FQ.free = function(QQ) {
      if (oQ(QQ)) mQ[LQ.log2(QQ.length)].push(QQ);
      else {
        if ("[object ArrayBuffer]" !== Object.prototype.toString.call(QQ) && (QQ = QQ.buffer), !QQ) return;
        var FQ = QQ.length || QQ.byteLength,
          wQ = 0 | LQ.log2(FQ);
        vQ[wQ].push(QQ)
      }
    }, FQ.freeUint8 = FQ.freeUint16 = FQ.freeUint32 = FQ.freeInt8 = FQ.freeInt16 = FQ.freeInt32 = FQ.freeFloat32 = FQ.freeFloat = FQ.freeFloat64 = FQ.freeDouble = FQ.freeUint8Clamped = FQ.freeDataView = function(QQ) {
      uQ(QQ.buffer)
    }, FQ.freeArrayBuffer = uQ, FQ.freeBuffer = function(QQ) {
      mQ[LQ.log2(QQ.length)].push(QQ)
    }, FQ.malloc = function(QQ, FQ) {
      if (void 0 === FQ || "arraybuffer" === FQ) return HQ(QQ);
      switch (FQ) {
        case "uint8":
          return bQ(QQ);
        case "uint16":
          return YQ(QQ);
        case "uint32":
          return xQ(QQ);
        case "int8":
          return AQ(QQ);
        case "int16":
          return tQ(QQ);
        case "int32":
          return eQ(QQ);
        case "float":
        case "float32":
          return MQ(QQ);
        case "double":
        case "float64":
          return GQ(QQ);
        case "uint8_clamped":
          return pQ(QQ);
        case "buffer":
          throw "Buffer not supported";
        case "data":
        case "dataview":
          return cQ(QQ);
        default:
          return null
      }
      return null
    }, FQ.mallocArrayBuffer = HQ, FQ.mallocUint8 = bQ, FQ.mallocUint16 = YQ, FQ.mallocUint32 = xQ, FQ.mallocInt8 = AQ, FQ.mallocInt16 = tQ, FQ.mallocInt32 = eQ, FQ.mallocFloat32 = FQ.mallocFloat = MQ, FQ.mallocFloat64 = FQ.mallocDouble = GQ, FQ.mallocUint8Clamped = pQ, FQ.mallocDataView = cQ, FQ.clearCache = function() {
      for (var QQ = 0; QQ < 32; ++QQ) kQ.UINT8[QQ].length = 0, kQ.UINT16[QQ].length = 0, kQ.UINT32[QQ].length = 0, kQ.INT8[QQ].length = 0, kQ.INT16[QQ].length = 0, kQ.INT32[QQ].length = 0, kQ.FLOAT[QQ].length = 0, kQ.DOUBLE[QQ].length = 0, kQ.UINT8C[QQ].length = 0, vQ[QQ].length = 0, mQ[QQ].length = 0
    }
  },
  37832: (QQ, FQ) => {
    function wQ(QQ) {
      var FQ = 32;
      return (QQ &= -QQ) && FQ--, 65535 & QQ && (FQ -= 16), 16711935 & QQ && (FQ -= 8), 252645135 & QQ && (FQ -= 4), 858993459 & QQ && (FQ -= 2), 1431655765 & QQ && (FQ -= 1), FQ
    }
    FQ.INT_BITS = 32, FQ.INT_MAX = 2147483647, FQ.INT_MIN = -1 << 31, FQ.sign = function(QQ) {
      return (QQ > 0) - (QQ < 0)
    }, FQ.abs = function(QQ) {
      var FQ = QQ >> 31;
      return (QQ ^ FQ) - FQ
    }, FQ.min = function(QQ, FQ) {
      return FQ ^ (QQ ^ FQ) & -(QQ < FQ)
    }, FQ.max = function(QQ, FQ) {
      return QQ ^ (QQ ^ FQ) & -(QQ < FQ)
    }, FQ.isPow2 = function(QQ) {
      return !(QQ & QQ - 1) && !!QQ
    }, FQ.log2 = function(QQ) {
      var FQ, wQ;
      return FQ = (QQ > 65535) << 4, FQ |= wQ = ((QQ >>>= FQ) > 255) << 3, FQ |= wQ = ((QQ >>>= wQ) > 15) << 2, (FQ |= wQ = ((QQ >>>= wQ) > 3) << 1) | (QQ >>>= wQ) >> 1
    }, FQ.log10 = function(QQ) {
      return QQ >= 1e9 ? 9 : QQ >= 1e8 ? 8 : QQ >= 1e7 ? 7 : QQ >= 1e6 ? 6 : QQ >= 1e5 ? 5 : QQ >= 1e4 ? 4 : QQ >= 1e3 ? 3 : QQ >= 100 ? 2 : QQ >= 10 ? 1 : 0
    }, FQ.popCount = function(QQ) {
      return 16843009 * ((QQ = (858993459 & (QQ -= QQ >>> 1 & 1431655765)) + (QQ >>> 2 & 858993459)) + (QQ >>> 4) & 252645135) >>> 24
    }, FQ.countTrailingZeros = wQ, FQ.nextPow2 = function(QQ) {
      return QQ += 0 === QQ, --QQ, QQ |= QQ >>> 1, QQ |= QQ >>> 2, QQ |= QQ >>> 4, QQ |= QQ >>> 8, (QQ |= QQ >>> 16) + 1
    }, FQ.prevPow2 = function(QQ) {
      return QQ |= QQ >>> 1, QQ |= QQ >>> 2, QQ |= QQ >>> 4, QQ |= QQ >>> 8, (QQ |= QQ >>> 16) - (QQ >>> 1)
    }, FQ.parity = function(QQ) {
      return QQ ^= QQ >>> 16, QQ ^= QQ >>> 8, QQ ^= QQ >>> 4, 27030 >>> (QQ &= 15) & 1
    };
    var LQ = new Array(256);
    ! function(QQ) {
      for (var FQ = 0; FQ < 256; ++FQ) {
        var wQ = FQ,
          LQ = FQ,
          qQ = 7;
        for (wQ >>>= 1; wQ; wQ >>>= 1) LQ <<= 1, LQ |= 1 & wQ, --qQ;
        QQ[FQ] = LQ << qQ & 255
      }
    }(LQ), FQ.reverse = function(QQ) {
      return LQ[255 & QQ] << 24 | LQ[QQ >>> 8 & 255] << 16 | LQ[QQ >>> 16 & 255] << 8 | LQ[QQ >>> 24 & 255]
    }, FQ.interleave2 = function(QQ, FQ) {
      return (QQ = 1431655765 & ((QQ = 858993459 & ((QQ = 252645135 & ((QQ = 16711935 & ((QQ &= 65535) | QQ << 8)) | QQ << 4)) | QQ << 2)) | QQ << 1)) | (FQ = 1431655765 & ((FQ = 858993459 & ((FQ = 252645135 & ((FQ = 16711935 & ((FQ &= 65535) | FQ << 8)) | FQ << 4)) | FQ << 2)) | FQ << 1)) << 1
    }, FQ.deinterleave2 = function(QQ, FQ) {
      return (QQ = 65535 & ((QQ = 16711935 & ((QQ = 252645135 & ((QQ = 858993459 & ((QQ = QQ >>> FQ & 1431655765) | QQ >>> 1)) | QQ >>> 2)) | QQ >>> 4)) | QQ >>> 16)) << 16 >> 16
    }, FQ.interleave3 = function(QQ, FQ, wQ) {
      return QQ = 1227133513 & ((QQ = 3272356035 & ((QQ = 251719695 & ((QQ = 4278190335 & ((QQ &= 1023) | QQ << 16)) | QQ << 8)) | QQ << 4)) | QQ << 2), (QQ |= (FQ = 1227133513 & ((FQ = 3272356035 & ((FQ = 251719695 & ((FQ = 4278190335 & ((FQ &= 1023) | FQ << 16)) | FQ << 8)) | FQ << 4)) | FQ << 2)) << 1) | (wQ = 1227133513 & ((wQ = 3272356035 & ((wQ = 251719695 & ((wQ = 4278190335 & ((wQ &= 1023) | wQ << 16)) | wQ << 8)) | wQ << 4)) | wQ << 2)) << 2
    }, FQ.deinterleave3 = function(QQ, FQ) {
      return (QQ = 1023 & ((QQ = 4278190335 & ((QQ = 251719695 & ((QQ = 3272356035 & ((QQ = QQ >>> FQ & 1227133513) | QQ >>> 2)) | QQ >>> 4)) | QQ >>> 8)) | QQ >>> 16)) << 22 >> 22
    }, FQ.nextCombination = function(QQ) {
      var FQ = QQ | QQ - 1;
      return FQ + 1 | (~FQ & -~FQ) - 1 >>> wQ(QQ) + 1
    }
  },
  37822: (QQ, FQ, wQ) => {
    QQ.exports = function(QQ, FQ, wQ) {
      switch (arguments.length) {
        case 1:
          return LQ = [], mQ(qQ = QQ, qQ, uQ, !0), LQ;
        case 2:
          return "function" === typeof FQ ? mQ(QQ, QQ, FQ, !0) : function(QQ, FQ) {
            return LQ = [], mQ(QQ, FQ, uQ, !1), LQ
          }(QQ, FQ);
        case 3:
          return mQ(QQ, FQ, wQ, !1);
        default:
          throw new Error("box-intersect: Invalid arguments")
      }
      var qQ
    };
    var LQ, qQ = wQ(37824),
      oQ = wQ(37848),
      DQ = wQ(37856);

    function kQ(QQ, FQ) {
      for (var wQ = 0; wQ < QQ; ++wQ)
        if (!(FQ[wQ] <= FQ[wQ + QQ])) return !0;
      return !1
    }

    function vQ(QQ, FQ, wQ, LQ) {
      for (var qQ = 0, oQ = 0, DQ = 0, vQ = QQ.length; DQ < vQ; ++DQ) {
        var mQ = QQ[DQ];
        if (!kQ(FQ, mQ)) {
          for (var uQ = 0; uQ < 2 * FQ; ++uQ) wQ[qQ++] = mQ[uQ];
          LQ[oQ++] = DQ
        }
      }
      return oQ
    }

    function mQ(QQ, FQ, wQ, LQ) {
      var kQ = QQ.length,
        mQ = FQ.length;
      if (!(kQ <= 0 || mQ <= 0)) {
        var uQ = QQ[0].length >>> 1;
        if (!(uQ <= 0)) {
          var HQ, bQ = qQ.mallocDouble(2 * uQ * kQ),
            YQ = qQ.mallocInt32(kQ);
          if ((kQ = vQ(QQ, uQ, bQ, YQ)) > 0) {
            if (1 === uQ && LQ) oQ.init(kQ), HQ = oQ.sweepComplete(uQ, wQ, 0, kQ, bQ, YQ, 0, kQ, bQ, YQ);
            else {
              var xQ = qQ.mallocDouble(2 * uQ * mQ),
                AQ = qQ.mallocInt32(mQ);
              (mQ = vQ(FQ, uQ, xQ, AQ)) > 0 && (oQ.init(kQ + mQ), HQ = 1 === uQ ? oQ.sweepBipartite(uQ, wQ, 0, kQ, bQ, YQ, 0, mQ, xQ, AQ) : DQ(uQ, wQ, LQ, kQ, bQ, YQ, mQ, xQ, AQ), qQ.free(xQ), qQ.free(AQ))
            }
            qQ.free(bQ), qQ.free(YQ)
          }
          return HQ
        }
      }
    }

    function uQ(QQ, FQ) {
      LQ.push([QQ, FQ])
    }
  },
  37860: (QQ, FQ) => {
    var wQ = "d",
      LQ = "ax",
      qQ = "fp",
      oQ = "es",
      DQ = "rs",
      kQ = "re",
      vQ = "rb",
      mQ = "bs",
      uQ = "be",
      HQ = "bb",
      bQ = [wQ, LQ, "vv", DQ, kQ, vQ, "ri", mQ, uQ, HQ, "bi"];

    function YQ(QQ) {
      var FQ = "bruteForce" + (QQ ? "Full" : "Partial"),
        LQ = [],
        DQ = bQ.slice();
      QQ || DQ.splice(3, 0, qQ);
      var kQ = ["function " + FQ + "(" + DQ.join() + "){"];

      function vQ(FQ, qQ) {
        var DQ = function(QQ, FQ, LQ) {
          var qQ = "bruteForce" + (QQ ? "Red" : "Blue") + (FQ ? "Flip" : "") + (LQ ? "Full" : ""),
            DQ = ["function ", qQ, "(", bQ.join(), "){", "var ", oQ, "=2*", wQ, ";"],
            kQ = "for(var i=rs,rp=es*rs;i<re;++i,rp+=es){var x0=rb[ax+rp],x1=rb[ax+rp+d],xi=ri[i];",
            vQ = "for(var j=bs,bp=es*bs;j<be;++j,bp+=es){var y0=bb[ax+bp]," + (LQ ? "y1=bb[ax+bp+d]," : "") + "yi=bi[j];";
          return QQ ? DQ.push(kQ, "Q", ":", vQ) : DQ.push(vQ, "Q", ":", kQ), LQ ? DQ.push("if(y1<x0||x1<y0)continue;") : FQ ? DQ.push("if(y0<=x0||x1<y0)continue;") : DQ.push("if(y0<x0||x1<y0)continue;"), DQ.push("for(var k=ax+1;k<d;++k){var r0=rb[k+rp],r1=rb[k+d+rp],b0=bb[k+bp],b1=bb[k+d+bp];if(r1<b0||b1<r0)continue Q;}var rv=vv("), FQ ? DQ.push("yi,xi") : DQ.push("xi,yi"), DQ.push(");if(rv!==void 0)return rv;}}}"), {
            name: qQ,
            code: DQ.join("")
          }
        }(FQ, qQ, QQ);
        LQ.push(DQ.code), kQ.push("return " + DQ.name + "(" + bQ.join() + ");")
      }
      kQ.push("if(re-rs>be-bs){"), QQ ? (vQ(!0, !1), kQ.push("}else{"), vQ(!1, !1)) : (kQ.push("if(fp){"), vQ(!0, !0), kQ.push("}else{"), vQ(!0, !1), kQ.push("}}else{if(fp){"), vQ(!1, !0), kQ.push("}else{"), vQ(!1, !1), kQ.push("}")), kQ.push("}}return " + FQ);
      var mQ = LQ.join("") + kQ.join("");
      return new Function(mQ)()
    }
    FQ.partial = YQ(!1), FQ.full = YQ(!0)
  },
  37856: (QQ, FQ, wQ) => {
    QQ.exports = function(QQ, FQ, wQ, oQ, uQ, OQ, sQ, rQ, IQ) {
      ! function(QQ, FQ) {
        var wQ = 8 * qQ.log2(FQ + 1) * (QQ + 1) | 0,
          oQ = qQ.nextPow2(pQ * wQ);
        CQ.length < oQ && (LQ.free(CQ), CQ = LQ.mallocInt32(oQ));
        var DQ = qQ.nextPow2(cQ * wQ);
        SQ.length < DQ && (LQ.free(SQ), SQ = LQ.mallocDouble(DQ))
      }(QQ, oQ + sQ);
      var UQ, NQ = 0,
        TQ = 2 * QQ;
      iQ(NQ++, 0, 0, oQ, 0, sQ, wQ ? 16 : 0, -1 / 0, 1 / 0), wQ || iQ(NQ++, 0, 0, sQ, 0, oQ, 1, -1 / 0, 1 / 0);
      for (; NQ > 0;) {
        var KQ = (NQ -= 1) * pQ,
          zQ = CQ[KQ],
          lQ = CQ[KQ + 1],
          jQ = CQ[KQ + 2],
          aQ = CQ[KQ + 3],
          XQ = CQ[KQ + 4],
          fQ = CQ[KQ + 5],
          VQ = NQ * cQ,
          hQ = SQ[VQ],
          JQ = SQ[VQ + 1],
          EQ = 1 & fQ,
          nQ = !!(16 & fQ),
          gQ = uQ,
          PQ = OQ,
          ZQ = rQ,
          yQ = IQ;
        if (EQ && (gQ = rQ, PQ = IQ, ZQ = uQ, yQ = OQ), !(2 & fQ && lQ >= (jQ = tQ(QQ, zQ, lQ, jQ, gQ, PQ, JQ))) && !(4 & fQ && (lQ = eQ(QQ, zQ, lQ, jQ, gQ, PQ, hQ)) >= jQ)) {
          var BQ = jQ - lQ,
            dQ = XQ - aQ;
          if (nQ) {
            if (QQ * BQ * (BQ + dQ) < YQ) {
              if (void 0 !== (UQ = vQ.scanComplete(QQ, zQ, FQ, lQ, jQ, gQ, PQ, aQ, XQ, ZQ, yQ))) return UQ;
              continue
            }
          } else {
            if (QQ * Math.min(BQ, dQ) < HQ) {
              if (void 0 !== (UQ = DQ(QQ, zQ, FQ, EQ, lQ, jQ, gQ, PQ, aQ, XQ, ZQ, yQ))) return UQ;
              continue
            }
            if (QQ * BQ * dQ < bQ) {
              if (void 0 !== (UQ = vQ.scanBipartite(QQ, zQ, FQ, EQ, lQ, jQ, gQ, PQ, aQ, XQ, ZQ, yQ))) return UQ;
              continue
            }
          }
          var QF = xQ(QQ, zQ, lQ, jQ, gQ, PQ, hQ, JQ);
          if (lQ < QF)
            if (QQ * (QF - lQ) < HQ) {
              if (void 0 !== (UQ = kQ(QQ, zQ + 1, FQ, lQ, QF, gQ, PQ, aQ, XQ, ZQ, yQ))) return UQ
            } else if (zQ === QQ - 2) {
            if (void 0 !== (UQ = EQ ? vQ.sweepBipartite(QQ, FQ, aQ, XQ, ZQ, yQ, lQ, QF, gQ, PQ) : vQ.sweepBipartite(QQ, FQ, lQ, QF, gQ, PQ, aQ, XQ, ZQ, yQ))) return UQ
          } else iQ(NQ++, zQ + 1, lQ, QF, aQ, XQ, EQ, -1 / 0, 1 / 0), iQ(NQ++, zQ + 1, aQ, XQ, lQ, QF, 1 ^ EQ, -1 / 0, 1 / 0);
          if (QF < jQ) {
            var FF = mQ(QQ, zQ, aQ, XQ, ZQ, yQ),
              wF = ZQ[TQ * FF + zQ],
              LF = AQ(QQ, zQ, FF, XQ, ZQ, yQ, wF);
            if (LF < XQ && iQ(NQ++, zQ, QF, jQ, LF, XQ, (4 | EQ) + (nQ ? 16 : 0), wF, JQ), aQ < FF && iQ(NQ++, zQ, QF, jQ, aQ, FF, (2 | EQ) + (nQ ? 16 : 0), hQ, wF), FF + 1 === LF) {
              if (void 0 !== (UQ = nQ ? RQ(QQ, zQ, FQ, QF, jQ, gQ, PQ, FF, ZQ, yQ[FF]) : WQ(QQ, zQ, FQ, EQ, QF, jQ, gQ, PQ, FF, ZQ, yQ[FF]))) return UQ
            } else if (FF < LF) {
              var qF;
              if (nQ) {
                if (QF < (qF = MQ(QQ, zQ, QF, jQ, gQ, PQ, wF))) {
                  var oF = AQ(QQ, zQ, QF, qF, gQ, PQ, wF);
                  if (zQ === QQ - 2) {
                    if (QF < oF && void 0 !== (UQ = vQ.sweepComplete(QQ, FQ, QF, oF, gQ, PQ, FF, LF, ZQ, yQ))) return UQ;
                    if (oF < qF && void 0 !== (UQ = vQ.sweepBipartite(QQ, FQ, oF, qF, gQ, PQ, FF, LF, ZQ, yQ))) return UQ
                  } else QF < oF && iQ(NQ++, zQ + 1, QF, oF, FF, LF, 16, -1 / 0, 1 / 0), oF < qF && (iQ(NQ++, zQ + 1, oF, qF, FF, LF, 0, -1 / 0, 1 / 0), iQ(NQ++, zQ + 1, FF, LF, oF, qF, 1, -1 / 0, 1 / 0))
                }
              } else QF < (qF = EQ ? GQ(QQ, zQ, QF, jQ, gQ, PQ, wF) : MQ(QQ, zQ, QF, jQ, gQ, PQ, wF)) && (zQ === QQ - 2 ? UQ = EQ ? vQ.sweepBipartite(QQ, FQ, FF, LF, ZQ, yQ, QF, qF, gQ, PQ) : vQ.sweepBipartite(QQ, FQ, QF, qF, gQ, PQ, FF, LF, ZQ, yQ) : (iQ(NQ++, zQ + 1, QF, qF, FF, LF, EQ, -1 / 0, 1 / 0), iQ(NQ++, zQ + 1, FF, LF, QF, qF, 1 ^ EQ, -1 / 0, 1 / 0)))
            }
          }
        }
      }
    };
    var LQ = wQ(37824),
      qQ = wQ(37832),
      oQ = wQ(37860),
      DQ = oQ.partial,
      kQ = oQ.full,
      vQ = wQ(37848),
      mQ = wQ(37864),
      uQ = wQ(37868),
      HQ = 128,
      bQ = 1 << 22,
      YQ = 1 << 22,
      xQ = uQ("!(lo>=p0)&&!(p1>=hi)", ["p0", "p1"]),
      AQ = uQ("lo===p0", ["p0"]),
      tQ = uQ("lo<p0", ["p0"]),
      eQ = uQ("hi<=p0", ["p0"]),
      MQ = uQ("lo<=p0&&p0<=hi", ["p0"]),
      GQ = uQ("lo<p0&&p0<=hi", ["p0"]),
      pQ = 6,
      cQ = 2,
      CQ = LQ.mallocInt32(1024),
      SQ = LQ.mallocDouble(1024);

    function iQ(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ) {
      var mQ = pQ * QQ;
      CQ[mQ] = FQ, CQ[mQ + 1] = wQ, CQ[mQ + 2] = LQ, CQ[mQ + 3] = qQ, CQ[mQ + 4] = oQ, CQ[mQ + 5] = DQ;
      var uQ = cQ * QQ;
      SQ[uQ] = kQ, SQ[uQ + 1] = vQ
    }

    function WQ(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ, mQ, uQ) {
      var HQ = 2 * QQ,
        bQ = vQ * HQ,
        YQ = mQ[bQ + FQ];
      QQ: for (var xQ = qQ, AQ = qQ * HQ; xQ < oQ; ++xQ, AQ += HQ) {
        var tQ = DQ[AQ + FQ],
          eQ = DQ[AQ + FQ + QQ];
        if (!(YQ < tQ || eQ < YQ) && (!LQ || YQ !== tQ)) {
          for (var MQ, GQ = kQ[xQ], pQ = FQ + 1; pQ < QQ; ++pQ) {
            tQ = DQ[AQ + pQ], eQ = DQ[AQ + pQ + QQ];
            var cQ = mQ[bQ + pQ],
              CQ = mQ[bQ + pQ + QQ];
            if (eQ < cQ || CQ < tQ) continue QQ
          }
          if (void 0 !== (MQ = LQ ? wQ(uQ, GQ) : wQ(GQ, uQ))) return MQ
        }
      }
    }

    function RQ(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ, mQ) {
      var uQ = 2 * QQ,
        HQ = kQ * uQ,
        bQ = vQ[HQ + FQ];
      QQ: for (var YQ = LQ, xQ = LQ * uQ; YQ < qQ; ++YQ, xQ += uQ) {
        var AQ = DQ[YQ];
        if (AQ !== mQ) {
          var tQ = oQ[xQ + FQ],
            eQ = oQ[xQ + FQ + QQ];
          if (!(bQ < tQ || eQ < bQ)) {
            for (var MQ = FQ + 1; MQ < QQ; ++MQ) {
              tQ = oQ[xQ + MQ], eQ = oQ[xQ + MQ + QQ];
              var GQ = vQ[HQ + MQ],
                pQ = vQ[HQ + MQ + QQ];
              if (eQ < GQ || pQ < tQ) continue QQ
            }
            var cQ = wQ(AQ, mQ);
            if (void 0 !== cQ) return cQ
          }
        }
      }
    }
  },
  37864: (QQ, FQ, wQ) => {
    QQ.exports = function(QQ, FQ, wQ, DQ, kQ, vQ) {
      if (DQ <= wQ + 1) return wQ;
      var mQ = wQ,
        uQ = DQ,
        HQ = DQ + wQ >>> 1,
        bQ = 2 * QQ,
        YQ = HQ,
        xQ = kQ[bQ * HQ + FQ];
      for (; mQ < uQ;) {
        if (uQ - mQ < qQ) {
          oQ(QQ, FQ, mQ, uQ, kQ, vQ), xQ = kQ[bQ * HQ + FQ];
          break
        }
        var AQ = uQ - mQ,
          tQ = Math.random() * AQ + mQ | 0,
          eQ = kQ[bQ * tQ + FQ],
          MQ = Math.random() * AQ + mQ | 0,
          GQ = kQ[bQ * MQ + FQ],
          pQ = Math.random() * AQ + mQ | 0,
          cQ = kQ[bQ * pQ + FQ];
        eQ <= GQ ? cQ >= GQ ? (YQ = MQ, xQ = GQ) : eQ >= cQ ? (YQ = tQ, xQ = eQ) : (YQ = pQ, xQ = cQ) : GQ >= cQ ? (YQ = MQ, xQ = GQ) : cQ >= eQ ? (YQ = tQ, xQ = eQ) : (YQ = pQ, xQ = cQ);
        for (var CQ = bQ * (uQ - 1), SQ = bQ * YQ, iQ = 0; iQ < bQ; ++iQ, ++CQ, ++SQ) {
          var WQ = kQ[CQ];
          kQ[CQ] = kQ[SQ], kQ[SQ] = WQ
        }
        var RQ = vQ[uQ - 1];
        vQ[uQ - 1] = vQ[YQ], vQ[YQ] = RQ;
        for (CQ = bQ * (uQ - 1), SQ = bQ * (YQ = LQ(QQ, FQ, mQ, uQ - 1, kQ, vQ, xQ)), iQ = 0; iQ < bQ; ++iQ, ++CQ, ++SQ) {
          WQ = kQ[CQ];
          kQ[CQ] = kQ[SQ], kQ[SQ] = WQ
        }
        RQ = vQ[uQ - 1];
        if (vQ[uQ - 1] = vQ[YQ], vQ[YQ] = RQ, HQ < YQ) {
          for (uQ = YQ - 1; mQ < uQ && kQ[bQ * (uQ - 1) + FQ] === xQ;) uQ -= 1;
          uQ += 1
        } else {
          if (!(YQ < HQ)) break;
          for (mQ = YQ + 1; mQ < uQ && kQ[bQ * mQ + FQ] === xQ;) mQ += 1
        }
      }
      return LQ(QQ, FQ, wQ, HQ, kQ, vQ, kQ[bQ * HQ + FQ])
    };
    var LQ = wQ(37868)("lo<p0", ["p0"]),
      qQ = 8;

    function oQ(QQ, FQ, wQ, LQ, qQ, oQ) {
      for (var DQ = 2 * QQ, kQ = DQ * (wQ + 1) + FQ, vQ = wQ + 1; vQ < LQ; ++vQ, kQ += DQ)
        for (var mQ = qQ[kQ], uQ = vQ, HQ = DQ * (vQ - 1); uQ > wQ && qQ[HQ + FQ] > mQ; --uQ, HQ -= DQ) {
          for (var bQ = HQ, YQ = HQ + DQ, xQ = 0; xQ < DQ; ++xQ, ++bQ, ++YQ) {
            var AQ = qQ[bQ];
            qQ[bQ] = qQ[YQ], qQ[YQ] = AQ
          }
          var tQ = oQ[uQ];
          oQ[uQ] = oQ[uQ - 1], oQ[uQ - 1] = tQ
        }
    }
  },
  37868: QQ => {
    QQ.exports = function(QQ, wQ) {
      var LQ = "abcdef".split("").concat(wQ),
        qQ = [];
      QQ.indexOf("lo") >= 0 && qQ.push("lo=e[k+n]");
      QQ.indexOf("hi") >= 0 && qQ.push("hi=e[k+o]");
      return LQ.push(FQ.replace("_", qQ.join()).replace("$", QQ)), Function.apply(void 0, LQ)
    };
    var FQ = "for(var j=2*a,k=j*c,l=k,m=c,n=b,o=a+b,p=c;d>p;++p,k+=j){var _;if($)if(m===p)m+=1,l+=j;else{for(var s=0;j>s;++s){var t=e[k+s];e[k+s]=e[l],e[l++]=t}var u=f[p];f[p]=f[m],f[m++]=u}}return m"
  },
  37851: QQ => {
    QQ.exports = function(QQ, LQ) {
      LQ <= 4 * FQ ? wQ(0, LQ - 1, QQ) : mQ(0, LQ - 1, QQ)
    };
    var FQ = 32;

    function wQ(QQ, FQ, wQ) {
      for (var LQ = 2 * (QQ + 1), qQ = QQ + 1; qQ <= FQ; ++qQ) {
        for (var oQ = wQ[LQ++], DQ = wQ[LQ++], kQ = qQ, vQ = LQ - 2; kQ-- > QQ;) {
          var mQ = wQ[vQ - 2],
            uQ = wQ[vQ - 1];
          if (mQ < oQ) break;
          if (mQ === oQ && uQ < DQ) break;
          wQ[vQ] = mQ, wQ[vQ + 1] = uQ, vQ -= 2
        }
        wQ[vQ] = oQ, wQ[vQ + 1] = DQ
      }
    }

    function LQ(QQ, FQ, wQ) {
      FQ *= 2;
      var LQ = wQ[QQ *= 2],
        qQ = wQ[QQ + 1];
      wQ[QQ] = wQ[FQ], wQ[QQ + 1] = wQ[FQ + 1], wQ[FQ] = LQ, wQ[FQ + 1] = qQ
    }

    function qQ(QQ, FQ, wQ) {
      FQ *= 2, wQ[QQ *= 2] = wQ[FQ], wQ[QQ + 1] = wQ[FQ + 1]
    }

    function oQ(QQ, FQ, wQ, LQ) {
      FQ *= 2, wQ *= 2;
      var qQ = LQ[QQ *= 2],
        oQ = LQ[QQ + 1];
      LQ[QQ] = LQ[FQ], LQ[QQ + 1] = LQ[FQ + 1], LQ[FQ] = LQ[wQ], LQ[FQ + 1] = LQ[wQ + 1], LQ[wQ] = qQ, LQ[wQ + 1] = oQ
    }

    function DQ(QQ, FQ, wQ, LQ, qQ) {
      FQ *= 2, qQ[QQ *= 2] = qQ[FQ], qQ[FQ] = wQ, qQ[QQ + 1] = qQ[FQ + 1], qQ[FQ + 1] = LQ
    }

    function kQ(QQ, FQ, wQ) {
      FQ *= 2;
      var LQ = wQ[QQ *= 2],
        qQ = wQ[FQ];
      return !(LQ < qQ) && (LQ !== qQ || wQ[QQ + 1] > wQ[FQ + 1])
    }

    function vQ(QQ, FQ, wQ, LQ) {
      var qQ = LQ[QQ *= 2];
      return qQ < FQ || qQ === FQ && LQ[QQ + 1] < wQ
    }

    function mQ(QQ, uQ, HQ) {
      var bQ = (uQ - QQ + 1) / 6 | 0,
        YQ = QQ + bQ,
        xQ = uQ - bQ,
        AQ = QQ + uQ >> 1,
        tQ = AQ - bQ,
        eQ = AQ + bQ,
        MQ = YQ,
        GQ = tQ,
        pQ = AQ,
        cQ = eQ,
        CQ = xQ,
        SQ = QQ + 1,
        iQ = uQ - 1,
        WQ = 0;
      kQ(MQ, GQ, HQ) && (WQ = MQ, MQ = GQ, GQ = WQ), kQ(cQ, CQ, HQ) && (WQ = cQ, cQ = CQ, CQ = WQ), kQ(MQ, pQ, HQ) && (WQ = MQ, MQ = pQ, pQ = WQ), kQ(GQ, pQ, HQ) && (WQ = GQ, GQ = pQ, pQ = WQ), kQ(MQ, cQ, HQ) && (WQ = MQ, MQ = cQ, cQ = WQ), kQ(pQ, cQ, HQ) && (WQ = pQ, pQ = cQ, cQ = WQ), kQ(GQ, CQ, HQ) && (WQ = GQ, GQ = CQ, CQ = WQ), kQ(GQ, pQ, HQ) && (WQ = GQ, GQ = pQ, pQ = WQ), kQ(cQ, CQ, HQ) && (WQ = cQ, cQ = CQ, CQ = WQ);
      for (var RQ = HQ[2 * GQ], OQ = HQ[2 * GQ + 1], sQ = HQ[2 * cQ], rQ = HQ[2 * cQ + 1], IQ = 2 * MQ, UQ = 2 * pQ, NQ = 2 * CQ, TQ = 2 * YQ, KQ = 2 * AQ, zQ = 2 * xQ, lQ = 0; lQ < 2; ++lQ) {
        var jQ = HQ[IQ + lQ],
          aQ = HQ[UQ + lQ],
          XQ = HQ[NQ + lQ];
        HQ[TQ + lQ] = jQ, HQ[KQ + lQ] = aQ, HQ[zQ + lQ] = XQ
      }
      qQ(tQ, QQ, HQ), qQ(eQ, uQ, HQ);
      for (var fQ = SQ; fQ <= iQ; ++fQ)
        if (vQ(fQ, RQ, OQ, HQ)) fQ !== SQ && LQ(fQ, SQ, HQ), ++SQ;
        else if (!vQ(fQ, sQ, rQ, HQ))
        for (;;) {
          if (vQ(iQ, sQ, rQ, HQ)) {
            vQ(iQ, RQ, OQ, HQ) ? (oQ(fQ, SQ, iQ, HQ), ++SQ, --iQ) : (LQ(fQ, iQ, HQ), --iQ);
            break
          }
          if (--iQ < fQ) break
        }
      DQ(QQ, SQ - 1, RQ, OQ, HQ), DQ(uQ, iQ + 1, sQ, rQ, HQ), SQ - 2 - QQ <= FQ ? wQ(QQ, SQ - 2, HQ) : mQ(QQ, SQ - 2, HQ), uQ - (iQ + 2) <= FQ ? wQ(iQ + 2, uQ, HQ) : mQ(iQ + 2, uQ, HQ), iQ - SQ <= FQ ? wQ(SQ, iQ, HQ) : mQ(SQ, iQ, HQ)
    }
  },
  37848: (QQ, FQ, wQ) => {
    QQ.exports = {
      init: function(QQ) {
        var FQ = qQ.nextPow2(QQ);
        vQ.length < FQ && (LQ.free(vQ), vQ = LQ.mallocInt32(FQ));
        mQ.length < FQ && (LQ.free(mQ), mQ = LQ.mallocInt32(FQ));
        uQ.length < FQ && (LQ.free(uQ), uQ = LQ.mallocInt32(FQ));
        HQ.length < FQ && (LQ.free(HQ), HQ = LQ.mallocInt32(FQ));
        bQ.length < FQ && (LQ.free(bQ), bQ = LQ.mallocInt32(FQ));
        YQ.length < FQ && (LQ.free(YQ), YQ = LQ.mallocInt32(FQ));
        var wQ = 8 * FQ;
        xQ.length < wQ && (LQ.free(xQ), xQ = LQ.mallocDouble(wQ))
      },
      sweepBipartite: function(QQ, FQ, wQ, LQ, qQ, kQ, bQ, YQ, eQ, MQ) {
        for (var GQ = 0, pQ = 2 * QQ, cQ = QQ - 1, CQ = pQ - 1, SQ = wQ; SQ < LQ; ++SQ) {
          var iQ = kQ[SQ],
            WQ = pQ * SQ;
          xQ[GQ++] = qQ[WQ + cQ], xQ[GQ++] = -(iQ + 1), xQ[GQ++] = qQ[WQ + CQ], xQ[GQ++] = iQ
        }
        for (SQ = bQ; SQ < YQ; ++SQ) {
          iQ = MQ[SQ] + DQ;
          var RQ = pQ * SQ;
          xQ[GQ++] = eQ[RQ + cQ], xQ[GQ++] = -iQ, xQ[GQ++] = eQ[RQ + CQ], xQ[GQ++] = iQ
        }
        var OQ = GQ >>> 1;
        oQ(xQ, OQ);
        var sQ = 0,
          rQ = 0;
        for (SQ = 0; SQ < OQ; ++SQ) {
          var IQ = 0 | xQ[2 * SQ + 1];
          if (IQ >= DQ) AQ(uQ, HQ, rQ--, IQ = IQ - DQ | 0);
          else if (IQ >= 0) AQ(vQ, mQ, sQ--, IQ);
          else if (IQ <= -DQ) {
            IQ = -IQ - DQ | 0;
            for (var UQ = 0; UQ < sQ; ++UQ) {
              if (void 0 !== (NQ = FQ(vQ[UQ], IQ))) return NQ
            }
            tQ(uQ, HQ, rQ++, IQ)
          } else {
            IQ = -IQ - 1 | 0;
            for (UQ = 0; UQ < rQ; ++UQ) {
              var NQ;
              if (void 0 !== (NQ = FQ(IQ, uQ[UQ]))) return NQ
            }
            tQ(vQ, mQ, sQ++, IQ)
          }
        }
      },
      sweepComplete: function(QQ, FQ, wQ, LQ, qQ, DQ, kQ, eQ, MQ, GQ) {
        for (var pQ = 0, cQ = 2 * QQ, CQ = QQ - 1, SQ = cQ - 1, iQ = wQ; iQ < LQ; ++iQ) {
          var WQ = DQ[iQ] + 1 << 1,
            RQ = cQ * iQ;
          xQ[pQ++] = qQ[RQ + CQ], xQ[pQ++] = -WQ, xQ[pQ++] = qQ[RQ + SQ], xQ[pQ++] = WQ
        }
        for (iQ = kQ; iQ < eQ; ++iQ) {
          WQ = GQ[iQ] + 1 << 1;
          var OQ = cQ * iQ;
          xQ[pQ++] = MQ[OQ + CQ], xQ[pQ++] = 1 | -WQ, xQ[pQ++] = MQ[OQ + SQ], xQ[pQ++] = 1 | WQ
        }
        var sQ = pQ >>> 1;
        oQ(xQ, sQ);
        var rQ = 0,
          IQ = 0,
          UQ = 0;
        for (iQ = 0; iQ < sQ; ++iQ) {
          var NQ = 0 | xQ[2 * iQ + 1],
            TQ = 1 & NQ;
          if (iQ < sQ - 1 && NQ >> 1 === xQ[2 * iQ + 3] >> 1 && (TQ = 2, iQ += 1), NQ < 0) {
            for (var KQ = -(NQ >> 1) - 1, zQ = 0; zQ < UQ; ++zQ) {
              if (void 0 !== (lQ = FQ(bQ[zQ], KQ))) return lQ
            }
            if (0 !== TQ)
              for (zQ = 0; zQ < rQ; ++zQ) {
                if (void 0 !== (lQ = FQ(vQ[zQ], KQ))) return lQ
              }
            if (1 !== TQ)
              for (zQ = 0; zQ < IQ; ++zQ) {
                var lQ;
                if (void 0 !== (lQ = FQ(uQ[zQ], KQ))) return lQ
              }
            0 === TQ ? tQ(vQ, mQ, rQ++, KQ) : 1 === TQ ? tQ(uQ, HQ, IQ++, KQ) : 2 === TQ && tQ(bQ, YQ, UQ++, KQ)
          } else {
            KQ = (NQ >> 1) - 1;
            0 === TQ ? AQ(vQ, mQ, rQ--, KQ) : 1 === TQ ? AQ(uQ, HQ, IQ--, KQ) : 2 === TQ && AQ(bQ, YQ, UQ--, KQ)
          }
        }
      },
      scanBipartite: function(QQ, FQ, wQ, LQ, qQ, kQ, uQ, HQ, bQ, YQ, eQ, MQ) {
        var GQ = 0,
          pQ = 2 * QQ,
          cQ = FQ,
          CQ = FQ + QQ,
          SQ = 1,
          iQ = 1;
        LQ ? iQ = DQ : SQ = DQ;
        for (var WQ = qQ; WQ < kQ; ++WQ) {
          var RQ = WQ + SQ,
            OQ = pQ * WQ;
          xQ[GQ++] = uQ[OQ + cQ], xQ[GQ++] = -RQ, xQ[GQ++] = uQ[OQ + CQ], xQ[GQ++] = RQ
        }
        for (WQ = bQ; WQ < YQ; ++WQ) {
          RQ = WQ + iQ;
          var sQ = pQ * WQ;
          xQ[GQ++] = eQ[sQ + cQ], xQ[GQ++] = -RQ
        }
        var rQ = GQ >>> 1;
        oQ(xQ, rQ);
        var IQ = 0;
        for (WQ = 0; WQ < rQ; ++WQ) {
          var UQ = 0 | xQ[2 * WQ + 1];
          if (UQ < 0) {
            var NQ = !1;
            if ((RQ = -UQ) >= DQ ? (NQ = !LQ, RQ -= DQ) : (NQ = !!LQ, RQ -= 1), NQ) tQ(vQ, mQ, IQ++, RQ);
            else {
              var TQ = MQ[RQ],
                KQ = pQ * RQ,
                zQ = eQ[KQ + FQ + 1],
                lQ = eQ[KQ + FQ + 1 + QQ];
              QQ: for (var jQ = 0; jQ < IQ; ++jQ) {
                var aQ = vQ[jQ],
                  XQ = pQ * aQ;
                if (!(lQ < uQ[XQ + FQ + 1] || uQ[XQ + FQ + 1 + QQ] < zQ)) {
                  for (var fQ = FQ + 2; fQ < QQ; ++fQ)
                    if (eQ[KQ + fQ + QQ] < uQ[XQ + fQ] || uQ[XQ + fQ + QQ] < eQ[KQ + fQ]) continue QQ;
                  var VQ, hQ = HQ[aQ];
                  if (void 0 !== (VQ = LQ ? wQ(TQ, hQ) : wQ(hQ, TQ))) return VQ
                }
              }
            }
          } else AQ(vQ, mQ, IQ--, UQ - SQ)
        }
      },
      scanComplete: function(QQ, FQ, wQ, LQ, qQ, kQ, mQ, uQ, HQ, bQ, YQ) {
        for (var AQ = 0, tQ = 2 * QQ, eQ = FQ, MQ = FQ + QQ, GQ = LQ; GQ < qQ; ++GQ) {
          var pQ = GQ + DQ,
            cQ = tQ * GQ;
          xQ[AQ++] = kQ[cQ + eQ], xQ[AQ++] = -pQ, xQ[AQ++] = kQ[cQ + MQ], xQ[AQ++] = pQ
        }
        for (GQ = uQ; GQ < HQ; ++GQ) {
          pQ = GQ + 1;
          var CQ = tQ * GQ;
          xQ[AQ++] = bQ[CQ + eQ], xQ[AQ++] = -pQ
        }
        var SQ = AQ >>> 1;
        oQ(xQ, SQ);
        var iQ = 0;
        for (GQ = 0; GQ < SQ; ++GQ) {
          var WQ = 0 | xQ[2 * GQ + 1];
          if (WQ < 0) {
            if ((pQ = -WQ) >= DQ) vQ[iQ++] = pQ - DQ;
            else {
              var RQ = YQ[pQ -= 1],
                OQ = tQ * pQ,
                sQ = bQ[OQ + FQ + 1],
                rQ = bQ[OQ + FQ + 1 + QQ];
              QQ: for (var IQ = 0; IQ < iQ; ++IQ) {
                var UQ = vQ[IQ],
                  NQ = mQ[UQ];
                if (NQ === RQ) break;
                var TQ = tQ * UQ;
                if (!(rQ < kQ[TQ + FQ + 1] || kQ[TQ + FQ + 1 + QQ] < sQ)) {
                  for (var KQ = FQ + 2; KQ < QQ; ++KQ)
                    if (bQ[OQ + KQ + QQ] < kQ[TQ + KQ] || kQ[TQ + KQ + QQ] < bQ[OQ + KQ]) continue QQ;
                  var zQ = wQ(NQ, RQ);
                  if (void 0 !== zQ) return zQ
                }
              }
            }
          } else {
            for (pQ = WQ - DQ, IQ = iQ - 1; IQ >= 0; --IQ)
              if (vQ[IQ] === pQ) {
                for (KQ = IQ + 1; KQ < iQ; ++KQ) vQ[KQ - 1] = vQ[KQ];
                break
              }-- iQ
          }
        }
      }
    };
    var LQ = wQ(37824),
      qQ = wQ(37832),
      oQ = wQ(37851),
      DQ = 1 << 28,
      kQ = 1024,
      vQ = LQ.mallocInt32(kQ),
      mQ = LQ.mallocInt32(kQ),
      uQ = LQ.mallocInt32(kQ),
      HQ = LQ.mallocInt32(kQ),
      bQ = LQ.mallocInt32(kQ),
      YQ = LQ.mallocInt32(kQ),
      xQ = LQ.mallocDouble(8192);

    function AQ(QQ, FQ, wQ, LQ) {
      var qQ = FQ[LQ],
        oQ = QQ[wQ - 1];
      QQ[qQ] = oQ, FQ[oQ] = qQ
    }

    function tQ(QQ, FQ, wQ, LQ) {
      QQ[wQ] = LQ, FQ[LQ] = wQ
    }
  },
  37838: QQ => {
    function FQ(QQ, wQ, LQ) {
      var qQ = 0 | QQ[LQ];
      if (qQ <= 0) return [];
      var oQ, DQ = new Array(qQ);
      if (LQ === QQ.length - 1)
        for (oQ = 0; oQ < qQ; ++oQ) DQ[oQ] = wQ;
      else
        for (oQ = 0; oQ < qQ; ++oQ) DQ[oQ] = FQ(QQ, wQ, LQ + 1);
      return DQ
    }
    QQ.exports = function(QQ, wQ) {
      switch ("undefined" === typeof wQ && (wQ = 0), typeof QQ) {
        case "number":
          if (QQ > 0) return function(QQ, FQ) {
            var wQ, LQ;
            for (wQ = new Array(QQ), LQ = 0; LQ < QQ; ++LQ) wQ[LQ] = FQ;
            return wQ
          }(0 | QQ, wQ);
          break;
        case "object":
          if ("number" === typeof QQ.length) return FQ(QQ, wQ, 0)
      }
      return []
    }
  },
  37787: (QQ, FQ, wQ) => {
    QQ.exports = function() {
      var QQ = this;
      this.components = {}, this.comps = this.components;
      var FQ = this.components,
        wQ = 1,
        qQ = {},
        oQ = [],
        DQ = [],
        kQ = {
          timeout: !1,
          removals: [],
          multiComps: []
        };

      function vQ(QQ, wQ) {
        var LQ = FQ[wQ],
          oQ = qQ[wQ],
          DQ = oQ.hash[QQ];
        DQ && (oQ.remove(QQ), LQ.rU && (LQ.multi ? (DQ.forEach((FQ => {
          FQ && LQ.rU(QQ, FQ)
        })), DQ.length = 0) : LQ.rU(QQ, DQ)), kQ.removals.push(oQ), mQ())
      }

      function mQ() {
        kQ.timeout || (kQ.timeout = !0, setTimeout(uQ, 1))
      }

      function uQ() {
        kQ.timeout = !1, HQ()
      }

      function HQ() {
        kQ.multiComps.length && function(QQ) {
          for (var FQ = 0; FQ < QQ.length; FQ++) {
            var {
              entID: wQ,
              data: LQ
            } = QQ[FQ], qQ = LQ.hash[wQ];
            if (qQ) {
              for (var oQ = 0; oQ < qQ.length; oQ++) qQ[oQ] || (qQ.splice(oQ, 1), oQ--);
              0 === qQ.length && (LQ.remove(wQ), kQ.removals.push(LQ))
            }
          }
          QQ.length = 0
        }(kQ.multiComps), kQ.removals.length && function(QQ) {
          for (var FQ = 0; FQ < QQ.length; FQ++) {
            QQ[FQ].flush()
          }
          QQ.length = 0
        }(kQ.removals)
      }
      this.AA = qQ, this._systems = oQ, this._renderSystems = DQ, this.XE = function(FQ) {
        var LQ = wQ++;
        return Array.isArray(FQ) && FQ.forEach((FQ => QQ.pT(LQ, FQ))), LQ
      }, this.deleteEntity = function(FQ) {
        return Object.keys(qQ).forEach((QQ => {
          qQ[QQ].hash[FQ] && vQ(FQ, QQ)
        })), QQ
      }, this.wwQ = function(QQ) {
        if (!QQ) throw new Error("Missing component definition");
        var wQ = QQ.name;
        if (!wQ) throw new Error("Component definition must have a name property.");
        if ("string" !== typeof wQ) throw new Error("Component name must be a string.");
        if ("" === wQ) throw new Error("Component name must be a non-empty string.");
        if (qQ[wQ]) throw new Error(`Component ${wQ} already exists.`);
        var kQ = {};
        return kQ.name = wQ, kQ.multi = !!QQ.multi, kQ.order = isNaN(QQ.order) ? 99 : QQ.order, kQ.stateConstructor = QQ.stateConstructor || null, kQ.state = QQ.state || {}, kQ.uC = QQ.uC || null, kQ.rU = QQ.rU || null, kQ.system = QQ.system || null, kQ.YC = QQ.YC || null, FQ[wQ] = kQ, qQ[wQ] = new LQ, qQ[wQ]._pendingMultiCleanup = !1, qQ[wQ]._multiCleanupIDs = kQ.multi ? [] : null, kQ.system && (oQ.push(wQ), oQ.sort(((QQ, wQ) => FQ[QQ].order - FQ[wQ].order))), kQ.YC && (DQ.push(wQ), DQ.sort(((QQ, wQ) => FQ[QQ].order - FQ[wQ].order))), wQ
      }, this.overwriteComponent = function(QQ, wQ) {
        var LQ = FQ[QQ];
        if (!LQ) throw new Error(`Unknown component: ${QQ}`);
        if (!wQ) throw new Error("Missing component definition");
        if (LQ.name !== wQ.name) throw new Error("Overwriting component must use the same name property.");
        var kQ = {};
        kQ.name = QQ, kQ.multi = !!wQ.multi, kQ.order = isNaN(wQ.order) ? 99 : wQ.order, kQ.state = wQ.state || {}, kQ.uC = wQ.uC || null, kQ.rU = wQ.rU || null, kQ.system = wQ.system || null, kQ.YC = wQ.YC || null, FQ[QQ] = kQ, qQ[QQ]._pendingMultiCleanup = !1, qQ[QQ]._multiCleanupIDs = kQ.multi ? [] : null;
        var vQ = oQ.indexOf(QQ);
        kQ.system && vQ < 0 && oQ.push(QQ), !kQ.system && vQ >= 0 && oQ.splice(vQ, 1), oQ.sort(((QQ, wQ) => FQ[QQ].order - FQ[wQ].order));
        var mQ = DQ.indexOf(QQ);
        kQ.YC && mQ < 0 && DQ.push(QQ), !kQ.YC && mQ >= 0 && DQ.splice(mQ, 1), DQ.sort(((QQ, wQ) => FQ[QQ].order - FQ[wQ].order));
        var uQ = kQ.state;
        return this.qT(QQ).forEach((QQ => {
          for (var FQ in uQ) FQ in QQ || (QQ[FQ] = uQ[FQ]);
          kQ.uC && kQ.uC(QQ.eT, QQ)
        })), QQ
      }, this.deleteComponent = function(wQ) {
        var LQ = qQ[wQ];
        if (!LQ) throw new Error(`Unknown component: ${wQ}`);
        LQ.flush(), LQ.list.forEach((QQ => {
          QQ && vQ(QQ.eT || QQ[0].eT, wQ)
        }));
        var kQ = oQ.indexOf(wQ),
          mQ = DQ.indexOf(wQ);
        return kQ > -1 && oQ.splice(kQ, 1), mQ > -1 && DQ.splice(mQ, 1), qQ[wQ].dispose(), delete qQ[wQ], delete FQ[wQ], QQ
      }, this.pT = function(QQ, wQ, LQ) {
        var oQ, DQ = FQ[wQ],
          kQ = qQ[wQ];
        if (!kQ) throw new Error(`Unknown component: ${wQ}.`);
        if (kQ.hash[QQ] && !DQ.multi) throw new Error(`Entity ${QQ} already has component: ${wQ}.`);
        if (DQ.stateConstructor) {
          if (!(oQ = new DQ.stateConstructor).hasOwnProperty("eT")) throw new Error(`Component ${DQ.name} stateConstructor type does not have property __id`);
          Object.assign(oQ, DQ.state, LQ)
        } else oQ = {
          eT: QQ,
          ...DQ.state,
          ...LQ
        };
        if (oQ.eT = QQ, DQ.multi) {
          var vQ = kQ.hash[QQ];
          vQ || (vQ = [], kQ.add(QQ, vQ)), vQ.push(oQ)
        } else kQ.add(QQ, oQ);
        return DQ.uC && DQ.uC(QQ, oQ), this
      }, this.dQQ = function(QQ, FQ) {
        var wQ = qQ[FQ];
        if (!wQ) throw new Error(`Unknown component: ${FQ}.`);
        return !!wQ.hash[QQ]
      }, this.lT = function(FQ, wQ) {
        if (!qQ[wQ]) throw new Error(`Unknown component: ${wQ}.`);
        return vQ(FQ, wQ), QQ
      }, this.getState = function(QQ, FQ) {
        var wQ = qQ[FQ];
        if (!wQ) throw new Error(`Unknown component: ${FQ}.`);
        return wQ.hash[QQ]
      }, this.qT = function(QQ) {
        var FQ = qQ[QQ];
        if (!FQ) throw new Error(`Unknown component: ${QQ}.`);
        return HQ(), FQ.list
      }, this.KFQ = function(QQ) {
        if (!qQ[QQ]) throw new Error(`Unknown component: ${QQ}.`);
        var FQ = qQ[QQ].hash;
        return QQ => FQ[QQ]
      }, this.fFQ = function(QQ) {
        if (!qQ[QQ]) throw new Error(`Unknown component: ${QQ}.`);
        var FQ = qQ[QQ].hash;
        return QQ => !!FQ[QQ]
      }, this.fH = function(wQ) {
        HQ();
        for (var LQ = 0; LQ < oQ.length; LQ++) {
          var DQ = oQ[LQ],
            kQ = FQ[DQ],
            vQ = qQ[DQ];
          kQ.system(wQ, vQ.list), HQ()
        }
        return QQ
      }, this.render = function(wQ) {
        HQ();
        for (var LQ = 0; LQ < DQ.length; LQ++) {
          var oQ = DQ[LQ],
            kQ = FQ[oQ],
            vQ = qQ[oQ];
          kQ.YC(wQ, vQ.list), HQ()
        }
        return QQ
      }, this.removeMultiComponent = function(wQ, LQ, oQ) {
        var DQ = FQ[LQ],
          vQ = qQ[LQ];
        if (!vQ) throw new Error(`Unknown component: ${LQ}.`);
        if (!DQ.multi) throw new Error("removeMultiComponent called on non-multi component");
        return function(QQ, FQ, wQ, LQ) {
          var qQ = wQ.hash[QQ];
          if (qQ) {
            var oQ = qQ[LQ];
            oQ && (qQ[LQ] = null, FQ.rU && FQ.rU(QQ, oQ), kQ.multiComps.push({
              entID: QQ,
              data: wQ
            }), mQ())
          }
        }(wQ, DQ, vQ, oQ), QQ
      }
    };
    var LQ = wQ(37790)
  },
  37790: QQ => {
    function FQ(QQ, FQ) {
      var wQ = QQ._map[FQ];
      if (delete QQ.hash[FQ], delete QQ._map[FQ], wQ === QQ.list.length - 1) QQ.list.pop(), QQ._idList.pop();
      else {
        var LQ = QQ.list.pop();
        QQ.list[wQ] = LQ;
        var qQ = QQ._idList.pop();
        QQ._idList[wQ] = qQ, QQ._map[qQ] = wQ
      }
    }
    QQ.exports = class {
      constructor() {
        this.list = [], this.hash = {}, this._map = {}, this._idList = [], this._pendingRemovals = []
      }
      add(QQ, FQ) {
        if ("number" === typeof this._map[QQ]) {
          var wQ = this._map[QQ];
          this.hash[QQ] = FQ, this.list[wQ] = FQ, this._idList[wQ] = QQ
        } else this._map[QQ] = this.list.length, this.hash[QQ] = FQ, this.list.push(FQ), this._idList.push(QQ)
      }
      remove(QQ) {
        var FQ = this._map[QQ];
        this.hash[QQ] = null, this.list[FQ] = null, this._pendingRemovals.push(QQ)
      }
      dispose() {
        this.list = null, this.hash = null, this._map = null, this._idList = null, this._pendingRemovals.length = 0
      }
      flush() {
        for (var QQ = 0; QQ < this._pendingRemovals.length; QQ++) {
          var wQ = this._pendingRemovals[QQ];
          null === this.hash[wQ] && FQ(this, wQ)
        }
        this._pendingRemovals.length = 0
      }
    }
  },
  37579: (QQ, FQ, wQ) => {
    QQ = wQ.nmd(QQ);
    var LQ = "__lodash_hash_undefined__",
      qQ = 9007199254740991,
      oQ = "[object Arguments]",
      DQ = "[object Boolean]",
      kQ = "[object Date]",
      vQ = "[object Function]",
      mQ = "[object GeneratorFunction]",
      uQ = "[object Map]",
      HQ = "[object Number]",
      bQ = "[object Object]",
      YQ = "[object Promise]",
      xQ = "[object RegExp]",
      AQ = "[object Set]",
      tQ = "[object String]",
      eQ = "[object Symbol]",
      MQ = "[object WeakMap]",
      GQ = "[object ArrayBuffer]",
      pQ = "[object DataView]",
      cQ = "[object Float32Array]",
      CQ = "[object Float64Array]",
      SQ = "[object Int8Array]",
      iQ = "[object Int16Array]",
      WQ = "[object Int32Array]",
      RQ = "[object Uint8Array]",
      OQ = "[object Uint8ClampedArray]",
      sQ = "[object Uint16Array]",
      rQ = "[object Uint32Array]",
      IQ = /\w*$/,
      UQ = /^\[object .+?Constructor\]$/,
      NQ = /^(?:0|[1-9]\d*)$/,
      TQ = {};
    TQ[oQ] = TQ["[object Array]"] = TQ[GQ] = TQ[pQ] = TQ[DQ] = TQ[kQ] = TQ[cQ] = TQ[CQ] = TQ[SQ] = TQ[iQ] = TQ[WQ] = TQ[uQ] = TQ[HQ] = TQ[bQ] = TQ[xQ] = TQ[AQ] = TQ[tQ] = TQ[eQ] = TQ[RQ] = TQ[OQ] = TQ[sQ] = TQ[rQ] = !0, TQ["[object Error]"] = TQ[vQ] = TQ[MQ] = !1;
    var KQ = "object" == typeof wQ.g && wQ.g && wQ.g.Object === Object && wQ.g,
      zQ = "object" == typeof self && self && self.Object === Object && self,
      lQ = KQ || zQ || Function("return this")(),
      jQ = FQ && !FQ.nodeType && FQ,
      aQ = jQ && QQ && !QQ.nodeType && QQ,
      XQ = aQ && aQ.exports === jQ;

    function fQ(QQ, FQ) {
      return QQ.set(FQ[0], FQ[1]), QQ
    }

    function VQ(QQ, FQ) {
      return QQ.add(FQ), QQ
    }

    function hQ(QQ, FQ, wQ, LQ) {
      var qQ = -1,
        oQ = QQ ? QQ.length : 0;
      for (LQ && oQ && (wQ = QQ[++qQ]); ++qQ < oQ;) wQ = FQ(wQ, QQ[qQ], qQ, QQ);
      return wQ
    }

    function JQ(QQ) {
      var FQ = !1;
      if (null != QQ && "function" != typeof QQ.toString) try {
        FQ = !!(QQ + "")
      } catch (wQ) {}
      return FQ
    }

    function EQ(QQ) {
      var FQ = -1,
        wQ = Array(QQ.size);
      return QQ.forEach((function(QQ, LQ) {
        wQ[++FQ] = [LQ, QQ]
      })), wQ
    }

    function nQ(QQ, FQ) {
      return function(wQ) {
        return QQ(FQ(wQ))
      }
    }

    function gQ(QQ) {
      var FQ = -1,
        wQ = Array(QQ.size);
      return QQ.forEach((function(QQ) {
        wQ[++FQ] = QQ
      })), wQ
    }
    var PQ = Array.prototype,
      ZQ = Function.prototype,
      yQ = Object.prototype,
      BQ = lQ["__core-js_shared__"],
      dQ = function() {
        var QQ = /[^.]+$/.exec(BQ && BQ.keys && BQ.keys.IE_PROTO || "");
        return QQ ? "Symbol(src)_1." + QQ : ""
      }(),
      QF = ZQ.toString,
      FF = yQ.hasOwnProperty,
      wF = yQ.toString,
      LF = RegExp("^" + QF.call(FF).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
      qF = XQ ? lQ.Dx : void 0,
      oF = lQ.Symbol,
      DF = lQ.Uint8Array,
      kF = nQ(Object.getPrototypeOf, Object),
      vF = Object.create,
      mF = yQ.propertyIsEnumerable,
      uF = PQ.splice,
      HF = Object.getOwnPropertySymbols,
      bF = qF ? qF.isBuffer : void 0,
      YF = nQ(Object.keys, Object),
      xF = XF(lQ, "DataView"),
      AF = XF(lQ, "Map"),
      tF = XF(lQ, "Promise"),
      eF = XF(lQ, "Set"),
      MF = XF(lQ, "WeakMap"),
      GF = XF(Object, "create"),
      pF = EF(xF),
      cF = EF(AF),
      CF = EF(tF),
      SF = EF(eF),
      iF = EF(MF),
      WF = oF ? oF.prototype : void 0,
      RF = WF ? WF.valueOf : void 0;

    function OF(QQ) {
      var FQ = -1,
        wQ = QQ ? QQ.length : 0;
      for (this.clear(); ++FQ < wQ;) {
        var LQ = QQ[FQ];
        this.set(LQ[0], LQ[1])
      }
    }

    function sF(QQ) {
      var FQ = -1,
        wQ = QQ ? QQ.length : 0;
      for (this.clear(); ++FQ < wQ;) {
        var LQ = QQ[FQ];
        this.set(LQ[0], LQ[1])
      }
    }

    function rF(QQ) {
      var FQ = -1,
        wQ = QQ ? QQ.length : 0;
      for (this.clear(); ++FQ < wQ;) {
        var LQ = QQ[FQ];
        this.set(LQ[0], LQ[1])
      }
    }

    function IF(QQ) {
      this.__data__ = new sF(QQ)
    }

    function UF(QQ, FQ) {
      var wQ = gF(QQ) || function(QQ) {
          return function(QQ) {
            return function(QQ) {
              return !!QQ && "object" == typeof QQ
            }(QQ) && PF(QQ)
          }(QQ) && FF.call(QQ, "callee") && (!mF.call(QQ, "callee") || wF.call(QQ) == oQ)
        }(QQ) ? function(QQ, FQ) {
          for (var wQ = -1, LQ = Array(QQ); ++wQ < QQ;) LQ[wQ] = FQ(wQ);
          return LQ
        }(QQ.length, String) : [],
        LQ = wQ.length,
        qQ = !!LQ;
      for (var DQ in QQ) !FQ && !FF.call(QQ, DQ) || qQ && ("length" == DQ || hF(DQ, LQ)) || wQ.push(DQ);
      return wQ
    }

    function NF(QQ, FQ, wQ) {
      var LQ = QQ[FQ];
      FF.call(QQ, FQ) && nF(LQ, wQ) && (void 0 !== wQ || FQ in QQ) || (QQ[FQ] = wQ)
    }

    function TF(QQ, FQ) {
      for (var wQ = QQ.length; wQ--;)
        if (nF(QQ[wQ][0], FQ)) return wQ;
      return -1
    }

    function KF(QQ, FQ, wQ, LQ, qQ, YQ, MQ) {
      var UQ;
      if (LQ && (UQ = YQ ? LQ(QQ, qQ, YQ, MQ) : LQ(QQ)), void 0 !== UQ) return UQ;
      if (!BF(QQ)) return QQ;
      var NQ = gF(QQ);
      if (NQ) {
        if (UQ = function(QQ) {
            var FQ = QQ.length,
              wQ = QQ.constructor(FQ);
            FQ && "string" == typeof QQ[0] && FF.call(QQ, "index") && (wQ.index = QQ.index, wQ.input = QQ.input);
            return wQ
          }(QQ), !FQ) return function(QQ, FQ) {
          var wQ = -1,
            LQ = QQ.length;
          FQ || (FQ = Array(LQ));
          for (; ++wQ < LQ;) FQ[wQ] = QQ[wQ];
          return FQ
        }(QQ, UQ)
      } else {
        var KQ = VF(QQ),
          zQ = KQ == vQ || KQ == mQ;
        if (ZF(QQ)) return function(QQ, FQ) {
          if (FQ) return QQ.slice();
          var wQ = new QQ.constructor(QQ.length);
          return QQ.copy(wQ), wQ
        }(QQ, FQ);
        if (KQ == bQ || KQ == oQ || zQ && !YQ) {
          if (JQ(QQ)) return YQ ? QQ : {};
          if (UQ = function(QQ) {
              return "function" != typeof QQ.constructor || JF(QQ) ? {} : (FQ = kF(QQ), BF(FQ) ? vF(FQ) : {});
              var FQ
            }(zQ ? {} : QQ), !FQ) return function(QQ, FQ) {
            return jF(QQ, fF(QQ), FQ)
          }(QQ, function(QQ, FQ) {
            return QQ && jF(FQ, dF(FQ), QQ)
          }(UQ, QQ))
        } else {
          if (!TQ[KQ]) return YQ ? QQ : {};
          UQ = function(QQ, FQ, wQ, LQ) {
            var qQ = QQ.constructor;
            switch (FQ) {
              case GQ:
                return lF(QQ);
              case DQ:
              case kQ:
                return new qQ(+QQ);
              case pQ:
                return function(QQ, FQ) {
                  var wQ = FQ ? lF(QQ.buffer) : QQ.buffer;
                  return new QQ.constructor(wQ, QQ.byteOffset, QQ.byteLength)
                }(QQ, LQ);
              case cQ:
              case CQ:
              case SQ:
              case iQ:
              case WQ:
              case RQ:
              case OQ:
              case sQ:
              case rQ:
                return function(QQ, FQ) {
                  var wQ = FQ ? lF(QQ.buffer) : QQ.buffer;
                  return new QQ.constructor(wQ, QQ.byteOffset, QQ.length)
                }(QQ, LQ);
              case uQ:
                return function(QQ, FQ, wQ) {
                  var LQ = FQ ? wQ(EQ(QQ), !0) : EQ(QQ);
                  return hQ(LQ, fQ, new QQ.constructor)
                }(QQ, LQ, wQ);
              case HQ:
              case tQ:
                return new qQ(QQ);
              case xQ:
                return function(QQ) {
                  var FQ = new QQ.constructor(QQ.source, IQ.exec(QQ));
                  return FQ.lastIndex = QQ.lastIndex, FQ
                }(QQ);
              case AQ:
                return function(QQ, FQ, wQ) {
                  var LQ = FQ ? wQ(gQ(QQ), !0) : gQ(QQ);
                  return hQ(LQ, VQ, new QQ.constructor)
                }(QQ, LQ, wQ);
              case eQ:
                return oQ = QQ, RF ? Object(RF.call(oQ)) : {}
            }
            var oQ
          }(QQ, KQ, KF, FQ)
        }
      }
      MQ || (MQ = new IF);
      var lQ = MQ.get(QQ);
      if (lQ) return lQ;
      if (MQ.set(QQ, UQ), !NQ) var jQ = wQ ? function(QQ) {
        return function(QQ, FQ, wQ) {
          var LQ = FQ(QQ);
          return gF(QQ) ? LQ : function(QQ, FQ) {
            for (var wQ = -1, LQ = FQ.length, qQ = QQ.length; ++wQ < LQ;) QQ[qQ + wQ] = FQ[wQ];
            return QQ
          }(LQ, wQ(QQ))
        }(QQ, dF, fF)
      }(QQ) : dF(QQ);
      return function(QQ, FQ) {
        for (var wQ = -1, LQ = QQ ? QQ.length : 0; ++wQ < LQ && !1 !== FQ(QQ[wQ], wQ, QQ););
      }(jQ || QQ, (function(qQ, oQ) {
        jQ && (qQ = QQ[oQ = qQ]), NF(UQ, oQ, KF(qQ, FQ, wQ, LQ, oQ, QQ, MQ))
      })), UQ
    }

    function zF(QQ) {
      return !(!BF(QQ) || (FQ = QQ, dQ && dQ in FQ)) && (yF(QQ) || JQ(QQ) ? LF : UQ).test(EF(QQ));
      var FQ
    }

    function lF(QQ) {
      var FQ = new QQ.constructor(QQ.byteLength);
      return new DF(FQ).set(new DF(QQ)), FQ
    }

    function jF(QQ, FQ, wQ, LQ) {
      wQ || (wQ = {});
      for (var qQ = -1, oQ = FQ.length; ++qQ < oQ;) {
        var DQ = FQ[qQ],
          kQ = LQ ? LQ(wQ[DQ], QQ[DQ], DQ, wQ, QQ) : void 0;
        NF(wQ, DQ, void 0 === kQ ? QQ[DQ] : kQ)
      }
      return wQ
    }

    function aF(QQ, FQ) {
      var wQ = QQ.__data__;
      return function(QQ) {
        var FQ = typeof QQ;
        return "string" == FQ || "number" == FQ || "symbol" == FQ || "boolean" == FQ ? "__proto__" !== QQ : null === QQ
      }(FQ) ? wQ["string" == typeof FQ ? "string" : "hash"] : wQ.map
    }

    function XF(QQ, FQ) {
      var wQ = function(QQ, FQ) {
        return null == QQ ? void 0 : QQ[FQ]
      }(QQ, FQ);
      return zF(wQ) ? wQ : void 0
    }
    OF.prototype.clear = function() {
      this.__data__ = GF ? GF(null) : {}
    }, OF.prototype.delete = function(QQ) {
      return this.has(QQ) && delete this.__data__[QQ]
    }, OF.prototype.get = function(QQ) {
      var FQ = this.__data__;
      if (GF) {
        var wQ = FQ[QQ];
        return wQ === LQ ? void 0 : wQ
      }
      return FF.call(FQ, QQ) ? FQ[QQ] : void 0
    }, OF.prototype.has = function(QQ) {
      var FQ = this.__data__;
      return GF ? void 0 !== FQ[QQ] : FF.call(FQ, QQ)
    }, OF.prototype.set = function(QQ, FQ) {
      return this.__data__[QQ] = GF && void 0 === FQ ? LQ : FQ, this
    }, sF.prototype.clear = function() {
      this.__data__ = []
    }, sF.prototype.delete = function(QQ) {
      var FQ = this.__data__,
        wQ = TF(FQ, QQ);
      return !(wQ < 0) && (wQ == FQ.length - 1 ? FQ.pop() : uF.call(FQ, wQ, 1), !0)
    }, sF.prototype.get = function(QQ) {
      var FQ = this.__data__,
        wQ = TF(FQ, QQ);
      return wQ < 0 ? void 0 : FQ[wQ][1]
    }, sF.prototype.has = function(QQ) {
      return TF(this.__data__, QQ) > -1
    }, sF.prototype.set = function(QQ, FQ) {
      var wQ = this.__data__,
        LQ = TF(wQ, QQ);
      return LQ < 0 ? wQ.push([QQ, FQ]) : wQ[LQ][1] = FQ, this
    }, rF.prototype.clear = function() {
      this.__data__ = {
        hash: new OF,
        map: new(AF || sF),
        string: new OF
      }
    }, rF.prototype.delete = function(QQ) {
      return aF(this, QQ).delete(QQ)
    }, rF.prototype.get = function(QQ) {
      return aF(this, QQ).get(QQ)
    }, rF.prototype.has = function(QQ) {
      return aF(this, QQ).has(QQ)
    }, rF.prototype.set = function(QQ, FQ) {
      return aF(this, QQ).set(QQ, FQ), this
    }, IF.prototype.clear = function() {
      this.__data__ = new sF
    }, IF.prototype.delete = function(QQ) {
      return this.__data__.delete(QQ)
    }, IF.prototype.get = function(QQ) {
      return this.__data__.get(QQ)
    }, IF.prototype.has = function(QQ) {
      return this.__data__.has(QQ)
    }, IF.prototype.set = function(QQ, FQ) {
      var wQ = this.__data__;
      if (wQ instanceof sF) {
        var LQ = wQ.__data__;
        if (!AF || LQ.length < 199) return LQ.push([QQ, FQ]), this;
        wQ = this.__data__ = new rF(LQ)
      }
      return wQ.set(QQ, FQ), this
    };
    var fF = HF ? nQ(HF, Object) : function() {
        return []
      },
      VF = function(QQ) {
        return wF.call(QQ)
      };

    function hF(QQ, FQ) {
      return !!(FQ = null == FQ ? qQ : FQ) && ("number" == typeof QQ || NQ.test(QQ)) && QQ > -1 && QQ % 1 == 0 && QQ < FQ
    }

    function JF(QQ) {
      var FQ = QQ && QQ.constructor;
      return QQ === ("function" == typeof FQ && FQ.prototype || yQ)
    }

    function EF(QQ) {
      if (null != QQ) {
        try {
          return QF.call(QQ)
        } catch (FQ) {}
        try {
          return QQ + ""
        } catch (FQ) {}
      }
      return ""
    }

    function nF(QQ, FQ) {
      return QQ === FQ || QQ !== QQ && FQ !== FQ
    }(xF && VF(new xF(new ArrayBuffer(1))) != pQ || AF && VF(new AF) != uQ || tF && VF(tF.resolve()) != YQ || eF && VF(new eF) != AQ || MF && VF(new MF) != MQ) && (VF = function(QQ) {
      var FQ = wF.call(QQ),
        wQ = FQ == bQ ? QQ.constructor : void 0,
        LQ = wQ ? EF(wQ) : void 0;
      if (LQ) switch (LQ) {
        case pF:
          return pQ;
        case cF:
          return uQ;
        case CF:
          return YQ;
        case SF:
          return AQ;
        case iF:
          return MQ
      }
      return FQ
    });
    var gF = Array.isArray;

    function PF(QQ) {
      return null != QQ && function(QQ) {
        return "number" == typeof QQ && QQ > -1 && QQ % 1 == 0 && QQ <= qQ
      }(QQ.length) && !yF(QQ)
    }
    var ZF = bF || function() {
      return !1
    };

    function yF(QQ) {
      var FQ = BF(QQ) ? wF.call(QQ) : "";
      return FQ == vQ || FQ == mQ
    }

    function BF(QQ) {
      var FQ = typeof QQ;
      return !!QQ && ("object" == FQ || "function" == FQ)
    }

    function dF(QQ) {
      return PF(QQ) ? UF(QQ) : function(QQ) {
        if (!JF(QQ)) return YF(QQ);
        var FQ = [];
        for (var wQ in Object(QQ)) FF.call(QQ, wQ) && "constructor" != wQ && FQ.push(wQ);
        return FQ
      }(QQ)
    }
    QQ.exports = function(QQ) {
      return KF(QQ, !0, !0)
    }
  },
  37982: QQ => {
    function FQ(QQ, FQ, wQ) {
      for (var LQ = QQ.length, qQ = -1 / 0, oQ = 1 / 0, DQ = 0; DQ < LQ; DQ++) {
        var kQ = (wQ[0][DQ] - QQ[DQ]) / FQ[DQ],
          vQ = (wQ[1][DQ] - QQ[DQ]) / FQ[DQ];
        if (kQ > vQ) {
          var mQ = kQ;
          kQ = vQ, vQ = mQ
        }
        if (vQ < qQ || kQ > oQ) return 1 / 0;
        kQ > qQ && (qQ = kQ), vQ < oQ && (oQ = vQ)
      }
      return qQ > oQ ? 1 / 0 : qQ
    }
    QQ.exports = function(QQ, wQ, LQ, qQ) {
      var oQ = FQ(wQ, LQ, qQ);
      if (oQ === 1 / 0) QQ = null;
      else {
        QQ = QQ || [];
        for (var DQ = 0; DQ < wQ.length; DQ++) QQ[DQ] = wQ[DQ] + LQ[DQ] * oQ
      }
      return QQ
    }, QQ.exports.distance = FQ
  },
  37286: (QQ, FQ, wQ) => {
    var LQ = wQ(37294);

    function qQ(QQ) {
      for (var FQ, wQ, qQ = 0, oQ = QQ.length, DQ = 0; DQ < QQ.length;) {
        for (FQ = QQ[DQ], wQ = 0; DQ < oQ && QQ[DQ] === FQ;) ++DQ, ++wQ;
        qQ += LQ.log2(wQ) / 7 | 0, qQ += LQ.log2(FQ >>> 0) / 7 | 0, qQ += 2
      }
      return qQ
    }
    FQ.size = qQ, FQ.encode = function(QQ, FQ) {
      FQ || (FQ = new Uint8Array(qQ(QQ)));
      for (var wQ, LQ, oQ = 0, DQ = FQ.length, kQ = 0; kQ < QQ.length;) {
        for (wQ = QQ[kQ], LQ = 0; kQ < QQ.length && QQ[kQ] === wQ;) ++kQ, ++LQ;
        for (; oQ < DQ && LQ >= 128;) FQ[oQ++] = 128 + (127 & LQ), LQ >>>= 7;
        if (oQ >= DQ) throw new Error("RLE buffer overflow");
        for (FQ[oQ++] = LQ, wQ >>>= 0; oQ < DQ && wQ >= 128;) FQ[oQ++] = 128 + (127 & wQ), wQ >>>= 7;
        if (oQ >= DQ) throw new Error("RLE buffer overflow");
        FQ[oQ++] = wQ
      }
      return FQ
    }, FQ.decode = function(QQ, FQ) {
      for (var wQ, LQ, qQ, oQ, DQ = FQ.length, kQ = QQ.length, vQ = 0, mQ = 0; mQ < kQ;) {
        for (wQ = 0, LQ = 0; mQ < kQ && QQ[mQ] >= 128;) wQ += (127 & QQ[mQ++]) << LQ, LQ += 7;
        if (wQ += QQ[mQ++] << LQ, mQ >= kQ) throw new Error("RLE buffer underrun");
        if (vQ + wQ > DQ) throw new Error("Chunk buffer overflow");
        for (qQ = 0, LQ = 0; mQ < kQ && QQ[mQ] >= 128;) qQ += (127 & QQ[mQ++]) << LQ, LQ += 7;
        if (mQ >= kQ) throw new Error("RLE buffer underrun");
        for (qQ += QQ[mQ++] << LQ, oQ = 0; oQ < wQ; ++oQ) FQ[vQ++] = qQ
      }
      return FQ
    }
  },
  37294: (QQ, FQ) => {
    function wQ(QQ) {
      var FQ = 32;
      return (QQ &= -QQ) && FQ--, 65535 & QQ && (FQ -= 16), 16711935 & QQ && (FQ -= 8), 252645135 & QQ && (FQ -= 4), 858993459 & QQ && (FQ -= 2), 1431655765 & QQ && (FQ -= 1), FQ
    }
    FQ.INT_BITS = 32, FQ.INT_MAX = 2147483647, FQ.INT_MIN = -1 << 31, FQ.sign = function(QQ) {
      return (QQ > 0) - (QQ < 0)
    }, FQ.abs = function(QQ) {
      var FQ = QQ >> 31;
      return (QQ ^ FQ) - FQ
    }, FQ.min = function(QQ, FQ) {
      return FQ ^ (QQ ^ FQ) & -(QQ < FQ)
    }, FQ.max = function(QQ, FQ) {
      return QQ ^ (QQ ^ FQ) & -(QQ < FQ)
    }, FQ.isPow2 = function(QQ) {
      return !(QQ & QQ - 1) && !!QQ
    }, FQ.log2 = function(QQ) {
      var FQ, wQ;
      return FQ = (QQ > 65535) << 4, FQ |= wQ = ((QQ >>>= FQ) > 255) << 3, FQ |= wQ = ((QQ >>>= wQ) > 15) << 2, (FQ |= wQ = ((QQ >>>= wQ) > 3) << 1) | (QQ >>>= wQ) >> 1
    }, FQ.log10 = function(QQ) {
      return QQ >= 1e9 ? 9 : QQ >= 1e8 ? 8 : QQ >= 1e7 ? 7 : QQ >= 1e6 ? 6 : QQ >= 1e5 ? 5 : QQ >= 1e4 ? 4 : QQ >= 1e3 ? 3 : QQ >= 100 ? 2 : QQ >= 10 ? 1 : 0
    }, FQ.popCount = function(QQ) {
      return 16843009 * ((QQ = (858993459 & (QQ -= QQ >>> 1 & 1431655765)) + (QQ >>> 2 & 858993459)) + (QQ >>> 4) & 252645135) >>> 24
    }, FQ.countTrailingZeros = wQ, FQ.nextPow2 = function(QQ) {
      return QQ += 0 === QQ, --QQ, QQ |= QQ >>> 1, QQ |= QQ >>> 2, QQ |= QQ >>> 4, QQ |= QQ >>> 8, (QQ |= QQ >>> 16) + 1
    }, FQ.prevPow2 = function(QQ) {
      return QQ |= QQ >>> 1, QQ |= QQ >>> 2, QQ |= QQ >>> 4, QQ |= QQ >>> 8, (QQ |= QQ >>> 16) - (QQ >>> 1)
    }, FQ.parity = function(QQ) {
      return QQ ^= QQ >>> 16, QQ ^= QQ >>> 8, QQ ^= QQ >>> 4, 27030 >>> (QQ &= 15) & 1
    };
    var LQ = new Array(256);
    ! function(QQ) {
      for (var FQ = 0; FQ < 256; ++FQ) {
        var wQ = FQ,
          LQ = FQ,
          qQ = 7;
        for (wQ >>>= 1; wQ; wQ >>>= 1) LQ <<= 1, LQ |= 1 & wQ, --qQ;
        QQ[FQ] = LQ << qQ & 255
      }
    }(LQ), FQ.reverse = function(QQ) {
      return LQ[255 & QQ] << 24 | LQ[QQ >>> 8 & 255] << 16 | LQ[QQ >>> 16 & 255] << 8 | LQ[QQ >>> 24 & 255]
    }, FQ.interleave2 = function(QQ, FQ) {
      return (QQ = 1431655765 & ((QQ = 858993459 & ((QQ = 252645135 & ((QQ = 16711935 & ((QQ &= 65535) | QQ << 8)) | QQ << 4)) | QQ << 2)) | QQ << 1)) | (FQ = 1431655765 & ((FQ = 858993459 & ((FQ = 252645135 & ((FQ = 16711935 & ((FQ &= 65535) | FQ << 8)) | FQ << 4)) | FQ << 2)) | FQ << 1)) << 1
    }, FQ.deinterleave2 = function(QQ, FQ) {
      return (QQ = 65535 & ((QQ = 16711935 & ((QQ = 252645135 & ((QQ = 858993459 & ((QQ = QQ >>> FQ & 1431655765) | QQ >>> 1)) | QQ >>> 2)) | QQ >>> 4)) | QQ >>> 16)) << 16 >> 16
    }, FQ.interleave3 = function(QQ, FQ, wQ) {
      return QQ = 1227133513 & ((QQ = 3272356035 & ((QQ = 251719695 & ((QQ = 4278190335 & ((QQ &= 1023) | QQ << 16)) | QQ << 8)) | QQ << 4)) | QQ << 2), (QQ |= (FQ = 1227133513 & ((FQ = 3272356035 & ((FQ = 251719695 & ((FQ = 4278190335 & ((FQ &= 1023) | FQ << 16)) | FQ << 8)) | FQ << 4)) | FQ << 2)) << 1) | (wQ = 1227133513 & ((wQ = 3272356035 & ((wQ = 251719695 & ((wQ = 4278190335 & ((wQ &= 1023) | wQ << 16)) | wQ << 8)) | wQ << 4)) | wQ << 2)) << 2
    }, FQ.deinterleave3 = function(QQ, FQ) {
      return (QQ = 1023 & ((QQ = 4278190335 & ((QQ = 251719695 & ((QQ = 3272356035 & ((QQ = QQ >>> FQ & 1227133513) | QQ >>> 2)) | QQ >>> 4)) | QQ >>> 8)) | QQ >>> 16)) << 22 >> 22
    }, FQ.nextCombination = function(QQ) {
      var FQ = QQ | QQ - 1;
      return FQ + 1 | (~FQ & -~FQ) - 1 >>> wQ(QQ) + 1
    }
  },
  36870: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      Color3: () => LQ.b,
      b: () => LQ.e
    });
    var LQ = wQ(36873);
    (0, LQ.h)()
  },
  37320: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => qQ
    });
    var LQ = wQ(37324);
    class qQ {
      static GetPlanes(QQ) {
        const FQ = [];
        for (let wQ = 0; wQ < 6; wQ++) FQ.push(new LQ.d(0, 0, 0, 0));
        return qQ.GetPlanesToRef(QQ, FQ), FQ
      }
      static GetNearPlaneToRef(QQ, FQ) {
        const wQ = QQ.m;
        FQ.normal.x = wQ[3] + wQ[2], FQ.normal.y = wQ[7] + wQ[6], FQ.normal.z = wQ[11] + wQ[10], FQ.d = wQ[15] + wQ[14], FQ.normalize()
      }
      static GetFarPlaneToRef(QQ, FQ) {
        const wQ = QQ.m;
        FQ.normal.x = wQ[3] - wQ[2], FQ.normal.y = wQ[7] - wQ[6], FQ.normal.z = wQ[11] - wQ[10], FQ.d = wQ[15] - wQ[14], FQ.normalize()
      }
      static GetLeftPlaneToRef(QQ, FQ) {
        const wQ = QQ.m;
        FQ.normal.x = wQ[3] + wQ[0], FQ.normal.y = wQ[7] + wQ[4], FQ.normal.z = wQ[11] + wQ[8], FQ.d = wQ[15] + wQ[12], FQ.normalize()
      }
      static GetRightPlaneToRef(QQ, FQ) {
        const wQ = QQ.m;
        FQ.normal.x = wQ[3] - wQ[0], FQ.normal.y = wQ[7] - wQ[4], FQ.normal.z = wQ[11] - wQ[8], FQ.d = wQ[15] - wQ[12], FQ.normalize()
      }
      static GetTopPlaneToRef(QQ, FQ) {
        const wQ = QQ.m;
        FQ.normal.x = wQ[3] - wQ[1], FQ.normal.y = wQ[7] - wQ[5], FQ.normal.z = wQ[11] - wQ[9], FQ.d = wQ[15] - wQ[13], FQ.normalize()
      }
      static GetBottomPlaneToRef(QQ, FQ) {
        const wQ = QQ.m;
        FQ.normal.x = wQ[3] + wQ[1], FQ.normal.y = wQ[7] + wQ[5], FQ.normal.z = wQ[11] + wQ[9], FQ.d = wQ[15] + wQ[13], FQ.normalize()
      }
      static GetPlanesToRef(QQ, FQ) {
        qQ.GetNearPlaneToRef(QQ, FQ[0]), qQ.GetFarPlaneToRef(QQ, FQ[1]), qQ.GetLeftPlaneToRef(QQ, FQ[2]), qQ.GetRightPlaneToRef(QQ, FQ[3]), qQ.GetTopPlaneToRef(QQ, FQ[4]), qQ.GetBottomPlaneToRef(QQ, FQ[5])
      }
      static IsPointInFrustum(QQ, FQ) {
        for (let wQ = 0; wQ < 6; wQ++)
          if (FQ[wQ].dotCoordinate(QQ) < 0) return !1;
        return !0
      }
    }
  },
  37324: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => qQ
    });
    var LQ = wQ(36696);
    class qQ {
      constructor(QQ, FQ, wQ, qQ) {
        this.normal = new LQ.p(QQ, FQ, wQ), this.d = qQ
      }
      RLQ() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new qQ(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let QQ = this.normal.getHashCode();
        return QQ = 397 * QQ ^ this.d, QQ
      }
      normalize() {
        const QQ = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let FQ = 0;
        return 0 !== QQ && (FQ = 1 / QQ), this.normal.x *= FQ, this.normal.y *= FQ, this.normal.z *= FQ, this.d *= FQ, this
      }
      transform(QQ) {
        const FQ = qQ._TmpMatrix;
        QQ.invertToRef(FQ);
        const wQ = FQ.m,
          LQ = this.normal.x,
          oQ = this.normal.y,
          DQ = this.normal.z,
          kQ = this.d,
          vQ = LQ * wQ[0] + oQ * wQ[1] + DQ * wQ[2] + kQ * wQ[3],
          mQ = LQ * wQ[4] + oQ * wQ[5] + DQ * wQ[6] + kQ * wQ[7],
          uQ = LQ * wQ[8] + oQ * wQ[9] + DQ * wQ[10] + kQ * wQ[11],
          HQ = LQ * wQ[12] + oQ * wQ[13] + DQ * wQ[14] + kQ * wQ[15];
        return new qQ(vQ, mQ, uQ, HQ)
      }
      dotCoordinate(QQ) {
        return this.normal.x * QQ.x + this.normal.y * QQ.y + this.normal.z * QQ.z + this.d
      }
      copyFromPoints(QQ, FQ, wQ) {
        const LQ = FQ.x - QQ.x,
          qQ = FQ.y - QQ.y,
          oQ = FQ.z - QQ.z,
          DQ = wQ.x - QQ.x,
          kQ = wQ.y - QQ.y,
          vQ = wQ.z - QQ.z,
          mQ = qQ * vQ - oQ * kQ,
          uQ = oQ * DQ - LQ * vQ,
          HQ = LQ * kQ - qQ * DQ,
          bQ = Math.sqrt(mQ * mQ + uQ * uQ + HQ * HQ);
        let YQ;
        return YQ = 0 !== bQ ? 1 / bQ : 0, this.normal.x = mQ * YQ, this.normal.y = uQ * YQ, this.normal.z = HQ * YQ, this.d = -(this.normal.x * QQ.x + this.normal.y * QQ.y + this.normal.z * QQ.z), this
      }
      isFrontFacingTo(QQ, FQ) {
        return LQ.p.Dot(this.normal, QQ) <= FQ
      }
      signedDistanceTo(QQ) {
        return LQ.p.Dot(QQ, this.normal) + this.d
      }
      static FromArray(QQ) {
        return new qQ(QQ[0], QQ[1], QQ[2], QQ[3])
      }
      static FromPoints(QQ, FQ, wQ) {
        const LQ = new qQ(0, 0, 0, 0);
        return LQ.copyFromPoints(QQ, FQ, wQ), LQ
      }
      static FromPositionAndNormal(QQ, FQ) {
        const wQ = new qQ(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(QQ, FQ, wQ)
      }
      static FromPositionAndNormalToRef(QQ, FQ, wQ) {
        return wQ.normal.Qs(FQ), wQ.normal.normalize(), wQ.d = -QQ.dot(wQ.normal), wQ
      }
      static SignedDistanceToPlaneFromPositionAndNormal(QQ, FQ, wQ) {
        const qQ = -(FQ.x * QQ.x + FQ.y * QQ.y + FQ.z * QQ.z);
        return LQ.p.Dot(wQ, FQ) + qQ
      }
    }
    qQ._TmpMatrix = LQ.c.Identity()
  },
  36688: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      Matrix: () => LQ.c,
      Quaternion: () => LQ.e,
      RegisterMathVector: () => LQ.i,
      TmpVectors: () => LQ.k,
      Vector2: () => LQ.n,
      Ox: () => LQ.p,
      Vector4: () => LQ.t
    });
    var LQ = wQ(36696);
    (0, LQ.i)()
  },
  37631: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => LQ
    });
    class LQ {
      constructor(QQ, FQ, wQ, LQ) {
        this.x = QQ, this.y = FQ, this.width = wQ, this.height = LQ
      }
      toGlobal(QQ, FQ) {
        return new LQ(this.x * QQ, this.y * FQ, this.width * QQ, this.height * FQ)
      }
      toGlobalToRef(QQ, FQ, wQ) {
        return wQ.x = this.x * QQ, wQ.y = this.y * FQ, wQ.width = this.width * QQ, wQ.height = this.height * FQ, this
      }
      clone() {
        return new LQ(this.x, this.y, this.width, this.height)
      }
    }
  },
  37452: (QQ, FQ, wQ) => {
    function LQ() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (QQ => {
        const FQ = 16 * Math.random() | 0;
        return ("x" === QQ ? FQ : 3 & FQ | 8).toString(16)
      }))
    }
    wQ.d(FQ, {
      d: () => LQ
    })
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);