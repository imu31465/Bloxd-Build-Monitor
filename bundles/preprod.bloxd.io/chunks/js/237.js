/*! For license information please see 8104he.237.d99e8654.chunk.js.LICENSE.txt */
export const id = 237;
export const ids = [237, 245];
export const modules = {
  38582: QQ => {
    QQ.exports = function(QQ) {
      return null != QQ && null != QQ.constructor && "function" === typeof QQ.constructor.isBuffer && QQ.constructor.isBuffer(QQ)
    }
  },
  38572: (QQ, WQ, XQ) => {
    var wQ = XQ(38576),
      qQ = XQ(38580),
      TQ = XQ(38582);
    XQ.g.__TYPEDARRAY_POOL || (XQ.g.__TYPEDARRAY_POOL = {
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
    var zQ = "undefined" !== typeof Uint8ClampedArray,
      sQ = XQ.g.__TYPEDARRAY_POOL;
    sQ.UINT8C || (sQ.UINT8C = qQ([32, 0])), sQ.BUFFER || (sQ.BUFFER = qQ([32, 0]));
    var FQ = sQ.DATA,
      PQ = sQ.BUFFER;

    function gQ(QQ) {
      if (QQ) {
        var WQ = QQ.length || QQ.byteLength,
          XQ = wQ.log2(WQ);
        FQ[XQ].push(QQ)
      }
    }

    function JQ(QQ) {
      QQ = wQ.nextPow2(QQ);
      var WQ = wQ.log2(QQ),
        XQ = FQ[WQ];
      return XQ.length > 0 ? XQ.pop() : new ArrayBuffer(QQ)
    }

    function rQ(QQ) {
      return new Uint8Array(JQ(QQ), 0, QQ)
    }

    function IQ(QQ) {
      return new Uint16Array(JQ(2 * QQ), 0, QQ)
    }

    function jQ(QQ) {
      return new Uint32Array(JQ(4 * QQ), 0, QQ)
    }

    function BQ(QQ) {
      return new Int8Array(JQ(QQ), 0, QQ)
    }

    function yQ(QQ) {
      return new Int16Array(JQ(2 * QQ), 0, QQ)
    }

    function VQ(QQ) {
      return new Int32Array(JQ(4 * QQ), 0, QQ)
    }

    function DQ(QQ) {
      return new Float32Array(JQ(4 * QQ), 0, QQ)
    }

    function pQ(QQ) {
      return new Float64Array(JQ(8 * QQ), 0, QQ)
    }

    function GQ(QQ) {
      return zQ ? new Uint8ClampedArray(JQ(QQ), 0, QQ) : rQ(QQ)
    }

    function UQ(QQ) {
      return new DataView(JQ(QQ), 0, QQ)
    }
    WQ.free = function(QQ) {
      if (TQ(QQ)) PQ[wQ.log2(QQ.length)].push(QQ);
      else {
        if ("[object ArrayBuffer]" !== Object.prototype.toString.call(QQ) && (QQ = QQ.buffer), !QQ) return;
        var WQ = QQ.length || QQ.byteLength,
          XQ = 0 | wQ.log2(WQ);
        FQ[XQ].push(QQ)
      }
    }, WQ.freeUint8 = WQ.freeUint16 = WQ.freeUint32 = WQ.freeInt8 = WQ.freeInt16 = WQ.freeInt32 = WQ.freeFloat32 = WQ.freeFloat = WQ.freeFloat64 = WQ.freeDouble = WQ.freeUint8Clamped = WQ.freeDataView = function(QQ) {
      gQ(QQ.buffer)
    }, WQ.freeArrayBuffer = gQ, WQ.freeBuffer = function(QQ) {
      PQ[wQ.log2(QQ.length)].push(QQ)
    }, WQ.malloc = function(QQ, WQ) {
      if (void 0 === WQ || "arraybuffer" === WQ) return JQ(QQ);
      switch (WQ) {
        case "uint8":
          return rQ(QQ);
        case "uint16":
          return IQ(QQ);
        case "uint32":
          return jQ(QQ);
        case "int8":
          return BQ(QQ);
        case "int16":
          return yQ(QQ);
        case "int32":
          return VQ(QQ);
        case "float":
        case "float32":
          return DQ(QQ);
        case "double":
        case "float64":
          return pQ(QQ);
        case "uint8_clamped":
          return GQ(QQ);
        case "buffer":
          throw "Buffer not supported";
        case "data":
        case "dataview":
          return UQ(QQ);
        default:
          return null
      }
      return null
    }, WQ.mallocArrayBuffer = JQ, WQ.mallocUint8 = rQ, WQ.mallocUint16 = IQ, WQ.mallocUint32 = jQ, WQ.mallocInt8 = BQ, WQ.mallocInt16 = yQ, WQ.mallocInt32 = VQ, WQ.mallocFloat32 = WQ.mallocFloat = DQ, WQ.mallocFloat64 = WQ.mallocDouble = pQ, WQ.mallocUint8Clamped = GQ, WQ.mallocDataView = UQ, WQ.clearCache = function() {
      for (var QQ = 0; QQ < 32; ++QQ) sQ.UINT8[QQ].length = 0, sQ.UINT16[QQ].length = 0, sQ.UINT32[QQ].length = 0, sQ.INT8[QQ].length = 0, sQ.INT16[QQ].length = 0, sQ.INT32[QQ].length = 0, sQ.FLOAT[QQ].length = 0, sQ.DOUBLE[QQ].length = 0, sQ.UINT8C[QQ].length = 0, FQ[QQ].length = 0, PQ[QQ].length = 0
    }
  },
  38576: (QQ, WQ) => {
    function XQ(QQ) {
      var WQ = 32;
      return (QQ &= -QQ) && WQ--, 65535 & QQ && (WQ -= 16), 16711935 & QQ && (WQ -= 8), 252645135 & QQ && (WQ -= 4), 858993459 & QQ && (WQ -= 2), 1431655765 & QQ && (WQ -= 1), WQ
    }
    WQ.INT_BITS = 32, WQ.INT_MAX = 2147483647, WQ.INT_MIN = -1 << 31, WQ.sign = function(QQ) {
      return (QQ > 0) - (QQ < 0)
    }, WQ.abs = function(QQ) {
      var WQ = QQ >> 31;
      return (QQ ^ WQ) - WQ
    }, WQ.min = function(QQ, WQ) {
      return WQ ^ (QQ ^ WQ) & -(QQ < WQ)
    }, WQ.max = function(QQ, WQ) {
      return QQ ^ (QQ ^ WQ) & -(QQ < WQ)
    }, WQ.isPow2 = function(QQ) {
      return !(QQ & QQ - 1) && !!QQ
    }, WQ.log2 = function(QQ) {
      var WQ, XQ;
      return WQ = (QQ > 65535) << 4, WQ |= XQ = ((QQ >>>= WQ) > 255) << 3, WQ |= XQ = ((QQ >>>= XQ) > 15) << 2, (WQ |= XQ = ((QQ >>>= XQ) > 3) << 1) | (QQ >>>= XQ) >> 1
    }, WQ.log10 = function(QQ) {
      return QQ >= 1e9 ? 9 : QQ >= 1e8 ? 8 : QQ >= 1e7 ? 7 : QQ >= 1e6 ? 6 : QQ >= 1e5 ? 5 : QQ >= 1e4 ? 4 : QQ >= 1e3 ? 3 : QQ >= 100 ? 2 : QQ >= 10 ? 1 : 0
    }, WQ.popCount = function(QQ) {
      return 16843009 * ((QQ = (858993459 & (QQ -= QQ >>> 1 & 1431655765)) + (QQ >>> 2 & 858993459)) + (QQ >>> 4) & 252645135) >>> 24
    }, WQ.countTrailingZeros = XQ, WQ.nextPow2 = function(QQ) {
      return QQ += 0 === QQ, --QQ, QQ |= QQ >>> 1, QQ |= QQ >>> 2, QQ |= QQ >>> 4, QQ |= QQ >>> 8, (QQ |= QQ >>> 16) + 1
    }, WQ.prevPow2 = function(QQ) {
      return QQ |= QQ >>> 1, QQ |= QQ >>> 2, QQ |= QQ >>> 4, QQ |= QQ >>> 8, (QQ |= QQ >>> 16) - (QQ >>> 1)
    }, WQ.parity = function(QQ) {
      return QQ ^= QQ >>> 16, QQ ^= QQ >>> 8, QQ ^= QQ >>> 4, 27030 >>> (QQ &= 15) & 1
    };
    var wQ = new Array(256);
    ! function(QQ) {
      for (var WQ = 0; WQ < 256; ++WQ) {
        var XQ = WQ,
          wQ = WQ,
          qQ = 7;
        for (XQ >>>= 1; XQ; XQ >>>= 1) wQ <<= 1, wQ |= 1 & XQ, --qQ;
        QQ[WQ] = wQ << qQ & 255
      }
    }(wQ), WQ.reverse = function(QQ) {
      return wQ[255 & QQ] << 24 | wQ[QQ >>> 8 & 255] << 16 | wQ[QQ >>> 16 & 255] << 8 | wQ[QQ >>> 24 & 255]
    }, WQ.interleave2 = function(QQ, WQ) {
      return (QQ = 1431655765 & ((QQ = 858993459 & ((QQ = 252645135 & ((QQ = 16711935 & ((QQ &= 65535) | QQ << 8)) | QQ << 4)) | QQ << 2)) | QQ << 1)) | (WQ = 1431655765 & ((WQ = 858993459 & ((WQ = 252645135 & ((WQ = 16711935 & ((WQ &= 65535) | WQ << 8)) | WQ << 4)) | WQ << 2)) | WQ << 1)) << 1
    }, WQ.deinterleave2 = function(QQ, WQ) {
      return (QQ = 65535 & ((QQ = 16711935 & ((QQ = 252645135 & ((QQ = 858993459 & ((QQ = QQ >>> WQ & 1431655765) | QQ >>> 1)) | QQ >>> 2)) | QQ >>> 4)) | QQ >>> 16)) << 16 >> 16
    }, WQ.interleave3 = function(QQ, WQ, XQ) {
      return QQ = 1227133513 & ((QQ = 3272356035 & ((QQ = 251719695 & ((QQ = 4278190335 & ((QQ &= 1023) | QQ << 16)) | QQ << 8)) | QQ << 4)) | QQ << 2), (QQ |= (WQ = 1227133513 & ((WQ = 3272356035 & ((WQ = 251719695 & ((WQ = 4278190335 & ((WQ &= 1023) | WQ << 16)) | WQ << 8)) | WQ << 4)) | WQ << 2)) << 1) | (XQ = 1227133513 & ((XQ = 3272356035 & ((XQ = 251719695 & ((XQ = 4278190335 & ((XQ &= 1023) | XQ << 16)) | XQ << 8)) | XQ << 4)) | XQ << 2)) << 2
    }, WQ.deinterleave3 = function(QQ, WQ) {
      return (QQ = 1023 & ((QQ = 4278190335 & ((QQ = 251719695 & ((QQ = 3272356035 & ((QQ = QQ >>> WQ & 1227133513) | QQ >>> 2)) | QQ >>> 4)) | QQ >>> 8)) | QQ >>> 16)) << 22 >> 22
    }, WQ.nextCombination = function(QQ) {
      var WQ = QQ | QQ - 1;
      return WQ + 1 | (~WQ & -~WQ) - 1 >>> XQ(QQ) + 1
    }
  },
  38565: (QQ, WQ, XQ) => {
    QQ.exports = function(QQ, WQ, XQ) {
      switch (arguments.length) {
        case 1:
          return wQ = [], PQ(qQ = QQ, qQ, gQ, !0), wQ;
        case 2:
          return "function" === typeof WQ ? PQ(QQ, QQ, WQ, !0) : function(QQ, WQ) {
            return wQ = [], PQ(QQ, WQ, gQ, !1), wQ
          }(QQ, WQ);
        case 3:
          return PQ(QQ, WQ, XQ, !1);
        default:
          throw new Error("box-intersect: Invalid arguments")
      }
      var qQ
    };
    var wQ, qQ = XQ(38572),
      TQ = XQ(38584),
      zQ = XQ(38595);

    function sQ(QQ, WQ) {
      for (var XQ = 0; XQ < QQ; ++XQ)
        if (!(WQ[XQ] <= WQ[XQ + QQ])) return !0;
      return !1
    }

    function FQ(QQ, WQ, XQ, wQ) {
      for (var qQ = 0, TQ = 0, zQ = 0, FQ = QQ.length; zQ < FQ; ++zQ) {
        var PQ = QQ[zQ];
        if (!sQ(WQ, PQ)) {
          for (var gQ = 0; gQ < 2 * WQ; ++gQ) XQ[qQ++] = PQ[gQ];
          wQ[TQ++] = zQ
        }
      }
      return TQ
    }

    function PQ(QQ, WQ, XQ, wQ) {
      var sQ = QQ.length,
        PQ = WQ.length;
      if (!(sQ <= 0 || PQ <= 0)) {
        var gQ = QQ[0].length >>> 1;
        if (!(gQ <= 0)) {
          var JQ, rQ = qQ.mallocDouble(2 * gQ * sQ),
            IQ = qQ.mallocInt32(sQ);
          if ((sQ = FQ(QQ, gQ, rQ, IQ)) > 0) {
            if (1 === gQ && wQ) TQ.init(sQ), JQ = TQ.sweepComplete(gQ, XQ, 0, sQ, rQ, IQ, 0, sQ, rQ, IQ);
            else {
              var jQ = qQ.mallocDouble(2 * gQ * PQ),
                BQ = qQ.mallocInt32(PQ);
              (PQ = FQ(WQ, gQ, jQ, BQ)) > 0 && (TQ.init(sQ + PQ), JQ = 1 === gQ ? TQ.sweepBipartite(gQ, XQ, 0, sQ, rQ, IQ, 0, PQ, jQ, BQ) : zQ(gQ, XQ, wQ, sQ, rQ, IQ, PQ, jQ, BQ), qQ.free(jQ), qQ.free(BQ))
            }
            qQ.free(rQ), qQ.free(IQ)
          }
          return JQ
        }
      }
    }

    function gQ(QQ, WQ) {
      wQ.push([QQ, WQ])
    }
  },
  38602: (QQ, WQ) => {
    var XQ = "d",
      wQ = "ax",
      qQ = "fp",
      TQ = "es",
      zQ = "rs",
      sQ = "re",
      FQ = "rb",
      PQ = "bs",
      gQ = "be",
      JQ = "bb",
      rQ = [XQ, wQ, "vv", zQ, sQ, FQ, "ri", PQ, gQ, JQ, "bi"];

    function IQ(QQ) {
      var WQ = "bruteForce" + (QQ ? "Full" : "Partial"),
        wQ = [],
        zQ = rQ.slice();
      QQ || zQ.splice(3, 0, qQ);
      var sQ = ["function " + WQ + "(" + zQ.join() + "){"];

      function FQ(WQ, qQ) {
        var zQ = function(QQ, WQ, wQ) {
          var qQ = "bruteForce" + (QQ ? "Red" : "Blue") + (WQ ? "Flip" : "") + (wQ ? "Full" : ""),
            zQ = ["function ", qQ, "(", rQ.join(), "){", "var ", TQ, "=2*", XQ, ";"],
            sQ = "for(var i=rs,rp=es*rs;i<re;++i,rp+=es){var x0=rb[ax+rp],x1=rb[ax+rp+d],xi=ri[i];",
            FQ = "for(var j=bs,bp=es*bs;j<be;++j,bp+=es){var y0=bb[ax+bp]," + (wQ ? "y1=bb[ax+bp+d]," : "") + "yi=bi[j];";
          return QQ ? zQ.push(sQ, "Q", ":", FQ) : zQ.push(FQ, "Q", ":", sQ), wQ ? zQ.push("if(y1<x0||x1<y0)continue;") : WQ ? zQ.push("if(y0<=x0||x1<y0)continue;") : zQ.push("if(y0<x0||x1<y0)continue;"), zQ.push("for(var k=ax+1;k<d;++k){var r0=rb[k+rp],r1=rb[k+d+rp],b0=bb[k+bp],b1=bb[k+d+bp];if(r1<b0||b1<r0)continue Q;}var rv=vv("), WQ ? zQ.push("yi,xi") : zQ.push("xi,yi"), zQ.push(");if(rv!==void 0)return rv;}}}"), {
            name: qQ,
            code: zQ.join("")
          }
        }(WQ, qQ, QQ);
        wQ.push(zQ.code), sQ.push("return " + zQ.name + "(" + rQ.join() + ");")
      }
      sQ.push("if(re-rs>be-bs){"), QQ ? (FQ(!0, !1), sQ.push("}else{"), FQ(!1, !1)) : (sQ.push("if(fp){"), FQ(!0, !0), sQ.push("}else{"), FQ(!0, !1), sQ.push("}}else{if(fp){"), FQ(!1, !0), sQ.push("}else{"), FQ(!1, !1), sQ.push("}")), sQ.push("}}return " + WQ);
      var PQ = wQ.join("") + sQ.join("");
      return new Function(PQ)()
    }
    WQ.partial = IQ(!1), WQ.full = IQ(!0)
  },
  38595: (QQ, WQ, XQ) => {
    QQ.exports = function(QQ, WQ, XQ, TQ, gQ, lQ, hQ, iQ, cQ) {
      ! function(QQ, WQ) {
        var XQ = 8 * qQ.log2(WQ + 1) * (QQ + 1) | 0,
          TQ = qQ.nextPow2(GQ * XQ);
        bQ.length < TQ && (wQ.free(bQ), bQ = wQ.mallocInt32(TQ));
        var zQ = qQ.nextPow2(UQ * XQ);
        vQ.length < zQ && (wQ.free(vQ), vQ = wQ.mallocDouble(zQ))
      }(QQ, TQ + hQ);
      var AQ, RQ = 0,
        EQ = 2 * QQ;
      dQ(RQ++, 0, 0, TQ, 0, hQ, XQ ? 16 : 0, -1 / 0, 1 / 0), XQ || dQ(RQ++, 0, 0, hQ, 0, TQ, 1, -1 / 0, 1 / 0);
      for (; RQ > 0;) {
        var CQ = (RQ -= 1) * GQ,
          uQ = bQ[CQ],
          LQ = bQ[CQ + 1],
          kQ = bQ[CQ + 2],
          fQ = bQ[CQ + 3],
          SQ = bQ[CQ + 4],
          tQ = bQ[CQ + 5],
          oQ = RQ * UQ,
          eQ = vQ[oQ],
          nQ = vQ[oQ + 1],
          xQ = 1 & tQ,
          YQ = !!(16 & tQ),
          NQ = gQ,
          ZQ = lQ,
          OQ = iQ,
          KQ = cQ;
        if (xQ && (NQ = iQ, ZQ = cQ, OQ = gQ, KQ = lQ), !(2 & tQ && LQ >= (kQ = yQ(QQ, uQ, LQ, kQ, NQ, ZQ, nQ))) && !(4 & tQ && (LQ = VQ(QQ, uQ, LQ, kQ, NQ, ZQ, eQ)) >= kQ)) {
          var mQ = kQ - LQ,
            MQ = SQ - fQ;
          if (YQ) {
            if (QQ * mQ * (mQ + MQ) < IQ) {
              if (void 0 !== (AQ = FQ.scanComplete(QQ, uQ, WQ, LQ, kQ, NQ, ZQ, fQ, SQ, OQ, KQ))) return AQ;
              continue
            }
          } else {
            if (QQ * Math.min(mQ, MQ) < JQ) {
              if (void 0 !== (AQ = zQ(QQ, uQ, WQ, xQ, LQ, kQ, NQ, ZQ, fQ, SQ, OQ, KQ))) return AQ;
              continue
            }
            if (QQ * mQ * MQ < rQ) {
              if (void 0 !== (AQ = FQ.scanBipartite(QQ, uQ, WQ, xQ, LQ, kQ, NQ, ZQ, fQ, SQ, OQ, KQ))) return AQ;
              continue
            }
          }
          var QW = jQ(QQ, uQ, LQ, kQ, NQ, ZQ, eQ, nQ);
          if (LQ < QW)
            if (QQ * (QW - LQ) < JQ) {
              if (void 0 !== (AQ = sQ(QQ, uQ + 1, WQ, LQ, QW, NQ, ZQ, fQ, SQ, OQ, KQ))) return AQ
            } else if (uQ === QQ - 2) {
            if (void 0 !== (AQ = xQ ? FQ.sweepBipartite(QQ, WQ, fQ, SQ, OQ, KQ, LQ, QW, NQ, ZQ) : FQ.sweepBipartite(QQ, WQ, LQ, QW, NQ, ZQ, fQ, SQ, OQ, KQ))) return AQ
          } else dQ(RQ++, uQ + 1, LQ, QW, fQ, SQ, xQ, -1 / 0, 1 / 0), dQ(RQ++, uQ + 1, fQ, SQ, LQ, QW, 1 ^ xQ, -1 / 0, 1 / 0);
          if (QW < kQ) {
            var WW = PQ(QQ, uQ, fQ, SQ, OQ, KQ),
              XW = OQ[EQ * WW + uQ],
              wW = BQ(QQ, uQ, WW, SQ, OQ, KQ, XW);
            if (wW < SQ && dQ(RQ++, uQ, QW, kQ, wW, SQ, (4 | xQ) + (YQ ? 16 : 0), XW, nQ), fQ < WW && dQ(RQ++, uQ, QW, kQ, fQ, WW, (2 | xQ) + (YQ ? 16 : 0), eQ, XW), WW + 1 === wW) {
              if (void 0 !== (AQ = YQ ? aQ(QQ, uQ, WQ, QW, kQ, NQ, ZQ, WW, OQ, KQ[WW]) : HQ(QQ, uQ, WQ, xQ, QW, kQ, NQ, ZQ, WW, OQ, KQ[WW]))) return AQ
            } else if (WW < wW) {
              var qW;
              if (YQ) {
                if (QW < (qW = DQ(QQ, uQ, QW, kQ, NQ, ZQ, XW))) {
                  var TW = BQ(QQ, uQ, QW, qW, NQ, ZQ, XW);
                  if (uQ === QQ - 2) {
                    if (QW < TW && void 0 !== (AQ = FQ.sweepComplete(QQ, WQ, QW, TW, NQ, ZQ, WW, wW, OQ, KQ))) return AQ;
                    if (TW < qW && void 0 !== (AQ = FQ.sweepBipartite(QQ, WQ, TW, qW, NQ, ZQ, WW, wW, OQ, KQ))) return AQ
                  } else QW < TW && dQ(RQ++, uQ + 1, QW, TW, WW, wW, 16, -1 / 0, 1 / 0), TW < qW && (dQ(RQ++, uQ + 1, TW, qW, WW, wW, 0, -1 / 0, 1 / 0), dQ(RQ++, uQ + 1, WW, wW, TW, qW, 1, -1 / 0, 1 / 0))
                }
              } else QW < (qW = xQ ? pQ(QQ, uQ, QW, kQ, NQ, ZQ, XW) : DQ(QQ, uQ, QW, kQ, NQ, ZQ, XW)) && (uQ === QQ - 2 ? AQ = xQ ? FQ.sweepBipartite(QQ, WQ, WW, wW, OQ, KQ, QW, qW, NQ, ZQ) : FQ.sweepBipartite(QQ, WQ, QW, qW, NQ, ZQ, WW, wW, OQ, KQ) : (dQ(RQ++, uQ + 1, QW, qW, WW, wW, xQ, -1 / 0, 1 / 0), dQ(RQ++, uQ + 1, WW, wW, QW, qW, 1 ^ xQ, -1 / 0, 1 / 0)))
            }
          }
        }
      }
    };
    var wQ = XQ(38572),
      qQ = XQ(38576),
      TQ = XQ(38602),
      zQ = TQ.partial,
      sQ = TQ.full,
      FQ = XQ(38584),
      PQ = XQ(38611),
      gQ = XQ(38613),
      JQ = 128,
      rQ = 1 << 22,
      IQ = 1 << 22,
      jQ = gQ("!(lo>=p0)&&!(p1>=hi)", ["p0", "p1"]),
      BQ = gQ("lo===p0", ["p0"]),
      yQ = gQ("lo<p0", ["p0"]),
      VQ = gQ("hi<=p0", ["p0"]),
      DQ = gQ("lo<=p0&&p0<=hi", ["p0"]),
      pQ = gQ("lo<p0&&p0<=hi", ["p0"]),
      GQ = 6,
      UQ = 2,
      bQ = wQ.mallocInt32(1024),
      vQ = wQ.mallocDouble(1024);

    function dQ(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ) {
      var PQ = GQ * QQ;
      bQ[PQ] = WQ, bQ[PQ + 1] = XQ, bQ[PQ + 2] = wQ, bQ[PQ + 3] = qQ, bQ[PQ + 4] = TQ, bQ[PQ + 5] = zQ;
      var gQ = UQ * QQ;
      vQ[gQ] = sQ, vQ[gQ + 1] = FQ
    }

    function HQ(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ, gQ) {
      var JQ = 2 * QQ,
        rQ = FQ * JQ,
        IQ = PQ[rQ + WQ];
      QQ: for (var jQ = qQ, BQ = qQ * JQ; jQ < TQ; ++jQ, BQ += JQ) {
        var yQ = zQ[BQ + WQ],
          VQ = zQ[BQ + WQ + QQ];
        if (!(IQ < yQ || VQ < IQ) && (!wQ || IQ !== yQ)) {
          for (var DQ, pQ = sQ[jQ], GQ = WQ + 1; GQ < QQ; ++GQ) {
            yQ = zQ[BQ + GQ], VQ = zQ[BQ + GQ + QQ];
            var UQ = PQ[rQ + GQ],
              bQ = PQ[rQ + GQ + QQ];
            if (VQ < UQ || bQ < yQ) continue QQ
          }
          if (void 0 !== (DQ = wQ ? XQ(gQ, pQ) : XQ(pQ, gQ))) return DQ
        }
      }
    }

    function aQ(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ) {
      var gQ = 2 * QQ,
        JQ = sQ * gQ,
        rQ = FQ[JQ + WQ];
      QQ: for (var IQ = wQ, jQ = wQ * gQ; IQ < qQ; ++IQ, jQ += gQ) {
        var BQ = zQ[IQ];
        if (BQ !== PQ) {
          var yQ = TQ[jQ + WQ],
            VQ = TQ[jQ + WQ + QQ];
          if (!(rQ < yQ || VQ < rQ)) {
            for (var DQ = WQ + 1; DQ < QQ; ++DQ) {
              yQ = TQ[jQ + DQ], VQ = TQ[jQ + DQ + QQ];
              var pQ = FQ[JQ + DQ],
                GQ = FQ[JQ + DQ + QQ];
              if (VQ < pQ || GQ < yQ) continue QQ
            }
            var UQ = XQ(BQ, PQ);
            if (void 0 !== UQ) return UQ
          }
        }
      }
    }
  },
  38611: (QQ, WQ, XQ) => {
    QQ.exports = function(QQ, WQ, XQ, zQ, sQ, FQ) {
      if (zQ <= XQ + 1) return XQ;
      var PQ = XQ,
        gQ = zQ,
        JQ = zQ + XQ >>> 1,
        rQ = 2 * QQ,
        IQ = JQ,
        jQ = sQ[rQ * JQ + WQ];
      for (; PQ < gQ;) {
        if (gQ - PQ < qQ) {
          TQ(QQ, WQ, PQ, gQ, sQ, FQ), jQ = sQ[rQ * JQ + WQ];
          break
        }
        var BQ = gQ - PQ,
          yQ = Math.random() * BQ + PQ | 0,
          VQ = sQ[rQ * yQ + WQ],
          DQ = Math.random() * BQ + PQ | 0,
          pQ = sQ[rQ * DQ + WQ],
          GQ = Math.random() * BQ + PQ | 0,
          UQ = sQ[rQ * GQ + WQ];
        VQ <= pQ ? UQ >= pQ ? (IQ = DQ, jQ = pQ) : VQ >= UQ ? (IQ = yQ, jQ = VQ) : (IQ = GQ, jQ = UQ) : pQ >= UQ ? (IQ = DQ, jQ = pQ) : UQ >= VQ ? (IQ = yQ, jQ = VQ) : (IQ = GQ, jQ = UQ);
        for (var bQ = rQ * (gQ - 1), vQ = rQ * IQ, dQ = 0; dQ < rQ; ++dQ, ++bQ, ++vQ) {
          var HQ = sQ[bQ];
          sQ[bQ] = sQ[vQ], sQ[vQ] = HQ
        }
        var aQ = FQ[gQ - 1];
        FQ[gQ - 1] = FQ[IQ], FQ[IQ] = aQ;
        for (bQ = rQ * (gQ - 1), vQ = rQ * (IQ = wQ(QQ, WQ, PQ, gQ - 1, sQ, FQ, jQ)), dQ = 0; dQ < rQ; ++dQ, ++bQ, ++vQ) {
          HQ = sQ[bQ];
          sQ[bQ] = sQ[vQ], sQ[vQ] = HQ
        }
        aQ = FQ[gQ - 1];
        if (FQ[gQ - 1] = FQ[IQ], FQ[IQ] = aQ, JQ < IQ) {
          for (gQ = IQ - 1; PQ < gQ && sQ[rQ * (gQ - 1) + WQ] === jQ;) gQ -= 1;
          gQ += 1
        } else {
          if (!(IQ < JQ)) break;
          for (PQ = IQ + 1; PQ < gQ && sQ[rQ * PQ + WQ] === jQ;) PQ += 1
        }
      }
      return wQ(QQ, WQ, XQ, JQ, sQ, FQ, sQ[rQ * JQ + WQ])
    };
    var wQ = XQ(38613)("lo<p0", ["p0"]),
      qQ = 8;

    function TQ(QQ, WQ, XQ, wQ, qQ, TQ) {
      for (var zQ = 2 * QQ, sQ = zQ * (XQ + 1) + WQ, FQ = XQ + 1; FQ < wQ; ++FQ, sQ += zQ)
        for (var PQ = qQ[sQ], gQ = FQ, JQ = zQ * (FQ - 1); gQ > XQ && qQ[JQ + WQ] > PQ; --gQ, JQ -= zQ) {
          for (var rQ = JQ, IQ = JQ + zQ, jQ = 0; jQ < zQ; ++jQ, ++rQ, ++IQ) {
            var BQ = qQ[rQ];
            qQ[rQ] = qQ[IQ], qQ[IQ] = BQ
          }
          var yQ = TQ[gQ];
          TQ[gQ] = TQ[gQ - 1], TQ[gQ - 1] = yQ
        }
    }
  },
  38613: QQ => {
    QQ.exports = function(QQ, XQ) {
      var wQ = "abcdef".split("").concat(XQ),
        qQ = [];
      QQ.indexOf("lo") >= 0 && qQ.push("lo=e[k+n]");
      QQ.indexOf("hi") >= 0 && qQ.push("hi=e[k+o]");
      return wQ.push(WQ.replace("_", qQ.join()).replace("$", QQ)), Function.apply(void 0, wQ)
    };
    var WQ = "for(var j=2*a,k=j*c,l=k,m=c,n=b,o=a+b,p=c;d>p;++p,k+=j){var _;if($)if(m===p)m+=1,l+=j;else{for(var s=0;j>s;++s){var t=e[k+s];e[k+s]=e[l],e[l++]=t}var u=f[p];f[p]=f[m],f[m++]=u}}return m"
  },
  38589: QQ => {
    QQ.exports = function(QQ, wQ) {
      wQ <= 4 * WQ ? XQ(0, wQ - 1, QQ) : PQ(0, wQ - 1, QQ)
    };
    var WQ = 32;

    function XQ(QQ, WQ, XQ) {
      for (var wQ = 2 * (QQ + 1), qQ = QQ + 1; qQ <= WQ; ++qQ) {
        for (var TQ = XQ[wQ++], zQ = XQ[wQ++], sQ = qQ, FQ = wQ - 2; sQ-- > QQ;) {
          var PQ = XQ[FQ - 2],
            gQ = XQ[FQ - 1];
          if (PQ < TQ) break;
          if (PQ === TQ && gQ < zQ) break;
          XQ[FQ] = PQ, XQ[FQ + 1] = gQ, FQ -= 2
        }
        XQ[FQ] = TQ, XQ[FQ + 1] = zQ
      }
    }

    function wQ(QQ, WQ, XQ) {
      WQ *= 2;
      var wQ = XQ[QQ *= 2],
        qQ = XQ[QQ + 1];
      XQ[QQ] = XQ[WQ], XQ[QQ + 1] = XQ[WQ + 1], XQ[WQ] = wQ, XQ[WQ + 1] = qQ
    }

    function qQ(QQ, WQ, XQ) {
      WQ *= 2, XQ[QQ *= 2] = XQ[WQ], XQ[QQ + 1] = XQ[WQ + 1]
    }

    function TQ(QQ, WQ, XQ, wQ) {
      WQ *= 2, XQ *= 2;
      var qQ = wQ[QQ *= 2],
        TQ = wQ[QQ + 1];
      wQ[QQ] = wQ[WQ], wQ[QQ + 1] = wQ[WQ + 1], wQ[WQ] = wQ[XQ], wQ[WQ + 1] = wQ[XQ + 1], wQ[XQ] = qQ, wQ[XQ + 1] = TQ
    }

    function zQ(QQ, WQ, XQ, wQ, qQ) {
      WQ *= 2, qQ[QQ *= 2] = qQ[WQ], qQ[WQ] = XQ, qQ[QQ + 1] = qQ[WQ + 1], qQ[WQ + 1] = wQ
    }

    function sQ(QQ, WQ, XQ) {
      WQ *= 2;
      var wQ = XQ[QQ *= 2],
        qQ = XQ[WQ];
      return !(wQ < qQ) && (wQ !== qQ || XQ[QQ + 1] > XQ[WQ + 1])
    }

    function FQ(QQ, WQ, XQ, wQ) {
      var qQ = wQ[QQ *= 2];
      return qQ < WQ || qQ === WQ && wQ[QQ + 1] < XQ
    }

    function PQ(QQ, gQ, JQ) {
      var rQ = (gQ - QQ + 1) / 6 | 0,
        IQ = QQ + rQ,
        jQ = gQ - rQ,
        BQ = QQ + gQ >> 1,
        yQ = BQ - rQ,
        VQ = BQ + rQ,
        DQ = IQ,
        pQ = yQ,
        GQ = BQ,
        UQ = VQ,
        bQ = jQ,
        vQ = QQ + 1,
        dQ = gQ - 1,
        HQ = 0;
      sQ(DQ, pQ, JQ) && (HQ = DQ, DQ = pQ, pQ = HQ), sQ(UQ, bQ, JQ) && (HQ = UQ, UQ = bQ, bQ = HQ), sQ(DQ, GQ, JQ) && (HQ = DQ, DQ = GQ, GQ = HQ), sQ(pQ, GQ, JQ) && (HQ = pQ, pQ = GQ, GQ = HQ), sQ(DQ, UQ, JQ) && (HQ = DQ, DQ = UQ, UQ = HQ), sQ(GQ, UQ, JQ) && (HQ = GQ, GQ = UQ, UQ = HQ), sQ(pQ, bQ, JQ) && (HQ = pQ, pQ = bQ, bQ = HQ), sQ(pQ, GQ, JQ) && (HQ = pQ, pQ = GQ, GQ = HQ), sQ(UQ, bQ, JQ) && (HQ = UQ, UQ = bQ, bQ = HQ);
      for (var aQ = JQ[2 * pQ], lQ = JQ[2 * pQ + 1], hQ = JQ[2 * UQ], iQ = JQ[2 * UQ + 1], cQ = 2 * DQ, AQ = 2 * GQ, RQ = 2 * bQ, EQ = 2 * IQ, CQ = 2 * BQ, uQ = 2 * jQ, LQ = 0; LQ < 2; ++LQ) {
        var kQ = JQ[cQ + LQ],
          fQ = JQ[AQ + LQ],
          SQ = JQ[RQ + LQ];
        JQ[EQ + LQ] = kQ, JQ[CQ + LQ] = fQ, JQ[uQ + LQ] = SQ
      }
      qQ(yQ, QQ, JQ), qQ(VQ, gQ, JQ);
      for (var tQ = vQ; tQ <= dQ; ++tQ)
        if (FQ(tQ, aQ, lQ, JQ)) tQ !== vQ && wQ(tQ, vQ, JQ), ++vQ;
        else if (!FQ(tQ, hQ, iQ, JQ))
        for (;;) {
          if (FQ(dQ, hQ, iQ, JQ)) {
            FQ(dQ, aQ, lQ, JQ) ? (TQ(tQ, vQ, dQ, JQ), ++vQ, --dQ) : (wQ(tQ, dQ, JQ), --dQ);
            break
          }
          if (--dQ < tQ) break
        }
      zQ(QQ, vQ - 1, aQ, lQ, JQ), zQ(gQ, dQ + 1, hQ, iQ, JQ), vQ - 2 - QQ <= WQ ? XQ(QQ, vQ - 2, JQ) : PQ(QQ, vQ - 2, JQ), gQ - (dQ + 2) <= WQ ? XQ(dQ + 2, gQ, JQ) : PQ(dQ + 2, gQ, JQ), dQ - vQ <= WQ ? XQ(vQ, dQ, JQ) : PQ(vQ, dQ, JQ)
    }
  },
  38584: (QQ, WQ, XQ) => {
    QQ.exports = {
      init: function(QQ) {
        var WQ = qQ.nextPow2(QQ);
        FQ.length < WQ && (wQ.free(FQ), FQ = wQ.mallocInt32(WQ));
        PQ.length < WQ && (wQ.free(PQ), PQ = wQ.mallocInt32(WQ));
        gQ.length < WQ && (wQ.free(gQ), gQ = wQ.mallocInt32(WQ));
        JQ.length < WQ && (wQ.free(JQ), JQ = wQ.mallocInt32(WQ));
        rQ.length < WQ && (wQ.free(rQ), rQ = wQ.mallocInt32(WQ));
        IQ.length < WQ && (wQ.free(IQ), IQ = wQ.mallocInt32(WQ));
        var XQ = 8 * WQ;
        jQ.length < XQ && (wQ.free(jQ), jQ = wQ.mallocDouble(XQ))
      },
      sweepBipartite: function(QQ, WQ, XQ, wQ, qQ, sQ, rQ, IQ, VQ, DQ) {
        for (var pQ = 0, GQ = 2 * QQ, UQ = QQ - 1, bQ = GQ - 1, vQ = XQ; vQ < wQ; ++vQ) {
          var dQ = sQ[vQ],
            HQ = GQ * vQ;
          jQ[pQ++] = qQ[HQ + UQ], jQ[pQ++] = -(dQ + 1), jQ[pQ++] = qQ[HQ + bQ], jQ[pQ++] = dQ
        }
        for (vQ = rQ; vQ < IQ; ++vQ) {
          dQ = DQ[vQ] + zQ;
          var aQ = GQ * vQ;
          jQ[pQ++] = VQ[aQ + UQ], jQ[pQ++] = -dQ, jQ[pQ++] = VQ[aQ + bQ], jQ[pQ++] = dQ
        }
        var lQ = pQ >>> 1;
        TQ(jQ, lQ);
        var hQ = 0,
          iQ = 0;
        for (vQ = 0; vQ < lQ; ++vQ) {
          var cQ = 0 | jQ[2 * vQ + 1];
          if (cQ >= zQ) BQ(gQ, JQ, iQ--, cQ = cQ - zQ | 0);
          else if (cQ >= 0) BQ(FQ, PQ, hQ--, cQ);
          else if (cQ <= -zQ) {
            cQ = -cQ - zQ | 0;
            for (var AQ = 0; AQ < hQ; ++AQ) {
              if (void 0 !== (RQ = WQ(FQ[AQ], cQ))) return RQ
            }
            yQ(gQ, JQ, iQ++, cQ)
          } else {
            cQ = -cQ - 1 | 0;
            for (AQ = 0; AQ < iQ; ++AQ) {
              var RQ;
              if (void 0 !== (RQ = WQ(cQ, gQ[AQ]))) return RQ
            }
            yQ(FQ, PQ, hQ++, cQ)
          }
        }
      },
      sweepComplete: function(QQ, WQ, XQ, wQ, qQ, zQ, sQ, VQ, DQ, pQ) {
        for (var GQ = 0, UQ = 2 * QQ, bQ = QQ - 1, vQ = UQ - 1, dQ = XQ; dQ < wQ; ++dQ) {
          var HQ = zQ[dQ] + 1 << 1,
            aQ = UQ * dQ;
          jQ[GQ++] = qQ[aQ + bQ], jQ[GQ++] = -HQ, jQ[GQ++] = qQ[aQ + vQ], jQ[GQ++] = HQ
        }
        for (dQ = sQ; dQ < VQ; ++dQ) {
          HQ = pQ[dQ] + 1 << 1;
          var lQ = UQ * dQ;
          jQ[GQ++] = DQ[lQ + bQ], jQ[GQ++] = 1 | -HQ, jQ[GQ++] = DQ[lQ + vQ], jQ[GQ++] = 1 | HQ
        }
        var hQ = GQ >>> 1;
        TQ(jQ, hQ);
        var iQ = 0,
          cQ = 0,
          AQ = 0;
        for (dQ = 0; dQ < hQ; ++dQ) {
          var RQ = 0 | jQ[2 * dQ + 1],
            EQ = 1 & RQ;
          if (dQ < hQ - 1 && RQ >> 1 === jQ[2 * dQ + 3] >> 1 && (EQ = 2, dQ += 1), RQ < 0) {
            for (var CQ = -(RQ >> 1) - 1, uQ = 0; uQ < AQ; ++uQ) {
              if (void 0 !== (LQ = WQ(rQ[uQ], CQ))) return LQ
            }
            if (0 !== EQ)
              for (uQ = 0; uQ < iQ; ++uQ) {
                if (void 0 !== (LQ = WQ(FQ[uQ], CQ))) return LQ
              }
            if (1 !== EQ)
              for (uQ = 0; uQ < cQ; ++uQ) {
                var LQ;
                if (void 0 !== (LQ = WQ(gQ[uQ], CQ))) return LQ
              }
            0 === EQ ? yQ(FQ, PQ, iQ++, CQ) : 1 === EQ ? yQ(gQ, JQ, cQ++, CQ) : 2 === EQ && yQ(rQ, IQ, AQ++, CQ)
          } else {
            CQ = (RQ >> 1) - 1;
            0 === EQ ? BQ(FQ, PQ, iQ--, CQ) : 1 === EQ ? BQ(gQ, JQ, cQ--, CQ) : 2 === EQ && BQ(rQ, IQ, AQ--, CQ)
          }
        }
      },
      scanBipartite: function(QQ, WQ, XQ, wQ, qQ, sQ, gQ, JQ, rQ, IQ, VQ, DQ) {
        var pQ = 0,
          GQ = 2 * QQ,
          UQ = WQ,
          bQ = WQ + QQ,
          vQ = 1,
          dQ = 1;
        wQ ? dQ = zQ : vQ = zQ;
        for (var HQ = qQ; HQ < sQ; ++HQ) {
          var aQ = HQ + vQ,
            lQ = GQ * HQ;
          jQ[pQ++] = gQ[lQ + UQ], jQ[pQ++] = -aQ, jQ[pQ++] = gQ[lQ + bQ], jQ[pQ++] = aQ
        }
        for (HQ = rQ; HQ < IQ; ++HQ) {
          aQ = HQ + dQ;
          var hQ = GQ * HQ;
          jQ[pQ++] = VQ[hQ + UQ], jQ[pQ++] = -aQ
        }
        var iQ = pQ >>> 1;
        TQ(jQ, iQ);
        var cQ = 0;
        for (HQ = 0; HQ < iQ; ++HQ) {
          var AQ = 0 | jQ[2 * HQ + 1];
          if (AQ < 0) {
            var RQ = !1;
            if ((aQ = -AQ) >= zQ ? (RQ = !wQ, aQ -= zQ) : (RQ = !!wQ, aQ -= 1), RQ) yQ(FQ, PQ, cQ++, aQ);
            else {
              var EQ = DQ[aQ],
                CQ = GQ * aQ,
                uQ = VQ[CQ + WQ + 1],
                LQ = VQ[CQ + WQ + 1 + QQ];
              QQ: for (var kQ = 0; kQ < cQ; ++kQ) {
                var fQ = FQ[kQ],
                  SQ = GQ * fQ;
                if (!(LQ < gQ[SQ + WQ + 1] || gQ[SQ + WQ + 1 + QQ] < uQ)) {
                  for (var tQ = WQ + 2; tQ < QQ; ++tQ)
                    if (VQ[CQ + tQ + QQ] < gQ[SQ + tQ] || gQ[SQ + tQ + QQ] < VQ[CQ + tQ]) continue QQ;
                  var oQ, eQ = JQ[fQ];
                  if (void 0 !== (oQ = wQ ? XQ(EQ, eQ) : XQ(eQ, EQ))) return oQ
                }
              }
            }
          } else BQ(FQ, PQ, cQ--, AQ - vQ)
        }
      },
      scanComplete: function(QQ, WQ, XQ, wQ, qQ, sQ, PQ, gQ, JQ, rQ, IQ) {
        for (var BQ = 0, yQ = 2 * QQ, VQ = WQ, DQ = WQ + QQ, pQ = wQ; pQ < qQ; ++pQ) {
          var GQ = pQ + zQ,
            UQ = yQ * pQ;
          jQ[BQ++] = sQ[UQ + VQ], jQ[BQ++] = -GQ, jQ[BQ++] = sQ[UQ + DQ], jQ[BQ++] = GQ
        }
        for (pQ = gQ; pQ < JQ; ++pQ) {
          GQ = pQ + 1;
          var bQ = yQ * pQ;
          jQ[BQ++] = rQ[bQ + VQ], jQ[BQ++] = -GQ
        }
        var vQ = BQ >>> 1;
        TQ(jQ, vQ);
        var dQ = 0;
        for (pQ = 0; pQ < vQ; ++pQ) {
          var HQ = 0 | jQ[2 * pQ + 1];
          if (HQ < 0) {
            if ((GQ = -HQ) >= zQ) FQ[dQ++] = GQ - zQ;
            else {
              var aQ = IQ[GQ -= 1],
                lQ = yQ * GQ,
                hQ = rQ[lQ + WQ + 1],
                iQ = rQ[lQ + WQ + 1 + QQ];
              QQ: for (var cQ = 0; cQ < dQ; ++cQ) {
                var AQ = FQ[cQ],
                  RQ = PQ[AQ];
                if (RQ === aQ) break;
                var EQ = yQ * AQ;
                if (!(iQ < sQ[EQ + WQ + 1] || sQ[EQ + WQ + 1 + QQ] < hQ)) {
                  for (var CQ = WQ + 2; CQ < QQ; ++CQ)
                    if (rQ[lQ + CQ + QQ] < sQ[EQ + CQ] || sQ[EQ + CQ + QQ] < rQ[lQ + CQ]) continue QQ;
                  var uQ = XQ(RQ, aQ);
                  if (void 0 !== uQ) return uQ
                }
              }
            }
          } else {
            for (GQ = HQ - zQ, cQ = dQ - 1; cQ >= 0; --cQ)
              if (FQ[cQ] === GQ) {
                for (CQ = cQ + 1; CQ < dQ; ++CQ) FQ[CQ - 1] = FQ[CQ];
                break
              }-- dQ
          }
        }
      }
    };
    var wQ = XQ(38572),
      qQ = XQ(38576),
      TQ = XQ(38589),
      zQ = 1 << 28,
      sQ = 1024,
      FQ = wQ.mallocInt32(sQ),
      PQ = wQ.mallocInt32(sQ),
      gQ = wQ.mallocInt32(sQ),
      JQ = wQ.mallocInt32(sQ),
      rQ = wQ.mallocInt32(sQ),
      IQ = wQ.mallocInt32(sQ),
      jQ = wQ.mallocDouble(8192);

    function BQ(QQ, WQ, XQ, wQ) {
      var qQ = WQ[wQ],
        TQ = QQ[XQ - 1];
      QQ[qQ] = TQ, WQ[TQ] = qQ
    }

    function yQ(QQ, WQ, XQ, wQ) {
      QQ[XQ] = wQ, WQ[wQ] = XQ
    }
  },
  38580: QQ => {
    function WQ(QQ, XQ, wQ) {
      var qQ = 0 | QQ[wQ];
      if (qQ <= 0) return [];
      var TQ, zQ = new Array(qQ);
      if (wQ === QQ.length - 1)
        for (TQ = 0; TQ < qQ; ++TQ) zQ[TQ] = XQ;
      else
        for (TQ = 0; TQ < qQ; ++TQ) zQ[TQ] = WQ(QQ, XQ, wQ + 1);
      return zQ
    }
    QQ.exports = function(QQ, XQ) {
      switch ("undefined" === typeof XQ && (XQ = 0), typeof QQ) {
        case "number":
          if (QQ > 0) return function(QQ, WQ) {
            var XQ, wQ;
            for (XQ = new Array(QQ), wQ = 0; wQ < QQ; ++wQ) XQ[wQ] = WQ;
            return XQ
          }(0 | QQ, XQ);
          break;
        case "object":
          if ("number" === typeof QQ.length) return WQ(QQ, XQ, 0)
      }
      return []
    }
  },
  38527: (QQ, WQ, XQ) => {
    QQ.exports = function() {
      var QQ = this;
      this.components = {}, this.comps = this.components;
      var WQ = this.components,
        XQ = 1,
        qQ = {},
        TQ = [],
        zQ = [],
        sQ = {
          timeout: !1,
          removals: [],
          multiComps: []
        };

      function FQ(QQ, XQ) {
        var wQ = WQ[XQ],
          TQ = qQ[XQ],
          zQ = TQ.hash[QQ];
        zQ && (TQ.remove(QQ), wQ.JA && (wQ.multi ? (zQ.forEach((WQ => {
          WQ && wQ.JA(QQ, WQ)
        })), zQ.length = 0) : wQ.JA(QQ, zQ)), sQ.removals.push(TQ), PQ())
      }

      function PQ() {
        sQ.timeout || (sQ.timeout = !0, setTimeout(gQ, 1))
      }

      function gQ() {
        sQ.timeout = !1, JQ()
      }

      function JQ() {
        sQ.multiComps.length && function(QQ) {
          for (var WQ = 0; WQ < QQ.length; WQ++) {
            var {
              entID: XQ,
              data: wQ
            } = QQ[WQ], qQ = wQ.hash[XQ];
            if (qQ) {
              for (var TQ = 0; TQ < qQ.length; TQ++) qQ[TQ] || (qQ.splice(TQ, 1), TQ--);
              0 === qQ.length && (wQ.remove(XQ), sQ.removals.push(wQ))
            }
          }
          QQ.length = 0
        }(sQ.multiComps), sQ.removals.length && function(QQ) {
          for (var WQ = 0; WQ < QQ.length; WQ++) {
            QQ[WQ].flush()
          }
          QQ.length = 0
        }(sQ.removals)
      }
      this.PB = qQ, this._systems = TQ, this._renderSystems = zQ, this.ZN = function(WQ) {
        var wQ = XQ++;
        return Array.isArray(WQ) && WQ.forEach((WQ => QQ.sC(wQ, WQ))), wQ
      }, this.deleteEntity = function(WQ) {
        return Object.keys(qQ).forEach((QQ => {
          qQ[QQ].hash[WQ] && FQ(WQ, QQ)
        })), QQ
      }, this.QXQ = function(QQ) {
        if (!QQ) throw new Error("Missing component definition");
        var XQ = QQ.name;
        if (!XQ) throw new Error("Component definition must have a name property.");
        if ("string" !== typeof XQ) throw new Error("Component name must be a string.");
        if ("" === XQ) throw new Error("Component name must be a non-empty string.");
        if (qQ[XQ]) throw new Error(`Component ${XQ} already exists.`);
        var sQ = {};
        return sQ.name = XQ, sQ.multi = !!QQ.multi, sQ.order = isNaN(QQ.order) ? 99 : QQ.order, sQ.stateConstructor = QQ.stateConstructor || null, sQ.state = QQ.state || {}, sQ.PD = QQ.PD || null, sQ.JA = QQ.JA || null, sQ.system = QQ.system || null, sQ.jD = QQ.jD || null, WQ[XQ] = sQ, qQ[XQ] = new wQ, qQ[XQ]._pendingMultiCleanup = !1, qQ[XQ]._multiCleanupIDs = sQ.multi ? [] : null, sQ.system && (TQ.push(XQ), TQ.sort(((QQ, XQ) => WQ[QQ].order - WQ[XQ].order))), sQ.jD && (zQ.push(XQ), zQ.sort(((QQ, XQ) => WQ[QQ].order - WQ[XQ].order))), XQ
      }, this.overwriteComponent = function(QQ, XQ) {
        var wQ = WQ[QQ];
        if (!wQ) throw new Error(`Unknown component: ${QQ}`);
        if (!XQ) throw new Error("Missing component definition");
        if (wQ.name !== XQ.name) throw new Error("Overwriting component must use the same name property.");
        var sQ = {};
        sQ.name = QQ, sQ.multi = !!XQ.multi, sQ.order = isNaN(XQ.order) ? 99 : XQ.order, sQ.state = XQ.state || {}, sQ.PD = XQ.PD || null, sQ.JA = XQ.JA || null, sQ.system = XQ.system || null, sQ.jD = XQ.jD || null, WQ[QQ] = sQ, qQ[QQ]._pendingMultiCleanup = !1, qQ[QQ]._multiCleanupIDs = sQ.multi ? [] : null;
        var FQ = TQ.indexOf(QQ);
        sQ.system && FQ < 0 && TQ.push(QQ), !sQ.system && FQ >= 0 && TQ.splice(FQ, 1), TQ.sort(((QQ, XQ) => WQ[QQ].order - WQ[XQ].order));
        var PQ = zQ.indexOf(QQ);
        sQ.jD && PQ < 0 && zQ.push(QQ), !sQ.jD && PQ >= 0 && zQ.splice(PQ, 1), zQ.sort(((QQ, XQ) => WQ[QQ].order - WQ[XQ].order));
        var gQ = sQ.state;
        return this.WC(QQ).forEach((QQ => {
          for (var WQ in gQ) WQ in QQ || (QQ[WQ] = gQ[WQ]);
          sQ.PD && sQ.PD(QQ.zC, QQ)
        })), QQ
      }, this.deleteComponent = function(XQ) {
        var wQ = qQ[XQ];
        if (!wQ) throw new Error(`Unknown component: ${XQ}`);
        wQ.flush(), wQ.list.forEach((QQ => {
          QQ && FQ(QQ.zC || QQ[0].zC, XQ)
        }));
        var sQ = TQ.indexOf(XQ),
          PQ = zQ.indexOf(XQ);
        return sQ > -1 && TQ.splice(sQ, 1), PQ > -1 && zQ.splice(PQ, 1), qQ[XQ].dispose(), delete qQ[XQ], delete WQ[XQ], QQ
      }, this.sC = function(QQ, XQ, wQ) {
        var TQ, zQ = WQ[XQ],
          sQ = qQ[XQ];
        if (!sQ) throw new Error(`Unknown component: ${XQ}.`);
        if (sQ.hash[QQ] && !zQ.multi) throw new Error(`Entity ${QQ} already has component: ${XQ}.`);
        if (zQ.stateConstructor) {
          if (!(TQ = new zQ.stateConstructor).hasOwnProperty("zC")) throw new Error(`Component ${zQ.name} stateConstructor type does not have property __id`);
          Object.assign(TQ, zQ.state, wQ)
        } else TQ = {
          zC: QQ,
          ...zQ.state,
          ...wQ
        };
        if (TQ.zC = QQ, zQ.multi) {
          var FQ = sQ.hash[QQ];
          FQ || (FQ = [], sQ.add(QQ, FQ)), FQ.push(TQ)
        } else sQ.add(QQ, TQ);
        return zQ.PD && zQ.PD(QQ, TQ), this
      }, this.OQQ = function(QQ, WQ) {
        var XQ = qQ[WQ];
        if (!XQ) throw new Error(`Unknown component: ${WQ}.`);
        return !!XQ.hash[QQ]
      }, this.gC = function(WQ, XQ) {
        if (!qQ[XQ]) throw new Error(`Unknown component: ${XQ}.`);
        return FQ(WQ, XQ), QQ
      }, this.getState = function(QQ, WQ) {
        var XQ = qQ[WQ];
        if (!XQ) throw new Error(`Unknown component: ${WQ}.`);
        return XQ.hash[QQ]
      }, this.WC = function(QQ) {
        var WQ = qQ[QQ];
        if (!WQ) throw new Error(`Unknown component: ${QQ}.`);
        return JQ(), WQ.list
      }, this.AWQ = function(QQ) {
        if (!qQ[QQ]) throw new Error(`Unknown component: ${QQ}.`);
        var WQ = qQ[QQ].hash;
        return QQ => WQ[QQ]
      }, this.kWQ = function(QQ) {
        if (!qQ[QQ]) throw new Error(`Unknown component: ${QQ}.`);
        var WQ = qQ[QQ].hash;
        return QQ => !!WQ[QQ]
      }, this.fJ = function(XQ) {
        JQ();
        for (var wQ = 0; wQ < TQ.length; wQ++) {
          var zQ = TQ[wQ],
            sQ = WQ[zQ],
            FQ = qQ[zQ];
          sQ.system(XQ, FQ.list), JQ()
        }
        return QQ
      }, this.render = function(XQ) {
        JQ();
        for (var wQ = 0; wQ < zQ.length; wQ++) {
          var TQ = zQ[wQ],
            sQ = WQ[TQ],
            FQ = qQ[TQ];
          sQ.jD(XQ, FQ.list), JQ()
        }
        return QQ
      }, this.removeMultiComponent = function(XQ, wQ, TQ) {
        var zQ = WQ[wQ],
          FQ = qQ[wQ];
        if (!FQ) throw new Error(`Unknown component: ${wQ}.`);
        if (!zQ.multi) throw new Error("removeMultiComponent called on non-multi component");
        return function(QQ, WQ, XQ, wQ) {
          var qQ = XQ.hash[QQ];
          if (qQ) {
            var TQ = qQ[wQ];
            TQ && (qQ[wQ] = null, WQ.JA && WQ.JA(QQ, TQ), sQ.multiComps.push({
              entID: QQ,
              data: XQ
            }), PQ())
          }
        }(XQ, zQ, FQ, TQ), QQ
      }
    };
    var wQ = XQ(38535)
  },
  38535: QQ => {
    function WQ(QQ, WQ) {
      var XQ = QQ._map[WQ];
      if (delete QQ.hash[WQ], delete QQ._map[WQ], XQ === QQ.list.length - 1) QQ.list.pop(), QQ._idList.pop();
      else {
        var wQ = QQ.list.pop();
        QQ.list[XQ] = wQ;
        var qQ = QQ._idList.pop();
        QQ._idList[XQ] = qQ, QQ._map[qQ] = XQ
      }
    }
    QQ.exports = class {
      constructor() {
        this.list = [], this.hash = {}, this._map = {}, this._idList = [], this._pendingRemovals = []
      }
      add(QQ, WQ) {
        if ("number" === typeof this._map[QQ]) {
          var XQ = this._map[QQ];
          this.hash[QQ] = WQ, this.list[XQ] = WQ, this._idList[XQ] = QQ
        } else this._map[QQ] = this.list.length, this.hash[QQ] = WQ, this.list.push(WQ), this._idList.push(QQ)
      }
      remove(QQ) {
        var WQ = this._map[QQ];
        this.hash[QQ] = null, this.list[WQ] = null, this._pendingRemovals.push(QQ)
      }
      dispose() {
        this.list = null, this.hash = null, this._map = null, this._idList = null, this._pendingRemovals.length = 0
      }
      flush() {
        for (var QQ = 0; QQ < this._pendingRemovals.length; QQ++) {
          var XQ = this._pendingRemovals[QQ];
          null === this.hash[XQ] && WQ(this, XQ)
        }
        this._pendingRemovals.length = 0
      }
    }
  },
  38329: (QQ, WQ, XQ) => {
    QQ = XQ.nmd(QQ);
    var wQ = "__lodash_hash_undefined__",
      qQ = 9007199254740991,
      TQ = "[object Arguments]",
      zQ = "[object Boolean]",
      sQ = "[object Date]",
      FQ = "[object Function]",
      PQ = "[object GeneratorFunction]",
      gQ = "[object Map]",
      JQ = "[object Number]",
      rQ = "[object Object]",
      IQ = "[object Promise]",
      jQ = "[object RegExp]",
      BQ = "[object Set]",
      yQ = "[object String]",
      VQ = "[object Symbol]",
      DQ = "[object WeakMap]",
      pQ = "[object ArrayBuffer]",
      GQ = "[object DataView]",
      UQ = "[object Float32Array]",
      bQ = "[object Float64Array]",
      vQ = "[object Int8Array]",
      dQ = "[object Int16Array]",
      HQ = "[object Int32Array]",
      aQ = "[object Uint8Array]",
      lQ = "[object Uint8ClampedArray]",
      hQ = "[object Uint16Array]",
      iQ = "[object Uint32Array]",
      cQ = /\w*$/,
      AQ = /^\[object .+?Constructor\]$/,
      RQ = /^(?:0|[1-9]\d*)$/,
      EQ = {};
    EQ[TQ] = EQ["[object Array]"] = EQ[pQ] = EQ[GQ] = EQ[zQ] = EQ[sQ] = EQ[UQ] = EQ[bQ] = EQ[vQ] = EQ[dQ] = EQ[HQ] = EQ[gQ] = EQ[JQ] = EQ[rQ] = EQ[jQ] = EQ[BQ] = EQ[yQ] = EQ[VQ] = EQ[aQ] = EQ[lQ] = EQ[hQ] = EQ[iQ] = !0, EQ["[object Error]"] = EQ[FQ] = EQ[DQ] = !1;
    var CQ = "object" == typeof XQ.g && XQ.g && XQ.g.Object === Object && XQ.g,
      uQ = "object" == typeof self && self && self.Object === Object && self,
      LQ = CQ || uQ || Function("return this")(),
      kQ = WQ && !WQ.nodeType && WQ,
      fQ = kQ && QQ && !QQ.nodeType && QQ,
      SQ = fQ && fQ.exports === kQ;

    function tQ(QQ, WQ) {
      return QQ.set(WQ[0], WQ[1]), QQ
    }

    function oQ(QQ, WQ) {
      return QQ.add(WQ), QQ
    }

    function eQ(QQ, WQ, XQ, wQ) {
      var qQ = -1,
        TQ = QQ ? QQ.length : 0;
      for (wQ && TQ && (XQ = QQ[++qQ]); ++qQ < TQ;) XQ = WQ(XQ, QQ[qQ], qQ, QQ);
      return XQ
    }

    function nQ(QQ) {
      var WQ = !1;
      if (null != QQ && "function" != typeof QQ.toString) try {
        WQ = !!(QQ + "")
      } catch (XQ) {}
      return WQ
    }

    function xQ(QQ) {
      var WQ = -1,
        XQ = Array(QQ.size);
      return QQ.forEach((function(QQ, wQ) {
        XQ[++WQ] = [wQ, QQ]
      })), XQ
    }

    function YQ(QQ, WQ) {
      return function(XQ) {
        return QQ(WQ(XQ))
      }
    }

    function NQ(QQ) {
      var WQ = -1,
        XQ = Array(QQ.size);
      return QQ.forEach((function(QQ) {
        XQ[++WQ] = QQ
      })), XQ
    }
    var ZQ = Array.prototype,
      OQ = Function.prototype,
      KQ = Object.prototype,
      mQ = LQ["__core-js_shared__"],
      MQ = function() {
        var QQ = /[^.]+$/.exec(mQ && mQ.keys && mQ.keys.IE_PROTO || "");
        return QQ ? "Symbol(src)_1." + QQ : ""
      }(),
      QW = OQ.toString,
      WW = KQ.hasOwnProperty,
      XW = KQ.toString,
      wW = RegExp("^" + QW.call(WW).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
      qW = SQ ? LQ.Tj : void 0,
      TW = LQ.Symbol,
      zW = LQ.Uint8Array,
      sW = YQ(Object.getPrototypeOf, Object),
      FW = Object.create,
      PW = KQ.propertyIsEnumerable,
      gW = ZQ.splice,
      JW = Object.getOwnPropertySymbols,
      rW = qW ? qW.isBuffer : void 0,
      IW = YQ(Object.keys, Object),
      jW = SW(LQ, "DataView"),
      BW = SW(LQ, "Map"),
      yW = SW(LQ, "Promise"),
      VW = SW(LQ, "Set"),
      DW = SW(LQ, "WeakMap"),
      pW = SW(Object, "create"),
      GW = xW(jW),
      UW = xW(BW),
      bW = xW(yW),
      vW = xW(VW),
      dW = xW(DW),
      HW = TW ? TW.prototype : void 0,
      aW = HW ? HW.valueOf : void 0;

    function lW(QQ) {
      var WQ = -1,
        XQ = QQ ? QQ.length : 0;
      for (this.clear(); ++WQ < XQ;) {
        var wQ = QQ[WQ];
        this.set(wQ[0], wQ[1])
      }
    }

    function hW(QQ) {
      var WQ = -1,
        XQ = QQ ? QQ.length : 0;
      for (this.clear(); ++WQ < XQ;) {
        var wQ = QQ[WQ];
        this.set(wQ[0], wQ[1])
      }
    }

    function iW(QQ) {
      var WQ = -1,
        XQ = QQ ? QQ.length : 0;
      for (this.clear(); ++WQ < XQ;) {
        var wQ = QQ[WQ];
        this.set(wQ[0], wQ[1])
      }
    }

    function cW(QQ) {
      this.__data__ = new hW(QQ)
    }

    function AW(QQ, WQ) {
      var XQ = NW(QQ) || function(QQ) {
          return function(QQ) {
            return function(QQ) {
              return !!QQ && "object" == typeof QQ
            }(QQ) && ZW(QQ)
          }(QQ) && WW.call(QQ, "callee") && (!PW.call(QQ, "callee") || XW.call(QQ) == TQ)
        }(QQ) ? function(QQ, WQ) {
          for (var XQ = -1, wQ = Array(QQ); ++XQ < QQ;) wQ[XQ] = WQ(XQ);
          return wQ
        }(QQ.length, String) : [],
        wQ = XQ.length,
        qQ = !!wQ;
      for (var zQ in QQ) !WQ && !WW.call(QQ, zQ) || qQ && ("length" == zQ || eW(zQ, wQ)) || XQ.push(zQ);
      return XQ
    }

    function RW(QQ, WQ, XQ) {
      var wQ = QQ[WQ];
      WW.call(QQ, WQ) && YW(wQ, XQ) && (void 0 !== XQ || WQ in QQ) || (QQ[WQ] = XQ)
    }

    function EW(QQ, WQ) {
      for (var XQ = QQ.length; XQ--;)
        if (YW(QQ[XQ][0], WQ)) return XQ;
      return -1
    }

    function CW(QQ, WQ, XQ, wQ, qQ, IQ, DQ) {
      var AQ;
      if (wQ && (AQ = IQ ? wQ(QQ, qQ, IQ, DQ) : wQ(QQ)), void 0 !== AQ) return AQ;
      if (!mW(QQ)) return QQ;
      var RQ = NW(QQ);
      if (RQ) {
        if (AQ = function(QQ) {
            var WQ = QQ.length,
              XQ = QQ.constructor(WQ);
            WQ && "string" == typeof QQ[0] && WW.call(QQ, "index") && (XQ.index = QQ.index, XQ.input = QQ.input);
            return XQ
          }(QQ), !WQ) return function(QQ, WQ) {
          var XQ = -1,
            wQ = QQ.length;
          WQ || (WQ = Array(wQ));
          for (; ++XQ < wQ;) WQ[XQ] = QQ[XQ];
          return WQ
        }(QQ, AQ)
      } else {
        var CQ = oW(QQ),
          uQ = CQ == FQ || CQ == PQ;
        if (OW(QQ)) return function(QQ, WQ) {
          if (WQ) return QQ.slice();
          var XQ = new QQ.constructor(QQ.length);
          return QQ.copy(XQ), XQ
        }(QQ, WQ);
        if (CQ == rQ || CQ == TQ || uQ && !IQ) {
          if (nQ(QQ)) return IQ ? QQ : {};
          if (AQ = function(QQ) {
              return "function" != typeof QQ.constructor || nW(QQ) ? {} : (WQ = sW(QQ), mW(WQ) ? FW(WQ) : {});
              var WQ
            }(uQ ? {} : QQ), !WQ) return function(QQ, WQ) {
            return kW(QQ, tW(QQ), WQ)
          }(QQ, function(QQ, WQ) {
            return QQ && kW(WQ, MW(WQ), QQ)
          }(AQ, QQ))
        } else {
          if (!EQ[CQ]) return IQ ? QQ : {};
          AQ = function(QQ, WQ, XQ, wQ) {
            var qQ = QQ.constructor;
            switch (WQ) {
              case pQ:
                return LW(QQ);
              case zQ:
              case sQ:
                return new qQ(+QQ);
              case GQ:
                return function(QQ, WQ) {
                  var XQ = WQ ? LW(QQ.buffer) : QQ.buffer;
                  return new QQ.constructor(XQ, QQ.byteOffset, QQ.byteLength)
                }(QQ, wQ);
              case UQ:
              case bQ:
              case vQ:
              case dQ:
              case HQ:
              case aQ:
              case lQ:
              case hQ:
              case iQ:
                return function(QQ, WQ) {
                  var XQ = WQ ? LW(QQ.buffer) : QQ.buffer;
                  return new QQ.constructor(XQ, QQ.byteOffset, QQ.length)
                }(QQ, wQ);
              case gQ:
                return function(QQ, WQ, XQ) {
                  var wQ = WQ ? XQ(xQ(QQ), !0) : xQ(QQ);
                  return eQ(wQ, tQ, new QQ.constructor)
                }(QQ, wQ, XQ);
              case JQ:
              case yQ:
                return new qQ(QQ);
              case jQ:
                return function(QQ) {
                  var WQ = new QQ.constructor(QQ.source, cQ.exec(QQ));
                  return WQ.lastIndex = QQ.lastIndex, WQ
                }(QQ);
              case BQ:
                return function(QQ, WQ, XQ) {
                  var wQ = WQ ? XQ(NQ(QQ), !0) : NQ(QQ);
                  return eQ(wQ, oQ, new QQ.constructor)
                }(QQ, wQ, XQ);
              case VQ:
                return TQ = QQ, aW ? Object(aW.call(TQ)) : {}
            }
            var TQ
          }(QQ, CQ, CW, WQ)
        }
      }
      DQ || (DQ = new cW);
      var LQ = DQ.get(QQ);
      if (LQ) return LQ;
      if (DQ.set(QQ, AQ), !RQ) var kQ = XQ ? function(QQ) {
        return function(QQ, WQ, XQ) {
          var wQ = WQ(QQ);
          return NW(QQ) ? wQ : function(QQ, WQ) {
            for (var XQ = -1, wQ = WQ.length, qQ = QQ.length; ++XQ < wQ;) QQ[qQ + XQ] = WQ[XQ];
            return QQ
          }(wQ, XQ(QQ))
        }(QQ, MW, tW)
      }(QQ) : MW(QQ);
      return function(QQ, WQ) {
        for (var XQ = -1, wQ = QQ ? QQ.length : 0; ++XQ < wQ && !1 !== WQ(QQ[XQ], XQ, QQ););
      }(kQ || QQ, (function(qQ, TQ) {
        kQ && (qQ = QQ[TQ = qQ]), RW(AQ, TQ, CW(qQ, WQ, XQ, wQ, TQ, QQ, DQ))
      })), AQ
    }

    function uW(QQ) {
      return !(!mW(QQ) || (WQ = QQ, MQ && MQ in WQ)) && (KW(QQ) || nQ(QQ) ? wW : AQ).test(xW(QQ));
      var WQ
    }

    function LW(QQ) {
      var WQ = new QQ.constructor(QQ.byteLength);
      return new zW(WQ).set(new zW(QQ)), WQ
    }

    function kW(QQ, WQ, XQ, wQ) {
      XQ || (XQ = {});
      for (var qQ = -1, TQ = WQ.length; ++qQ < TQ;) {
        var zQ = WQ[qQ],
          sQ = wQ ? wQ(XQ[zQ], QQ[zQ], zQ, XQ, QQ) : void 0;
        RW(XQ, zQ, void 0 === sQ ? QQ[zQ] : sQ)
      }
      return XQ
    }

    function fW(QQ, WQ) {
      var XQ = QQ.__data__;
      return function(QQ) {
        var WQ = typeof QQ;
        return "string" == WQ || "number" == WQ || "symbol" == WQ || "boolean" == WQ ? "__proto__" !== QQ : null === QQ
      }(WQ) ? XQ["string" == typeof WQ ? "string" : "hash"] : XQ.map
    }

    function SW(QQ, WQ) {
      var XQ = function(QQ, WQ) {
        return null == QQ ? void 0 : QQ[WQ]
      }(QQ, WQ);
      return uW(XQ) ? XQ : void 0
    }
    lW.prototype.clear = function() {
      this.__data__ = pW ? pW(null) : {}
    }, lW.prototype.delete = function(QQ) {
      return this.has(QQ) && delete this.__data__[QQ]
    }, lW.prototype.get = function(QQ) {
      var WQ = this.__data__;
      if (pW) {
        var XQ = WQ[QQ];
        return XQ === wQ ? void 0 : XQ
      }
      return WW.call(WQ, QQ) ? WQ[QQ] : void 0
    }, lW.prototype.has = function(QQ) {
      var WQ = this.__data__;
      return pW ? void 0 !== WQ[QQ] : WW.call(WQ, QQ)
    }, lW.prototype.set = function(QQ, WQ) {
      return this.__data__[QQ] = pW && void 0 === WQ ? wQ : WQ, this
    }, hW.prototype.clear = function() {
      this.__data__ = []
    }, hW.prototype.delete = function(QQ) {
      var WQ = this.__data__,
        XQ = EW(WQ, QQ);
      return !(XQ < 0) && (XQ == WQ.length - 1 ? WQ.pop() : gW.call(WQ, XQ, 1), !0)
    }, hW.prototype.get = function(QQ) {
      var WQ = this.__data__,
        XQ = EW(WQ, QQ);
      return XQ < 0 ? void 0 : WQ[XQ][1]
    }, hW.prototype.has = function(QQ) {
      return EW(this.__data__, QQ) > -1
    }, hW.prototype.set = function(QQ, WQ) {
      var XQ = this.__data__,
        wQ = EW(XQ, QQ);
      return wQ < 0 ? XQ.push([QQ, WQ]) : XQ[wQ][1] = WQ, this
    }, iW.prototype.clear = function() {
      this.__data__ = {
        hash: new lW,
        map: new(BW || hW),
        string: new lW
      }
    }, iW.prototype.delete = function(QQ) {
      return fW(this, QQ).delete(QQ)
    }, iW.prototype.get = function(QQ) {
      return fW(this, QQ).get(QQ)
    }, iW.prototype.has = function(QQ) {
      return fW(this, QQ).has(QQ)
    }, iW.prototype.set = function(QQ, WQ) {
      return fW(this, QQ).set(QQ, WQ), this
    }, cW.prototype.clear = function() {
      this.__data__ = new hW
    }, cW.prototype.delete = function(QQ) {
      return this.__data__.delete(QQ)
    }, cW.prototype.get = function(QQ) {
      return this.__data__.get(QQ)
    }, cW.prototype.has = function(QQ) {
      return this.__data__.has(QQ)
    }, cW.prototype.set = function(QQ, WQ) {
      var XQ = this.__data__;
      if (XQ instanceof hW) {
        var wQ = XQ.__data__;
        if (!BW || wQ.length < 199) return wQ.push([QQ, WQ]), this;
        XQ = this.__data__ = new iW(wQ)
      }
      return XQ.set(QQ, WQ), this
    };
    var tW = JW ? YQ(JW, Object) : function() {
        return []
      },
      oW = function(QQ) {
        return XW.call(QQ)
      };

    function eW(QQ, WQ) {
      return !!(WQ = null == WQ ? qQ : WQ) && ("number" == typeof QQ || RQ.test(QQ)) && QQ > -1 && QQ % 1 == 0 && QQ < WQ
    }

    function nW(QQ) {
      var WQ = QQ && QQ.constructor;
      return QQ === ("function" == typeof WQ && WQ.prototype || KQ)
    }

    function xW(QQ) {
      if (null != QQ) {
        try {
          return QW.call(QQ)
        } catch (WQ) {}
        try {
          return QQ + ""
        } catch (WQ) {}
      }
      return ""
    }

    function YW(QQ, WQ) {
      return QQ === WQ || QQ !== QQ && WQ !== WQ
    }(jW && oW(new jW(new ArrayBuffer(1))) != GQ || BW && oW(new BW) != gQ || yW && oW(yW.resolve()) != IQ || VW && oW(new VW) != BQ || DW && oW(new DW) != DQ) && (oW = function(QQ) {
      var WQ = XW.call(QQ),
        XQ = WQ == rQ ? QQ.constructor : void 0,
        wQ = XQ ? xW(XQ) : void 0;
      if (wQ) switch (wQ) {
        case GW:
          return GQ;
        case UW:
          return gQ;
        case bW:
          return IQ;
        case vW:
          return BQ;
        case dW:
          return DQ
      }
      return WQ
    });
    var NW = Array.isArray;

    function ZW(QQ) {
      return null != QQ && function(QQ) {
        return "number" == typeof QQ && QQ > -1 && QQ % 1 == 0 && QQ <= qQ
      }(QQ.length) && !KW(QQ)
    }
    var OW = rW || function() {
      return !1
    };

    function KW(QQ) {
      var WQ = mW(QQ) ? XW.call(QQ) : "";
      return WQ == FQ || WQ == PQ
    }

    function mW(QQ) {
      var WQ = typeof QQ;
      return !!QQ && ("object" == WQ || "function" == WQ)
    }

    function MW(QQ) {
      return ZW(QQ) ? AW(QQ) : function(QQ) {
        if (!nW(QQ)) return IW(QQ);
        var WQ = [];
        for (var XQ in Object(QQ)) WW.call(QQ, XQ) && "constructor" != XQ && WQ.push(XQ);
        return WQ
      }(QQ)
    }
    QQ.exports = function(QQ) {
      return CW(QQ, !0, !0)
    }
  },
  38728: QQ => {
    function WQ(QQ, WQ, XQ) {
      for (var wQ = QQ.length, qQ = -1 / 0, TQ = 1 / 0, zQ = 0; zQ < wQ; zQ++) {
        var sQ = (XQ[0][zQ] - QQ[zQ]) / WQ[zQ],
          FQ = (XQ[1][zQ] - QQ[zQ]) / WQ[zQ];
        if (sQ > FQ) {
          var PQ = sQ;
          sQ = FQ, FQ = PQ
        }
        if (FQ < qQ || sQ > TQ) return 1 / 0;
        sQ > qQ && (qQ = sQ), FQ < TQ && (TQ = FQ)
      }
      return qQ > TQ ? 1 / 0 : qQ
    }
    QQ.exports = function(QQ, XQ, wQ, qQ) {
      var TQ = WQ(XQ, wQ, qQ);
      if (TQ === 1 / 0) QQ = null;
      else {
        QQ = QQ || [];
        for (var zQ = 0; zQ < XQ.length; zQ++) QQ[zQ] = XQ[zQ] + wQ[zQ] * TQ
      }
      return QQ
    }, QQ.exports.distance = WQ
  },
  38002: (QQ, WQ, XQ) => {
    var wQ = XQ(38010);

    function qQ(QQ) {
      for (var WQ, XQ, qQ = 0, TQ = QQ.length, zQ = 0; zQ < QQ.length;) {
        for (WQ = QQ[zQ], XQ = 0; zQ < TQ && QQ[zQ] === WQ;) ++zQ, ++XQ;
        qQ += wQ.log2(XQ) / 7 | 0, qQ += wQ.log2(WQ >>> 0) / 7 | 0, qQ += 2
      }
      return qQ
    }
    WQ.size = qQ, WQ.encode = function(QQ, WQ) {
      WQ || (WQ = new Uint8Array(qQ(QQ)));
      for (var XQ, wQ, TQ = 0, zQ = WQ.length, sQ = 0; sQ < QQ.length;) {
        for (XQ = QQ[sQ], wQ = 0; sQ < QQ.length && QQ[sQ] === XQ;) ++sQ, ++wQ;
        for (; TQ < zQ && wQ >= 128;) WQ[TQ++] = 128 + (127 & wQ), wQ >>>= 7;
        if (TQ >= zQ) throw new Error("RLE buffer overflow");
        for (WQ[TQ++] = wQ, XQ >>>= 0; TQ < zQ && XQ >= 128;) WQ[TQ++] = 128 + (127 & XQ), XQ >>>= 7;
        if (TQ >= zQ) throw new Error("RLE buffer overflow");
        WQ[TQ++] = XQ
      }
      return WQ
    }, WQ.decode = function(QQ, WQ) {
      for (var XQ, wQ, qQ, TQ, zQ = WQ.length, sQ = QQ.length, FQ = 0, PQ = 0; PQ < sQ;) {
        for (XQ = 0, wQ = 0; PQ < sQ && QQ[PQ] >= 128;) XQ += (127 & QQ[PQ++]) << wQ, wQ += 7;
        if (XQ += QQ[PQ++] << wQ, PQ >= sQ) throw new Error("RLE buffer underrun");
        if (FQ + XQ > zQ) throw new Error("Chunk buffer overflow");
        for (qQ = 0, wQ = 0; PQ < sQ && QQ[PQ] >= 128;) qQ += (127 & QQ[PQ++]) << wQ, wQ += 7;
        if (PQ >= sQ) throw new Error("RLE buffer underrun");
        for (qQ += QQ[PQ++] << wQ, TQ = 0; TQ < XQ; ++TQ) WQ[FQ++] = qQ
      }
      return WQ
    }
  },
  38010: (QQ, WQ) => {
    function XQ(QQ) {
      var WQ = 32;
      return (QQ &= -QQ) && WQ--, 65535 & QQ && (WQ -= 16), 16711935 & QQ && (WQ -= 8), 252645135 & QQ && (WQ -= 4), 858993459 & QQ && (WQ -= 2), 1431655765 & QQ && (WQ -= 1), WQ
    }
    WQ.INT_BITS = 32, WQ.INT_MAX = 2147483647, WQ.INT_MIN = -1 << 31, WQ.sign = function(QQ) {
      return (QQ > 0) - (QQ < 0)
    }, WQ.abs = function(QQ) {
      var WQ = QQ >> 31;
      return (QQ ^ WQ) - WQ
    }, WQ.min = function(QQ, WQ) {
      return WQ ^ (QQ ^ WQ) & -(QQ < WQ)
    }, WQ.max = function(QQ, WQ) {
      return QQ ^ (QQ ^ WQ) & -(QQ < WQ)
    }, WQ.isPow2 = function(QQ) {
      return !(QQ & QQ - 1) && !!QQ
    }, WQ.log2 = function(QQ) {
      var WQ, XQ;
      return WQ = (QQ > 65535) << 4, WQ |= XQ = ((QQ >>>= WQ) > 255) << 3, WQ |= XQ = ((QQ >>>= XQ) > 15) << 2, (WQ |= XQ = ((QQ >>>= XQ) > 3) << 1) | (QQ >>>= XQ) >> 1
    }, WQ.log10 = function(QQ) {
      return QQ >= 1e9 ? 9 : QQ >= 1e8 ? 8 : QQ >= 1e7 ? 7 : QQ >= 1e6 ? 6 : QQ >= 1e5 ? 5 : QQ >= 1e4 ? 4 : QQ >= 1e3 ? 3 : QQ >= 100 ? 2 : QQ >= 10 ? 1 : 0
    }, WQ.popCount = function(QQ) {
      return 16843009 * ((QQ = (858993459 & (QQ -= QQ >>> 1 & 1431655765)) + (QQ >>> 2 & 858993459)) + (QQ >>> 4) & 252645135) >>> 24
    }, WQ.countTrailingZeros = XQ, WQ.nextPow2 = function(QQ) {
      return QQ += 0 === QQ, --QQ, QQ |= QQ >>> 1, QQ |= QQ >>> 2, QQ |= QQ >>> 4, QQ |= QQ >>> 8, (QQ |= QQ >>> 16) + 1
    }, WQ.prevPow2 = function(QQ) {
      return QQ |= QQ >>> 1, QQ |= QQ >>> 2, QQ |= QQ >>> 4, QQ |= QQ >>> 8, (QQ |= QQ >>> 16) - (QQ >>> 1)
    }, WQ.parity = function(QQ) {
      return QQ ^= QQ >>> 16, QQ ^= QQ >>> 8, QQ ^= QQ >>> 4, 27030 >>> (QQ &= 15) & 1
    };
    var wQ = new Array(256);
    ! function(QQ) {
      for (var WQ = 0; WQ < 256; ++WQ) {
        var XQ = WQ,
          wQ = WQ,
          qQ = 7;
        for (XQ >>>= 1; XQ; XQ >>>= 1) wQ <<= 1, wQ |= 1 & XQ, --qQ;
        QQ[WQ] = wQ << qQ & 255
      }
    }(wQ), WQ.reverse = function(QQ) {
      return wQ[255 & QQ] << 24 | wQ[QQ >>> 8 & 255] << 16 | wQ[QQ >>> 16 & 255] << 8 | wQ[QQ >>> 24 & 255]
    }, WQ.interleave2 = function(QQ, WQ) {
      return (QQ = 1431655765 & ((QQ = 858993459 & ((QQ = 252645135 & ((QQ = 16711935 & ((QQ &= 65535) | QQ << 8)) | QQ << 4)) | QQ << 2)) | QQ << 1)) | (WQ = 1431655765 & ((WQ = 858993459 & ((WQ = 252645135 & ((WQ = 16711935 & ((WQ &= 65535) | WQ << 8)) | WQ << 4)) | WQ << 2)) | WQ << 1)) << 1
    }, WQ.deinterleave2 = function(QQ, WQ) {
      return (QQ = 65535 & ((QQ = 16711935 & ((QQ = 252645135 & ((QQ = 858993459 & ((QQ = QQ >>> WQ & 1431655765) | QQ >>> 1)) | QQ >>> 2)) | QQ >>> 4)) | QQ >>> 16)) << 16 >> 16
    }, WQ.interleave3 = function(QQ, WQ, XQ) {
      return QQ = 1227133513 & ((QQ = 3272356035 & ((QQ = 251719695 & ((QQ = 4278190335 & ((QQ &= 1023) | QQ << 16)) | QQ << 8)) | QQ << 4)) | QQ << 2), (QQ |= (WQ = 1227133513 & ((WQ = 3272356035 & ((WQ = 251719695 & ((WQ = 4278190335 & ((WQ &= 1023) | WQ << 16)) | WQ << 8)) | WQ << 4)) | WQ << 2)) << 1) | (XQ = 1227133513 & ((XQ = 3272356035 & ((XQ = 251719695 & ((XQ = 4278190335 & ((XQ &= 1023) | XQ << 16)) | XQ << 8)) | XQ << 4)) | XQ << 2)) << 2
    }, WQ.deinterleave3 = function(QQ, WQ) {
      return (QQ = 1023 & ((QQ = 4278190335 & ((QQ = 251719695 & ((QQ = 3272356035 & ((QQ = QQ >>> WQ & 1227133513) | QQ >>> 2)) | QQ >>> 4)) | QQ >>> 8)) | QQ >>> 16)) << 22 >> 22
    }, WQ.nextCombination = function(QQ) {
      var WQ = QQ | QQ - 1;
      return WQ + 1 | (~WQ & -~WQ) - 1 >>> XQ(QQ) + 1
    }
  },
  37539: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      Color3: () => wQ.b,
      d: () => wQ.d
    });
    var wQ = XQ(37546);
    (0, wQ.h)()
  },
  38041: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => qQ
    });
    var wQ = XQ(38047);
    class qQ {
      static GetPlanes(QQ) {
        const WQ = [];
        for (let XQ = 0; XQ < 6; XQ++) WQ.push(new wQ.b(0, 0, 0, 0));
        return qQ.GetPlanesToRef(QQ, WQ), WQ
      }
      static GetNearPlaneToRef(QQ, WQ) {
        const XQ = QQ.m;
        WQ.normal.x = XQ[3] + XQ[2], WQ.normal.y = XQ[7] + XQ[6], WQ.normal.z = XQ[11] + XQ[10], WQ.d = XQ[15] + XQ[14], WQ.normalize()
      }
      static GetFarPlaneToRef(QQ, WQ) {
        const XQ = QQ.m;
        WQ.normal.x = XQ[3] - XQ[2], WQ.normal.y = XQ[7] - XQ[6], WQ.normal.z = XQ[11] - XQ[10], WQ.d = XQ[15] - XQ[14], WQ.normalize()
      }
      static GetLeftPlaneToRef(QQ, WQ) {
        const XQ = QQ.m;
        WQ.normal.x = XQ[3] + XQ[0], WQ.normal.y = XQ[7] + XQ[4], WQ.normal.z = XQ[11] + XQ[8], WQ.d = XQ[15] + XQ[12], WQ.normalize()
      }
      static GetRightPlaneToRef(QQ, WQ) {
        const XQ = QQ.m;
        WQ.normal.x = XQ[3] - XQ[0], WQ.normal.y = XQ[7] - XQ[4], WQ.normal.z = XQ[11] - XQ[8], WQ.d = XQ[15] - XQ[12], WQ.normalize()
      }
      static GetTopPlaneToRef(QQ, WQ) {
        const XQ = QQ.m;
        WQ.normal.x = XQ[3] - XQ[1], WQ.normal.y = XQ[7] - XQ[5], WQ.normal.z = XQ[11] - XQ[9], WQ.d = XQ[15] - XQ[13], WQ.normalize()
      }
      static GetBottomPlaneToRef(QQ, WQ) {
        const XQ = QQ.m;
        WQ.normal.x = XQ[3] + XQ[1], WQ.normal.y = XQ[7] + XQ[5], WQ.normal.z = XQ[11] + XQ[9], WQ.d = XQ[15] + XQ[13], WQ.normalize()
      }
      static GetPlanesToRef(QQ, WQ) {
        qQ.GetNearPlaneToRef(QQ, WQ[0]), qQ.GetFarPlaneToRef(QQ, WQ[1]), qQ.GetLeftPlaneToRef(QQ, WQ[2]), qQ.GetRightPlaneToRef(QQ, WQ[3]), qQ.GetTopPlaneToRef(QQ, WQ[4]), qQ.GetBottomPlaneToRef(QQ, WQ[5])
      }
      static IsPointInFrustum(QQ, WQ) {
        for (let XQ = 0; XQ < 6; XQ++)
          if (WQ[XQ].dotCoordinate(QQ) < 0) return !1;
        return !0
      }
    }
  },
  38047: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => qQ
    });
    var wQ = XQ(37370);
    class qQ {
      constructor(QQ, WQ, XQ, qQ) {
        this.normal = new wQ.s(QQ, WQ, XQ), this.d = qQ
      }
      awQ() {
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
        let WQ = 0;
        return 0 !== QQ && (WQ = 1 / QQ), this.normal.x *= WQ, this.normal.y *= WQ, this.normal.z *= WQ, this.d *= WQ, this
      }
      transform(QQ) {
        const WQ = qQ._TmpMatrix;
        QQ.invertToRef(WQ);
        const XQ = WQ.m,
          wQ = this.normal.x,
          TQ = this.normal.y,
          zQ = this.normal.z,
          sQ = this.d,
          FQ = wQ * XQ[0] + TQ * XQ[1] + zQ * XQ[2] + sQ * XQ[3],
          PQ = wQ * XQ[4] + TQ * XQ[5] + zQ * XQ[6] + sQ * XQ[7],
          gQ = wQ * XQ[8] + TQ * XQ[9] + zQ * XQ[10] + sQ * XQ[11],
          JQ = wQ * XQ[12] + TQ * XQ[13] + zQ * XQ[14] + sQ * XQ[15];
        return new qQ(FQ, PQ, gQ, JQ)
      }
      dotCoordinate(QQ) {
        return this.normal.x * QQ.x + this.normal.y * QQ.y + this.normal.z * QQ.z + this.d
      }
      copyFromPoints(QQ, WQ, XQ) {
        const wQ = WQ.x - QQ.x,
          qQ = WQ.y - QQ.y,
          TQ = WQ.z - QQ.z,
          zQ = XQ.x - QQ.x,
          sQ = XQ.y - QQ.y,
          FQ = XQ.z - QQ.z,
          PQ = qQ * FQ - TQ * sQ,
          gQ = TQ * zQ - wQ * FQ,
          JQ = wQ * sQ - qQ * zQ,
          rQ = Math.sqrt(PQ * PQ + gQ * gQ + JQ * JQ);
        let IQ;
        return IQ = 0 !== rQ ? 1 / rQ : 0, this.normal.x = PQ * IQ, this.normal.y = gQ * IQ, this.normal.z = JQ * IQ, this.d = -(this.normal.x * QQ.x + this.normal.y * QQ.y + this.normal.z * QQ.z), this
      }
      isFrontFacingTo(QQ, WQ) {
        return wQ.s.Dot(this.normal, QQ) <= WQ
      }
      signedDistanceTo(QQ) {
        return wQ.s.Dot(QQ, this.normal) + this.d
      }
      static FromArray(QQ) {
        return new qQ(QQ[0], QQ[1], QQ[2], QQ[3])
      }
      static FromPoints(QQ, WQ, XQ) {
        const wQ = new qQ(0, 0, 0, 0);
        return wQ.copyFromPoints(QQ, WQ, XQ), wQ
      }
      static FromPositionAndNormal(QQ, WQ) {
        const XQ = new qQ(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(QQ, WQ, XQ)
      }
      static FromPositionAndNormalToRef(QQ, WQ, XQ) {
        return XQ.normal.WH(WQ), XQ.normal.normalize(), XQ.d = -QQ.dot(XQ.normal), XQ
      }
      static SignedDistanceToPlaneFromPositionAndNormal(QQ, WQ, XQ) {
        const qQ = -(WQ.x * QQ.x + WQ.y * QQ.y + WQ.z * QQ.z);
        return wQ.s.Dot(XQ, WQ) + qQ
      }
    }
    qQ._TmpMatrix = wQ.e.Identity()
  },
  37367: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      Matrix: () => wQ.e,
      Quaternion: () => wQ.h,
      RegisterMathVector: () => wQ.l,
      TmpVectors: () => wQ.m,
      Vector2: () => wQ.q,
      vj: () => wQ.s,
      Vector4: () => wQ.w
    });
    var wQ = XQ(37370);
    (0, wQ.l)()
  },
  38377: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => wQ
    });
    class wQ {
      constructor(QQ, WQ, XQ, wQ) {
        this.x = QQ, this.y = WQ, this.width = XQ, this.height = wQ
      }
      toGlobal(QQ, WQ) {
        return new wQ(this.x * QQ, this.y * WQ, this.width * QQ, this.height * WQ)
      }
      toGlobalToRef(QQ, WQ, XQ) {
        return XQ.x = this.x * QQ, XQ.y = this.y * WQ, XQ.width = this.width * QQ, XQ.height = this.height * WQ, this
      }
      clone() {
        return new wQ(this.x, this.y, this.width, this.height)
      }
    }
  },
  38191: (QQ, WQ, XQ) => {
    function wQ() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (QQ => {
        const WQ = 16 * Math.random() | 0;
        return ("x" === QQ ? WQ : 3 & WQ | 8).toString(16)
      }))
    }
    XQ.d(WQ, {
      d: () => wQ
    })
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);