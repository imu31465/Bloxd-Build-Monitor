/*! For license information please see bcgkc.223.8353be5a.chunk.js.LICENSE.txt */
export const id = 223;
export const ids = [223, 230];
export const modules = {
  38128: TT => {
    TT.exports = function(TT) {
      return null != TT && null != TT.constructor && "function" === typeof TT.constructor.isBuffer && TT.constructor.isBuffer(TT)
    }
  },
  38109: (TT, kT, cT) => {
    var lT = cT(38116),
      MT = cT(38125),
      KT = cT(38128);
    cT.g.__TYPEDARRAY_POOL || (cT.g.__TYPEDARRAY_POOL = {
      UINT8: MT([32, 0]),
      UINT16: MT([32, 0]),
      UINT32: MT([32, 0]),
      INT8: MT([32, 0]),
      INT16: MT([32, 0]),
      INT32: MT([32, 0]),
      FLOAT: MT([32, 0]),
      DOUBLE: MT([32, 0]),
      DATA: MT([32, 0]),
      UINT8C: MT([32, 0]),
      BUFFER: MT([32, 0])
    });
    var OT = "undefined" !== typeof Uint8ClampedArray,
      yT = cT.g.__TYPEDARRAY_POOL;
    yT.UINT8C || (yT.UINT8C = MT([32, 0])), yT.BUFFER || (yT.BUFFER = MT([32, 0]));
    var fT = yT.DATA,
      xT = yT.BUFFER;

    function IT(TT) {
      if (TT) {
        var kT = TT.length || TT.byteLength,
          cT = lT.log2(kT);
        fT[cT].push(TT)
      }
    }

    function AT(TT) {
      TT = lT.nextPow2(TT);
      var kT = lT.log2(TT),
        cT = fT[kT];
      return cT.length > 0 ? cT.pop() : new ArrayBuffer(TT)
    }

    function CT(TT) {
      return new Uint8Array(AT(TT), 0, TT)
    }

    function jT(TT) {
      return new Uint16Array(AT(2 * TT), 0, TT)
    }

    function vT(TT) {
      return new Uint32Array(AT(4 * TT), 0, TT)
    }

    function tT(TT) {
      return new Int8Array(AT(TT), 0, TT)
    }

    function hT(TT) {
      return new Int16Array(AT(2 * TT), 0, TT)
    }

    function NT(TT) {
      return new Int32Array(AT(4 * TT), 0, TT)
    }

    function QT(TT) {
      return new Float32Array(AT(4 * TT), 0, TT)
    }

    function ST(TT) {
      return new Float64Array(AT(8 * TT), 0, TT)
    }

    function DT(TT) {
      return OT ? new Uint8ClampedArray(AT(TT), 0, TT) : CT(TT)
    }

    function aT(TT) {
      return new DataView(AT(TT), 0, TT)
    }
    kT.free = function(TT) {
      if (KT(TT)) xT[lT.log2(TT.length)].push(TT);
      else {
        if ("[object ArrayBuffer]" !== Object.prototype.toString.call(TT) && (TT = TT.buffer), !TT) return;
        var kT = TT.length || TT.byteLength,
          cT = 0 | lT.log2(kT);
        fT[cT].push(TT)
      }
    }, kT.freeUint8 = kT.freeUint16 = kT.freeUint32 = kT.freeInt8 = kT.freeInt16 = kT.freeInt32 = kT.freeFloat32 = kT.freeFloat = kT.freeFloat64 = kT.freeDouble = kT.freeUint8Clamped = kT.freeDataView = function(TT) {
      IT(TT.buffer)
    }, kT.freeArrayBuffer = IT, kT.freeBuffer = function(TT) {
      xT[lT.log2(TT.length)].push(TT)
    }, kT.malloc = function(TT, kT) {
      if (void 0 === kT || "arraybuffer" === kT) return AT(TT);
      switch (kT) {
        case "uint8":
          return CT(TT);
        case "uint16":
          return jT(TT);
        case "uint32":
          return vT(TT);
        case "int8":
          return tT(TT);
        case "int16":
          return hT(TT);
        case "int32":
          return NT(TT);
        case "float":
        case "float32":
          return QT(TT);
        case "double":
        case "float64":
          return ST(TT);
        case "uint8_clamped":
          return DT(TT);
        case "buffer":
          throw "Buffer not supported";
        case "data":
        case "dataview":
          return aT(TT);
        default:
          return null
      }
      return null
    }, kT.mallocArrayBuffer = AT, kT.mallocUint8 = CT, kT.mallocUint16 = jT, kT.mallocUint32 = vT, kT.mallocInt8 = tT, kT.mallocInt16 = hT, kT.mallocInt32 = NT, kT.mallocFloat32 = kT.mallocFloat = QT, kT.mallocFloat64 = kT.mallocDouble = ST, kT.mallocUint8Clamped = DT, kT.mallocDataView = aT, kT.clearCache = function() {
      for (var TT = 0; TT < 32; ++TT) yT.UINT8[TT].length = 0, yT.UINT16[TT].length = 0, yT.UINT32[TT].length = 0, yT.INT8[TT].length = 0, yT.INT16[TT].length = 0, yT.INT32[TT].length = 0, yT.FLOAT[TT].length = 0, yT.DOUBLE[TT].length = 0, yT.UINT8C[TT].length = 0, fT[TT].length = 0, xT[TT].length = 0
    }
  },
  38116: (TT, kT) => {
    function cT(TT) {
      var kT = 32;
      return (TT &= -TT) && kT--, 65535 & TT && (kT -= 16), 16711935 & TT && (kT -= 8), 252645135 & TT && (kT -= 4), 858993459 & TT && (kT -= 2), 1431655765 & TT && (kT -= 1), kT
    }
    kT.INT_BITS = 32, kT.INT_MAX = 2147483647, kT.INT_MIN = -1 << 31, kT.sign = function(TT) {
      return (TT > 0) - (TT < 0)
    }, kT.abs = function(TT) {
      var kT = TT >> 31;
      return (TT ^ kT) - kT
    }, kT.min = function(TT, kT) {
      return kT ^ (TT ^ kT) & -(TT < kT)
    }, kT.max = function(TT, kT) {
      return TT ^ (TT ^ kT) & -(TT < kT)
    }, kT.isPow2 = function(TT) {
      return !(TT & TT - 1) && !!TT
    }, kT.log2 = function(TT) {
      var kT, cT;
      return kT = (TT > 65535) << 4, kT |= cT = ((TT >>>= kT) > 255) << 3, kT |= cT = ((TT >>>= cT) > 15) << 2, (kT |= cT = ((TT >>>= cT) > 3) << 1) | (TT >>>= cT) >> 1
    }, kT.log10 = function(TT) {
      return TT >= 1e9 ? 9 : TT >= 1e8 ? 8 : TT >= 1e7 ? 7 : TT >= 1e6 ? 6 : TT >= 1e5 ? 5 : TT >= 1e4 ? 4 : TT >= 1e3 ? 3 : TT >= 100 ? 2 : TT >= 10 ? 1 : 0
    }, kT.popCount = function(TT) {
      return 16843009 * ((TT = (858993459 & (TT -= TT >>> 1 & 1431655765)) + (TT >>> 2 & 858993459)) + (TT >>> 4) & 252645135) >>> 24
    }, kT.countTrailingZeros = cT, kT.nextPow2 = function(TT) {
      return TT += 0 === TT, --TT, TT |= TT >>> 1, TT |= TT >>> 2, TT |= TT >>> 4, TT |= TT >>> 8, (TT |= TT >>> 16) + 1
    }, kT.prevPow2 = function(TT) {
      return TT |= TT >>> 1, TT |= TT >>> 2, TT |= TT >>> 4, TT |= TT >>> 8, (TT |= TT >>> 16) - (TT >>> 1)
    }, kT.parity = function(TT) {
      return TT ^= TT >>> 16, TT ^= TT >>> 8, TT ^= TT >>> 4, 27030 >>> (TT &= 15) & 1
    };
    var lT = new Array(256);
    ! function(TT) {
      for (var kT = 0; kT < 256; ++kT) {
        var cT = kT,
          lT = kT,
          MT = 7;
        for (cT >>>= 1; cT; cT >>>= 1) lT <<= 1, lT |= 1 & cT, --MT;
        TT[kT] = lT << MT & 255
      }
    }(lT), kT.reverse = function(TT) {
      return lT[255 & TT] << 24 | lT[TT >>> 8 & 255] << 16 | lT[TT >>> 16 & 255] << 8 | lT[TT >>> 24 & 255]
    }, kT.interleave2 = function(TT, kT) {
      return (TT = 1431655765 & ((TT = 858993459 & ((TT = 252645135 & ((TT = 16711935 & ((TT &= 65535) | TT << 8)) | TT << 4)) | TT << 2)) | TT << 1)) | (kT = 1431655765 & ((kT = 858993459 & ((kT = 252645135 & ((kT = 16711935 & ((kT &= 65535) | kT << 8)) | kT << 4)) | kT << 2)) | kT << 1)) << 1
    }, kT.deinterleave2 = function(TT, kT) {
      return (TT = 65535 & ((TT = 16711935 & ((TT = 252645135 & ((TT = 858993459 & ((TT = TT >>> kT & 1431655765) | TT >>> 1)) | TT >>> 2)) | TT >>> 4)) | TT >>> 16)) << 16 >> 16
    }, kT.interleave3 = function(TT, kT, cT) {
      return TT = 1227133513 & ((TT = 3272356035 & ((TT = 251719695 & ((TT = 4278190335 & ((TT &= 1023) | TT << 16)) | TT << 8)) | TT << 4)) | TT << 2), (TT |= (kT = 1227133513 & ((kT = 3272356035 & ((kT = 251719695 & ((kT = 4278190335 & ((kT &= 1023) | kT << 16)) | kT << 8)) | kT << 4)) | kT << 2)) << 1) | (cT = 1227133513 & ((cT = 3272356035 & ((cT = 251719695 & ((cT = 4278190335 & ((cT &= 1023) | cT << 16)) | cT << 8)) | cT << 4)) | cT << 2)) << 2
    }, kT.deinterleave3 = function(TT, kT) {
      return (TT = 1023 & ((TT = 4278190335 & ((TT = 251719695 & ((TT = 3272356035 & ((TT = TT >>> kT & 1227133513) | TT >>> 2)) | TT >>> 4)) | TT >>> 8)) | TT >>> 16)) << 22 >> 22
    }, kT.nextCombination = function(TT) {
      var kT = TT | TT - 1;
      return kT + 1 | (~kT & -~kT) - 1 >>> cT(TT) + 1
    }
  },
  38105: (TT, kT, cT) => {
    TT.exports = function(TT, kT, cT) {
      switch (arguments.length) {
        case 1:
          return lT = [], xT(MT = TT, MT, IT, !0), lT;
        case 2:
          return "function" === typeof kT ? xT(TT, TT, kT, !0) : function(TT, kT) {
            return lT = [], xT(TT, kT, IT, !1), lT
          }(TT, kT);
        case 3:
          return xT(TT, kT, cT, !1);
        default:
          throw new Error("box-intersect: Invalid arguments")
      }
      var MT
    };
    var lT, MT = cT(38109),
      KT = cT(38135),
      OT = cT(38151);

    function yT(TT, kT) {
      for (var cT = 0; cT < TT; ++cT)
        if (!(kT[cT] <= kT[cT + TT])) return !0;
      return !1
    }

    function fT(TT, kT, cT, lT) {
      for (var MT = 0, KT = 0, OT = 0, fT = TT.length; OT < fT; ++OT) {
        var xT = TT[OT];
        if (!yT(kT, xT)) {
          for (var IT = 0; IT < 2 * kT; ++IT) cT[MT++] = xT[IT];
          lT[KT++] = OT
        }
      }
      return KT
    }

    function xT(TT, kT, cT, lT) {
      var yT = TT.length,
        xT = kT.length;
      if (!(yT <= 0 || xT <= 0)) {
        var IT = TT[0].length >>> 1;
        if (!(IT <= 0)) {
          var AT, CT = MT.mallocDouble(2 * IT * yT),
            jT = MT.mallocInt32(yT);
          if ((yT = fT(TT, IT, CT, jT)) > 0) {
            if (1 === IT && lT) KT.init(yT), AT = KT.sweepComplete(IT, cT, 0, yT, CT, jT, 0, yT, CT, jT);
            else {
              var vT = MT.mallocDouble(2 * IT * xT),
                tT = MT.mallocInt32(xT);
              (xT = fT(kT, IT, vT, tT)) > 0 && (KT.init(yT + xT), AT = 1 === IT ? KT.sweepBipartite(IT, cT, 0, yT, CT, jT, 0, xT, vT, tT) : OT(IT, cT, lT, yT, CT, jT, xT, vT, tT), MT.free(vT), MT.free(tT))
            }
            MT.free(CT), MT.free(jT)
          }
          return AT
        }
      }
    }

    function IT(TT, kT) {
      lT.push([TT, kT])
    }
  },
  38158: (TT, kT) => {
    var cT = "d",
      lT = "ax",
      MT = "fp",
      KT = "es",
      OT = "rs",
      yT = "re",
      fT = "rb",
      xT = "bs",
      IT = "be",
      AT = "bb",
      CT = [cT, lT, "vv", OT, yT, fT, "ri", xT, IT, AT, "bi"];

    function jT(TT) {
      var kT = "bruteForce" + (TT ? "Full" : "Partial"),
        lT = [],
        OT = CT.slice();
      TT || OT.splice(3, 0, MT);
      var yT = ["function " + kT + "(" + OT.join() + "){"];

      function fT(kT, MT) {
        var OT = function(TT, kT, lT) {
          var MT = "bruteForce" + (TT ? "Red" : "Blue") + (kT ? "Flip" : "") + (lT ? "Full" : ""),
            OT = ["function ", MT, "(", CT.join(), "){", "var ", KT, "=2*", cT, ";"],
            yT = "for(var i=rs,rp=es*rs;i<re;++i,rp+=es){var x0=rb[ax+rp],x1=rb[ax+rp+d],xi=ri[i];",
            fT = "for(var j=bs,bp=es*bs;j<be;++j,bp+=es){var y0=bb[ax+bp]," + (lT ? "y1=bb[ax+bp+d]," : "") + "yi=bi[j];";
          return TT ? OT.push(yT, "Q", ":", fT) : OT.push(fT, "Q", ":", yT), lT ? OT.push("if(y1<x0||x1<y0)continue;") : kT ? OT.push("if(y0<=x0||x1<y0)continue;") : OT.push("if(y0<x0||x1<y0)continue;"), OT.push("for(var k=ax+1;k<d;++k){var r0=rb[k+rp],r1=rb[k+d+rp],b0=bb[k+bp],b1=bb[k+d+bp];if(r1<b0||b1<r0)continue Q;}var rv=vv("), kT ? OT.push("yi,xi") : OT.push("xi,yi"), OT.push(");if(rv!==void 0)return rv;}}}"), {
            name: MT,
            code: OT.join("")
          }
        }(kT, MT, TT);
        lT.push(OT.code), yT.push("return " + OT.name + "(" + CT.join() + ");")
      }
      yT.push("if(re-rs>be-bs){"), TT ? (fT(!0, !1), yT.push("}else{"), fT(!1, !1)) : (yT.push("if(fp){"), fT(!0, !0), yT.push("}else{"), fT(!0, !1), yT.push("}}else{if(fp){"), fT(!1, !0), yT.push("}else{"), fT(!1, !1), yT.push("}")), yT.push("}}return " + kT);
      var xT = lT.join("") + yT.join("");
      return new Function(xT)()
    }
    kT.partial = jT(!1), kT.full = jT(!0)
  },
  38151: (TT, kT, cT) => {
    TT.exports = function(TT, kT, cT, KT, IT, bT, zT, JT, oT) {
      ! function(TT, kT) {
        var cT = 8 * MT.log2(kT + 1) * (TT + 1) | 0,
          KT = MT.nextPow2(DT * cT);
        FT.length < KT && (lT.free(FT), FT = lT.mallocInt32(KT));
        var OT = MT.nextPow2(aT * cT);
        rT.length < OT && (lT.free(rT), rT = lT.mallocDouble(OT))
      }(TT, KT + zT);
      var HT, eT = 0,
        GT = 2 * TT;
      PT(eT++, 0, 0, KT, 0, zT, cT ? 16 : 0, -1 / 0, 1 / 0), cT || PT(eT++, 0, 0, zT, 0, KT, 1, -1 / 0, 1 / 0);
      for (; eT > 0;) {
        var VT = (eT -= 1) * DT,
          ET = FT[VT],
          ZT = FT[VT + 1],
          uT = FT[VT + 2],
          XT = FT[VT + 3],
          dT = FT[VT + 4],
          LT = FT[VT + 5],
          RT = eT * aT,
          gT = rT[RT],
          UT = rT[RT + 1],
          YT = 1 & LT,
          BT = !!(16 & LT),
          WT = IT,
          nT = bT,
          pT = JT,
          iT = oT;
        if (YT && (WT = JT, nT = oT, pT = IT, iT = bT), !(2 & LT && ZT >= (uT = hT(TT, ET, ZT, uT, WT, nT, UT))) && !(4 & LT && (ZT = NT(TT, ET, ZT, uT, WT, nT, gT)) >= uT)) {
          var qT = uT - ZT,
            sT = dT - XT;
          if (BT) {
            if (TT * qT * (qT + sT) < jT) {
              if (void 0 !== (HT = fT.scanComplete(TT, ET, kT, ZT, uT, WT, nT, XT, dT, pT, iT))) return HT;
              continue
            }
          } else {
            if (TT * Math.min(qT, sT) < AT) {
              if (void 0 !== (HT = OT(TT, ET, kT, YT, ZT, uT, WT, nT, XT, dT, pT, iT))) return HT;
              continue
            }
            if (TT * qT * sT < CT) {
              if (void 0 !== (HT = fT.scanBipartite(TT, ET, kT, YT, ZT, uT, WT, nT, XT, dT, pT, iT))) return HT;
              continue
            }
          }
          var Tk = vT(TT, ET, ZT, uT, WT, nT, gT, UT);
          if (ZT < Tk)
            if (TT * (Tk - ZT) < AT) {
              if (void 0 !== (HT = yT(TT, ET + 1, kT, ZT, Tk, WT, nT, XT, dT, pT, iT))) return HT
            } else if (ET === TT - 2) {
            if (void 0 !== (HT = YT ? fT.sweepBipartite(TT, kT, XT, dT, pT, iT, ZT, Tk, WT, nT) : fT.sweepBipartite(TT, kT, ZT, Tk, WT, nT, XT, dT, pT, iT))) return HT
          } else PT(eT++, ET + 1, ZT, Tk, XT, dT, YT, -1 / 0, 1 / 0), PT(eT++, ET + 1, XT, dT, ZT, Tk, 1 ^ YT, -1 / 0, 1 / 0);
          if (Tk < uT) {
            var kk = xT(TT, ET, XT, dT, pT, iT),
              ck = pT[GT * kk + ET],
              lk = tT(TT, ET, kk, dT, pT, iT, ck);
            if (lk < dT && PT(eT++, ET, Tk, uT, lk, dT, (4 | YT) + (BT ? 16 : 0), ck, UT), XT < kk && PT(eT++, ET, Tk, uT, XT, kk, (2 | YT) + (BT ? 16 : 0), gT, ck), kk + 1 === lk) {
              if (void 0 !== (HT = BT ? mT(TT, ET, kT, Tk, uT, WT, nT, kk, pT, iT[kk]) : wT(TT, ET, kT, YT, Tk, uT, WT, nT, kk, pT, iT[kk]))) return HT
            } else if (kk < lk) {
              var Mk;
              if (BT) {
                if (Tk < (Mk = QT(TT, ET, Tk, uT, WT, nT, ck))) {
                  var Kk = tT(TT, ET, Tk, Mk, WT, nT, ck);
                  if (ET === TT - 2) {
                    if (Tk < Kk && void 0 !== (HT = fT.sweepComplete(TT, kT, Tk, Kk, WT, nT, kk, lk, pT, iT))) return HT;
                    if (Kk < Mk && void 0 !== (HT = fT.sweepBipartite(TT, kT, Kk, Mk, WT, nT, kk, lk, pT, iT))) return HT
                  } else Tk < Kk && PT(eT++, ET + 1, Tk, Kk, kk, lk, 16, -1 / 0, 1 / 0), Kk < Mk && (PT(eT++, ET + 1, Kk, Mk, kk, lk, 0, -1 / 0, 1 / 0), PT(eT++, ET + 1, kk, lk, Kk, Mk, 1, -1 / 0, 1 / 0))
                }
              } else Tk < (Mk = YT ? ST(TT, ET, Tk, uT, WT, nT, ck) : QT(TT, ET, Tk, uT, WT, nT, ck)) && (ET === TT - 2 ? HT = YT ? fT.sweepBipartite(TT, kT, kk, lk, pT, iT, Tk, Mk, WT, nT) : fT.sweepBipartite(TT, kT, Tk, Mk, WT, nT, kk, lk, pT, iT) : (PT(eT++, ET + 1, Tk, Mk, kk, lk, YT, -1 / 0, 1 / 0), PT(eT++, ET + 1, kk, lk, Tk, Mk, 1 ^ YT, -1 / 0, 1 / 0)))
            }
          }
        }
      }
    };
    var lT = cT(38109),
      MT = cT(38116),
      KT = cT(38158),
      OT = KT.partial,
      yT = KT.full,
      fT = cT(38135),
      xT = cT(38161),
      IT = cT(38167),
      AT = 128,
      CT = 1 << 22,
      jT = 1 << 22,
      vT = IT("!(lo>=p0)&&!(p1>=hi)", ["p0", "p1"]),
      tT = IT("lo===p0", ["p0"]),
      hT = IT("lo<p0", ["p0"]),
      NT = IT("hi<=p0", ["p0"]),
      QT = IT("lo<=p0&&p0<=hi", ["p0"]),
      ST = IT("lo<p0&&p0<=hi", ["p0"]),
      DT = 6,
      aT = 2,
      FT = lT.mallocInt32(1024),
      rT = lT.mallocDouble(1024);

    function PT(TT, kT, cT, lT, MT, KT, OT, yT, fT) {
      var xT = DT * TT;
      FT[xT] = kT, FT[xT + 1] = cT, FT[xT + 2] = lT, FT[xT + 3] = MT, FT[xT + 4] = KT, FT[xT + 5] = OT;
      var IT = aT * TT;
      rT[IT] = yT, rT[IT + 1] = fT
    }

    function wT(TT, kT, cT, lT, MT, KT, OT, yT, fT, xT, IT) {
      var AT = 2 * TT,
        CT = fT * AT,
        jT = xT[CT + kT];
      TT: for (var vT = MT, tT = MT * AT; vT < KT; ++vT, tT += AT) {
        var hT = OT[tT + kT],
          NT = OT[tT + kT + TT];
        if (!(jT < hT || NT < jT) && (!lT || jT !== hT)) {
          for (var QT, ST = yT[vT], DT = kT + 1; DT < TT; ++DT) {
            hT = OT[tT + DT], NT = OT[tT + DT + TT];
            var aT = xT[CT + DT],
              FT = xT[CT + DT + TT];
            if (NT < aT || FT < hT) continue TT
          }
          if (void 0 !== (QT = lT ? cT(IT, ST) : cT(ST, IT))) return QT
        }
      }
    }

    function mT(TT, kT, cT, lT, MT, KT, OT, yT, fT, xT) {
      var IT = 2 * TT,
        AT = yT * IT,
        CT = fT[AT + kT];
      TT: for (var jT = lT, vT = lT * IT; jT < MT; ++jT, vT += IT) {
        var tT = OT[jT];
        if (tT !== xT) {
          var hT = KT[vT + kT],
            NT = KT[vT + kT + TT];
          if (!(CT < hT || NT < CT)) {
            for (var QT = kT + 1; QT < TT; ++QT) {
              hT = KT[vT + QT], NT = KT[vT + QT + TT];
              var ST = fT[AT + QT],
                DT = fT[AT + QT + TT];
              if (NT < ST || DT < hT) continue TT
            }
            var aT = cT(tT, xT);
            if (void 0 !== aT) return aT
          }
        }
      }
    }
  },
  38161: (TT, kT, cT) => {
    TT.exports = function(TT, kT, cT, OT, yT, fT) {
      if (OT <= cT + 1) return cT;
      var xT = cT,
        IT = OT,
        AT = OT + cT >>> 1,
        CT = 2 * TT,
        jT = AT,
        vT = yT[CT * AT + kT];
      for (; xT < IT;) {
        if (IT - xT < MT) {
          KT(TT, kT, xT, IT, yT, fT), vT = yT[CT * AT + kT];
          break
        }
        var tT = IT - xT,
          hT = Math.random() * tT + xT | 0,
          NT = yT[CT * hT + kT],
          QT = Math.random() * tT + xT | 0,
          ST = yT[CT * QT + kT],
          DT = Math.random() * tT + xT | 0,
          aT = yT[CT * DT + kT];
        NT <= ST ? aT >= ST ? (jT = QT, vT = ST) : NT >= aT ? (jT = hT, vT = NT) : (jT = DT, vT = aT) : ST >= aT ? (jT = QT, vT = ST) : aT >= NT ? (jT = hT, vT = NT) : (jT = DT, vT = aT);
        for (var FT = CT * (IT - 1), rT = CT * jT, PT = 0; PT < CT; ++PT, ++FT, ++rT) {
          var wT = yT[FT];
          yT[FT] = yT[rT], yT[rT] = wT
        }
        var mT = fT[IT - 1];
        fT[IT - 1] = fT[jT], fT[jT] = mT;
        for (FT = CT * (IT - 1), rT = CT * (jT = lT(TT, kT, xT, IT - 1, yT, fT, vT)), PT = 0; PT < CT; ++PT, ++FT, ++rT) {
          wT = yT[FT];
          yT[FT] = yT[rT], yT[rT] = wT
        }
        mT = fT[IT - 1];
        if (fT[IT - 1] = fT[jT], fT[jT] = mT, AT < jT) {
          for (IT = jT - 1; xT < IT && yT[CT * (IT - 1) + kT] === vT;) IT -= 1;
          IT += 1
        } else {
          if (!(jT < AT)) break;
          for (xT = jT + 1; xT < IT && yT[CT * xT + kT] === vT;) xT += 1
        }
      }
      return lT(TT, kT, cT, AT, yT, fT, yT[CT * AT + kT])
    };
    var lT = cT(38167)("lo<p0", ["p0"]),
      MT = 8;

    function KT(TT, kT, cT, lT, MT, KT) {
      for (var OT = 2 * TT, yT = OT * (cT + 1) + kT, fT = cT + 1; fT < lT; ++fT, yT += OT)
        for (var xT = MT[yT], IT = fT, AT = OT * (fT - 1); IT > cT && MT[AT + kT] > xT; --IT, AT -= OT) {
          for (var CT = AT, jT = AT + OT, vT = 0; vT < OT; ++vT, ++CT, ++jT) {
            var tT = MT[CT];
            MT[CT] = MT[jT], MT[jT] = tT
          }
          var hT = KT[IT];
          KT[IT] = KT[IT - 1], KT[IT - 1] = hT
        }
    }
  },
  38167: TT => {
    TT.exports = function(TT, cT) {
      var lT = "abcdef".split("").concat(cT),
        MT = [];
      TT.indexOf("lo") >= 0 && MT.push("lo=e[k+n]");
      TT.indexOf("hi") >= 0 && MT.push("hi=e[k+o]");
      return lT.push(kT.replace("_", MT.join()).replace("$", TT)), Function.apply(void 0, lT)
    };
    var kT = "for(var j=2*a,k=j*c,l=k,m=c,n=b,o=a+b,p=c;d>p;++p,k+=j){var _;if($)if(m===p)m+=1,l+=j;else{for(var s=0;j>s;++s){var t=e[k+s];e[k+s]=e[l],e[l++]=t}var u=f[p];f[p]=f[m],f[m++]=u}}return m"
  },
  38144: TT => {
    TT.exports = function(TT, lT) {
      lT <= 4 * kT ? cT(0, lT - 1, TT) : xT(0, lT - 1, TT)
    };
    var kT = 32;

    function cT(TT, kT, cT) {
      for (var lT = 2 * (TT + 1), MT = TT + 1; MT <= kT; ++MT) {
        for (var KT = cT[lT++], OT = cT[lT++], yT = MT, fT = lT - 2; yT-- > TT;) {
          var xT = cT[fT - 2],
            IT = cT[fT - 1];
          if (xT < KT) break;
          if (xT === KT && IT < OT) break;
          cT[fT] = xT, cT[fT + 1] = IT, fT -= 2
        }
        cT[fT] = KT, cT[fT + 1] = OT
      }
    }

    function lT(TT, kT, cT) {
      kT *= 2;
      var lT = cT[TT *= 2],
        MT = cT[TT + 1];
      cT[TT] = cT[kT], cT[TT + 1] = cT[kT + 1], cT[kT] = lT, cT[kT + 1] = MT
    }

    function MT(TT, kT, cT) {
      kT *= 2, cT[TT *= 2] = cT[kT], cT[TT + 1] = cT[kT + 1]
    }

    function KT(TT, kT, cT, lT) {
      kT *= 2, cT *= 2;
      var MT = lT[TT *= 2],
        KT = lT[TT + 1];
      lT[TT] = lT[kT], lT[TT + 1] = lT[kT + 1], lT[kT] = lT[cT], lT[kT + 1] = lT[cT + 1], lT[cT] = MT, lT[cT + 1] = KT
    }

    function OT(TT, kT, cT, lT, MT) {
      kT *= 2, MT[TT *= 2] = MT[kT], MT[kT] = cT, MT[TT + 1] = MT[kT + 1], MT[kT + 1] = lT
    }

    function yT(TT, kT, cT) {
      kT *= 2;
      var lT = cT[TT *= 2],
        MT = cT[kT];
      return !(lT < MT) && (lT !== MT || cT[TT + 1] > cT[kT + 1])
    }

    function fT(TT, kT, cT, lT) {
      var MT = lT[TT *= 2];
      return MT < kT || MT === kT && lT[TT + 1] < cT
    }

    function xT(TT, IT, AT) {
      var CT = (IT - TT + 1) / 6 | 0,
        jT = TT + CT,
        vT = IT - CT,
        tT = TT + IT >> 1,
        hT = tT - CT,
        NT = tT + CT,
        QT = jT,
        ST = hT,
        DT = tT,
        aT = NT,
        FT = vT,
        rT = TT + 1,
        PT = IT - 1,
        wT = 0;
      yT(QT, ST, AT) && (wT = QT, QT = ST, ST = wT), yT(aT, FT, AT) && (wT = aT, aT = FT, FT = wT), yT(QT, DT, AT) && (wT = QT, QT = DT, DT = wT), yT(ST, DT, AT) && (wT = ST, ST = DT, DT = wT), yT(QT, aT, AT) && (wT = QT, QT = aT, aT = wT), yT(DT, aT, AT) && (wT = DT, DT = aT, aT = wT), yT(ST, FT, AT) && (wT = ST, ST = FT, FT = wT), yT(ST, DT, AT) && (wT = ST, ST = DT, DT = wT), yT(aT, FT, AT) && (wT = aT, aT = FT, FT = wT);
      for (var mT = AT[2 * ST], bT = AT[2 * ST + 1], zT = AT[2 * aT], JT = AT[2 * aT + 1], oT = 2 * QT, HT = 2 * DT, eT = 2 * FT, GT = 2 * jT, VT = 2 * tT, ET = 2 * vT, ZT = 0; ZT < 2; ++ZT) {
        var uT = AT[oT + ZT],
          XT = AT[HT + ZT],
          dT = AT[eT + ZT];
        AT[GT + ZT] = uT, AT[VT + ZT] = XT, AT[ET + ZT] = dT
      }
      MT(hT, TT, AT), MT(NT, IT, AT);
      for (var LT = rT; LT <= PT; ++LT)
        if (fT(LT, mT, bT, AT)) LT !== rT && lT(LT, rT, AT), ++rT;
        else if (!fT(LT, zT, JT, AT))
        for (;;) {
          if (fT(PT, zT, JT, AT)) {
            fT(PT, mT, bT, AT) ? (KT(LT, rT, PT, AT), ++rT, --PT) : (lT(LT, PT, AT), --PT);
            break
          }
          if (--PT < LT) break
        }
      OT(TT, rT - 1, mT, bT, AT), OT(IT, PT + 1, zT, JT, AT), rT - 2 - TT <= kT ? cT(TT, rT - 2, AT) : xT(TT, rT - 2, AT), IT - (PT + 2) <= kT ? cT(PT + 2, IT, AT) : xT(PT + 2, IT, AT), PT - rT <= kT ? cT(rT, PT, AT) : xT(rT, PT, AT)
    }
  },
  38135: (TT, kT, cT) => {
    TT.exports = {
      init: function(TT) {
        var kT = MT.nextPow2(TT);
        fT.length < kT && (lT.free(fT), fT = lT.mallocInt32(kT));
        xT.length < kT && (lT.free(xT), xT = lT.mallocInt32(kT));
        IT.length < kT && (lT.free(IT), IT = lT.mallocInt32(kT));
        AT.length < kT && (lT.free(AT), AT = lT.mallocInt32(kT));
        CT.length < kT && (lT.free(CT), CT = lT.mallocInt32(kT));
        jT.length < kT && (lT.free(jT), jT = lT.mallocInt32(kT));
        var cT = 8 * kT;
        vT.length < cT && (lT.free(vT), vT = lT.mallocDouble(cT))
      },
      sweepBipartite: function(TT, kT, cT, lT, MT, yT, CT, jT, NT, QT) {
        for (var ST = 0, DT = 2 * TT, aT = TT - 1, FT = DT - 1, rT = cT; rT < lT; ++rT) {
          var PT = yT[rT],
            wT = DT * rT;
          vT[ST++] = MT[wT + aT], vT[ST++] = -(PT + 1), vT[ST++] = MT[wT + FT], vT[ST++] = PT
        }
        for (rT = CT; rT < jT; ++rT) {
          PT = QT[rT] + OT;
          var mT = DT * rT;
          vT[ST++] = NT[mT + aT], vT[ST++] = -PT, vT[ST++] = NT[mT + FT], vT[ST++] = PT
        }
        var bT = ST >>> 1;
        KT(vT, bT);
        var zT = 0,
          JT = 0;
        for (rT = 0; rT < bT; ++rT) {
          var oT = 0 | vT[2 * rT + 1];
          if (oT >= OT) tT(IT, AT, JT--, oT = oT - OT | 0);
          else if (oT >= 0) tT(fT, xT, zT--, oT);
          else if (oT <= -OT) {
            oT = -oT - OT | 0;
            for (var HT = 0; HT < zT; ++HT) {
              if (void 0 !== (eT = kT(fT[HT], oT))) return eT
            }
            hT(IT, AT, JT++, oT)
          } else {
            oT = -oT - 1 | 0;
            for (HT = 0; HT < JT; ++HT) {
              var eT;
              if (void 0 !== (eT = kT(oT, IT[HT]))) return eT
            }
            hT(fT, xT, zT++, oT)
          }
        }
      },
      sweepComplete: function(TT, kT, cT, lT, MT, OT, yT, NT, QT, ST) {
        for (var DT = 0, aT = 2 * TT, FT = TT - 1, rT = aT - 1, PT = cT; PT < lT; ++PT) {
          var wT = OT[PT] + 1 << 1,
            mT = aT * PT;
          vT[DT++] = MT[mT + FT], vT[DT++] = -wT, vT[DT++] = MT[mT + rT], vT[DT++] = wT
        }
        for (PT = yT; PT < NT; ++PT) {
          wT = ST[PT] + 1 << 1;
          var bT = aT * PT;
          vT[DT++] = QT[bT + FT], vT[DT++] = 1 | -wT, vT[DT++] = QT[bT + rT], vT[DT++] = 1 | wT
        }
        var zT = DT >>> 1;
        KT(vT, zT);
        var JT = 0,
          oT = 0,
          HT = 0;
        for (PT = 0; PT < zT; ++PT) {
          var eT = 0 | vT[2 * PT + 1],
            GT = 1 & eT;
          if (PT < zT - 1 && eT >> 1 === vT[2 * PT + 3] >> 1 && (GT = 2, PT += 1), eT < 0) {
            for (var VT = -(eT >> 1) - 1, ET = 0; ET < HT; ++ET) {
              if (void 0 !== (ZT = kT(CT[ET], VT))) return ZT
            }
            if (0 !== GT)
              for (ET = 0; ET < JT; ++ET) {
                if (void 0 !== (ZT = kT(fT[ET], VT))) return ZT
              }
            if (1 !== GT)
              for (ET = 0; ET < oT; ++ET) {
                var ZT;
                if (void 0 !== (ZT = kT(IT[ET], VT))) return ZT
              }
            0 === GT ? hT(fT, xT, JT++, VT) : 1 === GT ? hT(IT, AT, oT++, VT) : 2 === GT && hT(CT, jT, HT++, VT)
          } else {
            VT = (eT >> 1) - 1;
            0 === GT ? tT(fT, xT, JT--, VT) : 1 === GT ? tT(IT, AT, oT--, VT) : 2 === GT && tT(CT, jT, HT--, VT)
          }
        }
      },
      scanBipartite: function(TT, kT, cT, lT, MT, yT, IT, AT, CT, jT, NT, QT) {
        var ST = 0,
          DT = 2 * TT,
          aT = kT,
          FT = kT + TT,
          rT = 1,
          PT = 1;
        lT ? PT = OT : rT = OT;
        for (var wT = MT; wT < yT; ++wT) {
          var mT = wT + rT,
            bT = DT * wT;
          vT[ST++] = IT[bT + aT], vT[ST++] = -mT, vT[ST++] = IT[bT + FT], vT[ST++] = mT
        }
        for (wT = CT; wT < jT; ++wT) {
          mT = wT + PT;
          var zT = DT * wT;
          vT[ST++] = NT[zT + aT], vT[ST++] = -mT
        }
        var JT = ST >>> 1;
        KT(vT, JT);
        var oT = 0;
        for (wT = 0; wT < JT; ++wT) {
          var HT = 0 | vT[2 * wT + 1];
          if (HT < 0) {
            var eT = !1;
            if ((mT = -HT) >= OT ? (eT = !lT, mT -= OT) : (eT = !!lT, mT -= 1), eT) hT(fT, xT, oT++, mT);
            else {
              var GT = QT[mT],
                VT = DT * mT,
                ET = NT[VT + kT + 1],
                ZT = NT[VT + kT + 1 + TT];
              TT: for (var uT = 0; uT < oT; ++uT) {
                var XT = fT[uT],
                  dT = DT * XT;
                if (!(ZT < IT[dT + kT + 1] || IT[dT + kT + 1 + TT] < ET)) {
                  for (var LT = kT + 2; LT < TT; ++LT)
                    if (NT[VT + LT + TT] < IT[dT + LT] || IT[dT + LT + TT] < NT[VT + LT]) continue TT;
                  var RT, gT = AT[XT];
                  if (void 0 !== (RT = lT ? cT(GT, gT) : cT(gT, GT))) return RT
                }
              }
            }
          } else tT(fT, xT, oT--, HT - rT)
        }
      },
      scanComplete: function(TT, kT, cT, lT, MT, yT, xT, IT, AT, CT, jT) {
        for (var tT = 0, hT = 2 * TT, NT = kT, QT = kT + TT, ST = lT; ST < MT; ++ST) {
          var DT = ST + OT,
            aT = hT * ST;
          vT[tT++] = yT[aT + NT], vT[tT++] = -DT, vT[tT++] = yT[aT + QT], vT[tT++] = DT
        }
        for (ST = IT; ST < AT; ++ST) {
          DT = ST + 1;
          var FT = hT * ST;
          vT[tT++] = CT[FT + NT], vT[tT++] = -DT
        }
        var rT = tT >>> 1;
        KT(vT, rT);
        var PT = 0;
        for (ST = 0; ST < rT; ++ST) {
          var wT = 0 | vT[2 * ST + 1];
          if (wT < 0) {
            if ((DT = -wT) >= OT) fT[PT++] = DT - OT;
            else {
              var mT = jT[DT -= 1],
                bT = hT * DT,
                zT = CT[bT + kT + 1],
                JT = CT[bT + kT + 1 + TT];
              TT: for (var oT = 0; oT < PT; ++oT) {
                var HT = fT[oT],
                  eT = xT[HT];
                if (eT === mT) break;
                var GT = hT * HT;
                if (!(JT < yT[GT + kT + 1] || yT[GT + kT + 1 + TT] < zT)) {
                  for (var VT = kT + 2; VT < TT; ++VT)
                    if (CT[bT + VT + TT] < yT[GT + VT] || yT[GT + VT + TT] < CT[bT + VT]) continue TT;
                  var ET = cT(eT, mT);
                  if (void 0 !== ET) return ET
                }
              }
            }
          } else {
            for (DT = wT - OT, oT = PT - 1; oT >= 0; --oT)
              if (fT[oT] === DT) {
                for (VT = oT + 1; VT < PT; ++VT) fT[VT - 1] = fT[VT];
                break
              }-- PT
          }
        }
      }
    };
    var lT = cT(38109),
      MT = cT(38116),
      KT = cT(38144),
      OT = 1 << 28,
      yT = 1024,
      fT = lT.mallocInt32(yT),
      xT = lT.mallocInt32(yT),
      IT = lT.mallocInt32(yT),
      AT = lT.mallocInt32(yT),
      CT = lT.mallocInt32(yT),
      jT = lT.mallocInt32(yT),
      vT = lT.mallocDouble(8192);

    function tT(TT, kT, cT, lT) {
      var MT = kT[lT],
        KT = TT[cT - 1];
      TT[MT] = KT, kT[KT] = MT
    }

    function hT(TT, kT, cT, lT) {
      TT[cT] = lT, kT[lT] = cT
    }
  },
  38125: TT => {
    function kT(TT, cT, lT) {
      var MT = 0 | TT[lT];
      if (MT <= 0) return [];
      var KT, OT = new Array(MT);
      if (lT === TT.length - 1)
        for (KT = 0; KT < MT; ++KT) OT[KT] = cT;
      else
        for (KT = 0; KT < MT; ++KT) OT[KT] = kT(TT, cT, lT + 1);
      return OT
    }
    TT.exports = function(TT, cT) {
      switch ("undefined" === typeof cT && (cT = 0), typeof TT) {
        case "number":
          if (TT > 0) return function(TT, kT) {
            var cT, lT;
            for (cT = new Array(TT), lT = 0; lT < TT; ++lT) cT[lT] = kT;
            return cT
          }(0 | TT, cT);
          break;
        case "object":
          if ("number" === typeof TT.length) return kT(TT, cT, 0)
      }
      return []
    }
  },
  38077: (TT, kT, cT) => {
    TT.exports = function() {
      var TT = this;
      this.components = {}, this.comps = this.components;
      var kT = this.components,
        cT = 1,
        MT = {},
        KT = [],
        OT = [],
        yT = {
          timeout: !1,
          removals: [],
          multiComps: []
        };

      function fT(TT, cT) {
        var lT = kT[cT],
          KT = MT[cT],
          OT = KT.hash[TT];
        OT && (KT.remove(TT), lT.Om && (lT.multi ? (OT.forEach((kT => {
          kT && lT.Om(TT, kT)
        })), OT.length = 0) : lT.Om(TT, OT)), yT.removals.push(KT), xT())
      }

      function xT() {
        yT.timeout || (yT.timeout = !0, setTimeout(IT, 1))
      }

      function IT() {
        yT.timeout = !1, AT()
      }

      function AT() {
        yT.multiComps.length && function(TT) {
          for (var kT = 0; kT < TT.length; kT++) {
            var {
              entID: cT,
              data: lT
            } = TT[kT], MT = lT.hash[cT];
            if (MT) {
              for (var KT = 0; KT < MT.length; KT++) MT[KT] || (MT.splice(KT, 1), KT--);
              0 === MT.length && (lT.remove(cT), yT.removals.push(lT))
            }
          }
          TT.length = 0
        }(yT.multiComps), yT.removals.length && function(TT) {
          for (var kT = 0; kT < TT.length; kT++) {
            TT[kT].flush()
          }
          TT.length = 0
        }(yT.removals)
      }
      this.ft = MT, this._systems = KT, this._renderSystems = OT, this.tL = function(kT) {
        var lT = cT++;
        return Array.isArray(kT) && kT.forEach((kT => TT.dJ(lT, kT))), lT
      }, this.deleteEntity = function(kT) {
        return Object.keys(MT).forEach((TT => {
          MT[TT].hash[kT] && fT(kT, TT)
        })), TT
      }, this.sTT = function(TT) {
        if (!TT) throw new Error("Missing component definition");
        var cT = TT.name;
        if (!cT) throw new Error("Component definition must have a name property.");
        if ("string" !== typeof cT) throw new Error("Component name must be a string.");
        if ("" === cT) throw new Error("Component name must be a non-empty string.");
        if (MT[cT]) throw new Error(`Component ${cT} already exists.`);
        var yT = {};
        return yT.name = cT, yT.multi = !!TT.multi, yT.order = isNaN(TT.order) ? 99 : TT.order, yT.stateConstructor = TT.stateConstructor || null, yT.state = TT.state || {}, yT.uF = TT.uF || null, yT.Om = TT.Om || null, yT.system = TT.system || null, yT.ZN = TT.ZN || null, kT[cT] = yT, MT[cT] = new lT, MT[cT]._pendingMultiCleanup = !1, MT[cT]._multiCleanupIDs = yT.multi ? [] : null, yT.system && (KT.push(cT), KT.sort(((TT, cT) => kT[TT].order - kT[cT].order))), yT.ZN && (OT.push(cT), OT.sort(((TT, cT) => kT[TT].order - kT[cT].order))), cT
      }, this.overwriteComponent = function(TT, cT) {
        var lT = kT[TT];
        if (!lT) throw new Error(`Unknown component: ${TT}`);
        if (!cT) throw new Error("Missing component definition");
        if (lT.name !== cT.name) throw new Error("Overwriting component must use the same name property.");
        var yT = {};
        yT.name = TT, yT.multi = !!cT.multi, yT.order = isNaN(cT.order) ? 99 : cT.order, yT.state = cT.state || {}, yT.uF = cT.uF || null, yT.Om = cT.Om || null, yT.system = cT.system || null, yT.ZN = cT.ZN || null, kT[TT] = yT, MT[TT]._pendingMultiCleanup = !1, MT[TT]._multiCleanupIDs = yT.multi ? [] : null;
        var fT = KT.indexOf(TT);
        yT.system && fT < 0 && KT.push(TT), !yT.system && fT >= 0 && KT.splice(fT, 1), KT.sort(((TT, cT) => kT[TT].order - kT[cT].order));
        var xT = OT.indexOf(TT);
        yT.ZN && xT < 0 && OT.push(TT), !yT.ZN && xT >= 0 && OT.splice(xT, 1), OT.sort(((TT, cT) => kT[TT].order - kT[cT].order));
        var IT = yT.state;
        return this.VJ(TT).forEach((TT => {
          for (var kT in IT) kT in TT || (TT[kT] = IT[kT]);
          yT.uF && yT.uF(TT.ZJ, TT)
        })), TT
      }, this.deleteComponent = function(cT) {
        var lT = MT[cT];
        if (!lT) throw new Error(`Unknown component: ${cT}`);
        lT.flush(), lT.list.forEach((TT => {
          TT && fT(TT.ZJ || TT[0].ZJ, cT)
        }));
        var yT = KT.indexOf(cT),
          xT = OT.indexOf(cT);
        return yT > -1 && KT.splice(yT, 1), xT > -1 && OT.splice(xT, 1), MT[cT].dispose(), delete MT[cT], delete kT[cT], TT
      }, this.dJ = function(TT, cT, lT) {
        var KT, OT = kT[cT],
          yT = MT[cT];
        if (!yT) throw new Error(`Unknown component: ${cT}.`);
        if (yT.hash[TT] && !OT.multi) throw new Error(`Entity ${TT} already has component: ${cT}.`);
        if (OT.stateConstructor) {
          if (!(KT = new OT.stateConstructor).hasOwnProperty("ZJ")) throw new Error(`Component ${OT.name} stateConstructor type does not have property __id`);
          Object.assign(KT, OT.state, lT)
        } else KT = {
          ZJ: TT,
          ...OT.state,
          ...lT
        };
        if (KT.ZJ = TT, OT.multi) {
          var fT = yT.hash[TT];
          fT || (fT = [], yT.add(TT, fT)), fT.push(KT)
        } else yT.add(TT, KT);
        return OT.uF && OT.uF(TT, KT), this
      }, this.o9 = function(TT, kT) {
        var cT = MT[kT];
        if (!cT) throw new Error(`Unknown component: ${kT}.`);
        return !!cT.hash[TT]
      }, this.LJ = function(kT, cT) {
        if (!MT[cT]) throw new Error(`Unknown component: ${cT}.`);
        return fT(kT, cT), TT
      }, this.getState = function(TT, kT) {
        var cT = MT[kT];
        if (!cT) throw new Error(`Unknown component: ${kT}.`);
        return cT.hash[TT]
      }, this.VJ = function(TT) {
        var kT = MT[TT];
        if (!kT) throw new Error(`Unknown component: ${TT}.`);
        return AT(), kT.list
      }, this.JTT = function(TT) {
        if (!MT[TT]) throw new Error(`Unknown component: ${TT}.`);
        var kT = MT[TT].hash;
        return TT => kT[TT]
      }, this.ZTT = function(TT) {
        if (!MT[TT]) throw new Error(`Unknown component: ${TT}.`);
        var kT = MT[TT].hash;
        return TT => !!kT[TT]
      }, this.UA = function(cT) {
        AT();
        for (var lT = 0; lT < KT.length; lT++) {
          var OT = KT[lT],
            yT = kT[OT],
            fT = MT[OT];
          yT.system(cT, fT.list), AT()
        }
        return TT
      }, this.render = function(cT) {
        AT();
        for (var lT = 0; lT < OT.length; lT++) {
          var KT = OT[lT],
            yT = kT[KT],
            fT = MT[KT];
          yT.ZN(cT, fT.list), AT()
        }
        return TT
      }, this.removeMultiComponent = function(cT, lT, KT) {
        var OT = kT[lT],
          fT = MT[lT];
        if (!fT) throw new Error(`Unknown component: ${lT}.`);
        if (!OT.multi) throw new Error("removeMultiComponent called on non-multi component");
        return function(TT, kT, cT, lT) {
          var MT = cT.hash[TT];
          if (MT) {
            var KT = MT[lT];
            KT && (MT[lT] = null, kT.Om && kT.Om(TT, KT), yT.multiComps.push({
              entID: TT,
              data: cT
            }), xT())
          }
        }(cT, OT, fT, KT), TT
      }
    };
    var lT = cT(38080)
  },
  38080: TT => {
    function kT(TT, kT) {
      var cT = TT._map[kT];
      if (delete TT.hash[kT], delete TT._map[kT], cT === TT.list.length - 1) TT.list.pop(), TT._idList.pop();
      else {
        var lT = TT.list.pop();
        TT.list[cT] = lT;
        var MT = TT._idList.pop();
        TT._idList[cT] = MT, TT._map[MT] = cT
      }
    }
    TT.exports = class {
      constructor() {
        this.list = [], this.hash = {}, this._map = {}, this._idList = [], this._pendingRemovals = []
      }
      add(TT, kT) {
        if ("number" === typeof this._map[TT]) {
          var cT = this._map[TT];
          this.hash[TT] = kT, this.list[cT] = kT, this._idList[cT] = TT
        } else this._map[TT] = this.list.length, this.hash[TT] = kT, this.list.push(kT), this._idList.push(TT)
      }
      remove(TT) {
        var kT = this._map[TT];
        this.hash[TT] = null, this.list[kT] = null, this._pendingRemovals.push(TT)
      }
      dispose() {
        this.list = null, this.hash = null, this._map = null, this._idList = null, this._pendingRemovals.length = 0
      }
      flush() {
        for (var TT = 0; TT < this._pendingRemovals.length; TT++) {
          var cT = this._pendingRemovals[TT];
          null === this.hash[cT] && kT(this, cT)
        }
        this._pendingRemovals.length = 0
      }
    }
  },
  37583: TT => {
    TT.exports = function(TT) {
      for (var kT = new Array(TT), cT = 0; cT < TT; ++cT) kT[cT] = cT;
      return kT
    }
  },
  37585: TT => {
    function kT(TT) {
      return !!TT.constructor && "function" === typeof TT.constructor.isBuffer && TT.constructor.isBuffer(TT)
    }
    TT.exports = function(TT) {
      return null != TT && (kT(TT) || function(TT) {
        return "function" === typeof TT.readFloatLE && "function" === typeof TT.slice && kT(TT.slice(0, 0))
      }(TT) || !!TT._isBuffer)
    }
  },
  37891: (TT, kT, cT) => {
    TT = cT.nmd(TT);
    var lT = "__lodash_hash_undefined__",
      MT = 9007199254740991,
      KT = "[object Arguments]",
      OT = "[object Boolean]",
      yT = "[object Date]",
      fT = "[object Function]",
      xT = "[object GeneratorFunction]",
      IT = "[object Map]",
      AT = "[object Number]",
      CT = "[object Object]",
      jT = "[object Promise]",
      vT = "[object RegExp]",
      tT = "[object Set]",
      hT = "[object String]",
      NT = "[object Symbol]",
      QT = "[object WeakMap]",
      ST = "[object ArrayBuffer]",
      DT = "[object DataView]",
      aT = "[object Float32Array]",
      FT = "[object Float64Array]",
      rT = "[object Int8Array]",
      PT = "[object Int16Array]",
      wT = "[object Int32Array]",
      mT = "[object Uint8Array]",
      bT = "[object Uint8ClampedArray]",
      zT = "[object Uint16Array]",
      JT = "[object Uint32Array]",
      oT = /\w*$/,
      HT = /^\[object .+?Constructor\]$/,
      eT = /^(?:0|[1-9]\d*)$/,
      GT = {};
    GT[KT] = GT["[object Array]"] = GT[ST] = GT[DT] = GT[OT] = GT[yT] = GT[aT] = GT[FT] = GT[rT] = GT[PT] = GT[wT] = GT[IT] = GT[AT] = GT[CT] = GT[vT] = GT[tT] = GT[hT] = GT[NT] = GT[mT] = GT[bT] = GT[zT] = GT[JT] = !0, GT["[object Error]"] = GT[fT] = GT[QT] = !1;
    var VT = "object" == typeof cT.g && cT.g && cT.g.Object === Object && cT.g,
      ET = "object" == typeof self && self && self.Object === Object && self,
      ZT = VT || ET || Function("return this")(),
      uT = kT && !kT.nodeType && kT,
      XT = uT && TT && !TT.nodeType && TT,
      dT = XT && XT.exports === uT;

    function LT(TT, kT) {
      return TT.set(kT[0], kT[1]), TT
    }

    function RT(TT, kT) {
      return TT.add(kT), TT
    }

    function gT(TT, kT, cT, lT) {
      var MT = -1,
        KT = TT ? TT.length : 0;
      for (lT && KT && (cT = TT[++MT]); ++MT < KT;) cT = kT(cT, TT[MT], MT, TT);
      return cT
    }

    function UT(TT) {
      var kT = !1;
      if (null != TT && "function" != typeof TT.toString) try {
        kT = !!(TT + "")
      } catch (cT) {}
      return kT
    }

    function YT(TT) {
      var kT = -1,
        cT = Array(TT.size);
      return TT.forEach((function(TT, lT) {
        cT[++kT] = [lT, TT]
      })), cT
    }

    function BT(TT, kT) {
      return function(cT) {
        return TT(kT(cT))
      }
    }

    function WT(TT) {
      var kT = -1,
        cT = Array(TT.size);
      return TT.forEach((function(TT) {
        cT[++kT] = TT
      })), cT
    }
    var nT = Array.prototype,
      pT = Function.prototype,
      iT = Object.prototype,
      qT = ZT["__core-js_shared__"],
      sT = function() {
        var TT = /[^.]+$/.exec(qT && qT.keys && qT.keys.IE_PROTO || "");
        return TT ? "Symbol(src)_1." + TT : ""
      }(),
      Tk = pT.toString,
      kk = iT.hasOwnProperty,
      ck = iT.toString,
      lk = RegExp("^" + Tk.call(kk).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
      Mk = dT ? ZT.Ov : void 0,
      Kk = ZT.Symbol,
      Ok = ZT.Uint8Array,
      yk = BT(Object.getPrototypeOf, Object),
      fk = Object.create,
      xk = iT.propertyIsEnumerable,
      Ik = nT.splice,
      Ak = Object.getOwnPropertySymbols,
      Ck = Mk ? Mk.isBuffer : void 0,
      jk = BT(Object.keys, Object),
      vk = Lk(ZT, "DataView"),
      tk = Lk(ZT, "Map"),
      hk = Lk(ZT, "Promise"),
      Nk = Lk(ZT, "Set"),
      Qk = Lk(ZT, "WeakMap"),
      Sk = Lk(Object, "create"),
      Dk = Bk(vk),
      ak = Bk(tk),
      Fk = Bk(hk),
      rk = Bk(Nk),
      Pk = Bk(Qk),
      wk = Kk ? Kk.prototype : void 0,
      mk = wk ? wk.valueOf : void 0;

    function bk(TT) {
      var kT = -1,
        cT = TT ? TT.length : 0;
      for (this.clear(); ++kT < cT;) {
        var lT = TT[kT];
        this.set(lT[0], lT[1])
      }
    }

    function zk(TT) {
      var kT = -1,
        cT = TT ? TT.length : 0;
      for (this.clear(); ++kT < cT;) {
        var lT = TT[kT];
        this.set(lT[0], lT[1])
      }
    }

    function Jk(TT) {
      var kT = -1,
        cT = TT ? TT.length : 0;
      for (this.clear(); ++kT < cT;) {
        var lT = TT[kT];
        this.set(lT[0], lT[1])
      }
    }

    function Hk(TT) {
      this.__data__ = new zk(TT)
    }

    function ek(TT, kT) {
      var cT = nk(TT) || function(TT) {
          return function(TT) {
            return function(TT) {
              return !!TT && "object" == typeof TT
            }(TT) && pk(TT)
          }(TT) && kk.call(TT, "callee") && (!xk.call(TT, "callee") || ck.call(TT) == KT)
        }(TT) ? function(TT, kT) {
          for (var cT = -1, lT = Array(TT); ++cT < TT;) lT[cT] = kT(cT);
          return lT
        }(TT.length, String) : [],
        lT = cT.length,
        MT = !!lT;
      for (var OT in TT) !kT && !kk.call(TT, OT) || MT && ("length" == OT || Uk(OT, lT)) || cT.push(OT);
      return cT
    }

    function Gk(TT, kT, cT) {
      var lT = TT[kT];
      kk.call(TT, kT) && Wk(lT, cT) && (void 0 !== cT || kT in TT) || (TT[kT] = cT)
    }

    function Vk(TT, kT) {
      for (var cT = TT.length; cT--;)
        if (Wk(TT[cT][0], kT)) return cT;
      return -1
    }

    function Ek(TT, kT, cT, lT, MT, jT, QT) {
      var HT;
      if (lT && (HT = jT ? lT(TT, MT, jT, QT) : lT(TT)), void 0 !== HT) return HT;
      if (!sk(TT)) return TT;
      var eT = nk(TT);
      if (eT) {
        if (HT = function(TT) {
            var kT = TT.length,
              cT = TT.constructor(kT);
            kT && "string" == typeof TT[0] && kk.call(TT, "index") && (cT.index = TT.index, cT.input = TT.input);
            return cT
          }(TT), !kT) return function(TT, kT) {
          var cT = -1,
            lT = TT.length;
          kT || (kT = Array(lT));
          for (; ++cT < lT;) kT[cT] = TT[cT];
          return kT
        }(TT, HT)
      } else {
        var VT = gk(TT),
          ET = VT == fT || VT == xT;
        if (ik(TT)) return function(TT, kT) {
          if (kT) return TT.slice();
          var cT = new TT.constructor(TT.length);
          return TT.copy(cT), cT
        }(TT, kT);
        if (VT == CT || VT == KT || ET && !jT) {
          if (UT(TT)) return jT ? TT : {};
          if (HT = function(TT) {
              return "function" != typeof TT.constructor || Yk(TT) ? {} : (kT = yk(TT), sk(kT) ? fk(kT) : {});
              var kT
            }(ET ? {} : TT), !kT) return function(TT, kT) {
            return Xk(TT, Rk(TT), kT)
          }(TT, function(TT, kT) {
            return TT && Xk(kT, Tc(kT), TT)
          }(HT, TT))
        } else {
          if (!GT[VT]) return jT ? TT : {};
          HT = function(TT, kT, cT, lT) {
            var MT = TT.constructor;
            switch (kT) {
              case ST:
                return uk(TT);
              case OT:
              case yT:
                return new MT(+TT);
              case DT:
                return function(TT, kT) {
                  var cT = kT ? uk(TT.buffer) : TT.buffer;
                  return new TT.constructor(cT, TT.byteOffset, TT.byteLength)
                }(TT, lT);
              case aT:
              case FT:
              case rT:
              case PT:
              case wT:
              case mT:
              case bT:
              case zT:
              case JT:
                return function(TT, kT) {
                  var cT = kT ? uk(TT.buffer) : TT.buffer;
                  return new TT.constructor(cT, TT.byteOffset, TT.length)
                }(TT, lT);
              case IT:
                return function(TT, kT, cT) {
                  var lT = kT ? cT(YT(TT), !0) : YT(TT);
                  return gT(lT, LT, new TT.constructor)
                }(TT, lT, cT);
              case AT:
              case hT:
                return new MT(TT);
              case vT:
                return function(TT) {
                  var kT = new TT.constructor(TT.source, oT.exec(TT));
                  return kT.lastIndex = TT.lastIndex, kT
                }(TT);
              case tT:
                return function(TT, kT, cT) {
                  var lT = kT ? cT(WT(TT), !0) : WT(TT);
                  return gT(lT, RT, new TT.constructor)
                }(TT, lT, cT);
              case NT:
                return KT = TT, mk ? Object(mk.call(KT)) : {}
            }
            var KT
          }(TT, VT, Ek, kT)
        }
      }
      QT || (QT = new Hk);
      var ZT = QT.get(TT);
      if (ZT) return ZT;
      if (QT.set(TT, HT), !eT) var uT = cT ? function(TT) {
        return function(TT, kT, cT) {
          var lT = kT(TT);
          return nk(TT) ? lT : function(TT, kT) {
            for (var cT = -1, lT = kT.length, MT = TT.length; ++cT < lT;) TT[MT + cT] = kT[cT];
            return TT
          }(lT, cT(TT))
        }(TT, Tc, Rk)
      }(TT) : Tc(TT);
      return function(TT, kT) {
        for (var cT = -1, lT = TT ? TT.length : 0; ++cT < lT && !1 !== kT(TT[cT], cT, TT););
      }(uT || TT, (function(MT, KT) {
        uT && (MT = TT[KT = MT]), Gk(HT, KT, Ek(MT, kT, cT, lT, KT, TT, QT))
      })), HT
    }

    function Zk(TT) {
      return !(!sk(TT) || (kT = TT, sT && sT in kT)) && (qk(TT) || UT(TT) ? lk : HT).test(Bk(TT));
      var kT
    }

    function uk(TT) {
      var kT = new TT.constructor(TT.byteLength);
      return new Ok(kT).set(new Ok(TT)), kT
    }

    function Xk(TT, kT, cT, lT) {
      cT || (cT = {});
      for (var MT = -1, KT = kT.length; ++MT < KT;) {
        var OT = kT[MT],
          yT = lT ? lT(cT[OT], TT[OT], OT, cT, TT) : void 0;
        Gk(cT, OT, void 0 === yT ? TT[OT] : yT)
      }
      return cT
    }

    function dk(TT, kT) {
      var cT = TT.__data__;
      return function(TT) {
        var kT = typeof TT;
        return "string" == kT || "number" == kT || "symbol" == kT || "boolean" == kT ? "__proto__" !== TT : null === TT
      }(kT) ? cT["string" == typeof kT ? "string" : "hash"] : cT.map
    }

    function Lk(TT, kT) {
      var cT = function(TT, kT) {
        return null == TT ? void 0 : TT[kT]
      }(TT, kT);
      return Zk(cT) ? cT : void 0
    }
    bk.prototype.clear = function() {
      this.__data__ = Sk ? Sk(null) : {}
    }, bk.prototype.delete = function(TT) {
      return this.has(TT) && delete this.__data__[TT]
    }, bk.prototype.get = function(TT) {
      var kT = this.__data__;
      if (Sk) {
        var cT = kT[TT];
        return cT === lT ? void 0 : cT
      }
      return kk.call(kT, TT) ? kT[TT] : void 0
    }, bk.prototype.has = function(TT) {
      var kT = this.__data__;
      return Sk ? void 0 !== kT[TT] : kk.call(kT, TT)
    }, bk.prototype.set = function(TT, kT) {
      return this.__data__[TT] = Sk && void 0 === kT ? lT : kT, this
    }, zk.prototype.clear = function() {
      this.__data__ = []
    }, zk.prototype.delete = function(TT) {
      var kT = this.__data__,
        cT = Vk(kT, TT);
      return !(cT < 0) && (cT == kT.length - 1 ? kT.pop() : Ik.call(kT, cT, 1), !0)
    }, zk.prototype.get = function(TT) {
      var kT = this.__data__,
        cT = Vk(kT, TT);
      return cT < 0 ? void 0 : kT[cT][1]
    }, zk.prototype.has = function(TT) {
      return Vk(this.__data__, TT) > -1
    }, zk.prototype.set = function(TT, kT) {
      var cT = this.__data__,
        lT = Vk(cT, TT);
      return lT < 0 ? cT.push([TT, kT]) : cT[lT][1] = kT, this
    }, Jk.prototype.clear = function() {
      this.__data__ = {
        hash: new bk,
        map: new(tk || zk),
        string: new bk
      }
    }, Jk.prototype.delete = function(TT) {
      return dk(this, TT).delete(TT)
    }, Jk.prototype.get = function(TT) {
      return dk(this, TT).get(TT)
    }, Jk.prototype.has = function(TT) {
      return dk(this, TT).has(TT)
    }, Jk.prototype.set = function(TT, kT) {
      return dk(this, TT).set(TT, kT), this
    }, Hk.prototype.clear = function() {
      this.__data__ = new zk
    }, Hk.prototype.delete = function(TT) {
      return this.__data__.delete(TT)
    }, Hk.prototype.get = function(TT) {
      return this.__data__.get(TT)
    }, Hk.prototype.has = function(TT) {
      return this.__data__.has(TT)
    }, Hk.prototype.set = function(TT, kT) {
      var cT = this.__data__;
      if (cT instanceof zk) {
        var lT = cT.__data__;
        if (!tk || lT.length < 199) return lT.push([TT, kT]), this;
        cT = this.__data__ = new Jk(lT)
      }
      return cT.set(TT, kT), this
    };
    var Rk = Ak ? BT(Ak, Object) : function() {
        return []
      },
      gk = function(TT) {
        return ck.call(TT)
      };

    function Uk(TT, kT) {
      return !!(kT = null == kT ? MT : kT) && ("number" == typeof TT || eT.test(TT)) && TT > -1 && TT % 1 == 0 && TT < kT
    }

    function Yk(TT) {
      var kT = TT && TT.constructor;
      return TT === ("function" == typeof kT && kT.prototype || iT)
    }

    function Bk(TT) {
      if (null != TT) {
        try {
          return Tk.call(TT)
        } catch (kT) {}
        try {
          return TT + ""
        } catch (kT) {}
      }
      return ""
    }

    function Wk(TT, kT) {
      return TT === kT || TT !== TT && kT !== kT
    }(vk && gk(new vk(new ArrayBuffer(1))) != DT || tk && gk(new tk) != IT || hk && gk(hk.resolve()) != jT || Nk && gk(new Nk) != tT || Qk && gk(new Qk) != QT) && (gk = function(TT) {
      var kT = ck.call(TT),
        cT = kT == CT ? TT.constructor : void 0,
        lT = cT ? Bk(cT) : void 0;
      if (lT) switch (lT) {
        case Dk:
          return DT;
        case ak:
          return IT;
        case Fk:
          return jT;
        case rk:
          return tT;
        case Pk:
          return QT
      }
      return kT
    });
    var nk = Array.isArray;

    function pk(TT) {
      return null != TT && function(TT) {
        return "number" == typeof TT && TT > -1 && TT % 1 == 0 && TT <= MT
      }(TT.length) && !qk(TT)
    }
    var ik = Ck || function() {
      return !1
    };

    function qk(TT) {
      var kT = sk(TT) ? ck.call(TT) : "";
      return kT == fT || kT == xT
    }

    function sk(TT) {
      var kT = typeof TT;
      return !!TT && ("object" == kT || "function" == kT)
    }

    function Tc(TT) {
      return pk(TT) ? ek(TT) : function(TT) {
        if (!Yk(TT)) return jk(TT);
        var kT = [];
        for (var cT in Object(TT)) kk.call(TT, cT) && "constructor" != cT && kT.push(cT);
        return kT
      }(TT)
    }
    TT.exports = function(TT) {
      return Ek(TT, !0, !0)
    }
  },
  37579: (TT, kT, cT) => {
    var lT = cT(37583),
      MT = cT(37585),
      KT = "undefined" !== typeof Float64Array;

    function OT(TT, kT) {
      return TT[0] - kT[0]
    }

    function yT() {
      var TT, kT = this.stride,
        cT = new Array(kT.length);
      for (TT = 0; TT < cT.length; ++TT) cT[TT] = [Math.abs(kT[TT]), TT];
      cT.sort(OT);
      var lT = new Array(cT.length);
      for (TT = 0; TT < lT.length; ++TT) lT[TT] = cT[TT][1];
      return lT
    }

    function fT(TT, kT) {
      var cT = ["View", kT, "d", TT].join("");
      kT < 0 && (cT = "View_Nil" + TT);
      var MT = "generic" === TT;
      if (-1 === kT) {
        var KT = "function " + cT + "(a){this.data=a;};var proto=" + cT + ".prototype;proto.dtype='" + TT + "';proto.index=function(){return -1};proto.size=0;proto.dimension=-1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function(){return new " + cT + "(this.data);};proto.get=proto.set=function(){};proto.pick=function(){return null};return function construct_" + cT + "(a){return new " + cT + "(a);}";
        return new Function(KT)()
      }
      if (0 === kT) {
        KT = "function " + cT + "(a,d) {this.data = a;this.offset = d};var proto=" + cT + ".prototype;proto.dtype='" + TT + "';proto.index=function(){return this.offset};proto.dimension=0;proto.size=1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function " + cT + "_copy() {return new " + cT + "(this.data,this.offset)};proto.pick=function " + cT + "_pick(){return TrivialArray(this.data);};proto.valueOf=proto.get=function " + cT + "_get(){return " + (MT ? "this.data.get(this.offset)" : "this.data[this.offset]") + "};proto.set=function " + cT + "_set(v){return " + (MT ? "this.data.set(this.offset,v)" : "this.data[this.offset]=v") + "};return function construct_" + cT + "(a,b,c,d){return new " + cT + "(a,d)}";
        return new Function("TrivialArray", KT)(xT[TT][0])
      }
      KT = ["'use strict'"];
      var OT = lT(kT),
        fT = OT.map((function(TT) {
          return "i" + TT
        })),
        IT = "this.offset+" + OT.map((function(TT) {
          return "this.stride[" + TT + "]*i" + TT
        })).join("+"),
        AT = OT.map((function(TT) {
          return "b" + TT
        })).join(","),
        CT = OT.map((function(TT) {
          return "c" + TT
        })).join(",");
      KT.push("function " + cT + "(a," + AT + "," + CT + ",d){this.data=a", "this.shape=[" + AT + "]", "this.stride=[" + CT + "]", "this.offset=d|0}", "var proto=" + cT + ".prototype", "proto.dtype='" + TT + "'", "proto.dimension=" + kT), KT.push("Object.defineProperty(proto,'size',{get:function " + cT + "_size(){return " + OT.map((function(TT) {
        return "this.shape[" + TT + "]"
      })).join("*"), "}})"), 1 === kT ? KT.push("proto.order=[0]") : (KT.push("Object.defineProperty(proto,'order',{get:"), kT < 4 ? (KT.push("function " + cT + "_order(){"), 2 === kT ? KT.push("return (Math.abs(this.stride[0])>Math.abs(this.stride[1]))?[1,0]:[0,1]}})") : 3 === kT && KT.push("var s0=Math.abs(this.stride[0]),s1=Math.abs(this.stride[1]),s2=Math.abs(this.stride[2]);if(s0>s1){if(s1>s2){return [2,1,0];}else if(s0>s2){return [1,2,0];}else{return [1,0,2];}}else if(s0>s2){return [2,0,1];}else if(s2>s1){return [0,1,2];}else{return [0,2,1];}}})")) : KT.push("ORDER})")), KT.push("proto.set=function " + cT + "_set(" + fT.join(",") + ",v){"), MT ? KT.push("return this.data.set(" + IT + ",v)}") : KT.push("return this.data[" + IT + "]=v}"), KT.push("proto.get=function " + cT + "_get(" + fT.join(",") + "){"), MT ? KT.push("return this.data.get(" + IT + ")}") : KT.push("return this.data[" + IT + "]}"), KT.push("proto.index=function " + cT + "_index(", fT.join(), "){return " + IT + "}"), KT.push("proto.hi=function " + cT + "_hi(" + fT.join(",") + "){return new " + cT + "(this.data," + OT.map((function(TT) {
        return ["(typeof i", TT, "!=='number'||i", TT, "<0)?this.shape[", TT, "]:i", TT, "|0"].join("")
      })).join(",") + "," + OT.map((function(TT) {
        return "this.stride[" + TT + "]"
      })).join(",") + ",this.offset)}");
      var jT = OT.map((function(TT) {
          return "a" + TT + "=this.shape[" + TT + "]"
        })),
        vT = OT.map((function(TT) {
          return "c" + TT + "=this.stride[" + TT + "]"
        }));
      KT.push("proto.lo=function " + cT + "_lo(" + fT.join(",") + "){var b=this.offset,d=0," + jT.join(",") + "," + vT.join(","));
      for (var tT = 0; tT < kT; ++tT) KT.push("if(typeof i" + tT + "==='number'&&i" + tT + ">=0){d=i" + tT + "|0;b+=c" + tT + "*d;a" + tT + "-=d}");
      KT.push("return new " + cT + "(this.data," + OT.map((function(TT) {
        return "a" + TT
      })).join(",") + "," + OT.map((function(TT) {
        return "c" + TT
      })).join(",") + ",b)}"), KT.push("proto.step=function " + cT + "_step(" + fT.join(",") + "){var " + OT.map((function(TT) {
        return "a" + TT + "=this.shape[" + TT + "]"
      })).join(",") + "," + OT.map((function(TT) {
        return "b" + TT + "=this.stride[" + TT + "]"
      })).join(",") + ",c=this.offset,d=0,ceil=Math.ceil");
      for (tT = 0; tT < kT; ++tT) KT.push("if(typeof i" + tT + "==='number'){d=i" + tT + "|0;if(d<0){c+=b" + tT + "*(a" + tT + "-1);a" + tT + "=ceil(-a" + tT + "/d)}else{a" + tT + "=ceil(a" + tT + "/d)}b" + tT + "*=d}");
      KT.push("return new " + cT + "(this.data," + OT.map((function(TT) {
        return "a" + TT
      })).join(",") + "," + OT.map((function(TT) {
        return "b" + TT
      })).join(",") + ",c)}");
      var hT = new Array(kT),
        NT = new Array(kT);
      for (tT = 0; tT < kT; ++tT) hT[tT] = "a[i" + tT + "]", NT[tT] = "b[i" + tT + "]";
      KT.push("proto.transpose=function " + cT + "_transpose(" + fT + "){" + fT.map((function(TT, kT) {
        return TT + "=(" + TT + "===undefined?" + kT + ":" + TT + "|0)"
      })).join(";"), "var a=this.shape,b=this.stride;return new " + cT + "(this.data," + hT.join(",") + "," + NT.join(",") + ",this.offset)}"), KT.push("proto.pick=function " + cT + "_pick(" + fT + "){var a=[],b=[],c=this.offset");
      for (tT = 0; tT < kT; ++tT) KT.push("if(typeof i" + tT + "==='number'&&i" + tT + ">=0){c=(c+this.stride[" + tT + "]*i" + tT + ")|0}else{a.push(this.shape[" + tT + "]);b.push(this.stride[" + tT + "])}");
      return KT.push("var ctor=CTOR_LIST[a.length+1];return ctor(this.data,a,b,c)}"), KT.push("return function construct_" + cT + "(data,shape,stride,offset){return new " + cT + "(data," + OT.map((function(TT) {
        return "shape[" + TT + "]"
      })).join(",") + "," + OT.map((function(TT) {
        return "stride[" + TT + "]"
      })).join(",") + ",offset)}"), new Function("CTOR_LIST", "ORDER", KT.join("\n"))(xT[TT], yT)
    }
    var xT = {
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
    TT.exports = function(TT, kT, cT, lT) {
      if (void 0 === TT) return (0, xT.array[0])([]);
      "number" === typeof TT && (TT = [TT]), void 0 === kT && (kT = [TT.length]);
      var OT = kT.length;
      if (void 0 === cT) {
        cT = new Array(OT);
        for (var yT = OT - 1, IT = 1; yT >= 0; --yT) cT[yT] = IT, IT *= kT[yT]
      }
      if (void 0 === lT) {
        lT = 0;
        for (yT = 0; yT < OT; ++yT) cT[yT] < 0 && (lT -= (kT[yT] - 1) * cT[yT])
      }
      for (var AT = function(TT) {
          if (MT(TT)) return "buffer";
          if (KT) switch (Object.prototype.toString.call(TT)) {
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
        }(TT), CT = xT[AT]; CT.length <= OT + 1;) CT.push(fT(AT, CT.length - 1));
      return (0, CT[OT + 1])(TT, kT, cT, lT)
    }
  },
  38286: TT => {
    function kT(TT, kT, cT) {
      for (var lT = TT.length, MT = -1 / 0, KT = 1 / 0, OT = 0; OT < lT; OT++) {
        var yT = (cT[0][OT] - TT[OT]) / kT[OT],
          fT = (cT[1][OT] - TT[OT]) / kT[OT];
        if (yT > fT) {
          var xT = yT;
          yT = fT, fT = xT
        }
        if (fT < MT || yT > KT) return 1 / 0;
        yT > MT && (MT = yT), fT < KT && (KT = fT)
      }
      return MT > KT ? 1 / 0 : MT
    }
    TT.exports = function(TT, cT, lT, MT) {
      var KT = kT(cT, lT, MT);
      if (KT === 1 / 0) TT = null;
      else {
        TT = TT || [];
        for (var OT = 0; OT < cT.length; OT++) TT[OT] = cT[OT] + lT[OT] * KT
      }
      return TT
    }, TT.exports.distance = kT
  },
  37597: (TT, kT, cT) => {
    var lT = cT(37603);

    function MT(TT) {
      for (var kT, cT, MT = 0, KT = TT.length, OT = 0; OT < TT.length;) {
        for (kT = TT[OT], cT = 0; OT < KT && TT[OT] === kT;) ++OT, ++cT;
        MT += lT.log2(cT) / 7 | 0, MT += lT.log2(kT >>> 0) / 7 | 0, MT += 2
      }
      return MT
    }
    kT.size = MT, kT.encode = function(TT, kT) {
      kT || (kT = new Uint8Array(MT(TT)));
      for (var cT, lT, KT = 0, OT = kT.length, yT = 0; yT < TT.length;) {
        for (cT = TT[yT], lT = 0; yT < TT.length && TT[yT] === cT;) ++yT, ++lT;
        for (; KT < OT && lT >= 128;) kT[KT++] = 128 + (127 & lT), lT >>>= 7;
        if (KT >= OT) throw new Error("RLE buffer overflow");
        for (kT[KT++] = lT, cT >>>= 0; KT < OT && cT >= 128;) kT[KT++] = 128 + (127 & cT), cT >>>= 7;
        if (KT >= OT) throw new Error("RLE buffer overflow");
        kT[KT++] = cT
      }
      return kT
    }, kT.decode = function(TT, kT) {
      for (var cT, lT, MT, KT, OT = kT.length, yT = TT.length, fT = 0, xT = 0; xT < yT;) {
        for (cT = 0, lT = 0; xT < yT && TT[xT] >= 128;) cT += (127 & TT[xT++]) << lT, lT += 7;
        if (cT += TT[xT++] << lT, xT >= yT) throw new Error("RLE buffer underrun");
        if (fT + cT > OT) throw new Error("Chunk buffer overflow");
        for (MT = 0, lT = 0; xT < yT && TT[xT] >= 128;) MT += (127 & TT[xT++]) << lT, lT += 7;
        if (xT >= yT) throw new Error("RLE buffer underrun");
        for (MT += TT[xT++] << lT, KT = 0; KT < cT; ++KT) kT[fT++] = MT
      }
      return kT
    }
  },
  37603: (TT, kT) => {
    function cT(TT) {
      var kT = 32;
      return (TT &= -TT) && kT--, 65535 & TT && (kT -= 16), 16711935 & TT && (kT -= 8), 252645135 & TT && (kT -= 4), 858993459 & TT && (kT -= 2), 1431655765 & TT && (kT -= 1), kT
    }
    kT.INT_BITS = 32, kT.INT_MAX = 2147483647, kT.INT_MIN = -1 << 31, kT.sign = function(TT) {
      return (TT > 0) - (TT < 0)
    }, kT.abs = function(TT) {
      var kT = TT >> 31;
      return (TT ^ kT) - kT
    }, kT.min = function(TT, kT) {
      return kT ^ (TT ^ kT) & -(TT < kT)
    }, kT.max = function(TT, kT) {
      return TT ^ (TT ^ kT) & -(TT < kT)
    }, kT.isPow2 = function(TT) {
      return !(TT & TT - 1) && !!TT
    }, kT.log2 = function(TT) {
      var kT, cT;
      return kT = (TT > 65535) << 4, kT |= cT = ((TT >>>= kT) > 255) << 3, kT |= cT = ((TT >>>= cT) > 15) << 2, (kT |= cT = ((TT >>>= cT) > 3) << 1) | (TT >>>= cT) >> 1
    }, kT.log10 = function(TT) {
      return TT >= 1e9 ? 9 : TT >= 1e8 ? 8 : TT >= 1e7 ? 7 : TT >= 1e6 ? 6 : TT >= 1e5 ? 5 : TT >= 1e4 ? 4 : TT >= 1e3 ? 3 : TT >= 100 ? 2 : TT >= 10 ? 1 : 0
    }, kT.popCount = function(TT) {
      return 16843009 * ((TT = (858993459 & (TT -= TT >>> 1 & 1431655765)) + (TT >>> 2 & 858993459)) + (TT >>> 4) & 252645135) >>> 24
    }, kT.countTrailingZeros = cT, kT.nextPow2 = function(TT) {
      return TT += 0 === TT, --TT, TT |= TT >>> 1, TT |= TT >>> 2, TT |= TT >>> 4, TT |= TT >>> 8, (TT |= TT >>> 16) + 1
    }, kT.prevPow2 = function(TT) {
      return TT |= TT >>> 1, TT |= TT >>> 2, TT |= TT >>> 4, TT |= TT >>> 8, (TT |= TT >>> 16) - (TT >>> 1)
    }, kT.parity = function(TT) {
      return TT ^= TT >>> 16, TT ^= TT >>> 8, TT ^= TT >>> 4, 27030 >>> (TT &= 15) & 1
    };
    var lT = new Array(256);
    ! function(TT) {
      for (var kT = 0; kT < 256; ++kT) {
        var cT = kT,
          lT = kT,
          MT = 7;
        for (cT >>>= 1; cT; cT >>>= 1) lT <<= 1, lT |= 1 & cT, --MT;
        TT[kT] = lT << MT & 255
      }
    }(lT), kT.reverse = function(TT) {
      return lT[255 & TT] << 24 | lT[TT >>> 8 & 255] << 16 | lT[TT >>> 16 & 255] << 8 | lT[TT >>> 24 & 255]
    }, kT.interleave2 = function(TT, kT) {
      return (TT = 1431655765 & ((TT = 858993459 & ((TT = 252645135 & ((TT = 16711935 & ((TT &= 65535) | TT << 8)) | TT << 4)) | TT << 2)) | TT << 1)) | (kT = 1431655765 & ((kT = 858993459 & ((kT = 252645135 & ((kT = 16711935 & ((kT &= 65535) | kT << 8)) | kT << 4)) | kT << 2)) | kT << 1)) << 1
    }, kT.deinterleave2 = function(TT, kT) {
      return (TT = 65535 & ((TT = 16711935 & ((TT = 252645135 & ((TT = 858993459 & ((TT = TT >>> kT & 1431655765) | TT >>> 1)) | TT >>> 2)) | TT >>> 4)) | TT >>> 16)) << 16 >> 16
    }, kT.interleave3 = function(TT, kT, cT) {
      return TT = 1227133513 & ((TT = 3272356035 & ((TT = 251719695 & ((TT = 4278190335 & ((TT &= 1023) | TT << 16)) | TT << 8)) | TT << 4)) | TT << 2), (TT |= (kT = 1227133513 & ((kT = 3272356035 & ((kT = 251719695 & ((kT = 4278190335 & ((kT &= 1023) | kT << 16)) | kT << 8)) | kT << 4)) | kT << 2)) << 1) | (cT = 1227133513 & ((cT = 3272356035 & ((cT = 251719695 & ((cT = 4278190335 & ((cT &= 1023) | cT << 16)) | cT << 8)) | cT << 4)) | cT << 2)) << 2
    }, kT.deinterleave3 = function(TT, kT) {
      return (TT = 1023 & ((TT = 4278190335 & ((TT = 251719695 & ((TT = 3272356035 & ((TT = TT >>> kT & 1227133513) | TT >>> 2)) | TT >>> 4)) | TT >>> 8)) | TT >>> 16)) << 22 >> 22
    }, kT.nextCombination = function(TT) {
      var kT = TT | TT - 1;
      return kT + 1 | (~kT & -~kT) - 1 >>> cT(TT) + 1
    }
  },
  37086: (TT, kT, cT) => {
    cT.d(kT, {
      Color3: () => lT.c,
      e: () => lT.g
    });
    var lT = cT(37093);
    (0, lT.j)()
  },
  37632: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => MT
    });
    var lT = cT(37637);
    class MT {
      static GetPlanes(TT) {
        const kT = [];
        for (let cT = 0; cT < 6; cT++) kT.push(new lT.e(0, 0, 0, 0));
        return MT.GetPlanesToRef(TT, kT), kT
      }
      static GetNearPlaneToRef(TT, kT) {
        const cT = TT.m;
        kT.normal.x = cT[3] + cT[2], kT.normal.y = cT[7] + cT[6], kT.normal.z = cT[11] + cT[10], kT.d = cT[15] + cT[14], kT.normalize()
      }
      static GetFarPlaneToRef(TT, kT) {
        const cT = TT.m;
        kT.normal.x = cT[3] - cT[2], kT.normal.y = cT[7] - cT[6], kT.normal.z = cT[11] - cT[10], kT.d = cT[15] - cT[14], kT.normalize()
      }
      static GetLeftPlaneToRef(TT, kT) {
        const cT = TT.m;
        kT.normal.x = cT[3] + cT[0], kT.normal.y = cT[7] + cT[4], kT.normal.z = cT[11] + cT[8], kT.d = cT[15] + cT[12], kT.normalize()
      }
      static GetRightPlaneToRef(TT, kT) {
        const cT = TT.m;
        kT.normal.x = cT[3] - cT[0], kT.normal.y = cT[7] - cT[4], kT.normal.z = cT[11] - cT[8], kT.d = cT[15] - cT[12], kT.normalize()
      }
      static GetTopPlaneToRef(TT, kT) {
        const cT = TT.m;
        kT.normal.x = cT[3] - cT[1], kT.normal.y = cT[7] - cT[5], kT.normal.z = cT[11] - cT[9], kT.d = cT[15] - cT[13], kT.normalize()
      }
      static GetBottomPlaneToRef(TT, kT) {
        const cT = TT.m;
        kT.normal.x = cT[3] + cT[1], kT.normal.y = cT[7] + cT[5], kT.normal.z = cT[11] + cT[9], kT.d = cT[15] + cT[13], kT.normalize()
      }
      static GetPlanesToRef(TT, kT) {
        MT.GetNearPlaneToRef(TT, kT[0]), MT.GetFarPlaneToRef(TT, kT[1]), MT.GetLeftPlaneToRef(TT, kT[2]), MT.GetRightPlaneToRef(TT, kT[3]), MT.GetTopPlaneToRef(TT, kT[4]), MT.GetBottomPlaneToRef(TT, kT[5])
      }
      static IsPointInFrustum(TT, kT) {
        for (let cT = 0; cT < 6; cT++)
          if (kT[cT].dotCoordinate(TT) < 0) return !1;
        return !0
      }
    }
  },
  37637: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => MT
    });
    var lT = cT(36892);
    class MT {
      constructor(TT, kT, cT, MT) {
        this.normal = new lT.m(TT, kT, cT), this.d = MT
      }
      acT() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new MT(this.normal.x, this.normal.y, this.normal.z, this.d)
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
        let kT = 0;
        return 0 !== TT && (kT = 1 / TT), this.normal.x *= kT, this.normal.y *= kT, this.normal.z *= kT, this.d *= kT, this
      }
      transform(TT) {
        const kT = MT._TmpMatrix;
        TT.invertToRef(kT);
        const cT = kT.m,
          lT = this.normal.x,
          KT = this.normal.y,
          OT = this.normal.z,
          yT = this.d,
          fT = lT * cT[0] + KT * cT[1] + OT * cT[2] + yT * cT[3],
          xT = lT * cT[4] + KT * cT[5] + OT * cT[6] + yT * cT[7],
          IT = lT * cT[8] + KT * cT[9] + OT * cT[10] + yT * cT[11],
          AT = lT * cT[12] + KT * cT[13] + OT * cT[14] + yT * cT[15];
        return new MT(fT, xT, IT, AT)
      }
      dotCoordinate(TT) {
        return this.normal.x * TT.x + this.normal.y * TT.y + this.normal.z * TT.z + this.d
      }
      copyFromPoints(TT, kT, cT) {
        const lT = kT.x - TT.x,
          MT = kT.y - TT.y,
          KT = kT.z - TT.z,
          OT = cT.x - TT.x,
          yT = cT.y - TT.y,
          fT = cT.z - TT.z,
          xT = MT * fT - KT * yT,
          IT = KT * OT - lT * fT,
          AT = lT * yT - MT * OT,
          CT = Math.sqrt(xT * xT + IT * IT + AT * AT);
        let jT;
        return jT = 0 !== CT ? 1 / CT : 0, this.normal.x = xT * jT, this.normal.y = IT * jT, this.normal.z = AT * jT, this.d = -(this.normal.x * TT.x + this.normal.y * TT.y + this.normal.z * TT.z), this
      }
      isFrontFacingTo(TT, kT) {
        return lT.m.Dot(this.normal, TT) <= kT
      }
      signedDistanceTo(TT) {
        return lT.m.Dot(TT, this.normal) + this.d
      }
      static FromArray(TT) {
        return new MT(TT[0], TT[1], TT[2], TT[3])
      }
      static FromPoints(TT, kT, cT) {
        const lT = new MT(0, 0, 0, 0);
        return lT.copyFromPoints(TT, kT, cT), lT
      }
      static FromPositionAndNormal(TT, kT) {
        const cT = new MT(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(TT, kT, cT)
      }
      static FromPositionAndNormalToRef(TT, kT, cT) {
        return cT.normal.UkT(kT), cT.normal.normalize(), cT.d = -TT.dot(cT.normal), cT
      }
      static SignedDistanceToPlaneFromPositionAndNormal(TT, kT, cT) {
        const MT = -(kT.x * TT.x + kT.y * TT.y + kT.z * TT.z);
        return lT.m.Dot(cT, kT) + MT
      }
    }
    MT._TmpMatrix = lT.d.Identity()
  },
  36885: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      Matrix: () => lT.d,
      Quaternion: () => lT.f,
      RegisterMathVector: () => lT.g,
      TmpVectors: () => lT.h,
      Vector2: () => lT.i,
      Fv: () => lT.m,
      Vector4: () => lT.o
    });
    var lT = cT(36892);
    (0, lT.g)()
  },
  37939: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => lT
    });
    class lT {
      constructor(TT, kT, cT, lT) {
        this.x = TT, this.y = kT, this.width = cT, this.height = lT
      }
      toGlobal(TT, kT) {
        return new lT(this.x * TT, this.y * kT, this.width * TT, this.height * kT)
      }
      toGlobalToRef(TT, kT, cT) {
        return cT.x = this.x * TT, cT.y = this.y * kT, cT.width = this.width * TT, cT.height = this.height * kT, this
      }
      clone() {
        return new lT(this.x, this.y, this.width, this.height)
      }
    }
  },
  37760: (TT, kT, cT) => {
    function lT() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (TT => {
        const kT = 16 * Math.random() | 0;
        return ("x" === TT ? kT : 3 & kT | 8).toString(16)
      }))
    }
    cT.d(kT, {
      c: () => lT
    })
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);