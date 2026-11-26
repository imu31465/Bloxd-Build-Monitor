/*! For license information please see gw4e3a.255.68409c84.chunk.js.LICENSE.txt */
export const id = 255;
export const ids = [255, 262];
export const modules = {
  38964: BB => {
    BB.exports = function(BB) {
      return null != BB && null != BB.constructor && "function" === typeof BB.constructor.isBuffer && BB.constructor.isBuffer(BB)
    }
  },
  38946: (BB, OB, GB) => {
    var YB = GB(38954),
      DB = GB(38958),
      QB = GB(38964);
    GB.g.__TYPEDARRAY_POOL || (GB.g.__TYPEDARRAY_POOL = {
      UINT8: DB([32, 0]),
      UINT16: DB([32, 0]),
      UINT32: DB([32, 0]),
      INT8: DB([32, 0]),
      INT16: DB([32, 0]),
      INT32: DB([32, 0]),
      FLOAT: DB([32, 0]),
      DOUBLE: DB([32, 0]),
      DATA: DB([32, 0]),
      UINT8C: DB([32, 0]),
      BUFFER: DB([32, 0])
    });
    var oB = "undefined" !== typeof Uint8ClampedArray,
      jB = GB.g.__TYPEDARRAY_POOL;
    jB.UINT8C || (jB.UINT8C = DB([32, 0])), jB.BUFFER || (jB.BUFFER = DB([32, 0]));
    var yB = jB.DATA,
      JB = jB.BUFFER;

    function MB(BB) {
      if (BB) {
        var OB = BB.length || BB.byteLength,
          GB = YB.log2(OB);
        yB[GB].push(BB)
      }
    }

    function PB(BB) {
      BB = YB.nextPow2(BB);
      var OB = YB.log2(BB),
        GB = yB[OB];
      return GB.length > 0 ? GB.pop() : new ArrayBuffer(BB)
    }

    function zB(BB) {
      return new Uint8Array(PB(BB), 0, BB)
    }

    function lB(BB) {
      return new Uint16Array(PB(2 * BB), 0, BB)
    }

    function pB(BB) {
      return new Uint32Array(PB(4 * BB), 0, BB)
    }

    function qB(BB) {
      return new Int8Array(PB(BB), 0, BB)
    }

    function ZB(BB) {
      return new Int16Array(PB(2 * BB), 0, BB)
    }

    function NB(BB) {
      return new Int32Array(PB(4 * BB), 0, BB)
    }

    function RB(BB) {
      return new Float32Array(PB(4 * BB), 0, BB)
    }

    function WB(BB) {
      return new Float64Array(PB(8 * BB), 0, BB)
    }

    function AB(BB) {
      return oB ? new Uint8ClampedArray(PB(BB), 0, BB) : zB(BB)
    }

    function VB(BB) {
      return new DataView(PB(BB), 0, BB)
    }
    OB.free = function(BB) {
      if (QB(BB)) JB[YB.log2(BB.length)].push(BB);
      else {
        if ("[object ArrayBuffer]" !== Object.prototype.toString.call(BB) && (BB = BB.buffer), !BB) return;
        var OB = BB.length || BB.byteLength,
          GB = 0 | YB.log2(OB);
        yB[GB].push(BB)
      }
    }, OB.freeUint8 = OB.freeUint16 = OB.freeUint32 = OB.freeInt8 = OB.freeInt16 = OB.freeInt32 = OB.freeFloat32 = OB.freeFloat = OB.freeFloat64 = OB.freeDouble = OB.freeUint8Clamped = OB.freeDataView = function(BB) {
      MB(BB.buffer)
    }, OB.freeArrayBuffer = MB, OB.freeBuffer = function(BB) {
      JB[YB.log2(BB.length)].push(BB)
    }, OB.malloc = function(BB, OB) {
      if (void 0 === OB || "arraybuffer" === OB) return PB(BB);
      switch (OB) {
        case "uint8":
          return zB(BB);
        case "uint16":
          return lB(BB);
        case "uint32":
          return pB(BB);
        case "int8":
          return qB(BB);
        case "int16":
          return ZB(BB);
        case "int32":
          return NB(BB);
        case "float":
        case "float32":
          return RB(BB);
        case "double":
        case "float64":
          return WB(BB);
        case "uint8_clamped":
          return AB(BB);
        case "buffer":
          throw "Buffer not supported";
        case "data":
        case "dataview":
          return VB(BB);
        default:
          return null
      }
      return null
    }, OB.mallocArrayBuffer = PB, OB.mallocUint8 = zB, OB.mallocUint16 = lB, OB.mallocUint32 = pB, OB.mallocInt8 = qB, OB.mallocInt16 = ZB, OB.mallocInt32 = NB, OB.mallocFloat32 = OB.mallocFloat = RB, OB.mallocFloat64 = OB.mallocDouble = WB, OB.mallocUint8Clamped = AB, OB.mallocDataView = VB, OB.clearCache = function() {
      for (var BB = 0; BB < 32; ++BB) jB.UINT8[BB].length = 0, jB.UINT16[BB].length = 0, jB.UINT32[BB].length = 0, jB.INT8[BB].length = 0, jB.INT16[BB].length = 0, jB.INT32[BB].length = 0, jB.FLOAT[BB].length = 0, jB.DOUBLE[BB].length = 0, jB.UINT8C[BB].length = 0, yB[BB].length = 0, JB[BB].length = 0
    }
  },
  38954: (BB, OB) => {
    function GB(BB) {
      var OB = 32;
      return (BB &= -BB) && OB--, 65535 & BB && (OB -= 16), 16711935 & BB && (OB -= 8), 252645135 & BB && (OB -= 4), 858993459 & BB && (OB -= 2), 1431655765 & BB && (OB -= 1), OB
    }
    OB.INT_BITS = 32, OB.INT_MAX = 2147483647, OB.INT_MIN = -1 << 31, OB.sign = function(BB) {
      return (BB > 0) - (BB < 0)
    }, OB.abs = function(BB) {
      var OB = BB >> 31;
      return (BB ^ OB) - OB
    }, OB.min = function(BB, OB) {
      return OB ^ (BB ^ OB) & -(BB < OB)
    }, OB.max = function(BB, OB) {
      return BB ^ (BB ^ OB) & -(BB < OB)
    }, OB.isPow2 = function(BB) {
      return !(BB & BB - 1) && !!BB
    }, OB.log2 = function(BB) {
      var OB, GB;
      return OB = (BB > 65535) << 4, OB |= GB = ((BB >>>= OB) > 255) << 3, OB |= GB = ((BB >>>= GB) > 15) << 2, (OB |= GB = ((BB >>>= GB) > 3) << 1) | (BB >>>= GB) >> 1
    }, OB.log10 = function(BB) {
      return BB >= 1e9 ? 9 : BB >= 1e8 ? 8 : BB >= 1e7 ? 7 : BB >= 1e6 ? 6 : BB >= 1e5 ? 5 : BB >= 1e4 ? 4 : BB >= 1e3 ? 3 : BB >= 100 ? 2 : BB >= 10 ? 1 : 0
    }, OB.popCount = function(BB) {
      return 16843009 * ((BB = (858993459 & (BB -= BB >>> 1 & 1431655765)) + (BB >>> 2 & 858993459)) + (BB >>> 4) & 252645135) >>> 24
    }, OB.countTrailingZeros = GB, OB.nextPow2 = function(BB) {
      return BB += 0 === BB, --BB, BB |= BB >>> 1, BB |= BB >>> 2, BB |= BB >>> 4, BB |= BB >>> 8, (BB |= BB >>> 16) + 1
    }, OB.prevPow2 = function(BB) {
      return BB |= BB >>> 1, BB |= BB >>> 2, BB |= BB >>> 4, BB |= BB >>> 8, (BB |= BB >>> 16) - (BB >>> 1)
    }, OB.parity = function(BB) {
      return BB ^= BB >>> 16, BB ^= BB >>> 8, BB ^= BB >>> 4, 27030 >>> (BB &= 15) & 1
    };
    var YB = new Array(256);
    ! function(BB) {
      for (var OB = 0; OB < 256; ++OB) {
        var GB = OB,
          YB = OB,
          DB = 7;
        for (GB >>>= 1; GB; GB >>>= 1) YB <<= 1, YB |= 1 & GB, --DB;
        BB[OB] = YB << DB & 255
      }
    }(YB), OB.reverse = function(BB) {
      return YB[255 & BB] << 24 | YB[BB >>> 8 & 255] << 16 | YB[BB >>> 16 & 255] << 8 | YB[BB >>> 24 & 255]
    }, OB.interleave2 = function(BB, OB) {
      return (BB = 1431655765 & ((BB = 858993459 & ((BB = 252645135 & ((BB = 16711935 & ((BB &= 65535) | BB << 8)) | BB << 4)) | BB << 2)) | BB << 1)) | (OB = 1431655765 & ((OB = 858993459 & ((OB = 252645135 & ((OB = 16711935 & ((OB &= 65535) | OB << 8)) | OB << 4)) | OB << 2)) | OB << 1)) << 1
    }, OB.deinterleave2 = function(BB, OB) {
      return (BB = 65535 & ((BB = 16711935 & ((BB = 252645135 & ((BB = 858993459 & ((BB = BB >>> OB & 1431655765) | BB >>> 1)) | BB >>> 2)) | BB >>> 4)) | BB >>> 16)) << 16 >> 16
    }, OB.interleave3 = function(BB, OB, GB) {
      return BB = 1227133513 & ((BB = 3272356035 & ((BB = 251719695 & ((BB = 4278190335 & ((BB &= 1023) | BB << 16)) | BB << 8)) | BB << 4)) | BB << 2), (BB |= (OB = 1227133513 & ((OB = 3272356035 & ((OB = 251719695 & ((OB = 4278190335 & ((OB &= 1023) | OB << 16)) | OB << 8)) | OB << 4)) | OB << 2)) << 1) | (GB = 1227133513 & ((GB = 3272356035 & ((GB = 251719695 & ((GB = 4278190335 & ((GB &= 1023) | GB << 16)) | GB << 8)) | GB << 4)) | GB << 2)) << 2
    }, OB.deinterleave3 = function(BB, OB) {
      return (BB = 1023 & ((BB = 4278190335 & ((BB = 251719695 & ((BB = 3272356035 & ((BB = BB >>> OB & 1227133513) | BB >>> 2)) | BB >>> 4)) | BB >>> 8)) | BB >>> 16)) << 22 >> 22
    }, OB.nextCombination = function(BB) {
      var OB = BB | BB - 1;
      return OB + 1 | (~OB & -~OB) - 1 >>> GB(BB) + 1
    }
  },
  38942: (BB, OB, GB) => {
    BB.exports = function(BB, OB, GB) {
      switch (arguments.length) {
        case 1:
          return YB = [], JB(DB = BB, DB, MB, !0), YB;
        case 2:
          return "function" === typeof OB ? JB(BB, BB, OB, !0) : function(BB, OB) {
            return YB = [], JB(BB, OB, MB, !1), YB
          }(BB, OB);
        case 3:
          return JB(BB, OB, GB, !1);
        default:
          throw new Error("box-intersect: Invalid arguments")
      }
      var DB
    };
    var YB, DB = GB(38946),
      QB = GB(38972),
      oB = GB(38980);

    function jB(BB, OB) {
      for (var GB = 0; GB < BB; ++GB)
        if (!(OB[GB] <= OB[GB + BB])) return !0;
      return !1
    }

    function yB(BB, OB, GB, YB) {
      for (var DB = 0, QB = 0, oB = 0, yB = BB.length; oB < yB; ++oB) {
        var JB = BB[oB];
        if (!jB(OB, JB)) {
          for (var MB = 0; MB < 2 * OB; ++MB) GB[DB++] = JB[MB];
          YB[QB++] = oB
        }
      }
      return QB
    }

    function JB(BB, OB, GB, YB) {
      var jB = BB.length,
        JB = OB.length;
      if (!(jB <= 0 || JB <= 0)) {
        var MB = BB[0].length >>> 1;
        if (!(MB <= 0)) {
          var PB, zB = DB.mallocDouble(2 * MB * jB),
            lB = DB.mallocInt32(jB);
          if ((jB = yB(BB, MB, zB, lB)) > 0) {
            if (1 === MB && YB) QB.init(jB), PB = QB.sweepComplete(MB, GB, 0, jB, zB, lB, 0, jB, zB, lB);
            else {
              var pB = DB.mallocDouble(2 * MB * JB),
                qB = DB.mallocInt32(JB);
              (JB = yB(OB, MB, pB, qB)) > 0 && (QB.init(jB + JB), PB = 1 === MB ? QB.sweepBipartite(MB, GB, 0, jB, zB, lB, 0, JB, pB, qB) : oB(MB, GB, YB, jB, zB, lB, JB, pB, qB), DB.free(pB), DB.free(qB))
            }
            DB.free(zB), DB.free(lB)
          }
          return PB
        }
      }
    }

    function MB(BB, OB) {
      YB.push([BB, OB])
    }
  },
  38988: (BB, OB) => {
    var GB = "d",
      YB = "ax",
      DB = "fp",
      QB = "es",
      oB = "rs",
      jB = "re",
      yB = "rb",
      JB = "bs",
      MB = "be",
      PB = "bb",
      zB = [GB, YB, "vv", oB, jB, yB, "ri", JB, MB, PB, "bi"];

    function lB(BB) {
      var OB = "bruteForce" + (BB ? "Full" : "Partial"),
        YB = [],
        oB = zB.slice();
      BB || oB.splice(3, 0, DB);
      var jB = ["function " + OB + "(" + oB.join() + "){"];

      function yB(OB, DB) {
        var oB = function(BB, OB, YB) {
          var DB = "bruteForce" + (BB ? "Red" : "Blue") + (OB ? "Flip" : "") + (YB ? "Full" : ""),
            oB = ["function ", DB, "(", zB.join(), "){", "var ", QB, "=2*", GB, ";"],
            jB = "for(var i=rs,rp=es*rs;i<re;++i,rp+=es){var x0=rb[ax+rp],x1=rb[ax+rp+d],xi=ri[i];",
            yB = "for(var j=bs,bp=es*bs;j<be;++j,bp+=es){var y0=bb[ax+bp]," + (YB ? "y1=bb[ax+bp+d]," : "") + "yi=bi[j];";
          return BB ? oB.push(jB, "Q", ":", yB) : oB.push(yB, "Q", ":", jB), YB ? oB.push("if(y1<x0||x1<y0)continue;") : OB ? oB.push("if(y0<=x0||x1<y0)continue;") : oB.push("if(y0<x0||x1<y0)continue;"), oB.push("for(var k=ax+1;k<d;++k){var r0=rb[k+rp],r1=rb[k+d+rp],b0=bb[k+bp],b1=bb[k+d+bp];if(r1<b0||b1<r0)continue Q;}var rv=vv("), OB ? oB.push("yi,xi") : oB.push("xi,yi"), oB.push(");if(rv!==void 0)return rv;}}}"), {
            name: DB,
            code: oB.join("")
          }
        }(OB, DB, BB);
        YB.push(oB.code), jB.push("return " + oB.name + "(" + zB.join() + ");")
      }
      jB.push("if(re-rs>be-bs){"), BB ? (yB(!0, !1), jB.push("}else{"), yB(!1, !1)) : (jB.push("if(fp){"), yB(!0, !0), jB.push("}else{"), yB(!0, !1), jB.push("}}else{if(fp){"), yB(!1, !0), jB.push("}else{"), yB(!1, !1), jB.push("}")), jB.push("}}return " + OB);
      var JB = YB.join("") + jB.join("");
      return new Function(JB)()
    }
    OB.partial = lB(!1), OB.full = lB(!0)
  },
  38980: (BB, OB, GB) => {
    BB.exports = function(BB, OB, GB, QB, MB, dB, KB, uB, mB) {
      ! function(BB, OB) {
        var GB = 8 * DB.log2(OB + 1) * (BB + 1) | 0,
          QB = DB.nextPow2(AB * GB);
        SB.length < QB && (YB.free(SB), SB = YB.mallocInt32(QB));
        var oB = DB.nextPow2(VB * GB);
        nB.length < oB && (YB.free(nB), nB = YB.mallocDouble(oB))
      }(BB, QB + KB);
      var IB, FB = 0,
        iB = 2 * BB;
      UB(FB++, 0, 0, QB, 0, KB, GB ? 16 : 0, -1 / 0, 1 / 0), GB || UB(FB++, 0, 0, KB, 0, QB, 1, -1 / 0, 1 / 0);
      for (; FB > 0;) {
        var LB = (FB -= 1) * AB,
          gB = SB[LB],
          rB = SB[LB + 1],
          XB = SB[LB + 2],
          wB = SB[LB + 3],
          EB = SB[LB + 4],
          cB = SB[LB + 5],
          hB = FB * VB,
          aB = nB[hB],
          eB = nB[hB + 1],
          TB = 1 & cB,
          bB = !!(16 & cB),
          CB = MB,
          HB = dB,
          vB = uB,
          sB = mB;
        if (TB && (CB = uB, HB = mB, vB = MB, sB = dB), !(2 & cB && rB >= (XB = ZB(BB, gB, rB, XB, CB, HB, eB))) && !(4 & cB && (rB = NB(BB, gB, rB, XB, CB, HB, aB)) >= XB)) {
          var xB = XB - rB,
            tB = EB - wB;
          if (bB) {
            if (BB * xB * (xB + tB) < lB) {
              if (void 0 !== (IB = yB.scanComplete(BB, gB, OB, rB, XB, CB, HB, wB, EB, vB, sB))) return IB;
              continue
            }
          } else {
            if (BB * Math.min(xB, tB) < PB) {
              if (void 0 !== (IB = oB(BB, gB, OB, TB, rB, XB, CB, HB, wB, EB, vB, sB))) return IB;
              continue
            }
            if (BB * xB * tB < zB) {
              if (void 0 !== (IB = yB.scanBipartite(BB, gB, OB, TB, rB, XB, CB, HB, wB, EB, vB, sB))) return IB;
              continue
            }
          }
          var BO = pB(BB, gB, rB, XB, CB, HB, aB, eB);
          if (rB < BO)
            if (BB * (BO - rB) < PB) {
              if (void 0 !== (IB = jB(BB, gB + 1, OB, rB, BO, CB, HB, wB, EB, vB, sB))) return IB
            } else if (gB === BB - 2) {
            if (void 0 !== (IB = TB ? yB.sweepBipartite(BB, OB, wB, EB, vB, sB, rB, BO, CB, HB) : yB.sweepBipartite(BB, OB, rB, BO, CB, HB, wB, EB, vB, sB))) return IB
          } else UB(FB++, gB + 1, rB, BO, wB, EB, TB, -1 / 0, 1 / 0), UB(FB++, gB + 1, wB, EB, rB, BO, 1 ^ TB, -1 / 0, 1 / 0);
          if (BO < XB) {
            var OO = JB(BB, gB, wB, EB, vB, sB),
              GO = vB[iB * OO + gB],
              YO = qB(BB, gB, OO, EB, vB, sB, GO);
            if (YO < EB && UB(FB++, gB, BO, XB, YO, EB, (4 | TB) + (bB ? 16 : 0), GO, eB), wB < OO && UB(FB++, gB, BO, XB, wB, OO, (2 | TB) + (bB ? 16 : 0), aB, GO), OO + 1 === YO) {
              if (void 0 !== (IB = bB ? kB(BB, gB, OB, BO, XB, CB, HB, OO, vB, sB[OO]) : fB(BB, gB, OB, TB, BO, XB, CB, HB, OO, vB, sB[OO]))) return IB
            } else if (OO < YO) {
              var DO;
              if (bB) {
                if (BO < (DO = RB(BB, gB, BO, XB, CB, HB, GO))) {
                  var QO = qB(BB, gB, BO, DO, CB, HB, GO);
                  if (gB === BB - 2) {
                    if (BO < QO && void 0 !== (IB = yB.sweepComplete(BB, OB, BO, QO, CB, HB, OO, YO, vB, sB))) return IB;
                    if (QO < DO && void 0 !== (IB = yB.sweepBipartite(BB, OB, QO, DO, CB, HB, OO, YO, vB, sB))) return IB
                  } else BO < QO && UB(FB++, gB + 1, BO, QO, OO, YO, 16, -1 / 0, 1 / 0), QO < DO && (UB(FB++, gB + 1, QO, DO, OO, YO, 0, -1 / 0, 1 / 0), UB(FB++, gB + 1, OO, YO, QO, DO, 1, -1 / 0, 1 / 0))
                }
              } else BO < (DO = TB ? WB(BB, gB, BO, XB, CB, HB, GO) : RB(BB, gB, BO, XB, CB, HB, GO)) && (gB === BB - 2 ? IB = TB ? yB.sweepBipartite(BB, OB, OO, YO, vB, sB, BO, DO, CB, HB) : yB.sweepBipartite(BB, OB, BO, DO, CB, HB, OO, YO, vB, sB) : (UB(FB++, gB + 1, BO, DO, OO, YO, TB, -1 / 0, 1 / 0), UB(FB++, gB + 1, OO, YO, BO, DO, 1 ^ TB, -1 / 0, 1 / 0)))
            }
          }
        }
      }
    };
    var YB = GB(38946),
      DB = GB(38954),
      QB = GB(38988),
      oB = QB.partial,
      jB = QB.full,
      yB = GB(38972),
      JB = GB(38996),
      MB = GB(39e3),
      PB = 128,
      zB = 1 << 22,
      lB = 1 << 22,
      pB = MB("!(lo>=p0)&&!(p1>=hi)", ["p0", "p1"]),
      qB = MB("lo===p0", ["p0"]),
      ZB = MB("lo<p0", ["p0"]),
      NB = MB("hi<=p0", ["p0"]),
      RB = MB("lo<=p0&&p0<=hi", ["p0"]),
      WB = MB("lo<p0&&p0<=hi", ["p0"]),
      AB = 6,
      VB = 2,
      SB = YB.mallocInt32(1024),
      nB = YB.mallocDouble(1024);

    function UB(BB, OB, GB, YB, DB, QB, oB, jB, yB) {
      var JB = AB * BB;
      SB[JB] = OB, SB[JB + 1] = GB, SB[JB + 2] = YB, SB[JB + 3] = DB, SB[JB + 4] = QB, SB[JB + 5] = oB;
      var MB = VB * BB;
      nB[MB] = jB, nB[MB + 1] = yB
    }

    function fB(BB, OB, GB, YB, DB, QB, oB, jB, yB, JB, MB) {
      var PB = 2 * BB,
        zB = yB * PB,
        lB = JB[zB + OB];
      BB: for (var pB = DB, qB = DB * PB; pB < QB; ++pB, qB += PB) {
        var ZB = oB[qB + OB],
          NB = oB[qB + OB + BB];
        if (!(lB < ZB || NB < lB) && (!YB || lB !== ZB)) {
          for (var RB, WB = jB[pB], AB = OB + 1; AB < BB; ++AB) {
            ZB = oB[qB + AB], NB = oB[qB + AB + BB];
            var VB = JB[zB + AB],
              SB = JB[zB + AB + BB];
            if (NB < VB || SB < ZB) continue BB
          }
          if (void 0 !== (RB = YB ? GB(MB, WB) : GB(WB, MB))) return RB
        }
      }
    }

    function kB(BB, OB, GB, YB, DB, QB, oB, jB, yB, JB) {
      var MB = 2 * BB,
        PB = jB * MB,
        zB = yB[PB + OB];
      BB: for (var lB = YB, pB = YB * MB; lB < DB; ++lB, pB += MB) {
        var qB = oB[lB];
        if (qB !== JB) {
          var ZB = QB[pB + OB],
            NB = QB[pB + OB + BB];
          if (!(zB < ZB || NB < zB)) {
            for (var RB = OB + 1; RB < BB; ++RB) {
              ZB = QB[pB + RB], NB = QB[pB + RB + BB];
              var WB = yB[PB + RB],
                AB = yB[PB + RB + BB];
              if (NB < WB || AB < ZB) continue BB
            }
            var VB = GB(qB, JB);
            if (void 0 !== VB) return VB
          }
        }
      }
    }
  },
  38996: (BB, OB, GB) => {
    BB.exports = function(BB, OB, GB, oB, jB, yB) {
      if (oB <= GB + 1) return GB;
      var JB = GB,
        MB = oB,
        PB = oB + GB >>> 1,
        zB = 2 * BB,
        lB = PB,
        pB = jB[zB * PB + OB];
      for (; JB < MB;) {
        if (MB - JB < DB) {
          QB(BB, OB, JB, MB, jB, yB), pB = jB[zB * PB + OB];
          break
        }
        var qB = MB - JB,
          ZB = Math.random() * qB + JB | 0,
          NB = jB[zB * ZB + OB],
          RB = Math.random() * qB + JB | 0,
          WB = jB[zB * RB + OB],
          AB = Math.random() * qB + JB | 0,
          VB = jB[zB * AB + OB];
        NB <= WB ? VB >= WB ? (lB = RB, pB = WB) : NB >= VB ? (lB = ZB, pB = NB) : (lB = AB, pB = VB) : WB >= VB ? (lB = RB, pB = WB) : VB >= NB ? (lB = ZB, pB = NB) : (lB = AB, pB = VB);
        for (var SB = zB * (MB - 1), nB = zB * lB, UB = 0; UB < zB; ++UB, ++SB, ++nB) {
          var fB = jB[SB];
          jB[SB] = jB[nB], jB[nB] = fB
        }
        var kB = yB[MB - 1];
        yB[MB - 1] = yB[lB], yB[lB] = kB;
        for (SB = zB * (MB - 1), nB = zB * (lB = YB(BB, OB, JB, MB - 1, jB, yB, pB)), UB = 0; UB < zB; ++UB, ++SB, ++nB) {
          fB = jB[SB];
          jB[SB] = jB[nB], jB[nB] = fB
        }
        kB = yB[MB - 1];
        if (yB[MB - 1] = yB[lB], yB[lB] = kB, PB < lB) {
          for (MB = lB - 1; JB < MB && jB[zB * (MB - 1) + OB] === pB;) MB -= 1;
          MB += 1
        } else {
          if (!(lB < PB)) break;
          for (JB = lB + 1; JB < MB && jB[zB * JB + OB] === pB;) JB += 1
        }
      }
      return YB(BB, OB, GB, PB, jB, yB, jB[zB * PB + OB])
    };
    var YB = GB(39e3)("lo<p0", ["p0"]),
      DB = 8;

    function QB(BB, OB, GB, YB, DB, QB) {
      for (var oB = 2 * BB, jB = oB * (GB + 1) + OB, yB = GB + 1; yB < YB; ++yB, jB += oB)
        for (var JB = DB[jB], MB = yB, PB = oB * (yB - 1); MB > GB && DB[PB + OB] > JB; --MB, PB -= oB) {
          for (var zB = PB, lB = PB + oB, pB = 0; pB < oB; ++pB, ++zB, ++lB) {
            var qB = DB[zB];
            DB[zB] = DB[lB], DB[lB] = qB
          }
          var ZB = QB[MB];
          QB[MB] = QB[MB - 1], QB[MB - 1] = ZB
        }
    }
  },
  39e3: BB => {
    BB.exports = function(BB, GB) {
      var YB = "abcdef".split("").concat(GB),
        DB = [];
      BB.indexOf("lo") >= 0 && DB.push("lo=e[k+n]");
      BB.indexOf("hi") >= 0 && DB.push("hi=e[k+o]");
      return YB.push(OB.replace("_", DB.join()).replace("$", BB)), Function.apply(void 0, YB)
    };
    var OB = "for(var j=2*a,k=j*c,l=k,m=c,n=b,o=a+b,p=c;d>p;++p,k+=j){var _;if($)if(m===p)m+=1,l+=j;else{for(var s=0;j>s;++s){var t=e[k+s];e[k+s]=e[l],e[l++]=t}var u=f[p];f[p]=f[m],f[m++]=u}}return m"
  },
  38975: BB => {
    BB.exports = function(BB, YB) {
      YB <= 4 * OB ? GB(0, YB - 1, BB) : JB(0, YB - 1, BB)
    };
    var OB = 32;

    function GB(BB, OB, GB) {
      for (var YB = 2 * (BB + 1), DB = BB + 1; DB <= OB; ++DB) {
        for (var QB = GB[YB++], oB = GB[YB++], jB = DB, yB = YB - 2; jB-- > BB;) {
          var JB = GB[yB - 2],
            MB = GB[yB - 1];
          if (JB < QB) break;
          if (JB === QB && MB < oB) break;
          GB[yB] = JB, GB[yB + 1] = MB, yB -= 2
        }
        GB[yB] = QB, GB[yB + 1] = oB
      }
    }

    function YB(BB, OB, GB) {
      OB *= 2;
      var YB = GB[BB *= 2],
        DB = GB[BB + 1];
      GB[BB] = GB[OB], GB[BB + 1] = GB[OB + 1], GB[OB] = YB, GB[OB + 1] = DB
    }

    function DB(BB, OB, GB) {
      OB *= 2, GB[BB *= 2] = GB[OB], GB[BB + 1] = GB[OB + 1]
    }

    function QB(BB, OB, GB, YB) {
      OB *= 2, GB *= 2;
      var DB = YB[BB *= 2],
        QB = YB[BB + 1];
      YB[BB] = YB[OB], YB[BB + 1] = YB[OB + 1], YB[OB] = YB[GB], YB[OB + 1] = YB[GB + 1], YB[GB] = DB, YB[GB + 1] = QB
    }

    function oB(BB, OB, GB, YB, DB) {
      OB *= 2, DB[BB *= 2] = DB[OB], DB[OB] = GB, DB[BB + 1] = DB[OB + 1], DB[OB + 1] = YB
    }

    function jB(BB, OB, GB) {
      OB *= 2;
      var YB = GB[BB *= 2],
        DB = GB[OB];
      return !(YB < DB) && (YB !== DB || GB[BB + 1] > GB[OB + 1])
    }

    function yB(BB, OB, GB, YB) {
      var DB = YB[BB *= 2];
      return DB < OB || DB === OB && YB[BB + 1] < GB
    }

    function JB(BB, MB, PB) {
      var zB = (MB - BB + 1) / 6 | 0,
        lB = BB + zB,
        pB = MB - zB,
        qB = BB + MB >> 1,
        ZB = qB - zB,
        NB = qB + zB,
        RB = lB,
        WB = ZB,
        AB = qB,
        VB = NB,
        SB = pB,
        nB = BB + 1,
        UB = MB - 1,
        fB = 0;
      jB(RB, WB, PB) && (fB = RB, RB = WB, WB = fB), jB(VB, SB, PB) && (fB = VB, VB = SB, SB = fB), jB(RB, AB, PB) && (fB = RB, RB = AB, AB = fB), jB(WB, AB, PB) && (fB = WB, WB = AB, AB = fB), jB(RB, VB, PB) && (fB = RB, RB = VB, VB = fB), jB(AB, VB, PB) && (fB = AB, AB = VB, VB = fB), jB(WB, SB, PB) && (fB = WB, WB = SB, SB = fB), jB(WB, AB, PB) && (fB = WB, WB = AB, AB = fB), jB(VB, SB, PB) && (fB = VB, VB = SB, SB = fB);
      for (var kB = PB[2 * WB], dB = PB[2 * WB + 1], KB = PB[2 * VB], uB = PB[2 * VB + 1], mB = 2 * RB, IB = 2 * AB, FB = 2 * SB, iB = 2 * lB, LB = 2 * qB, gB = 2 * pB, rB = 0; rB < 2; ++rB) {
        var XB = PB[mB + rB],
          wB = PB[IB + rB],
          EB = PB[FB + rB];
        PB[iB + rB] = XB, PB[LB + rB] = wB, PB[gB + rB] = EB
      }
      DB(ZB, BB, PB), DB(NB, MB, PB);
      for (var cB = nB; cB <= UB; ++cB)
        if (yB(cB, kB, dB, PB)) cB !== nB && YB(cB, nB, PB), ++nB;
        else if (!yB(cB, KB, uB, PB))
        for (;;) {
          if (yB(UB, KB, uB, PB)) {
            yB(UB, kB, dB, PB) ? (QB(cB, nB, UB, PB), ++nB, --UB) : (YB(cB, UB, PB), --UB);
            break
          }
          if (--UB < cB) break
        }
      oB(BB, nB - 1, kB, dB, PB), oB(MB, UB + 1, KB, uB, PB), nB - 2 - BB <= OB ? GB(BB, nB - 2, PB) : JB(BB, nB - 2, PB), MB - (UB + 2) <= OB ? GB(UB + 2, MB, PB) : JB(UB + 2, MB, PB), UB - nB <= OB ? GB(nB, UB, PB) : JB(nB, UB, PB)
    }
  },
  38972: (BB, OB, GB) => {
    BB.exports = {
      init: function(BB) {
        var OB = DB.nextPow2(BB);
        yB.length < OB && (YB.free(yB), yB = YB.mallocInt32(OB));
        JB.length < OB && (YB.free(JB), JB = YB.mallocInt32(OB));
        MB.length < OB && (YB.free(MB), MB = YB.mallocInt32(OB));
        PB.length < OB && (YB.free(PB), PB = YB.mallocInt32(OB));
        zB.length < OB && (YB.free(zB), zB = YB.mallocInt32(OB));
        lB.length < OB && (YB.free(lB), lB = YB.mallocInt32(OB));
        var GB = 8 * OB;
        pB.length < GB && (YB.free(pB), pB = YB.mallocDouble(GB))
      },
      sweepBipartite: function(BB, OB, GB, YB, DB, jB, zB, lB, NB, RB) {
        for (var WB = 0, AB = 2 * BB, VB = BB - 1, SB = AB - 1, nB = GB; nB < YB; ++nB) {
          var UB = jB[nB],
            fB = AB * nB;
          pB[WB++] = DB[fB + VB], pB[WB++] = -(UB + 1), pB[WB++] = DB[fB + SB], pB[WB++] = UB
        }
        for (nB = zB; nB < lB; ++nB) {
          UB = RB[nB] + oB;
          var kB = AB * nB;
          pB[WB++] = NB[kB + VB], pB[WB++] = -UB, pB[WB++] = NB[kB + SB], pB[WB++] = UB
        }
        var dB = WB >>> 1;
        QB(pB, dB);
        var KB = 0,
          uB = 0;
        for (nB = 0; nB < dB; ++nB) {
          var mB = 0 | pB[2 * nB + 1];
          if (mB >= oB) qB(MB, PB, uB--, mB = mB - oB | 0);
          else if (mB >= 0) qB(yB, JB, KB--, mB);
          else if (mB <= -oB) {
            mB = -mB - oB | 0;
            for (var IB = 0; IB < KB; ++IB) {
              if (void 0 !== (FB = OB(yB[IB], mB))) return FB
            }
            ZB(MB, PB, uB++, mB)
          } else {
            mB = -mB - 1 | 0;
            for (IB = 0; IB < uB; ++IB) {
              var FB;
              if (void 0 !== (FB = OB(mB, MB[IB]))) return FB
            }
            ZB(yB, JB, KB++, mB)
          }
        }
      },
      sweepComplete: function(BB, OB, GB, YB, DB, oB, jB, NB, RB, WB) {
        for (var AB = 0, VB = 2 * BB, SB = BB - 1, nB = VB - 1, UB = GB; UB < YB; ++UB) {
          var fB = oB[UB] + 1 << 1,
            kB = VB * UB;
          pB[AB++] = DB[kB + SB], pB[AB++] = -fB, pB[AB++] = DB[kB + nB], pB[AB++] = fB
        }
        for (UB = jB; UB < NB; ++UB) {
          fB = WB[UB] + 1 << 1;
          var dB = VB * UB;
          pB[AB++] = RB[dB + SB], pB[AB++] = 1 | -fB, pB[AB++] = RB[dB + nB], pB[AB++] = 1 | fB
        }
        var KB = AB >>> 1;
        QB(pB, KB);
        var uB = 0,
          mB = 0,
          IB = 0;
        for (UB = 0; UB < KB; ++UB) {
          var FB = 0 | pB[2 * UB + 1],
            iB = 1 & FB;
          if (UB < KB - 1 && FB >> 1 === pB[2 * UB + 3] >> 1 && (iB = 2, UB += 1), FB < 0) {
            for (var LB = -(FB >> 1) - 1, gB = 0; gB < IB; ++gB) {
              if (void 0 !== (rB = OB(zB[gB], LB))) return rB
            }
            if (0 !== iB)
              for (gB = 0; gB < uB; ++gB) {
                if (void 0 !== (rB = OB(yB[gB], LB))) return rB
              }
            if (1 !== iB)
              for (gB = 0; gB < mB; ++gB) {
                var rB;
                if (void 0 !== (rB = OB(MB[gB], LB))) return rB
              }
            0 === iB ? ZB(yB, JB, uB++, LB) : 1 === iB ? ZB(MB, PB, mB++, LB) : 2 === iB && ZB(zB, lB, IB++, LB)
          } else {
            LB = (FB >> 1) - 1;
            0 === iB ? qB(yB, JB, uB--, LB) : 1 === iB ? qB(MB, PB, mB--, LB) : 2 === iB && qB(zB, lB, IB--, LB)
          }
        }
      },
      scanBipartite: function(BB, OB, GB, YB, DB, jB, MB, PB, zB, lB, NB, RB) {
        var WB = 0,
          AB = 2 * BB,
          VB = OB,
          SB = OB + BB,
          nB = 1,
          UB = 1;
        YB ? UB = oB : nB = oB;
        for (var fB = DB; fB < jB; ++fB) {
          var kB = fB + nB,
            dB = AB * fB;
          pB[WB++] = MB[dB + VB], pB[WB++] = -kB, pB[WB++] = MB[dB + SB], pB[WB++] = kB
        }
        for (fB = zB; fB < lB; ++fB) {
          kB = fB + UB;
          var KB = AB * fB;
          pB[WB++] = NB[KB + VB], pB[WB++] = -kB
        }
        var uB = WB >>> 1;
        QB(pB, uB);
        var mB = 0;
        for (fB = 0; fB < uB; ++fB) {
          var IB = 0 | pB[2 * fB + 1];
          if (IB < 0) {
            var FB = !1;
            if ((kB = -IB) >= oB ? (FB = !YB, kB -= oB) : (FB = !!YB, kB -= 1), FB) ZB(yB, JB, mB++, kB);
            else {
              var iB = RB[kB],
                LB = AB * kB,
                gB = NB[LB + OB + 1],
                rB = NB[LB + OB + 1 + BB];
              BB: for (var XB = 0; XB < mB; ++XB) {
                var wB = yB[XB],
                  EB = AB * wB;
                if (!(rB < MB[EB + OB + 1] || MB[EB + OB + 1 + BB] < gB)) {
                  for (var cB = OB + 2; cB < BB; ++cB)
                    if (NB[LB + cB + BB] < MB[EB + cB] || MB[EB + cB + BB] < NB[LB + cB]) continue BB;
                  var hB, aB = PB[wB];
                  if (void 0 !== (hB = YB ? GB(iB, aB) : GB(aB, iB))) return hB
                }
              }
            }
          } else qB(yB, JB, mB--, IB - nB)
        }
      },
      scanComplete: function(BB, OB, GB, YB, DB, jB, JB, MB, PB, zB, lB) {
        for (var qB = 0, ZB = 2 * BB, NB = OB, RB = OB + BB, WB = YB; WB < DB; ++WB) {
          var AB = WB + oB,
            VB = ZB * WB;
          pB[qB++] = jB[VB + NB], pB[qB++] = -AB, pB[qB++] = jB[VB + RB], pB[qB++] = AB
        }
        for (WB = MB; WB < PB; ++WB) {
          AB = WB + 1;
          var SB = ZB * WB;
          pB[qB++] = zB[SB + NB], pB[qB++] = -AB
        }
        var nB = qB >>> 1;
        QB(pB, nB);
        var UB = 0;
        for (WB = 0; WB < nB; ++WB) {
          var fB = 0 | pB[2 * WB + 1];
          if (fB < 0) {
            if ((AB = -fB) >= oB) yB[UB++] = AB - oB;
            else {
              var kB = lB[AB -= 1],
                dB = ZB * AB,
                KB = zB[dB + OB + 1],
                uB = zB[dB + OB + 1 + BB];
              BB: for (var mB = 0; mB < UB; ++mB) {
                var IB = yB[mB],
                  FB = JB[IB];
                if (FB === kB) break;
                var iB = ZB * IB;
                if (!(uB < jB[iB + OB + 1] || jB[iB + OB + 1 + BB] < KB)) {
                  for (var LB = OB + 2; LB < BB; ++LB)
                    if (zB[dB + LB + BB] < jB[iB + LB] || jB[iB + LB + BB] < zB[dB + LB]) continue BB;
                  var gB = GB(FB, kB);
                  if (void 0 !== gB) return gB
                }
              }
            }
          } else {
            for (AB = fB - oB, mB = UB - 1; mB >= 0; --mB)
              if (yB[mB] === AB) {
                for (LB = mB + 1; LB < UB; ++LB) yB[LB - 1] = yB[LB];
                break
              }-- UB
          }
        }
      }
    };
    var YB = GB(38946),
      DB = GB(38954),
      QB = GB(38975),
      oB = 1 << 28,
      jB = 1024,
      yB = YB.mallocInt32(jB),
      JB = YB.mallocInt32(jB),
      MB = YB.mallocInt32(jB),
      PB = YB.mallocInt32(jB),
      zB = YB.mallocInt32(jB),
      lB = YB.mallocInt32(jB),
      pB = YB.mallocDouble(8192);

    function qB(BB, OB, GB, YB) {
      var DB = OB[YB],
        QB = BB[GB - 1];
      BB[DB] = QB, OB[QB] = DB
    }

    function ZB(BB, OB, GB, YB) {
      BB[GB] = YB, OB[YB] = GB
    }
  },
  38958: BB => {
    function OB(BB, GB, YB) {
      var DB = 0 | BB[YB];
      if (DB <= 0) return [];
      var QB, oB = new Array(DB);
      if (YB === BB.length - 1)
        for (QB = 0; QB < DB; ++QB) oB[QB] = GB;
      else
        for (QB = 0; QB < DB; ++QB) oB[QB] = OB(BB, GB, YB + 1);
      return oB
    }
    BB.exports = function(BB, GB) {
      switch ("undefined" === typeof GB && (GB = 0), typeof BB) {
        case "number":
          if (BB > 0) return function(BB, OB) {
            var GB, YB;
            for (GB = new Array(BB), YB = 0; YB < BB; ++YB) GB[YB] = OB;
            return GB
          }(0 | BB, GB);
          break;
        case "object":
          if ("number" === typeof BB.length) return OB(BB, GB, 0)
      }
      return []
    }
  },
  38909: (BB, OB, GB) => {
    BB.exports = function() {
      var BB = this;
      this.components = {}, this.comps = this.components;
      var OB = this.components,
        GB = 1,
        DB = {},
        QB = [],
        oB = [],
        jB = {
          timeout: !1,
          removals: [],
          multiComps: []
        };

      function yB(BB, GB) {
        var YB = OB[GB],
          QB = DB[GB],
          oB = QB.hash[BB];
        oB && (QB.remove(BB), YB.Qm && (YB.multi ? (oB.forEach((OB => {
          OB && YB.Qm(BB, OB)
        })), oB.length = 0) : YB.Qm(BB, oB)), jB.removals.push(QB), JB())
      }

      function JB() {
        jB.timeout || (jB.timeout = !0, setTimeout(MB, 1))
      }

      function MB() {
        jB.timeout = !1, PB()
      }

      function PB() {
        jB.multiComps.length && function(BB) {
          for (var OB = 0; OB < BB.length; OB++) {
            var {
              entID: GB,
              data: YB
            } = BB[OB], DB = YB.hash[GB];
            if (DB) {
              for (var QB = 0; QB < DB.length; QB++) DB[QB] || (DB.splice(QB, 1), QB--);
              0 === DB.length && (YB.remove(GB), jB.removals.push(YB))
            }
          }
          BB.length = 0
        }(jB.multiComps), jB.removals.length && function(BB) {
          for (var OB = 0; OB < BB.length; OB++) {
            BB[OB].flush()
          }
          BB.length = 0
        }(jB.removals)
      }
      this.Vq = DB, this._systems = QB, this._renderSystems = oB, this.A4 = function(OB) {
        var YB = GB++;
        return Array.isArray(OB) && OB.forEach((OB => BB.RL(YB, OB))), YB
      }, this.deleteEntity = function(OB) {
        return Object.keys(DB).forEach((BB => {
          DB[BB].hash[OB] && yB(OB, BB)
        })), BB
      }, this.jYB = function(BB) {
        if (!BB) throw new Error("Missing component definition");
        var GB = BB.name;
        if (!GB) throw new Error("Component definition must have a name property.");
        if ("string" !== typeof GB) throw new Error("Component name must be a string.");
        if ("" === GB) throw new Error("Component name must be a non-empty string.");
        if (DB[GB]) throw new Error(`Component ${GB} already exists.`);
        var jB = {};
        return jB.name = GB, jB.multi = !!BB.multi, jB.order = isNaN(BB.order) ? 99 : BB.order, jB.stateConstructor = BB.stateConstructor || null, jB.state = BB.state || {}, jB.OW = BB.OW || null, jB.Qm = BB.Qm || null, jB.system = BB.system || null, jB.oW = BB.oW || null, OB[GB] = jB, DB[GB] = new YB, DB[GB]._pendingMultiCleanup = !1, DB[GB]._multiCleanupIDs = jB.multi ? [] : null, jB.system && (QB.push(GB), QB.sort(((BB, GB) => OB[BB].order - OB[GB].order))), jB.oW && (oB.push(GB), oB.sort(((BB, GB) => OB[BB].order - OB[GB].order))), GB
      }, this.overwriteComponent = function(BB, GB) {
        var YB = OB[BB];
        if (!YB) throw new Error(`Unknown component: ${BB}`);
        if (!GB) throw new Error("Missing component definition");
        if (YB.name !== GB.name) throw new Error("Overwriting component must use the same name property.");
        var jB = {};
        jB.name = BB, jB.multi = !!GB.multi, jB.order = isNaN(GB.order) ? 99 : GB.order, jB.state = GB.state || {}, jB.OW = GB.OW || null, jB.Qm = GB.Qm || null, jB.system = GB.system || null, jB.oW = GB.oW || null, OB[BB] = jB, DB[BB]._pendingMultiCleanup = !1, DB[BB]._multiCleanupIDs = jB.multi ? [] : null;
        var yB = QB.indexOf(BB);
        jB.system && yB < 0 && QB.push(BB), !jB.system && yB >= 0 && QB.splice(yB, 1), QB.sort(((BB, GB) => OB[BB].order - OB[GB].order));
        var JB = oB.indexOf(BB);
        jB.oW && JB < 0 && oB.push(BB), !jB.oW && JB >= 0 && oB.splice(JB, 1), oB.sort(((BB, GB) => OB[BB].order - OB[GB].order));
        var MB = jB.state;
        return this.lL(BB).forEach((BB => {
          for (var OB in MB) OB in BB || (BB[OB] = MB[OB]);
          jB.OW && jB.OW(BB.qL, BB)
        })), BB
      }, this.deleteComponent = function(GB) {
        var YB = DB[GB];
        if (!YB) throw new Error(`Unknown component: ${GB}`);
        YB.flush(), YB.list.forEach((BB => {
          BB && yB(BB.qL || BB[0].qL, GB)
        }));
        var jB = QB.indexOf(GB),
          JB = oB.indexOf(GB);
        return jB > -1 && QB.splice(jB, 1), JB > -1 && oB.splice(JB, 1), DB[GB].dispose(), delete DB[GB], delete OB[GB], BB
      }, this.RL = function(BB, GB, YB) {
        var QB, oB = OB[GB],
          jB = DB[GB];
        if (!jB) throw new Error(`Unknown component: ${GB}.`);
        if (jB.hash[BB] && !oB.multi) throw new Error(`Entity ${BB} already has component: ${GB}.`);
        if (oB.stateConstructor) {
          if (!(QB = new oB.stateConstructor).hasOwnProperty("qL")) throw new Error(`Component ${oB.name} stateConstructor type does not have property __id`);
          Object.assign(QB, oB.state, YB)
        } else QB = {
          qL: BB,
          ...oB.state,
          ...YB
        };
        if (QB.qL = BB, oB.multi) {
          var yB = jB.hash[BB];
          yB || (yB = [], jB.add(BB, yB)), yB.push(QB)
        } else jB.add(BB, QB);
        return oB.OW && oB.OW(BB, QB), this
      }, this.YGB = function(BB, OB) {
        var GB = DB[OB];
        if (!GB) throw new Error(`Unknown component: ${OB}.`);
        return !!GB.hash[BB]
      }, this.dL = function(OB, GB) {
        if (!DB[GB]) throw new Error(`Unknown component: ${GB}.`);
        return yB(OB, GB), BB
      }, this.getState = function(BB, OB) {
        var GB = DB[OB];
        if (!GB) throw new Error(`Unknown component: ${OB}.`);
        return GB.hash[BB]
      }, this.lL = function(BB) {
        var OB = DB[BB];
        if (!OB) throw new Error(`Unknown component: ${BB}.`);
        return PB(), OB.list
      }, this.wGB = function(BB) {
        if (!DB[BB]) throw new Error(`Unknown component: ${BB}.`);
        var OB = DB[BB].hash;
        return BB => OB[BB]
      }, this.TGB = function(BB) {
        if (!DB[BB]) throw new Error(`Unknown component: ${BB}.`);
        var OB = DB[BB].hash;
        return BB => !!OB[BB]
      }, this.kP = function(GB) {
        PB();
        for (var YB = 0; YB < QB.length; YB++) {
          var oB = QB[YB],
            jB = OB[oB],
            yB = DB[oB];
          jB.system(GB, yB.list), PB()
        }
        return BB
      }, this.render = function(GB) {
        PB();
        for (var YB = 0; YB < oB.length; YB++) {
          var QB = oB[YB],
            jB = OB[QB],
            yB = DB[QB];
          jB.oW(GB, yB.list), PB()
        }
        return BB
      }, this.removeMultiComponent = function(GB, YB, QB) {
        var oB = OB[YB],
          yB = DB[YB];
        if (!yB) throw new Error(`Unknown component: ${YB}.`);
        if (!oB.multi) throw new Error("removeMultiComponent called on non-multi component");
        return function(BB, OB, GB, YB) {
          var DB = GB.hash[BB];
          if (DB) {
            var QB = DB[YB];
            QB && (DB[YB] = null, OB.Qm && OB.Qm(BB, QB), jB.multiComps.push({
              entID: BB,
              data: GB
            }), JB())
          }
        }(GB, oB, yB, QB), BB
      }
    };
    var YB = GB(38916)
  },
  38916: BB => {
    function OB(BB, OB) {
      var GB = BB._map[OB];
      if (delete BB.hash[OB], delete BB._map[OB], GB === BB.list.length - 1) BB.list.pop(), BB._idList.pop();
      else {
        var YB = BB.list.pop();
        BB.list[GB] = YB;
        var DB = BB._idList.pop();
        BB._idList[GB] = DB, BB._map[DB] = GB
      }
    }
    BB.exports = class {
      constructor() {
        this.list = [], this.hash = {}, this._map = {}, this._idList = [], this._pendingRemovals = []
      }
      add(BB, OB) {
        if ("number" === typeof this._map[BB]) {
          var GB = this._map[BB];
          this.hash[BB] = OB, this.list[GB] = OB, this._idList[GB] = BB
        } else this._map[BB] = this.list.length, this.hash[BB] = OB, this.list.push(OB), this._idList.push(BB)
      }
      remove(BB) {
        var OB = this._map[BB];
        this.hash[BB] = null, this.list[OB] = null, this._pendingRemovals.push(BB)
      }
      dispose() {
        this.list = null, this.hash = null, this._map = null, this._idList = null, this._pendingRemovals.length = 0
      }
      flush() {
        for (var BB = 0; BB < this._pendingRemovals.length; BB++) {
          var GB = this._pendingRemovals[BB];
          null === this.hash[GB] && OB(this, GB)
        }
        this._pendingRemovals.length = 0
      }
    }
  },
  38722: (BB, OB, GB) => {
    BB = GB.nmd(BB);
    var YB = "__lodash_hash_undefined__",
      DB = 9007199254740991,
      QB = "[object Arguments]",
      oB = "[object Boolean]",
      jB = "[object Date]",
      yB = "[object Function]",
      JB = "[object GeneratorFunction]",
      MB = "[object Map]",
      PB = "[object Number]",
      zB = "[object Object]",
      lB = "[object Promise]",
      pB = "[object RegExp]",
      qB = "[object Set]",
      ZB = "[object String]",
      NB = "[object Symbol]",
      RB = "[object WeakMap]",
      WB = "[object ArrayBuffer]",
      AB = "[object DataView]",
      VB = "[object Float32Array]",
      SB = "[object Float64Array]",
      nB = "[object Int8Array]",
      UB = "[object Int16Array]",
      fB = "[object Int32Array]",
      kB = "[object Uint8Array]",
      dB = "[object Uint8ClampedArray]",
      KB = "[object Uint16Array]",
      uB = "[object Uint32Array]",
      mB = /\w*$/,
      IB = /^\[object .+?Constructor\]$/,
      FB = /^(?:0|[1-9]\d*)$/,
      iB = {};
    iB[QB] = iB["[object Array]"] = iB[WB] = iB[AB] = iB[oB] = iB[jB] = iB[VB] = iB[SB] = iB[nB] = iB[UB] = iB[fB] = iB[MB] = iB[PB] = iB[zB] = iB[pB] = iB[qB] = iB[ZB] = iB[NB] = iB[kB] = iB[dB] = iB[KB] = iB[uB] = !0, iB["[object Error]"] = iB[yB] = iB[RB] = !1;
    var LB = "object" == typeof GB.g && GB.g && GB.g.Object === Object && GB.g,
      gB = "object" == typeof self && self && self.Object === Object && self,
      rB = LB || gB || Function("return this")(),
      XB = OB && !OB.nodeType && OB,
      wB = XB && BB && !BB.nodeType && BB,
      EB = wB && wB.exports === XB;

    function cB(BB, OB) {
      return BB.set(OB[0], OB[1]), BB
    }

    function hB(BB, OB) {
      return BB.add(OB), BB
    }

    function aB(BB, OB, GB, YB) {
      var DB = -1,
        QB = BB ? BB.length : 0;
      for (YB && QB && (GB = BB[++DB]); ++DB < QB;) GB = OB(GB, BB[DB], DB, BB);
      return GB
    }

    function eB(BB) {
      var OB = !1;
      if (null != BB && "function" != typeof BB.toString) try {
        OB = !!(BB + "")
      } catch (GB) {}
      return OB
    }

    function TB(BB) {
      var OB = -1,
        GB = Array(BB.size);
      return BB.forEach((function(BB, YB) {
        GB[++OB] = [YB, BB]
      })), GB
    }

    function bB(BB, OB) {
      return function(GB) {
        return BB(OB(GB))
      }
    }

    function CB(BB) {
      var OB = -1,
        GB = Array(BB.size);
      return BB.forEach((function(BB) {
        GB[++OB] = BB
      })), GB
    }
    var HB = Array.prototype,
      vB = Function.prototype,
      sB = Object.prototype,
      xB = rB["__core-js_shared__"],
      tB = function() {
        var BB = /[^.]+$/.exec(xB && xB.keys && xB.keys.IE_PROTO || "");
        return BB ? "Symbol(src)_1." + BB : ""
      }(),
      BO = vB.toString,
      OO = sB.hasOwnProperty,
      GO = sB.toString,
      YO = RegExp("^" + BO.call(OO).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
      DO = EB ? rB.BP : void 0,
      QO = rB.Symbol,
      oO = rB.Uint8Array,
      jO = bB(Object.getPrototypeOf, Object),
      yO = Object.create,
      JO = sB.propertyIsEnumerable,
      MO = HB.splice,
      PO = Object.getOwnPropertySymbols,
      zO = DO ? DO.isBuffer : void 0,
      lO = bB(Object.keys, Object),
      pO = EO(rB, "DataView"),
      qO = EO(rB, "Map"),
      ZO = EO(rB, "Promise"),
      NO = EO(rB, "Set"),
      RO = EO(rB, "WeakMap"),
      WO = EO(Object, "create"),
      AO = TO(pO),
      VO = TO(qO),
      SO = TO(ZO),
      nO = TO(NO),
      UO = TO(RO),
      fO = QO ? QO.prototype : void 0,
      kO = fO ? fO.valueOf : void 0;

    function dO(BB) {
      var OB = -1,
        GB = BB ? BB.length : 0;
      for (this.clear(); ++OB < GB;) {
        var YB = BB[OB];
        this.set(YB[0], YB[1])
      }
    }

    function KO(BB) {
      var OB = -1,
        GB = BB ? BB.length : 0;
      for (this.clear(); ++OB < GB;) {
        var YB = BB[OB];
        this.set(YB[0], YB[1])
      }
    }

    function uO(BB) {
      var OB = -1,
        GB = BB ? BB.length : 0;
      for (this.clear(); ++OB < GB;) {
        var YB = BB[OB];
        this.set(YB[0], YB[1])
      }
    }

    function mO(BB) {
      this.__data__ = new KO(BB)
    }

    function IO(BB, OB) {
      var GB = CO(BB) || function(BB) {
          return function(BB) {
            return function(BB) {
              return !!BB && "object" == typeof BB
            }(BB) && HO(BB)
          }(BB) && OO.call(BB, "callee") && (!JO.call(BB, "callee") || GO.call(BB) == QB)
        }(BB) ? function(BB, OB) {
          for (var GB = -1, YB = Array(BB); ++GB < BB;) YB[GB] = OB(GB);
          return YB
        }(BB.length, String) : [],
        YB = GB.length,
        DB = !!YB;
      for (var oB in BB) !OB && !OO.call(BB, oB) || DB && ("length" == oB || aO(oB, YB)) || GB.push(oB);
      return GB
    }

    function FO(BB, OB, GB) {
      var YB = BB[OB];
      OO.call(BB, OB) && bO(YB, GB) && (void 0 !== GB || OB in BB) || (BB[OB] = GB)
    }

    function iO(BB, OB) {
      for (var GB = BB.length; GB--;)
        if (bO(BB[GB][0], OB)) return GB;
      return -1
    }

    function LO(BB, OB, GB, YB, DB, lB, RB) {
      var IB;
      if (YB && (IB = lB ? YB(BB, DB, lB, RB) : YB(BB)), void 0 !== IB) return IB;
      if (!xO(BB)) return BB;
      var FB = CO(BB);
      if (FB) {
        if (IB = function(BB) {
            var OB = BB.length,
              GB = BB.constructor(OB);
            OB && "string" == typeof BB[0] && OO.call(BB, "index") && (GB.index = BB.index, GB.input = BB.input);
            return GB
          }(BB), !OB) return function(BB, OB) {
          var GB = -1,
            YB = BB.length;
          OB || (OB = Array(YB));
          for (; ++GB < YB;) OB[GB] = BB[GB];
          return OB
        }(BB, IB)
      } else {
        var LB = hO(BB),
          gB = LB == yB || LB == JB;
        if (vO(BB)) return function(BB, OB) {
          if (OB) return BB.slice();
          var GB = new BB.constructor(BB.length);
          return BB.copy(GB), GB
        }(BB, OB);
        if (LB == zB || LB == QB || gB && !lB) {
          if (eB(BB)) return lB ? BB : {};
          if (IB = function(BB) {
              return "function" != typeof BB.constructor || eO(BB) ? {} : (OB = jO(BB), xO(OB) ? yO(OB) : {});
              var OB
            }(gB ? {} : BB), !OB) return function(BB, OB) {
            return XO(BB, cO(BB), OB)
          }(BB, function(BB, OB) {
            return BB && XO(OB, tO(OB), BB)
          }(IB, BB))
        } else {
          if (!iB[LB]) return lB ? BB : {};
          IB = function(BB, OB, GB, YB) {
            var DB = BB.constructor;
            switch (OB) {
              case WB:
                return rO(BB);
              case oB:
              case jB:
                return new DB(+BB);
              case AB:
                return function(BB, OB) {
                  var GB = OB ? rO(BB.buffer) : BB.buffer;
                  return new BB.constructor(GB, BB.byteOffset, BB.byteLength)
                }(BB, YB);
              case VB:
              case SB:
              case nB:
              case UB:
              case fB:
              case kB:
              case dB:
              case KB:
              case uB:
                return function(BB, OB) {
                  var GB = OB ? rO(BB.buffer) : BB.buffer;
                  return new BB.constructor(GB, BB.byteOffset, BB.length)
                }(BB, YB);
              case MB:
                return function(BB, OB, GB) {
                  var YB = OB ? GB(TB(BB), !0) : TB(BB);
                  return aB(YB, cB, new BB.constructor)
                }(BB, YB, GB);
              case PB:
              case ZB:
                return new DB(BB);
              case pB:
                return function(BB) {
                  var OB = new BB.constructor(BB.source, mB.exec(BB));
                  return OB.lastIndex = BB.lastIndex, OB
                }(BB);
              case qB:
                return function(BB, OB, GB) {
                  var YB = OB ? GB(CB(BB), !0) : CB(BB);
                  return aB(YB, hB, new BB.constructor)
                }(BB, YB, GB);
              case NB:
                return QB = BB, kO ? Object(kO.call(QB)) : {}
            }
            var QB
          }(BB, LB, LO, OB)
        }
      }
      RB || (RB = new mO);
      var rB = RB.get(BB);
      if (rB) return rB;
      if (RB.set(BB, IB), !FB) var XB = GB ? function(BB) {
        return function(BB, OB, GB) {
          var YB = OB(BB);
          return CO(BB) ? YB : function(BB, OB) {
            for (var GB = -1, YB = OB.length, DB = BB.length; ++GB < YB;) BB[DB + GB] = OB[GB];
            return BB
          }(YB, GB(BB))
        }(BB, tO, cO)
      }(BB) : tO(BB);
      return function(BB, OB) {
        for (var GB = -1, YB = BB ? BB.length : 0; ++GB < YB && !1 !== OB(BB[GB], GB, BB););
      }(XB || BB, (function(DB, QB) {
        XB && (DB = BB[QB = DB]), FO(IB, QB, LO(DB, OB, GB, YB, QB, BB, RB))
      })), IB
    }

    function gO(BB) {
      return !(!xO(BB) || (OB = BB, tB && tB in OB)) && (sO(BB) || eB(BB) ? YO : IB).test(TO(BB));
      var OB
    }

    function rO(BB) {
      var OB = new BB.constructor(BB.byteLength);
      return new oO(OB).set(new oO(BB)), OB
    }

    function XO(BB, OB, GB, YB) {
      GB || (GB = {});
      for (var DB = -1, QB = OB.length; ++DB < QB;) {
        var oB = OB[DB],
          jB = YB ? YB(GB[oB], BB[oB], oB, GB, BB) : void 0;
        FO(GB, oB, void 0 === jB ? BB[oB] : jB)
      }
      return GB
    }

    function wO(BB, OB) {
      var GB = BB.__data__;
      return function(BB) {
        var OB = typeof BB;
        return "string" == OB || "number" == OB || "symbol" == OB || "boolean" == OB ? "__proto__" !== BB : null === BB
      }(OB) ? GB["string" == typeof OB ? "string" : "hash"] : GB.map
    }

    function EO(BB, OB) {
      var GB = function(BB, OB) {
        return null == BB ? void 0 : BB[OB]
      }(BB, OB);
      return gO(GB) ? GB : void 0
    }
    dO.prototype.clear = function() {
      this.__data__ = WO ? WO(null) : {}
    }, dO.prototype.delete = function(BB) {
      return this.has(BB) && delete this.__data__[BB]
    }, dO.prototype.get = function(BB) {
      var OB = this.__data__;
      if (WO) {
        var GB = OB[BB];
        return GB === YB ? void 0 : GB
      }
      return OO.call(OB, BB) ? OB[BB] : void 0
    }, dO.prototype.has = function(BB) {
      var OB = this.__data__;
      return WO ? void 0 !== OB[BB] : OO.call(OB, BB)
    }, dO.prototype.set = function(BB, OB) {
      return this.__data__[BB] = WO && void 0 === OB ? YB : OB, this
    }, KO.prototype.clear = function() {
      this.__data__ = []
    }, KO.prototype.delete = function(BB) {
      var OB = this.__data__,
        GB = iO(OB, BB);
      return !(GB < 0) && (GB == OB.length - 1 ? OB.pop() : MO.call(OB, GB, 1), !0)
    }, KO.prototype.get = function(BB) {
      var OB = this.__data__,
        GB = iO(OB, BB);
      return GB < 0 ? void 0 : OB[GB][1]
    }, KO.prototype.has = function(BB) {
      return iO(this.__data__, BB) > -1
    }, KO.prototype.set = function(BB, OB) {
      var GB = this.__data__,
        YB = iO(GB, BB);
      return YB < 0 ? GB.push([BB, OB]) : GB[YB][1] = OB, this
    }, uO.prototype.clear = function() {
      this.__data__ = {
        hash: new dO,
        map: new(qO || KO),
        string: new dO
      }
    }, uO.prototype.delete = function(BB) {
      return wO(this, BB).delete(BB)
    }, uO.prototype.get = function(BB) {
      return wO(this, BB).get(BB)
    }, uO.prototype.has = function(BB) {
      return wO(this, BB).has(BB)
    }, uO.prototype.set = function(BB, OB) {
      return wO(this, BB).set(BB, OB), this
    }, mO.prototype.clear = function() {
      this.__data__ = new KO
    }, mO.prototype.delete = function(BB) {
      return this.__data__.delete(BB)
    }, mO.prototype.get = function(BB) {
      return this.__data__.get(BB)
    }, mO.prototype.has = function(BB) {
      return this.__data__.has(BB)
    }, mO.prototype.set = function(BB, OB) {
      var GB = this.__data__;
      if (GB instanceof KO) {
        var YB = GB.__data__;
        if (!qO || YB.length < 199) return YB.push([BB, OB]), this;
        GB = this.__data__ = new uO(YB)
      }
      return GB.set(BB, OB), this
    };
    var cO = PO ? bB(PO, Object) : function() {
        return []
      },
      hO = function(BB) {
        return GO.call(BB)
      };

    function aO(BB, OB) {
      return !!(OB = null == OB ? DB : OB) && ("number" == typeof BB || FB.test(BB)) && BB > -1 && BB % 1 == 0 && BB < OB
    }

    function eO(BB) {
      var OB = BB && BB.constructor;
      return BB === ("function" == typeof OB && OB.prototype || sB)
    }

    function TO(BB) {
      if (null != BB) {
        try {
          return BO.call(BB)
        } catch (OB) {}
        try {
          return BB + ""
        } catch (OB) {}
      }
      return ""
    }

    function bO(BB, OB) {
      return BB === OB || BB !== BB && OB !== OB
    }(pO && hO(new pO(new ArrayBuffer(1))) != AB || qO && hO(new qO) != MB || ZO && hO(ZO.resolve()) != lB || NO && hO(new NO) != qB || RO && hO(new RO) != RB) && (hO = function(BB) {
      var OB = GO.call(BB),
        GB = OB == zB ? BB.constructor : void 0,
        YB = GB ? TO(GB) : void 0;
      if (YB) switch (YB) {
        case AO:
          return AB;
        case VO:
          return MB;
        case SO:
          return lB;
        case nO:
          return qB;
        case UO:
          return RB
      }
      return OB
    });
    var CO = Array.isArray;

    function HO(BB) {
      return null != BB && function(BB) {
        return "number" == typeof BB && BB > -1 && BB % 1 == 0 && BB <= DB
      }(BB.length) && !sO(BB)
    }
    var vO = zO || function() {
      return !1
    };

    function sO(BB) {
      var OB = xO(BB) ? GO.call(BB) : "";
      return OB == yB || OB == JB
    }

    function xO(BB) {
      var OB = typeof BB;
      return !!BB && ("object" == OB || "function" == OB)
    }

    function tO(BB) {
      return HO(BB) ? IO(BB) : function(BB) {
        if (!eO(BB)) return lO(BB);
        var OB = [];
        for (var GB in Object(BB)) OO.call(BB, GB) && "constructor" != GB && OB.push(GB);
        return OB
      }(BB)
    }
    BB.exports = function(BB) {
      return LO(BB, !0, !0)
    }
  },
  39106: BB => {
    function OB(BB, OB, GB) {
      for (var YB = BB.length, DB = -1 / 0, QB = 1 / 0, oB = 0; oB < YB; oB++) {
        var jB = (GB[0][oB] - BB[oB]) / OB[oB],
          yB = (GB[1][oB] - BB[oB]) / OB[oB];
        if (jB > yB) {
          var JB = jB;
          jB = yB, yB = JB
        }
        if (yB < DB || jB > QB) return 1 / 0;
        jB > DB && (DB = jB), yB < QB && (QB = yB)
      }
      return DB > QB ? 1 / 0 : DB
    }
    BB.exports = function(BB, GB, YB, DB) {
      var QB = OB(GB, YB, DB);
      if (QB === 1 / 0) BB = null;
      else {
        BB = BB || [];
        for (var oB = 0; oB < GB.length; oB++) BB[oB] = GB[oB] + YB[oB] * QB
      }
      return BB
    }, BB.exports.distance = OB
  },
  38383: (BB, OB, GB) => {
    var YB = GB(38392);

    function DB(BB) {
      for (var OB, GB, DB = 0, QB = BB.length, oB = 0; oB < BB.length;) {
        for (OB = BB[oB], GB = 0; oB < QB && BB[oB] === OB;) ++oB, ++GB;
        DB += YB.log2(GB) / 7 | 0, DB += YB.log2(OB >>> 0) / 7 | 0, DB += 2
      }
      return DB
    }
    OB.size = DB, OB.encode = function(BB, OB) {
      OB || (OB = new Uint8Array(DB(BB)));
      for (var GB, YB, QB = 0, oB = OB.length, jB = 0; jB < BB.length;) {
        for (GB = BB[jB], YB = 0; jB < BB.length && BB[jB] === GB;) ++jB, ++YB;
        for (; QB < oB && YB >= 128;) OB[QB++] = 128 + (127 & YB), YB >>>= 7;
        if (QB >= oB) throw new Error("RLE buffer overflow");
        for (OB[QB++] = YB, GB >>>= 0; QB < oB && GB >= 128;) OB[QB++] = 128 + (127 & GB), GB >>>= 7;
        if (QB >= oB) throw new Error("RLE buffer overflow");
        OB[QB++] = GB
      }
      return OB
    }, OB.decode = function(BB, OB) {
      for (var GB, YB, DB, QB, oB = OB.length, jB = BB.length, yB = 0, JB = 0; JB < jB;) {
        for (GB = 0, YB = 0; JB < jB && BB[JB] >= 128;) GB += (127 & BB[JB++]) << YB, YB += 7;
        if (GB += BB[JB++] << YB, JB >= jB) throw new Error("RLE buffer underrun");
        if (yB + GB > oB) throw new Error("Chunk buffer overflow");
        for (DB = 0, YB = 0; JB < jB && BB[JB] >= 128;) DB += (127 & BB[JB++]) << YB, YB += 7;
        if (JB >= jB) throw new Error("RLE buffer underrun");
        for (DB += BB[JB++] << YB, QB = 0; QB < GB; ++QB) OB[yB++] = DB
      }
      return OB
    }
  },
  38392: (BB, OB) => {
    function GB(BB) {
      var OB = 32;
      return (BB &= -BB) && OB--, 65535 & BB && (OB -= 16), 16711935 & BB && (OB -= 8), 252645135 & BB && (OB -= 4), 858993459 & BB && (OB -= 2), 1431655765 & BB && (OB -= 1), OB
    }
    OB.INT_BITS = 32, OB.INT_MAX = 2147483647, OB.INT_MIN = -1 << 31, OB.sign = function(BB) {
      return (BB > 0) - (BB < 0)
    }, OB.abs = function(BB) {
      var OB = BB >> 31;
      return (BB ^ OB) - OB
    }, OB.min = function(BB, OB) {
      return OB ^ (BB ^ OB) & -(BB < OB)
    }, OB.max = function(BB, OB) {
      return BB ^ (BB ^ OB) & -(BB < OB)
    }, OB.isPow2 = function(BB) {
      return !(BB & BB - 1) && !!BB
    }, OB.log2 = function(BB) {
      var OB, GB;
      return OB = (BB > 65535) << 4, OB |= GB = ((BB >>>= OB) > 255) << 3, OB |= GB = ((BB >>>= GB) > 15) << 2, (OB |= GB = ((BB >>>= GB) > 3) << 1) | (BB >>>= GB) >> 1
    }, OB.log10 = function(BB) {
      return BB >= 1e9 ? 9 : BB >= 1e8 ? 8 : BB >= 1e7 ? 7 : BB >= 1e6 ? 6 : BB >= 1e5 ? 5 : BB >= 1e4 ? 4 : BB >= 1e3 ? 3 : BB >= 100 ? 2 : BB >= 10 ? 1 : 0
    }, OB.popCount = function(BB) {
      return 16843009 * ((BB = (858993459 & (BB -= BB >>> 1 & 1431655765)) + (BB >>> 2 & 858993459)) + (BB >>> 4) & 252645135) >>> 24
    }, OB.countTrailingZeros = GB, OB.nextPow2 = function(BB) {
      return BB += 0 === BB, --BB, BB |= BB >>> 1, BB |= BB >>> 2, BB |= BB >>> 4, BB |= BB >>> 8, (BB |= BB >>> 16) + 1
    }, OB.prevPow2 = function(BB) {
      return BB |= BB >>> 1, BB |= BB >>> 2, BB |= BB >>> 4, BB |= BB >>> 8, (BB |= BB >>> 16) - (BB >>> 1)
    }, OB.parity = function(BB) {
      return BB ^= BB >>> 16, BB ^= BB >>> 8, BB ^= BB >>> 4, 27030 >>> (BB &= 15) & 1
    };
    var YB = new Array(256);
    ! function(BB) {
      for (var OB = 0; OB < 256; ++OB) {
        var GB = OB,
          YB = OB,
          DB = 7;
        for (GB >>>= 1; GB; GB >>>= 1) YB <<= 1, YB |= 1 & GB, --DB;
        BB[OB] = YB << DB & 255
      }
    }(YB), OB.reverse = function(BB) {
      return YB[255 & BB] << 24 | YB[BB >>> 8 & 255] << 16 | YB[BB >>> 16 & 255] << 8 | YB[BB >>> 24 & 255]
    }, OB.interleave2 = function(BB, OB) {
      return (BB = 1431655765 & ((BB = 858993459 & ((BB = 252645135 & ((BB = 16711935 & ((BB &= 65535) | BB << 8)) | BB << 4)) | BB << 2)) | BB << 1)) | (OB = 1431655765 & ((OB = 858993459 & ((OB = 252645135 & ((OB = 16711935 & ((OB &= 65535) | OB << 8)) | OB << 4)) | OB << 2)) | OB << 1)) << 1
    }, OB.deinterleave2 = function(BB, OB) {
      return (BB = 65535 & ((BB = 16711935 & ((BB = 252645135 & ((BB = 858993459 & ((BB = BB >>> OB & 1431655765) | BB >>> 1)) | BB >>> 2)) | BB >>> 4)) | BB >>> 16)) << 16 >> 16
    }, OB.interleave3 = function(BB, OB, GB) {
      return BB = 1227133513 & ((BB = 3272356035 & ((BB = 251719695 & ((BB = 4278190335 & ((BB &= 1023) | BB << 16)) | BB << 8)) | BB << 4)) | BB << 2), (BB |= (OB = 1227133513 & ((OB = 3272356035 & ((OB = 251719695 & ((OB = 4278190335 & ((OB &= 1023) | OB << 16)) | OB << 8)) | OB << 4)) | OB << 2)) << 1) | (GB = 1227133513 & ((GB = 3272356035 & ((GB = 251719695 & ((GB = 4278190335 & ((GB &= 1023) | GB << 16)) | GB << 8)) | GB << 4)) | GB << 2)) << 2
    }, OB.deinterleave3 = function(BB, OB) {
      return (BB = 1023 & ((BB = 4278190335 & ((BB = 251719695 & ((BB = 3272356035 & ((BB = BB >>> OB & 1227133513) | BB >>> 2)) | BB >>> 4)) | BB >>> 8)) | BB >>> 16)) << 22 >> 22
    }, OB.nextCombination = function(BB) {
      var OB = BB | BB - 1;
      return OB + 1 | (~OB & -~OB) - 1 >>> GB(BB) + 1
    }
  },
  37885: (BB, OB, GB) => {
    GB.d(OB, {
      Color3: () => YB.c,
      e: () => YB.g
    });
    var YB = GB(37894);
    (0, YB.k)()
  },
  38424: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => DB
    });
    var YB = GB(38432);
    class DB {
      static GetPlanes(BB) {
        const OB = [];
        for (let GB = 0; GB < 6; GB++) OB.push(new YB.c(0, 0, 0, 0));
        return DB.GetPlanesToRef(BB, OB), OB
      }
      static GetNearPlaneToRef(BB, OB) {
        const GB = BB.m;
        OB.normal.x = GB[3] + GB[2], OB.normal.y = GB[7] + GB[6], OB.normal.z = GB[11] + GB[10], OB.d = GB[15] + GB[14], OB.normalize()
      }
      static GetFarPlaneToRef(BB, OB) {
        const GB = BB.m;
        OB.normal.x = GB[3] - GB[2], OB.normal.y = GB[7] - GB[6], OB.normal.z = GB[11] - GB[10], OB.d = GB[15] - GB[14], OB.normalize()
      }
      static GetLeftPlaneToRef(BB, OB) {
        const GB = BB.m;
        OB.normal.x = GB[3] + GB[0], OB.normal.y = GB[7] + GB[4], OB.normal.z = GB[11] + GB[8], OB.d = GB[15] + GB[12], OB.normalize()
      }
      static GetRightPlaneToRef(BB, OB) {
        const GB = BB.m;
        OB.normal.x = GB[3] - GB[0], OB.normal.y = GB[7] - GB[4], OB.normal.z = GB[11] - GB[8], OB.d = GB[15] - GB[12], OB.normalize()
      }
      static GetTopPlaneToRef(BB, OB) {
        const GB = BB.m;
        OB.normal.x = GB[3] - GB[1], OB.normal.y = GB[7] - GB[5], OB.normal.z = GB[11] - GB[9], OB.d = GB[15] - GB[13], OB.normalize()
      }
      static GetBottomPlaneToRef(BB, OB) {
        const GB = BB.m;
        OB.normal.x = GB[3] + GB[1], OB.normal.y = GB[7] + GB[5], OB.normal.z = GB[11] + GB[9], OB.d = GB[15] + GB[13], OB.normalize()
      }
      static GetPlanesToRef(BB, OB) {
        DB.GetNearPlaneToRef(BB, OB[0]), DB.GetFarPlaneToRef(BB, OB[1]), DB.GetLeftPlaneToRef(BB, OB[2]), DB.GetRightPlaneToRef(BB, OB[3]), DB.GetTopPlaneToRef(BB, OB[4]), DB.GetBottomPlaneToRef(BB, OB[5])
      }
      static IsPointInFrustum(BB, OB) {
        for (let GB = 0; GB < 6; GB++)
          if (OB[GB].dotCoordinate(BB) < 0) return !1;
        return !0
      }
    }
  },
  38432: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => DB
    });
    var YB = GB(37778);
    class DB {
      constructor(BB, OB, GB, DB) {
        this.normal = new YB.r(BB, OB, GB), this.d = DB
      }
      dDB() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new DB(this.normal.x, this.normal.y, this.normal.z, this.d)
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
        let OB = 0;
        return 0 !== BB && (OB = 1 / BB), this.normal.x *= OB, this.normal.y *= OB, this.normal.z *= OB, this.d *= OB, this
      }
      transform(BB) {
        const OB = DB._TmpMatrix;
        BB.invertToRef(OB);
        const GB = OB.m,
          YB = this.normal.x,
          QB = this.normal.y,
          oB = this.normal.z,
          jB = this.d,
          yB = YB * GB[0] + QB * GB[1] + oB * GB[2] + jB * GB[3],
          JB = YB * GB[4] + QB * GB[5] + oB * GB[6] + jB * GB[7],
          MB = YB * GB[8] + QB * GB[9] + oB * GB[10] + jB * GB[11],
          PB = YB * GB[12] + QB * GB[13] + oB * GB[14] + jB * GB[15];
        return new DB(yB, JB, MB, PB)
      }
      dotCoordinate(BB) {
        return this.normal.x * BB.x + this.normal.y * BB.y + this.normal.z * BB.z + this.d
      }
      copyFromPoints(BB, OB, GB) {
        const YB = OB.x - BB.x,
          DB = OB.y - BB.y,
          QB = OB.z - BB.z,
          oB = GB.x - BB.x,
          jB = GB.y - BB.y,
          yB = GB.z - BB.z,
          JB = DB * yB - QB * jB,
          MB = QB * oB - YB * yB,
          PB = YB * jB - DB * oB,
          zB = Math.sqrt(JB * JB + MB * MB + PB * PB);
        let lB;
        return lB = 0 !== zB ? 1 / zB : 0, this.normal.x = JB * lB, this.normal.y = MB * lB, this.normal.z = PB * lB, this.d = -(this.normal.x * BB.x + this.normal.y * BB.y + this.normal.z * BB.z), this
      }
      isFrontFacingTo(BB, OB) {
        return YB.r.Dot(this.normal, BB) <= OB
      }
      signedDistanceTo(BB) {
        return YB.r.Dot(BB, this.normal) + this.d
      }
      static FromArray(BB) {
        return new DB(BB[0], BB[1], BB[2], BB[3])
      }
      static FromPoints(BB, OB, GB) {
        const YB = new DB(0, 0, 0, 0);
        return YB.copyFromPoints(BB, OB, GB), YB
      }
      static FromPositionAndNormal(BB, OB) {
        const GB = new DB(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(BB, OB, GB)
      }
      static FromPositionAndNormalToRef(BB, OB, GB) {
        return GB.normal.IU(OB), GB.normal.normalize(), GB.d = -BB.dot(GB.normal), GB
      }
      static SignedDistanceToPlaneFromPositionAndNormal(BB, OB, GB) {
        const DB = -(OB.x * BB.x + OB.y * BB.y + OB.z * BB.z);
        return YB.r.Dot(GB, OB) + DB
      }
    }
    DB._TmpMatrix = YB.d.Identity()
  },
  37771: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      Matrix: () => YB.d,
      Quaternion: () => YB.f,
      RegisterMathVector: () => YB.j,
      TmpVectors: () => YB.k,
      Vector2: () => YB.o,
      Xp: () => YB.r,
      Vector4: () => YB.t
    });
    var YB = GB(37778);
    (0, YB.j)()
  },
  38769: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => YB
    });
    class YB {
      constructor(BB, OB, GB, YB) {
        this.x = BB, this.y = OB, this.width = GB, this.height = YB
      }
      toGlobal(BB, OB) {
        return new YB(this.x * BB, this.y * OB, this.width * BB, this.height * OB)
      }
      toGlobalToRef(BB, OB, GB) {
        return GB.x = this.x * BB, GB.y = this.y * OB, GB.width = this.width * BB, GB.height = this.height * OB, this
      }
      clone() {
        return new YB(this.x, this.y, this.width, this.height)
      }
    }
  },
  38589: (BB, OB, GB) => {
    function YB() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (BB => {
        const OB = 16 * Math.random() | 0;
        return ("x" === BB ? OB : 3 & OB | 8).toString(16)
      }))
    }
    GB.d(OB, {
      e: () => YB
    })
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);