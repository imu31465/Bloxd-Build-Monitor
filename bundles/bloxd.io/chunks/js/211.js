/*! For license information please see l9xvfg.211.34007cd2.chunk.js.LICENSE.txt */
export const id = 211;
export const ids = [211, 217];
export const modules = {
  37241: BB => {
    BB.exports = function(BB) {
      return null != BB && null != BB.constructor && "function" === typeof BB.constructor.isBuffer && BB.constructor.isBuffer(BB)
    }
  },
  37219: (BB, TB, dB) => {
    var VB = dB(37225),
      yB = dB(37234),
      pB = dB(37241);
    dB.g.__TYPEDARRAY_POOL || (dB.g.__TYPEDARRAY_POOL = {
      UINT8: yB([32, 0]),
      UINT16: yB([32, 0]),
      UINT32: yB([32, 0]),
      INT8: yB([32, 0]),
      INT16: yB([32, 0]),
      INT32: yB([32, 0]),
      FLOAT: yB([32, 0]),
      DOUBLE: yB([32, 0]),
      DATA: yB([32, 0]),
      UINT8C: yB([32, 0]),
      BUFFER: yB([32, 0])
    });
    var lB = "undefined" !== typeof Uint8ClampedArray,
      JB = dB.g.__TYPEDARRAY_POOL;
    JB.UINT8C || (JB.UINT8C = yB([32, 0])), JB.BUFFER || (JB.BUFFER = yB([32, 0]));
    var YB = JB.DATA,
      gB = JB.BUFFER;

    function oB(BB) {
      if (BB) {
        var TB = BB.length || BB.byteLength,
          dB = VB.log2(TB);
        YB[dB].push(BB)
      }
    }

    function kB(BB) {
      BB = VB.nextPow2(BB);
      var TB = VB.log2(BB),
        dB = YB[TB];
      return dB.length > 0 ? dB.pop() : new ArrayBuffer(BB)
    }

    function LB(BB) {
      return new Uint8Array(kB(BB), 0, BB)
    }

    function OB(BB) {
      return new Uint16Array(kB(2 * BB), 0, BB)
    }

    function DB(BB) {
      return new Uint32Array(kB(4 * BB), 0, BB)
    }

    function uB(BB) {
      return new Int8Array(kB(BB), 0, BB)
    }

    function HB(BB) {
      return new Int16Array(kB(2 * BB), 0, BB)
    }

    function EB(BB) {
      return new Int32Array(kB(4 * BB), 0, BB)
    }

    function vB(BB) {
      return new Float32Array(kB(4 * BB), 0, BB)
    }

    function mB(BB) {
      return new Float64Array(kB(8 * BB), 0, BB)
    }

    function iB(BB) {
      return lB ? new Uint8ClampedArray(kB(BB), 0, BB) : LB(BB)
    }

    function NB(BB) {
      return new DataView(kB(BB), 0, BB)
    }
    TB.free = function(BB) {
      if (pB(BB)) gB[VB.log2(BB.length)].push(BB);
      else {
        if ("[object ArrayBuffer]" !== Object.prototype.toString.call(BB) && (BB = BB.buffer), !BB) return;
        var TB = BB.length || BB.byteLength,
          dB = 0 | VB.log2(TB);
        YB[dB].push(BB)
      }
    }, TB.freeUint8 = TB.freeUint16 = TB.freeUint32 = TB.freeInt8 = TB.freeInt16 = TB.freeInt32 = TB.freeFloat32 = TB.freeFloat = TB.freeFloat64 = TB.freeDouble = TB.freeUint8Clamped = TB.freeDataView = function(BB) {
      oB(BB.buffer)
    }, TB.freeArrayBuffer = oB, TB.freeBuffer = function(BB) {
      gB[VB.log2(BB.length)].push(BB)
    }, TB.malloc = function(BB, TB) {
      if (void 0 === TB || "arraybuffer" === TB) return kB(BB);
      switch (TB) {
        case "uint8":
          return LB(BB);
        case "uint16":
          return OB(BB);
        case "uint32":
          return DB(BB);
        case "int8":
          return uB(BB);
        case "int16":
          return HB(BB);
        case "int32":
          return EB(BB);
        case "float":
        case "float32":
          return vB(BB);
        case "double":
        case "float64":
          return mB(BB);
        case "uint8_clamped":
          return iB(BB);
        case "buffer":
          throw "Buffer not supported";
        case "data":
        case "dataview":
          return NB(BB);
        default:
          return null
      }
      return null
    }, TB.mallocArrayBuffer = kB, TB.mallocUint8 = LB, TB.mallocUint16 = OB, TB.mallocUint32 = DB, TB.mallocInt8 = uB, TB.mallocInt16 = HB, TB.mallocInt32 = EB, TB.mallocFloat32 = TB.mallocFloat = vB, TB.mallocFloat64 = TB.mallocDouble = mB, TB.mallocUint8Clamped = iB, TB.mallocDataView = NB, TB.clearCache = function() {
      for (var BB = 0; BB < 32; ++BB) JB.UINT8[BB].length = 0, JB.UINT16[BB].length = 0, JB.UINT32[BB].length = 0, JB.INT8[BB].length = 0, JB.INT16[BB].length = 0, JB.INT32[BB].length = 0, JB.FLOAT[BB].length = 0, JB.DOUBLE[BB].length = 0, JB.UINT8C[BB].length = 0, YB[BB].length = 0, gB[BB].length = 0
    }
  },
  37225: (BB, TB) => {
    function dB(BB) {
      var TB = 32;
      return (BB &= -BB) && TB--, 65535 & BB && (TB -= 16), 16711935 & BB && (TB -= 8), 252645135 & BB && (TB -= 4), 858993459 & BB && (TB -= 2), 1431655765 & BB && (TB -= 1), TB
    }
    TB.INT_BITS = 32, TB.INT_MAX = 2147483647, TB.INT_MIN = -1 << 31, TB.sign = function(BB) {
      return (BB > 0) - (BB < 0)
    }, TB.abs = function(BB) {
      var TB = BB >> 31;
      return (BB ^ TB) - TB
    }, TB.min = function(BB, TB) {
      return TB ^ (BB ^ TB) & -(BB < TB)
    }, TB.max = function(BB, TB) {
      return BB ^ (BB ^ TB) & -(BB < TB)
    }, TB.isPow2 = function(BB) {
      return !(BB & BB - 1) && !!BB
    }, TB.log2 = function(BB) {
      var TB, dB;
      return TB = (BB > 65535) << 4, TB |= dB = ((BB >>>= TB) > 255) << 3, TB |= dB = ((BB >>>= dB) > 15) << 2, (TB |= dB = ((BB >>>= dB) > 3) << 1) | (BB >>>= dB) >> 1
    }, TB.log10 = function(BB) {
      return BB >= 1e9 ? 9 : BB >= 1e8 ? 8 : BB >= 1e7 ? 7 : BB >= 1e6 ? 6 : BB >= 1e5 ? 5 : BB >= 1e4 ? 4 : BB >= 1e3 ? 3 : BB >= 100 ? 2 : BB >= 10 ? 1 : 0
    }, TB.popCount = function(BB) {
      return 16843009 * ((BB = (858993459 & (BB -= BB >>> 1 & 1431655765)) + (BB >>> 2 & 858993459)) + (BB >>> 4) & 252645135) >>> 24
    }, TB.countTrailingZeros = dB, TB.nextPow2 = function(BB) {
      return BB += 0 === BB, --BB, BB |= BB >>> 1, BB |= BB >>> 2, BB |= BB >>> 4, BB |= BB >>> 8, (BB |= BB >>> 16) + 1
    }, TB.prevPow2 = function(BB) {
      return BB |= BB >>> 1, BB |= BB >>> 2, BB |= BB >>> 4, BB |= BB >>> 8, (BB |= BB >>> 16) - (BB >>> 1)
    }, TB.parity = function(BB) {
      return BB ^= BB >>> 16, BB ^= BB >>> 8, BB ^= BB >>> 4, 27030 >>> (BB &= 15) & 1
    };
    var VB = new Array(256);
    ! function(BB) {
      for (var TB = 0; TB < 256; ++TB) {
        var dB = TB,
          VB = TB,
          yB = 7;
        for (dB >>>= 1; dB; dB >>>= 1) VB <<= 1, VB |= 1 & dB, --yB;
        BB[TB] = VB << yB & 255
      }
    }(VB), TB.reverse = function(BB) {
      return VB[255 & BB] << 24 | VB[BB >>> 8 & 255] << 16 | VB[BB >>> 16 & 255] << 8 | VB[BB >>> 24 & 255]
    }, TB.interleave2 = function(BB, TB) {
      return (BB = 1431655765 & ((BB = 858993459 & ((BB = 252645135 & ((BB = 16711935 & ((BB &= 65535) | BB << 8)) | BB << 4)) | BB << 2)) | BB << 1)) | (TB = 1431655765 & ((TB = 858993459 & ((TB = 252645135 & ((TB = 16711935 & ((TB &= 65535) | TB << 8)) | TB << 4)) | TB << 2)) | TB << 1)) << 1
    }, TB.deinterleave2 = function(BB, TB) {
      return (BB = 65535 & ((BB = 16711935 & ((BB = 252645135 & ((BB = 858993459 & ((BB = BB >>> TB & 1431655765) | BB >>> 1)) | BB >>> 2)) | BB >>> 4)) | BB >>> 16)) << 16 >> 16
    }, TB.interleave3 = function(BB, TB, dB) {
      return BB = 1227133513 & ((BB = 3272356035 & ((BB = 251719695 & ((BB = 4278190335 & ((BB &= 1023) | BB << 16)) | BB << 8)) | BB << 4)) | BB << 2), (BB |= (TB = 1227133513 & ((TB = 3272356035 & ((TB = 251719695 & ((TB = 4278190335 & ((TB &= 1023) | TB << 16)) | TB << 8)) | TB << 4)) | TB << 2)) << 1) | (dB = 1227133513 & ((dB = 3272356035 & ((dB = 251719695 & ((dB = 4278190335 & ((dB &= 1023) | dB << 16)) | dB << 8)) | dB << 4)) | dB << 2)) << 2
    }, TB.deinterleave3 = function(BB, TB) {
      return (BB = 1023 & ((BB = 4278190335 & ((BB = 251719695 & ((BB = 3272356035 & ((BB = BB >>> TB & 1227133513) | BB >>> 2)) | BB >>> 4)) | BB >>> 8)) | BB >>> 16)) << 22 >> 22
    }, TB.nextCombination = function(BB) {
      var TB = BB | BB - 1;
      return TB + 1 | (~TB & -~TB) - 1 >>> dB(BB) + 1
    }
  },
  37213: (BB, TB, dB) => {
    BB.exports = function(BB, TB, dB) {
      switch (arguments.length) {
        case 1:
          return VB = [], gB(yB = BB, yB, oB, !0), VB;
        case 2:
          return "function" === typeof TB ? gB(BB, BB, TB, !0) : function(BB, TB) {
            return VB = [], gB(BB, TB, oB, !1), VB
          }(BB, TB);
        case 3:
          return gB(BB, TB, dB, !1);
        default:
          throw new Error("box-intersect: Invalid arguments")
      }
      var yB
    };
    var VB, yB = dB(37219),
      pB = dB(37246),
      lB = dB(37264);

    function JB(BB, TB) {
      for (var dB = 0; dB < BB; ++dB)
        if (!(TB[dB] <= TB[dB + BB])) return !0;
      return !1
    }

    function YB(BB, TB, dB, VB) {
      for (var yB = 0, pB = 0, lB = 0, YB = BB.length; lB < YB; ++lB) {
        var gB = BB[lB];
        if (!JB(TB, gB)) {
          for (var oB = 0; oB < 2 * TB; ++oB) dB[yB++] = gB[oB];
          VB[pB++] = lB
        }
      }
      return pB
    }

    function gB(BB, TB, dB, VB) {
      var JB = BB.length,
        gB = TB.length;
      if (!(JB <= 0 || gB <= 0)) {
        var oB = BB[0].length >>> 1;
        if (!(oB <= 0)) {
          var kB, LB = yB.mallocDouble(2 * oB * JB),
            OB = yB.mallocInt32(JB);
          if ((JB = YB(BB, oB, LB, OB)) > 0) {
            if (1 === oB && VB) pB.init(JB), kB = pB.sweepComplete(oB, dB, 0, JB, LB, OB, 0, JB, LB, OB);
            else {
              var DB = yB.mallocDouble(2 * oB * gB),
                uB = yB.mallocInt32(gB);
              (gB = YB(TB, oB, DB, uB)) > 0 && (pB.init(JB + gB), kB = 1 === oB ? pB.sweepBipartite(oB, dB, 0, JB, LB, OB, 0, gB, DB, uB) : lB(oB, dB, VB, JB, LB, OB, gB, DB, uB), yB.free(DB), yB.free(uB))
            }
            yB.free(LB), yB.free(OB)
          }
          return kB
        }
      }
    }

    function oB(BB, TB) {
      VB.push([BB, TB])
    }
  },
  37272: (BB, TB) => {
    var dB = "d",
      VB = "ax",
      yB = "fp",
      pB = "es",
      lB = "rs",
      JB = "re",
      YB = "rb",
      gB = "bs",
      oB = "be",
      kB = "bb",
      LB = [dB, VB, "vv", lB, JB, YB, "ri", gB, oB, kB, "bi"];

    function OB(BB) {
      var TB = "bruteForce" + (BB ? "Full" : "Partial"),
        VB = [],
        lB = LB.slice();
      BB || lB.splice(3, 0, yB);
      var JB = ["function " + TB + "(" + lB.join() + "){"];

      function YB(TB, yB) {
        var lB = function(BB, TB, VB) {
          var yB = "bruteForce" + (BB ? "Red" : "Blue") + (TB ? "Flip" : "") + (VB ? "Full" : ""),
            lB = ["function ", yB, "(", LB.join(), "){", "var ", pB, "=2*", dB, ";"],
            JB = "for(var i=rs,rp=es*rs;i<re;++i,rp+=es){var x0=rb[ax+rp],x1=rb[ax+rp+d],xi=ri[i];",
            YB = "for(var j=bs,bp=es*bs;j<be;++j,bp+=es){var y0=bb[ax+bp]," + (VB ? "y1=bb[ax+bp+d]," : "") + "yi=bi[j];";
          return BB ? lB.push(JB, "Q", ":", YB) : lB.push(YB, "Q", ":", JB), VB ? lB.push("if(y1<x0||x1<y0)continue;") : TB ? lB.push("if(y0<=x0||x1<y0)continue;") : lB.push("if(y0<x0||x1<y0)continue;"), lB.push("for(var k=ax+1;k<d;++k){var r0=rb[k+rp],r1=rb[k+d+rp],b0=bb[k+bp],b1=bb[k+d+bp];if(r1<b0||b1<r0)continue Q;}var rv=vv("), TB ? lB.push("yi,xi") : lB.push("xi,yi"), lB.push(");if(rv!==void 0)return rv;}}}"), {
            name: yB,
            code: lB.join("")
          }
        }(TB, yB, BB);
        VB.push(lB.code), JB.push("return " + lB.name + "(" + LB.join() + ");")
      }
      JB.push("if(re-rs>be-bs){"), BB ? (YB(!0, !1), JB.push("}else{"), YB(!1, !1)) : (JB.push("if(fp){"), YB(!0, !0), JB.push("}else{"), YB(!0, !1), JB.push("}}else{if(fp){"), YB(!1, !0), JB.push("}else{"), YB(!1, !1), JB.push("}")), JB.push("}}return " + TB);
      var gB = VB.join("") + JB.join("");
      return new Function(gB)()
    }
    TB.partial = OB(!1), TB.full = OB(!0)
  },
  37264: (BB, TB, dB) => {
    BB.exports = function(BB, TB, dB, pB, oB, wB, UB, FB, KB) {
      ! function(BB, TB) {
        var dB = 8 * yB.log2(TB + 1) * (BB + 1) | 0,
          pB = yB.nextPow2(iB * dB);
        tB.length < pB && (VB.free(tB), tB = VB.mallocInt32(pB));
        var lB = yB.nextPow2(NB * dB);
        fB.length < lB && (VB.free(fB), fB = VB.mallocDouble(lB))
      }(BB, pB + UB);
      var rB, IB = 0,
        cB = 2 * BB;
      sB(IB++, 0, 0, pB, 0, UB, dB ? 16 : 0, -1 / 0, 1 / 0), dB || sB(IB++, 0, 0, UB, 0, pB, 1, -1 / 0, 1 / 0);
      for (; IB > 0;) {
        var SB = (IB -= 1) * iB,
          PB = tB[SB],
          QB = tB[SB + 1],
          RB = tB[SB + 2],
          aB = tB[SB + 3],
          ZB = tB[SB + 4],
          XB = tB[SB + 5],
          WB = IB * NB,
          hB = fB[WB],
          CB = fB[WB + 1],
          GB = 1 & XB,
          qB = !!(16 & XB),
          xB = oB,
          jB = wB,
          AB = FB,
          bB = KB;
        if (GB && (xB = FB, jB = KB, AB = oB, bB = wB), !(2 & XB && QB >= (RB = HB(BB, PB, QB, RB, xB, jB, CB))) && !(4 & XB && (QB = EB(BB, PB, QB, RB, xB, jB, hB)) >= RB)) {
          var nB = RB - QB,
            eB = ZB - aB;
          if (qB) {
            if (BB * nB * (nB + eB) < OB) {
              if (void 0 !== (rB = YB.scanComplete(BB, PB, TB, QB, RB, xB, jB, aB, ZB, AB, bB))) return rB;
              continue
            }
          } else {
            if (BB * Math.min(nB, eB) < kB) {
              if (void 0 !== (rB = lB(BB, PB, TB, GB, QB, RB, xB, jB, aB, ZB, AB, bB))) return rB;
              continue
            }
            if (BB * nB * eB < LB) {
              if (void 0 !== (rB = YB.scanBipartite(BB, PB, TB, GB, QB, RB, xB, jB, aB, ZB, AB, bB))) return rB;
              continue
            }
          }
          var BT = DB(BB, PB, QB, RB, xB, jB, hB, CB);
          if (QB < BT)
            if (BB * (BT - QB) < kB) {
              if (void 0 !== (rB = JB(BB, PB + 1, TB, QB, BT, xB, jB, aB, ZB, AB, bB))) return rB
            } else if (PB === BB - 2) {
            if (void 0 !== (rB = GB ? YB.sweepBipartite(BB, TB, aB, ZB, AB, bB, QB, BT, xB, jB) : YB.sweepBipartite(BB, TB, QB, BT, xB, jB, aB, ZB, AB, bB))) return rB
          } else sB(IB++, PB + 1, QB, BT, aB, ZB, GB, -1 / 0, 1 / 0), sB(IB++, PB + 1, aB, ZB, QB, BT, 1 ^ GB, -1 / 0, 1 / 0);
          if (BT < RB) {
            var TT = gB(BB, PB, aB, ZB, AB, bB),
              dT = AB[cB * TT + PB],
              VT = uB(BB, PB, TT, ZB, AB, bB, dT);
            if (VT < ZB && sB(IB++, PB, BT, RB, VT, ZB, (4 | GB) + (qB ? 16 : 0), dT, CB), aB < TT && sB(IB++, PB, BT, RB, aB, TT, (2 | GB) + (qB ? 16 : 0), hB, dT), TT + 1 === VT) {
              if (void 0 !== (rB = qB ? zB(BB, PB, TB, BT, RB, xB, jB, TT, AB, bB[TT]) : MB(BB, PB, TB, GB, BT, RB, xB, jB, TT, AB, bB[TT]))) return rB
            } else if (TT < VT) {
              var yT;
              if (qB) {
                if (BT < (yT = vB(BB, PB, BT, RB, xB, jB, dT))) {
                  var pT = uB(BB, PB, BT, yT, xB, jB, dT);
                  if (PB === BB - 2) {
                    if (BT < pT && void 0 !== (rB = YB.sweepComplete(BB, TB, BT, pT, xB, jB, TT, VT, AB, bB))) return rB;
                    if (pT < yT && void 0 !== (rB = YB.sweepBipartite(BB, TB, pT, yT, xB, jB, TT, VT, AB, bB))) return rB
                  } else BT < pT && sB(IB++, PB + 1, BT, pT, TT, VT, 16, -1 / 0, 1 / 0), pT < yT && (sB(IB++, PB + 1, pT, yT, TT, VT, 0, -1 / 0, 1 / 0), sB(IB++, PB + 1, TT, VT, pT, yT, 1, -1 / 0, 1 / 0))
                }
              } else BT < (yT = GB ? mB(BB, PB, BT, RB, xB, jB, dT) : vB(BB, PB, BT, RB, xB, jB, dT)) && (PB === BB - 2 ? rB = GB ? YB.sweepBipartite(BB, TB, TT, VT, AB, bB, BT, yT, xB, jB) : YB.sweepBipartite(BB, TB, BT, yT, xB, jB, TT, VT, AB, bB) : (sB(IB++, PB + 1, BT, yT, TT, VT, GB, -1 / 0, 1 / 0), sB(IB++, PB + 1, TT, VT, BT, yT, 1 ^ GB, -1 / 0, 1 / 0)))
            }
          }
        }
      }
    };
    var VB = dB(37219),
      yB = dB(37225),
      pB = dB(37272),
      lB = pB.partial,
      JB = pB.full,
      YB = dB(37246),
      gB = dB(37275),
      oB = dB(37281),
      kB = 128,
      LB = 1 << 22,
      OB = 1 << 22,
      DB = oB("!(lo>=p0)&&!(p1>=hi)", ["p0", "p1"]),
      uB = oB("lo===p0", ["p0"]),
      HB = oB("lo<p0", ["p0"]),
      EB = oB("hi<=p0", ["p0"]),
      vB = oB("lo<=p0&&p0<=hi", ["p0"]),
      mB = oB("lo<p0&&p0<=hi", ["p0"]),
      iB = 6,
      NB = 2,
      tB = VB.mallocInt32(1024),
      fB = VB.mallocDouble(1024);

    function sB(BB, TB, dB, VB, yB, pB, lB, JB, YB) {
      var gB = iB * BB;
      tB[gB] = TB, tB[gB + 1] = dB, tB[gB + 2] = VB, tB[gB + 3] = yB, tB[gB + 4] = pB, tB[gB + 5] = lB;
      var oB = NB * BB;
      fB[oB] = JB, fB[oB + 1] = YB
    }

    function MB(BB, TB, dB, VB, yB, pB, lB, JB, YB, gB, oB) {
      var kB = 2 * BB,
        LB = YB * kB,
        OB = gB[LB + TB];
      BB: for (var DB = yB, uB = yB * kB; DB < pB; ++DB, uB += kB) {
        var HB = lB[uB + TB],
          EB = lB[uB + TB + BB];
        if (!(OB < HB || EB < OB) && (!VB || OB !== HB)) {
          for (var vB, mB = JB[DB], iB = TB + 1; iB < BB; ++iB) {
            HB = lB[uB + iB], EB = lB[uB + iB + BB];
            var NB = gB[LB + iB],
              tB = gB[LB + iB + BB];
            if (EB < NB || tB < HB) continue BB
          }
          if (void 0 !== (vB = VB ? dB(oB, mB) : dB(mB, oB))) return vB
        }
      }
    }

    function zB(BB, TB, dB, VB, yB, pB, lB, JB, YB, gB) {
      var oB = 2 * BB,
        kB = JB * oB,
        LB = YB[kB + TB];
      BB: for (var OB = VB, DB = VB * oB; OB < yB; ++OB, DB += oB) {
        var uB = lB[OB];
        if (uB !== gB) {
          var HB = pB[DB + TB],
            EB = pB[DB + TB + BB];
          if (!(LB < HB || EB < LB)) {
            for (var vB = TB + 1; vB < BB; ++vB) {
              HB = pB[DB + vB], EB = pB[DB + vB + BB];
              var mB = YB[kB + vB],
                iB = YB[kB + vB + BB];
              if (EB < mB || iB < HB) continue BB
            }
            var NB = dB(uB, gB);
            if (void 0 !== NB) return NB
          }
        }
      }
    }
  },
  37275: (BB, TB, dB) => {
    BB.exports = function(BB, TB, dB, lB, JB, YB) {
      if (lB <= dB + 1) return dB;
      var gB = dB,
        oB = lB,
        kB = lB + dB >>> 1,
        LB = 2 * BB,
        OB = kB,
        DB = JB[LB * kB + TB];
      for (; gB < oB;) {
        if (oB - gB < yB) {
          pB(BB, TB, gB, oB, JB, YB), DB = JB[LB * kB + TB];
          break
        }
        var uB = oB - gB,
          HB = Math.random() * uB + gB | 0,
          EB = JB[LB * HB + TB],
          vB = Math.random() * uB + gB | 0,
          mB = JB[LB * vB + TB],
          iB = Math.random() * uB + gB | 0,
          NB = JB[LB * iB + TB];
        EB <= mB ? NB >= mB ? (OB = vB, DB = mB) : EB >= NB ? (OB = HB, DB = EB) : (OB = iB, DB = NB) : mB >= NB ? (OB = vB, DB = mB) : NB >= EB ? (OB = HB, DB = EB) : (OB = iB, DB = NB);
        for (var tB = LB * (oB - 1), fB = LB * OB, sB = 0; sB < LB; ++sB, ++tB, ++fB) {
          var MB = JB[tB];
          JB[tB] = JB[fB], JB[fB] = MB
        }
        var zB = YB[oB - 1];
        YB[oB - 1] = YB[OB], YB[OB] = zB;
        for (tB = LB * (oB - 1), fB = LB * (OB = VB(BB, TB, gB, oB - 1, JB, YB, DB)), sB = 0; sB < LB; ++sB, ++tB, ++fB) {
          MB = JB[tB];
          JB[tB] = JB[fB], JB[fB] = MB
        }
        zB = YB[oB - 1];
        if (YB[oB - 1] = YB[OB], YB[OB] = zB, kB < OB) {
          for (oB = OB - 1; gB < oB && JB[LB * (oB - 1) + TB] === DB;) oB -= 1;
          oB += 1
        } else {
          if (!(OB < kB)) break;
          for (gB = OB + 1; gB < oB && JB[LB * gB + TB] === DB;) gB += 1
        }
      }
      return VB(BB, TB, dB, kB, JB, YB, JB[LB * kB + TB])
    };
    var VB = dB(37281)("lo<p0", ["p0"]),
      yB = 8;

    function pB(BB, TB, dB, VB, yB, pB) {
      for (var lB = 2 * BB, JB = lB * (dB + 1) + TB, YB = dB + 1; YB < VB; ++YB, JB += lB)
        for (var gB = yB[JB], oB = YB, kB = lB * (YB - 1); oB > dB && yB[kB + TB] > gB; --oB, kB -= lB) {
          for (var LB = kB, OB = kB + lB, DB = 0; DB < lB; ++DB, ++LB, ++OB) {
            var uB = yB[LB];
            yB[LB] = yB[OB], yB[OB] = uB
          }
          var HB = pB[oB];
          pB[oB] = pB[oB - 1], pB[oB - 1] = HB
        }
    }
  },
  37281: BB => {
    BB.exports = function(BB, dB) {
      var VB = "abcdef".split("").concat(dB),
        yB = [];
      BB.indexOf("lo") >= 0 && yB.push("lo=e[k+n]");
      BB.indexOf("hi") >= 0 && yB.push("hi=e[k+o]");
      return VB.push(TB.replace("_", yB.join()).replace("$", BB)), Function.apply(void 0, VB)
    };
    var TB = "for(var j=2*a,k=j*c,l=k,m=c,n=b,o=a+b,p=c;d>p;++p,k+=j){var _;if($)if(m===p)m+=1,l+=j;else{for(var s=0;j>s;++s){var t=e[k+s];e[k+s]=e[l],e[l++]=t}var u=f[p];f[p]=f[m],f[m++]=u}}return m"
  },
  37255: BB => {
    BB.exports = function(BB, VB) {
      VB <= 4 * TB ? dB(0, VB - 1, BB) : gB(0, VB - 1, BB)
    };
    var TB = 32;

    function dB(BB, TB, dB) {
      for (var VB = 2 * (BB + 1), yB = BB + 1; yB <= TB; ++yB) {
        for (var pB = dB[VB++], lB = dB[VB++], JB = yB, YB = VB - 2; JB-- > BB;) {
          var gB = dB[YB - 2],
            oB = dB[YB - 1];
          if (gB < pB) break;
          if (gB === pB && oB < lB) break;
          dB[YB] = gB, dB[YB + 1] = oB, YB -= 2
        }
        dB[YB] = pB, dB[YB + 1] = lB
      }
    }

    function VB(BB, TB, dB) {
      TB *= 2;
      var VB = dB[BB *= 2],
        yB = dB[BB + 1];
      dB[BB] = dB[TB], dB[BB + 1] = dB[TB + 1], dB[TB] = VB, dB[TB + 1] = yB
    }

    function yB(BB, TB, dB) {
      TB *= 2, dB[BB *= 2] = dB[TB], dB[BB + 1] = dB[TB + 1]
    }

    function pB(BB, TB, dB, VB) {
      TB *= 2, dB *= 2;
      var yB = VB[BB *= 2],
        pB = VB[BB + 1];
      VB[BB] = VB[TB], VB[BB + 1] = VB[TB + 1], VB[TB] = VB[dB], VB[TB + 1] = VB[dB + 1], VB[dB] = yB, VB[dB + 1] = pB
    }

    function lB(BB, TB, dB, VB, yB) {
      TB *= 2, yB[BB *= 2] = yB[TB], yB[TB] = dB, yB[BB + 1] = yB[TB + 1], yB[TB + 1] = VB
    }

    function JB(BB, TB, dB) {
      TB *= 2;
      var VB = dB[BB *= 2],
        yB = dB[TB];
      return !(VB < yB) && (VB !== yB || dB[BB + 1] > dB[TB + 1])
    }

    function YB(BB, TB, dB, VB) {
      var yB = VB[BB *= 2];
      return yB < TB || yB === TB && VB[BB + 1] < dB
    }

    function gB(BB, oB, kB) {
      var LB = (oB - BB + 1) / 6 | 0,
        OB = BB + LB,
        DB = oB - LB,
        uB = BB + oB >> 1,
        HB = uB - LB,
        EB = uB + LB,
        vB = OB,
        mB = HB,
        iB = uB,
        NB = EB,
        tB = DB,
        fB = BB + 1,
        sB = oB - 1,
        MB = 0;
      JB(vB, mB, kB) && (MB = vB, vB = mB, mB = MB), JB(NB, tB, kB) && (MB = NB, NB = tB, tB = MB), JB(vB, iB, kB) && (MB = vB, vB = iB, iB = MB), JB(mB, iB, kB) && (MB = mB, mB = iB, iB = MB), JB(vB, NB, kB) && (MB = vB, vB = NB, NB = MB), JB(iB, NB, kB) && (MB = iB, iB = NB, NB = MB), JB(mB, tB, kB) && (MB = mB, mB = tB, tB = MB), JB(mB, iB, kB) && (MB = mB, mB = iB, iB = MB), JB(NB, tB, kB) && (MB = NB, NB = tB, tB = MB);
      for (var zB = kB[2 * mB], wB = kB[2 * mB + 1], UB = kB[2 * NB], FB = kB[2 * NB + 1], KB = 2 * vB, rB = 2 * iB, IB = 2 * tB, cB = 2 * OB, SB = 2 * uB, PB = 2 * DB, QB = 0; QB < 2; ++QB) {
        var RB = kB[KB + QB],
          aB = kB[rB + QB],
          ZB = kB[IB + QB];
        kB[cB + QB] = RB, kB[SB + QB] = aB, kB[PB + QB] = ZB
      }
      yB(HB, BB, kB), yB(EB, oB, kB);
      for (var XB = fB; XB <= sB; ++XB)
        if (YB(XB, zB, wB, kB)) XB !== fB && VB(XB, fB, kB), ++fB;
        else if (!YB(XB, UB, FB, kB))
        for (;;) {
          if (YB(sB, UB, FB, kB)) {
            YB(sB, zB, wB, kB) ? (pB(XB, fB, sB, kB), ++fB, --sB) : (VB(XB, sB, kB), --sB);
            break
          }
          if (--sB < XB) break
        }
      lB(BB, fB - 1, zB, wB, kB), lB(oB, sB + 1, UB, FB, kB), fB - 2 - BB <= TB ? dB(BB, fB - 2, kB) : gB(BB, fB - 2, kB), oB - (sB + 2) <= TB ? dB(sB + 2, oB, kB) : gB(sB + 2, oB, kB), sB - fB <= TB ? dB(fB, sB, kB) : gB(fB, sB, kB)
    }
  },
  37246: (BB, TB, dB) => {
    BB.exports = {
      init: function(BB) {
        var TB = yB.nextPow2(BB);
        YB.length < TB && (VB.free(YB), YB = VB.mallocInt32(TB));
        gB.length < TB && (VB.free(gB), gB = VB.mallocInt32(TB));
        oB.length < TB && (VB.free(oB), oB = VB.mallocInt32(TB));
        kB.length < TB && (VB.free(kB), kB = VB.mallocInt32(TB));
        LB.length < TB && (VB.free(LB), LB = VB.mallocInt32(TB));
        OB.length < TB && (VB.free(OB), OB = VB.mallocInt32(TB));
        var dB = 8 * TB;
        DB.length < dB && (VB.free(DB), DB = VB.mallocDouble(dB))
      },
      sweepBipartite: function(BB, TB, dB, VB, yB, JB, LB, OB, EB, vB) {
        for (var mB = 0, iB = 2 * BB, NB = BB - 1, tB = iB - 1, fB = dB; fB < VB; ++fB) {
          var sB = JB[fB],
            MB = iB * fB;
          DB[mB++] = yB[MB + NB], DB[mB++] = -(sB + 1), DB[mB++] = yB[MB + tB], DB[mB++] = sB
        }
        for (fB = LB; fB < OB; ++fB) {
          sB = vB[fB] + lB;
          var zB = iB * fB;
          DB[mB++] = EB[zB + NB], DB[mB++] = -sB, DB[mB++] = EB[zB + tB], DB[mB++] = sB
        }
        var wB = mB >>> 1;
        pB(DB, wB);
        var UB = 0,
          FB = 0;
        for (fB = 0; fB < wB; ++fB) {
          var KB = 0 | DB[2 * fB + 1];
          if (KB >= lB) uB(oB, kB, FB--, KB = KB - lB | 0);
          else if (KB >= 0) uB(YB, gB, UB--, KB);
          else if (KB <= -lB) {
            KB = -KB - lB | 0;
            for (var rB = 0; rB < UB; ++rB) {
              if (void 0 !== (IB = TB(YB[rB], KB))) return IB
            }
            HB(oB, kB, FB++, KB)
          } else {
            KB = -KB - 1 | 0;
            for (rB = 0; rB < FB; ++rB) {
              var IB;
              if (void 0 !== (IB = TB(KB, oB[rB]))) return IB
            }
            HB(YB, gB, UB++, KB)
          }
        }
      },
      sweepComplete: function(BB, TB, dB, VB, yB, lB, JB, EB, vB, mB) {
        for (var iB = 0, NB = 2 * BB, tB = BB - 1, fB = NB - 1, sB = dB; sB < VB; ++sB) {
          var MB = lB[sB] + 1 << 1,
            zB = NB * sB;
          DB[iB++] = yB[zB + tB], DB[iB++] = -MB, DB[iB++] = yB[zB + fB], DB[iB++] = MB
        }
        for (sB = JB; sB < EB; ++sB) {
          MB = mB[sB] + 1 << 1;
          var wB = NB * sB;
          DB[iB++] = vB[wB + tB], DB[iB++] = 1 | -MB, DB[iB++] = vB[wB + fB], DB[iB++] = 1 | MB
        }
        var UB = iB >>> 1;
        pB(DB, UB);
        var FB = 0,
          KB = 0,
          rB = 0;
        for (sB = 0; sB < UB; ++sB) {
          var IB = 0 | DB[2 * sB + 1],
            cB = 1 & IB;
          if (sB < UB - 1 && IB >> 1 === DB[2 * sB + 3] >> 1 && (cB = 2, sB += 1), IB < 0) {
            for (var SB = -(IB >> 1) - 1, PB = 0; PB < rB; ++PB) {
              if (void 0 !== (QB = TB(LB[PB], SB))) return QB
            }
            if (0 !== cB)
              for (PB = 0; PB < FB; ++PB) {
                if (void 0 !== (QB = TB(YB[PB], SB))) return QB
              }
            if (1 !== cB)
              for (PB = 0; PB < KB; ++PB) {
                var QB;
                if (void 0 !== (QB = TB(oB[PB], SB))) return QB
              }
            0 === cB ? HB(YB, gB, FB++, SB) : 1 === cB ? HB(oB, kB, KB++, SB) : 2 === cB && HB(LB, OB, rB++, SB)
          } else {
            SB = (IB >> 1) - 1;
            0 === cB ? uB(YB, gB, FB--, SB) : 1 === cB ? uB(oB, kB, KB--, SB) : 2 === cB && uB(LB, OB, rB--, SB)
          }
        }
      },
      scanBipartite: function(BB, TB, dB, VB, yB, JB, oB, kB, LB, OB, EB, vB) {
        var mB = 0,
          iB = 2 * BB,
          NB = TB,
          tB = TB + BB,
          fB = 1,
          sB = 1;
        VB ? sB = lB : fB = lB;
        for (var MB = yB; MB < JB; ++MB) {
          var zB = MB + fB,
            wB = iB * MB;
          DB[mB++] = oB[wB + NB], DB[mB++] = -zB, DB[mB++] = oB[wB + tB], DB[mB++] = zB
        }
        for (MB = LB; MB < OB; ++MB) {
          zB = MB + sB;
          var UB = iB * MB;
          DB[mB++] = EB[UB + NB], DB[mB++] = -zB
        }
        var FB = mB >>> 1;
        pB(DB, FB);
        var KB = 0;
        for (MB = 0; MB < FB; ++MB) {
          var rB = 0 | DB[2 * MB + 1];
          if (rB < 0) {
            var IB = !1;
            if ((zB = -rB) >= lB ? (IB = !VB, zB -= lB) : (IB = !!VB, zB -= 1), IB) HB(YB, gB, KB++, zB);
            else {
              var cB = vB[zB],
                SB = iB * zB,
                PB = EB[SB + TB + 1],
                QB = EB[SB + TB + 1 + BB];
              BB: for (var RB = 0; RB < KB; ++RB) {
                var aB = YB[RB],
                  ZB = iB * aB;
                if (!(QB < oB[ZB + TB + 1] || oB[ZB + TB + 1 + BB] < PB)) {
                  for (var XB = TB + 2; XB < BB; ++XB)
                    if (EB[SB + XB + BB] < oB[ZB + XB] || oB[ZB + XB + BB] < EB[SB + XB]) continue BB;
                  var WB, hB = kB[aB];
                  if (void 0 !== (WB = VB ? dB(cB, hB) : dB(hB, cB))) return WB
                }
              }
            }
          } else uB(YB, gB, KB--, rB - fB)
        }
      },
      scanComplete: function(BB, TB, dB, VB, yB, JB, gB, oB, kB, LB, OB) {
        for (var uB = 0, HB = 2 * BB, EB = TB, vB = TB + BB, mB = VB; mB < yB; ++mB) {
          var iB = mB + lB,
            NB = HB * mB;
          DB[uB++] = JB[NB + EB], DB[uB++] = -iB, DB[uB++] = JB[NB + vB], DB[uB++] = iB
        }
        for (mB = oB; mB < kB; ++mB) {
          iB = mB + 1;
          var tB = HB * mB;
          DB[uB++] = LB[tB + EB], DB[uB++] = -iB
        }
        var fB = uB >>> 1;
        pB(DB, fB);
        var sB = 0;
        for (mB = 0; mB < fB; ++mB) {
          var MB = 0 | DB[2 * mB + 1];
          if (MB < 0) {
            if ((iB = -MB) >= lB) YB[sB++] = iB - lB;
            else {
              var zB = OB[iB -= 1],
                wB = HB * iB,
                UB = LB[wB + TB + 1],
                FB = LB[wB + TB + 1 + BB];
              BB: for (var KB = 0; KB < sB; ++KB) {
                var rB = YB[KB],
                  IB = gB[rB];
                if (IB === zB) break;
                var cB = HB * rB;
                if (!(FB < JB[cB + TB + 1] || JB[cB + TB + 1 + BB] < UB)) {
                  for (var SB = TB + 2; SB < BB; ++SB)
                    if (LB[wB + SB + BB] < JB[cB + SB] || JB[cB + SB + BB] < LB[wB + SB]) continue BB;
                  var PB = dB(IB, zB);
                  if (void 0 !== PB) return PB
                }
              }
            }
          } else {
            for (iB = MB - lB, KB = sB - 1; KB >= 0; --KB)
              if (YB[KB] === iB) {
                for (SB = KB + 1; SB < sB; ++SB) YB[SB - 1] = YB[SB];
                break
              }-- sB
          }
        }
      }
    };
    var VB = dB(37219),
      yB = dB(37225),
      pB = dB(37255),
      lB = 1 << 28,
      JB = 1024,
      YB = VB.mallocInt32(JB),
      gB = VB.mallocInt32(JB),
      oB = VB.mallocInt32(JB),
      kB = VB.mallocInt32(JB),
      LB = VB.mallocInt32(JB),
      OB = VB.mallocInt32(JB),
      DB = VB.mallocDouble(8192);

    function uB(BB, TB, dB, VB) {
      var yB = TB[VB],
        pB = BB[dB - 1];
      BB[yB] = pB, TB[pB] = yB
    }

    function HB(BB, TB, dB, VB) {
      BB[dB] = VB, TB[VB] = dB
    }
  },
  37234: BB => {
    function TB(BB, dB, VB) {
      var yB = 0 | BB[VB];
      if (yB <= 0) return [];
      var pB, lB = new Array(yB);
      if (VB === BB.length - 1)
        for (pB = 0; pB < yB; ++pB) lB[pB] = dB;
      else
        for (pB = 0; pB < yB; ++pB) lB[pB] = TB(BB, dB, VB + 1);
      return lB
    }
    BB.exports = function(BB, dB) {
      switch ("undefined" === typeof dB && (dB = 0), typeof BB) {
        case "number":
          if (BB > 0) return function(BB, TB) {
            var dB, VB;
            for (dB = new Array(BB), VB = 0; VB < BB; ++VB) dB[VB] = TB;
            return dB
          }(0 | BB, dB);
          break;
        case "object":
          if ("number" === typeof BB.length) return TB(BB, dB, 0)
      }
      return []
    }
  },
  37181: (BB, TB, dB) => {
    BB.exports = function() {
      var BB = this;
      this.components = {}, this.comps = this.components;
      var TB = this.components,
        dB = 1,
        yB = {},
        pB = [],
        lB = [],
        JB = {
          timeout: !1,
          removals: [],
          multiComps: []
        };

      function YB(BB, dB) {
        var VB = TB[dB],
          pB = yB[dB],
          lB = pB.hash[BB];
        lB && (pB.remove(BB), VB.Kw && (VB.multi ? (lB.forEach((TB => {
          TB && VB.Kw(BB, TB)
        })), lB.length = 0) : VB.Kw(BB, lB)), JB.removals.push(pB), gB())
      }

      function gB() {
        JB.timeout || (JB.timeout = !0, setTimeout(oB, 1))
      }

      function oB() {
        JB.timeout = !1, kB()
      }

      function kB() {
        JB.multiComps.length && function(BB) {
          for (var TB = 0; TB < BB.length; TB++) {
            var {
              entID: dB,
              data: VB
            } = BB[TB], yB = VB.hash[dB];
            if (yB) {
              for (var pB = 0; pB < yB.length; pB++) yB[pB] || (yB.splice(pB, 1), pB--);
              0 === yB.length && (VB.remove(dB), JB.removals.push(VB))
            }
          }
          BB.length = 0
        }(JB.multiComps), JB.removals.length && function(BB) {
          for (var TB = 0; TB < BB.length; TB++) {
            BB[TB].flush()
          }
          BB.length = 0
        }(JB.removals)
      }
      this.Nu = yB, this._systems = pB, this._renderSystems = lB, this.YG = function(TB) {
        var VB = dB++;
        return Array.isArray(TB) && TB.forEach((TB => BB.XF(VB, TB))), VB
      }, this.deleteEntity = function(TB) {
        return Object.keys(yB).forEach((BB => {
          yB[BB].hash[TB] && YB(TB, BB)
        })), BB
      }, this.ldB = function(BB) {
        if (!BB) throw new Error("Missing component definition");
        var dB = BB.name;
        if (!dB) throw new Error("Component definition must have a name property.");
        if ("string" !== typeof dB) throw new Error("Component name must be a string.");
        if ("" === dB) throw new Error("Component name must be a non-empty string.");
        if (yB[dB]) throw new Error(`Component ${dB} already exists.`);
        var JB = {};
        return JB.name = dB, JB.multi = !!BB.multi, JB.order = isNaN(BB.order) ? 99 : BB.order, JB.stateConstructor = BB.stateConstructor || null, JB.state = BB.state || {}, JB.Om = BB.Om || null, JB.Kw = BB.Kw || null, JB.system = BB.system || null, JB.Im = BB.Im || null, TB[dB] = JB, yB[dB] = new VB, yB[dB]._pendingMultiCleanup = !1, yB[dB]._multiCleanupIDs = JB.multi ? [] : null, JB.system && (pB.push(dB), pB.sort(((BB, dB) => TB[BB].order - TB[dB].order))), JB.Im && (lB.push(dB), lB.sort(((BB, dB) => TB[BB].order - TB[dB].order))), dB
      }, this.overwriteComponent = function(BB, dB) {
        var VB = TB[BB];
        if (!VB) throw new Error(`Unknown component: ${BB}`);
        if (!dB) throw new Error("Missing component definition");
        if (VB.name !== dB.name) throw new Error("Overwriting component must use the same name property.");
        var JB = {};
        JB.name = BB, JB.multi = !!dB.multi, JB.order = isNaN(dB.order) ? 99 : dB.order, JB.state = dB.state || {}, JB.Om = dB.Om || null, JB.Kw = dB.Kw || null, JB.system = dB.system || null, JB.Im = dB.Im || null, TB[BB] = JB, yB[BB]._pendingMultiCleanup = !1, yB[BB]._multiCleanupIDs = JB.multi ? [] : null;
        var YB = pB.indexOf(BB);
        JB.system && YB < 0 && pB.push(BB), !JB.system && YB >= 0 && pB.splice(YB, 1), pB.sort(((BB, dB) => TB[BB].order - TB[dB].order));
        var gB = lB.indexOf(BB);
        JB.Im && gB < 0 && lB.push(BB), !JB.Im && gB >= 0 && lB.splice(gB, 1), lB.sort(((BB, dB) => TB[BB].order - TB[dB].order));
        var oB = JB.state;
        return this.SF(BB).forEach((BB => {
          for (var TB in oB) TB in BB || (BB[TB] = oB[TB]);
          JB.Om && JB.Om(BB.ZF, BB)
        })), BB
      }, this.deleteComponent = function(dB) {
        var VB = yB[dB];
        if (!VB) throw new Error(`Unknown component: ${dB}`);
        VB.flush(), VB.list.forEach((BB => {
          BB && YB(BB.ZF || BB[0].ZF, dB)
        }));
        var JB = pB.indexOf(dB),
          gB = lB.indexOf(dB);
        return JB > -1 && pB.splice(JB, 1), gB > -1 && lB.splice(gB, 1), yB[dB].dispose(), delete yB[dB], delete TB[dB], BB
      }, this.XF = function(BB, dB, VB) {
        var pB, lB = TB[dB],
          JB = yB[dB];
        if (!JB) throw new Error(`Unknown component: ${dB}.`);
        if (JB.hash[BB] && !lB.multi) throw new Error(`Entity ${BB} already has component: ${dB}.`);
        if (lB.stateConstructor) {
          if (!(pB = new lB.stateConstructor).hasOwnProperty("ZF")) throw new Error(`Component ${lB.name} stateConstructor type does not have property __id`);
          Object.assign(pB, lB.state, VB)
        } else pB = {
          ZF: BB,
          ...lB.state,
          ...VB
        };
        if (pB.ZF = BB, lB.multi) {
          var YB = JB.hash[BB];
          YB || (YB = [], JB.add(BB, YB)), YB.push(pB)
        } else JB.add(BB, pB);
        return lB.Om && lB.Om(BB, pB), this
      }, this.TTB = function(BB, TB) {
        var dB = yB[TB];
        if (!dB) throw new Error(`Unknown component: ${TB}.`);
        return !!dB.hash[BB]
      }, this.jF = function(TB, dB) {
        if (!yB[dB]) throw new Error(`Unknown component: ${dB}.`);
        return YB(TB, dB), BB
      }, this.getState = function(BB, TB) {
        var dB = yB[TB];
        if (!dB) throw new Error(`Unknown component: ${TB}.`);
        return dB.hash[BB]
      }, this.SF = function(BB) {
        var TB = yB[BB];
        if (!TB) throw new Error(`Unknown component: ${BB}.`);
        return kB(), TB.list
      }, this.aTB = function(BB) {
        if (!yB[BB]) throw new Error(`Unknown component: ${BB}.`);
        var TB = yB[BB].hash;
        return BB => TB[BB]
      }, this.GTB = function(BB) {
        if (!yB[BB]) throw new Error(`Unknown component: ${BB}.`);
        var TB = yB[BB].hash;
        return BB => !!TB[BB]
      }, this.dL = function(dB) {
        kB();
        for (var VB = 0; VB < pB.length; VB++) {
          var lB = pB[VB],
            JB = TB[lB],
            YB = yB[lB];
          JB.system(dB, YB.list), kB()
        }
        return BB
      }, this.render = function(dB) {
        kB();
        for (var VB = 0; VB < lB.length; VB++) {
          var pB = lB[VB],
            JB = TB[pB],
            YB = yB[pB];
          JB.Im(dB, YB.list), kB()
        }
        return BB
      }, this.removeMultiComponent = function(dB, VB, pB) {
        var lB = TB[VB],
          YB = yB[VB];
        if (!YB) throw new Error(`Unknown component: ${VB}.`);
        if (!lB.multi) throw new Error("removeMultiComponent called on non-multi component");
        return function(BB, TB, dB, VB) {
          var yB = dB.hash[BB];
          if (yB) {
            var pB = yB[VB];
            pB && (yB[VB] = null, TB.Kw && TB.Kw(BB, pB), JB.multiComps.push({
              entID: BB,
              data: dB
            }), gB())
          }
        }(dB, lB, YB, pB), BB
      }
    };
    var VB = dB(37185)
  },
  37185: BB => {
    function TB(BB, TB) {
      var dB = BB._map[TB];
      if (delete BB.hash[TB], delete BB._map[TB], dB === BB.list.length - 1) BB.list.pop(), BB._idList.pop();
      else {
        var VB = BB.list.pop();
        BB.list[dB] = VB;
        var yB = BB._idList.pop();
        BB._idList[dB] = yB, BB._map[yB] = dB
      }
    }
    BB.exports = class {
      constructor() {
        this.list = [], this.hash = {}, this._map = {}, this._idList = [], this._pendingRemovals = []
      }
      add(BB, TB) {
        if ("number" === typeof this._map[BB]) {
          var dB = this._map[BB];
          this.hash[BB] = TB, this.list[dB] = TB, this._idList[dB] = BB
        } else this._map[BB] = this.list.length, this.hash[BB] = TB, this.list.push(TB), this._idList.push(BB)
      }
      remove(BB) {
        var TB = this._map[BB];
        this.hash[BB] = null, this.list[TB] = null, this._pendingRemovals.push(BB)
      }
      dispose() {
        this.list = null, this.hash = null, this._map = null, this._idList = null, this._pendingRemovals.length = 0
      }
      flush() {
        for (var BB = 0; BB < this._pendingRemovals.length; BB++) {
          var dB = this._pendingRemovals[BB];
          null === this.hash[dB] && TB(this, dB)
        }
        this._pendingRemovals.length = 0
      }
    }
  },
  36631: BB => {
    BB.exports = function(BB) {
      for (var TB = new Array(BB), dB = 0; dB < BB; ++dB) TB[dB] = dB;
      return TB
    }
  },
  36636: BB => {
    function TB(BB) {
      return !!BB.constructor && "function" === typeof BB.constructor.isBuffer && BB.constructor.isBuffer(BB)
    }
    BB.exports = function(BB) {
      return null != BB && (TB(BB) || function(BB) {
        return "function" === typeof BB.readFloatLE && "function" === typeof BB.slice && TB(BB.slice(0, 0))
      }(BB) || !!BB._isBuffer)
    }
  },
  36936: (BB, TB, dB) => {
    BB = dB.nmd(BB);
    var VB = "__lodash_hash_undefined__",
      yB = 9007199254740991,
      pB = "[object Arguments]",
      lB = "[object Boolean]",
      JB = "[object Date]",
      YB = "[object Function]",
      gB = "[object GeneratorFunction]",
      oB = "[object Map]",
      kB = "[object Number]",
      LB = "[object Object]",
      OB = "[object Promise]",
      DB = "[object RegExp]",
      uB = "[object Set]",
      HB = "[object String]",
      EB = "[object Symbol]",
      vB = "[object WeakMap]",
      mB = "[object ArrayBuffer]",
      iB = "[object DataView]",
      NB = "[object Float32Array]",
      tB = "[object Float64Array]",
      fB = "[object Int8Array]",
      sB = "[object Int16Array]",
      MB = "[object Int32Array]",
      zB = "[object Uint8Array]",
      wB = "[object Uint8ClampedArray]",
      UB = "[object Uint16Array]",
      FB = "[object Uint32Array]",
      KB = /\w*$/,
      rB = /^\[object .+?Constructor\]$/,
      IB = /^(?:0|[1-9]\d*)$/,
      cB = {};
    cB[pB] = cB["[object Array]"] = cB[mB] = cB[iB] = cB[lB] = cB[JB] = cB[NB] = cB[tB] = cB[fB] = cB[sB] = cB[MB] = cB[oB] = cB[kB] = cB[LB] = cB[DB] = cB[uB] = cB[HB] = cB[EB] = cB[zB] = cB[wB] = cB[UB] = cB[FB] = !0, cB["[object Error]"] = cB[YB] = cB[vB] = !1;
    var SB = "object" == typeof dB.g && dB.g && dB.g.Object === Object && dB.g,
      PB = "object" == typeof self && self && self.Object === Object && self,
      QB = SB || PB || Function("return this")(),
      RB = TB && !TB.nodeType && TB,
      aB = RB && BB && !BB.nodeType && BB,
      ZB = aB && aB.exports === RB;

    function XB(BB, TB) {
      return BB.set(TB[0], TB[1]), BB
    }

    function WB(BB, TB) {
      return BB.add(TB), BB
    }

    function hB(BB, TB, dB, VB) {
      var yB = -1,
        pB = BB ? BB.length : 0;
      for (VB && pB && (dB = BB[++yB]); ++yB < pB;) dB = TB(dB, BB[yB], yB, BB);
      return dB
    }

    function CB(BB) {
      var TB = !1;
      if (null != BB && "function" != typeof BB.toString) try {
        TB = !!(BB + "")
      } catch (dB) {}
      return TB
    }

    function GB(BB) {
      var TB = -1,
        dB = Array(BB.size);
      return BB.forEach((function(BB, VB) {
        dB[++TB] = [VB, BB]
      })), dB
    }

    function qB(BB, TB) {
      return function(dB) {
        return BB(TB(dB))
      }
    }

    function xB(BB) {
      var TB = -1,
        dB = Array(BB.size);
      return BB.forEach((function(BB) {
        dB[++TB] = BB
      })), dB
    }
    var jB = Array.prototype,
      AB = Function.prototype,
      bB = Object.prototype,
      nB = QB["__core-js_shared__"],
      eB = function() {
        var BB = /[^.]+$/.exec(nB && nB.keys && nB.keys.IE_PROTO || "");
        return BB ? "Symbol(src)_1." + BB : ""
      }(),
      BT = AB.toString,
      TT = bB.hasOwnProperty,
      dT = bB.toString,
      VT = RegExp("^" + BT.call(TT).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
      yT = ZB ? QB.iD : void 0,
      pT = QB.Symbol,
      lT = QB.Uint8Array,
      JT = qB(Object.getPrototypeOf, Object),
      YT = Object.create,
      gT = bB.propertyIsEnumerable,
      oT = jB.splice,
      kT = Object.getOwnPropertySymbols,
      LT = yT ? yT.isBuffer : void 0,
      OT = qB(Object.keys, Object),
      DT = ZT(QB, "DataView"),
      uT = ZT(QB, "Map"),
      HT = ZT(QB, "Promise"),
      ET = ZT(QB, "Set"),
      vT = ZT(QB, "WeakMap"),
      mT = ZT(Object, "create"),
      iT = GT(DT),
      NT = GT(uT),
      tT = GT(HT),
      fT = GT(ET),
      sT = GT(vT),
      MT = pT ? pT.prototype : void 0,
      zT = MT ? MT.valueOf : void 0;

    function wT(BB) {
      var TB = -1,
        dB = BB ? BB.length : 0;
      for (this.clear(); ++TB < dB;) {
        var VB = BB[TB];
        this.set(VB[0], VB[1])
      }
    }

    function UT(BB) {
      var TB = -1,
        dB = BB ? BB.length : 0;
      for (this.clear(); ++TB < dB;) {
        var VB = BB[TB];
        this.set(VB[0], VB[1])
      }
    }

    function FT(BB) {
      var TB = -1,
        dB = BB ? BB.length : 0;
      for (this.clear(); ++TB < dB;) {
        var VB = BB[TB];
        this.set(VB[0], VB[1])
      }
    }

    function KT(BB) {
      this.__data__ = new UT(BB)
    }

    function rT(BB, TB) {
      var dB = xT(BB) || function(BB) {
          return function(BB) {
            return function(BB) {
              return !!BB && "object" == typeof BB
            }(BB) && jT(BB)
          }(BB) && TT.call(BB, "callee") && (!gT.call(BB, "callee") || dT.call(BB) == pB)
        }(BB) ? function(BB, TB) {
          for (var dB = -1, VB = Array(BB); ++dB < BB;) VB[dB] = TB(dB);
          return VB
        }(BB.length, String) : [],
        VB = dB.length,
        yB = !!VB;
      for (var lB in BB) !TB && !TT.call(BB, lB) || yB && ("length" == lB || hT(lB, VB)) || dB.push(lB);
      return dB
    }

    function IT(BB, TB, dB) {
      var VB = BB[TB];
      TT.call(BB, TB) && qT(VB, dB) && (void 0 !== dB || TB in BB) || (BB[TB] = dB)
    }

    function cT(BB, TB) {
      for (var dB = BB.length; dB--;)
        if (qT(BB[dB][0], TB)) return dB;
      return -1
    }

    function ST(BB, TB, dB, VB, yB, OB, vB) {
      var rB;
      if (VB && (rB = OB ? VB(BB, yB, OB, vB) : VB(BB)), void 0 !== rB) return rB;
      if (!nT(BB)) return BB;
      var IB = xT(BB);
      if (IB) {
        if (rB = function(BB) {
            var TB = BB.length,
              dB = BB.constructor(TB);
            TB && "string" == typeof BB[0] && TT.call(BB, "index") && (dB.index = BB.index, dB.input = BB.input);
            return dB
          }(BB), !TB) return function(BB, TB) {
          var dB = -1,
            VB = BB.length;
          TB || (TB = Array(VB));
          for (; ++dB < VB;) TB[dB] = BB[dB];
          return TB
        }(BB, rB)
      } else {
        var SB = WT(BB),
          PB = SB == YB || SB == gB;
        if (AT(BB)) return function(BB, TB) {
          if (TB) return BB.slice();
          var dB = new BB.constructor(BB.length);
          return BB.copy(dB), dB
        }(BB, TB);
        if (SB == LB || SB == pB || PB && !OB) {
          if (CB(BB)) return OB ? BB : {};
          if (rB = function(BB) {
              return "function" != typeof BB.constructor || CT(BB) ? {} : (TB = JT(BB), nT(TB) ? YT(TB) : {});
              var TB
            }(PB ? {} : BB), !TB) return function(BB, TB) {
            return RT(BB, XT(BB), TB)
          }(BB, function(BB, TB) {
            return BB && RT(TB, eT(TB), BB)
          }(rB, BB))
        } else {
          if (!cB[SB]) return OB ? BB : {};
          rB = function(BB, TB, dB, VB) {
            var yB = BB.constructor;
            switch (TB) {
              case mB:
                return QT(BB);
              case lB:
              case JB:
                return new yB(+BB);
              case iB:
                return function(BB, TB) {
                  var dB = TB ? QT(BB.buffer) : BB.buffer;
                  return new BB.constructor(dB, BB.byteOffset, BB.byteLength)
                }(BB, VB);
              case NB:
              case tB:
              case fB:
              case sB:
              case MB:
              case zB:
              case wB:
              case UB:
              case FB:
                return function(BB, TB) {
                  var dB = TB ? QT(BB.buffer) : BB.buffer;
                  return new BB.constructor(dB, BB.byteOffset, BB.length)
                }(BB, VB);
              case oB:
                return function(BB, TB, dB) {
                  var VB = TB ? dB(GB(BB), !0) : GB(BB);
                  return hB(VB, XB, new BB.constructor)
                }(BB, VB, dB);
              case kB:
              case HB:
                return new yB(BB);
              case DB:
                return function(BB) {
                  var TB = new BB.constructor(BB.source, KB.exec(BB));
                  return TB.lastIndex = BB.lastIndex, TB
                }(BB);
              case uB:
                return function(BB, TB, dB) {
                  var VB = TB ? dB(xB(BB), !0) : xB(BB);
                  return hB(VB, WB, new BB.constructor)
                }(BB, VB, dB);
              case EB:
                return pB = BB, zT ? Object(zT.call(pB)) : {}
            }
            var pB
          }(BB, SB, ST, TB)
        }
      }
      vB || (vB = new KT);
      var QB = vB.get(BB);
      if (QB) return QB;
      if (vB.set(BB, rB), !IB) var RB = dB ? function(BB) {
        return function(BB, TB, dB) {
          var VB = TB(BB);
          return xT(BB) ? VB : function(BB, TB) {
            for (var dB = -1, VB = TB.length, yB = BB.length; ++dB < VB;) BB[yB + dB] = TB[dB];
            return BB
          }(VB, dB(BB))
        }(BB, eT, XT)
      }(BB) : eT(BB);
      return function(BB, TB) {
        for (var dB = -1, VB = BB ? BB.length : 0; ++dB < VB && !1 !== TB(BB[dB], dB, BB););
      }(RB || BB, (function(yB, pB) {
        RB && (yB = BB[pB = yB]), IT(rB, pB, ST(yB, TB, dB, VB, pB, BB, vB))
      })), rB
    }

    function PT(BB) {
      return !(!nT(BB) || (TB = BB, eB && eB in TB)) && (bT(BB) || CB(BB) ? VT : rB).test(GT(BB));
      var TB
    }

    function QT(BB) {
      var TB = new BB.constructor(BB.byteLength);
      return new lT(TB).set(new lT(BB)), TB
    }

    function RT(BB, TB, dB, VB) {
      dB || (dB = {});
      for (var yB = -1, pB = TB.length; ++yB < pB;) {
        var lB = TB[yB],
          JB = VB ? VB(dB[lB], BB[lB], lB, dB, BB) : void 0;
        IT(dB, lB, void 0 === JB ? BB[lB] : JB)
      }
      return dB
    }

    function aT(BB, TB) {
      var dB = BB.__data__;
      return function(BB) {
        var TB = typeof BB;
        return "string" == TB || "number" == TB || "symbol" == TB || "boolean" == TB ? "__proto__" !== BB : null === BB
      }(TB) ? dB["string" == typeof TB ? "string" : "hash"] : dB.map
    }

    function ZT(BB, TB) {
      var dB = function(BB, TB) {
        return null == BB ? void 0 : BB[TB]
      }(BB, TB);
      return PT(dB) ? dB : void 0
    }
    wT.prototype.clear = function() {
      this.__data__ = mT ? mT(null) : {}
    }, wT.prototype.delete = function(BB) {
      return this.has(BB) && delete this.__data__[BB]
    }, wT.prototype.get = function(BB) {
      var TB = this.__data__;
      if (mT) {
        var dB = TB[BB];
        return dB === VB ? void 0 : dB
      }
      return TT.call(TB, BB) ? TB[BB] : void 0
    }, wT.prototype.has = function(BB) {
      var TB = this.__data__;
      return mT ? void 0 !== TB[BB] : TT.call(TB, BB)
    }, wT.prototype.set = function(BB, TB) {
      return this.__data__[BB] = mT && void 0 === TB ? VB : TB, this
    }, UT.prototype.clear = function() {
      this.__data__ = []
    }, UT.prototype.delete = function(BB) {
      var TB = this.__data__,
        dB = cT(TB, BB);
      return !(dB < 0) && (dB == TB.length - 1 ? TB.pop() : oT.call(TB, dB, 1), !0)
    }, UT.prototype.get = function(BB) {
      var TB = this.__data__,
        dB = cT(TB, BB);
      return dB < 0 ? void 0 : TB[dB][1]
    }, UT.prototype.has = function(BB) {
      return cT(this.__data__, BB) > -1
    }, UT.prototype.set = function(BB, TB) {
      var dB = this.__data__,
        VB = cT(dB, BB);
      return VB < 0 ? dB.push([BB, TB]) : dB[VB][1] = TB, this
    }, FT.prototype.clear = function() {
      this.__data__ = {
        hash: new wT,
        map: new(uT || UT),
        string: new wT
      }
    }, FT.prototype.delete = function(BB) {
      return aT(this, BB).delete(BB)
    }, FT.prototype.get = function(BB) {
      return aT(this, BB).get(BB)
    }, FT.prototype.has = function(BB) {
      return aT(this, BB).has(BB)
    }, FT.prototype.set = function(BB, TB) {
      return aT(this, BB).set(BB, TB), this
    }, KT.prototype.clear = function() {
      this.__data__ = new UT
    }, KT.prototype.delete = function(BB) {
      return this.__data__.delete(BB)
    }, KT.prototype.get = function(BB) {
      return this.__data__.get(BB)
    }, KT.prototype.has = function(BB) {
      return this.__data__.has(BB)
    }, KT.prototype.set = function(BB, TB) {
      var dB = this.__data__;
      if (dB instanceof UT) {
        var VB = dB.__data__;
        if (!uT || VB.length < 199) return VB.push([BB, TB]), this;
        dB = this.__data__ = new FT(VB)
      }
      return dB.set(BB, TB), this
    };
    var XT = kT ? qB(kT, Object) : function() {
        return []
      },
      WT = function(BB) {
        return dT.call(BB)
      };

    function hT(BB, TB) {
      return !!(TB = null == TB ? yB : TB) && ("number" == typeof BB || IB.test(BB)) && BB > -1 && BB % 1 == 0 && BB < TB
    }

    function CT(BB) {
      var TB = BB && BB.constructor;
      return BB === ("function" == typeof TB && TB.prototype || bB)
    }

    function GT(BB) {
      if (null != BB) {
        try {
          return BT.call(BB)
        } catch (TB) {}
        try {
          return BB + ""
        } catch (TB) {}
      }
      return ""
    }

    function qT(BB, TB) {
      return BB === TB || BB !== BB && TB !== TB
    }(DT && WT(new DT(new ArrayBuffer(1))) != iB || uT && WT(new uT) != oB || HT && WT(HT.resolve()) != OB || ET && WT(new ET) != uB || vT && WT(new vT) != vB) && (WT = function(BB) {
      var TB = dT.call(BB),
        dB = TB == LB ? BB.constructor : void 0,
        VB = dB ? GT(dB) : void 0;
      if (VB) switch (VB) {
        case iT:
          return iB;
        case NT:
          return oB;
        case tT:
          return OB;
        case fT:
          return uB;
        case sT:
          return vB
      }
      return TB
    });
    var xT = Array.isArray;

    function jT(BB) {
      return null != BB && function(BB) {
        return "number" == typeof BB && BB > -1 && BB % 1 == 0 && BB <= yB
      }(BB.length) && !bT(BB)
    }
    var AT = LT || function() {
      return !1
    };

    function bT(BB) {
      var TB = nT(BB) ? dT.call(BB) : "";
      return TB == YB || TB == gB
    }

    function nT(BB) {
      var TB = typeof BB;
      return !!BB && ("object" == TB || "function" == TB)
    }

    function eT(BB) {
      return jT(BB) ? rT(BB) : function(BB) {
        if (!CT(BB)) return OT(BB);
        var TB = [];
        for (var dB in Object(BB)) TT.call(BB, dB) && "constructor" != dB && TB.push(dB);
        return TB
      }(BB)
    }
    BB.exports = function(BB) {
      return ST(BB, !0, !0)
    }
  },
  36627: (BB, TB, dB) => {
    var VB = dB(36631),
      yB = dB(36636),
      pB = "undefined" !== typeof Float64Array;

    function lB(BB, TB) {
      return BB[0] - TB[0]
    }

    function JB() {
      var BB, TB = this.stride,
        dB = new Array(TB.length);
      for (BB = 0; BB < dB.length; ++BB) dB[BB] = [Math.abs(TB[BB]), BB];
      dB.sort(lB);
      var VB = new Array(dB.length);
      for (BB = 0; BB < VB.length; ++BB) VB[BB] = dB[BB][1];
      return VB
    }

    function YB(BB, TB) {
      var dB = ["View", TB, "d", BB].join("");
      TB < 0 && (dB = "View_Nil" + BB);
      var yB = "generic" === BB;
      if (-1 === TB) {
        var pB = "function " + dB + "(a){this.data=a;};var proto=" + dB + ".prototype;proto.dtype='" + BB + "';proto.index=function(){return -1};proto.size=0;proto.dimension=-1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function(){return new " + dB + "(this.data);};proto.get=proto.set=function(){};proto.pick=function(){return null};return function construct_" + dB + "(a){return new " + dB + "(a);}";
        return new Function(pB)()
      }
      if (0 === TB) {
        pB = "function " + dB + "(a,d) {this.data = a;this.offset = d};var proto=" + dB + ".prototype;proto.dtype='" + BB + "';proto.index=function(){return this.offset};proto.dimension=0;proto.size=1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function " + dB + "_copy() {return new " + dB + "(this.data,this.offset)};proto.pick=function " + dB + "_pick(){return TrivialArray(this.data);};proto.valueOf=proto.get=function " + dB + "_get(){return " + (yB ? "this.data.get(this.offset)" : "this.data[this.offset]") + "};proto.set=function " + dB + "_set(v){return " + (yB ? "this.data.set(this.offset,v)" : "this.data[this.offset]=v") + "};return function construct_" + dB + "(a,b,c,d){return new " + dB + "(a,d)}";
        return new Function("TrivialArray", pB)(gB[BB][0])
      }
      pB = ["'use strict'"];
      var lB = VB(TB),
        YB = lB.map((function(BB) {
          return "i" + BB
        })),
        oB = "this.offset+" + lB.map((function(BB) {
          return "this.stride[" + BB + "]*i" + BB
        })).join("+"),
        kB = lB.map((function(BB) {
          return "b" + BB
        })).join(","),
        LB = lB.map((function(BB) {
          return "c" + BB
        })).join(",");
      pB.push("function " + dB + "(a," + kB + "," + LB + ",d){this.data=a", "this.shape=[" + kB + "]", "this.stride=[" + LB + "]", "this.offset=d|0}", "var proto=" + dB + ".prototype", "proto.dtype='" + BB + "'", "proto.dimension=" + TB), pB.push("Object.defineProperty(proto,'size',{get:function " + dB + "_size(){return " + lB.map((function(BB) {
        return "this.shape[" + BB + "]"
      })).join("*"), "}})"), 1 === TB ? pB.push("proto.order=[0]") : (pB.push("Object.defineProperty(proto,'order',{get:"), TB < 4 ? (pB.push("function " + dB + "_order(){"), 2 === TB ? pB.push("return (Math.abs(this.stride[0])>Math.abs(this.stride[1]))?[1,0]:[0,1]}})") : 3 === TB && pB.push("var s0=Math.abs(this.stride[0]),s1=Math.abs(this.stride[1]),s2=Math.abs(this.stride[2]);if(s0>s1){if(s1>s2){return [2,1,0];}else if(s0>s2){return [1,2,0];}else{return [1,0,2];}}else if(s0>s2){return [2,0,1];}else if(s2>s1){return [0,1,2];}else{return [0,2,1];}}})")) : pB.push("ORDER})")), pB.push("proto.set=function " + dB + "_set(" + YB.join(",") + ",v){"), yB ? pB.push("return this.data.set(" + oB + ",v)}") : pB.push("return this.data[" + oB + "]=v}"), pB.push("proto.get=function " + dB + "_get(" + YB.join(",") + "){"), yB ? pB.push("return this.data.get(" + oB + ")}") : pB.push("return this.data[" + oB + "]}"), pB.push("proto.index=function " + dB + "_index(", YB.join(), "){return " + oB + "}"), pB.push("proto.hi=function " + dB + "_hi(" + YB.join(",") + "){return new " + dB + "(this.data," + lB.map((function(BB) {
        return ["(typeof i", BB, "!=='number'||i", BB, "<0)?this.shape[", BB, "]:i", BB, "|0"].join("")
      })).join(",") + "," + lB.map((function(BB) {
        return "this.stride[" + BB + "]"
      })).join(",") + ",this.offset)}");
      var OB = lB.map((function(BB) {
          return "a" + BB + "=this.shape[" + BB + "]"
        })),
        DB = lB.map((function(BB) {
          return "c" + BB + "=this.stride[" + BB + "]"
        }));
      pB.push("proto.lo=function " + dB + "_lo(" + YB.join(",") + "){var b=this.offset,d=0," + OB.join(",") + "," + DB.join(","));
      for (var uB = 0; uB < TB; ++uB) pB.push("if(typeof i" + uB + "==='number'&&i" + uB + ">=0){d=i" + uB + "|0;b+=c" + uB + "*d;a" + uB + "-=d}");
      pB.push("return new " + dB + "(this.data," + lB.map((function(BB) {
        return "a" + BB
      })).join(",") + "," + lB.map((function(BB) {
        return "c" + BB
      })).join(",") + ",b)}"), pB.push("proto.step=function " + dB + "_step(" + YB.join(",") + "){var " + lB.map((function(BB) {
        return "a" + BB + "=this.shape[" + BB + "]"
      })).join(",") + "," + lB.map((function(BB) {
        return "b" + BB + "=this.stride[" + BB + "]"
      })).join(",") + ",c=this.offset,d=0,ceil=Math.ceil");
      for (uB = 0; uB < TB; ++uB) pB.push("if(typeof i" + uB + "==='number'){d=i" + uB + "|0;if(d<0){c+=b" + uB + "*(a" + uB + "-1);a" + uB + "=ceil(-a" + uB + "/d)}else{a" + uB + "=ceil(a" + uB + "/d)}b" + uB + "*=d}");
      pB.push("return new " + dB + "(this.data," + lB.map((function(BB) {
        return "a" + BB
      })).join(",") + "," + lB.map((function(BB) {
        return "b" + BB
      })).join(",") + ",c)}");
      var HB = new Array(TB),
        EB = new Array(TB);
      for (uB = 0; uB < TB; ++uB) HB[uB] = "a[i" + uB + "]", EB[uB] = "b[i" + uB + "]";
      pB.push("proto.transpose=function " + dB + "_transpose(" + YB + "){" + YB.map((function(BB, TB) {
        return BB + "=(" + BB + "===undefined?" + TB + ":" + BB + "|0)"
      })).join(";"), "var a=this.shape,b=this.stride;return new " + dB + "(this.data," + HB.join(",") + "," + EB.join(",") + ",this.offset)}"), pB.push("proto.pick=function " + dB + "_pick(" + YB + "){var a=[],b=[],c=this.offset");
      for (uB = 0; uB < TB; ++uB) pB.push("if(typeof i" + uB + "==='number'&&i" + uB + ">=0){c=(c+this.stride[" + uB + "]*i" + uB + ")|0}else{a.push(this.shape[" + uB + "]);b.push(this.stride[" + uB + "])}");
      return pB.push("var ctor=CTOR_LIST[a.length+1];return ctor(this.data,a,b,c)}"), pB.push("return function construct_" + dB + "(data,shape,stride,offset){return new " + dB + "(data," + lB.map((function(BB) {
        return "shape[" + BB + "]"
      })).join(",") + "," + lB.map((function(BB) {
        return "stride[" + BB + "]"
      })).join(",") + ",offset)}"), new Function("CTOR_LIST", "ORDER", pB.join("\n"))(gB[BB], JB)
    }
    var gB = {
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
    BB.exports = function(BB, TB, dB, VB) {
      if (void 0 === BB) return (0, gB.array[0])([]);
      "number" === typeof BB && (BB = [BB]), void 0 === TB && (TB = [BB.length]);
      var lB = TB.length;
      if (void 0 === dB) {
        dB = new Array(lB);
        for (var JB = lB - 1, oB = 1; JB >= 0; --JB) dB[JB] = oB, oB *= TB[JB]
      }
      if (void 0 === VB) {
        VB = 0;
        for (JB = 0; JB < lB; ++JB) dB[JB] < 0 && (VB -= (TB[JB] - 1) * dB[JB])
      }
      for (var kB = function(BB) {
          if (yB(BB)) return "buffer";
          if (pB) switch (Object.prototype.toString.call(BB)) {
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
          return Array.isArray(BB) ? "array" : "generic"
        }(BB), LB = gB[kB]; LB.length <= lB + 1;) LB.push(YB(kB, LB.length - 1));
      return (0, LB[lB + 1])(BB, TB, dB, VB)
    }
  },
  37397: BB => {
    function TB(BB, TB, dB) {
      for (var VB = BB.length, yB = -1 / 0, pB = 1 / 0, lB = 0; lB < VB; lB++) {
        var JB = (dB[0][lB] - BB[lB]) / TB[lB],
          YB = (dB[1][lB] - BB[lB]) / TB[lB];
        if (JB > YB) {
          var gB = JB;
          JB = YB, YB = gB
        }
        if (YB < yB || JB > pB) return 1 / 0;
        JB > yB && (yB = JB), YB < pB && (pB = YB)
      }
      return yB > pB ? 1 / 0 : yB
    }
    BB.exports = function(BB, dB, VB, yB) {
      var pB = TB(dB, VB, yB);
      if (pB === 1 / 0) BB = null;
      else {
        BB = BB || [];
        for (var lB = 0; lB < dB.length; lB++) BB[lB] = dB[lB] + VB[lB] * pB
      }
      return BB
    }, BB.exports.distance = TB
  },
  36649: (BB, TB, dB) => {
    var VB = dB(36656);

    function yB(BB) {
      for (var TB, dB, yB = 0, pB = BB.length, lB = 0; lB < BB.length;) {
        for (TB = BB[lB], dB = 0; lB < pB && BB[lB] === TB;) ++lB, ++dB;
        yB += VB.log2(dB) / 7 | 0, yB += VB.log2(TB >>> 0) / 7 | 0, yB += 2
      }
      return yB
    }
    TB.size = yB, TB.encode = function(BB, TB) {
      TB || (TB = new Uint8Array(yB(BB)));
      for (var dB, VB, pB = 0, lB = TB.length, JB = 0; JB < BB.length;) {
        for (dB = BB[JB], VB = 0; JB < BB.length && BB[JB] === dB;) ++JB, ++VB;
        for (; pB < lB && VB >= 128;) TB[pB++] = 128 + (127 & VB), VB >>>= 7;
        if (pB >= lB) throw new Error("RLE buffer overflow");
        for (TB[pB++] = VB, dB >>>= 0; pB < lB && dB >= 128;) TB[pB++] = 128 + (127 & dB), dB >>>= 7;
        if (pB >= lB) throw new Error("RLE buffer overflow");
        TB[pB++] = dB
      }
      return TB
    }, TB.decode = function(BB, TB) {
      for (var dB, VB, yB, pB, lB = TB.length, JB = BB.length, YB = 0, gB = 0; gB < JB;) {
        for (dB = 0, VB = 0; gB < JB && BB[gB] >= 128;) dB += (127 & BB[gB++]) << VB, VB += 7;
        if (dB += BB[gB++] << VB, gB >= JB) throw new Error("RLE buffer underrun");
        if (YB + dB > lB) throw new Error("Chunk buffer overflow");
        for (yB = 0, VB = 0; gB < JB && BB[gB] >= 128;) yB += (127 & BB[gB++]) << VB, VB += 7;
        if (gB >= JB) throw new Error("RLE buffer underrun");
        for (yB += BB[gB++] << VB, pB = 0; pB < dB; ++pB) TB[YB++] = yB
      }
      return TB
    }
  },
  36656: (BB, TB) => {
    function dB(BB) {
      var TB = 32;
      return (BB &= -BB) && TB--, 65535 & BB && (TB -= 16), 16711935 & BB && (TB -= 8), 252645135 & BB && (TB -= 4), 858993459 & BB && (TB -= 2), 1431655765 & BB && (TB -= 1), TB
    }
    TB.INT_BITS = 32, TB.INT_MAX = 2147483647, TB.INT_MIN = -1 << 31, TB.sign = function(BB) {
      return (BB > 0) - (BB < 0)
    }, TB.abs = function(BB) {
      var TB = BB >> 31;
      return (BB ^ TB) - TB
    }, TB.min = function(BB, TB) {
      return TB ^ (BB ^ TB) & -(BB < TB)
    }, TB.max = function(BB, TB) {
      return BB ^ (BB ^ TB) & -(BB < TB)
    }, TB.isPow2 = function(BB) {
      return !(BB & BB - 1) && !!BB
    }, TB.log2 = function(BB) {
      var TB, dB;
      return TB = (BB > 65535) << 4, TB |= dB = ((BB >>>= TB) > 255) << 3, TB |= dB = ((BB >>>= dB) > 15) << 2, (TB |= dB = ((BB >>>= dB) > 3) << 1) | (BB >>>= dB) >> 1
    }, TB.log10 = function(BB) {
      return BB >= 1e9 ? 9 : BB >= 1e8 ? 8 : BB >= 1e7 ? 7 : BB >= 1e6 ? 6 : BB >= 1e5 ? 5 : BB >= 1e4 ? 4 : BB >= 1e3 ? 3 : BB >= 100 ? 2 : BB >= 10 ? 1 : 0
    }, TB.popCount = function(BB) {
      return 16843009 * ((BB = (858993459 & (BB -= BB >>> 1 & 1431655765)) + (BB >>> 2 & 858993459)) + (BB >>> 4) & 252645135) >>> 24
    }, TB.countTrailingZeros = dB, TB.nextPow2 = function(BB) {
      return BB += 0 === BB, --BB, BB |= BB >>> 1, BB |= BB >>> 2, BB |= BB >>> 4, BB |= BB >>> 8, (BB |= BB >>> 16) + 1
    }, TB.prevPow2 = function(BB) {
      return BB |= BB >>> 1, BB |= BB >>> 2, BB |= BB >>> 4, BB |= BB >>> 8, (BB |= BB >>> 16) - (BB >>> 1)
    }, TB.parity = function(BB) {
      return BB ^= BB >>> 16, BB ^= BB >>> 8, BB ^= BB >>> 4, 27030 >>> (BB &= 15) & 1
    };
    var VB = new Array(256);
    ! function(BB) {
      for (var TB = 0; TB < 256; ++TB) {
        var dB = TB,
          VB = TB,
          yB = 7;
        for (dB >>>= 1; dB; dB >>>= 1) VB <<= 1, VB |= 1 & dB, --yB;
        BB[TB] = VB << yB & 255
      }
    }(VB), TB.reverse = function(BB) {
      return VB[255 & BB] << 24 | VB[BB >>> 8 & 255] << 16 | VB[BB >>> 16 & 255] << 8 | VB[BB >>> 24 & 255]
    }, TB.interleave2 = function(BB, TB) {
      return (BB = 1431655765 & ((BB = 858993459 & ((BB = 252645135 & ((BB = 16711935 & ((BB &= 65535) | BB << 8)) | BB << 4)) | BB << 2)) | BB << 1)) | (TB = 1431655765 & ((TB = 858993459 & ((TB = 252645135 & ((TB = 16711935 & ((TB &= 65535) | TB << 8)) | TB << 4)) | TB << 2)) | TB << 1)) << 1
    }, TB.deinterleave2 = function(BB, TB) {
      return (BB = 65535 & ((BB = 16711935 & ((BB = 252645135 & ((BB = 858993459 & ((BB = BB >>> TB & 1431655765) | BB >>> 1)) | BB >>> 2)) | BB >>> 4)) | BB >>> 16)) << 16 >> 16
    }, TB.interleave3 = function(BB, TB, dB) {
      return BB = 1227133513 & ((BB = 3272356035 & ((BB = 251719695 & ((BB = 4278190335 & ((BB &= 1023) | BB << 16)) | BB << 8)) | BB << 4)) | BB << 2), (BB |= (TB = 1227133513 & ((TB = 3272356035 & ((TB = 251719695 & ((TB = 4278190335 & ((TB &= 1023) | TB << 16)) | TB << 8)) | TB << 4)) | TB << 2)) << 1) | (dB = 1227133513 & ((dB = 3272356035 & ((dB = 251719695 & ((dB = 4278190335 & ((dB &= 1023) | dB << 16)) | dB << 8)) | dB << 4)) | dB << 2)) << 2
    }, TB.deinterleave3 = function(BB, TB) {
      return (BB = 1023 & ((BB = 4278190335 & ((BB = 251719695 & ((BB = 3272356035 & ((BB = BB >>> TB & 1227133513) | BB >>> 2)) | BB >>> 4)) | BB >>> 8)) | BB >>> 16)) << 22 >> 22
    }, TB.nextCombination = function(BB) {
      var TB = BB | BB - 1;
      return TB + 1 | (~TB & -~TB) - 1 >>> dB(BB) + 1
    }
  },
  36180: (BB, TB, dB) => {
    dB.d(TB, {
      Color3: () => VB.c,
      d: () => VB.d
    });
    var VB = dB(36183);
    (0, VB.f)()
  },
  36688: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => yB
    });
    var VB = dB(36690);
    class yB {
      static GetPlanes(BB) {
        const TB = [];
        for (let dB = 0; dB < 6; dB++) TB.push(new VB.d(0, 0, 0, 0));
        return yB.GetPlanesToRef(BB, TB), TB
      }
      static GetNearPlaneToRef(BB, TB) {
        const dB = BB.m;
        TB.normal.x = dB[3] + dB[2], TB.normal.y = dB[7] + dB[6], TB.normal.z = dB[11] + dB[10], TB.d = dB[15] + dB[14], TB.normalize()
      }
      static GetFarPlaneToRef(BB, TB) {
        const dB = BB.m;
        TB.normal.x = dB[3] - dB[2], TB.normal.y = dB[7] - dB[6], TB.normal.z = dB[11] - dB[10], TB.d = dB[15] - dB[14], TB.normalize()
      }
      static GetLeftPlaneToRef(BB, TB) {
        const dB = BB.m;
        TB.normal.x = dB[3] + dB[0], TB.normal.y = dB[7] + dB[4], TB.normal.z = dB[11] + dB[8], TB.d = dB[15] + dB[12], TB.normalize()
      }
      static GetRightPlaneToRef(BB, TB) {
        const dB = BB.m;
        TB.normal.x = dB[3] - dB[0], TB.normal.y = dB[7] - dB[4], TB.normal.z = dB[11] - dB[8], TB.d = dB[15] - dB[12], TB.normalize()
      }
      static GetTopPlaneToRef(BB, TB) {
        const dB = BB.m;
        TB.normal.x = dB[3] - dB[1], TB.normal.y = dB[7] - dB[5], TB.normal.z = dB[11] - dB[9], TB.d = dB[15] - dB[13], TB.normalize()
      }
      static GetBottomPlaneToRef(BB, TB) {
        const dB = BB.m;
        TB.normal.x = dB[3] + dB[1], TB.normal.y = dB[7] + dB[5], TB.normal.z = dB[11] + dB[9], TB.d = dB[15] + dB[13], TB.normalize()
      }
      static GetPlanesToRef(BB, TB) {
        yB.GetNearPlaneToRef(BB, TB[0]), yB.GetFarPlaneToRef(BB, TB[1]), yB.GetLeftPlaneToRef(BB, TB[2]), yB.GetRightPlaneToRef(BB, TB[3]), yB.GetTopPlaneToRef(BB, TB[4]), yB.GetBottomPlaneToRef(BB, TB[5])
      }
      static IsPointInFrustum(BB, TB) {
        for (let dB = 0; dB < 6; dB++)
          if (TB[dB].dotCoordinate(BB) < 0) return !1;
        return !0
      }
    }
  },
  36690: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => yB
    });
    var VB = dB(36126);
    class yB {
      constructor(BB, TB, dB, yB) {
        this.normal = new VB.p(BB, TB, dB), this.d = yB
      }
      FVB() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new yB(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let BB = this.normal.getHashCode();
        return BB = 397 * BB ^ this.d, BB
      }
      normalize() {
        const BB = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let TB = 0;
        return 0 !== BB && (TB = 1 / BB), this.normal.x *= TB, this.normal.y *= TB, this.normal.z *= TB, this.d *= TB, this
      }
      transform(BB) {
        const TB = yB._TmpMatrix;
        BB.invertToRef(TB);
        const dB = TB.m,
          VB = this.normal.x,
          pB = this.normal.y,
          lB = this.normal.z,
          JB = this.d,
          YB = VB * dB[0] + pB * dB[1] + lB * dB[2] + JB * dB[3],
          gB = VB * dB[4] + pB * dB[5] + lB * dB[6] + JB * dB[7],
          oB = VB * dB[8] + pB * dB[9] + lB * dB[10] + JB * dB[11],
          kB = VB * dB[12] + pB * dB[13] + lB * dB[14] + JB * dB[15];
        return new yB(YB, gB, oB, kB)
      }
      dotCoordinate(BB) {
        return this.normal.x * BB.x + this.normal.y * BB.y + this.normal.z * BB.z + this.d
      }
      copyFromPoints(BB, TB, dB) {
        const VB = TB.x - BB.x,
          yB = TB.y - BB.y,
          pB = TB.z - BB.z,
          lB = dB.x - BB.x,
          JB = dB.y - BB.y,
          YB = dB.z - BB.z,
          gB = yB * YB - pB * JB,
          oB = pB * lB - VB * YB,
          kB = VB * JB - yB * lB,
          LB = Math.sqrt(gB * gB + oB * oB + kB * kB);
        let OB;
        return OB = 0 !== LB ? 1 / LB : 0, this.normal.x = gB * OB, this.normal.y = oB * OB, this.normal.z = kB * OB, this.d = -(this.normal.x * BB.x + this.normal.y * BB.y + this.normal.z * BB.z), this
      }
      isFrontFacingTo(BB, TB) {
        return VB.p.Dot(this.normal, BB) <= TB
      }
      signedDistanceTo(BB) {
        return VB.p.Dot(BB, this.normal) + this.d
      }
      static FromArray(BB) {
        return new yB(BB[0], BB[1], BB[2], BB[3])
      }
      static FromPoints(BB, TB, dB) {
        const VB = new yB(0, 0, 0, 0);
        return VB.copyFromPoints(BB, TB, dB), VB
      }
      static FromPositionAndNormal(BB, TB) {
        const dB = new yB(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(BB, TB, dB)
      }
      static FromPositionAndNormalToRef(BB, TB, dB) {
        return dB.normal.bdB(TB), dB.normal.normalize(), dB.d = -BB.dot(dB.normal), dB
      }
      static SignedDistanceToPlaneFromPositionAndNormal(BB, TB, dB) {
        const yB = -(TB.x * BB.x + TB.y * BB.y + TB.z * BB.z);
        return VB.p.Dot(dB, TB) + yB
      }
    }
    yB._TmpMatrix = VB.b.Identity()
  },
  36119: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      Matrix: () => VB.b,
      Quaternion: () => VB.f,
      RegisterMathVector: () => VB.i,
      TmpVectors: () => VB.j,
      Vector2: () => VB.l,
      RD: () => VB.p,
      Vector4: () => VB.r
    });
    var VB = dB(36126);
    (0, VB.i)()
  },
  37029: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => VB
    });
    class VB {
      constructor(BB, TB, dB, VB) {
        this.x = BB, this.y = TB, this.width = dB, this.height = VB
      }
      toGlobal(BB, TB) {
        return new VB(this.x * BB, this.y * TB, this.width * BB, this.height * TB)
      }
      toGlobalToRef(BB, TB, dB) {
        return dB.x = this.x * BB, dB.y = this.y * TB, dB.width = this.width * BB, dB.height = this.height * TB, this
      }
      clone() {
        return new VB(this.x, this.y, this.width, this.height)
      }
    }
  },
  36822: (BB, TB, dB) => {
    function VB() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (BB => {
        const TB = 16 * Math.random() | 0;
        return ("x" === BB ? TB : 3 & TB | 8).toString(16)
      }))
    }
    dB.d(TB, {
      c: () => VB
    })
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);