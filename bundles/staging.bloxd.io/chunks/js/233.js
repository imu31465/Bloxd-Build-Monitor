/*! For license information please see c6gaap.233.3edc322e.chunk.js.LICENSE.txt */
export const id = 233;
export const ids = [233, 241];
export const modules = {
  38357: BB => {
    BB.exports = function(BB) {
      return null != BB && null != BB.constructor && "function" === typeof BB.constructor.isBuffer && BB.constructor.isBuffer(BB)
    }
  },
  38342: (BB, IB, ZB) => {
    var TB = ZB(38344),
      JB = ZB(38353),
      oB = ZB(38357);
    ZB.g.__TYPEDARRAY_POOL || (ZB.g.__TYPEDARRAY_POOL = {
      UINT8: JB([32, 0]),
      UINT16: JB([32, 0]),
      UINT32: JB([32, 0]),
      INT8: JB([32, 0]),
      INT16: JB([32, 0]),
      INT32: JB([32, 0]),
      FLOAT: JB([32, 0]),
      DOUBLE: JB([32, 0]),
      DATA: JB([32, 0]),
      UINT8C: JB([32, 0]),
      BUFFER: JB([32, 0])
    });
    var GB = "undefined" !== typeof Uint8ClampedArray,
      vB = ZB.g.__TYPEDARRAY_POOL;
    vB.UINT8C || (vB.UINT8C = JB([32, 0])), vB.BUFFER || (vB.BUFFER = JB([32, 0]));
    var kB = vB.DATA,
      cB = vB.BUFFER;

    function nB(BB) {
      if (BB) {
        var IB = BB.length || BB.byteLength,
          ZB = TB.log2(IB);
        kB[ZB].push(BB)
      }
    }

    function hB(BB) {
      BB = TB.nextPow2(BB);
      var IB = TB.log2(BB),
        ZB = kB[IB];
      return ZB.length > 0 ? ZB.pop() : new ArrayBuffer(BB)
    }

    function zB(BB) {
      return new Uint8Array(hB(BB), 0, BB)
    }

    function FB(BB) {
      return new Uint16Array(hB(2 * BB), 0, BB)
    }

    function NB(BB) {
      return new Uint32Array(hB(4 * BB), 0, BB)
    }

    function gB(BB) {
      return new Int8Array(hB(BB), 0, BB)
    }

    function qB(BB) {
      return new Int16Array(hB(2 * BB), 0, BB)
    }

    function yB(BB) {
      return new Int32Array(hB(4 * BB), 0, BB)
    }

    function UB(BB) {
      return new Float32Array(hB(4 * BB), 0, BB)
    }

    function WB(BB) {
      return new Float64Array(hB(8 * BB), 0, BB)
    }

    function dB(BB) {
      return GB ? new Uint8ClampedArray(hB(BB), 0, BB) : zB(BB)
    }

    function CB(BB) {
      return new DataView(hB(BB), 0, BB)
    }
    IB.free = function(BB) {
      if (oB(BB)) cB[TB.log2(BB.length)].push(BB);
      else {
        if ("[object ArrayBuffer]" !== Object.prototype.toString.call(BB) && (BB = BB.buffer), !BB) return;
        var IB = BB.length || BB.byteLength,
          ZB = 0 | TB.log2(IB);
        kB[ZB].push(BB)
      }
    }, IB.freeUint8 = IB.freeUint16 = IB.freeUint32 = IB.freeInt8 = IB.freeInt16 = IB.freeInt32 = IB.freeFloat32 = IB.freeFloat = IB.freeFloat64 = IB.freeDouble = IB.freeUint8Clamped = IB.freeDataView = function(BB) {
      nB(BB.buffer)
    }, IB.freeArrayBuffer = nB, IB.freeBuffer = function(BB) {
      cB[TB.log2(BB.length)].push(BB)
    }, IB.malloc = function(BB, IB) {
      if (void 0 === IB || "arraybuffer" === IB) return hB(BB);
      switch (IB) {
        case "uint8":
          return zB(BB);
        case "uint16":
          return FB(BB);
        case "uint32":
          return NB(BB);
        case "int8":
          return gB(BB);
        case "int16":
          return qB(BB);
        case "int32":
          return yB(BB);
        case "float":
        case "float32":
          return UB(BB);
        case "double":
        case "float64":
          return WB(BB);
        case "uint8_clamped":
          return dB(BB);
        case "buffer":
          throw "Buffer not supported";
        case "data":
        case "dataview":
          return CB(BB);
        default:
          return null
      }
      return null
    }, IB.mallocArrayBuffer = hB, IB.mallocUint8 = zB, IB.mallocUint16 = FB, IB.mallocUint32 = NB, IB.mallocInt8 = gB, IB.mallocInt16 = qB, IB.mallocInt32 = yB, IB.mallocFloat32 = IB.mallocFloat = UB, IB.mallocFloat64 = IB.mallocDouble = WB, IB.mallocUint8Clamped = dB, IB.mallocDataView = CB, IB.clearCache = function() {
      for (var BB = 0; BB < 32; ++BB) vB.UINT8[BB].length = 0, vB.UINT16[BB].length = 0, vB.UINT32[BB].length = 0, vB.INT8[BB].length = 0, vB.INT16[BB].length = 0, vB.INT32[BB].length = 0, vB.FLOAT[BB].length = 0, vB.DOUBLE[BB].length = 0, vB.UINT8C[BB].length = 0, kB[BB].length = 0, cB[BB].length = 0
    }
  },
  38344: (BB, IB) => {
    function ZB(BB) {
      var IB = 32;
      return (BB &= -BB) && IB--, 65535 & BB && (IB -= 16), 16711935 & BB && (IB -= 8), 252645135 & BB && (IB -= 4), 858993459 & BB && (IB -= 2), 1431655765 & BB && (IB -= 1), IB
    }
    IB.INT_BITS = 32, IB.INT_MAX = 2147483647, IB.INT_MIN = -1 << 31, IB.sign = function(BB) {
      return (BB > 0) - (BB < 0)
    }, IB.abs = function(BB) {
      var IB = BB >> 31;
      return (BB ^ IB) - IB
    }, IB.min = function(BB, IB) {
      return IB ^ (BB ^ IB) & -(BB < IB)
    }, IB.max = function(BB, IB) {
      return BB ^ (BB ^ IB) & -(BB < IB)
    }, IB.isPow2 = function(BB) {
      return !(BB & BB - 1) && !!BB
    }, IB.log2 = function(BB) {
      var IB, ZB;
      return IB = (BB > 65535) << 4, IB |= ZB = ((BB >>>= IB) > 255) << 3, IB |= ZB = ((BB >>>= ZB) > 15) << 2, (IB |= ZB = ((BB >>>= ZB) > 3) << 1) | (BB >>>= ZB) >> 1
    }, IB.log10 = function(BB) {
      return BB >= 1e9 ? 9 : BB >= 1e8 ? 8 : BB >= 1e7 ? 7 : BB >= 1e6 ? 6 : BB >= 1e5 ? 5 : BB >= 1e4 ? 4 : BB >= 1e3 ? 3 : BB >= 100 ? 2 : BB >= 10 ? 1 : 0
    }, IB.popCount = function(BB) {
      return 16843009 * ((BB = (858993459 & (BB -= BB >>> 1 & 1431655765)) + (BB >>> 2 & 858993459)) + (BB >>> 4) & 252645135) >>> 24
    }, IB.countTrailingZeros = ZB, IB.nextPow2 = function(BB) {
      return BB += 0 === BB, --BB, BB |= BB >>> 1, BB |= BB >>> 2, BB |= BB >>> 4, BB |= BB >>> 8, (BB |= BB >>> 16) + 1
    }, IB.prevPow2 = function(BB) {
      return BB |= BB >>> 1, BB |= BB >>> 2, BB |= BB >>> 4, BB |= BB >>> 8, (BB |= BB >>> 16) - (BB >>> 1)
    }, IB.parity = function(BB) {
      return BB ^= BB >>> 16, BB ^= BB >>> 8, BB ^= BB >>> 4, 27030 >>> (BB &= 15) & 1
    };
    var TB = new Array(256);
    ! function(BB) {
      for (var IB = 0; IB < 256; ++IB) {
        var ZB = IB,
          TB = IB,
          JB = 7;
        for (ZB >>>= 1; ZB; ZB >>>= 1) TB <<= 1, TB |= 1 & ZB, --JB;
        BB[IB] = TB << JB & 255
      }
    }(TB), IB.reverse = function(BB) {
      return TB[255 & BB] << 24 | TB[BB >>> 8 & 255] << 16 | TB[BB >>> 16 & 255] << 8 | TB[BB >>> 24 & 255]
    }, IB.interleave2 = function(BB, IB) {
      return (BB = 1431655765 & ((BB = 858993459 & ((BB = 252645135 & ((BB = 16711935 & ((BB &= 65535) | BB << 8)) | BB << 4)) | BB << 2)) | BB << 1)) | (IB = 1431655765 & ((IB = 858993459 & ((IB = 252645135 & ((IB = 16711935 & ((IB &= 65535) | IB << 8)) | IB << 4)) | IB << 2)) | IB << 1)) << 1
    }, IB.deinterleave2 = function(BB, IB) {
      return (BB = 65535 & ((BB = 16711935 & ((BB = 252645135 & ((BB = 858993459 & ((BB = BB >>> IB & 1431655765) | BB >>> 1)) | BB >>> 2)) | BB >>> 4)) | BB >>> 16)) << 16 >> 16
    }, IB.interleave3 = function(BB, IB, ZB) {
      return BB = 1227133513 & ((BB = 3272356035 & ((BB = 251719695 & ((BB = 4278190335 & ((BB &= 1023) | BB << 16)) | BB << 8)) | BB << 4)) | BB << 2), (BB |= (IB = 1227133513 & ((IB = 3272356035 & ((IB = 251719695 & ((IB = 4278190335 & ((IB &= 1023) | IB << 16)) | IB << 8)) | IB << 4)) | IB << 2)) << 1) | (ZB = 1227133513 & ((ZB = 3272356035 & ((ZB = 251719695 & ((ZB = 4278190335 & ((ZB &= 1023) | ZB << 16)) | ZB << 8)) | ZB << 4)) | ZB << 2)) << 2
    }, IB.deinterleave3 = function(BB, IB) {
      return (BB = 1023 & ((BB = 4278190335 & ((BB = 251719695 & ((BB = 3272356035 & ((BB = BB >>> IB & 1227133513) | BB >>> 2)) | BB >>> 4)) | BB >>> 8)) | BB >>> 16)) << 22 >> 22
    }, IB.nextCombination = function(BB) {
      var IB = BB | BB - 1;
      return IB + 1 | (~IB & -~IB) - 1 >>> ZB(BB) + 1
    }
  },
  38336: (BB, IB, ZB) => {
    BB.exports = function(BB, IB, ZB) {
      switch (arguments.length) {
        case 1:
          return TB = [], cB(JB = BB, JB, nB, !0), TB;
        case 2:
          return "function" === typeof IB ? cB(BB, BB, IB, !0) : function(BB, IB) {
            return TB = [], cB(BB, IB, nB, !1), TB
          }(BB, IB);
        case 3:
          return cB(BB, IB, ZB, !1);
        default:
          throw new Error("box-intersect: Invalid arguments")
      }
      var JB
    };
    var TB, JB = ZB(38342),
      oB = ZB(38364),
      GB = ZB(38378);

    function vB(BB, IB) {
      for (var ZB = 0; ZB < BB; ++ZB)
        if (!(IB[ZB] <= IB[ZB + BB])) return !0;
      return !1
    }

    function kB(BB, IB, ZB, TB) {
      for (var JB = 0, oB = 0, GB = 0, kB = BB.length; GB < kB; ++GB) {
        var cB = BB[GB];
        if (!vB(IB, cB)) {
          for (var nB = 0; nB < 2 * IB; ++nB) ZB[JB++] = cB[nB];
          TB[oB++] = GB
        }
      }
      return oB
    }

    function cB(BB, IB, ZB, TB) {
      var vB = BB.length,
        cB = IB.length;
      if (!(vB <= 0 || cB <= 0)) {
        var nB = BB[0].length >>> 1;
        if (!(nB <= 0)) {
          var hB, zB = JB.mallocDouble(2 * nB * vB),
            FB = JB.mallocInt32(vB);
          if ((vB = kB(BB, nB, zB, FB)) > 0) {
            if (1 === nB && TB) oB.init(vB), hB = oB.sweepComplete(nB, ZB, 0, vB, zB, FB, 0, vB, zB, FB);
            else {
              var NB = JB.mallocDouble(2 * nB * cB),
                gB = JB.mallocInt32(cB);
              (cB = kB(IB, nB, NB, gB)) > 0 && (oB.init(vB + cB), hB = 1 === nB ? oB.sweepBipartite(nB, ZB, 0, vB, zB, FB, 0, cB, NB, gB) : GB(nB, ZB, TB, vB, zB, FB, cB, NB, gB), JB.free(NB), JB.free(gB))
            }
            JB.free(zB), JB.free(FB)
          }
          return hB
        }
      }
    }

    function nB(BB, IB) {
      TB.push([BB, IB])
    }
  },
  38387: (BB, IB) => {
    var ZB = "d",
      TB = "ax",
      JB = "fp",
      oB = "es",
      GB = "rs",
      vB = "re",
      kB = "rb",
      cB = "bs",
      nB = "be",
      hB = "bb",
      zB = [ZB, TB, "vv", GB, vB, kB, "ri", cB, nB, hB, "bi"];

    function FB(BB) {
      var IB = "bruteForce" + (BB ? "Full" : "Partial"),
        TB = [],
        GB = zB.slice();
      BB || GB.splice(3, 0, JB);
      var vB = ["function " + IB + "(" + GB.join() + "){"];

      function kB(IB, JB) {
        var GB = function(BB, IB, TB) {
          var JB = "bruteForce" + (BB ? "Red" : "Blue") + (IB ? "Flip" : "") + (TB ? "Full" : ""),
            GB = ["function ", JB, "(", zB.join(), "){", "var ", oB, "=2*", ZB, ";"],
            vB = "for(var i=rs,rp=es*rs;i<re;++i,rp+=es){var x0=rb[ax+rp],x1=rb[ax+rp+d],xi=ri[i];",
            kB = "for(var j=bs,bp=es*bs;j<be;++j,bp+=es){var y0=bb[ax+bp]," + (TB ? "y1=bb[ax+bp+d]," : "") + "yi=bi[j];";
          return BB ? GB.push(vB, "Q", ":", kB) : GB.push(kB, "Q", ":", vB), TB ? GB.push("if(y1<x0||x1<y0)continue;") : IB ? GB.push("if(y0<=x0||x1<y0)continue;") : GB.push("if(y0<x0||x1<y0)continue;"), GB.push("for(var k=ax+1;k<d;++k){var r0=rb[k+rp],r1=rb[k+d+rp],b0=bb[k+bp],b1=bb[k+d+bp];if(r1<b0||b1<r0)continue Q;}var rv=vv("), IB ? GB.push("yi,xi") : GB.push("xi,yi"), GB.push(");if(rv!==void 0)return rv;}}}"), {
            name: JB,
            code: GB.join("")
          }
        }(IB, JB, BB);
        TB.push(GB.code), vB.push("return " + GB.name + "(" + zB.join() + ");")
      }
      vB.push("if(re-rs>be-bs){"), BB ? (kB(!0, !1), vB.push("}else{"), kB(!1, !1)) : (vB.push("if(fp){"), kB(!0, !0), vB.push("}else{"), kB(!0, !1), vB.push("}}else{if(fp){"), kB(!1, !0), vB.push("}else{"), kB(!1, !1), vB.push("}")), vB.push("}}return " + IB);
      var cB = TB.join("") + vB.join("");
      return new Function(cB)()
    }
    IB.partial = FB(!1), IB.full = FB(!0)
  },
  38378: (BB, IB, ZB) => {
    BB.exports = function(BB, IB, ZB, oB, nB, iB, pB, aB, HB) {
      ! function(BB, IB) {
        var ZB = 8 * JB.log2(IB + 1) * (BB + 1) | 0,
          oB = JB.nextPow2(dB * ZB);
        QB.length < oB && (TB.free(QB), QB = TB.mallocInt32(oB));
        var GB = JB.nextPow2(CB * ZB);
        sB.length < GB && (TB.free(sB), sB = TB.mallocDouble(GB))
      }(BB, oB + pB);
      var MB, jB = 0,
        PB = 2 * BB;
      wB(jB++, 0, 0, oB, 0, pB, ZB ? 16 : 0, -1 / 0, 1 / 0), ZB || wB(jB++, 0, 0, pB, 0, oB, 1, -1 / 0, 1 / 0);
      for (; jB > 0;) {
        var RB = (jB -= 1) * dB,
          rB = QB[RB],
          mB = QB[RB + 1],
          XB = QB[RB + 2],
          LB = QB[RB + 3],
          eB = QB[RB + 4],
          uB = QB[RB + 5],
          fB = jB * CB,
          lB = sB[fB],
          AB = sB[fB + 1],
          tB = 1 & uB,
          bB = !!(16 & uB),
          xB = nB,
          EB = iB,
          DB = aB,
          KB = HB;
        if (tB && (xB = aB, EB = HB, DB = nB, KB = iB), !(2 & uB && mB >= (XB = qB(BB, rB, mB, XB, xB, EB, AB))) && !(4 & uB && (mB = yB(BB, rB, mB, XB, xB, EB, lB)) >= XB)) {
          var VB = XB - mB,
            SB = eB - LB;
          if (bB) {
            if (BB * VB * (VB + SB) < FB) {
              if (void 0 !== (MB = kB.scanComplete(BB, rB, IB, mB, XB, xB, EB, LB, eB, DB, KB))) return MB;
              continue
            }
          } else {
            if (BB * Math.min(VB, SB) < hB) {
              if (void 0 !== (MB = GB(BB, rB, IB, tB, mB, XB, xB, EB, LB, eB, DB, KB))) return MB;
              continue
            }
            if (BB * VB * SB < zB) {
              if (void 0 !== (MB = kB.scanBipartite(BB, rB, IB, tB, mB, XB, xB, EB, LB, eB, DB, KB))) return MB;
              continue
            }
          }
          var BI = NB(BB, rB, mB, XB, xB, EB, lB, AB);
          if (mB < BI)
            if (BB * (BI - mB) < hB) {
              if (void 0 !== (MB = vB(BB, rB + 1, IB, mB, BI, xB, EB, LB, eB, DB, KB))) return MB
            } else if (rB === BB - 2) {
            if (void 0 !== (MB = tB ? kB.sweepBipartite(BB, IB, LB, eB, DB, KB, mB, BI, xB, EB) : kB.sweepBipartite(BB, IB, mB, BI, xB, EB, LB, eB, DB, KB))) return MB
          } else wB(jB++, rB + 1, mB, BI, LB, eB, tB, -1 / 0, 1 / 0), wB(jB++, rB + 1, LB, eB, mB, BI, 1 ^ tB, -1 / 0, 1 / 0);
          if (BI < XB) {
            var II = cB(BB, rB, LB, eB, DB, KB),
              ZI = DB[PB * II + rB],
              TI = gB(BB, rB, II, eB, DB, KB, ZI);
            if (TI < eB && wB(jB++, rB, BI, XB, TI, eB, (4 | tB) + (bB ? 16 : 0), ZI, AB), LB < II && wB(jB++, rB, BI, XB, LB, II, (2 | tB) + (bB ? 16 : 0), lB, ZI), II + 1 === TI) {
              if (void 0 !== (MB = bB ? YB(BB, rB, IB, BI, XB, xB, EB, II, DB, KB[II]) : OB(BB, rB, IB, tB, BI, XB, xB, EB, II, DB, KB[II]))) return MB
            } else if (II < TI) {
              var JI;
              if (bB) {
                if (BI < (JI = UB(BB, rB, BI, XB, xB, EB, ZI))) {
                  var oI = gB(BB, rB, BI, JI, xB, EB, ZI);
                  if (rB === BB - 2) {
                    if (BI < oI && void 0 !== (MB = kB.sweepComplete(BB, IB, BI, oI, xB, EB, II, TI, DB, KB))) return MB;
                    if (oI < JI && void 0 !== (MB = kB.sweepBipartite(BB, IB, oI, JI, xB, EB, II, TI, DB, KB))) return MB
                  } else BI < oI && wB(jB++, rB + 1, BI, oI, II, TI, 16, -1 / 0, 1 / 0), oI < JI && (wB(jB++, rB + 1, oI, JI, II, TI, 0, -1 / 0, 1 / 0), wB(jB++, rB + 1, II, TI, oI, JI, 1, -1 / 0, 1 / 0))
                }
              } else BI < (JI = tB ? WB(BB, rB, BI, XB, xB, EB, ZI) : UB(BB, rB, BI, XB, xB, EB, ZI)) && (rB === BB - 2 ? MB = tB ? kB.sweepBipartite(BB, IB, II, TI, DB, KB, BI, JI, xB, EB) : kB.sweepBipartite(BB, IB, BI, JI, xB, EB, II, TI, DB, KB) : (wB(jB++, rB + 1, BI, JI, II, TI, tB, -1 / 0, 1 / 0), wB(jB++, rB + 1, II, TI, BI, JI, 1 ^ tB, -1 / 0, 1 / 0)))
            }
          }
        }
      }
    };
    var TB = ZB(38342),
      JB = ZB(38344),
      oB = ZB(38387),
      GB = oB.partial,
      vB = oB.full,
      kB = ZB(38364),
      cB = ZB(38393),
      nB = ZB(38398),
      hB = 128,
      zB = 1 << 22,
      FB = 1 << 22,
      NB = nB("!(lo>=p0)&&!(p1>=hi)", ["p0", "p1"]),
      gB = nB("lo===p0", ["p0"]),
      qB = nB("lo<p0", ["p0"]),
      yB = nB("hi<=p0", ["p0"]),
      UB = nB("lo<=p0&&p0<=hi", ["p0"]),
      WB = nB("lo<p0&&p0<=hi", ["p0"]),
      dB = 6,
      CB = 2,
      QB = TB.mallocInt32(1024),
      sB = TB.mallocDouble(1024);

    function wB(BB, IB, ZB, TB, JB, oB, GB, vB, kB) {
      var cB = dB * BB;
      QB[cB] = IB, QB[cB + 1] = ZB, QB[cB + 2] = TB, QB[cB + 3] = JB, QB[cB + 4] = oB, QB[cB + 5] = GB;
      var nB = CB * BB;
      sB[nB] = vB, sB[nB + 1] = kB
    }

    function OB(BB, IB, ZB, TB, JB, oB, GB, vB, kB, cB, nB) {
      var hB = 2 * BB,
        zB = kB * hB,
        FB = cB[zB + IB];
      BB: for (var NB = JB, gB = JB * hB; NB < oB; ++NB, gB += hB) {
        var qB = GB[gB + IB],
          yB = GB[gB + IB + BB];
        if (!(FB < qB || yB < FB) && (!TB || FB !== qB)) {
          for (var UB, WB = vB[NB], dB = IB + 1; dB < BB; ++dB) {
            qB = GB[gB + dB], yB = GB[gB + dB + BB];
            var CB = cB[zB + dB],
              QB = cB[zB + dB + BB];
            if (yB < CB || QB < qB) continue BB
          }
          if (void 0 !== (UB = TB ? ZB(nB, WB) : ZB(WB, nB))) return UB
        }
      }
    }

    function YB(BB, IB, ZB, TB, JB, oB, GB, vB, kB, cB) {
      var nB = 2 * BB,
        hB = vB * nB,
        zB = kB[hB + IB];
      BB: for (var FB = TB, NB = TB * nB; FB < JB; ++FB, NB += nB) {
        var gB = GB[FB];
        if (gB !== cB) {
          var qB = oB[NB + IB],
            yB = oB[NB + IB + BB];
          if (!(zB < qB || yB < zB)) {
            for (var UB = IB + 1; UB < BB; ++UB) {
              qB = oB[NB + UB], yB = oB[NB + UB + BB];
              var WB = kB[hB + UB],
                dB = kB[hB + UB + BB];
              if (yB < WB || dB < qB) continue BB
            }
            var CB = ZB(gB, cB);
            if (void 0 !== CB) return CB
          }
        }
      }
    }
  },
  38393: (BB, IB, ZB) => {
    BB.exports = function(BB, IB, ZB, GB, vB, kB) {
      if (GB <= ZB + 1) return ZB;
      var cB = ZB,
        nB = GB,
        hB = GB + ZB >>> 1,
        zB = 2 * BB,
        FB = hB,
        NB = vB[zB * hB + IB];
      for (; cB < nB;) {
        if (nB - cB < JB) {
          oB(BB, IB, cB, nB, vB, kB), NB = vB[zB * hB + IB];
          break
        }
        var gB = nB - cB,
          qB = Math.random() * gB + cB | 0,
          yB = vB[zB * qB + IB],
          UB = Math.random() * gB + cB | 0,
          WB = vB[zB * UB + IB],
          dB = Math.random() * gB + cB | 0,
          CB = vB[zB * dB + IB];
        yB <= WB ? CB >= WB ? (FB = UB, NB = WB) : yB >= CB ? (FB = qB, NB = yB) : (FB = dB, NB = CB) : WB >= CB ? (FB = UB, NB = WB) : CB >= yB ? (FB = qB, NB = yB) : (FB = dB, NB = CB);
        for (var QB = zB * (nB - 1), sB = zB * FB, wB = 0; wB < zB; ++wB, ++QB, ++sB) {
          var OB = vB[QB];
          vB[QB] = vB[sB], vB[sB] = OB
        }
        var YB = kB[nB - 1];
        kB[nB - 1] = kB[FB], kB[FB] = YB;
        for (QB = zB * (nB - 1), sB = zB * (FB = TB(BB, IB, cB, nB - 1, vB, kB, NB)), wB = 0; wB < zB; ++wB, ++QB, ++sB) {
          OB = vB[QB];
          vB[QB] = vB[sB], vB[sB] = OB
        }
        YB = kB[nB - 1];
        if (kB[nB - 1] = kB[FB], kB[FB] = YB, hB < FB) {
          for (nB = FB - 1; cB < nB && vB[zB * (nB - 1) + IB] === NB;) nB -= 1;
          nB += 1
        } else {
          if (!(FB < hB)) break;
          for (cB = FB + 1; cB < nB && vB[zB * cB + IB] === NB;) cB += 1
        }
      }
      return TB(BB, IB, ZB, hB, vB, kB, vB[zB * hB + IB])
    };
    var TB = ZB(38398)("lo<p0", ["p0"]),
      JB = 8;

    function oB(BB, IB, ZB, TB, JB, oB) {
      for (var GB = 2 * BB, vB = GB * (ZB + 1) + IB, kB = ZB + 1; kB < TB; ++kB, vB += GB)
        for (var cB = JB[vB], nB = kB, hB = GB * (kB - 1); nB > ZB && JB[hB + IB] > cB; --nB, hB -= GB) {
          for (var zB = hB, FB = hB + GB, NB = 0; NB < GB; ++NB, ++zB, ++FB) {
            var gB = JB[zB];
            JB[zB] = JB[FB], JB[FB] = gB
          }
          var qB = oB[nB];
          oB[nB] = oB[nB - 1], oB[nB - 1] = qB
        }
    }
  },
  38398: BB => {
    BB.exports = function(BB, ZB) {
      var TB = "abcdef".split("").concat(ZB),
        JB = [];
      BB.indexOf("lo") >= 0 && JB.push("lo=e[k+n]");
      BB.indexOf("hi") >= 0 && JB.push("hi=e[k+o]");
      return TB.push(IB.replace("_", JB.join()).replace("$", BB)), Function.apply(void 0, TB)
    };
    var IB = "for(var j=2*a,k=j*c,l=k,m=c,n=b,o=a+b,p=c;d>p;++p,k+=j){var _;if($)if(m===p)m+=1,l+=j;else{for(var s=0;j>s;++s){var t=e[k+s];e[k+s]=e[l],e[l++]=t}var u=f[p];f[p]=f[m],f[m++]=u}}return m"
  },
  38371: BB => {
    BB.exports = function(BB, TB) {
      TB <= 4 * IB ? ZB(0, TB - 1, BB) : cB(0, TB - 1, BB)
    };
    var IB = 32;

    function ZB(BB, IB, ZB) {
      for (var TB = 2 * (BB + 1), JB = BB + 1; JB <= IB; ++JB) {
        for (var oB = ZB[TB++], GB = ZB[TB++], vB = JB, kB = TB - 2; vB-- > BB;) {
          var cB = ZB[kB - 2],
            nB = ZB[kB - 1];
          if (cB < oB) break;
          if (cB === oB && nB < GB) break;
          ZB[kB] = cB, ZB[kB + 1] = nB, kB -= 2
        }
        ZB[kB] = oB, ZB[kB + 1] = GB
      }
    }

    function TB(BB, IB, ZB) {
      IB *= 2;
      var TB = ZB[BB *= 2],
        JB = ZB[BB + 1];
      ZB[BB] = ZB[IB], ZB[BB + 1] = ZB[IB + 1], ZB[IB] = TB, ZB[IB + 1] = JB
    }

    function JB(BB, IB, ZB) {
      IB *= 2, ZB[BB *= 2] = ZB[IB], ZB[BB + 1] = ZB[IB + 1]
    }

    function oB(BB, IB, ZB, TB) {
      IB *= 2, ZB *= 2;
      var JB = TB[BB *= 2],
        oB = TB[BB + 1];
      TB[BB] = TB[IB], TB[BB + 1] = TB[IB + 1], TB[IB] = TB[ZB], TB[IB + 1] = TB[ZB + 1], TB[ZB] = JB, TB[ZB + 1] = oB
    }

    function GB(BB, IB, ZB, TB, JB) {
      IB *= 2, JB[BB *= 2] = JB[IB], JB[IB] = ZB, JB[BB + 1] = JB[IB + 1], JB[IB + 1] = TB
    }

    function vB(BB, IB, ZB) {
      IB *= 2;
      var TB = ZB[BB *= 2],
        JB = ZB[IB];
      return !(TB < JB) && (TB !== JB || ZB[BB + 1] > ZB[IB + 1])
    }

    function kB(BB, IB, ZB, TB) {
      var JB = TB[BB *= 2];
      return JB < IB || JB === IB && TB[BB + 1] < ZB
    }

    function cB(BB, nB, hB) {
      var zB = (nB - BB + 1) / 6 | 0,
        FB = BB + zB,
        NB = nB - zB,
        gB = BB + nB >> 1,
        qB = gB - zB,
        yB = gB + zB,
        UB = FB,
        WB = qB,
        dB = gB,
        CB = yB,
        QB = NB,
        sB = BB + 1,
        wB = nB - 1,
        OB = 0;
      vB(UB, WB, hB) && (OB = UB, UB = WB, WB = OB), vB(CB, QB, hB) && (OB = CB, CB = QB, QB = OB), vB(UB, dB, hB) && (OB = UB, UB = dB, dB = OB), vB(WB, dB, hB) && (OB = WB, WB = dB, dB = OB), vB(UB, CB, hB) && (OB = UB, UB = CB, CB = OB), vB(dB, CB, hB) && (OB = dB, dB = CB, CB = OB), vB(WB, QB, hB) && (OB = WB, WB = QB, QB = OB), vB(WB, dB, hB) && (OB = WB, WB = dB, dB = OB), vB(CB, QB, hB) && (OB = CB, CB = QB, QB = OB);
      for (var YB = hB[2 * WB], iB = hB[2 * WB + 1], pB = hB[2 * CB], aB = hB[2 * CB + 1], HB = 2 * UB, MB = 2 * dB, jB = 2 * QB, PB = 2 * FB, RB = 2 * gB, rB = 2 * NB, mB = 0; mB < 2; ++mB) {
        var XB = hB[HB + mB],
          LB = hB[MB + mB],
          eB = hB[jB + mB];
        hB[PB + mB] = XB, hB[RB + mB] = LB, hB[rB + mB] = eB
      }
      JB(qB, BB, hB), JB(yB, nB, hB);
      for (var uB = sB; uB <= wB; ++uB)
        if (kB(uB, YB, iB, hB)) uB !== sB && TB(uB, sB, hB), ++sB;
        else if (!kB(uB, pB, aB, hB))
        for (;;) {
          if (kB(wB, pB, aB, hB)) {
            kB(wB, YB, iB, hB) ? (oB(uB, sB, wB, hB), ++sB, --wB) : (TB(uB, wB, hB), --wB);
            break
          }
          if (--wB < uB) break
        }
      GB(BB, sB - 1, YB, iB, hB), GB(nB, wB + 1, pB, aB, hB), sB - 2 - BB <= IB ? ZB(BB, sB - 2, hB) : cB(BB, sB - 2, hB), nB - (wB + 2) <= IB ? ZB(wB + 2, nB, hB) : cB(wB + 2, nB, hB), wB - sB <= IB ? ZB(sB, wB, hB) : cB(sB, wB, hB)
    }
  },
  38364: (BB, IB, ZB) => {
    BB.exports = {
      init: function(BB) {
        var IB = JB.nextPow2(BB);
        kB.length < IB && (TB.free(kB), kB = TB.mallocInt32(IB));
        cB.length < IB && (TB.free(cB), cB = TB.mallocInt32(IB));
        nB.length < IB && (TB.free(nB), nB = TB.mallocInt32(IB));
        hB.length < IB && (TB.free(hB), hB = TB.mallocInt32(IB));
        zB.length < IB && (TB.free(zB), zB = TB.mallocInt32(IB));
        FB.length < IB && (TB.free(FB), FB = TB.mallocInt32(IB));
        var ZB = 8 * IB;
        NB.length < ZB && (TB.free(NB), NB = TB.mallocDouble(ZB))
      },
      sweepBipartite: function(BB, IB, ZB, TB, JB, vB, zB, FB, yB, UB) {
        for (var WB = 0, dB = 2 * BB, CB = BB - 1, QB = dB - 1, sB = ZB; sB < TB; ++sB) {
          var wB = vB[sB],
            OB = dB * sB;
          NB[WB++] = JB[OB + CB], NB[WB++] = -(wB + 1), NB[WB++] = JB[OB + QB], NB[WB++] = wB
        }
        for (sB = zB; sB < FB; ++sB) {
          wB = UB[sB] + GB;
          var YB = dB * sB;
          NB[WB++] = yB[YB + CB], NB[WB++] = -wB, NB[WB++] = yB[YB + QB], NB[WB++] = wB
        }
        var iB = WB >>> 1;
        oB(NB, iB);
        var pB = 0,
          aB = 0;
        for (sB = 0; sB < iB; ++sB) {
          var HB = 0 | NB[2 * sB + 1];
          if (HB >= GB) gB(nB, hB, aB--, HB = HB - GB | 0);
          else if (HB >= 0) gB(kB, cB, pB--, HB);
          else if (HB <= -GB) {
            HB = -HB - GB | 0;
            for (var MB = 0; MB < pB; ++MB) {
              if (void 0 !== (jB = IB(kB[MB], HB))) return jB
            }
            qB(nB, hB, aB++, HB)
          } else {
            HB = -HB - 1 | 0;
            for (MB = 0; MB < aB; ++MB) {
              var jB;
              if (void 0 !== (jB = IB(HB, nB[MB]))) return jB
            }
            qB(kB, cB, pB++, HB)
          }
        }
      },
      sweepComplete: function(BB, IB, ZB, TB, JB, GB, vB, yB, UB, WB) {
        for (var dB = 0, CB = 2 * BB, QB = BB - 1, sB = CB - 1, wB = ZB; wB < TB; ++wB) {
          var OB = GB[wB] + 1 << 1,
            YB = CB * wB;
          NB[dB++] = JB[YB + QB], NB[dB++] = -OB, NB[dB++] = JB[YB + sB], NB[dB++] = OB
        }
        for (wB = vB; wB < yB; ++wB) {
          OB = WB[wB] + 1 << 1;
          var iB = CB * wB;
          NB[dB++] = UB[iB + QB], NB[dB++] = 1 | -OB, NB[dB++] = UB[iB + sB], NB[dB++] = 1 | OB
        }
        var pB = dB >>> 1;
        oB(NB, pB);
        var aB = 0,
          HB = 0,
          MB = 0;
        for (wB = 0; wB < pB; ++wB) {
          var jB = 0 | NB[2 * wB + 1],
            PB = 1 & jB;
          if (wB < pB - 1 && jB >> 1 === NB[2 * wB + 3] >> 1 && (PB = 2, wB += 1), jB < 0) {
            for (var RB = -(jB >> 1) - 1, rB = 0; rB < MB; ++rB) {
              if (void 0 !== (mB = IB(zB[rB], RB))) return mB
            }
            if (0 !== PB)
              for (rB = 0; rB < aB; ++rB) {
                if (void 0 !== (mB = IB(kB[rB], RB))) return mB
              }
            if (1 !== PB)
              for (rB = 0; rB < HB; ++rB) {
                var mB;
                if (void 0 !== (mB = IB(nB[rB], RB))) return mB
              }
            0 === PB ? qB(kB, cB, aB++, RB) : 1 === PB ? qB(nB, hB, HB++, RB) : 2 === PB && qB(zB, FB, MB++, RB)
          } else {
            RB = (jB >> 1) - 1;
            0 === PB ? gB(kB, cB, aB--, RB) : 1 === PB ? gB(nB, hB, HB--, RB) : 2 === PB && gB(zB, FB, MB--, RB)
          }
        }
      },
      scanBipartite: function(BB, IB, ZB, TB, JB, vB, nB, hB, zB, FB, yB, UB) {
        var WB = 0,
          dB = 2 * BB,
          CB = IB,
          QB = IB + BB,
          sB = 1,
          wB = 1;
        TB ? wB = GB : sB = GB;
        for (var OB = JB; OB < vB; ++OB) {
          var YB = OB + sB,
            iB = dB * OB;
          NB[WB++] = nB[iB + CB], NB[WB++] = -YB, NB[WB++] = nB[iB + QB], NB[WB++] = YB
        }
        for (OB = zB; OB < FB; ++OB) {
          YB = OB + wB;
          var pB = dB * OB;
          NB[WB++] = yB[pB + CB], NB[WB++] = -YB
        }
        var aB = WB >>> 1;
        oB(NB, aB);
        var HB = 0;
        for (OB = 0; OB < aB; ++OB) {
          var MB = 0 | NB[2 * OB + 1];
          if (MB < 0) {
            var jB = !1;
            if ((YB = -MB) >= GB ? (jB = !TB, YB -= GB) : (jB = !!TB, YB -= 1), jB) qB(kB, cB, HB++, YB);
            else {
              var PB = UB[YB],
                RB = dB * YB,
                rB = yB[RB + IB + 1],
                mB = yB[RB + IB + 1 + BB];
              BB: for (var XB = 0; XB < HB; ++XB) {
                var LB = kB[XB],
                  eB = dB * LB;
                if (!(mB < nB[eB + IB + 1] || nB[eB + IB + 1 + BB] < rB)) {
                  for (var uB = IB + 2; uB < BB; ++uB)
                    if (yB[RB + uB + BB] < nB[eB + uB] || nB[eB + uB + BB] < yB[RB + uB]) continue BB;
                  var fB, lB = hB[LB];
                  if (void 0 !== (fB = TB ? ZB(PB, lB) : ZB(lB, PB))) return fB
                }
              }
            }
          } else gB(kB, cB, HB--, MB - sB)
        }
      },
      scanComplete: function(BB, IB, ZB, TB, JB, vB, cB, nB, hB, zB, FB) {
        for (var gB = 0, qB = 2 * BB, yB = IB, UB = IB + BB, WB = TB; WB < JB; ++WB) {
          var dB = WB + GB,
            CB = qB * WB;
          NB[gB++] = vB[CB + yB], NB[gB++] = -dB, NB[gB++] = vB[CB + UB], NB[gB++] = dB
        }
        for (WB = nB; WB < hB; ++WB) {
          dB = WB + 1;
          var QB = qB * WB;
          NB[gB++] = zB[QB + yB], NB[gB++] = -dB
        }
        var sB = gB >>> 1;
        oB(NB, sB);
        var wB = 0;
        for (WB = 0; WB < sB; ++WB) {
          var OB = 0 | NB[2 * WB + 1];
          if (OB < 0) {
            if ((dB = -OB) >= GB) kB[wB++] = dB - GB;
            else {
              var YB = FB[dB -= 1],
                iB = qB * dB,
                pB = zB[iB + IB + 1],
                aB = zB[iB + IB + 1 + BB];
              BB: for (var HB = 0; HB < wB; ++HB) {
                var MB = kB[HB],
                  jB = cB[MB];
                if (jB === YB) break;
                var PB = qB * MB;
                if (!(aB < vB[PB + IB + 1] || vB[PB + IB + 1 + BB] < pB)) {
                  for (var RB = IB + 2; RB < BB; ++RB)
                    if (zB[iB + RB + BB] < vB[PB + RB] || vB[PB + RB + BB] < zB[iB + RB]) continue BB;
                  var rB = ZB(jB, YB);
                  if (void 0 !== rB) return rB
                }
              }
            }
          } else {
            for (dB = OB - GB, HB = wB - 1; HB >= 0; --HB)
              if (kB[HB] === dB) {
                for (RB = HB + 1; RB < wB; ++RB) kB[RB - 1] = kB[RB];
                break
              }-- wB
          }
        }
      }
    };
    var TB = ZB(38342),
      JB = ZB(38344),
      oB = ZB(38371),
      GB = 1 << 28,
      vB = 1024,
      kB = TB.mallocInt32(vB),
      cB = TB.mallocInt32(vB),
      nB = TB.mallocInt32(vB),
      hB = TB.mallocInt32(vB),
      zB = TB.mallocInt32(vB),
      FB = TB.mallocInt32(vB),
      NB = TB.mallocDouble(8192);

    function gB(BB, IB, ZB, TB) {
      var JB = IB[TB],
        oB = BB[ZB - 1];
      BB[JB] = oB, IB[oB] = JB
    }

    function qB(BB, IB, ZB, TB) {
      BB[ZB] = TB, IB[TB] = ZB
    }
  },
  38353: BB => {
    function IB(BB, ZB, TB) {
      var JB = 0 | BB[TB];
      if (JB <= 0) return [];
      var oB, GB = new Array(JB);
      if (TB === BB.length - 1)
        for (oB = 0; oB < JB; ++oB) GB[oB] = ZB;
      else
        for (oB = 0; oB < JB; ++oB) GB[oB] = IB(BB, ZB, TB + 1);
      return GB
    }
    BB.exports = function(BB, ZB) {
      switch ("undefined" === typeof ZB && (ZB = 0), typeof BB) {
        case "number":
          if (BB > 0) return function(BB, IB) {
            var ZB, TB;
            for (ZB = new Array(BB), TB = 0; TB < BB; ++TB) ZB[TB] = IB;
            return ZB
          }(0 | BB, ZB);
          break;
        case "object":
          if ("number" === typeof BB.length) return IB(BB, ZB, 0)
      }
      return []
    }
  },
  38301: (BB, IB, ZB) => {
    BB.exports = function() {
      var BB = this;
      this.components = {}, this.comps = this.components;
      var IB = this.components,
        ZB = 1,
        JB = {},
        oB = [],
        GB = [],
        vB = {
          timeout: !1,
          removals: [],
          multiComps: []
        };

      function kB(BB, ZB) {
        var TB = IB[ZB],
          oB = JB[ZB],
          GB = oB.hash[BB];
        GB && (oB.remove(BB), TB.nH && (TB.multi ? (GB.forEach((IB => {
          IB && TB.nH(BB, IB)
        })), GB.length = 0) : TB.nH(BB, GB)), vB.removals.push(oB), cB())
      }

      function cB() {
        vB.timeout || (vB.timeout = !0, setTimeout(nB, 1))
      }

      function nB() {
        vB.timeout = !1, hB()
      }

      function hB() {
        vB.multiComps.length && function(BB) {
          for (var IB = 0; IB < BB.length; IB++) {
            var {
              entID: ZB,
              data: TB
            } = BB[IB], JB = TB.hash[ZB];
            if (JB) {
              for (var oB = 0; oB < JB.length; oB++) JB[oB] || (JB.splice(oB, 1), oB--);
              0 === JB.length && (TB.remove(ZB), vB.removals.push(TB))
            }
          }
          BB.length = 0
        }(vB.multiComps), vB.removals.length && function(BB) {
          for (var IB = 0; IB < BB.length; IB++) {
            BB[IB].flush()
          }
          BB.length = 0
        }(vB.removals)
      }
      this.Wg = JB, this._systems = oB, this._renderSystems = GB, this.hK = function(IB) {
        var TB = ZB++;
        return Array.isArray(IB) && IB.forEach((IB => BB.xR(TB, IB))), TB
      }, this.deleteEntity = function(IB) {
        return Object.keys(JB).forEach((BB => {
          JB[BB].hash[IB] && kB(IB, BB)
        })), BB
      }, this.nZB = function(BB) {
        if (!BB) throw new Error("Missing component definition");
        var ZB = BB.name;
        if (!ZB) throw new Error("Component definition must have a name property.");
        if ("string" !== typeof ZB) throw new Error("Component name must be a string.");
        if ("" === ZB) throw new Error("Component name must be a non-empty string.");
        if (JB[ZB]) throw new Error(`Component ${ZB} already exists.`);
        var vB = {};
        return vB.name = ZB, vB.multi = !!BB.multi, vB.order = isNaN(BB.order) ? 99 : BB.order, vB.stateConstructor = BB.stateConstructor || null, vB.state = BB.state || {}, vB.cW = BB.cW || null, vB.nH = BB.nH || null, vB.system = BB.system || null, vB.FW = BB.FW || null, IB[ZB] = vB, JB[ZB] = new TB, JB[ZB]._pendingMultiCleanup = !1, JB[ZB]._multiCleanupIDs = vB.multi ? [] : null, vB.system && (oB.push(ZB), oB.sort(((BB, ZB) => IB[BB].order - IB[ZB].order))), vB.FW && (GB.push(ZB), GB.sort(((BB, ZB) => IB[BB].order - IB[ZB].order))), ZB
      }, this.overwriteComponent = function(BB, ZB) {
        var TB = IB[BB];
        if (!TB) throw new Error(`Unknown component: ${BB}`);
        if (!ZB) throw new Error("Missing component definition");
        if (TB.name !== ZB.name) throw new Error("Overwriting component must use the same name property.");
        var vB = {};
        vB.name = BB, vB.multi = !!ZB.multi, vB.order = isNaN(ZB.order) ? 99 : ZB.order, vB.state = ZB.state || {}, vB.cW = ZB.cW || null, vB.nH = ZB.nH || null, vB.system = ZB.system || null, vB.FW = ZB.FW || null, IB[BB] = vB, JB[BB]._pendingMultiCleanup = !1, JB[BB]._multiCleanupIDs = vB.multi ? [] : null;
        var kB = oB.indexOf(BB);
        vB.system && kB < 0 && oB.push(BB), !vB.system && kB >= 0 && oB.splice(kB, 1), oB.sort(((BB, ZB) => IB[BB].order - IB[ZB].order));
        var cB = GB.indexOf(BB);
        vB.FW && cB < 0 && GB.push(BB), !vB.FW && cB >= 0 && GB.splice(cB, 1), GB.sort(((BB, ZB) => IB[BB].order - IB[ZB].order));
        var nB = vB.state;
        return this.fR(BB).forEach((BB => {
          for (var IB in nB) IB in BB || (BB[IB] = nB[IB]);
          vB.cW && vB.cW(BB.bR, BB)
        })), BB
      }, this.deleteComponent = function(ZB) {
        var TB = JB[ZB];
        if (!TB) throw new Error(`Unknown component: ${ZB}`);
        TB.flush(), TB.list.forEach((BB => {
          BB && kB(BB.bR || BB[0].bR, ZB)
        }));
        var vB = oB.indexOf(ZB),
          cB = GB.indexOf(ZB);
        return vB > -1 && oB.splice(vB, 1), cB > -1 && GB.splice(cB, 1), JB[ZB].dispose(), delete JB[ZB], delete IB[ZB], BB
      }, this.xR = function(BB, ZB, TB) {
        var oB, GB = IB[ZB],
          vB = JB[ZB];
        if (!vB) throw new Error(`Unknown component: ${ZB}.`);
        if (vB.hash[BB] && !GB.multi) throw new Error(`Entity ${BB} already has component: ${ZB}.`);
        if (GB.stateConstructor) {
          if (!(oB = new GB.stateConstructor).hasOwnProperty("bR")) throw new Error(`Component ${GB.name} stateConstructor type does not have property __id`);
          Object.assign(oB, GB.state, TB)
        } else oB = {
          bR: BB,
          ...GB.state,
          ...TB
        };
        if (oB.bR = BB, GB.multi) {
          var kB = vB.hash[BB];
          kB || (kB = [], vB.add(BB, kB)), kB.push(oB)
        } else vB.add(BB, oB);
        return GB.cW && GB.cW(BB, oB), this
      }, this.TIB = function(BB, IB) {
        var ZB = JB[IB];
        if (!ZB) throw new Error(`Unknown component: ${IB}.`);
        return !!ZB.hash[BB]
      }, this.Qr = function(IB, ZB) {
        if (!JB[ZB]) throw new Error(`Unknown component: ${ZB}.`);
        return kB(IB, ZB), BB
      }, this.getState = function(BB, IB) {
        var ZB = JB[IB];
        if (!ZB) throw new Error(`Unknown component: ${IB}.`);
        return ZB.hash[BB]
      }, this.fR = function(BB) {
        var IB = JB[BB];
        if (!IB) throw new Error(`Unknown component: ${BB}.`);
        return hB(), IB.list
      }, this.eIB = function(BB) {
        if (!JB[BB]) throw new Error(`Unknown component: ${BB}.`);
        var IB = JB[BB].hash;
        return BB => IB[BB]
      }, this.xIB = function(BB) {
        if (!JB[BB]) throw new Error(`Unknown component: ${BB}.`);
        var IB = JB[BB].hash;
        return BB => !!IB[BB]
      }, this.Iz = function(ZB) {
        hB();
        for (var TB = 0; TB < oB.length; TB++) {
          var GB = oB[TB],
            vB = IB[GB],
            kB = JB[GB];
          vB.system(ZB, kB.list), hB()
        }
        return BB
      }, this.render = function(ZB) {
        hB();
        for (var TB = 0; TB < GB.length; TB++) {
          var oB = GB[TB],
            vB = IB[oB],
            kB = JB[oB];
          vB.FW(ZB, kB.list), hB()
        }
        return BB
      }, this.removeMultiComponent = function(ZB, TB, oB) {
        var GB = IB[TB],
          kB = JB[TB];
        if (!kB) throw new Error(`Unknown component: ${TB}.`);
        if (!GB.multi) throw new Error("removeMultiComponent called on non-multi component");
        return function(BB, IB, ZB, TB) {
          var JB = ZB.hash[BB];
          if (JB) {
            var oB = JB[TB];
            oB && (JB[TB] = null, IB.nH && IB.nH(BB, oB), vB.multiComps.push({
              entID: BB,
              data: ZB
            }), cB())
          }
        }(ZB, GB, kB, oB), BB
      }
    };
    var TB = ZB(38306)
  },
  38306: BB => {
    function IB(BB, IB) {
      var ZB = BB._map[IB];
      if (delete BB.hash[IB], delete BB._map[IB], ZB === BB.list.length - 1) BB.list.pop(), BB._idList.pop();
      else {
        var TB = BB.list.pop();
        BB.list[ZB] = TB;
        var JB = BB._idList.pop();
        BB._idList[ZB] = JB, BB._map[JB] = ZB
      }
    }
    BB.exports = class {
      constructor() {
        this.list = [], this.hash = {}, this._map = {}, this._idList = [], this._pendingRemovals = []
      }
      add(BB, IB) {
        if ("number" === typeof this._map[BB]) {
          var ZB = this._map[BB];
          this.hash[BB] = IB, this.list[ZB] = IB, this._idList[ZB] = BB
        } else this._map[BB] = this.list.length, this.hash[BB] = IB, this.list.push(IB), this._idList.push(BB)
      }
      remove(BB) {
        var IB = this._map[BB];
        this.hash[BB] = null, this.list[IB] = null, this._pendingRemovals.push(BB)
      }
      dispose() {
        this.list = null, this.hash = null, this._map = null, this._idList = null, this._pendingRemovals.length = 0
      }
      flush() {
        for (var BB = 0; BB < this._pendingRemovals.length; BB++) {
          var ZB = this._pendingRemovals[BB];
          null === this.hash[ZB] && IB(this, ZB)
        }
        this._pendingRemovals.length = 0
      }
    }
  },
  38115: (BB, IB, ZB) => {
    BB = ZB.nmd(BB);
    var TB = "__lodash_hash_undefined__",
      JB = 9007199254740991,
      oB = "[object Arguments]",
      GB = "[object Boolean]",
      vB = "[object Date]",
      kB = "[object Function]",
      cB = "[object GeneratorFunction]",
      nB = "[object Map]",
      hB = "[object Number]",
      zB = "[object Object]",
      FB = "[object Promise]",
      NB = "[object RegExp]",
      gB = "[object Set]",
      qB = "[object String]",
      yB = "[object Symbol]",
      UB = "[object WeakMap]",
      WB = "[object ArrayBuffer]",
      dB = "[object DataView]",
      CB = "[object Float32Array]",
      QB = "[object Float64Array]",
      sB = "[object Int8Array]",
      wB = "[object Int16Array]",
      OB = "[object Int32Array]",
      YB = "[object Uint8Array]",
      iB = "[object Uint8ClampedArray]",
      pB = "[object Uint16Array]",
      aB = "[object Uint32Array]",
      HB = /\w*$/,
      MB = /^\[object .+?Constructor\]$/,
      jB = /^(?:0|[1-9]\d*)$/,
      PB = {};
    PB[oB] = PB["[object Array]"] = PB[WB] = PB[dB] = PB[GB] = PB[vB] = PB[CB] = PB[QB] = PB[sB] = PB[wB] = PB[OB] = PB[nB] = PB[hB] = PB[zB] = PB[NB] = PB[gB] = PB[qB] = PB[yB] = PB[YB] = PB[iB] = PB[pB] = PB[aB] = !0, PB["[object Error]"] = PB[kB] = PB[UB] = !1;
    var RB = "object" == typeof ZB.g && ZB.g && ZB.g.Object === Object && ZB.g,
      rB = "object" == typeof self && self && self.Object === Object && self,
      mB = RB || rB || Function("return this")(),
      XB = IB && !IB.nodeType && IB,
      LB = XB && BB && !BB.nodeType && BB,
      eB = LB && LB.exports === XB;

    function uB(BB, IB) {
      return BB.set(IB[0], IB[1]), BB
    }

    function fB(BB, IB) {
      return BB.add(IB), BB
    }

    function lB(BB, IB, ZB, TB) {
      var JB = -1,
        oB = BB ? BB.length : 0;
      for (TB && oB && (ZB = BB[++JB]); ++JB < oB;) ZB = IB(ZB, BB[JB], JB, BB);
      return ZB
    }

    function AB(BB) {
      var IB = !1;
      if (null != BB && "function" != typeof BB.toString) try {
        IB = !!(BB + "")
      } catch (ZB) {}
      return IB
    }

    function tB(BB) {
      var IB = -1,
        ZB = Array(BB.size);
      return BB.forEach((function(BB, TB) {
        ZB[++IB] = [TB, BB]
      })), ZB
    }

    function bB(BB, IB) {
      return function(ZB) {
        return BB(IB(ZB))
      }
    }

    function xB(BB) {
      var IB = -1,
        ZB = Array(BB.size);
      return BB.forEach((function(BB) {
        ZB[++IB] = BB
      })), ZB
    }
    var EB = Array.prototype,
      DB = Function.prototype,
      KB = Object.prototype,
      VB = mB["__core-js_shared__"],
      SB = function() {
        var BB = /[^.]+$/.exec(VB && VB.keys && VB.keys.IE_PROTO || "");
        return BB ? "Symbol(src)_1." + BB : ""
      }(),
      BI = DB.toString,
      II = KB.hasOwnProperty,
      ZI = KB.toString,
      TI = RegExp("^" + BI.call(II).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
      JI = eB ? mB.UN : void 0,
      oI = mB.Symbol,
      GI = mB.Uint8Array,
      vI = bB(Object.getPrototypeOf, Object),
      kI = Object.create,
      cI = KB.propertyIsEnumerable,
      nI = EB.splice,
      hI = Object.getOwnPropertySymbols,
      zI = JI ? JI.isBuffer : void 0,
      FI = bB(Object.keys, Object),
      NI = eI(mB, "DataView"),
      gI = eI(mB, "Map"),
      qI = eI(mB, "Promise"),
      yI = eI(mB, "Set"),
      UI = eI(mB, "WeakMap"),
      WI = eI(Object, "create"),
      dI = tI(NI),
      CI = tI(gI),
      QI = tI(qI),
      sI = tI(yI),
      wI = tI(UI),
      OI = oI ? oI.prototype : void 0,
      YI = OI ? OI.valueOf : void 0;

    function iI(BB) {
      var IB = -1,
        ZB = BB ? BB.length : 0;
      for (this.clear(); ++IB < ZB;) {
        var TB = BB[IB];
        this.set(TB[0], TB[1])
      }
    }

    function pI(BB) {
      var IB = -1,
        ZB = BB ? BB.length : 0;
      for (this.clear(); ++IB < ZB;) {
        var TB = BB[IB];
        this.set(TB[0], TB[1])
      }
    }

    function aI(BB) {
      var IB = -1,
        ZB = BB ? BB.length : 0;
      for (this.clear(); ++IB < ZB;) {
        var TB = BB[IB];
        this.set(TB[0], TB[1])
      }
    }

    function HI(BB) {
      this.__data__ = new pI(BB)
    }

    function MI(BB, IB) {
      var ZB = xI(BB) || function(BB) {
          return function(BB) {
            return function(BB) {
              return !!BB && "object" == typeof BB
            }(BB) && EI(BB)
          }(BB) && II.call(BB, "callee") && (!cI.call(BB, "callee") || ZI.call(BB) == oB)
        }(BB) ? function(BB, IB) {
          for (var ZB = -1, TB = Array(BB); ++ZB < BB;) TB[ZB] = IB(ZB);
          return TB
        }(BB.length, String) : [],
        TB = ZB.length,
        JB = !!TB;
      for (var GB in BB) !IB && !II.call(BB, GB) || JB && ("length" == GB || lI(GB, TB)) || ZB.push(GB);
      return ZB
    }

    function jI(BB, IB, ZB) {
      var TB = BB[IB];
      II.call(BB, IB) && bI(TB, ZB) && (void 0 !== ZB || IB in BB) || (BB[IB] = ZB)
    }

    function PI(BB, IB) {
      for (var ZB = BB.length; ZB--;)
        if (bI(BB[ZB][0], IB)) return ZB;
      return -1
    }

    function RI(BB, IB, ZB, TB, JB, FB, UB) {
      var MB;
      if (TB && (MB = FB ? TB(BB, JB, FB, UB) : TB(BB)), void 0 !== MB) return MB;
      if (!VI(BB)) return BB;
      var jB = xI(BB);
      if (jB) {
        if (MB = function(BB) {
            var IB = BB.length,
              ZB = BB.constructor(IB);
            IB && "string" == typeof BB[0] && II.call(BB, "index") && (ZB.index = BB.index, ZB.input = BB.input);
            return ZB
          }(BB), !IB) return function(BB, IB) {
          var ZB = -1,
            TB = BB.length;
          IB || (IB = Array(TB));
          for (; ++ZB < TB;) IB[ZB] = BB[ZB];
          return IB
        }(BB, MB)
      } else {
        var RB = fI(BB),
          rB = RB == kB || RB == cB;
        if (DI(BB)) return function(BB, IB) {
          if (IB) return BB.slice();
          var ZB = new BB.constructor(BB.length);
          return BB.copy(ZB), ZB
        }(BB, IB);
        if (RB == zB || RB == oB || rB && !FB) {
          if (AB(BB)) return FB ? BB : {};
          if (MB = function(BB) {
              return "function" != typeof BB.constructor || AI(BB) ? {} : (IB = vI(BB), VI(IB) ? kI(IB) : {});
              var IB
            }(rB ? {} : BB), !IB) return function(BB, IB) {
            return XI(BB, uI(BB), IB)
          }(BB, function(BB, IB) {
            return BB && XI(IB, SI(IB), BB)
          }(MB, BB))
        } else {
          if (!PB[RB]) return FB ? BB : {};
          MB = function(BB, IB, ZB, TB) {
            var JB = BB.constructor;
            switch (IB) {
              case WB:
                return mI(BB);
              case GB:
              case vB:
                return new JB(+BB);
              case dB:
                return function(BB, IB) {
                  var ZB = IB ? mI(BB.buffer) : BB.buffer;
                  return new BB.constructor(ZB, BB.byteOffset, BB.byteLength)
                }(BB, TB);
              case CB:
              case QB:
              case sB:
              case wB:
              case OB:
              case YB:
              case iB:
              case pB:
              case aB:
                return function(BB, IB) {
                  var ZB = IB ? mI(BB.buffer) : BB.buffer;
                  return new BB.constructor(ZB, BB.byteOffset, BB.length)
                }(BB, TB);
              case nB:
                return function(BB, IB, ZB) {
                  var TB = IB ? ZB(tB(BB), !0) : tB(BB);
                  return lB(TB, uB, new BB.constructor)
                }(BB, TB, ZB);
              case hB:
              case qB:
                return new JB(BB);
              case NB:
                return function(BB) {
                  var IB = new BB.constructor(BB.source, HB.exec(BB));
                  return IB.lastIndex = BB.lastIndex, IB
                }(BB);
              case gB:
                return function(BB, IB, ZB) {
                  var TB = IB ? ZB(xB(BB), !0) : xB(BB);
                  return lB(TB, fB, new BB.constructor)
                }(BB, TB, ZB);
              case yB:
                return oB = BB, YI ? Object(YI.call(oB)) : {}
            }
            var oB
          }(BB, RB, RI, IB)
        }
      }
      UB || (UB = new HI);
      var mB = UB.get(BB);
      if (mB) return mB;
      if (UB.set(BB, MB), !jB) var XB = ZB ? function(BB) {
        return function(BB, IB, ZB) {
          var TB = IB(BB);
          return xI(BB) ? TB : function(BB, IB) {
            for (var ZB = -1, TB = IB.length, JB = BB.length; ++ZB < TB;) BB[JB + ZB] = IB[ZB];
            return BB
          }(TB, ZB(BB))
        }(BB, SI, uI)
      }(BB) : SI(BB);
      return function(BB, IB) {
        for (var ZB = -1, TB = BB ? BB.length : 0; ++ZB < TB && !1 !== IB(BB[ZB], ZB, BB););
      }(XB || BB, (function(JB, oB) {
        XB && (JB = BB[oB = JB]), jI(MB, oB, RI(JB, IB, ZB, TB, oB, BB, UB))
      })), MB
    }

    function rI(BB) {
      return !(!VI(BB) || (IB = BB, SB && SB in IB)) && (KI(BB) || AB(BB) ? TI : MB).test(tI(BB));
      var IB
    }

    function mI(BB) {
      var IB = new BB.constructor(BB.byteLength);
      return new GI(IB).set(new GI(BB)), IB
    }

    function XI(BB, IB, ZB, TB) {
      ZB || (ZB = {});
      for (var JB = -1, oB = IB.length; ++JB < oB;) {
        var GB = IB[JB],
          vB = TB ? TB(ZB[GB], BB[GB], GB, ZB, BB) : void 0;
        jI(ZB, GB, void 0 === vB ? BB[GB] : vB)
      }
      return ZB
    }

    function LI(BB, IB) {
      var ZB = BB.__data__;
      return function(BB) {
        var IB = typeof BB;
        return "string" == IB || "number" == IB || "symbol" == IB || "boolean" == IB ? "__proto__" !== BB : null === BB
      }(IB) ? ZB["string" == typeof IB ? "string" : "hash"] : ZB.map
    }

    function eI(BB, IB) {
      var ZB = function(BB, IB) {
        return null == BB ? void 0 : BB[IB]
      }(BB, IB);
      return rI(ZB) ? ZB : void 0
    }
    iI.prototype.clear = function() {
      this.__data__ = WI ? WI(null) : {}
    }, iI.prototype.delete = function(BB) {
      return this.has(BB) && delete this.__data__[BB]
    }, iI.prototype.get = function(BB) {
      var IB = this.__data__;
      if (WI) {
        var ZB = IB[BB];
        return ZB === TB ? void 0 : ZB
      }
      return II.call(IB, BB) ? IB[BB] : void 0
    }, iI.prototype.has = function(BB) {
      var IB = this.__data__;
      return WI ? void 0 !== IB[BB] : II.call(IB, BB)
    }, iI.prototype.set = function(BB, IB) {
      return this.__data__[BB] = WI && void 0 === IB ? TB : IB, this
    }, pI.prototype.clear = function() {
      this.__data__ = []
    }, pI.prototype.delete = function(BB) {
      var IB = this.__data__,
        ZB = PI(IB, BB);
      return !(ZB < 0) && (ZB == IB.length - 1 ? IB.pop() : nI.call(IB, ZB, 1), !0)
    }, pI.prototype.get = function(BB) {
      var IB = this.__data__,
        ZB = PI(IB, BB);
      return ZB < 0 ? void 0 : IB[ZB][1]
    }, pI.prototype.has = function(BB) {
      return PI(this.__data__, BB) > -1
    }, pI.prototype.set = function(BB, IB) {
      var ZB = this.__data__,
        TB = PI(ZB, BB);
      return TB < 0 ? ZB.push([BB, IB]) : ZB[TB][1] = IB, this
    }, aI.prototype.clear = function() {
      this.__data__ = {
        hash: new iI,
        map: new(gI || pI),
        string: new iI
      }
    }, aI.prototype.delete = function(BB) {
      return LI(this, BB).delete(BB)
    }, aI.prototype.get = function(BB) {
      return LI(this, BB).get(BB)
    }, aI.prototype.has = function(BB) {
      return LI(this, BB).has(BB)
    }, aI.prototype.set = function(BB, IB) {
      return LI(this, BB).set(BB, IB), this
    }, HI.prototype.clear = function() {
      this.__data__ = new pI
    }, HI.prototype.delete = function(BB) {
      return this.__data__.delete(BB)
    }, HI.prototype.get = function(BB) {
      return this.__data__.get(BB)
    }, HI.prototype.has = function(BB) {
      return this.__data__.has(BB)
    }, HI.prototype.set = function(BB, IB) {
      var ZB = this.__data__;
      if (ZB instanceof pI) {
        var TB = ZB.__data__;
        if (!gI || TB.length < 199) return TB.push([BB, IB]), this;
        ZB = this.__data__ = new aI(TB)
      }
      return ZB.set(BB, IB), this
    };
    var uI = hI ? bB(hI, Object) : function() {
        return []
      },
      fI = function(BB) {
        return ZI.call(BB)
      };

    function lI(BB, IB) {
      return !!(IB = null == IB ? JB : IB) && ("number" == typeof BB || jB.test(BB)) && BB > -1 && BB % 1 == 0 && BB < IB
    }

    function AI(BB) {
      var IB = BB && BB.constructor;
      return BB === ("function" == typeof IB && IB.prototype || KB)
    }

    function tI(BB) {
      if (null != BB) {
        try {
          return BI.call(BB)
        } catch (IB) {}
        try {
          return BB + ""
        } catch (IB) {}
      }
      return ""
    }

    function bI(BB, IB) {
      return BB === IB || BB !== BB && IB !== IB
    }(NI && fI(new NI(new ArrayBuffer(1))) != dB || gI && fI(new gI) != nB || qI && fI(qI.resolve()) != FB || yI && fI(new yI) != gB || UI && fI(new UI) != UB) && (fI = function(BB) {
      var IB = ZI.call(BB),
        ZB = IB == zB ? BB.constructor : void 0,
        TB = ZB ? tI(ZB) : void 0;
      if (TB) switch (TB) {
        case dI:
          return dB;
        case CI:
          return nB;
        case QI:
          return FB;
        case sI:
          return gB;
        case wI:
          return UB
      }
      return IB
    });
    var xI = Array.isArray;

    function EI(BB) {
      return null != BB && function(BB) {
        return "number" == typeof BB && BB > -1 && BB % 1 == 0 && BB <= JB
      }(BB.length) && !KI(BB)
    }
    var DI = zI || function() {
      return !1
    };

    function KI(BB) {
      var IB = VI(BB) ? ZI.call(BB) : "";
      return IB == kB || IB == cB
    }

    function VI(BB) {
      var IB = typeof BB;
      return !!BB && ("object" == IB || "function" == IB)
    }

    function SI(BB) {
      return EI(BB) ? MI(BB) : function(BB) {
        if (!AI(BB)) return FI(BB);
        var IB = [];
        for (var ZB in Object(BB)) II.call(BB, ZB) && "constructor" != ZB && IB.push(ZB);
        return IB
      }(BB)
    }
    BB.exports = function(BB) {
      return RI(BB, !0, !0)
    }
  },
  38488: BB => {
    function IB(BB, IB, ZB) {
      for (var TB = BB.length, JB = -1 / 0, oB = 1 / 0, GB = 0; GB < TB; GB++) {
        var vB = (ZB[0][GB] - BB[GB]) / IB[GB],
          kB = (ZB[1][GB] - BB[GB]) / IB[GB];
        if (vB > kB) {
          var cB = vB;
          vB = kB, kB = cB
        }
        if (kB < JB || vB > oB) return 1 / 0;
        vB > JB && (JB = vB), kB < oB && (oB = kB)
      }
      return JB > oB ? 1 / 0 : JB
    }
    BB.exports = function(BB, ZB, TB, JB) {
      var oB = IB(ZB, TB, JB);
      if (oB === 1 / 0) BB = null;
      else {
        BB = BB || [];
        for (var GB = 0; GB < ZB.length; GB++) BB[GB] = ZB[GB] + TB[GB] * oB
      }
      return BB
    }, BB.exports.distance = IB
  },
  37794: (BB, IB, ZB) => {
    var TB = ZB(37800);

    function JB(BB) {
      for (var IB, ZB, JB = 0, oB = BB.length, GB = 0; GB < BB.length;) {
        for (IB = BB[GB], ZB = 0; GB < oB && BB[GB] === IB;) ++GB, ++ZB;
        JB += TB.log2(ZB) / 7 | 0, JB += TB.log2(IB >>> 0) / 7 | 0, JB += 2
      }
      return JB
    }
    IB.size = JB, IB.encode = function(BB, IB) {
      IB || (IB = new Uint8Array(JB(BB)));
      for (var ZB, TB, oB = 0, GB = IB.length, vB = 0; vB < BB.length;) {
        for (ZB = BB[vB], TB = 0; vB < BB.length && BB[vB] === ZB;) ++vB, ++TB;
        for (; oB < GB && TB >= 128;) IB[oB++] = 128 + (127 & TB), TB >>>= 7;
        if (oB >= GB) throw new Error("RLE buffer overflow");
        for (IB[oB++] = TB, ZB >>>= 0; oB < GB && ZB >= 128;) IB[oB++] = 128 + (127 & ZB), ZB >>>= 7;
        if (oB >= GB) throw new Error("RLE buffer overflow");
        IB[oB++] = ZB
      }
      return IB
    }, IB.decode = function(BB, IB) {
      for (var ZB, TB, JB, oB, GB = IB.length, vB = BB.length, kB = 0, cB = 0; cB < vB;) {
        for (ZB = 0, TB = 0; cB < vB && BB[cB] >= 128;) ZB += (127 & BB[cB++]) << TB, TB += 7;
        if (ZB += BB[cB++] << TB, cB >= vB) throw new Error("RLE buffer underrun");
        if (kB + ZB > GB) throw new Error("Chunk buffer overflow");
        for (JB = 0, TB = 0; cB < vB && BB[cB] >= 128;) JB += (127 & BB[cB++]) << TB, TB += 7;
        if (cB >= vB) throw new Error("RLE buffer underrun");
        for (JB += BB[cB++] << TB, oB = 0; oB < ZB; ++oB) IB[kB++] = JB
      }
      return IB
    }
  },
  37800: (BB, IB) => {
    function ZB(BB) {
      var IB = 32;
      return (BB &= -BB) && IB--, 65535 & BB && (IB -= 16), 16711935 & BB && (IB -= 8), 252645135 & BB && (IB -= 4), 858993459 & BB && (IB -= 2), 1431655765 & BB && (IB -= 1), IB
    }
    IB.INT_BITS = 32, IB.INT_MAX = 2147483647, IB.INT_MIN = -1 << 31, IB.sign = function(BB) {
      return (BB > 0) - (BB < 0)
    }, IB.abs = function(BB) {
      var IB = BB >> 31;
      return (BB ^ IB) - IB
    }, IB.min = function(BB, IB) {
      return IB ^ (BB ^ IB) & -(BB < IB)
    }, IB.max = function(BB, IB) {
      return BB ^ (BB ^ IB) & -(BB < IB)
    }, IB.isPow2 = function(BB) {
      return !(BB & BB - 1) && !!BB
    }, IB.log2 = function(BB) {
      var IB, ZB;
      return IB = (BB > 65535) << 4, IB |= ZB = ((BB >>>= IB) > 255) << 3, IB |= ZB = ((BB >>>= ZB) > 15) << 2, (IB |= ZB = ((BB >>>= ZB) > 3) << 1) | (BB >>>= ZB) >> 1
    }, IB.log10 = function(BB) {
      return BB >= 1e9 ? 9 : BB >= 1e8 ? 8 : BB >= 1e7 ? 7 : BB >= 1e6 ? 6 : BB >= 1e5 ? 5 : BB >= 1e4 ? 4 : BB >= 1e3 ? 3 : BB >= 100 ? 2 : BB >= 10 ? 1 : 0
    }, IB.popCount = function(BB) {
      return 16843009 * ((BB = (858993459 & (BB -= BB >>> 1 & 1431655765)) + (BB >>> 2 & 858993459)) + (BB >>> 4) & 252645135) >>> 24
    }, IB.countTrailingZeros = ZB, IB.nextPow2 = function(BB) {
      return BB += 0 === BB, --BB, BB |= BB >>> 1, BB |= BB >>> 2, BB |= BB >>> 4, BB |= BB >>> 8, (BB |= BB >>> 16) + 1
    }, IB.prevPow2 = function(BB) {
      return BB |= BB >>> 1, BB |= BB >>> 2, BB |= BB >>> 4, BB |= BB >>> 8, (BB |= BB >>> 16) - (BB >>> 1)
    }, IB.parity = function(BB) {
      return BB ^= BB >>> 16, BB ^= BB >>> 8, BB ^= BB >>> 4, 27030 >>> (BB &= 15) & 1
    };
    var TB = new Array(256);
    ! function(BB) {
      for (var IB = 0; IB < 256; ++IB) {
        var ZB = IB,
          TB = IB,
          JB = 7;
        for (ZB >>>= 1; ZB; ZB >>>= 1) TB <<= 1, TB |= 1 & ZB, --JB;
        BB[IB] = TB << JB & 255
      }
    }(TB), IB.reverse = function(BB) {
      return TB[255 & BB] << 24 | TB[BB >>> 8 & 255] << 16 | TB[BB >>> 16 & 255] << 8 | TB[BB >>> 24 & 255]
    }, IB.interleave2 = function(BB, IB) {
      return (BB = 1431655765 & ((BB = 858993459 & ((BB = 252645135 & ((BB = 16711935 & ((BB &= 65535) | BB << 8)) | BB << 4)) | BB << 2)) | BB << 1)) | (IB = 1431655765 & ((IB = 858993459 & ((IB = 252645135 & ((IB = 16711935 & ((IB &= 65535) | IB << 8)) | IB << 4)) | IB << 2)) | IB << 1)) << 1
    }, IB.deinterleave2 = function(BB, IB) {
      return (BB = 65535 & ((BB = 16711935 & ((BB = 252645135 & ((BB = 858993459 & ((BB = BB >>> IB & 1431655765) | BB >>> 1)) | BB >>> 2)) | BB >>> 4)) | BB >>> 16)) << 16 >> 16
    }, IB.interleave3 = function(BB, IB, ZB) {
      return BB = 1227133513 & ((BB = 3272356035 & ((BB = 251719695 & ((BB = 4278190335 & ((BB &= 1023) | BB << 16)) | BB << 8)) | BB << 4)) | BB << 2), (BB |= (IB = 1227133513 & ((IB = 3272356035 & ((IB = 251719695 & ((IB = 4278190335 & ((IB &= 1023) | IB << 16)) | IB << 8)) | IB << 4)) | IB << 2)) << 1) | (ZB = 1227133513 & ((ZB = 3272356035 & ((ZB = 251719695 & ((ZB = 4278190335 & ((ZB &= 1023) | ZB << 16)) | ZB << 8)) | ZB << 4)) | ZB << 2)) << 2
    }, IB.deinterleave3 = function(BB, IB) {
      return (BB = 1023 & ((BB = 4278190335 & ((BB = 251719695 & ((BB = 3272356035 & ((BB = BB >>> IB & 1227133513) | BB >>> 2)) | BB >>> 4)) | BB >>> 8)) | BB >>> 16)) << 22 >> 22
    }, IB.nextCombination = function(BB) {
      var IB = BB | BB - 1;
      return IB + 1 | (~IB & -~IB) - 1 >>> ZB(BB) + 1
    }
  },
  37304: (BB, IB, ZB) => {
    ZB.d(IB, {
      Color3: () => TB.c,
      e: () => TB.g
    });
    var TB = ZB(37311);
    (0, TB.j)()
  },
  37819: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => JB
    });
    var TB = ZB(37824);
    class JB {
      static GetPlanes(BB) {
        const IB = [];
        for (let ZB = 0; ZB < 6; ZB++) IB.push(new TB.c(0, 0, 0, 0));
        return JB.GetPlanesToRef(BB, IB), IB
      }
      static GetNearPlaneToRef(BB, IB) {
        const ZB = BB.m;
        IB.normal.x = ZB[3] + ZB[2], IB.normal.y = ZB[7] + ZB[6], IB.normal.z = ZB[11] + ZB[10], IB.d = ZB[15] + ZB[14], IB.normalize()
      }
      static GetFarPlaneToRef(BB, IB) {
        const ZB = BB.m;
        IB.normal.x = ZB[3] - ZB[2], IB.normal.y = ZB[7] - ZB[6], IB.normal.z = ZB[11] - ZB[10], IB.d = ZB[15] - ZB[14], IB.normalize()
      }
      static GetLeftPlaneToRef(BB, IB) {
        const ZB = BB.m;
        IB.normal.x = ZB[3] + ZB[0], IB.normal.y = ZB[7] + ZB[4], IB.normal.z = ZB[11] + ZB[8], IB.d = ZB[15] + ZB[12], IB.normalize()
      }
      static GetRightPlaneToRef(BB, IB) {
        const ZB = BB.m;
        IB.normal.x = ZB[3] - ZB[0], IB.normal.y = ZB[7] - ZB[4], IB.normal.z = ZB[11] - ZB[8], IB.d = ZB[15] - ZB[12], IB.normalize()
      }
      static GetTopPlaneToRef(BB, IB) {
        const ZB = BB.m;
        IB.normal.x = ZB[3] - ZB[1], IB.normal.y = ZB[7] - ZB[5], IB.normal.z = ZB[11] - ZB[9], IB.d = ZB[15] - ZB[13], IB.normalize()
      }
      static GetBottomPlaneToRef(BB, IB) {
        const ZB = BB.m;
        IB.normal.x = ZB[3] + ZB[1], IB.normal.y = ZB[7] + ZB[5], IB.normal.z = ZB[11] + ZB[9], IB.d = ZB[15] + ZB[13], IB.normalize()
      }
      static GetPlanesToRef(BB, IB) {
        JB.GetNearPlaneToRef(BB, IB[0]), JB.GetFarPlaneToRef(BB, IB[1]), JB.GetLeftPlaneToRef(BB, IB[2]), JB.GetRightPlaneToRef(BB, IB[3]), JB.GetTopPlaneToRef(BB, IB[4]), JB.GetBottomPlaneToRef(BB, IB[5])
      }
      static IsPointInFrustum(BB, IB) {
        for (let ZB = 0; ZB < 6; ZB++)
          if (IB[ZB].dotCoordinate(BB) < 0) return !1;
        return !0
      }
    }
  },
  37824: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => JB
    });
    var TB = ZB(37120);
    class JB {
      constructor(BB, IB, ZB, JB) {
        this.normal = new TB.s(BB, IB, ZB), this.d = JB
      }
      HTB() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new JB(this.normal.x, this.normal.y, this.normal.z, this.d)
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
        let IB = 0;
        return 0 !== BB && (IB = 1 / BB), this.normal.x *= IB, this.normal.y *= IB, this.normal.z *= IB, this.d *= IB, this
      }
      transform(BB) {
        const IB = JB._TmpMatrix;
        BB.invertToRef(IB);
        const ZB = IB.m,
          TB = this.normal.x,
          oB = this.normal.y,
          GB = this.normal.z,
          vB = this.d,
          kB = TB * ZB[0] + oB * ZB[1] + GB * ZB[2] + vB * ZB[3],
          cB = TB * ZB[4] + oB * ZB[5] + GB * ZB[6] + vB * ZB[7],
          nB = TB * ZB[8] + oB * ZB[9] + GB * ZB[10] + vB * ZB[11],
          hB = TB * ZB[12] + oB * ZB[13] + GB * ZB[14] + vB * ZB[15];
        return new JB(kB, cB, nB, hB)
      }
      dotCoordinate(BB) {
        return this.normal.x * BB.x + this.normal.y * BB.y + this.normal.z * BB.z + this.d
      }
      copyFromPoints(BB, IB, ZB) {
        const TB = IB.x - BB.x,
          JB = IB.y - BB.y,
          oB = IB.z - BB.z,
          GB = ZB.x - BB.x,
          vB = ZB.y - BB.y,
          kB = ZB.z - BB.z,
          cB = JB * kB - oB * vB,
          nB = oB * GB - TB * kB,
          hB = TB * vB - JB * GB,
          zB = Math.sqrt(cB * cB + nB * nB + hB * hB);
        let FB;
        return FB = 0 !== zB ? 1 / zB : 0, this.normal.x = cB * FB, this.normal.y = nB * FB, this.normal.z = hB * FB, this.d = -(this.normal.x * BB.x + this.normal.y * BB.y + this.normal.z * BB.z), this
      }
      isFrontFacingTo(BB, IB) {
        return TB.s.Dot(this.normal, BB) <= IB
      }
      signedDistanceTo(BB) {
        return TB.s.Dot(BB, this.normal) + this.d
      }
      static FromArray(BB) {
        return new JB(BB[0], BB[1], BB[2], BB[3])
      }
      static FromPoints(BB, IB, ZB) {
        const TB = new JB(0, 0, 0, 0);
        return TB.copyFromPoints(BB, IB, ZB), TB
      }
      static FromPositionAndNormal(BB, IB) {
        const ZB = new JB(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(BB, IB, ZB)
      }
      static FromPositionAndNormalToRef(BB, IB, ZB) {
        return ZB.normal.TY(IB), ZB.normal.normalize(), ZB.d = -BB.dot(ZB.normal), ZB
      }
      static SignedDistanceToPlaneFromPositionAndNormal(BB, IB, ZB) {
        const JB = -(IB.x * BB.x + IB.y * BB.y + IB.z * BB.z);
        return TB.s.Dot(ZB, IB) + JB
      }
    }
    JB._TmpMatrix = TB.b.Identity()
  },
  37113: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      Matrix: () => TB.b,
      Quaternion: () => TB.f,
      RegisterMathVector: () => TB.j,
      TmpVectors: () => TB.m,
      Vector2: () => TB.p,
      rN: () => TB.s,
      Vector4: () => TB.t
    });
    var TB = ZB(37120);
    (0, TB.j)()
  },
  38151: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => TB
    });
    class TB {
      constructor(BB, IB, ZB, TB) {
        this.x = BB, this.y = IB, this.width = ZB, this.height = TB
      }
      toGlobal(BB, IB) {
        return new TB(this.x * BB, this.y * IB, this.width * BB, this.height * IB)
      }
      toGlobalToRef(BB, IB, ZB) {
        return ZB.x = this.x * BB, ZB.y = this.y * IB, ZB.width = this.width * BB, ZB.height = this.height * IB, this
      }
      clone() {
        return new TB(this.x, this.y, this.width, this.height)
      }
    }
  },
  37964: (BB, IB, ZB) => {
    function TB() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (BB => {
        const IB = 16 * Math.random() | 0;
        return ("x" === BB ? IB : 3 & IB | 8).toString(16)
      }))
    }
    ZB.d(IB, {
      d: () => TB
    })
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);