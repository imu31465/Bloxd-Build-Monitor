/*! For license information please see symm5.211.129163d5.chunk.js.LICENSE.txt */
export const id = 211;
export const ids = [211, 217];
export const modules = {
  37283: JJ => {
    JJ.exports = function(JJ) {
      return null != JJ && null != JJ.constructor && "function" === typeof JJ.constructor.isBuffer && JJ.constructor.isBuffer(JJ)
    }
  },
  37267: (JJ, cJ, ZJ) => {
    var FJ = ZJ(37270),
      UJ = ZJ(37278),
      eJ = ZJ(37283);
    ZJ.g.__TYPEDARRAY_POOL || (ZJ.g.__TYPEDARRAY_POOL = {
      UINT8: UJ([32, 0]),
      UINT16: UJ([32, 0]),
      UINT32: UJ([32, 0]),
      INT8: UJ([32, 0]),
      INT16: UJ([32, 0]),
      INT32: UJ([32, 0]),
      FLOAT: UJ([32, 0]),
      DOUBLE: UJ([32, 0]),
      DATA: UJ([32, 0]),
      UINT8C: UJ([32, 0]),
      BUFFER: UJ([32, 0])
    });
    var XJ = "undefined" !== typeof Uint8ClampedArray,
      AJ = ZJ.g.__TYPEDARRAY_POOL;
    AJ.UINT8C || (AJ.UINT8C = UJ([32, 0])), AJ.BUFFER || (AJ.BUFFER = UJ([32, 0]));
    var qJ = AJ.DATA,
      jJ = AJ.BUFFER;

    function YJ(JJ) {
      if (JJ) {
        var cJ = JJ.length || JJ.byteLength,
          ZJ = FJ.log2(cJ);
        qJ[ZJ].push(JJ)
      }
    }

    function hJ(JJ) {
      JJ = FJ.nextPow2(JJ);
      var cJ = FJ.log2(JJ),
        ZJ = qJ[cJ];
      return ZJ.length > 0 ? ZJ.pop() : new ArrayBuffer(JJ)
    }

    function DJ(JJ) {
      return new Uint8Array(hJ(JJ), 0, JJ)
    }

    function sJ(JJ) {
      return new Uint16Array(hJ(2 * JJ), 0, JJ)
    }

    function nJ(JJ) {
      return new Uint32Array(hJ(4 * JJ), 0, JJ)
    }

    function GJ(JJ) {
      return new Int8Array(hJ(JJ), 0, JJ)
    }

    function fJ(JJ) {
      return new Int16Array(hJ(2 * JJ), 0, JJ)
    }

    function xJ(JJ) {
      return new Int32Array(hJ(4 * JJ), 0, JJ)
    }

    function rJ(JJ) {
      return new Float32Array(hJ(4 * JJ), 0, JJ)
    }

    function vJ(JJ) {
      return new Float64Array(hJ(8 * JJ), 0, JJ)
    }

    function mJ(JJ) {
      return XJ ? new Uint8ClampedArray(hJ(JJ), 0, JJ) : DJ(JJ)
    }

    function QJ(JJ) {
      return new DataView(hJ(JJ), 0, JJ)
    }
    cJ.free = function(JJ) {
      if (eJ(JJ)) jJ[FJ.log2(JJ.length)].push(JJ);
      else {
        if ("[object ArrayBuffer]" !== Object.prototype.toString.call(JJ) && (JJ = JJ.buffer), !JJ) return;
        var cJ = JJ.length || JJ.byteLength,
          ZJ = 0 | FJ.log2(cJ);
        qJ[ZJ].push(JJ)
      }
    }, cJ.freeUint8 = cJ.freeUint16 = cJ.freeUint32 = cJ.freeInt8 = cJ.freeInt16 = cJ.freeInt32 = cJ.freeFloat32 = cJ.freeFloat = cJ.freeFloat64 = cJ.freeDouble = cJ.freeUint8Clamped = cJ.freeDataView = function(JJ) {
      YJ(JJ.buffer)
    }, cJ.freeArrayBuffer = YJ, cJ.freeBuffer = function(JJ) {
      jJ[FJ.log2(JJ.length)].push(JJ)
    }, cJ.malloc = function(JJ, cJ) {
      if (void 0 === cJ || "arraybuffer" === cJ) return hJ(JJ);
      switch (cJ) {
        case "uint8":
          return DJ(JJ);
        case "uint16":
          return sJ(JJ);
        case "uint32":
          return nJ(JJ);
        case "int8":
          return GJ(JJ);
        case "int16":
          return fJ(JJ);
        case "int32":
          return xJ(JJ);
        case "float":
        case "float32":
          return rJ(JJ);
        case "double":
        case "float64":
          return vJ(JJ);
        case "uint8_clamped":
          return mJ(JJ);
        case "buffer":
          throw "Buffer not supported";
        case "data":
        case "dataview":
          return QJ(JJ);
        default:
          return null
      }
      return null
    }, cJ.mallocArrayBuffer = hJ, cJ.mallocUint8 = DJ, cJ.mallocUint16 = sJ, cJ.mallocUint32 = nJ, cJ.mallocInt8 = GJ, cJ.mallocInt16 = fJ, cJ.mallocInt32 = xJ, cJ.mallocFloat32 = cJ.mallocFloat = rJ, cJ.mallocFloat64 = cJ.mallocDouble = vJ, cJ.mallocUint8Clamped = mJ, cJ.mallocDataView = QJ, cJ.clearCache = function() {
      for (var JJ = 0; JJ < 32; ++JJ) AJ.UINT8[JJ].length = 0, AJ.UINT16[JJ].length = 0, AJ.UINT32[JJ].length = 0, AJ.INT8[JJ].length = 0, AJ.INT16[JJ].length = 0, AJ.INT32[JJ].length = 0, AJ.FLOAT[JJ].length = 0, AJ.DOUBLE[JJ].length = 0, AJ.UINT8C[JJ].length = 0, qJ[JJ].length = 0, jJ[JJ].length = 0
    }
  },
  37270: (JJ, cJ) => {
    function ZJ(JJ) {
      var cJ = 32;
      return (JJ &= -JJ) && cJ--, 65535 & JJ && (cJ -= 16), 16711935 & JJ && (cJ -= 8), 252645135 & JJ && (cJ -= 4), 858993459 & JJ && (cJ -= 2), 1431655765 & JJ && (cJ -= 1), cJ
    }
    cJ.INT_BITS = 32, cJ.INT_MAX = 2147483647, cJ.INT_MIN = -1 << 31, cJ.sign = function(JJ) {
      return (JJ > 0) - (JJ < 0)
    }, cJ.abs = function(JJ) {
      var cJ = JJ >> 31;
      return (JJ ^ cJ) - cJ
    }, cJ.min = function(JJ, cJ) {
      return cJ ^ (JJ ^ cJ) & -(JJ < cJ)
    }, cJ.max = function(JJ, cJ) {
      return JJ ^ (JJ ^ cJ) & -(JJ < cJ)
    }, cJ.isPow2 = function(JJ) {
      return !(JJ & JJ - 1) && !!JJ
    }, cJ.log2 = function(JJ) {
      var cJ, ZJ;
      return cJ = (JJ > 65535) << 4, cJ |= ZJ = ((JJ >>>= cJ) > 255) << 3, cJ |= ZJ = ((JJ >>>= ZJ) > 15) << 2, (cJ |= ZJ = ((JJ >>>= ZJ) > 3) << 1) | (JJ >>>= ZJ) >> 1
    }, cJ.log10 = function(JJ) {
      return JJ >= 1e9 ? 9 : JJ >= 1e8 ? 8 : JJ >= 1e7 ? 7 : JJ >= 1e6 ? 6 : JJ >= 1e5 ? 5 : JJ >= 1e4 ? 4 : JJ >= 1e3 ? 3 : JJ >= 100 ? 2 : JJ >= 10 ? 1 : 0
    }, cJ.popCount = function(JJ) {
      return 16843009 * ((JJ = (858993459 & (JJ -= JJ >>> 1 & 1431655765)) + (JJ >>> 2 & 858993459)) + (JJ >>> 4) & 252645135) >>> 24
    }, cJ.countTrailingZeros = ZJ, cJ.nextPow2 = function(JJ) {
      return JJ += 0 === JJ, --JJ, JJ |= JJ >>> 1, JJ |= JJ >>> 2, JJ |= JJ >>> 4, JJ |= JJ >>> 8, (JJ |= JJ >>> 16) + 1
    }, cJ.prevPow2 = function(JJ) {
      return JJ |= JJ >>> 1, JJ |= JJ >>> 2, JJ |= JJ >>> 4, JJ |= JJ >>> 8, (JJ |= JJ >>> 16) - (JJ >>> 1)
    }, cJ.parity = function(JJ) {
      return JJ ^= JJ >>> 16, JJ ^= JJ >>> 8, JJ ^= JJ >>> 4, 27030 >>> (JJ &= 15) & 1
    };
    var FJ = new Array(256);
    ! function(JJ) {
      for (var cJ = 0; cJ < 256; ++cJ) {
        var ZJ = cJ,
          FJ = cJ,
          UJ = 7;
        for (ZJ >>>= 1; ZJ; ZJ >>>= 1) FJ <<= 1, FJ |= 1 & ZJ, --UJ;
        JJ[cJ] = FJ << UJ & 255
      }
    }(FJ), cJ.reverse = function(JJ) {
      return FJ[255 & JJ] << 24 | FJ[JJ >>> 8 & 255] << 16 | FJ[JJ >>> 16 & 255] << 8 | FJ[JJ >>> 24 & 255]
    }, cJ.interleave2 = function(JJ, cJ) {
      return (JJ = 1431655765 & ((JJ = 858993459 & ((JJ = 252645135 & ((JJ = 16711935 & ((JJ &= 65535) | JJ << 8)) | JJ << 4)) | JJ << 2)) | JJ << 1)) | (cJ = 1431655765 & ((cJ = 858993459 & ((cJ = 252645135 & ((cJ = 16711935 & ((cJ &= 65535) | cJ << 8)) | cJ << 4)) | cJ << 2)) | cJ << 1)) << 1
    }, cJ.deinterleave2 = function(JJ, cJ) {
      return (JJ = 65535 & ((JJ = 16711935 & ((JJ = 252645135 & ((JJ = 858993459 & ((JJ = JJ >>> cJ & 1431655765) | JJ >>> 1)) | JJ >>> 2)) | JJ >>> 4)) | JJ >>> 16)) << 16 >> 16
    }, cJ.interleave3 = function(JJ, cJ, ZJ) {
      return JJ = 1227133513 & ((JJ = 3272356035 & ((JJ = 251719695 & ((JJ = 4278190335 & ((JJ &= 1023) | JJ << 16)) | JJ << 8)) | JJ << 4)) | JJ << 2), (JJ |= (cJ = 1227133513 & ((cJ = 3272356035 & ((cJ = 251719695 & ((cJ = 4278190335 & ((cJ &= 1023) | cJ << 16)) | cJ << 8)) | cJ << 4)) | cJ << 2)) << 1) | (ZJ = 1227133513 & ((ZJ = 3272356035 & ((ZJ = 251719695 & ((ZJ = 4278190335 & ((ZJ &= 1023) | ZJ << 16)) | ZJ << 8)) | ZJ << 4)) | ZJ << 2)) << 2
    }, cJ.deinterleave3 = function(JJ, cJ) {
      return (JJ = 1023 & ((JJ = 4278190335 & ((JJ = 251719695 & ((JJ = 3272356035 & ((JJ = JJ >>> cJ & 1227133513) | JJ >>> 2)) | JJ >>> 4)) | JJ >>> 8)) | JJ >>> 16)) << 22 >> 22
    }, cJ.nextCombination = function(JJ) {
      var cJ = JJ | JJ - 1;
      return cJ + 1 | (~cJ & -~cJ) - 1 >>> ZJ(JJ) + 1
    }
  },
  37262: (JJ, cJ, ZJ) => {
    JJ.exports = function(JJ, cJ, ZJ) {
      switch (arguments.length) {
        case 1:
          return FJ = [], jJ(UJ = JJ, UJ, YJ, !0), FJ;
        case 2:
          return "function" === typeof cJ ? jJ(JJ, JJ, cJ, !0) : function(JJ, cJ) {
            return FJ = [], jJ(JJ, cJ, YJ, !1), FJ
          }(JJ, cJ);
        case 3:
          return jJ(JJ, cJ, ZJ, !1);
        default:
          throw new Error("box-intersect: Invalid arguments")
      }
      var UJ
    };
    var FJ, UJ = ZJ(37267),
      eJ = ZJ(37292),
      XJ = ZJ(37305);

    function AJ(JJ, cJ) {
      for (var ZJ = 0; ZJ < JJ; ++ZJ)
        if (!(cJ[ZJ] <= cJ[ZJ + JJ])) return !0;
      return !1
    }

    function qJ(JJ, cJ, ZJ, FJ) {
      for (var UJ = 0, eJ = 0, XJ = 0, qJ = JJ.length; XJ < qJ; ++XJ) {
        var jJ = JJ[XJ];
        if (!AJ(cJ, jJ)) {
          for (var YJ = 0; YJ < 2 * cJ; ++YJ) ZJ[UJ++] = jJ[YJ];
          FJ[eJ++] = XJ
        }
      }
      return eJ
    }

    function jJ(JJ, cJ, ZJ, FJ) {
      var AJ = JJ.length,
        jJ = cJ.length;
      if (!(AJ <= 0 || jJ <= 0)) {
        var YJ = JJ[0].length >>> 1;
        if (!(YJ <= 0)) {
          var hJ, DJ = UJ.mallocDouble(2 * YJ * AJ),
            sJ = UJ.mallocInt32(AJ);
          if ((AJ = qJ(JJ, YJ, DJ, sJ)) > 0) {
            if (1 === YJ && FJ) eJ.init(AJ), hJ = eJ.sweepComplete(YJ, ZJ, 0, AJ, DJ, sJ, 0, AJ, DJ, sJ);
            else {
              var nJ = UJ.mallocDouble(2 * YJ * jJ),
                GJ = UJ.mallocInt32(jJ);
              (jJ = qJ(cJ, YJ, nJ, GJ)) > 0 && (eJ.init(AJ + jJ), hJ = 1 === YJ ? eJ.sweepBipartite(YJ, ZJ, 0, AJ, DJ, sJ, 0, jJ, nJ, GJ) : XJ(YJ, ZJ, FJ, AJ, DJ, sJ, jJ, nJ, GJ), UJ.free(nJ), UJ.free(GJ))
            }
            UJ.free(DJ), UJ.free(sJ)
          }
          return hJ
        }
      }
    }

    function YJ(JJ, cJ) {
      FJ.push([JJ, cJ])
    }
  },
  37310: (JJ, cJ) => {
    var ZJ = "d",
      FJ = "ax",
      UJ = "fp",
      eJ = "es",
      XJ = "rs",
      AJ = "re",
      qJ = "rb",
      jJ = "bs",
      YJ = "be",
      hJ = "bb",
      DJ = [ZJ, FJ, "vv", XJ, AJ, qJ, "ri", jJ, YJ, hJ, "bi"];

    function sJ(JJ) {
      var cJ = "bruteForce" + (JJ ? "Full" : "Partial"),
        FJ = [],
        XJ = DJ.slice();
      JJ || XJ.splice(3, 0, UJ);
      var AJ = ["function " + cJ + "(" + XJ.join() + "){"];

      function qJ(cJ, UJ) {
        var XJ = function(JJ, cJ, FJ) {
          var UJ = "bruteForce" + (JJ ? "Red" : "Blue") + (cJ ? "Flip" : "") + (FJ ? "Full" : ""),
            XJ = ["function ", UJ, "(", DJ.join(), "){", "var ", eJ, "=2*", ZJ, ";"],
            AJ = "for(var i=rs,rp=es*rs;i<re;++i,rp+=es){var x0=rb[ax+rp],x1=rb[ax+rp+d],xi=ri[i];",
            qJ = "for(var j=bs,bp=es*bs;j<be;++j,bp+=es){var y0=bb[ax+bp]," + (FJ ? "y1=bb[ax+bp+d]," : "") + "yi=bi[j];";
          return JJ ? XJ.push(AJ, "Q", ":", qJ) : XJ.push(qJ, "Q", ":", AJ), FJ ? XJ.push("if(y1<x0||x1<y0)continue;") : cJ ? XJ.push("if(y0<=x0||x1<y0)continue;") : XJ.push("if(y0<x0||x1<y0)continue;"), XJ.push("for(var k=ax+1;k<d;++k){var r0=rb[k+rp],r1=rb[k+d+rp],b0=bb[k+bp],b1=bb[k+d+bp];if(r1<b0||b1<r0)continue Q;}var rv=vv("), cJ ? XJ.push("yi,xi") : XJ.push("xi,yi"), XJ.push(");if(rv!==void 0)return rv;}}}"), {
            name: UJ,
            code: XJ.join("")
          }
        }(cJ, UJ, JJ);
        FJ.push(XJ.code), AJ.push("return " + XJ.name + "(" + DJ.join() + ");")
      }
      AJ.push("if(re-rs>be-bs){"), JJ ? (qJ(!0, !1), AJ.push("}else{"), qJ(!1, !1)) : (AJ.push("if(fp){"), qJ(!0, !0), AJ.push("}else{"), qJ(!0, !1), AJ.push("}}else{if(fp){"), qJ(!1, !0), AJ.push("}else{"), qJ(!1, !1), AJ.push("}")), AJ.push("}}return " + cJ);
      var jJ = FJ.join("") + AJ.join("");
      return new Function(jJ)()
    }
    cJ.partial = sJ(!1), cJ.full = sJ(!0)
  },
  37305: (JJ, cJ, ZJ) => {
    JJ.exports = function(JJ, cJ, ZJ, eJ, YJ, IJ, MJ, bJ, wJ) {
      ! function(JJ, cJ) {
        var ZJ = 8 * UJ.log2(cJ + 1) * (JJ + 1) | 0,
          eJ = UJ.nextPow2(mJ * ZJ);
        EJ.length < eJ && (FJ.free(EJ), EJ = FJ.mallocInt32(eJ));
        var XJ = UJ.nextPow2(QJ * ZJ);
        VJ.length < XJ && (FJ.free(VJ), VJ = FJ.mallocDouble(XJ))
      }(JJ, eJ + MJ);
      var WJ, gJ = 0,
        HJ = 2 * JJ;
      KJ(gJ++, 0, 0, eJ, 0, MJ, ZJ ? 16 : 0, -1 / 0, 1 / 0), ZJ || KJ(gJ++, 0, 0, MJ, 0, eJ, 1, -1 / 0, 1 / 0);
      for (; gJ > 0;) {
        var PJ = (gJ -= 1) * mJ,
          kJ = EJ[PJ],
          pJ = EJ[PJ + 1],
          dJ = EJ[PJ + 2],
          zJ = EJ[PJ + 3],
          NJ = EJ[PJ + 4],
          OJ = EJ[PJ + 5],
          TJ = gJ * QJ,
          CJ = VJ[TJ],
          uJ = VJ[TJ + 1],
          iJ = 1 & OJ,
          RJ = !!(16 & OJ),
          LJ = YJ,
          aJ = IJ,
          BJ = bJ,
          tJ = wJ;
        if (iJ && (LJ = bJ, aJ = wJ, BJ = YJ, tJ = IJ), !(2 & OJ && pJ >= (dJ = fJ(JJ, kJ, pJ, dJ, LJ, aJ, uJ))) && !(4 & OJ && (pJ = xJ(JJ, kJ, pJ, dJ, LJ, aJ, CJ)) >= dJ)) {
          var oJ = dJ - pJ,
            lJ = NJ - zJ;
          if (RJ) {
            if (JJ * oJ * (oJ + lJ) < sJ) {
              if (void 0 !== (WJ = qJ.scanComplete(JJ, kJ, cJ, pJ, dJ, LJ, aJ, zJ, NJ, BJ, tJ))) return WJ;
              continue
            }
          } else {
            if (JJ * Math.min(oJ, lJ) < hJ) {
              if (void 0 !== (WJ = XJ(JJ, kJ, cJ, iJ, pJ, dJ, LJ, aJ, zJ, NJ, BJ, tJ))) return WJ;
              continue
            }
            if (JJ * oJ * lJ < DJ) {
              if (void 0 !== (WJ = qJ.scanBipartite(JJ, kJ, cJ, iJ, pJ, dJ, LJ, aJ, zJ, NJ, BJ, tJ))) return WJ;
              continue
            }
          }
          var Jc = nJ(JJ, kJ, pJ, dJ, LJ, aJ, CJ, uJ);
          if (pJ < Jc)
            if (JJ * (Jc - pJ) < hJ) {
              if (void 0 !== (WJ = AJ(JJ, kJ + 1, cJ, pJ, Jc, LJ, aJ, zJ, NJ, BJ, tJ))) return WJ
            } else if (kJ === JJ - 2) {
            if (void 0 !== (WJ = iJ ? qJ.sweepBipartite(JJ, cJ, zJ, NJ, BJ, tJ, pJ, Jc, LJ, aJ) : qJ.sweepBipartite(JJ, cJ, pJ, Jc, LJ, aJ, zJ, NJ, BJ, tJ))) return WJ
          } else KJ(gJ++, kJ + 1, pJ, Jc, zJ, NJ, iJ, -1 / 0, 1 / 0), KJ(gJ++, kJ + 1, zJ, NJ, pJ, Jc, 1 ^ iJ, -1 / 0, 1 / 0);
          if (Jc < dJ) {
            var cc = jJ(JJ, kJ, zJ, NJ, BJ, tJ),
              Zc = BJ[HJ * cc + kJ],
              Fc = GJ(JJ, kJ, cc, NJ, BJ, tJ, Zc);
            if (Fc < NJ && KJ(gJ++, kJ, Jc, dJ, Fc, NJ, (4 | iJ) + (RJ ? 16 : 0), Zc, uJ), zJ < cc && KJ(gJ++, kJ, Jc, dJ, zJ, cc, (2 | iJ) + (RJ ? 16 : 0), CJ, Zc), cc + 1 === Fc) {
              if (void 0 !== (WJ = RJ ? SJ(JJ, kJ, cJ, Jc, dJ, LJ, aJ, cc, BJ, tJ[cc]) : yJ(JJ, kJ, cJ, iJ, Jc, dJ, LJ, aJ, cc, BJ, tJ[cc]))) return WJ
            } else if (cc < Fc) {
              var Uc;
              if (RJ) {
                if (Jc < (Uc = rJ(JJ, kJ, Jc, dJ, LJ, aJ, Zc))) {
                  var ec = GJ(JJ, kJ, Jc, Uc, LJ, aJ, Zc);
                  if (kJ === JJ - 2) {
                    if (Jc < ec && void 0 !== (WJ = qJ.sweepComplete(JJ, cJ, Jc, ec, LJ, aJ, cc, Fc, BJ, tJ))) return WJ;
                    if (ec < Uc && void 0 !== (WJ = qJ.sweepBipartite(JJ, cJ, ec, Uc, LJ, aJ, cc, Fc, BJ, tJ))) return WJ
                  } else Jc < ec && KJ(gJ++, kJ + 1, Jc, ec, cc, Fc, 16, -1 / 0, 1 / 0), ec < Uc && (KJ(gJ++, kJ + 1, ec, Uc, cc, Fc, 0, -1 / 0, 1 / 0), KJ(gJ++, kJ + 1, cc, Fc, ec, Uc, 1, -1 / 0, 1 / 0))
                }
              } else Jc < (Uc = iJ ? vJ(JJ, kJ, Jc, dJ, LJ, aJ, Zc) : rJ(JJ, kJ, Jc, dJ, LJ, aJ, Zc)) && (kJ === JJ - 2 ? WJ = iJ ? qJ.sweepBipartite(JJ, cJ, cc, Fc, BJ, tJ, Jc, Uc, LJ, aJ) : qJ.sweepBipartite(JJ, cJ, Jc, Uc, LJ, aJ, cc, Fc, BJ, tJ) : (KJ(gJ++, kJ + 1, Jc, Uc, cc, Fc, iJ, -1 / 0, 1 / 0), KJ(gJ++, kJ + 1, cc, Fc, Jc, Uc, 1 ^ iJ, -1 / 0, 1 / 0)))
            }
          }
        }
      }
    };
    var FJ = ZJ(37267),
      UJ = ZJ(37270),
      eJ = ZJ(37310),
      XJ = eJ.partial,
      AJ = eJ.full,
      qJ = ZJ(37292),
      jJ = ZJ(37312),
      YJ = ZJ(37319),
      hJ = 128,
      DJ = 1 << 22,
      sJ = 1 << 22,
      nJ = YJ("!(lo>=p0)&&!(p1>=hi)", ["p0", "p1"]),
      GJ = YJ("lo===p0", ["p0"]),
      fJ = YJ("lo<p0", ["p0"]),
      xJ = YJ("hi<=p0", ["p0"]),
      rJ = YJ("lo<=p0&&p0<=hi", ["p0"]),
      vJ = YJ("lo<p0&&p0<=hi", ["p0"]),
      mJ = 6,
      QJ = 2,
      EJ = FJ.mallocInt32(1024),
      VJ = FJ.mallocDouble(1024);

    function KJ(JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ, qJ) {
      var jJ = mJ * JJ;
      EJ[jJ] = cJ, EJ[jJ + 1] = ZJ, EJ[jJ + 2] = FJ, EJ[jJ + 3] = UJ, EJ[jJ + 4] = eJ, EJ[jJ + 5] = XJ;
      var YJ = QJ * JJ;
      VJ[YJ] = AJ, VJ[YJ + 1] = qJ
    }

    function yJ(JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ, qJ, jJ, YJ) {
      var hJ = 2 * JJ,
        DJ = qJ * hJ,
        sJ = jJ[DJ + cJ];
      JJ: for (var nJ = UJ, GJ = UJ * hJ; nJ < eJ; ++nJ, GJ += hJ) {
        var fJ = XJ[GJ + cJ],
          xJ = XJ[GJ + cJ + JJ];
        if (!(sJ < fJ || xJ < sJ) && (!FJ || sJ !== fJ)) {
          for (var rJ, vJ = AJ[nJ], mJ = cJ + 1; mJ < JJ; ++mJ) {
            fJ = XJ[GJ + mJ], xJ = XJ[GJ + mJ + JJ];
            var QJ = jJ[DJ + mJ],
              EJ = jJ[DJ + mJ + JJ];
            if (xJ < QJ || EJ < fJ) continue JJ
          }
          if (void 0 !== (rJ = FJ ? ZJ(YJ, vJ) : ZJ(vJ, YJ))) return rJ
        }
      }
    }

    function SJ(JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ, qJ, jJ) {
      var YJ = 2 * JJ,
        hJ = AJ * YJ,
        DJ = qJ[hJ + cJ];
      JJ: for (var sJ = FJ, nJ = FJ * YJ; sJ < UJ; ++sJ, nJ += YJ) {
        var GJ = XJ[sJ];
        if (GJ !== jJ) {
          var fJ = eJ[nJ + cJ],
            xJ = eJ[nJ + cJ + JJ];
          if (!(DJ < fJ || xJ < DJ)) {
            for (var rJ = cJ + 1; rJ < JJ; ++rJ) {
              fJ = eJ[nJ + rJ], xJ = eJ[nJ + rJ + JJ];
              var vJ = qJ[hJ + rJ],
                mJ = qJ[hJ + rJ + JJ];
              if (xJ < vJ || mJ < fJ) continue JJ
            }
            var QJ = ZJ(GJ, jJ);
            if (void 0 !== QJ) return QJ
          }
        }
      }
    }
  },
  37312: (JJ, cJ, ZJ) => {
    JJ.exports = function(JJ, cJ, ZJ, XJ, AJ, qJ) {
      if (XJ <= ZJ + 1) return ZJ;
      var jJ = ZJ,
        YJ = XJ,
        hJ = XJ + ZJ >>> 1,
        DJ = 2 * JJ,
        sJ = hJ,
        nJ = AJ[DJ * hJ + cJ];
      for (; jJ < YJ;) {
        if (YJ - jJ < UJ) {
          eJ(JJ, cJ, jJ, YJ, AJ, qJ), nJ = AJ[DJ * hJ + cJ];
          break
        }
        var GJ = YJ - jJ,
          fJ = Math.random() * GJ + jJ | 0,
          xJ = AJ[DJ * fJ + cJ],
          rJ = Math.random() * GJ + jJ | 0,
          vJ = AJ[DJ * rJ + cJ],
          mJ = Math.random() * GJ + jJ | 0,
          QJ = AJ[DJ * mJ + cJ];
        xJ <= vJ ? QJ >= vJ ? (sJ = rJ, nJ = vJ) : xJ >= QJ ? (sJ = fJ, nJ = xJ) : (sJ = mJ, nJ = QJ) : vJ >= QJ ? (sJ = rJ, nJ = vJ) : QJ >= xJ ? (sJ = fJ, nJ = xJ) : (sJ = mJ, nJ = QJ);
        for (var EJ = DJ * (YJ - 1), VJ = DJ * sJ, KJ = 0; KJ < DJ; ++KJ, ++EJ, ++VJ) {
          var yJ = AJ[EJ];
          AJ[EJ] = AJ[VJ], AJ[VJ] = yJ
        }
        var SJ = qJ[YJ - 1];
        qJ[YJ - 1] = qJ[sJ], qJ[sJ] = SJ;
        for (EJ = DJ * (YJ - 1), VJ = DJ * (sJ = FJ(JJ, cJ, jJ, YJ - 1, AJ, qJ, nJ)), KJ = 0; KJ < DJ; ++KJ, ++EJ, ++VJ) {
          yJ = AJ[EJ];
          AJ[EJ] = AJ[VJ], AJ[VJ] = yJ
        }
        SJ = qJ[YJ - 1];
        if (qJ[YJ - 1] = qJ[sJ], qJ[sJ] = SJ, hJ < sJ) {
          for (YJ = sJ - 1; jJ < YJ && AJ[DJ * (YJ - 1) + cJ] === nJ;) YJ -= 1;
          YJ += 1
        } else {
          if (!(sJ < hJ)) break;
          for (jJ = sJ + 1; jJ < YJ && AJ[DJ * jJ + cJ] === nJ;) jJ += 1
        }
      }
      return FJ(JJ, cJ, ZJ, hJ, AJ, qJ, AJ[DJ * hJ + cJ])
    };
    var FJ = ZJ(37319)("lo<p0", ["p0"]),
      UJ = 8;

    function eJ(JJ, cJ, ZJ, FJ, UJ, eJ) {
      for (var XJ = 2 * JJ, AJ = XJ * (ZJ + 1) + cJ, qJ = ZJ + 1; qJ < FJ; ++qJ, AJ += XJ)
        for (var jJ = UJ[AJ], YJ = qJ, hJ = XJ * (qJ - 1); YJ > ZJ && UJ[hJ + cJ] > jJ; --YJ, hJ -= XJ) {
          for (var DJ = hJ, sJ = hJ + XJ, nJ = 0; nJ < XJ; ++nJ, ++DJ, ++sJ) {
            var GJ = UJ[DJ];
            UJ[DJ] = UJ[sJ], UJ[sJ] = GJ
          }
          var fJ = eJ[YJ];
          eJ[YJ] = eJ[YJ - 1], eJ[YJ - 1] = fJ
        }
    }
  },
  37319: JJ => {
    JJ.exports = function(JJ, ZJ) {
      var FJ = "abcdef".split("").concat(ZJ),
        UJ = [];
      JJ.indexOf("lo") >= 0 && UJ.push("lo=e[k+n]");
      JJ.indexOf("hi") >= 0 && UJ.push("hi=e[k+o]");
      return FJ.push(cJ.replace("_", UJ.join()).replace("$", JJ)), Function.apply(void 0, FJ)
    };
    var cJ = "for(var j=2*a,k=j*c,l=k,m=c,n=b,o=a+b,p=c;d>p;++p,k+=j){var _;if($)if(m===p)m+=1,l+=j;else{for(var s=0;j>s;++s){var t=e[k+s];e[k+s]=e[l],e[l++]=t}var u=f[p];f[p]=f[m],f[m++]=u}}return m"
  },
  37301: JJ => {
    JJ.exports = function(JJ, FJ) {
      FJ <= 4 * cJ ? ZJ(0, FJ - 1, JJ) : jJ(0, FJ - 1, JJ)
    };
    var cJ = 32;

    function ZJ(JJ, cJ, ZJ) {
      for (var FJ = 2 * (JJ + 1), UJ = JJ + 1; UJ <= cJ; ++UJ) {
        for (var eJ = ZJ[FJ++], XJ = ZJ[FJ++], AJ = UJ, qJ = FJ - 2; AJ-- > JJ;) {
          var jJ = ZJ[qJ - 2],
            YJ = ZJ[qJ - 1];
          if (jJ < eJ) break;
          if (jJ === eJ && YJ < XJ) break;
          ZJ[qJ] = jJ, ZJ[qJ + 1] = YJ, qJ -= 2
        }
        ZJ[qJ] = eJ, ZJ[qJ + 1] = XJ
      }
    }

    function FJ(JJ, cJ, ZJ) {
      cJ *= 2;
      var FJ = ZJ[JJ *= 2],
        UJ = ZJ[JJ + 1];
      ZJ[JJ] = ZJ[cJ], ZJ[JJ + 1] = ZJ[cJ + 1], ZJ[cJ] = FJ, ZJ[cJ + 1] = UJ
    }

    function UJ(JJ, cJ, ZJ) {
      cJ *= 2, ZJ[JJ *= 2] = ZJ[cJ], ZJ[JJ + 1] = ZJ[cJ + 1]
    }

    function eJ(JJ, cJ, ZJ, FJ) {
      cJ *= 2, ZJ *= 2;
      var UJ = FJ[JJ *= 2],
        eJ = FJ[JJ + 1];
      FJ[JJ] = FJ[cJ], FJ[JJ + 1] = FJ[cJ + 1], FJ[cJ] = FJ[ZJ], FJ[cJ + 1] = FJ[ZJ + 1], FJ[ZJ] = UJ, FJ[ZJ + 1] = eJ
    }

    function XJ(JJ, cJ, ZJ, FJ, UJ) {
      cJ *= 2, UJ[JJ *= 2] = UJ[cJ], UJ[cJ] = ZJ, UJ[JJ + 1] = UJ[cJ + 1], UJ[cJ + 1] = FJ
    }

    function AJ(JJ, cJ, ZJ) {
      cJ *= 2;
      var FJ = ZJ[JJ *= 2],
        UJ = ZJ[cJ];
      return !(FJ < UJ) && (FJ !== UJ || ZJ[JJ + 1] > ZJ[cJ + 1])
    }

    function qJ(JJ, cJ, ZJ, FJ) {
      var UJ = FJ[JJ *= 2];
      return UJ < cJ || UJ === cJ && FJ[JJ + 1] < ZJ
    }

    function jJ(JJ, YJ, hJ) {
      var DJ = (YJ - JJ + 1) / 6 | 0,
        sJ = JJ + DJ,
        nJ = YJ - DJ,
        GJ = JJ + YJ >> 1,
        fJ = GJ - DJ,
        xJ = GJ + DJ,
        rJ = sJ,
        vJ = fJ,
        mJ = GJ,
        QJ = xJ,
        EJ = nJ,
        VJ = JJ + 1,
        KJ = YJ - 1,
        yJ = 0;
      AJ(rJ, vJ, hJ) && (yJ = rJ, rJ = vJ, vJ = yJ), AJ(QJ, EJ, hJ) && (yJ = QJ, QJ = EJ, EJ = yJ), AJ(rJ, mJ, hJ) && (yJ = rJ, rJ = mJ, mJ = yJ), AJ(vJ, mJ, hJ) && (yJ = vJ, vJ = mJ, mJ = yJ), AJ(rJ, QJ, hJ) && (yJ = rJ, rJ = QJ, QJ = yJ), AJ(mJ, QJ, hJ) && (yJ = mJ, mJ = QJ, QJ = yJ), AJ(vJ, EJ, hJ) && (yJ = vJ, vJ = EJ, EJ = yJ), AJ(vJ, mJ, hJ) && (yJ = vJ, vJ = mJ, mJ = yJ), AJ(QJ, EJ, hJ) && (yJ = QJ, QJ = EJ, EJ = yJ);
      for (var SJ = hJ[2 * vJ], IJ = hJ[2 * vJ + 1], MJ = hJ[2 * QJ], bJ = hJ[2 * QJ + 1], wJ = 2 * rJ, WJ = 2 * mJ, gJ = 2 * EJ, HJ = 2 * sJ, PJ = 2 * GJ, kJ = 2 * nJ, pJ = 0; pJ < 2; ++pJ) {
        var dJ = hJ[wJ + pJ],
          zJ = hJ[WJ + pJ],
          NJ = hJ[gJ + pJ];
        hJ[HJ + pJ] = dJ, hJ[PJ + pJ] = zJ, hJ[kJ + pJ] = NJ
      }
      UJ(fJ, JJ, hJ), UJ(xJ, YJ, hJ);
      for (var OJ = VJ; OJ <= KJ; ++OJ)
        if (qJ(OJ, SJ, IJ, hJ)) OJ !== VJ && FJ(OJ, VJ, hJ), ++VJ;
        else if (!qJ(OJ, MJ, bJ, hJ))
        for (;;) {
          if (qJ(KJ, MJ, bJ, hJ)) {
            qJ(KJ, SJ, IJ, hJ) ? (eJ(OJ, VJ, KJ, hJ), ++VJ, --KJ) : (FJ(OJ, KJ, hJ), --KJ);
            break
          }
          if (--KJ < OJ) break
        }
      XJ(JJ, VJ - 1, SJ, IJ, hJ), XJ(YJ, KJ + 1, MJ, bJ, hJ), VJ - 2 - JJ <= cJ ? ZJ(JJ, VJ - 2, hJ) : jJ(JJ, VJ - 2, hJ), YJ - (KJ + 2) <= cJ ? ZJ(KJ + 2, YJ, hJ) : jJ(KJ + 2, YJ, hJ), KJ - VJ <= cJ ? ZJ(VJ, KJ, hJ) : jJ(VJ, KJ, hJ)
    }
  },
  37292: (JJ, cJ, ZJ) => {
    JJ.exports = {
      init: function(JJ) {
        var cJ = UJ.nextPow2(JJ);
        qJ.length < cJ && (FJ.free(qJ), qJ = FJ.mallocInt32(cJ));
        jJ.length < cJ && (FJ.free(jJ), jJ = FJ.mallocInt32(cJ));
        YJ.length < cJ && (FJ.free(YJ), YJ = FJ.mallocInt32(cJ));
        hJ.length < cJ && (FJ.free(hJ), hJ = FJ.mallocInt32(cJ));
        DJ.length < cJ && (FJ.free(DJ), DJ = FJ.mallocInt32(cJ));
        sJ.length < cJ && (FJ.free(sJ), sJ = FJ.mallocInt32(cJ));
        var ZJ = 8 * cJ;
        nJ.length < ZJ && (FJ.free(nJ), nJ = FJ.mallocDouble(ZJ))
      },
      sweepBipartite: function(JJ, cJ, ZJ, FJ, UJ, AJ, DJ, sJ, xJ, rJ) {
        for (var vJ = 0, mJ = 2 * JJ, QJ = JJ - 1, EJ = mJ - 1, VJ = ZJ; VJ < FJ; ++VJ) {
          var KJ = AJ[VJ],
            yJ = mJ * VJ;
          nJ[vJ++] = UJ[yJ + QJ], nJ[vJ++] = -(KJ + 1), nJ[vJ++] = UJ[yJ + EJ], nJ[vJ++] = KJ
        }
        for (VJ = DJ; VJ < sJ; ++VJ) {
          KJ = rJ[VJ] + XJ;
          var SJ = mJ * VJ;
          nJ[vJ++] = xJ[SJ + QJ], nJ[vJ++] = -KJ, nJ[vJ++] = xJ[SJ + EJ], nJ[vJ++] = KJ
        }
        var IJ = vJ >>> 1;
        eJ(nJ, IJ);
        var MJ = 0,
          bJ = 0;
        for (VJ = 0; VJ < IJ; ++VJ) {
          var wJ = 0 | nJ[2 * VJ + 1];
          if (wJ >= XJ) GJ(YJ, hJ, bJ--, wJ = wJ - XJ | 0);
          else if (wJ >= 0) GJ(qJ, jJ, MJ--, wJ);
          else if (wJ <= -XJ) {
            wJ = -wJ - XJ | 0;
            for (var WJ = 0; WJ < MJ; ++WJ) {
              if (void 0 !== (gJ = cJ(qJ[WJ], wJ))) return gJ
            }
            fJ(YJ, hJ, bJ++, wJ)
          } else {
            wJ = -wJ - 1 | 0;
            for (WJ = 0; WJ < bJ; ++WJ) {
              var gJ;
              if (void 0 !== (gJ = cJ(wJ, YJ[WJ]))) return gJ
            }
            fJ(qJ, jJ, MJ++, wJ)
          }
        }
      },
      sweepComplete: function(JJ, cJ, ZJ, FJ, UJ, XJ, AJ, xJ, rJ, vJ) {
        for (var mJ = 0, QJ = 2 * JJ, EJ = JJ - 1, VJ = QJ - 1, KJ = ZJ; KJ < FJ; ++KJ) {
          var yJ = XJ[KJ] + 1 << 1,
            SJ = QJ * KJ;
          nJ[mJ++] = UJ[SJ + EJ], nJ[mJ++] = -yJ, nJ[mJ++] = UJ[SJ + VJ], nJ[mJ++] = yJ
        }
        for (KJ = AJ; KJ < xJ; ++KJ) {
          yJ = vJ[KJ] + 1 << 1;
          var IJ = QJ * KJ;
          nJ[mJ++] = rJ[IJ + EJ], nJ[mJ++] = 1 | -yJ, nJ[mJ++] = rJ[IJ + VJ], nJ[mJ++] = 1 | yJ
        }
        var MJ = mJ >>> 1;
        eJ(nJ, MJ);
        var bJ = 0,
          wJ = 0,
          WJ = 0;
        for (KJ = 0; KJ < MJ; ++KJ) {
          var gJ = 0 | nJ[2 * KJ + 1],
            HJ = 1 & gJ;
          if (KJ < MJ - 1 && gJ >> 1 === nJ[2 * KJ + 3] >> 1 && (HJ = 2, KJ += 1), gJ < 0) {
            for (var PJ = -(gJ >> 1) - 1, kJ = 0; kJ < WJ; ++kJ) {
              if (void 0 !== (pJ = cJ(DJ[kJ], PJ))) return pJ
            }
            if (0 !== HJ)
              for (kJ = 0; kJ < bJ; ++kJ) {
                if (void 0 !== (pJ = cJ(qJ[kJ], PJ))) return pJ
              }
            if (1 !== HJ)
              for (kJ = 0; kJ < wJ; ++kJ) {
                var pJ;
                if (void 0 !== (pJ = cJ(YJ[kJ], PJ))) return pJ
              }
            0 === HJ ? fJ(qJ, jJ, bJ++, PJ) : 1 === HJ ? fJ(YJ, hJ, wJ++, PJ) : 2 === HJ && fJ(DJ, sJ, WJ++, PJ)
          } else {
            PJ = (gJ >> 1) - 1;
            0 === HJ ? GJ(qJ, jJ, bJ--, PJ) : 1 === HJ ? GJ(YJ, hJ, wJ--, PJ) : 2 === HJ && GJ(DJ, sJ, WJ--, PJ)
          }
        }
      },
      scanBipartite: function(JJ, cJ, ZJ, FJ, UJ, AJ, YJ, hJ, DJ, sJ, xJ, rJ) {
        var vJ = 0,
          mJ = 2 * JJ,
          QJ = cJ,
          EJ = cJ + JJ,
          VJ = 1,
          KJ = 1;
        FJ ? KJ = XJ : VJ = XJ;
        for (var yJ = UJ; yJ < AJ; ++yJ) {
          var SJ = yJ + VJ,
            IJ = mJ * yJ;
          nJ[vJ++] = YJ[IJ + QJ], nJ[vJ++] = -SJ, nJ[vJ++] = YJ[IJ + EJ], nJ[vJ++] = SJ
        }
        for (yJ = DJ; yJ < sJ; ++yJ) {
          SJ = yJ + KJ;
          var MJ = mJ * yJ;
          nJ[vJ++] = xJ[MJ + QJ], nJ[vJ++] = -SJ
        }
        var bJ = vJ >>> 1;
        eJ(nJ, bJ);
        var wJ = 0;
        for (yJ = 0; yJ < bJ; ++yJ) {
          var WJ = 0 | nJ[2 * yJ + 1];
          if (WJ < 0) {
            var gJ = !1;
            if ((SJ = -WJ) >= XJ ? (gJ = !FJ, SJ -= XJ) : (gJ = !!FJ, SJ -= 1), gJ) fJ(qJ, jJ, wJ++, SJ);
            else {
              var HJ = rJ[SJ],
                PJ = mJ * SJ,
                kJ = xJ[PJ + cJ + 1],
                pJ = xJ[PJ + cJ + 1 + JJ];
              JJ: for (var dJ = 0; dJ < wJ; ++dJ) {
                var zJ = qJ[dJ],
                  NJ = mJ * zJ;
                if (!(pJ < YJ[NJ + cJ + 1] || YJ[NJ + cJ + 1 + JJ] < kJ)) {
                  for (var OJ = cJ + 2; OJ < JJ; ++OJ)
                    if (xJ[PJ + OJ + JJ] < YJ[NJ + OJ] || YJ[NJ + OJ + JJ] < xJ[PJ + OJ]) continue JJ;
                  var TJ, CJ = hJ[zJ];
                  if (void 0 !== (TJ = FJ ? ZJ(HJ, CJ) : ZJ(CJ, HJ))) return TJ
                }
              }
            }
          } else GJ(qJ, jJ, wJ--, WJ - VJ)
        }
      },
      scanComplete: function(JJ, cJ, ZJ, FJ, UJ, AJ, jJ, YJ, hJ, DJ, sJ) {
        for (var GJ = 0, fJ = 2 * JJ, xJ = cJ, rJ = cJ + JJ, vJ = FJ; vJ < UJ; ++vJ) {
          var mJ = vJ + XJ,
            QJ = fJ * vJ;
          nJ[GJ++] = AJ[QJ + xJ], nJ[GJ++] = -mJ, nJ[GJ++] = AJ[QJ + rJ], nJ[GJ++] = mJ
        }
        for (vJ = YJ; vJ < hJ; ++vJ) {
          mJ = vJ + 1;
          var EJ = fJ * vJ;
          nJ[GJ++] = DJ[EJ + xJ], nJ[GJ++] = -mJ
        }
        var VJ = GJ >>> 1;
        eJ(nJ, VJ);
        var KJ = 0;
        for (vJ = 0; vJ < VJ; ++vJ) {
          var yJ = 0 | nJ[2 * vJ + 1];
          if (yJ < 0) {
            if ((mJ = -yJ) >= XJ) qJ[KJ++] = mJ - XJ;
            else {
              var SJ = sJ[mJ -= 1],
                IJ = fJ * mJ,
                MJ = DJ[IJ + cJ + 1],
                bJ = DJ[IJ + cJ + 1 + JJ];
              JJ: for (var wJ = 0; wJ < KJ; ++wJ) {
                var WJ = qJ[wJ],
                  gJ = jJ[WJ];
                if (gJ === SJ) break;
                var HJ = fJ * WJ;
                if (!(bJ < AJ[HJ + cJ + 1] || AJ[HJ + cJ + 1 + JJ] < MJ)) {
                  for (var PJ = cJ + 2; PJ < JJ; ++PJ)
                    if (DJ[IJ + PJ + JJ] < AJ[HJ + PJ] || AJ[HJ + PJ + JJ] < DJ[IJ + PJ]) continue JJ;
                  var kJ = ZJ(gJ, SJ);
                  if (void 0 !== kJ) return kJ
                }
              }
            }
          } else {
            for (mJ = yJ - XJ, wJ = KJ - 1; wJ >= 0; --wJ)
              if (qJ[wJ] === mJ) {
                for (PJ = wJ + 1; PJ < KJ; ++PJ) qJ[PJ - 1] = qJ[PJ];
                break
              }-- KJ
          }
        }
      }
    };
    var FJ = ZJ(37267),
      UJ = ZJ(37270),
      eJ = ZJ(37301),
      XJ = 1 << 28,
      AJ = 1024,
      qJ = FJ.mallocInt32(AJ),
      jJ = FJ.mallocInt32(AJ),
      YJ = FJ.mallocInt32(AJ),
      hJ = FJ.mallocInt32(AJ),
      DJ = FJ.mallocInt32(AJ),
      sJ = FJ.mallocInt32(AJ),
      nJ = FJ.mallocDouble(8192);

    function GJ(JJ, cJ, ZJ, FJ) {
      var UJ = cJ[FJ],
        eJ = JJ[ZJ - 1];
      JJ[UJ] = eJ, cJ[eJ] = UJ
    }

    function fJ(JJ, cJ, ZJ, FJ) {
      JJ[ZJ] = FJ, cJ[FJ] = ZJ
    }
  },
  37278: JJ => {
    function cJ(JJ, ZJ, FJ) {
      var UJ = 0 | JJ[FJ];
      if (UJ <= 0) return [];
      var eJ, XJ = new Array(UJ);
      if (FJ === JJ.length - 1)
        for (eJ = 0; eJ < UJ; ++eJ) XJ[eJ] = ZJ;
      else
        for (eJ = 0; eJ < UJ; ++eJ) XJ[eJ] = cJ(JJ, ZJ, FJ + 1);
      return XJ
    }
    JJ.exports = function(JJ, ZJ) {
      switch ("undefined" === typeof ZJ && (ZJ = 0), typeof JJ) {
        case "number":
          if (JJ > 0) return function(JJ, cJ) {
            var ZJ, FJ;
            for (ZJ = new Array(JJ), FJ = 0; FJ < JJ; ++FJ) ZJ[FJ] = cJ;
            return ZJ
          }(0 | JJ, ZJ);
          break;
        case "object":
          if ("number" === typeof JJ.length) return cJ(JJ, ZJ, 0)
      }
      return []
    }
  },
  37223: (JJ, cJ, ZJ) => {
    JJ.exports = function() {
      var JJ = this;
      this.components = {}, this.comps = this.components;
      var cJ = this.components,
        ZJ = 1,
        UJ = {},
        eJ = [],
        XJ = [],
        AJ = {
          timeout: !1,
          removals: [],
          multiComps: []
        };

      function qJ(JJ, ZJ) {
        var FJ = cJ[ZJ],
          eJ = UJ[ZJ],
          XJ = eJ.hash[JJ];
        XJ && (eJ.remove(JJ), FJ.jK && (FJ.multi ? (XJ.forEach((cJ => {
          cJ && FJ.jK(JJ, cJ)
        })), XJ.length = 0) : FJ.jK(JJ, XJ)), AJ.removals.push(eJ), jJ())
      }

      function jJ() {
        AJ.timeout || (AJ.timeout = !0, setTimeout(YJ, 1))
      }

      function YJ() {
        AJ.timeout = !1, hJ()
      }

      function hJ() {
        AJ.multiComps.length && function(JJ) {
          for (var cJ = 0; cJ < JJ.length; cJ++) {
            var {
              entID: ZJ,
              data: FJ
            } = JJ[cJ], UJ = FJ.hash[ZJ];
            if (UJ) {
              for (var eJ = 0; eJ < UJ.length; eJ++) UJ[eJ] || (UJ.splice(eJ, 1), eJ--);
              0 === UJ.length && (FJ.remove(ZJ), AJ.removals.push(FJ))
            }
          }
          JJ.length = 0
        }(AJ.multiComps), AJ.removals.length && function(JJ) {
          for (var cJ = 0; cJ < JJ.length; cJ++) {
            JJ[cJ].flush()
          }
          JJ.length = 0
        }(AJ.removals)
      }
      this.VG = UJ, this._systems = eJ, this._renderSystems = XJ, this.eC = function(cJ) {
        var FJ = ZJ++;
        return Array.isArray(cJ) && cJ.forEach((cJ => JJ.xI(FJ, cJ))), FJ
      }, this.deleteEntity = function(cJ) {
        return Object.keys(UJ).forEach((JJ => {
          UJ[JJ].hash[cJ] && qJ(cJ, JJ)
        })), JJ
      }, this.McJ = function(JJ) {
        if (!JJ) throw new Error("Missing component definition");
        var ZJ = JJ.name;
        if (!ZJ) throw new Error("Component definition must have a name property.");
        if ("string" !== typeof ZJ) throw new Error("Component name must be a string.");
        if ("" === ZJ) throw new Error("Component name must be a non-empty string.");
        if (UJ[ZJ]) throw new Error(`Component ${ZJ} already exists.`);
        var AJ = {};
        return AJ.name = ZJ, AJ.multi = !!JJ.multi, AJ.order = isNaN(JJ.order) ? 99 : JJ.order, AJ.stateConstructor = JJ.stateConstructor || null, AJ.state = JJ.state || {}, AJ.XE = JJ.XE || null, AJ.jK = JJ.jK || null, AJ.system = JJ.system || null, AJ.sE = JJ.sE || null, cJ[ZJ] = AJ, UJ[ZJ] = new FJ, UJ[ZJ]._pendingMultiCleanup = !1, UJ[ZJ]._multiCleanupIDs = AJ.multi ? [] : null, AJ.system && (eJ.push(ZJ), eJ.sort(((JJ, ZJ) => cJ[JJ].order - cJ[ZJ].order))), AJ.sE && (XJ.push(ZJ), XJ.sort(((JJ, ZJ) => cJ[JJ].order - cJ[ZJ].order))), ZJ
      }, this.overwriteComponent = function(JJ, ZJ) {
        var FJ = cJ[JJ];
        if (!FJ) throw new Error(`Unknown component: ${JJ}`);
        if (!ZJ) throw new Error("Missing component definition");
        if (FJ.name !== ZJ.name) throw new Error("Overwriting component must use the same name property.");
        var AJ = {};
        AJ.name = JJ, AJ.multi = !!ZJ.multi, AJ.order = isNaN(ZJ.order) ? 99 : ZJ.order, AJ.state = ZJ.state || {}, AJ.XE = ZJ.XE || null, AJ.jK = ZJ.jK || null, AJ.system = ZJ.system || null, AJ.sE = ZJ.sE || null, cJ[JJ] = AJ, UJ[JJ]._pendingMultiCleanup = !1, UJ[JJ]._multiCleanupIDs = AJ.multi ? [] : null;
        var qJ = eJ.indexOf(JJ);
        AJ.system && qJ < 0 && eJ.push(JJ), !AJ.system && qJ >= 0 && eJ.splice(qJ, 1), eJ.sort(((JJ, ZJ) => cJ[JJ].order - cJ[ZJ].order));
        var jJ = XJ.indexOf(JJ);
        AJ.sE && jJ < 0 && XJ.push(JJ), !AJ.sE && jJ >= 0 && XJ.splice(jJ, 1), XJ.sort(((JJ, ZJ) => cJ[JJ].order - cJ[ZJ].order));
        var YJ = AJ.state;
        return this.ZI(JJ).forEach((JJ => {
          for (var cJ in YJ) cJ in JJ || (JJ[cJ] = YJ[cJ]);
          AJ.XE && AJ.XE(JJ.qI, JJ)
        })), JJ
      }, this.deleteComponent = function(ZJ) {
        var FJ = UJ[ZJ];
        if (!FJ) throw new Error(`Unknown component: ${ZJ}`);
        FJ.flush(), FJ.list.forEach((JJ => {
          JJ && qJ(JJ.qI || JJ[0].qI, ZJ)
        }));
        var AJ = eJ.indexOf(ZJ),
          jJ = XJ.indexOf(ZJ);
        return AJ > -1 && eJ.splice(AJ, 1), jJ > -1 && XJ.splice(jJ, 1), UJ[ZJ].dispose(), delete UJ[ZJ], delete cJ[ZJ], JJ
      }, this.xI = function(JJ, ZJ, FJ) {
        var eJ, XJ = cJ[ZJ],
          AJ = UJ[ZJ];
        if (!AJ) throw new Error(`Unknown component: ${ZJ}.`);
        if (AJ.hash[JJ] && !XJ.multi) throw new Error(`Entity ${JJ} already has component: ${ZJ}.`);
        if (XJ.stateConstructor) {
          if (!(eJ = new XJ.stateConstructor).hasOwnProperty("qI")) throw new Error(`Component ${XJ.name} stateConstructor type does not have property __id`);
          Object.assign(eJ, XJ.state, FJ)
        } else eJ = {
          qI: JJ,
          ...XJ.state,
          ...FJ
        };
        if (eJ.qI = JJ, XJ.multi) {
          var qJ = AJ.hash[JJ];
          qJ || (qJ = [], AJ.add(JJ, qJ)), qJ.push(eJ)
        } else AJ.add(JJ, eJ);
        return XJ.XE && XJ.XE(JJ, eJ), this
      }, this.KJJ = function(JJ, cJ) {
        var ZJ = UJ[cJ];
        if (!ZJ) throw new Error(`Unknown component: ${cJ}.`);
        return !!ZJ.hash[JJ]
      }, this.vI = function(cJ, ZJ) {
        if (!UJ[ZJ]) throw new Error(`Unknown component: ${ZJ}.`);
        return qJ(cJ, ZJ), JJ
      }, this.getState = function(JJ, cJ) {
        var ZJ = UJ[cJ];
        if (!ZJ) throw new Error(`Unknown component: ${cJ}.`);
        return ZJ.hash[JJ]
      }, this.ZI = function(JJ) {
        var cJ = UJ[JJ];
        if (!cJ) throw new Error(`Unknown component: ${JJ}.`);
        return hJ(), cJ.list
      }, this.qcJ = function(JJ) {
        if (!UJ[JJ]) throw new Error(`Unknown component: ${JJ}.`);
        var cJ = UJ[JJ].hash;
        return JJ => cJ[JJ]
      }, this.ncJ = function(JJ) {
        if (!UJ[JJ]) throw new Error(`Unknown component: ${JJ}.`);
        var cJ = UJ[JJ].hash;
        return JJ => !!cJ[JJ]
      }, this.Hh = function(ZJ) {
        hJ();
        for (var FJ = 0; FJ < eJ.length; FJ++) {
          var XJ = eJ[FJ],
            AJ = cJ[XJ],
            qJ = UJ[XJ];
          AJ.system(ZJ, qJ.list), hJ()
        }
        return JJ
      }, this.render = function(ZJ) {
        hJ();
        for (var FJ = 0; FJ < XJ.length; FJ++) {
          var eJ = XJ[FJ],
            AJ = cJ[eJ],
            qJ = UJ[eJ];
          AJ.sE(ZJ, qJ.list), hJ()
        }
        return JJ
      }, this.removeMultiComponent = function(ZJ, FJ, eJ) {
        var XJ = cJ[FJ],
          qJ = UJ[FJ];
        if (!qJ) throw new Error(`Unknown component: ${FJ}.`);
        if (!XJ.multi) throw new Error("removeMultiComponent called on non-multi component");
        return function(JJ, cJ, ZJ, FJ) {
          var UJ = ZJ.hash[JJ];
          if (UJ) {
            var eJ = UJ[FJ];
            eJ && (UJ[FJ] = null, cJ.jK && cJ.jK(JJ, eJ), AJ.multiComps.push({
              entID: JJ,
              data: ZJ
            }), jJ())
          }
        }(ZJ, XJ, qJ, eJ), JJ
      }
    };
    var FJ = ZJ(37227)
  },
  37227: JJ => {
    function cJ(JJ, cJ) {
      var ZJ = JJ._map[cJ];
      if (delete JJ.hash[cJ], delete JJ._map[cJ], ZJ === JJ.list.length - 1) JJ.list.pop(), JJ._idList.pop();
      else {
        var FJ = JJ.list.pop();
        JJ.list[ZJ] = FJ;
        var UJ = JJ._idList.pop();
        JJ._idList[ZJ] = UJ, JJ._map[UJ] = ZJ
      }
    }
    JJ.exports = class {
      constructor() {
        this.list = [], this.hash = {}, this._map = {}, this._idList = [], this._pendingRemovals = []
      }
      add(JJ, cJ) {
        if ("number" === typeof this._map[JJ]) {
          var ZJ = this._map[JJ];
          this.hash[JJ] = cJ, this.list[ZJ] = cJ, this._idList[ZJ] = JJ
        } else this._map[JJ] = this.list.length, this.hash[JJ] = cJ, this.list.push(cJ), this._idList.push(JJ)
      }
      remove(JJ) {
        var cJ = this._map[JJ];
        this.hash[JJ] = null, this.list[cJ] = null, this._pendingRemovals.push(JJ)
      }
      dispose() {
        this.list = null, this.hash = null, this._map = null, this._idList = null, this._pendingRemovals.length = 0
      }
      flush() {
        for (var JJ = 0; JJ < this._pendingRemovals.length; JJ++) {
          var ZJ = this._pendingRemovals[JJ];
          null === this.hash[ZJ] && cJ(this, ZJ)
        }
        this._pendingRemovals.length = 0
      }
    }
  },
  36698: JJ => {
    JJ.exports = function(JJ) {
      for (var cJ = new Array(JJ), ZJ = 0; ZJ < JJ; ++ZJ) cJ[ZJ] = ZJ;
      return cJ
    }
  },
  36700: JJ => {
    function cJ(JJ) {
      return !!JJ.constructor && "function" === typeof JJ.constructor.isBuffer && JJ.constructor.isBuffer(JJ)
    }
    JJ.exports = function(JJ) {
      return null != JJ && (cJ(JJ) || function(JJ) {
        return "function" === typeof JJ.readFloatLE && "function" === typeof JJ.slice && cJ(JJ.slice(0, 0))
      }(JJ) || !!JJ._isBuffer)
    }
  },
  37017: (JJ, cJ, ZJ) => {
    JJ = ZJ.nmd(JJ);
    var FJ = "__lodash_hash_undefined__",
      UJ = 9007199254740991,
      eJ = "[object Arguments]",
      XJ = "[object Boolean]",
      AJ = "[object Date]",
      qJ = "[object Function]",
      jJ = "[object GeneratorFunction]",
      YJ = "[object Map]",
      hJ = "[object Number]",
      DJ = "[object Object]",
      sJ = "[object Promise]",
      nJ = "[object RegExp]",
      GJ = "[object Set]",
      fJ = "[object String]",
      xJ = "[object Symbol]",
      rJ = "[object WeakMap]",
      vJ = "[object ArrayBuffer]",
      mJ = "[object DataView]",
      QJ = "[object Float32Array]",
      EJ = "[object Float64Array]",
      VJ = "[object Int8Array]",
      KJ = "[object Int16Array]",
      yJ = "[object Int32Array]",
      SJ = "[object Uint8Array]",
      IJ = "[object Uint8ClampedArray]",
      MJ = "[object Uint16Array]",
      bJ = "[object Uint32Array]",
      wJ = /\w*$/,
      WJ = /^\[object .+?Constructor\]$/,
      gJ = /^(?:0|[1-9]\d*)$/,
      HJ = {};
    HJ[eJ] = HJ["[object Array]"] = HJ[vJ] = HJ[mJ] = HJ[XJ] = HJ[AJ] = HJ[QJ] = HJ[EJ] = HJ[VJ] = HJ[KJ] = HJ[yJ] = HJ[YJ] = HJ[hJ] = HJ[DJ] = HJ[nJ] = HJ[GJ] = HJ[fJ] = HJ[xJ] = HJ[SJ] = HJ[IJ] = HJ[MJ] = HJ[bJ] = !0, HJ["[object Error]"] = HJ[qJ] = HJ[rJ] = !1;
    var PJ = "object" == typeof ZJ.g && ZJ.g && ZJ.g.Object === Object && ZJ.g,
      kJ = "object" == typeof self && self && self.Object === Object && self,
      pJ = PJ || kJ || Function("return this")(),
      dJ = cJ && !cJ.nodeType && cJ,
      zJ = dJ && JJ && !JJ.nodeType && JJ,
      NJ = zJ && zJ.exports === dJ;

    function OJ(JJ, cJ) {
      return JJ.set(cJ[0], cJ[1]), JJ
    }

    function TJ(JJ, cJ) {
      return JJ.add(cJ), JJ
    }

    function CJ(JJ, cJ, ZJ, FJ) {
      var UJ = -1,
        eJ = JJ ? JJ.length : 0;
      for (FJ && eJ && (ZJ = JJ[++UJ]); ++UJ < eJ;) ZJ = cJ(ZJ, JJ[UJ], UJ, JJ);
      return ZJ
    }

    function uJ(JJ) {
      var cJ = !1;
      if (null != JJ && "function" != typeof JJ.toString) try {
        cJ = !!(JJ + "")
      } catch (ZJ) {}
      return cJ
    }

    function iJ(JJ) {
      var cJ = -1,
        ZJ = Array(JJ.size);
      return JJ.forEach((function(JJ, FJ) {
        ZJ[++cJ] = [FJ, JJ]
      })), ZJ
    }

    function RJ(JJ, cJ) {
      return function(ZJ) {
        return JJ(cJ(ZJ))
      }
    }

    function LJ(JJ) {
      var cJ = -1,
        ZJ = Array(JJ.size);
      return JJ.forEach((function(JJ) {
        ZJ[++cJ] = JJ
      })), ZJ
    }
    var aJ = Array.prototype,
      BJ = Function.prototype,
      tJ = Object.prototype,
      oJ = pJ["__core-js_shared__"],
      lJ = function() {
        var JJ = /[^.]+$/.exec(oJ && oJ.keys && oJ.keys.IE_PROTO || "");
        return JJ ? "Symbol(src)_1." + JJ : ""
      }(),
      Jc = BJ.toString,
      cc = tJ.hasOwnProperty,
      Zc = tJ.toString,
      Fc = RegExp("^" + Jc.call(cc).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
      Uc = NJ ? pJ.fn : void 0,
      ec = pJ.Symbol,
      Xc = pJ.Uint8Array,
      Ac = RJ(Object.getPrototypeOf, Object),
      qc = Object.create,
      jc = tJ.propertyIsEnumerable,
      Yc = aJ.splice,
      hc = Object.getOwnPropertySymbols,
      Dc = Uc ? Uc.isBuffer : void 0,
      sc = RJ(Object.keys, Object),
      nc = Nc(pJ, "DataView"),
      Gc = Nc(pJ, "Map"),
      fc = Nc(pJ, "Promise"),
      xc = Nc(pJ, "Set"),
      rc = Nc(pJ, "WeakMap"),
      vc = Nc(Object, "create"),
      mc = ic(nc),
      Qc = ic(Gc),
      Ec = ic(fc),
      Vc = ic(xc),
      Kc = ic(rc),
      yc = ec ? ec.prototype : void 0,
      Sc = yc ? yc.valueOf : void 0;

    function Ic(JJ) {
      var cJ = -1,
        ZJ = JJ ? JJ.length : 0;
      for (this.clear(); ++cJ < ZJ;) {
        var FJ = JJ[cJ];
        this.set(FJ[0], FJ[1])
      }
    }

    function Mc(JJ) {
      var cJ = -1,
        ZJ = JJ ? JJ.length : 0;
      for (this.clear(); ++cJ < ZJ;) {
        var FJ = JJ[cJ];
        this.set(FJ[0], FJ[1])
      }
    }

    function bc(JJ) {
      var cJ = -1,
        ZJ = JJ ? JJ.length : 0;
      for (this.clear(); ++cJ < ZJ;) {
        var FJ = JJ[cJ];
        this.set(FJ[0], FJ[1])
      }
    }

    function wc(JJ) {
      this.__data__ = new Mc(JJ)
    }

    function Wc(JJ, cJ) {
      var ZJ = Lc(JJ) || function(JJ) {
          return function(JJ) {
            return function(JJ) {
              return !!JJ && "object" == typeof JJ
            }(JJ) && ac(JJ)
          }(JJ) && cc.call(JJ, "callee") && (!jc.call(JJ, "callee") || Zc.call(JJ) == eJ)
        }(JJ) ? function(JJ, cJ) {
          for (var ZJ = -1, FJ = Array(JJ); ++ZJ < JJ;) FJ[ZJ] = cJ(ZJ);
          return FJ
        }(JJ.length, String) : [],
        FJ = ZJ.length,
        UJ = !!FJ;
      for (var XJ in JJ) !cJ && !cc.call(JJ, XJ) || UJ && ("length" == XJ || Cc(XJ, FJ)) || ZJ.push(XJ);
      return ZJ
    }

    function gc(JJ, cJ, ZJ) {
      var FJ = JJ[cJ];
      cc.call(JJ, cJ) && Rc(FJ, ZJ) && (void 0 !== ZJ || cJ in JJ) || (JJ[cJ] = ZJ)
    }

    function Hc(JJ, cJ) {
      for (var ZJ = JJ.length; ZJ--;)
        if (Rc(JJ[ZJ][0], cJ)) return ZJ;
      return -1
    }

    function Pc(JJ, cJ, ZJ, FJ, UJ, sJ, rJ) {
      var WJ;
      if (FJ && (WJ = sJ ? FJ(JJ, UJ, sJ, rJ) : FJ(JJ)), void 0 !== WJ) return WJ;
      if (!oc(JJ)) return JJ;
      var gJ = Lc(JJ);
      if (gJ) {
        if (WJ = function(JJ) {
            var cJ = JJ.length,
              ZJ = JJ.constructor(cJ);
            cJ && "string" == typeof JJ[0] && cc.call(JJ, "index") && (ZJ.index = JJ.index, ZJ.input = JJ.input);
            return ZJ
          }(JJ), !cJ) return function(JJ, cJ) {
          var ZJ = -1,
            FJ = JJ.length;
          cJ || (cJ = Array(FJ));
          for (; ++ZJ < FJ;) cJ[ZJ] = JJ[ZJ];
          return cJ
        }(JJ, WJ)
      } else {
        var PJ = Tc(JJ),
          kJ = PJ == qJ || PJ == jJ;
        if (Bc(JJ)) return function(JJ, cJ) {
          if (cJ) return JJ.slice();
          var ZJ = new JJ.constructor(JJ.length);
          return JJ.copy(ZJ), ZJ
        }(JJ, cJ);
        if (PJ == DJ || PJ == eJ || kJ && !sJ) {
          if (uJ(JJ)) return sJ ? JJ : {};
          if (WJ = function(JJ) {
              return "function" != typeof JJ.constructor || uc(JJ) ? {} : (cJ = Ac(JJ), oc(cJ) ? qc(cJ) : {});
              var cJ
            }(kJ ? {} : JJ), !cJ) return function(JJ, cJ) {
            return dc(JJ, Oc(JJ), cJ)
          }(JJ, function(JJ, cJ) {
            return JJ && dc(cJ, lc(cJ), JJ)
          }(WJ, JJ))
        } else {
          if (!HJ[PJ]) return sJ ? JJ : {};
          WJ = function(JJ, cJ, ZJ, FJ) {
            var UJ = JJ.constructor;
            switch (cJ) {
              case vJ:
                return pc(JJ);
              case XJ:
              case AJ:
                return new UJ(+JJ);
              case mJ:
                return function(JJ, cJ) {
                  var ZJ = cJ ? pc(JJ.buffer) : JJ.buffer;
                  return new JJ.constructor(ZJ, JJ.byteOffset, JJ.byteLength)
                }(JJ, FJ);
              case QJ:
              case EJ:
              case VJ:
              case KJ:
              case yJ:
              case SJ:
              case IJ:
              case MJ:
              case bJ:
                return function(JJ, cJ) {
                  var ZJ = cJ ? pc(JJ.buffer) : JJ.buffer;
                  return new JJ.constructor(ZJ, JJ.byteOffset, JJ.length)
                }(JJ, FJ);
              case YJ:
                return function(JJ, cJ, ZJ) {
                  var FJ = cJ ? ZJ(iJ(JJ), !0) : iJ(JJ);
                  return CJ(FJ, OJ, new JJ.constructor)
                }(JJ, FJ, ZJ);
              case hJ:
              case fJ:
                return new UJ(JJ);
              case nJ:
                return function(JJ) {
                  var cJ = new JJ.constructor(JJ.source, wJ.exec(JJ));
                  return cJ.lastIndex = JJ.lastIndex, cJ
                }(JJ);
              case GJ:
                return function(JJ, cJ, ZJ) {
                  var FJ = cJ ? ZJ(LJ(JJ), !0) : LJ(JJ);
                  return CJ(FJ, TJ, new JJ.constructor)
                }(JJ, FJ, ZJ);
              case xJ:
                return eJ = JJ, Sc ? Object(Sc.call(eJ)) : {}
            }
            var eJ
          }(JJ, PJ, Pc, cJ)
        }
      }
      rJ || (rJ = new wc);
      var pJ = rJ.get(JJ);
      if (pJ) return pJ;
      if (rJ.set(JJ, WJ), !gJ) var dJ = ZJ ? function(JJ) {
        return function(JJ, cJ, ZJ) {
          var FJ = cJ(JJ);
          return Lc(JJ) ? FJ : function(JJ, cJ) {
            for (var ZJ = -1, FJ = cJ.length, UJ = JJ.length; ++ZJ < FJ;) JJ[UJ + ZJ] = cJ[ZJ];
            return JJ
          }(FJ, ZJ(JJ))
        }(JJ, lc, Oc)
      }(JJ) : lc(JJ);
      return function(JJ, cJ) {
        for (var ZJ = -1, FJ = JJ ? JJ.length : 0; ++ZJ < FJ && !1 !== cJ(JJ[ZJ], ZJ, JJ););
      }(dJ || JJ, (function(UJ, eJ) {
        dJ && (UJ = JJ[eJ = UJ]), gc(WJ, eJ, Pc(UJ, cJ, ZJ, FJ, eJ, JJ, rJ))
      })), WJ
    }

    function kc(JJ) {
      return !(!oc(JJ) || (cJ = JJ, lJ && lJ in cJ)) && (tc(JJ) || uJ(JJ) ? Fc : WJ).test(ic(JJ));
      var cJ
    }

    function pc(JJ) {
      var cJ = new JJ.constructor(JJ.byteLength);
      return new Xc(cJ).set(new Xc(JJ)), cJ
    }

    function dc(JJ, cJ, ZJ, FJ) {
      ZJ || (ZJ = {});
      for (var UJ = -1, eJ = cJ.length; ++UJ < eJ;) {
        var XJ = cJ[UJ],
          AJ = FJ ? FJ(ZJ[XJ], JJ[XJ], XJ, ZJ, JJ) : void 0;
        gc(ZJ, XJ, void 0 === AJ ? JJ[XJ] : AJ)
      }
      return ZJ
    }

    function zc(JJ, cJ) {
      var ZJ = JJ.__data__;
      return function(JJ) {
        var cJ = typeof JJ;
        return "string" == cJ || "number" == cJ || "symbol" == cJ || "boolean" == cJ ? "__proto__" !== JJ : null === JJ
      }(cJ) ? ZJ["string" == typeof cJ ? "string" : "hash"] : ZJ.map
    }

    function Nc(JJ, cJ) {
      var ZJ = function(JJ, cJ) {
        return null == JJ ? void 0 : JJ[cJ]
      }(JJ, cJ);
      return kc(ZJ) ? ZJ : void 0
    }
    Ic.prototype.clear = function() {
      this.__data__ = vc ? vc(null) : {}
    }, Ic.prototype.delete = function(JJ) {
      return this.has(JJ) && delete this.__data__[JJ]
    }, Ic.prototype.get = function(JJ) {
      var cJ = this.__data__;
      if (vc) {
        var ZJ = cJ[JJ];
        return ZJ === FJ ? void 0 : ZJ
      }
      return cc.call(cJ, JJ) ? cJ[JJ] : void 0
    }, Ic.prototype.has = function(JJ) {
      var cJ = this.__data__;
      return vc ? void 0 !== cJ[JJ] : cc.call(cJ, JJ)
    }, Ic.prototype.set = function(JJ, cJ) {
      return this.__data__[JJ] = vc && void 0 === cJ ? FJ : cJ, this
    }, Mc.prototype.clear = function() {
      this.__data__ = []
    }, Mc.prototype.delete = function(JJ) {
      var cJ = this.__data__,
        ZJ = Hc(cJ, JJ);
      return !(ZJ < 0) && (ZJ == cJ.length - 1 ? cJ.pop() : Yc.call(cJ, ZJ, 1), !0)
    }, Mc.prototype.get = function(JJ) {
      var cJ = this.__data__,
        ZJ = Hc(cJ, JJ);
      return ZJ < 0 ? void 0 : cJ[ZJ][1]
    }, Mc.prototype.has = function(JJ) {
      return Hc(this.__data__, JJ) > -1
    }, Mc.prototype.set = function(JJ, cJ) {
      var ZJ = this.__data__,
        FJ = Hc(ZJ, JJ);
      return FJ < 0 ? ZJ.push([JJ, cJ]) : ZJ[FJ][1] = cJ, this
    }, bc.prototype.clear = function() {
      this.__data__ = {
        hash: new Ic,
        map: new(Gc || Mc),
        string: new Ic
      }
    }, bc.prototype.delete = function(JJ) {
      return zc(this, JJ).delete(JJ)
    }, bc.prototype.get = function(JJ) {
      return zc(this, JJ).get(JJ)
    }, bc.prototype.has = function(JJ) {
      return zc(this, JJ).has(JJ)
    }, bc.prototype.set = function(JJ, cJ) {
      return zc(this, JJ).set(JJ, cJ), this
    }, wc.prototype.clear = function() {
      this.__data__ = new Mc
    }, wc.prototype.delete = function(JJ) {
      return this.__data__.delete(JJ)
    }, wc.prototype.get = function(JJ) {
      return this.__data__.get(JJ)
    }, wc.prototype.has = function(JJ) {
      return this.__data__.has(JJ)
    }, wc.prototype.set = function(JJ, cJ) {
      var ZJ = this.__data__;
      if (ZJ instanceof Mc) {
        var FJ = ZJ.__data__;
        if (!Gc || FJ.length < 199) return FJ.push([JJ, cJ]), this;
        ZJ = this.__data__ = new bc(FJ)
      }
      return ZJ.set(JJ, cJ), this
    };
    var Oc = hc ? RJ(hc, Object) : function() {
        return []
      },
      Tc = function(JJ) {
        return Zc.call(JJ)
      };

    function Cc(JJ, cJ) {
      return !!(cJ = null == cJ ? UJ : cJ) && ("number" == typeof JJ || gJ.test(JJ)) && JJ > -1 && JJ % 1 == 0 && JJ < cJ
    }

    function uc(JJ) {
      var cJ = JJ && JJ.constructor;
      return JJ === ("function" == typeof cJ && cJ.prototype || tJ)
    }

    function ic(JJ) {
      if (null != JJ) {
        try {
          return Jc.call(JJ)
        } catch (cJ) {}
        try {
          return JJ + ""
        } catch (cJ) {}
      }
      return ""
    }

    function Rc(JJ, cJ) {
      return JJ === cJ || JJ !== JJ && cJ !== cJ
    }(nc && Tc(new nc(new ArrayBuffer(1))) != mJ || Gc && Tc(new Gc) != YJ || fc && Tc(fc.resolve()) != sJ || xc && Tc(new xc) != GJ || rc && Tc(new rc) != rJ) && (Tc = function(JJ) {
      var cJ = Zc.call(JJ),
        ZJ = cJ == DJ ? JJ.constructor : void 0,
        FJ = ZJ ? ic(ZJ) : void 0;
      if (FJ) switch (FJ) {
        case mc:
          return mJ;
        case Qc:
          return YJ;
        case Ec:
          return sJ;
        case Vc:
          return GJ;
        case Kc:
          return rJ
      }
      return cJ
    });
    var Lc = Array.isArray;

    function ac(JJ) {
      return null != JJ && function(JJ) {
        return "number" == typeof JJ && JJ > -1 && JJ % 1 == 0 && JJ <= UJ
      }(JJ.length) && !tc(JJ)
    }
    var Bc = Dc || function() {
      return !1
    };

    function tc(JJ) {
      var cJ = oc(JJ) ? Zc.call(JJ) : "";
      return cJ == qJ || cJ == jJ
    }

    function oc(JJ) {
      var cJ = typeof JJ;
      return !!JJ && ("object" == cJ || "function" == cJ)
    }

    function lc(JJ) {
      return ac(JJ) ? Wc(JJ) : function(JJ) {
        if (!uc(JJ)) return sc(JJ);
        var cJ = [];
        for (var ZJ in Object(JJ)) cc.call(JJ, ZJ) && "constructor" != ZJ && cJ.push(ZJ);
        return cJ
      }(JJ)
    }
    JJ.exports = function(JJ) {
      return Pc(JJ, !0, !0)
    }
  },
  36692: (JJ, cJ, ZJ) => {
    var FJ = ZJ(36698),
      UJ = ZJ(36700),
      eJ = "undefined" !== typeof Float64Array;

    function XJ(JJ, cJ) {
      return JJ[0] - cJ[0]
    }

    function AJ() {
      var JJ, cJ = this.stride,
        ZJ = new Array(cJ.length);
      for (JJ = 0; JJ < ZJ.length; ++JJ) ZJ[JJ] = [Math.abs(cJ[JJ]), JJ];
      ZJ.sort(XJ);
      var FJ = new Array(ZJ.length);
      for (JJ = 0; JJ < FJ.length; ++JJ) FJ[JJ] = ZJ[JJ][1];
      return FJ
    }

    function qJ(JJ, cJ) {
      var ZJ = ["View", cJ, "d", JJ].join("");
      cJ < 0 && (ZJ = "View_Nil" + JJ);
      var UJ = "generic" === JJ;
      if (-1 === cJ) {
        var eJ = "function " + ZJ + "(a){this.data=a;};var proto=" + ZJ + ".prototype;proto.dtype='" + JJ + "';proto.index=function(){return -1};proto.size=0;proto.dimension=-1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function(){return new " + ZJ + "(this.data);};proto.get=proto.set=function(){};proto.pick=function(){return null};return function construct_" + ZJ + "(a){return new " + ZJ + "(a);}";
        return new Function(eJ)()
      }
      if (0 === cJ) {
        eJ = "function " + ZJ + "(a,d) {this.data = a;this.offset = d};var proto=" + ZJ + ".prototype;proto.dtype='" + JJ + "';proto.index=function(){return this.offset};proto.dimension=0;proto.size=1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function " + ZJ + "_copy() {return new " + ZJ + "(this.data,this.offset)};proto.pick=function " + ZJ + "_pick(){return TrivialArray(this.data);};proto.valueOf=proto.get=function " + ZJ + "_get(){return " + (UJ ? "this.data.get(this.offset)" : "this.data[this.offset]") + "};proto.set=function " + ZJ + "_set(v){return " + (UJ ? "this.data.set(this.offset,v)" : "this.data[this.offset]=v") + "};return function construct_" + ZJ + "(a,b,c,d){return new " + ZJ + "(a,d)}";
        return new Function("TrivialArray", eJ)(jJ[JJ][0])
      }
      eJ = ["'use strict'"];
      var XJ = FJ(cJ),
        qJ = XJ.map((function(JJ) {
          return "i" + JJ
        })),
        YJ = "this.offset+" + XJ.map((function(JJ) {
          return "this.stride[" + JJ + "]*i" + JJ
        })).join("+"),
        hJ = XJ.map((function(JJ) {
          return "b" + JJ
        })).join(","),
        DJ = XJ.map((function(JJ) {
          return "c" + JJ
        })).join(",");
      eJ.push("function " + ZJ + "(a," + hJ + "," + DJ + ",d){this.data=a", "this.shape=[" + hJ + "]", "this.stride=[" + DJ + "]", "this.offset=d|0}", "var proto=" + ZJ + ".prototype", "proto.dtype='" + JJ + "'", "proto.dimension=" + cJ), eJ.push("Object.defineProperty(proto,'size',{get:function " + ZJ + "_size(){return " + XJ.map((function(JJ) {
        return "this.shape[" + JJ + "]"
      })).join("*"), "}})"), 1 === cJ ? eJ.push("proto.order=[0]") : (eJ.push("Object.defineProperty(proto,'order',{get:"), cJ < 4 ? (eJ.push("function " + ZJ + "_order(){"), 2 === cJ ? eJ.push("return (Math.abs(this.stride[0])>Math.abs(this.stride[1]))?[1,0]:[0,1]}})") : 3 === cJ && eJ.push("var s0=Math.abs(this.stride[0]),s1=Math.abs(this.stride[1]),s2=Math.abs(this.stride[2]);if(s0>s1){if(s1>s2){return [2,1,0];}else if(s0>s2){return [1,2,0];}else{return [1,0,2];}}else if(s0>s2){return [2,0,1];}else if(s2>s1){return [0,1,2];}else{return [0,2,1];}}})")) : eJ.push("ORDER})")), eJ.push("proto.set=function " + ZJ + "_set(" + qJ.join(",") + ",v){"), UJ ? eJ.push("return this.data.set(" + YJ + ",v)}") : eJ.push("return this.data[" + YJ + "]=v}"), eJ.push("proto.get=function " + ZJ + "_get(" + qJ.join(",") + "){"), UJ ? eJ.push("return this.data.get(" + YJ + ")}") : eJ.push("return this.data[" + YJ + "]}"), eJ.push("proto.index=function " + ZJ + "_index(", qJ.join(), "){return " + YJ + "}"), eJ.push("proto.hi=function " + ZJ + "_hi(" + qJ.join(",") + "){return new " + ZJ + "(this.data," + XJ.map((function(JJ) {
        return ["(typeof i", JJ, "!=='number'||i", JJ, "<0)?this.shape[", JJ, "]:i", JJ, "|0"].join("")
      })).join(",") + "," + XJ.map((function(JJ) {
        return "this.stride[" + JJ + "]"
      })).join(",") + ",this.offset)}");
      var sJ = XJ.map((function(JJ) {
          return "a" + JJ + "=this.shape[" + JJ + "]"
        })),
        nJ = XJ.map((function(JJ) {
          return "c" + JJ + "=this.stride[" + JJ + "]"
        }));
      eJ.push("proto.lo=function " + ZJ + "_lo(" + qJ.join(",") + "){var b=this.offset,d=0," + sJ.join(",") + "," + nJ.join(","));
      for (var GJ = 0; GJ < cJ; ++GJ) eJ.push("if(typeof i" + GJ + "==='number'&&i" + GJ + ">=0){d=i" + GJ + "|0;b+=c" + GJ + "*d;a" + GJ + "-=d}");
      eJ.push("return new " + ZJ + "(this.data," + XJ.map((function(JJ) {
        return "a" + JJ
      })).join(",") + "," + XJ.map((function(JJ) {
        return "c" + JJ
      })).join(",") + ",b)}"), eJ.push("proto.step=function " + ZJ + "_step(" + qJ.join(",") + "){var " + XJ.map((function(JJ) {
        return "a" + JJ + "=this.shape[" + JJ + "]"
      })).join(",") + "," + XJ.map((function(JJ) {
        return "b" + JJ + "=this.stride[" + JJ + "]"
      })).join(",") + ",c=this.offset,d=0,ceil=Math.ceil");
      for (GJ = 0; GJ < cJ; ++GJ) eJ.push("if(typeof i" + GJ + "==='number'){d=i" + GJ + "|0;if(d<0){c+=b" + GJ + "*(a" + GJ + "-1);a" + GJ + "=ceil(-a" + GJ + "/d)}else{a" + GJ + "=ceil(a" + GJ + "/d)}b" + GJ + "*=d}");
      eJ.push("return new " + ZJ + "(this.data," + XJ.map((function(JJ) {
        return "a" + JJ
      })).join(",") + "," + XJ.map((function(JJ) {
        return "b" + JJ
      })).join(",") + ",c)}");
      var fJ = new Array(cJ),
        xJ = new Array(cJ);
      for (GJ = 0; GJ < cJ; ++GJ) fJ[GJ] = "a[i" + GJ + "]", xJ[GJ] = "b[i" + GJ + "]";
      eJ.push("proto.transpose=function " + ZJ + "_transpose(" + qJ + "){" + qJ.map((function(JJ, cJ) {
        return JJ + "=(" + JJ + "===undefined?" + cJ + ":" + JJ + "|0)"
      })).join(";"), "var a=this.shape,b=this.stride;return new " + ZJ + "(this.data," + fJ.join(",") + "," + xJ.join(",") + ",this.offset)}"), eJ.push("proto.pick=function " + ZJ + "_pick(" + qJ + "){var a=[],b=[],c=this.offset");
      for (GJ = 0; GJ < cJ; ++GJ) eJ.push("if(typeof i" + GJ + "==='number'&&i" + GJ + ">=0){c=(c+this.stride[" + GJ + "]*i" + GJ + ")|0}else{a.push(this.shape[" + GJ + "]);b.push(this.stride[" + GJ + "])}");
      return eJ.push("var ctor=CTOR_LIST[a.length+1];return ctor(this.data,a,b,c)}"), eJ.push("return function construct_" + ZJ + "(data,shape,stride,offset){return new " + ZJ + "(data," + XJ.map((function(JJ) {
        return "shape[" + JJ + "]"
      })).join(",") + "," + XJ.map((function(JJ) {
        return "stride[" + JJ + "]"
      })).join(",") + ",offset)}"), new Function("CTOR_LIST", "ORDER", eJ.join("\n"))(jJ[JJ], AJ)
    }
    var jJ = {
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
    JJ.exports = function(JJ, cJ, ZJ, FJ) {
      if (void 0 === JJ) return (0, jJ.array[0])([]);
      "number" === typeof JJ && (JJ = [JJ]), void 0 === cJ && (cJ = [JJ.length]);
      var XJ = cJ.length;
      if (void 0 === ZJ) {
        ZJ = new Array(XJ);
        for (var AJ = XJ - 1, YJ = 1; AJ >= 0; --AJ) ZJ[AJ] = YJ, YJ *= cJ[AJ]
      }
      if (void 0 === FJ) {
        FJ = 0;
        for (AJ = 0; AJ < XJ; ++AJ) ZJ[AJ] < 0 && (FJ -= (cJ[AJ] - 1) * ZJ[AJ])
      }
      for (var hJ = function(JJ) {
          if (UJ(JJ)) return "buffer";
          if (eJ) switch (Object.prototype.toString.call(JJ)) {
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
          return Array.isArray(JJ) ? "array" : "generic"
        }(JJ), DJ = jJ[hJ]; DJ.length <= XJ + 1;) DJ.push(qJ(hJ, DJ.length - 1));
      return (0, DJ[XJ + 1])(JJ, cJ, ZJ, FJ)
    }
  },
  37434: JJ => {
    function cJ(JJ, cJ, ZJ) {
      for (var FJ = JJ.length, UJ = -1 / 0, eJ = 1 / 0, XJ = 0; XJ < FJ; XJ++) {
        var AJ = (ZJ[0][XJ] - JJ[XJ]) / cJ[XJ],
          qJ = (ZJ[1][XJ] - JJ[XJ]) / cJ[XJ];
        if (AJ > qJ) {
          var jJ = AJ;
          AJ = qJ, qJ = jJ
        }
        if (qJ < UJ || AJ > eJ) return 1 / 0;
        AJ > UJ && (UJ = AJ), qJ < eJ && (eJ = qJ)
      }
      return UJ > eJ ? 1 / 0 : UJ
    }
    JJ.exports = function(JJ, ZJ, FJ, UJ) {
      var eJ = cJ(ZJ, FJ, UJ);
      if (eJ === 1 / 0) JJ = null;
      else {
        JJ = JJ || [];
        for (var XJ = 0; XJ < ZJ.length; XJ++) JJ[XJ] = ZJ[XJ] + FJ[XJ] * eJ
      }
      return JJ
    }, JJ.exports.distance = cJ
  },
  36711: (JJ, cJ, ZJ) => {
    var FJ = ZJ(36715);

    function UJ(JJ) {
      for (var cJ, ZJ, UJ = 0, eJ = JJ.length, XJ = 0; XJ < JJ.length;) {
        for (cJ = JJ[XJ], ZJ = 0; XJ < eJ && JJ[XJ] === cJ;) ++XJ, ++ZJ;
        UJ += FJ.log2(ZJ) / 7 | 0, UJ += FJ.log2(cJ >>> 0) / 7 | 0, UJ += 2
      }
      return UJ
    }
    cJ.size = UJ, cJ.encode = function(JJ, cJ) {
      cJ || (cJ = new Uint8Array(UJ(JJ)));
      for (var ZJ, FJ, eJ = 0, XJ = cJ.length, AJ = 0; AJ < JJ.length;) {
        for (ZJ = JJ[AJ], FJ = 0; AJ < JJ.length && JJ[AJ] === ZJ;) ++AJ, ++FJ;
        for (; eJ < XJ && FJ >= 128;) cJ[eJ++] = 128 + (127 & FJ), FJ >>>= 7;
        if (eJ >= XJ) throw new Error("RLE buffer overflow");
        for (cJ[eJ++] = FJ, ZJ >>>= 0; eJ < XJ && ZJ >= 128;) cJ[eJ++] = 128 + (127 & ZJ), ZJ >>>= 7;
        if (eJ >= XJ) throw new Error("RLE buffer overflow");
        cJ[eJ++] = ZJ
      }
      return cJ
    }, cJ.decode = function(JJ, cJ) {
      for (var ZJ, FJ, UJ, eJ, XJ = cJ.length, AJ = JJ.length, qJ = 0, jJ = 0; jJ < AJ;) {
        for (ZJ = 0, FJ = 0; jJ < AJ && JJ[jJ] >= 128;) ZJ += (127 & JJ[jJ++]) << FJ, FJ += 7;
        if (ZJ += JJ[jJ++] << FJ, jJ >= AJ) throw new Error("RLE buffer underrun");
        if (qJ + ZJ > XJ) throw new Error("Chunk buffer overflow");
        for (UJ = 0, FJ = 0; jJ < AJ && JJ[jJ] >= 128;) UJ += (127 & JJ[jJ++]) << FJ, FJ += 7;
        if (jJ >= AJ) throw new Error("RLE buffer underrun");
        for (UJ += JJ[jJ++] << FJ, eJ = 0; eJ < ZJ; ++eJ) cJ[qJ++] = UJ
      }
      return cJ
    }
  },
  36715: (JJ, cJ) => {
    function ZJ(JJ) {
      var cJ = 32;
      return (JJ &= -JJ) && cJ--, 65535 & JJ && (cJ -= 16), 16711935 & JJ && (cJ -= 8), 252645135 & JJ && (cJ -= 4), 858993459 & JJ && (cJ -= 2), 1431655765 & JJ && (cJ -= 1), cJ
    }
    cJ.INT_BITS = 32, cJ.INT_MAX = 2147483647, cJ.INT_MIN = -1 << 31, cJ.sign = function(JJ) {
      return (JJ > 0) - (JJ < 0)
    }, cJ.abs = function(JJ) {
      var cJ = JJ >> 31;
      return (JJ ^ cJ) - cJ
    }, cJ.min = function(JJ, cJ) {
      return cJ ^ (JJ ^ cJ) & -(JJ < cJ)
    }, cJ.max = function(JJ, cJ) {
      return JJ ^ (JJ ^ cJ) & -(JJ < cJ)
    }, cJ.isPow2 = function(JJ) {
      return !(JJ & JJ - 1) && !!JJ
    }, cJ.log2 = function(JJ) {
      var cJ, ZJ;
      return cJ = (JJ > 65535) << 4, cJ |= ZJ = ((JJ >>>= cJ) > 255) << 3, cJ |= ZJ = ((JJ >>>= ZJ) > 15) << 2, (cJ |= ZJ = ((JJ >>>= ZJ) > 3) << 1) | (JJ >>>= ZJ) >> 1
    }, cJ.log10 = function(JJ) {
      return JJ >= 1e9 ? 9 : JJ >= 1e8 ? 8 : JJ >= 1e7 ? 7 : JJ >= 1e6 ? 6 : JJ >= 1e5 ? 5 : JJ >= 1e4 ? 4 : JJ >= 1e3 ? 3 : JJ >= 100 ? 2 : JJ >= 10 ? 1 : 0
    }, cJ.popCount = function(JJ) {
      return 16843009 * ((JJ = (858993459 & (JJ -= JJ >>> 1 & 1431655765)) + (JJ >>> 2 & 858993459)) + (JJ >>> 4) & 252645135) >>> 24
    }, cJ.countTrailingZeros = ZJ, cJ.nextPow2 = function(JJ) {
      return JJ += 0 === JJ, --JJ, JJ |= JJ >>> 1, JJ |= JJ >>> 2, JJ |= JJ >>> 4, JJ |= JJ >>> 8, (JJ |= JJ >>> 16) + 1
    }, cJ.prevPow2 = function(JJ) {
      return JJ |= JJ >>> 1, JJ |= JJ >>> 2, JJ |= JJ >>> 4, JJ |= JJ >>> 8, (JJ |= JJ >>> 16) - (JJ >>> 1)
    }, cJ.parity = function(JJ) {
      return JJ ^= JJ >>> 16, JJ ^= JJ >>> 8, JJ ^= JJ >>> 4, 27030 >>> (JJ &= 15) & 1
    };
    var FJ = new Array(256);
    ! function(JJ) {
      for (var cJ = 0; cJ < 256; ++cJ) {
        var ZJ = cJ,
          FJ = cJ,
          UJ = 7;
        for (ZJ >>>= 1; ZJ; ZJ >>>= 1) FJ <<= 1, FJ |= 1 & ZJ, --UJ;
        JJ[cJ] = FJ << UJ & 255
      }
    }(FJ), cJ.reverse = function(JJ) {
      return FJ[255 & JJ] << 24 | FJ[JJ >>> 8 & 255] << 16 | FJ[JJ >>> 16 & 255] << 8 | FJ[JJ >>> 24 & 255]
    }, cJ.interleave2 = function(JJ, cJ) {
      return (JJ = 1431655765 & ((JJ = 858993459 & ((JJ = 252645135 & ((JJ = 16711935 & ((JJ &= 65535) | JJ << 8)) | JJ << 4)) | JJ << 2)) | JJ << 1)) | (cJ = 1431655765 & ((cJ = 858993459 & ((cJ = 252645135 & ((cJ = 16711935 & ((cJ &= 65535) | cJ << 8)) | cJ << 4)) | cJ << 2)) | cJ << 1)) << 1
    }, cJ.deinterleave2 = function(JJ, cJ) {
      return (JJ = 65535 & ((JJ = 16711935 & ((JJ = 252645135 & ((JJ = 858993459 & ((JJ = JJ >>> cJ & 1431655765) | JJ >>> 1)) | JJ >>> 2)) | JJ >>> 4)) | JJ >>> 16)) << 16 >> 16
    }, cJ.interleave3 = function(JJ, cJ, ZJ) {
      return JJ = 1227133513 & ((JJ = 3272356035 & ((JJ = 251719695 & ((JJ = 4278190335 & ((JJ &= 1023) | JJ << 16)) | JJ << 8)) | JJ << 4)) | JJ << 2), (JJ |= (cJ = 1227133513 & ((cJ = 3272356035 & ((cJ = 251719695 & ((cJ = 4278190335 & ((cJ &= 1023) | cJ << 16)) | cJ << 8)) | cJ << 4)) | cJ << 2)) << 1) | (ZJ = 1227133513 & ((ZJ = 3272356035 & ((ZJ = 251719695 & ((ZJ = 4278190335 & ((ZJ &= 1023) | ZJ << 16)) | ZJ << 8)) | ZJ << 4)) | ZJ << 2)) << 2
    }, cJ.deinterleave3 = function(JJ, cJ) {
      return (JJ = 1023 & ((JJ = 4278190335 & ((JJ = 251719695 & ((JJ = 3272356035 & ((JJ = JJ >>> cJ & 1227133513) | JJ >>> 2)) | JJ >>> 4)) | JJ >>> 8)) | JJ >>> 16)) << 22 >> 22
    }, cJ.nextCombination = function(JJ) {
      var cJ = JJ | JJ - 1;
      return cJ + 1 | (~cJ & -~cJ) - 1 >>> ZJ(JJ) + 1
    }
  },
  36229: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      Color3: () => FJ.e,
      e: () => FJ.f
    });
    var FJ = ZJ(36231);
    (0, FJ.g)()
  },
  36742: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => UJ
    });
    var FJ = ZJ(36744);
    class UJ {
      static GetPlanes(JJ) {
        const cJ = [];
        for (let ZJ = 0; ZJ < 6; ZJ++) cJ.push(new FJ.c(0, 0, 0, 0));
        return UJ.GetPlanesToRef(JJ, cJ), cJ
      }
      static GetNearPlaneToRef(JJ, cJ) {
        const ZJ = JJ.m;
        cJ.normal.x = ZJ[3] + ZJ[2], cJ.normal.y = ZJ[7] + ZJ[6], cJ.normal.z = ZJ[11] + ZJ[10], cJ.d = ZJ[15] + ZJ[14], cJ.normalize()
      }
      static GetFarPlaneToRef(JJ, cJ) {
        const ZJ = JJ.m;
        cJ.normal.x = ZJ[3] - ZJ[2], cJ.normal.y = ZJ[7] - ZJ[6], cJ.normal.z = ZJ[11] - ZJ[10], cJ.d = ZJ[15] - ZJ[14], cJ.normalize()
      }
      static GetLeftPlaneToRef(JJ, cJ) {
        const ZJ = JJ.m;
        cJ.normal.x = ZJ[3] + ZJ[0], cJ.normal.y = ZJ[7] + ZJ[4], cJ.normal.z = ZJ[11] + ZJ[8], cJ.d = ZJ[15] + ZJ[12], cJ.normalize()
      }
      static GetRightPlaneToRef(JJ, cJ) {
        const ZJ = JJ.m;
        cJ.normal.x = ZJ[3] - ZJ[0], cJ.normal.y = ZJ[7] - ZJ[4], cJ.normal.z = ZJ[11] - ZJ[8], cJ.d = ZJ[15] - ZJ[12], cJ.normalize()
      }
      static GetTopPlaneToRef(JJ, cJ) {
        const ZJ = JJ.m;
        cJ.normal.x = ZJ[3] - ZJ[1], cJ.normal.y = ZJ[7] - ZJ[5], cJ.normal.z = ZJ[11] - ZJ[9], cJ.d = ZJ[15] - ZJ[13], cJ.normalize()
      }
      static GetBottomPlaneToRef(JJ, cJ) {
        const ZJ = JJ.m;
        cJ.normal.x = ZJ[3] + ZJ[1], cJ.normal.y = ZJ[7] + ZJ[5], cJ.normal.z = ZJ[11] + ZJ[9], cJ.d = ZJ[15] + ZJ[13], cJ.normalize()
      }
      static GetPlanesToRef(JJ, cJ) {
        UJ.GetNearPlaneToRef(JJ, cJ[0]), UJ.GetFarPlaneToRef(JJ, cJ[1]), UJ.GetLeftPlaneToRef(JJ, cJ[2]), UJ.GetRightPlaneToRef(JJ, cJ[3]), UJ.GetTopPlaneToRef(JJ, cJ[4]), UJ.GetBottomPlaneToRef(JJ, cJ[5])
      }
      static IsPointInFrustum(JJ, cJ) {
        for (let ZJ = 0; ZJ < 6; ZJ++)
          if (cJ[ZJ].dotCoordinate(JJ) < 0) return !1;
        return !0
      }
    }
  },
  36744: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => UJ
    });
    var FJ = ZJ(36174);
    class UJ {
      constructor(JJ, cJ, ZJ, UJ) {
        this.normal = new FJ.j(JJ, cJ, ZJ), this.d = UJ
      }
      JFJ() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new UJ(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let JJ = this.normal.getHashCode();
        return JJ = 397 * JJ ^ this.d, JJ
      }
      normalize() {
        const JJ = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let cJ = 0;
        return 0 !== JJ && (cJ = 1 / JJ), this.normal.x *= cJ, this.normal.y *= cJ, this.normal.z *= cJ, this.d *= cJ, this
      }
      transform(JJ) {
        const cJ = UJ._TmpMatrix;
        JJ.invertToRef(cJ);
        const ZJ = cJ.m,
          FJ = this.normal.x,
          eJ = this.normal.y,
          XJ = this.normal.z,
          AJ = this.d,
          qJ = FJ * ZJ[0] + eJ * ZJ[1] + XJ * ZJ[2] + AJ * ZJ[3],
          jJ = FJ * ZJ[4] + eJ * ZJ[5] + XJ * ZJ[6] + AJ * ZJ[7],
          YJ = FJ * ZJ[8] + eJ * ZJ[9] + XJ * ZJ[10] + AJ * ZJ[11],
          hJ = FJ * ZJ[12] + eJ * ZJ[13] + XJ * ZJ[14] + AJ * ZJ[15];
        return new UJ(qJ, jJ, YJ, hJ)
      }
      dotCoordinate(JJ) {
        return this.normal.x * JJ.x + this.normal.y * JJ.y + this.normal.z * JJ.z + this.d
      }
      copyFromPoints(JJ, cJ, ZJ) {
        const FJ = cJ.x - JJ.x,
          UJ = cJ.y - JJ.y,
          eJ = cJ.z - JJ.z,
          XJ = ZJ.x - JJ.x,
          AJ = ZJ.y - JJ.y,
          qJ = ZJ.z - JJ.z,
          jJ = UJ * qJ - eJ * AJ,
          YJ = eJ * XJ - FJ * qJ,
          hJ = FJ * AJ - UJ * XJ,
          DJ = Math.sqrt(jJ * jJ + YJ * YJ + hJ * hJ);
        let sJ;
        return sJ = 0 !== DJ ? 1 / DJ : 0, this.normal.x = jJ * sJ, this.normal.y = YJ * sJ, this.normal.z = hJ * sJ, this.d = -(this.normal.x * JJ.x + this.normal.y * JJ.y + this.normal.z * JJ.z), this
      }
      isFrontFacingTo(JJ, cJ) {
        return FJ.j.Dot(this.normal, JJ) <= cJ
      }
      signedDistanceTo(JJ) {
        return FJ.j.Dot(JJ, this.normal) + this.d
      }
      static FromArray(JJ) {
        return new UJ(JJ[0], JJ[1], JJ[2], JJ[3])
      }
      static FromPoints(JJ, cJ, ZJ) {
        const FJ = new UJ(0, 0, 0, 0);
        return FJ.copyFromPoints(JJ, cJ, ZJ), FJ
      }
      static FromPositionAndNormal(JJ, cJ) {
        const ZJ = new UJ(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(JJ, cJ, ZJ)
      }
      static FromPositionAndNormalToRef(JJ, cJ, ZJ) {
        return ZJ.normal.rZJ(cJ), ZJ.normal.normalize(), ZJ.d = -JJ.dot(ZJ.normal), ZJ
      }
      static SignedDistanceToPlaneFromPositionAndNormal(JJ, cJ, ZJ) {
        const UJ = -(cJ.x * JJ.x + cJ.y * JJ.y + cJ.z * JJ.z);
        return FJ.j.Dot(ZJ, cJ) + UJ
      }
    }
    UJ._TmpMatrix = FJ.b.Identity()
  },
  36165: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      Matrix: () => FJ.b,
      Quaternion: () => FJ.e,
      RegisterMathVector: () => FJ.f,
      TmpVectors: () => FJ.h,
      Vector2: () => FJ.i,
      Pn: () => FJ.j,
      Vector4: () => FJ.k
    });
    var FJ = ZJ(36174);
    (0, FJ.f)()
  },
  37100: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => FJ
    });
    class FJ {
      constructor(JJ, cJ, ZJ, FJ) {
        this.x = JJ, this.y = cJ, this.width = ZJ, this.height = FJ
      }
      toGlobal(JJ, cJ) {
        return new FJ(this.x * JJ, this.y * cJ, this.width * JJ, this.height * cJ)
      }
      toGlobalToRef(JJ, cJ, ZJ) {
        return ZJ.x = this.x * JJ, ZJ.y = this.y * cJ, ZJ.width = this.width * JJ, ZJ.height = this.height * cJ, this
      }
      clone() {
        return new FJ(this.x, this.y, this.width, this.height)
      }
    }
  },
  36865: (JJ, cJ, ZJ) => {
    function FJ() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (JJ => {
        const cJ = 16 * Math.random() | 0;
        return ("x" === JJ ? cJ : 3 & cJ | 8).toString(16)
      }))
    }
    ZJ.d(cJ, {
      d: () => FJ
    })
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);