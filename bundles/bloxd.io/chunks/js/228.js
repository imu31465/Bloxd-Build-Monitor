/*! For license information please see tz47m9.228.73a7f842.chunk.js.LICENSE.txt */
export const id = 228;
export const ids = [228, 235];
export const modules = {
  38265: DD => {
    DD.exports = function(DD) {
      return null != DD && null != DD.constructor && "function" === typeof DD.constructor.isBuffer && DD.constructor.isBuffer(DD)
    }
  },
  38252: (DD, zD, wD) => {
    var pD = wD(38256),
      sD = wD(38259),
      KD = wD(38265);
    wD.g.__TYPEDARRAY_POOL || (wD.g.__TYPEDARRAY_POOL = {
      UINT8: sD([32, 0]),
      UINT16: sD([32, 0]),
      UINT32: sD([32, 0]),
      INT8: sD([32, 0]),
      INT16: sD([32, 0]),
      INT32: sD([32, 0]),
      FLOAT: sD([32, 0]),
      DOUBLE: sD([32, 0]),
      DATA: sD([32, 0]),
      UINT8C: sD([32, 0]),
      BUFFER: sD([32, 0])
    });
    var rD = "undefined" !== typeof Uint8ClampedArray,
      LD = wD.g.__TYPEDARRAY_POOL;
    LD.UINT8C || (LD.UINT8C = sD([32, 0])), LD.BUFFER || (LD.BUFFER = sD([32, 0]));
    var cD = LD.DATA,
      gD = LD.BUFFER;

    function RD(DD) {
      if (DD) {
        var zD = DD.length || DD.byteLength,
          wD = pD.log2(zD);
        cD[wD].push(DD)
      }
    }

    function AD(DD) {
      DD = pD.nextPow2(DD);
      var zD = pD.log2(DD),
        wD = cD[zD];
      return wD.length > 0 ? wD.pop() : new ArrayBuffer(DD)
    }

    function UD(DD) {
      return new Uint8Array(AD(DD), 0, DD)
    }

    function fD(DD) {
      return new Uint16Array(AD(2 * DD), 0, DD)
    }

    function ID(DD) {
      return new Uint32Array(AD(4 * DD), 0, DD)
    }

    function BD(DD) {
      return new Int8Array(AD(DD), 0, DD)
    }

    function GD(DD) {
      return new Int16Array(AD(2 * DD), 0, DD)
    }

    function hD(DD) {
      return new Int32Array(AD(4 * DD), 0, DD)
    }

    function nD(DD) {
      return new Float32Array(AD(4 * DD), 0, DD)
    }

    function MD(DD) {
      return new Float64Array(AD(8 * DD), 0, DD)
    }

    function OD(DD) {
      return rD ? new Uint8ClampedArray(AD(DD), 0, DD) : UD(DD)
    }

    function JD(DD) {
      return new DataView(AD(DD), 0, DD)
    }
    zD.free = function(DD) {
      if (KD(DD)) gD[pD.log2(DD.length)].push(DD);
      else {
        if ("[object ArrayBuffer]" !== Object.prototype.toString.call(DD) && (DD = DD.buffer), !DD) return;
        var zD = DD.length || DD.byteLength,
          wD = 0 | pD.log2(zD);
        cD[wD].push(DD)
      }
    }, zD.freeUint8 = zD.freeUint16 = zD.freeUint32 = zD.freeInt8 = zD.freeInt16 = zD.freeInt32 = zD.freeFloat32 = zD.freeFloat = zD.freeFloat64 = zD.freeDouble = zD.freeUint8Clamped = zD.freeDataView = function(DD) {
      RD(DD.buffer)
    }, zD.freeArrayBuffer = RD, zD.freeBuffer = function(DD) {
      gD[pD.log2(DD.length)].push(DD)
    }, zD.malloc = function(DD, zD) {
      if (void 0 === zD || "arraybuffer" === zD) return AD(DD);
      switch (zD) {
        case "uint8":
          return UD(DD);
        case "uint16":
          return fD(DD);
        case "uint32":
          return ID(DD);
        case "int8":
          return BD(DD);
        case "int16":
          return GD(DD);
        case "int32":
          return hD(DD);
        case "float":
        case "float32":
          return nD(DD);
        case "double":
        case "float64":
          return MD(DD);
        case "uint8_clamped":
          return OD(DD);
        case "buffer":
          throw "Buffer not supported";
        case "data":
        case "dataview":
          return JD(DD);
        default:
          return null
      }
      return null
    }, zD.mallocArrayBuffer = AD, zD.mallocUint8 = UD, zD.mallocUint16 = fD, zD.mallocUint32 = ID, zD.mallocInt8 = BD, zD.mallocInt16 = GD, zD.mallocInt32 = hD, zD.mallocFloat32 = zD.mallocFloat = nD, zD.mallocFloat64 = zD.mallocDouble = MD, zD.mallocUint8Clamped = OD, zD.mallocDataView = JD, zD.clearCache = function() {
      for (var DD = 0; DD < 32; ++DD) LD.UINT8[DD].length = 0, LD.UINT16[DD].length = 0, LD.UINT32[DD].length = 0, LD.INT8[DD].length = 0, LD.INT16[DD].length = 0, LD.INT32[DD].length = 0, LD.FLOAT[DD].length = 0, LD.DOUBLE[DD].length = 0, LD.UINT8C[DD].length = 0, cD[DD].length = 0, gD[DD].length = 0
    }
  },
  38256: (DD, zD) => {
    function wD(DD) {
      var zD = 32;
      return (DD &= -DD) && zD--, 65535 & DD && (zD -= 16), 16711935 & DD && (zD -= 8), 252645135 & DD && (zD -= 4), 858993459 & DD && (zD -= 2), 1431655765 & DD && (zD -= 1), zD
    }
    zD.INT_BITS = 32, zD.INT_MAX = 2147483647, zD.INT_MIN = -1 << 31, zD.sign = function(DD) {
      return (DD > 0) - (DD < 0)
    }, zD.abs = function(DD) {
      var zD = DD >> 31;
      return (DD ^ zD) - zD
    }, zD.min = function(DD, zD) {
      return zD ^ (DD ^ zD) & -(DD < zD)
    }, zD.max = function(DD, zD) {
      return DD ^ (DD ^ zD) & -(DD < zD)
    }, zD.isPow2 = function(DD) {
      return !(DD & DD - 1) && !!DD
    }, zD.log2 = function(DD) {
      var zD, wD;
      return zD = (DD > 65535) << 4, zD |= wD = ((DD >>>= zD) > 255) << 3, zD |= wD = ((DD >>>= wD) > 15) << 2, (zD |= wD = ((DD >>>= wD) > 3) << 1) | (DD >>>= wD) >> 1
    }, zD.log10 = function(DD) {
      return DD >= 1e9 ? 9 : DD >= 1e8 ? 8 : DD >= 1e7 ? 7 : DD >= 1e6 ? 6 : DD >= 1e5 ? 5 : DD >= 1e4 ? 4 : DD >= 1e3 ? 3 : DD >= 100 ? 2 : DD >= 10 ? 1 : 0
    }, zD.popCount = function(DD) {
      return 16843009 * ((DD = (858993459 & (DD -= DD >>> 1 & 1431655765)) + (DD >>> 2 & 858993459)) + (DD >>> 4) & 252645135) >>> 24
    }, zD.countTrailingZeros = wD, zD.nextPow2 = function(DD) {
      return DD += 0 === DD, --DD, DD |= DD >>> 1, DD |= DD >>> 2, DD |= DD >>> 4, DD |= DD >>> 8, (DD |= DD >>> 16) + 1
    }, zD.prevPow2 = function(DD) {
      return DD |= DD >>> 1, DD |= DD >>> 2, DD |= DD >>> 4, DD |= DD >>> 8, (DD |= DD >>> 16) - (DD >>> 1)
    }, zD.parity = function(DD) {
      return DD ^= DD >>> 16, DD ^= DD >>> 8, DD ^= DD >>> 4, 27030 >>> (DD &= 15) & 1
    };
    var pD = new Array(256);
    ! function(DD) {
      for (var zD = 0; zD < 256; ++zD) {
        var wD = zD,
          pD = zD,
          sD = 7;
        for (wD >>>= 1; wD; wD >>>= 1) pD <<= 1, pD |= 1 & wD, --sD;
        DD[zD] = pD << sD & 255
      }
    }(pD), zD.reverse = function(DD) {
      return pD[255 & DD] << 24 | pD[DD >>> 8 & 255] << 16 | pD[DD >>> 16 & 255] << 8 | pD[DD >>> 24 & 255]
    }, zD.interleave2 = function(DD, zD) {
      return (DD = 1431655765 & ((DD = 858993459 & ((DD = 252645135 & ((DD = 16711935 & ((DD &= 65535) | DD << 8)) | DD << 4)) | DD << 2)) | DD << 1)) | (zD = 1431655765 & ((zD = 858993459 & ((zD = 252645135 & ((zD = 16711935 & ((zD &= 65535) | zD << 8)) | zD << 4)) | zD << 2)) | zD << 1)) << 1
    }, zD.deinterleave2 = function(DD, zD) {
      return (DD = 65535 & ((DD = 16711935 & ((DD = 252645135 & ((DD = 858993459 & ((DD = DD >>> zD & 1431655765) | DD >>> 1)) | DD >>> 2)) | DD >>> 4)) | DD >>> 16)) << 16 >> 16
    }, zD.interleave3 = function(DD, zD, wD) {
      return DD = 1227133513 & ((DD = 3272356035 & ((DD = 251719695 & ((DD = 4278190335 & ((DD &= 1023) | DD << 16)) | DD << 8)) | DD << 4)) | DD << 2), (DD |= (zD = 1227133513 & ((zD = 3272356035 & ((zD = 251719695 & ((zD = 4278190335 & ((zD &= 1023) | zD << 16)) | zD << 8)) | zD << 4)) | zD << 2)) << 1) | (wD = 1227133513 & ((wD = 3272356035 & ((wD = 251719695 & ((wD = 4278190335 & ((wD &= 1023) | wD << 16)) | wD << 8)) | wD << 4)) | wD << 2)) << 2
    }, zD.deinterleave3 = function(DD, zD) {
      return (DD = 1023 & ((DD = 4278190335 & ((DD = 251719695 & ((DD = 3272356035 & ((DD = DD >>> zD & 1227133513) | DD >>> 2)) | DD >>> 4)) | DD >>> 8)) | DD >>> 16)) << 22 >> 22
    }, zD.nextCombination = function(DD) {
      var zD = DD | DD - 1;
      return zD + 1 | (~zD & -~zD) - 1 >>> wD(DD) + 1
    }
  },
  38243: (DD, zD, wD) => {
    DD.exports = function(DD, zD, wD) {
      switch (arguments.length) {
        case 1:
          return pD = [], gD(sD = DD, sD, RD, !0), pD;
        case 2:
          return "function" === typeof zD ? gD(DD, DD, zD, !0) : function(DD, zD) {
            return pD = [], gD(DD, zD, RD, !1), pD
          }(DD, zD);
        case 3:
          return gD(DD, zD, wD, !1);
        default:
          throw new Error("box-intersect: Invalid arguments")
      }
      var sD
    };
    var pD, sD = wD(38252),
      KD = wD(38273),
      rD = wD(38283);

    function LD(DD, zD) {
      for (var wD = 0; wD < DD; ++wD)
        if (!(zD[wD] <= zD[wD + DD])) return !0;
      return !1
    }

    function cD(DD, zD, wD, pD) {
      for (var sD = 0, KD = 0, rD = 0, cD = DD.length; rD < cD; ++rD) {
        var gD = DD[rD];
        if (!LD(zD, gD)) {
          for (var RD = 0; RD < 2 * zD; ++RD) wD[sD++] = gD[RD];
          pD[KD++] = rD
        }
      }
      return KD
    }

    function gD(DD, zD, wD, pD) {
      var LD = DD.length,
        gD = zD.length;
      if (!(LD <= 0 || gD <= 0)) {
        var RD = DD[0].length >>> 1;
        if (!(RD <= 0)) {
          var AD, UD = sD.mallocDouble(2 * RD * LD),
            fD = sD.mallocInt32(LD);
          if ((LD = cD(DD, RD, UD, fD)) > 0) {
            if (1 === RD && pD) KD.init(LD), AD = KD.sweepComplete(RD, wD, 0, LD, UD, fD, 0, LD, UD, fD);
            else {
              var ID = sD.mallocDouble(2 * RD * gD),
                BD = sD.mallocInt32(gD);
              (gD = cD(zD, RD, ID, BD)) > 0 && (KD.init(LD + gD), AD = 1 === RD ? KD.sweepBipartite(RD, wD, 0, LD, UD, fD, 0, gD, ID, BD) : rD(RD, wD, pD, LD, UD, fD, gD, ID, BD), sD.free(ID), sD.free(BD))
            }
            sD.free(UD), sD.free(fD)
          }
          return AD
        }
      }
    }

    function RD(DD, zD) {
      pD.push([DD, zD])
    }
  },
  38290: (DD, zD) => {
    var wD = "d",
      pD = "ax",
      sD = "fp",
      KD = "es",
      rD = "rs",
      LD = "re",
      cD = "rb",
      gD = "bs",
      RD = "be",
      AD = "bb",
      UD = [wD, pD, "vv", rD, LD, cD, "ri", gD, RD, AD, "bi"];

    function fD(DD) {
      var zD = "bruteForce" + (DD ? "Full" : "Partial"),
        pD = [],
        rD = UD.slice();
      DD || rD.splice(3, 0, sD);
      var LD = ["function " + zD + "(" + rD.join() + "){"];

      function cD(zD, sD) {
        var rD = function(DD, zD, pD) {
          var sD = "bruteForce" + (DD ? "Red" : "Blue") + (zD ? "Flip" : "") + (pD ? "Full" : ""),
            rD = ["function ", sD, "(", UD.join(), "){", "var ", KD, "=2*", wD, ";"],
            LD = "for(var i=rs,rp=es*rs;i<re;++i,rp+=es){var x0=rb[ax+rp],x1=rb[ax+rp+d],xi=ri[i];",
            cD = "for(var j=bs,bp=es*bs;j<be;++j,bp+=es){var y0=bb[ax+bp]," + (pD ? "y1=bb[ax+bp+d]," : "") + "yi=bi[j];";
          return DD ? rD.push(LD, "Q", ":", cD) : rD.push(cD, "Q", ":", LD), pD ? rD.push("if(y1<x0||x1<y0)continue;") : zD ? rD.push("if(y0<=x0||x1<y0)continue;") : rD.push("if(y0<x0||x1<y0)continue;"), rD.push("for(var k=ax+1;k<d;++k){var r0=rb[k+rp],r1=rb[k+d+rp],b0=bb[k+bp],b1=bb[k+d+bp];if(r1<b0||b1<r0)continue Q;}var rv=vv("), zD ? rD.push("yi,xi") : rD.push("xi,yi"), rD.push(");if(rv!==void 0)return rv;}}}"), {
            name: sD,
            code: rD.join("")
          }
        }(zD, sD, DD);
        pD.push(rD.code), LD.push("return " + rD.name + "(" + UD.join() + ");")
      }
      LD.push("if(re-rs>be-bs){"), DD ? (cD(!0, !1), LD.push("}else{"), cD(!1, !1)) : (LD.push("if(fp){"), cD(!0, !0), LD.push("}else{"), cD(!0, !1), LD.push("}}else{if(fp){"), cD(!1, !0), LD.push("}else{"), cD(!1, !1), LD.push("}")), LD.push("}}return " + zD);
      var gD = pD.join("") + LD.join("");
      return new Function(gD)()
    }
    zD.partial = fD(!1), zD.full = fD(!0)
  },
  38283: (DD, zD, wD) => {
    DD.exports = function(DD, zD, wD, KD, RD, CD, xD, TD, bD) {
      ! function(DD, zD) {
        var wD = 8 * sD.log2(zD + 1) * (DD + 1) | 0,
          KD = sD.nextPow2(OD * wD);
        ED.length < KD && (pD.free(ED), ED = pD.mallocInt32(KD));
        var rD = sD.nextPow2(JD * wD);
        QD.length < rD && (pD.free(QD), QD = pD.mallocDouble(rD))
      }(DD, KD + xD);
      var jD, dD = 0,
        SD = 2 * DD;
      XD(dD++, 0, 0, KD, 0, xD, wD ? 16 : 0, -1 / 0, 1 / 0), wD || XD(dD++, 0, 0, xD, 0, KD, 1, -1 / 0, 1 / 0);
      for (; dD > 0;) {
        var iD = (dD -= 1) * OD,
          lD = ED[iD],
          WD = ED[iD + 1],
          ND = ED[iD + 2],
          ZD = ED[iD + 3],
          yD = ED[iD + 4],
          kD = ED[iD + 5],
          mD = dD * JD,
          eD = QD[mD],
          oD = QD[mD + 1],
          aD = 1 & kD,
          uD = !!(16 & kD),
          vD = RD,
          tD = CD,
          FD = TD,
          YD = bD;
        if (aD && (vD = TD, tD = bD, FD = RD, YD = CD), !(2 & kD && WD >= (ND = GD(DD, lD, WD, ND, vD, tD, oD))) && !(4 & kD && (WD = hD(DD, lD, WD, ND, vD, tD, eD)) >= ND)) {
          var HD = ND - WD,
            qD = yD - ZD;
          if (uD) {
            if (DD * HD * (HD + qD) < fD) {
              if (void 0 !== (jD = cD.scanComplete(DD, lD, zD, WD, ND, vD, tD, ZD, yD, FD, YD))) return jD;
              continue
            }
          } else {
            if (DD * Math.min(HD, qD) < AD) {
              if (void 0 !== (jD = rD(DD, lD, zD, aD, WD, ND, vD, tD, ZD, yD, FD, YD))) return jD;
              continue
            }
            if (DD * HD * qD < UD) {
              if (void 0 !== (jD = cD.scanBipartite(DD, lD, zD, aD, WD, ND, vD, tD, ZD, yD, FD, YD))) return jD;
              continue
            }
          }
          var Dz = ID(DD, lD, WD, ND, vD, tD, eD, oD);
          if (WD < Dz)
            if (DD * (Dz - WD) < AD) {
              if (void 0 !== (jD = LD(DD, lD + 1, zD, WD, Dz, vD, tD, ZD, yD, FD, YD))) return jD
            } else if (lD === DD - 2) {
            if (void 0 !== (jD = aD ? cD.sweepBipartite(DD, zD, ZD, yD, FD, YD, WD, Dz, vD, tD) : cD.sweepBipartite(DD, zD, WD, Dz, vD, tD, ZD, yD, FD, YD))) return jD
          } else XD(dD++, lD + 1, WD, Dz, ZD, yD, aD, -1 / 0, 1 / 0), XD(dD++, lD + 1, ZD, yD, WD, Dz, 1 ^ aD, -1 / 0, 1 / 0);
          if (Dz < ND) {
            var zz = gD(DD, lD, ZD, yD, FD, YD),
              wz = FD[SD * zz + lD],
              pz = BD(DD, lD, zz, yD, FD, YD, wz);
            if (pz < yD && XD(dD++, lD, Dz, ND, pz, yD, (4 | aD) + (uD ? 16 : 0), wz, oD), ZD < zz && XD(dD++, lD, Dz, ND, ZD, zz, (2 | aD) + (uD ? 16 : 0), eD, wz), zz + 1 === pz) {
              if (void 0 !== (jD = uD ? PD(DD, lD, zD, Dz, ND, vD, tD, zz, FD, YD[zz]) : VD(DD, lD, zD, aD, Dz, ND, vD, tD, zz, FD, YD[zz]))) return jD
            } else if (zz < pz) {
              var sz;
              if (uD) {
                if (Dz < (sz = nD(DD, lD, Dz, ND, vD, tD, wz))) {
                  var Kz = BD(DD, lD, Dz, sz, vD, tD, wz);
                  if (lD === DD - 2) {
                    if (Dz < Kz && void 0 !== (jD = cD.sweepComplete(DD, zD, Dz, Kz, vD, tD, zz, pz, FD, YD))) return jD;
                    if (Kz < sz && void 0 !== (jD = cD.sweepBipartite(DD, zD, Kz, sz, vD, tD, zz, pz, FD, YD))) return jD
                  } else Dz < Kz && XD(dD++, lD + 1, Dz, Kz, zz, pz, 16, -1 / 0, 1 / 0), Kz < sz && (XD(dD++, lD + 1, Kz, sz, zz, pz, 0, -1 / 0, 1 / 0), XD(dD++, lD + 1, zz, pz, Kz, sz, 1, -1 / 0, 1 / 0))
                }
              } else Dz < (sz = aD ? MD(DD, lD, Dz, ND, vD, tD, wz) : nD(DD, lD, Dz, ND, vD, tD, wz)) && (lD === DD - 2 ? jD = aD ? cD.sweepBipartite(DD, zD, zz, pz, FD, YD, Dz, sz, vD, tD) : cD.sweepBipartite(DD, zD, Dz, sz, vD, tD, zz, pz, FD, YD) : (XD(dD++, lD + 1, Dz, sz, zz, pz, aD, -1 / 0, 1 / 0), XD(dD++, lD + 1, zz, pz, Dz, sz, 1 ^ aD, -1 / 0, 1 / 0)))
            }
          }
        }
      }
    };
    var pD = wD(38252),
      sD = wD(38256),
      KD = wD(38290),
      rD = KD.partial,
      LD = KD.full,
      cD = wD(38273),
      gD = wD(38297),
      RD = wD(38305),
      AD = 128,
      UD = 1 << 22,
      fD = 1 << 22,
      ID = RD("!(lo>=p0)&&!(p1>=hi)", ["p0", "p1"]),
      BD = RD("lo===p0", ["p0"]),
      GD = RD("lo<p0", ["p0"]),
      hD = RD("hi<=p0", ["p0"]),
      nD = RD("lo<=p0&&p0<=hi", ["p0"]),
      MD = RD("lo<p0&&p0<=hi", ["p0"]),
      OD = 6,
      JD = 2,
      ED = pD.mallocInt32(1024),
      QD = pD.mallocDouble(1024);

    function XD(DD, zD, wD, pD, sD, KD, rD, LD, cD) {
      var gD = OD * DD;
      ED[gD] = zD, ED[gD + 1] = wD, ED[gD + 2] = pD, ED[gD + 3] = sD, ED[gD + 4] = KD, ED[gD + 5] = rD;
      var RD = JD * DD;
      QD[RD] = LD, QD[RD + 1] = cD
    }

    function VD(DD, zD, wD, pD, sD, KD, rD, LD, cD, gD, RD) {
      var AD = 2 * DD,
        UD = cD * AD,
        fD = gD[UD + zD];
      DD: for (var ID = sD, BD = sD * AD; ID < KD; ++ID, BD += AD) {
        var GD = rD[BD + zD],
          hD = rD[BD + zD + DD];
        if (!(fD < GD || hD < fD) && (!pD || fD !== GD)) {
          for (var nD, MD = LD[ID], OD = zD + 1; OD < DD; ++OD) {
            GD = rD[BD + OD], hD = rD[BD + OD + DD];
            var JD = gD[UD + OD],
              ED = gD[UD + OD + DD];
            if (hD < JD || ED < GD) continue DD
          }
          if (void 0 !== (nD = pD ? wD(RD, MD) : wD(MD, RD))) return nD
        }
      }
    }

    function PD(DD, zD, wD, pD, sD, KD, rD, LD, cD, gD) {
      var RD = 2 * DD,
        AD = LD * RD,
        UD = cD[AD + zD];
      DD: for (var fD = pD, ID = pD * RD; fD < sD; ++fD, ID += RD) {
        var BD = rD[fD];
        if (BD !== gD) {
          var GD = KD[ID + zD],
            hD = KD[ID + zD + DD];
          if (!(UD < GD || hD < UD)) {
            for (var nD = zD + 1; nD < DD; ++nD) {
              GD = KD[ID + nD], hD = KD[ID + nD + DD];
              var MD = cD[AD + nD],
                OD = cD[AD + nD + DD];
              if (hD < MD || OD < GD) continue DD
            }
            var JD = wD(BD, gD);
            if (void 0 !== JD) return JD
          }
        }
      }
    }
  },
  38297: (DD, zD, wD) => {
    DD.exports = function(DD, zD, wD, rD, LD, cD) {
      if (rD <= wD + 1) return wD;
      var gD = wD,
        RD = rD,
        AD = rD + wD >>> 1,
        UD = 2 * DD,
        fD = AD,
        ID = LD[UD * AD + zD];
      for (; gD < RD;) {
        if (RD - gD < sD) {
          KD(DD, zD, gD, RD, LD, cD), ID = LD[UD * AD + zD];
          break
        }
        var BD = RD - gD,
          GD = Math.random() * BD + gD | 0,
          hD = LD[UD * GD + zD],
          nD = Math.random() * BD + gD | 0,
          MD = LD[UD * nD + zD],
          OD = Math.random() * BD + gD | 0,
          JD = LD[UD * OD + zD];
        hD <= MD ? JD >= MD ? (fD = nD, ID = MD) : hD >= JD ? (fD = GD, ID = hD) : (fD = OD, ID = JD) : MD >= JD ? (fD = nD, ID = MD) : JD >= hD ? (fD = GD, ID = hD) : (fD = OD, ID = JD);
        for (var ED = UD * (RD - 1), QD = UD * fD, XD = 0; XD < UD; ++XD, ++ED, ++QD) {
          var VD = LD[ED];
          LD[ED] = LD[QD], LD[QD] = VD
        }
        var PD = cD[RD - 1];
        cD[RD - 1] = cD[fD], cD[fD] = PD;
        for (ED = UD * (RD - 1), QD = UD * (fD = pD(DD, zD, gD, RD - 1, LD, cD, ID)), XD = 0; XD < UD; ++XD, ++ED, ++QD) {
          VD = LD[ED];
          LD[ED] = LD[QD], LD[QD] = VD
        }
        PD = cD[RD - 1];
        if (cD[RD - 1] = cD[fD], cD[fD] = PD, AD < fD) {
          for (RD = fD - 1; gD < RD && LD[UD * (RD - 1) + zD] === ID;) RD -= 1;
          RD += 1
        } else {
          if (!(fD < AD)) break;
          for (gD = fD + 1; gD < RD && LD[UD * gD + zD] === ID;) gD += 1
        }
      }
      return pD(DD, zD, wD, AD, LD, cD, LD[UD * AD + zD])
    };
    var pD = wD(38305)("lo<p0", ["p0"]),
      sD = 8;

    function KD(DD, zD, wD, pD, sD, KD) {
      for (var rD = 2 * DD, LD = rD * (wD + 1) + zD, cD = wD + 1; cD < pD; ++cD, LD += rD)
        for (var gD = sD[LD], RD = cD, AD = rD * (cD - 1); RD > wD && sD[AD + zD] > gD; --RD, AD -= rD) {
          for (var UD = AD, fD = AD + rD, ID = 0; ID < rD; ++ID, ++UD, ++fD) {
            var BD = sD[UD];
            sD[UD] = sD[fD], sD[fD] = BD
          }
          var GD = KD[RD];
          KD[RD] = KD[RD - 1], KD[RD - 1] = GD
        }
    }
  },
  38305: DD => {
    DD.exports = function(DD, wD) {
      var pD = "abcdef".split("").concat(wD),
        sD = [];
      DD.indexOf("lo") >= 0 && sD.push("lo=e[k+n]");
      DD.indexOf("hi") >= 0 && sD.push("hi=e[k+o]");
      return pD.push(zD.replace("_", sD.join()).replace("$", DD)), Function.apply(void 0, pD)
    };
    var zD = "for(var j=2*a,k=j*c,l=k,m=c,n=b,o=a+b,p=c;d>p;++p,k+=j){var _;if($)if(m===p)m+=1,l+=j;else{for(var s=0;j>s;++s){var t=e[k+s];e[k+s]=e[l],e[l++]=t}var u=f[p];f[p]=f[m],f[m++]=u}}return m"
  },
  38279: DD => {
    DD.exports = function(DD, pD) {
      pD <= 4 * zD ? wD(0, pD - 1, DD) : gD(0, pD - 1, DD)
    };
    var zD = 32;

    function wD(DD, zD, wD) {
      for (var pD = 2 * (DD + 1), sD = DD + 1; sD <= zD; ++sD) {
        for (var KD = wD[pD++], rD = wD[pD++], LD = sD, cD = pD - 2; LD-- > DD;) {
          var gD = wD[cD - 2],
            RD = wD[cD - 1];
          if (gD < KD) break;
          if (gD === KD && RD < rD) break;
          wD[cD] = gD, wD[cD + 1] = RD, cD -= 2
        }
        wD[cD] = KD, wD[cD + 1] = rD
      }
    }

    function pD(DD, zD, wD) {
      zD *= 2;
      var pD = wD[DD *= 2],
        sD = wD[DD + 1];
      wD[DD] = wD[zD], wD[DD + 1] = wD[zD + 1], wD[zD] = pD, wD[zD + 1] = sD
    }

    function sD(DD, zD, wD) {
      zD *= 2, wD[DD *= 2] = wD[zD], wD[DD + 1] = wD[zD + 1]
    }

    function KD(DD, zD, wD, pD) {
      zD *= 2, wD *= 2;
      var sD = pD[DD *= 2],
        KD = pD[DD + 1];
      pD[DD] = pD[zD], pD[DD + 1] = pD[zD + 1], pD[zD] = pD[wD], pD[zD + 1] = pD[wD + 1], pD[wD] = sD, pD[wD + 1] = KD
    }

    function rD(DD, zD, wD, pD, sD) {
      zD *= 2, sD[DD *= 2] = sD[zD], sD[zD] = wD, sD[DD + 1] = sD[zD + 1], sD[zD + 1] = pD
    }

    function LD(DD, zD, wD) {
      zD *= 2;
      var pD = wD[DD *= 2],
        sD = wD[zD];
      return !(pD < sD) && (pD !== sD || wD[DD + 1] > wD[zD + 1])
    }

    function cD(DD, zD, wD, pD) {
      var sD = pD[DD *= 2];
      return sD < zD || sD === zD && pD[DD + 1] < wD
    }

    function gD(DD, RD, AD) {
      var UD = (RD - DD + 1) / 6 | 0,
        fD = DD + UD,
        ID = RD - UD,
        BD = DD + RD >> 1,
        GD = BD - UD,
        hD = BD + UD,
        nD = fD,
        MD = GD,
        OD = BD,
        JD = hD,
        ED = ID,
        QD = DD + 1,
        XD = RD - 1,
        VD = 0;
      LD(nD, MD, AD) && (VD = nD, nD = MD, MD = VD), LD(JD, ED, AD) && (VD = JD, JD = ED, ED = VD), LD(nD, OD, AD) && (VD = nD, nD = OD, OD = VD), LD(MD, OD, AD) && (VD = MD, MD = OD, OD = VD), LD(nD, JD, AD) && (VD = nD, nD = JD, JD = VD), LD(OD, JD, AD) && (VD = OD, OD = JD, JD = VD), LD(MD, ED, AD) && (VD = MD, MD = ED, ED = VD), LD(MD, OD, AD) && (VD = MD, MD = OD, OD = VD), LD(JD, ED, AD) && (VD = JD, JD = ED, ED = VD);
      for (var PD = AD[2 * MD], CD = AD[2 * MD + 1], xD = AD[2 * JD], TD = AD[2 * JD + 1], bD = 2 * nD, jD = 2 * OD, dD = 2 * ED, SD = 2 * fD, iD = 2 * BD, lD = 2 * ID, WD = 0; WD < 2; ++WD) {
        var ND = AD[bD + WD],
          ZD = AD[jD + WD],
          yD = AD[dD + WD];
        AD[SD + WD] = ND, AD[iD + WD] = ZD, AD[lD + WD] = yD
      }
      sD(GD, DD, AD), sD(hD, RD, AD);
      for (var kD = QD; kD <= XD; ++kD)
        if (cD(kD, PD, CD, AD)) kD !== QD && pD(kD, QD, AD), ++QD;
        else if (!cD(kD, xD, TD, AD))
        for (;;) {
          if (cD(XD, xD, TD, AD)) {
            cD(XD, PD, CD, AD) ? (KD(kD, QD, XD, AD), ++QD, --XD) : (pD(kD, XD, AD), --XD);
            break
          }
          if (--XD < kD) break
        }
      rD(DD, QD - 1, PD, CD, AD), rD(RD, XD + 1, xD, TD, AD), QD - 2 - DD <= zD ? wD(DD, QD - 2, AD) : gD(DD, QD - 2, AD), RD - (XD + 2) <= zD ? wD(XD + 2, RD, AD) : gD(XD + 2, RD, AD), XD - QD <= zD ? wD(QD, XD, AD) : gD(QD, XD, AD)
    }
  },
  38273: (DD, zD, wD) => {
    DD.exports = {
      init: function(DD) {
        var zD = sD.nextPow2(DD);
        cD.length < zD && (pD.free(cD), cD = pD.mallocInt32(zD));
        gD.length < zD && (pD.free(gD), gD = pD.mallocInt32(zD));
        RD.length < zD && (pD.free(RD), RD = pD.mallocInt32(zD));
        AD.length < zD && (pD.free(AD), AD = pD.mallocInt32(zD));
        UD.length < zD && (pD.free(UD), UD = pD.mallocInt32(zD));
        fD.length < zD && (pD.free(fD), fD = pD.mallocInt32(zD));
        var wD = 8 * zD;
        ID.length < wD && (pD.free(ID), ID = pD.mallocDouble(wD))
      },
      sweepBipartite: function(DD, zD, wD, pD, sD, LD, UD, fD, hD, nD) {
        for (var MD = 0, OD = 2 * DD, JD = DD - 1, ED = OD - 1, QD = wD; QD < pD; ++QD) {
          var XD = LD[QD],
            VD = OD * QD;
          ID[MD++] = sD[VD + JD], ID[MD++] = -(XD + 1), ID[MD++] = sD[VD + ED], ID[MD++] = XD
        }
        for (QD = UD; QD < fD; ++QD) {
          XD = nD[QD] + rD;
          var PD = OD * QD;
          ID[MD++] = hD[PD + JD], ID[MD++] = -XD, ID[MD++] = hD[PD + ED], ID[MD++] = XD
        }
        var CD = MD >>> 1;
        KD(ID, CD);
        var xD = 0,
          TD = 0;
        for (QD = 0; QD < CD; ++QD) {
          var bD = 0 | ID[2 * QD + 1];
          if (bD >= rD) BD(RD, AD, TD--, bD = bD - rD | 0);
          else if (bD >= 0) BD(cD, gD, xD--, bD);
          else if (bD <= -rD) {
            bD = -bD - rD | 0;
            for (var jD = 0; jD < xD; ++jD) {
              if (void 0 !== (dD = zD(cD[jD], bD))) return dD
            }
            GD(RD, AD, TD++, bD)
          } else {
            bD = -bD - 1 | 0;
            for (jD = 0; jD < TD; ++jD) {
              var dD;
              if (void 0 !== (dD = zD(bD, RD[jD]))) return dD
            }
            GD(cD, gD, xD++, bD)
          }
        }
      },
      sweepComplete: function(DD, zD, wD, pD, sD, rD, LD, hD, nD, MD) {
        for (var OD = 0, JD = 2 * DD, ED = DD - 1, QD = JD - 1, XD = wD; XD < pD; ++XD) {
          var VD = rD[XD] + 1 << 1,
            PD = JD * XD;
          ID[OD++] = sD[PD + ED], ID[OD++] = -VD, ID[OD++] = sD[PD + QD], ID[OD++] = VD
        }
        for (XD = LD; XD < hD; ++XD) {
          VD = MD[XD] + 1 << 1;
          var CD = JD * XD;
          ID[OD++] = nD[CD + ED], ID[OD++] = 1 | -VD, ID[OD++] = nD[CD + QD], ID[OD++] = 1 | VD
        }
        var xD = OD >>> 1;
        KD(ID, xD);
        var TD = 0,
          bD = 0,
          jD = 0;
        for (XD = 0; XD < xD; ++XD) {
          var dD = 0 | ID[2 * XD + 1],
            SD = 1 & dD;
          if (XD < xD - 1 && dD >> 1 === ID[2 * XD + 3] >> 1 && (SD = 2, XD += 1), dD < 0) {
            for (var iD = -(dD >> 1) - 1, lD = 0; lD < jD; ++lD) {
              if (void 0 !== (WD = zD(UD[lD], iD))) return WD
            }
            if (0 !== SD)
              for (lD = 0; lD < TD; ++lD) {
                if (void 0 !== (WD = zD(cD[lD], iD))) return WD
              }
            if (1 !== SD)
              for (lD = 0; lD < bD; ++lD) {
                var WD;
                if (void 0 !== (WD = zD(RD[lD], iD))) return WD
              }
            0 === SD ? GD(cD, gD, TD++, iD) : 1 === SD ? GD(RD, AD, bD++, iD) : 2 === SD && GD(UD, fD, jD++, iD)
          } else {
            iD = (dD >> 1) - 1;
            0 === SD ? BD(cD, gD, TD--, iD) : 1 === SD ? BD(RD, AD, bD--, iD) : 2 === SD && BD(UD, fD, jD--, iD)
          }
        }
      },
      scanBipartite: function(DD, zD, wD, pD, sD, LD, RD, AD, UD, fD, hD, nD) {
        var MD = 0,
          OD = 2 * DD,
          JD = zD,
          ED = zD + DD,
          QD = 1,
          XD = 1;
        pD ? XD = rD : QD = rD;
        for (var VD = sD; VD < LD; ++VD) {
          var PD = VD + QD,
            CD = OD * VD;
          ID[MD++] = RD[CD + JD], ID[MD++] = -PD, ID[MD++] = RD[CD + ED], ID[MD++] = PD
        }
        for (VD = UD; VD < fD; ++VD) {
          PD = VD + XD;
          var xD = OD * VD;
          ID[MD++] = hD[xD + JD], ID[MD++] = -PD
        }
        var TD = MD >>> 1;
        KD(ID, TD);
        var bD = 0;
        for (VD = 0; VD < TD; ++VD) {
          var jD = 0 | ID[2 * VD + 1];
          if (jD < 0) {
            var dD = !1;
            if ((PD = -jD) >= rD ? (dD = !pD, PD -= rD) : (dD = !!pD, PD -= 1), dD) GD(cD, gD, bD++, PD);
            else {
              var SD = nD[PD],
                iD = OD * PD,
                lD = hD[iD + zD + 1],
                WD = hD[iD + zD + 1 + DD];
              DD: for (var ND = 0; ND < bD; ++ND) {
                var ZD = cD[ND],
                  yD = OD * ZD;
                if (!(WD < RD[yD + zD + 1] || RD[yD + zD + 1 + DD] < lD)) {
                  for (var kD = zD + 2; kD < DD; ++kD)
                    if (hD[iD + kD + DD] < RD[yD + kD] || RD[yD + kD + DD] < hD[iD + kD]) continue DD;
                  var mD, eD = AD[ZD];
                  if (void 0 !== (mD = pD ? wD(SD, eD) : wD(eD, SD))) return mD
                }
              }
            }
          } else BD(cD, gD, bD--, jD - QD)
        }
      },
      scanComplete: function(DD, zD, wD, pD, sD, LD, gD, RD, AD, UD, fD) {
        for (var BD = 0, GD = 2 * DD, hD = zD, nD = zD + DD, MD = pD; MD < sD; ++MD) {
          var OD = MD + rD,
            JD = GD * MD;
          ID[BD++] = LD[JD + hD], ID[BD++] = -OD, ID[BD++] = LD[JD + nD], ID[BD++] = OD
        }
        for (MD = RD; MD < AD; ++MD) {
          OD = MD + 1;
          var ED = GD * MD;
          ID[BD++] = UD[ED + hD], ID[BD++] = -OD
        }
        var QD = BD >>> 1;
        KD(ID, QD);
        var XD = 0;
        for (MD = 0; MD < QD; ++MD) {
          var VD = 0 | ID[2 * MD + 1];
          if (VD < 0) {
            if ((OD = -VD) >= rD) cD[XD++] = OD - rD;
            else {
              var PD = fD[OD -= 1],
                CD = GD * OD,
                xD = UD[CD + zD + 1],
                TD = UD[CD + zD + 1 + DD];
              DD: for (var bD = 0; bD < XD; ++bD) {
                var jD = cD[bD],
                  dD = gD[jD];
                if (dD === PD) break;
                var SD = GD * jD;
                if (!(TD < LD[SD + zD + 1] || LD[SD + zD + 1 + DD] < xD)) {
                  for (var iD = zD + 2; iD < DD; ++iD)
                    if (UD[CD + iD + DD] < LD[SD + iD] || LD[SD + iD + DD] < UD[CD + iD]) continue DD;
                  var lD = wD(dD, PD);
                  if (void 0 !== lD) return lD
                }
              }
            }
          } else {
            for (OD = VD - rD, bD = XD - 1; bD >= 0; --bD)
              if (cD[bD] === OD) {
                for (iD = bD + 1; iD < XD; ++iD) cD[iD - 1] = cD[iD];
                break
              }-- XD
          }
        }
      }
    };
    var pD = wD(38252),
      sD = wD(38256),
      KD = wD(38279),
      rD = 1 << 28,
      LD = 1024,
      cD = pD.mallocInt32(LD),
      gD = pD.mallocInt32(LD),
      RD = pD.mallocInt32(LD),
      AD = pD.mallocInt32(LD),
      UD = pD.mallocInt32(LD),
      fD = pD.mallocInt32(LD),
      ID = pD.mallocDouble(8192);

    function BD(DD, zD, wD, pD) {
      var sD = zD[pD],
        KD = DD[wD - 1];
      DD[sD] = KD, zD[KD] = sD
    }

    function GD(DD, zD, wD, pD) {
      DD[wD] = pD, zD[pD] = wD
    }
  },
  38259: DD => {
    function zD(DD, wD, pD) {
      var sD = 0 | DD[pD];
      if (sD <= 0) return [];
      var KD, rD = new Array(sD);
      if (pD === DD.length - 1)
        for (KD = 0; KD < sD; ++KD) rD[KD] = wD;
      else
        for (KD = 0; KD < sD; ++KD) rD[KD] = zD(DD, wD, pD + 1);
      return rD
    }
    DD.exports = function(DD, wD) {
      switch ("undefined" === typeof wD && (wD = 0), typeof DD) {
        case "number":
          if (DD > 0) return function(DD, zD) {
            var wD, pD;
            for (wD = new Array(DD), pD = 0; pD < DD; ++pD) wD[pD] = zD;
            return wD
          }(0 | DD, wD);
          break;
        case "object":
          if ("number" === typeof DD.length) return zD(DD, wD, 0)
      }
      return []
    }
  },
  38204: (DD, zD, wD) => {
    DD.exports = function() {
      var DD = this;
      this.components = {}, this.comps = this.components;
      var zD = this.components,
        wD = 1,
        sD = {},
        KD = [],
        rD = [],
        LD = {
          timeout: !1,
          removals: [],
          multiComps: []
        };

      function cD(DD, wD) {
        var pD = zD[wD],
          KD = sD[wD],
          rD = KD.hash[DD];
        rD && (KD.remove(DD), pD.hT && (pD.multi ? (rD.forEach((zD => {
          zD && pD.hT(DD, zD)
        })), rD.length = 0) : pD.hT(DD, rD)), LD.removals.push(KD), gD())
      }

      function gD() {
        LD.timeout || (LD.timeout = !0, setTimeout(RD, 1))
      }

      function RD() {
        LD.timeout = !1, AD()
      }

      function AD() {
        LD.multiComps.length && function(DD) {
          for (var zD = 0; zD < DD.length; zD++) {
            var {
              entID: wD,
              data: pD
            } = DD[zD], sD = pD.hash[wD];
            if (sD) {
              for (var KD = 0; KD < sD.length; KD++) sD[KD] || (sD.splice(KD, 1), KD--);
              0 === sD.length && (pD.remove(wD), LD.removals.push(pD))
            }
          }
          DD.length = 0
        }(LD.multiComps), LD.removals.length && function(DD) {
          for (var zD = 0; zD < DD.length; zD++) {
            DD[zD].flush()
          }
          DD.length = 0
        }(LD.removals)
      }
      this.EB = sD, this._systems = KD, this._renderSystems = rD, this.RY = function(zD) {
        var pD = wD++;
        return Array.isArray(zD) && zD.forEach((zD => DD.UW(pD, zD))), pD
      }, this.deleteEntity = function(zD) {
        return Object.keys(sD).forEach((DD => {
          sD[DD].hash[zD] && cD(zD, DD)
        })), DD
      }, this.YzD = function(DD) {
        if (!DD) throw new Error("Missing component definition");
        var wD = DD.name;
        if (!wD) throw new Error("Component definition must have a name property.");
        if ("string" !== typeof wD) throw new Error("Component name must be a string.");
        if ("" === wD) throw new Error("Component name must be a non-empty string.");
        if (sD[wD]) throw new Error(`Component ${wD} already exists.`);
        var LD = {};
        return LD.name = wD, LD.multi = !!DD.multi, LD.order = isNaN(DD.order) ? 99 : DD.order, LD.stateConstructor = DD.stateConstructor || null, LD.state = DD.state || {}, LD.ZJ = DD.ZJ || null, LD.hT = DD.hT || null, LD.system = DD.system || null, LD.mJ = DD.mJ || null, zD[wD] = LD, sD[wD] = new pD, sD[wD]._pendingMultiCleanup = !1, sD[wD]._multiCleanupIDs = LD.multi ? [] : null, LD.system && (KD.push(wD), KD.sort(((DD, wD) => zD[DD].order - zD[wD].order))), LD.mJ && (rD.push(wD), rD.sort(((DD, wD) => zD[DD].order - zD[wD].order))), wD
      }, this.overwriteComponent = function(DD, wD) {
        var pD = zD[DD];
        if (!pD) throw new Error(`Unknown component: ${DD}`);
        if (!wD) throw new Error("Missing component definition");
        if (pD.name !== wD.name) throw new Error("Overwriting component must use the same name property.");
        var LD = {};
        LD.name = DD, LD.multi = !!wD.multi, LD.order = isNaN(wD.order) ? 99 : wD.order, LD.state = wD.state || {}, LD.ZJ = wD.ZJ || null, LD.hT = wD.hT || null, LD.system = wD.system || null, LD.mJ = wD.mJ || null, zD[DD] = LD, sD[DD]._pendingMultiCleanup = !1, sD[DD]._multiCleanupIDs = LD.multi ? [] : null;
        var cD = KD.indexOf(DD);
        LD.system && cD < 0 && KD.push(DD), !LD.system && cD >= 0 && KD.splice(cD, 1), KD.sort(((DD, wD) => zD[DD].order - zD[wD].order));
        var gD = rD.indexOf(DD);
        LD.mJ && gD < 0 && rD.push(DD), !LD.mJ && gD >= 0 && rD.splice(gD, 1), rD.sort(((DD, wD) => zD[DD].order - zD[wD].order));
        var RD = LD.state;
        return this.rW(DD).forEach((DD => {
          for (var zD in RD) zD in DD || (DD[zD] = RD[zD]);
          LD.ZJ && LD.ZJ(DD.cW, DD)
        })), DD
      }, this.deleteComponent = function(wD) {
        var pD = sD[wD];
        if (!pD) throw new Error(`Unknown component: ${wD}`);
        pD.flush(), pD.list.forEach((DD => {
          DD && cD(DD.cW || DD[0].cW, wD)
        }));
        var LD = KD.indexOf(wD),
          gD = rD.indexOf(wD);
        return LD > -1 && KD.splice(LD, 1), gD > -1 && rD.splice(gD, 1), sD[wD].dispose(), delete sD[wD], delete zD[wD], DD
      }, this.UW = function(DD, wD, pD) {
        var KD, rD = zD[wD],
          LD = sD[wD];
        if (!LD) throw new Error(`Unknown component: ${wD}.`);
        if (LD.hash[DD] && !rD.multi) throw new Error(`Entity ${DD} already has component: ${wD}.`);
        if (rD.stateConstructor) {
          if (!(KD = new rD.stateConstructor).hasOwnProperty("cW")) throw new Error(`Component ${rD.name} stateConstructor type does not have property __id`);
          Object.assign(KD, rD.state, pD)
        } else KD = {
          cW: DD,
          ...rD.state,
          ...pD
        };
        if (KD.cW = DD, rD.multi) {
          var cD = LD.hash[DD];
          cD || (cD = [], LD.add(DD, cD)), cD.push(KD)
        } else LD.add(DD, KD);
        return rD.ZJ && rD.ZJ(DD, KD), this
      }, this.aDD = function(DD, zD) {
        var wD = sD[zD];
        if (!wD) throw new Error(`Unknown component: ${zD}.`);
        return !!wD.hash[DD]
      }, this.fW = function(zD, wD) {
        if (!sD[wD]) throw new Error(`Unknown component: ${wD}.`);
        return cD(zD, wD), DD
      }, this.getState = function(DD, zD) {
        var wD = sD[zD];
        if (!wD) throw new Error(`Unknown component: ${zD}.`);
        return wD.hash[DD]
      }, this.rW = function(DD) {
        var zD = sD[DD];
        if (!zD) throw new Error(`Unknown component: ${DD}.`);
        return AD(), zD.list
      }, this.xzD = function(DD) {
        if (!sD[DD]) throw new Error(`Unknown component: ${DD}.`);
        var zD = sD[DD].hash;
        return DD => zD[DD]
      }, this.izD = function(DD) {
        if (!sD[DD]) throw new Error(`Unknown component: ${DD}.`);
        var zD = sD[DD].hash;
        return DD => !!zD[DD]
      }, this.DU = function(wD) {
        AD();
        for (var pD = 0; pD < KD.length; pD++) {
          var rD = KD[pD],
            LD = zD[rD],
            cD = sD[rD];
          LD.system(wD, cD.list), AD()
        }
        return DD
      }, this.render = function(wD) {
        AD();
        for (var pD = 0; pD < rD.length; pD++) {
          var KD = rD[pD],
            LD = zD[KD],
            cD = sD[KD];
          LD.mJ(wD, cD.list), AD()
        }
        return DD
      }, this.removeMultiComponent = function(wD, pD, KD) {
        var rD = zD[pD],
          cD = sD[pD];
        if (!cD) throw new Error(`Unknown component: ${pD}.`);
        if (!rD.multi) throw new Error("removeMultiComponent called on non-multi component");
        return function(DD, zD, wD, pD) {
          var sD = wD.hash[DD];
          if (sD) {
            var KD = sD[pD];
            KD && (sD[pD] = null, zD.hT && zD.hT(DD, KD), LD.multiComps.push({
              entID: DD,
              data: wD
            }), gD())
          }
        }(wD, rD, cD, KD), DD
      }
    };
    var pD = wD(38211)
  },
  38211: DD => {
    function zD(DD, zD) {
      var wD = DD._map[zD];
      if (delete DD.hash[zD], delete DD._map[zD], wD === DD.list.length - 1) DD.list.pop(), DD._idList.pop();
      else {
        var pD = DD.list.pop();
        DD.list[wD] = pD;
        var sD = DD._idList.pop();
        DD._idList[wD] = sD, DD._map[sD] = wD
      }
    }
    DD.exports = class {
      constructor() {
        this.list = [], this.hash = {}, this._map = {}, this._idList = [], this._pendingRemovals = []
      }
      add(DD, zD) {
        if ("number" === typeof this._map[DD]) {
          var wD = this._map[DD];
          this.hash[DD] = zD, this.list[wD] = zD, this._idList[wD] = DD
        } else this._map[DD] = this.list.length, this.hash[DD] = zD, this.list.push(zD), this._idList.push(DD)
      }
      remove(DD) {
        var zD = this._map[DD];
        this.hash[DD] = null, this.list[zD] = null, this._pendingRemovals.push(DD)
      }
      dispose() {
        this.list = null, this.hash = null, this._map = null, this._idList = null, this._pendingRemovals.length = 0
      }
      flush() {
        for (var DD = 0; DD < this._pendingRemovals.length; DD++) {
          var wD = this._pendingRemovals[DD];
          null === this.hash[wD] && zD(this, wD)
        }
        this._pendingRemovals.length = 0
      }
    }
  },
  38029: (DD, zD, wD) => {
    DD = wD.nmd(DD);
    var pD = "__lodash_hash_undefined__",
      sD = 9007199254740991,
      KD = "[object Arguments]",
      rD = "[object Boolean]",
      LD = "[object Date]",
      cD = "[object Function]",
      gD = "[object GeneratorFunction]",
      RD = "[object Map]",
      AD = "[object Number]",
      UD = "[object Object]",
      fD = "[object Promise]",
      ID = "[object RegExp]",
      BD = "[object Set]",
      GD = "[object String]",
      hD = "[object Symbol]",
      nD = "[object WeakMap]",
      MD = "[object ArrayBuffer]",
      OD = "[object DataView]",
      JD = "[object Float32Array]",
      ED = "[object Float64Array]",
      QD = "[object Int8Array]",
      XD = "[object Int16Array]",
      VD = "[object Int32Array]",
      PD = "[object Uint8Array]",
      CD = "[object Uint8ClampedArray]",
      xD = "[object Uint16Array]",
      TD = "[object Uint32Array]",
      bD = /\w*$/,
      jD = /^\[object .+?Constructor\]$/,
      dD = /^(?:0|[1-9]\d*)$/,
      SD = {};
    SD[KD] = SD["[object Array]"] = SD[MD] = SD[OD] = SD[rD] = SD[LD] = SD[JD] = SD[ED] = SD[QD] = SD[XD] = SD[VD] = SD[RD] = SD[AD] = SD[UD] = SD[ID] = SD[BD] = SD[GD] = SD[hD] = SD[PD] = SD[CD] = SD[xD] = SD[TD] = !0, SD["[object Error]"] = SD[cD] = SD[nD] = !1;
    var iD = "object" == typeof wD.g && wD.g && wD.g.Object === Object && wD.g,
      lD = "object" == typeof self && self && self.Object === Object && self,
      WD = iD || lD || Function("return this")(),
      ND = zD && !zD.nodeType && zD,
      ZD = ND && DD && !DD.nodeType && DD,
      yD = ZD && ZD.exports === ND;

    function kD(DD, zD) {
      return DD.set(zD[0], zD[1]), DD
    }

    function mD(DD, zD) {
      return DD.add(zD), DD
    }

    function eD(DD, zD, wD, pD) {
      var sD = -1,
        KD = DD ? DD.length : 0;
      for (pD && KD && (wD = DD[++sD]); ++sD < KD;) wD = zD(wD, DD[sD], sD, DD);
      return wD
    }

    function oD(DD) {
      var zD = !1;
      if (null != DD && "function" != typeof DD.toString) try {
        zD = !!(DD + "")
      } catch (wD) {}
      return zD
    }

    function aD(DD) {
      var zD = -1,
        wD = Array(DD.size);
      return DD.forEach((function(DD, pD) {
        wD[++zD] = [pD, DD]
      })), wD
    }

    function uD(DD, zD) {
      return function(wD) {
        return DD(zD(wD))
      }
    }

    function vD(DD) {
      var zD = -1,
        wD = Array(DD.size);
      return DD.forEach((function(DD) {
        wD[++zD] = DD
      })), wD
    }
    var tD = Array.prototype,
      FD = Function.prototype,
      YD = Object.prototype,
      HD = WD["__core-js_shared__"],
      qD = function() {
        var DD = /[^.]+$/.exec(HD && HD.keys && HD.keys.IE_PROTO || "");
        return DD ? "Symbol(src)_1." + DD : ""
      }(),
      Dz = FD.toString,
      zz = YD.hasOwnProperty,
      wz = YD.toString,
      pz = RegExp("^" + Dz.call(zz).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
      sz = yD ? WD.nI : void 0,
      Kz = WD.Symbol,
      rz = WD.Uint8Array,
      Lz = uD(Object.getPrototypeOf, Object),
      cz = Object.create,
      gz = YD.propertyIsEnumerable,
      Rz = tD.splice,
      Az = Object.getOwnPropertySymbols,
      Uz = sz ? sz.isBuffer : void 0,
      fz = uD(Object.keys, Object),
      Iz = yz(WD, "DataView"),
      Bz = yz(WD, "Map"),
      Gz = yz(WD, "Promise"),
      hz = yz(WD, "Set"),
      nz = yz(WD, "WeakMap"),
      Mz = yz(Object, "create"),
      Oz = az(Iz),
      Jz = az(Bz),
      Ez = az(Gz),
      Qz = az(hz),
      Xz = az(nz),
      Vz = Kz ? Kz.prototype : void 0,
      Pz = Vz ? Vz.valueOf : void 0;

    function Cz(DD) {
      var zD = -1,
        wD = DD ? DD.length : 0;
      for (this.clear(); ++zD < wD;) {
        var pD = DD[zD];
        this.set(pD[0], pD[1])
      }
    }

    function xz(DD) {
      var zD = -1,
        wD = DD ? DD.length : 0;
      for (this.clear(); ++zD < wD;) {
        var pD = DD[zD];
        this.set(pD[0], pD[1])
      }
    }

    function Tz(DD) {
      var zD = -1,
        wD = DD ? DD.length : 0;
      for (this.clear(); ++zD < wD;) {
        var pD = DD[zD];
        this.set(pD[0], pD[1])
      }
    }

    function bz(DD) {
      this.__data__ = new xz(DD)
    }

    function jz(DD, zD) {
      var wD = vz(DD) || function(DD) {
          return function(DD) {
            return function(DD) {
              return !!DD && "object" == typeof DD
            }(DD) && tz(DD)
          }(DD) && zz.call(DD, "callee") && (!gz.call(DD, "callee") || wz.call(DD) == KD)
        }(DD) ? function(DD, zD) {
          for (var wD = -1, pD = Array(DD); ++wD < DD;) pD[wD] = zD(wD);
          return pD
        }(DD.length, String) : [],
        pD = wD.length,
        sD = !!pD;
      for (var rD in DD) !zD && !zz.call(DD, rD) || sD && ("length" == rD || ez(rD, pD)) || wD.push(rD);
      return wD
    }

    function dz(DD, zD, wD) {
      var pD = DD[zD];
      zz.call(DD, zD) && uz(pD, wD) && (void 0 !== wD || zD in DD) || (DD[zD] = wD)
    }

    function Sz(DD, zD) {
      for (var wD = DD.length; wD--;)
        if (uz(DD[wD][0], zD)) return wD;
      return -1
    }

    function iz(DD, zD, wD, pD, sD, fD, nD) {
      var jD;
      if (pD && (jD = fD ? pD(DD, sD, fD, nD) : pD(DD)), void 0 !== jD) return jD;
      if (!Hz(DD)) return DD;
      var dD = vz(DD);
      if (dD) {
        if (jD = function(DD) {
            var zD = DD.length,
              wD = DD.constructor(zD);
            zD && "string" == typeof DD[0] && zz.call(DD, "index") && (wD.index = DD.index, wD.input = DD.input);
            return wD
          }(DD), !zD) return function(DD, zD) {
          var wD = -1,
            pD = DD.length;
          zD || (zD = Array(pD));
          for (; ++wD < pD;) zD[wD] = DD[wD];
          return zD
        }(DD, jD)
      } else {
        var iD = mz(DD),
          lD = iD == cD || iD == gD;
        if (Fz(DD)) return function(DD, zD) {
          if (zD) return DD.slice();
          var wD = new DD.constructor(DD.length);
          return DD.copy(wD), wD
        }(DD, zD);
        if (iD == UD || iD == KD || lD && !fD) {
          if (oD(DD)) return fD ? DD : {};
          if (jD = function(DD) {
              return "function" != typeof DD.constructor || oz(DD) ? {} : (zD = Lz(DD), Hz(zD) ? cz(zD) : {});
              var zD
            }(lD ? {} : DD), !zD) return function(DD, zD) {
            return Nz(DD, kz(DD), zD)
          }(DD, function(DD, zD) {
            return DD && Nz(zD, qz(zD), DD)
          }(jD, DD))
        } else {
          if (!SD[iD]) return fD ? DD : {};
          jD = function(DD, zD, wD, pD) {
            var sD = DD.constructor;
            switch (zD) {
              case MD:
                return Wz(DD);
              case rD:
              case LD:
                return new sD(+DD);
              case OD:
                return function(DD, zD) {
                  var wD = zD ? Wz(DD.buffer) : DD.buffer;
                  return new DD.constructor(wD, DD.byteOffset, DD.byteLength)
                }(DD, pD);
              case JD:
              case ED:
              case QD:
              case XD:
              case VD:
              case PD:
              case CD:
              case xD:
              case TD:
                return function(DD, zD) {
                  var wD = zD ? Wz(DD.buffer) : DD.buffer;
                  return new DD.constructor(wD, DD.byteOffset, DD.length)
                }(DD, pD);
              case RD:
                return function(DD, zD, wD) {
                  var pD = zD ? wD(aD(DD), !0) : aD(DD);
                  return eD(pD, kD, new DD.constructor)
                }(DD, pD, wD);
              case AD:
              case GD:
                return new sD(DD);
              case ID:
                return function(DD) {
                  var zD = new DD.constructor(DD.source, bD.exec(DD));
                  return zD.lastIndex = DD.lastIndex, zD
                }(DD);
              case BD:
                return function(DD, zD, wD) {
                  var pD = zD ? wD(vD(DD), !0) : vD(DD);
                  return eD(pD, mD, new DD.constructor)
                }(DD, pD, wD);
              case hD:
                return KD = DD, Pz ? Object(Pz.call(KD)) : {}
            }
            var KD
          }(DD, iD, iz, zD)
        }
      }
      nD || (nD = new bz);
      var WD = nD.get(DD);
      if (WD) return WD;
      if (nD.set(DD, jD), !dD) var ND = wD ? function(DD) {
        return function(DD, zD, wD) {
          var pD = zD(DD);
          return vz(DD) ? pD : function(DD, zD) {
            for (var wD = -1, pD = zD.length, sD = DD.length; ++wD < pD;) DD[sD + wD] = zD[wD];
            return DD
          }(pD, wD(DD))
        }(DD, qz, kz)
      }(DD) : qz(DD);
      return function(DD, zD) {
        for (var wD = -1, pD = DD ? DD.length : 0; ++wD < pD && !1 !== zD(DD[wD], wD, DD););
      }(ND || DD, (function(sD, KD) {
        ND && (sD = DD[KD = sD]), dz(jD, KD, iz(sD, zD, wD, pD, KD, DD, nD))
      })), jD
    }

    function lz(DD) {
      return !(!Hz(DD) || (zD = DD, qD && qD in zD)) && (Yz(DD) || oD(DD) ? pz : jD).test(az(DD));
      var zD
    }

    function Wz(DD) {
      var zD = new DD.constructor(DD.byteLength);
      return new rz(zD).set(new rz(DD)), zD
    }

    function Nz(DD, zD, wD, pD) {
      wD || (wD = {});
      for (var sD = -1, KD = zD.length; ++sD < KD;) {
        var rD = zD[sD],
          LD = pD ? pD(wD[rD], DD[rD], rD, wD, DD) : void 0;
        dz(wD, rD, void 0 === LD ? DD[rD] : LD)
      }
      return wD
    }

    function Zz(DD, zD) {
      var wD = DD.__data__;
      return function(DD) {
        var zD = typeof DD;
        return "string" == zD || "number" == zD || "symbol" == zD || "boolean" == zD ? "__proto__" !== DD : null === DD
      }(zD) ? wD["string" == typeof zD ? "string" : "hash"] : wD.map
    }

    function yz(DD, zD) {
      var wD = function(DD, zD) {
        return null == DD ? void 0 : DD[zD]
      }(DD, zD);
      return lz(wD) ? wD : void 0
    }
    Cz.prototype.clear = function() {
      this.__data__ = Mz ? Mz(null) : {}
    }, Cz.prototype.delete = function(DD) {
      return this.has(DD) && delete this.__data__[DD]
    }, Cz.prototype.get = function(DD) {
      var zD = this.__data__;
      if (Mz) {
        var wD = zD[DD];
        return wD === pD ? void 0 : wD
      }
      return zz.call(zD, DD) ? zD[DD] : void 0
    }, Cz.prototype.has = function(DD) {
      var zD = this.__data__;
      return Mz ? void 0 !== zD[DD] : zz.call(zD, DD)
    }, Cz.prototype.set = function(DD, zD) {
      return this.__data__[DD] = Mz && void 0 === zD ? pD : zD, this
    }, xz.prototype.clear = function() {
      this.__data__ = []
    }, xz.prototype.delete = function(DD) {
      var zD = this.__data__,
        wD = Sz(zD, DD);
      return !(wD < 0) && (wD == zD.length - 1 ? zD.pop() : Rz.call(zD, wD, 1), !0)
    }, xz.prototype.get = function(DD) {
      var zD = this.__data__,
        wD = Sz(zD, DD);
      return wD < 0 ? void 0 : zD[wD][1]
    }, xz.prototype.has = function(DD) {
      return Sz(this.__data__, DD) > -1
    }, xz.prototype.set = function(DD, zD) {
      var wD = this.__data__,
        pD = Sz(wD, DD);
      return pD < 0 ? wD.push([DD, zD]) : wD[pD][1] = zD, this
    }, Tz.prototype.clear = function() {
      this.__data__ = {
        hash: new Cz,
        map: new(Bz || xz),
        string: new Cz
      }
    }, Tz.prototype.delete = function(DD) {
      return Zz(this, DD).delete(DD)
    }, Tz.prototype.get = function(DD) {
      return Zz(this, DD).get(DD)
    }, Tz.prototype.has = function(DD) {
      return Zz(this, DD).has(DD)
    }, Tz.prototype.set = function(DD, zD) {
      return Zz(this, DD).set(DD, zD), this
    }, bz.prototype.clear = function() {
      this.__data__ = new xz
    }, bz.prototype.delete = function(DD) {
      return this.__data__.delete(DD)
    }, bz.prototype.get = function(DD) {
      return this.__data__.get(DD)
    }, bz.prototype.has = function(DD) {
      return this.__data__.has(DD)
    }, bz.prototype.set = function(DD, zD) {
      var wD = this.__data__;
      if (wD instanceof xz) {
        var pD = wD.__data__;
        if (!Bz || pD.length < 199) return pD.push([DD, zD]), this;
        wD = this.__data__ = new Tz(pD)
      }
      return wD.set(DD, zD), this
    };
    var kz = Az ? uD(Az, Object) : function() {
        return []
      },
      mz = function(DD) {
        return wz.call(DD)
      };

    function ez(DD, zD) {
      return !!(zD = null == zD ? sD : zD) && ("number" == typeof DD || dD.test(DD)) && DD > -1 && DD % 1 == 0 && DD < zD
    }

    function oz(DD) {
      var zD = DD && DD.constructor;
      return DD === ("function" == typeof zD && zD.prototype || YD)
    }

    function az(DD) {
      if (null != DD) {
        try {
          return Dz.call(DD)
        } catch (zD) {}
        try {
          return DD + ""
        } catch (zD) {}
      }
      return ""
    }

    function uz(DD, zD) {
      return DD === zD || DD !== DD && zD !== zD
    }(Iz && mz(new Iz(new ArrayBuffer(1))) != OD || Bz && mz(new Bz) != RD || Gz && mz(Gz.resolve()) != fD || hz && mz(new hz) != BD || nz && mz(new nz) != nD) && (mz = function(DD) {
      var zD = wz.call(DD),
        wD = zD == UD ? DD.constructor : void 0,
        pD = wD ? az(wD) : void 0;
      if (pD) switch (pD) {
        case Oz:
          return OD;
        case Jz:
          return RD;
        case Ez:
          return fD;
        case Qz:
          return BD;
        case Xz:
          return nD
      }
      return zD
    });
    var vz = Array.isArray;

    function tz(DD) {
      return null != DD && function(DD) {
        return "number" == typeof DD && DD > -1 && DD % 1 == 0 && DD <= sD
      }(DD.length) && !Yz(DD)
    }
    var Fz = Uz || function() {
      return !1
    };

    function Yz(DD) {
      var zD = Hz(DD) ? wz.call(DD) : "";
      return zD == cD || zD == gD
    }

    function Hz(DD) {
      var zD = typeof DD;
      return !!DD && ("object" == zD || "function" == zD)
    }

    function qz(DD) {
      return tz(DD) ? jz(DD) : function(DD) {
        if (!oz(DD)) return fz(DD);
        var zD = [];
        for (var wD in Object(DD)) zz.call(DD, wD) && "constructor" != wD && zD.push(wD);
        return zD
      }(DD)
    }
    DD.exports = function(DD) {
      return iz(DD, !0, !0)
    }
  },
  38429: DD => {
    function zD(DD, zD, wD) {
      for (var pD = DD.length, sD = -1 / 0, KD = 1 / 0, rD = 0; rD < pD; rD++) {
        var LD = (wD[0][rD] - DD[rD]) / zD[rD],
          cD = (wD[1][rD] - DD[rD]) / zD[rD];
        if (LD > cD) {
          var gD = LD;
          LD = cD, cD = gD
        }
        if (cD < sD || LD > KD) return 1 / 0;
        LD > sD && (sD = LD), cD < KD && (KD = cD)
      }
      return sD > KD ? 1 / 0 : sD
    }
    DD.exports = function(DD, wD, pD, sD) {
      var KD = zD(wD, pD, sD);
      if (KD === 1 / 0) DD = null;
      else {
        DD = DD || [];
        for (var rD = 0; rD < wD.length; rD++) DD[rD] = wD[rD] + pD[rD] * KD
      }
      return DD
    }, DD.exports.distance = zD
  },
  37713: (DD, zD, wD) => {
    var pD = wD(37718);

    function sD(DD) {
      for (var zD, wD, sD = 0, KD = DD.length, rD = 0; rD < DD.length;) {
        for (zD = DD[rD], wD = 0; rD < KD && DD[rD] === zD;) ++rD, ++wD;
        sD += pD.log2(wD) / 7 | 0, sD += pD.log2(zD >>> 0) / 7 | 0, sD += 2
      }
      return sD
    }
    zD.size = sD, zD.encode = function(DD, zD) {
      zD || (zD = new Uint8Array(sD(DD)));
      for (var wD, pD, KD = 0, rD = zD.length, LD = 0; LD < DD.length;) {
        for (wD = DD[LD], pD = 0; LD < DD.length && DD[LD] === wD;) ++LD, ++pD;
        for (; KD < rD && pD >= 128;) zD[KD++] = 128 + (127 & pD), pD >>>= 7;
        if (KD >= rD) throw new Error("RLE buffer overflow");
        for (zD[KD++] = pD, wD >>>= 0; KD < rD && wD >= 128;) zD[KD++] = 128 + (127 & wD), wD >>>= 7;
        if (KD >= rD) throw new Error("RLE buffer overflow");
        zD[KD++] = wD
      }
      return zD
    }, zD.decode = function(DD, zD) {
      for (var wD, pD, sD, KD, rD = zD.length, LD = DD.length, cD = 0, gD = 0; gD < LD;) {
        for (wD = 0, pD = 0; gD < LD && DD[gD] >= 128;) wD += (127 & DD[gD++]) << pD, pD += 7;
        if (wD += DD[gD++] << pD, gD >= LD) throw new Error("RLE buffer underrun");
        if (cD + wD > rD) throw new Error("Chunk buffer overflow");
        for (sD = 0, pD = 0; gD < LD && DD[gD] >= 128;) sD += (127 & DD[gD++]) << pD, pD += 7;
        if (gD >= LD) throw new Error("RLE buffer underrun");
        for (sD += DD[gD++] << pD, KD = 0; KD < wD; ++KD) zD[cD++] = sD
      }
      return zD
    }
  },
  37718: (DD, zD) => {
    function wD(DD) {
      var zD = 32;
      return (DD &= -DD) && zD--, 65535 & DD && (zD -= 16), 16711935 & DD && (zD -= 8), 252645135 & DD && (zD -= 4), 858993459 & DD && (zD -= 2), 1431655765 & DD && (zD -= 1), zD
    }
    zD.INT_BITS = 32, zD.INT_MAX = 2147483647, zD.INT_MIN = -1 << 31, zD.sign = function(DD) {
      return (DD > 0) - (DD < 0)
    }, zD.abs = function(DD) {
      var zD = DD >> 31;
      return (DD ^ zD) - zD
    }, zD.min = function(DD, zD) {
      return zD ^ (DD ^ zD) & -(DD < zD)
    }, zD.max = function(DD, zD) {
      return DD ^ (DD ^ zD) & -(DD < zD)
    }, zD.isPow2 = function(DD) {
      return !(DD & DD - 1) && !!DD
    }, zD.log2 = function(DD) {
      var zD, wD;
      return zD = (DD > 65535) << 4, zD |= wD = ((DD >>>= zD) > 255) << 3, zD |= wD = ((DD >>>= wD) > 15) << 2, (zD |= wD = ((DD >>>= wD) > 3) << 1) | (DD >>>= wD) >> 1
    }, zD.log10 = function(DD) {
      return DD >= 1e9 ? 9 : DD >= 1e8 ? 8 : DD >= 1e7 ? 7 : DD >= 1e6 ? 6 : DD >= 1e5 ? 5 : DD >= 1e4 ? 4 : DD >= 1e3 ? 3 : DD >= 100 ? 2 : DD >= 10 ? 1 : 0
    }, zD.popCount = function(DD) {
      return 16843009 * ((DD = (858993459 & (DD -= DD >>> 1 & 1431655765)) + (DD >>> 2 & 858993459)) + (DD >>> 4) & 252645135) >>> 24
    }, zD.countTrailingZeros = wD, zD.nextPow2 = function(DD) {
      return DD += 0 === DD, --DD, DD |= DD >>> 1, DD |= DD >>> 2, DD |= DD >>> 4, DD |= DD >>> 8, (DD |= DD >>> 16) + 1
    }, zD.prevPow2 = function(DD) {
      return DD |= DD >>> 1, DD |= DD >>> 2, DD |= DD >>> 4, DD |= DD >>> 8, (DD |= DD >>> 16) - (DD >>> 1)
    }, zD.parity = function(DD) {
      return DD ^= DD >>> 16, DD ^= DD >>> 8, DD ^= DD >>> 4, 27030 >>> (DD &= 15) & 1
    };
    var pD = new Array(256);
    ! function(DD) {
      for (var zD = 0; zD < 256; ++zD) {
        var wD = zD,
          pD = zD,
          sD = 7;
        for (wD >>>= 1; wD; wD >>>= 1) pD <<= 1, pD |= 1 & wD, --sD;
        DD[zD] = pD << sD & 255
      }
    }(pD), zD.reverse = function(DD) {
      return pD[255 & DD] << 24 | pD[DD >>> 8 & 255] << 16 | pD[DD >>> 16 & 255] << 8 | pD[DD >>> 24 & 255]
    }, zD.interleave2 = function(DD, zD) {
      return (DD = 1431655765 & ((DD = 858993459 & ((DD = 252645135 & ((DD = 16711935 & ((DD &= 65535) | DD << 8)) | DD << 4)) | DD << 2)) | DD << 1)) | (zD = 1431655765 & ((zD = 858993459 & ((zD = 252645135 & ((zD = 16711935 & ((zD &= 65535) | zD << 8)) | zD << 4)) | zD << 2)) | zD << 1)) << 1
    }, zD.deinterleave2 = function(DD, zD) {
      return (DD = 65535 & ((DD = 16711935 & ((DD = 252645135 & ((DD = 858993459 & ((DD = DD >>> zD & 1431655765) | DD >>> 1)) | DD >>> 2)) | DD >>> 4)) | DD >>> 16)) << 16 >> 16
    }, zD.interleave3 = function(DD, zD, wD) {
      return DD = 1227133513 & ((DD = 3272356035 & ((DD = 251719695 & ((DD = 4278190335 & ((DD &= 1023) | DD << 16)) | DD << 8)) | DD << 4)) | DD << 2), (DD |= (zD = 1227133513 & ((zD = 3272356035 & ((zD = 251719695 & ((zD = 4278190335 & ((zD &= 1023) | zD << 16)) | zD << 8)) | zD << 4)) | zD << 2)) << 1) | (wD = 1227133513 & ((wD = 3272356035 & ((wD = 251719695 & ((wD = 4278190335 & ((wD &= 1023) | wD << 16)) | wD << 8)) | wD << 4)) | wD << 2)) << 2
    }, zD.deinterleave3 = function(DD, zD) {
      return (DD = 1023 & ((DD = 4278190335 & ((DD = 251719695 & ((DD = 3272356035 & ((DD = DD >>> zD & 1227133513) | DD >>> 2)) | DD >>> 4)) | DD >>> 8)) | DD >>> 16)) << 22 >> 22
    }, zD.nextCombination = function(DD) {
      var zD = DD | DD - 1;
      return zD + 1 | (~zD & -~zD) - 1 >>> wD(DD) + 1
    }
  },
  37267: (DD, zD, wD) => {
    wD.d(zD, {
      Color3: () => pD.d,
      e: () => pD.h
    });
    var pD = wD(37273);
    (0, pD.i)()
  },
  37752: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => sD
    });
    var pD = wD(37754);
    class sD {
      static GetPlanes(DD) {
        const zD = [];
        for (let wD = 0; wD < 6; wD++) zD.push(new pD.e(0, 0, 0, 0));
        return sD.GetPlanesToRef(DD, zD), zD
      }
      static GetNearPlaneToRef(DD, zD) {
        const wD = DD.m;
        zD.normal.x = wD[3] + wD[2], zD.normal.y = wD[7] + wD[6], zD.normal.z = wD[11] + wD[10], zD.d = wD[15] + wD[14], zD.normalize()
      }
      static GetFarPlaneToRef(DD, zD) {
        const wD = DD.m;
        zD.normal.x = wD[3] - wD[2], zD.normal.y = wD[7] - wD[6], zD.normal.z = wD[11] - wD[10], zD.d = wD[15] - wD[14], zD.normalize()
      }
      static GetLeftPlaneToRef(DD, zD) {
        const wD = DD.m;
        zD.normal.x = wD[3] + wD[0], zD.normal.y = wD[7] + wD[4], zD.normal.z = wD[11] + wD[8], zD.d = wD[15] + wD[12], zD.normalize()
      }
      static GetRightPlaneToRef(DD, zD) {
        const wD = DD.m;
        zD.normal.x = wD[3] - wD[0], zD.normal.y = wD[7] - wD[4], zD.normal.z = wD[11] - wD[8], zD.d = wD[15] - wD[12], zD.normalize()
      }
      static GetTopPlaneToRef(DD, zD) {
        const wD = DD.m;
        zD.normal.x = wD[3] - wD[1], zD.normal.y = wD[7] - wD[5], zD.normal.z = wD[11] - wD[9], zD.d = wD[15] - wD[13], zD.normalize()
      }
      static GetBottomPlaneToRef(DD, zD) {
        const wD = DD.m;
        zD.normal.x = wD[3] + wD[1], zD.normal.y = wD[7] + wD[5], zD.normal.z = wD[11] + wD[9], zD.d = wD[15] + wD[13], zD.normalize()
      }
      static GetPlanesToRef(DD, zD) {
        sD.GetNearPlaneToRef(DD, zD[0]), sD.GetFarPlaneToRef(DD, zD[1]), sD.GetLeftPlaneToRef(DD, zD[2]), sD.GetRightPlaneToRef(DD, zD[3]), sD.GetTopPlaneToRef(DD, zD[4]), sD.GetBottomPlaneToRef(DD, zD[5])
      }
      static IsPointInFrustum(DD, zD) {
        for (let wD = 0; wD < 6; wD++)
          if (zD[wD].dotCoordinate(DD) < 0) return !1;
        return !0
      }
    }
  },
  37754: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => sD
    });
    var pD = wD(37079);
    class sD {
      constructor(DD, zD, wD, sD) {
        this.normal = new pD.s(DD, zD, wD), this.d = sD
      }
      QpD() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new sD(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let DD = this.normal.getHashCode();
        return DD = 397 * DD ^ this.d, DD
      }
      normalize() {
        const DD = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let zD = 0;
        return 0 !== DD && (zD = 1 / DD), this.normal.x *= zD, this.normal.y *= zD, this.normal.z *= zD, this.d *= zD, this
      }
      transform(DD) {
        const zD = sD._TmpMatrix;
        DD.invertToRef(zD);
        const wD = zD.m,
          pD = this.normal.x,
          KD = this.normal.y,
          rD = this.normal.z,
          LD = this.d,
          cD = pD * wD[0] + KD * wD[1] + rD * wD[2] + LD * wD[3],
          gD = pD * wD[4] + KD * wD[5] + rD * wD[6] + LD * wD[7],
          RD = pD * wD[8] + KD * wD[9] + rD * wD[10] + LD * wD[11],
          AD = pD * wD[12] + KD * wD[13] + rD * wD[14] + LD * wD[15];
        return new sD(cD, gD, RD, AD)
      }
      dotCoordinate(DD) {
        return this.normal.x * DD.x + this.normal.y * DD.y + this.normal.z * DD.z + this.d
      }
      copyFromPoints(DD, zD, wD) {
        const pD = zD.x - DD.x,
          sD = zD.y - DD.y,
          KD = zD.z - DD.z,
          rD = wD.x - DD.x,
          LD = wD.y - DD.y,
          cD = wD.z - DD.z,
          gD = sD * cD - KD * LD,
          RD = KD * rD - pD * cD,
          AD = pD * LD - sD * rD,
          UD = Math.sqrt(gD * gD + RD * RD + AD * AD);
        let fD;
        return fD = 0 !== UD ? 1 / UD : 0, this.normal.x = gD * fD, this.normal.y = RD * fD, this.normal.z = AD * fD, this.d = -(this.normal.x * DD.x + this.normal.y * DD.y + this.normal.z * DD.z), this
      }
      isFrontFacingTo(DD, zD) {
        return pD.s.Dot(this.normal, DD) <= zD
      }
      signedDistanceTo(DD) {
        return pD.s.Dot(DD, this.normal) + this.d
      }
      static FromArray(DD) {
        return new sD(DD[0], DD[1], DD[2], DD[3])
      }
      static FromPoints(DD, zD, wD) {
        const pD = new sD(0, 0, 0, 0);
        return pD.copyFromPoints(DD, zD, wD), pD
      }
      static FromPositionAndNormal(DD, zD) {
        const wD = new sD(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(DD, zD, wD)
      }
      static FromPositionAndNormalToRef(DD, zD, wD) {
        return wD.normal.pC(zD), wD.normal.normalize(), wD.d = -DD.dot(wD.normal), wD
      }
      static SignedDistanceToPlaneFromPositionAndNormal(DD, zD, wD) {
        const sD = -(zD.x * DD.x + zD.y * DD.y + zD.z * DD.z);
        return pD.s.Dot(wD, zD) + sD
      }
    }
    sD._TmpMatrix = pD.e.Identity()
  },
  37070: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      Matrix: () => pD.e,
      Quaternion: () => pD.i,
      RegisterMathVector: () => pD.k,
      TmpVectors: () => pD.n,
      Vector2: () => pD.r,
      WI: () => pD.s,
      Vector4: () => pD.t
    });
    var pD = wD(37079);
    (0, pD.k)()
  },
  38074: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => pD
    });
    class pD {
      constructor(DD, zD, wD, pD) {
        this.x = DD, this.y = zD, this.width = wD, this.height = pD
      }
      toGlobal(DD, zD) {
        return new pD(this.x * DD, this.y * zD, this.width * DD, this.height * zD)
      }
      toGlobalToRef(DD, zD, wD) {
        return wD.x = this.x * DD, wD.y = this.y * zD, wD.width = this.width * DD, wD.height = this.height * zD, this
      }
      clone() {
        return new pD(this.x, this.y, this.width, this.height)
      }
    }
  },
  37891: (DD, zD, wD) => {
    function pD() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (DD => {
        const zD = 16 * Math.random() | 0;
        return ("x" === DD ? zD : 3 & zD | 8).toString(16)
      }))
    }
    wD.d(zD, {
      c: () => pD
    })
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);