/*! For license information please see 7zvlu.233.69ef3850.chunk.js.LICENSE.txt */
export const id = 233;
export const ids = [233, 241];
export const modules = {
  38390: BB => {
    BB.exports = function(BB) {
      return null != BB && null != BB.constructor && "function" === typeof BB.constructor.isBuffer && BB.constructor.isBuffer(BB)
    }
  },
  38364: (BB, jB, zB) => {
    var QB = zB(38372),
      nB = zB(38381),
      dB = zB(38390);
    zB.g.__TYPEDARRAY_POOL || (zB.g.__TYPEDARRAY_POOL = {
      UINT8: nB([32, 0]),
      UINT16: nB([32, 0]),
      UINT32: nB([32, 0]),
      INT8: nB([32, 0]),
      INT16: nB([32, 0]),
      INT32: nB([32, 0]),
      FLOAT: nB([32, 0]),
      DOUBLE: nB([32, 0]),
      DATA: nB([32, 0]),
      UINT8C: nB([32, 0]),
      BUFFER: nB([32, 0])
    });
    var IB = "undefined" !== typeof Uint8ClampedArray,
      NB = zB.g.__TYPEDARRAY_POOL;
    NB.UINT8C || (NB.UINT8C = nB([32, 0])), NB.BUFFER || (NB.BUFFER = nB([32, 0]));
    var uB = NB.DATA,
      UB = NB.BUFFER;

    function aB(BB) {
      if (BB) {
        var jB = BB.length || BB.byteLength,
          zB = QB.log2(jB);
        uB[zB].push(BB)
      }
    }

    function pB(BB) {
      BB = QB.nextPow2(BB);
      var jB = QB.log2(BB),
        zB = uB[jB];
      return zB.length > 0 ? zB.pop() : new ArrayBuffer(BB)
    }

    function rB(BB) {
      return new Uint8Array(pB(BB), 0, BB)
    }

    function sB(BB) {
      return new Uint16Array(pB(2 * BB), 0, BB)
    }

    function JB(BB) {
      return new Uint32Array(pB(4 * BB), 0, BB)
    }

    function mB(BB) {
      return new Int8Array(pB(BB), 0, BB)
    }

    function yB(BB) {
      return new Int16Array(pB(2 * BB), 0, BB)
    }

    function kB(BB) {
      return new Int32Array(pB(4 * BB), 0, BB)
    }

    function GB(BB) {
      return new Float32Array(pB(4 * BB), 0, BB)
    }

    function LB(BB) {
      return new Float64Array(pB(8 * BB), 0, BB)
    }

    function gB(BB) {
      return IB ? new Uint8ClampedArray(pB(BB), 0, BB) : rB(BB)
    }

    function tB(BB) {
      return new DataView(pB(BB), 0, BB)
    }
    jB.free = function(BB) {
      if (dB(BB)) UB[QB.log2(BB.length)].push(BB);
      else {
        if ("[object ArrayBuffer]" !== Object.prototype.toString.call(BB) && (BB = BB.buffer), !BB) return;
        var jB = BB.length || BB.byteLength,
          zB = 0 | QB.log2(jB);
        uB[zB].push(BB)
      }
    }, jB.freeUint8 = jB.freeUint16 = jB.freeUint32 = jB.freeInt8 = jB.freeInt16 = jB.freeInt32 = jB.freeFloat32 = jB.freeFloat = jB.freeFloat64 = jB.freeDouble = jB.freeUint8Clamped = jB.freeDataView = function(BB) {
      aB(BB.buffer)
    }, jB.freeArrayBuffer = aB, jB.freeBuffer = function(BB) {
      UB[QB.log2(BB.length)].push(BB)
    }, jB.malloc = function(BB, jB) {
      if (void 0 === jB || "arraybuffer" === jB) return pB(BB);
      switch (jB) {
        case "uint8":
          return rB(BB);
        case "uint16":
          return sB(BB);
        case "uint32":
          return JB(BB);
        case "int8":
          return mB(BB);
        case "int16":
          return yB(BB);
        case "int32":
          return kB(BB);
        case "float":
        case "float32":
          return GB(BB);
        case "double":
        case "float64":
          return LB(BB);
        case "uint8_clamped":
          return gB(BB);
        case "buffer":
          throw "Buffer not supported";
        case "data":
        case "dataview":
          return tB(BB);
        default:
          return null
      }
      return null
    }, jB.mallocArrayBuffer = pB, jB.mallocUint8 = rB, jB.mallocUint16 = sB, jB.mallocUint32 = JB, jB.mallocInt8 = mB, jB.mallocInt16 = yB, jB.mallocInt32 = kB, jB.mallocFloat32 = jB.mallocFloat = GB, jB.mallocFloat64 = jB.mallocDouble = LB, jB.mallocUint8Clamped = gB, jB.mallocDataView = tB, jB.clearCache = function() {
      for (var BB = 0; BB < 32; ++BB) NB.UINT8[BB].length = 0, NB.UINT16[BB].length = 0, NB.UINT32[BB].length = 0, NB.INT8[BB].length = 0, NB.INT16[BB].length = 0, NB.INT32[BB].length = 0, NB.FLOAT[BB].length = 0, NB.DOUBLE[BB].length = 0, NB.UINT8C[BB].length = 0, uB[BB].length = 0, UB[BB].length = 0
    }
  },
  38372: (BB, jB) => {
    function zB(BB) {
      var jB = 32;
      return (BB &= -BB) && jB--, 65535 & BB && (jB -= 16), 16711935 & BB && (jB -= 8), 252645135 & BB && (jB -= 4), 858993459 & BB && (jB -= 2), 1431655765 & BB && (jB -= 1), jB
    }
    jB.INT_BITS = 32, jB.INT_MAX = 2147483647, jB.INT_MIN = -1 << 31, jB.sign = function(BB) {
      return (BB > 0) - (BB < 0)
    }, jB.abs = function(BB) {
      var jB = BB >> 31;
      return (BB ^ jB) - jB
    }, jB.min = function(BB, jB) {
      return jB ^ (BB ^ jB) & -(BB < jB)
    }, jB.max = function(BB, jB) {
      return BB ^ (BB ^ jB) & -(BB < jB)
    }, jB.isPow2 = function(BB) {
      return !(BB & BB - 1) && !!BB
    }, jB.log2 = function(BB) {
      var jB, zB;
      return jB = (BB > 65535) << 4, jB |= zB = ((BB >>>= jB) > 255) << 3, jB |= zB = ((BB >>>= zB) > 15) << 2, (jB |= zB = ((BB >>>= zB) > 3) << 1) | (BB >>>= zB) >> 1
    }, jB.log10 = function(BB) {
      return BB >= 1e9 ? 9 : BB >= 1e8 ? 8 : BB >= 1e7 ? 7 : BB >= 1e6 ? 6 : BB >= 1e5 ? 5 : BB >= 1e4 ? 4 : BB >= 1e3 ? 3 : BB >= 100 ? 2 : BB >= 10 ? 1 : 0
    }, jB.popCount = function(BB) {
      return 16843009 * ((BB = (858993459 & (BB -= BB >>> 1 & 1431655765)) + (BB >>> 2 & 858993459)) + (BB >>> 4) & 252645135) >>> 24
    }, jB.countTrailingZeros = zB, jB.nextPow2 = function(BB) {
      return BB += 0 === BB, --BB, BB |= BB >>> 1, BB |= BB >>> 2, BB |= BB >>> 4, BB |= BB >>> 8, (BB |= BB >>> 16) + 1
    }, jB.prevPow2 = function(BB) {
      return BB |= BB >>> 1, BB |= BB >>> 2, BB |= BB >>> 4, BB |= BB >>> 8, (BB |= BB >>> 16) - (BB >>> 1)
    }, jB.parity = function(BB) {
      return BB ^= BB >>> 16, BB ^= BB >>> 8, BB ^= BB >>> 4, 27030 >>> (BB &= 15) & 1
    };
    var QB = new Array(256);
    ! function(BB) {
      for (var jB = 0; jB < 256; ++jB) {
        var zB = jB,
          QB = jB,
          nB = 7;
        for (zB >>>= 1; zB; zB >>>= 1) QB <<= 1, QB |= 1 & zB, --nB;
        BB[jB] = QB << nB & 255
      }
    }(QB), jB.reverse = function(BB) {
      return QB[255 & BB] << 24 | QB[BB >>> 8 & 255] << 16 | QB[BB >>> 16 & 255] << 8 | QB[BB >>> 24 & 255]
    }, jB.interleave2 = function(BB, jB) {
      return (BB = 1431655765 & ((BB = 858993459 & ((BB = 252645135 & ((BB = 16711935 & ((BB &= 65535) | BB << 8)) | BB << 4)) | BB << 2)) | BB << 1)) | (jB = 1431655765 & ((jB = 858993459 & ((jB = 252645135 & ((jB = 16711935 & ((jB &= 65535) | jB << 8)) | jB << 4)) | jB << 2)) | jB << 1)) << 1
    }, jB.deinterleave2 = function(BB, jB) {
      return (BB = 65535 & ((BB = 16711935 & ((BB = 252645135 & ((BB = 858993459 & ((BB = BB >>> jB & 1431655765) | BB >>> 1)) | BB >>> 2)) | BB >>> 4)) | BB >>> 16)) << 16 >> 16
    }, jB.interleave3 = function(BB, jB, zB) {
      return BB = 1227133513 & ((BB = 3272356035 & ((BB = 251719695 & ((BB = 4278190335 & ((BB &= 1023) | BB << 16)) | BB << 8)) | BB << 4)) | BB << 2), (BB |= (jB = 1227133513 & ((jB = 3272356035 & ((jB = 251719695 & ((jB = 4278190335 & ((jB &= 1023) | jB << 16)) | jB << 8)) | jB << 4)) | jB << 2)) << 1) | (zB = 1227133513 & ((zB = 3272356035 & ((zB = 251719695 & ((zB = 4278190335 & ((zB &= 1023) | zB << 16)) | zB << 8)) | zB << 4)) | zB << 2)) << 2
    }, jB.deinterleave3 = function(BB, jB) {
      return (BB = 1023 & ((BB = 4278190335 & ((BB = 251719695 & ((BB = 3272356035 & ((BB = BB >>> jB & 1227133513) | BB >>> 2)) | BB >>> 4)) | BB >>> 8)) | BB >>> 16)) << 22 >> 22
    }, jB.nextCombination = function(BB) {
      var jB = BB | BB - 1;
      return jB + 1 | (~jB & -~jB) - 1 >>> zB(BB) + 1
    }
  },
  38358: (BB, jB, zB) => {
    BB.exports = function(BB, jB, zB) {
      switch (arguments.length) {
        case 1:
          return QB = [], UB(nB = BB, nB, aB, !0), QB;
        case 2:
          return "function" === typeof jB ? UB(BB, BB, jB, !0) : function(BB, jB) {
            return QB = [], UB(BB, jB, aB, !1), QB
          }(BB, jB);
        case 3:
          return UB(BB, jB, zB, !1);
        default:
          throw new Error("box-intersect: Invalid arguments")
      }
      var nB
    };
    var QB, nB = zB(38364),
      dB = zB(38396),
      IB = zB(38409);

    function NB(BB, jB) {
      for (var zB = 0; zB < BB; ++zB)
        if (!(jB[zB] <= jB[zB + BB])) return !0;
      return !1
    }

    function uB(BB, jB, zB, QB) {
      for (var nB = 0, dB = 0, IB = 0, uB = BB.length; IB < uB; ++IB) {
        var UB = BB[IB];
        if (!NB(jB, UB)) {
          for (var aB = 0; aB < 2 * jB; ++aB) zB[nB++] = UB[aB];
          QB[dB++] = IB
        }
      }
      return dB
    }

    function UB(BB, jB, zB, QB) {
      var NB = BB.length,
        UB = jB.length;
      if (!(NB <= 0 || UB <= 0)) {
        var aB = BB[0].length >>> 1;
        if (!(aB <= 0)) {
          var pB, rB = nB.mallocDouble(2 * aB * NB),
            sB = nB.mallocInt32(NB);
          if ((NB = uB(BB, aB, rB, sB)) > 0) {
            if (1 === aB && QB) dB.init(NB), pB = dB.sweepComplete(aB, zB, 0, NB, rB, sB, 0, NB, rB, sB);
            else {
              var JB = nB.mallocDouble(2 * aB * UB),
                mB = nB.mallocInt32(UB);
              (UB = uB(jB, aB, JB, mB)) > 0 && (dB.init(NB + UB), pB = 1 === aB ? dB.sweepBipartite(aB, zB, 0, NB, rB, sB, 0, UB, JB, mB) : IB(aB, zB, QB, NB, rB, sB, UB, JB, mB), nB.free(JB), nB.free(mB))
            }
            nB.free(rB), nB.free(sB)
          }
          return pB
        }
      }
    }

    function aB(BB, jB) {
      QB.push([BB, jB])
    }
  },
  38416: (BB, jB) => {
    var zB = "d",
      QB = "ax",
      nB = "fp",
      dB = "es",
      IB = "rs",
      NB = "re",
      uB = "rb",
      UB = "bs",
      aB = "be",
      pB = "bb",
      rB = [zB, QB, "vv", IB, NB, uB, "ri", UB, aB, pB, "bi"];

    function sB(BB) {
      var jB = "bruteForce" + (BB ? "Full" : "Partial"),
        QB = [],
        IB = rB.slice();
      BB || IB.splice(3, 0, nB);
      var NB = ["function " + jB + "(" + IB.join() + "){"];

      function uB(jB, nB) {
        var IB = function(BB, jB, QB) {
          var nB = "bruteForce" + (BB ? "Red" : "Blue") + (jB ? "Flip" : "") + (QB ? "Full" : ""),
            IB = ["function ", nB, "(", rB.join(), "){", "var ", dB, "=2*", zB, ";"],
            NB = "for(var i=rs,rp=es*rs;i<re;++i,rp+=es){var x0=rb[ax+rp],x1=rb[ax+rp+d],xi=ri[i];",
            uB = "for(var j=bs,bp=es*bs;j<be;++j,bp+=es){var y0=bb[ax+bp]," + (QB ? "y1=bb[ax+bp+d]," : "") + "yi=bi[j];";
          return BB ? IB.push(NB, "Q", ":", uB) : IB.push(uB, "Q", ":", NB), QB ? IB.push("if(y1<x0||x1<y0)continue;") : jB ? IB.push("if(y0<=x0||x1<y0)continue;") : IB.push("if(y0<x0||x1<y0)continue;"), IB.push("for(var k=ax+1;k<d;++k){var r0=rb[k+rp],r1=rb[k+d+rp],b0=bb[k+bp],b1=bb[k+d+bp];if(r1<b0||b1<r0)continue Q;}var rv=vv("), jB ? IB.push("yi,xi") : IB.push("xi,yi"), IB.push(");if(rv!==void 0)return rv;}}}"), {
            name: nB,
            code: IB.join("")
          }
        }(jB, nB, BB);
        QB.push(IB.code), NB.push("return " + IB.name + "(" + rB.join() + ");")
      }
      NB.push("if(re-rs>be-bs){"), BB ? (uB(!0, !1), NB.push("}else{"), uB(!1, !1)) : (NB.push("if(fp){"), uB(!0, !0), NB.push("}else{"), uB(!0, !1), NB.push("}}else{if(fp){"), uB(!1, !0), NB.push("}else{"), uB(!1, !1), NB.push("}")), NB.push("}}return " + jB);
      var UB = QB.join("") + NB.join("");
      return new Function(UB)()
    }
    jB.partial = sB(!1), jB.full = sB(!0)
  },
  38409: (BB, jB, zB) => {
    BB.exports = function(BB, jB, zB, dB, aB, fB, oB, HB, DB) {
      ! function(BB, jB) {
        var zB = 8 * nB.log2(jB + 1) * (BB + 1) | 0,
          dB = nB.nextPow2(gB * zB);
        SB.length < dB && (QB.free(SB), SB = QB.mallocInt32(dB));
        var IB = nB.nextPow2(tB * zB);
        MB.length < IB && (QB.free(MB), MB = QB.mallocDouble(IB))
      }(BB, dB + oB);
      var FB, YB = 0,
        VB = 2 * BB;
      EB(YB++, 0, 0, dB, 0, oB, zB ? 16 : 0, -1 / 0, 1 / 0), zB || EB(YB++, 0, 0, oB, 0, dB, 1, -1 / 0, 1 / 0);
      for (; YB > 0;) {
        var hB = (YB -= 1) * gB,
          XB = SB[hB],
          ZB = SB[hB + 1],
          AB = SB[hB + 2],
          TB = SB[hB + 3],
          PB = SB[hB + 4],
          WB = SB[hB + 5],
          eB = YB * tB,
          lB = MB[eB],
          wB = MB[eB + 1],
          xB = 1 & WB,
          KB = !!(16 & WB),
          CB = aB,
          cB = fB,
          bB = HB,
          vB = DB;
        if (xB && (CB = HB, cB = DB, bB = aB, vB = fB), !(2 & WB && ZB >= (AB = yB(BB, XB, ZB, AB, CB, cB, wB))) && !(4 & WB && (ZB = kB(BB, XB, ZB, AB, CB, cB, lB)) >= AB)) {
          var RB = AB - ZB,
            OB = PB - TB;
          if (KB) {
            if (BB * RB * (RB + OB) < sB) {
              if (void 0 !== (FB = uB.scanComplete(BB, XB, jB, ZB, AB, CB, cB, TB, PB, bB, vB))) return FB;
              continue
            }
          } else {
            if (BB * Math.min(RB, OB) < pB) {
              if (void 0 !== (FB = IB(BB, XB, jB, xB, ZB, AB, CB, cB, TB, PB, bB, vB))) return FB;
              continue
            }
            if (BB * RB * OB < rB) {
              if (void 0 !== (FB = uB.scanBipartite(BB, XB, jB, xB, ZB, AB, CB, cB, TB, PB, bB, vB))) return FB;
              continue
            }
          }
          var Bj = JB(BB, XB, ZB, AB, CB, cB, lB, wB);
          if (ZB < Bj)
            if (BB * (Bj - ZB) < pB) {
              if (void 0 !== (FB = NB(BB, XB + 1, jB, ZB, Bj, CB, cB, TB, PB, bB, vB))) return FB
            } else if (XB === BB - 2) {
            if (void 0 !== (FB = xB ? uB.sweepBipartite(BB, jB, TB, PB, bB, vB, ZB, Bj, CB, cB) : uB.sweepBipartite(BB, jB, ZB, Bj, CB, cB, TB, PB, bB, vB))) return FB
          } else EB(YB++, XB + 1, ZB, Bj, TB, PB, xB, -1 / 0, 1 / 0), EB(YB++, XB + 1, TB, PB, ZB, Bj, 1 ^ xB, -1 / 0, 1 / 0);
          if (Bj < AB) {
            var jj = UB(BB, XB, TB, PB, bB, vB),
              zj = bB[VB * jj + XB],
              Qj = mB(BB, XB, jj, PB, bB, vB, zj);
            if (Qj < PB && EB(YB++, XB, Bj, AB, Qj, PB, (4 | xB) + (KB ? 16 : 0), zj, wB), TB < jj && EB(YB++, XB, Bj, AB, TB, jj, (2 | xB) + (KB ? 16 : 0), lB, zj), jj + 1 === Qj) {
              if (void 0 !== (FB = KB ? qB(BB, XB, jB, Bj, AB, CB, cB, jj, bB, vB[jj]) : iB(BB, XB, jB, xB, Bj, AB, CB, cB, jj, bB, vB[jj]))) return FB
            } else if (jj < Qj) {
              var nj;
              if (KB) {
                if (Bj < (nj = GB(BB, XB, Bj, AB, CB, cB, zj))) {
                  var dj = mB(BB, XB, Bj, nj, CB, cB, zj);
                  if (XB === BB - 2) {
                    if (Bj < dj && void 0 !== (FB = uB.sweepComplete(BB, jB, Bj, dj, CB, cB, jj, Qj, bB, vB))) return FB;
                    if (dj < nj && void 0 !== (FB = uB.sweepBipartite(BB, jB, dj, nj, CB, cB, jj, Qj, bB, vB))) return FB
                  } else Bj < dj && EB(YB++, XB + 1, Bj, dj, jj, Qj, 16, -1 / 0, 1 / 0), dj < nj && (EB(YB++, XB + 1, dj, nj, jj, Qj, 0, -1 / 0, 1 / 0), EB(YB++, XB + 1, jj, Qj, dj, nj, 1, -1 / 0, 1 / 0))
                }
              } else Bj < (nj = xB ? LB(BB, XB, Bj, AB, CB, cB, zj) : GB(BB, XB, Bj, AB, CB, cB, zj)) && (XB === BB - 2 ? FB = xB ? uB.sweepBipartite(BB, jB, jj, Qj, bB, vB, Bj, nj, CB, cB) : uB.sweepBipartite(BB, jB, Bj, nj, CB, cB, jj, Qj, bB, vB) : (EB(YB++, XB + 1, Bj, nj, jj, Qj, xB, -1 / 0, 1 / 0), EB(YB++, XB + 1, jj, Qj, Bj, nj, 1 ^ xB, -1 / 0, 1 / 0)))
            }
          }
        }
      }
    };
    var QB = zB(38364),
      nB = zB(38372),
      dB = zB(38416),
      IB = dB.partial,
      NB = dB.full,
      uB = zB(38396),
      UB = zB(38420),
      aB = zB(38422),
      pB = 128,
      rB = 1 << 22,
      sB = 1 << 22,
      JB = aB("!(lo>=p0)&&!(p1>=hi)", ["p0", "p1"]),
      mB = aB("lo===p0", ["p0"]),
      yB = aB("lo<p0", ["p0"]),
      kB = aB("hi<=p0", ["p0"]),
      GB = aB("lo<=p0&&p0<=hi", ["p0"]),
      LB = aB("lo<p0&&p0<=hi", ["p0"]),
      gB = 6,
      tB = 2,
      SB = QB.mallocInt32(1024),
      MB = QB.mallocDouble(1024);

    function EB(BB, jB, zB, QB, nB, dB, IB, NB, uB) {
      var UB = gB * BB;
      SB[UB] = jB, SB[UB + 1] = zB, SB[UB + 2] = QB, SB[UB + 3] = nB, SB[UB + 4] = dB, SB[UB + 5] = IB;
      var aB = tB * BB;
      MB[aB] = NB, MB[aB + 1] = uB
    }

    function iB(BB, jB, zB, QB, nB, dB, IB, NB, uB, UB, aB) {
      var pB = 2 * BB,
        rB = uB * pB,
        sB = UB[rB + jB];
      BB: for (var JB = nB, mB = nB * pB; JB < dB; ++JB, mB += pB) {
        var yB = IB[mB + jB],
          kB = IB[mB + jB + BB];
        if (!(sB < yB || kB < sB) && (!QB || sB !== yB)) {
          for (var GB, LB = NB[JB], gB = jB + 1; gB < BB; ++gB) {
            yB = IB[mB + gB], kB = IB[mB + gB + BB];
            var tB = UB[rB + gB],
              SB = UB[rB + gB + BB];
            if (kB < tB || SB < yB) continue BB
          }
          if (void 0 !== (GB = QB ? zB(aB, LB) : zB(LB, aB))) return GB
        }
      }
    }

    function qB(BB, jB, zB, QB, nB, dB, IB, NB, uB, UB) {
      var aB = 2 * BB,
        pB = NB * aB,
        rB = uB[pB + jB];
      BB: for (var sB = QB, JB = QB * aB; sB < nB; ++sB, JB += aB) {
        var mB = IB[sB];
        if (mB !== UB) {
          var yB = dB[JB + jB],
            kB = dB[JB + jB + BB];
          if (!(rB < yB || kB < rB)) {
            for (var GB = jB + 1; GB < BB; ++GB) {
              yB = dB[JB + GB], kB = dB[JB + GB + BB];
              var LB = uB[pB + GB],
                gB = uB[pB + GB + BB];
              if (kB < LB || gB < yB) continue BB
            }
            var tB = zB(mB, UB);
            if (void 0 !== tB) return tB
          }
        }
      }
    }
  },
  38420: (BB, jB, zB) => {
    BB.exports = function(BB, jB, zB, IB, NB, uB) {
      if (IB <= zB + 1) return zB;
      var UB = zB,
        aB = IB,
        pB = IB + zB >>> 1,
        rB = 2 * BB,
        sB = pB,
        JB = NB[rB * pB + jB];
      for (; UB < aB;) {
        if (aB - UB < nB) {
          dB(BB, jB, UB, aB, NB, uB), JB = NB[rB * pB + jB];
          break
        }
        var mB = aB - UB,
          yB = Math.random() * mB + UB | 0,
          kB = NB[rB * yB + jB],
          GB = Math.random() * mB + UB | 0,
          LB = NB[rB * GB + jB],
          gB = Math.random() * mB + UB | 0,
          tB = NB[rB * gB + jB];
        kB <= LB ? tB >= LB ? (sB = GB, JB = LB) : kB >= tB ? (sB = yB, JB = kB) : (sB = gB, JB = tB) : LB >= tB ? (sB = GB, JB = LB) : tB >= kB ? (sB = yB, JB = kB) : (sB = gB, JB = tB);
        for (var SB = rB * (aB - 1), MB = rB * sB, EB = 0; EB < rB; ++EB, ++SB, ++MB) {
          var iB = NB[SB];
          NB[SB] = NB[MB], NB[MB] = iB
        }
        var qB = uB[aB - 1];
        uB[aB - 1] = uB[sB], uB[sB] = qB;
        for (SB = rB * (aB - 1), MB = rB * (sB = QB(BB, jB, UB, aB - 1, NB, uB, JB)), EB = 0; EB < rB; ++EB, ++SB, ++MB) {
          iB = NB[SB];
          NB[SB] = NB[MB], NB[MB] = iB
        }
        qB = uB[aB - 1];
        if (uB[aB - 1] = uB[sB], uB[sB] = qB, pB < sB) {
          for (aB = sB - 1; UB < aB && NB[rB * (aB - 1) + jB] === JB;) aB -= 1;
          aB += 1
        } else {
          if (!(sB < pB)) break;
          for (UB = sB + 1; UB < aB && NB[rB * UB + jB] === JB;) UB += 1
        }
      }
      return QB(BB, jB, zB, pB, NB, uB, NB[rB * pB + jB])
    };
    var QB = zB(38422)("lo<p0", ["p0"]),
      nB = 8;

    function dB(BB, jB, zB, QB, nB, dB) {
      for (var IB = 2 * BB, NB = IB * (zB + 1) + jB, uB = zB + 1; uB < QB; ++uB, NB += IB)
        for (var UB = nB[NB], aB = uB, pB = IB * (uB - 1); aB > zB && nB[pB + jB] > UB; --aB, pB -= IB) {
          for (var rB = pB, sB = pB + IB, JB = 0; JB < IB; ++JB, ++rB, ++sB) {
            var mB = nB[rB];
            nB[rB] = nB[sB], nB[sB] = mB
          }
          var yB = dB[aB];
          dB[aB] = dB[aB - 1], dB[aB - 1] = yB
        }
    }
  },
  38422: BB => {
    BB.exports = function(BB, zB) {
      var QB = "abcdef".split("").concat(zB),
        nB = [];
      BB.indexOf("lo") >= 0 && nB.push("lo=e[k+n]");
      BB.indexOf("hi") >= 0 && nB.push("hi=e[k+o]");
      return QB.push(jB.replace("_", nB.join()).replace("$", BB)), Function.apply(void 0, QB)
    };
    var jB = "for(var j=2*a,k=j*c,l=k,m=c,n=b,o=a+b,p=c;d>p;++p,k+=j){var _;if($)if(m===p)m+=1,l+=j;else{for(var s=0;j>s;++s){var t=e[k+s];e[k+s]=e[l],e[l++]=t}var u=f[p];f[p]=f[m],f[m++]=u}}return m"
  },
  38403: BB => {
    BB.exports = function(BB, QB) {
      QB <= 4 * jB ? zB(0, QB - 1, BB) : UB(0, QB - 1, BB)
    };
    var jB = 32;

    function zB(BB, jB, zB) {
      for (var QB = 2 * (BB + 1), nB = BB + 1; nB <= jB; ++nB) {
        for (var dB = zB[QB++], IB = zB[QB++], NB = nB, uB = QB - 2; NB-- > BB;) {
          var UB = zB[uB - 2],
            aB = zB[uB - 1];
          if (UB < dB) break;
          if (UB === dB && aB < IB) break;
          zB[uB] = UB, zB[uB + 1] = aB, uB -= 2
        }
        zB[uB] = dB, zB[uB + 1] = IB
      }
    }

    function QB(BB, jB, zB) {
      jB *= 2;
      var QB = zB[BB *= 2],
        nB = zB[BB + 1];
      zB[BB] = zB[jB], zB[BB + 1] = zB[jB + 1], zB[jB] = QB, zB[jB + 1] = nB
    }

    function nB(BB, jB, zB) {
      jB *= 2, zB[BB *= 2] = zB[jB], zB[BB + 1] = zB[jB + 1]
    }

    function dB(BB, jB, zB, QB) {
      jB *= 2, zB *= 2;
      var nB = QB[BB *= 2],
        dB = QB[BB + 1];
      QB[BB] = QB[jB], QB[BB + 1] = QB[jB + 1], QB[jB] = QB[zB], QB[jB + 1] = QB[zB + 1], QB[zB] = nB, QB[zB + 1] = dB
    }

    function IB(BB, jB, zB, QB, nB) {
      jB *= 2, nB[BB *= 2] = nB[jB], nB[jB] = zB, nB[BB + 1] = nB[jB + 1], nB[jB + 1] = QB
    }

    function NB(BB, jB, zB) {
      jB *= 2;
      var QB = zB[BB *= 2],
        nB = zB[jB];
      return !(QB < nB) && (QB !== nB || zB[BB + 1] > zB[jB + 1])
    }

    function uB(BB, jB, zB, QB) {
      var nB = QB[BB *= 2];
      return nB < jB || nB === jB && QB[BB + 1] < zB
    }

    function UB(BB, aB, pB) {
      var rB = (aB - BB + 1) / 6 | 0,
        sB = BB + rB,
        JB = aB - rB,
        mB = BB + aB >> 1,
        yB = mB - rB,
        kB = mB + rB,
        GB = sB,
        LB = yB,
        gB = mB,
        tB = kB,
        SB = JB,
        MB = BB + 1,
        EB = aB - 1,
        iB = 0;
      NB(GB, LB, pB) && (iB = GB, GB = LB, LB = iB), NB(tB, SB, pB) && (iB = tB, tB = SB, SB = iB), NB(GB, gB, pB) && (iB = GB, GB = gB, gB = iB), NB(LB, gB, pB) && (iB = LB, LB = gB, gB = iB), NB(GB, tB, pB) && (iB = GB, GB = tB, tB = iB), NB(gB, tB, pB) && (iB = gB, gB = tB, tB = iB), NB(LB, SB, pB) && (iB = LB, LB = SB, SB = iB), NB(LB, gB, pB) && (iB = LB, LB = gB, gB = iB), NB(tB, SB, pB) && (iB = tB, tB = SB, SB = iB);
      for (var qB = pB[2 * LB], fB = pB[2 * LB + 1], oB = pB[2 * tB], HB = pB[2 * tB + 1], DB = 2 * GB, FB = 2 * gB, YB = 2 * SB, VB = 2 * sB, hB = 2 * mB, XB = 2 * JB, ZB = 0; ZB < 2; ++ZB) {
        var AB = pB[DB + ZB],
          TB = pB[FB + ZB],
          PB = pB[YB + ZB];
        pB[VB + ZB] = AB, pB[hB + ZB] = TB, pB[XB + ZB] = PB
      }
      nB(yB, BB, pB), nB(kB, aB, pB);
      for (var WB = MB; WB <= EB; ++WB)
        if (uB(WB, qB, fB, pB)) WB !== MB && QB(WB, MB, pB), ++MB;
        else if (!uB(WB, oB, HB, pB))
        for (;;) {
          if (uB(EB, oB, HB, pB)) {
            uB(EB, qB, fB, pB) ? (dB(WB, MB, EB, pB), ++MB, --EB) : (QB(WB, EB, pB), --EB);
            break
          }
          if (--EB < WB) break
        }
      IB(BB, MB - 1, qB, fB, pB), IB(aB, EB + 1, oB, HB, pB), MB - 2 - BB <= jB ? zB(BB, MB - 2, pB) : UB(BB, MB - 2, pB), aB - (EB + 2) <= jB ? zB(EB + 2, aB, pB) : UB(EB + 2, aB, pB), EB - MB <= jB ? zB(MB, EB, pB) : UB(MB, EB, pB)
    }
  },
  38396: (BB, jB, zB) => {
    BB.exports = {
      init: function(BB) {
        var jB = nB.nextPow2(BB);
        uB.length < jB && (QB.free(uB), uB = QB.mallocInt32(jB));
        UB.length < jB && (QB.free(UB), UB = QB.mallocInt32(jB));
        aB.length < jB && (QB.free(aB), aB = QB.mallocInt32(jB));
        pB.length < jB && (QB.free(pB), pB = QB.mallocInt32(jB));
        rB.length < jB && (QB.free(rB), rB = QB.mallocInt32(jB));
        sB.length < jB && (QB.free(sB), sB = QB.mallocInt32(jB));
        var zB = 8 * jB;
        JB.length < zB && (QB.free(JB), JB = QB.mallocDouble(zB))
      },
      sweepBipartite: function(BB, jB, zB, QB, nB, NB, rB, sB, kB, GB) {
        for (var LB = 0, gB = 2 * BB, tB = BB - 1, SB = gB - 1, MB = zB; MB < QB; ++MB) {
          var EB = NB[MB],
            iB = gB * MB;
          JB[LB++] = nB[iB + tB], JB[LB++] = -(EB + 1), JB[LB++] = nB[iB + SB], JB[LB++] = EB
        }
        for (MB = rB; MB < sB; ++MB) {
          EB = GB[MB] + IB;
          var qB = gB * MB;
          JB[LB++] = kB[qB + tB], JB[LB++] = -EB, JB[LB++] = kB[qB + SB], JB[LB++] = EB
        }
        var fB = LB >>> 1;
        dB(JB, fB);
        var oB = 0,
          HB = 0;
        for (MB = 0; MB < fB; ++MB) {
          var DB = 0 | JB[2 * MB + 1];
          if (DB >= IB) mB(aB, pB, HB--, DB = DB - IB | 0);
          else if (DB >= 0) mB(uB, UB, oB--, DB);
          else if (DB <= -IB) {
            DB = -DB - IB | 0;
            for (var FB = 0; FB < oB; ++FB) {
              if (void 0 !== (YB = jB(uB[FB], DB))) return YB
            }
            yB(aB, pB, HB++, DB)
          } else {
            DB = -DB - 1 | 0;
            for (FB = 0; FB < HB; ++FB) {
              var YB;
              if (void 0 !== (YB = jB(DB, aB[FB]))) return YB
            }
            yB(uB, UB, oB++, DB)
          }
        }
      },
      sweepComplete: function(BB, jB, zB, QB, nB, IB, NB, kB, GB, LB) {
        for (var gB = 0, tB = 2 * BB, SB = BB - 1, MB = tB - 1, EB = zB; EB < QB; ++EB) {
          var iB = IB[EB] + 1 << 1,
            qB = tB * EB;
          JB[gB++] = nB[qB + SB], JB[gB++] = -iB, JB[gB++] = nB[qB + MB], JB[gB++] = iB
        }
        for (EB = NB; EB < kB; ++EB) {
          iB = LB[EB] + 1 << 1;
          var fB = tB * EB;
          JB[gB++] = GB[fB + SB], JB[gB++] = 1 | -iB, JB[gB++] = GB[fB + MB], JB[gB++] = 1 | iB
        }
        var oB = gB >>> 1;
        dB(JB, oB);
        var HB = 0,
          DB = 0,
          FB = 0;
        for (EB = 0; EB < oB; ++EB) {
          var YB = 0 | JB[2 * EB + 1],
            VB = 1 & YB;
          if (EB < oB - 1 && YB >> 1 === JB[2 * EB + 3] >> 1 && (VB = 2, EB += 1), YB < 0) {
            for (var hB = -(YB >> 1) - 1, XB = 0; XB < FB; ++XB) {
              if (void 0 !== (ZB = jB(rB[XB], hB))) return ZB
            }
            if (0 !== VB)
              for (XB = 0; XB < HB; ++XB) {
                if (void 0 !== (ZB = jB(uB[XB], hB))) return ZB
              }
            if (1 !== VB)
              for (XB = 0; XB < DB; ++XB) {
                var ZB;
                if (void 0 !== (ZB = jB(aB[XB], hB))) return ZB
              }
            0 === VB ? yB(uB, UB, HB++, hB) : 1 === VB ? yB(aB, pB, DB++, hB) : 2 === VB && yB(rB, sB, FB++, hB)
          } else {
            hB = (YB >> 1) - 1;
            0 === VB ? mB(uB, UB, HB--, hB) : 1 === VB ? mB(aB, pB, DB--, hB) : 2 === VB && mB(rB, sB, FB--, hB)
          }
        }
      },
      scanBipartite: function(BB, jB, zB, QB, nB, NB, aB, pB, rB, sB, kB, GB) {
        var LB = 0,
          gB = 2 * BB,
          tB = jB,
          SB = jB + BB,
          MB = 1,
          EB = 1;
        QB ? EB = IB : MB = IB;
        for (var iB = nB; iB < NB; ++iB) {
          var qB = iB + MB,
            fB = gB * iB;
          JB[LB++] = aB[fB + tB], JB[LB++] = -qB, JB[LB++] = aB[fB + SB], JB[LB++] = qB
        }
        for (iB = rB; iB < sB; ++iB) {
          qB = iB + EB;
          var oB = gB * iB;
          JB[LB++] = kB[oB + tB], JB[LB++] = -qB
        }
        var HB = LB >>> 1;
        dB(JB, HB);
        var DB = 0;
        for (iB = 0; iB < HB; ++iB) {
          var FB = 0 | JB[2 * iB + 1];
          if (FB < 0) {
            var YB = !1;
            if ((qB = -FB) >= IB ? (YB = !QB, qB -= IB) : (YB = !!QB, qB -= 1), YB) yB(uB, UB, DB++, qB);
            else {
              var VB = GB[qB],
                hB = gB * qB,
                XB = kB[hB + jB + 1],
                ZB = kB[hB + jB + 1 + BB];
              BB: for (var AB = 0; AB < DB; ++AB) {
                var TB = uB[AB],
                  PB = gB * TB;
                if (!(ZB < aB[PB + jB + 1] || aB[PB + jB + 1 + BB] < XB)) {
                  for (var WB = jB + 2; WB < BB; ++WB)
                    if (kB[hB + WB + BB] < aB[PB + WB] || aB[PB + WB + BB] < kB[hB + WB]) continue BB;
                  var eB, lB = pB[TB];
                  if (void 0 !== (eB = QB ? zB(VB, lB) : zB(lB, VB))) return eB
                }
              }
            }
          } else mB(uB, UB, DB--, FB - MB)
        }
      },
      scanComplete: function(BB, jB, zB, QB, nB, NB, UB, aB, pB, rB, sB) {
        for (var mB = 0, yB = 2 * BB, kB = jB, GB = jB + BB, LB = QB; LB < nB; ++LB) {
          var gB = LB + IB,
            tB = yB * LB;
          JB[mB++] = NB[tB + kB], JB[mB++] = -gB, JB[mB++] = NB[tB + GB], JB[mB++] = gB
        }
        for (LB = aB; LB < pB; ++LB) {
          gB = LB + 1;
          var SB = yB * LB;
          JB[mB++] = rB[SB + kB], JB[mB++] = -gB
        }
        var MB = mB >>> 1;
        dB(JB, MB);
        var EB = 0;
        for (LB = 0; LB < MB; ++LB) {
          var iB = 0 | JB[2 * LB + 1];
          if (iB < 0) {
            if ((gB = -iB) >= IB) uB[EB++] = gB - IB;
            else {
              var qB = sB[gB -= 1],
                fB = yB * gB,
                oB = rB[fB + jB + 1],
                HB = rB[fB + jB + 1 + BB];
              BB: for (var DB = 0; DB < EB; ++DB) {
                var FB = uB[DB],
                  YB = UB[FB];
                if (YB === qB) break;
                var VB = yB * FB;
                if (!(HB < NB[VB + jB + 1] || NB[VB + jB + 1 + BB] < oB)) {
                  for (var hB = jB + 2; hB < BB; ++hB)
                    if (rB[fB + hB + BB] < NB[VB + hB] || NB[VB + hB + BB] < rB[fB + hB]) continue BB;
                  var XB = zB(YB, qB);
                  if (void 0 !== XB) return XB
                }
              }
            }
          } else {
            for (gB = iB - IB, DB = EB - 1; DB >= 0; --DB)
              if (uB[DB] === gB) {
                for (hB = DB + 1; hB < EB; ++hB) uB[hB - 1] = uB[hB];
                break
              }-- EB
          }
        }
      }
    };
    var QB = zB(38364),
      nB = zB(38372),
      dB = zB(38403),
      IB = 1 << 28,
      NB = 1024,
      uB = QB.mallocInt32(NB),
      UB = QB.mallocInt32(NB),
      aB = QB.mallocInt32(NB),
      pB = QB.mallocInt32(NB),
      rB = QB.mallocInt32(NB),
      sB = QB.mallocInt32(NB),
      JB = QB.mallocDouble(8192);

    function mB(BB, jB, zB, QB) {
      var nB = jB[QB],
        dB = BB[zB - 1];
      BB[nB] = dB, jB[dB] = nB
    }

    function yB(BB, jB, zB, QB) {
      BB[zB] = QB, jB[QB] = zB
    }
  },
  38381: BB => {
    function jB(BB, zB, QB) {
      var nB = 0 | BB[QB];
      if (nB <= 0) return [];
      var dB, IB = new Array(nB);
      if (QB === BB.length - 1)
        for (dB = 0; dB < nB; ++dB) IB[dB] = zB;
      else
        for (dB = 0; dB < nB; ++dB) IB[dB] = jB(BB, zB, QB + 1);
      return IB
    }
    BB.exports = function(BB, zB) {
      switch ("undefined" === typeof zB && (zB = 0), typeof BB) {
        case "number":
          if (BB > 0) return function(BB, jB) {
            var zB, QB;
            for (zB = new Array(BB), QB = 0; QB < BB; ++QB) zB[QB] = jB;
            return zB
          }(0 | BB, zB);
          break;
        case "object":
          if ("number" === typeof BB.length) return jB(BB, zB, 0)
      }
      return []
    }
  },
  38316: (BB, jB, zB) => {
    BB.exports = function() {
      var BB = this;
      this.components = {}, this.comps = this.components;
      var jB = this.components,
        zB = 1,
        nB = {},
        dB = [],
        IB = [],
        NB = {
          timeout: !1,
          removals: [],
          multiComps: []
        };

      function uB(BB, zB) {
        var QB = jB[zB],
          dB = nB[zB],
          IB = dB.hash[BB];
        IB && (dB.remove(BB), QB.ZD && (QB.multi ? (IB.forEach((jB => {
          jB && QB.ZD(BB, jB)
        })), IB.length = 0) : QB.ZD(BB, IB)), NB.removals.push(dB), UB())
      }

      function UB() {
        NB.timeout || (NB.timeout = !0, setTimeout(aB, 1))
      }

      function aB() {
        NB.timeout = !1, pB()
      }

      function pB() {
        NB.multiComps.length && function(BB) {
          for (var jB = 0; jB < BB.length; jB++) {
            var {
              entID: zB,
              data: QB
            } = BB[jB], nB = QB.hash[zB];
            if (nB) {
              for (var dB = 0; dB < nB.length; dB++) nB[dB] || (nB.splice(dB, 1), dB--);
              0 === nB.length && (QB.remove(zB), NB.removals.push(QB))
            }
          }
          BB.length = 0
        }(NB.multiComps), NB.removals.length && function(BB) {
          for (var jB = 0; jB < BB.length; jB++) {
            BB[jB].flush()
          }
          BB.length = 0
        }(NB.removals)
      }
      this.Fm = nB, this._systems = dB, this._renderSystems = IB, this.mw = function(jB) {
        var QB = zB++;
        return Array.isArray(jB) && jB.forEach((jB => BB.hY(QB, jB))), QB
      }, this.deleteEntity = function(jB) {
        return Object.keys(nB).forEach((BB => {
          nB[BB].hash[jB] && uB(jB, BB)
        })), BB
      }, this.VjB = function(BB) {
        if (!BB) throw new Error("Missing component definition");
        var zB = BB.name;
        if (!zB) throw new Error("Component definition must have a name property.");
        if ("string" !== typeof zB) throw new Error("Component name must be a string.");
        if ("" === zB) throw new Error("Component name must be a non-empty string.");
        if (nB[zB]) throw new Error(`Component ${zB} already exists.`);
        var NB = {};
        return NB.name = zB, NB.multi = !!BB.multi, NB.order = isNaN(BB.order) ? 99 : BB.order, NB.stateConstructor = BB.stateConstructor || null, NB.state = BB.state || {}, NB.xG = BB.xG || null, NB.ZD = BB.ZD || null, NB.system = BB.system || null, NB.dL = BB.dL || null, jB[zB] = NB, nB[zB] = new QB, nB[zB]._pendingMultiCleanup = !1, nB[zB]._multiCleanupIDs = NB.multi ? [] : null, NB.system && (dB.push(zB), dB.sort(((BB, zB) => jB[BB].order - jB[zB].order))), NB.dL && (IB.push(zB), IB.sort(((BB, zB) => jB[BB].order - jB[zB].order))), zB
      }, this.overwriteComponent = function(BB, zB) {
        var QB = jB[BB];
        if (!QB) throw new Error(`Unknown component: ${BB}`);
        if (!zB) throw new Error("Missing component definition");
        if (QB.name !== zB.name) throw new Error("Overwriting component must use the same name property.");
        var NB = {};
        NB.name = BB, NB.multi = !!zB.multi, NB.order = isNaN(zB.order) ? 99 : zB.order, NB.state = zB.state || {}, NB.xG = zB.xG || null, NB.ZD = zB.ZD || null, NB.system = zB.system || null, NB.dL = zB.dL || null, jB[BB] = NB, nB[BB]._pendingMultiCleanup = !1, nB[BB]._multiCleanupIDs = NB.multi ? [] : null;
        var uB = dB.indexOf(BB);
        NB.system && uB < 0 && dB.push(BB), !NB.system && uB >= 0 && dB.splice(uB, 1), dB.sort(((BB, zB) => jB[BB].order - jB[zB].order));
        var UB = IB.indexOf(BB);
        NB.dL && UB < 0 && IB.push(BB), !NB.dL && UB >= 0 && IB.splice(UB, 1), IB.sort(((BB, zB) => jB[BB].order - jB[zB].order));
        var aB = NB.state;
        return this.FY(BB).forEach((BB => {
          for (var jB in aB) jB in BB || (BB[jB] = aB[jB]);
          NB.xG && NB.xG(BB.VY, BB)
        })), BB
      }, this.deleteComponent = function(zB) {
        var QB = nB[zB];
        if (!QB) throw new Error(`Unknown component: ${zB}`);
        QB.flush(), QB.list.forEach((BB => {
          BB && uB(BB.VY || BB[0].VY, zB)
        }));
        var NB = dB.indexOf(zB),
          UB = IB.indexOf(zB);
        return NB > -1 && dB.splice(NB, 1), UB > -1 && IB.splice(UB, 1), nB[zB].dispose(), delete nB[zB], delete jB[zB], BB
      }, this.hY = function(BB, zB, QB) {
        var dB, IB = jB[zB],
          NB = nB[zB];
        if (!NB) throw new Error(`Unknown component: ${zB}.`);
        if (NB.hash[BB] && !IB.multi) throw new Error(`Entity ${BB} already has component: ${zB}.`);
        if (IB.stateConstructor) {
          if (!(dB = new IB.stateConstructor).hasOwnProperty("VY")) throw new Error(`Component ${IB.name} stateConstructor type does not have property __id`);
          Object.assign(dB, IB.state, QB)
        } else dB = {
          VY: BB,
          ...IB.state,
          ...QB
        };
        if (dB.VY = BB, IB.multi) {
          var uB = NB.hash[BB];
          uB || (uB = [], NB.add(BB, uB)), uB.push(dB)
        } else NB.add(BB, dB);
        return IB.xG && IB.xG(BB, dB), this
      }, this.HBB = function(BB, jB) {
        var zB = nB[jB];
        if (!zB) throw new Error(`Unknown component: ${jB}.`);
        return !!zB.hash[BB]
      }, this.ZY = function(jB, zB) {
        if (!nB[zB]) throw new Error(`Unknown component: ${zB}.`);
        return uB(jB, zB), BB
      }, this.getState = function(BB, jB) {
        var zB = nB[jB];
        if (!zB) throw new Error(`Unknown component: ${jB}.`);
        return zB.hash[BB]
      }, this.FY = function(BB) {
        var jB = nB[BB];
        if (!jB) throw new Error(`Unknown component: ${BB}.`);
        return pB(), jB.list
      }, this.sjB = function(BB) {
        if (!nB[BB]) throw new Error(`Unknown component: ${BB}.`);
        var jB = nB[BB].hash;
        return BB => jB[BB]
      }, this.LjB = function(BB) {
        if (!nB[BB]) throw new Error(`Unknown component: ${BB}.`);
        var jB = nB[BB].hash;
        return BB => !!jB[BB]
      }, this.vp = function(zB) {
        pB();
        for (var QB = 0; QB < dB.length; QB++) {
          var IB = dB[QB],
            NB = jB[IB],
            uB = nB[IB];
          NB.system(zB, uB.list), pB()
        }
        return BB
      }, this.render = function(zB) {
        pB();
        for (var QB = 0; QB < IB.length; QB++) {
          var dB = IB[QB],
            NB = jB[dB],
            uB = nB[dB];
          NB.dL(zB, uB.list), pB()
        }
        return BB
      }, this.removeMultiComponent = function(zB, QB, dB) {
        var IB = jB[QB],
          uB = nB[QB];
        if (!uB) throw new Error(`Unknown component: ${QB}.`);
        if (!IB.multi) throw new Error("removeMultiComponent called on non-multi component");
        return function(BB, jB, zB, QB) {
          var nB = zB.hash[BB];
          if (nB) {
            var dB = nB[QB];
            dB && (nB[QB] = null, jB.ZD && jB.ZD(BB, dB), NB.multiComps.push({
              entID: BB,
              data: zB
            }), UB())
          }
        }(zB, IB, uB, dB), BB
      }
    };
    var QB = zB(38323)
  },
  38323: BB => {
    function jB(BB, jB) {
      var zB = BB._map[jB];
      if (delete BB.hash[jB], delete BB._map[jB], zB === BB.list.length - 1) BB.list.pop(), BB._idList.pop();
      else {
        var QB = BB.list.pop();
        BB.list[zB] = QB;
        var nB = BB._idList.pop();
        BB._idList[zB] = nB, BB._map[nB] = zB
      }
    }
    BB.exports = class {
      constructor() {
        this.list = [], this.hash = {}, this._map = {}, this._idList = [], this._pendingRemovals = []
      }
      add(BB, jB) {
        if ("number" === typeof this._map[BB]) {
          var zB = this._map[BB];
          this.hash[BB] = jB, this.list[zB] = jB, this._idList[zB] = BB
        } else this._map[BB] = this.list.length, this.hash[BB] = jB, this.list.push(jB), this._idList.push(BB)
      }
      remove(BB) {
        var jB = this._map[BB];
        this.hash[BB] = null, this.list[jB] = null, this._pendingRemovals.push(BB)
      }
      dispose() {
        this.list = null, this.hash = null, this._map = null, this._idList = null, this._pendingRemovals.length = 0
      }
      flush() {
        for (var BB = 0; BB < this._pendingRemovals.length; BB++) {
          var zB = this._pendingRemovals[BB];
          null === this.hash[zB] && jB(this, zB)
        }
        this._pendingRemovals.length = 0
      }
    }
  },
  38137: (BB, jB, zB) => {
    BB = zB.nmd(BB);
    var QB = "__lodash_hash_undefined__",
      nB = 9007199254740991,
      dB = "[object Arguments]",
      IB = "[object Boolean]",
      NB = "[object Date]",
      uB = "[object Function]",
      UB = "[object GeneratorFunction]",
      aB = "[object Map]",
      pB = "[object Number]",
      rB = "[object Object]",
      sB = "[object Promise]",
      JB = "[object RegExp]",
      mB = "[object Set]",
      yB = "[object String]",
      kB = "[object Symbol]",
      GB = "[object WeakMap]",
      LB = "[object ArrayBuffer]",
      gB = "[object DataView]",
      tB = "[object Float32Array]",
      SB = "[object Float64Array]",
      MB = "[object Int8Array]",
      EB = "[object Int16Array]",
      iB = "[object Int32Array]",
      qB = "[object Uint8Array]",
      fB = "[object Uint8ClampedArray]",
      oB = "[object Uint16Array]",
      HB = "[object Uint32Array]",
      DB = /\w*$/,
      FB = /^\[object .+?Constructor\]$/,
      YB = /^(?:0|[1-9]\d*)$/,
      VB = {};
    VB[dB] = VB["[object Array]"] = VB[LB] = VB[gB] = VB[IB] = VB[NB] = VB[tB] = VB[SB] = VB[MB] = VB[EB] = VB[iB] = VB[aB] = VB[pB] = VB[rB] = VB[JB] = VB[mB] = VB[yB] = VB[kB] = VB[qB] = VB[fB] = VB[oB] = VB[HB] = !0, VB["[object Error]"] = VB[uB] = VB[GB] = !1;
    var hB = "object" == typeof zB.g && zB.g && zB.g.Object === Object && zB.g,
      XB = "object" == typeof self && self && self.Object === Object && self,
      ZB = hB || XB || Function("return this")(),
      AB = jB && !jB.nodeType && jB,
      TB = AB && BB && !BB.nodeType && BB,
      PB = TB && TB.exports === AB;

    function WB(BB, jB) {
      return BB.set(jB[0], jB[1]), BB
    }

    function eB(BB, jB) {
      return BB.add(jB), BB
    }

    function lB(BB, jB, zB, QB) {
      var nB = -1,
        dB = BB ? BB.length : 0;
      for (QB && dB && (zB = BB[++nB]); ++nB < dB;) zB = jB(zB, BB[nB], nB, BB);
      return zB
    }

    function wB(BB) {
      var jB = !1;
      if (null != BB && "function" != typeof BB.toString) try {
        jB = !!(BB + "")
      } catch (zB) {}
      return jB
    }

    function xB(BB) {
      var jB = -1,
        zB = Array(BB.size);
      return BB.forEach((function(BB, QB) {
        zB[++jB] = [QB, BB]
      })), zB
    }

    function KB(BB, jB) {
      return function(zB) {
        return BB(jB(zB))
      }
    }

    function CB(BB) {
      var jB = -1,
        zB = Array(BB.size);
      return BB.forEach((function(BB) {
        zB[++jB] = BB
      })), zB
    }
    var cB = Array.prototype,
      bB = Function.prototype,
      vB = Object.prototype,
      RB = ZB["__core-js_shared__"],
      OB = function() {
        var BB = /[^.]+$/.exec(RB && RB.keys && RB.keys.IE_PROTO || "");
        return BB ? "Symbol(src)_1." + BB : ""
      }(),
      Bj = bB.toString,
      jj = vB.hasOwnProperty,
      zj = vB.toString,
      Qj = RegExp("^" + Bj.call(jj).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
      nj = PB ? ZB.oJ : void 0,
      dj = ZB.Symbol,
      Ij = ZB.Uint8Array,
      Nj = KB(Object.getPrototypeOf, Object),
      uj = Object.create,
      Uj = vB.propertyIsEnumerable,
      aj = cB.splice,
      pj = Object.getOwnPropertySymbols,
      rj = nj ? nj.isBuffer : void 0,
      sj = KB(Object.keys, Object),
      Jj = Pj(ZB, "DataView"),
      mj = Pj(ZB, "Map"),
      yj = Pj(ZB, "Promise"),
      kj = Pj(ZB, "Set"),
      Gj = Pj(ZB, "WeakMap"),
      Lj = Pj(Object, "create"),
      gj = xj(Jj),
      tj = xj(mj),
      Sj = xj(yj),
      Mj = xj(kj),
      Ej = xj(Gj),
      ij = dj ? dj.prototype : void 0,
      qj = ij ? ij.valueOf : void 0;

    function fj(BB) {
      var jB = -1,
        zB = BB ? BB.length : 0;
      for (this.clear(); ++jB < zB;) {
        var QB = BB[jB];
        this.set(QB[0], QB[1])
      }
    }

    function oj(BB) {
      var jB = -1,
        zB = BB ? BB.length : 0;
      for (this.clear(); ++jB < zB;) {
        var QB = BB[jB];
        this.set(QB[0], QB[1])
      }
    }

    function Hj(BB) {
      var jB = -1,
        zB = BB ? BB.length : 0;
      for (this.clear(); ++jB < zB;) {
        var QB = BB[jB];
        this.set(QB[0], QB[1])
      }
    }

    function Dj(BB) {
      this.__data__ = new oj(BB)
    }

    function Fj(BB, jB) {
      var zB = Cj(BB) || function(BB) {
          return function(BB) {
            return function(BB) {
              return !!BB && "object" == typeof BB
            }(BB) && cj(BB)
          }(BB) && jj.call(BB, "callee") && (!Uj.call(BB, "callee") || zj.call(BB) == dB)
        }(BB) ? function(BB, jB) {
          for (var zB = -1, QB = Array(BB); ++zB < BB;) QB[zB] = jB(zB);
          return QB
        }(BB.length, String) : [],
        QB = zB.length,
        nB = !!QB;
      for (var IB in BB) !jB && !jj.call(BB, IB) || nB && ("length" == IB || lj(IB, QB)) || zB.push(IB);
      return zB
    }

    function Yj(BB, jB, zB) {
      var QB = BB[jB];
      jj.call(BB, jB) && Kj(QB, zB) && (void 0 !== zB || jB in BB) || (BB[jB] = zB)
    }

    function Vj(BB, jB) {
      for (var zB = BB.length; zB--;)
        if (Kj(BB[zB][0], jB)) return zB;
      return -1
    }

    function hj(BB, jB, zB, QB, nB, sB, GB) {
      var FB;
      if (QB && (FB = sB ? QB(BB, nB, sB, GB) : QB(BB)), void 0 !== FB) return FB;
      if (!Rj(BB)) return BB;
      var YB = Cj(BB);
      if (YB) {
        if (FB = function(BB) {
            var jB = BB.length,
              zB = BB.constructor(jB);
            jB && "string" == typeof BB[0] && jj.call(BB, "index") && (zB.index = BB.index, zB.input = BB.input);
            return zB
          }(BB), !jB) return function(BB, jB) {
          var zB = -1,
            QB = BB.length;
          jB || (jB = Array(QB));
          for (; ++zB < QB;) jB[zB] = BB[zB];
          return jB
        }(BB, FB)
      } else {
        var hB = ej(BB),
          XB = hB == uB || hB == UB;
        if (bj(BB)) return function(BB, jB) {
          if (jB) return BB.slice();
          var zB = new BB.constructor(BB.length);
          return BB.copy(zB), zB
        }(BB, jB);
        if (hB == rB || hB == dB || XB && !sB) {
          if (wB(BB)) return sB ? BB : {};
          if (FB = function(BB) {
              return "function" != typeof BB.constructor || wj(BB) ? {} : (jB = Nj(BB), Rj(jB) ? uj(jB) : {});
              var jB
            }(XB ? {} : BB), !jB) return function(BB, jB) {
            return Aj(BB, Wj(BB), jB)
          }(BB, function(BB, jB) {
            return BB && Aj(jB, Oj(jB), BB)
          }(FB, BB))
        } else {
          if (!VB[hB]) return sB ? BB : {};
          FB = function(BB, jB, zB, QB) {
            var nB = BB.constructor;
            switch (jB) {
              case LB:
                return Zj(BB);
              case IB:
              case NB:
                return new nB(+BB);
              case gB:
                return function(BB, jB) {
                  var zB = jB ? Zj(BB.buffer) : BB.buffer;
                  return new BB.constructor(zB, BB.byteOffset, BB.byteLength)
                }(BB, QB);
              case tB:
              case SB:
              case MB:
              case EB:
              case iB:
              case qB:
              case fB:
              case oB:
              case HB:
                return function(BB, jB) {
                  var zB = jB ? Zj(BB.buffer) : BB.buffer;
                  return new BB.constructor(zB, BB.byteOffset, BB.length)
                }(BB, QB);
              case aB:
                return function(BB, jB, zB) {
                  var QB = jB ? zB(xB(BB), !0) : xB(BB);
                  return lB(QB, WB, new BB.constructor)
                }(BB, QB, zB);
              case pB:
              case yB:
                return new nB(BB);
              case JB:
                return function(BB) {
                  var jB = new BB.constructor(BB.source, DB.exec(BB));
                  return jB.lastIndex = BB.lastIndex, jB
                }(BB);
              case mB:
                return function(BB, jB, zB) {
                  var QB = jB ? zB(CB(BB), !0) : CB(BB);
                  return lB(QB, eB, new BB.constructor)
                }(BB, QB, zB);
              case kB:
                return dB = BB, qj ? Object(qj.call(dB)) : {}
            }
            var dB
          }(BB, hB, hj, jB)
        }
      }
      GB || (GB = new Dj);
      var ZB = GB.get(BB);
      if (ZB) return ZB;
      if (GB.set(BB, FB), !YB) var AB = zB ? function(BB) {
        return function(BB, jB, zB) {
          var QB = jB(BB);
          return Cj(BB) ? QB : function(BB, jB) {
            for (var zB = -1, QB = jB.length, nB = BB.length; ++zB < QB;) BB[nB + zB] = jB[zB];
            return BB
          }(QB, zB(BB))
        }(BB, Oj, Wj)
      }(BB) : Oj(BB);
      return function(BB, jB) {
        for (var zB = -1, QB = BB ? BB.length : 0; ++zB < QB && !1 !== jB(BB[zB], zB, BB););
      }(AB || BB, (function(nB, dB) {
        AB && (nB = BB[dB = nB]), Yj(FB, dB, hj(nB, jB, zB, QB, dB, BB, GB))
      })), FB
    }

    function Xj(BB) {
      return !(!Rj(BB) || (jB = BB, OB && OB in jB)) && (vj(BB) || wB(BB) ? Qj : FB).test(xj(BB));
      var jB
    }

    function Zj(BB) {
      var jB = new BB.constructor(BB.byteLength);
      return new Ij(jB).set(new Ij(BB)), jB
    }

    function Aj(BB, jB, zB, QB) {
      zB || (zB = {});
      for (var nB = -1, dB = jB.length; ++nB < dB;) {
        var IB = jB[nB],
          NB = QB ? QB(zB[IB], BB[IB], IB, zB, BB) : void 0;
        Yj(zB, IB, void 0 === NB ? BB[IB] : NB)
      }
      return zB
    }

    function Tj(BB, jB) {
      var zB = BB.__data__;
      return function(BB) {
        var jB = typeof BB;
        return "string" == jB || "number" == jB || "symbol" == jB || "boolean" == jB ? "__proto__" !== BB : null === BB
      }(jB) ? zB["string" == typeof jB ? "string" : "hash"] : zB.map
    }

    function Pj(BB, jB) {
      var zB = function(BB, jB) {
        return null == BB ? void 0 : BB[jB]
      }(BB, jB);
      return Xj(zB) ? zB : void 0
    }
    fj.prototype.clear = function() {
      this.__data__ = Lj ? Lj(null) : {}
    }, fj.prototype.delete = function(BB) {
      return this.has(BB) && delete this.__data__[BB]
    }, fj.prototype.get = function(BB) {
      var jB = this.__data__;
      if (Lj) {
        var zB = jB[BB];
        return zB === QB ? void 0 : zB
      }
      return jj.call(jB, BB) ? jB[BB] : void 0
    }, fj.prototype.has = function(BB) {
      var jB = this.__data__;
      return Lj ? void 0 !== jB[BB] : jj.call(jB, BB)
    }, fj.prototype.set = function(BB, jB) {
      return this.__data__[BB] = Lj && void 0 === jB ? QB : jB, this
    }, oj.prototype.clear = function() {
      this.__data__ = []
    }, oj.prototype.delete = function(BB) {
      var jB = this.__data__,
        zB = Vj(jB, BB);
      return !(zB < 0) && (zB == jB.length - 1 ? jB.pop() : aj.call(jB, zB, 1), !0)
    }, oj.prototype.get = function(BB) {
      var jB = this.__data__,
        zB = Vj(jB, BB);
      return zB < 0 ? void 0 : jB[zB][1]
    }, oj.prototype.has = function(BB) {
      return Vj(this.__data__, BB) > -1
    }, oj.prototype.set = function(BB, jB) {
      var zB = this.__data__,
        QB = Vj(zB, BB);
      return QB < 0 ? zB.push([BB, jB]) : zB[QB][1] = jB, this
    }, Hj.prototype.clear = function() {
      this.__data__ = {
        hash: new fj,
        map: new(mj || oj),
        string: new fj
      }
    }, Hj.prototype.delete = function(BB) {
      return Tj(this, BB).delete(BB)
    }, Hj.prototype.get = function(BB) {
      return Tj(this, BB).get(BB)
    }, Hj.prototype.has = function(BB) {
      return Tj(this, BB).has(BB)
    }, Hj.prototype.set = function(BB, jB) {
      return Tj(this, BB).set(BB, jB), this
    }, Dj.prototype.clear = function() {
      this.__data__ = new oj
    }, Dj.prototype.delete = function(BB) {
      return this.__data__.delete(BB)
    }, Dj.prototype.get = function(BB) {
      return this.__data__.get(BB)
    }, Dj.prototype.has = function(BB) {
      return this.__data__.has(BB)
    }, Dj.prototype.set = function(BB, jB) {
      var zB = this.__data__;
      if (zB instanceof oj) {
        var QB = zB.__data__;
        if (!mj || QB.length < 199) return QB.push([BB, jB]), this;
        zB = this.__data__ = new Hj(QB)
      }
      return zB.set(BB, jB), this
    };
    var Wj = pj ? KB(pj, Object) : function() {
        return []
      },
      ej = function(BB) {
        return zj.call(BB)
      };

    function lj(BB, jB) {
      return !!(jB = null == jB ? nB : jB) && ("number" == typeof BB || YB.test(BB)) && BB > -1 && BB % 1 == 0 && BB < jB
    }

    function wj(BB) {
      var jB = BB && BB.constructor;
      return BB === ("function" == typeof jB && jB.prototype || vB)
    }

    function xj(BB) {
      if (null != BB) {
        try {
          return Bj.call(BB)
        } catch (jB) {}
        try {
          return BB + ""
        } catch (jB) {}
      }
      return ""
    }

    function Kj(BB, jB) {
      return BB === jB || BB !== BB && jB !== jB
    }(Jj && ej(new Jj(new ArrayBuffer(1))) != gB || mj && ej(new mj) != aB || yj && ej(yj.resolve()) != sB || kj && ej(new kj) != mB || Gj && ej(new Gj) != GB) && (ej = function(BB) {
      var jB = zj.call(BB),
        zB = jB == rB ? BB.constructor : void 0,
        QB = zB ? xj(zB) : void 0;
      if (QB) switch (QB) {
        case gj:
          return gB;
        case tj:
          return aB;
        case Sj:
          return sB;
        case Mj:
          return mB;
        case Ej:
          return GB
      }
      return jB
    });
    var Cj = Array.isArray;

    function cj(BB) {
      return null != BB && function(BB) {
        return "number" == typeof BB && BB > -1 && BB % 1 == 0 && BB <= nB
      }(BB.length) && !vj(BB)
    }
    var bj = rj || function() {
      return !1
    };

    function vj(BB) {
      var jB = Rj(BB) ? zj.call(BB) : "";
      return jB == uB || jB == UB
    }

    function Rj(BB) {
      var jB = typeof BB;
      return !!BB && ("object" == jB || "function" == jB)
    }

    function Oj(BB) {
      return cj(BB) ? Fj(BB) : function(BB) {
        if (!wj(BB)) return sj(BB);
        var jB = [];
        for (var zB in Object(BB)) jj.call(BB, zB) && "constructor" != zB && jB.push(zB);
        return jB
      }(BB)
    }
    BB.exports = function(BB) {
      return hj(BB, !0, !0)
    }
  },
  38536: BB => {
    function jB(BB, jB, zB) {
      for (var QB = BB.length, nB = -1 / 0, dB = 1 / 0, IB = 0; IB < QB; IB++) {
        var NB = (zB[0][IB] - BB[IB]) / jB[IB],
          uB = (zB[1][IB] - BB[IB]) / jB[IB];
        if (NB > uB) {
          var UB = NB;
          NB = uB, uB = UB
        }
        if (uB < nB || NB > dB) return 1 / 0;
        NB > nB && (nB = NB), uB < dB && (dB = uB)
      }
      return nB > dB ? 1 / 0 : nB
    }
    BB.exports = function(BB, zB, QB, nB) {
      var dB = jB(zB, QB, nB);
      if (dB === 1 / 0) BB = null;
      else {
        BB = BB || [];
        for (var IB = 0; IB < zB.length; IB++) BB[IB] = zB[IB] + QB[IB] * dB
      }
      return BB
    }, BB.exports.distance = jB
  },
  37821: (BB, jB, zB) => {
    var QB = zB(37826);

    function nB(BB) {
      for (var jB, zB, nB = 0, dB = BB.length, IB = 0; IB < BB.length;) {
        for (jB = BB[IB], zB = 0; IB < dB && BB[IB] === jB;) ++IB, ++zB;
        nB += QB.log2(zB) / 7 | 0, nB += QB.log2(jB >>> 0) / 7 | 0, nB += 2
      }
      return nB
    }
    jB.size = nB, jB.encode = function(BB, jB) {
      jB || (jB = new Uint8Array(nB(BB)));
      for (var zB, QB, dB = 0, IB = jB.length, NB = 0; NB < BB.length;) {
        for (zB = BB[NB], QB = 0; NB < BB.length && BB[NB] === zB;) ++NB, ++QB;
        for (; dB < IB && QB >= 128;) jB[dB++] = 128 + (127 & QB), QB >>>= 7;
        if (dB >= IB) throw new Error("RLE buffer overflow");
        for (jB[dB++] = QB, zB >>>= 0; dB < IB && zB >= 128;) jB[dB++] = 128 + (127 & zB), zB >>>= 7;
        if (dB >= IB) throw new Error("RLE buffer overflow");
        jB[dB++] = zB
      }
      return jB
    }, jB.decode = function(BB, jB) {
      for (var zB, QB, nB, dB, IB = jB.length, NB = BB.length, uB = 0, UB = 0; UB < NB;) {
        for (zB = 0, QB = 0; UB < NB && BB[UB] >= 128;) zB += (127 & BB[UB++]) << QB, QB += 7;
        if (zB += BB[UB++] << QB, UB >= NB) throw new Error("RLE buffer underrun");
        if (uB + zB > IB) throw new Error("Chunk buffer overflow");
        for (nB = 0, QB = 0; UB < NB && BB[UB] >= 128;) nB += (127 & BB[UB++]) << QB, QB += 7;
        if (UB >= NB) throw new Error("RLE buffer underrun");
        for (nB += BB[UB++] << QB, dB = 0; dB < zB; ++dB) jB[uB++] = nB
      }
      return jB
    }
  },
  37826: (BB, jB) => {
    function zB(BB) {
      var jB = 32;
      return (BB &= -BB) && jB--, 65535 & BB && (jB -= 16), 16711935 & BB && (jB -= 8), 252645135 & BB && (jB -= 4), 858993459 & BB && (jB -= 2), 1431655765 & BB && (jB -= 1), jB
    }
    jB.INT_BITS = 32, jB.INT_MAX = 2147483647, jB.INT_MIN = -1 << 31, jB.sign = function(BB) {
      return (BB > 0) - (BB < 0)
    }, jB.abs = function(BB) {
      var jB = BB >> 31;
      return (BB ^ jB) - jB
    }, jB.min = function(BB, jB) {
      return jB ^ (BB ^ jB) & -(BB < jB)
    }, jB.max = function(BB, jB) {
      return BB ^ (BB ^ jB) & -(BB < jB)
    }, jB.isPow2 = function(BB) {
      return !(BB & BB - 1) && !!BB
    }, jB.log2 = function(BB) {
      var jB, zB;
      return jB = (BB > 65535) << 4, jB |= zB = ((BB >>>= jB) > 255) << 3, jB |= zB = ((BB >>>= zB) > 15) << 2, (jB |= zB = ((BB >>>= zB) > 3) << 1) | (BB >>>= zB) >> 1
    }, jB.log10 = function(BB) {
      return BB >= 1e9 ? 9 : BB >= 1e8 ? 8 : BB >= 1e7 ? 7 : BB >= 1e6 ? 6 : BB >= 1e5 ? 5 : BB >= 1e4 ? 4 : BB >= 1e3 ? 3 : BB >= 100 ? 2 : BB >= 10 ? 1 : 0
    }, jB.popCount = function(BB) {
      return 16843009 * ((BB = (858993459 & (BB -= BB >>> 1 & 1431655765)) + (BB >>> 2 & 858993459)) + (BB >>> 4) & 252645135) >>> 24
    }, jB.countTrailingZeros = zB, jB.nextPow2 = function(BB) {
      return BB += 0 === BB, --BB, BB |= BB >>> 1, BB |= BB >>> 2, BB |= BB >>> 4, BB |= BB >>> 8, (BB |= BB >>> 16) + 1
    }, jB.prevPow2 = function(BB) {
      return BB |= BB >>> 1, BB |= BB >>> 2, BB |= BB >>> 4, BB |= BB >>> 8, (BB |= BB >>> 16) - (BB >>> 1)
    }, jB.parity = function(BB) {
      return BB ^= BB >>> 16, BB ^= BB >>> 8, BB ^= BB >>> 4, 27030 >>> (BB &= 15) & 1
    };
    var QB = new Array(256);
    ! function(BB) {
      for (var jB = 0; jB < 256; ++jB) {
        var zB = jB,
          QB = jB,
          nB = 7;
        for (zB >>>= 1; zB; zB >>>= 1) QB <<= 1, QB |= 1 & zB, --nB;
        BB[jB] = QB << nB & 255
      }
    }(QB), jB.reverse = function(BB) {
      return QB[255 & BB] << 24 | QB[BB >>> 8 & 255] << 16 | QB[BB >>> 16 & 255] << 8 | QB[BB >>> 24 & 255]
    }, jB.interleave2 = function(BB, jB) {
      return (BB = 1431655765 & ((BB = 858993459 & ((BB = 252645135 & ((BB = 16711935 & ((BB &= 65535) | BB << 8)) | BB << 4)) | BB << 2)) | BB << 1)) | (jB = 1431655765 & ((jB = 858993459 & ((jB = 252645135 & ((jB = 16711935 & ((jB &= 65535) | jB << 8)) | jB << 4)) | jB << 2)) | jB << 1)) << 1
    }, jB.deinterleave2 = function(BB, jB) {
      return (BB = 65535 & ((BB = 16711935 & ((BB = 252645135 & ((BB = 858993459 & ((BB = BB >>> jB & 1431655765) | BB >>> 1)) | BB >>> 2)) | BB >>> 4)) | BB >>> 16)) << 16 >> 16
    }, jB.interleave3 = function(BB, jB, zB) {
      return BB = 1227133513 & ((BB = 3272356035 & ((BB = 251719695 & ((BB = 4278190335 & ((BB &= 1023) | BB << 16)) | BB << 8)) | BB << 4)) | BB << 2), (BB |= (jB = 1227133513 & ((jB = 3272356035 & ((jB = 251719695 & ((jB = 4278190335 & ((jB &= 1023) | jB << 16)) | jB << 8)) | jB << 4)) | jB << 2)) << 1) | (zB = 1227133513 & ((zB = 3272356035 & ((zB = 251719695 & ((zB = 4278190335 & ((zB &= 1023) | zB << 16)) | zB << 8)) | zB << 4)) | zB << 2)) << 2
    }, jB.deinterleave3 = function(BB, jB) {
      return (BB = 1023 & ((BB = 4278190335 & ((BB = 251719695 & ((BB = 3272356035 & ((BB = BB >>> jB & 1227133513) | BB >>> 2)) | BB >>> 4)) | BB >>> 8)) | BB >>> 16)) << 22 >> 22
    }, jB.nextCombination = function(BB) {
      var jB = BB | BB - 1;
      return jB + 1 | (~jB & -~jB) - 1 >>> zB(BB) + 1
    }
  },
  37372: (BB, jB, zB) => {
    zB.d(jB, {
      Color3: () => QB.d,
      c: () => QB.g
    });
    var QB = zB(37379);
    (0, QB.k)()
  },
  37865: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => nB
    });
    var QB = zB(37869);
    class nB {
      static GetPlanes(BB) {
        const jB = [];
        for (let zB = 0; zB < 6; zB++) jB.push(new QB.c(0, 0, 0, 0));
        return nB.GetPlanesToRef(BB, jB), jB
      }
      static GetNearPlaneToRef(BB, jB) {
        const zB = BB.m;
        jB.normal.x = zB[3] + zB[2], jB.normal.y = zB[7] + zB[6], jB.normal.z = zB[11] + zB[10], jB.d = zB[15] + zB[14], jB.normalize()
      }
      static GetFarPlaneToRef(BB, jB) {
        const zB = BB.m;
        jB.normal.x = zB[3] - zB[2], jB.normal.y = zB[7] - zB[6], jB.normal.z = zB[11] - zB[10], jB.d = zB[15] - zB[14], jB.normalize()
      }
      static GetLeftPlaneToRef(BB, jB) {
        const zB = BB.m;
        jB.normal.x = zB[3] + zB[0], jB.normal.y = zB[7] + zB[4], jB.normal.z = zB[11] + zB[8], jB.d = zB[15] + zB[12], jB.normalize()
      }
      static GetRightPlaneToRef(BB, jB) {
        const zB = BB.m;
        jB.normal.x = zB[3] - zB[0], jB.normal.y = zB[7] - zB[4], jB.normal.z = zB[11] - zB[8], jB.d = zB[15] - zB[12], jB.normalize()
      }
      static GetTopPlaneToRef(BB, jB) {
        const zB = BB.m;
        jB.normal.x = zB[3] - zB[1], jB.normal.y = zB[7] - zB[5], jB.normal.z = zB[11] - zB[9], jB.d = zB[15] - zB[13], jB.normalize()
      }
      static GetBottomPlaneToRef(BB, jB) {
        const zB = BB.m;
        jB.normal.x = zB[3] + zB[1], jB.normal.y = zB[7] + zB[5], jB.normal.z = zB[11] + zB[9], jB.d = zB[15] + zB[13], jB.normalize()
      }
      static GetPlanesToRef(BB, jB) {
        nB.GetNearPlaneToRef(BB, jB[0]), nB.GetFarPlaneToRef(BB, jB[1]), nB.GetLeftPlaneToRef(BB, jB[2]), nB.GetRightPlaneToRef(BB, jB[3]), nB.GetTopPlaneToRef(BB, jB[4]), nB.GetBottomPlaneToRef(BB, jB[5])
      }
      static IsPointInFrustum(BB, jB) {
        for (let zB = 0; zB < 6; zB++)
          if (jB[zB].dotCoordinate(BB) < 0) return !1;
        return !0
      }
    }
  },
  37869: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => nB
    });
    var QB = zB(37171);
    class nB {
      constructor(BB, jB, zB, nB) {
        this.normal = new QB.m(BB, jB, zB), this.d = nB
      }
      nQB() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new nB(this.normal.x, this.normal.y, this.normal.z, this.d)
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
        let jB = 0;
        return 0 !== BB && (jB = 1 / BB), this.normal.x *= jB, this.normal.y *= jB, this.normal.z *= jB, this.d *= jB, this
      }
      transform(BB) {
        const jB = nB._TmpMatrix;
        BB.invertToRef(jB);
        const zB = jB.m,
          QB = this.normal.x,
          dB = this.normal.y,
          IB = this.normal.z,
          NB = this.d,
          uB = QB * zB[0] + dB * zB[1] + IB * zB[2] + NB * zB[3],
          UB = QB * zB[4] + dB * zB[5] + IB * zB[6] + NB * zB[7],
          aB = QB * zB[8] + dB * zB[9] + IB * zB[10] + NB * zB[11],
          pB = QB * zB[12] + dB * zB[13] + IB * zB[14] + NB * zB[15];
        return new nB(uB, UB, aB, pB)
      }
      dotCoordinate(BB) {
        return this.normal.x * BB.x + this.normal.y * BB.y + this.normal.z * BB.z + this.d
      }
      copyFromPoints(BB, jB, zB) {
        const QB = jB.x - BB.x,
          nB = jB.y - BB.y,
          dB = jB.z - BB.z,
          IB = zB.x - BB.x,
          NB = zB.y - BB.y,
          uB = zB.z - BB.z,
          UB = nB * uB - dB * NB,
          aB = dB * IB - QB * uB,
          pB = QB * NB - nB * IB,
          rB = Math.sqrt(UB * UB + aB * aB + pB * pB);
        let sB;
        return sB = 0 !== rB ? 1 / rB : 0, this.normal.x = UB * sB, this.normal.y = aB * sB, this.normal.z = pB * sB, this.d = -(this.normal.x * BB.x + this.normal.y * BB.y + this.normal.z * BB.z), this
      }
      isFrontFacingTo(BB, jB) {
        return QB.m.Dot(this.normal, BB) <= jB
      }
      signedDistanceTo(BB) {
        return QB.m.Dot(BB, this.normal) + this.d
      }
      static FromArray(BB) {
        return new nB(BB[0], BB[1], BB[2], BB[3])
      }
      static FromPoints(BB, jB, zB) {
        const QB = new nB(0, 0, 0, 0);
        return QB.copyFromPoints(BB, jB, zB), QB
      }
      static FromPositionAndNormal(BB, jB) {
        const zB = new nB(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(BB, jB, zB)
      }
      static FromPositionAndNormalToRef(BB, jB, zB) {
        return zB.normal.jH(jB), zB.normal.normalize(), zB.d = -BB.dot(zB.normal), zB
      }
      static SignedDistanceToPlaneFromPositionAndNormal(BB, jB, zB) {
        const nB = -(jB.x * BB.x + jB.y * BB.y + jB.z * BB.z);
        return QB.m.Dot(zB, jB) + nB
      }
    }
    nB._TmpMatrix = QB.c.Identity()
  },
  37166: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      Matrix: () => QB.c,
      Quaternion: () => QB.d,
      RegisterMathVector: () => QB.e,
      TmpVectors: () => QB.h,
      Vector2: () => QB.i,
      KJ: () => QB.m,
      Vector4: () => QB.n
    });
    var QB = zB(37171);
    (0, QB.e)()
  },
  38170: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => QB
    });
    class QB {
      constructor(BB, jB, zB, QB) {
        this.x = BB, this.y = jB, this.width = zB, this.height = QB
      }
      toGlobal(BB, jB) {
        return new QB(this.x * BB, this.y * jB, this.width * BB, this.height * jB)
      }
      toGlobalToRef(BB, jB, zB) {
        return zB.x = this.x * BB, zB.y = this.y * jB, zB.width = this.width * BB, zB.height = this.height * jB, this
      }
      clone() {
        return new QB(this.x, this.y, this.width, this.height)
      }
    }
  },
  37987: (BB, jB, zB) => {
    function QB() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (BB => {
        const jB = 16 * Math.random() | 0;
        return ("x" === BB ? jB : 3 & jB | 8).toString(16)
      }))
    }
    zB.d(jB, {
      d: () => QB
    })
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);