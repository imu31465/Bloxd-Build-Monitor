/*! For license information please see qsji88.219.a8635263.chunk.js.LICENSE.txt */
export const id = 219;
export const ids = [219, 225];
export const modules = {
  37284: TT => {
    TT.exports = function(TT) {
      return null != TT && null != TT.constructor && "function" === typeof TT.constructor.isBuffer && TT.constructor.isBuffer(TT)
    }
  },
  37272: (TT, oT, IT) => {
    var iT = IT(37275),
      zT = IT(37280),
      kT = IT(37284);
    IT.g.__TYPEDARRAY_POOL || (IT.g.__TYPEDARRAY_POOL = {
      UINT8: zT([32, 0]),
      UINT16: zT([32, 0]),
      UINT32: zT([32, 0]),
      INT8: zT([32, 0]),
      INT16: zT([32, 0]),
      INT32: zT([32, 0]),
      FLOAT: zT([32, 0]),
      DOUBLE: zT([32, 0]),
      DATA: zT([32, 0]),
      UINT8C: zT([32, 0]),
      BUFFER: zT([32, 0])
    });
    var WT = "undefined" !== typeof Uint8ClampedArray,
      XT = IT.g.__TYPEDARRAY_POOL;
    XT.UINT8C || (XT.UINT8C = zT([32, 0])), XT.BUFFER || (XT.BUFFER = zT([32, 0]));
    var BT = XT.DATA,
      FT = XT.BUFFER;

    function ST(TT) {
      if (TT) {
        var oT = TT.length || TT.byteLength,
          IT = iT.log2(oT);
        BT[IT].push(TT)
      }
    }

    function DT(TT) {
      TT = iT.nextPow2(TT);
      var oT = iT.log2(TT),
        IT = BT[oT];
      return IT.length > 0 ? IT.pop() : new ArrayBuffer(TT)
    }

    function LT(TT) {
      return new Uint8Array(DT(TT), 0, TT)
    }

    function xT(TT) {
      return new Uint16Array(DT(2 * TT), 0, TT)
    }

    function cT(TT) {
      return new Uint32Array(DT(4 * TT), 0, TT)
    }

    function KT(TT) {
      return new Int8Array(DT(TT), 0, TT)
    }

    function MT(TT) {
      return new Int16Array(DT(2 * TT), 0, TT)
    }

    function rT(TT) {
      return new Int32Array(DT(4 * TT), 0, TT)
    }

    function AT(TT) {
      return new Float32Array(DT(4 * TT), 0, TT)
    }

    function gT(TT) {
      return new Float64Array(DT(8 * TT), 0, TT)
    }

    function hT(TT) {
      return WT ? new Uint8ClampedArray(DT(TT), 0, TT) : LT(TT)
    }

    function wT(TT) {
      return new DataView(DT(TT), 0, TT)
    }
    oT.free = function(TT) {
      if (kT(TT)) FT[iT.log2(TT.length)].push(TT);
      else {
        if ("[object ArrayBuffer]" !== Object.prototype.toString.call(TT) && (TT = TT.buffer), !TT) return;
        var oT = TT.length || TT.byteLength,
          IT = 0 | iT.log2(oT);
        BT[IT].push(TT)
      }
    }, oT.freeUint8 = oT.freeUint16 = oT.freeUint32 = oT.freeInt8 = oT.freeInt16 = oT.freeInt32 = oT.freeFloat32 = oT.freeFloat = oT.freeFloat64 = oT.freeDouble = oT.freeUint8Clamped = oT.freeDataView = function(TT) {
      ST(TT.buffer)
    }, oT.freeArrayBuffer = ST, oT.freeBuffer = function(TT) {
      FT[iT.log2(TT.length)].push(TT)
    }, oT.malloc = function(TT, oT) {
      if (void 0 === oT || "arraybuffer" === oT) return DT(TT);
      switch (oT) {
        case "uint8":
          return LT(TT);
        case "uint16":
          return xT(TT);
        case "uint32":
          return cT(TT);
        case "int8":
          return KT(TT);
        case "int16":
          return MT(TT);
        case "int32":
          return rT(TT);
        case "float":
        case "float32":
          return AT(TT);
        case "double":
        case "float64":
          return gT(TT);
        case "uint8_clamped":
          return hT(TT);
        case "buffer":
          throw "Buffer not supported";
        case "data":
        case "dataview":
          return wT(TT);
        default:
          return null
      }
      return null
    }, oT.mallocArrayBuffer = DT, oT.mallocUint8 = LT, oT.mallocUint16 = xT, oT.mallocUint32 = cT, oT.mallocInt8 = KT, oT.mallocInt16 = MT, oT.mallocInt32 = rT, oT.mallocFloat32 = oT.mallocFloat = AT, oT.mallocFloat64 = oT.mallocDouble = gT, oT.mallocUint8Clamped = hT, oT.mallocDataView = wT, oT.clearCache = function() {
      for (var TT = 0; TT < 32; ++TT) XT.UINT8[TT].length = 0, XT.UINT16[TT].length = 0, XT.UINT32[TT].length = 0, XT.INT8[TT].length = 0, XT.INT16[TT].length = 0, XT.INT32[TT].length = 0, XT.FLOAT[TT].length = 0, XT.DOUBLE[TT].length = 0, XT.UINT8C[TT].length = 0, BT[TT].length = 0, FT[TT].length = 0
    }
  },
  37275: (TT, oT) => {
    function IT(TT) {
      var oT = 32;
      return (TT &= -TT) && oT--, 65535 & TT && (oT -= 16), 16711935 & TT && (oT -= 8), 252645135 & TT && (oT -= 4), 858993459 & TT && (oT -= 2), 1431655765 & TT && (oT -= 1), oT
    }
    oT.INT_BITS = 32, oT.INT_MAX = 2147483647, oT.INT_MIN = -1 << 31, oT.sign = function(TT) {
      return (TT > 0) - (TT < 0)
    }, oT.abs = function(TT) {
      var oT = TT >> 31;
      return (TT ^ oT) - oT
    }, oT.min = function(TT, oT) {
      return oT ^ (TT ^ oT) & -(TT < oT)
    }, oT.max = function(TT, oT) {
      return TT ^ (TT ^ oT) & -(TT < oT)
    }, oT.isPow2 = function(TT) {
      return !(TT & TT - 1) && !!TT
    }, oT.log2 = function(TT) {
      var oT, IT;
      return oT = (TT > 65535) << 4, oT |= IT = ((TT >>>= oT) > 255) << 3, oT |= IT = ((TT >>>= IT) > 15) << 2, (oT |= IT = ((TT >>>= IT) > 3) << 1) | (TT >>>= IT) >> 1
    }, oT.log10 = function(TT) {
      return TT >= 1e9 ? 9 : TT >= 1e8 ? 8 : TT >= 1e7 ? 7 : TT >= 1e6 ? 6 : TT >= 1e5 ? 5 : TT >= 1e4 ? 4 : TT >= 1e3 ? 3 : TT >= 100 ? 2 : TT >= 10 ? 1 : 0
    }, oT.popCount = function(TT) {
      return 16843009 * ((TT = (858993459 & (TT -= TT >>> 1 & 1431655765)) + (TT >>> 2 & 858993459)) + (TT >>> 4) & 252645135) >>> 24
    }, oT.countTrailingZeros = IT, oT.nextPow2 = function(TT) {
      return TT += 0 === TT, --TT, TT |= TT >>> 1, TT |= TT >>> 2, TT |= TT >>> 4, TT |= TT >>> 8, (TT |= TT >>> 16) + 1
    }, oT.prevPow2 = function(TT) {
      return TT |= TT >>> 1, TT |= TT >>> 2, TT |= TT >>> 4, TT |= TT >>> 8, (TT |= TT >>> 16) - (TT >>> 1)
    }, oT.parity = function(TT) {
      return TT ^= TT >>> 16, TT ^= TT >>> 8, TT ^= TT >>> 4, 27030 >>> (TT &= 15) & 1
    };
    var iT = new Array(256);
    ! function(TT) {
      for (var oT = 0; oT < 256; ++oT) {
        var IT = oT,
          iT = oT,
          zT = 7;
        for (IT >>>= 1; IT; IT >>>= 1) iT <<= 1, iT |= 1 & IT, --zT;
        TT[oT] = iT << zT & 255
      }
    }(iT), oT.reverse = function(TT) {
      return iT[255 & TT] << 24 | iT[TT >>> 8 & 255] << 16 | iT[TT >>> 16 & 255] << 8 | iT[TT >>> 24 & 255]
    }, oT.interleave2 = function(TT, oT) {
      return (TT = 1431655765 & ((TT = 858993459 & ((TT = 252645135 & ((TT = 16711935 & ((TT &= 65535) | TT << 8)) | TT << 4)) | TT << 2)) | TT << 1)) | (oT = 1431655765 & ((oT = 858993459 & ((oT = 252645135 & ((oT = 16711935 & ((oT &= 65535) | oT << 8)) | oT << 4)) | oT << 2)) | oT << 1)) << 1
    }, oT.deinterleave2 = function(TT, oT) {
      return (TT = 65535 & ((TT = 16711935 & ((TT = 252645135 & ((TT = 858993459 & ((TT = TT >>> oT & 1431655765) | TT >>> 1)) | TT >>> 2)) | TT >>> 4)) | TT >>> 16)) << 16 >> 16
    }, oT.interleave3 = function(TT, oT, IT) {
      return TT = 1227133513 & ((TT = 3272356035 & ((TT = 251719695 & ((TT = 4278190335 & ((TT &= 1023) | TT << 16)) | TT << 8)) | TT << 4)) | TT << 2), (TT |= (oT = 1227133513 & ((oT = 3272356035 & ((oT = 251719695 & ((oT = 4278190335 & ((oT &= 1023) | oT << 16)) | oT << 8)) | oT << 4)) | oT << 2)) << 1) | (IT = 1227133513 & ((IT = 3272356035 & ((IT = 251719695 & ((IT = 4278190335 & ((IT &= 1023) | IT << 16)) | IT << 8)) | IT << 4)) | IT << 2)) << 2
    }, oT.deinterleave3 = function(TT, oT) {
      return (TT = 1023 & ((TT = 4278190335 & ((TT = 251719695 & ((TT = 3272356035 & ((TT = TT >>> oT & 1227133513) | TT >>> 2)) | TT >>> 4)) | TT >>> 8)) | TT >>> 16)) << 22 >> 22
    }, oT.nextCombination = function(TT) {
      var oT = TT | TT - 1;
      return oT + 1 | (~oT & -~oT) - 1 >>> IT(TT) + 1
    }
  },
  37264: (TT, oT, IT) => {
    TT.exports = function(TT, oT, IT) {
      switch (arguments.length) {
        case 1:
          return iT = [], FT(zT = TT, zT, ST, !0), iT;
        case 2:
          return "function" === typeof oT ? FT(TT, TT, oT, !0) : function(TT, oT) {
            return iT = [], FT(TT, oT, ST, !1), iT
          }(TT, oT);
        case 3:
          return FT(TT, oT, IT, !1);
        default:
          throw new Error("box-intersect: Invalid arguments")
      }
      var zT
    };
    var iT, zT = IT(37272),
      kT = IT(37288),
      WT = IT(37297);

    function XT(TT, oT) {
      for (var IT = 0; IT < TT; ++IT)
        if (!(oT[IT] <= oT[IT + TT])) return !0;
      return !1
    }

    function BT(TT, oT, IT, iT) {
      for (var zT = 0, kT = 0, WT = 0, BT = TT.length; WT < BT; ++WT) {
        var FT = TT[WT];
        if (!XT(oT, FT)) {
          for (var ST = 0; ST < 2 * oT; ++ST) IT[zT++] = FT[ST];
          iT[kT++] = WT
        }
      }
      return kT
    }

    function FT(TT, oT, IT, iT) {
      var XT = TT.length,
        FT = oT.length;
      if (!(XT <= 0 || FT <= 0)) {
        var ST = TT[0].length >>> 1;
        if (!(ST <= 0)) {
          var DT, LT = zT.mallocDouble(2 * ST * XT),
            xT = zT.mallocInt32(XT);
          if ((XT = BT(TT, ST, LT, xT)) > 0) {
            if (1 === ST && iT) kT.init(XT), DT = kT.sweepComplete(ST, IT, 0, XT, LT, xT, 0, XT, LT, xT);
            else {
              var cT = zT.mallocDouble(2 * ST * FT),
                KT = zT.mallocInt32(FT);
              (FT = BT(oT, ST, cT, KT)) > 0 && (kT.init(XT + FT), DT = 1 === ST ? kT.sweepBipartite(ST, IT, 0, XT, LT, xT, 0, FT, cT, KT) : WT(ST, IT, iT, XT, LT, xT, FT, cT, KT), zT.free(cT), zT.free(KT))
            }
            zT.free(LT), zT.free(xT)
          }
          return DT
        }
      }
    }

    function ST(TT, oT) {
      iT.push([TT, oT])
    }
  },
  37299: (TT, oT) => {
    var IT = "d",
      iT = "ax",
      zT = "fp",
      kT = "es",
      WT = "rs",
      XT = "re",
      BT = "rb",
      FT = "bs",
      ST = "be",
      DT = "bb",
      LT = [IT, iT, "vv", WT, XT, BT, "ri", FT, ST, DT, "bi"];

    function xT(TT) {
      var oT = "bruteForce" + (TT ? "Full" : "Partial"),
        iT = [],
        WT = LT.slice();
      TT || WT.splice(3, 0, zT);
      var XT = ["function " + oT + "(" + WT.join() + "){"];

      function BT(oT, zT) {
        var WT = function(TT, oT, iT) {
          var zT = "bruteForce" + (TT ? "Red" : "Blue") + (oT ? "Flip" : "") + (iT ? "Full" : ""),
            WT = ["function ", zT, "(", LT.join(), "){", "var ", kT, "=2*", IT, ";"],
            XT = "for(var i=rs,rp=es*rs;i<re;++i,rp+=es){var x0=rb[ax+rp],x1=rb[ax+rp+d],xi=ri[i];",
            BT = "for(var j=bs,bp=es*bs;j<be;++j,bp+=es){var y0=bb[ax+bp]," + (iT ? "y1=bb[ax+bp+d]," : "") + "yi=bi[j];";
          return TT ? WT.push(XT, "Q", ":", BT) : WT.push(BT, "Q", ":", XT), iT ? WT.push("if(y1<x0||x1<y0)continue;") : oT ? WT.push("if(y0<=x0||x1<y0)continue;") : WT.push("if(y0<x0||x1<y0)continue;"), WT.push("for(var k=ax+1;k<d;++k){var r0=rb[k+rp],r1=rb[k+d+rp],b0=bb[k+bp],b1=bb[k+d+bp];if(r1<b0||b1<r0)continue Q;}var rv=vv("), oT ? WT.push("yi,xi") : WT.push("xi,yi"), WT.push(");if(rv!==void 0)return rv;}}}"), {
            name: zT,
            code: WT.join("")
          }
        }(oT, zT, TT);
        iT.push(WT.code), XT.push("return " + WT.name + "(" + LT.join() + ");")
      }
      XT.push("if(re-rs>be-bs){"), TT ? (BT(!0, !1), XT.push("}else{"), BT(!1, !1)) : (XT.push("if(fp){"), BT(!0, !0), XT.push("}else{"), BT(!0, !1), XT.push("}}else{if(fp){"), BT(!1, !0), XT.push("}else{"), BT(!1, !1), XT.push("}")), XT.push("}}return " + oT);
      var FT = iT.join("") + XT.join("");
      return new Function(FT)()
    }
    oT.partial = xT(!1), oT.full = xT(!0)
  },
  37297: (TT, oT, IT) => {
    TT.exports = function(TT, oT, IT, kT, ST, ET, fT, CT, jT) {
      ! function(TT, oT) {
        var IT = 8 * zT.log2(oT + 1) * (TT + 1) | 0,
          kT = zT.nextPow2(hT * IT);
        mT.length < kT && (iT.free(mT), mT = iT.mallocInt32(kT));
        var WT = zT.nextPow2(wT * IT);
        eT.length < WT && (iT.free(eT), eT = iT.mallocDouble(WT))
      }(TT, kT + fT);
      var JT, UT = 0,
        aT = 2 * TT;
      RT(UT++, 0, 0, kT, 0, fT, IT ? 16 : 0, -1 / 0, 1 / 0), IT || RT(UT++, 0, 0, fT, 0, kT, 1, -1 / 0, 1 / 0);
      for (; UT > 0;) {
        var YT = (UT -= 1) * hT,
          QT = mT[YT],
          OT = mT[YT + 1],
          HT = mT[YT + 2],
          nT = mT[YT + 3],
          qT = mT[YT + 4],
          ZT = mT[YT + 5],
          lT = UT * wT,
          sT = eT[lT],
          tT = eT[lT + 1],
          GT = 1 & ZT,
          pT = !!(16 & ZT),
          bT = ST,
          yT = ET,
          NT = CT,
          PT = jT;
        if (GT && (bT = CT, yT = jT, NT = ST, PT = ET), !(2 & ZT && OT >= (HT = MT(TT, QT, OT, HT, bT, yT, tT))) && !(4 & ZT && (OT = rT(TT, QT, OT, HT, bT, yT, sT)) >= HT)) {
          var dT = HT - OT,
            VT = qT - nT;
          if (pT) {
            if (TT * dT * (dT + VT) < xT) {
              if (void 0 !== (JT = BT.scanComplete(TT, QT, oT, OT, HT, bT, yT, nT, qT, NT, PT))) return JT;
              continue
            }
          } else {
            if (TT * Math.min(dT, VT) < DT) {
              if (void 0 !== (JT = WT(TT, QT, oT, GT, OT, HT, bT, yT, nT, qT, NT, PT))) return JT;
              continue
            }
            if (TT * dT * VT < LT) {
              if (void 0 !== (JT = BT.scanBipartite(TT, QT, oT, GT, OT, HT, bT, yT, nT, qT, NT, PT))) return JT;
              continue
            }
          }
          var To = cT(TT, QT, OT, HT, bT, yT, sT, tT);
          if (OT < To)
            if (TT * (To - OT) < DT) {
              if (void 0 !== (JT = XT(TT, QT + 1, oT, OT, To, bT, yT, nT, qT, NT, PT))) return JT
            } else if (QT === TT - 2) {
            if (void 0 !== (JT = GT ? BT.sweepBipartite(TT, oT, nT, qT, NT, PT, OT, To, bT, yT) : BT.sweepBipartite(TT, oT, OT, To, bT, yT, nT, qT, NT, PT))) return JT
          } else RT(UT++, QT + 1, OT, To, nT, qT, GT, -1 / 0, 1 / 0), RT(UT++, QT + 1, nT, qT, OT, To, 1 ^ GT, -1 / 0, 1 / 0);
          if (To < HT) {
            var oo = FT(TT, QT, nT, qT, NT, PT),
              Io = NT[aT * oo + QT],
              io = KT(TT, QT, oo, qT, NT, PT, Io);
            if (io < qT && RT(UT++, QT, To, HT, io, qT, (4 | GT) + (pT ? 16 : 0), Io, tT), nT < oo && RT(UT++, QT, To, HT, nT, oo, (2 | GT) + (pT ? 16 : 0), sT, Io), oo + 1 === io) {
              if (void 0 !== (JT = pT ? vT(TT, QT, oT, To, HT, bT, yT, oo, NT, PT[oo]) : uT(TT, QT, oT, GT, To, HT, bT, yT, oo, NT, PT[oo]))) return JT
            } else if (oo < io) {
              var zo;
              if (pT) {
                if (To < (zo = AT(TT, QT, To, HT, bT, yT, Io))) {
                  var ko = KT(TT, QT, To, zo, bT, yT, Io);
                  if (QT === TT - 2) {
                    if (To < ko && void 0 !== (JT = BT.sweepComplete(TT, oT, To, ko, bT, yT, oo, io, NT, PT))) return JT;
                    if (ko < zo && void 0 !== (JT = BT.sweepBipartite(TT, oT, ko, zo, bT, yT, oo, io, NT, PT))) return JT
                  } else To < ko && RT(UT++, QT + 1, To, ko, oo, io, 16, -1 / 0, 1 / 0), ko < zo && (RT(UT++, QT + 1, ko, zo, oo, io, 0, -1 / 0, 1 / 0), RT(UT++, QT + 1, oo, io, ko, zo, 1, -1 / 0, 1 / 0))
                }
              } else To < (zo = GT ? gT(TT, QT, To, HT, bT, yT, Io) : AT(TT, QT, To, HT, bT, yT, Io)) && (QT === TT - 2 ? JT = GT ? BT.sweepBipartite(TT, oT, oo, io, NT, PT, To, zo, bT, yT) : BT.sweepBipartite(TT, oT, To, zo, bT, yT, oo, io, NT, PT) : (RT(UT++, QT + 1, To, zo, oo, io, GT, -1 / 0, 1 / 0), RT(UT++, QT + 1, oo, io, To, zo, 1 ^ GT, -1 / 0, 1 / 0)))
            }
          }
        }
      }
    };
    var iT = IT(37272),
      zT = IT(37275),
      kT = IT(37299),
      WT = kT.partial,
      XT = kT.full,
      BT = IT(37288),
      FT = IT(37305),
      ST = IT(37311),
      DT = 128,
      LT = 1 << 22,
      xT = 1 << 22,
      cT = ST("!(lo>=p0)&&!(p1>=hi)", ["p0", "p1"]),
      KT = ST("lo===p0", ["p0"]),
      MT = ST("lo<p0", ["p0"]),
      rT = ST("hi<=p0", ["p0"]),
      AT = ST("lo<=p0&&p0<=hi", ["p0"]),
      gT = ST("lo<p0&&p0<=hi", ["p0"]),
      hT = 6,
      wT = 2,
      mT = iT.mallocInt32(1024),
      eT = iT.mallocDouble(1024);

    function RT(TT, oT, IT, iT, zT, kT, WT, XT, BT) {
      var FT = hT * TT;
      mT[FT] = oT, mT[FT + 1] = IT, mT[FT + 2] = iT, mT[FT + 3] = zT, mT[FT + 4] = kT, mT[FT + 5] = WT;
      var ST = wT * TT;
      eT[ST] = XT, eT[ST + 1] = BT
    }

    function uT(TT, oT, IT, iT, zT, kT, WT, XT, BT, FT, ST) {
      var DT = 2 * TT,
        LT = BT * DT,
        xT = FT[LT + oT];
      TT: for (var cT = zT, KT = zT * DT; cT < kT; ++cT, KT += DT) {
        var MT = WT[KT + oT],
          rT = WT[KT + oT + TT];
        if (!(xT < MT || rT < xT) && (!iT || xT !== MT)) {
          for (var AT, gT = XT[cT], hT = oT + 1; hT < TT; ++hT) {
            MT = WT[KT + hT], rT = WT[KT + hT + TT];
            var wT = FT[LT + hT],
              mT = FT[LT + hT + TT];
            if (rT < wT || mT < MT) continue TT
          }
          if (void 0 !== (AT = iT ? IT(ST, gT) : IT(gT, ST))) return AT
        }
      }
    }

    function vT(TT, oT, IT, iT, zT, kT, WT, XT, BT, FT) {
      var ST = 2 * TT,
        DT = XT * ST,
        LT = BT[DT + oT];
      TT: for (var xT = iT, cT = iT * ST; xT < zT; ++xT, cT += ST) {
        var KT = WT[xT];
        if (KT !== FT) {
          var MT = kT[cT + oT],
            rT = kT[cT + oT + TT];
          if (!(LT < MT || rT < LT)) {
            for (var AT = oT + 1; AT < TT; ++AT) {
              MT = kT[cT + AT], rT = kT[cT + AT + TT];
              var gT = BT[DT + AT],
                hT = BT[DT + AT + TT];
              if (rT < gT || hT < MT) continue TT
            }
            var wT = IT(KT, FT);
            if (void 0 !== wT) return wT
          }
        }
      }
    }
  },
  37305: (TT, oT, IT) => {
    TT.exports = function(TT, oT, IT, WT, XT, BT) {
      if (WT <= IT + 1) return IT;
      var FT = IT,
        ST = WT,
        DT = WT + IT >>> 1,
        LT = 2 * TT,
        xT = DT,
        cT = XT[LT * DT + oT];
      for (; FT < ST;) {
        if (ST - FT < zT) {
          kT(TT, oT, FT, ST, XT, BT), cT = XT[LT * DT + oT];
          break
        }
        var KT = ST - FT,
          MT = Math.random() * KT + FT | 0,
          rT = XT[LT * MT + oT],
          AT = Math.random() * KT + FT | 0,
          gT = XT[LT * AT + oT],
          hT = Math.random() * KT + FT | 0,
          wT = XT[LT * hT + oT];
        rT <= gT ? wT >= gT ? (xT = AT, cT = gT) : rT >= wT ? (xT = MT, cT = rT) : (xT = hT, cT = wT) : gT >= wT ? (xT = AT, cT = gT) : wT >= rT ? (xT = MT, cT = rT) : (xT = hT, cT = wT);
        for (var mT = LT * (ST - 1), eT = LT * xT, RT = 0; RT < LT; ++RT, ++mT, ++eT) {
          var uT = XT[mT];
          XT[mT] = XT[eT], XT[eT] = uT
        }
        var vT = BT[ST - 1];
        BT[ST - 1] = BT[xT], BT[xT] = vT;
        for (mT = LT * (ST - 1), eT = LT * (xT = iT(TT, oT, FT, ST - 1, XT, BT, cT)), RT = 0; RT < LT; ++RT, ++mT, ++eT) {
          uT = XT[mT];
          XT[mT] = XT[eT], XT[eT] = uT
        }
        vT = BT[ST - 1];
        if (BT[ST - 1] = BT[xT], BT[xT] = vT, DT < xT) {
          for (ST = xT - 1; FT < ST && XT[LT * (ST - 1) + oT] === cT;) ST -= 1;
          ST += 1
        } else {
          if (!(xT < DT)) break;
          for (FT = xT + 1; FT < ST && XT[LT * FT + oT] === cT;) FT += 1
        }
      }
      return iT(TT, oT, IT, DT, XT, BT, XT[LT * DT + oT])
    };
    var iT = IT(37311)("lo<p0", ["p0"]),
      zT = 8;

    function kT(TT, oT, IT, iT, zT, kT) {
      for (var WT = 2 * TT, XT = WT * (IT + 1) + oT, BT = IT + 1; BT < iT; ++BT, XT += WT)
        for (var FT = zT[XT], ST = BT, DT = WT * (BT - 1); ST > IT && zT[DT + oT] > FT; --ST, DT -= WT) {
          for (var LT = DT, xT = DT + WT, cT = 0; cT < WT; ++cT, ++LT, ++xT) {
            var KT = zT[LT];
            zT[LT] = zT[xT], zT[xT] = KT
          }
          var MT = kT[ST];
          kT[ST] = kT[ST - 1], kT[ST - 1] = MT
        }
    }
  },
  37311: TT => {
    TT.exports = function(TT, IT) {
      var iT = "abcdef".split("").concat(IT),
        zT = [];
      TT.indexOf("lo") >= 0 && zT.push("lo=e[k+n]");
      TT.indexOf("hi") >= 0 && zT.push("hi=e[k+o]");
      return iT.push(oT.replace("_", zT.join()).replace("$", TT)), Function.apply(void 0, iT)
    };
    var oT = "for(var j=2*a,k=j*c,l=k,m=c,n=b,o=a+b,p=c;d>p;++p,k+=j){var _;if($)if(m===p)m+=1,l+=j;else{for(var s=0;j>s;++s){var t=e[k+s];e[k+s]=e[l],e[l++]=t}var u=f[p];f[p]=f[m],f[m++]=u}}return m"
  },
  37291: TT => {
    TT.exports = function(TT, iT) {
      iT <= 4 * oT ? IT(0, iT - 1, TT) : FT(0, iT - 1, TT)
    };
    var oT = 32;

    function IT(TT, oT, IT) {
      for (var iT = 2 * (TT + 1), zT = TT + 1; zT <= oT; ++zT) {
        for (var kT = IT[iT++], WT = IT[iT++], XT = zT, BT = iT - 2; XT-- > TT;) {
          var FT = IT[BT - 2],
            ST = IT[BT - 1];
          if (FT < kT) break;
          if (FT === kT && ST < WT) break;
          IT[BT] = FT, IT[BT + 1] = ST, BT -= 2
        }
        IT[BT] = kT, IT[BT + 1] = WT
      }
    }

    function iT(TT, oT, IT) {
      oT *= 2;
      var iT = IT[TT *= 2],
        zT = IT[TT + 1];
      IT[TT] = IT[oT], IT[TT + 1] = IT[oT + 1], IT[oT] = iT, IT[oT + 1] = zT
    }

    function zT(TT, oT, IT) {
      oT *= 2, IT[TT *= 2] = IT[oT], IT[TT + 1] = IT[oT + 1]
    }

    function kT(TT, oT, IT, iT) {
      oT *= 2, IT *= 2;
      var zT = iT[TT *= 2],
        kT = iT[TT + 1];
      iT[TT] = iT[oT], iT[TT + 1] = iT[oT + 1], iT[oT] = iT[IT], iT[oT + 1] = iT[IT + 1], iT[IT] = zT, iT[IT + 1] = kT
    }

    function WT(TT, oT, IT, iT, zT) {
      oT *= 2, zT[TT *= 2] = zT[oT], zT[oT] = IT, zT[TT + 1] = zT[oT + 1], zT[oT + 1] = iT
    }

    function XT(TT, oT, IT) {
      oT *= 2;
      var iT = IT[TT *= 2],
        zT = IT[oT];
      return !(iT < zT) && (iT !== zT || IT[TT + 1] > IT[oT + 1])
    }

    function BT(TT, oT, IT, iT) {
      var zT = iT[TT *= 2];
      return zT < oT || zT === oT && iT[TT + 1] < IT
    }

    function FT(TT, ST, DT) {
      var LT = (ST - TT + 1) / 6 | 0,
        xT = TT + LT,
        cT = ST - LT,
        KT = TT + ST >> 1,
        MT = KT - LT,
        rT = KT + LT,
        AT = xT,
        gT = MT,
        hT = KT,
        wT = rT,
        mT = cT,
        eT = TT + 1,
        RT = ST - 1,
        uT = 0;
      XT(AT, gT, DT) && (uT = AT, AT = gT, gT = uT), XT(wT, mT, DT) && (uT = wT, wT = mT, mT = uT), XT(AT, hT, DT) && (uT = AT, AT = hT, hT = uT), XT(gT, hT, DT) && (uT = gT, gT = hT, hT = uT), XT(AT, wT, DT) && (uT = AT, AT = wT, wT = uT), XT(hT, wT, DT) && (uT = hT, hT = wT, wT = uT), XT(gT, mT, DT) && (uT = gT, gT = mT, mT = uT), XT(gT, hT, DT) && (uT = gT, gT = hT, hT = uT), XT(wT, mT, DT) && (uT = wT, wT = mT, mT = uT);
      for (var vT = DT[2 * gT], ET = DT[2 * gT + 1], fT = DT[2 * wT], CT = DT[2 * wT + 1], jT = 2 * AT, JT = 2 * hT, UT = 2 * mT, aT = 2 * xT, YT = 2 * KT, QT = 2 * cT, OT = 0; OT < 2; ++OT) {
        var HT = DT[jT + OT],
          nT = DT[JT + OT],
          qT = DT[UT + OT];
        DT[aT + OT] = HT, DT[YT + OT] = nT, DT[QT + OT] = qT
      }
      zT(MT, TT, DT), zT(rT, ST, DT);
      for (var ZT = eT; ZT <= RT; ++ZT)
        if (BT(ZT, vT, ET, DT)) ZT !== eT && iT(ZT, eT, DT), ++eT;
        else if (!BT(ZT, fT, CT, DT))
        for (;;) {
          if (BT(RT, fT, CT, DT)) {
            BT(RT, vT, ET, DT) ? (kT(ZT, eT, RT, DT), ++eT, --RT) : (iT(ZT, RT, DT), --RT);
            break
          }
          if (--RT < ZT) break
        }
      WT(TT, eT - 1, vT, ET, DT), WT(ST, RT + 1, fT, CT, DT), eT - 2 - TT <= oT ? IT(TT, eT - 2, DT) : FT(TT, eT - 2, DT), ST - (RT + 2) <= oT ? IT(RT + 2, ST, DT) : FT(RT + 2, ST, DT), RT - eT <= oT ? IT(eT, RT, DT) : FT(eT, RT, DT)
    }
  },
  37288: (TT, oT, IT) => {
    TT.exports = {
      init: function(TT) {
        var oT = zT.nextPow2(TT);
        BT.length < oT && (iT.free(BT), BT = iT.mallocInt32(oT));
        FT.length < oT && (iT.free(FT), FT = iT.mallocInt32(oT));
        ST.length < oT && (iT.free(ST), ST = iT.mallocInt32(oT));
        DT.length < oT && (iT.free(DT), DT = iT.mallocInt32(oT));
        LT.length < oT && (iT.free(LT), LT = iT.mallocInt32(oT));
        xT.length < oT && (iT.free(xT), xT = iT.mallocInt32(oT));
        var IT = 8 * oT;
        cT.length < IT && (iT.free(cT), cT = iT.mallocDouble(IT))
      },
      sweepBipartite: function(TT, oT, IT, iT, zT, XT, LT, xT, rT, AT) {
        for (var gT = 0, hT = 2 * TT, wT = TT - 1, mT = hT - 1, eT = IT; eT < iT; ++eT) {
          var RT = XT[eT],
            uT = hT * eT;
          cT[gT++] = zT[uT + wT], cT[gT++] = -(RT + 1), cT[gT++] = zT[uT + mT], cT[gT++] = RT
        }
        for (eT = LT; eT < xT; ++eT) {
          RT = AT[eT] + WT;
          var vT = hT * eT;
          cT[gT++] = rT[vT + wT], cT[gT++] = -RT, cT[gT++] = rT[vT + mT], cT[gT++] = RT
        }
        var ET = gT >>> 1;
        kT(cT, ET);
        var fT = 0,
          CT = 0;
        for (eT = 0; eT < ET; ++eT) {
          var jT = 0 | cT[2 * eT + 1];
          if (jT >= WT) KT(ST, DT, CT--, jT = jT - WT | 0);
          else if (jT >= 0) KT(BT, FT, fT--, jT);
          else if (jT <= -WT) {
            jT = -jT - WT | 0;
            for (var JT = 0; JT < fT; ++JT) {
              if (void 0 !== (UT = oT(BT[JT], jT))) return UT
            }
            MT(ST, DT, CT++, jT)
          } else {
            jT = -jT - 1 | 0;
            for (JT = 0; JT < CT; ++JT) {
              var UT;
              if (void 0 !== (UT = oT(jT, ST[JT]))) return UT
            }
            MT(BT, FT, fT++, jT)
          }
        }
      },
      sweepComplete: function(TT, oT, IT, iT, zT, WT, XT, rT, AT, gT) {
        for (var hT = 0, wT = 2 * TT, mT = TT - 1, eT = wT - 1, RT = IT; RT < iT; ++RT) {
          var uT = WT[RT] + 1 << 1,
            vT = wT * RT;
          cT[hT++] = zT[vT + mT], cT[hT++] = -uT, cT[hT++] = zT[vT + eT], cT[hT++] = uT
        }
        for (RT = XT; RT < rT; ++RT) {
          uT = gT[RT] + 1 << 1;
          var ET = wT * RT;
          cT[hT++] = AT[ET + mT], cT[hT++] = 1 | -uT, cT[hT++] = AT[ET + eT], cT[hT++] = 1 | uT
        }
        var fT = hT >>> 1;
        kT(cT, fT);
        var CT = 0,
          jT = 0,
          JT = 0;
        for (RT = 0; RT < fT; ++RT) {
          var UT = 0 | cT[2 * RT + 1],
            aT = 1 & UT;
          if (RT < fT - 1 && UT >> 1 === cT[2 * RT + 3] >> 1 && (aT = 2, RT += 1), UT < 0) {
            for (var YT = -(UT >> 1) - 1, QT = 0; QT < JT; ++QT) {
              if (void 0 !== (OT = oT(LT[QT], YT))) return OT
            }
            if (0 !== aT)
              for (QT = 0; QT < CT; ++QT) {
                if (void 0 !== (OT = oT(BT[QT], YT))) return OT
              }
            if (1 !== aT)
              for (QT = 0; QT < jT; ++QT) {
                var OT;
                if (void 0 !== (OT = oT(ST[QT], YT))) return OT
              }
            0 === aT ? MT(BT, FT, CT++, YT) : 1 === aT ? MT(ST, DT, jT++, YT) : 2 === aT && MT(LT, xT, JT++, YT)
          } else {
            YT = (UT >> 1) - 1;
            0 === aT ? KT(BT, FT, CT--, YT) : 1 === aT ? KT(ST, DT, jT--, YT) : 2 === aT && KT(LT, xT, JT--, YT)
          }
        }
      },
      scanBipartite: function(TT, oT, IT, iT, zT, XT, ST, DT, LT, xT, rT, AT) {
        var gT = 0,
          hT = 2 * TT,
          wT = oT,
          mT = oT + TT,
          eT = 1,
          RT = 1;
        iT ? RT = WT : eT = WT;
        for (var uT = zT; uT < XT; ++uT) {
          var vT = uT + eT,
            ET = hT * uT;
          cT[gT++] = ST[ET + wT], cT[gT++] = -vT, cT[gT++] = ST[ET + mT], cT[gT++] = vT
        }
        for (uT = LT; uT < xT; ++uT) {
          vT = uT + RT;
          var fT = hT * uT;
          cT[gT++] = rT[fT + wT], cT[gT++] = -vT
        }
        var CT = gT >>> 1;
        kT(cT, CT);
        var jT = 0;
        for (uT = 0; uT < CT; ++uT) {
          var JT = 0 | cT[2 * uT + 1];
          if (JT < 0) {
            var UT = !1;
            if ((vT = -JT) >= WT ? (UT = !iT, vT -= WT) : (UT = !!iT, vT -= 1), UT) MT(BT, FT, jT++, vT);
            else {
              var aT = AT[vT],
                YT = hT * vT,
                QT = rT[YT + oT + 1],
                OT = rT[YT + oT + 1 + TT];
              TT: for (var HT = 0; HT < jT; ++HT) {
                var nT = BT[HT],
                  qT = hT * nT;
                if (!(OT < ST[qT + oT + 1] || ST[qT + oT + 1 + TT] < QT)) {
                  for (var ZT = oT + 2; ZT < TT; ++ZT)
                    if (rT[YT + ZT + TT] < ST[qT + ZT] || ST[qT + ZT + TT] < rT[YT + ZT]) continue TT;
                  var lT, sT = DT[nT];
                  if (void 0 !== (lT = iT ? IT(aT, sT) : IT(sT, aT))) return lT
                }
              }
            }
          } else KT(BT, FT, jT--, JT - eT)
        }
      },
      scanComplete: function(TT, oT, IT, iT, zT, XT, FT, ST, DT, LT, xT) {
        for (var KT = 0, MT = 2 * TT, rT = oT, AT = oT + TT, gT = iT; gT < zT; ++gT) {
          var hT = gT + WT,
            wT = MT * gT;
          cT[KT++] = XT[wT + rT], cT[KT++] = -hT, cT[KT++] = XT[wT + AT], cT[KT++] = hT
        }
        for (gT = ST; gT < DT; ++gT) {
          hT = gT + 1;
          var mT = MT * gT;
          cT[KT++] = LT[mT + rT], cT[KT++] = -hT
        }
        var eT = KT >>> 1;
        kT(cT, eT);
        var RT = 0;
        for (gT = 0; gT < eT; ++gT) {
          var uT = 0 | cT[2 * gT + 1];
          if (uT < 0) {
            if ((hT = -uT) >= WT) BT[RT++] = hT - WT;
            else {
              var vT = xT[hT -= 1],
                ET = MT * hT,
                fT = LT[ET + oT + 1],
                CT = LT[ET + oT + 1 + TT];
              TT: for (var jT = 0; jT < RT; ++jT) {
                var JT = BT[jT],
                  UT = FT[JT];
                if (UT === vT) break;
                var aT = MT * JT;
                if (!(CT < XT[aT + oT + 1] || XT[aT + oT + 1 + TT] < fT)) {
                  for (var YT = oT + 2; YT < TT; ++YT)
                    if (LT[ET + YT + TT] < XT[aT + YT] || XT[aT + YT + TT] < LT[ET + YT]) continue TT;
                  var QT = IT(UT, vT);
                  if (void 0 !== QT) return QT
                }
              }
            }
          } else {
            for (hT = uT - WT, jT = RT - 1; jT >= 0; --jT)
              if (BT[jT] === hT) {
                for (YT = jT + 1; YT < RT; ++YT) BT[YT - 1] = BT[YT];
                break
              }-- RT
          }
        }
      }
    };
    var iT = IT(37272),
      zT = IT(37275),
      kT = IT(37291),
      WT = 1 << 28,
      XT = 1024,
      BT = iT.mallocInt32(XT),
      FT = iT.mallocInt32(XT),
      ST = iT.mallocInt32(XT),
      DT = iT.mallocInt32(XT),
      LT = iT.mallocInt32(XT),
      xT = iT.mallocInt32(XT),
      cT = iT.mallocDouble(8192);

    function KT(TT, oT, IT, iT) {
      var zT = oT[iT],
        kT = TT[IT - 1];
      TT[zT] = kT, oT[kT] = zT
    }

    function MT(TT, oT, IT, iT) {
      TT[IT] = iT, oT[iT] = IT
    }
  },
  37280: TT => {
    function oT(TT, IT, iT) {
      var zT = 0 | TT[iT];
      if (zT <= 0) return [];
      var kT, WT = new Array(zT);
      if (iT === TT.length - 1)
        for (kT = 0; kT < zT; ++kT) WT[kT] = IT;
      else
        for (kT = 0; kT < zT; ++kT) WT[kT] = oT(TT, IT, iT + 1);
      return WT
    }
    TT.exports = function(TT, IT) {
      switch ("undefined" === typeof IT && (IT = 0), typeof TT) {
        case "number":
          if (TT > 0) return function(TT, oT) {
            var IT, iT;
            for (IT = new Array(TT), iT = 0; iT < TT; ++iT) IT[iT] = oT;
            return IT
          }(0 | TT, IT);
          break;
        case "object":
          if ("number" === typeof TT.length) return oT(TT, IT, 0)
      }
      return []
    }
  },
  37235: (TT, oT, IT) => {
    TT.exports = function() {
      var TT = this;
      this.components = {}, this.comps = this.components;
      var oT = this.components,
        IT = 1,
        zT = {},
        kT = [],
        WT = [],
        XT = {
          timeout: !1,
          removals: [],
          multiComps: []
        };

      function BT(TT, IT) {
        var iT = oT[IT],
          kT = zT[IT],
          WT = kT.hash[TT];
        WT && (kT.remove(TT), iT.zC && (iT.multi ? (WT.forEach((oT => {
          oT && iT.zC(TT, oT)
        })), WT.length = 0) : iT.zC(TT, WT)), XT.removals.push(kT), FT())
      }

      function FT() {
        XT.timeout || (XT.timeout = !0, setTimeout(ST, 1))
      }

      function ST() {
        XT.timeout = !1, DT()
      }

      function DT() {
        XT.multiComps.length && function(TT) {
          for (var oT = 0; oT < TT.length; oT++) {
            var {
              entID: IT,
              data: iT
            } = TT[oT], zT = iT.hash[IT];
            if (zT) {
              for (var kT = 0; kT < zT.length; kT++) zT[kT] || (zT.splice(kT, 1), kT--);
              0 === zT.length && (iT.remove(IT), XT.removals.push(iT))
            }
          }
          TT.length = 0
        }(XT.multiComps), XT.removals.length && function(TT) {
          for (var oT = 0; oT < TT.length; oT++) {
            TT[oT].flush()
          }
          TT.length = 0
        }(XT.removals)
      }
      this.vK = zT, this._systems = kT, this._renderSystems = WT, this.Ql = function(oT) {
        var iT = IT++;
        return Array.isArray(oT) && oT.forEach((oT => TT.eJ(iT, oT))), iT
      }, this.deleteEntity = function(oT) {
        return Object.keys(zT).forEach((TT => {
          zT[TT].hash[oT] && BT(oT, TT)
        })), TT
      }, this.hoT = function(TT) {
        if (!TT) throw new Error("Missing component definition");
        var IT = TT.name;
        if (!IT) throw new Error("Component definition must have a name property.");
        if ("string" !== typeof IT) throw new Error("Component name must be a string.");
        if ("" === IT) throw new Error("Component name must be a non-empty string.");
        if (zT[IT]) throw new Error(`Component ${IT} already exists.`);
        var XT = {};
        return XT.name = IT, XT.multi = !!TT.multi, XT.order = isNaN(TT.order) ? 99 : TT.order, XT.stateConstructor = TT.stateConstructor || null, XT.state = TT.state || {}, XT.Om = TT.Om || null, XT.zC = TT.zC || null, XT.system = TT.system || null, XT.Zm = TT.Zm || null, oT[IT] = XT, zT[IT] = new iT, zT[IT]._pendingMultiCleanup = !1, zT[IT]._multiCleanupIDs = XT.multi ? [] : null, XT.system && (kT.push(IT), kT.sort(((TT, IT) => oT[TT].order - oT[IT].order))), XT.Zm && (WT.push(IT), WT.sort(((TT, IT) => oT[TT].order - oT[IT].order))), IT
      }, this.overwriteComponent = function(TT, IT) {
        var iT = oT[TT];
        if (!iT) throw new Error(`Unknown component: ${TT}`);
        if (!IT) throw new Error("Missing component definition");
        if (iT.name !== IT.name) throw new Error("Overwriting component must use the same name property.");
        var XT = {};
        XT.name = TT, XT.multi = !!IT.multi, XT.order = isNaN(IT.order) ? 99 : IT.order, XT.state = IT.state || {}, XT.Om = IT.Om || null, XT.zC = IT.zC || null, XT.system = IT.system || null, XT.Zm = IT.Zm || null, oT[TT] = XT, zT[TT]._pendingMultiCleanup = !1, zT[TT]._multiCleanupIDs = XT.multi ? [] : null;
        var BT = kT.indexOf(TT);
        XT.system && BT < 0 && kT.push(TT), !XT.system && BT >= 0 && kT.splice(BT, 1), kT.sort(((TT, IT) => oT[TT].order - oT[IT].order));
        var FT = WT.indexOf(TT);
        XT.Zm && FT < 0 && WT.push(TT), !XT.Zm && FT >= 0 && WT.splice(FT, 1), WT.sort(((TT, IT) => oT[TT].order - oT[IT].order));
        var ST = XT.state;
        return this.gJ(TT).forEach((TT => {
          for (var oT in ST) oT in TT || (TT[oT] = ST[oT]);
          XT.Om && XT.Om(TT.mJ, TT)
        })), TT
      }, this.deleteComponent = function(IT) {
        var iT = zT[IT];
        if (!iT) throw new Error(`Unknown component: ${IT}`);
        iT.flush(), iT.list.forEach((TT => {
          TT && BT(TT.mJ || TT[0].mJ, IT)
        }));
        var XT = kT.indexOf(IT),
          FT = WT.indexOf(IT);
        return XT > -1 && kT.splice(XT, 1), FT > -1 && WT.splice(FT, 1), zT[IT].dispose(), delete zT[IT], delete oT[IT], TT
      }, this.eJ = function(TT, IT, iT) {
        var kT, WT = oT[IT],
          XT = zT[IT];
        if (!XT) throw new Error(`Unknown component: ${IT}.`);
        if (XT.hash[TT] && !WT.multi) throw new Error(`Entity ${TT} already has component: ${IT}.`);
        if (WT.stateConstructor) {
          if (!(kT = new WT.stateConstructor).hasOwnProperty("mJ")) throw new Error(`Component ${WT.name} stateConstructor type does not have property __id`);
          Object.assign(kT, WT.state, iT)
        } else kT = {
          mJ: TT,
          ...WT.state,
          ...iT
        };
        if (kT.mJ = TT, WT.multi) {
          var BT = XT.hash[TT];
          BT || (BT = [], XT.add(TT, BT)), BT.push(kT)
        } else XT.add(TT, kT);
        return WT.Om && WT.Om(TT, kT), this
      }, this.xTT = function(TT, oT) {
        var IT = zT[oT];
        if (!IT) throw new Error(`Unknown component: ${oT}.`);
        return !!IT.hash[TT]
      }, this.RJ = function(oT, IT) {
        if (!zT[IT]) throw new Error(`Unknown component: ${IT}.`);
        return BT(oT, IT), TT
      }, this.getState = function(TT, oT) {
        var IT = zT[oT];
        if (!IT) throw new Error(`Unknown component: ${oT}.`);
        return IT.hash[TT]
      }, this.gJ = function(TT) {
        var oT = zT[TT];
        if (!oT) throw new Error(`Unknown component: ${TT}.`);
        return DT(), oT.list
      }, this.VTT = function(TT) {
        if (!zT[TT]) throw new Error(`Unknown component: ${TT}.`);
        var oT = zT[TT].hash;
        return TT => oT[TT]
      }, this.koT = function(TT) {
        if (!zT[TT]) throw new Error(`Unknown component: ${TT}.`);
        var oT = zT[TT].hash;
        return TT => !!oT[TT]
      }, this.dD = function(IT) {
        DT();
        for (var iT = 0; iT < kT.length; iT++) {
          var WT = kT[iT],
            XT = oT[WT],
            BT = zT[WT];
          XT.system(IT, BT.list), DT()
        }
        return TT
      }, this.render = function(IT) {
        DT();
        for (var iT = 0; iT < WT.length; iT++) {
          var kT = WT[iT],
            XT = oT[kT],
            BT = zT[kT];
          XT.Zm(IT, BT.list), DT()
        }
        return TT
      }, this.removeMultiComponent = function(IT, iT, kT) {
        var WT = oT[iT],
          BT = zT[iT];
        if (!BT) throw new Error(`Unknown component: ${iT}.`);
        if (!WT.multi) throw new Error("removeMultiComponent called on non-multi component");
        return function(TT, oT, IT, iT) {
          var zT = IT.hash[TT];
          if (zT) {
            var kT = zT[iT];
            kT && (zT[iT] = null, oT.zC && oT.zC(TT, kT), XT.multiComps.push({
              entID: TT,
              data: IT
            }), FT())
          }
        }(IT, WT, BT, kT), TT
      }
    };
    var iT = IT(37243)
  },
  37243: TT => {
    function oT(TT, oT) {
      var IT = TT._map[oT];
      if (delete TT.hash[oT], delete TT._map[oT], IT === TT.list.length - 1) TT.list.pop(), TT._idList.pop();
      else {
        var iT = TT.list.pop();
        TT.list[IT] = iT;
        var zT = TT._idList.pop();
        TT._idList[IT] = zT, TT._map[zT] = IT
      }
    }
    TT.exports = class {
      constructor() {
        this.list = [], this.hash = {}, this._map = {}, this._idList = [], this._pendingRemovals = []
      }
      add(TT, oT) {
        if ("number" === typeof this._map[TT]) {
          var IT = this._map[TT];
          this.hash[TT] = oT, this.list[IT] = oT, this._idList[IT] = TT
        } else this._map[TT] = this.list.length, this.hash[TT] = oT, this.list.push(oT), this._idList.push(TT)
      }
      remove(TT) {
        var oT = this._map[TT];
        this.hash[TT] = null, this.list[oT] = null, this._pendingRemovals.push(TT)
      }
      dispose() {
        this.list = null, this.hash = null, this._map = null, this._idList = null, this._pendingRemovals.length = 0
      }
      flush() {
        for (var TT = 0; TT < this._pendingRemovals.length; TT++) {
          var IT = this._pendingRemovals[TT];
          null === this.hash[IT] && oT(this, IT)
        }
        this._pendingRemovals.length = 0
      }
    }
  },
  36649: TT => {
    TT.exports = function(TT) {
      for (var oT = new Array(TT), IT = 0; IT < TT; ++IT) oT[IT] = IT;
      return oT
    }
  },
  36658: TT => {
    function oT(TT) {
      return !!TT.constructor && "function" === typeof TT.constructor.isBuffer && TT.constructor.isBuffer(TT)
    }
    TT.exports = function(TT) {
      return null != TT && (oT(TT) || function(TT) {
        return "function" === typeof TT.readFloatLE && "function" === typeof TT.slice && oT(TT.slice(0, 0))
      }(TT) || !!TT._isBuffer)
    }
  },
  37006: (TT, oT, IT) => {
    TT = IT.nmd(TT);
    var iT = "__lodash_hash_undefined__",
      zT = 9007199254740991,
      kT = "[object Arguments]",
      WT = "[object Boolean]",
      XT = "[object Date]",
      BT = "[object Function]",
      FT = "[object GeneratorFunction]",
      ST = "[object Map]",
      DT = "[object Number]",
      LT = "[object Object]",
      xT = "[object Promise]",
      cT = "[object RegExp]",
      KT = "[object Set]",
      MT = "[object String]",
      rT = "[object Symbol]",
      AT = "[object WeakMap]",
      gT = "[object ArrayBuffer]",
      hT = "[object DataView]",
      wT = "[object Float32Array]",
      mT = "[object Float64Array]",
      eT = "[object Int8Array]",
      RT = "[object Int16Array]",
      uT = "[object Int32Array]",
      vT = "[object Uint8Array]",
      ET = "[object Uint8ClampedArray]",
      fT = "[object Uint16Array]",
      CT = "[object Uint32Array]",
      jT = /\w*$/,
      JT = /^\[object .+?Constructor\]$/,
      UT = /^(?:0|[1-9]\d*)$/,
      aT = {};
    aT[kT] = aT["[object Array]"] = aT[gT] = aT[hT] = aT[WT] = aT[XT] = aT[wT] = aT[mT] = aT[eT] = aT[RT] = aT[uT] = aT[ST] = aT[DT] = aT[LT] = aT[cT] = aT[KT] = aT[MT] = aT[rT] = aT[vT] = aT[ET] = aT[fT] = aT[CT] = !0, aT["[object Error]"] = aT[BT] = aT[AT] = !1;
    var YT = "object" == typeof IT.g && IT.g && IT.g.Object === Object && IT.g,
      QT = "object" == typeof self && self && self.Object === Object && self,
      OT = YT || QT || Function("return this")(),
      HT = oT && !oT.nodeType && oT,
      nT = HT && TT && !TT.nodeType && TT,
      qT = nT && nT.exports === HT;

    function ZT(TT, oT) {
      return TT.set(oT[0], oT[1]), TT
    }

    function lT(TT, oT) {
      return TT.add(oT), TT
    }

    function sT(TT, oT, IT, iT) {
      var zT = -1,
        kT = TT ? TT.length : 0;
      for (iT && kT && (IT = TT[++zT]); ++zT < kT;) IT = oT(IT, TT[zT], zT, TT);
      return IT
    }

    function tT(TT) {
      var oT = !1;
      if (null != TT && "function" != typeof TT.toString) try {
        oT = !!(TT + "")
      } catch (IT) {}
      return oT
    }

    function GT(TT) {
      var oT = -1,
        IT = Array(TT.size);
      return TT.forEach((function(TT, iT) {
        IT[++oT] = [iT, TT]
      })), IT
    }

    function pT(TT, oT) {
      return function(IT) {
        return TT(oT(IT))
      }
    }

    function bT(TT) {
      var oT = -1,
        IT = Array(TT.size);
      return TT.forEach((function(TT) {
        IT[++oT] = TT
      })), IT
    }
    var yT = Array.prototype,
      NT = Function.prototype,
      PT = Object.prototype,
      dT = OT["__core-js_shared__"],
      VT = function() {
        var TT = /[^.]+$/.exec(dT && dT.keys && dT.keys.IE_PROTO || "");
        return TT ? "Symbol(src)_1." + TT : ""
      }(),
      To = NT.toString,
      oo = PT.hasOwnProperty,
      Io = PT.toString,
      io = RegExp("^" + To.call(oo).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
      zo = qT ? OT.vc : void 0,
      ko = OT.Symbol,
      Wo = OT.Uint8Array,
      Xo = pT(Object.getPrototypeOf, Object),
      Bo = Object.create,
      Fo = PT.propertyIsEnumerable,
      So = yT.splice,
      Do = Object.getOwnPropertySymbols,
      Lo = zo ? zo.isBuffer : void 0,
      xo = pT(Object.keys, Object),
      co = qo(OT, "DataView"),
      Ko = qo(OT, "Map"),
      Mo = qo(OT, "Promise"),
      ro = qo(OT, "Set"),
      Ao = qo(OT, "WeakMap"),
      go = qo(Object, "create"),
      ho = po(co),
      wo = po(Ko),
      mo = po(Mo),
      eo = po(ro),
      Ro = po(Ao),
      uo = ko ? ko.prototype : void 0,
      vo = uo ? uo.valueOf : void 0;

    function Eo(TT) {
      var oT = -1,
        IT = TT ? TT.length : 0;
      for (this.clear(); ++oT < IT;) {
        var iT = TT[oT];
        this.set(iT[0], iT[1])
      }
    }

    function fo(TT) {
      var oT = -1,
        IT = TT ? TT.length : 0;
      for (this.clear(); ++oT < IT;) {
        var iT = TT[oT];
        this.set(iT[0], iT[1])
      }
    }

    function Co(TT) {
      var oT = -1,
        IT = TT ? TT.length : 0;
      for (this.clear(); ++oT < IT;) {
        var iT = TT[oT];
        this.set(iT[0], iT[1])
      }
    }

    function jo(TT) {
      this.__data__ = new fo(TT)
    }

    function Jo(TT, oT) {
      var IT = yo(TT) || function(TT) {
          return function(TT) {
            return function(TT) {
              return !!TT && "object" == typeof TT
            }(TT) && No(TT)
          }(TT) && oo.call(TT, "callee") && (!Fo.call(TT, "callee") || Io.call(TT) == kT)
        }(TT) ? function(TT, oT) {
          for (var IT = -1, iT = Array(TT); ++IT < TT;) iT[IT] = oT(IT);
          return iT
        }(TT.length, String) : [],
        iT = IT.length,
        zT = !!iT;
      for (var WT in TT) !oT && !oo.call(TT, WT) || zT && ("length" == WT || to(WT, iT)) || IT.push(WT);
      return IT
    }

    function Uo(TT, oT, IT) {
      var iT = TT[oT];
      oo.call(TT, oT) && bo(iT, IT) && (void 0 !== IT || oT in TT) || (TT[oT] = IT)
    }

    function ao(TT, oT) {
      for (var IT = TT.length; IT--;)
        if (bo(TT[IT][0], oT)) return IT;
      return -1
    }

    function Yo(TT, oT, IT, iT, zT, xT, AT) {
      var JT;
      if (iT && (JT = xT ? iT(TT, zT, xT, AT) : iT(TT)), void 0 !== JT) return JT;
      if (!TI(TT)) return TT;
      var UT = yo(TT);
      if (UT) {
        if (JT = function(TT) {
            var oT = TT.length,
              IT = TT.constructor(oT);
            oT && "string" == typeof TT[0] && oo.call(TT, "index") && (IT.index = TT.index, IT.input = TT.input);
            return IT
          }(TT), !oT) return function(TT, oT) {
          var IT = -1,
            iT = TT.length;
          oT || (oT = Array(iT));
          for (; ++IT < iT;) oT[IT] = TT[IT];
          return oT
        }(TT, JT)
      } else {
        var YT = so(TT),
          QT = YT == BT || YT == FT;
        if (Po(TT)) return function(TT, oT) {
          if (oT) return TT.slice();
          var IT = new TT.constructor(TT.length);
          return TT.copy(IT), IT
        }(TT, oT);
        if (YT == LT || YT == kT || QT && !xT) {
          if (tT(TT)) return xT ? TT : {};
          if (JT = function(TT) {
              return "function" != typeof TT.constructor || Go(TT) ? {} : (oT = Xo(TT), TI(oT) ? Bo(oT) : {});
              var oT
            }(QT ? {} : TT), !oT) return function(TT, oT) {
            return Ho(TT, Zo(TT), oT)
          }(TT, function(TT, oT) {
            return TT && Ho(oT, oI(oT), TT)
          }(JT, TT))
        } else {
          if (!aT[YT]) return xT ? TT : {};
          JT = function(TT, oT, IT, iT) {
            var zT = TT.constructor;
            switch (oT) {
              case gT:
                return Oo(TT);
              case WT:
              case XT:
                return new zT(+TT);
              case hT:
                return function(TT, oT) {
                  var IT = oT ? Oo(TT.buffer) : TT.buffer;
                  return new TT.constructor(IT, TT.byteOffset, TT.byteLength)
                }(TT, iT);
              case wT:
              case mT:
              case eT:
              case RT:
              case uT:
              case vT:
              case ET:
              case fT:
              case CT:
                return function(TT, oT) {
                  var IT = oT ? Oo(TT.buffer) : TT.buffer;
                  return new TT.constructor(IT, TT.byteOffset, TT.length)
                }(TT, iT);
              case ST:
                return function(TT, oT, IT) {
                  var iT = oT ? IT(GT(TT), !0) : GT(TT);
                  return sT(iT, ZT, new TT.constructor)
                }(TT, iT, IT);
              case DT:
              case MT:
                return new zT(TT);
              case cT:
                return function(TT) {
                  var oT = new TT.constructor(TT.source, jT.exec(TT));
                  return oT.lastIndex = TT.lastIndex, oT
                }(TT);
              case KT:
                return function(TT, oT, IT) {
                  var iT = oT ? IT(bT(TT), !0) : bT(TT);
                  return sT(iT, lT, new TT.constructor)
                }(TT, iT, IT);
              case rT:
                return kT = TT, vo ? Object(vo.call(kT)) : {}
            }
            var kT
          }(TT, YT, Yo, oT)
        }
      }
      AT || (AT = new jo);
      var OT = AT.get(TT);
      if (OT) return OT;
      if (AT.set(TT, JT), !UT) var HT = IT ? function(TT) {
        return function(TT, oT, IT) {
          var iT = oT(TT);
          return yo(TT) ? iT : function(TT, oT) {
            for (var IT = -1, iT = oT.length, zT = TT.length; ++IT < iT;) TT[zT + IT] = oT[IT];
            return TT
          }(iT, IT(TT))
        }(TT, oI, Zo)
      }(TT) : oI(TT);
      return function(TT, oT) {
        for (var IT = -1, iT = TT ? TT.length : 0; ++IT < iT && !1 !== oT(TT[IT], IT, TT););
      }(HT || TT, (function(zT, kT) {
        HT && (zT = TT[kT = zT]), Uo(JT, kT, Yo(zT, oT, IT, iT, kT, TT, AT))
      })), JT
    }

    function Qo(TT) {
      return !(!TI(TT) || (oT = TT, VT && VT in oT)) && (Vo(TT) || tT(TT) ? io : JT).test(po(TT));
      var oT
    }

    function Oo(TT) {
      var oT = new TT.constructor(TT.byteLength);
      return new Wo(oT).set(new Wo(TT)), oT
    }

    function Ho(TT, oT, IT, iT) {
      IT || (IT = {});
      for (var zT = -1, kT = oT.length; ++zT < kT;) {
        var WT = oT[zT],
          XT = iT ? iT(IT[WT], TT[WT], WT, IT, TT) : void 0;
        Uo(IT, WT, void 0 === XT ? TT[WT] : XT)
      }
      return IT
    }

    function no(TT, oT) {
      var IT = TT.__data__;
      return function(TT) {
        var oT = typeof TT;
        return "string" == oT || "number" == oT || "symbol" == oT || "boolean" == oT ? "__proto__" !== TT : null === TT
      }(oT) ? IT["string" == typeof oT ? "string" : "hash"] : IT.map
    }

    function qo(TT, oT) {
      var IT = function(TT, oT) {
        return null == TT ? void 0 : TT[oT]
      }(TT, oT);
      return Qo(IT) ? IT : void 0
    }
    Eo.prototype.clear = function() {
      this.__data__ = go ? go(null) : {}
    }, Eo.prototype.delete = function(TT) {
      return this.has(TT) && delete this.__data__[TT]
    }, Eo.prototype.get = function(TT) {
      var oT = this.__data__;
      if (go) {
        var IT = oT[TT];
        return IT === iT ? void 0 : IT
      }
      return oo.call(oT, TT) ? oT[TT] : void 0
    }, Eo.prototype.has = function(TT) {
      var oT = this.__data__;
      return go ? void 0 !== oT[TT] : oo.call(oT, TT)
    }, Eo.prototype.set = function(TT, oT) {
      return this.__data__[TT] = go && void 0 === oT ? iT : oT, this
    }, fo.prototype.clear = function() {
      this.__data__ = []
    }, fo.prototype.delete = function(TT) {
      var oT = this.__data__,
        IT = ao(oT, TT);
      return !(IT < 0) && (IT == oT.length - 1 ? oT.pop() : So.call(oT, IT, 1), !0)
    }, fo.prototype.get = function(TT) {
      var oT = this.__data__,
        IT = ao(oT, TT);
      return IT < 0 ? void 0 : oT[IT][1]
    }, fo.prototype.has = function(TT) {
      return ao(this.__data__, TT) > -1
    }, fo.prototype.set = function(TT, oT) {
      var IT = this.__data__,
        iT = ao(IT, TT);
      return iT < 0 ? IT.push([TT, oT]) : IT[iT][1] = oT, this
    }, Co.prototype.clear = function() {
      this.__data__ = {
        hash: new Eo,
        map: new(Ko || fo),
        string: new Eo
      }
    }, Co.prototype.delete = function(TT) {
      return no(this, TT).delete(TT)
    }, Co.prototype.get = function(TT) {
      return no(this, TT).get(TT)
    }, Co.prototype.has = function(TT) {
      return no(this, TT).has(TT)
    }, Co.prototype.set = function(TT, oT) {
      return no(this, TT).set(TT, oT), this
    }, jo.prototype.clear = function() {
      this.__data__ = new fo
    }, jo.prototype.delete = function(TT) {
      return this.__data__.delete(TT)
    }, jo.prototype.get = function(TT) {
      return this.__data__.get(TT)
    }, jo.prototype.has = function(TT) {
      return this.__data__.has(TT)
    }, jo.prototype.set = function(TT, oT) {
      var IT = this.__data__;
      if (IT instanceof fo) {
        var iT = IT.__data__;
        if (!Ko || iT.length < 199) return iT.push([TT, oT]), this;
        IT = this.__data__ = new Co(iT)
      }
      return IT.set(TT, oT), this
    };
    var Zo = Do ? pT(Do, Object) : function() {
        return []
      },
      so = function(TT) {
        return Io.call(TT)
      };

    function to(TT, oT) {
      return !!(oT = null == oT ? zT : oT) && ("number" == typeof TT || UT.test(TT)) && TT > -1 && TT % 1 == 0 && TT < oT
    }

    function Go(TT) {
      var oT = TT && TT.constructor;
      return TT === ("function" == typeof oT && oT.prototype || PT)
    }

    function po(TT) {
      if (null != TT) {
        try {
          return To.call(TT)
        } catch (oT) {}
        try {
          return TT + ""
        } catch (oT) {}
      }
      return ""
    }

    function bo(TT, oT) {
      return TT === oT || TT !== TT && oT !== oT
    }(co && so(new co(new ArrayBuffer(1))) != hT || Ko && so(new Ko) != ST || Mo && so(Mo.resolve()) != xT || ro && so(new ro) != KT || Ao && so(new Ao) != AT) && (so = function(TT) {
      var oT = Io.call(TT),
        IT = oT == LT ? TT.constructor : void 0,
        iT = IT ? po(IT) : void 0;
      if (iT) switch (iT) {
        case ho:
          return hT;
        case wo:
          return ST;
        case mo:
          return xT;
        case eo:
          return KT;
        case Ro:
          return AT
      }
      return oT
    });
    var yo = Array.isArray;

    function No(TT) {
      return null != TT && function(TT) {
        return "number" == typeof TT && TT > -1 && TT % 1 == 0 && TT <= zT
      }(TT.length) && !Vo(TT)
    }
    var Po = Lo || function() {
      return !1
    };

    function Vo(TT) {
      var oT = TI(TT) ? Io.call(TT) : "";
      return oT == BT || oT == FT
    }

    function TI(TT) {
      var oT = typeof TT;
      return !!TT && ("object" == oT || "function" == oT)
    }

    function oI(TT) {
      return No(TT) ? Jo(TT) : function(TT) {
        if (!Go(TT)) return xo(TT);
        var oT = [];
        for (var IT in Object(TT)) oo.call(TT, IT) && "constructor" != IT && oT.push(IT);
        return oT
      }(TT)
    }
    TT.exports = function(TT) {
      return Yo(TT, !0, !0)
    }
  },
  36641: (TT, oT, IT) => {
    var iT = IT(36649),
      zT = IT(36658),
      kT = "undefined" !== typeof Float64Array;

    function WT(TT, oT) {
      return TT[0] - oT[0]
    }

    function XT() {
      var TT, oT = this.stride,
        IT = new Array(oT.length);
      for (TT = 0; TT < IT.length; ++TT) IT[TT] = [Math.abs(oT[TT]), TT];
      IT.sort(WT);
      var iT = new Array(IT.length);
      for (TT = 0; TT < iT.length; ++TT) iT[TT] = IT[TT][1];
      return iT
    }

    function BT(TT, oT) {
      var IT = ["View", oT, "d", TT].join("");
      oT < 0 && (IT = "View_Nil" + TT);
      var zT = "generic" === TT;
      if (-1 === oT) {
        var kT = "function " + IT + "(a){this.data=a;};var proto=" + IT + ".prototype;proto.dtype='" + TT + "';proto.index=function(){return -1};proto.size=0;proto.dimension=-1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function(){return new " + IT + "(this.data);};proto.get=proto.set=function(){};proto.pick=function(){return null};return function construct_" + IT + "(a){return new " + IT + "(a);}";
        return new Function(kT)()
      }
      if (0 === oT) {
        kT = "function " + IT + "(a,d) {this.data = a;this.offset = d};var proto=" + IT + ".prototype;proto.dtype='" + TT + "';proto.index=function(){return this.offset};proto.dimension=0;proto.size=1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function " + IT + "_copy() {return new " + IT + "(this.data,this.offset)};proto.pick=function " + IT + "_pick(){return TrivialArray(this.data);};proto.valueOf=proto.get=function " + IT + "_get(){return " + (zT ? "this.data.get(this.offset)" : "this.data[this.offset]") + "};proto.set=function " + IT + "_set(v){return " + (zT ? "this.data.set(this.offset,v)" : "this.data[this.offset]=v") + "};return function construct_" + IT + "(a,b,c,d){return new " + IT + "(a,d)}";
        return new Function("TrivialArray", kT)(FT[TT][0])
      }
      kT = ["'use strict'"];
      var WT = iT(oT),
        BT = WT.map((function(TT) {
          return "i" + TT
        })),
        ST = "this.offset+" + WT.map((function(TT) {
          return "this.stride[" + TT + "]*i" + TT
        })).join("+"),
        DT = WT.map((function(TT) {
          return "b" + TT
        })).join(","),
        LT = WT.map((function(TT) {
          return "c" + TT
        })).join(",");
      kT.push("function " + IT + "(a," + DT + "," + LT + ",d){this.data=a", "this.shape=[" + DT + "]", "this.stride=[" + LT + "]", "this.offset=d|0}", "var proto=" + IT + ".prototype", "proto.dtype='" + TT + "'", "proto.dimension=" + oT), kT.push("Object.defineProperty(proto,'size',{get:function " + IT + "_size(){return " + WT.map((function(TT) {
        return "this.shape[" + TT + "]"
      })).join("*"), "}})"), 1 === oT ? kT.push("proto.order=[0]") : (kT.push("Object.defineProperty(proto,'order',{get:"), oT < 4 ? (kT.push("function " + IT + "_order(){"), 2 === oT ? kT.push("return (Math.abs(this.stride[0])>Math.abs(this.stride[1]))?[1,0]:[0,1]}})") : 3 === oT && kT.push("var s0=Math.abs(this.stride[0]),s1=Math.abs(this.stride[1]),s2=Math.abs(this.stride[2]);if(s0>s1){if(s1>s2){return [2,1,0];}else if(s0>s2){return [1,2,0];}else{return [1,0,2];}}else if(s0>s2){return [2,0,1];}else if(s2>s1){return [0,1,2];}else{return [0,2,1];}}})")) : kT.push("ORDER})")), kT.push("proto.set=function " + IT + "_set(" + BT.join(",") + ",v){"), zT ? kT.push("return this.data.set(" + ST + ",v)}") : kT.push("return this.data[" + ST + "]=v}"), kT.push("proto.get=function " + IT + "_get(" + BT.join(",") + "){"), zT ? kT.push("return this.data.get(" + ST + ")}") : kT.push("return this.data[" + ST + "]}"), kT.push("proto.index=function " + IT + "_index(", BT.join(), "){return " + ST + "}"), kT.push("proto.hi=function " + IT + "_hi(" + BT.join(",") + "){return new " + IT + "(this.data," + WT.map((function(TT) {
        return ["(typeof i", TT, "!=='number'||i", TT, "<0)?this.shape[", TT, "]:i", TT, "|0"].join("")
      })).join(",") + "," + WT.map((function(TT) {
        return "this.stride[" + TT + "]"
      })).join(",") + ",this.offset)}");
      var xT = WT.map((function(TT) {
          return "a" + TT + "=this.shape[" + TT + "]"
        })),
        cT = WT.map((function(TT) {
          return "c" + TT + "=this.stride[" + TT + "]"
        }));
      kT.push("proto.lo=function " + IT + "_lo(" + BT.join(",") + "){var b=this.offset,d=0," + xT.join(",") + "," + cT.join(","));
      for (var KT = 0; KT < oT; ++KT) kT.push("if(typeof i" + KT + "==='number'&&i" + KT + ">=0){d=i" + KT + "|0;b+=c" + KT + "*d;a" + KT + "-=d}");
      kT.push("return new " + IT + "(this.data," + WT.map((function(TT) {
        return "a" + TT
      })).join(",") + "," + WT.map((function(TT) {
        return "c" + TT
      })).join(",") + ",b)}"), kT.push("proto.step=function " + IT + "_step(" + BT.join(",") + "){var " + WT.map((function(TT) {
        return "a" + TT + "=this.shape[" + TT + "]"
      })).join(",") + "," + WT.map((function(TT) {
        return "b" + TT + "=this.stride[" + TT + "]"
      })).join(",") + ",c=this.offset,d=0,ceil=Math.ceil");
      for (KT = 0; KT < oT; ++KT) kT.push("if(typeof i" + KT + "==='number'){d=i" + KT + "|0;if(d<0){c+=b" + KT + "*(a" + KT + "-1);a" + KT + "=ceil(-a" + KT + "/d)}else{a" + KT + "=ceil(a" + KT + "/d)}b" + KT + "*=d}");
      kT.push("return new " + IT + "(this.data," + WT.map((function(TT) {
        return "a" + TT
      })).join(",") + "," + WT.map((function(TT) {
        return "b" + TT
      })).join(",") + ",c)}");
      var MT = new Array(oT),
        rT = new Array(oT);
      for (KT = 0; KT < oT; ++KT) MT[KT] = "a[i" + KT + "]", rT[KT] = "b[i" + KT + "]";
      kT.push("proto.transpose=function " + IT + "_transpose(" + BT + "){" + BT.map((function(TT, oT) {
        return TT + "=(" + TT + "===undefined?" + oT + ":" + TT + "|0)"
      })).join(";"), "var a=this.shape,b=this.stride;return new " + IT + "(this.data," + MT.join(",") + "," + rT.join(",") + ",this.offset)}"), kT.push("proto.pick=function " + IT + "_pick(" + BT + "){var a=[],b=[],c=this.offset");
      for (KT = 0; KT < oT; ++KT) kT.push("if(typeof i" + KT + "==='number'&&i" + KT + ">=0){c=(c+this.stride[" + KT + "]*i" + KT + ")|0}else{a.push(this.shape[" + KT + "]);b.push(this.stride[" + KT + "])}");
      return kT.push("var ctor=CTOR_LIST[a.length+1];return ctor(this.data,a,b,c)}"), kT.push("return function construct_" + IT + "(data,shape,stride,offset){return new " + IT + "(data," + WT.map((function(TT) {
        return "shape[" + TT + "]"
      })).join(",") + "," + WT.map((function(TT) {
        return "stride[" + TT + "]"
      })).join(",") + ",offset)}"), new Function("CTOR_LIST", "ORDER", kT.join("\n"))(FT[TT], XT)
    }
    var FT = {
      float32: [],
      float64: [],
      int8: [],
      int16: [],
      int32: [],
      uint8: [],
      uint16: [],
      uint32: [],
      array: [],
      uint8_clamped: [],
      bigint64: [],
      biguint64: [],
      buffer: [],
      generic: []
    };
    TT.exports = function(TT, oT, IT, iT) {
      if (void 0 === TT) return (0, FT.array[0])([]);
      "number" === typeof TT && (TT = [TT]), void 0 === oT && (oT = [TT.length]);
      var WT = oT.length;
      if (void 0 === IT) {
        IT = new Array(WT);
        for (var XT = WT - 1, ST = 1; XT >= 0; --XT) IT[XT] = ST, ST *= oT[XT]
      }
      if (void 0 === iT) {
        iT = 0;
        for (XT = 0; XT < WT; ++XT) IT[XT] < 0 && (iT -= (oT[XT] - 1) * IT[XT])
      }
      for (var DT = function(TT) {
          if (zT(TT)) return "buffer";
          if (kT) switch (Object.prototype.toString.call(TT)) {
            case "[object Float64Array]":
              return "float64";
            case "[object Float32Array]":
              return "float32";
            case "[object Int8Array]":
              return "int8";
            case "[object Int16Array]":
              return "int16";
            case "[object Int32Array]":
              return "int32";
            case "[object Uint8Array]":
              return "uint8";
            case "[object Uint16Array]":
              return "uint16";
            case "[object Uint32Array]":
              return "uint32";
            case "[object Uint8ClampedArray]":
              return "uint8_clamped";
            case "[object BigInt64Array]":
              return "bigint64";
            case "[object BigUint64Array]":
              return "biguint64"
          }
          return Array.isArray(TT) ? "array" : "generic"
        }(TT), LT = FT[DT]; LT.length <= WT + 1;) LT.push(BT(DT, LT.length - 1));
      return (0, LT[WT + 1])(TT, oT, IT, iT)
    }
  },
  37432: TT => {
    function oT(TT, oT, IT) {
      for (var iT = TT.length, zT = -1 / 0, kT = 1 / 0, WT = 0; WT < iT; WT++) {
        var XT = (IT[0][WT] - TT[WT]) / oT[WT],
          BT = (IT[1][WT] - TT[WT]) / oT[WT];
        if (XT > BT) {
          var FT = XT;
          XT = BT, BT = FT
        }
        if (BT < zT || XT > kT) return 1 / 0;
        XT > zT && (zT = XT), BT < kT && (kT = BT)
      }
      return zT > kT ? 1 / 0 : zT
    }
    TT.exports = function(TT, IT, iT, zT) {
      var kT = oT(IT, iT, zT);
      if (kT === 1 / 0) TT = null;
      else {
        TT = TT || [];
        for (var WT = 0; WT < IT.length; WT++) TT[WT] = IT[WT] + iT[WT] * kT
      }
      return TT
    }, TT.exports.distance = oT
  },
  36674: (TT, oT, IT) => {
    var iT = IT(36678);

    function zT(TT) {
      for (var oT, IT, zT = 0, kT = TT.length, WT = 0; WT < TT.length;) {
        for (oT = TT[WT], IT = 0; WT < kT && TT[WT] === oT;) ++WT, ++IT;
        zT += iT.log2(IT) / 7 | 0, zT += iT.log2(oT >>> 0) / 7 | 0, zT += 2
      }
      return zT
    }
    oT.size = zT, oT.encode = function(TT, oT) {
      oT || (oT = new Uint8Array(zT(TT)));
      for (var IT, iT, kT = 0, WT = oT.length, XT = 0; XT < TT.length;) {
        for (IT = TT[XT], iT = 0; XT < TT.length && TT[XT] === IT;) ++XT, ++iT;
        for (; kT < WT && iT >= 128;) oT[kT++] = 128 + (127 & iT), iT >>>= 7;
        if (kT >= WT) throw new Error("RLE buffer overflow");
        for (oT[kT++] = iT, IT >>>= 0; kT < WT && IT >= 128;) oT[kT++] = 128 + (127 & IT), IT >>>= 7;
        if (kT >= WT) throw new Error("RLE buffer overflow");
        oT[kT++] = IT
      }
      return oT
    }, oT.decode = function(TT, oT) {
      for (var IT, iT, zT, kT, WT = oT.length, XT = TT.length, BT = 0, FT = 0; FT < XT;) {
        for (IT = 0, iT = 0; FT < XT && TT[FT] >= 128;) IT += (127 & TT[FT++]) << iT, iT += 7;
        if (IT += TT[FT++] << iT, FT >= XT) throw new Error("RLE buffer underrun");
        if (BT + IT > WT) throw new Error("Chunk buffer overflow");
        for (zT = 0, iT = 0; FT < XT && TT[FT] >= 128;) zT += (127 & TT[FT++]) << iT, iT += 7;
        if (FT >= XT) throw new Error("RLE buffer underrun");
        for (zT += TT[FT++] << iT, kT = 0; kT < IT; ++kT) oT[BT++] = zT
      }
      return oT
    }
  },
  36678: (TT, oT) => {
    function IT(TT) {
      var oT = 32;
      return (TT &= -TT) && oT--, 65535 & TT && (oT -= 16), 16711935 & TT && (oT -= 8), 252645135 & TT && (oT -= 4), 858993459 & TT && (oT -= 2), 1431655765 & TT && (oT -= 1), oT
    }
    oT.INT_BITS = 32, oT.INT_MAX = 2147483647, oT.INT_MIN = -1 << 31, oT.sign = function(TT) {
      return (TT > 0) - (TT < 0)
    }, oT.abs = function(TT) {
      var oT = TT >> 31;
      return (TT ^ oT) - oT
    }, oT.min = function(TT, oT) {
      return oT ^ (TT ^ oT) & -(TT < oT)
    }, oT.max = function(TT, oT) {
      return TT ^ (TT ^ oT) & -(TT < oT)
    }, oT.isPow2 = function(TT) {
      return !(TT & TT - 1) && !!TT
    }, oT.log2 = function(TT) {
      var oT, IT;
      return oT = (TT > 65535) << 4, oT |= IT = ((TT >>>= oT) > 255) << 3, oT |= IT = ((TT >>>= IT) > 15) << 2, (oT |= IT = ((TT >>>= IT) > 3) << 1) | (TT >>>= IT) >> 1
    }, oT.log10 = function(TT) {
      return TT >= 1e9 ? 9 : TT >= 1e8 ? 8 : TT >= 1e7 ? 7 : TT >= 1e6 ? 6 : TT >= 1e5 ? 5 : TT >= 1e4 ? 4 : TT >= 1e3 ? 3 : TT >= 100 ? 2 : TT >= 10 ? 1 : 0
    }, oT.popCount = function(TT) {
      return 16843009 * ((TT = (858993459 & (TT -= TT >>> 1 & 1431655765)) + (TT >>> 2 & 858993459)) + (TT >>> 4) & 252645135) >>> 24
    }, oT.countTrailingZeros = IT, oT.nextPow2 = function(TT) {
      return TT += 0 === TT, --TT, TT |= TT >>> 1, TT |= TT >>> 2, TT |= TT >>> 4, TT |= TT >>> 8, (TT |= TT >>> 16) + 1
    }, oT.prevPow2 = function(TT) {
      return TT |= TT >>> 1, TT |= TT >>> 2, TT |= TT >>> 4, TT |= TT >>> 8, (TT |= TT >>> 16) - (TT >>> 1)
    }, oT.parity = function(TT) {
      return TT ^= TT >>> 16, TT ^= TT >>> 8, TT ^= TT >>> 4, 27030 >>> (TT &= 15) & 1
    };
    var iT = new Array(256);
    ! function(TT) {
      for (var oT = 0; oT < 256; ++oT) {
        var IT = oT,
          iT = oT,
          zT = 7;
        for (IT >>>= 1; IT; IT >>>= 1) iT <<= 1, iT |= 1 & IT, --zT;
        TT[oT] = iT << zT & 255
      }
    }(iT), oT.reverse = function(TT) {
      return iT[255 & TT] << 24 | iT[TT >>> 8 & 255] << 16 | iT[TT >>> 16 & 255] << 8 | iT[TT >>> 24 & 255]
    }, oT.interleave2 = function(TT, oT) {
      return (TT = 1431655765 & ((TT = 858993459 & ((TT = 252645135 & ((TT = 16711935 & ((TT &= 65535) | TT << 8)) | TT << 4)) | TT << 2)) | TT << 1)) | (oT = 1431655765 & ((oT = 858993459 & ((oT = 252645135 & ((oT = 16711935 & ((oT &= 65535) | oT << 8)) | oT << 4)) | oT << 2)) | oT << 1)) << 1
    }, oT.deinterleave2 = function(TT, oT) {
      return (TT = 65535 & ((TT = 16711935 & ((TT = 252645135 & ((TT = 858993459 & ((TT = TT >>> oT & 1431655765) | TT >>> 1)) | TT >>> 2)) | TT >>> 4)) | TT >>> 16)) << 16 >> 16
    }, oT.interleave3 = function(TT, oT, IT) {
      return TT = 1227133513 & ((TT = 3272356035 & ((TT = 251719695 & ((TT = 4278190335 & ((TT &= 1023) | TT << 16)) | TT << 8)) | TT << 4)) | TT << 2), (TT |= (oT = 1227133513 & ((oT = 3272356035 & ((oT = 251719695 & ((oT = 4278190335 & ((oT &= 1023) | oT << 16)) | oT << 8)) | oT << 4)) | oT << 2)) << 1) | (IT = 1227133513 & ((IT = 3272356035 & ((IT = 251719695 & ((IT = 4278190335 & ((IT &= 1023) | IT << 16)) | IT << 8)) | IT << 4)) | IT << 2)) << 2
    }, oT.deinterleave3 = function(TT, oT) {
      return (TT = 1023 & ((TT = 4278190335 & ((TT = 251719695 & ((TT = 3272356035 & ((TT = TT >>> oT & 1227133513) | TT >>> 2)) | TT >>> 4)) | TT >>> 8)) | TT >>> 16)) << 22 >> 22
    }, oT.nextCombination = function(TT) {
      var oT = TT | TT - 1;
      return oT + 1 | (~oT & -~oT) - 1 >>> IT(TT) + 1
    }
  },
  36175: (TT, oT, IT) => {
    IT.d(oT, {
      Color3: () => iT.e,
      b: () => iT.i
    });
    var iT = IT(36177);
    (0, iT.j)()
  },
  36710: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => zT
    });
    var iT = IT(36717);
    class zT {
      static GetPlanes(TT) {
        const oT = [];
        for (let IT = 0; IT < 6; IT++) oT.push(new iT.b(0, 0, 0, 0));
        return zT.GetPlanesToRef(TT, oT), oT
      }
      static GetNearPlaneToRef(TT, oT) {
        const IT = TT.m;
        oT.normal.x = IT[3] + IT[2], oT.normal.y = IT[7] + IT[6], oT.normal.z = IT[11] + IT[10], oT.d = IT[15] + IT[14], oT.normalize()
      }
      static GetFarPlaneToRef(TT, oT) {
        const IT = TT.m;
        oT.normal.x = IT[3] - IT[2], oT.normal.y = IT[7] - IT[6], oT.normal.z = IT[11] - IT[10], oT.d = IT[15] - IT[14], oT.normalize()
      }
      static GetLeftPlaneToRef(TT, oT) {
        const IT = TT.m;
        oT.normal.x = IT[3] + IT[0], oT.normal.y = IT[7] + IT[4], oT.normal.z = IT[11] + IT[8], oT.d = IT[15] + IT[12], oT.normalize()
      }
      static GetRightPlaneToRef(TT, oT) {
        const IT = TT.m;
        oT.normal.x = IT[3] - IT[0], oT.normal.y = IT[7] - IT[4], oT.normal.z = IT[11] - IT[8], oT.d = IT[15] - IT[12], oT.normalize()
      }
      static GetTopPlaneToRef(TT, oT) {
        const IT = TT.m;
        oT.normal.x = IT[3] - IT[1], oT.normal.y = IT[7] - IT[5], oT.normal.z = IT[11] - IT[9], oT.d = IT[15] - IT[13], oT.normalize()
      }
      static GetBottomPlaneToRef(TT, oT) {
        const IT = TT.m;
        oT.normal.x = IT[3] + IT[1], oT.normal.y = IT[7] + IT[5], oT.normal.z = IT[11] + IT[9], oT.d = IT[15] + IT[13], oT.normalize()
      }
      static GetPlanesToRef(TT, oT) {
        zT.GetNearPlaneToRef(TT, oT[0]), zT.GetFarPlaneToRef(TT, oT[1]), zT.GetLeftPlaneToRef(TT, oT[2]), zT.GetRightPlaneToRef(TT, oT[3]), zT.GetTopPlaneToRef(TT, oT[4]), zT.GetBottomPlaneToRef(TT, oT[5])
      }
      static IsPointInFrustum(TT, oT) {
        for (let IT = 0; IT < 6; IT++)
          if (oT[IT].dotCoordinate(TT) < 0) return !1;
        return !0
      }
    }
  },
  36717: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => zT
    });
    var iT = IT(36118);
    class zT {
      constructor(TT, oT, IT, zT) {
        this.normal = new iT.m(TT, oT, IT), this.d = zT
      }
      bIT() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new zT(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let TT = this.normal.getHashCode();
        return TT = 397 * TT ^ this.d, TT
      }
      normalize() {
        const TT = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let oT = 0;
        return 0 !== TT && (oT = 1 / TT), this.normal.x *= oT, this.normal.y *= oT, this.normal.z *= oT, this.d *= oT, this
      }
      transform(TT) {
        const oT = zT._TmpMatrix;
        TT.invertToRef(oT);
        const IT = oT.m,
          iT = this.normal.x,
          kT = this.normal.y,
          WT = this.normal.z,
          XT = this.d,
          BT = iT * IT[0] + kT * IT[1] + WT * IT[2] + XT * IT[3],
          FT = iT * IT[4] + kT * IT[5] + WT * IT[6] + XT * IT[7],
          ST = iT * IT[8] + kT * IT[9] + WT * IT[10] + XT * IT[11],
          DT = iT * IT[12] + kT * IT[13] + WT * IT[14] + XT * IT[15];
        return new zT(BT, FT, ST, DT)
      }
      dotCoordinate(TT) {
        return this.normal.x * TT.x + this.normal.y * TT.y + this.normal.z * TT.z + this.d
      }
      copyFromPoints(TT, oT, IT) {
        const iT = oT.x - TT.x,
          zT = oT.y - TT.y,
          kT = oT.z - TT.z,
          WT = IT.x - TT.x,
          XT = IT.y - TT.y,
          BT = IT.z - TT.z,
          FT = zT * BT - kT * XT,
          ST = kT * WT - iT * BT,
          DT = iT * XT - zT * WT,
          LT = Math.sqrt(FT * FT + ST * ST + DT * DT);
        let xT;
        return xT = 0 !== LT ? 1 / LT : 0, this.normal.x = FT * xT, this.normal.y = ST * xT, this.normal.z = DT * xT, this.d = -(this.normal.x * TT.x + this.normal.y * TT.y + this.normal.z * TT.z), this
      }
      isFrontFacingTo(TT, oT) {
        return iT.m.Dot(this.normal, TT) <= oT
      }
      signedDistanceTo(TT) {
        return iT.m.Dot(TT, this.normal) + this.d
      }
      static FromArray(TT) {
        return new zT(TT[0], TT[1], TT[2], TT[3])
      }
      static FromPoints(TT, oT, IT) {
        const iT = new zT(0, 0, 0, 0);
        return iT.copyFromPoints(TT, oT, IT), iT
      }
      static FromPositionAndNormal(TT, oT) {
        const IT = new zT(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(TT, oT, IT)
      }
      static FromPositionAndNormalToRef(TT, oT, IT) {
        return IT.normal.SIT(oT), IT.normal.normalize(), IT.d = -TT.dot(IT.normal), IT
      }
      static SignedDistanceToPlaneFromPositionAndNormal(TT, oT, IT) {
        const zT = -(oT.x * TT.x + oT.y * TT.y + oT.z * TT.z);
        return iT.m.Dot(IT, oT) + zT
      }
    }
    zT._TmpMatrix = iT.b.Identity()
  },
  36114: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      Matrix: () => iT.b,
      Quaternion: () => iT.c,
      RegisterMathVector: () => iT.g,
      TmpVectors: () => iT.i,
      Vector2: () => iT.j,
      sc: () => iT.m,
      Vector4: () => iT.n
    });
    var iT = IT(36118);
    (0, iT.g)()
  },
  37105: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => iT
    });
    class iT {
      constructor(TT, oT, IT, iT) {
        this.x = TT, this.y = oT, this.width = IT, this.height = iT
      }
      toGlobal(TT, oT) {
        return new iT(this.x * TT, this.y * oT, this.width * TT, this.height * oT)
      }
      toGlobalToRef(TT, oT, IT) {
        return IT.x = this.x * TT, IT.y = this.y * oT, IT.width = this.width * TT, IT.height = this.height * oT, this
      }
      clone() {
        return new iT(this.x, this.y, this.width, this.height)
      }
    }
  },
  36851: (TT, oT, IT) => {
    function iT() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (TT => {
        const oT = 16 * Math.random() | 0;
        return ("x" === TT ? oT : 3 & oT | 8).toString(16)
      }))
    }
    IT.d(oT, {
      e: () => iT
    })
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);