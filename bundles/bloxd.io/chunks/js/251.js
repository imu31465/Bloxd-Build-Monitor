/*! For license information please see pxmq3aq.251.a5e42ef8.chunk.js.LICENSE.txt */
export const id = 251;
export const ids = [251, 258];
export const modules = {
  39437: VV => {
    VV.exports = function(VV) {
      return null != VV && null != VV.constructor && "function" === typeof VV.constructor.isBuffer && VV.constructor.isBuffer(VV)
    }
  },
  39416: (VV, eV, xV) => {
    var JV = xV(39424),
      YV = xV(39430),
      UV = xV(39437);
    xV.g.__TYPEDARRAY_POOL || (xV.g.__TYPEDARRAY_POOL = {
      UINT8: YV([32, 0]),
      UINT16: YV([32, 0]),
      UINT32: YV([32, 0]),
      INT8: YV([32, 0]),
      INT16: YV([32, 0]),
      INT32: YV([32, 0]),
      FLOAT: YV([32, 0]),
      DOUBLE: YV([32, 0]),
      DATA: YV([32, 0]),
      UINT8C: YV([32, 0]),
      BUFFER: YV([32, 0])
    });
    var yV = "undefined" !== typeof Uint8ClampedArray,
      pV = xV.g.__TYPEDARRAY_POOL;
    pV.UINT8C || (pV.UINT8C = YV([32, 0])), pV.BUFFER || (pV.BUFFER = YV([32, 0]));
    var QV = pV.DATA,
      nV = pV.BUFFER;

    function wV(VV) {
      if (VV) {
        var eV = VV.length || VV.byteLength,
          xV = JV.log2(eV);
        QV[xV].push(VV)
      }
    }

    function ZV(VV) {
      VV = JV.nextPow2(VV);
      var eV = JV.log2(VV),
        xV = QV[eV];
      return xV.length > 0 ? xV.pop() : new ArrayBuffer(VV)
    }

    function vV(VV) {
      return new Uint8Array(ZV(VV), 0, VV)
    }

    function rV(VV) {
      return new Uint16Array(ZV(2 * VV), 0, VV)
    }

    function kV(VV) {
      return new Uint32Array(ZV(4 * VV), 0, VV)
    }

    function bV(VV) {
      return new Int8Array(ZV(VV), 0, VV)
    }

    function EV(VV) {
      return new Int16Array(ZV(2 * VV), 0, VV)
    }

    function BV(VV) {
      return new Int32Array(ZV(4 * VV), 0, VV)
    }

    function jV(VV) {
      return new Float32Array(ZV(4 * VV), 0, VV)
    }

    function qV(VV) {
      return new Float64Array(ZV(8 * VV), 0, VV)
    }

    function tV(VV) {
      return yV ? new Uint8ClampedArray(ZV(VV), 0, VV) : vV(VV)
    }

    function FV(VV) {
      return new DataView(ZV(VV), 0, VV)
    }
    eV.free = function(VV) {
      if (UV(VV)) nV[JV.log2(VV.length)].push(VV);
      else {
        if ("[object ArrayBuffer]" !== Object.prototype.toString.call(VV) && (VV = VV.buffer), !VV) return;
        var eV = VV.length || VV.byteLength,
          xV = 0 | JV.log2(eV);
        QV[xV].push(VV)
      }
    }, eV.freeUint8 = eV.freeUint16 = eV.freeUint32 = eV.freeInt8 = eV.freeInt16 = eV.freeInt32 = eV.freeFloat32 = eV.freeFloat = eV.freeFloat64 = eV.freeDouble = eV.freeUint8Clamped = eV.freeDataView = function(VV) {
      wV(VV.buffer)
    }, eV.freeArrayBuffer = wV, eV.freeBuffer = function(VV) {
      nV[JV.log2(VV.length)].push(VV)
    }, eV.malloc = function(VV, eV) {
      if (void 0 === eV || "arraybuffer" === eV) return ZV(VV);
      switch (eV) {
        case "uint8":
          return vV(VV);
        case "uint16":
          return rV(VV);
        case "uint32":
          return kV(VV);
        case "int8":
          return bV(VV);
        case "int16":
          return EV(VV);
        case "int32":
          return BV(VV);
        case "float":
        case "float32":
          return jV(VV);
        case "double":
        case "float64":
          return qV(VV);
        case "uint8_clamped":
          return tV(VV);
        case "buffer":
          throw "Buffer not supported";
        case "data":
        case "dataview":
          return FV(VV);
        default:
          return null
      }
      return null
    }, eV.mallocArrayBuffer = ZV, eV.mallocUint8 = vV, eV.mallocUint16 = rV, eV.mallocUint32 = kV, eV.mallocInt8 = bV, eV.mallocInt16 = EV, eV.mallocInt32 = BV, eV.mallocFloat32 = eV.mallocFloat = jV, eV.mallocFloat64 = eV.mallocDouble = qV, eV.mallocUint8Clamped = tV, eV.mallocDataView = FV, eV.clearCache = function() {
      for (var VV = 0; VV < 32; ++VV) pV.UINT8[VV].length = 0, pV.UINT16[VV].length = 0, pV.UINT32[VV].length = 0, pV.INT8[VV].length = 0, pV.INT16[VV].length = 0, pV.INT32[VV].length = 0, pV.FLOAT[VV].length = 0, pV.DOUBLE[VV].length = 0, pV.UINT8C[VV].length = 0, QV[VV].length = 0, nV[VV].length = 0
    }
  },
  39424: (VV, eV) => {
    function xV(VV) {
      var eV = 32;
      return (VV &= -VV) && eV--, 65535 & VV && (eV -= 16), 16711935 & VV && (eV -= 8), 252645135 & VV && (eV -= 4), 858993459 & VV && (eV -= 2), 1431655765 & VV && (eV -= 1), eV
    }
    eV.INT_BITS = 32, eV.INT_MAX = 2147483647, eV.INT_MIN = -1 << 31, eV.sign = function(VV) {
      return (VV > 0) - (VV < 0)
    }, eV.abs = function(VV) {
      var eV = VV >> 31;
      return (VV ^ eV) - eV
    }, eV.min = function(VV, eV) {
      return eV ^ (VV ^ eV) & -(VV < eV)
    }, eV.max = function(VV, eV) {
      return VV ^ (VV ^ eV) & -(VV < eV)
    }, eV.isPow2 = function(VV) {
      return !(VV & VV - 1) && !!VV
    }, eV.log2 = function(VV) {
      var eV, xV;
      return eV = (VV > 65535) << 4, eV |= xV = ((VV >>>= eV) > 255) << 3, eV |= xV = ((VV >>>= xV) > 15) << 2, (eV |= xV = ((VV >>>= xV) > 3) << 1) | (VV >>>= xV) >> 1
    }, eV.log10 = function(VV) {
      return VV >= 1e9 ? 9 : VV >= 1e8 ? 8 : VV >= 1e7 ? 7 : VV >= 1e6 ? 6 : VV >= 1e5 ? 5 : VV >= 1e4 ? 4 : VV >= 1e3 ? 3 : VV >= 100 ? 2 : VV >= 10 ? 1 : 0
    }, eV.popCount = function(VV) {
      return 16843009 * ((VV = (858993459 & (VV -= VV >>> 1 & 1431655765)) + (VV >>> 2 & 858993459)) + (VV >>> 4) & 252645135) >>> 24
    }, eV.countTrailingZeros = xV, eV.nextPow2 = function(VV) {
      return VV += 0 === VV, --VV, VV |= VV >>> 1, VV |= VV >>> 2, VV |= VV >>> 4, VV |= VV >>> 8, (VV |= VV >>> 16) + 1
    }, eV.prevPow2 = function(VV) {
      return VV |= VV >>> 1, VV |= VV >>> 2, VV |= VV >>> 4, VV |= VV >>> 8, (VV |= VV >>> 16) - (VV >>> 1)
    }, eV.parity = function(VV) {
      return VV ^= VV >>> 16, VV ^= VV >>> 8, VV ^= VV >>> 4, 27030 >>> (VV &= 15) & 1
    };
    var JV = new Array(256);
    ! function(VV) {
      for (var eV = 0; eV < 256; ++eV) {
        var xV = eV,
          JV = eV,
          YV = 7;
        for (xV >>>= 1; xV; xV >>>= 1) JV <<= 1, JV |= 1 & xV, --YV;
        VV[eV] = JV << YV & 255
      }
    }(JV), eV.reverse = function(VV) {
      return JV[255 & VV] << 24 | JV[VV >>> 8 & 255] << 16 | JV[VV >>> 16 & 255] << 8 | JV[VV >>> 24 & 255]
    }, eV.interleave2 = function(VV, eV) {
      return (VV = 1431655765 & ((VV = 858993459 & ((VV = 252645135 & ((VV = 16711935 & ((VV &= 65535) | VV << 8)) | VV << 4)) | VV << 2)) | VV << 1)) | (eV = 1431655765 & ((eV = 858993459 & ((eV = 252645135 & ((eV = 16711935 & ((eV &= 65535) | eV << 8)) | eV << 4)) | eV << 2)) | eV << 1)) << 1
    }, eV.deinterleave2 = function(VV, eV) {
      return (VV = 65535 & ((VV = 16711935 & ((VV = 252645135 & ((VV = 858993459 & ((VV = VV >>> eV & 1431655765) | VV >>> 1)) | VV >>> 2)) | VV >>> 4)) | VV >>> 16)) << 16 >> 16
    }, eV.interleave3 = function(VV, eV, xV) {
      return VV = 1227133513 & ((VV = 3272356035 & ((VV = 251719695 & ((VV = 4278190335 & ((VV &= 1023) | VV << 16)) | VV << 8)) | VV << 4)) | VV << 2), (VV |= (eV = 1227133513 & ((eV = 3272356035 & ((eV = 251719695 & ((eV = 4278190335 & ((eV &= 1023) | eV << 16)) | eV << 8)) | eV << 4)) | eV << 2)) << 1) | (xV = 1227133513 & ((xV = 3272356035 & ((xV = 251719695 & ((xV = 4278190335 & ((xV &= 1023) | xV << 16)) | xV << 8)) | xV << 4)) | xV << 2)) << 2
    }, eV.deinterleave3 = function(VV, eV) {
      return (VV = 1023 & ((VV = 4278190335 & ((VV = 251719695 & ((VV = 3272356035 & ((VV = VV >>> eV & 1227133513) | VV >>> 2)) | VV >>> 4)) | VV >>> 8)) | VV >>> 16)) << 22 >> 22
    }, eV.nextCombination = function(VV) {
      var eV = VV | VV - 1;
      return eV + 1 | (~eV & -~eV) - 1 >>> xV(VV) + 1
    }
  },
  39414: (VV, eV, xV) => {
    VV.exports = function(VV, eV, xV) {
      switch (arguments.length) {
        case 1:
          return JV = [], nV(YV = VV, YV, wV, !0), JV;
        case 2:
          return "function" === typeof eV ? nV(VV, VV, eV, !0) : function(VV, eV) {
            return JV = [], nV(VV, eV, wV, !1), JV
          }(VV, eV);
        case 3:
          return nV(VV, eV, xV, !1);
        default:
          throw new Error("box-intersect: Invalid arguments")
      }
      var YV
    };
    var JV, YV = xV(39416),
      UV = xV(39444),
      yV = xV(39452);

    function pV(VV, eV) {
      for (var xV = 0; xV < VV; ++xV)
        if (!(eV[xV] <= eV[xV + VV])) return !0;
      return !1
    }

    function QV(VV, eV, xV, JV) {
      for (var YV = 0, UV = 0, yV = 0, QV = VV.length; yV < QV; ++yV) {
        var nV = VV[yV];
        if (!pV(eV, nV)) {
          for (var wV = 0; wV < 2 * eV; ++wV) xV[YV++] = nV[wV];
          JV[UV++] = yV
        }
      }
      return UV
    }

    function nV(VV, eV, xV, JV) {
      var pV = VV.length,
        nV = eV.length;
      if (!(pV <= 0 || nV <= 0)) {
        var wV = VV[0].length >>> 1;
        if (!(wV <= 0)) {
          var ZV, vV = YV.mallocDouble(2 * wV * pV),
            rV = YV.mallocInt32(pV);
          if ((pV = QV(VV, wV, vV, rV)) > 0) {
            if (1 === wV && JV) UV.init(pV), ZV = UV.sweepComplete(wV, xV, 0, pV, vV, rV, 0, pV, vV, rV);
            else {
              var kV = YV.mallocDouble(2 * wV * nV),
                bV = YV.mallocInt32(nV);
              (nV = QV(eV, wV, kV, bV)) > 0 && (UV.init(pV + nV), ZV = 1 === wV ? UV.sweepBipartite(wV, xV, 0, pV, vV, rV, 0, nV, kV, bV) : yV(wV, xV, JV, pV, vV, rV, nV, kV, bV), YV.free(kV), YV.free(bV))
            }
            YV.free(vV), YV.free(rV)
          }
          return ZV
        }
      }
    }

    function wV(VV, eV) {
      JV.push([VV, eV])
    }
  },
  39458: (VV, eV) => {
    var xV = "d",
      JV = "ax",
      YV = "fp",
      UV = "es",
      yV = "rs",
      pV = "re",
      QV = "rb",
      nV = "bs",
      wV = "be",
      ZV = "bb",
      vV = [xV, JV, "vv", yV, pV, QV, "ri", nV, wV, ZV, "bi"];

    function rV(VV) {
      var eV = "bruteForce" + (VV ? "Full" : "Partial"),
        JV = [],
        yV = vV.slice();
      VV || yV.splice(3, 0, YV);
      var pV = ["function " + eV + "(" + yV.join() + "){"];

      function QV(eV, YV) {
        var yV = function(VV, eV, JV) {
          var YV = "bruteForce" + (VV ? "Red" : "Blue") + (eV ? "Flip" : "") + (JV ? "Full" : ""),
            yV = ["function ", YV, "(", vV.join(), "){", "var ", UV, "=2*", xV, ";"],
            pV = "for(var i=rs,rp=es*rs;i<re;++i,rp+=es){var x0=rb[ax+rp],x1=rb[ax+rp+d],xi=ri[i];",
            QV = "for(var j=bs,bp=es*bs;j<be;++j,bp+=es){var y0=bb[ax+bp]," + (JV ? "y1=bb[ax+bp+d]," : "") + "yi=bi[j];";
          return VV ? yV.push(pV, "Q", ":", QV) : yV.push(QV, "Q", ":", pV), JV ? yV.push("if(y1<x0||x1<y0)continue;") : eV ? yV.push("if(y0<=x0||x1<y0)continue;") : yV.push("if(y0<x0||x1<y0)continue;"), yV.push("for(var k=ax+1;k<d;++k){var r0=rb[k+rp],r1=rb[k+d+rp],b0=bb[k+bp],b1=bb[k+d+bp];if(r1<b0||b1<r0)continue Q;}var rv=vv("), eV ? yV.push("yi,xi") : yV.push("xi,yi"), yV.push(");if(rv!==void 0)return rv;}}}"), {
            name: YV,
            code: yV.join("")
          }
        }(eV, YV, VV);
        JV.push(yV.code), pV.push("return " + yV.name + "(" + vV.join() + ");")
      }
      pV.push("if(re-rs>be-bs){"), VV ? (QV(!0, !1), pV.push("}else{"), QV(!1, !1)) : (pV.push("if(fp){"), QV(!0, !0), pV.push("}else{"), QV(!0, !1), pV.push("}}else{if(fp){"), QV(!1, !0), pV.push("}else{"), QV(!1, !1), pV.push("}")), pV.push("}}return " + eV);
      var nV = JV.join("") + pV.join("");
      return new Function(nV)()
    }
    eV.partial = rV(!1), eV.full = rV(!0)
  },
  39452: (VV, eV, xV) => {
    VV.exports = function(VV, eV, xV, UV, wV, MV, zV, GV, WV) {
      ! function(VV, eV) {
        var xV = 8 * YV.log2(eV + 1) * (VV + 1) | 0,
          UV = YV.nextPow2(tV * xV);
        TV.length < UV && (JV.free(TV), TV = JV.mallocInt32(UV));
        var yV = YV.nextPow2(FV * xV);
        PV.length < yV && (JV.free(PV), PV = JV.mallocDouble(yV))
      }(VV, UV + zV);
      var RV, gV = 0,
        DV = 2 * VV;
      AV(gV++, 0, 0, UV, 0, zV, xV ? 16 : 0, -1 / 0, 1 / 0), xV || AV(gV++, 0, 0, zV, 0, UV, 1, -1 / 0, 1 / 0);
      for (; gV > 0;) {
        var iV = (gV -= 1) * tV,
          CV = TV[iV],
          aV = TV[iV + 1],
          oV = TV[iV + 2],
          cV = TV[iV + 3],
          hV = TV[iV + 4],
          lV = TV[iV + 5],
          LV = gV * FV,
          fV = PV[LV],
          mV = PV[LV + 1],
          KV = 1 & lV,
          HV = !!(16 & lV),
          uV = wV,
          sV = MV,
          SV = GV,
          IV = WV;
        if (KV && (uV = GV, sV = WV, SV = wV, IV = MV), !(2 & lV && aV >= (oV = EV(VV, CV, aV, oV, uV, sV, mV))) && !(4 & lV && (aV = BV(VV, CV, aV, oV, uV, sV, fV)) >= oV)) {
          var dV = oV - aV,
            OV = hV - cV;
          if (HV) {
            if (VV * dV * (dV + OV) < rV) {
              if (void 0 !== (RV = QV.scanComplete(VV, CV, eV, aV, oV, uV, sV, cV, hV, SV, IV))) return RV;
              continue
            }
          } else {
            if (VV * Math.min(dV, OV) < ZV) {
              if (void 0 !== (RV = yV(VV, CV, eV, KV, aV, oV, uV, sV, cV, hV, SV, IV))) return RV;
              continue
            }
            if (VV * dV * OV < vV) {
              if (void 0 !== (RV = QV.scanBipartite(VV, CV, eV, KV, aV, oV, uV, sV, cV, hV, SV, IV))) return RV;
              continue
            }
          }
          var Ve = kV(VV, CV, aV, oV, uV, sV, fV, mV);
          if (aV < Ve)
            if (VV * (Ve - aV) < ZV) {
              if (void 0 !== (RV = pV(VV, CV + 1, eV, aV, Ve, uV, sV, cV, hV, SV, IV))) return RV
            } else if (CV === VV - 2) {
            if (void 0 !== (RV = KV ? QV.sweepBipartite(VV, eV, cV, hV, SV, IV, aV, Ve, uV, sV) : QV.sweepBipartite(VV, eV, aV, Ve, uV, sV, cV, hV, SV, IV))) return RV
          } else AV(gV++, CV + 1, aV, Ve, cV, hV, KV, -1 / 0, 1 / 0), AV(gV++, CV + 1, cV, hV, aV, Ve, 1 ^ KV, -1 / 0, 1 / 0);
          if (Ve < oV) {
            var ee = nV(VV, CV, cV, hV, SV, IV),
              xe = SV[DV * ee + CV],
              Je = bV(VV, CV, ee, hV, SV, IV, xe);
            if (Je < hV && AV(gV++, CV, Ve, oV, Je, hV, (4 | KV) + (HV ? 16 : 0), xe, mV), cV < ee && AV(gV++, CV, Ve, oV, cV, ee, (2 | KV) + (HV ? 16 : 0), fV, xe), ee + 1 === Je) {
              if (void 0 !== (RV = HV ? XV(VV, CV, eV, Ve, oV, uV, sV, ee, SV, IV[ee]) : NV(VV, CV, eV, KV, Ve, oV, uV, sV, ee, SV, IV[ee]))) return RV
            } else if (ee < Je) {
              var Ye;
              if (HV) {
                if (Ve < (Ye = jV(VV, CV, Ve, oV, uV, sV, xe))) {
                  var Ue = bV(VV, CV, Ve, Ye, uV, sV, xe);
                  if (CV === VV - 2) {
                    if (Ve < Ue && void 0 !== (RV = QV.sweepComplete(VV, eV, Ve, Ue, uV, sV, ee, Je, SV, IV))) return RV;
                    if (Ue < Ye && void 0 !== (RV = QV.sweepBipartite(VV, eV, Ue, Ye, uV, sV, ee, Je, SV, IV))) return RV
                  } else Ve < Ue && AV(gV++, CV + 1, Ve, Ue, ee, Je, 16, -1 / 0, 1 / 0), Ue < Ye && (AV(gV++, CV + 1, Ue, Ye, ee, Je, 0, -1 / 0, 1 / 0), AV(gV++, CV + 1, ee, Je, Ue, Ye, 1, -1 / 0, 1 / 0))
                }
              } else Ve < (Ye = KV ? qV(VV, CV, Ve, oV, uV, sV, xe) : jV(VV, CV, Ve, oV, uV, sV, xe)) && (CV === VV - 2 ? RV = KV ? QV.sweepBipartite(VV, eV, ee, Je, SV, IV, Ve, Ye, uV, sV) : QV.sweepBipartite(VV, eV, Ve, Ye, uV, sV, ee, Je, SV, IV) : (AV(gV++, CV + 1, Ve, Ye, ee, Je, KV, -1 / 0, 1 / 0), AV(gV++, CV + 1, ee, Je, Ve, Ye, 1 ^ KV, -1 / 0, 1 / 0)))
            }
          }
        }
      }
    };
    var JV = xV(39416),
      YV = xV(39424),
      UV = xV(39458),
      yV = UV.partial,
      pV = UV.full,
      QV = xV(39444),
      nV = xV(39460),
      wV = xV(39463),
      ZV = 128,
      vV = 1 << 22,
      rV = 1 << 22,
      kV = wV("!(lo>=p0)&&!(p1>=hi)", ["p0", "p1"]),
      bV = wV("lo===p0", ["p0"]),
      EV = wV("lo<p0", ["p0"]),
      BV = wV("hi<=p0", ["p0"]),
      jV = wV("lo<=p0&&p0<=hi", ["p0"]),
      qV = wV("lo<p0&&p0<=hi", ["p0"]),
      tV = 6,
      FV = 2,
      TV = JV.mallocInt32(1024),
      PV = JV.mallocDouble(1024);

    function AV(VV, eV, xV, JV, YV, UV, yV, pV, QV) {
      var nV = tV * VV;
      TV[nV] = eV, TV[nV + 1] = xV, TV[nV + 2] = JV, TV[nV + 3] = YV, TV[nV + 4] = UV, TV[nV + 5] = yV;
      var wV = FV * VV;
      PV[wV] = pV, PV[wV + 1] = QV
    }

    function NV(VV, eV, xV, JV, YV, UV, yV, pV, QV, nV, wV) {
      var ZV = 2 * VV,
        vV = QV * ZV,
        rV = nV[vV + eV];
      VV: for (var kV = YV, bV = YV * ZV; kV < UV; ++kV, bV += ZV) {
        var EV = yV[bV + eV],
          BV = yV[bV + eV + VV];
        if (!(rV < EV || BV < rV) && (!JV || rV !== EV)) {
          for (var jV, qV = pV[kV], tV = eV + 1; tV < VV; ++tV) {
            EV = yV[bV + tV], BV = yV[bV + tV + VV];
            var FV = nV[vV + tV],
              TV = nV[vV + tV + VV];
            if (BV < FV || TV < EV) continue VV
          }
          if (void 0 !== (jV = JV ? xV(wV, qV) : xV(qV, wV))) return jV
        }
      }
    }

    function XV(VV, eV, xV, JV, YV, UV, yV, pV, QV, nV) {
      var wV = 2 * VV,
        ZV = pV * wV,
        vV = QV[ZV + eV];
      VV: for (var rV = JV, kV = JV * wV; rV < YV; ++rV, kV += wV) {
        var bV = yV[rV];
        if (bV !== nV) {
          var EV = UV[kV + eV],
            BV = UV[kV + eV + VV];
          if (!(vV < EV || BV < vV)) {
            for (var jV = eV + 1; jV < VV; ++jV) {
              EV = UV[kV + jV], BV = UV[kV + jV + VV];
              var qV = QV[ZV + jV],
                tV = QV[ZV + jV + VV];
              if (BV < qV || tV < EV) continue VV
            }
            var FV = xV(bV, nV);
            if (void 0 !== FV) return FV
          }
        }
      }
    }
  },
  39460: (VV, eV, xV) => {
    VV.exports = function(VV, eV, xV, yV, pV, QV) {
      if (yV <= xV + 1) return xV;
      var nV = xV,
        wV = yV,
        ZV = yV + xV >>> 1,
        vV = 2 * VV,
        rV = ZV,
        kV = pV[vV * ZV + eV];
      for (; nV < wV;) {
        if (wV - nV < YV) {
          UV(VV, eV, nV, wV, pV, QV), kV = pV[vV * ZV + eV];
          break
        }
        var bV = wV - nV,
          EV = Math.random() * bV + nV | 0,
          BV = pV[vV * EV + eV],
          jV = Math.random() * bV + nV | 0,
          qV = pV[vV * jV + eV],
          tV = Math.random() * bV + nV | 0,
          FV = pV[vV * tV + eV];
        BV <= qV ? FV >= qV ? (rV = jV, kV = qV) : BV >= FV ? (rV = EV, kV = BV) : (rV = tV, kV = FV) : qV >= FV ? (rV = jV, kV = qV) : FV >= BV ? (rV = EV, kV = BV) : (rV = tV, kV = FV);
        for (var TV = vV * (wV - 1), PV = vV * rV, AV = 0; AV < vV; ++AV, ++TV, ++PV) {
          var NV = pV[TV];
          pV[TV] = pV[PV], pV[PV] = NV
        }
        var XV = QV[wV - 1];
        QV[wV - 1] = QV[rV], QV[rV] = XV;
        for (TV = vV * (wV - 1), PV = vV * (rV = JV(VV, eV, nV, wV - 1, pV, QV, kV)), AV = 0; AV < vV; ++AV, ++TV, ++PV) {
          NV = pV[TV];
          pV[TV] = pV[PV], pV[PV] = NV
        }
        XV = QV[wV - 1];
        if (QV[wV - 1] = QV[rV], QV[rV] = XV, ZV < rV) {
          for (wV = rV - 1; nV < wV && pV[vV * (wV - 1) + eV] === kV;) wV -= 1;
          wV += 1
        } else {
          if (!(rV < ZV)) break;
          for (nV = rV + 1; nV < wV && pV[vV * nV + eV] === kV;) nV += 1
        }
      }
      return JV(VV, eV, xV, ZV, pV, QV, pV[vV * ZV + eV])
    };
    var JV = xV(39463)("lo<p0", ["p0"]),
      YV = 8;

    function UV(VV, eV, xV, JV, YV, UV) {
      for (var yV = 2 * VV, pV = yV * (xV + 1) + eV, QV = xV + 1; QV < JV; ++QV, pV += yV)
        for (var nV = YV[pV], wV = QV, ZV = yV * (QV - 1); wV > xV && YV[ZV + eV] > nV; --wV, ZV -= yV) {
          for (var vV = ZV, rV = ZV + yV, kV = 0; kV < yV; ++kV, ++vV, ++rV) {
            var bV = YV[vV];
            YV[vV] = YV[rV], YV[rV] = bV
          }
          var EV = UV[wV];
          UV[wV] = UV[wV - 1], UV[wV - 1] = EV
        }
    }
  },
  39463: VV => {
    VV.exports = function(VV, xV) {
      var JV = "abcdef".split("").concat(xV),
        YV = [];
      VV.indexOf("lo") >= 0 && YV.push("lo=e[k+n]");
      VV.indexOf("hi") >= 0 && YV.push("hi=e[k+o]");
      return JV.push(eV.replace("_", YV.join()).replace("$", VV)), Function.apply(void 0, JV)
    };
    var eV = "for(var j=2*a,k=j*c,l=k,m=c,n=b,o=a+b,p=c;d>p;++p,k+=j){var _;if($)if(m===p)m+=1,l+=j;else{for(var s=0;j>s;++s){var t=e[k+s];e[k+s]=e[l],e[l++]=t}var u=f[p];f[p]=f[m],f[m++]=u}}return m"
  },
  39449: VV => {
    VV.exports = function(VV, JV) {
      JV <= 4 * eV ? xV(0, JV - 1, VV) : nV(0, JV - 1, VV)
    };
    var eV = 32;

    function xV(VV, eV, xV) {
      for (var JV = 2 * (VV + 1), YV = VV + 1; YV <= eV; ++YV) {
        for (var UV = xV[JV++], yV = xV[JV++], pV = YV, QV = JV - 2; pV-- > VV;) {
          var nV = xV[QV - 2],
            wV = xV[QV - 1];
          if (nV < UV) break;
          if (nV === UV && wV < yV) break;
          xV[QV] = nV, xV[QV + 1] = wV, QV -= 2
        }
        xV[QV] = UV, xV[QV + 1] = yV
      }
    }

    function JV(VV, eV, xV) {
      eV *= 2;
      var JV = xV[VV *= 2],
        YV = xV[VV + 1];
      xV[VV] = xV[eV], xV[VV + 1] = xV[eV + 1], xV[eV] = JV, xV[eV + 1] = YV
    }

    function YV(VV, eV, xV) {
      eV *= 2, xV[VV *= 2] = xV[eV], xV[VV + 1] = xV[eV + 1]
    }

    function UV(VV, eV, xV, JV) {
      eV *= 2, xV *= 2;
      var YV = JV[VV *= 2],
        UV = JV[VV + 1];
      JV[VV] = JV[eV], JV[VV + 1] = JV[eV + 1], JV[eV] = JV[xV], JV[eV + 1] = JV[xV + 1], JV[xV] = YV, JV[xV + 1] = UV
    }

    function yV(VV, eV, xV, JV, YV) {
      eV *= 2, YV[VV *= 2] = YV[eV], YV[eV] = xV, YV[VV + 1] = YV[eV + 1], YV[eV + 1] = JV
    }

    function pV(VV, eV, xV) {
      eV *= 2;
      var JV = xV[VV *= 2],
        YV = xV[eV];
      return !(JV < YV) && (JV !== YV || xV[VV + 1] > xV[eV + 1])
    }

    function QV(VV, eV, xV, JV) {
      var YV = JV[VV *= 2];
      return YV < eV || YV === eV && JV[VV + 1] < xV
    }

    function nV(VV, wV, ZV) {
      var vV = (wV - VV + 1) / 6 | 0,
        rV = VV + vV,
        kV = wV - vV,
        bV = VV + wV >> 1,
        EV = bV - vV,
        BV = bV + vV,
        jV = rV,
        qV = EV,
        tV = bV,
        FV = BV,
        TV = kV,
        PV = VV + 1,
        AV = wV - 1,
        NV = 0;
      pV(jV, qV, ZV) && (NV = jV, jV = qV, qV = NV), pV(FV, TV, ZV) && (NV = FV, FV = TV, TV = NV), pV(jV, tV, ZV) && (NV = jV, jV = tV, tV = NV), pV(qV, tV, ZV) && (NV = qV, qV = tV, tV = NV), pV(jV, FV, ZV) && (NV = jV, jV = FV, FV = NV), pV(tV, FV, ZV) && (NV = tV, tV = FV, FV = NV), pV(qV, TV, ZV) && (NV = qV, qV = TV, TV = NV), pV(qV, tV, ZV) && (NV = qV, qV = tV, tV = NV), pV(FV, TV, ZV) && (NV = FV, FV = TV, TV = NV);
      for (var XV = ZV[2 * qV], MV = ZV[2 * qV + 1], zV = ZV[2 * FV], GV = ZV[2 * FV + 1], WV = 2 * jV, RV = 2 * tV, gV = 2 * TV, DV = 2 * rV, iV = 2 * bV, CV = 2 * kV, aV = 0; aV < 2; ++aV) {
        var oV = ZV[WV + aV],
          cV = ZV[RV + aV],
          hV = ZV[gV + aV];
        ZV[DV + aV] = oV, ZV[iV + aV] = cV, ZV[CV + aV] = hV
      }
      YV(EV, VV, ZV), YV(BV, wV, ZV);
      for (var lV = PV; lV <= AV; ++lV)
        if (QV(lV, XV, MV, ZV)) lV !== PV && JV(lV, PV, ZV), ++PV;
        else if (!QV(lV, zV, GV, ZV))
        for (;;) {
          if (QV(AV, zV, GV, ZV)) {
            QV(AV, XV, MV, ZV) ? (UV(lV, PV, AV, ZV), ++PV, --AV) : (JV(lV, AV, ZV), --AV);
            break
          }
          if (--AV < lV) break
        }
      yV(VV, PV - 1, XV, MV, ZV), yV(wV, AV + 1, zV, GV, ZV), PV - 2 - VV <= eV ? xV(VV, PV - 2, ZV) : nV(VV, PV - 2, ZV), wV - (AV + 2) <= eV ? xV(AV + 2, wV, ZV) : nV(AV + 2, wV, ZV), AV - PV <= eV ? xV(PV, AV, ZV) : nV(PV, AV, ZV)
    }
  },
  39444: (VV, eV, xV) => {
    VV.exports = {
      init: function(VV) {
        var eV = YV.nextPow2(VV);
        QV.length < eV && (JV.free(QV), QV = JV.mallocInt32(eV));
        nV.length < eV && (JV.free(nV), nV = JV.mallocInt32(eV));
        wV.length < eV && (JV.free(wV), wV = JV.mallocInt32(eV));
        ZV.length < eV && (JV.free(ZV), ZV = JV.mallocInt32(eV));
        vV.length < eV && (JV.free(vV), vV = JV.mallocInt32(eV));
        rV.length < eV && (JV.free(rV), rV = JV.mallocInt32(eV));
        var xV = 8 * eV;
        kV.length < xV && (JV.free(kV), kV = JV.mallocDouble(xV))
      },
      sweepBipartite: function(VV, eV, xV, JV, YV, pV, vV, rV, BV, jV) {
        for (var qV = 0, tV = 2 * VV, FV = VV - 1, TV = tV - 1, PV = xV; PV < JV; ++PV) {
          var AV = pV[PV],
            NV = tV * PV;
          kV[qV++] = YV[NV + FV], kV[qV++] = -(AV + 1), kV[qV++] = YV[NV + TV], kV[qV++] = AV
        }
        for (PV = vV; PV < rV; ++PV) {
          AV = jV[PV] + yV;
          var XV = tV * PV;
          kV[qV++] = BV[XV + FV], kV[qV++] = -AV, kV[qV++] = BV[XV + TV], kV[qV++] = AV
        }
        var MV = qV >>> 1;
        UV(kV, MV);
        var zV = 0,
          GV = 0;
        for (PV = 0; PV < MV; ++PV) {
          var WV = 0 | kV[2 * PV + 1];
          if (WV >= yV) bV(wV, ZV, GV--, WV = WV - yV | 0);
          else if (WV >= 0) bV(QV, nV, zV--, WV);
          else if (WV <= -yV) {
            WV = -WV - yV | 0;
            for (var RV = 0; RV < zV; ++RV) {
              if (void 0 !== (gV = eV(QV[RV], WV))) return gV
            }
            EV(wV, ZV, GV++, WV)
          } else {
            WV = -WV - 1 | 0;
            for (RV = 0; RV < GV; ++RV) {
              var gV;
              if (void 0 !== (gV = eV(WV, wV[RV]))) return gV
            }
            EV(QV, nV, zV++, WV)
          }
        }
      },
      sweepComplete: function(VV, eV, xV, JV, YV, yV, pV, BV, jV, qV) {
        for (var tV = 0, FV = 2 * VV, TV = VV - 1, PV = FV - 1, AV = xV; AV < JV; ++AV) {
          var NV = yV[AV] + 1 << 1,
            XV = FV * AV;
          kV[tV++] = YV[XV + TV], kV[tV++] = -NV, kV[tV++] = YV[XV + PV], kV[tV++] = NV
        }
        for (AV = pV; AV < BV; ++AV) {
          NV = qV[AV] + 1 << 1;
          var MV = FV * AV;
          kV[tV++] = jV[MV + TV], kV[tV++] = 1 | -NV, kV[tV++] = jV[MV + PV], kV[tV++] = 1 | NV
        }
        var zV = tV >>> 1;
        UV(kV, zV);
        var GV = 0,
          WV = 0,
          RV = 0;
        for (AV = 0; AV < zV; ++AV) {
          var gV = 0 | kV[2 * AV + 1],
            DV = 1 & gV;
          if (AV < zV - 1 && gV >> 1 === kV[2 * AV + 3] >> 1 && (DV = 2, AV += 1), gV < 0) {
            for (var iV = -(gV >> 1) - 1, CV = 0; CV < RV; ++CV) {
              if (void 0 !== (aV = eV(vV[CV], iV))) return aV
            }
            if (0 !== DV)
              for (CV = 0; CV < GV; ++CV) {
                if (void 0 !== (aV = eV(QV[CV], iV))) return aV
              }
            if (1 !== DV)
              for (CV = 0; CV < WV; ++CV) {
                var aV;
                if (void 0 !== (aV = eV(wV[CV], iV))) return aV
              }
            0 === DV ? EV(QV, nV, GV++, iV) : 1 === DV ? EV(wV, ZV, WV++, iV) : 2 === DV && EV(vV, rV, RV++, iV)
          } else {
            iV = (gV >> 1) - 1;
            0 === DV ? bV(QV, nV, GV--, iV) : 1 === DV ? bV(wV, ZV, WV--, iV) : 2 === DV && bV(vV, rV, RV--, iV)
          }
        }
      },
      scanBipartite: function(VV, eV, xV, JV, YV, pV, wV, ZV, vV, rV, BV, jV) {
        var qV = 0,
          tV = 2 * VV,
          FV = eV,
          TV = eV + VV,
          PV = 1,
          AV = 1;
        JV ? AV = yV : PV = yV;
        for (var NV = YV; NV < pV; ++NV) {
          var XV = NV + PV,
            MV = tV * NV;
          kV[qV++] = wV[MV + FV], kV[qV++] = -XV, kV[qV++] = wV[MV + TV], kV[qV++] = XV
        }
        for (NV = vV; NV < rV; ++NV) {
          XV = NV + AV;
          var zV = tV * NV;
          kV[qV++] = BV[zV + FV], kV[qV++] = -XV
        }
        var GV = qV >>> 1;
        UV(kV, GV);
        var WV = 0;
        for (NV = 0; NV < GV; ++NV) {
          var RV = 0 | kV[2 * NV + 1];
          if (RV < 0) {
            var gV = !1;
            if ((XV = -RV) >= yV ? (gV = !JV, XV -= yV) : (gV = !!JV, XV -= 1), gV) EV(QV, nV, WV++, XV);
            else {
              var DV = jV[XV],
                iV = tV * XV,
                CV = BV[iV + eV + 1],
                aV = BV[iV + eV + 1 + VV];
              VV: for (var oV = 0; oV < WV; ++oV) {
                var cV = QV[oV],
                  hV = tV * cV;
                if (!(aV < wV[hV + eV + 1] || wV[hV + eV + 1 + VV] < CV)) {
                  for (var lV = eV + 2; lV < VV; ++lV)
                    if (BV[iV + lV + VV] < wV[hV + lV] || wV[hV + lV + VV] < BV[iV + lV]) continue VV;
                  var LV, fV = ZV[cV];
                  if (void 0 !== (LV = JV ? xV(DV, fV) : xV(fV, DV))) return LV
                }
              }
            }
          } else bV(QV, nV, WV--, RV - PV)
        }
      },
      scanComplete: function(VV, eV, xV, JV, YV, pV, nV, wV, ZV, vV, rV) {
        for (var bV = 0, EV = 2 * VV, BV = eV, jV = eV + VV, qV = JV; qV < YV; ++qV) {
          var tV = qV + yV,
            FV = EV * qV;
          kV[bV++] = pV[FV + BV], kV[bV++] = -tV, kV[bV++] = pV[FV + jV], kV[bV++] = tV
        }
        for (qV = wV; qV < ZV; ++qV) {
          tV = qV + 1;
          var TV = EV * qV;
          kV[bV++] = vV[TV + BV], kV[bV++] = -tV
        }
        var PV = bV >>> 1;
        UV(kV, PV);
        var AV = 0;
        for (qV = 0; qV < PV; ++qV) {
          var NV = 0 | kV[2 * qV + 1];
          if (NV < 0) {
            if ((tV = -NV) >= yV) QV[AV++] = tV - yV;
            else {
              var XV = rV[tV -= 1],
                MV = EV * tV,
                zV = vV[MV + eV + 1],
                GV = vV[MV + eV + 1 + VV];
              VV: for (var WV = 0; WV < AV; ++WV) {
                var RV = QV[WV],
                  gV = nV[RV];
                if (gV === XV) break;
                var DV = EV * RV;
                if (!(GV < pV[DV + eV + 1] || pV[DV + eV + 1 + VV] < zV)) {
                  for (var iV = eV + 2; iV < VV; ++iV)
                    if (vV[MV + iV + VV] < pV[DV + iV] || pV[DV + iV + VV] < vV[MV + iV]) continue VV;
                  var CV = xV(gV, XV);
                  if (void 0 !== CV) return CV
                }
              }
            }
          } else {
            for (tV = NV - yV, WV = AV - 1; WV >= 0; --WV)
              if (QV[WV] === tV) {
                for (iV = WV + 1; iV < AV; ++iV) QV[iV - 1] = QV[iV];
                break
              }-- AV
          }
        }
      }
    };
    var JV = xV(39416),
      YV = xV(39424),
      UV = xV(39449),
      yV = 1 << 28,
      pV = 1024,
      QV = JV.mallocInt32(pV),
      nV = JV.mallocInt32(pV),
      wV = JV.mallocInt32(pV),
      ZV = JV.mallocInt32(pV),
      vV = JV.mallocInt32(pV),
      rV = JV.mallocInt32(pV),
      kV = JV.mallocDouble(8192);

    function bV(VV, eV, xV, JV) {
      var YV = eV[JV],
        UV = VV[xV - 1];
      VV[YV] = UV, eV[UV] = YV
    }

    function EV(VV, eV, xV, JV) {
      VV[xV] = JV, eV[JV] = xV
    }
  },
  39430: VV => {
    function eV(VV, xV, JV) {
      var YV = 0 | VV[JV];
      if (YV <= 0) return [];
      var UV, yV = new Array(YV);
      if (JV === VV.length - 1)
        for (UV = 0; UV < YV; ++UV) yV[UV] = xV;
      else
        for (UV = 0; UV < YV; ++UV) yV[UV] = eV(VV, xV, JV + 1);
      return yV
    }
    VV.exports = function(VV, xV) {
      switch ("undefined" === typeof xV && (xV = 0), typeof VV) {
        case "number":
          if (VV > 0) return function(VV, eV) {
            var xV, JV;
            for (xV = new Array(VV), JV = 0; JV < VV; ++JV) xV[JV] = eV;
            return xV
          }(0 | VV, xV);
          break;
        case "object":
          if ("number" === typeof VV.length) return eV(VV, xV, 0)
      }
      return []
    }
  },
  39380: (VV, eV, xV) => {
    VV.exports = function() {
      var VV = this;
      this.components = {}, this.comps = this.components;
      var eV = this.components,
        xV = 1,
        YV = {},
        UV = [],
        yV = [],
        pV = {
          timeout: !1,
          removals: [],
          multiComps: []
        };

      function QV(VV, xV) {
        var JV = eV[xV],
          UV = YV[xV],
          yV = UV.hash[VV];
        yV && (UV.remove(VV), JV.bR && (JV.multi ? (yV.forEach((eV => {
          eV && JV.bR(VV, eV)
        })), yV.length = 0) : JV.bR(VV, yV)), pV.removals.push(UV), nV())
      }

      function nV() {
        pV.timeout || (pV.timeout = !0, setTimeout(wV, 1))
      }

      function wV() {
        pV.timeout = !1, ZV()
      }

      function ZV() {
        pV.multiComps.length && function(VV) {
          for (var eV = 0; eV < VV.length; eV++) {
            var {
              entID: xV,
              data: JV
            } = VV[eV], YV = JV.hash[xV];
            if (YV) {
              for (var UV = 0; UV < YV.length; UV++) YV[UV] || (YV.splice(UV, 1), UV--);
              0 === YV.length && (JV.remove(xV), pV.removals.push(JV))
            }
          }
          VV.length = 0
        }(pV.multiComps), pV.removals.length && function(VV) {
          for (var eV = 0; eV < VV.length; eV++) {
            VV[eV].flush()
          }
          VV.length = 0
        }(pV.removals)
      }
      this.Cb = YV, this._systems = UV, this._renderSystems = yV, this.Y_ = function(eV) {
        var JV = xV++;
        return Array.isArray(eV) && eV.forEach((eV => VV.WC(JV, eV))), JV
      }, this.deleteEntity = function(eV) {
        return Object.keys(YV).forEach((VV => {
          YV[VV].hash[eV] && QV(eV, VV)
        })), VV
      }, this.vJV = function(VV) {
        if (!VV) throw new Error("Missing component definition");
        var xV = VV.name;
        if (!xV) throw new Error("Component definition must have a name property.");
        if ("string" !== typeof xV) throw new Error("Component name must be a string.");
        if ("" === xV) throw new Error("Component name must be a non-empty string.");
        if (YV[xV]) throw new Error(`Component ${xV} already exists.`);
        var pV = {};
        return pV.name = xV, pV.multi = !!VV.multi, pV.order = isNaN(VV.order) ? 99 : VV.order, pV.stateConstructor = VV.stateConstructor || null, pV.state = VV.state || {}, pV.uF = VV.uF || null, pV.bR = VV.bR || null, pV.system = VV.system || null, pV.SF = VV.SF || null, eV[xV] = pV, YV[xV] = new JV, YV[xV]._pendingMultiCleanup = !1, YV[xV]._multiCleanupIDs = pV.multi ? [] : null, pV.system && (UV.push(xV), UV.sort(((VV, xV) => eV[VV].order - eV[xV].order))), pV.SF && (yV.push(xV), yV.sort(((VV, xV) => eV[VV].order - eV[xV].order))), xV
      }, this.overwriteComponent = function(VV, xV) {
        var JV = eV[VV];
        if (!JV) throw new Error(`Unknown component: ${VV}`);
        if (!xV) throw new Error("Missing component definition");
        if (JV.name !== xV.name) throw new Error("Overwriting component must use the same name property.");
        var pV = {};
        pV.name = VV, pV.multi = !!xV.multi, pV.order = isNaN(xV.order) ? 99 : xV.order, pV.state = xV.state || {}, pV.uF = xV.uF || null, pV.bR = xV.bR || null, pV.system = xV.system || null, pV.SF = xV.SF || null, eV[VV] = pV, YV[VV]._pendingMultiCleanup = !1, YV[VV]._multiCleanupIDs = pV.multi ? [] : null;
        var QV = UV.indexOf(VV);
        pV.system && QV < 0 && UV.push(VV), !pV.system && QV >= 0 && UV.splice(QV, 1), UV.sort(((VV, xV) => eV[VV].order - eV[xV].order));
        var nV = yV.indexOf(VV);
        pV.SF && nV < 0 && yV.push(VV), !pV.SF && nV >= 0 && yV.splice(nV, 1), yV.sort(((VV, xV) => eV[VV].order - eV[xV].order));
        var wV = pV.state;
        return this.tC(VV).forEach((VV => {
          for (var eV in wV) eV in VV || (VV[eV] = wV[eV]);
          pV.uF && pV.uF(VV.zC, VV)
        })), VV
      }, this.deleteComponent = function(xV) {
        var JV = YV[xV];
        if (!JV) throw new Error(`Unknown component: ${xV}`);
        JV.flush(), JV.list.forEach((VV => {
          VV && QV(VV.zC || VV[0].zC, xV)
        }));
        var pV = UV.indexOf(xV),
          nV = yV.indexOf(xV);
        return pV > -1 && UV.splice(pV, 1), nV > -1 && yV.splice(nV, 1), YV[xV].dispose(), delete YV[xV], delete eV[xV], VV
      }, this.WC = function(VV, xV, JV) {
        var UV, yV = eV[xV],
          pV = YV[xV];
        if (!pV) throw new Error(`Unknown component: ${xV}.`);
        if (pV.hash[VV] && !yV.multi) throw new Error(`Entity ${VV} already has component: ${xV}.`);
        if (yV.stateConstructor) {
          if (!(UV = new yV.stateConstructor).hasOwnProperty("zC")) throw new Error(`Component ${yV.name} stateConstructor type does not have property __id`);
          Object.assign(UV, yV.state, JV)
        } else UV = {
          zC: VV,
          ...yV.state,
          ...JV
        };
        if (UV.zC = VV, yV.multi) {
          var QV = pV.hash[VV];
          QV || (QV = [], pV.add(VV, QV)), QV.push(UV)
        } else pV.add(VV, UV);
        return yV.uF && yV.uF(VV, UV), this
      }, this.wxV = function(VV, eV) {
        var xV = YV[eV];
        if (!xV) throw new Error(`Unknown component: ${eV}.`);
        return !!xV.hash[VV]
      }, this.gC = function(eV, xV) {
        if (!YV[xV]) throw new Error(`Unknown component: ${xV}.`);
        return QV(eV, xV), VV
      }, this.getState = function(VV, eV) {
        var xV = YV[eV];
        if (!xV) throw new Error(`Unknown component: ${eV}.`);
        return xV.hash[VV]
      }, this.tC = function(VV) {
        var eV = YV[VV];
        if (!eV) throw new Error(`Unknown component: ${VV}.`);
        return ZV(), eV.list
      }, this.KxV = function(VV) {
        if (!YV[VV]) throw new Error(`Unknown component: ${VV}.`);
        var eV = YV[VV].hash;
        return VV => eV[VV]
      }, this.dxV = function(VV) {
        if (!YV[VV]) throw new Error(`Unknown component: ${VV}.`);
        var eV = YV[VV].hash;
        return VV => !!eV[VV]
      }, this.iZ = function(xV) {
        ZV();
        for (var JV = 0; JV < UV.length; JV++) {
          var yV = UV[JV],
            pV = eV[yV],
            QV = YV[yV];
          pV.system(xV, QV.list), ZV()
        }
        return VV
      }, this.render = function(xV) {
        ZV();
        for (var JV = 0; JV < yV.length; JV++) {
          var UV = yV[JV],
            pV = eV[UV],
            QV = YV[UV];
          pV.SF(xV, QV.list), ZV()
        }
        return VV
      }, this.removeMultiComponent = function(xV, JV, UV) {
        var yV = eV[JV],
          QV = YV[JV];
        if (!QV) throw new Error(`Unknown component: ${JV}.`);
        if (!yV.multi) throw new Error("removeMultiComponent called on non-multi component");
        return function(VV, eV, xV, JV) {
          var YV = xV.hash[VV];
          if (YV) {
            var UV = YV[JV];
            UV && (YV[JV] = null, eV.bR && eV.bR(VV, UV), pV.multiComps.push({
              entID: VV,
              data: xV
            }), nV())
          }
        }(xV, yV, QV, UV), VV
      }
    };
    var JV = xV(39385)
  },
  39385: VV => {
    function eV(VV, eV) {
      var xV = VV._map[eV];
      if (delete VV.hash[eV], delete VV._map[eV], xV === VV.list.length - 1) VV.list.pop(), VV._idList.pop();
      else {
        var JV = VV.list.pop();
        VV.list[xV] = JV;
        var YV = VV._idList.pop();
        VV._idList[xV] = YV, VV._map[YV] = xV
      }
    }
    VV.exports = class {
      constructor() {
        this.list = [], this.hash = {}, this._map = {}, this._idList = [], this._pendingRemovals = []
      }
      add(VV, eV) {
        if ("number" === typeof this._map[VV]) {
          var xV = this._map[VV];
          this.hash[VV] = eV, this.list[xV] = eV, this._idList[xV] = VV
        } else this._map[VV] = this.list.length, this.hash[VV] = eV, this.list.push(eV), this._idList.push(VV)
      }
      remove(VV) {
        var eV = this._map[VV];
        this.hash[VV] = null, this.list[eV] = null, this._pendingRemovals.push(VV)
      }
      dispose() {
        this.list = null, this.hash = null, this._map = null, this._idList = null, this._pendingRemovals.length = 0
      }
      flush() {
        for (var VV = 0; VV < this._pendingRemovals.length; VV++) {
          var xV = this._pendingRemovals[VV];
          null === this.hash[xV] && eV(this, xV)
        }
        this._pendingRemovals.length = 0
      }
    }
  },
  39201: (VV, eV, xV) => {
    VV = xV.nmd(VV);
    var JV = "__lodash_hash_undefined__",
      YV = 9007199254740991,
      UV = "[object Arguments]",
      yV = "[object Boolean]",
      pV = "[object Date]",
      QV = "[object Function]",
      nV = "[object GeneratorFunction]",
      wV = "[object Map]",
      ZV = "[object Number]",
      vV = "[object Object]",
      rV = "[object Promise]",
      kV = "[object RegExp]",
      bV = "[object Set]",
      EV = "[object String]",
      BV = "[object Symbol]",
      jV = "[object WeakMap]",
      qV = "[object ArrayBuffer]",
      tV = "[object DataView]",
      FV = "[object Float32Array]",
      TV = "[object Float64Array]",
      PV = "[object Int8Array]",
      AV = "[object Int16Array]",
      NV = "[object Int32Array]",
      XV = "[object Uint8Array]",
      MV = "[object Uint8ClampedArray]",
      zV = "[object Uint16Array]",
      GV = "[object Uint32Array]",
      WV = /\w*$/,
      RV = /^\[object .+?Constructor\]$/,
      gV = /^(?:0|[1-9]\d*)$/,
      DV = {};
    DV[UV] = DV["[object Array]"] = DV[qV] = DV[tV] = DV[yV] = DV[pV] = DV[FV] = DV[TV] = DV[PV] = DV[AV] = DV[NV] = DV[wV] = DV[ZV] = DV[vV] = DV[kV] = DV[bV] = DV[EV] = DV[BV] = DV[XV] = DV[MV] = DV[zV] = DV[GV] = !0, DV["[object Error]"] = DV[QV] = DV[jV] = !1;
    var iV = "object" == typeof xV.g && xV.g && xV.g.Object === Object && xV.g,
      CV = "object" == typeof self && self && self.Object === Object && self,
      aV = iV || CV || Function("return this")(),
      oV = eV && !eV.nodeType && eV,
      cV = oV && VV && !VV.nodeType && VV,
      hV = cV && cV.exports === oV;

    function lV(VV, eV) {
      return VV.set(eV[0], eV[1]), VV
    }

    function LV(VV, eV) {
      return VV.add(eV), VV
    }

    function fV(VV, eV, xV, JV) {
      var YV = -1,
        UV = VV ? VV.length : 0;
      for (JV && UV && (xV = VV[++YV]); ++YV < UV;) xV = eV(xV, VV[YV], YV, VV);
      return xV
    }

    function mV(VV) {
      var eV = !1;
      if (null != VV && "function" != typeof VV.toString) try {
        eV = !!(VV + "")
      } catch (xV) {}
      return eV
    }

    function KV(VV) {
      var eV = -1,
        xV = Array(VV.size);
      return VV.forEach((function(VV, JV) {
        xV[++eV] = [JV, VV]
      })), xV
    }

    function HV(VV, eV) {
      return function(xV) {
        return VV(eV(xV))
      }
    }

    function uV(VV) {
      var eV = -1,
        xV = Array(VV.size);
      return VV.forEach((function(VV) {
        xV[++eV] = VV
      })), xV
    }
    var sV = Array.prototype,
      SV = Function.prototype,
      IV = Object.prototype,
      dV = aV["__core-js_shared__"],
      OV = function() {
        var VV = /[^.]+$/.exec(dV && dV.keys && dV.keys.IE_PROTO || "");
        return VV ? "Symbol(src)_1." + VV : ""
      }(),
      Ve = SV.toString,
      ee = IV.hasOwnProperty,
      xe = IV.toString,
      Je = RegExp("^" + Ve.call(ee).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
      Ye = hV ? aV.nZ : void 0,
      Ue = aV.Symbol,
      ye = aV.Uint8Array,
      pe = HV(Object.getPrototypeOf, Object),
      Qe = Object.create,
      ne = IV.propertyIsEnumerable,
      we = sV.splice,
      Ze = Object.getOwnPropertySymbols,
      ve = Ye ? Ye.isBuffer : void 0,
      re = HV(Object.keys, Object),
      ke = he(aV, "DataView"),
      be = he(aV, "Map"),
      Ee = he(aV, "Promise"),
      Be = he(aV, "Set"),
      je = he(aV, "WeakMap"),
      qe = he(Object, "create"),
      te = Ke(ke),
      Fe = Ke(be),
      Te = Ke(Ee),
      Pe = Ke(Be),
      Ae = Ke(je),
      Ne = Ue ? Ue.prototype : void 0,
      Xe = Ne ? Ne.valueOf : void 0;

    function Me(VV) {
      var eV = -1,
        xV = VV ? VV.length : 0;
      for (this.clear(); ++eV < xV;) {
        var JV = VV[eV];
        this.set(JV[0], JV[1])
      }
    }

    function ze(VV) {
      var eV = -1,
        xV = VV ? VV.length : 0;
      for (this.clear(); ++eV < xV;) {
        var JV = VV[eV];
        this.set(JV[0], JV[1])
      }
    }

    function Ge(VV) {
      var eV = -1,
        xV = VV ? VV.length : 0;
      for (this.clear(); ++eV < xV;) {
        var JV = VV[eV];
        this.set(JV[0], JV[1])
      }
    }

    function We(VV) {
      this.__data__ = new ze(VV)
    }

    function Re(VV, eV) {
      var xV = ue(VV) || function(VV) {
          return function(VV) {
            return function(VV) {
              return !!VV && "object" == typeof VV
            }(VV) && se(VV)
          }(VV) && ee.call(VV, "callee") && (!ne.call(VV, "callee") || xe.call(VV) == UV)
        }(VV) ? function(VV, eV) {
          for (var xV = -1, JV = Array(VV); ++xV < VV;) JV[xV] = eV(xV);
          return JV
        }(VV.length, String) : [],
        JV = xV.length,
        YV = !!JV;
      for (var yV in VV) !eV && !ee.call(VV, yV) || YV && ("length" == yV || fe(yV, JV)) || xV.push(yV);
      return xV
    }

    function ge(VV, eV, xV) {
      var JV = VV[eV];
      ee.call(VV, eV) && He(JV, xV) && (void 0 !== xV || eV in VV) || (VV[eV] = xV)
    }

    function De(VV, eV) {
      for (var xV = VV.length; xV--;)
        if (He(VV[xV][0], eV)) return xV;
      return -1
    }

    function ie(VV, eV, xV, JV, YV, rV, jV) {
      var RV;
      if (JV && (RV = rV ? JV(VV, YV, rV, jV) : JV(VV)), void 0 !== RV) return RV;
      if (!de(VV)) return VV;
      var gV = ue(VV);
      if (gV) {
        if (RV = function(VV) {
            var eV = VV.length,
              xV = VV.constructor(eV);
            eV && "string" == typeof VV[0] && ee.call(VV, "index") && (xV.index = VV.index, xV.input = VV.input);
            return xV
          }(VV), !eV) return function(VV, eV) {
          var xV = -1,
            JV = VV.length;
          eV || (eV = Array(JV));
          for (; ++xV < JV;) eV[xV] = VV[xV];
          return eV
        }(VV, RV)
      } else {
        var iV = Le(VV),
          CV = iV == QV || iV == nV;
        if (Se(VV)) return function(VV, eV) {
          if (eV) return VV.slice();
          var xV = new VV.constructor(VV.length);
          return VV.copy(xV), xV
        }(VV, eV);
        if (iV == vV || iV == UV || CV && !rV) {
          if (mV(VV)) return rV ? VV : {};
          if (RV = function(VV) {
              return "function" != typeof VV.constructor || me(VV) ? {} : (eV = pe(VV), de(eV) ? Qe(eV) : {});
              var eV
            }(CV ? {} : VV), !eV) return function(VV, eV) {
            return oe(VV, le(VV), eV)
          }(VV, function(VV, eV) {
            return VV && oe(eV, Oe(eV), VV)
          }(RV, VV))
        } else {
          if (!DV[iV]) return rV ? VV : {};
          RV = function(VV, eV, xV, JV) {
            var YV = VV.constructor;
            switch (eV) {
              case qV:
                return ae(VV);
              case yV:
              case pV:
                return new YV(+VV);
              case tV:
                return function(VV, eV) {
                  var xV = eV ? ae(VV.buffer) : VV.buffer;
                  return new VV.constructor(xV, VV.byteOffset, VV.byteLength)
                }(VV, JV);
              case FV:
              case TV:
              case PV:
              case AV:
              case NV:
              case XV:
              case MV:
              case zV:
              case GV:
                return function(VV, eV) {
                  var xV = eV ? ae(VV.buffer) : VV.buffer;
                  return new VV.constructor(xV, VV.byteOffset, VV.length)
                }(VV, JV);
              case wV:
                return function(VV, eV, xV) {
                  var JV = eV ? xV(KV(VV), !0) : KV(VV);
                  return fV(JV, lV, new VV.constructor)
                }(VV, JV, xV);
              case ZV:
              case EV:
                return new YV(VV);
              case kV:
                return function(VV) {
                  var eV = new VV.constructor(VV.source, WV.exec(VV));
                  return eV.lastIndex = VV.lastIndex, eV
                }(VV);
              case bV:
                return function(VV, eV, xV) {
                  var JV = eV ? xV(uV(VV), !0) : uV(VV);
                  return fV(JV, LV, new VV.constructor)
                }(VV, JV, xV);
              case BV:
                return UV = VV, Xe ? Object(Xe.call(UV)) : {}
            }
            var UV
          }(VV, iV, ie, eV)
        }
      }
      jV || (jV = new We);
      var aV = jV.get(VV);
      if (aV) return aV;
      if (jV.set(VV, RV), !gV) var oV = xV ? function(VV) {
        return function(VV, eV, xV) {
          var JV = eV(VV);
          return ue(VV) ? JV : function(VV, eV) {
            for (var xV = -1, JV = eV.length, YV = VV.length; ++xV < JV;) VV[YV + xV] = eV[xV];
            return VV
          }(JV, xV(VV))
        }(VV, Oe, le)
      }(VV) : Oe(VV);
      return function(VV, eV) {
        for (var xV = -1, JV = VV ? VV.length : 0; ++xV < JV && !1 !== eV(VV[xV], xV, VV););
      }(oV || VV, (function(YV, UV) {
        oV && (YV = VV[UV = YV]), ge(RV, UV, ie(YV, eV, xV, JV, UV, VV, jV))
      })), RV
    }

    function Ce(VV) {
      return !(!de(VV) || (eV = VV, OV && OV in eV)) && (Ie(VV) || mV(VV) ? Je : RV).test(Ke(VV));
      var eV
    }

    function ae(VV) {
      var eV = new VV.constructor(VV.byteLength);
      return new ye(eV).set(new ye(VV)), eV
    }

    function oe(VV, eV, xV, JV) {
      xV || (xV = {});
      for (var YV = -1, UV = eV.length; ++YV < UV;) {
        var yV = eV[YV],
          pV = JV ? JV(xV[yV], VV[yV], yV, xV, VV) : void 0;
        ge(xV, yV, void 0 === pV ? VV[yV] : pV)
      }
      return xV
    }

    function ce(VV, eV) {
      var xV = VV.__data__;
      return function(VV) {
        var eV = typeof VV;
        return "string" == eV || "number" == eV || "symbol" == eV || "boolean" == eV ? "__proto__" !== VV : null === VV
      }(eV) ? xV["string" == typeof eV ? "string" : "hash"] : xV.map
    }

    function he(VV, eV) {
      var xV = function(VV, eV) {
        return null == VV ? void 0 : VV[eV]
      }(VV, eV);
      return Ce(xV) ? xV : void 0
    }
    Me.prototype.clear = function() {
      this.__data__ = qe ? qe(null) : {}
    }, Me.prototype.delete = function(VV) {
      return this.has(VV) && delete this.__data__[VV]
    }, Me.prototype.get = function(VV) {
      var eV = this.__data__;
      if (qe) {
        var xV = eV[VV];
        return xV === JV ? void 0 : xV
      }
      return ee.call(eV, VV) ? eV[VV] : void 0
    }, Me.prototype.has = function(VV) {
      var eV = this.__data__;
      return qe ? void 0 !== eV[VV] : ee.call(eV, VV)
    }, Me.prototype.set = function(VV, eV) {
      return this.__data__[VV] = qe && void 0 === eV ? JV : eV, this
    }, ze.prototype.clear = function() {
      this.__data__ = []
    }, ze.prototype.delete = function(VV) {
      var eV = this.__data__,
        xV = De(eV, VV);
      return !(xV < 0) && (xV == eV.length - 1 ? eV.pop() : we.call(eV, xV, 1), !0)
    }, ze.prototype.get = function(VV) {
      var eV = this.__data__,
        xV = De(eV, VV);
      return xV < 0 ? void 0 : eV[xV][1]
    }, ze.prototype.has = function(VV) {
      return De(this.__data__, VV) > -1
    }, ze.prototype.set = function(VV, eV) {
      var xV = this.__data__,
        JV = De(xV, VV);
      return JV < 0 ? xV.push([VV, eV]) : xV[JV][1] = eV, this
    }, Ge.prototype.clear = function() {
      this.__data__ = {
        hash: new Me,
        map: new(be || ze),
        string: new Me
      }
    }, Ge.prototype.delete = function(VV) {
      return ce(this, VV).delete(VV)
    }, Ge.prototype.get = function(VV) {
      return ce(this, VV).get(VV)
    }, Ge.prototype.has = function(VV) {
      return ce(this, VV).has(VV)
    }, Ge.prototype.set = function(VV, eV) {
      return ce(this, VV).set(VV, eV), this
    }, We.prototype.clear = function() {
      this.__data__ = new ze
    }, We.prototype.delete = function(VV) {
      return this.__data__.delete(VV)
    }, We.prototype.get = function(VV) {
      return this.__data__.get(VV)
    }, We.prototype.has = function(VV) {
      return this.__data__.has(VV)
    }, We.prototype.set = function(VV, eV) {
      var xV = this.__data__;
      if (xV instanceof ze) {
        var JV = xV.__data__;
        if (!be || JV.length < 199) return JV.push([VV, eV]), this;
        xV = this.__data__ = new Ge(JV)
      }
      return xV.set(VV, eV), this
    };
    var le = Ze ? HV(Ze, Object) : function() {
        return []
      },
      Le = function(VV) {
        return xe.call(VV)
      };

    function fe(VV, eV) {
      return !!(eV = null == eV ? YV : eV) && ("number" == typeof VV || gV.test(VV)) && VV > -1 && VV % 1 == 0 && VV < eV
    }

    function me(VV) {
      var eV = VV && VV.constructor;
      return VV === ("function" == typeof eV && eV.prototype || IV)
    }

    function Ke(VV) {
      if (null != VV) {
        try {
          return Ve.call(VV)
        } catch (eV) {}
        try {
          return VV + ""
        } catch (eV) {}
      }
      return ""
    }

    function He(VV, eV) {
      return VV === eV || VV !== VV && eV !== eV
    }(ke && Le(new ke(new ArrayBuffer(1))) != tV || be && Le(new be) != wV || Ee && Le(Ee.resolve()) != rV || Be && Le(new Be) != bV || je && Le(new je) != jV) && (Le = function(VV) {
      var eV = xe.call(VV),
        xV = eV == vV ? VV.constructor : void 0,
        JV = xV ? Ke(xV) : void 0;
      if (JV) switch (JV) {
        case te:
          return tV;
        case Fe:
          return wV;
        case Te:
          return rV;
        case Pe:
          return bV;
        case Ae:
          return jV
      }
      return eV
    });
    var ue = Array.isArray;

    function se(VV) {
      return null != VV && function(VV) {
        return "number" == typeof VV && VV > -1 && VV % 1 == 0 && VV <= YV
      }(VV.length) && !Ie(VV)
    }
    var Se = ve || function() {
      return !1
    };

    function Ie(VV) {
      var eV = de(VV) ? xe.call(VV) : "";
      return eV == QV || eV == nV
    }

    function de(VV) {
      var eV = typeof VV;
      return !!VV && ("object" == eV || "function" == eV)
    }

    function Oe(VV) {
      return se(VV) ? Re(VV) : function(VV) {
        if (!me(VV)) return re(VV);
        var eV = [];
        for (var xV in Object(VV)) ee.call(VV, xV) && "constructor" != xV && eV.push(xV);
        return eV
      }(VV)
    }
    VV.exports = function(VV) {
      return ie(VV, !0, !0)
    }
  },
  39605: VV => {
    function eV(VV, eV, xV) {
      for (var JV = VV.length, YV = -1 / 0, UV = 1 / 0, yV = 0; yV < JV; yV++) {
        var pV = (xV[0][yV] - VV[yV]) / eV[yV],
          QV = (xV[1][yV] - VV[yV]) / eV[yV];
        if (pV > QV) {
          var nV = pV;
          pV = QV, QV = nV
        }
        if (QV < YV || pV > UV) return 1 / 0;
        pV > YV && (YV = pV), QV < UV && (UV = QV)
      }
      return YV > UV ? 1 / 0 : YV
    }
    VV.exports = function(VV, xV, JV, YV) {
      var UV = eV(xV, JV, YV);
      if (UV === 1 / 0) VV = null;
      else {
        VV = VV || [];
        for (var yV = 0; yV < xV.length; yV++) VV[yV] = xV[yV] + JV[yV] * UV
      }
      return VV
    }, VV.exports.distance = eV
  },
  38881: (VV, eV, xV) => {
    var JV = xV(38888);

    function YV(VV) {
      for (var eV, xV, YV = 0, UV = VV.length, yV = 0; yV < VV.length;) {
        for (eV = VV[yV], xV = 0; yV < UV && VV[yV] === eV;) ++yV, ++xV;
        YV += JV.log2(xV) / 7 | 0, YV += JV.log2(eV >>> 0) / 7 | 0, YV += 2
      }
      return YV
    }
    eV.size = YV, eV.encode = function(VV, eV) {
      eV || (eV = new Uint8Array(YV(VV)));
      for (var xV, JV, UV = 0, yV = eV.length, pV = 0; pV < VV.length;) {
        for (xV = VV[pV], JV = 0; pV < VV.length && VV[pV] === xV;) ++pV, ++JV;
        for (; UV < yV && JV >= 128;) eV[UV++] = 128 + (127 & JV), JV >>>= 7;
        if (UV >= yV) throw new Error("RLE buffer overflow");
        for (eV[UV++] = JV, xV >>>= 0; UV < yV && xV >= 128;) eV[UV++] = 128 + (127 & xV), xV >>>= 7;
        if (UV >= yV) throw new Error("RLE buffer overflow");
        eV[UV++] = xV
      }
      return eV
    }, eV.decode = function(VV, eV) {
      for (var xV, JV, YV, UV, yV = eV.length, pV = VV.length, QV = 0, nV = 0; nV < pV;) {
        for (xV = 0, JV = 0; nV < pV && VV[nV] >= 128;) xV += (127 & VV[nV++]) << JV, JV += 7;
        if (xV += VV[nV++] << JV, nV >= pV) throw new Error("RLE buffer underrun");
        if (QV + xV > yV) throw new Error("Chunk buffer overflow");
        for (YV = 0, JV = 0; nV < pV && VV[nV] >= 128;) YV += (127 & VV[nV++]) << JV, JV += 7;
        if (nV >= pV) throw new Error("RLE buffer underrun");
        for (YV += VV[nV++] << JV, UV = 0; UV < xV; ++UV) eV[QV++] = YV
      }
      return eV
    }
  },
  38888: (VV, eV) => {
    function xV(VV) {
      var eV = 32;
      return (VV &= -VV) && eV--, 65535 & VV && (eV -= 16), 16711935 & VV && (eV -= 8), 252645135 & VV && (eV -= 4), 858993459 & VV && (eV -= 2), 1431655765 & VV && (eV -= 1), eV
    }
    eV.INT_BITS = 32, eV.INT_MAX = 2147483647, eV.INT_MIN = -1 << 31, eV.sign = function(VV) {
      return (VV > 0) - (VV < 0)
    }, eV.abs = function(VV) {
      var eV = VV >> 31;
      return (VV ^ eV) - eV
    }, eV.min = function(VV, eV) {
      return eV ^ (VV ^ eV) & -(VV < eV)
    }, eV.max = function(VV, eV) {
      return VV ^ (VV ^ eV) & -(VV < eV)
    }, eV.isPow2 = function(VV) {
      return !(VV & VV - 1) && !!VV
    }, eV.log2 = function(VV) {
      var eV, xV;
      return eV = (VV > 65535) << 4, eV |= xV = ((VV >>>= eV) > 255) << 3, eV |= xV = ((VV >>>= xV) > 15) << 2, (eV |= xV = ((VV >>>= xV) > 3) << 1) | (VV >>>= xV) >> 1
    }, eV.log10 = function(VV) {
      return VV >= 1e9 ? 9 : VV >= 1e8 ? 8 : VV >= 1e7 ? 7 : VV >= 1e6 ? 6 : VV >= 1e5 ? 5 : VV >= 1e4 ? 4 : VV >= 1e3 ? 3 : VV >= 100 ? 2 : VV >= 10 ? 1 : 0
    }, eV.popCount = function(VV) {
      return 16843009 * ((VV = (858993459 & (VV -= VV >>> 1 & 1431655765)) + (VV >>> 2 & 858993459)) + (VV >>> 4) & 252645135) >>> 24
    }, eV.countTrailingZeros = xV, eV.nextPow2 = function(VV) {
      return VV += 0 === VV, --VV, VV |= VV >>> 1, VV |= VV >>> 2, VV |= VV >>> 4, VV |= VV >>> 8, (VV |= VV >>> 16) + 1
    }, eV.prevPow2 = function(VV) {
      return VV |= VV >>> 1, VV |= VV >>> 2, VV |= VV >>> 4, VV |= VV >>> 8, (VV |= VV >>> 16) - (VV >>> 1)
    }, eV.parity = function(VV) {
      return VV ^= VV >>> 16, VV ^= VV >>> 8, VV ^= VV >>> 4, 27030 >>> (VV &= 15) & 1
    };
    var JV = new Array(256);
    ! function(VV) {
      for (var eV = 0; eV < 256; ++eV) {
        var xV = eV,
          JV = eV,
          YV = 7;
        for (xV >>>= 1; xV; xV >>>= 1) JV <<= 1, JV |= 1 & xV, --YV;
        VV[eV] = JV << YV & 255
      }
    }(JV), eV.reverse = function(VV) {
      return JV[255 & VV] << 24 | JV[VV >>> 8 & 255] << 16 | JV[VV >>> 16 & 255] << 8 | JV[VV >>> 24 & 255]
    }, eV.interleave2 = function(VV, eV) {
      return (VV = 1431655765 & ((VV = 858993459 & ((VV = 252645135 & ((VV = 16711935 & ((VV &= 65535) | VV << 8)) | VV << 4)) | VV << 2)) | VV << 1)) | (eV = 1431655765 & ((eV = 858993459 & ((eV = 252645135 & ((eV = 16711935 & ((eV &= 65535) | eV << 8)) | eV << 4)) | eV << 2)) | eV << 1)) << 1
    }, eV.deinterleave2 = function(VV, eV) {
      return (VV = 65535 & ((VV = 16711935 & ((VV = 252645135 & ((VV = 858993459 & ((VV = VV >>> eV & 1431655765) | VV >>> 1)) | VV >>> 2)) | VV >>> 4)) | VV >>> 16)) << 16 >> 16
    }, eV.interleave3 = function(VV, eV, xV) {
      return VV = 1227133513 & ((VV = 3272356035 & ((VV = 251719695 & ((VV = 4278190335 & ((VV &= 1023) | VV << 16)) | VV << 8)) | VV << 4)) | VV << 2), (VV |= (eV = 1227133513 & ((eV = 3272356035 & ((eV = 251719695 & ((eV = 4278190335 & ((eV &= 1023) | eV << 16)) | eV << 8)) | eV << 4)) | eV << 2)) << 1) | (xV = 1227133513 & ((xV = 3272356035 & ((xV = 251719695 & ((xV = 4278190335 & ((xV &= 1023) | xV << 16)) | xV << 8)) | xV << 4)) | xV << 2)) << 2
    }, eV.deinterleave3 = function(VV, eV) {
      return (VV = 1023 & ((VV = 4278190335 & ((VV = 251719695 & ((VV = 3272356035 & ((VV = VV >>> eV & 1227133513) | VV >>> 2)) | VV >>> 4)) | VV >>> 8)) | VV >>> 16)) << 22 >> 22
    }, eV.nextCombination = function(VV) {
      var eV = VV | VV - 1;
      return eV + 1 | (~eV & -~eV) - 1 >>> xV(VV) + 1
    }
  },
  38387: (VV, eV, xV) => {
    xV.d(eV, {
      Color3: () => JV.d,
      c: () => JV.h
    });
    var JV = xV(38389);
    (0, JV.i)()
  },
  38908: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => YV
    });
    var JV = xV(38917);
    class YV {
      static GetPlanes(VV) {
        const eV = [];
        for (let xV = 0; xV < 6; xV++) eV.push(new JV.d(0, 0, 0, 0));
        return YV.GetPlanesToRef(VV, eV), eV
      }
      static GetNearPlaneToRef(VV, eV) {
        const xV = VV.m;
        eV.normal.x = xV[3] + xV[2], eV.normal.y = xV[7] + xV[6], eV.normal.z = xV[11] + xV[10], eV.d = xV[15] + xV[14], eV.normalize()
      }
      static GetFarPlaneToRef(VV, eV) {
        const xV = VV.m;
        eV.normal.x = xV[3] - xV[2], eV.normal.y = xV[7] - xV[6], eV.normal.z = xV[11] - xV[10], eV.d = xV[15] - xV[14], eV.normalize()
      }
      static GetLeftPlaneToRef(VV, eV) {
        const xV = VV.m;
        eV.normal.x = xV[3] + xV[0], eV.normal.y = xV[7] + xV[4], eV.normal.z = xV[11] + xV[8], eV.d = xV[15] + xV[12], eV.normalize()
      }
      static GetRightPlaneToRef(VV, eV) {
        const xV = VV.m;
        eV.normal.x = xV[3] - xV[0], eV.normal.y = xV[7] - xV[4], eV.normal.z = xV[11] - xV[8], eV.d = xV[15] - xV[12], eV.normalize()
      }
      static GetTopPlaneToRef(VV, eV) {
        const xV = VV.m;
        eV.normal.x = xV[3] - xV[1], eV.normal.y = xV[7] - xV[5], eV.normal.z = xV[11] - xV[9], eV.d = xV[15] - xV[13], eV.normalize()
      }
      static GetBottomPlaneToRef(VV, eV) {
        const xV = VV.m;
        eV.normal.x = xV[3] + xV[1], eV.normal.y = xV[7] + xV[5], eV.normal.z = xV[11] + xV[9], eV.d = xV[15] + xV[13], eV.normalize()
      }
      static GetPlanesToRef(VV, eV) {
        YV.GetNearPlaneToRef(VV, eV[0]), YV.GetFarPlaneToRef(VV, eV[1]), YV.GetLeftPlaneToRef(VV, eV[2]), YV.GetRightPlaneToRef(VV, eV[3]), YV.GetTopPlaneToRef(VV, eV[4]), YV.GetBottomPlaneToRef(VV, eV[5])
      }
      static IsPointInFrustum(VV, eV) {
        for (let xV = 0; xV < 6; xV++)
          if (eV[xV].dotCoordinate(VV) < 0) return !1;
        return !0
      }
    }
  },
  38917: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => YV
    });
    var JV = xV(38269);
    class YV {
      constructor(VV, eV, xV, YV) {
        this.normal = new JV.o(VV, eV, xV), this.d = YV
      }
      WYV() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new YV(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let VV = this.normal.getHashCode();
        return VV = 397 * VV ^ this.d, VV
      }
      normalize() {
        const VV = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let eV = 0;
        return 0 !== VV && (eV = 1 / VV), this.normal.x *= eV, this.normal.y *= eV, this.normal.z *= eV, this.d *= eV, this
      }
      transform(VV) {
        const eV = YV._TmpMatrix;
        VV.invertToRef(eV);
        const xV = eV.m,
          JV = this.normal.x,
          UV = this.normal.y,
          yV = this.normal.z,
          pV = this.d,
          QV = JV * xV[0] + UV * xV[1] + yV * xV[2] + pV * xV[3],
          nV = JV * xV[4] + UV * xV[5] + yV * xV[6] + pV * xV[7],
          wV = JV * xV[8] + UV * xV[9] + yV * xV[10] + pV * xV[11],
          ZV = JV * xV[12] + UV * xV[13] + yV * xV[14] + pV * xV[15];
        return new YV(QV, nV, wV, ZV)
      }
      dotCoordinate(VV) {
        return this.normal.x * VV.x + this.normal.y * VV.y + this.normal.z * VV.z + this.d
      }
      copyFromPoints(VV, eV, xV) {
        const JV = eV.x - VV.x,
          YV = eV.y - VV.y,
          UV = eV.z - VV.z,
          yV = xV.x - VV.x,
          pV = xV.y - VV.y,
          QV = xV.z - VV.z,
          nV = YV * QV - UV * pV,
          wV = UV * yV - JV * QV,
          ZV = JV * pV - YV * yV,
          vV = Math.sqrt(nV * nV + wV * wV + ZV * ZV);
        let rV;
        return rV = 0 !== vV ? 1 / vV : 0, this.normal.x = nV * rV, this.normal.y = wV * rV, this.normal.z = ZV * rV, this.d = -(this.normal.x * VV.x + this.normal.y * VV.y + this.normal.z * VV.z), this
      }
      isFrontFacingTo(VV, eV) {
        return JV.o.Dot(this.normal, VV) <= eV
      }
      signedDistanceTo(VV) {
        return JV.o.Dot(VV, this.normal) + this.d
      }
      static FromArray(VV) {
        return new YV(VV[0], VV[1], VV[2], VV[3])
      }
      static FromPoints(VV, eV, xV) {
        const JV = new YV(0, 0, 0, 0);
        return JV.copyFromPoints(VV, eV, xV), JV
      }
      static FromPositionAndNormal(VV, eV) {
        const xV = new YV(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(VV, eV, xV)
      }
      static FromPositionAndNormalToRef(VV, eV, xV) {
        return xV.normal.iG(eV), xV.normal.normalize(), xV.d = -VV.dot(xV.normal), xV
      }
      static SignedDistanceToPlaneFromPositionAndNormal(VV, eV, xV) {
        const YV = -(eV.x * VV.x + eV.y * VV.y + eV.z * VV.z);
        return JV.o.Dot(xV, eV) + YV
      }
    }
    YV._TmpMatrix = JV.d.Identity()
  },
  38263: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      Matrix: () => JV.d,
      Quaternion: () => JV.h,
      RegisterMathVector: () => JV.j,
      TmpVectors: () => JV.l,
      Vector2: () => JV.n,
      Ik: () => JV.o,
      Vector4: () => JV.q
    });
    var JV = xV(38269);
    (0, JV.j)()
  },
  39240: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => JV
    });
    class JV {
      constructor(VV, eV, xV, JV) {
        this.x = VV, this.y = eV, this.width = xV, this.height = JV
      }
      toGlobal(VV, eV) {
        return new JV(this.x * VV, this.y * eV, this.width * VV, this.height * eV)
      }
      toGlobalToRef(VV, eV, xV) {
        return xV.x = this.x * VV, xV.y = this.y * eV, xV.width = this.width * VV, xV.height = this.height * eV, this
      }
      clone() {
        return new JV(this.x, this.y, this.width, this.height)
      }
    }
  },
  39058: (VV, eV, xV) => {
    function JV() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (VV => {
        const eV = 16 * Math.random() | 0;
        return ("x" === VV ? eV : 3 & eV | 8).toString(16)
      }))
    }
    xV.d(eV, {
      d: () => JV
    })
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);