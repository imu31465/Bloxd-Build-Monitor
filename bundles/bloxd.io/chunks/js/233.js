/*! For license information please see yma3ej.233.1edfc800.chunk.js.LICENSE.txt */
export const id = 233;
export const ids = [233, 241];
export const modules = {
  38436: TT => {
    TT.exports = function(TT) {
      return null != TT && null != TT.constructor && "function" === typeof TT.constructor.isBuffer && TT.constructor.isBuffer(TT)
    }
  },
  38417: (TT, UT, mT) => {
    var WT = mT(38425),
      zT = mT(38430),
      MT = mT(38436);
    mT.g.__TYPEDARRAY_POOL || (mT.g.__TYPEDARRAY_POOL = {
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
    var gT = "undefined" !== typeof Uint8ClampedArray,
      nT = mT.g.__TYPEDARRAY_POOL;
    nT.UINT8C || (nT.UINT8C = zT([32, 0])), nT.BUFFER || (nT.BUFFER = zT([32, 0]));
    var HT = nT.DATA,
      kT = nT.BUFFER;

    function jT(TT) {
      if (TT) {
        var UT = TT.length || TT.byteLength,
          mT = WT.log2(UT);
        HT[mT].push(TT)
      }
    }

    function lT(TT) {
      TT = WT.nextPow2(TT);
      var UT = WT.log2(TT),
        mT = HT[UT];
      return mT.length > 0 ? mT.pop() : new ArrayBuffer(TT)
    }

    function LT(TT) {
      return new Uint8Array(lT(TT), 0, TT)
    }

    function pT(TT) {
      return new Uint16Array(lT(2 * TT), 0, TT)
    }

    function BT(TT) {
      return new Uint32Array(lT(4 * TT), 0, TT)
    }

    function ZT(TT) {
      return new Int8Array(lT(TT), 0, TT)
    }

    function cT(TT) {
      return new Int16Array(lT(2 * TT), 0, TT)
    }

    function vT(TT) {
      return new Int32Array(lT(4 * TT), 0, TT)
    }

    function fT(TT) {
      return new Float32Array(lT(4 * TT), 0, TT)
    }

    function qT(TT) {
      return new Float64Array(lT(8 * TT), 0, TT)
    }

    function iT(TT) {
      return gT ? new Uint8ClampedArray(lT(TT), 0, TT) : LT(TT)
    }

    function bT(TT) {
      return new DataView(lT(TT), 0, TT)
    }
    UT.free = function(TT) {
      if (MT(TT)) kT[WT.log2(TT.length)].push(TT);
      else {
        if ("[object ArrayBuffer]" !== Object.prototype.toString.call(TT) && (TT = TT.buffer), !TT) return;
        var UT = TT.length || TT.byteLength,
          mT = 0 | WT.log2(UT);
        HT[mT].push(TT)
      }
    }, UT.freeUint8 = UT.freeUint16 = UT.freeUint32 = UT.freeInt8 = UT.freeInt16 = UT.freeInt32 = UT.freeFloat32 = UT.freeFloat = UT.freeFloat64 = UT.freeDouble = UT.freeUint8Clamped = UT.freeDataView = function(TT) {
      jT(TT.buffer)
    }, UT.freeArrayBuffer = jT, UT.freeBuffer = function(TT) {
      kT[WT.log2(TT.length)].push(TT)
    }, UT.malloc = function(TT, UT) {
      if (void 0 === UT || "arraybuffer" === UT) return lT(TT);
      switch (UT) {
        case "uint8":
          return LT(TT);
        case "uint16":
          return pT(TT);
        case "uint32":
          return BT(TT);
        case "int8":
          return ZT(TT);
        case "int16":
          return cT(TT);
        case "int32":
          return vT(TT);
        case "float":
        case "float32":
          return fT(TT);
        case "double":
        case "float64":
          return qT(TT);
        case "uint8_clamped":
          return iT(TT);
        case "buffer":
          throw "Buffer not supported";
        case "data":
        case "dataview":
          return bT(TT);
        default:
          return null
      }
      return null
    }, UT.mallocArrayBuffer = lT, UT.mallocUint8 = LT, UT.mallocUint16 = pT, UT.mallocUint32 = BT, UT.mallocInt8 = ZT, UT.mallocInt16 = cT, UT.mallocInt32 = vT, UT.mallocFloat32 = UT.mallocFloat = fT, UT.mallocFloat64 = UT.mallocDouble = qT, UT.mallocUint8Clamped = iT, UT.mallocDataView = bT, UT.clearCache = function() {
      for (var TT = 0; TT < 32; ++TT) nT.UINT8[TT].length = 0, nT.UINT16[TT].length = 0, nT.UINT32[TT].length = 0, nT.INT8[TT].length = 0, nT.INT16[TT].length = 0, nT.INT32[TT].length = 0, nT.FLOAT[TT].length = 0, nT.DOUBLE[TT].length = 0, nT.UINT8C[TT].length = 0, HT[TT].length = 0, kT[TT].length = 0
    }
  },
  38425: (TT, UT) => {
    function mT(TT) {
      var UT = 32;
      return (TT &= -TT) && UT--, 65535 & TT && (UT -= 16), 16711935 & TT && (UT -= 8), 252645135 & TT && (UT -= 4), 858993459 & TT && (UT -= 2), 1431655765 & TT && (UT -= 1), UT
    }
    UT.INT_BITS = 32, UT.INT_MAX = 2147483647, UT.INT_MIN = -1 << 31, UT.sign = function(TT) {
      return (TT > 0) - (TT < 0)
    }, UT.abs = function(TT) {
      var UT = TT >> 31;
      return (TT ^ UT) - UT
    }, UT.min = function(TT, UT) {
      return UT ^ (TT ^ UT) & -(TT < UT)
    }, UT.max = function(TT, UT) {
      return TT ^ (TT ^ UT) & -(TT < UT)
    }, UT.isPow2 = function(TT) {
      return !(TT & TT - 1) && !!TT
    }, UT.log2 = function(TT) {
      var UT, mT;
      return UT = (TT > 65535) << 4, UT |= mT = ((TT >>>= UT) > 255) << 3, UT |= mT = ((TT >>>= mT) > 15) << 2, (UT |= mT = ((TT >>>= mT) > 3) << 1) | (TT >>>= mT) >> 1
    }, UT.log10 = function(TT) {
      return TT >= 1e9 ? 9 : TT >= 1e8 ? 8 : TT >= 1e7 ? 7 : TT >= 1e6 ? 6 : TT >= 1e5 ? 5 : TT >= 1e4 ? 4 : TT >= 1e3 ? 3 : TT >= 100 ? 2 : TT >= 10 ? 1 : 0
    }, UT.popCount = function(TT) {
      return 16843009 * ((TT = (858993459 & (TT -= TT >>> 1 & 1431655765)) + (TT >>> 2 & 858993459)) + (TT >>> 4) & 252645135) >>> 24
    }, UT.countTrailingZeros = mT, UT.nextPow2 = function(TT) {
      return TT += 0 === TT, --TT, TT |= TT >>> 1, TT |= TT >>> 2, TT |= TT >>> 4, TT |= TT >>> 8, (TT |= TT >>> 16) + 1
    }, UT.prevPow2 = function(TT) {
      return TT |= TT >>> 1, TT |= TT >>> 2, TT |= TT >>> 4, TT |= TT >>> 8, (TT |= TT >>> 16) - (TT >>> 1)
    }, UT.parity = function(TT) {
      return TT ^= TT >>> 16, TT ^= TT >>> 8, TT ^= TT >>> 4, 27030 >>> (TT &= 15) & 1
    };
    var WT = new Array(256);
    ! function(TT) {
      for (var UT = 0; UT < 256; ++UT) {
        var mT = UT,
          WT = UT,
          zT = 7;
        for (mT >>>= 1; mT; mT >>>= 1) WT <<= 1, WT |= 1 & mT, --zT;
        TT[UT] = WT << zT & 255
      }
    }(WT), UT.reverse = function(TT) {
      return WT[255 & TT] << 24 | WT[TT >>> 8 & 255] << 16 | WT[TT >>> 16 & 255] << 8 | WT[TT >>> 24 & 255]
    }, UT.interleave2 = function(TT, UT) {
      return (TT = 1431655765 & ((TT = 858993459 & ((TT = 252645135 & ((TT = 16711935 & ((TT &= 65535) | TT << 8)) | TT << 4)) | TT << 2)) | TT << 1)) | (UT = 1431655765 & ((UT = 858993459 & ((UT = 252645135 & ((UT = 16711935 & ((UT &= 65535) | UT << 8)) | UT << 4)) | UT << 2)) | UT << 1)) << 1
    }, UT.deinterleave2 = function(TT, UT) {
      return (TT = 65535 & ((TT = 16711935 & ((TT = 252645135 & ((TT = 858993459 & ((TT = TT >>> UT & 1431655765) | TT >>> 1)) | TT >>> 2)) | TT >>> 4)) | TT >>> 16)) << 16 >> 16
    }, UT.interleave3 = function(TT, UT, mT) {
      return TT = 1227133513 & ((TT = 3272356035 & ((TT = 251719695 & ((TT = 4278190335 & ((TT &= 1023) | TT << 16)) | TT << 8)) | TT << 4)) | TT << 2), (TT |= (UT = 1227133513 & ((UT = 3272356035 & ((UT = 251719695 & ((UT = 4278190335 & ((UT &= 1023) | UT << 16)) | UT << 8)) | UT << 4)) | UT << 2)) << 1) | (mT = 1227133513 & ((mT = 3272356035 & ((mT = 251719695 & ((mT = 4278190335 & ((mT &= 1023) | mT << 16)) | mT << 8)) | mT << 4)) | mT << 2)) << 2
    }, UT.deinterleave3 = function(TT, UT) {
      return (TT = 1023 & ((TT = 4278190335 & ((TT = 251719695 & ((TT = 3272356035 & ((TT = TT >>> UT & 1227133513) | TT >>> 2)) | TT >>> 4)) | TT >>> 8)) | TT >>> 16)) << 22 >> 22
    }, UT.nextCombination = function(TT) {
      var UT = TT | TT - 1;
      return UT + 1 | (~UT & -~UT) - 1 >>> mT(TT) + 1
    }
  },
  38408: (TT, UT, mT) => {
    TT.exports = function(TT, UT, mT) {
      switch (arguments.length) {
        case 1:
          return WT = [], kT(zT = TT, zT, jT, !0), WT;
        case 2:
          return "function" === typeof UT ? kT(TT, TT, UT, !0) : function(TT, UT) {
            return WT = [], kT(TT, UT, jT, !1), WT
          }(TT, UT);
        case 3:
          return kT(TT, UT, mT, !1);
        default:
          throw new Error("box-intersect: Invalid arguments")
      }
      var zT
    };
    var WT, zT = mT(38417),
      MT = mT(38442),
      gT = mT(38448);

    function nT(TT, UT) {
      for (var mT = 0; mT < TT; ++mT)
        if (!(UT[mT] <= UT[mT + TT])) return !0;
      return !1
    }

    function HT(TT, UT, mT, WT) {
      for (var zT = 0, MT = 0, gT = 0, HT = TT.length; gT < HT; ++gT) {
        var kT = TT[gT];
        if (!nT(UT, kT)) {
          for (var jT = 0; jT < 2 * UT; ++jT) mT[zT++] = kT[jT];
          WT[MT++] = gT
        }
      }
      return MT
    }

    function kT(TT, UT, mT, WT) {
      var nT = TT.length,
        kT = UT.length;
      if (!(nT <= 0 || kT <= 0)) {
        var jT = TT[0].length >>> 1;
        if (!(jT <= 0)) {
          var lT, LT = zT.mallocDouble(2 * jT * nT),
            pT = zT.mallocInt32(nT);
          if ((nT = HT(TT, jT, LT, pT)) > 0) {
            if (1 === jT && WT) MT.init(nT), lT = MT.sweepComplete(jT, mT, 0, nT, LT, pT, 0, nT, LT, pT);
            else {
              var BT = zT.mallocDouble(2 * jT * kT),
                ZT = zT.mallocInt32(kT);
              (kT = HT(UT, jT, BT, ZT)) > 0 && (MT.init(nT + kT), lT = 1 === jT ? MT.sweepBipartite(jT, mT, 0, nT, LT, pT, 0, kT, BT, ZT) : gT(jT, mT, WT, nT, LT, pT, kT, BT, ZT), zT.free(BT), zT.free(ZT))
            }
            zT.free(LT), zT.free(pT)
          }
          return lT
        }
      }
    }

    function jT(TT, UT) {
      WT.push([TT, UT])
    }
  },
  38454: (TT, UT) => {
    var mT = "d",
      WT = "ax",
      zT = "fp",
      MT = "es",
      gT = "rs",
      nT = "re",
      HT = "rb",
      kT = "bs",
      jT = "be",
      lT = "bb",
      LT = [mT, WT, "vv", gT, nT, HT, "ri", kT, jT, lT, "bi"];

    function pT(TT) {
      var UT = "bruteForce" + (TT ? "Full" : "Partial"),
        WT = [],
        gT = LT.slice();
      TT || gT.splice(3, 0, zT);
      var nT = ["function " + UT + "(" + gT.join() + "){"];

      function HT(UT, zT) {
        var gT = function(TT, UT, WT) {
          var zT = "bruteForce" + (TT ? "Red" : "Blue") + (UT ? "Flip" : "") + (WT ? "Full" : ""),
            gT = ["function ", zT, "(", LT.join(), "){", "var ", MT, "=2*", mT, ";"],
            nT = "for(var i=rs,rp=es*rs;i<re;++i,rp+=es){var x0=rb[ax+rp],x1=rb[ax+rp+d],xi=ri[i];",
            HT = "for(var j=bs,bp=es*bs;j<be;++j,bp+=es){var y0=bb[ax+bp]," + (WT ? "y1=bb[ax+bp+d]," : "") + "yi=bi[j];";
          return TT ? gT.push(nT, "Q", ":", HT) : gT.push(HT, "Q", ":", nT), WT ? gT.push("if(y1<x0||x1<y0)continue;") : UT ? gT.push("if(y0<=x0||x1<y0)continue;") : gT.push("if(y0<x0||x1<y0)continue;"), gT.push("for(var k=ax+1;k<d;++k){var r0=rb[k+rp],r1=rb[k+d+rp],b0=bb[k+bp],b1=bb[k+d+bp];if(r1<b0||b1<r0)continue Q;}var rv=vv("), UT ? gT.push("yi,xi") : gT.push("xi,yi"), gT.push(");if(rv!==void 0)return rv;}}}"), {
            name: zT,
            code: gT.join("")
          }
        }(UT, zT, TT);
        WT.push(gT.code), nT.push("return " + gT.name + "(" + LT.join() + ");")
      }
      nT.push("if(re-rs>be-bs){"), TT ? (HT(!0, !1), nT.push("}else{"), HT(!1, !1)) : (nT.push("if(fp){"), HT(!0, !0), nT.push("}else{"), HT(!0, !1), nT.push("}}else{if(fp){"), HT(!1, !0), nT.push("}else{"), HT(!1, !1), nT.push("}")), nT.push("}}return " + UT);
      var kT = WT.join("") + nT.join("");
      return new Function(kT)()
    }
    UT.partial = pT(!1), UT.full = pT(!0)
  },
  38448: (TT, UT, mT) => {
    TT.exports = function(TT, UT, mT, MT, jT, dT, wT, tT, aT) {
      ! function(TT, UT) {
        var mT = 8 * zT.log2(UT + 1) * (TT + 1) | 0,
          MT = zT.nextPow2(iT * mT);
        OT.length < MT && (WT.free(OT), OT = WT.mallocInt32(MT));
        var gT = zT.nextPow2(bT * mT);
        eT.length < gT && (WT.free(eT), eT = WT.mallocDouble(gT))
      }(TT, MT + wT);
      var yT, XT = 0,
        IT = 2 * TT;
      YT(XT++, 0, 0, MT, 0, wT, mT ? 16 : 0, -1 / 0, 1 / 0), mT || YT(XT++, 0, 0, wT, 0, MT, 1, -1 / 0, 1 / 0);
      for (; XT > 0;) {
        var QT = (XT -= 1) * iT,
          sT = OT[QT],
          FT = OT[QT + 1],
          PT = OT[QT + 2],
          VT = OT[QT + 3],
          uT = OT[QT + 4],
          CT = OT[QT + 5],
          rT = XT * bT,
          KT = eT[rT],
          ST = eT[rT + 1],
          GT = 1 & CT,
          NT = !!(16 & CT),
          ET = jT,
          hT = dT,
          DT = tT,
          oT = aT;
        if (GT && (ET = tT, hT = aT, DT = jT, oT = dT), !(2 & CT && FT >= (PT = cT(TT, sT, FT, PT, ET, hT, ST))) && !(4 & CT && (FT = vT(TT, sT, FT, PT, ET, hT, KT)) >= PT)) {
          var AT = PT - FT,
            RT = uT - VT;
          if (NT) {
            if (TT * AT * (AT + RT) < pT) {
              if (void 0 !== (yT = HT.scanComplete(TT, sT, UT, FT, PT, ET, hT, VT, uT, DT, oT))) return yT;
              continue
            }
          } else {
            if (TT * Math.min(AT, RT) < lT) {
              if (void 0 !== (yT = gT(TT, sT, UT, GT, FT, PT, ET, hT, VT, uT, DT, oT))) return yT;
              continue
            }
            if (TT * AT * RT < LT) {
              if (void 0 !== (yT = HT.scanBipartite(TT, sT, UT, GT, FT, PT, ET, hT, VT, uT, DT, oT))) return yT;
              continue
            }
          }
          var TU = BT(TT, sT, FT, PT, ET, hT, KT, ST);
          if (FT < TU)
            if (TT * (TU - FT) < lT) {
              if (void 0 !== (yT = nT(TT, sT + 1, UT, FT, TU, ET, hT, VT, uT, DT, oT))) return yT
            } else if (sT === TT - 2) {
            if (void 0 !== (yT = GT ? HT.sweepBipartite(TT, UT, VT, uT, DT, oT, FT, TU, ET, hT) : HT.sweepBipartite(TT, UT, FT, TU, ET, hT, VT, uT, DT, oT))) return yT
          } else YT(XT++, sT + 1, FT, TU, VT, uT, GT, -1 / 0, 1 / 0), YT(XT++, sT + 1, VT, uT, FT, TU, 1 ^ GT, -1 / 0, 1 / 0);
          if (TU < PT) {
            var UU = kT(TT, sT, VT, uT, DT, oT),
              mU = DT[IT * UU + sT],
              WU = ZT(TT, sT, UU, uT, DT, oT, mU);
            if (WU < uT && YT(XT++, sT, TU, PT, WU, uT, (4 | GT) + (NT ? 16 : 0), mU, ST), VT < UU && YT(XT++, sT, TU, PT, VT, UU, (2 | GT) + (NT ? 16 : 0), KT, mU), UU + 1 === WU) {
              if (void 0 !== (yT = NT ? xT(TT, sT, UT, TU, PT, ET, hT, UU, DT, oT[UU]) : JT(TT, sT, UT, GT, TU, PT, ET, hT, UU, DT, oT[UU]))) return yT
            } else if (UU < WU) {
              var zU;
              if (NT) {
                if (TU < (zU = fT(TT, sT, TU, PT, ET, hT, mU))) {
                  var MU = ZT(TT, sT, TU, zU, ET, hT, mU);
                  if (sT === TT - 2) {
                    if (TU < MU && void 0 !== (yT = HT.sweepComplete(TT, UT, TU, MU, ET, hT, UU, WU, DT, oT))) return yT;
                    if (MU < zU && void 0 !== (yT = HT.sweepBipartite(TT, UT, MU, zU, ET, hT, UU, WU, DT, oT))) return yT
                  } else TU < MU && YT(XT++, sT + 1, TU, MU, UU, WU, 16, -1 / 0, 1 / 0), MU < zU && (YT(XT++, sT + 1, MU, zU, UU, WU, 0, -1 / 0, 1 / 0), YT(XT++, sT + 1, UU, WU, MU, zU, 1, -1 / 0, 1 / 0))
                }
              } else TU < (zU = GT ? qT(TT, sT, TU, PT, ET, hT, mU) : fT(TT, sT, TU, PT, ET, hT, mU)) && (sT === TT - 2 ? yT = GT ? HT.sweepBipartite(TT, UT, UU, WU, DT, oT, TU, zU, ET, hT) : HT.sweepBipartite(TT, UT, TU, zU, ET, hT, UU, WU, DT, oT) : (YT(XT++, sT + 1, TU, zU, UU, WU, GT, -1 / 0, 1 / 0), YT(XT++, sT + 1, UU, WU, TU, zU, 1 ^ GT, -1 / 0, 1 / 0)))
            }
          }
        }
      }
    };
    var WT = mT(38417),
      zT = mT(38425),
      MT = mT(38454),
      gT = MT.partial,
      nT = MT.full,
      HT = mT(38442),
      kT = mT(38456),
      jT = mT(38458),
      lT = 128,
      LT = 1 << 22,
      pT = 1 << 22,
      BT = jT("!(lo>=p0)&&!(p1>=hi)", ["p0", "p1"]),
      ZT = jT("lo===p0", ["p0"]),
      cT = jT("lo<p0", ["p0"]),
      vT = jT("hi<=p0", ["p0"]),
      fT = jT("lo<=p0&&p0<=hi", ["p0"]),
      qT = jT("lo<p0&&p0<=hi", ["p0"]),
      iT = 6,
      bT = 2,
      OT = WT.mallocInt32(1024),
      eT = WT.mallocDouble(1024);

    function YT(TT, UT, mT, WT, zT, MT, gT, nT, HT) {
      var kT = iT * TT;
      OT[kT] = UT, OT[kT + 1] = mT, OT[kT + 2] = WT, OT[kT + 3] = zT, OT[kT + 4] = MT, OT[kT + 5] = gT;
      var jT = bT * TT;
      eT[jT] = nT, eT[jT + 1] = HT
    }

    function JT(TT, UT, mT, WT, zT, MT, gT, nT, HT, kT, jT) {
      var lT = 2 * TT,
        LT = HT * lT,
        pT = kT[LT + UT];
      TT: for (var BT = zT, ZT = zT * lT; BT < MT; ++BT, ZT += lT) {
        var cT = gT[ZT + UT],
          vT = gT[ZT + UT + TT];
        if (!(pT < cT || vT < pT) && (!WT || pT !== cT)) {
          for (var fT, qT = nT[BT], iT = UT + 1; iT < TT; ++iT) {
            cT = gT[ZT + iT], vT = gT[ZT + iT + TT];
            var bT = kT[LT + iT],
              OT = kT[LT + iT + TT];
            if (vT < bT || OT < cT) continue TT
          }
          if (void 0 !== (fT = WT ? mT(jT, qT) : mT(qT, jT))) return fT
        }
      }
    }

    function xT(TT, UT, mT, WT, zT, MT, gT, nT, HT, kT) {
      var jT = 2 * TT,
        lT = nT * jT,
        LT = HT[lT + UT];
      TT: for (var pT = WT, BT = WT * jT; pT < zT; ++pT, BT += jT) {
        var ZT = gT[pT];
        if (ZT !== kT) {
          var cT = MT[BT + UT],
            vT = MT[BT + UT + TT];
          if (!(LT < cT || vT < LT)) {
            for (var fT = UT + 1; fT < TT; ++fT) {
              cT = MT[BT + fT], vT = MT[BT + fT + TT];
              var qT = HT[lT + fT],
                iT = HT[lT + fT + TT];
              if (vT < qT || iT < cT) continue TT
            }
            var bT = mT(ZT, kT);
            if (void 0 !== bT) return bT
          }
        }
      }
    }
  },
  38456: (TT, UT, mT) => {
    TT.exports = function(TT, UT, mT, gT, nT, HT) {
      if (gT <= mT + 1) return mT;
      var kT = mT,
        jT = gT,
        lT = gT + mT >>> 1,
        LT = 2 * TT,
        pT = lT,
        BT = nT[LT * lT + UT];
      for (; kT < jT;) {
        if (jT - kT < zT) {
          MT(TT, UT, kT, jT, nT, HT), BT = nT[LT * lT + UT];
          break
        }
        var ZT = jT - kT,
          cT = Math.random() * ZT + kT | 0,
          vT = nT[LT * cT + UT],
          fT = Math.random() * ZT + kT | 0,
          qT = nT[LT * fT + UT],
          iT = Math.random() * ZT + kT | 0,
          bT = nT[LT * iT + UT];
        vT <= qT ? bT >= qT ? (pT = fT, BT = qT) : vT >= bT ? (pT = cT, BT = vT) : (pT = iT, BT = bT) : qT >= bT ? (pT = fT, BT = qT) : bT >= vT ? (pT = cT, BT = vT) : (pT = iT, BT = bT);
        for (var OT = LT * (jT - 1), eT = LT * pT, YT = 0; YT < LT; ++YT, ++OT, ++eT) {
          var JT = nT[OT];
          nT[OT] = nT[eT], nT[eT] = JT
        }
        var xT = HT[jT - 1];
        HT[jT - 1] = HT[pT], HT[pT] = xT;
        for (OT = LT * (jT - 1), eT = LT * (pT = WT(TT, UT, kT, jT - 1, nT, HT, BT)), YT = 0; YT < LT; ++YT, ++OT, ++eT) {
          JT = nT[OT];
          nT[OT] = nT[eT], nT[eT] = JT
        }
        xT = HT[jT - 1];
        if (HT[jT - 1] = HT[pT], HT[pT] = xT, lT < pT) {
          for (jT = pT - 1; kT < jT && nT[LT * (jT - 1) + UT] === BT;) jT -= 1;
          jT += 1
        } else {
          if (!(pT < lT)) break;
          for (kT = pT + 1; kT < jT && nT[LT * kT + UT] === BT;) kT += 1
        }
      }
      return WT(TT, UT, mT, lT, nT, HT, nT[LT * lT + UT])
    };
    var WT = mT(38458)("lo<p0", ["p0"]),
      zT = 8;

    function MT(TT, UT, mT, WT, zT, MT) {
      for (var gT = 2 * TT, nT = gT * (mT + 1) + UT, HT = mT + 1; HT < WT; ++HT, nT += gT)
        for (var kT = zT[nT], jT = HT, lT = gT * (HT - 1); jT > mT && zT[lT + UT] > kT; --jT, lT -= gT) {
          for (var LT = lT, pT = lT + gT, BT = 0; BT < gT; ++BT, ++LT, ++pT) {
            var ZT = zT[LT];
            zT[LT] = zT[pT], zT[pT] = ZT
          }
          var cT = MT[jT];
          MT[jT] = MT[jT - 1], MT[jT - 1] = cT
        }
    }
  },
  38458: TT => {
    TT.exports = function(TT, mT) {
      var WT = "abcdef".split("").concat(mT),
        zT = [];
      TT.indexOf("lo") >= 0 && zT.push("lo=e[k+n]");
      TT.indexOf("hi") >= 0 && zT.push("hi=e[k+o]");
      return WT.push(UT.replace("_", zT.join()).replace("$", TT)), Function.apply(void 0, WT)
    };
    var UT = "for(var j=2*a,k=j*c,l=k,m=c,n=b,o=a+b,p=c;d>p;++p,k+=j){var _;if($)if(m===p)m+=1,l+=j;else{for(var s=0;j>s;++s){var t=e[k+s];e[k+s]=e[l],e[l++]=t}var u=f[p];f[p]=f[m],f[m++]=u}}return m"
  },
  38446: TT => {
    TT.exports = function(TT, WT) {
      WT <= 4 * UT ? mT(0, WT - 1, TT) : kT(0, WT - 1, TT)
    };
    var UT = 32;

    function mT(TT, UT, mT) {
      for (var WT = 2 * (TT + 1), zT = TT + 1; zT <= UT; ++zT) {
        for (var MT = mT[WT++], gT = mT[WT++], nT = zT, HT = WT - 2; nT-- > TT;) {
          var kT = mT[HT - 2],
            jT = mT[HT - 1];
          if (kT < MT) break;
          if (kT === MT && jT < gT) break;
          mT[HT] = kT, mT[HT + 1] = jT, HT -= 2
        }
        mT[HT] = MT, mT[HT + 1] = gT
      }
    }

    function WT(TT, UT, mT) {
      UT *= 2;
      var WT = mT[TT *= 2],
        zT = mT[TT + 1];
      mT[TT] = mT[UT], mT[TT + 1] = mT[UT + 1], mT[UT] = WT, mT[UT + 1] = zT
    }

    function zT(TT, UT, mT) {
      UT *= 2, mT[TT *= 2] = mT[UT], mT[TT + 1] = mT[UT + 1]
    }

    function MT(TT, UT, mT, WT) {
      UT *= 2, mT *= 2;
      var zT = WT[TT *= 2],
        MT = WT[TT + 1];
      WT[TT] = WT[UT], WT[TT + 1] = WT[UT + 1], WT[UT] = WT[mT], WT[UT + 1] = WT[mT + 1], WT[mT] = zT, WT[mT + 1] = MT
    }

    function gT(TT, UT, mT, WT, zT) {
      UT *= 2, zT[TT *= 2] = zT[UT], zT[UT] = mT, zT[TT + 1] = zT[UT + 1], zT[UT + 1] = WT
    }

    function nT(TT, UT, mT) {
      UT *= 2;
      var WT = mT[TT *= 2],
        zT = mT[UT];
      return !(WT < zT) && (WT !== zT || mT[TT + 1] > mT[UT + 1])
    }

    function HT(TT, UT, mT, WT) {
      var zT = WT[TT *= 2];
      return zT < UT || zT === UT && WT[TT + 1] < mT
    }

    function kT(TT, jT, lT) {
      var LT = (jT - TT + 1) / 6 | 0,
        pT = TT + LT,
        BT = jT - LT,
        ZT = TT + jT >> 1,
        cT = ZT - LT,
        vT = ZT + LT,
        fT = pT,
        qT = cT,
        iT = ZT,
        bT = vT,
        OT = BT,
        eT = TT + 1,
        YT = jT - 1,
        JT = 0;
      nT(fT, qT, lT) && (JT = fT, fT = qT, qT = JT), nT(bT, OT, lT) && (JT = bT, bT = OT, OT = JT), nT(fT, iT, lT) && (JT = fT, fT = iT, iT = JT), nT(qT, iT, lT) && (JT = qT, qT = iT, iT = JT), nT(fT, bT, lT) && (JT = fT, fT = bT, bT = JT), nT(iT, bT, lT) && (JT = iT, iT = bT, bT = JT), nT(qT, OT, lT) && (JT = qT, qT = OT, OT = JT), nT(qT, iT, lT) && (JT = qT, qT = iT, iT = JT), nT(bT, OT, lT) && (JT = bT, bT = OT, OT = JT);
      for (var xT = lT[2 * qT], dT = lT[2 * qT + 1], wT = lT[2 * bT], tT = lT[2 * bT + 1], aT = 2 * fT, yT = 2 * iT, XT = 2 * OT, IT = 2 * pT, QT = 2 * ZT, sT = 2 * BT, FT = 0; FT < 2; ++FT) {
        var PT = lT[aT + FT],
          VT = lT[yT + FT],
          uT = lT[XT + FT];
        lT[IT + FT] = PT, lT[QT + FT] = VT, lT[sT + FT] = uT
      }
      zT(cT, TT, lT), zT(vT, jT, lT);
      for (var CT = eT; CT <= YT; ++CT)
        if (HT(CT, xT, dT, lT)) CT !== eT && WT(CT, eT, lT), ++eT;
        else if (!HT(CT, wT, tT, lT))
        for (;;) {
          if (HT(YT, wT, tT, lT)) {
            HT(YT, xT, dT, lT) ? (MT(CT, eT, YT, lT), ++eT, --YT) : (WT(CT, YT, lT), --YT);
            break
          }
          if (--YT < CT) break
        }
      gT(TT, eT - 1, xT, dT, lT), gT(jT, YT + 1, wT, tT, lT), eT - 2 - TT <= UT ? mT(TT, eT - 2, lT) : kT(TT, eT - 2, lT), jT - (YT + 2) <= UT ? mT(YT + 2, jT, lT) : kT(YT + 2, jT, lT), YT - eT <= UT ? mT(eT, YT, lT) : kT(eT, YT, lT)
    }
  },
  38442: (TT, UT, mT) => {
    TT.exports = {
      init: function(TT) {
        var UT = zT.nextPow2(TT);
        HT.length < UT && (WT.free(HT), HT = WT.mallocInt32(UT));
        kT.length < UT && (WT.free(kT), kT = WT.mallocInt32(UT));
        jT.length < UT && (WT.free(jT), jT = WT.mallocInt32(UT));
        lT.length < UT && (WT.free(lT), lT = WT.mallocInt32(UT));
        LT.length < UT && (WT.free(LT), LT = WT.mallocInt32(UT));
        pT.length < UT && (WT.free(pT), pT = WT.mallocInt32(UT));
        var mT = 8 * UT;
        BT.length < mT && (WT.free(BT), BT = WT.mallocDouble(mT))
      },
      sweepBipartite: function(TT, UT, mT, WT, zT, nT, LT, pT, vT, fT) {
        for (var qT = 0, iT = 2 * TT, bT = TT - 1, OT = iT - 1, eT = mT; eT < WT; ++eT) {
          var YT = nT[eT],
            JT = iT * eT;
          BT[qT++] = zT[JT + bT], BT[qT++] = -(YT + 1), BT[qT++] = zT[JT + OT], BT[qT++] = YT
        }
        for (eT = LT; eT < pT; ++eT) {
          YT = fT[eT] + gT;
          var xT = iT * eT;
          BT[qT++] = vT[xT + bT], BT[qT++] = -YT, BT[qT++] = vT[xT + OT], BT[qT++] = YT
        }
        var dT = qT >>> 1;
        MT(BT, dT);
        var wT = 0,
          tT = 0;
        for (eT = 0; eT < dT; ++eT) {
          var aT = 0 | BT[2 * eT + 1];
          if (aT >= gT) ZT(jT, lT, tT--, aT = aT - gT | 0);
          else if (aT >= 0) ZT(HT, kT, wT--, aT);
          else if (aT <= -gT) {
            aT = -aT - gT | 0;
            for (var yT = 0; yT < wT; ++yT) {
              if (void 0 !== (XT = UT(HT[yT], aT))) return XT
            }
            cT(jT, lT, tT++, aT)
          } else {
            aT = -aT - 1 | 0;
            for (yT = 0; yT < tT; ++yT) {
              var XT;
              if (void 0 !== (XT = UT(aT, jT[yT]))) return XT
            }
            cT(HT, kT, wT++, aT)
          }
        }
      },
      sweepComplete: function(TT, UT, mT, WT, zT, gT, nT, vT, fT, qT) {
        for (var iT = 0, bT = 2 * TT, OT = TT - 1, eT = bT - 1, YT = mT; YT < WT; ++YT) {
          var JT = gT[YT] + 1 << 1,
            xT = bT * YT;
          BT[iT++] = zT[xT + OT], BT[iT++] = -JT, BT[iT++] = zT[xT + eT], BT[iT++] = JT
        }
        for (YT = nT; YT < vT; ++YT) {
          JT = qT[YT] + 1 << 1;
          var dT = bT * YT;
          BT[iT++] = fT[dT + OT], BT[iT++] = 1 | -JT, BT[iT++] = fT[dT + eT], BT[iT++] = 1 | JT
        }
        var wT = iT >>> 1;
        MT(BT, wT);
        var tT = 0,
          aT = 0,
          yT = 0;
        for (YT = 0; YT < wT; ++YT) {
          var XT = 0 | BT[2 * YT + 1],
            IT = 1 & XT;
          if (YT < wT - 1 && XT >> 1 === BT[2 * YT + 3] >> 1 && (IT = 2, YT += 1), XT < 0) {
            for (var QT = -(XT >> 1) - 1, sT = 0; sT < yT; ++sT) {
              if (void 0 !== (FT = UT(LT[sT], QT))) return FT
            }
            if (0 !== IT)
              for (sT = 0; sT < tT; ++sT) {
                if (void 0 !== (FT = UT(HT[sT], QT))) return FT
              }
            if (1 !== IT)
              for (sT = 0; sT < aT; ++sT) {
                var FT;
                if (void 0 !== (FT = UT(jT[sT], QT))) return FT
              }
            0 === IT ? cT(HT, kT, tT++, QT) : 1 === IT ? cT(jT, lT, aT++, QT) : 2 === IT && cT(LT, pT, yT++, QT)
          } else {
            QT = (XT >> 1) - 1;
            0 === IT ? ZT(HT, kT, tT--, QT) : 1 === IT ? ZT(jT, lT, aT--, QT) : 2 === IT && ZT(LT, pT, yT--, QT)
          }
        }
      },
      scanBipartite: function(TT, UT, mT, WT, zT, nT, jT, lT, LT, pT, vT, fT) {
        var qT = 0,
          iT = 2 * TT,
          bT = UT,
          OT = UT + TT,
          eT = 1,
          YT = 1;
        WT ? YT = gT : eT = gT;
        for (var JT = zT; JT < nT; ++JT) {
          var xT = JT + eT,
            dT = iT * JT;
          BT[qT++] = jT[dT + bT], BT[qT++] = -xT, BT[qT++] = jT[dT + OT], BT[qT++] = xT
        }
        for (JT = LT; JT < pT; ++JT) {
          xT = JT + YT;
          var wT = iT * JT;
          BT[qT++] = vT[wT + bT], BT[qT++] = -xT
        }
        var tT = qT >>> 1;
        MT(BT, tT);
        var aT = 0;
        for (JT = 0; JT < tT; ++JT) {
          var yT = 0 | BT[2 * JT + 1];
          if (yT < 0) {
            var XT = !1;
            if ((xT = -yT) >= gT ? (XT = !WT, xT -= gT) : (XT = !!WT, xT -= 1), XT) cT(HT, kT, aT++, xT);
            else {
              var IT = fT[xT],
                QT = iT * xT,
                sT = vT[QT + UT + 1],
                FT = vT[QT + UT + 1 + TT];
              TT: for (var PT = 0; PT < aT; ++PT) {
                var VT = HT[PT],
                  uT = iT * VT;
                if (!(FT < jT[uT + UT + 1] || jT[uT + UT + 1 + TT] < sT)) {
                  for (var CT = UT + 2; CT < TT; ++CT)
                    if (vT[QT + CT + TT] < jT[uT + CT] || jT[uT + CT + TT] < vT[QT + CT]) continue TT;
                  var rT, KT = lT[VT];
                  if (void 0 !== (rT = WT ? mT(IT, KT) : mT(KT, IT))) return rT
                }
              }
            }
          } else ZT(HT, kT, aT--, yT - eT)
        }
      },
      scanComplete: function(TT, UT, mT, WT, zT, nT, kT, jT, lT, LT, pT) {
        for (var ZT = 0, cT = 2 * TT, vT = UT, fT = UT + TT, qT = WT; qT < zT; ++qT) {
          var iT = qT + gT,
            bT = cT * qT;
          BT[ZT++] = nT[bT + vT], BT[ZT++] = -iT, BT[ZT++] = nT[bT + fT], BT[ZT++] = iT
        }
        for (qT = jT; qT < lT; ++qT) {
          iT = qT + 1;
          var OT = cT * qT;
          BT[ZT++] = LT[OT + vT], BT[ZT++] = -iT
        }
        var eT = ZT >>> 1;
        MT(BT, eT);
        var YT = 0;
        for (qT = 0; qT < eT; ++qT) {
          var JT = 0 | BT[2 * qT + 1];
          if (JT < 0) {
            if ((iT = -JT) >= gT) HT[YT++] = iT - gT;
            else {
              var xT = pT[iT -= 1],
                dT = cT * iT,
                wT = LT[dT + UT + 1],
                tT = LT[dT + UT + 1 + TT];
              TT: for (var aT = 0; aT < YT; ++aT) {
                var yT = HT[aT],
                  XT = kT[yT];
                if (XT === xT) break;
                var IT = cT * yT;
                if (!(tT < nT[IT + UT + 1] || nT[IT + UT + 1 + TT] < wT)) {
                  for (var QT = UT + 2; QT < TT; ++QT)
                    if (LT[dT + QT + TT] < nT[IT + QT] || nT[IT + QT + TT] < LT[dT + QT]) continue TT;
                  var sT = mT(XT, xT);
                  if (void 0 !== sT) return sT
                }
              }
            }
          } else {
            for (iT = JT - gT, aT = YT - 1; aT >= 0; --aT)
              if (HT[aT] === iT) {
                for (QT = aT + 1; QT < YT; ++QT) HT[QT - 1] = HT[QT];
                break
              }-- YT
          }
        }
      }
    };
    var WT = mT(38417),
      zT = mT(38425),
      MT = mT(38446),
      gT = 1 << 28,
      nT = 1024,
      HT = WT.mallocInt32(nT),
      kT = WT.mallocInt32(nT),
      jT = WT.mallocInt32(nT),
      lT = WT.mallocInt32(nT),
      LT = WT.mallocInt32(nT),
      pT = WT.mallocInt32(nT),
      BT = WT.mallocDouble(8192);

    function ZT(TT, UT, mT, WT) {
      var zT = UT[WT],
        MT = TT[mT - 1];
      TT[zT] = MT, UT[MT] = zT
    }

    function cT(TT, UT, mT, WT) {
      TT[mT] = WT, UT[WT] = mT
    }
  },
  38430: TT => {
    function UT(TT, mT, WT) {
      var zT = 0 | TT[WT];
      if (zT <= 0) return [];
      var MT, gT = new Array(zT);
      if (WT === TT.length - 1)
        for (MT = 0; MT < zT; ++MT) gT[MT] = mT;
      else
        for (MT = 0; MT < zT; ++MT) gT[MT] = UT(TT, mT, WT + 1);
      return gT
    }
    TT.exports = function(TT, mT) {
      switch ("undefined" === typeof mT && (mT = 0), typeof TT) {
        case "number":
          if (TT > 0) return function(TT, UT) {
            var mT, WT;
            for (mT = new Array(TT), WT = 0; WT < TT; ++WT) mT[WT] = UT;
            return mT
          }(0 | TT, mT);
          break;
        case "object":
          if ("number" === typeof TT.length) return UT(TT, mT, 0)
      }
      return []
    }
  },
  38376: (TT, UT, mT) => {
    TT.exports = function() {
      var TT = this;
      this.components = {}, this.comps = this.components;
      var UT = this.components,
        mT = 1,
        zT = {},
        MT = [],
        gT = [],
        nT = {
          timeout: !1,
          removals: [],
          multiComps: []
        };

      function HT(TT, mT) {
        var WT = UT[mT],
          MT = zT[mT],
          gT = MT.hash[TT];
        gT && (MT.remove(TT), WT.yI && (WT.multi ? (gT.forEach((UT => {
          UT && WT.yI(TT, UT)
        })), gT.length = 0) : WT.yI(TT, gT)), nT.removals.push(MT), kT())
      }

      function kT() {
        nT.timeout || (nT.timeout = !0, setTimeout(jT, 1))
      }

      function jT() {
        nT.timeout = !1, lT()
      }

      function lT() {
        nT.multiComps.length && function(TT) {
          for (var UT = 0; UT < TT.length; UT++) {
            var {
              entID: mT,
              data: WT
            } = TT[UT], zT = WT.hash[mT];
            if (zT) {
              for (var MT = 0; MT < zT.length; MT++) zT[MT] || (zT.splice(MT, 1), MT--);
              0 === zT.length && (WT.remove(mT), nT.removals.push(WT))
            }
          }
          TT.length = 0
        }(nT.multiComps), nT.removals.length && function(TT) {
          for (var UT = 0; UT < TT.length; UT++) {
            TT[UT].flush()
          }
          TT.length = 0
        }(nT.removals)
      }
      this.lZ = zT, this._systems = MT, this._renderSystems = gT, this.XN = function(UT) {
        var WT = mT++;
        return Array.isArray(UT) && UT.forEach((UT => TT.YV(WT, UT))), WT
      }, this.deleteEntity = function(UT) {
        return Object.keys(zT).forEach((TT => {
          zT[TT].hash[UT] && HT(UT, TT)
        })), TT
      }, this.DUT = function(TT) {
        if (!TT) throw new Error("Missing component definition");
        var mT = TT.name;
        if (!mT) throw new Error("Component definition must have a name property.");
        if ("string" !== typeof mT) throw new Error("Component name must be a string.");
        if ("" === mT) throw new Error("Component name must be a non-empty string.");
        if (zT[mT]) throw new Error(`Component ${mT} already exists.`);
        var nT = {};
        return nT.name = mT, nT.multi = !!TT.multi, nT.order = isNaN(TT.order) ? 99 : TT.order, nT.stateConstructor = TT.stateConstructor || null, nT.state = TT.state || {}, nT.lY = TT.lY || null, nT.yI = TT.yI || null, nT.system = TT.system || null, nT.ZY = TT.ZY || null, UT[mT] = nT, zT[mT] = new WT, zT[mT]._pendingMultiCleanup = !1, zT[mT]._multiCleanupIDs = nT.multi ? [] : null, nT.system && (MT.push(mT), MT.sort(((TT, mT) => UT[TT].order - UT[mT].order))), nT.ZY && (gT.push(mT), gT.sort(((TT, mT) => UT[TT].order - UT[mT].order))), mT
      }, this.overwriteComponent = function(TT, mT) {
        var WT = UT[TT];
        if (!WT) throw new Error(`Unknown component: ${TT}`);
        if (!mT) throw new Error("Missing component definition");
        if (WT.name !== mT.name) throw new Error("Overwriting component must use the same name property.");
        var nT = {};
        nT.name = TT, nT.multi = !!mT.multi, nT.order = isNaN(mT.order) ? 99 : mT.order, nT.state = mT.state || {}, nT.lY = mT.lY || null, nT.yI = mT.yI || null, nT.system = mT.system || null, nT.ZY = mT.ZY || null, UT[TT] = nT, zT[TT]._pendingMultiCleanup = !1, zT[TT]._multiCleanupIDs = nT.multi ? [] : null;
        var HT = MT.indexOf(TT);
        nT.system && HT < 0 && MT.push(TT), !nT.system && HT >= 0 && MT.splice(HT, 1), MT.sort(((TT, mT) => UT[TT].order - UT[mT].order));
        var kT = gT.indexOf(TT);
        nT.ZY && kT < 0 && gT.push(TT), !nT.ZY && kT >= 0 && gT.splice(kT, 1), gT.sort(((TT, mT) => UT[TT].order - UT[mT].order));
        var jT = nT.state;
        return this.qV(TT).forEach((TT => {
          for (var UT in jT) UT in TT || (TT[UT] = jT[UT]);
          nT.lY && nT.lY(TT.bV, TT)
        })), TT
      }, this.deleteComponent = function(mT) {
        var WT = zT[mT];
        if (!WT) throw new Error(`Unknown component: ${mT}`);
        WT.flush(), WT.list.forEach((TT => {
          TT && HT(TT.bV || TT[0].bV, mT)
        }));
        var nT = MT.indexOf(mT),
          kT = gT.indexOf(mT);
        return nT > -1 && MT.splice(nT, 1), kT > -1 && gT.splice(kT, 1), zT[mT].dispose(), delete zT[mT], delete UT[mT], TT
      }, this.YV = function(TT, mT, WT) {
        var MT, gT = UT[mT],
          nT = zT[mT];
        if (!nT) throw new Error(`Unknown component: ${mT}.`);
        if (nT.hash[TT] && !gT.multi) throw new Error(`Entity ${TT} already has component: ${mT}.`);
        if (gT.stateConstructor) {
          if (!(MT = new gT.stateConstructor).hasOwnProperty("bV")) throw new Error(`Component ${gT.name} stateConstructor type does not have property __id`);
          Object.assign(MT, gT.state, WT)
        } else MT = {
          bV: TT,
          ...gT.state,
          ...WT
        };
        if (MT.bV = TT, gT.multi) {
          var HT = nT.hash[TT];
          HT || (HT = [], nT.add(TT, HT)), HT.push(MT)
        } else nT.add(TT, MT);
        return gT.lY && gT.lY(TT, MT), this
      }, this.uTT = function(TT, UT) {
        var mT = zT[UT];
        if (!mT) throw new Error(`Unknown component: ${UT}.`);
        return !!mT.hash[TT]
      }, this.JV = function(UT, mT) {
        if (!zT[mT]) throw new Error(`Unknown component: ${mT}.`);
        return HT(UT, mT), TT
      }, this.getState = function(TT, UT) {
        var mT = zT[UT];
        if (!mT) throw new Error(`Unknown component: ${UT}.`);
        return mT.hash[TT]
      }, this.qV = function(TT) {
        var UT = zT[TT];
        if (!UT) throw new Error(`Unknown component: ${TT}.`);
        return lT(), UT.list
      }, this.dUT = function(TT) {
        if (!zT[TT]) throw new Error(`Unknown component: ${TT}.`);
        var UT = zT[TT].hash;
        return TT => UT[TT]
      }, this.IUT = function(TT) {
        if (!zT[TT]) throw new Error(`Unknown component: ${TT}.`);
        var UT = zT[TT].hash;
        return TT => !!UT[TT]
      }, this.Cl = function(mT) {
        lT();
        for (var WT = 0; WT < MT.length; WT++) {
          var gT = MT[WT],
            nT = UT[gT],
            HT = zT[gT];
          nT.system(mT, HT.list), lT()
        }
        return TT
      }, this.render = function(mT) {
        lT();
        for (var WT = 0; WT < gT.length; WT++) {
          var MT = gT[WT],
            nT = UT[MT],
            HT = zT[MT];
          nT.ZY(mT, HT.list), lT()
        }
        return TT
      }, this.removeMultiComponent = function(mT, WT, MT) {
        var gT = UT[WT],
          HT = zT[WT];
        if (!HT) throw new Error(`Unknown component: ${WT}.`);
        if (!gT.multi) throw new Error("removeMultiComponent called on non-multi component");
        return function(TT, UT, mT, WT) {
          var zT = mT.hash[TT];
          if (zT) {
            var MT = zT[WT];
            MT && (zT[WT] = null, UT.yI && UT.yI(TT, MT), nT.multiComps.push({
              entID: TT,
              data: mT
            }), kT())
          }
        }(mT, gT, HT, MT), TT
      }
    };
    var WT = mT(38384)
  },
  38384: TT => {
    function UT(TT, UT) {
      var mT = TT._map[UT];
      if (delete TT.hash[UT], delete TT._map[UT], mT === TT.list.length - 1) TT.list.pop(), TT._idList.pop();
      else {
        var WT = TT.list.pop();
        TT.list[mT] = WT;
        var zT = TT._idList.pop();
        TT._idList[mT] = zT, TT._map[zT] = mT
      }
    }
    TT.exports = class {
      constructor() {
        this.list = [], this.hash = {}, this._map = {}, this._idList = [], this._pendingRemovals = []
      }
      add(TT, UT) {
        if ("number" === typeof this._map[TT]) {
          var mT = this._map[TT];
          this.hash[TT] = UT, this.list[mT] = UT, this._idList[mT] = TT
        } else this._map[TT] = this.list.length, this.hash[TT] = UT, this.list.push(UT), this._idList.push(TT)
      }
      remove(TT) {
        var UT = this._map[TT];
        this.hash[TT] = null, this.list[UT] = null, this._pendingRemovals.push(TT)
      }
      dispose() {
        this.list = null, this.hash = null, this._map = null, this._idList = null, this._pendingRemovals.length = 0
      }
      flush() {
        for (var TT = 0; TT < this._pendingRemovals.length; TT++) {
          var mT = this._pendingRemovals[TT];
          null === this.hash[mT] && UT(this, mT)
        }
        this._pendingRemovals.length = 0
      }
    }
  },
  38184: (TT, UT, mT) => {
    TT = mT.nmd(TT);
    var WT = "__lodash_hash_undefined__",
      zT = 9007199254740991,
      MT = "[object Arguments]",
      gT = "[object Boolean]",
      nT = "[object Date]",
      HT = "[object Function]",
      kT = "[object GeneratorFunction]",
      jT = "[object Map]",
      lT = "[object Number]",
      LT = "[object Object]",
      pT = "[object Promise]",
      BT = "[object RegExp]",
      ZT = "[object Set]",
      cT = "[object String]",
      vT = "[object Symbol]",
      fT = "[object WeakMap]",
      qT = "[object ArrayBuffer]",
      iT = "[object DataView]",
      bT = "[object Float32Array]",
      OT = "[object Float64Array]",
      eT = "[object Int8Array]",
      YT = "[object Int16Array]",
      JT = "[object Int32Array]",
      xT = "[object Uint8Array]",
      dT = "[object Uint8ClampedArray]",
      wT = "[object Uint16Array]",
      tT = "[object Uint32Array]",
      aT = /\w*$/,
      yT = /^\[object .+?Constructor\]$/,
      XT = /^(?:0|[1-9]\d*)$/,
      IT = {};
    IT[MT] = IT["[object Array]"] = IT[qT] = IT[iT] = IT[gT] = IT[nT] = IT[bT] = IT[OT] = IT[eT] = IT[YT] = IT[JT] = IT[jT] = IT[lT] = IT[LT] = IT[BT] = IT[ZT] = IT[cT] = IT[vT] = IT[xT] = IT[dT] = IT[wT] = IT[tT] = !0, IT["[object Error]"] = IT[HT] = IT[fT] = !1;
    var QT = "object" == typeof mT.g && mT.g && mT.g.Object === Object && mT.g,
      sT = "object" == typeof self && self && self.Object === Object && self,
      FT = QT || sT || Function("return this")(),
      PT = UT && !UT.nodeType && UT,
      VT = PT && TT && !TT.nodeType && TT,
      uT = VT && VT.exports === PT;

    function CT(TT, UT) {
      return TT.set(UT[0], UT[1]), TT
    }

    function rT(TT, UT) {
      return TT.add(UT), TT
    }

    function KT(TT, UT, mT, WT) {
      var zT = -1,
        MT = TT ? TT.length : 0;
      for (WT && MT && (mT = TT[++zT]); ++zT < MT;) mT = UT(mT, TT[zT], zT, TT);
      return mT
    }

    function ST(TT) {
      var UT = !1;
      if (null != TT && "function" != typeof TT.toString) try {
        UT = !!(TT + "")
      } catch (mT) {}
      return UT
    }

    function GT(TT) {
      var UT = -1,
        mT = Array(TT.size);
      return TT.forEach((function(TT, WT) {
        mT[++UT] = [WT, TT]
      })), mT
    }

    function NT(TT, UT) {
      return function(mT) {
        return TT(UT(mT))
      }
    }

    function ET(TT) {
      var UT = -1,
        mT = Array(TT.size);
      return TT.forEach((function(TT) {
        mT[++UT] = TT
      })), mT
    }
    var hT = Array.prototype,
      DT = Function.prototype,
      oT = Object.prototype,
      AT = FT["__core-js_shared__"],
      RT = function() {
        var TT = /[^.]+$/.exec(AT && AT.keys && AT.keys.IE_PROTO || "");
        return TT ? "Symbol(src)_1." + TT : ""
      }(),
      TU = DT.toString,
      UU = oT.hasOwnProperty,
      mU = oT.toString,
      WU = RegExp("^" + TU.call(UU).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
      zU = uT ? FT.HB : void 0,
      MU = FT.Symbol,
      gU = FT.Uint8Array,
      nU = NT(Object.getPrototypeOf, Object),
      HU = Object.create,
      kU = oT.propertyIsEnumerable,
      jU = hT.splice,
      lU = Object.getOwnPropertySymbols,
      LU = zU ? zU.isBuffer : void 0,
      pU = NT(Object.keys, Object),
      BU = uU(FT, "DataView"),
      ZU = uU(FT, "Map"),
      cU = uU(FT, "Promise"),
      vU = uU(FT, "Set"),
      fU = uU(FT, "WeakMap"),
      qU = uU(Object, "create"),
      iU = GU(BU),
      bU = GU(ZU),
      OU = GU(cU),
      eU = GU(vU),
      YU = GU(fU),
      JU = MU ? MU.prototype : void 0,
      xU = JU ? JU.valueOf : void 0;

    function dU(TT) {
      var UT = -1,
        mT = TT ? TT.length : 0;
      for (this.clear(); ++UT < mT;) {
        var WT = TT[UT];
        this.set(WT[0], WT[1])
      }
    }

    function wU(TT) {
      var UT = -1,
        mT = TT ? TT.length : 0;
      for (this.clear(); ++UT < mT;) {
        var WT = TT[UT];
        this.set(WT[0], WT[1])
      }
    }

    function tU(TT) {
      var UT = -1,
        mT = TT ? TT.length : 0;
      for (this.clear(); ++UT < mT;) {
        var WT = TT[UT];
        this.set(WT[0], WT[1])
      }
    }

    function aU(TT) {
      this.__data__ = new wU(TT)
    }

    function yU(TT, UT) {
      var mT = EU(TT) || function(TT) {
          return function(TT) {
            return function(TT) {
              return !!TT && "object" == typeof TT
            }(TT) && hU(TT)
          }(TT) && UU.call(TT, "callee") && (!kU.call(TT, "callee") || mU.call(TT) == MT)
        }(TT) ? function(TT, UT) {
          for (var mT = -1, WT = Array(TT); ++mT < TT;) WT[mT] = UT(mT);
          return WT
        }(TT.length, String) : [],
        WT = mT.length,
        zT = !!WT;
      for (var gT in TT) !UT && !UU.call(TT, gT) || zT && ("length" == gT || KU(gT, WT)) || mT.push(gT);
      return mT
    }

    function XU(TT, UT, mT) {
      var WT = TT[UT];
      UU.call(TT, UT) && NU(WT, mT) && (void 0 !== mT || UT in TT) || (TT[UT] = mT)
    }

    function IU(TT, UT) {
      for (var mT = TT.length; mT--;)
        if (NU(TT[mT][0], UT)) return mT;
      return -1
    }

    function QU(TT, UT, mT, WT, zT, pT, fT) {
      var yT;
      if (WT && (yT = pT ? WT(TT, zT, pT, fT) : WT(TT)), void 0 !== yT) return yT;
      if (!AU(TT)) return TT;
      var XT = EU(TT);
      if (XT) {
        if (yT = function(TT) {
            var UT = TT.length,
              mT = TT.constructor(UT);
            UT && "string" == typeof TT[0] && UU.call(TT, "index") && (mT.index = TT.index, mT.input = TT.input);
            return mT
          }(TT), !UT) return function(TT, UT) {
          var mT = -1,
            WT = TT.length;
          UT || (UT = Array(WT));
          for (; ++mT < WT;) UT[mT] = TT[mT];
          return UT
        }(TT, yT)
      } else {
        var QT = rU(TT),
          sT = QT == HT || QT == kT;
        if (DU(TT)) return function(TT, UT) {
          if (UT) return TT.slice();
          var mT = new TT.constructor(TT.length);
          return TT.copy(mT), mT
        }(TT, UT);
        if (QT == LT || QT == MT || sT && !pT) {
          if (ST(TT)) return pT ? TT : {};
          if (yT = function(TT) {
              return "function" != typeof TT.constructor || SU(TT) ? {} : (UT = nU(TT), AU(UT) ? HU(UT) : {});
              var UT
            }(sT ? {} : TT), !UT) return function(TT, UT) {
            return PU(TT, CU(TT), UT)
          }(TT, function(TT, UT) {
            return TT && PU(UT, RU(UT), TT)
          }(yT, TT))
        } else {
          if (!IT[QT]) return pT ? TT : {};
          yT = function(TT, UT, mT, WT) {
            var zT = TT.constructor;
            switch (UT) {
              case qT:
                return FU(TT);
              case gT:
              case nT:
                return new zT(+TT);
              case iT:
                return function(TT, UT) {
                  var mT = UT ? FU(TT.buffer) : TT.buffer;
                  return new TT.constructor(mT, TT.byteOffset, TT.byteLength)
                }(TT, WT);
              case bT:
              case OT:
              case eT:
              case YT:
              case JT:
              case xT:
              case dT:
              case wT:
              case tT:
                return function(TT, UT) {
                  var mT = UT ? FU(TT.buffer) : TT.buffer;
                  return new TT.constructor(mT, TT.byteOffset, TT.length)
                }(TT, WT);
              case jT:
                return function(TT, UT, mT) {
                  var WT = UT ? mT(GT(TT), !0) : GT(TT);
                  return KT(WT, CT, new TT.constructor)
                }(TT, WT, mT);
              case lT:
              case cT:
                return new zT(TT);
              case BT:
                return function(TT) {
                  var UT = new TT.constructor(TT.source, aT.exec(TT));
                  return UT.lastIndex = TT.lastIndex, UT
                }(TT);
              case ZT:
                return function(TT, UT, mT) {
                  var WT = UT ? mT(ET(TT), !0) : ET(TT);
                  return KT(WT, rT, new TT.constructor)
                }(TT, WT, mT);
              case vT:
                return MT = TT, xU ? Object(xU.call(MT)) : {}
            }
            var MT
          }(TT, QT, QU, UT)
        }
      }
      fT || (fT = new aU);
      var FT = fT.get(TT);
      if (FT) return FT;
      if (fT.set(TT, yT), !XT) var PT = mT ? function(TT) {
        return function(TT, UT, mT) {
          var WT = UT(TT);
          return EU(TT) ? WT : function(TT, UT) {
            for (var mT = -1, WT = UT.length, zT = TT.length; ++mT < WT;) TT[zT + mT] = UT[mT];
            return TT
          }(WT, mT(TT))
        }(TT, RU, CU)
      }(TT) : RU(TT);
      return function(TT, UT) {
        for (var mT = -1, WT = TT ? TT.length : 0; ++mT < WT && !1 !== UT(TT[mT], mT, TT););
      }(PT || TT, (function(zT, MT) {
        PT && (zT = TT[MT = zT]), XU(yT, MT, QU(zT, UT, mT, WT, MT, TT, fT))
      })), yT
    }

    function sU(TT) {
      return !(!AU(TT) || (UT = TT, RT && RT in UT)) && (oU(TT) || ST(TT) ? WU : yT).test(GU(TT));
      var UT
    }

    function FU(TT) {
      var UT = new TT.constructor(TT.byteLength);
      return new gU(UT).set(new gU(TT)), UT
    }

    function PU(TT, UT, mT, WT) {
      mT || (mT = {});
      for (var zT = -1, MT = UT.length; ++zT < MT;) {
        var gT = UT[zT],
          nT = WT ? WT(mT[gT], TT[gT], gT, mT, TT) : void 0;
        XU(mT, gT, void 0 === nT ? TT[gT] : nT)
      }
      return mT
    }

    function VU(TT, UT) {
      var mT = TT.__data__;
      return function(TT) {
        var UT = typeof TT;
        return "string" == UT || "number" == UT || "symbol" == UT || "boolean" == UT ? "__proto__" !== TT : null === TT
      }(UT) ? mT["string" == typeof UT ? "string" : "hash"] : mT.map
    }

    function uU(TT, UT) {
      var mT = function(TT, UT) {
        return null == TT ? void 0 : TT[UT]
      }(TT, UT);
      return sU(mT) ? mT : void 0
    }
    dU.prototype.clear = function() {
      this.__data__ = qU ? qU(null) : {}
    }, dU.prototype.delete = function(TT) {
      return this.has(TT) && delete this.__data__[TT]
    }, dU.prototype.get = function(TT) {
      var UT = this.__data__;
      if (qU) {
        var mT = UT[TT];
        return mT === WT ? void 0 : mT
      }
      return UU.call(UT, TT) ? UT[TT] : void 0
    }, dU.prototype.has = function(TT) {
      var UT = this.__data__;
      return qU ? void 0 !== UT[TT] : UU.call(UT, TT)
    }, dU.prototype.set = function(TT, UT) {
      return this.__data__[TT] = qU && void 0 === UT ? WT : UT, this
    }, wU.prototype.clear = function() {
      this.__data__ = []
    }, wU.prototype.delete = function(TT) {
      var UT = this.__data__,
        mT = IU(UT, TT);
      return !(mT < 0) && (mT == UT.length - 1 ? UT.pop() : jU.call(UT, mT, 1), !0)
    }, wU.prototype.get = function(TT) {
      var UT = this.__data__,
        mT = IU(UT, TT);
      return mT < 0 ? void 0 : UT[mT][1]
    }, wU.prototype.has = function(TT) {
      return IU(this.__data__, TT) > -1
    }, wU.prototype.set = function(TT, UT) {
      var mT = this.__data__,
        WT = IU(mT, TT);
      return WT < 0 ? mT.push([TT, UT]) : mT[WT][1] = UT, this
    }, tU.prototype.clear = function() {
      this.__data__ = {
        hash: new dU,
        map: new(ZU || wU),
        string: new dU
      }
    }, tU.prototype.delete = function(TT) {
      return VU(this, TT).delete(TT)
    }, tU.prototype.get = function(TT) {
      return VU(this, TT).get(TT)
    }, tU.prototype.has = function(TT) {
      return VU(this, TT).has(TT)
    }, tU.prototype.set = function(TT, UT) {
      return VU(this, TT).set(TT, UT), this
    }, aU.prototype.clear = function() {
      this.__data__ = new wU
    }, aU.prototype.delete = function(TT) {
      return this.__data__.delete(TT)
    }, aU.prototype.get = function(TT) {
      return this.__data__.get(TT)
    }, aU.prototype.has = function(TT) {
      return this.__data__.has(TT)
    }, aU.prototype.set = function(TT, UT) {
      var mT = this.__data__;
      if (mT instanceof wU) {
        var WT = mT.__data__;
        if (!ZU || WT.length < 199) return WT.push([TT, UT]), this;
        mT = this.__data__ = new tU(WT)
      }
      return mT.set(TT, UT), this
    };
    var CU = lU ? NT(lU, Object) : function() {
        return []
      },
      rU = function(TT) {
        return mU.call(TT)
      };

    function KU(TT, UT) {
      return !!(UT = null == UT ? zT : UT) && ("number" == typeof TT || XT.test(TT)) && TT > -1 && TT % 1 == 0 && TT < UT
    }

    function SU(TT) {
      var UT = TT && TT.constructor;
      return TT === ("function" == typeof UT && UT.prototype || oT)
    }

    function GU(TT) {
      if (null != TT) {
        try {
          return TU.call(TT)
        } catch (UT) {}
        try {
          return TT + ""
        } catch (UT) {}
      }
      return ""
    }

    function NU(TT, UT) {
      return TT === UT || TT !== TT && UT !== UT
    }(BU && rU(new BU(new ArrayBuffer(1))) != iT || ZU && rU(new ZU) != jT || cU && rU(cU.resolve()) != pT || vU && rU(new vU) != ZT || fU && rU(new fU) != fT) && (rU = function(TT) {
      var UT = mU.call(TT),
        mT = UT == LT ? TT.constructor : void 0,
        WT = mT ? GU(mT) : void 0;
      if (WT) switch (WT) {
        case iU:
          return iT;
        case bU:
          return jT;
        case OU:
          return pT;
        case eU:
          return ZT;
        case YU:
          return fT
      }
      return UT
    });
    var EU = Array.isArray;

    function hU(TT) {
      return null != TT && function(TT) {
        return "number" == typeof TT && TT > -1 && TT % 1 == 0 && TT <= zT
      }(TT.length) && !oU(TT)
    }
    var DU = LU || function() {
      return !1
    };

    function oU(TT) {
      var UT = AU(TT) ? mU.call(TT) : "";
      return UT == HT || UT == kT
    }

    function AU(TT) {
      var UT = typeof TT;
      return !!TT && ("object" == UT || "function" == UT)
    }

    function RU(TT) {
      return hU(TT) ? yU(TT) : function(TT) {
        if (!SU(TT)) return pU(TT);
        var UT = [];
        for (var mT in Object(TT)) UU.call(TT, mT) && "constructor" != mT && UT.push(mT);
        return UT
      }(TT)
    }
    TT.exports = function(TT) {
      return QU(TT, !0, !0)
    }
  },
  38578: TT => {
    function UT(TT, UT, mT) {
      for (var WT = TT.length, zT = -1 / 0, MT = 1 / 0, gT = 0; gT < WT; gT++) {
        var nT = (mT[0][gT] - TT[gT]) / UT[gT],
          HT = (mT[1][gT] - TT[gT]) / UT[gT];
        if (nT > HT) {
          var kT = nT;
          nT = HT, HT = kT
        }
        if (HT < zT || nT > MT) return 1 / 0;
        nT > zT && (zT = nT), HT < MT && (MT = HT)
      }
      return zT > MT ? 1 / 0 : zT
    }
    TT.exports = function(TT, mT, WT, zT) {
      var MT = UT(mT, WT, zT);
      if (MT === 1 / 0) TT = null;
      else {
        TT = TT || [];
        for (var gT = 0; gT < mT.length; gT++) TT[gT] = mT[gT] + WT[gT] * MT
      }
      return TT
    }, TT.exports.distance = UT
  },
  37857: (TT, UT, mT) => {
    var WT = mT(37866);

    function zT(TT) {
      for (var UT, mT, zT = 0, MT = TT.length, gT = 0; gT < TT.length;) {
        for (UT = TT[gT], mT = 0; gT < MT && TT[gT] === UT;) ++gT, ++mT;
        zT += WT.log2(mT) / 7 | 0, zT += WT.log2(UT >>> 0) / 7 | 0, zT += 2
      }
      return zT
    }
    UT.size = zT, UT.encode = function(TT, UT) {
      UT || (UT = new Uint8Array(zT(TT)));
      for (var mT, WT, MT = 0, gT = UT.length, nT = 0; nT < TT.length;) {
        for (mT = TT[nT], WT = 0; nT < TT.length && TT[nT] === mT;) ++nT, ++WT;
        for (; MT < gT && WT >= 128;) UT[MT++] = 128 + (127 & WT), WT >>>= 7;
        if (MT >= gT) throw new Error("RLE buffer overflow");
        for (UT[MT++] = WT, mT >>>= 0; MT < gT && mT >= 128;) UT[MT++] = 128 + (127 & mT), mT >>>= 7;
        if (MT >= gT) throw new Error("RLE buffer overflow");
        UT[MT++] = mT
      }
      return UT
    }, UT.decode = function(TT, UT) {
      for (var mT, WT, zT, MT, gT = UT.length, nT = TT.length, HT = 0, kT = 0; kT < nT;) {
        for (mT = 0, WT = 0; kT < nT && TT[kT] >= 128;) mT += (127 & TT[kT++]) << WT, WT += 7;
        if (mT += TT[kT++] << WT, kT >= nT) throw new Error("RLE buffer underrun");
        if (HT + mT > gT) throw new Error("Chunk buffer overflow");
        for (zT = 0, WT = 0; kT < nT && TT[kT] >= 128;) zT += (127 & TT[kT++]) << WT, WT += 7;
        if (kT >= nT) throw new Error("RLE buffer underrun");
        for (zT += TT[kT++] << WT, MT = 0; MT < mT; ++MT) UT[HT++] = zT
      }
      return UT
    }
  },
  37866: (TT, UT) => {
    function mT(TT) {
      var UT = 32;
      return (TT &= -TT) && UT--, 65535 & TT && (UT -= 16), 16711935 & TT && (UT -= 8), 252645135 & TT && (UT -= 4), 858993459 & TT && (UT -= 2), 1431655765 & TT && (UT -= 1), UT
    }
    UT.INT_BITS = 32, UT.INT_MAX = 2147483647, UT.INT_MIN = -1 << 31, UT.sign = function(TT) {
      return (TT > 0) - (TT < 0)
    }, UT.abs = function(TT) {
      var UT = TT >> 31;
      return (TT ^ UT) - UT
    }, UT.min = function(TT, UT) {
      return UT ^ (TT ^ UT) & -(TT < UT)
    }, UT.max = function(TT, UT) {
      return TT ^ (TT ^ UT) & -(TT < UT)
    }, UT.isPow2 = function(TT) {
      return !(TT & TT - 1) && !!TT
    }, UT.log2 = function(TT) {
      var UT, mT;
      return UT = (TT > 65535) << 4, UT |= mT = ((TT >>>= UT) > 255) << 3, UT |= mT = ((TT >>>= mT) > 15) << 2, (UT |= mT = ((TT >>>= mT) > 3) << 1) | (TT >>>= mT) >> 1
    }, UT.log10 = function(TT) {
      return TT >= 1e9 ? 9 : TT >= 1e8 ? 8 : TT >= 1e7 ? 7 : TT >= 1e6 ? 6 : TT >= 1e5 ? 5 : TT >= 1e4 ? 4 : TT >= 1e3 ? 3 : TT >= 100 ? 2 : TT >= 10 ? 1 : 0
    }, UT.popCount = function(TT) {
      return 16843009 * ((TT = (858993459 & (TT -= TT >>> 1 & 1431655765)) + (TT >>> 2 & 858993459)) + (TT >>> 4) & 252645135) >>> 24
    }, UT.countTrailingZeros = mT, UT.nextPow2 = function(TT) {
      return TT += 0 === TT, --TT, TT |= TT >>> 1, TT |= TT >>> 2, TT |= TT >>> 4, TT |= TT >>> 8, (TT |= TT >>> 16) + 1
    }, UT.prevPow2 = function(TT) {
      return TT |= TT >>> 1, TT |= TT >>> 2, TT |= TT >>> 4, TT |= TT >>> 8, (TT |= TT >>> 16) - (TT >>> 1)
    }, UT.parity = function(TT) {
      return TT ^= TT >>> 16, TT ^= TT >>> 8, TT ^= TT >>> 4, 27030 >>> (TT &= 15) & 1
    };
    var WT = new Array(256);
    ! function(TT) {
      for (var UT = 0; UT < 256; ++UT) {
        var mT = UT,
          WT = UT,
          zT = 7;
        for (mT >>>= 1; mT; mT >>>= 1) WT <<= 1, WT |= 1 & mT, --zT;
        TT[UT] = WT << zT & 255
      }
    }(WT), UT.reverse = function(TT) {
      return WT[255 & TT] << 24 | WT[TT >>> 8 & 255] << 16 | WT[TT >>> 16 & 255] << 8 | WT[TT >>> 24 & 255]
    }, UT.interleave2 = function(TT, UT) {
      return (TT = 1431655765 & ((TT = 858993459 & ((TT = 252645135 & ((TT = 16711935 & ((TT &= 65535) | TT << 8)) | TT << 4)) | TT << 2)) | TT << 1)) | (UT = 1431655765 & ((UT = 858993459 & ((UT = 252645135 & ((UT = 16711935 & ((UT &= 65535) | UT << 8)) | UT << 4)) | UT << 2)) | UT << 1)) << 1
    }, UT.deinterleave2 = function(TT, UT) {
      return (TT = 65535 & ((TT = 16711935 & ((TT = 252645135 & ((TT = 858993459 & ((TT = TT >>> UT & 1431655765) | TT >>> 1)) | TT >>> 2)) | TT >>> 4)) | TT >>> 16)) << 16 >> 16
    }, UT.interleave3 = function(TT, UT, mT) {
      return TT = 1227133513 & ((TT = 3272356035 & ((TT = 251719695 & ((TT = 4278190335 & ((TT &= 1023) | TT << 16)) | TT << 8)) | TT << 4)) | TT << 2), (TT |= (UT = 1227133513 & ((UT = 3272356035 & ((UT = 251719695 & ((UT = 4278190335 & ((UT &= 1023) | UT << 16)) | UT << 8)) | UT << 4)) | UT << 2)) << 1) | (mT = 1227133513 & ((mT = 3272356035 & ((mT = 251719695 & ((mT = 4278190335 & ((mT &= 1023) | mT << 16)) | mT << 8)) | mT << 4)) | mT << 2)) << 2
    }, UT.deinterleave3 = function(TT, UT) {
      return (TT = 1023 & ((TT = 4278190335 & ((TT = 251719695 & ((TT = 3272356035 & ((TT = TT >>> UT & 1227133513) | TT >>> 2)) | TT >>> 4)) | TT >>> 8)) | TT >>> 16)) << 22 >> 22
    }, UT.nextCombination = function(TT) {
      var UT = TT | TT - 1;
      return UT + 1 | (~UT & -~UT) - 1 >>> mT(TT) + 1
    }
  },
  37364: (TT, UT, mT) => {
    mT.d(UT, {
      Color3: () => WT.d,
      e: () => WT.g
    });
    var WT = mT(37367);
    (0, WT.k)()
  },
  37885: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => zT
    });
    var WT = mT(37889);
    class zT {
      static GetPlanes(TT) {
        const UT = [];
        for (let mT = 0; mT < 6; mT++) UT.push(new WT.e(0, 0, 0, 0));
        return zT.GetPlanesToRef(TT, UT), UT
      }
      static GetNearPlaneToRef(TT, UT) {
        const mT = TT.m;
        UT.normal.x = mT[3] + mT[2], UT.normal.y = mT[7] + mT[6], UT.normal.z = mT[11] + mT[10], UT.d = mT[15] + mT[14], UT.normalize()
      }
      static GetFarPlaneToRef(TT, UT) {
        const mT = TT.m;
        UT.normal.x = mT[3] - mT[2], UT.normal.y = mT[7] - mT[6], UT.normal.z = mT[11] - mT[10], UT.d = mT[15] - mT[14], UT.normalize()
      }
      static GetLeftPlaneToRef(TT, UT) {
        const mT = TT.m;
        UT.normal.x = mT[3] + mT[0], UT.normal.y = mT[7] + mT[4], UT.normal.z = mT[11] + mT[8], UT.d = mT[15] + mT[12], UT.normalize()
      }
      static GetRightPlaneToRef(TT, UT) {
        const mT = TT.m;
        UT.normal.x = mT[3] - mT[0], UT.normal.y = mT[7] - mT[4], UT.normal.z = mT[11] - mT[8], UT.d = mT[15] - mT[12], UT.normalize()
      }
      static GetTopPlaneToRef(TT, UT) {
        const mT = TT.m;
        UT.normal.x = mT[3] - mT[1], UT.normal.y = mT[7] - mT[5], UT.normal.z = mT[11] - mT[9], UT.d = mT[15] - mT[13], UT.normalize()
      }
      static GetBottomPlaneToRef(TT, UT) {
        const mT = TT.m;
        UT.normal.x = mT[3] + mT[1], UT.normal.y = mT[7] + mT[5], UT.normal.z = mT[11] + mT[9], UT.d = mT[15] + mT[13], UT.normalize()
      }
      static GetPlanesToRef(TT, UT) {
        zT.GetNearPlaneToRef(TT, UT[0]), zT.GetFarPlaneToRef(TT, UT[1]), zT.GetLeftPlaneToRef(TT, UT[2]), zT.GetRightPlaneToRef(TT, UT[3]), zT.GetTopPlaneToRef(TT, UT[4]), zT.GetBottomPlaneToRef(TT, UT[5])
      }
      static IsPointInFrustum(TT, UT) {
        for (let mT = 0; mT < 6; mT++)
          if (UT[mT].dotCoordinate(TT) < 0) return !1;
        return !0
      }
    }
  },
  37889: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => zT
    });
    var WT = mT(37188);
    class zT {
      constructor(TT, UT, mT, zT) {
        this.normal = new WT.p(TT, UT, mT), this.d = zT
      }
      cWT() {
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
        let UT = 0;
        return 0 !== TT && (UT = 1 / TT), this.normal.x *= UT, this.normal.y *= UT, this.normal.z *= UT, this.d *= UT, this
      }
      transform(TT) {
        const UT = zT._TmpMatrix;
        TT.invertToRef(UT);
        const mT = UT.m,
          WT = this.normal.x,
          MT = this.normal.y,
          gT = this.normal.z,
          nT = this.d,
          HT = WT * mT[0] + MT * mT[1] + gT * mT[2] + nT * mT[3],
          kT = WT * mT[4] + MT * mT[5] + gT * mT[6] + nT * mT[7],
          jT = WT * mT[8] + MT * mT[9] + gT * mT[10] + nT * mT[11],
          lT = WT * mT[12] + MT * mT[13] + gT * mT[14] + nT * mT[15];
        return new zT(HT, kT, jT, lT)
      }
      dotCoordinate(TT) {
        return this.normal.x * TT.x + this.normal.y * TT.y + this.normal.z * TT.z + this.d
      }
      copyFromPoints(TT, UT, mT) {
        const WT = UT.x - TT.x,
          zT = UT.y - TT.y,
          MT = UT.z - TT.z,
          gT = mT.x - TT.x,
          nT = mT.y - TT.y,
          HT = mT.z - TT.z,
          kT = zT * HT - MT * nT,
          jT = MT * gT - WT * HT,
          lT = WT * nT - zT * gT,
          LT = Math.sqrt(kT * kT + jT * jT + lT * lT);
        let pT;
        return pT = 0 !== LT ? 1 / LT : 0, this.normal.x = kT * pT, this.normal.y = jT * pT, this.normal.z = lT * pT, this.d = -(this.normal.x * TT.x + this.normal.y * TT.y + this.normal.z * TT.z), this
      }
      isFrontFacingTo(TT, UT) {
        return WT.p.Dot(this.normal, TT) <= UT
      }
      signedDistanceTo(TT) {
        return WT.p.Dot(TT, this.normal) + this.d
      }
      static FromArray(TT) {
        return new zT(TT[0], TT[1], TT[2], TT[3])
      }
      static FromPoints(TT, UT, mT) {
        const WT = new zT(0, 0, 0, 0);
        return WT.copyFromPoints(TT, UT, mT), WT
      }
      static FromPositionAndNormal(TT, UT) {
        const mT = new zT(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(TT, UT, mT)
      }
      static FromPositionAndNormalToRef(TT, UT, mT) {
        return mT.normal.Gw(UT), mT.normal.normalize(), mT.d = -TT.dot(mT.normal), mT
      }
      static SignedDistanceToPlaneFromPositionAndNormal(TT, UT, mT) {
        const zT = -(UT.x * TT.x + UT.y * TT.y + UT.z * TT.z);
        return WT.p.Dot(mT, UT) + zT
      }
    }
    zT._TmpMatrix = WT.e.Identity()
  },
  37185: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      Matrix: () => WT.e,
      Quaternion: () => WT.f,
      RegisterMathVector: () => WT.j,
      TmpVectors: () => WT.l,
      Vector2: () => WT.o,
      JB: () => WT.p,
      Vector4: () => WT.t
    });
    var WT = mT(37188);
    (0, WT.j)()
  },
  38229: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => WT
    });
    class WT {
      constructor(TT, UT, mT, WT) {
        this.x = TT, this.y = UT, this.width = mT, this.height = WT
      }
      toGlobal(TT, UT) {
        return new WT(this.x * TT, this.y * UT, this.width * TT, this.height * UT)
      }
      toGlobalToRef(TT, UT, mT) {
        return mT.x = this.x * TT, mT.y = this.y * UT, mT.width = this.width * TT, mT.height = this.height * UT, this
      }
      clone() {
        return new WT(this.x, this.y, this.width, this.height)
      }
    }
  },
  38045: (TT, UT, mT) => {
    function WT() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (TT => {
        const UT = 16 * Math.random() | 0;
        return ("x" === TT ? UT : 3 & UT | 8).toString(16)
      }))
    }
    mT.d(UT, {
      c: () => WT
    })
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);